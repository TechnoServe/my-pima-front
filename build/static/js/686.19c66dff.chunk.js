"use strict";(self.webpackChunkmypima_front=self.webpackChunkmypima_front||[]).push([[686],{686:(e,a,t)=>{t.r(a),t.d(a,{default:()=>A});var n=t(65043),o=t(15603),r=t(70459),s=t(88250),l=t(75748),i=t(87734),d=t(52185),c=t(6026),u=t(86150),m=t(21327),h=t(90168),p=t(2127),v=t(11238),f=t(73216),x=t(94496),g=t(32393),j=t(70579);const y=r.J1`
  query GetAAs($project_id: String!) {
    getPerformanceByAA(project_id: $project_id) {
      message
      status
      data {
        id
        name
        monthlyCounts {
          date
          trainingCount
          dpoCount
        }
      }
    }
  }
`,A=()=>{var e;const{activeProject:a}=(0,f.KC)(),{loading:t,error:r,data:A}=(0,s.I)(y,{variables:{project_id:a}}),[C,P]=(0,n.useState)(null),[b,_]=(0,n.useState)("auto"),k=(0,n.useRef)(null);(0,n.useEffect)((()=>{var e;if(k.current&&(null===A||void 0===A||null===(e=A.getPerformanceByAA)||void 0===e?void 0:e.data.length)>0){const e=Math.max(...(A.getPerformanceByAA.data||[]).map((e=>8*e.name.length)));_(`${e}px`)}}),[A]);return t?(0,j.jsx)(g.A,{}):r?(0,j.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:(0,j.jsx)(x.A,{color:"error",children:"Error loading data"})}):(0,j.jsxs)("div",{className:"aa-list-container",children:[(0,j.jsx)("h1",{className:"title",children:"Agronomy Advisor Performance"}),(0,j.jsxs)("div",{className:"select-export-container",children:[(0,j.jsx)(o.Ay,{className:"select",options:null===A||void 0===A||null===(e=A.getPerformanceByAA)||void 0===e?void 0:e.data.map((e=>({label:e.name,value:e.id}))),onChange:e=>{var a;const t=null===A||void 0===A||null===(a=A.getPerformanceByAA)||void 0===a?void 0:a.data.find((a=>a.id===e.value));P(t)},placeholder:"Select an Agronomy Advisor...",value:C?{label:C.name,value:C.id}:null,styles:{menuPortal:e=>({...e,zIndex:9999})},menuPortalTarget:document.body,menuPlacement:"auto",width:b,ref:k}),(0,j.jsxs)("button",{className:"export-button",onClick:()=>{var e;const a=[];null===A||void 0===A||null===(e=A.getPerformanceByAA)||void 0===e||e.data.forEach((e=>{e.monthlyCounts.forEach((t=>{a.push({Name:e.name,Date:t.date,"DPO Count":t.dpoCount,"Training Count":t.trainingCount})}))}));const t=v.Wp.json_to_sheet(a),n=v.Wp.book_new();v.Wp.book_append_sheet(n,t,"AA_Performance"),v._h(n,"AA_Performance_Data.xlsx")},children:[(0,j.jsx)(p.U01,{})," Export to Excel"]})]}),C&&(0,j.jsx)("div",{className:"graph-container",children:(0,j.jsxs)("div",{className:"graph-aa",children:[(0,j.jsxs)("h4",{className:"graph-title",children:["Performance Chart for ",C.name]}),(0,j.jsxs)(l.b,{width:600,height:300,data:C.monthlyCounts,children:[(0,j.jsx)(i.d,{strokeDasharray:"3 3"}),(0,j.jsx)(d.W,{dataKey:"date",tick:{fontSize:12}}),(0,j.jsx)(c.h,{label:{value:"Count",angle:-90,position:"insideLeft"},ticks:[0,20,40,60]}),(0,j.jsx)(u.m,{}),(0,j.jsx)(m.s,{}),(0,j.jsx)(h.N,{type:"monotone",dataKey:"trainingCount",name:"Training Observations",stroke:"#007bff"}),(0,j.jsx)(h.N,{type:"monotone",dataKey:"dpoCount",name:"Demo Plot Observations",stroke:"#28a745"})]})]})})]})}}}]);
//# sourceMappingURL=686.19c66dff.chunk.js.map