"use strict";(self.webpackChunkmypima_front=self.webpackChunkmypima_front||[]).push([[157],{30589:(e,t,a)=>{a.d(t,{A:()=>x});var n=a(65043),i=a(73216),s=a(58786),r=a(67805),o=a(3438),l=a(85369),d=a(68926),c=a(11238),m=a(88250);const p=()=>{const e=new Date,t=Intl.DateTimeFormat().resolvedOptions().timeZone;return`${e.toLocaleDateString("en-US",{year:"numeric",month:"2-digit",day:"2-digit"})}_at_${e.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit",timeZone:t})}`};var _=a(45476),u=a(84548),h=a(70579);const f={rows:{style:{minHeight:"30px",cursor:"pointer"}},headCells:{style:{paddingLeft:"8px",paddingRight:"8px",backgroundColor:"#1b2a4e",color:"white"}},cells:{style:{paddingLeft:"5px",paddingRight:"5px",paddingTop:"5px",paddingBottom:"5px"}}},g=e=>{let{handleCSVExport:t,handleExcelExport:a,tableRowItem:n}=e;return(0,h.jsxs)("div",{className:"export-buttons",children:["trainsessionapprov"!==n&&(0,h.jsxs)(o.A,{variant:"outlined",sx:{color:"#1b2a4e",borderColor:"#1b2a4e"},onClick:t,children:[(0,h.jsx)(l.Mbn,{style:{marginRight:"5px"}})," CSV"]}),(0,h.jsxs)(o.A,{variant:"outlined",sx:{color:"#1b2a4e",borderColor:"#1b2a4e"},onClick:a,children:[(0,h.jsx)(l.Mbn,{style:{marginRight:"5px"}}),"trainsessionapprov"!==n?"Excel":"Download Report"]})]})},x=e=>{let{columns:t,data:a,filter:l,tableRowItem:x,allAttendances:j,selectedProject:b}=e;const v=x||window.location.pathname.split("/")[2],[y,A]=(0,n.useState)({ts_id:null}),[C,S]=(0,n.useState)(!1),[w,I]=(0,n.useState)(!1),[P,k]=(0,n.useState)(null),[$,N]=(0,n.useState)(""),[O,B]=(0,n.useState)([]),[F,E]=(0,n.useState)(!1),[M,D]=(0,n.useState)(null),R=(0,i.Zp)(),T=(0,m.I)(u.jq,{variables:{tsId:y&&y.ts_id?y.ts_id:""},skip:!y}),z="traingroup"===v?"mypima_training_group":"trainsession"===v?"mypima_training_session":"participants"===v?"Participants Data":"farmvisit"===v?"mypima_farm_visit":"mypima_attendance";(0,n.useEffect)((()=>{var e,t;T.loading||200!==(null===(e=T.data)||void 0===e||null===(t=e.trainingSessionImage)||void 0===t?void 0:t.status)||(I(!1),k(T.data.trainingSessionImage.trainingSessionImage))}),[T]);return(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",{className:"table-header-actions "+(l?"":"no-filter"),children:[l&&(0,h.jsx)(o.A,{className:"filter-button",children:"Filter"}),(0,h.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"},children:[(0,h.jsxs)("div",{className:"search-container",children:[(0,h.jsx)("input",{type:"text",placeholder:"Search...",value:$,onChange:e=>{const n=e.target.value.toLowerCase(),i=a.filter((e=>t.some((t=>{const a=e[t.id];return null===a||void 0===a?void 0:a.toString().toLowerCase().includes(n)}))));B(i),N(e.target.value)}}),(0,h.jsx)("span",{className:"search-icon",children:(0,h.jsx)(r.LUJ,{})})]}),(0,h.jsx)(g,{handleCSVExport:()=>{if(!a||0===a.length)return void alert("No data available for export.");let e=[...t];if("farmvisit"===v){const t=[{id:"household_tns_id"},{id:"pima_farmer_id"},{id:"pima_household_id"}];e=[...e,...t]}const n=["num","Project","first_name","middle_name","last_name","gender","age","coffee_tree_numbers","number_of_coffee_plots","phone_number","a0EOj000002FMGnMAO"===b||"a0EOj000002C7ivMAC"===b?"national_identification_id":"a0EOj000003E0knMAC"===b?"growers_number":"coop_membership_number","location","farmer_sf_id","tns_id","hh_number","sf_household_id","farmer_number","ffg_id","training_group","status","farmer_trainer","a0EOj000003E0knMAC"===b?"agronomy_advisor":"business_advisor","create_in_commcare"];if("participants"===x){const e=new Map;j.filter((e=>a.some((t=>t.p_id===e.participant_id)))).forEach((t=>{const{attendance_status:a,participant_id:n,module_number:i,module_name:s,module_id:r}=t,o=`${i}-${s}-${r}`;e.has(o)||e.set(o,{});e.get(o)[n]="Present"===a?"1":"0"}));for(const[a]of e)n.push(a);const t=$.length>0?O.map((t=>{const a={...t};for(const[n,i]of e)a[n]=i[t.p_id]||"";return a})):a.map((t=>{const a={...t};for(const[n,i]of e)a[n]=i[t.p_id]||"";return a}));a=t}const i=a.map((e=>{let{tg_id:t,ts_id:a,p_id:n,attendance_id:i,fv_id:s,__typename:r,...o}=e;return o})),s=(0,d.df)({filename:z,columnHeaders:"participants"===x?n:e.map((e=>e.id))}),r=(0,d.Y_)(s)(i);r?((0,d.RG)(s)(r),console.log("Download successful"),console.log("Config:",s),console.log("Data:",a),console.log("CSV Content:",r)):console.error("Output is empty. Is your data formatted correctly?")},handleExcelExport:()=>{const e={header:t.map((e=>e.id)),body:a.map((e=>{let{tg_id:t,ts_id:a,p_id:n,attendance_id:i,fv_id:s,__typename:r,...o}=e;return Object.values(o)}))},n=a.reduce(((e,t)=>{let{farmer_trainer:a,session_image_status:n}=t;const i=`${a}_${n}`;return e[i]||(e[i]={farmer_trainer:a,session_image_status:n,count:0}),e[i].count+=1,e}),{}),i={header:["farmer_trainer","session_image_status","count"],body:Object.values(n).map((e=>Object.values(e)))},s=c.Wp.book_new(),r=c.Wp.json_to_sheet([e.header,...e.body],{skipHeader:!0}),o=c.Wp.json_to_sheet([i.header,...i.body],{skipHeader:!0});c.Wp.book_append_sheet(s,o,"Summary by Trainer"),c.Wp.book_append_sheet(s,r,"Sessions Data"),(0,c._h)(s,`${z}_${p()}.xlsx`)},tableRowItem:x})]})]}),(0,h.jsx)(s.Ay,{columns:t,data:$.length>0?O:a,onRowClicked:e=>{A(e);const t={trainsession:e.ts_id,traingroup:e.tg_id,participants:e.p_id,farmvisit:e.fv_ids,trainsessionapprov:e.ts_id}[x]||e.attendance_id;"farmvisit"!==x&&"trainsessionapprov"!==x?R(`/in/${x}/${t}`):"farmvisit"===x?(D(e.fv_id),E(!0)):"trainsessionapprov"===x&&(S(!0),I(!0))},pagination:!0,highlightOnHover:!0,customStyles:f,className:"table-container"}),C&&(0,h.jsx)(_.A,{open:C,handleClose:()=>S(!1),id:y.ts_id,data:y,isVerified:y.is_verified,imageStatus:y.session_image_status,sessionImageUrl:P,selectedProject:b,loading:w})]})}},43157:(e,t,a)=>{a.r(t),a.d(t,{default:()=>P});var n=a(65043),i=a(43845),s=a(30589),r=a(85369),o=a(7353),l=a(94496),d=a(14194),c=a(3438),m=a(83462),p=a(35316),_=a(29347),u=a(83827),h=a(41434),f=a(67805),g=a(31881),x=a(88250),j=a(72450),b=a(62257),v=a(70579);const y=["Project","first_name","last_name","gender","age","coffee_tree_numbers","farmer_sf_id","tns_id","hh_number","sf_household_id","farmer_number","ffg_id","training_group","status"],A=e=>{let{open:t,setOpen:a,navigatedProject:s,sfProjectId:A}=e;const[C,S]=(0,n.useState)(null),[w,I]=(0,n.useState)(null),[P,k]=(0,n.useState)([]),[$,N]=(0,n.useState)([]),[O,B]=(0,n.useState)(null),[F,E]=(0,n.useState)(!1),[M]=(0,g.n)(b.dX),D=(0,x.I)(b.Oy,{variables:{projectId:A}}),R=e=>{const t=new FileReader;t.onload=t=>{const a=t.target.result.split(/\r\n|\n/),n=a.map((e=>e.split(",").map((e=>e.replace(/^"(.*)"$/,"$1")))));S({filename:e.name,size:e.size,type:e.type,data:n.length>0?n:a}),k(n[0])},t.readAsText(e)};(0,n.useEffect)((()=>{C&&(C.data&&C.data.length<2||T(C))}),[C,P]);const T=e=>{const t=e.data.map((e=>e[P.indexOf("Project")])).filter((e=>e));N([...new Set(t)])},z=(e,t)=>{"backdropClick"!==t&&"escapeKeyDown"!==t&&G()},G=()=>{S(null),a(!1)},H=(e,t,a)=>{const n=t.indexOf("Project"),i=e.data.filter((e=>e[n]===a)),s=`${t.join(",")}\n${i.join("\n")}`;return new File([s],e.filename,{type:"text/csv"})},U=async e=>{try{const t=await M({variables:{partsFile:e}});await D.refetch(),B(t.data.uploadParticipants),200===t.data.uploadParticipants.status&&setTimeout((()=>{window.location.reload()}),5e3)}catch(t){console.error(t),B({status:500,message:"Something went wrong. Please try again."})}finally{E(!1)}},L=()=>{const{file:e,message:t}=O;if(e){const t=atob(e),a=new Array(t.length).fill().map(((e,a)=>t.charCodeAt(a))),n=new Uint8Array(a),i=new Blob([n],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,j.saveAs)(i,"error_file.xlsx")}else console.error("No file found in the upload result.")},J=e=>e>1e6?`${(e/1e6).toFixed(2)} MB`:`${(e/1e3).toFixed(2)} KB`,W=e=>e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return(0,v.jsxs)(m.A,{open:t,onClose:z,children:[(0,v.jsx)(p.A,{children:C?O?(0,v.jsxs)(o.A,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},className:"file-info",children:[(0,v.jsx)(l.A,{variant:"body2",children:(0,v.jsx)(d.A,{severity:200===O.status?"success":"error",children:O.message})}),200!==O.status&&O.file&&(0,v.jsx)(c.A,{onClick:L,variant:"contained",color:"primary",children:"Download Error File"})]}):P.filter((e=>y.includes(e))).length!==y.length?(0,v.jsxs)(o.A,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,v.jsxs)(l.A,{variant:"body1",children:[(0,v.jsx)(f.rdI,{style:{fontSize:"2rem",color:"#B90101"}})," File must contain all required columns:"]}),(0,v.jsx)(l.A,{variant:"body2",sx:{display:"flex",alignItems:"center",flexWrap:"wrap"},children:y.filter((e=>!P.includes(e))).map(((e,t)=>(0,v.jsx)(i.A,{label:e,sx:{margin:"5px 0.5rem"},color:"primary",variant:"outlined"},t)))}),(0,v.jsx)("div",{className:"upload_actions",children:(0,v.jsx)(h.XfH,{onClick:()=>S(null),className:"back__icon",title:"Back to Upload New File"})})]}):C.data.length-2<1?(0,v.jsxs)(o.A,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,v.jsxs)(l.A,{variant:"body1",sx:{fontStyle:"italic"},children:[(0,v.jsx)(f.rdI,{style:{fontSize:"1.5rem",color:"#B90101"}})," There are no records in the file. Please upload a file with data."]}),(0,v.jsx)("div",{className:"upload_actions",children:(0,v.jsx)(h.XfH,{onClick:()=>S(null),className:"back__icon",title:"Back to Upload New File"})})]}):$.includes(s)?(0,v.jsxs)(o.A,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},className:"file-info",children:[(0,v.jsxs)(o.A,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,v.jsxs)(l.A,{variant:"body2",children:[(0,v.jsx)("strong",{children:"Name:"})," ",C.filename]}),(0,v.jsxs)(l.A,{variant:"body2",children:[(0,v.jsx)("strong",{children:"Size:"})," ",J(C.size)]}),(0,v.jsxs)(l.A,{variant:"body2",children:[(0,v.jsx)("strong",{children:"Type:"})," ",C.type]}),(0,v.jsxs)(l.A,{variant:"body2",children:[(0,v.jsx)("strong",{children:"Total Records:"})," ",W(C.data.length-2)]}),$.length>1&&(0,v.jsxs)(l.A,{variant:"body4",sx:{marginBottom:"10px"},children:["Only records for ",(0,v.jsxs)("strong",{children:[s," (",C.data.filter((e=>e[P.indexOf("Project")]===s)).length," records)"]})," will be processed from this file."]})]}),(0,v.jsx)("div",{className:"upload_actions",children:F?(0,v.jsx)(l.A,{variant:"body2",sx:{marginBottom:"10px",width:"100%",textAlign:"center"},children:(0,v.jsx)("em",{style:{fontWeight:"bold",color:"#6C757D"},children:"Data are being processed, wait..."})}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(h.XfH,{onClick:()=>S(null),className:"back__icon",title:"Back to Upload New File"}),(0,v.jsx)(r.BzO,{title:"Proceed Records Processing",className:"upload__icon",onClick:async()=>{if(F)return;E(!0),B(null);const e=H(C,P,s);await U(e)}})]})})]}):(0,v.jsxs)(o.A,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,v.jsxs)(l.A,{variant:"body1",sx:{fontStyle:"italic"},children:[(0,v.jsx)(f.rdI,{style:{fontSize:"3rem",color:"#B90101"}})," The project(s) in the file does not match the project you are currently navigating. Please upload a file with the correct project."]}),(0,v.jsx)("div",{className:"upload_actions",children:(0,v.jsx)(h.XfH,{onClick:()=>S(null),className:"back__icon",title:"Back to Upload New File"})})]}):(0,v.jsx)(u.l,{label:"Drag and drop or browse a file to upload. File must be: ",handleChange:e=>{I(e),B(null),R(e)},name:"file",types:["csv"]})}),(0,v.jsx)(_.A,{children:(0,v.jsx)(c.A,{onClick:z,disabled:F,children:"Cancel"})})]})};const C=a(70459).J1`
  query GetAttendances($projectId: String!, $limit: Int, $offset: Int) {
    getAttendances(project_id: $projectId, limit: $limit, offset: $offset) {
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
`;var S=a(45421),w=a(68903),I=a(73216);const P=()=>{const{activeProject:e,trainingGroups:t,projects:a}=(0,I.KC)(),[o,l]=(0,n.useState)(!1),[d,c]=(0,n.useState)(),[m,p]=(0,n.useState)(!1),{data:_,loading:u,error:h,refetch:f}=(0,x.I)(b.Oy,{variables:{projectId:e},skip:!e}),[j,y]=(0,n.useState)([]),[P,k]=(0,n.useState)(!0),[$,N]=(0,n.useState)(null),{fetchMore:O}=(0,x.I)(C,{variables:{projectId:e,limit:35e3,offset:0},skip:!e,notifyOnNetworkStatusChange:!0});(0,n.useEffect)((()=>{(async()=>{if(e)try{var t;k(!0),N(null);const a=35e3;let n=0,i=[];const{data:s}=await O({variables:{projectId:e,limit:a,offset:n}}),r=(null===s||void 0===s||null===(t=s.getAttendances)||void 0===t?void 0:t.attendance)||[];if(i=[...r],r.length<a)return y(i),k(!1);n+=a;const o=10;let l=!0;for(;l;){const t=[];for(let i=0;i<o;i++){const s=n+i*a,r=O({variables:{projectId:e,limit:a,offset:s}}).then((e=>{var t,a;return{chunk:(null===e||void 0===e||null===(t=e.data)||void 0===t||null===(a=t.getAttendances)||void 0===a?void 0:a.attendance)||[],currentOffset:s}}));t.push(r)}const s=await Promise.all(t);for(let e of s)e.chunk.length>0&&(i=[...i,...e.chunk]),e.chunk.length<a&&(l=!1);n+=o*a}y(i)}catch(a){console.error("Parallel attendance fetch error:",a),N(a)}finally{k(!1)}})()}),[e,O]);const[B]=(0,g.n)(b.Cv),F=JSON.parse(window.localStorage.getItem("myPimaUserData"));(0,n.useEffect)((()=>{if(_&&200===_.getParticipantsByProject.status){const e=_.getParticipantsByProject.participants.filter((e=>"false"===e.create_in_commcare));c(e.length)}}),[_]);if(u||P)return(0,v.jsxs)(w.Ay,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",style:{height:"100vh"},children:[(0,v.jsx)(S.A,{color:"#0D3C61",size:15}),(0,v.jsx)("em",{style:{color:"#0D3C61"},children:"Loading Participants and Attendances..."})]});if(h||$)return(0,v.jsx)(w.Ay,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",style:{height:"100vh"},children:(0,v.jsxs)("em",{style:{color:"red"},children:["Error loading data:"," ",(null===h||void 0===h?void 0:h.message)||(null===$||void 0===$?void 0:$.message)]})});const E=_.getParticipantsByProject.participants,M=[{id:"num",name:"No.",selector:e=>e.num,sortable:!0},{id:"full_name",name:"Full Name",selector:e=>e.first_name+" "+e.last_name,sortable:!0},{id:"gender",name:"Gender",selector:e=>"m"===e.gender?"Male":"Female",sortable:!0},{id:"location",name:"Location",selector:e=>e.location,sortable:!0},{id:"tns_id",name:"TNS ID",selector:e=>e.tns_id,sortable:!0},{id:"training_group",name:"Training Group",selector:e=>e.training_group,sortable:!0},{id:"household_id",name:"HH Number",selector:e=>e.hh_number,sortable:!0},{id:"primary_household_member",name:"Primary HouseHold Member",selector:e=>(0,v.jsx)("div",{children:"1"===e.farmer_number?(0,v.jsx)(i.A,{label:"1",color:"success",variant:"outlined"}):(0,v.jsx)(i.A,{label:"2",color:"error",variant:"outlined"})}),sortable:!0},{id:"farmer_trainer",name:"Farmer Trainer",selector:e=>e.farmer_trainer,sortable:!0},{id:"business_advisor",name:"Business Advisor",selector:e=>e.business_advisor,sortable:!0}],D=E.map(((n,i)=>{var s;const r={num:i+1,Project:a.find((t=>t.sf_project_id===e)).project_name,p_id:n.p_id,first_name:n.first_name,middle_name:n.middle_name?n.middle_name:"",last_name:n.last_name?n.last_name:"",gender:n.gender,age:n.age,coffee_tree_numbers:n.coffee_tree_numbers,phone_number:n.phone_number,farmer_sf_id:n.p_id,hh_number:n.hh_number,sf_household_id:n.household_id,ffg_id:n.ffg_id,location:n.location,tns_id:n.tns_id,training_group:t&&t.length>0&&(null===(s=t.find((e=>e.tg_id===n.training_group)))||void 0===s?void 0:s.tg_name)||"N/A",farmer_number:n.primary_household_member,status:n.status,farmer_trainer:n.farmer_trainer,create_in_commcare:n.create_in_commcare,number_of_coffee_plots:n.number_of_coffee_plots};return"a0EOj000003E0knMAC"===e?r.agronomy_advisor=n.business_advisor:r.business_advisor=n.business_advisor,"a0EOj000002FMGnMAO"===e||"a0EOj000002C7ivMAC"===e?r.national_identification_id=n.coop_membership_number?n.coop_membership_number:"":"a0EOj000003E0knMAC"===e?r.growers_number=n.coop_membership_number?n.coop_membership_number:"":r.coop_membership_number=n.coop_membership_number?n.coop_membership_number:"",r}));return(0,v.jsxs)("div",{children:[d>0&&(0,v.jsxs)("div",{className:"active-participants-dialog",children:[(0,v.jsxs)("p",{children:["You currently have ",(0,v.jsx)("strong",{children:d})," participants who have not been sent to CommCare. Please download the participant list, review the database, and ensure all information is verified before syncing with CommCare."]}),(0,v.jsx)("button",{className:"take-action-button",onClick:()=>(async()=>{p(!0);try{await B({variables:{projectId:e}}),await f(),p(!1)}catch(t){console.log(t),p(!1)}})(),disabled:m,children:m?"Processing...":"Send to Commcare"})]}),(0,v.jsxs)("div",{className:"flex__heading",children:[(0,v.jsx)("h1",{className:"module__heading",children:"Registered Farmers View"})," ",("super_admin"===(null===F||void 0===F?void 0:F.role)||"ci_leadership"===(null===F||void 0===F?void 0:F.role)||"senior_business_advisor"===(null===F||void 0===F?void 0:F.role)||"project_manager"===(null===F||void 0===F?void 0:F.role)||"mel_analyst"===(null===F||void 0===F?void 0:F.role))&&(0,v.jsx)(r.BzO,{title:"Upload New Participants",style:{fontSize:"30px",cursor:"pointer",marginLeft:"10px",fill:"#00A5A3"},onClick:()=>l(!0)})," "]}),E.length>0?(0,v.jsx)(s.A,{columns:M,data:D,tableRowItem:"participants",allAttendances:j,selectedProject:e}):(0,v.jsx)("div",{className:"no__data",children:(0,v.jsx)("h1",{style:{fontSize:"20px"},children:"No Registered Farmers Yet"})}),(0,v.jsx)(A,{open:o,setOpen:l,navigatedProject:a.find((t=>t.sf_project_id===e)).project_name,sfProjectId:e})]})}},45476:(e,t,a)=>{a.d(t,{A:()=>u});var n=a(65043),i=a(83462),s=a(17392),r=a(81637),o=a(94496),l=a(35316),d=a(68903),c=a(27149),m=a(34535),p=a(70579);const _=(0,m.Ay)("div")({position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.7)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center"}),u=e=>{let{open:t,handleClose:a,sessionImageUrl:m,data:u,selectedProject:h,loading:f}=e;console.log(u);const[g,x]=(0,n.useState)(!1),[j]=(0,n.useState)(!1),b=()=>{x((e=>!e))};return(0,p.jsx)(p.Fragment,{children:f?(0,p.jsxs)(i.A,{open:t,keepMounted:!0,fullWidth:!0,"aria-describedby":"alert-dialog-slide-description",children:[(0,p.jsx)("div",{style:{margin:"20px"},children:(0,p.jsx)(s.A,{"aria-label":"close",onClick:a,sx:{position:"absolute",right:8,top:8,color:"#2b2b2b"},children:(0,p.jsx)(c.m6K,{})})}),(0,p.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:[(0,p.jsx)(r.A,{}),(0,p.jsx)(o.A,{variant:"h6",style:{marginLeft:"10px"},children:"Loading Image..."})]})]}):(0,p.jsxs)(i.A,{open:t,keepMounted:!0,fullWidth:!0,"aria-describedby":"alert-dialog-slide-description",children:[j&&(0,p.jsx)(_,{children:(0,p.jsx)(r.A,{})}),(0,p.jsxs)("div",{style:{margin:"20px"},children:[(0,p.jsx)(s.A,{"aria-label":"close",onClick:a,sx:{position:"absolute",right:8,top:8,color:"#2b2b2b"},children:(0,p.jsx)(c.m6K,{})}),(0,p.jsx)(o.A,{variant:"h6",children:"Session Image"})]}),(0,p.jsx)(l.A,{children:(0,p.jsxs)(d.Ay,{container:!0,spacing:2,children:[(0,p.jsxs)(d.Ay,{item:!0,xs:12,sm:6,children:[(0,p.jsxs)(o.A,{variant:"body1",children:[(0,p.jsx)("strong",{children:"Male Attendees:"})," ",u.total_males]}),(0,p.jsxs)(o.A,{variant:"body1",children:[(0,p.jsx)("strong",{children:"Female Attendees:"})," ",u.total_females]}),(0,p.jsxs)(o.A,{variant:"body1",children:[(0,p.jsx)("strong",{children:"Total Attendees:"})," ",u.total_males+u.total_females]}),(0,p.jsxs)(o.A,{variant:"body1",children:[(0,p.jsx)("strong",{children:"Session Date:"})," ",u.session_date]}),(0,p.jsxs)(o.A,{variant:"body1",children:[(0,p.jsx)("strong",{children:"Farmer Trainer:"})," ",u.farmer_trainer]}),(0,p.jsxs)(o.A,{variant:"body1",children:[(0,p.jsx)("strong",{children:"Session Module:"})," ",u.ts_module]}),(0,p.jsxs)(o.A,{variant:"body1",children:[(0,p.jsx)("strong",{children:"FFG:"})," ",u.ts_group]})]}),(0,p.jsx)(d.Ay,{item:!0,xs:12,sm:6,children:(0,p.jsxs)("div",{style:{position:"relative"},children:[(0,p.jsx)("img",{src:m,alt:"session_pic",style:{width:"100%",height:"auto",cursor:g?"zoom-out":"zoom-in"},onClick:b}),g?(0,p.jsx)(s.A,{"aria-label":"shrink",onClick:b,sx:{position:"absolute",bottom:8,right:8,color:"#fff"},children:(0,p.jsx)(c.Llp,{})}):(0,p.jsx)(s.A,{"aria-label":"expand",onClick:b,sx:{position:"absolute",bottom:8,right:8,color:"#fff"},children:(0,p.jsx)(c.T$Z,{})})]})})]})})]})})}},62257:(e,t,a)=>{a.d(t,{Cv:()=>d,Hv:()=>r,Jm:()=>o,Oy:()=>i,dX:()=>l,s0:()=>s});var n=a(70459);n.J1`
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
`;const i=n.J1`
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
`,s=n.J1`
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
`,r=n.J1`
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
`,o=n.J1`
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
`,l=n.J1`
  mutation UploadParticipants($partsFile: Upload!) {
    uploadParticipants(parts_file: $partsFile) {
      message
      status
      file
    }
  }
`,d=n.J1`
  mutation SyncParticipantsWithCOMMCARE($projectId: String!) {
    syncParticipantsWithCOMMCARE(project_id: $projectId) {
      message
      status
    }
  }
`}}]);
//# sourceMappingURL=157.e4981728.chunk.js.map