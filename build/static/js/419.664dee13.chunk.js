"use strict";(self.webpackChunkmypima_front=self.webpackChunkmypima_front||[]).push([[419],{47419:(e,t,a)=>{a.r(t),a.d(t,{default:()=>P});var n=a(65043),r=a(15603),s=a(70459),o=a(88250),i=a(88420),d=a(58763),m=a(52185),c=a(6026),l=a(3831),h=(0,i.gu)({chartName:"BarChart",GraphicalChild:d.y,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:m.W},{axisType:"yAxis",AxisComp:c.h}],formatAxisMap:l.pr}),f=a(87734),y=a(86150),x=a(21327),p=a(75748),j=a(90168),g=a(11238),u=a(32393),A=a(94496),v=a(73216),F=a(70579);const T=s.J1`
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
`,P=()=>{var e;const{activeProject:t}=(0,v.KC)(),{loading:a,error:s,data:i}=(0,o.I)(T,{variables:{projectId:t}}),[l,P]=(0,n.useState)(null),[b,N]=(0,n.useState)("auto"),k=(0,n.useRef)(null);(0,n.useEffect)((()=>{var e;if(k.current&&(null===i||void 0===i||null===(e=i.getPerformanceByFT)||void 0===e?void 0:e.data.length)>0){const e=Math.max(...i.getPerformanceByFT.data.map((e=>8*e.name.length)));N(`${e}px`)}}),[i]);const w=e=>{let{month:t,year:a}=e;return`${t}/${a}`};return a?(0,F.jsx)(u.A,{}):s?(0,F.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:(0,F.jsx)(A.A,{color:"error",children:"Error loading data"})}):(0,F.jsxs)("div",{className:"ft-performance-container",children:[(0,F.jsx)("h4",{className:"page-title",children:"Select a Farmer Trainer"}),(0,F.jsx)("div",{className:"select-download-container",children:a?(0,F.jsx)("p",{className:"loading-message",children:"Loading..."}):s?(0,F.jsx)("p",{className:"error-message",children:"Error: Unable to fetch data. Refresh page, if it doesn't work please contact the PIMA team."}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(r.Ay,{className:"select",options:null===i||void 0===i||null===(e=i.getPerformanceByFT)||void 0===e?void 0:e.data.map((e=>({label:e.name,value:e.id}))),onChange:e=>{var t;const a=null===i||void 0===i||null===(t=i.getPerformanceByFT)||void 0===t?void 0:t.data.find((t=>t.id===e.value));P(a)},placeholder:"Search Farmer Trainers...",value:l?{label:l.name,value:l.id}:null,styles:{menuPortal:e=>({...e,zIndex:9999})},menuPortalTarget:document.body,menuPlacement:"auto",width:b,ref:k}),(0,F.jsx)("button",{className:"download-button",onClick:()=>{if(!i||!i.getPerformanceByFT||!i.getPerformanceByFT.data)return;const e=[];i.getPerformanceByFT.data.forEach((t=>{t.monthlyPerformance.forEach(((a,n)=>{const r={Name:t.name,Month:`${a.month}/${a.year}`,"% FFGs Submitted":a.percentage||"","Total Visited Farms":"","Average Performance Grade":"","TO vs AA Attendance difference":"","FT Attendance":"","AA Attendance":""},s=t.monthlyVisitedFarms.find((e=>e.month===a.month&&e.year===a.year));s&&(r["Total Visited Farms"]=s.totalVisitedFarms);const o=t.monthlyRating.find((e=>e.month===a.month&&e.year===a.year));o&&(r["Average Performance Grade"]=o.avgScore);const i=t.monthlyAttDifference.find((e=>e.month===a.month&&e.year===a.year));i&&(r["TO vs AA Attendance difference"]=i.difference,r["FT Attendance"]=i.ftAttendance,r["AA Attendance"]=i.aaAttendance),e.push(r)}))}));const t=g.Wp.json_to_sheet(e),a=g.Wp.book_new();g.Wp.book_append_sheet(a,t,"FT_Performance"),g._h(a,"FT_Performance_Data.xlsx")},children:"Download Performance Data"})]})}),l&&(0,F.jsxs)("div",{children:[(0,F.jsxs)("h3",{className:"section-title",children:["Graphs for ",l.name]}),(0,F.jsxs)("div",{className:"graph-container",children:[(0,F.jsxs)("div",{className:"graph",children:[(0,F.jsx)("h4",{children:"% of FFGs submitted on PIMA per month"}),(0,F.jsxs)(h,{width:600,height:300,data:l.monthlyPerformance,margin:{top:5,right:30,left:20,bottom:5},children:[(0,F.jsx)(f.d,{strokeDasharray:"3 3"}),(0,F.jsx)(m.W,{dataKey:e=>{let{month:t,year:a}=e;return w({month:t,year:a})},allowDataOverflow:!1}),(0,F.jsx)(c.h,{ticks:[0,20,40,60,80,100]}),(0,F.jsx)(y.m,{}),(0,F.jsx)(x.s,{}),(0,F.jsx)(d.y,{dataKey:"percentage",name:"% FFGs Submitted",fill:"#82ca9d"})]})]}),(0,F.jsxs)("div",{className:"graph",children:[(0,F.jsx)("h4",{children:"Number of Farm Visits performed per month"}),(0,F.jsxs)(p.b,{width:600,height:300,data:l.monthlyVisitedFarms,margin:{top:5,right:30,left:20,bottom:5},children:[(0,F.jsx)(f.d,{strokeDasharray:"3 3"}),(0,F.jsx)(m.W,{dataKey:e=>{let{month:t,year:a}=e;return w({month:t,year:a})}}),(0,F.jsx)(c.h,{}),(0,F.jsx)(y.m,{}),(0,F.jsx)(x.s,{}),(0,F.jsx)(j.N,{type:"monotone",dataKey:"totalVisitedFarms",name:"Farm Visits",stroke:"#8884d8"})]})]}),(0,F.jsxs)("div",{className:"graph",children:[(0,F.jsx)("h4",{children:"FT Average Performance Grade per month"}),(0,F.jsxs)(p.b,{width:600,height:300,data:l.monthlyRating,margin:{top:5,right:30,left:20,bottom:5},children:[(0,F.jsx)(f.d,{strokeDasharray:"3 3"}),(0,F.jsx)(m.W,{dataKey:e=>{let{month:t,year:a}=e;return w({month:t,year:a})}}),(0,F.jsx)(c.h,{ticks:[0,1,2,3,4]}),(0,F.jsx)(y.m,{}),(0,F.jsx)(x.s,{}),(0,F.jsx)(j.N,{type:"monotone",dataKey:"avgScore",name:"Average Performance Grade",stroke:"#ff7300"})]})]}),(0,F.jsxs)("div",{className:"graph",children:[(0,F.jsx)("h4",{children:"FT VS AA Attendance Numbers"}),(0,F.jsxs)(p.b,{width:600,height:300,data:l.monthlyAttDifference,margin:{top:5,right:30,left:20,bottom:5},children:[(0,F.jsx)(f.d,{strokeDasharray:"3 3"}),(0,F.jsx)(m.W,{dataKey:e=>{let{month:t,year:a}=e;return w({month:t,year:a})}}),(0,F.jsx)(c.h,{ticks:[0,20,40,60]}),(0,F.jsx)(y.m,{}),(0,F.jsx)(x.s,{}),(0,F.jsx)(j.N,{type:"monotone",dataKey:"difference",name:"TO vs AA Attendance difference",stroke:"#ff0000"}),(0,F.jsx)(j.N,{type:"monotone",dataKey:"ftAttendance",name:"FT Attendance",stroke:"#00ff00"}),(0,F.jsx)(j.N,{type:"monotone",dataKey:"aaAttendance",name:"AA Attendance",stroke:"#0000ff"})]})]})]})]})]})}}}]);
//# sourceMappingURL=419.664dee13.chunk.js.map