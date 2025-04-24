"use strict";(self.webpackChunkmypima_front=self.webpackChunkmypima_front||[]).push([[722],{28604:(e,t,a)=>{a.d(t,{A:()=>n});a(65043),a(85040);var i=a(3388),r=a(70579);const n=e=>{let{heading:t,paragraph:a}=e;return(0,r.jsxs)("div",{className:"details__content",children:[(0,r.jsx)(i._Mh,{color:"#3A57E8"}),(0,r.jsxs)("div",{className:"details__content2",children:[(0,r.jsx)("p",{className:"details__para",children:t}),(0,r.jsx)("p",{className:"details__para2",children:a})]})]})}},39336:(e,t,a)=>{a.d(t,{A:()=>h});var i=a(65043),r=a(58387),n=a(65049),s=a(77476),o=a(34535),l=a(56262),d=a(98206),c=a(5658),m=a(70579);const p=(0,o.Ay)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.absolute&&t.absolute,t[a.variant],a.light&&t.light,"vertical"===a.orientation&&t.vertical,a.flexItem&&t.flexItem,a.children&&t.withChildren,a.children&&"vertical"===a.orientation&&t.withChildrenVertical,"right"===a.textAlign&&"vertical"!==a.orientation&&t.textAlignRight,"left"===a.textAlign&&"vertical"!==a.orientation&&t.textAlignLeft]}})((0,l.A)((e=>{let{theme:t}=e;return{margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin",variants:[{props:{absolute:!0},style:{position:"absolute",bottom:0,left:0,width:"100%"}},{props:{light:!0},style:{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:(0,s.X4)(t.palette.divider,.08)}},{props:{variant:"inset"},style:{marginLeft:72}},{props:{variant:"middle",orientation:"horizontal"},style:{marginLeft:t.spacing(2),marginRight:t.spacing(2)}},{props:{variant:"middle",orientation:"vertical"},style:{marginTop:t.spacing(1),marginBottom:t.spacing(1)}},{props:{orientation:"vertical"},style:{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"}},{props:{flexItem:!0},style:{alignSelf:"stretch",height:"auto"}},{props:e=>{let{ownerState:t}=e;return!!t.children},style:{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,borderTopStyle:"solid",borderLeftStyle:"solid","&::before, &::after":{content:'""',alignSelf:"center"}}},{props:e=>{let{ownerState:t}=e;return t.children&&"vertical"!==t.orientation},style:{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`,borderTopStyle:"inherit"}}},{props:e=>{let{ownerState:t}=e;return"vertical"===t.orientation&&t.children},style:{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(t.vars||t).palette.divider}`,borderLeftStyle:"inherit"}}},{props:e=>{let{ownerState:t}=e;return"right"===t.textAlign&&"vertical"!==t.orientation},style:{"&::before":{width:"90%"},"&::after":{width:"10%"}}},{props:e=>{let{ownerState:t}=e;return"left"===t.textAlign&&"vertical"!==t.orientation},style:{"&::before":{width:"10%"},"&::after":{width:"90%"}}}]}}))),_=(0,o.Ay)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.wrapper,"vertical"===a.orientation&&t.wrapperVertical]}})((0,l.A)((e=>{let{theme:t}=e;return{display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`,variants:[{props:{orientation:"vertical"},style:{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`}}]}}))),u=i.forwardRef((function(e,t){const a=(0,d.b)({props:e,name:"MuiDivider"}),{absolute:i=!1,children:s,className:o,orientation:l="horizontal",component:u=(s||"vertical"===l?"div":"hr"),flexItem:h=!1,light:g=!1,role:v=("hr"!==u?"separator":void 0),textAlign:f="center",variant:x="fullWidth",...b}=a,j={...a,absolute:i,component:u,flexItem:h,light:g,orientation:l,role:v,textAlign:f,variant:x},A=(e=>{const{absolute:t,children:a,classes:i,flexItem:r,light:s,orientation:o,textAlign:l,variant:d}=e,m={root:["root",t&&"absolute",d,s&&"light","vertical"===o&&"vertical",r&&"flexItem",a&&"withChildren",a&&"vertical"===o&&"withChildrenVertical","right"===l&&"vertical"!==o&&"textAlignRight","left"===l&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]};return(0,n.A)(m,c.K,i)})(j);return(0,m.jsx)(p,{as:u,className:(0,r.A)(A.root,o),role:v,ref:t,ownerState:j,"aria-orientation":"separator"!==v||"hr"===u&&"vertical"!==l?void 0:l,...b,children:s?(0,m.jsx)(_,{className:A.wrapper,ownerState:j,children:s}):null})}));u&&(u.muiSkipListHighlight=!0);const h=u},45421:(e,t,a)=>{a.d(t,{A:()=>d});var i=a(65043),r={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function n(e){var t=function(e){if("number"===typeof e)return{value:e,unit:"px"};var t,a=(e.match(/^[0-9.]*/)||"").toString();t=a.includes(".")?parseFloat(a):parseInt(a,10);var i=(e.match(/[^0-9]*$/)||"").toString();return r[i]?{value:t,unit:i}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}(e);return"".concat(t.value).concat(t.unit)}var s=function(){return s=Object.assign||function(e){for(var t,a=1,i=arguments.length;a<i;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},s.apply(this,arguments)},o=function(e,t){var a={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(a[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(a[i[r]]=e[i[r]])}return a},l=function(e,t,a){var i="react-spinners-".concat(e,"-").concat(a);if("undefined"==typeof window||!window.document)return i;var r=document.createElement("style");document.head.appendChild(r);var n=r.sheet,s="\n    @keyframes ".concat(i," {\n      ").concat(t,"\n    }\n  ");return n&&n.insertRule(s,0),i}("BeatLoader","50% {transform: scale(0.75);opacity: 0.2} 100% {transform: scale(1);opacity: 1}","beat");const d=function(e){var t=e.loading,a=void 0===t||t,r=e.color,d=void 0===r?"#000000":r,c=e.speedMultiplier,m=void 0===c?1:c,p=e.cssOverride,_=void 0===p?{}:p,u=e.size,h=void 0===u?15:u,g=e.margin,v=void 0===g?2:g,f=o(e,["loading","color","speedMultiplier","cssOverride","size","margin"]),x=s({display:"inherit"},_),b=function(e){return{display:"inline-block",backgroundColor:d,width:n(h),height:n(h),margin:n(v),borderRadius:"100%",animation:"".concat(l," ").concat(.7/m,"s ").concat(e%2?"0s":"".concat(.35/m,"s")," infinite linear"),animationFillMode:"both"}};return a?i.createElement("span",s({style:x},f),i.createElement("span",{style:b(1)}),i.createElement("span",{style:b(2)}),i.createElement("span",{style:b(3)})):null}},62257:(e,t,a)=>{a.d(t,{Cv:()=>d,Hv:()=>s,Jm:()=>o,Oy:()=>r,dX:()=>l,s0:()=>n});var i=a(70459);i.J1`
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
`,n=i.J1`
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
`,o=i.J1`
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
`,l=i.J1`
  mutation UploadParticipants($partsFile: Upload!) {
    uploadParticipants(parts_file: $partsFile) {
      message
      status
      file
    }
  }
`,d=i.J1`
  mutation SyncParticipantsWithCOMMCARE($projectId: String!) {
    syncParticipantsWithCOMMCARE(project_id: $projectId) {
      message
      status
    }
  }
`},63847:(e,t,a)=>{a.d(t,{L7:()=>f,Ay:()=>x});var i=a(65043),r=a(7353),n=a(94496),s=a(83625),o=a(24056),l=a(61596),d=(a(85040),a(28604)),c=a(70579);const m=e=>{let{details:t}=e;return(0,c.jsx)("div",{children:(0,c.jsxs)(l.A,{elevation:1,sx:{maxWidth:"30%"},children:[(0,c.jsx)("div",{className:"details__title",children:t.tg_name}),(0,c.jsxs)("div",{style:{padding:"10px",paddingLeft:"20px"},children:[(0,c.jsx)(d.A,{heading:"# of Registered Farmers",paragraph:null!==t.total_participants?t.total_participants:"N/A"}),(0,c.jsx)(d.A,{heading:"Business Advisor",paragraph:t.business_advisor}),(0,c.jsx)(d.A,{heading:"Farmer Trainer",paragraph:t.farmer_trainer}),(0,c.jsx)(d.A,{heading:"TNS ID",paragraph:t.tns_id||"N/A"})]})]})})};var p=a(43845),_=a(2855);const u=e=>{let{trainingSessions:t}=e;const a=[{id:"num",name:"No.",selector:e=>e.num,sortable:!0},{id:"ts_module",name:"Session Name",grow:2,selector:e=>e.ts_module,sortable:!0},{id:"tns_id",name:"TNS ID",selector:e=>e.tns_id,sortable:!0},{id:"farmer_trainer",name:"Farmer Trainer",selector:e=>e.farmer_trainer,sortable:!0},{id:"total_males",name:"MA",selector:e=>e.total_males,sortable:!0},{id:"total_females",name:"FA",selector:e=>e.total_females,sortable:!0},{id:"is_verified",name:"Is Session Verified?",selector:e=>(0,c.jsx)("div",{children:e.is_verified?(0,c.jsx)(p.A,{label:"Yes",color:"success",variant:"outlined"}):(0,c.jsx)(p.A,{label:"No",color:"error",variant:"outlined"})}),sortable:!0},{id:"session_image_status",name:"Session Image Status",grow:2,selector:e=>(0,c.jsx)("div",{children:e.is_verified?"approved"===e.session_image_status?(0,c.jsx)(p.A,{label:e.session_image_status,color:"success",variant:"outlined",title:e.session_image_status}):(0,c.jsx)(p.A,{label:e.session_image_status,color:"error",variant:"outlined",title:e.session_image_status}):(0,c.jsx)(p.A,{label:"not_verified",color:"secondary",variant:"outlined",title:"not_verified"})}),sortable:!0},{id:"session_date",name:"Session Date",selector:e=>e.session_date,sortable:!0}],i=t?t.map(((e,t)=>({num:t+1,ts_id:e.ts_id,ts_name:e.ts_name,ts_module:e.ts_module,tns_id:e.tns_id||"N/A",farmer_trainer:e.farmer_trainer||"N/A",ts_status:e.ts_status,total_males:e.total_males,total_females:e.total_females,has_image:e.has_image,is_verified:e.is_verified,session_image_status:e.session_image_status,session_date:e.session_date||"N/A"}))):[];return(0,c.jsx)("div",{children:(0,c.jsx)(_.A,{columns:a,data:i,tableRowItem:"trainsession"})})},h=e=>{let{details:t,farmVisits:a}=e;const i=a?a.map(((e,t)=>({num:t+1,fv_id:e.fv_id,fv_name:e.fv_name,training_group:e.training_group,training_session:e.training_session,tns_id:e.tns_id,farm_visited:e.farm_visited,household_id:e.household_id,farmer_trainer:e.farmer_trainer,has_training:e.has_training,date_visited:e.date_visited}))):[];return(0,c.jsx)("div",{children:(0,c.jsx)(_.A,{columns:[{id:"num",name:"No.",selector:e=>e.num,sortable:!0},{id:"training_group",name:"FFG Name",selector:e=>e.training_group,sortable:!0},{id:"tns_id",name:"TNS ID",selector:e=>e.tns_id,sortable:!0},{id:"farm_visited",name:"Farm Visited",selector:e=>e.farm_visited,sortable:!0},{id:"farmer_trainer",name:"Farmer Trainer",selector:e=>e.farmer_trainer,sortable:!0},{id:"date_visited",name:"Date Visited",selector:e=>e.date_visited,sortable:!0}],data:i,tableRowItem:"farmvisit",details:t})})},g=e=>{let{participants:t}=e;const a=t?t.map(((e,t)=>({num:t+1,p_id:e.p_id,full_name:`${e.first_name} ${"null"!==e.middle_name?e.middle_name:" "} ${e.last_name}`,gender:"m"===e.gender?"Male":"Female",location:e.location,tns_id:e.tns_id,status:e.status,farmer_trainer:e.farmer_trainer,business_advisor:e.business_advisor}))):[];return(0,c.jsx)("div",{children:(0,c.jsx)(_.A,{columns:[{id:"num",name:"No.",selector:e=>e.num,sortable:!0},{id:"full_name",name:"Full Name",selector:e=>e.full_name,sortable:!0},{id:"gender",name:"Gender",selector:e=>e.gender,sortable:!0},{id:"location",name:"Location",selector:e=>e.location,sortable:!0},{id:"tns_id",name:"TNS ID",selector:e=>e.tns_id,sortable:!0},{id:"farmer_trainer",name:"Farmer Trainer",selector:e=>e.farmer_trainer,sortable:!0},{id:"business_advisor",name:"Business Advisor",selector:e=>e.business_advisor,sortable:!0}],data:a,tableRowItem:"participants"})})};function v(e){const{children:t,value:a,index:i,...s}=e;return(0,c.jsx)("div",{role:"tabpanel",hidden:a!==i,id:`simple-tabpanel-${i}`,"aria-labelledby":`simple-tab-${i}`,...s,children:a===i&&(0,c.jsx)(r.A,{sx:{p:3},children:(0,c.jsx)(n.A,{children:t})})})}function f(e){return{id:`simple-tab-${e}`,"aria-controls":`simple-tabpanel-${e}`}}function x(e){let{details:t,trainingSessions:a,farmVisits:n,participants:l}=e;const[d,p]=(0,i.useState)(0);return(0,c.jsxs)(r.A,{sx:{width:"100%",marginTop:"20px"},children:[(0,c.jsx)(r.A,{sx:{borderBottom:1,borderColor:"divider"},children:(0,c.jsxs)(s.A,{value:d,onChange:(e,t)=>{p(t)},"aria-label":"basic tabs example",children:[(0,c.jsx)(o.A,{label:"FFG Details",...f(0)}),(0,c.jsx)(o.A,{label:"FFG sessions",...f(1)}),(0,c.jsx)(o.A,{label:"FFG Farm Visits",...f(2)}),(0,c.jsx)(o.A,{label:"FFG Participants",...f(2)})]})}),(0,c.jsx)(v,{value:d,index:0,children:(0,c.jsx)(m,{details:t})}),(0,c.jsx)(v,{value:d,index:1,children:(0,c.jsx)(u,{trainingSessions:a})}),(0,c.jsx)(v,{value:d,index:2,children:(0,c.jsx)(h,{farmVisits:n})}),(0,c.jsx)(v,{value:d,index:3,children:(0,c.jsx)(g,{participants:l})})]})}},67565:(e,t,a)=>{a.r(t),a.d(t,{default:()=>I});var i=a(65043),r=a(82407),n=a(28604),s=a(39336),o=a(40533),l=a(70579);const d=e=>{let{participant:t}=e;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"partscontent__container",children:[(0,l.jsx)("div",{className:"parts__image",style:{display:"flex",alignSelf:"center"},children:(0,l.jsx)(o.Ay,{name:t.full_name,size:"50",textSizeRatio:1.75,round:!0,color:"#8A92A6"})}),(0,l.jsx)("p",{style:{fontSize:"14px",fontWeight:"500",paddingTop:"15px",paddingBottom:"15px",textAlign:"center"},children:t.full_name}),(0,l.jsx)(s.A,{light:!0}),(0,l.jsxs)("div",{className:"parts__details",style:{marginTop:" 40px"},children:[(0,l.jsxs)("div",{children:[(0,l.jsx)(n.A,{heading:"Full Names",paragraph:`${t.first_name} ${"null"!==t.middle_name?t.middle_name:""} ${t.last_name}`}),(0,l.jsx)(n.A,{heading:"Location",paragraph:t.location}),(0,l.jsx)(n.A,{heading:"Farmer Trainer",paragraph:t.farmer_trainer}),(0,l.jsx)(n.A,{heading:"Business Advisor",paragraph:t.business_advisor}),(0,l.jsx)(n.A,{heading:"Gender",paragraph:"m"===t.gender?"Male":"Female"}),(0,l.jsx)(n.A,{heading:"TNS ID",paragraph:t.tns_id})]}),(0,l.jsx)("div",{children:(0,l.jsx)("p",{style:{fontSize:"11px",paddingTop:"40px"}})})]})]})})};var c=a(7353),m=a(94496),p=a(83625),_=a(24056),u=a(63847),h=a(2855),g=a(88250),v=a(62257),f=a(45421),x=a(43845);const b=e=>{let{trainingSessions:t,participant:a}=e;const[r,n]=(0,i.useState)([]),s=[{id:"num",name:"No.",selector:e=>e.num,sortable:!0},{id:"session_name",name:"Module Name",selector:e=>e.session_name,sortable:!0},{id:"attendance_status",name:"Status",selector:e=>(0,l.jsx)("div",{children:"Present"===e.attendance_status?(0,l.jsx)(x.A,{label:"Attended",color:"success",variant:"outlined"}):(0,l.jsx)(x.A,{label:"Missed",color:"error",variant:"outlined"})}),sortable:!0},{id:"attendance_date",name:"Date",selector:e=>e.attendance_date,sortable:!0}],o=(0,g.I)(v.Jm,{variables:{participantId:a.p_id}});return(0,i.useEffect)((()=>{if(o.data){const e=o.data.getAttendanceByParticipant.attendance,t=e?e.map(((e,t)=>({num:t+1,attendance_id:e.attendance_id,ts_id:e.session_id,session_name:e.module_name,attendance_name:e.attendance_name,attendance_status:e.attendance_status,attendance_date:e.attendance_date}))):[];n(t)}}),[o.data,t]),(0,l.jsx)(l.Fragment,{children:o.data?(0,l.jsx)("div",{children:o.data.getAttendanceByParticipant.attendance&&o.data.getAttendanceByParticipant.attendance.length>0?(0,l.jsx)(h.A,{columns:s,data:r,tableRowItem:"trainsession",participant:a}):(0,l.jsx)("div",{className:"no__data",children:(0,l.jsx)("h1",{style:{fontSize:"20px"},children:"No Attendance Yet"})})}):o.loading?(0,l.jsx)(f.A,{color:"#0D3C61",size:15,style:{display:"flex",justifyContent:"center"}}):(0,l.jsx)("div",{className:"no__data",children:(0,l.jsx)("h1",{style:{fontSize:"20px"},children:"No Attendance Yet"})})})},j=e=>{let{farmVisitsPerPart:t}=e;const a=t?t.map(((e,t)=>({num:t+1,fv_id:e.fv_id,fv_name:e.fv_name,training_group:e.training_group,training_session:e.training_session,tns_id:e.tns_id,farm_visited:e.farm_visited,household_id:e.household_id,farmer_trainer:e.farmer_trainer,has_training:e.has_training,date_visited:e.date_visited}))):[];return(0,l.jsx)("div",{children:(0,l.jsx)(h.A,{columns:[{id:"num",name:"No.",selector:e=>e.num,sortable:!0},{id:"training_group",name:"Training Group",selector:e=>e.training_group,sortable:!0},{id:"tns_id",name:"TNS ID",selector:e=>e.tns_id,sortable:!0},{id:"farm_visited",name:"Farm Visited",selector:e=>e.farm_visited,sortable:!0},{id:"farmer_trainer",name:"Farmer Trainer",selector:e=>e.farmer_trainer,sortable:!0},{id:"date_visited",name:"Date Visited",selector:e=>e.date_visited,sortable:!0}],data:a,tableRowItem:"farmvisit"})})};function A(e){const{children:t,value:a,index:i,...r}=e;return(0,l.jsx)("div",{role:"tabpanel",hidden:a!==i,id:`simple-tabpanel-${i}`,"aria-labelledby":`simple-tab-${i}`,...r,children:a===i&&(0,l.jsx)(c.A,{sx:{p:3},children:(0,l.jsx)(m.A,{children:t})})})}const y=e=>{let{trainingSessions:t,participant:a,farmVisitsPerPart:r}=e;console.log(r);const[n,s]=(0,i.useState)(0);return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(c.A,{sx:{width:"100%"},children:[(0,l.jsx)(c.A,{sx:{borderBottom:1,borderColor:"divider",borderTopLeftRadius:"3px",borderTopRightRadius:"3px",backgroundColor:"rgba(0, 165, 163, 0.1)"},children:(0,l.jsxs)(p.A,{value:n,onChange:(e,t)=>{s(t)},"aria-label":"basic tabs example",textColor:"primary",children:[(0,l.jsx)(_.A,{label:"Farm Visit History",...(0,u.L7)(0)}),(0,l.jsx)(_.A,{label:"TS Attendance History",...(0,u.L7)(1)})]})}),(0,l.jsx)(A,{value:n,index:0,children:(0,l.jsx)(j,{trainingSessions:t,participant:a,farmVisitsPerPart:r})}),(0,l.jsx)(A,{value:n,index:1,children:(0,l.jsx)(b,{trainingSessions:t,participant:a})})]})})};var S=a(73216),w=a(15527),N=a(32393);const I=()=>{var e;const[t,a]=(0,i.useState)([]),n=(0,S.g)(),{id:s}=n,{loading:o,error:c,data:p}=(0,g.I)(v.Hv,{variables:{id:s}}),{loading:_,error:u,data:h}=(0,g.I)(w.ZH,{variables:{partId:s},skip:!s});if((0,i.useEffect)((()=>{if(h){const e=h.getFarmVisitsByParticipant.farmVisits;a(e)}}),[h]),o||_)return(0,l.jsx)(N.A,{});if(c||u)return(0,l.jsx)("div",{className:"error__container",children:(0,l.jsx)(m.A,{color:"error",children:(null===c||void 0===c?void 0:c.message)||(null===u||void 0===u?void 0:u.message)})});const f=null===p||void 0===p||null===(e=p.getParticipantsById)||void 0===e?void 0:e.participant;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.A,{name:"Details",firstItem:"Participants",linkTo:"participants"}),(0,l.jsx)("div",{className:"parts__container",children:f?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"parts__detailcontent",children:(0,l.jsx)(d,{participant:f})}),(0,l.jsx)("div",{className:"parts__tablecontent",children:(0,l.jsx)(y,{participant:f,farmVisitsPerPart:t})})]}):(0,l.jsx)("div",{className:"no__data",children:(0,l.jsx)("h1",{style:{fontSize:"20px"},children:"No Participant Selected"})})})]})}},82407:(e,t,a)=>{a.d(t,{A:()=>l});a(65043);var i=a(22698),r=a(35475),n=a(51640),s=a(70579);const o=(0,n.A)(r.N_)((e=>{let{theme:t}=e;return{textDecoration:"none",color:"inherit",transition:"color 0.3s ease-in-out","&:hover":{color:"#25245D",fontWeight:"600"}}})),l=e=>{let{name:t,firstItem:a,linkTo:r}=e;return(0,s.jsx)("div",{role:"presentation",children:(0,s.jsxs)(i.A,{"aria-label":"breadcrumb",sx:{fontSize:"12px",cursor:"pointer"},children:[(0,s.jsx)(o,{to:`/in/${r}`,children:a}),(0,s.jsx)(o,{href:"","aria-current":"page",children:t.split(" ").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" ")})]})})}},85040:()=>{}}]);
//# sourceMappingURL=722.64e57107.chunk.js.map