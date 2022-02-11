"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5349],{5349:(O,T,d)=>{d.r(T),d.d(T,{ion_nav:()=>B,ion_nav_link:()=>R});var m=d(6099),f=d(9533),g=d(7639),S=d(7438),l=d(5359),h=d(2629),P=d(5695);class p{constructor(t,n){this.component=t,this.params=n,this.state=1}init(t){var n=this;return(0,m.Z)(function*(){if(n.state=2,!n.element){const s=n.component;n.element=yield(0,P.a)(n.delegate,t,s,["ion-page","ion-page-invisible"],n.params)}})()}_destroy(){(0,l.m)(3!==this.state,"view state must be ATTACHED");const t=this.element;t&&(this.delegate?this.delegate.removeViewFromDom(t.parentElement,t):t.remove()),this.nav=void 0,this.state=3}}const C=(e,t,n)=>{if(!e||e.component!==t)return!1;const s=e.params;if(s===n||!s&&!n)return!0;if(!s||!n)return!1;const i=Object.keys(s),r=Object.keys(n);if(i.length!==r.length)return!1;for(const a of i)if(s[a]!==n[a])return!1;return!0},k=(e,t)=>e?e instanceof p?e:new p(e,t):null;let B=class{constructor(e){(0,f.r)(this,e),this.ionNavWillLoad=(0,f.e)(this,"ionNavWillLoad",7),this.ionNavWillChange=(0,f.e)(this,"ionNavWillChange",3),this.ionNavDidChange=(0,f.e)(this,"ionNavDidChange",3),this.transInstr=[],this.animationEnabled=!0,this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.animated=!0}swipeGestureChanged(){this.gesture&&this.gesture.enable(!0===this.swipeGesture)}rootChanged(){void 0!==this.root&&(this.useRouter||this.setRoot(this.root,this.rootParams))}componentWillLoad(){if(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]"),void 0===this.swipeGesture){const e=(0,g.b)(this);this.swipeGesture=g.c.getBoolean("swipeBackEnabled","ios"===e)}this.ionNavWillLoad.emit()}componentDidLoad(){var e=this;return(0,m.Z)(function*(){e.rootChanged(),e.gesture=(yield d.e(8672).then(d.bind(d,8672))).createSwipeBackGesture(e.el,e.canStart.bind(e),e.onStart.bind(e),e.onMove.bind(e),e.onEnd.bind(e)),e.swipeGestureChanged()})()}disconnectedCallback(){for(const e of this.views)(0,h.l)(e.element,h.d),e._destroy();this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.transInstr.length=this.views.length=0,this.destroyed=!0}push(e,t,n,s){return this.queueTrns({insertStart:-1,insertViews:[{component:e,componentProps:t}],opts:n},s)}insert(e,t,n,s,i){return this.queueTrns({insertStart:e,insertViews:[{component:t,componentProps:n}],opts:s},i)}insertPages(e,t,n,s){return this.queueTrns({insertStart:e,insertViews:t,opts:n},s)}pop(e,t){return this.queueTrns({removeStart:-1,removeCount:1,opts:e},t)}popTo(e,t,n){const s={removeStart:-1,removeCount:-1,opts:t};return"object"==typeof e&&e.component?(s.removeView=e,s.removeStart=1):"number"==typeof e&&(s.removeStart=e+1),this.queueTrns(s,n)}popToRoot(e,t){return this.queueTrns({removeStart:1,removeCount:-1,opts:e},t)}removeIndex(e,t=1,n,s){return this.queueTrns({removeStart:e,removeCount:t,opts:n},s)}setRoot(e,t,n,s){return this.setPages([{component:e,componentProps:t}],n,s)}setPages(e,t,n){return null==t&&(t={}),!0!==t.animated&&(t.animated=!1),this.queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},n)}setRouteId(e,t,n,s){const i=this.getActiveSync();if(C(i,e,t))return Promise.resolve({changed:!1,element:i.element});let r;const a=new Promise(o=>r=o);let u;const v={updateURL:!1,viewIsReady:o=>{let c;const b=new Promise(y=>c=y);return r({changed:!0,element:o,markVisible:(y=(0,m.Z)(function*(){c(),yield u}),function(){return y.apply(this,arguments)})}),b;var y}};if("root"===n)u=this.setRoot(e,t,v);else{const o=this.views.find(c=>C(c,e,t));o?u=this.popTo(o,Object.assign(Object.assign({},v),{direction:"back",animationBuilder:s})):"forward"===n?u=this.push(e,t,Object.assign(Object.assign({},v),{animationBuilder:s})):"back"===n&&(u=this.setRoot(e,t,Object.assign(Object.assign({},v),{direction:"back",animated:!0,animationBuilder:s})))}return a}getRouteId(){var e=this;return(0,m.Z)(function*(){const t=e.getActiveSync();return t?{id:t.element.tagName,params:t.params,element:t.element}:void 0})()}getActive(){return Promise.resolve(this.getActiveSync())}getByIndex(e){return Promise.resolve(this.views[e])}canGoBack(e){return Promise.resolve(this.canGoBackSync(e))}getPrevious(e){return Promise.resolve(this.getPreviousSync(e))}getLength(){return this.views.length}getActiveSync(){return this.views[this.views.length-1]}canGoBackSync(e=this.getActiveSync()){return!(!e||!this.getPreviousSync(e))}getPreviousSync(e=this.getActiveSync()){if(!e)return;const t=this.views,n=t.indexOf(e);return n>0?t[n-1]:void 0}queueTrns(e,t){var n=this;return(0,m.Z)(function*(){if(n.isTransitioning&&null!=e.opts&&e.opts.skipIfBusy)return Promise.resolve(!1);const s=new Promise((i,r)=>{e.resolve=i,e.reject=r});if(e.done=t,e.opts&&!1!==e.opts.updateURL&&n.useRouter){const i=document.querySelector("ion-router");if(i){const r=yield i.canTransition();if(!1===r)return Promise.resolve(!1);if("string"==typeof r)return i.push(r,e.opts.direction||"back"),Promise.resolve(!1)}}return e.insertViews&&0===e.insertViews.length&&(e.insertViews=void 0),n.transInstr.push(e),n.nextTrns(),s})()}success(e,t){if(this.destroyed)this.fireError("nav controller was destroyed",t);else if(t.done&&t.done(e.hasCompleted,e.requiresTransition,e.enteringView,e.leavingView,e.direction),t.resolve(e.hasCompleted),!1!==t.opts.updateURL&&this.useRouter){const n=document.querySelector("ion-router");n&&n.navChanged("back"===e.direction?"back":"forward")}}failed(e,t){this.destroyed?this.fireError("nav controller was destroyed",t):(this.transInstr.length=0,this.fireError(e,t))}fireError(e,t){t.done&&t.done(!1,!1,e),t.reject&&!this.destroyed?t.reject(e):t.resolve(!1)}nextTrns(){if(this.isTransitioning)return!1;const e=this.transInstr.shift();return!!e&&(this.runTransition(e),!0)}runTransition(e){var t=this;return(0,m.Z)(function*(){try{t.ionNavWillChange.emit(),t.isTransitioning=!0,t.prepareTI(e);const n=t.getActiveSync(),s=t.getEnteringView(e,n);if(!n&&!s)throw new Error("no views in the stack to be removed");s&&1===s.state&&(yield s.init(t.el)),t.postViewInit(s,n,e);const i=(e.enteringRequiresTransition||e.leavingRequiresTransition)&&s!==n;i&&e.opts&&n&&("back"===e.opts.direction&&(e.opts.animationBuilder=e.opts.animationBuilder||s&&s.animationBuilder),n.animationBuilder=e.opts.animationBuilder);const r=i?yield t.transition(s,n,e):{hasCompleted:!0,requiresTransition:!1};t.success(r,e),t.ionNavDidChange.emit()}catch(n){t.failed(n,e)}t.isTransitioning=!1,t.nextTrns()})()}prepareTI(e){const t=this.views.length;if(e.opts=e.opts||{},void 0===e.opts.delegate&&(e.opts.delegate=this.delegate),void 0!==e.removeView){(0,l.m)(void 0!==e.removeStart,"removeView needs removeStart"),(0,l.m)(void 0!==e.removeCount,"removeView needs removeCount");const i=this.views.indexOf(e.removeView);if(i<0)throw new Error("removeView was not found");e.removeStart+=i}void 0!==e.removeStart&&(e.removeStart<0&&(e.removeStart=t-1),e.removeCount<0&&(e.removeCount=t-e.removeStart),e.leavingRequiresTransition=e.removeCount>0&&e.removeStart+e.removeCount===t),e.insertViews&&((e.insertStart<0||e.insertStart>t)&&(e.insertStart=t),e.enteringRequiresTransition=e.insertStart===t);const n=e.insertViews;if(!n)return;(0,l.m)(n.length>0,"length can not be zero");const s=(e=>e.map(t=>t instanceof p?t:"component"in t?k(t.component,null===t.componentProps?void 0:t.componentProps):k(t,void 0)).filter(t=>null!==t))(n);if(0===s.length)throw new Error("invalid views to insert");for(const i of s){i.delegate=e.opts.delegate;const r=i.nav;if(r&&r!==this)throw new Error("inserted view was already inserted");if(3===i.state)throw new Error("inserted view was already destroyed")}e.insertViews=s}getEnteringView(e,t){const n=e.insertViews;if(void 0!==n)return n[n.length-1];const s=e.removeStart;if(void 0!==s){const i=this.views,r=s+e.removeCount;for(let a=i.length-1;a>=0;a--){const u=i[a];if((a<s||a>=r)&&u!==t)return u}}}postViewInit(e,t,n){(0,l.m)(t||e,"Both leavingView and enteringView are null"),(0,l.m)(n.resolve,"resolve must be valid"),(0,l.m)(n.reject,"reject must be valid");const s=n.opts,i=n.insertViews,r=n.removeStart,a=n.removeCount;let u;if(void 0!==r&&void 0!==a){(0,l.m)(r>=0,"removeStart can not be negative"),(0,l.m)(a>=0,"removeCount can not be negative"),u=[];for(let o=0;o<a;o++){const c=this.views[o+r];c&&c!==e&&c!==t&&u.push(c)}s.direction=s.direction||"back"}const v=this.views.length+(void 0!==i?i.length:0)-(void 0!==a?a:0);if((0,l.m)(v>=0,"final balance can not be negative"),0===v)throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(i){let o=n.insertStart;for(const c of i)this.insertViewAt(c,o),o++;n.enteringRequiresTransition&&(s.direction=s.direction||"forward")}if(u&&u.length>0){for(const o of u)(0,h.l)(o.element,h.b),(0,h.l)(o.element,h.c),(0,h.l)(o.element,h.d);for(const o of u)this.destroyView(o)}}transition(e,t,n){var s=this;return(0,m.Z)(function*(){const i=n.opts,r=i.progressAnimation?b=>s.sbAni=b:void 0,a=(0,g.b)(s),u=e.element,v=t&&t.element,o=Object.assign(Object.assign({mode:a,showGoBack:s.canGoBackSync(e),baseEl:s.el,progressCallback:r,animated:s.animated&&g.c.getBoolean("animated",!0),enteringEl:u,leavingEl:v},i),{animationBuilder:i.animationBuilder||s.animation||g.c.get("navAnimation")}),{hasCompleted:c}=yield(0,h.t)(o);return s.transitionFinish(c,e,t,i)})()}transitionFinish(e,t,n,s){const i=e?t:n;return i&&this.cleanup(i),{hasCompleted:e,requiresTransition:!0,enteringView:t,leavingView:n,direction:s.direction}}insertViewAt(e,t){const n=this.views,s=n.indexOf(e);s>-1?((0,l.m)(e.nav===this,"view is not part of the nav"),n.splice(t,0,n.splice(s,1)[0])):((0,l.m)(!e.nav,"nav is used"),e.nav=this,n.splice(t,0,e))}removeView(e){(0,l.m)(2===e.state||3===e.state,"view state should be loaded or destroyed");const t=this.views,n=t.indexOf(e);(0,l.m)(n>-1,"view must be part of the stack"),n>=0&&t.splice(n,1)}destroyView(e){e._destroy(),this.removeView(e)}cleanup(e){if(this.destroyed)return;const t=this.views,n=t.indexOf(e);for(let s=t.length-1;s>=0;s--){const i=t[s],r=i.element;r&&(s>n?((0,h.l)(r,h.d),this.destroyView(i)):s<n&&(0,h.s)(r,!0))}}canStart(){return!!this.swipeGesture&&!this.isTransitioning&&0===this.transInstr.length&&this.animationEnabled&&this.canGoBackSync()}onStart(){this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:!0}},void 0)}onMove(e){this.sbAni&&this.sbAni.progressStep(e)}onEnd(e,t,n){if(this.sbAni){this.animationEnabled=!1,this.sbAni.onFinish(()=>{this.animationEnabled=!0},{oneTimeCallback:!0});let s=e?-.001:.001;e?s+=(0,S.g)([0,0],[.32,.72],[0,1],[1,1],t)[0]:(this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"),s+=(0,S.g)([0,0],[1,0],[.68,.28],[1,1],t)[0]),this.sbAni.progressEnd(e?1:0,s,n)}}render(){return(0,f.h)("slot",null)}get el(){return(0,f.i)(this)}static get watchers(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}}};B.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";let R=class{constructor(e){(0,f.r)(this,e),this.routerDirection="forward",this.onClick=()=>((e,t,n,s,i)=>{const r=this.el.closest("ion-nav");if(r)if("forward"===t){if(void 0!==n)return r.push(n,s,{skipIfBusy:!0,animationBuilder:i})}else if("root"===t){if(void 0!==n)return r.setRoot(n,s,{skipIfBusy:!0,animationBuilder:i})}else if("back"===t)return r.pop({skipIfBusy:!0,animationBuilder:i});return Promise.resolve(!1)})(0,this.routerDirection,this.component,this.componentProps,this.routerAnimation)}render(){return(0,f.h)(f.H,{onClick:this.onClick})}get el(){return(0,f.i)(this)}}}}]);