(self.webpackChunkmypima_front=self.webpackChunkmypima_front||[]).push([[439],{15527:(e,t,i)=>{"use strict";i.d(t,{Ee:()=>l,Nb:()=>r,S7:()=>c,Vh:()=>a,YI:()=>m,ZH:()=>n,hz:()=>o,lg:()=>d});var s=i(70459);const a=s.J1`
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
`),c=s.J1`
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
`,d=s.J1`
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
`,l=s.J1`
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
`)},30439:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>v});var s=i(65043),a=i(88250),r=i(31881),n=i(6410),o=i(15527),c=i(23768),d=i(72450),l=i(70579);const m=[{name:"Compost"},{name:"Compost BU"},{name:"Main Stems"},{name:"Shade Management"},{name:"Weeding"},{name:"Record Book"},{name:"Stumping"}],p=()=>(0,l.jsxs)("div",{className:"loading-container",children:[(0,l.jsx)("div",{className:"spinner"}),(0,l.jsx)("p",{children:"Loading, please wait..."})]}),u=e=>{let{message:t}=e;return(0,l.jsx)("div",{className:"error-container",children:(0,l.jsxs)("div",{className:"error-message",children:[(0,l.jsx)("h3",{children:"Something went wrong"}),(0,l.jsx)("p",{children:t}),(0,l.jsx)("button",{onClick:()=>window.location.reload(),children:"Try Again"})]})})},g=e=>{var t,i;let{practice:s,onSelect:r,projectId:n}=e;const{data:c,loading:d,error:m}=(0,a.I)(o.S7,{variables:{projectId:n,practiceName:s.name}});return(0,l.jsxs)("div",{className:"practice-card",onClick:()=>r(s),children:[(0,l.jsx)("h3",{children:s.name}),d&&(0,l.jsx)(p,{}),m&&(0,l.jsx)(u,{message:m.message}),!d&&!m&&(0,l.jsxs)("div",{className:"progress",children:[(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:"Reviewed:"})," ",(null===c||void 0===c||null===(t=c.getBestPracticeReviewStats)||void 0===t?void 0:t.reviewedVisits)||0]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:"Remaining:"})," ",(null===c||void 0===c||null===(i=c.getBestPracticeReviewStats)||void 0===i?void 0:i.remainingVisits)||0]})]})]})},v=e=>{let{selectedProject:t,userId:i}=e;const[v,h]=(0,s.useState)(null),[f,_]=(0,s.useState)(0),[j,x]=(0,s.useState)([]),[w,b]=(0,s.useState)([]),[S,y]=(0,s.useState)({}),[N,I]=(0,s.useState)({}),[$,R]=(0,s.useState)(null),[V,B]=(0,s.useState)({}),[F,A]=(0,s.useState)(!1),[P,k]=(0,s.useState)(!1),{data:q,loading:E,error:C}=(0,a.I)(o.hz,{variables:{projectId:t}}),{data:J,loading:L,error:U,refetch:M}=(0,a.I)(o.lg,{variables:{projectId:t,practiceName:v?v.name:"",page:0,pageSize:1e3},skip:!v,fetchPolicy:"network-only"}),[T]=(0,r.n)(o.YI),[G]=(0,n._)(o.Ee,{fetchPolicy:"network-only"});(0,s.useEffect)((()=>{J&&J.getPaginatedReviews&&x(J.getPaginatedReviews)}),[J]),(0,s.useEffect)((()=>{if(v){const e=j.filter((e=>e.BestPractices.some((e=>e.practice_name===v.name))));b(e)}}),[v,j]);const Q=e=>{h(e),_(0),y({}),I({}),M({practiceName:e.name})},O=(e,t)=>{const i=atob(e),s=[];for(let a=0;a<i.length;a+=512){const e=i.slice(a,a+512),t=new Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);const r=new Uint8Array(t);s.push(r)}return new Blob(s,{type:t})};if(E)return(0,l.jsx)(p,{});if(C)return(0,l.jsx)(u,{message:C.message});const{totalSampledVisits:D,totalReviewed:z,remainingVisits:H}=q.getSampledVisitsStats;return(0,l.jsx)("div",{className:"farm-visit-app",children:v?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"indicator",children:(0,l.jsx)("span",{onClick:()=>{h(null),_(0),y({}),I({})},className:"indicator-link",children:"Back to Practice Overview"})}),(0,l.jsxs)("h2",{className:"sub-header",children:["Reviewing ",v.name]}),L&&(0,l.jsx)(p,{}),U&&(0,l.jsx)(u,{message:U.message}),!L&&!U&&w.length>0&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"visit-list",children:w.slice(5*f,5*(f+1)).map((e=>{var t;const i=e.BestPractices.find((e=>e.practice_name===v.name)),[s,a]=(null===i||void 0===i||null===(t=i.image_url)||void 0===t?void 0:t.split("/").slice(-2))||[];return(0,l.jsxs)("div",{className:"visit-item",children:[(0,l.jsxs)("div",{className:"visit-details",children:[(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:"Farmer PIMA ID:"})," ",e.farmer_pima_id]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:"Farmer TNS ID:"})," ",e.farmer_tns_id]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:"Date Visited:"})," ",e.date_visited]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:"Farmer Name:"})," ",e.farmer_name]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:"Farmer Trainer:"})," ",e.farmer_trainer]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:"Question:"})," ",(null===i||void 0===i?void 0:i.question)||"N/A"]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:"Observation:"})," ",(null===i||void 0===i?void 0:i.answer)||"N/A"]})]}),(0,l.jsxs)("div",{className:"visit-image",children:[V[a]&&(0,l.jsx)(p,{}),(0,l.jsx)("img",{src:null!==i&&void 0!==i&&i.image_url?`https://api.pima.ink/image/${s}/${a}`:"https://via.placeholder.com/150",alt:"Farm Visit",style:{display:V[a]?"none":"block"},onLoad:()=>(e=>{B((t=>({...t,[e]:!1})))})(a),onError:()=>(e=>{B((t=>({...t,[e]:!1})))})(a),onClick:()=>((e,t)=>{R(`https://api.pima.ink/image/${e}/${t}`)})(s,a)})]}),(0,l.jsxs)("div",{className:"answer-field",children:[(0,l.jsx)("label",{children:"Correct Answer?"}),(0,l.jsxs)("select",{value:S[e.visit_id]||"",onChange:t=>{return i=e.visit_id,s=t.target.value,void y((e=>({...e,[i]:s})));var i,s},children:[(0,l.jsx)("option",{value:"",children:"-- Select --"}),(0,l.jsx)("option",{value:"Yes",children:"Yes"}),(0,l.jsx)("option",{value:"No",children:"No"}),(0,l.jsx)("option",{value:"Unclear",children:"Unclear"})]})]}),(0,l.jsxs)("div",{className:"comment-field",children:[(0,l.jsx)("label",{children:"Comments:"}),(0,l.jsx)("textarea",{value:N[e.visit_id]||"",onChange:t=>{return i=e.visit_id,s=t.target.value,void I((e=>({...e,[i]:s})));var i,s},placeholder:"No"===S[e.visit_id]?"Required is answer is 'No'":"Required",required:"No"===S[e.visit_id],className:"No"!==S[e.visit_id]||N[e.visit_id]?"":"error"}),"No"===S[e.visit_id]&&!N[e.visit_id]&&(0,l.jsx)("p",{className:"error-message",children:"Comment is required for 'No' answers"})]})]},e.visit_id)}))}),(0,l.jsxs)("div",{className:"pagination-info",children:["Reviewing"," ",Math.min(5*(f+1),w.length)," of"," ",w.length," records"]}),(0,l.jsxs)("div",{className:"pagination-controls",children:[(0,l.jsx)("button",{disabled:0===f,onClick:()=>_(f-1),children:"Previous"}),(0,l.jsxs)("span",{className:"current-page",children:["Page ",f+1," of"," ",Math.ceil(w.length/5)]}),(0,l.jsx)("button",{disabled:f>=Math.floor(w.length/5),onClick:()=>_(f+1),children:"Next"})]}),(0,l.jsx)("button",{className:"submit-button",onClick:()=>{const e=w.slice(5*f,5*(f+1)),t=e.every((e=>S[e.visit_id])),s=e.every((e=>"Yes"===S[e.visit_id]||"No"===S[e.visit_id]&&N[e.visit_id]));if(!t)return void c.oR.error("Please fill out 'Correct Answer?' for all records before submitting.");if(!s)return void c.oR.error("Please provide comments for all records with 'No' answers.");const a=e.map((e=>({practice_id:e.BestPractices.find((e=>e.practice_name===v.name)).practice_id,correct_answer:S[e.visit_id].toLowerCase(),comment:N[e.visit_id]||"",user_id:i})));A(!0),T({variables:{input:a}}).then((e=>{A(!1),e.data.submitBatch.success?(c.oR.success("Batch submitted successfully!"),y({}),I({}),_(0),M({fetchPolicy:"network-only"})):c.oR.error("Failed to submit batch: "+e.data.submitBatch.message)})).catch((e=>{A(!1),console.error("Error submitting batch:",e),c.oR.error("An error occurred while submitting the batch.")}))},disabled:F,children:F?"Submitting...":"Submit Batch"})]}),$&&(0,l.jsx)("div",{className:"image-modal",onClick:()=>{R(null)},children:(0,l.jsx)("img",{src:$,alt:"Fullscreen Farm Visit"})})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"dashboard-header",children:[(0,l.jsxs)("div",{className:"dashboard-info",children:[(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:"Total Sampled Visits:"})," ",D]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:"Total Reviewed:"})," ",z]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:"Remaining Visits:"})," ",H]})]}),(0,l.jsx)("button",{className:"download-button",onClick:()=>{t?(k(!0),G({variables:{projectId:t}}).then((e=>{const{generateFarmVisitReport:t}=e.data;if(200===t.status&&t.file){const e=t.file.split(",")[1],i=O(e,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");(0,d.saveAs)(i,"farm_visit_statistics.xlsx"),c.oR.success("Download started.")}else c.oR.error(t.message||"Failed to generate report.");k(!1)})).catch((e=>{console.error("Error generating report:",e),c.oR.error("An error occurred while generating the report."),k(!1)}))):c.oR.error("No project selected.")},disabled:P,children:P?"Downloading...":"Download Report"})]}),(0,l.jsx)("h1",{className:"dashboard-title",children:"Choose Adoption Method to Review"}),(0,l.jsx)("div",{className:"practices-container",children:m.map((e=>(0,l.jsx)(g,{practice:e,projectId:t,onSelect:Q},e.name)))})]})})}},72450:function(e,t,i){var s,a,r;a=[],void 0===(r="function"===typeof(s=function(){"use strict";function t(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function s(e,t,i){var s=new XMLHttpRequest;s.open("GET",e),s.responseType="blob",s.onload=function(){c(s.response,t,i)},s.onerror=function(){console.error("could not download file")},s.send()}function a(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function r(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(s){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var n="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof i.g&&i.g.global===i.g?i.g:void 0,o=n.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=n.saveAs||("object"!=typeof window||window!==n?function(){}:"download"in HTMLAnchorElement.prototype&&!o?function(e,t,i){var o=n.URL||n.webkitURL,c=document.createElement("a");t=t||e.name||"download",c.download=t,c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?r(c):a(c.href)?s(e,t,i):r(c,c.target="_blank")):(c.href=o.createObjectURL(e),setTimeout((function(){o.revokeObjectURL(c.href)}),4e4),setTimeout((function(){r(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,i,n){if(i=i||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,n),i);else if(a(e))s(e,i,n);else{var o=document.createElement("a");o.href=e,o.target="_blank",setTimeout((function(){r(o)}))}}:function(e,t,i,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof e)return s(e,t,i);var r="application/octet-stream"===e.type,c=/constructor/i.test(n.HTMLElement)||n.safari,d=/CriOS\/[\d]+/.test(navigator.userAgent);if((d||r&&c||o)&&"undefined"!=typeof FileReader){var l=new FileReader;l.onloadend=function(){var e=l.result;e=d?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=e:location=e,a=null},l.readAsDataURL(e)}else{var m=n.URL||n.webkitURL,p=m.createObjectURL(e);a?a.location=p:location.href=p,a=null,setTimeout((function(){m.revokeObjectURL(p)}),4e4)}});n.saveAs=c.saveAs=c,e.exports=c})?s.apply(t,a):s)||(e.exports=r)}}]);
//# sourceMappingURL=439.6a1cc50a.chunk.js.map