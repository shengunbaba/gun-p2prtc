import { EventDispatcher } from './utils'

export default class Peer2peer extends EventDispatcher {
    constructor(opts) {
        super(opts)
        this._pc = new RTCPeerConnection()
    }
}