"use strict";(self.webpackChunkmypima_front=self.webpackChunkmypima_front||[]).push([[124],{28604:(e,t,a)=>{a.d(t,{A:()=>r});a(65043),a(85040);var s=a(3388),i=a(70579);const r=e=>{let{heading:t,paragraph:a}=e;return(0,i.jsxs)("div",{className:"details__content",children:[(0,i.jsx)(s._Mh,{color:"#3A57E8"}),(0,i.jsxs)("div",{className:"details__content2",children:[(0,i.jsx)("p",{className:"details__para",children:t}),(0,i.jsx)("p",{className:"details__para2",children:a})]})]})}},62257:(e,t,a)=>{a.d(t,{Cv:()=>l,Hv:()=>n,Jm:()=>o,Oy:()=>i,dX:()=>d,s0:()=>r});var s=a(70459);s.J1`
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
`;const i=s.J1`
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
`,r=s.J1`
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
`,n=s.J1`
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
`,o=s.J1`
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
`,d=s.J1`
  mutation UploadParticipants($partsFile: Upload!) {
    uploadParticipants(parts_file: $partsFile) {
      message
      status
      file
    }
  }
`,l=s.J1`
  mutation SyncParticipantsWithCOMMCARE($projectId: String!) {
    syncParticipantsWithCOMMCARE(project_id: $projectId) {
      message
      status
    }
  }
`},63847:(e,t,a)=>{a.d(t,{L7:()=>x,Ay:()=>b});var s=a(65043),i=a(7353),r=a(94496),n=a(83625),o=a(24056),d=a(61596),l=(a(85040),a(28604)),_=a(70579);const m=e=>{let{details:t}=e;return(0,_.jsx)("div",{children:(0,_.jsxs)(d.A,{elevation:1,sx:{maxWidth:"30%"},children:[(0,_.jsx)("div",{className:"details__title",children:t.tg_name}),(0,_.jsxs)("div",{style:{padding:"10px",paddingLeft:"20px"},children:[(0,_.jsx)(l.A,{heading:"# of Registered Farmers",paragraph:null!==t.total_participants?t.total_participants:"N/A"}),(0,_.jsx)(l.A,{heading:"Business Advisor",paragraph:t.business_advisor}),(0,_.jsx)(l.A,{heading:"Farmer Trainer",paragraph:t.farmer_trainer}),(0,_.jsx)(l.A,{heading:"TNS ID",paragraph:t.tns_id||"N/A"})]})]})})};var c=a(43845),p=a(2855);const u=e=>{let{trainingSessions:t}=e;const a=[{id:"num",name:"No.",selector:e=>e.num,sortable:!0},{id:"ts_module",name:"Session Name",grow:2,selector:e=>e.ts_module,sortable:!0},{id:"tns_id",name:"TNS ID",selector:e=>e.tns_id,sortable:!0},{id:"farmer_trainer",name:"Farmer Trainer",selector:e=>e.farmer_trainer,sortable:!0},{id:"total_males",name:"MA",selector:e=>e.total_males,sortable:!0},{id:"total_females",name:"FA",selector:e=>e.total_females,sortable:!0},{id:"is_verified",name:"Is Session Verified?",selector:e=>(0,_.jsx)("div",{children:e.is_verified?(0,_.jsx)(c.A,{label:"Yes",color:"success",variant:"outlined"}):(0,_.jsx)(c.A,{label:"No",color:"error",variant:"outlined"})}),sortable:!0},{id:"session_image_status",name:"Session Image Status",grow:2,selector:e=>(0,_.jsx)("div",{children:e.is_verified?"approved"===e.session_image_status?(0,_.jsx)(c.A,{label:e.session_image_status,color:"success",variant:"outlined",title:e.session_image_status}):(0,_.jsx)(c.A,{label:e.session_image_status,color:"error",variant:"outlined",title:e.session_image_status}):(0,_.jsx)(c.A,{label:"not_verified",color:"secondary",variant:"outlined",title:"not_verified"})}),sortable:!0},{id:"session_date",name:"Session Date",selector:e=>e.session_date,sortable:!0}],s=t?t.map(((e,t)=>({num:t+1,ts_id:e.ts_id,ts_name:e.ts_name,ts_module:e.ts_module,tns_id:e.tns_id||"N/A",farmer_trainer:e.farmer_trainer||"N/A",ts_status:e.ts_status,total_males:e.total_males,total_females:e.total_females,has_image:e.has_image,is_verified:e.is_verified,session_image_status:e.session_image_status,session_date:e.session_date||"N/A"}))):[];return(0,_.jsx)("div",{children:(0,_.jsx)(p.A,{columns:a,data:s,tableRowItem:"trainsession"})})},g=e=>{let{details:t,farmVisits:a}=e;const s=a?a.map(((e,t)=>({num:t+1,fv_id:e.fv_id,fv_name:e.fv_name,training_group:e.training_group,training_session:e.training_session,tns_id:e.tns_id,farm_visited:e.farm_visited,household_id:e.household_id,farmer_trainer:e.farmer_trainer,has_training:e.has_training,date_visited:e.date_visited}))):[];return(0,_.jsx)("div",{children:(0,_.jsx)(p.A,{columns:[{id:"num",name:"No.",selector:e=>e.num,sortable:!0},{id:"training_group",name:"FFG Name",selector:e=>e.training_group,sortable:!0},{id:"tns_id",name:"TNS ID",selector:e=>e.tns_id,sortable:!0},{id:"farm_visited",name:"Farm Visited",selector:e=>e.farm_visited,sortable:!0},{id:"farmer_trainer",name:"Farmer Trainer",selector:e=>e.farmer_trainer,sortable:!0},{id:"date_visited",name:"Date Visited",selector:e=>e.date_visited,sortable:!0}],data:s,tableRowItem:"farmvisit",details:t})})},h=e=>{let{participants:t}=e;const a=t?t.map(((e,t)=>({num:t+1,p_id:e.p_id,full_name:`${e.first_name} ${"null"!==e.middle_name?e.middle_name:" "} ${e.last_name}`,gender:"m"===e.gender?"Male":"Female",location:e.location,tns_id:e.tns_id,status:e.status,farmer_trainer:e.farmer_trainer,business_advisor:e.business_advisor}))):[];return(0,_.jsx)("div",{children:(0,_.jsx)(p.A,{columns:[{id:"num",name:"No.",selector:e=>e.num,sortable:!0},{id:"full_name",name:"Full Name",selector:e=>e.full_name,sortable:!0},{id:"gender",name:"Gender",selector:e=>e.gender,sortable:!0},{id:"location",name:"Location",selector:e=>e.location,sortable:!0},{id:"tns_id",name:"TNS ID",selector:e=>e.tns_id,sortable:!0},{id:"farmer_trainer",name:"Farmer Trainer",selector:e=>e.farmer_trainer,sortable:!0},{id:"business_advisor",name:"Business Advisor",selector:e=>e.business_advisor,sortable:!0}],data:a,tableRowItem:"participants"})})};function f(e){const{children:t,value:a,index:s,...n}=e;return(0,_.jsx)("div",{role:"tabpanel",hidden:a!==s,id:`simple-tabpanel-${s}`,"aria-labelledby":`simple-tab-${s}`,...n,children:a===s&&(0,_.jsx)(i.A,{sx:{p:3},children:(0,_.jsx)(r.A,{children:t})})})}function x(e){return{id:`simple-tab-${e}`,"aria-controls":`simple-tabpanel-${e}`}}function b(e){let{details:t,trainingSessions:a,farmVisits:r,participants:d}=e;const[l,c]=(0,s.useState)(0);return(0,_.jsxs)(i.A,{sx:{width:"100%",marginTop:"20px"},children:[(0,_.jsx)(i.A,{sx:{borderBottom:1,borderColor:"divider"},children:(0,_.jsxs)(n.A,{value:l,onChange:(e,t)=>{c(t)},"aria-label":"basic tabs example",children:[(0,_.jsx)(o.A,{label:"FFG Details",...x(0)}),(0,_.jsx)(o.A,{label:"FFG sessions",...x(1)}),(0,_.jsx)(o.A,{label:"FFG Farm Visits",...x(2)}),(0,_.jsx)(o.A,{label:"FFG Participants",...x(2)})]})}),(0,_.jsx)(f,{value:l,index:0,children:(0,_.jsx)(m,{details:t})}),(0,_.jsx)(f,{value:l,index:1,children:(0,_.jsx)(u,{trainingSessions:a})}),(0,_.jsx)(f,{value:l,index:2,children:(0,_.jsx)(g,{farmVisits:r})}),(0,_.jsx)(f,{value:l,index:3,children:(0,_.jsx)(h,{participants:d})})]})}},82407:(e,t,a)=>{a.d(t,{A:()=>d});a(65043);var s=a(22698),i=a(35475),r=a(51640),n=a(70579);const o=(0,r.A)(i.N_)((e=>{let{theme:t}=e;return{textDecoration:"none",color:"inherit",transition:"color 0.3s ease-in-out","&:hover":{color:"#25245D",fontWeight:"600"}}})),d=e=>{let{name:t,firstItem:a,linkTo:i}=e;return(0,n.jsx)("div",{role:"presentation",children:(0,n.jsxs)(s.A,{"aria-label":"breadcrumb",sx:{fontSize:"12px",cursor:"pointer"},children:[(0,n.jsx)(o,{to:`/in/${i}`,children:a}),(0,n.jsx)(o,{href:"","aria-current":"page",children:t.split(" ").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" ")})]})})}},85040:()=>{},88967:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var s=a(65043),i=a(73216),r=a(88250),n=a(82407),o=a(63847),d=a(15527),l=a(62257),_=a(32393),m=a(94496),c=a(70579);const p={marginTop:"15px",fontWeight:"400",color:"rgba(125, 127, 136, 1)",fontSize:"12px",maxWidth:"80%"},u=e=>{let{trainingGroups:t,trainingSessions:a}=e;const[u,g]=(0,s.useState)([]),[h,f]=(0,s.useState)([]),x=(0,i.g)(),{id:b}=x,j=!b,v=(0,r.I)(d.Nb,{variables:{tgId:b},skip:j}),{loading:A,error:y,data:I}=(0,r.I)(l.s0,{variables:{tgId:b},skip:j}),S=t.find((e=>e.tg_id===b));return(0,s.useEffect)((()=>{if(v.data){const e=v.data.getFarmVisitsByGroup.farmVisits;g(e)}}),[v.data]),(0,s.useEffect)((()=>{I&&I.getParticipantsByGroup.participants&&f(I.getParticipantsByGroup.participants)}),[I]),A?(0,c.jsx)(_.A,{}):y?(0,c.jsx)("div",{className:"circular_progress",children:(0,c.jsx)(m.A,{color:"error",children:"Error loading data"})}):(0,c.jsx)("div",{children:S&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.A,{name:S.tg_name,firstItem:"Training group",linkTo:"traingroup"}),(0,c.jsxs)("div",{style:{marginTop:"10px"},children:[(0,c.jsx)("h1",{children:S.tg_name}),(0,c.jsx)("p",{style:p,children:"In the focal farmer group details you can access detailed information for a specific ffg, explore the training sessions list associated with the selected group. Review the Farm Visits List associated with the ffg and export the information displayed on this page to Excel or CSV format."})]}),(0,c.jsx)(o.Ay,{details:S,trainingSessions:a&&a.length>0&&a.filter((e=>e.ts_group===S.tg_name)),farmVisits:u,participants:h})]})})}}}]);
//# sourceMappingURL=124.d3815d62.chunk.js.map