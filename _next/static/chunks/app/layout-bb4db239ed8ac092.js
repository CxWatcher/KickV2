(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2545],{33645:function(e,t,r){Promise.resolve().then(r.bind(r,19974)),Promise.resolve().then(r.bind(r,31166)),Promise.resolve().then(r.bind(r,7827))},94936:function(e,t,r){"use strict";r.d(t,{W:function(){return i}});var n=r(27573);let i=e=>{let{fill:t,...r}=e;return(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",...r,children:[(0,n.jsx)("defs",{children:(0,n.jsx)("clipPath",{id:"ChatReportIconA",children:(0,n.jsx)("path",{fill:t||"white",d:"M0 0h16v16H0z"})})}),(0,n.jsx)("g",{clipPath:"url(#ChatReportIconA)",children:(0,n.jsx)("path",{fill:"current",d:"M15.3 13 9.2 1.7c-.5-1-1.9-1-2.4 0L.7 13.1c-.5.9.2 2 1.2 2H14c1 0 1.7-1.1 1.2-2Zm-6.3.8H7v-2h2v2Zm0-3.4H7V5h2v5.4Z"})})]})}},70948:function(e,t,r){"use strict";r.d(t,{T:function(){return i}});var n=r(27573);let i=e=>{let{fill:t,...r}=e;return(0,n.jsx)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:t||"white",xmlns:"http://www.w3.org/2000/svg",...r,children:(0,n.jsx)("path",{d:"M28 6.99204L25.008 4L16 12.9973L6.99204 4L4 6.99204L12.9973 16L4 25.008L6.99204 28L16 19.0027L25.008 28L28 25.008L19.0027 16L28 6.99204Z",fill:"current"})})}},1019:function(e,t,r){"use strict";r.d(t,{Y:function(){return i}});var n=r(27573);let i=e=>{let{fill:t,...r}=e;return(0,n.jsx)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:t||"white",xmlns:"http://www.w3.org/2000/svg",...r,children:(0,n.jsx)("path",{d:"M13.3334 25.4933L7.25336 19.4133L10.08 16.5867L13.3334 19.84L25.2534 7.92001L28.08 10.7467L13.3334 25.4933Z",fill:"current"})})}},48451:function(e,t,r){"use strict";r.d(t,{SessionProvider:function(){return a},k:function(){return l}});var n=r(27573),i=r(7653);let s=(0,i.createContext)({status:"unauthenticated",user:null}),a=e=>{let{children:t,session:r}=e,[a,l]=(0,i.useState)(r);return(0,i.useEffect)(()=>{l(r)},[r]),(0,n.jsx)(s.Provider,{value:a,children:t})},l=()=>(0,i.useContext)(s)},1749:function(e,t,r){"use strict";r.d(t,{s:function(){return s}});var n=r(69389),i=r(60203);let s=e=>{let t=(0,n.useLocale)();return e||(e=t),(0,i.isRtlLang)(e)?"rtl":"ltr"}},89628:function(e,t,r){"use strict";r.d(t,{T:function(){return a}});var n=r(27573),i=r(7653),s=r(24432);function a(e){let t=(0,i.createContext)(null);return{Provider:r=>{let{children:s,initialValue:a}=r,[l]=(0,i.useState)(()=>e(a));return(0,n.jsx)(t.Provider,{value:l,children:s})},useStore:e=>{let r=(0,i.useContext)(t);if(!r)throw Error("useStore must be use within StoreProvider");return(0,s.oR)(r,e)}}}},91145:function(e,t,r){"use strict";r.d(t,{Provider:function(){return d},dD:function(){return f},oR:function(){return c},qH:function(){return u}});var n=r(7653),i=r(3982),s=r(53198);let a=(0,r(89628).T)(e=>(0,s.M)(t=>({state:e.state,updateState:e=>t(()=>({state:e}))}))),l={tablet:768,desktop:1024,desktopLarge:1280};function o(e){return(null==e?void 0:e.width)&&e.width>=l.desktopLarge?"desktopLarge":(null==e?void 0:e.width)&&e.width>=l.desktop?"desktop":(null==e?void 0:e.width)&&e.width>=l.tablet?"tablet":"mobile"}let u=()=>{let e=(0,n.useRef)(null),t=a.useStore(e=>e.updateState),r=(0,i.Sf)(e=>{t(o(e))},100);return(0,n.useEffect)(()=>{e.current&&t(o(e.current.getBoundingClientRect()))},[e,t]),(0,i.yU)({ref:e,onResize:r}),{ref:e}},d=a.Provider,c=a.useStore,f=()=>c(e=>"mobile"===e.state||"tablet"===e.state)},87694:function(e,t,r){"use strict";r.d(t,{EJ:function(){return n},UA:function(){return i}});let n={sortOptions:"sortOptions",volume:"volume",locale:"NEXT_LOCALE",userToken:"user_tmp_token",chatSettings:"chat_settings",showMatureContent:"showMatureContent",tilePlayerMuted:"tile_player_muted"},i="session_token"},74271:function(e,t,r){"use strict";r.d(t,{$c:function(){return i},b9:function(){return s},uZ:function(){return n}});let n=(e,t,r)=>void 0!==r?Math.min(Math.max(e,t),r):Math.max(e,t),i=e=>{let{milliseconds:t,separator:r=":",includeHours:n=!0}=e,i=Math.floor(t/1e3),s=Math.floor(i/60),a=Math.floor(s/60),l=Math.floor(a/24),o=(i%60).toString().padStart(2,"0"),u=(s%60).toString().padStart(2,"0"),d=(a%24).toString().padStart(2,"0"),c=l.toString().padStart(2,"0");return n?l>0?[c,d,u,o].join(r):[d,u,o].join(r):[u,o].join(r)},s=e=>"string"==typeof e&&!!e&&!Number.isNaN(Number(e))},24326:function(e,t,r){"use strict";r.d(t,{Db:function(){return x},dc:function(){return h},iO:function(){return c},zx:function(){return v}});var n=r(27573),i=r(7653),s=r(37205),a=r(1749),l=r(43546),o=r(8284),u=r(35449);let d="group inline-flex gap-1.5 items-center justify-center rounded font-semibold box-border relative transition-all betterhover:active:scale-[0.98] disabled:pointer-events-none select-none whitespace-nowrap [&_svg]:size-[1em] outline-transparent outline outline-2 outline-offset-2",c={default:"bg-green-500 focus-visible:outline-green-200 text-green-950 [&_svg]:fill-current betterhover:hover:bg-green-600 focus-visible:bg-green-500 disabled:bg-green-800",danger:"bg-red-500 focus-visible:outline-red-200 text-white betterhover:hover:bg-red-600 focus-visible:bg-red-500 disabled:bg-red-800",highlight:"bg-secondary/20 focus-visible:outline-grey-300 text-white [&_svg]:fill-current betterhover:hover:bg-secondary/40 focus-visible:bg-secondary/40 disabled:bg-transparent disabled:opacity-30",text:"bg-transparent focus-visible:outline-grey-300 text-white [&_svg]:fill-current betterhover:hover:bg-surface-tint data-[state=active]:bg-surface-tint disabled:text-grey-600 disabled:bg-grey-1000","text-secondary":"bg-transparent text-text-secondary [&_svg]:fill-current betterhover:hover:text-white data-[state=active]:text-white !p-0 focus-visible:underline underline-offset-2 disabled:opacity-30","subtle-link":"bg-transparent text-grey-300 [&_svg]:fill-current betterhover:hover:text-white data-[state=active]:text-white !p-0 focus-visible:underline underline-offset-2 disabled:opacity-30","underlined-link":"bg-transparent data-[state=active]:text-white !p-0 focus-visible:underline text-white [&_svg]:fill-current betterhover:hover:underline betterhover:hover:underline-offset-4 disabled:opacity-30","mobile-nav-link":"bg-transparent focus-visible:outline-grey-300 text-white [&_svg]:fill-current betterhover:hover:bg-secondary/20 [&_svg]:data-[state=active]:fill-green-500 disabled:text-grey-600 disabled:bg-grey-1000",link:"bg-transparent text-white [&_svg]:fill-current betterhover:hover:text-white data-[state=active]:text-white !p-0 focus-visible:underline underline-offset-2 disabled:opacity-30",outlined:"bg-transparent text-white focus-visible:outline-grey-100 [&_svg]:fill-current border border-white focus-visible:text-grey-950 betterhover:hover:bg-white betterhover:hover:text-grey-950 focus-visible:bg-white disabled:opacity-30"},f={xs:"px-2 py-1 text-xs",sm:"px-3 py-1.5 text-sm",md:"px-3 py-2 text-base",lg:"px-3 py-2 text-lg",xl:"px-4 py-2 text-xl"},h=(0,s.tv)({base:d,variants:{variant:c,size:f},defaultVariants:{variant:"default",size:"md"}}),v=(0,i.forwardRef)((e,t)=>{let{className:r,asChild:i,children:s,variant:l,size:d,...c}=e,f=(0,a.s)(),v=i?o.g7:"button",b=!!c.disabled||void 0;return(0,n.jsx)(v,{"aria-disabled":b,"aria-hidden":c.hidden,className:(0,u.cn)(h({variant:l,size:d,className:r}),"ltr"===f?"flex-row":"flex-row-reverse"),ref:t,...c,disabled:b,children:s})});v.displayName="Button";let b={sm:f.sm+" h-9",md:f.md+" h-10",lg:f.lg+" h-11",xl:f.xl+" h-11"},g=(0,s.tv)({base:d,variants:{variant:{default:"bg-white/10"},size:b},defaultVariants:{variant:"default",size:"md"}}),x=e=>{let{size:t="md",className:r,variant:i="default",...s}=e;return(0,n.jsx)(l.aM,{className:(0,u.cn)(g({size:t,className:r,variant:i})),...s})};x.displayName="ButtonSkeleton"},38467:function(e,t,r){"use strict";r.d(t,{zx:function(){return n.zx},Ei:function(){return d},a2:function(){return u}});var n=r(24326),i=r(27573),s=r(7653),a=r(37205),l=r(8284),o=r(35449);let u=(0,a.tv)({base:"group relative box-border flex shrink-0 grow-0 select-none items-center justify-center gap-2 whitespace-nowrap rounded font-semibold ring-0 transition-all focus-visible:outline-none active:scale-[0.95] disabled:pointer-events-none [&_svg]:size-[1em] [&_svg]:fill-current",variants:{variant:n.iO,size:{xs:"size-6 text-xs",sm:"size-8 text-sm leading-none",md:"size-10 text-base leading-none",lg:"size-11 text-lg leading-none",xl:"size-11 text-xl leading-none"}},defaultVariants:{variant:"default",size:"md"}}),d=(0,s.forwardRef)((e,t)=>{let{className:r,variant:n,size:s,asChild:a,...d}=e,c=a?l.g7:"button";return(0,i.jsx)(c,{className:(0,o.cn)(u({variant:n,size:s,className:r})),ref:t,...d,children:d.children})});d.displayName="ButtonIcon"},52215:function(e,t,r){"use strict";r.d(t,{w:function(){return u}});var n=r(27573),i=r(7653),s=r(1019),a=r(83017),l=r(35449);let o=(0,i.forwardRef)((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)(a.fC,{ref:t,className:(0,l.cn)("data-[state=checked]:text-grey-700 data-[state=checked]:border-white data-[state=checked]:bg-white","peer h-5 w-5 shrink-0 focus-visible:ring-white","rounded border shadow focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50","border-grey-400 border-2 transition-all","betterhover:hover:bg-shade-lower betterhover:hover:border-white","data-[state=checked]:hover:border-white data-[state=checked]:hover:bg-white",r),...i,children:(0,n.jsx)(a.z$,{className:(0,l.cn)("flex items-center justify-center text-current"),children:(0,n.jsx)(s.Y,{className:"size-4",fill:"currentColor"})})})});o.displayName=a.fC.displayName;var u=o},57102:function(e,t,r){"use strict";r.d(t,{$_:function(){return v},Dx:function(){return b},VY:function(){return f},dk:function(){return g},fC:function(){return l},h4:function(){return h},x8:function(){return d},xz:function(){return o}});var n=r(27573),i=r(7653),s=r(91142),a=r(35449);let l=e=>{let{shouldScaleBackground:t=!1,noBodyStyles:r=!0,children:i,...a}=e;return(0,n.jsx)(s.d.Root,{shouldScaleBackground:t,noBodyStyles:r,...a,children:i})};l.displayName="Drawer";let o=s.d.Trigger,u=s.d.Portal,d=s.d.Close,c=(0,i.forwardRef)((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)(s.d.Overlay,{ref:t,className:(0,a.cn)("z-modal fixed inset-0 bg-black/80",r),...i})});c.displayName=s.d.Overlay.displayName;let f=(0,i.forwardRef)((e,t)=>{let{className:r,children:i,...l}=e;return(0,n.jsxs)(u,{children:[(0,n.jsx)(c,{}),(0,n.jsxs)(s.d.Content,{ref:t,className:(0,a.cn)("z-dialog bg-shade-base fixed inset-x-0 bottom-0 h-auto rounded-t-[0.75rem] border border-white/10 text-sm focus-visible:border-white/20 focus-visible:outline-none","flex flex-col gap-2","mt-24 px-4 pb-4",r),...l,children:[(0,n.jsx)("div",{className:"bg-grey-500 mx-auto mt-4 h-1 w-8 rounded-full"}),(0,n.jsx)("div",{className:"no-scrollbar flex max-h-[85dvh] flex-col gap-2 overflow-hidden overflow-y-auto",children:i})]})]})});f.displayName="DrawerContent";let h=e=>{let{className:t,...r}=e;return(0,n.jsx)("div",{className:(0,a.cn)("grid gap-1.5",t),...r})};h.displayName="DrawerHeader";let v=e=>{let{className:t,...r}=e;return(0,n.jsx)("div",{className:(0,a.cn)("mt-auto flex flex-col gap-2",t),...r})};v.displayName="DrawerFooter";let b=(0,i.forwardRef)((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)(s.d.Title,{ref:t,className:(0,a.cn)("text-base font-semibold leading-none tracking-tight",r),...i})});b.displayName=s.d.Title.displayName;let g=(0,i.forwardRef)((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)(s.d.Description,{ref:t,className:(0,a.cn)("text-sm text-white",r),...i})});g.displayName=s.d.Description.displayName},34109:function(e,t,r){"use strict";r.d(t,{A:function(){return s}});var n=r(27573),i=r(69389);function s(e){let{value:t,format:r}=e,s=(0,i.useFormatter)();return(0,n.jsx)("span",{suppressHydrationWarning:!0,children:s.number(t,null!=r?r:{notation:"compact",maximumFractionDigits:t>1e3?1:void 0})})}},53780:function(e,t,r){"use strict";var n=r(27573),i=r(35449);t.Z=function(e){let{className:t,...r}=e;return(0,n.jsx)("div",{className:(0,i.cn)("bg-grey-800 animate-pulse rounded-md",t),...r})}},43546:function(e,t,r){"use strict";r.d(t,{ZG:function(){return s},aM:function(){return a.Z},zv:function(){return l},Qr:function(){return o}});var n=r(27573),i=r(35449),s=function(e){let{className:t}=e;return(0,n.jsx)(a.Z,{className:(0,i.cn)("aspect-square size-7 rounded-full",t)})},a=r(53780),l=e=>{let{className:t}=e;return(0,n.jsx)(a.Z,{className:(0,i.cn)("flex h-[22px] w-16 rounded-full",t)})},o=e=>{let{className:t,skeletonClass:r}=e;return(0,n.jsx)("div",{className:(0,i.cn)("flex w-1/3 items-center",t),children:(0,n.jsx)(a.Z,{className:(0,i.cn)("inline-block h-[1em] w-full",r)})})}},62817:function(e,t,r){"use strict";r.d(t,{default:function(){return a}});var n=r(7653),i=r(1474);let s=(0,n.forwardRef)((e,t)=>{let{children:r,...s}=e;return(0,n.isValidElement)(r)?(0,n.cloneElement)(r,{...function(e,t){let r={...t};for(let n in t){let i=e[n],s=t[n];/^on[A-Z]/.test(n)?s&&i?r[n]=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];null==s||s(...t),null==i||i(...t)}:i&&(r[n]=i):"style"===n?r[n]={...i,...s}:"className"===n&&(r[n]=[i,s].filter(Boolean).join(" "))}return{...e,...r}}(s,r.props),ref:(0,i.I)([t,r.ref])}):null});s.displayName="Slot";var a=s},8284:function(e,t,r){"use strict";r.d(t,{g7:function(){return n.default}}),r(1474);var n=r(62817)},1474:function(e,t,r){"use strict";function n(e){return t=>e.forEach(e=>{e instanceof Function?e(t):null!=e&&(e.current=t)})}r.d(t,{I:function(){return n}}),r(7653)},37355:function(e,t,r){"use strict";r.d(t,{$:function(){return s}});var n=r(27573);let i=(0,r(37205).tv)({base:"relative inline-block aspect-square animate-spin rounded-full border-2 border-solid !border-r-transparent border-current",variants:{size:{"2xs":"size-2.5",xs:"size-3",sm:"size-4",md:"size-5",lg:"size-6",xl:"size-7"}},defaultVariants:{size:"md"}});var s=e=>{let{size:t,className:r,...s}=e;return(0,n.jsx)("div",{className:i({size:t,className:r}),...s})}},35449:function(e,t,r){"use strict";r.d(t,{cn:function(){return s}});var n=r(57908),i=r(66290);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,i.m6)((0,n.W)(t))}}},function(e){e.O(0,[5693,6394,2340,4610,7745,3982,7220,326,4154,4237,3808,6207,7996,2030,2042,1166,1293,286,1744],function(){return e(e.s=33645)}),_N_E=e.O()}]);