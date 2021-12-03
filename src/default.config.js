export default {
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
