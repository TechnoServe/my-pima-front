"use strict";(self.webpackChunkmypima_front=self.webpackChunkmypima_front||[]).push([[534],{62257:(e,a,t)=>{t.d(a,{Cv:()=>c,Hv:()=>r,Jm:()=>d,Oy:()=>n,dX:()=>o,s0:()=>s});var i=t(70459);i.J1`
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
`,r=i.J1`
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
  mutation UploadParticipants($partsFile: Upload!) {
    uploadParticipants(parts_file: $partsFile) {
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
`},81072:(e,a,t)=>{t.r(a),t.d(a,{default:()=>$});var i=t(65043),n=t(82407),s=t(47665),r=t(39336),d=t(40533),o=t(70579);const c=e=>{let{participant:a}=e;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"partscontent__container",children:[(0,o.jsx)("div",{className:"parts__image",style:{display:"flex",alignSelf:"center"},children:(0,o.jsx)(d.Ay,{name:a.full_name,size:"50",textSizeRatio:1.75,round:!0,color:"#8A92A6"})}),(0,o.jsx)("p",{style:{fontSize:"14px",fontWeight:"500",paddingTop:"15px",paddingBottom:"15px",textAlign:"center"},children:a.full_name}),(0,o.jsx)(r.A,{light:!0}),(0,o.jsxs)("div",{className:"parts__details",style:{marginTop:" 40px"},children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(s.A,{heading:"Full Names",paragraph:`${a.first_name} ${"null"!==a.middle_name?a.middle_name:""} ${a.last_name}`}),(0,o.jsx)(s.A,{heading:"Location",paragraph:a.location}),(0,o.jsx)(s.A,{heading:"Farmer Trainer",paragraph:a.farmer_trainer}),(0,o.jsx)(s.A,{heading:"Business Advisor",paragraph:a.business_advisor}),(0,o.jsx)(s.A,{heading:"Gender",paragraph:"m"===a.gender?"Male":"Female"}),(0,o.jsx)(s.A,{heading:"TNS ID",paragraph:a.tns_id})]}),(0,o.jsx)("div",{children:(0,o.jsx)("p",{style:{fontSize:"11px",paddingTop:"40px"}})})]})]})})};var l=t(7353),_=t(94496),m=t(83625),p=t(24056),u=t(55293),g=t(30589),h=t(88250),x=t(62257),j=t(45421),f=t(43845);const v=e=>{let{trainingSessions:a,participant:t}=e;const[n,s]=(0,i.useState)([]),r=[{id:"num",name:"No.",selector:e=>e.num,sortable:!0},{id:"session_name",name:"Module Name",selector:e=>e.session_name,sortable:!0},{id:"attendance_status",name:"Status",selector:e=>(0,o.jsx)("div",{children:"Present"===e.attendance_status?(0,o.jsx)(f.A,{label:"Attended",color:"success",variant:"outlined"}):(0,o.jsx)(f.A,{label:"Missed",color:"error",variant:"outlined"})}),sortable:!0},{id:"attendance_date",name:"Date",selector:e=>e.attendance_date,sortable:!0}],d=(0,h.I)(x.Jm,{variables:{participantId:t.p_id}});return(0,i.useEffect)((()=>{if(d.data){const e=d.data.getAttendanceByParticipant.attendance,a=e?e.map(((e,a)=>({num:a+1,attendance_id:e.attendance_id,ts_id:e.session_id,session_name:e.module_name,attendance_name:e.attendance_name,attendance_status:e.attendance_status,attendance_date:e.attendance_date}))):[];s(a)}}),[d.data,a]),(0,o.jsx)(o.Fragment,{children:d.data?(0,o.jsx)("div",{children:d.data.getAttendanceByParticipant.attendance&&d.data.getAttendanceByParticipant.attendance.length>0?(0,o.jsx)(g.A,{columns:r,data:n,tableRowItem:"trainsession",participant:t}):(0,o.jsx)("div",{className:"no__data",children:(0,o.jsx)("h1",{style:{fontSize:"20px"},children:"No Attendance Yet"})})}):d.loading?(0,o.jsx)(j.A,{color:"#0D3C61",size:15,style:{display:"flex",justifyContent:"center"}}):(0,o.jsx)("div",{className:"no__data",children:(0,o.jsx)("h1",{style:{fontSize:"20px"},children:"No Attendance Yet"})})})},b=e=>{let{farmVisitsPerPart:a}=e;const t=a?a.map(((e,a)=>({num:a+1,fv_id:e.fv_id,fv_name:e.fv_name,training_group:e.training_group,training_session:e.training_session,tns_id:e.tns_id,farm_visited:e.farm_visited,household_id:e.household_id,farmer_trainer:e.farmer_trainer,has_training:e.has_training,date_visited:e.date_visited}))):[];return(0,o.jsx)("div",{children:(0,o.jsx)(g.A,{columns:[{id:"num",name:"No.",selector:e=>e.num,sortable:!0},{id:"training_group",name:"Training Group",selector:e=>e.training_group,sortable:!0},{id:"tns_id",name:"TNS ID",selector:e=>e.tns_id,sortable:!0},{id:"farm_visited",name:"Farm Visited",selector:e=>e.farm_visited,sortable:!0},{id:"farmer_trainer",name:"Farmer Trainer",selector:e=>e.farmer_trainer,sortable:!0},{id:"date_visited",name:"Date Visited",selector:e=>e.date_visited,sortable:!0}],data:t,tableRowItem:"farmvisit"})})};function y(e){const{children:a,value:t,index:i,...n}=e;return(0,o.jsx)("div",{role:"tabpanel",hidden:t!==i,id:`simple-tabpanel-${i}`,"aria-labelledby":`simple-tab-${i}`,...n,children:t===i&&(0,o.jsx)(l.A,{sx:{p:3},children:(0,o.jsx)(_.A,{children:a})})})}const A=e=>{let{trainingSessions:a,participant:t,farmVisitsPerPart:n}=e;console.log(n);const[s,r]=(0,i.useState)(0);return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(l.A,{sx:{width:"100%"},children:[(0,o.jsx)(l.A,{sx:{borderBottom:1,borderColor:"divider",borderTopLeftRadius:"3px",borderTopRightRadius:"3px",backgroundColor:"rgba(0, 165, 163, 0.1)"},children:(0,o.jsxs)(m.A,{value:s,onChange:(e,a)=>{r(a)},"aria-label":"basic tabs example",textColor:"primary",children:[(0,o.jsx)(p.A,{label:"Farm Visit History",...(0,u.L7)(0)}),(0,o.jsx)(p.A,{label:"TS Attendance History",...(0,u.L7)(1)})]})}),(0,o.jsx)(y,{value:s,index:0,children:(0,o.jsx)(b,{trainingSessions:a,participant:t,farmVisitsPerPart:n})}),(0,o.jsx)(y,{value:s,index:1,children:(0,o.jsx)(v,{trainingSessions:a,participant:t})})]})})};var P=t(73216),S=t(15527),I=t(32393);const $=()=>{var e;const[a,t]=(0,i.useState)([]),s=(0,P.g)(),{id:r}=s,{loading:d,error:l,data:m}=(0,h.I)(x.Hv,{variables:{id:r}}),{loading:p,error:u,data:g}=(0,h.I)(S.ZH,{variables:{partId:r},skip:!r});if((0,i.useEffect)((()=>{if(g){const e=g.getFarmVisitsByParticipant.farmVisits;t(e)}}),[g]),d||p)return(0,o.jsx)(I.A,{});if(l||u)return(0,o.jsx)("div",{className:"error__container",children:(0,o.jsx)(_.A,{color:"error",children:(null===l||void 0===l?void 0:l.message)||(null===u||void 0===u?void 0:u.message)})});const j=null===m||void 0===m||null===(e=m.getParticipantsById)||void 0===e?void 0:e.participant;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.A,{name:"Details",firstItem:"Participants",linkTo:"participants"}),(0,o.jsx)("div",{className:"parts__container",children:j?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"parts__detailcontent",children:(0,o.jsx)(c,{participant:j})}),(0,o.jsx)("div",{className:"parts__tablecontent",children:(0,o.jsx)(A,{participant:j,farmVisitsPerPart:a})})]}):(0,o.jsx)("div",{className:"no__data",children:(0,o.jsx)("h1",{style:{fontSize:"20px"},children:"No Participant Selected"})})})]})}}}]);
//# sourceMappingURL=534.11e41200.chunk.js.map