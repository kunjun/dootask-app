// { "framework": "Vue"} 
if("undefined"==typeof app&&(app=weex),void 0===eeuiLog)var eeuiLog={_:function(e,t){var n=t.map((function(e){return"[object object]"===Object.prototype.toString.call(e).toLowerCase()?JSON.stringify(e):e}));void 0===this.__m&&(this.__m=app.requireModule("debug")),this.__m.addLog(e,n)},debug:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("debug",e)},log:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("log",e)},info:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("info",e)},warn:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("warn",e)},error:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("error",e)}};!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){var r,i,o=[];o.push(n(1)),r=n(2);var s=n(3);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some((function(e){return"default"!==e&&"__esModule"!==e}))&&console.error("named exports are not supported in *.vue files."),i=r=r.default),"function"==typeof i&&(i=i.options),i.__file="/Users/WEIYI/wwwroot/dootask/resources/mobile/src/pages/index.vue",i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-57509004",i.style=i.style||{},o.forEach((function(e){for(var t in e)i.style[t]=e[t]})),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,o),e.exports=r,e.exports.el="true",new Vue(e.exports)},function(e,t){e.exports={flex:{flex:1}}},function(e,t,n){"use strict";n.r(t);var r=app.requireModule("eeui"),i=app.requireModule("eeuiUmengPush"),o=app.requireModule("eeuiDeviceInfo");t.default={data:function(){return{uniqueId:"",resumeNum:0}},pageResume:function(){var e='if (typeof window.__onPageResume === "function"){window.__onPageResume('.concat(this.resumeNum,")}");this.$refs.web.setJavaScript(e),this.resumeNum++},pagePause:function(){this.$refs.web.setJavaScript('if (typeof window.__onPagePause === "function"){window.__onPagePause()}')},pageMessage:function(e){e.message.messageType},mounted:function(){this.uniqueId=r.getCachesString("appUniqueId",""),this.count(this.uniqueId)<5&&(this.uniqueId=this.randomString(6),r.setCachesString("appUniqueId",this.uniqueId,0)),r.setStatusBarStyle(!1),this.$refs.web.setUrl(r.rewriteUrl("../public/index.html"))},computed:{},methods:{onReceiveMessage:function(e){var t=e.message;switch(t.action){case"setUmengAlias":var n="".concat(WXEnvironment.platform,"-").concat(t.userid,"-").concat(this.uniqueId);i.addAlias(n,"userid",(function(e){"success"===e.status&&r.ajax({url:t.url,method:"get",data:{alias:n},headers:{token:t.token}},(function(e){eeuiLog.log(e)}))}));break;case"setVibrate":var s=this.runNum(t.time);s>0?o.setVibrate(s):o.setVibrate()}},onStateChanged:function(e){var t=e.status,n=e.url;"createTarget"===t&&r.openPage({pageType:"app",url:"web.js",params:{url:n}},(function(e){}))}}}},function(e,t){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:["flex"]},[t("web-view",{ref:"web",staticClass:["flex"],attrs:{hiddenDone:!0,progressbarVisibility:!1},on:{receiveMessage:this.onReceiveMessage,stateChanged:this.onStateChanged}})],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}]);