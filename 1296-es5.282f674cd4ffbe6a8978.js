!function(){"use strict";(self.webpackChunkio_openchargemap_app=self.webpackChunkio_openchargemap_app||[]).push([[1296],{1296:function(e,n,t){t.r(n),t.d(n,{KEYBOARD_DID_CLOSE:function(){return o},KEYBOARD_DID_OPEN:function(){return i},copyVisualViewport:function(){return v},keyboardDidClose:function(){return b},keyboardDidOpen:function(){return p},keyboardDidResize:function(){return g},resetKeyboardAssist:function(){return f},setKeyboardClose:function(){return h},setKeyboardOpen:function(){return d},startKeyboardAssist:function(){return c},trackViewportChanges:function(){return l}});var i="ionKeyboardDidShow",o="ionKeyboardDidHide",r={},u={},a=!1,f=function(){r={},u={},a=!1},c=function(e){s(e),e.visualViewport&&(u=v(e.visualViewport),e.visualViewport.onresize=function(){l(e),p()||g(e)?d(e):b(e)&&h(e)})},s=function(e){e.addEventListener("keyboardDidShow",function(n){return d(e,n)}),e.addEventListener("keyboardDidHide",function(){return h(e)})},d=function(e,n){w(e,n),a=!0},h=function(e){y(e),a=!1},p=function(){return!a&&r.width===u.width&&(r.height-u.height)*u.scale>150},g=function(e){return a&&!b(e)},b=function(e){return a&&u.height===e.innerHeight},w=function(e,n){var t=new CustomEvent(i,{detail:{keyboardHeight:n?n.keyboardHeight:e.innerHeight-u.height}});e.dispatchEvent(t)},y=function(e){var n=new CustomEvent(o);e.dispatchEvent(n)},l=function(e){r=Object.assign({},u),u=v(e.visualViewport)},v=function(e){return{width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale}}}}])}();