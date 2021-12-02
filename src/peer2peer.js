import {EventDispatcher, createShortId} from './utils'
import defaultCon from './default.config'


export default class Peer2peer extends EventDispatcher {
    constructor(opts) {
        super(opts)
        this._options = {...defaultCon, ...opts};
        const {rtcConfiguration,} = this._options;
        this._pc = new RTCPeerConnection(rtcConfiguration);
        this.id = createShortId();
        this.localStream = null;
    }

    _createLocalStream() {
        const {constraints} = this._options;
        navigator.mediaDevices.getUserMedia(constraints).then(stream => {
            this.localStream = stream;
        }, error => {
            this.dispatchEvent({type: 'error', error})
        })
    }

    _createOffer() {
        const {initiator} = this._options;
        if (initiator){

        }
    }

}
