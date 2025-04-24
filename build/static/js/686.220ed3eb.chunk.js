"use strict";(self.webpackChunkmypima_front=self.webpackChunkmypima_front||[]).push([[686],{686:(e,a,t)=>{t.r(a),t.d(a,{default:()=>x});var n=t(65043),o=t(15603),s=t(70459),r=t(88250),l=t(75748),i=t(87734),d=t(52185),c=t(6026),m=t(86150),u=t(21327),h=t(90168),p=t(2127),g=t(11238),v=t(70579);const f=s.J1`
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
`,x=e=>{var a;let{selectedProject:t}=e;const{loading:s,error:x,data:j}=(0,r.I)(f,{variables:{project_id:t}}),[y,A]=(0,n.useState)(null),[C,P]=(0,n.useState)("auto"),b=(0,n.useRef)(null);(0,n.useEffect)((()=>{var e;if(b.current&&(null===j||void 0===j||null===(e=j.getPerformanceByAA)||void 0===e?void 0:e.data.length)>0){const e=Math.max(...(j.getPerformanceByAA.data||[]).map((e=>8*e.name.length)));P(`${e}px`)}}),[j]);return(0,v.jsxs)("div",{className:"aa-list-container",children:[(0,v.jsx)("h1",{className:"title",children:"Agronomy Advisor Performance"}),(0,v.jsxs)("div",{className:"select-export-container",children:[(0,v.jsx)(o.Ay,{className:"select",options:null===j||void 0===j||null===(a=j.getPerformanceByAA)||void 0===a?void 0:a.data.map((e=>({label:e.name,value:e.id}))),onChange:e=>{var a;const t=null===j||void 0===j||null===(a=j.getPerformanceByAA)||void 0===a?void 0:a.data.find((a=>a.id===e.value));A(t)},placeholder:"Select an Agronomy Advisor...",value:y?{label:y.name,value:y.id}:null,styles:{menuPortal:e=>({...e,zIndex:9999})},menuPortalTarget:document.body,menuPlacement:"auto",width:C,ref:b}),(0,v.jsxs)("button",{className:"export-button",onClick:()=>{var e;const a=[];null===j||void 0===j||null===(e=j.getPerformanceByAA)||void 0===e||e.data.forEach((e=>{e.monthlyCounts.forEach((t=>{a.push({Name:e.name,Date:t.date,"DPO Count":t.dpoCount,"Training Count":t.trainingCount})}))}));const t=g.Wp.json_to_sheet(a),n=g.Wp.book_new();g.Wp.book_append_sheet(n,t,"AA_Performance"),g._h(n,"AA_Performance_Data.xlsx")},children:[(0,v.jsx)(p.U01,{})," Export to Excel"]})]}),y&&(0,v.jsx)("div",{className:"graph-container",children:(0,v.jsxs)("div",{className:"graph-aa",children:[(0,v.jsxs)("h4",{className:"graph-title",children:["Performance Chart for ",y.name]}),(0,v.jsxs)(l.b,{width:600,height:300,data:y.monthlyCounts,children:[(0,v.jsx)(i.d,{strokeDasharray:"3 3"}),(0,v.jsx)(d.W,{dataKey:"date",tick:{fontSize:12}}),(0,v.jsx)(c.h,{label:{value:"Count",angle:-90,position:"insideLeft"},ticks:[0,20,40,60]}),(0,v.jsx)(m.m,{}),(0,v.jsx)(u.s,{}),(0,v.jsx)(h.N,{type:"monotone",dataKey:"trainingCount",name:"Training Observations",stroke:"#007bff"}),(0,v.jsx)(h.N,{type:"monotone",dataKey:"dpoCount",name:"Demo Plot Observations",stroke:"#28a745"})]})]})}),s&&(0,v.jsx)("p",{className:"loading-message",children:"Loading..."}),x&&(0,v.jsxs)("p",{className:"error-message",children:["Error: ",x.message]})]})}}}]);
//# sourceMappingURL=686.220ed3eb.chunk.js.map