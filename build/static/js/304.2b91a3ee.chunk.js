"use strict";(self.webpackChunkmypima_front=self.webpackChunkmypima_front||[]).push([[304],{13304:(e,s,t)=>{t.r(s),t.d(s,{CustomTabPanel:()=>ge,a11yProps:()=>Ae,default:()=>_e});var r=t(65043),a=t(7353),l=t(94496),n=t(83625),i=t(24056),o=t(12110),d=t(26494),c=t(68903),u=t(2828),m=t(27600),p=t(21069),x=t(34535),h=t(77476),j=t(62559),g=t(83462),A=t(26600),_=t(43845),f=t(39336),b=t(35316),y=t(53193),v=t(3438),w=t(35721),C=t(24628),S=t(48734),I=t(2050),N=t(29347),P=t(41434),L=t(67805),U=t(15603),$=t(88250),R=t(31881),E=t(40519),k=t(70459);const B=k.J1`
  query GetRoles {
    getRoles {
      message
      status
      roles {
        role_id
        role_name
        role_desc
        permissions
        is_default
        role_status
      }
    }
  }
`,T=(k.J1`
  query GetRole($roleId: ID!) {
    getRole(role_id: $roleId) {
      message
      status
      role {
        role_id
        role_desc
        role_name
        role_status
      }
    }
  }
`,k.J1`
  mutation UpdateRole($roleId: ID!, $permissions: [String]) {
    updateRole(role_id: $roleId, permissions: $permissions) {
      message
      status
      role {
        permissions
        role_id
        role_desc
        role_name
        role_status
        is_default
      }
    }
  }
`);var J=t(23768),D=t(45421),M=t(73949),z=t(70579);const W=(0,x.Ay)("div")((e=>{let{theme:s}=e;return{position:"relative",borderRadius:s.shape.borderRadius,backgroundColor:(0,h.X4)(s.palette.common.white,.15),"&:hover":{backgroundColor:(0,h.X4)(s.palette.common.white,.25)},marginLeft:0,width:"100%",[s.breakpoints.up("sm")]:{marginLeft:s.spacing(1),width:"auto"}}})),F=(0,x.Ay)("div")((e=>{let{theme:s}=e;return{padding:s.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),X=(0,x.Ay)(j.Ay)((e=>{let{theme:s}=e;return{color:"inherit","& .MuiInputBase-input":{padding:s.spacing(1,1,1,0),paddingLeft:`calc(1em + ${s.spacing(4)})`,transition:s.transitions.create("width"),width:"100%",[s.breakpoints.up("sm")]:{width:"12ch","&:focus":{width:"20ch"}}}}})),q=e=>{let{open:s,handleClose:t,title:n,data:i,selectedProject:o}=e;const[d,c]=(0,r.useState)(!1),[u,m]=(0,r.useState)([]),[p,x]=(0,r.useState)([]),[h,j]=(0,r.useState)([]),[k,T]=(0,r.useState)(null),[q,G]=(0,r.useState)(null),[V,Y]=(0,r.useState)(!1),[O,Z]=(0,r.useState)(!1),H=(0,$.I)(E.em),K=(0,$.I)(B),[Q]=(0,R.n)(M.Jn),[ee]=(0,R.n)(E.se);(0,r.useEffect)((()=>{m(i)}),[i]),(0,r.useEffect)((()=>{H.data&&x(H.data.getUsers.users)}),[H.data]),(0,r.useEffect)((()=>{K.data&&j(K.data.getRoles.roles)}),[K.data]);return(0,z.jsxs)(g.A,{open:s,onClose:t,children:[(0,z.jsxs)(A.A,{fontSize:"18px",children:[(0,z.jsx)(_.A,{label:i.length,style:{color:"#333"},variant:"contained"})," ","Users Assigned to"," ",(0,z.jsx)(_.A,{label:n,color:"primary",variant:"contained"}),(0,z.jsx)(f.A,{})]}),(0,z.jsx)(b.A,{children:d?(0,z.jsxs)(a.A,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,z.jsxs)(y.A,{sx:{width:"100%"},children:[(0,z.jsx)(l.A,{variant:"body1",sx:{marginBottom:"10px"},children:"Select User"}),(0,z.jsx)(U.Ay,{name:"user",defaultValue:O?null:{value:k,label:p.find((e=>e.user_id===k)).user_name},options:p.length>0?p.map((e=>({value:e.user_id,label:e.user_name}))):[],onChange:e=>{T(e.value)},className:"basic-multi-select",classNamePrefix:"select"})]}),(0,z.jsxs)(y.A,{sx:{width:"100%",marginTop:"10px"},children:[(0,z.jsx)(l.A,{variant:"body1",sx:{marginBottom:"10px"},children:"Select Role"}),(0,z.jsx)(U.Ay,{name:"role",defaultValue:O?null:{value:q,label:h.find((e=>e.role_id===q)).role_name},options:h.length>0?h.map((e=>({value:e.role_id,label:e.role_name}))):[],onChange:e=>{G(e.value)},className:"basic-multi-select",classNamePrefix:"select"})]}),(0,z.jsxs)(a.A,{sx:{display:"flex",justifyContent:"flex-end",width:"100%",marginTop:"10px"},children:[(0,z.jsx)(v.A,{variant:"contained",color:"primary",sx:{marginTop:"10px",marginRight:"10px"},onClick:O?async()=>{if(k&&q){Y(!0);const{data:e}=await Q({variables:{userId:k,projectId:o,roleId:q}});200===e.addProjectRole.status?(J.Ay.success(e.addProjectRole.message),T(null),G(null),Y(!1),c(!1)):(Y(!1),J.Ay.error(e.addProjectRole.message))}else J.Ay.error("Please select user and role")}:async()=>{if(k&&q){Y(!0);const{data:e}=await ee({variables:{userId:k,roleId:q}});200===e.updateUser.status?(J.Ay.success(e.updateUser.message),T(null),G(null),Y(!1),c(!1)):(Y(!1),J.Ay.error(e.updateUser.message))}else J.Ay.error("Please select user and role")},disabled:V,children:V?(0,z.jsx)(D.A,{color:"#fff",loading:!0,size:10}):O?"Save":"Modify"}),(0,z.jsx)(v.A,{variant:"contained",color:"error",sx:{marginTop:"10px"},onClick:()=>{T(null),G(null),c(!1)},children:"Cancel"})]})]}):(0,z.jsxs)(w.A,{children:[(0,z.jsx)(C.Ay,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"5px 0"},children:(0,z.jsxs)(W,{onChange:e=>{const s=e.target.value,t=i.filter((e=>e.user.user_name.toLowerCase().includes(s.toLowerCase())||e.role.role_name.toLowerCase().includes(s.toLowerCase())));m(t)},children:[(0,z.jsx)(F,{children:(0,z.jsx)(L.LUJ,{})}),(0,z.jsx)(X,{placeholder:"Search any\u2026",inputProps:{"aria-label":"search"}})]})}),u.length>0?u.map(((e,s)=>(0,z.jsxs)(C.Ay,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"5px 0"},children:[(0,z.jsx)(S.A,{primary:e.user?e.user.user_name:"N/A"}),(0,z.jsx)(_.A,{label:e.role?e.role.role_name:"N/A",color:"secondary",variant:"outlined",size:"small",sx:{marginRight:"10px"}}),(0,z.jsx)(I.A,{children:(0,z.jsx)(L.guD,{size:20,color:"gray",style:{cursor:"pointer"},onClick:()=>{T(e.user.user_id),G(e.role.role_id),c(!0),Z(!1)}})}),(0,z.jsx)(I.A,{children:(0,z.jsx)(P.ZsL,{size:20,color:"red"})})]},s))):(0,z.jsx)(l.A,{style:{alignSelf:"center"},children:"No users assigned to this project"})]})}),(0,z.jsxs)(N.A,{children:[!d&&(0,z.jsx)(v.A,{onClick:()=>{c(!0),Z(!0)},color:"primary",children:"Add New"}),(0,z.jsx)(v.A,{onClick:t,color:"primary",children:"Close"})]})]})};var G=t(6410);const V={marginTop:"15px",fontWeight:"400",color:"rgba(125, 127, 136, 1)",fontSize:"12px",maxWidth:"80%"},Y=e=>{let{allProjects:s}=e;const[t,a]=(0,r.useState)(!1),[n,i]=(0,r.useState)([]),[x,h]=(0,r.useState)(""),[j,g]=(0,r.useState)(null),[A,{data:_}]=(0,G._)(M.Ny);return(0,r.useEffect)((()=>{if(_&&_.getProjectRolesByProjectId){const{project_role:e}=_.getProjectRolesByProjectId;i(e),h(e[0].project.project_name),g(e[0].project.project_id),a(!0)}}),[_]),(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)("div",{style:{margin:"10px 0 15px 0"},children:[(0,z.jsx)("h1",{children:"Projects Assignment"}),(0,z.jsx)("p",{style:V,children:"In the project assignment page you can assign projects to users."})]}),s&&s.length>0?(0,z.jsx)(c.Ay,{container:!0,spacing:2,children:s.map((e=>(0,z.jsx)(c.Ay,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,z.jsxs)(o.A,{sx:{maxWidth:250},children:[(0,z.jsx)(u.A,{children:(0,z.jsxs)(d.A,{children:[(0,z.jsx)(l.A,{gutterBottom:!0,variant:"body1",component:"div",children:e.project_name}),(0,z.jsxs)(l.A,{variant:"body4",color:"text.secondary",children:["SF Id: ",(0,z.jsx)("em",{children:e.sf_project_id})]})]})}),(0,z.jsx)(m.A,{sx:{display:"flex",justifyContent:"flex-end"},children:(0,z.jsx)(p.VFx,{size:30,style:{cursor:"pointer"},onClick:()=>(async e=>{await A({variables:{projectId:e.project_id}})})(e)})})]})},e.project_id)))}):(0,z.jsx)("p",{children:"No projects found"}),(0,z.jsx)(q,{open:t,handleClose:()=>a(!1),data:n,title:x,selectedProject:j})]})};var O=t(2127);const Z=(0,x.Ay)("div")((e=>{let{theme:s}=e;return{position:"relative",borderRadius:s.shape.borderRadius,backgroundColor:(0,h.X4)(s.palette.common.white,.15),"&:hover":{backgroundColor:(0,h.X4)(s.palette.common.white,.25)},marginLeft:0,width:"100%",[s.breakpoints.up("sm")]:{marginLeft:s.spacing(1),width:"auto"}}})),H=(0,x.Ay)("div")((e=>{let{theme:s}=e;return{padding:s.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),K=(0,x.Ay)(j.Ay)((e=>{let{theme:s}=e;return{color:"inherit","& .MuiInputBase-input":{padding:s.spacing(1,1,1,0),paddingLeft:`calc(1em + ${s.spacing(4)})`,transition:s.transitions.create("width"),width:"100%",[s.breakpoints.up("sm")]:{width:"12ch","&:focus":{width:"20ch"}}}}})),Q=e=>{let{users:s,onSelect:t}=e;const[n,i]=(0,r.useState)([]);return(0,r.useEffect)((()=>{i(s)}),[s]),(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(Z,{onChange:e=>{const t=e.target.value,r=s.filter((e=>e.user_name.toLowerCase().includes(t.toLowerCase())||e.user_email&&e.user_email.toLowerCase().includes(t.toLowerCase())||e.mobile_no&&e.mobile_no.toLowerCase().includes(t.toLowerCase())||e.sf_user_id&&e.sf_user_id.toLowerCase().includes(t.toLowerCase())||e.role.role_name&&e.role.role_name.toLowerCase().includes(t.toLowerCase())));i(r)},children:[(0,z.jsx)(H,{children:(0,z.jsx)(L.LUJ,{})}),(0,z.jsx)(K,{placeholder:"Search user\u2026",inputProps:{"aria-label":"search"}})]}),(0,z.jsx)("div",{style:{height:"calc(100vh - 200px)",overflowY:"scroll",marginTop:"20px"},children:n.length>0?n.map((e=>(0,z.jsx)(o.A,{sx:{marginBottom:2},children:(0,z.jsxs)(d.A,{children:[(0,z.jsxs)(l.A,{variant:"h6",children:[e.user_name,(0,z.jsx)(_.A,{label:e.role.role_name,color:"secondary",variant:"outlined",sx:{marginLeft:"10px"}}),"active"!==e.account_status&&(0,z.jsx)(_.A,{label:e.account_status,color:"error",variant:"contained",sx:{marginLeft:"5px"}})]}),(0,z.jsxs)(a.A,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,z.jsx)(l.A,{variant:"subtitle2",children:"Email:"}),(0,z.jsx)(l.A,{variant:"subtitle1",children:e.user_email||"N/A"})]}),(0,z.jsxs)(a.A,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,z.jsx)(l.A,{variant:"subtitle2",children:"Mobile No.:"}),(0,z.jsx)(l.A,{variant:"subtitle1",children:e.mobile_no||"N/A"})]}),(0,z.jsxs)(a.A,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,z.jsx)(l.A,{variant:"subtitle2",children:"SF Id:"}),(0,z.jsx)(l.A,{variant:"subtitle1",children:e.sf_user_id})]}),(0,z.jsx)(f.A,{}),(0,z.jsx)(a.A,{sx:{display:"flex",justifyContent:"flex-end",alignItems:"center",marginTop:"10px"},children:(0,z.jsx)(O.ArI,{color:"secondary",style:{cursor:"pointer"},title:"Edit User",onClick:()=>t(e)})})]})},e.id))):(0,z.jsx)(l.A,{variant:"em",align:"center",children:"Please wait while we fetch users..."})})]})};var ee=t(67784);const se=e=>{let{onSubmit:s,selectedUser:t,onSelect:n}=e;const[i,o]=(0,r.useState)(!1),[d,c]=(0,r.useState)([]),[u,m]=(0,r.useState)(null),[p,x]=(0,r.useState)({userName:"",userEmail:"",mobileNo:"",roleId:"",accountStatus:"active"}),[h]=(0,R.n)(E.se),[j]=(0,R.n)(E.C1),g=(0,$.I)(B);(0,r.useEffect)((()=>{if(g.data&&g.data.getRoles&&g.data.getRoles.roles&&g.data.getRoles.roles.length>0){const e=g.data.getRoles.roles.map((e=>({value:e.role_id,label:e.role_name})));if(c(e),t){const s=e.find((e=>e.value===t.role.role_id));m(s)}}}),[g.data]),(0,r.useEffect)((()=>{t&&x({userName:t.user_name,userEmail:t.user_email||"",mobileNo:t.mobile_no||"",roleId:t.role.role_id,accountStatus:t.account_status})}),[t]);return(0,z.jsxs)(a.A,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,z.jsx)(l.A,{variant:"h5",sx:{marginBottom:"20px"},children:t?"Edit User":"Add User"}),(0,z.jsxs)("form",{onSubmit:async e=>{if(e.preventDefault(),o(!0),t){const{data:e}=await h({variables:{userId:t.user_id,accountStatus:p.accountStatus,userEmail:p.userEmail,mobileNo:p.mobileNo,userName:p.userName,roleId:p.roleId}});e&&e.updateUser&&200===e.updateUser.status?(J.Ay.success("User updated successfully"),s(e.updateUser.user)):J.Ay.error(e.updateUser.message)}else{const{data:e}=await j({variables:{userEmail:p.userEmail,mobileNo:p.mobileNo,userName:p.userName,roleId:p.roleId,userPassword:"MP@1234"}});e&&e.addUser&&201===e.addUser.status?(J.Ay.success("User added successfully"),s(e.addUser.user)):J.Ay.error(e.addUser.message)}o(!1)},children:[(0,z.jsx)(ee.A,{label:"Name",value:p.userName,onChange:e=>x({...p,userName:e.target.value}),variant:"standard",fullWidth:!0}),(0,z.jsx)(ee.A,{label:"Email",value:p.userEmail,onChange:e=>x({...p,userEmail:e.target.value}),variant:"standard",fullWidth:!0}),(0,z.jsx)(ee.A,{label:"Mobile No.",value:p.mobileNo,onChange:e=>x({...p,mobileNo:e.target.value}),variant:"standard",fullWidth:!0}),(0,z.jsxs)(a.A,{sx:{marginTop:"10px"},children:[(0,z.jsx)(l.A,{variant:"body1",sx:{marginBottom:"10px"},children:"Role"}),(0,z.jsx)(U.Ay,{name:"role",value:u,options:d,onChange:e=>{m(e),x({...p,roleId:e.value})},className:"basic-multi-select",classNamePrefix:"select"})]}),t&&(0,z.jsxs)(a.A,{sx:{marginTop:"10px"},children:[(0,z.jsx)(l.A,{variant:"body1",sx:{marginBottom:"10px"},children:"Account Status"}),(0,z.jsx)(U.Ay,{name:"status",value:{value:p.accountStatus,label:p.accountStatus},options:[{value:"active",label:"Active"},{value:"inactive",label:"Inactive"}],onChange:e=>x({...p,accountStatus:e.value}),className:"basic-multi-select",classNamePrefix:"select"})]}),(0,z.jsx)(v.A,{type:"submit",variant:"contained",color:"primary",style:{marginTop:"20px"},disabled:i||!p.userName||!p.roleId,children:t?"Modify":"Save New"}),t&&(0,z.jsx)(v.A,{type:"submit",variant:"standard",color:"secondary",style:{marginTop:"20px",marginLeft:"20px"},onClick:()=>{n(null),x({userName:"",userEmail:"",mobileNo:"",roleId:"",accountStatus:"active"})},disabled:i,children:"Cancel"})]})]})},te=e=>{let{users:s,setUsers:t}=e;const[a,n]=(0,r.useState)(null),i=e=>{n(e)};return(0,z.jsxs)(c.Ay,{container:!0,spacing:2,children:[(0,z.jsx)(c.Ay,{item:!0,xs:6,children:!s||s.length<1?(0,z.jsx)(l.A,{variant:"h6",children:"No users found"}):(0,z.jsx)(Q,{users:s,onSelect:i})}),(0,z.jsx)(c.Ay,{item:!0,xs:1}),(0,z.jsx)(c.Ay,{item:!0,xs:5,children:(0,z.jsx)(se,{onSubmit:e=>{if(e.user_id){const r=s.map((s=>s.user_id===e.user_id?e:s));t(r)}else{const r=[...s,e];t(r)}},selectedUser:a,onSelect:i})})]})},re=e=>{let{roles:s,onSelectRole:t}=e;const[a,l]=(0,r.useState)(0);return(0,z.jsx)(n.A,{orientation:"vertical",variant:"scrollable",value:a,onChange:(e,r)=>{l(r),t(s[r])},children:s.map(((e,s)=>(0,z.jsx)(i.A,{label:e.role_name.replace(/_/g," ").replace(/\b\w/g,(e=>e.toUpperCase())),style:{alignItems:"flex-start",fontSize:".8rem"},title:e.role_desc},s)))})};var ae=t(74605),le=t(51292),ne=t(65260),ie=t(16374);const oe=e=>{let{roles:s,role:t,permissions:a,setRoles:l}=e;const[n,i]=(0,r.useState)(t.permissions[0]),[o,d]=(0,r.useState)(!1),[c]=(0,R.n)(T),u=e=>{i(e.target.value)};return(0,r.useEffect)((()=>{i(t.permissions[0])}),[t]),(0,z.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[(0,z.jsxs)(y.A,{children:[(0,z.jsxs)(le.A,{id:"demo-radio-buttons-group-label",style:{fontWeight:"bold",fontSize:"1rem",color:"#000000"},children:["Permissions for"," ",t.role_name.replace(/_/g," ").replace(/\b\w/g,(e=>e.toUpperCase()))]}),(0,z.jsx)(ne.A,{"aria-labelledby":"demo-radio-buttons-group-label",name:"radio-buttons-group",children:a&&a.length>0&&a.map((e=>(0,z.jsx)(ae.A,{value:e.perm_id,control:(0,z.jsx)(ie.A,{onChange:u,name:e.perm_name,checked:n===e.perm_id}),label:e.perm_name},e.perm_id)))})]}),(0,z.jsx)(v.A,{variant:"contained",sx:{width:"150px",mt:5},onClick:async()=>{d(!0),await c({variables:{roleId:t.role_id,permissions:[n]}}).then((e=>{200===e.data.updateRole.status?(l((e=>{const s=[...e],r=s.findIndex((e=>e.role_id===t.role_id));return t.permissions=[n],s[r]=t,s})),d(!1),J.Ay.success("Permissions updated successfully!")):(d(!1),J.Ay.error("Something went wrong! Please try again."))})).catch((e=>{console.log(e),J.Ay.error("Something went wrong! Please try again."),d(!1)}))},disabled:n===t.permissions[0]||o,children:"Save Changes"})]})},de=e=>{let{permissions:s,roles:t,setRoles:a}=e;const[l,n]=(0,r.useState)(t[0]);return(0,z.jsxs)(c.Ay,{container:!0,spacing:2,children:[(0,z.jsx)(c.Ay,{item:!0,xs:3,children:(0,z.jsx)(re,{roles:t,onSelectRole:e=>{n(e)}})}),(0,z.jsx)(c.Ay,{item:!0,xs:9,children:(0,z.jsx)(oe,{roles:t,setRoles:a,role:l,permissions:s})})]})},ce=k.J1`
  query GetPermissions {
    getPermissions {
      message
      status
      permissions {
        perm_id
        perm_name
        perm_desc
        perm_status
        createdAt
        updatedAt
      }
    }
  }
`;var ue=t(8266),me=t(51962);const pe=(0,x.Ay)("div")((e=>{let{theme:s}=e;return{position:"relative",borderRadius:s.shape.borderRadius,backgroundColor:(0,h.X4)(s.palette.common.white,.15),"&:hover":{backgroundColor:(0,h.X4)(s.palette.common.white,.25)},marginLeft:0,width:"100%",[s.breakpoints.up("sm")]:{marginLeft:s.spacing(1),width:"auto"}}})),xe=(0,x.Ay)("div")((e=>{let{theme:s}=e;return{padding:s.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),he=(0,x.Ay)(j.Ay)((e=>{let{theme:s}=e;return{color:"inherit","& .MuiInputBase-input":{padding:s.spacing(1,1,1,0),paddingLeft:`calc(1em + ${s.spacing(4)})`,transition:s.transitions.create("width"),width:"100%",[s.breakpoints.up("sm")]:{width:"12ch","&:focus":{width:"20ch"}}}}})),je=e=>{let{users:s,projects:t,onSelect:n,onUpdateUserProjects:i}=e;const[c,u]=(0,r.useState)([]),[m,p]=(0,r.useState)(null),[x,h]=(0,r.useState)(!1),[j,y]=(0,r.useState)([]);(0,r.useEffect)((()=>{const e=s.filter((e=>"active"===e.account_status));u(e)}),[s]);const I=e=>{const s=j.includes(e)?j.filter((s=>s!==e)):[...j,e];y(s)},P=()=>{h(!1),p(null)};return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(pe,{onChange:e=>{const t=e.target.value,r=s.filter((e=>e.user_name.toLowerCase().includes(t.toLowerCase())||e.user_email&&e.user_email.toLowerCase().includes(t.toLowerCase())||e.mobile_no&&e.mobile_no.toLowerCase().includes(t.toLowerCase())||e.sf_user_id&&e.sf_user_id.toLowerCase().includes(t.toLowerCase())||e.role.role_name&&e.role.role_name.toLowerCase().includes(t.toLowerCase())));u(r)},children:[(0,z.jsx)(xe,{children:(0,z.jsx)(L.LUJ,{})}),(0,z.jsx)(he,{placeholder:"Search user\u2026",inputProps:{"aria-label":"search"}})]}),(0,z.jsx)("div",{style:{height:"calc(100vh - 200px)",overflowY:"scroll",marginTop:"20px"},children:c.length>0?c.map((e=>(0,z.jsx)(o.A,{sx:{marginBottom:2},children:(0,z.jsxs)(d.A,{children:[(0,z.jsxs)(l.A,{variant:"h6",children:[e.user_name,(0,z.jsx)(_.A,{label:e.role.role_name,color:"secondary",variant:"outlined",sx:{marginLeft:"10px"}})]}),(0,z.jsxs)(a.A,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,z.jsx)(l.A,{variant:"subtitle2",children:"Email:"}),(0,z.jsx)(l.A,{variant:"subtitle1",children:e.user_email||"N/A"})]}),(0,z.jsxs)(a.A,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,z.jsx)(l.A,{variant:"subtitle2",children:"Mobile No.:"}),(0,z.jsx)(l.A,{variant:"subtitle1",children:e.mobile_no||"N/A"})]}),(0,z.jsx)(f.A,{}),(0,z.jsxs)(a.A,{sx:{display:"flex",justifyContent:"space-between",marginTop:"10px"},children:[(0,z.jsx)(v.A,{variant:"outlined",color:"primary",onClick:()=>(e=>{p(e),y(e.assigned_projects||[]),h(!0)})(e),children:"View Projects"}),(0,z.jsx)(O.ArI,{color:"secondary",style:{cursor:"pointer"},onClick:()=>n(e)})]})]})},e.id))):(0,z.jsx)(l.A,{variant:"em",align:"center",children:"Please wait while we fetch users..."})}),(0,z.jsxs)(g.A,{open:x,onClose:P,children:[(0,z.jsxs)(A.A,{children:["Manage Projects for ",null===m||void 0===m?void 0:m.user_name]}),(0,z.jsx)(b.A,{children:(0,z.jsx)(w.A,{children:t.map((e=>(0,z.jsxs)(C.Ay,{button:!0,onClick:()=>I(e.id),children:[(0,z.jsx)(S.A,{primary:e.project_name}),(0,z.jsx)(ue.A,{children:(0,z.jsx)(me.A,{edge:"end",onChange:()=>I(e.id),checked:j.includes(e.id)})})]},e.id)))})}),(0,z.jsxs)(N.A,{children:[(0,z.jsx)(v.A,{onClick:P,color:"secondary",children:"Cancel"}),(0,z.jsx)(v.A,{onClick:()=>{i&&i(m.id,j),h(!1),p(null)},color:"primary",children:"Save"})]})]})]})};function ge(e){const{children:s,value:t,index:r,...n}=e;return(0,z.jsx)("div",{role:"tabpanel",hidden:t!==r,id:`simple-tabpanel-${r}`,"aria-labelledby":`simple-tab-${r}`,...n,children:t===r&&(0,z.jsx)(a.A,{sx:{p:3},children:(0,z.jsx)(l.A,{children:s})})})}function Ae(e){return{id:`simple-tab-${e}`,"aria-controls":`simple-tabpanel-${e}`}}function _e(e){let{allProjects:s}=e;const[t,o]=(0,r.useState)(0),[d,c]=(0,r.useState)([]),[u,m]=(0,r.useState)([]),[p,x]=(0,r.useState)([]),h=JSON.parse(window.localStorage.getItem("myPimaUserData")),j=(0,$.I)(E.em),g=(0,$.I)(ce),A=(0,$.I)(B);(0,r.useEffect)((()=>{j.data&&c(j.data.getUsers.users)}),[j.data]),(0,r.useEffect)((()=>{g.data&&m(g.data.getPermissions.permissions)}),[g.data]),(0,r.useEffect)((()=>{A.data&&x(A.data.getRoles.roles)}),[A.data]);return(0,z.jsx)(z.Fragment,{children:"super_admin"!==h.role&&"ci_leadership"!==h.role?(0,z.jsx)(l.A,{variant:"h4",component:"h2",sx:{marginTop:"20px"},children:"You are not authorized to access this page."}):(0,z.jsxs)(a.A,{sx:{width:"100%",marginTop:"20px"},children:[(0,z.jsx)(a.A,{sx:{borderBottom:1,borderColor:"divider"},children:(0,z.jsxs)(n.A,{value:t,onChange:(e,s)=>{o(s)},"aria-label":"management tabs",children:[(0,z.jsx)(i.A,{label:"Assign Projects",...Ae(0)}),(0,z.jsx)(i.A,{label:"Assign Permissions",...Ae(1)}),(0,z.jsx)(i.A,{label:"Users",...Ae(2)}),(0,z.jsx)(i.A,{label:"Assign Projects",...Ae(3)})]})}),(0,z.jsx)(ge,{value:t,index:0,children:(0,z.jsx)(Y,{allProjects:s})}),(0,z.jsx)(ge,{value:t,index:1,children:(0,z.jsx)(de,{permissions:u,roles:p,setRoles:x})}),(0,z.jsx)(ge,{value:t,index:2,children:(0,z.jsx)(te,{users:d,setUsers:c})}),(0,z.jsx)(ge,{value:t,index:3,children:(0,z.jsx)(je,{users:d})})]})})}},40519:(e,s,t)=>{t.d(s,{B3:()=>i,C1:()=>l,em:()=>a,se:()=>n});var r=t(70459);const a=r.J1`
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
`,l=r.J1`
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
`,n=r.J1`
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
`,i=r.J1`
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
`}}]);
//# sourceMappingURL=304.2b91a3ee.chunk.js.map