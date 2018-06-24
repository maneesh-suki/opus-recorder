(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Recorder"] = factory();
	else
		root["Recorder"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/recorder.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2dsb2JhbC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL1JlY29yZGVyLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcz9jZDAwIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLCBldmFsKShcInRoaXNcIik7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/webpack/buildin/global.js\n");

/***/ }),

/***/ "./src/recorder.js":
/*!*************************!*\
  !*** ./src/recorder.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nvar AudioContext = global.AudioContext || global.webkitAudioContext;\n\n\n// Constructor\nvar Recorder = function( config ){\n\n  if ( !Recorder.isRecordingSupported() ) {\n    throw new Error(\"Recording is not supported in this browser\");\n  }\n\n  this.state = \"inactive\";\n  this.config = Object.assign({\n    bufferLength: 4096,\n    encoderApplication: 2049,\n    encoderFrameSize: 20,\n    encoderPath: 'encoderWorker.min.js',\n    encoderSampleRate: 48000,\n    maxBuffersPerPage: 40,\n    mediaTrackConstraints: true,\n    monitorGain: 0,\n    numberOfChannels: 1,\n    recordingGain: 1,\n    resampleQuality: 3,\n    streamPages: false,\n    wavBitDepth: 16,\n  }, config );\n};\n\n\n// Static Methods\nRecorder.isRecordingSupported = function(){\n  return AudioContext && global.navigator && global.navigator.mediaDevices && global.navigator.mediaDevices.getUserMedia && global.WebAssembly;\n};\n\n\n// Instance Methods\nRecorder.prototype.clearStream = function(){\n  if ( this.stream ){\n\n    if ( this.stream.getTracks ) {\n      this.stream.getTracks().forEach( function( track ){\n        track.stop();\n      });\n    }\n\n    else {\n      this.stream.stop();\n    }\n\n    delete this.stream;\n  }\n\n  if ( this.audioContext && this.closeAudioContext ){\n    this.audioContext.close();\n    delete this.audioContext;\n  }\n};\n\nRecorder.prototype.encodeBuffers = function( inputBuffer ){\n  if ( this.state === \"recording\" ) {\n    var buffers = [];\n    for ( var i = 0; i < inputBuffer.numberOfChannels; i++ ) {\n      buffers[i] = inputBuffer.getChannelData(i);\n    }\n\n    this.encoder.postMessage({\n      command: \"encode\",\n      buffers: buffers\n    });\n  }\n};\n\nRecorder.prototype.initAudioContext = function( sourceNode ){\n  if (sourceNode && sourceNode.context) {\n    this.audioContext = sourceNode.context;\n  }\n\n  else {\n    this.audioContext = new AudioContext();\n    this.closeAudioContext = true;\n  }\n\n  return this.audioContext;\n};\n\nRecorder.prototype.initAudioGraph = function(){\n  var self = this;\n\n  // First buffer can contain old data. Don't encode it.\n  this.encodeBuffers = function(){\n    delete this.encodeBuffers;\n  };\n\n  this.scriptProcessorNode = this.audioContext.createScriptProcessor( this.config.bufferLength, this.config.numberOfChannels, this.config.numberOfChannels );\n  this.scriptProcessorNode.connect( this.audioContext.destination );\n  this.scriptProcessorNode.onaudioprocess = function( e ) {\n    self.encodeBuffers( e.inputBuffer );\n  };\n\n  this.monitorGainNode = this.audioContext.createGain();\n  this.setMonitorGain( this.config.monitorGain );\n  this.monitorGainNode.connect( this.audioContext.destination );\n\n  this.recordingGainNode = this.audioContext.createGain();\n  this.setRecordingGain( this.config.recordingGain );\n  this.recordingGainNode.connect( this.scriptProcessorNode );\n};\n\nRecorder.prototype.initSourceNode = function( sourceNode ){\n  var self = this;\n\n  if ( sourceNode && sourceNode.context ) {\n    return global.Promise.resolve( sourceNode );\n  }\n\n  return global.navigator.mediaDevices.getUserMedia({ audio : this.config.mediaTrackConstraints }).then( function( stream ){\n    self.stream = stream;\n    return self.audioContext.createMediaStreamSource( stream );\n  });\n};\n\nRecorder.prototype.initWorker = function(){\n  var self = this;\n  var streamPage = function( e ) { self.streamPage( e.data ); };\n  var storePage = function( e ) { self.storePage( e.data ); };\n\n  this.recordedPages = [];\n  this.totalLength = 0;\n  this.encoder = new global.Worker( this.config.encoderPath );\n  this.encoder.addEventListener( \"message\", this.config.streamPages ? streamPage : storePage );\n};\n\nRecorder.prototype.pause = function(){\n  if ( this.state === \"recording\" ){\n    this.state = \"paused\";\n    this.onpause();\n  }\n};\n\nRecorder.prototype.resume = function() {\n  if ( this.state === \"paused\" ) {\n    this.state = \"recording\";\n    this.onresume();\n  }\n};\n\nRecorder.prototype.setRecordingGain = function( gain ){\n  this.config.recordingGain = gain;\n\n  if ( this.recordingGainNode && this.audioContext ) {\n    this.recordingGainNode.gain.setTargetAtTime(gain, this.audioContext.currentTime, 0.01);\n  }\n};\n\nRecorder.prototype.setMonitorGain = function( gain ){\n  this.config.monitorGain = gain;\n\n  if ( this.monitorGainNode && this.audioContext ) {\n    this.monitorGainNode.gain.setTargetAtTime(gain, this.audioContext.currentTime, 0.01);\n  }\n};\n\nRecorder.prototype.start = function( sourceNode ){\n  if ( this.state === \"inactive\" ) {\n    var self = this;\n    this.initWorker();\n    this.initAudioContext( sourceNode );\n    this.initAudioGraph();\n\n    return this.initSourceNode( sourceNode ).then( function( sourceNode ){\n      self.state = \"recording\";\n      self.encoder.postMessage( Object.assign({\n        command: 'init',\n        originalSampleRate: self.audioContext.sampleRate,\n        wavSampleRate: self.audioContext.sampleRate\n      }, self.config));\n      self.sourceNode = sourceNode;\n      self.sourceNode.connect( self.monitorGainNode );\n      self.sourceNode.connect( self.recordingGainNode );\n      self.onstart();\n    });\n  }\n};\n\nRecorder.prototype.stop = function(){\n  if ( this.state !== \"inactive\" ) {\n    this.state = \"inactive\";\n    this.monitorGainNode.disconnect();\n    this.scriptProcessorNode.disconnect();\n    this.recordingGainNode.disconnect();\n    this.sourceNode.disconnect();\n    this.clearStream();\n    this.encoder.postMessage({ command: \"done\" });\n  }\n};\n\nRecorder.prototype.storePage = function( page ) {\n  if ( page === null ) {\n    var outputData = new Uint8Array( this.totalLength );\n    this.recordedPages.reduce( function( offset, page ){\n      outputData.set( page, offset );\n      return offset + page.length;\n    }, 0);\n\n    this.ondataavailable( outputData );\n    this.onstop();\n  }\n\n  else {\n    this.recordedPages.push( page );\n    this.totalLength += page.length;\n  }\n};\n\nRecorder.prototype.streamPage = function( page ) {\n  if ( page === null ) {\n    this.onstop();\n  }\n\n  else {\n    this.ondataavailable( page );\n  }\n};\n\n\n// Callback Handlers\nRecorder.prototype.ondataavailable = function(){};\nRecorder.prototype.onpause = function(){};\nRecorder.prototype.onresume = function(){};\nRecorder.prototype.onstart = function(){};\nRecorder.prototype.onstop = function(){};\n\n\nmodule.exports = Recorder;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVjb3JkZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SZWNvcmRlci8uL3NyYy9yZWNvcmRlci5qcz8wNTZmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgQXVkaW9Db250ZXh0ID0gZ2xvYmFsLkF1ZGlvQ29udGV4dCB8fCBnbG9iYWwud2Via2l0QXVkaW9Db250ZXh0O1xuXG5cbi8vIENvbnN0cnVjdG9yXG52YXIgUmVjb3JkZXIgPSBmdW5jdGlvbiggY29uZmlnICl7XG5cbiAgaWYgKCAhUmVjb3JkZXIuaXNSZWNvcmRpbmdTdXBwb3J0ZWQoKSApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZWNvcmRpbmcgaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG4gIH1cblxuICB0aGlzLnN0YXRlID0gXCJpbmFjdGl2ZVwiO1xuICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIGJ1ZmZlckxlbmd0aDogNDA5NixcbiAgICBlbmNvZGVyQXBwbGljYXRpb246IDIwNDksXG4gICAgZW5jb2RlckZyYW1lU2l6ZTogMjAsXG4gICAgZW5jb2RlclBhdGg6ICdlbmNvZGVyV29ya2VyLm1pbi5qcycsXG4gICAgZW5jb2RlclNhbXBsZVJhdGU6IDQ4MDAwLFxuICAgIG1heEJ1ZmZlcnNQZXJQYWdlOiA0MCxcbiAgICBtZWRpYVRyYWNrQ29uc3RyYWludHM6IHRydWUsXG4gICAgbW9uaXRvckdhaW46IDAsXG4gICAgbnVtYmVyT2ZDaGFubmVsczogMSxcbiAgICByZWNvcmRpbmdHYWluOiAxLFxuICAgIHJlc2FtcGxlUXVhbGl0eTogMyxcbiAgICBzdHJlYW1QYWdlczogZmFsc2UsXG4gICAgd2F2Qml0RGVwdGg6IDE2LFxuICB9LCBjb25maWcgKTtcbn07XG5cblxuLy8gU3RhdGljIE1ldGhvZHNcblJlY29yZGVyLmlzUmVjb3JkaW5nU3VwcG9ydGVkID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIEF1ZGlvQ29udGV4dCAmJiBnbG9iYWwubmF2aWdhdG9yICYmIGdsb2JhbC5uYXZpZ2F0b3IubWVkaWFEZXZpY2VzICYmIGdsb2JhbC5uYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSAmJiBnbG9iYWwuV2ViQXNzZW1ibHk7XG59O1xuXG5cbi8vIEluc3RhbmNlIE1ldGhvZHNcblJlY29yZGVyLnByb3RvdHlwZS5jbGVhclN0cmVhbSA9IGZ1bmN0aW9uKCl7XG4gIGlmICggdGhpcy5zdHJlYW0gKXtcblxuICAgIGlmICggdGhpcy5zdHJlYW0uZ2V0VHJhY2tzICkge1xuICAgICAgdGhpcy5zdHJlYW0uZ2V0VHJhY2tzKCkuZm9yRWFjaCggZnVuY3Rpb24oIHRyYWNrICl7XG4gICAgICAgIHRyYWNrLnN0b3AoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5zdHJlYW0uc3RvcCgpO1xuICAgIH1cblxuICAgIGRlbGV0ZSB0aGlzLnN0cmVhbTtcbiAgfVxuXG4gIGlmICggdGhpcy5hdWRpb0NvbnRleHQgJiYgdGhpcy5jbG9zZUF1ZGlvQ29udGV4dCApe1xuICAgIHRoaXMuYXVkaW9Db250ZXh0LmNsb3NlKCk7XG4gICAgZGVsZXRlIHRoaXMuYXVkaW9Db250ZXh0O1xuICB9XG59O1xuXG5SZWNvcmRlci5wcm90b3R5cGUuZW5jb2RlQnVmZmVycyA9IGZ1bmN0aW9uKCBpbnB1dEJ1ZmZlciApe1xuICBpZiAoIHRoaXMuc3RhdGUgPT09IFwicmVjb3JkaW5nXCIgKSB7XG4gICAgdmFyIGJ1ZmZlcnMgPSBbXTtcbiAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBpbnB1dEJ1ZmZlci5udW1iZXJPZkNoYW5uZWxzOyBpKysgKSB7XG4gICAgICBidWZmZXJzW2ldID0gaW5wdXRCdWZmZXIuZ2V0Q2hhbm5lbERhdGEoaSk7XG4gICAgfVxuXG4gICAgdGhpcy5lbmNvZGVyLnBvc3RNZXNzYWdlKHtcbiAgICAgIGNvbW1hbmQ6IFwiZW5jb2RlXCIsXG4gICAgICBidWZmZXJzOiBidWZmZXJzXG4gICAgfSk7XG4gIH1cbn07XG5cblJlY29yZGVyLnByb3RvdHlwZS5pbml0QXVkaW9Db250ZXh0ID0gZnVuY3Rpb24oIHNvdXJjZU5vZGUgKXtcbiAgaWYgKHNvdXJjZU5vZGUgJiYgc291cmNlTm9kZS5jb250ZXh0KSB7XG4gICAgdGhpcy5hdWRpb0NvbnRleHQgPSBzb3VyY2VOb2RlLmNvbnRleHQ7XG4gIH1cblxuICBlbHNlIHtcbiAgICB0aGlzLmF1ZGlvQ29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcbiAgICB0aGlzLmNsb3NlQXVkaW9Db250ZXh0ID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmF1ZGlvQ29udGV4dDtcbn07XG5cblJlY29yZGVyLnByb3RvdHlwZS5pbml0QXVkaW9HcmFwaCA9IGZ1bmN0aW9uKCl7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICAvLyBGaXJzdCBidWZmZXIgY2FuIGNvbnRhaW4gb2xkIGRhdGEuIERvbid0IGVuY29kZSBpdC5cbiAgdGhpcy5lbmNvZGVCdWZmZXJzID0gZnVuY3Rpb24oKXtcbiAgICBkZWxldGUgdGhpcy5lbmNvZGVCdWZmZXJzO1xuICB9O1xuXG4gIHRoaXMuc2NyaXB0UHJvY2Vzc29yTm9kZSA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZVNjcmlwdFByb2Nlc3NvciggdGhpcy5jb25maWcuYnVmZmVyTGVuZ3RoLCB0aGlzLmNvbmZpZy5udW1iZXJPZkNoYW5uZWxzLCB0aGlzLmNvbmZpZy5udW1iZXJPZkNoYW5uZWxzICk7XG4gIHRoaXMuc2NyaXB0UHJvY2Vzc29yTm9kZS5jb25uZWN0KCB0aGlzLmF1ZGlvQ29udGV4dC5kZXN0aW5hdGlvbiApO1xuICB0aGlzLnNjcmlwdFByb2Nlc3Nvck5vZGUub25hdWRpb3Byb2Nlc3MgPSBmdW5jdGlvbiggZSApIHtcbiAgICBzZWxmLmVuY29kZUJ1ZmZlcnMoIGUuaW5wdXRCdWZmZXIgKTtcbiAgfTtcblxuICB0aGlzLm1vbml0b3JHYWluTm9kZSA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgdGhpcy5zZXRNb25pdG9yR2FpbiggdGhpcy5jb25maWcubW9uaXRvckdhaW4gKTtcbiAgdGhpcy5tb25pdG9yR2Fpbk5vZGUuY29ubmVjdCggdGhpcy5hdWRpb0NvbnRleHQuZGVzdGluYXRpb24gKTtcblxuICB0aGlzLnJlY29yZGluZ0dhaW5Ob2RlID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpO1xuICB0aGlzLnNldFJlY29yZGluZ0dhaW4oIHRoaXMuY29uZmlnLnJlY29yZGluZ0dhaW4gKTtcbiAgdGhpcy5yZWNvcmRpbmdHYWluTm9kZS5jb25uZWN0KCB0aGlzLnNjcmlwdFByb2Nlc3Nvck5vZGUgKTtcbn07XG5cblJlY29yZGVyLnByb3RvdHlwZS5pbml0U291cmNlTm9kZSA9IGZ1bmN0aW9uKCBzb3VyY2VOb2RlICl7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICBpZiAoIHNvdXJjZU5vZGUgJiYgc291cmNlTm9kZS5jb250ZXh0ICkge1xuICAgIHJldHVybiBnbG9iYWwuUHJvbWlzZS5yZXNvbHZlKCBzb3VyY2VOb2RlICk7XG4gIH1cblxuICByZXR1cm4gZ2xvYmFsLm5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHsgYXVkaW8gOiB0aGlzLmNvbmZpZy5tZWRpYVRyYWNrQ29uc3RyYWludHMgfSkudGhlbiggZnVuY3Rpb24oIHN0cmVhbSApe1xuICAgIHNlbGYuc3RyZWFtID0gc3RyZWFtO1xuICAgIHJldHVybiBzZWxmLmF1ZGlvQ29udGV4dC5jcmVhdGVNZWRpYVN0cmVhbVNvdXJjZSggc3RyZWFtICk7XG4gIH0pO1xufTtcblxuUmVjb3JkZXIucHJvdG90eXBlLmluaXRXb3JrZXIgPSBmdW5jdGlvbigpe1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciBzdHJlYW1QYWdlID0gZnVuY3Rpb24oIGUgKSB7IHNlbGYuc3RyZWFtUGFnZSggZS5kYXRhICk7IH07XG4gIHZhciBzdG9yZVBhZ2UgPSBmdW5jdGlvbiggZSApIHsgc2VsZi5zdG9yZVBhZ2UoIGUuZGF0YSApOyB9O1xuXG4gIHRoaXMucmVjb3JkZWRQYWdlcyA9IFtdO1xuICB0aGlzLnRvdGFsTGVuZ3RoID0gMDtcbiAgdGhpcy5lbmNvZGVyID0gbmV3IGdsb2JhbC5Xb3JrZXIoIHRoaXMuY29uZmlnLmVuY29kZXJQYXRoICk7XG4gIHRoaXMuZW5jb2Rlci5hZGRFdmVudExpc3RlbmVyKCBcIm1lc3NhZ2VcIiwgdGhpcy5jb25maWcuc3RyZWFtUGFnZXMgPyBzdHJlYW1QYWdlIDogc3RvcmVQYWdlICk7XG59O1xuXG5SZWNvcmRlci5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbigpe1xuICBpZiAoIHRoaXMuc3RhdGUgPT09IFwicmVjb3JkaW5nXCIgKXtcbiAgICB0aGlzLnN0YXRlID0gXCJwYXVzZWRcIjtcbiAgICB0aGlzLm9ucGF1c2UoKTtcbiAgfVxufTtcblxuUmVjb3JkZXIucHJvdG90eXBlLnJlc3VtZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIHRoaXMuc3RhdGUgPT09IFwicGF1c2VkXCIgKSB7XG4gICAgdGhpcy5zdGF0ZSA9IFwicmVjb3JkaW5nXCI7XG4gICAgdGhpcy5vbnJlc3VtZSgpO1xuICB9XG59O1xuXG5SZWNvcmRlci5wcm90b3R5cGUuc2V0UmVjb3JkaW5nR2FpbiA9IGZ1bmN0aW9uKCBnYWluICl7XG4gIHRoaXMuY29uZmlnLnJlY29yZGluZ0dhaW4gPSBnYWluO1xuXG4gIGlmICggdGhpcy5yZWNvcmRpbmdHYWluTm9kZSAmJiB0aGlzLmF1ZGlvQ29udGV4dCApIHtcbiAgICB0aGlzLnJlY29yZGluZ0dhaW5Ob2RlLmdhaW4uc2V0VGFyZ2V0QXRUaW1lKGdhaW4sIHRoaXMuYXVkaW9Db250ZXh0LmN1cnJlbnRUaW1lLCAwLjAxKTtcbiAgfVxufTtcblxuUmVjb3JkZXIucHJvdG90eXBlLnNldE1vbml0b3JHYWluID0gZnVuY3Rpb24oIGdhaW4gKXtcbiAgdGhpcy5jb25maWcubW9uaXRvckdhaW4gPSBnYWluO1xuXG4gIGlmICggdGhpcy5tb25pdG9yR2Fpbk5vZGUgJiYgdGhpcy5hdWRpb0NvbnRleHQgKSB7XG4gICAgdGhpcy5tb25pdG9yR2Fpbk5vZGUuZ2Fpbi5zZXRUYXJnZXRBdFRpbWUoZ2FpbiwgdGhpcy5hdWRpb0NvbnRleHQuY3VycmVudFRpbWUsIDAuMDEpO1xuICB9XG59O1xuXG5SZWNvcmRlci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiggc291cmNlTm9kZSApe1xuICBpZiAoIHRoaXMuc3RhdGUgPT09IFwiaW5hY3RpdmVcIiApIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5pbml0V29ya2VyKCk7XG4gICAgdGhpcy5pbml0QXVkaW9Db250ZXh0KCBzb3VyY2VOb2RlICk7XG4gICAgdGhpcy5pbml0QXVkaW9HcmFwaCgpO1xuXG4gICAgcmV0dXJuIHRoaXMuaW5pdFNvdXJjZU5vZGUoIHNvdXJjZU5vZGUgKS50aGVuKCBmdW5jdGlvbiggc291cmNlTm9kZSApe1xuICAgICAgc2VsZi5zdGF0ZSA9IFwicmVjb3JkaW5nXCI7XG4gICAgICBzZWxmLmVuY29kZXIucG9zdE1lc3NhZ2UoIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBjb21tYW5kOiAnaW5pdCcsXG4gICAgICAgIG9yaWdpbmFsU2FtcGxlUmF0ZTogc2VsZi5hdWRpb0NvbnRleHQuc2FtcGxlUmF0ZSxcbiAgICAgICAgd2F2U2FtcGxlUmF0ZTogc2VsZi5hdWRpb0NvbnRleHQuc2FtcGxlUmF0ZVxuICAgICAgfSwgc2VsZi5jb25maWcpKTtcbiAgICAgIHNlbGYuc291cmNlTm9kZSA9IHNvdXJjZU5vZGU7XG4gICAgICBzZWxmLnNvdXJjZU5vZGUuY29ubmVjdCggc2VsZi5tb25pdG9yR2Fpbk5vZGUgKTtcbiAgICAgIHNlbGYuc291cmNlTm9kZS5jb25uZWN0KCBzZWxmLnJlY29yZGluZ0dhaW5Ob2RlICk7XG4gICAgICBzZWxmLm9uc3RhcnQoKTtcbiAgICB9KTtcbiAgfVxufTtcblxuUmVjb3JkZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbigpe1xuICBpZiAoIHRoaXMuc3RhdGUgIT09IFwiaW5hY3RpdmVcIiApIHtcbiAgICB0aGlzLnN0YXRlID0gXCJpbmFjdGl2ZVwiO1xuICAgIHRoaXMubW9uaXRvckdhaW5Ob2RlLmRpc2Nvbm5lY3QoKTtcbiAgICB0aGlzLnNjcmlwdFByb2Nlc3Nvck5vZGUuZGlzY29ubmVjdCgpO1xuICAgIHRoaXMucmVjb3JkaW5nR2Fpbk5vZGUuZGlzY29ubmVjdCgpO1xuICAgIHRoaXMuc291cmNlTm9kZS5kaXNjb25uZWN0KCk7XG4gICAgdGhpcy5jbGVhclN0cmVhbSgpO1xuICAgIHRoaXMuZW5jb2Rlci5wb3N0TWVzc2FnZSh7IGNvbW1hbmQ6IFwiZG9uZVwiIH0pO1xuICB9XG59O1xuXG5SZWNvcmRlci5wcm90b3R5cGUuc3RvcmVQYWdlID0gZnVuY3Rpb24oIHBhZ2UgKSB7XG4gIGlmICggcGFnZSA9PT0gbnVsbCApIHtcbiAgICB2YXIgb3V0cHV0RGF0YSA9IG5ldyBVaW50OEFycmF5KCB0aGlzLnRvdGFsTGVuZ3RoICk7XG4gICAgdGhpcy5yZWNvcmRlZFBhZ2VzLnJlZHVjZSggZnVuY3Rpb24oIG9mZnNldCwgcGFnZSApe1xuICAgICAgb3V0cHV0RGF0YS5zZXQoIHBhZ2UsIG9mZnNldCApO1xuICAgICAgcmV0dXJuIG9mZnNldCArIHBhZ2UubGVuZ3RoO1xuICAgIH0sIDApO1xuXG4gICAgdGhpcy5vbmRhdGFhdmFpbGFibGUoIG91dHB1dERhdGEgKTtcbiAgICB0aGlzLm9uc3RvcCgpO1xuICB9XG5cbiAgZWxzZSB7XG4gICAgdGhpcy5yZWNvcmRlZFBhZ2VzLnB1c2goIHBhZ2UgKTtcbiAgICB0aGlzLnRvdGFsTGVuZ3RoICs9IHBhZ2UubGVuZ3RoO1xuICB9XG59O1xuXG5SZWNvcmRlci5wcm90b3R5cGUuc3RyZWFtUGFnZSA9IGZ1bmN0aW9uKCBwYWdlICkge1xuICBpZiAoIHBhZ2UgPT09IG51bGwgKSB7XG4gICAgdGhpcy5vbnN0b3AoKTtcbiAgfVxuXG4gIGVsc2Uge1xuICAgIHRoaXMub25kYXRhYXZhaWxhYmxlKCBwYWdlICk7XG4gIH1cbn07XG5cblxuLy8gQ2FsbGJhY2sgSGFuZGxlcnNcblJlY29yZGVyLnByb3RvdHlwZS5vbmRhdGFhdmFpbGFibGUgPSBmdW5jdGlvbigpe307XG5SZWNvcmRlci5wcm90b3R5cGUub25wYXVzZSA9IGZ1bmN0aW9uKCl7fTtcblJlY29yZGVyLnByb3RvdHlwZS5vbnJlc3VtZSA9IGZ1bmN0aW9uKCl7fTtcblJlY29yZGVyLnByb3RvdHlwZS5vbnN0YXJ0ID0gZnVuY3Rpb24oKXt9O1xuUmVjb3JkZXIucHJvdG90eXBlLm9uc3RvcCA9IGZ1bmN0aW9uKCl7fTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlY29yZGVyO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/recorder.js\n");

/***/ })

/******/ });
});