(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2030,270],{18672:function(t,e,n){var r=n(81361).Symbol;t.exports=r},77118:function(t){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}},13676:function(t){t.exports=function(t){return t.split("")}},51140:function(t,e,n){var r=n(18672),i=n(43344),s=n(72031),u=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":u&&u in Object(t)?i(t):s(t)}},57952:function(t){t.exports=function(t,e,n){var r=-1,i=t.length;e<0&&(e=-e>i?0:i+e),(n=n>i?i:n)<0&&(n+=i),i=e>n?0:n-e>>>0,e>>>=0;for(var s=Array(i);++r<i;)s[r]=t[r+e];return s}},85084:function(t,e,n){var r=n(18672),i=n(77118),s=n(16144),u=n(74277),o=1/0,a=r?r.prototype:void 0,c=a?a.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(s(e))return i(e,t)+"";if(u(e))return c?c.call(e):"";var n=e+"";return"0"==n&&1/e==-o?"-0":n}},30760:function(t,e,n){var r=n(57952);t.exports=function(t,e,n){var i=t.length;return n=void 0===n?i:n,!e&&n>=i?t:r(t,e,n)}},63717:function(t,e,n){var r=n(30760),i=n(47199),s=n(37131),u=n(96359);t.exports=function(t){return function(e){var n=i(e=u(e))?s(e):void 0,o=n?n[0]:e.charAt(0),a=n?r(n,1).join(""):e.slice(1);return o[t]()+a}}},37970:function(t,e,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;t.exports=r},43344:function(t,e,n){var r=n(18672),i=Object.prototype,s=i.hasOwnProperty,u=i.toString,o=r?r.toStringTag:void 0;t.exports=function(t){var e=s.call(t,o),n=t[o];try{t[o]=void 0;var r=!0}catch(t){}var i=u.call(t);return r&&(e?t[o]=n:delete t[o]),i}},47199:function(t){var e=RegExp("[\\u200d\ud800-\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");t.exports=function(t){return e.test(t)}},72031:function(t){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},81361:function(t,e,n){var r=n(37970),i="object"==typeof self&&self&&self.Object===Object&&self,s=r||i||Function("return this")();t.exports=s},37131:function(t,e,n){var r=n(13676),i=n(47199),s=n(27446);t.exports=function(t){return i(t)?s(t):r(t)}},27446:function(t){var e="\ud800-\udfff",n="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",r="\ud83c[\udffb-\udfff]",i="[^"+e+"]",s="(?:\ud83c[\udde6-\uddff]){2}",u="[\ud800-\udbff][\udc00-\udfff]",o="(?:"+n+"|"+r+")?",a="[\\ufe0e\\ufe0f]?",c="(?:\\u200d(?:"+[i,s,u].join("|")+")"+a+o+")*",l=RegExp(r+"(?="+r+")|(?:"+[i+n+"?",n,s,u,"["+e+"]"].join("|")+")"+(a+o+c),"g");t.exports=function(t){return t.match(l)||[]}},89639:function(t,e,n){var r=n(96359),i=n(62105);t.exports=function(t){return i(r(t).toLowerCase())}},16144:function(t){var e=Array.isArray;t.exports=e},31822:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},74277:function(t,e,n){var r=n(51140),i=n(31822);t.exports=function(t){return"symbol"==typeof t||i(t)&&"[object Symbol]"==r(t)}},96359:function(t,e,n){var r=n(85084);t.exports=function(t){return null==t?"":r(t)}},62105:function(t,e,n){var r=n(63717)("toUpperCase");t.exports=r},7827:function(t,e,n){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,{default:function(){return u}});var i=n(7653),s=n(39956);function u(t){let{locale:e,...n}=t;if(!e)throw Error("Failed to determine locale in `NextIntlClientProvider`, please provide the `locale` prop explicitly.\n\nSee https://next-intl-docs.vercel.app/docs/configuration#locale");return i.createElement(s.IntlProvider,r({locale:e},n))}},72305:function(t,e,n){"use strict";n.d(e,{z:function(){return o}});var r=n(7653),i=n(3458),s=n(18497),u=n(32316);let o=t=>{let{present:e,children:n}=t,o=function(t){var e,n;let[s,o]=(0,r.useState)(),c=(0,r.useRef)({}),l=(0,r.useRef)(t),h=(0,r.useRef)("none"),[f,d]=(e=t?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,r.useReducer)((t,e)=>{let r=n[t][e];return null!=r?r:t},e));return(0,r.useEffect)(()=>{let t=a(c.current);h.current="mounted"===f?t:"none"},[f]),(0,u.b)(()=>{let e=c.current,n=l.current;if(n!==t){let r=h.current,i=a(e);t?d("MOUNT"):"none"===i||(null==e?void 0:e.display)==="none"?d("UNMOUNT"):n&&r!==i?d("ANIMATION_OUT"):d("UNMOUNT"),l.current=t}},[t,d]),(0,u.b)(()=>{if(s){let t=t=>{let e=a(c.current).includes(t.animationName);t.target===s&&e&&(0,i.flushSync)(()=>d("ANIMATION_END"))},e=t=>{t.target===s&&(h.current=a(c.current))};return s.addEventListener("animationstart",e),s.addEventListener("animationcancel",t),s.addEventListener("animationend",t),()=>{s.removeEventListener("animationstart",e),s.removeEventListener("animationcancel",t),s.removeEventListener("animationend",t)}}d("ANIMATION_END")},[s,d]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:(0,r.useCallback)(t=>{t&&(c.current=getComputedStyle(t)),o(t)},[])}}(e),c="function"==typeof n?n({present:o.isPresent}):r.Children.only(n),l=(0,s.e)(o.ref,c.ref);return"function"==typeof n||o.isPresent?(0,r.cloneElement)(c,{ref:l}):null};function a(t){return(null==t?void 0:t.animationName)||"none"}o.displayName="Presence"},37927:function(t,e,n){"use strict";n.d(e,{R:function(){return o},m:function(){return u}});var r=n(24392),i=n(25919),s=n(14751),u=class extends i.F{#t;#e;#n;constructor(t){super(),this.mutationId=t.mutationId,this.#e=t.mutationCache,this.#t=[],this.state=t.state||o(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){this.#t.includes(t)||(this.#t.push(t),this.clearGcTimeout(),this.#e.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.#t=this.#t.filter(e=>e!==t),this.scheduleGc(),this.#e.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.#t.length||("pending"===this.state.status?this.scheduleGc():this.#e.remove(this))}continue(){return this.#n?.continue()??this.execute(this.state.variables)}async execute(t){this.#n=(0,s.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(Error("No mutationFn found")),onFail:(t,e)=>{this.#r({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#r({type:"pause"})},onContinue:()=>{this.#r({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#e.canRun(this)});let e="pending"===this.state.status,n=!this.#n.canStart();try{if(!e){this.#r({type:"pending",variables:t,isPaused:n}),await this.#e.config.onMutate?.(t,this);let e=await this.options.onMutate?.(t);e!==this.state.context&&this.#r({type:"pending",context:e,variables:t,isPaused:n})}let r=await this.#n.start();return await this.#e.config.onSuccess?.(r,t,this.state.context,this),await this.options.onSuccess?.(r,t,this.state.context),await this.#e.config.onSettled?.(r,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(r,null,t,this.state.context),this.#r({type:"success",data:r}),r}catch(e){try{throw await this.#e.config.onError?.(e,t,this.state.context,this),await this.options.onError?.(e,t,this.state.context),await this.#e.config.onSettled?.(void 0,e,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,e,t,this.state.context),e}finally{this.#r({type:"error",error:e})}}finally{this.#e.runNext(this)}}#r(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"pending":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}})(this.state),r.V.batch(()=>{this.#t.forEach(e=>{e.onMutationUpdate(t)}),this.#e.notify({mutation:this,type:"updated",action:t})})}};function o(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}},96196:function(t,e,n){"use strict";function r(t){return t}n.d(e,{t:function(){return r}})},73822:function(t,e,n){"use strict";n.d(e,{useMutation:function(){return h}});var r=n(7653),i=n(37927),s=n(24392),u=n(17307),o=n(63583),a=class extends u.l{#i;#s=void 0;#u;#o;constructor(t,e){super(),this.#i=t,this.setOptions(e),this.bindMethods(),this.#a()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){let e=this.options;this.options=this.#i.defaultMutationOptions(t),(0,o.VS)(this.options,e)||this.#i.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#u,observer:this}),e?.mutationKey&&this.options.mutationKey&&(0,o.Ym)(e.mutationKey)!==(0,o.Ym)(this.options.mutationKey)?this.reset():this.#u?.state.status==="pending"&&this.#u.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#u?.removeObserver(this)}onMutationUpdate(t){this.#a(),this.#c(t)}getCurrentResult(){return this.#s}reset(){this.#u?.removeObserver(this),this.#u=void 0,this.#a(),this.#c()}mutate(t,e){return this.#o=e,this.#u?.removeObserver(this),this.#u=this.#i.getMutationCache().build(this.#i,this.options),this.#u.addObserver(this),this.#u.execute(t)}#a(){let t=this.#u?.state??(0,i.R)();this.#s={...t,isPending:"pending"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset}}#c(t){s.V.batch(()=>{if(this.#o&&this.hasListeners()){let e=this.#s.variables,n=this.#s.context;t?.type==="success"?(this.#o.onSuccess?.(t.data,e,n),this.#o.onSettled?.(t.data,null,e,n)):t?.type==="error"&&(this.#o.onError?.(t.error,e,n),this.#o.onSettled?.(void 0,t.error,e,n))}this.listeners.forEach(t=>{t(this.#s)})})}},c=n(26821),l=n(50688);function h(t,e){let n=(0,c.useQueryClient)(e),[i]=r.useState(()=>new a(n,t));r.useEffect(()=>{i.setOptions(t)},[i,t]);let u=r.useSyncExternalStore(r.useCallback(t=>i.subscribe(s.V.batchCalls(t)),[i]),()=>i.getCurrentResult(),()=>i.getCurrentResult()),o=r.useCallback((t,e)=>{i.mutate(t,e).catch(l.Z)},[i]);if(u.error&&(0,l.L)(i.options.throwOnError,[u.error]))throw u.error;return{...u,mutate:o,mutateAsync:u.mutate}}},83010:function(t,e,n){"use strict";n.d(e,{useIsMutating:function(){return o},useMutationState:function(){return c}});var r=n(7653),i=n(63583),s=n(24392),u=n(26821);function o(t,e){let n=(0,u.useQueryClient)(e);return c({filters:{...t,status:"pending"}},n).length}function a(t,e){return t.findAll(e.filters).map(t=>e.select?e.select(t):t.state)}function c(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=(0,u.useQueryClient)(e).getMutationCache(),o=r.useRef(t),c=r.useRef(null);return c.current||(c.current=a(n,t)),r.useEffect(()=>{o.current=t}),r.useSyncExternalStore(r.useCallback(t=>n.subscribe(()=>{let e=(0,i.Q$)(c.current,a(n,o.current));c.current!==e&&(c.current=e,s.V.schedule(t))}),[n]),()=>c.current,()=>c.current)}}}]);