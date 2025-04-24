"use strict";(self.webpackChunkmypima_front=self.webpackChunkmypima_front||[]).push([[862],{31873:(e,t,a)=>{a.r(t),a.d(t,{default:()=>C});var n=a(65043),i=a(43845),r=a(2855),s=a(85369),o=a(7353),l=a(94496),d=a(14194),c=a(3438),m=a(83462),_=a(35316),p=a(29347),u=a(83827),h=a(41434),f=a(67805),g=a(31881),j=a(88250),b=a(72450),x=a(62257),y=a(70579);const v=["Project","first_name","last_name","gender","age","coffee_tree_numbers","farmer_sf_id","tns_id","hh_number","sf_household_id","farmer_number","ffg_id","training_group","status"],A=e=>{let{open:t,setOpen:a,navigatedProject:r,sfProjectId:A}=e;const[P,w]=(0,n.useState)(null),[I,C]=(0,n.useState)(null),[S,N]=(0,n.useState)([]),[B,k]=(0,n.useState)([]),[$,F]=(0,n.useState)(null),[O,D]=(0,n.useState)(!1),[z]=(0,g.n)(x.dX),E=(0,j.I)(x.Oy,{variables:{projectId:A}}),G=e=>{const t=new FileReader;t.onload=t=>{const a=t.target.result.split(/\r\n|\n/),n=a.map((e=>e.split(",").map((e=>e.replace(/^"(.*)"$/,"$1")))));w({filename:e.name,size:e.size,type:e.type,data:n.length>0?n:a}),N(n[0])},t.readAsText(e)};(0,n.useEffect)((()=>{P&&(P.data&&P.data.length<2||M(P))}),[P,S]);const M=e=>{const t=e.data.map((e=>e[S.indexOf("Project")])).filter((e=>e));k([...new Set(t)])},J=(e,t)=>{"backdropClick"!==t&&"escapeKeyDown"!==t&&H()},H=()=>{w(null),a(!1)},T=(e,t,a)=>{const n=t.indexOf("Project"),i=e.data.filter((e=>e[n]===a)),r=`${t.join(",")}\n${i.join("\n")}`;return new File([r],e.filename,{type:"text/csv"})},U=async e=>{try{const t=await z({variables:{partsFile:e}});await E.refetch(),F(t.data.uploadParticipants),200===t.data.uploadParticipants.status&&setTimeout((()=>{window.location.reload()}),5e3)}catch(t){console.error(t),F({status:500,message:"Something went wrong. Please try again."})}finally{D(!1)}},R=()=>{const{file:e,message:t}=$;if(e){const t=atob(e),a=new Array(t.length).fill().map(((e,a)=>t.charCodeAt(a))),n=new Uint8Array(a),i=new Blob([n],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,b.saveAs)(i,"error_file.xlsx")}else console.error("No file found in the upload result.")},q=e=>e>1e6?`${(e/1e6).toFixed(2)} MB`:`${(e/1e3).toFixed(2)} KB`,X=e=>e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return(0,y.jsxs)(m.A,{open:t,onClose:J,children:[(0,y.jsx)(_.A,{children:P?$?(0,y.jsxs)(o.A,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},className:"file-info",children:[(0,y.jsx)(l.A,{variant:"body2",children:(0,y.jsx)(d.A,{severity:200===$.status?"success":"error",children:$.message})}),200!==$.status&&$.file&&(0,y.jsx)(c.A,{onClick:R,variant:"contained",color:"primary",children:"Download Error File"})]}):S.filter((e=>v.includes(e))).length!==v.length?(0,y.jsxs)(o.A,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,y.jsxs)(l.A,{variant:"body1",children:[(0,y.jsx)(f.rdI,{style:{fontSize:"2rem",color:"#B90101"}})," File must contain all required columns:"]}),(0,y.jsx)(l.A,{variant:"body2",sx:{display:"flex",alignItems:"center",flexWrap:"wrap"},children:v.filter((e=>!S.includes(e))).map(((e,t)=>(0,y.jsx)(i.A,{label:e,sx:{margin:"5px 0.5rem"},color:"primary",variant:"outlined"},t)))}),(0,y.jsx)("div",{className:"upload_actions",children:(0,y.jsx)(h.XfH,{onClick:()=>w(null),className:"back__icon",title:"Back to Upload New File"})})]}):P.data.length-2<1?(0,y.jsxs)(o.A,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,y.jsxs)(l.A,{variant:"body1",sx:{fontStyle:"italic"},children:[(0,y.jsx)(f.rdI,{style:{fontSize:"1.5rem",color:"#B90101"}})," There are no records in the file. Please upload a file with data."]}),(0,y.jsx)("div",{className:"upload_actions",children:(0,y.jsx)(h.XfH,{onClick:()=>w(null),className:"back__icon",title:"Back to Upload New File"})})]}):B.includes(r)?(0,y.jsxs)(o.A,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},className:"file-info",children:[(0,y.jsxs)(o.A,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,y.jsxs)(l.A,{variant:"body2",children:[(0,y.jsx)("strong",{children:"Name:"})," ",P.filename]}),(0,y.jsxs)(l.A,{variant:"body2",children:[(0,y.jsx)("strong",{children:"Size:"})," ",q(P.size)]}),(0,y.jsxs)(l.A,{variant:"body2",children:[(0,y.jsx)("strong",{children:"Type:"})," ",P.type]}),(0,y.jsxs)(l.A,{variant:"body2",children:[(0,y.jsx)("strong",{children:"Total Records:"})," ",X(P.data.length-2)]}),B.length>1&&(0,y.jsxs)(l.A,{variant:"body4",sx:{marginBottom:"10px"},children:["Only records for ",(0,y.jsxs)("strong",{children:[r," (",P.data.filter((e=>e[S.indexOf("Project")]===r)).length," records)"]})," will be processed from this file."]})]}),(0,y.jsx)("div",{className:"upload_actions",children:O?(0,y.jsx)(l.A,{variant:"body2",sx:{marginBottom:"10px",width:"100%",textAlign:"center"},children:(0,y.jsx)("em",{style:{fontWeight:"bold",color:"#6C757D"},children:"Data are being processed, wait..."})}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(h.XfH,{onClick:()=>w(null),className:"back__icon",title:"Back to Upload New File"}),(0,y.jsx)(s.BzO,{title:"Proceed Records Processing",className:"upload__icon",onClick:async()=>{if(O)return;D(!0),F(null);const e=T(P,S,r);await U(e)}})]})})]}):(0,y.jsxs)(o.A,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,y.jsxs)(l.A,{variant:"body1",sx:{fontStyle:"italic"},children:[(0,y.jsx)(f.rdI,{style:{fontSize:"3rem",color:"#B90101"}})," The project(s) in the file does not match the project you are currently navigating. Please upload a file with the correct project."]}),(0,y.jsx)("div",{className:"upload_actions",children:(0,y.jsx)(h.XfH,{onClick:()=>w(null),className:"back__icon",title:"Back to Upload New File"})})]}):(0,y.jsx)(u.l,{label:"Drag and drop or browse a file to upload. File must be: ",handleChange:e=>{C(e),F(null),G(e)},name:"file",types:["csv"]})}),(0,y.jsx)(p.A,{children:(0,y.jsx)(c.A,{onClick:J,disabled:O,children:"Cancel"})})]})};const P=a(70459).J1`
  query GetAttendances($projectId: String!) {
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
`;var w=a(45421),I=a(68903);const C=e=>{let{selectedProject:t,trainingGroups:a,projects:o}=e;const[l,d]=(0,n.useState)(!1),[c,m]=(0,n.useState)(),[_,p]=(0,n.useState)(!1),{data:u,loading:h,error:f,refetch:b}=(0,j.I)(x.Oy,{variables:{projectId:t},skip:!t}),{data:v,loading:C,error:S}=(0,j.I)(P,{variables:{projectId:t},skip:!t}),[N]=(0,g.n)(x.Cv),B=JSON.parse(window.localStorage.getItem("myPimaUserData"));(0,n.useEffect)((()=>{if(u&&200===u.getParticipantsByProject.status){const e=u.getParticipantsByProject.participants.filter((e=>"false"===e.create_in_commcare));m(e.length)}}),[u]);if(h||C)return(0,y.jsxs)(I.Ay,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",style:{height:"100vh"},children:[(0,y.jsx)(w.A,{color:"#0D3C61",size:15}),(0,y.jsx)("em",{style:{color:"#0D3C61"},children:"Loading Participants and Attendances..."})]});if(f||S)return(0,y.jsx)(I.Ay,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",style:{height:"100vh"},children:(0,y.jsxs)("em",{style:{color:"red"},children:["Error loading data:"," ",(null===f||void 0===f?void 0:f.message)||(null===S||void 0===S?void 0:S.message)]})});const k=u.getParticipantsByProject.participants,$=v.getAttendances.attendance,F=[{id:"num",name:"No.",selector:e=>e.num,sortable:!0},{id:"full_name",name:"Full Name",selector:e=>e.first_name+" "+e.last_name,sortable:!0},{id:"gender",name:"Gender",selector:e=>"m"===e.gender?"Male":"Female",sortable:!0},{id:"location",name:"Location",selector:e=>e.location,sortable:!0},{id:"tns_id",name:"TNS ID",selector:e=>e.tns_id,sortable:!0},{id:"training_group",name:"Training Group",selector:e=>e.training_group,sortable:!0},{id:"household_id",name:"HH Number",selector:e=>e.hh_number,sortable:!0},{id:"primary_household_member",name:"Primary HouseHold Member",selector:e=>(0,y.jsx)("div",{children:"1"===e.farmer_number?(0,y.jsx)(i.A,{label:"1",color:"success",variant:"outlined"}):(0,y.jsx)(i.A,{label:"2",color:"error",variant:"outlined"})}),sortable:!0},{id:"farmer_trainer",name:"Farmer Trainer",selector:e=>e.farmer_trainer,sortable:!0},{id:"business_advisor",name:"Business Advisor",selector:e=>e.business_advisor,sortable:!0}],O=k.map(((e,n)=>{var i;const r={num:n+1,Project:o.find((e=>e.sf_project_id===t)).project_name,p_id:e.p_id,first_name:e.first_name,middle_name:e.middle_name?e.middle_name:"",last_name:e.last_name?e.last_name:"",gender:e.gender,age:e.age,coffee_tree_numbers:e.coffee_tree_numbers,phone_number:e.phone_number,farmer_sf_id:e.p_id,hh_number:e.hh_number,sf_household_id:e.household_id,ffg_id:e.ffg_id,location:e.location,tns_id:e.tns_id,training_group:a&&a.length>0&&(null===(i=a.find((t=>t.tg_id===e.training_group)))||void 0===i?void 0:i.tg_name)||"N/A",farmer_number:e.primary_household_member,status:e.status,farmer_trainer:e.farmer_trainer,create_in_commcare:e.create_in_commcare,number_of_coffee_plots:e.number_of_coffee_plots};return"a0EOj000003E0knMAC"===t?r.agronomy_advisor=e.business_advisor:r.business_advisor=e.business_advisor,"a0EOj000002FMGnMAO"===t||"a0EOj000002C7ivMAC"===t?r.national_identification_id=e.coop_membership_number?e.coop_membership_number:"":"a0EOj000003E0knMAC"===t?r.growers_number=e.coop_membership_number?e.coop_membership_number:"":r.coop_membership_number=e.coop_membership_number?e.coop_membership_number:"",r}));return(0,y.jsxs)("div",{children:[c>0&&(0,y.jsxs)("div",{className:"active-participants-dialog",children:[(0,y.jsxs)("p",{children:["You currently have ",(0,y.jsx)("strong",{children:c})," participants who have not been sent to CommCare. Please download the participant list, review the database, and ensure all information is verified before syncing with CommCare."]}),(0,y.jsx)("button",{className:"take-action-button",onClick:()=>(async()=>{p(!0);try{await N({variables:{projectId:t}}),await b(),p(!1)}catch(e){console.log(e),p(!1)}})(),disabled:_,children:_?"Processing...":"Send to Commcare"})]}),(0,y.jsxs)("div",{className:"flex__heading",children:[(0,y.jsx)("h1",{className:"module__heading",children:"Registered Farmers View"})," ",("super_admin"===(null===B||void 0===B?void 0:B.role)||"ci_leadership"===(null===B||void 0===B?void 0:B.role)||"senior_business_advisor"===(null===B||void 0===B?void 0:B.role)||"project_manager"===(null===B||void 0===B?void 0:B.role)||"mel_analyst"===(null===B||void 0===B?void 0:B.role))&&(0,y.jsx)(s.BzO,{title:"Upload New Participants",style:{fontSize:"30px",cursor:"pointer",marginLeft:"10px",fill:"#00A5A3"},onClick:()=>d(!0)})," "]}),k.length>0?(0,y.jsx)(r.A,{columns:F,data:O,tableRowItem:"participants",allAttendances:$,selectedProject:t}):(0,y.jsx)("div",{className:"no__data",children:(0,y.jsx)("h1",{style:{fontSize:"20px"},children:"No Registered Farmers Yet"})}),(0,y.jsx)(A,{open:l,setOpen:d,navigatedProject:o.find((e=>e.sf_project_id===t)).project_name,sfProjectId:t})]})}},62257:(e,t,a)=>{a.d(t,{Cv:()=>d,Hv:()=>s,Jm:()=>o,Oy:()=>i,dX:()=>l,s0:()=>r});var n=a(70459);n.J1`
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
`,d=n.J1`
  mutation SyncParticipantsWithCOMMCARE($projectId: String!) {
    syncParticipantsWithCOMMCARE(project_id: $projectId) {
      message
      status
    }
  }
`}}]);
//# sourceMappingURL=862.555e9a0b.chunk.js.map