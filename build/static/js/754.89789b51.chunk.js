"use strict";(self.webpackChunkmypima_front=self.webpackChunkmypima_front||[]).push([[754],{15527:(e,t,i)=>{i.d(t,{Ee:()=>c,Nb:()=>r,S7:()=>d,Vh:()=>a,YI:()=>m,ZH:()=>n,hz:()=>o,lg:()=>l});var s=i(70459);const a=s.J1`
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
`)},30589:(e,t,i)=>{i.d(t,{A:()=>j});var s=i(65043),a=i(73216),r=i(58786),n=i(67805),o=i(3438),d=i(85369),l=i(68926),c=i(11238),m=i(88250);const _=()=>{const e=new Date,t=Intl.DateTimeFormat().resolvedOptions().timeZone;return`${e.toLocaleDateString("en-US",{year:"numeric",month:"2-digit",day:"2-digit"})}_at_${e.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit",timeZone:t})}`};var p=i(45476),g=i(84548),u=i(70579);const h={rows:{style:{minHeight:"30px",cursor:"pointer"}},headCells:{style:{paddingLeft:"8px",paddingRight:"8px",backgroundColor:"#1b2a4e",color:"white"}},cells:{style:{paddingLeft:"5px",paddingRight:"5px",paddingTop:"5px",paddingBottom:"5px"}}},f=e=>{let{handleCSVExport:t,handleExcelExport:i,tableRowItem:s}=e;return(0,u.jsxs)("div",{className:"export-buttons",children:["trainsessionapprov"!==s&&(0,u.jsxs)(o.A,{variant:"outlined",sx:{color:"#1b2a4e",borderColor:"#1b2a4e"},onClick:t,children:[(0,u.jsx)(d.Mbn,{style:{marginRight:"5px"}})," CSV"]}),(0,u.jsxs)(o.A,{variant:"outlined",sx:{color:"#1b2a4e",borderColor:"#1b2a4e"},onClick:i,children:[(0,u.jsx)(d.Mbn,{style:{marginRight:"5px"}}),"trainsessionapprov"!==s?"Excel":"Download Report"]})]})},j=e=>{let{columns:t,data:i,filter:d,tableRowItem:j,allAttendances:v,selectedProject:x}=e;const b=j||window.location.pathname.split("/")[2],[y,S]=(0,s.useState)({ts_id:null}),[I,$]=(0,s.useState)(!1),[A,V]=(0,s.useState)(!1),[F,C]=(0,s.useState)(null),[w,N]=(0,s.useState)(""),[B,k]=(0,s.useState)([]),[P,E]=(0,s.useState)(!1),[R,q]=(0,s.useState)(null),J=(0,a.Zp)(),G=(0,m.I)(g.jq,{variables:{tsId:y&&y.ts_id?y.ts_id:""},skip:!y}),M="traingroup"===b?"mypima_training_group":"trainsession"===b?"mypima_training_session":"participants"===b?"Participants Data":"farmvisit"===b?"mypima_farm_visit":"mypima_attendance";(0,s.useEffect)((()=>{var e,t;G.loading||200!==(null===(e=G.data)||void 0===e||null===(t=e.trainingSessionImage)||void 0===t?void 0:t.status)||(V(!1),C(G.data.trainingSessionImage.trainingSessionImage))}),[G]);return(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{className:"table-header-actions "+(d?"":"no-filter"),children:[d&&(0,u.jsx)(o.A,{className:"filter-button",children:"Filter"}),(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"},children:[(0,u.jsxs)("div",{className:"search-container",children:[(0,u.jsx)("input",{type:"text",placeholder:"Search...",value:w,onChange:e=>{const s=e.target.value.toLowerCase(),a=i.filter((e=>t.some((t=>{const i=e[t.id];return null===i||void 0===i?void 0:i.toString().toLowerCase().includes(s)}))));k(a),N(e.target.value)}}),(0,u.jsx)("span",{className:"search-icon",children:(0,u.jsx)(n.LUJ,{})})]}),(0,u.jsx)(f,{handleCSVExport:()=>{if(!i||0===i.length)return void alert("No data available for export.");let e=[...t];if("farmvisit"===b){const t=[{id:"household_tns_id"},{id:"pima_farmer_id"},{id:"pima_household_id"}];e=[...e,...t]}const s=["num","Project","first_name","middle_name","last_name","gender","age","coffee_tree_numbers","number_of_coffee_plots","phone_number","a0EOj000002FMGnMAO"===x||"a0EOj000002C7ivMAC"===x?"national_identification_id":"a0EOj000003E0knMAC"===x?"growers_number":"coop_membership_number","location","farmer_sf_id","tns_id","hh_number","sf_household_id","farmer_number","ffg_id","training_group","status","farmer_trainer","a0EOj000003E0knMAC"===x?"agronomy_advisor":"business_advisor","create_in_commcare"];if("participants"===j){const e=new Map;v.filter((e=>i.some((t=>t.p_id===e.participant_id)))).forEach((t=>{const{attendance_status:i,participant_id:s,module_number:a,module_name:r,module_id:n}=t,o=`${a}-${r}-${n}`;e.has(o)||e.set(o,{});e.get(o)[s]="Present"===i?"1":"0"}));for(const[i]of e)s.push(i);const t=w.length>0?B.map((t=>{const i={...t};for(const[s,a]of e)i[s]=a[t.p_id]||"";return i})):i.map((t=>{const i={...t};for(const[s,a]of e)i[s]=a[t.p_id]||"";return i}));i=t}const a=i.map((e=>{let{tg_id:t,ts_id:i,p_id:s,attendance_id:a,fv_id:r,__typename:n,...o}=e;return o})),r=(0,l.df)({filename:M,columnHeaders:"participants"===j?s:e.map((e=>e.id))}),n=(0,l.Y_)(r)(a);n?((0,l.RG)(r)(n),console.log("Download successful"),console.log("Config:",r),console.log("Data:",i),console.log("CSV Content:",n)):console.error("Output is empty. Is your data formatted correctly?")},handleExcelExport:()=>{const e={header:t.map((e=>e.id)),body:i.map((e=>{let{tg_id:t,ts_id:i,p_id:s,attendance_id:a,fv_id:r,__typename:n,...o}=e;return Object.values(o)}))},s=i.reduce(((e,t)=>{let{farmer_trainer:i,session_image_status:s}=t;const a=`${i}_${s}`;return e[a]||(e[a]={farmer_trainer:i,session_image_status:s,count:0}),e[a].count+=1,e}),{}),a={header:["farmer_trainer","session_image_status","count"],body:Object.values(s).map((e=>Object.values(e)))},r=c.Wp.book_new(),n=c.Wp.json_to_sheet([e.header,...e.body],{skipHeader:!0}),o=c.Wp.json_to_sheet([a.header,...a.body],{skipHeader:!0});c.Wp.book_append_sheet(r,o,"Summary by Trainer"),c.Wp.book_append_sheet(r,n,"Sessions Data"),(0,c._h)(r,`${M}_${_()}.xlsx`)},tableRowItem:j})]})]}),(0,u.jsx)(r.Ay,{columns:t,data:w.length>0?B:i,onRowClicked:e=>{S(e);const t={trainsession:e.ts_id,traingroup:e.tg_id,participants:e.p_id,farmvisit:e.fv_ids,trainsessionapprov:e.ts_id}[j]||e.attendance_id;"farmvisit"!==j&&"trainsessionapprov"!==j?J(`/in/${j}/${t}`):"farmvisit"===j?(q(e.fv_id),E(!0)):"trainsessionapprov"===j&&($(!0),V(!0))},pagination:!0,highlightOnHover:!0,customStyles:h,className:"table-container"}),I&&(0,u.jsx)(p.A,{open:I,handleClose:()=>$(!1),id:y.ts_id,data:y,isVerified:y.is_verified,imageStatus:y.session_image_status,sessionImageUrl:F,selectedProject:x,loading:A})]})}},45476:(e,t,i)=>{i.d(t,{A:()=>g});var s=i(65043),a=i(83462),r=i(17392),n=i(81637),o=i(94496),d=i(35316),l=i(68903),c=i(27149),m=i(34535),_=i(70579);const p=(0,m.Ay)("div")({position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.7)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center"}),g=e=>{let{open:t,handleClose:i,sessionImageUrl:m,data:g,selectedProject:u,loading:h}=e;console.log(g);const[f,j]=(0,s.useState)(!1),[v]=(0,s.useState)(!1),x=()=>{j((e=>!e))};return(0,_.jsx)(_.Fragment,{children:h?(0,_.jsxs)(a.A,{open:t,keepMounted:!0,fullWidth:!0,"aria-describedby":"alert-dialog-slide-description",children:[(0,_.jsx)("div",{style:{margin:"20px"},children:(0,_.jsx)(r.A,{"aria-label":"close",onClick:i,sx:{position:"absolute",right:8,top:8,color:"#2b2b2b"},children:(0,_.jsx)(c.m6K,{})})}),(0,_.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:[(0,_.jsx)(n.A,{}),(0,_.jsx)(o.A,{variant:"h6",style:{marginLeft:"10px"},children:"Loading Image..."})]})]}):(0,_.jsxs)(a.A,{open:t,keepMounted:!0,fullWidth:!0,"aria-describedby":"alert-dialog-slide-description",children:[v&&(0,_.jsx)(p,{children:(0,_.jsx)(n.A,{})}),(0,_.jsxs)("div",{style:{margin:"20px"},children:[(0,_.jsx)(r.A,{"aria-label":"close",onClick:i,sx:{position:"absolute",right:8,top:8,color:"#2b2b2b"},children:(0,_.jsx)(c.m6K,{})}),(0,_.jsx)(o.A,{variant:"h6",children:"Session Image"})]}),(0,_.jsx)(d.A,{children:(0,_.jsxs)(l.Ay,{container:!0,spacing:2,children:[(0,_.jsxs)(l.Ay,{item:!0,xs:12,sm:6,children:[(0,_.jsxs)(o.A,{variant:"body1",children:[(0,_.jsx)("strong",{children:"Male Attendees:"})," ",g.total_males]}),(0,_.jsxs)(o.A,{variant:"body1",children:[(0,_.jsx)("strong",{children:"Female Attendees:"})," ",g.total_females]}),(0,_.jsxs)(o.A,{variant:"body1",children:[(0,_.jsx)("strong",{children:"Total Attendees:"})," ",g.total_males+g.total_females]}),(0,_.jsxs)(o.A,{variant:"body1",children:[(0,_.jsx)("strong",{children:"Session Date:"})," ",g.session_date]}),(0,_.jsxs)(o.A,{variant:"body1",children:[(0,_.jsx)("strong",{children:"Farmer Trainer:"})," ",g.farmer_trainer]}),(0,_.jsxs)(o.A,{variant:"body1",children:[(0,_.jsx)("strong",{children:"Session Module:"})," ",g.ts_module]}),(0,_.jsxs)(o.A,{variant:"body1",children:[(0,_.jsx)("strong",{children:"FFG:"})," ",g.ts_group]})]}),(0,_.jsx)(l.Ay,{item:!0,xs:12,sm:6,children:(0,_.jsxs)("div",{style:{position:"relative"},children:[(0,_.jsx)("img",{src:m,alt:"session_pic",style:{width:"100%",height:"auto",cursor:f?"zoom-out":"zoom-in"},onClick:x}),f?(0,_.jsx)(r.A,{"aria-label":"shrink",onClick:x,sx:{position:"absolute",bottom:8,right:8,color:"#fff"},children:(0,_.jsx)(c.Llp,{})}):(0,_.jsx)(r.A,{"aria-label":"expand",onClick:x,sx:{position:"absolute",bottom:8,right:8,color:"#fff"},children:(0,_.jsx)(c.T$Z,{})})]})})]})})]})})}},54754:(e,t,i)=>{i.r(t),i.d(t,{default:()=>_});var s=i(65043),a=i(88250),r=i(15527),n=i(30589),o=i(23768),d=i(94496),l=i(32393),c=i(73216),m=i(70579);const _=()=>{const{activeProject:e}=(0,c.KC)(),[t,i]=(0,s.useState)([]),{data:_,error:p,loading:g}=(0,a.I)(r.Vh,{variables:{projectId:e}});(0,s.useEffect)((()=>{if(_){const e=_.getFarmVisitsByProject;i(200===e.status?e.farmVisits:[])}p&&o.oR.error(p.message)}),[_,p]);const u=t?t.map(((e,t)=>({num:t+1,fv_id:e.fv_id,fv_name:e.fv_name,training_group:e.training_group,training_session:e.training_session,tg_tns_id:e.tg_tns_id,farmer_tns_id:e.farmer_tns_id,household_tns_id:e.household_tns_id,pima_household_id:e.pima_household_id,pima_farmer_id:e.pima_farmer_id,farm_visited:e.farm_visited,household_id:e.household_id,farmer_trainer:e.farmer_trainer,has_training:e.has_training,date_visited:e.date_visited,gender:e.gender}))):[];return p?(0,m.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:(0,m.jsx)(d.A,{color:"error",children:"Error loading data"})}):(0,m.jsxs)("div",{className:"page__container",children:[(0,m.jsx)("h1",{className:"module__heading",children:"Farm Visits View"}),g?(0,m.jsx)(l.A,{}):t.length>0?(0,m.jsx)(n.A,{columns:[{id:"num",name:"No.",selector:e=>e.num,sortable:!0},{id:"training_group",name:"TG Name",selector:e=>e.training_group,sortable:!0},{id:"farmer_tns_id",name:"TNS Farmer ID",selector:e=>e.farmer_tns_id,sortable:!0},{id:"farm_visited",name:"Farm Visited",selector:e=>e.farm_visited,sortable:!0},{id:"gender",name:"Gender",selector:e=>e.gender,sortable:!0},{id:"farmer_trainer",name:"Farmer Trainer",selector:e=>e.farmer_trainer,sortable:!0},{id:"date_visited",name:"Date Visited",selector:e=>e.date_visited,sortable:!0}],data:u,tableRowItem:"farmvisit"}):(0,m.jsx)("div",{className:"no__data",children:(0,m.jsx)("h1",{style:{fontSize:"20px"},children:"No Farm Visit Yet"})})]})}}}]);
//# sourceMappingURL=754.89789b51.chunk.js.map