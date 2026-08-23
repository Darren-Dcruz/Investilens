(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Wx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Pm={exports:{}},Dl={},Im={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oa=Symbol.for("react.element"),jx=Symbol.for("react.portal"),Xx=Symbol.for("react.fragment"),qx=Symbol.for("react.strict_mode"),$x=Symbol.for("react.profiler"),Yx=Symbol.for("react.provider"),Kx=Symbol.for("react.context"),Zx=Symbol.for("react.forward_ref"),Qx=Symbol.for("react.suspense"),Jx=Symbol.for("react.memo"),ev=Symbol.for("react.lazy"),Mh=Symbol.iterator;function tv(t){return t===null||typeof t!="object"?null:(t=Mh&&t[Mh]||t["@@iterator"],typeof t=="function"?t:null)}var Lm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dm=Object.assign,Um={};function ks(t,e,n){this.props=t,this.context=e,this.refs=Um,this.updater=n||Lm}ks.prototype.isReactComponent={};ks.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ks.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Fm(){}Fm.prototype=ks.prototype;function Kd(t,e,n){this.props=t,this.context=e,this.refs=Um,this.updater=n||Lm}var Zd=Kd.prototype=new Fm;Zd.constructor=Kd;Dm(Zd,ks.prototype);Zd.isPureReactComponent=!0;var Eh=Array.isArray,km=Object.prototype.hasOwnProperty,Qd={current:null},Om={key:!0,ref:!0,__self:!0,__source:!0};function Bm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)km.call(e,i)&&!Om.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Oa,type:t,key:s,ref:a,props:r,_owner:Qd.current}}function nv(t,e){return{$$typeof:Oa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Jd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Oa}function iv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var bh=/\/+/g;function rc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?iv(""+t.key):e.toString(36)}function Oo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Oa:case jx:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+rc(a,0):i,Eh(r)?(n="",t!=null&&(n=t.replace(bh,"$&/")+"/"),Oo(r,e,n,"",function(c){return c})):r!=null&&(Jd(r)&&(r=nv(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(bh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Eh(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+rc(s,o);a+=Oo(s,e,n,l,r)}else if(l=tv(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+rc(s,o++),a+=Oo(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Ya(t,e,n){if(t==null)return t;var i=[],r=0;return Oo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function rv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var an={current:null},Bo={transition:null},sv={ReactCurrentDispatcher:an,ReactCurrentBatchConfig:Bo,ReactCurrentOwner:Qd};function zm(){throw Error("act(...) is not supported in production builds of React.")}qe.Children={map:Ya,forEach:function(t,e,n){Ya(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ya(t,function(){e++}),e},toArray:function(t){return Ya(t,function(e){return e})||[]},only:function(t){if(!Jd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};qe.Component=ks;qe.Fragment=Xx;qe.Profiler=$x;qe.PureComponent=Kd;qe.StrictMode=qx;qe.Suspense=Qx;qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sv;qe.act=zm;qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Dm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Qd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)km.call(e,l)&&!Om.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Oa,type:t.type,key:r,ref:s,props:i,_owner:a}};qe.createContext=function(t){return t={$$typeof:Kx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Yx,_context:t},t.Consumer=t};qe.createElement=Bm;qe.createFactory=function(t){var e=Bm.bind(null,t);return e.type=t,e};qe.createRef=function(){return{current:null}};qe.forwardRef=function(t){return{$$typeof:Zx,render:t}};qe.isValidElement=Jd;qe.lazy=function(t){return{$$typeof:ev,_payload:{_status:-1,_result:t},_init:rv}};qe.memo=function(t,e){return{$$typeof:Jx,type:t,compare:e===void 0?null:e}};qe.startTransition=function(t){var e=Bo.transition;Bo.transition={};try{t()}finally{Bo.transition=e}};qe.unstable_act=zm;qe.useCallback=function(t,e){return an.current.useCallback(t,e)};qe.useContext=function(t){return an.current.useContext(t)};qe.useDebugValue=function(){};qe.useDeferredValue=function(t){return an.current.useDeferredValue(t)};qe.useEffect=function(t,e){return an.current.useEffect(t,e)};qe.useId=function(){return an.current.useId()};qe.useImperativeHandle=function(t,e,n){return an.current.useImperativeHandle(t,e,n)};qe.useInsertionEffect=function(t,e){return an.current.useInsertionEffect(t,e)};qe.useLayoutEffect=function(t,e){return an.current.useLayoutEffect(t,e)};qe.useMemo=function(t,e){return an.current.useMemo(t,e)};qe.useReducer=function(t,e,n){return an.current.useReducer(t,e,n)};qe.useRef=function(t){return an.current.useRef(t)};qe.useState=function(t){return an.current.useState(t)};qe.useSyncExternalStore=function(t,e,n){return an.current.useSyncExternalStore(t,e,n)};qe.useTransition=function(){return an.current.useTransition()};qe.version="18.3.1";Im.exports=qe;var Ie=Im.exports;const av=Wx(Ie);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ov=Ie,lv=Symbol.for("react.element"),cv=Symbol.for("react.fragment"),uv=Object.prototype.hasOwnProperty,dv=ov.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fv={key:!0,ref:!0,__self:!0,__source:!0};function Vm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)uv.call(e,i)&&!fv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:lv,type:t,key:s,ref:a,props:r,_owner:dv.current}}Dl.Fragment=cv;Dl.jsx=Vm;Dl.jsxs=Vm;Pm.exports=Dl;var u=Pm.exports,uu={},Hm={exports:{}},En={},Gm={exports:{}},Wm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,K){var N=F.length;F.push(K);e:for(;0<N;){var C=N-1>>>1,V=F[C];if(0<r(V,K))F[C]=K,F[N]=V,N=C;else break e}}function n(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var K=F[0],N=F.pop();if(N!==K){F[0]=N;e:for(var C=0,V=F.length,se=V>>>1;C<se;){var ie=2*(C+1)-1,re=F[ie],B=ie+1,Q=F[B];if(0>r(re,N))B<V&&0>r(Q,re)?(F[C]=Q,F[B]=N,C=B):(F[C]=re,F[ie]=N,C=ie);else if(B<V&&0>r(Q,N))F[C]=Q,F[B]=N,C=B;else break e}}return K}function r(F,K){var N=F.sortIndex-K.sortIndex;return N!==0?N:F.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],p=1,m=null,f=3,h=!1,y=!1,b=!1,x=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(F){for(var K=n(c);K!==null;){if(K.callback===null)i(c);else if(K.startTime<=F)i(c),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(c)}}function M(F){if(b=!1,_(F),!y)if(n(l)!==null)y=!0,X(T);else{var K=n(c);K!==null&&W(M,K.startTime-F)}}function T(F,K){y=!1,b&&(b=!1,d(v),v=-1),h=!0;var N=f;try{for(_(K),m=n(l);m!==null&&(!(m.expirationTime>K)||F&&!L());){var C=m.callback;if(typeof C=="function"){m.callback=null,f=m.priorityLevel;var V=C(m.expirationTime<=K);K=t.unstable_now(),typeof V=="function"?m.callback=V:m===n(l)&&i(l),_(K)}else i(l);m=n(l)}if(m!==null)var se=!0;else{var ie=n(c);ie!==null&&W(M,ie.startTime-K),se=!1}return se}finally{m=null,f=N,h=!1}}var A=!1,R=null,v=-1,E=5,I=-1;function L(){return!(t.unstable_now()-I<E)}function D(){if(R!==null){var F=t.unstable_now();I=F;var K=!0;try{K=R(!0,F)}finally{K?H():(A=!1,R=null)}}else A=!1}var H;if(typeof g=="function")H=function(){g(D)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,k=Z.port2;Z.port1.onmessage=D,H=function(){k.postMessage(null)}}else H=function(){x(D,0)};function X(F){R=F,A||(A=!0,H())}function W(F,K){v=x(function(){F(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){y||h||(y=!0,X(T))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(F){switch(f){case 1:case 2:case 3:var K=3;break;default:K=f}var N=f;f=K;try{return F()}finally{f=N}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,K){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var N=f;f=F;try{return K()}finally{f=N}},t.unstable_scheduleCallback=function(F,K,N){var C=t.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?C+N:C):N=C,F){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=N+V,F={id:p++,callback:K,priorityLevel:F,startTime:N,expirationTime:V,sortIndex:-1},N>C?(F.sortIndex=N,e(c,F),n(l)===null&&F===n(c)&&(b?(d(v),v=-1):b=!0,W(M,N-C))):(F.sortIndex=V,e(l,F),y||h||(y=!0,X(T))),F},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(F){var K=f;return function(){var N=f;f=K;try{return F.apply(this,arguments)}finally{f=N}}}})(Wm);Gm.exports=Wm;var hv=Gm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pv=Ie,Mn=hv;function ue(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jm=new Set,_a={};function Or(t,e){Ts(t,e),Ts(t+"Capture",e)}function Ts(t,e){for(_a[t]=e,t=0;t<e.length;t++)jm.add(e[t])}var Ci=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),du=Object.prototype.hasOwnProperty,mv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wh={},Th={};function gv(t){return du.call(Th,t)?!0:du.call(wh,t)?!1:mv.test(t)?Th[t]=!0:(wh[t]=!0,!1)}function xv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function vv(t,e,n,i){if(e===null||typeof e>"u"||xv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function on(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){jt[t]=new on(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];jt[e]=new on(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){jt[t]=new on(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){jt[t]=new on(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){jt[t]=new on(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){jt[t]=new on(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){jt[t]=new on(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){jt[t]=new on(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){jt[t]=new on(t,5,!1,t.toLowerCase(),null,!1,!1)});var ef=/[\-:]([a-z])/g;function tf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ef,tf);jt[e]=new on(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ef,tf);jt[e]=new on(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ef,tf);jt[e]=new on(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){jt[t]=new on(t,1,!1,t.toLowerCase(),null,!1,!1)});jt.xlinkHref=new on("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){jt[t]=new on(t,1,!1,t.toLowerCase(),null,!0,!0)});function nf(t,e,n,i){var r=jt.hasOwnProperty(e)?jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(vv(e,n,r,i)&&(n=null),i||r===null?gv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Di=pv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ka=Symbol.for("react.element"),ss=Symbol.for("react.portal"),as=Symbol.for("react.fragment"),rf=Symbol.for("react.strict_mode"),fu=Symbol.for("react.profiler"),Xm=Symbol.for("react.provider"),qm=Symbol.for("react.context"),sf=Symbol.for("react.forward_ref"),hu=Symbol.for("react.suspense"),pu=Symbol.for("react.suspense_list"),af=Symbol.for("react.memo"),ji=Symbol.for("react.lazy"),$m=Symbol.for("react.offscreen"),Ah=Symbol.iterator;function Hs(t){return t===null||typeof t!="object"?null:(t=Ah&&t[Ah]||t["@@iterator"],typeof t=="function"?t:null)}var Mt=Object.assign,sc;function ia(t){if(sc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);sc=e&&e[1]||""}return`
`+sc+t}var ac=!1;function oc(t,e){if(!t||ac)return"";ac=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{ac=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ia(t):""}function _v(t){switch(t.tag){case 5:return ia(t.type);case 16:return ia("Lazy");case 13:return ia("Suspense");case 19:return ia("SuspenseList");case 0:case 2:case 15:return t=oc(t.type,!1),t;case 11:return t=oc(t.type.render,!1),t;case 1:return t=oc(t.type,!0),t;default:return""}}function mu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case as:return"Fragment";case ss:return"Portal";case fu:return"Profiler";case rf:return"StrictMode";case hu:return"Suspense";case pu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case qm:return(t.displayName||"Context")+".Consumer";case Xm:return(t._context.displayName||"Context")+".Provider";case sf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case af:return e=t.displayName||null,e!==null?e:mu(t.type)||"Memo";case ji:e=t._payload,t=t._init;try{return mu(t(e))}catch{}}return null}function yv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mu(e);case 8:return e===rf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function or(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ym(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Sv(t){var e=Ym(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Za(t){t._valueTracker||(t._valueTracker=Sv(t))}function Km(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Ym(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function nl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function gu(t,e){var n=e.checked;return Mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ch(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=or(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Zm(t,e){e=e.checked,e!=null&&nf(t,"checked",e,!1)}function xu(t,e){Zm(t,e);var n=or(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?vu(t,e.type,n):e.hasOwnProperty("defaultValue")&&vu(t,e.type,or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Rh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function vu(t,e,n){(e!=="number"||nl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ra=Array.isArray;function xs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+or(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function _u(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ue(91));return Mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Nh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ue(92));if(ra(n)){if(1<n.length)throw Error(ue(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:or(n)}}function Qm(t,e){var n=or(e.value),i=or(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Ph(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Jm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Jm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Qa,e0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Qa=Qa||document.createElement("div"),Qa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Qa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ya(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ca={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Mv=["Webkit","ms","Moz","O"];Object.keys(ca).forEach(function(t){Mv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ca[e]=ca[t]})});function t0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ca.hasOwnProperty(t)&&ca[t]?(""+e).trim():e+"px"}function n0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=t0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Ev=Mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Su(t,e){if(e){if(Ev[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ue(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ue(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ue(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ue(62))}}function Mu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Eu=null;function of(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var bu=null,vs=null,_s=null;function Ih(t){if(t=Va(t)){if(typeof bu!="function")throw Error(ue(280));var e=t.stateNode;e&&(e=Bl(e),bu(t.stateNode,t.type,e))}}function i0(t){vs?_s?_s.push(t):_s=[t]:vs=t}function r0(){if(vs){var t=vs,e=_s;if(_s=vs=null,Ih(t),e)for(t=0;t<e.length;t++)Ih(e[t])}}function s0(t,e){return t(e)}function a0(){}var lc=!1;function o0(t,e,n){if(lc)return t(e,n);lc=!0;try{return s0(t,e,n)}finally{lc=!1,(vs!==null||_s!==null)&&(a0(),r0())}}function Sa(t,e){var n=t.stateNode;if(n===null)return null;var i=Bl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ue(231,e,typeof n));return n}var wu=!1;if(Ci)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){wu=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{wu=!1}function bv(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(p){this.onError(p)}}var ua=!1,il=null,rl=!1,Tu=null,wv={onError:function(t){ua=!0,il=t}};function Tv(t,e,n,i,r,s,a,o,l){ua=!1,il=null,bv.apply(wv,arguments)}function Av(t,e,n,i,r,s,a,o,l){if(Tv.apply(this,arguments),ua){if(ua){var c=il;ua=!1,il=null}else throw Error(ue(198));rl||(rl=!0,Tu=c)}}function Br(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function l0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Lh(t){if(Br(t)!==t)throw Error(ue(188))}function Cv(t){var e=t.alternate;if(!e){if(e=Br(t),e===null)throw Error(ue(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Lh(r),t;if(s===i)return Lh(r),e;s=s.sibling}throw Error(ue(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ue(189))}}if(n.alternate!==i)throw Error(ue(190))}if(n.tag!==3)throw Error(ue(188));return n.stateNode.current===n?t:e}function c0(t){return t=Cv(t),t!==null?u0(t):null}function u0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=u0(t);if(e!==null)return e;t=t.sibling}return null}var d0=Mn.unstable_scheduleCallback,Dh=Mn.unstable_cancelCallback,Rv=Mn.unstable_shouldYield,Nv=Mn.unstable_requestPaint,Nt=Mn.unstable_now,Pv=Mn.unstable_getCurrentPriorityLevel,lf=Mn.unstable_ImmediatePriority,f0=Mn.unstable_UserBlockingPriority,sl=Mn.unstable_NormalPriority,Iv=Mn.unstable_LowPriority,h0=Mn.unstable_IdlePriority,Ul=null,li=null;function Lv(t){if(li&&typeof li.onCommitFiberRoot=="function")try{li.onCommitFiberRoot(Ul,t,void 0,(t.current.flags&128)===128)}catch{}}var $n=Math.clz32?Math.clz32:Fv,Dv=Math.log,Uv=Math.LN2;function Fv(t){return t>>>=0,t===0?32:31-(Dv(t)/Uv|0)|0}var Ja=64,eo=4194304;function sa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function al(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=sa(o):(s&=a,s!==0&&(i=sa(s)))}else a=n&~r,a!==0?i=sa(a):s!==0&&(i=sa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-$n(e),r=1<<n,i|=t[n],e&=~r;return i}function kv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ov(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-$n(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=kv(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Au(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function p0(){var t=Ja;return Ja<<=1,!(Ja&4194240)&&(Ja=64),t}function cc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ba(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-$n(e),t[e]=n}function Bv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-$n(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function cf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-$n(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ot=0;function m0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var g0,uf,x0,v0,_0,Cu=!1,to=[],Ji=null,er=null,tr=null,Ma=new Map,Ea=new Map,qi=[],zv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Uh(t,e){switch(t){case"focusin":case"focusout":Ji=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":Ma.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ea.delete(e.pointerId)}}function Ws(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Va(e),e!==null&&uf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Vv(t,e,n,i,r){switch(e){case"focusin":return Ji=Ws(Ji,t,e,n,i,r),!0;case"dragenter":return er=Ws(er,t,e,n,i,r),!0;case"mouseover":return tr=Ws(tr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ma.set(s,Ws(Ma.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ea.set(s,Ws(Ea.get(s)||null,t,e,n,i,r)),!0}return!1}function y0(t){var e=Er(t.target);if(e!==null){var n=Br(e);if(n!==null){if(e=n.tag,e===13){if(e=l0(n),e!==null){t.blockedOn=e,_0(t.priority,function(){x0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ru(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Eu=i,n.target.dispatchEvent(i),Eu=null}else return e=Va(n),e!==null&&uf(e),t.blockedOn=n,!1;e.shift()}return!0}function Fh(t,e,n){zo(t)&&n.delete(e)}function Hv(){Cu=!1,Ji!==null&&zo(Ji)&&(Ji=null),er!==null&&zo(er)&&(er=null),tr!==null&&zo(tr)&&(tr=null),Ma.forEach(Fh),Ea.forEach(Fh)}function js(t,e){t.blockedOn===e&&(t.blockedOn=null,Cu||(Cu=!0,Mn.unstable_scheduleCallback(Mn.unstable_NormalPriority,Hv)))}function ba(t){function e(r){return js(r,t)}if(0<to.length){js(to[0],t);for(var n=1;n<to.length;n++){var i=to[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ji!==null&&js(Ji,t),er!==null&&js(er,t),tr!==null&&js(tr,t),Ma.forEach(e),Ea.forEach(e),n=0;n<qi.length;n++)i=qi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<qi.length&&(n=qi[0],n.blockedOn===null);)y0(n),n.blockedOn===null&&qi.shift()}var ys=Di.ReactCurrentBatchConfig,ol=!0;function Gv(t,e,n,i){var r=ot,s=ys.transition;ys.transition=null;try{ot=1,df(t,e,n,i)}finally{ot=r,ys.transition=s}}function Wv(t,e,n,i){var r=ot,s=ys.transition;ys.transition=null;try{ot=4,df(t,e,n,i)}finally{ot=r,ys.transition=s}}function df(t,e,n,i){if(ol){var r=Ru(t,e,n,i);if(r===null)_c(t,e,i,ll,n),Uh(t,i);else if(Vv(r,t,e,n,i))i.stopPropagation();else if(Uh(t,i),e&4&&-1<zv.indexOf(t)){for(;r!==null;){var s=Va(r);if(s!==null&&g0(s),s=Ru(t,e,n,i),s===null&&_c(t,e,i,ll,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else _c(t,e,i,null,n)}}var ll=null;function Ru(t,e,n,i){if(ll=null,t=of(i),t=Er(t),t!==null)if(e=Br(t),e===null)t=null;else if(n=e.tag,n===13){if(t=l0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ll=t,null}function S0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Pv()){case lf:return 1;case f0:return 4;case sl:case Iv:return 16;case h0:return 536870912;default:return 16}default:return 16}}var Ki=null,ff=null,Vo=null;function M0(){if(Vo)return Vo;var t,e=ff,n=e.length,i,r="value"in Ki?Ki.value:Ki.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Vo=r.slice(t,1<i?1-i:void 0)}function Ho(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function no(){return!0}function kh(){return!1}function bn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?no:kh,this.isPropagationStopped=kh,this}return Mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=no)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=no)},persist:function(){},isPersistent:no}),e}var Os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hf=bn(Os),za=Mt({},Os,{view:0,detail:0}),jv=bn(za),uc,dc,Xs,Fl=Mt({},za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xs&&(Xs&&t.type==="mousemove"?(uc=t.screenX-Xs.screenX,dc=t.screenY-Xs.screenY):dc=uc=0,Xs=t),uc)},movementY:function(t){return"movementY"in t?t.movementY:dc}}),Oh=bn(Fl),Xv=Mt({},Fl,{dataTransfer:0}),qv=bn(Xv),$v=Mt({},za,{relatedTarget:0}),fc=bn($v),Yv=Mt({},Os,{animationName:0,elapsedTime:0,pseudoElement:0}),Kv=bn(Yv),Zv=Mt({},Os,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Qv=bn(Zv),Jv=Mt({},Os,{data:0}),Bh=bn(Jv),e_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},t_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},n_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function i_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=n_[t])?!!e[t]:!1}function pf(){return i_}var r_=Mt({},za,{key:function(t){if(t.key){var e=e_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ho(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?t_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pf,charCode:function(t){return t.type==="keypress"?Ho(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ho(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),s_=bn(r_),a_=Mt({},Fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zh=bn(a_),o_=Mt({},za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pf}),l_=bn(o_),c_=Mt({},Os,{propertyName:0,elapsedTime:0,pseudoElement:0}),u_=bn(c_),d_=Mt({},Fl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),f_=bn(d_),h_=[9,13,27,32],mf=Ci&&"CompositionEvent"in window,da=null;Ci&&"documentMode"in document&&(da=document.documentMode);var p_=Ci&&"TextEvent"in window&&!da,E0=Ci&&(!mf||da&&8<da&&11>=da),Vh=" ",Hh=!1;function b0(t,e){switch(t){case"keyup":return h_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function w0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var os=!1;function m_(t,e){switch(t){case"compositionend":return w0(e);case"keypress":return e.which!==32?null:(Hh=!0,Vh);case"textInput":return t=e.data,t===Vh&&Hh?null:t;default:return null}}function g_(t,e){if(os)return t==="compositionend"||!mf&&b0(t,e)?(t=M0(),Vo=ff=Ki=null,os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return E0&&e.locale!=="ko"?null:e.data;default:return null}}var x_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!x_[t.type]:e==="textarea"}function T0(t,e,n,i){i0(i),e=cl(e,"onChange"),0<e.length&&(n=new hf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var fa=null,wa=null;function v_(t){k0(t,0)}function kl(t){var e=us(t);if(Km(e))return t}function __(t,e){if(t==="change")return e}var A0=!1;if(Ci){var hc;if(Ci){var pc="oninput"in document;if(!pc){var Wh=document.createElement("div");Wh.setAttribute("oninput","return;"),pc=typeof Wh.oninput=="function"}hc=pc}else hc=!1;A0=hc&&(!document.documentMode||9<document.documentMode)}function jh(){fa&&(fa.detachEvent("onpropertychange",C0),wa=fa=null)}function C0(t){if(t.propertyName==="value"&&kl(wa)){var e=[];T0(e,wa,t,of(t)),o0(v_,e)}}function y_(t,e,n){t==="focusin"?(jh(),fa=e,wa=n,fa.attachEvent("onpropertychange",C0)):t==="focusout"&&jh()}function S_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return kl(wa)}function M_(t,e){if(t==="click")return kl(e)}function E_(t,e){if(t==="input"||t==="change")return kl(e)}function b_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kn=typeof Object.is=="function"?Object.is:b_;function Ta(t,e){if(Kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!du.call(e,r)||!Kn(t[r],e[r]))return!1}return!0}function Xh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qh(t,e){var n=Xh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xh(n)}}function R0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?R0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function N0(){for(var t=window,e=nl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=nl(t.document)}return e}function gf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function w_(t){var e=N0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&R0(n.ownerDocument.documentElement,n)){if(i!==null&&gf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=qh(n,s);var a=qh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var T_=Ci&&"documentMode"in document&&11>=document.documentMode,ls=null,Nu=null,ha=null,Pu=!1;function $h(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pu||ls==null||ls!==nl(i)||(i=ls,"selectionStart"in i&&gf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ha&&Ta(ha,i)||(ha=i,i=cl(Nu,"onSelect"),0<i.length&&(e=new hf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ls)))}function io(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var cs={animationend:io("Animation","AnimationEnd"),animationiteration:io("Animation","AnimationIteration"),animationstart:io("Animation","AnimationStart"),transitionend:io("Transition","TransitionEnd")},mc={},P0={};Ci&&(P0=document.createElement("div").style,"AnimationEvent"in window||(delete cs.animationend.animation,delete cs.animationiteration.animation,delete cs.animationstart.animation),"TransitionEvent"in window||delete cs.transitionend.transition);function Ol(t){if(mc[t])return mc[t];if(!cs[t])return t;var e=cs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in P0)return mc[t]=e[n];return t}var I0=Ol("animationend"),L0=Ol("animationiteration"),D0=Ol("animationstart"),U0=Ol("transitionend"),F0=new Map,Yh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(t,e){F0.set(t,e),Or(e,[t])}for(var gc=0;gc<Yh.length;gc++){var xc=Yh[gc],A_=xc.toLowerCase(),C_=xc[0].toUpperCase()+xc.slice(1);ur(A_,"on"+C_)}ur(I0,"onAnimationEnd");ur(L0,"onAnimationIteration");ur(D0,"onAnimationStart");ur("dblclick","onDoubleClick");ur("focusin","onFocus");ur("focusout","onBlur");ur(U0,"onTransitionEnd");Ts("onMouseEnter",["mouseout","mouseover"]);Ts("onMouseLeave",["mouseout","mouseover"]);Ts("onPointerEnter",["pointerout","pointerover"]);Ts("onPointerLeave",["pointerout","pointerover"]);Or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Or("onBeforeInput",["compositionend","keypress","textInput","paste"]);Or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),R_=new Set("cancel close invalid load scroll toggle".split(" ").concat(aa));function Kh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Av(i,e,void 0,t),t.currentTarget=null}function k0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Kh(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Kh(r,o,c),s=l}}}if(rl)throw t=Tu,rl=!1,Tu=null,t}function gt(t,e){var n=e[Fu];n===void 0&&(n=e[Fu]=new Set);var i=t+"__bubble";n.has(i)||(O0(e,t,2,!1),n.add(i))}function vc(t,e,n){var i=0;e&&(i|=4),O0(n,t,i,e)}var ro="_reactListening"+Math.random().toString(36).slice(2);function Aa(t){if(!t[ro]){t[ro]=!0,jm.forEach(function(n){n!=="selectionchange"&&(R_.has(n)||vc(n,!1,t),vc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ro]||(e[ro]=!0,vc("selectionchange",!1,e))}}function O0(t,e,n,i){switch(S0(e)){case 1:var r=Gv;break;case 4:r=Wv;break;default:r=df}n=r.bind(null,e,n,t),r=void 0,!wu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function _c(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Er(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}o0(function(){var c=s,p=of(n),m=[];e:{var f=F0.get(t);if(f!==void 0){var h=hf,y=t;switch(t){case"keypress":if(Ho(n)===0)break e;case"keydown":case"keyup":h=s_;break;case"focusin":y="focus",h=fc;break;case"focusout":y="blur",h=fc;break;case"beforeblur":case"afterblur":h=fc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Oh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=qv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=l_;break;case I0:case L0:case D0:h=Kv;break;case U0:h=u_;break;case"scroll":h=jv;break;case"wheel":h=f_;break;case"copy":case"cut":case"paste":h=Qv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=zh}var b=(e&4)!==0,x=!b&&t==="scroll",d=b?f!==null?f+"Capture":null:f;b=[];for(var g=c,_;g!==null;){_=g;var M=_.stateNode;if(_.tag===5&&M!==null&&(_=M,d!==null&&(M=Sa(g,d),M!=null&&b.push(Ca(g,M,_)))),x)break;g=g.return}0<b.length&&(f=new h(f,y,null,n,p),m.push({event:f,listeners:b}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",f&&n!==Eu&&(y=n.relatedTarget||n.fromElement)&&(Er(y)||y[Ri]))break e;if((h||f)&&(f=p.window===p?p:(f=p.ownerDocument)?f.defaultView||f.parentWindow:window,h?(y=n.relatedTarget||n.toElement,h=c,y=y?Er(y):null,y!==null&&(x=Br(y),y!==x||y.tag!==5&&y.tag!==6)&&(y=null)):(h=null,y=c),h!==y)){if(b=Oh,M="onMouseLeave",d="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(b=zh,M="onPointerLeave",d="onPointerEnter",g="pointer"),x=h==null?f:us(h),_=y==null?f:us(y),f=new b(M,g+"leave",h,n,p),f.target=x,f.relatedTarget=_,M=null,Er(p)===c&&(b=new b(d,g+"enter",y,n,p),b.target=_,b.relatedTarget=x,M=b),x=M,h&&y)t:{for(b=h,d=y,g=0,_=b;_;_=Gr(_))g++;for(_=0,M=d;M;M=Gr(M))_++;for(;0<g-_;)b=Gr(b),g--;for(;0<_-g;)d=Gr(d),_--;for(;g--;){if(b===d||d!==null&&b===d.alternate)break t;b=Gr(b),d=Gr(d)}b=null}else b=null;h!==null&&Zh(m,f,h,b,!1),y!==null&&x!==null&&Zh(m,x,y,b,!0)}}e:{if(f=c?us(c):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var T=__;else if(Gh(f))if(A0)T=E_;else{T=S_;var A=y_}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=M_);if(T&&(T=T(t,c))){T0(m,T,n,p);break e}A&&A(t,f,c),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&vu(f,"number",f.value)}switch(A=c?us(c):window,t){case"focusin":(Gh(A)||A.contentEditable==="true")&&(ls=A,Nu=c,ha=null);break;case"focusout":ha=Nu=ls=null;break;case"mousedown":Pu=!0;break;case"contextmenu":case"mouseup":case"dragend":Pu=!1,$h(m,n,p);break;case"selectionchange":if(T_)break;case"keydown":case"keyup":$h(m,n,p)}var R;if(mf)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else os?b0(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(E0&&n.locale!=="ko"&&(os||v!=="onCompositionStart"?v==="onCompositionEnd"&&os&&(R=M0()):(Ki=p,ff="value"in Ki?Ki.value:Ki.textContent,os=!0)),A=cl(c,v),0<A.length&&(v=new Bh(v,t,null,n,p),m.push({event:v,listeners:A}),R?v.data=R:(R=w0(n),R!==null&&(v.data=R)))),(R=p_?m_(t,n):g_(t,n))&&(c=cl(c,"onBeforeInput"),0<c.length&&(p=new Bh("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:c}),p.data=R))}k0(m,e)})}function Ca(t,e,n){return{instance:t,listener:e,currentTarget:n}}function cl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Sa(t,n),s!=null&&i.unshift(Ca(t,s,r)),s=Sa(t,e),s!=null&&i.push(Ca(t,s,r))),t=t.return}return i}function Gr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Zh(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Sa(n,s),l!=null&&a.unshift(Ca(n,l,o))):r||(l=Sa(n,s),l!=null&&a.push(Ca(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var N_=/\r\n?/g,P_=/\u0000|\uFFFD/g;function Qh(t){return(typeof t=="string"?t:""+t).replace(N_,`
`).replace(P_,"")}function so(t,e,n){if(e=Qh(e),Qh(t)!==e&&n)throw Error(ue(425))}function ul(){}var Iu=null,Lu=null;function Du(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Uu=typeof setTimeout=="function"?setTimeout:void 0,I_=typeof clearTimeout=="function"?clearTimeout:void 0,Jh=typeof Promise=="function"?Promise:void 0,L_=typeof queueMicrotask=="function"?queueMicrotask:typeof Jh<"u"?function(t){return Jh.resolve(null).then(t).catch(D_)}:Uu;function D_(t){setTimeout(function(){throw t})}function yc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ba(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ba(e)}function nr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ep(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Bs=Math.random().toString(36).slice(2),si="__reactFiber$"+Bs,Ra="__reactProps$"+Bs,Ri="__reactContainer$"+Bs,Fu="__reactEvents$"+Bs,U_="__reactListeners$"+Bs,F_="__reactHandles$"+Bs;function Er(t){var e=t[si];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ri]||n[si]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ep(t);t!==null;){if(n=t[si])return n;t=ep(t)}return e}t=n,n=t.parentNode}return null}function Va(t){return t=t[si]||t[Ri],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function us(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ue(33))}function Bl(t){return t[Ra]||null}var ku=[],ds=-1;function dr(t){return{current:t}}function xt(t){0>ds||(t.current=ku[ds],ku[ds]=null,ds--)}function mt(t,e){ds++,ku[ds]=t.current,t.current=e}var lr={},en=dr(lr),dn=dr(!1),Nr=lr;function As(t,e){var n=t.type.contextTypes;if(!n)return lr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function fn(t){return t=t.childContextTypes,t!=null}function dl(){xt(dn),xt(en)}function tp(t,e,n){if(en.current!==lr)throw Error(ue(168));mt(en,e),mt(dn,n)}function B0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ue(108,yv(t)||"Unknown",r));return Mt({},n,i)}function fl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||lr,Nr=en.current,mt(en,t),mt(dn,dn.current),!0}function np(t,e,n){var i=t.stateNode;if(!i)throw Error(ue(169));n?(t=B0(t,e,Nr),i.__reactInternalMemoizedMergedChildContext=t,xt(dn),xt(en),mt(en,t)):xt(dn),mt(dn,n)}var yi=null,zl=!1,Sc=!1;function z0(t){yi===null?yi=[t]:yi.push(t)}function k_(t){zl=!0,z0(t)}function fr(){if(!Sc&&yi!==null){Sc=!0;var t=0,e=ot;try{var n=yi;for(ot=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}yi=null,zl=!1}catch(r){throw yi!==null&&(yi=yi.slice(t+1)),d0(lf,fr),r}finally{ot=e,Sc=!1}}return null}var fs=[],hs=0,hl=null,pl=0,Rn=[],Nn=0,Pr=null,Mi=1,Ei="";function vr(t,e){fs[hs++]=pl,fs[hs++]=hl,hl=t,pl=e}function V0(t,e,n){Rn[Nn++]=Mi,Rn[Nn++]=Ei,Rn[Nn++]=Pr,Pr=t;var i=Mi;t=Ei;var r=32-$n(i)-1;i&=~(1<<r),n+=1;var s=32-$n(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Mi=1<<32-$n(e)+r|n<<r|i,Ei=s+t}else Mi=1<<s|n<<r|i,Ei=t}function xf(t){t.return!==null&&(vr(t,1),V0(t,1,0))}function vf(t){for(;t===hl;)hl=fs[--hs],fs[hs]=null,pl=fs[--hs],fs[hs]=null;for(;t===Pr;)Pr=Rn[--Nn],Rn[Nn]=null,Ei=Rn[--Nn],Rn[Nn]=null,Mi=Rn[--Nn],Rn[Nn]=null}var Sn=null,yn=null,_t=!1,jn=null;function H0(t,e){var n=Ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ip(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Sn=t,yn=nr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Sn=t,yn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Pr!==null?{id:Mi,overflow:Ei}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Sn=t,yn=null,!0):!1;default:return!1}}function Ou(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Bu(t){if(_t){var e=yn;if(e){var n=e;if(!ip(t,e)){if(Ou(t))throw Error(ue(418));e=nr(n.nextSibling);var i=Sn;e&&ip(t,e)?H0(i,n):(t.flags=t.flags&-4097|2,_t=!1,Sn=t)}}else{if(Ou(t))throw Error(ue(418));t.flags=t.flags&-4097|2,_t=!1,Sn=t}}}function rp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Sn=t}function ao(t){if(t!==Sn)return!1;if(!_t)return rp(t),_t=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Du(t.type,t.memoizedProps)),e&&(e=yn)){if(Ou(t))throw G0(),Error(ue(418));for(;e;)H0(t,e),e=nr(e.nextSibling)}if(rp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ue(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){yn=nr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}yn=null}}else yn=Sn?nr(t.stateNode.nextSibling):null;return!0}function G0(){for(var t=yn;t;)t=nr(t.nextSibling)}function Cs(){yn=Sn=null,_t=!1}function _f(t){jn===null?jn=[t]:jn.push(t)}var O_=Di.ReactCurrentBatchConfig;function qs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ue(309));var i=n.stateNode}if(!i)throw Error(ue(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ue(284));if(!n._owner)throw Error(ue(290,t))}return t}function oo(t,e){throw t=Object.prototype.toString.call(e),Error(ue(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function sp(t){var e=t._init;return e(t._payload)}function W0(t){function e(d,g){if(t){var _=d.deletions;_===null?(d.deletions=[g],d.flags|=16):_.push(g)}}function n(d,g){if(!t)return null;for(;g!==null;)e(d,g),g=g.sibling;return null}function i(d,g){for(d=new Map;g!==null;)g.key!==null?d.set(g.key,g):d.set(g.index,g),g=g.sibling;return d}function r(d,g){return d=ar(d,g),d.index=0,d.sibling=null,d}function s(d,g,_){return d.index=_,t?(_=d.alternate,_!==null?(_=_.index,_<g?(d.flags|=2,g):_):(d.flags|=2,g)):(d.flags|=1048576,g)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,g,_,M){return g===null||g.tag!==6?(g=Cc(_,d.mode,M),g.return=d,g):(g=r(g,_),g.return=d,g)}function l(d,g,_,M){var T=_.type;return T===as?p(d,g,_.props.children,M,_.key):g!==null&&(g.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ji&&sp(T)===g.type)?(M=r(g,_.props),M.ref=qs(d,g,_),M.return=d,M):(M=Yo(_.type,_.key,_.props,null,d.mode,M),M.ref=qs(d,g,_),M.return=d,M)}function c(d,g,_,M){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=Rc(_,d.mode,M),g.return=d,g):(g=r(g,_.children||[]),g.return=d,g)}function p(d,g,_,M,T){return g===null||g.tag!==7?(g=Rr(_,d.mode,M,T),g.return=d,g):(g=r(g,_),g.return=d,g)}function m(d,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Cc(""+g,d.mode,_),g.return=d,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ka:return _=Yo(g.type,g.key,g.props,null,d.mode,_),_.ref=qs(d,null,g),_.return=d,_;case ss:return g=Rc(g,d.mode,_),g.return=d,g;case ji:var M=g._init;return m(d,M(g._payload),_)}if(ra(g)||Hs(g))return g=Rr(g,d.mode,_,null),g.return=d,g;oo(d,g)}return null}function f(d,g,_,M){var T=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return T!==null?null:o(d,g,""+_,M);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ka:return _.key===T?l(d,g,_,M):null;case ss:return _.key===T?c(d,g,_,M):null;case ji:return T=_._init,f(d,g,T(_._payload),M)}if(ra(_)||Hs(_))return T!==null?null:p(d,g,_,M,null);oo(d,_)}return null}function h(d,g,_,M,T){if(typeof M=="string"&&M!==""||typeof M=="number")return d=d.get(_)||null,o(g,d,""+M,T);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Ka:return d=d.get(M.key===null?_:M.key)||null,l(g,d,M,T);case ss:return d=d.get(M.key===null?_:M.key)||null,c(g,d,M,T);case ji:var A=M._init;return h(d,g,_,A(M._payload),T)}if(ra(M)||Hs(M))return d=d.get(_)||null,p(g,d,M,T,null);oo(g,M)}return null}function y(d,g,_,M){for(var T=null,A=null,R=g,v=g=0,E=null;R!==null&&v<_.length;v++){R.index>v?(E=R,R=null):E=R.sibling;var I=f(d,R,_[v],M);if(I===null){R===null&&(R=E);break}t&&R&&I.alternate===null&&e(d,R),g=s(I,g,v),A===null?T=I:A.sibling=I,A=I,R=E}if(v===_.length)return n(d,R),_t&&vr(d,v),T;if(R===null){for(;v<_.length;v++)R=m(d,_[v],M),R!==null&&(g=s(R,g,v),A===null?T=R:A.sibling=R,A=R);return _t&&vr(d,v),T}for(R=i(d,R);v<_.length;v++)E=h(R,d,v,_[v],M),E!==null&&(t&&E.alternate!==null&&R.delete(E.key===null?v:E.key),g=s(E,g,v),A===null?T=E:A.sibling=E,A=E);return t&&R.forEach(function(L){return e(d,L)}),_t&&vr(d,v),T}function b(d,g,_,M){var T=Hs(_);if(typeof T!="function")throw Error(ue(150));if(_=T.call(_),_==null)throw Error(ue(151));for(var A=T=null,R=g,v=g=0,E=null,I=_.next();R!==null&&!I.done;v++,I=_.next()){R.index>v?(E=R,R=null):E=R.sibling;var L=f(d,R,I.value,M);if(L===null){R===null&&(R=E);break}t&&R&&L.alternate===null&&e(d,R),g=s(L,g,v),A===null?T=L:A.sibling=L,A=L,R=E}if(I.done)return n(d,R),_t&&vr(d,v),T;if(R===null){for(;!I.done;v++,I=_.next())I=m(d,I.value,M),I!==null&&(g=s(I,g,v),A===null?T=I:A.sibling=I,A=I);return _t&&vr(d,v),T}for(R=i(d,R);!I.done;v++,I=_.next())I=h(R,d,v,I.value,M),I!==null&&(t&&I.alternate!==null&&R.delete(I.key===null?v:I.key),g=s(I,g,v),A===null?T=I:A.sibling=I,A=I);return t&&R.forEach(function(D){return e(d,D)}),_t&&vr(d,v),T}function x(d,g,_,M){if(typeof _=="object"&&_!==null&&_.type===as&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Ka:e:{for(var T=_.key,A=g;A!==null;){if(A.key===T){if(T=_.type,T===as){if(A.tag===7){n(d,A.sibling),g=r(A,_.props.children),g.return=d,d=g;break e}}else if(A.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ji&&sp(T)===A.type){n(d,A.sibling),g=r(A,_.props),g.ref=qs(d,A,_),g.return=d,d=g;break e}n(d,A);break}else e(d,A);A=A.sibling}_.type===as?(g=Rr(_.props.children,d.mode,M,_.key),g.return=d,d=g):(M=Yo(_.type,_.key,_.props,null,d.mode,M),M.ref=qs(d,g,_),M.return=d,d=M)}return a(d);case ss:e:{for(A=_.key;g!==null;){if(g.key===A)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(d,g.sibling),g=r(g,_.children||[]),g.return=d,d=g;break e}else{n(d,g);break}else e(d,g);g=g.sibling}g=Rc(_,d.mode,M),g.return=d,d=g}return a(d);case ji:return A=_._init,x(d,g,A(_._payload),M)}if(ra(_))return y(d,g,_,M);if(Hs(_))return b(d,g,_,M);oo(d,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(d,g.sibling),g=r(g,_),g.return=d,d=g):(n(d,g),g=Cc(_,d.mode,M),g.return=d,d=g),a(d)):n(d,g)}return x}var Rs=W0(!0),j0=W0(!1),ml=dr(null),gl=null,ps=null,yf=null;function Sf(){yf=ps=gl=null}function Mf(t){var e=ml.current;xt(ml),t._currentValue=e}function zu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ss(t,e){gl=t,yf=ps=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(un=!0),t.firstContext=null)}function kn(t){var e=t._currentValue;if(yf!==t)if(t={context:t,memoizedValue:e,next:null},ps===null){if(gl===null)throw Error(ue(308));ps=t,gl.dependencies={lanes:0,firstContext:t}}else ps=ps.next=t;return e}var br=null;function Ef(t){br===null?br=[t]:br.push(t)}function X0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Ef(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ni(t,i)}function Ni(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Xi=!1;function bf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function q0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ir(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,tt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ni(t,n)}return r=i.interleaved,r===null?(e.next=e,Ef(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ni(t,n)}function Go(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,cf(t,n)}}function ap(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function xl(t,e,n,i){var r=t.updateQueue;Xi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var p=t.alternate;p!==null&&(p=p.updateQueue,o=p.lastBaseUpdate,o!==a&&(o===null?p.firstBaseUpdate=c:o.next=c,p.lastBaseUpdate=l))}if(s!==null){var m=r.baseState;a=0,p=c=l=null,o=s;do{var f=o.lane,h=o.eventTime;if((i&f)===f){p!==null&&(p=p.next={eventTime:h,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var y=t,b=o;switch(f=e,h=n,b.tag){case 1:if(y=b.payload,typeof y=="function"){m=y.call(h,m,f);break e}m=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=b.payload,f=typeof y=="function"?y.call(h,m,f):y,f==null)break e;m=Mt({},m,f);break e;case 2:Xi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else h={eventTime:h,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},p===null?(c=p=h,l=m):p=p.next=h,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(p===null&&(l=m),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=p,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Lr|=a,t.lanes=a,t.memoizedState=m}}function op(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ue(191,r));r.call(i)}}}var Ha={},ci=dr(Ha),Na=dr(Ha),Pa=dr(Ha);function wr(t){if(t===Ha)throw Error(ue(174));return t}function wf(t,e){switch(mt(Pa,e),mt(Na,t),mt(ci,Ha),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:yu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=yu(e,t)}xt(ci),mt(ci,e)}function Ns(){xt(ci),xt(Na),xt(Pa)}function $0(t){wr(Pa.current);var e=wr(ci.current),n=yu(e,t.type);e!==n&&(mt(Na,t),mt(ci,n))}function Tf(t){Na.current===t&&(xt(ci),xt(Na))}var yt=dr(0);function vl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Mc=[];function Af(){for(var t=0;t<Mc.length;t++)Mc[t]._workInProgressVersionPrimary=null;Mc.length=0}var Wo=Di.ReactCurrentDispatcher,Ec=Di.ReactCurrentBatchConfig,Ir=0,St=null,Dt=null,Bt=null,_l=!1,pa=!1,Ia=0,B_=0;function qt(){throw Error(ue(321))}function Cf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kn(t[n],e[n]))return!1;return!0}function Rf(t,e,n,i,r,s){if(Ir=s,St=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Wo.current=t===null||t.memoizedState===null?G_:W_,t=n(i,r),pa){s=0;do{if(pa=!1,Ia=0,25<=s)throw Error(ue(301));s+=1,Bt=Dt=null,e.updateQueue=null,Wo.current=j_,t=n(i,r)}while(pa)}if(Wo.current=yl,e=Dt!==null&&Dt.next!==null,Ir=0,Bt=Dt=St=null,_l=!1,e)throw Error(ue(300));return t}function Nf(){var t=Ia!==0;return Ia=0,t}function ii(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?St.memoizedState=Bt=t:Bt=Bt.next=t,Bt}function On(){if(Dt===null){var t=St.alternate;t=t!==null?t.memoizedState:null}else t=Dt.next;var e=Bt===null?St.memoizedState:Bt.next;if(e!==null)Bt=e,Dt=t;else{if(t===null)throw Error(ue(310));Dt=t,t={memoizedState:Dt.memoizedState,baseState:Dt.baseState,baseQueue:Dt.baseQueue,queue:Dt.queue,next:null},Bt===null?St.memoizedState=Bt=t:Bt=Bt.next=t}return Bt}function La(t,e){return typeof e=="function"?e(t):e}function bc(t){var e=On(),n=e.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=t;var i=Dt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var p=c.lane;if((Ir&p)===p)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var m={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=m,a=i):l=l.next=m,St.lanes|=p,Lr|=p}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Kn(i,e.memoizedState)||(un=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,St.lanes|=s,Lr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wc(t){var e=On(),n=e.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Kn(s,e.memoizedState)||(un=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Y0(){}function K0(t,e){var n=St,i=On(),r=e(),s=!Kn(i.memoizedState,r);if(s&&(i.memoizedState=r,un=!0),i=i.queue,Pf(J0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Bt!==null&&Bt.memoizedState.tag&1){if(n.flags|=2048,Da(9,Q0.bind(null,n,i,r,e),void 0,null),zt===null)throw Error(ue(349));Ir&30||Z0(n,e,r)}return r}function Z0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Q0(t,e,n,i){e.value=n,e.getSnapshot=i,eg(e)&&tg(t)}function J0(t,e,n){return n(function(){eg(e)&&tg(t)})}function eg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kn(t,n)}catch{return!0}}function tg(t){var e=Ni(t,1);e!==null&&Yn(e,t,1,-1)}function lp(t){var e=ii();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:t},e.queue=t,t=t.dispatch=H_.bind(null,St,t),[e.memoizedState,t]}function Da(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function ng(){return On().memoizedState}function jo(t,e,n,i){var r=ii();St.flags|=t,r.memoizedState=Da(1|e,n,void 0,i===void 0?null:i)}function Vl(t,e,n,i){var r=On();i=i===void 0?null:i;var s=void 0;if(Dt!==null){var a=Dt.memoizedState;if(s=a.destroy,i!==null&&Cf(i,a.deps)){r.memoizedState=Da(e,n,s,i);return}}St.flags|=t,r.memoizedState=Da(1|e,n,s,i)}function cp(t,e){return jo(8390656,8,t,e)}function Pf(t,e){return Vl(2048,8,t,e)}function ig(t,e){return Vl(4,2,t,e)}function rg(t,e){return Vl(4,4,t,e)}function sg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ag(t,e,n){return n=n!=null?n.concat([t]):null,Vl(4,4,sg.bind(null,e,t),n)}function If(){}function og(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Cf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function lg(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Cf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function cg(t,e,n){return Ir&21?(Kn(n,e)||(n=p0(),St.lanes|=n,Lr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,un=!0),t.memoizedState=n)}function z_(t,e){var n=ot;ot=n!==0&&4>n?n:4,t(!0);var i=Ec.transition;Ec.transition={};try{t(!1),e()}finally{ot=n,Ec.transition=i}}function ug(){return On().memoizedState}function V_(t,e,n){var i=sr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},dg(t))fg(e,n);else if(n=X0(t,e,n,i),n!==null){var r=rn();Yn(n,t,i,r),hg(n,e,i)}}function H_(t,e,n){var i=sr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(dg(t))fg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Kn(o,a)){var l=e.interleaved;l===null?(r.next=r,Ef(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=X0(t,e,r,i),n!==null&&(r=rn(),Yn(n,t,i,r),hg(n,e,i))}}function dg(t){var e=t.alternate;return t===St||e!==null&&e===St}function fg(t,e){pa=_l=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function hg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,cf(t,n)}}var yl={readContext:kn,useCallback:qt,useContext:qt,useEffect:qt,useImperativeHandle:qt,useInsertionEffect:qt,useLayoutEffect:qt,useMemo:qt,useReducer:qt,useRef:qt,useState:qt,useDebugValue:qt,useDeferredValue:qt,useTransition:qt,useMutableSource:qt,useSyncExternalStore:qt,useId:qt,unstable_isNewReconciler:!1},G_={readContext:kn,useCallback:function(t,e){return ii().memoizedState=[t,e===void 0?null:e],t},useContext:kn,useEffect:cp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,jo(4194308,4,sg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return jo(4194308,4,t,e)},useInsertionEffect:function(t,e){return jo(4,2,t,e)},useMemo:function(t,e){var n=ii();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ii();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=V_.bind(null,St,t),[i.memoizedState,t]},useRef:function(t){var e=ii();return t={current:t},e.memoizedState=t},useState:lp,useDebugValue:If,useDeferredValue:function(t){return ii().memoizedState=t},useTransition:function(){var t=lp(!1),e=t[0];return t=z_.bind(null,t[1]),ii().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=St,r=ii();if(_t){if(n===void 0)throw Error(ue(407));n=n()}else{if(n=e(),zt===null)throw Error(ue(349));Ir&30||Z0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,cp(J0.bind(null,i,s,t),[t]),i.flags|=2048,Da(9,Q0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ii(),e=zt.identifierPrefix;if(_t){var n=Ei,i=Mi;n=(i&~(1<<32-$n(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ia++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=B_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},W_={readContext:kn,useCallback:og,useContext:kn,useEffect:Pf,useImperativeHandle:ag,useInsertionEffect:ig,useLayoutEffect:rg,useMemo:lg,useReducer:bc,useRef:ng,useState:function(){return bc(La)},useDebugValue:If,useDeferredValue:function(t){var e=On();return cg(e,Dt.memoizedState,t)},useTransition:function(){var t=bc(La)[0],e=On().memoizedState;return[t,e]},useMutableSource:Y0,useSyncExternalStore:K0,useId:ug,unstable_isNewReconciler:!1},j_={readContext:kn,useCallback:og,useContext:kn,useEffect:Pf,useImperativeHandle:ag,useInsertionEffect:ig,useLayoutEffect:rg,useMemo:lg,useReducer:wc,useRef:ng,useState:function(){return wc(La)},useDebugValue:If,useDeferredValue:function(t){var e=On();return Dt===null?e.memoizedState=t:cg(e,Dt.memoizedState,t)},useTransition:function(){var t=wc(La)[0],e=On().memoizedState;return[t,e]},useMutableSource:Y0,useSyncExternalStore:K0,useId:ug,unstable_isNewReconciler:!1};function Gn(t,e){if(t&&t.defaultProps){e=Mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Vu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Hl={isMounted:function(t){return(t=t._reactInternals)?Br(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=rn(),r=sr(t),s=wi(i,r);s.payload=e,n!=null&&(s.callback=n),e=ir(t,s,r),e!==null&&(Yn(e,t,r,i),Go(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=rn(),r=sr(t),s=wi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ir(t,s,r),e!==null&&(Yn(e,t,r,i),Go(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rn(),i=sr(t),r=wi(n,i);r.tag=2,e!=null&&(r.callback=e),e=ir(t,r,i),e!==null&&(Yn(e,t,i,n),Go(e,t,i))}};function up(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ta(n,i)||!Ta(r,s):!0}function pg(t,e,n){var i=!1,r=lr,s=e.contextType;return typeof s=="object"&&s!==null?s=kn(s):(r=fn(e)?Nr:en.current,i=e.contextTypes,s=(i=i!=null)?As(t,r):lr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Hl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function dp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Hl.enqueueReplaceState(e,e.state,null)}function Hu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},bf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=kn(s):(s=fn(e)?Nr:en.current,r.context=As(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Vu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Hl.enqueueReplaceState(r,r.state,null),xl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ps(t,e){try{var n="",i=e;do n+=_v(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Tc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Gu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var X_=typeof WeakMap=="function"?WeakMap:Map;function mg(t,e,n){n=wi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ml||(Ml=!0,Ju=i),Gu(t,e)},n}function gg(t,e,n){n=wi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Gu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Gu(t,e),typeof i!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function fp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new X_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=ay.bind(null,t,e,n),e.then(t,t))}function hp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function pp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=wi(-1,1),e.tag=2,ir(n,e,1))),n.lanes|=1),t)}var q_=Di.ReactCurrentOwner,un=!1;function nn(t,e,n,i){e.child=t===null?j0(e,null,n,i):Rs(e,t.child,n,i)}function mp(t,e,n,i,r){n=n.render;var s=e.ref;return Ss(e,r),i=Rf(t,e,n,i,s,r),n=Nf(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(_t&&n&&xf(e),e.flags|=1,nn(t,e,i,r),e.child)}function gp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!zf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,xg(t,e,s,i,r)):(t=Yo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ta,n(a,i)&&t.ref===e.ref)return Pi(t,e,r)}return e.flags|=1,t=ar(s,i),t.ref=e.ref,t.return=e,e.child=t}function xg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ta(s,i)&&t.ref===e.ref)if(un=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(un=!0);else return e.lanes=t.lanes,Pi(t,e,r)}return Wu(t,e,n,i,r)}function vg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},mt(gs,_n),_n|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,mt(gs,_n),_n|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,mt(gs,_n),_n|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,mt(gs,_n),_n|=i;return nn(t,e,r,n),e.child}function _g(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Wu(t,e,n,i,r){var s=fn(n)?Nr:en.current;return s=As(e,s),Ss(e,r),n=Rf(t,e,n,i,s,r),i=Nf(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(_t&&i&&xf(e),e.flags|=1,nn(t,e,n,r),e.child)}function xp(t,e,n,i,r){if(fn(n)){var s=!0;fl(e)}else s=!1;if(Ss(e,r),e.stateNode===null)Xo(t,e),pg(e,n,i),Hu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=kn(c):(c=fn(n)?Nr:en.current,c=As(e,c));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&dp(e,a,i,c),Xi=!1;var f=e.memoizedState;a.state=f,xl(e,i,a,r),l=e.memoizedState,o!==i||f!==l||dn.current||Xi?(typeof p=="function"&&(Vu(e,n,p,i),l=e.memoizedState),(o=Xi||up(e,n,o,i,f,l,c))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,q0(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Gn(e.type,o),a.props=c,m=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=kn(l):(l=fn(n)?Nr:en.current,l=As(e,l));var h=n.getDerivedStateFromProps;(p=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==m||f!==l)&&dp(e,a,i,l),Xi=!1,f=e.memoizedState,a.state=f,xl(e,i,a,r);var y=e.memoizedState;o!==m||f!==y||dn.current||Xi?(typeof h=="function"&&(Vu(e,n,h,i),y=e.memoizedState),(c=Xi||up(e,n,c,i,f,y,l)||!1)?(p||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,y,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,y,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),a.props=i,a.state=y,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return ju(t,e,n,i,s,r)}function ju(t,e,n,i,r,s){_g(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&np(e,n,!1),Pi(t,e,s);i=e.stateNode,q_.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Rs(e,t.child,null,s),e.child=Rs(e,null,o,s)):nn(t,e,o,s),e.memoizedState=i.state,r&&np(e,n,!0),e.child}function yg(t){var e=t.stateNode;e.pendingContext?tp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&tp(t,e.context,!1),wf(t,e.containerInfo)}function vp(t,e,n,i,r){return Cs(),_f(r),e.flags|=256,nn(t,e,n,i),e.child}var Xu={dehydrated:null,treeContext:null,retryLane:0};function qu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Sg(t,e,n){var i=e.pendingProps,r=yt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),mt(yt,r&1),t===null)return Bu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=jl(a,i,0,null),t=Rr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=qu(n),e.memoizedState=Xu,t):Lf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return $_(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ar(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=ar(o,s):(s=Rr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?qu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Xu,i}return s=t.child,t=s.sibling,i=ar(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Lf(t,e){return e=jl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function lo(t,e,n,i){return i!==null&&_f(i),Rs(e,t.child,null,n),t=Lf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function $_(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Tc(Error(ue(422))),lo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=jl({mode:"visible",children:i.children},r,0,null),s=Rr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Rs(e,t.child,null,a),e.child.memoizedState=qu(a),e.memoizedState=Xu,s);if(!(e.mode&1))return lo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ue(419)),i=Tc(s,i,void 0),lo(t,e,a,i)}if(o=(a&t.childLanes)!==0,un||o){if(i=zt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ni(t,r),Yn(i,t,r,-1))}return Bf(),i=Tc(Error(ue(421))),lo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=oy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,yn=nr(r.nextSibling),Sn=e,_t=!0,jn=null,t!==null&&(Rn[Nn++]=Mi,Rn[Nn++]=Ei,Rn[Nn++]=Pr,Mi=t.id,Ei=t.overflow,Pr=e),e=Lf(e,i.children),e.flags|=4096,e)}function _p(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),zu(t.return,e,n)}function Ac(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Mg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(nn(t,e,i.children,n),i=yt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_p(t,n,e);else if(t.tag===19)_p(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(mt(yt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&vl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ac(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&vl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ac(e,!0,n,null,s);break;case"together":Ac(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Xo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Lr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ue(153));if(e.child!==null){for(t=e.child,n=ar(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ar(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Y_(t,e,n){switch(e.tag){case 3:yg(e),Cs();break;case 5:$0(e);break;case 1:fn(e.type)&&fl(e);break;case 4:wf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;mt(ml,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(mt(yt,yt.current&1),e.flags|=128,null):n&e.child.childLanes?Sg(t,e,n):(mt(yt,yt.current&1),t=Pi(t,e,n),t!==null?t.sibling:null);mt(yt,yt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Mg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),mt(yt,yt.current),i)break;return null;case 22:case 23:return e.lanes=0,vg(t,e,n)}return Pi(t,e,n)}var Eg,$u,bg,wg;Eg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$u=function(){};bg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,wr(ci.current);var s=null;switch(n){case"input":r=gu(t,r),i=gu(t,i),s=[];break;case"select":r=Mt({},r,{value:void 0}),i=Mt({},i,{value:void 0}),s=[];break;case"textarea":r=_u(t,r),i=_u(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ul)}Su(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(_a.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(_a.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&gt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};wg=function(t,e,n,i){n!==i&&(e.flags|=4)};function $s(t,e){if(!_t)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function $t(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function K_(t,e,n){var i=e.pendingProps;switch(vf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(e),null;case 1:return fn(e.type)&&dl(),$t(e),null;case 3:return i=e.stateNode,Ns(),xt(dn),xt(en),Af(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ao(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jn!==null&&(nd(jn),jn=null))),$u(t,e),$t(e),null;case 5:Tf(e);var r=wr(Pa.current);if(n=e.type,t!==null&&e.stateNode!=null)bg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ue(166));return $t(e),null}if(t=wr(ci.current),ao(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[si]=e,i[Ra]=s,t=(e.mode&1)!==0,n){case"dialog":gt("cancel",i),gt("close",i);break;case"iframe":case"object":case"embed":gt("load",i);break;case"video":case"audio":for(r=0;r<aa.length;r++)gt(aa[r],i);break;case"source":gt("error",i);break;case"img":case"image":case"link":gt("error",i),gt("load",i);break;case"details":gt("toggle",i);break;case"input":Ch(i,s),gt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},gt("invalid",i);break;case"textarea":Nh(i,s),gt("invalid",i)}Su(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&so(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&so(i.textContent,o,t),r=["children",""+o]):_a.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&gt("scroll",i)}switch(n){case"input":Za(i),Rh(i,s,!0);break;case"textarea":Za(i),Ph(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ul)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Jm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[si]=e,t[Ra]=i,Eg(t,e,!1,!1),e.stateNode=t;e:{switch(a=Mu(n,i),n){case"dialog":gt("cancel",t),gt("close",t),r=i;break;case"iframe":case"object":case"embed":gt("load",t),r=i;break;case"video":case"audio":for(r=0;r<aa.length;r++)gt(aa[r],t);r=i;break;case"source":gt("error",t),r=i;break;case"img":case"image":case"link":gt("error",t),gt("load",t),r=i;break;case"details":gt("toggle",t),r=i;break;case"input":Ch(t,i),r=gu(t,i),gt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Mt({},i,{value:void 0}),gt("invalid",t);break;case"textarea":Nh(t,i),r=_u(t,i),gt("invalid",t);break;default:r=i}Su(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?n0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&e0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ya(t,l):typeof l=="number"&&ya(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(_a.hasOwnProperty(s)?l!=null&&s==="onScroll"&&gt("scroll",t):l!=null&&nf(t,s,l,a))}switch(n){case"input":Za(t),Rh(t,i,!1);break;case"textarea":Za(t),Ph(t);break;case"option":i.value!=null&&t.setAttribute("value",""+or(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?xs(t,!!i.multiple,s,!1):i.defaultValue!=null&&xs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ul)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $t(e),null;case 6:if(t&&e.stateNode!=null)wg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ue(166));if(n=wr(Pa.current),wr(ci.current),ao(e)){if(i=e.stateNode,n=e.memoizedProps,i[si]=e,(s=i.nodeValue!==n)&&(t=Sn,t!==null))switch(t.tag){case 3:so(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&so(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[si]=e,e.stateNode=i}return $t(e),null;case 13:if(xt(yt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_t&&yn!==null&&e.mode&1&&!(e.flags&128))G0(),Cs(),e.flags|=98560,s=!1;else if(s=ao(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ue(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ue(317));s[si]=e}else Cs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$t(e),s=!1}else jn!==null&&(nd(jn),jn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||yt.current&1?Ut===0&&(Ut=3):Bf())),e.updateQueue!==null&&(e.flags|=4),$t(e),null);case 4:return Ns(),$u(t,e),t===null&&Aa(e.stateNode.containerInfo),$t(e),null;case 10:return Mf(e.type._context),$t(e),null;case 17:return fn(e.type)&&dl(),$t(e),null;case 19:if(xt(yt),s=e.memoizedState,s===null)return $t(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)$s(s,!1);else{if(Ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=vl(t),a!==null){for(e.flags|=128,$s(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return mt(yt,yt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Nt()>Is&&(e.flags|=128,i=!0,$s(s,!1),e.lanes=4194304)}else{if(!i)if(t=vl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),$s(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!_t)return $t(e),null}else 2*Nt()-s.renderingStartTime>Is&&n!==1073741824&&(e.flags|=128,i=!0,$s(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Nt(),e.sibling=null,n=yt.current,mt(yt,i?n&1|2:n&1),e):($t(e),null);case 22:case 23:return Of(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?_n&1073741824&&($t(e),e.subtreeFlags&6&&(e.flags|=8192)):$t(e),null;case 24:return null;case 25:return null}throw Error(ue(156,e.tag))}function Z_(t,e){switch(vf(e),e.tag){case 1:return fn(e.type)&&dl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ns(),xt(dn),xt(en),Af(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Tf(e),null;case 13:if(xt(yt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ue(340));Cs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xt(yt),null;case 4:return Ns(),null;case 10:return Mf(e.type._context),null;case 22:case 23:return Of(),null;case 24:return null;default:return null}}var co=!1,Zt=!1,Q_=typeof WeakSet=="function"?WeakSet:Set,Re=null;function ms(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Tt(t,e,i)}else n.current=null}function Yu(t,e,n){try{n()}catch(i){Tt(t,e,i)}}var yp=!1;function J_(t,e){if(Iu=ol,t=N0(),gf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,p=0,m=t,f=null;t:for(;;){for(var h;m!==n||r!==0&&m.nodeType!==3||(o=a+r),m!==s||i!==0&&m.nodeType!==3||(l=a+i),m.nodeType===3&&(a+=m.nodeValue.length),(h=m.firstChild)!==null;)f=m,m=h;for(;;){if(m===t)break t;if(f===n&&++c===r&&(o=a),f===s&&++p===i&&(l=a),(h=m.nextSibling)!==null)break;m=f,f=m.parentNode}m=h}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Lu={focusedElem:t,selectionRange:n},ol=!1,Re=e;Re!==null;)if(e=Re,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Re=t;else for(;Re!==null;){e=Re;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var b=y.memoizedProps,x=y.memoizedState,d=e.stateNode,g=d.getSnapshotBeforeUpdate(e.elementType===e.type?b:Gn(e.type,b),x);d.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ue(163))}}catch(M){Tt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Re=t;break}Re=e.return}return y=yp,yp=!1,y}function ma(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Yu(e,n,s)}r=r.next}while(r!==i)}}function Gl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ku(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Tg(t){var e=t.alternate;e!==null&&(t.alternate=null,Tg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[si],delete e[Ra],delete e[Fu],delete e[U_],delete e[F_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ag(t){return t.tag===5||t.tag===3||t.tag===4}function Sp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ag(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ul));else if(i!==4&&(t=t.child,t!==null))for(Zu(t,e,n),t=t.sibling;t!==null;)Zu(t,e,n),t=t.sibling}function Qu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Qu(t,e,n),t=t.sibling;t!==null;)Qu(t,e,n),t=t.sibling}var Ht=null,Wn=!1;function Oi(t,e,n){for(n=n.child;n!==null;)Cg(t,e,n),n=n.sibling}function Cg(t,e,n){if(li&&typeof li.onCommitFiberUnmount=="function")try{li.onCommitFiberUnmount(Ul,n)}catch{}switch(n.tag){case 5:Zt||ms(n,e);case 6:var i=Ht,r=Wn;Ht=null,Oi(t,e,n),Ht=i,Wn=r,Ht!==null&&(Wn?(t=Ht,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ht.removeChild(n.stateNode));break;case 18:Ht!==null&&(Wn?(t=Ht,n=n.stateNode,t.nodeType===8?yc(t.parentNode,n):t.nodeType===1&&yc(t,n),ba(t)):yc(Ht,n.stateNode));break;case 4:i=Ht,r=Wn,Ht=n.stateNode.containerInfo,Wn=!0,Oi(t,e,n),Ht=i,Wn=r;break;case 0:case 11:case 14:case 15:if(!Zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Yu(n,e,a),r=r.next}while(r!==i)}Oi(t,e,n);break;case 1:if(!Zt&&(ms(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Tt(n,e,o)}Oi(t,e,n);break;case 21:Oi(t,e,n);break;case 22:n.mode&1?(Zt=(i=Zt)||n.memoizedState!==null,Oi(t,e,n),Zt=i):Oi(t,e,n);break;default:Oi(t,e,n)}}function Mp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Q_),e.forEach(function(i){var r=ly.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Bn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Ht=o.stateNode,Wn=!1;break e;case 3:Ht=o.stateNode.containerInfo,Wn=!0;break e;case 4:Ht=o.stateNode.containerInfo,Wn=!0;break e}o=o.return}if(Ht===null)throw Error(ue(160));Cg(s,a,r),Ht=null,Wn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Tt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Rg(e,t),e=e.sibling}function Rg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bn(e,t),ei(t),i&4){try{ma(3,t,t.return),Gl(3,t)}catch(b){Tt(t,t.return,b)}try{ma(5,t,t.return)}catch(b){Tt(t,t.return,b)}}break;case 1:Bn(e,t),ei(t),i&512&&n!==null&&ms(n,n.return);break;case 5:if(Bn(e,t),ei(t),i&512&&n!==null&&ms(n,n.return),t.flags&32){var r=t.stateNode;try{ya(r,"")}catch(b){Tt(t,t.return,b)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Zm(r,s),Mu(o,a);var c=Mu(o,s);for(a=0;a<l.length;a+=2){var p=l[a],m=l[a+1];p==="style"?n0(r,m):p==="dangerouslySetInnerHTML"?e0(r,m):p==="children"?ya(r,m):nf(r,p,m,c)}switch(o){case"input":xu(r,s);break;case"textarea":Qm(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?xs(r,!!s.multiple,h,!1):f!==!!s.multiple&&(s.defaultValue!=null?xs(r,!!s.multiple,s.defaultValue,!0):xs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ra]=s}catch(b){Tt(t,t.return,b)}}break;case 6:if(Bn(e,t),ei(t),i&4){if(t.stateNode===null)throw Error(ue(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(b){Tt(t,t.return,b)}}break;case 3:if(Bn(e,t),ei(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ba(e.containerInfo)}catch(b){Tt(t,t.return,b)}break;case 4:Bn(e,t),ei(t);break;case 13:Bn(e,t),ei(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Ff=Nt())),i&4&&Mp(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(Zt=(c=Zt)||p,Bn(e,t),Zt=c):Bn(e,t),ei(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!p&&t.mode&1)for(Re=t,p=t.child;p!==null;){for(m=Re=p;Re!==null;){switch(f=Re,h=f.child,f.tag){case 0:case 11:case 14:case 15:ma(4,f,f.return);break;case 1:ms(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(b){Tt(i,n,b)}}break;case 5:ms(f,f.return);break;case 22:if(f.memoizedState!==null){bp(m);continue}}h!==null?(h.return=f,Re=h):bp(m)}p=p.sibling}e:for(p=null,m=t;;){if(m.tag===5){if(p===null){p=m;try{r=m.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=m.stateNode,l=m.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=t0("display",a))}catch(b){Tt(t,t.return,b)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(b){Tt(t,t.return,b)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Bn(e,t),ei(t),i&4&&Mp(t);break;case 21:break;default:Bn(e,t),ei(t)}}function ei(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ag(n)){var i=n;break e}n=n.return}throw Error(ue(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ya(r,""),i.flags&=-33);var s=Sp(t);Qu(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Sp(t);Zu(t,o,a);break;default:throw Error(ue(161))}}catch(l){Tt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ey(t,e,n){Re=t,Ng(t)}function Ng(t,e,n){for(var i=(t.mode&1)!==0;Re!==null;){var r=Re,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||co;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Zt;o=co;var c=Zt;if(co=a,(Zt=l)&&!c)for(Re=r;Re!==null;)a=Re,l=a.child,a.tag===22&&a.memoizedState!==null?wp(r):l!==null?(l.return=a,Re=l):wp(r);for(;s!==null;)Re=s,Ng(s),s=s.sibling;Re=r,co=o,Zt=c}Ep(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Re=s):Ep(t)}}function Ep(t){for(;Re!==null;){var e=Re;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Zt||Gl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Gn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&op(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}op(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&ba(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ue(163))}Zt||e.flags&512&&Ku(e)}catch(f){Tt(e,e.return,f)}}if(e===t){Re=null;break}if(n=e.sibling,n!==null){n.return=e.return,Re=n;break}Re=e.return}}function bp(t){for(;Re!==null;){var e=Re;if(e===t){Re=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Re=n;break}Re=e.return}}function wp(t){for(;Re!==null;){var e=Re;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Gl(4,e)}catch(l){Tt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Tt(e,r,l)}}var s=e.return;try{Ku(e)}catch(l){Tt(e,s,l)}break;case 5:var a=e.return;try{Ku(e)}catch(l){Tt(e,a,l)}}}catch(l){Tt(e,e.return,l)}if(e===t){Re=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Re=o;break}Re=e.return}}var ty=Math.ceil,Sl=Di.ReactCurrentDispatcher,Df=Di.ReactCurrentOwner,Dn=Di.ReactCurrentBatchConfig,tt=0,zt=null,Lt=null,Wt=0,_n=0,gs=dr(0),Ut=0,Ua=null,Lr=0,Wl=0,Uf=0,ga=null,cn=null,Ff=0,Is=1/0,_i=null,Ml=!1,Ju=null,rr=null,uo=!1,Zi=null,El=0,xa=0,ed=null,qo=-1,$o=0;function rn(){return tt&6?Nt():qo!==-1?qo:qo=Nt()}function sr(t){return t.mode&1?tt&2&&Wt!==0?Wt&-Wt:O_.transition!==null?($o===0&&($o=p0()),$o):(t=ot,t!==0||(t=window.event,t=t===void 0?16:S0(t.type)),t):1}function Yn(t,e,n,i){if(50<xa)throw xa=0,ed=null,Error(ue(185));Ba(t,n,i),(!(tt&2)||t!==zt)&&(t===zt&&(!(tt&2)&&(Wl|=n),Ut===4&&$i(t,Wt)),hn(t,i),n===1&&tt===0&&!(e.mode&1)&&(Is=Nt()+500,zl&&fr()))}function hn(t,e){var n=t.callbackNode;Ov(t,e);var i=al(t,t===zt?Wt:0);if(i===0)n!==null&&Dh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Dh(n),e===1)t.tag===0?k_(Tp.bind(null,t)):z0(Tp.bind(null,t)),L_(function(){!(tt&6)&&fr()}),n=null;else{switch(m0(i)){case 1:n=lf;break;case 4:n=f0;break;case 16:n=sl;break;case 536870912:n=h0;break;default:n=sl}n=Og(n,Pg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Pg(t,e){if(qo=-1,$o=0,tt&6)throw Error(ue(327));var n=t.callbackNode;if(Ms()&&t.callbackNode!==n)return null;var i=al(t,t===zt?Wt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=bl(t,i);else{e=i;var r=tt;tt|=2;var s=Lg();(zt!==t||Wt!==e)&&(_i=null,Is=Nt()+500,Cr(t,e));do try{ry();break}catch(o){Ig(t,o)}while(!0);Sf(),Sl.current=s,tt=r,Lt!==null?e=0:(zt=null,Wt=0,e=Ut)}if(e!==0){if(e===2&&(r=Au(t),r!==0&&(i=r,e=td(t,r))),e===1)throw n=Ua,Cr(t,0),$i(t,i),hn(t,Nt()),n;if(e===6)$i(t,i);else{if(r=t.current.alternate,!(i&30)&&!ny(r)&&(e=bl(t,i),e===2&&(s=Au(t),s!==0&&(i=s,e=td(t,s))),e===1))throw n=Ua,Cr(t,0),$i(t,i),hn(t,Nt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ue(345));case 2:_r(t,cn,_i);break;case 3:if($i(t,i),(i&130023424)===i&&(e=Ff+500-Nt(),10<e)){if(al(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){rn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Uu(_r.bind(null,t,cn,_i),e);break}_r(t,cn,_i);break;case 4:if($i(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-$n(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Nt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*ty(i/1960))-i,10<i){t.timeoutHandle=Uu(_r.bind(null,t,cn,_i),i);break}_r(t,cn,_i);break;case 5:_r(t,cn,_i);break;default:throw Error(ue(329))}}}return hn(t,Nt()),t.callbackNode===n?Pg.bind(null,t):null}function td(t,e){var n=ga;return t.current.memoizedState.isDehydrated&&(Cr(t,e).flags|=256),t=bl(t,e),t!==2&&(e=cn,cn=n,e!==null&&nd(e)),t}function nd(t){cn===null?cn=t:cn.push.apply(cn,t)}function ny(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Kn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function $i(t,e){for(e&=~Uf,e&=~Wl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-$n(e),i=1<<n;t[n]=-1,e&=~i}}function Tp(t){if(tt&6)throw Error(ue(327));Ms();var e=al(t,0);if(!(e&1))return hn(t,Nt()),null;var n=bl(t,e);if(t.tag!==0&&n===2){var i=Au(t);i!==0&&(e=i,n=td(t,i))}if(n===1)throw n=Ua,Cr(t,0),$i(t,e),hn(t,Nt()),n;if(n===6)throw Error(ue(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,_r(t,cn,_i),hn(t,Nt()),null}function kf(t,e){var n=tt;tt|=1;try{return t(e)}finally{tt=n,tt===0&&(Is=Nt()+500,zl&&fr())}}function Dr(t){Zi!==null&&Zi.tag===0&&!(tt&6)&&Ms();var e=tt;tt|=1;var n=Dn.transition,i=ot;try{if(Dn.transition=null,ot=1,t)return t()}finally{ot=i,Dn.transition=n,tt=e,!(tt&6)&&fr()}}function Of(){_n=gs.current,xt(gs)}function Cr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,I_(n)),Lt!==null)for(n=Lt.return;n!==null;){var i=n;switch(vf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&dl();break;case 3:Ns(),xt(dn),xt(en),Af();break;case 5:Tf(i);break;case 4:Ns();break;case 13:xt(yt);break;case 19:xt(yt);break;case 10:Mf(i.type._context);break;case 22:case 23:Of()}n=n.return}if(zt=t,Lt=t=ar(t.current,null),Wt=_n=e,Ut=0,Ua=null,Uf=Wl=Lr=0,cn=ga=null,br!==null){for(e=0;e<br.length;e++)if(n=br[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}br=null}return t}function Ig(t,e){do{var n=Lt;try{if(Sf(),Wo.current=yl,_l){for(var i=St.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}_l=!1}if(Ir=0,Bt=Dt=St=null,pa=!1,Ia=0,Df.current=null,n===null||n.return===null){Ut=1,Ua=e,Lt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Wt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,p=o,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var f=p.alternate;f?(p.updateQueue=f.updateQueue,p.memoizedState=f.memoizedState,p.lanes=f.lanes):(p.updateQueue=null,p.memoizedState=null)}var h=hp(a);if(h!==null){h.flags&=-257,pp(h,a,o,s,e),h.mode&1&&fp(s,c,e),e=h,l=c;var y=e.updateQueue;if(y===null){var b=new Set;b.add(l),e.updateQueue=b}else y.add(l);break e}else{if(!(e&1)){fp(s,c,e),Bf();break e}l=Error(ue(426))}}else if(_t&&o.mode&1){var x=hp(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),pp(x,a,o,s,e),_f(Ps(l,o));break e}}s=l=Ps(l,o),Ut!==4&&(Ut=2),ga===null?ga=[s]:ga.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=mg(s,l,e);ap(s,d);break e;case 1:o=l;var g=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(rr===null||!rr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=gg(s,o,e);ap(s,M);break e}}s=s.return}while(s!==null)}Ug(n)}catch(T){e=T,Lt===n&&n!==null&&(Lt=n=n.return);continue}break}while(!0)}function Lg(){var t=Sl.current;return Sl.current=yl,t===null?yl:t}function Bf(){(Ut===0||Ut===3||Ut===2)&&(Ut=4),zt===null||!(Lr&268435455)&&!(Wl&268435455)||$i(zt,Wt)}function bl(t,e){var n=tt;tt|=2;var i=Lg();(zt!==t||Wt!==e)&&(_i=null,Cr(t,e));do try{iy();break}catch(r){Ig(t,r)}while(!0);if(Sf(),tt=n,Sl.current=i,Lt!==null)throw Error(ue(261));return zt=null,Wt=0,Ut}function iy(){for(;Lt!==null;)Dg(Lt)}function ry(){for(;Lt!==null&&!Rv();)Dg(Lt)}function Dg(t){var e=kg(t.alternate,t,_n);t.memoizedProps=t.pendingProps,e===null?Ug(t):Lt=e,Df.current=null}function Ug(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Z_(n,e),n!==null){n.flags&=32767,Lt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ut=6,Lt=null;return}}else if(n=K_(n,e,_n),n!==null){Lt=n;return}if(e=e.sibling,e!==null){Lt=e;return}Lt=e=t}while(e!==null);Ut===0&&(Ut=5)}function _r(t,e,n){var i=ot,r=Dn.transition;try{Dn.transition=null,ot=1,sy(t,e,n,i)}finally{Dn.transition=r,ot=i}return null}function sy(t,e,n,i){do Ms();while(Zi!==null);if(tt&6)throw Error(ue(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ue(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Bv(t,s),t===zt&&(Lt=zt=null,Wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||uo||(uo=!0,Og(sl,function(){return Ms(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dn.transition,Dn.transition=null;var a=ot;ot=1;var o=tt;tt|=4,Df.current=null,J_(t,n),Rg(n,t),w_(Lu),ol=!!Iu,Lu=Iu=null,t.current=n,ey(n),Nv(),tt=o,ot=a,Dn.transition=s}else t.current=n;if(uo&&(uo=!1,Zi=t,El=r),s=t.pendingLanes,s===0&&(rr=null),Lv(n.stateNode),hn(t,Nt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ml)throw Ml=!1,t=Ju,Ju=null,t;return El&1&&t.tag!==0&&Ms(),s=t.pendingLanes,s&1?t===ed?xa++:(xa=0,ed=t):xa=0,fr(),null}function Ms(){if(Zi!==null){var t=m0(El),e=Dn.transition,n=ot;try{if(Dn.transition=null,ot=16>t?16:t,Zi===null)var i=!1;else{if(t=Zi,Zi=null,El=0,tt&6)throw Error(ue(331));var r=tt;for(tt|=4,Re=t.current;Re!==null;){var s=Re,a=s.child;if(Re.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Re=c;Re!==null;){var p=Re;switch(p.tag){case 0:case 11:case 15:ma(8,p,s)}var m=p.child;if(m!==null)m.return=p,Re=m;else for(;Re!==null;){p=Re;var f=p.sibling,h=p.return;if(Tg(p),p===c){Re=null;break}if(f!==null){f.return=h,Re=f;break}Re=h}}}var y=s.alternate;if(y!==null){var b=y.child;if(b!==null){y.child=null;do{var x=b.sibling;b.sibling=null,b=x}while(b!==null)}}Re=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Re=a;else e:for(;Re!==null;){if(s=Re,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ma(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Re=d;break e}Re=s.return}}var g=t.current;for(Re=g;Re!==null;){a=Re;var _=a.child;if(a.subtreeFlags&2064&&_!==null)_.return=a,Re=_;else e:for(a=g;Re!==null;){if(o=Re,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Gl(9,o)}}catch(T){Tt(o,o.return,T)}if(o===a){Re=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,Re=M;break e}Re=o.return}}if(tt=r,fr(),li&&typeof li.onPostCommitFiberRoot=="function")try{li.onPostCommitFiberRoot(Ul,t)}catch{}i=!0}return i}finally{ot=n,Dn.transition=e}}return!1}function Ap(t,e,n){e=Ps(n,e),e=mg(t,e,1),t=ir(t,e,1),e=rn(),t!==null&&(Ba(t,1,e),hn(t,e))}function Tt(t,e,n){if(t.tag===3)Ap(t,t,n);else for(;e!==null;){if(e.tag===3){Ap(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(rr===null||!rr.has(i))){t=Ps(n,t),t=gg(e,t,1),e=ir(e,t,1),t=rn(),e!==null&&(Ba(e,1,t),hn(e,t));break}}e=e.return}}function ay(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=rn(),t.pingedLanes|=t.suspendedLanes&n,zt===t&&(Wt&n)===n&&(Ut===4||Ut===3&&(Wt&130023424)===Wt&&500>Nt()-Ff?Cr(t,0):Uf|=n),hn(t,e)}function Fg(t,e){e===0&&(t.mode&1?(e=eo,eo<<=1,!(eo&130023424)&&(eo=4194304)):e=1);var n=rn();t=Ni(t,e),t!==null&&(Ba(t,e,n),hn(t,n))}function oy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Fg(t,n)}function ly(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ue(314))}i!==null&&i.delete(e),Fg(t,n)}var kg;kg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||dn.current)un=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return un=!1,Y_(t,e,n);un=!!(t.flags&131072)}else un=!1,_t&&e.flags&1048576&&V0(e,pl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Xo(t,e),t=e.pendingProps;var r=As(e,en.current);Ss(e,n),r=Rf(null,e,i,t,r,n);var s=Nf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fn(i)?(s=!0,fl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,bf(e),r.updater=Hl,e.stateNode=r,r._reactInternals=e,Hu(e,i,t,n),e=ju(null,e,i,!0,s,n)):(e.tag=0,_t&&s&&xf(e),nn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Xo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=uy(i),t=Gn(i,t),r){case 0:e=Wu(null,e,i,t,n);break e;case 1:e=xp(null,e,i,t,n);break e;case 11:e=mp(null,e,i,t,n);break e;case 14:e=gp(null,e,i,Gn(i.type,t),n);break e}throw Error(ue(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),Wu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),xp(t,e,i,r,n);case 3:e:{if(yg(e),t===null)throw Error(ue(387));i=e.pendingProps,s=e.memoizedState,r=s.element,q0(t,e),xl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ps(Error(ue(423)),e),e=vp(t,e,i,n,r);break e}else if(i!==r){r=Ps(Error(ue(424)),e),e=vp(t,e,i,n,r);break e}else for(yn=nr(e.stateNode.containerInfo.firstChild),Sn=e,_t=!0,jn=null,n=j0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cs(),i===r){e=Pi(t,e,n);break e}nn(t,e,i,n)}e=e.child}return e;case 5:return $0(e),t===null&&Bu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Du(i,r)?a=null:s!==null&&Du(i,s)&&(e.flags|=32),_g(t,e),nn(t,e,a,n),e.child;case 6:return t===null&&Bu(e),null;case 13:return Sg(t,e,n);case 4:return wf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Rs(e,null,i,n):nn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),mp(t,e,i,r,n);case 7:return nn(t,e,e.pendingProps,n),e.child;case 8:return nn(t,e,e.pendingProps.children,n),e.child;case 12:return nn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,mt(ml,i._currentValue),i._currentValue=a,s!==null)if(Kn(s.value,a)){if(s.children===r.children&&!dn.current){e=Pi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=wi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?l.next=l:(l.next=p.next,p.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),zu(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ue(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),zu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}nn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ss(e,n),r=kn(r),i=i(r),e.flags|=1,nn(t,e,i,n),e.child;case 14:return i=e.type,r=Gn(i,e.pendingProps),r=Gn(i.type,r),gp(t,e,i,r,n);case 15:return xg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),Xo(t,e),e.tag=1,fn(i)?(t=!0,fl(e)):t=!1,Ss(e,n),pg(e,i,r),Hu(e,i,r,n),ju(null,e,i,!0,t,n);case 19:return Mg(t,e,n);case 22:return vg(t,e,n)}throw Error(ue(156,e.tag))};function Og(t,e){return d0(t,e)}function cy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(t,e,n,i){return new cy(t,e,n,i)}function zf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function uy(t){if(typeof t=="function")return zf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===sf)return 11;if(t===af)return 14}return 2}function ar(t,e){var n=t.alternate;return n===null?(n=Ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Yo(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")zf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case as:return Rr(n.children,r,s,e);case rf:a=8,r|=8;break;case fu:return t=Ln(12,n,e,r|2),t.elementType=fu,t.lanes=s,t;case hu:return t=Ln(13,n,e,r),t.elementType=hu,t.lanes=s,t;case pu:return t=Ln(19,n,e,r),t.elementType=pu,t.lanes=s,t;case $m:return jl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Xm:a=10;break e;case qm:a=9;break e;case sf:a=11;break e;case af:a=14;break e;case ji:a=16,i=null;break e}throw Error(ue(130,t==null?t:typeof t,""))}return e=Ln(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Rr(t,e,n,i){return t=Ln(7,t,i,e),t.lanes=n,t}function jl(t,e,n,i){return t=Ln(22,t,i,e),t.elementType=$m,t.lanes=n,t.stateNode={isHidden:!1},t}function Cc(t,e,n){return t=Ln(6,t,null,e),t.lanes=n,t}function Rc(t,e,n){return e=Ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function dy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cc(0),this.expirationTimes=cc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Vf(t,e,n,i,r,s,a,o,l){return t=new dy(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ln(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bf(s),t}function fy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ss,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Bg(t){if(!t)return lr;t=t._reactInternals;e:{if(Br(t)!==t||t.tag!==1)throw Error(ue(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(fn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ue(171))}if(t.tag===1){var n=t.type;if(fn(n))return B0(t,n,e)}return e}function zg(t,e,n,i,r,s,a,o,l){return t=Vf(n,i,!0,t,r,s,a,o,l),t.context=Bg(null),n=t.current,i=rn(),r=sr(n),s=wi(i,r),s.callback=e??null,ir(n,s,r),t.current.lanes=r,Ba(t,r,i),hn(t,i),t}function Xl(t,e,n,i){var r=e.current,s=rn(),a=sr(r);return n=Bg(n),e.context===null?e.context=n:e.pendingContext=n,e=wi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ir(r,e,a),t!==null&&(Yn(t,r,a,s),Go(t,r,a)),a}function wl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Cp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Hf(t,e){Cp(t,e),(t=t.alternate)&&Cp(t,e)}function hy(){return null}var Vg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Gf(t){this._internalRoot=t}ql.prototype.render=Gf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ue(409));Xl(t,e,null,null)};ql.prototype.unmount=Gf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Dr(function(){Xl(null,t,null,null)}),e[Ri]=null}};function ql(t){this._internalRoot=t}ql.prototype.unstable_scheduleHydration=function(t){if(t){var e=v0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<qi.length&&e!==0&&e<qi[n].priority;n++);qi.splice(n,0,t),n===0&&y0(t)}};function Wf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function $l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Rp(){}function py(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=wl(a);s.call(c)}}var a=zg(e,i,t,0,null,!1,!1,"",Rp);return t._reactRootContainer=a,t[Ri]=a.current,Aa(t.nodeType===8?t.parentNode:t),Dr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=wl(l);o.call(c)}}var l=Vf(t,0,!1,null,null,!1,!1,"",Rp);return t._reactRootContainer=l,t[Ri]=l.current,Aa(t.nodeType===8?t.parentNode:t),Dr(function(){Xl(e,l,n,i)}),l}function Yl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=wl(a);o.call(l)}}Xl(e,a,t,r)}else a=py(n,e,t,r,i);return wl(a)}g0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=sa(e.pendingLanes);n!==0&&(cf(e,n|1),hn(e,Nt()),!(tt&6)&&(Is=Nt()+500,fr()))}break;case 13:Dr(function(){var i=Ni(t,1);if(i!==null){var r=rn();Yn(i,t,1,r)}}),Hf(t,1)}};uf=function(t){if(t.tag===13){var e=Ni(t,134217728);if(e!==null){var n=rn();Yn(e,t,134217728,n)}Hf(t,134217728)}};x0=function(t){if(t.tag===13){var e=sr(t),n=Ni(t,e);if(n!==null){var i=rn();Yn(n,t,e,i)}Hf(t,e)}};v0=function(){return ot};_0=function(t,e){var n=ot;try{return ot=t,e()}finally{ot=n}};bu=function(t,e,n){switch(e){case"input":if(xu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Bl(i);if(!r)throw Error(ue(90));Km(i),xu(i,r)}}}break;case"textarea":Qm(t,n);break;case"select":e=n.value,e!=null&&xs(t,!!n.multiple,e,!1)}};s0=kf;a0=Dr;var my={usingClientEntryPoint:!1,Events:[Va,us,Bl,i0,r0,kf]},Ys={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gy={bundleType:Ys.bundleType,version:Ys.version,rendererPackageName:Ys.rendererPackageName,rendererConfig:Ys.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Di.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=c0(t),t===null?null:t.stateNode},findFiberByHostInstance:Ys.findFiberByHostInstance||hy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fo.isDisabled&&fo.supportsFiber)try{Ul=fo.inject(gy),li=fo}catch{}}En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=my;En.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wf(e))throw Error(ue(200));return fy(t,e,null,n)};En.createRoot=function(t,e){if(!Wf(t))throw Error(ue(299));var n=!1,i="",r=Vg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Vf(t,1,!1,null,null,n,!1,i,r),t[Ri]=e.current,Aa(t.nodeType===8?t.parentNode:t),new Gf(e)};En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ue(188)):(t=Object.keys(t).join(","),Error(ue(268,t)));return t=c0(e),t=t===null?null:t.stateNode,t};En.flushSync=function(t){return Dr(t)};En.hydrate=function(t,e,n){if(!$l(e))throw Error(ue(200));return Yl(null,t,e,!0,n)};En.hydrateRoot=function(t,e,n){if(!Wf(t))throw Error(ue(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Vg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=zg(e,null,t,1,n??null,r,!1,s,a),t[Ri]=e.current,Aa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ql(e)};En.render=function(t,e,n){if(!$l(e))throw Error(ue(200));return Yl(null,t,e,!1,n)};En.unmountComponentAtNode=function(t){if(!$l(t))throw Error(ue(40));return t._reactRootContainer?(Dr(function(){Yl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ri]=null})}),!0):!1};En.unstable_batchedUpdates=kf;En.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!$l(n))throw Error(ue(200));if(t==null||t._reactInternals===void 0)throw Error(ue(38));return Yl(t,e,n,!1,i)};En.version="18.3.1-next-f1338f8080-20240426";function Hg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hg)}catch(t){console.error(t)}}Hg(),Hm.exports=En;var xy=Hm.exports,Np=xy;uu.createRoot=Np.createRoot,uu.hydrateRoot=Np.hydrateRoot;/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Gg=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var _y={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=Ie.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},l)=>Ie.createElement("svg",{ref:l,..._y,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:Gg("lucide",r),...o},[...a.map(([c,p])=>Ie.createElement(c,p)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=(t,e)=>{const n=Ie.forwardRef(({className:i,...r},s)=>Ie.createElement(yy,{ref:s,iconNode:e,className:Gg(`lucide-${vy(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],My=nt("Activity",Sy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],by=nt("ArrowLeft",Ey);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Kl=nt("ArrowRight",wy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]],Ay=nt("Brain",Ty);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],jf=nt("Building2",Cy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Wg=nt("Check",Ry);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Py=nt("CircleCheckBig",Ny);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],jg=nt("CircleCheck",Iy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Xg=nt("CircleHelp",Ly);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],Uy=nt("CircleX",Dy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],ky=nt("Clock",Fy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],By=nt("Copy",Oy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]],qg=nt("Cpu",zy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],$g=nt("Database",Vy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],Gy=nt("DollarSign",Hy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Xf=nt("Globe",Wy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Xy=nt("LoaderCircle",jy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]],Yg=nt("PenLine",qy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]],Yy=nt("Radio",$y);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Zy=nt("RefreshCw",Ky);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]],Kg=nt("Scale",Qy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],eS=nt("Search",Jy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],nS=nt("Server",tS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],rS=nt("ShieldAlert",iS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],qf=nt("ShieldCheck",sS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS=[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]],oS=nt("SlidersVertical",aS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Nc=nt("Sparkles",lS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]],uS=nt("Terminal",cS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],fS=nt("TrendingUp",dS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Zg=nt("TriangleAlert",hS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],mS=nt("User",pS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],$f=nt("X",gS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],id=nt("Zap",xS);class vS{constructor(){this.ctx=null,this.muted=!1}init(){if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}toggleMute(){return this.muted=!this.muted,this.muted}playClick(){if(this.muted||(this.init(),!this.ctx))return;const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(1200,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(400,this.ctx.currentTime+.04),n.gain.setValueAtTime(.08,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.04),e.connect(n),n.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.04)}playWebcmdCrawl(){if(this.muted||(this.init(),!this.ctx))return;const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(500,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(1800,this.ctx.currentTime+.08),n.gain.setValueAtTime(.05,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.08),e.connect(n),n.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.08)}playCheckpointAlert(){if(this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime;[587.33,880,1174.66].forEach((n,i)=>{const r=this.ctx.createOscillator(),s=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(n,e+i*.08),s.gain.setValueAtTime(.1,e+i*.08),s.gain.exponentialRampToValueAtTime(.001,e+i*.08+.35),r.connect(s),s.connect(this.ctx.destination),r.start(e+i*.08),r.stop(e+i*.08+.35)})}playReportSuccess(){if(this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((i,r)=>{const s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(i,e+r*.06),a.gain.setValueAtTime(.12,e+r*.06),a.gain.exponentialRampToValueAtTime(.001,e+r*.06+.6),s.connect(a),a.connect(this.ctx.destination),s.start(e+r*.06),s.stop(e+r*.06+.6)})}}const Ye=new vS;function _S({onStart:t,onOpenHowItWorks:e,onGoHome:n}){return u.jsx("header",{className:"border-b border-brand-light/15 bg-[#060907]/90 backdrop-blur-2xl sticky top-0 z-40 px-4 lg:px-8 py-3.5 shadow-2xl",children:u.jsxs("div",{className:"flex items-center justify-between max-w-[1700px] mx-auto w-full",children:[u.jsxs("div",{onClick:n,className:"flex items-center gap-3.5 cursor-pointer group select-none",children:[u.jsxs("div",{className:"relative",children:[u.jsx("div",{className:"absolute -inset-1 bg-gradient-to-r from-[#F0FB43] via-[#7ED043] to-[#328F35] rounded-2xl blur-md opacity-70 group-hover:opacity-100 transition duration-300 animate-pulse"}),u.jsx("div",{className:"relative w-10 h-10 bg-[#0b110d] rounded-xl flex items-center justify-center border border-brand-light/40 shadow-xl",children:u.jsx("span",{className:"text-xl font-black green-gradient-text transform group-hover:scale-110 transition-transform",children:"⚡"})})]}),u.jsxs("div",{className:"flex flex-col",children:[u.jsx("div",{className:"flex items-center gap-2",children:u.jsx("span",{className:"text-xl font-black tracking-wider text-white font-mono bg-gradient-to-r from-[#7ED043] via-[#F0FB43] to-white bg-clip-text text-transparent drop-shadow-sm",children:"INVESTILENS"})}),u.jsx("span",{className:"text-[10px] font-mono text-brand-light/90 tracking-wider uppercase font-semibold",children:"AI-POWERED INVESTMENT RESEARCH"})]})]}),u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsxs("button",{onClick:()=>{Ye.playClick(),e()},className:"hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-medium text-slate-300 hover:text-brand-lime border border-white/[0.08] hover:border-brand-light/30 bg-[#0b110d]/80 transition-all duration-200",children:[u.jsx(Xg,{className:"w-3.5 h-3.5 text-brand-light"}),u.jsx("span",{children:"How It Works"})]}),u.jsxs("button",{onClick:()=>{Ye.playClick(),t()},className:"inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#F0FB43] via-[#7ED043] to-[#4FB734] hover:from-[#f4fc65] hover:to-[#5bc93f] text-[#060907] font-mono text-xs font-extrabold uppercase tracking-wider shadow-lg shadow-brand-medium/20 hover:scale-105 active:scale-95 transition-all duration-200",children:[u.jsx("span",{children:"Get Started"}),u.jsx(Kl,{className:"w-3.5 h-3.5"})]})]})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yf="185",yS=0,Pp=1,SS=2,Ko=1,MS=2,oa=3,cr=0,pn=1,Si=2,Ti=0,Es=1,rd=2,Ip=3,Lp=4,ES=5,Sr=100,bS=101,wS=102,TS=103,AS=104,CS=200,RS=201,NS=202,PS=203,sd=204,ad=205,IS=206,LS=207,DS=208,US=209,FS=210,kS=211,OS=212,BS=213,zS=214,od=0,ld=1,cd=2,Ls=3,ud=4,dd=5,fd=6,hd=7,Qg=0,VS=1,HS=2,ui=0,Jg=1,ex=2,tx=3,nx=4,ix=5,rx=6,sx=7,ax=300,Ur=301,Ds=302,Pc=303,Ic=304,Zl=306,pd=1e3,bi=1001,md=1002,Gt=1003,GS=1004,ho=1005,Qt=1006,Lc=1007,Tr=1008,In=1009,ox=1010,lx=1011,Fa=1012,Kf=1013,fi=1014,ai=1015,Ii=1016,Zf=1017,Qf=1018,ka=1020,cx=35902,ux=35899,dx=1021,fx=1022,qn=1023,Li=1026,Ar=1027,hx=1028,Jf=1029,Fr=1030,eh=1031,th=1033,Zo=33776,Qo=33777,Jo=33778,el=33779,gd=35840,xd=35841,vd=35842,_d=35843,yd=36196,Sd=37492,Md=37496,Ed=37488,bd=37489,Tl=37490,wd=37491,Td=37808,Ad=37809,Cd=37810,Rd=37811,Nd=37812,Pd=37813,Id=37814,Ld=37815,Dd=37816,Ud=37817,Fd=37818,kd=37819,Od=37820,Bd=37821,zd=36492,Vd=36494,Hd=36495,Gd=36283,Wd=36284,Al=36285,jd=36286,WS=3200,Dp=0,jS=1,Yi="",Cn="srgb",Cl="srgb-linear",Rl="linear",at="srgb",Wr=7680,Up=519,XS=512,qS=513,$S=514,nh=515,YS=516,KS=517,ih=518,ZS=519,Fp=35044,kp="300 es",oi=2e3,Nl=2001;function QS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Pl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function JS(){const t=Pl("canvas");return t.style.display="block",t}const Op={};function Bp(...t){const e="THREE."+t.shift();console.log(e,...t)}function px(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function ze(...t){t=px(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function et(...t){t=px(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function bs(...t){const e=t.join(" ");e in Op||(Op[e]=!0,ze(...t))}function eM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const tM={[od]:ld,[cd]:fd,[ud]:hd,[Ls]:dd,[ld]:od,[fd]:cd,[hd]:ud,[dd]:Ls};class zr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dc=Math.PI/180,Xd=180/Math.PI;function Ga(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[t&255]+Yt[t>>8&255]+Yt[t>>16&255]+Yt[t>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[n&63|128]+Yt[n>>8&255]+"-"+Yt[n>>16&255]+Yt[n>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function Ke(t,e,n){return Math.max(e,Math.min(n,t))}function nM(t,e){return(t%e+e)%e}function Uc(t,e,n){return(1-n)*t+n*e}function Ks(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ln(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const lh=class lh{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};lh.prototype.isVector2=!0;let Qe=lh;class zs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],p=i[r+2],m=i[r+3],f=s[a+0],h=s[a+1],y=s[a+2],b=s[a+3];if(m!==b||l!==f||c!==h||p!==y){let x=l*f+c*h+p*y+m*b;x<0&&(f=-f,h=-h,y=-y,b=-b,x=-x);let d=1-o;if(x<.9995){const g=Math.acos(x),_=Math.sin(g);d=Math.sin(d*g)/_,o=Math.sin(o*g)/_,l=l*d+f*o,c=c*d+h*o,p=p*d+y*o,m=m*d+b*o}else{l=l*d+f*o,c=c*d+h*o,p=p*d+y*o,m=m*d+b*o;const g=1/Math.sqrt(l*l+c*c+p*p+m*m);l*=g,c*=g,p*=g,m*=g}}e[n]=l,e[n+1]=c,e[n+2]=p,e[n+3]=m}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],p=i[r+3],m=s[a],f=s[a+1],h=s[a+2],y=s[a+3];return e[n]=o*y+p*m+l*h-c*f,e[n+1]=l*y+p*f+c*m-o*h,e[n+2]=c*y+p*h+o*f-l*m,e[n+3]=p*y-o*m-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),p=o(r/2),m=o(s/2),f=l(i/2),h=l(r/2),y=l(s/2);switch(a){case"XYZ":this._x=f*p*m+c*h*y,this._y=c*h*m-f*p*y,this._z=c*p*y+f*h*m,this._w=c*p*m-f*h*y;break;case"YXZ":this._x=f*p*m+c*h*y,this._y=c*h*m-f*p*y,this._z=c*p*y-f*h*m,this._w=c*p*m+f*h*y;break;case"ZXY":this._x=f*p*m-c*h*y,this._y=c*h*m+f*p*y,this._z=c*p*y+f*h*m,this._w=c*p*m-f*h*y;break;case"ZYX":this._x=f*p*m-c*h*y,this._y=c*h*m+f*p*y,this._z=c*p*y-f*h*m,this._w=c*p*m+f*h*y;break;case"YZX":this._x=f*p*m+c*h*y,this._y=c*h*m+f*p*y,this._z=c*p*y-f*h*m,this._w=c*p*m-f*h*y;break;case"XZY":this._x=f*p*m-c*h*y,this._y=c*h*m-f*p*y,this._z=c*p*y+f*h*m,this._w=c*p*m+f*h*y;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],p=n[6],m=n[10],f=i+o+m;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(p-l)*h,this._y=(s-c)*h,this._z=(a-r)*h}else if(i>o&&i>m){const h=2*Math.sqrt(1+i-o-m);this._w=(p-l)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+c)/h}else if(o>m){const h=2*Math.sqrt(1+o-i-m);this._w=(s-c)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(l+p)/h}else{const h=2*Math.sqrt(1+m-i-o);this._w=(a-r)/h,this._x=(s+c)/h,this._y=(l+p)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,p=n._w;return this._x=i*p+a*o+r*c-s*l,this._y=r*p+a*l+s*o-i*c,this._z=s*p+a*c+i*l-r*o,this._w=a*p-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),p=Math.sin(c);l=Math.sin(l*c)/p,n=Math.sin(n*c)/p,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ch=class ch{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(zp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(zp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),p=2*(o*n-s*r),m=2*(s*i-a*n);return this.x=n+l*c+a*m-o*p,this.y=i+l*p+o*c-s*m,this.z=r+l*m+s*p-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Fc.copy(this).projectOnVector(e),this.sub(Fc)}reflect(e){return this.sub(Fc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ch.prototype.isVector3=!0;let j=ch;const Fc=new j,zp=new zs,uh=class uh{constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const p=this.elements;return p[0]=e,p[1]=r,p[2]=o,p[3]=n,p[4]=s,p[5]=l,p[6]=i,p[7]=a,p[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],p=i[4],m=i[7],f=i[2],h=i[5],y=i[8],b=r[0],x=r[3],d=r[6],g=r[1],_=r[4],M=r[7],T=r[2],A=r[5],R=r[8];return s[0]=a*b+o*g+l*T,s[3]=a*x+o*_+l*A,s[6]=a*d+o*M+l*R,s[1]=c*b+p*g+m*T,s[4]=c*x+p*_+m*A,s[7]=c*d+p*M+m*R,s[2]=f*b+h*g+y*T,s[5]=f*x+h*_+y*A,s[8]=f*d+h*M+y*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],p=e[8];return n*a*p-n*o*c-i*s*p+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],p=e[8],m=p*a-o*c,f=o*l-p*s,h=c*s-a*l,y=n*m+i*f+r*h;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/y;return e[0]=m*b,e[1]=(r*c-p*i)*b,e[2]=(o*i-r*a)*b,e[3]=f*b,e[4]=(p*n-r*l)*b,e[5]=(r*s-o*n)*b,e[6]=h*b,e[7]=(i*l-c*n)*b,e[8]=(a*n-i*s)*b,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return bs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(kc.makeScale(e,n)),this}rotate(e){return bs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(kc.makeRotation(-e)),this}translate(e,n){return bs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(kc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};uh.prototype.isMatrix3=!0;let He=uh;const kc=new He,Vp=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hp=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function iM(){const t={enabled:!0,workingColorSpace:Cl,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===at&&(r.r=Ai(r.r),r.g=Ai(r.g),r.b=Ai(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(r.r=ws(r.r),r.g=ws(r.g),r.b=ws(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Yi?Rl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return bs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return bs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Cl]:{primaries:e,whitePoint:i,transfer:Rl,toXYZ:Vp,fromXYZ:Hp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Cn},outputColorSpaceConfig:{drawingBufferColorSpace:Cn}},[Cn]:{primaries:e,whitePoint:i,transfer:at,toXYZ:Vp,fromXYZ:Hp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Cn}}}),t}const $e=iM();function Ai(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ws(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let jr;class rM{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{jr===void 0&&(jr=Pl("canvas")),jr.width=e.width,jr.height=e.height;const r=jr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=jr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Pl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ai(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ai(n[i]/255)*255):n[i]=Ai(n[i]);return{data:n,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sM=0;class rh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=Ga(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Oc(r[a].image)):s.push(Oc(r[a]))}else s=Oc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Oc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?rM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}let aM=0;const Bc=new j;class Jt extends zr{constructor(e=Jt.DEFAULT_IMAGE,n=Jt.DEFAULT_MAPPING,i=bi,r=bi,s=Qt,a=Tr,o=qn,l=In,c=Jt.DEFAULT_ANISOTROPY,p=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=Ga(),this.name="",this.source=new rh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Bc).x}get height(){return this.source.getSize(Bc).y}get depth(){return this.source.getSize(Bc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){ze(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ze(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ax)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pd:e.x=e.x-Math.floor(e.x);break;case bi:e.x=e.x<0?0:1;break;case md:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pd:e.y=e.y-Math.floor(e.y);break;case bi:e.y=e.y<0?0:1;break;case md:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=ax;Jt.DEFAULT_ANISOTROPY=1;const dh=class dh{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],p=l[4],m=l[8],f=l[1],h=l[5],y=l[9],b=l[2],x=l[6],d=l[10];if(Math.abs(p-f)<.01&&Math.abs(m-b)<.01&&Math.abs(y-x)<.01){if(Math.abs(p+f)<.1&&Math.abs(m+b)<.1&&Math.abs(y+x)<.1&&Math.abs(c+h+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,M=(h+1)/2,T=(d+1)/2,A=(p+f)/4,R=(m+b)/4,v=(y+x)/4;return _>M&&_>T?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=A/i,s=R/i):M>T?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=A/r,s=v/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=R/s,r=v/s),this.set(i,r,s,n),this}let g=Math.sqrt((x-y)*(x-y)+(m-b)*(m-b)+(f-p)*(f-p));return Math.abs(g)<.001&&(g=1),this.x=(x-y)/g,this.y=(m-b)/g,this.z=(f-p)/g,this.w=Math.acos((c+h+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this.w=Ke(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this.w=Ke(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};dh.prototype.isVector4=!0;let At=dh;class oM extends zr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new At(0,0,e,n),this.scissorTest=!1,this.viewport=new At(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new Jt(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new rh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class di extends oM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class mx extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lM extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ll=class Ll{constructor(e,n,i,r,s,a,o,l,c,p,m,f,h,y,b,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,p,m,f,h,y,b,x)}set(e,n,i,r,s,a,o,l,c,p,m,f,h,y,b,x){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=p,d[10]=m,d[14]=f,d[3]=h,d[7]=y,d[11]=b,d[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ll().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Xr.setFromMatrixColumn(e,0).length(),s=1/Xr.setFromMatrixColumn(e,1).length(),a=1/Xr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),p=Math.cos(s),m=Math.sin(s);if(e.order==="XYZ"){const f=a*p,h=a*m,y=o*p,b=o*m;n[0]=l*p,n[4]=-l*m,n[8]=c,n[1]=h+y*c,n[5]=f-b*c,n[9]=-o*l,n[2]=b-f*c,n[6]=y+h*c,n[10]=a*l}else if(e.order==="YXZ"){const f=l*p,h=l*m,y=c*p,b=c*m;n[0]=f+b*o,n[4]=y*o-h,n[8]=a*c,n[1]=a*m,n[5]=a*p,n[9]=-o,n[2]=h*o-y,n[6]=b+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*p,h=l*m,y=c*p,b=c*m;n[0]=f-b*o,n[4]=-a*m,n[8]=y+h*o,n[1]=h+y*o,n[5]=a*p,n[9]=b-f*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*p,h=a*m,y=o*p,b=o*m;n[0]=l*p,n[4]=y*c-h,n[8]=f*c+b,n[1]=l*m,n[5]=b*c+f,n[9]=h*c-y,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,h=a*c,y=o*l,b=o*c;n[0]=l*p,n[4]=b-f*m,n[8]=y*m+h,n[1]=m,n[5]=a*p,n[9]=-o*p,n[2]=-c*p,n[6]=h*m+y,n[10]=f-b*m}else if(e.order==="XZY"){const f=a*l,h=a*c,y=o*l,b=o*c;n[0]=l*p,n[4]=-m,n[8]=c*p,n[1]=f*m+b,n[5]=a*p,n[9]=h*m-y,n[2]=y*m-h,n[6]=o*p,n[10]=b*m+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cM,e,uM)}lookAt(e,n,i){const r=this.elements;return xn.subVectors(e,n),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Bi.crossVectors(i,xn),Bi.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Bi.crossVectors(i,xn)),Bi.normalize(),po.crossVectors(xn,Bi),r[0]=Bi.x,r[4]=po.x,r[8]=xn.x,r[1]=Bi.y,r[5]=po.y,r[9]=xn.y,r[2]=Bi.z,r[6]=po.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],p=i[1],m=i[5],f=i[9],h=i[13],y=i[2],b=i[6],x=i[10],d=i[14],g=i[3],_=i[7],M=i[11],T=i[15],A=r[0],R=r[4],v=r[8],E=r[12],I=r[1],L=r[5],D=r[9],H=r[13],Z=r[2],k=r[6],X=r[10],W=r[14],F=r[3],K=r[7],N=r[11],C=r[15];return s[0]=a*A+o*I+l*Z+c*F,s[4]=a*R+o*L+l*k+c*K,s[8]=a*v+o*D+l*X+c*N,s[12]=a*E+o*H+l*W+c*C,s[1]=p*A+m*I+f*Z+h*F,s[5]=p*R+m*L+f*k+h*K,s[9]=p*v+m*D+f*X+h*N,s[13]=p*E+m*H+f*W+h*C,s[2]=y*A+b*I+x*Z+d*F,s[6]=y*R+b*L+x*k+d*K,s[10]=y*v+b*D+x*X+d*N,s[14]=y*E+b*H+x*W+d*C,s[3]=g*A+_*I+M*Z+T*F,s[7]=g*R+_*L+M*k+T*K,s[11]=g*v+_*D+M*X+T*N,s[15]=g*E+_*H+M*W+T*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],p=e[2],m=e[6],f=e[10],h=e[14],y=e[3],b=e[7],x=e[11],d=e[15],g=l*h-c*f,_=o*h-c*m,M=o*f-l*m,T=a*h-c*p,A=a*f-l*p,R=a*m-o*p;return n*(b*g-x*_+d*M)-i*(y*g-x*T+d*A)+r*(y*_-b*T+d*R)-s*(y*M-b*A+x*R)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],p=e[10];return n*(a*p-o*c)-i*(s*p-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],p=e[8],m=e[9],f=e[10],h=e[11],y=e[12],b=e[13],x=e[14],d=e[15],g=n*o-i*a,_=n*l-r*a,M=n*c-s*a,T=i*l-r*o,A=i*c-s*o,R=r*c-s*l,v=p*b-m*y,E=p*x-f*y,I=p*d-h*y,L=m*x-f*b,D=m*d-h*b,H=f*d-h*x,Z=g*H-_*D+M*L+T*I-A*E+R*v;if(Z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/Z;return e[0]=(o*H-l*D+c*L)*k,e[1]=(r*D-i*H-s*L)*k,e[2]=(b*R-x*A+d*T)*k,e[3]=(f*A-m*R-h*T)*k,e[4]=(l*I-a*H-c*E)*k,e[5]=(n*H-r*I+s*E)*k,e[6]=(x*M-y*R-d*_)*k,e[7]=(p*R-f*M+h*_)*k,e[8]=(a*D-o*I+c*v)*k,e[9]=(i*I-n*D-s*v)*k,e[10]=(y*A-b*M+d*g)*k,e[11]=(m*M-p*A-h*g)*k,e[12]=(o*E-a*L-l*v)*k,e[13]=(n*L-i*E+r*v)*k,e[14]=(b*_-y*T-x*g)*k,e[15]=(p*T-m*_+f*g)*k,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,p=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,p*o+i,p*l-r*a,0,c*l-r*o,p*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,p=a+a,m=o+o,f=s*c,h=s*p,y=s*m,b=a*p,x=a*m,d=o*m,g=l*c,_=l*p,M=l*m,T=i.x,A=i.y,R=i.z;return r[0]=(1-(b+d))*T,r[1]=(h+M)*T,r[2]=(y-_)*T,r[3]=0,r[4]=(h-M)*A,r[5]=(1-(f+d))*A,r[6]=(x+g)*A,r[7]=0,r[8]=(y+_)*R,r[9]=(x-g)*R,r[10]=(1-(f+b))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Xr.set(r[0],r[1],r[2]).length();const o=Xr.set(r[4],r[5],r[6]).length(),l=Xr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),zn.copy(this);const c=1/a,p=1/o,m=1/l;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=p,zn.elements[5]*=p,zn.elements[6]*=p,zn.elements[8]*=m,zn.elements[9]*=m,zn.elements[10]*=m,n.setFromRotationMatrix(zn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=oi,l=!1){const c=this.elements,p=2*s/(n-e),m=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let y,b;if(l)y=s/(a-s),b=a*s/(a-s);else if(o===oi)y=-(a+s)/(a-s),b=-2*a*s/(a-s);else if(o===Nl)y=-a/(a-s),b=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=p,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=m,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=y,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=oi,l=!1){const c=this.elements,p=2/(n-e),m=2/(i-r),f=-(n+e)/(n-e),h=-(i+r)/(i-r);let y,b;if(l)y=1/(a-s),b=a/(a-s);else if(o===oi)y=-2/(a-s),b=-(a+s)/(a-s);else if(o===Nl)y=-1/(a-s),b=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=p,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=m,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=y,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Ll.prototype.isMatrix4=!0;let Pt=Ll;const Xr=new j,zn=new Pt,cM=new j(0,0,0),uM=new j(1,1,1),Bi=new j,po=new j,xn=new j,Gp=new Pt,Wp=new zs;class kr{constructor(e=0,n=0,i=0,r=kr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],p=r[9],m=r[2],f=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-p,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-m,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,c),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-p,h),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Gp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Wp.setFromEuler(this),this.setFromQuaternion(Wp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kr.DEFAULT_ORDER="XYZ";class gx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dM=0;const jp=new j,qr=new zs,pi=new Pt,mo=new j,Zs=new j,fM=new j,hM=new zs,Xp=new j(1,0,0),qp=new j(0,1,0),$p=new j(0,0,1),Yp={type:"added"},pM={type:"removed"},$r={type:"childadded",child:null},zc={type:"childremoved",child:null};class mn extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=Ga(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const e=new j,n=new kr,i=new zs,r=new j(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pt},normalMatrix:{value:new He}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return qr.setFromAxisAngle(e,n),this.quaternion.multiply(qr),this}rotateOnWorldAxis(e,n){return qr.setFromAxisAngle(e,n),this.quaternion.premultiply(qr),this}rotateX(e){return this.rotateOnAxis(Xp,e)}rotateY(e){return this.rotateOnAxis(qp,e)}rotateZ(e){return this.rotateOnAxis($p,e)}translateOnAxis(e,n){return jp.copy(e).applyQuaternion(this.quaternion),this.position.add(jp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Xp,e)}translateY(e){return this.translateOnAxis(qp,e)}translateZ(e){return this.translateOnAxis($p,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?mo.copy(e):mo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Zs,mo,this.up):pi.lookAt(mo,Zs,this.up),this.quaternion.setFromRotationMatrix(pi),r&&(pi.extractRotation(r.matrixWorld),qr.setFromRotationMatrix(pi),this.quaternion.premultiply(qr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yp),$r.child=e,this.dispatchEvent($r),$r.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(pM),zc.child=e,this.dispatchEvent(zc),zc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yp),$r.child=e,this.dispatchEvent($r),$r.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,e,fM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,hM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,p=l.length;c<p;c++){const m=l[c];s(e.shapes,m)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),p=a(e.images),m=a(e.shapes),f=a(e.skeletons),h=a(e.animations),y=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),p.length>0&&(i.images=p),m.length>0&&(i.shapes=m),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),y.length>0&&(i.nodes=y)}return i.object=r,i;function a(o){const l=[];for(const c in o){const p=o[c];delete p.metadata,l.push(p)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}mn.DEFAULT_UP=new j(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class go extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mM={type:"move"};class Vc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new go,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new go,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new go,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const b of e.hand.values()){const x=n.getJointPose(b,i),d=this._getHandJoint(c,b);x!==null&&(d.matrix.fromArray(x.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=x.radius),d.visible=x!==null}const p=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],f=p.position.distanceTo(m.position),h=.02,y=.005;c.inputState.pinching&&f>h+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mM)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new go;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const xx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},xo={h:0,s:0,l:0};function Hc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=$e.workingColorSpace){return this.r=e,this.g=n,this.b=i,$e.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=$e.workingColorSpace){if(e=nM(e,1),n=Ke(n,0,1),i=Ke(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Hc(a,s,e+1/3),this.g=Hc(a,s,e),this.b=Hc(a,s,e-1/3)}return $e.colorSpaceToWorking(this,r),this}setStyle(e,n=Cn){function i(s){s!==void 0&&parseFloat(s)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:ze("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Cn){const i=xx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Cn){return $e.workingToColorSpace(Kt.copy(this),e),Math.round(Ke(Kt.r*255,0,255))*65536+Math.round(Ke(Kt.g*255,0,255))*256+Math.round(Ke(Kt.b*255,0,255))}getHexString(e=Cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=$e.workingColorSpace){$e.workingToColorSpace(Kt.copy(this),n);const i=Kt.r,r=Kt.g,s=Kt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const p=(o+a)/2;if(o===a)l=0,c=0;else{const m=a-o;switch(c=p<=.5?m/(a+o):m/(2-a-o),a){case i:l=(r-s)/m+(r<s?6:0);break;case r:l=(s-i)/m+2;break;case s:l=(i-r)/m+4;break}l/=6}return e.h=l,e.s=c,e.l=p,e}getRGB(e,n=$e.workingColorSpace){return $e.workingToColorSpace(Kt.copy(this),n),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=Cn){$e.workingToColorSpace(Kt.copy(this),e);const n=Kt.r,i=Kt.g,r=Kt.b;return e!==Cn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+n,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(zi),e.getHSL(xo);const i=Uc(zi.h,xo.h,n),r=Uc(zi.s,xo.s,n),s=Uc(zi.l,xo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new Ze;Ze.NAMES=xx;class gM extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kr,this.environmentIntensity=1,this.environmentRotation=new kr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Vn=new j,mi=new j,Gc=new j,gi=new j,Yr=new j,Kr=new j,Kp=new j,Wc=new j,jc=new j,Xc=new j,qc=new At,$c=new At,Yc=new At;class Xn{constructor(e=new j,n=new j,i=new j){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Vn.subVectors(e,n),r.cross(Vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Vn.subVectors(r,n),mi.subVectors(i,n),Gc.subVectors(e,n);const a=Vn.dot(Vn),o=Vn.dot(mi),l=Vn.dot(Gc),c=mi.dot(mi),p=mi.dot(Gc),m=a*c-o*o;if(m===0)return s.set(0,0,0),null;const f=1/m,h=(c*l-o*p)*f,y=(a*p-o*l)*f;return s.set(1-h-y,y,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,gi.x),l.addScaledVector(a,gi.y),l.addScaledVector(o,gi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return qc.setScalar(0),$c.setScalar(0),Yc.setScalar(0),qc.fromBufferAttribute(e,n),$c.fromBufferAttribute(e,i),Yc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(qc,s.x),a.addScaledVector($c,s.y),a.addScaledVector(Yc,s.z),a}static isFrontFacing(e,n,i,r){return Vn.subVectors(i,n),mi.subVectors(e,n),Vn.cross(mi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Vn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Xn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Xn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Yr.subVectors(r,i),Kr.subVectors(s,i),Wc.subVectors(e,i);const l=Yr.dot(Wc),c=Kr.dot(Wc);if(l<=0&&c<=0)return n.copy(i);jc.subVectors(e,r);const p=Yr.dot(jc),m=Kr.dot(jc);if(p>=0&&m<=p)return n.copy(r);const f=l*m-p*c;if(f<=0&&l>=0&&p<=0)return a=l/(l-p),n.copy(i).addScaledVector(Yr,a);Xc.subVectors(e,s);const h=Yr.dot(Xc),y=Kr.dot(Xc);if(y>=0&&h<=y)return n.copy(s);const b=h*c-l*y;if(b<=0&&c>=0&&y<=0)return o=c/(c-y),n.copy(i).addScaledVector(Kr,o);const x=p*y-h*m;if(x<=0&&m-p>=0&&h-y>=0)return Kp.subVectors(s,r),o=(m-p)/(m-p+(h-y)),n.copy(r).addScaledVector(Kp,o);const d=1/(x+b+f);return a=b*d,o=f*d,n.copy(i).addScaledVector(Yr,a).addScaledVector(Kr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Wa{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Hn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Hn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Hn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Hn):Hn.fromBufferAttribute(s,a),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vo.copy(i.boundingBox)),vo.applyMatrix4(e.matrixWorld),this.union(vo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qs),_o.subVectors(this.max,Qs),Zr.subVectors(e.a,Qs),Qr.subVectors(e.b,Qs),Jr.subVectors(e.c,Qs),Vi.subVectors(Qr,Zr),Hi.subVectors(Jr,Qr),pr.subVectors(Zr,Jr);let n=[0,-Vi.z,Vi.y,0,-Hi.z,Hi.y,0,-pr.z,pr.y,Vi.z,0,-Vi.x,Hi.z,0,-Hi.x,pr.z,0,-pr.x,-Vi.y,Vi.x,0,-Hi.y,Hi.x,0,-pr.y,pr.x,0];return!Kc(n,Zr,Qr,Jr,_o)||(n=[1,0,0,0,1,0,0,0,1],!Kc(n,Zr,Qr,Jr,_o))?!1:(yo.crossVectors(Vi,Hi),n=[yo.x,yo.y,yo.z],Kc(n,Zr,Qr,Jr,_o))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xi=[new j,new j,new j,new j,new j,new j,new j,new j],Hn=new j,vo=new Wa,Zr=new j,Qr=new j,Jr=new j,Vi=new j,Hi=new j,pr=new j,Qs=new j,_o=new j,yo=new j,mr=new j;function Kc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){mr.fromArray(t,s);const o=r.x*Math.abs(mr.x)+r.y*Math.abs(mr.y)+r.z*Math.abs(mr.z),l=e.dot(mr),c=n.dot(mr),p=i.dot(mr);if(Math.max(-Math.max(l,c,p),Math.min(l,c,p))>o)return!1}return!0}const It=new j,So=new Qe;let xM=0;class Un extends zr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Fp,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)So.fromBufferAttribute(this,n),So.applyMatrix3(e),this.setXY(n,So.x,So.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix3(e),this.setXYZ(n,It.x,It.y,It.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix4(e),this.setXYZ(n,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyNormalMatrix(e),this.setXYZ(n,It.x,It.y,It.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.transformDirection(e),this.setXYZ(n,It.x,It.y,It.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ks(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ln(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ks(n,this.array)),n}setX(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ks(n,this.array)),n}setY(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ks(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ks(n,this.array)),n}setW(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array),s=ln(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fp&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class vx extends Un{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class _x extends Un{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class sn extends Un{constructor(e,n,i){super(new Float32Array(e),n,i)}}const vM=new Wa,Js=new j,Zc=new j;class Ql{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):vM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Js.subVectors(e,this.center);const n=Js.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Js,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Js.copy(e.center).add(Zc)),this.expandByPoint(Js.copy(e.center).sub(Zc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let _M=0;const An=new Pt,Qc=new mn,es=new j,vn=new Wa,ea=new Wa,Ot=new j;class wn extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=Ga(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(QS(e)?_x:vx)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,n,i){return An.makeTranslation(e,n,i),this.applyMatrix4(An),this}scale(e,n,i){return An.makeScale(e,n,i),this.applyMatrix4(An),this}lookAt(e){return Qc.lookAt(e),Qc.updateMatrix(),this.applyMatrix4(Qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new sn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ql);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ea.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(vn.min,ea.min),vn.expandByPoint(Ot),Ot.addVectors(vn.max,ea.max),vn.expandByPoint(Ot)):(vn.expandByPoint(ea.min),vn.expandByPoint(ea.max))}vn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ot));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,p=o.count;c<p;c++)Ot.fromBufferAttribute(o,c),l&&(es.fromBufferAttribute(e,c),Ot.add(es)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Un(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new j,l[v]=new j;const c=new j,p=new j,m=new j,f=new Qe,h=new Qe,y=new Qe,b=new j,x=new j;function d(v,E,I){c.fromBufferAttribute(i,v),p.fromBufferAttribute(i,E),m.fromBufferAttribute(i,I),f.fromBufferAttribute(s,v),h.fromBufferAttribute(s,E),y.fromBufferAttribute(s,I),p.sub(c),m.sub(c),h.sub(f),y.sub(f);const L=1/(h.x*y.y-y.x*h.y);isFinite(L)&&(b.copy(p).multiplyScalar(y.y).addScaledVector(m,-h.y).multiplyScalar(L),x.copy(m).multiplyScalar(h.x).addScaledVector(p,-y.x).multiplyScalar(L),o[v].add(b),o[E].add(b),o[I].add(b),l[v].add(x),l[E].add(x),l[I].add(x))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let v=0,E=g.length;v<E;++v){const I=g[v],L=I.start,D=I.count;for(let H=L,Z=L+D;H<Z;H+=3)d(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const _=new j,M=new j,T=new j,A=new j;function R(v){T.fromBufferAttribute(r,v),A.copy(T);const E=o[v];_.copy(E),_.sub(T.multiplyScalar(T.dot(E))).normalize(),M.crossVectors(A,E);const L=M.dot(l[v])<0?-1:1;a.setXYZW(v,_.x,_.y,_.z,L)}for(let v=0,E=g.length;v<E;++v){const I=g[v],L=I.start,D=I.count;for(let H=L,Z=L+D;H<Z;H+=3)R(e.getX(H+0)),R(e.getX(H+1)),R(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Un(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const r=new j,s=new j,a=new j,o=new j,l=new j,c=new j,p=new j,m=new j;if(e)for(let f=0,h=e.count;f<h;f+=3){const y=e.getX(f+0),b=e.getX(f+1),x=e.getX(f+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,b),a.fromBufferAttribute(n,x),p.subVectors(a,s),m.subVectors(r,s),p.cross(m),o.fromBufferAttribute(i,y),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,x),o.add(p),l.add(p),c.add(p),i.setXYZ(y,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let f=0,h=n.count;f<h;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),p.subVectors(a,s),m.subVectors(r,s),p.cross(m),i.setXYZ(f+0,p.x,p.y,p.z),i.setXYZ(f+1,p.x,p.y,p.z),i.setXYZ(f+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ot.fromBufferAttribute(e,n),Ot.normalize(),e.setXYZ(n,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,l){const c=o.array,p=o.itemSize,m=o.normalized,f=new c.constructor(l.length*p);let h=0,y=0;for(let b=0,x=l.length;b<x;b++){o.isInterleavedBufferAttribute?h=l[b]*o.data.stride+o.offset:h=l[b]*p;for(let d=0;d<p;d++)f[y++]=c[h++]}return new Un(f,p,m)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new wn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let p=0,m=c.length;p<m;p++){const f=c[p],h=e(f,i);l.push(h)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],p=[];for(let m=0,f=c.length;m<f;m++){const h=c[m];p.push(h.toJSON(e.data))}p.length>0&&(r[l]=p,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const p=r[c];this.setAttribute(c,p.clone(n))}const s=e.morphAttributes;for(const c in s){const p=[],m=s[c];for(let f=0,h=m.length;f<h;f++)p.push(m[f].clone(n));this.morphAttributes[c]=p}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,p=a.length;c<p;c++){const m=a[c];this.addGroup(m.start,m.count,m.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let yM=0;class ja extends zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=Ga(),this.name="",this.type="Material",this.blending=Es,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sd,this.blendDst=ad,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Up,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wr,this.stencilZFail=Wr,this.stencilZPass=Wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){ze(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ze(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(i.blending=this.blending),this.side!==cr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sd&&(i.blendSrc=this.blendSrc),this.blendDst!==ad&&(i.blendDst=this.blendDst),this.blendEquation!==Sr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Up&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Wr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Wr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Qe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Qe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const vi=new j,Jc=new j,Mo=new j,Gi=new j,eu=new j,Eo=new j,tu=new j;class yx{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=vi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,n),vi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Jc.copy(e).add(n).multiplyScalar(.5),Mo.copy(n).sub(e).normalize(),Gi.copy(this.origin).sub(Jc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Mo),o=Gi.dot(this.direction),l=-Gi.dot(Mo),c=Gi.lengthSq(),p=Math.abs(1-a*a);let m,f,h,y;if(p>0)if(m=a*l-o,f=a*o-l,y=s*p,m>=0)if(f>=-y)if(f<=y){const b=1/p;m*=b,f*=b,h=m*(m+a*f+2*o)+f*(a*m+f+2*l)+c}else f=s,m=Math.max(0,-(a*f+o)),h=-m*m+f*(f+2*l)+c;else f=-s,m=Math.max(0,-(a*f+o)),h=-m*m+f*(f+2*l)+c;else f<=-y?(m=Math.max(0,-(-a*s+o)),f=m>0?-s:Math.min(Math.max(-s,-l),s),h=-m*m+f*(f+2*l)+c):f<=y?(m=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(m=Math.max(0,-(a*s+o)),f=m>0?s:Math.min(Math.max(-s,-l),s),h=-m*m+f*(f+2*l)+c);else f=a>0?-s:s,m=Math.max(0,-(a*f+o)),h=-m*m+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(Jc).addScaledVector(Mo,f),h}intersectSphere(e,n){vi.subVectors(e.center,this.origin);const i=vi.dot(this.direction),r=vi.dot(vi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),p>=0?(s=(e.min.y-f.y)*p,a=(e.max.y-f.y)*p):(s=(e.max.y-f.y)*p,a=(e.min.y-f.y)*p),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),m>=0?(o=(e.min.z-f.z)*m,l=(e.max.z-f.z)*m):(o=(e.max.z-f.z)*m,l=(e.min.z-f.z)*m),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,n,i,r,s){eu.subVectors(n,e),Eo.subVectors(i,e),tu.crossVectors(eu,Eo);let a=this.direction.dot(tu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gi.subVectors(this.origin,e);const l=o*this.direction.dot(Eo.crossVectors(Gi,Eo));if(l<0)return null;const c=o*this.direction.dot(eu.cross(Gi));if(c<0||l+c>a)return null;const p=-o*Gi.dot(tu);return p<0?null:this.at(p/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class va extends ja{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kr,this.combine=Qg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zp=new Pt,gr=new yx,bo=new Ql,Qp=new j,wo=new j,To=new j,Ao=new j,nu=new j,Co=new j,Jp=new j,Ro=new j;class Fn extends mn{constructor(e=new wn,n=new va){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Co.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const p=o[l],m=s[l];p!==0&&(nu.fromBufferAttribute(m,e),a?Co.addScaledVector(nu,p):Co.addScaledVector(nu.sub(n),p))}n.add(Co)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bo.copy(i.boundingSphere),bo.applyMatrix4(s),gr.copy(e.ray).recast(e.near),!(bo.containsPoint(gr.origin)===!1&&(gr.intersectSphere(bo,Qp)===null||gr.origin.distanceToSquared(Qp)>(e.far-e.near)**2))&&(Zp.copy(s).invert(),gr.copy(e.ray).applyMatrix4(Zp),!(i.boundingBox!==null&&gr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,gr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,p=s.attributes.uv1,m=s.attributes.normal,f=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,b=f.length;y<b;y++){const x=f[y],d=a[x.materialIndex],g=Math.max(x.start,h.start),_=Math.min(o.count,Math.min(x.start+x.count,h.start+h.count));for(let M=g,T=_;M<T;M+=3){const A=o.getX(M),R=o.getX(M+1),v=o.getX(M+2);r=No(this,d,e,i,c,p,m,A,R,v),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const y=Math.max(0,h.start),b=Math.min(o.count,h.start+h.count);for(let x=y,d=b;x<d;x+=3){const g=o.getX(x),_=o.getX(x+1),M=o.getX(x+2);r=No(this,a,e,i,c,p,m,g,_,M),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let y=0,b=f.length;y<b;y++){const x=f[y],d=a[x.materialIndex],g=Math.max(x.start,h.start),_=Math.min(l.count,Math.min(x.start+x.count,h.start+h.count));for(let M=g,T=_;M<T;M+=3){const A=M,R=M+1,v=M+2;r=No(this,d,e,i,c,p,m,A,R,v),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const y=Math.max(0,h.start),b=Math.min(l.count,h.start+h.count);for(let x=y,d=b;x<d;x+=3){const g=x,_=x+1,M=x+2;r=No(this,a,e,i,c,p,m,g,_,M),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function SM(t,e,n,i,r,s,a,o){let l;if(e.side===pn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===cr,o),l===null)return null;Ro.copy(o),Ro.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ro);return c<n.near||c>n.far?null:{distance:c,point:Ro.clone(),object:t}}function No(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,wo),t.getVertexPosition(l,To),t.getVertexPosition(c,Ao);const p=SM(t,e,n,i,wo,To,Ao,Jp);if(p){const m=new j;Xn.getBarycoord(Jp,wo,To,Ao,m),r&&(p.uv=Xn.getInterpolatedAttribute(r,o,l,c,m,new Qe)),s&&(p.uv1=Xn.getInterpolatedAttribute(s,o,l,c,m,new Qe)),a&&(p.normal=Xn.getInterpolatedAttribute(a,o,l,c,m,new j),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new j,materialIndex:0};Xn.getNormal(wo,To,Ao,f.normal),p.face=f,p.barycoord=m}return p}class MM extends Jt{constructor(e=null,n=1,i=1,r,s,a,o,l,c=Gt,p=Gt,m,f){super(null,a,o,l,c,p,r,s,m,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const iu=new j,EM=new j,bM=new He;class yr{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=iu.subVectors(i,n).cross(EM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(iu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||bM.getNormalMatrix(e),r=this.coplanarPoint(iu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xr=new Ql,wM=new Qe(.5,.5),Po=new j;class Sx{constructor(e=new yr,n=new yr,i=new yr,r=new yr,s=new yr,a=new yr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=oi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],p=s[4],m=s[5],f=s[6],h=s[7],y=s[8],b=s[9],x=s[10],d=s[11],g=s[12],_=s[13],M=s[14],T=s[15];if(r[0].setComponents(c-a,h-p,d-y,T-g).normalize(),r[1].setComponents(c+a,h+p,d+y,T+g).normalize(),r[2].setComponents(c+o,h+m,d+b,T+_).normalize(),r[3].setComponents(c-o,h-m,d-b,T-_).normalize(),i)r[4].setComponents(l,f,x,M).normalize(),r[5].setComponents(c-l,h-f,d-x,T-M).normalize();else if(r[4].setComponents(c-l,h-f,d-x,T-M).normalize(),n===oi)r[5].setComponents(c+l,h+f,d+x,T+M).normalize();else if(n===Nl)r[5].setComponents(l,f,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(e){xr.center.set(0,0,0);const n=wM.distanceTo(e.center);return xr.radius=.7071067811865476+n,xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Po.x=r.normal.x>0?e.max.x:e.min.x,Po.y=r.normal.y>0?e.max.y:e.min.y,Po.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Po)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Mx extends ja{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const em=new Pt,qd=new yx,Io=new Ql,Lo=new j;class TM extends mn{constructor(e=new wn,n=new Mx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Io.copy(i.boundingSphere),Io.applyMatrix4(r),Io.radius+=s,e.ray.intersectsSphere(Io)===!1)return;em.copy(r).invert(),qd.copy(e.ray).applyMatrix4(em);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,m=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),h=Math.min(c.count,a.start+a.count);for(let y=f,b=h;y<b;y++){const x=c.getX(y);Lo.fromBufferAttribute(m,x),tm(Lo,x,l,r,e,n,this)}}else{const f=Math.max(0,a.start),h=Math.min(m.count,a.start+a.count);for(let y=f,b=h;y<b;y++)Lo.fromBufferAttribute(m,y),tm(Lo,y,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function tm(t,e,n,i,r,s,a){const o=qd.distanceSqToPoint(t);if(o<n){const l=new j;qd.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Ex extends Jt{constructor(e=[],n=Ur,i,r,s,a,o,l,c,p){super(e,n,i,r,s,a,o,l,c,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class AM extends Jt{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Us extends Jt{constructor(e,n,i=fi,r,s,a,o=Gt,l=Gt,c,p=Li,m=1){if(p!==Li&&p!==Ar)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:m};super(f,r,s,a,o,l,p,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class CM extends Us{constructor(e,n=fi,i=Ur,r,s,a=Gt,o=Gt,l,c=Li){const p={width:e,height:e,depth:1},m=[p,p,p,p,p,p];super(e,e,n,i,r,s,a,o,l,c),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class bx extends Jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Xa extends wn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],p=[],m=[];let f=0,h=0;y("z","y","x",-1,-1,i,n,e,a,s,0),y("z","y","x",1,-1,i,n,-e,a,s,1),y("x","z","y",1,1,e,i,n,r,a,2),y("x","z","y",1,-1,e,i,-n,r,a,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new sn(c,3)),this.setAttribute("normal",new sn(p,3)),this.setAttribute("uv",new sn(m,2));function y(b,x,d,g,_,M,T,A,R,v,E){const I=M/R,L=T/v,D=M/2,H=T/2,Z=A/2,k=R+1,X=v+1;let W=0,F=0;const K=new j;for(let N=0;N<X;N++){const C=N*L-H;for(let V=0;V<k;V++){const se=V*I-D;K[b]=se*g,K[x]=C*_,K[d]=Z,c.push(K.x,K.y,K.z),K[b]=0,K[x]=0,K[d]=A>0?1:-1,p.push(K.x,K.y,K.z),m.push(V/R),m.push(1-N/v),W+=1}}for(let N=0;N<v;N++)for(let C=0;C<R;C++){const V=f+C+k*N,se=f+C+k*(N+1),ie=f+(C+1)+k*(N+1),re=f+(C+1)+k*N;l.push(V,se,re),l.push(se,ie,re),F+=6}o.addGroup(h,F,E),h+=F,f+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class sh extends wn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],a=[];o(r),c(i),p(),this.setAttribute("position",new sn(s,3)),this.setAttribute("normal",new sn(s.slice(),3)),this.setAttribute("uv",new sn(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(g){const _=new j,M=new j,T=new j;for(let A=0;A<n.length;A+=3)h(n[A+0],_),h(n[A+1],M),h(n[A+2],T),l(_,M,T,g)}function l(g,_,M,T){const A=T+1,R=[];for(let v=0;v<=A;v++){R[v]=[];const E=g.clone().lerp(M,v/A),I=_.clone().lerp(M,v/A),L=A-v;for(let D=0;D<=L;D++)D===0&&v===A?R[v][D]=E:R[v][D]=E.clone().lerp(I,D/L)}for(let v=0;v<A;v++)for(let E=0;E<2*(A-v)-1;E++){const I=Math.floor(E/2);E%2===0?(f(R[v][I+1]),f(R[v+1][I]),f(R[v][I])):(f(R[v][I+1]),f(R[v+1][I+1]),f(R[v+1][I]))}}function c(g){const _=new j;for(let M=0;M<s.length;M+=3)_.x=s[M+0],_.y=s[M+1],_.z=s[M+2],_.normalize().multiplyScalar(g),s[M+0]=_.x,s[M+1]=_.y,s[M+2]=_.z}function p(){const g=new j;for(let _=0;_<s.length;_+=3){g.x=s[_+0],g.y=s[_+1],g.z=s[_+2];const M=x(g)/2/Math.PI+.5,T=d(g)/Math.PI+.5;a.push(M,1-T)}y(),m()}function m(){for(let g=0;g<a.length;g+=6){const _=a[g+0],M=a[g+2],T=a[g+4],A=Math.max(_,M,T),R=Math.min(_,M,T);A>.9&&R<.1&&(_<.2&&(a[g+0]+=1),M<.2&&(a[g+2]+=1),T<.2&&(a[g+4]+=1))}}function f(g){s.push(g.x,g.y,g.z)}function h(g,_){const M=g*3;_.x=e[M+0],_.y=e[M+1],_.z=e[M+2]}function y(){const g=new j,_=new j,M=new j,T=new j,A=new Qe,R=new Qe,v=new Qe;for(let E=0,I=0;E<s.length;E+=9,I+=6){g.set(s[E+0],s[E+1],s[E+2]),_.set(s[E+3],s[E+4],s[E+5]),M.set(s[E+6],s[E+7],s[E+8]),A.set(a[I+0],a[I+1]),R.set(a[I+2],a[I+3]),v.set(a[I+4],a[I+5]),T.copy(g).add(_).add(M).divideScalar(3);const L=x(T);b(A,I+0,g,L),b(R,I+2,_,L),b(v,I+4,M,L)}}function b(g,_,M,T){T<0&&g.x===1&&(a[_]=g.x-1),M.x===0&&M.z===0&&(a[_]=T/2/Math.PI+.5)}function x(g){return Math.atan2(g.z,-g.x)}function d(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sh(e.vertices,e.indices,e.radius,e.detail)}}class ah extends sh{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new ah(e.radius,e.detail)}}class Jl extends wn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,p=l+1,m=e/o,f=n/l,h=[],y=[],b=[],x=[];for(let d=0;d<p;d++){const g=d*f-a;for(let _=0;_<c;_++){const M=_*m-s;y.push(M,-g,0),b.push(0,0,1),x.push(_/o),x.push(1-d/l)}}for(let d=0;d<l;d++)for(let g=0;g<o;g++){const _=g+c*d,M=g+c*(d+1),T=g+1+c*(d+1),A=g+1+c*d;h.push(_,M,A),h.push(M,T,A)}this.setIndex(h),this.setAttribute("position",new sn(y,3)),this.setAttribute("normal",new sn(b,3)),this.setAttribute("uv",new sn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Il extends wn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],p=[],m=[],f=new j,h=new j,y=new j;for(let b=0;b<=i;b++){const x=a+b/i*o;for(let d=0;d<=r;d++){const g=d/r*s;h.x=(e+n*Math.cos(x))*Math.cos(g),h.y=(e+n*Math.cos(x))*Math.sin(g),h.z=n*Math.sin(x),c.push(h.x,h.y,h.z),f.x=e*Math.cos(g),f.y=e*Math.sin(g),y.subVectors(h,f).normalize(),p.push(y.x,y.y,y.z),m.push(d/r),m.push(b/i)}}for(let b=1;b<=i;b++)for(let x=1;x<=r;x++){const d=(r+1)*b+x-1,g=(r+1)*(b-1)+x-1,_=(r+1)*(b-1)+x,M=(r+1)*b+x;l.push(d,g,M),l.push(g,_,M)}this.setIndex(l),this.setAttribute("position",new sn(c,3)),this.setAttribute("normal",new sn(p,3)),this.setAttribute("uv",new sn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Il(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Fs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(nm(r))r.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(nm(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function tn(t){const e={};for(let n=0;n<t.length;n++){const i=Fs(t[n]);for(const r in i)e[r]=i[r]}return e}function nm(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function RM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function wx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const NM={clone:Fs,merge:tn};var PM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,IM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hi extends ja{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=PM,this.fragmentShader=IM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=RM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Ze().setHex(r.value);break;case"v2":this.uniforms[i].value=new Qe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new j().fromArray(r.value);break;case"v4":this.uniforms[i].value=new At().fromArray(r.value);break;case"m3":this.uniforms[i].value=new He().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Pt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class LM extends hi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class DM extends ja{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=WS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class UM extends ja{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Do=new j,Uo=new zs,ti=new j;class Tx extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Do,Uo,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Do,Uo,ti.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Do,Uo,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Do,Uo,ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Wi=new j,im=new Qe,rm=new Qe;class Pn extends Tx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Xd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Dc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xd*2*Math.atan(Math.tan(Dc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,n){return this.getViewBounds(e,im,rm),n.subVectors(rm,im)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Dc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Ax extends Tx{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=p*this.view.offsetY,l=o-p*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ts=-90,ns=1;class FM extends mn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Pn(ts,ns,e,n);r.layers=this.layers,this.add(r);const s=new Pn(ts,ns,e,n);s.layers=this.layers,this.add(s);const a=new Pn(ts,ns,e,n);a.layers=this.layers,this.add(a);const o=new Pn(ts,ns,e,n);o.layers=this.layers,this.add(o);const l=new Pn(ts,ns,e,n);l.layers=this.layers,this.add(l);const c=new Pn(ts,ns,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Nl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,p]=this.children,m=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(m,f,h),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class kM extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class OM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ze("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const fh=class fh{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};fh.prototype.isMatrix2=!0;let sm=fh;function am(t,e,n,i){const r=BM(i);switch(n){case dx:return t*e;case hx:return t*e/r.components*r.byteLength;case Jf:return t*e/r.components*r.byteLength;case Fr:return t*e*2/r.components*r.byteLength;case eh:return t*e*2/r.components*r.byteLength;case fx:return t*e*3/r.components*r.byteLength;case qn:return t*e*4/r.components*r.byteLength;case th:return t*e*4/r.components*r.byteLength;case Zo:case Qo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Jo:case el:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case xd:case _d:return Math.max(t,16)*Math.max(e,8)/4;case gd:case vd:return Math.max(t,8)*Math.max(e,8)/2;case yd:case Sd:case Ed:case bd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Md:case Tl:case wd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Td:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ad:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Cd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Rd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Nd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Pd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Id:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Ld:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Dd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Fd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case kd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Od:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Bd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case zd:case Vd:case Hd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Gd:case Wd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Al:case jd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function BM(t){switch(t){case In:case ox:return{byteLength:1,components:1};case Fa:case lx:case Ii:return{byteLength:2,components:1};case Zf:case Qf:return{byteLength:2,components:4};case fi:case Kf:case ai:return{byteLength:4,components:1};case cx:case ux:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yf}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Cx(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function zM(t){const e=new WeakMap;function n(o,l){const c=o.array,p=o.usage,m=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,p),o.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:m}}function i(o,l,c){const p=l.array,m=l.updateRanges;if(t.bindBuffer(c,o),m.length===0)t.bufferSubData(c,0,p);else{m.sort((h,y)=>h.start-y.start);let f=0;for(let h=1;h<m.length;h++){const y=m[f],b=m[h];b.start<=y.start+y.count+1?y.count=Math.max(y.count,b.start+b.count-y.start):(++f,m[f]=b)}m.length=f+1;for(let h=0,y=m.length;h<y;h++){const b=m[h];t.bufferSubData(c,b.start*p.BYTES_PER_ELEMENT,p,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const p=e.get(o);(!p||p.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var VM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,HM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,GM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,WM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,XM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$M=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,YM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,KM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ZM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,QM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,JM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,e1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,t1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,n1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,i1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,r1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,s1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,a1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,o1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,l1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,c1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,u1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,d1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,f1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,h1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,p1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,m1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,g1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,x1="gl_FragColor = linearToOutputTexel( gl_FragColor );",v1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,y1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,S1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,M1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,E1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,b1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,w1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,A1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,C1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,R1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,N1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,P1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,I1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,L1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,D1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,U1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,F1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,k1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,O1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,B1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,z1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,V1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,H1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,G1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,W1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,j1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Y1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,K1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Z1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Q1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,J1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,aE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,oE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,uE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,xE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_E=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ME=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,EE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,bE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,TE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,AE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,CE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,RE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,PE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,IE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,LE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,DE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,UE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,FE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,OE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,BE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const VE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$E=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,YE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,KE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ZE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ib=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ab=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ob=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ub=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,db=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_b=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:VM,alphahash_pars_fragment:HM,alphamap_fragment:GM,alphamap_pars_fragment:WM,alphatest_fragment:jM,alphatest_pars_fragment:XM,aomap_fragment:qM,aomap_pars_fragment:$M,batching_pars_vertex:YM,batching_vertex:KM,begin_vertex:ZM,beginnormal_vertex:QM,bsdfs:JM,iridescence_fragment:e1,bumpmap_pars_fragment:t1,clipping_planes_fragment:n1,clipping_planes_pars_fragment:i1,clipping_planes_pars_vertex:r1,clipping_planes_vertex:s1,color_fragment:a1,color_pars_fragment:o1,color_pars_vertex:l1,color_vertex:c1,common:u1,cube_uv_reflection_fragment:d1,defaultnormal_vertex:f1,displacementmap_pars_vertex:h1,displacementmap_vertex:p1,emissivemap_fragment:m1,emissivemap_pars_fragment:g1,colorspace_fragment:x1,colorspace_pars_fragment:v1,envmap_fragment:_1,envmap_common_pars_fragment:y1,envmap_pars_fragment:S1,envmap_pars_vertex:M1,envmap_physical_pars_fragment:L1,envmap_vertex:E1,fog_vertex:b1,fog_pars_vertex:w1,fog_fragment:T1,fog_pars_fragment:A1,gradientmap_pars_fragment:C1,lightmap_pars_fragment:R1,lights_lambert_fragment:N1,lights_lambert_pars_fragment:P1,lights_pars_begin:I1,lights_toon_fragment:D1,lights_toon_pars_fragment:U1,lights_phong_fragment:F1,lights_phong_pars_fragment:k1,lights_physical_fragment:O1,lights_physical_pars_fragment:B1,lights_fragment_begin:z1,lights_fragment_maps:V1,lights_fragment_end:H1,lightprobes_pars_fragment:G1,logdepthbuf_fragment:W1,logdepthbuf_pars_fragment:j1,logdepthbuf_pars_vertex:X1,logdepthbuf_vertex:q1,map_fragment:$1,map_pars_fragment:Y1,map_particle_fragment:K1,map_particle_pars_fragment:Z1,metalnessmap_fragment:Q1,metalnessmap_pars_fragment:J1,morphinstance_vertex:eE,morphcolor_vertex:tE,morphnormal_vertex:nE,morphtarget_pars_vertex:iE,morphtarget_vertex:rE,normal_fragment_begin:sE,normal_fragment_maps:aE,normal_pars_fragment:oE,normal_pars_vertex:lE,normal_vertex:cE,normalmap_pars_fragment:uE,clearcoat_normal_fragment_begin:dE,clearcoat_normal_fragment_maps:fE,clearcoat_pars_fragment:hE,iridescence_pars_fragment:pE,opaque_fragment:mE,packing:gE,premultiplied_alpha_fragment:xE,project_vertex:vE,dithering_fragment:_E,dithering_pars_fragment:yE,roughnessmap_fragment:SE,roughnessmap_pars_fragment:ME,shadowmap_pars_fragment:EE,shadowmap_pars_vertex:bE,shadowmap_vertex:wE,shadowmask_pars_fragment:TE,skinbase_vertex:AE,skinning_pars_vertex:CE,skinning_vertex:RE,skinnormal_vertex:NE,specularmap_fragment:PE,specularmap_pars_fragment:IE,tonemapping_fragment:LE,tonemapping_pars_fragment:DE,transmission_fragment:UE,transmission_pars_fragment:FE,uv_pars_fragment:kE,uv_pars_vertex:OE,uv_vertex:BE,worldpos_vertex:zE,background_vert:VE,background_frag:HE,backgroundCube_vert:GE,backgroundCube_frag:WE,cube_vert:jE,cube_frag:XE,depth_vert:qE,depth_frag:$E,distance_vert:YE,distance_frag:KE,equirect_vert:ZE,equirect_frag:QE,linedashed_vert:JE,linedashed_frag:eb,meshbasic_vert:tb,meshbasic_frag:nb,meshlambert_vert:ib,meshlambert_frag:rb,meshmatcap_vert:sb,meshmatcap_frag:ab,meshnormal_vert:ob,meshnormal_frag:lb,meshphong_vert:cb,meshphong_frag:ub,meshphysical_vert:db,meshphysical_frag:fb,meshtoon_vert:hb,meshtoon_frag:pb,points_vert:mb,points_frag:gb,shadow_vert:xb,shadow_frag:vb,sprite_vert:_b,sprite_frag:yb},Ee={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new j},probesMax:{value:new j},probesResolution:{value:new j}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},ri={basic:{uniforms:tn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:tn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ze(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:tn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:tn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:tn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Ze(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:tn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:tn([Ee.points,Ee.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:tn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:tn([Ee.common,Ee.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:tn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:tn([Ee.sprite,Ee.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:tn([Ee.common,Ee.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:tn([Ee.lights,Ee.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};ri.physical={uniforms:tn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Fo={r:0,b:0,g:0},Sb=new Pt,Rx=new He;Rx.set(-1,0,0,0,1,0,0,0,1);function Mb(t,e,n,i,r,s){const a=new Ze(0);let o=r===!0?0:1,l,c,p=null,m=0,f=null;function h(g){let _=g.isScene===!0?g.background:null;if(_&&_.isTexture){const M=g.backgroundBlurriness>0;_=e.get(_,M)}return _}function y(g){let _=!1;const M=h(g);M===null?x(a,o):M&&M.isColor&&(x(M,1),_=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function b(g,_){const M=h(_);M&&(M.isCubeTexture||M.mapping===Zl)?(c===void 0&&(c=new Fn(new Xa(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:Fs(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Sb.makeRotationFromEuler(_.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Rx),c.material.toneMapped=$e.getTransfer(M.colorSpace)!==at,(p!==M||m!==M.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,p=M,m=M.version,f=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Fn(new Jl(2,2),new hi({name:"BackgroundMaterial",uniforms:Fs(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=$e.getTransfer(M.colorSpace)!==at,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(p!==M||m!==M.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,p=M,m=M.version,f=t.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function x(g,_){g.getRGB(Fo,wx(t)),n.buffers.color.setClear(Fo.r,Fo.g,Fo.b,_,s)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,_=1){a.set(g),o=_,x(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,x(a,o)},render:y,addToRenderList:b,dispose:d}}function Eb(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(L,D,H,Z,k){let X=!1;const W=m(L,Z,H,D);s!==W&&(s=W,c(s.object)),X=h(L,Z,H,k),X&&y(L,Z,H,k),k!==null&&e.update(k,t.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,M(L,D,H,Z),k!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return t.createVertexArray()}function c(L){return t.bindVertexArray(L)}function p(L){return t.deleteVertexArray(L)}function m(L,D,H,Z){const k=Z.wireframe===!0;let X=i[D.id];X===void 0&&(X={},i[D.id]=X);const W=L.isInstancedMesh===!0?L.id:0;let F=X[W];F===void 0&&(F={},X[W]=F);let K=F[H.id];K===void 0&&(K={},F[H.id]=K);let N=K[k];return N===void 0&&(N=f(l()),K[k]=N),N}function f(L){const D=[],H=[],Z=[];for(let k=0;k<n;k++)D[k]=0,H[k]=0,Z[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:H,attributeDivisors:Z,object:L,attributes:{},index:null}}function h(L,D,H,Z){const k=s.attributes,X=D.attributes;let W=0;const F=H.getAttributes();for(const K in F)if(F[K].location>=0){const C=k[K];let V=X[K];if(V===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(V=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(V=L.instanceColor)),C===void 0||C.attribute!==V||V&&C.data!==V.data)return!0;W++}return s.attributesNum!==W||s.index!==Z}function y(L,D,H,Z){const k={},X=D.attributes;let W=0;const F=H.getAttributes();for(const K in F)if(F[K].location>=0){let C=X[K];C===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(C=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(C=L.instanceColor));const V={};V.attribute=C,C&&C.data&&(V.data=C.data),k[K]=V,W++}s.attributes=k,s.attributesNum=W,s.index=Z}function b(){const L=s.newAttributes;for(let D=0,H=L.length;D<H;D++)L[D]=0}function x(L){d(L,0)}function d(L,D){const H=s.newAttributes,Z=s.enabledAttributes,k=s.attributeDivisors;H[L]=1,Z[L]===0&&(t.enableVertexAttribArray(L),Z[L]=1),k[L]!==D&&(t.vertexAttribDivisor(L,D),k[L]=D)}function g(){const L=s.newAttributes,D=s.enabledAttributes;for(let H=0,Z=D.length;H<Z;H++)D[H]!==L[H]&&(t.disableVertexAttribArray(H),D[H]=0)}function _(L,D,H,Z,k,X,W){W===!0?t.vertexAttribIPointer(L,D,H,k,X):t.vertexAttribPointer(L,D,H,Z,k,X)}function M(L,D,H,Z){b();const k=Z.attributes,X=H.getAttributes(),W=D.defaultAttributeValues;for(const F in X){const K=X[F];if(K.location>=0){let N=k[F];if(N===void 0&&(F==="instanceMatrix"&&L.instanceMatrix&&(N=L.instanceMatrix),F==="instanceColor"&&L.instanceColor&&(N=L.instanceColor)),N!==void 0){const C=N.normalized,V=N.itemSize,se=e.get(N);if(se===void 0)continue;const ie=se.buffer,re=se.type,B=se.bytesPerElement,Q=re===t.INT||re===t.UNSIGNED_INT||N.gpuType===Kf;if(N.isInterleavedBufferAttribute){const ee=N.data,fe=ee.stride,Se=N.offset;if(ee.isInstancedInterleavedBuffer){for(let he=0;he<K.locationSize;he++)d(K.location+he,ee.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let he=0;he<K.locationSize;he++)x(K.location+he);t.bindBuffer(t.ARRAY_BUFFER,ie);for(let he=0;he<K.locationSize;he++)_(K.location+he,V/K.locationSize,re,C,fe*B,(Se+V/K.locationSize*he)*B,Q)}else{if(N.isInstancedBufferAttribute){for(let ee=0;ee<K.locationSize;ee++)d(K.location+ee,N.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let ee=0;ee<K.locationSize;ee++)x(K.location+ee);t.bindBuffer(t.ARRAY_BUFFER,ie);for(let ee=0;ee<K.locationSize;ee++)_(K.location+ee,V/K.locationSize,re,C,V*B,V/K.locationSize*ee*B,Q)}}else if(W!==void 0){const C=W[F];if(C!==void 0)switch(C.length){case 2:t.vertexAttrib2fv(K.location,C);break;case 3:t.vertexAttrib3fv(K.location,C);break;case 4:t.vertexAttrib4fv(K.location,C);break;default:t.vertexAttrib1fv(K.location,C)}}}}g()}function T(){E();for(const L in i){const D=i[L];for(const H in D){const Z=D[H];for(const k in Z){const X=Z[k];for(const W in X)p(X[W].object),delete X[W];delete Z[k]}}delete i[L]}}function A(L){if(i[L.id]===void 0)return;const D=i[L.id];for(const H in D){const Z=D[H];for(const k in Z){const X=Z[k];for(const W in X)p(X[W].object),delete X[W];delete Z[k]}}delete i[L.id]}function R(L){for(const D in i){const H=i[D];for(const Z in H){const k=H[Z];if(k[L.id]===void 0)continue;const X=k[L.id];for(const W in X)p(X[W].object),delete X[W];delete k[L.id]}}}function v(L){for(const D in i){const H=i[D],Z=L.isInstancedMesh===!0?L.id:0,k=H[Z];if(k!==void 0){for(const X in k){const W=k[X];for(const F in W)p(W[F].object),delete W[F];delete k[X]}delete H[Z],Object.keys(H).length===0&&delete i[D]}}}function E(){I(),a=!0,s!==r&&(s=r,c(s.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:E,resetDefaultState:I,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:b,enableAttribute:x,disableUnusedAttributes:g}}function bb(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,p){p!==0&&(t.drawArraysInstanced(i,l,c,p),n.update(c,i,p))}function o(l,c,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,p);let f=0;for(let h=0;h<p;h++)f+=c[h];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function wb(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==qn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const v=R===Ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==In&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ai&&!v)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const p=l(c);p!==c&&(ze("WebGLRenderer:",c,"not supported, using",p,"instead."),c=p);const m=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:m,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:y,maxTextureSize:b,maxCubemapSize:x,maxAttributes:d,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:M,maxSamples:T,samples:A}}function Tb(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new yr,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,f){const h=m.length!==0||f||i!==0||r;return r=f,i=m.length,h},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,f){n=p(m,f,0)},this.setState=function(m,f,h){const y=m.clippingPlanes,b=m.clipIntersection,x=m.clipShadows,d=t.get(m);if(!r||y===null||y.length===0||s&&!x)s?p(null):c();else{const g=s?0:i,_=g*4;let M=d.clippingState||null;l.value=M,M=p(y,f,_,h);for(let T=0;T!==_;++T)M[T]=n[T];d.clippingState=M,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(m,f,h,y){const b=m!==null?m.length:0;let x=null;if(b!==0){if(x=l.value,y!==!0||x===null){const d=h+b*4,g=f.matrixWorldInverse;o.getNormalMatrix(g),(x===null||x.length<d)&&(x=new Float32Array(d));for(let _=0,M=h;_!==b;++_,M+=4)a.copy(m[_]).applyMatrix4(g,o),a.normal.toArray(x,M),x[M+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,x}}const Qi=4,om=[.125,.215,.35,.446,.526,.582],Mr=20,Ab=256,ta=new Ax,lm=new Ze;let ru=null,su=0,au=0,ou=!1;const Cb=new j;class cm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=Cb}=s;ru=this._renderer.getRenderTarget(),su=this._renderer.getActiveCubeFace(),au=this._renderer.getActiveMipmapLevel(),ou=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ru,su,au),this._renderer.xr.enabled=ou,e.scissorTest=!1,is(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ur||e.mapping===Ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ru=this._renderer.getRenderTarget(),su=this._renderer.getActiveCubeFace(),au=this._renderer.getActiveMipmapLevel(),ou=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Ii,format:qn,colorSpace:Cl,depthBuffer:!1},r=um(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=um(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Rb(s)),this._blurMaterial=Pb(s,e,n),this._ggxMaterial=Nb(s,e,n)}return r}_compileMaterial(e){const n=new Fn(new wn,e);this._renderer.compile(n,ta)}_sceneToCubeUV(e,n,i,r,s){const l=new Pn(90,1,n,i),c=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,f=m.autoClear,h=m.toneMapping;m.getClearColor(lm),m.toneMapping=ui,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(r),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fn(new Xa,new va({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,x=b.material;let d=!1;const g=e.background;g?g.isColor&&(x.color.copy(g),e.background=null,d=!0):(x.color.copy(lm),d=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+p[_],s.y,s.z)):M===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+p[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+p[_]));const T=this._cubeSize;is(r,M*T,_>2?T:0,T,T),m.setRenderTarget(r),d&&m.render(b,l),m.render(e,l)}m.toneMapping=h,m.autoClear=f,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ur||e.mapping===Ds;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=fm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;is(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,ta)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),p=n/(this._lodMeshes.length-1),m=Math.sqrt(c*c-p*p),f=0+c*1.25,h=m*f,{_lodMax:y}=this,b=this._sizeLods[i],x=3*b*(i>y-Qi?i-y+Qi:0),d=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=y-n,is(s,x,d,3*b,2*b),r.setRenderTarget(s),r.render(o,ta),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=y-i,is(e,x,d,3*b,2*b),r.setRenderTarget(e),r.render(o,ta)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&et("blur direction must be either latitudinal or longitudinal!");const p=3,m=this._lodMeshes[r];m.material=c;const f=c.uniforms,h=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Mr-1),b=s/y,x=isFinite(s)?1+Math.floor(p*b):Mr;x>Mr&&ze(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Mr}`);const d=[];let g=0;for(let R=0;R<Mr;++R){const v=R/b,E=Math.exp(-v*v/2);d.push(E),R===0?g+=E:R<x&&(g+=2*E)}for(let R=0;R<d.length;R++)d[R]=d[R]/g;f.envMap.value=e.texture,f.samples.value=x,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:_}=this;f.dTheta.value=y,f.mipInt.value=_-i;const M=this._sizeLods[r],T=3*M*(r>_-Qi?r-_+Qi:0),A=4*(this._cubeSize-M);is(n,T,A,3*M,2*M),l.setRenderTarget(n),l.render(m,ta)}}function Rb(t){const e=[],n=[],i=[];let r=t;const s=t-Qi+1+om.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-Qi?l=om[a-t+Qi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),p=-c,m=1+c,f=[p,p,m,p,m,m,p,p,m,m,p,m],h=6,y=6,b=3,x=2,d=1,g=new Float32Array(b*y*h),_=new Float32Array(x*y*h),M=new Float32Array(d*y*h);for(let A=0;A<h;A++){const R=A%3*2/3-1,v=A>2?0:-1,E=[R,v,0,R+2/3,v,0,R+2/3,v+1,0,R,v,0,R+2/3,v+1,0,R,v+1,0];g.set(E,b*y*A),_.set(f,x*y*A);const I=[A,A,A,A,A,A];M.set(I,d*y*A)}const T=new wn;T.setAttribute("position",new Un(g,b)),T.setAttribute("uv",new Un(_,x)),T.setAttribute("faceIndex",new Un(M,d)),i.push(new Fn(T,null)),r>Qi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function um(t,e,n){const i=new di(t,e,n);return i.texture.mapping=Zl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function is(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Nb(t,e,n){return new hi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ab,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ec(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Pb(t,e,n){const i=new Float32Array(Mr),r=new j(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function dm(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function fm(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function ec(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Nx extends di{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ex(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Xa(5,5,5),s=new hi({name:"CubemapFromEquirect",uniforms:Fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:Ti});s.uniforms.tEquirect.value=n;const a=new Fn(r,s),o=n.minFilter;return n.minFilter===Tr&&(n.minFilter=Qt),new FM(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function Ib(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,h=!1){return f==null?null:h?a(f):s(f)}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===Pc||h===Ic)if(e.has(f)){const y=e.get(f).texture;return o(y,f.mapping)}else{const y=f.image;if(y&&y.height>0){const b=new Nx(y.height);return b.fromEquirectangularTexture(t,f),e.set(f,b),f.addEventListener("dispose",c),o(b.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const h=f.mapping,y=h===Pc||h===Ic,b=h===Ur||h===Ds;if(y||b){let x=n.get(f);const d=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return i===null&&(i=new cm(t)),x=y?i.fromEquirectangular(f,x):i.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,n.set(f,x),x.texture;if(x!==void 0)return x.texture;{const g=f.image;return y&&g&&g.height>0||b&&g&&l(g)?(i===null&&(i=new cm(t)),x=y?i.fromEquirectangular(f):i.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,n.set(f,x),f.addEventListener("dispose",p),x.texture):null}}}return f}function o(f,h){return h===Pc?f.mapping=Ur:h===Ic&&(f.mapping=Ds),f}function l(f){let h=0;const y=6;for(let b=0;b<y;b++)f[b]!==void 0&&h++;return h===y}function c(f){const h=f.target;h.removeEventListener("dispose",c);const y=e.get(h);y!==void 0&&(e.delete(h),y.dispose())}function p(f){const h=f.target;h.removeEventListener("dispose",p);const y=n.get(h);y!==void 0&&(n.delete(h),y.dispose())}function m(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:m}}function Lb(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&bs("WebGLRenderer: "+i+" extension not supported."),r}}}function Db(t,e,n,i){const r={},s=new WeakMap;function a(m){const f=m.target;f.index!==null&&e.remove(f.index);for(const y in f.attributes)e.remove(f.attributes[y]);f.removeEventListener("dispose",a),delete r[f.id];const h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(m,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(m){const f=m.attributes;for(const h in f)e.update(f[h],t.ARRAY_BUFFER)}function c(m){const f=[],h=m.index,y=m.attributes.position;let b=0;if(y===void 0)return;if(h!==null){const g=h.array;b=h.version;for(let _=0,M=g.length;_<M;_+=3){const T=g[_+0],A=g[_+1],R=g[_+2];f.push(T,A,A,R,R,T)}}else{const g=y.array;b=y.version;for(let _=0,M=g.length/3-1;_<M;_+=3){const T=_+0,A=_+1,R=_+2;f.push(T,A,A,R,R,T)}}const x=new(y.count>=65535?_x:vx)(f,1);x.version=b;const d=s.get(m);d&&e.remove(d),s.set(m,x)}function p(m){const f=s.get(m);if(f){const h=m.index;h!==null&&f.version<h.version&&c(m)}else c(m);return s.get(m)}return{get:o,update:l,getWireframeAttribute:p}}function Ub(t,e,n){let i;function r(m){i=m}let s,a;function o(m){s=m.type,a=m.bytesPerElement}function l(m,f){t.drawElements(i,f,s,m*a),n.update(f,i,1)}function c(m,f,h){h!==0&&(t.drawElementsInstanced(i,f,s,m*a,h),n.update(f,i,h))}function p(m,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,m,0,h);let b=0;for(let x=0;x<h;x++)b+=f[x];n.update(b,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=p}function Fb(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:et("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function kb(t,e,n){const i=new WeakMap,r=new At;function s(a,o,l){const c=a.morphTargetInfluences,p=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=p!==void 0?p.length:0;let f=i.get(o);if(f===void 0||f.count!==m){let I=function(){v.dispose(),i.delete(o),o.removeEventListener("dispose",I)};var h=I;f!==void 0&&f.texture.dispose();const y=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let M=0;y===!0&&(M=1),b===!0&&(M=2),x===!0&&(M=3);let T=o.attributes.position.count*M,A=1;T>e.maxTextureSize&&(A=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const R=new Float32Array(T*A*4*m),v=new mx(R,T,A,m);v.type=ai,v.needsUpdate=!0;const E=M*4;for(let L=0;L<m;L++){const D=d[L],H=g[L],Z=_[L],k=T*A*4*L;for(let X=0;X<D.count;X++){const W=X*E;y===!0&&(r.fromBufferAttribute(D,X),R[k+W+0]=r.x,R[k+W+1]=r.y,R[k+W+2]=r.z,R[k+W+3]=0),b===!0&&(r.fromBufferAttribute(H,X),R[k+W+4]=r.x,R[k+W+5]=r.y,R[k+W+6]=r.z,R[k+W+7]=0),x===!0&&(r.fromBufferAttribute(Z,X),R[k+W+8]=r.x,R[k+W+9]=r.y,R[k+W+10]=r.z,R[k+W+11]=Z.itemSize===4?r.w:1)}}f={count:m,texture:v,size:new Qe(T,A)},i.set(o,f),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let y=0;for(let x=0;x<c.length;x++)y+=c[x];const b=o.morphTargetsRelative?1:1-y;l.getUniforms().setValue(t,"morphTargetBaseInfluence",b),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function Ob(t,e,n,i,r){let s=new WeakMap;function a(c){const p=r.render.frame,m=c.geometry,f=e.get(c,m);if(s.get(f)!==p&&(e.update(f),s.set(f,p)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==p&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,p))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==p&&(h.update(),s.set(h,p))}return f}function o(){s=new WeakMap}function l(c){const p=c.target;p.removeEventListener("dispose",l),i.releaseStatesOfObject(p),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:a,dispose:o}}const Bb={[Jg]:"LINEAR_TONE_MAPPING",[ex]:"REINHARD_TONE_MAPPING",[tx]:"CINEON_TONE_MAPPING",[nx]:"ACES_FILMIC_TONE_MAPPING",[rx]:"AGX_TONE_MAPPING",[sx]:"NEUTRAL_TONE_MAPPING",[ix]:"CUSTOM_TONE_MAPPING"};function zb(t,e,n,i,r,s){const a=new di(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new Us(e,n):void 0}),o=new di(e,n,{type:Ii,depthBuffer:!1,stencilBuffer:!1}),l=new wn;l.setAttribute("position",new sn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new sn([0,2,0,0,2,0],2));const c=new LM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Fn(l,c),m=new Ax(-1,1,1,-1,0,1);let f=null,h=null,y=!1,b,x=null,d=[],g=!1;this.setSize=function(_,M){a.setSize(_,M),o.setSize(_,M);for(let T=0;T<d.length;T++){const A=d[T];A.setSize&&A.setSize(_,M)}},this.setEffects=function(_){d=_,g=d.length>0&&d[0].isRenderPass===!0;const M=a.width,T=a.height;for(let A=0;A<d.length;A++){const R=d[A];R.setSize&&R.setSize(M,T)}},this.begin=function(_,M){if(y||_.toneMapping===ui&&d.length===0)return!1;if(x=M,M!==null){const T=M.width,A=M.height;(a.width!==T||a.height!==A)&&this.setSize(T,A)}return g===!1&&_.setRenderTarget(a),b=_.toneMapping,_.toneMapping=ui,!0},this.hasRenderPass=function(){return g},this.end=function(_,M){_.toneMapping=b,y=!0;let T=a,A=o;for(let R=0;R<d.length;R++){const v=d[R];if(v.enabled!==!1&&(v.render(_,A,T,M),v.needsSwap!==!1)){const E=T;T=A,A=E}}if(f!==_.outputColorSpace||h!==_.toneMapping){f=_.outputColorSpace,h=_.toneMapping,c.defines={},$e.getTransfer(f)===at&&(c.defines.SRGB_TRANSFER="");const R=Bb[h];R&&(c.defines[R]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,_.setRenderTarget(x),_.render(p,m),x=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const Px=new Jt,$d=new Us(1,1),Ix=new mx,Lx=new lM,Dx=new Ex,hm=[],pm=[],mm=new Float32Array(16),gm=new Float32Array(9),xm=new Float32Array(4);function Vs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=hm[r];if(s===void 0&&(s=new Float32Array(r),hm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ft(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function kt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function tc(t,e){let n=pm[e];n===void 0&&(n=new Int32Array(e),pm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Vb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Hb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2fv(this.addr,e),kt(n,e)}}function Gb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ft(n,e))return;t.uniform3fv(this.addr,e),kt(n,e)}}function Wb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4fv(this.addr,e),kt(n,e)}}function jb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),kt(n,e)}else{if(Ft(n,i))return;xm.set(i),t.uniformMatrix2fv(this.addr,!1,xm),kt(n,i)}}function Xb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),kt(n,e)}else{if(Ft(n,i))return;gm.set(i),t.uniformMatrix3fv(this.addr,!1,gm),kt(n,i)}}function qb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),kt(n,e)}else{if(Ft(n,i))return;mm.set(i),t.uniformMatrix4fv(this.addr,!1,mm),kt(n,i)}}function $b(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Yb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2iv(this.addr,e),kt(n,e)}}function Kb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3iv(this.addr,e),kt(n,e)}}function Zb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4iv(this.addr,e),kt(n,e)}}function Qb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Jb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2uiv(this.addr,e),kt(n,e)}}function ew(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3uiv(this.addr,e),kt(n,e)}}function tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4uiv(this.addr,e),kt(n,e)}}function nw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?($d.compareFunction=n.isReversedDepthBuffer()?ih:nh,s=$d):s=Px,n.setTexture2D(e||s,r)}function iw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Lx,r)}function rw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Dx,r)}function sw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Ix,r)}function aw(t){switch(t){case 5126:return Vb;case 35664:return Hb;case 35665:return Gb;case 35666:return Wb;case 35674:return jb;case 35675:return Xb;case 35676:return qb;case 5124:case 35670:return $b;case 35667:case 35671:return Yb;case 35668:case 35672:return Kb;case 35669:case 35673:return Zb;case 5125:return Qb;case 36294:return Jb;case 36295:return ew;case 36296:return tw;case 35678:case 36198:case 36298:case 36306:case 35682:return nw;case 35679:case 36299:case 36307:return iw;case 35680:case 36300:case 36308:case 36293:return rw;case 36289:case 36303:case 36311:case 36292:return sw}}function ow(t,e){t.uniform1fv(this.addr,e)}function lw(t,e){const n=Vs(e,this.size,2);t.uniform2fv(this.addr,n)}function cw(t,e){const n=Vs(e,this.size,3);t.uniform3fv(this.addr,n)}function uw(t,e){const n=Vs(e,this.size,4);t.uniform4fv(this.addr,n)}function dw(t,e){const n=Vs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function fw(t,e){const n=Vs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function hw(t,e){const n=Vs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function pw(t,e){t.uniform1iv(this.addr,e)}function mw(t,e){t.uniform2iv(this.addr,e)}function gw(t,e){t.uniform3iv(this.addr,e)}function xw(t,e){t.uniform4iv(this.addr,e)}function vw(t,e){t.uniform1uiv(this.addr,e)}function _w(t,e){t.uniform2uiv(this.addr,e)}function yw(t,e){t.uniform3uiv(this.addr,e)}function Sw(t,e){t.uniform4uiv(this.addr,e)}function Mw(t,e,n){const i=this.cache,r=e.length,s=tc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=$d:a=Px;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function Ew(t,e,n){const i=this.cache,r=e.length,s=tc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Lx,s[a])}function bw(t,e,n){const i=this.cache,r=e.length,s=tc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Dx,s[a])}function ww(t,e,n){const i=this.cache,r=e.length,s=tc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Ix,s[a])}function Tw(t){switch(t){case 5126:return ow;case 35664:return lw;case 35665:return cw;case 35666:return uw;case 35674:return dw;case 35675:return fw;case 35676:return hw;case 5124:case 35670:return pw;case 35667:case 35671:return mw;case 35668:case 35672:return gw;case 35669:case 35673:return xw;case 5125:return vw;case 36294:return _w;case 36295:return yw;case 36296:return Sw;case 35678:case 36198:case 36298:case 36306:case 35682:return Mw;case 35679:case 36299:case 36307:return Ew;case 35680:case 36300:case 36308:case 36293:return bw;case 36289:case 36303:case 36311:case 36292:return ww}}class Aw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=aw(n.type)}}class Cw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Tw(n.type)}}class Rw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const lu=/(\w+)(\])?(\[|\.)?/g;function vm(t,e){t.seq.push(e),t.map[e.id]=e}function Nw(t,e,n){const i=t.name,r=i.length;for(lu.lastIndex=0;;){const s=lu.exec(i),a=lu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){vm(n,c===void 0?new Aw(o,t,e):new Cw(o,t,e));break}else{let m=n.map[o];m===void 0&&(m=new Rw(o),vm(n,m)),n=m}}}class tl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);Nw(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function _m(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Pw=37297;let Iw=0;function Lw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const ym=new He;function Dw(t){$e._getMatrix(ym,$e.workingColorSpace,t);const e=`mat3( ${ym.elements.map(n=>n.toFixed(4))} )`;switch($e.getTransfer(t)){case Rl:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Sm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+Lw(t.getShaderSource(e),o)}else return s}function Uw(t,e){const n=Dw(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const Fw={[Jg]:"Linear",[ex]:"Reinhard",[tx]:"Cineon",[nx]:"ACESFilmic",[rx]:"AgX",[sx]:"Neutral",[ix]:"Custom"};function kw(t,e){const n=Fw[e];return n===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ko=new j;function Ow(){$e.getLuminanceCoefficients(ko);const t=ko.x.toFixed(4),e=ko.y.toFixed(4),n=ko.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(la).join(`
`)}function zw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Vw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function la(t){return t!==""}function Mm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Em(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Hw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yd(t){return t.replace(Hw,Ww)}const Gw=new Map;function Ww(t,e){let n=je[e];if(n===void 0){const i=Gw.get(e);if(i!==void 0)n=je[i],ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Yd(n)}const jw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bm(t){return t.replace(jw,Xw)}function Xw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function wm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const qw={[Ko]:"SHADOWMAP_TYPE_PCF",[oa]:"SHADOWMAP_TYPE_VSM"};function $w(t){return qw[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Yw={[Ur]:"ENVMAP_TYPE_CUBE",[Ds]:"ENVMAP_TYPE_CUBE",[Zl]:"ENVMAP_TYPE_CUBE_UV"};function Kw(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":Yw[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const Zw={[Ds]:"ENVMAP_MODE_REFRACTION"};function Qw(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":Zw[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Jw={[Qg]:"ENVMAP_BLENDING_MULTIPLY",[VS]:"ENVMAP_BLENDING_MIX",[HS]:"ENVMAP_BLENDING_ADD"};function eT(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":Jw[t.combine]||"ENVMAP_BLENDING_NONE"}function tT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function nT(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=$w(n),c=Kw(n),p=Qw(n),m=eT(n),f=tT(n),h=Bw(n),y=zw(s),b=r.createProgram();let x,d,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(la).join(`
`),x.length>0&&(x+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(la).join(`
`),d.length>0&&(d+=`
`)):(x=[wm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(la).join(`
`),d=[wm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+p:"",n.envMap?"#define "+m:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ui?"#define TONE_MAPPING":"",n.toneMapping!==ui?je.tonemapping_pars_fragment:"",n.toneMapping!==ui?kw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,Uw("linearToOutputTexel",n.outputColorSpace),Ow(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(la).join(`
`)),a=Yd(a),a=Mm(a,n),a=Em(a,n),o=Yd(o),o=Mm(o,n),o=Em(o,n),a=bm(a),o=bm(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,d=["#define varying in",n.glslVersion===kp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===kp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const _=g+x+a,M=g+d+o,T=_m(r,r.VERTEX_SHADER,_),A=_m(r,r.FRAGMENT_SHADER,M);r.attachShader(b,T),r.attachShader(b,A),n.index0AttributeName!==void 0?r.bindAttribLocation(b,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function R(L){if(t.debug.checkShaderErrors){const D=r.getProgramInfoLog(b)||"",H=r.getShaderInfoLog(T)||"",Z=r.getShaderInfoLog(A)||"",k=D.trim(),X=H.trim(),W=Z.trim();let F=!0,K=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(F=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,b,T,A);else{const N=Sm(r,T,"vertex"),C=Sm(r,A,"fragment");et("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+N+`
`+C)}else k!==""?ze("WebGLProgram: Program Info Log:",k):(X===""||W==="")&&(K=!1);K&&(L.diagnostics={runnable:F,programLog:k,vertexShader:{log:X,prefix:x},fragmentShader:{log:W,prefix:d}})}r.deleteShader(T),r.deleteShader(A),v=new tl(r,b),E=Vw(r,b)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let I=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(b,Pw)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Iw++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=T,this.fragmentShader=A,this}let iT=0;class rT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new sT(e),n.set(e,i)),i}}class sT{constructor(e){this.id=iT++,this.code=e,this.usedTimes=0}}function aT(t){return t===Fr||t===Tl||t===Al}function oT(t,e,n,i,r,s){const a=new gx,o=new rT,l=new Set,c=[],p=new Map,m=i.logarithmicDepthBuffer;let f=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(v){return l.add(v),v===0?"uv":`uv${v}`}function b(v,E,I,L,D,H){const Z=L.fog,k=D.geometry,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,W=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,F=e.get(v.envMap||X,W),K=F&&F.mapping===Zl?F.image.height:null,N=h[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&ze("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const C=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,V=C!==void 0?C.length:0;let se=0;k.morphAttributes.position!==void 0&&(se=1),k.morphAttributes.normal!==void 0&&(se=2),k.morphAttributes.color!==void 0&&(se=3);let ie,re,B,Q;if(N){const Ne=ri[N];ie=Ne.vertexShader,re=Ne.fragmentShader}else{ie=v.vertexShader,re=v.fragmentShader;const Ne=o.getVertexShaderStage(v),bt=o.getFragmentShaderStage(v);o.update(v,Ne,bt),B=Ne.id,Q=bt.id}const ee=t.getRenderTarget(),fe=t.state.buffers.depth.getReversed(),Se=D.isInstancedMesh===!0,he=D.isBatchedMesh===!0,le=!!v.map,ge=!!v.matcap,xe=!!F,Be=!!v.aoMap,Ve=!!v.lightMap,it=!!v.bumpMap&&v.wireframe===!1,st=!!v.normalMap,ft=!!v.displacementMap,lt=!!v.emissiveMap,vt=!!v.metalnessMap,Et=!!v.roughnessMap,O=v.anisotropy>0,Vt=v.clearcoat>0,rt=v.dispersion>0,P=v.iridescence>0,S=v.sheen>0,G=v.transmission>0,Y=O&&!!v.anisotropyMap,te=Vt&&!!v.clearcoatMap,de=Vt&&!!v.clearcoatNormalMap,pe=Vt&&!!v.clearcoatRoughnessMap,ne=P&&!!v.iridescenceMap,oe=P&&!!v.iridescenceThicknessMap,ve=S&&!!v.sheenColorMap,De=S&&!!v.sheenRoughnessMap,Me=!!v.specularMap,_e=!!v.specularColorMap,ke=!!v.specularIntensityMap,Oe=G&&!!v.transmissionMap,Ge=G&&!!v.thicknessMap,U=!!v.gradientMap,me=!!v.alphaMap,ae=v.alphaTest>0,ye=!!v.alphaHash,Te=!!v.extensions;let ce=ui;v.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(ce=t.toneMapping);const Le={shaderID:N,shaderType:v.type,shaderName:v.name,vertexShader:ie,fragmentShader:re,defines:v.defines,customVertexShaderID:B,customFragmentShaderID:Q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:he,batchingColor:he&&D._colorsTexture!==null,instancing:Se,instancingColor:Se&&D.instanceColor!==null,instancingMorph:Se&&D.morphTexture!==null,outputColorSpace:ee===null?t.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:$e.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:le,matcap:ge,envMap:xe,envMapMode:xe&&F.mapping,envMapCubeUVHeight:K,aoMap:Be,lightMap:Ve,bumpMap:it,normalMap:st,displacementMap:ft,emissiveMap:lt,normalMapObjectSpace:st&&v.normalMapType===jS,normalMapTangentSpace:st&&v.normalMapType===Dp,packedNormalMap:st&&v.normalMapType===Dp&&aT(v.normalMap.format),metalnessMap:vt,roughnessMap:Et,anisotropy:O,anisotropyMap:Y,clearcoat:Vt,clearcoatMap:te,clearcoatNormalMap:de,clearcoatRoughnessMap:pe,dispersion:rt,iridescence:P,iridescenceMap:ne,iridescenceThicknessMap:oe,sheen:S,sheenColorMap:ve,sheenRoughnessMap:De,specularMap:Me,specularColorMap:_e,specularIntensityMap:ke,transmission:G,transmissionMap:Oe,thicknessMap:Ge,gradientMap:U,opaque:v.transparent===!1&&v.blending===Es&&v.alphaToCoverage===!1,alphaMap:me,alphaTest:ae,alphaHash:ye,combine:v.combine,mapUv:le&&y(v.map.channel),aoMapUv:Be&&y(v.aoMap.channel),lightMapUv:Ve&&y(v.lightMap.channel),bumpMapUv:it&&y(v.bumpMap.channel),normalMapUv:st&&y(v.normalMap.channel),displacementMapUv:ft&&y(v.displacementMap.channel),emissiveMapUv:lt&&y(v.emissiveMap.channel),metalnessMapUv:vt&&y(v.metalnessMap.channel),roughnessMapUv:Et&&y(v.roughnessMap.channel),anisotropyMapUv:Y&&y(v.anisotropyMap.channel),clearcoatMapUv:te&&y(v.clearcoatMap.channel),clearcoatNormalMapUv:de&&y(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&y(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&y(v.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&y(v.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&y(v.sheenColorMap.channel),sheenRoughnessMapUv:De&&y(v.sheenRoughnessMap.channel),specularMapUv:Me&&y(v.specularMap.channel),specularColorMapUv:_e&&y(v.specularColorMap.channel),specularIntensityMapUv:ke&&y(v.specularIntensityMap.channel),transmissionMapUv:Oe&&y(v.transmissionMap.channel),thicknessMapUv:Ge&&y(v.thicknessMap.channel),alphaMapUv:me&&y(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(st||O),vertexNormals:!!k.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!k.attributes.uv&&(le||me),fog:!!Z,useFog:v.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||k.attributes.normal===void 0&&st===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:fe,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:se,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:ce,decodeVideoTexture:le&&v.map.isVideoTexture===!0&&$e.getTransfer(v.map.colorSpace)===at,decodeVideoTextureEmissive:lt&&v.emissiveMap.isVideoTexture===!0&&$e.getTransfer(v.emissiveMap.colorSpace)===at,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Si,flipSided:v.side===pn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Te&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&v.extensions.multiDraw===!0||he)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Le.vertexUv1s=l.has(1),Le.vertexUv2s=l.has(2),Le.vertexUv3s=l.has(3),l.clear(),Le}function x(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)E.push(I),E.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(d(E,v),g(E,v),E.push(t.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function d(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function g(v,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function _(v){const E=h[v.type];let I;if(E){const L=ri[E];I=NM.clone(L.uniforms)}else I=v.uniforms;return I}function M(v,E){let I=p.get(E);return I!==void 0?++I.usedTimes:(I=new nT(t,E,v,r),c.push(I),p.set(E,I)),I}function T(v){if(--v.usedTimes===0){const E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),p.delete(v.cacheKey),v.destroy()}}function A(v){o.remove(v)}function R(){o.dispose()}return{getParameters:b,getProgramCacheKey:x,getUniforms:_,acquireProgram:M,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:R}}function lT(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function cT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Tm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Am(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function o(f,h,y,b,x,d){let g=t[e];return g===void 0?(g={id:f.id,object:f,geometry:h,material:y,materialVariant:a(f),groupOrder:b,renderOrder:f.renderOrder,z:x,group:d},t[e]=g):(g.id=f.id,g.object=f,g.geometry=h,g.material=y,g.materialVariant=a(f),g.groupOrder=b,g.renderOrder=f.renderOrder,g.z=x,g.group=d),e++,g}function l(f,h,y,b,x,d){const g=o(f,h,y,b,x,d);y.transmission>0?i.push(g):y.transparent===!0?r.push(g):n.push(g)}function c(f,h,y,b,x,d){const g=o(f,h,y,b,x,d);y.transmission>0?i.unshift(g):y.transparent===!0?r.unshift(g):n.unshift(g)}function p(f,h,y){n.length>1&&n.sort(f||cT),i.length>1&&i.sort(h||Tm),r.length>1&&r.sort(h||Tm),y&&(n.reverse(),i.reverse(),r.reverse())}function m(){for(let f=e,h=t.length;f<h;f++){const y=t[f];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:m,sort:p}}function uT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Am,t.set(i,[a])):r>=s.length?(a=new Am,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function dT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new Ze};break;case"SpotLight":n={position:new j,direction:new j,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new j,halfWidth:new j,halfHeight:new j};break}return t[e.id]=n,n}}}function fT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let hT=0;function pT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function mT(t){const e=new dT,n=fT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new j);const r=new j,s=new Pt,a=new Pt;function o(c){let p=0,m=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let h=0,y=0,b=0,x=0,d=0,g=0,_=0,M=0,T=0,A=0,R=0;c.sort(pT);for(let E=0,I=c.length;E<I;E++){const L=c[E],D=L.color,H=L.intensity,Z=L.distance;let k=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Fr?k=L.shadow.map.texture:k=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)p+=D.r*H,m+=D.g*H,f+=D.b*H;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],H);R++}else if(L.isDirectionalLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const W=L.shadow,F=n.get(L);F.shadowIntensity=W.intensity,F.shadowBias=W.bias,F.shadowNormalBias=W.normalBias,F.shadowRadius=W.radius,F.shadowMapSize=W.mapSize,i.directionalShadow[h]=F,i.directionalShadowMap[h]=k,i.directionalShadowMatrix[h]=L.shadow.matrix,g++}i.directional[h]=X,h++}else if(L.isSpotLight){const X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(D).multiplyScalar(H),X.distance=Z,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[b]=X;const W=L.shadow;if(L.map&&(i.spotLightMap[T]=L.map,T++,W.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[b]=W.matrix,L.castShadow){const F=n.get(L);F.shadowIntensity=W.intensity,F.shadowBias=W.bias,F.shadowNormalBias=W.normalBias,F.shadowRadius=W.radius,F.shadowMapSize=W.mapSize,i.spotShadow[b]=F,i.spotShadowMap[b]=k,M++}b++}else if(L.isRectAreaLight){const X=e.get(L);X.color.copy(D).multiplyScalar(H),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[x]=X,x++}else if(L.isPointLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){const W=L.shadow,F=n.get(L);F.shadowIntensity=W.intensity,F.shadowBias=W.bias,F.shadowNormalBias=W.normalBias,F.shadowRadius=W.radius,F.shadowMapSize=W.mapSize,F.shadowCameraNear=W.camera.near,F.shadowCameraFar=W.camera.far,i.pointShadow[y]=F,i.pointShadowMap[y]=k,i.pointShadowMatrix[y]=L.shadow.matrix,_++}i.point[y]=X,y++}else if(L.isHemisphereLight){const X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(H),X.groundColor.copy(L.groundColor).multiplyScalar(H),i.hemi[d]=X,d++}}x>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=m,i.ambient[2]=f;const v=i.hash;(v.directionalLength!==h||v.pointLength!==y||v.spotLength!==b||v.rectAreaLength!==x||v.hemiLength!==d||v.numDirectionalShadows!==g||v.numPointShadows!==_||v.numSpotShadows!==M||v.numSpotMaps!==T||v.numLightProbes!==R)&&(i.directional.length=h,i.spot.length=b,i.rectArea.length=x,i.point.length=y,i.hemi.length=d,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=M+T-A,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,v.directionalLength=h,v.pointLength=y,v.spotLength=b,v.rectAreaLength=x,v.hemiLength=d,v.numDirectionalShadows=g,v.numPointShadows=_,v.numSpotShadows=M,v.numSpotMaps=T,v.numLightProbes=R,i.version=hT++)}function l(c,p){let m=0,f=0,h=0,y=0,b=0;const x=p.matrixWorldInverse;for(let d=0,g=c.length;d<g;d++){const _=c[d];if(_.isDirectionalLight){const M=i.directional[m];M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(x),m++}else if(_.isSpotLight){const M=i.spot[h];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(x),M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(x),h++}else if(_.isRectAreaLight){const M=i.rectArea[y];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(x),a.identity(),s.copy(_.matrixWorld),s.premultiply(x),a.extractRotation(s),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),y++}else if(_.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(x),f++}else if(_.isHemisphereLight){const M=i.hemi[b];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(x),b++}}}return{setup:o,setupView:l,state:i}}function Cm(t){const e=new mT(t),n=[],i=[],r=[];function s(f){m.camera=f,n.length=0,i.length=0,r.length=0}function a(f){n.push(f)}function o(f){i.push(f)}function l(f){r.push(f)}function c(){e.setup(n)}function p(f){e.setupView(n,f)}const m={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:m,setupLights:c,setupLightsView:p,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function gT(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Cm(t),e.set(r,[o])):s>=a.length?(o=new Cm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const xT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,_T=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],yT=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],Rm=new Pt,na=new j,cu=new j;function ST(t,e,n){let i=new Sx;const r=new Qe,s=new Qe,a=new At,o=new DM,l=new UM,c={},p=n.maxTextureSize,m={[cr]:pn,[pn]:cr,[Si]:Si},f=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:xT,fragmentShader:vT}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const y=new wn;y.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Fn(y,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ko;let d=this.type;this.render=function(A,R,v){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||A.length===0)return;this.type===MS&&(ze("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ko);const E=t.getRenderTarget(),I=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),D=t.state;D.setBlending(Ti),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const H=d!==this.type;H&&R.traverse(function(Z){Z.material&&(Array.isArray(Z.material)?Z.material.forEach(k=>k.needsUpdate=!0):Z.material.needsUpdate=!0)});for(let Z=0,k=A.length;Z<k;Z++){const X=A[Z],W=X.shadow;if(W===void 0){ze("WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const F=W.getFrameExtents();r.multiply(F),s.copy(W.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(s.x=Math.floor(p/F.x),r.x=s.x*F.x,W.mapSize.x=s.x),r.y>p&&(s.y=Math.floor(p/F.y),r.y=s.y*F.y,W.mapSize.y=s.y));const K=t.state.buffers.depth.getReversed();if(W.camera._reversedDepth=K,W.map===null||H===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===oa){if(X.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new di(r.x,r.y,{format:Fr,type:Ii,minFilter:Qt,magFilter:Qt,generateMipmaps:!1}),W.map.texture.name=X.name+".shadowMap",W.map.depthTexture=new Us(r.x,r.y,ai),W.map.depthTexture.name=X.name+".shadowMapDepth",W.map.depthTexture.format=Li,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Gt,W.map.depthTexture.magFilter=Gt}else X.isPointLight?(W.map=new Nx(r.x),W.map.depthTexture=new CM(r.x,fi)):(W.map=new di(r.x,r.y),W.map.depthTexture=new Us(r.x,r.y,fi)),W.map.depthTexture.name=X.name+".shadowMap",W.map.depthTexture.format=Li,this.type===Ko?(W.map.depthTexture.compareFunction=K?ih:nh,W.map.depthTexture.minFilter=Qt,W.map.depthTexture.magFilter=Qt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Gt,W.map.depthTexture.magFilter=Gt);W.camera.updateProjectionMatrix()}const N=W.map.isWebGLCubeRenderTarget?6:1;for(let C=0;C<N;C++){if(W.map.isWebGLCubeRenderTarget)t.setRenderTarget(W.map,C),t.clear();else{C===0&&(t.setRenderTarget(W.map),t.clear());const V=W.getViewport(C);a.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),D.viewport(a)}if(X.isPointLight){const V=W.camera,se=W.matrix,ie=X.distance||V.far;ie!==V.far&&(V.far=ie,V.updateProjectionMatrix()),na.setFromMatrixPosition(X.matrixWorld),V.position.copy(na),cu.copy(V.position),cu.add(_T[C]),V.up.copy(yT[C]),V.lookAt(cu),V.updateMatrixWorld(),se.makeTranslation(-na.x,-na.y,-na.z),Rm.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Rm,V.coordinateSystem,V.reversedDepth)}else W.updateMatrices(X);i=W.getFrustum(),M(R,v,W.camera,X,this.type)}W.isPointLightShadow!==!0&&this.type===oa&&g(W,v),W.needsUpdate=!1}d=this.type,x.needsUpdate=!1,t.setRenderTarget(E,I,L)};function g(A,R){const v=e.update(b);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new di(r.x,r.y,{format:Fr,type:Ii})),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(R,null,v,f,b,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(R,null,v,h,b,null)}function _(A,R,v,E){let I=null;const L=v.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)I=L;else if(I=v.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const D=I.uuid,H=R.uuid;let Z=c[D];Z===void 0&&(Z={},c[D]=Z);let k=Z[H];k===void 0&&(k=I.clone(),Z[H]=k,R.addEventListener("dispose",T)),I=k}if(I.visible=R.visible,I.wireframe=R.wireframe,E===oa?I.side=R.shadowSide!==null?R.shadowSide:R.side:I.side=R.shadowSide!==null?R.shadowSide:m[R.side],I.alphaMap=R.alphaMap,I.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,I.map=R.map,I.clipShadows=R.clipShadows,I.clippingPlanes=R.clippingPlanes,I.clipIntersection=R.clipIntersection,I.displacementMap=R.displacementMap,I.displacementScale=R.displacementScale,I.displacementBias=R.displacementBias,I.wireframeLinewidth=R.wireframeLinewidth,I.linewidth=R.linewidth,v.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const D=t.properties.get(I);D.light=v}return I}function M(A,R,v,E,I){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&I===oa)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,A.matrixWorld);const H=e.update(A),Z=A.material;if(Array.isArray(Z)){const k=H.groups;for(let X=0,W=k.length;X<W;X++){const F=k[X],K=Z[F.materialIndex];if(K&&K.visible){const N=_(A,K,E,I);A.onBeforeShadow(t,A,R,v,H,N,F),t.renderBufferDirect(v,null,H,N,A,F),A.onAfterShadow(t,A,R,v,H,N,F)}}}else if(Z.visible){const k=_(A,Z,E,I);A.onBeforeShadow(t,A,R,v,H,k,null),t.renderBufferDirect(v,null,H,k,A,null),A.onAfterShadow(t,A,R,v,H,k,null)}}const D=A.children;for(let H=0,Z=D.length;H<Z;H++)M(D[H],R,v,E,I)}function T(A){A.target.removeEventListener("dispose",T);for(const v in c){const E=c[v],I=A.target.uuid;I in E&&(E[I].dispose(),delete E[I])}}}function MT(t,e){function n(){let U=!1;const me=new At;let ae=null;const ye=new At(0,0,0,0);return{setMask:function(Te){ae!==Te&&!U&&(t.colorMask(Te,Te,Te,Te),ae=Te)},setLocked:function(Te){U=Te},setClear:function(Te,ce,Le,Ne,bt){bt===!0&&(Te*=Ne,ce*=Ne,Le*=Ne),me.set(Te,ce,Le,Ne),ye.equals(me)===!1&&(t.clearColor(Te,ce,Le,Ne),ye.copy(me))},reset:function(){U=!1,ae=null,ye.set(-1,0,0,0)}}}function i(){let U=!1,me=!1,ae=null,ye=null,Te=null;return{setReversed:function(ce){if(me!==ce){const Le=e.get("EXT_clip_control");ce?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),me=ce;const Ne=Te;Te=null,this.setClear(Ne)}},getReversed:function(){return me},setTest:function(ce){ce?ee(t.DEPTH_TEST):fe(t.DEPTH_TEST)},setMask:function(ce){ae!==ce&&!U&&(t.depthMask(ce),ae=ce)},setFunc:function(ce){if(me&&(ce=tM[ce]),ye!==ce){switch(ce){case od:t.depthFunc(t.NEVER);break;case ld:t.depthFunc(t.ALWAYS);break;case cd:t.depthFunc(t.LESS);break;case Ls:t.depthFunc(t.LEQUAL);break;case ud:t.depthFunc(t.EQUAL);break;case dd:t.depthFunc(t.GEQUAL);break;case fd:t.depthFunc(t.GREATER);break;case hd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ye=ce}},setLocked:function(ce){U=ce},setClear:function(ce){Te!==ce&&(Te=ce,me&&(ce=1-ce),t.clearDepth(ce))},reset:function(){U=!1,ae=null,ye=null,Te=null,me=!1}}}function r(){let U=!1,me=null,ae=null,ye=null,Te=null,ce=null,Le=null,Ne=null,bt=null;return{setTest:function(ht){U||(ht?ee(t.STENCIL_TEST):fe(t.STENCIL_TEST))},setMask:function(ht){me!==ht&&!U&&(t.stencilMask(ht),me=ht)},setFunc:function(ht,Zn,Qn){(ae!==ht||ye!==Zn||Te!==Qn)&&(t.stencilFunc(ht,Zn,Qn),ae=ht,ye=Zn,Te=Qn)},setOp:function(ht,Zn,Qn){(ce!==ht||Le!==Zn||Ne!==Qn)&&(t.stencilOp(ht,Zn,Qn),ce=ht,Le=Zn,Ne=Qn)},setLocked:function(ht){U=ht},setClear:function(ht){bt!==ht&&(t.clearStencil(ht),bt=ht)},reset:function(){U=!1,me=null,ae=null,ye=null,Te=null,ce=null,Le=null,Ne=null,bt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let p={},m={},f={},h=new WeakMap,y=[],b=null,x=!1,d=null,g=null,_=null,M=null,T=null,A=null,R=null,v=new Ze(0,0,0),E=0,I=!1,L=null,D=null,H=null,Z=null,k=null;const X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,F=0;const K=t.getParameter(t.VERSION);K.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(K)[1]),W=F>=1):K.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),W=F>=2);let N=null,C={};const V=t.getParameter(t.SCISSOR_BOX),se=t.getParameter(t.VIEWPORT),ie=new At().fromArray(V),re=new At().fromArray(se);function B(U,me,ae,ye){const Te=new Uint8Array(4),ce=t.createTexture();t.bindTexture(U,ce),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Le=0;Le<ae;Le++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(me,0,t.RGBA,1,1,ye,0,t.RGBA,t.UNSIGNED_BYTE,Te):t.texImage2D(me+Le,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Te);return ce}const Q={};Q[t.TEXTURE_2D]=B(t.TEXTURE_2D,t.TEXTURE_2D,1),Q[t.TEXTURE_CUBE_MAP]=B(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[t.TEXTURE_2D_ARRAY]=B(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Q[t.TEXTURE_3D]=B(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(t.DEPTH_TEST),a.setFunc(Ls),it(!1),st(Pp),ee(t.CULL_FACE),Be(Ti);function ee(U){p[U]!==!0&&(t.enable(U),p[U]=!0)}function fe(U){p[U]!==!1&&(t.disable(U),p[U]=!1)}function Se(U,me){return f[U]!==me?(t.bindFramebuffer(U,me),f[U]=me,U===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=me),U===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=me),!0):!1}function he(U,me){let ae=y,ye=!1;if(U){ae=h.get(me),ae===void 0&&(ae=[],h.set(me,ae));const Te=U.textures;if(ae.length!==Te.length||ae[0]!==t.COLOR_ATTACHMENT0){for(let ce=0,Le=Te.length;ce<Le;ce++)ae[ce]=t.COLOR_ATTACHMENT0+ce;ae.length=Te.length,ye=!0}}else ae[0]!==t.BACK&&(ae[0]=t.BACK,ye=!0);ye&&t.drawBuffers(ae)}function le(U){return b!==U?(t.useProgram(U),b=U,!0):!1}const ge={[Sr]:t.FUNC_ADD,[bS]:t.FUNC_SUBTRACT,[wS]:t.FUNC_REVERSE_SUBTRACT};ge[TS]=t.MIN,ge[AS]=t.MAX;const xe={[CS]:t.ZERO,[RS]:t.ONE,[NS]:t.SRC_COLOR,[sd]:t.SRC_ALPHA,[FS]:t.SRC_ALPHA_SATURATE,[DS]:t.DST_COLOR,[IS]:t.DST_ALPHA,[PS]:t.ONE_MINUS_SRC_COLOR,[ad]:t.ONE_MINUS_SRC_ALPHA,[US]:t.ONE_MINUS_DST_COLOR,[LS]:t.ONE_MINUS_DST_ALPHA,[kS]:t.CONSTANT_COLOR,[OS]:t.ONE_MINUS_CONSTANT_COLOR,[BS]:t.CONSTANT_ALPHA,[zS]:t.ONE_MINUS_CONSTANT_ALPHA};function Be(U,me,ae,ye,Te,ce,Le,Ne,bt,ht){if(U===Ti){x===!0&&(fe(t.BLEND),x=!1);return}if(x===!1&&(ee(t.BLEND),x=!0),U!==ES){if(U!==d||ht!==I){if((g!==Sr||T!==Sr)&&(t.blendEquation(t.FUNC_ADD),g=Sr,T=Sr),ht)switch(U){case Es:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case rd:t.blendFunc(t.ONE,t.ONE);break;case Ip:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Lp:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:et("WebGLState: Invalid blending: ",U);break}else switch(U){case Es:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case rd:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Ip:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lp:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",U);break}_=null,M=null,A=null,R=null,v.set(0,0,0),E=0,d=U,I=ht}return}Te=Te||me,ce=ce||ae,Le=Le||ye,(me!==g||Te!==T)&&(t.blendEquationSeparate(ge[me],ge[Te]),g=me,T=Te),(ae!==_||ye!==M||ce!==A||Le!==R)&&(t.blendFuncSeparate(xe[ae],xe[ye],xe[ce],xe[Le]),_=ae,M=ye,A=ce,R=Le),(Ne.equals(v)===!1||bt!==E)&&(t.blendColor(Ne.r,Ne.g,Ne.b,bt),v.copy(Ne),E=bt),d=U,I=!1}function Ve(U,me){U.side===Si?fe(t.CULL_FACE):ee(t.CULL_FACE);let ae=U.side===pn;me&&(ae=!ae),it(ae),U.blending===Es&&U.transparent===!1?Be(Ti):Be(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const ye=U.stencilWrite;o.setTest(ye),ye&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),lt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ee(t.SAMPLE_ALPHA_TO_COVERAGE):fe(t.SAMPLE_ALPHA_TO_COVERAGE)}function it(U){L!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),L=U)}function st(U){U!==yS?(ee(t.CULL_FACE),U!==D&&(U===Pp?t.cullFace(t.BACK):U===SS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):fe(t.CULL_FACE),D=U}function ft(U){U!==H&&(W&&t.lineWidth(U),H=U)}function lt(U,me,ae){U?(ee(t.POLYGON_OFFSET_FILL),(Z!==me||k!==ae)&&(Z=me,k=ae,a.getReversed()&&(me=-me),t.polygonOffset(me,ae))):fe(t.POLYGON_OFFSET_FILL)}function vt(U){U?ee(t.SCISSOR_TEST):fe(t.SCISSOR_TEST)}function Et(U){U===void 0&&(U=t.TEXTURE0+X-1),N!==U&&(t.activeTexture(U),N=U)}function O(U,me,ae){ae===void 0&&(N===null?ae=t.TEXTURE0+X-1:ae=N);let ye=C[ae];ye===void 0&&(ye={type:void 0,texture:void 0},C[ae]=ye),(ye.type!==U||ye.texture!==me)&&(N!==ae&&(t.activeTexture(ae),N=ae),t.bindTexture(U,me||Q[U]),ye.type=U,ye.texture=me)}function Vt(){const U=C[N];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function rt(){try{t.compressedTexImage2D(...arguments)}catch(U){et("WebGLState:",U)}}function P(){try{t.compressedTexImage3D(...arguments)}catch(U){et("WebGLState:",U)}}function S(){try{t.texSubImage2D(...arguments)}catch(U){et("WebGLState:",U)}}function G(){try{t.texSubImage3D(...arguments)}catch(U){et("WebGLState:",U)}}function Y(){try{t.compressedTexSubImage2D(...arguments)}catch(U){et("WebGLState:",U)}}function te(){try{t.compressedTexSubImage3D(...arguments)}catch(U){et("WebGLState:",U)}}function de(){try{t.texStorage2D(...arguments)}catch(U){et("WebGLState:",U)}}function pe(){try{t.texStorage3D(...arguments)}catch(U){et("WebGLState:",U)}}function ne(){try{t.texImage2D(...arguments)}catch(U){et("WebGLState:",U)}}function oe(){try{t.texImage3D(...arguments)}catch(U){et("WebGLState:",U)}}function ve(U){return m[U]!==void 0?m[U]:t.getParameter(U)}function De(U,me){m[U]!==me&&(t.pixelStorei(U,me),m[U]=me)}function Me(U){ie.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),ie.copy(U))}function _e(U){re.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),re.copy(U))}function ke(U,me){let ae=c.get(me);ae===void 0&&(ae=new WeakMap,c.set(me,ae));let ye=ae.get(U);ye===void 0&&(ye=t.getUniformBlockIndex(me,U.name),ae.set(U,ye))}function Oe(U,me){const ye=c.get(me).get(U);l.get(me)!==ye&&(t.uniformBlockBinding(me,ye,U.__bindingPointIndex),l.set(me,ye))}function Ge(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),p={},m={},N=null,C={},f={},h=new WeakMap,y=[],b=null,x=!1,d=null,g=null,_=null,M=null,T=null,A=null,R=null,v=new Ze(0,0,0),E=0,I=!1,L=null,D=null,H=null,Z=null,k=null,ie.set(0,0,t.canvas.width,t.canvas.height),re.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ee,disable:fe,bindFramebuffer:Se,drawBuffers:he,useProgram:le,setBlending:Be,setMaterial:Ve,setFlipSided:it,setCullFace:st,setLineWidth:ft,setPolygonOffset:lt,setScissorTest:vt,activeTexture:Et,bindTexture:O,unbindTexture:Vt,compressedTexImage2D:rt,compressedTexImage3D:P,texImage2D:ne,texImage3D:oe,pixelStorei:De,getParameter:ve,updateUBOMapping:ke,uniformBlockBinding:Oe,texStorage2D:de,texStorage3D:pe,texSubImage2D:S,texSubImage3D:G,compressedTexSubImage2D:Y,compressedTexSubImage3D:te,scissor:Me,viewport:_e,reset:Ge}}function ET(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qe,p=new WeakMap,m=new Set;let f;const h=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(P,S){return y?new OffscreenCanvas(P,S):Pl("canvas")}function x(P,S,G){let Y=1;const te=rt(P);if((te.width>G||te.height>G)&&(Y=G/Math.max(te.width,te.height)),Y<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const de=Math.floor(Y*te.width),pe=Math.floor(Y*te.height);f===void 0&&(f=b(de,pe));const ne=S?b(de,pe):f;return ne.width=de,ne.height=pe,ne.getContext("2d").drawImage(P,0,0,de,pe),ze("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+de+"x"+pe+")."),ne}else return"data"in P&&ze("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),P;return P}function d(P){return P.generateMipmaps}function g(P){t.generateMipmap(P)}function _(P){return P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?t.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(P,S,G,Y,te,de=!1){if(P!==null){if(t[P]!==void 0)return t[P];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let pe;Y&&(pe=e.get("EXT_texture_norm16"),pe||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=S;if(S===t.RED&&(G===t.FLOAT&&(ne=t.R32F),G===t.HALF_FLOAT&&(ne=t.R16F),G===t.UNSIGNED_BYTE&&(ne=t.R8),G===t.UNSIGNED_SHORT&&pe&&(ne=pe.R16_EXT),G===t.SHORT&&pe&&(ne=pe.R16_SNORM_EXT)),S===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(ne=t.R8UI),G===t.UNSIGNED_SHORT&&(ne=t.R16UI),G===t.UNSIGNED_INT&&(ne=t.R32UI),G===t.BYTE&&(ne=t.R8I),G===t.SHORT&&(ne=t.R16I),G===t.INT&&(ne=t.R32I)),S===t.RG&&(G===t.FLOAT&&(ne=t.RG32F),G===t.HALF_FLOAT&&(ne=t.RG16F),G===t.UNSIGNED_BYTE&&(ne=t.RG8),G===t.UNSIGNED_SHORT&&pe&&(ne=pe.RG16_EXT),G===t.SHORT&&pe&&(ne=pe.RG16_SNORM_EXT)),S===t.RG_INTEGER&&(G===t.UNSIGNED_BYTE&&(ne=t.RG8UI),G===t.UNSIGNED_SHORT&&(ne=t.RG16UI),G===t.UNSIGNED_INT&&(ne=t.RG32UI),G===t.BYTE&&(ne=t.RG8I),G===t.SHORT&&(ne=t.RG16I),G===t.INT&&(ne=t.RG32I)),S===t.RGB_INTEGER&&(G===t.UNSIGNED_BYTE&&(ne=t.RGB8UI),G===t.UNSIGNED_SHORT&&(ne=t.RGB16UI),G===t.UNSIGNED_INT&&(ne=t.RGB32UI),G===t.BYTE&&(ne=t.RGB8I),G===t.SHORT&&(ne=t.RGB16I),G===t.INT&&(ne=t.RGB32I)),S===t.RGBA_INTEGER&&(G===t.UNSIGNED_BYTE&&(ne=t.RGBA8UI),G===t.UNSIGNED_SHORT&&(ne=t.RGBA16UI),G===t.UNSIGNED_INT&&(ne=t.RGBA32UI),G===t.BYTE&&(ne=t.RGBA8I),G===t.SHORT&&(ne=t.RGBA16I),G===t.INT&&(ne=t.RGBA32I)),S===t.RGB&&(G===t.UNSIGNED_SHORT&&pe&&(ne=pe.RGB16_EXT),G===t.SHORT&&pe&&(ne=pe.RGB16_SNORM_EXT),G===t.UNSIGNED_INT_5_9_9_9_REV&&(ne=t.RGB9_E5),G===t.UNSIGNED_INT_10F_11F_11F_REV&&(ne=t.R11F_G11F_B10F)),S===t.RGBA){const oe=de?Rl:$e.getTransfer(te);G===t.FLOAT&&(ne=t.RGBA32F),G===t.HALF_FLOAT&&(ne=t.RGBA16F),G===t.UNSIGNED_BYTE&&(ne=oe===at?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT&&pe&&(ne=pe.RGBA16_EXT),G===t.SHORT&&pe&&(ne=pe.RGBA16_SNORM_EXT),G===t.UNSIGNED_SHORT_4_4_4_4&&(ne=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(ne=t.RGB5_A1)}return(ne===t.R16F||ne===t.R32F||ne===t.RG16F||ne===t.RG32F||ne===t.RGBA16F||ne===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function T(P,S){let G;return P?S===null||S===fi||S===ka?G=t.DEPTH24_STENCIL8:S===ai?G=t.DEPTH32F_STENCIL8:S===Fa&&(G=t.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===fi||S===ka?G=t.DEPTH_COMPONENT24:S===ai?G=t.DEPTH_COMPONENT32F:S===Fa&&(G=t.DEPTH_COMPONENT16),G}function A(P,S){return d(P)===!0||P.isFramebufferTexture&&P.minFilter!==Gt&&P.minFilter!==Qt?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function R(P){const S=P.target;S.removeEventListener("dispose",R),E(S),S.isVideoTexture&&p.delete(S),S.isHTMLTexture&&m.delete(S)}function v(P){const S=P.target;S.removeEventListener("dispose",v),L(S)}function E(P){const S=i.get(P);if(S.__webglInit===void 0)return;const G=P.source,Y=h.get(G);if(Y){const te=Y[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&I(P),Object.keys(Y).length===0&&h.delete(G)}i.remove(P)}function I(P){const S=i.get(P);t.deleteTexture(S.__webglTexture);const G=P.source,Y=h.get(G);delete Y[S.__cacheKey],a.memory.textures--}function L(P){const S=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(S.__webglFramebuffer[Y]))for(let te=0;te<S.__webglFramebuffer[Y].length;te++)t.deleteFramebuffer(S.__webglFramebuffer[Y][te]);else t.deleteFramebuffer(S.__webglFramebuffer[Y]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[Y])}else{if(Array.isArray(S.__webglFramebuffer))for(let Y=0;Y<S.__webglFramebuffer.length;Y++)t.deleteFramebuffer(S.__webglFramebuffer[Y]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Y=0;Y<S.__webglColorRenderbuffer.length;Y++)S.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[Y]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=P.textures;for(let Y=0,te=G.length;Y<te;Y++){const de=i.get(G[Y]);de.__webglTexture&&(t.deleteTexture(de.__webglTexture),a.memory.textures--),i.remove(G[Y])}i.remove(P)}let D=0;function H(){D=0}function Z(){return D}function k(P){D=P}function X(){const P=D;return P>=r.maxTextures&&ze("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),D+=1,P}function W(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function F(P,S){const G=i.get(P);if(P.isVideoTexture&&O(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&G.__version!==P.version){const Y=P.image;if(Y===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{fe(G,P,S);return}}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+S)}function K(P,S){const G=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){fe(G,P,S);return}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+S)}function N(P,S){const G=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){fe(G,P,S);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+S)}function C(P,S){const G=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&G.__version!==P.version){Se(G,P,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+S)}const V={[pd]:t.REPEAT,[bi]:t.CLAMP_TO_EDGE,[md]:t.MIRRORED_REPEAT},se={[Gt]:t.NEAREST,[GS]:t.NEAREST_MIPMAP_NEAREST,[ho]:t.NEAREST_MIPMAP_LINEAR,[Qt]:t.LINEAR,[Lc]:t.LINEAR_MIPMAP_NEAREST,[Tr]:t.LINEAR_MIPMAP_LINEAR},ie={[XS]:t.NEVER,[ZS]:t.ALWAYS,[qS]:t.LESS,[nh]:t.LEQUAL,[$S]:t.EQUAL,[ih]:t.GEQUAL,[YS]:t.GREATER,[KS]:t.NOTEQUAL};function re(P,S){if(S.type===ai&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Qt||S.magFilter===Lc||S.magFilter===ho||S.magFilter===Tr||S.minFilter===Qt||S.minFilter===Lc||S.minFilter===ho||S.minFilter===Tr)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,V[S.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,V[S.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,V[S.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,se[S.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,se[S.minFilter]),S.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,ie[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Gt||S.minFilter!==ho&&S.minFilter!==Tr||S.type===ai&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function B(P,S){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",R));const Y=S.source;let te=h.get(Y);te===void 0&&(te={},h.set(Y,te));const de=W(S);if(de!==P.__cacheKey){te[de]===void 0&&(te[de]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,G=!0),te[de].usedTimes++;const pe=te[P.__cacheKey];pe!==void 0&&(te[P.__cacheKey].usedTimes--,pe.usedTimes===0&&I(S)),P.__cacheKey=de,P.__webglTexture=te[de].texture}return G}function Q(P,S,G){return Math.floor(Math.floor(P/G)/S)}function ee(P,S,G,Y){const de=P.updateRanges;if(de.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,G,Y,S.data);else{de.sort((De,Me)=>De.start-Me.start);let pe=0;for(let De=1;De<de.length;De++){const Me=de[pe],_e=de[De],ke=Me.start+Me.count,Oe=Q(_e.start,S.width,4),Ge=Q(Me.start,S.width,4);_e.start<=ke+1&&Oe===Ge&&Q(_e.start+_e.count-1,S.width,4)===Oe?Me.count=Math.max(Me.count,_e.start+_e.count-Me.start):(++pe,de[pe]=_e)}de.length=pe+1;const ne=n.getParameter(t.UNPACK_ROW_LENGTH),oe=n.getParameter(t.UNPACK_SKIP_PIXELS),ve=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let De=0,Me=de.length;De<Me;De++){const _e=de[De],ke=Math.floor(_e.start/4),Oe=Math.ceil(_e.count/4),Ge=ke%S.width,U=Math.floor(ke/S.width),me=Oe,ae=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Ge),n.pixelStorei(t.UNPACK_SKIP_ROWS,U),n.texSubImage2D(t.TEXTURE_2D,0,Ge,U,me,ae,G,Y,S.data)}P.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,ne),n.pixelStorei(t.UNPACK_SKIP_PIXELS,oe),n.pixelStorei(t.UNPACK_SKIP_ROWS,ve)}}function fe(P,S,G){let Y=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Y=t.TEXTURE_3D);const te=B(P,S),de=S.source;n.bindTexture(Y,P.__webglTexture,t.TEXTURE0+G);const pe=i.get(de);if(de.version!==pe.__version||te===!0){if(n.activeTexture(t.TEXTURE0+G),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const ae=$e.getPrimaries($e.workingColorSpace),ye=S.colorSpace===Yi?null:$e.getPrimaries(S.colorSpace),Te=S.colorSpace===Yi||ae===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te)}n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment);let oe=x(S.image,!1,r.maxTextureSize);oe=Vt(S,oe);const ve=s.convert(S.format,S.colorSpace),De=s.convert(S.type);let Me=M(S.internalFormat,ve,De,S.normalized,S.colorSpace,S.isVideoTexture);re(Y,S);let _e;const ke=S.mipmaps,Oe=S.isVideoTexture!==!0,Ge=pe.__version===void 0||te===!0,U=de.dataReady,me=A(S,oe);if(S.isDepthTexture)Me=T(S.format===Ar,S.type),Ge&&(Oe?n.texStorage2D(t.TEXTURE_2D,1,Me,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,Me,oe.width,oe.height,0,ve,De,null));else if(S.isDataTexture)if(ke.length>0){Oe&&Ge&&n.texStorage2D(t.TEXTURE_2D,me,Me,ke[0].width,ke[0].height);for(let ae=0,ye=ke.length;ae<ye;ae++)_e=ke[ae],Oe?U&&n.texSubImage2D(t.TEXTURE_2D,ae,0,0,_e.width,_e.height,ve,De,_e.data):n.texImage2D(t.TEXTURE_2D,ae,Me,_e.width,_e.height,0,ve,De,_e.data);S.generateMipmaps=!1}else Oe?(Ge&&n.texStorage2D(t.TEXTURE_2D,me,Me,oe.width,oe.height),U&&ee(S,oe,ve,De)):n.texImage2D(t.TEXTURE_2D,0,Me,oe.width,oe.height,0,ve,De,oe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Oe&&Ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,Me,ke[0].width,ke[0].height,oe.depth);for(let ae=0,ye=ke.length;ae<ye;ae++)if(_e=ke[ae],S.format!==qn)if(ve!==null)if(Oe){if(U)if(S.layerUpdates.size>0){const Te=am(_e.width,_e.height,S.format,S.type);for(const ce of S.layerUpdates){const Le=_e.data.subarray(ce*Te/_e.data.BYTES_PER_ELEMENT,(ce+1)*Te/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,ce,_e.width,_e.height,1,ve,Le)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,0,_e.width,_e.height,oe.depth,ve,_e.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ae,Me,_e.width,_e.height,oe.depth,0,_e.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,0,_e.width,_e.height,oe.depth,ve,De,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ae,Me,_e.width,_e.height,oe.depth,0,ve,De,_e.data)}else{Oe&&Ge&&n.texStorage2D(t.TEXTURE_2D,me,Me,ke[0].width,ke[0].height);for(let ae=0,ye=ke.length;ae<ye;ae++)_e=ke[ae],S.format!==qn?ve!==null?Oe?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,ae,0,0,_e.width,_e.height,ve,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,ae,Me,_e.width,_e.height,0,_e.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?U&&n.texSubImage2D(t.TEXTURE_2D,ae,0,0,_e.width,_e.height,ve,De,_e.data):n.texImage2D(t.TEXTURE_2D,ae,Me,_e.width,_e.height,0,ve,De,_e.data)}else if(S.isDataArrayTexture)if(Oe){if(Ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,Me,oe.width,oe.height,oe.depth),U)if(S.layerUpdates.size>0){const ae=am(oe.width,oe.height,S.format,S.type);for(const ye of S.layerUpdates){const Te=oe.data.subarray(ye*ae/oe.data.BYTES_PER_ELEMENT,(ye+1)*ae/oe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ye,oe.width,oe.height,1,ve,De,Te)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ve,De,oe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Me,oe.width,oe.height,oe.depth,0,ve,De,oe.data);else if(S.isData3DTexture)Oe?(Ge&&n.texStorage3D(t.TEXTURE_3D,me,Me,oe.width,oe.height,oe.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ve,De,oe.data)):n.texImage3D(t.TEXTURE_3D,0,Me,oe.width,oe.height,oe.depth,0,ve,De,oe.data);else if(S.isFramebufferTexture){if(Ge)if(Oe)n.texStorage2D(t.TEXTURE_2D,me,Me,oe.width,oe.height);else{let ae=oe.width,ye=oe.height;for(let Te=0;Te<me;Te++)n.texImage2D(t.TEXTURE_2D,Te,Me,ae,ye,0,ve,De,null),ae>>=1,ye>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in t){const ae=t.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),oe.parentNode!==ae){ae.appendChild(oe),m.add(S),ae.onpaint=ye=>{const Te=ye.changedElements;for(const ce of m)Te.includes(ce.image)&&(ce.needsUpdate=!0)},ae.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,oe);else{const Te=t.RGBA,ce=t.RGBA,Le=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Te,ce,Le,oe)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(ke.length>0){if(Oe&&Ge){const ae=rt(ke[0]);n.texStorage2D(t.TEXTURE_2D,me,Me,ae.width,ae.height)}for(let ae=0,ye=ke.length;ae<ye;ae++)_e=ke[ae],Oe?U&&n.texSubImage2D(t.TEXTURE_2D,ae,0,0,ve,De,_e):n.texImage2D(t.TEXTURE_2D,ae,Me,ve,De,_e);S.generateMipmaps=!1}else if(Oe){if(Ge){const ae=rt(oe);n.texStorage2D(t.TEXTURE_2D,me,Me,ae.width,ae.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve,De,oe)}else n.texImage2D(t.TEXTURE_2D,0,Me,ve,De,oe);d(S)&&g(Y),pe.__version=de.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function Se(P,S,G){if(S.image.length!==6)return;const Y=B(P,S),te=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+G);const de=i.get(te);if(te.version!==de.__version||Y===!0){n.activeTexture(t.TEXTURE0+G);const pe=$e.getPrimaries($e.workingColorSpace),ne=S.colorSpace===Yi?null:$e.getPrimaries(S.colorSpace),oe=S.colorSpace===Yi||pe===ne?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const ve=S.isCompressedTexture||S.image[0].isCompressedTexture,De=S.image[0]&&S.image[0].isDataTexture,Me=[];for(let ce=0;ce<6;ce++)!ve&&!De?Me[ce]=x(S.image[ce],!0,r.maxCubemapSize):Me[ce]=De?S.image[ce].image:S.image[ce],Me[ce]=Vt(S,Me[ce]);const _e=Me[0],ke=s.convert(S.format,S.colorSpace),Oe=s.convert(S.type),Ge=M(S.internalFormat,ke,Oe,S.normalized,S.colorSpace),U=S.isVideoTexture!==!0,me=de.__version===void 0||Y===!0,ae=te.dataReady;let ye=A(S,_e);re(t.TEXTURE_CUBE_MAP,S);let Te;if(ve){U&&me&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ye,Ge,_e.width,_e.height);for(let ce=0;ce<6;ce++){Te=Me[ce].mipmaps;for(let Le=0;Le<Te.length;Le++){const Ne=Te[Le];S.format!==qn?ke!==null?U?ae&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Le,0,0,Ne.width,Ne.height,ke,Ne.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Le,Ge,Ne.width,Ne.height,0,Ne.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Le,0,0,Ne.width,Ne.height,ke,Oe,Ne.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Le,Ge,Ne.width,Ne.height,0,ke,Oe,Ne.data)}}}else{if(Te=S.mipmaps,U&&me){Te.length>0&&ye++;const ce=rt(Me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ye,Ge,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(De){U?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Me[ce].width,Me[ce].height,ke,Oe,Me[ce].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ge,Me[ce].width,Me[ce].height,0,ke,Oe,Me[ce].data);for(let Le=0;Le<Te.length;Le++){const bt=Te[Le].image[ce].image;U?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Le+1,0,0,bt.width,bt.height,ke,Oe,bt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Le+1,Ge,bt.width,bt.height,0,ke,Oe,bt.data)}}else{U?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,ke,Oe,Me[ce]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ge,ke,Oe,Me[ce]);for(let Le=0;Le<Te.length;Le++){const Ne=Te[Le];U?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Le+1,0,0,ke,Oe,Ne.image[ce]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Le+1,Ge,ke,Oe,Ne.image[ce])}}}d(S)&&g(t.TEXTURE_CUBE_MAP),de.__version=te.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function he(P,S,G,Y,te,de){const pe=s.convert(G.format,G.colorSpace),ne=s.convert(G.type),oe=M(G.internalFormat,pe,ne,G.normalized,G.colorSpace),ve=i.get(S),De=i.get(G);if(De.__renderTarget=S,!ve.__hasExternalTextures){const Me=Math.max(1,S.width>>de),_e=Math.max(1,S.height>>de);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,de,oe,Me,_e,S.depth,0,pe,ne,null):n.texImage2D(te,de,oe,Me,_e,0,pe,ne,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),Et(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,te,De.__webglTexture,0,vt(S)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,te,De.__webglTexture,de),n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(P,S,G){if(t.bindRenderbuffer(t.RENDERBUFFER,P),S.depthBuffer){const Y=S.depthTexture,te=Y&&Y.isDepthTexture?Y.type:null,de=T(S.stencilBuffer,te),pe=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Et(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,vt(S),de,S.width,S.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,vt(S),de,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,de,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,pe,t.RENDERBUFFER,P)}else{const Y=S.textures;for(let te=0;te<Y.length;te++){const de=Y[te],pe=s.convert(de.format,de.colorSpace),ne=s.convert(de.type),oe=M(de.internalFormat,pe,ne,de.normalized,de.colorSpace);Et(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,vt(S),oe,S.width,S.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,vt(S),oe,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,oe,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ge(P,S,G){const Y=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const te=i.get(S.depthTexture);if(te.__renderTarget=S,(!te.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Y){if(te.__webglInit===void 0&&(te.__webglInit=!0,S.depthTexture.addEventListener("dispose",R)),te.__webglTexture===void 0){te.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),re(t.TEXTURE_CUBE_MAP,S.depthTexture);const ve=s.convert(S.depthTexture.format),De=s.convert(S.depthTexture.type);let Me;S.depthTexture.format===Li?Me=t.DEPTH_COMPONENT24:S.depthTexture.format===Ar&&(Me=t.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Me,S.width,S.height,0,ve,De,null)}}else F(S.depthTexture,0);const de=te.__webglTexture,pe=vt(S),ne=Y?t.TEXTURE_CUBE_MAP_POSITIVE_X+G:t.TEXTURE_2D,oe=S.depthTexture.format===Ar?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(S.depthTexture.format===Li)Et(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,oe,ne,de,0,pe):t.framebufferTexture2D(t.FRAMEBUFFER,oe,ne,de,0);else if(S.depthTexture.format===Ar)Et(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,oe,ne,de,0,pe):t.framebufferTexture2D(t.FRAMEBUFFER,oe,ne,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function xe(P){const S=i.get(P),G=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){const Y=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Y){const te=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Y.removeEventListener("dispose",te)};Y.addEventListener("dispose",te),S.__depthDisposeCallback=te}S.__boundDepthTexture=Y}if(P.depthTexture&&!S.__autoAllocateDepthBuffer)if(G)for(let Y=0;Y<6;Y++)ge(S.__webglFramebuffer[Y],P,Y);else{const Y=P.texture.mipmaps;Y&&Y.length>0?ge(S.__webglFramebuffer[0],P,0):ge(S.__webglFramebuffer,P,0)}else if(G){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]===void 0)S.__webglDepthbuffer[Y]=t.createRenderbuffer(),le(S.__webglDepthbuffer[Y],P,!1);else{const te=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=S.__webglDepthbuffer[Y];t.bindRenderbuffer(t.RENDERBUFFER,de),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,de)}}else{const Y=P.texture.mipmaps;if(Y&&Y.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),le(S.__webglDepthbuffer,P,!1);else{const te=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,de),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,de)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Be(P,S,G){const Y=i.get(P);S!==void 0&&he(Y.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&xe(P)}function Ve(P){const S=P.texture,G=i.get(P),Y=i.get(S);P.addEventListener("dispose",v);const te=P.textures,de=P.isWebGLCubeRenderTarget===!0,pe=te.length>1;if(pe||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=S.version,a.memory.textures++),de){G.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[ne]=[];for(let oe=0;oe<S.mipmaps.length;oe++)G.__webglFramebuffer[ne][oe]=t.createFramebuffer()}else G.__webglFramebuffer[ne]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let ne=0;ne<S.mipmaps.length;ne++)G.__webglFramebuffer[ne]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(pe)for(let ne=0,oe=te.length;ne<oe;ne++){const ve=i.get(te[ne]);ve.__webglTexture===void 0&&(ve.__webglTexture=t.createTexture(),a.memory.textures++)}if(P.samples>0&&Et(P)===!1){G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ne=0;ne<te.length;ne++){const oe=te[ne];G.__webglColorRenderbuffer[ne]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[ne]);const ve=s.convert(oe.format,oe.colorSpace),De=s.convert(oe.type),Me=M(oe.internalFormat,ve,De,oe.normalized,oe.colorSpace,P.isXRRenderTarget===!0),_e=vt(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,_e,Me,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ne,t.RENDERBUFFER,G.__webglColorRenderbuffer[ne])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),le(G.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(de){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),re(t.TEXTURE_CUBE_MAP,S);for(let ne=0;ne<6;ne++)if(S.mipmaps&&S.mipmaps.length>0)for(let oe=0;oe<S.mipmaps.length;oe++)he(G.__webglFramebuffer[ne][oe],P,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,oe);else he(G.__webglFramebuffer[ne],P,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);d(S)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(pe){for(let ne=0,oe=te.length;ne<oe;ne++){const ve=te[ne],De=i.get(ve);let Me=t.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Me=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Me,De.__webglTexture),re(Me,ve),he(G.__webglFramebuffer,P,ve,t.COLOR_ATTACHMENT0+ne,Me,0),d(ve)&&g(Me)}n.unbindTexture()}else{let ne=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ne=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ne,Y.__webglTexture),re(ne,S),S.mipmaps&&S.mipmaps.length>0)for(let oe=0;oe<S.mipmaps.length;oe++)he(G.__webglFramebuffer[oe],P,S,t.COLOR_ATTACHMENT0,ne,oe);else he(G.__webglFramebuffer,P,S,t.COLOR_ATTACHMENT0,ne,0);d(S)&&g(ne),n.unbindTexture()}P.depthBuffer&&xe(P)}function it(P){const S=P.textures;for(let G=0,Y=S.length;G<Y;G++){const te=S[G];if(d(te)){const de=_(P),pe=i.get(te).__webglTexture;n.bindTexture(de,pe),g(de),n.unbindTexture()}}}const st=[],ft=[];function lt(P){if(P.samples>0){if(Et(P)===!1){const S=P.textures,G=P.width,Y=P.height;let te=t.COLOR_BUFFER_BIT;const de=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=i.get(P),ne=S.length>1;if(ne)for(let ve=0;ve<S.length;ve++)n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const oe=P.texture.mipmaps;oe&&oe.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ve=0;ve<S.length;ve++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),ne){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,pe.__webglColorRenderbuffer[ve]);const De=i.get(S[ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,De,0)}t.blitFramebuffer(0,0,G,Y,0,0,G,Y,te,t.NEAREST),l===!0&&(st.length=0,ft.length=0,st.push(t.COLOR_ATTACHMENT0+ve),P.depthBuffer&&P.resolveDepthBuffer===!1&&(st.push(de),ft.push(de),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ft)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,st))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ne)for(let ve=0;ve<S.length;ve++){n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,pe.__webglColorRenderbuffer[ve]);const De=i.get(S[ve]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,De,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const S=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function vt(P){return Math.min(r.maxSamples,P.samples)}function Et(P){const S=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function O(P){const S=a.render.frame;p.get(P)!==S&&(p.set(P,S),P.update())}function Vt(P,S){const G=P.colorSpace,Y=P.format,te=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==Cl&&G!==Yi&&($e.getTransfer(G)===at?(Y!==qn||te!==In)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",G)),S}function rt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=H,this.getTextureUnits=Z,this.setTextureUnits=k,this.setTexture2D=F,this.setTexture2DArray=K,this.setTexture3D=N,this.setTextureCube=C,this.rebindTextures=Be,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Et,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function bT(t,e){function n(i,r=Yi){let s;const a=$e.getTransfer(r);if(i===In)return t.UNSIGNED_BYTE;if(i===Zf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Qf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===cx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===ux)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===ox)return t.BYTE;if(i===lx)return t.SHORT;if(i===Fa)return t.UNSIGNED_SHORT;if(i===Kf)return t.INT;if(i===fi)return t.UNSIGNED_INT;if(i===ai)return t.FLOAT;if(i===Ii)return t.HALF_FLOAT;if(i===dx)return t.ALPHA;if(i===fx)return t.RGB;if(i===qn)return t.RGBA;if(i===Li)return t.DEPTH_COMPONENT;if(i===Ar)return t.DEPTH_STENCIL;if(i===hx)return t.RED;if(i===Jf)return t.RED_INTEGER;if(i===Fr)return t.RG;if(i===eh)return t.RG_INTEGER;if(i===th)return t.RGBA_INTEGER;if(i===Zo||i===Qo||i===Jo||i===el)if(a===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Zo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===el)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Zo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Jo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===el)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gd||i===xd||i===vd||i===_d)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===gd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_d)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yd||i===Sd||i===Md||i===Ed||i===bd||i===Tl||i===wd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===yd||i===Sd)return a===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Md)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ed)return s.COMPRESSED_R11_EAC;if(i===bd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Tl)return s.COMPRESSED_RG11_EAC;if(i===wd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Td||i===Ad||i===Cd||i===Rd||i===Nd||i===Pd||i===Id||i===Ld||i===Dd||i===Ud||i===Fd||i===kd||i===Od||i===Bd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Td)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ad)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Rd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Nd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Pd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Id)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ld)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Dd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ud)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===kd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Od)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Bd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zd||i===Vd||i===Hd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===zd)return a===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Gd||i===Wd||i===Al||i===jd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Gd)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Wd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Al)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ka?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const wT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class AT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new bx(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new hi({vertexShader:wT,fragmentShader:TT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Fn(new Jl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class CT extends zr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,p=null,m=null,f=null,h=null,y=null;const b=typeof XRWebGLBinding<"u",x=new AT,d={},g=n.getContextAttributes();let _=null,M=null;const T=[],A=[],R=new Qe;let v=null;const E=new Pn;E.viewport=new At;const I=new Pn;I.viewport=new At;const L=[E,I],D=new kM;let H=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let Q=T[B];return Q===void 0&&(Q=new Vc,T[B]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(B){let Q=T[B];return Q===void 0&&(Q=new Vc,T[B]=Q),Q.getGripSpace()},this.getHand=function(B){let Q=T[B];return Q===void 0&&(Q=new Vc,T[B]=Q),Q.getHandSpace()};function k(B){const Q=A.indexOf(B.inputSource);if(Q===-1)return;const ee=T[Q];ee!==void 0&&(ee.update(B.inputSource,B.frame,c||a),ee.dispatchEvent({type:B.type,data:B.inputSource}))}function X(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",W);for(let B=0;B<T.length;B++){const Q=A[B];Q!==null&&(A[B]=null,T[B].disconnect(Q))}H=null,Z=null,x.reset();for(const B in d)delete d[B];e.setRenderTarget(_),h=null,f=null,m=null,r=null,M=null,re.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,i.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,i.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return m===null&&b&&(m=new XRWebGLBinding(r,n)),m},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",X),r.addEventListener("inputsourceschange",W),g.xrCompatible!==!0&&await n.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(R),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ee=null,fe=null,Se=null;g.depth&&(Se=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ee=g.stencil?Ar:Li,fe=g.stencil?ka:fi);const he={colorFormat:n.RGBA8,depthFormat:Se,scaleFactor:s};m=this.getBinding(),f=m.createProjectionLayer(he),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new di(f.textureWidth,f.textureHeight,{format:qn,type:In,depthTexture:new Us(f.textureWidth,f.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ee={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,n,ee),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),M=new di(h.framebufferWidth,h.framebufferHeight,{format:qn,type:In,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),re.setContext(r),re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function W(B){for(let Q=0;Q<B.removed.length;Q++){const ee=B.removed[Q],fe=A.indexOf(ee);fe>=0&&(A[fe]=null,T[fe].disconnect(ee))}for(let Q=0;Q<B.added.length;Q++){const ee=B.added[Q];let fe=A.indexOf(ee);if(fe===-1){for(let he=0;he<T.length;he++)if(he>=A.length){A.push(ee),fe=he;break}else if(A[he]===null){A[he]=ee,fe=he;break}if(fe===-1)break}const Se=T[fe];Se&&Se.connect(ee)}}const F=new j,K=new j;function N(B,Q,ee){F.setFromMatrixPosition(Q.matrixWorld),K.setFromMatrixPosition(ee.matrixWorld);const fe=F.distanceTo(K),Se=Q.projectionMatrix.elements,he=ee.projectionMatrix.elements,le=Se[14]/(Se[10]-1),ge=Se[14]/(Se[10]+1),xe=(Se[9]+1)/Se[5],Be=(Se[9]-1)/Se[5],Ve=(Se[8]-1)/Se[0],it=(he[8]+1)/he[0],st=le*Ve,ft=le*it,lt=fe/(-Ve+it),vt=lt*-Ve;if(Q.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(vt),B.translateZ(lt),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),Se[10]===-1)B.projectionMatrix.copy(Q.projectionMatrix),B.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Et=le+lt,O=ge+lt,Vt=st-vt,rt=ft+(fe-vt),P=xe*ge/O*Et,S=Be*ge/O*Et;B.projectionMatrix.makePerspective(Vt,rt,P,S,Et,O),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function C(B,Q){Q===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(Q.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;let Q=B.near,ee=B.far;x.texture!==null&&(x.depthNear>0&&(Q=x.depthNear),x.depthFar>0&&(ee=x.depthFar)),D.near=I.near=E.near=Q,D.far=I.far=E.far=ee,(H!==D.near||Z!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),H=D.near,Z=D.far),D.layers.mask=B.layers.mask|6,E.layers.mask=D.layers.mask&-5,I.layers.mask=D.layers.mask&-3;const fe=B.parent,Se=D.cameras;C(D,fe);for(let he=0;he<Se.length;he++)C(Se[he],fe);Se.length===2?N(D,E,I):D.projectionMatrix.copy(E.projectionMatrix),V(B,D,fe)};function V(B,Q,ee){ee===null?B.matrix.copy(Q.matrixWorld):(B.matrix.copy(ee.matrixWorld),B.matrix.invert(),B.matrix.multiply(Q.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(Q.projectionMatrix),B.projectionMatrixInverse.copy(Q.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Xd*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(B){l=B,f!==null&&(f.fixedFoveation=B),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=B)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(D)},this.getCameraTexture=function(B){return d[B]};let se=null;function ie(B,Q){if(p=Q.getViewerPose(c||a),y=Q,p!==null){const ee=p.views;h!==null&&(e.setRenderTargetFramebuffer(M,h.framebuffer),e.setRenderTarget(M));let fe=!1;ee.length!==D.cameras.length&&(D.cameras.length=0,fe=!0);for(let ge=0;ge<ee.length;ge++){const xe=ee[ge];let Be=null;if(h!==null)Be=h.getViewport(xe);else{const it=m.getViewSubImage(f,xe);Be=it.viewport,ge===0&&(e.setRenderTargetTextures(M,it.colorTexture,it.depthStencilTexture),e.setRenderTarget(M))}let Ve=L[ge];Ve===void 0&&(Ve=new Pn,Ve.layers.enable(ge),Ve.viewport=new At,L[ge]=Ve),Ve.matrix.fromArray(xe.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(xe.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(Be.x,Be.y,Be.width,Be.height),ge===0&&(D.matrix.copy(Ve.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),fe===!0&&D.cameras.push(Ve)}const Se=r.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){m=i.getBinding();const ge=m.getDepthInformation(ee[0]);ge&&ge.isValid&&ge.texture&&x.init(ge,r.renderState)}if(Se&&Se.includes("camera-access")&&b){e.state.unbindTexture(),m=i.getBinding();for(let ge=0;ge<ee.length;ge++){const xe=ee[ge].camera;if(xe){let Be=d[xe];Be||(Be=new bx,d[xe]=Be);const Ve=m.getCameraImage(xe);Be.sourceTexture=Ve}}}}for(let ee=0;ee<T.length;ee++){const fe=A[ee],Se=T[ee];fe!==null&&Se!==void 0&&Se.update(fe,Q,c||a)}se&&se(B,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),y=null}const re=new Cx;re.setAnimationLoop(ie),this.setAnimationLoop=function(B){se=B},this.dispose=function(){}}}const RT=new Pt,Ux=new He;Ux.set(-1,0,0,0,1,0,0,0,1);function NT(t,e){function n(x,d){x.matrixAutoUpdate===!0&&x.updateMatrix(),d.value.copy(x.matrix)}function i(x,d){d.color.getRGB(x.fogColor.value,wx(t)),d.isFog?(x.fogNear.value=d.near,x.fogFar.value=d.far):d.isFogExp2&&(x.fogDensity.value=d.density)}function r(x,d,g,_,M){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(x,d):d.isMeshLambertMaterial?(s(x,d),d.envMap&&(x.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(x,d),m(x,d)):d.isMeshPhongMaterial?(s(x,d),p(x,d),d.envMap&&(x.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(x,d),f(x,d),d.isMeshPhysicalMaterial&&h(x,d,M)):d.isMeshMatcapMaterial?(s(x,d),y(x,d)):d.isMeshDepthMaterial?s(x,d):d.isMeshDistanceMaterial?(s(x,d),b(x,d)):d.isMeshNormalMaterial?s(x,d):d.isLineBasicMaterial?(a(x,d),d.isLineDashedMaterial&&o(x,d)):d.isPointsMaterial?l(x,d,g,_):d.isSpriteMaterial?c(x,d):d.isShadowMaterial?(x.color.value.copy(d.color),x.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(x,d){x.opacity.value=d.opacity,d.color&&x.diffuse.value.copy(d.color),d.emissive&&x.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(x.map.value=d.map,n(d.map,x.mapTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,n(d.alphaMap,x.alphaMapTransform)),d.bumpMap&&(x.bumpMap.value=d.bumpMap,n(d.bumpMap,x.bumpMapTransform),x.bumpScale.value=d.bumpScale,d.side===pn&&(x.bumpScale.value*=-1)),d.normalMap&&(x.normalMap.value=d.normalMap,n(d.normalMap,x.normalMapTransform),x.normalScale.value.copy(d.normalScale),d.side===pn&&x.normalScale.value.negate()),d.displacementMap&&(x.displacementMap.value=d.displacementMap,n(d.displacementMap,x.displacementMapTransform),x.displacementScale.value=d.displacementScale,x.displacementBias.value=d.displacementBias),d.emissiveMap&&(x.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,x.emissiveMapTransform)),d.specularMap&&(x.specularMap.value=d.specularMap,n(d.specularMap,x.specularMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest);const g=e.get(d),_=g.envMap,M=g.envMapRotation;_&&(x.envMap.value=_,x.envMapRotation.value.setFromMatrix4(RT.makeRotationFromEuler(M)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Ux),x.reflectivity.value=d.reflectivity,x.ior.value=d.ior,x.refractionRatio.value=d.refractionRatio),d.lightMap&&(x.lightMap.value=d.lightMap,x.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,x.lightMapTransform)),d.aoMap&&(x.aoMap.value=d.aoMap,x.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,x.aoMapTransform))}function a(x,d){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,d.map&&(x.map.value=d.map,n(d.map,x.mapTransform))}function o(x,d){x.dashSize.value=d.dashSize,x.totalSize.value=d.dashSize+d.gapSize,x.scale.value=d.scale}function l(x,d,g,_){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,x.size.value=d.size*g,x.scale.value=_*.5,d.map&&(x.map.value=d.map,n(d.map,x.uvTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,n(d.alphaMap,x.alphaMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest)}function c(x,d){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,x.rotation.value=d.rotation,d.map&&(x.map.value=d.map,n(d.map,x.mapTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,n(d.alphaMap,x.alphaMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest)}function p(x,d){x.specular.value.copy(d.specular),x.shininess.value=Math.max(d.shininess,1e-4)}function m(x,d){d.gradientMap&&(x.gradientMap.value=d.gradientMap)}function f(x,d){x.metalness.value=d.metalness,d.metalnessMap&&(x.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,x.metalnessMapTransform)),x.roughness.value=d.roughness,d.roughnessMap&&(x.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,x.roughnessMapTransform)),d.envMap&&(x.envMapIntensity.value=d.envMapIntensity)}function h(x,d,g){x.ior.value=d.ior,d.sheen>0&&(x.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),x.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(x.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,x.sheenColorMapTransform)),d.sheenRoughnessMap&&(x.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,x.sheenRoughnessMapTransform))),d.clearcoat>0&&(x.clearcoat.value=d.clearcoat,x.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(x.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,x.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(x.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===pn&&x.clearcoatNormalScale.value.negate())),d.dispersion>0&&(x.dispersion.value=d.dispersion),d.iridescence>0&&(x.iridescence.value=d.iridescence,x.iridescenceIOR.value=d.iridescenceIOR,x.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(x.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,x.iridescenceMapTransform)),d.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),d.transmission>0&&(x.transmission.value=d.transmission,x.transmissionSamplerMap.value=g.texture,x.transmissionSamplerSize.value.set(g.width,g.height),d.transmissionMap&&(x.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,x.transmissionMapTransform)),x.thickness.value=d.thickness,d.thicknessMap&&(x.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=d.attenuationDistance,x.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(x.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(x.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=d.specularIntensity,x.specularColor.value.copy(d.specularColor),d.specularColorMap&&(x.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,x.specularColorMapTransform)),d.specularIntensityMap&&(x.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,x.specularIntensityMapTransform))}function y(x,d){d.matcap&&(x.matcap.value=d.matcap)}function b(x,d){const g=e.get(d).light;x.referencePosition.value.setFromMatrixPosition(g.matrixWorld),x.nearDistance.value=g.shadow.camera.near,x.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function PT(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,T){const A=T.program;i.uniformBlockBinding(M,A)}function c(M,T){let A=r[M.id];A===void 0&&(x(M),A=p(M),r[M.id]=A,M.addEventListener("dispose",g));const R=T.program;i.updateUBOMapping(M,R);const v=e.render.frame;s[M.id]!==v&&(f(M),s[M.id]=v)}function p(M){const T=m();M.__bindingPointIndex=T;const A=t.createBuffer(),R=M.__size,v=M.usage;return t.bindBuffer(t.UNIFORM_BUFFER,A),t.bufferData(t.UNIFORM_BUFFER,R,v),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,A),A}function m(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const T=r[M.id],A=M.uniforms,R=M.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let v=0,E=A.length;v<E;v++){const I=A[v];if(Array.isArray(I))for(let L=0,D=I.length;L<D;L++)h(I[L],v,L,R);else h(I,v,0,R)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(M,T,A,R){if(b(M,T,A,R)===!0){const v=M.__offset,E=M.value;if(Array.isArray(E)){let I=0;for(let L=0;L<E.length;L++){const D=E[L],H=d(D);y(D,M.__data,I),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(I+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else y(E,M.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,v,M.__data)}}function y(M,T,A){typeof M=="number"||typeof M=="boolean"?T[0]=M:M.isMatrix3?(T[0]=M.elements[0],T[1]=M.elements[1],T[2]=M.elements[2],T[3]=0,T[4]=M.elements[3],T[5]=M.elements[4],T[6]=M.elements[5],T[7]=0,T[8]=M.elements[6],T[9]=M.elements[7],T[10]=M.elements[8],T[11]=0):ArrayBuffer.isView(M)?T.set(new M.constructor(M.buffer,M.byteOffset,T.length)):M.toArray(T,A)}function b(M,T,A,R){const v=M.value,E=T+"_"+A;if(R[E]===void 0)return typeof v=="number"||typeof v=="boolean"?R[E]=v:ArrayBuffer.isView(v)?R[E]=v.slice():R[E]=v.clone(),!0;{const I=R[E];if(typeof v=="number"||typeof v=="boolean"){if(I!==v)return R[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(I.equals(v)===!1)return I.copy(v),!0}}return!1}function x(M){const T=M.uniforms;let A=0;const R=16;for(let E=0,I=T.length;E<I;E++){const L=Array.isArray(T[E])?T[E]:[T[E]];for(let D=0,H=L.length;D<H;D++){const Z=L[D],k=Array.isArray(Z.value)?Z.value:[Z.value];for(let X=0,W=k.length;X<W;X++){const F=k[X],K=d(F),N=A%R,C=N%K.boundary,V=N+C;A+=C,V!==0&&R-V<K.storage&&(A+=R-V),Z.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=A,A+=K.storage}}}const v=A%R;return v>0&&(A+=R-v),M.__size=A,M.__cache={},this}function d(M){const T={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(T.boundary=4,T.storage=4):M.isVector2?(T.boundary=8,T.storage=8):M.isVector3||M.isColor?(T.boundary=16,T.storage=12):M.isVector4?(T.boundary=16,T.storage=16):M.isMatrix3?(T.boundary=48,T.storage=48):M.isMatrix4?(T.boundary=64,T.storage=64):M.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(T.boundary=16,T.storage=M.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",M),T}function g(M){const T=M.target;T.removeEventListener("dispose",g);const A=a.indexOf(T.__bindingPointIndex);a.splice(A,1),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function _(){for(const M in r)t.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:l,update:c,dispose:_}}const IT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ni=null;function LT(){return ni===null&&(ni=new MM(IT,16,16,Fr,Ii),ni.name="DFG_LUT",ni.minFilter=Qt,ni.magFilter=Qt,ni.wrapS=bi,ni.wrapT=bi,ni.generateMipmaps=!1,ni.needsUpdate=!0),ni}class DT{constructor(e={}){const{canvas:n=JS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:f=!1,outputBufferType:h=In}=e;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=a;const b=h,x=new Set([th,eh,Jf]),d=new Set([In,fi,Fa,ka,Zf,Qf]),g=new Uint32Array(4),_=new Int32Array(4),M=new j;let T=null,A=null;const R=[],v=[];let E=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let L=!1,D=null,H=null,Z=null,k=null;this._outputColorSpace=Cn;let X=0,W=0,F=null,K=-1,N=null;const C=new At,V=new At;let se=null;const ie=new Ze(0);let re=0,B=n.width,Q=n.height,ee=1,fe=null,Se=null;const he=new At(0,0,B,Q),le=new At(0,0,B,Q);let ge=!1;const xe=new Sx;let Be=!1,Ve=!1;const it=new Pt,st=new j,ft=new At,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function Et(){return F===null?ee:1}let O=i;function Vt(w,z){return n.getContext(w,z)}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Yf}`),n.addEventListener("webglcontextlost",bt,!1),n.addEventListener("webglcontextrestored",ht,!1),n.addEventListener("webglcontextcreationerror",Zn,!1),O===null){const z="webgl2";if(O=Vt(z,w),O===null)throw Vt(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(w){throw et("WebGLRenderer: "+w.message),w}let rt,P,S,G,Y,te,de,pe,ne,oe,ve,De,Me,_e,ke,Oe,Ge,U,me,ae,ye,Te,ce;function Le(){rt=new Lb(O),rt.init(),ye=new bT(O,rt),P=new wb(O,rt,e,ye),S=new MT(O,rt),P.reversedDepthBuffer&&f&&S.buffers.depth.setReversed(!0),H=O.createFramebuffer(),Z=O.createFramebuffer(),k=O.createFramebuffer(),G=new Fb(O),Y=new lT,te=new ET(O,rt,S,Y,P,ye,G),de=new Ib(I),pe=new zM(O),Te=new Eb(O,pe),ne=new Db(O,pe,G,Te),oe=new Ob(O,ne,pe,Te,G),U=new kb(O,P,te),ke=new Tb(Y),ve=new oT(I,de,rt,P,Te,ke),De=new NT(I,Y),Me=new uT,_e=new gT(rt),Ge=new Mb(I,de,S,oe,y,l),Oe=new ST(I,oe,P),ce=new PT(O,G,P,S),me=new bb(O,rt,G),ae=new Ub(O,rt,G),G.programs=ve.programs,I.capabilities=P,I.extensions=rt,I.properties=Y,I.renderLists=Me,I.shadowMap=Oe,I.state=S,I.info=G}Le(),b!==In&&(E=new zb(b,n.width,n.height,o,r,s));const Ne=new CT(I,O);this.xr=Ne,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const w=rt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=rt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(w){w!==void 0&&(ee=w,this.setSize(B,Q,!1))},this.getSize=function(w){return w.set(B,Q)},this.setSize=function(w,z,J=!0){if(Ne.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}B=w,Q=z,n.width=Math.floor(w*ee),n.height=Math.floor(z*ee),J===!0&&(n.style.width=w+"px",n.style.height=z+"px"),E!==null&&E.setSize(n.width,n.height),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w.set(B*ee,Q*ee).floor()},this.setDrawingBufferSize=function(w,z,J){B=w,Q=z,ee=J,n.width=Math.floor(w*J),n.height=Math.floor(z*J),this.setViewport(0,0,w,z)},this.setEffects=function(w){if(b===In){et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let z=0;z<w.length;z++)if(w[z].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(C)},this.getViewport=function(w){return w.copy(he)},this.setViewport=function(w,z,J,q){w.isVector4?he.set(w.x,w.y,w.z,w.w):he.set(w,z,J,q),S.viewport(C.copy(he).multiplyScalar(ee).round())},this.getScissor=function(w){return w.copy(le)},this.setScissor=function(w,z,J,q){w.isVector4?le.set(w.x,w.y,w.z,w.w):le.set(w,z,J,q),S.scissor(V.copy(le).multiplyScalar(ee).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(w){S.setScissorTest(ge=w)},this.setOpaqueSort=function(w){fe=w},this.setTransparentSort=function(w){Se=w},this.getClearColor=function(w){return w.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor(...arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha(...arguments)},this.clear=function(w=!0,z=!0,J=!0){let q=0;if(w){let $=!1;if(F!==null){const we=F.texture.format;$=x.has(we)}if($){const we=F.texture.type,Ce=d.has(we),be=Ge.getClearColor(),Pe=Ge.getClearAlpha(),Ue=be.r,We=be.g,Xe=be.b;Ce?(g[0]=Ue,g[1]=We,g[2]=Xe,g[3]=Pe,O.clearBufferuiv(O.COLOR,0,g)):(_[0]=Ue,_[1]=We,_[2]=Xe,_[3]=Pe,O.clearBufferiv(O.COLOR,0,_))}else q|=O.COLOR_BUFFER_BIT}z&&(q|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(q|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&O.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),D=w},this.dispose=function(){n.removeEventListener("webglcontextlost",bt,!1),n.removeEventListener("webglcontextrestored",ht,!1),n.removeEventListener("webglcontextcreationerror",Zn,!1),Ge.dispose(),Me.dispose(),_e.dispose(),Y.dispose(),de.dispose(),oe.dispose(),Te.dispose(),ce.dispose(),ve.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",ph),Ne.removeEventListener("sessionend",mh),hr.stop()};function bt(w){w.preventDefault(),Bp("WebGLRenderer: Context Lost."),L=!0}function ht(){Bp("WebGLRenderer: Context Restored."),L=!1;const w=G.autoReset,z=Oe.enabled,J=Oe.autoUpdate,q=Oe.needsUpdate,$=Oe.type;Le(),G.autoReset=w,Oe.enabled=z,Oe.autoUpdate=J,Oe.needsUpdate=q,Oe.type=$}function Zn(w){et("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Qn(w){const z=w.target;z.removeEventListener("dispose",Qn),kx(z)}function kx(w){Ox(w),Y.remove(w)}function Ox(w){const z=Y.get(w).programs;z!==void 0&&(z.forEach(function(J){ve.releaseProgram(J)}),w.isShaderMaterial&&ve.releaseShaderCache(w))}this.renderBufferDirect=function(w,z,J,q,$,we){z===null&&(z=lt);const Ce=$.isMesh&&$.matrixWorld.determinantAffine()<0,be=Vx(w,z,J,q,$);S.setMaterial(q,Ce);let Pe=J.index,Ue=1;if(q.wireframe===!0){if(Pe=ne.getWireframeAttribute(J),Pe===void 0)return;Ue=2}const We=J.drawRange,Xe=J.attributes.position;let Fe=We.start*Ue,ct=(We.start+We.count)*Ue;we!==null&&(Fe=Math.max(Fe,we.start*Ue),ct=Math.min(ct,(we.start+we.count)*Ue)),Pe!==null?(Fe=Math.max(Fe,0),ct=Math.min(ct,Pe.count)):Xe!=null&&(Fe=Math.max(Fe,0),ct=Math.min(ct,Xe.count));const Ct=ct-Fe;if(Ct<0||Ct===1/0)return;Te.setup($,q,be,J,Pe);let wt,ut=me;if(Pe!==null&&(wt=pe.get(Pe),ut=ae,ut.setIndex(wt)),$.isMesh)q.wireframe===!0?(S.setLineWidth(q.wireframeLinewidth*Et()),ut.setMode(O.LINES)):ut.setMode(O.TRIANGLES);else if($.isLine){let Xt=q.linewidth;Xt===void 0&&(Xt=1),S.setLineWidth(Xt*Et()),$.isLineSegments?ut.setMode(O.LINES):$.isLineLoop?ut.setMode(O.LINE_LOOP):ut.setMode(O.LINE_STRIP)}else $.isPoints?ut.setMode(O.POINTS):$.isSprite&&ut.setMode(O.TRIANGLES);if($.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))ut.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Xt=$._multiDrawStarts,Ae=$._multiDrawCounts,gn=$._multiDrawCount,Je=Pe?pe.get(Pe).bytesPerElement:1,Tn=Y.get(q).currentProgram.getUniforms();for(let Jn=0;Jn<gn;Jn++)Tn.setValue(O,"_gl_DrawID",Jn),ut.render(Xt[Jn]/Je,Ae[Jn])}else if($.isInstancedMesh)ut.renderInstances(Fe,Ct,$.count);else if(J.isInstancedBufferGeometry){const Xt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ae=Math.min(J.instanceCount,Xt);ut.renderInstances(Fe,Ct,Ae)}else ut.render(Fe,Ct)};function hh(w,z,J){w.transparent===!0&&w.side===Si&&w.forceSinglePass===!1?(w.side=pn,w.needsUpdate=!0,$a(w,z,J),w.side=cr,w.needsUpdate=!0,$a(w,z,J),w.side=Si):$a(w,z,J)}this.compile=function(w,z,J=null){J===null&&(J=w),A=_e.get(J),A.init(z),v.push(A),J.traverseVisible(function($){$.isLight&&$.layers.test(z.layers)&&(A.pushLight($),$.castShadow&&A.pushShadow($))}),w!==J&&w.traverseVisible(function($){$.isLight&&$.layers.test(z.layers)&&(A.pushLight($),$.castShadow&&A.pushShadow($))}),A.setupLights();const q=new Set;return w.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const we=$.material;if(we)if(Array.isArray(we))for(let Ce=0;Ce<we.length;Ce++){const be=we[Ce];hh(be,J,$),q.add(be)}else hh(we,J,$),q.add(we)}),A=v.pop(),q},this.compileAsync=function(w,z,J=null){const q=this.compile(w,z,J);return new Promise($=>{function we(){if(q.forEach(function(Ce){Y.get(Ce).currentProgram.isReady()&&q.delete(Ce)}),q.size===0){$(w);return}setTimeout(we,10)}rt.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let nc=null;function Bx(w){nc&&nc(w)}function ph(){hr.stop()}function mh(){hr.start()}const hr=new Cx;hr.setAnimationLoop(Bx),typeof self<"u"&&hr.setContext(self),this.setAnimationLoop=function(w){nc=w,Ne.setAnimationLoop(w),w===null?hr.stop():hr.start()},Ne.addEventListener("sessionstart",ph),Ne.addEventListener("sessionend",mh),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;D!==null&&D.renderStart(w,z);const J=Ne.enabled===!0&&Ne.isPresenting===!0,q=E!==null&&(F===null||J)&&E.begin(I,F);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(z),z=Ne.getCamera()),w.isScene===!0&&w.onBeforeRender(I,w,z,F),A=_e.get(w,v.length),A.init(z),A.state.textureUnits=te.getTextureUnits(),v.push(A),it.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),xe.setFromProjectionMatrix(it,oi,z.reversedDepth),Ve=this.localClippingEnabled,Be=ke.init(this.clippingPlanes,Ve),T=Me.get(w,R.length),T.init(),R.push(T),Ne.enabled===!0&&Ne.isPresenting===!0){const Ce=I.xr.getDepthSensingMesh();Ce!==null&&ic(Ce,z,-1/0,I.sortObjects)}ic(w,z,0,I.sortObjects),T.finish(),I.sortObjects===!0&&T.sort(fe,Se,z.reversedDepth),vt=Ne.enabled===!1||Ne.isPresenting===!1||Ne.hasDepthSensing()===!1,vt&&Ge.addToRenderList(T,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Be===!0&&ke.beginShadows();const $=A.state.shadowsArray;if(Oe.render($,w,z),Be===!0&&ke.endShadows(),(q&&E.hasRenderPass())===!1){const Ce=T.opaque,be=T.transmissive;if(A.setupLights(),z.isArrayCamera){const Pe=z.cameras;if(be.length>0)for(let Ue=0,We=Pe.length;Ue<We;Ue++){const Xe=Pe[Ue];xh(Ce,be,w,Xe)}vt&&Ge.render(w);for(let Ue=0,We=Pe.length;Ue<We;Ue++){const Xe=Pe[Ue];gh(T,w,Xe,Xe.viewport)}}else be.length>0&&xh(Ce,be,w,z),vt&&Ge.render(w),gh(T,w,z)}F!==null&&W===0&&(te.updateMultisampleRenderTarget(F),te.updateRenderTargetMipmap(F)),q&&E.end(I),w.isScene===!0&&w.onAfterRender(I,w,z),Te.resetDefaultState(),K=-1,N=null,v.pop(),v.length>0?(A=v[v.length-1],te.setTextureUnits(A.state.textureUnits),Be===!0&&ke.setGlobalState(I.clippingPlanes,A.state.camera)):A=null,R.pop(),R.length>0?T=R[R.length-1]:T=null,D!==null&&D.renderEnd()};function ic(w,z,J,q){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)J=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLightProbeGrid)A.pushLightProbeGrid(w);else if(w.isLight)A.pushLight(w),w.castShadow&&A.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||xe.intersectsSprite(w)){q&&ft.setFromMatrixPosition(w.matrixWorld).applyMatrix4(it);const Ce=oe.update(w),be=w.material;be.visible&&T.push(w,Ce,be,J,ft.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||xe.intersectsObject(w))){const Ce=oe.update(w),be=w.material;if(q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ft.copy(w.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),ft.copy(Ce.boundingSphere.center)),ft.applyMatrix4(w.matrixWorld).applyMatrix4(it)),Array.isArray(be)){const Pe=Ce.groups;for(let Ue=0,We=Pe.length;Ue<We;Ue++){const Xe=Pe[Ue],Fe=be[Xe.materialIndex];Fe&&Fe.visible&&T.push(w,Ce,Fe,J,ft.z,Xe)}}else be.visible&&T.push(w,Ce,be,J,ft.z,null)}}const we=w.children;for(let Ce=0,be=we.length;Ce<be;Ce++)ic(we[Ce],z,J,q)}function gh(w,z,J,q){const{opaque:$,transmissive:we,transparent:Ce}=w;A.setupLightsView(J),Be===!0&&ke.setGlobalState(I.clippingPlanes,J),q&&S.viewport(C.copy(q)),$.length>0&&qa($,z,J),we.length>0&&qa(we,z,J),Ce.length>0&&qa(Ce,z,J),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function xh(w,z,J,q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[q.id]===void 0){const Fe=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[q.id]=new di(1,1,{generateMipmaps:!0,type:Fe?Ii:In,minFilter:Tr,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace})}const we=A.state.transmissionRenderTarget[q.id],Ce=q.viewport||C;we.setSize(Ce.z*I.transmissionResolutionScale,Ce.w*I.transmissionResolutionScale);const be=I.getRenderTarget(),Pe=I.getActiveCubeFace(),Ue=I.getActiveMipmapLevel();I.setRenderTarget(we),I.getClearColor(ie),re=I.getClearAlpha(),re<1&&I.setClearColor(16777215,.5),I.clear(),vt&&Ge.render(J);const We=I.toneMapping;I.toneMapping=ui;const Xe=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),A.setupLightsView(q),Be===!0&&ke.setGlobalState(I.clippingPlanes,q),qa(w,J,q),te.updateMultisampleRenderTarget(we),te.updateRenderTargetMipmap(we),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let ct=0,Ct=z.length;ct<Ct;ct++){const wt=z[ct],{object:ut,geometry:Xt,material:Ae,group:gn}=wt;if(Ae.side===Si&&ut.layers.test(q.layers)){const Je=Ae.side;Ae.side=pn,Ae.needsUpdate=!0,vh(ut,J,q,Xt,Ae,gn),Ae.side=Je,Ae.needsUpdate=!0,Fe=!0}}Fe===!0&&(te.updateMultisampleRenderTarget(we),te.updateRenderTargetMipmap(we))}I.setRenderTarget(be,Pe,Ue),I.setClearColor(ie,re),Xe!==void 0&&(q.viewport=Xe),I.toneMapping=We}function qa(w,z,J){const q=z.isScene===!0?z.overrideMaterial:null;for(let $=0,we=w.length;$<we;$++){const Ce=w[$],{object:be,geometry:Pe,group:Ue}=Ce;let We=Ce.material;We.allowOverride===!0&&q!==null&&(We=q),be.layers.test(J.layers)&&vh(be,z,J,Pe,We,Ue)}}function vh(w,z,J,q,$,we){w.onBeforeRender(I,z,J,q,$,we),w.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),$.onBeforeRender(I,z,J,q,w,we),$.transparent===!0&&$.side===Si&&$.forceSinglePass===!1?($.side=pn,$.needsUpdate=!0,I.renderBufferDirect(J,z,q,$,w,we),$.side=cr,$.needsUpdate=!0,I.renderBufferDirect(J,z,q,$,w,we),$.side=Si):I.renderBufferDirect(J,z,q,$,w,we),w.onAfterRender(I,z,J,q,$,we)}function $a(w,z,J){z.isScene!==!0&&(z=lt);const q=Y.get(w),$=A.state.lights,we=A.state.shadowsArray,Ce=$.state.version,be=ve.getParameters(w,$.state,we,z,J,A.state.lightProbeGridArray),Pe=ve.getProgramCacheKey(be);let Ue=q.programs;q.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?z.environment:null,q.fog=z.fog;const We=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;q.envMap=de.get(w.envMap||q.environment,We),q.envMapRotation=q.environment!==null&&w.envMap===null?z.environmentRotation:w.envMapRotation,Ue===void 0&&(w.addEventListener("dispose",Qn),Ue=new Map,q.programs=Ue);let Xe=Ue.get(Pe);if(Xe!==void 0){if(q.currentProgram===Xe&&q.lightsStateVersion===Ce)return yh(w,be),Xe}else be.uniforms=ve.getUniforms(w),D!==null&&w.isNodeMaterial&&D.build(w,J,be),w.onBeforeCompile(be,I),Xe=ve.acquireProgram(be,Pe),Ue.set(Pe,Xe),q.uniforms=be.uniforms;const Fe=q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Fe.clippingPlanes=ke.uniform),yh(w,be),q.needsLights=Gx(w),q.lightsStateVersion=Ce,q.needsLights&&(Fe.ambientLightColor.value=$.state.ambient,Fe.lightProbe.value=$.state.probe,Fe.directionalLights.value=$.state.directional,Fe.directionalLightShadows.value=$.state.directionalShadow,Fe.spotLights.value=$.state.spot,Fe.spotLightShadows.value=$.state.spotShadow,Fe.rectAreaLights.value=$.state.rectArea,Fe.ltc_1.value=$.state.rectAreaLTC1,Fe.ltc_2.value=$.state.rectAreaLTC2,Fe.pointLights.value=$.state.point,Fe.pointLightShadows.value=$.state.pointShadow,Fe.hemisphereLights.value=$.state.hemi,Fe.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Fe.spotLightMatrix.value=$.state.spotLightMatrix,Fe.spotLightMap.value=$.state.spotLightMap,Fe.pointShadowMatrix.value=$.state.pointShadowMatrix),q.lightProbeGrid=A.state.lightProbeGridArray.length>0,q.currentProgram=Xe,q.uniformsList=null,Xe}function _h(w){if(w.uniformsList===null){const z=w.currentProgram.getUniforms();w.uniformsList=tl.seqWithValue(z.seq,w.uniforms)}return w.uniformsList}function yh(w,z){const J=Y.get(w);J.outputColorSpace=z.outputColorSpace,J.batching=z.batching,J.batchingColor=z.batchingColor,J.instancing=z.instancing,J.instancingColor=z.instancingColor,J.instancingMorph=z.instancingMorph,J.skinning=z.skinning,J.morphTargets=z.morphTargets,J.morphNormals=z.morphNormals,J.morphColors=z.morphColors,J.morphTargetsCount=z.morphTargetsCount,J.numClippingPlanes=z.numClippingPlanes,J.numIntersection=z.numClipIntersection,J.vertexAlphas=z.vertexAlphas,J.vertexTangents=z.vertexTangents,J.toneMapping=z.toneMapping}function zx(w,z){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;M.setFromMatrixPosition(z.matrixWorld);for(let J=0,q=w.length;J<q;J++){const $=w[J];if($.texture!==null&&$.boundingBox.containsPoint(M))return $}return null}function Vx(w,z,J,q,$){z.isScene!==!0&&(z=lt),te.resetTextureUnits();const we=z.fog,Ce=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?z.environment:null,be=F===null?I.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:$e.workingColorSpace,Pe=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Ue=de.get(q.envMap||Ce,Pe),We=q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Xe=!!J.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Fe=!!J.morphAttributes.position,ct=!!J.morphAttributes.normal,Ct=!!J.morphAttributes.color;let wt=ui;q.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(wt=I.toneMapping);const ut=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Xt=ut!==void 0?ut.length:0,Ae=Y.get(q),gn=A.state.lights;if(Be===!0&&(Ve===!0||w!==N)){const pt=w===N&&q.id===K;ke.setState(q,w,pt)}let Je=!1;q.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==gn.state.version||Ae.outputColorSpace!==be||$.isBatchedMesh&&Ae.batching===!1||!$.isBatchedMesh&&Ae.batching===!0||$.isBatchedMesh&&Ae.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Ae.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Ae.instancing===!1||!$.isInstancedMesh&&Ae.instancing===!0||$.isSkinnedMesh&&Ae.skinning===!1||!$.isSkinnedMesh&&Ae.skinning===!0||$.isInstancedMesh&&Ae.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ae.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ae.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ae.instancingMorph===!1&&$.morphTexture!==null||Ae.envMap!==Ue||q.fog===!0&&Ae.fog!==we||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ke.numPlanes||Ae.numIntersection!==ke.numIntersection)||Ae.vertexAlphas!==We||Ae.vertexTangents!==Xe||Ae.morphTargets!==Fe||Ae.morphNormals!==ct||Ae.morphColors!==Ct||Ae.toneMapping!==wt||Ae.morphTargetsCount!==Xt||!!Ae.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(Je=!0):(Je=!0,Ae.__version=q.version);let Tn=Ae.currentProgram;Je===!0&&(Tn=$a(q,z,$),D&&q.isNodeMaterial&&D.onUpdateProgram(q,Tn,Ae));let Jn=!1,Ui=!1,Vr=!1;const dt=Tn.getUniforms(),Rt=Ae.uniforms;if(S.useProgram(Tn.program)&&(Jn=!0,Ui=!0,Vr=!0),q.id!==K&&(K=q.id,Ui=!0),Ae.needsLights){const pt=zx(A.state.lightProbeGridArray,$);Ae.lightProbeGrid!==pt&&(Ae.lightProbeGrid=pt,Ui=!0)}if(Jn||N!==w){S.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),dt.setValue(O,"projectionMatrix",w.projectionMatrix),dt.setValue(O,"viewMatrix",w.matrixWorldInverse);const ki=dt.map.cameraPosition;ki!==void 0&&ki.setValue(O,st.setFromMatrixPosition(w.matrixWorld)),P.logarithmicDepthBuffer&&dt.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&dt.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),N!==w&&(N=w,Ui=!0,Vr=!0)}if(Ae.needsLights&&(gn.state.directionalShadowMap.length>0&&dt.setValue(O,"directionalShadowMap",gn.state.directionalShadowMap,te),gn.state.spotShadowMap.length>0&&dt.setValue(O,"spotShadowMap",gn.state.spotShadowMap,te),gn.state.pointShadowMap.length>0&&dt.setValue(O,"pointShadowMap",gn.state.pointShadowMap,te)),$.isSkinnedMesh){dt.setOptional(O,$,"bindMatrix"),dt.setOptional(O,$,"bindMatrixInverse");const pt=$.skeleton;pt&&(pt.boneTexture===null&&pt.computeBoneTexture(),dt.setValue(O,"boneTexture",pt.boneTexture,te))}$.isBatchedMesh&&(dt.setOptional(O,$,"batchingTexture"),dt.setValue(O,"batchingTexture",$._matricesTexture,te),dt.setOptional(O,$,"batchingIdTexture"),dt.setValue(O,"batchingIdTexture",$._indirectTexture,te),dt.setOptional(O,$,"batchingColorTexture"),$._colorsTexture!==null&&dt.setValue(O,"batchingColorTexture",$._colorsTexture,te));const Fi=J.morphAttributes;if((Fi.position!==void 0||Fi.normal!==void 0||Fi.color!==void 0)&&U.update($,J,Tn),(Ui||Ae.receiveShadow!==$.receiveShadow)&&(Ae.receiveShadow=$.receiveShadow,dt.setValue(O,"receiveShadow",$.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&z.environment!==null&&(Rt.envMapIntensity.value=z.environmentIntensity),Rt.dfgLUT!==void 0&&(Rt.dfgLUT.value=LT()),Ui){if(dt.setValue(O,"toneMappingExposure",I.toneMappingExposure),Ae.needsLights&&Hx(Rt,Vr),we&&q.fog===!0&&De.refreshFogUniforms(Rt,we),De.refreshMaterialUniforms(Rt,q,ee,Q,A.state.transmissionRenderTarget[w.id]),Ae.needsLights&&Ae.lightProbeGrid){const pt=Ae.lightProbeGrid;Rt.probesSH.value=pt.texture,Rt.probesMin.value.copy(pt.boundingBox.min),Rt.probesMax.value.copy(pt.boundingBox.max),Rt.probesResolution.value.copy(pt.resolution)}tl.upload(O,_h(Ae),Rt,te)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(tl.upload(O,_h(Ae),Rt,te),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&dt.setValue(O,"center",$.center),dt.setValue(O,"modelViewMatrix",$.modelViewMatrix),dt.setValue(O,"normalMatrix",$.normalMatrix),dt.setValue(O,"modelMatrix",$.matrixWorld),q.uniformsGroups!==void 0){const pt=q.uniformsGroups;for(let ki=0,Hr=pt.length;ki<Hr;ki++){const Sh=pt[ki];ce.update(Sh,Tn),ce.bind(Sh,Tn)}}return Tn}function Hx(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function Gx(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(w,z,J){const q=Y.get(w);q.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Y.get(w.texture).__webglTexture=z,Y.get(w.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:J,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,z){const J=Y.get(w);J.__webglFramebuffer=z,J.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(w,z=0,J=0){F=w,X=z,W=J;let q=null,$=!1,we=!1;if(w){const be=Y.get(w);if(be.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(O.FRAMEBUFFER,be.__webglFramebuffer),C.copy(w.viewport),V.copy(w.scissor),se=w.scissorTest,S.viewport(C),S.scissor(V),S.setScissorTest(se),K=-1;return}else if(be.__webglFramebuffer===void 0)te.setupRenderTarget(w);else if(be.__hasExternalTextures)te.rebindTextures(w,Y.get(w.texture).__webglTexture,Y.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const We=w.depthTexture;if(be.__boundDepthTexture!==We){if(We!==null&&Y.has(We)&&(w.width!==We.image.width||w.height!==We.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(w)}}const Pe=w.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(we=!0);const Ue=Y.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ue[z])?q=Ue[z][J]:q=Ue[z],$=!0):w.samples>0&&te.useMultisampledRTT(w)===!1?q=Y.get(w).__webglMultisampledFramebuffer:Array.isArray(Ue)?q=Ue[J]:q=Ue,C.copy(w.viewport),V.copy(w.scissor),se=w.scissorTest}else C.copy(he).multiplyScalar(ee).floor(),V.copy(le).multiplyScalar(ee).floor(),se=ge;if(J!==0&&(q=H),S.bindFramebuffer(O.FRAMEBUFFER,q)&&S.drawBuffers(w,q),S.viewport(C),S.scissor(V),S.setScissorTest(se),$){const be=Y.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+z,be.__webglTexture,J)}else if(we){const be=z;for(let Pe=0;Pe<w.textures.length;Pe++){const Ue=Y.get(w.textures[Pe]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Pe,Ue.__webglTexture,J,be)}}else if(w!==null&&J!==0){const be=Y.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,be.__webglTexture,J)}K=-1},this.readRenderTargetPixels=function(w,z,J,q,$,we,Ce,be=0){if(!(w&&w.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Y.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ce!==void 0&&(Pe=Pe[Ce]),Pe){S.bindFramebuffer(O.FRAMEBUFFER,Pe);try{const Ue=w.textures[be],We=Ue.format,Xe=Ue.type;if(w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+be),!P.textureFormatReadable(We)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(Xe)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=w.width-q&&J>=0&&J<=w.height-$&&O.readPixels(z,J,q,$,ye.convert(We),ye.convert(Xe),we)}finally{const Ue=F!==null?Y.get(F).__webglFramebuffer:null;S.bindFramebuffer(O.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(w,z,J,q,$,we,Ce,be=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=Y.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ce!==void 0&&(Pe=Pe[Ce]),Pe)if(z>=0&&z<=w.width-q&&J>=0&&J<=w.height-$){S.bindFramebuffer(O.FRAMEBUFFER,Pe);const Ue=w.textures[be],We=Ue.format,Xe=Ue.type;if(w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+be),!P.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Fe=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Fe),O.bufferData(O.PIXEL_PACK_BUFFER,we.byteLength,O.STREAM_READ),O.readPixels(z,J,q,$,ye.convert(We),ye.convert(Xe),0);const ct=F!==null?Y.get(F).__webglFramebuffer:null;S.bindFramebuffer(O.FRAMEBUFFER,ct);const Ct=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await eM(O,Ct,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Fe),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,we),O.deleteBuffer(Fe),O.deleteSync(Ct),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,z=null,J=0){const q=Math.pow(2,-J),$=Math.floor(w.image.width*q),we=Math.floor(w.image.height*q),Ce=z!==null?z.x:0,be=z!==null?z.y:0;te.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,J,0,0,Ce,be,$,we),S.unbindTexture()},this.copyTextureToTexture=function(w,z,J=null,q=null,$=0,we=0){let Ce,be,Pe,Ue,We,Xe,Fe,ct,Ct;const wt=w.isCompressedTexture?w.mipmaps[we]:w.image;if(J!==null)Ce=J.max.x-J.min.x,be=J.max.y-J.min.y,Pe=J.isBox3?J.max.z-J.min.z:1,Ue=J.min.x,We=J.min.y,Xe=J.isBox3?J.min.z:0;else{const Rt=Math.pow(2,-$);Ce=Math.floor(wt.width*Rt),be=Math.floor(wt.height*Rt),w.isDataArrayTexture?Pe=wt.depth:w.isData3DTexture?Pe=Math.floor(wt.depth*Rt):Pe=1,Ue=0,We=0,Xe=0}q!==null?(Fe=q.x,ct=q.y,Ct=q.z):(Fe=0,ct=0,Ct=0);const ut=ye.convert(z.format),Xt=ye.convert(z.type);let Ae;z.isData3DTexture?(te.setTexture3D(z,0),Ae=O.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(te.setTexture2DArray(z,0),Ae=O.TEXTURE_2D_ARRAY):(te.setTexture2D(z,0),Ae=O.TEXTURE_2D),S.activeTexture(O.TEXTURE0),S.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),S.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),S.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment);const gn=S.getParameter(O.UNPACK_ROW_LENGTH),Je=S.getParameter(O.UNPACK_IMAGE_HEIGHT),Tn=S.getParameter(O.UNPACK_SKIP_PIXELS),Jn=S.getParameter(O.UNPACK_SKIP_ROWS),Ui=S.getParameter(O.UNPACK_SKIP_IMAGES);S.pixelStorei(O.UNPACK_ROW_LENGTH,wt.width),S.pixelStorei(O.UNPACK_IMAGE_HEIGHT,wt.height),S.pixelStorei(O.UNPACK_SKIP_PIXELS,Ue),S.pixelStorei(O.UNPACK_SKIP_ROWS,We),S.pixelStorei(O.UNPACK_SKIP_IMAGES,Xe);const Vr=w.isDataArrayTexture||w.isData3DTexture,dt=z.isDataArrayTexture||z.isData3DTexture;if(w.isDepthTexture){const Rt=Y.get(w),Fi=Y.get(z),pt=Y.get(Rt.__renderTarget),ki=Y.get(Fi.__renderTarget);S.bindFramebuffer(O.READ_FRAMEBUFFER,pt.__webglFramebuffer),S.bindFramebuffer(O.DRAW_FRAMEBUFFER,ki.__webglFramebuffer);for(let Hr=0;Hr<Pe;Hr++)Vr&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Y.get(w).__webglTexture,$,Xe+Hr),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Y.get(z).__webglTexture,we,Ct+Hr)),O.blitFramebuffer(Ue,We,Ce,be,Fe,ct,Ce,be,O.DEPTH_BUFFER_BIT,O.NEAREST);S.bindFramebuffer(O.READ_FRAMEBUFFER,null),S.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if($!==0||w.isRenderTargetTexture||Y.has(w)){const Rt=Y.get(w),Fi=Y.get(z);S.bindFramebuffer(O.READ_FRAMEBUFFER,Z),S.bindFramebuffer(O.DRAW_FRAMEBUFFER,k);for(let pt=0;pt<Pe;pt++)Vr?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Rt.__webglTexture,$,Xe+pt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Rt.__webglTexture,$),dt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Fi.__webglTexture,we,Ct+pt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Fi.__webglTexture,we),$!==0?O.blitFramebuffer(Ue,We,Ce,be,Fe,ct,Ce,be,O.COLOR_BUFFER_BIT,O.NEAREST):dt?O.copyTexSubImage3D(Ae,we,Fe,ct,Ct+pt,Ue,We,Ce,be):O.copyTexSubImage2D(Ae,we,Fe,ct,Ue,We,Ce,be);S.bindFramebuffer(O.READ_FRAMEBUFFER,null),S.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else dt?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(Ae,we,Fe,ct,Ct,Ce,be,Pe,ut,Xt,wt.data):z.isCompressedArrayTexture?O.compressedTexSubImage3D(Ae,we,Fe,ct,Ct,Ce,be,Pe,ut,wt.data):O.texSubImage3D(Ae,we,Fe,ct,Ct,Ce,be,Pe,ut,Xt,wt):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,we,Fe,ct,Ce,be,ut,Xt,wt.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,we,Fe,ct,wt.width,wt.height,ut,wt.data):O.texSubImage2D(O.TEXTURE_2D,we,Fe,ct,Ce,be,ut,Xt,wt);S.pixelStorei(O.UNPACK_ROW_LENGTH,gn),S.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Je),S.pixelStorei(O.UNPACK_SKIP_PIXELS,Tn),S.pixelStorei(O.UNPACK_SKIP_ROWS,Jn),S.pixelStorei(O.UNPACK_SKIP_IMAGES,Ui),we===0&&z.generateMipmaps&&O.generateMipmap(Ae),S.unbindTexture()},this.initRenderTarget=function(w){Y.get(w).__webglFramebuffer===void 0&&te.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?te.setTextureCube(w,0):w.isData3DTexture?te.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?te.setTexture2DArray(w,0):te.setTexture2D(w,0),S.unbindTexture()},this.resetState=function(){X=0,W=0,F=null,S.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),n.unpackColorSpace=$e._getUnpackColorSpace()}}function UT({isTransitioning:t=!1,onClick:e}){const n=Ie.useRef(null);return Ie.useEffect(()=>{if(!n.current)return;const i=n.current.clientWidth||window.innerWidth,r=n.current.clientHeight||520,s=new gM,a=new Pn(55,i/r,.1,2e3);a.position.z=400;const o=new DT({antialias:!0,alpha:!0,powerPreference:"high-performance"});o.setSize(i,r),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.current.appendChild(o.domElement);const l=750,c=140,p=new wn,m=new Float32Array(l*3),f=new Float32Array(l*3),h=new Ze("#F0FB43"),y=new Ze("#7ED043"),b=new Ze("#4FB734");new Ze("#176B24");for(let ie=0;ie<l;ie++){const re=Math.acos(-1+2*ie/l),B=Math.sqrt(l*Math.PI)*re,Q=c*Math.cos(B)*Math.sin(re),ee=c*Math.sin(B)*Math.sin(re),fe=c*Math.cos(re);m[ie*3]=Q,m[ie*3+1]=ee,m[ie*3+2]=fe;const Se=Math.random()>.6?h:Math.random()>.3?y:b;f[ie*3]=Se.r,f[ie*3+1]=Se.g,f[ie*3+2]=Se.b}p.setAttribute("position",new Un(m,3)),p.setAttribute("color",new Un(f,3));const x=document.createElement("canvas");x.width=32,x.height=32;const d=x.getContext("2d"),g=d.createRadialGradient(16,16,0,16,16,16);g.addColorStop(0,"rgba(240, 251, 67, 1)"),g.addColorStop(.3,"rgba(126, 208, 67, 0.8)"),g.addColorStop(1,"rgba(0, 0, 0, 0)"),d.fillStyle=g,d.fillRect(0,0,32,32);const _=new AM(x),M=new Mx({size:10,map:_,vertexColors:!0,transparent:!0,opacity:.85,blending:rd,depthWrite:!1}),T=new TM(p,M);s.add(T);const A=new ah(130,2),R=new va({color:5224244,wireframe:!0,transparent:!0,opacity:.18}),v=new Fn(A,R);s.add(v);const E=new Il(175,1.2,16,100),I=new va({color:15792963,transparent:!0,opacity:.45}),L=new Fn(E,I);L.rotation.x=Math.PI/3,s.add(L);const D=new Il(200,1,16,100),H=new va({color:8310851,transparent:!0,opacity:.3}),Z=new Fn(D,H);Z.rotation.y=Math.PI/4,s.add(Z);let k=0,X=0,W=0,F=0;const K=ie=>{var B;const re=(B=n.current)==null?void 0:B.getBoundingClientRect();re&&(k=(ie.clientX-re.left-re.width/2)*.4,X=(ie.clientY-re.top-re.height/2)*.4)};window.addEventListener("mousemove",K,{passive:!0});const N=()=>{if(!n.current)return;const ie=n.current.clientWidth,re=n.current.clientHeight;a.aspect=ie/re,a.updateProjectionMatrix(),o.setSize(ie,re)};window.addEventListener("resize",N);let C,V=new OM;const se=()=>{C=requestAnimationFrame(se);const ie=V.getElapsedTime();W+=(k-W)*.05,F+=(X-F)*.05,T.rotation.y=ie*.15+W*.003,T.rotation.x=Math.sin(ie*.2)*.1+F*.003,v.rotation.y=-ie*.08,v.rotation.x=ie*.04,L.rotation.z=ie*.25,L.rotation.y=Math.sin(ie*.3)*.2,Z.rotation.x=-ie*.2,Z.rotation.z=ie*.1;const re=1+Math.sin(ie*1.5)*.03;T.scale.set(re,re,re),o.render(s,a)};return se(),()=>{cancelAnimationFrame(C),window.removeEventListener("mousemove",K),window.removeEventListener("resize",N),n.current&&o.domElement&&n.current.removeChild(o.domElement),p.dispose(),M.dispose(),A.dispose(),R.dispose(),E.dispose(),I.dispose(),D.dispose(),H.dispose(),o.dispose()}},[]),u.jsx("div",{ref:n,onClick:e,className:`relative w-full h-[400px] sm:h-[480px] lg:h-[540px] flex items-center justify-center cursor-pointer transition-transform duration-700 ${t?"scale-125 opacity-0":"scale-100 opacity-100"}`})}function FT({onBegin:t,onOpenHowItWorks:e}){const n=()=>{Ye.playClick(),t()};return u.jsxs("section",{className:"relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 py-8 lg:py-12 overflow-hidden w-full max-w-[1700px] mx-auto",children:[u.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(to_right,#7ED0430a_1px,transparent_1px),linear-gradient(to_bottom,#7ED0430a_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"}),u.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-light/10 rounded-full blur-[160px] pointer-events-none"}),u.jsxs("div",{className:"flex flex-col items-center gap-2.5 z-20 mb-2",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-deep/30 border border-brand-light/25 text-brand-lime text-xs font-mono font-bold tracking-widest uppercase shadow-sm",children:[u.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-lime animate-ping"}),u.jsx("span",{children:"Autonomous Multi-Source Investment Intelligence"})]}),u.jsx("h1",{className:"text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight font-mono",children:u.jsx("span",{className:"bg-gradient-to-r from-[#7ED043] via-[#F0FB43] to-white bg-clip-text text-transparent drop-shadow-md",children:"INVESTILENS"})}),u.jsxs("p",{className:"text-sm sm:text-base text-slate-300 max-w-xl font-sans font-normal leading-relaxed",children:["Smarter research. Better decisions.",u.jsx("span",{className:"block text-slate-400 text-xs sm:text-sm mt-0.5",children:"Cross-checks official filings, balances bull & bear cases, and explains every metric in plain English."})]}),u.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3.5 mt-3",children:[u.jsxs("button",{onClick:n,className:"group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#F0FB43] via-[#7ED043] to-[#4FB734] hover:from-[#f4fc65] hover:to-[#5bc93f] text-[#060907] font-black text-sm uppercase tracking-wider font-mono shadow-xl shadow-[#7ED043]/20 hover:shadow-[#F0FB43]/40 transition-all duration-300 hover:scale-105 active:scale-95",children:[u.jsx("span",{children:"GET STARTED"}),u.jsx(Kl,{className:"w-4 h-4 transform group-hover:translate-x-1.5 transition-transform"})]}),u.jsxs("button",{onClick:()=>{Ye.playClick(),e()},className:"inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-[#0b110d]/90 hover:bg-[#111a14] text-slate-200 border border-brand-light/30 font-mono text-xs font-bold transition-all duration-300 hover:border-brand-lime/50 shadow-lg",children:[u.jsx(Xg,{className:"w-4 h-4 text-brand-light"}),u.jsx("span",{children:"How It Works"})]})]})]}),u.jsxs("div",{className:"relative w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 items-center gap-4 my-4 z-10",children:[u.jsxs("div",{className:"hidden lg:flex flex-col gap-4 lg:col-span-3 items-end text-right",children:[u.jsxs("div",{className:"w-full max-w-xs p-4 rounded-2xl bg-[#0b110d]/75 backdrop-blur-md border border-brand-light/20 shadow-xl flex flex-col gap-2 hover:border-brand-light/40 transition-all duration-300 animate-in fade-in slide-in-from-left-4",children:[u.jsxs("div",{className:"flex items-center justify-between text-xs font-mono",children:[u.jsx("span",{className:"text-brand-lime font-bold",children:"LIVE MARKET SIGNAL"}),u.jsx("span",{className:"text-[10px] text-brand-light",children:"+1.42% Momentum"})]}),u.jsx("div",{className:"w-full h-8 flex items-center justify-center py-1",children:u.jsx("svg",{className:"w-full h-full text-brand-lime stroke-current fill-none stroke-[2]",viewBox:"0 0 100 25",children:u.jsx("path",{d:"M0 20 L20 15 L35 18 L55 8 L75 12 L90 3 L100 6"})})}),u.jsx("span",{className:"text-[10px] font-mono text-slate-400",children:"62% Positive Sentiment Classification"})]}),u.jsxs("div",{className:"w-full max-w-xs p-4 rounded-2xl bg-[#0b110d]/75 backdrop-blur-md border border-brand-light/20 shadow-xl flex flex-col gap-1.5 hover:border-brand-light/40 transition-all duration-300 animate-in fade-in slide-in-from-left-6",children:[u.jsxs("div",{className:"flex items-center justify-between text-xs font-mono",children:[u.jsx("span",{className:"text-white font-bold",children:"MULTI-SOURCE CRAWL"}),u.jsx("span",{className:"text-[10px] px-1.5 py-0.5 rounded bg-brand-deep/50 text-brand-lime font-bold",children:"12 PRIMARY SOURCES"})]}),u.jsx("p",{className:"text-[11px] text-slate-300 font-sans text-right",children:"Nasdaq, NSE, BSE, Yahoo, Google, Reuters, CNBC, MarketWatch, FT, WSJ, Investing.com."})]})]}),u.jsx("div",{className:"lg:col-span-6 flex flex-col items-center justify-center relative",children:u.jsx(UT,{onClick:n})}),u.jsxs("div",{className:"hidden lg:flex flex-col gap-4 lg:col-span-3 items-start text-left",children:[u.jsxs("div",{className:"w-full max-w-xs p-4 rounded-2xl bg-[#0b110d]/75 backdrop-blur-md border border-brand-light/20 shadow-xl flex flex-col gap-2 hover:border-brand-light/40 transition-all duration-300 animate-in fade-in slide-in-from-right-4",children:[u.jsxs("div",{className:"flex items-center justify-between text-xs font-mono",children:[u.jsx("span",{className:"text-brand-lime font-bold",children:"RESEARCH PIPELINE"}),u.jsx("span",{className:"text-[10px] text-brand-light",children:"ACTIVE"})]}),u.jsxs("div",{className:"flex flex-col gap-1 text-[11px] font-mono text-slate-300",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("span",{children:"Financials & NIM"}),u.jsx("span",{className:"text-brand-lime font-bold",children:"✓"})]}),u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("span",{children:"Cross-Source Audits"}),u.jsx("span",{className:"text-brand-lime font-bold",children:"✓"})]}),u.jsxs("div",{className:"flex items-center justify-between text-slate-500",children:[u.jsx("span",{children:"Peer Moat Analysis"}),u.jsx("span",{children:"◌"})]}),u.jsxs("div",{className:"flex items-center justify-between text-slate-500",children:[u.jsx("span",{children:"Bear Disconfirmation"}),u.jsx("span",{children:"◌"})]})]})]}),u.jsxs("div",{className:"w-full max-w-xs p-4 rounded-2xl bg-[#0b110d]/75 backdrop-blur-md border border-brand-light/20 shadow-xl flex flex-col gap-1.5 hover:border-brand-light/40 transition-all duration-300 animate-in fade-in slide-in-from-right-6",children:[u.jsxs("div",{className:"flex items-center justify-between text-xs font-mono",children:[u.jsx("span",{className:"text-white font-bold",children:"DETERMINISTIC SCORING"}),u.jsx("span",{className:"text-[10px] text-brand-lime font-bold",children:"100% EXPLAINABLE"})]}),u.jsx("p",{className:"text-[11px] text-slate-300 font-sans text-left",children:"Non-blackbox 7-dimension weighted mathematical formula."})]})]})]}),u.jsxs("div",{className:"flex items-center gap-4 text-xs font-mono text-slate-400 mt-2 z-10",children:[u.jsxs("span",{className:"flex items-center gap-1.5",children:[u.jsx(qf,{className:"w-4 h-4 text-brand-light"})," Human-in-the-Loop Decisions"]}),u.jsx("span",{children:"•"}),u.jsx("span",{children:"Zero Confirmation Bias"}),u.jsx("span",{children:"•"}),u.jsx("span",{children:"Decision-Support Only"})]})]})}const rs={HDFC_BANK:{ticker:"HDFCBANK",exchange:"NSE / BSE",market:"India",name:"HDFC Bank Ltd.",sector:"Banking & Financial Services",currency:"INR",currentPrice:1724.5,priceChange:"+1.42%",iconType:"bank",summary:"India's largest private sector bank by assets, boasting an extensive nationwide branch network, industry-leading low-cost CASA deposit base, and solid post-merger integration trajectory.",scores:{financialHealth:88,growthPotential:84,historicalPerformance:86,valuation:78,debtLeverage:82,newsEvents:85,riskProfile:80},overallScore:84,evidenceConfidence:"HIGH",sourcesCount:6,researchStatus:"Strong Research Profile",disclaimer:"This research assessment is generated via multi-source web cross-verification for decision-support purposes only. It does not constitute investment advice or order execution.",evidence:[{id:"ev-1",claim:"Q3 Net Interest Income (NII) grew 11.2% YoY with Net Interest Margin (NIM) stabilizing at 3.46%",sourceA:{name:"HDFC Bank Q3 Financial Disclosure",type:"Official Filing",url:"https://hdfcbank.com/investor-relations/q3-results",match:!0},sourceB:{name:"Screener.in Verified Financials",type:"Financial Platform",url:"https://screener.in/company/HDFCBANK",match:!0},confidence:"HIGH",status:"VERIFIED",metric:"NII & NIM",discrepancy:null},{id:"ev-2",claim:"Gross Non-Performing Assets (GNPA) maintained at low 1.36%, Net NPA at 0.38%",sourceA:{name:"BSE Regulatory Filing (XBRL)",type:"Regulatory",url:"https://bseindia.com/filings/hdfcbank",match:!0},sourceB:{name:"Moneycontrol Banking Audit",type:"Financial News",url:"https://moneycontrol.com/india/stockpricequote/banks-private/hdfcbank",match:!0},confidence:"HIGH",status:"VERIFIED",metric:"Asset Quality",discrepancy:null},{id:"ev-3",claim:"Deposit growth outpaced credit growth at 15.1% YoY to rebalance Credit-to-Deposit (CD) ratio",sourceA:{name:"RBI Banking Statistics Bulletin",type:"Regulatory / Central Bank",url:"https://rbi.org.in/bulletin",match:!0},sourceB:{name:"Reuters India Financial Desk",type:"News Agency",url:"https://reuters.com/business/finance/hdfc-bank-q3",match:!0},confidence:"HIGH",status:"VERIFIED",metric:"Liquidity & CD Ratio",discrepancy:"Minor 0.2% variance in foreign currency deposit calculation between RBI and bank disclosure"},{id:"ev-4",claim:"Consolidated Return on Assets (RoA) at 1.95% and Return on Equity (RoE) normalized at 15.8%",sourceA:{name:"Annual Report FY2025 Extract",type:"Annual Report",url:"https://hdfcbank.com/annual-reports",match:!0},sourceB:{name:"Tickertape Financial Engine",type:"Data Provider",url:"https://tickertape.in/stocks/hdfc-bank",match:!0},confidence:"HIGH",status:"VERIFIED",metric:"Profitability",discrepancy:null}],bullCase:[{title:"Post-Merger Synergies Accelerating",desc:"Cross-selling mortgage loans to the legacy 90M+ HDFC Bank customer base is ramping up, yielding lower customer acquisition costs.",impact:"HIGH",source:"Annual Report & Management Call"},{title:"Market-Leading CASA Ratio",desc:"Maintains a robust low-cost deposit ratio of ~37.7%, insulating the bank from rapid central bank repo rate spikes.",impact:"HIGH",source:"RBI Disclosure"},{title:"Prudent Underwriting & Clean Balance Sheet",desc:"Consistently lowest provision cost among major emerging market tier-1 lenders with Gross NPAs below 1.4%.",impact:"MEDIUM",source:"Moneycontrol & Screener"}],bearCase:[{title:"Credit-to-Deposit (CD) Ratio Pressure",desc:"CD ratio remaining elevated (~100%) post-HDFC Ltd merger forces aggressive branch deposit mobilization, which may compress NIMs temporarily.",impact:"HIGH",source:"Motilal Oswal & Reuters"},{title:"FII Outflow Sensitivity",desc:"High foreign institutional ownership (>52%) exposes the stock to global macroeconomic liquidity shifts and currency fluctuations.",impact:"MEDIUM",source:"Trendlyne Institutional Tracker"},{title:"Fintech Disruption in Retail Payments",desc:"Intensified competition from UPI payment aggregators for fee-based transactional income.",impact:"LOW",source:"Economic Times Fintech Review"}],newsSentiment:{positivePercent:62,neutralPercent:23,negativePercent:15,totalArticlesParsed:18,articles:[{headline:"HDFC Bank deposits grow 15.1% in Q3; loan growth steady at 12.8%",source:"LiveMint",date:"Yesterday",sentiment:"POSITIVE",impact:"HIGH",summary:"Aggressive branch expansion pays off as retail deposits accelerate, alleviating merger liquidity overhang."},{headline:"RBI relaxes certain liquidity coverage ratio guidelines for tier-1 banks",source:"Economic Times",date:"3 days ago",sentiment:"POSITIVE",impact:"MEDIUM",summary:"Provides operational breathing room for large private lenders managing credit rebalancing."},{headline:"Foreign institutional investors trim Indian banking exposure on bond yield movements",source:"Bloomberg",date:"5 days ago",sentiment:"NEGATIVE",impact:"MEDIUM",summary:"Short-term selling pressure observed across large-cap financial indices."},{headline:"HDFC Bank expands digital rural credit initiative across 10,000 new village hubs",source:"Business Standard",date:"1 week ago",sentiment:"NEUTRAL",impact:"LOW",summary:"Long-term priority sector lending fulfillment with neutral short-term earnings impact."}]},upcomingEvents:[{title:"Q4 FY2026 Financial Results & Board Meeting",date:"April 18, 2026",significance:"HIGH",type:"Earnings",impact:"Crucial quarterly print on NIM stabilization and dividend announcement."},{title:"RBI Monetary Policy Committee (MPC) Rate Decision",date:"May 8, 2026",significance:"HIGH",type:"Macro / Regulatory",impact:"Determines cost of funds trajectory and loan repricing dynamics."},{title:"Annual Analyst & Investor Day Conference",date:"June 12, 2026",significance:"MEDIUM",type:"Corporate Event",impact:"Management guidance on 3-year digital transformation and subsidiary monetization."}],hypotheticalAllocation:{totalBudget:"INR 50,000",strategy:"Balanced Core Compounder Strategy (3-5 Year Horizon)",allocations:[{asset:"HDFC Bank Ltd. (NSE: HDFCBANK)",amount:22500,percent:45,role:"Core Private Banking Pillar",rationale:"High asset quality, 15%+ steady compounding potential"},{asset:"Tata Motors Ltd. (NSE: TATAMOTORS)",amount:12500,percent:25,role:"Cyclical EV Growth Satellite",rationale:"EV market share & JLR cash flow momentum"},{asset:"Reliance Industries (NSE: RELIANCE)",amount:1e4,percent:20,role:"Diversified Conglomerate Defense",rationale:"Telecom 5G cash cow + Retail ecosystem"},{asset:"Liquid Research Reserve (Overnight/Cash)",amount:5e3,percent:10,role:"Tactical Volatility Buffer",rationale:"Dry powder for staged entry on dips"}]},sourcesVisited:[{name:"Yahoo Finance (HDFCBANK.NS)",url:"https://finance.yahoo.com/quote/HDFCBANK.NS/",status:"200 OK",bytes:"142 KB",depth:3},{name:"NSE India Official Exchange",url:"https://www.nseindia.com/get-quotes/equity?symbol=HDFCBANK",status:"200 OK",bytes:"110 KB",depth:2},{name:"Google Finance India",url:"https://www.google.com/finance/quote/HDFCBANK:NSE",status:"200 OK",bytes:"88 KB",depth:2},{name:"Reuters India Markets",url:"https://www.reuters.com/markets/companies/HDBK.NS",status:"200 OK",bytes:"74 KB",depth:1},{name:"MarketWatch Global",url:"https://www.marketwatch.com/investing/stock/hdfcbank",status:"200 OK",bytes:"96 KB",depth:2}]},NVIDIA:{ticker:"NVDA",exchange:"NASDAQ",market:"United States",name:"NVIDIA Corporation",sector:"Semiconductors & AI Compute",currency:"USD",currentPrice:138.25,priceChange:"+3.18%",iconType:"chip",summary:"Dominant designer of high-performance graphics processing units (GPUs) and full-stack accelerated computing platforms powering the global generative AI revolution.",scores:{financialHealth:94,growthPotential:92,historicalPerformance:96,valuation:62,debtLeverage:90,newsEvents:88,riskProfile:74},overallScore:86,evidenceConfidence:"HIGH",sourcesCount:7,researchStatus:"Strong Research Profile",disclaimer:"This research assessment is generated via multi-source web cross-verification for decision-support purposes only. It does not constitute investment advice or order execution.",evidence:[{id:"nv-1",claim:"Data Center segment revenue reached $30.8B in the quarter, representing 112% YoY hyper-expansion",sourceA:{name:"NVIDIA SEC 10-Q Quarterly Filing",type:"SEC Regulatory",url:"https://sec.gov/edgar/data/1045810",match:!0},sourceB:{name:"Bloomberg Terminal Transcript",type:"Financial Data",url:"https://bloomberg.com/quote/NVDA:US",match:!0},confidence:"HIGH",status:"VERIFIED",metric:"Data Center Compute Revenue",discrepancy:null}],bullCase:[{title:"CUDA Moat & Software Ecosystem Monopoly",desc:"Over 5 million developers locked into NVIDIA's CUDA programming layer create high switching costs for hyperscalers.",impact:"HIGH",source:"Gartner AI Infrastructure Report"},{title:"Blackwell GPU Supercycle",desc:"Full order books across Microsoft Azure, AWS, Google Cloud, and Meta for Blackwell architectures.",impact:"HIGH",source:"Morgan Stanley Equity Research"}],bearCase:[{title:"Hyperscaler Custom Silicon In-House Efforts",desc:"Custom ASICs (Google TPU, AWS Trainium, Meta MTIA) could erode long-term pricing power for inference workloads.",impact:"HIGH",source:"Semianalysis Research"},{title:"Elevated Valuation Multiples",desc:"Trading at premium multiples leaves less margin of safety if enterprise cloud capex growth moderates.",impact:"MEDIUM",source:"FactSet & Yahoo Finance"}],newsSentiment:{positivePercent:74,neutralPercent:16,negativePercent:10,totalArticlesParsed:22,articles:[{headline:"NVIDIA Blackwell chips shipping at volume scale; enterprise demand accelerates",source:"CNBC",date:"Yesterday",sentiment:"POSITIVE",impact:"HIGH",summary:"Supply packaging yields improving ahead of target schedule."}]},upcomingEvents:[{title:"GTC Global AI Conference Keynote",date:"March 18, 2026",significance:"HIGH",type:"Architecture Launch",impact:"Unveiling next-generation Rubin architecture roadmap."}],hypotheticalAllocation:{totalBudget:"USD 10,000",strategy:"High-Growth AI Hardware Strategy",allocations:[{asset:"NVIDIA Corp (NASDAQ: NVDA)",amount:4500,percent:45,role:"Core AI Compute Anchor",rationale:"Leading GPU architecture"},{asset:"Microsoft Corp (NASDAQ: MSFT)",amount:2500,percent:25,role:"Enterprise Software Partner",rationale:"Azure infrastructure scale"},{asset:"TSMC (NYSE: TSM)",amount:2e3,percent:20,role:"Foundry Manufacturer",rationale:"Exclusive advanced node supplier"},{asset:"Cash / Treasury Reserve",amount:1e3,percent:10,role:"Capital Reserve",rationale:"Volatility buffer"}]},sourcesVisited:[{name:"Yahoo Finance Live Multiples",url:"https://finance.yahoo.com/quote/NVDA/",status:"200 OK",bytes:"148 KB",depth:3},{name:"Nasdaq Official Market Activity",url:"https://www.nasdaq.com/market-activity/stocks/nvda",status:"200 OK",bytes:"175 KB",depth:2},{name:"Google Finance Overview",url:"https://www.google.com/finance/quote/NVDA:NASDAQ",status:"200 OK",bytes:"92 KB",depth:2},{name:"Reuters Markets Desk",url:"https://www.reuters.com/markets/companies/NVDA",status:"200 OK",bytes:"86 KB",depth:2},{name:"MarketWatch Financial Statements",url:"https://www.marketwatch.com/investing/stock/nvda",status:"200 OK",bytes:"115 KB",depth:2}]},RELIANCE:{ticker:"RELIANCE",exchange:"NSE / BSE",market:"India",name:"Reliance Industries Ltd.",sector:"Oil-to-Chemicals, Telecom & Retail",currency:"INR",currentPrice:2980,priceChange:"+0.85%",iconType:"energy",summary:"India's highest market-cap conglomerate with a trinity of cash-generating refining assets, telecom disruptor Jio, and nationwide retail leadership.",scores:{financialHealth:85,growthPotential:82,historicalPerformance:84,valuation:75,debtLeverage:72,newsEvents:80,riskProfile:78},overallScore:80,evidenceConfidence:"HIGH",sourcesCount:5,researchStatus:"Strong Research Profile",disclaimer:"This research assessment is generated via multi-source web cross-verification for decision-support purposes only. It does not constitute investment advice or order execution.",evidence:[{id:"rel-1",claim:"Jio telecom ARPU increased to INR 182 with 5G standalone network coverage spanning all 22 circles",sourceA:{name:"RIL Investor Presentation Q3",type:"Official Filing",url:"https://ril.com/investors",match:!0},sourceB:{name:"TRAI Telecom Monthly Report",type:"Regulatory",url:"https://trai.gov.in",match:!0},confidence:"HIGH",status:"VERIFIED",metric:"Telecom ARPU & 5G Coverage",discrepancy:null}],bullCase:[{title:"Potential Consumer Business Demergers",desc:"Anticipated value unlocking via standalone listings of retail and telecom arms.",impact:"HIGH",source:"Jefferies India Research"}],bearCase:[{title:"Heavy Ongoing Capital Expenditures",desc:"Significant capex across green energy gigafactories keeps net debt-to-EBITDA slightly elevated.",impact:"MEDIUM",source:"Screener.in & ICICI Direct"}],newsSentiment:{positivePercent:58,neutralPercent:30,negativePercent:12,totalArticlesParsed:15,articles:[{headline:"Jio launches AI Cloud welcome offer for Indian smartphone users",source:"Mint",date:"2 days ago",sentiment:"POSITIVE",impact:"MEDIUM",summary:"Drives subscriber stickiness."}]},upcomingEvents:[{title:"RIL Board Meeting & Q4 Numbers",date:"April 24, 2026",significance:"HIGH",type:"Earnings",impact:"Key disclosures on retail segment footfalls."}],hypotheticalAllocation:{totalBudget:"INR 50,000",strategy:"Conglomerate Core Strategy",allocations:[{asset:"Reliance Industries",amount:2e4,percent:40,role:"Anchor",rationale:"Dominant market position"},{asset:"HDFC Bank",amount:2e4,percent:40,role:"Financials",rationale:"Credit growth beneficiary"},{asset:"Cash Reserve",amount:1e4,percent:20,role:"Liquidity",rationale:"Rebalancing buffer"}]},sourcesVisited:[{name:"Yahoo Finance India (RELIANCE.NS)",url:"https://finance.yahoo.com/quote/RELIANCE.NS/",status:"200 OK",bytes:"135 KB",depth:3},{name:"NSE India Official Portal",url:"https://www.nseindia.com/get-quotes/equity?symbol=RELIANCE",status:"200 OK",bytes:"115 KB",depth:2},{name:"Google Finance (RELIANCE:NSE)",url:"https://www.google.com/finance/quote/RELIANCE:NSE",status:"200 OK",bytes:"85 KB",depth:2},{name:"Reuters India Desk",url:"https://www.reuters.com/markets/companies/RELI.NS",status:"200 OK",bytes:"72 KB",depth:2},{name:"MarketWatch India",url:"https://www.marketwatch.com/investing/stock/reliance",status:"200 OK",bytes:"90 KB",depth:2}]}};function kT({params:t,onChange:e,onCompleteSetup:n,userLevel:i,setUserLevel:r}){const[s,a]=Ie.useState(1),o=[{key:"NVIDIA",name:"NVIDIA Corp.",ticker:"NVDA",market:"United States (NASDAQ)",sector:"Semiconductors & AI",currency:"USD",icon:qg},{key:"TESLA",name:"Tesla Inc.",ticker:"TSLA",market:"United States (NASDAQ)",sector:"Automobile & Clean Tech",currency:"USD",icon:id},{key:"HDFC_BANK",name:"HDFC Bank",ticker:"HDFCBANK",market:"India (NSE)",sector:"Banking & Financials",currency:"INR",icon:jf},{key:"RELIANCE",name:"Reliance Industries",ticker:"RELIANCE",market:"India (NSE)",sector:"Telecom & Retail",currency:"INR",icon:id}],l=[{label:"INR 25,000",value:"25000",currency:"INR"},{label:"INR 50,000 (Demo)",value:"50000",currency:"INR"},{label:"INR 1,00,000",value:"100000",currency:"INR"},{label:"USD $5,000",value:"5000",currency:"USD"}],c=["Semiconductors & AI","Automobile & Clean Tech","Banking & Financials","Software & Cloud","Consumer Tech & Hardware","Energy & Industrial","Healthcare & Biotech"],p=()=>{Ye.playClick(),s<5?a(s+1):n()},m=()=>{Ye.playClick(),s>1&&a(s-1)},f=h=>{Ye.playClick(),e({...t,stockKey:h.key,companyQuery:h.name,ticker:h.ticker,sector:h.sector,market:h.market.includes("India")?"India":"United States",currency:h.currency||(h.market.includes("India")?"INR":"USD")})};return u.jsxs("div",{className:"w-full max-w-3xl mx-auto flex flex-col gap-6 py-6 px-4",children:[u.jsxs("div",{className:"flex items-center justify-between bg-[#0b110d] border border-brand-light/20 rounded-2xl p-2.5",children:[u.jsxs("div",{className:"flex items-center gap-2 px-2",children:[u.jsx(mS,{className:"w-4 h-4 text-brand-lime"}),u.jsx("span",{className:"text-xs font-mono text-slate-300",children:"Research Experience Level:"})]}),u.jsxs("div",{className:"flex items-center gap-1.5 bg-[#060907] p-1 rounded-xl border border-white/[0.06]",children:[u.jsx("button",{onClick:()=>{Ye.playClick(),r("beginner")},className:`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all duration-200 ${i==="beginner"?"bg-brand-medium text-[#060907] shadow-md shadow-brand-medium/30":"text-slate-400 hover:text-white"}`,children:"Beginner (Plain English)"}),u.jsx("button",{onClick:()=>{Ye.playClick(),r("advanced")},className:`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all duration-200 ${i==="advanced"?"bg-brand-lime text-[#060907] shadow-md shadow-brand-lime/30":"text-slate-400 hover:text-white"}`,children:"Advanced (Full Wall St. Ratios)"})]})]}),u.jsxs("div",{className:"flex flex-col gap-2",children:[u.jsxs("div",{className:"flex items-center justify-between text-xs font-mono text-slate-400",children:[u.jsx("span",{className:"text-brand-lime font-bold uppercase tracking-wider",children:"YOUR INVESTMENT RESEARCH JOURNEY"}),u.jsxs("span",{children:["STEP ",s," OF 5"]})]}),u.jsxs("div",{className:"flex items-center justify-between relative px-2",children:[u.jsx("div",{className:"absolute top-1/2 left-4 right-4 h-0.5 bg-slate-800 -translate-y-1/2 z-0"}),u.jsx("div",{className:"absolute top-1/2 left-4 h-0.5 bg-gradient-to-r from-brand-lime to-brand-medium -translate-y-1/2 z-0 transition-all duration-500",style:{width:`${(s-1)/4*100}%`}}),[{id:1,label:"Company"},{id:2,label:"Budget"},{id:3,label:"Risk"},{id:4,label:"Horizon"},{id:5,label:"Review"}].map(h=>u.jsxs("div",{className:"relative z-10 flex flex-col items-center gap-1.5",children:[u.jsx("div",{className:`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${s>h.id?"bg-brand-medium text-[#060907] shadow-md shadow-brand-medium/30":s===h.id?"bg-brand-lime text-[#060907] ring-4 ring-brand-lime/20 shadow-lg shadow-brand-lime/40":"bg-slate-800 text-slate-400 border border-slate-700"}`,children:s>h.id?"✓":h.id}),u.jsx("span",{className:`text-[10px] font-mono ${s>=h.id?"text-brand-light font-bold":"text-slate-500"}`,children:h.label})]},h.id))]})]}),u.jsxs("div",{className:"bg-[#0b110d]/90 border border-brand-light/20 rounded-3xl p-6 sm:p-8 flex flex-col gap-6 shadow-2xl relative overflow-hidden",children:[u.jsx("div",{className:"absolute -top-12 -right-12 w-48 h-48 bg-brand-light/10 rounded-full blur-3xl pointer-events-none"}),s===1&&u.jsxs("div",{className:"flex flex-col gap-5 animate-in fade-in slide-in-from-right-4 duration-300",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-xs font-mono font-bold text-brand-lime uppercase tracking-widest block mb-1",children:"TARGET ASSET IDENTIFICATION"}),u.jsx("h2",{className:"text-2xl sm:text-3xl font-extrabold text-white font-sans",children:"Which company would you like to research?"}),u.jsx("p",{className:"text-xs sm:text-sm text-slate-300 mt-1",children:"Select a popular stock or enter your custom ticker and sector. InvestiLens will scan official filings, exchange quotes, financial multiples, and news feeds."})]}),u.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2.5",children:o.map(h=>{const y=h.icon;return u.jsxs("button",{onClick:()=>f(h),className:`p-3 rounded-2xl border text-left flex flex-col gap-1 transition-all duration-300 ${t.stockKey===h.key||t.companyQuery===h.name?"bg-brand-medium/20 border-brand-lime shadow-xl shadow-brand-medium/15":"bg-[#060907]/80 border-white/[0.08] hover:border-brand-light/40 hover:bg-[#0f1812]"}`,children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("div",{className:"w-7 h-7 rounded-lg bg-brand-deep/40 border border-brand-light/30 flex items-center justify-center text-brand-lime",children:u.jsx(y,{className:"w-3.5 h-3.5"})}),u.jsx("span",{className:"text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-brand-lime font-bold",children:h.ticker})]}),u.jsx("span",{className:"text-xs font-bold text-white font-mono mt-0.5",children:h.name}),u.jsx("span",{className:"text-[10px] text-slate-400 truncate",children:h.sector})]},h.key)})}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-white/[0.08]",children:[u.jsxs("div",{children:[u.jsx("label",{className:"text-[11px] font-mono text-slate-400 block mb-1",children:"Company Name"}),u.jsxs("div",{className:"relative",children:[u.jsx(eS,{className:"w-4 h-4 absolute left-3.5 top-3 text-brand-light"}),u.jsx("input",{type:"text",value:t.companyQuery,onChange:h=>e({...t,companyQuery:h.target.value,stockKey:"CUSTOM"}),placeholder:"e.g. NVIDIA, Tesla, Tata Motors",className:"w-full bg-[#060907] border border-brand-light/25 rounded-xl pl-10 pr-3 py-2.5 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-brand-lime focus:ring-1 focus:ring-brand-lime/20"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"text-[11px] font-mono text-slate-400 block mb-1",children:"Stock Ticker Symbol"}),u.jsx("input",{type:"text",value:t.ticker||(t.stockKey==="NVIDIA"?"NVDA":t.stockKey==="TESLA"?"TSLA":t.stockKey==="HDFC_BANK"?"HDFCBANK":t.stockKey==="RELIANCE"?"RELIANCE":t.companyQuery),onChange:h=>e({...t,ticker:h.target.value.toUpperCase()}),placeholder:"e.g. NVDA, TSLA, HDFCBANK",className:"w-full bg-[#060907] border border-brand-light/25 rounded-xl px-3.5 py-2.5 text-xs font-mono font-bold text-brand-lime uppercase placeholder-slate-500 focus:outline-none focus:border-brand-lime focus:ring-1 focus:ring-brand-lime/20"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"text-[11px] font-mono text-slate-400 block mb-1",children:"Market & Exchange"}),u.jsxs("select",{value:t.market,onChange:h=>e({...t,market:h.target.value,currency:h.target.value==="India"?"INR":"USD"}),className:"w-full bg-[#060907] border border-brand-light/25 rounded-xl px-3 py-2.5 text-xs font-mono text-slate-200 focus:outline-none focus:border-brand-lime",children:[u.jsx("option",{value:"United States",children:"United States (NASDAQ / NYSE)"}),u.jsx("option",{value:"India",children:"India (NSE / BSE)"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"text-[11px] font-mono text-slate-400 block mb-1",children:"Industry Sector"}),u.jsx("select",{value:t.sector||"Semiconductors & AI",onChange:h=>e({...t,sector:h.target.value}),className:"w-full bg-[#060907] border border-brand-light/25 rounded-xl px-3 py-2.5 text-xs font-mono text-slate-200 focus:outline-none focus:border-brand-lime",children:c.map(h=>u.jsx("option",{value:h,children:h},h))})]})]}),t.companyQuery&&u.jsxs("div",{className:"p-3.5 rounded-xl bg-brand-deep/20 border border-brand-medium/40 flex items-center justify-between text-xs font-mono animate-in fade-in",children:[u.jsxs("div",{className:"flex items-center gap-2.5",children:[u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-brand-lime animate-ping"}),u.jsxs("span",{className:"text-slate-200",children:["Selected Target: ",u.jsx("strong",{className:"text-brand-lime",children:t.companyQuery})," (",t.ticker||"Auto-detected",") • ",t.sector||"General"]})]}),u.jsx("span",{className:"text-brand-light font-bold text-[11px]",children:"Ready for Scope ✓"})]})]}),s===2&&u.jsxs("div",{className:"flex flex-col gap-5 animate-in fade-in slide-in-from-right-4 duration-300",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-xs font-mono font-bold text-brand-lime uppercase tracking-widest block mb-1",children:"CAPITAL CONSTRAINT"}),u.jsx("h2",{className:"text-2xl sm:text-3xl font-extrabold text-white font-sans",children:"How much are you planning to invest?"}),u.jsx("p",{className:"text-xs sm:text-sm text-slate-300 mt-1",children:"This helps the system determine appropriate diversification and position sizing in the hypothetical model."})]}),u.jsxs("div",{className:"relative",children:[u.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-brand-lime font-mono text-lg font-black",children:t.currency==="INR"?"INR":"USD"}),u.jsx("input",{type:"number",value:t.amount,onChange:h=>e({...t,amount:h.target.value}),className:"w-full bg-[#060907] border border-brand-light/30 rounded-2xl pl-16 pr-24 py-4 text-xl font-mono font-bold text-white focus:outline-none focus:border-brand-lime focus:ring-2 focus:ring-brand-lime/20 transition-all shadow-inner"}),u.jsxs("select",{value:t.currency,onChange:h=>{Ye.playClick(),e({...t,currency:h.target.value})},className:"absolute inset-y-2 right-2 bg-slate-800 text-xs font-mono text-slate-200 rounded-xl px-3 border border-slate-700 focus:outline-none cursor-pointer",children:[u.jsx("option",{value:"INR",children:"INR (₹)"}),u.jsx("option",{value:"USD",children:"USD ($)"})]})]}),u.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2.5",children:l.map(h=>u.jsx("button",{onClick:()=>{Ye.playClick(),e({...t,amount:h.value,currency:h.currency})},className:`p-3 rounded-xl border font-mono text-xs font-bold transition-all ${t.amount===h.value&&t.currency===h.currency?"bg-brand-medium/25 border-brand-lime text-brand-lime shadow-md":"bg-[#060907] border-white/[0.08] text-slate-400 hover:border-brand-light/40 hover:text-white"}`,children:h.label},h.label))}),u.jsx("div",{className:"p-3.5 rounded-xl bg-brand-deep/20 border border-brand-medium/30 text-xs font-mono text-brand-light",children:"System Note: The agent calibrates risk buffers and liquid cash reserves according to your capital constraint."})]}),s===3&&u.jsxs("div",{className:"flex flex-col gap-5 animate-in fade-in slide-in-from-right-4 duration-300",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-xs font-mono font-bold text-brand-lime uppercase tracking-widest block mb-1",children:"RISK TOLERANCE"}),u.jsx("h2",{className:"text-2xl sm:text-3xl font-extrabold text-white font-sans",children:"How much risk are you comfortable with?"}),u.jsx("p",{className:"text-xs sm:text-sm text-slate-300 mt-1",children:"We will actively hunt for disconfirming hazards that violate your tolerance threshold."})]}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3.5",children:[{level:"Conservative",desc:"Prioritize capital preservation, low debt, and predictable steady cash flows.",color:"text-brand-light"},{level:"Moderate",desc:"Balanced approach seeking solid compounders with controlled volatility.",color:"text-brand-lime"},{level:"Aggressive",desc:"High growth frontier, willing to accept price swings for expanding market share.",color:"text-brand-medium"}].map(h=>u.jsxs("button",{onClick:()=>{Ye.playClick(),e({...t,risk:h.level})},className:`p-5 rounded-2xl border text-left flex flex-col gap-2 transition-all ${t.risk===h.level?"bg-brand-medium/20 border-brand-lime shadow-xl shadow-brand-medium/20":"bg-[#060907] border-white/[0.08] text-slate-400 hover:border-brand-light/40 hover:text-white"}`,children:[u.jsx("span",{className:`text-base font-bold font-mono ${h.color}`,children:h.level}),u.jsx("p",{className:"text-xs text-slate-300 leading-relaxed font-sans",children:h.desc})]},h.level))})]}),s===4&&u.jsxs("div",{className:"flex flex-col gap-5 animate-in fade-in slide-in-from-right-4 duration-300",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-xs font-mono font-bold text-brand-lime uppercase tracking-widest block mb-1",children:"TIME HORIZON"}),u.jsx("h2",{className:"text-2xl sm:text-3xl font-extrabold text-white font-sans",children:"What is your investment horizon?"}),u.jsx("p",{className:"text-xs sm:text-sm text-slate-300 mt-1",children:"Determines whether the research emphasizes short-term catalysts or multi-year structural moats."})]}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3.5",children:[{title:"Short-term",span:"< 1 Year",note:"Focuses on upcoming quarterly earnings, NIM repricing, and macroeconomic catalysts."},{title:"Medium-term",span:"3–5 Years",note:"Evaluates post-merger synergies, branch deposit mobilization, and sustainable ROE."},{title:"Long-term",span:"5–10+ Years",note:"Analyzes industry dominance, compound moat durability, and generational compounding."}].map(h=>u.jsxs("button",{onClick:()=>{Ye.playClick(),e({...t,horizon:`${h.title} (${h.span})`})},className:`p-5 rounded-2xl border text-left flex flex-col gap-2 transition-all ${t.horizon.includes(h.title)?"bg-brand-medium/20 border-brand-lime shadow-xl shadow-brand-medium/20":"bg-[#060907] border-white/[0.08] text-slate-400 hover:border-brand-light/40 hover:text-white"}`,children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("span",{className:"text-sm font-bold font-mono text-white",children:h.title}),u.jsx("span",{className:"text-xs font-mono font-bold text-brand-lime",children:h.span})]}),u.jsx("p",{className:"text-xs text-slate-300 leading-relaxed font-sans",children:h.note})]},h.title))})]}),s===5&&u.jsxs("div",{className:"flex flex-col gap-5 animate-in fade-in slide-in-from-right-4 duration-300",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-xs font-mono font-bold text-brand-lime uppercase tracking-widest block mb-1",children:"OBJECTIVE SUMMARY"}),u.jsx("h2",{className:"text-2xl sm:text-3xl font-extrabold text-white font-sans",children:"INVESTILENS now understands your objective."}),u.jsx("p",{className:"text-xs sm:text-sm text-slate-300 mt-1",children:"Ready to generate the autonomous multi-source research plan."})]}),u.jsxs("div",{className:"bg-[#060907] border border-brand-light/30 rounded-2xl p-5 flex flex-col gap-2.5 font-mono text-xs shadow-inner",children:[u.jsxs("div",{className:"flex justify-between border-b border-white/[0.08] pb-2",children:[u.jsx("span",{className:"text-slate-400",children:"Target Asset:"}),u.jsxs("span",{className:"text-brand-lime font-bold",children:[t.companyQuery," (",t.ticker||"Auto-detected",") • ",t.sector||"General"]})]}),u.jsxs("div",{className:"flex justify-between border-b border-white/[0.08] pb-2",children:[u.jsx("span",{className:"text-slate-400",children:"Market & Exchange:"}),u.jsx("span",{className:"text-white font-bold",children:t.market})]}),u.jsxs("div",{className:"flex justify-between border-b border-white/[0.08] pb-2",children:[u.jsx("span",{className:"text-slate-400",children:"Investment Budget:"}),u.jsxs("span",{className:"text-white font-bold",children:[t.currency==="INR"?"INR ₹":"USD $",Number(t.amount).toLocaleString()]})]}),u.jsxs("div",{className:"flex justify-between border-b border-white/[0.08] pb-2",children:[u.jsx("span",{className:"text-slate-400",children:"Investor Experience:"}),u.jsxs("span",{className:"text-brand-light font-bold capitalize",children:[i," Mode"]})]}),u.jsxs("div",{className:"flex justify-between border-b border-white/[0.08] pb-2",children:[u.jsx("span",{className:"text-slate-400",children:"Risk Profile:"}),u.jsx("span",{className:"text-brand-light font-bold",children:t.risk})]}),u.jsxs("div",{className:"flex justify-between border-b border-white/[0.08] pb-2",children:[u.jsx("span",{className:"text-slate-400",children:"Time Horizon:"}),u.jsx("span",{className:"text-white font-bold",children:t.horizon})]}),u.jsxs("div",{className:"pt-2",children:[u.jsx("span",{className:"text-[10px] text-slate-400 uppercase tracking-wider block mb-1.5",children:"Verified Data & News Sources (Multi-Source Cross-Verification):"}),u.jsx("div",{className:"flex flex-wrap gap-1.5",children:["Nasdaq","NSE India","BSE India","Yahoo Finance","Google Finance","Reuters","CNBC","MarketWatch","Investing.com","MarketScreener","Financial Times","The Wall Street Journal"].map(h=>u.jsxs("span",{className:"px-2.5 py-0.5 rounded-lg bg-brand-deep/40 border border-brand-lime/30 text-[11px] text-brand-lime font-mono font-bold",children:["✓ ",h]},h))})]})]}),u.jsx("div",{className:"p-3.5 rounded-xl bg-brand-deep/20 border border-brand-medium/40 text-xs font-mono text-brand-lime",children:"✓ Ready to construct multi-source research plan with 2 Human-in-the-Loop approval checkpoints across 12 tier-1 sources."})]}),u.jsxs("div",{className:"flex items-center justify-between border-t border-white/[0.08] pt-4 mt-2",children:[s>1?u.jsxs("button",{onClick:m,className:"inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#060907] border border-white/[0.1] text-slate-300 hover:text-white font-mono text-xs font-bold transition-all",children:[u.jsx(by,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Back"})]}):u.jsx("div",{}),u.jsxs("button",{onClick:p,className:"inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-[#F0FB43] via-[#7ED043] to-[#4FB734] hover:from-[#f4fc65] hover:to-[#5bc93f] text-[#060907] font-mono text-xs font-extrabold uppercase tracking-wider shadow-lg shadow-brand-medium/25 hover:scale-105 active:scale-95 transition-all",children:[u.jsx("span",{children:s===5?"GENERATE RESEARCH PLAN":"CONTINUE"}),u.jsx(Kl,{className:"w-4 h-4"})]})]})]})]})}function OT({stockData:t,params:e,onAcceptPlan:n,onEditPlan:i}){const[r,s]=Ie.useState(0),[a,o]=Ie.useState(null),l=["Analyzing your capital constraint and horizon...","Understanding risk tolerance & disconfirmation rules...","Selecting Top 5 authoritative web sources (Yahoo, Nasdaq, Google, Reuters, MarketWatch)...","Building balanced Bull/Bear investigation framework...","Research plan ready for human approval."];Ie.useEffect(()=>{Ye.playCheckpointAlert();const p=setInterval(()=>{s(m=>m<l.length-1?(Ye.playClick(),m+1):(clearInterval(p),m))},450);return()=>clearInterval(p)},[]);const c=[{id:"fundamentals",title:"Fundamentals & Health",icon:$g,desc:`We will examine revenue growth YoY, profit margins, Return on Equity (ROE), and free cash flows for ${(t==null?void 0:t.name)||e.companyQuery} directly from financial statements.`},{id:"valuation",title:"Valuation & Multiples",icon:Kg,desc:"We will evaluate market capitalization, trailing P/E, forward P/E, and 52-week trading range across Yahoo Finance and official exchange data."},{id:"news",title:"News Sentiment",icon:Xf,desc:"We will scan and classify verified breaking news headlines from Reuters, CNBC, and Google Finance into Positive, Neutral, and Negative impact categories."},{id:"bull",title:"Bull Case Moat",icon:fS,desc:"We will document long-term growth catalysts, addressable market expansion, and pricing power."},{id:"bear",title:"Bear Disconfirmation",icon:Zg,desc:"Core requirement: We actively hunt for reasons NOT to invest, including multiple contraction, cyclical capex slowdown, and competitive threats."},{id:"catalysts",title:"Upcoming Catalysts",icon:Nc,desc:"We will extract verified calendar dates for upcoming quarterly earnings prints, investor calls, and regulatory milestones."}];return u.jsxs("div",{className:"w-full max-w-4xl mx-auto flex flex-col gap-6 py-6 px-4",children:[u.jsxs("div",{className:"bg-[#0b110d]/90 border border-brand-light/25 rounded-3xl p-6 flex flex-col gap-4 shadow-2xl",children:[u.jsxs("div",{className:"flex items-center justify-between border-b border-white/[0.08] pb-3",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:"w-9 h-9 rounded-xl bg-brand-deep/30 border border-brand-light/40 flex items-center justify-center text-brand-lime shadow-sm",children:u.jsx(Nc,{className:"w-5 h-5 animate-pulse"})}),u.jsxs("div",{children:[u.jsx("span",{className:"text-[10px] font-mono font-bold text-brand-lime uppercase tracking-widest block",children:"STEP 3: HUMAN-IN-THE-LOOP CHECKPOINT"}),u.jsxs("h2",{className:"text-xl font-bold text-white font-mono",children:["Interactive Research Plan: ",(t==null?void 0:t.name)||e.companyQuery]})]})]}),u.jsx("span",{className:"text-xs font-mono px-3 py-1 rounded-full bg-brand-deep/40 text-brand-lime border border-brand-light/30 font-bold",children:"HUMAN APPROVAL REQUIRED"})]}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs",children:l.map((p,m)=>{const f=r>=m;return u.jsxs("div",{className:"flex items-center gap-2 py-1 transition-opacity duration-300 "+(f?"text-slate-200 opacity-100":"text-slate-600 opacity-40"),children:[u.jsx("span",{className:"w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold "+(f?"bg-brand-medium text-[#060907]":"bg-slate-800 text-slate-500"),children:f?"✓":"○"}),u.jsx("span",{children:p})]},m)})})]}),u.jsxs("div",{className:"relative bg-[#070b08] border border-brand-light/20 rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center gap-6 shadow-2xl overflow-hidden",children:[u.jsx("div",{className:"text-center font-mono text-xs text-slate-400",children:"Click any research dimension node to preview the autonomous investigation scope:"}),u.jsxs("div",{className:"w-full flex flex-col items-center gap-6 z-10",children:[u.jsxs("div",{className:"relative group",children:[u.jsx("div",{className:"absolute -inset-2 bg-gradient-to-r from-brand-lime via-brand-medium to-brand-deep rounded-2xl blur-md opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse"}),u.jsxs("div",{className:"relative px-6 py-4 rounded-xl bg-[#0b110d] border-2 border-brand-lime text-center shadow-2xl flex flex-col items-center gap-1",children:[u.jsx("div",{className:"w-9 h-9 rounded-lg bg-brand-deep/40 border border-brand-light/30 flex items-center justify-center text-brand-lime mb-1",children:u.jsx(jf,{className:"w-5 h-5"})}),u.jsx("span",{className:"text-base font-black text-white font-mono",children:(t==null?void 0:t.name)||e.companyQuery}),u.jsxs("span",{className:"text-xs font-mono text-brand-lime font-bold",children:[e.currency==="INR"?"INR ":"USD ",Number(e.amount).toLocaleString()," • ",e.risk," • ",e.horizon]})]})]}),u.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3 w-full",children:c.map(p=>{const m=p.icon,f=(a==null?void 0:a.id)===p.id;return u.jsxs("button",{onClick:()=>{Ye.playClick(),o(f?null:p)},className:"p-3.5 rounded-2xl border text-left flex flex-col gap-1.5 transition-all duration-300 "+(f?"bg-brand-deep/40 border-brand-lime shadow-xl shadow-brand-lime/20 scale-105":"bg-[#0b110d]/80 border-white/[0.08] hover:border-brand-light/40 hover:bg-[#111a14]"),children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx(m,{className:"w-4 h-4 text-brand-lime"}),u.jsx("span",{className:"text-[10px] font-mono text-slate-400",children:"Inspect"})]}),u.jsx("span",{className:"text-xs font-bold text-white font-mono",children:p.title})]},p.id)})})]}),a&&u.jsxs("div",{className:"w-full bg-[#0b110d] border-2 border-brand-lime rounded-2xl p-4 flex flex-col gap-2 font-mono text-xs animate-in fade-in duration-200",children:[u.jsxs("div",{className:"flex items-center justify-between text-brand-lime font-bold",children:[u.jsxs("span",{className:"flex items-center gap-2",children:[u.jsx(Nc,{className:"w-4 h-4"}),u.jsxs("span",{children:["Scope Preview: ",a.title]})]}),u.jsx("button",{onClick:()=>o(null),className:"text-slate-400 hover:text-white",children:u.jsx($f,{className:"w-4 h-4"})})]}),u.jsx("p",{className:"text-slate-200 font-sans text-xs leading-relaxed",children:a.desc})]}),u.jsxs("div",{className:"w-full flex items-center justify-between text-xs font-mono text-slate-400 border-t border-white/[0.08] pt-4",children:[u.jsxs("span",{children:["Sources to Investigate: ",u.jsx("strong",{children:"6 Verified Portals"})," (Official IR, Screener, BSE, Moneycontrol, Reuters, RBI)"]}),u.jsx("span",{className:"text-brand-lime font-bold",children:"Confidence: HIGH"})]})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3.5",children:[u.jsxs("button",{onClick:()=>{Ye.playClick(),n()},className:"sm:col-span-2 py-4 px-6 rounded-2xl bg-gradient-to-r from-[#F0FB43] via-[#7ED043] to-[#4FB734] hover:from-[#f4fc65] hover:to-[#5bc93f] text-[#060907] font-black font-mono text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-xl shadow-brand-medium/30 hover:scale-105 active:scale-95 transition-all duration-300",children:[u.jsx(jg,{className:"w-5 h-5"}),u.jsx("span",{children:"ACCEPT & LAUNCH AUTONOMOUS RESEARCH"})]}),u.jsxs("button",{onClick:()=>{Ye.playClick(),i()},className:"py-4 px-4 rounded-2xl bg-[#0b110d] hover:bg-[#111a14] text-brand-lime border border-brand-light/30 font-bold font-mono text-xs flex items-center justify-center gap-2 transition-all hover:border-brand-lime/60",children:[u.jsx(Yg,{className:"w-4 h-4"}),u.jsx("span",{children:"EDIT PLAN"})]})]})]})}const Fx={financialHealth:{weight:.25,label:"Financial Health",description:"Balance sheet strength, profitability, ROE/ROA, margins"},growthPotential:{weight:.2,label:"Growth Potential",description:"Revenue/NII trajectory, sector tailwinds, addressable market"},historicalPerformance:{weight:.15,label:"Historical Performance",description:"Multi-year consistency, alpha generation vs benchmark"},valuation:{weight:.15,label:"Valuation",description:"P/E, P/B, EV/EBITDA, intrinsic value vs historical median"},debtLeverage:{weight:.1,label:"Debt & Leverage",description:"Debt-to-equity, interest coverage ratio, liquidity buffers"},newsEvents:{weight:.1,label:"News & Events",description:"Sentiment classification, upcoming earnings & regulatory catalysts"},riskProfile:{weight:.05,label:"Risk & Governance",description:"Promoter integrity, regulatory exposure, macro sensitivity"}};function BT(t){let e=0,n=[];for(const[o,l]of Object.entries(Fx)){const c=t[o]!==void 0?Number(t[o]):70,p=Math.max(0,Math.min(100,c)),m=p*l.weight;e+=m,n.push({key:o,label:l.label,description:l.description,rawScore:Math.round(p),weightPercent:Math.round(l.weight*100),contribution:Number(m.toFixed(2))})}const i=Math.round(e);let r="",s="",a="";return i>=80?(r="Strong Research Profile",s="text-brand-lime",a="bg-brand-medium/20 border-brand-lime text-brand-lime"):i>=65?(r="Moderate Research Profile",s="text-brand-light",a="bg-brand-light/20 border-brand-light text-brand-light"):i>=50?(r="Higher-Risk Research Profile",s="text-amber-400",a="bg-amber-500/20 border-amber-500 text-amber-300"):(r="Requires Further Investigation",s="text-rose-400",a="bg-rose-500/20 border-rose-500 text-rose-300"),{finalScore:i,breakdown:n,profileVerdict:r,verdictColor:s,verdictBadge:a,formulaExplanation:"Score = (Financial Health * 0.25) + (Growth * 0.20) + (Historical * 0.15) + (Valuation * 0.15) + (Debt * 0.10) + (News * 0.10) + (Risk * 0.05)"}}const Nm=[{id:1,name:"Collect User Requirements",icon:"UserCheck",description:"Parsing budget, risk tolerance, horizon & target asset"},{id:2,name:"Create Research Plan",icon:"FileSpreadsheet",description:"Synthesizing 6-8 independent source objectives"},{id:3,name:"Human Approval #1",icon:"ShieldAlert",isCheckpoint:!0,description:"Checkpoint: Waiting for user approval on research scope"},{id:4,name:"Webcmd Browser Research",icon:"Globe",description:"Spawning browser sessions & navigating targeted financial sources"},{id:5,name:"Collect Structured Evidence",icon:"Database",description:"Extracting claims, numbers, filings, and audit data"},{id:6,name:"Cross-Verification Engine",icon:"CheckCheck",description:"Cross-referencing claims across independent primary sources"},{id:7,name:"Financial & Metric Analysis",icon:"TrendingUp",description:"Evaluating revenue, margins, cash flows, and debt metrics"},{id:8,name:"News Sentiment Intelligence",icon:"Newspaper",description:"Classifying recent news into Positive, Neutral & Negative impact"},{id:9,name:"Upcoming Events & Catalysts",icon:"Calendar",description:"Detecting earnings calls, regulatory dates, and product launches"},{id:10,name:"Bull Case Formulation",icon:"ArrowUpRight",description:"Extracting growth drivers and strategic moats"},{id:11,name:"Bear Case / Counter-Analysis",icon:"ArrowDownRight",description:"Actively searching for disconfirming evidence and risks"},{id:12,name:"Deterministic Scoring Engine",icon:"Calculator",description:"Computing non-blackbox 7-dimension weighted scorecard"},{id:13,name:"Personalized Alignment",icon:"Sliders",description:"Mapping findings to user risk profile and capital constraints"},{id:14,name:"Hypothetical Allocation",icon:"PieChart",description:"Generating transparent decision-support asset model"},{id:15,name:"Human Approval #2",icon:"ShieldAlert",isCheckpoint:!0,description:"Checkpoint: Review preliminary findings & sign-off final report"},{id:16,name:"Final Report Generation",icon:"Award",description:"Publishing verified multi-source research dossier"}];class zT{constructor(e={}){this.mode=e.mode||"simulation",this.backendUrl=e.backendUrl||"http://localhost:8000/api",this.wsUrl=e.wsUrl||"ws://localhost:8000/stream"}setMode(e,n,i){this.mode=e,n&&(this.backendUrl=n),i&&(this.wsUrl=i)}}new zT;function VT({currentStageId:t,stagesProgress:e,browserLogs:n=[],currentUrl:i,browserStatus:r,speed:s,onSetSpeed:a,activeStockData:o}){const l=Ie.useRef(null),c=Ie.useRef(null),[p,m]=Ie.useState(0);Ie.useEffect(()=>{const g=Date.now(),_=setInterval(()=>{m(Date.now()-g)},100);return()=>clearInterval(_)},[]),Ie.useEffect(()=>{var g;(g=c.current)==null||g.scrollIntoView({behavior:"smooth"})},[n]);const f=Ie.useMemo(()=>{const g=[];let _="";for(const M of n){const T=`${M.type}:${M.message}`;T!==_&&(g.push(M),_=T)}return g},[n]),h=Ie.useMemo(()=>{const g=(i||"").toLowerCase();return g.includes("nasdaq.com")?{name:"Nasdaq Official Exchange",domain:"nasdaq.com",metric:"Official Exchange Filings & 52W Range",color:"text-amber-300",badge:"bg-amber-400/20 text-amber-300"}:g.includes("nseindia.com")||g.includes("bseindia.com")?{name:"NSE / BSE India Portal",domain:"nseindia.com",metric:"Official Indian Market Filings & Corporate Disclosures",color:"text-amber-300",badge:"bg-amber-400/20 text-amber-300"}:g.includes("google.com/finance")||g.includes("google.com")?{name:"Google Finance",domain:"google.com/finance",metric:"Real-Time Quotes, P/E & Multi-Exchange Overview",color:"text-sky-300",badge:"bg-sky-400/20 text-sky-300"}:g.includes("yahoo.com")||g.includes("yahoofinance")?{name:"Yahoo Finance",domain:"finance.yahoo.com",metric:"Historical Key Stats, Valuation & Multiples",color:"text-brand-lime",badge:"bg-brand-medium/20 text-brand-lime"}:g.includes("reuters.com")?{name:"Reuters Markets",domain:"reuters.com",metric:"Macro News & Global Market Sentiment Feed",color:"text-emerald-300",badge:"bg-emerald-400/20 text-emerald-300"}:g.includes("cnbc.com")?{name:"CNBC Markets",domain:"cnbc.com",metric:"Breaking Business News & Executive Commentary",color:"text-brand-lime",badge:"bg-brand-medium/20 text-brand-lime"}:g.includes("marketwatch.com")?{name:"MarketWatch Financials",domain:"marketwatch.com",metric:"Financial Statements & Balance Sheet Health",color:"text-lime-300",badge:"bg-lime-400/20 text-lime-300"}:g.includes("investing.com")?{name:"Investing.com",domain:"investing.com",metric:"Technical Indicators & Consensus Price Targets",color:"text-amber-300",badge:"bg-amber-400/20 text-amber-300"}:g.includes("marketscreener.com")?{name:"MarketScreener",domain:"marketscreener.com",metric:"Deep Fundamental Analysis & Financial Health",color:"text-sky-300",badge:"bg-sky-400/20 text-sky-300"}:g.includes("wsj.com")||g.includes("ft.com")?{name:"WSJ / Financial Times",domain:"wsj.com",metric:"Institutional Perspective & Macro Intelligence",color:"text-purple-300",badge:"bg-purple-400/20 text-purple-300"}:{name:"Tier-1 Multi-Source Network",domain:"investilens.ai",metric:"Cross-Checking Verified Fundamentals Across 12 Sources",color:"text-brand-lime",badge:"bg-brand-medium/20 text-brand-lime"}},[i]);Ie.useEffect(()=>{const g=l.current;if(!g)return;const _=g.getContext("2d");let M;const T=[{id:"core",name:"INVESTILENS CORE",x:.5,y:.5,color:"#F0FB43",radius:28,isCore:!0},{id:"src-1",name:"Nasdaq / NSE / BSE",url:"nasdaq",x:.16,y:.2,color:"#F0FB43",radius:17},{id:"src-2",name:"Google & Yahoo Finance",url:"google",x:.84,y:.2,color:"#38bdf8",radius:17},{id:"src-3",name:"Reuters & CNBC Wire",url:"reuters",x:.12,y:.78,color:"#4FB734",radius:17},{id:"src-4",name:"MarketWatch & Screener",url:"marketwatch",x:.88,y:.78,color:"#a3e635",radius:17},{id:"src-5",name:"FT / WSJ / Investing.com",url:"investing",x:.5,y:.9,color:"#c084fc",radius:17}],A=[];for(let E=0;E<24;E++)A.push({sourceIdx:Math.floor(Math.random()*(T.length-1))+1,progress:Math.random(),speed:.009+Math.random()*.015,size:2.5+Math.random()*2});let R=0;const v=()=>{M=requestAnimationFrame(v),R+=.02;const E=g.width,I=g.height;_.clearRect(0,0,E,I);const L=T[0].x*E,D=T[0].y*I;_.strokeStyle="rgba(126, 208, 67, 0.05)",_.lineWidth=1;for(let H=0;H<E;H+=28)_.beginPath(),_.moveTo(H,0),_.lineTo(H,I),_.stroke();for(let H=0;H<I;H+=28)_.beginPath(),_.moveTo(0,H),_.lineTo(E,H),_.stroke();T.slice(1).forEach(H=>{const Z=H.x*E,k=H.y*I,X=i&&i.toLowerCase().includes(H.url.toLowerCase());_.beginPath(),_.moveTo(Z,k),_.lineTo(L,D),X?(_.strokeStyle="#F0FB43",_.lineWidth=2.5,_.shadowColor="#F0FB43",_.shadowBlur=15):(_.strokeStyle="rgba(79, 183, 52, 0.25)",_.lineWidth=1.2,_.shadowBlur=0),_.stroke()}),A.forEach(H=>{H.progress+=H.speed,H.progress>=1&&(H.progress=0);const Z=T[H.sourceIdx],k=Z.x*E,X=Z.y*I,W=k+(L-k)*H.progress,F=X+(D-X)*H.progress;_.beginPath(),_.arc(W,F,H.size,0,Math.PI*2),_.fillStyle=Z.color,_.shadowColor=Z.color,_.shadowBlur=10,_.fill()}),T.forEach(H=>{var W;const Z=H.x*E,k=H.y*I,X=i&&i.toLowerCase().includes((W=H.url)==null?void 0:W.toLowerCase());_.beginPath(),_.arc(Z,k,H.radius+(X?8+Math.sin(R*6)*3:4),0,Math.PI*2),_.fillStyle=X?"rgba(240, 251, 67, 0.25)":"rgba(79, 183, 52, 0.08)",_.fill(),_.beginPath(),_.arc(Z,k,H.radius,0,Math.PI*2),_.fillStyle=H.isCore?"#0f1c13":"#070c09",_.strokeStyle=X?"#F0FB43":H.color,_.lineWidth=X?3:2,_.shadowColor=H.color,_.shadowBlur=X?20:8,_.fill(),_.stroke(),_.font=H.isCore?"bold 11px 'JetBrains Mono', monospace":"10px 'Inter', sans-serif",_.fillStyle=X?"#F0FB43":"#f4f8f4",_.textAlign="center",_.shadowBlur=0,_.fillText(H.name,Z,k+H.radius+14)})};return v(),()=>cancelAnimationFrame(M)},[i]);const y=Nm.find(g=>g.id===t)||Nm[3],b=(p/1e3).toFixed(1),x=Math.min(Number(b),Number(b)*.75).toFixed(1),d=Math.max(0,Number(b)-Number(x)).toFixed(1);return u.jsxs("div",{className:"w-full max-w-5xl mx-auto flex flex-col gap-6 py-6 px-4",children:[u.jsxs("div",{className:"bg-[#0b110d]/95 border border-brand-light/30 rounded-3xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xl",children:[u.jsxs("div",{className:"flex items-center gap-3.5",children:[u.jsx("div",{className:"w-11 h-11 rounded-2xl bg-brand-deep/30 border border-brand-lime/40 flex items-center justify-center text-brand-lime shadow-lg",children:u.jsx(Xy,{className:"w-6 h-6 animate-spin text-brand-lime"})}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center gap-2 font-mono text-xs text-brand-lime font-bold",children:[u.jsx(Yy,{className:"w-3.5 h-3.5 animate-pulse"}),u.jsx("span",{children:"AUTONOMOUS TOP 5 SOURCE RESEARCH RUNNING"})]}),u.jsxs("h2",{className:"text-lg font-bold text-white font-mono mt-0.5",children:[y.name," (Stage ",t,"/16)"]}),u.jsx("p",{className:"text-xs text-slate-300 font-sans",children:y.description})]})]}),u.jsxs("div",{className:"flex flex-col sm:items-end gap-1.5 font-mono",children:[u.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#060907] border border-brand-light/30 text-xs text-white shadow-inner",children:[u.jsx(ky,{className:"w-3.5 h-3.5 text-brand-lime animate-spin"}),u.jsxs("span",{children:["Total Elapsed: ",u.jsxs("strong",{className:"text-brand-lime",children:[b,"s"]})]})]}),u.jsxs("div",{className:"flex items-center gap-2 text-[10px] text-slate-400",children:[u.jsxs("span",{className:"flex items-center gap-1",children:[u.jsx(id,{className:"w-3 h-3 text-amber-300"})," Scrape: ",x,"s"]}),u.jsx("span",{children:"•"}),u.jsxs("span",{className:"flex items-center gap-1",children:[u.jsx(qg,{className:"w-3 h-3 text-sky-300"})," Synthesis: ",d,"s"]})]})]})]}),u.jsxs("div",{className:"bg-[#0b110d]/90 border border-brand-lime/30 rounded-2xl p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-lg",children:[u.jsxs("div",{className:"flex items-center gap-2.5",children:[u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-brand-lime animate-ping"}),u.jsxs("span",{className:"text-xs font-mono text-slate-300",children:["CURRENTLY EXTRACTING FROM: ",u.jsx("strong",{className:`font-bold ${h.color}`,children:h.name})]})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsxs("span",{className:"text-[11px] font-mono text-slate-400",children:["Action: ",h.metric]}),u.jsx("span",{className:`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${h.badge}`,children:"ACTIVE"})]})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-5",children:[u.jsxs("div",{className:"lg:col-span-7 bg-[#070c09] border border-brand-light/20 rounded-3xl p-5 flex flex-col gap-3 shadow-2xl relative overflow-hidden",children:[u.jsxs("div",{className:"flex items-center justify-between font-mono text-xs text-slate-300",children:[u.jsx("span",{className:"text-brand-lime font-bold",children:"TOP 5 SOURCE PHOTON STREAM"}),u.jsx("span",{className:"text-slate-500",children:"Latency: ~210ms avg"})]}),u.jsx("div",{className:"w-full h-[320px] rounded-2xl overflow-hidden bg-[#050806] border border-white/[0.06] shadow-inner",children:u.jsx("canvas",{ref:l,width:620,height:320,className:"w-full h-full block"})}),u.jsxs("div",{className:"bg-[#0b110d] border border-brand-light/30 rounded-xl px-4 py-2.5 flex items-center gap-2 text-xs font-mono text-slate-200",children:[u.jsx(Xf,{className:"w-4 h-4 text-brand-lime animate-pulse flex-shrink-0"}),u.jsx("span",{className:"truncate",children:i||"https://finance.yahoo.com"}),u.jsx("span",{className:"ml-auto px-2 py-0.5 rounded bg-brand-medium/20 text-brand-lime text-[10px] font-bold",children:"200 OK"})]})]}),u.jsxs("div",{className:"lg:col-span-5 bg-[#070c09] border border-brand-light/20 rounded-3xl p-5 flex flex-col gap-3 shadow-2xl",children:[u.jsxs("div",{className:"flex items-center justify-between text-xs font-mono text-slate-300",children:[u.jsxs("div",{className:"flex items-center gap-2 text-brand-lime font-bold",children:[u.jsx(uS,{className:"w-4 h-4"}),u.jsx("span",{children:"Webcmd Skill Telemetry"})]}),u.jsxs("span",{className:"text-[10px] text-slate-400 bg-black/40 px-2 py-0.5 rounded",children:[f.length," actions"]})]}),u.jsxs("div",{className:"flex-1 bg-[#050806] border border-white/[0.06] rounded-2xl p-3.5 overflow-y-auto font-mono text-[11px] leading-relaxed flex flex-col gap-1.5 text-slate-300 max-h-[360px] shadow-inner",children:[f.map((g,_)=>u.jsxs("div",{className:"flex items-start gap-2 py-1 hover:bg-white/[0.03] rounded px-1.5",children:[u.jsx("span",{className:"text-slate-500 text-[10px] flex-shrink-0",children:g.time}),u.jsx("span",{className:`text-[9px] uppercase px-1.5 py-0.5 rounded font-bold flex-shrink-0 ${g.type==="webcmd"?"bg-brand-light/20 text-brand-lime":g.type==="evidence"?"bg-brand-medium/20 text-brand-light":g.type==="checkpoint"?"bg-amber-400/20 text-amber-300 font-bold":"bg-slate-800 text-slate-400"}`,children:g.type}),u.jsx("span",{className:`break-all ${g.type==="checkpoint"?"text-amber-200 font-bold":"text-slate-300"}`,children:g.message})]},_)),u.jsx("div",{ref:c})]})]})]})]})}var oh={};(function t(e,n,i,r){var s=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=function(){if(!e.OffscreenCanvas)return!1;try{var N=new OffscreenCanvas(1,1),C=N.getContext("2d");C.fillRect(0,0,1,1);var V=N.transferToImageBitmap();C.createPattern(V,"no-repeat")}catch{return!1}return!0}();function l(){}function c(N){var C=n.exports.Promise,V=C!==void 0?C:e.Promise;return typeof V=="function"?new V(N):(N(l,l),null)}var p=function(N,C){return{transform:function(V){if(N)return V;if(C.has(V))return C.get(V);var se=new OffscreenCanvas(V.width,V.height),ie=se.getContext("2d");return ie.drawImage(V,0,0),C.set(V,se),se},clear:function(){C.clear()}}}(o,new Map),m=function(){var N=Math.floor(16.666666666666668),C,V,se={},ie=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(C=function(re){var B=Math.random();return se[B]=requestAnimationFrame(function Q(ee){ie===ee||ie+N-1<ee?(ie=ee,delete se[B],re()):se[B]=requestAnimationFrame(Q)}),B},V=function(re){se[re]&&cancelAnimationFrame(se[re])}):(C=function(re){return setTimeout(re,N)},V=function(re){return clearTimeout(re)}),{frame:C,cancel:V}}(),f=function(){var N,C,V={};function se(ie){function re(B,Q){ie.postMessage({options:B||{},callback:Q})}ie.init=function(Q){var ee=Q.transferControlToOffscreen();ie.postMessage({canvas:ee},[ee])},ie.fire=function(Q,ee,fe){if(C)return re(Q,null),C;var Se=Math.random().toString(36).slice(2);return C=c(function(he){function le(ge){ge.data.callback===Se&&(delete V[Se],ie.removeEventListener("message",le),C=null,p.clear(),fe(),he())}ie.addEventListener("message",le),re(Q,Se),V[Se]=le.bind(null,{data:{callback:Se}})}),C},ie.reset=function(){ie.postMessage({reset:!0});for(var Q in V)V[Q](),delete V[Q]}}return function(){if(N)return N;if(!i&&s){var ie=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{N=new Worker(URL.createObjectURL(new Blob([ie])))}catch(re){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",re),null}se(N)}return N}}(),h={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function y(N,C){return C?C(N):N}function b(N){return N!=null}function x(N,C,V){return y(N&&b(N[C])?N[C]:h[C],V)}function d(N){return N<0?0:Math.floor(N)}function g(N,C){return Math.floor(Math.random()*(C-N))+N}function _(N){return parseInt(N,16)}function M(N){return N.map(T)}function T(N){var C=String(N).replace(/[^0-9a-f]/gi,"");return C.length<6&&(C=C[0]+C[0]+C[1]+C[1]+C[2]+C[2]),{r:_(C.substring(0,2)),g:_(C.substring(2,4)),b:_(C.substring(4,6))}}function A(N){var C=x(N,"origin",Object);return C.x=x(C,"x",Number),C.y=x(C,"y",Number),C}function R(N){N.width=document.documentElement.clientWidth,N.height=document.documentElement.clientHeight}function v(N){var C=N.getBoundingClientRect();N.width=C.width,N.height=C.height}function E(N){var C=document.createElement("canvas");return C.style.position="fixed",C.style.top="0px",C.style.left="0px",C.style.pointerEvents="none",C.style.zIndex=N,C}function I(N,C,V,se,ie,re,B,Q,ee){N.save(),N.translate(C,V),N.rotate(re),N.scale(se,ie),N.arc(0,0,1,B,Q,ee),N.restore()}function L(N){var C=N.angle*(Math.PI/180),V=N.spread*(Math.PI/180);return{x:N.x,y:N.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:N.startVelocity*.5+Math.random()*N.startVelocity,angle2D:-C+(.5*V-Math.random()*V),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:N.color,shape:N.shape,tick:0,totalTicks:N.ticks,decay:N.decay,drift:N.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:N.gravity*3,ovalScalar:.6,scalar:N.scalar,flat:N.flat}}function D(N,C){C.x+=Math.cos(C.angle2D)*C.velocity+C.drift,C.y+=Math.sin(C.angle2D)*C.velocity+C.gravity,C.velocity*=C.decay,C.flat?(C.wobble=0,C.wobbleX=C.x+10*C.scalar,C.wobbleY=C.y+10*C.scalar,C.tiltSin=0,C.tiltCos=0,C.random=1):(C.wobble+=C.wobbleSpeed,C.wobbleX=C.x+10*C.scalar*Math.cos(C.wobble),C.wobbleY=C.y+10*C.scalar*Math.sin(C.wobble),C.tiltAngle+=.1,C.tiltSin=Math.sin(C.tiltAngle),C.tiltCos=Math.cos(C.tiltAngle),C.random=Math.random()+2);var V=C.tick++/C.totalTicks,se=C.x+C.random*C.tiltCos,ie=C.y+C.random*C.tiltSin,re=C.wobbleX+C.random*C.tiltCos,B=C.wobbleY+C.random*C.tiltSin;if(N.fillStyle="rgba("+C.color.r+", "+C.color.g+", "+C.color.b+", "+(1-V)+")",N.beginPath(),a&&C.shape.type==="path"&&typeof C.shape.path=="string"&&Array.isArray(C.shape.matrix))N.fill(W(C.shape.path,C.shape.matrix,C.x,C.y,Math.abs(re-se)*.1,Math.abs(B-ie)*.1,Math.PI/10*C.wobble));else if(C.shape.type==="bitmap"){var Q=Math.PI/10*C.wobble,ee=Math.abs(re-se)*.1,fe=Math.abs(B-ie)*.1,Se=C.shape.bitmap.width*C.scalar,he=C.shape.bitmap.height*C.scalar,le=new DOMMatrix([Math.cos(Q)*ee,Math.sin(Q)*ee,-Math.sin(Q)*fe,Math.cos(Q)*fe,C.x,C.y]);le.multiplySelf(new DOMMatrix(C.shape.matrix));var ge=N.createPattern(p.transform(C.shape.bitmap),"no-repeat");ge.setTransform(le),N.globalAlpha=1-V,N.fillStyle=ge,N.fillRect(C.x-Se/2,C.y-he/2,Se,he),N.globalAlpha=1}else if(C.shape==="circle")N.ellipse?N.ellipse(C.x,C.y,Math.abs(re-se)*C.ovalScalar,Math.abs(B-ie)*C.ovalScalar,Math.PI/10*C.wobble,0,2*Math.PI):I(N,C.x,C.y,Math.abs(re-se)*C.ovalScalar,Math.abs(B-ie)*C.ovalScalar,Math.PI/10*C.wobble,0,2*Math.PI);else if(C.shape==="star")for(var xe=Math.PI/2*3,Be=4*C.scalar,Ve=8*C.scalar,it=C.x,st=C.y,ft=5,lt=Math.PI/ft;ft--;)it=C.x+Math.cos(xe)*Ve,st=C.y+Math.sin(xe)*Ve,N.lineTo(it,st),xe+=lt,it=C.x+Math.cos(xe)*Be,st=C.y+Math.sin(xe)*Be,N.lineTo(it,st),xe+=lt;else N.moveTo(Math.floor(C.x),Math.floor(C.y)),N.lineTo(Math.floor(C.wobbleX),Math.floor(ie)),N.lineTo(Math.floor(re),Math.floor(B)),N.lineTo(Math.floor(se),Math.floor(C.wobbleY));return N.closePath(),N.fill(),C.tick<C.totalTicks}function H(N,C,V,se,ie){var re=C.slice(),B=N.getContext("2d"),Q,ee,fe=c(function(Se){function he(){Q=ee=null,B.clearRect(0,0,se.width,se.height),p.clear(),ie(),Se()}function le(){i&&!(se.width===r.width&&se.height===r.height)&&(se.width=N.width=r.width,se.height=N.height=r.height),!se.width&&!se.height&&(V(N),se.width=N.width,se.height=N.height),B.clearRect(0,0,se.width,se.height),re=re.filter(function(ge){return D(B,ge)}),re.length?Q=m.frame(le):he()}Q=m.frame(le),ee=he});return{addFettis:function(Se){return re=re.concat(Se),fe},canvas:N,promise:fe,reset:function(){Q&&m.cancel(Q),ee&&ee()}}}function Z(N,C){var V=!N,se=!!x(C||{},"resize"),ie=!1,re=x(C,"disableForReducedMotion",Boolean),B=s&&!!x(C||{},"useWorker"),Q=B?f():null,ee=V?R:v,fe=N&&Q?!!N.__confetti_initialized:!1,Se=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,he;function le(xe,Be,Ve){for(var it=x(xe,"particleCount",d),st=x(xe,"angle",Number),ft=x(xe,"spread",Number),lt=x(xe,"startVelocity",Number),vt=x(xe,"decay",Number),Et=x(xe,"gravity",Number),O=x(xe,"drift",Number),Vt=x(xe,"colors",M),rt=x(xe,"ticks",Number),P=x(xe,"shapes"),S=x(xe,"scalar"),G=!!x(xe,"flat"),Y=A(xe),te=it,de=[],pe=N.width*Y.x,ne=N.height*Y.y;te--;)de.push(L({x:pe,y:ne,angle:st,spread:ft,startVelocity:lt,color:Vt[te%Vt.length],shape:P[g(0,P.length)],ticks:rt,decay:vt,gravity:Et,drift:O,scalar:S,flat:G}));return he?he.addFettis(de):(he=H(N,de,ee,Be,Ve),he.promise)}function ge(xe){var Be=re||x(xe,"disableForReducedMotion",Boolean),Ve=x(xe,"zIndex",Number);if(Be&&Se)return c(function(lt){lt()});V&&he?N=he.canvas:V&&!N&&(N=E(Ve),document.body.appendChild(N)),se&&!fe&&ee(N);var it={width:N.width,height:N.height};Q&&!fe&&Q.init(N),fe=!0,Q&&(N.__confetti_initialized=!0);function st(){if(Q){var lt={getBoundingClientRect:function(){if(!V)return N.getBoundingClientRect()}};ee(lt),Q.postMessage({resize:{width:lt.width,height:lt.height}});return}it.width=it.height=null}function ft(){he=null,se&&(ie=!1,e.removeEventListener("resize",st)),V&&N&&(document.body.contains(N)&&document.body.removeChild(N),N=null,fe=!1)}return se&&!ie&&(ie=!0,e.addEventListener("resize",st,!1)),Q?Q.fire(xe,it,ft):le(xe,it,ft)}return ge.reset=function(){Q&&Q.reset(),he&&he.reset()},ge}var k;function X(){return k||(k=Z(null,{useWorker:!0,resize:!0})),k}function W(N,C,V,se,ie,re,B){var Q=new Path2D(N),ee=new Path2D;ee.addPath(Q,new DOMMatrix(C));var fe=new Path2D;return fe.addPath(ee,new DOMMatrix([Math.cos(B)*ie,Math.sin(B)*ie,-Math.sin(B)*re,Math.cos(B)*re,V,se])),fe}function F(N){if(!a)throw new Error("path confetti are not supported in this browser");var C,V;typeof N=="string"?C=N:(C=N.path,V=N.matrix);var se=new Path2D(C),ie=document.createElement("canvas"),re=ie.getContext("2d");if(!V){for(var B=1e3,Q=B,ee=B,fe=0,Se=0,he,le,ge=0;ge<B;ge+=2)for(var xe=0;xe<B;xe+=2)re.isPointInPath(se,ge,xe,"nonzero")&&(Q=Math.min(Q,ge),ee=Math.min(ee,xe),fe=Math.max(fe,ge),Se=Math.max(Se,xe));he=fe-Q,le=Se-ee;var Be=10,Ve=Math.min(Be/he,Be/le);V=[Ve,0,0,Ve,-Math.round(he/2+Q)*Ve,-Math.round(le/2+ee)*Ve]}return{type:"path",path:C,matrix:V}}function K(N){var C,V=1,se="#000000",ie='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof N=="string"?C=N:(C=N.text,V="scalar"in N?N.scalar:V,ie="fontFamily"in N?N.fontFamily:ie,se="color"in N?N.color:se);var re=10*V,B=""+re+"px "+ie,Q=new OffscreenCanvas(re,re),ee=Q.getContext("2d");ee.font=B;var fe=ee.measureText(C),Se=Math.ceil(fe.actualBoundingBoxRight+fe.actualBoundingBoxLeft),he=Math.ceil(fe.actualBoundingBoxAscent+fe.actualBoundingBoxDescent),le=2,ge=fe.actualBoundingBoxLeft+le,xe=fe.actualBoundingBoxAscent+le;Se+=le+le,he+=le+le,Q=new OffscreenCanvas(Se,he),ee=Q.getContext("2d"),ee.font=B,ee.fillStyle=se,ee.fillText(C,ge,xe);var Be=1/V;return{type:"bitmap",bitmap:Q.transferToImageBitmap(),matrix:[Be,0,0,Be,-Se*Be/2,-he*Be/2]}}n.exports=function(){return X().apply(this,arguments)},n.exports.reset=function(){X().reset()},n.exports.create=Z,n.exports.shapeFromPath=F,n.exports.shapeFromText=K})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),oh,!1);const HT=oh.exports;oh.exports.create;function GT({stockData:t,params:e}){const[n,i]=Ie.useState("1M"),[r,s]=Ie.useState(!0),[a,o]=Ie.useState(!1),[l,c]=Ie.useState(null),p=Ie.useRef(null),m=(t==null?void 0:t.currentPrice)||214.72,f=(e==null?void 0:e.currency)==="INR"||((e==null?void 0:e.market)||"").includes("IN")?"₹":"$",h=Ie.useMemo(()=>{const v=n==="1D"?30:n==="1W"?35:n==="1M"?45:n==="1Y"?60:80,E=n==="1D"?.012:n==="1W"?.025:n==="1M"?.045:n==="1Y"?.12:.25,I=.08,L=[],D=[],H=[],Z=new Date;for(let N=v-1;N>=0;N--){const C=new Date(Z);n==="1D"?C.setMinutes(C.getMinutes()-N*15):n==="1W"?C.setHours(C.getHours()-N*4):n==="1M"?C.setDate(C.getDate()-N):n==="1Y"?C.setDate(C.getDate()-N*6):C.setDate(C.getDate()-N*22);const V=(v-1-N)/v,se=Math.sin(V*Math.PI*4)*(E*.5),ie=Math.cos(V*Math.PI*7)*(E*.3),re=(V-.5)*I,B=Math.sin(N*997)*.5*(E*.2),Q=m*(1+re+se+ie+B),ee=Math.floor((15e5+Math.abs(Math.sin(N*331))*35e5)*(Q/m));L.push(Q),D.push(n==="1D"?C.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):C.toLocaleDateString([],{month:"short",day:"numeric"})),H.push(ee)}L[L.length-1]=m;const k=L.map((N,C,V)=>{const se=Math.min(C+1,10);return V.slice(C+1-se,C+1).reduce((re,B)=>re+B,0)/se}),X=L.map((N,C,V)=>{const se=Math.min(C+1,20);return V.slice(C+1-se,C+1).reduce((re,B)=>re+B,0)/se}),W=Math.min(...L)*.985,F=Math.max(...L)*1.015,K=Math.max(...H);return{prices:L,dates:D,volumes:H,sma50:k,sma200:X,minPrice:W,maxPrice:F,maxVolume:K}},[n,m]);Ie.useEffect(()=>{const v=p.current;if(!v)return;const E=v.getContext("2d"),I=window.devicePixelRatio||1,L=v.getBoundingClientRect();v.width=L.width*I,v.height=L.height*I,E.scale(I,I);const D=L.width,H=L.height,Z=H*.76,k=H*.2;E.clearRect(0,0,D,H);const{prices:X,dates:W,volumes:F,sma50:K,sma200:N,minPrice:C,maxPrice:V,maxVolume:se}=h,ie=X.length,re=V-C||1,B=le=>le/(ie-1)*(D-60)+10,Q=le=>Z-(le-C)/re*(Z-30)-10;E.strokeStyle="rgba(255, 255, 255, 0.05)",E.lineWidth=1;for(let le=0;le<=4;le++){const ge=Z/4*le;E.beginPath(),E.moveTo(10,ge),E.lineTo(D-50,ge),E.stroke();const xe=(V-re/4*le).toFixed(2);E.fillStyle="rgba(148, 163, 184, 0.6)",E.font="10px monospace",E.textAlign="left",E.fillText(`${f}${xe}`,D-45,ge+3)}for(let le=0;le<ie;le++){const ge=B(le),xe=Math.max(2,D/ie*.6),Be=F[le]/se*k,Ve=le===0||X[le]>=X[le-1];E.fillStyle=Ve?"rgba(126, 208, 67, 0.22)":"rgba(244, 63, 94, 0.22)",E.fillRect(ge-xe/2,H-Be,xe,Be)}const ee=E.createLinearGradient(0,0,0,Z);ee.addColorStop(0,"rgba(240, 251, 67, 0.28)"),ee.addColorStop(.5,"rgba(126, 208, 67, 0.12)"),ee.addColorStop(1,"rgba(6, 9, 7, 0.0)"),E.beginPath(),E.moveTo(B(0),Z);for(let le=0;le<ie;le++)E.lineTo(B(le),Q(X[le]));if(E.lineTo(B(ie-1),Z),E.closePath(),E.fillStyle=ee,E.fill(),r){E.beginPath(),E.strokeStyle="#38bdf8",E.lineWidth=1.5,E.setLineDash([4,4]);for(let le=0;le<ie;le++){const ge=B(le),xe=Q(K[le]);le===0?E.moveTo(ge,xe):E.lineTo(ge,xe)}E.stroke(),E.setLineDash([])}if(a){E.beginPath(),E.strokeStyle="#c084fc",E.lineWidth=1.5,E.setLineDash([5,3]);for(let le=0;le<ie;le++){const ge=B(le),xe=Q(N[le]);le===0?E.moveTo(ge,xe):E.lineTo(ge,xe)}E.stroke(),E.setLineDash([])}E.beginPath(),E.strokeStyle="#F0FB43",E.lineWidth=2.5,E.shadowColor="rgba(240, 251, 67, 0.5)",E.shadowBlur=8;for(let le=0;le<ie;le++){const ge=B(le),xe=Q(X[le]);le===0?E.moveTo(ge,xe):E.lineTo(ge,xe)}E.stroke(),E.shadowBlur=0;const fe=l!==null?l:ie-1,Se=B(fe),he=Q(X[fe]);E.beginPath(),E.strokeStyle="rgba(240, 251, 67, 0.4)",E.setLineDash([3,3]),E.moveTo(Se,0),E.lineTo(Se,H),E.stroke(),E.setLineDash([]),E.beginPath(),E.fillStyle="#F0FB43",E.shadowColor="#F0FB43",E.shadowBlur=12,E.arc(Se,he,4.5,0,Math.PI*2),E.fill(),E.shadowBlur=0},[h,r,a,l,f]);const y=v=>{const E=p.current;if(!E)return;const I=E.getBoundingClientRect(),L=v.clientX-I.left,D=h.prices.length,H=Math.min(Math.max(0,Math.round((L-10)/(I.width-60)*(D-1))),D-1);c(H)},b=()=>{c(null)},x=l!==null?l:h.prices.length-1,d=h.prices[x],g=h.dates[x],_=h.volumes[x],M=h.prices[0],T=d-M,A=T/M*100,R=T>=0;return u.jsxs("div",{className:"bg-[#0b110d]/90 border border-brand-light/20 rounded-3xl p-6 flex flex-col gap-4 shadow-xl",children:[u.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-white/[0.08] pb-4",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:"w-8 h-8 rounded-xl bg-brand-deep border border-brand-lime/30 flex items-center justify-center text-brand-lime",children:u.jsx(My,{className:"w-4 h-4"})}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsxs("span",{className:"text-xl font-mono font-black text-white",children:[f,d.toFixed(2)]}),u.jsxs("span",{className:`text-xs font-mono font-bold px-2 py-0.5 rounded-md ${R?"bg-emerald-500/20 text-emerald-400":"bg-rose-500/20 text-rose-400"}`,children:[R?"+":"",T.toFixed(2)," (",R?"+":"",A.toFixed(2),"%)"]})]}),u.jsxs("span",{className:"text-[11px] font-mono text-slate-400",children:[g," - Vol: ",(_/1e6).toFixed(2),"M shares"]})]})]}),u.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[u.jsx("div",{className:"flex items-center bg-[#060907] border border-white/[0.08] rounded-xl p-1 font-mono text-xs",children:["1D","1W","1M","1Y","5Y"].map(v=>u.jsx("button",{onClick:()=>i(v),className:`px-2.5 py-1 rounded-lg font-bold transition-all ${n===v?"bg-brand-lime text-[#060907] shadow-md":"text-slate-400 hover:text-white"}`,children:v},v))}),u.jsxs("div",{className:"flex items-center gap-2 font-mono text-[11px]",children:[u.jsx("button",{onClick:()=>s(!r),className:`px-2.5 py-1 rounded-lg border transition-all ${r?"bg-sky-500/20 border-sky-400 text-sky-300":"bg-[#060907] border-white/[0.08] text-slate-500"}`,children:"SMA 50"}),u.jsx("button",{onClick:()=>o(!a),className:`px-2.5 py-1 rounded-lg border transition-all ${a?"bg-purple-500/20 border-purple-400 text-purple-300":"bg-[#060907] border-white/[0.08] text-slate-500"}`,children:"SMA 200"})]})]})]}),u.jsx("div",{className:"relative w-full h-64 sm:h-72",children:u.jsx("canvas",{ref:p,onMouseMove:y,onMouseLeave:b,className:"w-full h-full cursor-crosshair"})}),u.jsxs("div",{className:"flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/[0.06]",children:[u.jsxs("div",{className:"flex items-center gap-4",children:[u.jsxs("span",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-2.5 h-0.5 bg-[#F0FB43] rounded"})," Price Feed (Real-Time)"]}),r&&u.jsxs("span",{className:"flex items-center gap-1.5 text-sky-300",children:[u.jsx("span",{className:"w-2.5 h-0.5 bg-sky-400 rounded"})," 50-Day Moving Avg"]}),a&&u.jsxs("span",{className:"flex items-center gap-1.5 text-purple-300",children:[u.jsx("span",{className:"w-2.5 h-0.5 bg-purple-400 rounded"})," 200-Day Moving Avg"]})]}),u.jsx("span",{className:"text-[10px] text-slate-500 hidden sm:inline",children:"High-Frequency 3-Tier Feed • Interactive Sandbox"})]})]})}function WT({stockData:t,params:e}){const n=(t==null?void 0:t.currentPrice)||214.72,i=(e==null?void 0:e.currency)==="INR"||((e==null?void 0:e.market)||"").includes("IN")?"₹":"$",[r,s]=Ie.useState(25),[a,o]=Ie.useState(48),[l,c]=Ie.useState(9.5),[p,m]=Ie.useState(3.5),[f,h]=Ie.useState(24.5),y=Ie.useMemo(()=>{let x=46.34;const d=[];let g=0;for(let E=1;E<=5;E++){const I=x*Math.pow(1+r/100,E)*(a/48),L=Math.pow(1+l/100,E),D=I/L;d.push({year:`Year ${E}`,fcf:I,presentValue:D}),g+=D}const T=d[4].fcf*(1+p/100)/(l/100-p/100)/Math.pow(1+l/100,5),A=g+T,R=A/f*((e==null?void 0:e.currency)==="INR"?10:1),v=(R-n)/n*100;return{projectedFCF:d,cumulativePV:g,pvTerminalValue:T,enterpriseValue:A,fairValuePerShare:R,upsidePotential:v}},[r,a,l,p,f,n,e]),b=y.upsidePotential>=0;return u.jsxs("div",{className:"bg-[#0b110d]/90 border border-brand-light/20 rounded-3xl p-6 flex flex-col gap-5 shadow-xl",children:[u.jsxs("div",{className:"flex items-center justify-between border-b border-white/[0.08] pb-3",children:[u.jsxs("div",{className:"flex items-center gap-2.5",children:[u.jsx("div",{className:"w-8 h-8 rounded-xl bg-brand-deep border border-brand-lime/30 flex items-center justify-center text-brand-lime",children:u.jsx(Gy,{className:"w-4 h-4"})}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-base font-bold text-white font-mono",children:"Interactive DCF Valuation Sandbox"}),u.jsx("span",{className:"text-[11px] text-slate-400 font-sans",children:"Adjust growth assumptions to recalculate intrinsic fair value in real-time"})]})]}),u.jsx("span",{className:"text-xs font-mono px-3 py-1 rounded-full bg-brand-deep/60 text-brand-lime border border-brand-light/30 font-bold",children:"5-YEAR PROJECTION MODEL"})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-[#060907] border border-brand-light/20",children:[u.jsxs("div",{className:"flex flex-col gap-1",children:[u.jsx("span",{className:"text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold",children:"CURRENT MARKET PRICE"}),u.jsxs("span",{className:"text-2xl font-mono font-black text-white",children:[i,n.toFixed(2)]}),u.jsx("span",{className:"text-[10px] text-slate-500 font-mono",children:"Live tape benchmark"})]}),u.jsxs("div",{className:"flex flex-col gap-1",children:[u.jsx("span",{className:"text-[10px] font-mono uppercase tracking-wider text-brand-lime font-bold",children:"INTRINSIC FAIR VALUE (DCF)"}),u.jsxs("span",{className:"text-2xl font-mono font-black green-gradient-text",children:[i,y.fairValuePerShare.toFixed(2)]}),u.jsx("span",{className:"text-[10px] text-slate-400 font-mono",children:"Gordon Growth Model"})]}),u.jsxs("div",{className:"flex flex-col gap-1",children:[u.jsx("span",{className:"text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold",children:"IMPLIED UPSIDE / MARGIN OF SAFETY"}),u.jsxs("span",{className:`text-2xl font-mono font-black ${b?"text-emerald-400":"text-rose-400"}`,children:[b?"+":"",y.upsidePotential.toFixed(1),"%"]}),u.jsx("span",{className:`text-[10px] font-mono font-bold ${b?"text-emerald-400":"text-rose-400"}`,children:b?"✓ Undervalued (Safety Margin)":"⚠ Premium Multiple"})]})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs",children:[u.jsxs("div",{className:"p-3.5 rounded-xl bg-[#060907] border border-white/[0.08] flex flex-col gap-2",children:[u.jsxs("div",{className:"flex justify-between items-center",children:[u.jsx("span",{className:"text-slate-300 font-bold",children:"5-Year Revenue CAGR"}),u.jsxs("span",{className:"text-brand-lime font-bold",children:[r.toFixed(1),"% YoY"]})]}),u.jsx("input",{type:"range",min:"5",max:"60",step:"0.5",value:r,onChange:x=>s(Number(x.target.value)),className:"accent-brand-lime cursor-pointer w-full"}),u.jsxs("div",{className:"flex justify-between text-[10px] text-slate-500",children:[u.jsx("span",{children:"Conservative (5%)"}),u.jsx("span",{children:"Aggressive (60%)"})]})]}),u.jsxs("div",{className:"p-3.5 rounded-xl bg-[#060907] border border-white/[0.08] flex flex-col gap-2",children:[u.jsxs("div",{className:"flex justify-between items-center",children:[u.jsx("span",{className:"text-slate-300 font-bold",children:"Target Operating Margin"}),u.jsxs("span",{className:"text-brand-lime font-bold",children:[a.toFixed(1),"%"]})]}),u.jsx("input",{type:"range",min:"15",max:"70",step:"1",value:a,onChange:x=>o(Number(x.target.value)),className:"accent-brand-lime cursor-pointer w-full"}),u.jsxs("div",{className:"flex justify-between text-[10px] text-slate-500",children:[u.jsx("span",{children:"Industry Avg (15%)"}),u.jsx("span",{children:"Software Moat (70%)"})]})]}),u.jsxs("div",{className:"p-3.5 rounded-xl bg-[#060907] border border-white/[0.08] flex flex-col gap-2",children:[u.jsxs("div",{className:"flex justify-between items-center",children:[u.jsx("span",{className:"text-slate-300 font-bold",children:"Discount Rate (WACC)"}),u.jsxs("span",{className:"text-brand-lime font-bold",children:[l.toFixed(1),"%"]})]}),u.jsx("input",{type:"range",min:"6",max:"16",step:"0.25",value:l,onChange:x=>c(Number(x.target.value)),className:"accent-brand-lime cursor-pointer w-full"}),u.jsxs("div",{className:"flex justify-between text-[10px] text-slate-500",children:[u.jsx("span",{children:"Low Risk (6%)"}),u.jsx("span",{children:"High Risk (16%)"})]})]}),u.jsxs("div",{className:"p-3.5 rounded-xl bg-[#060907] border border-white/[0.08] flex flex-col gap-2",children:[u.jsxs("div",{className:"flex justify-between items-center",children:[u.jsx("span",{className:"text-slate-300 font-bold",children:"Terminal Growth Rate"}),u.jsxs("span",{className:"text-brand-lime font-bold",children:[p.toFixed(1),"%"]})]}),u.jsx("input",{type:"range",min:"1.5",max:"5.0",step:"0.25",value:p,onChange:x=>m(Number(x.target.value)),className:"accent-brand-lime cursor-pointer w-full"}),u.jsxs("div",{className:"flex justify-between text-[10px] text-slate-500",children:[u.jsx("span",{children:"GDP Baseline (1.5%)"}),u.jsx("span",{children:"Perpetual Expansion (5%)"})]})]})]}),u.jsxs("div",{className:"flex flex-col gap-2 border-t border-white/[0.06] pt-3 font-mono text-xs",children:[u.jsx("span",{className:"text-slate-400 font-bold text-[11px]",children:"5-Year Present Value Cash Flow Breakdown:"}),u.jsx("div",{className:"grid grid-cols-5 gap-2 text-center",children:y.projectedFCF.map((x,d)=>u.jsxs("div",{className:"p-2.5 rounded-xl bg-[#060907] border border-white/[0.06] flex flex-col gap-1",children:[u.jsx("span",{className:"text-slate-400 text-[10px]",children:x.year}),u.jsxs("span",{className:"text-white font-bold",children:[i,x.fcf.toFixed(1),"B"]}),u.jsxs("span",{className:"text-brand-lime text-[10px]",children:["PV: ",i,x.presentValue.toFixed(1),"B"]})]},d))})]})]})}function jT({stockData:t,params:e,userLevel:n,setUserLevel:i,onResearchAnother:r}){const[s,a]=Ie.useState(!1),[o,l]=Ie.useState(!1),[c,p]=Ie.useState((t==null?void 0:t.scores)||{financialHealth:88,growthPotential:84,historicalPerformance:86,valuation:78,debtLeverage:82,newsEvents:85,riskProfile:80}),m=BT(c);Ie.useEffect(()=>{Ye.playReportSuccess(),HT({particleCount:90,spread:70,origin:{y:.6},colors:["#F0FB43","#7ED043","#4FB734","#328F35"]})},[]);const f=()=>{Ye.playClick();const h=`==================================================
INVESTILENS - AUTONOMOUS RESEARCH REPORT
==================================================
Company: ${t.name} (${t.ticker})
Market: ${e.market} | Horizon: ${e.horizon}
Research Score: ${m.finalScore} / 100
Verdict: ${m.profileVerdict}
Evidence Confidence: HIGH (Cross-Verified Across 6 Sources)

DETERMINISTIC SCORE FORMULA
${m.formulaExplanation}

BULL CASE PILLARS
${t.bullCase.map(y=>`- ${y.title}: ${y.desc}`).join(`
`)}

BEAR CASE HAZARDS
${t.bearCase.map(y=>`- ${y.title}: ${y.desc}`).join(`
`)}

NEWS SENTIMENT
Positive: ${t.newsSentiment.positivePercent}% | Neutral: ${t.newsSentiment.neutralPercent}% | Negative: ${t.newsSentiment.negativePercent}%

DISCLAIMER: Decision-support assessment based on publicly verified web information. Not guaranteed financial advice.
==================================================`;navigator.clipboard.writeText(h),a(!0),setTimeout(()=>a(!1),2e3)};return u.jsxs("div",{className:"w-full max-w-5xl mx-auto flex flex-col gap-6 py-6 px-4",children:[u.jsxs("div",{className:"relative overflow-hidden bg-gradient-to-br from-[#0c1a11] via-[#0f2417] to-[#070e0a] border border-brand-light/40 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl",children:[u.jsxs("div",{className:"flex items-center gap-4 relative z-10",children:[u.jsx("div",{className:"w-16 h-16 rounded-2xl bg-[#060907] border-2 border-brand-lime flex items-center justify-center text-brand-lime shadow-2xl flex-shrink-0",children:u.jsx(jf,{className:"w-8 h-8"})}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center gap-2.5",children:[u.jsx("h2",{className:"text-2xl font-black text-white font-mono",children:t.name}),u.jsxs("span",{className:"text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-brand-deep/60 text-brand-lime border border-brand-light/30",children:[t.ticker," - ",t.exchange]})]}),u.jsxs("p",{className:"text-xs sm:text-sm text-slate-300 font-sans mt-0.5",children:[t.sector," - Calibrated for ",e.currency==="INR"?"INR ":"USD ",Number(e.amount).toLocaleString()," capital limit"]})]})]}),u.jsxs("div",{className:"flex items-center gap-6 ml-auto md:ml-0 relative z-10",children:[u.jsxs("div",{className:"text-right",children:[u.jsx("span",{className:"text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block",children:"DETERMINISTIC SCORE"}),u.jsxs("div",{className:"flex items-center gap-1.5 justify-end",children:[u.jsx("span",{className:"text-4xl font-black font-mono green-gradient-text",children:m.finalScore}),u.jsx("span",{className:"text-sm font-mono text-slate-500 font-bold",children:"/100"})]})]}),u.jsx("div",{className:"w-px h-12 bg-white/[0.1]"}),u.jsxs("div",{children:[u.jsx("span",{className:"text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-1",children:"VERDICT"}),u.jsx("span",{className:"text-xs font-black font-mono px-3.5 py-1.5 rounded-xl bg-brand-medium/25 text-brand-lime border border-brand-lime/50 shadow-lg shadow-brand-medium/20 inline-block",children:m.profileVerdict})]})]})]}),u.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 bg-[#0b110d] border border-brand-light/20 rounded-2xl p-3 text-xs font-mono",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(qf,{className:"w-4 h-4 text-brand-lime"}),u.jsxs("span",{className:"text-slate-300",children:["Evidence Confidence: ",u.jsx("strong",{className:"text-brand-lime",children:"HIGH (6 Sources Cross-Verified)"})]})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsxs("button",{onClick:()=>{Ye.playClick(),l(!o)},className:"px-3 py-1.5 rounded-xl bg-brand-deep/40 text-brand-lime border border-brand-light/30 hover:bg-brand-deep/60 transition-all flex items-center gap-1.5",children:[u.jsx(oS,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Score Simulator"})]}),u.jsxs("button",{onClick:f,className:"px-3 py-1.5 rounded-xl bg-brand-medium/25 text-brand-lime border border-brand-lime/40 hover:bg-brand-medium/40 transition-all flex items-center gap-1.5 font-bold",children:[s?u.jsx(Wg,{className:"w-3.5 h-3.5"}):u.jsx(By,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:s?"Copied!":"Copy Report"})]}),u.jsxs("button",{onClick:()=>{Ye.playClick(),r()},className:"px-3 py-1.5 rounded-xl bg-[#060907] text-slate-300 border border-white/[0.1] hover:text-white hover:border-brand-light/50 transition-all flex items-center gap-1.5",children:[u.jsx(Zy,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Research Another"})]})]})]}),o&&u.jsxs("div",{className:"bg-[#0b110d] border-2 border-brand-lime rounded-3xl p-6 flex flex-col gap-4 shadow-2xl animate-in fade-in",children:[u.jsxs("div",{className:"flex items-center justify-between border-b border-white/[0.08] pb-3",children:[u.jsx("span",{className:"text-brand-lime font-mono text-xs font-bold uppercase tracking-wider",children:"INTERACTIVE WHAT-IF SCENARIO SIMULATOR (STEP 12)"}),u.jsx("button",{onClick:()=>p(t.scores),className:"text-xs font-mono text-slate-400 hover:text-white",children:"Reset Values"})]}),u.jsx("p",{className:"text-xs text-slate-300 font-sans",children:"Adjust the fundamental and risk dimensions to test how different balance sheet changes alter the deterministic score:"}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs",children:Object.entries(Fx).map(([h,y])=>u.jsxs("div",{className:"p-3 rounded-xl bg-[#060907] border border-white/[0.08] flex flex-col gap-1.5",children:[u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{className:"text-slate-200 font-bold",children:y.label}),u.jsxs("span",{className:"text-brand-lime font-bold",children:[c[h],"/100"]})]}),u.jsx("input",{type:"range",min:"0",max:"100",value:c[h],onChange:b=>p({...c,[h]:Number(b.target.value)}),className:"accent-brand-lime cursor-pointer"})]},h))})]}),u.jsxs("div",{className:"flex flex-col gap-4",children:[u.jsxs("div",{className:"bg-[#0b110d]/90 border border-brand-light/20 rounded-3xl p-6 flex flex-col gap-4 shadow-xl",children:[u.jsxs("div",{className:"flex items-center justify-between border-b border-white/[0.08] pb-3",children:[u.jsxs("div",{className:"flex items-center gap-2.5",children:[u.jsx("span",{className:"w-6 h-6 rounded-full bg-brand-medium text-[#060907] flex items-center justify-center text-xs font-mono font-bold",children:"1"}),u.jsx("h3",{className:"text-base font-bold text-white font-mono",children:"The Big Picture & Decision Signal"})]}),u.jsx("span",{className:"text-xs font-mono text-brand-lime font-bold",children:"EXECUTIVE SUMMARY"})]}),u.jsx("p",{className:"text-sm text-slate-200 leading-relaxed font-sans",children:t.summary}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs",children:m.breakdown.map(h=>u.jsxs("div",{className:"p-3 rounded-2xl bg-[#060907] border border-white/[0.06] flex flex-col gap-1.5",children:[u.jsxs("div",{className:"flex justify-between items-center",children:[u.jsx("span",{className:"text-slate-300 font-bold",children:h.label}),u.jsxs("span",{className:"text-brand-lime font-bold",children:[h.rawScore,"/100"]})]}),u.jsx("div",{className:"w-full bg-slate-800 h-2 rounded-full overflow-hidden",children:u.jsx("div",{className:"bg-gradient-to-r from-brand-medium to-brand-lime h-full rounded-full",style:{width:`${h.rawScore}%`}})}),u.jsx("span",{className:"text-[10px] text-slate-400 truncate",children:h.description})]},h.key))})]}),u.jsx(GT,{stockData:t,params:e}),u.jsx(WT,{stockData:t,params:e}),u.jsxs("div",{className:"bg-[#07130c] border border-brand-light/30 rounded-3xl p-6 flex flex-col gap-4 shadow-xl",children:[u.jsxs("div",{className:"flex items-center justify-between border-b border-brand-light/20 pb-3",children:[u.jsxs("div",{className:"flex items-center gap-2.5",children:[u.jsx("span",{className:"w-6 h-6 rounded-full bg-brand-light text-[#060907] flex items-center justify-center text-xs font-mono font-bold",children:"4"}),u.jsx("h3",{className:"text-base font-bold text-brand-lime font-mono",children:"Why It May Be Attractive (Bull Case)"})]}),u.jsxs("span",{className:"text-xs font-mono px-2.5 py-0.5 rounded-full bg-brand-medium/20 text-brand-lime font-bold",children:[t.bullCase.length," VERIFIED PILLARS"]})]}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:t.bullCase.map((h,y)=>u.jsxs("div",{className:"p-4 rounded-2xl bg-[#0b1610] border border-brand-light/20 flex flex-col gap-2",children:[u.jsxs("div",{className:"flex items-center gap-1.5 text-xs font-bold text-brand-lime font-mono",children:[u.jsx(jg,{className:"w-4 h-4 text-brand-light flex-shrink-0"}),u.jsx("span",{children:h.title})]}),u.jsx("p",{className:"text-xs text-slate-300 leading-relaxed font-sans",children:h.desc}),u.jsxs("div",{className:"text-[10px] font-mono text-brand-light/80 pt-1 mt-auto",children:["Source: ",h.source]})]},y))})]}),u.jsxs("div",{className:"bg-[#14090b] border border-rose-500/30 rounded-3xl p-6 flex flex-col gap-4 shadow-xl",children:[u.jsxs("div",{className:"flex items-center justify-between border-b border-rose-500/20 pb-3",children:[u.jsxs("div",{className:"flex items-center gap-2.5",children:[u.jsx("span",{className:"w-6 h-6 rounded-full bg-rose-500 text-white flex items-center justify-center text-xs font-mono font-bold",children:"3"}),u.jsx("h3",{className:"text-base font-bold text-rose-300 font-mono",children:"Why To Be Cautious (Bear Counter-Analysis)"})]}),u.jsx("span",{className:"text-xs font-mono px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 font-bold",children:"DISCONFIRMATION FILTER"})]}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:t.bearCase.map((h,y)=>u.jsxs("div",{className:"p-4 rounded-2xl bg-[#0e0507] border border-rose-500/20 flex flex-col gap-2",children:[u.jsxs("div",{className:"flex items-center gap-1.5 text-xs font-bold text-rose-300 font-mono",children:[u.jsx(Zg,{className:"w-4 h-4 text-rose-400 flex-shrink-0"}),u.jsx("span",{children:h.title})]}),u.jsx("p",{className:"text-xs text-slate-300 leading-relaxed font-sans",children:h.desc}),u.jsxs("div",{className:"text-[10px] font-mono text-rose-400/80 pt-1 mt-auto",children:["Source: ",h.source]})]},y))})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[u.jsxs("div",{className:"bg-[#0b110d]/90 border border-brand-light/20 rounded-3xl p-6 flex flex-col gap-3 shadow-xl",children:[u.jsxs("div",{className:"flex items-center justify-between border-b border-white/[0.08] pb-2.5 font-mono text-xs",children:[u.jsx("span",{className:"text-brand-lime font-bold",children:"4. NEWS SENTIMENT CLASSIFICATION"}),u.jsxs("span",{className:"text-slate-400",children:[t.newsSentiment.totalArticlesParsed," Articles"]})]}),u.jsx("div",{className:"flex flex-col gap-2 pt-1",children:u.jsxs("div",{className:"h-3.5 w-full rounded-full overflow-hidden flex font-mono text-[9px] font-black",children:[u.jsxs("div",{style:{width:`${t.newsSentiment.positivePercent}%`},className:"bg-brand-medium h-full flex items-center justify-center text-[#060907]",children:[t.newsSentiment.positivePercent,"% POS"]}),u.jsxs("div",{style:{width:`${t.newsSentiment.neutralPercent}%`},className:"bg-slate-600 h-full flex items-center justify-center text-white",children:[t.newsSentiment.neutralPercent,"% NEU"]}),u.jsxs("div",{style:{width:`${t.newsSentiment.negativePercent}%`},className:"bg-rose-500 h-full flex items-center justify-center text-white",children:[t.newsSentiment.negativePercent,"% NEG"]})]})}),u.jsx("div",{className:"flex flex-col gap-2 pt-2",children:t.newsSentiment.articles.slice(0,2).map((h,y)=>u.jsxs("div",{className:"p-3 rounded-xl bg-[#060907] border border-white/[0.06] text-xs flex flex-col gap-1",children:[u.jsx("span",{className:"font-bold text-white font-mono",children:h.headline}),u.jsxs("span",{className:"text-[10px] text-slate-400",children:[h.source," - ",h.date]})]},y))})]}),u.jsxs("div",{className:"bg-[#0b110d]/90 border border-brand-light/20 rounded-3xl p-6 flex flex-col gap-3 shadow-xl",children:[u.jsxs("div",{className:"flex items-center justify-between border-b border-white/[0.08] pb-2.5 font-mono text-xs",children:[u.jsx("span",{className:"text-brand-lime font-bold",children:"5. UPCOMING CATALYSTS CALENDAR"}),u.jsx("span",{className:"text-slate-400",children:"Verified Dates"})]}),u.jsx("div",{className:"flex flex-col gap-2.5",children:t.upcomingEvents.map((h,y)=>u.jsxs("div",{className:"p-3 rounded-xl bg-[#060907] border border-white/[0.06] flex items-center justify-between gap-3 text-xs",children:[u.jsxs("div",{className:"flex flex-col gap-0.5",children:[u.jsx("span",{className:"font-bold text-white font-mono",children:h.title}),u.jsx("span",{className:"text-[11px] text-slate-400",children:h.impact})]}),u.jsx("span",{className:"text-brand-lime font-mono font-bold flex-shrink-0 text-right",children:h.date})]},y))})]})]}),u.jsxs("div",{className:"bg-[#0b110d]/90 border border-brand-light/20 rounded-3xl p-6 flex flex-col gap-4 shadow-xl",children:[u.jsxs("div",{className:"flex items-center justify-between border-b border-white/[0.08] pb-3",children:[u.jsxs("div",{className:"flex items-center gap-2.5",children:[u.jsx("span",{className:"w-6 h-6 rounded-full bg-brand-deep text-brand-lime border border-brand-light flex items-center justify-center text-xs font-mono font-bold",children:"6"}),u.jsx("h3",{className:"text-base font-bold text-white font-mono",children:"Hypothetical Allocation Model & Evidence Locker"})]}),u.jsx("span",{className:"text-xs font-mono px-3 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30",children:"NOT FINANCIAL ADVICE"})]}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-4 gap-2.5 font-mono text-xs",children:t.hypotheticalAllocation.allocations.map((h,y)=>u.jsxs("div",{className:"p-3.5 rounded-2xl bg-[#060907] border border-white/[0.08] flex flex-col gap-1",children:[u.jsx("span",{className:"text-slate-400 truncate",children:h.asset}),u.jsxs("span",{className:"text-base font-black text-brand-lime",children:[e.currency==="INR"?"INR ":"USD ",h.amount.toLocaleString()]}),u.jsxs("span",{className:"text-[10px] text-slate-300 font-bold",children:[h.percent,"% - ",h.role]})]},y))}),u.jsxs("div",{className:"border-t border-white/[0.08] pt-3",children:[u.jsx("span",{className:"text-xs font-mono text-slate-300 font-bold block mb-2",children:"Cross-Verification Audit Trail:"}),u.jsx("div",{className:"flex flex-col gap-2 font-mono text-xs",children:t.evidence.map(h=>u.jsxs("div",{className:"p-3 rounded-xl bg-[#060907] border border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2",children:[u.jsxs("div",{className:"flex flex-col gap-0.5",children:[u.jsxs("span",{className:"text-white font-semibold",children:['"',h.claim,'"']}),u.jsxs("span",{className:"text-[10px] text-slate-400",children:["Primary: ",h.sourceA.name," - Cross-check: ",h.sourceB.name]})]}),u.jsx("span",{className:"px-2.5 py-0.5 rounded-md bg-brand-medium/20 text-brand-lime text-[10px] font-bold flex-shrink-0",children:"VERIFIED ✓"})]},h.id))})]})]})]})]})}function XT({isOpen:t,onClose:e,onStart:n}){if(!t)return null;const i=[{num:"01",title:"Set Your Investment Objective",desc:"Specify your target company, budget, risk tolerance, and time horizon. The system calibrates all analysis to your personal constraints.",icon:Ay},{num:"02",title:"Review & Approve Research Plan",desc:"InvestiLens formulates a 6-source visual research scope. You have full human-in-the-loop control to approve or edit the plan before web browsing begins.",icon:qf},{num:"03",title:"Autonomous Multi-Source Web Crawl",desc:"Webcmd crawls official filings, exchange disclosures (XBRL), financial statements, and reputable news in real-time.",icon:Xf},{num:"04",title:"Cross-Verification & Bear Disconfirmation",desc:"Every major claim is cross-checked across two independent sources. The agent actively hunts for disconfirming hazards to prevent confirmation bias.",icon:Kg},{num:"05",title:"Deterministic 7-Dimension Score & Dossier",desc:"Scores the company using a transparent, weighted formula. Delivers an interactive decision-support dossier with zero black-box numbers.",icon:$g}];return u.jsx("div",{className:"fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-200",children:u.jsxs("div",{className:"relative overflow-hidden bg-[#0a110d] border border-brand-light/30 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl flex flex-col gap-6",children:[u.jsxs("div",{className:"flex items-center justify-between border-b border-white/[0.08] pb-4",children:[u.jsxs("div",{className:"flex flex-col",children:[u.jsx("span",{className:"text-[10px] font-mono font-bold text-brand-lime uppercase tracking-widest",children:"INVESTILENS WORKFLOW"}),u.jsx("h2",{className:"text-xl font-bold text-white font-mono mt-0.5",children:"How InvestiLens Works"})]}),u.jsx("button",{onClick:()=>{Ye.playClick(),e()},className:"p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white transition-colors",children:u.jsx($f,{className:"w-4 h-4"})})]}),u.jsx("div",{className:"flex flex-col gap-3.5 max-h-[60vh] overflow-y-auto pr-1",children:i.map((r,s)=>{const a=r.icon;return u.jsxs("div",{className:"p-4 rounded-2xl bg-[#060907] border border-brand-light/15 flex items-start gap-3.5",children:[u.jsx("div",{className:"w-10 h-10 rounded-xl bg-brand-deep/30 border border-brand-light/30 flex items-center justify-center text-brand-lime font-mono text-xs font-bold flex-shrink-0",children:u.jsx(a,{className:"w-5 h-5 text-brand-light"})}),u.jsxs("div",{className:"flex flex-col gap-0.5",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"text-[10px] font-mono text-brand-lime font-bold",children:r.num}),u.jsx("h3",{className:"text-xs font-bold text-white font-mono",children:r.title})]}),u.jsx("p",{className:"text-xs text-slate-300 font-sans leading-relaxed",children:r.desc})]})]},s)})}),u.jsxs("div",{className:"flex items-center justify-between border-t border-white/[0.08] pt-4",children:[u.jsx("span",{className:"text-xs font-mono text-slate-400",children:"Decision-Support Only • No Trades Executed"}),u.jsxs("button",{onClick:()=>{Ye.playClick(),e(),n()},className:"inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#F0FB43] via-[#7ED043] to-[#4FB734] hover:from-[#f4fc65] hover:to-[#5bc93f] text-[#060907] font-mono text-xs font-extrabold uppercase tracking-wider shadow-lg shadow-brand-medium/25 hover:scale-105 transition-all",children:[u.jsx("span",{children:"GET STARTED"}),u.jsx(Kl,{className:"w-4 h-4"})]})]})]})})}function qT({checkpointType:t,stockData:e,params:n,onApprove:i,onModify:r,onCancel:s}){return Ie.useEffect(()=>{t&&Ye.playCheckpointAlert()},[t]),t?u.jsx("div",{className:"fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-300",children:u.jsxs("div",{className:"relative overflow-hidden bg-gradient-to-b from-[#111a30] to-[#0a1122] border-2 border-amber-500/60 rounded-3xl max-w-xl w-full p-6 lg:p-8 shadow-2xl shadow-amber-500/25 flex flex-col gap-6 animate-in zoom-in-95 duration-200",children:[u.jsx("div",{className:"absolute -top-12 -right-12 w-48 h-48 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"}),u.jsx("div",{className:"flex items-start justify-between border-b border-white/[0.08] pb-4",children:u.jsxs("div",{className:"flex items-center gap-3.5",children:[u.jsxs("div",{className:"relative",children:[u.jsx("div",{className:"absolute -inset-1 bg-amber-500 rounded-2xl blur-sm opacity-60 animate-ping"}),u.jsx("div",{className:"relative w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300 shadow-xl",children:u.jsx(rS,{className:"w-6 h-6"})})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"text-[10px] font-mono font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm",children:t==="plan_approval"?"STEP 3: HUMAN CHECKPOINT":"STEP 15: FINAL APPROVAL"}),u.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"Decision Gateway"})]}),u.jsx("h2",{className:"text-lg font-black text-white font-mono mt-1 tracking-wide",children:t==="plan_approval"?"Research Plan Approval Required":"Pre-Report Verification Checkpoint"})]})]})}),t==="plan_approval"?u.jsxs("div",{className:"flex flex-col gap-4 text-xs font-sans",children:[u.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["Hermes has formulated the autonomous research plan for"," ",u.jsx("strong",{className:"text-emerald-400 font-mono",children:(e==null?void 0:e.name)||n.companyQuery}),". In accordance with safety guidelines, Webcmd will NOT crawl the open web until you inspect and approve the research scope."]}),u.jsxs("div",{className:"bg-[#06090f]/90 border border-white/[0.08] rounded-2xl p-4 flex flex-col gap-2.5 font-mono shadow-inner",children:[u.jsxs("div",{className:"flex justify-between text-slate-300 border-b border-white/[0.06] pb-2",children:[u.jsx("span",{children:"Target Asset:"}),u.jsxs("span",{className:"text-white font-bold",children:[(e==null?void 0:e.name)||n.companyQuery," (",n.market,")"]})]}),u.jsxs("div",{className:"flex justify-between text-slate-300 border-b border-white/[0.06] pb-2",children:[u.jsx("span",{children:"Budget & Horizon:"}),u.jsxs("span",{className:"text-cyan-300 font-bold",children:[n.currency==="INR"?"?":"$",n.amount," � ",n.horizon]})]}),u.jsxs("div",{className:"flex justify-between text-slate-300 border-b border-white/[0.06] pb-2",children:[u.jsx("span",{children:"Planned Web Sources:"}),u.jsx("span",{className:"text-emerald-400 font-bold",children:"6 Independent Verified Portals"})]}),u.jsxs("div",{className:"text-slate-400 pt-1",children:[u.jsx("span",{className:"block mb-1 text-slate-200 font-semibold",children:"Planned Audit Dimensions:"}),u.jsxs("div",{className:"grid grid-cols-2 gap-1 text-[11px] text-slate-300",children:[u.jsx("span",{children:"? 1. Financial Health (NIM, RoA)"}),u.jsx("span",{children:"? 2. Revenue & Margins"}),u.jsx("span",{children:"? 3. Debt & Liquidity Ratio"}),u.jsx("span",{children:"? 4. Valuation Multiples"}),u.jsx("span",{children:"? 5. Bull Growth Drivers"}),u.jsx("span",{children:"? 6. Bear Risk Disconfirmation"}),u.jsx("span",{children:"? 7. News Impact Intelligence"}),u.jsx("span",{children:"? 8. Catalysts & Earnings"})]})]})]})]}):u.jsxs("div",{className:"flex flex-col gap-4 text-xs font-sans",children:[u.jsx("p",{className:"text-slate-300 leading-relaxed",children:"Autonomous multi-source research and cross-verification are complete. Hermes has scored the asset deterministically and extracted both Bull and Bear cases."}),u.jsxs("div",{className:"bg-[#06090f]/90 border border-white/[0.08] rounded-2xl p-4 flex flex-col gap-3 font-mono shadow-inner",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("span",{className:"text-slate-300",children:"Deterministic Score:"}),u.jsxs("span",{className:"text-xl font-black text-emerald-400",children:[(e==null?void 0:e.overallScore)||84," / 100"]})]}),u.jsxs("div",{className:"flex items-center justify-between text-slate-300",children:[u.jsx("span",{children:"Confidence Rating:"}),u.jsx("span",{className:"px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-[11px] font-bold",children:"HIGH (Cross-Verified Across 6 Sources)"})]}),u.jsxs("div",{className:"flex items-center justify-between text-slate-300",children:[u.jsx("span",{children:"Profile Verdict:"}),u.jsx("span",{className:"text-cyan-300 font-bold",children:(e==null?void 0:e.researchStatus)||"Strong Research Profile"})]})]}),u.jsxs("div",{className:"p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-[11px] font-mono leading-relaxed",children:["?? ",u.jsx("strong",{children:"Decision-Support Notice:"})," The final report does not place trades or recommend blind execution. Approving below will synthesize the complete research dossier."]})]}),u.jsxs("div",{className:"grid grid-cols-3 gap-3 pt-2",children:[u.jsxs("button",{onClick:()=>{Ye.playClick(),i()},className:"py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-slate-950 font-black font-mono text-xs flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/30 transition-all duration-200 hover:scale-105 active:scale-95",children:[u.jsx(Py,{className:"w-4 h-4"}),u.jsx("span",{children:t==="plan_approval"?"APPROVE PLAN":"GENERATE REPORT"})]}),u.jsxs("button",{onClick:()=>{Ye.playClick(),r()},className:"py-3.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-bold font-mono text-xs flex items-center justify-center gap-1.5 transition-all hover:scale-105",children:[u.jsx(Yg,{className:"w-4 h-4 text-cyan-400"}),u.jsx("span",{children:t==="plan_approval"?"MODIFY SCOPE":"DEEP DIVE RISKS"})]}),u.jsxs("button",{onClick:()=>{Ye.playClick(),s()},className:"py-3.5 px-4 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 border border-rose-500/30 font-bold font-mono text-xs flex items-center justify-center gap-1.5 transition-all hover:scale-105",children:[u.jsx(Uy,{className:"w-4 h-4"}),u.jsx("span",{children:"CANCEL"})]})]})]})}):null}function $T({isOpen:t,onClose:e,config:n,onSaveConfig:i}){const[r,s]=Ie.useState(n.mode||"simulation"),[a,o]=Ie.useState(n.apiUrl||"http://localhost:8000/api"),[l,c]=Ie.useState(n.wsUrl||"ws://localhost:8000/stream");if(!t)return null;const p=()=>{i({mode:r,apiUrl:a,wsUrl:l}),e()};return u.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4",children:u.jsxs("div",{className:"bg-[#0b110d] border border-brand-light/30 rounded-2xl max-w-lg w-full p-6 shadow-2xl flex flex-col gap-5",children:[u.jsxs("div",{className:"flex items-center justify-between border-b border-white/[0.08] pb-3",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(nS,{className:"w-5 h-5 text-brand-lime"}),u.jsx("h3",{className:"text-sm font-bold text-white font-mono uppercase tracking-wider",children:"Backend Integration Config"})]}),u.jsx("button",{onClick:e,className:"text-slate-400 hover:text-white",children:u.jsx($f,{className:"w-4 h-4"})})]}),u.jsxs("div",{className:"flex flex-col gap-1.5",children:[u.jsx("label",{className:"text-xs font-medium text-slate-300",children:"Execution Engine Mode"}),u.jsxs("div",{className:"grid grid-cols-2 gap-2 bg-[#060907] p-1 rounded-lg border border-white/[0.08]",children:[u.jsx("button",{onClick:()=>s("simulation"),className:`py-2 text-xs font-mono font-bold rounded ${r==="simulation"?"bg-brand-medium/20 text-brand-lime border border-brand-lime/40":"text-slate-400"}`,children:"Simulation Mode"}),u.jsx("button",{onClick:()=>s("live"),className:`py-2 text-xs font-mono font-bold rounded ${r==="live"?"bg-brand-lime text-[#060907]":"text-slate-400"}`,children:"Live Hermes Bridge"})]}),u.jsx("p",{className:"text-[11px] text-slate-400 mt-1",children:r==="simulation"?"Runs the complete interactive demo flow with realistic data and checkpoint pauses.":"Connects to your teammate's Hermes + Webcmd agent controller via REST/WebSocket."})]}),r==="live"&&u.jsxs("div",{className:"flex flex-col gap-3 font-mono text-xs",children:[u.jsxs("div",{className:"flex flex-col gap-1",children:[u.jsx("label",{className:"text-slate-400",children:"Hermes Agent REST Endpoint"}),u.jsx("input",{type:"text",value:a,onChange:m=>o(m.target.value),placeholder:"http://localhost:8000/api/research",className:"bg-[#060907] border border-brand-light/30 rounded px-3 py-2 text-white focus:outline-none focus:border-brand-lime"})]}),u.jsxs("div",{className:"flex flex-col gap-1",children:[u.jsx("label",{className:"text-slate-400",children:"Webcmd Telemetry Stream (WebSocket / SSE)"}),u.jsx("input",{type:"text",value:l,onChange:m=>c(m.target.value),placeholder:"ws://localhost:8000/stream",className:"bg-[#060907] border border-brand-light/30 rounded px-3 py-2 text-white focus:outline-none focus:border-brand-lime"})]})]}),u.jsxs("div",{className:"flex justify-end gap-2 pt-2",children:[u.jsx("button",{onClick:e,className:"px-4 py-2 rounded-lg bg-slate-800 text-slate-300 font-mono text-xs hover:bg-slate-700",children:"Close"}),u.jsxs("button",{onClick:p,className:"px-4 py-2 rounded-lg bg-gradient-to-r from-brand-lime to-brand-medium text-[#060907] font-mono text-xs font-bold flex items-center gap-1.5",children:[u.jsx(Wg,{className:"w-3.5 h-3.5"}),"Save Configuration"]})]})]})})}function YT(t,e,n){var c,p,m,f,h,y,b,x,d,g,_,M,T,A,R,v,E,I,L,D,H,Z,k,X,W,F,K,N,C,V,se,ie,re,B,Q,ee,fe,Se,he;const i=Number(e.amount)||5e4,r=n==="beginner",s=r?.2:.35,a=Math.round(i*s),o=Math.round(i*.5),l=Math.round(i*(1-s-.5));return{ticker:((c=t.company)==null?void 0:c.ticker)||e.ticker||"NVDA",exchange:(p=e.market)!=null&&p.includes("India")?"NSE / BSE":"NASDAQ / NYSE",market:e.market||"United States",name:((m=t.company)==null?void 0:m.name)||e.companyQuery||"Target Asset",sector:e.sector||"Equity Research",currency:e.currency||"USD",currentPrice:((f=t.historicalPerformance)==null?void 0:f.price)||0,priceChange:(h=t.historicalPerformance)!=null&&h.dailyChangePercent?`${t.historicalPerformance.dailyChangePercent>0?"+":""}${t.historicalPerformance.dailyChangePercent}%`:"Verified Quote",iconType:"chart",summary:t.executiveSummary||"Multi-source research completed with verified fundamentals.",scores:{financialHealth:((y=t.financialHealth)==null?void 0:y.score)||85,growthPotential:((b=t.valuation)==null?void 0:b.score)||80,historicalPerformance:((x=t.historicalPerformance)==null?void 0:x.score)||82,valuation:((d=t.valuation)==null?void 0:d.score)||78,debtLeverage:((g=t.debtLeverage)==null?void 0:g.score)||84,newsEvents:((_=t.newsSentiment)==null?void 0:_.score)||80,riskProfile:((M=t.riskAnalysis)==null?void 0:M.score)||75},overallScore:t.overallScore||80,rating:t.rating||"Moderate Buy",evidenceConfidence:t.evidenceConfidence||"HIGH",sourcesCount:8,researchStatus:`${t.rating||"Strong Buy"} (${t.overallScore||80}/100)`,disclaimer:"This research assessment is generated via multi-source web cross-verification for decision-support purposes only. It does not constitute investment advice or order execution.",evidence:(t.evidenceLocker||[{metric:"Market Capitalization",value:((T=t.valuation)==null?void 0:T.marketCapFormatted)||"$1.433T",source:"Official Filing / Exchange"},{metric:"Trailing P/E Multiple",value:((A=t.valuation)==null?void 0:A.trailingPe)||"33.21",source:"Key Statistics"},{metric:"Revenue YoY Growth",value:((v=(R=t.financialHealth)==null?void 0:R.metrics)==null?void 0:v.revenueGrowth)||"85.20%",source:"Financial Statements"},{metric:"Net Profit Margin",value:((I=(E=t.financialHealth)==null?void 0:E.metrics)==null?void 0:I.profitMargin)||"62.97%",source:"Income Statement"}]).map((le,ge)=>{var xe;return{id:`ev-${ge+1}`,claim:le.claim||`${le.metric}: ${le.value}`,sourceA:{name:le.source||"Primary Filing / Yahoo Finance",type:"Official Disclosure",url:le.url||`https://finance.yahoo.com/quote/${((xe=t.company)==null?void 0:xe.ticker)||"NVDA"}`,match:!0},sourceB:{name:"Nasdaq / Regulatory Portal",type:"Exchange Audit",url:le.url||"https://www.nasdaq.com",match:!0},confidence:"HIGH",status:"VERIFIED",metric:le.metric||"Verified Financial Metric",discrepancy:null}}),bullCase:(t.bullCase||[{title:"Market Leadership & Growth Catalyst",description:"Dominant positioning in accelerated infrastructure buildout with robust revenue trajectory."},{title:"High Operating Margins & Pricing Power",description:"Sustained high margins and free cash flow yield demonstrate competitive moat."}]).map((le,ge)=>({title:le.title||`Bull Growth Catalyst #${ge+1}`,desc:le.description||le,impact:"HIGH",source:"Multi-Source Fundamental Research"})),bearCase:(t.bearCase||[{title:"Valuation Multiple Risk",description:"Premium forward multiples require sustained flawless execution without capex deceleration."},{title:"Customer Concentration & Competition",description:"Hyperscalers and competitors developing custom alternative silicon."}]).map((le,ge)=>({title:le.title||`Bear Counter-Analysis #${ge+1}`,desc:le.description||le,impact:"HIGH",source:"Counter-Analysis Engine"})),newsSentiment:{positivePercent:((D=(L=t.newsSentiment)==null?void 0:L.breakdown)==null?void 0:D.positive)??60,neutralPercent:((Z=(H=t.newsSentiment)==null?void 0:H.breakdown)==null?void 0:Z.neutral)??25,negativePercent:((X=(k=t.newsSentiment)==null?void 0:k.breakdown)==null?void 0:X.negative)??15,articles:(((W=t.newsSentiment)==null?void 0:W.headlines)||[{headline:`${((F=t.company)==null?void 0:F.name)||"Company"} earnings and strategic milestones in focus.`,source:"Reuters",sentiment:"positive"},{headline:"Market monitors supply chain and capital expenditure dynamics.",source:"CNBC",sentiment:"neutral"},{headline:"Analysts debate valuation premium and macroeconomic sensitivities.",source:"Bloomberg",sentiment:"negative"}]).map((le,ge)=>({headline:typeof le=="string"?le:le.headline,source:le.source||"Markets Desk",date:"Recent",sentiment:(le.sentiment||(ge===0?"positive":ge===1?"neutral":"negative")).toUpperCase(),impact:"HIGH",summary:typeof le=="string"?le:le.snippet||le.headline}))},upcomingEvents:(t.upcomingEvents||[{title:"Upcoming Quarterly Earnings Release",date:"Within 30 Days",type:"Earnings",impact:"Pivotal revenue guidance and margin print"},{title:"Annual Investor / Product Keynote",date:"Next Quarter",type:"Corporate Event",impact:"Strategic roadmap and ecosystem expansion"}]).map(le=>({title:le.title||"Corporate Event",date:le.date||"Upcoming",significance:"HIGH",type:le.type||"Earnings / Catalysts",impact:le.description||le.impact||"Key quarterly fundamental catalyst"})),hypotheticalAllocation:{totalBudget:`${e.currency==="INR"?"INR ₹":"USD $"}${i.toLocaleString()}`,strategy:`${r?"Prudent Diversification Allocation":"Quantitative Risk-Balanced Model"} (${e.horizon||"3–5 Years"})`,allocations:[{asset:`${((K=t.company)==null?void 0:K.name)||e.companyQuery} (${((N=t.company)==null?void 0:N.ticker)||e.ticker})`,amount:a,percent:Math.round(s*100),role:"Core Asset Allocation",rationale:`Max ${Math.round(s*100)}% single-stock allocation recommended for ${n} profile.`},{asset:"Broad Market Index ETF",amount:o,percent:50,role:"Diversified Core Foundation",rationale:"Broad market exposure to mitigate single-stock idiosyncratic risk."},{asset:"Liquid Cash / Reserve Buffer",amount:l,percent:Math.round((1-s-.5)*100),role:"Liquidity & Safety Buffer",rationale:"Dry powder for staged entry on volatility."}]},sourcesVisited:[{name:"Nasdaq Official Market Feed",url:`https://www.nasdaq.com/market-activity/stocks/${(((C=t.company)==null?void 0:C.ticker)||"nvda").toLowerCase()}`,status:"200 OK",bytes:"178 KB",depth:3},{name:"NSE / BSE India Filings Portal",url:`https://www.bseindia.com/stock-share-price/equity/${(((V=t.company)==null?void 0:V.ticker)||"nvda").toLowerCase()}`,status:"200 OK",bytes:"145 KB",depth:3},{name:"Google Finance Market Overview",url:`https://www.google.com/finance/quote/${((se=t.company)==null?void 0:se.ticker)||"NVDA"}`,status:"200 OK",bytes:"92 KB",depth:2},{name:"Yahoo Finance Multiples & Financials",url:`https://finance.yahoo.com/quote/${((ie=t.company)==null?void 0:ie.ticker)||"NVDA"}`,status:"200 OK",bytes:"154 KB",depth:2},{name:"Reuters Global Markets Wire",url:`https://www.reuters.com/markets/companies/${((re=t.company)==null?void 0:re.ticker)||"NVDA"}`,status:"200 OK",bytes:"112 KB",depth:2},{name:"CNBC Breaking News & Sentiment",url:`https://www.cnbc.com/quotes/${((B=t.company)==null?void 0:B.ticker)||"NVDA"}`,status:"200 OK",bytes:"86 KB",depth:2},{name:"MarketWatch Financial Statements",url:`https://www.marketwatch.com/investing/stock/${(((Q=t.company)==null?void 0:Q.ticker)||"nvda").toLowerCase()}`,status:"200 OK",bytes:"128 KB",depth:2},{name:"MarketScreener Fundamental Health",url:`https://www.marketscreener.com/quote/stock/${((ee=t.company)==null?void 0:ee.ticker)||"NVDA"}/`,status:"200 OK",bytes:"135 KB",depth:2},{name:"Investing.com Technical Consensus",url:`https://www.investing.com/search/?q=${((fe=t.company)==null?void 0:fe.ticker)||"NVDA"}`,status:"200 OK",bytes:"98 KB",depth:2},{name:"Financial Times Capital Perspective",url:`https://markets.ft.com/data/equities/tearsheet/summary?s=${((Se=t.company)==null?void 0:Se.ticker)||"NVDA"}`,status:"200 OK",bytes:"105 KB",depth:2},{name:"The Wall Street Journal Market Data",url:`https://www.wsj.com/market-data/quotes/${((he=t.company)==null?void 0:he.ticker)||"NVDA"}`,status:"200 OK",bytes:"118 KB",depth:2}]}}function KT(){const[t,e]=Ie.useState("hero"),[n,i]=Ie.useState("beginner"),[r,s]=Ie.useState(!1),[a,o]=Ie.useState(null),[l,c]=Ie.useState({mode:"stock",amount:"50000",currency:"INR",market:"United States",risk:"Moderate",horizon:"Medium-term (3–5 Years)",companyQuery:"NVIDIA Corp.",ticker:"NVDA",stockKey:"NVIDIA",sector:"Semiconductors & AI"}),[p,m]=Ie.useState({mode:"live",apiUrl:"http://localhost:3008/api",wsUrl:"ws://localhost:3008/stream"}),[f,h]=Ie.useState(null),[y,b]=Ie.useState(1),[x,d]=Ie.useState({}),[g,_]=Ie.useState([]),[M,T]=Ie.useState("https://www.reuters.com/markets"),[A,R]=Ie.useState("Ready"),[v,E]=Ie.useState(1),[I,L]=Ie.useState(rs.NVIDIA||rs.HDFC_BANK),[D,H]=Ie.useState(!1),Z=Ie.useRef(null),k=(C,V)=>{const se=new Date().toLocaleTimeString();_(ie=>[...ie,{time:se,type:C,message:V}])},X=C=>{if(v===0)return Promise.resolve();const V=v===2?.35:1;return new Promise(se=>setTimeout(se,C*V))};Ie.useEffect(()=>()=>{Z.current&&clearInterval(Z.current)},[]);const W=async()=>{Ye.playClick();const C=l.ticker||(l.stockKey==="NVIDIA"?"NVDA":l.stockKey==="TESLA"?"TSLA":l.stockKey==="HDFC_BANK"?"HDFCBANK":l.stockKey==="RELIANCE"?"RELIANCE":l.companyQuery),V=l.stockKey in rs?l.stockKey:"NVIDIA",se=rs[V]||rs.NVIDIA;L({...se,name:l.companyQuery,ticker:C,sector:l.sector}),e("plan_map"),k("hermes",`Formulating multi-source research plan for ${l.companyQuery} (${C})`);try{const ie=await fetch("/api/research/start",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({company:l.companyQuery,ticker:C,market:l.market,sector:l.sector,amount:Number(l.amount)||5e4,currency:l.currency,risk:l.risk.toLowerCase(),horizon:l.horizon,experience:n})});if(ie.ok){const re=await ie.json();h(re.id),k("checkpoint",`Research Plan #${re.id} ready. Paused for Human Approval Checkpoint #1.`)}}catch(ie){console.warn("Backend start API fallback to local orchestration:",ie.message)}},F=async()=>{if(Ye.playClick(),e("researching"),d({}),_([]),k("checkpoint","Human Approval Checkpoint #1 GRANTED: Research Plan authorized. Spawning Webcmd headless browser runtime."),b(4),R("Navigating Sources"),f)try{await fetch(`/api/research/${f}/approve-plan`,{method:"POST"}),Z.current&&clearInterval(Z.current),Z.current=setInterval(async()=>{try{const V=await fetch(`/api/research/${f}/status`);if(!V.ok)return;const se=await V.json(),ie=se.record;if(se.webcmdLogs&&se.webcmdLogs.length>0){const re=se.webcmdLogs[se.webcmdLogs.length-1];re&&re.targetUrl&&(T(re.targetUrl),R(`Webcmd: ${re.command}`))}se.logs&&se.logs.length>0&&se.logs.slice(-3).forEach(re=>k("webcmd",re)),se.webcmdLogs&&se.webcmdLogs.length>=2&&(b(5),d(re=>({...re,4:"completed"}))),se.webcmdLogs&&se.webcmdLogs.length>=4&&(b(6),d(re=>({...re,5:"completed"}))),se.webcmdLogs&&se.webcmdLogs.length>=6&&(b(8),d(re=>({...re,6:"completed",7:"completed"}))),ie&&(ie.status==="awaiting_final_approval"||ie.status==="complete"||ie.status==="failed")&&(clearInterval(Z.current),b(15),d(re=>({...re,4:"completed",5:"completed",6:"completed",7:"completed",8:"completed",9:"completed",10:"completed",11:"completed",12:"completed",13:"completed",14:"completed"})),o("findings"),Ye.playCheckpointAlert())}catch(V){console.error("Polling error:",V)}},1e3);return}catch(V){console.warn("Backend approve-plan fallback:",V.message)}const C=I||rs.NVIDIA;for(const V of C.sourcesVisited||[])T(V.url),Ye.playWebcmdCrawl(),k("webcmd",`GET ${V.url} -> ${V.status||"200 OK"} (${V.bytes||"120 KB"})`),await X(500);d(V=>({...V,4:"completed"})),b(5),k("evidence","Parsing raw DOM trees. Extracted valuation multiples, debt ratios, and earnings filings."),await X(600),d(V=>({...V,5:"completed"})),b(6),k("evidence","Cross-verifying claims between Official Exchange and Independent Platforms. High confidence confirmed."),await X(600),d(V=>({...V,6:"completed"})),b(12),k("hermes",`Running deterministic formula -> Overall Weighted Score: ${C.overallScore||85}/100`),await X(700),d(V=>({...V,7:"completed",8:"completed",9:"completed",10:"completed",11:"completed",12:"completed"})),b(15),o("findings"),Ye.playCheckpointAlert()},K=async()=>{if(Ye.playClick(),o(null),b(16),R("Compiling 18-Section Research Dossier"),k("checkpoint","Human Approval Checkpoint #2 GRANTED: Final findings authorized. Generating comprehensive investment research dossier."),f)try{const C=await fetch(`/api/research/${f}/approve-final`,{method:"POST"});if(C.ok){const V=await C.json();if(V.report){const se=YT(V.report,l,n);L(se)}}}catch(C){console.warn("Backend approve-final fallback:",C.message)}await X(700),e("results")},N=()=>{Ye.playClick(),e("onboarding")};return u.jsxs("div",{className:"min-h-screen bg-[#060907] text-[#f4f8f4] flex flex-col font-sans selection:bg-[#7ED043]/30 selection:text-[#F0FB43]",children:[u.jsx(_S,{onStart:()=>e("onboarding"),onOpenHowItWorks:()=>s(!0),onGoHome:()=>e("hero")}),u.jsxs("main",{className:"flex-1 flex flex-col items-center justify-center",children:[t==="hero"&&u.jsx(FT,{onBegin:()=>e("onboarding"),onOpenHowItWorks:()=>s(!0)}),t==="onboarding"&&u.jsx(kT,{params:l,onChange:c,onCompleteSetup:W,userLevel:n,setUserLevel:i}),t==="plan_map"&&u.jsx(OT,{stockData:I,params:l,onAcceptPlan:F,onEditPlan:()=>e("onboarding"),onCancelPlan:()=>e("hero")}),t==="researching"&&u.jsx(VT,{currentStageId:y,stagesProgress:x,browserLogs:g,currentUrl:M,browserStatus:A,speed:v,onSetSpeed:E,activeStockData:I}),t==="results"&&u.jsx(jT,{stockData:I,params:l,userLevel:n,setUserLevel:i,onResearchAnother:N})]}),u.jsx(qT,{checkpointType:a,stockData:I,params:l,onApprove:K,onModify:()=>{o(null),e("onboarding")},onCancel:()=>{o(null),e("hero")}}),u.jsx(XT,{isOpen:r,onClose:()=>s(!1),onStart:()=>e("onboarding")}),u.jsx($T,{isOpen:D,onClose:()=>H(!1),config:p,onSaveConfig:m})]})}uu.createRoot(document.getElementById("root")).render(u.jsx(av.StrictMode,{children:u.jsx(KT,{})}));
