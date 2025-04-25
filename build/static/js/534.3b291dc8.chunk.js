"use strict";(self.webpackChunkmypima_front=self.webpackChunkmypima_front||[]).push([[534],{15527:(e,t,i)=>{i.d(t,{Ee:()=>l,Nb:()=>n,S7:()=>d,Vh:()=>r,YI:()=>p,ZH:()=>s,hz:()=>o,lg:()=>c});var a=i(70459);const r=a.J1`
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
`,n=a.J1`
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
`,s=(a.J1`
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
`),o=(a.J1`
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
`),d=a.J1`
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
`,c=a.J1`
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
`,l=a.J1`
  query GenerateFarmVisitReport($projectId: String!) {
    generateFarmVisitReport(projectId: $projectId) {
      message
      status
      file
    }
  }
`,p=(a.J1`
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
`)},39336:(e,t,i)=>{i.d(t,{A:()=>g});var a=i(65043),r=i(58387),n=i(65049),s=i(77476),o=i(34535),d=i(56262),c=i(98206),l=i(5658),p=i(70579);const m=(0,o.Ay)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,i.absolute&&t.absolute,t[i.variant],i.light&&t.light,"vertical"===i.orientation&&t.vertical,i.flexItem&&t.flexItem,i.children&&t.withChildren,i.children&&"vertical"===i.orientation&&t.withChildrenVertical,"right"===i.textAlign&&"vertical"!==i.orientation&&t.textAlignRight,"left"===i.textAlign&&"vertical"!==i.orientation&&t.textAlignLeft]}})((0,d.A)((e=>{let{theme:t}=e;return{margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin",variants:[{props:{absolute:!0},style:{position:"absolute",bottom:0,left:0,width:"100%"}},{props:{light:!0},style:{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:(0,s.X4)(t.palette.divider,.08)}},{props:{variant:"inset"},style:{marginLeft:72}},{props:{variant:"middle",orientation:"horizontal"},style:{marginLeft:t.spacing(2),marginRight:t.spacing(2)}},{props:{variant:"middle",orientation:"vertical"},style:{marginTop:t.spacing(1),marginBottom:t.spacing(1)}},{props:{orientation:"vertical"},style:{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"}},{props:{flexItem:!0},style:{alignSelf:"stretch",height:"auto"}},{props:e=>{let{ownerState:t}=e;return!!t.children},style:{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,borderTopStyle:"solid",borderLeftStyle:"solid","&::before, &::after":{content:'""',alignSelf:"center"}}},{props:e=>{let{ownerState:t}=e;return t.children&&"vertical"!==t.orientation},style:{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`,borderTopStyle:"inherit"}}},{props:e=>{let{ownerState:t}=e;return"vertical"===t.orientation&&t.children},style:{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(t.vars||t).palette.divider}`,borderLeftStyle:"inherit"}}},{props:e=>{let{ownerState:t}=e;return"right"===t.textAlign&&"vertical"!==t.orientation},style:{"&::before":{width:"90%"},"&::after":{width:"10%"}}},{props:e=>{let{ownerState:t}=e;return"left"===t.textAlign&&"vertical"!==t.orientation},style:{"&::before":{width:"10%"},"&::after":{width:"90%"}}}]}}))),_=(0,o.Ay)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.wrapper,"vertical"===i.orientation&&t.wrapperVertical]}})((0,d.A)((e=>{let{theme:t}=e;return{display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`,variants:[{props:{orientation:"vertical"},style:{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`}}]}}))),u=a.forwardRef((function(e,t){const i=(0,c.b)({props:e,name:"MuiDivider"}),{absolute:a=!1,children:s,className:o,orientation:d="horizontal",component:u=(s||"vertical"===d?"div":"hr"),flexItem:g=!1,light:h=!1,role:f=("hr"!==u?"separator":void 0),textAlign:v="center",variant:y="fullWidth",...j}=i,x={...i,absolute:a,component:u,flexItem:g,light:h,orientation:d,role:f,textAlign:v,variant:y},b=(e=>{const{absolute:t,children:i,classes:a,flexItem:r,light:s,orientation:o,textAlign:d,variant:c}=e,p={root:["root",t&&"absolute",c,s&&"light","vertical"===o&&"vertical",r&&"flexItem",i&&"withChildren",i&&"vertical"===o&&"withChildrenVertical","right"===d&&"vertical"!==o&&"textAlignRight","left"===d&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]};return(0,n.A)(p,l.K,a)})(x);return(0,p.jsx)(m,{as:u,className:(0,r.A)(b.root,o),role:f,ref:t,ownerState:x,"aria-orientation":"separator"!==f||"hr"===u&&"vertical"!==d?void 0:d,...j,children:s?(0,p.jsx)(_,{className:b.wrapper,ownerState:x,children:s}):null})}));u&&(u.muiSkipListHighlight=!0);const g=u},45421:(e,t,i)=>{i.d(t,{A:()=>c});var a=i(65043),r={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function n(e){var t=function(e){if("number"===typeof e)return{value:e,unit:"px"};var t,i=(e.match(/^[0-9.]*/)||"").toString();t=i.includes(".")?parseFloat(i):parseInt(i,10);var a=(e.match(/[^0-9]*$/)||"").toString();return r[a]?{value:t,unit:a}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}(e);return"".concat(t.value).concat(t.unit)}var s=function(){return s=Object.assign||function(e){for(var t,i=1,a=arguments.length;i<a;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},s.apply(this,arguments)},o=function(e,t){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(i[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(i[a[r]]=e[a[r]])}return i},d=function(e,t,i){var a="react-spinners-".concat(e,"-").concat(i);if("undefined"==typeof window||!window.document)return a;var r=document.createElement("style");document.head.appendChild(r);var n=r.sheet,s="\n    @keyframes ".concat(a," {\n      ").concat(t,"\n    }\n  ");return n&&n.insertRule(s,0),a}("BeatLoader","50% {transform: scale(0.75);opacity: 0.2} 100% {transform: scale(1);opacity: 1}","beat");const c=function(e){var t=e.loading,i=void 0===t||t,r=e.color,c=void 0===r?"#000000":r,l=e.speedMultiplier,p=void 0===l?1:l,m=e.cssOverride,_=void 0===m?{}:m,u=e.size,g=void 0===u?15:u,h=e.margin,f=void 0===h?2:h,v=o(e,["loading","color","speedMultiplier","cssOverride","size","margin"]),y=s({display:"inherit"},_),j=function(e){return{display:"inline-block",backgroundColor:c,width:n(g),height:n(g),margin:n(f),borderRadius:"100%",animation:"".concat(d," ").concat(.7/p,"s ").concat(e%2?"0s":"".concat(.35/p,"s")," infinite linear"),animationFillMode:"both"}};return i?a.createElement("span",s({style:y},v),a.createElement("span",{style:j(1)}),a.createElement("span",{style:j(2)}),a.createElement("span",{style:j(3)})):null}},62257:(e,t,i)=>{i.d(t,{Cv:()=>c,Hv:()=>s,Jm:()=>o,Oy:()=>r,dX:()=>d,s0:()=>n});var a=i(70459);a.J1`
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
`;const r=a.J1`
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
`,n=a.J1`
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
`,s=a.J1`
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
`,o=a.J1`
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
`,d=a.J1`
  mutation UploadParticipants($partsFile: Upload!) {
    uploadParticipants(parts_file: $partsFile) {
      message
      status
      file
    }
  }
`,c=a.J1`
  mutation SyncParticipantsWithCOMMCARE($projectId: String!) {
    syncParticipantsWithCOMMCARE(project_id: $projectId) {
      message
      status
    }
  }
`},81072:(e,t,i)=>{i.r(t),i.d(t,{default:()=>P});var a=i(65043),r=i(82407),n=i(47665),s=i(39336),o=i(40533),d=i(70579);const c=e=>{let{participant:t}=e;return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:"partscontent__container",children:[(0,d.jsx)("div",{className:"parts__image",style:{display:"flex",alignSelf:"center"},children:(0,d.jsx)(o.Ay,{name:t.full_name,size:"50",textSizeRatio:1.75,round:!0,color:"#8A92A6"})}),(0,d.jsx)("p",{style:{fontSize:"14px",fontWeight:"500",paddingTop:"15px",paddingBottom:"15px",textAlign:"center"},children:t.full_name}),(0,d.jsx)(s.A,{light:!0}),(0,d.jsxs)("div",{className:"parts__details",style:{marginTop:" 40px"},children:[(0,d.jsxs)("div",{children:[(0,d.jsx)(n.A,{heading:"Full Names",paragraph:`${t.first_name} ${"null"!==t.middle_name?t.middle_name:""} ${t.last_name}`}),(0,d.jsx)(n.A,{heading:"Location",paragraph:t.location}),(0,d.jsx)(n.A,{heading:"Farmer Trainer",paragraph:t.farmer_trainer}),(0,d.jsx)(n.A,{heading:"Business Advisor",paragraph:t.business_advisor}),(0,d.jsx)(n.A,{heading:"Gender",paragraph:"m"===t.gender?"Male":"Female"}),(0,d.jsx)(n.A,{heading:"TNS ID",paragraph:t.tns_id})]}),(0,d.jsx)("div",{children:(0,d.jsx)("p",{style:{fontSize:"11px",paddingTop:"40px"}})})]})]})})};var l=i(7353),p=i(94496),m=i(83625),_=i(24056),u=i(55293),g=i(30589),h=i(88250),f=i(62257),v=i(45421),y=i(43845);const j=e=>{let{trainingSessions:t,participant:i}=e;const[r,n]=(0,a.useState)([]),s=[{id:"num",name:"No.",selector:e=>e.num,sortable:!0},{id:"session_name",name:"Module Name",selector:e=>e.session_name,sortable:!0},{id:"attendance_status",name:"Status",selector:e=>(0,d.jsx)("div",{children:"Present"===e.attendance_status?(0,d.jsx)(y.A,{label:"Attended",color:"success",variant:"outlined"}):(0,d.jsx)(y.A,{label:"Missed",color:"error",variant:"outlined"})}),sortable:!0},{id:"attendance_date",name:"Date",selector:e=>e.attendance_date,sortable:!0}],o=(0,h.I)(f.Jm,{variables:{participantId:i.p_id}});return(0,a.useEffect)((()=>{if(o.data){const e=o.data.getAttendanceByParticipant.attendance,t=e?e.map(((e,t)=>({num:t+1,attendance_id:e.attendance_id,ts_id:e.session_id,session_name:e.module_name,attendance_name:e.attendance_name,attendance_status:e.attendance_status,attendance_date:e.attendance_date}))):[];n(t)}}),[o.data,t]),(0,d.jsx)(d.Fragment,{children:o.data?(0,d.jsx)("div",{children:o.data.getAttendanceByParticipant.attendance&&o.data.getAttendanceByParticipant.attendance.length>0?(0,d.jsx)(g.A,{columns:s,data:r,tableRowItem:"trainsession",participant:i}):(0,d.jsx)("div",{className:"no__data",children:(0,d.jsx)("h1",{style:{fontSize:"20px"},children:"No Attendance Yet"})})}):o.loading?(0,d.jsx)(v.A,{color:"#0D3C61",size:15,style:{display:"flex",justifyContent:"center"}}):(0,d.jsx)("div",{className:"no__data",children:(0,d.jsx)("h1",{style:{fontSize:"20px"},children:"No Attendance Yet"})})})},x=e=>{let{farmVisitsPerPart:t}=e;const i=t?t.map(((e,t)=>({num:t+1,fv_id:e.fv_id,fv_name:e.fv_name,training_group:e.training_group,training_session:e.training_session,tns_id:e.tns_id,farm_visited:e.farm_visited,household_id:e.household_id,farmer_trainer:e.farmer_trainer,has_training:e.has_training,date_visited:e.date_visited}))):[];return(0,d.jsx)("div",{children:(0,d.jsx)(g.A,{columns:[{id:"num",name:"No.",selector:e=>e.num,sortable:!0},{id:"training_group",name:"Training Group",selector:e=>e.training_group,sortable:!0},{id:"tns_id",name:"TNS ID",selector:e=>e.tns_id,sortable:!0},{id:"farm_visited",name:"Farm Visited",selector:e=>e.farm_visited,sortable:!0},{id:"farmer_trainer",name:"Farmer Trainer",selector:e=>e.farmer_trainer,sortable:!0},{id:"date_visited",name:"Date Visited",selector:e=>e.date_visited,sortable:!0}],data:i,tableRowItem:"farmvisit"})})};function b(e){const{children:t,value:i,index:a,...r}=e;return(0,d.jsx)("div",{role:"tabpanel",hidden:i!==a,id:`simple-tabpanel-${a}`,"aria-labelledby":`simple-tab-${a}`,...r,children:i===a&&(0,d.jsx)(l.A,{sx:{p:3},children:(0,d.jsx)(p.A,{children:t})})})}const S=e=>{let{trainingSessions:t,participant:i,farmVisitsPerPart:r}=e;console.log(r);const[n,s]=(0,a.useState)(0);return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(l.A,{sx:{width:"100%"},children:[(0,d.jsx)(l.A,{sx:{borderBottom:1,borderColor:"divider",borderTopLeftRadius:"3px",borderTopRightRadius:"3px",backgroundColor:"rgba(0, 165, 163, 0.1)"},children:(0,d.jsxs)(m.A,{value:n,onChange:(e,t)=>{s(t)},"aria-label":"basic tabs example",textColor:"primary",children:[(0,d.jsx)(_.A,{label:"Farm Visit History",...(0,u.L7)(0)}),(0,d.jsx)(_.A,{label:"TS Attendance History",...(0,u.L7)(1)})]})}),(0,d.jsx)(b,{value:n,index:0,children:(0,d.jsx)(x,{trainingSessions:t,participant:i,farmVisitsPerPart:r})}),(0,d.jsx)(b,{value:n,index:1,children:(0,d.jsx)(j,{trainingSessions:t,participant:i})})]})})};var $=i(73216),I=i(15527),A=i(32393);const P=()=>{var e;const[t,i]=(0,a.useState)([]),n=(0,$.g)(),{id:s}=n,{loading:o,error:l,data:m}=(0,h.I)(f.Hv,{variables:{id:s}}),{loading:_,error:u,data:g}=(0,h.I)(I.ZH,{variables:{partId:s},skip:!s});if((0,a.useEffect)((()=>{if(g){const e=g.getFarmVisitsByParticipant.farmVisits;i(e)}}),[g]),o||_)return(0,d.jsx)(A.A,{});if(l||u)return(0,d.jsx)("div",{className:"error__container",children:(0,d.jsx)(p.A,{color:"error",children:(null===l||void 0===l?void 0:l.message)||(null===u||void 0===u?void 0:u.message)})});const v=null===m||void 0===m||null===(e=m.getParticipantsById)||void 0===e?void 0:e.participant;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.A,{name:"Details",firstItem:"Participants",linkTo:"participants"}),(0,d.jsx)("div",{className:"parts__container",children:v?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"parts__detailcontent",children:(0,d.jsx)(c,{participant:v})}),(0,d.jsx)("div",{className:"parts__tablecontent",children:(0,d.jsx)(S,{participant:v,farmVisitsPerPart:t})})]}):(0,d.jsx)("div",{className:"no__data",children:(0,d.jsx)("h1",{style:{fontSize:"20px"},children:"No Participant Selected"})})})]})}}}]);
//# sourceMappingURL=534.3b291dc8.chunk.js.map