# peer to peer ， based on webrtc
`Be sure to use HTTPS protocol or localhost, otherwise the demo will not work properly`

[github](https://github.com/shengunbaba/peer2peerRTC)

Simple WebRTC video, voice, and data channels;

The peer2peerRTC is separated from websocket; you can customize your signaling service.

## features
- supports video/voice streams
- supports data channel

## usage
you can install with npm ,or use script tags to import
```jsx 
npm install peer2peertc
```

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
   const onConnect = () => {
   
           const option = {}
           if (remoteInput.value) {
               option.initiator = true
           }
           peer = new Peer2peer(option);
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
               if (event.candidate) ws.send(JSON.stringify({type: 'icecandidate', candidate: event.candidate}))
           })
           peer.addEventListener('remoteStream', event => {
               remoteVideo.srcObject = event.stream
           })
   
           ws = new WebSocket('wss://localhost:8080')
           ws.addEventListener('message', (event) => {
               const data = JSON.parse(event.data)
               switch (data.type) {
                   case 'ready':
                       connectPanel.style.display = 'none'
                       videoPanel.style.display = 'flex';
                       peer.signal('ready');
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
   
       const onSwitchAudio = () => {
           const promise = audioStatus ? peer.mute('audio') : peer.unmute('audio');
           promise.then(() => {
               audioStatus = !audioStatus;
               document.querySelector('.switch-audio').innerHTML = audioStatus ? 'close audio' : 'open audio'
           })
       }
   
       const onSwitchVideo = () => {
           const promise = videoStatus ? peer.mute('video') : peer.unmute('video');
           promise.then(() => {
               videoStatus = !videoStatus;
               document.querySelector('.switch-video').innerHTML = videoStatus ? 'close video' : 'open video'
           })
       }
   
       const onleave = () => {
           peer.leave()
           location.reload()
       };
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

### `peer.signal(data)`
Call this method whenever the remote peer SDP message received.

### `peer.mute(kind)`
string <video | audio>.  close local audio or close local video

### `peer.unmute(data)`
string <video | audio>.  open local audio or open local video, and remote peer will received.

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
    if (event.candidate) ws.send(JSON.stringify({ type: 'icecandidate', candidate: event.candidate }))
})
```

### `remoteStream`
```js
 peer.addEventListener('remoteStream', event => {
    remoteVideo.srcObject = event.remoteStream;
})
```



