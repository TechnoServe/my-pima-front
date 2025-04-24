"use strict";(self.webpackChunkmypima_front=self.webpackChunkmypima_front||[]).push([[862],{31873:(e,t,a)=>{a.r(t),a.d(t,{default:()=>C});var n=a(65043),i=a(43845),r=a(2855),s=a(85369),o=a(7353),l=a(94496),c=a(14194),d=a(3438),m=a(83462),_=a(35316),u=a(29347),p=a(83827),f=a(41434),h=a(67805),g=a(31881),j=a(88250),b=a(72450),x=a(62257),y=a(70579);const v=["Project","first_name","last_name","gender","age","coffee_tree_numbers","farmer_sf_id","tns_id","hh_number","sf_household_id","farmer_number","ffg_id","training_group","status"],A=e=>{let{open:t,setOpen:a,navigatedProject:r,sfProjectId:A}=e;const[P,w]=(0,n.useState)(null),[I,C]=(0,n.useState)(null),[S,k]=(0,n.useState)([]),[N,B]=(0,n.useState)([]),[$,F]=(0,n.useState)(null),[O,D]=(0,n.useState)(!1),[E]=(0,g.n)(x.dX),M=(0,j.I)(x.Oy,{variables:{projectId:A}}),z=e=>{const t=new FileReader;t.onload=t=>{const a=t.target.result.split(/\r\n|\n/),n=a.map((e=>e.split(",").map((e=>e.replace(/^"(.*)"$/,"$1")))));w({filename:e.name,size:e.size,type:e.type,data:n.length>0?n:a}),k(n[0])},t.readAsText(e)};(0,n.useEffect)((()=>{P&&(P.data&&P.data.length<2||G(P))}),[P,S]);const G=e=>{const t=e.data.map((e=>e[S.indexOf("Project")])).filter((e=>e));B([...new Set(t)])},J=(e,t)=>{"backdropClick"!==t&&"escapeKeyDown"!==t&&H()},H=()=>{w(null),a(!1)},T=(e,t,a)=>{const n=t.indexOf("Project"),i=e.data.filter((e=>e[n]===a)),r=`${t.join(",")}\n${i.join("\n")}`;return new File([r],e.filename,{type:"text/csv"})},U=async e=>{try{const t=await E({variables:{partsFile:e}});await M.refetch(),F(t.data.uploadParticipants),200===t.data.uploadParticipants.status&&setTimeout((()=>{window.location.reload()}),5e3)}catch(t){console.error(t),F({status:500,message:"Something went wrong. Please try again."})}finally{D(!1)}},R=()=>{const{file:e,message:t}=$;if(e){const t=atob(e),a=new Array(t.length).fill().map(((e,a)=>t.charCodeAt(a))),n=new Uint8Array(a),i=new Blob([n],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,b.saveAs)(i,"error_file.xlsx")}else console.error("No file found in the upload result.")},q=e=>e>1e6?`${(e/1e6).toFixed(2)} MB`:`${(e/1e3).toFixed(2)} KB`,X=e=>e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return(0,y.jsxs)(m.A,{open:t,onClose:J,children:[(0,y.jsx)(_.A,{children:P?$?(0,y.jsxs)(o.A,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},className:"file-info",children:[(0,y.jsx)(l.A,{variant:"body2",children:(0,y.jsx)(c.A,{severity:200===$.status?"success":"error",children:$.message})}),200!==$.status&&$.file&&(0,y.jsx)(d.A,{onClick:R,variant:"contained",color:"primary",children:"Download Error File"})]}):S.filter((e=>v.includes(e))).length!==v.length?(0,y.jsxs)(o.A,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,y.jsxs)(l.A,{variant:"body1",children:[(0,y.jsx)(h.rdI,{style:{fontSize:"2rem",color:"#B90101"}})," File must contain all required columns:"]}),(0,y.jsx)(l.A,{variant:"body2",sx:{display:"flex",alignItems:"center",flexWrap:"wrap"},children:v.filter((e=>!S.includes(e))).map(((e,t)=>(0,y.jsx)(i.A,{label:e,sx:{margin:"5px 0.5rem"},color:"primary",variant:"outlined"},t)))}),(0,y.jsx)("div",{className:"upload_actions",children:(0,y.jsx)(f.XfH,{onClick:()=>w(null),className:"back__icon",title:"Back to Upload New File"})})]}):P.data.length-2<1?(0,y.jsxs)(o.A,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,y.jsxs)(l.A,{variant:"body1",sx:{fontStyle:"italic"},children:[(0,y.jsx)(h.rdI,{style:{fontSize:"1.5rem",color:"#B90101"}})," There are no records in the file. Please upload a file with data."]}),(0,y.jsx)("div",{className:"upload_actions",children:(0,y.jsx)(f.XfH,{onClick:()=>w(null),className:"back__icon",title:"Back to Upload New File"})})]}):N.includes(r)?(0,y.jsxs)(o.A,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},className:"file-info",children:[(0,y.jsxs)(o.A,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,y.jsxs)(l.A,{variant:"body2",children:[(0,y.jsx)("strong",{children:"Name:"})," ",P.filename]}),(0,y.jsxs)(l.A,{variant:"body2",children:[(0,y.jsx)("strong",{children:"Size:"})," ",q(P.size)]}),(0,y.jsxs)(l.A,{variant:"body2",children:[(0,y.jsx)("strong",{children:"Type:"})," ",P.type]}),(0,y.jsxs)(l.A,{variant:"body2",children:[(0,y.jsx)("strong",{children:"Total Records:"})," ",X(P.data.length-2)]}),N.length>1&&(0,y.jsxs)(l.A,{variant:"body4",sx:{marginBottom:"10px"},children:["Only records for ",(0,y.jsxs)("strong",{children:[r," (",P.data.filter((e=>e[S.indexOf("Project")]===r)).length," records)"]})," will be processed from this file."]})]}),(0,y.jsx)("div",{className:"upload_actions",children:O?(0,y.jsx)(l.A,{variant:"body2",sx:{marginBottom:"10px",width:"100%",textAlign:"center"},children:(0,y.jsx)("em",{style:{fontWeight:"bold",color:"#6C757D"},children:"Data are being processed, wait..."})}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(f.XfH,{onClick:()=>w(null),className:"back__icon",title:"Back to Upload New File"}),(0,y.jsx)(s.BzO,{title:"Proceed Records Processing",className:"upload__icon",onClick:async()=>{if(O)return;D(!0),F(null);const e=T(P,S,r);await U(e)}})]})})]}):(0,y.jsxs)(o.A,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,y.jsxs)(l.A,{variant:"body1",sx:{fontStyle:"italic"},children:[(0,y.jsx)(h.rdI,{style:{fontSize:"3rem",color:"#B90101"}})," The project(s) in the file does not match the project you are currently navigating. Please upload a file with the correct project."]}),(0,y.jsx)("div",{className:"upload_actions",children:(0,y.jsx)(f.XfH,{onClick:()=>w(null),className:"back__icon",title:"Back to Upload New File"})})]}):(0,y.jsx)(p.l,{label:"Drag and drop or browse a file to upload. File must be: ",handleChange:e=>{C(e),F(null),z(e)},name:"file",types:["csv"]})}),(0,y.jsx)(u.A,{children:(0,y.jsx)(d.A,{onClick:J,disabled:O,children:"Cancel"})})]})};const P=a(70459).J1`
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
`;var w=a(45421),I=a(68903);const C=e=>{let{selectedProject:t,trainingGroups:a,projects:o}=e;const[l,c]=(0,n.useState)(!1),[d,m]=(0,n.useState)(),[_,u]=(0,n.useState)(!1),{data:p,loading:f,error:h,refetch:b}=(0,j.I)(x.Oy,{variables:{projectId:t},skip:!t}),[v,C]=(0,n.useState)([]),[S,k]=(0,n.useState)(!0),[N,B]=(0,n.useState)(null),{fetchMore:$}=(0,j.I)(P,{variables:{projectId:t,limit:5e3,offset:0},skip:!t,notifyOnNetworkStatusChange:!0});(0,n.useEffect)((()=>{(async()=>{if(t)try{var e;k(!0),B(null);const a=5e3;let n=0,i=[];const{data:r}=await $({variables:{projectId:t,limit:a,offset:n}}),s=(null===r||void 0===r||null===(e=r.getAttendances)||void 0===e?void 0:e.attendance)||[];if(i=[...s],s.length<a)return C(i),k(!1);n+=a;const o=10;let l=!0;for(;l;){const e=[];for(let i=0;i<o;i++){const r=n+i*a,s=$({variables:{projectId:t,limit:a,offset:r}}).then((e=>{var t,a;return{chunk:(null===e||void 0===e||null===(t=e.data)||void 0===t||null===(a=t.getAttendances)||void 0===a?void 0:a.attendance)||[],currentOffset:r}}));e.push(s)}const r=await Promise.all(e);for(let t of r)t.chunk.length>0&&(i=[...i,...t.chunk]),t.chunk.length<a&&(l=!1);n+=o*a}C(i)}catch(a){console.error("Parallel attendance fetch error:",a),B(a)}finally{k(!1)}})()}),[t,$]);const[F]=(0,g.n)(x.Cv),O=JSON.parse(window.localStorage.getItem("myPimaUserData"));(0,n.useEffect)((()=>{if(p&&200===p.getParticipantsByProject.status){const e=p.getParticipantsByProject.participants.filter((e=>"false"===e.create_in_commcare));m(e.length)}}),[p]);if(f||S)return(0,y.jsxs)(I.Ay,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",style:{height:"100vh"},children:[(0,y.jsx)(w.A,{color:"#0D3C61",size:15}),(0,y.jsx)("em",{style:{color:"#0D3C61"},children:"Loading Participants and Attendances..."})]});if(h||N)return(0,y.jsx)(I.Ay,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",style:{height:"100vh"},children:(0,y.jsxs)("em",{style:{color:"red"},children:["Error loading data:"," ",(null===h||void 0===h?void 0:h.message)||(null===N||void 0===N?void 0:N.message)]})});const D=p.getParticipantsByProject.participants,E=[{id:"num",name:"No.",selector:e=>e.num,sortable:!0},{id:"full_name",name:"Full Name",selector:e=>e.first_name+" "+e.last_name,sortable:!0},{id:"gender",name:"Gender",selector:e=>"m"===e.gender?"Male":"Female",sortable:!0},{id:"location",name:"Location",selector:e=>e.location,sortable:!0},{id:"tns_id",name:"TNS ID",selector:e=>e.tns_id,sortable:!0},{id:"training_group",name:"Training Group",selector:e=>e.training_group,sortable:!0},{id:"household_id",name:"HH Number",selector:e=>e.hh_number,sortable:!0},{id:"primary_household_member",name:"Primary HouseHold Member",selector:e=>(0,y.jsx)("div",{children:"1"===e.farmer_number?(0,y.jsx)(i.A,{label:"1",color:"success",variant:"outlined"}):(0,y.jsx)(i.A,{label:"2",color:"error",variant:"outlined"})}),sortable:!0},{id:"farmer_trainer",name:"Farmer Trainer",selector:e=>e.farmer_trainer,sortable:!0},{id:"business_advisor",name:"Business Advisor",selector:e=>e.business_advisor,sortable:!0}],M=D.map(((e,n)=>{var i;const r={num:n+1,Project:o.find((e=>e.sf_project_id===t)).project_name,p_id:e.p_id,first_name:e.first_name,middle_name:e.middle_name?e.middle_name:"",last_name:e.last_name?e.last_name:"",gender:e.gender,age:e.age,coffee_tree_numbers:e.coffee_tree_numbers,phone_number:e.phone_number,farmer_sf_id:e.p_id,hh_number:e.hh_number,sf_household_id:e.household_id,ffg_id:e.ffg_id,location:e.location,tns_id:e.tns_id,training_group:a&&a.length>0&&(null===(i=a.find((t=>t.tg_id===e.training_group)))||void 0===i?void 0:i.tg_name)||"N/A",farmer_number:e.primary_household_member,status:e.status,farmer_trainer:e.farmer_trainer,create_in_commcare:e.create_in_commcare,number_of_coffee_plots:e.number_of_coffee_plots};return"a0EOj000003E0knMAC"===t?r.agronomy_advisor=e.business_advisor:r.business_advisor=e.business_advisor,"a0EOj000002FMGnMAO"===t||"a0EOj000002C7ivMAC"===t?r.national_identification_id=e.coop_membership_number?e.coop_membership_number:"":"a0EOj000003E0knMAC"===t?r.growers_number=e.coop_membership_number?e.coop_membership_number:"":r.coop_membership_number=e.coop_membership_number?e.coop_membership_number:"",r}));return(0,y.jsxs)("div",{children:[d>0&&(0,y.jsxs)("div",{className:"active-participants-dialog",children:[(0,y.jsxs)("p",{children:["You currently have ",(0,y.jsx)("strong",{children:d})," participants who have not been sent to CommCare. Please download the participant list, review the database, and ensure all information is verified before syncing with CommCare."]}),(0,y.jsx)("button",{className:"take-action-button",onClick:()=>(async()=>{u(!0);try{await F({variables:{projectId:t}}),await b(),u(!1)}catch(e){console.log(e),u(!1)}})(),disabled:_,children:_?"Processing...":"Send to Commcare"})]}),(0,y.jsxs)("div",{className:"flex__heading",children:[(0,y.jsx)("h1",{className:"module__heading",children:"Registered Farmers View"})," ",("super_admin"===(null===O||void 0===O?void 0:O.role)||"ci_leadership"===(null===O||void 0===O?void 0:O.role)||"senior_business_advisor"===(null===O||void 0===O?void 0:O.role)||"project_manager"===(null===O||void 0===O?void 0:O.role)||"mel_analyst"===(null===O||void 0===O?void 0:O.role))&&(0,y.jsx)(s.BzO,{title:"Upload New Participants",style:{fontSize:"30px",cursor:"pointer",marginLeft:"10px",fill:"#00A5A3"},onClick:()=>c(!0)})," "]}),D.length>0?(0,y.jsx)(r.A,{columns:E,data:M,tableRowItem:"participants",allAttendances:v,selectedProject:t}):(0,y.jsx)("div",{className:"no__data",children:(0,y.jsx)("h1",{style:{fontSize:"20px"},children:"No Registered Farmers Yet"})}),(0,y.jsx)(A,{open:l,setOpen:c,navigatedProject:o.find((e=>e.sf_project_id===t)).project_name,sfProjectId:t})]})}},62257:(e,t,a)=>{a.d(t,{Cv:()=>c,Hv:()=>s,Jm:()=>o,Oy:()=>i,dX:()=>l,s0:()=>r});var n=a(70459);n.J1`
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
`,r=n.J1`
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
`,s=n.J1`
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
`,c=n.J1`
  mutation SyncParticipantsWithCOMMCARE($projectId: String!) {
    syncParticipantsWithCOMMCARE(project_id: $projectId) {
      message
      status
    }
  }
`}}]);
//# sourceMappingURL=862.a56237ac.chunk.js.map