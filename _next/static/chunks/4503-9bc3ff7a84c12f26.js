"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4503],{57819:function(e,t,n){n.d(t,{u:function(){return r}});function r(e,[t,n]){return Math.min(n,Math.max(t,e))}},84503:function(e,t,n){n.d(t,{$G:function(){return eW},B4:function(){return ex},JO:function(){return eC},VY:function(){return ek},Z0:function(){return eL},ZA:function(){return eM},__:function(){return eR},ck:function(){return eP},eT:function(){return eI},fC:function(){return eS},h_:function(){return e_},l_:function(){return eT},u_:function(){return eV},wU:function(){return eD},xz:function(){return eE}});var r=n(57926),l=n(7653),o=n(3458),a=n(57819),i=n(2467),c=n(52542),u=n(18497),d=n(20379),s=n(17113),p=n(22089),f=n(48086),v=n(30581),m=n(52608),h=n(76191),g=n(38826),w=n(76646),b=n(92721),y=n(63465),S=n(65192),E=n(32316),x=n(77214),C=n(41937),_=n(11825),k=n(63907);let T=[" ","Enter","ArrowUp","ArrowDown"],M=[" ","Enter"],R="Select",[P,I,D]=(0,c.B)(R),[V,W]=(0,d.b)(R,[D,h.D7]),L=(0,h.D7)(),[O,Z]=V(R),[H,A]=V(R),B=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:n,disabled:o=!1,...a}=e,c=L(n),d=Z("SelectTrigger",n),s=d.disabled||o,p=(0,u.e)(t,d.onTriggerChange),f=I(n),[v,m,g]=eb(e=>{let t=f().filter(e=>!e.disabled),n=t.find(e=>e.value===d.value),r=ey(t,e,n);void 0!==r&&d.onValueChange(r.value)}),b=()=>{s||(d.onOpenChange(!0),g())};return(0,l.createElement)(h.ee,(0,r.Z)({asChild:!0},c),(0,l.createElement)(w.WV.button,(0,r.Z)({type:"button",role:"combobox","aria-controls":d.contentId,"aria-expanded":d.open,"aria-required":d.required,"aria-autocomplete":"none",dir:d.dir,"data-state":d.open?"open":"closed",disabled:s,"data-disabled":s?"":void 0,"data-placeholder":eg(d.value)?"":void 0},a,{ref:p,onClick:(0,i.M)(a.onClick,e=>{e.currentTarget.focus()}),onPointerDown:(0,i.M)(a.onPointerDown,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),0===e.button&&!1===e.ctrlKey&&(b(),d.triggerPointerDownPosRef.current={x:Math.round(e.pageX),y:Math.round(e.pageY)},e.preventDefault())}),onKeyDown:(0,i.M)(a.onKeyDown,e=>{let t=""!==v.current;e.ctrlKey||e.altKey||e.metaKey||1!==e.key.length||m(e.key),(!t||" "!==e.key)&&T.includes(e.key)&&(b(),e.preventDefault())})})))}),N=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:n,className:o,style:a,children:i,placeholder:c="",...d}=e,s=Z("SelectValue",n),{onValueNodeHasChildrenChange:p}=s,f=void 0!==i,v=(0,u.e)(t,s.onValueNodeChange);return(0,E.b)(()=>{p(f)},[p,f]),(0,l.createElement)(w.WV.span,(0,r.Z)({},d,{ref:v,style:{pointerEvents:"none"}}),eg(s.value)?(0,l.createElement)(l.Fragment,null,c):i)}),K=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:n,children:o,...a}=e;return(0,l.createElement)(w.WV.span,(0,r.Z)({"aria-hidden":!0},a,{ref:t}),o||"▼")}),F="SelectContent",U=(0,l.forwardRef)((e,t)=>{let n=Z(F,e.__scopeSelect),[a,i]=(0,l.useState)();return((0,E.b)(()=>{i(new DocumentFragment)},[]),n.open)?(0,l.createElement)(Y,(0,r.Z)({},e,{ref:t})):a?(0,o.createPortal)((0,l.createElement)(z,{scope:e.__scopeSelect},(0,l.createElement)(P.Slot,{scope:e.__scopeSelect},(0,l.createElement)("div",null,e.children))),a):null}),[z,q]=V(F),Y=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:n,position:o="item-aligned",onCloseAutoFocus:a,onEscapeKeyDown:c,onPointerDownOutside:d,side:s,sideOffset:m,align:h,alignOffset:g,arrowPadding:w,collisionBoundary:y,collisionPadding:S,sticky:E,hideWhenDetached:x,avoidCollisions:C,...T}=e,M=Z(F,n),[R,P]=(0,l.useState)(null),[D,V]=(0,l.useState)(null),W=(0,u.e)(t,e=>P(e)),[L,O]=(0,l.useState)(null),[H,A]=(0,l.useState)(null),B=I(n),[N,K]=(0,l.useState)(!1),U=(0,l.useRef)(!1);(0,l.useEffect)(()=>{if(R)return(0,_.Ry)(R)},[R]),(0,f.EW)();let q=(0,l.useCallback)(e=>{let[t,...n]=B().map(e=>e.ref.current),[r]=n.slice(-1),l=document.activeElement;for(let n of e)if(n===l||(null==n||n.scrollIntoView({block:"nearest"}),n===t&&D&&(D.scrollTop=0),n===r&&D&&(D.scrollTop=D.scrollHeight),null==n||n.focus(),document.activeElement!==l))return},[B,D]),Y=(0,l.useCallback)(()=>q([L,R]),[q,L,R]);(0,l.useEffect)(()=>{N&&Y()},[N,Y]);let{onOpenChange:G,triggerPointerDownPosRef:J}=M;(0,l.useEffect)(()=>{if(R){let e={x:0,y:0},t=t=>{var n,r,l,o;e={x:Math.abs(Math.round(t.pageX)-(null!==(n=null===(r=J.current)||void 0===r?void 0:r.x)&&void 0!==n?n:0)),y:Math.abs(Math.round(t.pageY)-(null!==(l=null===(o=J.current)||void 0===o?void 0:o.y)&&void 0!==l?l:0))}},n=n=>{e.x<=10&&e.y<=10?n.preventDefault():R.contains(n.target)||G(!1),document.removeEventListener("pointermove",t),J.current=null};return null!==J.current&&(document.addEventListener("pointermove",t),document.addEventListener("pointerup",n,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",t),document.removeEventListener("pointerup",n,{capture:!0})}}},[R,G,J]),(0,l.useEffect)(()=>{let e=()=>G(!1);return window.addEventListener("blur",e),window.addEventListener("resize",e),()=>{window.removeEventListener("blur",e),window.removeEventListener("resize",e)}},[G]);let[$,Q]=eb(e=>{let t=B().filter(e=>!e.disabled),n=t.find(e=>e.ref.current===document.activeElement),r=ey(t,e,n);r&&setTimeout(()=>r.ref.current.focus())}),ee=(0,l.useCallback)((e,t,n)=>{let r=!U.current&&!n;(void 0!==M.value&&M.value===t||r)&&(O(e),r&&(U.current=!0))},[M.value]),et=(0,l.useCallback)(()=>null==R?void 0:R.focus(),[R]),en=(0,l.useCallback)((e,t,n)=>{let r=!U.current&&!n;(void 0!==M.value&&M.value===t||r)&&A(e)},[M.value]),er="popper"===o?X:j;return(0,l.createElement)(z,{scope:n,content:R,viewport:D,onViewportChange:V,itemRefCallback:ee,selectedItem:L,onItemLeave:et,itemTextRefCallback:en,focusSelectedItem:Y,selectedItemText:H,position:o,isPositioned:N,searchRef:$},(0,l.createElement)(k.Z,{as:b.g7,allowPinchZoom:!0},(0,l.createElement)(v.M,{asChild:!0,trapped:M.open,onMountAutoFocus:e=>{e.preventDefault()},onUnmountAutoFocus:(0,i.M)(a,e=>{var t;null===(t=M.trigger)||void 0===t||t.focus({preventScroll:!0}),e.preventDefault()})},(0,l.createElement)(p.XB,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:e=>e.preventDefault(),onDismiss:()=>M.onOpenChange(!1)},(0,l.createElement)(er,(0,r.Z)({role:"listbox",id:M.contentId,"data-state":M.open?"open":"closed",dir:M.dir,onContextMenu:e=>e.preventDefault()},T,er===X?{side:s,sideOffset:m,align:h,alignOffset:g,arrowPadding:w,collisionBoundary:y,collisionPadding:S,sticky:E,hideWhenDetached:x,avoidCollisions:C}:{},{onPlaced:()=>K(!0),ref:W,style:{display:"flex",flexDirection:"column",outline:"none",...T.style},onKeyDown:(0,i.M)(T.onKeyDown,e=>{let t=e.ctrlKey||e.altKey||e.metaKey;if("Tab"===e.key&&e.preventDefault(),t||1!==e.key.length||Q(e.key),["ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=B().filter(e=>!e.disabled).map(e=>e.ref.current);if(["ArrowUp","End"].includes(e.key)&&(t=t.slice().reverse()),["ArrowUp","ArrowDown"].includes(e.key)){let n=e.target,r=t.indexOf(n);t=t.slice(r+1)}setTimeout(()=>q(t)),e.preventDefault()}})}))))))}),j=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:n,onPlaced:o,...i}=e,c=Z(F,n),d=q(F,n),[s,p]=(0,l.useState)(null),[f,v]=(0,l.useState)(null),m=(0,u.e)(t,e=>v(e)),h=I(n),g=(0,l.useRef)(!1),b=(0,l.useRef)(!0),{viewport:y,selectedItem:S,selectedItemText:x,focusSelectedItem:C}=d,_=(0,l.useCallback)(()=>{if(c.trigger&&c.valueNode&&s&&f&&y&&S&&x){let e=c.trigger.getBoundingClientRect(),t=f.getBoundingClientRect(),n=c.valueNode.getBoundingClientRect(),r=x.getBoundingClientRect();if("rtl"!==c.dir){let l=r.left-t.left,o=n.left-l,i=e.left-o,c=e.width+i,u=Math.max(c,t.width),d=window.innerWidth-10,p=(0,a.u)(o,[10,d-u]);s.style.minWidth=c+"px",s.style.left=p+"px"}else{let l=t.right-r.right,o=window.innerWidth-n.right-l,i=window.innerWidth-e.right-o,c=e.width+i,u=Math.max(c,t.width),d=window.innerWidth-10,p=(0,a.u)(o,[10,d-u]);s.style.minWidth=c+"px",s.style.right=p+"px"}let l=h(),i=window.innerHeight-20,u=y.scrollHeight,d=window.getComputedStyle(f),p=parseInt(d.borderTopWidth,10),v=parseInt(d.paddingTop,10),m=parseInt(d.borderBottomWidth,10),w=p+v+u+parseInt(d.paddingBottom,10)+m,b=Math.min(5*S.offsetHeight,w),E=window.getComputedStyle(y),C=parseInt(E.paddingTop,10),_=parseInt(E.paddingBottom,10),k=e.top+e.height/2-10,T=S.offsetHeight/2,M=p+v+(S.offsetTop+T);if(M<=k){let e=S===l[l.length-1].ref.current;s.style.bottom="0px";let t=f.clientHeight-y.offsetTop-y.offsetHeight;s.style.height=M+Math.max(i-k,T+(e?_:0)+t+m)+"px"}else{let e=S===l[0].ref.current;s.style.top="0px";let t=Math.max(k,p+y.offsetTop+(e?C:0)+T);s.style.height=t+(w-M)+"px",y.scrollTop=M-k+y.offsetTop}s.style.margin="10px 0",s.style.minHeight=b+"px",s.style.maxHeight=i+"px",null==o||o(),requestAnimationFrame(()=>g.current=!0)}},[h,c.trigger,c.valueNode,s,f,y,S,x,c.dir,o]);(0,E.b)(()=>_(),[_]);let[k,T]=(0,l.useState)();(0,E.b)(()=>{f&&T(window.getComputedStyle(f).zIndex)},[f]);let M=(0,l.useCallback)(e=>{e&&!0===b.current&&(_(),null==C||C(),b.current=!1)},[_,C]);return(0,l.createElement)(G,{scope:n,contentWrapper:s,shouldExpandOnScrollRef:g,onScrollButtonChange:M},(0,l.createElement)("div",{ref:p,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:k}},(0,l.createElement)(w.WV.div,(0,r.Z)({},i,{ref:m,style:{boxSizing:"border-box",maxHeight:"100%",...i.style}}))))}),X=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:n,align:o="start",collisionPadding:a=10,...i}=e,c=L(n);return(0,l.createElement)(h.VY,(0,r.Z)({},c,i,{ref:t,align:o,collisionPadding:a,style:{boxSizing:"border-box",...i.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}}))}),[G,J]=V(F,{}),$="SelectViewport",Q=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:n,...o}=e,a=q($,n),c=J($,n),d=(0,u.e)(t,a.onViewportChange),s=(0,l.useRef)(0);return(0,l.createElement)(l.Fragment,null,(0,l.createElement)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"}}),(0,l.createElement)(P.Slot,{scope:n},(0,l.createElement)(w.WV.div,(0,r.Z)({"data-radix-select-viewport":"",role:"presentation"},o,{ref:d,style:{position:"relative",flex:1,overflow:"auto",...o.style},onScroll:(0,i.M)(o.onScroll,e=>{let t=e.currentTarget,{contentWrapper:n,shouldExpandOnScrollRef:r}=c;if(null!=r&&r.current&&n){let e=Math.abs(s.current-t.scrollTop);if(e>0){let r=window.innerHeight-20,l=Math.max(parseFloat(n.style.minHeight),parseFloat(n.style.height));if(l<r){let o=l+e,a=Math.min(r,o),i=o-a;n.style.height=a+"px","0px"===n.style.bottom&&(t.scrollTop=i>0?i:0,n.style.justifyContent="flex-end")}}}s.current=t.scrollTop})}))))}),[ee,et]=V("SelectGroup"),en=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:n,...o}=e,a=(0,m.M)();return(0,l.createElement)(ee,{scope:n,id:a},(0,l.createElement)(w.WV.div,(0,r.Z)({role:"group","aria-labelledby":a},o,{ref:t})))}),er=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:n,...o}=e,a=et("SelectLabel",n);return(0,l.createElement)(w.WV.div,(0,r.Z)({id:a.id},o,{ref:t}))}),el="SelectItem",[eo,ea]=V(el),ei=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:n,value:o,disabled:a=!1,textValue:c,...d}=e,s=Z(el,n),p=q(el,n),f=s.value===o,[v,h]=(0,l.useState)(null!=c?c:""),[g,b]=(0,l.useState)(!1),y=(0,u.e)(t,e=>{var t;return null===(t=p.itemRefCallback)||void 0===t?void 0:t.call(p,e,o,a)}),S=(0,m.M)(),E=()=>{a||(s.onValueChange(o),s.onOpenChange(!1))};if(""===o)throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return(0,l.createElement)(eo,{scope:n,value:o,disabled:a,textId:S,isSelected:f,onItemTextChange:(0,l.useCallback)(e=>{h(t=>{var n;return t||(null!==(n=null==e?void 0:e.textContent)&&void 0!==n?n:"").trim()})},[])},(0,l.createElement)(P.ItemSlot,{scope:n,value:o,disabled:a,textValue:v},(0,l.createElement)(w.WV.div,(0,r.Z)({role:"option","aria-labelledby":S,"data-highlighted":g?"":void 0,"aria-selected":f&&g,"data-state":f?"checked":"unchecked","aria-disabled":a||void 0,"data-disabled":a?"":void 0,tabIndex:a?void 0:-1},d,{ref:y,onFocus:(0,i.M)(d.onFocus,()=>b(!0)),onBlur:(0,i.M)(d.onBlur,()=>b(!1)),onPointerUp:(0,i.M)(d.onPointerUp,E),onPointerMove:(0,i.M)(d.onPointerMove,e=>{if(a){var t;null===(t=p.onItemLeave)||void 0===t||t.call(p)}else e.currentTarget.focus({preventScroll:!0})}),onPointerLeave:(0,i.M)(d.onPointerLeave,e=>{if(e.currentTarget===document.activeElement){var t;null===(t=p.onItemLeave)||void 0===t||t.call(p)}}),onKeyDown:(0,i.M)(d.onKeyDown,e=>{var t;(null===(t=p.searchRef)||void 0===t?void 0:t.current)!==""&&" "===e.key||(M.includes(e.key)&&E()," "===e.key&&e.preventDefault())})}))))}),ec="SelectItemText",eu=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:n,className:a,style:i,...c}=e,d=Z(ec,n),s=q(ec,n),p=ea(ec,n),f=A(ec,n),[v,m]=(0,l.useState)(null),h=(0,u.e)(t,e=>m(e),p.onItemTextChange,e=>{var t;return null===(t=s.itemTextRefCallback)||void 0===t?void 0:t.call(s,e,p.value,p.disabled)}),g=null==v?void 0:v.textContent,b=(0,l.useMemo)(()=>(0,l.createElement)("option",{key:p.value,value:p.value,disabled:p.disabled},g),[p.disabled,p.value,g]),{onNativeOptionAdd:y,onNativeOptionRemove:S}=f;return(0,E.b)(()=>(y(b),()=>S(b)),[y,S,b]),(0,l.createElement)(l.Fragment,null,(0,l.createElement)(w.WV.span,(0,r.Z)({id:p.textId},c,{ref:h})),p.isSelected&&d.valueNode&&!d.valueNodeHasChildren?(0,o.createPortal)(c.children,d.valueNode):null)}),ed=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:n,...o}=e;return ea("SelectItemIndicator",n).isSelected?(0,l.createElement)(w.WV.span,(0,r.Z)({"aria-hidden":!0},o,{ref:t})):null}),es="SelectScrollUpButton",ep=(0,l.forwardRef)((e,t)=>{let n=q(es,e.__scopeSelect),o=J(es,e.__scopeSelect),[a,i]=(0,l.useState)(!1),c=(0,u.e)(t,o.onScrollButtonChange);return(0,E.b)(()=>{if(n.viewport&&n.isPositioned){let t=n.viewport;function e(){i(t.scrollTop>0)}return e(),t.addEventListener("scroll",e),()=>t.removeEventListener("scroll",e)}},[n.viewport,n.isPositioned]),a?(0,l.createElement)(em,(0,r.Z)({},e,{ref:c,onAutoScroll:()=>{let{viewport:e,selectedItem:t}=n;e&&t&&(e.scrollTop=e.scrollTop-t.offsetHeight)}})):null}),ef="SelectScrollDownButton",ev=(0,l.forwardRef)((e,t)=>{let n=q(ef,e.__scopeSelect),o=J(ef,e.__scopeSelect),[a,i]=(0,l.useState)(!1),c=(0,u.e)(t,o.onScrollButtonChange);return(0,E.b)(()=>{if(n.viewport&&n.isPositioned){let t=n.viewport;function e(){let e=t.scrollHeight-t.clientHeight;i(Math.ceil(t.scrollTop)<e)}return e(),t.addEventListener("scroll",e),()=>t.removeEventListener("scroll",e)}},[n.viewport,n.isPositioned]),a?(0,l.createElement)(em,(0,r.Z)({},e,{ref:c,onAutoScroll:()=>{let{viewport:e,selectedItem:t}=n;e&&t&&(e.scrollTop=e.scrollTop+t.offsetHeight)}})):null}),em=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:n,onAutoScroll:o,...a}=e,c=q("SelectScrollButton",n),u=(0,l.useRef)(null),d=I(n),s=(0,l.useCallback)(()=>{null!==u.current&&(window.clearInterval(u.current),u.current=null)},[]);return(0,l.useEffect)(()=>()=>s(),[s]),(0,E.b)(()=>{var e;let t=d().find(e=>e.ref.current===document.activeElement);null==t||null===(e=t.ref.current)||void 0===e||e.scrollIntoView({block:"nearest"})},[d]),(0,l.createElement)(w.WV.div,(0,r.Z)({"aria-hidden":!0},a,{ref:t,style:{flexShrink:0,...a.style},onPointerDown:(0,i.M)(a.onPointerDown,()=>{null===u.current&&(u.current=window.setInterval(o,50))}),onPointerMove:(0,i.M)(a.onPointerMove,()=>{var e;null===(e=c.onItemLeave)||void 0===e||e.call(c),null===u.current&&(u.current=window.setInterval(o,50))}),onPointerLeave:(0,i.M)(a.onPointerLeave,()=>{s()})}))}),eh=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:n,...o}=e;return(0,l.createElement)(w.WV.div,(0,r.Z)({"aria-hidden":!0},o,{ref:t}))});function eg(e){return""===e||void 0===e}let ew=(0,l.forwardRef)((e,t)=>{let{value:n,...o}=e,a=(0,l.useRef)(null),i=(0,u.e)(t,a),c=(0,x.D)(n);return(0,l.useEffect)(()=>{let e=a.current,t=Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype,"value").set;if(c!==n&&t){let r=new Event("change",{bubbles:!0});t.call(e,n),e.dispatchEvent(r)}},[c,n]),(0,l.createElement)(C.T,{asChild:!0},(0,l.createElement)("select",(0,r.Z)({},o,{ref:i,defaultValue:n})))});function eb(e){let t=(0,y.W)(e),n=(0,l.useRef)(""),r=(0,l.useRef)(0),o=(0,l.useCallback)(e=>{let l=n.current+e;t(l),function e(t){n.current=t,window.clearTimeout(r.current),""!==t&&(r.current=window.setTimeout(()=>e(""),1e3))}(l)},[t]),a=(0,l.useCallback)(()=>{n.current="",window.clearTimeout(r.current)},[]);return(0,l.useEffect)(()=>()=>window.clearTimeout(r.current),[]),[n,o,a]}function ey(e,t,n){var r;let l=t.length>1&&Array.from(t).every(e=>e===t[0])?t[0]:t,o=(r=Math.max(n?e.indexOf(n):-1,0),e.map((t,n)=>e[(r+n)%e.length]));1===l.length&&(o=o.filter(e=>e!==n));let a=o.find(e=>e.textValue.toLowerCase().startsWith(l.toLowerCase()));return a!==n?a:void 0}ew.displayName="BubbleSelect";let eS=e=>{let{__scopeSelect:t,children:n,open:r,defaultOpen:o,onOpenChange:a,value:i,defaultValue:c,onValueChange:u,dir:d,name:p,autoComplete:f,disabled:v,required:g}=e,w=L(t),[b,y]=(0,l.useState)(null),[E,x]=(0,l.useState)(null),[C,_]=(0,l.useState)(!1),k=(0,s.gm)(d),[T=!1,M]=(0,S.T)({prop:r,defaultProp:o,onChange:a}),[R,I]=(0,S.T)({prop:i,defaultProp:c,onChange:u}),D=(0,l.useRef)(null),V=!b||!!b.closest("form"),[W,Z]=(0,l.useState)(new Set),A=Array.from(W).map(e=>e.props.value).join(";");return(0,l.createElement)(h.fC,w,(0,l.createElement)(O,{required:g,scope:t,trigger:b,onTriggerChange:y,valueNode:E,onValueNodeChange:x,valueNodeHasChildren:C,onValueNodeHasChildrenChange:_,contentId:(0,m.M)(),value:R,onValueChange:I,open:T,onOpenChange:M,dir:k,triggerPointerDownPosRef:D,disabled:v},(0,l.createElement)(P.Provider,{scope:t},(0,l.createElement)(H,{scope:e.__scopeSelect,onNativeOptionAdd:(0,l.useCallback)(e=>{Z(t=>new Set(t).add(e))},[]),onNativeOptionRemove:(0,l.useCallback)(e=>{Z(t=>{let n=new Set(t);return n.delete(e),n})},[])},n)),V?(0,l.createElement)(ew,{key:A,"aria-hidden":!0,required:g,tabIndex:-1,name:p,autoComplete:f,value:R,onChange:e=>I(e.target.value),disabled:v},void 0===R?(0,l.createElement)("option",{value:""}):null,Array.from(W)):null))},eE=B,ex=N,eC=K,e_=e=>(0,l.createElement)(g.h,(0,r.Z)({asChild:!0},e)),ek=U,eT=Q,eM=en,eR=er,eP=ei,eI=eu,eD=ed,eV=ep,eW=ev,eL=eh},41937:function(e,t,n){n.d(t,{T:function(){return a},f:function(){return i}});var r=n(57926),l=n(7653),o=n(76646);let a=(0,l.forwardRef)((e,t)=>(0,l.createElement)(o.WV.span,(0,r.Z)({},e,{ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}))),i=a}}]);