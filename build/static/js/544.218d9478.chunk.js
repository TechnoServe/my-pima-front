"use strict";(self.webpackChunkmypima_front=self.webpackChunkmypima_front||[]).push([[544],{40519:(e,s,t)=>{t.d(s,{B3:()=>n,C1:()=>i,em:()=>r,se:()=>o});var a=t(70459);const r=a.J1`
  query GetUsers {
    getUsers {
      message
      status
      users {
        user_id
        sf_user_id
        user_name
        user_email
        mobile_no
        account_status
        role {
          role_id
          role_name
        }
      }
    }
  }
`,i=a.J1`
  mutation AddUser(
    $userName: String!
    $userEmail: String!
    $mobileNo: String!
    $userPassword: String!
    $roleId: ID
  ) {
    addUser(
      user_name: $userName
      user_email: $userEmail
      mobile_no: $mobileNo
      user_password: $userPassword
      role_id: $roleId
    ) {
      message
      status
      user {
        user_id
        sf_user_id
        user_name
        user_email
        mobile_no
        role_id
        role {
          role_desc
          role_id
          role_name
          role_status
        }
        account_status
      }
    }
  }
`,o=a.J1`
  mutation UpdateUser(
    $userId: ID!
    $accountStatus: String
    $userEmail: String
    $mobileNo: String
    $userName: String
    $roleId: ID
  ) {
    updateUser(
      user_id: $userId
      account_status: $accountStatus
      user_email: $userEmail
      mobile_no: $mobileNo
      user_name: $userName
      role_id: $roleId
    ) {
      message
      status
      user {
        user_id
        sf_user_id
        user_name
        user_email
        mobile_no
        role_id
        account_status
        role {
          role_id
          role_name
          role_desc
          permissions
          is_default
          role_status
        }
      }
    }
  }
`,n=a.J1`
  query GetWetmillBas($sfProjectId: String!) {
    getWetMillBusinessAdvisors(sfProjectId: $sfProjectId) {
      advisors {
        id
        name
        wetmillId
      }
      message
      status
    }
  }
`},95544:(e,s,t)=>{t.r(s),t.d(s,{default:()=>h});var a=t(65043),r=t(94496),i=t(88250),o=t(62902);const n=t(70459).J1`
  query GetWetmillVisits($program: String!) {
    getVisits(program: $program) {
      message
      status
      visits {
        id
        visited_at
        wetmillId
      }
    }
  }
`;var l=t(40519),u=t(73216);let d="a0EOj000004XC1hMAG";var c=t(6058),m=t(76361),_=t(70579);m.t1.register(m.PP,m.kc,m.Bs,m.No,m.FN,m.m_,m.s$);const g=e=>{let{millsCount:s,basCount:t,visitsPerWeekData:a,ownershipData:r,exportingStatusData:i}=e;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("div",{className:"graphs__stats",children:[(0,_.jsxs)("div",{className:"stat-card",children:[(0,_.jsx)("h2",{children:"Total Registered Wet Mills"}),(0,_.jsx)("p",{children:s})]}),(0,_.jsxs)("div",{className:"stat-card",children:[(0,_.jsx)("h2",{children:"Total BAs"}),(0,_.jsx)("p",{children:t})]})]}),(0,_.jsxs)("div",{className:"sustain__card sustain__full",children:[(0,_.jsx)("h3",{className:"sustain__cardTitle",children:"Wet Mill Visits per Week"}),(0,_.jsx)(c.N1,{data:{labels:a.map((e=>e.week)),datasets:[{label:"Wet Mill Visits",data:a.map((e=>e.count)),fill:!0,borderColor:"#087c8f",backgroundColor:"rgba(8, 124, 143, 0.15)",tension:.4}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"top"}},scales:{x:{grid:{display:!1}},y:{ticks:{callback:function(e){return Number.isInteger(e)?e:""},stepSize:1}}}},height:200})]}),(0,_.jsxs)("div",{className:"sustain__grid",children:[(0,_.jsxs)("div",{className:"sustain__card",children:[(0,_.jsx)("h3",{className:"sustain__cardTitle",children:"Ownership Type"}),(0,_.jsx)(c.Fq,{data:{labels:r.map((e=>e.label)),datasets:[{data:r.map((e=>e.count)),backgroundColor:["#087c8f","#cccccc"],borderColor:"#ffffff",borderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"top"}}},height:200})]}),(0,_.jsxs)("div",{className:"sustain__card",children:[(0,_.jsx)("h3",{className:"sustain__cardTitle",children:"Exporter Status"}),(0,_.jsx)(c.Fq,{data:{labels:i.map((e=>e.label)),datasets:[{data:i.map((e=>e.count)),backgroundColor:["#f7931e","#333333"],borderColor:"#ffffff",borderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"top"}}},height:200})]})]})]})};var p=t(32393);const h=()=>{const{loading:e,error:s,millsCount:t,basCount:c,visitsPerWeekData:m,ownershipData:h,exportingStatusData:v,registrationTimelineData:b}=(()=>{var e,s,t;const{program:r}=(0,u.KC)();console.log("Program in useDashboardData:",r),d="Ethiopia Regrow USDA"===r?"a0EOj000004XC1hMAG":"Ethiopia CREW GAC"===r?"a0EOj000004XC3JMAW":"Ethiopia Nespresso"===r?"a0EOj000004XC4vMAG":"a0EOj000004FvmrMAC";const{data:c,loading:m,error:_}=(0,i.I)(o.d,{variables:{program:r}}),{data:g,loading:p,error:h}=(0,i.I)(l.B3,{variables:{sfProjectId:d}}),{data:v,loading:b,error:j}=(0,i.I)(n,{variables:{program:r}}),f=(null===c||void 0===c||null===(e=c.getWetmills)||void 0===e?void 0:e.wetmills)||[],x=(null===g||void 0===g||null===(s=g.getWetMillBusinessAdvisors)||void 0===s?void 0:s.advisors)||[],$=(null===v||void 0===v||null===(t=v.getVisits)||void 0===t?void 0:t.visits)||[];return console.log("Visits Data:",$),{loading:m||p||b,error:_||h||j,millsCount:f.length,basCount:x.length,visitsPerWeekData:(0,a.useMemo)((()=>{const e={};return $.forEach((s=>{const t=new Date(s.visited_at),a=t.getFullYear(),r=t.getMonth(),i=t.getDate(),o=new Date(a,r,1),n=Math.ceil((i+o.getDay())/7),l=`${t.toLocaleString("default",{month:"short"})} W${n}`,u=new Date(a,r,7*(n-1)+1).getTime();e[l]||(e[l]={count:0,sortKey:u}),e[l].count+=1})),Object.entries(e).map((e=>{let[s,{count:t,sortKey:a}]=e;return{week:s,count:t,sortKey:a}})).sort(((e,s)=>e.sortKey-s.sortKey)).map((e=>{let{week:s,count:t}=e;return{week:s,count:t}}))}),[$]),ownershipData:(0,a.useMemo)((()=>{const e={};return f.forEach((s=>{const t=s.mill_status||"Unknown";e[t]=(e[t]||0)+1})),Object.entries(e).map((e=>{let[s,t]=e;return{label:s,count:t}}))}),[f]),exportingStatusData:(0,a.useMemo)((()=>{const e={};return f.forEach((s=>{const t=s.exporting_status?"Exporter":"Non-exporter";e[t]=(e[t]||0)+1})),Object.entries(e).map((e=>{let[s,t]=e;return{label:s,count:t}}))}),[f]),registrationTimelineData:(0,a.useMemo)((()=>{const e={};return f.forEach((s=>{const t=new Date(s.created_at).getFullYear();e[t]=(e[t]||0)+1})),Object.entries(e).map((e=>{let[s,t]=e;return{year:s,count:t}})).sort(((e,s)=>e.year-s.year))}),[f])}})();return e?(0,_.jsx)(p.A,{}):s?(0,_.jsxs)("div",{className:"sustain__error",children:[(0,_.jsx)(r.A,{variant:"h6",color:"error",children:"Failed to load summary data"}),(0,_.jsx)(r.A,{variant:"body2",color:"textSecondary",children:s.message})]}):(0,_.jsxs)("div",{className:"sustain__container",children:[(0,_.jsx)("header",{className:"sustain__header",children:(0,_.jsx)("h1",{children:"Summary Page"})}),(0,_.jsx)(g,{millsCount:t,basCount:c,visitsPerWeekData:m,ownershipData:h,exportingStatusData:v,registrationTimelineData:b})]})}}}]);
//# sourceMappingURL=544.218d9478.chunk.js.map