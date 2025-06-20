"use strict";(self.webpackChunkmypima_front=self.webpackChunkmypima_front||[]).push([[680],{62257:(t,e,a)=>{a.d(e,{Cv:()=>p,Hv:()=>n,Jm:()=>d,Oy:()=>r,dX:()=>o,s0:()=>s});var i=a(70459);i.J1`
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
`,n=i.J1`
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
`,p=i.J1`
  mutation SyncParticipantsWithCOMMCARE($projectId: String!) {
    syncParticipantsWithCOMMCARE(project_id: $projectId) {
      message
      status
    }
  }
`},98442:(t,e,a)=>{a.r(e),a.d(e,{default:()=>g});var i=a(65043),r=a(73216),s=a(88250),n=a(82407),d=a(55293),o=a(15527),p=a(62257),c=a(32393),_=a(94496),m=a(70579);const u={marginTop:"15px",fontWeight:"400",color:"rgba(125, 127, 136, 1)",fontSize:"12px",maxWidth:"80%"},g=()=>{const{trainingGroups:t,trainingSessions:e}=(0,r.KC)(),[a,g]=(0,i.useState)([]),[l,f]=(0,i.useState)([]),h=(0,r.g)(),{id:y}=h,j=!y,b=(0,s.I)(o.Nb,{variables:{tgId:y},skip:j}),{loading:P,error:I,data:x}=(0,s.I)(p.s0,{variables:{tgId:y},skip:j}),$=t.find((t=>t.tg_id===y));return(0,i.useEffect)((()=>{if(b.data){const t=b.data.getFarmVisitsByGroup.farmVisits;g(t)}}),[b.data]),(0,i.useEffect)((()=>{x&&x.getParticipantsByGroup.participants&&f(x.getParticipantsByGroup.participants)}),[x]),P?(0,m.jsx)(c.A,{}):I?(0,m.jsx)("div",{className:"circular_progress",children:(0,m.jsx)(_.A,{color:"error",children:"Error loading data"})}):(0,m.jsx)("div",{children:$&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(n.A,{name:$.tg_name,firstItem:"Training group",linkTo:"traingroup"}),(0,m.jsxs)("div",{style:{marginTop:"10px"},children:[(0,m.jsx)("h1",{children:$.tg_name}),(0,m.jsx)("p",{style:u,children:"In the focal farmer group details you can access detailed information for a specific ffg, explore the training sessions list associated with the selected group. Review the Farm Visits List associated with the ffg and export the information displayed on this page to Excel or CSV format."})]}),(0,m.jsx)(d.Ay,{details:$,trainingSessions:e&&e.length>0&&e.filter((t=>t.ts_group===$.tg_name)),farmVisits:a,participants:l})]})})}}}]);
//# sourceMappingURL=680.037beb7c.chunk.js.map