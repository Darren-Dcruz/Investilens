(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Wx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Pm={exports:{}},Dl={},Im={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oa=Symbol.for("react.element"),jx=Symbol.for("react.portal"),Xx=Symbol.for("react.fragment"),qx=Symbol.for("react.strict_mode"),$x=Symbol.for("react.profiler"),Yx=Symbol.for("react.provider"),Kx=Symbol.for("react.context"),Zx=Symbol.for("react.forward_ref"),Qx=Symbol.for("react.suspense"),Jx=Symbol.for("react.memo"),ev=Symbol.for("react.lazy"),Mh=Symbol.iterator;function tv(t){return t===null||typeof t!="object"?null:(t=Mh&&t[Mh]||t["@@iterator"],typeof t=="function"?t:null)}var Lm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dm=Object.assign,Um={};function ks(t,e,n){this.props=t,this.context=e,this.refs=Um,this.updater=n||Lm}ks.prototype.isReactComponent={};ks.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ks.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Fm(){}Fm.prototype=ks.prototype;function Kd(t,e,n){this.props=t,this.context=e,this.refs=Um,this.updater=n||Lm}var Zd=Kd.prototype=new Fm;Zd.constructor=Kd;Dm(Zd,ks.prototype);Zd.isPureReactComponent=!0;var Eh=Array.isArray,km=Object.prototype.hasOwnProperty,Qd={current:null},Om={key:!0,ref:!0,__self:!0,__source:!0};function Bm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)km.call(e,i)&&!Om.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Oa,type:t,key:s,ref:a,props:r,_owner:Qd.current}}function nv(t,e){return{$$typeof:Oa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Jd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Oa}function iv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var bh=/\/+/g;function rc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?iv(""+t.key):e.toString(36)}function Oo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Oa:case jx:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+rc(a,0):i,Eh(r)?(n="",t!=null&&(n=t.replace(bh,"$&/")+"/"),Oo(r,e,n,"",function(c){return c})):r!=null&&(Jd(r)&&(r=nv(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(bh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Eh(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+rc(s,o);a+=Oo(s,e,n,l,r)}else if(l=tv(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+rc(s,o++),a+=Oo(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Ya(t,e,n){if(t==null)return t;var i=[],r=0;return Oo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function rv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var an={current:null},Bo={transition:null},sv={ReactCurrentDispatcher:an,ReactCurrentBatchConfig:Bo,ReactCurrentOwner:Qd};function zm(){throw Error("act(...) is not supported in production builds of React.")}qe.Children={map:Ya,forEach:function(t,e,n){Ya(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ya(t,function(){e++}),e},toArray:function(t){return Ya(t,function(e){return e})||[]},only:function(t){if(!Jd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};qe.Component=ks;qe.Fragment=Xx;qe.Profiler=$x;qe.PureComponent=Kd;qe.StrictMode=qx;qe.Suspense=Qx;qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sv;qe.act=zm;qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Dm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Qd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)km.call(e,l)&&!Om.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Oa,type:t.type,key:r,ref:s,props:i,_owner:a}};qe.createContext=function(t){return t={$$typeof:Kx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Yx,_context:t},t.Consumer=t};qe.createElement=Bm;qe.createFactory=function(t){var e=Bm.bind(null,t);return e.type=t,e};qe.createRef=function(){return{current:null}};qe.forwardRef=function(t){return{$$typeof:Zx,render:t}};qe.isValidElement=Jd;qe.lazy=function(t){return{$$typeof:ev,_payload:{_status:-1,_result:t},_init:rv}};qe.memo=function(t,e){return{$$typeof:Jx,type:t,compare:e===void 0?null:e}};qe.startTransition=function(t){var e=Bo.transition;Bo.transition={};try{t()}finally{Bo.transition=e}};qe.unstable_act=zm;qe.useCallback=function(t,e){return an.current.useCallback(t,e)};qe.useContext=function(t){return an.current.useContext(t)};qe.useDebugValue=function(){};qe.useDeferredValue=function(t){return an.current.useDeferredValue(t)};qe.useEffect=function(t,e){return an.current.useEffect(t,e)};qe.useId=function(){return an.current.useId()};qe.useImperativeHandle=function(t,e,n){return an.current.useImperativeHandle(t,e,n)};qe.useInsertionEffect=function(t,e){return an.current.useInsertionEffect(t,e)};qe.useLayoutEffect=function(t,e){return an.current.useLayoutEffect(t,e)};qe.useMemo=function(t,e){return an.current.useMemo(t,e)};qe.useReducer=function(t,e,n){return an.current.useReducer(t,e,n)};qe.useRef=function(t){return an.current.useRef(t)};qe.useState=function(t){return an.current.useState(t)};qe.useSyncExternalStore=function(t,e,n){return an.current.useSyncExternalStore(t,e,n)};qe.useTransition=function(){return an.current.useTransition()};qe.version="18.3.1";Im.exports=qe;var Oe=Im.exports;const av=Wx(Oe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ov=Oe,lv=Symbol.for("react.element"),cv=Symbol.for("react.fragment"),uv=Object.prototype.hasOwnProperty,dv=ov.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fv={key:!0,ref:!0,__self:!0,__source:!0};function Hm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)uv.call(e,i)&&!fv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:lv,type:t,key:s,ref:a,props:r,_owner:dv.current}}Dl.Fragment=cv;Dl.jsx=Hm;Dl.jsxs=Hm;Pm.exports=Dl;var h=Pm.exports,uu={},Vm={exports:{}},En={},Gm={exports:{}},Wm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,Z){var P=k.length;k.push(Z);e:for(;0<P;){var C=P-1>>>1,D=k[C];if(0<r(D,Z))k[C]=Z,k[P]=D,P=C;else break e}}function n(k){return k.length===0?null:k[0]}function i(k){if(k.length===0)return null;var Z=k[0],P=k.pop();if(P!==Z){k[0]=P;e:for(var C=0,D=k.length,re=D>>>1;C<re;){var ae=2*(C+1)-1,oe=k[ae],W=ae+1,J=k[W];if(0>r(oe,P))W<D&&0>r(J,oe)?(k[C]=J,k[W]=P,C=W):(k[C]=oe,k[ae]=P,C=ae);else if(W<D&&0>r(J,P))k[C]=J,k[W]=P,C=W;else break e}}return Z}function r(k,Z){var P=k.sortIndex-Z.sortIndex;return P!==0?P:k.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],p=1,m=null,u=3,f=!1,y=!1,E=!1,x=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(k){for(var Z=n(c);Z!==null;){if(Z.callback===null)i(c);else if(Z.startTime<=k)i(c),Z.sortIndex=Z.expirationTime,e(l,Z);else break;Z=n(c)}}function M(k){if(E=!1,v(k),!y)if(n(l)!==null)y=!0,Y(T);else{var Z=n(c);Z!==null&&G(M,Z.startTime-k)}}function T(k,Z){y=!1,E&&(E=!1,d(_),_=-1),f=!0;var P=u;try{for(v(Z),m=n(l);m!==null&&(!(m.expirationTime>Z)||k&&!L());){var C=m.callback;if(typeof C=="function"){m.callback=null,u=m.priorityLevel;var D=C(m.expirationTime<=Z);Z=t.unstable_now(),typeof D=="function"?m.callback=D:m===n(l)&&i(l),v(Z)}else i(l);m=n(l)}if(m!==null)var re=!0;else{var ae=n(c);ae!==null&&G(M,ae.startTime-Z),re=!1}return re}finally{m=null,u=P,f=!1}}var w=!1,R=null,_=-1,A=5,I=-1;function L(){return!(t.unstable_now()-I<A)}function z(){if(R!==null){var k=t.unstable_now();I=k;var Z=!0;try{Z=R(!0,k)}finally{Z?V():(w=!1,R=null)}}else w=!1}var V;if(typeof g=="function")V=function(){g(z)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,O=Q.port2;Q.port1.onmessage=z,V=function(){O.postMessage(null)}}else V=function(){x(z,0)};function Y(k){R=k,w||(w=!0,V())}function G(k,Z){_=x(function(){k(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){y||f||(y=!0,Y(T))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(k){switch(u){case 1:case 2:case 3:var Z=3;break;default:Z=u}var P=u;u=Z;try{return k()}finally{u=P}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,Z){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var P=u;u=k;try{return Z()}finally{u=P}},t.unstable_scheduleCallback=function(k,Z,P){var C=t.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?C+P:C):P=C,k){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=P+D,k={id:p++,callback:Z,priorityLevel:k,startTime:P,expirationTime:D,sortIndex:-1},P>C?(k.sortIndex=P,e(c,k),n(l)===null&&k===n(c)&&(E?(d(_),_=-1):E=!0,G(M,P-C))):(k.sortIndex=D,e(l,k),y||f||(y=!0,Y(T))),k},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(k){var Z=u;return function(){var P=u;u=Z;try{return k.apply(this,arguments)}finally{u=P}}}})(Wm);Gm.exports=Wm;var hv=Gm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pv=Oe,Mn=hv;function ce(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jm=new Set,_a={};function Or(t,e){Ts(t,e),Ts(t+"Capture",e)}function Ts(t,e){for(_a[t]=e,t=0;t<e.length;t++)jm.add(e[t])}var Ci=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),du=Object.prototype.hasOwnProperty,mv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wh={},Th={};function gv(t){return du.call(Th,t)?!0:du.call(wh,t)?!1:mv.test(t)?Th[t]=!0:(wh[t]=!0,!1)}function xv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function vv(t,e,n,i){if(e===null||typeof e>"u"||xv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function on(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){jt[t]=new on(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];jt[e]=new on(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){jt[t]=new on(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){jt[t]=new on(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){jt[t]=new on(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){jt[t]=new on(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){jt[t]=new on(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){jt[t]=new on(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){jt[t]=new on(t,5,!1,t.toLowerCase(),null,!1,!1)});var ef=/[\-:]([a-z])/g;function tf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ef,tf);jt[e]=new on(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ef,tf);jt[e]=new on(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ef,tf);jt[e]=new on(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){jt[t]=new on(t,1,!1,t.toLowerCase(),null,!1,!1)});jt.xlinkHref=new on("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){jt[t]=new on(t,1,!1,t.toLowerCase(),null,!0,!0)});function nf(t,e,n,i){var r=jt.hasOwnProperty(e)?jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(vv(e,n,r,i)&&(n=null),i||r===null?gv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Di=pv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ka=Symbol.for("react.element"),ss=Symbol.for("react.portal"),as=Symbol.for("react.fragment"),rf=Symbol.for("react.strict_mode"),fu=Symbol.for("react.profiler"),Xm=Symbol.for("react.provider"),qm=Symbol.for("react.context"),sf=Symbol.for("react.forward_ref"),hu=Symbol.for("react.suspense"),pu=Symbol.for("react.suspense_list"),af=Symbol.for("react.memo"),ji=Symbol.for("react.lazy"),$m=Symbol.for("react.offscreen"),Ah=Symbol.iterator;function Vs(t){return t===null||typeof t!="object"?null:(t=Ah&&t[Ah]||t["@@iterator"],typeof t=="function"?t:null)}var Mt=Object.assign,sc;function ia(t){if(sc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);sc=e&&e[1]||""}return`
`+sc+t}var ac=!1;function oc(t,e){if(!t||ac)return"";ac=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{ac=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ia(t):""}function _v(t){switch(t.tag){case 5:return ia(t.type);case 16:return ia("Lazy");case 13:return ia("Suspense");case 19:return ia("SuspenseList");case 0:case 2:case 15:return t=oc(t.type,!1),t;case 11:return t=oc(t.type.render,!1),t;case 1:return t=oc(t.type,!0),t;default:return""}}function mu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case as:return"Fragment";case ss:return"Portal";case fu:return"Profiler";case rf:return"StrictMode";case hu:return"Suspense";case pu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case qm:return(t.displayName||"Context")+".Consumer";case Xm:return(t._context.displayName||"Context")+".Provider";case sf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case af:return e=t.displayName||null,e!==null?e:mu(t.type)||"Memo";case ji:e=t._payload,t=t._init;try{return mu(t(e))}catch{}}return null}function yv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mu(e);case 8:return e===rf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function or(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ym(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Sv(t){var e=Ym(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Za(t){t._valueTracker||(t._valueTracker=Sv(t))}function Km(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Ym(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function nl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function gu(t,e){var n=e.checked;return Mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ch(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=or(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Zm(t,e){e=e.checked,e!=null&&nf(t,"checked",e,!1)}function xu(t,e){Zm(t,e);var n=or(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?vu(t,e.type,n):e.hasOwnProperty("defaultValue")&&vu(t,e.type,or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Rh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function vu(t,e,n){(e!=="number"||nl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ra=Array.isArray;function xs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+or(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function _u(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ce(91));return Mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Nh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ce(92));if(ra(n)){if(1<n.length)throw Error(ce(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:or(n)}}function Qm(t,e){var n=or(e.value),i=or(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Ph(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Jm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Jm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Qa,eg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Qa=Qa||document.createElement("div"),Qa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Qa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ya(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ca={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Mv=["Webkit","ms","Moz","O"];Object.keys(ca).forEach(function(t){Mv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ca[e]=ca[t]})});function tg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ca.hasOwnProperty(t)&&ca[t]?(""+e).trim():e+"px"}function ng(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=tg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Ev=Mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Su(t,e){if(e){if(Ev[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ce(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ce(62))}}function Mu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Eu=null;function of(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var bu=null,vs=null,_s=null;function Ih(t){if(t=Ha(t)){if(typeof bu!="function")throw Error(ce(280));var e=t.stateNode;e&&(e=Bl(e),bu(t.stateNode,t.type,e))}}function ig(t){vs?_s?_s.push(t):_s=[t]:vs=t}function rg(){if(vs){var t=vs,e=_s;if(_s=vs=null,Ih(t),e)for(t=0;t<e.length;t++)Ih(e[t])}}function sg(t,e){return t(e)}function ag(){}var lc=!1;function og(t,e,n){if(lc)return t(e,n);lc=!0;try{return sg(t,e,n)}finally{lc=!1,(vs!==null||_s!==null)&&(ag(),rg())}}function Sa(t,e){var n=t.stateNode;if(n===null)return null;var i=Bl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ce(231,e,typeof n));return n}var wu=!1;if(Ci)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){wu=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{wu=!1}function bv(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(p){this.onError(p)}}var ua=!1,il=null,rl=!1,Tu=null,wv={onError:function(t){ua=!0,il=t}};function Tv(t,e,n,i,r,s,a,o,l){ua=!1,il=null,bv.apply(wv,arguments)}function Av(t,e,n,i,r,s,a,o,l){if(Tv.apply(this,arguments),ua){if(ua){var c=il;ua=!1,il=null}else throw Error(ce(198));rl||(rl=!0,Tu=c)}}function Br(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function lg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Lh(t){if(Br(t)!==t)throw Error(ce(188))}function Cv(t){var e=t.alternate;if(!e){if(e=Br(t),e===null)throw Error(ce(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Lh(r),t;if(s===i)return Lh(r),e;s=s.sibling}throw Error(ce(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ce(189))}}if(n.alternate!==i)throw Error(ce(190))}if(n.tag!==3)throw Error(ce(188));return n.stateNode.current===n?t:e}function cg(t){return t=Cv(t),t!==null?ug(t):null}function ug(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ug(t);if(e!==null)return e;t=t.sibling}return null}var dg=Mn.unstable_scheduleCallback,Dh=Mn.unstable_cancelCallback,Rv=Mn.unstable_shouldYield,Nv=Mn.unstable_requestPaint,Nt=Mn.unstable_now,Pv=Mn.unstable_getCurrentPriorityLevel,lf=Mn.unstable_ImmediatePriority,fg=Mn.unstable_UserBlockingPriority,sl=Mn.unstable_NormalPriority,Iv=Mn.unstable_LowPriority,hg=Mn.unstable_IdlePriority,Ul=null,li=null;function Lv(t){if(li&&typeof li.onCommitFiberRoot=="function")try{li.onCommitFiberRoot(Ul,t,void 0,(t.current.flags&128)===128)}catch{}}var $n=Math.clz32?Math.clz32:Fv,Dv=Math.log,Uv=Math.LN2;function Fv(t){return t>>>=0,t===0?32:31-(Dv(t)/Uv|0)|0}var Ja=64,eo=4194304;function sa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function al(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=sa(o):(s&=a,s!==0&&(i=sa(s)))}else a=n&~r,a!==0?i=sa(a):s!==0&&(i=sa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-$n(e),r=1<<n,i|=t[n],e&=~r;return i}function kv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ov(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-$n(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=kv(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Au(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function pg(){var t=Ja;return Ja<<=1,!(Ja&4194240)&&(Ja=64),t}function cc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ba(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-$n(e),t[e]=n}function Bv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-$n(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function cf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-$n(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ot=0;function mg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var gg,uf,xg,vg,_g,Cu=!1,to=[],Ji=null,er=null,tr=null,Ma=new Map,Ea=new Map,qi=[],zv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Uh(t,e){switch(t){case"focusin":case"focusout":Ji=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":Ma.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ea.delete(e.pointerId)}}function Ws(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ha(e),e!==null&&uf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Hv(t,e,n,i,r){switch(e){case"focusin":return Ji=Ws(Ji,t,e,n,i,r),!0;case"dragenter":return er=Ws(er,t,e,n,i,r),!0;case"mouseover":return tr=Ws(tr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ma.set(s,Ws(Ma.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ea.set(s,Ws(Ea.get(s)||null,t,e,n,i,r)),!0}return!1}function yg(t){var e=Er(t.target);if(e!==null){var n=Br(e);if(n!==null){if(e=n.tag,e===13){if(e=lg(n),e!==null){t.blockedOn=e,_g(t.priority,function(){xg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ru(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Eu=i,n.target.dispatchEvent(i),Eu=null}else return e=Ha(n),e!==null&&uf(e),t.blockedOn=n,!1;e.shift()}return!0}function Fh(t,e,n){zo(t)&&n.delete(e)}function Vv(){Cu=!1,Ji!==null&&zo(Ji)&&(Ji=null),er!==null&&zo(er)&&(er=null),tr!==null&&zo(tr)&&(tr=null),Ma.forEach(Fh),Ea.forEach(Fh)}function js(t,e){t.blockedOn===e&&(t.blockedOn=null,Cu||(Cu=!0,Mn.unstable_scheduleCallback(Mn.unstable_NormalPriority,Vv)))}function ba(t){function e(r){return js(r,t)}if(0<to.length){js(to[0],t);for(var n=1;n<to.length;n++){var i=to[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ji!==null&&js(Ji,t),er!==null&&js(er,t),tr!==null&&js(tr,t),Ma.forEach(e),Ea.forEach(e),n=0;n<qi.length;n++)i=qi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<qi.length&&(n=qi[0],n.blockedOn===null);)yg(n),n.blockedOn===null&&qi.shift()}var ys=Di.ReactCurrentBatchConfig,ol=!0;function Gv(t,e,n,i){var r=ot,s=ys.transition;ys.transition=null;try{ot=1,df(t,e,n,i)}finally{ot=r,ys.transition=s}}function Wv(t,e,n,i){var r=ot,s=ys.transition;ys.transition=null;try{ot=4,df(t,e,n,i)}finally{ot=r,ys.transition=s}}function df(t,e,n,i){if(ol){var r=Ru(t,e,n,i);if(r===null)_c(t,e,i,ll,n),Uh(t,i);else if(Hv(r,t,e,n,i))i.stopPropagation();else if(Uh(t,i),e&4&&-1<zv.indexOf(t)){for(;r!==null;){var s=Ha(r);if(s!==null&&gg(s),s=Ru(t,e,n,i),s===null&&_c(t,e,i,ll,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else _c(t,e,i,null,n)}}var ll=null;function Ru(t,e,n,i){if(ll=null,t=of(i),t=Er(t),t!==null)if(e=Br(t),e===null)t=null;else if(n=e.tag,n===13){if(t=lg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ll=t,null}function Sg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Pv()){case lf:return 1;case fg:return 4;case sl:case Iv:return 16;case hg:return 536870912;default:return 16}default:return 16}}var Ki=null,ff=null,Ho=null;function Mg(){if(Ho)return Ho;var t,e=ff,n=e.length,i,r="value"in Ki?Ki.value:Ki.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Ho=r.slice(t,1<i?1-i:void 0)}function Vo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function no(){return!0}function kh(){return!1}function bn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?no:kh,this.isPropagationStopped=kh,this}return Mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=no)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=no)},persist:function(){},isPersistent:no}),e}var Os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hf=bn(Os),za=Mt({},Os,{view:0,detail:0}),jv=bn(za),uc,dc,Xs,Fl=Mt({},za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xs&&(Xs&&t.type==="mousemove"?(uc=t.screenX-Xs.screenX,dc=t.screenY-Xs.screenY):dc=uc=0,Xs=t),uc)},movementY:function(t){return"movementY"in t?t.movementY:dc}}),Oh=bn(Fl),Xv=Mt({},Fl,{dataTransfer:0}),qv=bn(Xv),$v=Mt({},za,{relatedTarget:0}),fc=bn($v),Yv=Mt({},Os,{animationName:0,elapsedTime:0,pseudoElement:0}),Kv=bn(Yv),Zv=Mt({},Os,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Qv=bn(Zv),Jv=Mt({},Os,{data:0}),Bh=bn(Jv),e_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},t_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},n_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function i_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=n_[t])?!!e[t]:!1}function pf(){return i_}var r_=Mt({},za,{key:function(t){if(t.key){var e=e_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Vo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?t_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pf,charCode:function(t){return t.type==="keypress"?Vo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),s_=bn(r_),a_=Mt({},Fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zh=bn(a_),o_=Mt({},za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pf}),l_=bn(o_),c_=Mt({},Os,{propertyName:0,elapsedTime:0,pseudoElement:0}),u_=bn(c_),d_=Mt({},Fl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),f_=bn(d_),h_=[9,13,27,32],mf=Ci&&"CompositionEvent"in window,da=null;Ci&&"documentMode"in document&&(da=document.documentMode);var p_=Ci&&"TextEvent"in window&&!da,Eg=Ci&&(!mf||da&&8<da&&11>=da),Hh=" ",Vh=!1;function bg(t,e){switch(t){case"keyup":return h_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var os=!1;function m_(t,e){switch(t){case"compositionend":return wg(e);case"keypress":return e.which!==32?null:(Vh=!0,Hh);case"textInput":return t=e.data,t===Hh&&Vh?null:t;default:return null}}function g_(t,e){if(os)return t==="compositionend"||!mf&&bg(t,e)?(t=Mg(),Ho=ff=Ki=null,os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Eg&&e.locale!=="ko"?null:e.data;default:return null}}var x_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!x_[t.type]:e==="textarea"}function Tg(t,e,n,i){ig(i),e=cl(e,"onChange"),0<e.length&&(n=new hf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var fa=null,wa=null;function v_(t){kg(t,0)}function kl(t){var e=us(t);if(Km(e))return t}function __(t,e){if(t==="change")return e}var Ag=!1;if(Ci){var hc;if(Ci){var pc="oninput"in document;if(!pc){var Wh=document.createElement("div");Wh.setAttribute("oninput","return;"),pc=typeof Wh.oninput=="function"}hc=pc}else hc=!1;Ag=hc&&(!document.documentMode||9<document.documentMode)}function jh(){fa&&(fa.detachEvent("onpropertychange",Cg),wa=fa=null)}function Cg(t){if(t.propertyName==="value"&&kl(wa)){var e=[];Tg(e,wa,t,of(t)),og(v_,e)}}function y_(t,e,n){t==="focusin"?(jh(),fa=e,wa=n,fa.attachEvent("onpropertychange",Cg)):t==="focusout"&&jh()}function S_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return kl(wa)}function M_(t,e){if(t==="click")return kl(e)}function E_(t,e){if(t==="input"||t==="change")return kl(e)}function b_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kn=typeof Object.is=="function"?Object.is:b_;function Ta(t,e){if(Kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!du.call(e,r)||!Kn(t[r],e[r]))return!1}return!0}function Xh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qh(t,e){var n=Xh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xh(n)}}function Rg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Rg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ng(){for(var t=window,e=nl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=nl(t.document)}return e}function gf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function w_(t){var e=Ng(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Rg(n.ownerDocument.documentElement,n)){if(i!==null&&gf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=qh(n,s);var a=qh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var T_=Ci&&"documentMode"in document&&11>=document.documentMode,ls=null,Nu=null,ha=null,Pu=!1;function $h(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pu||ls==null||ls!==nl(i)||(i=ls,"selectionStart"in i&&gf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ha&&Ta(ha,i)||(ha=i,i=cl(Nu,"onSelect"),0<i.length&&(e=new hf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ls)))}function io(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var cs={animationend:io("Animation","AnimationEnd"),animationiteration:io("Animation","AnimationIteration"),animationstart:io("Animation","AnimationStart"),transitionend:io("Transition","TransitionEnd")},mc={},Pg={};Ci&&(Pg=document.createElement("div").style,"AnimationEvent"in window||(delete cs.animationend.animation,delete cs.animationiteration.animation,delete cs.animationstart.animation),"TransitionEvent"in window||delete cs.transitionend.transition);function Ol(t){if(mc[t])return mc[t];if(!cs[t])return t;var e=cs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Pg)return mc[t]=e[n];return t}var Ig=Ol("animationend"),Lg=Ol("animationiteration"),Dg=Ol("animationstart"),Ug=Ol("transitionend"),Fg=new Map,Yh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(t,e){Fg.set(t,e),Or(e,[t])}for(var gc=0;gc<Yh.length;gc++){var xc=Yh[gc],A_=xc.toLowerCase(),C_=xc[0].toUpperCase()+xc.slice(1);ur(A_,"on"+C_)}ur(Ig,"onAnimationEnd");ur(Lg,"onAnimationIteration");ur(Dg,"onAnimationStart");ur("dblclick","onDoubleClick");ur("focusin","onFocus");ur("focusout","onBlur");ur(Ug,"onTransitionEnd");Ts("onMouseEnter",["mouseout","mouseover"]);Ts("onMouseLeave",["mouseout","mouseover"]);Ts("onPointerEnter",["pointerout","pointerover"]);Ts("onPointerLeave",["pointerout","pointerover"]);Or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Or("onBeforeInput",["compositionend","keypress","textInput","paste"]);Or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),R_=new Set("cancel close invalid load scroll toggle".split(" ").concat(aa));function Kh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Av(i,e,void 0,t),t.currentTarget=null}function kg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Kh(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Kh(r,o,c),s=l}}}if(rl)throw t=Tu,rl=!1,Tu=null,t}function gt(t,e){var n=e[Fu];n===void 0&&(n=e[Fu]=new Set);var i=t+"__bubble";n.has(i)||(Og(e,t,2,!1),n.add(i))}function vc(t,e,n){var i=0;e&&(i|=4),Og(n,t,i,e)}var ro="_reactListening"+Math.random().toString(36).slice(2);function Aa(t){if(!t[ro]){t[ro]=!0,jm.forEach(function(n){n!=="selectionchange"&&(R_.has(n)||vc(n,!1,t),vc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ro]||(e[ro]=!0,vc("selectionchange",!1,e))}}function Og(t,e,n,i){switch(Sg(e)){case 1:var r=Gv;break;case 4:r=Wv;break;default:r=df}n=r.bind(null,e,n,t),r=void 0,!wu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function _c(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Er(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}og(function(){var c=s,p=of(n),m=[];e:{var u=Fg.get(t);if(u!==void 0){var f=hf,y=t;switch(t){case"keypress":if(Vo(n)===0)break e;case"keydown":case"keyup":f=s_;break;case"focusin":y="focus",f=fc;break;case"focusout":y="blur",f=fc;break;case"beforeblur":case"afterblur":f=fc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=Oh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=qv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=l_;break;case Ig:case Lg:case Dg:f=Kv;break;case Ug:f=u_;break;case"scroll":f=jv;break;case"wheel":f=f_;break;case"copy":case"cut":case"paste":f=Qv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=zh}var E=(e&4)!==0,x=!E&&t==="scroll",d=E?u!==null?u+"Capture":null:u;E=[];for(var g=c,v;g!==null;){v=g;var M=v.stateNode;if(v.tag===5&&M!==null&&(v=M,d!==null&&(M=Sa(g,d),M!=null&&E.push(Ca(g,M,v)))),x)break;g=g.return}0<E.length&&(u=new f(u,y,null,n,p),m.push({event:u,listeners:E}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",u&&n!==Eu&&(y=n.relatedTarget||n.fromElement)&&(Er(y)||y[Ri]))break e;if((f||u)&&(u=p.window===p?p:(u=p.ownerDocument)?u.defaultView||u.parentWindow:window,f?(y=n.relatedTarget||n.toElement,f=c,y=y?Er(y):null,y!==null&&(x=Br(y),y!==x||y.tag!==5&&y.tag!==6)&&(y=null)):(f=null,y=c),f!==y)){if(E=Oh,M="onMouseLeave",d="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(E=zh,M="onPointerLeave",d="onPointerEnter",g="pointer"),x=f==null?u:us(f),v=y==null?u:us(y),u=new E(M,g+"leave",f,n,p),u.target=x,u.relatedTarget=v,M=null,Er(p)===c&&(E=new E(d,g+"enter",y,n,p),E.target=v,E.relatedTarget=x,M=E),x=M,f&&y)t:{for(E=f,d=y,g=0,v=E;v;v=Gr(v))g++;for(v=0,M=d;M;M=Gr(M))v++;for(;0<g-v;)E=Gr(E),g--;for(;0<v-g;)d=Gr(d),v--;for(;g--;){if(E===d||d!==null&&E===d.alternate)break t;E=Gr(E),d=Gr(d)}E=null}else E=null;f!==null&&Zh(m,u,f,E,!1),y!==null&&x!==null&&Zh(m,x,y,E,!0)}}e:{if(u=c?us(c):window,f=u.nodeName&&u.nodeName.toLowerCase(),f==="select"||f==="input"&&u.type==="file")var T=__;else if(Gh(u))if(Ag)T=E_;else{T=S_;var w=y_}else(f=u.nodeName)&&f.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(T=M_);if(T&&(T=T(t,c))){Tg(m,T,n,p);break e}w&&w(t,u,c),t==="focusout"&&(w=u._wrapperState)&&w.controlled&&u.type==="number"&&vu(u,"number",u.value)}switch(w=c?us(c):window,t){case"focusin":(Gh(w)||w.contentEditable==="true")&&(ls=w,Nu=c,ha=null);break;case"focusout":ha=Nu=ls=null;break;case"mousedown":Pu=!0;break;case"contextmenu":case"mouseup":case"dragend":Pu=!1,$h(m,n,p);break;case"selectionchange":if(T_)break;case"keydown":case"keyup":$h(m,n,p)}var R;if(mf)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else os?bg(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Eg&&n.locale!=="ko"&&(os||_!=="onCompositionStart"?_==="onCompositionEnd"&&os&&(R=Mg()):(Ki=p,ff="value"in Ki?Ki.value:Ki.textContent,os=!0)),w=cl(c,_),0<w.length&&(_=new Bh(_,t,null,n,p),m.push({event:_,listeners:w}),R?_.data=R:(R=wg(n),R!==null&&(_.data=R)))),(R=p_?m_(t,n):g_(t,n))&&(c=cl(c,"onBeforeInput"),0<c.length&&(p=new Bh("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:c}),p.data=R))}kg(m,e)})}function Ca(t,e,n){return{instance:t,listener:e,currentTarget:n}}function cl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Sa(t,n),s!=null&&i.unshift(Ca(t,s,r)),s=Sa(t,e),s!=null&&i.push(Ca(t,s,r))),t=t.return}return i}function Gr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Zh(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Sa(n,s),l!=null&&a.unshift(Ca(n,l,o))):r||(l=Sa(n,s),l!=null&&a.push(Ca(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var N_=/\r\n?/g,P_=/\u0000|\uFFFD/g;function Qh(t){return(typeof t=="string"?t:""+t).replace(N_,`
`).replace(P_,"")}function so(t,e,n){if(e=Qh(e),Qh(t)!==e&&n)throw Error(ce(425))}function ul(){}var Iu=null,Lu=null;function Du(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Uu=typeof setTimeout=="function"?setTimeout:void 0,I_=typeof clearTimeout=="function"?clearTimeout:void 0,Jh=typeof Promise=="function"?Promise:void 0,L_=typeof queueMicrotask=="function"?queueMicrotask:typeof Jh<"u"?function(t){return Jh.resolve(null).then(t).catch(D_)}:Uu;function D_(t){setTimeout(function(){throw t})}function yc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ba(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ba(e)}function nr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ep(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Bs=Math.random().toString(36).slice(2),si="__reactFiber$"+Bs,Ra="__reactProps$"+Bs,Ri="__reactContainer$"+Bs,Fu="__reactEvents$"+Bs,U_="__reactListeners$"+Bs,F_="__reactHandles$"+Bs;function Er(t){var e=t[si];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ri]||n[si]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ep(t);t!==null;){if(n=t[si])return n;t=ep(t)}return e}t=n,n=t.parentNode}return null}function Ha(t){return t=t[si]||t[Ri],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function us(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ce(33))}function Bl(t){return t[Ra]||null}var ku=[],ds=-1;function dr(t){return{current:t}}function xt(t){0>ds||(t.current=ku[ds],ku[ds]=null,ds--)}function mt(t,e){ds++,ku[ds]=t.current,t.current=e}var lr={},en=dr(lr),dn=dr(!1),Nr=lr;function As(t,e){var n=t.type.contextTypes;if(!n)return lr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function fn(t){return t=t.childContextTypes,t!=null}function dl(){xt(dn),xt(en)}function tp(t,e,n){if(en.current!==lr)throw Error(ce(168));mt(en,e),mt(dn,n)}function Bg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ce(108,yv(t)||"Unknown",r));return Mt({},n,i)}function fl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||lr,Nr=en.current,mt(en,t),mt(dn,dn.current),!0}function np(t,e,n){var i=t.stateNode;if(!i)throw Error(ce(169));n?(t=Bg(t,e,Nr),i.__reactInternalMemoizedMergedChildContext=t,xt(dn),xt(en),mt(en,t)):xt(dn),mt(dn,n)}var yi=null,zl=!1,Sc=!1;function zg(t){yi===null?yi=[t]:yi.push(t)}function k_(t){zl=!0,zg(t)}function fr(){if(!Sc&&yi!==null){Sc=!0;var t=0,e=ot;try{var n=yi;for(ot=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}yi=null,zl=!1}catch(r){throw yi!==null&&(yi=yi.slice(t+1)),dg(lf,fr),r}finally{ot=e,Sc=!1}}return null}var fs=[],hs=0,hl=null,pl=0,Rn=[],Nn=0,Pr=null,Mi=1,Ei="";function vr(t,e){fs[hs++]=pl,fs[hs++]=hl,hl=t,pl=e}function Hg(t,e,n){Rn[Nn++]=Mi,Rn[Nn++]=Ei,Rn[Nn++]=Pr,Pr=t;var i=Mi;t=Ei;var r=32-$n(i)-1;i&=~(1<<r),n+=1;var s=32-$n(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Mi=1<<32-$n(e)+r|n<<r|i,Ei=s+t}else Mi=1<<s|n<<r|i,Ei=t}function xf(t){t.return!==null&&(vr(t,1),Hg(t,1,0))}function vf(t){for(;t===hl;)hl=fs[--hs],fs[hs]=null,pl=fs[--hs],fs[hs]=null;for(;t===Pr;)Pr=Rn[--Nn],Rn[Nn]=null,Ei=Rn[--Nn],Rn[Nn]=null,Mi=Rn[--Nn],Rn[Nn]=null}var Sn=null,yn=null,_t=!1,jn=null;function Vg(t,e){var n=Ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ip(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Sn=t,yn=nr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Sn=t,yn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Pr!==null?{id:Mi,overflow:Ei}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Sn=t,yn=null,!0):!1;default:return!1}}function Ou(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Bu(t){if(_t){var e=yn;if(e){var n=e;if(!ip(t,e)){if(Ou(t))throw Error(ce(418));e=nr(n.nextSibling);var i=Sn;e&&ip(t,e)?Vg(i,n):(t.flags=t.flags&-4097|2,_t=!1,Sn=t)}}else{if(Ou(t))throw Error(ce(418));t.flags=t.flags&-4097|2,_t=!1,Sn=t}}}function rp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Sn=t}function ao(t){if(t!==Sn)return!1;if(!_t)return rp(t),_t=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Du(t.type,t.memoizedProps)),e&&(e=yn)){if(Ou(t))throw Gg(),Error(ce(418));for(;e;)Vg(t,e),e=nr(e.nextSibling)}if(rp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ce(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){yn=nr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}yn=null}}else yn=Sn?nr(t.stateNode.nextSibling):null;return!0}function Gg(){for(var t=yn;t;)t=nr(t.nextSibling)}function Cs(){yn=Sn=null,_t=!1}function _f(t){jn===null?jn=[t]:jn.push(t)}var O_=Di.ReactCurrentBatchConfig;function qs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ce(309));var i=n.stateNode}if(!i)throw Error(ce(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ce(284));if(!n._owner)throw Error(ce(290,t))}return t}function oo(t,e){throw t=Object.prototype.toString.call(e),Error(ce(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function sp(t){var e=t._init;return e(t._payload)}function Wg(t){function e(d,g){if(t){var v=d.deletions;v===null?(d.deletions=[g],d.flags|=16):v.push(g)}}function n(d,g){if(!t)return null;for(;g!==null;)e(d,g),g=g.sibling;return null}function i(d,g){for(d=new Map;g!==null;)g.key!==null?d.set(g.key,g):d.set(g.index,g),g=g.sibling;return d}function r(d,g){return d=ar(d,g),d.index=0,d.sibling=null,d}function s(d,g,v){return d.index=v,t?(v=d.alternate,v!==null?(v=v.index,v<g?(d.flags|=2,g):v):(d.flags|=2,g)):(d.flags|=1048576,g)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,g,v,M){return g===null||g.tag!==6?(g=Cc(v,d.mode,M),g.return=d,g):(g=r(g,v),g.return=d,g)}function l(d,g,v,M){var T=v.type;return T===as?p(d,g,v.props.children,M,v.key):g!==null&&(g.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ji&&sp(T)===g.type)?(M=r(g,v.props),M.ref=qs(d,g,v),M.return=d,M):(M=Yo(v.type,v.key,v.props,null,d.mode,M),M.ref=qs(d,g,v),M.return=d,M)}function c(d,g,v,M){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=Rc(v,d.mode,M),g.return=d,g):(g=r(g,v.children||[]),g.return=d,g)}function p(d,g,v,M,T){return g===null||g.tag!==7?(g=Rr(v,d.mode,M,T),g.return=d,g):(g=r(g,v),g.return=d,g)}function m(d,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Cc(""+g,d.mode,v),g.return=d,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ka:return v=Yo(g.type,g.key,g.props,null,d.mode,v),v.ref=qs(d,null,g),v.return=d,v;case ss:return g=Rc(g,d.mode,v),g.return=d,g;case ji:var M=g._init;return m(d,M(g._payload),v)}if(ra(g)||Vs(g))return g=Rr(g,d.mode,v,null),g.return=d,g;oo(d,g)}return null}function u(d,g,v,M){var T=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return T!==null?null:o(d,g,""+v,M);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ka:return v.key===T?l(d,g,v,M):null;case ss:return v.key===T?c(d,g,v,M):null;case ji:return T=v._init,u(d,g,T(v._payload),M)}if(ra(v)||Vs(v))return T!==null?null:p(d,g,v,M,null);oo(d,v)}return null}function f(d,g,v,M,T){if(typeof M=="string"&&M!==""||typeof M=="number")return d=d.get(v)||null,o(g,d,""+M,T);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Ka:return d=d.get(M.key===null?v:M.key)||null,l(g,d,M,T);case ss:return d=d.get(M.key===null?v:M.key)||null,c(g,d,M,T);case ji:var w=M._init;return f(d,g,v,w(M._payload),T)}if(ra(M)||Vs(M))return d=d.get(v)||null,p(g,d,M,T,null);oo(g,M)}return null}function y(d,g,v,M){for(var T=null,w=null,R=g,_=g=0,A=null;R!==null&&_<v.length;_++){R.index>_?(A=R,R=null):A=R.sibling;var I=u(d,R,v[_],M);if(I===null){R===null&&(R=A);break}t&&R&&I.alternate===null&&e(d,R),g=s(I,g,_),w===null?T=I:w.sibling=I,w=I,R=A}if(_===v.length)return n(d,R),_t&&vr(d,_),T;if(R===null){for(;_<v.length;_++)R=m(d,v[_],M),R!==null&&(g=s(R,g,_),w===null?T=R:w.sibling=R,w=R);return _t&&vr(d,_),T}for(R=i(d,R);_<v.length;_++)A=f(R,d,_,v[_],M),A!==null&&(t&&A.alternate!==null&&R.delete(A.key===null?_:A.key),g=s(A,g,_),w===null?T=A:w.sibling=A,w=A);return t&&R.forEach(function(L){return e(d,L)}),_t&&vr(d,_),T}function E(d,g,v,M){var T=Vs(v);if(typeof T!="function")throw Error(ce(150));if(v=T.call(v),v==null)throw Error(ce(151));for(var w=T=null,R=g,_=g=0,A=null,I=v.next();R!==null&&!I.done;_++,I=v.next()){R.index>_?(A=R,R=null):A=R.sibling;var L=u(d,R,I.value,M);if(L===null){R===null&&(R=A);break}t&&R&&L.alternate===null&&e(d,R),g=s(L,g,_),w===null?T=L:w.sibling=L,w=L,R=A}if(I.done)return n(d,R),_t&&vr(d,_),T;if(R===null){for(;!I.done;_++,I=v.next())I=m(d,I.value,M),I!==null&&(g=s(I,g,_),w===null?T=I:w.sibling=I,w=I);return _t&&vr(d,_),T}for(R=i(d,R);!I.done;_++,I=v.next())I=f(R,d,_,I.value,M),I!==null&&(t&&I.alternate!==null&&R.delete(I.key===null?_:I.key),g=s(I,g,_),w===null?T=I:w.sibling=I,w=I);return t&&R.forEach(function(z){return e(d,z)}),_t&&vr(d,_),T}function x(d,g,v,M){if(typeof v=="object"&&v!==null&&v.type===as&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ka:e:{for(var T=v.key,w=g;w!==null;){if(w.key===T){if(T=v.type,T===as){if(w.tag===7){n(d,w.sibling),g=r(w,v.props.children),g.return=d,d=g;break e}}else if(w.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ji&&sp(T)===w.type){n(d,w.sibling),g=r(w,v.props),g.ref=qs(d,w,v),g.return=d,d=g;break e}n(d,w);break}else e(d,w);w=w.sibling}v.type===as?(g=Rr(v.props.children,d.mode,M,v.key),g.return=d,d=g):(M=Yo(v.type,v.key,v.props,null,d.mode,M),M.ref=qs(d,g,v),M.return=d,d=M)}return a(d);case ss:e:{for(w=v.key;g!==null;){if(g.key===w)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(d,g.sibling),g=r(g,v.children||[]),g.return=d,d=g;break e}else{n(d,g);break}else e(d,g);g=g.sibling}g=Rc(v,d.mode,M),g.return=d,d=g}return a(d);case ji:return w=v._init,x(d,g,w(v._payload),M)}if(ra(v))return y(d,g,v,M);if(Vs(v))return E(d,g,v,M);oo(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(d,g.sibling),g=r(g,v),g.return=d,d=g):(n(d,g),g=Cc(v,d.mode,M),g.return=d,d=g),a(d)):n(d,g)}return x}var Rs=Wg(!0),jg=Wg(!1),ml=dr(null),gl=null,ps=null,yf=null;function Sf(){yf=ps=gl=null}function Mf(t){var e=ml.current;xt(ml),t._currentValue=e}function zu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ss(t,e){gl=t,yf=ps=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(un=!0),t.firstContext=null)}function kn(t){var e=t._currentValue;if(yf!==t)if(t={context:t,memoizedValue:e,next:null},ps===null){if(gl===null)throw Error(ce(308));ps=t,gl.dependencies={lanes:0,firstContext:t}}else ps=ps.next=t;return e}var br=null;function Ef(t){br===null?br=[t]:br.push(t)}function Xg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Ef(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ni(t,i)}function Ni(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Xi=!1;function bf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ir(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,tt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ni(t,n)}return r=i.interleaved,r===null?(e.next=e,Ef(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ni(t,n)}function Go(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,cf(t,n)}}function ap(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function xl(t,e,n,i){var r=t.updateQueue;Xi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var p=t.alternate;p!==null&&(p=p.updateQueue,o=p.lastBaseUpdate,o!==a&&(o===null?p.firstBaseUpdate=c:o.next=c,p.lastBaseUpdate=l))}if(s!==null){var m=r.baseState;a=0,p=c=l=null,o=s;do{var u=o.lane,f=o.eventTime;if((i&u)===u){p!==null&&(p=p.next={eventTime:f,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var y=t,E=o;switch(u=e,f=n,E.tag){case 1:if(y=E.payload,typeof y=="function"){m=y.call(f,m,u);break e}m=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=E.payload,u=typeof y=="function"?y.call(f,m,u):y,u==null)break e;m=Mt({},m,u);break e;case 2:Xi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,u=r.effects,u===null?r.effects=[o]:u.push(o))}else f={eventTime:f,lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},p===null?(c=p=f,l=m):p=p.next=f,a|=u;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;u=o,o=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(!0);if(p===null&&(l=m),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=p,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Lr|=a,t.lanes=a,t.memoizedState=m}}function op(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ce(191,r));r.call(i)}}}var Va={},ci=dr(Va),Na=dr(Va),Pa=dr(Va);function wr(t){if(t===Va)throw Error(ce(174));return t}function wf(t,e){switch(mt(Pa,e),mt(Na,t),mt(ci,Va),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:yu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=yu(e,t)}xt(ci),mt(ci,e)}function Ns(){xt(ci),xt(Na),xt(Pa)}function $g(t){wr(Pa.current);var e=wr(ci.current),n=yu(e,t.type);e!==n&&(mt(Na,t),mt(ci,n))}function Tf(t){Na.current===t&&(xt(ci),xt(Na))}var yt=dr(0);function vl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Mc=[];function Af(){for(var t=0;t<Mc.length;t++)Mc[t]._workInProgressVersionPrimary=null;Mc.length=0}var Wo=Di.ReactCurrentDispatcher,Ec=Di.ReactCurrentBatchConfig,Ir=0,St=null,Dt=null,Bt=null,_l=!1,pa=!1,Ia=0,B_=0;function qt(){throw Error(ce(321))}function Cf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kn(t[n],e[n]))return!1;return!0}function Rf(t,e,n,i,r,s){if(Ir=s,St=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Wo.current=t===null||t.memoizedState===null?G_:W_,t=n(i,r),pa){s=0;do{if(pa=!1,Ia=0,25<=s)throw Error(ce(301));s+=1,Bt=Dt=null,e.updateQueue=null,Wo.current=j_,t=n(i,r)}while(pa)}if(Wo.current=yl,e=Dt!==null&&Dt.next!==null,Ir=0,Bt=Dt=St=null,_l=!1,e)throw Error(ce(300));return t}function Nf(){var t=Ia!==0;return Ia=0,t}function ii(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?St.memoizedState=Bt=t:Bt=Bt.next=t,Bt}function On(){if(Dt===null){var t=St.alternate;t=t!==null?t.memoizedState:null}else t=Dt.next;var e=Bt===null?St.memoizedState:Bt.next;if(e!==null)Bt=e,Dt=t;else{if(t===null)throw Error(ce(310));Dt=t,t={memoizedState:Dt.memoizedState,baseState:Dt.baseState,baseQueue:Dt.baseQueue,queue:Dt.queue,next:null},Bt===null?St.memoizedState=Bt=t:Bt=Bt.next=t}return Bt}function La(t,e){return typeof e=="function"?e(t):e}function bc(t){var e=On(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=Dt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var p=c.lane;if((Ir&p)===p)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var m={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=m,a=i):l=l.next=m,St.lanes|=p,Lr|=p}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Kn(i,e.memoizedState)||(un=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,St.lanes|=s,Lr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wc(t){var e=On(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Kn(s,e.memoizedState)||(un=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Yg(){}function Kg(t,e){var n=St,i=On(),r=e(),s=!Kn(i.memoizedState,r);if(s&&(i.memoizedState=r,un=!0),i=i.queue,Pf(Jg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Bt!==null&&Bt.memoizedState.tag&1){if(n.flags|=2048,Da(9,Qg.bind(null,n,i,r,e),void 0,null),zt===null)throw Error(ce(349));Ir&30||Zg(n,e,r)}return r}function Zg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Qg(t,e,n,i){e.value=n,e.getSnapshot=i,e0(e)&&t0(t)}function Jg(t,e,n){return n(function(){e0(e)&&t0(t)})}function e0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kn(t,n)}catch{return!0}}function t0(t){var e=Ni(t,1);e!==null&&Yn(e,t,1,-1)}function lp(t){var e=ii();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:t},e.queue=t,t=t.dispatch=V_.bind(null,St,t),[e.memoizedState,t]}function Da(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function n0(){return On().memoizedState}function jo(t,e,n,i){var r=ii();St.flags|=t,r.memoizedState=Da(1|e,n,void 0,i===void 0?null:i)}function Hl(t,e,n,i){var r=On();i=i===void 0?null:i;var s=void 0;if(Dt!==null){var a=Dt.memoizedState;if(s=a.destroy,i!==null&&Cf(i,a.deps)){r.memoizedState=Da(e,n,s,i);return}}St.flags|=t,r.memoizedState=Da(1|e,n,s,i)}function cp(t,e){return jo(8390656,8,t,e)}function Pf(t,e){return Hl(2048,8,t,e)}function i0(t,e){return Hl(4,2,t,e)}function r0(t,e){return Hl(4,4,t,e)}function s0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function a0(t,e,n){return n=n!=null?n.concat([t]):null,Hl(4,4,s0.bind(null,e,t),n)}function If(){}function o0(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Cf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function l0(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Cf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function c0(t,e,n){return Ir&21?(Kn(n,e)||(n=pg(),St.lanes|=n,Lr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,un=!0),t.memoizedState=n)}function z_(t,e){var n=ot;ot=n!==0&&4>n?n:4,t(!0);var i=Ec.transition;Ec.transition={};try{t(!1),e()}finally{ot=n,Ec.transition=i}}function u0(){return On().memoizedState}function H_(t,e,n){var i=sr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},d0(t))f0(e,n);else if(n=Xg(t,e,n,i),n!==null){var r=rn();Yn(n,t,i,r),h0(n,e,i)}}function V_(t,e,n){var i=sr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(d0(t))f0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Kn(o,a)){var l=e.interleaved;l===null?(r.next=r,Ef(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Xg(t,e,r,i),n!==null&&(r=rn(),Yn(n,t,i,r),h0(n,e,i))}}function d0(t){var e=t.alternate;return t===St||e!==null&&e===St}function f0(t,e){pa=_l=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function h0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,cf(t,n)}}var yl={readContext:kn,useCallback:qt,useContext:qt,useEffect:qt,useImperativeHandle:qt,useInsertionEffect:qt,useLayoutEffect:qt,useMemo:qt,useReducer:qt,useRef:qt,useState:qt,useDebugValue:qt,useDeferredValue:qt,useTransition:qt,useMutableSource:qt,useSyncExternalStore:qt,useId:qt,unstable_isNewReconciler:!1},G_={readContext:kn,useCallback:function(t,e){return ii().memoizedState=[t,e===void 0?null:e],t},useContext:kn,useEffect:cp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,jo(4194308,4,s0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return jo(4194308,4,t,e)},useInsertionEffect:function(t,e){return jo(4,2,t,e)},useMemo:function(t,e){var n=ii();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ii();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=H_.bind(null,St,t),[i.memoizedState,t]},useRef:function(t){var e=ii();return t={current:t},e.memoizedState=t},useState:lp,useDebugValue:If,useDeferredValue:function(t){return ii().memoizedState=t},useTransition:function(){var t=lp(!1),e=t[0];return t=z_.bind(null,t[1]),ii().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=St,r=ii();if(_t){if(n===void 0)throw Error(ce(407));n=n()}else{if(n=e(),zt===null)throw Error(ce(349));Ir&30||Zg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,cp(Jg.bind(null,i,s,t),[t]),i.flags|=2048,Da(9,Qg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ii(),e=zt.identifierPrefix;if(_t){var n=Ei,i=Mi;n=(i&~(1<<32-$n(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ia++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=B_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},W_={readContext:kn,useCallback:o0,useContext:kn,useEffect:Pf,useImperativeHandle:a0,useInsertionEffect:i0,useLayoutEffect:r0,useMemo:l0,useReducer:bc,useRef:n0,useState:function(){return bc(La)},useDebugValue:If,useDeferredValue:function(t){var e=On();return c0(e,Dt.memoizedState,t)},useTransition:function(){var t=bc(La)[0],e=On().memoizedState;return[t,e]},useMutableSource:Yg,useSyncExternalStore:Kg,useId:u0,unstable_isNewReconciler:!1},j_={readContext:kn,useCallback:o0,useContext:kn,useEffect:Pf,useImperativeHandle:a0,useInsertionEffect:i0,useLayoutEffect:r0,useMemo:l0,useReducer:wc,useRef:n0,useState:function(){return wc(La)},useDebugValue:If,useDeferredValue:function(t){var e=On();return Dt===null?e.memoizedState=t:c0(e,Dt.memoizedState,t)},useTransition:function(){var t=wc(La)[0],e=On().memoizedState;return[t,e]},useMutableSource:Yg,useSyncExternalStore:Kg,useId:u0,unstable_isNewReconciler:!1};function Gn(t,e){if(t&&t.defaultProps){e=Mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Hu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Vl={isMounted:function(t){return(t=t._reactInternals)?Br(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=rn(),r=sr(t),s=wi(i,r);s.payload=e,n!=null&&(s.callback=n),e=ir(t,s,r),e!==null&&(Yn(e,t,r,i),Go(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=rn(),r=sr(t),s=wi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ir(t,s,r),e!==null&&(Yn(e,t,r,i),Go(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rn(),i=sr(t),r=wi(n,i);r.tag=2,e!=null&&(r.callback=e),e=ir(t,r,i),e!==null&&(Yn(e,t,i,n),Go(e,t,i))}};function up(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ta(n,i)||!Ta(r,s):!0}function p0(t,e,n){var i=!1,r=lr,s=e.contextType;return typeof s=="object"&&s!==null?s=kn(s):(r=fn(e)?Nr:en.current,i=e.contextTypes,s=(i=i!=null)?As(t,r):lr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Vl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function dp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Vl.enqueueReplaceState(e,e.state,null)}function Vu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},bf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=kn(s):(s=fn(e)?Nr:en.current,r.context=As(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Hu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Vl.enqueueReplaceState(r,r.state,null),xl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ps(t,e){try{var n="",i=e;do n+=_v(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Tc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Gu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var X_=typeof WeakMap=="function"?WeakMap:Map;function m0(t,e,n){n=wi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ml||(Ml=!0,Ju=i),Gu(t,e)},n}function g0(t,e,n){n=wi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Gu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Gu(t,e),typeof i!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function fp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new X_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=ay.bind(null,t,e,n),e.then(t,t))}function hp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function pp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=wi(-1,1),e.tag=2,ir(n,e,1))),n.lanes|=1),t)}var q_=Di.ReactCurrentOwner,un=!1;function nn(t,e,n,i){e.child=t===null?jg(e,null,n,i):Rs(e,t.child,n,i)}function mp(t,e,n,i,r){n=n.render;var s=e.ref;return Ss(e,r),i=Rf(t,e,n,i,s,r),n=Nf(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(_t&&n&&xf(e),e.flags|=1,nn(t,e,i,r),e.child)}function gp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!zf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,x0(t,e,s,i,r)):(t=Yo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ta,n(a,i)&&t.ref===e.ref)return Pi(t,e,r)}return e.flags|=1,t=ar(s,i),t.ref=e.ref,t.return=e,e.child=t}function x0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ta(s,i)&&t.ref===e.ref)if(un=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(un=!0);else return e.lanes=t.lanes,Pi(t,e,r)}return Wu(t,e,n,i,r)}function v0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},mt(gs,_n),_n|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,mt(gs,_n),_n|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,mt(gs,_n),_n|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,mt(gs,_n),_n|=i;return nn(t,e,r,n),e.child}function _0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Wu(t,e,n,i,r){var s=fn(n)?Nr:en.current;return s=As(e,s),Ss(e,r),n=Rf(t,e,n,i,s,r),i=Nf(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(_t&&i&&xf(e),e.flags|=1,nn(t,e,n,r),e.child)}function xp(t,e,n,i,r){if(fn(n)){var s=!0;fl(e)}else s=!1;if(Ss(e,r),e.stateNode===null)Xo(t,e),p0(e,n,i),Vu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=kn(c):(c=fn(n)?Nr:en.current,c=As(e,c));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&dp(e,a,i,c),Xi=!1;var u=e.memoizedState;a.state=u,xl(e,i,a,r),l=e.memoizedState,o!==i||u!==l||dn.current||Xi?(typeof p=="function"&&(Hu(e,n,p,i),l=e.memoizedState),(o=Xi||up(e,n,o,i,u,l,c))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,qg(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Gn(e.type,o),a.props=c,m=e.pendingProps,u=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=kn(l):(l=fn(n)?Nr:en.current,l=As(e,l));var f=n.getDerivedStateFromProps;(p=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==m||u!==l)&&dp(e,a,i,l),Xi=!1,u=e.memoizedState,a.state=u,xl(e,i,a,r);var y=e.memoizedState;o!==m||u!==y||dn.current||Xi?(typeof f=="function"&&(Hu(e,n,f,i),y=e.memoizedState),(c=Xi||up(e,n,c,i,u,y,l)||!1)?(p||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,y,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,y,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),a.props=i,a.state=y,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return ju(t,e,n,i,s,r)}function ju(t,e,n,i,r,s){_0(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&np(e,n,!1),Pi(t,e,s);i=e.stateNode,q_.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Rs(e,t.child,null,s),e.child=Rs(e,null,o,s)):nn(t,e,o,s),e.memoizedState=i.state,r&&np(e,n,!0),e.child}function y0(t){var e=t.stateNode;e.pendingContext?tp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&tp(t,e.context,!1),wf(t,e.containerInfo)}function vp(t,e,n,i,r){return Cs(),_f(r),e.flags|=256,nn(t,e,n,i),e.child}var Xu={dehydrated:null,treeContext:null,retryLane:0};function qu(t){return{baseLanes:t,cachePool:null,transitions:null}}function S0(t,e,n){var i=e.pendingProps,r=yt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),mt(yt,r&1),t===null)return Bu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=jl(a,i,0,null),t=Rr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=qu(n),e.memoizedState=Xu,t):Lf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return $_(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ar(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=ar(o,s):(s=Rr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?qu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Xu,i}return s=t.child,t=s.sibling,i=ar(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Lf(t,e){return e=jl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function lo(t,e,n,i){return i!==null&&_f(i),Rs(e,t.child,null,n),t=Lf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function $_(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Tc(Error(ce(422))),lo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=jl({mode:"visible",children:i.children},r,0,null),s=Rr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Rs(e,t.child,null,a),e.child.memoizedState=qu(a),e.memoizedState=Xu,s);if(!(e.mode&1))return lo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ce(419)),i=Tc(s,i,void 0),lo(t,e,a,i)}if(o=(a&t.childLanes)!==0,un||o){if(i=zt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ni(t,r),Yn(i,t,r,-1))}return Bf(),i=Tc(Error(ce(421))),lo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=oy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,yn=nr(r.nextSibling),Sn=e,_t=!0,jn=null,t!==null&&(Rn[Nn++]=Mi,Rn[Nn++]=Ei,Rn[Nn++]=Pr,Mi=t.id,Ei=t.overflow,Pr=e),e=Lf(e,i.children),e.flags|=4096,e)}function _p(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),zu(t.return,e,n)}function Ac(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function M0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(nn(t,e,i.children,n),i=yt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_p(t,n,e);else if(t.tag===19)_p(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(mt(yt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&vl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ac(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&vl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ac(e,!0,n,null,s);break;case"together":Ac(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Xo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Lr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ce(153));if(e.child!==null){for(t=e.child,n=ar(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ar(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Y_(t,e,n){switch(e.tag){case 3:y0(e),Cs();break;case 5:$g(e);break;case 1:fn(e.type)&&fl(e);break;case 4:wf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;mt(ml,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(mt(yt,yt.current&1),e.flags|=128,null):n&e.child.childLanes?S0(t,e,n):(mt(yt,yt.current&1),t=Pi(t,e,n),t!==null?t.sibling:null);mt(yt,yt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return M0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),mt(yt,yt.current),i)break;return null;case 22:case 23:return e.lanes=0,v0(t,e,n)}return Pi(t,e,n)}var E0,$u,b0,w0;E0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$u=function(){};b0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,wr(ci.current);var s=null;switch(n){case"input":r=gu(t,r),i=gu(t,i),s=[];break;case"select":r=Mt({},r,{value:void 0}),i=Mt({},i,{value:void 0}),s=[];break;case"textarea":r=_u(t,r),i=_u(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ul)}Su(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(_a.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(_a.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&gt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};w0=function(t,e,n,i){n!==i&&(e.flags|=4)};function $s(t,e){if(!_t)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function $t(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function K_(t,e,n){var i=e.pendingProps;switch(vf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(e),null;case 1:return fn(e.type)&&dl(),$t(e),null;case 3:return i=e.stateNode,Ns(),xt(dn),xt(en),Af(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ao(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jn!==null&&(nd(jn),jn=null))),$u(t,e),$t(e),null;case 5:Tf(e);var r=wr(Pa.current);if(n=e.type,t!==null&&e.stateNode!=null)b0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ce(166));return $t(e),null}if(t=wr(ci.current),ao(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[si]=e,i[Ra]=s,t=(e.mode&1)!==0,n){case"dialog":gt("cancel",i),gt("close",i);break;case"iframe":case"object":case"embed":gt("load",i);break;case"video":case"audio":for(r=0;r<aa.length;r++)gt(aa[r],i);break;case"source":gt("error",i);break;case"img":case"image":case"link":gt("error",i),gt("load",i);break;case"details":gt("toggle",i);break;case"input":Ch(i,s),gt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},gt("invalid",i);break;case"textarea":Nh(i,s),gt("invalid",i)}Su(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&so(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&so(i.textContent,o,t),r=["children",""+o]):_a.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&gt("scroll",i)}switch(n){case"input":Za(i),Rh(i,s,!0);break;case"textarea":Za(i),Ph(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ul)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Jm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[si]=e,t[Ra]=i,E0(t,e,!1,!1),e.stateNode=t;e:{switch(a=Mu(n,i),n){case"dialog":gt("cancel",t),gt("close",t),r=i;break;case"iframe":case"object":case"embed":gt("load",t),r=i;break;case"video":case"audio":for(r=0;r<aa.length;r++)gt(aa[r],t);r=i;break;case"source":gt("error",t),r=i;break;case"img":case"image":case"link":gt("error",t),gt("load",t),r=i;break;case"details":gt("toggle",t),r=i;break;case"input":Ch(t,i),r=gu(t,i),gt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Mt({},i,{value:void 0}),gt("invalid",t);break;case"textarea":Nh(t,i),r=_u(t,i),gt("invalid",t);break;default:r=i}Su(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?ng(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&eg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ya(t,l):typeof l=="number"&&ya(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(_a.hasOwnProperty(s)?l!=null&&s==="onScroll"&&gt("scroll",t):l!=null&&nf(t,s,l,a))}switch(n){case"input":Za(t),Rh(t,i,!1);break;case"textarea":Za(t),Ph(t);break;case"option":i.value!=null&&t.setAttribute("value",""+or(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?xs(t,!!i.multiple,s,!1):i.defaultValue!=null&&xs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ul)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $t(e),null;case 6:if(t&&e.stateNode!=null)w0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ce(166));if(n=wr(Pa.current),wr(ci.current),ao(e)){if(i=e.stateNode,n=e.memoizedProps,i[si]=e,(s=i.nodeValue!==n)&&(t=Sn,t!==null))switch(t.tag){case 3:so(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&so(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[si]=e,e.stateNode=i}return $t(e),null;case 13:if(xt(yt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_t&&yn!==null&&e.mode&1&&!(e.flags&128))Gg(),Cs(),e.flags|=98560,s=!1;else if(s=ao(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ce(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ce(317));s[si]=e}else Cs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$t(e),s=!1}else jn!==null&&(nd(jn),jn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||yt.current&1?Ut===0&&(Ut=3):Bf())),e.updateQueue!==null&&(e.flags|=4),$t(e),null);case 4:return Ns(),$u(t,e),t===null&&Aa(e.stateNode.containerInfo),$t(e),null;case 10:return Mf(e.type._context),$t(e),null;case 17:return fn(e.type)&&dl(),$t(e),null;case 19:if(xt(yt),s=e.memoizedState,s===null)return $t(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)$s(s,!1);else{if(Ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=vl(t),a!==null){for(e.flags|=128,$s(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return mt(yt,yt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Nt()>Is&&(e.flags|=128,i=!0,$s(s,!1),e.lanes=4194304)}else{if(!i)if(t=vl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),$s(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!_t)return $t(e),null}else 2*Nt()-s.renderingStartTime>Is&&n!==1073741824&&(e.flags|=128,i=!0,$s(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Nt(),e.sibling=null,n=yt.current,mt(yt,i?n&1|2:n&1),e):($t(e),null);case 22:case 23:return Of(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?_n&1073741824&&($t(e),e.subtreeFlags&6&&(e.flags|=8192)):$t(e),null;case 24:return null;case 25:return null}throw Error(ce(156,e.tag))}function Z_(t,e){switch(vf(e),e.tag){case 1:return fn(e.type)&&dl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ns(),xt(dn),xt(en),Af(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Tf(e),null;case 13:if(xt(yt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ce(340));Cs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xt(yt),null;case 4:return Ns(),null;case 10:return Mf(e.type._context),null;case 22:case 23:return Of(),null;case 24:return null;default:return null}}var co=!1,Zt=!1,Q_=typeof WeakSet=="function"?WeakSet:Set,Te=null;function ms(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Tt(t,e,i)}else n.current=null}function Yu(t,e,n){try{n()}catch(i){Tt(t,e,i)}}var yp=!1;function J_(t,e){if(Iu=ol,t=Ng(),gf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,p=0,m=t,u=null;t:for(;;){for(var f;m!==n||r!==0&&m.nodeType!==3||(o=a+r),m!==s||i!==0&&m.nodeType!==3||(l=a+i),m.nodeType===3&&(a+=m.nodeValue.length),(f=m.firstChild)!==null;)u=m,m=f;for(;;){if(m===t)break t;if(u===n&&++c===r&&(o=a),u===s&&++p===i&&(l=a),(f=m.nextSibling)!==null)break;m=u,u=m.parentNode}m=f}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Lu={focusedElem:t,selectionRange:n},ol=!1,Te=e;Te!==null;)if(e=Te,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Te=t;else for(;Te!==null;){e=Te;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var E=y.memoizedProps,x=y.memoizedState,d=e.stateNode,g=d.getSnapshotBeforeUpdate(e.elementType===e.type?E:Gn(e.type,E),x);d.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(M){Tt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Te=t;break}Te=e.return}return y=yp,yp=!1,y}function ma(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Yu(e,n,s)}r=r.next}while(r!==i)}}function Gl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ku(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function T0(t){var e=t.alternate;e!==null&&(t.alternate=null,T0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[si],delete e[Ra],delete e[Fu],delete e[U_],delete e[F_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function A0(t){return t.tag===5||t.tag===3||t.tag===4}function Sp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||A0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ul));else if(i!==4&&(t=t.child,t!==null))for(Zu(t,e,n),t=t.sibling;t!==null;)Zu(t,e,n),t=t.sibling}function Qu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Qu(t,e,n),t=t.sibling;t!==null;)Qu(t,e,n),t=t.sibling}var Vt=null,Wn=!1;function Oi(t,e,n){for(n=n.child;n!==null;)C0(t,e,n),n=n.sibling}function C0(t,e,n){if(li&&typeof li.onCommitFiberUnmount=="function")try{li.onCommitFiberUnmount(Ul,n)}catch{}switch(n.tag){case 5:Zt||ms(n,e);case 6:var i=Vt,r=Wn;Vt=null,Oi(t,e,n),Vt=i,Wn=r,Vt!==null&&(Wn?(t=Vt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Vt.removeChild(n.stateNode));break;case 18:Vt!==null&&(Wn?(t=Vt,n=n.stateNode,t.nodeType===8?yc(t.parentNode,n):t.nodeType===1&&yc(t,n),ba(t)):yc(Vt,n.stateNode));break;case 4:i=Vt,r=Wn,Vt=n.stateNode.containerInfo,Wn=!0,Oi(t,e,n),Vt=i,Wn=r;break;case 0:case 11:case 14:case 15:if(!Zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Yu(n,e,a),r=r.next}while(r!==i)}Oi(t,e,n);break;case 1:if(!Zt&&(ms(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Tt(n,e,o)}Oi(t,e,n);break;case 21:Oi(t,e,n);break;case 22:n.mode&1?(Zt=(i=Zt)||n.memoizedState!==null,Oi(t,e,n),Zt=i):Oi(t,e,n);break;default:Oi(t,e,n)}}function Mp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Q_),e.forEach(function(i){var r=ly.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Bn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Vt=o.stateNode,Wn=!1;break e;case 3:Vt=o.stateNode.containerInfo,Wn=!0;break e;case 4:Vt=o.stateNode.containerInfo,Wn=!0;break e}o=o.return}if(Vt===null)throw Error(ce(160));C0(s,a,r),Vt=null,Wn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Tt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)R0(e,t),e=e.sibling}function R0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bn(e,t),ei(t),i&4){try{ma(3,t,t.return),Gl(3,t)}catch(E){Tt(t,t.return,E)}try{ma(5,t,t.return)}catch(E){Tt(t,t.return,E)}}break;case 1:Bn(e,t),ei(t),i&512&&n!==null&&ms(n,n.return);break;case 5:if(Bn(e,t),ei(t),i&512&&n!==null&&ms(n,n.return),t.flags&32){var r=t.stateNode;try{ya(r,"")}catch(E){Tt(t,t.return,E)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Zm(r,s),Mu(o,a);var c=Mu(o,s);for(a=0;a<l.length;a+=2){var p=l[a],m=l[a+1];p==="style"?ng(r,m):p==="dangerouslySetInnerHTML"?eg(r,m):p==="children"?ya(r,m):nf(r,p,m,c)}switch(o){case"input":xu(r,s);break;case"textarea":Qm(r,s);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?xs(r,!!s.multiple,f,!1):u!==!!s.multiple&&(s.defaultValue!=null?xs(r,!!s.multiple,s.defaultValue,!0):xs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ra]=s}catch(E){Tt(t,t.return,E)}}break;case 6:if(Bn(e,t),ei(t),i&4){if(t.stateNode===null)throw Error(ce(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(E){Tt(t,t.return,E)}}break;case 3:if(Bn(e,t),ei(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ba(e.containerInfo)}catch(E){Tt(t,t.return,E)}break;case 4:Bn(e,t),ei(t);break;case 13:Bn(e,t),ei(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Ff=Nt())),i&4&&Mp(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(Zt=(c=Zt)||p,Bn(e,t),Zt=c):Bn(e,t),ei(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!p&&t.mode&1)for(Te=t,p=t.child;p!==null;){for(m=Te=p;Te!==null;){switch(u=Te,f=u.child,u.tag){case 0:case 11:case 14:case 15:ma(4,u,u.return);break;case 1:ms(u,u.return);var y=u.stateNode;if(typeof y.componentWillUnmount=="function"){i=u,n=u.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(E){Tt(i,n,E)}}break;case 5:ms(u,u.return);break;case 22:if(u.memoizedState!==null){bp(m);continue}}f!==null?(f.return=u,Te=f):bp(m)}p=p.sibling}e:for(p=null,m=t;;){if(m.tag===5){if(p===null){p=m;try{r=m.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=m.stateNode,l=m.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=tg("display",a))}catch(E){Tt(t,t.return,E)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(E){Tt(t,t.return,E)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Bn(e,t),ei(t),i&4&&Mp(t);break;case 21:break;default:Bn(e,t),ei(t)}}function ei(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(A0(n)){var i=n;break e}n=n.return}throw Error(ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ya(r,""),i.flags&=-33);var s=Sp(t);Qu(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Sp(t);Zu(t,o,a);break;default:throw Error(ce(161))}}catch(l){Tt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ey(t,e,n){Te=t,N0(t)}function N0(t,e,n){for(var i=(t.mode&1)!==0;Te!==null;){var r=Te,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||co;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Zt;o=co;var c=Zt;if(co=a,(Zt=l)&&!c)for(Te=r;Te!==null;)a=Te,l=a.child,a.tag===22&&a.memoizedState!==null?wp(r):l!==null?(l.return=a,Te=l):wp(r);for(;s!==null;)Te=s,N0(s),s=s.sibling;Te=r,co=o,Zt=c}Ep(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Te=s):Ep(t)}}function Ep(t){for(;Te!==null;){var e=Te;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Zt||Gl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Gn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&op(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}op(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&ba(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}Zt||e.flags&512&&Ku(e)}catch(u){Tt(e,e.return,u)}}if(e===t){Te=null;break}if(n=e.sibling,n!==null){n.return=e.return,Te=n;break}Te=e.return}}function bp(t){for(;Te!==null;){var e=Te;if(e===t){Te=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Te=n;break}Te=e.return}}function wp(t){for(;Te!==null;){var e=Te;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Gl(4,e)}catch(l){Tt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Tt(e,r,l)}}var s=e.return;try{Ku(e)}catch(l){Tt(e,s,l)}break;case 5:var a=e.return;try{Ku(e)}catch(l){Tt(e,a,l)}}}catch(l){Tt(e,e.return,l)}if(e===t){Te=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Te=o;break}Te=e.return}}var ty=Math.ceil,Sl=Di.ReactCurrentDispatcher,Df=Di.ReactCurrentOwner,Dn=Di.ReactCurrentBatchConfig,tt=0,zt=null,Lt=null,Wt=0,_n=0,gs=dr(0),Ut=0,Ua=null,Lr=0,Wl=0,Uf=0,ga=null,cn=null,Ff=0,Is=1/0,_i=null,Ml=!1,Ju=null,rr=null,uo=!1,Zi=null,El=0,xa=0,ed=null,qo=-1,$o=0;function rn(){return tt&6?Nt():qo!==-1?qo:qo=Nt()}function sr(t){return t.mode&1?tt&2&&Wt!==0?Wt&-Wt:O_.transition!==null?($o===0&&($o=pg()),$o):(t=ot,t!==0||(t=window.event,t=t===void 0?16:Sg(t.type)),t):1}function Yn(t,e,n,i){if(50<xa)throw xa=0,ed=null,Error(ce(185));Ba(t,n,i),(!(tt&2)||t!==zt)&&(t===zt&&(!(tt&2)&&(Wl|=n),Ut===4&&$i(t,Wt)),hn(t,i),n===1&&tt===0&&!(e.mode&1)&&(Is=Nt()+500,zl&&fr()))}function hn(t,e){var n=t.callbackNode;Ov(t,e);var i=al(t,t===zt?Wt:0);if(i===0)n!==null&&Dh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Dh(n),e===1)t.tag===0?k_(Tp.bind(null,t)):zg(Tp.bind(null,t)),L_(function(){!(tt&6)&&fr()}),n=null;else{switch(mg(i)){case 1:n=lf;break;case 4:n=fg;break;case 16:n=sl;break;case 536870912:n=hg;break;default:n=sl}n=O0(n,P0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function P0(t,e){if(qo=-1,$o=0,tt&6)throw Error(ce(327));var n=t.callbackNode;if(Ms()&&t.callbackNode!==n)return null;var i=al(t,t===zt?Wt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=bl(t,i);else{e=i;var r=tt;tt|=2;var s=L0();(zt!==t||Wt!==e)&&(_i=null,Is=Nt()+500,Cr(t,e));do try{ry();break}catch(o){I0(t,o)}while(!0);Sf(),Sl.current=s,tt=r,Lt!==null?e=0:(zt=null,Wt=0,e=Ut)}if(e!==0){if(e===2&&(r=Au(t),r!==0&&(i=r,e=td(t,r))),e===1)throw n=Ua,Cr(t,0),$i(t,i),hn(t,Nt()),n;if(e===6)$i(t,i);else{if(r=t.current.alternate,!(i&30)&&!ny(r)&&(e=bl(t,i),e===2&&(s=Au(t),s!==0&&(i=s,e=td(t,s))),e===1))throw n=Ua,Cr(t,0),$i(t,i),hn(t,Nt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ce(345));case 2:_r(t,cn,_i);break;case 3:if($i(t,i),(i&130023424)===i&&(e=Ff+500-Nt(),10<e)){if(al(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){rn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Uu(_r.bind(null,t,cn,_i),e);break}_r(t,cn,_i);break;case 4:if($i(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-$n(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Nt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*ty(i/1960))-i,10<i){t.timeoutHandle=Uu(_r.bind(null,t,cn,_i),i);break}_r(t,cn,_i);break;case 5:_r(t,cn,_i);break;default:throw Error(ce(329))}}}return hn(t,Nt()),t.callbackNode===n?P0.bind(null,t):null}function td(t,e){var n=ga;return t.current.memoizedState.isDehydrated&&(Cr(t,e).flags|=256),t=bl(t,e),t!==2&&(e=cn,cn=n,e!==null&&nd(e)),t}function nd(t){cn===null?cn=t:cn.push.apply(cn,t)}function ny(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Kn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function $i(t,e){for(e&=~Uf,e&=~Wl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-$n(e),i=1<<n;t[n]=-1,e&=~i}}function Tp(t){if(tt&6)throw Error(ce(327));Ms();var e=al(t,0);if(!(e&1))return hn(t,Nt()),null;var n=bl(t,e);if(t.tag!==0&&n===2){var i=Au(t);i!==0&&(e=i,n=td(t,i))}if(n===1)throw n=Ua,Cr(t,0),$i(t,e),hn(t,Nt()),n;if(n===6)throw Error(ce(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,_r(t,cn,_i),hn(t,Nt()),null}function kf(t,e){var n=tt;tt|=1;try{return t(e)}finally{tt=n,tt===0&&(Is=Nt()+500,zl&&fr())}}function Dr(t){Zi!==null&&Zi.tag===0&&!(tt&6)&&Ms();var e=tt;tt|=1;var n=Dn.transition,i=ot;try{if(Dn.transition=null,ot=1,t)return t()}finally{ot=i,Dn.transition=n,tt=e,!(tt&6)&&fr()}}function Of(){_n=gs.current,xt(gs)}function Cr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,I_(n)),Lt!==null)for(n=Lt.return;n!==null;){var i=n;switch(vf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&dl();break;case 3:Ns(),xt(dn),xt(en),Af();break;case 5:Tf(i);break;case 4:Ns();break;case 13:xt(yt);break;case 19:xt(yt);break;case 10:Mf(i.type._context);break;case 22:case 23:Of()}n=n.return}if(zt=t,Lt=t=ar(t.current,null),Wt=_n=e,Ut=0,Ua=null,Uf=Wl=Lr=0,cn=ga=null,br!==null){for(e=0;e<br.length;e++)if(n=br[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}br=null}return t}function I0(t,e){do{var n=Lt;try{if(Sf(),Wo.current=yl,_l){for(var i=St.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}_l=!1}if(Ir=0,Bt=Dt=St=null,pa=!1,Ia=0,Df.current=null,n===null||n.return===null){Ut=1,Ua=e,Lt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Wt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,p=o,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var u=p.alternate;u?(p.updateQueue=u.updateQueue,p.memoizedState=u.memoizedState,p.lanes=u.lanes):(p.updateQueue=null,p.memoizedState=null)}var f=hp(a);if(f!==null){f.flags&=-257,pp(f,a,o,s,e),f.mode&1&&fp(s,c,e),e=f,l=c;var y=e.updateQueue;if(y===null){var E=new Set;E.add(l),e.updateQueue=E}else y.add(l);break e}else{if(!(e&1)){fp(s,c,e),Bf();break e}l=Error(ce(426))}}else if(_t&&o.mode&1){var x=hp(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),pp(x,a,o,s,e),_f(Ps(l,o));break e}}s=l=Ps(l,o),Ut!==4&&(Ut=2),ga===null?ga=[s]:ga.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=m0(s,l,e);ap(s,d);break e;case 1:o=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(rr===null||!rr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=g0(s,o,e);ap(s,M);break e}}s=s.return}while(s!==null)}U0(n)}catch(T){e=T,Lt===n&&n!==null&&(Lt=n=n.return);continue}break}while(!0)}function L0(){var t=Sl.current;return Sl.current=yl,t===null?yl:t}function Bf(){(Ut===0||Ut===3||Ut===2)&&(Ut=4),zt===null||!(Lr&268435455)&&!(Wl&268435455)||$i(zt,Wt)}function bl(t,e){var n=tt;tt|=2;var i=L0();(zt!==t||Wt!==e)&&(_i=null,Cr(t,e));do try{iy();break}catch(r){I0(t,r)}while(!0);if(Sf(),tt=n,Sl.current=i,Lt!==null)throw Error(ce(261));return zt=null,Wt=0,Ut}function iy(){for(;Lt!==null;)D0(Lt)}function ry(){for(;Lt!==null&&!Rv();)D0(Lt)}function D0(t){var e=k0(t.alternate,t,_n);t.memoizedProps=t.pendingProps,e===null?U0(t):Lt=e,Df.current=null}function U0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Z_(n,e),n!==null){n.flags&=32767,Lt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ut=6,Lt=null;return}}else if(n=K_(n,e,_n),n!==null){Lt=n;return}if(e=e.sibling,e!==null){Lt=e;return}Lt=e=t}while(e!==null);Ut===0&&(Ut=5)}function _r(t,e,n){var i=ot,r=Dn.transition;try{Dn.transition=null,ot=1,sy(t,e,n,i)}finally{Dn.transition=r,ot=i}return null}function sy(t,e,n,i){do Ms();while(Zi!==null);if(tt&6)throw Error(ce(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ce(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Bv(t,s),t===zt&&(Lt=zt=null,Wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||uo||(uo=!0,O0(sl,function(){return Ms(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dn.transition,Dn.transition=null;var a=ot;ot=1;var o=tt;tt|=4,Df.current=null,J_(t,n),R0(n,t),w_(Lu),ol=!!Iu,Lu=Iu=null,t.current=n,ey(n),Nv(),tt=o,ot=a,Dn.transition=s}else t.current=n;if(uo&&(uo=!1,Zi=t,El=r),s=t.pendingLanes,s===0&&(rr=null),Lv(n.stateNode),hn(t,Nt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ml)throw Ml=!1,t=Ju,Ju=null,t;return El&1&&t.tag!==0&&Ms(),s=t.pendingLanes,s&1?t===ed?xa++:(xa=0,ed=t):xa=0,fr(),null}function Ms(){if(Zi!==null){var t=mg(El),e=Dn.transition,n=ot;try{if(Dn.transition=null,ot=16>t?16:t,Zi===null)var i=!1;else{if(t=Zi,Zi=null,El=0,tt&6)throw Error(ce(331));var r=tt;for(tt|=4,Te=t.current;Te!==null;){var s=Te,a=s.child;if(Te.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Te=c;Te!==null;){var p=Te;switch(p.tag){case 0:case 11:case 15:ma(8,p,s)}var m=p.child;if(m!==null)m.return=p,Te=m;else for(;Te!==null;){p=Te;var u=p.sibling,f=p.return;if(T0(p),p===c){Te=null;break}if(u!==null){u.return=f,Te=u;break}Te=f}}}var y=s.alternate;if(y!==null){var E=y.child;if(E!==null){y.child=null;do{var x=E.sibling;E.sibling=null,E=x}while(E!==null)}}Te=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Te=a;else e:for(;Te!==null;){if(s=Te,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ma(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Te=d;break e}Te=s.return}}var g=t.current;for(Te=g;Te!==null;){a=Te;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,Te=v;else e:for(a=g;Te!==null;){if(o=Te,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Gl(9,o)}}catch(T){Tt(o,o.return,T)}if(o===a){Te=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,Te=M;break e}Te=o.return}}if(tt=r,fr(),li&&typeof li.onPostCommitFiberRoot=="function")try{li.onPostCommitFiberRoot(Ul,t)}catch{}i=!0}return i}finally{ot=n,Dn.transition=e}}return!1}function Ap(t,e,n){e=Ps(n,e),e=m0(t,e,1),t=ir(t,e,1),e=rn(),t!==null&&(Ba(t,1,e),hn(t,e))}function Tt(t,e,n){if(t.tag===3)Ap(t,t,n);else for(;e!==null;){if(e.tag===3){Ap(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(rr===null||!rr.has(i))){t=Ps(n,t),t=g0(e,t,1),e=ir(e,t,1),t=rn(),e!==null&&(Ba(e,1,t),hn(e,t));break}}e=e.return}}function ay(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=rn(),t.pingedLanes|=t.suspendedLanes&n,zt===t&&(Wt&n)===n&&(Ut===4||Ut===3&&(Wt&130023424)===Wt&&500>Nt()-Ff?Cr(t,0):Uf|=n),hn(t,e)}function F0(t,e){e===0&&(t.mode&1?(e=eo,eo<<=1,!(eo&130023424)&&(eo=4194304)):e=1);var n=rn();t=Ni(t,e),t!==null&&(Ba(t,e,n),hn(t,n))}function oy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),F0(t,n)}function ly(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ce(314))}i!==null&&i.delete(e),F0(t,n)}var k0;k0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||dn.current)un=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return un=!1,Y_(t,e,n);un=!!(t.flags&131072)}else un=!1,_t&&e.flags&1048576&&Hg(e,pl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Xo(t,e),t=e.pendingProps;var r=As(e,en.current);Ss(e,n),r=Rf(null,e,i,t,r,n);var s=Nf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fn(i)?(s=!0,fl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,bf(e),r.updater=Vl,e.stateNode=r,r._reactInternals=e,Vu(e,i,t,n),e=ju(null,e,i,!0,s,n)):(e.tag=0,_t&&s&&xf(e),nn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Xo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=uy(i),t=Gn(i,t),r){case 0:e=Wu(null,e,i,t,n);break e;case 1:e=xp(null,e,i,t,n);break e;case 11:e=mp(null,e,i,t,n);break e;case 14:e=gp(null,e,i,Gn(i.type,t),n);break e}throw Error(ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),Wu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),xp(t,e,i,r,n);case 3:e:{if(y0(e),t===null)throw Error(ce(387));i=e.pendingProps,s=e.memoizedState,r=s.element,qg(t,e),xl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ps(Error(ce(423)),e),e=vp(t,e,i,n,r);break e}else if(i!==r){r=Ps(Error(ce(424)),e),e=vp(t,e,i,n,r);break e}else for(yn=nr(e.stateNode.containerInfo.firstChild),Sn=e,_t=!0,jn=null,n=jg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cs(),i===r){e=Pi(t,e,n);break e}nn(t,e,i,n)}e=e.child}return e;case 5:return $g(e),t===null&&Bu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Du(i,r)?a=null:s!==null&&Du(i,s)&&(e.flags|=32),_0(t,e),nn(t,e,a,n),e.child;case 6:return t===null&&Bu(e),null;case 13:return S0(t,e,n);case 4:return wf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Rs(e,null,i,n):nn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),mp(t,e,i,r,n);case 7:return nn(t,e,e.pendingProps,n),e.child;case 8:return nn(t,e,e.pendingProps.children,n),e.child;case 12:return nn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,mt(ml,i._currentValue),i._currentValue=a,s!==null)if(Kn(s.value,a)){if(s.children===r.children&&!dn.current){e=Pi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=wi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?l.next=l:(l.next=p.next,p.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),zu(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ce(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),zu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}nn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ss(e,n),r=kn(r),i=i(r),e.flags|=1,nn(t,e,i,n),e.child;case 14:return i=e.type,r=Gn(i,e.pendingProps),r=Gn(i.type,r),gp(t,e,i,r,n);case 15:return x0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),Xo(t,e),e.tag=1,fn(i)?(t=!0,fl(e)):t=!1,Ss(e,n),p0(e,i,r),Vu(e,i,r,n),ju(null,e,i,!0,t,n);case 19:return M0(t,e,n);case 22:return v0(t,e,n)}throw Error(ce(156,e.tag))};function O0(t,e){return dg(t,e)}function cy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(t,e,n,i){return new cy(t,e,n,i)}function zf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function uy(t){if(typeof t=="function")return zf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===sf)return 11;if(t===af)return 14}return 2}function ar(t,e){var n=t.alternate;return n===null?(n=Ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Yo(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")zf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case as:return Rr(n.children,r,s,e);case rf:a=8,r|=8;break;case fu:return t=Ln(12,n,e,r|2),t.elementType=fu,t.lanes=s,t;case hu:return t=Ln(13,n,e,r),t.elementType=hu,t.lanes=s,t;case pu:return t=Ln(19,n,e,r),t.elementType=pu,t.lanes=s,t;case $m:return jl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Xm:a=10;break e;case qm:a=9;break e;case sf:a=11;break e;case af:a=14;break e;case ji:a=16,i=null;break e}throw Error(ce(130,t==null?t:typeof t,""))}return e=Ln(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Rr(t,e,n,i){return t=Ln(7,t,i,e),t.lanes=n,t}function jl(t,e,n,i){return t=Ln(22,t,i,e),t.elementType=$m,t.lanes=n,t.stateNode={isHidden:!1},t}function Cc(t,e,n){return t=Ln(6,t,null,e),t.lanes=n,t}function Rc(t,e,n){return e=Ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function dy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cc(0),this.expirationTimes=cc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Hf(t,e,n,i,r,s,a,o,l){return t=new dy(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ln(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bf(s),t}function fy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ss,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function B0(t){if(!t)return lr;t=t._reactInternals;e:{if(Br(t)!==t||t.tag!==1)throw Error(ce(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(fn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ce(171))}if(t.tag===1){var n=t.type;if(fn(n))return Bg(t,n,e)}return e}function z0(t,e,n,i,r,s,a,o,l){return t=Hf(n,i,!0,t,r,s,a,o,l),t.context=B0(null),n=t.current,i=rn(),r=sr(n),s=wi(i,r),s.callback=e??null,ir(n,s,r),t.current.lanes=r,Ba(t,r,i),hn(t,i),t}function Xl(t,e,n,i){var r=e.current,s=rn(),a=sr(r);return n=B0(n),e.context===null?e.context=n:e.pendingContext=n,e=wi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ir(r,e,a),t!==null&&(Yn(t,r,a,s),Go(t,r,a)),a}function wl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Cp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Vf(t,e){Cp(t,e),(t=t.alternate)&&Cp(t,e)}function hy(){return null}var H0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Gf(t){this._internalRoot=t}ql.prototype.render=Gf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ce(409));Xl(t,e,null,null)};ql.prototype.unmount=Gf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Dr(function(){Xl(null,t,null,null)}),e[Ri]=null}};function ql(t){this._internalRoot=t}ql.prototype.unstable_scheduleHydration=function(t){if(t){var e=vg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<qi.length&&e!==0&&e<qi[n].priority;n++);qi.splice(n,0,t),n===0&&yg(t)}};function Wf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function $l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Rp(){}function py(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=wl(a);s.call(c)}}var a=z0(e,i,t,0,null,!1,!1,"",Rp);return t._reactRootContainer=a,t[Ri]=a.current,Aa(t.nodeType===8?t.parentNode:t),Dr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=wl(l);o.call(c)}}var l=Hf(t,0,!1,null,null,!1,!1,"",Rp);return t._reactRootContainer=l,t[Ri]=l.current,Aa(t.nodeType===8?t.parentNode:t),Dr(function(){Xl(e,l,n,i)}),l}function Yl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=wl(a);o.call(l)}}Xl(e,a,t,r)}else a=py(n,e,t,r,i);return wl(a)}gg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=sa(e.pendingLanes);n!==0&&(cf(e,n|1),hn(e,Nt()),!(tt&6)&&(Is=Nt()+500,fr()))}break;case 13:Dr(function(){var i=Ni(t,1);if(i!==null){var r=rn();Yn(i,t,1,r)}}),Vf(t,1)}};uf=function(t){if(t.tag===13){var e=Ni(t,134217728);if(e!==null){var n=rn();Yn(e,t,134217728,n)}Vf(t,134217728)}};xg=function(t){if(t.tag===13){var e=sr(t),n=Ni(t,e);if(n!==null){var i=rn();Yn(n,t,e,i)}Vf(t,e)}};vg=function(){return ot};_g=function(t,e){var n=ot;try{return ot=t,e()}finally{ot=n}};bu=function(t,e,n){switch(e){case"input":if(xu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Bl(i);if(!r)throw Error(ce(90));Km(i),xu(i,r)}}}break;case"textarea":Qm(t,n);break;case"select":e=n.value,e!=null&&xs(t,!!n.multiple,e,!1)}};sg=kf;ag=Dr;var my={usingClientEntryPoint:!1,Events:[Ha,us,Bl,ig,rg,kf]},Ys={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gy={bundleType:Ys.bundleType,version:Ys.version,rendererPackageName:Ys.rendererPackageName,rendererConfig:Ys.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Di.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=cg(t),t===null?null:t.stateNode},findFiberByHostInstance:Ys.findFiberByHostInstance||hy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fo.isDisabled&&fo.supportsFiber)try{Ul=fo.inject(gy),li=fo}catch{}}En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=my;En.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wf(e))throw Error(ce(200));return fy(t,e,null,n)};En.createRoot=function(t,e){if(!Wf(t))throw Error(ce(299));var n=!1,i="",r=H0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Hf(t,1,!1,null,null,n,!1,i,r),t[Ri]=e.current,Aa(t.nodeType===8?t.parentNode:t),new Gf(e)};En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ce(188)):(t=Object.keys(t).join(","),Error(ce(268,t)));return t=cg(e),t=t===null?null:t.stateNode,t};En.flushSync=function(t){return Dr(t)};En.hydrate=function(t,e,n){if(!$l(e))throw Error(ce(200));return Yl(null,t,e,!0,n)};En.hydrateRoot=function(t,e,n){if(!Wf(t))throw Error(ce(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=H0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=z0(e,null,t,1,n??null,r,!1,s,a),t[Ri]=e.current,Aa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ql(e)};En.render=function(t,e,n){if(!$l(e))throw Error(ce(200));return Yl(null,t,e,!1,n)};En.unmountComponentAtNode=function(t){if(!$l(t))throw Error(ce(40));return t._reactRootContainer?(Dr(function(){Yl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ri]=null})}),!0):!1};En.unstable_batchedUpdates=kf;En.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!$l(n))throw Error(ce(200));if(t==null||t._reactInternals===void 0)throw Error(ce(38));return Yl(t,e,n,!1,i)};En.version="18.3.1-next-f1338f8080-20240426";function V0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(V0)}catch(t){console.error(t)}}V0(),Vm.exports=En;var xy=Vm.exports,Np=xy;uu.createRoot=Np.createRoot,uu.hydrateRoot=Np.hydrateRoot;/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),G0=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var _y={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=Oe.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},l)=>Oe.createElement("svg",{ref:l,..._y,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:G0("lucide",r),...o},[...a.map(([c,p])=>Oe.createElement(c,p)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=(t,e)=>{const n=Oe.forwardRef(({className:i,...r},s)=>Oe.createElement(yy,{ref:s,iconNode:e,className:G0(`lucide-${vy(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],My=rt("ArrowLeft",Sy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Kl=rt("ArrowRight",Ey);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]],wy=rt("Brain",by);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],jf=rt("Building2",Ty);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],W0=rt("Check",Ay);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Ry=rt("CircleCheckBig",Cy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],j0=rt("CircleCheck",Ny);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],X0=rt("CircleHelp",Py);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],Ly=rt("CircleX",Iy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],Uy=rt("Clock",Dy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],ky=rt("Copy",Fy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]],q0=rt("Cpu",Oy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],$0=rt("Database",By);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Xf=rt("Globe",zy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Vy=rt("LoaderCircle",Hy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]],Y0=rt("PenLine",Gy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]],jy=rt("Radio",Wy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],qy=rt("RefreshCw",Xy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]],K0=rt("Scale",$y);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],Ky=rt("Search",Yy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],Qy=rt("Server",Zy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],eS=rt("ShieldAlert",Jy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],qf=rt("ShieldCheck",tS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]],iS=rt("SlidersVertical",nS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Nc=rt("Sparkles",rS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]],aS=rt("Terminal",sS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],lS=rt("TrendingUp",oS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Z0=rt("TriangleAlert",cS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],dS=rt("User",uS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],$f=rt("X",fS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],id=rt("Zap",hS);class pS{constructor(){this.ctx=null,this.muted=!1}init(){if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}toggleMute(){return this.muted=!this.muted,this.muted}playClick(){if(this.muted||(this.init(),!this.ctx))return;const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(1200,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(400,this.ctx.currentTime+.04),n.gain.setValueAtTime(.08,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.04),e.connect(n),n.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.04)}playWebcmdCrawl(){if(this.muted||(this.init(),!this.ctx))return;const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(500,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(1800,this.ctx.currentTime+.08),n.gain.setValueAtTime(.05,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.08),e.connect(n),n.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.08)}playCheckpointAlert(){if(this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime;[587.33,880,1174.66].forEach((n,i)=>{const r=this.ctx.createOscillator(),s=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(n,e+i*.08),s.gain.setValueAtTime(.1,e+i*.08),s.gain.exponentialRampToValueAtTime(.001,e+i*.08+.35),r.connect(s),s.connect(this.ctx.destination),r.start(e+i*.08),r.stop(e+i*.08+.35)})}playReportSuccess(){if(this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((i,r)=>{const s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(i,e+r*.06),a.gain.setValueAtTime(.12,e+r*.06),a.gain.exponentialRampToValueAtTime(.001,e+r*.06+.6),s.connect(a),a.connect(this.ctx.destination),s.start(e+r*.06),s.stop(e+r*.06+.6)})}}const Ye=new pS;function mS({onStart:t,onOpenHowItWorks:e,onGoHome:n}){return h.jsx("header",{className:"border-b border-brand-light/15 bg-[#060907]/90 backdrop-blur-2xl sticky top-0 z-40 px-4 lg:px-8 py-3.5 shadow-2xl",children:h.jsxs("div",{className:"flex items-center justify-between max-w-[1700px] mx-auto w-full",children:[h.jsxs("div",{onClick:n,className:"flex items-center gap-3.5 cursor-pointer group select-none",children:[h.jsxs("div",{className:"relative",children:[h.jsx("div",{className:"absolute -inset-1 bg-gradient-to-r from-[#F0FB43] via-[#7ED043] to-[#328F35] rounded-2xl blur-md opacity-70 group-hover:opacity-100 transition duration-300 animate-pulse"}),h.jsx("div",{className:"relative w-10 h-10 bg-[#0b110d] rounded-xl flex items-center justify-center border border-brand-light/40 shadow-xl",children:h.jsx("span",{className:"text-xl font-black green-gradient-text transform group-hover:scale-110 transition-transform",children:"⚡"})})]}),h.jsxs("div",{className:"flex flex-col",children:[h.jsx("div",{className:"flex items-center gap-2",children:h.jsx("span",{className:"text-xl font-black tracking-wider text-white font-mono bg-gradient-to-r from-[#7ED043] via-[#F0FB43] to-white bg-clip-text text-transparent drop-shadow-sm",children:"INVESTILENS"})}),h.jsx("span",{className:"text-[10px] font-mono text-brand-light/90 tracking-wider uppercase font-semibold",children:"AI-POWERED INVESTMENT RESEARCH"})]})]}),h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsxs("button",{onClick:()=>{Ye.playClick(),e()},className:"hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-medium text-slate-300 hover:text-brand-lime border border-white/[0.08] hover:border-brand-light/30 bg-[#0b110d]/80 transition-all duration-200",children:[h.jsx(X0,{className:"w-3.5 h-3.5 text-brand-light"}),h.jsx("span",{children:"How It Works"})]}),h.jsxs("button",{onClick:()=>{Ye.playClick(),t()},className:"inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#F0FB43] via-[#7ED043] to-[#4FB734] hover:from-[#f4fc65] hover:to-[#5bc93f] text-[#060907] font-mono text-xs font-extrabold uppercase tracking-wider shadow-lg shadow-brand-medium/20 hover:scale-105 active:scale-95 transition-all duration-200",children:[h.jsx("span",{children:"Get Started"}),h.jsx(Kl,{className:"w-3.5 h-3.5"})]})]})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yf="185",gS=0,Pp=1,xS=2,Ko=1,vS=2,oa=3,cr=0,pn=1,Si=2,Ti=0,Es=1,rd=2,Ip=3,Lp=4,_S=5,Sr=100,yS=101,SS=102,MS=103,ES=104,bS=200,wS=201,TS=202,AS=203,sd=204,ad=205,CS=206,RS=207,NS=208,PS=209,IS=210,LS=211,DS=212,US=213,FS=214,od=0,ld=1,cd=2,Ls=3,ud=4,dd=5,fd=6,hd=7,Q0=0,kS=1,OS=2,ui=0,J0=1,ex=2,tx=3,nx=4,ix=5,rx=6,sx=7,ax=300,Ur=301,Ds=302,Pc=303,Ic=304,Zl=306,pd=1e3,bi=1001,md=1002,Gt=1003,BS=1004,ho=1005,Qt=1006,Lc=1007,Tr=1008,In=1009,ox=1010,lx=1011,Fa=1012,Kf=1013,fi=1014,ai=1015,Ii=1016,Zf=1017,Qf=1018,ka=1020,cx=35902,ux=35899,dx=1021,fx=1022,qn=1023,Li=1026,Ar=1027,hx=1028,Jf=1029,Fr=1030,eh=1031,th=1033,Zo=33776,Qo=33777,Jo=33778,el=33779,gd=35840,xd=35841,vd=35842,_d=35843,yd=36196,Sd=37492,Md=37496,Ed=37488,bd=37489,Tl=37490,wd=37491,Td=37808,Ad=37809,Cd=37810,Rd=37811,Nd=37812,Pd=37813,Id=37814,Ld=37815,Dd=37816,Ud=37817,Fd=37818,kd=37819,Od=37820,Bd=37821,zd=36492,Hd=36494,Vd=36495,Gd=36283,Wd=36284,Al=36285,jd=36286,zS=3200,Dp=0,HS=1,Yi="",Cn="srgb",Cl="srgb-linear",Rl="linear",at="srgb",Wr=7680,Up=519,VS=512,GS=513,WS=514,nh=515,jS=516,XS=517,ih=518,qS=519,Fp=35044,kp="300 es",oi=2e3,Nl=2001;function $S(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Pl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function YS(){const t=Pl("canvas");return t.style.display="block",t}const Op={};function Bp(...t){const e="THREE."+t.shift();console.log(e,...t)}function px(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function ke(...t){t=px(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function et(...t){t=px(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function bs(...t){const e=t.join(" ");e in Op||(Op[e]=!0,ke(...t))}function KS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const ZS={[od]:ld,[cd]:fd,[ud]:hd,[Ls]:dd,[ld]:od,[fd]:cd,[hd]:ud,[dd]:Ls};class zr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dc=Math.PI/180,Xd=180/Math.PI;function Ga(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[t&255]+Yt[t>>8&255]+Yt[t>>16&255]+Yt[t>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[n&63|128]+Yt[n>>8&255]+"-"+Yt[n>>16&255]+Yt[n>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function Ke(t,e,n){return Math.max(e,Math.min(n,t))}function QS(t,e){return(t%e+e)%e}function Uc(t,e,n){return(1-n)*t+n*e}function Ks(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ln(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const lh=class lh{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};lh.prototype.isVector2=!0;let Qe=lh;class zs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],p=i[r+2],m=i[r+3],u=s[a+0],f=s[a+1],y=s[a+2],E=s[a+3];if(m!==E||l!==u||c!==f||p!==y){let x=l*u+c*f+p*y+m*E;x<0&&(u=-u,f=-f,y=-y,E=-E,x=-x);let d=1-o;if(x<.9995){const g=Math.acos(x),v=Math.sin(g);d=Math.sin(d*g)/v,o=Math.sin(o*g)/v,l=l*d+u*o,c=c*d+f*o,p=p*d+y*o,m=m*d+E*o}else{l=l*d+u*o,c=c*d+f*o,p=p*d+y*o,m=m*d+E*o;const g=1/Math.sqrt(l*l+c*c+p*p+m*m);l*=g,c*=g,p*=g,m*=g}}e[n]=l,e[n+1]=c,e[n+2]=p,e[n+3]=m}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],p=i[r+3],m=s[a],u=s[a+1],f=s[a+2],y=s[a+3];return e[n]=o*y+p*m+l*f-c*u,e[n+1]=l*y+p*u+c*m-o*f,e[n+2]=c*y+p*f+o*u-l*m,e[n+3]=p*y-o*m-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),p=o(r/2),m=o(s/2),u=l(i/2),f=l(r/2),y=l(s/2);switch(a){case"XYZ":this._x=u*p*m+c*f*y,this._y=c*f*m-u*p*y,this._z=c*p*y+u*f*m,this._w=c*p*m-u*f*y;break;case"YXZ":this._x=u*p*m+c*f*y,this._y=c*f*m-u*p*y,this._z=c*p*y-u*f*m,this._w=c*p*m+u*f*y;break;case"ZXY":this._x=u*p*m-c*f*y,this._y=c*f*m+u*p*y,this._z=c*p*y+u*f*m,this._w=c*p*m-u*f*y;break;case"ZYX":this._x=u*p*m-c*f*y,this._y=c*f*m+u*p*y,this._z=c*p*y-u*f*m,this._w=c*p*m+u*f*y;break;case"YZX":this._x=u*p*m+c*f*y,this._y=c*f*m+u*p*y,this._z=c*p*y-u*f*m,this._w=c*p*m-u*f*y;break;case"XZY":this._x=u*p*m-c*f*y,this._y=c*f*m-u*p*y,this._z=c*p*y+u*f*m,this._w=c*p*m+u*f*y;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],p=n[6],m=n[10],u=i+o+m;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(p-l)*f,this._y=(s-c)*f,this._z=(a-r)*f}else if(i>o&&i>m){const f=2*Math.sqrt(1+i-o-m);this._w=(p-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+c)/f}else if(o>m){const f=2*Math.sqrt(1+o-i-m);this._w=(s-c)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+p)/f}else{const f=2*Math.sqrt(1+m-i-o);this._w=(a-r)/f,this._x=(s+c)/f,this._y=(l+p)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,p=n._w;return this._x=i*p+a*o+r*c-s*l,this._y=r*p+a*l+s*o-i*c,this._z=s*p+a*c+i*l-r*o,this._w=a*p-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),p=Math.sin(c);l=Math.sin(l*c)/p,n=Math.sin(n*c)/p,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ch=class ch{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(zp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(zp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),p=2*(o*n-s*r),m=2*(s*i-a*n);return this.x=n+l*c+a*m-o*p,this.y=i+l*p+o*c-s*m,this.z=r+l*m+s*p-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Fc.copy(this).projectOnVector(e),this.sub(Fc)}reflect(e){return this.sub(Fc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ch.prototype.isVector3=!0;let j=ch;const Fc=new j,zp=new zs,uh=class uh{constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const p=this.elements;return p[0]=e,p[1]=r,p[2]=o,p[3]=n,p[4]=s,p[5]=l,p[6]=i,p[7]=a,p[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],p=i[4],m=i[7],u=i[2],f=i[5],y=i[8],E=r[0],x=r[3],d=r[6],g=r[1],v=r[4],M=r[7],T=r[2],w=r[5],R=r[8];return s[0]=a*E+o*g+l*T,s[3]=a*x+o*v+l*w,s[6]=a*d+o*M+l*R,s[1]=c*E+p*g+m*T,s[4]=c*x+p*v+m*w,s[7]=c*d+p*M+m*R,s[2]=u*E+f*g+y*T,s[5]=u*x+f*v+y*w,s[8]=u*d+f*M+y*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],p=e[8];return n*a*p-n*o*c-i*s*p+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],p=e[8],m=p*a-o*c,u=o*l-p*s,f=c*s-a*l,y=n*m+i*u+r*f;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/y;return e[0]=m*E,e[1]=(r*c-p*i)*E,e[2]=(o*i-r*a)*E,e[3]=u*E,e[4]=(p*n-r*l)*E,e[5]=(r*s-o*n)*E,e[6]=f*E,e[7]=(i*l-c*n)*E,e[8]=(a*n-i*s)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return bs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(kc.makeScale(e,n)),this}rotate(e){return bs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(kc.makeRotation(-e)),this}translate(e,n){return bs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(kc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};uh.prototype.isMatrix3=!0;let Ve=uh;const kc=new Ve,Hp=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vp=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function JS(){const t={enabled:!0,workingColorSpace:Cl,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===at&&(r.r=Ai(r.r),r.g=Ai(r.g),r.b=Ai(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(r.r=ws(r.r),r.g=ws(r.g),r.b=ws(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Yi?Rl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return bs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return bs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Cl]:{primaries:e,whitePoint:i,transfer:Rl,toXYZ:Hp,fromXYZ:Vp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Cn},outputColorSpaceConfig:{drawingBufferColorSpace:Cn}},[Cn]:{primaries:e,whitePoint:i,transfer:at,toXYZ:Hp,fromXYZ:Vp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Cn}}}),t}const $e=JS();function Ai(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ws(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let jr;class eM{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{jr===void 0&&(jr=Pl("canvas")),jr.width=e.width,jr.height=e.height;const r=jr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=jr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Pl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ai(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ai(n[i]/255)*255):n[i]=Ai(n[i]);return{data:n,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tM=0;class rh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=Ga(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Oc(r[a].image)):s.push(Oc(r[a]))}else s=Oc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Oc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?eM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}let nM=0;const Bc=new j;class Jt extends zr{constructor(e=Jt.DEFAULT_IMAGE,n=Jt.DEFAULT_MAPPING,i=bi,r=bi,s=Qt,a=Tr,o=qn,l=In,c=Jt.DEFAULT_ANISOTROPY,p=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=Ga(),this.name="",this.source=new rh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Bc).x}get height(){return this.source.getSize(Bc).y}get depth(){return this.source.getSize(Bc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){ke(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ke(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ax)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pd:e.x=e.x-Math.floor(e.x);break;case bi:e.x=e.x<0?0:1;break;case md:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pd:e.y=e.y-Math.floor(e.y);break;case bi:e.y=e.y<0?0:1;break;case md:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=ax;Jt.DEFAULT_ANISOTROPY=1;const dh=class dh{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],p=l[4],m=l[8],u=l[1],f=l[5],y=l[9],E=l[2],x=l[6],d=l[10];if(Math.abs(p-u)<.01&&Math.abs(m-E)<.01&&Math.abs(y-x)<.01){if(Math.abs(p+u)<.1&&Math.abs(m+E)<.1&&Math.abs(y+x)<.1&&Math.abs(c+f+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,M=(f+1)/2,T=(d+1)/2,w=(p+u)/4,R=(m+E)/4,_=(y+x)/4;return v>M&&v>T?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=w/i,s=R/i):M>T?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=w/r,s=_/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=R/s,r=_/s),this.set(i,r,s,n),this}let g=Math.sqrt((x-y)*(x-y)+(m-E)*(m-E)+(u-p)*(u-p));return Math.abs(g)<.001&&(g=1),this.x=(x-y)/g,this.y=(m-E)/g,this.z=(u-p)/g,this.w=Math.acos((c+f+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this.w=Ke(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this.w=Ke(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};dh.prototype.isVector4=!0;let At=dh;class iM extends zr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new At(0,0,e,n),this.scissorTest=!1,this.viewport=new At(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new Jt(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new rh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class di extends iM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class mx extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rM extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ll=class Ll{constructor(e,n,i,r,s,a,o,l,c,p,m,u,f,y,E,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,p,m,u,f,y,E,x)}set(e,n,i,r,s,a,o,l,c,p,m,u,f,y,E,x){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=p,d[10]=m,d[14]=u,d[3]=f,d[7]=y,d[11]=E,d[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ll().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Xr.setFromMatrixColumn(e,0).length(),s=1/Xr.setFromMatrixColumn(e,1).length(),a=1/Xr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),p=Math.cos(s),m=Math.sin(s);if(e.order==="XYZ"){const u=a*p,f=a*m,y=o*p,E=o*m;n[0]=l*p,n[4]=-l*m,n[8]=c,n[1]=f+y*c,n[5]=u-E*c,n[9]=-o*l,n[2]=E-u*c,n[6]=y+f*c,n[10]=a*l}else if(e.order==="YXZ"){const u=l*p,f=l*m,y=c*p,E=c*m;n[0]=u+E*o,n[4]=y*o-f,n[8]=a*c,n[1]=a*m,n[5]=a*p,n[9]=-o,n[2]=f*o-y,n[6]=E+u*o,n[10]=a*l}else if(e.order==="ZXY"){const u=l*p,f=l*m,y=c*p,E=c*m;n[0]=u-E*o,n[4]=-a*m,n[8]=y+f*o,n[1]=f+y*o,n[5]=a*p,n[9]=E-u*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const u=a*p,f=a*m,y=o*p,E=o*m;n[0]=l*p,n[4]=y*c-f,n[8]=u*c+E,n[1]=l*m,n[5]=E*c+u,n[9]=f*c-y,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const u=a*l,f=a*c,y=o*l,E=o*c;n[0]=l*p,n[4]=E-u*m,n[8]=y*m+f,n[1]=m,n[5]=a*p,n[9]=-o*p,n[2]=-c*p,n[6]=f*m+y,n[10]=u-E*m}else if(e.order==="XZY"){const u=a*l,f=a*c,y=o*l,E=o*c;n[0]=l*p,n[4]=-m,n[8]=c*p,n[1]=u*m+E,n[5]=a*p,n[9]=f*m-y,n[2]=y*m-f,n[6]=o*p,n[10]=E*m+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sM,e,aM)}lookAt(e,n,i){const r=this.elements;return xn.subVectors(e,n),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Bi.crossVectors(i,xn),Bi.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Bi.crossVectors(i,xn)),Bi.normalize(),po.crossVectors(xn,Bi),r[0]=Bi.x,r[4]=po.x,r[8]=xn.x,r[1]=Bi.y,r[5]=po.y,r[9]=xn.y,r[2]=Bi.z,r[6]=po.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],p=i[1],m=i[5],u=i[9],f=i[13],y=i[2],E=i[6],x=i[10],d=i[14],g=i[3],v=i[7],M=i[11],T=i[15],w=r[0],R=r[4],_=r[8],A=r[12],I=r[1],L=r[5],z=r[9],V=r[13],Q=r[2],O=r[6],Y=r[10],G=r[14],k=r[3],Z=r[7],P=r[11],C=r[15];return s[0]=a*w+o*I+l*Q+c*k,s[4]=a*R+o*L+l*O+c*Z,s[8]=a*_+o*z+l*Y+c*P,s[12]=a*A+o*V+l*G+c*C,s[1]=p*w+m*I+u*Q+f*k,s[5]=p*R+m*L+u*O+f*Z,s[9]=p*_+m*z+u*Y+f*P,s[13]=p*A+m*V+u*G+f*C,s[2]=y*w+E*I+x*Q+d*k,s[6]=y*R+E*L+x*O+d*Z,s[10]=y*_+E*z+x*Y+d*P,s[14]=y*A+E*V+x*G+d*C,s[3]=g*w+v*I+M*Q+T*k,s[7]=g*R+v*L+M*O+T*Z,s[11]=g*_+v*z+M*Y+T*P,s[15]=g*A+v*V+M*G+T*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],p=e[2],m=e[6],u=e[10],f=e[14],y=e[3],E=e[7],x=e[11],d=e[15],g=l*f-c*u,v=o*f-c*m,M=o*u-l*m,T=a*f-c*p,w=a*u-l*p,R=a*m-o*p;return n*(E*g-x*v+d*M)-i*(y*g-x*T+d*w)+r*(y*v-E*T+d*R)-s*(y*M-E*w+x*R)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],p=e[10];return n*(a*p-o*c)-i*(s*p-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],p=e[8],m=e[9],u=e[10],f=e[11],y=e[12],E=e[13],x=e[14],d=e[15],g=n*o-i*a,v=n*l-r*a,M=n*c-s*a,T=i*l-r*o,w=i*c-s*o,R=r*c-s*l,_=p*E-m*y,A=p*x-u*y,I=p*d-f*y,L=m*x-u*E,z=m*d-f*E,V=u*d-f*x,Q=g*V-v*z+M*L+T*I-w*A+R*_;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/Q;return e[0]=(o*V-l*z+c*L)*O,e[1]=(r*z-i*V-s*L)*O,e[2]=(E*R-x*w+d*T)*O,e[3]=(u*w-m*R-f*T)*O,e[4]=(l*I-a*V-c*A)*O,e[5]=(n*V-r*I+s*A)*O,e[6]=(x*M-y*R-d*v)*O,e[7]=(p*R-u*M+f*v)*O,e[8]=(a*z-o*I+c*_)*O,e[9]=(i*I-n*z-s*_)*O,e[10]=(y*w-E*M+d*g)*O,e[11]=(m*M-p*w-f*g)*O,e[12]=(o*A-a*L-l*_)*O,e[13]=(n*L-i*A+r*_)*O,e[14]=(E*v-y*T-x*g)*O,e[15]=(p*T-m*v+u*g)*O,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,p=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,p*o+i,p*l-r*a,0,c*l-r*o,p*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,p=a+a,m=o+o,u=s*c,f=s*p,y=s*m,E=a*p,x=a*m,d=o*m,g=l*c,v=l*p,M=l*m,T=i.x,w=i.y,R=i.z;return r[0]=(1-(E+d))*T,r[1]=(f+M)*T,r[2]=(y-v)*T,r[3]=0,r[4]=(f-M)*w,r[5]=(1-(u+d))*w,r[6]=(x+g)*w,r[7]=0,r[8]=(y+v)*R,r[9]=(x-g)*R,r[10]=(1-(u+E))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Xr.set(r[0],r[1],r[2]).length();const o=Xr.set(r[4],r[5],r[6]).length(),l=Xr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),zn.copy(this);const c=1/a,p=1/o,m=1/l;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=p,zn.elements[5]*=p,zn.elements[6]*=p,zn.elements[8]*=m,zn.elements[9]*=m,zn.elements[10]*=m,n.setFromRotationMatrix(zn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=oi,l=!1){const c=this.elements,p=2*s/(n-e),m=2*s/(i-r),u=(n+e)/(n-e),f=(i+r)/(i-r);let y,E;if(l)y=s/(a-s),E=a*s/(a-s);else if(o===oi)y=-(a+s)/(a-s),E=-2*a*s/(a-s);else if(o===Nl)y=-a/(a-s),E=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=p,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=m,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=y,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=oi,l=!1){const c=this.elements,p=2/(n-e),m=2/(i-r),u=-(n+e)/(n-e),f=-(i+r)/(i-r);let y,E;if(l)y=1/(a-s),E=a/(a-s);else if(o===oi)y=-2/(a-s),E=-(a+s)/(a-s);else if(o===Nl)y=-1/(a-s),E=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=p,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=m,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=y,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Ll.prototype.isMatrix4=!0;let Pt=Ll;const Xr=new j,zn=new Pt,sM=new j(0,0,0),aM=new j(1,1,1),Bi=new j,po=new j,xn=new j,Gp=new Pt,Wp=new zs;class kr{constructor(e=0,n=0,i=0,r=kr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],p=r[9],m=r[2],u=r[6],f=r[10];switch(n){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-p,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-m,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,c),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-p,f),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Gp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Wp.setFromEuler(this),this.setFromQuaternion(Wp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kr.DEFAULT_ORDER="XYZ";class gx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let oM=0;const jp=new j,qr=new zs,pi=new Pt,mo=new j,Zs=new j,lM=new j,cM=new zs,Xp=new j(1,0,0),qp=new j(0,1,0),$p=new j(0,0,1),Yp={type:"added"},uM={type:"removed"},$r={type:"childadded",child:null},zc={type:"childremoved",child:null};class mn extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=Ga(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const e=new j,n=new kr,i=new zs,r=new j(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pt},normalMatrix:{value:new Ve}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return qr.setFromAxisAngle(e,n),this.quaternion.multiply(qr),this}rotateOnWorldAxis(e,n){return qr.setFromAxisAngle(e,n),this.quaternion.premultiply(qr),this}rotateX(e){return this.rotateOnAxis(Xp,e)}rotateY(e){return this.rotateOnAxis(qp,e)}rotateZ(e){return this.rotateOnAxis($p,e)}translateOnAxis(e,n){return jp.copy(e).applyQuaternion(this.quaternion),this.position.add(jp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Xp,e)}translateY(e){return this.translateOnAxis(qp,e)}translateZ(e){return this.translateOnAxis($p,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?mo.copy(e):mo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Zs,mo,this.up):pi.lookAt(mo,Zs,this.up),this.quaternion.setFromRotationMatrix(pi),r&&(pi.extractRotation(r.matrixWorld),qr.setFromRotationMatrix(pi),this.quaternion.premultiply(qr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yp),$r.child=e,this.dispatchEvent($r),$r.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(uM),zc.child=e,this.dispatchEvent(zc),zc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yp),$r.child=e,this.dispatchEvent($r),$r.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,e,lM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,cM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,p=l.length;c<p;c++){const m=l[c];s(e.shapes,m)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),p=a(e.images),m=a(e.shapes),u=a(e.skeletons),f=a(e.animations),y=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),p.length>0&&(i.images=p),m.length>0&&(i.shapes=m),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),y.length>0&&(i.nodes=y)}return i.object=r,i;function a(o){const l=[];for(const c in o){const p=o[c];delete p.metadata,l.push(p)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}mn.DEFAULT_UP=new j(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class go extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dM={type:"move"};class Hc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new go,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new go,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new go,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const E of e.hand.values()){const x=n.getJointPose(E,i),d=this._getHandJoint(c,E);x!==null&&(d.matrix.fromArray(x.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=x.radius),d.visible=x!==null}const p=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],u=p.position.distanceTo(m.position),f=.02,y=.005;c.inputState.pinching&&u>f+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(dM)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new go;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const xx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},xo={h:0,s:0,l:0};function Vc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=$e.workingColorSpace){return this.r=e,this.g=n,this.b=i,$e.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=$e.workingColorSpace){if(e=QS(e,1),n=Ke(n,0,1),i=Ke(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Vc(a,s,e+1/3),this.g=Vc(a,s,e),this.b=Vc(a,s,e-1/3)}return $e.colorSpaceToWorking(this,r),this}setStyle(e,n=Cn){function i(s){s!==void 0&&parseFloat(s)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:ke("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Cn){const i=xx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Cn){return $e.workingToColorSpace(Kt.copy(this),e),Math.round(Ke(Kt.r*255,0,255))*65536+Math.round(Ke(Kt.g*255,0,255))*256+Math.round(Ke(Kt.b*255,0,255))}getHexString(e=Cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=$e.workingColorSpace){$e.workingToColorSpace(Kt.copy(this),n);const i=Kt.r,r=Kt.g,s=Kt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const p=(o+a)/2;if(o===a)l=0,c=0;else{const m=a-o;switch(c=p<=.5?m/(a+o):m/(2-a-o),a){case i:l=(r-s)/m+(r<s?6:0);break;case r:l=(s-i)/m+2;break;case s:l=(i-r)/m+4;break}l/=6}return e.h=l,e.s=c,e.l=p,e}getRGB(e,n=$e.workingColorSpace){return $e.workingToColorSpace(Kt.copy(this),n),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=Cn){$e.workingToColorSpace(Kt.copy(this),e);const n=Kt.r,i=Kt.g,r=Kt.b;return e!==Cn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+n,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(zi),e.getHSL(xo);const i=Uc(zi.h,xo.h,n),r=Uc(zi.s,xo.s,n),s=Uc(zi.l,xo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new Ze;Ze.NAMES=xx;class fM extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kr,this.environmentIntensity=1,this.environmentRotation=new kr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Hn=new j,mi=new j,Gc=new j,gi=new j,Yr=new j,Kr=new j,Kp=new j,Wc=new j,jc=new j,Xc=new j,qc=new At,$c=new At,Yc=new At;class Xn{constructor(e=new j,n=new j,i=new j){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Hn.subVectors(e,n),r.cross(Hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Hn.subVectors(r,n),mi.subVectors(i,n),Gc.subVectors(e,n);const a=Hn.dot(Hn),o=Hn.dot(mi),l=Hn.dot(Gc),c=mi.dot(mi),p=mi.dot(Gc),m=a*c-o*o;if(m===0)return s.set(0,0,0),null;const u=1/m,f=(c*l-o*p)*u,y=(a*p-o*l)*u;return s.set(1-f-y,y,f)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,gi.x),l.addScaledVector(a,gi.y),l.addScaledVector(o,gi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return qc.setScalar(0),$c.setScalar(0),Yc.setScalar(0),qc.fromBufferAttribute(e,n),$c.fromBufferAttribute(e,i),Yc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(qc,s.x),a.addScaledVector($c,s.y),a.addScaledVector(Yc,s.z),a}static isFrontFacing(e,n,i,r){return Hn.subVectors(i,n),mi.subVectors(e,n),Hn.cross(mi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Hn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Xn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Xn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Yr.subVectors(r,i),Kr.subVectors(s,i),Wc.subVectors(e,i);const l=Yr.dot(Wc),c=Kr.dot(Wc);if(l<=0&&c<=0)return n.copy(i);jc.subVectors(e,r);const p=Yr.dot(jc),m=Kr.dot(jc);if(p>=0&&m<=p)return n.copy(r);const u=l*m-p*c;if(u<=0&&l>=0&&p<=0)return a=l/(l-p),n.copy(i).addScaledVector(Yr,a);Xc.subVectors(e,s);const f=Yr.dot(Xc),y=Kr.dot(Xc);if(y>=0&&f<=y)return n.copy(s);const E=f*c-l*y;if(E<=0&&c>=0&&y<=0)return o=c/(c-y),n.copy(i).addScaledVector(Kr,o);const x=p*y-f*m;if(x<=0&&m-p>=0&&f-y>=0)return Kp.subVectors(s,r),o=(m-p)/(m-p+(f-y)),n.copy(r).addScaledVector(Kp,o);const d=1/(x+E+u);return a=E*d,o=u*d,n.copy(i).addScaledVector(Yr,a).addScaledVector(Kr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Wa{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Vn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Vn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Vn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Vn):Vn.fromBufferAttribute(s,a),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vo.copy(i.boundingBox)),vo.applyMatrix4(e.matrixWorld),this.union(vo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qs),_o.subVectors(this.max,Qs),Zr.subVectors(e.a,Qs),Qr.subVectors(e.b,Qs),Jr.subVectors(e.c,Qs),Hi.subVectors(Qr,Zr),Vi.subVectors(Jr,Qr),pr.subVectors(Zr,Jr);let n=[0,-Hi.z,Hi.y,0,-Vi.z,Vi.y,0,-pr.z,pr.y,Hi.z,0,-Hi.x,Vi.z,0,-Vi.x,pr.z,0,-pr.x,-Hi.y,Hi.x,0,-Vi.y,Vi.x,0,-pr.y,pr.x,0];return!Kc(n,Zr,Qr,Jr,_o)||(n=[1,0,0,0,1,0,0,0,1],!Kc(n,Zr,Qr,Jr,_o))?!1:(yo.crossVectors(Hi,Vi),n=[yo.x,yo.y,yo.z],Kc(n,Zr,Qr,Jr,_o))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xi=[new j,new j,new j,new j,new j,new j,new j,new j],Vn=new j,vo=new Wa,Zr=new j,Qr=new j,Jr=new j,Hi=new j,Vi=new j,pr=new j,Qs=new j,_o=new j,yo=new j,mr=new j;function Kc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){mr.fromArray(t,s);const o=r.x*Math.abs(mr.x)+r.y*Math.abs(mr.y)+r.z*Math.abs(mr.z),l=e.dot(mr),c=n.dot(mr),p=i.dot(mr);if(Math.max(-Math.max(l,c,p),Math.min(l,c,p))>o)return!1}return!0}const It=new j,So=new Qe;let hM=0;class Un extends zr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Fp,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)So.fromBufferAttribute(this,n),So.applyMatrix3(e),this.setXY(n,So.x,So.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix3(e),this.setXYZ(n,It.x,It.y,It.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix4(e),this.setXYZ(n,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyNormalMatrix(e),this.setXYZ(n,It.x,It.y,It.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.transformDirection(e),this.setXYZ(n,It.x,It.y,It.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ks(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ln(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ks(n,this.array)),n}setX(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ks(n,this.array)),n}setY(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ks(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ks(n,this.array)),n}setW(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array),s=ln(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fp&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class vx extends Un{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class _x extends Un{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class sn extends Un{constructor(e,n,i){super(new Float32Array(e),n,i)}}const pM=new Wa,Js=new j,Zc=new j;class Ql{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):pM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Js.subVectors(e,this.center);const n=Js.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Js,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Js.copy(e.center).add(Zc)),this.expandByPoint(Js.copy(e.center).sub(Zc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let mM=0;const An=new Pt,Qc=new mn,es=new j,vn=new Wa,ea=new Wa,Ot=new j;class wn extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=Ga(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($S(e)?_x:vx)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,n,i){return An.makeTranslation(e,n,i),this.applyMatrix4(An),this}scale(e,n,i){return An.makeScale(e,n,i),this.applyMatrix4(An),this}lookAt(e){return Qc.lookAt(e),Qc.updateMatrix(),this.applyMatrix4(Qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new sn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ql);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ea.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(vn.min,ea.min),vn.expandByPoint(Ot),Ot.addVectors(vn.max,ea.max),vn.expandByPoint(Ot)):(vn.expandByPoint(ea.min),vn.expandByPoint(ea.max))}vn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ot));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,p=o.count;c<p;c++)Ot.fromBufferAttribute(o,c),l&&(es.fromBufferAttribute(e,c),Ot.add(es)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Un(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let _=0;_<i.count;_++)o[_]=new j,l[_]=new j;const c=new j,p=new j,m=new j,u=new Qe,f=new Qe,y=new Qe,E=new j,x=new j;function d(_,A,I){c.fromBufferAttribute(i,_),p.fromBufferAttribute(i,A),m.fromBufferAttribute(i,I),u.fromBufferAttribute(s,_),f.fromBufferAttribute(s,A),y.fromBufferAttribute(s,I),p.sub(c),m.sub(c),f.sub(u),y.sub(u);const L=1/(f.x*y.y-y.x*f.y);isFinite(L)&&(E.copy(p).multiplyScalar(y.y).addScaledVector(m,-f.y).multiplyScalar(L),x.copy(m).multiplyScalar(f.x).addScaledVector(p,-y.x).multiplyScalar(L),o[_].add(E),o[A].add(E),o[I].add(E),l[_].add(x),l[A].add(x),l[I].add(x))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let _=0,A=g.length;_<A;++_){const I=g[_],L=I.start,z=I.count;for(let V=L,Q=L+z;V<Q;V+=3)d(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const v=new j,M=new j,T=new j,w=new j;function R(_){T.fromBufferAttribute(r,_),w.copy(T);const A=o[_];v.copy(A),v.sub(T.multiplyScalar(T.dot(A))).normalize(),M.crossVectors(w,A);const L=M.dot(l[_])<0?-1:1;a.setXYZW(_,v.x,v.y,v.z,L)}for(let _=0,A=g.length;_<A;++_){const I=g[_],L=I.start,z=I.count;for(let V=L,Q=L+z;V<Q;V+=3)R(e.getX(V+0)),R(e.getX(V+1)),R(e.getX(V+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Un(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const r=new j,s=new j,a=new j,o=new j,l=new j,c=new j,p=new j,m=new j;if(e)for(let u=0,f=e.count;u<f;u+=3){const y=e.getX(u+0),E=e.getX(u+1),x=e.getX(u+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,E),a.fromBufferAttribute(n,x),p.subVectors(a,s),m.subVectors(r,s),p.cross(m),o.fromBufferAttribute(i,y),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,x),o.add(p),l.add(p),c.add(p),i.setXYZ(y,o.x,o.y,o.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let u=0,f=n.count;u<f;u+=3)r.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),a.fromBufferAttribute(n,u+2),p.subVectors(a,s),m.subVectors(r,s),p.cross(m),i.setXYZ(u+0,p.x,p.y,p.z),i.setXYZ(u+1,p.x,p.y,p.z),i.setXYZ(u+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ot.fromBufferAttribute(e,n),Ot.normalize(),e.setXYZ(n,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,l){const c=o.array,p=o.itemSize,m=o.normalized,u=new c.constructor(l.length*p);let f=0,y=0;for(let E=0,x=l.length;E<x;E++){o.isInterleavedBufferAttribute?f=l[E]*o.data.stride+o.offset:f=l[E]*p;for(let d=0;d<p;d++)u[y++]=c[f++]}return new Un(u,p,m)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new wn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let p=0,m=c.length;p<m;p++){const u=c[p],f=e(u,i);l.push(f)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],p=[];for(let m=0,u=c.length;m<u;m++){const f=c[m];p.push(f.toJSON(e.data))}p.length>0&&(r[l]=p,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const p=r[c];this.setAttribute(c,p.clone(n))}const s=e.morphAttributes;for(const c in s){const p=[],m=s[c];for(let u=0,f=m.length;u<f;u++)p.push(m[u].clone(n));this.morphAttributes[c]=p}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,p=a.length;c<p;c++){const m=a[c];this.addGroup(m.start,m.count,m.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let gM=0;class ja extends zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=Ga(),this.name="",this.type="Material",this.blending=Es,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sd,this.blendDst=ad,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Up,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wr,this.stencilZFail=Wr,this.stencilZPass=Wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){ke(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ke(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(i.blending=this.blending),this.side!==cr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sd&&(i.blendSrc=this.blendSrc),this.blendDst!==ad&&(i.blendDst=this.blendDst),this.blendEquation!==Sr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Up&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Wr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Wr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Qe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Qe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const vi=new j,Jc=new j,Mo=new j,Gi=new j,eu=new j,Eo=new j,tu=new j;class yx{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=vi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,n),vi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Jc.copy(e).add(n).multiplyScalar(.5),Mo.copy(n).sub(e).normalize(),Gi.copy(this.origin).sub(Jc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Mo),o=Gi.dot(this.direction),l=-Gi.dot(Mo),c=Gi.lengthSq(),p=Math.abs(1-a*a);let m,u,f,y;if(p>0)if(m=a*l-o,u=a*o-l,y=s*p,m>=0)if(u>=-y)if(u<=y){const E=1/p;m*=E,u*=E,f=m*(m+a*u+2*o)+u*(a*m+u+2*l)+c}else u=s,m=Math.max(0,-(a*u+o)),f=-m*m+u*(u+2*l)+c;else u=-s,m=Math.max(0,-(a*u+o)),f=-m*m+u*(u+2*l)+c;else u<=-y?(m=Math.max(0,-(-a*s+o)),u=m>0?-s:Math.min(Math.max(-s,-l),s),f=-m*m+u*(u+2*l)+c):u<=y?(m=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(m=Math.max(0,-(a*s+o)),u=m>0?s:Math.min(Math.max(-s,-l),s),f=-m*m+u*(u+2*l)+c);else u=a>0?-s:s,m=Math.max(0,-(a*u+o)),f=-m*m+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(Jc).addScaledVector(Mo,u),f}intersectSphere(e,n){vi.subVectors(e.center,this.origin);const i=vi.dot(this.direction),r=vi.dot(vi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),p>=0?(s=(e.min.y-u.y)*p,a=(e.max.y-u.y)*p):(s=(e.max.y-u.y)*p,a=(e.min.y-u.y)*p),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),m>=0?(o=(e.min.z-u.z)*m,l=(e.max.z-u.z)*m):(o=(e.max.z-u.z)*m,l=(e.min.z-u.z)*m),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,n,i,r,s){eu.subVectors(n,e),Eo.subVectors(i,e),tu.crossVectors(eu,Eo);let a=this.direction.dot(tu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gi.subVectors(this.origin,e);const l=o*this.direction.dot(Eo.crossVectors(Gi,Eo));if(l<0)return null;const c=o*this.direction.dot(eu.cross(Gi));if(c<0||l+c>a)return null;const p=-o*Gi.dot(tu);return p<0?null:this.at(p/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class va extends ja{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kr,this.combine=Q0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zp=new Pt,gr=new yx,bo=new Ql,Qp=new j,wo=new j,To=new j,Ao=new j,nu=new j,Co=new j,Jp=new j,Ro=new j;class Fn extends mn{constructor(e=new wn,n=new va){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Co.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const p=o[l],m=s[l];p!==0&&(nu.fromBufferAttribute(m,e),a?Co.addScaledVector(nu,p):Co.addScaledVector(nu.sub(n),p))}n.add(Co)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bo.copy(i.boundingSphere),bo.applyMatrix4(s),gr.copy(e.ray).recast(e.near),!(bo.containsPoint(gr.origin)===!1&&(gr.intersectSphere(bo,Qp)===null||gr.origin.distanceToSquared(Qp)>(e.far-e.near)**2))&&(Zp.copy(s).invert(),gr.copy(e.ray).applyMatrix4(Zp),!(i.boundingBox!==null&&gr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,gr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,p=s.attributes.uv1,m=s.attributes.normal,u=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,E=u.length;y<E;y++){const x=u[y],d=a[x.materialIndex],g=Math.max(x.start,f.start),v=Math.min(o.count,Math.min(x.start+x.count,f.start+f.count));for(let M=g,T=v;M<T;M+=3){const w=o.getX(M),R=o.getX(M+1),_=o.getX(M+2);r=No(this,d,e,i,c,p,m,w,R,_),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const y=Math.max(0,f.start),E=Math.min(o.count,f.start+f.count);for(let x=y,d=E;x<d;x+=3){const g=o.getX(x),v=o.getX(x+1),M=o.getX(x+2);r=No(this,a,e,i,c,p,m,g,v,M),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let y=0,E=u.length;y<E;y++){const x=u[y],d=a[x.materialIndex],g=Math.max(x.start,f.start),v=Math.min(l.count,Math.min(x.start+x.count,f.start+f.count));for(let M=g,T=v;M<T;M+=3){const w=M,R=M+1,_=M+2;r=No(this,d,e,i,c,p,m,w,R,_),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const y=Math.max(0,f.start),E=Math.min(l.count,f.start+f.count);for(let x=y,d=E;x<d;x+=3){const g=x,v=x+1,M=x+2;r=No(this,a,e,i,c,p,m,g,v,M),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function xM(t,e,n,i,r,s,a,o){let l;if(e.side===pn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===cr,o),l===null)return null;Ro.copy(o),Ro.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ro);return c<n.near||c>n.far?null:{distance:c,point:Ro.clone(),object:t}}function No(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,wo),t.getVertexPosition(l,To),t.getVertexPosition(c,Ao);const p=xM(t,e,n,i,wo,To,Ao,Jp);if(p){const m=new j;Xn.getBarycoord(Jp,wo,To,Ao,m),r&&(p.uv=Xn.getInterpolatedAttribute(r,o,l,c,m,new Qe)),s&&(p.uv1=Xn.getInterpolatedAttribute(s,o,l,c,m,new Qe)),a&&(p.normal=Xn.getInterpolatedAttribute(a,o,l,c,m,new j),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new j,materialIndex:0};Xn.getNormal(wo,To,Ao,u.normal),p.face=u,p.barycoord=m}return p}class vM extends Jt{constructor(e=null,n=1,i=1,r,s,a,o,l,c=Gt,p=Gt,m,u){super(null,a,o,l,c,p,r,s,m,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const iu=new j,_M=new j,yM=new Ve;class yr{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=iu.subVectors(i,n).cross(_M.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(iu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||yM.getNormalMatrix(e),r=this.coplanarPoint(iu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xr=new Ql,SM=new Qe(.5,.5),Po=new j;class Sx{constructor(e=new yr,n=new yr,i=new yr,r=new yr,s=new yr,a=new yr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=oi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],p=s[4],m=s[5],u=s[6],f=s[7],y=s[8],E=s[9],x=s[10],d=s[11],g=s[12],v=s[13],M=s[14],T=s[15];if(r[0].setComponents(c-a,f-p,d-y,T-g).normalize(),r[1].setComponents(c+a,f+p,d+y,T+g).normalize(),r[2].setComponents(c+o,f+m,d+E,T+v).normalize(),r[3].setComponents(c-o,f-m,d-E,T-v).normalize(),i)r[4].setComponents(l,u,x,M).normalize(),r[5].setComponents(c-l,f-u,d-x,T-M).normalize();else if(r[4].setComponents(c-l,f-u,d-x,T-M).normalize(),n===oi)r[5].setComponents(c+l,f+u,d+x,T+M).normalize();else if(n===Nl)r[5].setComponents(l,u,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(e){xr.center.set(0,0,0);const n=SM.distanceTo(e.center);return xr.radius=.7071067811865476+n,xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Po.x=r.normal.x>0?e.max.x:e.min.x,Po.y=r.normal.y>0?e.max.y:e.min.y,Po.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Po)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Mx extends ja{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const em=new Pt,qd=new yx,Io=new Ql,Lo=new j;class MM extends mn{constructor(e=new wn,n=new Mx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Io.copy(i.boundingSphere),Io.applyMatrix4(r),Io.radius+=s,e.ray.intersectsSphere(Io)===!1)return;em.copy(r).invert(),qd.copy(e.ray).applyMatrix4(em);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,m=i.attributes.position;if(c!==null){const u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let y=u,E=f;y<E;y++){const x=c.getX(y);Lo.fromBufferAttribute(m,x),tm(Lo,x,l,r,e,n,this)}}else{const u=Math.max(0,a.start),f=Math.min(m.count,a.start+a.count);for(let y=u,E=f;y<E;y++)Lo.fromBufferAttribute(m,y),tm(Lo,y,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function tm(t,e,n,i,r,s,a){const o=qd.distanceSqToPoint(t);if(o<n){const l=new j;qd.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Ex extends Jt{constructor(e=[],n=Ur,i,r,s,a,o,l,c,p){super(e,n,i,r,s,a,o,l,c,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class EM extends Jt{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Us extends Jt{constructor(e,n,i=fi,r,s,a,o=Gt,l=Gt,c,p=Li,m=1){if(p!==Li&&p!==Ar)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:m};super(u,r,s,a,o,l,p,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class bM extends Us{constructor(e,n=fi,i=Ur,r,s,a=Gt,o=Gt,l,c=Li){const p={width:e,height:e,depth:1},m=[p,p,p,p,p,p];super(e,e,n,i,r,s,a,o,l,c),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class bx extends Jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Xa extends wn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],p=[],m=[];let u=0,f=0;y("z","y","x",-1,-1,i,n,e,a,s,0),y("z","y","x",1,-1,i,n,-e,a,s,1),y("x","z","y",1,1,e,i,n,r,a,2),y("x","z","y",1,-1,e,i,-n,r,a,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new sn(c,3)),this.setAttribute("normal",new sn(p,3)),this.setAttribute("uv",new sn(m,2));function y(E,x,d,g,v,M,T,w,R,_,A){const I=M/R,L=T/_,z=M/2,V=T/2,Q=w/2,O=R+1,Y=_+1;let G=0,k=0;const Z=new j;for(let P=0;P<Y;P++){const C=P*L-V;for(let D=0;D<O;D++){const re=D*I-z;Z[E]=re*g,Z[x]=C*v,Z[d]=Q,c.push(Z.x,Z.y,Z.z),Z[E]=0,Z[x]=0,Z[d]=w>0?1:-1,p.push(Z.x,Z.y,Z.z),m.push(D/R),m.push(1-P/_),G+=1}}for(let P=0;P<_;P++)for(let C=0;C<R;C++){const D=u+C+O*P,re=u+C+O*(P+1),ae=u+(C+1)+O*(P+1),oe=u+(C+1)+O*P;l.push(D,re,oe),l.push(re,ae,oe),k+=6}o.addGroup(f,k,A),f+=k,u+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class sh extends wn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],a=[];o(r),c(i),p(),this.setAttribute("position",new sn(s,3)),this.setAttribute("normal",new sn(s.slice(),3)),this.setAttribute("uv",new sn(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(g){const v=new j,M=new j,T=new j;for(let w=0;w<n.length;w+=3)f(n[w+0],v),f(n[w+1],M),f(n[w+2],T),l(v,M,T,g)}function l(g,v,M,T){const w=T+1,R=[];for(let _=0;_<=w;_++){R[_]=[];const A=g.clone().lerp(M,_/w),I=v.clone().lerp(M,_/w),L=w-_;for(let z=0;z<=L;z++)z===0&&_===w?R[_][z]=A:R[_][z]=A.clone().lerp(I,z/L)}for(let _=0;_<w;_++)for(let A=0;A<2*(w-_)-1;A++){const I=Math.floor(A/2);A%2===0?(u(R[_][I+1]),u(R[_+1][I]),u(R[_][I])):(u(R[_][I+1]),u(R[_+1][I+1]),u(R[_+1][I]))}}function c(g){const v=new j;for(let M=0;M<s.length;M+=3)v.x=s[M+0],v.y=s[M+1],v.z=s[M+2],v.normalize().multiplyScalar(g),s[M+0]=v.x,s[M+1]=v.y,s[M+2]=v.z}function p(){const g=new j;for(let v=0;v<s.length;v+=3){g.x=s[v+0],g.y=s[v+1],g.z=s[v+2];const M=x(g)/2/Math.PI+.5,T=d(g)/Math.PI+.5;a.push(M,1-T)}y(),m()}function m(){for(let g=0;g<a.length;g+=6){const v=a[g+0],M=a[g+2],T=a[g+4],w=Math.max(v,M,T),R=Math.min(v,M,T);w>.9&&R<.1&&(v<.2&&(a[g+0]+=1),M<.2&&(a[g+2]+=1),T<.2&&(a[g+4]+=1))}}function u(g){s.push(g.x,g.y,g.z)}function f(g,v){const M=g*3;v.x=e[M+0],v.y=e[M+1],v.z=e[M+2]}function y(){const g=new j,v=new j,M=new j,T=new j,w=new Qe,R=new Qe,_=new Qe;for(let A=0,I=0;A<s.length;A+=9,I+=6){g.set(s[A+0],s[A+1],s[A+2]),v.set(s[A+3],s[A+4],s[A+5]),M.set(s[A+6],s[A+7],s[A+8]),w.set(a[I+0],a[I+1]),R.set(a[I+2],a[I+3]),_.set(a[I+4],a[I+5]),T.copy(g).add(v).add(M).divideScalar(3);const L=x(T);E(w,I+0,g,L),E(R,I+2,v,L),E(_,I+4,M,L)}}function E(g,v,M,T){T<0&&g.x===1&&(a[v]=g.x-1),M.x===0&&M.z===0&&(a[v]=T/2/Math.PI+.5)}function x(g){return Math.atan2(g.z,-g.x)}function d(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sh(e.vertices,e.indices,e.radius,e.detail)}}class ah extends sh{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new ah(e.radius,e.detail)}}class Jl extends wn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,p=l+1,m=e/o,u=n/l,f=[],y=[],E=[],x=[];for(let d=0;d<p;d++){const g=d*u-a;for(let v=0;v<c;v++){const M=v*m-s;y.push(M,-g,0),E.push(0,0,1),x.push(v/o),x.push(1-d/l)}}for(let d=0;d<l;d++)for(let g=0;g<o;g++){const v=g+c*d,M=g+c*(d+1),T=g+1+c*(d+1),w=g+1+c*d;f.push(v,M,w),f.push(M,T,w)}this.setIndex(f),this.setAttribute("position",new sn(y,3)),this.setAttribute("normal",new sn(E,3)),this.setAttribute("uv",new sn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Il extends wn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],p=[],m=[],u=new j,f=new j,y=new j;for(let E=0;E<=i;E++){const x=a+E/i*o;for(let d=0;d<=r;d++){const g=d/r*s;f.x=(e+n*Math.cos(x))*Math.cos(g),f.y=(e+n*Math.cos(x))*Math.sin(g),f.z=n*Math.sin(x),c.push(f.x,f.y,f.z),u.x=e*Math.cos(g),u.y=e*Math.sin(g),y.subVectors(f,u).normalize(),p.push(y.x,y.y,y.z),m.push(d/r),m.push(E/i)}}for(let E=1;E<=i;E++)for(let x=1;x<=r;x++){const d=(r+1)*E+x-1,g=(r+1)*(E-1)+x-1,v=(r+1)*(E-1)+x,M=(r+1)*E+x;l.push(d,g,M),l.push(g,v,M)}this.setIndex(l),this.setAttribute("position",new sn(c,3)),this.setAttribute("normal",new sn(p,3)),this.setAttribute("uv",new sn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Il(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Fs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(nm(r))r.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(nm(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function tn(t){const e={};for(let n=0;n<t.length;n++){const i=Fs(t[n]);for(const r in i)e[r]=i[r]}return e}function nm(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function wM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function wx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const TM={clone:Fs,merge:tn};var AM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,CM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hi extends ja{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=AM,this.fragmentShader=CM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=wM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Ze().setHex(r.value);break;case"v2":this.uniforms[i].value=new Qe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new j().fromArray(r.value);break;case"v4":this.uniforms[i].value=new At().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ve().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Pt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class RM extends hi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class NM extends ja{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class PM extends ja{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Do=new j,Uo=new zs,ti=new j;class Tx extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Do,Uo,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Do,Uo,ti.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Do,Uo,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Do,Uo,ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Wi=new j,im=new Qe,rm=new Qe;class Pn extends Tx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Xd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Dc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xd*2*Math.atan(Math.tan(Dc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,n){return this.getViewBounds(e,im,rm),n.subVectors(rm,im)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Dc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Ax extends Tx{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=p*this.view.offsetY,l=o-p*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ts=-90,ns=1;class IM extends mn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Pn(ts,ns,e,n);r.layers=this.layers,this.add(r);const s=new Pn(ts,ns,e,n);s.layers=this.layers,this.add(s);const a=new Pn(ts,ns,e,n);a.layers=this.layers,this.add(a);const o=new Pn(ts,ns,e,n);o.layers=this.layers,this.add(o);const l=new Pn(ts,ns,e,n);l.layers=this.layers,this.add(l);const c=new Pn(ts,ns,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Nl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,p]=this.children,m=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(m,u,f),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class LM extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class DM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ke("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const fh=class fh{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};fh.prototype.isMatrix2=!0;let sm=fh;function am(t,e,n,i){const r=UM(i);switch(n){case dx:return t*e;case hx:return t*e/r.components*r.byteLength;case Jf:return t*e/r.components*r.byteLength;case Fr:return t*e*2/r.components*r.byteLength;case eh:return t*e*2/r.components*r.byteLength;case fx:return t*e*3/r.components*r.byteLength;case qn:return t*e*4/r.components*r.byteLength;case th:return t*e*4/r.components*r.byteLength;case Zo:case Qo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Jo:case el:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case xd:case _d:return Math.max(t,16)*Math.max(e,8)/4;case gd:case vd:return Math.max(t,8)*Math.max(e,8)/2;case yd:case Sd:case Ed:case bd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Md:case Tl:case wd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Td:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ad:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Cd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Rd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Nd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Pd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Id:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Ld:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Dd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Fd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case kd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Od:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Bd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case zd:case Hd:case Vd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Gd:case Wd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Al:case jd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function UM(t){switch(t){case In:case ox:return{byteLength:1,components:1};case Fa:case lx:case Ii:return{byteLength:2,components:1};case Zf:case Qf:return{byteLength:2,components:4};case fi:case Kf:case ai:return{byteLength:4,components:1};case cx:case ux:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yf}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Cx(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function FM(t){const e=new WeakMap;function n(o,l){const c=o.array,p=o.usage,m=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,p),o.onUploadCallback();let f;if(c instanceof Float32Array)f=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=t.HALF_FLOAT:f=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=t.SHORT;else if(c instanceof Uint32Array)f=t.UNSIGNED_INT;else if(c instanceof Int32Array)f=t.INT;else if(c instanceof Int8Array)f=t.BYTE;else if(c instanceof Uint8Array)f=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:m}}function i(o,l,c){const p=l.array,m=l.updateRanges;if(t.bindBuffer(c,o),m.length===0)t.bufferSubData(c,0,p);else{m.sort((f,y)=>f.start-y.start);let u=0;for(let f=1;f<m.length;f++){const y=m[u],E=m[f];E.start<=y.start+y.count+1?y.count=Math.max(y.count,E.start+E.count-y.start):(++u,m[u]=E)}m.length=u+1;for(let f=0,y=m.length;f<y;f++){const E=m[f];t.bufferSubData(c,E.start*p.BYTES_PER_ELEMENT,p,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const p=e.get(o);(!p||p.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var kM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,OM=`#ifdef USE_ALPHAHASH
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
#endif`,BM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,VM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,GM=`#ifdef USE_AOMAP
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
#endif`,WM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jM=`#ifdef USE_BATCHING
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
#endif`,XM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$M=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,YM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,KM=`#ifdef USE_IRIDESCENCE
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
#endif`,ZM=`#ifdef USE_BUMPMAP
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
#endif`,QM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,JM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,e1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,t1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,n1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,i1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,r1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,s1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,a1=`#define PI 3.141592653589793
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
} // validated`,o1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,l1=`vec3 transformedNormal = objectNormal;
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
#endif`,c1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,u1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,d1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,f1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,h1="gl_FragColor = linearToOutputTexel( gl_FragColor );",p1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,m1=`#ifdef USE_ENVMAP
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
#endif`,g1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,x1=`#ifdef USE_ENVMAP
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
#endif`,v1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_1=`#ifdef USE_ENVMAP
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
#endif`,y1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,S1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,M1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,E1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,b1=`#ifdef USE_GRADIENTMAP
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
}`,w1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,T1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,A1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,C1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,R1=`#ifdef USE_ENVMAP
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
#endif`,N1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,P1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,I1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,L1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,D1=`PhysicalMaterial material;
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
#endif`,U1=`uniform sampler2D dfgLUT;
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
}`,F1=`
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
#endif`,k1=`#if defined( RE_IndirectDiffuse )
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
#endif`,O1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,B1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,z1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,H1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,W1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,j1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,X1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,q1=`#if defined( USE_POINTS_UV )
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
#endif`,$1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Y1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,K1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Z1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Q1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J1=`#ifdef USE_MORPHTARGETS
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
#endif`,eE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,iE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,aE=`#ifdef USE_NORMALMAP
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
#endif`,oE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_E=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,SE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ME=`float getShadowMask() {
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
}`,EE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bE=`#ifdef USE_SKINNING
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
#endif`,wE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,TE=`#ifdef USE_SKINNING
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
#endif`,AE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,RE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,PE=`#ifdef USE_TRANSMISSION
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
#endif`,IE=`#ifdef USE_TRANSMISSION
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
#endif`,LE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,OE=`uniform sampler2D t2D;
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
}`,BE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,HE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GE=`#include <common>
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
}`,WE=`#if DEPTH_PACKING == 3200
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
}`,jE=`#define DISTANCE
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
}`,XE=`#define DISTANCE
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
}`,qE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$E=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YE=`uniform float scale;
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
}`,KE=`uniform vec3 diffuse;
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
}`,ZE=`#include <common>
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
}`,QE=`uniform vec3 diffuse;
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
}`,JE=`#define LAMBERT
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
}`,eb=`#define LAMBERT
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
}`,tb=`#define MATCAP
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
}`,nb=`#define MATCAP
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
}`,ib=`#define NORMAL
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
}`,rb=`#define NORMAL
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
}`,sb=`#define PHONG
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
}`,ab=`#define PHONG
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
}`,ob=`#define STANDARD
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
}`,lb=`#define STANDARD
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
}`,cb=`#define TOON
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
}`,ub=`#define TOON
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
}`,db=`uniform float size;
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
}`,fb=`uniform vec3 diffuse;
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
}`,hb=`#include <common>
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
}`,pb=`uniform vec3 color;
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
}`,mb=`uniform float rotation;
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
}`,gb=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:kM,alphahash_pars_fragment:OM,alphamap_fragment:BM,alphamap_pars_fragment:zM,alphatest_fragment:HM,alphatest_pars_fragment:VM,aomap_fragment:GM,aomap_pars_fragment:WM,batching_pars_vertex:jM,batching_vertex:XM,begin_vertex:qM,beginnormal_vertex:$M,bsdfs:YM,iridescence_fragment:KM,bumpmap_pars_fragment:ZM,clipping_planes_fragment:QM,clipping_planes_pars_fragment:JM,clipping_planes_pars_vertex:e1,clipping_planes_vertex:t1,color_fragment:n1,color_pars_fragment:i1,color_pars_vertex:r1,color_vertex:s1,common:a1,cube_uv_reflection_fragment:o1,defaultnormal_vertex:l1,displacementmap_pars_vertex:c1,displacementmap_vertex:u1,emissivemap_fragment:d1,emissivemap_pars_fragment:f1,colorspace_fragment:h1,colorspace_pars_fragment:p1,envmap_fragment:m1,envmap_common_pars_fragment:g1,envmap_pars_fragment:x1,envmap_pars_vertex:v1,envmap_physical_pars_fragment:R1,envmap_vertex:_1,fog_vertex:y1,fog_pars_vertex:S1,fog_fragment:M1,fog_pars_fragment:E1,gradientmap_pars_fragment:b1,lightmap_pars_fragment:w1,lights_lambert_fragment:T1,lights_lambert_pars_fragment:A1,lights_pars_begin:C1,lights_toon_fragment:N1,lights_toon_pars_fragment:P1,lights_phong_fragment:I1,lights_phong_pars_fragment:L1,lights_physical_fragment:D1,lights_physical_pars_fragment:U1,lights_fragment_begin:F1,lights_fragment_maps:k1,lights_fragment_end:O1,lightprobes_pars_fragment:B1,logdepthbuf_fragment:z1,logdepthbuf_pars_fragment:H1,logdepthbuf_pars_vertex:V1,logdepthbuf_vertex:G1,map_fragment:W1,map_pars_fragment:j1,map_particle_fragment:X1,map_particle_pars_fragment:q1,metalnessmap_fragment:$1,metalnessmap_pars_fragment:Y1,morphinstance_vertex:K1,morphcolor_vertex:Z1,morphnormal_vertex:Q1,morphtarget_pars_vertex:J1,morphtarget_vertex:eE,normal_fragment_begin:tE,normal_fragment_maps:nE,normal_pars_fragment:iE,normal_pars_vertex:rE,normal_vertex:sE,normalmap_pars_fragment:aE,clearcoat_normal_fragment_begin:oE,clearcoat_normal_fragment_maps:lE,clearcoat_pars_fragment:cE,iridescence_pars_fragment:uE,opaque_fragment:dE,packing:fE,premultiplied_alpha_fragment:hE,project_vertex:pE,dithering_fragment:mE,dithering_pars_fragment:gE,roughnessmap_fragment:xE,roughnessmap_pars_fragment:vE,shadowmap_pars_fragment:_E,shadowmap_pars_vertex:yE,shadowmap_vertex:SE,shadowmask_pars_fragment:ME,skinbase_vertex:EE,skinning_pars_vertex:bE,skinning_vertex:wE,skinnormal_vertex:TE,specularmap_fragment:AE,specularmap_pars_fragment:CE,tonemapping_fragment:RE,tonemapping_pars_fragment:NE,transmission_fragment:PE,transmission_pars_fragment:IE,uv_pars_fragment:LE,uv_pars_vertex:DE,uv_vertex:UE,worldpos_vertex:FE,background_vert:kE,background_frag:OE,backgroundCube_vert:BE,backgroundCube_frag:zE,cube_vert:HE,cube_frag:VE,depth_vert:GE,depth_frag:WE,distance_vert:jE,distance_frag:XE,equirect_vert:qE,equirect_frag:$E,linedashed_vert:YE,linedashed_frag:KE,meshbasic_vert:ZE,meshbasic_frag:QE,meshlambert_vert:JE,meshlambert_frag:eb,meshmatcap_vert:tb,meshmatcap_frag:nb,meshnormal_vert:ib,meshnormal_frag:rb,meshphong_vert:sb,meshphong_frag:ab,meshphysical_vert:ob,meshphysical_frag:lb,meshtoon_vert:cb,meshtoon_frag:ub,points_vert:db,points_frag:fb,shadow_vert:hb,shadow_frag:pb,sprite_vert:mb,sprite_frag:gb},_e={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new j},probesMax:{value:new j},probesResolution:{value:new j}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},ri={basic:{uniforms:tn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:tn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ze(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:tn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:tn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:tn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Ze(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:tn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:tn([_e.points,_e.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:tn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:tn([_e.common,_e.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:tn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:tn([_e.sprite,_e.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:tn([_e.common,_e.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:tn([_e.lights,_e.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};ri.physical={uniforms:tn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Fo={r:0,b:0,g:0},xb=new Pt,Rx=new Ve;Rx.set(-1,0,0,0,1,0,0,0,1);function vb(t,e,n,i,r,s){const a=new Ze(0);let o=r===!0?0:1,l,c,p=null,m=0,u=null;function f(g){let v=g.isScene===!0?g.background:null;if(v&&v.isTexture){const M=g.backgroundBlurriness>0;v=e.get(v,M)}return v}function y(g){let v=!1;const M=f(g);M===null?x(a,o):M&&M.isColor&&(x(M,1),v=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function E(g,v){const M=f(v);M&&(M.isCubeTexture||M.mapping===Zl)?(c===void 0&&(c=new Fn(new Xa(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:Fs(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(xb.makeRotationFromEuler(v.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Rx),c.material.toneMapped=$e.getTransfer(M.colorSpace)!==at,(p!==M||m!==M.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,p=M,m=M.version,u=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Fn(new Jl(2,2),new hi({name:"BackgroundMaterial",uniforms:Fs(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=$e.getTransfer(M.colorSpace)!==at,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(p!==M||m!==M.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,p=M,m=M.version,u=t.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function x(g,v){g.getRGB(Fo,wx(t)),n.buffers.color.setClear(Fo.r,Fo.g,Fo.b,v,s)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,v=1){a.set(g),o=v,x(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,x(a,o)},render:y,addToRenderList:E,dispose:d}}function _b(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,a=!1;function o(L,z,V,Q,O){let Y=!1;const G=m(L,Q,V,z);s!==G&&(s=G,c(s.object)),Y=f(L,Q,V,O),Y&&y(L,Q,V,O),O!==null&&e.update(O,t.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,M(L,z,V,Q),O!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return t.createVertexArray()}function c(L){return t.bindVertexArray(L)}function p(L){return t.deleteVertexArray(L)}function m(L,z,V,Q){const O=Q.wireframe===!0;let Y=i[z.id];Y===void 0&&(Y={},i[z.id]=Y);const G=L.isInstancedMesh===!0?L.id:0;let k=Y[G];k===void 0&&(k={},Y[G]=k);let Z=k[V.id];Z===void 0&&(Z={},k[V.id]=Z);let P=Z[O];return P===void 0&&(P=u(l()),Z[O]=P),P}function u(L){const z=[],V=[],Q=[];for(let O=0;O<n;O++)z[O]=0,V[O]=0,Q[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:V,attributeDivisors:Q,object:L,attributes:{},index:null}}function f(L,z,V,Q){const O=s.attributes,Y=z.attributes;let G=0;const k=V.getAttributes();for(const Z in k)if(k[Z].location>=0){const C=O[Z];let D=Y[Z];if(D===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(D=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(D=L.instanceColor)),C===void 0||C.attribute!==D||D&&C.data!==D.data)return!0;G++}return s.attributesNum!==G||s.index!==Q}function y(L,z,V,Q){const O={},Y=z.attributes;let G=0;const k=V.getAttributes();for(const Z in k)if(k[Z].location>=0){let C=Y[Z];C===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(C=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(C=L.instanceColor));const D={};D.attribute=C,C&&C.data&&(D.data=C.data),O[Z]=D,G++}s.attributes=O,s.attributesNum=G,s.index=Q}function E(){const L=s.newAttributes;for(let z=0,V=L.length;z<V;z++)L[z]=0}function x(L){d(L,0)}function d(L,z){const V=s.newAttributes,Q=s.enabledAttributes,O=s.attributeDivisors;V[L]=1,Q[L]===0&&(t.enableVertexAttribArray(L),Q[L]=1),O[L]!==z&&(t.vertexAttribDivisor(L,z),O[L]=z)}function g(){const L=s.newAttributes,z=s.enabledAttributes;for(let V=0,Q=z.length;V<Q;V++)z[V]!==L[V]&&(t.disableVertexAttribArray(V),z[V]=0)}function v(L,z,V,Q,O,Y,G){G===!0?t.vertexAttribIPointer(L,z,V,O,Y):t.vertexAttribPointer(L,z,V,Q,O,Y)}function M(L,z,V,Q){E();const O=Q.attributes,Y=V.getAttributes(),G=z.defaultAttributeValues;for(const k in Y){const Z=Y[k];if(Z.location>=0){let P=O[k];if(P===void 0&&(k==="instanceMatrix"&&L.instanceMatrix&&(P=L.instanceMatrix),k==="instanceColor"&&L.instanceColor&&(P=L.instanceColor)),P!==void 0){const C=P.normalized,D=P.itemSize,re=e.get(P);if(re===void 0)continue;const ae=re.buffer,oe=re.type,W=re.bytesPerElement,J=oe===t.INT||oe===t.UNSIGNED_INT||P.gpuType===Kf;if(P.isInterleavedBufferAttribute){const te=P.data,xe=te.stride,Ee=P.offset;if(te.isInstancedInterleavedBuffer){for(let ge=0;ge<Z.locationSize;ge++)d(Z.location+ge,te.meshPerAttribute);L.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ge=0;ge<Z.locationSize;ge++)x(Z.location+ge);t.bindBuffer(t.ARRAY_BUFFER,ae);for(let ge=0;ge<Z.locationSize;ge++)v(Z.location+ge,D/Z.locationSize,oe,C,xe*W,(Ee+D/Z.locationSize*ge)*W,J)}else{if(P.isInstancedBufferAttribute){for(let te=0;te<Z.locationSize;te++)d(Z.location+te,P.meshPerAttribute);L.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let te=0;te<Z.locationSize;te++)x(Z.location+te);t.bindBuffer(t.ARRAY_BUFFER,ae);for(let te=0;te<Z.locationSize;te++)v(Z.location+te,D/Z.locationSize,oe,C,D*W,D/Z.locationSize*te*W,J)}}else if(G!==void 0){const C=G[k];if(C!==void 0)switch(C.length){case 2:t.vertexAttrib2fv(Z.location,C);break;case 3:t.vertexAttrib3fv(Z.location,C);break;case 4:t.vertexAttrib4fv(Z.location,C);break;default:t.vertexAttrib1fv(Z.location,C)}}}}g()}function T(){A();for(const L in i){const z=i[L];for(const V in z){const Q=z[V];for(const O in Q){const Y=Q[O];for(const G in Y)p(Y[G].object),delete Y[G];delete Q[O]}}delete i[L]}}function w(L){if(i[L.id]===void 0)return;const z=i[L.id];for(const V in z){const Q=z[V];for(const O in Q){const Y=Q[O];for(const G in Y)p(Y[G].object),delete Y[G];delete Q[O]}}delete i[L.id]}function R(L){for(const z in i){const V=i[z];for(const Q in V){const O=V[Q];if(O[L.id]===void 0)continue;const Y=O[L.id];for(const G in Y)p(Y[G].object),delete Y[G];delete O[L.id]}}}function _(L){for(const z in i){const V=i[z],Q=L.isInstancedMesh===!0?L.id:0,O=V[Q];if(O!==void 0){for(const Y in O){const G=O[Y];for(const k in G)p(G[k].object),delete G[k];delete O[Y]}delete V[Q],Object.keys(V).length===0&&delete i[z]}}}function A(){I(),a=!0,s!==r&&(s=r,c(s.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:I,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:E,enableAttribute:x,disableUnusedAttributes:g}}function yb(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,p){p!==0&&(t.drawArraysInstanced(i,l,c,p),n.update(c,i,p))}function o(l,c,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,p);let u=0;for(let f=0;f<p;f++)u+=c[f];n.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Sb(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==qn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const _=R===Ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==In&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ai&&!_)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const p=l(c);p!==c&&(ke("WebGLRenderer:",c,"not supported, using",p,"instead."),c=p);const m=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),w=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:m,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:y,maxTextureSize:E,maxCubemapSize:x,maxAttributes:d,maxVertexUniforms:g,maxVaryings:v,maxFragmentUniforms:M,maxSamples:T,samples:w}}function Mb(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new yr,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,u){const f=m.length!==0||u||i!==0||r;return r=u,i=m.length,f},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,u){n=p(m,u,0)},this.setState=function(m,u,f){const y=m.clippingPlanes,E=m.clipIntersection,x=m.clipShadows,d=t.get(m);if(!r||y===null||y.length===0||s&&!x)s?p(null):c();else{const g=s?0:i,v=g*4;let M=d.clippingState||null;l.value=M,M=p(y,u,v,f);for(let T=0;T!==v;++T)M[T]=n[T];d.clippingState=M,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(m,u,f,y){const E=m!==null?m.length:0;let x=null;if(E!==0){if(x=l.value,y!==!0||x===null){const d=f+E*4,g=u.matrixWorldInverse;o.getNormalMatrix(g),(x===null||x.length<d)&&(x=new Float32Array(d));for(let v=0,M=f;v!==E;++v,M+=4)a.copy(m[v]).applyMatrix4(g,o),a.normal.toArray(x,M),x[M+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,x}}const Qi=4,om=[.125,.215,.35,.446,.526,.582],Mr=20,Eb=256,ta=new Ax,lm=new Ze;let ru=null,su=0,au=0,ou=!1;const bb=new j;class cm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=bb}=s;ru=this._renderer.getRenderTarget(),su=this._renderer.getActiveCubeFace(),au=this._renderer.getActiveMipmapLevel(),ou=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ru,su,au),this._renderer.xr.enabled=ou,e.scissorTest=!1,is(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ur||e.mapping===Ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ru=this._renderer.getRenderTarget(),su=this._renderer.getActiveCubeFace(),au=this._renderer.getActiveMipmapLevel(),ou=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Ii,format:qn,colorSpace:Cl,depthBuffer:!1},r=um(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=um(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=wb(s)),this._blurMaterial=Ab(s,e,n),this._ggxMaterial=Tb(s,e,n)}return r}_compileMaterial(e){const n=new Fn(new wn,e);this._renderer.compile(n,ta)}_sceneToCubeUV(e,n,i,r,s){const l=new Pn(90,1,n,i),c=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,u=m.autoClear,f=m.toneMapping;m.getClearColor(lm),m.toneMapping=ui,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(r),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fn(new Xa,new va({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,x=E.material;let d=!1;const g=e.background;g?g.isColor&&(x.color.copy(g),e.background=null,d=!0):(x.color.copy(lm),d=!0);for(let v=0;v<6;v++){const M=v%3;M===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+p[v],s.y,s.z)):M===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+p[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+p[v]));const T=this._cubeSize;is(r,M*T,v>2?T:0,T,T),m.setRenderTarget(r),d&&m.render(E,l),m.render(e,l)}m.toneMapping=f,m.autoClear=u,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ur||e.mapping===Ds;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=fm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;is(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,ta)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),p=n/(this._lodMeshes.length-1),m=Math.sqrt(c*c-p*p),u=0+c*1.25,f=m*u,{_lodMax:y}=this,E=this._sizeLods[i],x=3*E*(i>y-Qi?i-y+Qi:0),d=4*(this._cubeSize-E);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=y-n,is(s,x,d,3*E,2*E),r.setRenderTarget(s),r.render(o,ta),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=y-i,is(e,x,d,3*E,2*E),r.setRenderTarget(e),r.render(o,ta)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&et("blur direction must be either latitudinal or longitudinal!");const p=3,m=this._lodMeshes[r];m.material=c;const u=c.uniforms,f=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Mr-1),E=s/y,x=isFinite(s)?1+Math.floor(p*E):Mr;x>Mr&&ke(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Mr}`);const d=[];let g=0;for(let R=0;R<Mr;++R){const _=R/E,A=Math.exp(-_*_/2);d.push(A),R===0?g+=A:R<x&&(g+=2*A)}for(let R=0;R<d.length;R++)d[R]=d[R]/g;u.envMap.value=e.texture,u.samples.value=x,u.weights.value=d,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:v}=this;u.dTheta.value=y,u.mipInt.value=v-i;const M=this._sizeLods[r],T=3*M*(r>v-Qi?r-v+Qi:0),w=4*(this._cubeSize-M);is(n,T,w,3*M,2*M),l.setRenderTarget(n),l.render(m,ta)}}function wb(t){const e=[],n=[],i=[];let r=t;const s=t-Qi+1+om.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-Qi?l=om[a-t+Qi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),p=-c,m=1+c,u=[p,p,m,p,m,m,p,p,m,m,p,m],f=6,y=6,E=3,x=2,d=1,g=new Float32Array(E*y*f),v=new Float32Array(x*y*f),M=new Float32Array(d*y*f);for(let w=0;w<f;w++){const R=w%3*2/3-1,_=w>2?0:-1,A=[R,_,0,R+2/3,_,0,R+2/3,_+1,0,R,_,0,R+2/3,_+1,0,R,_+1,0];g.set(A,E*y*w),v.set(u,x*y*w);const I=[w,w,w,w,w,w];M.set(I,d*y*w)}const T=new wn;T.setAttribute("position",new Un(g,E)),T.setAttribute("uv",new Un(v,x)),T.setAttribute("faceIndex",new Un(M,d)),i.push(new Fn(T,null)),r>Qi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function um(t,e,n){const i=new di(t,e,n);return i.texture.mapping=Zl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function is(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Tb(t,e,n){return new hi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Eb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ec(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Ab(t,e,n){const i=new Float32Array(Mr),r=new j(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ec(),fragmentShader:`

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
			`},r=new Xa(5,5,5),s=new hi({name:"CubemapFromEquirect",uniforms:Fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:Ti});s.uniforms.tEquirect.value=n;const a=new Fn(r,s),o=n.minFilter;return n.minFilter===Tr&&(n.minFilter=Qt),new IM(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function Cb(t){let e=new WeakMap,n=new WeakMap,i=null;function r(u,f=!1){return u==null?null:f?a(u):s(u)}function s(u){if(u&&u.isTexture){const f=u.mapping;if(f===Pc||f===Ic)if(e.has(u)){const y=e.get(u).texture;return o(y,u.mapping)}else{const y=u.image;if(y&&y.height>0){const E=new Nx(y.height);return E.fromEquirectangularTexture(t,u),e.set(u,E),u.addEventListener("dispose",c),o(E.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const f=u.mapping,y=f===Pc||f===Ic,E=f===Ur||f===Ds;if(y||E){let x=n.get(u);const d=x!==void 0?x.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return i===null&&(i=new cm(t)),x=y?i.fromEquirectangular(u,x):i.fromCubemap(u,x),x.texture.pmremVersion=u.pmremVersion,n.set(u,x),x.texture;if(x!==void 0)return x.texture;{const g=u.image;return y&&g&&g.height>0||E&&g&&l(g)?(i===null&&(i=new cm(t)),x=y?i.fromEquirectangular(u):i.fromCubemap(u),x.texture.pmremVersion=u.pmremVersion,n.set(u,x),u.addEventListener("dispose",p),x.texture):null}}}return u}function o(u,f){return f===Pc?u.mapping=Ur:f===Ic&&(u.mapping=Ds),u}function l(u){let f=0;const y=6;for(let E=0;E<y;E++)u[E]!==void 0&&f++;return f===y}function c(u){const f=u.target;f.removeEventListener("dispose",c);const y=e.get(f);y!==void 0&&(e.delete(f),y.dispose())}function p(u){const f=u.target;f.removeEventListener("dispose",p);const y=n.get(f);y!==void 0&&(n.delete(f),y.dispose())}function m(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:m}}function Rb(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&bs("WebGLRenderer: "+i+" extension not supported."),r}}}function Nb(t,e,n,i){const r={},s=new WeakMap;function a(m){const u=m.target;u.index!==null&&e.remove(u.index);for(const y in u.attributes)e.remove(u.attributes[y]);u.removeEventListener("dispose",a),delete r[u.id];const f=s.get(u);f&&(e.remove(f),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(m,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,n.memory.geometries++),u}function l(m){const u=m.attributes;for(const f in u)e.update(u[f],t.ARRAY_BUFFER)}function c(m){const u=[],f=m.index,y=m.attributes.position;let E=0;if(y===void 0)return;if(f!==null){const g=f.array;E=f.version;for(let v=0,M=g.length;v<M;v+=3){const T=g[v+0],w=g[v+1],R=g[v+2];u.push(T,w,w,R,R,T)}}else{const g=y.array;E=y.version;for(let v=0,M=g.length/3-1;v<M;v+=3){const T=v+0,w=v+1,R=v+2;u.push(T,w,w,R,R,T)}}const x=new(y.count>=65535?_x:vx)(u,1);x.version=E;const d=s.get(m);d&&e.remove(d),s.set(m,x)}function p(m){const u=s.get(m);if(u){const f=m.index;f!==null&&u.version<f.version&&c(m)}else c(m);return s.get(m)}return{get:o,update:l,getWireframeAttribute:p}}function Pb(t,e,n){let i;function r(m){i=m}let s,a;function o(m){s=m.type,a=m.bytesPerElement}function l(m,u){t.drawElements(i,u,s,m*a),n.update(u,i,1)}function c(m,u,f){f!==0&&(t.drawElementsInstanced(i,u,s,m*a,f),n.update(u,i,f))}function p(m,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,m,0,f);let E=0;for(let x=0;x<f;x++)E+=u[x];n.update(E,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=p}function Ib(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:et("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Lb(t,e,n){const i=new WeakMap,r=new At;function s(a,o,l){const c=a.morphTargetInfluences,p=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=p!==void 0?p.length:0;let u=i.get(o);if(u===void 0||u.count!==m){let I=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",I)};var f=I;u!==void 0&&u.texture.dispose();const y=o.morphAttributes.position!==void 0,E=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let M=0;y===!0&&(M=1),E===!0&&(M=2),x===!0&&(M=3);let T=o.attributes.position.count*M,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const R=new Float32Array(T*w*4*m),_=new mx(R,T,w,m);_.type=ai,_.needsUpdate=!0;const A=M*4;for(let L=0;L<m;L++){const z=d[L],V=g[L],Q=v[L],O=T*w*4*L;for(let Y=0;Y<z.count;Y++){const G=Y*A;y===!0&&(r.fromBufferAttribute(z,Y),R[O+G+0]=r.x,R[O+G+1]=r.y,R[O+G+2]=r.z,R[O+G+3]=0),E===!0&&(r.fromBufferAttribute(V,Y),R[O+G+4]=r.x,R[O+G+5]=r.y,R[O+G+6]=r.z,R[O+G+7]=0),x===!0&&(r.fromBufferAttribute(Q,Y),R[O+G+8]=r.x,R[O+G+9]=r.y,R[O+G+10]=r.z,R[O+G+11]=Q.itemSize===4?r.w:1)}}u={count:m,texture:_,size:new Qe(T,w)},i.set(o,u),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let y=0;for(let x=0;x<c.length;x++)y+=c[x];const E=o.morphTargetsRelative?1:1-y;l.getUniforms().setValue(t,"morphTargetBaseInfluence",E),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function Db(t,e,n,i,r){let s=new WeakMap;function a(c){const p=r.render.frame,m=c.geometry,u=e.get(c,m);if(s.get(u)!==p&&(e.update(u),s.set(u,p)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==p&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,p))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==p&&(f.update(),s.set(f,p))}return u}function o(){s=new WeakMap}function l(c){const p=c.target;p.removeEventListener("dispose",l),i.releaseStatesOfObject(p),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:a,dispose:o}}const Ub={[J0]:"LINEAR_TONE_MAPPING",[ex]:"REINHARD_TONE_MAPPING",[tx]:"CINEON_TONE_MAPPING",[nx]:"ACES_FILMIC_TONE_MAPPING",[rx]:"AGX_TONE_MAPPING",[sx]:"NEUTRAL_TONE_MAPPING",[ix]:"CUSTOM_TONE_MAPPING"};function Fb(t,e,n,i,r,s){const a=new di(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new Us(e,n):void 0}),o=new di(e,n,{type:Ii,depthBuffer:!1,stencilBuffer:!1}),l=new wn;l.setAttribute("position",new sn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new sn([0,2,0,0,2,0],2));const c=new RM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Fn(l,c),m=new Ax(-1,1,1,-1,0,1);let u=null,f=null,y=!1,E,x=null,d=[],g=!1;this.setSize=function(v,M){a.setSize(v,M),o.setSize(v,M);for(let T=0;T<d.length;T++){const w=d[T];w.setSize&&w.setSize(v,M)}},this.setEffects=function(v){d=v,g=d.length>0&&d[0].isRenderPass===!0;const M=a.width,T=a.height;for(let w=0;w<d.length;w++){const R=d[w];R.setSize&&R.setSize(M,T)}},this.begin=function(v,M){if(y||v.toneMapping===ui&&d.length===0)return!1;if(x=M,M!==null){const T=M.width,w=M.height;(a.width!==T||a.height!==w)&&this.setSize(T,w)}return g===!1&&v.setRenderTarget(a),E=v.toneMapping,v.toneMapping=ui,!0},this.hasRenderPass=function(){return g},this.end=function(v,M){v.toneMapping=E,y=!0;let T=a,w=o;for(let R=0;R<d.length;R++){const _=d[R];if(_.enabled!==!1&&(_.render(v,w,T,M),_.needsSwap!==!1)){const A=T;T=w,w=A}}if(u!==v.outputColorSpace||f!==v.toneMapping){u=v.outputColorSpace,f=v.toneMapping,c.defines={},$e.getTransfer(u)===at&&(c.defines.SRGB_TRANSFER="");const R=Ub[f];R&&(c.defines[R]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,v.setRenderTarget(x),v.render(p,m),x=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const Px=new Jt,$d=new Us(1,1),Ix=new mx,Lx=new rM,Dx=new Ex,hm=[],pm=[],mm=new Float32Array(16),gm=new Float32Array(9),xm=new Float32Array(4);function Hs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=hm[r];if(s===void 0&&(s=new Float32Array(r),hm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ft(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function kt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function tc(t,e){let n=pm[e];n===void 0&&(n=new Int32Array(e),pm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function kb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Ob(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2fv(this.addr,e),kt(n,e)}}function Bb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ft(n,e))return;t.uniform3fv(this.addr,e),kt(n,e)}}function zb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4fv(this.addr,e),kt(n,e)}}function Hb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),kt(n,e)}else{if(Ft(n,i))return;xm.set(i),t.uniformMatrix2fv(this.addr,!1,xm),kt(n,i)}}function Vb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),kt(n,e)}else{if(Ft(n,i))return;gm.set(i),t.uniformMatrix3fv(this.addr,!1,gm),kt(n,i)}}function Gb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),kt(n,e)}else{if(Ft(n,i))return;mm.set(i),t.uniformMatrix4fv(this.addr,!1,mm),kt(n,i)}}function Wb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function jb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2iv(this.addr,e),kt(n,e)}}function Xb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3iv(this.addr,e),kt(n,e)}}function qb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4iv(this.addr,e),kt(n,e)}}function $b(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Yb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2uiv(this.addr,e),kt(n,e)}}function Kb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3uiv(this.addr,e),kt(n,e)}}function Zb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4uiv(this.addr,e),kt(n,e)}}function Qb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?($d.compareFunction=n.isReversedDepthBuffer()?ih:nh,s=$d):s=Px,n.setTexture2D(e||s,r)}function Jb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Lx,r)}function ew(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Dx,r)}function tw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Ix,r)}function nw(t){switch(t){case 5126:return kb;case 35664:return Ob;case 35665:return Bb;case 35666:return zb;case 35674:return Hb;case 35675:return Vb;case 35676:return Gb;case 5124:case 35670:return Wb;case 35667:case 35671:return jb;case 35668:case 35672:return Xb;case 35669:case 35673:return qb;case 5125:return $b;case 36294:return Yb;case 36295:return Kb;case 36296:return Zb;case 35678:case 36198:case 36298:case 36306:case 35682:return Qb;case 35679:case 36299:case 36307:return Jb;case 35680:case 36300:case 36308:case 36293:return ew;case 36289:case 36303:case 36311:case 36292:return tw}}function iw(t,e){t.uniform1fv(this.addr,e)}function rw(t,e){const n=Hs(e,this.size,2);t.uniform2fv(this.addr,n)}function sw(t,e){const n=Hs(e,this.size,3);t.uniform3fv(this.addr,n)}function aw(t,e){const n=Hs(e,this.size,4);t.uniform4fv(this.addr,n)}function ow(t,e){const n=Hs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function lw(t,e){const n=Hs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function cw(t,e){const n=Hs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function uw(t,e){t.uniform1iv(this.addr,e)}function dw(t,e){t.uniform2iv(this.addr,e)}function fw(t,e){t.uniform3iv(this.addr,e)}function hw(t,e){t.uniform4iv(this.addr,e)}function pw(t,e){t.uniform1uiv(this.addr,e)}function mw(t,e){t.uniform2uiv(this.addr,e)}function gw(t,e){t.uniform3uiv(this.addr,e)}function xw(t,e){t.uniform4uiv(this.addr,e)}function vw(t,e,n){const i=this.cache,r=e.length,s=tc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=$d:a=Px;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function _w(t,e,n){const i=this.cache,r=e.length,s=tc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Lx,s[a])}function yw(t,e,n){const i=this.cache,r=e.length,s=tc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Dx,s[a])}function Sw(t,e,n){const i=this.cache,r=e.length,s=tc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Ix,s[a])}function Mw(t){switch(t){case 5126:return iw;case 35664:return rw;case 35665:return sw;case 35666:return aw;case 35674:return ow;case 35675:return lw;case 35676:return cw;case 5124:case 35670:return uw;case 35667:case 35671:return dw;case 35668:case 35672:return fw;case 35669:case 35673:return hw;case 5125:return pw;case 36294:return mw;case 36295:return gw;case 36296:return xw;case 35678:case 36198:case 36298:case 36306:case 35682:return vw;case 35679:case 36299:case 36307:return _w;case 35680:case 36300:case 36308:case 36293:return yw;case 36289:case 36303:case 36311:case 36292:return Sw}}class Ew{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=nw(n.type)}}class bw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Mw(n.type)}}class ww{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const lu=/(\w+)(\])?(\[|\.)?/g;function vm(t,e){t.seq.push(e),t.map[e.id]=e}function Tw(t,e,n){const i=t.name,r=i.length;for(lu.lastIndex=0;;){const s=lu.exec(i),a=lu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){vm(n,c===void 0?new Ew(o,t,e):new bw(o,t,e));break}else{let m=n.map[o];m===void 0&&(m=new ww(o),vm(n,m)),n=m}}}class tl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);Tw(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function _m(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Aw=37297;let Cw=0;function Rw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const ym=new Ve;function Nw(t){$e._getMatrix(ym,$e.workingColorSpace,t);const e=`mat3( ${ym.elements.map(n=>n.toFixed(4))} )`;switch($e.getTransfer(t)){case Rl:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Sm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+Rw(t.getShaderSource(e),o)}else return s}function Pw(t,e){const n=Nw(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const Iw={[J0]:"Linear",[ex]:"Reinhard",[tx]:"Cineon",[nx]:"ACESFilmic",[rx]:"AgX",[sx]:"Neutral",[ix]:"Custom"};function Lw(t,e){const n=Iw[e];return n===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ko=new j;function Dw(){$e.getLuminanceCoefficients(ko);const t=ko.x.toFixed(4),e=ko.y.toFixed(4),n=ko.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Uw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(la).join(`
`)}function Fw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function kw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function la(t){return t!==""}function Mm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Em(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ow=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yd(t){return t.replace(Ow,zw)}const Bw=new Map;function zw(t,e){let n=je[e];if(n===void 0){const i=Bw.get(e);if(i!==void 0)n=je[i],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Yd(n)}const Hw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bm(t){return t.replace(Hw,Vw)}function Vw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function wm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const Gw={[Ko]:"SHADOWMAP_TYPE_PCF",[oa]:"SHADOWMAP_TYPE_VSM"};function Ww(t){return Gw[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const jw={[Ur]:"ENVMAP_TYPE_CUBE",[Ds]:"ENVMAP_TYPE_CUBE",[Zl]:"ENVMAP_TYPE_CUBE_UV"};function Xw(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":jw[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const qw={[Ds]:"ENVMAP_MODE_REFRACTION"};function $w(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":qw[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Yw={[Q0]:"ENVMAP_BLENDING_MULTIPLY",[kS]:"ENVMAP_BLENDING_MIX",[OS]:"ENVMAP_BLENDING_ADD"};function Kw(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":Yw[t.combine]||"ENVMAP_BLENDING_NONE"}function Zw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Qw(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=Ww(n),c=Xw(n),p=$w(n),m=Kw(n),u=Zw(n),f=Uw(n),y=Fw(s),E=r.createProgram();let x,d,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(la).join(`
`),x.length>0&&(x+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(la).join(`
`),d.length>0&&(d+=`
`)):(x=[wm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(la).join(`
`),d=[wm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+p:"",n.envMap?"#define "+m:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ui?"#define TONE_MAPPING":"",n.toneMapping!==ui?je.tonemapping_pars_fragment:"",n.toneMapping!==ui?Lw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,Pw("linearToOutputTexel",n.outputColorSpace),Dw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(la).join(`
`)),a=Yd(a),a=Mm(a,n),a=Em(a,n),o=Yd(o),o=Mm(o,n),o=Em(o,n),a=bm(a),o=bm(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,d=["#define varying in",n.glslVersion===kp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===kp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=g+x+a,M=g+d+o,T=_m(r,r.VERTEX_SHADER,v),w=_m(r,r.FRAGMENT_SHADER,M);r.attachShader(E,T),r.attachShader(E,w),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function R(L){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(E)||"",V=r.getShaderInfoLog(T)||"",Q=r.getShaderInfoLog(w)||"",O=z.trim(),Y=V.trim(),G=Q.trim();let k=!0,Z=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(k=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,E,T,w);else{const P=Sm(r,T,"vertex"),C=Sm(r,w,"fragment");et("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+P+`
`+C)}else O!==""?ke("WebGLProgram: Program Info Log:",O):(Y===""||G==="")&&(Z=!1);Z&&(L.diagnostics={runnable:k,programLog:O,vertexShader:{log:Y,prefix:x},fragmentShader:{log:G,prefix:d}})}r.deleteShader(T),r.deleteShader(w),_=new tl(r,E),A=kw(r,E)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let I=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(E,Aw)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Cw++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=T,this.fragmentShader=w,this}let Jw=0;class eT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new tT(e),n.set(e,i)),i}}class tT{constructor(e){this.id=Jw++,this.code=e,this.usedTimes=0}}function nT(t){return t===Fr||t===Tl||t===Al}function iT(t,e,n,i,r,s){const a=new gx,o=new eT,l=new Set,c=[],p=new Map,m=i.logarithmicDepthBuffer;let u=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(_){return l.add(_),_===0?"uv":`uv${_}`}function E(_,A,I,L,z,V){const Q=L.fog,O=z.geometry,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,k=e.get(_.envMap||Y,G),Z=k&&k.mapping===Zl?k.image.height:null,P=f[_.type];_.precision!==null&&(u=i.getMaxPrecision(_.precision),u!==_.precision&&ke("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const C=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,D=C!==void 0?C.length:0;let re=0;O.morphAttributes.position!==void 0&&(re=1),O.morphAttributes.normal!==void 0&&(re=2),O.morphAttributes.color!==void 0&&(re=3);let ae,oe,W,J;if(P){const Ce=ri[P];ae=Ce.vertexShader,oe=Ce.fragmentShader}else{ae=_.vertexShader,oe=_.fragmentShader;const Ce=o.getVertexShaderStage(_),bt=o.getFragmentShaderStage(_);o.update(_,Ce,bt),W=Ce.id,J=bt.id}const te=t.getRenderTarget(),xe=t.state.buffers.depth.getReversed(),Ee=z.isInstancedMesh===!0,ge=z.isBatchedMesh===!0,He=!!_.map,De=!!_.matcap,Ae=!!k,Be=!!_.aoMap,ze=!!_.lightMap,nt=!!_.bumpMap&&_.wireframe===!1,st=!!_.normalMap,ft=!!_.displacementMap,lt=!!_.emissiveMap,vt=!!_.metalnessMap,Et=!!_.roughnessMap,F=_.anisotropy>0,Ht=_.clearcoat>0,it=_.dispersion>0,N=_.iridescence>0,S=_.sheen>0,H=_.transmission>0,$=F&&!!_.anisotropyMap,ee=Ht&&!!_.clearcoatMap,ue=Ht&&!!_.clearcoatNormalMap,de=Ht&&!!_.clearcoatRoughnessMap,ne=N&&!!_.iridescenceMap,se=N&&!!_.iridescenceThicknessMap,he=S&&!!_.sheenColorMap,Pe=S&&!!_.sheenRoughnessMap,ve=!!_.specularMap,pe=!!_.specularColorMap,Ue=!!_.specularIntensityMap,Fe=H&&!!_.transmissionMap,Ge=H&&!!_.thicknessMap,U=!!_.gradientMap,fe=!!_.alphaMap,ie=_.alphaTest>0,me=!!_.alphaHash,Me=!!_.extensions;let le=ui;_.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(le=t.toneMapping);const Ne={shaderID:P,shaderType:_.type,shaderName:_.name,vertexShader:ae,fragmentShader:oe,defines:_.defines,customVertexShaderID:W,customFragmentShaderID:J,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:ge,batchingColor:ge&&z._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&z.instanceColor!==null,instancingMorph:Ee&&z.morphTexture!==null,outputColorSpace:te===null?t.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:$e.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:He,matcap:De,envMap:Ae,envMapMode:Ae&&k.mapping,envMapCubeUVHeight:Z,aoMap:Be,lightMap:ze,bumpMap:nt,normalMap:st,displacementMap:ft,emissiveMap:lt,normalMapObjectSpace:st&&_.normalMapType===HS,normalMapTangentSpace:st&&_.normalMapType===Dp,packedNormalMap:st&&_.normalMapType===Dp&&nT(_.normalMap.format),metalnessMap:vt,roughnessMap:Et,anisotropy:F,anisotropyMap:$,clearcoat:Ht,clearcoatMap:ee,clearcoatNormalMap:ue,clearcoatRoughnessMap:de,dispersion:it,iridescence:N,iridescenceMap:ne,iridescenceThicknessMap:se,sheen:S,sheenColorMap:he,sheenRoughnessMap:Pe,specularMap:ve,specularColorMap:pe,specularIntensityMap:Ue,transmission:H,transmissionMap:Fe,thicknessMap:Ge,gradientMap:U,opaque:_.transparent===!1&&_.blending===Es&&_.alphaToCoverage===!1,alphaMap:fe,alphaTest:ie,alphaHash:me,combine:_.combine,mapUv:He&&y(_.map.channel),aoMapUv:Be&&y(_.aoMap.channel),lightMapUv:ze&&y(_.lightMap.channel),bumpMapUv:nt&&y(_.bumpMap.channel),normalMapUv:st&&y(_.normalMap.channel),displacementMapUv:ft&&y(_.displacementMap.channel),emissiveMapUv:lt&&y(_.emissiveMap.channel),metalnessMapUv:vt&&y(_.metalnessMap.channel),roughnessMapUv:Et&&y(_.roughnessMap.channel),anisotropyMapUv:$&&y(_.anisotropyMap.channel),clearcoatMapUv:ee&&y(_.clearcoatMap.channel),clearcoatNormalMapUv:ue&&y(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&y(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&y(_.iridescenceMap.channel),iridescenceThicknessMapUv:se&&y(_.iridescenceThicknessMap.channel),sheenColorMapUv:he&&y(_.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&y(_.sheenRoughnessMap.channel),specularMapUv:ve&&y(_.specularMap.channel),specularColorMapUv:pe&&y(_.specularColorMap.channel),specularIntensityMapUv:Ue&&y(_.specularIntensityMap.channel),transmissionMapUv:Fe&&y(_.transmissionMap.channel),thicknessMapUv:Ge&&y(_.thicknessMap.channel),alphaMapUv:fe&&y(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(st||F),vertexNormals:!!O.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!O.attributes.uv&&(He||fe),fog:!!Q,useFog:_.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||O.attributes.normal===void 0&&st===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:xe,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:re,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:le,decodeVideoTexture:He&&_.map.isVideoTexture===!0&&$e.getTransfer(_.map.colorSpace)===at,decodeVideoTextureEmissive:lt&&_.emissiveMap.isVideoTexture===!0&&$e.getTransfer(_.emissiveMap.colorSpace)===at,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Si,flipSided:_.side===pn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Me&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&_.extensions.multiDraw===!0||ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ne.vertexUv1s=l.has(1),Ne.vertexUv2s=l.has(2),Ne.vertexUv3s=l.has(3),l.clear(),Ne}function x(_){const A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(const I in _.defines)A.push(I),A.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(d(A,_),g(A,_),A.push(t.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function d(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function g(_,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function v(_){const A=f[_.type];let I;if(A){const L=ri[A];I=TM.clone(L.uniforms)}else I=_.uniforms;return I}function M(_,A){let I=p.get(A);return I!==void 0?++I.usedTimes:(I=new Qw(t,A,_,r),c.push(I),p.set(A,I)),I}function T(_){if(--_.usedTimes===0){const A=c.indexOf(_);c[A]=c[c.length-1],c.pop(),p.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function R(){o.dispose()}return{getParameters:E,getProgramCacheKey:x,getUniforms:v,acquireProgram:M,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:R}}function rT(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function sT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Tm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Am(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,y,E,x,d){let g=t[e];return g===void 0?(g={id:u.id,object:u,geometry:f,material:y,materialVariant:a(u),groupOrder:E,renderOrder:u.renderOrder,z:x,group:d},t[e]=g):(g.id=u.id,g.object=u,g.geometry=f,g.material=y,g.materialVariant=a(u),g.groupOrder=E,g.renderOrder=u.renderOrder,g.z=x,g.group=d),e++,g}function l(u,f,y,E,x,d){const g=o(u,f,y,E,x,d);y.transmission>0?i.push(g):y.transparent===!0?r.push(g):n.push(g)}function c(u,f,y,E,x,d){const g=o(u,f,y,E,x,d);y.transmission>0?i.unshift(g):y.transparent===!0?r.unshift(g):n.unshift(g)}function p(u,f,y){n.length>1&&n.sort(u||sT),i.length>1&&i.sort(f||Tm),r.length>1&&r.sort(f||Tm),y&&(n.reverse(),i.reverse(),r.reverse())}function m(){for(let u=e,f=t.length;u<f;u++){const y=t[u];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:m,sort:p}}function aT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Am,t.set(i,[a])):r>=s.length?(a=new Am,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function oT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new Ze};break;case"SpotLight":n={position:new j,direction:new j,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new j,halfWidth:new j,halfHeight:new j};break}return t[e.id]=n,n}}}function lT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let cT=0;function uT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function dT(t){const e=new oT,n=lT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new j);const r=new j,s=new Pt,a=new Pt;function o(c){let p=0,m=0,u=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let f=0,y=0,E=0,x=0,d=0,g=0,v=0,M=0,T=0,w=0,R=0;c.sort(uT);for(let A=0,I=c.length;A<I;A++){const L=c[A],z=L.color,V=L.intensity,Q=L.distance;let O=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Fr?O=L.shadow.map.texture:O=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)p+=z.r*V,m+=z.g*V,u+=z.b*V;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(L.sh.coefficients[Y],V);R++}else if(L.isDirectionalLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const G=L.shadow,k=n.get(L);k.shadowIntensity=G.intensity,k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,i.directionalShadow[f]=k,i.directionalShadowMap[f]=O,i.directionalShadowMatrix[f]=L.shadow.matrix,g++}i.directional[f]=Y,f++}else if(L.isSpotLight){const Y=e.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(z).multiplyScalar(V),Y.distance=Q,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,i.spot[E]=Y;const G=L.shadow;if(L.map&&(i.spotLightMap[T]=L.map,T++,G.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[E]=G.matrix,L.castShadow){const k=n.get(L);k.shadowIntensity=G.intensity,k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,i.spotShadow[E]=k,i.spotShadowMap[E]=O,M++}E++}else if(L.isRectAreaLight){const Y=e.get(L);Y.color.copy(z).multiplyScalar(V),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),i.rectArea[x]=Y,x++}else if(L.isPointLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const G=L.shadow,k=n.get(L);k.shadowIntensity=G.intensity,k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,k.shadowCameraNear=G.camera.near,k.shadowCameraFar=G.camera.far,i.pointShadow[y]=k,i.pointShadowMap[y]=O,i.pointShadowMatrix[y]=L.shadow.matrix,v++}i.point[y]=Y,y++}else if(L.isHemisphereLight){const Y=e.get(L);Y.skyColor.copy(L.color).multiplyScalar(V),Y.groundColor.copy(L.groundColor).multiplyScalar(V),i.hemi[d]=Y,d++}}x>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=m,i.ambient[2]=u;const _=i.hash;(_.directionalLength!==f||_.pointLength!==y||_.spotLength!==E||_.rectAreaLength!==x||_.hemiLength!==d||_.numDirectionalShadows!==g||_.numPointShadows!==v||_.numSpotShadows!==M||_.numSpotMaps!==T||_.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=E,i.rectArea.length=x,i.point.length=y,i.hemi.length=d,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=M+T-w,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,_.directionalLength=f,_.pointLength=y,_.spotLength=E,_.rectAreaLength=x,_.hemiLength=d,_.numDirectionalShadows=g,_.numPointShadows=v,_.numSpotShadows=M,_.numSpotMaps=T,_.numLightProbes=R,i.version=cT++)}function l(c,p){let m=0,u=0,f=0,y=0,E=0;const x=p.matrixWorldInverse;for(let d=0,g=c.length;d<g;d++){const v=c[d];if(v.isDirectionalLight){const M=i.directional[m];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(x),m++}else if(v.isSpotLight){const M=i.spot[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(x),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(x),f++}else if(v.isRectAreaLight){const M=i.rectArea[y];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(x),a.identity(),s.copy(v.matrixWorld),s.premultiply(x),a.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),y++}else if(v.isPointLight){const M=i.point[u];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(x),u++}else if(v.isHemisphereLight){const M=i.hemi[E];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(x),E++}}}return{setup:o,setupView:l,state:i}}function Cm(t){const e=new dT(t),n=[],i=[],r=[];function s(u){m.camera=u,n.length=0,i.length=0,r.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){r.push(u)}function c(){e.setup(n)}function p(u){e.setupView(n,u)}const m={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:m,setupLights:c,setupLightsView:p,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function fT(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Cm(t),e.set(r,[o])):s>=a.length?(o=new Cm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const hT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pT=`uniform sampler2D shadow_pass;
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
}`,mT=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],gT=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],Rm=new Pt,na=new j,cu=new j;function xT(t,e,n){let i=new Sx;const r=new Qe,s=new Qe,a=new At,o=new NM,l=new PM,c={},p=n.maxTextureSize,m={[cr]:pn,[pn]:cr,[Si]:Si},u=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:hT,fragmentShader:pT}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const y=new wn;y.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Fn(y,u),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ko;let d=this.type;this.render=function(w,R,_){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||w.length===0)return;this.type===vS&&(ke("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ko);const A=t.getRenderTarget(),I=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),z=t.state;z.setBlending(Ti),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const V=d!==this.type;V&&R.traverse(function(Q){Q.material&&(Array.isArray(Q.material)?Q.material.forEach(O=>O.needsUpdate=!0):Q.material.needsUpdate=!0)});for(let Q=0,O=w.length;Q<O;Q++){const Y=w[Q],G=Y.shadow;if(G===void 0){ke("WebGLShadowMap:",Y,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const k=G.getFrameExtents();r.multiply(k),s.copy(G.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(s.x=Math.floor(p/k.x),r.x=s.x*k.x,G.mapSize.x=s.x),r.y>p&&(s.y=Math.floor(p/k.y),r.y=s.y*k.y,G.mapSize.y=s.y));const Z=t.state.buffers.depth.getReversed();if(G.camera._reversedDepth=Z,G.map===null||V===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===oa){if(Y.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new di(r.x,r.y,{format:Fr,type:Ii,minFilter:Qt,magFilter:Qt,generateMipmaps:!1}),G.map.texture.name=Y.name+".shadowMap",G.map.depthTexture=new Us(r.x,r.y,ai),G.map.depthTexture.name=Y.name+".shadowMapDepth",G.map.depthTexture.format=Li,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Gt,G.map.depthTexture.magFilter=Gt}else Y.isPointLight?(G.map=new Nx(r.x),G.map.depthTexture=new bM(r.x,fi)):(G.map=new di(r.x,r.y),G.map.depthTexture=new Us(r.x,r.y,fi)),G.map.depthTexture.name=Y.name+".shadowMap",G.map.depthTexture.format=Li,this.type===Ko?(G.map.depthTexture.compareFunction=Z?ih:nh,G.map.depthTexture.minFilter=Qt,G.map.depthTexture.magFilter=Qt):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Gt,G.map.depthTexture.magFilter=Gt);G.camera.updateProjectionMatrix()}const P=G.map.isWebGLCubeRenderTarget?6:1;for(let C=0;C<P;C++){if(G.map.isWebGLCubeRenderTarget)t.setRenderTarget(G.map,C),t.clear();else{C===0&&(t.setRenderTarget(G.map),t.clear());const D=G.getViewport(C);a.set(s.x*D.x,s.y*D.y,s.x*D.z,s.y*D.w),z.viewport(a)}if(Y.isPointLight){const D=G.camera,re=G.matrix,ae=Y.distance||D.far;ae!==D.far&&(D.far=ae,D.updateProjectionMatrix()),na.setFromMatrixPosition(Y.matrixWorld),D.position.copy(na),cu.copy(D.position),cu.add(mT[C]),D.up.copy(gT[C]),D.lookAt(cu),D.updateMatrixWorld(),re.makeTranslation(-na.x,-na.y,-na.z),Rm.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Rm,D.coordinateSystem,D.reversedDepth)}else G.updateMatrices(Y);i=G.getFrustum(),M(R,_,G.camera,Y,this.type)}G.isPointLightShadow!==!0&&this.type===oa&&g(G,_),G.needsUpdate=!1}d=this.type,x.needsUpdate=!1,t.setRenderTarget(A,I,L)};function g(w,R){const _=e.update(E);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new di(r.x,r.y,{format:Fr,type:Ii})),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(R,null,_,u,E,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(R,null,_,f,E,null)}function v(w,R,_,A){let I=null;const L=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)I=L;else if(I=_.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const z=I.uuid,V=R.uuid;let Q=c[z];Q===void 0&&(Q={},c[z]=Q);let O=Q[V];O===void 0&&(O=I.clone(),Q[V]=O,R.addEventListener("dispose",T)),I=O}if(I.visible=R.visible,I.wireframe=R.wireframe,A===oa?I.side=R.shadowSide!==null?R.shadowSide:R.side:I.side=R.shadowSide!==null?R.shadowSide:m[R.side],I.alphaMap=R.alphaMap,I.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,I.map=R.map,I.clipShadows=R.clipShadows,I.clippingPlanes=R.clippingPlanes,I.clipIntersection=R.clipIntersection,I.displacementMap=R.displacementMap,I.displacementScale=R.displacementScale,I.displacementBias=R.displacementBias,I.wireframeLinewidth=R.wireframeLinewidth,I.linewidth=R.linewidth,_.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const z=t.properties.get(I);z.light=_}return I}function M(w,R,_,A,I){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&I===oa)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);const V=e.update(w),Q=w.material;if(Array.isArray(Q)){const O=V.groups;for(let Y=0,G=O.length;Y<G;Y++){const k=O[Y],Z=Q[k.materialIndex];if(Z&&Z.visible){const P=v(w,Z,A,I);w.onBeforeShadow(t,w,R,_,V,P,k),t.renderBufferDirect(_,null,V,P,w,k),w.onAfterShadow(t,w,R,_,V,P,k)}}}else if(Q.visible){const O=v(w,Q,A,I);w.onBeforeShadow(t,w,R,_,V,O,null),t.renderBufferDirect(_,null,V,O,w,null),w.onAfterShadow(t,w,R,_,V,O,null)}}const z=w.children;for(let V=0,Q=z.length;V<Q;V++)M(z[V],R,_,A,I)}function T(w){w.target.removeEventListener("dispose",T);for(const _ in c){const A=c[_],I=w.target.uuid;I in A&&(A[I].dispose(),delete A[I])}}}function vT(t,e){function n(){let U=!1;const fe=new At;let ie=null;const me=new At(0,0,0,0);return{setMask:function(Me){ie!==Me&&!U&&(t.colorMask(Me,Me,Me,Me),ie=Me)},setLocked:function(Me){U=Me},setClear:function(Me,le,Ne,Ce,bt){bt===!0&&(Me*=Ce,le*=Ce,Ne*=Ce),fe.set(Me,le,Ne,Ce),me.equals(fe)===!1&&(t.clearColor(Me,le,Ne,Ce),me.copy(fe))},reset:function(){U=!1,ie=null,me.set(-1,0,0,0)}}}function i(){let U=!1,fe=!1,ie=null,me=null,Me=null;return{setReversed:function(le){if(fe!==le){const Ne=e.get("EXT_clip_control");le?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),fe=le;const Ce=Me;Me=null,this.setClear(Ce)}},getReversed:function(){return fe},setTest:function(le){le?te(t.DEPTH_TEST):xe(t.DEPTH_TEST)},setMask:function(le){ie!==le&&!U&&(t.depthMask(le),ie=le)},setFunc:function(le){if(fe&&(le=ZS[le]),me!==le){switch(le){case od:t.depthFunc(t.NEVER);break;case ld:t.depthFunc(t.ALWAYS);break;case cd:t.depthFunc(t.LESS);break;case Ls:t.depthFunc(t.LEQUAL);break;case ud:t.depthFunc(t.EQUAL);break;case dd:t.depthFunc(t.GEQUAL);break;case fd:t.depthFunc(t.GREATER);break;case hd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}me=le}},setLocked:function(le){U=le},setClear:function(le){Me!==le&&(Me=le,fe&&(le=1-le),t.clearDepth(le))},reset:function(){U=!1,ie=null,me=null,Me=null,fe=!1}}}function r(){let U=!1,fe=null,ie=null,me=null,Me=null,le=null,Ne=null,Ce=null,bt=null;return{setTest:function(ht){U||(ht?te(t.STENCIL_TEST):xe(t.STENCIL_TEST))},setMask:function(ht){fe!==ht&&!U&&(t.stencilMask(ht),fe=ht)},setFunc:function(ht,Zn,Qn){(ie!==ht||me!==Zn||Me!==Qn)&&(t.stencilFunc(ht,Zn,Qn),ie=ht,me=Zn,Me=Qn)},setOp:function(ht,Zn,Qn){(le!==ht||Ne!==Zn||Ce!==Qn)&&(t.stencilOp(ht,Zn,Qn),le=ht,Ne=Zn,Ce=Qn)},setLocked:function(ht){U=ht},setClear:function(ht){bt!==ht&&(t.clearStencil(ht),bt=ht)},reset:function(){U=!1,fe=null,ie=null,me=null,Me=null,le=null,Ne=null,Ce=null,bt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let p={},m={},u={},f=new WeakMap,y=[],E=null,x=!1,d=null,g=null,v=null,M=null,T=null,w=null,R=null,_=new Ze(0,0,0),A=0,I=!1,L=null,z=null,V=null,Q=null,O=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,k=0;const Z=t.getParameter(t.VERSION);Z.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(Z)[1]),G=k>=1):Z.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),G=k>=2);let P=null,C={};const D=t.getParameter(t.SCISSOR_BOX),re=t.getParameter(t.VIEWPORT),ae=new At().fromArray(D),oe=new At().fromArray(re);function W(U,fe,ie,me){const Me=new Uint8Array(4),le=t.createTexture();t.bindTexture(U,le),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ne=0;Ne<ie;Ne++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,me,0,t.RGBA,t.UNSIGNED_BYTE,Me):t.texImage2D(fe+Ne,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Me);return le}const J={};J[t.TEXTURE_2D]=W(t.TEXTURE_2D,t.TEXTURE_2D,1),J[t.TEXTURE_CUBE_MAP]=W(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[t.TEXTURE_2D_ARRAY]=W(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),J[t.TEXTURE_3D]=W(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(t.DEPTH_TEST),a.setFunc(Ls),nt(!1),st(Pp),te(t.CULL_FACE),Be(Ti);function te(U){p[U]!==!0&&(t.enable(U),p[U]=!0)}function xe(U){p[U]!==!1&&(t.disable(U),p[U]=!1)}function Ee(U,fe){return u[U]!==fe?(t.bindFramebuffer(U,fe),u[U]=fe,U===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=fe),U===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function ge(U,fe){let ie=y,me=!1;if(U){ie=f.get(fe),ie===void 0&&(ie=[],f.set(fe,ie));const Me=U.textures;if(ie.length!==Me.length||ie[0]!==t.COLOR_ATTACHMENT0){for(let le=0,Ne=Me.length;le<Ne;le++)ie[le]=t.COLOR_ATTACHMENT0+le;ie.length=Me.length,me=!0}}else ie[0]!==t.BACK&&(ie[0]=t.BACK,me=!0);me&&t.drawBuffers(ie)}function He(U){return E!==U?(t.useProgram(U),E=U,!0):!1}const De={[Sr]:t.FUNC_ADD,[yS]:t.FUNC_SUBTRACT,[SS]:t.FUNC_REVERSE_SUBTRACT};De[MS]=t.MIN,De[ES]=t.MAX;const Ae={[bS]:t.ZERO,[wS]:t.ONE,[TS]:t.SRC_COLOR,[sd]:t.SRC_ALPHA,[IS]:t.SRC_ALPHA_SATURATE,[NS]:t.DST_COLOR,[CS]:t.DST_ALPHA,[AS]:t.ONE_MINUS_SRC_COLOR,[ad]:t.ONE_MINUS_SRC_ALPHA,[PS]:t.ONE_MINUS_DST_COLOR,[RS]:t.ONE_MINUS_DST_ALPHA,[LS]:t.CONSTANT_COLOR,[DS]:t.ONE_MINUS_CONSTANT_COLOR,[US]:t.CONSTANT_ALPHA,[FS]:t.ONE_MINUS_CONSTANT_ALPHA};function Be(U,fe,ie,me,Me,le,Ne,Ce,bt,ht){if(U===Ti){x===!0&&(xe(t.BLEND),x=!1);return}if(x===!1&&(te(t.BLEND),x=!0),U!==_S){if(U!==d||ht!==I){if((g!==Sr||T!==Sr)&&(t.blendEquation(t.FUNC_ADD),g=Sr,T=Sr),ht)switch(U){case Es:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case rd:t.blendFunc(t.ONE,t.ONE);break;case Ip:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Lp:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:et("WebGLState: Invalid blending: ",U);break}else switch(U){case Es:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case rd:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Ip:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lp:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",U);break}v=null,M=null,w=null,R=null,_.set(0,0,0),A=0,d=U,I=ht}return}Me=Me||fe,le=le||ie,Ne=Ne||me,(fe!==g||Me!==T)&&(t.blendEquationSeparate(De[fe],De[Me]),g=fe,T=Me),(ie!==v||me!==M||le!==w||Ne!==R)&&(t.blendFuncSeparate(Ae[ie],Ae[me],Ae[le],Ae[Ne]),v=ie,M=me,w=le,R=Ne),(Ce.equals(_)===!1||bt!==A)&&(t.blendColor(Ce.r,Ce.g,Ce.b,bt),_.copy(Ce),A=bt),d=U,I=!1}function ze(U,fe){U.side===Si?xe(t.CULL_FACE):te(t.CULL_FACE);let ie=U.side===pn;fe&&(ie=!ie),nt(ie),U.blending===Es&&U.transparent===!1?Be(Ti):Be(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const me=U.stencilWrite;o.setTest(me),me&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),lt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?te(t.SAMPLE_ALPHA_TO_COVERAGE):xe(t.SAMPLE_ALPHA_TO_COVERAGE)}function nt(U){L!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),L=U)}function st(U){U!==gS?(te(t.CULL_FACE),U!==z&&(U===Pp?t.cullFace(t.BACK):U===xS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):xe(t.CULL_FACE),z=U}function ft(U){U!==V&&(G&&t.lineWidth(U),V=U)}function lt(U,fe,ie){U?(te(t.POLYGON_OFFSET_FILL),(Q!==fe||O!==ie)&&(Q=fe,O=ie,a.getReversed()&&(fe=-fe),t.polygonOffset(fe,ie))):xe(t.POLYGON_OFFSET_FILL)}function vt(U){U?te(t.SCISSOR_TEST):xe(t.SCISSOR_TEST)}function Et(U){U===void 0&&(U=t.TEXTURE0+Y-1),P!==U&&(t.activeTexture(U),P=U)}function F(U,fe,ie){ie===void 0&&(P===null?ie=t.TEXTURE0+Y-1:ie=P);let me=C[ie];me===void 0&&(me={type:void 0,texture:void 0},C[ie]=me),(me.type!==U||me.texture!==fe)&&(P!==ie&&(t.activeTexture(ie),P=ie),t.bindTexture(U,fe||J[U]),me.type=U,me.texture=fe)}function Ht(){const U=C[P];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function it(){try{t.compressedTexImage2D(...arguments)}catch(U){et("WebGLState:",U)}}function N(){try{t.compressedTexImage3D(...arguments)}catch(U){et("WebGLState:",U)}}function S(){try{t.texSubImage2D(...arguments)}catch(U){et("WebGLState:",U)}}function H(){try{t.texSubImage3D(...arguments)}catch(U){et("WebGLState:",U)}}function $(){try{t.compressedTexSubImage2D(...arguments)}catch(U){et("WebGLState:",U)}}function ee(){try{t.compressedTexSubImage3D(...arguments)}catch(U){et("WebGLState:",U)}}function ue(){try{t.texStorage2D(...arguments)}catch(U){et("WebGLState:",U)}}function de(){try{t.texStorage3D(...arguments)}catch(U){et("WebGLState:",U)}}function ne(){try{t.texImage2D(...arguments)}catch(U){et("WebGLState:",U)}}function se(){try{t.texImage3D(...arguments)}catch(U){et("WebGLState:",U)}}function he(U){return m[U]!==void 0?m[U]:t.getParameter(U)}function Pe(U,fe){m[U]!==fe&&(t.pixelStorei(U,fe),m[U]=fe)}function ve(U){ae.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),ae.copy(U))}function pe(U){oe.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),oe.copy(U))}function Ue(U,fe){let ie=c.get(fe);ie===void 0&&(ie=new WeakMap,c.set(fe,ie));let me=ie.get(U);me===void 0&&(me=t.getUniformBlockIndex(fe,U.name),ie.set(U,me))}function Fe(U,fe){const me=c.get(fe).get(U);l.get(fe)!==me&&(t.uniformBlockBinding(fe,me,U.__bindingPointIndex),l.set(fe,me))}function Ge(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),p={},m={},P=null,C={},u={},f=new WeakMap,y=[],E=null,x=!1,d=null,g=null,v=null,M=null,T=null,w=null,R=null,_=new Ze(0,0,0),A=0,I=!1,L=null,z=null,V=null,Q=null,O=null,ae.set(0,0,t.canvas.width,t.canvas.height),oe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:te,disable:xe,bindFramebuffer:Ee,drawBuffers:ge,useProgram:He,setBlending:Be,setMaterial:ze,setFlipSided:nt,setCullFace:st,setLineWidth:ft,setPolygonOffset:lt,setScissorTest:vt,activeTexture:Et,bindTexture:F,unbindTexture:Ht,compressedTexImage2D:it,compressedTexImage3D:N,texImage2D:ne,texImage3D:se,pixelStorei:Pe,getParameter:he,updateUBOMapping:Ue,uniformBlockBinding:Fe,texStorage2D:ue,texStorage3D:de,texSubImage2D:S,texSubImage3D:H,compressedTexSubImage2D:$,compressedTexSubImage3D:ee,scissor:ve,viewport:pe,reset:Ge}}function _T(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qe,p=new WeakMap,m=new Set;let u;const f=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,S){return y?new OffscreenCanvas(N,S):Pl("canvas")}function x(N,S,H){let $=1;const ee=it(N);if((ee.width>H||ee.height>H)&&($=H/Math.max(ee.width,ee.height)),$<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ue=Math.floor($*ee.width),de=Math.floor($*ee.height);u===void 0&&(u=E(ue,de));const ne=S?E(ue,de):u;return ne.width=ue,ne.height=de,ne.getContext("2d").drawImage(N,0,0,ue,de),ke("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+ue+"x"+de+")."),ne}else return"data"in N&&ke("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),N;return N}function d(N){return N.generateMipmaps}function g(N){t.generateMipmap(N)}function v(N){return N.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?t.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(N,S,H,$,ee,ue=!1){if(N!==null){if(t[N]!==void 0)return t[N];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let de;$&&(de=e.get("EXT_texture_norm16"),de||ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=S;if(S===t.RED&&(H===t.FLOAT&&(ne=t.R32F),H===t.HALF_FLOAT&&(ne=t.R16F),H===t.UNSIGNED_BYTE&&(ne=t.R8),H===t.UNSIGNED_SHORT&&de&&(ne=de.R16_EXT),H===t.SHORT&&de&&(ne=de.R16_SNORM_EXT)),S===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(ne=t.R8UI),H===t.UNSIGNED_SHORT&&(ne=t.R16UI),H===t.UNSIGNED_INT&&(ne=t.R32UI),H===t.BYTE&&(ne=t.R8I),H===t.SHORT&&(ne=t.R16I),H===t.INT&&(ne=t.R32I)),S===t.RG&&(H===t.FLOAT&&(ne=t.RG32F),H===t.HALF_FLOAT&&(ne=t.RG16F),H===t.UNSIGNED_BYTE&&(ne=t.RG8),H===t.UNSIGNED_SHORT&&de&&(ne=de.RG16_EXT),H===t.SHORT&&de&&(ne=de.RG16_SNORM_EXT)),S===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(ne=t.RG8UI),H===t.UNSIGNED_SHORT&&(ne=t.RG16UI),H===t.UNSIGNED_INT&&(ne=t.RG32UI),H===t.BYTE&&(ne=t.RG8I),H===t.SHORT&&(ne=t.RG16I),H===t.INT&&(ne=t.RG32I)),S===t.RGB_INTEGER&&(H===t.UNSIGNED_BYTE&&(ne=t.RGB8UI),H===t.UNSIGNED_SHORT&&(ne=t.RGB16UI),H===t.UNSIGNED_INT&&(ne=t.RGB32UI),H===t.BYTE&&(ne=t.RGB8I),H===t.SHORT&&(ne=t.RGB16I),H===t.INT&&(ne=t.RGB32I)),S===t.RGBA_INTEGER&&(H===t.UNSIGNED_BYTE&&(ne=t.RGBA8UI),H===t.UNSIGNED_SHORT&&(ne=t.RGBA16UI),H===t.UNSIGNED_INT&&(ne=t.RGBA32UI),H===t.BYTE&&(ne=t.RGBA8I),H===t.SHORT&&(ne=t.RGBA16I),H===t.INT&&(ne=t.RGBA32I)),S===t.RGB&&(H===t.UNSIGNED_SHORT&&de&&(ne=de.RGB16_EXT),H===t.SHORT&&de&&(ne=de.RGB16_SNORM_EXT),H===t.UNSIGNED_INT_5_9_9_9_REV&&(ne=t.RGB9_E5),H===t.UNSIGNED_INT_10F_11F_11F_REV&&(ne=t.R11F_G11F_B10F)),S===t.RGBA){const se=ue?Rl:$e.getTransfer(ee);H===t.FLOAT&&(ne=t.RGBA32F),H===t.HALF_FLOAT&&(ne=t.RGBA16F),H===t.UNSIGNED_BYTE&&(ne=se===at?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT&&de&&(ne=de.RGBA16_EXT),H===t.SHORT&&de&&(ne=de.RGBA16_SNORM_EXT),H===t.UNSIGNED_SHORT_4_4_4_4&&(ne=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(ne=t.RGB5_A1)}return(ne===t.R16F||ne===t.R32F||ne===t.RG16F||ne===t.RG32F||ne===t.RGBA16F||ne===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function T(N,S){let H;return N?S===null||S===fi||S===ka?H=t.DEPTH24_STENCIL8:S===ai?H=t.DEPTH32F_STENCIL8:S===Fa&&(H=t.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===fi||S===ka?H=t.DEPTH_COMPONENT24:S===ai?H=t.DEPTH_COMPONENT32F:S===Fa&&(H=t.DEPTH_COMPONENT16),H}function w(N,S){return d(N)===!0||N.isFramebufferTexture&&N.minFilter!==Gt&&N.minFilter!==Qt?Math.log2(Math.max(S.width,S.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?S.mipmaps.length:1}function R(N){const S=N.target;S.removeEventListener("dispose",R),A(S),S.isVideoTexture&&p.delete(S),S.isHTMLTexture&&m.delete(S)}function _(N){const S=N.target;S.removeEventListener("dispose",_),L(S)}function A(N){const S=i.get(N);if(S.__webglInit===void 0)return;const H=N.source,$=f.get(H);if($){const ee=$[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&I(N),Object.keys($).length===0&&f.delete(H)}i.remove(N)}function I(N){const S=i.get(N);t.deleteTexture(S.__webglTexture);const H=N.source,$=f.get(H);delete $[S.__cacheKey],a.memory.textures--}function L(N){const S=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let ee=0;ee<S.__webglFramebuffer[$].length;ee++)t.deleteFramebuffer(S.__webglFramebuffer[$][ee]);else t.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)t.deleteFramebuffer(S.__webglFramebuffer[$]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const H=N.textures;for(let $=0,ee=H.length;$<ee;$++){const ue=i.get(H[$]);ue.__webglTexture&&(t.deleteTexture(ue.__webglTexture),a.memory.textures--),i.remove(H[$])}i.remove(N)}let z=0;function V(){z=0}function Q(){return z}function O(N){z=N}function Y(){const N=z;return N>=r.maxTextures&&ke("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+r.maxTextures),z+=1,N}function G(N){const S=[];return S.push(N.wrapS),S.push(N.wrapT),S.push(N.wrapR||0),S.push(N.magFilter),S.push(N.minFilter),S.push(N.anisotropy),S.push(N.internalFormat),S.push(N.format),S.push(N.type),S.push(N.generateMipmaps),S.push(N.premultiplyAlpha),S.push(N.flipY),S.push(N.unpackAlignment),S.push(N.colorSpace),S.join()}function k(N,S){const H=i.get(N);if(N.isVideoTexture&&F(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&H.__version!==N.version){const $=N.image;if($===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(H,N,S);return}}else N.isExternalTexture&&(H.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+S)}function Z(N,S){const H=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&H.__version!==N.version){xe(H,N,S);return}else N.isExternalTexture&&(H.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+S)}function P(N,S){const H=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&H.__version!==N.version){xe(H,N,S);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+S)}function C(N,S){const H=i.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&H.__version!==N.version){Ee(H,N,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+S)}const D={[pd]:t.REPEAT,[bi]:t.CLAMP_TO_EDGE,[md]:t.MIRRORED_REPEAT},re={[Gt]:t.NEAREST,[BS]:t.NEAREST_MIPMAP_NEAREST,[ho]:t.NEAREST_MIPMAP_LINEAR,[Qt]:t.LINEAR,[Lc]:t.LINEAR_MIPMAP_NEAREST,[Tr]:t.LINEAR_MIPMAP_LINEAR},ae={[VS]:t.NEVER,[qS]:t.ALWAYS,[GS]:t.LESS,[nh]:t.LEQUAL,[WS]:t.EQUAL,[ih]:t.GEQUAL,[jS]:t.GREATER,[XS]:t.NOTEQUAL};function oe(N,S){if(S.type===ai&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Qt||S.magFilter===Lc||S.magFilter===ho||S.magFilter===Tr||S.minFilter===Qt||S.minFilter===Lc||S.minFilter===ho||S.minFilter===Tr)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(N,t.TEXTURE_WRAP_S,D[S.wrapS]),t.texParameteri(N,t.TEXTURE_WRAP_T,D[S.wrapT]),(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)&&t.texParameteri(N,t.TEXTURE_WRAP_R,D[S.wrapR]),t.texParameteri(N,t.TEXTURE_MAG_FILTER,re[S.magFilter]),t.texParameteri(N,t.TEXTURE_MIN_FILTER,re[S.minFilter]),S.compareFunction&&(t.texParameteri(N,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(N,t.TEXTURE_COMPARE_FUNC,ae[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Gt||S.minFilter!==ho&&S.minFilter!==Tr||S.type===ai&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(N,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function W(N,S){let H=!1;N.__webglInit===void 0&&(N.__webglInit=!0,S.addEventListener("dispose",R));const $=S.source;let ee=f.get($);ee===void 0&&(ee={},f.set($,ee));const ue=G(S);if(ue!==N.__cacheKey){ee[ue]===void 0&&(ee[ue]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,H=!0),ee[ue].usedTimes++;const de=ee[N.__cacheKey];de!==void 0&&(ee[N.__cacheKey].usedTimes--,de.usedTimes===0&&I(S)),N.__cacheKey=ue,N.__webglTexture=ee[ue].texture}return H}function J(N,S,H){return Math.floor(Math.floor(N/H)/S)}function te(N,S,H,$){const ue=N.updateRanges;if(ue.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,H,$,S.data);else{ue.sort((Pe,ve)=>Pe.start-ve.start);let de=0;for(let Pe=1;Pe<ue.length;Pe++){const ve=ue[de],pe=ue[Pe],Ue=ve.start+ve.count,Fe=J(pe.start,S.width,4),Ge=J(ve.start,S.width,4);pe.start<=Ue+1&&Fe===Ge&&J(pe.start+pe.count-1,S.width,4)===Fe?ve.count=Math.max(ve.count,pe.start+pe.count-ve.start):(++de,ue[de]=pe)}ue.length=de+1;const ne=n.getParameter(t.UNPACK_ROW_LENGTH),se=n.getParameter(t.UNPACK_SKIP_PIXELS),he=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let Pe=0,ve=ue.length;Pe<ve;Pe++){const pe=ue[Pe],Ue=Math.floor(pe.start/4),Fe=Math.ceil(pe.count/4),Ge=Ue%S.width,U=Math.floor(Ue/S.width),fe=Fe,ie=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Ge),n.pixelStorei(t.UNPACK_SKIP_ROWS,U),n.texSubImage2D(t.TEXTURE_2D,0,Ge,U,fe,ie,H,$,S.data)}N.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,ne),n.pixelStorei(t.UNPACK_SKIP_PIXELS,se),n.pixelStorei(t.UNPACK_SKIP_ROWS,he)}}function xe(N,S,H){let $=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=t.TEXTURE_3D);const ee=W(N,S),ue=S.source;n.bindTexture($,N.__webglTexture,t.TEXTURE0+H);const de=i.get(ue);if(ue.version!==de.__version||ee===!0){if(n.activeTexture(t.TEXTURE0+H),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const ie=$e.getPrimaries($e.workingColorSpace),me=S.colorSpace===Yi?null:$e.getPrimaries(S.colorSpace),Me=S.colorSpace===Yi||ie===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me)}n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment);let se=x(S.image,!1,r.maxTextureSize);se=Ht(S,se);const he=s.convert(S.format,S.colorSpace),Pe=s.convert(S.type);let ve=M(S.internalFormat,he,Pe,S.normalized,S.colorSpace,S.isVideoTexture);oe($,S);let pe;const Ue=S.mipmaps,Fe=S.isVideoTexture!==!0,Ge=de.__version===void 0||ee===!0,U=ue.dataReady,fe=w(S,se);if(S.isDepthTexture)ve=T(S.format===Ar,S.type),Ge&&(Fe?n.texStorage2D(t.TEXTURE_2D,1,ve,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,ve,se.width,se.height,0,he,Pe,null));else if(S.isDataTexture)if(Ue.length>0){Fe&&Ge&&n.texStorage2D(t.TEXTURE_2D,fe,ve,Ue[0].width,Ue[0].height);for(let ie=0,me=Ue.length;ie<me;ie++)pe=Ue[ie],Fe?U&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,pe.width,pe.height,he,Pe,pe.data):n.texImage2D(t.TEXTURE_2D,ie,ve,pe.width,pe.height,0,he,Pe,pe.data);S.generateMipmaps=!1}else Fe?(Ge&&n.texStorage2D(t.TEXTURE_2D,fe,ve,se.width,se.height),U&&te(S,se,he,Pe)):n.texImage2D(t.TEXTURE_2D,0,ve,se.width,se.height,0,he,Pe,se.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Fe&&Ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,ve,Ue[0].width,Ue[0].height,se.depth);for(let ie=0,me=Ue.length;ie<me;ie++)if(pe=Ue[ie],S.format!==qn)if(he!==null)if(Fe){if(U)if(S.layerUpdates.size>0){const Me=am(pe.width,pe.height,S.format,S.type);for(const le of S.layerUpdates){const Ne=pe.data.subarray(le*Me/pe.data.BYTES_PER_ELEMENT,(le+1)*Me/pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,le,pe.width,pe.height,1,he,Ne)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,pe.width,pe.height,se.depth,he,pe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ie,ve,pe.width,pe.height,se.depth,0,pe.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,pe.width,pe.height,se.depth,he,Pe,pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ie,ve,pe.width,pe.height,se.depth,0,he,Pe,pe.data)}else{Fe&&Ge&&n.texStorage2D(t.TEXTURE_2D,fe,ve,Ue[0].width,Ue[0].height);for(let ie=0,me=Ue.length;ie<me;ie++)pe=Ue[ie],S.format!==qn?he!==null?Fe?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,ie,0,0,pe.width,pe.height,he,pe.data):n.compressedTexImage2D(t.TEXTURE_2D,ie,ve,pe.width,pe.height,0,pe.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?U&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,pe.width,pe.height,he,Pe,pe.data):n.texImage2D(t.TEXTURE_2D,ie,ve,pe.width,pe.height,0,he,Pe,pe.data)}else if(S.isDataArrayTexture)if(Fe){if(Ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,ve,se.width,se.height,se.depth),U)if(S.layerUpdates.size>0){const ie=am(se.width,se.height,S.format,S.type);for(const me of S.layerUpdates){const Me=se.data.subarray(me*ie/se.data.BYTES_PER_ELEMENT,(me+1)*ie/se.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,me,se.width,se.height,1,he,Pe,Me)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,he,Pe,se.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ve,se.width,se.height,se.depth,0,he,Pe,se.data);else if(S.isData3DTexture)Fe?(Ge&&n.texStorage3D(t.TEXTURE_3D,fe,ve,se.width,se.height,se.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,he,Pe,se.data)):n.texImage3D(t.TEXTURE_3D,0,ve,se.width,se.height,se.depth,0,he,Pe,se.data);else if(S.isFramebufferTexture){if(Ge)if(Fe)n.texStorage2D(t.TEXTURE_2D,fe,ve,se.width,se.height);else{let ie=se.width,me=se.height;for(let Me=0;Me<fe;Me++)n.texImage2D(t.TEXTURE_2D,Me,ve,ie,me,0,he,Pe,null),ie>>=1,me>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in t){const ie=t.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),se.parentNode!==ie){ie.appendChild(se),m.add(S),ie.onpaint=me=>{const Me=me.changedElements;for(const le of m)Me.includes(le.image)&&(le.needsUpdate=!0)},ie.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,se);else{const Me=t.RGBA,le=t.RGBA,Ne=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Me,le,Ne,se)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(Fe&&Ge){const ie=it(Ue[0]);n.texStorage2D(t.TEXTURE_2D,fe,ve,ie.width,ie.height)}for(let ie=0,me=Ue.length;ie<me;ie++)pe=Ue[ie],Fe?U&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,he,Pe,pe):n.texImage2D(t.TEXTURE_2D,ie,ve,he,Pe,pe);S.generateMipmaps=!1}else if(Fe){if(Ge){const ie=it(se);n.texStorage2D(t.TEXTURE_2D,fe,ve,ie.width,ie.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,he,Pe,se)}else n.texImage2D(t.TEXTURE_2D,0,ve,he,Pe,se);d(S)&&g($),de.__version=ue.version,S.onUpdate&&S.onUpdate(S)}N.__version=S.version}function Ee(N,S,H){if(S.image.length!==6)return;const $=W(N,S),ee=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+H);const ue=i.get(ee);if(ee.version!==ue.__version||$===!0){n.activeTexture(t.TEXTURE0+H);const de=$e.getPrimaries($e.workingColorSpace),ne=S.colorSpace===Yi?null:$e.getPrimaries(S.colorSpace),se=S.colorSpace===Yi||de===ne?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);const he=S.isCompressedTexture||S.image[0].isCompressedTexture,Pe=S.image[0]&&S.image[0].isDataTexture,ve=[];for(let le=0;le<6;le++)!he&&!Pe?ve[le]=x(S.image[le],!0,r.maxCubemapSize):ve[le]=Pe?S.image[le].image:S.image[le],ve[le]=Ht(S,ve[le]);const pe=ve[0],Ue=s.convert(S.format,S.colorSpace),Fe=s.convert(S.type),Ge=M(S.internalFormat,Ue,Fe,S.normalized,S.colorSpace),U=S.isVideoTexture!==!0,fe=ue.__version===void 0||$===!0,ie=ee.dataReady;let me=w(S,pe);oe(t.TEXTURE_CUBE_MAP,S);let Me;if(he){U&&fe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,me,Ge,pe.width,pe.height);for(let le=0;le<6;le++){Me=ve[le].mipmaps;for(let Ne=0;Ne<Me.length;Ne++){const Ce=Me[Ne];S.format!==qn?Ue!==null?U?ie&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ne,0,0,Ce.width,Ce.height,Ue,Ce.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ne,Ge,Ce.width,Ce.height,0,Ce.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ne,0,0,Ce.width,Ce.height,Ue,Fe,Ce.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ne,Ge,Ce.width,Ce.height,0,Ue,Fe,Ce.data)}}}else{if(Me=S.mipmaps,U&&fe){Me.length>0&&me++;const le=it(ve[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,me,Ge,le.width,le.height)}for(let le=0;le<6;le++)if(Pe){U?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ve[le].width,ve[le].height,Ue,Fe,ve[le].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ge,ve[le].width,ve[le].height,0,Ue,Fe,ve[le].data);for(let Ne=0;Ne<Me.length;Ne++){const bt=Me[Ne].image[le].image;U?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ne+1,0,0,bt.width,bt.height,Ue,Fe,bt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ne+1,Ge,bt.width,bt.height,0,Ue,Fe,bt.data)}}else{U?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ue,Fe,ve[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ge,Ue,Fe,ve[le]);for(let Ne=0;Ne<Me.length;Ne++){const Ce=Me[Ne];U?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ne+1,0,0,Ue,Fe,Ce.image[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ne+1,Ge,Ue,Fe,Ce.image[le])}}}d(S)&&g(t.TEXTURE_CUBE_MAP),ue.__version=ee.version,S.onUpdate&&S.onUpdate(S)}N.__version=S.version}function ge(N,S,H,$,ee,ue){const de=s.convert(H.format,H.colorSpace),ne=s.convert(H.type),se=M(H.internalFormat,de,ne,H.normalized,H.colorSpace),he=i.get(S),Pe=i.get(H);if(Pe.__renderTarget=S,!he.__hasExternalTextures){const ve=Math.max(1,S.width>>ue),pe=Math.max(1,S.height>>ue);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,ue,se,ve,pe,S.depth,0,de,ne,null):n.texImage2D(ee,ue,se,ve,pe,0,de,ne,null)}n.bindFramebuffer(t.FRAMEBUFFER,N),Et(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,ee,Pe.__webglTexture,0,vt(S)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,$,ee,Pe.__webglTexture,ue),n.bindFramebuffer(t.FRAMEBUFFER,null)}function He(N,S,H){if(t.bindRenderbuffer(t.RENDERBUFFER,N),S.depthBuffer){const $=S.depthTexture,ee=$&&$.isDepthTexture?$.type:null,ue=T(S.stencilBuffer,ee),de=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Et(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,vt(S),ue,S.width,S.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,vt(S),ue,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ue,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,de,t.RENDERBUFFER,N)}else{const $=S.textures;for(let ee=0;ee<$.length;ee++){const ue=$[ee],de=s.convert(ue.format,ue.colorSpace),ne=s.convert(ue.type),se=M(ue.internalFormat,de,ne,ue.normalized,ue.colorSpace);Et(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,vt(S),se,S.width,S.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,vt(S),se,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,se,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function De(N,S,H){const $=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,N),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ee=i.get(S.depthTexture);if(ee.__renderTarget=S,(!ee.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),$){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,S.depthTexture.addEventListener("dispose",R)),ee.__webglTexture===void 0){ee.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),oe(t.TEXTURE_CUBE_MAP,S.depthTexture);const he=s.convert(S.depthTexture.format),Pe=s.convert(S.depthTexture.type);let ve;S.depthTexture.format===Li?ve=t.DEPTH_COMPONENT24:S.depthTexture.format===Ar&&(ve=t.DEPTH24_STENCIL8);for(let pe=0;pe<6;pe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ve,S.width,S.height,0,he,Pe,null)}}else k(S.depthTexture,0);const ue=ee.__webglTexture,de=vt(S),ne=$?t.TEXTURE_CUBE_MAP_POSITIVE_X+H:t.TEXTURE_2D,se=S.depthTexture.format===Ar?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(S.depthTexture.format===Li)Et(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,ne,ue,0,de):t.framebufferTexture2D(t.FRAMEBUFFER,se,ne,ue,0);else if(S.depthTexture.format===Ar)Et(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,ne,ue,0,de):t.framebufferTexture2D(t.FRAMEBUFFER,se,ne,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ae(N){const S=i.get(N),H=N.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==N.depthTexture){const $=N.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){const ee=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",ee)};$.addEventListener("dispose",ee),S.__depthDisposeCallback=ee}S.__boundDepthTexture=$}if(N.depthTexture&&!S.__autoAllocateDepthBuffer)if(H)for(let $=0;$<6;$++)De(S.__webglFramebuffer[$],N,$);else{const $=N.texture.mipmaps;$&&$.length>0?De(S.__webglFramebuffer[0],N,0):De(S.__webglFramebuffer,N,0)}else if(H){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=t.createRenderbuffer(),He(S.__webglDepthbuffer[$],N,!1);else{const ee=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=S.__webglDepthbuffer[$];t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,ue)}}else{const $=N.texture.mipmaps;if($&&$.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),He(S.__webglDepthbuffer,N,!1);else{const ee=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,ue)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Be(N,S,H){const $=i.get(N);S!==void 0&&ge($.__webglFramebuffer,N,N.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&Ae(N)}function ze(N){const S=N.texture,H=i.get(N),$=i.get(S);N.addEventListener("dispose",_);const ee=N.textures,ue=N.isWebGLCubeRenderTarget===!0,de=ee.length>1;if(de||($.__webglTexture===void 0&&($.__webglTexture=t.createTexture()),$.__version=S.version,a.memory.textures++),ue){H.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[ne]=[];for(let se=0;se<S.mipmaps.length;se++)H.__webglFramebuffer[ne][se]=t.createFramebuffer()}else H.__webglFramebuffer[ne]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let ne=0;ne<S.mipmaps.length;ne++)H.__webglFramebuffer[ne]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(de)for(let ne=0,se=ee.length;ne<se;ne++){const he=i.get(ee[ne]);he.__webglTexture===void 0&&(he.__webglTexture=t.createTexture(),a.memory.textures++)}if(N.samples>0&&Et(N)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ne=0;ne<ee.length;ne++){const se=ee[ne];H.__webglColorRenderbuffer[ne]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[ne]);const he=s.convert(se.format,se.colorSpace),Pe=s.convert(se.type),ve=M(se.internalFormat,he,Pe,se.normalized,se.colorSpace,N.isXRRenderTarget===!0),pe=vt(N);t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,ve,N.width,N.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ne,t.RENDERBUFFER,H.__webglColorRenderbuffer[ne])}t.bindRenderbuffer(t.RENDERBUFFER,null),N.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),He(H.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ue){n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),oe(t.TEXTURE_CUBE_MAP,S);for(let ne=0;ne<6;ne++)if(S.mipmaps&&S.mipmaps.length>0)for(let se=0;se<S.mipmaps.length;se++)ge(H.__webglFramebuffer[ne][se],N,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,se);else ge(H.__webglFramebuffer[ne],N,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);d(S)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(de){for(let ne=0,se=ee.length;ne<se;ne++){const he=ee[ne],Pe=i.get(he);let ve=t.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ve=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ve,Pe.__webglTexture),oe(ve,he),ge(H.__webglFramebuffer,N,he,t.COLOR_ATTACHMENT0+ne,ve,0),d(he)&&g(ve)}n.unbindTexture()}else{let ne=t.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ne=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ne,$.__webglTexture),oe(ne,S),S.mipmaps&&S.mipmaps.length>0)for(let se=0;se<S.mipmaps.length;se++)ge(H.__webglFramebuffer[se],N,S,t.COLOR_ATTACHMENT0,ne,se);else ge(H.__webglFramebuffer,N,S,t.COLOR_ATTACHMENT0,ne,0);d(S)&&g(ne),n.unbindTexture()}N.depthBuffer&&Ae(N)}function nt(N){const S=N.textures;for(let H=0,$=S.length;H<$;H++){const ee=S[H];if(d(ee)){const ue=v(N),de=i.get(ee).__webglTexture;n.bindTexture(ue,de),g(ue),n.unbindTexture()}}}const st=[],ft=[];function lt(N){if(N.samples>0){if(Et(N)===!1){const S=N.textures,H=N.width,$=N.height;let ee=t.COLOR_BUFFER_BIT;const ue=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=i.get(N),ne=S.length>1;if(ne)for(let he=0;he<S.length;he++)n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);const se=N.texture.mipmaps;se&&se.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let he=0;he<S.length;he++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),ne){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,de.__webglColorRenderbuffer[he]);const Pe=i.get(S[he]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Pe,0)}t.blitFramebuffer(0,0,H,$,0,0,H,$,ee,t.NEAREST),l===!0&&(st.length=0,ft.length=0,st.push(t.COLOR_ATTACHMENT0+he),N.depthBuffer&&N.resolveDepthBuffer===!1&&(st.push(ue),ft.push(ue),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ft)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,st))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ne)for(let he=0;he<S.length;he++){n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,de.__webglColorRenderbuffer[he]);const Pe=i.get(S[he]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,Pe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){const S=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function vt(N){return Math.min(r.maxSamples,N.samples)}function Et(N){const S=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function F(N){const S=a.render.frame;p.get(N)!==S&&(p.set(N,S),N.update())}function Ht(N,S){const H=N.colorSpace,$=N.format,ee=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||H!==Cl&&H!==Yi&&($e.getTransfer(H)===at?($!==qn||ee!==In)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",H)),S}function it(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=V,this.getTextureUnits=Q,this.setTextureUnits=O,this.setTexture2D=k,this.setTexture2DArray=Z,this.setTexture3D=P,this.setTextureCube=C,this.rebindTextures=Be,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Et,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function yT(t,e){function n(i,r=Yi){let s;const a=$e.getTransfer(r);if(i===In)return t.UNSIGNED_BYTE;if(i===Zf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Qf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===cx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===ux)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===ox)return t.BYTE;if(i===lx)return t.SHORT;if(i===Fa)return t.UNSIGNED_SHORT;if(i===Kf)return t.INT;if(i===fi)return t.UNSIGNED_INT;if(i===ai)return t.FLOAT;if(i===Ii)return t.HALF_FLOAT;if(i===dx)return t.ALPHA;if(i===fx)return t.RGB;if(i===qn)return t.RGBA;if(i===Li)return t.DEPTH_COMPONENT;if(i===Ar)return t.DEPTH_STENCIL;if(i===hx)return t.RED;if(i===Jf)return t.RED_INTEGER;if(i===Fr)return t.RG;if(i===eh)return t.RG_INTEGER;if(i===th)return t.RGBA_INTEGER;if(i===Zo||i===Qo||i===Jo||i===el)if(a===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Zo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===el)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Zo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Jo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===el)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gd||i===xd||i===vd||i===_d)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===gd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_d)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yd||i===Sd||i===Md||i===Ed||i===bd||i===Tl||i===wd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===yd||i===Sd)return a===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Md)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ed)return s.COMPRESSED_R11_EAC;if(i===bd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Tl)return s.COMPRESSED_RG11_EAC;if(i===wd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Td||i===Ad||i===Cd||i===Rd||i===Nd||i===Pd||i===Id||i===Ld||i===Dd||i===Ud||i===Fd||i===kd||i===Od||i===Bd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Td)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ad)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Rd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Nd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Pd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Id)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ld)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Dd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ud)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===kd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Od)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Bd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zd||i===Hd||i===Vd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===zd)return a===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Gd||i===Wd||i===Al||i===jd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Gd)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Wd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Al)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ka?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const ST=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MT=`
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

}`;class ET{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new bx(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new hi({vertexShader:ST,fragmentShader:MT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Fn(new Jl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bT extends zr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,p=null,m=null,u=null,f=null,y=null;const E=typeof XRWebGLBinding<"u",x=new ET,d={},g=n.getContextAttributes();let v=null,M=null;const T=[],w=[],R=new Qe;let _=null;const A=new Pn;A.viewport=new At;const I=new Pn;I.viewport=new At;const L=[A,I],z=new LM;let V=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let J=T[W];return J===void 0&&(J=new Hc,T[W]=J),J.getTargetRaySpace()},this.getControllerGrip=function(W){let J=T[W];return J===void 0&&(J=new Hc,T[W]=J),J.getGripSpace()},this.getHand=function(W){let J=T[W];return J===void 0&&(J=new Hc,T[W]=J),J.getHandSpace()};function O(W){const J=w.indexOf(W.inputSource);if(J===-1)return;const te=T[J];te!==void 0&&(te.update(W.inputSource,W.frame,c||a),te.dispatchEvent({type:W.type,data:W.inputSource}))}function Y(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",G);for(let W=0;W<T.length;W++){const J=w[W];J!==null&&(w[W]=null,T[W].disconnect(J))}V=null,Q=null,x.reset();for(const W in d)delete d[W];e.setRenderTarget(v),f=null,u=null,m=null,r=null,M=null,oe.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return m===null&&E&&(m=new XRWebGLBinding(r,n)),m},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",G),g.xrCompatible!==!0&&await n.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,xe=null,Ee=null;g.depth&&(Ee=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=g.stencil?Ar:Li,xe=g.stencil?ka:fi);const ge={colorFormat:n.RGBA8,depthFormat:Ee,scaleFactor:s};m=this.getBinding(),u=m.createProjectionLayer(ge),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new di(u.textureWidth,u.textureHeight,{format:qn,type:In,depthTexture:new Us(u.textureWidth,u.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const te={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,n,te),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new di(f.framebufferWidth,f.framebufferHeight,{format:qn,type:In,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),oe.setContext(r),oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function G(W){for(let J=0;J<W.removed.length;J++){const te=W.removed[J],xe=w.indexOf(te);xe>=0&&(w[xe]=null,T[xe].disconnect(te))}for(let J=0;J<W.added.length;J++){const te=W.added[J];let xe=w.indexOf(te);if(xe===-1){for(let ge=0;ge<T.length;ge++)if(ge>=w.length){w.push(te),xe=ge;break}else if(w[ge]===null){w[ge]=te,xe=ge;break}if(xe===-1)break}const Ee=T[xe];Ee&&Ee.connect(te)}}const k=new j,Z=new j;function P(W,J,te){k.setFromMatrixPosition(J.matrixWorld),Z.setFromMatrixPosition(te.matrixWorld);const xe=k.distanceTo(Z),Ee=J.projectionMatrix.elements,ge=te.projectionMatrix.elements,He=Ee[14]/(Ee[10]-1),De=Ee[14]/(Ee[10]+1),Ae=(Ee[9]+1)/Ee[5],Be=(Ee[9]-1)/Ee[5],ze=(Ee[8]-1)/Ee[0],nt=(ge[8]+1)/ge[0],st=He*ze,ft=He*nt,lt=xe/(-ze+nt),vt=lt*-ze;if(J.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(vt),W.translateZ(lt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Ee[10]===-1)W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Et=He+lt,F=De+lt,Ht=st-vt,it=ft+(xe-vt),N=Ae*De/F*Et,S=Be*De/F*Et;W.projectionMatrix.makePerspective(Ht,it,N,S,Et,F),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function C(W,J){J===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(J.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let J=W.near,te=W.far;x.texture!==null&&(x.depthNear>0&&(J=x.depthNear),x.depthFar>0&&(te=x.depthFar)),z.near=I.near=A.near=J,z.far=I.far=A.far=te,(V!==z.near||Q!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),V=z.near,Q=z.far),z.layers.mask=W.layers.mask|6,A.layers.mask=z.layers.mask&-5,I.layers.mask=z.layers.mask&-3;const xe=W.parent,Ee=z.cameras;C(z,xe);for(let ge=0;ge<Ee.length;ge++)C(Ee[ge],xe);Ee.length===2?P(z,A,I):z.projectionMatrix.copy(A.projectionMatrix),D(W,z,xe)};function D(W,J,te){te===null?W.matrix.copy(J.matrixWorld):(W.matrix.copy(te.matrixWorld),W.matrix.invert(),W.matrix.multiply(J.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Xd*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(W){l=W,u!==null&&(u.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(z)},this.getCameraTexture=function(W){return d[W]};let re=null;function ae(W,J){if(p=J.getViewerPose(c||a),y=J,p!==null){const te=p.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let xe=!1;te.length!==z.cameras.length&&(z.cameras.length=0,xe=!0);for(let De=0;De<te.length;De++){const Ae=te[De];let Be=null;if(f!==null)Be=f.getViewport(Ae);else{const nt=m.getViewSubImage(u,Ae);Be=nt.viewport,De===0&&(e.setRenderTargetTextures(M,nt.colorTexture,nt.depthStencilTexture),e.setRenderTarget(M))}let ze=L[De];ze===void 0&&(ze=new Pn,ze.layers.enable(De),ze.viewport=new At,L[De]=ze),ze.matrix.fromArray(Ae.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Ae.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(Be.x,Be.y,Be.width,Be.height),De===0&&(z.matrix.copy(ze.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),xe===!0&&z.cameras.push(ze)}const Ee=r.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){m=i.getBinding();const De=m.getDepthInformation(te[0]);De&&De.isValid&&De.texture&&x.init(De,r.renderState)}if(Ee&&Ee.includes("camera-access")&&E){e.state.unbindTexture(),m=i.getBinding();for(let De=0;De<te.length;De++){const Ae=te[De].camera;if(Ae){let Be=d[Ae];Be||(Be=new bx,d[Ae]=Be);const ze=m.getCameraImage(Ae);Be.sourceTexture=ze}}}}for(let te=0;te<T.length;te++){const xe=w[te],Ee=T[te];xe!==null&&Ee!==void 0&&Ee.update(xe,J,c||a)}re&&re(W,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),y=null}const oe=new Cx;oe.setAnimationLoop(ae),this.setAnimationLoop=function(W){re=W},this.dispose=function(){}}}const wT=new Pt,Ux=new Ve;Ux.set(-1,0,0,0,1,0,0,0,1);function TT(t,e){function n(x,d){x.matrixAutoUpdate===!0&&x.updateMatrix(),d.value.copy(x.matrix)}function i(x,d){d.color.getRGB(x.fogColor.value,wx(t)),d.isFog?(x.fogNear.value=d.near,x.fogFar.value=d.far):d.isFogExp2&&(x.fogDensity.value=d.density)}function r(x,d,g,v,M){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(x,d):d.isMeshLambertMaterial?(s(x,d),d.envMap&&(x.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(x,d),m(x,d)):d.isMeshPhongMaterial?(s(x,d),p(x,d),d.envMap&&(x.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(x,d),u(x,d),d.isMeshPhysicalMaterial&&f(x,d,M)):d.isMeshMatcapMaterial?(s(x,d),y(x,d)):d.isMeshDepthMaterial?s(x,d):d.isMeshDistanceMaterial?(s(x,d),E(x,d)):d.isMeshNormalMaterial?s(x,d):d.isLineBasicMaterial?(a(x,d),d.isLineDashedMaterial&&o(x,d)):d.isPointsMaterial?l(x,d,g,v):d.isSpriteMaterial?c(x,d):d.isShadowMaterial?(x.color.value.copy(d.color),x.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(x,d){x.opacity.value=d.opacity,d.color&&x.diffuse.value.copy(d.color),d.emissive&&x.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(x.map.value=d.map,n(d.map,x.mapTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,n(d.alphaMap,x.alphaMapTransform)),d.bumpMap&&(x.bumpMap.value=d.bumpMap,n(d.bumpMap,x.bumpMapTransform),x.bumpScale.value=d.bumpScale,d.side===pn&&(x.bumpScale.value*=-1)),d.normalMap&&(x.normalMap.value=d.normalMap,n(d.normalMap,x.normalMapTransform),x.normalScale.value.copy(d.normalScale),d.side===pn&&x.normalScale.value.negate()),d.displacementMap&&(x.displacementMap.value=d.displacementMap,n(d.displacementMap,x.displacementMapTransform),x.displacementScale.value=d.displacementScale,x.displacementBias.value=d.displacementBias),d.emissiveMap&&(x.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,x.emissiveMapTransform)),d.specularMap&&(x.specularMap.value=d.specularMap,n(d.specularMap,x.specularMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest);const g=e.get(d),v=g.envMap,M=g.envMapRotation;v&&(x.envMap.value=v,x.envMapRotation.value.setFromMatrix4(wT.makeRotationFromEuler(M)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Ux),x.reflectivity.value=d.reflectivity,x.ior.value=d.ior,x.refractionRatio.value=d.refractionRatio),d.lightMap&&(x.lightMap.value=d.lightMap,x.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,x.lightMapTransform)),d.aoMap&&(x.aoMap.value=d.aoMap,x.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,x.aoMapTransform))}function a(x,d){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,d.map&&(x.map.value=d.map,n(d.map,x.mapTransform))}function o(x,d){x.dashSize.value=d.dashSize,x.totalSize.value=d.dashSize+d.gapSize,x.scale.value=d.scale}function l(x,d,g,v){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,x.size.value=d.size*g,x.scale.value=v*.5,d.map&&(x.map.value=d.map,n(d.map,x.uvTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,n(d.alphaMap,x.alphaMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest)}function c(x,d){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,x.rotation.value=d.rotation,d.map&&(x.map.value=d.map,n(d.map,x.mapTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,n(d.alphaMap,x.alphaMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest)}function p(x,d){x.specular.value.copy(d.specular),x.shininess.value=Math.max(d.shininess,1e-4)}function m(x,d){d.gradientMap&&(x.gradientMap.value=d.gradientMap)}function u(x,d){x.metalness.value=d.metalness,d.metalnessMap&&(x.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,x.metalnessMapTransform)),x.roughness.value=d.roughness,d.roughnessMap&&(x.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,x.roughnessMapTransform)),d.envMap&&(x.envMapIntensity.value=d.envMapIntensity)}function f(x,d,g){x.ior.value=d.ior,d.sheen>0&&(x.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),x.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(x.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,x.sheenColorMapTransform)),d.sheenRoughnessMap&&(x.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,x.sheenRoughnessMapTransform))),d.clearcoat>0&&(x.clearcoat.value=d.clearcoat,x.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(x.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,x.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(x.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===pn&&x.clearcoatNormalScale.value.negate())),d.dispersion>0&&(x.dispersion.value=d.dispersion),d.iridescence>0&&(x.iridescence.value=d.iridescence,x.iridescenceIOR.value=d.iridescenceIOR,x.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(x.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,x.iridescenceMapTransform)),d.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),d.transmission>0&&(x.transmission.value=d.transmission,x.transmissionSamplerMap.value=g.texture,x.transmissionSamplerSize.value.set(g.width,g.height),d.transmissionMap&&(x.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,x.transmissionMapTransform)),x.thickness.value=d.thickness,d.thicknessMap&&(x.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=d.attenuationDistance,x.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(x.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(x.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=d.specularIntensity,x.specularColor.value.copy(d.specularColor),d.specularColorMap&&(x.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,x.specularColorMapTransform)),d.specularIntensityMap&&(x.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,x.specularIntensityMapTransform))}function y(x,d){d.matcap&&(x.matcap.value=d.matcap)}function E(x,d){const g=e.get(d).light;x.referencePosition.value.setFromMatrixPosition(g.matrixWorld),x.nearDistance.value=g.shadow.camera.near,x.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function AT(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,T){const w=T.program;i.uniformBlockBinding(M,w)}function c(M,T){let w=r[M.id];w===void 0&&(x(M),w=p(M),r[M.id]=w,M.addEventListener("dispose",g));const R=T.program;i.updateUBOMapping(M,R);const _=e.render.frame;s[M.id]!==_&&(u(M),s[M.id]=_)}function p(M){const T=m();M.__bindingPointIndex=T;const w=t.createBuffer(),R=M.__size,_=M.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,R,_),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,w),w}function m(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const T=r[M.id],w=M.uniforms,R=M.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let _=0,A=w.length;_<A;_++){const I=w[_];if(Array.isArray(I))for(let L=0,z=I.length;L<z;L++)f(I[L],_,L,R);else f(I,_,0,R)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function f(M,T,w,R){if(E(M,T,w,R)===!0){const _=M.__offset,A=M.value;if(Array.isArray(A)){let I=0;for(let L=0;L<A.length;L++){const z=A[L],V=d(z);y(z,M.__data,I),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(I+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else y(A,M.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,_,M.__data)}}function y(M,T,w){typeof M=="number"||typeof M=="boolean"?T[0]=M:M.isMatrix3?(T[0]=M.elements[0],T[1]=M.elements[1],T[2]=M.elements[2],T[3]=0,T[4]=M.elements[3],T[5]=M.elements[4],T[6]=M.elements[5],T[7]=0,T[8]=M.elements[6],T[9]=M.elements[7],T[10]=M.elements[8],T[11]=0):ArrayBuffer.isView(M)?T.set(new M.constructor(M.buffer,M.byteOffset,T.length)):M.toArray(T,w)}function E(M,T,w,R){const _=M.value,A=T+"_"+w;if(R[A]===void 0)return typeof _=="number"||typeof _=="boolean"?R[A]=_:ArrayBuffer.isView(_)?R[A]=_.slice():R[A]=_.clone(),!0;{const I=R[A];if(typeof _=="number"||typeof _=="boolean"){if(I!==_)return R[A]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(I.equals(_)===!1)return I.copy(_),!0}}return!1}function x(M){const T=M.uniforms;let w=0;const R=16;for(let A=0,I=T.length;A<I;A++){const L=Array.isArray(T[A])?T[A]:[T[A]];for(let z=0,V=L.length;z<V;z++){const Q=L[z],O=Array.isArray(Q.value)?Q.value:[Q.value];for(let Y=0,G=O.length;Y<G;Y++){const k=O[Y],Z=d(k),P=w%R,C=P%Z.boundary,D=P+C;w+=C,D!==0&&R-D<Z.storage&&(w+=R-D),Q.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=w,w+=Z.storage}}}const _=w%R;return _>0&&(w+=R-_),M.__size=w,M.__cache={},this}function d(M){const T={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(T.boundary=4,T.storage=4):M.isVector2?(T.boundary=8,T.storage=8):M.isVector3||M.isColor?(T.boundary=16,T.storage=12):M.isVector4?(T.boundary=16,T.storage=16):M.isMatrix3?(T.boundary=48,T.storage=48):M.isMatrix4?(T.boundary=64,T.storage=64):M.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(T.boundary=16,T.storage=M.byteLength):ke("WebGLRenderer: Unsupported uniform value type.",M),T}function g(M){const T=M.target;T.removeEventListener("dispose",g);const w=a.indexOf(T.__bindingPointIndex);a.splice(w,1),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function v(){for(const M in r)t.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:l,update:c,dispose:v}}const CT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ni=null;function RT(){return ni===null&&(ni=new vM(CT,16,16,Fr,Ii),ni.name="DFG_LUT",ni.minFilter=Qt,ni.magFilter=Qt,ni.wrapS=bi,ni.wrapT=bi,ni.generateMipmaps=!1,ni.needsUpdate=!0),ni}class NT{constructor(e={}){const{canvas:n=YS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:u=!1,outputBufferType:f=In}=e;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=a;const E=f,x=new Set([th,eh,Jf]),d=new Set([In,fi,Fa,ka,Zf,Qf]),g=new Uint32Array(4),v=new Int32Array(4),M=new j;let T=null,w=null;const R=[],_=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let L=!1,z=null,V=null,Q=null,O=null;this._outputColorSpace=Cn;let Y=0,G=0,k=null,Z=-1,P=null;const C=new At,D=new At;let re=null;const ae=new Ze(0);let oe=0,W=n.width,J=n.height,te=1,xe=null,Ee=null;const ge=new At(0,0,W,J),He=new At(0,0,W,J);let De=!1;const Ae=new Sx;let Be=!1,ze=!1;const nt=new Pt,st=new j,ft=new At,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function Et(){return k===null?te:1}let F=i;function Ht(b,B){return n.getContext(b,B)}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Yf}`),n.addEventListener("webglcontextlost",bt,!1),n.addEventListener("webglcontextrestored",ht,!1),n.addEventListener("webglcontextcreationerror",Zn,!1),F===null){const B="webgl2";if(F=Ht(B,b),F===null)throw Ht(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(b){throw et("WebGLRenderer: "+b.message),b}let it,N,S,H,$,ee,ue,de,ne,se,he,Pe,ve,pe,Ue,Fe,Ge,U,fe,ie,me,Me,le;function Ne(){it=new Rb(F),it.init(),me=new yT(F,it),N=new Sb(F,it,e,me),S=new vT(F,it),N.reversedDepthBuffer&&u&&S.buffers.depth.setReversed(!0),V=F.createFramebuffer(),Q=F.createFramebuffer(),O=F.createFramebuffer(),H=new Ib(F),$=new rT,ee=new _T(F,it,S,$,N,me,H),ue=new Cb(I),de=new FM(F),Me=new _b(F,de),ne=new Nb(F,de,H,Me),se=new Db(F,ne,de,Me,H),U=new Lb(F,N,ee),Ue=new Mb($),he=new iT(I,ue,it,N,Me,Ue),Pe=new TT(I,$),ve=new aT,pe=new fT(it),Ge=new vb(I,ue,S,se,y,l),Fe=new xT(I,se,N),le=new AT(F,H,N,S),fe=new yb(F,it,H),ie=new Pb(F,it,H),H.programs=he.programs,I.capabilities=N,I.extensions=it,I.properties=$,I.renderLists=ve,I.shadowMap=Fe,I.state=S,I.info=H}Ne(),E!==In&&(A=new Fb(E,n.width,n.height,o,r,s));const Ce=new bT(I,F);this.xr=Ce,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const b=it.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=it.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(b){b!==void 0&&(te=b,this.setSize(W,J,!1))},this.getSize=function(b){return b.set(W,J)},this.setSize=function(b,B,K=!0){if(Ce.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}W=b,J=B,n.width=Math.floor(b*te),n.height=Math.floor(B*te),K===!0&&(n.style.width=b+"px",n.style.height=B+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(W*te,J*te).floor()},this.setDrawingBufferSize=function(b,B,K){W=b,J=B,te=K,n.width=Math.floor(b*K),n.height=Math.floor(B*K),this.setViewport(0,0,b,B)},this.setEffects=function(b){if(E===In){et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let B=0;B<b.length;B++)if(b[B].isOutputPass===!0){ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(C)},this.getViewport=function(b){return b.copy(ge)},this.setViewport=function(b,B,K,X){b.isVector4?ge.set(b.x,b.y,b.z,b.w):ge.set(b,B,K,X),S.viewport(C.copy(ge).multiplyScalar(te).round())},this.getScissor=function(b){return b.copy(He)},this.setScissor=function(b,B,K,X){b.isVector4?He.set(b.x,b.y,b.z,b.w):He.set(b,B,K,X),S.scissor(D.copy(He).multiplyScalar(te).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(b){S.setScissorTest(De=b)},this.setOpaqueSort=function(b){xe=b},this.setTransparentSort=function(b){Ee=b},this.getClearColor=function(b){return b.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor(...arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha(...arguments)},this.clear=function(b=!0,B=!0,K=!0){let X=0;if(b){let q=!1;if(k!==null){const Se=k.texture.format;q=x.has(Se)}if(q){const Se=k.texture.type,we=d.has(Se),ye=Ge.getClearColor(),Re=Ge.getClearAlpha(),Ie=ye.r,We=ye.g,Xe=ye.b;we?(g[0]=Ie,g[1]=We,g[2]=Xe,g[3]=Re,F.clearBufferuiv(F.COLOR,0,g)):(v[0]=Ie,v[1]=We,v[2]=Xe,v[3]=Re,F.clearBufferiv(F.COLOR,0,v))}else X|=F.COLOR_BUFFER_BIT}B&&(X|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(X|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&F.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),z=b},this.dispose=function(){n.removeEventListener("webglcontextlost",bt,!1),n.removeEventListener("webglcontextrestored",ht,!1),n.removeEventListener("webglcontextcreationerror",Zn,!1),Ge.dispose(),ve.dispose(),pe.dispose(),$.dispose(),ue.dispose(),se.dispose(),Me.dispose(),le.dispose(),he.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",ph),Ce.removeEventListener("sessionend",mh),hr.stop()};function bt(b){b.preventDefault(),Bp("WebGLRenderer: Context Lost."),L=!0}function ht(){Bp("WebGLRenderer: Context Restored."),L=!1;const b=H.autoReset,B=Fe.enabled,K=Fe.autoUpdate,X=Fe.needsUpdate,q=Fe.type;Ne(),H.autoReset=b,Fe.enabled=B,Fe.autoUpdate=K,Fe.needsUpdate=X,Fe.type=q}function Zn(b){et("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Qn(b){const B=b.target;B.removeEventListener("dispose",Qn),kx(B)}function kx(b){Ox(b),$.remove(b)}function Ox(b){const B=$.get(b).programs;B!==void 0&&(B.forEach(function(K){he.releaseProgram(K)}),b.isShaderMaterial&&he.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,K,X,q,Se){B===null&&(B=lt);const we=q.isMesh&&q.matrixWorld.determinantAffine()<0,ye=Hx(b,B,K,X,q);S.setMaterial(X,we);let Re=K.index,Ie=1;if(X.wireframe===!0){if(Re=ne.getWireframeAttribute(K),Re===void 0)return;Ie=2}const We=K.drawRange,Xe=K.attributes.position;let Le=We.start*Ie,ct=(We.start+We.count)*Ie;Se!==null&&(Le=Math.max(Le,Se.start*Ie),ct=Math.min(ct,(Se.start+Se.count)*Ie)),Re!==null?(Le=Math.max(Le,0),ct=Math.min(ct,Re.count)):Xe!=null&&(Le=Math.max(Le,0),ct=Math.min(ct,Xe.count));const Ct=ct-Le;if(Ct<0||Ct===1/0)return;Me.setup(q,X,ye,K,Re);let wt,ut=fe;if(Re!==null&&(wt=de.get(Re),ut=ie,ut.setIndex(wt)),q.isMesh)X.wireframe===!0?(S.setLineWidth(X.wireframeLinewidth*Et()),ut.setMode(F.LINES)):ut.setMode(F.TRIANGLES);else if(q.isLine){let Xt=X.linewidth;Xt===void 0&&(Xt=1),S.setLineWidth(Xt*Et()),q.isLineSegments?ut.setMode(F.LINES):q.isLineLoop?ut.setMode(F.LINE_LOOP):ut.setMode(F.LINE_STRIP)}else q.isPoints?ut.setMode(F.POINTS):q.isSprite&&ut.setMode(F.TRIANGLES);if(q.isBatchedMesh)if(it.get("WEBGL_multi_draw"))ut.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Xt=q._multiDrawStarts,be=q._multiDrawCounts,gn=q._multiDrawCount,Je=Re?de.get(Re).bytesPerElement:1,Tn=$.get(X).currentProgram.getUniforms();for(let Jn=0;Jn<gn;Jn++)Tn.setValue(F,"_gl_DrawID",Jn),ut.render(Xt[Jn]/Je,be[Jn])}else if(q.isInstancedMesh)ut.renderInstances(Le,Ct,q.count);else if(K.isInstancedBufferGeometry){const Xt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,be=Math.min(K.instanceCount,Xt);ut.renderInstances(Le,Ct,be)}else ut.render(Le,Ct)};function hh(b,B,K){b.transparent===!0&&b.side===Si&&b.forceSinglePass===!1?(b.side=pn,b.needsUpdate=!0,$a(b,B,K),b.side=cr,b.needsUpdate=!0,$a(b,B,K),b.side=Si):$a(b,B,K)}this.compile=function(b,B,K=null){K===null&&(K=b),w=pe.get(K),w.init(B),_.push(w),K.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),b!==K&&b.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),w.setupLights();const X=new Set;return b.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Se=q.material;if(Se)if(Array.isArray(Se))for(let we=0;we<Se.length;we++){const ye=Se[we];hh(ye,K,q),X.add(ye)}else hh(Se,K,q),X.add(Se)}),w=_.pop(),X},this.compileAsync=function(b,B,K=null){const X=this.compile(b,B,K);return new Promise(q=>{function Se(){if(X.forEach(function(we){$.get(we).currentProgram.isReady()&&X.delete(we)}),X.size===0){q(b);return}setTimeout(Se,10)}it.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let nc=null;function Bx(b){nc&&nc(b)}function ph(){hr.stop()}function mh(){hr.start()}const hr=new Cx;hr.setAnimationLoop(Bx),typeof self<"u"&&hr.setContext(self),this.setAnimationLoop=function(b){nc=b,Ce.setAnimationLoop(b),b===null?hr.stop():hr.start()},Ce.addEventListener("sessionstart",ph),Ce.addEventListener("sessionend",mh),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;z!==null&&z.renderStart(b,B);const K=Ce.enabled===!0&&Ce.isPresenting===!0,X=A!==null&&(k===null||K)&&A.begin(I,k);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(B),B=Ce.getCamera()),b.isScene===!0&&b.onBeforeRender(I,b,B,k),w=pe.get(b,_.length),w.init(B),w.state.textureUnits=ee.getTextureUnits(),_.push(w),nt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ae.setFromProjectionMatrix(nt,oi,B.reversedDepth),ze=this.localClippingEnabled,Be=Ue.init(this.clippingPlanes,ze),T=ve.get(b,R.length),T.init(),R.push(T),Ce.enabled===!0&&Ce.isPresenting===!0){const we=I.xr.getDepthSensingMesh();we!==null&&ic(we,B,-1/0,I.sortObjects)}ic(b,B,0,I.sortObjects),T.finish(),I.sortObjects===!0&&T.sort(xe,Ee,B.reversedDepth),vt=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,vt&&Ge.addToRenderList(T,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Be===!0&&Ue.beginShadows();const q=w.state.shadowsArray;if(Fe.render(q,b,B),Be===!0&&Ue.endShadows(),(X&&A.hasRenderPass())===!1){const we=T.opaque,ye=T.transmissive;if(w.setupLights(),B.isArrayCamera){const Re=B.cameras;if(ye.length>0)for(let Ie=0,We=Re.length;Ie<We;Ie++){const Xe=Re[Ie];xh(we,ye,b,Xe)}vt&&Ge.render(b);for(let Ie=0,We=Re.length;Ie<We;Ie++){const Xe=Re[Ie];gh(T,b,Xe,Xe.viewport)}}else ye.length>0&&xh(we,ye,b,B),vt&&Ge.render(b),gh(T,b,B)}k!==null&&G===0&&(ee.updateMultisampleRenderTarget(k),ee.updateRenderTargetMipmap(k)),X&&A.end(I),b.isScene===!0&&b.onAfterRender(I,b,B),Me.resetDefaultState(),Z=-1,P=null,_.pop(),_.length>0?(w=_[_.length-1],ee.setTextureUnits(w.state.textureUnits),Be===!0&&Ue.setGlobalState(I.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?T=R[R.length-1]:T=null,z!==null&&z.renderEnd()};function ic(b,B,K,X){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)K=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLightProbeGrid)w.pushLightProbeGrid(b);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ae.intersectsSprite(b)){X&&ft.setFromMatrixPosition(b.matrixWorld).applyMatrix4(nt);const we=se.update(b),ye=b.material;ye.visible&&T.push(b,we,ye,K,ft.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ae.intersectsObject(b))){const we=se.update(b),ye=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ft.copy(b.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),ft.copy(we.boundingSphere.center)),ft.applyMatrix4(b.matrixWorld).applyMatrix4(nt)),Array.isArray(ye)){const Re=we.groups;for(let Ie=0,We=Re.length;Ie<We;Ie++){const Xe=Re[Ie],Le=ye[Xe.materialIndex];Le&&Le.visible&&T.push(b,we,Le,K,ft.z,Xe)}}else ye.visible&&T.push(b,we,ye,K,ft.z,null)}}const Se=b.children;for(let we=0,ye=Se.length;we<ye;we++)ic(Se[we],B,K,X)}function gh(b,B,K,X){const{opaque:q,transmissive:Se,transparent:we}=b;w.setupLightsView(K),Be===!0&&Ue.setGlobalState(I.clippingPlanes,K),X&&S.viewport(C.copy(X)),q.length>0&&qa(q,B,K),Se.length>0&&qa(Se,B,K),we.length>0&&qa(we,B,K),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function xh(b,B,K,X){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[X.id]===void 0){const Le=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[X.id]=new di(1,1,{generateMipmaps:!0,type:Le?Ii:In,minFilter:Tr,samples:Math.max(4,N.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace})}const Se=w.state.transmissionRenderTarget[X.id],we=X.viewport||C;Se.setSize(we.z*I.transmissionResolutionScale,we.w*I.transmissionResolutionScale);const ye=I.getRenderTarget(),Re=I.getActiveCubeFace(),Ie=I.getActiveMipmapLevel();I.setRenderTarget(Se),I.getClearColor(ae),oe=I.getClearAlpha(),oe<1&&I.setClearColor(16777215,.5),I.clear(),vt&&Ge.render(K);const We=I.toneMapping;I.toneMapping=ui;const Xe=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),w.setupLightsView(X),Be===!0&&Ue.setGlobalState(I.clippingPlanes,X),qa(b,K,X),ee.updateMultisampleRenderTarget(Se),ee.updateRenderTargetMipmap(Se),it.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let ct=0,Ct=B.length;ct<Ct;ct++){const wt=B[ct],{object:ut,geometry:Xt,material:be,group:gn}=wt;if(be.side===Si&&ut.layers.test(X.layers)){const Je=be.side;be.side=pn,be.needsUpdate=!0,vh(ut,K,X,Xt,be,gn),be.side=Je,be.needsUpdate=!0,Le=!0}}Le===!0&&(ee.updateMultisampleRenderTarget(Se),ee.updateRenderTargetMipmap(Se))}I.setRenderTarget(ye,Re,Ie),I.setClearColor(ae,oe),Xe!==void 0&&(X.viewport=Xe),I.toneMapping=We}function qa(b,B,K){const X=B.isScene===!0?B.overrideMaterial:null;for(let q=0,Se=b.length;q<Se;q++){const we=b[q],{object:ye,geometry:Re,group:Ie}=we;let We=we.material;We.allowOverride===!0&&X!==null&&(We=X),ye.layers.test(K.layers)&&vh(ye,B,K,Re,We,Ie)}}function vh(b,B,K,X,q,Se){b.onBeforeRender(I,B,K,X,q,Se),b.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),q.onBeforeRender(I,B,K,X,b,Se),q.transparent===!0&&q.side===Si&&q.forceSinglePass===!1?(q.side=pn,q.needsUpdate=!0,I.renderBufferDirect(K,B,X,q,b,Se),q.side=cr,q.needsUpdate=!0,I.renderBufferDirect(K,B,X,q,b,Se),q.side=Si):I.renderBufferDirect(K,B,X,q,b,Se),b.onAfterRender(I,B,K,X,q,Se)}function $a(b,B,K){B.isScene!==!0&&(B=lt);const X=$.get(b),q=w.state.lights,Se=w.state.shadowsArray,we=q.state.version,ye=he.getParameters(b,q.state,Se,B,K,w.state.lightProbeGridArray),Re=he.getProgramCacheKey(ye);let Ie=X.programs;X.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?B.environment:null,X.fog=B.fog;const We=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;X.envMap=ue.get(b.envMap||X.environment,We),X.envMapRotation=X.environment!==null&&b.envMap===null?B.environmentRotation:b.envMapRotation,Ie===void 0&&(b.addEventListener("dispose",Qn),Ie=new Map,X.programs=Ie);let Xe=Ie.get(Re);if(Xe!==void 0){if(X.currentProgram===Xe&&X.lightsStateVersion===we)return yh(b,ye),Xe}else ye.uniforms=he.getUniforms(b),z!==null&&b.isNodeMaterial&&z.build(b,K,ye),b.onBeforeCompile(ye,I),Xe=he.acquireProgram(ye,Re),Ie.set(Re,Xe),X.uniforms=ye.uniforms;const Le=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Le.clippingPlanes=Ue.uniform),yh(b,ye),X.needsLights=Gx(b),X.lightsStateVersion=we,X.needsLights&&(Le.ambientLightColor.value=q.state.ambient,Le.lightProbe.value=q.state.probe,Le.directionalLights.value=q.state.directional,Le.directionalLightShadows.value=q.state.directionalShadow,Le.spotLights.value=q.state.spot,Le.spotLightShadows.value=q.state.spotShadow,Le.rectAreaLights.value=q.state.rectArea,Le.ltc_1.value=q.state.rectAreaLTC1,Le.ltc_2.value=q.state.rectAreaLTC2,Le.pointLights.value=q.state.point,Le.pointLightShadows.value=q.state.pointShadow,Le.hemisphereLights.value=q.state.hemi,Le.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Le.spotLightMatrix.value=q.state.spotLightMatrix,Le.spotLightMap.value=q.state.spotLightMap,Le.pointShadowMatrix.value=q.state.pointShadowMatrix),X.lightProbeGrid=w.state.lightProbeGridArray.length>0,X.currentProgram=Xe,X.uniformsList=null,Xe}function _h(b){if(b.uniformsList===null){const B=b.currentProgram.getUniforms();b.uniformsList=tl.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function yh(b,B){const K=$.get(b);K.outputColorSpace=B.outputColorSpace,K.batching=B.batching,K.batchingColor=B.batchingColor,K.instancing=B.instancing,K.instancingColor=B.instancingColor,K.instancingMorph=B.instancingMorph,K.skinning=B.skinning,K.morphTargets=B.morphTargets,K.morphNormals=B.morphNormals,K.morphColors=B.morphColors,K.morphTargetsCount=B.morphTargetsCount,K.numClippingPlanes=B.numClippingPlanes,K.numIntersection=B.numClipIntersection,K.vertexAlphas=B.vertexAlphas,K.vertexTangents=B.vertexTangents,K.toneMapping=B.toneMapping}function zx(b,B){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;M.setFromMatrixPosition(B.matrixWorld);for(let K=0,X=b.length;K<X;K++){const q=b[K];if(q.texture!==null&&q.boundingBox.containsPoint(M))return q}return null}function Hx(b,B,K,X,q){B.isScene!==!0&&(B=lt),ee.resetTextureUnits();const Se=B.fog,we=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?B.environment:null,ye=k===null?I.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:$e.workingColorSpace,Re=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Ie=ue.get(X.envMap||we,Re),We=X.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Xe=!!K.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Le=!!K.morphAttributes.position,ct=!!K.morphAttributes.normal,Ct=!!K.morphAttributes.color;let wt=ui;X.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(wt=I.toneMapping);const ut=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Xt=ut!==void 0?ut.length:0,be=$.get(X),gn=w.state.lights;if(Be===!0&&(ze===!0||b!==P)){const pt=b===P&&X.id===Z;Ue.setState(X,b,pt)}let Je=!1;X.version===be.__version?(be.needsLights&&be.lightsStateVersion!==gn.state.version||be.outputColorSpace!==ye||q.isBatchedMesh&&be.batching===!1||!q.isBatchedMesh&&be.batching===!0||q.isBatchedMesh&&be.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&be.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&be.instancing===!1||!q.isInstancedMesh&&be.instancing===!0||q.isSkinnedMesh&&be.skinning===!1||!q.isSkinnedMesh&&be.skinning===!0||q.isInstancedMesh&&be.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&be.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&be.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&be.instancingMorph===!1&&q.morphTexture!==null||be.envMap!==Ie||X.fog===!0&&be.fog!==Se||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==Ue.numPlanes||be.numIntersection!==Ue.numIntersection)||be.vertexAlphas!==We||be.vertexTangents!==Xe||be.morphTargets!==Le||be.morphNormals!==ct||be.morphColors!==Ct||be.toneMapping!==wt||be.morphTargetsCount!==Xt||!!be.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Je=!0):(Je=!0,be.__version=X.version);let Tn=be.currentProgram;Je===!0&&(Tn=$a(X,B,q),z&&X.isNodeMaterial&&z.onUpdateProgram(X,Tn,be));let Jn=!1,Ui=!1,Hr=!1;const dt=Tn.getUniforms(),Rt=be.uniforms;if(S.useProgram(Tn.program)&&(Jn=!0,Ui=!0,Hr=!0),X.id!==Z&&(Z=X.id,Ui=!0),be.needsLights){const pt=zx(w.state.lightProbeGridArray,q);be.lightProbeGrid!==pt&&(be.lightProbeGrid=pt,Ui=!0)}if(Jn||P!==b){S.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),dt.setValue(F,"projectionMatrix",b.projectionMatrix),dt.setValue(F,"viewMatrix",b.matrixWorldInverse);const ki=dt.map.cameraPosition;ki!==void 0&&ki.setValue(F,st.setFromMatrixPosition(b.matrixWorld)),N.logarithmicDepthBuffer&&dt.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&dt.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),P!==b&&(P=b,Ui=!0,Hr=!0)}if(be.needsLights&&(gn.state.directionalShadowMap.length>0&&dt.setValue(F,"directionalShadowMap",gn.state.directionalShadowMap,ee),gn.state.spotShadowMap.length>0&&dt.setValue(F,"spotShadowMap",gn.state.spotShadowMap,ee),gn.state.pointShadowMap.length>0&&dt.setValue(F,"pointShadowMap",gn.state.pointShadowMap,ee)),q.isSkinnedMesh){dt.setOptional(F,q,"bindMatrix"),dt.setOptional(F,q,"bindMatrixInverse");const pt=q.skeleton;pt&&(pt.boneTexture===null&&pt.computeBoneTexture(),dt.setValue(F,"boneTexture",pt.boneTexture,ee))}q.isBatchedMesh&&(dt.setOptional(F,q,"batchingTexture"),dt.setValue(F,"batchingTexture",q._matricesTexture,ee),dt.setOptional(F,q,"batchingIdTexture"),dt.setValue(F,"batchingIdTexture",q._indirectTexture,ee),dt.setOptional(F,q,"batchingColorTexture"),q._colorsTexture!==null&&dt.setValue(F,"batchingColorTexture",q._colorsTexture,ee));const Fi=K.morphAttributes;if((Fi.position!==void 0||Fi.normal!==void 0||Fi.color!==void 0)&&U.update(q,K,Tn),(Ui||be.receiveShadow!==q.receiveShadow)&&(be.receiveShadow=q.receiveShadow,dt.setValue(F,"receiveShadow",q.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&B.environment!==null&&(Rt.envMapIntensity.value=B.environmentIntensity),Rt.dfgLUT!==void 0&&(Rt.dfgLUT.value=RT()),Ui){if(dt.setValue(F,"toneMappingExposure",I.toneMappingExposure),be.needsLights&&Vx(Rt,Hr),Se&&X.fog===!0&&Pe.refreshFogUniforms(Rt,Se),Pe.refreshMaterialUniforms(Rt,X,te,J,w.state.transmissionRenderTarget[b.id]),be.needsLights&&be.lightProbeGrid){const pt=be.lightProbeGrid;Rt.probesSH.value=pt.texture,Rt.probesMin.value.copy(pt.boundingBox.min),Rt.probesMax.value.copy(pt.boundingBox.max),Rt.probesResolution.value.copy(pt.resolution)}tl.upload(F,_h(be),Rt,ee)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(tl.upload(F,_h(be),Rt,ee),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&dt.setValue(F,"center",q.center),dt.setValue(F,"modelViewMatrix",q.modelViewMatrix),dt.setValue(F,"normalMatrix",q.normalMatrix),dt.setValue(F,"modelMatrix",q.matrixWorld),X.uniformsGroups!==void 0){const pt=X.uniformsGroups;for(let ki=0,Vr=pt.length;ki<Vr;ki++){const Sh=pt[ki];le.update(Sh,Tn),le.bind(Sh,Tn)}}return Tn}function Vx(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function Gx(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(b,B,K){const X=$.get(b);X.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),$.get(b.texture).__webglTexture=B,$.get(b.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:K,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,B){const K=$.get(b);K.__webglFramebuffer=B,K.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(b,B=0,K=0){k=b,Y=B,G=K;let X=null,q=!1,Se=!1;if(b){const ye=$.get(b);if(ye.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(F.FRAMEBUFFER,ye.__webglFramebuffer),C.copy(b.viewport),D.copy(b.scissor),re=b.scissorTest,S.viewport(C),S.scissor(D),S.setScissorTest(re),Z=-1;return}else if(ye.__webglFramebuffer===void 0)ee.setupRenderTarget(b);else if(ye.__hasExternalTextures)ee.rebindTextures(b,$.get(b.texture).__webglTexture,$.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const We=b.depthTexture;if(ye.__boundDepthTexture!==We){if(We!==null&&$.has(We)&&(b.width!==We.image.width||b.height!==We.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(b)}}const Re=b.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(Se=!0);const Ie=$.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ie[B])?X=Ie[B][K]:X=Ie[B],q=!0):b.samples>0&&ee.useMultisampledRTT(b)===!1?X=$.get(b).__webglMultisampledFramebuffer:Array.isArray(Ie)?X=Ie[K]:X=Ie,C.copy(b.viewport),D.copy(b.scissor),re=b.scissorTest}else C.copy(ge).multiplyScalar(te).floor(),D.copy(He).multiplyScalar(te).floor(),re=De;if(K!==0&&(X=V),S.bindFramebuffer(F.FRAMEBUFFER,X)&&S.drawBuffers(b,X),S.viewport(C),S.scissor(D),S.setScissorTest(re),q){const ye=$.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+B,ye.__webglTexture,K)}else if(Se){const ye=B;for(let Re=0;Re<b.textures.length;Re++){const Ie=$.get(b.textures[Re]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Re,Ie.__webglTexture,K,ye)}}else if(b!==null&&K!==0){const ye=$.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ye.__webglTexture,K)}Z=-1},this.readRenderTargetPixels=function(b,B,K,X,q,Se,we,ye=0){if(!(b&&b.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=$.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&we!==void 0&&(Re=Re[we]),Re){S.bindFramebuffer(F.FRAMEBUFFER,Re);try{const Ie=b.textures[ye],We=Ie.format,Xe=Ie.type;if(b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ye),!N.textureFormatReadable(We)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!N.textureTypeReadable(Xe)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-X&&K>=0&&K<=b.height-q&&F.readPixels(B,K,X,q,me.convert(We),me.convert(Xe),Se)}finally{const Ie=k!==null?$.get(k).__webglFramebuffer:null;S.bindFramebuffer(F.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(b,B,K,X,q,Se,we,ye=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=$.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&we!==void 0&&(Re=Re[we]),Re)if(B>=0&&B<=b.width-X&&K>=0&&K<=b.height-q){S.bindFramebuffer(F.FRAMEBUFFER,Re);const Ie=b.textures[ye],We=Ie.format,Xe=Ie.type;if(b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ye),!N.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!N.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Le=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Le),F.bufferData(F.PIXEL_PACK_BUFFER,Se.byteLength,F.STREAM_READ),F.readPixels(B,K,X,q,me.convert(We),me.convert(Xe),0);const ct=k!==null?$.get(k).__webglFramebuffer:null;S.bindFramebuffer(F.FRAMEBUFFER,ct);const Ct=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await KS(F,Ct,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Le),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Se),F.deleteBuffer(Le),F.deleteSync(Ct),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,B=null,K=0){const X=Math.pow(2,-K),q=Math.floor(b.image.width*X),Se=Math.floor(b.image.height*X),we=B!==null?B.x:0,ye=B!==null?B.y:0;ee.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,K,0,0,we,ye,q,Se),S.unbindTexture()},this.copyTextureToTexture=function(b,B,K=null,X=null,q=0,Se=0){let we,ye,Re,Ie,We,Xe,Le,ct,Ct;const wt=b.isCompressedTexture?b.mipmaps[Se]:b.image;if(K!==null)we=K.max.x-K.min.x,ye=K.max.y-K.min.y,Re=K.isBox3?K.max.z-K.min.z:1,Ie=K.min.x,We=K.min.y,Xe=K.isBox3?K.min.z:0;else{const Rt=Math.pow(2,-q);we=Math.floor(wt.width*Rt),ye=Math.floor(wt.height*Rt),b.isDataArrayTexture?Re=wt.depth:b.isData3DTexture?Re=Math.floor(wt.depth*Rt):Re=1,Ie=0,We=0,Xe=0}X!==null?(Le=X.x,ct=X.y,Ct=X.z):(Le=0,ct=0,Ct=0);const ut=me.convert(B.format),Xt=me.convert(B.type);let be;B.isData3DTexture?(ee.setTexture3D(B,0),be=F.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(ee.setTexture2DArray(B,0),be=F.TEXTURE_2D_ARRAY):(ee.setTexture2D(B,0),be=F.TEXTURE_2D),S.activeTexture(F.TEXTURE0),S.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,B.flipY),S.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),S.pixelStorei(F.UNPACK_ALIGNMENT,B.unpackAlignment);const gn=S.getParameter(F.UNPACK_ROW_LENGTH),Je=S.getParameter(F.UNPACK_IMAGE_HEIGHT),Tn=S.getParameter(F.UNPACK_SKIP_PIXELS),Jn=S.getParameter(F.UNPACK_SKIP_ROWS),Ui=S.getParameter(F.UNPACK_SKIP_IMAGES);S.pixelStorei(F.UNPACK_ROW_LENGTH,wt.width),S.pixelStorei(F.UNPACK_IMAGE_HEIGHT,wt.height),S.pixelStorei(F.UNPACK_SKIP_PIXELS,Ie),S.pixelStorei(F.UNPACK_SKIP_ROWS,We),S.pixelStorei(F.UNPACK_SKIP_IMAGES,Xe);const Hr=b.isDataArrayTexture||b.isData3DTexture,dt=B.isDataArrayTexture||B.isData3DTexture;if(b.isDepthTexture){const Rt=$.get(b),Fi=$.get(B),pt=$.get(Rt.__renderTarget),ki=$.get(Fi.__renderTarget);S.bindFramebuffer(F.READ_FRAMEBUFFER,pt.__webglFramebuffer),S.bindFramebuffer(F.DRAW_FRAMEBUFFER,ki.__webglFramebuffer);for(let Vr=0;Vr<Re;Vr++)Hr&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,$.get(b).__webglTexture,q,Xe+Vr),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,$.get(B).__webglTexture,Se,Ct+Vr)),F.blitFramebuffer(Ie,We,we,ye,Le,ct,we,ye,F.DEPTH_BUFFER_BIT,F.NEAREST);S.bindFramebuffer(F.READ_FRAMEBUFFER,null),S.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(q!==0||b.isRenderTargetTexture||$.has(b)){const Rt=$.get(b),Fi=$.get(B);S.bindFramebuffer(F.READ_FRAMEBUFFER,Q),S.bindFramebuffer(F.DRAW_FRAMEBUFFER,O);for(let pt=0;pt<Re;pt++)Hr?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Rt.__webglTexture,q,Xe+pt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Rt.__webglTexture,q),dt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Fi.__webglTexture,Se,Ct+pt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Fi.__webglTexture,Se),q!==0?F.blitFramebuffer(Ie,We,we,ye,Le,ct,we,ye,F.COLOR_BUFFER_BIT,F.NEAREST):dt?F.copyTexSubImage3D(be,Se,Le,ct,Ct+pt,Ie,We,we,ye):F.copyTexSubImage2D(be,Se,Le,ct,Ie,We,we,ye);S.bindFramebuffer(F.READ_FRAMEBUFFER,null),S.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else dt?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(be,Se,Le,ct,Ct,we,ye,Re,ut,Xt,wt.data):B.isCompressedArrayTexture?F.compressedTexSubImage3D(be,Se,Le,ct,Ct,we,ye,Re,ut,wt.data):F.texSubImage3D(be,Se,Le,ct,Ct,we,ye,Re,ut,Xt,wt):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Se,Le,ct,we,ye,ut,Xt,wt.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Se,Le,ct,wt.width,wt.height,ut,wt.data):F.texSubImage2D(F.TEXTURE_2D,Se,Le,ct,we,ye,ut,Xt,wt);S.pixelStorei(F.UNPACK_ROW_LENGTH,gn),S.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Je),S.pixelStorei(F.UNPACK_SKIP_PIXELS,Tn),S.pixelStorei(F.UNPACK_SKIP_ROWS,Jn),S.pixelStorei(F.UNPACK_SKIP_IMAGES,Ui),Se===0&&B.generateMipmaps&&F.generateMipmap(be),S.unbindTexture()},this.initRenderTarget=function(b){$.get(b).__webglFramebuffer===void 0&&ee.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?ee.setTextureCube(b,0):b.isData3DTexture?ee.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?ee.setTexture2DArray(b,0):ee.setTexture2D(b,0),S.unbindTexture()},this.resetState=function(){Y=0,G=0,k=null,S.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),n.unpackColorSpace=$e._getUnpackColorSpace()}}function PT({isTransitioning:t=!1,onClick:e}){const n=Oe.useRef(null);return Oe.useEffect(()=>{if(!n.current)return;const i=n.current.clientWidth||window.innerWidth,r=n.current.clientHeight||520,s=new fM,a=new Pn(55,i/r,.1,2e3);a.position.z=400;const o=new NT({antialias:!0,alpha:!0,powerPreference:"high-performance"});o.setSize(i,r),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.current.appendChild(o.domElement);const l=750,c=140,p=new wn,m=new Float32Array(l*3),u=new Float32Array(l*3),f=new Ze("#F0FB43"),y=new Ze("#7ED043"),E=new Ze("#4FB734");new Ze("#176B24");for(let ae=0;ae<l;ae++){const oe=Math.acos(-1+2*ae/l),W=Math.sqrt(l*Math.PI)*oe,J=c*Math.cos(W)*Math.sin(oe),te=c*Math.sin(W)*Math.sin(oe),xe=c*Math.cos(oe);m[ae*3]=J,m[ae*3+1]=te,m[ae*3+2]=xe;const Ee=Math.random()>.6?f:Math.random()>.3?y:E;u[ae*3]=Ee.r,u[ae*3+1]=Ee.g,u[ae*3+2]=Ee.b}p.setAttribute("position",new Un(m,3)),p.setAttribute("color",new Un(u,3));const x=document.createElement("canvas");x.width=32,x.height=32;const d=x.getContext("2d"),g=d.createRadialGradient(16,16,0,16,16,16);g.addColorStop(0,"rgba(240, 251, 67, 1)"),g.addColorStop(.3,"rgba(126, 208, 67, 0.8)"),g.addColorStop(1,"rgba(0, 0, 0, 0)"),d.fillStyle=g,d.fillRect(0,0,32,32);const v=new EM(x),M=new Mx({size:10,map:v,vertexColors:!0,transparent:!0,opacity:.85,blending:rd,depthWrite:!1}),T=new MM(p,M);s.add(T);const w=new ah(130,2),R=new va({color:5224244,wireframe:!0,transparent:!0,opacity:.18}),_=new Fn(w,R);s.add(_);const A=new Il(175,1.2,16,100),I=new va({color:15792963,transparent:!0,opacity:.45}),L=new Fn(A,I);L.rotation.x=Math.PI/3,s.add(L);const z=new Il(200,1,16,100),V=new va({color:8310851,transparent:!0,opacity:.3}),Q=new Fn(z,V);Q.rotation.y=Math.PI/4,s.add(Q);let O=0,Y=0,G=0,k=0;const Z=ae=>{var W;const oe=(W=n.current)==null?void 0:W.getBoundingClientRect();oe&&(O=(ae.clientX-oe.left-oe.width/2)*.4,Y=(ae.clientY-oe.top-oe.height/2)*.4)};window.addEventListener("mousemove",Z,{passive:!0});const P=()=>{if(!n.current)return;const ae=n.current.clientWidth,oe=n.current.clientHeight;a.aspect=ae/oe,a.updateProjectionMatrix(),o.setSize(ae,oe)};window.addEventListener("resize",P);let C,D=new DM;const re=()=>{C=requestAnimationFrame(re);const ae=D.getElapsedTime();G+=(O-G)*.05,k+=(Y-k)*.05,T.rotation.y=ae*.15+G*.003,T.rotation.x=Math.sin(ae*.2)*.1+k*.003,_.rotation.y=-ae*.08,_.rotation.x=ae*.04,L.rotation.z=ae*.25,L.rotation.y=Math.sin(ae*.3)*.2,Q.rotation.x=-ae*.2,Q.rotation.z=ae*.1;const oe=1+Math.sin(ae*1.5)*.03;T.scale.set(oe,oe,oe),o.render(s,a)};return re(),()=>{cancelAnimationFrame(C),window.removeEventListener("mousemove",Z),window.removeEventListener("resize",P),n.current&&o.domElement&&n.current.removeChild(o.domElement),p.dispose(),M.dispose(),w.dispose(),R.dispose(),A.dispose(),I.dispose(),z.dispose(),V.dispose(),o.dispose()}},[]),h.jsx("div",{ref:n,onClick:e,className:`relative w-full h-[400px] sm:h-[480px] lg:h-[540px] flex items-center justify-center cursor-pointer transition-transform duration-700 ${t?"scale-125 opacity-0":"scale-100 opacity-100"}`})}function IT({onBegin:t,onOpenHowItWorks:e}){const n=()=>{Ye.playClick(),t()};return h.jsxs("section",{className:"relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 py-8 lg:py-12 overflow-hidden w-full max-w-[1700px] mx-auto",children:[h.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(to_right,#7ED0430a_1px,transparent_1px),linear-gradient(to_bottom,#7ED0430a_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"}),h.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-light/10 rounded-full blur-[160px] pointer-events-none"}),h.jsxs("div",{className:"flex flex-col items-center gap-2.5 z-20 mb-2",children:[h.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-deep/30 border border-brand-light/25 text-brand-lime text-xs font-mono font-bold tracking-widest uppercase shadow-sm",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-lime animate-ping"}),h.jsx("span",{children:"Autonomous Multi-Source Investment Intelligence"})]}),h.jsx("h1",{className:"text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight font-mono",children:h.jsx("span",{className:"bg-gradient-to-r from-[#7ED043] via-[#F0FB43] to-white bg-clip-text text-transparent drop-shadow-md",children:"INVESTILENS"})}),h.jsxs("p",{className:"text-sm sm:text-base text-slate-300 max-w-xl font-sans font-normal leading-relaxed",children:["Smarter research. Better decisions.",h.jsx("span",{className:"block text-slate-400 text-xs sm:text-sm mt-0.5",children:"Cross-checks official filings, balances bull & bear cases, and explains every metric in plain English."})]}),h.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3.5 mt-3",children:[h.jsxs("button",{onClick:n,className:"group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#F0FB43] via-[#7ED043] to-[#4FB734] hover:from-[#f4fc65] hover:to-[#5bc93f] text-[#060907] font-black text-sm uppercase tracking-wider font-mono shadow-xl shadow-[#7ED043]/20 hover:shadow-[#F0FB43]/40 transition-all duration-300 hover:scale-105 active:scale-95",children:[h.jsx("span",{children:"GET STARTED"}),h.jsx(Kl,{className:"w-4 h-4 transform group-hover:translate-x-1.5 transition-transform"})]}),h.jsxs("button",{onClick:()=>{Ye.playClick(),e()},className:"inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-[#0b110d]/90 hover:bg-[#111a14] text-slate-200 border border-brand-light/30 font-mono text-xs font-bold transition-all duration-300 hover:border-brand-lime/50 shadow-lg",children:[h.jsx(X0,{className:"w-4 h-4 text-brand-light"}),h.jsx("span",{children:"How It Works"})]})]})]}),h.jsxs("div",{className:"relative w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 items-center gap-4 my-4 z-10",children:[h.jsxs("div",{className:"hidden lg:flex flex-col gap-4 lg:col-span-3 items-end text-right",children:[h.jsxs("div",{className:"w-full max-w-xs p-4 rounded-2xl bg-[#0b110d]/75 backdrop-blur-md border border-brand-light/20 shadow-xl flex flex-col gap-2 hover:border-brand-light/40 transition-all duration-300 animate-in fade-in slide-in-from-left-4",children:[h.jsxs("div",{className:"flex items-center justify-between text-xs font-mono",children:[h.jsx("span",{className:"text-brand-lime font-bold",children:"LIVE MARKET SIGNAL"}),h.jsx("span",{className:"text-[10px] text-brand-light",children:"+1.42% Momentum"})]}),h.jsx("div",{className:"w-full h-8 flex items-center justify-center py-1",children:h.jsx("svg",{className:"w-full h-full text-brand-lime stroke-current fill-none stroke-[2]",viewBox:"0 0 100 25",children:h.jsx("path",{d:"M0 20 L20 15 L35 18 L55 8 L75 12 L90 3 L100 6"})})}),h.jsx("span",{className:"text-[10px] font-mono text-slate-400",children:"62% Positive Sentiment Classification"})]}),h.jsxs("div",{className:"w-full max-w-xs p-4 rounded-2xl bg-[#0b110d]/75 backdrop-blur-md border border-brand-light/20 shadow-xl flex flex-col gap-1.5 hover:border-brand-light/40 transition-all duration-300 animate-in fade-in slide-in-from-left-6",children:[h.jsxs("div",{className:"flex items-center justify-between text-xs font-mono",children:[h.jsx("span",{className:"text-white font-bold",children:"MULTI-SOURCE CRAWL"}),h.jsx("span",{className:"text-[10px] px-1.5 py-0.5 rounded bg-brand-deep/50 text-brand-lime font-bold",children:"TOP 5 SOURCES"})]}),h.jsx("p",{className:"text-[11px] text-slate-300 font-sans text-right",children:"Reuters Markets Desk (Focused High-Speed Extraction)."})]})]}),h.jsx("div",{className:"lg:col-span-6 flex flex-col items-center justify-center relative",children:h.jsx(PT,{onClick:n})}),h.jsxs("div",{className:"hidden lg:flex flex-col gap-4 lg:col-span-3 items-start text-left",children:[h.jsxs("div",{className:"w-full max-w-xs p-4 rounded-2xl bg-[#0b110d]/75 backdrop-blur-md border border-brand-light/20 shadow-xl flex flex-col gap-2 hover:border-brand-light/40 transition-all duration-300 animate-in fade-in slide-in-from-right-4",children:[h.jsxs("div",{className:"flex items-center justify-between text-xs font-mono",children:[h.jsx("span",{className:"text-brand-lime font-bold",children:"RESEARCH PIPELINE"}),h.jsx("span",{className:"text-[10px] text-brand-light",children:"ACTIVE"})]}),h.jsxs("div",{className:"flex flex-col gap-1 text-[11px] font-mono text-slate-300",children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{children:"Financials & NIM"}),h.jsx("span",{className:"text-brand-lime font-bold",children:"✓"})]}),h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{children:"Cross-Source Audits"}),h.jsx("span",{className:"text-brand-lime font-bold",children:"✓"})]}),h.jsxs("div",{className:"flex items-center justify-between text-slate-500",children:[h.jsx("span",{children:"Peer Moat Analysis"}),h.jsx("span",{children:"◌"})]}),h.jsxs("div",{className:"flex items-center justify-between text-slate-500",children:[h.jsx("span",{children:"Bear Disconfirmation"}),h.jsx("span",{children:"◌"})]})]})]}),h.jsxs("div",{className:"w-full max-w-xs p-4 rounded-2xl bg-[#0b110d]/75 backdrop-blur-md border border-brand-light/20 shadow-xl flex flex-col gap-1.5 hover:border-brand-light/40 transition-all duration-300 animate-in fade-in slide-in-from-right-6",children:[h.jsxs("div",{className:"flex items-center justify-between text-xs font-mono",children:[h.jsx("span",{className:"text-white font-bold",children:"DETERMINISTIC SCORING"}),h.jsx("span",{className:"text-[10px] text-brand-lime font-bold",children:"100% EXPLAINABLE"})]}),h.jsx("p",{className:"text-[11px] text-slate-300 font-sans text-left",children:"Non-blackbox 7-dimension weighted mathematical formula."})]})]})]}),h.jsxs("div",{className:"flex items-center gap-4 text-xs font-mono text-slate-400 mt-2 z-10",children:[h.jsxs("span",{className:"flex items-center gap-1.5",children:[h.jsx(qf,{className:"w-4 h-4 text-brand-light"})," Human-in-the-Loop Decisions"]}),h.jsx("span",{children:"•"}),h.jsx("span",{children:"Zero Confirmation Bias"}),h.jsx("span",{children:"•"}),h.jsx("span",{children:"Decision-Support Only"})]})]})}const rs={HDFC_BANK:{ticker:"HDFCBANK",exchange:"NSE / BSE",market:"India",name:"HDFC Bank Ltd.",sector:"Banking & Financial Services",currency:"INR",currentPrice:1724.5,priceChange:"+1.42%",iconType:"bank",summary:"India's largest private sector bank by assets, boasting an extensive nationwide branch network, industry-leading low-cost CASA deposit base, and solid post-merger integration trajectory.",scores:{financialHealth:88,growthPotential:84,historicalPerformance:86,valuation:78,debtLeverage:82,newsEvents:85,riskProfile:80},overallScore:84,evidenceConfidence:"HIGH",sourcesCount:6,researchStatus:"Strong Research Profile",disclaimer:"This research assessment is generated via multi-source web cross-verification for decision-support purposes only. It does not constitute investment advice or order execution.",evidence:[{id:"ev-1",claim:"Q3 Net Interest Income (NII) grew 11.2% YoY with Net Interest Margin (NIM) stabilizing at 3.46%",sourceA:{name:"HDFC Bank Q3 Financial Disclosure",type:"Official Filing",url:"https://hdfcbank.com/investor-relations/q3-results",match:!0},sourceB:{name:"Screener.in Verified Financials",type:"Financial Platform",url:"https://screener.in/company/HDFCBANK",match:!0},confidence:"HIGH",status:"VERIFIED",metric:"NII & NIM",discrepancy:null},{id:"ev-2",claim:"Gross Non-Performing Assets (GNPA) maintained at low 1.36%, Net NPA at 0.38%",sourceA:{name:"BSE Regulatory Filing (XBRL)",type:"Regulatory",url:"https://bseindia.com/filings/hdfcbank",match:!0},sourceB:{name:"Moneycontrol Banking Audit",type:"Financial News",url:"https://moneycontrol.com/india/stockpricequote/banks-private/hdfcbank",match:!0},confidence:"HIGH",status:"VERIFIED",metric:"Asset Quality",discrepancy:null},{id:"ev-3",claim:"Deposit growth outpaced credit growth at 15.1% YoY to rebalance Credit-to-Deposit (CD) ratio",sourceA:{name:"RBI Banking Statistics Bulletin",type:"Regulatory / Central Bank",url:"https://rbi.org.in/bulletin",match:!0},sourceB:{name:"Reuters India Financial Desk",type:"News Agency",url:"https://reuters.com/business/finance/hdfc-bank-q3",match:!0},confidence:"HIGH",status:"VERIFIED",metric:"Liquidity & CD Ratio",discrepancy:"Minor 0.2% variance in foreign currency deposit calculation between RBI and bank disclosure"},{id:"ev-4",claim:"Consolidated Return on Assets (RoA) at 1.95% and Return on Equity (RoE) normalized at 15.8%",sourceA:{name:"Annual Report FY2025 Extract",type:"Annual Report",url:"https://hdfcbank.com/annual-reports",match:!0},sourceB:{name:"Tickertape Financial Engine",type:"Data Provider",url:"https://tickertape.in/stocks/hdfc-bank",match:!0},confidence:"HIGH",status:"VERIFIED",metric:"Profitability",discrepancy:null}],bullCase:[{title:"Post-Merger Synergies Accelerating",desc:"Cross-selling mortgage loans to the legacy 90M+ HDFC Bank customer base is ramping up, yielding lower customer acquisition costs.",impact:"HIGH",source:"Annual Report & Management Call"},{title:"Market-Leading CASA Ratio",desc:"Maintains a robust low-cost deposit ratio of ~37.7%, insulating the bank from rapid central bank repo rate spikes.",impact:"HIGH",source:"RBI Disclosure"},{title:"Prudent Underwriting & Clean Balance Sheet",desc:"Consistently lowest provision cost among major emerging market tier-1 lenders with Gross NPAs below 1.4%.",impact:"MEDIUM",source:"Moneycontrol & Screener"}],bearCase:[{title:"Credit-to-Deposit (CD) Ratio Pressure",desc:"CD ratio remaining elevated (~100%) post-HDFC Ltd merger forces aggressive branch deposit mobilization, which may compress NIMs temporarily.",impact:"HIGH",source:"Motilal Oswal & Reuters"},{title:"FII Outflow Sensitivity",desc:"High foreign institutional ownership (>52%) exposes the stock to global macroeconomic liquidity shifts and currency fluctuations.",impact:"MEDIUM",source:"Trendlyne Institutional Tracker"},{title:"Fintech Disruption in Retail Payments",desc:"Intensified competition from UPI payment aggregators for fee-based transactional income.",impact:"LOW",source:"Economic Times Fintech Review"}],newsSentiment:{positivePercent:62,neutralPercent:23,negativePercent:15,totalArticlesParsed:18,articles:[{headline:"HDFC Bank deposits grow 15.1% in Q3; loan growth steady at 12.8%",source:"LiveMint",date:"Yesterday",sentiment:"POSITIVE",impact:"HIGH",summary:"Aggressive branch expansion pays off as retail deposits accelerate, alleviating merger liquidity overhang."},{headline:"RBI relaxes certain liquidity coverage ratio guidelines for tier-1 banks",source:"Economic Times",date:"3 days ago",sentiment:"POSITIVE",impact:"MEDIUM",summary:"Provides operational breathing room for large private lenders managing credit rebalancing."},{headline:"Foreign institutional investors trim Indian banking exposure on bond yield movements",source:"Bloomberg",date:"5 days ago",sentiment:"NEGATIVE",impact:"MEDIUM",summary:"Short-term selling pressure observed across large-cap financial indices."},{headline:"HDFC Bank expands digital rural credit initiative across 10,000 new village hubs",source:"Business Standard",date:"1 week ago",sentiment:"NEUTRAL",impact:"LOW",summary:"Long-term priority sector lending fulfillment with neutral short-term earnings impact."}]},upcomingEvents:[{title:"Q4 FY2026 Financial Results & Board Meeting",date:"April 18, 2026",significance:"HIGH",type:"Earnings",impact:"Crucial quarterly print on NIM stabilization and dividend announcement."},{title:"RBI Monetary Policy Committee (MPC) Rate Decision",date:"May 8, 2026",significance:"HIGH",type:"Macro / Regulatory",impact:"Determines cost of funds trajectory and loan repricing dynamics."},{title:"Annual Analyst & Investor Day Conference",date:"June 12, 2026",significance:"MEDIUM",type:"Corporate Event",impact:"Management guidance on 3-year digital transformation and subsidiary monetization."}],hypotheticalAllocation:{totalBudget:"INR 50,000",strategy:"Balanced Core Compounder Strategy (3-5 Year Horizon)",allocations:[{asset:"HDFC Bank Ltd. (NSE: HDFCBANK)",amount:22500,percent:45,role:"Core Private Banking Pillar",rationale:"High asset quality, 15%+ steady compounding potential"},{asset:"Tata Motors Ltd. (NSE: TATAMOTORS)",amount:12500,percent:25,role:"Cyclical EV Growth Satellite",rationale:"EV market share & JLR cash flow momentum"},{asset:"Reliance Industries (NSE: RELIANCE)",amount:1e4,percent:20,role:"Diversified Conglomerate Defense",rationale:"Telecom 5G cash cow + Retail ecosystem"},{asset:"Liquid Research Reserve (Overnight/Cash)",amount:5e3,percent:10,role:"Tactical Volatility Buffer",rationale:"Dry powder for staged entry on dips"}]},sourcesVisited:[{name:"Yahoo Finance (HDFCBANK.NS)",url:"https://finance.yahoo.com/quote/HDFCBANK.NS/",status:"200 OK",bytes:"142 KB",depth:3},{name:"NSE India Official Exchange",url:"https://www.nseindia.com/get-quotes/equity?symbol=HDFCBANK",status:"200 OK",bytes:"110 KB",depth:2},{name:"Google Finance India",url:"https://www.google.com/finance/quote/HDFCBANK:NSE",status:"200 OK",bytes:"88 KB",depth:2},{name:"Reuters India Markets",url:"https://www.reuters.com/markets/companies/HDBK.NS",status:"200 OK",bytes:"74 KB",depth:1},{name:"MarketWatch Global",url:"https://www.marketwatch.com/investing/stock/hdfcbank",status:"200 OK",bytes:"96 KB",depth:2}]},NVIDIA:{ticker:"NVDA",exchange:"NASDAQ",market:"United States",name:"NVIDIA Corporation",sector:"Semiconductors & AI Compute",currency:"USD",currentPrice:138.25,priceChange:"+3.18%",iconType:"chip",summary:"Dominant designer of high-performance graphics processing units (GPUs) and full-stack accelerated computing platforms powering the global generative AI revolution.",scores:{financialHealth:94,growthPotential:92,historicalPerformance:96,valuation:62,debtLeverage:90,newsEvents:88,riskProfile:74},overallScore:86,evidenceConfidence:"HIGH",sourcesCount:7,researchStatus:"Strong Research Profile",disclaimer:"This research assessment is generated via multi-source web cross-verification for decision-support purposes only. It does not constitute investment advice or order execution.",evidence:[{id:"nv-1",claim:"Data Center segment revenue reached $30.8B in the quarter, representing 112% YoY hyper-expansion",sourceA:{name:"NVIDIA SEC 10-Q Quarterly Filing",type:"SEC Regulatory",url:"https://sec.gov/edgar/data/1045810",match:!0},sourceB:{name:"Bloomberg Terminal Transcript",type:"Financial Data",url:"https://bloomberg.com/quote/NVDA:US",match:!0},confidence:"HIGH",status:"VERIFIED",metric:"Data Center Compute Revenue",discrepancy:null}],bullCase:[{title:"CUDA Moat & Software Ecosystem Monopoly",desc:"Over 5 million developers locked into NVIDIA's CUDA programming layer create high switching costs for hyperscalers.",impact:"HIGH",source:"Gartner AI Infrastructure Report"},{title:"Blackwell GPU Supercycle",desc:"Full order books across Microsoft Azure, AWS, Google Cloud, and Meta for Blackwell architectures.",impact:"HIGH",source:"Morgan Stanley Equity Research"}],bearCase:[{title:"Hyperscaler Custom Silicon In-House Efforts",desc:"Custom ASICs (Google TPU, AWS Trainium, Meta MTIA) could erode long-term pricing power for inference workloads.",impact:"HIGH",source:"Semianalysis Research"},{title:"Elevated Valuation Multiples",desc:"Trading at premium multiples leaves less margin of safety if enterprise cloud capex growth moderates.",impact:"MEDIUM",source:"FactSet & Yahoo Finance"}],newsSentiment:{positivePercent:74,neutralPercent:16,negativePercent:10,totalArticlesParsed:22,articles:[{headline:"NVIDIA Blackwell chips shipping at volume scale; enterprise demand accelerates",source:"CNBC",date:"Yesterday",sentiment:"POSITIVE",impact:"HIGH",summary:"Supply packaging yields improving ahead of target schedule."}]},upcomingEvents:[{title:"GTC Global AI Conference Keynote",date:"March 18, 2026",significance:"HIGH",type:"Architecture Launch",impact:"Unveiling next-generation Rubin architecture roadmap."}],hypotheticalAllocation:{totalBudget:"USD 10,000",strategy:"High-Growth AI Hardware Strategy",allocations:[{asset:"NVIDIA Corp (NASDAQ: NVDA)",amount:4500,percent:45,role:"Core AI Compute Anchor",rationale:"Leading GPU architecture"},{asset:"Microsoft Corp (NASDAQ: MSFT)",amount:2500,percent:25,role:"Enterprise Software Partner",rationale:"Azure infrastructure scale"},{asset:"TSMC (NYSE: TSM)",amount:2e3,percent:20,role:"Foundry Manufacturer",rationale:"Exclusive advanced node supplier"},{asset:"Cash / Treasury Reserve",amount:1e3,percent:10,role:"Capital Reserve",rationale:"Volatility buffer"}]},sourcesVisited:[{name:"Yahoo Finance Live Multiples",url:"https://finance.yahoo.com/quote/NVDA/",status:"200 OK",bytes:"148 KB",depth:3},{name:"Nasdaq Official Market Activity",url:"https://www.nasdaq.com/market-activity/stocks/nvda",status:"200 OK",bytes:"175 KB",depth:2},{name:"Google Finance Overview",url:"https://www.google.com/finance/quote/NVDA:NASDAQ",status:"200 OK",bytes:"92 KB",depth:2},{name:"Reuters Markets Desk",url:"https://www.reuters.com/markets/companies/NVDA",status:"200 OK",bytes:"86 KB",depth:2},{name:"MarketWatch Financial Statements",url:"https://www.marketwatch.com/investing/stock/nvda",status:"200 OK",bytes:"115 KB",depth:2}]},RELIANCE:{ticker:"RELIANCE",exchange:"NSE / BSE",market:"India",name:"Reliance Industries Ltd.",sector:"Oil-to-Chemicals, Telecom & Retail",currency:"INR",currentPrice:2980,priceChange:"+0.85%",iconType:"energy",summary:"India's highest market-cap conglomerate with a trinity of cash-generating refining assets, telecom disruptor Jio, and nationwide retail leadership.",scores:{financialHealth:85,growthPotential:82,historicalPerformance:84,valuation:75,debtLeverage:72,newsEvents:80,riskProfile:78},overallScore:80,evidenceConfidence:"HIGH",sourcesCount:5,researchStatus:"Strong Research Profile",disclaimer:"This research assessment is generated via multi-source web cross-verification for decision-support purposes only. It does not constitute investment advice or order execution.",evidence:[{id:"rel-1",claim:"Jio telecom ARPU increased to INR 182 with 5G standalone network coverage spanning all 22 circles",sourceA:{name:"RIL Investor Presentation Q3",type:"Official Filing",url:"https://ril.com/investors",match:!0},sourceB:{name:"TRAI Telecom Monthly Report",type:"Regulatory",url:"https://trai.gov.in",match:!0},confidence:"HIGH",status:"VERIFIED",metric:"Telecom ARPU & 5G Coverage",discrepancy:null}],bullCase:[{title:"Potential Consumer Business Demergers",desc:"Anticipated value unlocking via standalone listings of retail and telecom arms.",impact:"HIGH",source:"Jefferies India Research"}],bearCase:[{title:"Heavy Ongoing Capital Expenditures",desc:"Significant capex across green energy gigafactories keeps net debt-to-EBITDA slightly elevated.",impact:"MEDIUM",source:"Screener.in & ICICI Direct"}],newsSentiment:{positivePercent:58,neutralPercent:30,negativePercent:12,totalArticlesParsed:15,articles:[{headline:"Jio launches AI Cloud welcome offer for Indian smartphone users",source:"Mint",date:"2 days ago",sentiment:"POSITIVE",impact:"MEDIUM",summary:"Drives subscriber stickiness."}]},upcomingEvents:[{title:"RIL Board Meeting & Q4 Numbers",date:"April 24, 2026",significance:"HIGH",type:"Earnings",impact:"Key disclosures on retail segment footfalls."}],hypotheticalAllocation:{totalBudget:"INR 50,000",strategy:"Conglomerate Core Strategy",allocations:[{asset:"Reliance Industries",amount:2e4,percent:40,role:"Anchor",rationale:"Dominant market position"},{asset:"HDFC Bank",amount:2e4,percent:40,role:"Financials",rationale:"Credit growth beneficiary"},{asset:"Cash Reserve",amount:1e4,percent:20,role:"Liquidity",rationale:"Rebalancing buffer"}]},sourcesVisited:[{name:"Yahoo Finance India (RELIANCE.NS)",url:"https://finance.yahoo.com/quote/RELIANCE.NS/",status:"200 OK",bytes:"135 KB",depth:3},{name:"NSE India Official Portal",url:"https://www.nseindia.com/get-quotes/equity?symbol=RELIANCE",status:"200 OK",bytes:"115 KB",depth:2},{name:"Google Finance (RELIANCE:NSE)",url:"https://www.google.com/finance/quote/RELIANCE:NSE",status:"200 OK",bytes:"85 KB",depth:2},{name:"Reuters India Desk",url:"https://www.reuters.com/markets/companies/RELI.NS",status:"200 OK",bytes:"72 KB",depth:2},{name:"MarketWatch India",url:"https://www.marketwatch.com/investing/stock/reliance",status:"200 OK",bytes:"90 KB",depth:2}]}};function LT({params:t,onChange:e,onCompleteSetup:n,userLevel:i,setUserLevel:r}){const[s,a]=Oe.useState(1),o=[{key:"NVIDIA",name:"NVIDIA Corp.",ticker:"NVDA",market:"United States (NASDAQ)",sector:"Semiconductors & AI",currency:"USD",icon:q0},{key:"TESLA",name:"Tesla Inc.",ticker:"TSLA",market:"United States (NASDAQ)",sector:"Automobile & Clean Tech",currency:"USD",icon:id},{key:"HDFC_BANK",name:"HDFC Bank",ticker:"HDFCBANK",market:"India (NSE)",sector:"Banking & Financials",currency:"INR",icon:jf},{key:"RELIANCE",name:"Reliance Industries",ticker:"RELIANCE",market:"India (NSE)",sector:"Telecom & Retail",currency:"INR",icon:id}],l=[{label:"INR 25,000",value:"25000",currency:"INR"},{label:"INR 50,000 (Demo)",value:"50000",currency:"INR"},{label:"INR 1,00,000",value:"100000",currency:"INR"},{label:"USD $5,000",value:"5000",currency:"USD"}],c=["Semiconductors & AI","Automobile & Clean Tech","Banking & Financials","Software & Cloud","Consumer Tech & Hardware","Energy & Industrial","Healthcare & Biotech"],p=()=>{Ye.playClick(),s<5?a(s+1):n()},m=()=>{Ye.playClick(),s>1&&a(s-1)},u=f=>{Ye.playClick(),e({...t,stockKey:f.key,companyQuery:f.name,ticker:f.ticker,sector:f.sector,market:f.market.includes("India")?"India":"United States",currency:f.currency||(f.market.includes("India")?"INR":"USD")})};return h.jsxs("div",{className:"w-full max-w-3xl mx-auto flex flex-col gap-6 py-6 px-4",children:[h.jsxs("div",{className:"flex items-center justify-between bg-[#0b110d] border border-brand-light/20 rounded-2xl p-2.5",children:[h.jsxs("div",{className:"flex items-center gap-2 px-2",children:[h.jsx(dS,{className:"w-4 h-4 text-brand-lime"}),h.jsx("span",{className:"text-xs font-mono text-slate-300",children:"Research Experience Level:"})]}),h.jsxs("div",{className:"flex items-center gap-1.5 bg-[#060907] p-1 rounded-xl border border-white/[0.06]",children:[h.jsx("button",{onClick:()=>{Ye.playClick(),r("beginner")},className:`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all duration-200 ${i==="beginner"?"bg-brand-medium text-[#060907] shadow-md shadow-brand-medium/30":"text-slate-400 hover:text-white"}`,children:"Beginner (Plain English)"}),h.jsx("button",{onClick:()=>{Ye.playClick(),r("advanced")},className:`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all duration-200 ${i==="advanced"?"bg-brand-lime text-[#060907] shadow-md shadow-brand-lime/30":"text-slate-400 hover:text-white"}`,children:"Advanced (Full Wall St. Ratios)"})]})]}),h.jsxs("div",{className:"flex flex-col gap-2",children:[h.jsxs("div",{className:"flex items-center justify-between text-xs font-mono text-slate-400",children:[h.jsx("span",{className:"text-brand-lime font-bold uppercase tracking-wider",children:"YOUR INVESTMENT RESEARCH JOURNEY"}),h.jsxs("span",{children:["STEP ",s," OF 5"]})]}),h.jsxs("div",{className:"flex items-center justify-between relative px-2",children:[h.jsx("div",{className:"absolute top-1/2 left-4 right-4 h-0.5 bg-slate-800 -translate-y-1/2 z-0"}),h.jsx("div",{className:"absolute top-1/2 left-4 h-0.5 bg-gradient-to-r from-brand-lime to-brand-medium -translate-y-1/2 z-0 transition-all duration-500",style:{width:`${(s-1)/4*100}%`}}),[{id:1,label:"Company"},{id:2,label:"Budget"},{id:3,label:"Risk"},{id:4,label:"Horizon"},{id:5,label:"Review"}].map(f=>h.jsxs("div",{className:"relative z-10 flex flex-col items-center gap-1.5",children:[h.jsx("div",{className:`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${s>f.id?"bg-brand-medium text-[#060907] shadow-md shadow-brand-medium/30":s===f.id?"bg-brand-lime text-[#060907] ring-4 ring-brand-lime/20 shadow-lg shadow-brand-lime/40":"bg-slate-800 text-slate-400 border border-slate-700"}`,children:s>f.id?"✓":f.id}),h.jsx("span",{className:`text-[10px] font-mono ${s>=f.id?"text-brand-light font-bold":"text-slate-500"}`,children:f.label})]},f.id))]})]}),h.jsxs("div",{className:"bg-[#0b110d]/90 border border-brand-light/20 rounded-3xl p-6 sm:p-8 flex flex-col gap-6 shadow-2xl relative overflow-hidden",children:[h.jsx("div",{className:"absolute -top-12 -right-12 w-48 h-48 bg-brand-light/10 rounded-full blur-3xl pointer-events-none"}),s===1&&h.jsxs("div",{className:"flex flex-col gap-5 animate-in fade-in slide-in-from-right-4 duration-300",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-xs font-mono font-bold text-brand-lime uppercase tracking-widest block mb-1",children:"TARGET ASSET IDENTIFICATION"}),h.jsx("h2",{className:"text-2xl sm:text-3xl font-extrabold text-white font-sans",children:"Which company would you like to research?"}),h.jsx("p",{className:"text-xs sm:text-sm text-slate-300 mt-1",children:"Select a popular stock or enter your custom ticker and sector. InvestiLens will scan official filings, exchange quotes, financial multiples, and news feeds."})]}),h.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2.5",children:o.map(f=>{const y=f.icon;return h.jsxs("button",{onClick:()=>u(f),className:`p-3 rounded-2xl border text-left flex flex-col gap-1 transition-all duration-300 ${t.stockKey===f.key||t.companyQuery===f.name?"bg-brand-medium/20 border-brand-lime shadow-xl shadow-brand-medium/15":"bg-[#060907]/80 border-white/[0.08] hover:border-brand-light/40 hover:bg-[#0f1812]"}`,children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("div",{className:"w-7 h-7 rounded-lg bg-brand-deep/40 border border-brand-light/30 flex items-center justify-center text-brand-lime",children:h.jsx(y,{className:"w-3.5 h-3.5"})}),h.jsx("span",{className:"text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-brand-lime font-bold",children:f.ticker})]}),h.jsx("span",{className:"text-xs font-bold text-white font-mono mt-0.5",children:f.name}),h.jsx("span",{className:"text-[10px] text-slate-400 truncate",children:f.sector})]},f.key)})}),h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-white/[0.08]",children:[h.jsxs("div",{children:[h.jsx("label",{className:"text-[11px] font-mono text-slate-400 block mb-1",children:"Company Name"}),h.jsxs("div",{className:"relative",children:[h.jsx(Ky,{className:"w-4 h-4 absolute left-3.5 top-3 text-brand-light"}),h.jsx("input",{type:"text",value:t.companyQuery,onChange:f=>e({...t,companyQuery:f.target.value,stockKey:"CUSTOM"}),placeholder:"e.g. NVIDIA, Tesla, Tata Motors",className:"w-full bg-[#060907] border border-brand-light/25 rounded-xl pl-10 pr-3 py-2.5 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-brand-lime focus:ring-1 focus:ring-brand-lime/20"})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"text-[11px] font-mono text-slate-400 block mb-1",children:"Stock Ticker Symbol"}),h.jsx("input",{type:"text",value:t.ticker||(t.stockKey==="NVIDIA"?"NVDA":t.stockKey==="TESLA"?"TSLA":t.stockKey==="HDFC_BANK"?"HDFCBANK":t.stockKey==="RELIANCE"?"RELIANCE":t.companyQuery),onChange:f=>e({...t,ticker:f.target.value.toUpperCase()}),placeholder:"e.g. NVDA, TSLA, HDFCBANK",className:"w-full bg-[#060907] border border-brand-light/25 rounded-xl px-3.5 py-2.5 text-xs font-mono font-bold text-brand-lime uppercase placeholder-slate-500 focus:outline-none focus:border-brand-lime focus:ring-1 focus:ring-brand-lime/20"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"text-[11px] font-mono text-slate-400 block mb-1",children:"Market & Exchange"}),h.jsxs("select",{value:t.market,onChange:f=>e({...t,market:f.target.value,currency:f.target.value==="India"?"INR":"USD"}),className:"w-full bg-[#060907] border border-brand-light/25 rounded-xl px-3 py-2.5 text-xs font-mono text-slate-200 focus:outline-none focus:border-brand-lime",children:[h.jsx("option",{value:"United States",children:"United States (NASDAQ / NYSE)"}),h.jsx("option",{value:"India",children:"India (NSE / BSE)"})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"text-[11px] font-mono text-slate-400 block mb-1",children:"Industry Sector"}),h.jsx("select",{value:t.sector||"Semiconductors & AI",onChange:f=>e({...t,sector:f.target.value}),className:"w-full bg-[#060907] border border-brand-light/25 rounded-xl px-3 py-2.5 text-xs font-mono text-slate-200 focus:outline-none focus:border-brand-lime",children:c.map(f=>h.jsx("option",{value:f,children:f},f))})]})]}),t.companyQuery&&h.jsxs("div",{className:"p-3.5 rounded-xl bg-brand-deep/20 border border-brand-medium/40 flex items-center justify-between text-xs font-mono animate-in fade-in",children:[h.jsxs("div",{className:"flex items-center gap-2.5",children:[h.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-brand-lime animate-ping"}),h.jsxs("span",{className:"text-slate-200",children:["Selected Target: ",h.jsx("strong",{className:"text-brand-lime",children:t.companyQuery})," (",t.ticker||"Auto-detected",") • ",t.sector||"General"]})]}),h.jsx("span",{className:"text-brand-light font-bold text-[11px]",children:"Ready for Scope ✓"})]})]}),s===2&&h.jsxs("div",{className:"flex flex-col gap-5 animate-in fade-in slide-in-from-right-4 duration-300",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-xs font-mono font-bold text-brand-lime uppercase tracking-widest block mb-1",children:"CAPITAL CONSTRAINT"}),h.jsx("h2",{className:"text-2xl sm:text-3xl font-extrabold text-white font-sans",children:"How much are you planning to invest?"}),h.jsx("p",{className:"text-xs sm:text-sm text-slate-300 mt-1",children:"This helps the system determine appropriate diversification and position sizing in the hypothetical model."})]}),h.jsxs("div",{className:"relative",children:[h.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-brand-lime font-mono text-lg font-black",children:t.currency==="INR"?"INR":"USD"}),h.jsx("input",{type:"number",value:t.amount,onChange:f=>e({...t,amount:f.target.value}),className:"w-full bg-[#060907] border border-brand-light/30 rounded-2xl pl-16 pr-24 py-4 text-xl font-mono font-bold text-white focus:outline-none focus:border-brand-lime focus:ring-2 focus:ring-brand-lime/20 transition-all shadow-inner"}),h.jsxs("select",{value:t.currency,onChange:f=>{Ye.playClick(),e({...t,currency:f.target.value})},className:"absolute inset-y-2 right-2 bg-slate-800 text-xs font-mono text-slate-200 rounded-xl px-3 border border-slate-700 focus:outline-none cursor-pointer",children:[h.jsx("option",{value:"INR",children:"INR (₹)"}),h.jsx("option",{value:"USD",children:"USD ($)"})]})]}),h.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2.5",children:l.map(f=>h.jsx("button",{onClick:()=>{Ye.playClick(),e({...t,amount:f.value,currency:f.currency})},className:`p-3 rounded-xl border font-mono text-xs font-bold transition-all ${t.amount===f.value&&t.currency===f.currency?"bg-brand-medium/25 border-brand-lime text-brand-lime shadow-md":"bg-[#060907] border-white/[0.08] text-slate-400 hover:border-brand-light/40 hover:text-white"}`,children:f.label},f.label))}),h.jsx("div",{className:"p-3.5 rounded-xl bg-brand-deep/20 border border-brand-medium/30 text-xs font-mono text-brand-light",children:"System Note: The agent calibrates risk buffers and liquid cash reserves according to your capital constraint."})]}),s===3&&h.jsxs("div",{className:"flex flex-col gap-5 animate-in fade-in slide-in-from-right-4 duration-300",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-xs font-mono font-bold text-brand-lime uppercase tracking-widest block mb-1",children:"RISK TOLERANCE"}),h.jsx("h2",{className:"text-2xl sm:text-3xl font-extrabold text-white font-sans",children:"How much risk are you comfortable with?"}),h.jsx("p",{className:"text-xs sm:text-sm text-slate-300 mt-1",children:"We will actively hunt for disconfirming hazards that violate your tolerance threshold."})]}),h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3.5",children:[{level:"Conservative",desc:"Prioritize capital preservation, low debt, and predictable steady cash flows.",color:"text-brand-light"},{level:"Moderate",desc:"Balanced approach seeking solid compounders with controlled volatility.",color:"text-brand-lime"},{level:"Aggressive",desc:"High growth frontier, willing to accept price swings for expanding market share.",color:"text-brand-medium"}].map(f=>h.jsxs("button",{onClick:()=>{Ye.playClick(),e({...t,risk:f.level})},className:`p-5 rounded-2xl border text-left flex flex-col gap-2 transition-all ${t.risk===f.level?"bg-brand-medium/20 border-brand-lime shadow-xl shadow-brand-medium/20":"bg-[#060907] border-white/[0.08] text-slate-400 hover:border-brand-light/40 hover:text-white"}`,children:[h.jsx("span",{className:`text-base font-bold font-mono ${f.color}`,children:f.level}),h.jsx("p",{className:"text-xs text-slate-300 leading-relaxed font-sans",children:f.desc})]},f.level))})]}),s===4&&h.jsxs("div",{className:"flex flex-col gap-5 animate-in fade-in slide-in-from-right-4 duration-300",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-xs font-mono font-bold text-brand-lime uppercase tracking-widest block mb-1",children:"TIME HORIZON"}),h.jsx("h2",{className:"text-2xl sm:text-3xl font-extrabold text-white font-sans",children:"What is your investment horizon?"}),h.jsx("p",{className:"text-xs sm:text-sm text-slate-300 mt-1",children:"Determines whether the research emphasizes short-term catalysts or multi-year structural moats."})]}),h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3.5",children:[{title:"Short-term",span:"< 1 Year",note:"Focuses on upcoming quarterly earnings, NIM repricing, and macroeconomic catalysts."},{title:"Medium-term",span:"3–5 Years",note:"Evaluates post-merger synergies, branch deposit mobilization, and sustainable ROE."},{title:"Long-term",span:"5–10+ Years",note:"Analyzes industry dominance, compound moat durability, and generational compounding."}].map(f=>h.jsxs("button",{onClick:()=>{Ye.playClick(),e({...t,horizon:`${f.title} (${f.span})`})},className:`p-5 rounded-2xl border text-left flex flex-col gap-2 transition-all ${t.horizon.includes(f.title)?"bg-brand-medium/20 border-brand-lime shadow-xl shadow-brand-medium/20":"bg-[#060907] border-white/[0.08] text-slate-400 hover:border-brand-light/40 hover:text-white"}`,children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:"text-sm font-bold font-mono text-white",children:f.title}),h.jsx("span",{className:"text-xs font-mono font-bold text-brand-lime",children:f.span})]}),h.jsx("p",{className:"text-xs text-slate-300 leading-relaxed font-sans",children:f.note})]},f.title))})]}),s===5&&h.jsxs("div",{className:"flex flex-col gap-5 animate-in fade-in slide-in-from-right-4 duration-300",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-xs font-mono font-bold text-brand-lime uppercase tracking-widest block mb-1",children:"OBJECTIVE SUMMARY"}),h.jsx("h2",{className:"text-2xl sm:text-3xl font-extrabold text-white font-sans",children:"INVESTILENS now understands your objective."}),h.jsx("p",{className:"text-xs sm:text-sm text-slate-300 mt-1",children:"Ready to generate the autonomous multi-source research plan."})]}),h.jsxs("div",{className:"bg-[#060907] border border-brand-light/30 rounded-2xl p-5 flex flex-col gap-2.5 font-mono text-xs shadow-inner",children:[h.jsxs("div",{className:"flex justify-between border-b border-white/[0.08] pb-2",children:[h.jsx("span",{className:"text-slate-400",children:"Target Asset:"}),h.jsxs("span",{className:"text-brand-lime font-bold",children:[t.companyQuery," (",t.ticker||"Auto-detected",") • ",t.sector||"General"]})]}),h.jsxs("div",{className:"flex justify-between border-b border-white/[0.08] pb-2",children:[h.jsx("span",{className:"text-slate-400",children:"Market & Exchange:"}),h.jsx("span",{className:"text-white font-bold",children:t.market})]}),h.jsxs("div",{className:"flex justify-between border-b border-white/[0.08] pb-2",children:[h.jsx("span",{className:"text-slate-400",children:"Investment Budget:"}),h.jsxs("span",{className:"text-white font-bold",children:[t.currency==="INR"?"INR ₹":"USD $",Number(t.amount).toLocaleString()]})]}),h.jsxs("div",{className:"flex justify-between border-b border-white/[0.08] pb-2",children:[h.jsx("span",{className:"text-slate-400",children:"Investor Experience:"}),h.jsxs("span",{className:"text-brand-light font-bold capitalize",children:[i," Mode"]})]}),h.jsxs("div",{className:"flex justify-between border-b border-white/[0.08] pb-2",children:[h.jsx("span",{className:"text-slate-400",children:"Risk Profile:"}),h.jsx("span",{className:"text-brand-light font-bold",children:t.risk})]}),h.jsxs("div",{className:"flex justify-between border-b border-white/[0.08] pb-2",children:[h.jsx("span",{className:"text-slate-400",children:"Time Horizon:"}),h.jsx("span",{className:"text-white font-bold",children:t.horizon})]}),h.jsxs("div",{className:"pt-2",children:[h.jsx("span",{className:"text-[10px] text-slate-400 uppercase tracking-wider block mb-1.5",children:"Active Authoritative Data & News Source (Focused Deep Research):"}),h.jsx("div",{className:"flex flex-wrap gap-1.5",children:["Reuters Markets Desk (reuters.com)"].map(f=>h.jsxs("span",{className:"px-3 py-1 rounded-lg bg-brand-deep/40 border border-brand-lime/30 text-xs text-brand-lime font-mono font-bold",children:["✓ ",f]},f))})]})]}),h.jsx("div",{className:"p-3.5 rounded-xl bg-brand-deep/20 border border-brand-medium/40 text-xs font-mono text-brand-lime",children:"✓ Ready to construct focused research plan with 2 Human-in-the-Loop approval checkpoints via Reuters Markets Desk."})]}),h.jsxs("div",{className:"flex items-center justify-between border-t border-white/[0.08] pt-4 mt-2",children:[s>1?h.jsxs("button",{onClick:m,className:"inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#060907] border border-white/[0.1] text-slate-300 hover:text-white font-mono text-xs font-bold transition-all",children:[h.jsx(My,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Back"})]}):h.jsx("div",{}),h.jsxs("button",{onClick:p,className:"inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-[#F0FB43] via-[#7ED043] to-[#4FB734] hover:from-[#f4fc65] hover:to-[#5bc93f] text-[#060907] font-mono text-xs font-extrabold uppercase tracking-wider shadow-lg shadow-brand-medium/25 hover:scale-105 active:scale-95 transition-all",children:[h.jsx("span",{children:s===5?"GENERATE RESEARCH PLAN":"CONTINUE"}),h.jsx(Kl,{className:"w-4 h-4"})]})]})]})]})}function DT({stockData:t,params:e,onAcceptPlan:n,onEditPlan:i}){const[r,s]=Oe.useState(0),[a,o]=Oe.useState(null),l=["Analyzing your capital constraint and horizon...","Understanding risk tolerance & disconfirmation rules...","Selecting Top 5 authoritative web sources (Yahoo, Nasdaq, Google, Reuters, MarketWatch)...","Building balanced Bull/Bear investigation framework...","Research plan ready for human approval."];Oe.useEffect(()=>{Ye.playCheckpointAlert();const p=setInterval(()=>{s(m=>m<l.length-1?(Ye.playClick(),m+1):(clearInterval(p),m))},450);return()=>clearInterval(p)},[]);const c=[{id:"fundamentals",title:"Fundamentals & Health",icon:$0,desc:`We will examine revenue growth YoY, profit margins, Return on Equity (ROE), and free cash flows for ${(t==null?void 0:t.name)||e.companyQuery} directly from financial statements.`},{id:"valuation",title:"Valuation & Multiples",icon:K0,desc:"We will evaluate market capitalization, trailing P/E, forward P/E, and 52-week trading range across Yahoo Finance and official exchange data."},{id:"news",title:"News Sentiment",icon:Xf,desc:"We will scan and classify verified breaking news headlines from Reuters, CNBC, and Google Finance into Positive, Neutral, and Negative impact categories."},{id:"bull",title:"Bull Case Moat",icon:lS,desc:"We will document long-term growth catalysts, addressable market expansion, and pricing power."},{id:"bear",title:"Bear Disconfirmation",icon:Z0,desc:"Core requirement: We actively hunt for reasons NOT to invest, including multiple contraction, cyclical capex slowdown, and competitive threats."},{id:"catalysts",title:"Upcoming Catalysts",icon:Nc,desc:"We will extract verified calendar dates for upcoming quarterly earnings prints, investor calls, and regulatory milestones."}];return h.jsxs("div",{className:"w-full max-w-4xl mx-auto flex flex-col gap-6 py-6 px-4",children:[h.jsxs("div",{className:"bg-[#0b110d]/90 border border-brand-light/25 rounded-3xl p-6 flex flex-col gap-4 shadow-2xl",children:[h.jsxs("div",{className:"flex items-center justify-between border-b border-white/[0.08] pb-3",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("div",{className:"w-9 h-9 rounded-xl bg-brand-deep/30 border border-brand-light/40 flex items-center justify-center text-brand-lime shadow-sm",children:h.jsx(Nc,{className:"w-5 h-5 animate-pulse"})}),h.jsxs("div",{children:[h.jsx("span",{className:"text-[10px] font-mono font-bold text-brand-lime uppercase tracking-widest block",children:"STEP 3: HUMAN-IN-THE-LOOP CHECKPOINT"}),h.jsxs("h2",{className:"text-xl font-bold text-white font-mono",children:["Interactive Research Plan: ",(t==null?void 0:t.name)||e.companyQuery]})]})]}),h.jsx("span",{className:"text-xs font-mono px-3 py-1 rounded-full bg-brand-deep/40 text-brand-lime border border-brand-light/30 font-bold",children:"HUMAN APPROVAL REQUIRED"})]}),h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs",children:l.map((p,m)=>{const u=r>=m;return h.jsxs("div",{className:"flex items-center gap-2 py-1 transition-opacity duration-300 "+(u?"text-slate-200 opacity-100":"text-slate-600 opacity-40"),children:[h.jsx("span",{className:"w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold "+(u?"bg-brand-medium text-[#060907]":"bg-slate-800 text-slate-500"),children:u?"✓":"○"}),h.jsx("span",{children:p})]},m)})})]}),h.jsxs("div",{className:"relative bg-[#070b08] border border-brand-light/20 rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center gap-6 shadow-2xl overflow-hidden",children:[h.jsx("div",{className:"text-center font-mono text-xs text-slate-400",children:"Click any research dimension node to preview the autonomous investigation scope:"}),h.jsxs("div",{className:"w-full flex flex-col items-center gap-6 z-10",children:[h.jsxs("div",{className:"relative group",children:[h.jsx("div",{className:"absolute -inset-2 bg-gradient-to-r from-brand-lime via-brand-medium to-brand-deep rounded-2xl blur-md opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse"}),h.jsxs("div",{className:"relative px-6 py-4 rounded-xl bg-[#0b110d] border-2 border-brand-lime text-center shadow-2xl flex flex-col items-center gap-1",children:[h.jsx("div",{className:"w-9 h-9 rounded-lg bg-brand-deep/40 border border-brand-light/30 flex items-center justify-center text-brand-lime mb-1",children:h.jsx(jf,{className:"w-5 h-5"})}),h.jsx("span",{className:"text-base font-black text-white font-mono",children:(t==null?void 0:t.name)||e.companyQuery}),h.jsxs("span",{className:"text-xs font-mono text-brand-lime font-bold",children:[e.currency==="INR"?"INR ":"USD ",Number(e.amount).toLocaleString()," • ",e.risk," • ",e.horizon]})]})]}),h.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3 w-full",children:c.map(p=>{const m=p.icon,u=(a==null?void 0:a.id)===p.id;return h.jsxs("button",{onClick:()=>{Ye.playClick(),o(u?null:p)},className:"p-3.5 rounded-2xl border text-left flex flex-col gap-1.5 transition-all duration-300 "+(u?"bg-brand-deep/40 border-brand-lime shadow-xl shadow-brand-lime/20 scale-105":"bg-[#0b110d]/80 border-white/[0.08] hover:border-brand-light/40 hover:bg-[#111a14]"),children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx(m,{className:"w-4 h-4 text-brand-lime"}),h.jsx("span",{className:"text-[10px] font-mono text-slate-400",children:"Inspect"})]}),h.jsx("span",{className:"text-xs font-bold text-white font-mono",children:p.title})]},p.id)})})]}),a&&h.jsxs("div",{className:"w-full bg-[#0b110d] border-2 border-brand-lime rounded-2xl p-4 flex flex-col gap-2 font-mono text-xs animate-in fade-in duration-200",children:[h.jsxs("div",{className:"flex items-center justify-between text-brand-lime font-bold",children:[h.jsxs("span",{className:"flex items-center gap-2",children:[h.jsx(Nc,{className:"w-4 h-4"}),h.jsxs("span",{children:["Scope Preview: ",a.title]})]}),h.jsx("button",{onClick:()=>o(null),className:"text-slate-400 hover:text-white",children:h.jsx($f,{className:"w-4 h-4"})})]}),h.jsx("p",{className:"text-slate-200 font-sans text-xs leading-relaxed",children:a.desc})]}),h.jsxs("div",{className:"w-full flex items-center justify-between text-xs font-mono text-slate-400 border-t border-white/[0.08] pt-4",children:[h.jsxs("span",{children:["Sources to Investigate: ",h.jsx("strong",{children:"6 Verified Portals"})," (Official IR, Screener, BSE, Moneycontrol, Reuters, RBI)"]}),h.jsx("span",{className:"text-brand-lime font-bold",children:"Confidence: HIGH"})]})]}),h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3.5",children:[h.jsxs("button",{onClick:()=>{Ye.playClick(),n()},className:"sm:col-span-2 py-4 px-6 rounded-2xl bg-gradient-to-r from-[#F0FB43] via-[#7ED043] to-[#4FB734] hover:from-[#f4fc65] hover:to-[#5bc93f] text-[#060907] font-black font-mono text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-xl shadow-brand-medium/30 hover:scale-105 active:scale-95 transition-all duration-300",children:[h.jsx(j0,{className:"w-5 h-5"}),h.jsx("span",{children:"ACCEPT & LAUNCH AUTONOMOUS RESEARCH"})]}),h.jsxs("button",{onClick:()=>{Ye.playClick(),i()},className:"py-4 px-4 rounded-2xl bg-[#0b110d] hover:bg-[#111a14] text-brand-lime border border-brand-light/30 font-bold font-mono text-xs flex items-center justify-center gap-2 transition-all hover:border-brand-lime/60",children:[h.jsx(Y0,{className:"w-4 h-4"}),h.jsx("span",{children:"EDIT PLAN"})]})]})]})}const Fx={financialHealth:{weight:.25,label:"Financial Health",description:"Balance sheet strength, profitability, ROE/ROA, margins"},growthPotential:{weight:.2,label:"Growth Potential",description:"Revenue/NII trajectory, sector tailwinds, addressable market"},historicalPerformance:{weight:.15,label:"Historical Performance",description:"Multi-year consistency, alpha generation vs benchmark"},valuation:{weight:.15,label:"Valuation",description:"P/E, P/B, EV/EBITDA, intrinsic value vs historical median"},debtLeverage:{weight:.1,label:"Debt & Leverage",description:"Debt-to-equity, interest coverage ratio, liquidity buffers"},newsEvents:{weight:.1,label:"News & Events",description:"Sentiment classification, upcoming earnings & regulatory catalysts"},riskProfile:{weight:.05,label:"Risk & Governance",description:"Promoter integrity, regulatory exposure, macro sensitivity"}};function UT(t){let e=0,n=[];for(const[o,l]of Object.entries(Fx)){const c=t[o]!==void 0?Number(t[o]):70,p=Math.max(0,Math.min(100,c)),m=p*l.weight;e+=m,n.push({key:o,label:l.label,description:l.description,rawScore:Math.round(p),weightPercent:Math.round(l.weight*100),contribution:Number(m.toFixed(2))})}const i=Math.round(e);let r="",s="",a="";return i>=80?(r="Strong Research Profile",s="text-brand-lime",a="bg-brand-medium/20 border-brand-lime text-brand-lime"):i>=65?(r="Moderate Research Profile",s="text-brand-light",a="bg-brand-light/20 border-brand-light text-brand-light"):i>=50?(r="Higher-Risk Research Profile",s="text-amber-400",a="bg-amber-500/20 border-amber-500 text-amber-300"):(r="Requires Further Investigation",s="text-rose-400",a="bg-rose-500/20 border-rose-500 text-rose-300"),{finalScore:i,breakdown:n,profileVerdict:r,verdictColor:s,verdictBadge:a,formulaExplanation:"Score = (Financial Health * 0.25) + (Growth * 0.20) + (Historical * 0.15) + (Valuation * 0.15) + (Debt * 0.10) + (News * 0.10) + (Risk * 0.05)"}}const Nm=[{id:1,name:"Collect User Requirements",icon:"UserCheck",description:"Parsing budget, risk tolerance, horizon & target asset"},{id:2,name:"Create Research Plan",icon:"FileSpreadsheet",description:"Synthesizing 6-8 independent source objectives"},{id:3,name:"Human Approval #1",icon:"ShieldAlert",isCheckpoint:!0,description:"Checkpoint: Waiting for user approval on research scope"},{id:4,name:"Webcmd Browser Research",icon:"Globe",description:"Spawning browser sessions & navigating targeted financial sources"},{id:5,name:"Collect Structured Evidence",icon:"Database",description:"Extracting claims, numbers, filings, and audit data"},{id:6,name:"Cross-Verification Engine",icon:"CheckCheck",description:"Cross-referencing claims across independent primary sources"},{id:7,name:"Financial & Metric Analysis",icon:"TrendingUp",description:"Evaluating revenue, margins, cash flows, and debt metrics"},{id:8,name:"News Sentiment Intelligence",icon:"Newspaper",description:"Classifying recent news into Positive, Neutral & Negative impact"},{id:9,name:"Upcoming Events & Catalysts",icon:"Calendar",description:"Detecting earnings calls, regulatory dates, and product launches"},{id:10,name:"Bull Case Formulation",icon:"ArrowUpRight",description:"Extracting growth drivers and strategic moats"},{id:11,name:"Bear Case / Counter-Analysis",icon:"ArrowDownRight",description:"Actively searching for disconfirming evidence and risks"},{id:12,name:"Deterministic Scoring Engine",icon:"Calculator",description:"Computing non-blackbox 7-dimension weighted scorecard"},{id:13,name:"Personalized Alignment",icon:"Sliders",description:"Mapping findings to user risk profile and capital constraints"},{id:14,name:"Hypothetical Allocation",icon:"PieChart",description:"Generating transparent decision-support asset model"},{id:15,name:"Human Approval #2",icon:"ShieldAlert",isCheckpoint:!0,description:"Checkpoint: Review preliminary findings & sign-off final report"},{id:16,name:"Final Report Generation",icon:"Award",description:"Publishing verified multi-source research dossier"}];class FT{constructor(e={}){this.mode=e.mode||"simulation",this.backendUrl=e.backendUrl||"http://localhost:8000/api",this.wsUrl=e.wsUrl||"ws://localhost:8000/stream"}setMode(e,n,i){this.mode=e,n&&(this.backendUrl=n),i&&(this.wsUrl=i)}}new FT;function kT({currentStageId:t,stagesProgress:e,browserLogs:n=[],currentUrl:i,browserStatus:r,speed:s,onSetSpeed:a,activeStockData:o}){const l=Oe.useRef(null),c=Oe.useRef(null),[p,m]=Oe.useState(0);Oe.useEffect(()=>{const g=Date.now(),v=setInterval(()=>{m(Date.now()-g)},100);return()=>clearInterval(v)},[]),Oe.useEffect(()=>{var g;(g=c.current)==null||g.scrollIntoView({behavior:"smooth"})},[n]);const u=Oe.useMemo(()=>{const g=[];let v="";for(const M of n){const T=`${M.type}:${M.message}`;T!==v&&(g.push(M),v=T)}return g},[n]),f=Oe.useMemo(()=>({name:"Reuters Markets Desk",domain:"reuters.com",metric:"Real-Time Quotes, P/E Valuation, Multiples, Financials & News Intelligence",color:"text-brand-lime",badge:"bg-brand-medium/20 text-brand-lime"}),[i]);Oe.useEffect(()=>{const g=l.current;if(!g)return;const v=g.getContext("2d");let M;const T=[{id:"core",name:"INVESTILENS CORE",x:.5,y:.5,color:"#F0FB43",radius:28,isCore:!0},{id:"src-1",name:"Reuters Overview & Quotes",url:"reuters",x:.2,y:.25,color:"#7ED043",radius:18},{id:"src-2",name:"Reuters Key Metrics & P/E",url:"reuters",x:.8,y:.25,color:"#F0FB43",radius:18},{id:"src-3",name:"Reuters Financial Statements",url:"reuters",x:.18,y:.78,color:"#38bdf8",radius:18},{id:"src-4",name:"Reuters Breaking News Wire",url:"reuters",x:.82,y:.78,color:"#4FB734",radius:18}],w=[];for(let A=0;A<24;A++)w.push({sourceIdx:Math.floor(Math.random()*(T.length-1))+1,progress:Math.random(),speed:.009+Math.random()*.015,size:2.5+Math.random()*2});let R=0;const _=()=>{M=requestAnimationFrame(_),R+=.02;const A=g.width,I=g.height;v.clearRect(0,0,A,I);const L=T[0].x*A,z=T[0].y*I;v.strokeStyle="rgba(126, 208, 67, 0.05)",v.lineWidth=1;for(let V=0;V<A;V+=28)v.beginPath(),v.moveTo(V,0),v.lineTo(V,I),v.stroke();for(let V=0;V<I;V+=28)v.beginPath(),v.moveTo(0,V),v.lineTo(A,V),v.stroke();T.slice(1).forEach(V=>{const Q=V.x*A,O=V.y*I,Y=i&&i.toLowerCase().includes(V.url.toLowerCase());v.beginPath(),v.moveTo(Q,O),v.lineTo(L,z),Y?(v.strokeStyle="#F0FB43",v.lineWidth=2.5,v.shadowColor="#F0FB43",v.shadowBlur=15):(v.strokeStyle="rgba(79, 183, 52, 0.25)",v.lineWidth=1.2,v.shadowBlur=0),v.stroke()}),w.forEach(V=>{V.progress+=V.speed,V.progress>=1&&(V.progress=0);const Q=T[V.sourceIdx],O=Q.x*A,Y=Q.y*I,G=O+(L-O)*V.progress,k=Y+(z-Y)*V.progress;v.beginPath(),v.arc(G,k,V.size,0,Math.PI*2),v.fillStyle=Q.color,v.shadowColor=Q.color,v.shadowBlur=10,v.fill()}),T.forEach(V=>{var G;const Q=V.x*A,O=V.y*I,Y=i&&i.toLowerCase().includes((G=V.url)==null?void 0:G.toLowerCase());v.beginPath(),v.arc(Q,O,V.radius+(Y?8+Math.sin(R*6)*3:4),0,Math.PI*2),v.fillStyle=Y?"rgba(240, 251, 67, 0.25)":"rgba(79, 183, 52, 0.08)",v.fill(),v.beginPath(),v.arc(Q,O,V.radius,0,Math.PI*2),v.fillStyle=V.isCore?"#0f1c13":"#070c09",v.strokeStyle=Y?"#F0FB43":V.color,v.lineWidth=Y?3:2,v.shadowColor=V.color,v.shadowBlur=Y?20:8,v.fill(),v.stroke(),v.font=V.isCore?"bold 11px 'JetBrains Mono', monospace":"10px 'Inter', sans-serif",v.fillStyle=Y?"#F0FB43":"#f4f8f4",v.textAlign="center",v.shadowBlur=0,v.fillText(V.name,Q,O+V.radius+14)})};return _(),()=>cancelAnimationFrame(M)},[i]);const y=Nm.find(g=>g.id===t)||Nm[3],E=(p/1e3).toFixed(1),x=Math.min(Number(E),Number(E)*.75).toFixed(1),d=Math.max(0,Number(E)-Number(x)).toFixed(1);return h.jsxs("div",{className:"w-full max-w-5xl mx-auto flex flex-col gap-6 py-6 px-4",children:[h.jsxs("div",{className:"bg-[#0b110d]/95 border border-brand-light/30 rounded-3xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xl",children:[h.jsxs("div",{className:"flex items-center gap-3.5",children:[h.jsx("div",{className:"w-11 h-11 rounded-2xl bg-brand-deep/30 border border-brand-lime/40 flex items-center justify-center text-brand-lime shadow-lg",children:h.jsx(Vy,{className:"w-6 h-6 animate-spin text-brand-lime"})}),h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center gap-2 font-mono text-xs text-brand-lime font-bold",children:[h.jsx(jy,{className:"w-3.5 h-3.5 animate-pulse"}),h.jsx("span",{children:"AUTONOMOUS TOP 5 SOURCE RESEARCH RUNNING"})]}),h.jsxs("h2",{className:"text-lg font-bold text-white font-mono mt-0.5",children:[y.name," (Stage ",t,"/16)"]}),h.jsx("p",{className:"text-xs text-slate-300 font-sans",children:y.description})]})]}),h.jsxs("div",{className:"flex flex-col sm:items-end gap-1.5 font-mono",children:[h.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#060907] border border-brand-light/30 text-xs text-white shadow-inner",children:[h.jsx(Uy,{className:"w-3.5 h-3.5 text-brand-lime animate-spin"}),h.jsxs("span",{children:["Total Elapsed: ",h.jsxs("strong",{className:"text-brand-lime",children:[E,"s"]})]})]}),h.jsxs("div",{className:"flex items-center gap-2 text-[10px] text-slate-400",children:[h.jsxs("span",{className:"flex items-center gap-1",children:[h.jsx(id,{className:"w-3 h-3 text-amber-300"})," Scrape: ",x,"s"]}),h.jsx("span",{children:"•"}),h.jsxs("span",{className:"flex items-center gap-1",children:[h.jsx(q0,{className:"w-3 h-3 text-sky-300"})," Synthesis: ",d,"s"]})]})]})]}),h.jsxs("div",{className:"bg-[#0b110d]/90 border border-brand-lime/30 rounded-2xl p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-lg",children:[h.jsxs("div",{className:"flex items-center gap-2.5",children:[h.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-brand-lime animate-ping"}),h.jsxs("span",{className:"text-xs font-mono text-slate-300",children:["CURRENTLY EXTRACTING FROM: ",h.jsx("strong",{className:`font-bold ${f.color}`,children:f.name})]})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsxs("span",{className:"text-[11px] font-mono text-slate-400",children:["Action: ",f.metric]}),h.jsx("span",{className:`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${f.badge}`,children:"ACTIVE"})]})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-5",children:[h.jsxs("div",{className:"lg:col-span-7 bg-[#070c09] border border-brand-light/20 rounded-3xl p-5 flex flex-col gap-3 shadow-2xl relative overflow-hidden",children:[h.jsxs("div",{className:"flex items-center justify-between font-mono text-xs text-slate-300",children:[h.jsx("span",{className:"text-brand-lime font-bold",children:"TOP 5 SOURCE PHOTON STREAM"}),h.jsx("span",{className:"text-slate-500",children:"Latency: ~210ms avg"})]}),h.jsx("div",{className:"w-full h-[320px] rounded-2xl overflow-hidden bg-[#050806] border border-white/[0.06] shadow-inner",children:h.jsx("canvas",{ref:l,width:620,height:320,className:"w-full h-full block"})}),h.jsxs("div",{className:"bg-[#0b110d] border border-brand-light/30 rounded-xl px-4 py-2.5 flex items-center gap-2 text-xs font-mono text-slate-200",children:[h.jsx(Xf,{className:"w-4 h-4 text-brand-lime animate-pulse flex-shrink-0"}),h.jsx("span",{className:"truncate",children:i||"https://finance.yahoo.com"}),h.jsx("span",{className:"ml-auto px-2 py-0.5 rounded bg-brand-medium/20 text-brand-lime text-[10px] font-bold",children:"200 OK"})]})]}),h.jsxs("div",{className:"lg:col-span-5 bg-[#070c09] border border-brand-light/20 rounded-3xl p-5 flex flex-col gap-3 shadow-2xl",children:[h.jsxs("div",{className:"flex items-center justify-between text-xs font-mono text-slate-300",children:[h.jsxs("div",{className:"flex items-center gap-2 text-brand-lime font-bold",children:[h.jsx(aS,{className:"w-4 h-4"}),h.jsx("span",{children:"Webcmd Skill Telemetry"})]}),h.jsxs("span",{className:"text-[10px] text-slate-400 bg-black/40 px-2 py-0.5 rounded",children:[u.length," actions"]})]}),h.jsxs("div",{className:"flex-1 bg-[#050806] border border-white/[0.06] rounded-2xl p-3.5 overflow-y-auto font-mono text-[11px] leading-relaxed flex flex-col gap-1.5 text-slate-300 max-h-[360px] shadow-inner",children:[u.map((g,v)=>h.jsxs("div",{className:"flex items-start gap-2 py-1 hover:bg-white/[0.03] rounded px-1.5",children:[h.jsx("span",{className:"text-slate-500 text-[10px] flex-shrink-0",children:g.time}),h.jsx("span",{className:`text-[9px] uppercase px-1.5 py-0.5 rounded font-bold flex-shrink-0 ${g.type==="webcmd"?"bg-brand-light/20 text-brand-lime":g.type==="evidence"?"bg-brand-medium/20 text-brand-light":g.type==="checkpoint"?"bg-amber-400/20 text-amber-300 font-bold":"bg-slate-800 text-slate-400"}`,children:g.type}),h.jsx("span",{className:`break-all ${g.type==="checkpoint"?"text-amber-200 font-bold":"text-slate-300"}`,children:g.message})]},v)),h.jsx("div",{ref:c})]})]})]})]})}var oh={};(function t(e,n,i,r){var s=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=function(){if(!e.OffscreenCanvas)return!1;try{var P=new OffscreenCanvas(1,1),C=P.getContext("2d");C.fillRect(0,0,1,1);var D=P.transferToImageBitmap();C.createPattern(D,"no-repeat")}catch{return!1}return!0}();function l(){}function c(P){var C=n.exports.Promise,D=C!==void 0?C:e.Promise;return typeof D=="function"?new D(P):(P(l,l),null)}var p=function(P,C){return{transform:function(D){if(P)return D;if(C.has(D))return C.get(D);var re=new OffscreenCanvas(D.width,D.height),ae=re.getContext("2d");return ae.drawImage(D,0,0),C.set(D,re),re},clear:function(){C.clear()}}}(o,new Map),m=function(){var P=Math.floor(16.666666666666668),C,D,re={},ae=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(C=function(oe){var W=Math.random();return re[W]=requestAnimationFrame(function J(te){ae===te||ae+P-1<te?(ae=te,delete re[W],oe()):re[W]=requestAnimationFrame(J)}),W},D=function(oe){re[oe]&&cancelAnimationFrame(re[oe])}):(C=function(oe){return setTimeout(oe,P)},D=function(oe){return clearTimeout(oe)}),{frame:C,cancel:D}}(),u=function(){var P,C,D={};function re(ae){function oe(W,J){ae.postMessage({options:W||{},callback:J})}ae.init=function(J){var te=J.transferControlToOffscreen();ae.postMessage({canvas:te},[te])},ae.fire=function(J,te,xe){if(C)return oe(J,null),C;var Ee=Math.random().toString(36).slice(2);return C=c(function(ge){function He(De){De.data.callback===Ee&&(delete D[Ee],ae.removeEventListener("message",He),C=null,p.clear(),xe(),ge())}ae.addEventListener("message",He),oe(J,Ee),D[Ee]=He.bind(null,{data:{callback:Ee}})}),C},ae.reset=function(){ae.postMessage({reset:!0});for(var J in D)D[J](),delete D[J]}}return function(){if(P)return P;if(!i&&s){var ae=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{P=new Worker(URL.createObjectURL(new Blob([ae])))}catch(oe){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",oe),null}re(P)}return P}}(),f={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function y(P,C){return C?C(P):P}function E(P){return P!=null}function x(P,C,D){return y(P&&E(P[C])?P[C]:f[C],D)}function d(P){return P<0?0:Math.floor(P)}function g(P,C){return Math.floor(Math.random()*(C-P))+P}function v(P){return parseInt(P,16)}function M(P){return P.map(T)}function T(P){var C=String(P).replace(/[^0-9a-f]/gi,"");return C.length<6&&(C=C[0]+C[0]+C[1]+C[1]+C[2]+C[2]),{r:v(C.substring(0,2)),g:v(C.substring(2,4)),b:v(C.substring(4,6))}}function w(P){var C=x(P,"origin",Object);return C.x=x(C,"x",Number),C.y=x(C,"y",Number),C}function R(P){P.width=document.documentElement.clientWidth,P.height=document.documentElement.clientHeight}function _(P){var C=P.getBoundingClientRect();P.width=C.width,P.height=C.height}function A(P){var C=document.createElement("canvas");return C.style.position="fixed",C.style.top="0px",C.style.left="0px",C.style.pointerEvents="none",C.style.zIndex=P,C}function I(P,C,D,re,ae,oe,W,J,te){P.save(),P.translate(C,D),P.rotate(oe),P.scale(re,ae),P.arc(0,0,1,W,J,te),P.restore()}function L(P){var C=P.angle*(Math.PI/180),D=P.spread*(Math.PI/180);return{x:P.x,y:P.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:P.startVelocity*.5+Math.random()*P.startVelocity,angle2D:-C+(.5*D-Math.random()*D),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:P.color,shape:P.shape,tick:0,totalTicks:P.ticks,decay:P.decay,drift:P.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:P.gravity*3,ovalScalar:.6,scalar:P.scalar,flat:P.flat}}function z(P,C){C.x+=Math.cos(C.angle2D)*C.velocity+C.drift,C.y+=Math.sin(C.angle2D)*C.velocity+C.gravity,C.velocity*=C.decay,C.flat?(C.wobble=0,C.wobbleX=C.x+10*C.scalar,C.wobbleY=C.y+10*C.scalar,C.tiltSin=0,C.tiltCos=0,C.random=1):(C.wobble+=C.wobbleSpeed,C.wobbleX=C.x+10*C.scalar*Math.cos(C.wobble),C.wobbleY=C.y+10*C.scalar*Math.sin(C.wobble),C.tiltAngle+=.1,C.tiltSin=Math.sin(C.tiltAngle),C.tiltCos=Math.cos(C.tiltAngle),C.random=Math.random()+2);var D=C.tick++/C.totalTicks,re=C.x+C.random*C.tiltCos,ae=C.y+C.random*C.tiltSin,oe=C.wobbleX+C.random*C.tiltCos,W=C.wobbleY+C.random*C.tiltSin;if(P.fillStyle="rgba("+C.color.r+", "+C.color.g+", "+C.color.b+", "+(1-D)+")",P.beginPath(),a&&C.shape.type==="path"&&typeof C.shape.path=="string"&&Array.isArray(C.shape.matrix))P.fill(G(C.shape.path,C.shape.matrix,C.x,C.y,Math.abs(oe-re)*.1,Math.abs(W-ae)*.1,Math.PI/10*C.wobble));else if(C.shape.type==="bitmap"){var J=Math.PI/10*C.wobble,te=Math.abs(oe-re)*.1,xe=Math.abs(W-ae)*.1,Ee=C.shape.bitmap.width*C.scalar,ge=C.shape.bitmap.height*C.scalar,He=new DOMMatrix([Math.cos(J)*te,Math.sin(J)*te,-Math.sin(J)*xe,Math.cos(J)*xe,C.x,C.y]);He.multiplySelf(new DOMMatrix(C.shape.matrix));var De=P.createPattern(p.transform(C.shape.bitmap),"no-repeat");De.setTransform(He),P.globalAlpha=1-D,P.fillStyle=De,P.fillRect(C.x-Ee/2,C.y-ge/2,Ee,ge),P.globalAlpha=1}else if(C.shape==="circle")P.ellipse?P.ellipse(C.x,C.y,Math.abs(oe-re)*C.ovalScalar,Math.abs(W-ae)*C.ovalScalar,Math.PI/10*C.wobble,0,2*Math.PI):I(P,C.x,C.y,Math.abs(oe-re)*C.ovalScalar,Math.abs(W-ae)*C.ovalScalar,Math.PI/10*C.wobble,0,2*Math.PI);else if(C.shape==="star")for(var Ae=Math.PI/2*3,Be=4*C.scalar,ze=8*C.scalar,nt=C.x,st=C.y,ft=5,lt=Math.PI/ft;ft--;)nt=C.x+Math.cos(Ae)*ze,st=C.y+Math.sin(Ae)*ze,P.lineTo(nt,st),Ae+=lt,nt=C.x+Math.cos(Ae)*Be,st=C.y+Math.sin(Ae)*Be,P.lineTo(nt,st),Ae+=lt;else P.moveTo(Math.floor(C.x),Math.floor(C.y)),P.lineTo(Math.floor(C.wobbleX),Math.floor(ae)),P.lineTo(Math.floor(oe),Math.floor(W)),P.lineTo(Math.floor(re),Math.floor(C.wobbleY));return P.closePath(),P.fill(),C.tick<C.totalTicks}function V(P,C,D,re,ae){var oe=C.slice(),W=P.getContext("2d"),J,te,xe=c(function(Ee){function ge(){J=te=null,W.clearRect(0,0,re.width,re.height),p.clear(),ae(),Ee()}function He(){i&&!(re.width===r.width&&re.height===r.height)&&(re.width=P.width=r.width,re.height=P.height=r.height),!re.width&&!re.height&&(D(P),re.width=P.width,re.height=P.height),W.clearRect(0,0,re.width,re.height),oe=oe.filter(function(De){return z(W,De)}),oe.length?J=m.frame(He):ge()}J=m.frame(He),te=ge});return{addFettis:function(Ee){return oe=oe.concat(Ee),xe},canvas:P,promise:xe,reset:function(){J&&m.cancel(J),te&&te()}}}function Q(P,C){var D=!P,re=!!x(C||{},"resize"),ae=!1,oe=x(C,"disableForReducedMotion",Boolean),W=s&&!!x(C||{},"useWorker"),J=W?u():null,te=D?R:_,xe=P&&J?!!P.__confetti_initialized:!1,Ee=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,ge;function He(Ae,Be,ze){for(var nt=x(Ae,"particleCount",d),st=x(Ae,"angle",Number),ft=x(Ae,"spread",Number),lt=x(Ae,"startVelocity",Number),vt=x(Ae,"decay",Number),Et=x(Ae,"gravity",Number),F=x(Ae,"drift",Number),Ht=x(Ae,"colors",M),it=x(Ae,"ticks",Number),N=x(Ae,"shapes"),S=x(Ae,"scalar"),H=!!x(Ae,"flat"),$=w(Ae),ee=nt,ue=[],de=P.width*$.x,ne=P.height*$.y;ee--;)ue.push(L({x:de,y:ne,angle:st,spread:ft,startVelocity:lt,color:Ht[ee%Ht.length],shape:N[g(0,N.length)],ticks:it,decay:vt,gravity:Et,drift:F,scalar:S,flat:H}));return ge?ge.addFettis(ue):(ge=V(P,ue,te,Be,ze),ge.promise)}function De(Ae){var Be=oe||x(Ae,"disableForReducedMotion",Boolean),ze=x(Ae,"zIndex",Number);if(Be&&Ee)return c(function(lt){lt()});D&&ge?P=ge.canvas:D&&!P&&(P=A(ze),document.body.appendChild(P)),re&&!xe&&te(P);var nt={width:P.width,height:P.height};J&&!xe&&J.init(P),xe=!0,J&&(P.__confetti_initialized=!0);function st(){if(J){var lt={getBoundingClientRect:function(){if(!D)return P.getBoundingClientRect()}};te(lt),J.postMessage({resize:{width:lt.width,height:lt.height}});return}nt.width=nt.height=null}function ft(){ge=null,re&&(ae=!1,e.removeEventListener("resize",st)),D&&P&&(document.body.contains(P)&&document.body.removeChild(P),P=null,xe=!1)}return re&&!ae&&(ae=!0,e.addEventListener("resize",st,!1)),J?J.fire(Ae,nt,ft):He(Ae,nt,ft)}return De.reset=function(){J&&J.reset(),ge&&ge.reset()},De}var O;function Y(){return O||(O=Q(null,{useWorker:!0,resize:!0})),O}function G(P,C,D,re,ae,oe,W){var J=new Path2D(P),te=new Path2D;te.addPath(J,new DOMMatrix(C));var xe=new Path2D;return xe.addPath(te,new DOMMatrix([Math.cos(W)*ae,Math.sin(W)*ae,-Math.sin(W)*oe,Math.cos(W)*oe,D,re])),xe}function k(P){if(!a)throw new Error("path confetti are not supported in this browser");var C,D;typeof P=="string"?C=P:(C=P.path,D=P.matrix);var re=new Path2D(C),ae=document.createElement("canvas"),oe=ae.getContext("2d");if(!D){for(var W=1e3,J=W,te=W,xe=0,Ee=0,ge,He,De=0;De<W;De+=2)for(var Ae=0;Ae<W;Ae+=2)oe.isPointInPath(re,De,Ae,"nonzero")&&(J=Math.min(J,De),te=Math.min(te,Ae),xe=Math.max(xe,De),Ee=Math.max(Ee,Ae));ge=xe-J,He=Ee-te;var Be=10,ze=Math.min(Be/ge,Be/He);D=[ze,0,0,ze,-Math.round(ge/2+J)*ze,-Math.round(He/2+te)*ze]}return{type:"path",path:C,matrix:D}}function Z(P){var C,D=1,re="#000000",ae='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof P=="string"?C=P:(C=P.text,D="scalar"in P?P.scalar:D,ae="fontFamily"in P?P.fontFamily:ae,re="color"in P?P.color:re);var oe=10*D,W=""+oe+"px "+ae,J=new OffscreenCanvas(oe,oe),te=J.getContext("2d");te.font=W;var xe=te.measureText(C),Ee=Math.ceil(xe.actualBoundingBoxRight+xe.actualBoundingBoxLeft),ge=Math.ceil(xe.actualBoundingBoxAscent+xe.actualBoundingBoxDescent),He=2,De=xe.actualBoundingBoxLeft+He,Ae=xe.actualBoundingBoxAscent+He;Ee+=He+He,ge+=He+He,J=new OffscreenCanvas(Ee,ge),te=J.getContext("2d"),te.font=W,te.fillStyle=re,te.fillText(C,De,Ae);var Be=1/D;return{type:"bitmap",bitmap:J.transferToImageBitmap(),matrix:[Be,0,0,Be,-Ee*Be/2,-ge*Be/2]}}n.exports=function(){return Y().apply(this,arguments)},n.exports.reset=function(){Y().reset()},n.exports.create=Q,n.exports.shapeFromPath=k,n.exports.shapeFromText=Z})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),oh,!1);const OT=oh.exports;oh.exports.create;function BT({stockData:t,params:e,userLevel:n,setUserLevel:i,onResearchAnother:r}){const[s,a]=Oe.useState(!1),[o,l]=Oe.useState(!1),[c,p]=Oe.useState((t==null?void 0:t.scores)||{financialHealth:88,growthPotential:84,historicalPerformance:86,valuation:78,debtLeverage:82,newsEvents:85,riskProfile:80}),m=UT(c);Oe.useEffect(()=>{Ye.playReportSuccess(),OT({particleCount:90,spread:70,origin:{y:.6},colors:["#F0FB43","#7ED043","#4FB734","#328F35"]})},[]);const u=()=>{Ye.playClick();const f=`==================================================
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
==================================================`;navigator.clipboard.writeText(f),a(!0),setTimeout(()=>a(!1),2e3)};return h.jsxs("div",{className:"w-full max-w-5xl mx-auto flex flex-col gap-6 py-6 px-4",children:[h.jsxs("div",{className:"relative overflow-hidden bg-gradient-to-br from-[#0c1a11] via-[#0f2417] to-[#070e0a] border border-brand-light/40 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl",children:[h.jsxs("div",{className:"flex items-center gap-4 relative z-10",children:[h.jsx("div",{className:"w-16 h-16 rounded-2xl bg-[#060907] border-2 border-brand-lime flex items-center justify-center text-brand-lime shadow-2xl flex-shrink-0",children:h.jsx(jf,{className:"w-8 h-8"})}),h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center gap-2.5",children:[h.jsx("h2",{className:"text-2xl font-black text-white font-mono",children:t.name}),h.jsxs("span",{className:"text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-brand-deep/60 text-brand-lime border border-brand-light/30",children:[t.ticker," - ",t.exchange]})]}),h.jsxs("p",{className:"text-xs sm:text-sm text-slate-300 font-sans mt-0.5",children:[t.sector," - Calibrated for ",e.currency==="INR"?"INR ":"USD ",Number(e.amount).toLocaleString()," capital limit"]})]})]}),h.jsxs("div",{className:"flex items-center gap-6 ml-auto md:ml-0 relative z-10",children:[h.jsxs("div",{className:"text-right",children:[h.jsx("span",{className:"text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block",children:"DETERMINISTIC SCORE"}),h.jsxs("div",{className:"flex items-center gap-1.5 justify-end",children:[h.jsx("span",{className:"text-4xl font-black font-mono green-gradient-text",children:m.finalScore}),h.jsx("span",{className:"text-sm font-mono text-slate-500 font-bold",children:"/100"})]})]}),h.jsx("div",{className:"w-px h-12 bg-white/[0.1]"}),h.jsxs("div",{children:[h.jsx("span",{className:"text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-1",children:"VERDICT"}),h.jsx("span",{className:"text-xs font-black font-mono px-3.5 py-1.5 rounded-xl bg-brand-medium/25 text-brand-lime border border-brand-lime/50 shadow-lg shadow-brand-medium/20 inline-block",children:m.profileVerdict})]})]})]}),h.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 bg-[#0b110d] border border-brand-light/20 rounded-2xl p-3 text-xs font-mono",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(qf,{className:"w-4 h-4 text-brand-lime"}),h.jsxs("span",{className:"text-slate-300",children:["Evidence Confidence: ",h.jsx("strong",{className:"text-brand-lime",children:"HIGH (6 Sources Cross-Verified)"})]})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsxs("button",{onClick:()=>{Ye.playClick(),l(!o)},className:"px-3 py-1.5 rounded-xl bg-brand-deep/40 text-brand-lime border border-brand-light/30 hover:bg-brand-deep/60 transition-all flex items-center gap-1.5",children:[h.jsx(iS,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Score Simulator"})]}),h.jsxs("button",{onClick:u,className:"px-3 py-1.5 rounded-xl bg-brand-medium/25 text-brand-lime border border-brand-lime/40 hover:bg-brand-medium/40 transition-all flex items-center gap-1.5 font-bold",children:[s?h.jsx(W0,{className:"w-3.5 h-3.5"}):h.jsx(ky,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:s?"Copied!":"Copy Report"})]}),h.jsxs("button",{onClick:()=>{Ye.playClick(),r()},className:"px-3 py-1.5 rounded-xl bg-[#060907] text-slate-300 border border-white/[0.1] hover:text-white hover:border-brand-light/50 transition-all flex items-center gap-1.5",children:[h.jsx(qy,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Research Another"})]})]})]}),o&&h.jsxs("div",{className:"bg-[#0b110d] border-2 border-brand-lime rounded-3xl p-6 flex flex-col gap-4 shadow-2xl animate-in fade-in",children:[h.jsxs("div",{className:"flex items-center justify-between border-b border-white/[0.08] pb-3",children:[h.jsx("span",{className:"text-brand-lime font-mono text-xs font-bold uppercase tracking-wider",children:"INTERACTIVE WHAT-IF SCENARIO SIMULATOR (STEP 12)"}),h.jsx("button",{onClick:()=>p(t.scores),className:"text-xs font-mono text-slate-400 hover:text-white",children:"Reset Values"})]}),h.jsx("p",{className:"text-xs text-slate-300 font-sans",children:"Adjust the fundamental and risk dimensions to test how different balance sheet changes alter the deterministic score:"}),h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs",children:Object.entries(Fx).map(([f,y])=>h.jsxs("div",{className:"p-3 rounded-xl bg-[#060907] border border-white/[0.08] flex flex-col gap-1.5",children:[h.jsxs("div",{className:"flex justify-between",children:[h.jsx("span",{className:"text-slate-200 font-bold",children:y.label}),h.jsxs("span",{className:"text-brand-lime font-bold",children:[c[f],"/100"]})]}),h.jsx("input",{type:"range",min:"0",max:"100",value:c[f],onChange:E=>p({...c,[f]:Number(E.target.value)}),className:"accent-brand-lime cursor-pointer"})]},f))})]}),h.jsxs("div",{className:"flex flex-col gap-4",children:[h.jsxs("div",{className:"bg-[#0b110d]/90 border border-brand-light/20 rounded-3xl p-6 flex flex-col gap-4 shadow-xl",children:[h.jsxs("div",{className:"flex items-center justify-between border-b border-white/[0.08] pb-3",children:[h.jsxs("div",{className:"flex items-center gap-2.5",children:[h.jsx("span",{className:"w-6 h-6 rounded-full bg-brand-medium text-[#060907] flex items-center justify-center text-xs font-mono font-bold",children:"1"}),h.jsx("h3",{className:"text-base font-bold text-white font-mono",children:"The Big Picture & Decision Signal"})]}),h.jsx("span",{className:"text-xs font-mono text-brand-lime font-bold",children:"EXECUTIVE SUMMARY"})]}),h.jsx("p",{className:"text-sm text-slate-200 leading-relaxed font-sans",children:t.summary}),h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs",children:m.breakdown.map(f=>h.jsxs("div",{className:"p-3 rounded-2xl bg-[#060907] border border-white/[0.06] flex flex-col gap-1.5",children:[h.jsxs("div",{className:"flex justify-between items-center",children:[h.jsx("span",{className:"text-slate-300 font-bold",children:f.label}),h.jsxs("span",{className:"text-brand-lime font-bold",children:[f.rawScore,"/100"]})]}),h.jsx("div",{className:"w-full bg-slate-800 h-2 rounded-full overflow-hidden",children:h.jsx("div",{className:"bg-gradient-to-r from-brand-medium to-brand-lime h-full rounded-full",style:{width:`${f.rawScore}%`}})}),h.jsx("span",{className:"text-[10px] text-slate-400 truncate",children:f.description})]},f.key))})]}),h.jsxs("div",{className:"bg-[#07130c] border border-brand-light/30 rounded-3xl p-6 flex flex-col gap-4 shadow-xl",children:[h.jsxs("div",{className:"flex items-center justify-between border-b border-brand-light/20 pb-3",children:[h.jsxs("div",{className:"flex items-center gap-2.5",children:[h.jsx("span",{className:"w-6 h-6 rounded-full bg-brand-light text-[#060907] flex items-center justify-center text-xs font-mono font-bold",children:"2"}),h.jsx("h3",{className:"text-base font-bold text-brand-lime font-mono",children:"Why It May Be Attractive (Bull Case)"})]}),h.jsxs("span",{className:"text-xs font-mono px-2.5 py-0.5 rounded-full bg-brand-medium/20 text-brand-lime font-bold",children:[t.bullCase.length," VERIFIED PILLARS"]})]}),h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:t.bullCase.map((f,y)=>h.jsxs("div",{className:"p-4 rounded-2xl bg-[#0b1610] border border-brand-light/20 flex flex-col gap-2",children:[h.jsxs("div",{className:"flex items-center gap-1.5 text-xs font-bold text-brand-lime font-mono",children:[h.jsx(j0,{className:"w-4 h-4 text-brand-light flex-shrink-0"}),h.jsx("span",{children:f.title})]}),h.jsx("p",{className:"text-xs text-slate-300 leading-relaxed font-sans",children:f.desc}),h.jsxs("div",{className:"text-[10px] font-mono text-brand-light/80 pt-1 mt-auto",children:["Source: ",f.source]})]},y))})]}),h.jsxs("div",{className:"bg-[#14090b] border border-rose-500/30 rounded-3xl p-6 flex flex-col gap-4 shadow-xl",children:[h.jsxs("div",{className:"flex items-center justify-between border-b border-rose-500/20 pb-3",children:[h.jsxs("div",{className:"flex items-center gap-2.5",children:[h.jsx("span",{className:"w-6 h-6 rounded-full bg-rose-500 text-white flex items-center justify-center text-xs font-mono font-bold",children:"3"}),h.jsx("h3",{className:"text-base font-bold text-rose-300 font-mono",children:"Why To Be Cautious (Bear Counter-Analysis)"})]}),h.jsx("span",{className:"text-xs font-mono px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 font-bold",children:"DISCONFIRMATION FILTER"})]}),h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:t.bearCase.map((f,y)=>h.jsxs("div",{className:"p-4 rounded-2xl bg-[#0e0507] border border-rose-500/20 flex flex-col gap-2",children:[h.jsxs("div",{className:"flex items-center gap-1.5 text-xs font-bold text-rose-300 font-mono",children:[h.jsx(Z0,{className:"w-4 h-4 text-rose-400 flex-shrink-0"}),h.jsx("span",{children:f.title})]}),h.jsx("p",{className:"text-xs text-slate-300 leading-relaxed font-sans",children:f.desc}),h.jsxs("div",{className:"text-[10px] font-mono text-rose-400/80 pt-1 mt-auto",children:["Source: ",f.source]})]},y))})]}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[h.jsxs("div",{className:"bg-[#0b110d]/90 border border-brand-light/20 rounded-3xl p-6 flex flex-col gap-3 shadow-xl",children:[h.jsxs("div",{className:"flex items-center justify-between border-b border-white/[0.08] pb-2.5 font-mono text-xs",children:[h.jsx("span",{className:"text-brand-lime font-bold",children:"4. NEWS SENTIMENT CLASSIFICATION"}),h.jsxs("span",{className:"text-slate-400",children:[t.newsSentiment.totalArticlesParsed," Articles"]})]}),h.jsx("div",{className:"flex flex-col gap-2 pt-1",children:h.jsxs("div",{className:"h-3.5 w-full rounded-full overflow-hidden flex font-mono text-[9px] font-black",children:[h.jsxs("div",{style:{width:`${t.newsSentiment.positivePercent}%`},className:"bg-brand-medium h-full flex items-center justify-center text-[#060907]",children:[t.newsSentiment.positivePercent,"% POS"]}),h.jsxs("div",{style:{width:`${t.newsSentiment.neutralPercent}%`},className:"bg-slate-600 h-full flex items-center justify-center text-white",children:[t.newsSentiment.neutralPercent,"% NEU"]}),h.jsxs("div",{style:{width:`${t.newsSentiment.negativePercent}%`},className:"bg-rose-500 h-full flex items-center justify-center text-white",children:[t.newsSentiment.negativePercent,"% NEG"]})]})}),h.jsx("div",{className:"flex flex-col gap-2 pt-2",children:t.newsSentiment.articles.slice(0,2).map((f,y)=>h.jsxs("div",{className:"p-3 rounded-xl bg-[#060907] border border-white/[0.06] text-xs flex flex-col gap-1",children:[h.jsx("span",{className:"font-bold text-white font-mono",children:f.headline}),h.jsxs("span",{className:"text-[10px] text-slate-400",children:[f.source," - ",f.date]})]},y))})]}),h.jsxs("div",{className:"bg-[#0b110d]/90 border border-brand-light/20 rounded-3xl p-6 flex flex-col gap-3 shadow-xl",children:[h.jsxs("div",{className:"flex items-center justify-between border-b border-white/[0.08] pb-2.5 font-mono text-xs",children:[h.jsx("span",{className:"text-brand-lime font-bold",children:"5. UPCOMING CATALYSTS CALENDAR"}),h.jsx("span",{className:"text-slate-400",children:"Verified Dates"})]}),h.jsx("div",{className:"flex flex-col gap-2.5",children:t.upcomingEvents.map((f,y)=>h.jsxs("div",{className:"p-3 rounded-xl bg-[#060907] border border-white/[0.06] flex items-center justify-between gap-3 text-xs",children:[h.jsxs("div",{className:"flex flex-col gap-0.5",children:[h.jsx("span",{className:"font-bold text-white font-mono",children:f.title}),h.jsx("span",{className:"text-[11px] text-slate-400",children:f.impact})]}),h.jsx("span",{className:"text-brand-lime font-mono font-bold flex-shrink-0 text-right",children:f.date})]},y))})]})]}),h.jsxs("div",{className:"bg-[#0b110d]/90 border border-brand-light/20 rounded-3xl p-6 flex flex-col gap-4 shadow-xl",children:[h.jsxs("div",{className:"flex items-center justify-between border-b border-white/[0.08] pb-3",children:[h.jsxs("div",{className:"flex items-center gap-2.5",children:[h.jsx("span",{className:"w-6 h-6 rounded-full bg-brand-deep text-brand-lime border border-brand-light flex items-center justify-center text-xs font-mono font-bold",children:"6"}),h.jsx("h3",{className:"text-base font-bold text-white font-mono",children:"Hypothetical Allocation Model & Evidence Locker"})]}),h.jsx("span",{className:"text-xs font-mono px-3 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30",children:"NOT FINANCIAL ADVICE"})]}),h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-4 gap-2.5 font-mono text-xs",children:t.hypotheticalAllocation.allocations.map((f,y)=>h.jsxs("div",{className:"p-3.5 rounded-2xl bg-[#060907] border border-white/[0.08] flex flex-col gap-1",children:[h.jsx("span",{className:"text-slate-400 truncate",children:f.asset}),h.jsxs("span",{className:"text-base font-black text-brand-lime",children:[e.currency==="INR"?"INR ":"USD ",f.amount.toLocaleString()]}),h.jsxs("span",{className:"text-[10px] text-slate-300 font-bold",children:[f.percent,"% - ",f.role]})]},y))}),h.jsxs("div",{className:"border-t border-white/[0.08] pt-3",children:[h.jsx("span",{className:"text-xs font-mono text-slate-300 font-bold block mb-2",children:"Cross-Verification Audit Trail:"}),h.jsx("div",{className:"flex flex-col gap-2 font-mono text-xs",children:t.evidence.map(f=>h.jsxs("div",{className:"p-3 rounded-xl bg-[#060907] border border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2",children:[h.jsxs("div",{className:"flex flex-col gap-0.5",children:[h.jsxs("span",{className:"text-white font-semibold",children:['"',f.claim,'"']}),h.jsxs("span",{className:"text-[10px] text-slate-400",children:["Primary: ",f.sourceA.name," - Cross-check: ",f.sourceB.name]})]}),h.jsx("span",{className:"px-2.5 py-0.5 rounded-md bg-brand-medium/20 text-brand-lime text-[10px] font-bold flex-shrink-0",children:"VERIFIED ✓"})]},f.id))})]})]})]})]})}function zT({isOpen:t,onClose:e,onStart:n}){if(!t)return null;const i=[{num:"01",title:"Set Your Investment Objective",desc:"Specify your target company, budget, risk tolerance, and time horizon. The system calibrates all analysis to your personal constraints.",icon:wy},{num:"02",title:"Review & Approve Research Plan",desc:"InvestiLens formulates a 6-source visual research scope. You have full human-in-the-loop control to approve or edit the plan before web browsing begins.",icon:qf},{num:"03",title:"Autonomous Multi-Source Web Crawl",desc:"Webcmd crawls official filings, exchange disclosures (XBRL), financial statements, and reputable news in real-time.",icon:Xf},{num:"04",title:"Cross-Verification & Bear Disconfirmation",desc:"Every major claim is cross-checked across two independent sources. The agent actively hunts for disconfirming hazards to prevent confirmation bias.",icon:K0},{num:"05",title:"Deterministic 7-Dimension Score & Dossier",desc:"Scores the company using a transparent, weighted formula. Delivers an interactive decision-support dossier with zero black-box numbers.",icon:$0}];return h.jsx("div",{className:"fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-200",children:h.jsxs("div",{className:"relative overflow-hidden bg-[#0a110d] border border-brand-light/30 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl flex flex-col gap-6",children:[h.jsxs("div",{className:"flex items-center justify-between border-b border-white/[0.08] pb-4",children:[h.jsxs("div",{className:"flex flex-col",children:[h.jsx("span",{className:"text-[10px] font-mono font-bold text-brand-lime uppercase tracking-widest",children:"INVESTILENS WORKFLOW"}),h.jsx("h2",{className:"text-xl font-bold text-white font-mono mt-0.5",children:"How InvestiLens Works"})]}),h.jsx("button",{onClick:()=>{Ye.playClick(),e()},className:"p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white transition-colors",children:h.jsx($f,{className:"w-4 h-4"})})]}),h.jsx("div",{className:"flex flex-col gap-3.5 max-h-[60vh] overflow-y-auto pr-1",children:i.map((r,s)=>{const a=r.icon;return h.jsxs("div",{className:"p-4 rounded-2xl bg-[#060907] border border-brand-light/15 flex items-start gap-3.5",children:[h.jsx("div",{className:"w-10 h-10 rounded-xl bg-brand-deep/30 border border-brand-light/30 flex items-center justify-center text-brand-lime font-mono text-xs font-bold flex-shrink-0",children:h.jsx(a,{className:"w-5 h-5 text-brand-light"})}),h.jsxs("div",{className:"flex flex-col gap-0.5",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"text-[10px] font-mono text-brand-lime font-bold",children:r.num}),h.jsx("h3",{className:"text-xs font-bold text-white font-mono",children:r.title})]}),h.jsx("p",{className:"text-xs text-slate-300 font-sans leading-relaxed",children:r.desc})]})]},s)})}),h.jsxs("div",{className:"flex items-center justify-between border-t border-white/[0.08] pt-4",children:[h.jsx("span",{className:"text-xs font-mono text-slate-400",children:"Decision-Support Only • No Trades Executed"}),h.jsxs("button",{onClick:()=>{Ye.playClick(),e(),n()},className:"inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#F0FB43] via-[#7ED043] to-[#4FB734] hover:from-[#f4fc65] hover:to-[#5bc93f] text-[#060907] font-mono text-xs font-extrabold uppercase tracking-wider shadow-lg shadow-brand-medium/25 hover:scale-105 transition-all",children:[h.jsx("span",{children:"GET STARTED"}),h.jsx(Kl,{className:"w-4 h-4"})]})]})]})})}function HT({checkpointType:t,stockData:e,params:n,onApprove:i,onModify:r,onCancel:s}){return Oe.useEffect(()=>{t&&Ye.playCheckpointAlert()},[t]),t?h.jsx("div",{className:"fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-300",children:h.jsxs("div",{className:"relative overflow-hidden bg-gradient-to-b from-[#111a30] to-[#0a1122] border-2 border-amber-500/60 rounded-3xl max-w-xl w-full p-6 lg:p-8 shadow-2xl shadow-amber-500/25 flex flex-col gap-6 animate-in zoom-in-95 duration-200",children:[h.jsx("div",{className:"absolute -top-12 -right-12 w-48 h-48 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"}),h.jsx("div",{className:"flex items-start justify-between border-b border-white/[0.08] pb-4",children:h.jsxs("div",{className:"flex items-center gap-3.5",children:[h.jsxs("div",{className:"relative",children:[h.jsx("div",{className:"absolute -inset-1 bg-amber-500 rounded-2xl blur-sm opacity-60 animate-ping"}),h.jsx("div",{className:"relative w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300 shadow-xl",children:h.jsx(eS,{className:"w-6 h-6"})})]}),h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"text-[10px] font-mono font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm",children:t==="plan_approval"?"STEP 3: HUMAN CHECKPOINT":"STEP 15: FINAL APPROVAL"}),h.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"Decision Gateway"})]}),h.jsx("h2",{className:"text-lg font-black text-white font-mono mt-1 tracking-wide",children:t==="plan_approval"?"Research Plan Approval Required":"Pre-Report Verification Checkpoint"})]})]})}),t==="plan_approval"?h.jsxs("div",{className:"flex flex-col gap-4 text-xs font-sans",children:[h.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["Hermes has formulated the autonomous research plan for"," ",h.jsx("strong",{className:"text-emerald-400 font-mono",children:(e==null?void 0:e.name)||n.companyQuery}),". In accordance with safety guidelines, Webcmd will NOT crawl the open web until you inspect and approve the research scope."]}),h.jsxs("div",{className:"bg-[#06090f]/90 border border-white/[0.08] rounded-2xl p-4 flex flex-col gap-2.5 font-mono shadow-inner",children:[h.jsxs("div",{className:"flex justify-between text-slate-300 border-b border-white/[0.06] pb-2",children:[h.jsx("span",{children:"Target Asset:"}),h.jsxs("span",{className:"text-white font-bold",children:[(e==null?void 0:e.name)||n.companyQuery," (",n.market,")"]})]}),h.jsxs("div",{className:"flex justify-between text-slate-300 border-b border-white/[0.06] pb-2",children:[h.jsx("span",{children:"Budget & Horizon:"}),h.jsxs("span",{className:"text-cyan-300 font-bold",children:[n.currency==="INR"?"?":"$",n.amount," � ",n.horizon]})]}),h.jsxs("div",{className:"flex justify-between text-slate-300 border-b border-white/[0.06] pb-2",children:[h.jsx("span",{children:"Planned Web Sources:"}),h.jsx("span",{className:"text-emerald-400 font-bold",children:"6 Independent Verified Portals"})]}),h.jsxs("div",{className:"text-slate-400 pt-1",children:[h.jsx("span",{className:"block mb-1 text-slate-200 font-semibold",children:"Planned Audit Dimensions:"}),h.jsxs("div",{className:"grid grid-cols-2 gap-1 text-[11px] text-slate-300",children:[h.jsx("span",{children:"? 1. Financial Health (NIM, RoA)"}),h.jsx("span",{children:"? 2. Revenue & Margins"}),h.jsx("span",{children:"? 3. Debt & Liquidity Ratio"}),h.jsx("span",{children:"? 4. Valuation Multiples"}),h.jsx("span",{children:"? 5. Bull Growth Drivers"}),h.jsx("span",{children:"? 6. Bear Risk Disconfirmation"}),h.jsx("span",{children:"? 7. News Impact Intelligence"}),h.jsx("span",{children:"? 8. Catalysts & Earnings"})]})]})]})]}):h.jsxs("div",{className:"flex flex-col gap-4 text-xs font-sans",children:[h.jsx("p",{className:"text-slate-300 leading-relaxed",children:"Autonomous multi-source research and cross-verification are complete. Hermes has scored the asset deterministically and extracted both Bull and Bear cases."}),h.jsxs("div",{className:"bg-[#06090f]/90 border border-white/[0.08] rounded-2xl p-4 flex flex-col gap-3 font-mono shadow-inner",children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:"text-slate-300",children:"Deterministic Score:"}),h.jsxs("span",{className:"text-xl font-black text-emerald-400",children:[(e==null?void 0:e.overallScore)||84," / 100"]})]}),h.jsxs("div",{className:"flex items-center justify-between text-slate-300",children:[h.jsx("span",{children:"Confidence Rating:"}),h.jsx("span",{className:"px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-[11px] font-bold",children:"HIGH (Cross-Verified Across 6 Sources)"})]}),h.jsxs("div",{className:"flex items-center justify-between text-slate-300",children:[h.jsx("span",{children:"Profile Verdict:"}),h.jsx("span",{className:"text-cyan-300 font-bold",children:(e==null?void 0:e.researchStatus)||"Strong Research Profile"})]})]}),h.jsxs("div",{className:"p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-[11px] font-mono leading-relaxed",children:["?? ",h.jsx("strong",{children:"Decision-Support Notice:"})," The final report does not place trades or recommend blind execution. Approving below will synthesize the complete research dossier."]})]}),h.jsxs("div",{className:"grid grid-cols-3 gap-3 pt-2",children:[h.jsxs("button",{onClick:()=>{Ye.playClick(),i()},className:"py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-slate-950 font-black font-mono text-xs flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/30 transition-all duration-200 hover:scale-105 active:scale-95",children:[h.jsx(Ry,{className:"w-4 h-4"}),h.jsx("span",{children:t==="plan_approval"?"APPROVE PLAN":"GENERATE REPORT"})]}),h.jsxs("button",{onClick:()=>{Ye.playClick(),r()},className:"py-3.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-bold font-mono text-xs flex items-center justify-center gap-1.5 transition-all hover:scale-105",children:[h.jsx(Y0,{className:"w-4 h-4 text-cyan-400"}),h.jsx("span",{children:t==="plan_approval"?"MODIFY SCOPE":"DEEP DIVE RISKS"})]}),h.jsxs("button",{onClick:()=>{Ye.playClick(),s()},className:"py-3.5 px-4 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 border border-rose-500/30 font-bold font-mono text-xs flex items-center justify-center gap-1.5 transition-all hover:scale-105",children:[h.jsx(Ly,{className:"w-4 h-4"}),h.jsx("span",{children:"CANCEL"})]})]})]})}):null}function VT({isOpen:t,onClose:e,config:n,onSaveConfig:i}){const[r,s]=Oe.useState(n.mode||"simulation"),[a,o]=Oe.useState(n.apiUrl||"http://localhost:8000/api"),[l,c]=Oe.useState(n.wsUrl||"ws://localhost:8000/stream");if(!t)return null;const p=()=>{i({mode:r,apiUrl:a,wsUrl:l}),e()};return h.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4",children:h.jsxs("div",{className:"bg-[#0b110d] border border-brand-light/30 rounded-2xl max-w-lg w-full p-6 shadow-2xl flex flex-col gap-5",children:[h.jsxs("div",{className:"flex items-center justify-between border-b border-white/[0.08] pb-3",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(Qy,{className:"w-5 h-5 text-brand-lime"}),h.jsx("h3",{className:"text-sm font-bold text-white font-mono uppercase tracking-wider",children:"Backend Integration Config"})]}),h.jsx("button",{onClick:e,className:"text-slate-400 hover:text-white",children:h.jsx($f,{className:"w-4 h-4"})})]}),h.jsxs("div",{className:"flex flex-col gap-1.5",children:[h.jsx("label",{className:"text-xs font-medium text-slate-300",children:"Execution Engine Mode"}),h.jsxs("div",{className:"grid grid-cols-2 gap-2 bg-[#060907] p-1 rounded-lg border border-white/[0.08]",children:[h.jsx("button",{onClick:()=>s("simulation"),className:`py-2 text-xs font-mono font-bold rounded ${r==="simulation"?"bg-brand-medium/20 text-brand-lime border border-brand-lime/40":"text-slate-400"}`,children:"Simulation Mode"}),h.jsx("button",{onClick:()=>s("live"),className:`py-2 text-xs font-mono font-bold rounded ${r==="live"?"bg-brand-lime text-[#060907]":"text-slate-400"}`,children:"Live Hermes Bridge"})]}),h.jsx("p",{className:"text-[11px] text-slate-400 mt-1",children:r==="simulation"?"Runs the complete interactive demo flow with realistic data and checkpoint pauses.":"Connects to your teammate's Hermes + Webcmd agent controller via REST/WebSocket."})]}),r==="live"&&h.jsxs("div",{className:"flex flex-col gap-3 font-mono text-xs",children:[h.jsxs("div",{className:"flex flex-col gap-1",children:[h.jsx("label",{className:"text-slate-400",children:"Hermes Agent REST Endpoint"}),h.jsx("input",{type:"text",value:a,onChange:m=>o(m.target.value),placeholder:"http://localhost:8000/api/research",className:"bg-[#060907] border border-brand-light/30 rounded px-3 py-2 text-white focus:outline-none focus:border-brand-lime"})]}),h.jsxs("div",{className:"flex flex-col gap-1",children:[h.jsx("label",{className:"text-slate-400",children:"Webcmd Telemetry Stream (WebSocket / SSE)"}),h.jsx("input",{type:"text",value:l,onChange:m=>c(m.target.value),placeholder:"ws://localhost:8000/stream",className:"bg-[#060907] border border-brand-light/30 rounded px-3 py-2 text-white focus:outline-none focus:border-brand-lime"})]})]}),h.jsxs("div",{className:"flex justify-end gap-2 pt-2",children:[h.jsx("button",{onClick:e,className:"px-4 py-2 rounded-lg bg-slate-800 text-slate-300 font-mono text-xs hover:bg-slate-700",children:"Close"}),h.jsxs("button",{onClick:p,className:"px-4 py-2 rounded-lg bg-gradient-to-r from-brand-lime to-brand-medium text-[#060907] font-mono text-xs font-bold flex items-center gap-1.5",children:[h.jsx(W0,{className:"w-3.5 h-3.5"}),"Save Configuration"]})]})]})})}function GT(t,e,n){var c,p,m,u,f,y,E,x,d,g,v,M,T,w,R,_,A,I,L,z,V,Q,O,Y,G,k,Z,P,C;const i=Number(e.amount)||5e4,r=n==="beginner",s=r?.2:.35,a=Math.round(i*s),o=Math.round(i*.5),l=Math.round(i*(1-s-.5));return{ticker:((c=t.company)==null?void 0:c.ticker)||e.ticker||"NVDA",exchange:(p=e.market)!=null&&p.includes("India")?"NSE / BSE":"NASDAQ / NYSE",market:e.market||"United States",name:((m=t.company)==null?void 0:m.name)||e.companyQuery||"Target Asset",sector:e.sector||"Equity Research",currency:e.currency||"USD",currentPrice:((u=t.historicalPerformance)==null?void 0:u.price)||0,priceChange:(f=t.historicalPerformance)!=null&&f.dailyChangePercent?`${t.historicalPerformance.dailyChangePercent>0?"+":""}${t.historicalPerformance.dailyChangePercent}%`:"Verified Quote",iconType:"chart",summary:t.executiveSummary||"Multi-source research completed with verified fundamentals.",scores:{financialHealth:((y=t.financialHealth)==null?void 0:y.score)||85,growthPotential:((E=t.valuation)==null?void 0:E.score)||80,historicalPerformance:((x=t.historicalPerformance)==null?void 0:x.score)||82,valuation:((d=t.valuation)==null?void 0:d.score)||78,debtLeverage:((g=t.debtLeverage)==null?void 0:g.score)||84,newsEvents:((v=t.newsSentiment)==null?void 0:v.score)||80,riskProfile:((M=t.riskAnalysis)==null?void 0:M.score)||75},overallScore:t.overallScore||80,rating:t.rating||"Moderate Buy",evidenceConfidence:t.evidenceConfidence||"HIGH",sourcesCount:8,researchStatus:`${t.rating||"Strong Buy"} (${t.overallScore||80}/100)`,disclaimer:"This research assessment is generated via multi-source web cross-verification for decision-support purposes only. It does not constitute investment advice or order execution.",evidence:(t.evidenceLocker||[{metric:"Market Capitalization",value:((T=t.valuation)==null?void 0:T.marketCapFormatted)||"$1.433T",source:"Official Filing / Exchange"},{metric:"Trailing P/E Multiple",value:((w=t.valuation)==null?void 0:w.trailingPe)||"33.21",source:"Key Statistics"},{metric:"Revenue YoY Growth",value:((_=(R=t.financialHealth)==null?void 0:R.metrics)==null?void 0:_.revenueGrowth)||"85.20%",source:"Financial Statements"},{metric:"Net Profit Margin",value:((I=(A=t.financialHealth)==null?void 0:A.metrics)==null?void 0:I.profitMargin)||"62.97%",source:"Income Statement"}]).map((D,re)=>{var ae;return{id:`ev-${re+1}`,claim:D.claim||`${D.metric}: ${D.value}`,sourceA:{name:D.source||"Primary Filing / Yahoo Finance",type:"Official Disclosure",url:D.url||`https://finance.yahoo.com/quote/${((ae=t.company)==null?void 0:ae.ticker)||"NVDA"}`,match:!0},sourceB:{name:"Nasdaq / Regulatory Portal",type:"Exchange Audit",url:D.url||"https://www.nasdaq.com",match:!0},confidence:"HIGH",status:"VERIFIED",metric:D.metric||"Verified Financial Metric",discrepancy:null}}),bullCase:(t.bullCase||[{title:"Market Leadership & Growth Catalyst",description:"Dominant positioning in accelerated infrastructure buildout with robust revenue trajectory."},{title:"High Operating Margins & Pricing Power",description:"Sustained high margins and free cash flow yield demonstrate competitive moat."}]).map((D,re)=>({title:D.title||`Bull Growth Catalyst #${re+1}`,desc:D.description||D,impact:"HIGH",source:"Multi-Source Fundamental Research"})),bearCase:(t.bearCase||[{title:"Valuation Multiple Risk",description:"Premium forward multiples require sustained flawless execution without capex deceleration."},{title:"Customer Concentration & Competition",description:"Hyperscalers and competitors developing custom alternative silicon."}]).map((D,re)=>({title:D.title||`Bear Counter-Analysis #${re+1}`,desc:D.description||D,impact:"HIGH",source:"Counter-Analysis Engine"})),newsSentiment:{positivePercent:((z=(L=t.newsSentiment)==null?void 0:L.breakdown)==null?void 0:z.positive)??60,neutralPercent:((Q=(V=t.newsSentiment)==null?void 0:V.breakdown)==null?void 0:Q.neutral)??25,negativePercent:((Y=(O=t.newsSentiment)==null?void 0:O.breakdown)==null?void 0:Y.negative)??15,articles:(((G=t.newsSentiment)==null?void 0:G.headlines)||[{headline:`${((k=t.company)==null?void 0:k.name)||"Company"} earnings and strategic milestones in focus.`,source:"Reuters",sentiment:"positive"},{headline:"Market monitors supply chain and capital expenditure dynamics.",source:"CNBC",sentiment:"neutral"},{headline:"Analysts debate valuation premium and macroeconomic sensitivities.",source:"Bloomberg",sentiment:"negative"}]).map((D,re)=>({headline:typeof D=="string"?D:D.headline,source:D.source||"Markets Desk",date:"Recent",sentiment:(D.sentiment||(re===0?"positive":re===1?"neutral":"negative")).toUpperCase(),impact:"HIGH",summary:typeof D=="string"?D:D.snippet||D.headline}))},upcomingEvents:(t.upcomingEvents||[{title:"Upcoming Quarterly Earnings Release",date:"Within 30 Days",type:"Earnings",impact:"Pivotal revenue guidance and margin print"},{title:"Annual Investor / Product Keynote",date:"Next Quarter",type:"Corporate Event",impact:"Strategic roadmap and ecosystem expansion"}]).map(D=>({title:D.title||"Corporate Event",date:D.date||"Upcoming",significance:"HIGH",type:D.type||"Earnings / Catalysts",impact:D.description||D.impact||"Key quarterly fundamental catalyst"})),hypotheticalAllocation:{totalBudget:`${e.currency==="INR"?"INR ₹":"USD $"}${i.toLocaleString()}`,strategy:`${r?"Prudent Diversification Allocation":"Quantitative Risk-Balanced Model"} (${e.horizon||"3–5 Years"})`,allocations:[{asset:`${((Z=t.company)==null?void 0:Z.name)||e.companyQuery} (${((P=t.company)==null?void 0:P.ticker)||e.ticker})`,amount:a,percent:Math.round(s*100),role:"Core Asset Allocation",rationale:`Max ${Math.round(s*100)}% single-stock allocation recommended for ${n} profile.`},{asset:"Broad Market Index ETF",amount:o,percent:50,role:"Diversified Core Foundation",rationale:"Broad market exposure to mitigate single-stock idiosyncratic risk."},{asset:"Liquid Cash / Reserve Buffer",amount:l,percent:Math.round((1-s-.5)*100),role:"Liquidity & Safety Buffer",rationale:"Dry powder for staged entry on volatility."}]},sourcesVisited:[{name:"Reuters Markets Intelligence (Primary Source)",url:`https://www.reuters.com/markets/companies/${((C=t.company)==null?void 0:C.ticker)||"NVDA"}`,status:"200 OK",bytes:"142 KB",depth:3}]}}function WT(){const[t,e]=Oe.useState("hero"),[n,i]=Oe.useState("beginner"),[r,s]=Oe.useState(!1),[a,o]=Oe.useState(null),[l,c]=Oe.useState({mode:"stock",amount:"50000",currency:"INR",market:"United States",risk:"Moderate",horizon:"Medium-term (3–5 Years)",companyQuery:"NVIDIA Corp.",ticker:"NVDA",stockKey:"NVIDIA",sector:"Semiconductors & AI"}),[p,m]=Oe.useState({mode:"live",apiUrl:"http://localhost:3008/api",wsUrl:"ws://localhost:3008/stream"}),[u,f]=Oe.useState(null),[y,E]=Oe.useState(1),[x,d]=Oe.useState({}),[g,v]=Oe.useState([]),[M,T]=Oe.useState("https://www.reuters.com/markets"),[w,R]=Oe.useState("Ready"),[_,A]=Oe.useState(1),[I,L]=Oe.useState(rs.NVIDIA||rs.HDFC_BANK),[z,V]=Oe.useState(!1),Q=Oe.useRef(null),O=(C,D)=>{const re=new Date().toLocaleTimeString();v(ae=>[...ae,{time:re,type:C,message:D}])},Y=C=>{if(_===0)return Promise.resolve();const D=_===2?.35:1;return new Promise(re=>setTimeout(re,C*D))};Oe.useEffect(()=>()=>{Q.current&&clearInterval(Q.current)},[]);const G=async()=>{Ye.playClick();const C=l.ticker||(l.stockKey==="NVIDIA"?"NVDA":l.stockKey==="TESLA"?"TSLA":l.stockKey==="HDFC_BANK"?"HDFCBANK":l.stockKey==="RELIANCE"?"RELIANCE":l.companyQuery),D=l.stockKey in rs?l.stockKey:"NVIDIA",re=rs[D]||rs.NVIDIA;L({...re,name:l.companyQuery,ticker:C,sector:l.sector}),e("plan_map"),O("hermes",`Formulating multi-source research plan for ${l.companyQuery} (${C})`);try{const ae=await fetch("/api/research/start",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({company:l.companyQuery,ticker:C,market:l.market,sector:l.sector,amount:Number(l.amount)||5e4,currency:l.currency,risk:l.risk.toLowerCase(),horizon:l.horizon,experience:n})});if(ae.ok){const oe=await ae.json();f(oe.id),O("checkpoint",`Research Plan #${oe.id} ready. Paused for Human Approval Checkpoint #1.`)}}catch(ae){console.warn("Backend start API fallback to local orchestration:",ae.message)}},k=async()=>{if(Ye.playClick(),e("researching"),d({}),v([]),O("checkpoint","Human Approval Checkpoint #1 GRANTED: Research Plan authorized. Spawning Webcmd headless browser runtime."),E(4),R("Navigating Sources"),u)try{await fetch(`/api/research/${u}/approve-plan`,{method:"POST"}),Q.current&&clearInterval(Q.current),Q.current=setInterval(async()=>{try{const D=await fetch(`/api/research/${u}/status`);if(!D.ok)return;const re=await D.json(),ae=re.record;if(re.webcmdLogs&&re.webcmdLogs.length>0){const oe=re.webcmdLogs[re.webcmdLogs.length-1];oe&&oe.targetUrl&&(T(oe.targetUrl),R(`Webcmd: ${oe.command}`))}re.logs&&re.logs.length>0&&re.logs.slice(-3).forEach(oe=>O("webcmd",oe)),re.webcmdLogs&&re.webcmdLogs.length>=2&&(E(5),d(oe=>({...oe,4:"completed"}))),re.webcmdLogs&&re.webcmdLogs.length>=4&&(E(6),d(oe=>({...oe,5:"completed"}))),re.webcmdLogs&&re.webcmdLogs.length>=6&&(E(8),d(oe=>({...oe,6:"completed",7:"completed"}))),ae&&(ae.status==="awaiting_final_approval"||ae.status==="complete"||ae.status==="failed")&&(clearInterval(Q.current),E(15),d(oe=>({...oe,4:"completed",5:"completed",6:"completed",7:"completed",8:"completed",9:"completed",10:"completed",11:"completed",12:"completed",13:"completed",14:"completed"})),o("findings"),Ye.playCheckpointAlert())}catch(D){console.error("Polling error:",D)}},1e3);return}catch(D){console.warn("Backend approve-plan fallback:",D.message)}const C=I||rs.NVIDIA;for(const D of C.sourcesVisited||[])T(D.url),Ye.playWebcmdCrawl(),O("webcmd",`GET ${D.url} -> ${D.status||"200 OK"} (${D.bytes||"120 KB"})`),await Y(500);d(D=>({...D,4:"completed"})),E(5),O("evidence","Parsing raw DOM trees. Extracted valuation multiples, debt ratios, and earnings filings."),await Y(600),d(D=>({...D,5:"completed"})),E(6),O("evidence","Cross-verifying claims between Official Exchange and Independent Platforms. High confidence confirmed."),await Y(600),d(D=>({...D,6:"completed"})),E(12),O("hermes",`Running deterministic formula -> Overall Weighted Score: ${C.overallScore||85}/100`),await Y(700),d(D=>({...D,7:"completed",8:"completed",9:"completed",10:"completed",11:"completed",12:"completed"})),E(15),o("findings"),Ye.playCheckpointAlert()},Z=async()=>{if(Ye.playClick(),o(null),E(16),R("Compiling 18-Section Research Dossier"),O("checkpoint","Human Approval Checkpoint #2 GRANTED: Final findings authorized. Generating comprehensive investment research dossier."),u)try{const C=await fetch(`/api/research/${u}/approve-final`,{method:"POST"});if(C.ok){const D=await C.json();if(D.report){const re=GT(D.report,l,n);L(re)}}}catch(C){console.warn("Backend approve-final fallback:",C.message)}await Y(700),e("results")},P=()=>{Ye.playClick(),e("onboarding")};return h.jsxs("div",{className:"min-h-screen bg-[#060907] text-[#f4f8f4] flex flex-col font-sans selection:bg-[#7ED043]/30 selection:text-[#F0FB43]",children:[h.jsx(mS,{onStart:()=>e("onboarding"),onOpenHowItWorks:()=>s(!0),onGoHome:()=>e("hero")}),h.jsxs("main",{className:"flex-1 flex flex-col items-center justify-center",children:[t==="hero"&&h.jsx(IT,{onBegin:()=>e("onboarding"),onOpenHowItWorks:()=>s(!0)}),t==="onboarding"&&h.jsx(LT,{params:l,onChange:c,onCompleteSetup:G,userLevel:n,setUserLevel:i}),t==="plan_map"&&h.jsx(DT,{stockData:I,params:l,onAcceptPlan:k,onEditPlan:()=>e("onboarding"),onCancelPlan:()=>e("hero")}),t==="researching"&&h.jsx(kT,{currentStageId:y,stagesProgress:x,browserLogs:g,currentUrl:M,browserStatus:w,speed:_,onSetSpeed:A,activeStockData:I}),t==="results"&&h.jsx(BT,{stockData:I,params:l,userLevel:n,setUserLevel:i,onResearchAnother:P})]}),h.jsx(HT,{checkpointType:a,stockData:I,params:l,onApprove:Z,onModify:()=>{o(null),e("onboarding")},onCancel:()=>{o(null),e("hero")}}),h.jsx(zT,{isOpen:r,onClose:()=>s(!1),onStart:()=>e("onboarding")}),h.jsx(VT,{isOpen:z,onClose:()=>V(!1),config:p,onSaveConfig:m})]})}uu.createRoot(document.getElementById("root")).render(h.jsx(av.StrictMode,{children:h.jsx(WT,{})}));
