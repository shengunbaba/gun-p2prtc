# peer to peer ， based on webrtc

`Be sure to use HTTPS protocol or localhost, otherwise the demo will not work properly`

[github](https://github.com/shengunbaba/gun-p2prtc)

Simple WebRTC video, voice, and data channels;

The peer2peerRTC is separated from websocket; you can customize your signaling service.

## features

- supports video/voice streams
- supports data channel

## usage

you can install with npm ,or import like [demo](https://github.com/shengunbaba/gun-p2prtc)

```
npm install gun-p2prtc
```

This example create two peers in separated web page.

In a real-world application, The sender and receiver Peer instances would exist in separate browsers. A "signaling server" (usually implemented with websockets) would be used to exchange signaling data between the two
browsers until a peer-to-peer connection is established. 

## api

### `new P2pRtc(option)`

If `option` is specified, then the default options (shown below) will be overridden.

```js
const option = {
    rtcConfiguration: null,
    initiator: false,
    offerOptions: {offerToReceiveAudio: 1, offerToReceiveVideo: 1},
    answerOptions: {},
    constraints: {audio: true, video: true},
    localStream: null
}
const peer = new P2pRtc(option);
```

The options do the following:

- `rtcConfiguration`: custom webrtc configuration (used by RTCPeerConnection constructor);
- `initiator`: set to true if this is the initiating peer
- `offerOptions`: custom offer options (used by createOffer method)
- `answerOptions`: custom answer options (used by createAnswer method)
- `constraints`: custom stream options (used by getUserMedia method)
- `localStream`: if video/voice is desired, pass stream returned from getUserMedia

### `peer.signal(data)`

Call this method whenever the remote peer SDP message received.

### `peer.mute(kind)`

string <video | audio>. close local audio or close local video

### `peer.unmute(kind)`

string <video | audio>. open local audio or open local video, and remote peer will received.

### `peer.getStats()`

provide statistics about either the overall connection

### `peer.send(text)`

send text over datachannel

### `peer.leave()`

peer leave.

## events

### `localStream`

```js
peer.addEventListener('localStream', data => {
    localVideo.srcObject = data.stream
})
```

### `offer`

```js
peer.addEventListener('offer', offer => {
    ws.send(JSON.stringify(offer))
})
```

### `answer`

```js
peer.addEventListener('answer', answer => {
    ws.send(JSON.stringify(answer))
})
```

### `icecandidate`

```js
peer.addEventListener('icecandidate', event => {
    if (event.candidate) ws.send(JSON.stringify({type: 'icecandidate', candidate: event.candidate}))
})
```

### `remoteStream`

```js
 peer.addEventListener('remoteStream', event => {
    remoteVideo.srcObject = event.remoteStream;
})
```

### `dataChannel-ready`

```js
peer.addEventListener('dataChannel-ready', () => {
    // now you can use dataChannel send message
});
```

### `message`

```js
peer.addEventListener('message', (event) => {
    console.log('receive text => ', event.data)
});
```

