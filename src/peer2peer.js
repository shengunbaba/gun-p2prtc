import {EventDispatcher, createShortId} from './utils';

export default class Peer2peer extends EventDispatcher {
    constructor(opts) {
        super(opts);
        this.rtcConfiguration = opts.rtcConfiguration || null;
        this.initiator = opts.initiator || false;
        this.offerOptions = opts.offerOptions ||
            {offerToReceiveAudio: true, offerToReceiveVideo: true};
        this.answerOptions = opts.answerOptions || {};
        this.constraints = opts.constraints || {audio: true, video: true};
        this.localStream = new MediaStream();
        this.remoteStream = new MediaStream();

        this._pc = new RTCPeerConnection(this.rtcConfiguration);
        this.id = createShortId();
        this._senders = new Map();

        this._pc.oniceconnectionstatechange = (event) => {
            this._oniceconnectionstatechange(event);
        };
        this._pc.onicegatheringstatechange = (event) => {
            this._oniceconnectionstatechange(event);
        };

        this._pc.onicecandidate = event => this._onicecandidate(event);

        this._pc.ontrack = e => this._onTrack(e);

        this._initStreamPromise = this._initStream(opts);

        this._createDataChannel();
    }

    _createDataChannel() {
        const onopen = () => {
            console.log(this._dataChannel.readyState);
            this.dispatchEvent({type: 'dataChannel-ready'});
        };

        const onclose = () => {
            console.log(this._dataChannel.readyState);
            this.dispatchEvent({type: 'dataChannel-close'});
        };

        if (this.initiator) {
            this._dataChannel = this._pc.createDataChannel('initiator_channel');
            this._dataChannel.onopen = onopen;
            this._dataChannel.onclose = onclose;
        } else {
            this._pc.ondatachannel = (event) => {
                console.log('recevice datachannel');
                this._dataChannel = event.channel;

                this._dataChannel.onmessage = this._onMessageCallback;
                this._dataChannel.onopen = onopen;
                this._dataChannel.onclose = onclose;
            };

        }
    }

    _onMessageCallback = (e) => {
        console.log('Received Message => ', e.data);
        this.dispatchEvent({type: 'message', data: e.data});
    };

    send(text) {
        this._dataChannel.send(text);
    }

    _oniceconnectionstatechange(event) {
        const status = event.currentTarget.iceConnectionState;
        if (status === 'closed' || status === 'failed') {
            this._createOffer(true);
        }
    }

    _initStream(opts) {
        return new Promise((resolve) => {
            if (opts.localStream && typeof opts.localStream instanceof
                MediaStream) {
                this._addTrack(opts.localStream);
                resolve();
            } else {
                this._createLocalStream(this.constraints).then(stream => {
                    this._addTrack(stream);
                    resolve();
                });
            }
        });

    }

    _addTrack(stream) {
        for (const track of stream.getTracks()) {
            this.localStream.addTrack(track);
            const sender = this._pc.addTrack(track, stream);
            this._senders.set(sender.track.kind, sender);
        }
        this.dispatchEvent({type: 'localStream', stream: this.localStream});
    }

    _removeTrack(kind) {
        if (kind === 'video') {
            const videoTrack = this.localStream.getVideoTracks()[0];
            this.localStream.removeTrack(videoTrack);
            videoTrack.stop();
            const sender = this._senders.get('video');
            this._pc.removeTrack(sender);
            this._senders.delete('video');
            return sender.replaceTrack(null);
        }

    }

    _createLocalStream(constraints) {
        return navigator.mediaDevices.getUserMedia(constraints).then(stream => {
            return stream;
        }, error => {
            this.dispatchEvent({type: 'error', error});
        });
    }

    _onTrack(event) {
        const _remoteStream = event.streams[0];
        if (!_remoteStream) return;
        const video = this.remoteStream.getVideoTracks()[0];
        if (video) {
            this.remoteStream.removeTrack(video);
        }
        for (const track of _remoteStream.getTracks()) {
            this.remoteStream.addTrack(track);
        }
        this.dispatchEvent({type: 'remoteStream', stream: this.remoteStream});
    }

    _onicecandidate(event) {
        this.dispatchEvent(event);
    }

    _createOffer(iceRestart) {
        return this._pc.createOffer({...this.offerOptions, iceRestart}).
            then(offer => {
                return this._pc.setLocalDescription(offer).then(() => {
                    this.dispatchEvent(offer);
                }).catch(error => {
                    this.dispatchEvent({type: 'error', error});
                });
            });
    }

    _createAnswer() {
        this._pc.createAnswer(this.answerOptions).then(answer => {
            this._pc.setLocalDescription(answer).then(() => {
                this.dispatchEvent(answer);
            }).catch(error => this.dispatchEvent({type: 'error', error}));
        }).catch(error => this.dispatchEvent({type: 'error', error}));
    }

    signal(data) {
        if (data === 'ready') {
            if (this.initiator) {
                this._initStreamPromise.then(() => this._createOffer());
            }
            return;
        }
        if (data.sdp) {
            this._pc.setRemoteDescription(data).then(() => {
                if (data.type === 'offer') this._createAnswer();
            }).catch(error => {
                this.dispatchEvent({type: 'error', error});
            });
        }

        if (data.candidate) {
            this._pc.addIceCandidate(data.candidate);
        }
    }

    mute(kind) {
        if (typeof kind !== 'string') {
            return Promise.reject('track kind need string!');
        }
        if (!/^(audio)|(video)$/.test(kind)) {
            return Promise.reject('track kind need audio or video!');
        }
        if (kind === 'audio') {
            const audioTrack = this.localStream.getAudioTracks()[0];
            if (!audioTrack) {
                return Promise.reject('local stream does not has audio track!');
            }
            audioTrack.enabled = false;
            return Promise.resolve();
        }

        if (kind === 'video') {
            const videoTrack = this.localStream.getVideoTracks()[0];
            if (!videoTrack) {
                return Promise.reject('local stream does not has video track!');
            }
            return this._removeTrack('video').
                then(() => this._createOffer(true));
        }
    }

    unmute(kind) {
        if (typeof kind !== 'string') {
            return Promise.reject('track kind need string!');
        }
        if (!/^(audio)|(video)$/.test(kind)) {
            return Promise.reject('track kind need audio or video!');
        }
        if (kind === 'audio') {
            const audioTrack = this.localStream.getAudioTracks()[0];
            audioTrack.enabled = true;
            return Promise.resolve();
        }

        if (kind === 'video') {
            const video = this.constraints.video;
            return this._createLocalStream({audio: false, video}).
                then(stream => {
                    return this._addTrack(stream);
                }).
                then(() => this._createOffer(true));
        }
    }

    getStats() {

        return new Promise((resolve, reject) => {
            this._pc.getStats().then(stats => {
                const audioRecv = {},
                    videoRecv = {},
                    audioSend = {},
                    videoSend = {};
                stats.forEach(item => {
                    if ((item.kind === 'audio' || item.mediaType === 'audio') &&
                        item.type === 'inbound-rtp') {
                        audioRecv.bytesReceived = item.bytesReceived;
                        audioRecv.jitter = item.jitter;
                        audioRecv.packetsLost = item.packetsLost;
                        audioRecv.packetsReceived = item.packetsReceived;
                        audioRecv.audioLevel = item.audioRecv;
                    }
                    if ((item.kind === 'video' || item.mediaType === 'video') &&
                        item.type === 'inbound-rtp') {
                        videoRecv.bytesReceived = item.bytesReceived;
                        videoRecv.jitter = item.jitter;
                        videoRecv.packetsLost = item.packetsLost;
                        videoRecv.packetsReceived = item.packetsReceived;
                        videoRecv.frameHeight = item.frameHeight;
                        videoRecv.frameWidth = item.frameWidth;
                        videoRecv.framesPerSecond = item.framesPerSecond;
                    }
                    if ((item.kind === 'audio' || item.mediaType === 'audio') &&
                        item.type === 'outbound-rtp') {
                        audioSend.bytesSent = item.bytesSent;
                        audioSend.packetsSent = item.packetsSent;
                    }
                    if ((item.kind === 'video' || item.mediaType === 'video') &&
                        item.type === 'outbound-rtp') {
                        videoSend.bytesSent = item.bytesSent;
                        videoSend.frameHeight = item.frameHeight;
                        videoSend.frameWidth = item.frameWidth;
                        videoSend.framesPerSecond = item.framesPerSecond;
                        videoSend.packetsSent = item.packetsSent;
                    }
                });

                resolve({audioRecv, videoRecv, audioSend, videoSend});
            }, error => {
                reject(error);
            });
        });

    }

    leave() {
        for (const track of this.localStream.getTracks()) {
            track.stop();
        }
        this.localStream = new MediaStream();
        this._dataChannel.close();
        this._pc.close();
    }
}

window && (window.Peer2peer = Peer2peer);
