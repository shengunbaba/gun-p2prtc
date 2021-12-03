import {EventDispatcher, createShortId} from './utils'
import defaultCon from './default.config'


export default class Peer2peer extends EventDispatcher {
    constructor(opts) {
        super(opts)
        this._options = {...defaultCon, ...opts};
        const {rtcConfiguration, localStream} = this._options;
        this._pc = new RTCPeerConnection(rtcConfiguration);
        this.id = createShortId();


        this._pc.oniceconnectionstatechange = (e) => {
            console.log(e, this._pc.iceConnectionState)
        };
        this._pc.onicegatheringstatechange = (e) => {
            console.log(e, this._pc.iceConnectionState)
        };
        this._pc.onconnectionstatechange = (e) => {
            console.log(e, this._pc.connectionState)
        };
        this._pc.addEventListener('signalingstatechange', (e) => {
            console.log(e, this._pc.signalingState)
        });
        this._pc.addEventListener('icecandidate', event => {
            console.log(event)
        });

        this._pc.addEventListener('track', event => {
            console.log(event)
        })
        if (localStream && typeof localStream instanceof MediaStream) {
            this._addTrack()
        } else {
            this._createLocalStream();
        }
    }

    _addTrack() {
        const {localStream} = this._options
        localStream.getTracks().forEach(track => this._pc.addTrack(track, localStream));
    }

    _createLocalStream() {
        const {constraints, initiator} = this._options;
        navigator.mediaDevices.getUserMedia(constraints).then(stream => {
            this._options.localStream = stream;
            this.dispatchEvent({type: 'localStream', stream})
            this._addTrack()
            if (initiator) {
                this._createOffer()
            }
        }, error => {
            this.dispatchEvent({type: 'error', error})
        })
    }

    _createOffer() {
        const {offerOptions} = this._options;
        this._pc.createOffer(offerOptions).then(offer => {
            this._pc.setLocalDescription(offer).then(() => {
                this.dispatchEvent(offer)
            }).catch(error => {
                this.dispatchEvent({type: 'error', error})
            });
        })
    }

    _createAnswer() {
        const {answerOptions} = this._options;
        this._pc.createAnswer(answerOptions).then(answer => {
            this._pc.setLocalDescription(answer).then(() => {
                this.dispatchEvent(answer)
            }).catch(error => this.dispatchEvent({type: 'error', error}));
        }).catch(error => this.dispatchEvent({type: 'error', error}));
    }

    signal(data) {
        if (data.sdp) {
            this._pc.setRemoteDescription(data).then(() => {
                if (data.type === 'offer') this._createAnswer();
            }).catch(error => {
                this.dispatchEvent({type: 'error', error})
            });
        }
    }
}


window.Peer2peer = Peer2peer;
