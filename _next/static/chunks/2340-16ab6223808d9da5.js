"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2340],{35954:function(e,t,n){/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(7653),u="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=r.useState,i=r.useEffect,l=r.useLayoutEffect,s=r.useDebugValue;function a(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!u(e,n)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=o({inst:{value:n,getSnapshot:t}}),u=r[0].inst,c=r[1];return l(function(){u.value=n,u.getSnapshot=t,a(u)&&c({inst:u})},[e,n,t]),i(function(){return a(u)&&c({inst:u}),e(function(){a(u)&&c({inst:u})})},[e]),s(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:c},6465:function(e,t,n){/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(7653),u=n(92666),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=u.useSyncExternalStore,l=r.useRef,s=r.useEffect,a=r.useMemo,c=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,u){var f=l(null);if(null===f.current){var d={hasValue:!1,value:null};f.current=d}else d=f.current;var v=i(e,(f=a(function(){function e(e){if(!s){if(s=!0,i=e,e=r(e),void 0!==u&&d.hasValue){var t=d.value;if(u(t,e))return l=t}return l=e}if(t=l,o(i,e))return t;var n=r(e);return void 0!==u&&u(t,n)?t:(i=e,l=n)}var i,l,s=!1,a=void 0===n?null:n;return[function(){return e(t())},null===a?void 0:function(){return e(a())}]},[t,n,r,u]))[0],f[1]);return s(function(){d.hasValue=!0,d.value=v},[v]),c(v),v}},92666:function(e,t,n){e.exports=n(35954)},79202:function(e,t,n){e.exports=n(6465)},57926:function(e,t,n){n.d(t,{Z:function(){return r}});function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}},2467:function(e,t,n){n.d(t,{M:function(){return r}});function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(null==e||e(r),!1===n||!r.defaultPrevented)return null==t?void 0:t(r)}}},18497:function(e,t,n){n.d(t,{F:function(){return u},e:function(){return o}});var r=n(7653);function u(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function o(...e){return(0,r.useCallback)(u(...e),e)}},20379:function(e,t,n){n.d(t,{b:function(){return o},k:function(){return u}});var r=n(7653);function u(e,t){let n=(0,r.createContext)(t);function u(e){let{children:t,...u}=e,o=(0,r.useMemo)(()=>u,Object.values(u));return(0,r.createElement)(n.Provider,{value:o},t)}return u.displayName=e+"Provider",[u,function(u){let o=(0,r.useContext)(n);if(o)return o;if(void 0!==t)return t;throw Error(`\`${u}\` must be used within \`${e}\``)}]}function o(e,t=[]){let n=[],u=()=>{let t=n.map(e=>(0,r.createContext)(e));return function(n){let u=(null==n?void 0:n[e])||t;return(0,r.useMemo)(()=>({[`__scope${e}`]:{...n,[e]:u}}),[n,u])}};return u.scopeName=e,[function(t,u){let o=(0,r.createContext)(u),i=n.length;function l(t){let{scope:n,children:u,...l}=t,s=(null==n?void 0:n[e][i])||o,a=(0,r.useMemo)(()=>l,Object.values(l));return(0,r.createElement)(s.Provider,{value:a},u)}return n=[...n,u],l.displayName=t+"Provider",[l,function(n,l){let s=(null==l?void 0:l[e][i])||o,a=(0,r.useContext)(s);if(a)return a;if(void 0!==u)return u;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let u=n.reduce((t,{useScope:n,scopeName:r})=>{let u=n(e)[`__scope${r}`];return{...t,...u}},{});return(0,r.useMemo)(()=>({[`__scope${t.scopeName}`]:u}),[u])}};return n.scopeName=t.scopeName,n}(u,...t)]}},22089:function(e,t,n){let r;n.d(t,{XB:function(){return d}});var u=n(57926),o=n(7653),i=n(2467),l=n(76646),s=n(18497),a=n(63465);let c="dismissableLayer.update",f=(0,o.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),d=(0,o.forwardRef)((e,t)=>{var n;let{disableOutsidePointerEvents:d=!1,onEscapeKeyDown:b,onPointerDownOutside:h,onFocusOutside:E,onInteractOutside:m,onDismiss:y,...g}=e,w=(0,o.useContext)(f),[S,C]=(0,o.useState)(null),P=null!==(n=null==S?void 0:S.ownerDocument)&&void 0!==n?n:null==globalThis?void 0:globalThis.document,[,O]=(0,o.useState)({}),D=(0,s.e)(t,e=>C(e)),x=Array.from(w.layers),[T]=[...w.layersWithOutsidePointerEventsDisabled].slice(-1),W=x.indexOf(T),L=S?x.indexOf(S):-1,k=w.layersWithOutsidePointerEventsDisabled.size>0,R=L>=W,j=function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,a.W)(e),r=(0,o.useRef)(!1),u=(0,o.useRef)(()=>{});return(0,o.useEffect)(()=>{let e=e=>{if(e.target&&!r.current){let r={originalEvent:e};function o(){p("dismissableLayer.pointerDownOutside",n,r,{discrete:!0})}"touch"===e.pointerType?(t.removeEventListener("click",u.current),u.current=o,t.addEventListener("click",u.current,{once:!0})):o()}else t.removeEventListener("click",u.current);r.current=!1},o=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(o),t.removeEventListener("pointerdown",e),t.removeEventListener("click",u.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}(e=>{let t=e.target,n=[...w.branches].some(e=>e.contains(t));!R||n||(null==h||h(e),null==m||m(e),e.defaultPrevented||null==y||y())},P),N=function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,a.W)(e),r=(0,o.useRef)(!1);return(0,o.useEffect)(()=>{let e=e=>{e.target&&!r.current&&p("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}(e=>{let t=e.target;[...w.branches].some(e=>e.contains(t))||(null==E||E(e),null==m||m(e),e.defaultPrevented||null==y||y())},P);return!function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,a.W)(e);(0,o.useEffect)(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e),()=>t.removeEventListener("keydown",e)},[n,t])}(e=>{L!==w.layers.size-1||(null==b||b(e),!e.defaultPrevented&&y&&(e.preventDefault(),y()))},P),(0,o.useEffect)(()=>{if(S)return d&&(0===w.layersWithOutsidePointerEventsDisabled.size&&(r=P.body.style.pointerEvents,P.body.style.pointerEvents="none"),w.layersWithOutsidePointerEventsDisabled.add(S)),w.layers.add(S),v(),()=>{d&&1===w.layersWithOutsidePointerEventsDisabled.size&&(P.body.style.pointerEvents=r)}},[S,P,d,w]),(0,o.useEffect)(()=>()=>{S&&(w.layers.delete(S),w.layersWithOutsidePointerEventsDisabled.delete(S),v())},[S,w]),(0,o.useEffect)(()=>{let e=()=>O({});return document.addEventListener(c,e),()=>document.removeEventListener(c,e)},[]),(0,o.createElement)(l.WV.div,(0,u.Z)({},g,{ref:D,style:{pointerEvents:k?R?"auto":"none":void 0,...e.style},onFocusCapture:(0,i.M)(e.onFocusCapture,N.onFocusCapture),onBlurCapture:(0,i.M)(e.onBlurCapture,N.onBlurCapture),onPointerDownCapture:(0,i.M)(e.onPointerDownCapture,j.onPointerDownCapture)}))});function v(){let e=new CustomEvent(c);document.dispatchEvent(e)}function p(e,t,n,{discrete:r}){let u=n.originalEvent.target,o=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&u.addEventListener(e,t,{once:!0}),r?(0,l.jH)(u,o):u.dispatchEvent(o)}},52608:function(e,t,n){n.d(t,{M:function(){return s}});var r,u=n(7653),o=n(32316);let i=(r||(r=n.t(u,2)))["useId".toString()]||(()=>void 0),l=0;function s(e){let[t,n]=u.useState(i());return(0,o.b)(()=>{e||n(e=>null!=e?e:String(l++))},[e]),e||(t?`radix-${t}`:"")}},38826:function(e,t,n){n.d(t,{h:function(){return l}});var r=n(57926),u=n(7653),o=n(3458),i=n(76646);let l=(0,u.forwardRef)((e,t)=>{var n;let{container:l=null==globalThis?void 0:null===(n=globalThis.document)||void 0===n?void 0:n.body,...s}=e;return l?o.createPortal((0,u.createElement)(i.WV.div,(0,r.Z)({},s,{ref:t})),l):null})},76646:function(e,t,n){n.d(t,{WV:function(){return l},jH:function(){return s}});var r=n(57926),u=n(7653),o=n(3458),i=n(92721);let l=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=(0,u.forwardRef)((e,n)=>{let{asChild:o,...l}=e,s=o?i.g7:t;return(0,u.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,u.createElement)(s,(0,r.Z)({},l,{ref:n}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function s(e,t){e&&(0,o.flushSync)(()=>e.dispatchEvent(t))}},92721:function(e,t,n){n.d(t,{A4:function(){return s},g7:function(){return i}});var r=n(57926),u=n(7653),o=n(18497);let i=(0,u.forwardRef)((e,t)=>{let{children:n,...o}=e,i=u.Children.toArray(n),s=i.find(a);if(s){let e=s.props.children,n=i.map(t=>t!==s?t:u.Children.count(e)>1?u.Children.only(null):(0,u.isValidElement)(e)?e.props.children:null);return(0,u.createElement)(l,(0,r.Z)({},o,{ref:t}),(0,u.isValidElement)(e)?(0,u.cloneElement)(e,void 0,n):null)}return(0,u.createElement)(l,(0,r.Z)({},o,{ref:t}),n)});i.displayName="Slot";let l=(0,u.forwardRef)((e,t)=>{let{children:n,...r}=e;return(0,u.isValidElement)(n)?(0,u.cloneElement)(n,{...function(e,t){let n={...t};for(let r in t){let u=e[r],o=t[r];/^on[A-Z]/.test(r)?u&&o?n[r]=(...e)=>{o(...e),u(...e)}:u&&(n[r]=u):"style"===r?n[r]={...u,...o}:"className"===r&&(n[r]=[u,o].filter(Boolean).join(" "))}return{...e,...n}}(r,n.props),ref:t?(0,o.F)(t,n.ref):n.ref}):u.Children.count(n)>1?u.Children.only(null):null});l.displayName="SlotClone";let s=({children:e})=>(0,u.createElement)(u.Fragment,null,e);function a(e){return(0,u.isValidElement)(e)&&e.type===s}},63465:function(e,t,n){n.d(t,{W:function(){return u}});var r=n(7653);function u(e){let t=(0,r.useRef)(e);return(0,r.useEffect)(()=>{t.current=e}),(0,r.useMemo)(()=>(...e)=>{var n;return null===(n=t.current)||void 0===n?void 0:n.call(t,...e)},[])}},65192:function(e,t,n){n.d(t,{T:function(){return o}});var r=n(7653),u=n(63465);function o({prop:e,defaultProp:t,onChange:n=()=>{}}){let[o,i]=function({defaultProp:e,onChange:t}){let n=(0,r.useState)(e),[o]=n,i=(0,r.useRef)(o),l=(0,u.W)(t);return(0,r.useEffect)(()=>{i.current!==o&&(l(o),i.current=o)},[o,i,l]),n}({defaultProp:t,onChange:n}),l=void 0!==e,s=l?e:o,a=(0,u.W)(n);return[s,(0,r.useCallback)(t=>{if(l){let n="function"==typeof t?t(e):t;n!==e&&a(n)}else i(t)},[l,e,i,a])]}},32316:function(e,t,n){n.d(t,{b:function(){return u}});var r=n(7653);let u=(null==globalThis?void 0:globalThis.document)?r.useLayoutEffect:()=>{}},68288:function(e,t,n){n.d(t,{t:function(){return o}});var r=n(7653),u=n(32316);function o(e){let[t,n]=(0,r.useState)(void 0);return(0,u.b)(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let r,u;if(!Array.isArray(t)||!t.length)return;let o=t[0];if("borderBoxSize"in o){let e=o.borderBoxSize,t=Array.isArray(e)?e[0]:e;r=t.inlineSize,u=t.blockSize}else r=e.offsetWidth,u=e.offsetHeight;n({width:r,height:u})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}n(void 0)},[e]),t}},24432:function(e,t,n){n.d(t,{Ue:function(){return d},oR:function(){return c}});var r=n(53198),u=n(7653),o=n(79202);let{useDebugValue:i}=u,{useSyncExternalStoreWithSelector:l}=o,s=!1,a=e=>e;function c(e,t=a,n){n&&!s&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),s=!0);let r=l(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return i(r),r}let f=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?(0,r.M)(e):e,n=(e,n)=>c(t,e,n);return Object.assign(n,t),n},d=e=>e?f(e):f},53198:function(e,t,n){n.d(t,{M:function(){return u}});let r=e=>{let t;let n=new Set,r=(e,r)=>{let u="function"==typeof e?e(t):e;if(!Object.is(u,t)){let e=t;t=(null!=r?r:"object"!=typeof u||null===u)?u:Object.assign({},t,u),n.forEach(n=>n(t,e))}},u=()=>t,o={setState:r,getState:u,getInitialState:()=>i,subscribe:e=>(n.add(e),()=>n.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},i=t=e(r,u,o);return o},u=e=>e?r(e):r}}]);