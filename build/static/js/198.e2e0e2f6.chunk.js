"use strict";(self.webpackChunkmypima_front=self.webpackChunkmypima_front||[]).push([[198],{47927:()=>{},62257:(e,t,a)=>{a.d(t,{Cv:()=>c,Hv:()=>s,Jm:()=>d,Oy:()=>n,dX:()=>o,s0:()=>r});var i=a(70459);i.J1`
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
`;const n=i.J1`
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
`,r=i.J1`
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
`,s=i.J1`
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
`,d=i.J1`
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
`,o=i.J1`
  mutation UploadParticipants($partsFile: Upload!, $projectId: String!) {
    uploadParticipants(parts_file: $partsFile, project_id: $projectId) {
      message
      status
      file
    }
  }
`,c=i.J1`
  mutation SyncParticipantsWithCOMMCARE($projectId: String!) {
    syncParticipantsWithCOMMCARE(project_id: $projectId) {
      message
      status
    }
  }
`},89032:(e,t,a)=>{a.r(t),a.d(t,{default:()=>$});var i=a(65043),n=a(82407),r=(a(47927),a(47665)),s=a(39336),d=a(40533),o=a(70579);const c=e=>{let{participant:t}=e;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"partscontent__container",children:[(0,o.jsx)("div",{className:"parts__image",style:{display:"flex",alignSelf:"center"},children:(0,o.jsx)(d.Ay,{name:t.full_name,size:"50",textSizeRatio:1.75,round:!0,color:"#8A92A6"})}),(0,o.jsx)("p",{style:{fontSize:"14px",fontWeight:"500",paddingTop:"15px",paddingBottom:"15px",textAlign:"center"},children:t.full_name}),(0,o.jsx)(s.A,{light:!0}),(0,o.jsxs)("div",{className:"parts__details",style:{marginTop:" 40px"},children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(r.A,{heading:"Full Names",paragraph:`${t.first_name} ${"null"!==t.middle_name?t.middle_name:""} ${t.last_name}`}),(0,o.jsx)(r.A,{heading:"Location",paragraph:t.location}),(0,o.jsx)(r.A,{heading:"Farmer Trainer",paragraph:t.farmer_trainer}),(0,o.jsx)(r.A,{heading:"Business Advisor",paragraph:t.business_advisor}),(0,o.jsx)(r.A,{heading:"Gender",paragraph:"m"===t.gender?"Male":"Female"}),(0,o.jsx)(r.A,{heading:"TNS ID",paragraph:t.tns_id})]}),(0,o.jsx)("div",{children:(0,o.jsx)("p",{style:{fontSize:"11px",paddingTop:"40px"}})})]})]})})};var l=a(7353),_=a(94496),p=a(24993),m=a(24056),u=a(55293),g=a(30589),h=a(88250),j=a(62257),x=a(45421),f=a(43845);const v=e=>{let{trainingSessions:t,participant:a}=e;const[n,r]=(0,i.useState)([]),s=[{id:"num",name:"No.",selector:e=>e.num,sortable:!0},{id:"session_name",name:"Module Name",selector:e=>e.session_name,sortable:!0},{id:"attendance_status",name:"Status",selector:e=>(0,o.jsx)("div",{children:"Present"===e.attendance_status?(0,o.jsx)(f.A,{label:"Attended",color:"success",variant:"outlined"}):(0,o.jsx)(f.A,{label:"Missed",color:"error",variant:"outlined"})}),sortable:!0},{id:"attendance_date",name:"Date",selector:e=>e.attendance_date,sortable:!0}],d=(0,h.I)(j.Jm,{variables:{participantId:a.p_id}});return(0,i.useEffect)((()=>{if(d.data){const e=d.data.getAttendanceByParticipant.attendance,t=e?e.map(((e,t)=>({num:t+1,attendance_id:e.attendance_id,ts_id:e.session_id,session_name:e.module_name,attendance_name:e.attendance_name,attendance_status:e.attendance_status,attendance_date:e.attendance_date}))):[];r(t)}}),[d.data,t]),(0,o.jsx)(o.Fragment,{children:d.data?(0,o.jsx)("div",{children:d.data.getAttendanceByParticipant.attendance&&d.data.getAttendanceByParticipant.attendance.length>0?(0,o.jsx)(g.A,{columns:s,data:n,tableRowItem:"trainsession",participant:a}):(0,o.jsx)("div",{className:"no__data",children:(0,o.jsx)("h1",{style:{fontSize:"20px"},children:"No Attendance Yet"})})}):d.loading?(0,o.jsx)(x.A,{color:"#0D3C61",size:15,style:{display:"flex",justifyContent:"center"}}):(0,o.jsx)("div",{className:"no__data",children:(0,o.jsx)("h1",{style:{fontSize:"20px"},children:"No Attendance Yet"})})})},b=e=>{let{farmVisitsPerPart:t}=e;const a=t?t.map(((e,t)=>({num:t+1,fv_id:e.fv_id,fv_name:e.fv_name,training_group:e.training_group,training_session:e.training_session,tns_id:e.tns_id,farm_visited:e.farm_visited,household_id:e.household_id,farmer_trainer:e.farmer_trainer,has_training:e.has_training,date_visited:e.date_visited}))):[];return(0,o.jsx)("div",{children:(0,o.jsx)(g.A,{columns:[{id:"num",name:"No.",selector:e=>e.num,sortable:!0},{id:"training_group",name:"Training Group",selector:e=>e.training_group,sortable:!0},{id:"tns_id",name:"TNS ID",selector:e=>e.tns_id,sortable:!0},{id:"farm_visited",name:"Farm Visited",selector:e=>e.farm_visited,sortable:!0},{id:"farmer_trainer",name:"Farmer Trainer",selector:e=>e.farmer_trainer,sortable:!0},{id:"date_visited",name:"Date Visited",selector:e=>e.date_visited,sortable:!0}],data:a,tableRowItem:"farmvisit"})})};function y(e){const{children:t,value:a,index:i,...n}=e;return(0,o.jsx)("div",{role:"tabpanel",hidden:a!==i,id:`simple-tabpanel-${i}`,"aria-labelledby":`simple-tab-${i}`,...n,children:a===i&&(0,o.jsx)(l.A,{sx:{p:3},children:(0,o.jsx)(_.A,{children:t})})})}const A=e=>{let{trainingSessions:t,participant:a,farmVisitsPerPart:n}=e;console.log(n);const[r,s]=(0,i.useState)(0);return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(l.A,{sx:{width:"100%"},children:[(0,o.jsx)(l.A,{sx:{borderBottom:1,borderColor:"divider",borderTopLeftRadius:"3px",borderTopRightRadius:"3px",backgroundColor:"rgba(0, 165, 163, 0.1)"},children:(0,o.jsxs)(p.A,{value:r,onChange:(e,t)=>{s(t)},"aria-label":"basic tabs example",textColor:"primary",children:[(0,o.jsx)(m.A,{label:"Farm Visit History",...(0,u.L7)(0)}),(0,o.jsx)(m.A,{label:"TS Attendance History",...(0,u.L7)(1)})]})}),(0,o.jsx)(y,{value:r,index:0,children:(0,o.jsx)(b,{trainingSessions:t,participant:a,farmVisitsPerPart:n})}),(0,o.jsx)(y,{value:r,index:1,children:(0,o.jsx)(v,{trainingSessions:t,participant:a})})]})})};var P=a(73216),S=a(15527),I=a(32393);const $=()=>{var e;const[t,a]=(0,i.useState)([]),r=(0,P.g)(),{id:s}=r,{loading:d,error:l,data:p}=(0,h.I)(j.Hv,{variables:{id:s}}),{loading:m,error:u,data:g}=(0,h.I)(S.ZH,{variables:{partId:s},skip:!s});if((0,i.useEffect)((()=>{if(g){const e=g.getFarmVisitsByParticipant.farmVisits;a(e)}}),[g]),d||m)return(0,o.jsx)(I.A,{});if(l||u)return(0,o.jsx)("div",{className:"error__container",children:(0,o.jsx)(_.A,{color:"error",children:(null===l||void 0===l?void 0:l.message)||(null===u||void 0===u?void 0:u.message)})});const x=null===p||void 0===p||null===(e=p.getParticipantsById)||void 0===e?void 0:e.participant;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.A,{name:"Details",firstItem:"Participants",linkTo:"participants"}),(0,o.jsx)("div",{className:"parts__container",children:x?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"parts__detailcontent",children:(0,o.jsx)(c,{participant:x})}),(0,o.jsx)("div",{className:"parts__tablecontent",children:(0,o.jsx)(A,{participant:x,farmVisitsPerPart:t})})]}):(0,o.jsx)("div",{className:"no__data",children:(0,o.jsx)("h1",{style:{fontSize:"20px"},children:"No Participant Selected"})})})]})}}}]);
//# sourceMappingURL=198.e2e0e2f6.chunk.js.map