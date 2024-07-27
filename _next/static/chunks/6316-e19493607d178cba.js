"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6316],{92041:function(e,t,n){n.d(t,{ClipActions:function(){return P}});var i=n(27573),l=n(69389),r=n(44806),s=n(94936),a=n(7101);let o=e=>{let{fill:t,...n}=e;return(0,i.jsxs)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:t||"white",xmlns:"http://www.w3.org/2000/svg",...n,children:[(0,i.jsx)("path",{d:"M16 20.25C17.933 20.25 19.5 18.683 19.5 16.75C19.5 14.817 17.933 13.25 16 13.25C14.067 13.25 12.5 14.817 12.5 16.75C12.5 18.683 14.067 20.25 16 20.25Z"}),(0,i.jsx)("path",{d:"M23 8H9L2 15V18.5L9 25.5H23L30 18.5V15L23 8ZM16 22.875C12.6138 22.875 9.875 20.1362 9.875 16.75C9.875 13.3637 12.6138 10.625 16 10.625C19.3862 10.625 22.125 13.3637 22.125 16.75C22.125 20.1362 19.3862 22.875 16 22.875Z"})]})};var c=n(77474),u=n(38467),d=n(24326),p=n(59229);let h=e=>{let{children:t}=e;return(0,i.jsx)("div",{className:"flex shrink-0 grow justify-end",children:(0,i.jsxs)(p.fC,{children:[(0,i.jsx)(p.xz,{asChild:!0,children:(0,i.jsx)(u.Ei,{size:"xs",variant:"text",children:(0,i.jsx)(c.n,{})})}),(0,i.jsx)(p.VY,{side:"top",sideOffset:4,align:"end",children:t})]})})};h.displayName="ClipCardActions.Root";let C=e=>{let t=(0,l.useTranslations)("ClipCard");return(0,i.jsx)(p.ck,{asChild:!0,children:(0,i.jsxs)(d.zx,{...e,children:[(0,i.jsx)(s.W,{}),(0,i.jsx)("span",{children:t("Actions.report")})]})})};C.displayName="ClipCardActions.Report";let x=e=>{let t=(0,l.useTranslations)("ClipCard");return(0,i.jsx)(p.ck,{asChild:!0,children:(0,i.jsxs)(d.zx,{...e,children:[(0,i.jsx)(a.p,{}),(0,i.jsx)("span",{children:t("Actions.delete")})]})})};x.displayName="ClipCardActions.Delete";let m=e=>{let t=(0,l.useTranslations)("ClipCard");return(0,i.jsx)(p.ck,{asChild:!0,children:(0,i.jsxs)(d.zx,{...e,children:[(0,i.jsx)(o,{}),(0,i.jsx)("span",{children:t("Actions.hide")})]})})};m.displayName="ClipCardActions.Hide";let f={Root:h,Report:C,Delete:x,Hide:m};var v=n(48451),j=n(2190),g=n(51354),y=n(73024),w=n(26821);let P=e=>{var t,n;let{clip:s,parentQueryKey:o}=e,c=(0,l.useTranslations)("ClipCard"),u=(0,w.useQueryClient)(),d=(0,v.k)(),p=null===(t=d.user)||void 0===t?void 0:t.roles.includes("super-admin"),h=(null===(n=d.user)||void 0===n?void 0:n.slug)===s.creator.slug,C=r.E.useDeleteClip(p||h,s.id),x=()=>{C&&!C.isPending&&C.mutate(void 0,{onSuccess:()=>{j.A.success(c("Actions.delete_success"),{icon:a.p}),o&&u.invalidateQueries({queryKey:o})}})};return"authenticated"!==d.status?null:(0,i.jsxs)(f.Root,{children:[(0,i.jsx)(f.Report,{onClick:()=>{(0,y.$)({type:"clip",data:{id:s.id,title:s.title,authorUsername:s.creator.username,channelUsername:s.channel.username}})}}),(h||p)&&(0,i.jsx)(f.Delete,{onClick:()=>{(0,g._)({title:c("Actions.delete_confirm_title"),description:(0,i.jsx)("p",{children:c("Actions.delete_confirm_description")}),confirmButtonLabel:c("Actions.delete"),confirmFn:x})}}),p&&(0,i.jsx)(f.Hide,{onClick:()=>{alert("Implement hide mutation (backend issue)")}})]})}},41140:function(e,t,n){n.d(t,{hd:function(){return l},uO:function(){return r},ut:function(){return i}});let i=32,l=24,r=16},44806:function(e,t,n){n.d(t,{E:function(){return v},Y:function(){return f}});var i=n(73822),l=n(3316),r=n(96196),s=n(41140),a=n(86197);let o=(e,t)=>(0,a.rK)("/api/v2/clips/".concat(t),null,{method:"DELETE",signal:e}),c=(e,t)=>(0,a.rK)("/api/v2/clips/".concat(t),null,{method:"GET",signal:e}),u=(e,t)=>(0,a.rK)("/api/v2/clips/".concat(t,"/like"),null,{method:"PUT",signal:e}),d=(e,t)=>(0,a.rK)("/api/v2/clips/".concat(t,"/like"),null,{method:"DELETE",signal:e}),p=(e,t)=>(0,a.rK)("/api/v2/clips/".concat(t,"/download"),null,{method:"GET",signal:e}),h=(e,t)=>(0,a.rK)("/api/v2/clips/".concat(t,"/play"),null,{method:"GET",signal:e}),C=(e,t,n,i)=>(0,a.rK)("/api/v2/clips",{sort:t,time:n,cursor:i},{method:"GET",signal:e}),x=(e,t,n,i,l)=>(0,a.rK)("/api/v2/channels/".concat(t,"/clips"),{sort:n,time:i,cursor:l},{method:"GET",signal:e}),m=(e,t,n,i,l)=>(0,a.rK)("/api/v2/categories/".concat(t,"/clips"),{sort:n,time:i,cursor:l},{method:"GET",signal:e}),f={getClip:e=>(0,l.C)({queryKey:["InternalClip","getClip",e],queryFn:t=>{let{signal:n}=t;return c(n,e)}}),downloadClip:(e,t)=>(0,l.C)({queryKey:["InternalClip","downloadClip",t],queryFn:e=>{let{signal:n}=e;return p(n,t)},enabled:e}),playClip:e=>(0,l.C)({queryKey:["InternalClip","playClip",e],queryFn:t=>{let{signal:n}=t;return h(n,e)}}),listClips:(e,t,n)=>(0,r.t)({queryKey:["InternalClip","listClips",e,t],queryFn:n=>{let{signal:i,pageParam:l}=n;return C(i,e,t,l.cursor)},initialPageParam:{cursor:n},getNextPageParam:e=>(null==e?void 0:e.nextCursor)&&!(e.clips.length<s.uO)?{cursor:e.nextCursor}:void 0}),listClipsPerChannel:(e,t,n,i)=>(0,r.t)({queryKey:["InternalClip","listClipsPerChannel",e,t,n],queryFn:i=>{let{signal:l,pageParam:r}=i;return x(l,e,t,n,r.cursor)},initialPageParam:{cursor:i},getNextPageParam:e=>(null==e?void 0:e.nextCursor)&&!(e.clips.length<s.uO)?{cursor:e.nextCursor}:void 0}),listClipsPerCategory:(e,t,n,i)=>(0,r.t)({queryKey:["InternalClip","listClipsPerCategory",e,t,n],queryFn:i=>{let{signal:l,pageParam:r}=i;return m(l,e,t,n,r.cursor)},initialPageParam:{cursor:i},getNextPageParam:e=>(null==e?void 0:e.nextCursor)&&!(e.clips.length<s.uO)?{cursor:e.nextCursor}:void 0})},v={useDeleteClip:(e,t)=>{let n=(0,i.useMutation)({mutationFn:async()=>o(null,t)});return e?n:null},useLikeClip:(e,t)=>{let n=(0,i.useMutation)({mutationFn:async()=>u(null,t)});return e?n:null},useUnlikeClip:(e,t)=>{let n=(0,i.useMutation)({mutationFn:async()=>d(null,t)});return e?n:null}}},29973:function(e,t,n){n.d(t,{ClipCardWrapper:function(){return d}});var i=n(27573),l=n(67754),r=n(7653),s=n(91145),a=n(34858),o=n(26363),c=n(53910),u=n(57167);let d=e=>{let{title:t,createdAt:n,categorySlug:d,categoryName:p,duration:h,id:C,streamerSlug:x,streamerUsername:m,streamerProfilePicture:f,viewCount:v,playbackUrl:j,thumbnailUrl:g,oneRow:y,forcedWidth:w,isBrowse:P=!1,children:E}=e,T=(0,r.useId)(),k=(0,s.dD)(),M=(0,l.useRouter)(),N=()=>{k?M.push("/".concat(x,"/clips/").concat(C)):(0,a.M)({clipId:C,streamerSlug:x})};return(0,i.jsxs)(c.P.Root,{onMouseEnter:()=>{u.T.getState().play(T,j)},onMouseLeave:e=>{e.relatedTarget instanceof Node&&e.currentTarget.contains(e.relatedTarget)||u.T.getState().stop()},oneRow:y,forcedWidth:w,children:[(0,i.jsxs)(c.P.VideoPlayer,{id:T,src:g,alt:m,onClick:N,children:[(0,i.jsx)(c.P.Duration,{milliseconds:h}),(0,i.jsx)(c.P.ViewsCount,{viewCount:v})]}),(0,i.jsxs)(c.P.MetadataSection,{children:[(0,i.jsx)(c.P.UserThumbnail,{href:"/".concat(x),src:f,alt:m}),(0,i.jsxs)(c.P.Metadata,{children:[k?(0,i.jsx)(c.P.Title,{href:"/".concat(x,"/clips/").concat(C),children:t}):(0,i.jsx)(c.P.TitleModal,{onClick:N,children:t}),(0,i.jsxs)(c.P.Subtitle,{children:[(0,i.jsx)(c.P.CategoryName,{href:"/".concat(d),children:p}),(0,i.jsx)(c.P.Date,{children:(0,i.jsx)(o.e,{isoDate:n})})]}),(0,i.jsx)(c.P.Username,{href:"/".concat(x),children:m})]}),E]})]})}},21708:function(e,t,n){n.d(t,{i:function(){return r}});var i=n(27573),l=n(35449);let r=e=>{let{className:t}=e;return(0,i.jsx)("div",{className:(0,l.cn)("bg-shade-lower hidden h-0.5 grow lg:flex",t)})}},30785:function(e,t,n){n.d(t,{FetchNextPageTrigger:function(){return s}});var i=n(27573),l=n(7653),r=n(39888);let s=e=>{let{fetchNextPage:t,isFetching:n}=e,{ref:s,entry:a}=(0,r.s)(),o=!!(null==a?void 0:a.isIntersecting);return(0,l.useEffect)(()=>{o&&!n&&t()},[o,t,n]),(0,i.jsx)("div",{className:"h-5 w-1","aria-hidden":!0,ref:s})}},33375:function(e,t,n){n.d(t,{ShowMoreButton:function(){return o}});var i=n(27573),l=n(69389),r=n(7653),s=n(38467),a=n(21708);let o=()=>{let e=(0,l.useTranslations)("MediaCard"),[t,n]=(0,r.useState)(!1),o=(0,r.useRef)(null);return t?(0,i.jsx)("div",{className:"pt-4",children:(0,i.jsx)(a.i,{})}):(0,i.jsxs)("div",{ref:o,className:"hidden items-center lg:flex",children:[(0,i.jsx)(a.i,{}),!t&&(0,i.jsx)("div",{className:"px-3",children:(0,i.jsx)(s.zx,{size:"xs",onClick:()=>{var e;let t=null===(e=o.current)||void 0===e?void 0:e.previousElementSibling;t&&t.hasAttribute("data-show-more")&&(n(!0),t.style.gridTemplateRows="repeat(2, minmax(0, 1fr))",t.style.rowGap="24px")},variant:"text-secondary",children:e("show_more")})}),(0,i.jsx)(a.i,{})]})};o.displayName="MediaGrid.ShowMoreButton"},34858:function(e,t,n){n.d(t,{M:function(){return l},x:function(){return i}});let i="openClipDialog",l=e=>{let t=new CustomEvent(i,{detail:e});window.dispatchEvent(t)}},51354:function(e,t,n){n.d(t,{E:function(){return i},_:function(){return l}});let i="openConfirmModal",l=e=>{let t=new CustomEvent(i,{detail:e});window.dispatchEvent(t)}},73024:function(e,t,n){n.d(t,{$:function(){return l},L:function(){return i}});let i="openReportModal",l=e=>{let t=new CustomEvent(i,{detail:e});window.dispatchEvent(t)}},73941:function(e,t,n){n.d(t,{s:function(){return i}});let i=(e,t,n)=>e.filter(e=>!n.includes(t(e)))}}]);