!function(){"use strict";function o(o,t,a){return t in o?Object.defineProperty(o,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):o[t]=a,o}function t(o,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}(self.webpackChunkio_openchargemap_app=self.webpackChunkio_openchargemap_app||[]).push([[7757],{7757:function(a,n,e){e.r(n),e.d(n,{ion_backdrop:function(){return s}});var r=e(3150),i=e(7585),c=e(960),s=function(){function a(o){!function(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(0,r.r)(this,o),this.ionBackdropTap=(0,r.e)(this,"ionBackdropTap",7),this.blocker=c.G.createBlocker({disableScroll:!0}),this.visible=!0,this.tappable=!0,this.stopPropagation=!0}var n,e,s;return n=a,(e=[{key:"connectedCallback",value:function(){this.stopPropagation&&this.blocker.block()}},{key:"disconnectedCallback",value:function(){this.blocker.unblock()}},{key:"onMouseDown",value:function(o){this.emitTap(o)}},{key:"emitTap",value:function(o){this.stopPropagation&&(o.preventDefault(),o.stopPropagation()),this.tappable&&this.ionBackdropTap.emit()}},{key:"render",value:function(){var t,a=(0,i.b)(this);return(0,r.h)(r.H,{tabindex:"-1","aria-hidden":"true",class:(t={},o(t,a,!0),o(t,"backdrop-hide",!this.visible),o(t,"backdrop-no-tappable",!this.tappable),t)})}}])&&t(n.prototype,e),s&&t(n,s),a}();s.style={ios:":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}",md:":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}"}}}])}();