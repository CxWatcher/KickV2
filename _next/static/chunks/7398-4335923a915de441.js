"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7398],{97398:function(e,t,s){s.d(t,{IdentityPopover:function(){return em}});var n=s(27573),a=s(69389),l=s(67754),r=s(7653),i=s(78406),o=s(70948),d=s(48451),u=s(91145),c=s(38467),x=s(57102),m=s(35449),h=s(26821),p=s(2560),f=s(97912),g=s(33837),v=s(14991),j=s(43546),b=s(4984),w=s(71789);let y=e=>{let{children:t,isFollowingOrSubscribed:s}=e;return(0,n.jsx)("div",{"data-handle":"true",className:(0,m.cn)("flex items-center gap-2",s&&"items-start"),children:t})};y.displayName="PopoverUserHeader.Root";let N=e=>{let{alt:t,src:s,...a}=e;return(0,n.jsx)("div",{className:"h-11 w-11 shrink-0 overflow-hidden rounded-full",children:(0,n.jsx)("img",{src:(0,b.Z)(s),alt:t,draggable:"false",className:"select-none",...a})})};N.displayName="PopoverUserHeader.ProfilePicture";let _=e=>{let{children:t}=e;return(0,n.jsx)("div",{className:"flex flex-col gap-2",children:t})};_.displayName="PopoverUserHeader.Informations";let C=e=>{let{slug:t,username:s}=e;return(0,n.jsx)("a",{href:"/".concat(t),target:"_blank",rel:"noreferrer",className:"select-text text-sm font-semibold leading-[1.2] text-[#E9ECED]",children:s})};C.displayName="PopoverUserHeader.Username";let E=e=>{let{followingSince:t,subscribedFor:s}=e,l=(0,a.useTranslations)("IdentityPopover");return(0,n.jsxs)("div",{className:"flex select-text gap-6",children:[!!(s&&s>0)&&(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"text-neutral text-[10px] font-semibold leading-tight",children:l("subbed_for")}),(0,n.jsx)("div",{className:"text-xs text-[#E9ECED]",children:l("sub_duration",{months:s})})]}),!!(t&&t.length>0)&&(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"text-neutral text-[10px] font-semibold leading-tight",children:l("following_since")}),(0,n.jsx)("div",{className:"text-xs text-[#E9ECED]",children:t&&(0,n.jsx)(w.r,{format:"medium",date:t})})]})]})};E.displayName="PopoverUserHeader.SubscribedOrFollowing";var k=s(24081);let F=e=>{let{fill:t,...s}=e;return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:t||"white",...s,children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M10.5 3.3 12 2l1 1-9.7 10L2 11.8l1.6-1.6a5 5 0 0 1-.8-2.5v-2h1.3v2c0 .6.1 1.1.4 1.6l.7-.7v-5c0-1.1 1-2 2.1-2h1c1.1 0 2 .7 2.1 1.7ZM11.7 6v1.8a3.8 3.8 0 0 1-5.2 3.5l-1 .9a5 5 0 0 0 1.8.5v.6H4.7v1.3h6.5v-1.3H8.5v-.6a5 5 0 0 0 4.4-5v-2H12l-.3.3Zm-1.1 2.2V7l-3.1 3.1h1c1.1 0 2-1 2-2.1Z",clipRule:"evenodd"})})},M=e=>{let{fill:t,...s}=e;return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:"32",height:"32",fill:t||"currentColor",...s,children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M15.6 3h.7a5 5 0 0 1 5 5v7.4a5 5 0 0 1-5 5h-.7a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Zm7.8 12.3v-4h2.7v4a10 10 0 0 1-9 10v1.2h5.3V29H9.5v-2.5h5.2v-1.2a10 10 0 0 1-8.7-10v-4h2.5v4a7.5 7.5 0 0 0 15 0Z",clipRule:"evenodd"})})};var L=s(48082),D=s(19168),S=s(24326),V=s(62219),z=s(47875),I=s(79423);let P={Root:e=>{let{children:t,className:s,...a}=e;return(0,n.jsx)("div",{className:(0,m.cn)("bg-shade-lower flex w-full flex-col gap-4 rounded p-4 shadow-[0px_20px_32px_0px_rgba(0,0,0,0.20)]",s),...a,children:t})},Header:{Root:y,ProfilePicture:N,Informations:_,Username:C,SubscribedOrFollowing:E},Badges:e=>{let{children:t}=e,s=(0,a.useTranslations)("IdentityPopover");return(0,n.jsxs)("div",{className:"flex h-6 w-fit items-center gap-2.5",children:[(0,n.jsx)("span",{className:"text-xs font-semibold text-white","data-handle":"true",children:s("badges")}),t]})},QuickActions:e=>{let{username:t,userSlug:s,userId:l,isAuthenticated:r,isUserSubscribed:o}=e,d=(0,a.useTranslations)("IdentityPopover"),u=(0,f.l)(e=>e.mutedUsers),{channelSlug:x}=(0,g.r)(),{data:m}=(0,p.useQuery)(i.u.show(x)),h=!!(null==u?void 0:u.some(e=>e.id===l));return(0,n.jsxs)("div",{className:"flex h-8 items-center justify-between",children:[(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[(0,n.jsx)(k.W,{channelSlug:s,username:t,variant:"highlight",size:"sm",withIcon:!0}),r&&!o&&(null==m?void 0:m.subscription_enabled)&&(0,n.jsxs)(S.zx,{variant:"highlight",size:"sm",className:"gap-2",onClick:()=>{o||(0,D.x)({type:"gift",channelSlug:x,gift:{quantity:1,tier:1,recipient:{id:l,username:t}}})},children:[(0,n.jsx)(L.O,{}),(0,n.jsx)("span",{children:d("gift_sub")})]})]}),(0,n.jsx)("div",{className:"flex items-center gap-2",children:(0,n.jsx)(V.u,{text:d(h?"tooltip_unmute":"tooltip_mute"),children:(0,n.jsx)(c.Ei,{size:"sm",variant:"text",onClick:()=>{h?z.H.emit(I.t.ToggleMuteUser,{type:"unmute",userId:l,username:t}):z.H.emit(I.t.ToggleMuteUser,{type:"mute",userId:l,username:t})},children:h?(0,n.jsx)(M,{}):(0,n.jsx)(F,{})})})})]})},Skeleton:()=>(0,n.jsxs)("div",{className:"bg-shade-base flex w-full flex-col gap-4 rounded p-4 shadow-[0px_20px_32px_0px_rgba(0,0,0,0.20)]",children:[(0,n.jsxs)("div",{className:"flex items-start gap-2",children:[(0,n.jsx)(j.ZG,{className:"bg-surface-tint size-11 shrink-0 overflow-hidden"}),(0,n.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,n.jsx)(j.Qr,{className:"w-20 text-sm leading-[1.2]",skeletonClass:"bg-surface-tint"}),(0,n.jsxs)("div",{className:"flex gap-6",children:[(0,n.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,n.jsx)(j.Qr,{className:"h-3 w-[54px]",skeletonClass:"bg-surface-tint"}),(0,n.jsx)(j.Qr,{className:"w-[54px]",skeletonClass:"bg-surface-tint"})]}),(0,n.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,n.jsx)(j.Qr,{className:"h-3 w-[54px]",skeletonClass:"bg-surface-tint"}),(0,n.jsx)(j.Qr,{className:"w-[54px]",skeletonClass:"bg-surface-tint"})]})]})]})]}),(0,n.jsxs)("div",{className:"flex h-6 w-fit items-center gap-2.5",children:[(0,n.jsx)(j.Qr,{className:"w-11",skeletonClass:"bg-surface-tint"}),(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[(0,n.jsx)(j.aM,{className:"bg-surface-tint size-5 rounded-md"}),(0,n.jsx)(j.aM,{className:"bg-surface-tint size-5 rounded-md"})]})]}),(0,n.jsxs)("div",{className:"flex h-8 w-full items-center justify-between",children:[(0,n.jsx)("div",{className:"flex items-center gap-2",children:(0,n.jsx)(j.aM,{className:"bg-surface-tint size-8 rounded"})}),(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[(0,n.jsx)(j.aM,{className:"bg-surface-tint size-8 rounded"}),(0,n.jsx)(j.aM,{className:"bg-surface-tint size-8 rounded"})]})]})]})};s(23103);var U=s(48388),T=s(97712),H=s(94936),Q=s(83079),B=s(36697),A=s(84954),R=s(66195),Z=s(91870),q=s(75639),O=s(97818);let K=["minute","hour","day","week"],Y=T.z.object({duration:T.z.coerce.number().min(1).max(10080),inputValue:T.z.string(),unit:T.z.enum(K),predefinedValue:T.z.enum([...K,""])}),W=e=>{let{className:t,submitHandler:s}=e,l=(0,a.useTranslations)("TimeoutDurationPicker"),{register:i,handleSubmit:o,formState:{isValid:d},setValue:u,watch:c,control:x}=(0,U.cI)({defaultValues:{duration:5,inputValue:"5",unit:"minute",predefinedValue:"minute"},resolver:(0,O.F)(Y)}),h=(0,r.useMemo)(()=>[{duration:5,label:(0,n.jsx)(B.f,{durationInMilliseconds:3e5,format:"long"}),unit:"minute"},{duration:60,label:(0,n.jsx)(B.f,{durationInMilliseconds:36e5,format:"long"}),unit:"hour"},{duration:1440,label:(0,n.jsx)(B.f,{durationInMilliseconds:864e5,format:"long"}),unit:"day"},{duration:10080,label:(0,n.jsx)(B.f,{durationInMilliseconds:6048e5,format:"long"}),unit:"week"}],[]),p=["minute","hour","day","week"],f=e=>{let{unit:t,duration:s}=e;return"minute"===t?s:"hour"===t?s/60:"day"===t?s/1440:"week"===t?s/10080:s};return(0,r.useEffect)(()=>{let e=e=>{let{unit:t,inputValue:s}=e;u("duration",f({unit:t,duration:s}),{shouldValidate:!0})},t=c((t,s)=>{let{type:n,name:a}=s;if("change"===n){if("predefinedValue"===a&&t.predefinedValue){let e=h.find(e=>e.unit===t.predefinedValue);u("duration",e.duration),u("unit",t.predefinedValue),u("inputValue","minute"===e.unit?String(e.duration):"1")}if(("unit"===a||"inputValue"===a)&&u("predefinedValue",""),"inputValue"===a&&t.unit&&(""===t.inputValue?u("duration",0,{shouldValidate:!0}):"0"===t.inputValue?(u("inputValue","1"),e({unit:t.unit,inputValue:1})):e({unit:t.unit,inputValue:Number(t.inputValue)})),"unit"===a){let s=t.unit,n=Number(t.inputValue);!isNaN(n)&&n>0&&s&&e({unit:s,inputValue:n})}}});return()=>{t.unsubscribe()}},[c,u,h]),(0,n.jsxs)("form",{onSubmit:o(s),className:(0,m.cn)("flex flex-col gap-2",t),children:[(0,n.jsx)(U.Qr,{name:"predefinedValue",control:x,render:e=>{let{field:t}=e;return(0,n.jsx)(Z.Ee,{className:"flex flex-col gap-1","aria-label":l("radio_label"),onValueChange:t.onChange,ref:t.ref,value:t.value,children:h.map(e=>(0,n.jsxs)("div",{className:"betterhover:hover:bg-shade-lower flex cursor-pointer items-center gap-2 rounded transition-colors ease-in-out",children:[(0,n.jsx)("label",{className:"grow cursor-pointer px-2 py-3 text-sm leading-none text-white",htmlFor:"".concat(e.duration),children:e.label}),(0,n.jsx)(Z.mJ,{value:e.unit,id:"".concat(e.duration),children:(0,n.jsx)(Z.Q4,{})})]},e.duration))})}}),(0,n.jsxs)("div",{className:"flex items-center gap-2 pl-2",children:[(0,n.jsx)("span",{children:l("max_duration")}),(0,n.jsxs)(A.zs,{openDelay:100,closeDelay:0,children:[(0,n.jsx)(A.Yi,{children:(0,n.jsx)(Q.Y,{className:"size-4"})}),(0,n.jsx)(A.bZ,{side:"top",children:(0,n.jsx)("div",{className:"flex flex-col gap-2 text-sm font-medium",children:(0,n.jsxs)("div",{className:"flex flex-row flex-nowrap items-center justify-start gap-2 rounded border border-[#FF9D00] border-opacity-20 bg-[#FF9D00] bg-opacity-10 p-1.5 text-[#FF9D00]",children:[(0,n.jsx)(H.W,{className:"size-8 fill-[#FF9D00]"}),(0,n.jsx)("p",{children:l.rich("max_duration_info_title",{duration:()=>(0,n.jsx)(B.f,{durationInMilliseconds:6048e5,format:"long"})})})]})})})]})]}),(0,n.jsxs)("div",{className:"flex flex-row flex-nowrap items-center gap-2 pl-2",children:[(0,n.jsx)(U.Qr,{name:"unit",control:x,render:e=>{let{field:t}=e;return(0,n.jsxs)(q.Ph,{onValueChange:t.onChange,value:t.value,children:[(0,n.jsx)(q.i4,{className:"h-9 w-[130px] min-w-[100px]",children:(0,n.jsx)(q.ki,{})}),(0,n.jsx)(q.Bw,{align:"start",ref:t.ref,children:p.map(e=>(0,n.jsx)(q.Ql,{value:e,children:(0,n.jsx)(q.S_,{children:(0,n.jsx)("span",{className:"capitalize",children:l(e)})})},e))})]})}}),(0,n.jsx)(R.fC,{type:"number",cType:"number",inputMode:"numeric",min:1,...i("inputValue"),className:"w-[75px] min-w-[60px]"}),(0,n.jsx)(S.zx,{disabled:!d,type:"submit",children:l("submit_label")})]})]})};var $=s(9495),G=s(730),J=s(18620),X=s(91660);let ee=e=>{let{username:t,banStatus:s,banStart:l,banEnd:r}=e,i=(0,a.useTranslations)("IdentityPopover"),o=!!s,d=!1===s,u=()=>{z.H.emit(I.t.Ban,{username:t,reason:""})},c=e=>{z.H.emit(I.t.Unban,{username:t,type:e})};return(0,n.jsxs)("div",{className:"contents",children:[!d&&(0,n.jsxs)("div",{className:"bg-shade-base flex items-center rounded p-2 text-sm font-semibold",children:[(0,n.jsxs)("div",{className:"flex w-0 grow items-center gap-1 text-[#FF9D00]",children:[(0,n.jsx)($.S,{width:14,height:14,fill:"#FF9D00"}),i("ban")]}),(0,n.jsx)(J.r,{checked:o,onCheckedChange:e=>{e?u():c("unban")}})]}),d&&!o&&(0,n.jsxs)("div",{className:"bg-shade-base flex flex-col gap-2 rounded p-2 text-sm font-semibold",children:[(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsxs)("div",{className:"flex w-0 grow items-center gap-1 text-[#FF9D00]",children:[(0,n.jsx)(G.T,{width:14,height:14,fill:"#FF9D00"}),(0,n.jsx)("span",{children:i("timeout")})]}),(0,n.jsx)(J.r,{checked:d,onCheckedChange:e=>{e||c("untimeout")}})]}),l&&r&&!s&&(0,n.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,n.jsxs)("span",{suppressHydrationWarning:!0,children:[i("timed_out")," (",(0,n.jsx)(B.f,{format:"short",durationInMilliseconds:new Date(r).getTime()-new Date(l).getTime()}),")"]}),(0,n.jsxs)("span",{children:[i("ends_at")," ",(0,n.jsx)(w.r,{format:"numericWithTime",date:r})]})]})]}),!d&&!o&&(0,n.jsx)(X.fC,{type:"single",collapsible:!0,children:(0,n.jsxs)(X.ck,{value:"timeouts",className:"data-[state=closed]:bg-shade-base data-[state=open]:bg-shade-base group w-full rounded px-2 shadow-[0px_20px_32px_0px_rgba(0,0,0,0.20)]",children:[(0,n.jsxs)(X.h4,{className:"flex items-center gap-2 py-2 text-sm font-semibold",children:[(0,n.jsxs)("div",{className:"flex w-fit items-center gap-1 text-[#FF9D00]",children:[(0,n.jsx)(G.T,{width:14,height:14,fill:"#FF9D00"}),(0,n.jsx)("span",{children:i("timeout")})]}),(0,n.jsx)("div",{className:"flex-1","aria-hidden":"true"}),(0,n.jsx)(X.xz,{className:"group flex items-center",asChild:!0,children:(0,n.jsx)("div",{children:(0,n.jsx)(J.r,{})})})]}),(0,n.jsx)("div",{className:"h-auto overflow-hidden transition-[max-height] duration-300 ease-out group-data-[state=closed]:max-h-0 group-data-[state=open]:max-h-[360px]",children:(0,n.jsx)(X.VY,{className:"flex flex-col py-2 text-sm font-semibold",forceMount:!0,children:(0,n.jsx)(W,{submitHandler:e=>{z.H.emit(I.t.Timeout,{username:t,minutes:e.duration})}})})})]})})]})};var et=s(14930),es=s(29414),en=s(98100),ea=s(79281);let el=()=>(0,n.jsxs)("div",{className:"flex items-center gap-1 text-sm font-normal leading-[1.2]",children:[(0,n.jsx)(j.Qr,{className:"h-4 w-10 shrink-0",skeletonClass:"bg-surface-tint"}),(0,n.jsx)(j.Qr,{className:"h-4 w-full",skeletonClass:"bg-surface-tint"})]}),er=e=>{let{message:t}=e;return(0,n.jsx)("div",{className:"flex items-center gap-1 text-sm font-normal leading-[1.2]",children:(0,n.jsx)("div",{className:"text-neutral min-w-0 break-words",children:(0,n.jsxs)("span",{className:"min-w-0 break-words",children:[(0,n.jsx)("span",{className:"pr-1 text-[13px] tabular-nums text-[#E9ECED]",children:(0,n.jsx)(w.r,{date:t.created_at,format:"hour"})}),(0,n.jsx)("span",{className:"min-w-0 break-words",children:(0,n.jsx)(ea.F,{content:t.content,id:t.id})})]})})})},ei=()=>(0,n.jsx)(j.aM,{className:"bg-shade-base h-[200px] w-full rounded shadow-[0px_20px_32px_0px_rgba(0,0,0,0.20)]"}),eo=e=>{let{created_at:t}=e,s=(0,a.useTranslations)("IdentityPopover.Messages");return(0,n.jsxs)("div",{className:"flex w-full items-center gap-2 text-sm text-[#929EA6]",children:[(0,n.jsx)("div",{className:"bg-surface-tint h-0.5 w-0 grow"}),(0,n.jsxs)("span",{children:[new Date(t).getDate()===new Date().getDate()&&"".concat(s("today")," "),(0,n.jsx)(w.r,{date:t,format:"numeric"})]}),(0,n.jsx)("div",{className:"bg-surface-tint h-0.5 w-0 grow"})]})},ed=e=>{let{isAuthenticated:t,channelId:s,userId:l}=e,i=(0,a.useTranslations)("IdentityPopover.Messages"),o=(0,r.useRef)(!1),d=(0,r.useRef)(null),u=(0,f.l)(e=>e.identityNewMessages),{data:c,fetchNextPage:x,hasNextPage:m,isFetching:h,isFetchingNextPage:p,isError:g}=(0,en.useInfiniteQuery)(et.j.getMessagesByChannelAndUser(t,s,l,0)),v=(0,r.useMemo)(()=>c?[...u,...c.pages.flatMap(e=>{var t;return null!==(t=null==e?void 0:e.data.messages)&&void 0!==t?t:[]})].sort((e,t)=>{let s=new Date(e.created_at),n=new Date(t.created_at);return s<n?-1:s>n?1:0}).reduce((e,t,s,n)=>{let a=n.length>s+1?n[s+1]:null,l=e=>"divider".concat(e.replace(/\W/g,""),"_").concat(s);return 0===s&&e.push({id:l(t.created_at),type:"divider",created_at:t.created_at}),e.push(t),a&&new Date(t.created_at).getDate()!==new Date(a.created_at).getDate()&&e.push({id:l(a.created_at),type:"divider",created_at:a.created_at}),e},[]):[],[c,u]),j=(0,r.useCallback)(()=>{if(!d.current)return;let{scrollTop:e}=d.current;e<20&&!p&&m&&x()},[x,m,p]);(0,r.useEffect)(()=>{if(d.current){let{scrollHeight:e,clientHeight:t,scrollTop:s}=d.current;e-t-s<30&&d.current.scrollTo({top:e})}},[v]),(0,r.useEffect)(()=>{let e=d.current;return null==e||e.addEventListener("scroll",j),()=>{null==e||e.removeEventListener("scroll",j)}},[j]),(0,r.useEffect)(()=>{c&&d.current&&d.current.getBoundingClientRect().height<250&&m&&!p?x():c&&!o.current&&d.current&&(o.current=!0,d.current.scrollTo({top:d.current.scrollHeight}))},[c,x,m,p]),(0,r.useEffect)(()=>{!h&&!p&&m&&d.current&&0===d.current.scrollTop&&(d.current.scrollTo({top:21}),x())},[h,p,m,x]);let b=!v.length,w=h&&!1===p?"fetchingList":h?"fetchingMore":void 0;return g?(0,n.jsx)("div",{children:i("loading_error")}):b&&!h?(0,n.jsx)("div",{className:"bg-shade-base",children:(0,n.jsxs)(es.ub.Root,{children:[(0,n.jsx)(es.ub.Illustration,{type:"general"}),(0,n.jsx)(es.ub.Section,{children:(0,n.jsx)(es.ub.Subtitle,{className:"text-grey-400 p-2 font-medium lg:text-sm",children:i("empty")})})]})}):"fetchingList"===w?(0,n.jsx)(ei,{}):(0,n.jsx)("div",{className:"bg-shade-base select-text rounded p-2 shadow-[0px_20px_32px_0px_rgba(0,0,0,0.20)]",children:(0,n.jsxs)("div",{className:"flex max-h-[250px] flex-col gap-1 overflow-y-auto overflow-x-hidden",ref:d,children:["fetchingMore"===w&&Array.from({length:12}).map((e,t)=>(0,n.jsx)(el,{},t)),v.map(e=>"divider"===e.type?(0,n.jsx)(eo,{created_at:e.created_at},e.id):(0,n.jsx)(er,{message:e},e.id))]})})},eu=e=>{let{children:t}=e;return(0,n.jsx)("div",{id:"chatUserInfoPopover",className:"animate-fadeIn z-popover fixed left-0 top-0 select-none [&_*:not([data-handle=true]):not(button):not(a):not(.cursor-pointer)]:cursor-auto [&_[data-handle=true]:not(button):not(.cursor-pointer)]:cursor-[var(--message-identity-popover-cursor)] [&_button:not(button:disabled)_*]:!cursor-pointer",onPointerDown:e=>{if(0===e.button&&e.target instanceof HTMLDivElement&&"true"===e.target.dataset.handle){var t,s,n,a;let e=document.querySelector(":root"),l=window.innerWidth,r=window.innerHeight,i=(null===(t=document.getElementById("chatUserInfoPopover"))||void 0===t?void 0:t.offsetWidth)||0,o=(null===(s=document.getElementById("chatUserInfoPopover"))||void 0===s?void 0:s.offsetHeight)||0;null==e||null===(n=e.style)||void 0===n||n.setProperty("--message-identity-popover-cursor","grabbing"),null==e||null===(a=e.style)||void 0===a||a.setProperty("cursor","grabbing");let d=e=>{window.requestAnimationFrame(()=>{var t,s,n,a;let d=document.querySelector(":root"),u=Number((null==d?void 0:null===(t=d.style)||void 0===t?void 0:t.getPropertyValue("--message-identity-popover-x").slice(0,-2))||0),c=Number((null==d?void 0:null===(s=d.style)||void 0===s?void 0:s.getPropertyValue("--message-identity-popover-y").slice(0,-2))||0),x=u+e.movementX,m=c+e.movementY;x<0||x+i>l||m<0||m+o>r||(null==d||null===(n=d.style)||void 0===n||n.setProperty("--message-identity-popover-x","".concat(x,"px")),null==d||null===(a=d.style)||void 0===a||a.setProperty("--message-identity-popover-y","".concat(m,"px")))})},u=()=>{var e,t;let s=document.querySelector(":root");null==s||null===(e=s.style)||void 0===e||e.setProperty("--message-identity-popover-cursor","grab"),null==s||null===(t=s.style)||void 0===t||t.setProperty("cursor",""),window.removeEventListener("pointermove",d),window.removeEventListener("pointerup",u)};window.addEventListener("pointermove",d),window.addEventListener("pointerup",u)}},"data-handle":"true",style:{transform:"translateX(var(--message-identity-popover-x)) translateY(var(--message-identity-popover-y)) translateZ(0)"},children:t})};var ec=s(85095);let ex=e=>{let{chatroomId:t,channelSlug:s}=e,n=(0,h.useQueryClient)(),a=(0,f.l)(e=>e.isIdentityOpen),l=(0,f.l)(e=>e.identityUsername),o=(0,ec.Y)(e=>e.isPusherConnected),d=(0,ec.Y)(e=>e.on),u=(0,ec.Y)(e=>e.off),{data:c}=(0,p.useQuery)({...i.u.getCleanUserDetailsForChat(s,l),enabled:!!(a&&l)}),x=(0,r.useCallback)(e=>{let{identityUsername:t,isIdentityOpen:a}=f.l.getState();e.user.username===t&&a&&n.setQueryData(i.u.getCleanUserDetailsForChat(s,t).queryKey,t=>{if(!t)return t;let s=new Date().getTime();return{...t,banned:{created_at:new Date(s-5e3).toISOString(),permanent:e.permanent,expires_at:e.expires_at||""}}})},[s,n]),m=(0,r.useCallback)(e=>{let{identityUsername:t,isIdentityOpen:a}=f.l.getState();e.user.username===t&&a&&n.setQueryData(i.u.getCleanUserDetailsForChat(s,t).queryKey,e=>e?{...e,banned:null}:e)},[s,n]),g=(0,r.useCallback)(e=>{let{identityUsername:t,isIdentityOpen:s}=f.l.getState();e.sender.username===t&&s&&f.l.getState().setIdentityNewMessage(e)},[]);return(0,r.useEffect)(()=>(o&&(d("chatrooms.".concat(t,".v2"),"App\\Events\\UserBannedEvent",x),d("chatrooms.".concat(t,".v2"),"App\\Events\\UserUnbannedEvent",m),d("chatrooms.".concat(t,".v2"),"App\\Events\\ChatMessageEvent",g)),()=>{o&&(u("chatrooms.".concat(t,".v2"),"App\\Events\\UserBannedEvent",x),u("chatrooms.".concat(t,".v2"),"App\\Events\\UserUnBannedEvent",m),u("chatrooms.".concat(t,".v2"),"App\\Events\\ChatMessageEvent",g))}),[o,t]),(0,r.useEffect)(()=>{let e=null;if(a&&(null==c?void 0:c.banned)&&!c.banned.permanent&&!e){let t=new Date().getTime();e=setTimeout(()=>{n.setQueryData(i.u.getCleanUserDetailsForChat(s,c.username).queryKey,e=>e?{...e,banned:null}:e)},new Date(c.banned.expires_at).getTime()-t)}else e&&clearTimeout(e);return()=>{e&&clearTimeout(e)}},[a,c,s,n]),null},em=()=>{let e=(0,l.usePathname)(),t=(0,h.useQueryClient)(),s=(0,u.dD)(),{channelSlug:a,chatroomId:d}=(0,g.r)(),v=(0,f.l)(e=>e.isIdentityOpen),j=(0,f.l)(e=>e.setIdentityOpen),b=(0,f.l)(e=>e.identityUsername),{status:w}=(0,p.useQuery)({...i.u.getCleanUserDetailsForChat(a,b),enabled:!!(v&&b)}),y=(0,f.l)(e=>e.userCanModerate);return(ex({chatroomId:d,channelSlug:a}),(0,r.useEffect)(()=>{f.l.getState().resetIdentity()},[e]),(0,r.useEffect)(()=>{v||t.resetQueries({queryKey:["Channel","getCleanUserDetailsForChat",a]})},[v,t,a,b]),v)?s?(0,n.jsx)(x.fC,{open:v,onOpenChange:j,children:(0,n.jsx)(x.VY,{className:(0,m.cn)(y&&"bg-surface-tint"),children:(0,n.jsx)(eh,{})})}):(0,n.jsx)(eu,{children:(0,n.jsxs)("div",{"data-handle":"true",className:(0,m.cn)("relative flex w-[var(--chat-user-info-popover-width)] flex-col gap-1 rounded p-4",y&&"bg-surface-tint"),children:[(0,n.jsx)(c.Ei,{size:"sm",variant:"text",className:(0,m.cn)("absolute right-6 top-6 p-1","error"===w&&"right-2 top-2"),onClick:()=>f.l.getState().resetIdentity(),children:(0,n.jsx)(o.T,{})}),(0,n.jsx)(eh,{})]})}):null},eh=()=>{var e,t,s,l;let r=(0,a.useTranslations)("IdentityPopover"),o=(0,d.k)(),u="authenticated"===o.status,{subscriberBadges:c,channelId:x,channelSlug:m}=(0,g.r)(),h=(0,f.l)(e=>e.isIdentityOpen),j=(0,f.l)(e=>e.userCanModerate),{data:b}=(0,p.useQuery)({...i.u.getCleanUserDetailsForChat(m,null===(e=o.user)||void 0===e?void 0:e.username),enabled:!!(h&&u)}),w=(0,f.l)(e=>e.identityUsername),{data:y,status:N}=(0,p.useQuery)({...i.u.getCleanUserDetailsForChat(m,w),enabled:!!(h&&w)}),_=(null==b?void 0:b.id)===(null==y?void 0:y.id),C=(null==y?void 0:y.is_channel_owner)||(null==y?void 0:y.is_moderator)||(null==y?void 0:y.is_staff)||!1,E=!!y&&(y.following_since&&y.following_since.length>0||y.subscribed_for>0);return(0,n.jsxs)("div",{className:"flex flex-col gap-2",children:["pending"===N&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(P.Skeleton,{}),j&&(0,n.jsx)(ei,{})]}),"error"===N&&(0,n.jsx)("div",{className:"pb-2 pt-6 text-center text-sm font-semibold","data-handle":"true",children:r("user_not_found")}),"success"===N&&y&&(0,n.jsxs)(P.Root,{"data-handle":"true",children:[(0,n.jsxs)(P.Header.Root,{isFollowingOrSubscribed:E,children:[(0,n.jsx)(P.Header.ProfilePicture,{src:y.profile_pic,alt:y.username}),(0,n.jsxs)(P.Header.Informations,{children:[(0,n.jsx)(P.Header.Username,{slug:y.slug,username:y.username}),E&&(0,n.jsx)(P.Header.SubscribedOrFollowing,{followingSince:y.following_since||void 0,subscribedFor:y.subscribed_for})]})]}),y.badges&&y.badges.length>0&&(0,n.jsx)(P.Badges,{children:(0,n.jsx)(v.R,{profile:{id:y.id,username:y.username,identity:{badges:y.badges},slug:y.slug},shouldParseIdentity:!1,badgeSize:"l",className:"gap-2.5",subscriberBadges:c})}),!_&&(0,n.jsx)(P.QuickActions,{username:y.username,userSlug:y.slug,userId:y.id,isAuthenticated:u,isUserSubscribed:y.subscribed_for>0})]}),j&&y&&(0,n.jsxs)(P.Root,{children:[!C&&(0,n.jsx)(ee,{username:y.username,banStatus:null===(t=y.banned)||void 0===t?void 0:t.permanent,banStart:null===(s=y.banned)||void 0===s?void 0:s.created_at,banEnd:null===(l=y.banned)||void 0===l?void 0:l.expires_at}),(0,n.jsx)(ed,{isAuthenticated:u,channelId:x,userId:y.id})]})]})}},24081:function(e,t,s){s.d(t,{W:function(){return p}});var n=s(27573),a=s(69389),l=s(7653),r=s(78406),i=s(2696),o=s(48451),d=s(1118),u=s(2190),c=s(51354),x=s(26821),m=s(2560),h=s(15995);let p=e=>{let{username:t,channelSlug:s,isFollowingPage:p,forcedInitialValue:f,...g}=e,v=(0,x.useQueryClient)(),j=(0,a.useLocale)(),b=(0,a.useTranslations)("FollowButton"),w="authenticated"===(0,o.k)().status,y=w&&!!f,[N,_]=(0,l.useState)(!y&&w),{data:C,status:E}=(0,m.useQuery)(r.u.me(N,s)),k=(0,l.useMemo)(()=>!N&&y?"followed"===f:"success"===E&&((null==C?void 0:C.is_following)||!1),[N,C,E,f,y]),F=r._.useFollow(w,s),M=r._.useUnfollow(w,s),L=(0,d.Z)(r.u.me(w,s)),D=()=>{if(!N&&y&&M){M.mutate(void 0,{onSuccess:()=>{v.invalidateQueries({queryKey:i.b.recommendedLivestreamsForSidebar(!0,j).queryKey}),_(!0)},onError:()=>{u.A.error(b("unfollow_error")),L.revert()}});return}"success"===E&&k&&M&&(L.set({is_following:!1,following_since:null}),M.mutate(void 0,{onSuccess:()=>{v.invalidateQueries({queryKey:i.b.recommendedLivestreamsForSidebar(!0,j).queryKey})},onError:()=>{u.A.error(b("unfollow_error")),L.revert()}}))};if(!w)return(0,n.jsx)(h.e.Unauthenticated,{...g});if("pending"===E&&!y)return(0,n.jsx)(h.e.Skeleton,{...g});if("success"===E||y){var S;return!p&&k?(0,n.jsx)(h.e.Followed,{onClick:()=>{(0,c._)({title:b("unfollow_title",{username:t}),description:(0,n.jsx)("p",{children:b("unfollow_description",{username:t})}),confirmButtonLabel:b("unfollow"),confirmFn:D})},variant:"highlight",disabled:(null==F?void 0:F.isPending)||(null==M?void 0:M.isPending),...g}):(0,n.jsx)(h.e.Unfollowed,{onClick:()=>{if(!N&&y&&F){F.mutate(void 0,{onSuccess:()=>{v.invalidateQueries({queryKey:r.u.followedChannelsForSidebar(!0).queryKey}),_(!0)},onError:()=>{u.A.error(b("follow_error"))}});return}"success"===E&&!k&&F&&(L.set({is_following:!0,following_since:new Date().toISOString()}),F.mutate(void 0,{onSuccess:()=>{v.invalidateQueries({queryKey:r.u.followedChannelsForSidebar(!0).queryKey})},onError:()=>{u.A.error(b("follow_error")),L.revert()}}))},disabled:(null==F?void 0:F.isPending)||(null==M?void 0:M.isPending)||!!(null==C?void 0:null===(S=C.banned)||void 0===S?void 0:S.permanent),...g})}return null}},15995:function(e,t,s){s.d(t,{e:function(){return j}});var n=s(27573),a=s(69389),l=s(7653),r=s(67423),i=s(23737),o=s(52987),d=s(33574),u=s(38467),c=s(24326),x=s(43546),m=s(62219),h=s(35449);let p=e=>{let{withText:t,withIcon:s,...o}=e,x=(0,a.useTranslations)("FollowButton"),[m,h]=(0,l.useState)(!1),{openAuthenticationLogIn:p}=(0,d.a)(),f=()=>m?(0,n.jsx)(i.$,{className:"size-4 fill-current"}):(0,n.jsx)(r.w,{className:"size-4 fill-current"});return t?(0,n.jsxs)(c.zx,{"aria-label":x("follow"),onClick:p,onMouseOver:()=>h(!0),onMouseLeave:()=>h(!1),...o,children:[s?(0,n.jsx)(f,{}):null,(0,n.jsx)("span",{className:"text-sm lg:text-base",children:x("follow")})]}):(0,n.jsx)(u.Ei,{"aria-label":x("follow"),onClick:p,onMouseOver:()=>h(!0),onMouseLeave:()=>h(!1),...o,children:(0,n.jsx)(f,{})})};p.displayName="FollowButton.Unauthenticated";let f=e=>{let{withText:t,withIcon:s,...r}=e,d=(0,a.useTranslations)("FollowButton"),[x,h]=(0,l.useState)(!1),p=t?c.zx:u.Ei;return(0,n.jsx)(m.u,{text:d("unfollow"),side:"top",children:(0,n.jsxs)(p,{"aria-label":d("unfollow"),onMouseOver:()=>h(!0),onMouseLeave:()=>h(!1),...r,children:[s?(0,n.jsx)(()=>x?(0,n.jsx)(o.m,{}):(0,n.jsx)(i.$,{}),{}):null,t&&(0,n.jsx)("span",{className:"text-sm lg:text-base",children:d("unfollow")})]})})};f.displayName="FollowButton.Followed";let g=e=>{let{withText:t,withIcon:s,...o}=e,d=(0,a.useTranslations)("FollowButton"),[x,m]=(0,l.useState)(!1),h=()=>x?(0,n.jsx)(i.$,{fill:"currentColor"}):(0,n.jsx)(r.w,{fill:"currentColor"});return t?(0,n.jsxs)(c.zx,{"aria-label":d("follow"),onMouseOver:()=>m(!0),onMouseLeave:()=>m(!1),...o,children:[s?(0,n.jsx)(h,{}):null,(0,n.jsx)("span",{className:"text-sm lg:text-base",children:d("follow")})]}):(0,n.jsx)(u.Ei,{"aria-label":d("follow"),onMouseOver:()=>m(!0),onMouseLeave:()=>m(!1),...o,children:(0,n.jsx)(h,{})})};g.displayName="FollowButton.Unfollowed";let v=e=>{let{className:t}=e;return(0,n.jsx)(x.aM,{className:(0,h.cn)("size-8 rounded lg:size-10",t)})};v.displayName="FollowButton.Skeleton";let j={Unauthenticated:p,Followed:f,Unfollowed:g,Skeleton:v}},67423:function(e,t,s){s.d(t,{w:function(){return a}});var n=s(27573);let a=e=>{let{fill:t,...s}=e;return(0,n.jsx)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:t||"white",xmlns:"http://www.w3.org/2000/svg",...s,children:(0,n.jsx)("path",{d:"M23.2975 6.5L26.5 9.7025V14.6112L16 24.455L5.5 14.6112V9.7025L8.7025 6.5H10.4L16 10.98L21.6 6.5H23.2975ZM24.75 3H20.375L16 6.5L11.625 3H7.25L2 8.25V16.125L16 29.25L30 16.125V8.25L24.75 3Z"})})}},52987:function(e,t,s){s.d(t,{m:function(){return a}});var n=s(27573);let a=e=>{let{fill:t,...s}=e;return(0,n.jsx)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:t||"white",xmlns:"http://www.w3.org/2000/svg",...s,children:(0,n.jsx)("path",{d:"M30 8.25L24.75 3H20.375L16 6.5L11.625 3H7.25L2 8.25V16.125L16 29.25L30 16.125V8.25ZM5.5 9.7025L8.7025 6.5H10.4L13.41 8.90625L8.97375 12.5375L13.7775 17L10.9338 19.6775L5.5175 14.6025V9.69375L5.5 9.7025ZM16 24.455L13.48 22.0925L18.8875 17L14.285 12.7212L21.8713 6.50875H23.2975L26.5 9.71125V14.62L16 24.4638V24.455Z"})})}},51354:function(e,t,s){s.d(t,{E:function(){return n},_:function(){return a}});let n="openConfirmModal",a=e=>{let t=new CustomEvent(n,{detail:e});window.dispatchEvent(t)}},75639:function(e,t,s){s.d(t,{Ph:function(){return j},Bw:function(){return d},Ql:function(){return x},S_:function(){return v},i4:function(){return f},ki:function(){return g}});var n=s(27573),a=s(1749),l=s(84503),r=s(7653),i=s(35449);let o=(0,r.forwardRef)((e,t)=>{let{className:s,children:a,position:r="popper",...o}=e;return(0,n.jsx)(l.h_,{children:(0,n.jsx)(l.VY,{ref:t,className:(0,i.cn)("data-[state=open]:animate-in data-[state=open]:fade-in-0  data-[state=open]:zoom-in-95","data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95","data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","z-dropdown border-grey-600 bg-shade-base relative min-w-[8rem] overflow-hidden rounded font-semibold text-white shadow-md","popper"===r&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",s),position:r,...o,children:(0,n.jsx)(l.l_,{className:(0,i.cn)("p-1","popper"===r&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:a})})})});o.displayName=l.VY.displayName;var d=o,u=s(26471);let c=(0,r.forwardRef)((e,t)=>{let{className:s,children:a,showIndicator:r=!0,...o}=e;return(0,n.jsxs)(l.ck,{ref:t,className:(0,i.cn)("focus:bg-surface-tint fill-current focus:text-white","data-[disabled]:pointer-events-none data-[disabled]:opacity-50","relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 text-sm outline-none",r&&"pl-2.5 pr-8",!r&&"px-2",s),...o,children:[a,r&&(0,n.jsx)("span",{className:"absolute right-2.5 flex size-3 items-center justify-center",children:(0,n.jsx)(l.wU,{children:(0,n.jsx)(u.c,{className:"size-3",fill:"current"})})})]})});c.displayName=l.ck.displayName;var x=c;(0,r.forwardRef)((e,t)=>{let{className:s,...a}=e;return(0,n.jsx)(l.__,{ref:t,className:(0,i.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold",s),...a})}).displayName=l.__.displayName,(0,r.forwardRef)((e,t)=>{let{className:s,...a}=e;return(0,n.jsx)(l.Z0,{ref:t,className:(0,i.cn)("-mx-1 my-1 h-px bg-grey-600",s),...a})}).displayName=l.Z0.displayName;var m=s(42620),h=s(24326);let p=(0,r.forwardRef)((e,t)=>{let{className:s,children:a,smIcon:r,...o}=e,d=r||null;return(0,n.jsxs)(l.xz,{ref:t,className:(0,i.cn)((0,h.dc)({variant:"highlight",className:s,size:"sm"}),"data-[state=open]:bg-secondary/20","group justify-between"),...o,children:[d?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"hidden lg:block",children:a}),(0,n.jsx)("div",{className:"lg:hidden",children:(0,n.jsx)(d,{className:"size-4"})})]}):a,(0,n.jsx)(l.JO,{asChild:!0,children:(0,n.jsx)(m.v,{className:(0,i.cn)("opacity-75 transition-transform group-data-[state=open]:rotate-180",d&&"hidden lg:block")})})]})});p.displayName=l.xz.displayName;var f=p;l.ZA;let g=l.B4,v=l.eT;l.h_,l.$G,l.u_,l.l_;let j=e=>{let t=(0,a.s)();return(0,n.jsx)(l.fC,{dir:t,...e})}}}]);