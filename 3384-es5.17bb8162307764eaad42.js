!function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=i(e);if(t){var u=i(this).constructor;n=Reflect.construct(r,arguments,u)}else n=r.apply(this,arguments);return o(this,n)}}function o(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(self.webpackChunkio_openchargemap_app=self.webpackChunkio_openchargemap_app||[]).push([[3384],{3384:function(o,i,u){u.r(i),u.d(i,{GeolocationWeb:function(){return c},Geolocation:function(){return s}});var a=u(8239),c=function(o){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}(f,o);var i,u,c,s=r(f);function f(){return e(this,f),s.apply(this,arguments)}return i=f,(u=[{key:"getCurrentPosition",value:function(e){return(0,a.Z)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise(function(t,n){navigator.geolocation.getCurrentPosition(function(e){t(e)},function(e){n(e)},Object.assign({enableHighAccuracy:!1,timeout:1e4,maximumAge:0},e))}));case 1:case"end":return t.stop()}},t)}))()}},{key:"watchPosition",value:function(e,t){return(0,a.Z)(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return","".concat(navigator.geolocation.watchPosition(function(e){t(e)},function(e){t(null,e)},Object.assign({enableHighAccuracy:!1,timeout:1e4,maximumAge:0},e))));case 1:case"end":return n.stop()}},n)}))()}},{key:"clearWatch",value:function(e){return(0,a.Z)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:window.navigator.geolocation.clearWatch(parseInt(e.id,10));case 1:case"end":return t.stop()}},t)}))()}},{key:"checkPermissions",value:function(){var e=this;return(0,a.Z)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("undefined"!=typeof navigator&&navigator.permissions){t.next=2;break}throw e.unavailable("Permissions API not available in this browser");case 2:return t.next=4,window.navigator.permissions.query({name:"geolocation"});case 4:return t.t0=t.sent.state,t.abrupt("return",{location:t.t0});case 6:case"end":return t.stop()}},t)}))()}},{key:"requestPermissions",value:function(){var e=this;return(0,a.Z)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:throw e.unimplemented("Not implemented on web.");case 1:case"end":return t.stop()}},t)}))()}}])&&t(i.prototype,u),c&&t(i,c),f}(u(8384).Uw),s=new c}}])}();