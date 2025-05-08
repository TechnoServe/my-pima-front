"use strict";(self.webpackChunkmypima_front=self.webpackChunkmypima_front||[]).push([[790],{87790:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Y});var i=a(65043),r=a(73216),l=a(7353),n=a(26240),s=a(79285),o=a(94496),d=a(53193),c=a(18356),m=a(60598),g=a(32143),p=a(83625),h=a(24056),u=a(5351),x=a(119),b=a(6058),j=a(12110),y=a(26494),v=a(70579);function w(e){let{title:t,data:a={}}=e;return(0,v.jsx)(j.A,{className:"chart-card info-card",children:(0,v.jsxs)(y.A,{children:[(0,v.jsx)(o.A,{variant:"h6",gutterBottom:!0,children:t}),(0,v.jsx)(l.A,{className:"info-grid",children:Object.entries(a).map((e=>{let[t,a]=e;return(0,v.jsxs)(l.A,{className:"info-item",children:[(0,v.jsx)(o.A,{variant:"overline",color:"textSecondary",children:t}),(0,v.jsx)(o.A,{variant:"subtitle1",color:"textPrimary",children:a})]},t)}))})]})})}var f=a(81637);function A(e){let{title:t,loading:a,error:i,height:r=200,children:n}=e;return(0,v.jsx)(j.A,{className:"chart-card",children:(0,v.jsxs)(y.A,{children:[(0,v.jsx)(o.A,{variant:"h6",gutterBottom:!0,children:t}),a?(0,v.jsx)(l.A,{sx:{height:r,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,v.jsx)(f.A,{})}):i?(0,v.jsx)(o.A,{color:"error",children:i.message}):n]})})}var I=a(82139);function k(e){let{title:t,items:a=[],loading:i,error:r,emptyMessage:n="None"}=e;return(0,v.jsx)(j.A,{className:"chart-card",children:(0,v.jsxs)(y.A,{children:[(0,v.jsx)(o.A,{variant:"h6",gutterBottom:!0,children:t}),i?(0,v.jsx)(l.A,{sx:{height:120,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,v.jsx)(f.A,{})}):r?(0,v.jsx)(o.A,{color:"error",children:r.message}):0===a.length?(0,v.jsx)(o.A,{children:n}):(0,v.jsx)(l.A,{component:"ul",className:"checklist",children:a.map((e=>(0,v.jsxs)(l.A,{className:"checklist-line",children:[(0,v.jsx)(I.A,{color:"warning"}),(0,v.jsx)(o.A,{noWrap:!0,sx:{ml:1,flex:1},children:e})]},e)))})]})})}var D=a(98606),C=a(91794),P=a(9193);function N(e){let{title:t,list:a=[],loading:i,error:r}=e;return(0,v.jsx)(j.A,{className:"chart-card full-width",children:(0,v.jsxs)(y.A,{children:[(0,v.jsx)(o.A,{variant:"h6",gutterBottom:!0,children:t}),i?(0,v.jsx)(l.A,{sx:{height:120,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,v.jsx)(f.A,{})}):r?(0,v.jsx)(o.A,{color:"error",children:r.message}):(0,v.jsx)(l.A,{component:"ul",className:"checklist",children:a.map((e=>(0,v.jsxs)("li",{children:[e.ok?(0,v.jsx)(D.A,{color:"success"}):(0,v.jsx)(C.A,{color:"error"}),(0,v.jsx)(o.A,{component:"span",sx:{ml:1},children:e.name}),e.repair&&(0,v.jsx)(P.A,{fontSize:"small",color:"warning",sx:{ml:1}})]},e.name)))})]})})}var S=a(88250),T=a(70459);const O=T.J1`
  query GetManagerNeedsRanking($wetmillId: ID!) {
    getOperationsRanking(wetmillId: $wetmillId) {
      issue
      rank
      reason
    }
  }
`,R=T.J1`
  query GetMissingDocuments($wetmillId: ID!) {
    getMissingDocuments(wetmillId: $wetmillId)
  }
`,$=T.J1`
  query GetInfrastructureChecklist($wetmillId: ID!) {
    getInfrastructureChecklist(wetmillId: $wetmillId) {
      items
      goodItems
      repairItems
    }
  }
`,q=T.J1`
  query GetFinancialBreakdown($wetmillId: ID!) {
    getFinancialBreakdown(wetmillId: $wetmillId) {
      totalProfit
      reserves
      socialActivities
      secondPaymentToFarmers
    }
  }
`,W=T.J1`
  query GetEmployeeStats($wetmillId: ID!) {
    getEmployeeStats(wetmillId: $wetmillId) {
      menOwnership
      womenOwnership
      menFarmers
      womenFarmers
      menPermanent
      womenPermanent
      menTemporary
      womenTemporary
      menDaily
      womenDaily
    }
  }
`,M=T.J1`
  query GetCpqiStats($wetmillId: ID!) {
    getCpqiStats(wetmillId: $wetmillId) {
      sections { sectionName yesPct noPct }
      overallYesPct
      overallNoPct
    }
  }
`,F=T.J1`
  query GetCpqiChecklist($wetmillId: ID!) {
    getCpqiChecklist(wetmillId: $wetmillId) {
      sectionName
      criteria { questionName yes }
    }
  }
`,B=T.J1`
  query GetTrainingByTopic($wetmillId: ID!) {
    getTrainingAttendanceByTopic(wetmillId: $wetmillId) {
      topic
      male
      female
    }
  }
`,E=T.J1`
  query GetTrainingOverall($wetmillId: ID!) {
    getTrainingAttendanceOverall(wetmillId: $wetmillId) {
      male
      female
    }
  }
`,G=T.J1`
  query GetKpiStats($wetmillId: ID!) {
    getKpiStats(wetmillId: $wetmillId) {
      cherry
      total
    }
  }
`,_=T.J1`
  query GetParchmentDistribution($wetmillId: ID!) {
    getParchmentDistribution(wetmillId: $wetmillId) {
      grade
      value
    }
  }
`;const J={id:"centerText",afterDraw(e){const t=e.config.options.plugins.centerText;if(!t||!t.text)return;const{ctx:a,chartArea:{width:i,height:r,top:l}}=e;a.save(),a.font=t.font||"bold 18px Arial",a.fillStyle=t.color||"#000",a.textAlign="center",a.fillText(t.text,i/2,l+r/2),a.restore()}};function L(e){const t=function(e){const{data:t,loading:a,error:i}=(0,S.I)(O,{variables:{wetmillId:e},skip:!e}),r=(null===t||void 0===t?void 0:t.getOperationsRanking)||[];return{chartData:{labels:r.map((e=>e.issue)),datasets:[{label:"Rank",data:r.map((e=>e.rank)),backgroundColor:"#1b2a4e",borderRadius:6}]},loading:a,error:i,raw:r}}(e),a=function(e){const{data:t,loading:a,error:i}=(0,S.I)(R,{variables:{wetmillId:e},skip:!e});return{items:(null===t||void 0===t?void 0:t.getMissingDocuments)||[],loading:a,error:i}}(e),i=function(e){const{data:t,loading:a,error:i}=(0,S.I)($,{variables:{wetmillId:e},skip:!e});return{...(null===t||void 0===t?void 0:t.getInfrastructureChecklist)||{items:[],goodItems:[],repairItems:[]},loading:a,error:i}}(e),r=function(e){const{data:t,loading:a,error:i}=(0,S.I)(q,{variables:{wetmillId:e},skip:!e}),r=(null===t||void 0===t?void 0:t.getFinancialBreakdown)||{totalProfit:0,reserves:0,socialActivities:0,secondPaymentToFarmers:0};return{chartData:{labels:["Second payment to farmers","Social activities","Reserves"],datasets:[{data:[r.secondPaymentToFarmers,r.socialActivities,r.reserves],backgroundColor:["#087c8f","#005f6b","#1b2a4e"],borderWidth:2}]},chartOptions:{cutout:"70%",responsive:!0,maintainAspectRatio:!0,plugins:{legend:{position:"top",labels:{boxWidth:12,padding:8}},tooltip:{padding:10},centerText:{text:`FBI ${r.totalProfit.toLocaleString()}`,font:"bold 18px Arial",color:"#000"}}},plugins:[J],loading:a,error:i}}(e),l=function(e){const{data:t,loading:a,error:i}=(0,S.I)(W,{variables:{wetmillId:e},skip:!e}),r=(null===t||void 0===t?void 0:t.getEmployeeStats)||{menOwnership:0,womenOwnership:0,menFarmers:0,womenFarmers:0,menPermanent:0,womenPermanent:0,menTemporary:0,womenTemporary:0,menDaily:0,womenDaily:0};return{chartData:{labels:["Ownership","Farmer Members","Permanent Employees","Temporary Employees","Daily Workers"],datasets:[{label:"Men",data:[r.menOwnership,r.menFarmers,r.menPermanent,r.menTemporary,r.menDaily],backgroundColor:"#1b2a4e",borderRadius:4},{label:"Women",data:[r.womenOwnership,r.womenFarmers,r.womenPermanent,r.womenTemporary,r.womenDaily],backgroundColor:"#005f6b",borderRadius:4}]},chartOptions:{responsive:!0,maintainAspectRatio:!0,plugins:{legend:{position:"top",labels:{boxWidth:12,usePointStyle:!0}},tooltip:{mode:"index",intersect:!1,padding:10}},scales:{x:{grid:{display:!0},display:!1},y:{beginAtZero:!0,ticks:{stepSize:1,precision:0},grid:{borderDash:[5,5]}}}},loading:a,error:i}}(e),n=function(e){const{data:t,loading:a,error:i}=(0,S.I)(M,{variables:{wetmillId:e},skip:!e}),r=(null===t||void 0===t?void 0:t.getCpqiStats)||{sections:[],overallYesPct:0,overallNoPct:0};return{bar:{chartData:{labels:r.sections.map((e=>e.sectionName)),datasets:[{label:"Yes %",data:r.sections.map((e=>e.yesPct)),backgroundColor:"#087c8f"},{label:"No %",data:r.sections.map((e=>e.noPct)),backgroundColor:"#cccccc"}]},chartOptions:{responsive:!0,maintainAspectRatio:!0,scales:{x:{stacked:!0,grid:{display:!1}},y:{stacked:!0,beginAtZero:!0,max:100,ticks:{callback:e=>e+"%"}}},plugins:{legend:{position:"top"},tooltip:{callbacks:{label:e=>e.raw.toFixed(1)+"%"}}}}},pie:{pieData:{labels:["Yes %","No %"],datasets:[{data:[r.overallYesPct,r.overallNoPct],backgroundColor:["#087c8f","#cccccc"]}]},pieOptions:{cutout:"60%",responsive:!0,maintainAspectRatio:!0,plugins:{legend:{position:"top"},tooltip:{callbacks:{label:e=>e.raw.toFixed(1)+"%"}}}}},loading:a,error:i}}(e),s=function(e){const{data:t,loading:a,error:i}=(0,S.I)(F,{variables:{wetmillId:e},skip:!e});return{sections:(null===t||void 0===t?void 0:t.getCpqiChecklist)||[],loading:a,error:i}}(e),o=function(e){const{data:t,loading:a,error:i}=(0,S.I)(B,{variables:{wetmillId:e},skip:!e}),r=(null===t||void 0===t?void 0:t.getTrainingAttendanceByTopic)||[],l={labels:r.map((e=>e.topic)),datasets:[{label:"Male",data:r.map((e=>e.male)),backgroundColor:"#087c8f"},{label:"Female",data:r.map((e=>e.female)),backgroundColor:"#1b2a4e"}]};return console.log(l),{raw:r,loading:a,error:i,chartData:l}}(e),d=function(e){var t,a;const{data:i,loading:r,error:l}=(0,S.I)(E,{variables:{wetmillId:e},skip:!e});return{loading:r,error:l,chartData:{labels:["Male","Female"],datasets:[{data:[(null===i||void 0===i||null===(t=i.getTrainingAttendanceOverall)||void 0===t?void 0:t.male)||0,(null===i||void 0===i||null===(a=i.getTrainingAttendanceOverall)||void 0===a?void 0:a.female)||0],backgroundColor:["#087c8f","#1b2a4e"]}]}}}(e),c=function(e){const{data:t,loading:a,error:i}=(0,S.I)(G,{variables:{wetmillId:e},skip:!e}),r=(null===t||void 0===t?void 0:t.getKpiStats)||{cherry:0,total:0};return{loading:a,error:i,price:r.cherry,totalSales:r.total}}(e),m=function(e){const{data:t,loading:a,error:i}=(0,S.I)(_,{variables:{wetmillId:e},skip:!e}),r=(null===t||void 0===t?void 0:t.getParchmentDistribution)||[];return{chartData:{labels:r.map((e=>e.grade)),datasets:[{data:r.map((e=>e.value)),backgroundColor:["#1b2a4e","#087c8f","#005f6b","#cccccc","#eeeeee"],borderWidth:3,hoverOffset:15,cutout:"65%"}]},loading:a,error:i}}(e);return{managerNeeds:t,missingDocuments:a,infrastructure:i,financials:r,employeeStats:l,cpqiStats:n,cpqiChecklist:s,trainingByTopic:o,trainingOverall:d,kpiStats:c,parchmentDist:m}}function z(e){let{title:t,sections:a=[],loading:i,error:r,emptyMessage:n="Nothing to show"}=e;return(0,v.jsx)(j.A,{className:"chart-card full-width",children:(0,v.jsxs)(y.A,{children:[(0,v.jsx)(o.A,{variant:"h6",gutterBottom:!0,children:t}),i?(0,v.jsx)(l.A,{sx:{height:120,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,v.jsx)(f.A,{})}):r?(0,v.jsx)(o.A,{color:"error",children:r.message}):0===a.length?(0,v.jsx)(o.A,{children:n}):a.map((e=>(0,v.jsxs)(l.A,{sx:{mb:2},children:[(0,v.jsx)(o.A,{variant:"subtitle2",sx:{fontWeight:600,mb:1},children:e.sectionName}),(0,v.jsx)(l.A,{component:"ul",className:"checklist",children:e.criteria.map((e=>(0,v.jsxs)("li",{className:"checklist-line",children:[e.yes?(0,v.jsx)(D.A,{color:"success",fontSize:"small"}):(0,v.jsx)(C.A,{color:"error",fontSize:"small"}),(0,v.jsx)(o.A,{component:"span",sx:{ml:1},children:e.questionName.replace(/_/g," ")})]},e.questionName)))})]},e.sectionName)))]})})}function K(e){let{children:t,value:a,index:i}=e;return(0,v.jsx)("div",{role:"tabpanel",hidden:a!==i,children:a===i&&(0,v.jsx)(l.A,{sx:{pt:2},children:t})})}function Y(){const{wetmills:e}=(0,r.KC)(),[t,a]=(0,i.useState)((()=>window.localStorage.getItem("selectedWetmill")||""));(0,i.useEffect)((()=>{if(!t&&e.length){const t=window.localStorage.getItem("selectedWetmill");t&&e.some((e=>e.id===t))?a(t):a(e[0].id)}}),[e,t]),(0,i.useEffect)((()=>{t&&window.localStorage.setItem("selectedWetmill",t)}),[t]);const u=(0,n.A)(),x=(0,s.A)(u.breakpoints.down("sm")),[j,y]=(0,i.useState)(0),f=e.find((e=>e.id===t))||{},I={"Wetmill ID":f.wet_mill_unique_id||t,Name:f.name||"N/A","Registered On":f.registration_date||"N/A",Ownership:f.mill_status||"N/A","Exporting Status":f.exporting_status||"N/A"},{managerNeeds:D,missingDocuments:C,infrastructure:P,financials:S,employeeStats:T,cpqiStats:O,cpqiChecklist:R,trainingByTopic:$,trainingOverall:q,kpiStats:W,parchmentDist:M}=L(t),F=D.raw||[],B=[2,1,3],E=B.map((e=>F.find((t=>t.rank===e))||{})).map((e=>e.issue||"")),G=B,_=B.map((e=>1===e?2:1)),J={labels:E,datasets:[{data:_,backgroundColor:["#C0C0C0","#1b2a4e","#C0C0C0"],borderRadius:{topLeft:12,topRight:12},barThickness:60}]},Y={responsive:!0,maintainAspectRatio:!0,plugins:{legend:{display:!1},tooltip:{callbacks:{title:e=>E[e[0].dataIndex],label:e=>`Rank: ${G[e.dataIndex]}`}}},scales:{x:{display:!1},y:{display:!1}}},Q={responsive:!0,maintainAspectRatio:!0,plugins:{legend:{position:"top",labels:{boxWidth:12,usePointStyle:!0}},tooltip:{mode:"index",intersect:!1,padding:10}},scales:{x:{grid:{display:!1}},y:{grid:{borderDash:[5,5]},beginAtZero:!0}}},U={responsive:!0,maintainAspectRatio:!0,layout:{padding:{top:0,bottom:0,left:0,right:0}},plugins:{legend:{position:"top",labels:{boxWidth:12,usePointStyle:!0,padding:10}},tooltip:{mode:"nearest",intersect:!1,padding:10}}};return(0,v.jsxs)(l.A,{className:"dashboard-container",children:[(0,v.jsxs)(l.A,{className:"dashboard-header",sx:{flexDirection:x?"column":"row"},children:[(0,v.jsx)(o.A,{variant:"h5",className:"dashboard-title",children:"Wetmill Dashboard"}),(0,v.jsxs)(d.A,{size:"small",children:[(0,v.jsx)(c.A,{children:"Wetmill"}),(0,v.jsx)(m.A,{value:t,label:"Wetmill",onChange:e=>a(e.target.value),children:e.map((e=>(0,v.jsx)(g.A,{value:e.id,children:e.name},e.id)))})]})]}),(0,v.jsx)(p.A,{value:j,onChange:(e,t)=>y(t),indicatorColor:"primary",textColor:"primary",variant:x?"scrollable":"standard",allowScrollButtonsMobile:!0,children:["Profile","Processing","Attendance","KPIs","Wastewater"].map((e=>(0,v.jsx)(h.A,{label:e},e)))}),(0,v.jsx)(K,{value:j,index:0,children:(0,v.jsxs)(l.A,{className:"charts-grid",children:[(0,v.jsx)(w,{title:"Registration Info",data:I}),(0,v.jsx)(A,{title:"Manager Needs Ranking",loading:D.loading,error:D.error,height:300,children:(0,v.jsx)(b.yP,{data:J,options:Y})}),(0,v.jsx)(k,{title:"Missing Documents",items:C.items,loading:C.loading,error:C.error,emptyMessage:"No documents missing :)"}),(0,v.jsx)(A,{title:"Profit Usage",loading:S.loading,error:S.error,height:250,children:(0,v.jsx)(b.nu,{data:S.chartData,options:S.chartOptions,plugins:S.plugins})}),(0,v.jsx)(A,{title:"Employees",loading:T.loading,error:T.error,height:900,children:(0,v.jsx)(b.yP,{data:T.chartData,options:T.chartOptions})}),(0,v.jsx)(N,{title:"Infrastructure Checklist",list:P.items.map((e=>({name:e,ok:P.goodItems.includes(e),repair:P.repairItems.includes(e)}))),loading:P.loading,error:P.error})]})}),(0,v.jsx)(K,{value:j,index:1,children:(0,v.jsxs)(l.A,{className:"charts-grid",children:[(0,v.jsx)(A,{title:"Water & Energy Compliance",children:(0,v.jsx)(b.yP,{data:{labels:["Meter","Record Book","Reduction Effort"],datasets:[{label:"Compliant",data:[1,0,1],backgroundColor:["#1b2a4e","#e67e22","#2980b9"],borderRadius:6}]},options:{...Q,scales:{x:{stacked:!0},y:{stacked:!0}}}})}),(0,v.jsx)(A,{title:"CPQI Overall Compliance",loading:O.statsLoading,error:O.statsError,height:200,children:(0,v.jsx)(b.nu,{data:O.pie.pieData,options:O.pie.pieOptions})}),(0,v.jsx)(A,{title:"CPQI by Criteria",loading:O.statsLoading,error:O.statsError,height:300,children:(0,v.jsx)(b.yP,{data:O.bar.chartData,options:O.bar.chartOptions})}),(0,v.jsx)(z,{title:"CPQI Detailed Checklist",sections:R.sections,loading:R.loading,error:R.error,emptyMessage:"No CPQI data available"})]})}),(0,v.jsx)(K,{value:j,index:2,children:(0,v.jsxs)(l.A,{className:"charts-grid",children:[(0,v.jsx)(A,{title:"Training Attendance by Topic",loading:$.loading,error:$.error,children:(0,v.jsx)(b.yP,{data:$.chartData,options:{...Q,scales:{x:{grid:{display:!1},ticks:{maxRotation:45,minRotation:45,callback:(e,t)=>{const a=$.chartData.labels[t]||"";return a.length>15?a.slice(0,15)+"\u2026":a}}},y:Q.scales.y}}})}),(0,v.jsx)(A,{title:"Overall Unique Attendees",loading:q.loading,error:q.error,height:200,children:(0,v.jsx)(b.nu,{data:q.chartData,options:{...U,aspectRatio:1,layout:{padding:20}}})})]})}),(0,v.jsx)(K,{value:j,index:3,children:(0,v.jsxs)(l.A,{className:"charts-grid",children:[(0,v.jsx)(w,{title:"End-of-Season Cherry Price",data:{Price:`$${W.price.toFixed(2)}`},loading:W.loading,error:W.error}),(0,v.jsx)(w,{title:"Total Sales (USD)",data:{Sales:`$${W.totalSales.toLocaleString()}`},loading:W.loading,error:W.error}),(0,v.jsx)(A,{title:"Parchment Grades",children:(0,v.jsx)(b.nu,{data:M.chartData,options:U})}),(0,v.jsx)(A,{title:"Parchment Distribution",loading:M.loading,error:M.error,children:(0,v.jsx)(b.nu,{data:M.chartData,options:U})})]})}),(0,v.jsx)(K,{value:j,index:4,children:(0,v.jsxs)(l.A,{className:"charts-grid",children:[(0,v.jsx)(w,{title:"Wastewater Management Method",data:{Method:f.waste_water_management_method||"Lagoon"}}),(0,v.jsx)(A,{title:"Distance to Waterbody",children:(0,v.jsx)(b.yP,{data:{labels:["Lagoon"],datasets:[{label:"Distance (m)",data:[120],backgroundColor:e=>e.parsed.y>=50?"#1b2a4e":"#e74c3c",borderRadius:4,maxBarThickness:40}]},options:{...Q,scales:{x:Q.scales.x,y:{...Q.scales.y,suggestedMax:60}},plugins:{...Q.plugins,annotation:{annotations:{minLine:{type:"line",scaleID:"y",value:50,borderColor:"#e74c3c",borderWidth:2,borderDash:[6,6],label:{enabled:!0,content:"Min 50 m",position:"end",backgroundColor:"rgba(231,76,60,0.8)",color:"#fff",font:{weight:"bold"}}}}}}}})})]})})]})}u.Ay.register(x.A)}}]);
//# sourceMappingURL=790.94d0d807.chunk.js.map