# peer to peer ， based on webrtc

Simple WebRTC video, voice, and data channels

## features
- supports video/voice streams
- supports data channel

## usage
This example create two peers in separated web page.  

In a real-world application,  The sender and receiver Peer instances would exist in separate browsers. 
A "signaling server" (usually implemented with websockets) would be used to exchange signaling data between the two browsers until a peer-to-peer connection is established.


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Peer2Peer</title>
    <script src="./p2pRTC.js"></script>
</head>
<body>
<div class="video-wrap">
    <video id="localVideo" autoplay></video>
    <video id="remoteVideo" autoplay></video>
</div>

<script>
    let peer, ws
    function createWs() {
        ws = new WebSocket('ws://localhost:8080')
        ws.addEventListener('message', (event) => {
            const data = JSON.parse(event.data)
            switch (data.type) {
                case 'ready':
                    connectWrap.style.display = 'none'
                    if (peer) return
                    createPeer()
                    break
                case 'offer':
                    peer.signal(data)
                    break
                case 'answer':
                    peer.signal(data)
                    break
                case 'icecandidate':
                    peer.signal(data)
                    break
            }
        })
    }

    function createPeer() {
        const option = {}
        if (remoteInput.value) {
            option.initiator = true
        }
        peer = new Peer2peer(option)

        peer.addEventListener('localStream', data => {
            localVideo.srcObject = data.stream
        })

        peer.addEventListener('offer', offer => {
            ws.send(JSON.stringify(offer))
        })
        peer.addEventListener('answer', answer => {
            ws.send(JSON.stringify(answer))
        })
        peer.addEventListener('icecandidate', event => {
            if (event.candidate) ws.send(JSON.stringify({ type: 'icecandidate', candidate: event.candidate }))
        })
        peer.addEventListener('remoteStream', event => {
            remoteVideo.srcObject = event.remoteStream;
        })
    }

    const onConnect = () => {
        createWs()
    }
</script>
</body>
</html>

```   


## api

### `new Peer2peer(option)`
Peer2peer is in global scope
If `option` is specified, then the default options (shown below) will be overridden.
```jsx
{
    rtcConfiguration: null,
    initiator: false,
    offerOptions: {
        offerToReceiveAudio: 1,
        offerToReceiveVideo: 1
    },
    answerOptions: {},
    constraints: {audio: true, video: true},
    localStream: null
}
```
The options do the following:

- `rtcConfiguration`: custom webrtc configuration (used by RTCPeerConnection constructor);
- `initiator`: set to true if this is the initiating peer
- `offerOptions`: custom offer options (used by createOffer method)
- `answerOptions`: custom answer options (used by createAnswer method)
- `constraints`: custom stream options (used by getUserMedia method)
- `localStream`: if video/voice is desired, pass stream returned from getUserMedia


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
    if (event.candidate) ws.send(JSON.stringify({ type: 'icecandidate', candidate: event.candidate }))
})
```

### `remoteStream`
```js
 peer.addEventListener('remoteStream', event => {
    remoteVideo.srcObject = event.remoteStream;
})
```



