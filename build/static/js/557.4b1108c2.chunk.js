"use strict";(self.webpackChunkmypima_front=self.webpackChunkmypima_front||[]).push([[557],{11557:(e,t,n)=>{n.r(t),n.d(t,{default:()=>T});var i=n(65043),r=n(43845),s=n(7353),a=n(61596),o=n(94496),l=n(81679),d=n(3438),c=n(77739),m=n(88446),p=n(10611),u=n(68903),h=n(17392),x=n(30279),f=n(39336),_=n(85369),g=n(41434),j=n(30589),b=n(83462),v=n(26600),A=n(35316),y=n(14194),C=n(29347),I=n(83827),S=n(67805),w=n(31881),P=n(88250),$=n(72450),k=n(62257),F=n(70579);const M="#1b2a4e",E="#087c8f",R=["Project","first_name","last_name","gender","age","coffee_tree_numbers","farmer_sf_id","tns_id","hh_number","sf_household_id","farmer_number","ffg_id","training_group","status"],O=e=>{let{open:t,setOpen:n,navigatedProject:c,sfProjectId:m}=e;const[p,u]=(0,i.useState)(null),[h,x]=(0,i.useState)(null),[j,O]=(0,i.useState)([]),[B,z]=(0,i.useState)([]),[N,W]=(0,i.useState)(null),[T,H]=(0,i.useState)(!1),[G]=(0,w.n)(k.dX),U=(0,P.I)(k.Oy,{variables:{projectId:m},skip:!m});(0,i.useEffect)((()=>{if(null===p||void 0===p||!p.data||p.data.length<2)return;const e=j.indexOf("Project"),t=p.data.map((t=>t[e])).filter(Boolean);z([...new Set(t)])}),[p,j]);const L=()=>{u(null),x(null),O([]),z([]),W(null),H(!1),n(!1)},D=j.filter((e=>R.includes(e))).length,J=p&&D!==R.length,q=p&&p.data&&p.data.length-2<1,V=p&&B.length>0&&!B.includes(c),X=(0,i.useMemo)((()=>{if(!p||!j.length)return 0;const e=j.indexOf("Project");return Math.max(0,p.data.filter((t=>t[e]===c)).length-1)}),[p,j,c]);return(0,F.jsxs)(b.A,{open:t,onClose:(e,t)=>"backdropClick"===t||"escapeKeyDown"===t?null:L(),fullWidth:!0,maxWidth:"sm",children:[(0,F.jsx)(v.A,{sx:{pb:1,color:M},children:"Upload Participants"}),(0,F.jsx)(A.A,{sx:{pt:0},children:p?N?(0,F.jsxs)(a.A,{elevation:0,sx:{p:2},children:[(0,F.jsx)(y.A,{severity:200===N.status?"success":"error",sx:{mb:2},children:N.message}),200!==N.status&&N.file&&(0,F.jsx)(d.A,{onClick:()=>{if(null===N||void 0===N||!N.file)return;const e=atob(N.file),t=new Uint8Array([...e].map((e=>e.charCodeAt(0)))),n=new Blob([t],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,$.saveAs)(n,"errors.xlsx")},variant:"contained",sx:{bgcolor:E,"&:hover":{bgcolor:"#066d79"}},children:"Download Error File"})]}):J?(0,F.jsxs)(a.A,{elevation:0,sx:{p:2},children:[(0,F.jsxs)(l.A,{direction:"row",spacing:1,alignItems:"center",sx:{mb:1},children:[(0,F.jsx)(S.rdI,{size:22,color:"#B90101"}),(0,F.jsx)(o.A,{variant:"body1",sx:{fontWeight:600,color:M},children:"Missing required columns"})]}),(0,F.jsx)(o.A,{variant:"body2",sx:{mb:1},children:"File must contain all of the following columns:"}),(0,F.jsx)(s.A,{sx:{display:"flex",flexWrap:"wrap",gap:.5,mb:2},children:R.filter((e=>!j.includes(e))).map((e=>(0,F.jsx)(r.A,{label:e,size:"small",variant:"outlined"},e)))}),(0,F.jsx)(d.A,{startIcon:(0,F.jsx)(g.XfH,{}),onClick:()=>u(null),children:"Choose another file"})]}):q?(0,F.jsxs)(a.A,{elevation:0,sx:{p:2},children:[(0,F.jsxs)(l.A,{direction:"row",spacing:1,alignItems:"center",sx:{mb:1},children:[(0,F.jsx)(S.rdI,{size:22,color:"#B90101"}),(0,F.jsx)(o.A,{variant:"body1",sx:{fontWeight:600,color:M},children:"No records found in the file"})]}),(0,F.jsx)(d.A,{startIcon:(0,F.jsx)(g.XfH,{}),onClick:()=>u(null),children:"Choose another file"})]}):V?(0,F.jsxs)(a.A,{elevation:0,sx:{p:2},children:[(0,F.jsxs)(l.A,{direction:"row",spacing:1,alignItems:"center",sx:{mb:1},children:[(0,F.jsx)(S.rdI,{size:22,color:"#B90101"}),(0,F.jsx)(o.A,{variant:"body1",sx:{fontWeight:600,color:M},children:"Project mismatch"})]}),(0,F.jsxs)(o.A,{variant:"body2",sx:{mb:2},children:["Uploaded file contains projects that don\u2019t match: ",(0,F.jsx)("b",{children:c}),"."]}),(0,F.jsx)(d.A,{startIcon:(0,F.jsx)(g.XfH,{}),onClick:()=>u(null),children:"Choose another file"})]}):(0,F.jsxs)(a.A,{elevation:0,sx:{p:2},children:[(0,F.jsxs)(l.A,{spacing:1,sx:{mb:1},children:[(0,F.jsxs)(o.A,{variant:"body2",children:[(0,F.jsx)("b",{children:"Name:"})," ",p.filename]}),(0,F.jsxs)(o.A,{variant:"body2",children:[(0,F.jsx)("b",{children:"Size:"})," ",p.size>1e6?`${(p.size/1e6).toFixed(2)} MB`:`${(p.size/1e3).toFixed(2)} KB`]}),(0,F.jsxs)(o.A,{variant:"body2",children:[(0,F.jsxs)("b",{children:["Records for ",c,":"]})," ",X]})]}),(0,F.jsx)(f.A,{sx:{my:1}}),(0,F.jsxs)(l.A,{direction:"row",spacing:1.5,sx:{mt:1},children:[(0,F.jsx)(d.A,{variant:"outlined",startIcon:(0,F.jsx)(g.XfH,{}),onClick:()=>u(null),disabled:T,sx:{color:M,borderColor:M},children:"Choose another file"}),(0,F.jsx)(d.A,{variant:"contained",startIcon:(0,F.jsx)(_.BzO,{}),onClick:async()=>{if(!T&&p){H(!0),W(null);try{const e=(()=>{const e=j.indexOf("Project"),t=p.data.filter((t=>t[e]===c)),n=`${j.join(",")}\n${t.map((e=>e.join(","))).join("\n")}`;return new File([n],p.filename,{type:"text/csv"})})(),t=await G({variables:{partsFile:e,projectId:m}});await U.refetch(),W(t.data.uploadParticipants)}catch(e){console.error(e),W({status:500,message:"Something went wrong. Please try again."})}finally{H(!1)}}},disabled:T,sx:{bgcolor:E,"&:hover":{bgcolor:"#066d79"}},children:T?"Processing...":"Process & Upload"})]})]}):(0,F.jsxs)(a.A,{elevation:0,sx:{p:2,border:"1px dashed #cfd8dc",borderRadius:2,bgcolor:"#fff"},children:[(0,F.jsx)(I.l,{label:"Drag & drop or browse a CSV",handleChange:e=>{x(e),W(null);const t=new FileReader;t.onload=t=>{const n=t.target.result.split(/\r\n|\n/),i=n.map((e=>e.split(",").map((e=>e.replace(/^"(.*)"$/,"$1")))));u({filename:e.name,size:e.size,type:e.type,data:i.length>0?i:n}),O(i[0]||[])},t.readAsText(e)},name:"file",types:["csv"]}),(0,F.jsx)(o.A,{variant:"caption",color:"text.secondary",children:"Accepted format: .csv"})]})}),(0,F.jsx)(C.A,{children:(0,F.jsx)(d.A,{onClick:L,disabled:T,children:"Close"})})]})};const B=n(70459).J1`
  query GetAttendances($projectId: String!) {
    getAttendances(project_id: $projectId) {
      message
      status
      attendance {
        attendance_id
        participant_id
        attendance_status
        module_name
        module_number
        module_id
      }
    }
  }
`;var z=n(73216);n(47927);const N="#1b2a4e",W="#087c8f",T=()=>{var e,t,n,b,v,A;const{activeProject:y,trainingGroups:C,projects:I}=(0,z.KC)(),[S,$]=(0,i.useState)(!1),[M,E]=(0,i.useState)(0),[R,T]=(0,i.useState)(!1),[H,G]=(0,i.useState)(!1),{isSyncing:U,overallPercent:L,phaseList:D,totals:J,run:q,failedRows:V}=function(e){let{intervalMs:t=4e3,runId:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const[r,s]=(0,i.useState)(null),[a,o]=(0,i.useState)(!1),[l,d]=(0,i.useState)(null),c=(0,i.useRef)(null),m=async t=>{if(e)try{o(!0),d(null);const i=`http://localhost:6500/api/outbox/progress/${encodeURIComponent(e)}`+(n?`?runId=${encodeURIComponent(n)}`:""),r=await fetch(i,{signal:t});if(!r.ok)throw new Error(`HTTP ${r.status}`);const a=await r.json();s(a)}catch(i){"AbortError"!==i.name&&(console.error("outbox/progress error:",i),d(i))}finally{o(!1)}};return(0,i.useEffect)((()=>{const e=new AbortController;return m(e.signal),c.current=setInterval((()=>m(e.signal)),t),()=>{e.abort(),c.current&&clearInterval(c.current)}}),[e,n,t]),{loading:a,error:l,...(0,i.useMemo)((()=>{var e,t,n,i;const s=(null===r||void 0===r?void 0:r.summary)||{},a=(null===r||void 0===r?void 0:r.phases)||{},o={households:"Households",participants:"Participants",attendance:"Attendance"},l=["households","participants","attendance"].map((e=>({key:e,name:o[e],...a[e]})));return{isSyncing:Boolean(s.isSyncing),overallPercent:"number"===typeof s.percent?s.percent:null,totals:{total:null!==(e=s.total)&&void 0!==e?e:0,sent:null!==(t=s.sent)&&void 0!==t?t:0,failed:null!==(n=s.failed)&&void 0!==n?n:0,leftToSend:null!==(i=s.leftToSend)&&void 0!==i?i:0},run:(null===r||void 0===r?void 0:r.run)||null,failedRows:(null===r||void 0===r?void 0:r.failed)||[],phaseList:l,raw:r}}),[r]),refetch:()=>m()}}(y),{data:X,loading:K,error:Z,refetch:Y}=(0,P.I)(k.Oy,{variables:{projectId:y},skip:!y,fetchPolicy:"cache-and-network"}),{data:Q,loading:ee,error:te}=(0,P.I)(B,{variables:{projectId:y},skip:!y,fetchPolicy:"cache-and-network"}),[ne]=(0,w.n)(k.Cv),ie=(0,i.useMemo)((()=>{try{return JSON.parse(window.localStorage.getItem("myPimaUserData"))}catch{return null}}),[]);(0,i.useEffect)((()=>{var e;if(200===(null===X||void 0===X||null===(e=X.getParticipantsByProject)||void 0===e?void 0:e.status)){const e=X.getParticipantsByProject.participants.filter((e=>"false"===String(e.create_in_commcare).toLowerCase()));E(e.length)}}),[X]);const re=async()=>{if(y){T(!0);try{await ne({variables:{projectId:y}}),await Y()}finally{T(!1)}}},se=null!==(e=null===X||void 0===X||null===(t=X.getParticipantsByProject)||void 0===t?void 0:t.participants)&&void 0!==e?e:[],ae=null!==(n=null===Q||void 0===Q||null===(b=Q.getAttendances)||void 0===b?void 0:b.attendance)&&void 0!==n?n:[],oe=("super_admin"===(null===ie||void 0===ie?void 0:ie.role)||"ci_leadership"===(null===ie||void 0===ie?void 0:ie.role)||"senior_business_advisor"===(null===ie||void 0===ie?void 0:ie.role)||"project_manager"===(null===ie||void 0===ie?void 0:ie.role)||"mel_analyst"===(null===ie||void 0===ie?void 0:ie.role))&&!U,le=(0,i.useMemo)((()=>se.map(((e,t)=>{var n,i;const r={num:t+1,Project:null===(n=I.find((e=>e.sf_project_id===y)))||void 0===n?void 0:n.project_name,p_id:e.p_id,first_name:e.first_name,middle_name:e.middle_name||"",last_name:e.last_name||"",gender:e.gender,age:e.age,coffee_tree_numbers:e.coffee_tree_numbers,phone_number:e.phone_number,farmer_sf_id:e.p_id,hh_number:e.hh_number,sf_household_id:e.household_id,ffg_id:e.ffg_id,location:e.location,tns_id:e.tns_id,training_group:(null===C||void 0===C||null===(i=C.find((t=>t.tg_id===e.training_group)))||void 0===i?void 0:i.tg_name)||"N/A",farmer_number:e.primary_household_member,status:e.status,farmer_trainer:e.farmer_trainer,create_in_commcare:e.create_in_commcare,number_of_coffee_plots:e.number_of_coffee_plots,business_advisor:e.business_advisor};return"a0EOj000003E0knMAC"===y&&(r.agronomy_advisor=e.business_advisor),"a0EOj000003E0knMAC"===y&&(r.growers_number=e.coop_membership_number),"a0EOj000002FMGnMAO"!==y&&"a0EOj000002C7ivMAC"!==y||(r.national_identification_id=e.coop_membership_number),r}))),[se,I,y,C]),de=[{id:"num",name:"No.",selector:e=>e.num,sortable:!0},{id:"full_name",name:"Full Name",selector:e=>e.first_name+" "+e.last_name,sortable:!0},{id:"gender",name:"Gender",selector:e=>"m"===e.gender?"Male":"Female",sortable:!0},{id:"location",name:"Location",selector:e=>e.location,sortable:!0},{id:"tns_id",name:"TNS ID",selector:e=>e.tns_id,sortable:!0},{id:"training_group",name:"Training Group",selector:e=>e.training_group,sortable:!0},{id:"household_id",name:"HH Number",selector:e=>e.hh_number,sortable:!0},{id:"primary_household_member",name:"Primary HouseHold Member",selector:e=>(0,F.jsx)(r.A,{label:"1"===e.farmer_number?"1":"2",color:"1"===e.farmer_number?"success":"error",variant:"outlined",size:"small"}),sortable:!0},{id:"farmer_trainer",name:"Farmer Trainer",selector:e=>e.farmer_trainer,sortable:!0},{id:"business_advisor",name:"Business Advisor",selector:e=>e.business_advisor,sortable:!0}];return(0,F.jsxs)(s.A,{sx:{display:"flex",flexDirection:"column",gap:2},children:[(0,F.jsx)(a.A,{elevation:0,sx:{p:2.5,borderRadius:2,background:`linear-gradient(135deg, ${N} 0%, ${W} 100%)`,color:"#fff"},children:(0,F.jsxs)(s.A,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:2,flexWrap:"wrap"},children:[(0,F.jsxs)(s.A,{children:[(0,F.jsx)(o.A,{variant:"h5",sx:{fontWeight:800,lineHeight:1},children:"Registered Farmers"}),(0,F.jsxs)(o.A,{variant:"body2",sx:{opacity:.95},children:["Project:\xa0",(null===(v=I.find((e=>e.sf_project_id===y)))||void 0===v?void 0:v.project_name)||"\u2014"]})]}),(0,F.jsxs)(l.A,{direction:"row",spacing:1.5,alignItems:"center",children:[!U&&(0,F.jsx)(d.A,{variant:"contained",sx:{bgcolor:"#fff",color:N,"&:hover":{bgcolor:"#f3f4f6"}},onClick:re,disabled:R||0===M,children:R?"Sending...":`Send to CommCare (${M})`}),oe&&(0,F.jsx)(c.A,{title:"Upload New Participants",children:(0,F.jsx)(d.A,{onClick:()=>$(!0),startIcon:(0,F.jsx)(_.BzO,{}),sx:{color:"#fff",borderColor:"#fff",borderWidth:1,borderStyle:"solid","&:hover":{bgcolor:"rgba(255,255,255,0.12)"}},children:"Upload"})})]})]})}),(0,F.jsx)(a.A,{elevation:0,sx:{p:2.5,borderRadius:2,borderLeft:`4px solid ${U?W:N}`,bgcolor:U?"#f0f9fb":"#f5f7fb"},children:(0,F.jsxs)(l.A,{spacing:1.5,children:[(0,F.jsxs)(l.A,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,F.jsxs)(s.A,{children:[(0,F.jsx)(o.A,{variant:"subtitle1",sx:{fontWeight:800,color:N},children:U?"Salesforce Sync in Progress":"No Active Sync"}),(null===q||void 0===q?void 0:q.fileName)&&(0,F.jsxs)(l.A,{direction:"row",spacing:1,alignItems:"center",sx:{mt:.5},children:[(0,F.jsx)(g.gwM,{}),q.fileUrl?(0,F.jsx)(m.A,{href:`https://api.pima.ink${q.fileUrl}`,target:"_blank",rel:"noopener",underline:"hover",color:W,children:q.fileName}):(0,F.jsx)(o.A,{variant:"caption",color:"text.secondary",children:q.fileName})]})]}),(0,F.jsxs)(l.A,{direction:"row",spacing:1.5,children:[(0,F.jsx)(r.A,{size:"small",label:`Total: ${J.total}`,sx:{bgcolor:"#fff"},variant:"outlined"}),(0,F.jsx)(r.A,{size:"small",label:`Sent: ${J.sent}`,sx:{bgcolor:"#fff"},variant:"outlined"}),(0,F.jsx)(r.A,{size:"small",color:J.failed>0?"error":"default",label:`Failed: ${J.failed}`,variant:"outlined"}),(0,F.jsx)(r.A,{size:"small",label:`Left: ${J.leftToSend}`,sx:{bgcolor:"#fff"},variant:"outlined"})]})]}),(0,F.jsx)(s.A,{sx:{mt:.5},children:U?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(p.A,{variant:null!=L?"determinate":"indeterminate",value:null!==L&&void 0!==L?L:void 0,sx:{height:10,borderRadius:6}}),(0,F.jsxs)(s.A,{sx:{display:"flex",justifyContent:"space-between",mt:.5},children:[(0,F.jsx)(o.A,{variant:"caption",color:"text.secondary",children:null!=L?`${L}% complete`:"Working\u2026"}),(0,F.jsxs)(o.A,{variant:"caption",color:"text.secondary",children:["Started:"," ",null!==q&&void 0!==q&&q.startedAt?new Date(q.startedAt).toLocaleString():"\u2014"]})]})]}):(0,F.jsxs)(l.A,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,F.jsx)(o.A,{variant:"body2",color:"text.secondary",children:M>0?`You have ${M} participant${1===M?"":"s"} pending for CommCare.`:"All participants are already sent to CommCare."}),(0,F.jsxs)(l.A,{direction:"row",spacing:1,children:[(0,F.jsx)(d.A,{variant:"contained",onClick:re,disabled:R||0===M,sx:{bgcolor:W,"&:hover":{bgcolor:"#066d79"}},children:R?"Sending...":"Send to CommCare"}),(0,F.jsx)(d.A,{variant:"outlined",onClick:()=>Y(),sx:{color:N,borderColor:N},children:"Refresh"})]})]})}),U&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(u.Ay,{container:!0,spacing:1.5,sx:{mt:.5},children:D.map((e=>{const t=e.total?Math.round(e.sent/e.total*100):0;return(0,F.jsx)(u.Ay,{item:!0,xs:12,md:4,children:(0,F.jsxs)(a.A,{variant:"outlined",sx:{p:1.5,borderRadius:2,bgcolor:"#fff"},children:[(0,F.jsx)(o.A,{variant:"subtitle2",sx:{fontWeight:700,color:N},children:e.name}),(0,F.jsx)(p.A,{variant:"determinate",value:t,sx:{height:6,borderRadius:6,mt:1}}),(0,F.jsxs)(l.A,{direction:"row",spacing:2,sx:{mt:1},alignItems:"center",children:[(0,F.jsxs)(o.A,{variant:"caption",color:"text.secondary",children:[e.sent,"/",e.total," sent"]}),(0,F.jsx)(r.A,{size:"small",variant:"outlined",label:`Pending: ${e.pending+e.processing}`}),(0,F.jsx)(r.A,{size:"small",variant:"outlined",icon:e.failed>0?(0,F.jsx)(g.jDV,{}):null,color:e.failed>0?"error":"default",label:`Failed: ${e.failed}`})]})]})},e.key)}))}),(0,F.jsxs)(s.A,{children:[(0,F.jsxs)(l.A,{direction:"row",spacing:1,alignItems:"center",sx:{mt:1},children:[(0,F.jsx)(o.A,{variant:"subtitle2",sx:{fontWeight:700,color:N},children:"Failed Records (current upload)"}),(0,F.jsx)(r.A,{size:"small",color:V.length?"error":"default",label:V.length}),(0,F.jsx)(h.A,{size:"small",onClick:()=>G((e=>!e)),sx:{ml:-.5},children:H?(0,F.jsx)(g.h9I,{}):(0,F.jsx)(g.s_y,{})})]}),(0,F.jsx)(x.A,{in:H,unmountOnExit:!0,children:0===V.length?(0,F.jsx)(o.A,{variant:"body2",color:"text.secondary",sx:{mt:1},children:"No failed items for this upload."}):(0,F.jsxs)(s.A,{sx:{mt:1,border:"1px solid #e5e7eb",borderRadius:2,overflow:"hidden",bgcolor:"#fff"},children:[(0,F.jsxs)(s.A,{sx:{display:"grid",gridTemplateColumns:"120px 1fr 1fr",gap:1,py:1,px:1.5,bgcolor:"#f9fafb",borderBottom:"1px solid #e5e7eb"},children:[(0,F.jsx)(o.A,{variant:"caption",sx:{fontWeight:700,color:N},children:"Type"}),(0,F.jsx)(o.A,{variant:"caption",sx:{fontWeight:700,color:N},children:"Identifiers"}),(0,F.jsx)(o.A,{variant:"caption",sx:{fontWeight:700,color:N},children:"Error"})]}),V.slice(0,20).map((e=>(0,F.jsxs)(s.A,{sx:{display:"grid",gridTemplateColumns:"120px 1fr 1fr",gap:1,py:1,px:1.5,borderBottom:"1px solid #f1f5f9"},children:[(0,F.jsx)(o.A,{variant:"body2",sx:{textTransform:"capitalize"},children:e.type}),(0,F.jsxs)(o.A,{variant:"body2",color:"text.secondary",sx:{pr:2},children:["household"===e.type&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)("b",{children:"FFG:"})," ",e.ffgId||"\u2014"," \xa0 ",(0,F.jsx)("b",{children:"HH:"})," ",e.householdComposite||"\u2014"," \xa0 ",(0,F.jsx)("b",{children:"SF:"})," ",e.sfId||"\u2014"]}),"participant"===e.type&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)("b",{children:"TNS:"})," ",e.tnsId||"\u2014"," \xa0 ",(0,F.jsx)("b",{children:"FFG:"})," ",e.ffgId||"\u2014"," \xa0 ",(0,F.jsx)("b",{children:"HH:"})," ",e.householdComposite||"\u2014"]}),"attendance"===e.type&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)("b",{children:"FFG:"})," ",e.ffgId||"\u2014"," \xa0"," ",(0,F.jsx)("b",{children:"Module:"})," ",e.moduleId||"\u2014"," \xa0"," ",(0,F.jsx)("b",{children:"Part SF:"})," ",e.participantSalesforceId||"\u2014"," \xa0"," ",(0,F.jsx)("b",{children:"Part TNS:"})," ",e.participantTnsId||"\u2014"]})]}),(0,F.jsx)(o.A,{variant:"body2",sx:{color:"#b91c1c",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},title:e.lastError||"",children:e.lastError||"\u2014"})]},e.id))),V.length>20&&(0,F.jsx)(s.A,{sx:{py:1,textAlign:"center",bgcolor:"#f9fafb"},children:(0,F.jsxs)(o.A,{variant:"caption",color:"text.secondary",children:["Showing first 20 of ",V.length," failed rows"]})})]})})]})]})]})}),(0,F.jsxs)(a.A,{elevation:0,sx:{p:2.5,borderRadius:2,bgcolor:"rgba(8,124,143,0.06)"},children:[(0,F.jsxs)(l.A,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{mb:1},children:[(0,F.jsx)(o.A,{variant:"subtitle1",sx:{fontWeight:800,color:N},children:"Participants Table"}),(K||ee)&&(0,F.jsx)(s.A,{sx:{width:280},children:(0,F.jsx)(p.A,{})})]}),(0,F.jsx)(f.A,{sx:{mb:2}}),Z||te?(0,F.jsx)(s.A,{className:"no__data",children:(0,F.jsx)(o.A,{color:"error",children:(null===Z||void 0===Z?void 0:Z.message)||(null===te||void 0===te?void 0:te.message)})}):se.length>0?(0,F.jsx)(j.A,{columns:de,data:le,tableRowItem:"participants",allAttendances:ae,selectedProject:y}):(0,F.jsx)("div",{className:"no__data",children:(0,F.jsx)("h1",{style:{fontSize:18,color:N},children:"No Registered Farmers Yet"})})]}),(0,F.jsx)(O,{open:S,setOpen:$,navigatedProject:null===(A=I.find((e=>e.sf_project_id===y)))||void 0===A?void 0:A.project_name,sfProjectId:y})]})}},30589:(e,t,n)=>{n.d(t,{A:()=>g});var i=n(65043),r=n(73216),s=n(58786),a=n(67805),o=n(3438),l=n(85369),d=n(68926),c=n(11238),m=n(88250);const p=()=>{const e=new Date,t=Intl.DateTimeFormat().resolvedOptions().timeZone;return`${e.toLocaleDateString("en-US",{year:"numeric",month:"2-digit",day:"2-digit"})}_at_${e.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit",timeZone:t})}`};var u=n(45476),h=n(84548),x=n(70579);const f={rows:{style:{minHeight:"30px",cursor:"pointer"}},headCells:{style:{paddingLeft:"8px",paddingRight:"8px",backgroundColor:"#1b2a4e",color:"white"}},cells:{style:{paddingLeft:"5px",paddingRight:"5px",paddingTop:"5px",paddingBottom:"5px"}}},_=e=>{let{handleCSVExport:t,handleExcelExport:n,tableRowItem:i}=e;return(0,x.jsxs)("div",{className:"export-buttons",children:["trainsessionapprov"!==i&&(0,x.jsxs)(o.A,{variant:"outlined",sx:{color:"#1b2a4e",borderColor:"#1b2a4e"},onClick:t,children:[(0,x.jsx)(l.Mbn,{style:{marginRight:"5px"}})," CSV"]}),(0,x.jsxs)(o.A,{variant:"outlined",sx:{color:"#1b2a4e",borderColor:"#1b2a4e"},onClick:n,children:[(0,x.jsx)(l.Mbn,{style:{marginRight:"5px"}}),"trainsessionapprov"!==i?"Excel":"Download Report"]})]})},g=e=>{let{columns:t,data:n,filter:l,tableRowItem:g,allAttendances:j,selectedProject:b}=e;const v=g||window.location.pathname.split("/")[2],[A,y]=(0,i.useState)({ts_id:null}),[C,I]=(0,i.useState)(!1),[S,w]=(0,i.useState)(!1),[P,$]=(0,i.useState)(null),[k,F]=(0,i.useState)(""),[M,E]=(0,i.useState)([]),[R,O]=(0,i.useState)(!1),[B,z]=(0,i.useState)(null),N=(0,r.Zp)(),W=(0,m.I)(h.jq,{variables:{tsId:A&&A.ts_id?A.ts_id:""},skip:!A}),T="traingroup"===v?"mypima_training_group":"trainsession"===v?"mypima_training_session":"participants"===v?"Participants Data":"farmvisit"===v?"mypima_farm_visit":"mypima_attendance";(0,i.useEffect)((()=>{var e,t;W.loading||200!==(null===(e=W.data)||void 0===e||null===(t=e.trainingSessionImage)||void 0===t?void 0:t.status)||(w(!1),$(W.data.trainingSessionImage.trainingSessionImage))}),[W]);return(0,x.jsxs)("div",{children:[(0,x.jsxs)("div",{className:"table-header-actions "+(l?"":"no-filter"),children:[l&&(0,x.jsx)(o.A,{className:"filter-button",children:"Filter"}),(0,x.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"},children:[(0,x.jsxs)("div",{className:"search-container",children:[(0,x.jsx)("input",{type:"text",placeholder:"Search...",value:k,onChange:e=>{const i=e.target.value.toLowerCase(),r=n.filter((e=>t.some((t=>{const n=e[t.id];return null===n||void 0===n?void 0:n.toString().toLowerCase().includes(i)}))));E(r),F(e.target.value)}}),(0,x.jsx)("span",{className:"search-icon",children:(0,x.jsx)(a.LUJ,{})})]}),(0,x.jsx)(_,{handleCSVExport:()=>{if(!n||0===n.length)return void alert("No data available for export.");let e=[...t];if("farmvisit"===v){const t=[{id:"household_tns_id"},{id:"pima_farmer_id"},{id:"pima_household_id"}];e=[...e,...t]}const i=["num","Project","first_name","middle_name","last_name","gender","age","coffee_tree_numbers","number_of_coffee_plots","phone_number","a0EOj000002FMGnMAO"===b||"a0EOj000002C7ivMAC"===b?"national_identification_id":"a0EOj000003E0knMAC"===b?"growers_number":"coop_membership_number","location","farmer_sf_id","tns_id","hh_number","sf_household_id","farmer_number","ffg_id","training_group","status","farmer_trainer","a0EOj000003E0knMAC"===b?"agronomy_advisor":"business_advisor","create_in_commcare"];if("participants"===g){const e=new Map;j.filter((e=>n.some((t=>t.p_id===e.participant_id)))).forEach((t=>{const{attendance_status:n,participant_id:i,module_number:r,module_name:s,module_id:a}=t,o=`${r}-${s}-${a}`;e.has(o)||e.set(o,{});e.get(o)[i]="Present"===n?"1":"0"}));for(const[n]of e)i.push(n);const t=k.length>0?M.map((t=>{const n={...t};for(const[i,r]of e)n[i]=r[t.p_id]||"";return n})):n.map((t=>{const n={...t};for(const[i,r]of e)n[i]=r[t.p_id]||"";return n}));n=t}const r=n.map((e=>{let{tg_id:t,ts_id:n,p_id:i,attendance_id:r,fv_id:s,__typename:a,...o}=e;return o})),s=(0,d.df)({filename:T,columnHeaders:"participants"===g?i:e.map((e=>e.id))}),a=(0,d.Y_)(s)(r);a?(0,d.RG)(s)(a):console.error("Output is empty. Is your data formatted correctly?")},handleExcelExport:()=>{const e={header:t.map((e=>e.id)),body:n.map((e=>{let{tg_id:t,ts_id:n,p_id:i,attendance_id:r,fv_id:s,__typename:a,...o}=e;return Object.values(o)}))},i=n.reduce(((e,t)=>{let{farmer_trainer:n,session_image_status:i}=t;const r=`${n}_${i}`;return e[r]||(e[r]={farmer_trainer:n,session_image_status:i,count:0}),e[r].count+=1,e}),{}),r={header:["farmer_trainer","session_image_status","count"],body:Object.values(i).map((e=>Object.values(e)))},s=c.Wp.book_new(),a=c.Wp.json_to_sheet([e.header,...e.body],{skipHeader:!0}),o=c.Wp.json_to_sheet([r.header,...r.body],{skipHeader:!0});c.Wp.book_append_sheet(s,o,"Summary by Trainer"),c.Wp.book_append_sheet(s,a,"Sessions Data"),(0,c._h)(s,`${T}_${p()}.xlsx`)},tableRowItem:g})]})]}),(0,x.jsx)(s.Ay,{columns:t,data:k.length>0?M:n,onRowClicked:e=>{y(e);const t={trainsession:e.ts_id,traingroup:e.tg_id,participants:e.p_id,farmvisit:e.fv_ids,trainsessionapprov:e.ts_id}[g]||e.attendance_id;"farmvisit"!==g&&"trainsessionapprov"!==g?N(`/in/${g}/${t}`):"farmvisit"===g?(z(e.fv_id),O(!0)):"trainsessionapprov"===g&&(I(!0),w(!0))},pagination:!0,highlightOnHover:!0,customStyles:f,className:"table-container"}),C&&(0,x.jsx)(u.A,{open:C,handleClose:()=>I(!1),id:A.ts_id,data:A,isVerified:A.is_verified,imageStatus:A.session_image_status,sessionImageUrl:P,selectedProject:b,loading:S})]})}},45476:(e,t,n)=>{n.d(t,{A:()=>h});var i=n(65043),r=n(83462),s=n(17392),a=n(81637),o=n(94496),l=n(35316),d=n(68903),c=n(27149),m=n(34535),p=n(70579);const u=(0,m.Ay)("div")({position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.7)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center"}),h=e=>{let{open:t,handleClose:n,sessionImageUrl:m,data:h,selectedProject:x,loading:f}=e;console.log(h);const[_,g]=(0,i.useState)(!1),[j]=(0,i.useState)(!1),b=()=>{g((e=>!e))};return(0,p.jsx)(p.Fragment,{children:f?(0,p.jsxs)(r.A,{open:t,keepMounted:!0,fullWidth:!0,"aria-describedby":"alert-dialog-slide-description",children:[(0,p.jsx)("div",{style:{margin:"20px"},children:(0,p.jsx)(s.A,{"aria-label":"close",onClick:n,sx:{position:"absolute",right:8,top:8,color:"#2b2b2b"},children:(0,p.jsx)(c.m6K,{})})}),(0,p.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:[(0,p.jsx)(a.A,{}),(0,p.jsx)(o.A,{variant:"h6",style:{marginLeft:"10px"},children:"Loading Image..."})]})]}):(0,p.jsxs)(r.A,{open:t,keepMounted:!0,fullWidth:!0,"aria-describedby":"alert-dialog-slide-description",children:[j&&(0,p.jsx)(u,{children:(0,p.jsx)(a.A,{})}),(0,p.jsxs)("div",{style:{margin:"20px"},children:[(0,p.jsx)(s.A,{"aria-label":"close",onClick:n,sx:{position:"absolute",right:8,top:8,color:"#2b2b2b"},children:(0,p.jsx)(c.m6K,{})}),(0,p.jsx)(o.A,{variant:"h6",children:"Session Image"})]}),(0,p.jsx)(l.A,{children:(0,p.jsxs)(d.Ay,{container:!0,spacing:2,children:[(0,p.jsxs)(d.Ay,{item:!0,xs:12,sm:6,children:[(0,p.jsxs)(o.A,{variant:"body1",children:[(0,p.jsx)("strong",{children:"Male Attendees:"})," ",h.total_males]}),(0,p.jsxs)(o.A,{variant:"body1",children:[(0,p.jsx)("strong",{children:"Female Attendees:"})," ",h.total_females]}),(0,p.jsxs)(o.A,{variant:"body1",children:[(0,p.jsx)("strong",{children:"Total Attendees:"})," ",h.total_males+h.total_females]}),(0,p.jsxs)(o.A,{variant:"body1",children:[(0,p.jsx)("strong",{children:"Session Date:"})," ",h.session_date]}),(0,p.jsxs)(o.A,{variant:"body1",children:[(0,p.jsx)("strong",{children:"Farmer Trainer:"})," ",h.farmer_trainer]}),(0,p.jsxs)(o.A,{variant:"body1",children:[(0,p.jsx)("strong",{children:"Session Module:"})," ",h.ts_module]}),(0,p.jsxs)(o.A,{variant:"body1",children:[(0,p.jsx)("strong",{children:"FFG:"})," ",h.ts_group]})]}),(0,p.jsx)(d.Ay,{item:!0,xs:12,sm:6,children:(0,p.jsxs)("div",{style:{position:"relative"},children:[(0,p.jsx)("img",{src:m,alt:"session_pic",style:{width:"100%",height:"auto",cursor:_?"zoom-out":"zoom-in"},onClick:b}),_?(0,p.jsx)(s.A,{"aria-label":"shrink",onClick:b,sx:{position:"absolute",bottom:8,right:8,color:"#fff"},children:(0,p.jsx)(c.Llp,{})}):(0,p.jsx)(s.A,{"aria-label":"expand",onClick:b,sx:{position:"absolute",bottom:8,right:8,color:"#fff"},children:(0,p.jsx)(c.T$Z,{})})]})})]})})]})})}},47927:()=>{},62257:(e,t,n)=>{n.d(t,{Cv:()=>d,Hv:()=>a,Jm:()=>o,Oy:()=>r,dX:()=>l,s0:()=>s});var i=n(70459);i.J1`
  query GetParticipantsAttendanceByProject($projectId: String!) {
    getParticipantsByProject(project_id: $projectId) {
      message
      status
      participants {
        p_id
        first_name
        middle_name
        last_name
        gender
        age
        coffee_tree_numbers
        coop_membership_number
        phone_number
        hh_number
        ffg_id
        location
        tns_id
        status
        farmer_trainer
        business_advisor
        project_name
        training_group
        household_id
        primary_household_member
        create_in_commcare
      }
    }
    getAttendances(project_id: $projectId) {
      message
      status
      attendance {
        attendance_id
        participant_id
        attendance_name
        attendance_date
        attendance_status
        session_id
        module_name
        module_number
        module_id
      }
    }
  }
`;const r=i.J1`
  query GetParticipantsAttendanceByProject($projectId: String!) {
    getParticipantsByProject(project_id: $projectId) {
      message
      status
      participants {
        p_id
        first_name
        middle_name
        last_name
        gender
        age
        coffee_tree_numbers
        number_of_coffee_plots
        coop_membership_number
        phone_number
        hh_number
        ffg_id
        location
        tns_id
        status
        farmer_trainer
        business_advisor
        project_name
        training_group
        household_id
        primary_household_member
        create_in_commcare
      }
    }
  }
`,s=i.J1`
  query GetParticipantsByGroup($tgId: String!) {
    getParticipantsByGroup(tg_id: $tgId) {
      message
      status
      participants {
        p_id
        first_name
        middle_name
        last_name
        gender
        location
        tns_id
        status
        farmer_trainer
        business_advisor
        project_name
        training_group
        household_id
        primary_household_member
      }
    }
  }
`,a=i.J1`
  query GetParticipantsById($id: String!) {
    getParticipantsById(p_id: $id) {
      message
      status
      participant {
        p_id
        first_name
        middle_name
        last_name
        gender
        location
        tns_id
        status
        farmer_trainer
        business_advisor
        project_name
        training_group
        household_id
        primary_household_member
      }
    }
  }
`,o=i.J1`
  query GetAttendanceByParticipant($participantId: String!) {
    getAttendanceByParticipant(participant_id: $participantId) {
      message
      status
      attendance {
        attendance_id
        participant_id
        attendance_name
        attendance_date
        attendance_status
        module_name
        session_id
      }
    }
  }
`,l=i.J1`
  mutation UploadParticipants($partsFile: Upload!, $projectId: String!) {
    uploadParticipants(parts_file: $partsFile, project_id: $projectId) {
      message
      status
      file
    }
  }
`,d=i.J1`
  mutation SyncParticipantsWithCOMMCARE($projectId: String!) {
    syncParticipantsWithCOMMCARE(project_id: $projectId) {
      message
      status
    }
  }
`}}]);
//# sourceMappingURL=557.4b1108c2.chunk.js.map