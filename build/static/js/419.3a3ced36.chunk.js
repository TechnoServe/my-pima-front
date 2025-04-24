"use strict";(self.webpackChunkmypima_front=self.webpackChunkmypima_front||[]).push([[419],{47419:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var n=a(65043),r=a(15603),s=a(70459),o=a(88250),d=a(88420),i=a(58763),m=a(52185),c=a(6026),l=a(3831),h=(0,d.gu)({chartName:"BarChart",GraphicalChild:i.y,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:m.W},{axisType:"yAxis",AxisComp:c.h}],formatAxisMap:l.pr}),f=a(87734),y=a(86150),x=a(21327),p=a(75748),j=a(90168),g=a(11238),u=a(70579);const A=s.J1`
  query GetPerformanceByFT($projectId: String!) {
    getPerformanceByFT(project_id: $projectId) {
      message
      status
      data {
        id
        name
        monthlyPerformance {
          month
          year
          percentage
        }
        monthlyVisitedFarms {
          month
          year
          totalVisitedFarms
        }
        monthlyRating {
          month
          year
          avgScore
        }
        monthlyAttDifference {
          month
          year
          difference
          ftAttendance
          aaAttendance
        }
      }
    }
  }
`,v=e=>{var t;let{selectedProject:a}=e;const{loading:s,error:d,data:l}=(0,o.I)(A,{variables:{projectId:a}}),[v,F]=(0,n.useState)(null),[T,P]=(0,n.useState)("auto"),b=(0,n.useRef)(null);(0,n.useEffect)((()=>{var e;if(b.current&&(null===l||void 0===l||null===(e=l.getPerformanceByFT)||void 0===e?void 0:e.data.length)>0){const e=Math.max(...l.getPerformanceByFT.data.map((e=>8*e.name.length)));P(`${e}px`)}}),[l]);const N=e=>{let{month:t,year:a}=e;return`${t}/${a}`};return(0,u.jsxs)("div",{className:"ft-performance-container",children:[(0,u.jsx)("h4",{className:"page-title",children:"Select a Farmer Trainer"}),(0,u.jsx)("div",{className:"select-download-container",children:s?(0,u.jsx)("p",{className:"loading-message",children:"Loading..."}):d?(0,u.jsx)("p",{className:"error-message",children:"Error: Unable to fetch data. Refresh page, if it doesn't work please contact the PIMA team."}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r.Ay,{className:"select",options:null===l||void 0===l||null===(t=l.getPerformanceByFT)||void 0===t?void 0:t.data.map((e=>({label:e.name,value:e.id}))),onChange:e=>{var t;const a=null===l||void 0===l||null===(t=l.getPerformanceByFT)||void 0===t?void 0:t.data.find((t=>t.id===e.value));F(a)},placeholder:"Search Farmer Trainers...",value:v?{label:v.name,value:v.id}:null,styles:{menuPortal:e=>({...e,zIndex:9999})},menuPortalTarget:document.body,menuPlacement:"auto",width:T,ref:b}),(0,u.jsx)("button",{className:"download-button",onClick:()=>{if(!l||!l.getPerformanceByFT||!l.getPerformanceByFT.data)return;const e=[];l.getPerformanceByFT.data.forEach((t=>{t.monthlyPerformance.forEach(((a,n)=>{const r={Name:t.name,Month:`${a.month}/${a.year}`,"% FFGs Submitted":a.percentage||"","Total Visited Farms":"","Average Performance Grade":"","TO vs AA Attendance difference":"","FT Attendance":"","AA Attendance":""},s=t.monthlyVisitedFarms.find((e=>e.month===a.month&&e.year===a.year));s&&(r["Total Visited Farms"]=s.totalVisitedFarms);const o=t.monthlyRating.find((e=>e.month===a.month&&e.year===a.year));o&&(r["Average Performance Grade"]=o.avgScore);const d=t.monthlyAttDifference.find((e=>e.month===a.month&&e.year===a.year));d&&(r["TO vs AA Attendance difference"]=d.difference,r["FT Attendance"]=d.ftAttendance,r["AA Attendance"]=d.aaAttendance),e.push(r)}))}));const t=g.Wp.json_to_sheet(e),a=g.Wp.book_new();g.Wp.book_append_sheet(a,t,"FT_Performance"),g._h(a,"FT_Performance_Data.xlsx")},children:"Download Performance Data"})]})}),v&&(0,u.jsxs)("div",{children:[(0,u.jsxs)("h3",{className:"section-title",children:["Graphs for ",v.name]}),(0,u.jsxs)("div",{className:"graph-container",children:[(0,u.jsxs)("div",{className:"graph",children:[(0,u.jsx)("h4",{children:"% of FFGs submitted on PIMA per month"}),(0,u.jsxs)(h,{width:600,height:300,data:v.monthlyPerformance,margin:{top:5,right:30,left:20,bottom:5},children:[(0,u.jsx)(f.d,{strokeDasharray:"3 3"}),(0,u.jsx)(m.W,{dataKey:e=>{let{month:t,year:a}=e;return N({month:t,year:a})},allowDataOverflow:!1}),(0,u.jsx)(c.h,{ticks:[0,20,40,60,80,100]}),(0,u.jsx)(y.m,{}),(0,u.jsx)(x.s,{}),(0,u.jsx)(i.y,{dataKey:"percentage",name:"% FFGs Submitted",fill:"#82ca9d"})]})]}),(0,u.jsxs)("div",{className:"graph",children:[(0,u.jsx)("h4",{children:"Number of Farm Visits performed per month"}),(0,u.jsxs)(p.b,{width:600,height:300,data:v.monthlyVisitedFarms,margin:{top:5,right:30,left:20,bottom:5},children:[(0,u.jsx)(f.d,{strokeDasharray:"3 3"}),(0,u.jsx)(m.W,{dataKey:e=>{let{month:t,year:a}=e;return N({month:t,year:a})}}),(0,u.jsx)(c.h,{}),(0,u.jsx)(y.m,{}),(0,u.jsx)(x.s,{}),(0,u.jsx)(j.N,{type:"monotone",dataKey:"totalVisitedFarms",name:"Farm Visits",stroke:"#8884d8"})]})]}),(0,u.jsxs)("div",{className:"graph",children:[(0,u.jsx)("h4",{children:"FT Average Performance Grade per month"}),(0,u.jsxs)(p.b,{width:600,height:300,data:v.monthlyRating,margin:{top:5,right:30,left:20,bottom:5},children:[(0,u.jsx)(f.d,{strokeDasharray:"3 3"}),(0,u.jsx)(m.W,{dataKey:e=>{let{month:t,year:a}=e;return N({month:t,year:a})}}),(0,u.jsx)(c.h,{ticks:[0,1,2,3,4]}),(0,u.jsx)(y.m,{}),(0,u.jsx)(x.s,{}),(0,u.jsx)(j.N,{type:"monotone",dataKey:"avgScore",name:"Average Performance Grade",stroke:"#ff7300"})]})]}),(0,u.jsxs)("div",{className:"graph",children:[(0,u.jsx)("h4",{children:"FT VS AA Attendance Numbers"}),(0,u.jsxs)(p.b,{width:600,height:300,data:v.monthlyAttDifference,margin:{top:5,right:30,left:20,bottom:5},children:[(0,u.jsx)(f.d,{strokeDasharray:"3 3"}),(0,u.jsx)(m.W,{dataKey:e=>{let{month:t,year:a}=e;return N({month:t,year:a})}}),(0,u.jsx)(c.h,{ticks:[0,20,40,60]}),(0,u.jsx)(y.m,{}),(0,u.jsx)(x.s,{}),(0,u.jsx)(j.N,{type:"monotone",dataKey:"difference",name:"TO vs AA Attendance difference",stroke:"#ff0000"}),(0,u.jsx)(j.N,{type:"monotone",dataKey:"ftAttendance",name:"FT Attendance",stroke:"#00ff00"}),(0,u.jsx)(j.N,{type:"monotone",dataKey:"aaAttendance",name:"AA Attendance",stroke:"#0000ff"})]})]})]})]})]})}}}]);
//# sourceMappingURL=419.3a3ced36.chunk.js.map