/*! For license information please see main.dde9570b.chunk.js.LICENSE.txt */
(this["webpackJsonp@rubenberna/counter-example"]=this["webpackJsonp@rubenberna/counter-example"]||[]).push([[0],[,,function(e,t,r){e.exports=r.p+"static/media/adn-brands~dnDplmKo.662b5a3a.svg"},function(e,t,r){e.exports=r(12)},function(e,t,r){},,,,,,,function(e,t,r){},function(e,t,r){"use strict";r.r(t);r(4);var n=r(0),o=r.n(n),c=r(1),a=r.n(c),i=r(2),s=r.n(i);function u(e,t){return e(t={exports:{}},t.exports),t.exports}var f="function"===typeof Symbol&&Symbol.for,l=f?Symbol.for("react.element"):60103,p=f?Symbol.for("react.portal"):60106,y=f?Symbol.for("react.fragment"):60107,m=f?Symbol.for("react.strict_mode"):60108,b=f?Symbol.for("react.profiler"):60114,d=f?Symbol.for("react.provider"):60109,g=f?Symbol.for("react.context"):60110,S=f?Symbol.for("react.async_mode"):60111,h=f?Symbol.for("react.concurrent_mode"):60111,O=f?Symbol.for("react.forward_ref"):60112,v=f?Symbol.for("react.suspense"):60113,x=f?Symbol.for("react.suspense_list"):60120,$=f?Symbol.for("react.memo"):60115,j=f?Symbol.for("react.lazy"):60116,w=f?Symbol.for("react.block"):60121,E=f?Symbol.for("react.fundamental"):60117,C=f?Symbol.for("react.responder"):60118,P=f?Symbol.for("react.scope"):60119;function k(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case l:switch(e=e.type){case S:case h:case y:case b:case m:case v:return e;default:switch(e=e&&e.$$typeof){case g:case O:case j:case $:case d:return e;default:return t}}case p:return t}}}function _(e){return k(e)===h}var T={AsyncMode:S,ConcurrentMode:h,ContextConsumer:g,ContextProvider:d,Element:l,ForwardRef:O,Fragment:y,Lazy:j,Memo:$,Portal:p,Profiler:b,StrictMode:m,Suspense:v,isAsyncMode:function(e){return _(e)||k(e)===S},isConcurrentMode:_,isContextConsumer:function(e){return k(e)===g},isContextProvider:function(e){return k(e)===d},isElement:function(e){return"object"===typeof e&&null!==e&&e.$$typeof===l},isForwardRef:function(e){return k(e)===O},isFragment:function(e){return k(e)===y},isLazy:function(e){return k(e)===j},isMemo:function(e){return k(e)===$},isPortal:function(e){return k(e)===p},isProfiler:function(e){return k(e)===b},isStrictMode:function(e){return k(e)===m},isSuspense:function(e){return k(e)===v},isValidElementType:function(e){return"string"===typeof e||"function"===typeof e||e===y||e===h||e===b||e===m||e===v||e===x||"object"===typeof e&&null!==e&&(e.$$typeof===j||e.$$typeof===$||e.$$typeof===d||e.$$typeof===g||e.$$typeof===O||e.$$typeof===E||e.$$typeof===C||e.$$typeof===P||e.$$typeof===w)},typeOf:k},F=(u((function(e,t){0})),u((function(e){e.exports=T})),Object.getOwnPropertySymbols),M=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;function I(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}})()&&Object.assign;var A="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function D(e,t,r,n,o){}D.resetWarningCache=function(){0};Function.call.bind(Object.prototype.hasOwnProperty);function L(){}function W(){}W.resetWarningCache=L;var q=u((function(e){e.exports=function(){function e(e,t,r,n,o,c){if(c!==A){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:W,resetWarningCache:L};return r.PropTypes=r,r}()})),z={width:"100%",display:"flex",flexDirection:"column",alignItems:"center"},N={width:"10%",display:"flex",justifyContent:"space-around"},B={border:"none",padding:"8px 14px",borderRadius:"4px",background:"#1976d2",color:"#FFF"},H={border:"none",padding:"8px 14px",borderRadius:"4px",background:"#d32f2f",color:"#FFF"},J=function(e){var t=e.state,r=Object(n.useState)(0),c=r[0],a=r[1];return o.a.createElement("div",{style:z},(null===t||void 0===t?void 0:t.username)&&o.a.createElement("h4",null,"Hello ",t.username,"!"),o.a.createElement("h3",null,"Current count: ",c),o.a.createElement("div",{style:N},o.a.createElement("button",{style:B,onClick:function(){return a(c+1)}},"Add"),o.a.createElement("button",{style:H,onClick:function(){return a(c-1)}},"Subtract")))};s.a;J.propTypes={state:q.shape({isAuthenticated:q.bool,token:q.string,username:q.string,role:q.string,errorMessage:q.string})};var U=J,V=(r(11),function(){return o.a.createElement(U,null)});a.a.render(o.a.createElement(V,null),document.getElementById("root"))}],[[3,1,2]]]);
//# sourceMappingURL=main.dde9570b.chunk.js.map