"use strict";(self.webpackChunkmypima_front=self.webpackChunkmypima_front||[]).push([[185],{89185:function(t,r,e){e.r(r);var n=e(29439),a=e(72791),o=e(13239),i=e(4567),s=e(80184);r.default=function(t){var r=t.loadings,e=r.load1,l=r.load2,c=r.load3,p=r.load4,u=r.load5,h=(0,a.useState)(0),v=(0,n.Z)(h,2),d=v[0],f=v[1];return(0,a.useEffect)((function(){e&&l&&c&&p&&u||f((function(t){return t<100?t+20:100}))}),[e,l,c,p,u]),(0,s.jsxs)("div",{style:{position:"relative",display:"inline-block"},children:[(0,s.jsx)(o.Z,{variant:"determinate",value:d,sx:{strokeLinecap:"round",position:"relative"},size:100,thickness:5,style:{color:["#1F2272","#1C1E62","#3A3D89","#4998CC","#4B8C68","#0E0E0E","#18472D","#023938","#404948","#7A8786"][Math.min(Math.floor(d/10),9)]}}),(0,s.jsx)("div",{style:{position:"absolute",top:"-15px",left:"-15px",width:"calc(100% + 30px)",height:"calc(100% + 20px)",borderRadius:"50%",border:"2px dashed rgba(0, 0, 0, 0.2)",boxSizing:"border-box"}}),(0,s.jsxs)(i.Z,{variant:"h6",sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:[d,"%"]})]})}},13239:function(t,r,e){e.d(r,{Z:function(){return T}});var n=e(1413),a=e(45987),o=e(29439),i=e(93433),s=e(30168),l=e(72791),c=e(59278),p=e(98314),u=e(52554),h=e(66934),v=e(35141),d=e(61020),f=e(99718),g=e(12036),m=e(68137),y=e(26246);function Z(t){return(0,y.ZP)("MuiCircularProgress",t)}(0,m.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var x,b,k,S,w=e(80184),M=["className","color","disableShrink","size","style","thickness","value","variant"],C=44,P=(0,u.F4)(x||(x=(0,s.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"]))),j=(0,u.F4)(b||(b=(0,s.Z)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"]))),B="string"!==typeof P?(0,u.iv)(k||(k=(0,s.Z)(["\n        animation: "," 1.4s linear infinite;\n      "])),P):null,D="string"!==typeof j?(0,u.iv)(S||(S=(0,s.Z)(["\n        animation: "," 1.4s ease-in-out infinite;\n      "])),j):null,R=(0,h.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:function(t,r){var e=t.ownerState;return[r.root,r[e.variant],r["color".concat((0,f.Z)(e.color))]]}})((0,v.Z)((function(t){var r=t.theme;return{display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:r.transitions.create("transform")}},{props:{variant:"indeterminate"},style:B||{animation:"".concat(P," 1.4s linear infinite")}}].concat((0,i.Z)(Object.entries(r.palette).filter((0,g.Z)()).map((function(t){var e=(0,o.Z)(t,1)[0];return{props:{color:e},style:{color:(r.vars||r).palette[e].main}}}))))}}))),W=(0,h.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:function(t,r){return r.svg}})({display:"block"}),N=(0,h.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:function(t,r){var e=t.ownerState;return[r.circle,r["circle".concat((0,f.Z)(e.variant))],e.disableShrink&&r.circleDisableShrink]}})((0,v.Z)((function(t){return{stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:t.theme.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:function(t){var r=t.ownerState;return"indeterminate"===r.variant&&!r.disableShrink},style:D||{animation:"".concat(j," 1.4s ease-in-out infinite")}}]}}))),T=l.forwardRef((function(t,r){var e=(0,d.i)({props:t,name:"MuiCircularProgress"}),o=e.className,i=e.color,s=void 0===i?"primary":i,l=e.disableShrink,u=void 0!==l&&l,h=e.size,v=void 0===h?40:h,g=e.style,m=e.thickness,y=void 0===m?3.6:m,x=e.value,b=void 0===x?0:x,k=e.variant,S=void 0===k?"indeterminate":k,P=(0,a.Z)(e,M),j=(0,n.Z)((0,n.Z)({},e),{},{color:s,disableShrink:u,size:v,thickness:y,value:b,variant:S}),B=function(t){var r=t.classes,e=t.variant,n=t.color,a=t.disableShrink,o={root:["root",e,"color".concat((0,f.Z)(n))],svg:["svg"],circle:["circle","circle".concat((0,f.Z)(e)),a&&"circleDisableShrink"]};return(0,p.Z)(o,Z,r)}(j),D={},T={},z={};if("determinate"===S){var A=2*Math.PI*((C-y)/2);D.strokeDasharray=A.toFixed(3),z["aria-valuenow"]=Math.round(b),D.strokeDashoffset="".concat(((100-b)/100*A).toFixed(3),"px"),T.transform="rotate(-90deg)"}return(0,w.jsx)(R,(0,n.Z)((0,n.Z)((0,n.Z)({className:(0,c.Z)(B.root,o),style:(0,n.Z)((0,n.Z)({width:v,height:v},T),g),ownerState:j,ref:r,role:"progressbar"},z),P),{},{children:(0,w.jsx)(W,{className:B.svg,ownerState:j,viewBox:"".concat(22," ").concat(22," ").concat(C," ").concat(C),children:(0,w.jsx)(N,{className:B.circle,style:D,ownerState:j,cx:C,cy:C,r:(C-y)/2,fill:"none",strokeWidth:y})})}))}))},4567:function(t,r,e){var n=e(1413),a=e(45987),o=e(29439),i=e(93433),s=e(72791),l=e(59278),c=e(98314),p=e(98942),u=e(66934),h=e(35141),v=e(61020),d=e(99718),f=e(12036),g=e(40940),m=e(80184),y=["color"],Z=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],x={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},b=(0,p.u7)(),k=(0,u.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(t,r){var e=t.ownerState;return[r.root,e.variant&&r[e.variant],"inherit"!==e.align&&r["align".concat((0,d.Z)(e.align))],e.noWrap&&r.noWrap,e.gutterBottom&&r.gutterBottom,e.paragraph&&r.paragraph]}})((0,h.Z)((function(t){var r,e=t.theme;return{margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}}].concat((0,i.Z)(Object.entries(e.typography).filter((function(t){var r=(0,o.Z)(t,2),e=r[0],n=r[1];return"inherit"!==e&&n&&"object"===typeof n})).map((function(t){var r=(0,o.Z)(t,2);return{props:{variant:r[0]},style:r[1]}}))),(0,i.Z)(Object.entries(e.palette).filter((0,f.Z)()).map((function(t){var r=(0,o.Z)(t,1)[0];return{props:{color:r},style:{color:(e.vars||e).palette[r].main}}}))),(0,i.Z)(Object.entries((null===(r=e.palette)||void 0===r?void 0:r.text)||{}).filter((function(t){return"string"===typeof(0,o.Z)(t,2)[1]})).map((function(t){var r=(0,o.Z)(t,1)[0];return{props:{color:"text".concat((0,d.Z)(r))},style:{color:(e.vars||e).palette.text[r]}}}))),[{props:function(t){return"inherit"!==t.ownerState.align},style:{textAlign:"var(--Typography-textAlign)"}},{props:function(t){return t.ownerState.noWrap},style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:function(t){return t.ownerState.gutterBottom},style:{marginBottom:"0.35em"}},{props:function(t){return t.ownerState.paragraph},style:{marginBottom:16}}])}}))),S={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},w=s.forwardRef((function(t,r){var e=(0,v.i)({props:t,name:"MuiTypography"}),o=e.color,i=(0,a.Z)(e,y),s=!x[o],p=b((0,n.Z)((0,n.Z)({},i),s&&{color:o})),u=p.align,h=void 0===u?"inherit":u,f=p.className,w=p.component,M=p.gutterBottom,C=void 0!==M&&M,P=p.noWrap,j=void 0!==P&&P,B=p.paragraph,D=void 0!==B&&B,R=p.variant,W=void 0===R?"body1":R,N=p.variantMapping,T=void 0===N?S:N,z=(0,a.Z)(p,Z),A=(0,n.Z)((0,n.Z)({},p),{},{align:h,color:o,className:f,component:w,gutterBottom:C,noWrap:j,paragraph:D,variant:W,variantMapping:T}),E=w||(D?"p":T[W]||S[W])||"span",F=function(t){var r=t.align,e=t.gutterBottom,n=t.noWrap,a=t.paragraph,o=t.variant,i=t.classes,s={root:["root",o,"inherit"!==t.align&&"align".concat((0,d.Z)(r)),e&&"gutterBottom",n&&"noWrap",a&&"paragraph"]};return(0,c.Z)(s,g.f,i)}(A);return(0,m.jsx)(k,(0,n.Z)((0,n.Z)({as:E,ref:r,className:(0,l.Z)(F.root,f)},z),{},{ownerState:A,style:(0,n.Z)((0,n.Z)({},"inherit"!==h&&{"--Typography-textAlign":h}),z.style)}))}));r.Z=w},40940:function(t,r,e){e.d(r,{f:function(){return o}});var n=e(68137),a=e(26246);function o(t){return(0,a.ZP)("MuiTypography",t)}var i=(0,n.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);r.Z=i}}]);
//# sourceMappingURL=185.daf819c5.chunk.js.map