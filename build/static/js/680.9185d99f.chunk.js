"use strict";(self.webpackChunkmypima_front=self.webpackChunkmypima_front||[]).push([[680],{15527:(t,e,i)=>{i.d(e,{Ee:()=>p,Nb:()=>r,S7:()=>c,Vh:()=>s,YI:()=>m,ZH:()=>n,hz:()=>d,lg:()=>o});var a=i(70459);const s=a.J1`
  query GetFarmVisitsByProject($projectId: String!) {
    getFarmVisitsByProject(project_id: $projectId) {
      message
      status
      farmVisits {
        fv_id
        training_group
        farmer_tns_id
        household_tns_id
        farm_visited
        farmer_trainer
        date_visited
        pima_household_id
        pima_farmer_id
        gender
      }
    }
  }
`,r=a.J1`
  query GetFarmVisitsByGroup($tgId: String!) {
    getFarmVisitsByGroup(tg_id: $tgId) {
      message
      status
      farmVisits {
        fv_id
        fv_name
        training_group
        training_session
        tns_id
        farm_visited
        household_id
        farmer_trainer
        has_training
        date_visited
      }
    }
  }
`,n=(a.J1`
  query GetFarmVisitsBySession($tsId: String!) {
    getFarmVisitsBySession(ts_id: $tsId) {
      message
      status
      farmVisits {
        fv_id
        fv_name
        training_group
        training_session
        tns_id
        farm_visited
        household_id
        farmer_trainer
        has_training
        date_visited
      }
    }
  }
`,a.J1`
  query GetFarmVisitsByParticipant($partId: String!) {
    getFarmVisitsByParticipant(part_id: $partId) {
      message
      status
      farmVisits {
        fv_id
        fv_name
        training_group
        training_session
        farmer_tns_id
        farm_visited
        household_id
        farmer_trainer
        has_training
        date_visited
      }
    }
  }
`),d=(a.J1`
  query GetFVQAsByFarmVisits($fvId: String!) {
    getFVQAsByFarmVisits(fv_id: $fvId) {
      message
      status
      fvQAs {
        bp_id
        fv_id
        qas {
          practice_name_id
          practice_name
          questions
          answers
        }
      }
    }
  }
`,a.J1`
  mutation UpdateFVQAImageStatus(
    $bpId: String!
    $fieldName: FieldNames!
    $imageStatus: Status!
  ) {
    updateFVQAImageStatus(
      bp_id: $bpId
      field_name: $fieldName
      image_status: $imageStatus
    ) {
      message
      status
    }
  }
`,a.J1`
  query getFVQAsByProjectForReview(
    $projectId: String!
    $limit: Int!
    $offset: Int!
  ) {
    getFVQAsByProjectForReview(
      project_id: $projectId
      limit: $limit
      offset: $offset
    ) {
      message
      status
      farmVisits {
        fv_id
        training_group
        training_session
        tns_id
        farm_visited
        household_id
        farmer_trainer
        has_training
        date_visited
        status
        qas {
          practice_name_id
          practice_name
          questions
          answers
        }
      }
    }
  }
`,a.J1`
  query getFVQAsByProjectInExcel($projectId: String!, $practiceName: String!) {
    getFVQAsByProjectInExcel(
      project_id: $projectId
      practice_name: $practiceName
    ) {
      message
      status
      file
    }
  }
`,a.J1`
  query getFVQAsByProjectInExcel($projectId: String!, $practiceName: String!) {
    getFVQAsByProjectInExcel(
      project_id: $projectId
      practice_name: $practiceName
    ) {
      message
      status
      file
    }
  }
`,a.J1`
  mutation UploadParticipants($partsFile: Upload!) {
    uploadParticipants(parts_file: $partsFile) {
      message
      status
    }
  }
`,a.J1`
  query GetSampledVisitsStats($projectId: String!) {
    getSampledVisitsStats(projectId: $projectId) {
      totalSampledVisits
      totalReviewed
      remainingVisits
    }
  }
`),c=a.J1`
  query GetBestPracticeStats($projectId: String!, $practiceName: String!) {
    getBestPracticeReviewStats(
      projectId: $projectId
      practiceName: $practiceName
    ) {
      reviewedVisits
      remainingVisits
      totalVisits
    }
  }
`,o=a.J1`
  query GetPaginatedReviews(
    $projectId: String!
    $practiceName: String!
    $page: Int!
    $pageSize: Int!
  ) {
    getPaginatedReviews(
      projectId: $projectId
      practiceName: $practiceName
      page: $page
      pageSize: $pageSize
    ) {
      visit_id
      sf_visit_id
      farmer_name
      farmer_pima_id
      farmer_tns_id
      date_visited
      farmer_trainer
      BestPractices {
        practice_id
        practice_name
        image_url
        sf_practice_id
        question
        answer
      }
    }
  }
`,p=a.J1`
  query GenerateFarmVisitReport($projectId: String!) {
    generateFarmVisitReport(projectId: $projectId) {
      message
      status
      file
    }
  }
`,m=(a.J1`
  mutation SubmitBatch($input: [BatchInput!]!) {
    submitBatch(input: $input) {
      success
      message
    }
  }
`,a.J1`
  mutation SubmitBatch($input: [BatchInput!]!) {
    submitBatch(input: $input) {
      success
      message
    }
  }
`)},62257:(t,e,i)=>{i.d(e,{Cv:()=>o,Hv:()=>n,Jm:()=>d,Oy:()=>s,dX:()=>c,s0:()=>r});var a=i(70459);a.J1`
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
`;const s=a.J1`
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
`,r=a.J1`
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
`,n=a.J1`
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
`,d=a.J1`
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
`,c=a.J1`
  mutation UploadParticipants($partsFile: Upload!) {
    uploadParticipants(parts_file: $partsFile) {
      message
      status
      file
    }
  }
`,o=a.J1`
  mutation SyncParticipantsWithCOMMCARE($projectId: String!) {
    syncParticipantsWithCOMMCARE(project_id: $projectId) {
      message
      status
    }
  }
`},98442:(t,e,i)=>{i.r(e),i.d(e,{default:()=>u});var a=i(65043),s=i(73216),r=i(88250),n=i(82407),d=i(55293),c=i(15527),o=i(62257),p=i(32393),m=i(94496),_=i(70579);const g={marginTop:"15px",fontWeight:"400",color:"rgba(125, 127, 136, 1)",fontSize:"12px",maxWidth:"80%"},u=()=>{const{trainingGroups:t,trainingSessions:e}=(0,s.KC)(),[i,u]=(0,a.useState)([]),[f,l]=(0,a.useState)([]),h=(0,s.g)(),{id:$}=h,I=!$,j=(0,r.I)(c.Nb,{variables:{tgId:$},skip:I}),{loading:y,error:S,data:v}=(0,r.I)(o.s0,{variables:{tgId:$},skip:I}),V=t.find((t=>t.tg_id===$));return(0,a.useEffect)((()=>{if(j.data){const t=j.data.getFarmVisitsByGroup.farmVisits;u(t)}}),[j.data]),(0,a.useEffect)((()=>{v&&v.getParticipantsByGroup.participants&&l(v.getParticipantsByGroup.participants)}),[v]),y?(0,_.jsx)(p.A,{}):S?(0,_.jsx)("div",{className:"circular_progress",children:(0,_.jsx)(m.A,{color:"error",children:"Error loading data"})}):(0,_.jsx)("div",{children:V&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(n.A,{name:V.tg_name,firstItem:"Training group",linkTo:"traingroup"}),(0,_.jsxs)("div",{style:{marginTop:"10px"},children:[(0,_.jsx)("h1",{children:V.tg_name}),(0,_.jsx)("p",{style:g,children:"In the focal farmer group details you can access detailed information for a specific ffg, explore the training sessions list associated with the selected group. Review the Farm Visits List associated with the ffg and export the information displayed on this page to Excel or CSV format."})]}),(0,_.jsx)(d.Ay,{details:V,trainingSessions:e&&e.length>0&&e.filter((t=>t.ts_group===V.tg_name)),farmVisits:i,participants:f})]})})}}}]);
//# sourceMappingURL=680.9185d99f.chunk.js.map