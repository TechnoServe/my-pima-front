"use strict";(self.webpackChunkmypima_front=self.webpackChunkmypima_front||[]).push([[304],{13304:(e,s,t)=>{t.r(s),t.d(s,{CustomTabPanel:()=>me,a11yProps:()=>pe,default:()=>xe});var a=t(65043),r=t(7353),l=t(94496),i=t(83625),n=t(24056),o=t(12110),d=t(26494),c=t(68903),u=t(2828),m=t(27600),p=t(21069),x=t(34535),h=t(77476),g=t(62559),j=t(83462),_=t(26600),f=t(43845),A=t(39336),b=t(35316),y=t(53193),v=t(3438),w=t(35721),S=t(71322),C=t(48734),I=t(2050),N=t(29347),P=t(41434),U=t(67805),$=t(15603),R=t(88250),E=t(31881),L=t(40519),k=t(70459);const B=k.J1`
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
`);var J=t(23768),D=t(45421),z=t(73949),M=t(70579);const W=(0,x.Ay)("div")((e=>{let{theme:s}=e;return{position:"relative",borderRadius:s.shape.borderRadius,backgroundColor:(0,h.X4)(s.palette.common.white,.15),"&:hover":{backgroundColor:(0,h.X4)(s.palette.common.white,.25)},marginLeft:0,width:"100%",[s.breakpoints.up("sm")]:{marginLeft:s.spacing(1),width:"auto"}}})),F=(0,x.Ay)("div")((e=>{let{theme:s}=e;return{padding:s.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),X=(0,x.Ay)(g.Ay)((e=>{let{theme:s}=e;return{color:"inherit","& .MuiInputBase-input":{padding:s.spacing(1,1,1,0),paddingLeft:`calc(1em + ${s.spacing(4)})`,transition:s.transitions.create("width"),width:"100%",[s.breakpoints.up("sm")]:{width:"12ch","&:focus":{width:"20ch"}}}}})),q=e=>{let{open:s,handleClose:t,title:i,data:n,selectedProject:o}=e;const[d,c]=(0,a.useState)(!1),[u,m]=(0,a.useState)([]),[p,x]=(0,a.useState)([]),[h,g]=(0,a.useState)([]),[k,T]=(0,a.useState)(null),[q,G]=(0,a.useState)(null),[V,Y]=(0,a.useState)(!1),[K,O]=(0,a.useState)(!1),Z=(0,R.I)(L.em),H=(0,R.I)(B),[Q]=(0,E.n)(z.Jn),[ee]=(0,E.n)(L.se);(0,a.useEffect)((()=>{m(n)}),[n]),(0,a.useEffect)((()=>{Z.data&&x(Z.data.getUsers.users)}),[Z.data]),(0,a.useEffect)((()=>{H.data&&g(H.data.getRoles.roles)}),[H.data]);return(0,M.jsxs)(j.A,{open:s,onClose:t,children:[(0,M.jsxs)(_.A,{fontSize:"18px",children:[(0,M.jsx)(f.A,{label:n.length,style:{color:"#333"},variant:"contained"})," ","Users Assigned to"," ",(0,M.jsx)(f.A,{label:i,color:"primary",variant:"contained"}),(0,M.jsx)(A.A,{})]}),(0,M.jsx)(b.A,{children:d?(0,M.jsxs)(r.A,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,M.jsxs)(y.A,{sx:{width:"100%"},children:[(0,M.jsx)(l.A,{variant:"body1",sx:{marginBottom:"10px"},children:"Select User"}),(0,M.jsx)($.Ay,{name:"user",defaultValue:K?null:{value:k,label:p.find((e=>e.user_id===k)).user_name},options:p.length>0?p.map((e=>({value:e.user_id,label:e.user_name}))):[],onChange:e=>{T(e.value)},className:"basic-multi-select",classNamePrefix:"select"})]}),(0,M.jsxs)(y.A,{sx:{width:"100%",marginTop:"10px"},children:[(0,M.jsx)(l.A,{variant:"body1",sx:{marginBottom:"10px"},children:"Select Role"}),(0,M.jsx)($.Ay,{name:"role",defaultValue:K?null:{value:q,label:h.find((e=>e.role_id===q)).role_name},options:h.length>0?h.map((e=>({value:e.role_id,label:e.role_name}))):[],onChange:e=>{G(e.value)},className:"basic-multi-select",classNamePrefix:"select"})]}),(0,M.jsxs)(r.A,{sx:{display:"flex",justifyContent:"flex-end",width:"100%",marginTop:"10px"},children:[(0,M.jsx)(v.A,{variant:"contained",color:"primary",sx:{marginTop:"10px",marginRight:"10px"},onClick:K?async()=>{if(k&&q){Y(!0);const{data:e}=await Q({variables:{userId:k,projectId:o,roleId:q}});200===e.addProjectRole.status?(J.Ay.success(e.addProjectRole.message),T(null),G(null),Y(!1),c(!1)):(Y(!1),J.Ay.error(e.addProjectRole.message))}else J.Ay.error("Please select user and role")}:async()=>{if(k&&q){Y(!0);const{data:e}=await ee({variables:{userId:k,roleId:q}});200===e.updateUser.status?(J.Ay.success(e.updateUser.message),T(null),G(null),Y(!1),c(!1)):(Y(!1),J.Ay.error(e.updateUser.message))}else J.Ay.error("Please select user and role")},disabled:V,children:V?(0,M.jsx)(D.A,{color:"#fff",loading:!0,size:10}):K?"Save":"Modify"}),(0,M.jsx)(v.A,{variant:"contained",color:"error",sx:{marginTop:"10px"},onClick:()=>{T(null),G(null),c(!1)},children:"Cancel"})]})]}):(0,M.jsxs)(w.A,{children:[(0,M.jsx)(S.Ay,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"5px 0"},children:(0,M.jsxs)(W,{onChange:e=>{const s=e.target.value,t=n.filter((e=>e.user.user_name.toLowerCase().includes(s.toLowerCase())||e.role.role_name.toLowerCase().includes(s.toLowerCase())));m(t)},children:[(0,M.jsx)(F,{children:(0,M.jsx)(U.LUJ,{})}),(0,M.jsx)(X,{placeholder:"Search any\u2026",inputProps:{"aria-label":"search"}})]})}),u.length>0?u.map(((e,s)=>(0,M.jsxs)(S.Ay,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"5px 0"},children:[(0,M.jsx)(C.A,{primary:e.user?e.user.user_name:"N/A"}),(0,M.jsx)(f.A,{label:e.role?e.role.role_name:"N/A",color:"secondary",variant:"outlined",size:"small",sx:{marginRight:"10px"}}),(0,M.jsx)(I.A,{children:(0,M.jsx)(U.guD,{size:20,color:"gray",style:{cursor:"pointer"},onClick:()=>{T(e.user.user_id),G(e.role.role_id),c(!0),O(!1)}})}),(0,M.jsx)(I.A,{children:(0,M.jsx)(P.ZsL,{size:20,color:"red"})})]},s))):(0,M.jsx)(l.A,{style:{alignSelf:"center"},children:"No users assigned to this project"})]})}),(0,M.jsxs)(N.A,{children:[!d&&(0,M.jsx)(v.A,{onClick:()=>{c(!0),O(!0)},color:"primary",children:"Add New"}),(0,M.jsx)(v.A,{onClick:t,color:"primary",children:"Close"})]})]})};var G=t(6410);const V={marginTop:"15px",fontWeight:"400",color:"rgba(125, 127, 136, 1)",fontSize:"12px",maxWidth:"80%"},Y=e=>{let{allProjects:s}=e;const[t,r]=(0,a.useState)(!1),[i,n]=(0,a.useState)([]),[x,h]=(0,a.useState)(""),[g,j]=(0,a.useState)(null),[_,{data:f}]=(0,G._)(z.Ny);return(0,a.useEffect)((()=>{if(f&&f.getProjectRolesByProjectId){const{project_role:e}=f.getProjectRolesByProjectId;n(e),h(e[0].project.project_name),j(e[0].project.project_id),r(!0)}}),[f]),(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)("div",{style:{margin:"10px 0 15px 0"},children:[(0,M.jsx)("h1",{children:"Projects Assignment"}),(0,M.jsx)("p",{style:V,children:"In the project assignment page you can assign projects to users."})]}),s&&s.length>0?(0,M.jsx)(c.Ay,{container:!0,spacing:2,children:s.map((e=>(0,M.jsx)(c.Ay,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,M.jsxs)(o.A,{sx:{maxWidth:250},children:[(0,M.jsx)(u.A,{children:(0,M.jsxs)(d.A,{children:[(0,M.jsx)(l.A,{gutterBottom:!0,variant:"body1",component:"div",children:e.project_name}),(0,M.jsxs)(l.A,{variant:"body4",color:"text.secondary",children:["SF Id: ",(0,M.jsx)("em",{children:e.sf_project_id})]})]})}),(0,M.jsx)(m.A,{sx:{display:"flex",justifyContent:"flex-end"},children:(0,M.jsx)(p.VFx,{size:30,style:{cursor:"pointer"},onClick:()=>(async e=>{await _({variables:{projectId:e.project_id}})})(e)})})]})},e.project_id)))}):(0,M.jsx)("p",{children:"No projects found"}),(0,M.jsx)(q,{open:t,handleClose:()=>r(!1),data:i,title:x,selectedProject:g})]})};var K=t(2127);const O=(0,x.Ay)("div")((e=>{let{theme:s}=e;return{position:"relative",borderRadius:s.shape.borderRadius,backgroundColor:(0,h.X4)(s.palette.common.white,.15),"&:hover":{backgroundColor:(0,h.X4)(s.palette.common.white,.25)},marginLeft:0,width:"100%",[s.breakpoints.up("sm")]:{marginLeft:s.spacing(1),width:"auto"}}})),Z=(0,x.Ay)("div")((e=>{let{theme:s}=e;return{padding:s.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),H=(0,x.Ay)(g.Ay)((e=>{let{theme:s}=e;return{color:"inherit","& .MuiInputBase-input":{padding:s.spacing(1,1,1,0),paddingLeft:`calc(1em + ${s.spacing(4)})`,transition:s.transitions.create("width"),width:"100%",[s.breakpoints.up("sm")]:{width:"12ch","&:focus":{width:"20ch"}}}}})),Q=e=>{let{users:s,onSelect:t}=e;const[i,n]=(0,a.useState)([]);return(0,a.useEffect)((()=>{n(s)}),[s]),(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(O,{onChange:e=>{const t=e.target.value,a=s.filter((e=>e.user_name.toLowerCase().includes(t.toLowerCase())||e.user_email&&e.user_email.toLowerCase().includes(t.toLowerCase())||e.mobile_no&&e.mobile_no.toLowerCase().includes(t.toLowerCase())||e.sf_user_id&&e.sf_user_id.toLowerCase().includes(t.toLowerCase())||e.role.role_name&&e.role.role_name.toLowerCase().includes(t.toLowerCase())));n(a)},children:[(0,M.jsx)(Z,{children:(0,M.jsx)(U.LUJ,{})}),(0,M.jsx)(H,{placeholder:"Search user\u2026",inputProps:{"aria-label":"search"}})]}),(0,M.jsx)("div",{style:{height:"calc(100vh - 200px)",overflowY:"scroll",marginTop:"20px"},children:i.length>0?i.map((e=>(0,M.jsx)(o.A,{sx:{marginBottom:2},children:(0,M.jsxs)(d.A,{children:[(0,M.jsxs)(l.A,{variant:"h6",children:[e.user_name,(0,M.jsx)(f.A,{label:e.role.role_name,color:"secondary",variant:"outlined",sx:{marginLeft:"10px"}}),"active"!==e.account_status&&(0,M.jsx)(f.A,{label:e.account_status,color:"error",variant:"contained",sx:{marginLeft:"5px"}})]}),(0,M.jsxs)(r.A,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,M.jsx)(l.A,{variant:"subtitle2",children:"Email:"}),(0,M.jsx)(l.A,{variant:"subtitle1",children:e.user_email||"N/A"})]}),(0,M.jsxs)(r.A,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,M.jsx)(l.A,{variant:"subtitle2",children:"Mobile No.:"}),(0,M.jsx)(l.A,{variant:"subtitle1",children:e.mobile_no||"N/A"})]}),(0,M.jsxs)(r.A,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,M.jsx)(l.A,{variant:"subtitle2",children:"SF Id:"}),(0,M.jsx)(l.A,{variant:"subtitle1",children:e.sf_user_id})]}),(0,M.jsx)(A.A,{}),(0,M.jsx)(r.A,{sx:{display:"flex",justifyContent:"flex-end",alignItems:"center",marginTop:"10px"},children:(0,M.jsx)(K.ArI,{color:"secondary",style:{cursor:"pointer"},title:"Edit User",onClick:()=>t(e)})})]})},e.id))):(0,M.jsx)(l.A,{variant:"em",align:"center",children:"Please wait while we fetch users..."})})]})};var ee=t(67784);const se=e=>{let{onSubmit:s,selectedUser:t,onSelect:i}=e;const[n,o]=(0,a.useState)(!1),[d,c]=(0,a.useState)([]),[u,m]=(0,a.useState)(null),[p,x]=(0,a.useState)({userName:"",userEmail:"",mobileNo:"",roleId:"",accountStatus:"active"}),[h]=(0,E.n)(L.se),[g]=(0,E.n)(L.C1),j=(0,R.I)(B);(0,a.useEffect)((()=>{if(j.data&&j.data.getRoles&&j.data.getRoles.roles&&j.data.getRoles.roles.length>0){const e=j.data.getRoles.roles.map((e=>({value:e.role_id,label:e.role_name})));if(c(e),t){const s=e.find((e=>e.value===t.role.role_id));m(s)}}}),[j.data]),(0,a.useEffect)((()=>{t&&x({userName:t.user_name,userEmail:t.user_email||"",mobileNo:t.mobile_no||"",roleId:t.role.role_id,accountStatus:t.account_status})}),[t]);return(0,M.jsxs)(r.A,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,M.jsx)(l.A,{variant:"h5",sx:{marginBottom:"20px"},children:t?"Edit User":"Add User"}),(0,M.jsxs)("form",{onSubmit:async e=>{if(e.preventDefault(),o(!0),t){const{data:e}=await h({variables:{userId:t.user_id,accountStatus:p.accountStatus,userEmail:p.userEmail,mobileNo:p.mobileNo,userName:p.userName,roleId:p.roleId}});e&&e.updateUser&&200===e.updateUser.status?(J.Ay.success("User updated successfully"),s(e.updateUser.user)):J.Ay.error(e.updateUser.message)}else{const{data:e}=await g({variables:{userEmail:p.userEmail,mobileNo:p.mobileNo,userName:p.userName,roleId:p.roleId,userPassword:"MP@1234"}});e&&e.addUser&&201===e.addUser.status?(J.Ay.success("User added successfully"),s(e.addUser.user)):J.Ay.error(e.addUser.message)}o(!1)},children:[(0,M.jsx)(ee.A,{label:"Name",value:p.userName,onChange:e=>x({...p,userName:e.target.value}),variant:"standard",fullWidth:!0}),(0,M.jsx)(ee.A,{label:"Email",value:p.userEmail,onChange:e=>x({...p,userEmail:e.target.value}),variant:"standard",fullWidth:!0}),(0,M.jsx)(ee.A,{label:"Mobile No.",value:p.mobileNo,onChange:e=>x({...p,mobileNo:e.target.value}),variant:"standard",fullWidth:!0}),(0,M.jsxs)(r.A,{sx:{marginTop:"10px"},children:[(0,M.jsx)(l.A,{variant:"body1",sx:{marginBottom:"10px"},children:"Role"}),(0,M.jsx)($.Ay,{name:"role",value:u,options:d,onChange:e=>{m(e),x({...p,roleId:e.value})},className:"basic-multi-select",classNamePrefix:"select"})]}),t&&(0,M.jsxs)(r.A,{sx:{marginTop:"10px"},children:[(0,M.jsx)(l.A,{variant:"body1",sx:{marginBottom:"10px"},children:"Account Status"}),(0,M.jsx)($.Ay,{name:"status",value:{value:p.accountStatus,label:p.accountStatus},options:[{value:"active",label:"Active"},{value:"inactive",label:"Inactive"}],onChange:e=>x({...p,accountStatus:e.value}),className:"basic-multi-select",classNamePrefix:"select"})]}),(0,M.jsx)(v.A,{type:"submit",variant:"contained",color:"primary",style:{marginTop:"20px"},disabled:n||!p.userName||!p.roleId,children:t?"Modify":"Save New"}),t&&(0,M.jsx)(v.A,{type:"submit",variant:"standard",color:"secondary",style:{marginTop:"20px",marginLeft:"20px"},onClick:()=>{i(null),x({userName:"",userEmail:"",mobileNo:"",roleId:"",accountStatus:"active"})},disabled:n,children:"Cancel"})]})]})},te=e=>{let{users:s,setUsers:t}=e;const[r,i]=(0,a.useState)(null),n=e=>{i(e)};return(0,M.jsxs)(c.Ay,{container:!0,spacing:2,children:[(0,M.jsx)(c.Ay,{item:!0,xs:6,children:!s||s.length<1?(0,M.jsx)(l.A,{variant:"h6",children:"No users found"}):(0,M.jsx)(Q,{users:s,onSelect:n})}),(0,M.jsx)(c.Ay,{item:!0,xs:1}),(0,M.jsx)(c.Ay,{item:!0,xs:5,children:(0,M.jsx)(se,{onSubmit:e=>{if(e.user_id){const a=s.map((s=>s.user_id===e.user_id?e:s));t(a)}else{const a=[...s,e];t(a)}},selectedUser:r,onSelect:n})})]})},ae=e=>{let{roles:s,onSelectRole:t}=e;const[r,l]=(0,a.useState)(0);return(0,M.jsx)(i.A,{orientation:"vertical",variant:"scrollable",value:r,onChange:(e,a)=>{l(a),t(s[a])},children:s.map(((e,s)=>(0,M.jsx)(n.A,{label:e.role_name.replace(/_/g," ").replace(/\b\w/g,(e=>e.toUpperCase())),style:{alignItems:"flex-start",fontSize:".8rem"},title:e.role_desc},s)))})};var re=t(74605),le=t(51292),ie=t(65260),ne=t(86607);const oe=e=>{let{roles:s,role:t,permissions:r,setRoles:l}=e;const[i,n]=(0,a.useState)(t.permissions[0]),[o,d]=(0,a.useState)(!1),[c]=(0,E.n)(T),u=e=>{n(e.target.value)};return(0,a.useEffect)((()=>{n(t.permissions[0])}),[t]),(0,M.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[(0,M.jsxs)(y.A,{children:[(0,M.jsxs)(le.A,{id:"demo-radio-buttons-group-label",style:{fontWeight:"bold",fontSize:"1rem",color:"#000000"},children:["Permissions for"," ",t.role_name.replace(/_/g," ").replace(/\b\w/g,(e=>e.toUpperCase()))]}),(0,M.jsx)(ie.A,{"aria-labelledby":"demo-radio-buttons-group-label",name:"radio-buttons-group",children:r&&r.length>0&&r.map((e=>(0,M.jsx)(re.A,{value:e.perm_id,control:(0,M.jsx)(ne.A,{onChange:u,name:e.perm_name,checked:i===e.perm_id}),label:e.perm_name},e.perm_id)))})]}),(0,M.jsx)(v.A,{variant:"contained",sx:{width:"150px",mt:5},onClick:async()=>{d(!0),await c({variables:{roleId:t.role_id,permissions:[i]}}).then((e=>{200===e.data.updateRole.status?(l((e=>{const s=[...e],a=s.findIndex((e=>e.role_id===t.role_id));return t.permissions=[i],s[a]=t,s})),d(!1),J.Ay.success("Permissions updated successfully!")):(d(!1),J.Ay.error("Something went wrong! Please try again."))})).catch((e=>{console.log(e),J.Ay.error("Something went wrong! Please try again."),d(!1)}))},disabled:i===t.permissions[0]||o,children:"Save Changes"})]})},de=e=>{let{permissions:s,roles:t,setRoles:r}=e;const[l,i]=(0,a.useState)(t[0]);return(0,M.jsxs)(c.Ay,{container:!0,spacing:2,children:[(0,M.jsx)(c.Ay,{item:!0,xs:3,children:(0,M.jsx)(ae,{roles:t,onSelectRole:e=>{i(e)}})}),(0,M.jsx)(c.Ay,{item:!0,xs:9,children:(0,M.jsx)(oe,{roles:t,setRoles:r,role:l,permissions:s})})]})},ce=k.J1`
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
`;(0,x.Ay)("div")((e=>{let{theme:s}=e;return{position:"relative",borderRadius:s.shape.borderRadius,backgroundColor:(0,h.X4)(s.palette.common.white,.15),"&:hover":{backgroundColor:(0,h.X4)(s.palette.common.white,.25)},marginLeft:0,width:"100%",[s.breakpoints.up("sm")]:{marginLeft:s.spacing(1),width:"auto"}}})),(0,x.Ay)("div")((e=>{let{theme:s}=e;return{padding:s.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),(0,x.Ay)(g.Ay)((e=>{let{theme:s}=e;return{color:"inherit","& .MuiInputBase-input":{padding:s.spacing(1,1,1,0),paddingLeft:`calc(1em + ${s.spacing(4)})`,transition:s.transitions.create("width"),width:"100%",[s.breakpoints.up("sm")]:{width:"12ch","&:focus":{width:"20ch"}}}}}));var ue=t(73216);function me(e){const{children:s,value:t,index:a,...i}=e;return(0,M.jsx)("div",{role:"tabpanel",hidden:t!==a,id:`simple-tabpanel-${a}`,"aria-labelledby":`simple-tab-${a}`,...i,children:t===a&&(0,M.jsx)(r.A,{sx:{p:3},children:(0,M.jsx)(l.A,{children:s})})})}function pe(e){return{id:`simple-tab-${e}`,"aria-controls":`simple-tabpanel-${e}`}}function xe(){const{projects:e}=(0,ue.KC)(),[s,t]=(0,a.useState)(0),[o,d]=(0,a.useState)([]),[c,u]=(0,a.useState)([]),[m,p]=(0,a.useState)([]),x=JSON.parse(window.localStorage.getItem("myPimaUserData")),h=(0,R.I)(L.em),g=(0,R.I)(ce),j=(0,R.I)(B);(0,a.useEffect)((()=>{h.data&&d(h.data.getUsers.users)}),[h.data]),(0,a.useEffect)((()=>{g.data&&u(g.data.getPermissions.permissions)}),[g.data]),(0,a.useEffect)((()=>{j.data&&p(j.data.getRoles.roles)}),[j.data]);return(0,M.jsx)(M.Fragment,{children:"super_admin"!==x.role&&"ci_leadership"!==x.role?(0,M.jsx)(l.A,{variant:"h4",component:"h2",sx:{marginTop:"20px"},children:"You are not authorized to access this page."}):(0,M.jsxs)(r.A,{sx:{width:"100%",marginTop:"20px"},children:[(0,M.jsx)(r.A,{sx:{borderBottom:1,borderColor:"divider"},children:(0,M.jsxs)(i.A,{value:s,onChange:(e,s)=>{t(s)},"aria-label":"management tabs",children:[(0,M.jsx)(n.A,{label:"Assign Projects",...pe(0)}),(0,M.jsx)(n.A,{label:"Assign Permissions",...pe(1)}),(0,M.jsx)(n.A,{label:"Users",...pe(2)})]})}),(0,M.jsx)(me,{value:s,index:0,children:(0,M.jsx)(Y,{allProjects:e})}),(0,M.jsx)(me,{value:s,index:1,children:(0,M.jsx)(de,{permissions:c,roles:m,setRoles:p})}),(0,M.jsx)(me,{value:s,index:2,children:(0,M.jsx)(te,{users:o,setUsers:d})})]})})}},40519:(e,s,t)=>{t.d(s,{B3:()=>n,C1:()=>l,em:()=>r,se:()=>i});var a=t(70459);const r=a.J1`
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
`,l=a.J1`
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
`,i=a.J1`
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
`}}]);
//# sourceMappingURL=304.48d41f6f.chunk.js.map