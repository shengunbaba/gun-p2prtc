/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _peer2peer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./peer2peer.js */ \"./src/peer2peer.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_peer2peer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://peer2peertc/./src/index.js?");

/***/ }),

/***/ "./src/peer2peer.js":
/*!**************************!*\
  !*** ./src/peer2peer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Peer2peer)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar Peer2peer = /*#__PURE__*/function (_EventDispatcher) {\n  _inherits(Peer2peer, _EventDispatcher);\n\n  var _super = _createSuper(Peer2peer);\n\n  function Peer2peer(opts) {\n    var _this;\n\n    _classCallCheck(this, Peer2peer);\n\n    _this = _super.call(this, opts);\n    _this.rtcConfiguration = opts.rtcConfiguration || null;\n    _this.initiator = opts.initiator || false;\n    _this.offerOptions = opts.offerOptions || {\n      offerToReceiveAudio: true,\n      offerToReceiveVideo: true\n    };\n    _this.answerOptions = opts.answerOptions || {};\n    _this.constraints = opts.constraints || {\n      audio: true,\n      video: true\n    };\n    _this.localStream = new MediaStream();\n    _this.remoteStream = new MediaStream();\n    _this._pc = new RTCPeerConnection(_this.rtcConfiguration);\n    _this.id = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createShortId)();\n    _this._senders = new Map();\n\n    _this._pc.oniceconnectionstatechange = function (e) {\n      console.log(e, _this._pc.iceConnectionState);\n    };\n\n    _this._pc.onicegatheringstatechange = function (e) {\n      console.log(e, _this._pc.iceConnectionState);\n    };\n\n    _this._pc.onconnectionstatechange = function (e) {\n      console.log(e, _this._pc.connectionState);\n    };\n\n    _this._pc.onsignalingstatechange = function (e) {\n      return console.log(e, _this._pc.signalingState);\n    };\n\n    _this._pc.onicecandidate = function (event) {\n      return _this._onicecandidate(event);\n    };\n\n    _this._pc.ontrack = function (e) {\n      return _this._onTrack(e);\n    };\n\n    _this._initStreamPromise = _this._initStream(opts);\n    return _this;\n  }\n\n  _createClass(Peer2peer, [{\n    key: \"_initStream\",\n    value: function _initStream(opts) {\n      var _this2 = this;\n\n      return new Promise(function (resolve) {\n        if (opts.localStream && _typeof(opts.localStream) instanceof MediaStream) {\n          _this2._addTrack(opts.localStream);\n\n          resolve();\n        } else {\n          _this2._createLocalStream(_this2.constraints).then(function (stream) {\n            _this2._addTrack(stream);\n\n            resolve();\n          });\n        }\n      });\n    }\n  }, {\n    key: \"_addTrack\",\n    value: function _addTrack(stream) {\n      var _iterator = _createForOfIteratorHelper(stream.getTracks()),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var track = _step.value;\n          this.localStream.addTrack(track);\n\n          var sender = this._pc.addTrack(track, stream);\n\n          this._senders.set(sender.track.kind, sender);\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n\n      this.dispatchEvent({\n        type: 'localStream',\n        stream: this.localStream\n      });\n    }\n  }, {\n    key: \"_removeTrack\",\n    value: function _removeTrack(kind) {\n      if (kind === 'video') {\n        var videoTrack = this.localStream.getVideoTracks()[0];\n        this.localStream.removeTrack(videoTrack);\n        videoTrack.stop();\n\n        var sender = this._senders.get('video');\n\n        this._pc.removeTrack(sender);\n\n        this._senders[\"delete\"]('video');\n\n        return sender.replaceTrack(null);\n      }\n    }\n  }, {\n    key: \"_createLocalStream\",\n    value: function _createLocalStream(constraints) {\n      var _this3 = this;\n\n      return navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {\n        return stream;\n      }, function (error) {\n        _this3.dispatchEvent({\n          type: 'error',\n          error: error\n        });\n      });\n    }\n  }, {\n    key: \"_onTrack\",\n    value: function _onTrack(event) {\n      var _remoteStream = event.streams[0];\n      if (!_remoteStream) return;\n      var video = this.remoteStream.getVideoTracks()[0];\n\n      if (video) {\n        this.remoteStream.removeTrack(video);\n      }\n\n      var _iterator2 = _createForOfIteratorHelper(_remoteStream.getTracks()),\n          _step2;\n\n      try {\n        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n          var track = _step2.value;\n          this.remoteStream.addTrack(track);\n        }\n      } catch (err) {\n        _iterator2.e(err);\n      } finally {\n        _iterator2.f();\n      }\n\n      this.dispatchEvent({\n        type: 'remoteStream',\n        stream: this.remoteStream\n      });\n    }\n  }, {\n    key: \"_onicecandidate\",\n    value: function _onicecandidate(event) {\n      this.dispatchEvent(event);\n    }\n  }, {\n    key: \"_createOffer\",\n    value: function _createOffer(iceRestart) {\n      var _this4 = this;\n\n      return this._pc.createOffer(_objectSpread(_objectSpread({}, this.offerOptions), {}, {\n        iceRestart: iceRestart\n      })).then(function (offer) {\n        return _this4._pc.setLocalDescription(offer).then(function () {\n          _this4.dispatchEvent(offer);\n        })[\"catch\"](function (error) {\n          _this4.dispatchEvent({\n            type: 'error',\n            error: error\n          });\n        });\n      });\n    }\n  }, {\n    key: \"_createAnswer\",\n    value: function _createAnswer() {\n      var _this5 = this;\n\n      this._pc.createAnswer(this.answerOptions).then(function (answer) {\n        _this5._pc.setLocalDescription(answer).then(function () {\n          _this5.dispatchEvent(answer);\n        })[\"catch\"](function (error) {\n          return _this5.dispatchEvent({\n            type: 'error',\n            error: error\n          });\n        });\n      })[\"catch\"](function (error) {\n        return _this5.dispatchEvent({\n          type: 'error',\n          error: error\n        });\n      });\n    }\n  }, {\n    key: \"signal\",\n    value: function signal(data) {\n      var _this6 = this;\n\n      if (data === 'ready') {\n        if (this.initiator) {\n          this._initStreamPromise.then(function () {\n            return _this6._createOffer();\n          });\n        }\n\n        return;\n      }\n\n      if (data.sdp) {\n        this._pc.setRemoteDescription(data).then(function () {\n          if (data.type === 'offer') _this6._createAnswer();\n        })[\"catch\"](function (error) {\n          _this6.dispatchEvent({\n            type: 'error',\n            error: error\n          });\n        });\n      }\n\n      if (data.candidate) {\n        this._pc.addIceCandidate(data.candidate);\n      }\n    }\n  }, {\n    key: \"mute\",\n    value: function mute(kind) {\n      var _this7 = this;\n\n      if (typeof kind !== 'string') {\n        return Promise.reject('track kind need string!');\n      }\n\n      if (!/^(audio)|(video)$/.test(kind)) {\n        return Promise.reject('track kind need audio or video!');\n      }\n\n      if (kind === 'audio') {\n        var audioTrack = this.localStream.getAudioTracks()[0];\n\n        if (!audioTrack) {\n          return Promise.reject('local stream does not has audio track!');\n        }\n\n        audioTrack.enabled = false;\n        return Promise.resolve();\n      }\n\n      if (kind === 'video') {\n        var videoTrack = this.localStream.getVideoTracks()[0];\n\n        if (!videoTrack) {\n          return Promise.reject('local stream does not has video track!');\n        }\n\n        return this._removeTrack('video').then(function () {\n          return _this7._createOffer(true);\n        });\n      }\n    }\n  }, {\n    key: \"unmute\",\n    value: function unmute(kind) {\n      var _this8 = this;\n\n      if (typeof kind !== 'string') {\n        return Promise.reject('track kind need string!');\n      }\n\n      if (!/^(audio)|(video)$/.test(kind)) {\n        return Promise.reject('track kind need audio or video!');\n      }\n\n      if (kind === 'audio') {\n        var audioTrack = this.localStream.getAudioTracks()[0];\n        audioTrack.enabled = true;\n        return Promise.resolve();\n      }\n\n      if (kind === 'video') {\n        var video = this.constraints.video;\n        return this._createLocalStream({\n          audio: false,\n          video: video\n        }).then(function (stream) {\n          return _this8._addTrack(stream);\n        }).then(function () {\n          return _this8._createOffer(true);\n        });\n      }\n    }\n  }, {\n    key: \"getStats\",\n    value: function getStats() {\n      var _this9 = this;\n\n      return new Promise(function (resolve) {\n        _this9._pc.getStats().then(function (stats) {\n          var audioRecv = {},\n              videoRecv = {},\n              audioSend = {},\n              videoSend = {};\n          stats.forEach(function (item) {\n            if ((item.kind === 'audio' || item.mediaType === 'audio') && item.type === 'inbound-rtp') {\n              audioRecv.bytesReceived = item.bytesReceived;\n              audioRecv.jitter = item.jitter;\n              audioRecv.packetsLost = item.packetsLost;\n              audioRecv.packetsReceived = item.packetsReceived;\n              audioRecv.audioLevel = item.audioRecv;\n            }\n\n            if ((item.kind === 'video' || item.mediaType === 'video') && item.type === 'inbound-rtp') {\n              videoRecv.bytesReceived = item.bytesReceived;\n              videoRecv.jitter = item.jitter;\n              videoRecv.packetsLost = item.packetsLost;\n              videoRecv.packetsReceived = item.packetsReceived;\n              videoRecv.frameHeight = item.frameHeight;\n              videoRecv.frameWidth = item.frameWidth;\n              videoRecv.framesPerSecond = item.framesPerSecond;\n            }\n\n            if ((item.kind === 'audio' || item.mediaType === 'audio') && item.type === 'outbound-rtp') {\n              audioSend.bytesSent = item.bytesSent;\n              audioSend.packetsSent = item.packetsSent;\n            }\n\n            if ((item.kind === 'video' || item.mediaType === 'video') && item.type === 'outbound-rtp') {\n              videoSend.bytesSent = item.bytesSent;\n              videoSend.frameHeight = item.frameHeight;\n              videoSend.frameWidth = item.frameWidth;\n              videoSend.framesPerSecond = item.framesPerSecond;\n              videoSend.packetsSent = item.packetsSent;\n            }\n          });\n          resolve({\n            audioRecv: audioRecv,\n            videoRecv: videoRecv,\n            audioSend: audioSend,\n            videoSend: videoSend\n          });\n        });\n      });\n    }\n  }, {\n    key: \"leave\",\n    value: function leave() {\n      var _iterator3 = _createForOfIteratorHelper(this.localStream.getTracks()),\n          _step3;\n\n      try {\n        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n          var track = _step3.value;\n          track.stop();\n        }\n      } catch (err) {\n        _iterator3.e(err);\n      } finally {\n        _iterator3.f();\n      }\n\n      this.localStream = new MediaStream();\n\n      this._pc.close();\n    }\n  }]);\n\n  return Peer2peer;\n}(_utils__WEBPACK_IMPORTED_MODULE_0__.EventDispatcher);\n\n\nwindow.Peer2peer = Peer2peer;\n\n//# sourceURL=webpack://peer2peertc/./src/peer2peer.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EventDispatcher\": () => (/* binding */ EventDispatcher),\n/* harmony export */   \"createShortId\": () => (/* binding */ createShortId)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar EventDispatcher = /*#__PURE__*/function () {\n  function EventDispatcher() {\n    _classCallCheck(this, EventDispatcher);\n\n    this.eventListeners = {};\n  }\n\n  _createClass(EventDispatcher, [{\n    key: \"addEventListener\",\n    value: function addEventListener(eventType, listener) {\n      if (!this.eventListeners[eventType]) {\n        this.eventListeners[eventType] = [];\n      }\n\n      this.eventListeners[eventType].push(listener);\n    }\n  }, {\n    key: \"removeEventListener\",\n    value: function removeEventListener(eventType, listener) {\n      if (!this.eventListeners[eventType]) {\n        return;\n      }\n\n      var index = this.eventListeners[eventType].findIndex(function (x) {\n        return x === listener;\n      });\n      this.eventListeners[eventType].splice(index, 1);\n    }\n  }, {\n    key: \"clearEventListener\",\n    value: function clearEventListener(eventType) {\n      this.eventListeners[eventType] = [];\n    }\n  }, {\n    key: \"clearAllEventListeners\",\n    value: function clearAllEventListeners() {\n      this.eventListeners = {};\n    }\n  }, {\n    key: \"dispatchEvent\",\n    value: function dispatchEvent(event) {\n      if (!this.eventListeners[event.type]) {\n        return;\n      }\n\n      var _iterator = _createForOfIteratorHelper(this.eventListeners[event.type]),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var listener = _step.value;\n          listener(event);\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n    }\n  }]);\n\n  return EventDispatcher;\n}();\nvar createShortId = function createShortId() {\n  return Math.floor((Math.random() + 1) * 0x10000).toString(16);\n};\n\n//# sourceURL=webpack://peer2peertc/./src/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;