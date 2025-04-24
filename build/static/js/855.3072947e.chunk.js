"use strict";(self.webpackChunkmypima_front=self.webpackChunkmypima_front||[]).push([[855],{1785:(e,t,i)=>{i.d(t,{A:()=>g});var s=i(65043),a=i(83462),r=i(17392),n=i(81637),o=i(94496),d=i(35316),l=i(68903),c=i(27149),m=i(34535),p=i(70579);const _=(0,m.Ay)("div")({position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.7)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center"}),g=e=>{let{open:t,handleClose:i,sessionImageUrl:m,data:g,selectedProject:u,loading:h}=e;console.log(g);const[f,j]=(0,s.useState)(!1),[x]=(0,s.useState)(!1),v=()=>{j((e=>!e))};return(0,p.jsx)(p.Fragment,{children:h?(0,p.jsxs)(a.A,{open:t,keepMounted:!0,fullWidth:!0,"aria-describedby":"alert-dialog-slide-description",children:[(0,p.jsx)("div",{style:{margin:"20px"},children:(0,p.jsx)(r.A,{"aria-label":"close",onClick:i,sx:{position:"absolute",right:8,top:8,color:"#2b2b2b"},children:(0,p.jsx)(c.m6K,{})})}),(0,p.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:[(0,p.jsx)(n.A,{}),(0,p.jsx)(o.A,{variant:"h6",style:{marginLeft:"10px"},children:"Loading Image..."})]})]}):(0,p.jsxs)(a.A,{open:t,keepMounted:!0,fullWidth:!0,"aria-describedby":"alert-dialog-slide-description",children:[x&&(0,p.jsx)(_,{children:(0,p.jsx)(n.A,{})}),(0,p.jsxs)("div",{style:{margin:"20px"},children:[(0,p.jsx)(r.A,{"aria-label":"close",onClick:i,sx:{position:"absolute",right:8,top:8,color:"#2b2b2b"},children:(0,p.jsx)(c.m6K,{})}),(0,p.jsx)(o.A,{variant:"h6",children:"Session Image"})]}),(0,p.jsx)(d.A,{children:(0,p.jsxs)(l.Ay,{container:!0,spacing:2,children:[(0,p.jsxs)(l.Ay,{item:!0,xs:12,sm:6,children:[(0,p.jsxs)(o.A,{variant:"body1",children:[(0,p.jsx)("strong",{children:"Male Attendees:"})," ",g.total_males]}),(0,p.jsxs)(o.A,{variant:"body1",children:[(0,p.jsx)("strong",{children:"Female Attendees:"})," ",g.total_females]}),(0,p.jsxs)(o.A,{variant:"body1",children:[(0,p.jsx)("strong",{children:"Total Attendees:"})," ",g.total_males+g.total_females]}),(0,p.jsxs)(o.A,{variant:"body1",children:[(0,p.jsx)("strong",{children:"Session Date:"})," ",g.session_date]}),(0,p.jsxs)(o.A,{variant:"body1",children:[(0,p.jsx)("strong",{children:"Farmer Trainer:"})," ",g.farmer_trainer]}),(0,p.jsxs)(o.A,{variant:"body1",children:[(0,p.jsx)("strong",{children:"Session Module:"})," ",g.ts_module]}),(0,p.jsxs)(o.A,{variant:"body1",children:[(0,p.jsx)("strong",{children:"FFG:"})," ",g.ts_group]})]}),(0,p.jsx)(l.Ay,{item:!0,xs:12,sm:6,children:(0,p.jsxs)("div",{style:{position:"relative"},children:[(0,p.jsx)("img",{src:m,alt:"session_pic",style:{width:"100%",height:"auto",cursor:f?"zoom-out":"zoom-in"},onClick:v}),f?(0,p.jsx)(r.A,{"aria-label":"shrink",onClick:v,sx:{position:"absolute",bottom:8,right:8,color:"#fff"},children:(0,p.jsx)(c.Llp,{})}):(0,p.jsx)(r.A,{"aria-label":"expand",onClick:v,sx:{position:"absolute",bottom:8,right:8,color:"#fff"},children:(0,p.jsx)(c.T$Z,{})})]})})]})})]})})}},2855:(e,t,i)=>{i.d(t,{A:()=>j});var s=i(65043),a=i(73216),r=i(58786),n=i(67805),o=i(3438),d=i(85369),l=i(68926),c=i(11238),m=i(88250);const p=()=>{const e=new Date,t=Intl.DateTimeFormat().resolvedOptions().timeZone;return`${e.toLocaleDateString("en-US",{year:"numeric",month:"2-digit",day:"2-digit"})}_at_${e.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit",timeZone:t})}`};i(15527),i(23768);var _=i(70579);var g=i(1785),u=i(84548);const h={rows:{style:{minHeight:"30px",cursor:"pointer"}},headCells:{style:{paddingLeft:"8px",paddingRight:"8px",backgroundColor:"#1b2a4e",color:"white"}},cells:{style:{paddingLeft:"5px",paddingRight:"5px",paddingTop:"5px",paddingBottom:"5px"}}},f=e=>{let{handleCSVExport:t,handleExcelExport:i,tableRowItem:s}=e;return(0,_.jsxs)("div",{className:"export-buttons",children:["trainsessionapprov"!==s&&(0,_.jsxs)(o.A,{variant:"outlined",sx:{color:"#1b2a4e",borderColor:"#1b2a4e"},onClick:t,children:[(0,_.jsx)(d.Mbn,{style:{marginRight:"5px"}})," CSV"]}),(0,_.jsxs)(o.A,{variant:"outlined",sx:{color:"#1b2a4e",borderColor:"#1b2a4e"},onClick:i,children:[(0,_.jsx)(d.Mbn,{style:{marginRight:"5px"}}),"trainsessionapprov"!==s?"Excel":"Download Report"]})]})},j=e=>{let{columns:t,data:i,filter:d,setFilter:j,setFilteredGroups:x,setFilteredSessions:v,tableRowItem:b,allAttendances:y,details:S,selectedProject:$}=e;const I=b||window.location.pathname.split("/")[2],[A,V]=(0,s.useState)({ts_id:null}),[F,C]=(0,s.useState)(!1),[w,B]=(0,s.useState)(!1),[k,P]=(0,s.useState)(null),[N,E]=(0,s.useState)(""),[q,R]=(0,s.useState)([]),[J,G]=(0,s.useState)(!1),[M,O]=(0,s.useState)(null),Q=(0,a.Zp)(),L=(0,m.I)(u.jq,{variables:{tsId:A&&A.ts_id?A.ts_id:""},skip:!A}),D="traingroup"===I?"mypima_training_group":"trainsession"===I?"mypima_training_session":"participants"===I?"Participants Data":"farmvisit"===I?"mypima_farm_visit":"mypima_attendance";(0,s.useEffect)((()=>{var e,t;L.loading||200!==(null===(e=L.data)||void 0===e||null===(t=e.trainingSessionImage)||void 0===t?void 0:t.status)||(B(!1),P(L.data.trainingSessionImage.trainingSessionImage))}),[L]);return(0,_.jsxs)("div",{children:[(0,_.jsxs)("div",{className:"table-header-actions "+(d?"":"no-filter"),children:[d&&(0,_.jsx)(o.A,{className:"filter-button",children:"Filter"}),(0,_.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"},children:[(0,_.jsxs)("div",{className:"search-container",children:[(0,_.jsx)("input",{type:"text",placeholder:"Search...",value:N,onChange:e=>{const s=e.target.value.toLowerCase(),a=i.filter((e=>t.some((t=>{const i=e[t.id];return null===i||void 0===i?void 0:i.toString().toLowerCase().includes(s)}))));R(a),E(e.target.value)}}),(0,_.jsx)("span",{className:"search-icon",children:(0,_.jsx)(n.LUJ,{})})]}),(0,_.jsx)(f,{handleCSVExport:()=>{if(!i||0===i.length)return void alert("No data available for export.");let e=[...t];if("farmvisit"===I){const t=[{id:"household_tns_id"},{id:"pima_farmer_id"},{id:"pima_household_id"}];e=[...e,...t]}const s=["num","Project","first_name","middle_name","last_name","gender","age","coffee_tree_numbers","number_of_coffee_plots","phone_number","a0EOj000002FMGnMAO"===$||"a0EOj000002C7ivMAC"===$?"national_identification_id":"a0EOj000003E0knMAC"===$?"growers_number":"coop_membership_number","location","farmer_sf_id","tns_id","hh_number","sf_household_id","farmer_number","ffg_id","training_group","status","farmer_trainer","a0EOj000003E0knMAC"===$?"agronomy_advisor":"business_advisor","create_in_commcare"];if("participants"===b){const e=new Map;y.filter((e=>i.some((t=>t.p_id===e.participant_id)))).forEach((t=>{const{attendance_status:i,participant_id:s,module_number:a,module_name:r,module_id:n}=t,o=`${a}-${r}-${n}`;e.has(o)||e.set(o,{});e.get(o)[s]="Present"===i?"1":"0"}));for(const[i]of e)s.push(i);const t=N.length>0?q.map((t=>{const i={...t};for(const[s,a]of e)i[s]=a[t.p_id]||"";return i})):i.map((t=>{const i={...t};for(const[s,a]of e)i[s]=a[t.p_id]||"";return i}));i=t}const a=i.map((e=>{let{tg_id:t,ts_id:i,p_id:s,attendance_id:a,fv_id:r,__typename:n,...o}=e;return o})),r=(0,l.df)({filename:D,columnHeaders:"participants"===b?s:e.map((e=>e.id))}),n=(0,l.Y_)(r)(a);n?((0,l.RG)(r)(n),console.log("Download successful"),console.log("Config:",r),console.log("Data:",i),console.log("CSV Content:",n)):console.error("Output is empty. Is your data formatted correctly?")},handleExcelExport:()=>{const e={header:t.map((e=>e.id)),body:i.map((e=>{let{tg_id:t,ts_id:i,p_id:s,attendance_id:a,fv_id:r,__typename:n,...o}=e;return Object.values(o)}))},s=i.reduce(((e,t)=>{let{farmer_trainer:i,session_image_status:s}=t;const a=`${i}_${s}`;return e[a]||(e[a]={farmer_trainer:i,session_image_status:s,count:0}),e[a].count+=1,e}),{}),a={header:["farmer_trainer","session_image_status","count"],body:Object.values(s).map((e=>Object.values(e)))},r=c.Wp.book_new(),n=c.Wp.json_to_sheet([e.header,...e.body],{skipHeader:!0}),o=c.Wp.json_to_sheet([a.header,...a.body],{skipHeader:!0});c.Wp.book_append_sheet(r,o,"Summary by Trainer"),c.Wp.book_append_sheet(r,n,"Sessions Data"),(0,c._h)(r,`${D}_${p()}.xlsx`)},tableRowItem:b})]})]}),(0,_.jsx)(r.Ay,{columns:t,data:N.length>0?q:i,onRowClicked:e=>{V(e);const t={trainsession:e.ts_id,traingroup:e.tg_id,participants:e.p_id,farmvisit:e.fv_ids,trainsessionapprov:e.ts_id}[b]||e.attendance_id;"farmvisit"!==b&&"trainsessionapprov"!==b?Q(`/in/${b}/${t}`):"farmvisit"===b?(O(e.fv_id),G(!0)):"trainsessionapprov"===b&&(C(!0),B(!0))},pagination:!0,highlightOnHover:!0,customStyles:h,className:"table-container"}),F&&(0,_.jsx)(g.A,{open:F,handleClose:()=>C(!1),id:A.ts_id,data:A,isVerified:A.is_verified,imageStatus:A.session_image_status,sessionImageUrl:k,selectedProject:$,loading:w})]})}},15527:(e,t,i)=>{i.d(t,{Ee:()=>c,Nb:()=>r,S7:()=>d,Vh:()=>a,YI:()=>m,ZH:()=>n,hz:()=>o,lg:()=>l});var s=i(70459);const a=s.J1`
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
`,r=s.J1`
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
`,n=(s.J1`
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
`,s.J1`
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
`),o=(s.J1`
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
`,s.J1`
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
`,s.J1`
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
`,s.J1`
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
`,s.J1`
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
`,s.J1`
  mutation UploadParticipants($partsFile: Upload!) {
    uploadParticipants(parts_file: $partsFile) {
      message
      status
    }
  }
`,s.J1`
  query GetSampledVisitsStats($projectId: String!) {
    getSampledVisitsStats(projectId: $projectId) {
      totalSampledVisits
      totalReviewed
      remainingVisits
    }
  }
`),d=s.J1`
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
`,l=s.J1`
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
`,c=s.J1`
  query GenerateFarmVisitReport($projectId: String!) {
    generateFarmVisitReport(projectId: $projectId) {
      message
      status
      file
    }
  }
`,m=(s.J1`
  mutation SubmitBatch($input: [BatchInput!]!) {
    submitBatch(input: $input) {
      success
      message
    }
  }
`,s.J1`
  mutation SubmitBatch($input: [BatchInput!]!) {
    submitBatch(input: $input) {
      success
      message
    }
  }
`)}}]);
//# sourceMappingURL=855.3072947e.chunk.js.map