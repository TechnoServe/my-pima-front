"use strict";(self.webpackChunkmypima_front=self.webpackChunkmypima_front||[]).push([[430],{92430:(e,t,r)=>{r.r(t),r.d(t,{default:()=>P});var i=r(65043),o=r(94496),s=r(83462),n=r(26600),a=r(35316),l=r(35721),d=r(24628),c=r(23851),m=r(48734),u=r(29347),g=r(3438),h=r(40533),_=r(70579);const p=e=>{let{open:t,handleClose:r,title:i,data:o}=e;return(0,_.jsxs)(s.A,{open:t,onClose:r,children:[(0,_.jsx)(n.A,{children:i}),(0,_.jsx)(a.A,{children:(0,_.jsx)(l.A,{children:o.map(((e,t)=>(0,_.jsxs)(d.Ay,{button:!0,children:[(0,_.jsx)(c.A,{children:(0,_.jsx)(h.Ay,{name:e,size:"40",round:!0,color:"#7B9D6F",fgColor:"#fff"})}),(0,_.jsx)(m.A,{primary:e})]},t)))})}),(0,_.jsx)(u.A,{children:(0,_.jsx)(g.A,{onClick:r,color:"primary",children:"Close"})})]})};var x=r(32393),j=r(68903),v=r(35475);const f=e=>{let{heading:t,figures:r,icon:i,color:o}=e;return(0,_.jsx)("div",{children:(0,_.jsx)("div",{className:"card__container",children:(0,_.jsxs)("div",{className:"card__content",children:[(0,_.jsxs)("div",{className:"card__text",children:[(0,_.jsx)("p",{className:"card__text1",children:t}),(0,_.jsx)("p",{className:"card__text2",children:r})]}),(0,_.jsxs)("div",{className:"card__icon",style:{backgroundColor:o},children:[i," "]})]})})})};var F=r(27149),y=r(91154),A=r(2127),C=r(8860),b=r(85369);const N={MdGroups:(0,_.jsx)(F.Itr,{}),VscFileSubmodule:(0,_.jsx)(y.L94,{}),BsPersonBoundingBox:(0,_.jsx)(A.qYD,{}),GiFarmer:(0,_.jsx)(C.iXK,{}),FaTripadvisor:(0,_.jsx)(b.hSX,{})},T=e=>{let{statsData:t,openList:r}=e;return(0,_.jsx)(j.Ay,{container:!0,spacing:2,children:t.map(((e,t)=>(0,_.jsx)(j.Ay,{item:!0,xs:12,sm:6,md:3,children:(0,_.jsx)(v.k2,{to:e.path||"#",onClick:t=>e.path?null:r(t,e.name),children:(0,_.jsx)(f,{heading:e.heading,figures:e.figures,icon:N[e.iconName]||(0,_.jsx)(F.Itr,{}),color:e.color})})},t)))})};var S=r(71712);const B=e=>{let{modules:t}=e;return 0===t.length?(0,_.jsx)(o.A,{variant:"body1",align:"center",color:"textSecondary",children:"No modules found"}):(0,_.jsx)("div",{style:{width:"100%",height:"500px"},children:(0,_.jsx)(S.u,{items:t,mode:"HORIZONTAL",allowDynamicUpdate:!0,cardWidth:300,cardHeight:150,contentDetailsHeight:250,activeItemIndex:-1!==t.findIndex((e=>e.isCurrent))?t.findIndex((e=>e.isCurrent)):t.length-1,cardPositionHorizontal:"TOP",focusActiveItemOnLoad:!0,theme:{primary:"#087C8F",secondary:"#087C8F",cardBgColor:"#fff",cardForeColor:"#7D7F88",titleColor:"#7D7F88",titleColorActive:"#fff",subtitleColor:"#fff"}})})};var D=r(88250),I=r(70459);I.J1`
  query GetAllTrainingModules {
    getAllTrainingModules {
      message
      status
      training_modules {
        tm_id
        tm_name
        tm_title
        tm_module_number
        tm_project
        tm_status
        tm_is_current
        tm_date
      }
    }
  }
`;const M=I.J1`
  query GetTrainingModulesByProject($projectId: String!) {
    getTrainingModulesByProject(project_id: $projectId) {
      message
      status
      training_modules {
        tm_id
        tm_name
        tm_title
        tm_module_number
        tm_project
        tm_status
        tm_is_current
        tm_date
      }
    }
  }
`;var G=r(73216);const P=()=>{const{trainingGroups:e,projectStats:t,activeProject:r}=(0,G.KC)(),{modules:s,statsData:n,open:a,setOpen:l,list:d,title:c,loading:m,error:u,openList:g}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";const[o,s]=(0,i.useState)(!1),[n,a]=(0,i.useState)([]),[l,d]=(0,i.useState)(""),{data:c,loading:m,error:u}=(0,D.I)(M,{variables:{projectId:r},skip:!r});return{modules:(0,i.useMemo)((()=>{var e;return((null===c||void 0===c||null===(e=c.getTrainingModulesByProject)||void 0===e?void 0:e.training_modules)||[]).map((e=>({title:e.tm_date||"No date",cardTitle:e.tm_is_current?`${e.tm_title} (Current)`:e.tm_title,cardSubtitle:`Session Number: ${e.tm_module_number}`,isCurrent:e.tm_is_current})))}),[c]),statsData:(0,i.useMemo)((()=>{var r;const i=(null===c||void 0===c||null===(r=c.getTrainingModulesByProject)||void 0===r?void 0:r.training_modules)||[];return[{name:"total_training_groups",heading:"Total FFGs",figures:e.length,iconName:"MdGroups",color:"#25245D",path:"/in/traingroup"},{name:"total_training_modules",heading:"Completed Sessions",figures:i.length,iconName:"VscFileSubmodule",color:"#25245D"},{name:"total_completed_training_modules",heading:"Completed Topics",figures:i.filter((e=>!e.tm_is_current)).length,iconName:"VscFileSubmodule",color:"#25245D",path:"/in/trainsession"},{name:"total_participants",heading:"Registered Farmers",figures:e.map((e=>e.total_participants||0)).reduce(((e,t)=>e+t),0).toLocaleString(),iconName:"BsPersonBoundingBox",color:"#087C8F",path:"/in/participants"},{name:"total_households",heading:"Registered Households",figures:e.map((e=>e.total_households||0)).reduce(((e,t)=>e+t),0).toLocaleString(),iconName:"GiFarmer",color:"#F46700"},{name:"trained_farmers",heading:"Trained Farmers",figures:"N/A",iconName:"GiFarmer",color:"#F46700"},{name:"total_bas",heading:"Agronomy Advisors",figures:(null===t||void 0===t?void 0:t.total_bas)||0,iconName:"FaTripadvisor",color:"#F46700"},{name:"total_fts",heading:"Farmer Trainers",figures:(null===t||void 0===t?void 0:t.total_fts)||0,iconName:"GiFarmer",color:"#F46700"}]}),[e,c,t]),open:o,setOpen:s,list:n,title:l,loading:m,error:u,openList:(t,r)=>{t.preventDefault();const i={total_bas:{title:"Business Advisors",list:[...new Set(e.map((e=>e.business_advisor)).filter(Boolean))]},total_fts:{title:"Farmer Trainers",list:[...new Set(e.map((e=>e.farmer_trainer)).filter(Boolean))]}};i[r]&&(s(!0),d(i[r].title),a(i[r].list))}}}(e,t,r);return m?(0,_.jsx)(x.A,{}):u?(0,_.jsxs)("div",{style:{textAlign:"center",paddingTop:"5%"},children:[(0,_.jsx)(o.A,{variant:"h6",color:"error",children:"Failed to load dashboard data."}),(0,_.jsx)(o.A,{variant:"body2",color:"textSecondary",children:u.message})]}):(0,_.jsxs)("div",{children:[(0,_.jsx)("h1",{className:"module__heading",children:"Your Dashboard"}),(0,_.jsx)(T,{statsData:n,openList:g}),(0,_.jsxs)("div",{style:{marginTop:"20px"},children:[(0,_.jsx)("h4",{children:"Project Modules Timeline"}),(0,_.jsx)(B,{modules:s})]}),(0,_.jsx)(p,{open:a&&e.length>0,handleClose:()=>l(!1),data:d,title:c})]})}}}]);
//# sourceMappingURL=430.8aceea17.chunk.js.map