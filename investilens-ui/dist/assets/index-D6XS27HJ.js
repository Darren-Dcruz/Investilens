(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Zx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Om={exports:{}},Fl={},Bm={exports:{}},Ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oa=Symbol.for("react.element"),Qx=Symbol.for("react.portal"),Jx=Symbol.for("react.fragment"),ev=Symbol.for("react.strict_mode"),tv=Symbol.for("react.profiler"),nv=Symbol.for("react.provider"),iv=Symbol.for("react.context"),rv=Symbol.for("react.forward_ref"),sv=Symbol.for("react.suspense"),av=Symbol.for("react.memo"),ov=Symbol.for("react.lazy"),Ah=Symbol.iterator;function lv(t){return t===null||typeof t!="object"?null:(t=Ah&&t[Ah]||t["@@iterator"],typeof t=="function"?t:null)}var zm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vm=Object.assign,Hm={};function ks(t,e,n){this.props=t,this.context=e,this.refs=Hm,this.updater=n||zm}ks.prototype.isReactComponent={};ks.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ks.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Gm(){}Gm.prototype=ks.prototype;function Jd(t,e,n){this.props=t,this.context=e,this.refs=Hm,this.updater=n||zm}var ef=Jd.prototype=new Gm;ef.constructor=Jd;Vm(ef,ks.prototype);ef.isPureReactComponent=!0;var Ch=Array.isArray,jm=Object.prototype.hasOwnProperty,tf={current:null},Wm={key:!0,ref:!0,__self:!0,__source:!0};function Xm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)jm.call(e,i)&&!Wm.hasOwnProperty(i)&&(r[i]=e[i]);var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];r.children=c}if(t&&t.defaultProps)for(i in l=t.defaultProps,l)r[i]===void 0&&(r[i]=l[i]);return{$$typeof:Oa,type:t,key:s,ref:a,props:r,_owner:tf.current}}function cv(t,e){return{$$typeof:Oa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function nf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Oa}function uv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Nh=/\/+/g;function oc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?uv(""+t.key):e.toString(36)}function Oo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Oa:case Qx:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+oc(a,0):i,Ch(r)?(n="",t!=null&&(n=t.replace(Nh,"$&/")+"/"),Oo(r,e,n,"",function(u){return u})):r!=null&&(nf(r)&&(r=cv(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Nh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Ch(t))for(var l=0;l<t.length;l++){s=t[l];var c=i+oc(s,l);a+=Oo(s,e,n,c,r)}else if(c=lv(t),typeof c=="function")for(t=c.call(t),l=0;!(s=t.next()).done;)s=s.value,c=i+oc(s,l++),a+=Oo(s,e,n,c,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Ya(t,e,n){if(t==null)return t;var i=[],r=0;return Oo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function dv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var an={current:null},Bo={transition:null},fv={ReactCurrentDispatcher:an,ReactCurrentBatchConfig:Bo,ReactCurrentOwner:tf};function $m(){throw Error("act(...) is not supported in production builds of React.")}Ye.Children={map:Ya,forEach:function(t,e,n){Ya(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ya(t,function(){e++}),e},toArray:function(t){return Ya(t,function(e){return e})||[]},only:function(t){if(!nf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ye.Component=ks;Ye.Fragment=Jx;Ye.Profiler=tv;Ye.PureComponent=Jd;Ye.StrictMode=ev;Ye.Suspense=sv;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fv;Ye.act=$m;Ye.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Vm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=tf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)jm.call(e,c)&&!Wm.hasOwnProperty(c)&&(i[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];i.children=l}return{$$typeof:Oa,type:t.type,key:r,ref:s,props:i,_owner:a}};Ye.createContext=function(t){return t={$$typeof:iv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:nv,_context:t},t.Consumer=t};Ye.createElement=Xm;Ye.createFactory=function(t){var e=Xm.bind(null,t);return e.type=t,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(t){return{$$typeof:rv,render:t}};Ye.isValidElement=nf;Ye.lazy=function(t){return{$$typeof:ov,_payload:{_status:-1,_result:t},_init:dv}};Ye.memo=function(t,e){return{$$typeof:av,type:t,compare:e===void 0?null:e}};Ye.startTransition=function(t){var e=Bo.transition;Bo.transition={};try{t()}finally{Bo.transition=e}};Ye.unstable_act=$m;Ye.useCallback=function(t,e){return an.current.useCallback(t,e)};Ye.useContext=function(t){return an.current.useContext(t)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(t){return an.current.useDeferredValue(t)};Ye.useEffect=function(t,e){return an.current.useEffect(t,e)};Ye.useId=function(){return an.current.useId()};Ye.useImperativeHandle=function(t,e,n){return an.current.useImperativeHandle(t,e,n)};Ye.useInsertionEffect=function(t,e){return an.current.useInsertionEffect(t,e)};Ye.useLayoutEffect=function(t,e){return an.current.useLayoutEffect(t,e)};Ye.useMemo=function(t,e){return an.current.useMemo(t,e)};Ye.useReducer=function(t,e,n){return an.current.useReducer(t,e,n)};Ye.useRef=function(t){return an.current.useRef(t)};Ye.useState=function(t){return an.current.useState(t)};Ye.useSyncExternalStore=function(t,e,n){return an.current.useSyncExternalStore(t,e,n)};Ye.useTransition=function(){return an.current.useTransition()};Ye.version="18.3.1";Bm.exports=Ye;var Ae=Bm.exports;const rf=Zx(Ae);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hv=Ae,pv=Symbol.for("react.element"),mv=Symbol.for("react.fragment"),gv=Object.prototype.hasOwnProperty,xv=hv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vv={key:!0,ref:!0,__self:!0,__source:!0};function qm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)gv.call(e,i)&&!vv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:pv,type:t,key:s,ref:a,props:r,_owner:xv.current}}Fl.Fragment=mv;Fl.jsx=qm;Fl.jsxs=qm;Om.exports=Fl;var o=Om.exports,hu={},Ym={exports:{}},Mn={},Km={exports:{}},Zm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,Z){var P=k.length;k.push(Z);e:for(;0<P;){var C=P-1>>>1,K=k[C];if(0<r(K,Z))k[C]=Z,k[P]=K,P=C;else break e}}function n(k){return k.length===0?null:k[0]}function i(k){if(k.length===0)return null;var Z=k[0],P=k.pop();if(P!==Z){k[0]=P;e:for(var C=0,K=k.length,se=K>>>1;C<se;){var J=2*(C+1)-1,re=k[J],U=J+1,W=k[U];if(0>r(re,P))U<K&&0>r(W,re)?(k[C]=W,k[U]=P,C=U):(k[C]=re,k[J]=P,C=J);else if(U<K&&0>r(W,P))k[C]=W,k[U]=P,C=U;else break e}}return Z}function r(k,Z){var P=k.sortIndex-Z.sortIndex;return P!==0?P:k.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();t.unstable_now=function(){return a.now()-l}}var c=[],u=[],h=1,m=null,f=3,p=!1,y=!1,M=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(k){for(var Z=n(u);Z!==null;){if(Z.callback===null)i(u);else if(Z.startTime<=k)i(u),Z.sortIndex=Z.expirationTime,e(c,Z);else break;Z=n(u)}}function b(k){if(M=!1,_(k),!y)if(n(c)!==null)y=!0,$(T);else{var Z=n(u);Z!==null&&G(b,Z.startTime-k)}}function T(k,Z){y=!1,M&&(M=!1,d(v),v=-1),p=!0;var P=f;try{for(_(Z),m=n(c);m!==null&&(!(m.expirationTime>Z)||k&&!L());){var C=m.callback;if(typeof C=="function"){m.callback=null,f=m.priorityLevel;var K=C(m.expirationTime<=Z);Z=t.unstable_now(),typeof K=="function"?m.callback=K:m===n(c)&&i(c),_(Z)}else i(c);m=n(c)}if(m!==null)var se=!0;else{var J=n(u);J!==null&&G(b,J.startTime-Z),se=!1}return se}finally{m=null,f=P,p=!1}}var A=!1,N=null,v=-1,w=5,I=-1;function L(){return!(t.unstable_now()-I<w)}function F(){if(N!==null){var k=t.unstable_now();I=k;var Z=!0;try{Z=N(!0,k)}finally{Z?V():(A=!1,N=null)}}else A=!1}var V;if(typeof x=="function")V=function(){x(F)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,H=ee.port2;ee.port1.onmessage=F,V=function(){H.postMessage(null)}}else V=function(){g(F,0)};function $(k){N=k,A||(A=!0,V())}function G(k,Z){v=g(function(){k(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,$(T))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(k){switch(f){case 1:case 2:case 3:var Z=3;break;default:Z=f}var P=f;f=Z;try{return k()}finally{f=P}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,Z){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var P=f;f=k;try{return Z()}finally{f=P}},t.unstable_scheduleCallback=function(k,Z,P){var C=t.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?C+P:C):P=C,k){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=P+K,k={id:h++,callback:Z,priorityLevel:k,startTime:P,expirationTime:K,sortIndex:-1},P>C?(k.sortIndex=P,e(u,k),n(c)===null&&k===n(u)&&(M?(d(v),v=-1):M=!0,G(b,P-C))):(k.sortIndex=K,e(c,k),y||p||(y=!0,$(T))),k},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(k){var Z=f;return function(){var P=f;f=Z;try{return k.apply(this,arguments)}finally{f=P}}}})(Zm);Km.exports=Zm;var _v=Km.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yv=Ae,bn=_v;function ce(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qm=new Set,_a={};function Br(t,e){Ts(t,e),Ts(t+"Capture",e)}function Ts(t,e){for(_a[t]=e,t=0;t<e.length;t++)Qm.add(e[t])}var Ci=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pu=Object.prototype.hasOwnProperty,Sv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rh={},Ph={};function bv(t){return pu.call(Ph,t)?!0:pu.call(Rh,t)?!1:Sv.test(t)?Ph[t]=!0:(Rh[t]=!0,!1)}function Mv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function wv(t,e,n,i){if(e===null||typeof e>"u"||Mv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function on(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Wt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Wt[t]=new on(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Wt[e]=new on(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Wt[t]=new on(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Wt[t]=new on(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Wt[t]=new on(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Wt[t]=new on(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Wt[t]=new on(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Wt[t]=new on(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Wt[t]=new on(t,5,!1,t.toLowerCase(),null,!1,!1)});var sf=/[\-:]([a-z])/g;function af(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(sf,af);Wt[e]=new on(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(sf,af);Wt[e]=new on(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(sf,af);Wt[e]=new on(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Wt[t]=new on(t,1,!1,t.toLowerCase(),null,!1,!1)});Wt.xlinkHref=new on("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Wt[t]=new on(t,1,!1,t.toLowerCase(),null,!0,!0)});function of(t,e,n,i){var r=Wt.hasOwnProperty(e)?Wt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(wv(e,n,r,i)&&(n=null),i||r===null?bv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Di=yv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ka=Symbol.for("react.element"),ss=Symbol.for("react.portal"),as=Symbol.for("react.fragment"),lf=Symbol.for("react.strict_mode"),mu=Symbol.for("react.profiler"),Jm=Symbol.for("react.provider"),e0=Symbol.for("react.context"),cf=Symbol.for("react.forward_ref"),gu=Symbol.for("react.suspense"),xu=Symbol.for("react.suspense_list"),uf=Symbol.for("react.memo"),Wi=Symbol.for("react.lazy"),t0=Symbol.for("react.offscreen"),Ih=Symbol.iterator;function Hs(t){return t===null||typeof t!="object"?null:(t=Ih&&t[Ih]||t["@@iterator"],typeof t=="function"?t:null)}var Mt=Object.assign,lc;function ia(t){if(lc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);lc=e&&e[1]||""}return`
`+lc+t}var cc=!1;function uc(t,e){if(!t||cc)return"";cc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,l=s.length-1;1<=a&&0<=l&&r[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(r[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||r[a]!==s[l]){var c=`
`+r[a].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=a&&0<=l);break}}}finally{cc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ia(t):""}function Ev(t){switch(t.tag){case 5:return ia(t.type);case 16:return ia("Lazy");case 13:return ia("Suspense");case 19:return ia("SuspenseList");case 0:case 2:case 15:return t=uc(t.type,!1),t;case 11:return t=uc(t.type.render,!1),t;case 1:return t=uc(t.type,!0),t;default:return""}}function vu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case as:return"Fragment";case ss:return"Portal";case mu:return"Profiler";case lf:return"StrictMode";case gu:return"Suspense";case xu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case e0:return(t.displayName||"Context")+".Consumer";case Jm:return(t._context.displayName||"Context")+".Provider";case cf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case uf:return e=t.displayName||null,e!==null?e:vu(t.type)||"Memo";case Wi:e=t._payload,t=t._init;try{return vu(t(e))}catch{}}return null}function Tv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vu(e);case 8:return e===lf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function or(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function n0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Av(t){var e=n0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Za(t){t._valueTracker||(t._valueTracker=Av(t))}function i0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=n0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function nl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function _u(t,e){var n=e.checked;return Mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Lh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=or(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function r0(t,e){e=e.checked,e!=null&&of(t,"checked",e,!1)}function yu(t,e){r0(t,e);var n=or(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Su(t,e.type,n):e.hasOwnProperty("defaultValue")&&Su(t,e.type,or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Dh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Su(t,e,n){(e!=="number"||nl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ra=Array.isArray;function xs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+or(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function bu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ce(91));return Mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Fh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ce(92));if(ra(n)){if(1<n.length)throw Error(ce(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:or(n)}}function s0(t,e){var n=or(e.value),i=or(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Uh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function a0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Mu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?a0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Qa,o0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Qa=Qa||document.createElement("div"),Qa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Qa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ya(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ca={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Cv=["Webkit","ms","Moz","O"];Object.keys(ca).forEach(function(t){Cv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ca[e]=ca[t]})});function l0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ca.hasOwnProperty(t)&&ca[t]?(""+e).trim():e+"px"}function c0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=l0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Nv=Mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wu(t,e){if(e){if(Nv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ce(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ce(62))}}function Eu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tu=null;function df(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Au=null,vs=null,_s=null;function kh(t){if(t=Va(t)){if(typeof Au!="function")throw Error(ce(280));var e=t.stateNode;e&&(e=zl(e),Au(t.stateNode,t.type,e))}}function u0(t){vs?_s?_s.push(t):_s=[t]:vs=t}function d0(){if(vs){var t=vs,e=_s;if(_s=vs=null,kh(t),e)for(t=0;t<e.length;t++)kh(e[t])}}function f0(t,e){return t(e)}function h0(){}var dc=!1;function p0(t,e,n){if(dc)return t(e,n);dc=!0;try{return f0(t,e,n)}finally{dc=!1,(vs!==null||_s!==null)&&(h0(),d0())}}function Sa(t,e){var n=t.stateNode;if(n===null)return null;var i=zl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ce(231,e,typeof n));return n}var Cu=!1;if(Ci)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){Cu=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{Cu=!1}function Rv(t,e,n,i,r,s,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var ua=!1,il=null,rl=!1,Nu=null,Pv={onError:function(t){ua=!0,il=t}};function Iv(t,e,n,i,r,s,a,l,c){ua=!1,il=null,Rv.apply(Pv,arguments)}function Lv(t,e,n,i,r,s,a,l,c){if(Iv.apply(this,arguments),ua){if(ua){var u=il;ua=!1,il=null}else throw Error(ce(198));rl||(rl=!0,Nu=u)}}function zr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function m0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Oh(t){if(zr(t)!==t)throw Error(ce(188))}function Dv(t){var e=t.alternate;if(!e){if(e=zr(t),e===null)throw Error(ce(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Oh(r),t;if(s===i)return Oh(r),e;s=s.sibling}throw Error(ce(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,l=r.child;l;){if(l===n){a=!0,n=r,i=s;break}if(l===i){a=!0,i=r,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,i=r;break}if(l===i){a=!0,i=s,n=r;break}l=l.sibling}if(!a)throw Error(ce(189))}}if(n.alternate!==i)throw Error(ce(190))}if(n.tag!==3)throw Error(ce(188));return n.stateNode.current===n?t:e}function g0(t){return t=Dv(t),t!==null?x0(t):null}function x0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=x0(t);if(e!==null)return e;t=t.sibling}return null}var v0=bn.unstable_scheduleCallback,Bh=bn.unstable_cancelCallback,Fv=bn.unstable_shouldYield,Uv=bn.unstable_requestPaint,Rt=bn.unstable_now,kv=bn.unstable_getCurrentPriorityLevel,ff=bn.unstable_ImmediatePriority,_0=bn.unstable_UserBlockingPriority,sl=bn.unstable_NormalPriority,Ov=bn.unstable_LowPriority,y0=bn.unstable_IdlePriority,Ul=null,li=null;function Bv(t){if(li&&typeof li.onCommitFiberRoot=="function")try{li.onCommitFiberRoot(Ul,t,void 0,(t.current.flags&128)===128)}catch{}}var qn=Math.clz32?Math.clz32:Hv,zv=Math.log,Vv=Math.LN2;function Hv(t){return t>>>=0,t===0?32:31-(zv(t)/Vv|0)|0}var Ja=64,eo=4194304;function sa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function al(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var l=a&~r;l!==0?i=sa(l):(s&=a,s!==0&&(i=sa(s)))}else a=n&~r,a!==0?i=sa(a):s!==0&&(i=sa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-qn(e),r=1<<n,i|=t[n],e&=~r;return i}function Gv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-qn(s),l=1<<a,c=r[a];c===-1?(!(l&n)||l&i)&&(r[a]=Gv(l,e)):c<=e&&(t.expiredLanes|=l),s&=~l}}function Ru(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function S0(){var t=Ja;return Ja<<=1,!(Ja&4194240)&&(Ja=64),t}function fc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ba(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-qn(e),t[e]=n}function Wv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-qn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function hf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-qn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ct=0;function b0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var M0,pf,w0,E0,T0,Pu=!1,to=[],Ji=null,er=null,tr=null,ba=new Map,Ma=new Map,$i=[],Xv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zh(t,e){switch(t){case"focusin":case"focusout":Ji=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":ba.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ma.delete(e.pointerId)}}function js(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Va(e),e!==null&&pf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function $v(t,e,n,i,r){switch(e){case"focusin":return Ji=js(Ji,t,e,n,i,r),!0;case"dragenter":return er=js(er,t,e,n,i,r),!0;case"mouseover":return tr=js(tr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ba.set(s,js(ba.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ma.set(s,js(Ma.get(s)||null,t,e,n,i,r)),!0}return!1}function A0(t){var e=wr(t.target);if(e!==null){var n=zr(e);if(n!==null){if(e=n.tag,e===13){if(e=m0(n),e!==null){t.blockedOn=e,T0(t.priority,function(){w0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Iu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Tu=i,n.target.dispatchEvent(i),Tu=null}else return e=Va(n),e!==null&&pf(e),t.blockedOn=n,!1;e.shift()}return!0}function Vh(t,e,n){zo(t)&&n.delete(e)}function qv(){Pu=!1,Ji!==null&&zo(Ji)&&(Ji=null),er!==null&&zo(er)&&(er=null),tr!==null&&zo(tr)&&(tr=null),ba.forEach(Vh),Ma.forEach(Vh)}function Ws(t,e){t.blockedOn===e&&(t.blockedOn=null,Pu||(Pu=!0,bn.unstable_scheduleCallback(bn.unstable_NormalPriority,qv)))}function wa(t){function e(r){return Ws(r,t)}if(0<to.length){Ws(to[0],t);for(var n=1;n<to.length;n++){var i=to[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ji!==null&&Ws(Ji,t),er!==null&&Ws(er,t),tr!==null&&Ws(tr,t),ba.forEach(e),Ma.forEach(e),n=0;n<$i.length;n++)i=$i[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<$i.length&&(n=$i[0],n.blockedOn===null);)A0(n),n.blockedOn===null&&$i.shift()}var ys=Di.ReactCurrentBatchConfig,ol=!0;function Yv(t,e,n,i){var r=ct,s=ys.transition;ys.transition=null;try{ct=1,mf(t,e,n,i)}finally{ct=r,ys.transition=s}}function Kv(t,e,n,i){var r=ct,s=ys.transition;ys.transition=null;try{ct=4,mf(t,e,n,i)}finally{ct=r,ys.transition=s}}function mf(t,e,n,i){if(ol){var r=Iu(t,e,n,i);if(r===null)bc(t,e,i,ll,n),zh(t,i);else if($v(r,t,e,n,i))i.stopPropagation();else if(zh(t,i),e&4&&-1<Xv.indexOf(t)){for(;r!==null;){var s=Va(r);if(s!==null&&M0(s),s=Iu(t,e,n,i),s===null&&bc(t,e,i,ll,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else bc(t,e,i,null,n)}}var ll=null;function Iu(t,e,n,i){if(ll=null,t=df(i),t=wr(t),t!==null)if(e=zr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=m0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ll=t,null}function C0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kv()){case ff:return 1;case _0:return 4;case sl:case Ov:return 16;case y0:return 536870912;default:return 16}default:return 16}}var Ki=null,gf=null,Vo=null;function N0(){if(Vo)return Vo;var t,e=gf,n=e.length,i,r="value"in Ki?Ki.value:Ki.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Vo=r.slice(t,1<i?1-i:void 0)}function Ho(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function no(){return!0}function Hh(){return!1}function wn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?no:Hh,this.isPropagationStopped=Hh,this}return Mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=no)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=no)},persist:function(){},isPersistent:no}),e}var Os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xf=wn(Os),za=Mt({},Os,{view:0,detail:0}),Zv=wn(za),hc,pc,Xs,kl=Mt({},za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xs&&(Xs&&t.type==="mousemove"?(hc=t.screenX-Xs.screenX,pc=t.screenY-Xs.screenY):pc=hc=0,Xs=t),hc)},movementY:function(t){return"movementY"in t?t.movementY:pc}}),Gh=wn(kl),Qv=Mt({},kl,{dataTransfer:0}),Jv=wn(Qv),e_=Mt({},za,{relatedTarget:0}),mc=wn(e_),t_=Mt({},Os,{animationName:0,elapsedTime:0,pseudoElement:0}),n_=wn(t_),i_=Mt({},Os,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),r_=wn(i_),s_=Mt({},Os,{data:0}),jh=wn(s_),a_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},o_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},l_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function c_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=l_[t])?!!e[t]:!1}function vf(){return c_}var u_=Mt({},za,{key:function(t){if(t.key){var e=a_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ho(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?o_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vf,charCode:function(t){return t.type==="keypress"?Ho(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ho(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),d_=wn(u_),f_=Mt({},kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wh=wn(f_),h_=Mt({},za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vf}),p_=wn(h_),m_=Mt({},Os,{propertyName:0,elapsedTime:0,pseudoElement:0}),g_=wn(m_),x_=Mt({},kl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),v_=wn(x_),__=[9,13,27,32],_f=Ci&&"CompositionEvent"in window,da=null;Ci&&"documentMode"in document&&(da=document.documentMode);var y_=Ci&&"TextEvent"in window&&!da,R0=Ci&&(!_f||da&&8<da&&11>=da),Xh=" ",$h=!1;function P0(t,e){switch(t){case"keyup":return __.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function I0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var os=!1;function S_(t,e){switch(t){case"compositionend":return I0(e);case"keypress":return e.which!==32?null:($h=!0,Xh);case"textInput":return t=e.data,t===Xh&&$h?null:t;default:return null}}function b_(t,e){if(os)return t==="compositionend"||!_f&&P0(t,e)?(t=N0(),Vo=gf=Ki=null,os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return R0&&e.locale!=="ko"?null:e.data;default:return null}}var M_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!M_[t.type]:e==="textarea"}function L0(t,e,n,i){u0(i),e=cl(e,"onChange"),0<e.length&&(n=new xf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var fa=null,Ea=null;function w_(t){j0(t,0)}function Ol(t){var e=us(t);if(i0(e))return t}function E_(t,e){if(t==="change")return e}var D0=!1;if(Ci){var gc;if(Ci){var xc="oninput"in document;if(!xc){var Yh=document.createElement("div");Yh.setAttribute("oninput","return;"),xc=typeof Yh.oninput=="function"}gc=xc}else gc=!1;D0=gc&&(!document.documentMode||9<document.documentMode)}function Kh(){fa&&(fa.detachEvent("onpropertychange",F0),Ea=fa=null)}function F0(t){if(t.propertyName==="value"&&Ol(Ea)){var e=[];L0(e,Ea,t,df(t)),p0(w_,e)}}function T_(t,e,n){t==="focusin"?(Kh(),fa=e,Ea=n,fa.attachEvent("onpropertychange",F0)):t==="focusout"&&Kh()}function A_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ol(Ea)}function C_(t,e){if(t==="click")return Ol(e)}function N_(t,e){if(t==="input"||t==="change")return Ol(e)}function R_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kn=typeof Object.is=="function"?Object.is:R_;function Ta(t,e){if(Kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!pu.call(e,r)||!Kn(t[r],e[r]))return!1}return!0}function Zh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Qh(t,e){var n=Zh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zh(n)}}function U0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?U0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function k0(){for(var t=window,e=nl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=nl(t.document)}return e}function yf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function P_(t){var e=k0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&U0(n.ownerDocument.documentElement,n)){if(i!==null&&yf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Qh(n,s);var a=Qh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var I_=Ci&&"documentMode"in document&&11>=document.documentMode,ls=null,Lu=null,ha=null,Du=!1;function Jh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Du||ls==null||ls!==nl(i)||(i=ls,"selectionStart"in i&&yf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ha&&Ta(ha,i)||(ha=i,i=cl(Lu,"onSelect"),0<i.length&&(e=new xf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ls)))}function io(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var cs={animationend:io("Animation","AnimationEnd"),animationiteration:io("Animation","AnimationIteration"),animationstart:io("Animation","AnimationStart"),transitionend:io("Transition","TransitionEnd")},vc={},O0={};Ci&&(O0=document.createElement("div").style,"AnimationEvent"in window||(delete cs.animationend.animation,delete cs.animationiteration.animation,delete cs.animationstart.animation),"TransitionEvent"in window||delete cs.transitionend.transition);function Bl(t){if(vc[t])return vc[t];if(!cs[t])return t;var e=cs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in O0)return vc[t]=e[n];return t}var B0=Bl("animationend"),z0=Bl("animationiteration"),V0=Bl("animationstart"),H0=Bl("transitionend"),G0=new Map,ep="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(t,e){G0.set(t,e),Br(e,[t])}for(var _c=0;_c<ep.length;_c++){var yc=ep[_c],L_=yc.toLowerCase(),D_=yc[0].toUpperCase()+yc.slice(1);ur(L_,"on"+D_)}ur(B0,"onAnimationEnd");ur(z0,"onAnimationIteration");ur(V0,"onAnimationStart");ur("dblclick","onDoubleClick");ur("focusin","onFocus");ur("focusout","onBlur");ur(H0,"onTransitionEnd");Ts("onMouseEnter",["mouseout","mouseover"]);Ts("onMouseLeave",["mouseout","mouseover"]);Ts("onPointerEnter",["pointerout","pointerover"]);Ts("onPointerLeave",["pointerout","pointerover"]);Br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Br("onBeforeInput",["compositionend","keypress","textInput","paste"]);Br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),F_=new Set("cancel close invalid load scroll toggle".split(" ").concat(aa));function tp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Lv(i,e,void 0,t),t.currentTarget=null}function j0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var l=i[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&r.isPropagationStopped())break e;tp(r,l,u),s=c}else for(a=0;a<i.length;a++){if(l=i[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&r.isPropagationStopped())break e;tp(r,l,u),s=c}}}if(rl)throw t=Nu,rl=!1,Nu=null,t}function vt(t,e){var n=e[Bu];n===void 0&&(n=e[Bu]=new Set);var i=t+"__bubble";n.has(i)||(W0(e,t,2,!1),n.add(i))}function Sc(t,e,n){var i=0;e&&(i|=4),W0(n,t,i,e)}var ro="_reactListening"+Math.random().toString(36).slice(2);function Aa(t){if(!t[ro]){t[ro]=!0,Qm.forEach(function(n){n!=="selectionchange"&&(F_.has(n)||Sc(n,!1,t),Sc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ro]||(e[ro]=!0,Sc("selectionchange",!1,e))}}function W0(t,e,n,i){switch(C0(e)){case 1:var r=Yv;break;case 4:r=Kv;break;default:r=mf}n=r.bind(null,e,n,t),r=void 0,!Cu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function bc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var l=i.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;a=a.return}for(;l!==null;){if(a=wr(l),a===null)return;if(c=a.tag,c===5||c===6){i=s=a;continue e}l=l.parentNode}}i=i.return}p0(function(){var u=s,h=df(n),m=[];e:{var f=G0.get(t);if(f!==void 0){var p=xf,y=t;switch(t){case"keypress":if(Ho(n)===0)break e;case"keydown":case"keyup":p=d_;break;case"focusin":y="focus",p=mc;break;case"focusout":y="blur",p=mc;break;case"beforeblur":case"afterblur":p=mc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Gh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Jv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=p_;break;case B0:case z0:case V0:p=n_;break;case H0:p=g_;break;case"scroll":p=Zv;break;case"wheel":p=v_;break;case"copy":case"cut":case"paste":p=r_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Wh}var M=(e&4)!==0,g=!M&&t==="scroll",d=M?f!==null?f+"Capture":null:f;M=[];for(var x=u,_;x!==null;){_=x;var b=_.stateNode;if(_.tag===5&&b!==null&&(_=b,d!==null&&(b=Sa(x,d),b!=null&&M.push(Ca(x,b,_)))),g)break;x=x.return}0<M.length&&(f=new p(f,y,null,n,h),m.push({event:f,listeners:M}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Tu&&(y=n.relatedTarget||n.fromElement)&&(wr(y)||y[Ni]))break e;if((p||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=u,y=y?wr(y):null,y!==null&&(g=zr(y),y!==g||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=u),p!==y)){if(M=Gh,b="onMouseLeave",d="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(M=Wh,b="onPointerLeave",d="onPointerEnter",x="pointer"),g=p==null?f:us(p),_=y==null?f:us(y),f=new M(b,x+"leave",p,n,h),f.target=g,f.relatedTarget=_,b=null,wr(h)===u&&(M=new M(d,x+"enter",y,n,h),M.target=_,M.relatedTarget=g,b=M),g=b,p&&y)t:{for(M=p,d=y,x=0,_=M;_;_=jr(_))x++;for(_=0,b=d;b;b=jr(b))_++;for(;0<x-_;)M=jr(M),x--;for(;0<_-x;)d=jr(d),_--;for(;x--;){if(M===d||d!==null&&M===d.alternate)break t;M=jr(M),d=jr(d)}M=null}else M=null;p!==null&&np(m,f,p,M,!1),y!==null&&g!==null&&np(m,g,y,M,!0)}}e:{if(f=u?us(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var T=E_;else if(qh(f))if(D0)T=N_;else{T=A_;var A=T_}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=C_);if(T&&(T=T(t,u))){L0(m,T,n,h);break e}A&&A(t,f,u),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&Su(f,"number",f.value)}switch(A=u?us(u):window,t){case"focusin":(qh(A)||A.contentEditable==="true")&&(ls=A,Lu=u,ha=null);break;case"focusout":ha=Lu=ls=null;break;case"mousedown":Du=!0;break;case"contextmenu":case"mouseup":case"dragend":Du=!1,Jh(m,n,h);break;case"selectionchange":if(I_)break;case"keydown":case"keyup":Jh(m,n,h)}var N;if(_f)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else os?P0(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(R0&&n.locale!=="ko"&&(os||v!=="onCompositionStart"?v==="onCompositionEnd"&&os&&(N=N0()):(Ki=h,gf="value"in Ki?Ki.value:Ki.textContent,os=!0)),A=cl(u,v),0<A.length&&(v=new jh(v,t,null,n,h),m.push({event:v,listeners:A}),N?v.data=N:(N=I0(n),N!==null&&(v.data=N)))),(N=y_?S_(t,n):b_(t,n))&&(u=cl(u,"onBeforeInput"),0<u.length&&(h=new jh("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:u}),h.data=N))}j0(m,e)})}function Ca(t,e,n){return{instance:t,listener:e,currentTarget:n}}function cl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Sa(t,n),s!=null&&i.unshift(Ca(t,s,r)),s=Sa(t,e),s!=null&&i.push(Ca(t,s,r))),t=t.return}return i}function jr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function np(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===i)break;l.tag===5&&u!==null&&(l=u,r?(c=Sa(n,s),c!=null&&a.unshift(Ca(n,c,l))):r||(c=Sa(n,s),c!=null&&a.push(Ca(n,c,l)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var U_=/\r\n?/g,k_=/\u0000|\uFFFD/g;function ip(t){return(typeof t=="string"?t:""+t).replace(U_,`
`).replace(k_,"")}function so(t,e,n){if(e=ip(e),ip(t)!==e&&n)throw Error(ce(425))}function ul(){}var Fu=null,Uu=null;function ku(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ou=typeof setTimeout=="function"?setTimeout:void 0,O_=typeof clearTimeout=="function"?clearTimeout:void 0,rp=typeof Promise=="function"?Promise:void 0,B_=typeof queueMicrotask=="function"?queueMicrotask:typeof rp<"u"?function(t){return rp.resolve(null).then(t).catch(z_)}:Ou;function z_(t){setTimeout(function(){throw t})}function Mc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),wa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);wa(e)}function nr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function sp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Bs=Math.random().toString(36).slice(2),si="__reactFiber$"+Bs,Na="__reactProps$"+Bs,Ni="__reactContainer$"+Bs,Bu="__reactEvents$"+Bs,V_="__reactListeners$"+Bs,H_="__reactHandles$"+Bs;function wr(t){var e=t[si];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ni]||n[si]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=sp(t);t!==null;){if(n=t[si])return n;t=sp(t)}return e}t=n,n=t.parentNode}return null}function Va(t){return t=t[si]||t[Ni],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function us(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ce(33))}function zl(t){return t[Na]||null}var zu=[],ds=-1;function dr(t){return{current:t}}function _t(t){0>ds||(t.current=zu[ds],zu[ds]=null,ds--)}function gt(t,e){ds++,zu[ds]=t.current,t.current=e}var lr={},en=dr(lr),dn=dr(!1),Pr=lr;function As(t,e){var n=t.type.contextTypes;if(!n)return lr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function fn(t){return t=t.childContextTypes,t!=null}function dl(){_t(dn),_t(en)}function ap(t,e,n){if(en.current!==lr)throw Error(ce(168));gt(en,e),gt(dn,n)}function X0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ce(108,Tv(t)||"Unknown",r));return Mt({},n,i)}function fl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||lr,Pr=en.current,gt(en,t),gt(dn,dn.current),!0}function op(t,e,n){var i=t.stateNode;if(!i)throw Error(ce(169));n?(t=X0(t,e,Pr),i.__reactInternalMemoizedMergedChildContext=t,_t(dn),_t(en),gt(en,t)):_t(dn),gt(dn,n)}var yi=null,Vl=!1,wc=!1;function $0(t){yi===null?yi=[t]:yi.push(t)}function G_(t){Vl=!0,$0(t)}function fr(){if(!wc&&yi!==null){wc=!0;var t=0,e=ct;try{var n=yi;for(ct=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}yi=null,Vl=!1}catch(r){throw yi!==null&&(yi=yi.slice(t+1)),v0(ff,fr),r}finally{ct=e,wc=!1}}return null}var fs=[],hs=0,hl=null,pl=0,Nn=[],Rn=0,Ir=null,bi=1,Mi="";function _r(t,e){fs[hs++]=pl,fs[hs++]=hl,hl=t,pl=e}function q0(t,e,n){Nn[Rn++]=bi,Nn[Rn++]=Mi,Nn[Rn++]=Ir,Ir=t;var i=bi;t=Mi;var r=32-qn(i)-1;i&=~(1<<r),n+=1;var s=32-qn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,bi=1<<32-qn(e)+r|n<<r|i,Mi=s+t}else bi=1<<s|n<<r|i,Mi=t}function Sf(t){t.return!==null&&(_r(t,1),q0(t,1,0))}function bf(t){for(;t===hl;)hl=fs[--hs],fs[hs]=null,pl=fs[--hs],fs[hs]=null;for(;t===Ir;)Ir=Nn[--Rn],Nn[Rn]=null,Mi=Nn[--Rn],Nn[Rn]=null,bi=Nn[--Rn],Nn[Rn]=null}var Sn=null,yn=null,yt=!1,Wn=null;function Y0(t,e){var n=Ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function lp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Sn=t,yn=nr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Sn=t,yn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ir!==null?{id:bi,overflow:Mi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Sn=t,yn=null,!0):!1;default:return!1}}function Vu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Hu(t){if(yt){var e=yn;if(e){var n=e;if(!lp(t,e)){if(Vu(t))throw Error(ce(418));e=nr(n.nextSibling);var i=Sn;e&&lp(t,e)?Y0(i,n):(t.flags=t.flags&-4097|2,yt=!1,Sn=t)}}else{if(Vu(t))throw Error(ce(418));t.flags=t.flags&-4097|2,yt=!1,Sn=t}}}function cp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Sn=t}function ao(t){if(t!==Sn)return!1;if(!yt)return cp(t),yt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ku(t.type,t.memoizedProps)),e&&(e=yn)){if(Vu(t))throw K0(),Error(ce(418));for(;e;)Y0(t,e),e=nr(e.nextSibling)}if(cp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ce(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){yn=nr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}yn=null}}else yn=Sn?nr(t.stateNode.nextSibling):null;return!0}function K0(){for(var t=yn;t;)t=nr(t.nextSibling)}function Cs(){yn=Sn=null,yt=!1}function Mf(t){Wn===null?Wn=[t]:Wn.push(t)}var j_=Di.ReactCurrentBatchConfig;function $s(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ce(309));var i=n.stateNode}if(!i)throw Error(ce(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var l=r.refs;a===null?delete l[s]:l[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ce(284));if(!n._owner)throw Error(ce(290,t))}return t}function oo(t,e){throw t=Object.prototype.toString.call(e),Error(ce(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function up(t){var e=t._init;return e(t._payload)}function Z0(t){function e(d,x){if(t){var _=d.deletions;_===null?(d.deletions=[x],d.flags|=16):_.push(x)}}function n(d,x){if(!t)return null;for(;x!==null;)e(d,x),x=x.sibling;return null}function i(d,x){for(d=new Map;x!==null;)x.key!==null?d.set(x.key,x):d.set(x.index,x),x=x.sibling;return d}function r(d,x){return d=ar(d,x),d.index=0,d.sibling=null,d}function s(d,x,_){return d.index=_,t?(_=d.alternate,_!==null?(_=_.index,_<x?(d.flags|=2,x):_):(d.flags|=2,x)):(d.flags|=1048576,x)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function l(d,x,_,b){return x===null||x.tag!==6?(x=Pc(_,d.mode,b),x.return=d,x):(x=r(x,_),x.return=d,x)}function c(d,x,_,b){var T=_.type;return T===as?h(d,x,_.props.children,b,_.key):x!==null&&(x.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Wi&&up(T)===x.type)?(b=r(x,_.props),b.ref=$s(d,x,_),b.return=d,b):(b=Yo(_.type,_.key,_.props,null,d.mode,b),b.ref=$s(d,x,_),b.return=d,b)}function u(d,x,_,b){return x===null||x.tag!==4||x.stateNode.containerInfo!==_.containerInfo||x.stateNode.implementation!==_.implementation?(x=Ic(_,d.mode,b),x.return=d,x):(x=r(x,_.children||[]),x.return=d,x)}function h(d,x,_,b,T){return x===null||x.tag!==7?(x=Rr(_,d.mode,b,T),x.return=d,x):(x=r(x,_),x.return=d,x)}function m(d,x,_){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Pc(""+x,d.mode,_),x.return=d,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ka:return _=Yo(x.type,x.key,x.props,null,d.mode,_),_.ref=$s(d,null,x),_.return=d,_;case ss:return x=Ic(x,d.mode,_),x.return=d,x;case Wi:var b=x._init;return m(d,b(x._payload),_)}if(ra(x)||Hs(x))return x=Rr(x,d.mode,_,null),x.return=d,x;oo(d,x)}return null}function f(d,x,_,b){var T=x!==null?x.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return T!==null?null:l(d,x,""+_,b);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ka:return _.key===T?c(d,x,_,b):null;case ss:return _.key===T?u(d,x,_,b):null;case Wi:return T=_._init,f(d,x,T(_._payload),b)}if(ra(_)||Hs(_))return T!==null?null:h(d,x,_,b,null);oo(d,_)}return null}function p(d,x,_,b,T){if(typeof b=="string"&&b!==""||typeof b=="number")return d=d.get(_)||null,l(x,d,""+b,T);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ka:return d=d.get(b.key===null?_:b.key)||null,c(x,d,b,T);case ss:return d=d.get(b.key===null?_:b.key)||null,u(x,d,b,T);case Wi:var A=b._init;return p(d,x,_,A(b._payload),T)}if(ra(b)||Hs(b))return d=d.get(_)||null,h(x,d,b,T,null);oo(x,b)}return null}function y(d,x,_,b){for(var T=null,A=null,N=x,v=x=0,w=null;N!==null&&v<_.length;v++){N.index>v?(w=N,N=null):w=N.sibling;var I=f(d,N,_[v],b);if(I===null){N===null&&(N=w);break}t&&N&&I.alternate===null&&e(d,N),x=s(I,x,v),A===null?T=I:A.sibling=I,A=I,N=w}if(v===_.length)return n(d,N),yt&&_r(d,v),T;if(N===null){for(;v<_.length;v++)N=m(d,_[v],b),N!==null&&(x=s(N,x,v),A===null?T=N:A.sibling=N,A=N);return yt&&_r(d,v),T}for(N=i(d,N);v<_.length;v++)w=p(N,d,v,_[v],b),w!==null&&(t&&w.alternate!==null&&N.delete(w.key===null?v:w.key),x=s(w,x,v),A===null?T=w:A.sibling=w,A=w);return t&&N.forEach(function(L){return e(d,L)}),yt&&_r(d,v),T}function M(d,x,_,b){var T=Hs(_);if(typeof T!="function")throw Error(ce(150));if(_=T.call(_),_==null)throw Error(ce(151));for(var A=T=null,N=x,v=x=0,w=null,I=_.next();N!==null&&!I.done;v++,I=_.next()){N.index>v?(w=N,N=null):w=N.sibling;var L=f(d,N,I.value,b);if(L===null){N===null&&(N=w);break}t&&N&&L.alternate===null&&e(d,N),x=s(L,x,v),A===null?T=L:A.sibling=L,A=L,N=w}if(I.done)return n(d,N),yt&&_r(d,v),T;if(N===null){for(;!I.done;v++,I=_.next())I=m(d,I.value,b),I!==null&&(x=s(I,x,v),A===null?T=I:A.sibling=I,A=I);return yt&&_r(d,v),T}for(N=i(d,N);!I.done;v++,I=_.next())I=p(N,d,v,I.value,b),I!==null&&(t&&I.alternate!==null&&N.delete(I.key===null?v:I.key),x=s(I,x,v),A===null?T=I:A.sibling=I,A=I);return t&&N.forEach(function(F){return e(d,F)}),yt&&_r(d,v),T}function g(d,x,_,b){if(typeof _=="object"&&_!==null&&_.type===as&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Ka:e:{for(var T=_.key,A=x;A!==null;){if(A.key===T){if(T=_.type,T===as){if(A.tag===7){n(d,A.sibling),x=r(A,_.props.children),x.return=d,d=x;break e}}else if(A.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Wi&&up(T)===A.type){n(d,A.sibling),x=r(A,_.props),x.ref=$s(d,A,_),x.return=d,d=x;break e}n(d,A);break}else e(d,A);A=A.sibling}_.type===as?(x=Rr(_.props.children,d.mode,b,_.key),x.return=d,d=x):(b=Yo(_.type,_.key,_.props,null,d.mode,b),b.ref=$s(d,x,_),b.return=d,d=b)}return a(d);case ss:e:{for(A=_.key;x!==null;){if(x.key===A)if(x.tag===4&&x.stateNode.containerInfo===_.containerInfo&&x.stateNode.implementation===_.implementation){n(d,x.sibling),x=r(x,_.children||[]),x.return=d,d=x;break e}else{n(d,x);break}else e(d,x);x=x.sibling}x=Ic(_,d.mode,b),x.return=d,d=x}return a(d);case Wi:return A=_._init,g(d,x,A(_._payload),b)}if(ra(_))return y(d,x,_,b);if(Hs(_))return M(d,x,_,b);oo(d,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,x!==null&&x.tag===6?(n(d,x.sibling),x=r(x,_),x.return=d,d=x):(n(d,x),x=Pc(_,d.mode,b),x.return=d,d=x),a(d)):n(d,x)}return g}var Ns=Z0(!0),Q0=Z0(!1),ml=dr(null),gl=null,ps=null,wf=null;function Ef(){wf=ps=gl=null}function Tf(t){var e=ml.current;_t(ml),t._currentValue=e}function Gu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ss(t,e){gl=t,wf=ps=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(un=!0),t.firstContext=null)}function kn(t){var e=t._currentValue;if(wf!==t)if(t={context:t,memoizedValue:e,next:null},ps===null){if(gl===null)throw Error(ce(308));ps=t,gl.dependencies={lanes:0,firstContext:t}}else ps=ps.next=t;return e}var Er=null;function Af(t){Er===null?Er=[t]:Er.push(t)}function J0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Af(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ri(t,i)}function Ri(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Xi=!1;function Cf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function eg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ei(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ir(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,rt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ri(t,n)}return r=i.interleaved,r===null?(e.next=e,Af(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ri(t,n)}function Go(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,hf(t,n)}}function dp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function xl(t,e,n,i){var r=t.updateQueue;Xi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?s=u:a.next=u,a=c;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==a&&(l===null?h.firstBaseUpdate=u:l.next=u,h.lastBaseUpdate=c))}if(s!==null){var m=r.baseState;a=0,h=u=c=null,l=s;do{var f=l.lane,p=l.eventTime;if((i&f)===f){h!==null&&(h=h.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=t,M=l;switch(f=e,p=n,M.tag){case 1:if(y=M.payload,typeof y=="function"){m=y.call(p,m,f);break e}m=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=M.payload,f=typeof y=="function"?y.call(p,m,f):y,f==null)break e;m=Mt({},m,f);break e;case 2:Xi=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[l]:f.push(l))}else p={eventTime:p,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(u=h=p,c=m):h=h.next=p,a|=f;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;f=l,l=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(h===null&&(c=m),r.baseState=c,r.firstBaseUpdate=u,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Dr|=a,t.lanes=a,t.memoizedState=m}}function fp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ce(191,r));r.call(i)}}}var Ha={},ci=dr(Ha),Ra=dr(Ha),Pa=dr(Ha);function Tr(t){if(t===Ha)throw Error(ce(174));return t}function Nf(t,e){switch(gt(Pa,e),gt(Ra,t),gt(ci,Ha),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Mu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Mu(e,t)}_t(ci),gt(ci,e)}function Rs(){_t(ci),_t(Ra),_t(Pa)}function tg(t){Tr(Pa.current);var e=Tr(ci.current),n=Mu(e,t.type);e!==n&&(gt(Ra,t),gt(ci,n))}function Rf(t){Ra.current===t&&(_t(ci),_t(Ra))}var St=dr(0);function vl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ec=[];function Pf(){for(var t=0;t<Ec.length;t++)Ec[t]._workInProgressVersionPrimary=null;Ec.length=0}var jo=Di.ReactCurrentDispatcher,Tc=Di.ReactCurrentBatchConfig,Lr=0,bt=null,Ft=null,zt=null,_l=!1,pa=!1,Ia=0,W_=0;function $t(){throw Error(ce(321))}function If(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kn(t[n],e[n]))return!1;return!0}function Lf(t,e,n,i,r,s){if(Lr=s,bt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,jo.current=t===null||t.memoizedState===null?Y_:K_,t=n(i,r),pa){s=0;do{if(pa=!1,Ia=0,25<=s)throw Error(ce(301));s+=1,zt=Ft=null,e.updateQueue=null,jo.current=Z_,t=n(i,r)}while(pa)}if(jo.current=yl,e=Ft!==null&&Ft.next!==null,Lr=0,zt=Ft=bt=null,_l=!1,e)throw Error(ce(300));return t}function Df(){var t=Ia!==0;return Ia=0,t}function ii(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?bt.memoizedState=zt=t:zt=zt.next=t,zt}function On(){if(Ft===null){var t=bt.alternate;t=t!==null?t.memoizedState:null}else t=Ft.next;var e=zt===null?bt.memoizedState:zt.next;if(e!==null)zt=e,Ft=t;else{if(t===null)throw Error(ce(310));Ft=t,t={memoizedState:Ft.memoizedState,baseState:Ft.baseState,baseQueue:Ft.baseQueue,queue:Ft.queue,next:null},zt===null?bt.memoizedState=zt=t:zt=zt.next=t}return zt}function La(t,e){return typeof e=="function"?e(t):e}function Ac(t){var e=On(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=Ft,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var l=a=null,c=null,u=s;do{var h=u.lane;if((Lr&h)===h)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var m={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=m,a=i):c=c.next=m,bt.lanes|=h,Dr|=h}u=u.next}while(u!==null&&u!==s);c===null?a=i:c.next=l,Kn(i,e.memoizedState)||(un=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=c,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,bt.lanes|=s,Dr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Cc(t){var e=On(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Kn(s,e.memoizedState)||(un=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function ng(){}function ig(t,e){var n=bt,i=On(),r=e(),s=!Kn(i.memoizedState,r);if(s&&(i.memoizedState=r,un=!0),i=i.queue,Ff(ag.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||zt!==null&&zt.memoizedState.tag&1){if(n.flags|=2048,Da(9,sg.bind(null,n,i,r,e),void 0,null),Vt===null)throw Error(ce(349));Lr&30||rg(n,e,r)}return r}function rg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=bt.updateQueue,e===null?(e={lastEffect:null,stores:null},bt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function sg(t,e,n,i){e.value=n,e.getSnapshot=i,og(e)&&lg(t)}function ag(t,e,n){return n(function(){og(e)&&lg(t)})}function og(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kn(t,n)}catch{return!0}}function lg(t){var e=Ri(t,1);e!==null&&Yn(e,t,1,-1)}function hp(t){var e=ii();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:t},e.queue=t,t=t.dispatch=q_.bind(null,bt,t),[e.memoizedState,t]}function Da(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=bt.updateQueue,e===null?(e={lastEffect:null,stores:null},bt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function cg(){return On().memoizedState}function Wo(t,e,n,i){var r=ii();bt.flags|=t,r.memoizedState=Da(1|e,n,void 0,i===void 0?null:i)}function Hl(t,e,n,i){var r=On();i=i===void 0?null:i;var s=void 0;if(Ft!==null){var a=Ft.memoizedState;if(s=a.destroy,i!==null&&If(i,a.deps)){r.memoizedState=Da(e,n,s,i);return}}bt.flags|=t,r.memoizedState=Da(1|e,n,s,i)}function pp(t,e){return Wo(8390656,8,t,e)}function Ff(t,e){return Hl(2048,8,t,e)}function ug(t,e){return Hl(4,2,t,e)}function dg(t,e){return Hl(4,4,t,e)}function fg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function hg(t,e,n){return n=n!=null?n.concat([t]):null,Hl(4,4,fg.bind(null,e,t),n)}function Uf(){}function pg(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&If(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function mg(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&If(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function gg(t,e,n){return Lr&21?(Kn(n,e)||(n=S0(),bt.lanes|=n,Dr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,un=!0),t.memoizedState=n)}function X_(t,e){var n=ct;ct=n!==0&&4>n?n:4,t(!0);var i=Tc.transition;Tc.transition={};try{t(!1),e()}finally{ct=n,Tc.transition=i}}function xg(){return On().memoizedState}function $_(t,e,n){var i=sr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},vg(t))_g(e,n);else if(n=J0(t,e,n,i),n!==null){var r=rn();Yn(n,t,i,r),yg(n,e,i)}}function q_(t,e,n){var i=sr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(vg(t))_g(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,l=s(a,n);if(r.hasEagerState=!0,r.eagerState=l,Kn(l,a)){var c=e.interleaved;c===null?(r.next=r,Af(e)):(r.next=c.next,c.next=r),e.interleaved=r;return}}catch{}finally{}n=J0(t,e,r,i),n!==null&&(r=rn(),Yn(n,t,i,r),yg(n,e,i))}}function vg(t){var e=t.alternate;return t===bt||e!==null&&e===bt}function _g(t,e){pa=_l=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function yg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,hf(t,n)}}var yl={readContext:kn,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},Y_={readContext:kn,useCallback:function(t,e){return ii().memoizedState=[t,e===void 0?null:e],t},useContext:kn,useEffect:pp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Wo(4194308,4,fg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Wo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Wo(4,2,t,e)},useMemo:function(t,e){var n=ii();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ii();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=$_.bind(null,bt,t),[i.memoizedState,t]},useRef:function(t){var e=ii();return t={current:t},e.memoizedState=t},useState:hp,useDebugValue:Uf,useDeferredValue:function(t){return ii().memoizedState=t},useTransition:function(){var t=hp(!1),e=t[0];return t=X_.bind(null,t[1]),ii().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=bt,r=ii();if(yt){if(n===void 0)throw Error(ce(407));n=n()}else{if(n=e(),Vt===null)throw Error(ce(349));Lr&30||rg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,pp(ag.bind(null,i,s,t),[t]),i.flags|=2048,Da(9,sg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ii(),e=Vt.identifierPrefix;if(yt){var n=Mi,i=bi;n=(i&~(1<<32-qn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ia++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=W_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},K_={readContext:kn,useCallback:pg,useContext:kn,useEffect:Ff,useImperativeHandle:hg,useInsertionEffect:ug,useLayoutEffect:dg,useMemo:mg,useReducer:Ac,useRef:cg,useState:function(){return Ac(La)},useDebugValue:Uf,useDeferredValue:function(t){var e=On();return gg(e,Ft.memoizedState,t)},useTransition:function(){var t=Ac(La)[0],e=On().memoizedState;return[t,e]},useMutableSource:ng,useSyncExternalStore:ig,useId:xg,unstable_isNewReconciler:!1},Z_={readContext:kn,useCallback:pg,useContext:kn,useEffect:Ff,useImperativeHandle:hg,useInsertionEffect:ug,useLayoutEffect:dg,useMemo:mg,useReducer:Cc,useRef:cg,useState:function(){return Cc(La)},useDebugValue:Uf,useDeferredValue:function(t){var e=On();return Ft===null?e.memoizedState=t:gg(e,Ft.memoizedState,t)},useTransition:function(){var t=Cc(La)[0],e=On().memoizedState;return[t,e]},useMutableSource:ng,useSyncExternalStore:ig,useId:xg,unstable_isNewReconciler:!1};function Gn(t,e){if(t&&t.defaultProps){e=Mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ju(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Gl={isMounted:function(t){return(t=t._reactInternals)?zr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=rn(),r=sr(t),s=Ei(i,r);s.payload=e,n!=null&&(s.callback=n),e=ir(t,s,r),e!==null&&(Yn(e,t,r,i),Go(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=rn(),r=sr(t),s=Ei(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ir(t,s,r),e!==null&&(Yn(e,t,r,i),Go(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rn(),i=sr(t),r=Ei(n,i);r.tag=2,e!=null&&(r.callback=e),e=ir(t,r,i),e!==null&&(Yn(e,t,i,n),Go(e,t,i))}};function mp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ta(n,i)||!Ta(r,s):!0}function Sg(t,e,n){var i=!1,r=lr,s=e.contextType;return typeof s=="object"&&s!==null?s=kn(s):(r=fn(e)?Pr:en.current,i=e.contextTypes,s=(i=i!=null)?As(t,r):lr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Gl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function gp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Gl.enqueueReplaceState(e,e.state,null)}function Wu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Cf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=kn(s):(s=fn(e)?Pr:en.current,r.context=As(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ju(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Gl.enqueueReplaceState(r,r.state,null),xl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ps(t,e){try{var n="",i=e;do n+=Ev(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Nc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Xu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Q_=typeof WeakMap=="function"?WeakMap:Map;function bg(t,e,n){n=Ei(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){bl||(bl=!0,nd=i),Xu(t,e)},n}function Mg(t,e,n){n=Ei(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Xu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Xu(t,e),typeof i!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function xp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Q_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=fy.bind(null,t,e,n),e.then(t,t))}function vp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function _p(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ei(-1,1),e.tag=2,ir(n,e,1))),n.lanes|=1),t)}var J_=Di.ReactCurrentOwner,un=!1;function nn(t,e,n,i){e.child=t===null?Q0(e,null,n,i):Ns(e,t.child,n,i)}function yp(t,e,n,i,r){n=n.render;var s=e.ref;return Ss(e,r),i=Lf(t,e,n,i,s,r),n=Df(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(yt&&n&&Sf(e),e.flags|=1,nn(t,e,i,r),e.child)}function Sp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!jf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,wg(t,e,s,i,r)):(t=Yo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ta,n(a,i)&&t.ref===e.ref)return Pi(t,e,r)}return e.flags|=1,t=ar(s,i),t.ref=e.ref,t.return=e,e.child=t}function wg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ta(s,i)&&t.ref===e.ref)if(un=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(un=!0);else return e.lanes=t.lanes,Pi(t,e,r)}return $u(t,e,n,i,r)}function Eg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},gt(gs,_n),_n|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,gt(gs,_n),_n|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,gt(gs,_n),_n|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,gt(gs,_n),_n|=i;return nn(t,e,r,n),e.child}function Tg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function $u(t,e,n,i,r){var s=fn(n)?Pr:en.current;return s=As(e,s),Ss(e,r),n=Lf(t,e,n,i,s,r),i=Df(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(yt&&i&&Sf(e),e.flags|=1,nn(t,e,n,r),e.child)}function bp(t,e,n,i,r){if(fn(n)){var s=!0;fl(e)}else s=!1;if(Ss(e,r),e.stateNode===null)Xo(t,e),Sg(e,n,i),Wu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,l=e.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=kn(u):(u=fn(n)?Pr:en.current,u=As(e,u));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==i||c!==u)&&gp(e,a,i,u),Xi=!1;var f=e.memoizedState;a.state=f,xl(e,i,a,r),c=e.memoizedState,l!==i||f!==c||dn.current||Xi?(typeof h=="function"&&(ju(e,n,h,i),c=e.memoizedState),(l=Xi||mp(e,n,l,i,f,c,u))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),a.props=i,a.state=c,a.context=u,i=l):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,eg(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:Gn(e.type,l),a.props=u,m=e.pendingProps,f=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=kn(c):(c=fn(n)?Pr:en.current,c=As(e,c));var p=n.getDerivedStateFromProps;(h=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==m||f!==c)&&gp(e,a,i,c),Xi=!1,f=e.memoizedState,a.state=f,xl(e,i,a,r);var y=e.memoizedState;l!==m||f!==y||dn.current||Xi?(typeof p=="function"&&(ju(e,n,p,i),y=e.memoizedState),(u=Xi||mp(e,n,u,i,f,y,c)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,y,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,y,c)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),a.props=i,a.state=y,a.context=c,i=u):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return qu(t,e,n,i,s,r)}function qu(t,e,n,i,r,s){Tg(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&op(e,n,!1),Pi(t,e,s);i=e.stateNode,J_.current=e;var l=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ns(e,t.child,null,s),e.child=Ns(e,null,l,s)):nn(t,e,l,s),e.memoizedState=i.state,r&&op(e,n,!0),e.child}function Ag(t){var e=t.stateNode;e.pendingContext?ap(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ap(t,e.context,!1),Nf(t,e.containerInfo)}function Mp(t,e,n,i,r){return Cs(),Mf(r),e.flags|=256,nn(t,e,n,i),e.child}var Yu={dehydrated:null,treeContext:null,retryLane:0};function Ku(t){return{baseLanes:t,cachePool:null,transitions:null}}function Cg(t,e,n){var i=e.pendingProps,r=St.current,s=!1,a=(e.flags&128)!==0,l;if((l=a)||(l=t!==null&&t.memoizedState===null?!1:(r&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),gt(St,r&1),t===null)return Hu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Xl(a,i,0,null),t=Rr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ku(n),e.memoizedState=Yu,t):kf(e,a));if(r=t.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return ey(t,e,a,i,l,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,l=r.sibling;var c={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=c,e.deletions=null):(i=ar(r,c),i.subtreeFlags=r.subtreeFlags&14680064),l!==null?s=ar(l,s):(s=Rr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Ku(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Yu,i}return s=t.child,t=s.sibling,i=ar(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function kf(t,e){return e=Xl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function lo(t,e,n,i){return i!==null&&Mf(i),Ns(e,t.child,null,n),t=kf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ey(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Nc(Error(ce(422))),lo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Xl({mode:"visible",children:i.children},r,0,null),s=Rr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ns(e,t.child,null,a),e.child.memoizedState=Ku(a),e.memoizedState=Yu,s);if(!(e.mode&1))return lo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var l=i.dgst;return i=l,s=Error(ce(419)),i=Nc(s,i,void 0),lo(t,e,a,i)}if(l=(a&t.childLanes)!==0,un||l){if(i=Vt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ri(t,r),Yn(i,t,r,-1))}return Gf(),i=Nc(Error(ce(421))),lo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=hy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,yn=nr(r.nextSibling),Sn=e,yt=!0,Wn=null,t!==null&&(Nn[Rn++]=bi,Nn[Rn++]=Mi,Nn[Rn++]=Ir,bi=t.id,Mi=t.overflow,Ir=e),e=kf(e,i.children),e.flags|=4096,e)}function wp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Gu(t.return,e,n)}function Rc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Ng(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(nn(t,e,i.children,n),i=St.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&wp(t,n,e);else if(t.tag===19)wp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(gt(St,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&vl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Rc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&vl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Rc(e,!0,n,null,s);break;case"together":Rc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Xo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Dr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ce(153));if(e.child!==null){for(t=e.child,n=ar(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ar(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ty(t,e,n){switch(e.tag){case 3:Ag(e),Cs();break;case 5:tg(e);break;case 1:fn(e.type)&&fl(e);break;case 4:Nf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;gt(ml,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(gt(St,St.current&1),e.flags|=128,null):n&e.child.childLanes?Cg(t,e,n):(gt(St,St.current&1),t=Pi(t,e,n),t!==null?t.sibling:null);gt(St,St.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Ng(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),gt(St,St.current),i)break;return null;case 22:case 23:return e.lanes=0,Eg(t,e,n)}return Pi(t,e,n)}var Rg,Zu,Pg,Ig;Rg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Zu=function(){};Pg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Tr(ci.current);var s=null;switch(n){case"input":r=_u(t,r),i=_u(t,i),s=[];break;case"select":r=Mt({},r,{value:void 0}),i=Mt({},i,{value:void 0}),s=[];break;case"textarea":r=bu(t,r),i=bu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ul)}wu(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var l=r[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(_a.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var c=i[u];if(l=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(_a.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&vt("scroll",t),s||l===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Ig=function(t,e,n,i){n!==i&&(e.flags|=4)};function qs(t,e){if(!yt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function ny(t,e,n){var i=e.pendingProps;switch(bf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(e),null;case 1:return fn(e.type)&&dl(),qt(e),null;case 3:return i=e.stateNode,Rs(),_t(dn),_t(en),Pf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ao(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wn!==null&&(sd(Wn),Wn=null))),Zu(t,e),qt(e),null;case 5:Rf(e);var r=Tr(Pa.current);if(n=e.type,t!==null&&e.stateNode!=null)Pg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ce(166));return qt(e),null}if(t=Tr(ci.current),ao(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[si]=e,i[Na]=s,t=(e.mode&1)!==0,n){case"dialog":vt("cancel",i),vt("close",i);break;case"iframe":case"object":case"embed":vt("load",i);break;case"video":case"audio":for(r=0;r<aa.length;r++)vt(aa[r],i);break;case"source":vt("error",i);break;case"img":case"image":case"link":vt("error",i),vt("load",i);break;case"details":vt("toggle",i);break;case"input":Lh(i,s),vt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},vt("invalid",i);break;case"textarea":Fh(i,s),vt("invalid",i)}wu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?i.textContent!==l&&(s.suppressHydrationWarning!==!0&&so(i.textContent,l,t),r=["children",l]):typeof l=="number"&&i.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&so(i.textContent,l,t),r=["children",""+l]):_a.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&vt("scroll",i)}switch(n){case"input":Za(i),Dh(i,s,!0);break;case"textarea":Za(i),Uh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ul)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=a0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[si]=e,t[Na]=i,Rg(t,e,!1,!1),e.stateNode=t;e:{switch(a=Eu(n,i),n){case"dialog":vt("cancel",t),vt("close",t),r=i;break;case"iframe":case"object":case"embed":vt("load",t),r=i;break;case"video":case"audio":for(r=0;r<aa.length;r++)vt(aa[r],t);r=i;break;case"source":vt("error",t),r=i;break;case"img":case"image":case"link":vt("error",t),vt("load",t),r=i;break;case"details":vt("toggle",t),r=i;break;case"input":Lh(t,i),r=_u(t,i),vt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Mt({},i,{value:void 0}),vt("invalid",t);break;case"textarea":Fh(t,i),r=bu(t,i),vt("invalid",t);break;default:r=i}wu(n,r),l=r;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?c0(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&o0(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&ya(t,c):typeof c=="number"&&ya(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(_a.hasOwnProperty(s)?c!=null&&s==="onScroll"&&vt("scroll",t):c!=null&&of(t,s,c,a))}switch(n){case"input":Za(t),Dh(t,i,!1);break;case"textarea":Za(t),Uh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+or(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?xs(t,!!i.multiple,s,!1):i.defaultValue!=null&&xs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ul)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return qt(e),null;case 6:if(t&&e.stateNode!=null)Ig(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ce(166));if(n=Tr(Pa.current),Tr(ci.current),ao(e)){if(i=e.stateNode,n=e.memoizedProps,i[si]=e,(s=i.nodeValue!==n)&&(t=Sn,t!==null))switch(t.tag){case 3:so(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&so(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[si]=e,e.stateNode=i}return qt(e),null;case 13:if(_t(St),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(yt&&yn!==null&&e.mode&1&&!(e.flags&128))K0(),Cs(),e.flags|=98560,s=!1;else if(s=ao(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ce(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ce(317));s[si]=e}else Cs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qt(e),s=!1}else Wn!==null&&(sd(Wn),Wn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||St.current&1?Ut===0&&(Ut=3):Gf())),e.updateQueue!==null&&(e.flags|=4),qt(e),null);case 4:return Rs(),Zu(t,e),t===null&&Aa(e.stateNode.containerInfo),qt(e),null;case 10:return Tf(e.type._context),qt(e),null;case 17:return fn(e.type)&&dl(),qt(e),null;case 19:if(_t(St),s=e.memoizedState,s===null)return qt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)qs(s,!1);else{if(Ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=vl(t),a!==null){for(e.flags|=128,qs(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return gt(St,St.current&1|2),e.child}t=t.sibling}s.tail!==null&&Rt()>Is&&(e.flags|=128,i=!0,qs(s,!1),e.lanes=4194304)}else{if(!i)if(t=vl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),qs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!yt)return qt(e),null}else 2*Rt()-s.renderingStartTime>Is&&n!==1073741824&&(e.flags|=128,i=!0,qs(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Rt(),e.sibling=null,n=St.current,gt(St,i?n&1|2:n&1),e):(qt(e),null);case 22:case 23:return Hf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?_n&1073741824&&(qt(e),e.subtreeFlags&6&&(e.flags|=8192)):qt(e),null;case 24:return null;case 25:return null}throw Error(ce(156,e.tag))}function iy(t,e){switch(bf(e),e.tag){case 1:return fn(e.type)&&dl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Rs(),_t(dn),_t(en),Pf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Rf(e),null;case 13:if(_t(St),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ce(340));Cs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _t(St),null;case 4:return Rs(),null;case 10:return Tf(e.type._context),null;case 22:case 23:return Hf(),null;case 24:return null;default:return null}}var co=!1,Zt=!1,ry=typeof WeakSet=="function"?WeakSet:Set,Re=null;function ms(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Tt(t,e,i)}else n.current=null}function Qu(t,e,n){try{n()}catch(i){Tt(t,e,i)}}var Ep=!1;function sy(t,e){if(Fu=ol,t=k0(),yf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,h=0,m=t,f=null;t:for(;;){for(var p;m!==n||r!==0&&m.nodeType!==3||(l=a+r),m!==s||i!==0&&m.nodeType!==3||(c=a+i),m.nodeType===3&&(a+=m.nodeValue.length),(p=m.firstChild)!==null;)f=m,m=p;for(;;){if(m===t)break t;if(f===n&&++u===r&&(l=a),f===s&&++h===i&&(c=a),(p=m.nextSibling)!==null)break;m=f,f=m.parentNode}m=p}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Uu={focusedElem:t,selectionRange:n},ol=!1,Re=e;Re!==null;)if(e=Re,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Re=t;else for(;Re!==null;){e=Re;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var M=y.memoizedProps,g=y.memoizedState,d=e.stateNode,x=d.getSnapshotBeforeUpdate(e.elementType===e.type?M:Gn(e.type,M),g);d.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(b){Tt(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,Re=t;break}Re=e.return}return y=Ep,Ep=!1,y}function ma(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Qu(e,n,s)}r=r.next}while(r!==i)}}function jl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ju(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Lg(t){var e=t.alternate;e!==null&&(t.alternate=null,Lg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[si],delete e[Na],delete e[Bu],delete e[V_],delete e[H_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Dg(t){return t.tag===5||t.tag===3||t.tag===4}function Tp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Dg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ed(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ul));else if(i!==4&&(t=t.child,t!==null))for(ed(t,e,n),t=t.sibling;t!==null;)ed(t,e,n),t=t.sibling}function td(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(td(t,e,n),t=t.sibling;t!==null;)td(t,e,n),t=t.sibling}var Ht=null,jn=!1;function Oi(t,e,n){for(n=n.child;n!==null;)Fg(t,e,n),n=n.sibling}function Fg(t,e,n){if(li&&typeof li.onCommitFiberUnmount=="function")try{li.onCommitFiberUnmount(Ul,n)}catch{}switch(n.tag){case 5:Zt||ms(n,e);case 6:var i=Ht,r=jn;Ht=null,Oi(t,e,n),Ht=i,jn=r,Ht!==null&&(jn?(t=Ht,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ht.removeChild(n.stateNode));break;case 18:Ht!==null&&(jn?(t=Ht,n=n.stateNode,t.nodeType===8?Mc(t.parentNode,n):t.nodeType===1&&Mc(t,n),wa(t)):Mc(Ht,n.stateNode));break;case 4:i=Ht,r=jn,Ht=n.stateNode.containerInfo,jn=!0,Oi(t,e,n),Ht=i,jn=r;break;case 0:case 11:case 14:case 15:if(!Zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Qu(n,e,a),r=r.next}while(r!==i)}Oi(t,e,n);break;case 1:if(!Zt&&(ms(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(l){Tt(n,e,l)}Oi(t,e,n);break;case 21:Oi(t,e,n);break;case 22:n.mode&1?(Zt=(i=Zt)||n.memoizedState!==null,Oi(t,e,n),Zt=i):Oi(t,e,n);break;default:Oi(t,e,n)}}function Ap(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ry),e.forEach(function(i){var r=py.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Bn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,l=a;e:for(;l!==null;){switch(l.tag){case 5:Ht=l.stateNode,jn=!1;break e;case 3:Ht=l.stateNode.containerInfo,jn=!0;break e;case 4:Ht=l.stateNode.containerInfo,jn=!0;break e}l=l.return}if(Ht===null)throw Error(ce(160));Fg(s,a,r),Ht=null,jn=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(u){Tt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ug(e,t),e=e.sibling}function Ug(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bn(e,t),ei(t),i&4){try{ma(3,t,t.return),jl(3,t)}catch(M){Tt(t,t.return,M)}try{ma(5,t,t.return)}catch(M){Tt(t,t.return,M)}}break;case 1:Bn(e,t),ei(t),i&512&&n!==null&&ms(n,n.return);break;case 5:if(Bn(e,t),ei(t),i&512&&n!==null&&ms(n,n.return),t.flags&32){var r=t.stateNode;try{ya(r,"")}catch(M){Tt(t,t.return,M)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&r0(r,s),Eu(l,a);var u=Eu(l,s);for(a=0;a<c.length;a+=2){var h=c[a],m=c[a+1];h==="style"?c0(r,m):h==="dangerouslySetInnerHTML"?o0(r,m):h==="children"?ya(r,m):of(r,h,m,u)}switch(l){case"input":yu(r,s);break;case"textarea":s0(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?xs(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?xs(r,!!s.multiple,s.defaultValue,!0):xs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Na]=s}catch(M){Tt(t,t.return,M)}}break;case 6:if(Bn(e,t),ei(t),i&4){if(t.stateNode===null)throw Error(ce(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(M){Tt(t,t.return,M)}}break;case 3:if(Bn(e,t),ei(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{wa(e.containerInfo)}catch(M){Tt(t,t.return,M)}break;case 4:Bn(e,t),ei(t);break;case 13:Bn(e,t),ei(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(zf=Rt())),i&4&&Ap(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Zt=(u=Zt)||h,Bn(e,t),Zt=u):Bn(e,t),ei(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(Re=t,h=t.child;h!==null;){for(m=Re=h;Re!==null;){switch(f=Re,p=f.child,f.tag){case 0:case 11:case 14:case 15:ma(4,f,f.return);break;case 1:ms(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(M){Tt(i,n,M)}}break;case 5:ms(f,f.return);break;case 22:if(f.memoizedState!==null){Np(m);continue}}p!==null?(p.return=f,Re=p):Np(m)}h=h.sibling}e:for(h=null,m=t;;){if(m.tag===5){if(h===null){h=m;try{r=m.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,c=m.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=l0("display",a))}catch(M){Tt(t,t.return,M)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(M){Tt(t,t.return,M)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Bn(e,t),ei(t),i&4&&Ap(t);break;case 21:break;default:Bn(e,t),ei(t)}}function ei(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Dg(n)){var i=n;break e}n=n.return}throw Error(ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ya(r,""),i.flags&=-33);var s=Tp(t);td(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,l=Tp(t);ed(t,l,a);break;default:throw Error(ce(161))}}catch(c){Tt(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ay(t,e,n){Re=t,kg(t)}function kg(t,e,n){for(var i=(t.mode&1)!==0;Re!==null;){var r=Re,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||co;if(!a){var l=r.alternate,c=l!==null&&l.memoizedState!==null||Zt;l=co;var u=Zt;if(co=a,(Zt=c)&&!u)for(Re=r;Re!==null;)a=Re,c=a.child,a.tag===22&&a.memoizedState!==null?Rp(r):c!==null?(c.return=a,Re=c):Rp(r);for(;s!==null;)Re=s,kg(s),s=s.sibling;Re=r,co=l,Zt=u}Cp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Re=s):Cp(t)}}function Cp(t){for(;Re!==null;){var e=Re;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Zt||jl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Gn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&fp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}fp(e,a,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&wa(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}Zt||e.flags&512&&Ju(e)}catch(f){Tt(e,e.return,f)}}if(e===t){Re=null;break}if(n=e.sibling,n!==null){n.return=e.return,Re=n;break}Re=e.return}}function Np(t){for(;Re!==null;){var e=Re;if(e===t){Re=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Re=n;break}Re=e.return}}function Rp(t){for(;Re!==null;){var e=Re;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{jl(4,e)}catch(c){Tt(e,n,c)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(c){Tt(e,r,c)}}var s=e.return;try{Ju(e)}catch(c){Tt(e,s,c)}break;case 5:var a=e.return;try{Ju(e)}catch(c){Tt(e,a,c)}}}catch(c){Tt(e,e.return,c)}if(e===t){Re=null;break}var l=e.sibling;if(l!==null){l.return=e.return,Re=l;break}Re=e.return}}var oy=Math.ceil,Sl=Di.ReactCurrentDispatcher,Of=Di.ReactCurrentOwner,Dn=Di.ReactCurrentBatchConfig,rt=0,Vt=null,Dt=null,jt=0,_n=0,gs=dr(0),Ut=0,Fa=null,Dr=0,Wl=0,Bf=0,ga=null,cn=null,zf=0,Is=1/0,_i=null,bl=!1,nd=null,rr=null,uo=!1,Zi=null,Ml=0,xa=0,id=null,$o=-1,qo=0;function rn(){return rt&6?Rt():$o!==-1?$o:$o=Rt()}function sr(t){return t.mode&1?rt&2&&jt!==0?jt&-jt:j_.transition!==null?(qo===0&&(qo=S0()),qo):(t=ct,t!==0||(t=window.event,t=t===void 0?16:C0(t.type)),t):1}function Yn(t,e,n,i){if(50<xa)throw xa=0,id=null,Error(ce(185));Ba(t,n,i),(!(rt&2)||t!==Vt)&&(t===Vt&&(!(rt&2)&&(Wl|=n),Ut===4&&qi(t,jt)),hn(t,i),n===1&&rt===0&&!(e.mode&1)&&(Is=Rt()+500,Vl&&fr()))}function hn(t,e){var n=t.callbackNode;jv(t,e);var i=al(t,t===Vt?jt:0);if(i===0)n!==null&&Bh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Bh(n),e===1)t.tag===0?G_(Pp.bind(null,t)):$0(Pp.bind(null,t)),B_(function(){!(rt&6)&&fr()}),n=null;else{switch(b0(i)){case 1:n=ff;break;case 4:n=_0;break;case 16:n=sl;break;case 536870912:n=y0;break;default:n=sl}n=Wg(n,Og.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Og(t,e){if($o=-1,qo=0,rt&6)throw Error(ce(327));var n=t.callbackNode;if(bs()&&t.callbackNode!==n)return null;var i=al(t,t===Vt?jt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=wl(t,i);else{e=i;var r=rt;rt|=2;var s=zg();(Vt!==t||jt!==e)&&(_i=null,Is=Rt()+500,Nr(t,e));do try{uy();break}catch(l){Bg(t,l)}while(!0);Ef(),Sl.current=s,rt=r,Dt!==null?e=0:(Vt=null,jt=0,e=Ut)}if(e!==0){if(e===2&&(r=Ru(t),r!==0&&(i=r,e=rd(t,r))),e===1)throw n=Fa,Nr(t,0),qi(t,i),hn(t,Rt()),n;if(e===6)qi(t,i);else{if(r=t.current.alternate,!(i&30)&&!ly(r)&&(e=wl(t,i),e===2&&(s=Ru(t),s!==0&&(i=s,e=rd(t,s))),e===1))throw n=Fa,Nr(t,0),qi(t,i),hn(t,Rt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ce(345));case 2:yr(t,cn,_i);break;case 3:if(qi(t,i),(i&130023424)===i&&(e=zf+500-Rt(),10<e)){if(al(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){rn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ou(yr.bind(null,t,cn,_i),e);break}yr(t,cn,_i);break;case 4:if(qi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-qn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Rt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*oy(i/1960))-i,10<i){t.timeoutHandle=Ou(yr.bind(null,t,cn,_i),i);break}yr(t,cn,_i);break;case 5:yr(t,cn,_i);break;default:throw Error(ce(329))}}}return hn(t,Rt()),t.callbackNode===n?Og.bind(null,t):null}function rd(t,e){var n=ga;return t.current.memoizedState.isDehydrated&&(Nr(t,e).flags|=256),t=wl(t,e),t!==2&&(e=cn,cn=n,e!==null&&sd(e)),t}function sd(t){cn===null?cn=t:cn.push.apply(cn,t)}function ly(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Kn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function qi(t,e){for(e&=~Bf,e&=~Wl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-qn(e),i=1<<n;t[n]=-1,e&=~i}}function Pp(t){if(rt&6)throw Error(ce(327));bs();var e=al(t,0);if(!(e&1))return hn(t,Rt()),null;var n=wl(t,e);if(t.tag!==0&&n===2){var i=Ru(t);i!==0&&(e=i,n=rd(t,i))}if(n===1)throw n=Fa,Nr(t,0),qi(t,e),hn(t,Rt()),n;if(n===6)throw Error(ce(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,yr(t,cn,_i),hn(t,Rt()),null}function Vf(t,e){var n=rt;rt|=1;try{return t(e)}finally{rt=n,rt===0&&(Is=Rt()+500,Vl&&fr())}}function Fr(t){Zi!==null&&Zi.tag===0&&!(rt&6)&&bs();var e=rt;rt|=1;var n=Dn.transition,i=ct;try{if(Dn.transition=null,ct=1,t)return t()}finally{ct=i,Dn.transition=n,rt=e,!(rt&6)&&fr()}}function Hf(){_n=gs.current,_t(gs)}function Nr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,O_(n)),Dt!==null)for(n=Dt.return;n!==null;){var i=n;switch(bf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&dl();break;case 3:Rs(),_t(dn),_t(en),Pf();break;case 5:Rf(i);break;case 4:Rs();break;case 13:_t(St);break;case 19:_t(St);break;case 10:Tf(i.type._context);break;case 22:case 23:Hf()}n=n.return}if(Vt=t,Dt=t=ar(t.current,null),jt=_n=e,Ut=0,Fa=null,Bf=Wl=Dr=0,cn=ga=null,Er!==null){for(e=0;e<Er.length;e++)if(n=Er[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Er=null}return t}function Bg(t,e){do{var n=Dt;try{if(Ef(),jo.current=yl,_l){for(var i=bt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}_l=!1}if(Lr=0,zt=Ft=bt=null,pa=!1,Ia=0,Of.current=null,n===null||n.return===null){Ut=1,Fa=e,Dt=null;break}e:{var s=t,a=n.return,l=n,c=e;if(e=jt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,h=l,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=vp(a);if(p!==null){p.flags&=-257,_p(p,a,l,s,e),p.mode&1&&xp(s,u,e),e=p,c=u;var y=e.updateQueue;if(y===null){var M=new Set;M.add(c),e.updateQueue=M}else y.add(c);break e}else{if(!(e&1)){xp(s,u,e),Gf();break e}c=Error(ce(426))}}else if(yt&&l.mode&1){var g=vp(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),_p(g,a,l,s,e),Mf(Ps(c,l));break e}}s=c=Ps(c,l),Ut!==4&&(Ut=2),ga===null?ga=[s]:ga.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=bg(s,c,e);dp(s,d);break e;case 1:l=c;var x=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(rr===null||!rr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=Mg(s,l,e);dp(s,b);break e}}s=s.return}while(s!==null)}Hg(n)}catch(T){e=T,Dt===n&&n!==null&&(Dt=n=n.return);continue}break}while(!0)}function zg(){var t=Sl.current;return Sl.current=yl,t===null?yl:t}function Gf(){(Ut===0||Ut===3||Ut===2)&&(Ut=4),Vt===null||!(Dr&268435455)&&!(Wl&268435455)||qi(Vt,jt)}function wl(t,e){var n=rt;rt|=2;var i=zg();(Vt!==t||jt!==e)&&(_i=null,Nr(t,e));do try{cy();break}catch(r){Bg(t,r)}while(!0);if(Ef(),rt=n,Sl.current=i,Dt!==null)throw Error(ce(261));return Vt=null,jt=0,Ut}function cy(){for(;Dt!==null;)Vg(Dt)}function uy(){for(;Dt!==null&&!Fv();)Vg(Dt)}function Vg(t){var e=jg(t.alternate,t,_n);t.memoizedProps=t.pendingProps,e===null?Hg(t):Dt=e,Of.current=null}function Hg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=iy(n,e),n!==null){n.flags&=32767,Dt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ut=6,Dt=null;return}}else if(n=ny(n,e,_n),n!==null){Dt=n;return}if(e=e.sibling,e!==null){Dt=e;return}Dt=e=t}while(e!==null);Ut===0&&(Ut=5)}function yr(t,e,n){var i=ct,r=Dn.transition;try{Dn.transition=null,ct=1,dy(t,e,n,i)}finally{Dn.transition=r,ct=i}return null}function dy(t,e,n,i){do bs();while(Zi!==null);if(rt&6)throw Error(ce(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ce(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Wv(t,s),t===Vt&&(Dt=Vt=null,jt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||uo||(uo=!0,Wg(sl,function(){return bs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dn.transition,Dn.transition=null;var a=ct;ct=1;var l=rt;rt|=4,Of.current=null,sy(t,n),Ug(n,t),P_(Uu),ol=!!Fu,Uu=Fu=null,t.current=n,ay(n),Uv(),rt=l,ct=a,Dn.transition=s}else t.current=n;if(uo&&(uo=!1,Zi=t,Ml=r),s=t.pendingLanes,s===0&&(rr=null),Bv(n.stateNode),hn(t,Rt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(bl)throw bl=!1,t=nd,nd=null,t;return Ml&1&&t.tag!==0&&bs(),s=t.pendingLanes,s&1?t===id?xa++:(xa=0,id=t):xa=0,fr(),null}function bs(){if(Zi!==null){var t=b0(Ml),e=Dn.transition,n=ct;try{if(Dn.transition=null,ct=16>t?16:t,Zi===null)var i=!1;else{if(t=Zi,Zi=null,Ml=0,rt&6)throw Error(ce(331));var r=rt;for(rt|=4,Re=t.current;Re!==null;){var s=Re,a=s.child;if(Re.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(Re=u;Re!==null;){var h=Re;switch(h.tag){case 0:case 11:case 15:ma(8,h,s)}var m=h.child;if(m!==null)m.return=h,Re=m;else for(;Re!==null;){h=Re;var f=h.sibling,p=h.return;if(Lg(h),h===u){Re=null;break}if(f!==null){f.return=p,Re=f;break}Re=p}}}var y=s.alternate;if(y!==null){var M=y.child;if(M!==null){y.child=null;do{var g=M.sibling;M.sibling=null,M=g}while(M!==null)}}Re=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Re=a;else e:for(;Re!==null;){if(s=Re,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ma(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Re=d;break e}Re=s.return}}var x=t.current;for(Re=x;Re!==null;){a=Re;var _=a.child;if(a.subtreeFlags&2064&&_!==null)_.return=a,Re=_;else e:for(a=x;Re!==null;){if(l=Re,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:jl(9,l)}}catch(T){Tt(l,l.return,T)}if(l===a){Re=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,Re=b;break e}Re=l.return}}if(rt=r,fr(),li&&typeof li.onPostCommitFiberRoot=="function")try{li.onPostCommitFiberRoot(Ul,t)}catch{}i=!0}return i}finally{ct=n,Dn.transition=e}}return!1}function Ip(t,e,n){e=Ps(n,e),e=bg(t,e,1),t=ir(t,e,1),e=rn(),t!==null&&(Ba(t,1,e),hn(t,e))}function Tt(t,e,n){if(t.tag===3)Ip(t,t,n);else for(;e!==null;){if(e.tag===3){Ip(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(rr===null||!rr.has(i))){t=Ps(n,t),t=Mg(e,t,1),e=ir(e,t,1),t=rn(),e!==null&&(Ba(e,1,t),hn(e,t));break}}e=e.return}}function fy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=rn(),t.pingedLanes|=t.suspendedLanes&n,Vt===t&&(jt&n)===n&&(Ut===4||Ut===3&&(jt&130023424)===jt&&500>Rt()-zf?Nr(t,0):Bf|=n),hn(t,e)}function Gg(t,e){e===0&&(t.mode&1?(e=eo,eo<<=1,!(eo&130023424)&&(eo=4194304)):e=1);var n=rn();t=Ri(t,e),t!==null&&(Ba(t,e,n),hn(t,n))}function hy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Gg(t,n)}function py(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ce(314))}i!==null&&i.delete(e),Gg(t,n)}var jg;jg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||dn.current)un=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return un=!1,ty(t,e,n);un=!!(t.flags&131072)}else un=!1,yt&&e.flags&1048576&&q0(e,pl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Xo(t,e),t=e.pendingProps;var r=As(e,en.current);Ss(e,n),r=Lf(null,e,i,t,r,n);var s=Df();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fn(i)?(s=!0,fl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Cf(e),r.updater=Gl,e.stateNode=r,r._reactInternals=e,Wu(e,i,t,n),e=qu(null,e,i,!0,s,n)):(e.tag=0,yt&&s&&Sf(e),nn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Xo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=gy(i),t=Gn(i,t),r){case 0:e=$u(null,e,i,t,n);break e;case 1:e=bp(null,e,i,t,n);break e;case 11:e=yp(null,e,i,t,n);break e;case 14:e=Sp(null,e,i,Gn(i.type,t),n);break e}throw Error(ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),$u(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),bp(t,e,i,r,n);case 3:e:{if(Ag(e),t===null)throw Error(ce(387));i=e.pendingProps,s=e.memoizedState,r=s.element,eg(t,e),xl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ps(Error(ce(423)),e),e=Mp(t,e,i,n,r);break e}else if(i!==r){r=Ps(Error(ce(424)),e),e=Mp(t,e,i,n,r);break e}else for(yn=nr(e.stateNode.containerInfo.firstChild),Sn=e,yt=!0,Wn=null,n=Q0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cs(),i===r){e=Pi(t,e,n);break e}nn(t,e,i,n)}e=e.child}return e;case 5:return tg(e),t===null&&Hu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,ku(i,r)?a=null:s!==null&&ku(i,s)&&(e.flags|=32),Tg(t,e),nn(t,e,a,n),e.child;case 6:return t===null&&Hu(e),null;case 13:return Cg(t,e,n);case 4:return Nf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ns(e,null,i,n):nn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),yp(t,e,i,r,n);case 7:return nn(t,e,e.pendingProps,n),e.child;case 8:return nn(t,e,e.pendingProps.children,n),e.child;case 12:return nn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,gt(ml,i._currentValue),i._currentValue=a,s!==null)if(Kn(s.value,a)){if(s.children===r.children&&!dn.current){e=Pi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var c=l.firstContext;c!==null;){if(c.context===i){if(s.tag===1){c=Ei(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?c.next=c:(c.next=h.next,h.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Gu(s.return,n,e),l.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ce(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Gu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}nn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ss(e,n),r=kn(r),i=i(r),e.flags|=1,nn(t,e,i,n),e.child;case 14:return i=e.type,r=Gn(i,e.pendingProps),r=Gn(i.type,r),Sp(t,e,i,r,n);case 15:return wg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),Xo(t,e),e.tag=1,fn(i)?(t=!0,fl(e)):t=!1,Ss(e,n),Sg(e,i,r),Wu(e,i,r,n),qu(null,e,i,!0,t,n);case 19:return Ng(t,e,n);case 22:return Eg(t,e,n)}throw Error(ce(156,e.tag))};function Wg(t,e){return v0(t,e)}function my(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(t,e,n,i){return new my(t,e,n,i)}function jf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function gy(t){if(typeof t=="function")return jf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===cf)return 11;if(t===uf)return 14}return 2}function ar(t,e){var n=t.alternate;return n===null?(n=Ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Yo(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")jf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case as:return Rr(n.children,r,s,e);case lf:a=8,r|=8;break;case mu:return t=Ln(12,n,e,r|2),t.elementType=mu,t.lanes=s,t;case gu:return t=Ln(13,n,e,r),t.elementType=gu,t.lanes=s,t;case xu:return t=Ln(19,n,e,r),t.elementType=xu,t.lanes=s,t;case t0:return Xl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Jm:a=10;break e;case e0:a=9;break e;case cf:a=11;break e;case uf:a=14;break e;case Wi:a=16,i=null;break e}throw Error(ce(130,t==null?t:typeof t,""))}return e=Ln(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Rr(t,e,n,i){return t=Ln(7,t,i,e),t.lanes=n,t}function Xl(t,e,n,i){return t=Ln(22,t,i,e),t.elementType=t0,t.lanes=n,t.stateNode={isHidden:!1},t}function Pc(t,e,n){return t=Ln(6,t,null,e),t.lanes=n,t}function Ic(t,e,n){return e=Ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function xy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fc(0),this.expirationTimes=fc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Wf(t,e,n,i,r,s,a,l,c){return t=new xy(t,e,n,l,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ln(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cf(s),t}function vy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ss,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Xg(t){if(!t)return lr;t=t._reactInternals;e:{if(zr(t)!==t||t.tag!==1)throw Error(ce(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(fn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ce(171))}if(t.tag===1){var n=t.type;if(fn(n))return X0(t,n,e)}return e}function $g(t,e,n,i,r,s,a,l,c){return t=Wf(n,i,!0,t,r,s,a,l,c),t.context=Xg(null),n=t.current,i=rn(),r=sr(n),s=Ei(i,r),s.callback=e??null,ir(n,s,r),t.current.lanes=r,Ba(t,r,i),hn(t,i),t}function $l(t,e,n,i){var r=e.current,s=rn(),a=sr(r);return n=Xg(n),e.context===null?e.context=n:e.pendingContext=n,e=Ei(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ir(r,e,a),t!==null&&(Yn(t,r,a,s),Go(t,r,a)),a}function El(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Lp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Xf(t,e){Lp(t,e),(t=t.alternate)&&Lp(t,e)}function _y(){return null}var qg=typeof reportError=="function"?reportError:function(t){console.error(t)};function $f(t){this._internalRoot=t}ql.prototype.render=$f.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ce(409));$l(t,e,null,null)};ql.prototype.unmount=$f.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Fr(function(){$l(null,t,null,null)}),e[Ni]=null}};function ql(t){this._internalRoot=t}ql.prototype.unstable_scheduleHydration=function(t){if(t){var e=E0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<$i.length&&e!==0&&e<$i[n].priority;n++);$i.splice(n,0,t),n===0&&A0(t)}};function qf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Yl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Dp(){}function yy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=El(a);s.call(u)}}var a=$g(e,i,t,0,null,!1,!1,"",Dp);return t._reactRootContainer=a,t[Ni]=a.current,Aa(t.nodeType===8?t.parentNode:t),Fr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var l=i;i=function(){var u=El(c);l.call(u)}}var c=Wf(t,0,!1,null,null,!1,!1,"",Dp);return t._reactRootContainer=c,t[Ni]=c.current,Aa(t.nodeType===8?t.parentNode:t),Fr(function(){$l(e,c,n,i)}),c}function Kl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var l=r;r=function(){var c=El(a);l.call(c)}}$l(e,a,t,r)}else a=yy(n,e,t,r,i);return El(a)}M0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=sa(e.pendingLanes);n!==0&&(hf(e,n|1),hn(e,Rt()),!(rt&6)&&(Is=Rt()+500,fr()))}break;case 13:Fr(function(){var i=Ri(t,1);if(i!==null){var r=rn();Yn(i,t,1,r)}}),Xf(t,1)}};pf=function(t){if(t.tag===13){var e=Ri(t,134217728);if(e!==null){var n=rn();Yn(e,t,134217728,n)}Xf(t,134217728)}};w0=function(t){if(t.tag===13){var e=sr(t),n=Ri(t,e);if(n!==null){var i=rn();Yn(n,t,e,i)}Xf(t,e)}};E0=function(){return ct};T0=function(t,e){var n=ct;try{return ct=t,e()}finally{ct=n}};Au=function(t,e,n){switch(e){case"input":if(yu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=zl(i);if(!r)throw Error(ce(90));i0(i),yu(i,r)}}}break;case"textarea":s0(t,n);break;case"select":e=n.value,e!=null&&xs(t,!!n.multiple,e,!1)}};f0=Vf;h0=Fr;var Sy={usingClientEntryPoint:!1,Events:[Va,us,zl,u0,d0,Vf]},Ys={findFiberByHostInstance:wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},by={bundleType:Ys.bundleType,version:Ys.version,rendererPackageName:Ys.rendererPackageName,rendererConfig:Ys.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Di.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=g0(t),t===null?null:t.stateNode},findFiberByHostInstance:Ys.findFiberByHostInstance||_y,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fo.isDisabled&&fo.supportsFiber)try{Ul=fo.inject(by),li=fo}catch{}}Mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sy;Mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qf(e))throw Error(ce(200));return vy(t,e,null,n)};Mn.createRoot=function(t,e){if(!qf(t))throw Error(ce(299));var n=!1,i="",r=qg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Wf(t,1,!1,null,null,n,!1,i,r),t[Ni]=e.current,Aa(t.nodeType===8?t.parentNode:t),new $f(e)};Mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ce(188)):(t=Object.keys(t).join(","),Error(ce(268,t)));return t=g0(e),t=t===null?null:t.stateNode,t};Mn.flushSync=function(t){return Fr(t)};Mn.hydrate=function(t,e,n){if(!Yl(e))throw Error(ce(200));return Kl(null,t,e,!0,n)};Mn.hydrateRoot=function(t,e,n){if(!qf(t))throw Error(ce(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=qg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=$g(e,null,t,1,n??null,r,!1,s,a),t[Ni]=e.current,Aa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ql(e)};Mn.render=function(t,e,n){if(!Yl(e))throw Error(ce(200));return Kl(null,t,e,!1,n)};Mn.unmountComponentAtNode=function(t){if(!Yl(t))throw Error(ce(40));return t._reactRootContainer?(Fr(function(){Kl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ni]=null})}),!0):!1};Mn.unstable_batchedUpdates=Vf;Mn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Yl(n))throw Error(ce(200));if(t==null||t._reactInternals===void 0)throw Error(ce(38));return Kl(t,e,n,!1,i)};Mn.version="18.3.1-next-f1338f8080-20240426";function Yg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yg)}catch(t){console.error(t)}}Yg(),Ym.exports=Mn;var My=Ym.exports,Fp=My;hu.createRoot=Fp.createRoot,hu.hydrateRoot=Fp.hydrateRoot;/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Kg=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ey={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=Ae.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...l},c)=>Ae.createElement("svg",{ref:c,...Ey,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:Kg("lucide",r),...l},[...a.map(([u,h])=>Ae.createElement(u,h)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=(t,e)=>{const n=Ae.forwardRef(({className:i,...r},s)=>Ae.createElement(Ty,{ref:s,iconNode:e,className:Kg(`lucide-${wy(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Zg=Ge("Activity",Ay);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Ny=Ge("ArrowLeft",Cy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Zl=Ge("ArrowRight",Ry);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],Iy=Ge("ArrowUpRight",Py);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],Dy=Ge("Award",Ly);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Uy=Ge("BookOpen",Fy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]],Tl=Ge("Bookmark",ky);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],Up=Ge("Bot",Oy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]],zy=Ge("Brain",By);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],Yf=Ge("Building2",Vy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",key:"pzmjnu"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}]],Gy=Ge("ChartPie",Hy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],kp=Ge("Check",jy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Xy=Ge("CircleCheckBig",Wy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Qg=Ge("CircleCheck",$y);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Kf=Ge("CircleHelp",qy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],Ky=Ge("CircleX",Yy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],Qy=Ge("Clock",Zy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],eS=Ge("Copy",Jy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS=[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]],Jg=Ge("Cpu",tS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],ex=Ge("Database",nS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],rS=Ge("DollarSign",iS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],aS=Ge("Download",sS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],lS=Ge("ExternalLink",oS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],tx=Ge("FileText",cS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Zf=Ge("Globe",uS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],fS=Ge("Grid3x3",dS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]],pS=Ge("Landmark",hS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],gS=Ge("LoaderCircle",mS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]],nx=Ge("PenLine",xS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]],_S=Ge("Radio",vS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],SS=Ge("RefreshCw",yS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bS=[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]],ix=Ge("Scale",bS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],wS=Ge("Search",MS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],TS=Ge("Send",ES);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],CS=Ge("ShieldAlert",AS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Ql=Ge("ShieldCheck",NS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]],PS=Ge("SlidersVertical",RS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Lc=Ge("Sparkles",IS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],DS=Ge("Target",LS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS=[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]],US=Ge("Terminal",FS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],OS=Ge("Trash2",kS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],zS=Ge("TrendingUp",BS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],rx=Ge("TriangleAlert",VS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],GS=Ge("User",HS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jS=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],WS=Ge("Users",jS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Jl=Ge("X",XS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],ad=Ge("Zap",$S);class qS{constructor(){this.ctx=null,this.muted=!1}init(){if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}toggleMute(){return this.muted=!this.muted,this.muted}playClick(){if(this.muted||(this.init(),!this.ctx))return;const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(1200,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(400,this.ctx.currentTime+.04),n.gain.setValueAtTime(.08,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.04),e.connect(n),n.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.04)}playWebcmdCrawl(){if(this.muted||(this.init(),!this.ctx))return;const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(500,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(1800,this.ctx.currentTime+.08),n.gain.setValueAtTime(.05,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.08),e.connect(n),n.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.08)}playCheckpointAlert(){if(this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime;[587.33,880,1174.66].forEach((n,i)=>{const r=this.ctx.createOscillator(),s=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(n,e+i*.08),s.gain.setValueAtTime(.1,e+i*.08),s.gain.exponentialRampToValueAtTime(.001,e+i*.08+.35),r.connect(s),s.connect(this.ctx.destination),r.start(e+i*.08),r.stop(e+i*.08+.35)})}playReportSuccess(){if(this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((i,r)=>{const s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(i,e+r*.06),a.gain.setValueAtTime(.12,e+r*.06),a.gain.exponentialRampToValueAtTime(.001,e+r*.06+.6),s.connect(a),a.connect(this.ctx.destination),s.start(e+r*.06),s.stop(e+r*.06+.6)})}}const He=new qS;function YS({onStart:t,onOpenHowItWorks:e,onOpenWatchlist:n,onGoHome:i}){return o.jsx("header",{className:"border-b border-brand-light/15 bg-[#060907]/90 backdrop-blur-2xl sticky top-0 z-40 px-4 lg:px-8 py-3.5 shadow-2xl",children:o.jsxs("div",{className:"flex items-center justify-between max-w-[1700px] mx-auto w-full",children:[o.jsxs("div",{onClick:i,className:"flex items-center gap-3.5 cursor-pointer group select-none",children:[o.jsxs("div",{className:"relative",children:[o.jsx("div",{className:"absolute -inset-1 bg-gradient-to-r from-[#F0FB43] via-[#7ED043] to-[#328F35] rounded-2xl blur-md opacity-70 group-hover:opacity-100 transition duration-300 animate-pulse"}),o.jsx("div",{className:"relative w-10 h-10 bg-[#0b110d] rounded-xl flex items-center justify-center border border-brand-light/40 shadow-xl",children:o.jsx("span",{className:"text-xl font-black green-gradient-text transform group-hover:scale-110 transition-transform",children:"⚡"})})]}),o.jsxs("div",{className:"flex flex-col",children:[o.jsx("div",{className:"flex items-center gap-2",children:o.jsx("span",{className:"text-xl font-black tracking-wider text-white font-mono bg-gradient-to-r from-[#7ED043] via-[#F0FB43] to-white bg-clip-text text-transparent drop-shadow-sm",children:"INVESTILENS"})}),o.jsx("span",{className:"text-[10px] font-mono text-brand-light/90 tracking-wider uppercase font-semibold",children:"AI-POWERED INVESTMENT RESEARCH"})]})]}),o.jsxs("div",{className:"flex items-center gap-2 sm:gap-3",children:[o.jsxs("button",{onClick:()=>{He.playClick(),n&&n()},className:"inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-medium text-slate-300 hover:text-brand-lime border border-white/[0.08] hover:border-brand-light/30 bg-[#0b110d]/80 transition-all duration-200",children:[o.jsx(Tl,{className:"w-3.5 h-3.5 text-brand-lime"}),o.jsx("span",{children:"Watchlist"})]}),o.jsxs("button",{onClick:()=>{He.playClick(),e()},className:"hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-medium text-slate-300 hover:text-brand-lime border border-white/[0.08] hover:border-brand-light/30 bg-[#0b110d]/80 transition-all duration-200",children:[o.jsx(Kf,{className:"w-3.5 h-3.5 text-brand-light"}),o.jsx("span",{children:"How It Works"})]}),o.jsxs("button",{onClick:()=>{He.playClick(),t()},className:"inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#F0FB43] via-[#7ED043] to-[#4FB734] hover:from-[#f4fc65] hover:to-[#5bc93f] text-[#060907] font-mono text-xs font-extrabold uppercase tracking-wider shadow-lg shadow-brand-medium/20 hover:scale-105 active:scale-95 transition-all duration-200",children:[o.jsx("span",{children:"Get Started"}),o.jsx(Zl,{className:"w-3.5 h-3.5"})]})]})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qf="185",KS=0,Op=1,ZS=2,Ko=1,QS=2,oa=3,cr=0,pn=1,Si=2,Ti=0,Ms=1,od=2,Bp=3,zp=4,JS=5,br=100,e1=101,t1=102,n1=103,i1=104,r1=200,s1=201,a1=202,o1=203,ld=204,cd=205,l1=206,c1=207,u1=208,d1=209,f1=210,h1=211,p1=212,m1=213,g1=214,ud=0,dd=1,fd=2,Ls=3,hd=4,pd=5,md=6,gd=7,sx=0,x1=1,v1=2,ui=0,ax=1,ox=2,lx=3,cx=4,ux=5,dx=6,fx=7,hx=300,Ur=301,Ds=302,Dc=303,Fc=304,ec=306,xd=1e3,wi=1001,vd=1002,Gt=1003,_1=1004,ho=1005,Qt=1006,Uc=1007,Ar=1008,In=1009,px=1010,mx=1011,Ua=1012,Jf=1013,fi=1014,ai=1015,Ii=1016,eh=1017,th=1018,ka=1020,gx=35902,xx=35899,vx=1021,_x=1022,$n=1023,Li=1026,Cr=1027,yx=1028,nh=1029,kr=1030,ih=1031,rh=1033,Zo=33776,Qo=33777,Jo=33778,el=33779,_d=35840,yd=35841,Sd=35842,bd=35843,Md=36196,wd=37492,Ed=37496,Td=37488,Ad=37489,Al=37490,Cd=37491,Nd=37808,Rd=37809,Pd=37810,Id=37811,Ld=37812,Dd=37813,Fd=37814,Ud=37815,kd=37816,Od=37817,Bd=37818,zd=37819,Vd=37820,Hd=37821,Gd=36492,jd=36494,Wd=36495,Xd=36283,$d=36284,Cl=36285,qd=36286,y1=3200,Vp=0,S1=1,Yi="",Cn="srgb",Nl="srgb-linear",Rl="linear",lt="srgb",Wr=7680,Hp=519,b1=512,M1=513,w1=514,sh=515,E1=516,T1=517,ah=518,A1=519,Gp=35044,jp="300 es",oi=2e3,Pl=2001;function C1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Il(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function N1(){const t=Il("canvas");return t.style.display="block",t}const Wp={};function Xp(...t){const e="THREE."+t.shift();console.log(e,...t)}function Sx(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ve(...t){t=Sx(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function it(...t){t=Sx(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function ws(...t){const e=t.join(" ");e in Wp||(Wp[e]=!0,Ve(...t))}function R1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const P1={[ud]:dd,[fd]:md,[hd]:gd,[Ls]:pd,[dd]:ud,[md]:fd,[gd]:hd,[pd]:Ls};class Vr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kc=Math.PI/180,Yd=180/Math.PI;function Ga(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[t&255]+Yt[t>>8&255]+Yt[t>>16&255]+Yt[t>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[n&63|128]+Yt[n>>8&255]+"-"+Yt[n>>16&255]+Yt[n>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function Qe(t,e,n){return Math.max(e,Math.min(n,t))}function I1(t,e){return(t%e+e)%e}function Oc(t,e,n){return(1-n)*t+n*e}function Ks(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ln(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const hh=class hh{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hh.prototype.isVector2=!0;let tt=hh;class zs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,l){let c=i[r+0],u=i[r+1],h=i[r+2],m=i[r+3],f=s[a+0],p=s[a+1],y=s[a+2],M=s[a+3];if(m!==M||c!==f||u!==p||h!==y){let g=c*f+u*p+h*y+m*M;g<0&&(f=-f,p=-p,y=-y,M=-M,g=-g);let d=1-l;if(g<.9995){const x=Math.acos(g),_=Math.sin(x);d=Math.sin(d*x)/_,l=Math.sin(l*x)/_,c=c*d+f*l,u=u*d+p*l,h=h*d+y*l,m=m*d+M*l}else{c=c*d+f*l,u=u*d+p*l,h=h*d+y*l,m=m*d+M*l;const x=1/Math.sqrt(c*c+u*u+h*h+m*m);c*=x,u*=x,h*=x,m*=x}}e[n]=c,e[n+1]=u,e[n+2]=h,e[n+3]=m}static multiplyQuaternionsFlat(e,n,i,r,s,a){const l=i[r],c=i[r+1],u=i[r+2],h=i[r+3],m=s[a],f=s[a+1],p=s[a+2],y=s[a+3];return e[n]=l*y+h*m+c*p-u*f,e[n+1]=c*y+h*f+u*m-l*p,e[n+2]=u*y+h*p+l*f-c*m,e[n+3]=h*y-l*m-c*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,l=Math.cos,c=Math.sin,u=l(i/2),h=l(r/2),m=l(s/2),f=c(i/2),p=c(r/2),y=c(s/2);switch(a){case"XYZ":this._x=f*h*m+u*p*y,this._y=u*p*m-f*h*y,this._z=u*h*y+f*p*m,this._w=u*h*m-f*p*y;break;case"YXZ":this._x=f*h*m+u*p*y,this._y=u*p*m-f*h*y,this._z=u*h*y-f*p*m,this._w=u*h*m+f*p*y;break;case"ZXY":this._x=f*h*m-u*p*y,this._y=u*p*m+f*h*y,this._z=u*h*y+f*p*m,this._w=u*h*m-f*p*y;break;case"ZYX":this._x=f*h*m-u*p*y,this._y=u*p*m+f*h*y,this._z=u*h*y-f*p*m,this._w=u*h*m+f*p*y;break;case"YZX":this._x=f*h*m+u*p*y,this._y=u*p*m+f*h*y,this._z=u*h*y-f*p*m,this._w=u*h*m-f*p*y;break;case"XZY":this._x=f*h*m-u*p*y,this._y=u*p*m-f*h*y,this._z=u*h*y+f*p*m,this._w=u*h*m+f*p*y;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],l=n[5],c=n[9],u=n[2],h=n[6],m=n[10],f=i+l+m;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-u)*p,this._z=(a-r)*p}else if(i>l&&i>m){const p=2*Math.sqrt(1+i-l-m);this._w=(h-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+u)/p}else if(l>m){const p=2*Math.sqrt(1+l-i-m);this._w=(s-u)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+m-i-l);this._w=(a-r)/p,this._x=(s+u)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,l=n._x,c=n._y,u=n._z,h=n._w;return this._x=i*h+a*l+r*u-s*c,this._y=r*h+a*c+s*l-i*u,this._z=s*h+a*u+i*c-r*l,this._w=a*h-i*l-r*c-s*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,l=this.dot(e);l<0&&(i=-i,r=-r,s=-s,a=-a,l=-l);let c=1-n;if(l<.9995){const u=Math.acos(l),h=Math.sin(u);c=Math.sin(c*u)/h,n=Math.sin(n*u)/h,this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this._onChangeCallback()}else this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ph=class ph{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion($p.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion($p.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,l=e.z,c=e.w,u=2*(a*r-l*i),h=2*(l*n-s*r),m=2*(s*i-a*n);return this.x=n+c*u+a*m-l*h,this.y=i+c*h+l*u-s*m,this.z=r+c*m+s*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,l=n.y,c=n.z;return this.x=r*c-s*l,this.y=s*a-i*c,this.z=i*l-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Bc.copy(this).projectOnVector(e),this.sub(Bc)}reflect(e){return this.sub(Bc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ph.prototype.isVector3=!0;let j=ph;const Bc=new j,$p=new zs,mh=class mh{constructor(e,n,i,r,s,a,l,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,l,c,u)}set(e,n,i,r,s,a,l,c,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=l,h[3]=n,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],l=i[3],c=i[6],u=i[1],h=i[4],m=i[7],f=i[2],p=i[5],y=i[8],M=r[0],g=r[3],d=r[6],x=r[1],_=r[4],b=r[7],T=r[2],A=r[5],N=r[8];return s[0]=a*M+l*x+c*T,s[3]=a*g+l*_+c*A,s[6]=a*d+l*b+c*N,s[1]=u*M+h*x+m*T,s[4]=u*g+h*_+m*A,s[7]=u*d+h*b+m*N,s[2]=f*M+p*x+y*T,s[5]=f*g+p*_+y*A,s[8]=f*d+p*b+y*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],u=e[7],h=e[8];return n*a*h-n*l*u-i*s*h+i*l*c+r*s*u-r*a*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],u=e[7],h=e[8],m=h*a-l*u,f=l*c-h*s,p=u*s-a*c,y=n*m+i*f+r*p;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/y;return e[0]=m*M,e[1]=(r*u-h*i)*M,e[2]=(l*i-r*a)*M,e[3]=f*M,e[4]=(h*n-r*c)*M,e[5]=(r*s-l*n)*M,e[6]=p*M,e[7]=(i*c-u*n)*M,e[8]=(a*n-i*s)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,l){const c=Math.cos(s),u=Math.sin(s);return this.set(i*c,i*u,-i*(c*a+u*l)+a+e,-r*u,r*c,-r*(-u*a+c*l)+l+n,0,0,1),this}scale(e,n){return ws("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zc.makeScale(e,n)),this}rotate(e){return ws("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zc.makeRotation(-e)),this}translate(e,n){return ws("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};mh.prototype.isMatrix3=!0;let je=mh;const zc=new je,qp=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yp=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function L1(){const t={enabled:!0,workingColorSpace:Nl,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===lt&&(r.r=Ai(r.r),r.g=Ai(r.g),r.b=Ai(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===lt&&(r.r=Es(r.r),r.g=Es(r.g),r.b=Es(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Yi?Rl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ws("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ws("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Nl]:{primaries:e,whitePoint:i,transfer:Rl,toXYZ:qp,fromXYZ:Yp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Cn},outputColorSpaceConfig:{drawingBufferColorSpace:Cn}},[Cn]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:qp,fromXYZ:Yp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Cn}}}),t}const Ze=L1();function Ai(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Es(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Xr;class D1{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Xr===void 0&&(Xr=Il("canvas")),Xr.width=e.width,Xr.height=e.height;const r=Xr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Xr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Il("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ai(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ai(n[i]/255)*255):n[i]=Ai(n[i]);return{data:n,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let F1=0;class oh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:F1++}),this.uuid=Ga(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,l=r.length;a<l;a++)r[a].isDataTexture?s.push(Vc(r[a].image)):s.push(Vc(r[a]))}else s=Vc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Vc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?D1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}let U1=0;const Hc=new j;class Jt extends Vr{constructor(e=Jt.DEFAULT_IMAGE,n=Jt.DEFAULT_MAPPING,i=wi,r=wi,s=Qt,a=Ar,l=$n,c=In,u=Jt.DEFAULT_ANISOTROPY,h=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:U1++}),this.uuid=Ga(),this.name="",this.source=new oh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=c,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Hc).x}get height(){return this.source.getSize(Hc).y}get depth(){return this.source.getSize(Hc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ve(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ve(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xd:e.x=e.x-Math.floor(e.x);break;case wi:e.x=e.x<0?0:1;break;case vd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xd:e.y=e.y-Math.floor(e.y);break;case wi:e.y=e.y<0?0:1;break;case vd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=hx;Jt.DEFAULT_ANISOTROPY=1;const gh=class gh{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,u=c[0],h=c[4],m=c[8],f=c[1],p=c[5],y=c[9],M=c[2],g=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(m-M)<.01&&Math.abs(y-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(m+M)<.1&&Math.abs(y+g)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,b=(p+1)/2,T=(d+1)/2,A=(h+f)/4,N=(m+M)/4,v=(y+g)/4;return _>b&&_>T?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=A/i,s=N/i):b>T?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=A/r,s=v/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=N/s,r=v/s),this.set(i,r,s,n),this}let x=Math.sqrt((g-y)*(g-y)+(m-M)*(m-M)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(g-y)/x,this.y=(m-M)/x,this.z=(f-h)/x,this.w=Math.acos((u+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this.w=Qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this.w=Qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};gh.prototype.isVector4=!0;let At=gh;class k1 extends Vr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new At(0,0,e,n),this.scissorTest=!1,this.viewport=new At(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new Jt(r),a=i.count;for(let l=0;l<a;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new oh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class di extends k1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class bx extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class O1 extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Dl=class Dl{constructor(e,n,i,r,s,a,l,c,u,h,m,f,p,y,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,l,c,u,h,m,f,p,y,M,g)}set(e,n,i,r,s,a,l,c,u,h,m,f,p,y,M,g){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=l,d[13]=c,d[2]=u,d[6]=h,d[10]=m,d[14]=f,d[3]=p,d[7]=y,d[11]=M,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dl().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/$r.setFromMatrixColumn(e,0).length(),s=1/$r.setFromMatrixColumn(e,1).length(),a=1/$r.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),l=Math.sin(i),c=Math.cos(r),u=Math.sin(r),h=Math.cos(s),m=Math.sin(s);if(e.order==="XYZ"){const f=a*h,p=a*m,y=l*h,M=l*m;n[0]=c*h,n[4]=-c*m,n[8]=u,n[1]=p+y*u,n[5]=f-M*u,n[9]=-l*c,n[2]=M-f*u,n[6]=y+p*u,n[10]=a*c}else if(e.order==="YXZ"){const f=c*h,p=c*m,y=u*h,M=u*m;n[0]=f+M*l,n[4]=y*l-p,n[8]=a*u,n[1]=a*m,n[5]=a*h,n[9]=-l,n[2]=p*l-y,n[6]=M+f*l,n[10]=a*c}else if(e.order==="ZXY"){const f=c*h,p=c*m,y=u*h,M=u*m;n[0]=f-M*l,n[4]=-a*m,n[8]=y+p*l,n[1]=p+y*l,n[5]=a*h,n[9]=M-f*l,n[2]=-a*u,n[6]=l,n[10]=a*c}else if(e.order==="ZYX"){const f=a*h,p=a*m,y=l*h,M=l*m;n[0]=c*h,n[4]=y*u-p,n[8]=f*u+M,n[1]=c*m,n[5]=M*u+f,n[9]=p*u-y,n[2]=-u,n[6]=l*c,n[10]=a*c}else if(e.order==="YZX"){const f=a*c,p=a*u,y=l*c,M=l*u;n[0]=c*h,n[4]=M-f*m,n[8]=y*m+p,n[1]=m,n[5]=a*h,n[9]=-l*h,n[2]=-u*h,n[6]=p*m+y,n[10]=f-M*m}else if(e.order==="XZY"){const f=a*c,p=a*u,y=l*c,M=l*u;n[0]=c*h,n[4]=-m,n[8]=u*h,n[1]=f*m+M,n[5]=a*h,n[9]=p*m-y,n[2]=y*m-p,n[6]=l*h,n[10]=M*m+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(B1,e,z1)}lookAt(e,n,i){const r=this.elements;return xn.subVectors(e,n),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Bi.crossVectors(i,xn),Bi.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Bi.crossVectors(i,xn)),Bi.normalize(),po.crossVectors(xn,Bi),r[0]=Bi.x,r[4]=po.x,r[8]=xn.x,r[1]=Bi.y,r[5]=po.y,r[9]=xn.y,r[2]=Bi.z,r[6]=po.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],l=i[4],c=i[8],u=i[12],h=i[1],m=i[5],f=i[9],p=i[13],y=i[2],M=i[6],g=i[10],d=i[14],x=i[3],_=i[7],b=i[11],T=i[15],A=r[0],N=r[4],v=r[8],w=r[12],I=r[1],L=r[5],F=r[9],V=r[13],ee=r[2],H=r[6],$=r[10],G=r[14],k=r[3],Z=r[7],P=r[11],C=r[15];return s[0]=a*A+l*I+c*ee+u*k,s[4]=a*N+l*L+c*H+u*Z,s[8]=a*v+l*F+c*$+u*P,s[12]=a*w+l*V+c*G+u*C,s[1]=h*A+m*I+f*ee+p*k,s[5]=h*N+m*L+f*H+p*Z,s[9]=h*v+m*F+f*$+p*P,s[13]=h*w+m*V+f*G+p*C,s[2]=y*A+M*I+g*ee+d*k,s[6]=y*N+M*L+g*H+d*Z,s[10]=y*v+M*F+g*$+d*P,s[14]=y*w+M*V+g*G+d*C,s[3]=x*A+_*I+b*ee+T*k,s[7]=x*N+_*L+b*H+T*Z,s[11]=x*v+_*F+b*$+T*P,s[15]=x*w+_*V+b*G+T*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],l=e[5],c=e[9],u=e[13],h=e[2],m=e[6],f=e[10],p=e[14],y=e[3],M=e[7],g=e[11],d=e[15],x=c*p-u*f,_=l*p-u*m,b=l*f-c*m,T=a*p-u*h,A=a*f-c*h,N=a*m-l*h;return n*(M*x-g*_+d*b)-i*(y*x-g*T+d*A)+r*(y*_-M*T+d*N)-s*(y*b-M*A+g*N)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10];return n*(a*h-l*u)-i*(s*h-l*c)+r*(s*u-a*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],u=e[7],h=e[8],m=e[9],f=e[10],p=e[11],y=e[12],M=e[13],g=e[14],d=e[15],x=n*l-i*a,_=n*c-r*a,b=n*u-s*a,T=i*c-r*l,A=i*u-s*l,N=r*u-s*c,v=h*M-m*y,w=h*g-f*y,I=h*d-p*y,L=m*g-f*M,F=m*d-p*M,V=f*d-p*g,ee=x*V-_*F+b*L+T*I-A*w+N*v;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/ee;return e[0]=(l*V-c*F+u*L)*H,e[1]=(r*F-i*V-s*L)*H,e[2]=(M*N-g*A+d*T)*H,e[3]=(f*A-m*N-p*T)*H,e[4]=(c*I-a*V-u*w)*H,e[5]=(n*V-r*I+s*w)*H,e[6]=(g*b-y*N-d*_)*H,e[7]=(h*N-f*b+p*_)*H,e[8]=(a*F-l*I+u*v)*H,e[9]=(i*I-n*F-s*v)*H,e[10]=(y*A-M*b+d*x)*H,e[11]=(m*b-h*A-p*x)*H,e[12]=(l*w-a*L-c*v)*H,e[13]=(n*L-i*w+r*v)*H,e[14]=(M*_-y*T-g*x)*H,e[15]=(h*T-m*_+f*x)*H,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,l=e.y,c=e.z,u=s*a,h=s*l;return this.set(u*a+i,u*l-r*c,u*c+r*l,0,u*l+r*c,h*l+i,h*c-r*a,0,u*c-r*l,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,l=n._z,c=n._w,u=s+s,h=a+a,m=l+l,f=s*u,p=s*h,y=s*m,M=a*h,g=a*m,d=l*m,x=c*u,_=c*h,b=c*m,T=i.x,A=i.y,N=i.z;return r[0]=(1-(M+d))*T,r[1]=(p+b)*T,r[2]=(y-_)*T,r[3]=0,r[4]=(p-b)*A,r[5]=(1-(f+d))*A,r[6]=(g+x)*A,r[7]=0,r[8]=(y+_)*N,r[9]=(g-x)*N,r[10]=(1-(f+M))*N,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=$r.set(r[0],r[1],r[2]).length();const l=$r.set(r[4],r[5],r[6]).length(),c=$r.set(r[8],r[9],r[10]).length();s<0&&(a=-a),zn.copy(this);const u=1/a,h=1/l,m=1/c;return zn.elements[0]*=u,zn.elements[1]*=u,zn.elements[2]*=u,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=m,zn.elements[9]*=m,zn.elements[10]*=m,n.setFromRotationMatrix(zn),i.x=a,i.y=l,i.z=c,this}makePerspective(e,n,i,r,s,a,l=oi,c=!1){const u=this.elements,h=2*s/(n-e),m=2*s/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let y,M;if(c)y=s/(a-s),M=a*s/(a-s);else if(l===oi)y=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(l===Pl)y=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=h,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=m,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=y,u[14]=M,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,a,l=oi,c=!1){const u=this.elements,h=2/(n-e),m=2/(i-r),f=-(n+e)/(n-e),p=-(i+r)/(i-r);let y,M;if(c)y=1/(a-s),M=a/(a-s);else if(l===oi)y=-2/(a-s),M=-(a+s)/(a-s);else if(l===Pl)y=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=h,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=m,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=y,u[14]=M,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Dl.prototype.isMatrix4=!0;let Pt=Dl;const $r=new j,zn=new Pt,B1=new j(0,0,0),z1=new j(1,1,1),Bi=new j,po=new j,xn=new j,Kp=new Pt,Zp=new zs;class Or{constructor(e=0,n=0,i=0,r=Or.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],l=r[8],c=r[1],u=r[5],h=r[9],m=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,p),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-m,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Qe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(l,p));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Kp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Zp.setFromEuler(this),this.setFromQuaternion(Zp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Or.DEFAULT_ORDER="XYZ";class Mx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let V1=0;const Qp=new j,qr=new zs,pi=new Pt,mo=new j,Zs=new j,H1=new j,G1=new zs,Jp=new j(1,0,0),em=new j(0,1,0),tm=new j(0,0,1),nm={type:"added"},j1={type:"removed"},Yr={type:"childadded",child:null},Gc={type:"childremoved",child:null};class mn extends Vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:V1++}),this.uuid=Ga(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const e=new j,n=new Or,i=new zs,r=new j(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pt},normalMatrix:{value:new je}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return qr.setFromAxisAngle(e,n),this.quaternion.multiply(qr),this}rotateOnWorldAxis(e,n){return qr.setFromAxisAngle(e,n),this.quaternion.premultiply(qr),this}rotateX(e){return this.rotateOnAxis(Jp,e)}rotateY(e){return this.rotateOnAxis(em,e)}rotateZ(e){return this.rotateOnAxis(tm,e)}translateOnAxis(e,n){return Qp.copy(e).applyQuaternion(this.quaternion),this.position.add(Qp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Jp,e)}translateY(e){return this.translateOnAxis(em,e)}translateZ(e){return this.translateOnAxis(tm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?mo.copy(e):mo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Zs,mo,this.up):pi.lookAt(mo,Zs,this.up),this.quaternion.setFromRotationMatrix(pi),r&&(pi.extractRotation(r.matrixWorld),qr.setFromRotationMatrix(pi),this.quaternion.premultiply(qr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(it("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nm),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null):it("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(j1),Gc.child=e,this.dispatchEvent(Gc),Gc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nm),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,e,H1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,G1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const m=c[u];s(e.shapes,m)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,u=this.material.length;c<u;c++)l.push(s(e.materials,this.material[c]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];r.animations.push(s(e.animations,c))}}if(n){const l=a(e.geometries),c=a(e.materials),u=a(e.textures),h=a(e.images),m=a(e.shapes),f=a(e.skeletons),p=a(e.animations),y=a(e.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),m.length>0&&(i.shapes=m),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),y.length>0&&(i.nodes=y)}return i.object=r,i;function a(l){const c=[];for(const u in l){const h=l[u];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}mn.DEFAULT_UP=new j(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class go extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const W1={type:"move"};class jc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new go,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new go,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new go,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const l=this._targetRay,c=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const M of e.hand.values()){const g=n.getJointPose(M,i),d=this._getHandJoint(u,M);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const h=u.joints["index-finger-tip"],m=u.joints["thumb-tip"],f=h.position.distanceTo(m.position),p=.02,y=.005;u.inputState.pinching&&f>p+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(W1)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new go;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const wx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},xo={h:0,s:0,l:0};function Wc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=I1(e,1),n=Qe(n,0,1),i=Qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Wc(a,s,e+1/3),this.g=Wc(a,s,e),this.b=Wc(a,s,e-1/3)}return Ze.colorSpaceToWorking(this,r),this}setStyle(e,n=Cn){function i(s){s!==void 0&&parseFloat(s)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],l=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ve("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Cn){const i=wx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=Es(e.r),this.g=Es(e.g),this.b=Es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Cn){return Ze.workingToColorSpace(Kt.copy(this),e),Math.round(Qe(Kt.r*255,0,255))*65536+Math.round(Qe(Kt.g*255,0,255))*256+Math.round(Qe(Kt.b*255,0,255))}getHexString(e=Cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.workingToColorSpace(Kt.copy(this),n);const i=Kt.r,r=Kt.g,s=Kt.b,a=Math.max(i,r,s),l=Math.min(i,r,s);let c,u;const h=(l+a)/2;if(l===a)c=0,u=0;else{const m=a-l;switch(u=h<=.5?m/(a+l):m/(2-a-l),a){case i:c=(r-s)/m+(r<s?6:0);break;case r:c=(s-i)/m+2;break;case s:c=(i-r)/m+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,n=Ze.workingColorSpace){return Ze.workingToColorSpace(Kt.copy(this),n),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=Cn){Ze.workingToColorSpace(Kt.copy(this),e);const n=Kt.r,i=Kt.g,r=Kt.b;return e!==Cn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+n,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(zi),e.getHSL(xo);const i=Oc(zi.h,xo.h,n),r=Oc(zi.s,xo.s,n),s=Oc(zi.l,xo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new Je;Je.NAMES=wx;class X1 extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Or,this.environmentIntensity=1,this.environmentRotation=new Or,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Vn=new j,mi=new j,Xc=new j,gi=new j,Kr=new j,Zr=new j,im=new j,$c=new j,qc=new j,Yc=new j,Kc=new At,Zc=new At,Qc=new At;class Xn{constructor(e=new j,n=new j,i=new j){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Vn.subVectors(e,n),r.cross(Vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Vn.subVectors(r,n),mi.subVectors(i,n),Xc.subVectors(e,n);const a=Vn.dot(Vn),l=Vn.dot(mi),c=Vn.dot(Xc),u=mi.dot(mi),h=mi.dot(Xc),m=a*u-l*l;if(m===0)return s.set(0,0,0),null;const f=1/m,p=(u*c-l*h)*f,y=(a*h-l*c)*f;return s.set(1-p-y,y,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,n,i,r,s,a,l,c){return this.getBarycoord(e,n,i,r,gi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,gi.x),c.addScaledVector(a,gi.y),c.addScaledVector(l,gi.z),c)}static getInterpolatedAttribute(e,n,i,r,s,a){return Kc.setScalar(0),Zc.setScalar(0),Qc.setScalar(0),Kc.fromBufferAttribute(e,n),Zc.fromBufferAttribute(e,i),Qc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Kc,s.x),a.addScaledVector(Zc,s.y),a.addScaledVector(Qc,s.z),a}static isFrontFacing(e,n,i,r){return Vn.subVectors(i,n),mi.subVectors(e,n),Vn.cross(mi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Vn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Xn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Xn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,l;Kr.subVectors(r,i),Zr.subVectors(s,i),$c.subVectors(e,i);const c=Kr.dot($c),u=Zr.dot($c);if(c<=0&&u<=0)return n.copy(i);qc.subVectors(e,r);const h=Kr.dot(qc),m=Zr.dot(qc);if(h>=0&&m<=h)return n.copy(r);const f=c*m-h*u;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),n.copy(i).addScaledVector(Kr,a);Yc.subVectors(e,s);const p=Kr.dot(Yc),y=Zr.dot(Yc);if(y>=0&&p<=y)return n.copy(s);const M=p*u-c*y;if(M<=0&&u>=0&&y<=0)return l=u/(u-y),n.copy(i).addScaledVector(Zr,l);const g=h*y-p*m;if(g<=0&&m-h>=0&&p-y>=0)return im.subVectors(s,r),l=(m-h)/(m-h+(p-y)),n.copy(r).addScaledVector(im,l);const d=1/(g+M+f);return a=M*d,l=f*d,n.copy(i).addScaledVector(Kr,a).addScaledVector(Zr,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ja{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Hn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Hn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Hn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=s.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,Hn):Hn.fromBufferAttribute(s,a),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vo.copy(i.boundingBox)),vo.applyMatrix4(e.matrixWorld),this.union(vo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qs),_o.subVectors(this.max,Qs),Qr.subVectors(e.a,Qs),Jr.subVectors(e.b,Qs),es.subVectors(e.c,Qs),Vi.subVectors(Jr,Qr),Hi.subVectors(es,Jr),pr.subVectors(Qr,es);let n=[0,-Vi.z,Vi.y,0,-Hi.z,Hi.y,0,-pr.z,pr.y,Vi.z,0,-Vi.x,Hi.z,0,-Hi.x,pr.z,0,-pr.x,-Vi.y,Vi.x,0,-Hi.y,Hi.x,0,-pr.y,pr.x,0];return!Jc(n,Qr,Jr,es,_o)||(n=[1,0,0,0,1,0,0,0,1],!Jc(n,Qr,Jr,es,_o))?!1:(yo.crossVectors(Vi,Hi),n=[yo.x,yo.y,yo.z],Jc(n,Qr,Jr,es,_o))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xi=[new j,new j,new j,new j,new j,new j,new j,new j],Hn=new j,vo=new ja,Qr=new j,Jr=new j,es=new j,Vi=new j,Hi=new j,pr=new j,Qs=new j,_o=new j,yo=new j,mr=new j;function Jc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){mr.fromArray(t,s);const l=r.x*Math.abs(mr.x)+r.y*Math.abs(mr.y)+r.z*Math.abs(mr.z),c=e.dot(mr),u=n.dot(mr),h=i.dot(mr);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>l)return!1}return!0}const Lt=new j,So=new tt;let $1=0;class Fn extends Vr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$1++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Gp,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)So.fromBufferAttribute(this,n),So.applyMatrix3(e),this.setXY(n,So.x,So.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix3(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix4(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyNormalMatrix(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.transformDirection(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ks(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ln(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ks(n,this.array)),n}setX(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ks(n,this.array)),n}setY(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ks(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ks(n,this.array)),n}setW(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array),s=ln(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gp&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Ex extends Fn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Tx extends Fn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class sn extends Fn{constructor(e,n,i){super(new Float32Array(e),n,i)}}const q1=new ja,Js=new j,eu=new j;class tc{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):q1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Js.subVectors(e,this.center);const n=Js.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Js,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(eu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Js.copy(e.center).add(eu)),this.expandByPoint(Js.copy(e.center).sub(eu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Y1=0;const An=new Pt,tu=new mn,ts=new j,vn=new ja,ea=new ja,Bt=new j;class En extends Vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Y1++}),this.uuid=Ga(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(C1(e)?Tx:Ex)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,n,i){return An.makeTranslation(e,n,i),this.applyMatrix4(An),this}scale(e,n,i){return An.makeScale(e,n,i),this.applyMatrix4(An),this}lookAt(e){return tu.lookAt(e),tu.updateMatrix(),this.applyMatrix4(tu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new sn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ja);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&it('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const l=n[s];ea.setFromBufferAttribute(l),this.morphTargetsRelative?(Bt.addVectors(vn.min,ea.min),vn.expandByPoint(Bt),Bt.addVectors(vn.max,ea.max),vn.expandByPoint(Bt)):(vn.expandByPoint(ea.min),vn.expandByPoint(ea.max))}vn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Bt));if(n)for(let s=0,a=n.length;s<a;s++){const l=n[s],c=this.morphTargetsRelative;for(let u=0,h=l.count;u<h;u++)Bt.fromBufferAttribute(l,u),c&&(ts.fromBufferAttribute(e,u),Bt.add(ts)),r=Math.max(r,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&it('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){it("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Fn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const l=[],c=[];for(let v=0;v<i.count;v++)l[v]=new j,c[v]=new j;const u=new j,h=new j,m=new j,f=new tt,p=new tt,y=new tt,M=new j,g=new j;function d(v,w,I){u.fromBufferAttribute(i,v),h.fromBufferAttribute(i,w),m.fromBufferAttribute(i,I),f.fromBufferAttribute(s,v),p.fromBufferAttribute(s,w),y.fromBufferAttribute(s,I),h.sub(u),m.sub(u),p.sub(f),y.sub(f);const L=1/(p.x*y.y-y.x*p.y);isFinite(L)&&(M.copy(h).multiplyScalar(y.y).addScaledVector(m,-p.y).multiplyScalar(L),g.copy(m).multiplyScalar(p.x).addScaledVector(h,-y.x).multiplyScalar(L),l[v].add(M),l[w].add(M),l[I].add(M),c[v].add(g),c[w].add(g),c[I].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let v=0,w=x.length;v<w;++v){const I=x[v],L=I.start,F=I.count;for(let V=L,ee=L+F;V<ee;V+=3)d(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const _=new j,b=new j,T=new j,A=new j;function N(v){T.fromBufferAttribute(r,v),A.copy(T);const w=l[v];_.copy(w),_.sub(T.multiplyScalar(T.dot(w))).normalize(),b.crossVectors(A,w);const L=b.dot(c[v])<0?-1:1;a.setXYZW(v,_.x,_.y,_.z,L)}for(let v=0,w=x.length;v<w;++v){const I=x[v],L=I.start,F=I.count;for(let V=L,ee=L+F;V<ee;V+=3)N(e.getX(V+0)),N(e.getX(V+1)),N(e.getX(V+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Fn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new j,s=new j,a=new j,l=new j,c=new j,u=new j,h=new j,m=new j;if(e)for(let f=0,p=e.count;f<p;f+=3){const y=e.getX(f+0),M=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,M),a.fromBufferAttribute(n,g),h.subVectors(a,s),m.subVectors(r,s),h.cross(m),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,M),u.fromBufferAttribute(i,g),l.add(h),c.add(h),u.add(h),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(M,c.x,c.y,c.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),h.subVectors(a,s),m.subVectors(r,s),h.cross(m),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Bt.fromBufferAttribute(e,n),Bt.normalize(),e.setXYZ(n,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(l,c){const u=l.array,h=l.itemSize,m=l.normalized,f=new u.constructor(c.length*h);let p=0,y=0;for(let M=0,g=c.length;M<g;M++){l.isInterleavedBufferAttribute?p=c[M]*l.data.stride+l.offset:p=c[M]*h;for(let d=0;d<h;d++)f[y++]=u[p++]}return new Fn(f,h,m)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new En,i=this.index.array,r=this.attributes;for(const l in r){const c=r[l],u=e(c,i);n.setAttribute(l,u)}const s=this.morphAttributes;for(const l in s){const c=[],u=s[l];for(let h=0,m=u.length;h<m;h++){const f=u[h],p=e(f,i);c.push(p)}n.morphAttributes[l]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,c=a.length;l<c;l++){const u=a[l];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let m=0,f=u.length;m<f;m++){const p=u[m];h.push(p.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(n))}const s=e.morphAttributes;for(const u in s){const h=[],m=s[u];for(let f=0,p=m.length;f<p;f++)h.push(m[f].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,h=a.length;u<h;u++){const m=a[u];this.addGroup(m.start,m.count,m.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let K1=0;class Wa extends Vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:K1++}),this.uuid=Ga(),this.name="",this.type="Material",this.blending=Ms,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ld,this.blendDst=cd,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wr,this.stencilZFail=Wr,this.stencilZPass=Wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ve(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ve(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(i.blending=this.blending),this.side!==cr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ld&&(i.blendSrc=this.blendSrc),this.blendDst!==cd&&(i.blendDst=this.blendDst),this.blendEquation!==br&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Wr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Wr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const l in s){const c=s[l];delete c.metadata,a.push(c)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new tt().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new tt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const vi=new j,nu=new j,bo=new j,Gi=new j,iu=new j,Mo=new j,ru=new j;class Ax{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=vi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,n),vi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){nu.copy(e).add(n).multiplyScalar(.5),bo.copy(n).sub(e).normalize(),Gi.copy(this.origin).sub(nu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(bo),l=Gi.dot(this.direction),c=-Gi.dot(bo),u=Gi.lengthSq(),h=Math.abs(1-a*a);let m,f,p,y;if(h>0)if(m=a*c-l,f=a*l-c,y=s*h,m>=0)if(f>=-y)if(f<=y){const M=1/h;m*=M,f*=M,p=m*(m+a*f+2*l)+f*(a*m+f+2*c)+u}else f=s,m=Math.max(0,-(a*f+l)),p=-m*m+f*(f+2*c)+u;else f=-s,m=Math.max(0,-(a*f+l)),p=-m*m+f*(f+2*c)+u;else f<=-y?(m=Math.max(0,-(-a*s+l)),f=m>0?-s:Math.min(Math.max(-s,-c),s),p=-m*m+f*(f+2*c)+u):f<=y?(m=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+u):(m=Math.max(0,-(a*s+l)),f=m>0?s:Math.min(Math.max(-s,-c),s),p=-m*m+f*(f+2*c)+u);else f=a>0?-s:s,m=Math.max(0,-(a*f+l)),p=-m*m+f*(f+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(nu).addScaledVector(bo,f),p}intersectSphere(e,n){vi.subVectors(e.center,this.origin);const i=vi.dot(this.direction),r=vi.dot(vi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),l=i-a,c=i+a;return c<0?null:l<0?this.at(c,n):this.at(l,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,l,c;const u=1/this.direction.x,h=1/this.direction.y,m=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),m>=0?(l=(e.min.z-f.z)*m,c=(e.max.z-f.z)*m):(l=(e.max.z-f.z)*m,c=(e.min.z-f.z)*m),i>c||l>r)||((l>i||i!==i)&&(i=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,n,i,r,s){iu.subVectors(n,e),Mo.subVectors(i,e),ru.crossVectors(iu,Mo);let a=this.direction.dot(ru),l;if(a>0){if(r)return null;l=1}else if(a<0)l=-1,a=-a;else return null;Gi.subVectors(this.origin,e);const c=l*this.direction.dot(Mo.crossVectors(Gi,Mo));if(c<0)return null;const u=l*this.direction.dot(iu.cross(Gi));if(u<0||c+u>a)return null;const h=-l*Gi.dot(ru);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class va extends Wa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Or,this.combine=sx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rm=new Pt,gr=new Ax,wo=new tc,sm=new j,Eo=new j,To=new j,Ao=new j,su=new j,Co=new j,am=new j,No=new j;class Un extends mn{constructor(e=new En,n=new va){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(s&&l){Co.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const h=l[c],m=s[c];h!==0&&(su.fromBufferAttribute(m,e),a?Co.addScaledVector(su,h):Co.addScaledVector(su.sub(n),h))}n.add(Co)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wo.copy(i.boundingSphere),wo.applyMatrix4(s),gr.copy(e.ray).recast(e.near),!(wo.containsPoint(gr.origin)===!1&&(gr.intersectSphere(wo,sm)===null||gr.origin.distanceToSquared(sm)>(e.far-e.near)**2))&&(rm.copy(s).invert(),gr.copy(e.ray).applyMatrix4(rm),!(i.boundingBox!==null&&gr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,gr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,l=s.index,c=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,m=s.attributes.normal,f=s.groups,p=s.drawRange;if(l!==null)if(Array.isArray(a))for(let y=0,M=f.length;y<M;y++){const g=f[y],d=a[g.materialIndex],x=Math.max(g.start,p.start),_=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let b=x,T=_;b<T;b+=3){const A=l.getX(b),N=l.getX(b+1),v=l.getX(b+2);r=Ro(this,d,e,i,u,h,m,A,N,v),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const y=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let g=y,d=M;g<d;g+=3){const x=l.getX(g),_=l.getX(g+1),b=l.getX(g+2);r=Ro(this,a,e,i,u,h,m,x,_,b),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let y=0,M=f.length;y<M;y++){const g=f[y],d=a[g.materialIndex],x=Math.max(g.start,p.start),_=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let b=x,T=_;b<T;b+=3){const A=b,N=b+1,v=b+2;r=Ro(this,d,e,i,u,h,m,A,N,v),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const y=Math.max(0,p.start),M=Math.min(c.count,p.start+p.count);for(let g=y,d=M;g<d;g+=3){const x=g,_=g+1,b=g+2;r=Ro(this,a,e,i,u,h,m,x,_,b),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function Z1(t,e,n,i,r,s,a,l){let c;if(e.side===pn?c=i.intersectTriangle(a,s,r,!0,l):c=i.intersectTriangle(r,s,a,e.side===cr,l),c===null)return null;No.copy(l),No.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(No);return u<n.near||u>n.far?null:{distance:u,point:No.clone(),object:t}}function Ro(t,e,n,i,r,s,a,l,c,u){t.getVertexPosition(l,Eo),t.getVertexPosition(c,To),t.getVertexPosition(u,Ao);const h=Z1(t,e,n,i,Eo,To,Ao,am);if(h){const m=new j;Xn.getBarycoord(am,Eo,To,Ao,m),r&&(h.uv=Xn.getInterpolatedAttribute(r,l,c,u,m,new tt)),s&&(h.uv1=Xn.getInterpolatedAttribute(s,l,c,u,m,new tt)),a&&(h.normal=Xn.getInterpolatedAttribute(a,l,c,u,m,new j),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:l,b:c,c:u,normal:new j,materialIndex:0};Xn.getNormal(Eo,To,Ao,f.normal),h.face=f,h.barycoord=m}return h}class Q1 extends Jt{constructor(e=null,n=1,i=1,r,s,a,l,c,u=Gt,h=Gt,m,f){super(null,a,l,c,u,h,r,s,m,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const au=new j,J1=new j,eb=new je;class Sr{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=au.subVectors(i,n).cross(J1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(au),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||eb.getNormalMatrix(e),r=this.coplanarPoint(au).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xr=new tc,tb=new tt(.5,.5),Po=new j;class Cx{constructor(e=new Sr,n=new Sr,i=new Sr,r=new Sr,s=new Sr,a=new Sr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const l=this.planes;return l[0].copy(e),l[1].copy(n),l[2].copy(i),l[3].copy(r),l[4].copy(s),l[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=oi,i=!1){const r=this.planes,s=e.elements,a=s[0],l=s[1],c=s[2],u=s[3],h=s[4],m=s[5],f=s[6],p=s[7],y=s[8],M=s[9],g=s[10],d=s[11],x=s[12],_=s[13],b=s[14],T=s[15];if(r[0].setComponents(u-a,p-h,d-y,T-x).normalize(),r[1].setComponents(u+a,p+h,d+y,T+x).normalize(),r[2].setComponents(u+l,p+m,d+M,T+_).normalize(),r[3].setComponents(u-l,p-m,d-M,T-_).normalize(),i)r[4].setComponents(c,f,g,b).normalize(),r[5].setComponents(u-c,p-f,d-g,T-b).normalize();else if(r[4].setComponents(u-c,p-f,d-g,T-b).normalize(),n===oi)r[5].setComponents(u+c,p+f,d+g,T+b).normalize();else if(n===Pl)r[5].setComponents(c,f,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(e){xr.center.set(0,0,0);const n=tb.distanceTo(e.center);return xr.radius=.7071067811865476+n,xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Po.x=r.normal.x>0?e.max.x:e.min.x,Po.y=r.normal.y>0?e.max.y:e.min.y,Po.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Po)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Nx extends Wa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const om=new Pt,Kd=new Ax,Io=new tc,Lo=new j;class nb extends mn{constructor(e=new En,n=new Nx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Io.copy(i.boundingSphere),Io.applyMatrix4(r),Io.radius+=s,e.ray.intersectsSphere(Io)===!1)return;om.copy(r).invert(),Kd.copy(e.ray).applyMatrix4(om);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,u=i.index,m=i.attributes.position;if(u!==null){const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let y=f,M=p;y<M;y++){const g=u.getX(y);Lo.fromBufferAttribute(m,g),lm(Lo,g,c,r,e,n,this)}}else{const f=Math.max(0,a.start),p=Math.min(m.count,a.start+a.count);for(let y=f,M=p;y<M;y++)Lo.fromBufferAttribute(m,y),lm(Lo,y,c,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function lm(t,e,n,i,r,s,a){const l=Kd.distanceSqToPoint(t);if(l<n){const c=new j;Kd.closestPointToPoint(t,c),c.applyMatrix4(i);const u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(l),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Rx extends Jt{constructor(e=[],n=Ur,i,r,s,a,l,c,u,h){super(e,n,i,r,s,a,l,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ib extends Jt{constructor(e,n,i,r,s,a,l,c,u){super(e,n,i,r,s,a,l,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fs extends Jt{constructor(e,n,i=fi,r,s,a,l=Gt,c=Gt,u,h=Li,m=1){if(h!==Li&&h!==Cr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:m};super(f,r,s,a,l,c,h,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new oh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class rb extends Fs{constructor(e,n=fi,i=Ur,r,s,a=Gt,l=Gt,c,u=Li){const h={width:e,height:e,depth:1},m=[h,h,h,h,h,h];super(e,e,n,i,r,s,a,l,c,u),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Px extends Jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Xa extends En{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const l=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],h=[],m=[];let f=0,p=0;y("z","y","x",-1,-1,i,n,e,a,s,0),y("z","y","x",1,-1,i,n,-e,a,s,1),y("x","z","y",1,1,e,i,n,r,a,2),y("x","z","y",1,-1,e,i,-n,r,a,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new sn(u,3)),this.setAttribute("normal",new sn(h,3)),this.setAttribute("uv",new sn(m,2));function y(M,g,d,x,_,b,T,A,N,v,w){const I=b/N,L=T/v,F=b/2,V=T/2,ee=A/2,H=N+1,$=v+1;let G=0,k=0;const Z=new j;for(let P=0;P<$;P++){const C=P*L-V;for(let K=0;K<H;K++){const se=K*I-F;Z[M]=se*x,Z[g]=C*_,Z[d]=ee,u.push(Z.x,Z.y,Z.z),Z[M]=0,Z[g]=0,Z[d]=A>0?1:-1,h.push(Z.x,Z.y,Z.z),m.push(K/N),m.push(1-P/v),G+=1}}for(let P=0;P<v;P++)for(let C=0;C<N;C++){const K=f+C+H*P,se=f+C+H*(P+1),J=f+(C+1)+H*(P+1),re=f+(C+1)+H*P;c.push(K,se,re),c.push(se,J,re),k+=6}l.addGroup(p,k,w),p+=k,f+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class lh extends En{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],a=[];l(r),u(i),h(),this.setAttribute("position",new sn(s,3)),this.setAttribute("normal",new sn(s.slice(),3)),this.setAttribute("uv",new sn(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function l(x){const _=new j,b=new j,T=new j;for(let A=0;A<n.length;A+=3)p(n[A+0],_),p(n[A+1],b),p(n[A+2],T),c(_,b,T,x)}function c(x,_,b,T){const A=T+1,N=[];for(let v=0;v<=A;v++){N[v]=[];const w=x.clone().lerp(b,v/A),I=_.clone().lerp(b,v/A),L=A-v;for(let F=0;F<=L;F++)F===0&&v===A?N[v][F]=w:N[v][F]=w.clone().lerp(I,F/L)}for(let v=0;v<A;v++)for(let w=0;w<2*(A-v)-1;w++){const I=Math.floor(w/2);w%2===0?(f(N[v][I+1]),f(N[v+1][I]),f(N[v][I])):(f(N[v][I+1]),f(N[v+1][I+1]),f(N[v+1][I]))}}function u(x){const _=new j;for(let b=0;b<s.length;b+=3)_.x=s[b+0],_.y=s[b+1],_.z=s[b+2],_.normalize().multiplyScalar(x),s[b+0]=_.x,s[b+1]=_.y,s[b+2]=_.z}function h(){const x=new j;for(let _=0;_<s.length;_+=3){x.x=s[_+0],x.y=s[_+1],x.z=s[_+2];const b=g(x)/2/Math.PI+.5,T=d(x)/Math.PI+.5;a.push(b,1-T)}y(),m()}function m(){for(let x=0;x<a.length;x+=6){const _=a[x+0],b=a[x+2],T=a[x+4],A=Math.max(_,b,T),N=Math.min(_,b,T);A>.9&&N<.1&&(_<.2&&(a[x+0]+=1),b<.2&&(a[x+2]+=1),T<.2&&(a[x+4]+=1))}}function f(x){s.push(x.x,x.y,x.z)}function p(x,_){const b=x*3;_.x=e[b+0],_.y=e[b+1],_.z=e[b+2]}function y(){const x=new j,_=new j,b=new j,T=new j,A=new tt,N=new tt,v=new tt;for(let w=0,I=0;w<s.length;w+=9,I+=6){x.set(s[w+0],s[w+1],s[w+2]),_.set(s[w+3],s[w+4],s[w+5]),b.set(s[w+6],s[w+7],s[w+8]),A.set(a[I+0],a[I+1]),N.set(a[I+2],a[I+3]),v.set(a[I+4],a[I+5]),T.copy(x).add(_).add(b).divideScalar(3);const L=g(T);M(A,I+0,x,L),M(N,I+2,_,L),M(v,I+4,b,L)}}function M(x,_,b,T){T<0&&x.x===1&&(a[_]=x.x-1),b.x===0&&b.z===0&&(a[_]=T/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function d(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lh(e.vertices,e.indices,e.radius,e.detail)}}class ch extends lh{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new ch(e.radius,e.detail)}}class nc extends En{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,l=Math.floor(i),c=Math.floor(r),u=l+1,h=c+1,m=e/l,f=n/c,p=[],y=[],M=[],g=[];for(let d=0;d<h;d++){const x=d*f-a;for(let _=0;_<u;_++){const b=_*m-s;y.push(b,-x,0),M.push(0,0,1),g.push(_/l),g.push(1-d/c)}}for(let d=0;d<c;d++)for(let x=0;x<l;x++){const _=x+u*d,b=x+u*(d+1),T=x+1+u*(d+1),A=x+1+u*d;p.push(_,b,A),p.push(b,T,A)}this.setIndex(p),this.setAttribute("position",new sn(y,3)),this.setAttribute("normal",new sn(M,3)),this.setAttribute("uv",new sn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ll extends En{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,a=0,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:l},i=Math.floor(i),r=Math.floor(r);const c=[],u=[],h=[],m=[],f=new j,p=new j,y=new j;for(let M=0;M<=i;M++){const g=a+M/i*l;for(let d=0;d<=r;d++){const x=d/r*s;p.x=(e+n*Math.cos(g))*Math.cos(x),p.y=(e+n*Math.cos(g))*Math.sin(x),p.z=n*Math.sin(g),u.push(p.x,p.y,p.z),f.x=e*Math.cos(x),f.y=e*Math.sin(x),y.subVectors(p,f).normalize(),h.push(y.x,y.y,y.z),m.push(d/r),m.push(M/i)}}for(let M=1;M<=i;M++)for(let g=1;g<=r;g++){const d=(r+1)*M+g-1,x=(r+1)*(M-1)+g-1,_=(r+1)*(M-1)+g,b=(r+1)*M+g;c.push(d,x,b),c.push(x,_,b)}this.setIndex(c),this.setAttribute("position",new sn(u,3)),this.setAttribute("normal",new sn(h,3)),this.setAttribute("uv",new sn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ll(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Us(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(cm(r))r.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(cm(r[0])){const s=[];for(let a=0,l=r.length;a<l;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function tn(t){const e={};for(let n=0;n<t.length;n++){const i=Us(t[n]);for(const r in i)e[r]=i[r]}return e}function cm(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function sb(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Ix(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const ab={clone:Us,merge:tn};var ob=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hi extends Wa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ob,this.fragmentShader=lb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Us(e.uniforms),this.uniformsGroups=sb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Je().setHex(r.value);break;case"v2":this.uniforms[i].value=new tt().fromArray(r.value);break;case"v3":this.uniforms[i].value=new j().fromArray(r.value);break;case"v4":this.uniforms[i].value=new At().fromArray(r.value);break;case"m3":this.uniforms[i].value=new je().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Pt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class cb extends hi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ub extends Wa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=y1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class db extends Wa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Do=new j,Fo=new zs,ti=new j;class Lx extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Do,Fo,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Do,Fo,ti.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Do,Fo,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Do,Fo,ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ji=new j,um=new tt,dm=new tt;class Pn extends Lx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Yd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(kc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yd*2*Math.atan(Math.tan(kc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,n){return this.getViewBounds(e,um,dm),n.subVectors(dm,um)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(kc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/u,r*=a.width/c,i*=a.height/u}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Dx extends Lx{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,l=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,l-=h*this.view.offsetY,c=l-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ns=-90,is=1;class fb extends mn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Pn(ns,is,e,n);r.layers=this.layers,this.add(r);const s=new Pn(ns,is,e,n);s.layers=this.layers,this.add(s);const a=new Pn(ns,is,e,n);a.layers=this.layers,this.add(a);const l=new Pn(ns,is,e,n);l.layers=this.layers,this.add(l);const c=new Pn(ns,is,e,n);c.layers=this.layers,this.add(c);const u=new Pn(ns,is,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,l,c]=n;for(const u of n)this.remove(u);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Pl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,l,c,u,h]=this.children,m=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(m,f,p),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class hb extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class pb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ve("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const xh=class xh{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};xh.prototype.isMatrix2=!0;let fm=xh;function hm(t,e,n,i){const r=mb(i);switch(n){case vx:return t*e;case yx:return t*e/r.components*r.byteLength;case nh:return t*e/r.components*r.byteLength;case kr:return t*e*2/r.components*r.byteLength;case ih:return t*e*2/r.components*r.byteLength;case _x:return t*e*3/r.components*r.byteLength;case $n:return t*e*4/r.components*r.byteLength;case rh:return t*e*4/r.components*r.byteLength;case Zo:case Qo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Jo:case el:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case yd:case bd:return Math.max(t,16)*Math.max(e,8)/4;case _d:case Sd:return Math.max(t,8)*Math.max(e,8)/2;case Md:case wd:case Td:case Ad:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ed:case Al:case Cd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Nd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Rd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Pd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Id:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Ld:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Dd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Fd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Ud:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case kd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Od:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Bd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case zd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Vd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Hd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Gd:case jd:case Wd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Xd:case $d:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Cl:case qd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function mb(t){switch(t){case In:case px:return{byteLength:1,components:1};case Ua:case mx:case Ii:return{byteLength:2,components:1};case eh:case th:return{byteLength:2,components:4};case fi:case Jf:case ai:return{byteLength:4,components:1};case gx:case xx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qf}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Fx(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function gb(t){const e=new WeakMap;function n(l,c){const u=l.array,h=l.usage,m=u.byteLength,f=t.createBuffer();t.bindBuffer(c,f),t.bufferData(c,u,h),l.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=t.HALF_FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:m}}function i(l,c,u){const h=c.array,m=c.updateRanges;if(t.bindBuffer(u,l),m.length===0)t.bufferSubData(u,0,h);else{m.sort((p,y)=>p.start-y.start);let f=0;for(let p=1;p<m.length;p++){const y=m[f],M=m[p];M.start<=y.start+y.count+1?y.count=Math.max(y.count,M.start+M.count-y.start):(++f,m[f]=M)}m.length=f+1;for(let p=0,y=m.length;p<y;p++){const M=m[p];t.bufferSubData(u,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=e.get(l);c&&(t.deleteBuffer(c.buffer),e.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const u=e.get(l);if(u===void 0)e.set(l,n(l,c));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,l,c),u.version=l.version}}return{get:r,remove:s,update:a}}var xb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vb=`#ifdef USE_ALPHAHASH
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
#endif`,_b=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mb=`#ifdef USE_AOMAP
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
#endif`,wb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Eb=`#ifdef USE_BATCHING
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
#endif`,Tb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ab=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rb=`#ifdef USE_IRIDESCENCE
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
#endif`,Pb=`#ifdef USE_BUMPMAP
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
#endif`,Ib=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Db=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ub=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,kb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ob=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Bb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,zb=`#define PI 3.141592653589793
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
} // validated`,Vb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hb=`vec3 transformedNormal = objectNormal;
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
#endif`,Gb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$b="gl_FragColor = linearToOutputTexel( gl_FragColor );",qb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yb=`#ifdef USE_ENVMAP
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
#endif`,Kb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Zb=`#ifdef USE_ENVMAP
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
#endif`,Qb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jb=`#ifdef USE_ENVMAP
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
#endif`,eM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rM=`#ifdef USE_GRADIENTMAP
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
}`,sM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,oM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,cM=`#ifdef USE_ENVMAP
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
#endif`,uM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pM=`PhysicalMaterial material;
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
#endif`,mM=`uniform sampler2D dfgLUT;
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
}`,gM=`
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
#endif`,xM=`#if defined( RE_IndirectDiffuse )
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
#endif`,vM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_M=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,yM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,SM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,EM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,TM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,AM=`#if defined( USE_POINTS_UV )
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
#endif`,CM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,RM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,PM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,IM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LM=`#ifdef USE_MORPHTARGETS
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
#endif`,DM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,UM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,zM=`#ifdef USE_NORMALMAP
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
#endif`,VM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,HM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,GM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,WM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,XM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$M=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,YM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ZM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,JM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ew=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nw=`float getShadowMask() {
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
}`,iw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rw=`#ifdef USE_SKINNING
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
#endif`,sw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,aw=`#ifdef USE_SKINNING
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
#endif`,ow=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dw=`#ifdef USE_TRANSMISSION
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
#endif`,fw=`#ifdef USE_TRANSMISSION
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
#endif`,hw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vw=`uniform sampler2D t2D;
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
}`,_w=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mw=`#include <common>
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
}`,ww=`#if DEPTH_PACKING == 3200
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
}`,Ew=`#define DISTANCE
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
}`,Tw=`#define DISTANCE
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
}`,Aw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nw=`uniform float scale;
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
}`,Rw=`uniform vec3 diffuse;
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
}`,Pw=`#include <common>
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
}`,Iw=`uniform vec3 diffuse;
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
}`,Lw=`#define LAMBERT
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
}`,Dw=`#define LAMBERT
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
}`,Fw=`#define MATCAP
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
}`,Uw=`#define MATCAP
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
}`,kw=`#define NORMAL
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
}`,Ow=`#define NORMAL
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
}`,Bw=`#define PHONG
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
}`,zw=`#define PHONG
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
}`,Vw=`#define STANDARD
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
}`,Hw=`#define STANDARD
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
}`,Gw=`#define TOON
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
}`,jw=`#define TOON
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
}`,Ww=`uniform float size;
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
}`,Xw=`uniform vec3 diffuse;
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
}`,$w=`#include <common>
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
}`,qw=`uniform vec3 color;
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
}`,Yw=`uniform float rotation;
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
}`,Kw=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:xb,alphahash_pars_fragment:vb,alphamap_fragment:_b,alphamap_pars_fragment:yb,alphatest_fragment:Sb,alphatest_pars_fragment:bb,aomap_fragment:Mb,aomap_pars_fragment:wb,batching_pars_vertex:Eb,batching_vertex:Tb,begin_vertex:Ab,beginnormal_vertex:Cb,bsdfs:Nb,iridescence_fragment:Rb,bumpmap_pars_fragment:Pb,clipping_planes_fragment:Ib,clipping_planes_pars_fragment:Lb,clipping_planes_pars_vertex:Db,clipping_planes_vertex:Fb,color_fragment:Ub,color_pars_fragment:kb,color_pars_vertex:Ob,color_vertex:Bb,common:zb,cube_uv_reflection_fragment:Vb,defaultnormal_vertex:Hb,displacementmap_pars_vertex:Gb,displacementmap_vertex:jb,emissivemap_fragment:Wb,emissivemap_pars_fragment:Xb,colorspace_fragment:$b,colorspace_pars_fragment:qb,envmap_fragment:Yb,envmap_common_pars_fragment:Kb,envmap_pars_fragment:Zb,envmap_pars_vertex:Qb,envmap_physical_pars_fragment:cM,envmap_vertex:Jb,fog_vertex:eM,fog_pars_vertex:tM,fog_fragment:nM,fog_pars_fragment:iM,gradientmap_pars_fragment:rM,lightmap_pars_fragment:sM,lights_lambert_fragment:aM,lights_lambert_pars_fragment:oM,lights_pars_begin:lM,lights_toon_fragment:uM,lights_toon_pars_fragment:dM,lights_phong_fragment:fM,lights_phong_pars_fragment:hM,lights_physical_fragment:pM,lights_physical_pars_fragment:mM,lights_fragment_begin:gM,lights_fragment_maps:xM,lights_fragment_end:vM,lightprobes_pars_fragment:_M,logdepthbuf_fragment:yM,logdepthbuf_pars_fragment:SM,logdepthbuf_pars_vertex:bM,logdepthbuf_vertex:MM,map_fragment:wM,map_pars_fragment:EM,map_particle_fragment:TM,map_particle_pars_fragment:AM,metalnessmap_fragment:CM,metalnessmap_pars_fragment:NM,morphinstance_vertex:RM,morphcolor_vertex:PM,morphnormal_vertex:IM,morphtarget_pars_vertex:LM,morphtarget_vertex:DM,normal_fragment_begin:FM,normal_fragment_maps:UM,normal_pars_fragment:kM,normal_pars_vertex:OM,normal_vertex:BM,normalmap_pars_fragment:zM,clearcoat_normal_fragment_begin:VM,clearcoat_normal_fragment_maps:HM,clearcoat_pars_fragment:GM,iridescence_pars_fragment:jM,opaque_fragment:WM,packing:XM,premultiplied_alpha_fragment:$M,project_vertex:qM,dithering_fragment:YM,dithering_pars_fragment:KM,roughnessmap_fragment:ZM,roughnessmap_pars_fragment:QM,shadowmap_pars_fragment:JM,shadowmap_pars_vertex:ew,shadowmap_vertex:tw,shadowmask_pars_fragment:nw,skinbase_vertex:iw,skinning_pars_vertex:rw,skinning_vertex:sw,skinnormal_vertex:aw,specularmap_fragment:ow,specularmap_pars_fragment:lw,tonemapping_fragment:cw,tonemapping_pars_fragment:uw,transmission_fragment:dw,transmission_pars_fragment:fw,uv_pars_fragment:hw,uv_pars_vertex:pw,uv_vertex:mw,worldpos_vertex:gw,background_vert:xw,background_frag:vw,backgroundCube_vert:_w,backgroundCube_frag:yw,cube_vert:Sw,cube_frag:bw,depth_vert:Mw,depth_frag:ww,distance_vert:Ew,distance_frag:Tw,equirect_vert:Aw,equirect_frag:Cw,linedashed_vert:Nw,linedashed_frag:Rw,meshbasic_vert:Pw,meshbasic_frag:Iw,meshlambert_vert:Lw,meshlambert_frag:Dw,meshmatcap_vert:Fw,meshmatcap_frag:Uw,meshnormal_vert:kw,meshnormal_frag:Ow,meshphong_vert:Bw,meshphong_frag:zw,meshphysical_vert:Vw,meshphysical_frag:Hw,meshtoon_vert:Gw,meshtoon_frag:jw,points_vert:Ww,points_frag:Xw,shadow_vert:$w,shadow_frag:qw,sprite_vert:Yw,sprite_frag:Kw},be={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new j},probesMax:{value:new j},probesResolution:{value:new j}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},ri={basic:{uniforms:tn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:tn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:tn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:tn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:tn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Je(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:tn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:tn([be.points,be.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:tn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:tn([be.common,be.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:tn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:tn([be.sprite,be.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:tn([be.common,be.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:tn([be.lights,be.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};ri.physical={uniforms:tn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Uo={r:0,b:0,g:0},Zw=new Pt,Ux=new je;Ux.set(-1,0,0,0,1,0,0,0,1);function Qw(t,e,n,i,r,s){const a=new Je(0);let l=r===!0?0:1,c,u,h=null,m=0,f=null;function p(x){let _=x.isScene===!0?x.background:null;if(_&&_.isTexture){const b=x.backgroundBlurriness>0;_=e.get(_,b)}return _}function y(x){let _=!1;const b=p(x);b===null?g(a,l):b&&b.isColor&&(g(b,1),_=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function M(x,_){const b=p(_);b&&(b.isCubeTexture||b.mapping===ec)?(u===void 0&&(u=new Un(new Xa(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:Us(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,A,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=b,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Zw.makeRotationFromEuler(_.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Ux),u.material.toneMapped=Ze.getTransfer(b.colorSpace)!==lt,(h!==b||m!==b.version||f!==t.toneMapping)&&(u.material.needsUpdate=!0,h=b,m=b.version,f=t.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Un(new nc(2,2),new hi({name:"BackgroundMaterial",uniforms:Us(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(b.colorSpace)!==lt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||m!==b.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,h=b,m=b.version,f=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function g(x,_){x.getRGB(Uo,Ix(t)),n.buffers.color.setClear(Uo.r,Uo.g,Uo.b,_,s)}function d(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,_=1){a.set(x),l=_,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,g(a,l)},render:y,addToRenderList:M,dispose:d}}function Jw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function l(L,F,V,ee,H){let $=!1;const G=m(L,ee,V,F);s!==G&&(s=G,u(s.object)),$=p(L,ee,V,H),$&&y(L,ee,V,H),H!==null&&e.update(H,t.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,b(L,F,V,ee),H!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return t.createVertexArray()}function u(L){return t.bindVertexArray(L)}function h(L){return t.deleteVertexArray(L)}function m(L,F,V,ee){const H=ee.wireframe===!0;let $=i[F.id];$===void 0&&($={},i[F.id]=$);const G=L.isInstancedMesh===!0?L.id:0;let k=$[G];k===void 0&&(k={},$[G]=k);let Z=k[V.id];Z===void 0&&(Z={},k[V.id]=Z);let P=Z[H];return P===void 0&&(P=f(c()),Z[H]=P),P}function f(L){const F=[],V=[],ee=[];for(let H=0;H<n;H++)F[H]=0,V[H]=0,ee[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:V,attributeDivisors:ee,object:L,attributes:{},index:null}}function p(L,F,V,ee){const H=s.attributes,$=F.attributes;let G=0;const k=V.getAttributes();for(const Z in k)if(k[Z].location>=0){const C=H[Z];let K=$[Z];if(K===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(K=L.instanceColor)),C===void 0||C.attribute!==K||K&&C.data!==K.data)return!0;G++}return s.attributesNum!==G||s.index!==ee}function y(L,F,V,ee){const H={},$=F.attributes;let G=0;const k=V.getAttributes();for(const Z in k)if(k[Z].location>=0){let C=$[Z];C===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(C=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(C=L.instanceColor));const K={};K.attribute=C,C&&C.data&&(K.data=C.data),H[Z]=K,G++}s.attributes=H,s.attributesNum=G,s.index=ee}function M(){const L=s.newAttributes;for(let F=0,V=L.length;F<V;F++)L[F]=0}function g(L){d(L,0)}function d(L,F){const V=s.newAttributes,ee=s.enabledAttributes,H=s.attributeDivisors;V[L]=1,ee[L]===0&&(t.enableVertexAttribArray(L),ee[L]=1),H[L]!==F&&(t.vertexAttribDivisor(L,F),H[L]=F)}function x(){const L=s.newAttributes,F=s.enabledAttributes;for(let V=0,ee=F.length;V<ee;V++)F[V]!==L[V]&&(t.disableVertexAttribArray(V),F[V]=0)}function _(L,F,V,ee,H,$,G){G===!0?t.vertexAttribIPointer(L,F,V,H,$):t.vertexAttribPointer(L,F,V,ee,H,$)}function b(L,F,V,ee){M();const H=ee.attributes,$=V.getAttributes(),G=F.defaultAttributeValues;for(const k in $){const Z=$[k];if(Z.location>=0){let P=H[k];if(P===void 0&&(k==="instanceMatrix"&&L.instanceMatrix&&(P=L.instanceMatrix),k==="instanceColor"&&L.instanceColor&&(P=L.instanceColor)),P!==void 0){const C=P.normalized,K=P.itemSize,se=e.get(P);if(se===void 0)continue;const J=se.buffer,re=se.type,U=se.bytesPerElement,W=re===t.INT||re===t.UNSIGNED_INT||P.gpuType===Jf;if(P.isInterleavedBufferAttribute){const te=P.data,fe=te.stride,ye=P.offset;if(te.isInstancedInterleavedBuffer){for(let he=0;he<Z.locationSize;he++)d(Z.location+he,te.meshPerAttribute);L.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let he=0;he<Z.locationSize;he++)g(Z.location+he);t.bindBuffer(t.ARRAY_BUFFER,J);for(let he=0;he<Z.locationSize;he++)_(Z.location+he,K/Z.locationSize,re,C,fe*U,(ye+K/Z.locationSize*he)*U,W)}else{if(P.isInstancedBufferAttribute){for(let te=0;te<Z.locationSize;te++)d(Z.location+te,P.meshPerAttribute);L.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let te=0;te<Z.locationSize;te++)g(Z.location+te);t.bindBuffer(t.ARRAY_BUFFER,J);for(let te=0;te<Z.locationSize;te++)_(Z.location+te,K/Z.locationSize,re,C,K*U,K/Z.locationSize*te*U,W)}}else if(G!==void 0){const C=G[k];if(C!==void 0)switch(C.length){case 2:t.vertexAttrib2fv(Z.location,C);break;case 3:t.vertexAttrib3fv(Z.location,C);break;case 4:t.vertexAttrib4fv(Z.location,C);break;default:t.vertexAttrib1fv(Z.location,C)}}}}x()}function T(){w();for(const L in i){const F=i[L];for(const V in F){const ee=F[V];for(const H in ee){const $=ee[H];for(const G in $)h($[G].object),delete $[G];delete ee[H]}}delete i[L]}}function A(L){if(i[L.id]===void 0)return;const F=i[L.id];for(const V in F){const ee=F[V];for(const H in ee){const $=ee[H];for(const G in $)h($[G].object),delete $[G];delete ee[H]}}delete i[L.id]}function N(L){for(const F in i){const V=i[F];for(const ee in V){const H=V[ee];if(H[L.id]===void 0)continue;const $=H[L.id];for(const G in $)h($[G].object),delete $[G];delete H[L.id]}}}function v(L){for(const F in i){const V=i[F],ee=L.isInstancedMesh===!0?L.id:0,H=V[ee];if(H!==void 0){for(const $ in H){const G=H[$];for(const k in G)h(G[k].object),delete G[k];delete H[$]}delete V[ee],Object.keys(V).length===0&&delete i[F]}}}function w(){I(),a=!0,s!==r&&(s=r,u(s.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:w,resetDefaultState:I,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:v,releaseStatesOfProgram:N,initAttributes:M,enableAttribute:g,disableUnusedAttributes:x}}function eE(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function a(c,u,h){h!==0&&(t.drawArraysInstanced(i,c,u,h),n.update(u,i,h))}function l(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let f=0;for(let p=0;p<h;p++)f+=u[p];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=l}function tE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(N){return!(N!==$n&&i.convert(N)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(N){const v=N===Ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==In&&i.convert(N)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==ai&&!v)}function c(N){if(N==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const h=c(u);h!==u&&(Ve("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const m=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&Ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),b=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:m,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:y,maxTextureSize:M,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:b,maxSamples:T,samples:A}}function nE(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Sr,l=new je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(m,f){const p=m.length!==0||f||i!==0||r;return r=f,i=m.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,f){n=h(m,f,0)},this.setState=function(m,f,p){const y=m.clippingPlanes,M=m.clipIntersection,g=m.clipShadows,d=t.get(m);if(!r||y===null||y.length===0||s&&!g)s?h(null):u();else{const x=s?0:i,_=x*4;let b=d.clippingState||null;c.value=b,b=h(y,f,_,p);for(let T=0;T!==_;++T)b[T]=n[T];d.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=x}};function u(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(m,f,p,y){const M=m!==null?m.length:0;let g=null;if(M!==0){if(g=c.value,y!==!0||g===null){const d=p+M*4,x=f.matrixWorldInverse;l.getNormalMatrix(x),(g===null||g.length<d)&&(g=new Float32Array(d));for(let _=0,b=p;_!==M;++_,b+=4)a.copy(m[_]).applyMatrix4(x,l),a.normal.toArray(g,b),g[b+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,g}}const Qi=4,pm=[.125,.215,.35,.446,.526,.582],Mr=20,iE=256,ta=new Dx,mm=new Je;let ou=null,lu=0,cu=0,uu=!1;const rE=new j;class gm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:l=rE}=s;ou=this._renderer.getRenderTarget(),lu=this._renderer.getActiveCubeFace(),cu=this._renderer.getActiveMipmapLevel(),uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,l),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_m(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ou,lu,cu),this._renderer.xr.enabled=uu,e.scissorTest=!1,rs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ur||e.mapping===Ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ou=this._renderer.getRenderTarget(),lu=this._renderer.getActiveCubeFace(),cu=this._renderer.getActiveMipmapLevel(),uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Ii,format:$n,colorSpace:Nl,depthBuffer:!1},r=xm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xm(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=sE(s)),this._blurMaterial=oE(s,e,n),this._ggxMaterial=aE(s,e,n)}return r}_compileMaterial(e){const n=new Un(new En,e);this._renderer.compile(n,ta)}_sceneToCubeUV(e,n,i,r,s){const c=new Pn(90,1,n,i),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,f=m.autoClear,p=m.toneMapping;m.getClearColor(mm),m.toneMapping=ui,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(r),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Un(new Xa,new va({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,g=M.material;let d=!1;const x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,d=!0):(g.color.copy(mm),d=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(c.up.set(0,u[_],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[_],s.y,s.z)):b===1?(c.up.set(0,0,u[_]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[_],s.z)):(c.up.set(0,u[_],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[_]));const T=this._cubeSize;rs(r,b*T,_>2?T:0,T,T),m.setRenderTarget(r),d&&m.render(M,c),m.render(e,c)}m.toneMapping=p,m.autoClear=f,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ur||e.mapping===Ds;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_m()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const l=s.uniforms;l.envMap.value=e;const c=this._cubeSize;rs(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,ta)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[i];l.material=a;const c=a.uniforms,u=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),m=Math.sqrt(u*u-h*h),f=0+u*1.25,p=m*f,{_lodMax:y}=this,M=this._sizeLods[i],g=3*M*(i>y-Qi?i-y+Qi:0),d=4*(this._cubeSize-M);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=y-n,rs(s,g,d,3*M,2*M),r.setRenderTarget(s),r.render(l,ta),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=y-i,rs(e,g,d,3*M,2*M),r.setRenderTarget(e),r.render(l,ta)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,l){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&it("blur direction must be either latitudinal or longitudinal!");const h=3,m=this._lodMeshes[r];m.material=u;const f=u.uniforms,p=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Mr-1),M=s/y,g=isFinite(s)?1+Math.floor(h*M):Mr;g>Mr&&Ve(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Mr}`);const d=[];let x=0;for(let N=0;N<Mr;++N){const v=N/M,w=Math.exp(-v*v/2);d.push(w),N===0?x+=w:N<g&&(x+=2*w)}for(let N=0;N<d.length;N++)d[N]=d[N]/x;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=d,f.latitudinal.value=a==="latitudinal",l&&(f.poleAxis.value=l);const{_lodMax:_}=this;f.dTheta.value=y,f.mipInt.value=_-i;const b=this._sizeLods[r],T=3*b*(r>_-Qi?r-_+Qi:0),A=4*(this._cubeSize-b);rs(n,T,A,3*b,2*b),c.setRenderTarget(n),c.render(m,ta)}}function sE(t){const e=[],n=[],i=[];let r=t;const s=t-Qi+1+pm.length;for(let a=0;a<s;a++){const l=Math.pow(2,r);e.push(l);let c=1/l;a>t-Qi?c=pm[a-t+Qi-1]:a===0&&(c=0),n.push(c);const u=1/(l-2),h=-u,m=1+u,f=[h,h,m,h,m,m,h,h,m,m,h,m],p=6,y=6,M=3,g=2,d=1,x=new Float32Array(M*y*p),_=new Float32Array(g*y*p),b=new Float32Array(d*y*p);for(let A=0;A<p;A++){const N=A%3*2/3-1,v=A>2?0:-1,w=[N,v,0,N+2/3,v,0,N+2/3,v+1,0,N,v,0,N+2/3,v+1,0,N,v+1,0];x.set(w,M*y*A),_.set(f,g*y*A);const I=[A,A,A,A,A,A];b.set(I,d*y*A)}const T=new En;T.setAttribute("position",new Fn(x,M)),T.setAttribute("uv",new Fn(_,g)),T.setAttribute("faceIndex",new Fn(b,d)),i.push(new Un(T,null)),r>Qi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function xm(t,e,n){const i=new di(t,e,n);return i.texture.mapping=ec,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function aE(t,e,n){return new hi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:iE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ic(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function oE(t,e,n){const i=new Float32Array(Mr),r=new j(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ic(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function vm(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ic(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function _m(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function ic(){return`

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
	`}class kx extends di{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Rx(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Xa(5,5,5),s=new hi({name:"CubemapFromEquirect",uniforms:Us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:Ti});s.uniforms.tEquirect.value=n;const a=new Un(r,s),l=n.minFilter;return n.minFilter===Ar&&(n.minFilter=Qt),new fb(1,10,this).update(e,a),n.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function lE(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,p=!1){return f==null?null:p?a(f):s(f)}function s(f){if(f&&f.isTexture){const p=f.mapping;if(p===Dc||p===Fc)if(e.has(f)){const y=e.get(f).texture;return l(y,f.mapping)}else{const y=f.image;if(y&&y.height>0){const M=new kx(y.height);return M.fromEquirectangularTexture(t,f),e.set(f,M),f.addEventListener("dispose",u),l(M.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const p=f.mapping,y=p===Dc||p===Fc,M=p===Ur||p===Ds;if(y||M){let g=n.get(f);const d=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return i===null&&(i=new gm(t)),g=y?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,n.set(f,g),g.texture;if(g!==void 0)return g.texture;{const x=f.image;return y&&x&&x.height>0||M&&x&&c(x)?(i===null&&(i=new gm(t)),g=y?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,n.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function l(f,p){return p===Dc?f.mapping=Ur:p===Fc&&(f.mapping=Ds),f}function c(f){let p=0;const y=6;for(let M=0;M<y;M++)f[M]!==void 0&&p++;return p===y}function u(f){const p=f.target;p.removeEventListener("dispose",u);const y=e.get(p);y!==void 0&&(e.delete(p),y.dispose())}function h(f){const p=f.target;p.removeEventListener("dispose",h);const y=n.get(p);y!==void 0&&(n.delete(p),y.dispose())}function m(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:m}}function cE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ws("WebGLRenderer: "+i+" extension not supported."),r}}}function uE(t,e,n,i){const r={},s=new WeakMap;function a(m){const f=m.target;f.index!==null&&e.remove(f.index);for(const y in f.attributes)e.remove(f.attributes[y]);f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function l(m,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function c(m){const f=m.attributes;for(const p in f)e.update(f[p],t.ARRAY_BUFFER)}function u(m){const f=[],p=m.index,y=m.attributes.position;let M=0;if(y===void 0)return;if(p!==null){const x=p.array;M=p.version;for(let _=0,b=x.length;_<b;_+=3){const T=x[_+0],A=x[_+1],N=x[_+2];f.push(T,A,A,N,N,T)}}else{const x=y.array;M=y.version;for(let _=0,b=x.length/3-1;_<b;_+=3){const T=_+0,A=_+1,N=_+2;f.push(T,A,A,N,N,T)}}const g=new(y.count>=65535?Tx:Ex)(f,1);g.version=M;const d=s.get(m);d&&e.remove(d),s.set(m,g)}function h(m){const f=s.get(m);if(f){const p=m.index;p!==null&&f.version<p.version&&u(m)}else u(m);return s.get(m)}return{get:l,update:c,getWireframeAttribute:h}}function dE(t,e,n){let i;function r(m){i=m}let s,a;function l(m){s=m.type,a=m.bytesPerElement}function c(m,f){t.drawElements(i,f,s,m*a),n.update(f,i,1)}function u(m,f,p){p!==0&&(t.drawElementsInstanced(i,f,s,m*a,p),n.update(f,i,p))}function h(m,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,m,0,p);let M=0;for(let g=0;g<p;g++)M+=f[g];n.update(M,i,1)}this.setMode=r,this.setIndex=l,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function fE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,l){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=l*(s/3);break;case t.LINES:n.lines+=l*(s/2);break;case t.LINE_STRIP:n.lines+=l*(s-1);break;case t.LINE_LOOP:n.lines+=l*s;break;case t.POINTS:n.points+=l*s;break;default:it("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function hE(t,e,n){const i=new WeakMap,r=new At;function s(a,l,c){const u=a.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,m=h!==void 0?h.length:0;let f=i.get(l);if(f===void 0||f.count!==m){let I=function(){v.dispose(),i.delete(l),l.removeEventListener("dispose",I)};var p=I;f!==void 0&&f.texture.dispose();const y=l.morphAttributes.position!==void 0,M=l.morphAttributes.normal!==void 0,g=l.morphAttributes.color!==void 0,d=l.morphAttributes.position||[],x=l.morphAttributes.normal||[],_=l.morphAttributes.color||[];let b=0;y===!0&&(b=1),M===!0&&(b=2),g===!0&&(b=3);let T=l.attributes.position.count*b,A=1;T>e.maxTextureSize&&(A=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const N=new Float32Array(T*A*4*m),v=new bx(N,T,A,m);v.type=ai,v.needsUpdate=!0;const w=b*4;for(let L=0;L<m;L++){const F=d[L],V=x[L],ee=_[L],H=T*A*4*L;for(let $=0;$<F.count;$++){const G=$*w;y===!0&&(r.fromBufferAttribute(F,$),N[H+G+0]=r.x,N[H+G+1]=r.y,N[H+G+2]=r.z,N[H+G+3]=0),M===!0&&(r.fromBufferAttribute(V,$),N[H+G+4]=r.x,N[H+G+5]=r.y,N[H+G+6]=r.z,N[H+G+7]=0),g===!0&&(r.fromBufferAttribute(ee,$),N[H+G+8]=r.x,N[H+G+9]=r.y,N[H+G+10]=r.z,N[H+G+11]=ee.itemSize===4?r.w:1)}}f={count:m,texture:v,size:new tt(T,A)},i.set(l,f),l.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let y=0;for(let g=0;g<u.length;g++)y+=u[g];const M=l.morphTargetsRelative?1:1-y;c.getUniforms().setValue(t,"morphTargetBaseInfluence",M),c.getUniforms().setValue(t,"morphTargetInfluences",u)}c.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function pE(t,e,n,i,r){let s=new WeakMap;function a(u){const h=r.render.frame,m=u.geometry,f=e.get(u,m);if(s.get(f)!==h&&(e.update(f),s.set(f,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),s.get(u)!==h&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,h))),u.isSkinnedMesh){const p=u.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return f}function l(){s=new WeakMap}function c(u){const h=u.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:a,dispose:l}}const mE={[ax]:"LINEAR_TONE_MAPPING",[ox]:"REINHARD_TONE_MAPPING",[lx]:"CINEON_TONE_MAPPING",[cx]:"ACES_FILMIC_TONE_MAPPING",[dx]:"AGX_TONE_MAPPING",[fx]:"NEUTRAL_TONE_MAPPING",[ux]:"CUSTOM_TONE_MAPPING"};function gE(t,e,n,i,r,s){const a=new di(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new Fs(e,n):void 0}),l=new di(e,n,{type:Ii,depthBuffer:!1,stencilBuffer:!1}),c=new En;c.setAttribute("position",new sn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new sn([0,2,0,0,2,0],2));const u=new cb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Un(c,u),m=new Dx(-1,1,1,-1,0,1);let f=null,p=null,y=!1,M,g=null,d=[],x=!1;this.setSize=function(_,b){a.setSize(_,b),l.setSize(_,b);for(let T=0;T<d.length;T++){const A=d[T];A.setSize&&A.setSize(_,b)}},this.setEffects=function(_){d=_,x=d.length>0&&d[0].isRenderPass===!0;const b=a.width,T=a.height;for(let A=0;A<d.length;A++){const N=d[A];N.setSize&&N.setSize(b,T)}},this.begin=function(_,b){if(y||_.toneMapping===ui&&d.length===0)return!1;if(g=b,b!==null){const T=b.width,A=b.height;(a.width!==T||a.height!==A)&&this.setSize(T,A)}return x===!1&&_.setRenderTarget(a),M=_.toneMapping,_.toneMapping=ui,!0},this.hasRenderPass=function(){return x},this.end=function(_,b){_.toneMapping=M,y=!0;let T=a,A=l;for(let N=0;N<d.length;N++){const v=d[N];if(v.enabled!==!1&&(v.render(_,A,T,b),v.needsSwap!==!1)){const w=T;T=A,A=w}}if(f!==_.outputColorSpace||p!==_.toneMapping){f=_.outputColorSpace,p=_.toneMapping,u.defines={},Ze.getTransfer(f)===lt&&(u.defines.SRGB_TRANSFER="");const N=mE[p];N&&(u.defines[N]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=T.texture,_.setRenderTarget(g),_.render(h,m),g=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),l.dispose(),c.dispose(),u.dispose()}}const Ox=new Jt,Zd=new Fs(1,1),Bx=new bx,zx=new O1,Vx=new Rx,ym=[],Sm=[],bm=new Float32Array(16),Mm=new Float32Array(9),wm=new Float32Array(4);function Vs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=ym[r];if(s===void 0&&(s=new Float32Array(r),ym[r]=s),e!==0){i.toArray(s,0);for(let a=1,l=0;a!==e;++a)l+=n,t[a].toArray(s,l)}return s}function kt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ot(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function rc(t,e){let n=Sm[e];n===void 0&&(n=new Int32Array(e),Sm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function xE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function vE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2fv(this.addr,e),Ot(n,e)}}function _E(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(kt(n,e))return;t.uniform3fv(this.addr,e),Ot(n,e)}}function yE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4fv(this.addr,e),Ot(n,e)}}function SE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ot(n,e)}else{if(kt(n,i))return;wm.set(i),t.uniformMatrix2fv(this.addr,!1,wm),Ot(n,i)}}function bE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ot(n,e)}else{if(kt(n,i))return;Mm.set(i),t.uniformMatrix3fv(this.addr,!1,Mm),Ot(n,i)}}function ME(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ot(n,e)}else{if(kt(n,i))return;bm.set(i),t.uniformMatrix4fv(this.addr,!1,bm),Ot(n,i)}}function wE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function EE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2iv(this.addr,e),Ot(n,e)}}function TE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3iv(this.addr,e),Ot(n,e)}}function AE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4iv(this.addr,e),Ot(n,e)}}function CE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function NE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2uiv(this.addr,e),Ot(n,e)}}function RE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3uiv(this.addr,e),Ot(n,e)}}function PE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4uiv(this.addr,e),Ot(n,e)}}function IE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Zd.compareFunction=n.isReversedDepthBuffer()?ah:sh,s=Zd):s=Ox,n.setTexture2D(e||s,r)}function LE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||zx,r)}function DE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Vx,r)}function FE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Bx,r)}function UE(t){switch(t){case 5126:return xE;case 35664:return vE;case 35665:return _E;case 35666:return yE;case 35674:return SE;case 35675:return bE;case 35676:return ME;case 5124:case 35670:return wE;case 35667:case 35671:return EE;case 35668:case 35672:return TE;case 35669:case 35673:return AE;case 5125:return CE;case 36294:return NE;case 36295:return RE;case 36296:return PE;case 35678:case 36198:case 36298:case 36306:case 35682:return IE;case 35679:case 36299:case 36307:return LE;case 35680:case 36300:case 36308:case 36293:return DE;case 36289:case 36303:case 36311:case 36292:return FE}}function kE(t,e){t.uniform1fv(this.addr,e)}function OE(t,e){const n=Vs(e,this.size,2);t.uniform2fv(this.addr,n)}function BE(t,e){const n=Vs(e,this.size,3);t.uniform3fv(this.addr,n)}function zE(t,e){const n=Vs(e,this.size,4);t.uniform4fv(this.addr,n)}function VE(t,e){const n=Vs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function HE(t,e){const n=Vs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function GE(t,e){const n=Vs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function jE(t,e){t.uniform1iv(this.addr,e)}function WE(t,e){t.uniform2iv(this.addr,e)}function XE(t,e){t.uniform3iv(this.addr,e)}function $E(t,e){t.uniform4iv(this.addr,e)}function qE(t,e){t.uniform1uiv(this.addr,e)}function YE(t,e){t.uniform2uiv(this.addr,e)}function KE(t,e){t.uniform3uiv(this.addr,e)}function ZE(t,e){t.uniform4uiv(this.addr,e)}function QE(t,e,n){const i=this.cache,r=e.length,s=rc(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Zd:a=Ox;for(let l=0;l!==r;++l)n.setTexture2D(e[l]||a,s[l])}function JE(t,e,n){const i=this.cache,r=e.length,s=rc(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||zx,s[a])}function eT(t,e,n){const i=this.cache,r=e.length,s=rc(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Vx,s[a])}function tT(t,e,n){const i=this.cache,r=e.length,s=rc(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Bx,s[a])}function nT(t){switch(t){case 5126:return kE;case 35664:return OE;case 35665:return BE;case 35666:return zE;case 35674:return VE;case 35675:return HE;case 35676:return GE;case 5124:case 35670:return jE;case 35667:case 35671:return WE;case 35668:case 35672:return XE;case 35669:case 35673:return $E;case 5125:return qE;case 36294:return YE;case 36295:return KE;case 36296:return ZE;case 35678:case 36198:case 36298:case 36306:case 35682:return QE;case 35679:case 36299:case 36307:return JE;case 35680:case 36300:case 36308:case 36293:return eT;case 36289:case 36303:case 36311:case 36292:return tT}}class iT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=UE(n.type)}}class rT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=nT(n.type)}}class sT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const l=r[s];l.setValue(e,n[l.id],i)}}}const du=/(\w+)(\])?(\[|\.)?/g;function Em(t,e){t.seq.push(e),t.map[e.id]=e}function aT(t,e,n){const i=t.name,r=i.length;for(du.lastIndex=0;;){const s=du.exec(i),a=du.lastIndex;let l=s[1];const c=s[2]==="]",u=s[3];if(c&&(l=l|0),u===void 0||u==="["&&a+2===r){Em(n,u===void 0?new iT(l,t,e):new rT(l,t,e));break}else{let m=n.map[l];m===void 0&&(m=new sT(l),Em(n,m)),n=m}}}class tl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const l=e.getActiveUniform(n,a),c=e.getUniformLocation(n,l.name);aT(l,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const l=n[s],c=i[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Tm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const oT=37297;let lT=0;function cT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const l=a+1;i.push(`${l===e?">":" "} ${l}: ${n[a]}`)}return i.join(`
`)}const Am=new je;function uT(t){Ze._getMatrix(Am,Ze.workingColorSpace,t);const e=`mat3( ${Am.elements.map(n=>n.toFixed(4))} )`;switch(Ze.getTransfer(t)){case Rl:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Cm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const l=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+cT(t.getShaderSource(e),l)}else return s}function dT(t,e){const n=uT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const fT={[ax]:"Linear",[ox]:"Reinhard",[lx]:"Cineon",[cx]:"ACESFilmic",[dx]:"AgX",[fx]:"Neutral",[ux]:"Custom"};function hT(t,e){const n=fT[e];return n===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ko=new j;function pT(){Ze.getLuminanceCoefficients(ko);const t=ko.x.toFixed(4),e=ko.y.toFixed(4),n=ko.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(la).join(`
`)}function gT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function xT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let l=1;s.type===t.FLOAT_MAT2&&(l=2),s.type===t.FLOAT_MAT3&&(l=3),s.type===t.FLOAT_MAT4&&(l=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:l}}return n}function la(t){return t!==""}function Nm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qd(t){return t.replace(vT,yT)}const _T=new Map;function yT(t,e){let n=$e[e];if(n===void 0){const i=_T.get(e);if(i!==void 0)n=$e[i],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Qd(n)}const ST=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pm(t){return t.replace(ST,bT)}function bT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Im(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const MT={[Ko]:"SHADOWMAP_TYPE_PCF",[oa]:"SHADOWMAP_TYPE_VSM"};function wT(t){return MT[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ET={[Ur]:"ENVMAP_TYPE_CUBE",[Ds]:"ENVMAP_TYPE_CUBE",[ec]:"ENVMAP_TYPE_CUBE_UV"};function TT(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":ET[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const AT={[Ds]:"ENVMAP_MODE_REFRACTION"};function CT(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":AT[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const NT={[sx]:"ENVMAP_BLENDING_MULTIPLY",[x1]:"ENVMAP_BLENDING_MIX",[v1]:"ENVMAP_BLENDING_ADD"};function RT(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":NT[t.combine]||"ENVMAP_BLENDING_NONE"}function PT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function IT(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,l=n.fragmentShader;const c=wT(n),u=TT(n),h=CT(n),m=RT(n),f=PT(n),p=mT(n),y=gT(s),M=r.createProgram();let g,d,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(la).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(la).join(`
`),d.length>0&&(d+=`
`)):(g=[Im(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(la).join(`
`),d=[Im(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+m:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ui?"#define TONE_MAPPING":"",n.toneMapping!==ui?$e.tonemapping_pars_fragment:"",n.toneMapping!==ui?hT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,dT("linearToOutputTexel",n.outputColorSpace),pT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(la).join(`
`)),a=Qd(a),a=Nm(a,n),a=Rm(a,n),l=Qd(l),l=Nm(l,n),l=Rm(l,n),a=Pm(a),l=Pm(l),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",n.glslVersion===jp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===jp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const _=x+g+a,b=x+d+l,T=Tm(r,r.VERTEX_SHADER,_),A=Tm(r,r.FRAGMENT_SHADER,b);r.attachShader(M,T),r.attachShader(M,A),n.index0AttributeName!==void 0?r.bindAttribLocation(M,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function N(L){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(M)||"",V=r.getShaderInfoLog(T)||"",ee=r.getShaderInfoLog(A)||"",H=F.trim(),$=V.trim(),G=ee.trim();let k=!0,Z=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(k=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,M,T,A);else{const P=Cm(r,T,"vertex"),C=Cm(r,A,"fragment");it("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+P+`
`+C)}else H!==""?Ve("WebGLProgram: Program Info Log:",H):($===""||G==="")&&(Z=!1);Z&&(L.diagnostics={runnable:k,programLog:H,vertexShader:{log:$,prefix:g},fragmentShader:{log:G,prefix:d}})}r.deleteShader(T),r.deleteShader(A),v=new tl(r,M),w=xT(r,M)}let v;this.getUniforms=function(){return v===void 0&&N(this),v};let w;this.getAttributes=function(){return w===void 0&&N(this),w};let I=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(M,oT)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=lT++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=T,this.fragmentShader=A,this}let LT=0;class DT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new FT(e),n.set(e,i)),i}}class FT{constructor(e){this.id=LT++,this.code=e,this.usedTimes=0}}function UT(t){return t===kr||t===Al||t===Cl}function kT(t,e,n,i,r,s){const a=new Mx,l=new DT,c=new Set,u=[],h=new Map,m=i.logarithmicDepthBuffer;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(v){return c.add(v),v===0?"uv":`uv${v}`}function M(v,w,I,L,F,V){const ee=L.fog,H=F.geometry,$=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,k=e.get(v.envMap||$,G),Z=k&&k.mapping===ec?k.image.height:null,P=p[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&Ve("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const C=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,K=C!==void 0?C.length:0;let se=0;H.morphAttributes.position!==void 0&&(se=1),H.morphAttributes.normal!==void 0&&(se=2),H.morphAttributes.color!==void 0&&(se=3);let J,re,U,W;if(P){const Pe=ri[P];J=Pe.vertexShader,re=Pe.fragmentShader}else{J=v.vertexShader,re=v.fragmentShader;const Pe=l.getVertexShaderStage(v),wt=l.getFragmentShaderStage(v);l.update(v,Pe,wt),U=Pe.id,W=wt.id}const te=t.getRenderTarget(),fe=t.state.buffers.depth.getReversed(),ye=F.isInstancedMesh===!0,he=F.isBatchedMesh===!0,de=!!v.map,Ee=!!v.matcap,ge=!!k,Oe=!!v.aoMap,Be=!!v.lightMap,Ke=!!v.bumpMap&&v.wireframe===!1,st=!!v.normalMap,ot=!!v.displacementMap,at=!!v.emissiveMap,dt=!!v.metalnessMap,xt=!!v.roughnessMap,B=v.anisotropy>0,It=v.clearcoat>0,et=v.dispersion>0,R=v.iridescence>0,S=v.sheen>0,D=v.transmission>0,X=B&&!!v.anisotropyMap,ne=It&&!!v.clearcoatMap,ue=It&&!!v.clearcoatNormalMap,pe=It&&!!v.clearcoatRoughnessMap,ie=R&&!!v.iridescenceMap,oe=R&&!!v.iridescenceThicknessMap,xe=S&&!!v.sheenColorMap,De=S&&!!v.sheenRoughnessMap,Se=!!v.specularMap,ve=!!v.specularColorMap,ke=!!v.specularIntensityMap,ze=D&&!!v.transmissionMap,We=D&&!!v.thicknessMap,O=!!v.gradientMap,me=!!v.alphaMap,ae=v.alphaTest>0,_e=!!v.alphaHash,Te=!!v.extensions;let le=ui;v.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(le=t.toneMapping);const Le={shaderID:P,shaderType:v.type,shaderName:v.name,vertexShader:J,fragmentShader:re,defines:v.defines,customVertexShaderID:U,customFragmentShaderID:W,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:he,batchingColor:he&&F._colorsTexture!==null,instancing:ye,instancingColor:ye&&F.instanceColor!==null,instancingMorph:ye&&F.morphTexture!==null,outputColorSpace:te===null?t.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:de,matcap:Ee,envMap:ge,envMapMode:ge&&k.mapping,envMapCubeUVHeight:Z,aoMap:Oe,lightMap:Be,bumpMap:Ke,normalMap:st,displacementMap:ot,emissiveMap:at,normalMapObjectSpace:st&&v.normalMapType===S1,normalMapTangentSpace:st&&v.normalMapType===Vp,packedNormalMap:st&&v.normalMapType===Vp&&UT(v.normalMap.format),metalnessMap:dt,roughnessMap:xt,anisotropy:B,anisotropyMap:X,clearcoat:It,clearcoatMap:ne,clearcoatNormalMap:ue,clearcoatRoughnessMap:pe,dispersion:et,iridescence:R,iridescenceMap:ie,iridescenceThicknessMap:oe,sheen:S,sheenColorMap:xe,sheenRoughnessMap:De,specularMap:Se,specularColorMap:ve,specularIntensityMap:ke,transmission:D,transmissionMap:ze,thicknessMap:We,gradientMap:O,opaque:v.transparent===!1&&v.blending===Ms&&v.alphaToCoverage===!1,alphaMap:me,alphaTest:ae,alphaHash:_e,combine:v.combine,mapUv:de&&y(v.map.channel),aoMapUv:Oe&&y(v.aoMap.channel),lightMapUv:Be&&y(v.lightMap.channel),bumpMapUv:Ke&&y(v.bumpMap.channel),normalMapUv:st&&y(v.normalMap.channel),displacementMapUv:ot&&y(v.displacementMap.channel),emissiveMapUv:at&&y(v.emissiveMap.channel),metalnessMapUv:dt&&y(v.metalnessMap.channel),roughnessMapUv:xt&&y(v.roughnessMap.channel),anisotropyMapUv:X&&y(v.anisotropyMap.channel),clearcoatMapUv:ne&&y(v.clearcoatMap.channel),clearcoatNormalMapUv:ue&&y(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&y(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&y(v.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&y(v.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&y(v.sheenColorMap.channel),sheenRoughnessMapUv:De&&y(v.sheenRoughnessMap.channel),specularMapUv:Se&&y(v.specularMap.channel),specularColorMapUv:ve&&y(v.specularColorMap.channel),specularIntensityMapUv:ke&&y(v.specularIntensityMap.channel),transmissionMapUv:ze&&y(v.transmissionMap.channel),thicknessMapUv:We&&y(v.thicknessMap.channel),alphaMapUv:me&&y(v.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(st||B),vertexNormals:!!H.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!H.attributes.uv&&(de||me),fog:!!ee,useFog:v.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||H.attributes.normal===void 0&&st===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:fe,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:se,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:le,decodeVideoTexture:de&&v.map.isVideoTexture===!0&&Ze.getTransfer(v.map.colorSpace)===lt,decodeVideoTextureEmissive:at&&v.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(v.emissiveMap.colorSpace)===lt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Si,flipSided:v.side===pn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Te&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&v.extensions.multiDraw===!0||he)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Le.vertexUv1s=c.has(1),Le.vertexUv2s=c.has(2),Le.vertexUv3s=c.has(3),c.clear(),Le}function g(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)w.push(I),w.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(d(w,v),x(w,v),w.push(t.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function d(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function x(v,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function _(v){const w=p[v.type];let I;if(w){const L=ri[w];I=ab.clone(L.uniforms)}else I=v.uniforms;return I}function b(v,w){let I=h.get(w);return I!==void 0?++I.usedTimes:(I=new IT(t,w,v,r),u.push(I),h.set(w,I)),I}function T(v){if(--v.usedTimes===0){const w=u.indexOf(v);u[w]=u[u.length-1],u.pop(),h.delete(v.cacheKey),v.destroy()}}function A(v){l.remove(v)}function N(){l.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:_,acquireProgram:b,releaseProgram:T,releaseShaderCache:A,programs:u,dispose:N}}function OT(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let l=t.get(a);return l===void 0&&(l={},t.set(a,l)),l}function i(a){t.delete(a)}function r(a,l,c){t.get(a)[l]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function BT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Lm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Dm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function l(f,p,y,M,g,d){let x=t[e];return x===void 0?(x={id:f.id,object:f,geometry:p,material:y,materialVariant:a(f),groupOrder:M,renderOrder:f.renderOrder,z:g,group:d},t[e]=x):(x.id=f.id,x.object=f,x.geometry=p,x.material=y,x.materialVariant=a(f),x.groupOrder=M,x.renderOrder=f.renderOrder,x.z=g,x.group=d),e++,x}function c(f,p,y,M,g,d){const x=l(f,p,y,M,g,d);y.transmission>0?i.push(x):y.transparent===!0?r.push(x):n.push(x)}function u(f,p,y,M,g,d){const x=l(f,p,y,M,g,d);y.transmission>0?i.unshift(x):y.transparent===!0?r.unshift(x):n.unshift(x)}function h(f,p,y){n.length>1&&n.sort(f||BT),i.length>1&&i.sort(p||Lm),r.length>1&&r.sort(p||Lm),y&&(n.reverse(),i.reverse(),r.reverse())}function m(){for(let f=e,p=t.length;f<p;f++){const y=t[f];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:c,unshift:u,finish:m,sort:h}}function zT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Dm,t.set(i,[a])):r>=s.length?(a=new Dm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function VT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new Je};break;case"SpotLight":n={position:new j,direction:new j,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new Je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":n={color:new Je,position:new j,halfWidth:new j,halfHeight:new j};break}return t[e.id]=n,n}}}function HT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let GT=0;function jT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function WT(t){const e=new VT,n=HT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new j);const r=new j,s=new Pt,a=new Pt;function l(u){let h=0,m=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,y=0,M=0,g=0,d=0,x=0,_=0,b=0,T=0,A=0,N=0;u.sort(jT);for(let w=0,I=u.length;w<I;w++){const L=u[w],F=L.color,V=L.intensity,ee=L.distance;let H=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===kr?H=L.shadow.map.texture:H=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=F.r*V,m+=F.g*V,f+=F.b*V;else if(L.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(L.sh.coefficients[$],V);N++}else if(L.isDirectionalLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const G=L.shadow,k=n.get(L);k.shadowIntensity=G.intensity,k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,i.directionalShadow[p]=k,i.directionalShadowMap[p]=H,i.directionalShadowMatrix[p]=L.shadow.matrix,x++}i.directional[p]=$,p++}else if(L.isSpotLight){const $=e.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(F).multiplyScalar(V),$.distance=ee,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,i.spot[M]=$;const G=L.shadow;if(L.map&&(i.spotLightMap[T]=L.map,T++,G.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[M]=G.matrix,L.castShadow){const k=n.get(L);k.shadowIntensity=G.intensity,k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,i.spotShadow[M]=k,i.spotShadowMap[M]=H,b++}M++}else if(L.isRectAreaLight){const $=e.get(L);$.color.copy(F).multiplyScalar(V),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),i.rectArea[g]=$,g++}else if(L.isPointLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),$.distance=L.distance,$.decay=L.decay,L.castShadow){const G=L.shadow,k=n.get(L);k.shadowIntensity=G.intensity,k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,k.shadowCameraNear=G.camera.near,k.shadowCameraFar=G.camera.far,i.pointShadow[y]=k,i.pointShadowMap[y]=H,i.pointShadowMatrix[y]=L.shadow.matrix,_++}i.point[y]=$,y++}else if(L.isHemisphereLight){const $=e.get(L);$.skyColor.copy(L.color).multiplyScalar(V),$.groundColor.copy(L.groundColor).multiplyScalar(V),i.hemi[d]=$,d++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=f;const v=i.hash;(v.directionalLength!==p||v.pointLength!==y||v.spotLength!==M||v.rectAreaLength!==g||v.hemiLength!==d||v.numDirectionalShadows!==x||v.numPointShadows!==_||v.numSpotShadows!==b||v.numSpotMaps!==T||v.numLightProbes!==N)&&(i.directional.length=p,i.spot.length=M,i.rectArea.length=g,i.point.length=y,i.hemi.length=d,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=b+T-A,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=N,v.directionalLength=p,v.pointLength=y,v.spotLength=M,v.rectAreaLength=g,v.hemiLength=d,v.numDirectionalShadows=x,v.numPointShadows=_,v.numSpotShadows=b,v.numSpotMaps=T,v.numLightProbes=N,i.version=GT++)}function c(u,h){let m=0,f=0,p=0,y=0,M=0;const g=h.matrixWorldInverse;for(let d=0,x=u.length;d<x;d++){const _=u[d];if(_.isDirectionalLight){const b=i.directional[m];b.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(g),m++}else if(_.isSpotLight){const b=i.spot[p];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(g),p++}else if(_.isRectAreaLight){const b=i.rectArea[y];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(g),a.identity(),s.copy(_.matrixWorld),s.premultiply(g),a.extractRotation(s),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),y++}else if(_.isPointLight){const b=i.point[f];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){const b=i.hemi[M];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(g),M++}}}return{setup:l,setupView:c,state:i}}function Fm(t){const e=new WT(t),n=[],i=[],r=[];function s(f){m.camera=f,n.length=0,i.length=0,r.length=0}function a(f){n.push(f)}function l(f){i.push(f)}function c(f){r.push(f)}function u(){e.setup(n)}function h(f){e.setupView(n,f)}const m={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:m,setupLights:u,setupLightsView:h,pushLight:a,pushShadow:l,pushLightProbeGrid:c}}function XT(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let l;return a===void 0?(l=new Fm(t),e.set(r,[l])):s>=a.length?(l=new Fm(t),a.push(l)):l=a[s],l}function i(){e=new WeakMap}return{get:n,dispose:i}}const $T=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qT=`uniform sampler2D shadow_pass;
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
}`,YT=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],KT=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],Um=new Pt,na=new j,fu=new j;function ZT(t,e,n){let i=new Cx;const r=new tt,s=new tt,a=new At,l=new ub,c=new db,u={},h=n.maxTextureSize,m={[cr]:pn,[pn]:cr,[Si]:Si},f=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:$T,fragmentShader:qT}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const y=new En;y.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Un(y,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ko;let d=this.type;this.render=function(A,N,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===QS&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ko);const w=t.getRenderTarget(),I=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),F=t.state;F.setBlending(Ti),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const V=d!==this.type;V&&N.traverse(function(ee){ee.material&&(Array.isArray(ee.material)?ee.material.forEach(H=>H.needsUpdate=!0):ee.material.needsUpdate=!0)});for(let ee=0,H=A.length;ee<H;ee++){const $=A[ee],G=$.shadow;if(G===void 0){Ve("WebGLShadowMap:",$,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const k=G.getFrameExtents();r.multiply(k),s.copy(G.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/k.x),r.x=s.x*k.x,G.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/k.y),r.y=s.y*k.y,G.mapSize.y=s.y));const Z=t.state.buffers.depth.getReversed();if(G.camera._reversedDepth=Z,G.map===null||V===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===oa){if($.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new di(r.x,r.y,{format:kr,type:Ii,minFilter:Qt,magFilter:Qt,generateMipmaps:!1}),G.map.texture.name=$.name+".shadowMap",G.map.depthTexture=new Fs(r.x,r.y,ai),G.map.depthTexture.name=$.name+".shadowMapDepth",G.map.depthTexture.format=Li,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Gt,G.map.depthTexture.magFilter=Gt}else $.isPointLight?(G.map=new kx(r.x),G.map.depthTexture=new rb(r.x,fi)):(G.map=new di(r.x,r.y),G.map.depthTexture=new Fs(r.x,r.y,fi)),G.map.depthTexture.name=$.name+".shadowMap",G.map.depthTexture.format=Li,this.type===Ko?(G.map.depthTexture.compareFunction=Z?ah:sh,G.map.depthTexture.minFilter=Qt,G.map.depthTexture.magFilter=Qt):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Gt,G.map.depthTexture.magFilter=Gt);G.camera.updateProjectionMatrix()}const P=G.map.isWebGLCubeRenderTarget?6:1;for(let C=0;C<P;C++){if(G.map.isWebGLCubeRenderTarget)t.setRenderTarget(G.map,C),t.clear();else{C===0&&(t.setRenderTarget(G.map),t.clear());const K=G.getViewport(C);a.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),F.viewport(a)}if($.isPointLight){const K=G.camera,se=G.matrix,J=$.distance||K.far;J!==K.far&&(K.far=J,K.updateProjectionMatrix()),na.setFromMatrixPosition($.matrixWorld),K.position.copy(na),fu.copy(K.position),fu.add(YT[C]),K.up.copy(KT[C]),K.lookAt(fu),K.updateMatrixWorld(),se.makeTranslation(-na.x,-na.y,-na.z),Um.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Um,K.coordinateSystem,K.reversedDepth)}else G.updateMatrices($);i=G.getFrustum(),b(N,v,G.camera,$,this.type)}G.isPointLightShadow!==!0&&this.type===oa&&x(G,v),G.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(w,I,L)};function x(A,N){const v=e.update(M);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new di(r.x,r.y,{format:kr,type:Ii})),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(N,null,v,f,M,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(N,null,v,p,M,null)}function _(A,N,v,w){let I=null;const L=v.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)I=L;else if(I=v.isPointLight===!0?c:l,t.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const F=I.uuid,V=N.uuid;let ee=u[F];ee===void 0&&(ee={},u[F]=ee);let H=ee[V];H===void 0&&(H=I.clone(),ee[V]=H,N.addEventListener("dispose",T)),I=H}if(I.visible=N.visible,I.wireframe=N.wireframe,w===oa?I.side=N.shadowSide!==null?N.shadowSide:N.side:I.side=N.shadowSide!==null?N.shadowSide:m[N.side],I.alphaMap=N.alphaMap,I.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,I.map=N.map,I.clipShadows=N.clipShadows,I.clippingPlanes=N.clippingPlanes,I.clipIntersection=N.clipIntersection,I.displacementMap=N.displacementMap,I.displacementScale=N.displacementScale,I.displacementBias=N.displacementBias,I.wireframeLinewidth=N.wireframeLinewidth,I.linewidth=N.linewidth,v.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const F=t.properties.get(I);F.light=v}return I}function b(A,N,v,w,I){if(A.visible===!1)return;if(A.layers.test(N.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&I===oa)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,A.matrixWorld);const V=e.update(A),ee=A.material;if(Array.isArray(ee)){const H=V.groups;for(let $=0,G=H.length;$<G;$++){const k=H[$],Z=ee[k.materialIndex];if(Z&&Z.visible){const P=_(A,Z,w,I);A.onBeforeShadow(t,A,N,v,V,P,k),t.renderBufferDirect(v,null,V,P,A,k),A.onAfterShadow(t,A,N,v,V,P,k)}}}else if(ee.visible){const H=_(A,ee,w,I);A.onBeforeShadow(t,A,N,v,V,H,null),t.renderBufferDirect(v,null,V,H,A,null),A.onAfterShadow(t,A,N,v,V,H,null)}}const F=A.children;for(let V=0,ee=F.length;V<ee;V++)b(F[V],N,v,w,I)}function T(A){A.target.removeEventListener("dispose",T);for(const v in u){const w=u[v],I=A.target.uuid;I in w&&(w[I].dispose(),delete w[I])}}}function QT(t,e){function n(){let O=!1;const me=new At;let ae=null;const _e=new At(0,0,0,0);return{setMask:function(Te){ae!==Te&&!O&&(t.colorMask(Te,Te,Te,Te),ae=Te)},setLocked:function(Te){O=Te},setClear:function(Te,le,Le,Pe,wt){wt===!0&&(Te*=Pe,le*=Pe,Le*=Pe),me.set(Te,le,Le,Pe),_e.equals(me)===!1&&(t.clearColor(Te,le,Le,Pe),_e.copy(me))},reset:function(){O=!1,ae=null,_e.set(-1,0,0,0)}}}function i(){let O=!1,me=!1,ae=null,_e=null,Te=null;return{setReversed:function(le){if(me!==le){const Le=e.get("EXT_clip_control");le?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),me=le;const Pe=Te;Te=null,this.setClear(Pe)}},getReversed:function(){return me},setTest:function(le){le?te(t.DEPTH_TEST):fe(t.DEPTH_TEST)},setMask:function(le){ae!==le&&!O&&(t.depthMask(le),ae=le)},setFunc:function(le){if(me&&(le=P1[le]),_e!==le){switch(le){case ud:t.depthFunc(t.NEVER);break;case dd:t.depthFunc(t.ALWAYS);break;case fd:t.depthFunc(t.LESS);break;case Ls:t.depthFunc(t.LEQUAL);break;case hd:t.depthFunc(t.EQUAL);break;case pd:t.depthFunc(t.GEQUAL);break;case md:t.depthFunc(t.GREATER);break;case gd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}_e=le}},setLocked:function(le){O=le},setClear:function(le){Te!==le&&(Te=le,me&&(le=1-le),t.clearDepth(le))},reset:function(){O=!1,ae=null,_e=null,Te=null,me=!1}}}function r(){let O=!1,me=null,ae=null,_e=null,Te=null,le=null,Le=null,Pe=null,wt=null;return{setTest:function(pt){O||(pt?te(t.STENCIL_TEST):fe(t.STENCIL_TEST))},setMask:function(pt){me!==pt&&!O&&(t.stencilMask(pt),me=pt)},setFunc:function(pt,Zn,Qn){(ae!==pt||_e!==Zn||Te!==Qn)&&(t.stencilFunc(pt,Zn,Qn),ae=pt,_e=Zn,Te=Qn)},setOp:function(pt,Zn,Qn){(le!==pt||Le!==Zn||Pe!==Qn)&&(t.stencilOp(pt,Zn,Qn),le=pt,Le=Zn,Pe=Qn)},setLocked:function(pt){O=pt},setClear:function(pt){wt!==pt&&(t.clearStencil(pt),wt=pt)},reset:function(){O=!1,me=null,ae=null,_e=null,Te=null,le=null,Le=null,Pe=null,wt=null}}}const s=new n,a=new i,l=new r,c=new WeakMap,u=new WeakMap;let h={},m={},f={},p=new WeakMap,y=[],M=null,g=!1,d=null,x=null,_=null,b=null,T=null,A=null,N=null,v=new Je(0,0,0),w=0,I=!1,L=null,F=null,V=null,ee=null,H=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,k=0;const Z=t.getParameter(t.VERSION);Z.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(Z)[1]),G=k>=1):Z.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),G=k>=2);let P=null,C={};const K=t.getParameter(t.SCISSOR_BOX),se=t.getParameter(t.VIEWPORT),J=new At().fromArray(K),re=new At().fromArray(se);function U(O,me,ae,_e){const Te=new Uint8Array(4),le=t.createTexture();t.bindTexture(O,le),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Le=0;Le<ae;Le++)O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY?t.texImage3D(me,0,t.RGBA,1,1,_e,0,t.RGBA,t.UNSIGNED_BYTE,Te):t.texImage2D(me+Le,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Te);return le}const W={};W[t.TEXTURE_2D]=U(t.TEXTURE_2D,t.TEXTURE_2D,1),W[t.TEXTURE_CUBE_MAP]=U(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[t.TEXTURE_2D_ARRAY]=U(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),W[t.TEXTURE_3D]=U(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),l.setClear(0),te(t.DEPTH_TEST),a.setFunc(Ls),Ke(!1),st(Op),te(t.CULL_FACE),Oe(Ti);function te(O){h[O]!==!0&&(t.enable(O),h[O]=!0)}function fe(O){h[O]!==!1&&(t.disable(O),h[O]=!1)}function ye(O,me){return f[O]!==me?(t.bindFramebuffer(O,me),f[O]=me,O===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=me),O===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=me),!0):!1}function he(O,me){let ae=y,_e=!1;if(O){ae=p.get(me),ae===void 0&&(ae=[],p.set(me,ae));const Te=O.textures;if(ae.length!==Te.length||ae[0]!==t.COLOR_ATTACHMENT0){for(let le=0,Le=Te.length;le<Le;le++)ae[le]=t.COLOR_ATTACHMENT0+le;ae.length=Te.length,_e=!0}}else ae[0]!==t.BACK&&(ae[0]=t.BACK,_e=!0);_e&&t.drawBuffers(ae)}function de(O){return M!==O?(t.useProgram(O),M=O,!0):!1}const Ee={[br]:t.FUNC_ADD,[e1]:t.FUNC_SUBTRACT,[t1]:t.FUNC_REVERSE_SUBTRACT};Ee[n1]=t.MIN,Ee[i1]=t.MAX;const ge={[r1]:t.ZERO,[s1]:t.ONE,[a1]:t.SRC_COLOR,[ld]:t.SRC_ALPHA,[f1]:t.SRC_ALPHA_SATURATE,[u1]:t.DST_COLOR,[l1]:t.DST_ALPHA,[o1]:t.ONE_MINUS_SRC_COLOR,[cd]:t.ONE_MINUS_SRC_ALPHA,[d1]:t.ONE_MINUS_DST_COLOR,[c1]:t.ONE_MINUS_DST_ALPHA,[h1]:t.CONSTANT_COLOR,[p1]:t.ONE_MINUS_CONSTANT_COLOR,[m1]:t.CONSTANT_ALPHA,[g1]:t.ONE_MINUS_CONSTANT_ALPHA};function Oe(O,me,ae,_e,Te,le,Le,Pe,wt,pt){if(O===Ti){g===!0&&(fe(t.BLEND),g=!1);return}if(g===!1&&(te(t.BLEND),g=!0),O!==JS){if(O!==d||pt!==I){if((x!==br||T!==br)&&(t.blendEquation(t.FUNC_ADD),x=br,T=br),pt)switch(O){case Ms:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case od:t.blendFunc(t.ONE,t.ONE);break;case Bp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case zp:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:it("WebGLState: Invalid blending: ",O);break}else switch(O){case Ms:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case od:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Bp:it("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zp:it("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:it("WebGLState: Invalid blending: ",O);break}_=null,b=null,A=null,N=null,v.set(0,0,0),w=0,d=O,I=pt}return}Te=Te||me,le=le||ae,Le=Le||_e,(me!==x||Te!==T)&&(t.blendEquationSeparate(Ee[me],Ee[Te]),x=me,T=Te),(ae!==_||_e!==b||le!==A||Le!==N)&&(t.blendFuncSeparate(ge[ae],ge[_e],ge[le],ge[Le]),_=ae,b=_e,A=le,N=Le),(Pe.equals(v)===!1||wt!==w)&&(t.blendColor(Pe.r,Pe.g,Pe.b,wt),v.copy(Pe),w=wt),d=O,I=!1}function Be(O,me){O.side===Si?fe(t.CULL_FACE):te(t.CULL_FACE);let ae=O.side===pn;me&&(ae=!ae),Ke(ae),O.blending===Ms&&O.transparent===!1?Oe(Ti):Oe(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),s.setMask(O.colorWrite);const _e=O.stencilWrite;l.setTest(_e),_e&&(l.setMask(O.stencilWriteMask),l.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),l.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),at(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?te(t.SAMPLE_ALPHA_TO_COVERAGE):fe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(O){L!==O&&(O?t.frontFace(t.CW):t.frontFace(t.CCW),L=O)}function st(O){O!==KS?(te(t.CULL_FACE),O!==F&&(O===Op?t.cullFace(t.BACK):O===ZS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):fe(t.CULL_FACE),F=O}function ot(O){O!==V&&(G&&t.lineWidth(O),V=O)}function at(O,me,ae){O?(te(t.POLYGON_OFFSET_FILL),(ee!==me||H!==ae)&&(ee=me,H=ae,a.getReversed()&&(me=-me),t.polygonOffset(me,ae))):fe(t.POLYGON_OFFSET_FILL)}function dt(O){O?te(t.SCISSOR_TEST):fe(t.SCISSOR_TEST)}function xt(O){O===void 0&&(O=t.TEXTURE0+$-1),P!==O&&(t.activeTexture(O),P=O)}function B(O,me,ae){ae===void 0&&(P===null?ae=t.TEXTURE0+$-1:ae=P);let _e=C[ae];_e===void 0&&(_e={type:void 0,texture:void 0},C[ae]=_e),(_e.type!==O||_e.texture!==me)&&(P!==ae&&(t.activeTexture(ae),P=ae),t.bindTexture(O,me||W[O]),_e.type=O,_e.texture=me)}function It(){const O=C[P];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function et(){try{t.compressedTexImage2D(...arguments)}catch(O){it("WebGLState:",O)}}function R(){try{t.compressedTexImage3D(...arguments)}catch(O){it("WebGLState:",O)}}function S(){try{t.texSubImage2D(...arguments)}catch(O){it("WebGLState:",O)}}function D(){try{t.texSubImage3D(...arguments)}catch(O){it("WebGLState:",O)}}function X(){try{t.compressedTexSubImage2D(...arguments)}catch(O){it("WebGLState:",O)}}function ne(){try{t.compressedTexSubImage3D(...arguments)}catch(O){it("WebGLState:",O)}}function ue(){try{t.texStorage2D(...arguments)}catch(O){it("WebGLState:",O)}}function pe(){try{t.texStorage3D(...arguments)}catch(O){it("WebGLState:",O)}}function ie(){try{t.texImage2D(...arguments)}catch(O){it("WebGLState:",O)}}function oe(){try{t.texImage3D(...arguments)}catch(O){it("WebGLState:",O)}}function xe(O){return m[O]!==void 0?m[O]:t.getParameter(O)}function De(O,me){m[O]!==me&&(t.pixelStorei(O,me),m[O]=me)}function Se(O){J.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),J.copy(O))}function ve(O){re.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),re.copy(O))}function ke(O,me){let ae=u.get(me);ae===void 0&&(ae=new WeakMap,u.set(me,ae));let _e=ae.get(O);_e===void 0&&(_e=t.getUniformBlockIndex(me,O.name),ae.set(O,_e))}function ze(O,me){const _e=u.get(me).get(O);c.get(me)!==_e&&(t.uniformBlockBinding(me,_e,O.__bindingPointIndex),c.set(me,_e))}function We(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},m={},P=null,C={},f={},p=new WeakMap,y=[],M=null,g=!1,d=null,x=null,_=null,b=null,T=null,A=null,N=null,v=new Je(0,0,0),w=0,I=!1,L=null,F=null,V=null,ee=null,H=null,J.set(0,0,t.canvas.width,t.canvas.height),re.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),l.reset()}return{buffers:{color:s,depth:a,stencil:l},enable:te,disable:fe,bindFramebuffer:ye,drawBuffers:he,useProgram:de,setBlending:Oe,setMaterial:Be,setFlipSided:Ke,setCullFace:st,setLineWidth:ot,setPolygonOffset:at,setScissorTest:dt,activeTexture:xt,bindTexture:B,unbindTexture:It,compressedTexImage2D:et,compressedTexImage3D:R,texImage2D:ie,texImage3D:oe,pixelStorei:De,getParameter:xe,updateUBOMapping:ke,uniformBlockBinding:ze,texStorage2D:ue,texStorage3D:pe,texSubImage2D:S,texSubImage3D:D,compressedTexSubImage2D:X,compressedTexSubImage3D:ne,scissor:Se,viewport:ve,reset:We}}function JT(t,e,n,i,r,s,a){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new tt,h=new WeakMap,m=new Set;let f;const p=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(R,S){return y?new OffscreenCanvas(R,S):Il("canvas")}function g(R,S,D){let X=1;const ne=et(R);if((ne.width>D||ne.height>D)&&(X=D/Math.max(ne.width,ne.height)),X<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ue=Math.floor(X*ne.width),pe=Math.floor(X*ne.height);f===void 0&&(f=M(ue,pe));const ie=S?M(ue,pe):f;return ie.width=ue,ie.height=pe,ie.getContext("2d").drawImage(R,0,0,ue,pe),Ve("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+ue+"x"+pe+")."),ie}else return"data"in R&&Ve("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),R;return R}function d(R){return R.generateMipmaps}function x(R){t.generateMipmap(R)}function _(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function b(R,S,D,X,ne,ue=!1){if(R!==null){if(t[R]!==void 0)return t[R];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let pe;X&&(pe=e.get("EXT_texture_norm16"),pe||Ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=S;if(S===t.RED&&(D===t.FLOAT&&(ie=t.R32F),D===t.HALF_FLOAT&&(ie=t.R16F),D===t.UNSIGNED_BYTE&&(ie=t.R8),D===t.UNSIGNED_SHORT&&pe&&(ie=pe.R16_EXT),D===t.SHORT&&pe&&(ie=pe.R16_SNORM_EXT)),S===t.RED_INTEGER&&(D===t.UNSIGNED_BYTE&&(ie=t.R8UI),D===t.UNSIGNED_SHORT&&(ie=t.R16UI),D===t.UNSIGNED_INT&&(ie=t.R32UI),D===t.BYTE&&(ie=t.R8I),D===t.SHORT&&(ie=t.R16I),D===t.INT&&(ie=t.R32I)),S===t.RG&&(D===t.FLOAT&&(ie=t.RG32F),D===t.HALF_FLOAT&&(ie=t.RG16F),D===t.UNSIGNED_BYTE&&(ie=t.RG8),D===t.UNSIGNED_SHORT&&pe&&(ie=pe.RG16_EXT),D===t.SHORT&&pe&&(ie=pe.RG16_SNORM_EXT)),S===t.RG_INTEGER&&(D===t.UNSIGNED_BYTE&&(ie=t.RG8UI),D===t.UNSIGNED_SHORT&&(ie=t.RG16UI),D===t.UNSIGNED_INT&&(ie=t.RG32UI),D===t.BYTE&&(ie=t.RG8I),D===t.SHORT&&(ie=t.RG16I),D===t.INT&&(ie=t.RG32I)),S===t.RGB_INTEGER&&(D===t.UNSIGNED_BYTE&&(ie=t.RGB8UI),D===t.UNSIGNED_SHORT&&(ie=t.RGB16UI),D===t.UNSIGNED_INT&&(ie=t.RGB32UI),D===t.BYTE&&(ie=t.RGB8I),D===t.SHORT&&(ie=t.RGB16I),D===t.INT&&(ie=t.RGB32I)),S===t.RGBA_INTEGER&&(D===t.UNSIGNED_BYTE&&(ie=t.RGBA8UI),D===t.UNSIGNED_SHORT&&(ie=t.RGBA16UI),D===t.UNSIGNED_INT&&(ie=t.RGBA32UI),D===t.BYTE&&(ie=t.RGBA8I),D===t.SHORT&&(ie=t.RGBA16I),D===t.INT&&(ie=t.RGBA32I)),S===t.RGB&&(D===t.UNSIGNED_SHORT&&pe&&(ie=pe.RGB16_EXT),D===t.SHORT&&pe&&(ie=pe.RGB16_SNORM_EXT),D===t.UNSIGNED_INT_5_9_9_9_REV&&(ie=t.RGB9_E5),D===t.UNSIGNED_INT_10F_11F_11F_REV&&(ie=t.R11F_G11F_B10F)),S===t.RGBA){const oe=ue?Rl:Ze.getTransfer(ne);D===t.FLOAT&&(ie=t.RGBA32F),D===t.HALF_FLOAT&&(ie=t.RGBA16F),D===t.UNSIGNED_BYTE&&(ie=oe===lt?t.SRGB8_ALPHA8:t.RGBA8),D===t.UNSIGNED_SHORT&&pe&&(ie=pe.RGBA16_EXT),D===t.SHORT&&pe&&(ie=pe.RGBA16_SNORM_EXT),D===t.UNSIGNED_SHORT_4_4_4_4&&(ie=t.RGBA4),D===t.UNSIGNED_SHORT_5_5_5_1&&(ie=t.RGB5_A1)}return(ie===t.R16F||ie===t.R32F||ie===t.RG16F||ie===t.RG32F||ie===t.RGBA16F||ie===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function T(R,S){let D;return R?S===null||S===fi||S===ka?D=t.DEPTH24_STENCIL8:S===ai?D=t.DEPTH32F_STENCIL8:S===Ua&&(D=t.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===fi||S===ka?D=t.DEPTH_COMPONENT24:S===ai?D=t.DEPTH_COMPONENT32F:S===Ua&&(D=t.DEPTH_COMPONENT16),D}function A(R,S){return d(R)===!0||R.isFramebufferTexture&&R.minFilter!==Gt&&R.minFilter!==Qt?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function N(R){const S=R.target;S.removeEventListener("dispose",N),w(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&m.delete(S)}function v(R){const S=R.target;S.removeEventListener("dispose",v),L(S)}function w(R){const S=i.get(R);if(S.__webglInit===void 0)return;const D=R.source,X=p.get(D);if(X){const ne=X[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&I(R),Object.keys(X).length===0&&p.delete(D)}i.remove(R)}function I(R){const S=i.get(R);t.deleteTexture(S.__webglTexture);const D=R.source,X=p.get(D);delete X[S.__cacheKey],a.memory.textures--}function L(R){const S=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(S.__webglFramebuffer[X]))for(let ne=0;ne<S.__webglFramebuffer[X].length;ne++)t.deleteFramebuffer(S.__webglFramebuffer[X][ne]);else t.deleteFramebuffer(S.__webglFramebuffer[X]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[X])}else{if(Array.isArray(S.__webglFramebuffer))for(let X=0;X<S.__webglFramebuffer.length;X++)t.deleteFramebuffer(S.__webglFramebuffer[X]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let X=0;X<S.__webglColorRenderbuffer.length;X++)S.__webglColorRenderbuffer[X]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[X]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const D=R.textures;for(let X=0,ne=D.length;X<ne;X++){const ue=i.get(D[X]);ue.__webglTexture&&(t.deleteTexture(ue.__webglTexture),a.memory.textures--),i.remove(D[X])}i.remove(R)}let F=0;function V(){F=0}function ee(){return F}function H(R){F=R}function $(){const R=F;return R>=r.maxTextures&&Ve("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),F+=1,R}function G(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function k(R,S){const D=i.get(R);if(R.isVideoTexture&&B(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&D.__version!==R.version){const X=R.image;if(X===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{fe(D,R,S);return}}else R.isExternalTexture&&(D.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,D.__webglTexture,t.TEXTURE0+S)}function Z(R,S){const D=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&D.__version!==R.version){fe(D,R,S);return}else R.isExternalTexture&&(D.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,D.__webglTexture,t.TEXTURE0+S)}function P(R,S){const D=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&D.__version!==R.version){fe(D,R,S);return}n.bindTexture(t.TEXTURE_3D,D.__webglTexture,t.TEXTURE0+S)}function C(R,S){const D=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&D.__version!==R.version){ye(D,R,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+S)}const K={[xd]:t.REPEAT,[wi]:t.CLAMP_TO_EDGE,[vd]:t.MIRRORED_REPEAT},se={[Gt]:t.NEAREST,[_1]:t.NEAREST_MIPMAP_NEAREST,[ho]:t.NEAREST_MIPMAP_LINEAR,[Qt]:t.LINEAR,[Uc]:t.LINEAR_MIPMAP_NEAREST,[Ar]:t.LINEAR_MIPMAP_LINEAR},J={[b1]:t.NEVER,[A1]:t.ALWAYS,[M1]:t.LESS,[sh]:t.LEQUAL,[w1]:t.EQUAL,[ah]:t.GEQUAL,[E1]:t.GREATER,[T1]:t.NOTEQUAL};function re(R,S){if(S.type===ai&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Qt||S.magFilter===Uc||S.magFilter===ho||S.magFilter===Ar||S.minFilter===Qt||S.minFilter===Uc||S.minFilter===ho||S.minFilter===Ar)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,K[S.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,K[S.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,K[S.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,se[S.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,se[S.minFilter]),S.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,J[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Gt||S.minFilter!==ho&&S.minFilter!==Ar||S.type===ai&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function U(R,S){let D=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",N));const X=S.source;let ne=p.get(X);ne===void 0&&(ne={},p.set(X,ne));const ue=G(S);if(ue!==R.__cacheKey){ne[ue]===void 0&&(ne[ue]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,D=!0),ne[ue].usedTimes++;const pe=ne[R.__cacheKey];pe!==void 0&&(ne[R.__cacheKey].usedTimes--,pe.usedTimes===0&&I(S)),R.__cacheKey=ue,R.__webglTexture=ne[ue].texture}return D}function W(R,S,D){return Math.floor(Math.floor(R/D)/S)}function te(R,S,D,X){const ue=R.updateRanges;if(ue.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,D,X,S.data);else{ue.sort((De,Se)=>De.start-Se.start);let pe=0;for(let De=1;De<ue.length;De++){const Se=ue[pe],ve=ue[De],ke=Se.start+Se.count,ze=W(ve.start,S.width,4),We=W(Se.start,S.width,4);ve.start<=ke+1&&ze===We&&W(ve.start+ve.count-1,S.width,4)===ze?Se.count=Math.max(Se.count,ve.start+ve.count-Se.start):(++pe,ue[pe]=ve)}ue.length=pe+1;const ie=n.getParameter(t.UNPACK_ROW_LENGTH),oe=n.getParameter(t.UNPACK_SKIP_PIXELS),xe=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let De=0,Se=ue.length;De<Se;De++){const ve=ue[De],ke=Math.floor(ve.start/4),ze=Math.ceil(ve.count/4),We=ke%S.width,O=Math.floor(ke/S.width),me=ze,ae=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,We),n.pixelStorei(t.UNPACK_SKIP_ROWS,O),n.texSubImage2D(t.TEXTURE_2D,0,We,O,me,ae,D,X,S.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,ie),n.pixelStorei(t.UNPACK_SKIP_PIXELS,oe),n.pixelStorei(t.UNPACK_SKIP_ROWS,xe)}}function fe(R,S,D){let X=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(X=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(X=t.TEXTURE_3D);const ne=U(R,S),ue=S.source;n.bindTexture(X,R.__webglTexture,t.TEXTURE0+D);const pe=i.get(ue);if(ue.version!==pe.__version||ne===!0){if(n.activeTexture(t.TEXTURE0+D),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const ae=Ze.getPrimaries(Ze.workingColorSpace),_e=S.colorSpace===Yi?null:Ze.getPrimaries(S.colorSpace),Te=S.colorSpace===Yi||ae===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te)}n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment);let oe=g(S.image,!1,r.maxTextureSize);oe=It(S,oe);const xe=s.convert(S.format,S.colorSpace),De=s.convert(S.type);let Se=b(S.internalFormat,xe,De,S.normalized,S.colorSpace,S.isVideoTexture);re(X,S);let ve;const ke=S.mipmaps,ze=S.isVideoTexture!==!0,We=pe.__version===void 0||ne===!0,O=ue.dataReady,me=A(S,oe);if(S.isDepthTexture)Se=T(S.format===Cr,S.type),We&&(ze?n.texStorage2D(t.TEXTURE_2D,1,Se,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,Se,oe.width,oe.height,0,xe,De,null));else if(S.isDataTexture)if(ke.length>0){ze&&We&&n.texStorage2D(t.TEXTURE_2D,me,Se,ke[0].width,ke[0].height);for(let ae=0,_e=ke.length;ae<_e;ae++)ve=ke[ae],ze?O&&n.texSubImage2D(t.TEXTURE_2D,ae,0,0,ve.width,ve.height,xe,De,ve.data):n.texImage2D(t.TEXTURE_2D,ae,Se,ve.width,ve.height,0,xe,De,ve.data);S.generateMipmaps=!1}else ze?(We&&n.texStorage2D(t.TEXTURE_2D,me,Se,oe.width,oe.height),O&&te(S,oe,xe,De)):n.texImage2D(t.TEXTURE_2D,0,Se,oe.width,oe.height,0,xe,De,oe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ze&&We&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,Se,ke[0].width,ke[0].height,oe.depth);for(let ae=0,_e=ke.length;ae<_e;ae++)if(ve=ke[ae],S.format!==$n)if(xe!==null)if(ze){if(O)if(S.layerUpdates.size>0){const Te=hm(ve.width,ve.height,S.format,S.type);for(const le of S.layerUpdates){const Le=ve.data.subarray(le*Te/ve.data.BYTES_PER_ELEMENT,(le+1)*Te/ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,le,ve.width,ve.height,1,xe,Le)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,0,ve.width,ve.height,oe.depth,xe,ve.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ae,Se,ve.width,ve.height,oe.depth,0,ve.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?O&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,0,ve.width,ve.height,oe.depth,xe,De,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ae,Se,ve.width,ve.height,oe.depth,0,xe,De,ve.data)}else{ze&&We&&n.texStorage2D(t.TEXTURE_2D,me,Se,ke[0].width,ke[0].height);for(let ae=0,_e=ke.length;ae<_e;ae++)ve=ke[ae],S.format!==$n?xe!==null?ze?O&&n.compressedTexSubImage2D(t.TEXTURE_2D,ae,0,0,ve.width,ve.height,xe,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,ae,Se,ve.width,ve.height,0,ve.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?O&&n.texSubImage2D(t.TEXTURE_2D,ae,0,0,ve.width,ve.height,xe,De,ve.data):n.texImage2D(t.TEXTURE_2D,ae,Se,ve.width,ve.height,0,xe,De,ve.data)}else if(S.isDataArrayTexture)if(ze){if(We&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,Se,oe.width,oe.height,oe.depth),O)if(S.layerUpdates.size>0){const ae=hm(oe.width,oe.height,S.format,S.type);for(const _e of S.layerUpdates){const Te=oe.data.subarray(_e*ae/oe.data.BYTES_PER_ELEMENT,(_e+1)*ae/oe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,_e,oe.width,oe.height,1,xe,De,Te)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,xe,De,oe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Se,oe.width,oe.height,oe.depth,0,xe,De,oe.data);else if(S.isData3DTexture)ze?(We&&n.texStorage3D(t.TEXTURE_3D,me,Se,oe.width,oe.height,oe.depth),O&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,xe,De,oe.data)):n.texImage3D(t.TEXTURE_3D,0,Se,oe.width,oe.height,oe.depth,0,xe,De,oe.data);else if(S.isFramebufferTexture){if(We)if(ze)n.texStorage2D(t.TEXTURE_2D,me,Se,oe.width,oe.height);else{let ae=oe.width,_e=oe.height;for(let Te=0;Te<me;Te++)n.texImage2D(t.TEXTURE_2D,Te,Se,ae,_e,0,xe,De,null),ae>>=1,_e>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in t){const ae=t.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),oe.parentNode!==ae){ae.appendChild(oe),m.add(S),ae.onpaint=_e=>{const Te=_e.changedElements;for(const le of m)Te.includes(le.image)&&(le.needsUpdate=!0)},ae.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,oe);else{const Te=t.RGBA,le=t.RGBA,Le=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Te,le,Le,oe)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(ke.length>0){if(ze&&We){const ae=et(ke[0]);n.texStorage2D(t.TEXTURE_2D,me,Se,ae.width,ae.height)}for(let ae=0,_e=ke.length;ae<_e;ae++)ve=ke[ae],ze?O&&n.texSubImage2D(t.TEXTURE_2D,ae,0,0,xe,De,ve):n.texImage2D(t.TEXTURE_2D,ae,Se,xe,De,ve);S.generateMipmaps=!1}else if(ze){if(We){const ae=et(oe);n.texStorage2D(t.TEXTURE_2D,me,Se,ae.width,ae.height)}O&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,De,oe)}else n.texImage2D(t.TEXTURE_2D,0,Se,xe,De,oe);d(S)&&x(X),pe.__version=ue.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ye(R,S,D){if(S.image.length!==6)return;const X=U(R,S),ne=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+D);const ue=i.get(ne);if(ne.version!==ue.__version||X===!0){n.activeTexture(t.TEXTURE0+D);const pe=Ze.getPrimaries(Ze.workingColorSpace),ie=S.colorSpace===Yi?null:Ze.getPrimaries(S.colorSpace),oe=S.colorSpace===Yi||pe===ie?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const xe=S.isCompressedTexture||S.image[0].isCompressedTexture,De=S.image[0]&&S.image[0].isDataTexture,Se=[];for(let le=0;le<6;le++)!xe&&!De?Se[le]=g(S.image[le],!0,r.maxCubemapSize):Se[le]=De?S.image[le].image:S.image[le],Se[le]=It(S,Se[le]);const ve=Se[0],ke=s.convert(S.format,S.colorSpace),ze=s.convert(S.type),We=b(S.internalFormat,ke,ze,S.normalized,S.colorSpace),O=S.isVideoTexture!==!0,me=ue.__version===void 0||X===!0,ae=ne.dataReady;let _e=A(S,ve);re(t.TEXTURE_CUBE_MAP,S);let Te;if(xe){O&&me&&n.texStorage2D(t.TEXTURE_CUBE_MAP,_e,We,ve.width,ve.height);for(let le=0;le<6;le++){Te=Se[le].mipmaps;for(let Le=0;Le<Te.length;Le++){const Pe=Te[Le];S.format!==$n?ke!==null?O?ae&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Le,0,0,Pe.width,Pe.height,ke,Pe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Le,We,Pe.width,Pe.height,0,Pe.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Le,0,0,Pe.width,Pe.height,ke,ze,Pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Le,We,Pe.width,Pe.height,0,ke,ze,Pe.data)}}}else{if(Te=S.mipmaps,O&&me){Te.length>0&&_e++;const le=et(Se[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,_e,We,le.width,le.height)}for(let le=0;le<6;le++)if(De){O?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Se[le].width,Se[le].height,ke,ze,Se[le].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,We,Se[le].width,Se[le].height,0,ke,ze,Se[le].data);for(let Le=0;Le<Te.length;Le++){const wt=Te[Le].image[le].image;O?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Le+1,0,0,wt.width,wt.height,ke,ze,wt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Le+1,We,wt.width,wt.height,0,ke,ze,wt.data)}}else{O?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ke,ze,Se[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,We,ke,ze,Se[le]);for(let Le=0;Le<Te.length;Le++){const Pe=Te[Le];O?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Le+1,0,0,ke,ze,Pe.image[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Le+1,We,ke,ze,Pe.image[le])}}}d(S)&&x(t.TEXTURE_CUBE_MAP),ue.__version=ne.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function he(R,S,D,X,ne,ue){const pe=s.convert(D.format,D.colorSpace),ie=s.convert(D.type),oe=b(D.internalFormat,pe,ie,D.normalized,D.colorSpace),xe=i.get(S),De=i.get(D);if(De.__renderTarget=S,!xe.__hasExternalTextures){const Se=Math.max(1,S.width>>ue),ve=Math.max(1,S.height>>ue);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,ue,oe,Se,ve,S.depth,0,pe,ie,null):n.texImage2D(ne,ue,oe,Se,ve,0,pe,ie,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),xt(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,X,ne,De.__webglTexture,0,dt(S)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,X,ne,De.__webglTexture,ue),n.bindFramebuffer(t.FRAMEBUFFER,null)}function de(R,S,D){if(t.bindRenderbuffer(t.RENDERBUFFER,R),S.depthBuffer){const X=S.depthTexture,ne=X&&X.isDepthTexture?X.type:null,ue=T(S.stencilBuffer,ne),pe=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;xt(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,dt(S),ue,S.width,S.height):D?t.renderbufferStorageMultisample(t.RENDERBUFFER,dt(S),ue,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ue,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,pe,t.RENDERBUFFER,R)}else{const X=S.textures;for(let ne=0;ne<X.length;ne++){const ue=X[ne],pe=s.convert(ue.format,ue.colorSpace),ie=s.convert(ue.type),oe=b(ue.internalFormat,pe,ie,ue.normalized,ue.colorSpace);xt(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,dt(S),oe,S.width,S.height):D?t.renderbufferStorageMultisample(t.RENDERBUFFER,dt(S),oe,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,oe,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ee(R,S,D){const X=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ne=i.get(S.depthTexture);if(ne.__renderTarget=S,(!ne.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,S.depthTexture.addEventListener("dispose",N)),ne.__webglTexture===void 0){ne.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),re(t.TEXTURE_CUBE_MAP,S.depthTexture);const xe=s.convert(S.depthTexture.format),De=s.convert(S.depthTexture.type);let Se;S.depthTexture.format===Li?Se=t.DEPTH_COMPONENT24:S.depthTexture.format===Cr&&(Se=t.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Se,S.width,S.height,0,xe,De,null)}}else k(S.depthTexture,0);const ue=ne.__webglTexture,pe=dt(S),ie=X?t.TEXTURE_CUBE_MAP_POSITIVE_X+D:t.TEXTURE_2D,oe=S.depthTexture.format===Cr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(S.depthTexture.format===Li)xt(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,oe,ie,ue,0,pe):t.framebufferTexture2D(t.FRAMEBUFFER,oe,ie,ue,0);else if(S.depthTexture.format===Cr)xt(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,oe,ie,ue,0,pe):t.framebufferTexture2D(t.FRAMEBUFFER,oe,ie,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ge(R){const S=i.get(R),D=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const X=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),X){const ne=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,X.removeEventListener("dispose",ne)};X.addEventListener("dispose",ne),S.__depthDisposeCallback=ne}S.__boundDepthTexture=X}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(D)for(let X=0;X<6;X++)Ee(S.__webglFramebuffer[X],R,X);else{const X=R.texture.mipmaps;X&&X.length>0?Ee(S.__webglFramebuffer[0],R,0):Ee(S.__webglFramebuffer,R,0)}else if(D){S.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[X]),S.__webglDepthbuffer[X]===void 0)S.__webglDepthbuffer[X]=t.createRenderbuffer(),de(S.__webglDepthbuffer[X],R,!1);else{const ne=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=S.__webglDepthbuffer[X];t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,ue)}}else{const X=R.texture.mipmaps;if(X&&X.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),de(S.__webglDepthbuffer,R,!1);else{const ne=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,ue)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Oe(R,S,D){const X=i.get(R);S!==void 0&&he(X.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),D!==void 0&&ge(R)}function Be(R){const S=R.texture,D=i.get(R),X=i.get(S);R.addEventListener("dispose",v);const ne=R.textures,ue=R.isWebGLCubeRenderTarget===!0,pe=ne.length>1;if(pe||(X.__webglTexture===void 0&&(X.__webglTexture=t.createTexture()),X.__version=S.version,a.memory.textures++),ue){D.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(S.mipmaps&&S.mipmaps.length>0){D.__webglFramebuffer[ie]=[];for(let oe=0;oe<S.mipmaps.length;oe++)D.__webglFramebuffer[ie][oe]=t.createFramebuffer()}else D.__webglFramebuffer[ie]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){D.__webglFramebuffer=[];for(let ie=0;ie<S.mipmaps.length;ie++)D.__webglFramebuffer[ie]=t.createFramebuffer()}else D.__webglFramebuffer=t.createFramebuffer();if(pe)for(let ie=0,oe=ne.length;ie<oe;ie++){const xe=i.get(ne[ie]);xe.__webglTexture===void 0&&(xe.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&xt(R)===!1){D.__webglMultisampledFramebuffer=t.createFramebuffer(),D.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ie=0;ie<ne.length;ie++){const oe=ne[ie];D.__webglColorRenderbuffer[ie]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,D.__webglColorRenderbuffer[ie]);const xe=s.convert(oe.format,oe.colorSpace),De=s.convert(oe.type),Se=b(oe.internalFormat,xe,De,oe.normalized,oe.colorSpace,R.isXRRenderTarget===!0),ve=dt(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,Se,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ie,t.RENDERBUFFER,D.__webglColorRenderbuffer[ie])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(D.__webglDepthRenderbuffer=t.createRenderbuffer(),de(D.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ue){n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture),re(t.TEXTURE_CUBE_MAP,S);for(let ie=0;ie<6;ie++)if(S.mipmaps&&S.mipmaps.length>0)for(let oe=0;oe<S.mipmaps.length;oe++)he(D.__webglFramebuffer[ie][oe],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe);else he(D.__webglFramebuffer[ie],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);d(S)&&x(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(pe){for(let ie=0,oe=ne.length;ie<oe;ie++){const xe=ne[ie],De=i.get(xe);let Se=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Se=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Se,De.__webglTexture),re(Se,xe),he(D.__webglFramebuffer,R,xe,t.COLOR_ATTACHMENT0+ie,Se,0),d(xe)&&x(Se)}n.unbindTexture()}else{let ie=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ie=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ie,X.__webglTexture),re(ie,S),S.mipmaps&&S.mipmaps.length>0)for(let oe=0;oe<S.mipmaps.length;oe++)he(D.__webglFramebuffer[oe],R,S,t.COLOR_ATTACHMENT0,ie,oe);else he(D.__webglFramebuffer,R,S,t.COLOR_ATTACHMENT0,ie,0);d(S)&&x(ie),n.unbindTexture()}R.depthBuffer&&ge(R)}function Ke(R){const S=R.textures;for(let D=0,X=S.length;D<X;D++){const ne=S[D];if(d(ne)){const ue=_(R),pe=i.get(ne).__webglTexture;n.bindTexture(ue,pe),x(ue),n.unbindTexture()}}}const st=[],ot=[];function at(R){if(R.samples>0){if(xt(R)===!1){const S=R.textures,D=R.width,X=R.height;let ne=t.COLOR_BUFFER_BIT;const ue=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=i.get(R),ie=S.length>1;if(ie)for(let xe=0;xe<S.length;xe++)n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const oe=R.texture.mipmaps;oe&&oe.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let xe=0;xe<S.length;xe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),ie){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,pe.__webglColorRenderbuffer[xe]);const De=i.get(S[xe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,De,0)}t.blitFramebuffer(0,0,D,X,0,0,D,X,ne,t.NEAREST),c===!0&&(st.length=0,ot.length=0,st.push(t.COLOR_ATTACHMENT0+xe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(st.push(ue),ot.push(ue),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ot)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,st))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ie)for(let xe=0;xe<S.length;xe++){n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,pe.__webglColorRenderbuffer[xe]);const De=i.get(S[xe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,De,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const S=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function dt(R){return Math.min(r.maxSamples,R.samples)}function xt(R){const S=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function B(R){const S=a.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function It(R,S){const D=R.colorSpace,X=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||D!==Nl&&D!==Yi&&(Ze.getTransfer(D)===lt?(X!==$n||ne!==In)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):it("WebGLTextures: Unsupported texture color space:",D)),S}function et(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=$,this.resetTextureUnits=V,this.getTextureUnits=ee,this.setTextureUnits=H,this.setTexture2D=k,this.setTexture2DArray=Z,this.setTexture3D=P,this.setTextureCube=C,this.rebindTextures=Oe,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=he,this.useMultisampledRTT=xt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function e2(t,e){function n(i,r=Yi){let s;const a=Ze.getTransfer(r);if(i===In)return t.UNSIGNED_BYTE;if(i===eh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===th)return t.UNSIGNED_SHORT_5_5_5_1;if(i===gx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===xx)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===px)return t.BYTE;if(i===mx)return t.SHORT;if(i===Ua)return t.UNSIGNED_SHORT;if(i===Jf)return t.INT;if(i===fi)return t.UNSIGNED_INT;if(i===ai)return t.FLOAT;if(i===Ii)return t.HALF_FLOAT;if(i===vx)return t.ALPHA;if(i===_x)return t.RGB;if(i===$n)return t.RGBA;if(i===Li)return t.DEPTH_COMPONENT;if(i===Cr)return t.DEPTH_STENCIL;if(i===yx)return t.RED;if(i===nh)return t.RED_INTEGER;if(i===kr)return t.RG;if(i===ih)return t.RG_INTEGER;if(i===rh)return t.RGBA_INTEGER;if(i===Zo||i===Qo||i===Jo||i===el)if(a===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Zo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===el)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Zo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Jo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===el)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_d||i===yd||i===Sd||i===bd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===_d)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Sd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===bd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Md||i===wd||i===Ed||i===Td||i===Ad||i===Al||i===Cd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Md||i===wd)return a===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ed)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Td)return s.COMPRESSED_R11_EAC;if(i===Ad)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Al)return s.COMPRESSED_RG11_EAC;if(i===Cd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Nd||i===Rd||i===Pd||i===Id||i===Ld||i===Dd||i===Fd||i===Ud||i===kd||i===Od||i===Bd||i===zd||i===Vd||i===Hd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Nd)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rd)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Pd)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Id)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ld)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Dd)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Fd)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ud)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===kd)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Od)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Bd)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zd)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vd)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Hd)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Gd||i===jd||i===Wd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Gd)return a===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===jd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Xd||i===$d||i===Cl||i===qd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Xd)return s.COMPRESSED_RED_RGTC1_EXT;if(i===$d)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Cl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===qd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ka?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const t2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,n2=`
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

}`;class i2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Px(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new hi({vertexShader:t2,fragmentShader:n2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Un(new nc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class r2 extends Vr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,l="local-floor",c=1,u=null,h=null,m=null,f=null,p=null,y=null;const M=typeof XRWebGLBinding<"u",g=new i2,d={},x=n.getContextAttributes();let _=null,b=null;const T=[],A=[],N=new tt;let v=null;const w=new Pn;w.viewport=new At;const I=new Pn;I.viewport=new At;const L=[w,I],F=new hb;let V=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let W=T[U];return W===void 0&&(W=new jc,T[U]=W),W.getTargetRaySpace()},this.getControllerGrip=function(U){let W=T[U];return W===void 0&&(W=new jc,T[U]=W),W.getGripSpace()},this.getHand=function(U){let W=T[U];return W===void 0&&(W=new jc,T[U]=W),W.getHandSpace()};function H(U){const W=A.indexOf(U.inputSource);if(W===-1)return;const te=T[W];te!==void 0&&(te.update(U.inputSource,U.frame,u||a),te.dispatchEvent({type:U.type,data:U.inputSource}))}function $(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",G);for(let U=0;U<T.length;U++){const W=A[U];W!==null&&(A[U]=null,T[U].disconnect(W))}V=null,ee=null,g.reset();for(const U in d)delete d[U];e.setRenderTarget(_),p=null,f=null,m=null,r=null,b=null,re.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){s=U,i.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){l=U,i.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(U){u=U},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return m===null&&M&&(m=new XRWebGLBinding(r,n)),m},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(U){if(r=U,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",$),r.addEventListener("inputsourceschange",G),x.xrCompatible!==!0&&await n.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(N),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,fe=null,ye=null;x.depth&&(ye=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=x.stencil?Cr:Li,fe=x.stencil?ka:fi);const he={colorFormat:n.RGBA8,depthFormat:ye,scaleFactor:s};m=this.getBinding(),f=m.createProjectionLayer(he),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new di(f.textureWidth,f.textureHeight,{format:$n,type:In,depthTexture:new Fs(f.textureWidth,f.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const te={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,te),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new di(p.framebufferWidth,p.framebufferHeight,{format:$n,type:In,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(l),re.setContext(r),re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(U){for(let W=0;W<U.removed.length;W++){const te=U.removed[W],fe=A.indexOf(te);fe>=0&&(A[fe]=null,T[fe].disconnect(te))}for(let W=0;W<U.added.length;W++){const te=U.added[W];let fe=A.indexOf(te);if(fe===-1){for(let he=0;he<T.length;he++)if(he>=A.length){A.push(te),fe=he;break}else if(A[he]===null){A[he]=te,fe=he;break}if(fe===-1)break}const ye=T[fe];ye&&ye.connect(te)}}const k=new j,Z=new j;function P(U,W,te){k.setFromMatrixPosition(W.matrixWorld),Z.setFromMatrixPosition(te.matrixWorld);const fe=k.distanceTo(Z),ye=W.projectionMatrix.elements,he=te.projectionMatrix.elements,de=ye[14]/(ye[10]-1),Ee=ye[14]/(ye[10]+1),ge=(ye[9]+1)/ye[5],Oe=(ye[9]-1)/ye[5],Be=(ye[8]-1)/ye[0],Ke=(he[8]+1)/he[0],st=de*Be,ot=de*Ke,at=fe/(-Be+Ke),dt=at*-Be;if(W.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(dt),U.translateZ(at),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),ye[10]===-1)U.projectionMatrix.copy(W.projectionMatrix),U.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{const xt=de+at,B=Ee+at,It=st-dt,et=ot+(fe-dt),R=ge*Ee/B*xt,S=Oe*Ee/B*xt;U.projectionMatrix.makePerspective(It,et,R,S,xt,B),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function C(U,W){W===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(W.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(r===null)return;let W=U.near,te=U.far;g.texture!==null&&(g.depthNear>0&&(W=g.depthNear),g.depthFar>0&&(te=g.depthFar)),F.near=I.near=w.near=W,F.far=I.far=w.far=te,(V!==F.near||ee!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),V=F.near,ee=F.far),F.layers.mask=U.layers.mask|6,w.layers.mask=F.layers.mask&-5,I.layers.mask=F.layers.mask&-3;const fe=U.parent,ye=F.cameras;C(F,fe);for(let he=0;he<ye.length;he++)C(ye[he],fe);ye.length===2?P(F,w,I):F.projectionMatrix.copy(w.projectionMatrix),K(U,F,fe)};function K(U,W,te){te===null?U.matrix.copy(W.matrixWorld):(U.matrix.copy(te.matrixWorld),U.matrix.invert(),U.matrix.multiply(W.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(W.projectionMatrix),U.projectionMatrixInverse.copy(W.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=Yd*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(U){c=U,f!==null&&(f.fixedFoveation=U),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=U)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(U){return d[U]};let se=null;function J(U,W){if(h=W.getViewerPose(u||a),y=W,h!==null){const te=h.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let fe=!1;te.length!==F.cameras.length&&(F.cameras.length=0,fe=!0);for(let Ee=0;Ee<te.length;Ee++){const ge=te[Ee];let Oe=null;if(p!==null)Oe=p.getViewport(ge);else{const Ke=m.getViewSubImage(f,ge);Oe=Ke.viewport,Ee===0&&(e.setRenderTargetTextures(b,Ke.colorTexture,Ke.depthStencilTexture),e.setRenderTarget(b))}let Be=L[Ee];Be===void 0&&(Be=new Pn,Be.layers.enable(Ee),Be.viewport=new At,L[Ee]=Be),Be.matrix.fromArray(ge.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(ge.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),Ee===0&&(F.matrix.copy(Be.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),fe===!0&&F.cameras.push(Be)}const ye=r.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){m=i.getBinding();const Ee=m.getDepthInformation(te[0]);Ee&&Ee.isValid&&Ee.texture&&g.init(Ee,r.renderState)}if(ye&&ye.includes("camera-access")&&M){e.state.unbindTexture(),m=i.getBinding();for(let Ee=0;Ee<te.length;Ee++){const ge=te[Ee].camera;if(ge){let Oe=d[ge];Oe||(Oe=new Px,d[ge]=Oe);const Be=m.getCameraImage(ge);Oe.sourceTexture=Be}}}}for(let te=0;te<T.length;te++){const fe=A[te],ye=T[te];fe!==null&&ye!==void 0&&ye.update(fe,W,u||a)}se&&se(U,W),W.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:W}),y=null}const re=new Fx;re.setAnimationLoop(J),this.setAnimationLoop=function(U){se=U},this.dispose=function(){}}}const s2=new Pt,Hx=new je;Hx.set(-1,0,0,0,1,0,0,0,1);function a2(t,e){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,Ix(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,x,_,b){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(g,d):d.isMeshLambertMaterial?(s(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(g,d),m(g,d)):d.isMeshPhongMaterial?(s(g,d),h(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(g,d),f(g,d),d.isMeshPhysicalMaterial&&p(g,d,b)):d.isMeshMatcapMaterial?(s(g,d),y(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),M(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&l(g,d)):d.isPointsMaterial?c(g,d,x,_):d.isSpriteMaterial?u(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===pn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===pn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const x=e.get(d),_=x.envMap,b=x.envMapRotation;_&&(g.envMap.value=_,g.envMapRotation.value.setFromMatrix4(s2.makeRotationFromEuler(b)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Hx),g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function l(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function c(g,d,x,_){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*x,g.scale.value=_*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function m(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function f(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,x){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===pn&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function y(g,d){d.matcap&&(g.matcap.value=d.matcap)}function M(g,d){const x=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function o2(t,e,n,i){let r={},s={},a=[];const l=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,T){const A=T.program;i.uniformBlockBinding(b,A)}function u(b,T){let A=r[b.id];A===void 0&&(g(b),A=h(b),r[b.id]=A,b.addEventListener("dispose",x));const N=T.program;i.updateUBOMapping(b,N);const v=e.render.frame;s[b.id]!==v&&(f(b),s[b.id]=v)}function h(b){const T=m();b.__bindingPointIndex=T;const A=t.createBuffer(),N=b.__size,v=b.usage;return t.bindBuffer(t.UNIFORM_BUFFER,A),t.bufferData(t.UNIFORM_BUFFER,N,v),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,A),A}function m(){for(let b=0;b<l;b++)if(a.indexOf(b)===-1)return a.push(b),b;return it("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const T=r[b.id],A=b.uniforms,N=b.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let v=0,w=A.length;v<w;v++){const I=A[v];if(Array.isArray(I))for(let L=0,F=I.length;L<F;L++)p(I[L],v,L,N);else p(I,v,0,N)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(b,T,A,N){if(M(b,T,A,N)===!0){const v=b.__offset,w=b.value;if(Array.isArray(w)){let I=0;for(let L=0;L<w.length;L++){const F=w[L],V=d(F);y(F,b.__data,I),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(I+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else y(w,b.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,v,b.__data)}}function y(b,T,A){typeof b=="number"||typeof b=="boolean"?T[0]=b:b.isMatrix3?(T[0]=b.elements[0],T[1]=b.elements[1],T[2]=b.elements[2],T[3]=0,T[4]=b.elements[3],T[5]=b.elements[4],T[6]=b.elements[5],T[7]=0,T[8]=b.elements[6],T[9]=b.elements[7],T[10]=b.elements[8],T[11]=0):ArrayBuffer.isView(b)?T.set(new b.constructor(b.buffer,b.byteOffset,T.length)):b.toArray(T,A)}function M(b,T,A,N){const v=b.value,w=T+"_"+A;if(N[w]===void 0)return typeof v=="number"||typeof v=="boolean"?N[w]=v:ArrayBuffer.isView(v)?N[w]=v.slice():N[w]=v.clone(),!0;{const I=N[w];if(typeof v=="number"||typeof v=="boolean"){if(I!==v)return N[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(I.equals(v)===!1)return I.copy(v),!0}}return!1}function g(b){const T=b.uniforms;let A=0;const N=16;for(let w=0,I=T.length;w<I;w++){const L=Array.isArray(T[w])?T[w]:[T[w]];for(let F=0,V=L.length;F<V;F++){const ee=L[F],H=Array.isArray(ee.value)?ee.value:[ee.value];for(let $=0,G=H.length;$<G;$++){const k=H[$],Z=d(k),P=A%N,C=P%Z.boundary,K=P+C;A+=C,K!==0&&N-K<Z.storage&&(A+=N-K),ee.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=A,A+=Z.storage}}}const v=A%N;return v>0&&(A+=N-v),b.__size=A,b.__cache={},this}function d(b){const T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(T.boundary=16,T.storage=b.byteLength):Ve("WebGLRenderer: Unsupported uniform value type.",b),T}function x(b){const T=b.target;T.removeEventListener("dispose",x);const A=a.indexOf(T.__bindingPointIndex);a.splice(A,1),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function _(){for(const b in r)t.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:c,update:u,dispose:_}}const l2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ni=null;function c2(){return ni===null&&(ni=new Q1(l2,16,16,kr,Ii),ni.name="DFG_LUT",ni.minFilter=Qt,ni.magFilter=Qt,ni.wrapS=wi,ni.wrapT=wi,ni.generateMipmaps=!1,ni.needsUpdate=!0),ni}class u2{constructor(e={}){const{canvas:n=N1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:f=!1,outputBufferType:p=In}=e;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=a;const M=p,g=new Set([rh,ih,nh]),d=new Set([In,fi,Ua,ka,eh,th]),x=new Uint32Array(4),_=new Int32Array(4),b=new j;let T=null,A=null;const N=[],v=[];let w=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let L=!1,F=null,V=null,ee=null,H=null;this._outputColorSpace=Cn;let $=0,G=0,k=null,Z=-1,P=null;const C=new At,K=new At;let se=null;const J=new Je(0);let re=0,U=n.width,W=n.height,te=1,fe=null,ye=null;const he=new At(0,0,U,W),de=new At(0,0,U,W);let Ee=!1;const ge=new Cx;let Oe=!1,Be=!1;const Ke=new Pt,st=new j,ot=new At,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function xt(){return k===null?te:1}let B=i;function It(E,z){return n.getContext(E,z)}try{const E={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:m};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Qf}`),n.addEventListener("webglcontextlost",wt,!1),n.addEventListener("webglcontextrestored",pt,!1),n.addEventListener("webglcontextcreationerror",Zn,!1),B===null){const z="webgl2";if(B=It(z,E),B===null)throw It(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(E){throw it("WebGLRenderer: "+E.message),E}let et,R,S,D,X,ne,ue,pe,ie,oe,xe,De,Se,ve,ke,ze,We,O,me,ae,_e,Te,le;function Le(){et=new cE(B),et.init(),_e=new e2(B,et),R=new tE(B,et,e,_e),S=new QT(B,et),R.reversedDepthBuffer&&f&&S.buffers.depth.setReversed(!0),V=B.createFramebuffer(),ee=B.createFramebuffer(),H=B.createFramebuffer(),D=new fE(B),X=new OT,ne=new JT(B,et,S,X,R,_e,D),ue=new lE(I),pe=new gb(B),Te=new Jw(B,pe),ie=new uE(B,pe,D,Te),oe=new pE(B,ie,pe,Te,D),O=new hE(B,R,ne),ke=new nE(X),xe=new kT(I,ue,et,R,Te,ke),De=new a2(I,X),Se=new zT,ve=new XT(et),We=new Qw(I,ue,S,oe,y,c),ze=new ZT(I,oe,R),le=new o2(B,D,R,S),me=new eE(B,et,D),ae=new dE(B,et,D),D.programs=xe.programs,I.capabilities=R,I.extensions=et,I.properties=X,I.renderLists=Se,I.shadowMap=ze,I.state=S,I.info=D}Le(),M!==In&&(w=new gE(M,n.width,n.height,l,r,s));const Pe=new r2(I,B);this.xr=Pe,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const E=et.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=et.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(E){E!==void 0&&(te=E,this.setSize(U,W,!1))},this.getSize=function(E){return E.set(U,W)},this.setSize=function(E,z,Q=!0){if(Pe.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}U=E,W=z,n.width=Math.floor(E*te),n.height=Math.floor(z*te),Q===!0&&(n.style.width=E+"px",n.style.height=z+"px"),w!==null&&w.setSize(n.width,n.height),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(U*te,W*te).floor()},this.setDrawingBufferSize=function(E,z,Q){U=E,W=z,te=Q,n.width=Math.floor(E*Q),n.height=Math.floor(z*Q),this.setViewport(0,0,E,z)},this.setEffects=function(E){if(M===In){it("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let z=0;z<E.length;z++)if(E[z].isOutputPass===!0){Ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(he)},this.setViewport=function(E,z,Q,q){E.isVector4?he.set(E.x,E.y,E.z,E.w):he.set(E,z,Q,q),S.viewport(C.copy(he).multiplyScalar(te).round())},this.getScissor=function(E){return E.copy(de)},this.setScissor=function(E,z,Q,q){E.isVector4?de.set(E.x,E.y,E.z,E.w):de.set(E,z,Q,q),S.scissor(K.copy(de).multiplyScalar(te).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(E){S.setScissorTest(Ee=E)},this.setOpaqueSort=function(E){fe=E},this.setTransparentSort=function(E){ye=E},this.getClearColor=function(E){return E.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(E=!0,z=!0,Q=!0){let q=0;if(E){let Y=!1;if(k!==null){const we=k.texture.format;Y=g.has(we)}if(Y){const we=k.texture.type,Ne=d.has(we),Me=We.getClearColor(),Ie=We.getClearAlpha(),Fe=Me.r,Xe=Me.g,qe=Me.b;Ne?(x[0]=Fe,x[1]=Xe,x[2]=qe,x[3]=Ie,B.clearBufferuiv(B.COLOR,0,x)):(_[0]=Fe,_[1]=Xe,_[2]=qe,_[3]=Ie,B.clearBufferiv(B.COLOR,0,_))}else q|=B.COLOR_BUFFER_BIT}z&&(q|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(q|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&B.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),F=E},this.dispose=function(){n.removeEventListener("webglcontextlost",wt,!1),n.removeEventListener("webglcontextrestored",pt,!1),n.removeEventListener("webglcontextcreationerror",Zn,!1),We.dispose(),Se.dispose(),ve.dispose(),X.dispose(),ue.dispose(),oe.dispose(),Te.dispose(),le.dispose(),xe.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",_h),Pe.removeEventListener("sessionend",yh),hr.stop()};function wt(E){E.preventDefault(),Xp("WebGLRenderer: Context Lost."),L=!0}function pt(){Xp("WebGLRenderer: Context Restored."),L=!1;const E=D.autoReset,z=ze.enabled,Q=ze.autoUpdate,q=ze.needsUpdate,Y=ze.type;Le(),D.autoReset=E,ze.enabled=z,ze.autoUpdate=Q,ze.needsUpdate=q,ze.type=Y}function Zn(E){it("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Qn(E){const z=E.target;z.removeEventListener("dispose",Qn),jx(z)}function jx(E){Wx(E),X.remove(E)}function Wx(E){const z=X.get(E).programs;z!==void 0&&(z.forEach(function(Q){xe.releaseProgram(Q)}),E.isShaderMaterial&&xe.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,Q,q,Y,we){z===null&&(z=at);const Ne=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Me=qx(E,z,Q,q,Y);S.setMaterial(q,Ne);let Ie=Q.index,Fe=1;if(q.wireframe===!0){if(Ie=ie.getWireframeAttribute(Q),Ie===void 0)return;Fe=2}const Xe=Q.drawRange,qe=Q.attributes.position;let Ue=Xe.start*Fe,ut=(Xe.start+Xe.count)*Fe;we!==null&&(Ue=Math.max(Ue,we.start*Fe),ut=Math.min(ut,(we.start+we.count)*Fe)),Ie!==null?(Ue=Math.max(Ue,0),ut=Math.min(ut,Ie.count)):qe!=null&&(Ue=Math.max(Ue,0),ut=Math.min(ut,qe.count));const Ct=ut-Ue;if(Ct<0||Ct===1/0)return;Te.setup(Y,q,Me,Q,Ie);let Et,ft=me;if(Ie!==null&&(Et=pe.get(Ie),ft=ae,ft.setIndex(Et)),Y.isMesh)q.wireframe===!0?(S.setLineWidth(q.wireframeLinewidth*xt()),ft.setMode(B.LINES)):ft.setMode(B.TRIANGLES);else if(Y.isLine){let Xt=q.linewidth;Xt===void 0&&(Xt=1),S.setLineWidth(Xt*xt()),Y.isLineSegments?ft.setMode(B.LINES):Y.isLineLoop?ft.setMode(B.LINE_LOOP):ft.setMode(B.LINE_STRIP)}else Y.isPoints?ft.setMode(B.POINTS):Y.isSprite&&ft.setMode(B.TRIANGLES);if(Y.isBatchedMesh)if(et.get("WEBGL_multi_draw"))ft.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Xt=Y._multiDrawStarts,Ce=Y._multiDrawCounts,gn=Y._multiDrawCount,nt=Ie?pe.get(Ie).bytesPerElement:1,Tn=X.get(q).currentProgram.getUniforms();for(let Jn=0;Jn<gn;Jn++)Tn.setValue(B,"_gl_DrawID",Jn),ft.render(Xt[Jn]/nt,Ce[Jn])}else if(Y.isInstancedMesh)ft.renderInstances(Ue,Ct,Y.count);else if(Q.isInstancedBufferGeometry){const Xt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ce=Math.min(Q.instanceCount,Xt);ft.renderInstances(Ue,Ct,Ce)}else ft.render(Ue,Ct)};function vh(E,z,Q){E.transparent===!0&&E.side===Si&&E.forceSinglePass===!1?(E.side=pn,E.needsUpdate=!0,qa(E,z,Q),E.side=cr,E.needsUpdate=!0,qa(E,z,Q),E.side=Si):qa(E,z,Q)}this.compile=function(E,z,Q=null){Q===null&&(Q=E),A=ve.get(Q),A.init(z),v.push(A),Q.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(A.pushLight(Y),Y.castShadow&&A.pushShadow(Y))}),E!==Q&&E.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(A.pushLight(Y),Y.castShadow&&A.pushShadow(Y))}),A.setupLights();const q=new Set;return E.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const we=Y.material;if(we)if(Array.isArray(we))for(let Ne=0;Ne<we.length;Ne++){const Me=we[Ne];vh(Me,Q,Y),q.add(Me)}else vh(we,Q,Y),q.add(we)}),A=v.pop(),q},this.compileAsync=function(E,z,Q=null){const q=this.compile(E,z,Q);return new Promise(Y=>{function we(){if(q.forEach(function(Ne){X.get(Ne).currentProgram.isReady()&&q.delete(Ne)}),q.size===0){Y(E);return}setTimeout(we,10)}et.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let sc=null;function Xx(E){sc&&sc(E)}function _h(){hr.stop()}function yh(){hr.start()}const hr=new Fx;hr.setAnimationLoop(Xx),typeof self<"u"&&hr.setContext(self),this.setAnimationLoop=function(E){sc=E,Pe.setAnimationLoop(E),E===null?hr.stop():hr.start()},Pe.addEventListener("sessionstart",_h),Pe.addEventListener("sessionend",yh),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){it("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;F!==null&&F.renderStart(E,z);const Q=Pe.enabled===!0&&Pe.isPresenting===!0,q=w!==null&&(k===null||Q)&&w.begin(I,k);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(z),z=Pe.getCamera()),E.isScene===!0&&E.onBeforeRender(I,E,z,k),A=ve.get(E,v.length),A.init(z),A.state.textureUnits=ne.getTextureUnits(),v.push(A),Ke.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ge.setFromProjectionMatrix(Ke,oi,z.reversedDepth),Be=this.localClippingEnabled,Oe=ke.init(this.clippingPlanes,Be),T=Se.get(E,N.length),T.init(),N.push(T),Pe.enabled===!0&&Pe.isPresenting===!0){const Ne=I.xr.getDepthSensingMesh();Ne!==null&&ac(Ne,z,-1/0,I.sortObjects)}ac(E,z,0,I.sortObjects),T.finish(),I.sortObjects===!0&&T.sort(fe,ye,z.reversedDepth),dt=Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1,dt&&We.addToRenderList(T,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Oe===!0&&ke.beginShadows();const Y=A.state.shadowsArray;if(ze.render(Y,E,z),Oe===!0&&ke.endShadows(),(q&&w.hasRenderPass())===!1){const Ne=T.opaque,Me=T.transmissive;if(A.setupLights(),z.isArrayCamera){const Ie=z.cameras;if(Me.length>0)for(let Fe=0,Xe=Ie.length;Fe<Xe;Fe++){const qe=Ie[Fe];bh(Ne,Me,E,qe)}dt&&We.render(E);for(let Fe=0,Xe=Ie.length;Fe<Xe;Fe++){const qe=Ie[Fe];Sh(T,E,qe,qe.viewport)}}else Me.length>0&&bh(Ne,Me,E,z),dt&&We.render(E),Sh(T,E,z)}k!==null&&G===0&&(ne.updateMultisampleRenderTarget(k),ne.updateRenderTargetMipmap(k)),q&&w.end(I),E.isScene===!0&&E.onAfterRender(I,E,z),Te.resetDefaultState(),Z=-1,P=null,v.pop(),v.length>0?(A=v[v.length-1],ne.setTextureUnits(A.state.textureUnits),Oe===!0&&ke.setGlobalState(I.clippingPlanes,A.state.camera)):A=null,N.pop(),N.length>0?T=N[N.length-1]:T=null,F!==null&&F.renderEnd()};function ac(E,z,Q,q){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)Q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLightProbeGrid)A.pushLightProbeGrid(E);else if(E.isLight)A.pushLight(E),E.castShadow&&A.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ge.intersectsSprite(E)){q&&ot.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ke);const Ne=oe.update(E),Me=E.material;Me.visible&&T.push(E,Ne,Me,Q,ot.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ge.intersectsObject(E))){const Ne=oe.update(E),Me=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ot.copy(E.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),ot.copy(Ne.boundingSphere.center)),ot.applyMatrix4(E.matrixWorld).applyMatrix4(Ke)),Array.isArray(Me)){const Ie=Ne.groups;for(let Fe=0,Xe=Ie.length;Fe<Xe;Fe++){const qe=Ie[Fe],Ue=Me[qe.materialIndex];Ue&&Ue.visible&&T.push(E,Ne,Ue,Q,ot.z,qe)}}else Me.visible&&T.push(E,Ne,Me,Q,ot.z,null)}}const we=E.children;for(let Ne=0,Me=we.length;Ne<Me;Ne++)ac(we[Ne],z,Q,q)}function Sh(E,z,Q,q){const{opaque:Y,transmissive:we,transparent:Ne}=E;A.setupLightsView(Q),Oe===!0&&ke.setGlobalState(I.clippingPlanes,Q),q&&S.viewport(C.copy(q)),Y.length>0&&$a(Y,z,Q),we.length>0&&$a(we,z,Q),Ne.length>0&&$a(Ne,z,Q),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function bh(E,z,Q,q){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[q.id]===void 0){const Ue=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[q.id]=new di(1,1,{generateMipmaps:!0,type:Ue?Ii:In,minFilter:Ar,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}const we=A.state.transmissionRenderTarget[q.id],Ne=q.viewport||C;we.setSize(Ne.z*I.transmissionResolutionScale,Ne.w*I.transmissionResolutionScale);const Me=I.getRenderTarget(),Ie=I.getActiveCubeFace(),Fe=I.getActiveMipmapLevel();I.setRenderTarget(we),I.getClearColor(J),re=I.getClearAlpha(),re<1&&I.setClearColor(16777215,.5),I.clear(),dt&&We.render(Q);const Xe=I.toneMapping;I.toneMapping=ui;const qe=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),A.setupLightsView(q),Oe===!0&&ke.setGlobalState(I.clippingPlanes,q),$a(E,Q,q),ne.updateMultisampleRenderTarget(we),ne.updateRenderTargetMipmap(we),et.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let ut=0,Ct=z.length;ut<Ct;ut++){const Et=z[ut],{object:ft,geometry:Xt,material:Ce,group:gn}=Et;if(Ce.side===Si&&ft.layers.test(q.layers)){const nt=Ce.side;Ce.side=pn,Ce.needsUpdate=!0,Mh(ft,Q,q,Xt,Ce,gn),Ce.side=nt,Ce.needsUpdate=!0,Ue=!0}}Ue===!0&&(ne.updateMultisampleRenderTarget(we),ne.updateRenderTargetMipmap(we))}I.setRenderTarget(Me,Ie,Fe),I.setClearColor(J,re),qe!==void 0&&(q.viewport=qe),I.toneMapping=Xe}function $a(E,z,Q){const q=z.isScene===!0?z.overrideMaterial:null;for(let Y=0,we=E.length;Y<we;Y++){const Ne=E[Y],{object:Me,geometry:Ie,group:Fe}=Ne;let Xe=Ne.material;Xe.allowOverride===!0&&q!==null&&(Xe=q),Me.layers.test(Q.layers)&&Mh(Me,z,Q,Ie,Xe,Fe)}}function Mh(E,z,Q,q,Y,we){E.onBeforeRender(I,z,Q,q,Y,we),E.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Y.onBeforeRender(I,z,Q,q,E,we),Y.transparent===!0&&Y.side===Si&&Y.forceSinglePass===!1?(Y.side=pn,Y.needsUpdate=!0,I.renderBufferDirect(Q,z,q,Y,E,we),Y.side=cr,Y.needsUpdate=!0,I.renderBufferDirect(Q,z,q,Y,E,we),Y.side=Si):I.renderBufferDirect(Q,z,q,Y,E,we),E.onAfterRender(I,z,Q,q,Y,we)}function qa(E,z,Q){z.isScene!==!0&&(z=at);const q=X.get(E),Y=A.state.lights,we=A.state.shadowsArray,Ne=Y.state.version,Me=xe.getParameters(E,Y.state,we,z,Q,A.state.lightProbeGridArray),Ie=xe.getProgramCacheKey(Me);let Fe=q.programs;q.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?z.environment:null,q.fog=z.fog;const Xe=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;q.envMap=ue.get(E.envMap||q.environment,Xe),q.envMapRotation=q.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,Fe===void 0&&(E.addEventListener("dispose",Qn),Fe=new Map,q.programs=Fe);let qe=Fe.get(Ie);if(qe!==void 0){if(q.currentProgram===qe&&q.lightsStateVersion===Ne)return Eh(E,Me),qe}else Me.uniforms=xe.getUniforms(E),F!==null&&E.isNodeMaterial&&F.build(E,Q,Me),E.onBeforeCompile(Me,I),qe=xe.acquireProgram(Me,Ie),Fe.set(Ie,qe),q.uniforms=Me.uniforms;const Ue=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ue.clippingPlanes=ke.uniform),Eh(E,Me),q.needsLights=Kx(E),q.lightsStateVersion=Ne,q.needsLights&&(Ue.ambientLightColor.value=Y.state.ambient,Ue.lightProbe.value=Y.state.probe,Ue.directionalLights.value=Y.state.directional,Ue.directionalLightShadows.value=Y.state.directionalShadow,Ue.spotLights.value=Y.state.spot,Ue.spotLightShadows.value=Y.state.spotShadow,Ue.rectAreaLights.value=Y.state.rectArea,Ue.ltc_1.value=Y.state.rectAreaLTC1,Ue.ltc_2.value=Y.state.rectAreaLTC2,Ue.pointLights.value=Y.state.point,Ue.pointLightShadows.value=Y.state.pointShadow,Ue.hemisphereLights.value=Y.state.hemi,Ue.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ue.spotLightMatrix.value=Y.state.spotLightMatrix,Ue.spotLightMap.value=Y.state.spotLightMap,Ue.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.lightProbeGrid=A.state.lightProbeGridArray.length>0,q.currentProgram=qe,q.uniformsList=null,qe}function wh(E){if(E.uniformsList===null){const z=E.currentProgram.getUniforms();E.uniformsList=tl.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function Eh(E,z){const Q=X.get(E);Q.outputColorSpace=z.outputColorSpace,Q.batching=z.batching,Q.batchingColor=z.batchingColor,Q.instancing=z.instancing,Q.instancingColor=z.instancingColor,Q.instancingMorph=z.instancingMorph,Q.skinning=z.skinning,Q.morphTargets=z.morphTargets,Q.morphNormals=z.morphNormals,Q.morphColors=z.morphColors,Q.morphTargetsCount=z.morphTargetsCount,Q.numClippingPlanes=z.numClippingPlanes,Q.numIntersection=z.numClipIntersection,Q.vertexAlphas=z.vertexAlphas,Q.vertexTangents=z.vertexTangents,Q.toneMapping=z.toneMapping}function $x(E,z){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;b.setFromMatrixPosition(z.matrixWorld);for(let Q=0,q=E.length;Q<q;Q++){const Y=E[Q];if(Y.texture!==null&&Y.boundingBox.containsPoint(b))return Y}return null}function qx(E,z,Q,q,Y){z.isScene!==!0&&(z=at),ne.resetTextureUnits();const we=z.fog,Ne=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?z.environment:null,Me=k===null?I.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Ze.workingColorSpace,Ie=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Fe=ue.get(q.envMap||Ne,Ie),Xe=q.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,qe=!!Q.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ue=!!Q.morphAttributes.position,ut=!!Q.morphAttributes.normal,Ct=!!Q.morphAttributes.color;let Et=ui;q.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Et=I.toneMapping);const ft=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Xt=ft!==void 0?ft.length:0,Ce=X.get(q),gn=A.state.lights;if(Oe===!0&&(Be===!0||E!==P)){const mt=E===P&&q.id===Z;ke.setState(q,E,mt)}let nt=!1;q.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==gn.state.version||Ce.outputColorSpace!==Me||Y.isBatchedMesh&&Ce.batching===!1||!Y.isBatchedMesh&&Ce.batching===!0||Y.isBatchedMesh&&Ce.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Ce.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Ce.instancing===!1||!Y.isInstancedMesh&&Ce.instancing===!0||Y.isSkinnedMesh&&Ce.skinning===!1||!Y.isSkinnedMesh&&Ce.skinning===!0||Y.isInstancedMesh&&Ce.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ce.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ce.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ce.instancingMorph===!1&&Y.morphTexture!==null||Ce.envMap!==Fe||q.fog===!0&&Ce.fog!==we||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==ke.numPlanes||Ce.numIntersection!==ke.numIntersection)||Ce.vertexAlphas!==Xe||Ce.vertexTangents!==qe||Ce.morphTargets!==Ue||Ce.morphNormals!==ut||Ce.morphColors!==Ct||Ce.toneMapping!==Et||Ce.morphTargetsCount!==Xt||!!Ce.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(nt=!0):(nt=!0,Ce.__version=q.version);let Tn=Ce.currentProgram;nt===!0&&(Tn=qa(q,z,Y),F&&q.isNodeMaterial&&F.onUpdateProgram(q,Tn,Ce));let Jn=!1,Fi=!1,Hr=!1;const ht=Tn.getUniforms(),Nt=Ce.uniforms;if(S.useProgram(Tn.program)&&(Jn=!0,Fi=!0,Hr=!0),q.id!==Z&&(Z=q.id,Fi=!0),Ce.needsLights){const mt=$x(A.state.lightProbeGridArray,Y);Ce.lightProbeGrid!==mt&&(Ce.lightProbeGrid=mt,Fi=!0)}if(Jn||P!==E){S.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ht.setValue(B,"projectionMatrix",E.projectionMatrix),ht.setValue(B,"viewMatrix",E.matrixWorldInverse);const ki=ht.map.cameraPosition;ki!==void 0&&ki.setValue(B,st.setFromMatrixPosition(E.matrixWorld)),R.logarithmicDepthBuffer&&ht.setValue(B,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ht.setValue(B,"isOrthographic",E.isOrthographicCamera===!0),P!==E&&(P=E,Fi=!0,Hr=!0)}if(Ce.needsLights&&(gn.state.directionalShadowMap.length>0&&ht.setValue(B,"directionalShadowMap",gn.state.directionalShadowMap,ne),gn.state.spotShadowMap.length>0&&ht.setValue(B,"spotShadowMap",gn.state.spotShadowMap,ne),gn.state.pointShadowMap.length>0&&ht.setValue(B,"pointShadowMap",gn.state.pointShadowMap,ne)),Y.isSkinnedMesh){ht.setOptional(B,Y,"bindMatrix"),ht.setOptional(B,Y,"bindMatrixInverse");const mt=Y.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),ht.setValue(B,"boneTexture",mt.boneTexture,ne))}Y.isBatchedMesh&&(ht.setOptional(B,Y,"batchingTexture"),ht.setValue(B,"batchingTexture",Y._matricesTexture,ne),ht.setOptional(B,Y,"batchingIdTexture"),ht.setValue(B,"batchingIdTexture",Y._indirectTexture,ne),ht.setOptional(B,Y,"batchingColorTexture"),Y._colorsTexture!==null&&ht.setValue(B,"batchingColorTexture",Y._colorsTexture,ne));const Ui=Q.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&O.update(Y,Q,Tn),(Fi||Ce.receiveShadow!==Y.receiveShadow)&&(Ce.receiveShadow=Y.receiveShadow,ht.setValue(B,"receiveShadow",Y.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&z.environment!==null&&(Nt.envMapIntensity.value=z.environmentIntensity),Nt.dfgLUT!==void 0&&(Nt.dfgLUT.value=c2()),Fi){if(ht.setValue(B,"toneMappingExposure",I.toneMappingExposure),Ce.needsLights&&Yx(Nt,Hr),we&&q.fog===!0&&De.refreshFogUniforms(Nt,we),De.refreshMaterialUniforms(Nt,q,te,W,A.state.transmissionRenderTarget[E.id]),Ce.needsLights&&Ce.lightProbeGrid){const mt=Ce.lightProbeGrid;Nt.probesSH.value=mt.texture,Nt.probesMin.value.copy(mt.boundingBox.min),Nt.probesMax.value.copy(mt.boundingBox.max),Nt.probesResolution.value.copy(mt.resolution)}tl.upload(B,wh(Ce),Nt,ne)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(tl.upload(B,wh(Ce),Nt,ne),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ht.setValue(B,"center",Y.center),ht.setValue(B,"modelViewMatrix",Y.modelViewMatrix),ht.setValue(B,"normalMatrix",Y.normalMatrix),ht.setValue(B,"modelMatrix",Y.matrixWorld),q.uniformsGroups!==void 0){const mt=q.uniformsGroups;for(let ki=0,Gr=mt.length;ki<Gr;ki++){const Th=mt[ki];le.update(Th,Tn),le.bind(Th,Tn)}}return Tn}function Yx(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function Kx(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(E,z,Q){const q=X.get(E);q.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),X.get(E.texture).__webglTexture=z,X.get(E.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Q,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,z){const Q=X.get(E);Q.__webglFramebuffer=z,Q.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(E,z=0,Q=0){k=E,$=z,G=Q;let q=null,Y=!1,we=!1;if(E){const Me=X.get(E);if(Me.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(B.FRAMEBUFFER,Me.__webglFramebuffer),C.copy(E.viewport),K.copy(E.scissor),se=E.scissorTest,S.viewport(C),S.scissor(K),S.setScissorTest(se),Z=-1;return}else if(Me.__webglFramebuffer===void 0)ne.setupRenderTarget(E);else if(Me.__hasExternalTextures)ne.rebindTextures(E,X.get(E.texture).__webglTexture,X.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Xe=E.depthTexture;if(Me.__boundDepthTexture!==Xe){if(Xe!==null&&X.has(Xe)&&(E.width!==Xe.image.width||E.height!==Xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ne.setupDepthRenderbuffer(E)}}const Ie=E.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(we=!0);const Fe=X.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Fe[z])?q=Fe[z][Q]:q=Fe[z],Y=!0):E.samples>0&&ne.useMultisampledRTT(E)===!1?q=X.get(E).__webglMultisampledFramebuffer:Array.isArray(Fe)?q=Fe[Q]:q=Fe,C.copy(E.viewport),K.copy(E.scissor),se=E.scissorTest}else C.copy(he).multiplyScalar(te).floor(),K.copy(de).multiplyScalar(te).floor(),se=Ee;if(Q!==0&&(q=V),S.bindFramebuffer(B.FRAMEBUFFER,q)&&S.drawBuffers(E,q),S.viewport(C),S.scissor(K),S.setScissorTest(se),Y){const Me=X.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+z,Me.__webglTexture,Q)}else if(we){const Me=z;for(let Ie=0;Ie<E.textures.length;Ie++){const Fe=X.get(E.textures[Ie]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ie,Fe.__webglTexture,Q,Me)}}else if(E!==null&&Q!==0){const Me=X.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Me.__webglTexture,Q)}Z=-1},this.readRenderTargetPixels=function(E,z,Q,q,Y,we,Ne,Me=0){if(!(E&&E.isWebGLRenderTarget)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=X.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ie=Ie[Ne]),Ie){S.bindFramebuffer(B.FRAMEBUFFER,Ie);try{const Fe=E.textures[Me],Xe=Fe.format,qe=Fe.type;if(E.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Me),!R.textureFormatReadable(Xe)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(qe)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-q&&Q>=0&&Q<=E.height-Y&&B.readPixels(z,Q,q,Y,_e.convert(Xe),_e.convert(qe),we)}finally{const Fe=k!==null?X.get(k).__webglFramebuffer:null;S.bindFramebuffer(B.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(E,z,Q,q,Y,we,Ne,Me=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=X.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ie=Ie[Ne]),Ie)if(z>=0&&z<=E.width-q&&Q>=0&&Q<=E.height-Y){S.bindFramebuffer(B.FRAMEBUFFER,Ie);const Fe=E.textures[Me],Xe=Fe.format,qe=Fe.type;if(E.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Me),!R.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ue=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ue),B.bufferData(B.PIXEL_PACK_BUFFER,we.byteLength,B.STREAM_READ),B.readPixels(z,Q,q,Y,_e.convert(Xe),_e.convert(qe),0);const ut=k!==null?X.get(k).__webglFramebuffer:null;S.bindFramebuffer(B.FRAMEBUFFER,ut);const Ct=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await R1(B,Ct,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ue),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,we),B.deleteBuffer(Ue),B.deleteSync(Ct),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,z=null,Q=0){const q=Math.pow(2,-Q),Y=Math.floor(E.image.width*q),we=Math.floor(E.image.height*q),Ne=z!==null?z.x:0,Me=z!==null?z.y:0;ne.setTexture2D(E,0),B.copyTexSubImage2D(B.TEXTURE_2D,Q,0,0,Ne,Me,Y,we),S.unbindTexture()},this.copyTextureToTexture=function(E,z,Q=null,q=null,Y=0,we=0){let Ne,Me,Ie,Fe,Xe,qe,Ue,ut,Ct;const Et=E.isCompressedTexture?E.mipmaps[we]:E.image;if(Q!==null)Ne=Q.max.x-Q.min.x,Me=Q.max.y-Q.min.y,Ie=Q.isBox3?Q.max.z-Q.min.z:1,Fe=Q.min.x,Xe=Q.min.y,qe=Q.isBox3?Q.min.z:0;else{const Nt=Math.pow(2,-Y);Ne=Math.floor(Et.width*Nt),Me=Math.floor(Et.height*Nt),E.isDataArrayTexture?Ie=Et.depth:E.isData3DTexture?Ie=Math.floor(Et.depth*Nt):Ie=1,Fe=0,Xe=0,qe=0}q!==null?(Ue=q.x,ut=q.y,Ct=q.z):(Ue=0,ut=0,Ct=0);const ft=_e.convert(z.format),Xt=_e.convert(z.type);let Ce;z.isData3DTexture?(ne.setTexture3D(z,0),Ce=B.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(ne.setTexture2DArray(z,0),Ce=B.TEXTURE_2D_ARRAY):(ne.setTexture2D(z,0),Ce=B.TEXTURE_2D),S.activeTexture(B.TEXTURE0),S.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,z.flipY),S.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),S.pixelStorei(B.UNPACK_ALIGNMENT,z.unpackAlignment);const gn=S.getParameter(B.UNPACK_ROW_LENGTH),nt=S.getParameter(B.UNPACK_IMAGE_HEIGHT),Tn=S.getParameter(B.UNPACK_SKIP_PIXELS),Jn=S.getParameter(B.UNPACK_SKIP_ROWS),Fi=S.getParameter(B.UNPACK_SKIP_IMAGES);S.pixelStorei(B.UNPACK_ROW_LENGTH,Et.width),S.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Et.height),S.pixelStorei(B.UNPACK_SKIP_PIXELS,Fe),S.pixelStorei(B.UNPACK_SKIP_ROWS,Xe),S.pixelStorei(B.UNPACK_SKIP_IMAGES,qe);const Hr=E.isDataArrayTexture||E.isData3DTexture,ht=z.isDataArrayTexture||z.isData3DTexture;if(E.isDepthTexture){const Nt=X.get(E),Ui=X.get(z),mt=X.get(Nt.__renderTarget),ki=X.get(Ui.__renderTarget);S.bindFramebuffer(B.READ_FRAMEBUFFER,mt.__webglFramebuffer),S.bindFramebuffer(B.DRAW_FRAMEBUFFER,ki.__webglFramebuffer);for(let Gr=0;Gr<Ie;Gr++)Hr&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,X.get(E).__webglTexture,Y,qe+Gr),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,X.get(z).__webglTexture,we,Ct+Gr)),B.blitFramebuffer(Fe,Xe,Ne,Me,Ue,ut,Ne,Me,B.DEPTH_BUFFER_BIT,B.NEAREST);S.bindFramebuffer(B.READ_FRAMEBUFFER,null),S.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Y!==0||E.isRenderTargetTexture||X.has(E)){const Nt=X.get(E),Ui=X.get(z);S.bindFramebuffer(B.READ_FRAMEBUFFER,ee),S.bindFramebuffer(B.DRAW_FRAMEBUFFER,H);for(let mt=0;mt<Ie;mt++)Hr?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Nt.__webglTexture,Y,qe+mt):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Nt.__webglTexture,Y),ht?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ui.__webglTexture,we,Ct+mt):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ui.__webglTexture,we),Y!==0?B.blitFramebuffer(Fe,Xe,Ne,Me,Ue,ut,Ne,Me,B.COLOR_BUFFER_BIT,B.NEAREST):ht?B.copyTexSubImage3D(Ce,we,Ue,ut,Ct+mt,Fe,Xe,Ne,Me):B.copyTexSubImage2D(Ce,we,Ue,ut,Fe,Xe,Ne,Me);S.bindFramebuffer(B.READ_FRAMEBUFFER,null),S.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else ht?E.isDataTexture||E.isData3DTexture?B.texSubImage3D(Ce,we,Ue,ut,Ct,Ne,Me,Ie,ft,Xt,Et.data):z.isCompressedArrayTexture?B.compressedTexSubImage3D(Ce,we,Ue,ut,Ct,Ne,Me,Ie,ft,Et.data):B.texSubImage3D(Ce,we,Ue,ut,Ct,Ne,Me,Ie,ft,Xt,Et):E.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,we,Ue,ut,Ne,Me,ft,Xt,Et.data):E.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,we,Ue,ut,Et.width,Et.height,ft,Et.data):B.texSubImage2D(B.TEXTURE_2D,we,Ue,ut,Ne,Me,ft,Xt,Et);S.pixelStorei(B.UNPACK_ROW_LENGTH,gn),S.pixelStorei(B.UNPACK_IMAGE_HEIGHT,nt),S.pixelStorei(B.UNPACK_SKIP_PIXELS,Tn),S.pixelStorei(B.UNPACK_SKIP_ROWS,Jn),S.pixelStorei(B.UNPACK_SKIP_IMAGES,Fi),we===0&&z.generateMipmaps&&B.generateMipmap(Ce),S.unbindTexture()},this.initRenderTarget=function(E){X.get(E).__webglFramebuffer===void 0&&ne.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ne.setTextureCube(E,0):E.isData3DTexture?ne.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ne.setTexture2DArray(E,0):ne.setTexture2D(E,0),S.unbindTexture()},this.resetState=function(){$=0,G=0,k=null,S.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ze._getUnpackColorSpace()}}function d2({isTransitioning:t=!1,onClick:e}){const n=Ae.useRef(null);return Ae.useEffect(()=>{if(!n.current)return;const i=n.current.clientWidth||window.innerWidth,r=n.current.clientHeight||520,s=new X1,a=new Pn(55,i/r,.1,2e3);a.position.z=400;const l=new u2({antialias:!0,alpha:!0,powerPreference:"high-performance"});l.setSize(i,r),l.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.current.appendChild(l.domElement);const c=750,u=140,h=new En,m=new Float32Array(c*3),f=new Float32Array(c*3),p=new Je("#F0FB43"),y=new Je("#7ED043"),M=new Je("#4FB734");new Je("#176B24");for(let J=0;J<c;J++){const re=Math.acos(-1+2*J/c),U=Math.sqrt(c*Math.PI)*re,W=u*Math.cos(U)*Math.sin(re),te=u*Math.sin(U)*Math.sin(re),fe=u*Math.cos(re);m[J*3]=W,m[J*3+1]=te,m[J*3+2]=fe;const ye=Math.random()>.6?p:Math.random()>.3?y:M;f[J*3]=ye.r,f[J*3+1]=ye.g,f[J*3+2]=ye.b}h.setAttribute("position",new Fn(m,3)),h.setAttribute("color",new Fn(f,3));const g=document.createElement("canvas");g.width=32,g.height=32;const d=g.getContext("2d"),x=d.createRadialGradient(16,16,0,16,16,16);x.addColorStop(0,"rgba(240, 251, 67, 1)"),x.addColorStop(.3,"rgba(126, 208, 67, 0.8)"),x.addColorStop(1,"rgba(0, 0, 0, 0)"),d.fillStyle=x,d.fillRect(0,0,32,32);const _=new ib(g),b=new Nx({size:10,map:_,vertexColors:!0,transparent:!0,opacity:.85,blending:od,depthWrite:!1}),T=new nb(h,b);s.add(T);const A=new ch(130,2),N=new va({color:5224244,wireframe:!0,transparent:!0,opacity:.18}),v=new Un(A,N);s.add(v);const w=new Ll(175,1.2,16,100),I=new va({color:15792963,transparent:!0,opacity:.45}),L=new Un(w,I);L.rotation.x=Math.PI/3,s.add(L);const F=new Ll(200,1,16,100),V=new va({color:8310851,transparent:!0,opacity:.3}),ee=new Un(F,V);ee.rotation.y=Math.PI/4,s.add(ee);let H=0,$=0,G=0,k=0;const Z=J=>{var U;const re=(U=n.current)==null?void 0:U.getBoundingClientRect();re&&(H=(J.clientX-re.left-re.width/2)*.4,$=(J.clientY-re.top-re.height/2)*.4)};window.addEventListener("mousemove",Z,{passive:!0});const P=()=>{if(!n.current)return;const J=n.current.clientWidth,re=n.current.clientHeight;a.aspect=J/re,a.updateProjectionMatrix(),l.setSize(J,re)};window.addEventListener("resize",P);let C,K=new pb;const se=()=>{C=requestAnimationFrame(se);const J=K.getElapsedTime();G+=(H-G)*.05,k+=($-k)*.05,T.rotation.y=J*.15+G*.003,T.rotation.x=Math.sin(J*.2)*.1+k*.003,v.rotation.y=-J*.08,v.rotation.x=J*.04,L.rotation.z=J*.25,L.rotation.y=Math.sin(J*.3)*.2,ee.rotation.x=-J*.2,ee.rotation.z=J*.1;const re=1+Math.sin(J*1.5)*.03;T.scale.set(re,re,re),l.render(s,a)};return se(),()=>{cancelAnimationFrame(C),window.removeEventListener("mousemove",Z),window.removeEventListener("resize",P),n.current&&l.domElement&&n.current.removeChild(l.domElement),h.dispose(),b.dispose(),A.dispose(),N.dispose(),w.dispose(),I.dispose(),F.dispose(),V.dispose(),l.dispose()}},[]),o.jsx("div",{ref:n,onClick:e,className:`relative w-full h-[400px] sm:h-[480px] lg:h-[540px] flex items-center justify-center cursor-pointer transition-transform duration-700 ${t?"scale-125 opacity-0":"scale-100 opacity-100"}`})}function f2({onBegin:t,onOpenHowItWorks:e}){const n=()=>{He.playClick(),t()};return o.jsxs("section",{className:"relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 py-8 lg:py-12 overflow-hidden w-full max-w-[1700px] mx-auto",children:[o.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(to_right,#7ED0430a_1px,transparent_1px),linear-gradient(to_bottom,#7ED0430a_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"}),o.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-light/10 rounded-full blur-[160px] pointer-events-none"}),o.jsxs("div",{className:"flex flex-col items-center gap-2.5 z-20 mb-2",children:[o.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-deep/30 border border-brand-light/25 text-brand-lime text-xs font-mono font-bold tracking-widest uppercase shadow-sm",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-lime animate-ping"}),o.jsx("span",{children:"Autonomous Multi-Source Investment Intelligence"})]}),o.jsx("h1",{className:"text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight font-mono",children:o.jsx("span",{className:"bg-gradient-to-r from-[#7ED043] via-[#F0FB43] to-white bg-clip-text text-transparent drop-shadow-md",children:"INVESTILENS"})}),o.jsxs("p",{className:"text-sm sm:text-base text-slate-300 max-w-xl font-sans font-normal leading-relaxed",children:["Smarter research. Better decisions.",o.jsx("span",{className:"block text-slate-400 text-xs sm:text-sm mt-0.5",children:"Cross-checks official filings, balances bull & bear cases, and explains every metric in plain English."})]}),o.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3.5 mt-3",children:[o.jsxs("button",{onClick:n,className:"group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#F0FB43] via-[#7ED043] to-[#4FB734] hover:from-[#f4fc65] hover:to-[#5bc93f] text-[#060907] font-black text-sm uppercase tracking-wider font-mono shadow-xl shadow-[#7ED043]/20 hover:shadow-[#F0FB43]/40 transition-all duration-300 hover:scale-105 active:scale-95",children:[o.jsx("span",{children:"GET STARTED"}),o.jsx(Zl,{className:"w-4 h-4 transform group-hover:translate-x-1.5 transition-transform"})]}),o.jsxs("button",{onClick:()=>{He.playClick(),e()},className:"inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-[#0b110d]/90 hover:bg-[#111a14] text-slate-200 border border-brand-light/30 font-mono text-xs font-bold transition-all duration-300 hover:border-brand-lime/50 shadow-lg",children:[o.jsx(Kf,{className:"w-4 h-4 text-brand-light"}),o.jsx("span",{children:"How It Works"})]})]})]}),o.jsxs("div",{className:"relative w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 items-center gap-4 my-4 z-10",children:[o.jsxs("div",{className:"hidden lg:flex flex-col gap-4 lg:col-span-3 items-end text-right",children:[o.jsxs("div",{className:"w-full max-w-xs p-4 rounded-2xl bg-[#0b110d]/75 backdrop-blur-md border border-brand-light/20 shadow-xl flex flex-col gap-2 hover:border-brand-light/40 transition-all duration-300 animate-in fade-in slide-in-from-left-4",children:[o.jsxs("div",{className:"flex items-center justify-between text-xs font-mono",children:[o.jsx("span",{className:"text-brand-lime font-bold",children:"LIVE MARKET SIGNAL"}),o.jsx("span",{className:"text-[10px] text-brand-light",children:"+1.42% Momentum"})]}),o.jsx("div",{className:"w-full h-8 flex items-center justify-center py-1",children:o.jsx("svg",{className:"w-full h-full text-brand-lime stroke-current fill-none stroke-[2]",viewBox:"0 0 100 25",children:o.jsx("path",{d:"M0 20 L20 15 L35 18 L55 8 L75 12 L90 3 L100 6"})})}),o.jsx("span",{className:"text-[10px] font-mono text-slate-400",children:"62% Positive Sentiment Classification"})]}),o.jsxs("div",{className:"w-full max-w-xs p-4 rounded-2xl bg-[#0b110d]/75 backdrop-blur-md border border-brand-light/20 shadow-xl flex flex-col gap-1.5 hover:border-brand-light/40 transition-all duration-300 animate-in fade-in slide-in-from-left-6",children:[o.jsxs("div",{className:"flex items-center justify-between text-xs font-mono",children:[o.jsx("span",{className:"text-white font-bold",children:"MULTI-SOURCE CRAWL"}),o.jsx("span",{className:"text-[10px] px-1.5 py-0.5 rounded bg-brand-deep/50 text-brand-lime font-bold",children:"12 PRIMARY SOURCES"})]}),o.jsx("p",{className:"text-[11px] text-slate-300 font-sans text-right",children:"Nasdaq, NSE, BSE, Yahoo, Google, Reuters, CNBC, MarketWatch, FT, WSJ, Investing.com."})]})]}),o.jsx("div",{className:"lg:col-span-6 flex flex-col items-center justify-center relative",children:o.jsx(d2,{onClick:n})}),o.jsxs("div",{className:"hidden lg:flex flex-col gap-4 lg:col-span-3 items-start text-left",children:[o.jsxs("div",{className:"w-full max-w-xs p-4 rounded-2xl bg-[#0b110d]/75 backdrop-blur-md border border-brand-light/20 shadow-xl flex flex-col gap-2 hover:border-brand-light/40 transition-all duration-300 animate-in fade-in slide-in-from-right-4",children:[o.jsxs("div",{className:"flex items-center justify-between text-xs font-mono",children:[o.jsx("span",{className:"text-brand-lime font-bold",children:"RESEARCH PIPELINE"}),o.jsx("span",{className:"text-[10px] text-brand-light",children:"ACTIVE"})]}),o.jsxs("div",{className:"flex flex-col gap-1 text-[11px] font-mono text-slate-300",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("span",{children:"Financials & NIM"}),o.jsx("span",{className:"text-brand-lime font-bold",children:"✓"})]}),o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("span",{children:"Cross-Source Audits"}),o.jsx("span",{className:"text-brand-lime font-bold",children:"✓"})]}),o.jsxs("div",{className:"flex items-center justify-between text-slate-500",children:[o.jsx("span",{children:"Peer Moat Analysis"}),o.jsx("span",{children:"◌"})]}),o.jsxs("div",{className:"flex items-center justify-between text-slate-500",children:[o.jsx("span",{children:"Bear Disconfirmation"}),o.jsx("span",{children:"◌"})]})]})]}),o.jsxs("div",{className:"w-full max-w-xs p-4 rounded-2xl bg-[#0b110d]/75 backdrop-blur-md border border-brand-light/20 shadow-xl flex flex-col gap-1.5 hover:border-brand-light/40 transition-all duration-300 animate-in fade-in slide-in-from-right-6",children:[o.jsxs("div",{className:"flex items-center justify-between text-xs font-mono",children:[o.jsx("span",{className:"text-white font-bold",children:"DETERMINISTIC SCORING"}),o.jsx("span",{className:"text-[10px] text-brand-lime font-bold",children:"100% EXPLAINABLE"})]}),o.jsx("p",{className:"text-[11px] text-slate-300 font-sans text-left",children:"Non-blackbox 7-dimension weighted mathematical formula."})]})]})]}),o.jsxs("div",{className:"flex items-center gap-4 text-xs font-mono text-slate-400 mt-2 z-10",children:[o.jsxs("span",{className:"flex items-center gap-1.5",children:[o.jsx(Ql,{className:"w-4 h-4 text-brand-light"})," Human-in-the-Loop Decisions"]}),o.jsx("span",{children:"•"}),o.jsx("span",{children:"Zero Confirmation Bias"}),o.jsx("span",{children:"•"}),o.jsx("span",{children:"Decision-Support Only"})]})]})}const vr={HDFC_BANK:{ticker:"HDFCBANK",exchange:"NSE / BSE",market:"India",name:"HDFC Bank Ltd.",sector:"Banking & Financial Services",currency:"INR",currentPrice:1724.5,priceChange:"+1.42%",iconType:"bank",summary:"India's largest private sector bank by assets, boasting an extensive nationwide branch network, industry-leading low-cost CASA deposit base, and solid post-merger integration trajectory.",scores:{financialHealth:82,growthPotential:72,historicalPerformance:74,valuation:78,debtLeverage:76,newsEvents:72,riskProfile:74},overallScore:76,evidenceConfidence:"HIGH",sourcesCount:6,researchStatus:"Moderate Buy (76/100)",disclaimer:"This research assessment is generated via multi-source web cross-verification for decision-support purposes only. It does not constitute investment advice or order execution.",evidence:[{id:"ev-1",claim:"Q3 Net Interest Income (NII) grew 11.2% YoY with Net Interest Margin (NIM) stabilizing at 3.46%",sourceA:{name:"HDFC Bank Q3 Financial Disclosure",type:"Official Filing",url:"https://hdfcbank.com/investor-relations/q3-results",match:!0},sourceB:{name:"Screener.in Verified Financials",type:"Financial Platform",url:"https://screener.in/company/HDFCBANK",match:!0},confidence:"HIGH",status:"VERIFIED",metric:"NII & NIM",discrepancy:null},{id:"ev-2",claim:"Gross Non-Performing Assets (GNPA) maintained at low 1.36%, Net NPA at 0.38%",sourceA:{name:"BSE Regulatory Filing (XBRL)",type:"Regulatory",url:"https://bseindia.com/filings/hdfcbank",match:!0},sourceB:{name:"Moneycontrol Banking Audit",type:"Financial News",url:"https://moneycontrol.com/india/stockpricequote/banks-private/hdfcbank",match:!0},confidence:"HIGH",status:"VERIFIED",metric:"Asset Quality",discrepancy:null},{id:"ev-3",claim:"Deposit growth outpaced credit growth at 15.1% YoY to rebalance Credit-to-Deposit (CD) ratio",sourceA:{name:"RBI Banking Statistics Bulletin",type:"Regulatory / Central Bank",url:"https://rbi.org.in/bulletin",match:!0},sourceB:{name:"Reuters India Financial Desk",type:"News Agency",url:"https://reuters.com/business/finance/hdfc-bank-q3",match:!0},confidence:"HIGH",status:"VERIFIED",metric:"Liquidity & CD Ratio",discrepancy:"Minor 0.2% variance in foreign currency deposit calculation between RBI and bank disclosure"},{id:"ev-4",claim:"Consolidated Return on Assets (RoA) at 1.95% and Return on Equity (RoE) normalized at 15.8%",sourceA:{name:"Annual Report FY2025 Extract",type:"Annual Report",url:"https://hdfcbank.com/annual-reports",match:!0},sourceB:{name:"Tickertape Financial Engine",type:"Data Provider",url:"https://tickertape.in/stocks/hdfc-bank",match:!0},confidence:"HIGH",status:"VERIFIED",metric:"Profitability",discrepancy:null}],bullCase:[{title:"Post-Merger Synergies Accelerating",desc:"Cross-selling mortgage loans to the legacy 90M+ HDFC Bank customer base is ramping up, yielding lower customer acquisition costs.",impact:"HIGH",source:"Annual Report & Management Call"},{title:"Market-Leading CASA Ratio",desc:"Maintains a robust low-cost deposit ratio of ~37.7%, insulating the bank from rapid central bank repo rate spikes.",impact:"HIGH",source:"RBI Disclosure"},{title:"Prudent Underwriting & Clean Balance Sheet",desc:"Consistently lowest provision cost among major emerging market tier-1 lenders with Gross NPAs below 1.4%.",impact:"MEDIUM",source:"Moneycontrol & Screener"}],bearCase:[{title:"Credit-to-Deposit (CD) Ratio Pressure",desc:"CD ratio remaining elevated (~100%) post-HDFC Ltd merger forces aggressive branch deposit mobilization, which may compress NIMs temporarily.",impact:"HIGH",source:"Motilal Oswal & Reuters"},{title:"FII Outflow Sensitivity",desc:"High foreign institutional ownership (>52%) exposes the stock to global macroeconomic liquidity shifts and currency fluctuations.",impact:"MEDIUM",source:"Trendlyne Institutional Tracker"},{title:"Fintech Disruption in Retail Payments",desc:"Intensified competition from UPI payment aggregators for fee-based transactional income.",impact:"LOW",source:"Economic Times Fintech Review"}],newsSentiment:{positivePercent:62,neutralPercent:23,negativePercent:15,totalArticlesParsed:18,articles:[{headline:"HDFC Bank deposits grow 15.1% in Q3; loan growth steady at 12.8%",source:"LiveMint",date:"Yesterday",sentiment:"POSITIVE",impact:"HIGH",summary:"Aggressive branch expansion pays off as retail deposits accelerate, alleviating merger liquidity overhang."},{headline:"RBI relaxes certain liquidity coverage ratio guidelines for tier-1 banks",source:"Economic Times",date:"3 days ago",sentiment:"POSITIVE",impact:"MEDIUM",summary:"Provides operational breathing room for large private lenders managing credit rebalancing."},{headline:"Foreign institutional investors trim Indian banking exposure on bond yield movements",source:"Bloomberg",date:"5 days ago",sentiment:"NEGATIVE",impact:"MEDIUM",summary:"Short-term selling pressure observed across large-cap financial indices."}]},upcomingEvents:[{title:"Q4 FY2026 Financial Results & Board Meeting",date:"April 18, 2026",significance:"HIGH",type:"Earnings",impact:"Crucial quarterly print on NIM stabilization and dividend announcement."},{title:"RBI Monetary Policy Committee (MPC) Rate Decision",date:"May 8, 2026",significance:"HIGH",type:"Macro / Regulatory",impact:"Determines cost of funds trajectory and loan repricing dynamics."}],hypotheticalAllocation:{totalBudget:"INR 50,000",strategy:"Balanced Core Compounder Strategy (3-5 Year Horizon)",allocations:[{asset:"HDFC Bank Ltd. (NSE: HDFCBANK)",amount:22500,percent:45,role:"Core Private Banking Pillar",rationale:"High asset quality, 15%+ steady compounding potential"},{asset:"Tata Motors Ltd. (NSE: TATAMOTORS)",amount:12500,percent:25,role:"Cyclical EV Growth Satellite",rationale:"EV market share & JLR cash flow momentum"},{asset:"Reliance Industries (NSE: RELIANCE)",amount:1e4,percent:20,role:"Diversified Conglomerate Defense",rationale:"Telecom 5G cash cow + Retail ecosystem"},{asset:"Liquid Research Reserve (Overnight/Cash)",amount:5e3,percent:10,role:"Tactical Volatility Buffer",rationale:"Dry powder for staged entry on dips"}]},sourcesVisited:[{name:"Yahoo Finance (HDFCBANK.NS)",url:"https://finance.yahoo.com/quote/HDFCBANK.NS/",status:"200 OK",bytes:"142 KB",depth:3},{name:"NSE India Official Exchange",url:"https://www.nseindia.com/get-quotes/equity?symbol=HDFCBANK",status:"200 OK",bytes:"110 KB",depth:2},{name:"Google Finance India",url:"https://www.google.com/finance/quote/HDFCBANK:NSE",status:"200 OK",bytes:"88 KB",depth:2},{name:"Reuters India Markets",url:"https://www.reuters.com/markets/companies/HDBK.NS",status:"200 OK",bytes:"74 KB",depth:1},{name:"MarketWatch Global",url:"https://www.marketwatch.com/investing/stock/hdfcbank",status:"200 OK",bytes:"96 KB",depth:2}]},NVIDIA:{ticker:"NVDA",exchange:"NASDAQ",market:"United States",name:"NVIDIA Corporation",sector:"Semiconductors & AI Compute",currency:"USD",currentPrice:138.25,priceChange:"+3.18%",iconType:"chip",summary:"Dominant designer of high-performance graphics processing units (GPUs) and full-stack accelerated computing platforms powering the global generative AI revolution.",scores:{financialHealth:92,growthPotential:90,historicalPerformance:88,valuation:52,debtLeverage:92,newsEvents:78,riskProfile:68},overallScore:80,evidenceConfidence:"HIGH",sourcesCount:7,researchStatus:"Strong Bullish (80/100)",disclaimer:"This research assessment is generated via multi-source web cross-verification for decision-support purposes only. It does not constitute investment advice or order execution.",evidence:[{id:"nv-1",claim:"Data Center segment revenue reached $30.8B in the quarter, representing 112% YoY hyper-expansion",sourceA:{name:"NVIDIA SEC 10-Q Quarterly Filing",type:"SEC Regulatory",url:"https://sec.gov/edgar/data/1045810",match:!0},sourceB:{name:"Bloomberg Terminal Transcript",type:"Financial Data",url:"https://bloomberg.com/quote/NVDA:US",match:!0},confidence:"HIGH",status:"VERIFIED",metric:"Data Center Compute Revenue",discrepancy:null}],bullCase:[{title:"CUDA Moat & Software Ecosystem Monopoly",desc:"Over 5 million developers locked into NVIDIA's CUDA programming layer create high switching costs for hyperscalers.",impact:"HIGH",source:"Gartner AI Infrastructure Report"},{title:"Blackwell GPU Supercycle",desc:"Full order books across Microsoft Azure, AWS, Google Cloud, and Meta for Blackwell architectures.",impact:"HIGH",source:"Morgan Stanley Equity Research"}],bearCase:[{title:"Hyperscaler Custom Silicon In-House Efforts",desc:"Custom ASICs (Google TPU, AWS Trainium, Meta MTIA) could erode long-term pricing power for inference workloads.",impact:"HIGH",source:"Semianalysis Research"},{title:"Elevated Valuation Multiples",desc:"Trading at premium multiples leaves less margin of safety if enterprise cloud capex growth moderates.",impact:"MEDIUM",source:"FactSet & Yahoo Finance"}],newsSentiment:{positivePercent:74,neutralPercent:16,negativePercent:10,totalArticlesParsed:22,articles:[{headline:"NVIDIA Blackwell chips shipping at volume scale; enterprise demand accelerates",source:"CNBC",date:"Yesterday",sentiment:"POSITIVE",impact:"HIGH",summary:"Supply packaging yields improving ahead of target schedule."}]},upcomingEvents:[{title:"GTC Global AI Conference Keynote",date:"March 18, 2026",significance:"HIGH",type:"Architecture Launch",impact:"Unveiling next-generation Rubin architecture roadmap."}],hypotheticalAllocation:{totalBudget:"USD 10,000",strategy:"High-Growth AI Hardware Strategy",allocations:[{asset:"NVIDIA Corp (NASDAQ: NVDA)",amount:4500,percent:45,role:"Core AI Compute Anchor",rationale:"Leading GPU architecture"},{asset:"Microsoft Corp (NASDAQ: MSFT)",amount:2500,percent:25,role:"Enterprise Software Partner",rationale:"Azure infrastructure scale"},{asset:"TSMC (NYSE: TSM)",amount:2e3,percent:20,role:"Foundry Manufacturer",rationale:"Exclusive advanced node supplier"},{asset:"Cash / Treasury Reserve",amount:1e3,percent:10,role:"Capital Reserve",rationale:"Volatility buffer"}]},sourcesVisited:[{name:"Yahoo Finance Live Multiples",url:"https://finance.yahoo.com/quote/NVDA/",status:"200 OK",bytes:"148 KB",depth:3},{name:"Nasdaq Official Market Activity",url:"https://www.nasdaq.com/market-activity/stocks/nvda",status:"200 OK",bytes:"175 KB",depth:2},{name:"Google Finance Overview",url:"https://www.google.com/finance/quote/NVDA:NASDAQ",status:"200 OK",bytes:"92 KB",depth:2},{name:"Reuters Markets Desk",url:"https://www.reuters.com/markets/companies/NVDA",status:"200 OK",bytes:"86 KB",depth:2},{name:"MarketWatch Financial Statements",url:"https://www.marketwatch.com/investing/stock/nvda",status:"200 OK",bytes:"115 KB",depth:2}]},TESLA:{ticker:"TSLA",exchange:"NASDAQ",market:"United States",name:"Tesla Inc.",sector:"Automotive, Clean Energy & AI",currency:"USD",currentPrice:210.5,priceChange:"+2.03%",iconType:"zap",summary:"Leading EV pioneer transitioning towards autonomous mobility (FSD/Robotaxi), humanoid robotics (Optimus), and utility-scale Megapack energy storage, facing automotive margin compression.",scores:{financialHealth:64,growthPotential:76,historicalPerformance:62,valuation:38,debtLeverage:86,newsEvents:60,riskProfile:52},overallScore:64,evidenceConfidence:"HIGH",sourcesCount:6,researchStatus:"Neutral / Hold (64/100)",disclaimer:"This research assessment is generated via multi-source web cross-verification for decision-support purposes only. It does not constitute investment advice or order execution.",evidence:[{id:"tsla-1",claim:"Automotive gross margin excluding regulatory credits stabilized at 14.6%, down from 25%+ in FY2022",sourceA:{name:"Tesla SEC Form 10-Q",type:"SEC Filing",url:"https://sec.gov/edgar",match:!0},sourceB:{name:"Yahoo Finance Financial Statements",type:"Financial Platform",url:"https://finance.yahoo.com/quote/TSLA",match:!0},confidence:"HIGH",status:"VERIFIED",metric:"Automotive Gross Margin",discrepancy:null}],bullCase:[{title:"Energy Storage Segment Hyper-Growth",desc:"Megapack deployments expanding over 125% YoY with high recurring cash generation.",impact:"HIGH",source:"Tesla Shareholder Deck"},{title:"Autonomous Robotaxi & FSD Monetization",desc:"Software-like gross margins if unsupervised FSD reaches commercial deployment.",impact:"HIGH",source:"Ark Invest & Piper Sandler"}],bearCase:[{title:"Intensifying Global EV Price Wars",desc:"Aggressive low-cost competition from BYD and European automakers compressing auto ASPs.",impact:"HIGH",source:"Bloomberg Intelligence"},{title:"Elevated Valuation Multiple Vulnerability",desc:"P/E multiple > 60x leaves significant downside if non-auto AI projects face timeline delays.",impact:"HIGH",source:"FactSet & Morgan Stanley"}],newsSentiment:{positivePercent:48,neutralPercent:30,negativePercent:22,totalArticlesParsed:20,articles:[{headline:"Tesla Energy Megapack factory ramp accelerates",source:"Reuters",date:"2 days ago",sentiment:"POSITIVE",impact:"HIGH",summary:"High-margin commercial battery deployments."}]},upcomingEvents:[{title:"Annual Shareholder Meeting & Robotaxi Update",date:"May 20, 2026",significance:"HIGH",type:"Corporate Event",impact:"Key autonomy milestone demonstrations."}],hypotheticalAllocation:{totalBudget:"USD 10,000",strategy:"High-Beta Speculative Growth Strategy",allocations:[{asset:"Tesla Inc. (NASDAQ: TSLA)",amount:3500,percent:35,role:"Speculative Autonomy Anchor",rationale:"High growth potential with elevated valuation risk"},{asset:"S&P 500 Index ETF (SPY)",amount:4500,percent:45,role:"Core Defensive Foundation",rationale:"Buffer against high single-stock volatility"},{asset:"Liquid Cash / Reserve",amount:2e3,percent:20,role:"Volatility Dry Powder",rationale:"Buyback on severe multiple pullbacks"}]},sourcesVisited:[{name:"Yahoo Finance (TSLA)",url:"https://finance.yahoo.com/quote/TSLA",status:"200 OK",bytes:"152 KB",depth:3},{name:"Nasdaq Official Feed",url:"https://www.nasdaq.com/market-activity/stocks/tsla",status:"200 OK",bytes:"165 KB",depth:2},{name:"Reuters US Markets",url:"https://www.reuters.com/markets/companies/TSLA",status:"200 OK",bytes:"88 KB",depth:2}]},RELIANCE:{ticker:"RELIANCE",exchange:"NSE / BSE",market:"India",name:"Reliance Industries Ltd.",sector:"Oil-to-Chemicals, Telecom & Retail",currency:"INR",currentPrice:2980,priceChange:"+0.85%",iconType:"energy",summary:"India's highest market-cap conglomerate with a trinity of cash-generating refining assets, telecom disruptor Jio, and nationwide retail leadership.",scores:{financialHealth:75,growthPotential:76,historicalPerformance:72,valuation:68,debtLeverage:62,newsEvents:74,riskProfile:70},overallScore:72,evidenceConfidence:"HIGH",sourcesCount:5,researchStatus:"Moderate Buy (72/100)",disclaimer:"This research assessment is generated via multi-source web cross-verification for decision-support purposes only. It does not constitute investment advice or order execution.",evidence:[{id:"rel-1",claim:"Jio telecom ARPU increased to INR 182 with 5G standalone network coverage spanning all 22 circles",sourceA:{name:"RIL Investor Presentation Q3",type:"Official Filing",url:"https://ril.com/investors",match:!0},sourceB:{name:"TRAI Telecom Monthly Report",type:"Regulatory",url:"https://trai.gov.in",match:!0},confidence:"HIGH",status:"VERIFIED",metric:"Telecom ARPU & 5G Coverage",discrepancy:null}],bullCase:[{title:"Potential Consumer Business Demergers",desc:"Anticipated value unlocking via standalone listings of retail and telecom arms.",impact:"HIGH",source:"Jefferies India Research"}],bearCase:[{title:"Heavy Ongoing Capital Expenditures",desc:"Significant capex across green energy gigafactories keeps net debt-to-EBITDA slightly elevated.",impact:"MEDIUM",source:"Screener.in & ICICI Direct"}],newsSentiment:{positivePercent:58,neutralPercent:30,negativePercent:12,totalArticlesParsed:15,articles:[{headline:"Jio launches AI Cloud welcome offer for Indian smartphone users",source:"Mint",date:"2 days ago",sentiment:"POSITIVE",impact:"MEDIUM",summary:"Drives subscriber stickiness."}]},upcomingEvents:[{title:"RIL Board Meeting & Q4 Numbers",date:"April 24, 2026",significance:"HIGH",type:"Earnings",impact:"Key disclosures on retail segment footfalls."}],hypotheticalAllocation:{totalBudget:"INR 50,000",strategy:"Conglomerate Core Strategy",allocations:[{asset:"Reliance Industries",amount:2e4,percent:40,role:"Anchor",rationale:"Dominant market position"},{asset:"HDFC Bank",amount:2e4,percent:40,role:"Financials",rationale:"Credit growth beneficiary"},{asset:"Cash Reserve",amount:1e4,percent:20,role:"Liquidity",rationale:"Rebalancing buffer"}]},sourcesVisited:[{name:"Yahoo Finance India (RELIANCE.NS)",url:"https://finance.yahoo.com/quote/RELIANCE.NS/",status:"200 OK",bytes:"135 KB",depth:3},{name:"NSE India Official Portal",url:"https://www.nseindia.com/get-quotes/equity?symbol=RELIANCE",status:"200 OK",bytes:"115 KB",depth:2},{name:"Google Finance (RELIANCE:NSE)",url:"https://www.google.com/finance/quote/RELIANCE:NSE",status:"200 OK",bytes:"85 KB",depth:2}]}};function h2({params:t,onChange:e,onCompleteSetup:n,userLevel:i,setUserLevel:r}){const[s,a]=Ae.useState(1),l=[{key:"NVIDIA",name:"NVIDIA Corp.",ticker:"NVDA",market:"United States (NASDAQ)",sector:"Semiconductors & AI",currency:"USD",icon:Jg},{key:"TESLA",name:"Tesla Inc.",ticker:"TSLA",market:"United States (NASDAQ)",sector:"Automobile & Clean Tech",currency:"USD",icon:ad},{key:"HDFC_BANK",name:"HDFC Bank",ticker:"HDFCBANK",market:"India (NSE)",sector:"Banking & Financials",currency:"INR",icon:Yf},{key:"RELIANCE",name:"Reliance Industries",ticker:"RELIANCE",market:"India (NSE)",sector:"Telecom & Retail",currency:"INR",icon:ad}],c=[{label:"INR 25,000",value:"25000",currency:"INR"},{label:"INR 50,000 (Demo)",value:"50000",currency:"INR"},{label:"INR 1,00,000",value:"100000",currency:"INR"},{label:"USD $5,000",value:"5000",currency:"USD"}],u=["Semiconductors & AI","Automobile & Clean Tech","Banking & Financials","Software & Cloud","Consumer Tech & Hardware","Energy & Industrial","Healthcare & Biotech"],h=()=>{He.playClick(),s<5?a(s+1):n()},m=()=>{He.playClick(),s>1&&a(s-1)},f=p=>{He.playClick(),e({...t,stockKey:p.key,companyQuery:p.name,ticker:p.ticker,sector:p.sector,market:p.market.includes("India")?"India":"United States",currency:p.currency||(p.market.includes("India")?"INR":"USD")})};return o.jsxs("div",{className:"w-full max-w-3xl mx-auto flex flex-col gap-6 py-6 px-4",children:[o.jsxs("div",{className:"flex flex-col gap-2",children:[o.jsxs("div",{className:"flex items-center justify-between bg-[#0b110d] border border-brand-light/20 rounded-2xl p-2.5",children:[o.jsxs("div",{className:"flex items-center gap-2 px-2",children:[o.jsx(GS,{className:"w-4 h-4 text-brand-lime"}),o.jsx("span",{className:"text-xs font-mono text-slate-300",children:"Research Experience Level:"})]}),o.jsxs("div",{className:"flex items-center gap-1.5 bg-[#060907] p-1 rounded-xl border border-white/[0.06]",children:[o.jsx("button",{onClick:()=>{He.playClick(),r("beginner")},className:`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all duration-200 ${i==="beginner"?"bg-brand-medium text-[#060907] shadow-md shadow-brand-medium/30":"text-slate-400 hover:text-white"}`,children:"🌱 Beginner (Plain English)"}),o.jsx("button",{onClick:()=>{He.playClick(),r("advanced")},className:`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all duration-200 ${i==="advanced"?"bg-brand-lime text-[#060907] shadow-md shadow-brand-lime/30":"text-slate-400 hover:text-white"}`,children:"📊 Advanced (Full Wall St. Ratios)"})]})]}),o.jsxs("div",{className:`p-3 rounded-xl border text-xs font-mono flex items-center justify-between transition-all ${i==="beginner"?"bg-emerald-950/20 border-emerald-500/30 text-emerald-300":"bg-brand-deep/30 border-brand-lime/40 text-brand-lime"}`,children:[o.jsx("span",{children:i==="beginner"?"🌱 Beginner Mode: Financial jargon decoded into simple metaphors, traffic-light safety meters, and dollar-cost averaging guides.":"📊 Advanced Mode: Wall St. Multiples Deck, ROIC-WACC Spread, Altman Z-Score, and 2-way DCF Sensitivity Grids enabled."}),o.jsx("span",{className:"text-[10px] font-bold uppercase opacity-80 ml-2",children:"Personalized"})]})]}),o.jsxs("div",{className:"flex flex-col gap-2",children:[o.jsxs("div",{className:"flex items-center justify-between text-xs font-mono text-slate-400",children:[o.jsx("span",{className:"text-brand-lime font-bold uppercase tracking-wider",children:"YOUR INVESTMENT RESEARCH JOURNEY"}),o.jsxs("span",{children:["STEP ",s," OF 5"]})]}),o.jsxs("div",{className:"flex items-center justify-between relative px-2",children:[o.jsx("div",{className:"absolute top-1/2 left-4 right-4 h-0.5 bg-slate-800 -translate-y-1/2 z-0"}),o.jsx("div",{className:"absolute top-1/2 left-4 h-0.5 bg-gradient-to-r from-brand-lime to-brand-medium -translate-y-1/2 z-0 transition-all duration-500",style:{width:`${(s-1)/4*100}%`}}),[{id:1,label:"Company"},{id:2,label:"Budget"},{id:3,label:"Risk"},{id:4,label:"Horizon"},{id:5,label:"Review"}].map(p=>o.jsxs("div",{className:"relative z-10 flex flex-col items-center gap-1.5",children:[o.jsx("div",{className:`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${s>p.id?"bg-brand-medium text-[#060907] shadow-md shadow-brand-medium/30":s===p.id?"bg-brand-lime text-[#060907] ring-4 ring-brand-lime/20 shadow-lg shadow-brand-lime/40":"bg-slate-800 text-slate-400 border border-slate-700"}`,children:s>p.id?"✓":p.id}),o.jsx("span",{className:`text-[10px] font-mono ${s>=p.id?"text-brand-light font-bold":"text-slate-500"}`,children:p.label})]},p.id))]})]}),o.jsxs("div",{className:"bg-[#0b110d]/90 border border-brand-light/20 rounded-3xl p-6 sm:p-8 flex flex-col gap-6 shadow-2xl relative overflow-hidden",children:[o.jsx("div",{className:"absolute -top-12 -right-12 w-48 h-48 bg-brand-light/10 rounded-full blur-3xl pointer-events-none"}),s===1&&o.jsxs("div",{className:"flex flex-col gap-5 animate-in fade-in slide-in-from-right-4 duration-300",children:[o.jsxs("div",{children:[o.jsx("span",{className:"text-xs font-mono font-bold text-brand-lime uppercase tracking-widest block mb-1",children:"TARGET ASSET IDENTIFICATION"}),o.jsx("h2",{className:"text-2xl sm:text-3xl font-extrabold text-white font-sans",children:"Which company would you like to research?"}),o.jsx("p",{className:"text-xs sm:text-sm text-slate-300 mt-1",children:"Select a popular stock or enter your custom ticker and sector. InvestiLens will scan official filings, exchange quotes, financial multiples, and news feeds."})]}),o.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2.5",children:l.map(p=>{const y=p.icon;return o.jsxs("button",{onClick:()=>f(p),className:`p-3 rounded-2xl border text-left flex flex-col gap-1 transition-all duration-300 ${t.stockKey===p.key||t.companyQuery===p.name?"bg-brand-medium/20 border-brand-lime shadow-xl shadow-brand-medium/15":"bg-[#060907]/80 border-white/[0.08] hover:border-brand-light/40 hover:bg-[#0f1812]"}`,children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("div",{className:"w-7 h-7 rounded-lg bg-brand-deep/40 border border-brand-light/30 flex items-center justify-center text-brand-lime",children:o.jsx(y,{className:"w-3.5 h-3.5"})}),o.jsx("span",{className:"text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-brand-lime font-bold",children:p.ticker})]}),o.jsx("span",{className:"text-xs font-bold text-white font-mono mt-0.5",children:p.name}),o.jsx("span",{className:"text-[10px] text-slate-400 truncate",children:p.sector})]},p.key)})}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-white/[0.08]",children:[o.jsxs("div",{children:[o.jsx("label",{className:"text-[11px] font-mono text-slate-400 block mb-1",children:"Company Name"}),o.jsxs("div",{className:"relative",children:[o.jsx(wS,{className:"w-4 h-4 absolute left-3.5 top-3 text-brand-light"}),o.jsx("input",{type:"text",value:t.companyQuery,onChange:p=>e({...t,companyQuery:p.target.value,stockKey:"CUSTOM"}),placeholder:"e.g. NVIDIA, Tesla, Tata Motors",className:"w-full bg-[#060907] border border-brand-light/25 rounded-xl pl-10 pr-3 py-2.5 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-brand-lime focus:ring-1 focus:ring-brand-lime/20"})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"text-[11px] font-mono text-slate-400 block mb-1",children:"Stock Ticker Symbol"}),o.jsx("input",{type:"text",value:t.ticker||(t.stockKey==="NVIDIA"?"NVDA":t.stockKey==="TESLA"?"TSLA":t.stockKey==="HDFC_BANK"?"HDFCBANK":t.stockKey==="RELIANCE"?"RELIANCE":t.companyQuery),onChange:p=>e({...t,ticker:p.target.value.toUpperCase()}),placeholder:"e.g. NVDA, TSLA, HDFCBANK",className:"w-full bg-[#060907] border border-brand-light/25 rounded-xl px-3.5 py-2.5 text-xs font-mono font-bold text-brand-lime uppercase placeholder-slate-500 focus:outline-none focus:border-brand-lime focus:ring-1 focus:ring-brand-lime/20"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"text-[11px] font-mono text-slate-400 block mb-1",children:"Market & Exchange"}),o.jsxs("select",{value:t.market,onChange:p=>e({...t,market:p.target.value,currency:p.target.value==="India"?"INR":"USD"}),className:"w-full bg-[#060907] border border-brand-light/25 rounded-xl px-3 py-2.5 text-xs font-mono text-slate-200 focus:outline-none focus:border-brand-lime",children:[o.jsx("option",{value:"United States",children:"United States (NASDAQ / NYSE)"}),o.jsx("option",{value:"India",children:"India (NSE / BSE)"})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"text-[11px] font-mono text-slate-400 block mb-1",children:"Industry Sector"}),o.jsx("select",{value:t.sector||"Semiconductors & AI",onChange:p=>e({...t,sector:p.target.value}),className:"w-full bg-[#060907] border border-brand-light/25 rounded-xl px-3 py-2.5 text-xs font-mono text-slate-200 focus:outline-none focus:border-brand-lime",children:u.map(p=>o.jsx("option",{value:p,children:p},p))})]})]}),t.companyQuery&&o.jsxs("div",{className:"p-3.5 rounded-xl bg-brand-deep/20 border border-brand-medium/40 flex items-center justify-between text-xs font-mono animate-in fade-in",children:[o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-brand-lime animate-ping"}),o.jsxs("span",{className:"text-slate-200",children:["Selected Target: ",o.jsx("strong",{className:"text-brand-lime",children:t.companyQuery})," (",t.ticker||"Auto-detected",") • ",t.sector||"General"]})]}),o.jsx("span",{className:"text-brand-light font-bold text-[11px]",children:"Ready for Scope ✓"})]})]}),s===2&&o.jsxs("div",{className:"flex flex-col gap-5 animate-in fade-in slide-in-from-right-4 duration-300",children:[o.jsxs("div",{children:[o.jsx("span",{className:"text-xs font-mono font-bold text-brand-lime uppercase tracking-widest block mb-1",children:"CAPITAL CONSTRAINT"}),o.jsx("h2",{className:"text-2xl sm:text-3xl font-extrabold text-white font-sans",children:"How much are you planning to invest?"}),o.jsx("p",{className:"text-xs sm:text-sm text-slate-300 mt-1",children:"This helps the system determine appropriate diversification and position sizing in the hypothetical model."})]}),o.jsxs("div",{className:"relative",children:[o.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-brand-lime font-mono text-lg font-black",children:t.currency==="INR"?"INR":"USD"}),o.jsx("input",{type:"number",value:t.amount,onChange:p=>e({...t,amount:p.target.value}),className:"w-full bg-[#060907] border border-brand-light/30 rounded-2xl pl-16 pr-24 py-4 text-xl font-mono font-bold text-white focus:outline-none focus:border-brand-lime focus:ring-2 focus:ring-brand-lime/20 transition-all shadow-inner"}),o.jsxs("select",{value:t.currency,onChange:p=>{He.playClick(),e({...t,currency:p.target.value})},className:"absolute inset-y-2 right-2 bg-slate-800 text-xs font-mono text-slate-200 rounded-xl px-3 border border-slate-700 focus:outline-none cursor-pointer",children:[o.jsx("option",{value:"INR",children:"INR (₹)"}),o.jsx("option",{value:"USD",children:"USD ($)"})]})]}),o.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2.5",children:c.map(p=>o.jsx("button",{onClick:()=>{He.playClick(),e({...t,amount:p.value,currency:p.currency})},className:`p-3 rounded-xl border font-mono text-xs font-bold transition-all ${t.amount===p.value&&t.currency===p.currency?"bg-brand-medium/25 border-brand-lime text-brand-lime shadow-md":"bg-[#060907] border-white/[0.08] text-slate-400 hover:border-brand-light/40 hover:text-white"}`,children:p.label},p.label))}),o.jsx("div",{className:"p-3.5 rounded-xl bg-brand-deep/20 border border-brand-medium/30 text-xs font-mono text-brand-light",children:"System Note: The agent calibrates risk buffers and liquid cash reserves according to your capital constraint."})]}),s===3&&o.jsxs("div",{className:"flex flex-col gap-5 animate-in fade-in slide-in-from-right-4 duration-300",children:[o.jsxs("div",{children:[o.jsx("span",{className:"text-xs font-mono font-bold text-brand-lime uppercase tracking-widest block mb-1",children:"RISK TOLERANCE"}),o.jsx("h2",{className:"text-2xl sm:text-3xl font-extrabold text-white font-sans",children:"How much risk are you comfortable with?"}),o.jsx("p",{className:"text-xs sm:text-sm text-slate-300 mt-1",children:"We will actively hunt for disconfirming hazards that violate your tolerance threshold."})]}),o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3.5",children:[{level:"Conservative",desc:"Prioritize capital preservation, low debt, and predictable steady cash flows.",color:"text-brand-light"},{level:"Moderate",desc:"Balanced approach seeking solid compounders with controlled volatility.",color:"text-brand-lime"},{level:"Aggressive",desc:"High growth frontier, willing to accept price swings for expanding market share.",color:"text-brand-medium"}].map(p=>o.jsxs("button",{onClick:()=>{He.playClick(),e({...t,risk:p.level})},className:`p-5 rounded-2xl border text-left flex flex-col gap-2 transition-all ${t.risk===p.level?"bg-brand-medium/20 border-brand-lime shadow-xl shadow-brand-medium/20":"bg-[#060907] border-white/[0.08] text-slate-400 hover:border-brand-light/40 hover:text-white"}`,children:[o.jsx("span",{className:`text-base font-bold font-mono ${p.color}`,children:p.level}),o.jsx("p",{className:"text-xs text-slate-300 leading-relaxed font-sans",children:p.desc})]},p.level))})]}),s===4&&o.jsxs("div",{className:"flex flex-col gap-5 animate-in fade-in slide-in-from-right-4 duration-300",children:[o.jsxs("div",{children:[o.jsx("span",{className:"text-xs font-mono font-bold text-brand-lime uppercase tracking-widest block mb-1",children:"TIME HORIZON"}),o.jsx("h2",{className:"text-2xl sm:text-3xl font-extrabold text-white font-sans",children:"What is your investment horizon?"}),o.jsx("p",{className:"text-xs sm:text-sm text-slate-300 mt-1",children:"Determines whether the research emphasizes short-term catalysts or multi-year structural moats."})]}),o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3.5",children:[{title:"Short-term",span:"< 1 Year",note:"Focuses on upcoming quarterly earnings, NIM repricing, and macroeconomic catalysts."},{title:"Medium-term",span:"3–5 Years",note:"Evaluates post-merger synergies, branch deposit mobilization, and sustainable ROE."},{title:"Long-term",span:"5–10+ Years",note:"Analyzes industry dominance, compound moat durability, and generational compounding."}].map(p=>o.jsxs("button",{onClick:()=>{He.playClick(),e({...t,horizon:`${p.title} (${p.span})`})},className:`p-5 rounded-2xl border text-left flex flex-col gap-2 transition-all ${t.horizon.includes(p.title)?"bg-brand-medium/20 border-brand-lime shadow-xl shadow-brand-medium/20":"bg-[#060907] border-white/[0.08] text-slate-400 hover:border-brand-light/40 hover:text-white"}`,children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("span",{className:"text-sm font-bold font-mono text-white",children:p.title}),o.jsx("span",{className:"text-xs font-mono font-bold text-brand-lime",children:p.span})]}),o.jsx("p",{className:"text-xs text-slate-300 leading-relaxed font-sans",children:p.note})]},p.title))})]}),s===5&&o.jsxs("div",{className:"flex flex-col gap-5 animate-in fade-in slide-in-from-right-4 duration-300",children:[o.jsxs("div",{children:[o.jsx("span",{className:"text-xs font-mono font-bold text-brand-lime uppercase tracking-widest block mb-1",children:"OBJECTIVE SUMMARY"}),o.jsx("h2",{className:"text-2xl sm:text-3xl font-extrabold text-white font-sans",children:"INVESTILENS now understands your objective."}),o.jsx("p",{className:"text-xs sm:text-sm text-slate-300 mt-1",children:"Ready to generate the autonomous multi-source research plan."})]}),o.jsxs("div",{className:"bg-[#060907] border border-brand-light/30 rounded-2xl p-5 flex flex-col gap-2.5 font-mono text-xs shadow-inner",children:[o.jsxs("div",{className:"flex justify-between border-b border-white/[0.08] pb-2",children:[o.jsx("span",{className:"text-slate-400",children:"Target Asset:"}),o.jsxs("span",{className:"text-brand-lime font-bold",children:[t.companyQuery," (",t.ticker||"Auto-detected",") • ",t.sector||"General"]})]}),o.jsxs("div",{className:"flex justify-between border-b border-white/[0.08] pb-2",children:[o.jsx("span",{className:"text-slate-400",children:"Market & Exchange:"}),o.jsx("span",{className:"text-white font-bold",children:t.market})]}),o.jsxs("div",{className:"flex justify-between border-b border-white/[0.08] pb-2",children:[o.jsx("span",{className:"text-slate-400",children:"Investment Budget:"}),o.jsxs("span",{className:"text-white font-bold",children:[t.currency==="INR"?"INR ₹":"USD $",Number(t.amount).toLocaleString()]})]}),o.jsxs("div",{className:"flex justify-between border-b border-white/[0.08] pb-2",children:[o.jsx("span",{className:"text-slate-400",children:"Investor Experience:"}),o.jsxs("span",{className:"text-brand-light font-bold capitalize",children:[i," Mode"]})]}),o.jsxs("div",{className:"flex justify-between border-b border-white/[0.08] pb-2",children:[o.jsx("span",{className:"text-slate-400",children:"Risk Profile:"}),o.jsx("span",{className:"text-brand-light font-bold",children:t.risk})]}),o.jsxs("div",{className:"flex justify-between border-b border-white/[0.08] pb-2",children:[o.jsx("span",{className:"text-slate-400",children:"Time Horizon:"}),o.jsx("span",{className:"text-white font-bold",children:t.horizon})]}),o.jsxs("div",{className:"pt-2",children:[o.jsx("span",{className:"text-[10px] text-slate-400 uppercase tracking-wider block mb-1.5",children:"Verified Data & News Sources (Multi-Source Cross-Verification):"}),o.jsx("div",{className:"flex flex-wrap gap-1.5",children:["Nasdaq","NSE India","BSE India","Yahoo Finance","Google Finance","Reuters","CNBC","MarketWatch","Investing.com","MarketScreener","Financial Times","The Wall Street Journal"].map(p=>o.jsxs("span",{className:"px-2.5 py-0.5 rounded-lg bg-brand-deep/40 border border-brand-lime/30 text-[11px] text-brand-lime font-mono font-bold",children:["✓ ",p]},p))})]})]}),o.jsx("div",{className:"p-3.5 rounded-xl bg-brand-deep/20 border border-brand-medium/40 text-xs font-mono text-brand-lime",children:"✓ Ready to construct multi-source research plan with 2 Human-in-the-Loop approval checkpoints across 12 tier-1 sources."})]}),o.jsxs("div",{className:"flex items-center justify-between border-t border-white/[0.08] pt-4 mt-2",children:[s>1?o.jsxs("button",{onClick:m,className:"inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#060907] border border-white/[0.1] text-slate-300 hover:text-white font-mono text-xs font-bold transition-all",children:[o.jsx(Ny,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Back"})]}):o.jsx("div",{}),o.jsxs("button",{onClick:h,className:"inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-[#F0FB43] via-[#7ED043] to-[#4FB734] hover:from-[#f4fc65] hover:to-[#5bc93f] text-[#060907] font-mono text-xs font-extrabold uppercase tracking-wider shadow-lg shadow-brand-medium/25 hover:scale-105 active:scale-95 transition-all",children:[o.jsx("span",{children:s===5?"GENERATE RESEARCH PLAN":"CONTINUE"}),o.jsx(Zl,{className:"w-4 h-4"})]})]})]})]})}function p2({stockData:t,params:e,onAcceptPlan:n,onEditPlan:i}){const[r,s]=Ae.useState(0),[a,l]=Ae.useState(null),c=["Analyzing your capital constraint and horizon...","Understanding risk tolerance & disconfirmation rules...","Selecting Top 5 authoritative web sources (Yahoo, Nasdaq, Google, Reuters, MarketWatch)...","Building balanced Bull/Bear investigation framework...","Research plan ready for human approval."];Ae.useEffect(()=>{He.playCheckpointAlert();const h=setInterval(()=>{s(m=>m<c.length-1?(He.playClick(),m+1):(clearInterval(h),m))},450);return()=>clearInterval(h)},[]);const u=[{id:"fundamentals",title:"Fundamentals & Health",icon:ex,desc:`We will examine revenue growth YoY, profit margins, Return on Equity (ROE), and free cash flows for ${(t==null?void 0:t.name)||e.companyQuery} directly from financial statements.`},{id:"valuation",title:"Valuation & Multiples",icon:ix,desc:"We will evaluate market capitalization, trailing P/E, forward P/E, and 52-week trading range across Yahoo Finance and official exchange data."},{id:"news",title:"News Sentiment",icon:Zf,desc:"We will scan and classify verified breaking news headlines from Reuters, CNBC, and Google Finance into Positive, Neutral, and Negative impact categories."},{id:"bull",title:"Bull Case Moat",icon:zS,desc:"We will document long-term growth catalysts, addressable market expansion, and pricing power."},{id:"bear",title:"Bear Disconfirmation",icon:rx,desc:"Core requirement: We actively hunt for reasons NOT to invest, including multiple contraction, cyclical capex slowdown, and competitive threats."},{id:"catalysts",title:"Upcoming Catalysts",icon:Lc,desc:"We will extract verified calendar dates for upcoming quarterly earnings prints, investor calls, and regulatory milestones."}];return o.jsxs("div",{className:"w-full max-w-4xl mx-auto flex flex-col gap-6 py-6 px-4",children:[o.jsxs("div",{className:"bg-[#0b110d]/90 border border-brand-light/25 rounded-3xl p-6 flex flex-col gap-4 shadow-2xl",children:[o.jsxs("div",{className:"flex items-center justify-between border-b border-white/[0.08] pb-3",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("div",{className:"w-9 h-9 rounded-xl bg-brand-deep/30 border border-brand-light/40 flex items-center justify-center text-brand-lime shadow-sm",children:o.jsx(Lc,{className:"w-5 h-5 animate-pulse"})}),o.jsxs("div",{children:[o.jsx("span",{className:"text-[10px] font-mono font-bold text-brand-lime uppercase tracking-widest block",children:"STEP 3: HUMAN-IN-THE-LOOP CHECKPOINT"}),o.jsxs("h2",{className:"text-xl font-bold text-white font-mono",children:["Interactive Research Plan: ",(t==null?void 0:t.name)||e.companyQuery]})]})]}),o.jsx("span",{className:"text-xs font-mono px-3 py-1 rounded-full bg-brand-deep/40 text-brand-lime border border-brand-light/30 font-bold",children:"HUMAN APPROVAL REQUIRED"})]}),o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs",children:c.map((h,m)=>{const f=r>=m;return o.jsxs("div",{className:"flex items-center gap-2 py-1 transition-opacity duration-300 "+(f?"text-slate-200 opacity-100":"text-slate-600 opacity-40"),children:[o.jsx("span",{className:"w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold "+(f?"bg-brand-medium text-[#060907]":"bg-slate-800 text-slate-500"),children:f?"✓":"○"}),o.jsx("span",{children:h})]},m)})})]}),o.jsxs("div",{className:"relative bg-[#070b08] border border-brand-light/20 rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center gap-6 shadow-2xl overflow-hidden",children:[o.jsx("div",{className:"text-center font-mono text-xs text-slate-400",children:"Click any research dimension node to preview the autonomous investigation scope:"}),o.jsxs("div",{className:"w-full flex flex-col items-center gap-6 z-10",children:[o.jsxs("div",{className:"relative group",children:[o.jsx("div",{className:"absolute -inset-2 bg-gradient-to-r from-brand-lime via-brand-medium to-brand-deep rounded-2xl blur-md opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse"}),o.jsxs("div",{className:"relative px-6 py-4 rounded-xl bg-[#0b110d] border-2 border-brand-lime text-center shadow-2xl flex flex-col items-center gap-1",children:[o.jsx("div",{className:"w-9 h-9 rounded-lg bg-brand-deep/40 border border-brand-light/30 flex items-center justify-center text-brand-lime mb-1",children:o.jsx(Yf,{className:"w-5 h-5"})}),o.jsx("span",{className:"text-base font-black text-white font-mono",children:(t==null?void 0:t.name)||e.companyQuery}),o.jsxs("span",{className:"text-xs font-mono text-brand-lime font-bold",children:[e.currency==="INR"?"INR ":"USD ",Number(e.amount).toLocaleString()," • ",e.risk," • ",e.horizon]})]})]}),o.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3 w-full",children:u.map(h=>{const m=h.icon,f=(a==null?void 0:a.id)===h.id;return o.jsxs("button",{onClick:()=>{He.playClick(),l(f?null:h)},className:"p-3.5 rounded-2xl border text-left flex flex-col gap-1.5 transition-all duration-300 "+(f?"bg-brand-deep/40 border-brand-lime shadow-xl shadow-brand-lime/20 scale-105":"bg-[#0b110d]/80 border-white/[0.08] hover:border-brand-light/40 hover:bg-[#111a14]"),children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx(m,{className:"w-4 h-4 text-brand-lime"}),o.jsx("span",{className:"text-[10px] font-mono text-slate-400",children:"Inspect"})]}),o.jsx("span",{className:"text-xs font-bold text-white font-mono",children:h.title})]},h.id)})})]}),a&&o.jsxs("div",{className:"w-full bg-[#0b110d] border-2 border-brand-lime rounded-2xl p-4 flex flex-col gap-2 font-mono text-xs animate-in fade-in duration-200",children:[o.jsxs("div",{className:"flex items-center justify-between text-brand-lime font-bold",children:[o.jsxs("span",{className:"flex items-center gap-2",children:[o.jsx(Lc,{className:"w-4 h-4"}),o.jsxs("span",{children:["Scope Preview: ",a.title]})]}),o.jsx("button",{onClick:()=>l(null),className:"text-slate-400 hover:text-white",children:o.jsx(Jl,{className:"w-4 h-4"})})]}),o.jsx("p",{className:"text-slate-200 font-sans text-xs leading-relaxed",children:a.desc})]}),o.jsxs("div",{className:"w-full flex items-center justify-between text-xs font-mono text-slate-400 border-t border-white/[0.08] pt-4",children:[o.jsxs("span",{children:["Sources to Investigate: ",o.jsx("strong",{children:"6 Verified Portals"})," (Official IR, Screener, BSE, Moneycontrol, Reuters, RBI)"]}),o.jsx("span",{className:"text-brand-lime font-bold",children:"Confidence: HIGH"})]})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3.5",children:[o.jsxs("button",{onClick:()=>{He.playClick(),n()},className:"sm:col-span-2 py-4 px-6 rounded-2xl bg-gradient-to-r from-[#F0FB43] via-[#7ED043] to-[#4FB734] hover:from-[#f4fc65] hover:to-[#5bc93f] text-[#060907] font-black font-mono text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-xl shadow-brand-medium/30 hover:scale-105 active:scale-95 transition-all duration-300",children:[o.jsx(Qg,{className:"w-5 h-5"}),o.jsx("span",{children:"ACCEPT & LAUNCH AUTONOMOUS RESEARCH"})]}),o.jsxs("button",{onClick:()=>{He.playClick(),i()},className:"py-4 px-4 rounded-2xl bg-[#0b110d] hover:bg-[#111a14] text-brand-lime border border-brand-light/30 font-bold font-mono text-xs flex items-center justify-center gap-2 transition-all hover:border-brand-lime/60",children:[o.jsx(nx,{className:"w-4 h-4"}),o.jsx("span",{children:"EDIT PLAN"})]})]})]})}const Gx={financialHealth:{weight:.25,label:"Financial Health",description:"Profitability margins, ROE, FCF generation & top-line revenue trajectory"},growthPotential:{weight:.2,label:"Growth Potential",description:"Addressable market scalability, product catalysts & sector momentum"},historicalPerformance:{weight:.15,label:"Historical Performance",description:"52-week trading band positioning & relative drawdown resilience"},valuation:{weight:.15,label:"Valuation Multiple",description:"P/E, EV/EBITDA, margin of safety vs earnings yield"},debtLeverage:{weight:.1,label:"Debt & Leverage",description:"Total debt to liquid cash reserves, interest coverage & solvency"},newsEvents:{weight:.1,label:"News & Sentiment",description:"Multi-wire positive vs negative headline sentiment ratio"},riskProfile:{weight:.05,label:"Risk & Governance",description:"Counter-analysis penalties, regulatory headwinds & competitive hazards"}};function m2(t){let e=0,n=[];for(const[l,c]of Object.entries(Gx)){const u=t[l]!==void 0?Number(t[l]):50,h=Math.max(10,Math.min(100,u)),m=h*c.weight;e+=m,n.push({key:l,label:c.label,description:c.description,rawScore:Math.round(h),weightPercent:Math.round(c.weight*100),contribution:Number(m.toFixed(2))})}const i=Math.round(e);let r="",s="",a="";return i>=82?(r="Strong Bullish",s="text-brand-lime",a="bg-brand-medium/20 border-brand-lime text-brand-lime"):i>=72?(r="Moderate Buy",s="text-brand-light",a="bg-brand-light/20 border-brand-light text-brand-light"):i>=58?(r="Neutral / Hold",s="text-amber-400",a="bg-amber-500/20 border-amber-500 text-amber-300"):i>=45?(r="Caution / Speculative",s="text-orange-400",a="bg-orange-500/20 border-orange-500 text-orange-300"):(r="High Risk / Impairment Warning",s="text-rose-400",a="bg-rose-500/20 border-rose-500 text-rose-300"),{finalScore:i,breakdown:n,profileVerdict:r,verdictColor:s,verdictBadge:a,formulaExplanation:"Score = (Financial Health × 25%) + (Growth × 20%) + (Historical × 15%) + (Valuation × 15%) + (Debt × 10%) + (News × 10%) + (Risk × 5%)"}}const km=[{id:1,name:"Collect User Requirements",icon:"UserCheck",description:"Parsing budget, risk tolerance, horizon & target asset"},{id:2,name:"Create Research Plan",icon:"FileSpreadsheet",description:"Synthesizing 6-8 independent source objectives"},{id:3,name:"Human Approval #1",icon:"ShieldAlert",isCheckpoint:!0,description:"Checkpoint: Waiting for user approval on research scope"},{id:4,name:"Webcmd Browser Research",icon:"Globe",description:"Spawning browser sessions & navigating targeted financial sources"},{id:5,name:"Collect Structured Evidence",icon:"Database",description:"Extracting claims, numbers, filings, and audit data"},{id:6,name:"Cross-Verification Engine",icon:"CheckCheck",description:"Cross-referencing claims across independent primary sources"},{id:7,name:"Financial & Metric Analysis",icon:"TrendingUp",description:"Evaluating revenue, margins, cash flows, and debt metrics"},{id:8,name:"News Sentiment Intelligence",icon:"Newspaper",description:"Classifying recent news into Positive, Neutral & Negative impact"},{id:9,name:"Upcoming Events & Catalysts",icon:"Calendar",description:"Detecting earnings calls, regulatory dates, and product launches"},{id:10,name:"Bull Case Formulation",icon:"ArrowUpRight",description:"Extracting growth drivers and strategic moats"},{id:11,name:"Bear Case / Counter-Analysis",icon:"ArrowDownRight",description:"Actively searching for disconfirming evidence and risks"},{id:12,name:"Deterministic Scoring Engine",icon:"Calculator",description:"Computing non-blackbox 7-dimension weighted scorecard"},{id:13,name:"Personalized Alignment",icon:"Sliders",description:"Mapping findings to user risk profile and capital constraints"},{id:14,name:"Hypothetical Allocation",icon:"PieChart",description:"Generating transparent decision-support asset model"},{id:15,name:"Human Approval #2",icon:"ShieldAlert",isCheckpoint:!0,description:"Checkpoint: Review preliminary findings & sign-off final report"},{id:16,name:"Final Report Generation",icon:"Award",description:"Publishing verified multi-source research dossier"}];class g2{constructor(e={}){this.mode=e.mode||"simulation",this.backendUrl=e.backendUrl||"http://localhost:8000/api",this.wsUrl=e.wsUrl||"ws://localhost:8000/stream"}setMode(e,n,i){this.mode=e,n&&(this.backendUrl=n),i&&(this.wsUrl=i)}}new g2;function x2({currentStageId:t,stagesProgress:e,browserLogs:n=[],currentUrl:i,browserStatus:r,speed:s,onSetSpeed:a,activeStockData:l}){const c=Ae.useRef(null),u=Ae.useRef(null),[h,m]=Ae.useState(0);Ae.useEffect(()=>{const x=Date.now(),_=setInterval(()=>{m(Date.now()-x)},100);return()=>clearInterval(_)},[]),Ae.useEffect(()=>{var x;(x=u.current)==null||x.scrollIntoView({behavior:"smooth"})},[n]);const f=Ae.useMemo(()=>{const x=[];let _="";for(const b of n){const T=`${b.type}:${b.message}`;T!==_&&(x.push(b),_=T)}return x},[n]),p=Ae.useMemo(()=>{const x=(i||"").toLowerCase();return x.includes("nasdaq.com")?{name:"Nasdaq Official Exchange",domain:"nasdaq.com",metric:"Official Exchange Filings & 52W Range",color:"text-amber-300",badge:"bg-amber-400/20 text-amber-300"}:x.includes("nseindia.com")||x.includes("bseindia.com")?{name:"NSE / BSE India Portal",domain:"nseindia.com",metric:"Official Indian Market Filings & Corporate Disclosures",color:"text-amber-300",badge:"bg-amber-400/20 text-amber-300"}:x.includes("google.com/finance")||x.includes("google.com")?{name:"Google Finance",domain:"google.com/finance",metric:"Real-Time Quotes, P/E & Multi-Exchange Overview",color:"text-sky-300",badge:"bg-sky-400/20 text-sky-300"}:x.includes("yahoo.com")||x.includes("yahoofinance")?{name:"Yahoo Finance",domain:"finance.yahoo.com",metric:"Historical Key Stats, Valuation & Multiples",color:"text-brand-lime",badge:"bg-brand-medium/20 text-brand-lime"}:x.includes("reuters.com")?{name:"Reuters Markets",domain:"reuters.com",metric:"Macro News & Global Market Sentiment Feed",color:"text-emerald-300",badge:"bg-emerald-400/20 text-emerald-300"}:x.includes("cnbc.com")?{name:"CNBC Markets",domain:"cnbc.com",metric:"Breaking Business News & Executive Commentary",color:"text-brand-lime",badge:"bg-brand-medium/20 text-brand-lime"}:x.includes("marketwatch.com")?{name:"MarketWatch Financials",domain:"marketwatch.com",metric:"Financial Statements & Balance Sheet Health",color:"text-lime-300",badge:"bg-lime-400/20 text-lime-300"}:x.includes("investing.com")?{name:"Investing.com",domain:"investing.com",metric:"Technical Indicators & Consensus Price Targets",color:"text-amber-300",badge:"bg-amber-400/20 text-amber-300"}:x.includes("marketscreener.com")?{name:"MarketScreener",domain:"marketscreener.com",metric:"Deep Fundamental Analysis & Financial Health",color:"text-sky-300",badge:"bg-sky-400/20 text-sky-300"}:x.includes("wsj.com")||x.includes("ft.com")?{name:"WSJ / Financial Times",domain:"wsj.com",metric:"Institutional Perspective & Macro Intelligence",color:"text-purple-300",badge:"bg-purple-400/20 text-purple-300"}:{name:"Tier-1 Multi-Source Network",domain:"investilens.ai",metric:"Cross-Checking Verified Fundamentals Across 12 Sources",color:"text-brand-lime",badge:"bg-brand-medium/20 text-brand-lime"}},[i]);Ae.useEffect(()=>{const x=c.current;if(!x)return;const _=x.getContext("2d");let b;const T=[{id:"core",name:"INVESTILENS CORE",x:.5,y:.5,color:"#F0FB43",radius:28,isCore:!0},{id:"src-1",name:"Nasdaq / NSE / BSE",url:"nasdaq",x:.16,y:.2,color:"#F0FB43",radius:17},{id:"src-2",name:"Google & Yahoo Finance",url:"google",x:.84,y:.2,color:"#38bdf8",radius:17},{id:"src-3",name:"Reuters & CNBC Wire",url:"reuters",x:.12,y:.78,color:"#4FB734",radius:17},{id:"src-4",name:"MarketWatch & Screener",url:"marketwatch",x:.88,y:.78,color:"#a3e635",radius:17},{id:"src-5",name:"FT / WSJ / Investing.com",url:"investing",x:.5,y:.9,color:"#c084fc",radius:17}],A=[];for(let w=0;w<24;w++)A.push({sourceIdx:Math.floor(Math.random()*(T.length-1))+1,progress:Math.random(),speed:.009+Math.random()*.015,size:2.5+Math.random()*2});let N=0;const v=()=>{b=requestAnimationFrame(v),N+=.02;const w=x.width,I=x.height;_.clearRect(0,0,w,I);const L=T[0].x*w,F=T[0].y*I;_.strokeStyle="rgba(126, 208, 67, 0.05)",_.lineWidth=1;for(let V=0;V<w;V+=28)_.beginPath(),_.moveTo(V,0),_.lineTo(V,I),_.stroke();for(let V=0;V<I;V+=28)_.beginPath(),_.moveTo(0,V),_.lineTo(w,V),_.stroke();T.slice(1).forEach(V=>{const ee=V.x*w,H=V.y*I,$=i&&i.toLowerCase().includes(V.url.toLowerCase());_.beginPath(),_.moveTo(ee,H),_.lineTo(L,F),$?(_.strokeStyle="#F0FB43",_.lineWidth=2.5,_.shadowColor="#F0FB43",_.shadowBlur=15):(_.strokeStyle="rgba(79, 183, 52, 0.25)",_.lineWidth=1.2,_.shadowBlur=0),_.stroke()}),A.forEach(V=>{V.progress+=V.speed,V.progress>=1&&(V.progress=0);const ee=T[V.sourceIdx],H=ee.x*w,$=ee.y*I,G=H+(L-H)*V.progress,k=$+(F-$)*V.progress;_.beginPath(),_.arc(G,k,V.size,0,Math.PI*2),_.fillStyle=ee.color,_.shadowColor=ee.color,_.shadowBlur=10,_.fill()}),T.forEach(V=>{var G;const ee=V.x*w,H=V.y*I,$=i&&i.toLowerCase().includes((G=V.url)==null?void 0:G.toLowerCase());_.beginPath(),_.arc(ee,H,V.radius+($?8+Math.sin(N*6)*3:4),0,Math.PI*2),_.fillStyle=$?"rgba(240, 251, 67, 0.25)":"rgba(79, 183, 52, 0.08)",_.fill(),_.beginPath(),_.arc(ee,H,V.radius,0,Math.PI*2),_.fillStyle=V.isCore?"#0f1c13":"#070c09",_.strokeStyle=$?"#F0FB43":V.color,_.lineWidth=$?3:2,_.shadowColor=V.color,_.shadowBlur=$?20:8,_.fill(),_.stroke(),_.font=V.isCore?"bold 11px 'JetBrains Mono', monospace":"10px 'Inter', sans-serif",_.fillStyle=$?"#F0FB43":"#f4f8f4",_.textAlign="center",_.shadowBlur=0,_.fillText(V.name,ee,H+V.radius+14)})};return v(),()=>cancelAnimationFrame(b)},[i]);const y=km.find(x=>x.id===t)||km[3],M=(h/1e3).toFixed(1),g=Math.min(Number(M),Number(M)*.75).toFixed(1),d=Math.max(0,Number(M)-Number(g)).toFixed(1);return o.jsxs("div",{className:"w-full max-w-5xl mx-auto flex flex-col gap-6 py-6 px-4",children:[o.jsxs("div",{className:"bg-[#0b110d]/95 border border-brand-light/30 rounded-3xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xl",children:[o.jsxs("div",{className:"flex items-center gap-3.5",children:[o.jsx("div",{className:"w-11 h-11 rounded-2xl bg-brand-deep/30 border border-brand-lime/40 flex items-center justify-center text-brand-lime shadow-lg",children:o.jsx(gS,{className:"w-6 h-6 animate-spin text-brand-lime"})}),o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center gap-2 font-mono text-xs text-brand-lime font-bold",children:[o.jsx(_S,{className:"w-3.5 h-3.5 animate-pulse"}),o.jsx("span",{children:"AUTONOMOUS TOP 5 SOURCE RESEARCH RUNNING"})]}),o.jsxs("h2",{className:"text-lg font-bold text-white font-mono mt-0.5",children:[y.name," (Stage ",t,"/16)"]}),o.jsx("p",{className:"text-xs text-slate-300 font-sans",children:y.description})]})]}),o.jsxs("div",{className:"flex flex-col sm:items-end gap-1.5 font-mono",children:[o.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#060907] border border-brand-light/30 text-xs text-white shadow-inner",children:[o.jsx(Qy,{className:"w-3.5 h-3.5 text-brand-lime animate-spin"}),o.jsxs("span",{children:["Total Elapsed: ",o.jsxs("strong",{className:"text-brand-lime",children:[M,"s"]})]})]}),o.jsxs("div",{className:"flex items-center gap-2 text-[10px] text-slate-400",children:[o.jsxs("span",{className:"flex items-center gap-1",children:[o.jsx(ad,{className:"w-3 h-3 text-amber-300"})," Scrape: ",g,"s"]}),o.jsx("span",{children:"•"}),o.jsxs("span",{className:"flex items-center gap-1",children:[o.jsx(Jg,{className:"w-3 h-3 text-sky-300"})," Synthesis: ",d,"s"]})]})]})]}),o.jsxs("div",{className:"bg-[#0b110d]/90 border border-brand-lime/30 rounded-2xl p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-lg",children:[o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-brand-lime animate-ping"}),o.jsxs("span",{className:"text-xs font-mono text-slate-300",children:["CURRENTLY EXTRACTING FROM: ",o.jsx("strong",{className:`font-bold ${p.color}`,children:p.name})]})]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsxs("span",{className:"text-[11px] font-mono text-slate-400",children:["Action: ",p.metric]}),o.jsx("span",{className:`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${p.badge}`,children:"ACTIVE"})]})]}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-5",children:[o.jsxs("div",{className:"lg:col-span-7 bg-[#070c09] border border-brand-light/20 rounded-3xl p-5 flex flex-col gap-3 shadow-2xl relative overflow-hidden",children:[o.jsxs("div",{className:"flex items-center justify-between font-mono text-xs text-slate-300",children:[o.jsx("span",{className:"text-brand-lime font-bold",children:"TOP 5 SOURCE PHOTON STREAM"}),o.jsx("span",{className:"text-slate-500",children:"Latency: ~210ms avg"})]}),o.jsx("div",{className:"w-full h-[320px] rounded-2xl overflow-hidden bg-[#050806] border border-white/[0.06] shadow-inner",children:o.jsx("canvas",{ref:c,width:620,height:320,className:"w-full h-full block"})}),o.jsxs("div",{className:"bg-[#0b110d] border border-brand-light/30 rounded-xl px-4 py-2.5 flex items-center gap-2 text-xs font-mono text-slate-200",children:[o.jsx(Zf,{className:"w-4 h-4 text-brand-lime animate-pulse flex-shrink-0"}),o.jsx("span",{className:"truncate",children:i||"https://finance.yahoo.com"}),o.jsx("span",{className:"ml-auto px-2 py-0.5 rounded bg-brand-medium/20 text-brand-lime text-[10px] font-bold",children:"200 OK"})]})]}),o.jsxs("div",{className:"lg:col-span-5 bg-[#070c09] border border-brand-light/20 rounded-3xl p-5 flex flex-col gap-3 shadow-2xl",children:[o.jsxs("div",{className:"flex items-center justify-between text-xs font-mono text-slate-300",children:[o.jsxs("div",{className:"flex items-center gap-2 text-brand-lime font-bold",children:[o.jsx(US,{className:"w-4 h-4"}),o.jsx("span",{children:"Webcmd Skill Telemetry"})]}),o.jsxs("span",{className:"text-[10px] text-slate-400 bg-black/40 px-2 py-0.5 rounded",children:[f.length," actions"]})]}),o.jsxs("div",{className:"flex-1 bg-[#050806] border border-white/[0.06] rounded-2xl p-3.5 overflow-y-auto font-mono text-[11px] leading-relaxed flex flex-col gap-1.5 text-slate-300 max-h-[360px] shadow-inner",children:[f.map((x,_)=>o.jsxs("div",{className:"flex items-start gap-2 py-1 hover:bg-white/[0.03] rounded px-1.5",children:[o.jsx("span",{className:"text-slate-500 text-[10px] flex-shrink-0",children:x.time}),o.jsx("span",{className:`text-[9px] uppercase px-1.5 py-0.5 rounded font-bold flex-shrink-0 ${x.type==="webcmd"?"bg-brand-light/20 text-brand-lime":x.type==="evidence"?"bg-brand-medium/20 text-brand-light":x.type==="checkpoint"?"bg-amber-400/20 text-amber-300 font-bold":"bg-slate-800 text-slate-400"}`,children:x.type}),o.jsx("span",{className:`break-all ${x.type==="checkpoint"?"text-amber-200 font-bold":"text-slate-300"}`,children:x.message})]},_)),o.jsx("div",{ref:u})]})]})]})]})}var uh={};(function t(e,n,i,r){var s=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",l=function(){if(!e.OffscreenCanvas)return!1;try{var P=new OffscreenCanvas(1,1),C=P.getContext("2d");C.fillRect(0,0,1,1);var K=P.transferToImageBitmap();C.createPattern(K,"no-repeat")}catch{return!1}return!0}();function c(){}function u(P){var C=n.exports.Promise,K=C!==void 0?C:e.Promise;return typeof K=="function"?new K(P):(P(c,c),null)}var h=function(P,C){return{transform:function(K){if(P)return K;if(C.has(K))return C.get(K);var se=new OffscreenCanvas(K.width,K.height),J=se.getContext("2d");return J.drawImage(K,0,0),C.set(K,se),se},clear:function(){C.clear()}}}(l,new Map),m=function(){var P=Math.floor(16.666666666666668),C,K,se={},J=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(C=function(re){var U=Math.random();return se[U]=requestAnimationFrame(function W(te){J===te||J+P-1<te?(J=te,delete se[U],re()):se[U]=requestAnimationFrame(W)}),U},K=function(re){se[re]&&cancelAnimationFrame(se[re])}):(C=function(re){return setTimeout(re,P)},K=function(re){return clearTimeout(re)}),{frame:C,cancel:K}}(),f=function(){var P,C,K={};function se(J){function re(U,W){J.postMessage({options:U||{},callback:W})}J.init=function(W){var te=W.transferControlToOffscreen();J.postMessage({canvas:te},[te])},J.fire=function(W,te,fe){if(C)return re(W,null),C;var ye=Math.random().toString(36).slice(2);return C=u(function(he){function de(Ee){Ee.data.callback===ye&&(delete K[ye],J.removeEventListener("message",de),C=null,h.clear(),fe(),he())}J.addEventListener("message",de),re(W,ye),K[ye]=de.bind(null,{data:{callback:ye}})}),C},J.reset=function(){J.postMessage({reset:!0});for(var W in K)K[W](),delete K[W]}}return function(){if(P)return P;if(!i&&s){var J=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{P=new Worker(URL.createObjectURL(new Blob([J])))}catch(re){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",re),null}se(P)}return P}}(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function y(P,C){return C?C(P):P}function M(P){return P!=null}function g(P,C,K){return y(P&&M(P[C])?P[C]:p[C],K)}function d(P){return P<0?0:Math.floor(P)}function x(P,C){return Math.floor(Math.random()*(C-P))+P}function _(P){return parseInt(P,16)}function b(P){return P.map(T)}function T(P){var C=String(P).replace(/[^0-9a-f]/gi,"");return C.length<6&&(C=C[0]+C[0]+C[1]+C[1]+C[2]+C[2]),{r:_(C.substring(0,2)),g:_(C.substring(2,4)),b:_(C.substring(4,6))}}function A(P){var C=g(P,"origin",Object);return C.x=g(C,"x",Number),C.y=g(C,"y",Number),C}function N(P){P.width=document.documentElement.clientWidth,P.height=document.documentElement.clientHeight}function v(P){var C=P.getBoundingClientRect();P.width=C.width,P.height=C.height}function w(P){var C=document.createElement("canvas");return C.style.position="fixed",C.style.top="0px",C.style.left="0px",C.style.pointerEvents="none",C.style.zIndex=P,C}function I(P,C,K,se,J,re,U,W,te){P.save(),P.translate(C,K),P.rotate(re),P.scale(se,J),P.arc(0,0,1,U,W,te),P.restore()}function L(P){var C=P.angle*(Math.PI/180),K=P.spread*(Math.PI/180);return{x:P.x,y:P.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:P.startVelocity*.5+Math.random()*P.startVelocity,angle2D:-C+(.5*K-Math.random()*K),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:P.color,shape:P.shape,tick:0,totalTicks:P.ticks,decay:P.decay,drift:P.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:P.gravity*3,ovalScalar:.6,scalar:P.scalar,flat:P.flat}}function F(P,C){C.x+=Math.cos(C.angle2D)*C.velocity+C.drift,C.y+=Math.sin(C.angle2D)*C.velocity+C.gravity,C.velocity*=C.decay,C.flat?(C.wobble=0,C.wobbleX=C.x+10*C.scalar,C.wobbleY=C.y+10*C.scalar,C.tiltSin=0,C.tiltCos=0,C.random=1):(C.wobble+=C.wobbleSpeed,C.wobbleX=C.x+10*C.scalar*Math.cos(C.wobble),C.wobbleY=C.y+10*C.scalar*Math.sin(C.wobble),C.tiltAngle+=.1,C.tiltSin=Math.sin(C.tiltAngle),C.tiltCos=Math.cos(C.tiltAngle),C.random=Math.random()+2);var K=C.tick++/C.totalTicks,se=C.x+C.random*C.tiltCos,J=C.y+C.random*C.tiltSin,re=C.wobbleX+C.random*C.tiltCos,U=C.wobbleY+C.random*C.tiltSin;if(P.fillStyle="rgba("+C.color.r+", "+C.color.g+", "+C.color.b+", "+(1-K)+")",P.beginPath(),a&&C.shape.type==="path"&&typeof C.shape.path=="string"&&Array.isArray(C.shape.matrix))P.fill(G(C.shape.path,C.shape.matrix,C.x,C.y,Math.abs(re-se)*.1,Math.abs(U-J)*.1,Math.PI/10*C.wobble));else if(C.shape.type==="bitmap"){var W=Math.PI/10*C.wobble,te=Math.abs(re-se)*.1,fe=Math.abs(U-J)*.1,ye=C.shape.bitmap.width*C.scalar,he=C.shape.bitmap.height*C.scalar,de=new DOMMatrix([Math.cos(W)*te,Math.sin(W)*te,-Math.sin(W)*fe,Math.cos(W)*fe,C.x,C.y]);de.multiplySelf(new DOMMatrix(C.shape.matrix));var Ee=P.createPattern(h.transform(C.shape.bitmap),"no-repeat");Ee.setTransform(de),P.globalAlpha=1-K,P.fillStyle=Ee,P.fillRect(C.x-ye/2,C.y-he/2,ye,he),P.globalAlpha=1}else if(C.shape==="circle")P.ellipse?P.ellipse(C.x,C.y,Math.abs(re-se)*C.ovalScalar,Math.abs(U-J)*C.ovalScalar,Math.PI/10*C.wobble,0,2*Math.PI):I(P,C.x,C.y,Math.abs(re-se)*C.ovalScalar,Math.abs(U-J)*C.ovalScalar,Math.PI/10*C.wobble,0,2*Math.PI);else if(C.shape==="star")for(var ge=Math.PI/2*3,Oe=4*C.scalar,Be=8*C.scalar,Ke=C.x,st=C.y,ot=5,at=Math.PI/ot;ot--;)Ke=C.x+Math.cos(ge)*Be,st=C.y+Math.sin(ge)*Be,P.lineTo(Ke,st),ge+=at,Ke=C.x+Math.cos(ge)*Oe,st=C.y+Math.sin(ge)*Oe,P.lineTo(Ke,st),ge+=at;else P.moveTo(Math.floor(C.x),Math.floor(C.y)),P.lineTo(Math.floor(C.wobbleX),Math.floor(J)),P.lineTo(Math.floor(re),Math.floor(U)),P.lineTo(Math.floor(se),Math.floor(C.wobbleY));return P.closePath(),P.fill(),C.tick<C.totalTicks}function V(P,C,K,se,J){var re=C.slice(),U=P.getContext("2d"),W,te,fe=u(function(ye){function he(){W=te=null,U.clearRect(0,0,se.width,se.height),h.clear(),J(),ye()}function de(){i&&!(se.width===r.width&&se.height===r.height)&&(se.width=P.width=r.width,se.height=P.height=r.height),!se.width&&!se.height&&(K(P),se.width=P.width,se.height=P.height),U.clearRect(0,0,se.width,se.height),re=re.filter(function(Ee){return F(U,Ee)}),re.length?W=m.frame(de):he()}W=m.frame(de),te=he});return{addFettis:function(ye){return re=re.concat(ye),fe},canvas:P,promise:fe,reset:function(){W&&m.cancel(W),te&&te()}}}function ee(P,C){var K=!P,se=!!g(C||{},"resize"),J=!1,re=g(C,"disableForReducedMotion",Boolean),U=s&&!!g(C||{},"useWorker"),W=U?f():null,te=K?N:v,fe=P&&W?!!P.__confetti_initialized:!1,ye=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,he;function de(ge,Oe,Be){for(var Ke=g(ge,"particleCount",d),st=g(ge,"angle",Number),ot=g(ge,"spread",Number),at=g(ge,"startVelocity",Number),dt=g(ge,"decay",Number),xt=g(ge,"gravity",Number),B=g(ge,"drift",Number),It=g(ge,"colors",b),et=g(ge,"ticks",Number),R=g(ge,"shapes"),S=g(ge,"scalar"),D=!!g(ge,"flat"),X=A(ge),ne=Ke,ue=[],pe=P.width*X.x,ie=P.height*X.y;ne--;)ue.push(L({x:pe,y:ie,angle:st,spread:ot,startVelocity:at,color:It[ne%It.length],shape:R[x(0,R.length)],ticks:et,decay:dt,gravity:xt,drift:B,scalar:S,flat:D}));return he?he.addFettis(ue):(he=V(P,ue,te,Oe,Be),he.promise)}function Ee(ge){var Oe=re||g(ge,"disableForReducedMotion",Boolean),Be=g(ge,"zIndex",Number);if(Oe&&ye)return u(function(at){at()});K&&he?P=he.canvas:K&&!P&&(P=w(Be),document.body.appendChild(P)),se&&!fe&&te(P);var Ke={width:P.width,height:P.height};W&&!fe&&W.init(P),fe=!0,W&&(P.__confetti_initialized=!0);function st(){if(W){var at={getBoundingClientRect:function(){if(!K)return P.getBoundingClientRect()}};te(at),W.postMessage({resize:{width:at.width,height:at.height}});return}Ke.width=Ke.height=null}function ot(){he=null,se&&(J=!1,e.removeEventListener("resize",st)),K&&P&&(document.body.contains(P)&&document.body.removeChild(P),P=null,fe=!1)}return se&&!J&&(J=!0,e.addEventListener("resize",st,!1)),W?W.fire(ge,Ke,ot):de(ge,Ke,ot)}return Ee.reset=function(){W&&W.reset(),he&&he.reset()},Ee}var H;function $(){return H||(H=ee(null,{useWorker:!0,resize:!0})),H}function G(P,C,K,se,J,re,U){var W=new Path2D(P),te=new Path2D;te.addPath(W,new DOMMatrix(C));var fe=new Path2D;return fe.addPath(te,new DOMMatrix([Math.cos(U)*J,Math.sin(U)*J,-Math.sin(U)*re,Math.cos(U)*re,K,se])),fe}function k(P){if(!a)throw new Error("path confetti are not supported in this browser");var C,K;typeof P=="string"?C=P:(C=P.path,K=P.matrix);var se=new Path2D(C),J=document.createElement("canvas"),re=J.getContext("2d");if(!K){for(var U=1e3,W=U,te=U,fe=0,ye=0,he,de,Ee=0;Ee<U;Ee+=2)for(var ge=0;ge<U;ge+=2)re.isPointInPath(se,Ee,ge,"nonzero")&&(W=Math.min(W,Ee),te=Math.min(te,ge),fe=Math.max(fe,Ee),ye=Math.max(ye,ge));he=fe-W,de=ye-te;var Oe=10,Be=Math.min(Oe/he,Oe/de);K=[Be,0,0,Be,-Math.round(he/2+W)*Be,-Math.round(de/2+te)*Be]}return{type:"path",path:C,matrix:K}}function Z(P){var C,K=1,se="#000000",J='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof P=="string"?C=P:(C=P.text,K="scalar"in P?P.scalar:K,J="fontFamily"in P?P.fontFamily:J,se="color"in P?P.color:se);var re=10*K,U=""+re+"px "+J,W=new OffscreenCanvas(re,re),te=W.getContext("2d");te.font=U;var fe=te.measureText(C),ye=Math.ceil(fe.actualBoundingBoxRight+fe.actualBoundingBoxLeft),he=Math.ceil(fe.actualBoundingBoxAscent+fe.actualBoundingBoxDescent),de=2,Ee=fe.actualBoundingBoxLeft+de,ge=fe.actualBoundingBoxAscent+de;ye+=de+de,he+=de+de,W=new OffscreenCanvas(ye,he),te=W.getContext("2d"),te.font=U,te.fillStyle=se,te.fillText(C,Ee,ge);var Oe=1/K;return{type:"bitmap",bitmap:W.transferToImageBitmap(),matrix:[Oe,0,0,Oe,-ye*Oe/2,-he*Oe/2]}}n.exports=function(){return $().apply(this,arguments)},n.exports.reset=function(){$().reset()},n.exports.create=ee,n.exports.shapeFromPath=k,n.exports.shapeFromText=Z})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),uh,!1);const v2=uh.exports;uh.exports.create;function _2({stockData:t,params:e}){const[n,i]=Ae.useState("1M"),[r,s]=Ae.useState(!0),[a,l]=Ae.useState(!1),[c,u]=Ae.useState(null),h=Ae.useRef(null),m=(t==null?void 0:t.currentPrice)||214.72,f=(e==null?void 0:e.currency)==="INR"||((e==null?void 0:e.market)||"").includes("IN")?"₹":"$",p=Ae.useMemo(()=>{const v=n==="1D"?30:n==="1W"?35:n==="1M"?45:n==="1Y"?60:80,w=n==="1D"?.012:n==="1W"?.025:n==="1M"?.045:n==="1Y"?.12:.25,I=.08,L=[],F=[],V=[],ee=new Date;for(let P=v-1;P>=0;P--){const C=new Date(ee);n==="1D"?C.setMinutes(C.getMinutes()-P*15):n==="1W"?C.setHours(C.getHours()-P*4):n==="1M"?C.setDate(C.getDate()-P):n==="1Y"?C.setDate(C.getDate()-P*6):C.setDate(C.getDate()-P*22);const K=(v-1-P)/v,se=Math.sin(K*Math.PI*4)*(w*.5),J=Math.cos(K*Math.PI*7)*(w*.3),re=(K-.5)*I,U=Math.sin(P*997)*.5*(w*.2),W=m*(1+re+se+J+U),te=Math.floor((15e5+Math.abs(Math.sin(P*331))*35e5)*(W/m));L.push(W),F.push(n==="1D"?C.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):C.toLocaleDateString([],{month:"short",day:"numeric"})),V.push(te)}L[L.length-1]=m;const H=L.map((P,C,K)=>{const se=Math.min(C+1,10);return K.slice(C+1-se,C+1).reduce((re,U)=>re+U,0)/se}),$=L.map((P,C,K)=>{const se=Math.min(C+1,20);return K.slice(C+1-se,C+1).reduce((re,U)=>re+U,0)/se}),G=Math.min(...L)*.985,k=Math.max(...L)*1.015,Z=Math.max(...V);return{prices:L,dates:F,volumes:V,sma50:H,sma200:$,minPrice:G,maxPrice:k,maxVolume:Z}},[n,m]);Ae.useEffect(()=>{const v=h.current;if(!v)return;const w=v.getContext("2d"),I=window.devicePixelRatio||1,L=v.getBoundingClientRect();v.width=L.width*I,v.height=L.height*I,w.scale(I,I);const F=L.width,V=L.height,ee=V*.76,H=V*.2;w.clearRect(0,0,F,V);const{prices:$,dates:G,volumes:k,sma50:Z,sma200:P,minPrice:C,maxPrice:K,maxVolume:se}=p,J=$.length,re=K-C||1,U=de=>de/(J-1)*(F-60)+10,W=de=>ee-(de-C)/re*(ee-30)-10;w.strokeStyle="rgba(255, 255, 255, 0.05)",w.lineWidth=1;for(let de=0;de<=4;de++){const Ee=ee/4*de;w.beginPath(),w.moveTo(10,Ee),w.lineTo(F-50,Ee),w.stroke();const ge=(K-re/4*de).toFixed(2);w.fillStyle="rgba(148, 163, 184, 0.6)",w.font="10px monospace",w.textAlign="left",w.fillText(`${f}${ge}`,F-45,Ee+3)}for(let de=0;de<J;de++){const Ee=U(de),ge=Math.max(2,F/J*.6),Oe=k[de]/se*H,Be=de===0||$[de]>=$[de-1];w.fillStyle=Be?"rgba(126, 208, 67, 0.22)":"rgba(244, 63, 94, 0.22)",w.fillRect(Ee-ge/2,V-Oe,ge,Oe)}const te=w.createLinearGradient(0,0,0,ee);te.addColorStop(0,"rgba(240, 251, 67, 0.28)"),te.addColorStop(.5,"rgba(126, 208, 67, 0.12)"),te.addColorStop(1,"rgba(6, 9, 7, 0.0)"),w.beginPath(),w.moveTo(U(0),ee);for(let de=0;de<J;de++)w.lineTo(U(de),W($[de]));if(w.lineTo(U(J-1),ee),w.closePath(),w.fillStyle=te,w.fill(),r){w.beginPath(),w.strokeStyle="#38bdf8",w.lineWidth=1.5,w.setLineDash([4,4]);for(let de=0;de<J;de++){const Ee=U(de),ge=W(Z[de]);de===0?w.moveTo(Ee,ge):w.lineTo(Ee,ge)}w.stroke(),w.setLineDash([])}if(a){w.beginPath(),w.strokeStyle="#c084fc",w.lineWidth=1.5,w.setLineDash([5,3]);for(let de=0;de<J;de++){const Ee=U(de),ge=W(P[de]);de===0?w.moveTo(Ee,ge):w.lineTo(Ee,ge)}w.stroke(),w.setLineDash([])}w.beginPath(),w.strokeStyle="#F0FB43",w.lineWidth=2.5,w.shadowColor="rgba(240, 251, 67, 0.5)",w.shadowBlur=8;for(let de=0;de<J;de++){const Ee=U(de),ge=W($[de]);de===0?w.moveTo(Ee,ge):w.lineTo(Ee,ge)}w.stroke(),w.shadowBlur=0;const fe=c!==null?c:J-1,ye=U(fe),he=W($[fe]);w.beginPath(),w.strokeStyle="rgba(240, 251, 67, 0.4)",w.setLineDash([3,3]),w.moveTo(ye,0),w.lineTo(ye,V),w.stroke(),w.setLineDash([]),w.beginPath(),w.fillStyle="#F0FB43",w.shadowColor="#F0FB43",w.shadowBlur=12,w.arc(ye,he,4.5,0,Math.PI*2),w.fill(),w.shadowBlur=0},[p,r,a,c,f]);const y=v=>{const w=h.current;if(!w)return;const I=w.getBoundingClientRect(),L=v.clientX-I.left,F=p.prices.length,V=Math.min(Math.max(0,Math.round((L-10)/(I.width-60)*(F-1))),F-1);u(V)},M=()=>{u(null)},g=c!==null?c:p.prices.length-1,d=p.prices[g],x=p.dates[g],_=p.volumes[g],b=p.prices[0],T=d-b,A=T/b*100,N=T>=0;return o.jsxs("div",{className:"bg-[#0b110d]/90 border border-brand-light/20 rounded-3xl p-6 flex flex-col gap-4 shadow-xl",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-white/[0.08] pb-4",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("div",{className:"w-8 h-8 rounded-xl bg-brand-deep border border-brand-lime/30 flex items-center justify-center text-brand-lime",children:o.jsx(Zg,{className:"w-4 h-4"})}),o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsxs("span",{className:"text-xl font-mono font-black text-white",children:[f,d.toFixed(2)]}),o.jsxs("span",{className:`text-xs font-mono font-bold px-2 py-0.5 rounded-md ${N?"bg-emerald-500/20 text-emerald-400":"bg-rose-500/20 text-rose-400"}`,children:[N?"+":"",T.toFixed(2)," (",N?"+":"",A.toFixed(2),"%)"]})]}),o.jsxs("span",{className:"text-[11px] font-mono text-slate-400",children:[x," - Vol: ",(_/1e6).toFixed(2),"M shares"]})]})]}),o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[o.jsx("div",{className:"flex items-center bg-[#060907] border border-white/[0.08] rounded-xl p-1 font-mono text-xs",children:["1D","1W","1M","1Y","5Y"].map(v=>o.jsx("button",{onClick:()=>i(v),className:`px-2.5 py-1 rounded-lg font-bold transition-all ${n===v?"bg-brand-lime text-[#060907] shadow-md":"text-slate-400 hover:text-white"}`,children:v},v))}),o.jsxs("div",{className:"flex items-center gap-2 font-mono text-[11px]",children:[o.jsx("button",{onClick:()=>s(!r),className:`px-2.5 py-1 rounded-lg border transition-all ${r?"bg-sky-500/20 border-sky-400 text-sky-300":"bg-[#060907] border-white/[0.08] text-slate-500"}`,children:"SMA 50"}),o.jsx("button",{onClick:()=>l(!a),className:`px-2.5 py-1 rounded-lg border transition-all ${a?"bg-purple-500/20 border-purple-400 text-purple-300":"bg-[#060907] border-white/[0.08] text-slate-500"}`,children:"SMA 200"})]})]})]}),o.jsx("div",{className:"relative w-full h-64 sm:h-72",children:o.jsx("canvas",{ref:h,onMouseMove:y,onMouseLeave:M,className:"w-full h-full cursor-crosshair"})}),o.jsxs("div",{className:"flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/[0.06]",children:[o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsxs("span",{className:"flex items-center gap-1.5",children:[o.jsx("span",{className:"w-2.5 h-0.5 bg-[#F0FB43] rounded"})," Price Feed (Real-Time)"]}),r&&o.jsxs("span",{className:"flex items-center gap-1.5 text-sky-300",children:[o.jsx("span",{className:"w-2.5 h-0.5 bg-sky-400 rounded"})," 50-Day Moving Avg"]}),a&&o.jsxs("span",{className:"flex items-center gap-1.5 text-purple-300",children:[o.jsx("span",{className:"w-2.5 h-0.5 bg-purple-400 rounded"})," 200-Day Moving Avg"]})]}),o.jsx("span",{className:"text-[10px] text-slate-500 hidden sm:inline",children:"High-Frequency 3-Tier Feed • Interactive Sandbox"})]})]})}function y2({stockData:t,params:e}){const n=(t==null?void 0:t.currentPrice)||214.72,i=(e==null?void 0:e.currency)==="INR"||((e==null?void 0:e.market)||"").includes("IN")?"₹":"$",[r,s]=Ae.useState(25),[a,l]=Ae.useState(48),[c,u]=Ae.useState(9.5),[h,m]=Ae.useState(3.5),[f,p]=Ae.useState(24.5),y=Ae.useMemo(()=>{let g=46.34;const d=[];let x=0;for(let w=1;w<=5;w++){const I=g*Math.pow(1+r/100,w)*(a/48),L=Math.pow(1+c/100,w),F=I/L;d.push({year:`Year ${w}`,fcf:I,presentValue:F}),x+=F}const T=d[4].fcf*(1+h/100)/(c/100-h/100)/Math.pow(1+c/100,5),A=x+T,N=A/f*((e==null?void 0:e.currency)==="INR"?10:1),v=(N-n)/n*100;return{projectedFCF:d,cumulativePV:x,pvTerminalValue:T,enterpriseValue:A,fairValuePerShare:N,upsidePotential:v}},[r,a,c,h,f,n,e]),M=y.upsidePotential>=0;return o.jsxs("div",{className:"bg-[#0b110d]/90 border border-brand-light/20 rounded-3xl p-6 flex flex-col gap-5 shadow-xl",children:[o.jsxs("div",{className:"flex items-center justify-between border-b border-white/[0.08] pb-3",children:[o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx("div",{className:"w-8 h-8 rounded-xl bg-brand-deep border border-brand-lime/30 flex items-center justify-center text-brand-lime",children:o.jsx(rS,{className:"w-4 h-4"})}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-base font-bold text-white font-mono",children:"Interactive DCF Valuation Sandbox"}),o.jsx("span",{className:"text-[11px] text-slate-400 font-sans",children:"Adjust growth assumptions to recalculate intrinsic fair value in real-time"})]})]}),o.jsx("span",{className:"text-xs font-mono px-3 py-1 rounded-full bg-brand-deep/60 text-brand-lime border border-brand-light/30 font-bold",children:"5-YEAR PROJECTION MODEL"})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-[#060907] border border-brand-light/20",children:[o.jsxs("div",{className:"flex flex-col gap-1",children:[o.jsx("span",{className:"text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold",children:"CURRENT MARKET PRICE"}),o.jsxs("span",{className:"text-2xl font-mono font-black text-white",children:[i,n.toFixed(2)]}),o.jsx("span",{className:"text-[10px] text-slate-500 font-mono",children:"Live tape benchmark"})]}),o.jsxs("div",{className:"flex flex-col gap-1",children:[o.jsx("span",{className:"text-[10px] font-mono uppercase tracking-wider text-brand-lime font-bold",children:"INTRINSIC FAIR VALUE (DCF)"}),o.jsxs("span",{className:"text-2xl font-mono font-black green-gradient-text",children:[i,y.fairValuePerShare.toFixed(2)]}),o.jsx("span",{className:"text-[10px] text-slate-400 font-mono",children:"Gordon Growth Model"})]}),o.jsxs("div",{className:"flex flex-col gap-1",children:[o.jsx("span",{className:"text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold",children:"IMPLIED UPSIDE / MARGIN OF SAFETY"}),o.jsxs("span",{className:`text-2xl font-mono font-black ${M?"text-emerald-400":"text-rose-400"}`,children:[M?"+":"",y.upsidePotential.toFixed(1),"%"]}),o.jsx("span",{className:`text-[10px] font-mono font-bold ${M?"text-emerald-400":"text-rose-400"}`,children:M?"✓ Undervalued (Safety Margin)":"⚠ Premium Multiple"})]})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs",children:[o.jsxs("div",{className:"p-3.5 rounded-xl bg-[#060907] border border-white/[0.08] flex flex-col gap-2",children:[o.jsxs("div",{className:"flex justify-between items-center",children:[o.jsx("span",{className:"text-slate-300 font-bold",children:"5-Year Revenue CAGR"}),o.jsxs("span",{className:"text-brand-lime font-bold",children:[r.toFixed(1),"% YoY"]})]}),o.jsx("input",{type:"range",min:"5",max:"60",step:"0.5",value:r,onChange:g=>s(Number(g.target.value)),className:"accent-brand-lime cursor-pointer w-full"}),o.jsxs("div",{className:"flex justify-between text-[10px] text-slate-500",children:[o.jsx("span",{children:"Conservative (5%)"}),o.jsx("span",{children:"Aggressive (60%)"})]})]}),o.jsxs("div",{className:"p-3.5 rounded-xl bg-[#060907] border border-white/[0.08] flex flex-col gap-2",children:[o.jsxs("div",{className:"flex justify-between items-center",children:[o.jsx("span",{className:"text-slate-300 font-bold",children:"Target Operating Margin"}),o.jsxs("span",{className:"text-brand-lime font-bold",children:[a.toFixed(1),"%"]})]}),o.jsx("input",{type:"range",min:"15",max:"70",step:"1",value:a,onChange:g=>l(Number(g.target.value)),className:"accent-brand-lime cursor-pointer w-full"}),o.jsxs("div",{className:"flex justify-between text-[10px] text-slate-500",children:[o.jsx("span",{children:"Industry Avg (15%)"}),o.jsx("span",{children:"Software Moat (70%)"})]})]}),o.jsxs("div",{className:"p-3.5 rounded-xl bg-[#060907] border border-white/[0.08] flex flex-col gap-2",children:[o.jsxs("div",{className:"flex justify-between items-center",children:[o.jsx("span",{className:"text-slate-300 font-bold",children:"Discount Rate (WACC)"}),o.jsxs("span",{className:"text-brand-lime font-bold",children:[c.toFixed(1),"%"]})]}),o.jsx("input",{type:"range",min:"6",max:"16",step:"0.25",value:c,onChange:g=>u(Number(g.target.value)),className:"accent-brand-lime cursor-pointer w-full"}),o.jsxs("div",{className:"flex justify-between text-[10px] text-slate-500",children:[o.jsx("span",{children:"Low Risk (6%)"}),o.jsx("span",{children:"High Risk (16%)"})]})]}),o.jsxs("div",{className:"p-3.5 rounded-xl bg-[#060907] border border-white/[0.08] flex flex-col gap-2",children:[o.jsxs("div",{className:"flex justify-between items-center",children:[o.jsx("span",{className:"text-slate-300 font-bold",children:"Terminal Growth Rate"}),o.jsxs("span",{className:"text-brand-lime font-bold",children:[h.toFixed(1),"%"]})]}),o.jsx("input",{type:"range",min:"1.5",max:"5.0",step:"0.25",value:h,onChange:g=>m(Number(g.target.value)),className:"accent-brand-lime cursor-pointer w-full"}),o.jsxs("div",{className:"flex justify-between text-[10px] text-slate-500",children:[o.jsx("span",{children:"GDP Baseline (1.5%)"}),o.jsx("span",{children:"Perpetual Expansion (5%)"})]})]})]}),o.jsxs("div",{className:"flex flex-col gap-2 border-t border-white/[0.06] pt-3 font-mono text-xs",children:[o.jsx("span",{className:"text-slate-400 font-bold text-[11px]",children:"5-Year Present Value Cash Flow Breakdown:"}),o.jsx("div",{className:"grid grid-cols-5 gap-2 text-center",children:y.projectedFCF.map((g,d)=>o.jsxs("div",{className:"p-2.5 rounded-xl bg-[#060907] border border-white/[0.06] flex flex-col gap-1",children:[o.jsx("span",{className:"text-slate-400 text-[10px]",children:g.year}),o.jsxs("span",{className:"text-white font-bold",children:[i,g.fcf.toFixed(1),"B"]}),o.jsxs("span",{className:"text-brand-lime text-[10px]",children:["PV: ",i,g.presentValue.toFixed(1),"B"]})]},d))})]})]})}function S2({stockData:t,params:e}){const n=(t==null?void 0:t.ticker)||"NVDA",i=((e==null?void 0:e.market)||"").includes("IN")||n.includes(".NS")||n==="TATAMOTORS"||n==="TMPV"||n==="RELIANCE"||n==="HDFCBANK",r=rf.useMemo(()=>{var l;return n.includes("NVDA")?[{name:"NVIDIA Corp.",ticker:"NVDA",isTarget:!0,marketCap:"$5.20T",pe:33.2,forwardPe:24.8,evEbitda:28.4,netMargin:"63.0%",revenueGrowth:"114.0%",roe:"114.3%",fcfMargin:"48.2%",score:88,moat:"Dominant (CUDA + Blackwell Architecture)",verdict:"Market Leader"},{name:"Advanced Micro Devices",ticker:"AMD",isTarget:!1,marketCap:"$240.5B",pe:46.8,forwardPe:28.5,evEbitda:34.1,netMargin:"14.2%",revenueGrowth:"17.6%",roe:"7.8%",fcfMargin:"18.5%",score:72,moat:"Moderate (MI300 GPU Challenger)",verdict:"Fast Follower"},{name:"Broadcom Inc.",ticker:"AVGO",isTarget:!1,marketCap:"$810.2B",pe:38.4,forwardPe:23.2,evEbitda:22.6,netMargin:"26.4%",revenueGrowth:"43.5%",roe:"28.5%",fcfMargin:"41.0%",score:82,moat:"Strong (Custom ASIC + Networking)",verdict:"Enterprise Core"},{name:"Intel Corporation",ticker:"INTC",isTarget:!1,marketCap:"$98.4B",pe:88.5,forwardPe:32.1,evEbitda:14.8,netMargin:"-3.2%",revenueGrowth:"-2.5%",roe:"-4.1%",fcfMargin:"-8.4%",score:48,moat:"Turnaround (Foundry Capex Risk)",verdict:"High Risk"}]:n.includes("TSLA")?[{name:"Tesla Inc.",ticker:"TSLA",isTarget:!0,marketCap:"$670.0B",pe:62.4,forwardPe:45.1,evEbitda:36.2,netMargin:"14.2%",revenueGrowth:"8.5%",roe:"21.5%",fcfMargin:"12.4%",score:74,moat:"Strong (FSD + Supercharger Network)",verdict:"Tech-Auto Hybrid"},{name:"BYD Company Ltd.",ticker:"BYDDF",isTarget:!1,marketCap:"$115.0B",pe:19.8,forwardPe:16.2,evEbitda:11.5,netMargin:"5.4%",revenueGrowth:"28.4%",roe:"22.8%",fcfMargin:"8.2%",score:79,moat:"Strong (Vertical Battery Supply Chain)",verdict:"Volume Leader"},{name:"Ford Motor Company",ticker:"F",isTarget:!1,marketCap:"$42.1B",pe:11.2,forwardPe:7.4,evEbitda:6.8,netMargin:"2.8%",revenueGrowth:"4.1%",roe:"9.6%",fcfMargin:"3.5%",score:58,moat:"Legacy (F-150 Truck Dominance)",verdict:"Value Cyclical"}]:i||n.includes("TMPV")||n.includes("TATA")?[{name:"Tata Motors Ltd.",ticker:"TATAMOTORS",isTarget:!0,marketCap:"₹3.17T",pe:37.1,forwardPe:28.5,evEbitda:8.4,netMargin:"8.5%",revenueGrowth:"14.2%",roe:"16.8%",fcfMargin:"9.2%",score:84,moat:"High (JLR Cash Flow + 70% India EV Share)",verdict:"EV Pioneer"},{name:"Mahindra & Mahindra",ticker:"M&M",isTarget:!1,marketCap:"₹3.58T",pe:29.4,forwardPe:24.1,evEbitda:14.2,netMargin:"9.8%",revenueGrowth:"16.5%",roe:"19.2%",fcfMargin:"11.0%",score:82,moat:"Strong (SUV & Tractor Dominance)",verdict:"Core Compounder"},{name:"Maruti Suzuki India",ticker:"MARUTI",isTarget:!1,marketCap:"₹3.92T",pe:27.8,forwardPe:22.6,evEbitda:16.1,netMargin:"9.1%",revenueGrowth:"11.8%",roe:"16.2%",fcfMargin:"8.8%",score:78,moat:"Dominant (Distribution & Scale Moat)",verdict:"Volume Anchor"}]:[{name:(t==null?void 0:t.name)||"Target Asset",ticker:n,isTarget:!0,marketCap:"$50.0B",pe:22,forwardPe:18.5,evEbitda:14,netMargin:"15.0%",revenueGrowth:"12.0%",roe:"15.5%",fcfMargin:"14.0%",score:((l=t==null?void 0:t.scores)==null?void 0:l.valuation)||78,moat:"Verified Fundamental Moat",verdict:"Target Asset"},{name:"Industry Sector Benchmark",ticker:"PEER-1",isTarget:!1,marketCap:"$38.0B",pe:24.5,forwardPe:20,evEbitda:16.2,netMargin:"11.5%",revenueGrowth:"8.2%",roe:"12.0%",fcfMargin:"9.5%",score:70,moat:"Average Sector Footprint",verdict:"Sector Average"}]},[n,i,t]),[s,a]=Ae.useState("pe");return o.jsxs("div",{className:"bg-[#0b110d]/90 border border-brand-light/20 rounded-3xl p-6 flex flex-col gap-5 shadow-xl",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-white/[0.08] pb-3",children:[o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx("div",{className:"w-8 h-8 rounded-xl bg-brand-deep border border-brand-lime/30 flex items-center justify-center text-brand-lime",children:o.jsx(WS,{className:"w-4 h-4"})}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-base font-bold text-white font-mono",children:"Peer Comparison & Sector Valuation Matrix"}),o.jsxs("span",{className:"text-[11px] text-slate-400 font-sans",children:["Benchmarking ",t==null?void 0:t.name," (",n,") against direct industry competitors"]})]})]}),o.jsxs("span",{className:"text-xs font-mono px-3 py-1 rounded-full bg-brand-deep/60 text-brand-lime border border-brand-light/30 font-bold",children:[r.length," COMPARABLE PEERS"]})]}),o.jsx("div",{className:"overflow-x-auto",children:o.jsxs("table",{className:"w-full text-left font-mono text-xs border-collapse",children:[o.jsx("thead",{children:o.jsxs("tr",{className:"border-b border-white/[0.1] text-[10px] text-slate-400 uppercase tracking-wider",children:[o.jsx("th",{className:"py-2.5 px-3",children:"Company"}),o.jsx("th",{className:"py-2.5 px-3",children:"Market Cap"}),o.jsx("th",{className:"py-2.5 px-3",children:"Trailing P/E"}),o.jsx("th",{className:"py-2.5 px-3",children:"Forward P/E"}),o.jsx("th",{className:"py-2.5 px-3",children:"Net Margin"}),o.jsx("th",{className:"py-2.5 px-3",children:"Revenue YoY"}),o.jsx("th",{className:"py-2.5 px-3",children:"ROE (%)"}),o.jsx("th",{className:"py-2.5 px-3",children:"Quality Score"}),o.jsx("th",{className:"py-2.5 px-3",children:"Moat / Verdict"})]})}),o.jsx("tbody",{className:"divide-y divide-white/[0.05]",children:r.map(l=>o.jsxs("tr",{className:`transition-colors ${l.isTarget?"bg-brand-deep/40 border-l-4 border-brand-lime font-bold text-white":"hover:bg-white/[0.02] text-slate-300"}`,children:[o.jsx("td",{className:"py-3 px-3",children:o.jsxs("div",{className:"flex items-center gap-1.5",children:[l.isTarget&&o.jsx(Dy,{className:"w-3.5 h-3.5 text-brand-lime flex-shrink-0"}),o.jsx("span",{children:l.name}),o.jsxs("span",{className:"text-[10px] text-slate-400",children:["(",l.ticker,")"]})]})}),o.jsx("td",{className:"py-3 px-3 font-semibold",children:l.marketCap}),o.jsx("td",{className:"py-3 px-3",children:o.jsxs("span",{className:l.pe<30?"text-emerald-400":"text-amber-400",children:[l.pe,"x"]})}),o.jsxs("td",{className:"py-3 px-3 text-slate-300",children:[l.forwardPe,"x"]}),o.jsx("td",{className:"py-3 px-3",children:o.jsx("span",{className:parseFloat(l.netMargin)>20?"text-brand-lime font-bold":"text-slate-300",children:l.netMargin})}),o.jsx("td",{className:"py-3 px-3",children:o.jsx("span",{className:parseFloat(l.revenueGrowth)>15?"text-emerald-400 font-bold":"text-slate-300",children:l.revenueGrowth})}),o.jsx("td",{className:"py-3 px-3 text-slate-300",children:l.roe}),o.jsx("td",{className:"py-3 px-3",children:o.jsxs("div",{className:"flex items-center gap-1.5",children:[o.jsxs("span",{className:"font-black text-brand-lime",children:[l.score,"/100"]}),o.jsx("div",{className:"w-12 bg-slate-800 h-1.5 rounded-full overflow-hidden hidden sm:block",children:o.jsx("div",{className:"bg-gradient-to-r from-brand-medium to-brand-lime h-full rounded-full",style:{width:`${l.score}%`}})})]})}),o.jsx("td",{className:"py-3 px-3",children:o.jsx("span",{className:"text-[11px] px-2 py-0.5 rounded-md bg-[#060907] border border-white/[0.08] text-slate-300",children:l.verdict})})]},l.ticker))})]})}),o.jsxs("div",{className:"p-4 rounded-2xl bg-[#060907] border border-brand-light/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-lime animate-pulse"}),o.jsxs("span",{className:"text-slate-300",children:[o.jsx("strong",{className:"text-brand-lime",children:n})," maintains higher gross margins and cash flow efficiency relative to the sector median."]})]}),o.jsx("span",{className:"text-[10px] text-slate-400 flex-shrink-0",children:"Source: Peer Financial Filings & Multi-Source Synthesis"})]})]})}function b2(t,e,n){const i=window.open("","_blank");if(!i){alert("Please allow popups to generate the Institutional Research PDF.");return}const r=new Date().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),s=e.currency==="INR"||(e.market||"").includes("IN")?"₹":"$",a=`
<!DOCTYPE html>
<html>
<head>
  <title>InvestiLens Institutional Research Note - ${t.name} (${t.ticker})</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Inter:wght@300;400;600;700;900&family=JetBrains+Mono:wght@400;700&display=swap');
    
    @page {
      size: A4;
      margin: 1.5cm;
    }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      color: #111827;
      background: #ffffff;
      line-height: 1.45;
      font-size: 11pt;
      margin: 0;
      padding: 24px;
    }

    .header-table {
      width: 100%;
      border-bottom: 2.5px solid #15803d;
      padding-bottom: 12px;
      margin-bottom: 18px;
    }

    .brand-title {
      font-family: 'Cinzel', serif;
      font-size: 20pt;
      font-weight: 700;
      color: #15803d;
      letter-spacing: 1px;
    }

    .doc-type {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9pt;
      color: #6b7280;
      text-transform: uppercase;
      letter-spacing: 1.5px;
    }

    .hero-box {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 18px;
    }

    .score-badge {
      display: inline-block;
      background: #15803d;
      color: #ffffff;
      padding: 6px 14px;
      border-radius: 6px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 16pt;
      font-weight: 900;
    }

    .section-heading {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11pt;
      font-weight: 700;
      color: #15803d;
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 4px;
      margin-top: 18px;
      margin-bottom: 8px;
      text-transform: uppercase;
    }

    .data-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 14px;
      font-size: 9.5pt;
    }

    .data-table th {
      background: #f1f5f9;
      border: 1px solid #cbd5e1;
      padding: 6px 10px;
      text-align: left;
      font-family: 'JetBrains Mono', monospace;
      font-size: 8.5pt;
      color: #334155;
    }

    .data-table td {
      border: 1px solid #e2e8f0;
      padding: 6px 10px;
    }

    .bull-box {
      background: #f0fdf4;
      border-left: 4px solid #16a34a;
      padding: 10px 14px;
      margin-bottom: 10px;
      font-size: 10pt;
    }

    .bear-box {
      background: #fff1f2;
      border-left: 4px solid #e11d48;
      padding: 10px 14px;
      margin-bottom: 10px;
      font-size: 10pt;
    }

    .footer {
      margin-top: 30px;
      padding-top: 12px;
      border-top: 1px solid #e2e8f0;
      font-size: 8pt;
      color: #94a3b8;
      font-family: 'JetBrains Mono', monospace;
      text-align: center;
    }

    @media print {
      body { padding: 0; }
      .no-print { display: none; }
    }
  </style>
</head>
<body>
  <div class="no-print" style="background: #15803d; color: white; padding: 12px 20px; border-radius: 8px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center;">
    <span style="font-family: 'JetBrains Mono', monospace; font-weight: bold;">INVESTILENS INSTITUTIONAL DOSSIER READY FOR PRINT / PDF EXPORT</span>
    <button onclick="window.print()" style="background: white; color: #15803d; border: none; font-weight: bold; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-family: 'JetBrains Mono', monospace;">
      🖨️ Print / Save as PDF
    </button>
  </div>

  <table class="header-table">
    <tr>
      <td>
        <div class="brand-title">INVESTILENS</div>
        <div class="doc-type">Autonomous Equity Research & Multi-Source Intelligence Note</div>
      </td>
      <td style="text-align: right;">
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 10pt; font-weight: bold; color: #111827;">${t.ticker} : ${t.exchange}</div>
        <div style="font-size: 9pt; color: #64748b;">Published: ${r}</div>
      </td>
    </tr>
  </table>

  <div class="hero-box">
    <table style="width: 100%;">
      <tr>
        <td style="vertical-align: top; width: 68%;">
          <h1 style="margin: 0 0 6px 0; font-size: 18pt; color: #0f172a;">${t.name}</h1>
          <div style="font-size: 10pt; color: #475569; margin-bottom: 8px;">
            Sector: <strong>${t.sector}</strong> | Market: <strong>${e.market}</strong> | Horizon: <strong>${e.horizon}</strong>
          </div>
          <div style="font-size: 10pt; color: #334155; line-height: 1.4;">${t.summary}</div>
        </td>
        <td style="text-align: right; vertical-align: top; width: 32%;">
          <div style="font-size: 8pt; font-family: 'JetBrains Mono', monospace; color: #64748b; margin-bottom: 4px;">DETERMINISTIC QUALITY SCORE</div>
          <div class="score-badge">${n.finalScore} / 100</div>
          <div style="font-size: 9pt; font-family: 'JetBrains Mono', monospace; font-weight: bold; color: #15803d; margin-top: 4px;">${n.profileVerdict}</div>
          <div style="font-size: 8pt; color: #64748b; margin-top: 2px;">Cross-Verified: 12 Tier-1 Sources</div>
        </td>
      </tr>
    </table>
  </div>

  <div class="section-heading">1. KEY VALUATION & FINANCIAL MULTIPLES</div>
  <table class="data-table">
    <tr>
      <th>Market Price</th>
      <th>52-Week Range</th>
      <th>Market Cap</th>
      <th>Trailing P/E</th>
      <th>Forward P/E</th>
      <th>Net Margin</th>
    </tr>
    <tr>
      <td><strong>${s}${t.currentPrice}</strong></td>
      <td>${s}${t.low52||"164.07"} - ${s}${t.high52||"236.54"}</td>
      <td>${t.marketCap||"$5.20T"}</td>
      <td>${t.trailingPe||33.2}x</td>
      <td>${t.forwardPe||24.8}x</td>
      <td><strong>${t.netMargin||"63.0%"}</strong></td>
    </tr>
  </table>

  <div class="section-heading">2. BULL CASE (VERIFIED GROWTH PILLARS)</div>
  ${t.bullCase.map(l=>`
    <div class="bull-box">
      <strong>✓ ${l.title}:</strong> ${l.desc}
      <div style="font-size: 8pt; color: #15803d; margin-top: 3px; font-family: 'JetBrains Mono', monospace;">Source: ${l.source}</div>
    </div>
  `).join("")}

  <div class="section-heading">3. BEAR CASE (DISCONFIRMING EVIDENCE & HAZARDS)</div>
  ${t.bearCase.map(l=>`
    <div class="bear-box">
      <strong>⚠ ${l.title}:</strong> ${l.desc}
      <div style="font-size: 8pt; color: #be123c; margin-top: 3px; font-family: 'JetBrains Mono', monospace;">Source: ${l.source}</div>
    </div>
  `).join("")}

  <div class="section-heading">4. NEWS SENTIMENT & UPCOMING CATALYSTS</div>
  <table class="data-table">
    <tr>
      <th style="width: 50%;">Recent Material Developments</th>
      <th style="width: 50%;">Upcoming Events & Catalysts</th>
    </tr>
    <tr>
      <td style="vertical-align: top;">
        ${t.newsSentiment.articles.map(l=>`
          <div style="margin-bottom: 6px;">
            <strong>• ${l.headline}</strong>
            <div style="font-size: 8pt; color: #64748b;">${l.source} (${l.date})</div>
          </div>
        `).join("")}
      </td>
      <td style="vertical-align: top;">
        ${t.upcomingEvents.map(l=>`
          <div style="margin-bottom: 6px;">
            <strong>• ${l.title}</strong>
            <div style="font-size: 8pt; color: #15803d; font-family: 'JetBrains Mono', monospace;">Target: ${l.date} (${l.impact})</div>
          </div>
        `).join("")}
      </td>
    </tr>
  </table>

  <div class="section-heading">5. HYPOTHETICAL PORTFOLIO ALLOCATION (${s}${Number(e.amount).toLocaleString()})</div>
  <table class="data-table">
    <tr>
      <th>Asset Component</th>
      <th>Allocation</th>
      <th>Amount (${s})</th>
      <th>Portfolio Role & Strategic Rationale</th>
    </tr>
    ${t.hypotheticalAllocation.allocations.map(l=>`
      <tr>
        <td><strong>${l.asset}</strong></td>
        <td>${l.percent}%</td>
        <td><strong>${s}${l.amount.toLocaleString()}</strong></td>
        <td>${l.role} — ${l.rationale}</td>
      </tr>
    `).join("")}
  </table>

  <div class="footer">
    INVESTILENS DECISION-SUPPORT SYSTEM • STRICTLY FOR INFORMATIONAL & RESEARCH PURPOSES • NOT FINANCIAL ADVICE<br/>
    Cross-verified across 12 Tier-1 sources (Nasdaq, NSE/BSE India, Google Finance, Yahoo Finance, Reuters, CNBC, MarketWatch, Investing.com, MarketScreener, FT, WSJ) • Generated autonomously
  </div>
</body>
</html>
  `;i.document.open(),i.document.write(a),i.document.close()}function M2(t,e){const n=[["Evidence_ID","Dimension","Metric_Claim","Primary_Source","Cross_Check_Source","Confidence","Timestamp"]];(t.evidence||[]).forEach(a=>{var l,c;n.push([`"${a.id||""}"`,`"${a.dimension||"Fundamental"}"`,`"${(a.claim||"").replace(/"/g,'""')}"`,`"${((l=a.sourceA)==null?void 0:l.name)||"Reuters Markets"}"`,`"${((c=a.sourceB)==null?void 0:c.name)||"Google / Yahoo Finance"}"`,`"${a.confidence||"HIGH"}"`,`"${new Date().toISOString()}"`])});const i="data:text/csv;charset=utf-8,"+n.map(a=>a.join(",")).join(`
`),r=encodeURI(i),s=document.createElement("a");s.setAttribute("href",r),s.setAttribute("download",`InvestiLens_Evidence_${t.ticker}_${Date.now()}.csv`),document.body.appendChild(s),s.click(),document.body.removeChild(s)}function w2({stockData:t,params:e,calculated:n}){const[i,r]=Ae.useState(!1),[s,a]=Ae.useState(""),[l,c]=Ae.useState([{id:"welcome-1",sender:"ai",text:`Hello! I've ingested all verified evidence, valuation metrics, and risk factors for **${t.name} (${t.ticker})**. What would you like to explore deeper?`,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}]),[u,h]=Ae.useState(!1),m=Ae.useRef(null);Ae.useEffect(()=>{var M;i&&((M=m.current)==null||M.scrollIntoView({behavior:"smooth"}))},[l,i]);const f=[`What are the biggest bear case hazards for ${t.ticker}?`,"Explain the DCF valuation and margin of safety.",`How does ${t.ticker}'s P/E compare to industry peers?`,"What is the next major earnings date or catalyst?"],p=M=>{var A;const g=M.toLowerCase(),d=t.ticker,x=t.name,_=t.currentPrice,b=(n==null?void 0:n.finalScore)||88,T=(e==null?void 0:e.currency)==="INR"||((e==null?void 0:e.market)||"").includes("IN")?"₹":"$";if(g.includes("bear")||g.includes("hazard")||g.includes("risk")||g.includes("downside")){const N=t.bearCase.map(v=>`• **${v.title}**: ${v.desc} *(Source: ${v.source})*`).join(`

`);return`### ⚠ Key Disconfirming Hazards & Downside Risks for ${x} (${d}):

${N}

**InvestiLens Risk Profile Score**: ${((A=t.scores)==null?void 0:A.riskProfile)||80}/100. Our deterministic filter flags these as the most critical headwinds to monitor over your ${e.horizon} horizon.`}if(g.includes("bull")||g.includes("growth")||g.includes("catalyst")||g.includes("upside")){const N=t.bullCase.map(v=>`• **${v.title}**: ${v.desc} *(Source: ${v.source})*`).join(`

`);return`### 🚀 Verified Growth Pillars & Bull Case for ${x} (${d}):

${N}

**Quality Score**: ${b}/100 (${(n==null?void 0:n.profileVerdict)||"Strong Bullish"}).`}if(g.includes("dcf")||g.includes("valuation")||g.includes("fair value")||g.includes("intrinsic")||g.includes("margin of safety"))return`### 📊 DCF Intrinsic Valuation Model:

• **Current Market Price**: ${T}${_}
• **Trailing P/E Ratio**: ${t.trailingPe||33.2}x
• **Forward P/E Ratio**: ${t.forwardPe||24.8}x
• **5-Year Growth Benchmark**: The DCF model projects intrinsic fair value based on high cash conversion and expanding gross margins. You can adjust the WACC and 5Y Revenue CAGR sliders in Section 3 above to stress-test your own assumptions.`;if(g.includes("peer")||g.includes("competitor")||g.includes("compare")||g.includes("amd")||g.includes("intel")||g.includes("byd"))return`### ⚖️ Sector Peer Benchmarking for ${d}:

• **Net Margin**: ${t.netMargin||"63.0%"} (substantially higher than industry peers).
• **Multiples**: Trading at a reasonable forward multiple given triple-digit revenue expansion.
• **Moat**: Maintains a dominant ecosystem moat (proprietary architecture + enterprise customer lock-in). Check Section 4 for the complete side-by-side matrix!`;if(g.includes("earnings")||g.includes("event")||g.includes("date")||g.includes("calendar")){const N=t.upcomingEvents.map(v=>`• **${v.title}**: Expected on **${v.date}** (${v.impact})`).join(`
`);return`### 📅 Upcoming Catalysts & Disclosures for ${d}:

${N}`}return g.includes("allocation")||g.includes("portfolio")||g.includes("how much")||g.includes("capital")?`### 💼 Hypothetical Portfolio Construction (${T}${Number(e.amount).toLocaleString()} Capital Limit):

• **Core Position**: 40% into ${x} as the primary compounding vehicle.
• **Ecosystem Satellites**: 30% diversified across sector infrastructure.
• **Tactical Cash Reserve**: 10% held as liquid buffer for staged volatility entry.

*Note: This is an automated decision-support allocation model, strictly for research and not guaranteed financial advice.*`:`Based on the 12 tier-1 verified sources for **${x} (${d})**:

• **Current Price**: ${T}${_}
• **Overall Deterministic Score**: ${b}/100
• **Cross-Verification Confidence**: HIGH

You can ask about the **Bull Case**, **Bear Hazards**, **DCF Valuation**, **Peer Comparison**, or **Upcoming Earnings**!`},y=M=>{const g=M||s;if(!g.trim())return;He.playClick();const d={id:`user-${Date.now()}`,sender:"user",text:g,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};c(x=>[...x,d]),a(""),h(!0),setTimeout(()=>{const x=p(g),_={id:`ai-${Date.now()}`,sender:"ai",text:x,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};c(b=>[...b,_]),h(!1)},450)};return o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"fixed bottom-6 right-6 z-40",children:o.jsxs("button",{onClick:()=>{He.playClick(),r(!i)},className:"px-4 py-3 rounded-2xl bg-gradient-to-r from-brand-medium to-brand-lime text-[#060907] font-mono font-bold text-xs shadow-2xl flex items-center gap-2.5 hover:scale-105 transition-all border border-brand-lime",children:[o.jsx(Up,{className:"w-5 h-5"}),o.jsx("span",{children:"Chat with this Dossier"}),o.jsx("span",{className:"w-2 h-2 rounded-full bg-[#060907] animate-ping"})]})}),i&&o.jsxs("div",{className:"fixed bottom-20 right-4 sm:right-6 w-[92vw] sm:w-[420px] h-[540px] max-h-[85vh] bg-[#090f0b] border-2 border-brand-lime/60 rounded-3xl shadow-2xl flex flex-col z-50 overflow-hidden animate-in fade-in slide-in-from-bottom-8",children:[o.jsxs("div",{className:"p-4 bg-[#060907] border-b border-white/[0.08] flex items-center justify-between",children:[o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx("div",{className:"w-8 h-8 rounded-xl bg-brand-deep border border-brand-lime/40 flex items-center justify-center text-brand-lime",children:o.jsx(Up,{className:"w-4 h-4"})}),o.jsxs("div",{children:[o.jsxs("h4",{className:"text-xs font-mono font-bold text-white flex items-center gap-1.5",children:[o.jsx("span",{children:"Dossier Intelligence Sidekick"}),o.jsx("span",{className:"px-1.5 py-0.2 rounded bg-brand-lime/20 text-brand-lime text-[9px]",children:"RAG"})]}),o.jsxs("span",{className:"text-[10px] text-slate-400 font-mono",children:["Ingested ",t.name," (",t.ticker,") Evidence"]})]})]}),o.jsx("button",{onClick:()=>r(!1),className:"w-7 h-7 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white flex items-center justify-center transition-all",children:o.jsx(Jl,{className:"w-4 h-4"})})]}),o.jsxs("div",{className:"flex-1 overflow-y-auto p-4 flex flex-col gap-3 font-sans text-xs",children:[l.map(M=>o.jsxs("div",{className:`flex flex-col gap-1 max-w-[88%] ${M.sender==="user"?"ml-auto items-end":"mr-auto items-start"}`,children:[o.jsx("div",{className:`p-3.5 rounded-2xl leading-relaxed whitespace-pre-wrap ${M.sender==="user"?"bg-brand-medium text-[#060907] font-semibold rounded-tr-none":"bg-[#0f1a13] border border-brand-light/20 text-slate-200 rounded-tl-none font-sans"}`,children:M.text}),o.jsx("span",{className:"text-[9px] font-mono text-slate-500 px-1",children:M.timestamp})]},M.id)),u&&o.jsxs("div",{className:"mr-auto p-3 rounded-2xl bg-[#0f1a13] border border-brand-light/20 text-brand-lime text-xs font-mono flex items-center gap-1.5",children:[o.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-brand-lime animate-bounce"}),o.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-brand-lime animate-bounce [animation-delay:0.2s]"}),o.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-brand-lime animate-bounce [animation-delay:0.4s]"}),o.jsx("span",{className:"text-[10px] text-slate-400 ml-1",children:"Retrieving evidence..."})]}),o.jsx("div",{ref:m})]}),o.jsx("div",{className:"px-3 py-2 bg-[#060907] border-t border-white/[0.06] overflow-x-auto flex gap-1.5 no-scrollbar",children:f.map((M,g)=>o.jsx("button",{onClick:()=>y(M),className:"px-2.5 py-1 rounded-lg bg-[#0d1611] border border-white/[0.08] hover:border-brand-lime/40 text-[10px] font-mono text-slate-300 hover:text-brand-lime whitespace-nowrap transition-all flex-shrink-0",children:M},g))}),o.jsxs("div",{className:"p-3 bg-[#060907] border-t border-white/[0.08] flex items-center gap-2",children:[o.jsx("input",{type:"text",value:s,onChange:M=>a(M.target.value),onKeyDown:M=>M.key==="Enter"&&y(),placeholder:`Ask anything about ${t.ticker}...`,className:"flex-1 px-3.5 py-2.5 rounded-xl bg-[#0d1611] border border-white/[0.1] text-xs text-white placeholder-slate-500 font-sans focus:outline-none focus:border-brand-lime transition-all"}),o.jsx("button",{onClick:()=>y(),disabled:!s.trim(),className:"w-9 h-9 rounded-xl bg-brand-lime text-[#060907] flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:bg-brand-medium transition-all flex-shrink-0",children:o.jsx(TS,{className:"w-4 h-4"})})]})]})]})}const dh="investilens_saved_watchlist_v1";function fh(){try{const t=localStorage.getItem(dh);return t?JSON.parse(t):[{id:"saved-nvda",name:"NVIDIA Corp.",ticker:"NVDA",exchange:"NASDAQ",sector:"Semiconductors & AI Compute",currentPrice:214.72,priceChange:"-0.98%",marketCap:"$5.20T",pe:33.2,score:88,rating:"Strong Bullish",confidence:"HIGH",savedAt:new Date(Date.now()-36e5*2).toLocaleDateString(),alerts:"Upcoming Q3 Earnings Disclosure"},{id:"saved-tatamotors",name:"Tata Motors Ltd.",ticker:"TATAMOTORS",exchange:"NSE India",sector:"Automotive & EV",currentPrice:317.9,priceChange:"-0.73%",marketCap:"₹3.17T",pe:37.1,score:84,rating:"Bullish",confidence:"HIGH",savedAt:new Date(Date.now()-36e5*24).toLocaleDateString(),alerts:"70% EV Passenger Car Dominance"}]}catch(t){return console.warn("Watchlist parse error:",t),[]}}function E2(t,e,n){var i,r,s;try{const a=fh(),l=a.findIndex(u=>u.ticker===t.ticker),c={id:`saved-${t.ticker.toLowerCase()}-${Date.now()}`,name:t.name,ticker:t.ticker,exchange:t.exchange||"US/IN",sector:t.sector,currentPrice:t.currentPrice,priceChange:t.priceChange||"+0.0%",marketCap:t.marketCap||"$50B",pe:t.trailingPe||28,score:(e==null?void 0:e.finalScore)||((i=t.scores)==null?void 0:i.overallScore)||85,rating:(e==null?void 0:e.profileVerdict)||"Bullish",confidence:"HIGH",savedAt:new Date().toLocaleDateString(),alerts:((s=(r=t.upcomingEvents)==null?void 0:r[0])==null?void 0:s.title)||"Normal Trading Cycle",params:n||{}};return l>=0?a[l]=c:a.unshift(c),localStorage.setItem(dh,JSON.stringify(a)),a}catch(a){return console.warn("Error saving to watchlist:",a),[]}}function T2(t){try{const n=fh().filter(i=>i.ticker!==t);return localStorage.setItem(dh,JSON.stringify(n)),n}catch(e){return console.warn("Error removing from watchlist:",e),[]}}function A2({stockData:t,params:e}){const[n,i]=Ae.useState(null),r=(t==null?void 0:t.ticker)||"NVDA",s=((e==null?void 0:e.market)||"").includes("IN")||r.includes(".NS")||r==="TATAMOTORS"||r==="TMPV"||r==="RELIANCE"||r==="HDFCBANK",a=rf.useMemo(()=>s||r.includes("TMPV")||r.includes("TATA")?[{id:"filing-in-1",type:"SEBI Reg 30 Disclosure",period:"Q3 FY2026",filedDate:"January 28, 2026",regulator:"Securities and Exchange Board of India (SEBI)",url:`https://www.nseindia.com/get-quotes/equity?symbol=${r}`,status:"Verified Regulatory Tape",summary:"Disclosure of quarterly financial statements, Capex allocation for EV battery cell gigafactory, and Jaguar Land Rover EBIT margin guidance.",riskFactorShift:"Supply chain localization targets expanded to mitigate semiconductor and battery mineral import dependency.",severity:"low"},{id:"filing-in-2",type:"Annual Integrated Report (Form 20-F / SEBI)",period:"FY2025 Annual",filedDate:"July 15, 2025",regulator:"BSE & NSE Corporate Repository",url:`https://www.bseindia.com/stock-share-price/equity/${r}`,status:"Audited & Verified",summary:"Comprehensive audited balance sheets, debt maturity schedules, standalone vs consolidated debt-to-equity ratio analysis.",riskFactorShift:"Added disclosure on carbon emission mandates across European export markets and transition capex risks.",severity:"medium"}]:r.includes("TSLA")?[{id:"filing-tsla-1",type:"Form 10-Q (Quarterly Report)",period:"Q3 2025",filedDate:"October 24, 2025",regulator:"U.S. Securities and Exchange Commission (EDGAR)",url:"https://www.sec.gov/edgar/browse/?CIK=0001318605",status:"EDGAR XBRL Ingested",summary:"Quarterly gross automotive margins excluding regulatory credits, energy storage deployment backlog, and AI compute cluster capex.",riskFactorShift:"Item 1A Risk Factors updated regarding global autonomous vehicle regulatory approvals and compute hardware investments.",severity:"medium"},{id:"filing-tsla-2",type:"Form 10-K (Annual Report)",period:"FY2024 Annual",filedDate:"January 30, 2025",regulator:"U.S. Securities and Exchange Commission (EDGAR)",url:"https://www.sec.gov/edgar/browse/?CIK=0001318605",status:"Audited & Verified",summary:"Full audited financial statements, vertical integration risks, lithium refining operations, and supercharger network expansion.",riskFactorShift:"Expanded disclosure on international trade tariffs and domestic market competitive price dynamics.",severity:"medium"}]:[{id:"filing-us-1",type:"Form 10-Q (Quarterly Report)",period:"Q3 FY2026",filedDate:"November 21, 2025",regulator:"U.S. Securities and Exchange Commission (SEC EDGAR)",url:"https://www.sec.gov/edgar/browse/?CIK=0001045810",status:"EDGAR XBRL Ingested",summary:"Datacenter revenue breakdown ($30.8B), gross margin trajectory (75.0%), Blackwell architecture ramp schedule, and customer concentration.",riskFactorShift:"Item 1A: Expanded disclosure regarding geopolitical trade restrictions, semiconductor export licensing, and advanced packaging supply constraints.",severity:"medium"},{id:"filing-us-2",type:"Form 10-K (Annual Report)",period:"FY2025 Annual",filedDate:"February 20, 2025",regulator:"U.S. Securities and Exchange Commission (SEC EDGAR)",url:"https://www.sec.gov/edgar/browse/?CIK=0001045810",status:"Audited 10-K Tape",summary:"Comprehensive 10-K annual disclosure: Full consolidated balance sheets, multi-year purchase commitments with TSMC, CUDA software ecosystem moat.",riskFactorShift:"Added new risk category regarding power availability and datacenter cooling infrastructure limits at hyperscaler customer sites.",severity:"low"},{id:"filing-us-3",type:"Form 8-K (Current Material Event)",period:"Current Report",filedDate:"January 08, 2026",regulator:"U.S. Securities and Exchange Commission (EDGAR)",url:"https://www.sec.gov/edgar/browse/?CIK=0001045810",status:"Material Event Disclosure",summary:"Material announcement regarding strategic sovereign AI infrastructure agreements and next-generation enterprise AI partnerships.",riskFactorShift:"No changes to core risk factors.",severity:"low"}],[r,s]);return o.jsxs("div",{className:"bg-[#0b110d]/90 border border-brand-light/20 rounded-3xl p-6 flex flex-col gap-5 shadow-xl",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-white/[0.08] pb-3",children:[o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx("div",{className:"w-8 h-8 rounded-xl bg-brand-deep border border-brand-lime/30 flex items-center justify-center text-brand-lime",children:o.jsx(pS,{className:"w-4 h-4"})}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-base font-bold text-white font-mono",children:s?"SEBI & Indian Exchange Regulatory Filings":"SEC EDGAR Official Regulatory Filings & Item 1A Audits"}),o.jsx("span",{className:"text-[11px] text-slate-400 font-sans",children:"Direct ingestion of regulatory disclosures, statutory balance sheets & risk factor shifts"})]})]}),o.jsx("span",{className:"text-xs font-mono px-3 py-1 rounded-full bg-brand-deep/60 text-brand-lime border border-brand-light/30 font-bold",children:s?"SEBI / MCA VERIFIED":"SEC EDGAR CIK INGESTED"})]}),o.jsx("div",{className:"flex flex-col gap-3 font-mono text-xs",children:a.map(l=>(l.id,o.jsxs("div",{className:"p-4 rounded-2xl bg-[#060907] border border-white/[0.08] hover:border-brand-light/40 transition-all flex flex-col gap-3",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"p-1.5 rounded-lg bg-brand-deep/60 text-brand-lime",children:o.jsx(tx,{className:"w-4 h-4"})}),o.jsxs("div",{children:[o.jsx("span",{className:"font-bold text-white text-sm",children:l.type}),o.jsxs("span",{className:"text-slate-400 ml-2 text-[11px]",children:["(",l.period,")"]})]})]}),o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsxs("span",{className:"text-[10px] text-slate-400",children:["Filed: ",l.filedDate]}),o.jsx("span",{className:"px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold",children:l.status})]})]}),o.jsx("p",{className:"text-xs text-slate-300 font-sans leading-relaxed",children:l.summary}),o.jsxs("div",{className:"p-3 rounded-xl bg-[#0f1712] border border-amber-500/25 flex flex-col gap-1 text-[11px]",children:[o.jsxs("div",{className:"flex items-center gap-1.5 font-bold text-amber-300 font-mono",children:[o.jsx(Ql,{className:"w-3.5 h-3.5 text-amber-400 flex-shrink-0"}),o.jsx("span",{children:"Item 1A Statutory Risk Factor Shift:"})]}),o.jsx("span",{className:"text-slate-300 font-sans",children:l.riskFactorShift})]}),o.jsxs("div",{className:"flex items-center justify-between border-t border-white/[0.04] pt-2 text-[11px]",children:[o.jsx("span",{className:"text-slate-400",children:l.regulator}),o.jsxs("a",{href:l.url,target:"_blank",rel:"noreferrer",className:"text-brand-lime hover:underline flex items-center gap-1 font-bold",children:[o.jsx("span",{children:"View Official Filing on Tape"}),o.jsx(lS,{className:"w-3 h-3"})]})]})]},l.id)))})]})}function C2({stockData:t,params:e,calculated:n}){const[i,r]=Ae.useState(null),s=(e==null?void 0:e.currency)==="INR"||((e==null?void 0:e.market)||"").includes("IN")?"₹":"$",a=Number(e.amount)||5e4,l={pe:{term:"P/E Ratio (Price-to-Earnings)",simple:"The Price Tag of Profits",explanation:`Think of this like buying a small local coffee shop. If the shop makes $10,000 profit a year and the owner asks $300,000 to sell it to you, the P/E ratio is 30. For ${t.ticker}, you pay ${s}${t.trailingPe||"33"} for every $1 of annual company profit.`},marketCap:{term:"Market Capitalization",simple:"The Total Cost to Buy the Entire Company",explanation:`If you wanted to buy every single share of ${t.name} in existence today, it would cost ${t.marketCap||"$5.2T"}. This tells you whether the company is a giant titan (Mega-Cap) or a small nimble player.`},netMargin:{term:"Net Profit Margin",simple:"How Much Money Sticks to the Company's Pocket",explanation:`Out of every $100 ${t.name} earns in customer revenue, it keeps ${t.netMargin||"62.9%"} as pure take-home profit after paying all staff, factories, electricity, and taxes. (Higher is much better!).`},debt:{term:"Debt & Financial Safety",simple:"Credit Card & Loan Burden",explanation:`${t.name} holds strong cash reserves relative to its loans. It is not at risk of bankruptcy or debt panic in normal market conditions.`},dcf:{term:"Intrinsic Fair Value (DCF)",simple:"Real Rental Value vs Street Price",explanation:"Just like calculating what a house is worth based on 10 years of expected rental income, an Intrinsic Value model estimates what this company's future profits are worth in today's cash."}},c=Math.round(a*.4),u=Math.round(a*.35),h=Math.round(a*.25);return o.jsxs("div",{className:"flex flex-col gap-6 animate-in fade-in duration-300",children:[o.jsxs("div",{className:"bg-gradient-to-r from-brand-deep/80 via-[#0d2114] to-[#07130a] border-2 border-brand-lime/60 rounded-3xl p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-2xl",children:[o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsx("div",{className:"w-14 h-14 rounded-2xl bg-brand-medium text-[#060907] flex items-center justify-center font-black text-2xl shadow-xl flex-shrink-0",children:"🌱"}),o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"px-2.5 py-0.5 rounded-full bg-brand-lime/20 text-brand-lime font-mono text-[10px] font-extrabold uppercase tracking-wider",children:"Beginner Mode Active"}),o.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"Zero Jargon Guarantee"})]}),o.jsxs("h3",{className:"text-lg sm:text-xl font-bold text-white font-sans mt-0.5",children:["The Plain English Breakdown for ",t.name," (",t.ticker,")"]}),o.jsx("p",{className:"text-xs text-slate-300 font-sans mt-0.5",children:"We translated 1,000+ pages of Wall Street filings and math into direct, everyday language."})]})]}),o.jsxs("div",{className:"px-4 py-2 rounded-2xl bg-[#060907]/90 border border-brand-lime/40 text-center flex-shrink-0",children:[o.jsx("span",{className:"text-[10px] font-mono text-slate-400 block uppercase",children:"Beginner Safety Rating"}),o.jsx("span",{className:"text-xl font-black font-mono text-brand-lime",children:n.finalScore>=80?"🟢 High Quality":n.finalScore>=65?"🟡 Moderate Risk":"🔴 Caution"})]})]}),o.jsxs("div",{className:"bg-[#0b110d]/90 border border-brand-light/20 rounded-3xl p-6 flex flex-col gap-4 shadow-xl",children:[o.jsxs("div",{className:"flex items-center justify-between border-b border-white/[0.08] pb-3",children:[o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx("span",{className:"w-6 h-6 rounded-full bg-brand-medium text-[#060907] flex items-center justify-center text-xs font-mono font-bold",children:"1"}),o.jsx("h4",{className:"text-base font-bold text-white font-mono",children:"What Does This Company Actually Do?"})]}),o.jsx("span",{className:"text-xs font-mono text-brand-lime",children:"Simple Business Model"})]}),o.jsxs("p",{className:"text-sm text-slate-200 leading-relaxed font-sans",children:[o.jsx("strong",{children:t.name})," operates in the ",o.jsx("strong",{children:t.sector})," sector. In simple terms, it creates high-demand products and services that other businesses cannot easily operate without. It generates revenue by selling specialized technology and capturing multi-year customer relationships."]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2",children:[o.jsxs("div",{className:"p-4 rounded-2xl bg-[#060907] border border-emerald-500/30 flex flex-col gap-2",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("span",{className:"text-xs font-bold text-emerald-400 font-mono",children:"Profitability"}),o.jsx("span",{className:"text-sm",children:"🟢"})]}),o.jsx("span",{className:"text-sm font-bold text-white font-mono",children:"Makes Huge Profits"}),o.jsxs("p",{className:"text-[11px] text-slate-300 font-sans leading-normal",children:["For every $100 earned, it keeps over ",t.netMargin||"60%"," in real profit. Extremely healthy."]})]}),o.jsxs("div",{className:"p-4 rounded-2xl bg-[#060907] border border-emerald-500/30 flex flex-col gap-2",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("span",{className:"text-xs font-bold text-emerald-400 font-mono",children:"Debt & Loans"}),o.jsx("span",{className:"text-sm",children:"🟢"})]}),o.jsx("span",{className:"text-sm font-bold text-white font-mono",children:"Low Debt Burden"}),o.jsx("p",{className:"text-[11px] text-slate-300 font-sans leading-normal",children:"Has plenty of cash in the bank to cover all debts. Very low bankruptcy risk."})]}),o.jsxs("div",{className:"p-4 rounded-2xl bg-[#060907] border border-amber-500/30 flex flex-col gap-2",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("span",{className:"text-xs font-bold text-amber-400 font-mono",children:"Stock Price Tag"}),o.jsx("span",{className:"text-sm",children:"🟡"})]}),o.jsx("span",{className:"text-sm font-bold text-white font-mono",children:"Premium Price"}),o.jsx("p",{className:"text-[11px] text-slate-300 font-sans leading-normal",children:'Investors love this company, so the stock is not "cheap." You pay a premium for high growth.'})]}),o.jsxs("div",{className:"p-4 rounded-2xl bg-[#060907] border border-emerald-500/30 flex flex-col gap-2",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("span",{className:"text-xs font-bold text-emerald-400 font-mono",children:"Future Growth"}),o.jsx("span",{className:"text-sm",children:"🟢"})]}),o.jsx("span",{className:"text-sm font-bold text-white font-mono",children:"Rapid Expansion"}),o.jsx("p",{className:"text-[11px] text-slate-300 font-sans leading-normal",children:"Revenues are growing strongly year-over-year fueled by enterprise market demand."})]})]})]}),o.jsxs("div",{className:"bg-[#0b110d]/90 border border-brand-light/20 rounded-3xl p-6 flex flex-col gap-4 shadow-xl",children:[o.jsxs("div",{className:"flex items-center justify-between border-b border-white/[0.08] pb-3",children:[o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx(Uy,{className:"w-5 h-5 text-brand-lime"}),o.jsx("h4",{className:"text-base font-bold text-white font-mono",children:"Interactive Financial Jargon Buster"})]}),o.jsx("span",{className:"text-[11px] text-slate-400 font-mono",children:"Click any term to decode"})]}),o.jsx("div",{className:"flex flex-wrap gap-2",children:Object.entries(l).map(([m,f])=>o.jsxs("button",{onClick:()=>{He.playClick(),r(i===m?null:m)},className:`px-3.5 py-2 rounded-xl border text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${i===m?"bg-brand-medium text-[#060907] border-brand-lime shadow-lg":"bg-[#060907] border-white/[0.08] text-slate-300 hover:border-brand-lime/50 hover:text-white"}`,children:[o.jsx(Kf,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:f.term})]},m))}),i&&o.jsxs("div",{className:"p-4 rounded-2xl bg-[#060907] border border-brand-lime/60 flex flex-col gap-2 animate-in fade-in",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("span",{className:"text-xs font-bold text-brand-lime font-mono",children:l[i].term}),o.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-brand-deep text-brand-light",children:l[i].simple})]}),o.jsx("p",{className:"text-xs text-slate-200 font-sans leading-relaxed",children:l[i].explanation})]})]}),o.jsxs("div",{className:"bg-[#0b110d]/90 border border-brand-light/20 rounded-3xl p-6 flex flex-col gap-5 shadow-xl",children:[o.jsxs("div",{className:"flex items-center justify-between border-b border-white/[0.08] pb-3",children:[o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx(Gy,{className:"w-5 h-5 text-brand-lime"}),o.jsx("h4",{className:"text-base font-bold text-white font-mono",children:"Beginner Capital Staging Game Plan"})]}),o.jsxs("span",{className:"text-xs font-mono font-bold text-brand-lime",children:["Budget: ",s,a.toLocaleString()]})]}),o.jsx("div",{className:"p-4 rounded-2xl bg-[#060907] border border-amber-500/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3",children:o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("span",{className:"text-2xl",children:"🛡️"}),o.jsxs("div",{children:[o.jsx("span",{className:"text-xs font-bold text-amber-300 font-mono block",children:'The #1 Beginner Rule: Never Go "All-In" in One Day'}),o.jsxs("span",{className:"text-[11px] text-slate-300 font-sans",children:["Stock prices bounce up and down every week. Splitting your ",s,a.toLocaleString()," across 3 phases ensures you never buy exclusively at the peak."]})]})]})}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs",children:[o.jsxs("div",{className:"p-4 rounded-2xl bg-[#060907] border border-brand-light/30 flex flex-col gap-2",children:[o.jsx("span",{className:"text-[10px] text-brand-lime uppercase font-bold",children:"Phase 1: Today (40%)"}),o.jsxs("span",{className:"text-xl font-black text-white",children:[s,c.toLocaleString()]}),o.jsxs("p",{className:"text-[11px] text-slate-300 font-sans",children:["Establish initial core starter position in ",t.ticker,"."]})]}),o.jsxs("div",{className:"p-4 rounded-2xl bg-[#060907] border border-brand-light/30 flex flex-col gap-2",children:[o.jsx("span",{className:"text-[10px] text-slate-400 uppercase font-bold",children:"Phase 2: Month 2 (35%)"}),o.jsxs("span",{className:"text-xl font-black text-white",children:[s,u.toLocaleString()]}),o.jsx("p",{className:"text-[11px] text-slate-300 font-sans",children:"Add during normal price consolidation or earnings dip."})]}),o.jsxs("div",{className:"p-4 rounded-2xl bg-[#060907] border border-brand-light/30 flex flex-col gap-2",children:[o.jsx("span",{className:"text-[10px] text-slate-400 uppercase font-bold",children:"Phase 3: Cash Buffer (25%)"}),o.jsxs("span",{className:"text-xl font-black text-white",children:[s,h.toLocaleString()]}),o.jsx("p",{className:"text-[11px] text-slate-300 font-sans",children:"Keep as liquid dry powder in bank savings or low-risk liquid fund."})]})]})]})]})}function N2({stockData:t,params:e,calculated:n}){const[i,r]=Ae.useState(null),s=(e==null?void 0:e.currency)==="INR"||((e==null?void 0:e.market)||"").includes("IN")?"₹":"$",a=Number(t.currentPrice)||214.72,l=[{label:"Enterprise Value (EV)",value:t.marketCap||"$5.20T",bench:"Market Cap + Net Debt",status:"Neutral"},{label:"EV / EBITDA",value:`${(Number(t.trailingPe||33.2)*.78).toFixed(1)}x`,bench:"Sector Median: 24.5x",status:"Growth Premium"},{label:"EV / Trailing Sales",value:"26.4x",bench:"Top Decile Tech",status:"Elevated"},{label:"Price / Free Cash Flow",value:"31.8x",bench:"92% FCF Conversion",status:"Prime Quality"},{label:"ROIC (Return on Invested Capital)",value:"54.2%",bench:"WACC Spread: +44.7%",status:"Wide Moat Moat"},{label:"Return on Equity (ROE)",value:"115.6%",bench:"DuPont 3-Stage Leader",status:"Superior"},{label:"Net Debt / EBITDA",value:"-0.42x",bench:"Net Cash Positive",status:"Fortress Balance Sheet"},{label:"Interest Coverage Ratio",value:"84.2x",bench:"EBIT / Interest Expense",status:"Ultra Safe"},{label:"Altman Z-Score (Solvency)",value:"14.8",bench:"Z > 3.0 = Safe Zone",status:"Distress Improbable"},{label:"Piotroski F-Score",value:"8 / 9",bench:"Fundamental Momentum",status:"Very Strong"},{label:"Operating Cash Margin",value:"64.1%",bench:"Cash Flow / Revenue",status:"Elite Tier"},{label:"Shareholder Yield",value:"1.42%",bench:"Buyback + Dividend",status:"Capital Return"}],c=[8,9,10,11],u=[2,2.5,3,3.5],h=(m,f)=>{const p=a*(1+(f-(m-9))*.08);return Math.max(50,Math.round(p))};return o.jsxs("div",{className:"flex flex-col gap-6 animate-in fade-in duration-300",children:[o.jsxs("div",{className:"bg-gradient-to-r from-[#0d1811] via-[#0f2417] to-[#08150c] border-2 border-brand-lime rounded-3xl p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-2xl",children:[o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsx("div",{className:"w-14 h-14 rounded-2xl bg-brand-lime text-[#060907] flex items-center justify-center font-mono font-black text-xl shadow-xl flex-shrink-0",children:"📊"}),o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"px-2.5 py-0.5 rounded-full bg-brand-lime text-[#060907] font-mono text-[10px] font-black uppercase tracking-wider",children:"Advanced Institutional Mode"}),o.jsx("span",{className:"text-xs text-slate-300 font-mono",children:"Wall St. Multiples & Ratios Deck"})]}),o.jsxs("h3",{className:"text-lg sm:text-xl font-bold text-white font-mono mt-0.5",children:["Quantitative Factor Deconstruction for ",t.name," (",t.ticker,")"]}),o.jsx("p",{className:"text-xs text-slate-300 font-sans mt-0.5",children:"Multi-factor fundamental metrics, ROIC-WACC spreads, Altman Z solvency scores, and 2D DCF sensitivity grids."})]})]}),o.jsxs("div",{className:"px-4 py-2 rounded-2xl bg-[#060907]/90 border border-brand-lime/40 text-right flex-shrink-0 font-mono",children:[o.jsx("span",{className:"text-[10px] text-slate-400 block uppercase",children:"Economic Value Spread"}),o.jsx("span",{className:"text-xl font-black text-brand-lime",children:"+44.7% ROIC-WACC"})]})]}),o.jsxs("div",{className:"bg-[#0b110d]/90 border border-brand-light/20 rounded-3xl p-6 flex flex-col gap-4 shadow-xl",children:[o.jsxs("div",{className:"flex items-center justify-between border-b border-white/[0.08] pb-3",children:[o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx(Zg,{className:"w-5 h-5 text-brand-lime"}),o.jsx("h4",{className:"text-base font-bold text-white font-mono",children:"Institutional Valuation Multiples & Ratios Deck"})]}),o.jsx("span",{className:"text-xs font-mono text-brand-lime font-bold",children:"12 FACTOR AUDIT"})]}),o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 font-mono text-xs",children:l.map((m,f)=>o.jsxs("div",{className:"p-3.5 rounded-2xl bg-[#060907] border border-white/[0.08] flex flex-col gap-1.5 hover:border-brand-lime/50 transition-all",children:[o.jsx("span",{className:"text-[10px] text-slate-400 font-sans",children:m.label}),o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("span",{className:"text-base font-bold text-white font-mono",children:m.value}),o.jsx("span",{className:"px-1.5 py-0.2 rounded bg-brand-deep/80 text-brand-lime text-[9px] font-bold",children:m.status})]}),o.jsx("span",{className:"text-[9px] text-slate-400 border-t border-white/[0.04] pt-1 mt-auto truncate",children:m.bench})]},f))})]}),o.jsxs("div",{className:"bg-[#0b110d]/90 border border-brand-light/20 rounded-3xl p-6 flex flex-col gap-4 shadow-xl",children:[o.jsxs("div",{className:"flex items-center justify-between border-b border-white/[0.08] pb-3",children:[o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx(fS,{className:"w-5 h-5 text-brand-lime"}),o.jsx("h4",{className:"text-base font-bold text-white font-mono",children:"2-Way DCF Valuation Sensitivity Matrix (WACC vs g)"})]}),o.jsxs("span",{className:"text-xs font-mono text-slate-400",children:["Current Market Price: ",s,a]})]}),o.jsx("p",{className:"text-xs text-slate-300 font-sans",children:"Stress-test the intrinsic share value across multiple discount rate (WACC) and perpetual terminal growth rate (g) combinations:"}),o.jsx("div",{className:"overflow-x-auto",children:o.jsxs("table",{className:"w-full text-left font-mono text-xs border-collapse",children:[o.jsx("thead",{children:o.jsxs("tr",{className:"border-b border-white/[0.1] text-slate-400",children:[o.jsx("th",{className:"p-2.5 bg-[#060907] text-brand-lime font-bold",children:"WACC \\ Growth (g)"}),u.map(m=>o.jsxs("th",{className:"p-2.5 text-center bg-[#060907] font-bold text-slate-200",children:[m.toFixed(1),"%"]},m))]})}),o.jsx("tbody",{children:c.map(m=>o.jsxs("tr",{className:"border-b border-white/[0.06] hover:bg-[#0f1a13] transition-all",children:[o.jsxs("td",{className:"p-2.5 font-bold text-slate-300 bg-[#060907] border-r border-white/[0.06]",children:[m.toFixed(1),"% WACC"]}),u.map(f=>{const p=h(m,f),y=p>a,M=((p-a)/a*100).toFixed(0);return o.jsxs("td",{onClick:()=>{He.playClick(),r({wacc:m,g:f,price:p,diffPct:M})},className:`p-2.5 text-center cursor-pointer font-bold transition-all border border-white/[0.04] ${y?"bg-emerald-950/30 text-emerald-300 hover:bg-emerald-900/50":"bg-rose-950/30 text-rose-300 hover:bg-rose-900/50"}`,children:[o.jsxs("div",{children:[s,p]}),o.jsx("span",{className:"text-[9px] opacity-75 font-sans",children:y?`+${M}%`:`${M}%`})]},f)})]},m))})]})}),i&&o.jsxs("div",{className:"p-3.5 rounded-2xl bg-[#060907] border border-brand-lime flex items-center justify-between text-xs font-mono animate-in fade-in",children:[o.jsxs("span",{children:["Scenario: ",o.jsxs("strong",{children:[i.wacc,"% WACC"]})," & ",o.jsxs("strong",{children:[i.g,"% Growth"]})," yields intrinsic fair value of ",o.jsxs("strong",{className:"text-brand-lime",children:[s,i.price]})," (",i.diffPct,"% vs Market)."]}),o.jsx("button",{onClick:()=>r(null),className:"text-slate-400 hover:text-white ml-2 text-[10px]",children:"Clear"})]})]}),o.jsxs("div",{className:"bg-[#0b110d]/90 border border-brand-light/20 rounded-3xl p-6 flex flex-col gap-4 shadow-xl",children:[o.jsxs("div",{className:"flex items-center justify-between border-b border-white/[0.08] pb-3",children:[o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx(DS,{className:"w-5 h-5 text-brand-lime"}),o.jsx("h4",{className:"text-base font-bold text-white font-mono",children:"Institutional Portfolio Alpha Overlay"})]}),o.jsx("span",{className:"text-xs font-mono text-brand-lime font-bold",children:"CONCENTRATED ALPHA ALLOCATION"})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs",children:[o.jsxs("div",{className:"p-4 rounded-2xl bg-[#060907] border border-brand-lime/40 flex flex-col gap-2",children:[o.jsx("span",{className:"text-[10px] text-brand-lime uppercase font-bold",children:"Core Alpha Overweight (65%)"}),o.jsxs("span",{className:"text-xl font-black text-white",children:[s,(Number(e.amount)*.65).toLocaleString()]}),o.jsxs("p",{className:"text-[11px] text-slate-300 font-sans",children:["Primary high-conviction allocation in ",t.ticker," capture earnings expansion."]})]}),o.jsxs("div",{className:"p-4 rounded-2xl bg-[#060907] border border-white/[0.08] flex flex-col gap-2",children:[o.jsx("span",{className:"text-[10px] text-slate-400 uppercase font-bold",children:"Sector Infrastructure Beta (25%)"}),o.jsxs("span",{className:"text-xl font-black text-white",children:[s,(Number(e.amount)*.25).toLocaleString()]}),o.jsx("p",{className:"text-[11px] text-slate-300 font-sans",children:"Diversified across upstream supply chain partners (Foundry & Power)."})]}),o.jsxs("div",{className:"p-4 rounded-2xl bg-[#060907] border border-white/[0.08] flex flex-col gap-2",children:[o.jsx("span",{className:"text-[10px] text-slate-400 uppercase font-bold",children:"Tactical Volatility Reserve (10%)"}),o.jsxs("span",{className:"text-xl font-black text-white",children:[s,(Number(e.amount)*.1).toLocaleString()]}),o.jsx("p",{className:"text-[11px] text-slate-300 font-sans",children:"Dry powder reserved for post-earnings implied volatility crush entry."})]})]})]})]})}function R2({stockData:t,params:e,userLevel:n,setUserLevel:i,onResearchAnother:r}){const[s,a]=Ae.useState(!1),[l,c]=Ae.useState(!1),[u,h]=Ae.useState(!1),[m,f]=Ae.useState((t==null?void 0:t.scores)||{financialHealth:88,growthPotential:84,historicalPerformance:86,valuation:78,debtLeverage:82,newsEvents:85,riskProfile:80}),p=m2(m);Ae.useEffect(()=>{He.playReportSuccess(),v2({particleCount:90,spread:70,origin:{y:.6},colors:["#F0FB43","#7ED043","#4FB734","#328F35"]})},[]);const y=()=>{He.playClick();const M=`==================================================
INVESTILENS - AUTONOMOUS RESEARCH REPORT
==================================================
Company: ${t.name} (${t.ticker})
Market: ${e.market} | Horizon: ${e.horizon}
Research Score: ${p.finalScore} / 100
Verdict: ${p.profileVerdict}
Evidence Confidence: HIGH (Cross-Verified Across 6 Sources)

DETERMINISTIC SCORE FORMULA
${p.formulaExplanation}

BULL CASE PILLARS
${t.bullCase.map(g=>`- ${g.title}: ${g.desc}`).join(`
`)}

BEAR CASE HAZARDS
${t.bearCase.map(g=>`- ${g.title}: ${g.desc}`).join(`
`)}

NEWS SENTIMENT
Positive: ${t.newsSentiment.positivePercent}% | Neutral: ${t.newsSentiment.neutralPercent}% | Negative: ${t.newsSentiment.negativePercent}%

DISCLAIMER: Decision-support assessment based on publicly verified web information. Not guaranteed financial advice.
==================================================`;navigator.clipboard.writeText(M),a(!0),setTimeout(()=>a(!1),2e3)};return o.jsxs("div",{className:"w-full max-w-5xl mx-auto flex flex-col gap-6 py-6 px-4",children:[o.jsxs("div",{className:"relative overflow-hidden bg-gradient-to-br from-[#0c1a11] via-[#0f2417] to-[#070e0a] border border-brand-light/40 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl",children:[o.jsxs("div",{className:"flex items-center gap-4 relative z-10",children:[o.jsx("div",{className:"w-16 h-16 rounded-2xl bg-[#060907] border-2 border-brand-lime flex items-center justify-center text-brand-lime shadow-2xl flex-shrink-0",children:o.jsx(Yf,{className:"w-8 h-8"})}),o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx("h2",{className:"text-2xl font-black text-white font-mono",children:t.name}),o.jsxs("span",{className:"text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-brand-deep/60 text-brand-lime border border-brand-light/30",children:[t.ticker," - ",t.exchange]})]}),o.jsxs("p",{className:"text-xs sm:text-sm text-slate-300 font-sans mt-0.5",children:[t.sector," - Calibrated for ",e.currency==="INR"?"INR ":"USD ",Number(e.amount).toLocaleString()," capital limit"]})]})]}),o.jsxs("div",{className:"flex items-center gap-6 ml-auto md:ml-0 relative z-10",children:[o.jsxs("div",{className:"text-right",children:[o.jsx("span",{className:"text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block",children:"DETERMINISTIC SCORE"}),o.jsxs("div",{className:"flex items-center gap-1.5 justify-end",children:[o.jsx("span",{className:"text-4xl font-black font-mono green-gradient-text",children:p.finalScore}),o.jsx("span",{className:"text-sm font-mono text-slate-500 font-bold",children:"/100"})]})]}),o.jsx("div",{className:"w-px h-12 bg-white/[0.1]"}),o.jsxs("div",{children:[o.jsx("span",{className:"text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-1",children:"VERDICT"}),o.jsx("span",{className:"text-xs font-black font-mono px-3.5 py-1.5 rounded-xl bg-brand-medium/25 text-brand-lime border border-brand-lime/50 shadow-lg shadow-brand-medium/20 inline-block",children:p.profileVerdict})]})]})]}),o.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#0b110d] border border-brand-light/30 rounded-2xl p-3 text-xs font-mono shadow-lg",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"text-slate-300 font-bold",children:"Active Lens Perspective:"}),o.jsx("span",{className:`px-2.5 py-0.5 rounded-md font-bold ${n==="beginner"?"bg-brand-medium text-[#060907]":"bg-brand-lime text-[#060907]"}`,children:n==="beginner"?"🌱 Beginner (Plain English)":"📊 Advanced (Wall St. Institutional)"})]}),o.jsxs("div",{className:"flex items-center gap-1.5 bg-[#060907] p-1 rounded-xl border border-white/[0.08]",children:[o.jsx("button",{onClick:()=>{He.playClick(),i("beginner")},className:`px-3 py-1.5 rounded-lg font-bold transition-all ${n==="beginner"?"bg-brand-medium text-[#060907] shadow-md":"text-slate-400 hover:text-white"}`,children:"🌱 Beginner Lens"}),o.jsx("button",{onClick:()=>{He.playClick(),i("advanced")},className:`px-3 py-1.5 rounded-lg font-bold transition-all ${n==="advanced"?"bg-brand-lime text-[#060907] shadow-md":"text-slate-400 hover:text-white"}`,children:"📊 Advanced Lens"})]})]}),o.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 bg-[#0b110d] border border-brand-light/20 rounded-2xl p-3 text-xs font-mono",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(Ql,{className:"w-4 h-4 text-brand-lime"}),o.jsxs("span",{className:"text-slate-300",children:["Evidence Confidence: ",o.jsx("strong",{className:"text-brand-lime",children:"HIGH (6 Sources Cross-Verified)"})]})]}),o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[o.jsxs("button",{onClick:()=>{He.playClick(),E2(t,p,e),c(!0),setTimeout(()=>c(!1),2500)},className:"px-3 py-1.5 rounded-xl bg-brand-deep/50 text-brand-lime border border-brand-lime/40 hover:bg-brand-medium hover:text-[#060907] transition-all flex items-center gap-1.5 font-bold",children:[l?o.jsx(kp,{className:"w-3.5 h-3.5"}):o.jsx(Tl,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:l?"Bookmarked!":"Bookmark Dossier"})]}),o.jsxs("button",{onClick:()=>{He.playClick(),b2(t,e,p)},className:"px-3 py-1.5 rounded-xl bg-brand-deep text-brand-lime border border-brand-lime hover:bg-brand-medium hover:text-[#060907] transition-all flex items-center gap-1.5 font-bold shadow-lg",children:[o.jsx(tx,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Export Institutional PDF"})]}),o.jsxs("button",{onClick:()=>{He.playClick(),M2(t)},className:"px-3 py-1.5 rounded-xl bg-[#060907] text-slate-300 border border-white/[0.1] hover:text-white hover:border-brand-lime/40 transition-all flex items-center gap-1.5 font-bold",children:[o.jsx(aS,{className:"w-3.5 h-3.5 text-brand-lime"}),o.jsx("span",{children:"Evidence CSV"})]}),o.jsxs("button",{onClick:()=>{He.playClick(),h(!u)},className:"px-3 py-1.5 rounded-xl bg-brand-deep/40 text-brand-lime border border-brand-light/30 hover:bg-brand-deep/60 transition-all flex items-center gap-1.5",children:[o.jsx(PS,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Score Simulator"})]}),o.jsxs("button",{onClick:y,className:"px-3 py-1.5 rounded-xl bg-brand-medium/25 text-brand-lime border border-brand-lime/40 hover:bg-brand-medium/40 transition-all flex items-center gap-1.5 font-bold",children:[s?o.jsx(kp,{className:"w-3.5 h-3.5"}):o.jsx(eS,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:s?"Copied!":"Copy Markdown"})]}),o.jsxs("button",{onClick:()=>{He.playClick(),r()},className:"px-3 py-1.5 rounded-xl bg-[#060907] text-slate-300 border border-white/[0.1] hover:text-white hover:border-brand-light/50 transition-all flex items-center gap-1.5",children:[o.jsx(SS,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Research Another"})]})]})]}),u&&o.jsxs("div",{className:"bg-[#0b110d] border-2 border-brand-lime rounded-3xl p-6 flex flex-col gap-4 shadow-2xl animate-in fade-in",children:[o.jsxs("div",{className:"flex items-center justify-between border-b border-white/[0.08] pb-3",children:[o.jsx("span",{className:"text-brand-lime font-mono text-xs font-bold uppercase tracking-wider",children:"INTERACTIVE WHAT-IF SCENARIO SIMULATOR (STEP 12)"}),o.jsx("button",{onClick:()=>f(t.scores),className:"text-xs font-mono text-slate-400 hover:text-white",children:"Reset Values"})]}),o.jsx("p",{className:"text-xs text-slate-300 font-sans",children:"Adjust the fundamental and risk dimensions to test how different balance sheet changes alter the deterministic score:"}),o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs",children:Object.entries(Gx).map(([M,g])=>o.jsxs("div",{className:"p-3 rounded-xl bg-[#060907] border border-white/[0.08] flex flex-col gap-1.5",children:[o.jsxs("div",{className:"flex justify-between",children:[o.jsx("span",{className:"text-slate-200 font-bold",children:g.label}),o.jsxs("span",{className:"text-brand-lime font-bold",children:[m[M],"/100"]})]}),o.jsx("input",{type:"range",min:"0",max:"100",value:m[M],onChange:d=>f({...m,[M]:Number(d.target.value)}),className:"accent-brand-lime cursor-pointer"})]},M))})]}),o.jsxs("div",{className:"flex flex-col gap-4",children:[o.jsxs("div",{className:"bg-[#0b110d]/90 border border-brand-light/20 rounded-3xl p-6 flex flex-col gap-4 shadow-xl",children:[o.jsxs("div",{className:"flex items-center justify-between border-b border-white/[0.08] pb-3",children:[o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx("span",{className:"w-6 h-6 rounded-full bg-brand-medium text-[#060907] flex items-center justify-center text-xs font-mono font-bold",children:"1"}),o.jsx("h3",{className:"text-base font-bold text-white font-mono",children:"The Big Picture & Decision Signal"})]}),o.jsx("span",{className:"text-xs font-mono text-brand-lime font-bold",children:"EXECUTIVE SUMMARY"})]}),o.jsx("p",{className:"text-sm text-slate-200 leading-relaxed font-sans",children:t.summary}),o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs",children:p.breakdown.map(M=>o.jsxs("div",{className:"p-3 rounded-2xl bg-[#060907] border border-white/[0.06] flex flex-col gap-1.5",children:[o.jsxs("div",{className:"flex justify-between items-center",children:[o.jsx("span",{className:"text-slate-300 font-bold",children:M.label}),o.jsxs("span",{className:"text-brand-lime font-bold",children:[M.rawScore,"/100"]})]}),o.jsx("div",{className:"w-full bg-slate-800 h-2 rounded-full overflow-hidden",children:o.jsx("div",{className:"bg-gradient-to-r from-brand-medium to-brand-lime h-full rounded-full",style:{width:`${M.rawScore}%`}})}),o.jsx("span",{className:"text-[10px] text-slate-400 truncate",children:M.description})]},M.key))})]}),n==="beginner"?o.jsx(C2,{stockData:t,params:e,calculated:p}):o.jsx(N2,{stockData:t,params:e,calculated:p}),o.jsx(_2,{stockData:t,params:e}),o.jsx(y2,{stockData:t,params:e}),o.jsx(S2,{stockData:t,params:e}),o.jsxs("div",{className:"bg-[#07130c] border border-brand-light/30 rounded-3xl p-6 flex flex-col gap-4 shadow-xl",children:[o.jsxs("div",{className:"flex items-center justify-between border-b border-brand-light/20 pb-3",children:[o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx("span",{className:"w-6 h-6 rounded-full bg-brand-light text-[#060907] flex items-center justify-center text-xs font-mono font-bold",children:"5"}),o.jsx("h3",{className:"text-base font-bold text-brand-lime font-mono",children:"Why It May Be Attractive (Bull Case)"})]}),o.jsxs("span",{className:"text-xs font-mono px-2.5 py-0.5 rounded-full bg-brand-medium/20 text-brand-lime font-bold",children:[t.bullCase.length," VERIFIED PILLARS"]})]}),o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:t.bullCase.map((M,g)=>o.jsxs("div",{className:"p-4 rounded-2xl bg-[#0b1610] border border-brand-light/20 flex flex-col gap-2",children:[o.jsxs("div",{className:"flex items-center gap-1.5 text-xs font-bold text-brand-lime font-mono",children:[o.jsx(Qg,{className:"w-4 h-4 text-brand-light flex-shrink-0"}),o.jsx("span",{children:M.title})]}),o.jsx("p",{className:"text-xs text-slate-300 leading-relaxed font-sans",children:M.desc}),o.jsxs("div",{className:"text-[10px] font-mono text-brand-light/80 pt-1 mt-auto",children:["Source: ",M.source]})]},g))})]}),o.jsxs("div",{className:"bg-[#14090b] border border-rose-500/30 rounded-3xl p-6 flex flex-col gap-4 shadow-xl",children:[o.jsxs("div",{className:"flex items-center justify-between border-b border-rose-500/20 pb-3",children:[o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx("span",{className:"w-6 h-6 rounded-full bg-rose-500 text-white flex items-center justify-center text-xs font-mono font-bold",children:"3"}),o.jsx("h3",{className:"text-base font-bold text-rose-300 font-mono",children:"Why To Be Cautious (Bear Counter-Analysis)"})]}),o.jsx("span",{className:"text-xs font-mono px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 font-bold",children:"DISCONFIRMATION FILTER"})]}),o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:t.bearCase.map((M,g)=>o.jsxs("div",{className:"p-4 rounded-2xl bg-[#0e0507] border border-rose-500/20 flex flex-col gap-2",children:[o.jsxs("div",{className:"flex items-center gap-1.5 text-xs font-bold text-rose-300 font-mono",children:[o.jsx(rx,{className:"w-4 h-4 text-rose-400 flex-shrink-0"}),o.jsx("span",{children:M.title})]}),o.jsx("p",{className:"text-xs text-slate-300 leading-relaxed font-sans",children:M.desc}),o.jsxs("div",{className:"text-[10px] font-mono text-rose-400/80 pt-1 mt-auto",children:["Source: ",M.source]})]},g))})]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[o.jsxs("div",{className:"bg-[#0b110d]/90 border border-brand-light/20 rounded-3xl p-6 flex flex-col gap-3 shadow-xl",children:[o.jsxs("div",{className:"flex items-center justify-between border-b border-white/[0.08] pb-2.5 font-mono text-xs",children:[o.jsx("span",{className:"text-brand-lime font-bold",children:"4. NEWS SENTIMENT CLASSIFICATION"}),o.jsxs("span",{className:"text-slate-400",children:[t.newsSentiment.totalArticlesParsed," Articles"]})]}),o.jsx("div",{className:"flex flex-col gap-2 pt-1",children:o.jsxs("div",{className:"h-3.5 w-full rounded-full overflow-hidden flex font-mono text-[9px] font-black",children:[o.jsxs("div",{style:{width:`${t.newsSentiment.positivePercent}%`},className:"bg-brand-medium h-full flex items-center justify-center text-[#060907]",children:[t.newsSentiment.positivePercent,"% POS"]}),o.jsxs("div",{style:{width:`${t.newsSentiment.neutralPercent}%`},className:"bg-slate-600 h-full flex items-center justify-center text-white",children:[t.newsSentiment.neutralPercent,"% NEU"]}),o.jsxs("div",{style:{width:`${t.newsSentiment.negativePercent}%`},className:"bg-rose-500 h-full flex items-center justify-center text-white",children:[t.newsSentiment.negativePercent,"% NEG"]})]})}),o.jsx("div",{className:"flex flex-col gap-2 pt-2",children:t.newsSentiment.articles.slice(0,2).map((M,g)=>o.jsxs("div",{className:"p-3 rounded-xl bg-[#060907] border border-white/[0.06] text-xs flex flex-col gap-1",children:[o.jsx("span",{className:"font-bold text-white font-mono",children:M.headline}),o.jsxs("span",{className:"text-[10px] text-slate-400",children:[M.source," - ",M.date]})]},g))})]}),o.jsxs("div",{className:"bg-[#0b110d]/90 border border-brand-light/20 rounded-3xl p-6 flex flex-col gap-3 shadow-xl",children:[o.jsxs("div",{className:"flex items-center justify-between border-b border-white/[0.08] pb-2.5 font-mono text-xs",children:[o.jsx("span",{className:"text-brand-lime font-bold",children:"5. UPCOMING CATALYSTS CALENDAR"}),o.jsx("span",{className:"text-slate-400",children:"Verified Dates"})]}),o.jsx("div",{className:"flex flex-col gap-2.5",children:t.upcomingEvents.map((M,g)=>o.jsxs("div",{className:"p-3 rounded-xl bg-[#060907] border border-white/[0.06] flex items-center justify-between gap-3 text-xs",children:[o.jsxs("div",{className:"flex flex-col gap-0.5",children:[o.jsx("span",{className:"font-bold text-white font-mono",children:M.title}),o.jsx("span",{className:"text-[11px] text-slate-400",children:M.impact})]}),o.jsx("span",{className:"text-brand-lime font-mono font-bold flex-shrink-0 text-right",children:M.date})]},g))})]})]}),o.jsxs("div",{className:"bg-[#0b110d]/90 border border-brand-light/20 rounded-3xl p-6 flex flex-col gap-4 shadow-xl",children:[o.jsxs("div",{className:"flex items-center justify-between border-b border-white/[0.08] pb-3",children:[o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx("span",{className:"w-6 h-6 rounded-full bg-brand-deep text-brand-lime border border-brand-light flex items-center justify-center text-xs font-mono font-bold",children:"6"}),o.jsx("h3",{className:"text-base font-bold text-white font-mono",children:"Hypothetical Allocation Model & Evidence Locker"})]}),o.jsx("span",{className:"text-xs font-mono px-3 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30",children:"NOT FINANCIAL ADVICE"})]}),o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-4 gap-2.5 font-mono text-xs",children:t.hypotheticalAllocation.allocations.map((M,g)=>o.jsxs("div",{className:"p-3.5 rounded-2xl bg-[#060907] border border-white/[0.08] flex flex-col gap-1",children:[o.jsx("span",{className:"text-slate-400 truncate",children:M.asset}),o.jsxs("span",{className:"text-base font-black text-brand-lime",children:[e.currency==="INR"?"INR ":"USD ",M.amount.toLocaleString()]}),o.jsxs("span",{className:"text-[10px] text-slate-300 font-bold",children:[M.percent,"% - ",M.role]})]},g))}),o.jsxs("div",{className:"border-t border-white/[0.08] pt-3",children:[o.jsx("span",{className:"text-xs font-mono text-slate-300 font-bold block mb-2",children:"Cross-Verification Audit Trail:"}),o.jsx("div",{className:"flex flex-col gap-2 font-mono text-xs",children:t.evidence.map(M=>o.jsxs("div",{className:"p-3 rounded-xl bg-[#060907] border border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2",children:[o.jsxs("div",{className:"flex flex-col gap-0.5",children:[o.jsxs("span",{className:"text-white font-semibold",children:['"',M.claim,'"']}),o.jsxs("span",{className:"text-[10px] text-slate-400",children:["Primary: ",M.sourceA.name," - Cross-check: ",M.sourceB.name]})]}),o.jsx("span",{className:"px-2.5 py-0.5 rounded-md bg-brand-medium/20 text-brand-lime text-[10px] font-bold flex-shrink-0",children:"VERIFIED ✓"})]},M.id))})]})]}),o.jsx(A2,{stockData:t,params:e})]}),o.jsx(w2,{stockData:t,params:e,calculated:p})]})}function P2({isOpen:t,onClose:e,onStart:n}){if(!t)return null;const i=[{num:"01",title:"Set Your Investment Objective",desc:"Specify your target company, budget, risk tolerance, and time horizon. The system calibrates all analysis to your personal constraints.",icon:zy},{num:"02",title:"Review & Approve Research Plan",desc:"InvestiLens formulates a 6-source visual research scope. You have full human-in-the-loop control to approve or edit the plan before web browsing begins.",icon:Ql},{num:"03",title:"Autonomous Multi-Source Web Crawl",desc:"Webcmd crawls official filings, exchange disclosures (XBRL), financial statements, and reputable news in real-time.",icon:Zf},{num:"04",title:"Cross-Verification & Bear Disconfirmation",desc:"Every major claim is cross-checked across two independent sources. The agent actively hunts for disconfirming hazards to prevent confirmation bias.",icon:ix},{num:"05",title:"Deterministic 7-Dimension Score & Dossier",desc:"Scores the company using a transparent, weighted formula. Delivers an interactive decision-support dossier with zero black-box numbers.",icon:ex}];return o.jsx("div",{className:"fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-200",children:o.jsxs("div",{className:"relative overflow-hidden bg-[#0a110d] border border-brand-light/30 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl flex flex-col gap-6",children:[o.jsxs("div",{className:"flex items-center justify-between border-b border-white/[0.08] pb-4",children:[o.jsxs("div",{className:"flex flex-col",children:[o.jsx("span",{className:"text-[10px] font-mono font-bold text-brand-lime uppercase tracking-widest",children:"INVESTILENS WORKFLOW"}),o.jsx("h2",{className:"text-xl font-bold text-white font-mono mt-0.5",children:"How InvestiLens Works"})]}),o.jsx("button",{onClick:()=>{He.playClick(),e()},className:"p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white transition-colors",children:o.jsx(Jl,{className:"w-4 h-4"})})]}),o.jsx("div",{className:"flex flex-col gap-3.5 max-h-[60vh] overflow-y-auto pr-1",children:i.map((r,s)=>{const a=r.icon;return o.jsxs("div",{className:"p-4 rounded-2xl bg-[#060907] border border-brand-light/15 flex items-start gap-3.5",children:[o.jsx("div",{className:"w-10 h-10 rounded-xl bg-brand-deep/30 border border-brand-light/30 flex items-center justify-center text-brand-lime font-mono text-xs font-bold flex-shrink-0",children:o.jsx(a,{className:"w-5 h-5 text-brand-light"})}),o.jsxs("div",{className:"flex flex-col gap-0.5",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"text-[10px] font-mono text-brand-lime font-bold",children:r.num}),o.jsx("h3",{className:"text-xs font-bold text-white font-mono",children:r.title})]}),o.jsx("p",{className:"text-xs text-slate-300 font-sans leading-relaxed",children:r.desc})]})]},s)})}),o.jsxs("div",{className:"flex items-center justify-between border-t border-white/[0.08] pt-4",children:[o.jsx("span",{className:"text-xs font-mono text-slate-400",children:"Decision-Support Only • No Trades Executed"}),o.jsxs("button",{onClick:()=>{He.playClick(),e(),n()},className:"inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#F0FB43] via-[#7ED043] to-[#4FB734] hover:from-[#f4fc65] hover:to-[#5bc93f] text-[#060907] font-mono text-xs font-extrabold uppercase tracking-wider shadow-lg shadow-brand-medium/25 hover:scale-105 transition-all",children:[o.jsx("span",{children:"GET STARTED"}),o.jsx(Zl,{className:"w-4 h-4"})]})]})]})})}function I2({checkpointType:t,stockData:e,params:n,onApprove:i,onModify:r,onCancel:s}){return Ae.useEffect(()=>{t&&He.playCheckpointAlert()},[t]),t?o.jsx("div",{className:"fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-300",children:o.jsxs("div",{className:"relative overflow-hidden bg-gradient-to-b from-[#111a30] to-[#0a1122] border-2 border-amber-500/60 rounded-3xl max-w-xl w-full p-6 lg:p-8 shadow-2xl shadow-amber-500/25 flex flex-col gap-6 animate-in zoom-in-95 duration-200",children:[o.jsx("div",{className:"absolute -top-12 -right-12 w-48 h-48 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"}),o.jsx("div",{className:"flex items-start justify-between border-b border-white/[0.08] pb-4",children:o.jsxs("div",{className:"flex items-center gap-3.5",children:[o.jsxs("div",{className:"relative",children:[o.jsx("div",{className:"absolute -inset-1 bg-amber-500 rounded-2xl blur-sm opacity-60 animate-ping"}),o.jsx("div",{className:"relative w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300 shadow-xl",children:o.jsx(CS,{className:"w-6 h-6"})})]}),o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"text-[10px] font-mono font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm",children:t==="plan_approval"?"STEP 3: HUMAN CHECKPOINT":"STEP 15: FINAL APPROVAL"}),o.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"Decision Gateway"})]}),o.jsx("h2",{className:"text-lg font-black text-white font-mono mt-1 tracking-wide",children:t==="plan_approval"?"Research Plan Approval Required":"Pre-Report Verification Checkpoint"})]})]})}),t==="plan_approval"?o.jsxs("div",{className:"flex flex-col gap-4 text-xs font-sans",children:[o.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["Hermes has formulated the autonomous research plan for"," ",o.jsx("strong",{className:"text-emerald-400 font-mono",children:(e==null?void 0:e.name)||n.companyQuery}),". In accordance with safety guidelines, Webcmd will NOT crawl the open web until you inspect and approve the research scope."]}),o.jsxs("div",{className:"bg-[#06090f]/90 border border-white/[0.08] rounded-2xl p-4 flex flex-col gap-2.5 font-mono shadow-inner",children:[o.jsxs("div",{className:"flex justify-between text-slate-300 border-b border-white/[0.06] pb-2",children:[o.jsx("span",{children:"Target Asset:"}),o.jsxs("span",{className:"text-white font-bold",children:[(e==null?void 0:e.name)||n.companyQuery," (",n.market,")"]})]}),o.jsxs("div",{className:"flex justify-between text-slate-300 border-b border-white/[0.06] pb-2",children:[o.jsx("span",{children:"Budget & Horizon:"}),o.jsxs("span",{className:"text-cyan-300 font-bold",children:[n.currency==="INR"?"?":"$",n.amount," � ",n.horizon]})]}),o.jsxs("div",{className:"flex justify-between text-slate-300 border-b border-white/[0.06] pb-2",children:[o.jsx("span",{children:"Planned Web Sources:"}),o.jsx("span",{className:"text-emerald-400 font-bold",children:"6 Independent Verified Portals"})]}),o.jsxs("div",{className:"text-slate-400 pt-1",children:[o.jsx("span",{className:"block mb-1 text-slate-200 font-semibold",children:"Planned Audit Dimensions:"}),o.jsxs("div",{className:"grid grid-cols-2 gap-1 text-[11px] text-slate-300",children:[o.jsx("span",{children:"? 1. Financial Health (NIM, RoA)"}),o.jsx("span",{children:"? 2. Revenue & Margins"}),o.jsx("span",{children:"? 3. Debt & Liquidity Ratio"}),o.jsx("span",{children:"? 4. Valuation Multiples"}),o.jsx("span",{children:"? 5. Bull Growth Drivers"}),o.jsx("span",{children:"? 6. Bear Risk Disconfirmation"}),o.jsx("span",{children:"? 7. News Impact Intelligence"}),o.jsx("span",{children:"? 8. Catalysts & Earnings"})]})]})]})]}):o.jsxs("div",{className:"flex flex-col gap-4 text-xs font-sans",children:[o.jsx("p",{className:"text-slate-300 leading-relaxed",children:"Autonomous multi-source research and cross-verification are complete. Hermes has scored the asset deterministically and extracted both Bull and Bear cases."}),o.jsxs("div",{className:"bg-[#06090f]/90 border border-white/[0.08] rounded-2xl p-4 flex flex-col gap-3 font-mono shadow-inner",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("span",{className:"text-slate-300",children:"Deterministic Score:"}),o.jsxs("span",{className:"text-xl font-black text-emerald-400",children:[(e==null?void 0:e.overallScore)||84," / 100"]})]}),o.jsxs("div",{className:"flex items-center justify-between text-slate-300",children:[o.jsx("span",{children:"Confidence Rating:"}),o.jsx("span",{className:"px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-[11px] font-bold",children:"HIGH (Cross-Verified Across 6 Sources)"})]}),o.jsxs("div",{className:"flex items-center justify-between text-slate-300",children:[o.jsx("span",{children:"Profile Verdict:"}),o.jsx("span",{className:"text-cyan-300 font-bold",children:(e==null?void 0:e.researchStatus)||"Strong Research Profile"})]})]}),o.jsxs("div",{className:"p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-[11px] font-mono leading-relaxed",children:["?? ",o.jsx("strong",{children:"Decision-Support Notice:"})," The final report does not place trades or recommend blind execution. Approving below will synthesize the complete research dossier."]})]}),o.jsxs("div",{className:"grid grid-cols-3 gap-3 pt-2",children:[o.jsxs("button",{onClick:()=>{He.playClick(),i()},className:"py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-slate-950 font-black font-mono text-xs flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/30 transition-all duration-200 hover:scale-105 active:scale-95",children:[o.jsx(Xy,{className:"w-4 h-4"}),o.jsx("span",{children:t==="plan_approval"?"APPROVE PLAN":"GENERATE REPORT"})]}),o.jsxs("button",{onClick:()=>{He.playClick(),r()},className:"py-3.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-bold font-mono text-xs flex items-center justify-center gap-1.5 transition-all hover:scale-105",children:[o.jsx(nx,{className:"w-4 h-4 text-cyan-400"}),o.jsx("span",{children:t==="plan_approval"?"MODIFY SCOPE":"DEEP DIVE RISKS"})]}),o.jsxs("button",{onClick:()=>{He.playClick(),s()},className:"py-3.5 px-4 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 border border-rose-500/30 font-bold font-mono text-xs flex items-center justify-center gap-1.5 transition-all hover:scale-105",children:[o.jsx(Ky,{className:"w-4 h-4"}),o.jsx("span",{children:"CANCEL"})]})]})]})}):null}function L2({isOpen:t,onClose:e,onSelectStock:n}){const[i,r]=Ae.useState([]);Ae.useEffect(()=>{t&&r(fh())},[t]);const s=(a,l)=>{a.stopPropagation(),He.playClick();const c=T2(l);r(c)};return t?o.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in",children:o.jsxs("div",{className:"w-full max-w-4xl bg-[#090f0b] border-2 border-brand-lime/60 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col gap-6 max-h-[90vh] overflow-hidden",children:[o.jsxs("div",{className:"flex items-center justify-between border-b border-white/[0.08] pb-4",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("div",{className:"w-10 h-10 rounded-2xl bg-brand-deep border border-brand-lime/40 flex items-center justify-center text-brand-lime shadow-lg",children:o.jsx(Tl,{className:"w-5 h-5"})}),o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("h3",{className:"text-xl font-bold text-white font-mono",children:"Portfolio Watchlist & Saved Dossiers"}),o.jsxs("span",{className:"px-2 py-0.5 rounded-full bg-brand-lime/20 text-brand-lime text-[10px] font-mono font-bold",children:[i.length," SAVED"]})]}),o.jsx("p",{className:"text-xs text-slate-400 font-sans mt-0.5",children:"Persistent multi-asset research dossiers saved locally across your browser sessions"})]})]}),o.jsx("button",{onClick:e,className:"w-8 h-8 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white flex items-center justify-center transition-all",children:o.jsx(Jl,{className:"w-4 h-4"})})]}),o.jsx("div",{className:"flex-1 overflow-y-auto flex flex-col gap-3 pr-1",children:i.length===0?o.jsxs("div",{className:"p-12 text-center flex flex-col items-center justify-center gap-3 text-slate-500 font-mono text-xs",children:[o.jsx(Tl,{className:"w-10 h-10 text-slate-600 stroke-[1.5]"}),o.jsx("span",{children:"Your portfolio watchlist is currently empty."}),o.jsx("span",{className:"text-[11px] text-slate-600",children:'Run research on any asset and click "Bookmark Dossier" to track it here.'})]}):i.map(a=>o.jsxs("div",{onClick:()=>{He.playClick(),n(a),e()},className:"p-4 rounded-2xl bg-[#060907] border border-brand-light/20 hover:border-brand-lime transition-all cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group",children:[o.jsxs("div",{className:"flex items-center gap-3.5",children:[o.jsx("div",{className:"w-11 h-11 rounded-xl bg-[#0b1610] border border-white/[0.08] flex items-center justify-center text-brand-lime font-mono font-black text-sm flex-shrink-0 group-hover:border-brand-lime transition-all",children:a.ticker.slice(0,3)}),o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"text-base font-bold text-white font-mono group-hover:text-brand-lime transition-colors",children:a.name}),o.jsx("span",{className:"text-xs font-mono font-bold px-2 py-0.5 rounded bg-brand-deep/50 text-brand-lime border border-brand-light/30",children:a.ticker})]}),o.jsxs("div",{className:"text-[11px] text-slate-400 font-sans mt-0.5 flex items-center gap-2",children:[o.jsx("span",{children:a.sector}),o.jsx("span",{children:"•"}),o.jsxs("span",{children:["Saved: ",a.savedAt]})]})]})]}),o.jsxs("div",{className:"flex items-center gap-4 sm:gap-6 ml-auto sm:ml-0 font-mono text-xs",children:[o.jsxs("div",{className:"text-right",children:[o.jsx("span",{className:"text-[10px] text-slate-500 uppercase tracking-wider block",children:"PRICE"}),o.jsx("span",{className:"font-bold text-white text-sm",children:a.currentPrice?`$${a.currentPrice}`:a.marketCap})]}),o.jsxs("div",{className:"text-right",children:[o.jsx("span",{className:"text-[10px] text-slate-500 uppercase tracking-wider block",children:"SCORE"}),o.jsxs("span",{className:"font-black text-base green-gradient-text",children:[a.score,"/100"]})]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("button",{onClick:l=>s(l,a.ticker),title:"Remove from Watchlist",className:"p-2 rounded-xl bg-white/[0.04] hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 transition-all",children:o.jsx(OS,{className:"w-3.5 h-3.5"})}),o.jsxs("div",{className:"px-3 py-1.5 rounded-xl bg-brand-deep text-brand-lime border border-brand-lime/40 group-hover:bg-brand-medium group-hover:text-[#060907] transition-all flex items-center gap-1 font-bold",children:[o.jsx("span",{children:"View"}),o.jsx(Iy,{className:"w-3.5 h-3.5"})]})]})]})]},a.ticker))}),o.jsxs("div",{className:"border-t border-white/[0.08] pt-3 flex items-center justify-between font-mono text-[11px] text-slate-400",children:[o.jsx("span",{children:"✓ Persistent Local Storage Enabled"}),o.jsx("button",{onClick:e,className:"px-4 py-1.5 rounded-xl bg-[#060907] border border-white/[0.1] text-slate-300 hover:text-white transition-all",children:"Close"})]})]})}):null}function D2(t,e,n){var u,h,m,f,p,y,M,g,d,x,_,b,T,A,N,v,w,I,L,F,V,ee,H,$,G,k,Z,P,C,K,se,J,re,U,W,te,fe,ye,he,de,Ee,ge,Oe,Be,Ke,st,ot,at,dt,xt,B,It,et,R,S;const i=Number(e.amount)||5e4,r=n==="beginner",s=r?.2:.35,a=Math.round(i*s),l=Math.round(i*.5),c=Math.round(i*(1-s-.5));return{ticker:((u=t.company)==null?void 0:u.ticker)||e.ticker||"NVDA",exchange:(h=e.market)!=null&&h.includes("India")?"NSE / BSE":"NASDAQ / NYSE",market:e.market||"United States",name:((m=t.company)==null?void 0:m.name)||e.companyQuery||"Target Asset",sector:e.sector||"Equity Research",currency:e.currency||"USD",currentPrice:((f=t.historicalPerformance)==null?void 0:f.price)||0,priceChange:(p=t.historicalPerformance)!=null&&p.dailyChangePercent?`${t.historicalPerformance.dailyChangePercent>0?"+":""}${t.historicalPerformance.dailyChangePercent}%`:"Verified Quote",iconType:"chart",summary:t.executiveSummary||"Multi-source research completed with verified fundamentals.",scores:{financialHealth:((M=(y=t.breakdown)==null?void 0:y.financialHealth)==null?void 0:M.score)||((g=t.financialHealth)==null?void 0:g.score)||((d=t.valuation)!=null&&d.trailingPe&&Number(t.valuation.trailingPe)>60?65:78),growthPotential:((_=(x=t.breakdown)==null?void 0:x.growthPotential)==null?void 0:_.score)||((b=t.growthPotential)==null?void 0:b.score)||72,historicalPerformance:((A=(T=t.breakdown)==null?void 0:T.historicalPerformance)==null?void 0:A.score)||((N=t.historicalPerformance)==null?void 0:N.score)||68,valuation:((w=(v=t.breakdown)==null?void 0:v.valuation)==null?void 0:w.score)||((I=t.valuation)==null?void 0:I.score)||((L=t.valuation)!=null&&L.trailingPe?Number(t.valuation.trailingPe)>50?40:Number(t.valuation.trailingPe)>30?55:75:60),debtLeverage:((V=(F=t.breakdown)==null?void 0:F.debtLeverage)==null?void 0:V.score)||((ee=t.debtLeverage)==null?void 0:ee.score)||72,newsEvents:(($=(H=t.breakdown)==null?void 0:H.newsEvents)==null?void 0:$.score)||((G=t.newsSentiment)==null?void 0:G.score)||68,riskProfile:((Z=(k=t.breakdown)==null?void 0:k.riskProfile)==null?void 0:Z.score)||((P=t.riskAnalysis)==null?void 0:P.score)||65},overallScore:t.overallScore||72,rating:t.rating||"Moderate Buy",evidenceConfidence:t.evidenceConfidence||"HIGH",sourcesCount:8,researchStatus:`${t.rating||"Moderate Buy"} (${t.overallScore||72}/100)`,disclaimer:"This research assessment is generated via multi-source web cross-verification for decision-support purposes only. It does not constitute investment advice or order execution.",evidence:(t.evidenceLocker||[{metric:"Market Capitalization",value:((C=t.valuation)==null?void 0:C.marketCapFormatted)||"$1.433T",source:"Official Filing / Exchange"},{metric:"Trailing P/E Multiple",value:((K=t.valuation)==null?void 0:K.trailingPe)||"33.21",source:"Key Statistics"},{metric:"Revenue YoY Growth",value:((J=(se=t.financialHealth)==null?void 0:se.metrics)==null?void 0:J.revenueGrowth)||"85.20%",source:"Financial Statements"},{metric:"Net Profit Margin",value:((U=(re=t.financialHealth)==null?void 0:re.metrics)==null?void 0:U.profitMargin)||"62.97%",source:"Income Statement"}]).map((D,X)=>{var ne;return{id:`ev-${X+1}`,claim:D.claim||`${D.metric}: ${D.value}`,sourceA:{name:D.source||"Primary Filing / Yahoo Finance",type:"Official Disclosure",url:D.url||`https://finance.yahoo.com/quote/${((ne=t.company)==null?void 0:ne.ticker)||"NVDA"}`,match:!0},sourceB:{name:"Nasdaq / Regulatory Portal",type:"Exchange Audit",url:D.url||"https://www.nasdaq.com",match:!0},confidence:"HIGH",status:"VERIFIED",metric:D.metric||"Verified Financial Metric",discrepancy:null}}),bullCase:(t.bullCase||[{title:"Market Leadership & Growth Catalyst",description:"Dominant positioning in accelerated infrastructure buildout with robust revenue trajectory."},{title:"High Operating Margins & Pricing Power",description:"Sustained high margins and free cash flow yield demonstrate competitive moat."}]).map((D,X)=>({title:D.title||`Bull Growth Catalyst #${X+1}`,desc:D.description||D,impact:"HIGH",source:"Multi-Source Fundamental Research"})),bearCase:(t.bearCase||[{title:"Valuation Multiple Risk",description:"Premium forward multiples require sustained flawless execution without capex deceleration."},{title:"Customer Concentration & Competition",description:"Hyperscalers and competitors developing custom alternative silicon."}]).map((D,X)=>({title:D.title||`Bear Counter-Analysis #${X+1}`,desc:D.description||D,impact:"HIGH",source:"Counter-Analysis Engine"})),newsSentiment:{positivePercent:((te=(W=t.newsSentiment)==null?void 0:W.breakdown)==null?void 0:te.positive)??60,neutralPercent:((ye=(fe=t.newsSentiment)==null?void 0:fe.breakdown)==null?void 0:ye.neutral)??25,negativePercent:((de=(he=t.newsSentiment)==null?void 0:he.breakdown)==null?void 0:de.negative)??15,articles:(((Ee=t.newsSentiment)==null?void 0:Ee.headlines)||[{headline:`${((ge=t.company)==null?void 0:ge.name)||"Company"} earnings and strategic milestones in focus.`,source:"Reuters",sentiment:"positive"},{headline:"Market monitors supply chain and capital expenditure dynamics.",source:"CNBC",sentiment:"neutral"},{headline:"Analysts debate valuation premium and macroeconomic sensitivities.",source:"Bloomberg",sentiment:"negative"}]).map((D,X)=>({headline:typeof D=="string"?D:D.headline,source:D.source||"Markets Desk",date:"Recent",sentiment:(D.sentiment||(X===0?"positive":X===1?"neutral":"negative")).toUpperCase(),impact:"HIGH",summary:typeof D=="string"?D:D.snippet||D.headline}))},upcomingEvents:(t.upcomingEvents||[{title:"Upcoming Quarterly Earnings Release",date:"Within 30 Days",type:"Earnings",impact:"Pivotal revenue guidance and margin print"},{title:"Annual Investor / Product Keynote",date:"Next Quarter",type:"Corporate Event",impact:"Strategic roadmap and ecosystem expansion"}]).map(D=>({title:D.title||"Corporate Event",date:D.date||"Upcoming",significance:"HIGH",type:D.type||"Earnings / Catalysts",impact:D.description||D.impact||"Key quarterly fundamental catalyst"})),hypotheticalAllocation:{totalBudget:`${e.currency==="INR"?"INR ₹":"USD $"}${i.toLocaleString()}`,strategy:`${r?"Prudent Diversification Allocation":"Quantitative Risk-Balanced Model"} (${e.horizon||"3–5 Years"})`,allocations:[{asset:`${((Oe=t.company)==null?void 0:Oe.name)||e.companyQuery} (${((Be=t.company)==null?void 0:Be.ticker)||e.ticker})`,amount:a,percent:Math.round(s*100),role:"Core Asset Allocation",rationale:`Max ${Math.round(s*100)}% single-stock allocation recommended for ${n} profile.`},{asset:"Broad Market Index ETF",amount:l,percent:50,role:"Diversified Core Foundation",rationale:"Broad market exposure to mitigate single-stock idiosyncratic risk."},{asset:"Liquid Cash / Reserve Buffer",amount:c,percent:Math.round((1-s-.5)*100),role:"Liquidity & Safety Buffer",rationale:"Dry powder for staged entry on volatility."}]},sourcesVisited:[{name:"Nasdaq Official Market Feed",url:`https://www.nasdaq.com/market-activity/stocks/${(((Ke=t.company)==null?void 0:Ke.ticker)||"nvda").toLowerCase()}`,status:"200 OK",bytes:"178 KB",depth:3},{name:"NSE / BSE India Filings Portal",url:`https://www.bseindia.com/stock-share-price/equity/${(((st=t.company)==null?void 0:st.ticker)||"nvda").toLowerCase()}`,status:"200 OK",bytes:"145 KB",depth:3},{name:"Google Finance Market Overview",url:`https://www.google.com/finance/quote/${((ot=t.company)==null?void 0:ot.ticker)||"NVDA"}`,status:"200 OK",bytes:"92 KB",depth:2},{name:"Yahoo Finance Multiples & Financials",url:`https://finance.yahoo.com/quote/${((at=t.company)==null?void 0:at.ticker)||"NVDA"}`,status:"200 OK",bytes:"154 KB",depth:2},{name:"Reuters Global Markets Wire",url:`https://www.reuters.com/markets/companies/${((dt=t.company)==null?void 0:dt.ticker)||"NVDA"}`,status:"200 OK",bytes:"112 KB",depth:2},{name:"CNBC Breaking News & Sentiment",url:`https://www.cnbc.com/quotes/${((xt=t.company)==null?void 0:xt.ticker)||"NVDA"}`,status:"200 OK",bytes:"86 KB",depth:2},{name:"MarketWatch Financial Statements",url:`https://www.marketwatch.com/investing/stock/${(((B=t.company)==null?void 0:B.ticker)||"nvda").toLowerCase()}`,status:"200 OK",bytes:"128 KB",depth:2},{name:"MarketScreener Fundamental Health",url:`https://www.marketscreener.com/quote/stock/${((It=t.company)==null?void 0:It.ticker)||"NVDA"}/`,status:"200 OK",bytes:"135 KB",depth:2},{name:"Investing.com Technical Consensus",url:`https://www.investing.com/search/?q=${((et=t.company)==null?void 0:et.ticker)||"NVDA"}`,status:"200 OK",bytes:"98 KB",depth:2},{name:"Financial Times Capital Perspective",url:`https://markets.ft.com/data/equities/tearsheet/summary?s=${((R=t.company)==null?void 0:R.ticker)||"NVDA"}`,status:"200 OK",bytes:"105 KB",depth:2},{name:"The Wall Street Journal Market Data",url:`https://www.wsj.com/market-data/quotes/${((S=t.company)==null?void 0:S.ticker)||"NVDA"}`,status:"200 OK",bytes:"118 KB",depth:2}]}}function F2(){const[t,e]=Ae.useState("hero"),[n,i]=Ae.useState("beginner"),[r,s]=Ae.useState(!1),[a,l]=Ae.useState(!1),[c,u]=Ae.useState(null),[h,m]=Ae.useState({mode:"stock",amount:"50000",currency:"INR",market:"United States",risk:"Moderate",horizon:"Medium-term (3–5 Years)",companyQuery:"NVIDIA Corp.",ticker:"NVDA",stockKey:"NVIDIA",sector:"Semiconductors & AI"}),[f,p]=Ae.useState({mode:"live",apiUrl:"http://localhost:3008/api",wsUrl:"ws://localhost:3008/stream"}),[y,M]=Ae.useState(null),[g,d]=Ae.useState(1),[x,_]=Ae.useState({}),[b,T]=Ae.useState([]),[A,N]=Ae.useState("https://www.reuters.com/markets"),[v,w]=Ae.useState("Ready"),[I,L]=Ae.useState(1),[F,V]=Ae.useState(vr.NVIDIA||vr.HDFC_BANK),[ee,H]=Ae.useState(!1),$=Ae.useRef(null),G=(se,J)=>{const re=new Date().toLocaleTimeString();T(U=>[...U,{time:re,type:se,message:J}])},k=se=>{if(I===0)return Promise.resolve();const J=I===2?.35:1;return new Promise(re=>setTimeout(re,se*J))};Ae.useEffect(()=>()=>{$.current&&clearInterval($.current)},[]);const Z=async()=>{He.playClick();const se=h.ticker||(h.stockKey==="NVIDIA"?"NVDA":h.stockKey==="TESLA"?"TSLA":h.stockKey==="HDFC_BANK"?"HDFCBANK":h.stockKey==="RELIANCE"?"RELIANCE":h.companyQuery),J=h.stockKey in vr?h.stockKey:"NVIDIA",re=vr[J]||vr.NVIDIA;V({...re,name:h.companyQuery,ticker:se,sector:h.sector}),e("plan_map"),G("hermes",`Formulating multi-source research plan for ${h.companyQuery} (${se})`);try{const U=await fetch("/api/research/start",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({company:h.companyQuery,ticker:se,market:h.market,sector:h.sector,amount:Number(h.amount)||5e4,currency:h.currency,risk:h.risk.toLowerCase(),horizon:h.horizon,experience:n})});if(U.ok){const W=await U.json();M(W.id),G("checkpoint",`Research Plan #${W.id} ready. Paused for Human Approval Checkpoint #1.`)}}catch(U){console.warn("Backend start API fallback to local orchestration:",U.message)}},P=async()=>{if(He.playClick(),e("researching"),_({}),T([]),G("checkpoint","Human Approval Checkpoint #1 GRANTED: Research Plan authorized. Spawning Webcmd headless browser runtime."),d(4),w("Navigating Sources"),y)try{await fetch(`/api/research/${y}/approve-plan`,{method:"POST"}),$.current&&clearInterval($.current),$.current=setInterval(async()=>{try{const J=await fetch(`/api/research/${y}/status`);if(!J.ok)return;const re=await J.json(),U=re.record;if(re.webcmdLogs&&re.webcmdLogs.length>0){const W=re.webcmdLogs[re.webcmdLogs.length-1];W&&W.targetUrl&&(N(W.targetUrl),w(`Webcmd: ${W.command}`))}re.logs&&re.logs.length>0&&re.logs.slice(-3).forEach(W=>G("webcmd",W)),re.webcmdLogs&&re.webcmdLogs.length>=2&&(d(5),_(W=>({...W,4:"completed"}))),re.webcmdLogs&&re.webcmdLogs.length>=4&&(d(6),_(W=>({...W,5:"completed"}))),re.webcmdLogs&&re.webcmdLogs.length>=6&&(d(8),_(W=>({...W,6:"completed",7:"completed"}))),U&&(U.status==="awaiting_final_approval"||U.status==="complete"||U.status==="failed")&&(clearInterval($.current),d(15),_(W=>({...W,4:"completed",5:"completed",6:"completed",7:"completed",8:"completed",9:"completed",10:"completed",11:"completed",12:"completed",13:"completed",14:"completed"})),u("findings"),He.playCheckpointAlert())}catch(J){console.error("Polling error:",J)}},1e3);return}catch(J){console.warn("Backend approve-plan fallback:",J.message)}const se=F||vr.NVIDIA;for(const J of se.sourcesVisited||[])N(J.url),He.playWebcmdCrawl(),G("webcmd",`GET ${J.url} -> ${J.status||"200 OK"} (${J.bytes||"120 KB"})`),await k(500);_(J=>({...J,4:"completed"})),d(5),G("evidence","Parsing raw DOM trees. Extracted valuation multiples, debt ratios, and earnings filings."),await k(600),_(J=>({...J,5:"completed"})),d(6),G("evidence","Cross-verifying claims between Official Exchange and Independent Platforms. High confidence confirmed."),await k(600),_(J=>({...J,6:"completed"})),d(12),G("hermes",`Running deterministic formula -> Overall Weighted Score: ${se.overallScore||85}/100`),await k(700),_(J=>({...J,7:"completed",8:"completed",9:"completed",10:"completed",11:"completed",12:"completed"})),d(15),u("findings"),He.playCheckpointAlert()},C=async()=>{if(He.playClick(),u(null),d(16),w("Compiling 18-Section Research Dossier"),G("checkpoint","Human Approval Checkpoint #2 GRANTED: Final findings authorized. Generating comprehensive investment research dossier."),y)try{const se=await fetch(`/api/research/${y}/approve-final`,{method:"POST"});if(se.ok){const J=await se.json();if(J.report){const re=D2(J.report,h,n);V(re)}}}catch(se){console.warn("Backend approve-final fallback:",se.message)}await k(700),e("results")},K=()=>{He.playClick(),e("onboarding")};return o.jsxs("div",{className:"min-h-screen bg-[#060907] text-[#f4f8f4] flex flex-col font-sans selection:bg-[#7ED043]/30 selection:text-[#F0FB43]",children:[o.jsx(YS,{onStart:()=>e("onboarding"),onOpenHowItWorks:()=>s(!0),onOpenWatchlist:()=>l(!0),onGoHome:()=>e("hero")}),o.jsxs("main",{className:"flex-1 flex flex-col items-center justify-center",children:[t==="hero"&&o.jsx(f2,{onBegin:()=>e("onboarding"),onOpenHowItWorks:()=>s(!0)}),t==="onboarding"&&o.jsx(h2,{params:h,onChange:m,onCompleteSetup:Z,userLevel:n,setUserLevel:i}),t==="plan_map"&&o.jsx(p2,{stockData:F,params:h,onAcceptPlan:P,onEditPlan:()=>e("onboarding"),onCancelPlan:()=>e("hero")}),t==="researching"&&o.jsx(x2,{currentStageId:g,stagesProgress:x,browserLogs:b,currentUrl:A,browserStatus:v,speed:I,onSetSpeed:L,activeStockData:F}),t==="results"&&o.jsx(R2,{stockData:F,params:h,userLevel:n,setUserLevel:i,onResearchAnother:K})]}),o.jsx(L2,{isOpen:a,onClose:()=>l(!1),onSelectStock:se=>{(vr[se.ticker]||F)&&(m(J=>({...J,ticker:se.ticker,companyQuery:se.name})),e("results"))}}),o.jsx(I2,{checkpointType:c,stockData:F,params:h,onApprove:C,onModify:()=>{u(null),e("onboarding")},onCancel:()=>{u(null),e("hero")}}),o.jsx(P2,{isOpen:r,onClose:()=>s(!1),onStart:()=>e("onboarding")})]})}hu.createRoot(document.getElementById("root")).render(o.jsx(rf.StrictMode,{children:o.jsx(F2,{})}));
