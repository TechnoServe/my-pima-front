"use strict";(self.webpackChunkmypima_front=self.webpackChunkmypima_front||[]).push([[25],{35904:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var r=a(65043),l=a(88250),o=a(6410),s=a(62902),n=a(2855),i=a(23768),c=a(94496),m=a(3438),d=a(81637),u=a(32393),_=a(70579);const p=()=>{const[e,t]=(0,r.useState)([]),{data:a,error:p,loading:g}=(0,l.I)(s.d),[x,{loading:h}]=(0,o._)(s.$,{fetchPolicy:"no-cache",onCompleted:e=>{let{exportWetMillsDataExcel:t}=e;const{filename:a,contentBase64:r}=t;try{const e=atob(r),t=Array.from(e,(e=>e.charCodeAt(0))),l=new Blob([new Uint8Array(t)],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),o=URL.createObjectURL(l),s=document.createElement("a");s.href=o,s.download=a,document.body.appendChild(s),s.click(),s.remove(),URL.revokeObjectURL(o),i.oR.success("Download started")}catch(l){console.error(l),i.oR.error("Failed to download file")}},onError:e=>{console.error(e),i.oR.error(e.message||"Export failed")}});(0,r.useEffect)((()=>{var e;200===(null===a||void 0===a||null===(e=a.getWetmills)||void 0===e?void 0:e.status)&&t(a.getWetmills.wetmills),p&&i.oR.error(p.message)}),[a,p]);const b=e.map(((e,t)=>({num:t+1,...e})));return p?(0,_.jsx)("div",{className:"circular_progress",children:(0,_.jsx)(c.A,{color:"error",children:"Error loading data"})}):(0,_.jsxs)("div",{className:"page__container",children:[(0,_.jsx)("h1",{className:"module__heading",children:"Wetmills"}),(0,_.jsx)("div",{className:"page__actions",children:(0,_.jsx)(m.A,{className:"export__button",variant:"contained",color:"primary",onClick:()=>x(),disabled:h,startIcon:h?(0,_.jsx)(d.A,{size:20}):null,children:h?"Exporting...":"Export Wet Mills Data"})}),g?(0,_.jsx)(u.A,{}):b.length>0?(0,_.jsx)(n.A,{columns:[{id:"num",name:"No.",selector:e=>e.num,sortable:!0},{id:"wet_mill_unique_id",name:"Wetmill ID",selector:e=>e.wet_mill_unique_id,sortable:!0},{id:"name",name:"Wetmill Name",selector:e=>e.name,sortable:!0},{id:"country",name:"Country",selector:e=>e.country,sortable:!0},{id:"mill_status",name:"Ownership",selector:e=>e.mill_status||"N/A",sortable:!0},{id:"exporting_status",name:"Exporting Status",selector:e=>e.exporting_status||"N/A",sortable:!0},{id:"registration_date",name:"Registered On",selector:e=>e.registration_date,sortable:!0}],data:b,tableRowItem:"wetmill"}):(0,_.jsx)("div",{className:"no__data",children:(0,_.jsx)("h1",{style:{fontSize:"20px"},children:"No Wetmills Found"})})]})}},62902:(e,t,a)=>{a.d(t,{$:()=>o,d:()=>l});var r=a(70459);const l=r.J1`
  query GetWetmills {
    getWetmills {
      message
      status
      wetmills {
        id
        wet_mill_unique_id
        commcare_case_id
        name
        mill_status
        exporting_status
        programe
        country
        manager_name
        manager_role
        comments
        wetmill_counter
        ba_signature
        manager_signature
        tor_page_picture
        registration_date
        created_at
        updated_at
      }
    }
  }
`,o=r.J1`
  query ExportWetmillsExcel {
    exportWetMillsDataExcel {
      filename
      contentBase64
    }
  }
`}}]);
//# sourceMappingURL=25.0f96e124.chunk.js.map