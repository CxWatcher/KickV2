(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7971],{8558:function(e,t,r){"use strict";r.d(t,{GlobalUIStates:function(){return i}});var l=r(27573);r(7653);var s=r(1667),n=r(14071),a=r(36073);let i=e=>{let{children:t}=e,{isSidebarOpen:r}=(0,a.S)(),{isChatOpen:i}=(0,n.m)(),o=(0,s.n)(e=>e.isTheatreMode);return(0,l.jsx)("div",{className:"group/main flex h-dvh flex-col overflow-hidden","data-sidebar":r,"data-chat":i,"data-theatre":o,children:t})}},77893:function(e,t,r){"use strict";r.d(t,{NotificationsToasts:function(){return x}});var l=r(27573),s=r(69389),n=r(67754),a=r(7653),i=r(76707),o=r(70948),d=r(48451),c=r(2190),u=r(85095),f=r(4984),h=r(38467),m=r(24326);let x=()=>{let e=(0,s.useTranslations)("Global"),t=(0,n.useRouter)(),r=(0,d.k)(),x=(0,u.Y)(e=>e.isPusherConnected),p=(0,u.Y)(e=>e.on),v=(0,u.Y)(e=>e.off),L=r=>{var s;let n=null===(s=r.title.match(/<strong>(.*?)<\/strong>/))||void 0===s?void 0:s[1];c.A.custom(s=>(0,l.jsxs)("div",{className:"bg-surface-tint flex w-[500px] max-w-[100dvw] items-center justify-between gap-2 overflow-hidden rounded-md p-3 md:max-w-[500px]",children:[(0,l.jsxs)("div",{className:"flex items-center gap-2",children:[(0,l.jsx)("img",{src:(0,f.Z)(r.profile_picture),alt:n,className:"h-8 w-8 shrink-0 rounded-full"}),(0,l.jsxs)("div",{className:"flex flex-col items-start font-medium",children:[(0,l.jsx)("span",{children:e.rich("toast_just_went_live",{user:()=>(0,l.jsx)("span",{className:"font-bold",children:n})})}),(0,l.jsx)("span",{className:"line-clamp-1 text-sm text-white/80",children:r.description})]})]}),(0,l.jsxs)(m.zx,{onClick:()=>t.push(r.path),className:"gap-2 shadow-sm",children:[(0,l.jsx)(i.J,{className:"size-4 fill-current"}),(0,l.jsx)("span",{children:e("watch_now")})]}),(0,l.jsx)(h.Ei,{variant:"highlight",size:"sm",onClick:()=>c.A.original.dismiss(s),children:(0,l.jsx)(o.T,{})})]}),{position:"top-right",duration:1e4,unstyled:!0,style:{top:"calc(var(--navbar-height) - 32px + 16px)",right:"0px"}})};return(0,a.useEffect)(()=>(x&&"authenticated"===r.status&&p("private-userfeed.".concat(r.user.id),"NotifyFollowersStreamHasStarted",L),()=>{x&&"authenticated"===r.status&&v("private-userfeed.".concat(r.user.id),"NotifyFollowersStreamHasStarted",L)}),[x,r]),null}},89846:function(e,t,r){"use strict";r.d(t,{RumClient:function(){return u}});var l=r(27573),s=r(26863),n=r(7653),a=r(48451),i=r(16622),o=r(89615);let d=e=>{var t;null===(t=window.DD_RUM)||void 0===t||t.setUser({id:String(e.id),name:e.username,username:e.username,email:e.email})},c=()=>{var e;null===(e=window.DD_RUM)||void 0===e||e.clearUser()},u=()=>{let[e,t]=(0,n.useState)(!1),r=(0,a.k)();(0,n.useEffect)(()=>{e&&("authenticated"===r.status&&d(r.user),"unauthenticated"===r.status&&c())},[r,e]);let u=e=>e||(o.O.VERCEL?"vercel":"none");return(0,l.jsx)(s.default,{id:"datadog-rum",strategy:"afterInteractive",src:"https://www.datadoghq-browser-agent.com/us1/v5/datadog-rum.js",async:!0,onLoad:()=>{var e;let{NEXT_PUBLIC_DD_APP_ID:r,NEXT_PUBLIC_DD_CLIENT_TOKEN:l,NEXT_PUBLIC_DD_ENV:s,NEXT_PUBLIC_DD_VERSION:n}=i.env;null===(e=window.DD_RUM)||void 0===e||e.onReady(()=>{var e;null===(e=window.DD_RUM)||void 0===e||e.init({applicationId:r,clientToken:l,site:"datadoghq.com",service:"frontend-main",env:s||"staging",version:u(n),sessionSampleRate:100,sessionReplaySampleRate:50,trackUserInteractions:!0,trackResources:!0,trackLongTasks:!0,defaultPrivacyLevel:"mask-user-input",allowedTracingUrls:[e=>e.includes("kick.com")&&!e.includes("stg-auth")]})}),t(!0)}})}},56357:function(e,t,r){"use strict";r.d(t,{ConfirmDialogWrapper:function(){return M}});var l=r(27573),s=r(7653),n=r(51354),a=r(69389),i=r(56969),o=r(24326),d=r(8817),c=r(35449);let u=i.fC;i.xz;let f=i.h_,h=e=>{let{className:t,children:r,...s}=e;return(0,l.jsx)(d.h4,{className:(0,c.cn)("flex flex-col items-center gap-6 text-center font-bold sm:text-left",t),...s,children:r})};h.displayName="AlertDialog.Header";let m=(0,s.forwardRef)((e,t)=>{let{className:r,children:s,...n}=e;return(0,l.jsx)(i.Dx,{ref:t,className:(0,c.cn)("text-lg font-semibold",r),...n,children:s})});m.displayName="AlertDialog.Title";let x=e=>{let{className:t,...r}=e;return(0,l.jsx)("div",{className:(0,c.cn)("flex flex-col-reverse sm:flex-row sm:justify-center sm:space-x-2",t),...r})};x.displayName="AlertDialog.Footer";let p=(0,s.forwardRef)((e,t)=>{let{className:r,children:s,...n}=e;return(0,l.jsx)(i.aU,{ref:t,className:(0,c.cn)(r),...n,children:s})});p.displayName="AlertDialog.Action";let v=(0,s.forwardRef)((e,t)=>{let{className:r,...s}=e;return(0,l.jsx)(i.$j,{ref:t,className:(0,c.cn)((0,o.dc)({variant:"highlight"}),"mt-2 sm:mt-0",r),...s})});v.displayName="AlertDialog.Cancel";let L=(0,s.forwardRef)((e,t)=>{let{className:r,...s}=e;return(0,l.jsx)(i.aV,{className:(0,c.cn)("z-alert-dialog data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 bg-black/80 backdrop-blur-sm",r),...s,ref:t})});L.displayName="AlertDialog.Overlay";let j=(0,s.forwardRef)((e,t)=>{let{className:r,children:s,...n}=e;return(0,l.jsxs)(f,{children:[(0,l.jsx)(L,{}),(0,l.jsx)(i.VY,{ref:t,className:(0,c.cn)("z-alert-dialog data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] bg-shade-base fixed left-[50%] top-[50%] grid w-full max-w-[90dvw] translate-x-[-50%] translate-y-[-50%] gap-6 rounded-lg p-6 shadow-lg duration-200 sm:min-w-[340px] lg:w-fit lg:max-w-lg",r),...n,children:s})]})});j.displayName="AlertDialog.Content";let w=(0,s.forwardRef)((e,t)=>{let{className:r,children:s,...n}=e;return(0,l.jsx)(i.dk,{ref:t,className:(0,c.cn)("text-sm",r),...n,children:s})});w.displayName="AlertDialog.Description";let g=e=>{let{children:t,open:r,onOpenChange:s}=e;return(0,l.jsx)(u,{open:r,onOpenChange:s,children:t})};g.displayName="ConfirmDialog.Root";let b=e=>{let{children:t,className:r}=e;return(0,l.jsx)(j,{className:r,children:t})};b.displayName="ConfirmDialog.Content";let y=e=>{let{children:t,className:r}=e;return(0,l.jsx)(h,{className:r,children:t})};y.displayName="ConfirmDialog.Header";let N=e=>{let{children:t,className:r}=e;return(0,l.jsx)(m,{className:r,children:t})};N.displayName="ConfirmDialog.Title";let C=e=>{let{children:t,className:r,...s}=e;return(0,l.jsx)(w,{asChild:!0,className:r,...s,children:t})};C.displayName="ConfirmDialog.Description";let V=e=>{let{children:t,className:r}=e;return(0,l.jsx)(x,{className:r,children:t})};V.displayName="ConfirmDialog.Footer";let k=e=>{let{className:t}=e,r=(0,a.useTranslations)("ConfirmDialog");return(0,l.jsx)(v,{asChild:!0,children:(0,l.jsx)(o.zx,{className:(0,c.cn)("w-full sm:w-1/2",t),children:r("cancel")})})};k.displayName="ConfirmDialog.CancelButton";let _=e=>{let{children:t,onClick:r,className:s,variant:n}=e,i=(0,a.useTranslations)("ConfirmDialog");return(0,l.jsx)(p,{asChild:!0,children:(0,l.jsx)(o.zx,{variant:null!=n?n:"danger",onClick:r,className:(0,c.cn)("w-full sm:w-1/2",s),children:t||i("confirm")})})};_.displayName="ConfirmDialog.ConfirmButton";let R={Root:g,Content:b,Header:y,Title:N,Description:C,Footer:V,CancelButton:k,ConfirmButton:_},M=()=>{let[e,t]=(0,s.useState)(!1),[r,a]=(0,s.useState)(null),i=e=>{t(!0),a(e.detail)};return(0,s.useEffect)(()=>(window.addEventListener(n.E,i),()=>{window.removeEventListener(n.E,i)}),[]),(0,l.jsx)(R.Root,{open:e,onOpenChange:t,children:(0,l.jsxs)(R.Content,{className:null==r?void 0:r.containerClassName,children:[(0,l.jsxs)(R.Header,{className:null==r?void 0:r.headerClassName,children:[(null==r?void 0:r.title)&&(0,l.jsx)(R.Title,{className:null==r?void 0:r.titleClassName,children:r.title}),(null==r?void 0:r.description)&&(0,l.jsx)(R.Description,{className:null==r?void 0:r.descriptionClassName,children:r.description})]}),(0,l.jsxs)(R.Footer,{className:null==r?void 0:r.footerClassName,children:[(0,l.jsx)(R.CancelButton,{className:null==r?void 0:r.buttonsClassName}),(0,l.jsx)(R.ConfirmButton,{className:null==r?void 0:r.buttonsClassName,onClick:()=>{var e;return null!==(e=null==r?void 0:r.confirmFn())&&void 0!==e?e:void 0},variant:null==r?void 0:r.buttonVariant,children:null==r?void 0:r.confirmButtonLabel})]})]})})}},84122:function(e,t,r){"use strict";r.d(t,{CookiesBannerWrapper:function(){return L}});var l=r(27573),s=r(62124),n=r(58786),a=r(69389),i=r(72665),o=r(38467),d=r(966);let c=()=>(0,l.jsxs)("svg",{className:"shrink-0 grow-0",width:"54",height:"65",viewBox:"0 0 54 65",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("path",{d:"M16.7891 5.03113V41.3155L45.536 57.9123V21.7157L16.7891 5.03113Z",fill:"#73FF09"}),(0,l.jsx)("path",{d:"M25.2533 0L16.7891 5.03213L45.536 21.7167L54.0002 16.5091L25.2533 0Z",fill:"#65E007"}),(0,l.jsx)("path",{d:"M53.972 53.1472V16.5117L45.5078 21.7194V57.916L53.972 53.1472Z",fill:"#57C206"}),(0,l.jsx)("path",{d:"M18.2422 9.01794V16.8671L20.9787 18.4574V16.9339L19.6115 16.1565V11.488L20.9787 12.232V10.6082L18.2422 9.01794Z",fill:"black"}),(0,l.jsx)("path",{d:"M22.3281 11.3831V19.1967L26.484 21.7127V13.732L22.3281 11.381V11.3831ZM25.0605 19.2322L23.712 18.4548V13.8155L25.0605 14.5762V19.2322Z",fill:"black"}),(0,l.jsx)("path",{d:"M33.2422 17.6763V25.6278L34.6616 26.4386V23.327L37.3292 24.7814V27.8931L35.9787 27.0823L36.0455 19.2331L37.3292 20.044V23.2246L34.7284 21.7158L34.695 18.5602L33.2422 17.6763Z",fill:"black"}),(0,l.jsx)("path",{d:"M38.6641 20.7794V22.4366L40.0167 23.2829V21.6237L38.6641 20.7794Z",fill:"black"}),(0,l.jsx)("path",{d:"M38.6641 24.0154L40.0167 24.7928V29.4634L38.6641 28.6651V24.0154Z",fill:"black"}),(0,l.jsx)("path",{d:"M41.5195 22.4579V30.3258L44.1788 31.8472V30.3446L42.8492 29.5839V28.0438L44.1788 28.7104V27.2267L42.8492 26.4681V24.8527L44.1788 25.651V24.0189L41.5195 22.4579Z",fill:"black"}),(0,l.jsx)("path",{d:"M27.7891 14.5205V22.3341L31.945 24.8523V16.8715L27.7891 14.5205ZM30.5214 22.3717L29.173 21.5922V16.953L30.5214 17.7137V22.3717Z",fill:"black"}),(0,l.jsx)("path",{d:"M23.1016 28.6039L24.9113 29.7282V27.4169L26.7816 28.5726V26.4807L34.2376 30.7898V32.9757L36.0452 33.9432V36.1604L37.9405 37.1594V45.7169L36.0765 44.7472V46.7785L34.1749 45.6855L34.1875 47.9404L26.7377 43.6376L26.7502 41.2197L24.9113 40.2208V38.2209L23.1016 37.2095V28.6039Z",fill:"#57C206"}),(0,l.jsx)("path",{d:"M28.7148 36.2024V38.3172L30.487 39.2472V37.1741L28.7148 36.2024Z",fill:"black"}),(0,l.jsx)("path",{d:"M30.4922 41.574V43.6888L32.2664 44.6187V42.5478L30.4922 41.574Z",fill:"black"}),(0,l.jsx)("path",{d:"M34.2656 37.3889V39.5037L36.0399 40.4337V38.3627L34.2656 37.3889Z",fill:"black"}),(0,l.jsx)("path",{d:"M30.4922 30.8076V32.9224L32.2664 33.8524V31.7794L30.4922 30.8076Z",fill:"black"}),(0,l.jsx)("path",{d:"M24.9336 31.9828V34.0955L26.7078 35.0255V32.9545L24.9336 31.9828Z",fill:"black"}),(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M33.2517 57.2531V55.7046L33.1035 55.7714V54.3128L32.9949 54.3713V52.9357L30.5945 53.5939L26.2611 51.291L25.1924 51.9785L24.13 51.406L23.0842 52.0726L22.0009 51.4791L20.9405 52.1457L19.9072 51.571L15.2212 54.48L13.1922 53.805V55.2344L13.0524 55.1675V56.622L12.9439 56.5927V58.1078L12.7539 58.0639V59.9969L19.4773 64.3144L20.7297 63.4388L21.9048 64.1806L23.0967 63.3364L24.2907 64.0782L25.4659 63.234L26.7204 64.0009L33.4416 59.0942V57.1611L33.2475 57.2531H33.2517ZM13.9479 57.6543L14.1316 57.7693L13.4239 58.2185L13.3238 58.1956L13.9479 57.6543Z",fill:"black"}),(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M32.1952 56.4655L33.2535 55.7049L32.0616 55.0529L33.1053 54.3131L31.9322 53.6799L32.9988 52.9359L26.265 49.3562L25.1963 50.0458L24.1339 49.4711L23.0881 50.1378L22.0027 49.5443L20.9423 50.2109L19.9091 49.6362L13.1941 53.8032L14.2252 54.4322L13.0563 55.1657L14.1355 55.8365L12.9478 56.5909L14.006 57.2596L12.7578 58.0642L19.4812 62.3816L20.7336 61.506L21.9108 62.2479L23.1027 61.4036L24.2967 62.1455L25.4719 61.3012L26.7263 62.0661L33.4476 57.1593L32.1952 56.4655Z",fill:"#73FF09"}),(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.2426 50.5479L19.823 49.0579L19.6999 49.1624L19.3053 47.7601L19.2177 47.8458L18.8294 46.4645L16.6983 47.7497L11.9036 46.7111L11.0624 47.664L9.88515 47.4007L9.05856 48.3264L7.85416 48.0506L7.01504 48.9805L5.86491 48.7089L2.14317 52.7818L0.0078125 52.6836L0.396059 54.0586L0.243683 54.0336L0.638192 55.4337H0.527562L0.93877 56.8944L0.744646 56.9028L1.26857 58.7648L8.91035 61.0928L9.87888 59.91L11.2127 60.3049L12.1311 59.1681L13.4816 59.5568L14.3834 58.4241L15.7986 58.8212L20.9356 52.2719L20.4116 50.4099L20.2509 50.552L20.2426 50.5479ZM1.77371 56.1818L1.98244 56.2424L1.42303 56.8673L1.32075 56.8715L1.77371 56.1818Z",fill:"black"}),(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.0074 50.0761L19.8194 49.0584L18.496 48.7533L19.2996 47.7586L17.9992 47.4681L18.8237 46.4608L11.3719 44.8475L10.5328 45.8005L9.35341 45.5372L8.52682 46.4629L7.32242 46.1871L6.4833 47.117L5.33109 46.8453L0 52.6799L1.16057 53.0059L0.23587 54.0299L1.45488 54.381L0.517662 55.4321L1.71789 55.7874L0.734747 56.8991L8.37653 59.2271L9.34506 58.0443L10.6789 58.4393L11.5952 57.3025L12.9478 57.6912L13.8475 56.5585L15.2648 56.9556L20.4017 50.4063L19.0074 50.0761Z",fill:"#73FF09"}),(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.1018 46.4587L10.8828 48.1995L12.9117 48.8264L14.1307 47.0857L12.1018 46.4587Z",fill:"black"}),(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.3497 49.8873L14.1328 51.6281L16.1596 52.2529L17.3786 50.5143L15.3497 49.8873Z",fill:"black"}),(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.4297 53.6455L10.6094 54.8158L11.9745 55.2379L12.7948 54.0656L11.4297 53.6455Z",fill:"black"}),(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.34099 49.9628L4.74609 50.8112L5.7355 51.1163L6.33039 50.2679L5.34099 49.9628Z",fill:"black"}),(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.00026 54.1597L5.78125 55.9004L7.81015 56.5253L9.02917 54.7866L7.00026 54.1597Z",fill:"black"}),(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.1618 57.5938L19.3164 58.2102L20.1618 58.8246L21.0072 58.2102L20.1618 57.5938Z",fill:"black"}),(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M25.6319 57.1419L23.9141 58.3916L25.6319 59.6433L27.3477 58.3916L25.6319 57.1419Z",fill:"black"}),(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M27.0304 51.292L25.3125 52.5438L27.0304 53.7934L28.7462 52.5438L27.0304 51.292Z",fill:"black"})]});c.displayName="CookieBox";let u=e=>{let{children:t}=e;return(0,l.jsx)("div",{className:"z-modal absolute bottom-0 left-1/2  w-full max-w-full -translate-x-1/2 px-3 pb-3 lg:max-w-[calc((100vw/3)*2)] lg:flex-row xl:max-w-[50vw]",children:(0,l.jsx)("div",{className:"bg-shade-lower flex w-full flex-col items-center gap-4 rounded px-3.5 py-3 text-white lg:flex-row",children:t})})};u.displayName="CookiesBanner.Root";let f=e=>{let{children:t}=e;return(0,l.jsx)("div",{className:"flex flex-col items-center justify-between gap-4 sm:flex-row",children:t})};f.displayName="CookiesBanner.Body";let h=e=>{let{children:t}=e;return(0,l.jsx)("div",{className:"flex flex-row items-center justify-between gap-4",children:t})};h.displayName="CookiesBanner.Footer";let m=e=>{let{children:t}=e;return(0,l.jsx)("p",{className:"w-full text-sm",children:t})};m.displayName="CookiesBanner.Description";let x=e=>{let{children:t}=e;return(0,l.jsx)("div",{className:"flex flex-row items-center justify-center gap-2",children:t})};x.displayName="CookiesBanner.ActionButtons";let p=()=>(0,l.jsx)(c,{});p.displayName="CookiesBanner.Illustration";let v={Root:u,Body:f,Footer:h,Illustration:p,Description:m,ActionButtons:x},L=()=>{let e=(0,a.useTranslations)("Cookies"),[t,r]=(0,d.I)({key:i.d.cookiesAccepted}),c=e=>{r(e)};return(0,l.jsx)(s.M,{children:void 0===t&&(0,l.jsx)(n.E.div,{className:"z-modal",initial:{y:15,opacity:0},animate:{y:0,opacity:1},exit:{y:15,opacity:0},transition:{duration:.3,type:"spring"},children:(0,l.jsxs)(v.Root,{children:[(0,l.jsxs)(v.Body,{children:[(0,l.jsx)(v.Illustration,{}),(0,l.jsx)(v.Description,{children:e("description")})]}),(0,l.jsx)(v.Footer,{children:(0,l.jsxs)(v.ActionButtons,{children:[(0,l.jsx)(o.zx,{onClick:()=>c(!0),children:e("accept")}),(0,l.jsx)(o.zx,{variant:"highlight",onClick:()=>c(!1),children:e("reject")})]})})]})})})}},57946:function(e,t,r){"use strict";r.d(t,{ReportDialogWrapper:function(){return N}});var l=r(27573),s=r(69389),n=r(7653),a=r(73822),i=r(86197);let o=(e,t)=>(0,i.rK)("/api/v1/report-content",null,{method:"POST",signal:e,body:JSON.stringify(t)}),d=e=>{let t=(0,a.useMutation)({mutationFn:async e=>o(null,e)});return e?t:null};var c=r(48451),u=r(2190),f=r(73024),h=r(8817),m=r(48388),x=r(97712),p=r(39155),v=r(97818),L=r(87450);let j=e=>{let{reportReasons:t,...r}=e;return(0,l.jsx)(L.fC,{...r,children:t.map(e=>{let{label:t,value:r}=e;return(0,l.jsxs)(p.ck,{className:"flex items-center space-x-3 space-y-0",children:[(0,l.jsx)(p.oT,{children:(0,l.jsx)(L.Wx,{value:r})}),(0,l.jsx)(p.__,{children:t})]},r)})})},w=()=>(0,n.useMemo)(()=>x.z.object({reason:x.z.string().min(1)}),[]),g=()=>{let e=w(),t=(0,m.cI)({resolver:(0,v.F)(e)});return(0,n.useEffect)(()=>{t.reset()},[t]),t},b=e=>{let{onCancel:t,onSubmit:r,disableSubmit:n}=e,a=(0,s.useTranslations)("ReportForm"),i=g(),o={sexually_explicit_content:a("Reasons.report_reason_sexually_explicit_content"),child_endangerment:a("Reasons.report_reason_child_endangerment"),hate:a("Reasons.report_reason_hate"),violence:a("Reasons.report_reason_violence"),terrorism:a("Reasons.report_reason_terrorism"),self_harm:a("Reasons.report_reason_self_harm"),false_sensationalism:a("Reasons.report_reason_false_sensationalism"),doxxing:a("Reasons.report_reason_doxxing"),fraud_and_deception:a("Reasons.report_reason_fraud_and_deception"),serious_unlawful_conduct:a("Reasons.report_reason_serious_unlawful_conduct"),rights:a("Reasons.report_reason_rights"),bullying:a("Reasons.report_reason_bullying")};return(0,l.jsx)(p.fC,{...i,children:(0,l.jsxs)("form",{onSubmit:i.handleSubmit(r),className:"grid gap-4",children:[(0,l.jsx)(p.gN,{control:i.control,name:"reason",render:e=>{let{field:t}=e;return(0,l.jsxs)(p.ck,{children:[(0,l.jsx)(p.__,{children:a("report_reason")}),(0,l.jsx)(p.oT,{children:(0,l.jsx)(j,{onValueChange:t.onChange,defaultValue:t.value,reportReasons:Object.entries(o).map(e=>{let[t,r]=e;return{value:t,label:r}})})}),(0,l.jsx)(p.v0,{})]})}}),(0,l.jsxs)("div",{className:"flex items-center justify-end gap-2",children:[(0,l.jsx)(p.$j,{onClick:t,children:a("Actions.report_button_cancel")}),(0,l.jsx)(p.k4,{disabled:n,children:a("Actions.report_button_label")})]})]})})},y=e=>{let t=(0,s.useTranslations)("ReportForm.Titles");return"livestream"===e.type?t("report_livestream",{username:e.data.channelUsername}):"vod"===e.type?t.rich("report_vod",{title:()=>(0,l.jsx)("q",{children:e.data.title}),username:e.data.channelUsername}):"clip"===e.type?t("report_clip",{authorUsername:e.data.authorUsername,channelUsername:e.data.channelUsername}):null};y.displayName="ReportDialog.Title";let N=()=>{let e=(0,s.useTranslations)("ReportForm"),t="authenticated"===(0,c.k)().status,[r,a]=(0,n.useState)(!1),[i,o]=(0,n.useState)(null),m=d(t),x=e=>{o(e.detail),a(!0)};(0,n.useEffect)(()=>(window.addEventListener(f.L,x),()=>{window.removeEventListener(f.L,x)}),[]);let p=(0,n.useMemo)(()=>i?"livestream"===i.type?"LiveStream":"clip"===i.type?"clips":"vod"===i.type?"Video":null:null,[i]),v=(0,n.useMemo)(()=>i&&("livestream"===i.type||"clip"===i.type||"vod"===i.type)?i.data.id:null,[i]);if(!i)return null;let L=()=>{a(!1),o(null)};return(0,l.jsx)(h.fC,{open:r&&!!i,onOpenChange:e=>{if(!e){L();return}a(e)},children:(0,l.jsxs)(h.VY,{children:[(0,l.jsx)(h.h4,{children:(0,l.jsxs)("div",{className:"flex w-full items-center justify-between",children:[(0,l.jsx)(h.Dx,{children:(0,l.jsx)(y,{...i})}),(0,l.jsx)(h.x8,{})]})}),(0,l.jsx)(b,{onCancel:L,onSubmit:t=>{let{reason:r}=t;m&&"pending"!==m.status&&v&&p&&m.mutate({title:"Content Report",comments:r,reportable_id:v,reportable_type:p},{onError:()=>{u.A.error(e("Feedback.error"))},onSuccess:()=>{u.A.success(e("Feedback.success")),L()}})},disableSubmit:(null==m?void 0:m.status)==="pending"})]})})}},14247:function(e,t,r){"use strict";r.d(t,{ShareDrawerWrapper:function(){return i}});var l=r(27573),s=r(7653),n=r(76489),a=r(76927);let i=()=>{let[e,t]=(0,s.useState)(null),[r,i]=(0,s.useState)(void 0),o=e=>{t(e.detail)};(0,s.useEffect)(()=>(window.addEventListener(n.b,o),()=>{window.removeEventListener(n.b,o)}),[]);let d=(null==e?void 0:e.type)==="vod"||(null==e?void 0:e.type)==="clip",c=(null==e?void 0:e.url)?new URL(e.url):"";c&&(c.searchParams.delete("t"),d&&c.searchParams.append("t",r?"?t=".concat(r):""));let u=c.toString();return(0,l.jsx)(a.dy,{open:null!==e,onOpenChange:e=>{e||t(null)},children:(0,l.jsxs)("div",{className:"flex flex-col gap-2",children:[e&&(0,l.jsxs)(a.uT,{className:"mt-0",children:[e.items.has("facebook")&&(0,l.jsx)(a.s1,{url:u,title:e.title||""}),e.items.has("twitter")&&(0,l.jsx)(a.tL,{url:u,title:e.title||""}),e.items.has("copy")&&(0,l.jsx)(a.CK,{url:u,title:e.title||""}),e.items.has("embed")&&(0,l.jsx)(a.cx,{url:u})]}),d&&(0,l.jsx)(a.Ao,{timestamp:r,setTimestamp:i})]})})}},76927:function(e,t,r){"use strict";r.d(t,{Ao:function(){return z},uT:function(){return R},zx:function(){return V},en:function(){return D},VY:function(){return _},CK:function(){return Z},dy:function(){return N},cx:function(){return T},s1:function(){return M},fC:function(){return C},xz:function(){return k},tL:function(){return S}});var l=r(27573),s=r(69389),n=r(7653),a=r(77886),i=r(5287),o=r(78374),d=r(70948);let c=e=>{let{fill:t,...r}=e;return(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",fill:t||"white",...r,children:(0,l.jsx)("path",{d:"M27.4672 28H9.3336V9.1944H27.4672V28ZM4 4V22.1864H6.6456V6.6024H22.2296V4H4Z",fill:"current"})})},u=e=>{let{fill:t,...r}=e;return(0,l.jsx)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:t||"white",xmlns:"http://www.w3.org/2000/svg",...r,children:(0,l.jsx)("path",{d:"M20.23 5.48001H11.77C5.96 5.48001 1.25 10.19 1.25 16C1.25 19.94 3.42 23.37 6.62 25.17V29.18L13.6 26.52H20.23C26.04 26.52 30.75 21.81 30.75 16C30.75 10.19 26.04 5.48001 20.23 5.48001ZM9.1 18.48C7.73 18.48 6.62 17.37 6.62 16C6.62 14.63 7.73 13.52 9.1 13.52C10.47 13.52 11.57 14.63 11.57 16C11.57 17.37 10.47 18.48 9.1 18.48ZM16 18.48C14.63 18.48 13.52 17.37 13.52 16C13.52 14.63 14.63 13.52 16 13.52C17.37 13.52 18.48 14.63 18.48 16C18.48 17.37 17.37 18.48 16 18.48ZM22.9 18.48C21.53 18.48 20.43 17.37 20.43 16C20.43 14.63 21.53 13.52 22.9 13.52C24.27 13.52 25.38 14.63 25.38 16C25.38 17.37 24.27 18.48 22.9 18.48Z",fill:"current"})})};var f=r(42104),h=r(64800),m=r(1667),x=r(74271),p=r(38467),v=r(52215),L=r(57102),j=r(8817),w=r(67005),g=r(62219),b=r(35449),y=r(24269);let N=e=>{let{children:t,...r}=e,n=(0,s.useTranslations)("SharePopover");return(0,l.jsx)(L.fC,{...r,children:(0,l.jsxs)(L.VY,{children:[(0,l.jsxs)(L.h4,{className:"flex w-full items-center justify-between",children:[(0,l.jsx)(L.Dx,{children:n("share_via")}),(0,l.jsx)(L.x8,{asChild:!0,children:(0,l.jsx)(p.Ei,{variant:"text",size:"sm","aria-label":"Close",children:(0,l.jsx)(d.T,{})})})]}),t]})})};N.displayName="Share.Drawer";let C=w.fC;C.displayName="Share.Root";let V=(0,n.forwardRef)((e,t)=>{let{variant:r="text",...n}=e,a=(0,s.useTranslations)("SharePopover");return(0,l.jsx)(p.Ei,{ref:t,"aria-label":a("share_via"),variant:r,...n,children:(0,l.jsx)(h.a,{})})});V.displayName="Share.Button";let k=(0,n.forwardRef)((e,t)=>{let{tooltip:r=!0,children:n,...a}=e,i=(0,s.useTranslations)("SharePopover");return r?(0,l.jsx)(g.u,{text:i("share"),side:"top",children:(0,l.jsx)(w.xz,{ref:t,asChild:!0,children:(0,l.jsx)(V,{...a})})}):(0,l.jsx)(w.xz,{ref:t,asChild:!0,children:(0,l.jsx)(V,{...a})})});k.displayName="Share.Trigger";let _=e=>{let{children:t,side:r="top",sideOffset:n=15,align:a="end"}=e,i=(0,s.useTranslations)("SharePopover");return(0,l.jsx)(w.h_,{children:(0,l.jsxs)(w.VY,{side:r,sideOffset:n,align:a,className:"bg-shade-base !z-dialog h-fit w-fit rounded-md px-5 pb-4 pt-3 font-normal text-white",onFocusOutside:e=>e.preventDefault(),children:[(0,l.jsx)("div",{className:"text-base font-bold",children:i("share_via")}),t]})})};_.displayName="Share.Content";let R=e=>{let{children:t,className:r,...s}=e;return(0,l.jsx)("div",{className:(0,b.cn)("mt-3 flex flex-row gap-1",r),...s,children:t})};R.displayName="Share.Body";let M=e=>{let{title:t,url:r}=e,s=encodeURIComponent(t);return(0,l.jsxs)("a",{className:"betterhover:hover:bg-grey-600 relative flex w-20 cursor-pointer flex-col items-center justify-end rounded-md p-2 pt-3",target:"_blank",href:"https://www.facebook.com/sharer/sharer.php?u=".concat(r,"&t=").concat(s),rel:"noreferrer",children:[(0,l.jsx)("div",{className:"flex h-6 w-full flex-row items-center justify-center",children:(0,l.jsx)(a.V,{className:"size-7"})}),(0,l.jsx)("div",{className:"pt-3 text-center text-xs",children:"Facebook"})]})};M.displayName="Share.Facebook";let S=e=>{let{title:t,url:r}=e,s=encodeURIComponent(t);return(0,l.jsxs)("a",{className:"betterhover:hover:bg-grey-600 relative flex w-20 shrink-0 cursor-pointer flex-col items-center justify-end rounded-md p-2 pt-3",target:"_blank",href:"https://twitter.com/share?url=".concat(r,"&text=").concat(s),rel:"noreferrer",children:[(0,l.jsx)("div",{className:"flex h-6 w-full flex-row items-center justify-center",children:(0,l.jsx)(i.Z,{className:"size-7"})}),(0,l.jsx)("div",{className:"pt-3 text-center text-xs",children:"X"})]})};S.displayName="Share.Twitter";let Z=e=>{let{url:t}=e,r=(0,s.useTranslations)("SharePopover"),n=(0,y.V)({timeout:1e3});return(0,l.jsxs)("button",{className:"betterhover:hover:bg-grey-600 relative flex w-20 cursor-pointer flex-col items-center justify-end rounded-md p-2 pt-3",type:"button",onClick:()=>n.copy(t),children:[(0,l.jsx)("div",{className:"flex h-6 w-full flex-row items-center justify-center",children:(0,l.jsx)(c,{className:"size-7"})}),(0,l.jsx)("div",{className:"pt-3 text-center text-xs",children:r(n.copied?"copied":"copy")})]})};Z.displayName="Share.Copy";let D=e=>{let{callBack:t}=e,r=(0,s.useTranslations)("SharePopover");return(0,l.jsxs)("button",{className:"betterhover:hover:bg-grey-600 relative flex w-20 cursor-pointer flex-col items-center justify-end rounded-md p-2 pt-3",type:"button",onClick:t,children:[(0,l.jsx)("div",{className:"flex h-6 w-full flex-row items-center justify-center",children:(0,l.jsx)(u,{className:"size-7"})}),(0,l.jsx)("div",{className:"pt-3 text-center text-xs",children:r("chat")})]})};D.displayName="Share.Chat";let T=e=>{let{url:t}=e,r=(0,s.useTranslations)("SharePopover"),[a,i]=(0,n.useState)(!1),d=(0,y.V)({timeout:1e3});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("button",{onClick:()=>i(!0),type:"button",className:"betterhover:hover:bg-grey-600 relative flex w-20 shrink-0 cursor-pointer flex-col items-center justify-end rounded-md p-2 pt-3",children:[(0,l.jsx)("div",{className:"flex h-6 w-full flex-row items-center justify-center",children:(0,l.jsx)(f.M,{className:"size-7 rotate-[135deg]"})}),(0,l.jsx)("div",{className:"pt-3 text-center text-xs",children:r("embed")})]}),(0,l.jsx)(j.fC,{open:a,onOpenChange:e=>i(e),children:(0,l.jsxs)(j.VY,{children:[(0,l.jsx)(j.h4,{children:(0,l.jsxs)("div",{className:"flex w-full items-center justify-between",children:[(0,l.jsx)(j.Dx,{children:r("embed")}),(0,l.jsx)(j.x8,{})]})}),r("using_iframe"),(0,l.jsxs)("div",{className:"relative w-full rounded bg-[#0B0E0F] p-2 text-sm",children:[(0,l.jsx)(p.Ei,{className:"absolute right-2 top-2",size:"sm",variant:"highlight",onClick:()=>d.copy('<iframe src="'.concat(t,'" height="720" width="1280" frameborder="0" scrolling="no" allowfullscreen="true"></iframe>')),children:d.copied?(0,l.jsx)(o.r,{}):(0,l.jsx)(c,{})}),(0,l.jsx)("code",{children:'<iframe src="'.concat(t,'" height="720" width="1280" frameborder="0" scrolling="no" allowfullscreen="true"></iframe>')})]}),(0,l.jsx)("hr",{}),(0,l.jsx)("span",{className:"text-sm",children:r.rich("more_informations_embed",{link:e=>(0,l.jsx)("a",{href:"https://help.kick.com/en/articles/8010826-how-to-embed-your-kick-livestream",rel:"noreferrer",target:"_blank",className:"text-primary font-semibold",children:e})})})]})})]})};T.displayName="Share.Embed";let z=e=>{let{timestamp:t,setTimestamp:r}=e,a=(0,s.useTranslations)("SharePopover"),i=(0,m.n)(e=>e.currentProgressInMs),o=(0,x.$c)({milliseconds:i,includeHours:i>=36e5});return(0,n.useEffect)(()=>()=>{r(void 0)},[r]),(0,l.jsxs)("div",{className:"flex items-center gap-2",children:[(0,l.jsx)(v.w,{checked:void 0!==t,onCheckedChange:e=>{e?r(Math.floor(i/1e3)):r(void 0)},id:"checkbox-start-at"}),(0,l.jsxs)("label",{htmlFor:"checkbox-start-at",className:"cursor-pointer text-sm font-medium",children:[a("start_at")," ",void 0===t?o:(0,x.$c)({milliseconds:1e3*t,includeHours:1e3*t>=36e5})]})]})};z.displayName="Share.AtTimestamp"},76707:function(e,t,r){"use strict";r.d(t,{J:function(){return s}});var l=r(27573);let s=e=>{let{fill:t,...r}=e;return(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",fill:t||"white",...r,children:(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.82739 7.28856L27.0598 1.71777L28.2433 7.07867L3.01097 12.6495L1.82739 7.28856ZM3.03003 28.9699V13.6999H28.96V28.9699H3.03003ZM19.98 21.3299L13.47 16.7299V25.9299L19.98 21.3299Z",fill:"current"})})}},42104:function(e,t,r){"use strict";r.d(t,{M:function(){return s}});var l=r(27573);let s=e=>{let{fill:t,...r}=e;return(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",fill:t||"white",...r,children:[(0,l.jsx)("path",{d:"M2 16H6.66667V6.66667H16V2H2V16Z",fill:"current"}),(0,l.jsx)("path",{d:"M25.3333 25.3333H16V30H30V16H25.3333V25.3333Z",fill:"current"})]})}},64800:function(e,t,r){"use strict";r.d(t,{a:function(){return s}});var l=r(27573);let s=e=>{let{fill:t,...r}=e;return(0,l.jsx)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:t||"white",xmlns:"http://www.w3.org/2000/svg",...r,children:(0,l.jsx)("path",{d:"M28 13V4H19V7.03L11.1025 11.5H4V20.5H11.0425L19 25.0075V28H28V19H19V21.355L13 17.9575V14.08L19 10.6825V13H28ZM21.9925 21.9925H25.015V25.015H21.9925V21.9925ZM10.015 17.515H6.9925V14.4925H10.015V17.515ZM21.9925 6.9925H25.015V10.015H21.9925V6.9925Z"})})}},1019:function(e,t,r){"use strict";r.d(t,{Y:function(){return s}});var l=r(27573);let s=e=>{let{fill:t,...r}=e;return(0,l.jsx)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:t||"white",xmlns:"http://www.w3.org/2000/svg",...r,children:(0,l.jsx)("path",{d:"M13.3334 25.4933L7.25336 19.4133L10.08 16.5867L13.3334 19.84L25.2534 7.92001L28.08 10.7467L13.3334 25.4933Z",fill:"current"})})}},16348:function(e,t,r){"use strict";r.d(t,{PusherInjector:function(){return n}});var l=r(7653),s=r(85095);let n=()=>{let e=(0,s.Y)(e=>e.connect),t=(0,s.Y)(e=>e.isPusherConnected);return(0,l.useEffect)(()=>{e()},[]),(0,l.useEffect)(()=>{},[t]),null}},18206:function(e,t,r){"use strict";r.d(t,{QueryDevTools:function(){return n}});var l=r(27573),s=r(16427);let n=()=>(0,l.jsx)(s.t,{initialIsOpen:!0})},88848:function(e,t,r){"use strict";let l;r.d(t,{QueryProvider:function(){return u}});var s=r(27573),n=r(26821),a=r(21152),i=r(88771),o=r(63583);let d=()=>new i.S({defaultOptions:{queries:{retry:1,retryDelay:1e3,gcTime:(0,a.d)(6e4),staleTime:6e4,refetchOnWindowFocus:!1,refetchOnMount:!1,refetchInterval:!1,refetchOnReconnect:!1}}}),c=()=>o.sk?d():(l||(l=d()),l),u=e=>{let{children:t}=e,r=c();return(0,s.jsx)(n.QueryClientProvider,{client:r,children:t})}},36073:function(e,t,r){"use strict";r.d(t,{Provider:function(){return i},S:function(){return d},o:function(){return o}});var l=r(53198),s=r(89628);let n={open:"closed",closed:"open"},a=(0,s.T)(e=>(0,l.M)(t=>({state:e.state,currentStream:null,updateSidebar:e=>t(()=>({state:e})),toggleSidebar:()=>t(e=>{let{state:t}=e;return{state:n[t]}}),updateCurrentStream:e=>t(()=>({currentStream:e}))}))),i=a.Provider,o=a.useStore,d=()=>({isSidebarOpen:o(e=>"open"===e.state)})},51354:function(e,t,r){"use strict";r.d(t,{E:function(){return l},_:function(){return s}});let l="openConfirmModal",s=e=>{let t=new CustomEvent(l,{detail:e});window.dispatchEvent(t)}},72665:function(e,t,r){"use strict";r.d(t,{d:function(){return l}});let l={chatSettings:"chat_settings",acceptedRules:"accepted_rules",cookiesAccepted:"cookies_accepted",searchHistory:"search-history"}},73024:function(e,t,r){"use strict";r.d(t,{$:function(){return s},L:function(){return l}});let l="openReportModal",s=e=>{let t=new CustomEvent(l,{detail:e});window.dispatchEvent(t)}},76489:function(e,t,r){"use strict";r.d(t,{T:function(){return s},b:function(){return l}});let l="openShareDrawer",s=e=>{let t=new CustomEvent(l,{detail:e});window.dispatchEvent(t)}},52215:function(e,t,r){"use strict";r.d(t,{w:function(){return d}});var l=r(27573),s=r(7653),n=r(1019),a=r(83017),i=r(35449);let o=(0,s.forwardRef)((e,t)=>{let{className:r,...s}=e;return(0,l.jsx)(a.fC,{ref:t,className:(0,i.cn)("data-[state=checked]:text-grey-700 data-[state=checked]:border-white data-[state=checked]:bg-white","peer h-5 w-5 shrink-0 focus-visible:ring-white","rounded border shadow focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50","border-grey-400 border-2 transition-all","betterhover:hover:bg-shade-lower betterhover:hover:border-white","data-[state=checked]:hover:border-white data-[state=checked]:hover:bg-white",r),...s,children:(0,l.jsx)(a.z$,{className:(0,i.cn)("flex items-center justify-center text-current"),children:(0,l.jsx)(n.Y,{className:"size-4",fill:"currentColor"})})})});o.displayName=a.fC.displayName;var d=o},67005:function(e,t,r){"use strict";r.d(t,{VY:function(){return u},fC:function(){return i},h_:function(){return d},x8:function(){return o},xz:function(){return c}});var l=r(27573),s=r(7653),n=r(63458),a=r(35449);let i=n.fC;n.ee;let o=n.x8,d=n.h_,c=s.forwardRef((e,t)=>(0,l.jsx)(n.xz,{size:"sm",variant:"highlight",ref:t,...e})),u=s.forwardRef((e,t)=>{let{className:r,align:s="center",sideOffset:i=4,...o}=e;return(0,l.jsx)(n.h_,{children:(0,l.jsx)(n.VY,{ref:t,align:s,sideOffset:i,className:(0,a.cn)("z-dropdown bg-shade-base flex h-fit min-w-fit flex-col gap-1 rounded p-2 text-sm shadow-lg","data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade will-change-[opacity,transform]",r),...o})})});u.displayName=n.VY.displayName},87450:function(e,t,r){"use strict";r.d(t,{Ee:function(){return i},Q4:function(){return d},Wx:function(){return c},fC:function(){return i},mJ:function(){return o}});var l=r(27573),s=r(7653),n=r(63610),a=r(35449);let i=(0,s.forwardRef)((e,t)=>{let{className:r,...s}=e;return(0,l.jsx)(n.fC,{ref:t,...s,className:(0,a.cn)("space-y-2",r)})});i.displayName=n.fC.displayName;let o=(0,s.forwardRef)((e,t)=>{let{className:r,children:s,value:i,id:o,...d}=e;return(0,l.jsx)(n.ck,{className:(0,a.cn)("bg-surface-lower border-grey-700 betterhover:hover:border-grey-300 placeholder:text-grey-300 data-[state=checked]:border-primary size-5 shrink-0 cursor-pointer rounded-full border-2 border-solid transition-all ease-in-out focus-visible:border-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-green-800",r),value:i,id:o,ref:t,...d,children:s})});o.displayName=n.ck.displayName;let d=(0,s.forwardRef)((e,t)=>{let{className:r,...s}=e;return(0,l.jsx)(n.z$,{ref:t,...s,className:(0,a.cn)("after:bg-primary relative flex h-full w-full items-center justify-center after:block after:size-[0.625em] after:shrink-0 after:rounded-full after:content-['']",r)})});d.displayName=n.z$.displayName;let c=(0,s.forwardRef)((e,t)=>(0,l.jsx)(o,{ref:t,...e,children:(0,l.jsx)(d,{})}))},4693:function(){}}]);