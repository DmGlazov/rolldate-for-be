/** 
 * Rolldate 3.1.3
 * Copyright 2018-2022
 * weijhfly https://github.com/weijhfly/rolldate
 * Licensed under MIT
 * Released on: aug 4, 2018
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Rolldate = factory());
}(this, function () { 'use strict';

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css = ".rolldate-container{font-size:20px;color:#333;text-align:center}.rolldate-container ul{margin:0;padding:0}.rolldate-container li{list-style-type:none}.rolldate-container header{position:relative;line-height:60px;font-size:18px;border-bottom:1px solid #e0e0e0}.rolldate-container .rolldate-mask{position:fixed;width:100%;height:100%;top:0;left:0;z-index:999;background-color:rgba(37,38,45,.4)}.rolldate-container .rolldate-panel{position:fixed;bottom:0;left:0;width:100%;height:273px;z-index:1000;background:#fff;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transform:translate3d(0,273px,0);transform:translate3d(0,273px,0)}.rolldate-container .rolldate-btn{position:absolute;left:0;top:0;height:100%;padding:0 15px;color:#666;font-size:16px;cursor:pointer;-webkit-tap-highlight-color:transparent}.rolldate-container .rolldate-confirm{left:auto;right:0;color:#007bff}.rolldate-container .rolldate-content{position:relative;top:20px}.rolldate-container .rolldate-wrapper{display:-webkit-box;display:-webkit-flex;display:flex}.rolldate-container .rolldate-wrapper>div{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:173px;line-height:36px;overflow:hidden;-webkit-flex-basis:-8e;flex-basis:-8e;width:1%}.rolldate-container .rolldate-wrapper ul{margin-top:68px}.rolldate-container .rolldate-wrapper li{height:36px}.rolldate-container .rolldate-dim{position:absolute;left:0;top:0;width:100%;height:68px;background:-webkit-linear-gradient(bottom,hsla(0,0%,100%,.4),hsla(0,0%,100%,.8));background:-webkit-linear-gradient(bottom, hsla(0, 0%, 100%, 0.4), hsla(0, 0%, 100%, 0.8));background:linear-gradient(0deg,hsla(0,0%,100%,.4),hsla(0,0%,100%,.8));pointer-events:none;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:10}.rolldate-container .mask-top{border-bottom:1px solid #ebebeb}.rolldate-container .mask-bottom{top:auto;bottom:1px;border-top:1px solid #ebebeb}.rolldate-container .fadeIn{-webkit-transform:translateZ(0);transform:translateZ(0)}.rolldate-container .fadeOut{-webkit-transform:translate3d(0,273px,0);transform:translate3d(0,273px,0)}@media screen and (max-width:414px){.rolldate-container{font-size:18px}}@media screen and (max-width:320px){.rolldate-container{font-size:15px}}";
  styleInject(css);

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var bscroll_min = createCommonjsModule(function (module, exports) {
  /*!
   * better-normal-scroll v1.12.0
   * (c) 2016-2018 ustbhuangyi
   * Released under the MIT License.
   */
  !function(t,i){module.exports=i();}(commonjsGlobal,function(){var l=function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,i){var e=[],s=!0,o=!1,n=void 0;try{for(var r,h=t[Symbol.iterator]();!(s=(r=h.next()).done)&&(e.push(r.value),!i||e.length!==i);s=!0);}catch(t){o=!0,n=t;}finally{try{!s&&h.return&&h.return();}finally{if(o)throw n}}return e}(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")},c=function(t){if(Array.isArray(t)){for(var i=0,e=Array(t.length);i<t.length;i++)e[i]=t[i];return e}return Array.from(t)};var e="undefined"!=typeof window,t=e&&navigator.userAgent.toLowerCase(),i=t&&/wechatdevtools/.test(t),s=t&&0<t.indexOf("android");function w(){return window.performance&&window.performance.now?window.performance.now()+window.performance.timing.navigationStart:+new Date}function a(t){for(var i=arguments.length,e=Array(1<i?i-1:0),s=1;s<i;s++)e[s-1]=arguments[s];for(var o=0;o<e.length;o++){var n=e[o];for(var r in n)t[r]=n[r];}return t}function p(t){return null==t}function d(t,i){return Math.sqrt(t*t+i*i)}var o=e&&document.createElement("div").style,n=function(){if(!e)return !1;var t={webkit:"webkitTransform",Moz:"MozTransform",O:"OTransform",ms:"msTransform",standard:"transform"};for(var i in t)if(void 0!==o[t[i]])return i;return !1}();function r(t){return !1!==n&&("standard"===n?"transitionEnd"===t?"transitionend":t:n+t.charAt(0).toUpperCase()+t.substr(1))}function h(t,i,e,s){t.addEventListener(i,e,{passive:!1,capture:!!s});}function u(t,i,e,s){t.removeEventListener(i,e,{passive:!1,capture:!!s});}function m(t){for(var i=0,e=0;t;)i-=t.offsetLeft,e-=t.offsetTop,t=t.offsetParent;return {left:i,top:e}}function f(t){var i=t.getBoundingClientRect();return {left:-(i.left+window.pageXOffset),top:-(i.top+window.pageYOffset)}}var g=r("transform"),v=e&&r("perspective")in o,y=e&&("ontouchstart"in window||i),x=!1!==g,S=e&&r("transition")in o,T={transform:g,transitionTimingFunction:r("transitionTimingFunction"),transitionDuration:r("transitionDuration"),transitionDelay:r("transitionDelay"),transformOrigin:r("transformOrigin"),transitionEnd:r("transitionEnd")},b=1,_={touchstart:b,touchmove:b,touchend:b,mousedown:2,mousemove:2,mouseup:2};function Y(t){if(t instanceof window.SVGElement){var i=t.getBoundingClientRect();return {top:i.top,left:i.left,width:i.width,height:i.height}}return {top:t.offsetTop,left:t.offsetLeft,width:t.offsetWidth,height:t.offsetHeight}}function X(t,i){for(var e in i)if(i[e].test(t[e]))return !0;return !1}function M(t){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"click",e=void 0;"mouseup"===t.type||"mousecancel"===t.type?e=t:"touchend"!==t.type&&"touchcancel"!==t.type||(e=t.changedTouches[0]);var s={};e&&(s.screenX=e.screenX||0,s.screenY=e.screenY||0,s.clientX=e.clientX||0,s.clientY=e.clientY||0);var o=void 0,n=!0,r=!0;if("undefined"!=typeof MouseEvent)try{o=new MouseEvent(i,a({bubbles:n,cancelable:r},s));}catch(t){h();}else h();function h(){(o=document.createEvent("Event")).initEvent(i,n,r),a(o,s);}o.forwardedTouchEvent=!0,o._constructed=!0,t.target.dispatchEvent(o);}function P(t,i){t.removeChild(i);}var E={startX:0,startY:0,scrollX:!1,scrollY:!0,freeScroll:!1,directionLockThreshold:5,eventPassthrough:"",click:!1,tap:!1,bounce:!0,bounceTime:800,momentum:!0,momentumLimitTime:300,momentumLimitDistance:15,swipeTime:2500,swipeBounceTime:500,deceleration:.0015,flickLimitTime:200,flickLimitDistance:100,resizePolling:60,probeType:0,preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:!0,useTransition:!0,useTransform:!0,bindToWrapper:!1,disableMouse:y,disableTouch:!y,observeDOM:!0,autoBlur:!0,wheel:!1,snap:!1,scrollbar:!1,pullDownRefresh:!1,pullUpLoad:!1,mouseWheel:!1,stopPropagation:!1,zoom:!1,infinity:!1,dblclick:!1};var D={swipe:{style:"cubic-bezier(0.23, 1, 0.32, 1)",fn:function(t){return 1+--t*t*t*t*t}},swipeBounce:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(t){return t*(2-t)}},bounce:{style:"cubic-bezier(0.165, 0.84, 0.44, 1)",fn:function(t){return 1- --t*t*t*t}}};function I(t,i,e,s,o,n,r){var h=t-i,a=Math.abs(h)/e,l=r.deceleration,c=r.itemHeight,p=r.swipeBounceTime,d=r.wheel,u=r.swipeTime,m=d?4:15,f=t+a/l*(h<0?-1:1);return d&&c&&(f=Math.round(f/c)*c),f<s?(f=n?Math.max(s-n/4,s-n/m*a):s,u=p):o<f&&(f=n?Math.min(o+n/4,o+n/m*a):o,u=p),{destination:Math.round(f),duration:u}}function k(){}var z=e?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||function(t){return window.setTimeout(t,(t.interval||100/60)/2)}:k,H=e?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||function(t){window.clearTimeout(t);}:k,W=1,A=-1,O=1,C=-1,L=1,R=3;function F(t){console.error("[BScroll warn]: "+t);}function N(t,i){if(!t)throw new Error("[BScroll] "+i)}function U(t){var i=document.createElement("div"),e=document.createElement("div");return i.style.cssText="position:absolute;z-index:9999;pointerEvents:none",e.style.cssText="box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px;",e.className="bscroll-indicator","horizontal"===t?(i.style.cssText+=";height:7px;left:2px;right:2px;bottom:0",e.style.height="100%",i.className="bscroll-horizontal-scrollbar"):(i.style.cssText+=";width:7px;bottom:2px;top:2px;right:1px",e.style.width="100%",i.className="bscroll-vertical-scrollbar"),i.style.cssText+=";overflow:hidden",i.appendChild(e),i}function B(t,i){this.wrapper=i.el,this.wrapperStyle=this.wrapper.style,this.indicator=this.wrapper.children[0],this.indicatorStyle=this.indicator.style,this.scroller=t,this.direction=i.direction,i.fade?(this.visible=0,this.wrapperStyle.opacity="0"):this.visible=1,this.sizeRatioX=1,this.sizeRatioY=1,this.maxPosX=0,this.maxPosY=0,this.x=0,this.y=0,i.interactive&&this._addDOMEvents();}B.prototype.handleEvent=function(t){switch(t.type){case"touchstart":case"mousedown":this._start(t);break;case"touchmove":case"mousemove":this._move(t);break;case"touchend":case"mouseup":case"touchcancel":case"mousecancel":this._end(t);}},B.prototype.refresh=function(){this._shouldShow()&&(this.transitionTime(),this._calculate(),this.updatePosition());},B.prototype.fade=function(t,i){var e=this;if(!i||this.visible){var s=t?250:500;t=t?"1":"0",this.wrapperStyle[T.transitionDuration]=s+"ms",clearTimeout(this.fadeTimeout),this.fadeTimeout=setTimeout(function(){e.wrapperStyle.opacity=t,e.visible=+t;},0);}},B.prototype.updatePosition=function(){if("vertical"===this.direction){var t=Math.round(this.sizeRatioY*this.scroller.y);if(t<0){this.transitionTime(500);var i=Math.max(this.indicatorHeight+3*t,8);this.indicatorStyle.height=i+"px",t=0;}else if(t>this.maxPosY){this.transitionTime(500);var e=Math.max(this.indicatorHeight-3*(t-this.maxPosY),8);this.indicatorStyle.height=e+"px",t=this.maxPosY+this.indicatorHeight-e;}else this.indicatorStyle.height=this.indicatorHeight+"px";this.y=t,this.scroller.options.useTransform?this.indicatorStyle[T.transform]="translateY("+t+"px)"+this.scroller.translateZ:this.indicatorStyle.top=t+"px";}else{var s=Math.round(this.sizeRatioX*this.scroller.x);if(s<0){this.transitionTime(500);var o=Math.max(this.indicatorWidth+3*s,8);this.indicatorStyle.width=o+"px",s=0;}else if(s>this.maxPosX){this.transitionTime(500);var n=Math.max(this.indicatorWidth-3*(s-this.maxPosX),8);this.indicatorStyle.width=n+"px",s=this.maxPosX+this.indicatorWidth-n;}else this.indicatorStyle.width=this.indicatorWidth+"px";this.x=s,this.scroller.options.useTransform?this.indicatorStyle[T.transform]="translateX("+s+"px)"+this.scroller.translateZ:this.indicatorStyle.left=s+"px";}},B.prototype.transitionTime=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0;this.indicatorStyle[T.transitionDuration]=t+"ms";},B.prototype.transitionTimingFunction=function(t){this.indicatorStyle[T.transitionTimingFunction]=t;},B.prototype.destroy=function(){this._removeDOMEvents(),this.wrapper.parentNode.removeChild(this.wrapper);},B.prototype._start=function(t){var i=t.touches?t.touches[0]:t;t.preventDefault(),t.stopPropagation(),this.transitionTime(),this.initiated=!0,this.moved=!1,this.lastPointX=i.pageX,this.lastPointY=i.pageY,this.startTime=w(),this._handleMoveEvents(h),this.scroller.trigger("beforeScrollStart");},B.prototype._move=function(t){var i=t.touches?t.touches[0]:t;t.preventDefault(),t.stopPropagation(),this.moved||this.scroller.trigger("scrollStart"),this.moved=!0;var e=i.pageX-this.lastPointX;this.lastPointX=i.pageX;var s=i.pageY-this.lastPointY;this.lastPointY=i.pageY;var o=this.x+e,n=this.y+s;this._pos(o,n);},B.prototype._end=function(t){if(this.initiated){this.initiated=!1,t.preventDefault(),t.stopPropagation(),this._handleMoveEvents(u);var i=this.scroller.options.snap;if(i){var e=i.speed,s=i.easing,o=void 0===s?D.bounce:s,n=this.scroller._nearestSnap(this.scroller.x,this.scroller.y),r=e||Math.max(Math.max(Math.min(Math.abs(this.scroller.x-n.x),1e3),Math.min(Math.abs(this.scroller.y-n.y),1e3)),300);this.scroller.x===n.x&&this.scroller.y===n.y||(this.scroller.directionX=0,this.scroller.directionY=0,this.scroller.currentPage=n,this.scroller.scrollTo(n.x,n.y,r,o));}this.moved&&this.scroller.trigger("scrollEnd",{x:this.scroller.x,y:this.scroller.y});}},B.prototype._pos=function(t,i){t<0?t=0:t>this.maxPosX&&(t=this.maxPosX),i<0?i=0:i>this.maxPosY&&(i=this.maxPosY),t=Math.round(t/this.sizeRatioX),i=Math.round(i/this.sizeRatioY),this.scroller.scrollTo(t,i),this.scroller.trigger("scroll",{x:this.scroller.x,y:this.scroller.y});},B.prototype._shouldShow=function(){return "vertical"===this.direction&&this.scroller.hasVerticalScroll||"horizontal"===this.direction&&this.scroller.hasHorizontalScroll?!(this.wrapper.style.display=""):!(this.wrapper.style.display="none")},B.prototype._calculate=function(){if("vertical"===this.direction){var t=this.wrapper.clientHeight;this.indicatorHeight=Math.max(Math.round(t*t/(this.scroller.scrollerHeight||t||1)),8),this.indicatorStyle.height=this.indicatorHeight+"px",this.maxPosY=t-this.indicatorHeight,this.sizeRatioY=this.maxPosY/this.scroller.maxScrollY;}else{var i=this.wrapper.clientWidth;this.indicatorWidth=Math.max(Math.round(i*i/(this.scroller.scrollerWidth||i||1)),8),this.indicatorStyle.width=this.indicatorWidth+"px",this.maxPosX=i-this.indicatorWidth,this.sizeRatioX=this.maxPosX/this.scroller.maxScrollX;}},B.prototype._addDOMEvents=function(){var t=h;this._handleDOMEvents(t);},B.prototype._removeDOMEvents=function(){var t=u;this._handleDOMEvents(t),this._handleMoveEvents(t);},B.prototype._handleMoveEvents=function(t){this.scroller.options.disableTouch||t(window,"touchmove",this),this.scroller.options.disableMouse||t(window,"mousemove",this);},B.prototype._handleDOMEvents=function(t){this.scroller.options.disableTouch||(t(this.indicator,"touchstart",this),t(window,"touchend",this)),this.scroller.options.disableMouse||(t(this.indicator,"mousedown",this),t(window,"mouseup",this));};var q,V,Z,j,G,$,J,K,Q,tt,it=2e3;function et(t){if(t&&t.classList)return t.classList.contains("tombstone")}function st(t,i){var e=this;this.options=i,N("function"==typeof this.options.createTombstone,"Infinite scroll need createTombstone Function to create tombstone"),N("function"==typeof this.options.fetch,"Infinite scroll need fetch Function to fetch new data."),N("function"==typeof this.options.render,"Infinite scroll need render Function to render each item."),this.firstAttachedItem=0,this.lastAttachedItem=0,this.anchorScrollTop=0,this.anchorItem={index:0,offset:0},this.tombstoneHeight=0,this.tombstoneWidth=0,this.tombstones=[],this.items=[],this.loadedItems=0,this.requestInProgress=!1,this.hasMore=!0,this.scroller=t,this.wrapperEl=this.scroller.wrapper,this.scrollerEl=this.scroller.scroller,this.scroller.on("scroll",function(){e.onScroll();}),this.scroller.on("resize",function(){e.onResize();}),this.onResize();}function ot(t,i){this.wrapper="string"==typeof t?document.querySelector(t):t,this.wrapper||F("Can not resolve the wrapper DOM."),this.scroller=this.wrapper.children[0],this.scroller||F("The wrapper need at least one child element to be scroller."),this.scrollerStyle=this.scroller.style,this._init(t,i);}return st.prototype.onScroll=function(){var t=-this.scroller.y,i=t-this.anchorScrollTop;this.anchorItem=0===t?{index:0,offset:0}:this._calculateAnchoredItem(this.anchorItem,i),this.anchorScrollTop=t;var e=this._calculateAnchoredItem(this.anchorItem,this.wrapperEl.offsetHeight),s=this.anchorItem.index,o=e.index;i<0?(s-=30,o+=10):(s-=10,o+=30),this.fill(s,o),this.maybeRequestContent();},st.prototype.onResize=function(){var t=this.options.createTombstone();t.style.position="absolute",this.scrollerEl.appendChild(t),t.style.display="",this.tombstoneHeight=t.offsetHeight,this.tombstoneWidth=t.offsetWidth,this.scrollerEl.removeChild(t);for(var i=0;i<this.items.length;i++)this.items[i].height=this.items[i].width=0;this.onScroll();},st.prototype.fill=function(t,i){this.firstAttachedItem=Math.max(0,t),this.hasMore||(i=Math.min(i,this.items.length)),this.lastAttachedItem=i,this.attachContent();},st.prototype.maybeRequestContent=function(){var s=this;if(!this.requestInProgress&&this.hasMore){var t=this.lastAttachedItem-this.loadedItems;t<=0||(this.requestInProgress=!0,this.options.fetch(t).then(function(t){if(t)s.addContent(t);else{s.hasMore=!1;var i=s._removeTombstones(),e=0;s.anchorItem.index<=s.items.length?(e=s._fixScrollPosition(),s._setupAnimations({},e),s.scroller.resetPosition(s.scroller.options.bounceTime)):(s.anchorItem.index-=i,e=s._fixScrollPosition(),s._setupAnimations({},e),s.scroller.stop(),s.scroller.resetPosition(),s.onScroll());}}));}},st.prototype.addContent=function(t){this.requestInProgress=!1;for(var i=0;i<t.length;i++)this.items.length<=this.loadedItems&&this._addItem(),this.items[this.loadedItems++].data=t[i];this.attachContent(),this.maybeRequestContent();},st.prototype.attachContent=function(){var t=this._collectUnusedNodes(),i=this._createDOMNodes(t);this._cleanupUnusedNodes(t),this._cacheNodeSize();var e=this._fixScrollPosition();this._setupAnimations(i,e);},st.prototype._removeTombstones=function(){for(var t,i=void 0,e=this.items.length,s=0;s<e;s++){var o=this.items[s].node,n=this.items[s].data;o&&!et(o)||n||(i||(i=s),o&&this.scrollerEl.removeChild(o));}return t=e-i,this.items.splice(i),this.lastAttachedItem=Math.min(this.lastAttachedItem,this.items.length),t},st.prototype._collectUnusedNodes=function(){for(var t=[],i=0;i<this.items.length;i++)if(i!==this.firstAttachedItem){var e=this.items[i].node;e&&(et(e)?(this.tombstones.push(e),this.tombstones[this.tombstones.length-1].style.display="none"):t.push(e)),this.items[i].node=null;}else i=this.lastAttachedItem-1;return t},st.prototype._createDOMNodes=function(t){for(var i={},e=this.firstAttachedItem;e<this.lastAttachedItem;e++){for(;this.items.length<=e;)this._addItem();var s=this.items[e].node,o=this.items[e].data;if(s){if(!et(s)||!o)continue;s.style.zIndex=1,i[e]=[s,this.items[e].top-this.anchorScrollTop],this.items[e].node=null;}var n=o?this.options.render(o,t.pop()):this._getTombStone();n.style.position="absolute",this.items[e].top=-1,this.scrollerEl.appendChild(n),this.items[e].node=n;}return i},st.prototype._cleanupUnusedNodes=function(t){for(;t.length;)this.scrollerEl.removeChild(t.pop());},st.prototype._cacheNodeSize=function(){for(var t=this.firstAttachedItem;t<this.lastAttachedItem;t++)this.items[t].data&&!this.items[t].height&&(this.items[t].height=this.items[t].node.offsetHeight,this.items[t].width=this.items[t].node.offsetWidth);},st.prototype._fixScrollPosition=function(){for(var t=this.anchorScrollTop=0;t<this.anchorItem.index;t++)this.anchorScrollTop+=this.items[t].height||this.tombstoneHeight;this.anchorScrollTop+=this.anchorItem.offset;for(var i=this.anchorScrollTop-this.anchorItem.offset,e=this.anchorItem.index;e>this.firstAttachedItem;)i-=this.items[e-1].height||this.tombstoneHeight,e--;return i},st.prototype._setupAnimations=function(e,t){var s=this;for(var i in e){var o=e[i];this.items[i].node.style.transform="translateY("+(this.anchorScrollTop+o[1])+"px) scale("+this.tombstoneWidth/this.items[i].width+", "+this.tombstoneHeight/this.items[i].height+")",this.items[i].node.offsetTop,o[0].offsetTop,this.items[i].node.style.transition="transform 200ms";}for(var n=this.firstAttachedItem;n<this.lastAttachedItem;n++){var r=e[n];if(r){var h=r[0];h.style.transition="transform 200ms, opacity 200ms",h.style.transform="translateY("+t+"px) scale("+this.items[n].width/this.tombstoneWidth+", "+this.items[n].height/this.tombstoneHeight+")",h.style.opacity=0;}t!==this.items[n].top&&(r||(this.items[n].node.style.transition=""),this.items[n].node.style.transform="translateY("+t+"px)"),this.items[n].top=t,t+=this.items[n].height||this.tombstoneHeight;}this.scroller.maxScrollY=-(t-this.wrapperEl.offsetHeight+(this.hasMore?it:0)),setTimeout(function(){for(var t in e){var i=e[t];i[0].style.display="none",s.tombstones.push(i[0]);}},200);},st.prototype._getTombStone=function(){var t=this.tombstones.pop();return t?(t.style.display="",t.style.opacity=1,t.style.transform="",t.style.transition="",t):this.options.createTombstone()},st.prototype._addItem=function(){this.items.push({data:null,node:null,height:0,width:0,top:0});},st.prototype._calculateAnchoredItem=function(t,i){if(0===i)return t;var e=t.index,s=0;if((i+=t.offset)<0){for(;i<0&&0<e&&this.items[e-1].height;)i+=this.items[e-1].height,e--;s=Math.max(-e,Math.ceil(Math.min(i,0)/this.tombstoneHeight));}else{for(;0<i&&e<this.items.length&&this.items[e].height&&this.items[e].height<i;)i-=this.items[e].height,e++;(e>=this.items.length||!this.items[e].height)&&(s=Math.floor(Math.max(i,0)/this.tombstoneHeight));}return {index:e+=s,offset:i-=s*this.tombstoneHeight}},(q=ot).prototype._init=function(t,i){this._handleOptions(i),this._events={},this.x=0,this.y=0,this.directionX=0,this.directionY=0,this.setScale(1),this._addDOMEvents(),this._initExtFeatures(),this._watchTransition(),this.options.observeDOM&&this._initDOMObserver(),this.options.autoBlur&&this._handleAutoBlur(),this.refresh(),this.options.snap||this.scrollTo(this.options.startX,this.options.startY),this.enable();},q.prototype.setScale=function(t){this.lastScale=p(this.scale)?t:this.scale,this.scale=t;},q.prototype._handleOptions=function(t){this.options=a({},E,t),this.translateZ=this.options.HWCompositing&&v?" translateZ(0)":"",this.options.useTransition=this.options.useTransition&&S,this.options.useTransform=this.options.useTransform&&x,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollX="horizontal"!==this.options.eventPassthrough&&this.options.scrollX,this.options.scrollY="vertical"!==this.options.eventPassthrough&&this.options.scrollY,this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,!0===this.options.tap&&(this.options.tap="tap");},q.prototype._addDOMEvents=function(){var t=h;this._handleDOMEvents(t);},q.prototype._removeDOMEvents=function(){var t=u;this._handleDOMEvents(t);},q.prototype._handleDOMEvents=function(t){var i=this.options.bindToWrapper?this.wrapper:window;t(window,"orientationchange",this),t(window,"resize",this),this.options.click&&t(this.wrapper,"click",this,!0),this.options.disableMouse||(t(this.wrapper,"mousedown",this),t(i,"mousemove",this),t(i,"mousecancel",this),t(i,"mouseup",this)),y&&!this.options.disableTouch&&(t(this.wrapper,"touchstart",this),t(i,"touchmove",this),t(i,"touchcancel",this),t(i,"touchend",this)),t(this.scroller,T.transitionEnd,this);},q.prototype._initExtFeatures=function(){this.options.snap&&this._initSnap(),this.options.scrollbar&&this._initScrollbar(),this.options.pullUpLoad&&this._initPullUp(),this.options.pullDownRefresh&&this._initPullDown(),this.options.wheel&&this._initWheel(),this.options.mouseWheel&&this._initMouseWheel(),this.options.zoom&&this._initZoom(),this.options.infinity&&this._initInfinite();},q.prototype._watchTransition=function(){if("function"==typeof Object.defineProperty){var o=this,n=!1,t=this.useTransition?"isInTransition":"isAnimating";Object.defineProperty(this,t,{get:function(){return n},set:function(t){n=t;for(var i=o.scroller.children.length?o.scroller.children:[o.scroller],e=n&&!o.pulling?"none":"auto",s=0;s<i.length;s++)i[s].style.pointerEvents=e;}});}},q.prototype._handleAutoBlur=function(){this.on("scrollStart",function(){var t=document.activeElement;!t||"INPUT"!==t.tagName&&"TEXTAREA"!==t.tagName||t.blur();});},q.prototype._initDOMObserver=function(){var n=this;if("undefined"!=typeof MutationObserver){var r=void 0,t=new MutationObserver(function(t){if(!n._shouldNotRefresh()){for(var i=!1,e=!1,s=0;s<t.length;s++){var o=t[s];if("attributes"!==o.type){i=!0;break}if(o.target!==n.scroller){e=!0;break}}i?n.refresh():e&&(clearTimeout(r),r=setTimeout(function(){n._shouldNotRefresh()||n.refresh();},60));}});t.observe(this.scroller,{attributes:!0,childList:!0,subtree:!0}),this.on("destroy",function(){t.disconnect();});}else this._checkDOMUpdate();},q.prototype._shouldNotRefresh=function(){var t=this.x>this.minScrollX||this.x<this.maxScrollX||this.y>this.minScrollY||this.y<this.maxScrollY;return this.isInTransition||this.stopFromTransition||t},q.prototype._checkDOMUpdate=function(){var e=Y(this.scroller),s=e.width,o=e.height;function n(){var t=this;setTimeout(function(){(function(){if(!this.destroyed){var t=(e=Y(this.scroller)).width,i=e.height;s===t&&o===i||this.refresh(),s=t,o=i,n.call(this);}}).call(t);},1e3);}n.call(this);},q.prototype.handleEvent=function(t){switch(t.type){case"touchstart":case"mousedown":this._start(t),this.options.zoom&&t.touches&&1<t.touches.length&&this._zoomStart(t);break;case"touchmove":case"mousemove":this.options.zoom&&t.touches&&1<t.touches.length?this._zoom(t):this._move(t);break;case"touchend":case"mouseup":case"touchcancel":case"mousecancel":this.scaled?this._zoomEnd(t):this._end(t);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(t);break;case"click":this.enabled&&!t._constructed&&(X(t.target,this.options.preventDefaultException)||(t.preventDefault(),t.stopPropagation()));break;case"wheel":case"DOMMouseScroll":case"mousewheel":this._onMouseWheel(t);}},q.prototype.refresh=function(){var t=Y(this.wrapper);this.wrapperWidth=t.width,this.wrapperHeight=t.height;var i=Y(this.scroller);this.scrollerWidth=Math.round(i.width*this.scale),this.scrollerHeight=Math.round(i.height*this.scale),this.relativeX=i.left,this.relativeY=i.top,this.minScrollX=0,this.minScrollY=0;var e=this.options.wheel;e?(this.items=this.scroller.children,this.options.itemHeight=this.itemHeight=this.items.length?this.scrollerHeight/this.items.length:0,void 0===this.selectedIndex&&(this.selectedIndex=e.selectedIndex||0),this.options.startY=-this.selectedIndex*this.itemHeight,this.maxScrollX=0,this.maxScrollY=-this.itemHeight*(this.items.length-1)):(this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.options.infinity||(this.maxScrollY=this.wrapperHeight-this.scrollerHeight),this.maxScrollX<0?(this.maxScrollX-=this.relativeX,this.minScrollX=-this.relativeX):1<this.scale&&(this.maxScrollX=this.maxScrollX/2-this.relativeX,this.minScrollX=this.maxScrollX),this.maxScrollY<0?(this.maxScrollY-=this.relativeY,this.minScrollY=-this.relativeY):1<this.scale&&(this.maxScrollY=this.maxScrollY/2-this.relativeY,this.minScrollY=this.maxScrollY)),this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<this.minScrollX,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<this.minScrollY,this.hasHorizontalScroll||(this.maxScrollX=this.minScrollX,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=this.minScrollY,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,this.wrapperOffset=m(this.wrapper),this.trigger("refresh"),!this.scaled&&this.resetPosition();},q.prototype.enable=function(){this.enabled=!0;},q.prototype.disable=function(){this.enabled=!1;},(V=ot).prototype._start=function(t){var i=_[t.type];if((i===b||0===t.button)&&!(!this.enabled||this.destroyed||this.initiated&&this.initiated!==i)){this.initiated=i,this.options.preventDefault&&!X(t.target,this.options.preventDefaultException)&&t.preventDefault(),this.options.stopPropagation&&t.stopPropagation(),this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.movingDirectionX=0,this.movingDirectionY=0,this.directionLocked=0,this._transitionTime(),this.startTime=w(),this.options.wheel&&(this.target=t.target),this.stop();var e=t.touches?t.touches[0]:t;this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=e.pageX,this.pointY=e.pageY,this.trigger("beforeScrollStart");}},V.prototype._move=function(t){if(this.enabled&&!this.destroyed&&_[t.type]===this.initiated){this.options.preventDefault&&t.preventDefault(),this.options.stopPropagation&&t.stopPropagation();var i=t.touches?t.touches[0]:t,e=i.pageX-this.pointX,s=i.pageY-this.pointY;this.pointX=i.pageX,this.pointY=i.pageY,this.distX+=e,this.distY+=s;var o=Math.abs(this.distX),n=Math.abs(this.distY),r=w();if(!(r-this.endTime>this.options.momentumLimitTime&&n<this.options.momentumLimitDistance&&o<this.options.momentumLimitDistance)){if(this.directionLocked||this.options.freeScroll||(o>n+this.options.directionLockThreshold?this.directionLocked="h":n>=o+this.options.directionLockThreshold?this.directionLocked="v":this.directionLocked="n"),"h"===this.directionLocked){if("vertical"===this.options.eventPassthrough)t.preventDefault();else if("horizontal"===this.options.eventPassthrough)return void(this.initiated=!1);s=0;}else if("v"===this.directionLocked){if("horizontal"===this.options.eventPassthrough)t.preventDefault();else if("vertical"===this.options.eventPassthrough)return void(this.initiated=!1);e=0;}e=this.hasHorizontalScroll?e:0,s=this.hasVerticalScroll?s:0,this.movingDirectionX=0<e?C:e<0?O:0,this.movingDirectionY=0<s?A:s<0?W:0;var h=this.x+e,a=this.y+s,l=!1,c=!1,p=!1,d=!1,u=this.options.bounce;!1!==u&&(l=void 0===u.top||u.top,c=void 0===u.bottom||u.bottom,p=void 0===u.left||u.left,d=void 0===u.right||u.right),(h>this.minScrollX||h<this.maxScrollX)&&(h=h>this.minScrollX&&p||h<this.maxScrollX&&d?this.x+e/3:h>this.minScrollX?this.minScrollX:this.maxScrollX),(a>this.minScrollY||a<this.maxScrollY)&&(a=a>this.minScrollY&&l||a<this.maxScrollY&&c?this.y+s/3:a>this.minScrollY?this.minScrollY:this.maxScrollY),this.moved||(this.moved=!0,this.trigger("scrollStart")),this._translate(h,a),r-this.startTime>this.options.momentumLimitTime&&(this.startTime=r,this.startX=this.x,this.startY=this.y,this.options.probeType===L&&this.trigger("scroll",{x:this.x,y:this.y})),this.options.probeType>L&&this.trigger("scroll",{x:this.x,y:this.y});var m=document.documentElement.scrollLeft||window.pageXOffset||document.body.scrollLeft,f=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,g=this.pointX-m,v=this.pointY-f;(g>document.documentElement.clientWidth-this.options.momentumLimitDistance||g<this.options.momentumLimitDistance||v<this.options.momentumLimitDistance||v>document.documentElement.clientHeight-this.options.momentumLimitDistance)&&this._end(t);}}},V.prototype._end=function(t){if(this.enabled&&!this.destroyed&&_[t.type]===this.initiated){this.initiated=!1,this.options.preventDefault&&!X(t.target,this.options.preventDefaultException)&&t.preventDefault(),this.options.stopPropagation&&t.stopPropagation(),this.trigger("touchEnd",{x:this.x,y:this.y}),this.isInTransition=!1;var i=Math.round(this.x),e=Math.round(this.y),s=i-this.absStartX,o=e-this.absStartY;if(this.directionX=0<s?C:s<0?O:0,this.directionY=0<o?A:o<0?W:0,!this.options.pullDownRefresh||!this._checkPullDown())if(this._checkClick(t))this.trigger("scrollCancel");else if(!this.resetPosition(this.options.bounceTime,D.bounce)){this.scrollTo(i,e),this.endTime=w();var n=this.endTime-this.startTime,r=Math.abs(i-this.startX),h=Math.abs(e-this.startY);if(this._events.flick&&n<this.options.flickLimitTime&&r<this.options.flickLimitDistance&&h<this.options.flickLimitDistance)this.trigger("flick");else{var a=0;if(this.options.momentum&&n<this.options.momentumLimitTime&&(h>this.options.momentumLimitDistance||r>this.options.momentumLimitDistance)){var l=!1,c=!1,p=!1,d=!1,u=this.options.bounce;!1!==u&&(l=void 0===u.top||u.top,c=void 0===u.bottom||u.bottom,p=void 0===u.left||u.left,d=void 0===u.right||u.right);var m=this.directionX===C&&p||this.directionX===O&&d?this.wrapperWidth:0,f=this.directionY===A&&l||this.directionY===W&&c?this.wrapperHeight:0,g=this.hasHorizontalScroll?I(this.x,this.startX,n,this.maxScrollX,this.minScrollX,m,this.options):{destination:i,duration:0},v=this.hasVerticalScroll?I(this.y,this.startY,n,this.maxScrollY,this.minScrollY,f,this.options):{destination:e,duration:0};i=g.destination,e=v.destination,a=Math.max(g.duration,v.duration),this.isInTransition=!0;}else this.options.wheel&&(e=Math.round(e/this.itemHeight)*this.itemHeight,a=this.options.wheel.adjustTime||400);var y=D.swipe;if(this.options.snap){var x=this._nearestSnap(i,e);this.currentPage=x,a=this.options.snapSpeed||Math.max(Math.max(Math.min(Math.abs(i-x.x),1e3),Math.min(Math.abs(e-x.y),1e3)),300),i=x.x,e=x.y,this.directionX=0,this.directionY=0,y=this.options.snap.easing||D.bounce;}if(i!==this.x||e!==this.y)return (i>this.minScrollX||i<this.maxScrollX||e>this.minScrollY||e<this.maxScrollY)&&(y=D.swipeBounce),void this.scrollTo(i,e,a,y);this.options.wheel&&(this.selectedIndex=Math.round(Math.abs(this.y/this.itemHeight))),this.trigger("scrollEnd",{x:this.x,y:this.y});}}}},V.prototype._checkClick=function(t){var i,e,s,o=this.stopFromTransition&&!this.pulling;if(this.stopFromTransition=!1,!this.moved){if(this.options.wheel){if(this.target&&this.target.className===this.options.wheel.wheelWrapperClass){var n=Math.abs(Math.round(this.y/this.itemHeight)),r=Math.round((this.pointY+f(this.wrapper).top-this.wrapperHeight/2)/this.itemHeight);this.target=this.items[n+r];}return this.scrollToElement(this.target,this.options.wheel.adjustTime||400,!0,!0,D.swipe),!0}if(!o){var h=this.options.dblclick,a=!1;if(h&&this.lastClickTime){var l=h.delay,c=void 0===l?300:l;w()-this.lastClickTime<c&&(a=!0,M(t,"dblclick"));}return this.options.tap&&(i=t,e=this.options.tap,(s=document.createEvent("Event")).initEvent(e,!0,!0),s.pageX=i.pageX,s.pageY=i.pageY,i.target.dispatchEvent(s)),this.options.click&&!X(t.target,this.options.preventDefaultException)&&M(t),this.lastClickTime=a?null:w(),!0}return !1}return !1},V.prototype._resize=function(){var t=this;this.enabled&&(s&&(this.wrapper.scrollTop=0),clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){t.refresh();},this.options.resizePolling));},V.prototype._startProbe=function(){H(this.probeTimer),this.probeTimer=z(function t(){var i=e.getComputedPosition();e.trigger("scroll",i),e.isInTransition?e.probeTimer=z(t):e.trigger("scrollEnd",i);});var e=this;},V.prototype._transitionTime=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0;if(this.scrollerStyle[T.transitionDuration]=t+"ms",this.options.wheel)for(var i=0;i<this.items.length;i++)this.items[i].style[T.transitionDuration]=t+"ms";if(this.indicators)for(var e=0;e<this.indicators.length;e++)this.indicators[e].transitionTime(t);},V.prototype._transitionTimingFunction=function(t){if(this.scrollerStyle[T.transitionTimingFunction]=t,this.options.wheel)for(var i=0;i<this.items.length;i++)this.items[i].style[T.transitionTimingFunction]=t;if(this.indicators)for(var e=0;e<this.indicators.length;e++)this.indicators[e].transitionTimingFunction(t);},V.prototype._transitionEnd=function(t){t.target===this.scroller&&this.isInTransition&&(this._transitionTime(),(!this.pulling||this.movingDirectionY===W)&&!this.resetPosition(this.options.bounceTime,D.bounce)&&(this.isInTransition=!1,this.options.probeType!==R&&this.trigger("scrollEnd",{x:this.x,y:this.y})));},V.prototype._translate=function(t,i,e){if(N(!p(t)&&!p(i),"Translate x or y is null or undefined."),p(e)&&(e=this.scale),this.options.useTransform?this.scrollerStyle[T.transform]="translate("+t+"px,"+i+"px) scale("+e+")"+this.translateZ:(t=Math.round(t),i=Math.round(i),this.scrollerStyle.left=t+"px",this.scrollerStyle.top=i+"px"),this.options.wheel)for(var s=this.options.wheel.rotate,o=void 0===s?25:s,n=0;n<this.items.length;n++){var r=o*(i/this.itemHeight+n);this.items[n].style[T.transform]="rotateX("+r+"deg)";}if(this.x=t,this.y=i,this.setScale(e),this.indicators)for(var h=0;h<this.indicators.length;h++)this.indicators[h].updatePosition();},V.prototype._animate=function(r,h,a,l){var c=this,p=this.x,d=this.y,u=this.lastScale,m=this.scale,f=w(),g=f+a;this.isAnimating=!0,H(this.animateTimer),function t(){var i=w();if(g<=i)return c.isAnimating=!1,c._translate(r,h,m),void(c.pulling||c.resetPosition(c.options.bounceTime)||c.trigger("scrollEnd",{x:c.x,y:c.y}));var e=l(i=(i-f)/a),s=(r-p)*e+p,o=(h-d)*e+d,n=(m-u)*e+u;c._translate(s,o,n),c.isAnimating&&(c.animateTimer=z(t)),c.options.probeType===R&&c.trigger("scroll",{x:c.x,y:c.y});}();},V.prototype.scrollBy=function(t,i){var e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0,s=3<arguments.length&&void 0!==arguments[3]?arguments[3]:D.bounce;t=this.x+t,i=this.y+i,this.scrollTo(t,i,e,s);},V.prototype.scrollTo=function(t,i){var e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0,s=3<arguments.length&&void 0!==arguments[3]?arguments[3]:D.bounce;this.isInTransition=this.options.useTransition&&0<e&&(t!==this.x||i!==this.y),!e||this.options.useTransition?(this._transitionTimingFunction(s.style),this._transitionTime(e),this._translate(t,i),e&&this.options.probeType===R&&this._startProbe(),this.options.wheel&&(i>this.minScrollY?this.selectedIndex=0:i<this.maxScrollY?this.selectedIndex=this.items.length-1:this.selectedIndex=Math.round(Math.abs(i/this.itemHeight)))):this._animate(t,i,e,s.fn);},V.prototype.scrollToElement=function(t,i,e,s,o){if(t&&(t=t.nodeType?t:this.scroller.querySelector(t),!this.options.wheel||t.className===this.options.wheel.wheelItemClass)){var n=m(t);n.left-=this.wrapperOffset.left,n.top-=this.wrapperOffset.top,!0===e&&(e=Math.round(t.offsetWidth/2-this.wrapper.offsetWidth/2)),!0===s&&(s=Math.round(t.offsetHeight/2-this.wrapper.offsetHeight/2)),n.left-=e||0,n.top-=s||0,n.left=n.left>this.minScrollX?this.minScrollX:n.left<this.maxScrollX?this.maxScrollX:n.left,n.top=n.top>this.minScrollY?this.minScrollY:n.top<this.maxScrollY?this.maxScrollY:n.top,this.options.wheel&&(n.top=Math.round(n.top/this.itemHeight)*this.itemHeight),this.scrollTo(n.left,n.top,i,o);}},V.prototype.resetPosition=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:D.bounce,e=this.x,s=Math.round(e);!this.hasHorizontalScroll||s>this.minScrollX?e=this.minScrollX:s<this.maxScrollX&&(e=this.maxScrollX);var o=this.y,n=Math.round(o);return !this.hasVerticalScroll||n>this.minScrollY?o=this.minScrollY:n<this.maxScrollY&&(o=this.maxScrollY),(e!==this.x||o!==this.y)&&(this.scrollTo(e,o,t,i),!0)},V.prototype.getComputedPosition=function(){var t=window.getComputedStyle(this.scroller,null),i=void 0,e=void 0;return this.options.useTransform?(i=+((t=t[T.transform].split(")")[0].split(", "))[12]||t[4]),e=+(t[13]||t[5])):(i=+t.left.replace(/[^-\d.]/g,""),e=+t.top.replace(/[^-\d.]/g,"")),{x:i,y:e}},V.prototype.stop=function(){if(this.options.useTransition&&this.isInTransition){this.isInTransition=!1,H(this.probeTimer);var t=this.getComputedPosition();this._translate(t.x,t.y),this.options.wheel?this.target=this.items[Math.round(-t.y/this.itemHeight)]:this.trigger("scrollEnd",{x:this.x,y:this.y}),this.stopFromTransition=!0;}else!this.options.useTransition&&this.isAnimating&&(this.isAnimating=!1,H(this.animateTimer),this.trigger("scrollEnd",{x:this.x,y:this.y}),this.stopFromTransition=!0);},V.prototype.destroy=function(){this.destroyed=!0,this.trigger("destroy"),this.options.useTransition?H(this.probeTimer):H(this.animateTimer),this._removeDOMEvents(),this._events={};},(Z=ot).prototype.on=function(t,i){var e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:this;this._events[t]||(this._events[t]=[]),this._events[t].push([i,e]);},Z.prototype.once=function(t,i){var e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:this;function s(){this.off(t,s),i.apply(e,arguments);}s.fn=i,this.on(t,s);},Z.prototype.off=function(t,i){var e=this._events[t];if(e)for(var s=e.length;s--;)(e[s][0]===i||e[s][0]&&e[s][0].fn===i)&&(e[s][0]=void 0);},Z.prototype.trigger=function(t){var i=this._events[t];if(i)for(var e=i.length,s=[].concat(c(i)),o=0;o<e;o++){var n=s[o],r=l(n,2),h=r[0],a=r[1];h&&h.apply(a,[].slice.call(arguments,1));}},(j=ot).prototype._initSnap=function(){var m=this;this.currentPage={};var t,i,e,s,f=this.options.snap;if(f.loop){var o=this.scroller.children;1<o.length?(t=o[o.length-1].cloneNode(!0),(i=this.scroller).firstChild?(e=t,(s=i.firstChild).parentNode.insertBefore(e,s)):i.appendChild(t),this.scroller.appendChild(o[1].cloneNode(!0))):f.loop=!1;}var g=f.el;"string"==typeof g&&(g=this.scroller.querySelectorAll(g)),this.on("refresh",function(){if(m.pages=[],m.wrapperWidth&&m.wrapperHeight&&m.scrollerWidth&&m.scrollerHeight){var t=f.stepX||m.wrapperWidth,i=f.stepY||m.wrapperHeight,e=0,s=void 0,o=void 0,n=void 0,r=0,h=void 0,a=0,l=void 0,c=void 0;if(g)for(h=g.length,l=-1;r<h;r++)c=Y(g[r]),(0===r||c.left<=Y(g[r-1]).left)&&(a=0,l++),m.pages[a]||(m.pages[a]=[]),e=Math.max(-c.left,m.maxScrollX),s=Math.max(-c.top,m.maxScrollY),o=e-Math.round(c.width/2),n=s-Math.round(c.height/2),m.pages[a][l]={x:e,y:s,width:c.width,height:c.height,cx:o,cy:n},e>m.maxScrollX&&a++;else for(o=Math.round(t/2),n=Math.round(i/2);e>-m.scrollerWidth;){for(m.pages[r]=[],s=h=0;s>-m.scrollerHeight;)m.pages[r][h]={x:Math.max(e,m.maxScrollX),y:Math.max(s,m.maxScrollY),width:t,height:i,cx:e-o,cy:s-n},s-=i,h++;e-=t,r++;}m._checkSnapLoop();var p=f._loopX?1:0,d=f._loopY?1:0;m._goToPage(m.currentPage.pageX||p,m.currentPage.pageY||d,0);var u=f.threshold;u%1==0?(m.snapThresholdX=u,m.snapThresholdY=u):(m.snapThresholdX=Math.round(m.pages[m.currentPage.pageX][m.currentPage.pageY].width*u),m.snapThresholdY=Math.round(m.pages[m.currentPage.pageX][m.currentPage.pageY].height*u));}}),this.on("scrollEnd",function(){f.loop&&(f._loopX?(0===m.currentPage.pageX&&m._goToPage(m.pages.length-2,m.currentPage.pageY,0),m.currentPage.pageX===m.pages.length-1&&m._goToPage(1,m.currentPage.pageY,0)):(0===m.currentPage.pageY&&m._goToPage(m.currentPage.pageX,m.pages[0].length-2,0),m.currentPage.pageY===m.pages[0].length-1&&m._goToPage(m.currentPage.pageX,1,0)));}),!1!==f.listenFlick&&this.on("flick",function(){var t=f.speed||Math.max(Math.max(Math.min(Math.abs(m.x-m.startX),1e3),Math.min(Math.abs(m.y-m.startY),1e3)),300);m._goToPage(m.currentPage.pageX+m.directionX,m.currentPage.pageY+m.directionY,t);}),this.on("destroy",function(){if(f.loop){var t=m.scroller.children;2<t.length&&(P(m.scroller,t[t.length-1]),P(m.scroller,t[0]));}});},j.prototype._checkSnapLoop=function(){var t=this.options.snap;t.loop&&this.pages&&this.pages.length&&(1<this.pages.length&&(t._loopX=!0),this.pages[0]&&1<this.pages[0].length&&(t._loopY=!0),t._loopX&&t._loopY&&F("Loop does not support two direction at the same time."));},j.prototype._nearestSnap=function(t,i){if(!this.pages.length)return {x:0,y:0,pageX:0,pageY:0};var e=0;if(Math.abs(t-this.absStartX)<=this.snapThresholdX&&Math.abs(i-this.absStartY)<=this.snapThresholdY)return this.currentPage;t>this.minScrollX?t=this.minScrollX:t<this.maxScrollX&&(t=this.maxScrollX),i>this.minScrollY?i=this.minScrollY:i<this.maxScrollY&&(i=this.maxScrollY);for(var s=this.pages.length;e<s;e++)if(t>=this.pages[e][0].cx){t=this.pages[e][0].x;break}s=this.pages[e].length;for(var o=0;o<s;o++)if(i>=this.pages[0][o].cy){i=this.pages[0][o].y;break}return e===this.currentPage.pageX&&((e+=this.directionX)<0?e=0:e>=this.pages.length&&(e=this.pages.length-1),t=this.pages[e][0].x),o===this.currentPage.pageY&&((o+=this.directionY)<0?o=0:o>=this.pages[0].length&&(o=this.pages[0].length-1),i=this.pages[0][o].y),{x:t,y:i,pageX:e,pageY:o}},j.prototype._goToPage=function(t){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=arguments[2],s=arguments[3],o=this.options.snap;if(o&&this.pages&&this.pages.length&&(s=s||o.easing||D.bounce,t>=this.pages.length?t=this.pages.length-1:t<0&&(t=0),this.pages[t])){i>=this.pages[t].length?i=this.pages[t].length-1:i<0&&(i=0);var n=this.pages[t][i].x,r=this.pages[t][i].y;e=void 0===e?o.speed||Math.max(Math.max(Math.min(Math.abs(n-this.x),1e3),Math.min(Math.abs(r-this.y),1e3)),300):e,this.currentPage={x:n,y:r,pageX:t,pageY:i},this.scrollTo(n,r,e,s);}},j.prototype.goToPage=function(t,i,e,s){var o=this.options.snap;if(o&&this.pages&&this.pages.length){if(o.loop){var n=void 0;o._loopX?((n=this.pages.length-2)<=t?t=n-1:t<0&&(t=0),t+=1):((n=this.pages[0].length-2)<=i?i=n-1:i<0&&(i=0),i+=1);}this._goToPage(t,i,e,s);}},j.prototype.next=function(t,i){if(this.options.snap){var e=this.currentPage.pageX,s=this.currentPage.pageY;++e>=this.pages.length&&this.hasVerticalScroll&&(e=0,s++),this._goToPage(e,s,t,i);}},j.prototype.prev=function(t,i){if(this.options.snap){var e=this.currentPage.pageX,s=this.currentPage.pageY;--e<0&&this.hasVerticalScroll&&(e=0,s--),this._goToPage(e,s,t,i);}},j.prototype.getCurrentPage=function(){var t=this.options.snap;return t?t.loop?t._loopX?a({},this.currentPage,{pageX:this.currentPage.pageX-1}):a({},this.currentPage,{pageY:this.currentPage.pageY-1}):this.currentPage:null},(G=ot).prototype.wheelTo=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0;this.options.wheel&&(this.y=-t*this.itemHeight,this.scrollTo(0,this.y));},G.prototype.getSelectedIndex=function(){return this.options.wheel&&this.selectedIndex},G.prototype._initWheel=function(){var t=this.options.wheel;t.wheelWrapperClass||(t.wheelWrapperClass="wheel-scroll"),t.wheelItemClass||(t.wheelItemClass="wheel-item"),void 0===t.selectedIndex&&(t.selectedIndex=0,F("wheel option selectedIndex is required!"));},($=ot).prototype._initScrollbar=function(){var i=this,t=this.options.scrollbar,e=t.fade,s=void 0===e||e,o=t.interactive,n=void 0!==o&&o;this.indicators=[];var r=void 0;this.options.scrollX&&(r={el:U("horizontal"),direction:"horizontal",fade:s,interactive:n},this._insertScrollBar(r.el),this.indicators.push(new B(this,r))),this.options.scrollY&&(r={el:U("vertical"),direction:"vertical",fade:s,interactive:n},this._insertScrollBar(r.el),this.indicators.push(new B(this,r))),this.on("refresh",function(){for(var t=0;t<i.indicators.length;t++)i.indicators[t].refresh();}),s&&(this.on("scrollEnd",function(){for(var t=0;t<i.indicators.length;t++)i.indicators[t].fade();}),this.on("scrollCancel",function(){for(var t=0;t<i.indicators.length;t++)i.indicators[t].fade();}),this.on("scrollStart",function(){for(var t=0;t<i.indicators.length;t++)i.indicators[t].fade(!0);}),this.on("beforeScrollStart",function(){for(var t=0;t<i.indicators.length;t++)i.indicators[t].fade(!0,!0);})),this.on("destroy",function(){i._removeScrollBars();});},$.prototype._insertScrollBar=function(t){this.wrapper.appendChild(t);},$.prototype._removeScrollBars=function(){for(var t=0;t<this.indicators.length;t++)this.indicators[t].destroy();},(J=ot).prototype._initPullDown=function(){this.options.probeType=R;},J.prototype._checkPullDown=function(){var t=this.options.pullDownRefresh,i=t.threshold,e=void 0===i?90:i,s=t.stop,o=void 0===s?40:s;return !(this.directionY!==A||this.y<e)&&(this.pulling||(this.pulling=!0,this.trigger("pullingDown")),this.scrollTo(this.x,o,this.options.bounceTime,D.bounce),this.pulling)},J.prototype.finishPullDown=function(){this.pulling=!1,this.resetPosition(this.options.bounceTime,D.bounce);},J.prototype.openPullDown=function(){var t=!(0<arguments.length&&void 0!==arguments[0])||arguments[0];this.options.pullDownRefresh=t,this._initPullDown();},J.prototype.closePullDown=function(){this.options.pullDownRefresh=!1;},(K=ot).prototype._initPullUp=function(){this.options.probeType=R,this.pullupWatching=!1,this._watchPullUp();},K.prototype._watchPullUp=function(){this.pullupWatching||(this.pullupWatching=!0,this.on("scroll",this._checkToEnd));},K.prototype._checkToEnd=function(t){var i=this,e=this.options.pullUpLoad.threshold,s=void 0===e?0:e;this.movingDirectionY===W&&t.y<=this.maxScrollY+s&&(this.once("scrollEnd",function(){i.pullupWatching=!1;}),this.trigger("pullingUp"),this.off("scroll",this._checkToEnd));},K.prototype.finishPullUp=function(){var t=this;this.pullupWatching?this.once("scrollEnd",function(){t._watchPullUp();}):this._watchPullUp();},K.prototype.openPullUp=function(){var t=!(0<arguments.length&&void 0!==arguments[0])||arguments[0];this.options.pullUpLoad=t,this._initPullUp();},K.prototype.closePullUp=function(){this.options.pullUpLoad=!1,this.pullupWatching&&(this.pullupWatching=!1,this.off("scroll",this._checkToEnd));},(Q=ot).prototype._initMouseWheel=function(){var t=this;this._handleMouseWheelEvent(h),this.on("destroy",function(){clearTimeout(t.mouseWheelTimer),t._handleMouseWheelEvent(u);}),this.firstWheelOpreation=!0;},Q.prototype._handleMouseWheelEvent=function(t){t(this.wrapper,"wheel",this),t(this.wrapper,"mousewheel",this),t(this.wrapper,"DOMMouseScroll",this);},Q.prototype._onMouseWheel=function(t){var i=this;if(this.enabled){t.preventDefault(),this.options.stopPropagation&&t.stopPropagation(),this.firstWheelOpreation&&this.trigger("scrollStart"),this.firstWheelOpreation=!1;var e=this.options.mouseWheel,s=e.speed,o=void 0===s?20:s,n=e.invert,r=void 0!==n&&n,h=e.easeTime,a=void 0===h?300:h;clearTimeout(this.mouseWheelTimer),this.mouseWheelTimer=setTimeout(function(){i.options.snap||a||i.trigger("scrollEnd",{x:i.x,y:i.y}),i.firstWheelOpreation=!0;},400);var l=void 0,c=void 0;switch(!0){case"deltaX"in t:1===t.deltaMode?(l=-t.deltaX*o,c=-t.deltaY*o):(l=-t.deltaX,c=-t.deltaY);break;case"wheelDeltaX"in t:l=t.wheelDeltaX/120*o,c=t.wheelDeltaY/120*o;break;case"wheelDelta"in t:l=c=t.wheelDelta/120*o;break;case"detail"in t:l=c=-t.detail/3*o;break;default:return}var p=r?-1:1;l*=p,c*=p,this.hasVerticalScroll||(l=c,c=0);var d=void 0,u=void 0;if(this.options.snap)return d=this.currentPage.pageX,u=this.currentPage.pageY,0<l?d--:l<0&&d++,0<c?u--:c<0&&u++,void this._goToPage(d,u);d=this.x+Math.round(this.hasHorizontalScroll?l:0),u=this.y+Math.round(this.hasVerticalScroll?c:0),this.movingDirectionX=this.directionX=0<l?-1:l<0?1:0,this.movingDirectionY=this.directionY=0<c?-1:c<0?1:0,d>this.minScrollX?d=this.minScrollX:d<this.maxScrollX&&(d=this.maxScrollX),u>this.minScrollY?u=this.minScrollY:u<this.maxScrollY&&(u=this.maxScrollY),this.scrollTo(d,u,a,D.swipe),this.trigger("scroll",{x:this.x,y:this.y});}},(tt=ot).prototype._initZoom=function(){var t=this.options.zoom,i=t.start,e=void 0===i?1:i,s=t.min,o=void 0===s?1:s,n=t.max,r=void 0===n?4:n;this.scale=Math.min(Math.max(e,o),r),this.setScale(this.scale),this.scrollerStyle[T.transformOrigin]="0 0";},tt.prototype._zoomTo=function(t,i,e,s){this.scaled=!0;var o=t/(s||this.scale);this.setScale(t),this.refresh();var n=Math.round(this.startX-(i-this.relativeX)*(o-1)),r=Math.round(this.startY-(e-this.relativeY)*(o-1));n>this.minScrollX?n=this.minScrollX:n<this.maxScrollX&&(n=this.maxScrollX),r>this.minScrollY?r=this.minScrollY:r<this.maxScrollY&&(r=this.maxScrollY),this.x===n&&this.y===r||this.scrollTo(n,r,this.options.bounceTime),this.scaled=!1;},tt.prototype.zoomTo=function(t,i,e){var s=f(this.wrapper),o=s.left,n=s.top,r=i+o-this.x,h=e+n-this.y;this._zoomTo(t,r,h);},tt.prototype._zoomStart=function(t){var i=t.touches[0],e=t.touches[1],s=Math.abs(i.pageX-e.pageX),o=Math.abs(i.pageY-e.pageY);this.startDistance=d(s,o),this.startScale=this.scale;var n=f(this.wrapper),r=n.left,h=n.top;this.originX=Math.abs(i.pageX+e.pageX)/2+r-this.x,this.originY=Math.abs(i.pageY+e.pageY)/2+h-this.y,this.trigger("zoomStart");},tt.prototype._zoom=function(t){if(this.enabled&&!this.destroyed&&_[t.type]===this.initiated){this.options.preventDefault&&t.preventDefault(),this.options.stopPropagation&&t.stopPropagation();var i=t.touches[0],e=t.touches[1],s=d(Math.abs(i.pageX-e.pageX),Math.abs(i.pageY-e.pageY))/this.startDistance*this.startScale;this.scaled=!0;var o=this.options.zoom,n=o.min,r=void 0===n?1:n,h=o.max,a=void 0===h?4:h;s<r?s=.5*r*Math.pow(2,s/r):a<s&&(s=2*a*Math.pow(.5,a/s));var l=s/this.startScale,c=this.startX-(this.originX-this.relativeX)*(l-1),p=this.startY-(this.originY-this.relativeY)*(l-1);this.setScale(s),this.scrollTo(c,p,0);}},tt.prototype._zoomEnd=function(t){if(this.enabled&&!this.destroyed&&_[t.type]===this.initiated){this.options.preventDefault&&t.preventDefault(),this.options.stopPropagation&&t.stopPropagation(),this.isInTransition=!1,this.isAnimating=!1,this.initiated=0;var i=this.options.zoom,e=i.min,s=void 0===e?1:e,o=i.max,n=void 0===o?4:o,r=this.scale>n?n:this.scale<s?s:this.scale;this._zoomTo(r,this.originX,this.originY,this.startScale),this.trigger("zoomEnd");}},ot.prototype._initInfinite=function(){this.options.probeType=3,this.maxScrollY=-it,this.infiniteScroller=new st(this,this.options.infinity);},ot.Version="1.12.0",ot});
  });

  var version = "3.1.3";

  var $ = function $(selector, flag) {
    if (typeof selector != 'string' && selector.nodeType) {
      return selector;
    }

    return flag ? document.querySelectorAll(selector) : document.querySelector(selector);
  };

  function Rolldate() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var _this = this,
        el = void 0;

    _this.extend(config);
    if (config.el) {
      el = $(config.el);

      if (!el || el.bindRolldate) {
        return;
      }
      el.bindRolldate = 1;

      _this.tap(el, function () {
        _this.show();
      });
    }
    // 设置默认日期
    if (config.value) {
      if (config.el) {
        var defDateArr = config.value.split(/-|\/|\s|:/g);
        var defDateStr = defDateArr[0] + '\u5E74' + defDateArr[1] + '\u6708' + defDateArr[2] + '\u65E5';
        if (el.nodeName.toLowerCase() == 'input') {
          el.value = defDateStr;
        } else {
          el.innerText = defDateStr;
        }
      }
      var str = config.value.replace(/-/g, '/').replace(/[^\d/:\s]/g, ''),
          date = new Date(str);

      if (!date || date == 'Invalid Date') {
        console.error('Invalid Date：' + str);
      } else {
        if (config.el) {
          el.bindDate = date;
        } else {
          _this.bindDate = date;
        }
      }
    }
  }
  Rolldate.prototype = {
    constructor: Rolldate,
    baseData: function baseData() {
      return {
        domId: {
          YYYY: 'rolldate-year',
          MM: 'rolldate-month',
          DD: 'rolldate-day',
          hh: 'rolldate-hour',
          mm: 'rolldate-min',
          ss: 'rolldate-sec'
        },
        opts: { //插件默认配置
          el: '',
          format: 'YYYY-MM-DD',
          beginYear: 2000,
          endYear: 2100,
          displayYear: null,
          init: null,
          moveEnd: null,
          confirm: null,
          cancel: null,
          minStep: 1,
          trigger: 'tap',
          lang: { title: '选择日期', cancel: '取消', confirm: '确认', year: '年', month: '月', day: '日', hour: '时', min: '分', sec: '秒' }
        }
      };
    },
    extend: function extend(config) {
      var _this = this,
          opts = _this.baseData().opts;

      for (var key in opts) {
        if (opts[key] && Object.prototype.toString.call(opts[key]) == '[object Object]') {
          for (var key2 in config[key]) {
            opts[key][key2] = config[key][key2] == undefined ? opts[key][key2] : config[key][key2];
          }
        } else {
          opts[key] = config[key] || opts[key];
        }
      }
      _this.config = opts;
    },
    createUI: function createUI() {
      var _this = this,
          data = _this.baseData(),
          config = _this.config,
          domId = data.domId,
          FormatArr = config.format.split(/-|\/|\s|:/g),
          len = FormatArr.length,
          ul = '',
          date = config.el ? $(config.el).bindDate || new Date() : _this.bindDate || new Date(),
          itemClass = '',
          lang = config.lang;

      for (var i = 0; i < len; i++) {
        var f = FormatArr[i],
            domMndex = 0;

        ul += '<div id="' + domId[f] + '"><ul class="wheel-scroll">';

        if (f == 'YYYY') {
          for (var j = config.beginYear; j <= config.endYear; j++) {
            itemClass = j == date.getFullYear() || j == config.displayYear ? 'active' : '';

            ul += '<li class="wheel-item ' + itemClass + '" data-index="' + domMndex + '">' + j + lang.year + '</li>';
            domMndex++;
          }
        } else if (f == 'MM') {
          for (var k = 1; k <= 12; k++) {
            itemClass = k == date.getMonth() + 1 ? 'active' : '';

            ul += '<li class="wheel-item ' + itemClass + '" data-index="' + domMndex + '">' + (k < 10 ? '0' + k : k) + lang.month + '</li>';
            domMndex++;
          }
        } else if (f == 'DD') {
          var day = _this.getMonthlyDay(date.getFullYear(), date.getMonth() + 1);
          for (var l = 1; l <= day; l++) {
            itemClass = l == date.getDate() ? 'active' : '';

            ul += '<li class="wheel-item ' + itemClass + '" data-index="' + domMndex + '">' + (l < 10 ? '0' + l : l) + lang.day + '</li>';
            domMndex++;
          }
        } else if (f == 'hh') {
          for (var m = 0; m <= 23; m++) {
            itemClass = m == date.getHours() ? 'active' : '';

            ul += '<li class="wheel-item ' + itemClass + '" data-index="' + domMndex + '">' + (m < 10 ? '0' + m : m) + lang.hour + '</li>';
            domMndex++;
          }
        } else if (f == 'mm') {
          for (var n = 0; n <= 59; n += config.minStep) {
            itemClass = n == date.getMinutes() ? 'active' : '';

            ul += '<li class="wheel-item ' + itemClass + '" data-index="' + domMndex + '">' + (n < 10 ? '0' + n : n) + lang.min + '</li>';
            domMndex++;
          }
        } else if (f == 'ss') {
          for (var o = 0; o <= 59; o++) {
            itemClass = o == date.getSeconds() ? 'active' : '';

            ul += '<li class="wheel-item ' + itemClass + '" data-index="' + domMndex + '">' + (o < 10 ? '0' + o : o) + lang.sec + '</li>';
            domMndex++;
          }
        }
        ul += '</ul></div>';
      }
      var $html = '<div class="rolldate-mask"></div>\n            <div class="rolldate-panel">\n                <header>\n                    <span class="rolldate-btn rolldate-cancel">' + lang.cancel + '</span>\n                    ' + lang.title + '\n                    <span class="rolldate-btn rolldate-confirm">' + lang.confirm + '</span>\n                </header>\n                <section class="rolldate-content">\n                    <div class="rolldate-dim mask-top"></div>\n                    <div class="rolldate-dim mask-bottom"></div>\n                    <div class="rolldate-wrapper">\n                        ' + ul + '\n                    </div>\n                </section>\n            </div>',
          box = document.createElement("div");

      box.className = 'rolldate-container';
      box.innerHTML = $html;
      document.body.appendChild(box);

      _this.scroll = {};

      var _loop = function _loop(_i) {
        var $id = domId[FormatArr[_i]];

        _this.scroll[FormatArr[_i]] = new bscroll_min('#' + $id, {
          wheel: {
            selectedIndex: 0
          },
          mouseWheel: true,
          click: true
        });

        var that = _this.scroll[FormatArr[_i]],
            active = $('#' + $id + ' .active'),
            index = active ? active.getAttribute('data-index') : Math.round(date.getMinutes() / config.minStep);

        that.wheelTo(index);
        // 滚动结束
        that.on('scrollEnd', function () {
          if (config.moveEnd) {
            config.moveEnd.call(_this, that);
          }
          if ([domId['YYYY'], domId['MM']].indexOf(that.wrapper.id) != -1 && _this.scroll['YYYY'] && _this.scroll['MM'] && _this.scroll['DD']) {
            var _day = _this.getMonthlyDay(_this.getSelected(_this.scroll['YYYY']), _this.getSelected(_this.scroll['MM'])),
                li = '';

            if (_day != $('#' + domId['DD'] + ' li', 1).length) {

              for (var _l = 1; _l <= _day; _l++) {
                li += '<li class="wheel-item">' + (_l < 10 ? '0' + _l : _l) + lang.day + '</li>';
              }
              $('#' + domId['DD'] + ' ul').innerHTML = li;
              _this.scroll['DD'].refresh();
            }
          }
        });
      };

      for (var _i = 0; _i < len; _i++) {
        _loop(_i);
      }
      $('.rolldate-panel').className = 'rolldate-panel fadeIn';
    },
    tap: function tap(el, fn) {
      var _this = this,
          hasTouch = "ontouchstart" in window;

      if (hasTouch && _this.config.trigger == 'tap') {
        var o = {},
            touchstart = function touchstart(e) {
          var t = e.touches[0];

          o.startX = t.pageX;
          o.startY = t.pageY;
          o.sTime = +new Date();
        },
            touchend = function touchend(e) {
          var t = e.changedTouches[0];

          o.endX = t.pageX;
          o.endY = t.pageY;
          if (+new Date() - o.sTime < 300) {
            if (Math.abs(o.endX - o.startX) + Math.abs(o.endY - o.startY) < 20) {
              e.preventDefault();
              fn.call(this, e);
            }
          }
          o = {};
        };

        if (typeof fn == 'function') {
          el.addEventListener('touchstart', touchstart);
          el.addEventListener('touchend', touchend);
        } else {
          el.removeEventListener('touchstart', touchstart);
          el.removeEventListener('touchend', touchend);
        }
      } else {
        var click = function click(e) {
          fn.call(this, e);
        };
        if (typeof fn == 'function') {
          el.addEventListener('click', click);
        } else {
          el.removeEventListener('click', click);
        }
      }
    },
    show: function show() {
      var _this = this,
          config = _this.config,
          el = void 0;

      if (config.el) {
        el = $(config.el);

        if (!el.bindRolldate) {
          return;
        }
        if (el.nodeName.toLowerCase() == 'input') {
          el.blur();
        }
      }
      if ($('.rolldate-container')) {
        return;
      }
      if (config.init && config.init.call(_this) === false) {
        return;
      }

      _this.createUI();
      _this.event();
    },
    hide: function hide(flag) {
      var _this = this,
          el = $('.rolldate-panel.fadeIn');

      if (el) {
        el.className = 'rolldate-panel fadeOut';
        _this.destroy(flag);
      }
    },
    event: function event() {
      var _this = this,
          mask = $('.rolldate-mask'),
          cancel = $('.rolldate-cancel'),
          confirm = $('.rolldate-confirm');

      _this.tap(mask, function () {
        _this.hide(1);
      });
      _this.tap(cancel, function () {
        _this.hide(1);
      });
      _this.tap(confirm, function () {
        var config = _this.config,
            el = void 0,
            date = config.format,
            newDate = new Date();

        for (var f in _this.scroll) {
          var d = _this.getSelected(_this.scroll[f]);

          date = date.replace(f, d);
          if (f == 'YYYY') {
            newDate.setFullYear(d);
          } else if (f == 'MM') {
            newDate.setMonth(d - 1);
          } else if (f == 'DD') {
            newDate.setDate(d);
          } else if (f == 'hh') {
            newDate.setHours(d);
          } else if (f == 'mm') {
            newDate.setMinutes(d);
          } else if (f == 'ss') {
            newDate.setSeconds(d);
          }
        }
        if (config.confirm) {
          var flag = config.confirm.call(_this, date);
          if (flag === false) {
            return false;
          } else if (flag) {
            date = flag;
          }
        }
        var dateArr = date.split(/-|\/|\s|:/g);
        var dateStr = dateArr[0] + '\u5E74' + dateArr[1] + '\u6708' + dateArr[2] + '\u65E5';
        if (config.el) {
          el = $(config.el);
          if (el.nodeName.toLowerCase() == 'input') {
            el.value = dateStr;
          } else {
            el.innerText = dateStr;
          }
          el.bindDate = newDate;
        } else {
          _this.bindDate = newDate;
        }
        _this.hide();
      });
    },
    getMonthlyDay: function getMonthlyDay(year, month) {
      var day = void 0;
      if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        day = 31;
      } else if (month == 4 || month == 6 || month == 11 || month == 9) {
        day = 30;
      } else if (month == 2) {
        if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
          //闰年
          day = 29;
        } else {
          day = 28;
        }
      }
      return day;
    },
    destroy: function destroy(flag) {
      var _this = this,
          config = _this.config;

      for (var i in _this.scroll) {
        _this.scroll[i].destroy();
      }

      if (flag && config.cancel) {
        config.cancel.call(_this);
      }

      _this.tap($('.rolldate-mask'), 0);
      _this.tap($('.rolldate-cancel'), 0);
      _this.tap($('.rolldate-confirm'), 0);
      setTimeout(function () {
        var el = $('.rolldate-container');

        if (el) document.body.removeChild(el);
        el = null;
      }, 300);
    },
    getSelected: function getSelected(scroll) {
      return $('#' + scroll.wrapper.id + ' li', 1)[scroll.getSelectedIndex()].innerText.replace(/\D/g, '');
    }
  };
  Rolldate.version = version;

  return Rolldate;

}));
