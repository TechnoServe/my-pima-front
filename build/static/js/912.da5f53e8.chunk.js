"use strict";(self.webpackChunkmypima_front=self.webpackChunkmypima_front||[]).push([[912],{93517:function(e,o,r){r.d(o,{Z:function(){return _}});var t=r(93433),a=r(29439),n=r(4942),l=r(32793),s=r(1048),c=r(72791),i=(r(78457),r(63733)),d=r(78832),p=r(20838),u=r(66934),m=r(31402),f=r(20890),h=r(54131),g=r(76189),v=r(80184),Z=(0,g.Z)((0,v.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),x=r(95897),C=["slots","slotProps"],b=(0,u.ZP)(x.Z)((function(e){var o=e.theme;return(0,l.Z)({display:"flex",marginLeft:"calc(".concat(o.spacing(1)," * 0.5)"),marginRight:"calc(".concat(o.spacing(1)," * 0.5)")},"light"===o.palette.mode?{backgroundColor:o.palette.grey[100],color:o.palette.grey[700]}:{backgroundColor:o.palette.grey[700],color:o.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,l.Z)({},"light"===o.palette.mode?{backgroundColor:o.palette.grey[200]}:{backgroundColor:o.palette.grey[600]}),"&:active":(0,l.Z)({boxShadow:o.shadows[0]},"light"===o.palette.mode?{backgroundColor:(0,h._4)(o.palette.grey[200],.12)}:{backgroundColor:(0,h._4)(o.palette.grey[600],.12)})})})),y=(0,u.ZP)(Z)({width:24,height:16});var w=function(e){var o=e.slots,r=void 0===o?{}:o,t=e.slotProps,a=void 0===t?{}:t,n=(0,s.Z)(e,C),c=e;return(0,v.jsx)("li",{children:(0,v.jsx)(b,(0,l.Z)({focusRipple:!0},n,{ownerState:c,children:(0,v.jsx)(y,(0,l.Z)({as:r.CollapsedIcon,ownerState:c},a.collapsedIcon))}))})},S=r(59703),P=r(64657);function k(e){return(0,P.ZP)("MuiBreadcrumbs",e)}var I=(0,S.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),B=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],M=(0,u.ZP)(f.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,o){return[(0,n.Z)({},"& .".concat(I.li),o.li),o.root]}})({}),R=(0,u.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,o){return o.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),j=(0,u.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,o){return o.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function N(e,o,r,t){return e.reduce((function(a,n,l){return l<e.length-1?a=a.concat(n,(0,v.jsx)(j,{"aria-hidden":!0,className:o,ownerState:t,children:r},"separator-".concat(l))):a.push(n),a}),[])}var _=c.forwardRef((function(e,o){var r=(0,m.Z)({props:e,name:"MuiBreadcrumbs"}),n=r.children,u=r.className,f=r.component,h=void 0===f?"nav":f,g=r.slots,Z=void 0===g?{}:g,x=r.slotProps,C=void 0===x?{}:x,b=r.expandText,y=void 0===b?"Show path":b,S=r.itemsAfterCollapse,P=void 0===S?1:S,I=r.itemsBeforeCollapse,j=void 0===I?1:I,_=r.maxItems,z=void 0===_?8:_,A=r.separator,T=void 0===A?"/":A,L=(0,s.Z)(r,B),q=c.useState(!1),D=(0,a.Z)(q,2),E=D[0],H=D[1],O=(0,l.Z)({},r,{component:h,expanded:E,expandText:y,itemsAfterCollapse:P,itemsBeforeCollapse:j,maxItems:z,separator:T}),V=function(e){var o=e.classes;return(0,p.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},k,o)}(O),W=(0,d.y)({elementType:Z.CollapsedIcon,externalSlotProps:C.collapsedIcon,ownerState:O}),$=c.useRef(null),F=c.Children.toArray(n).filter((function(e){return c.isValidElement(e)})).map((function(e,o){return(0,v.jsx)("li",{className:V.li,children:e},"child-".concat(o))}));return(0,v.jsx)(M,(0,l.Z)({ref:o,component:h,color:"text.secondary",className:(0,i.Z)(V.root,u),ownerState:O},L,{children:(0,v.jsx)(R,{className:V.ol,ref:$,ownerState:O,children:N(E||z&&F.length<=z?F:function(e){return j+P>=e.length?e:[].concat((0,t.Z)(e.slice(0,j)),[(0,v.jsx)(w,{"aria-label":y,slots:{CollapsedIcon:Z.CollapsedIcon},slotProps:{collapsedIcon:W},onClick:function(){H(!0);var e=$.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,t.Z)(e.slice(e.length-P,e.length)))}(F),V.separator,T,O)})}))}))},81545:function(e,o,r){r.d(o,{LD$:function(){return a}});var t=r(89983);function a(e){return(0,t.w_)({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 16 4 C 9.378906 4 4 9.378906 4 16 C 4 22.621094 9.378906 28 16 28 C 22.621094 28 28 22.621094 28 16 C 28 9.378906 22.621094 4 16 4 Z M 16 5 C 22.082031 5 27 9.917969 27 16 C 27 22.082031 22.082031 27 16 27 C 9.917969 27 5 22.082031 5 16 C 5 9.917969 9.917969 5 16 5 Z"}}]})(e)}}}]);
//# sourceMappingURL=912.da5f53e8.chunk.js.map