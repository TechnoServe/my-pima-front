"use strict";(self.webpackChunkmypima_front=self.webpackChunkmypima_front||[]).push([[770],{65770:function(n,e,t){t.d(e,{Z:function(){return H}});var i=t(93433),a=t(45987),s=t(1413),r=t(37762),o=t(29439),d=t(72791),c=t(66934),l=t(78914),u=t(80184),m=(t(60586),t(97892),(0,c.ZP)(l.Z)((function(n){n.theme;return{"&:hover":{backgroundColor:"rgba(244, 103, 0, 0.5)",transition:"background-color 0.3s ease-in-out"}}})),(0,c.ZP)(l.Z)((function(n){n.theme;return{marginBottom:"10px",marginRight:"10px",textTransform:"initial",backgroundColor:"rgba(0, 165, 163, 1)","&:hover":{backgroundColor:"rgba(0, 165, 163, 0.5)",transition:"background-color 0.3s ease-in-out"}}})),t(57689)),p=t(43513),_=t(7692),g=t(56355),f=t(76730),h=t(57299),v=t(32543),x=function(){var n=new Date,e=Intl.DateTimeFormat().resolvedOptions().timeZone,t=n.toLocaleDateString("en-US",{year:"numeric",month:"2-digit",day:"2-digit"}),i=n.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit",timeZone:e});return"".concat(t,"_at_").concat(i)},j=t(74165),y=t(15861),Z=t(5574),b=t(39157),S=t(90493),w=t(84852),I=t(49900),P=t(81918),F=t(41473),$=t(55818),V=t(4567),C=t(3721),A=t(16029),B=t(94721),k=t(97123),N=t(78820),Q=t(84376),q=t(16704),E=t(56789),T=t(39126),R=t(65218),z=function(n){var e,t=n.open,i=n.handleClose,a=n.fvId,s=n.rowDetails,r=(0,d.useState)(!1),c=(0,o.Z)(r,2),m=c[0],p=c[1],_=(0,d.useState)([]),g=(0,o.Z)(_,2),f=g[0],h=g[1],x=JSON.parse(window.localStorage.getItem("myPimaUserData")),z=(0,v.a)(q.nM,{variables:{fvId:a}}),G=(0,Q.D)(q.iF),M=(0,o.Z)(G,1)[0],U=function(n,t,i){return(e=e||(0,y.Z)((0,j.Z)().mark((function n(e,t,i){var a;return(0,j.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return p(!0),a=t.replace(/\s/g,""),n.next=4,M({variables:{bpId:e,fieldName:a,imageStatus:i}}).then((function(n){200===n.data.updateFVQAImageStatus.status?(R.ZP.success("Image Status Updated Successfully"),z.refetch().then((function(n){p(!1)})).catch((function(n){R.ZP.error("Something went wrong"),p(!1)}))):(R.ZP.error("Something went wrong"),p(!1))})).catch((function(n){console.log(n),R.ZP.error("Something went wrong"),p(!1)}));case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)};return(0,d.useEffect)((function(){var n;200===(null===(n=z.data)||void 0===n?void 0:n.getFVQAsByFarmVisits.status)&&h(z.data.getFVQAsByFarmVisits.fvQAs.qas)}),[z.data]),(0,u.jsxs)(Z.Z,{open:t,onClose:i,fullWidth:!0,maxWidth:"sm",children:[(0,u.jsxs)(b.Z,{children:[(0,u.jsx)("h3",{children:"Questions and Answers"}),s&&(0,u.jsxs)(S.Z,{sx:{display:"flex",flexWrap:"wrap",width:"100%",bgcolor:"background.paper"},children:[(0,u.jsx)(w.ZP,{sx:{width:"50%"},children:(0,u.jsx)(I.Z,{primary:"Farm Visit Name:",secondary:s.fv_name})}),(0,u.jsx)(w.ZP,{sx:{width:"50%"},children:(0,u.jsx)(I.Z,{primary:"Training Group:",secondary:s.training_group})}),(0,u.jsx)(w.ZP,{sx:{width:"50%"},children:(0,u.jsx)(I.Z,{primary:"Training Session:",secondary:s.training_session})}),(0,u.jsx)(w.ZP,{sx:{width:"50%"},children:(0,u.jsx)(I.Z,{primary:"TNS Id:",secondary:s.tns_id})}),(0,u.jsx)(w.ZP,{sx:{width:"50%"},children:(0,u.jsx)(I.Z,{primary:"Farmer Trainer:",secondary:s.farmer_trainer})}),(0,u.jsx)(w.ZP,{sx:{width:"50%"},children:(0,u.jsx)(I.Z,{primary:"Visit Date:",secondary:s.date_visited})})]}),z.loading?(0,u.jsx)(E.Z,{color:"#087C8F",size:10,style:{display:"flex",justifyContent:"center",alignItems:"center",margin:"0 auto"}}):f.length>0?f.map((function(n,e){return(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:".5rem"},children:(0,u.jsx)(P.Z,{label:n.practice_name,color:"primary"})}),n.questions.length>0?n.questions.map((function(e,t){var i;return"Status of the photo"!==e&&(0,u.jsxs)(F.Z,{style:{marginBottom:"1rem"},children:[(0,u.jsx)($.Z,{expandIcon:(0,u.jsx)(T.F0C,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,u.jsxs)(V.Z,{children:["(".concat(t+1,") ").concat(e),n.answers[t]&&/^(data:image\/[a-zA-Z+]+;base64,)[\w/+=]+$/.test(n.answers[t])&&(0,u.jsx)(P.Z,{label:"Image",variant:"outlined",size:"10",color:"secondary",style:{marginLeft:"1rem"}}),"approved"===n.answers[t+1]?(0,u.jsx)(P.Z,{label:"Approved",variant:"outlined",size:"10",color:"success",style:{marginLeft:"1rem"}}):"invalid"===n.answers[t+1]?(0,u.jsx)(P.Z,{label:"Invalid",variant:"outlined",size:"10",color:"error",style:{marginLeft:"1rem"}}):"unclear"===n.answers[t+1]?(0,u.jsx)(P.Z,{label:"Unclear",variant:"outlined",size:"10",color:"warning",style:{marginLeft:"1rem"}}):null]})}),(0,u.jsx)(C.Z,{children:n.answers[t]?/^(data:image\/[a-zA-Z+]+;base64,)[\w/+=]+$/.test(n.answers[t])?(0,u.jsxs)(A.Z,{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[(0,u.jsx)("img",{src:n.answers[t],alt:"img",style:{width:"100%",height:"auto"}}),("super_admin"===(null===x||void 0===x?void 0:x.role)||"ci_leadership"===(null===x||void 0===x?void 0:x.role)||"senior_business_advisor"===(null===x||void 0===x?void 0:x.role)||"business_advisor"===(null===x||void 0===x?void 0:x.role)||"project_manager"===(null===x||void 0===x?void 0:x.role)||"farmer_trainer"===(null===x||void 0===x?void 0:x.role))&&!("approved"===n.answers[t+1]||"invalid"===n.answers[t+1]||"unclear"===n.answers[t+1])&&(0,u.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"100%",marginTop:"1rem"},children:[(0,u.jsx)(l.Z,{variant:"contained",color:"success",onClick:function(){return U(z.data.getFVQAsByFarmVisits.fvQAs.bp_id,n.practice_name_id,"approved")},disabled:m,children:m?(0,u.jsx)(E.Z,{size:8,color:"#fff",loading:m}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(N.bzc,{}),"Approve"]})}),(0,u.jsx)(l.Z,{variant:"contained",color:"error",onClick:function(){return U(z.data.getFVQAsByFarmVisits.fvQAs.bp_id,n.practice_name_id,"invalid")},disabled:m,children:m?(0,u.jsx)(E.Z,{size:8,color:"#fff",loading:m}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(N.oHP,{}),"Invalid"]})}),(0,u.jsx)(l.Z,{variant:"contained",color:"warning",onClick:function(){return U(z.data.getFVQAsByFarmVisits.fvQAs.bp_id,n.practice_name_id,"unclear")},disabled:m,children:m?(0,u.jsx)(E.Z,{size:8,color:"#fff",loading:m}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(N.oHP,{}),"Unclear"]})})]})]}):(0,u.jsx)(V.Z,{variant:"subtitle2",children:(0,u.jsx)("div",{dangerouslySetInnerHTML:{__html:null!==(i=n.answers[t])&&void 0!==i?i:"N/A"}})}):"N/A"})]},t)})):(0,u.jsx)(V.Z,{variant:"caption",display:"block",color:"text.secondary",gutterBottom:!0,children:"No Questions and Answers found for this Best Practice"}),(0,u.jsx)(B.Z,{variant:"middle",style:{marginBottom:"1.5rem"}})]},e)})):(0,u.jsx)(V.Z,{variant:"body1",color:"text.secondary",children:"No Questions and Answers found for this Farm Visit"})]}),(0,u.jsx)(k.Z,{children:(0,u.jsx)(l.Z,{onClick:i,color:"primary",children:"Close"})})]})},G=t(35685),M=t(96019),U=["tg_id","ts_id","p_id","attendance_id","fv_id","__typename"],D=["tg_id","ts_id","p_id","attendance_id","fv_id","__typename"],L={rows:{style:{minHeight:"30px",cursor:"pointer"}},headCells:{style:{paddingLeft:"8px",paddingRight:"8px",backgroundColor:"#1b2a4e",color:"white"}},cells:{style:{paddingLeft:"5px",paddingRight:"5px",paddingTop:"5px",paddingBottom:"5px"}}},O=function(n){var e=n.handleCSVExport,t=n.handleExcelExport,i=n.tableRowItem;return(0,u.jsxs)("div",{className:"export-buttons",children:["trainsessionapprov"!==i&&(0,u.jsxs)(l.Z,{variant:"outlined",sx:{color:"#1b2a4e",borderColor:"#1b2a4e"},onClick:e,children:[(0,u.jsx)(g.u$v,{style:{marginRight:"5px"}})," CSV"]}),(0,u.jsxs)(l.Z,{variant:"outlined",sx:{color:"#1b2a4e",borderColor:"#1b2a4e"},onClick:t,children:[(0,u.jsx)(g.u$v,{style:{marginRight:"5px"}}),"trainsessionapprov"!==i?"Excel":"Download Report"]})]})},H=function(n){var e=n.columns,t=n.data,c=n.filter,g=(n.setFilter,n.setFilteredGroups,n.setFilteredSessions,n.tableRowItem),j=n.allAttendances,y=n.details,Z=n.selectedProject,b=g||window.location.pathname.split("/")[2],S=(0,d.useState)({ts_id:null}),w=(0,o.Z)(S,2),I=w[0],P=w[1],F=(0,d.useState)(!1),$=(0,o.Z)(F,2),V=$[0],C=$[1],A=(0,d.useState)(!1),B=(0,o.Z)(A,2),k=B[0],N=B[1],Q=(0,d.useState)(null),q=(0,o.Z)(Q,2),E=q[0],T=q[1],R=(0,d.useState)(""),H=(0,o.Z)(R,2),W=H[0],J=H[1],X=(0,d.useState)([]),K=(0,o.Z)(X,2),Y=K[0],nn=K[1],en=(0,d.useState)(!1),tn=(0,o.Z)(en,2),an=tn[0],sn=tn[1],rn=(0,d.useState)(null),on=(0,o.Z)(rn,2),dn=on[0],cn=on[1],ln=(0,m.s0)(),un=(0,v.a)(M.wA,{variables:{tsId:I&&I.ts_id?I.ts_id:""},skip:!I}),mn="traingroup"===b?"mypima_training_group":"trainsession"===b?"mypima_training_session":"participants"===b?"Participants Data":"farmvisit"===b?"mypima_farm_visit":"mypima_attendance";(0,d.useEffect)((function(){var n,e;un.loading||200!==(null===(n=un.data)||void 0===n||null===(e=n.trainingSessionImage)||void 0===e?void 0:e.status)||(N(!1),T(un.data.trainingSessionImage.trainingSessionImage))}),[un]);return(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{className:"table-header-actions ".concat(c?"":"no-filter"),children:[c&&(0,u.jsx)(l.Z,{className:"filter-button",children:"Filter"}),(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"},children:[(0,u.jsxs)("div",{className:"search-container",children:[(0,u.jsx)("input",{type:"text",placeholder:"Search...",value:W,onChange:function(n){var i=n.target.value.toLowerCase(),a=t.filter((function(n){return e.some((function(e){var t=n[e.id];return null===t||void 0===t?void 0:t.toString().toLowerCase().includes(i)}))}));nn(a),J(n.target.value)}}),(0,u.jsx)("span",{className:"search-icon",children:(0,u.jsx)(_.wTD,{})})]}),(0,u.jsx)(O,{handleCSVExport:function(){if(0!==t.length){if("farmvisit"===b){e=e.concat([{id:"household_tns_id"},{id:"pima_farmer_id"},{id:"pima_household_id"}])}var n=["num","Project","first_name","middle_name","last_name","gender","age","coffee_tree_numbers","number_of_coffee_plots","phone_number","a0EOj000002FMGnMAO"===Z||"a0EOj000002C7ivMAC"===Z?"national_identification_id":"a0EOj000003E0knMAC"===Z?"growers_number":"coop_membership_number","location","farmer_sf_id","tns_id","hh_number","sf_household_id","farmer_number","ffg_id","training_group","status","farmer_trainer","a0EOj000003E0knMAC"===Z?"agronomy_advisor":"business_advisor","create_in_commcare"];if("participants"===g){var i=new Map;j.filter((function(n){return t.some((function(e){return e.p_id===n.participant_id}))})).forEach((function(n){var e=n.attendance_status,t=n.participant_id,a=n.module_number,s=n.module_name,r=n.module_id,o="".concat(a,"-").concat(s,"-").concat(r);i.has(o)||i.set(o,{}),i.get(o)[t]="Present"===e?"1":"0"}));var d,c=(0,r.Z)(i);try{for(c.s();!(d=c.n()).done;){var l=(0,o.Z)(d.value,1)[0];n.push(l)}}catch(m){c.e(m)}finally{c.f()}var u=W.length>0?Y.map((function(n){var e,t=(0,s.Z)({},n),a=(0,r.Z)(i);try{for(a.s();!(e=a.n()).done;){var d=(0,o.Z)(e.value,2),c=d[0],l=d[1];t[c]=l[n.p_id]||""}}catch(m){a.e(m)}finally{a.f()}return t})):t.map((function(n){var e,t=(0,s.Z)({},n),a=(0,r.Z)(i);try{for(a.s();!(e=a.n()).done;){var d=(0,o.Z)(e.value,2),c=d[0],l=d[1];t[c]=l[n.p_id]||""}}catch(m){a.e(m)}finally{a.f()}return t}));t=u,console.log("CSV Participants export"),console.log(t)}new f.ExportToCsv({fieldSeparator:",",quoteStrings:'"',decimalSeparator:".",showLabels:!0,useTextFile:!1,useBom:!0,filename:"".concat(mn),headers:"participants"===g?n:e.map((function(n){return n.id}))}).generateCsv(t.map((function(n){n.tg_id,n.ts_id,n.p_id,n.attendance_id,n.fv_id,n.__typename;return(0,a.Z)(n,U)})))}else alert("No data available for export.")},handleExcelExport:function(){var n={header:e.map((function(n){return n.id})),body:t.map((function(n){n.tg_id,n.ts_id,n.p_id,n.attendance_id,n.fv_id,n.__typename;var e=(0,a.Z)(n,D);return Object.values(e)}))},s=t.reduce((function(n,e){var t=e.farmer_trainer,i=e.session_image_status,a="".concat(t,"_").concat(i);return n[a]||(n[a]={farmer_trainer:t,session_image_status:i,count:0}),n[a].count+=1,n}),{}),r={header:["farmer_trainer","session_image_status","count"],body:Object.values(s).map((function(n){return Object.values(n)}))},o=h.P6.book_new(),d=h.P6.json_to_sheet([n.header].concat((0,i.Z)(n.body)),{skipHeader:!0}),c=h.P6.json_to_sheet([r.header].concat((0,i.Z)(r.body)),{skipHeader:!0});h.P6.book_append_sheet(o,c,"Summary by Trainer"),h.P6.book_append_sheet(o,d,"Sessions Data"),(0,h.NC)(o,"".concat(mn,"_").concat(x(),".xlsx"))},tableRowItem:g})]})]}),(0,u.jsx)(p.ZP,{columns:e,data:W.length>0?Y:t,onRowClicked:function(n){P(n);var e={trainsession:n.ts_id,traingroup:n.tg_id,participants:n.p_id,farmvisit:n.fv_ids,trainsessionapprov:n.ts_id}[g]||n.attendance_id;"farmvisit"!==g&&"trainsessionapprov"!==g?ln("/in/".concat(g,"/").concat(e)):"farmvisit"===g?(cn(n.fv_id),sn(!0)):"trainsessionapprov"===g&&(C(!0),N(!0))},pagination:!0,highlightOnHover:!0,customStyles:L,className:"table-container"}),(0,u.jsx)(z,{open:an,handleClose:function(){sn(!1)},fvId:dn,details:y,rowDetails:I}),V&&(0,u.jsx)(G.Z,{open:V,handleClose:function(){return C(!1)},id:I.ts_id,data:I,isVerified:I.is_verified,imageStatus:I.session_image_status,sessionImageUrl:E,selectedProject:Z,loading:k})]})}},35685:function(n,e,t){var i=t(29439),a=t(72791),s=t(5574),r=t(13400),o=t(13239),d=t(4567),c=t(39157),l=t(61889),u=t(16856),m=t(66934),p=(t(96019),t(65218),t(80184)),_=(0,m.ZP)("div")({position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.7)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center"});e.Z=function(n){var e=n.open,t=n.handleClose,m=n.sessionImageUrl,g=n.data,f=(n.selectedProject,n.loading);console.log(g);var h=(0,a.useState)(!1),v=(0,i.Z)(h,2),x=v[0],j=v[1],y=(0,a.useState)(!1),Z=(0,i.Z)(y,2),b=Z[0],S=(Z[1],function(){j((function(n){return!n}))});return(0,p.jsx)(p.Fragment,{children:f?(0,p.jsxs)(s.Z,{open:e,keepMounted:!0,fullWidth:!0,"aria-describedby":"alert-dialog-slide-description",children:[(0,p.jsx)("div",{style:{margin:"20px"},children:(0,p.jsx)(r.Z,{"aria-label":"close",onClick:t,sx:{position:"absolute",right:8,top:8,color:"#2b2b2b"},children:(0,p.jsx)(u.FU5,{})})}),(0,p.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:[(0,p.jsx)(o.Z,{}),(0,p.jsx)(d.Z,{variant:"h6",style:{marginLeft:"10px"},children:"Loading Image..."})]})]}):(0,p.jsxs)(s.Z,{open:e,keepMounted:!0,fullWidth:!0,"aria-describedby":"alert-dialog-slide-description",children:[b&&(0,p.jsx)(_,{children:(0,p.jsx)(o.Z,{})}),(0,p.jsxs)("div",{style:{margin:"20px"},children:[(0,p.jsx)(r.Z,{"aria-label":"close",onClick:t,sx:{position:"absolute",right:8,top:8,color:"#2b2b2b"},children:(0,p.jsx)(u.FU5,{})}),(0,p.jsx)(d.Z,{variant:"h6",children:"Session Image"})]}),(0,p.jsx)(c.Z,{children:(0,p.jsxs)(l.ZP,{container:!0,spacing:2,children:[(0,p.jsxs)(l.ZP,{item:!0,xs:12,sm:6,children:[(0,p.jsxs)(d.Z,{variant:"body1",children:[(0,p.jsx)("strong",{children:"Male Attendees:"})," ",g.total_males]}),(0,p.jsxs)(d.Z,{variant:"body1",children:[(0,p.jsx)("strong",{children:"Female Attendees:"})," ",g.total_females]}),(0,p.jsxs)(d.Z,{variant:"body1",children:[(0,p.jsx)("strong",{children:"Total Attendees:"})," ",g.total_males+g.total_females]}),(0,p.jsxs)(d.Z,{variant:"body1",children:[(0,p.jsx)("strong",{children:"Session Date:"})," ",g.session_date]}),(0,p.jsxs)(d.Z,{variant:"body1",children:[(0,p.jsx)("strong",{children:"Farmer Trainer:"})," ",g.farmer_trainer]}),(0,p.jsxs)(d.Z,{variant:"body1",children:[(0,p.jsx)("strong",{children:"Session Module:"})," ",g.ts_module]}),(0,p.jsxs)(d.Z,{variant:"body1",children:[(0,p.jsx)("strong",{children:"FFG:"})," ",g.ts_group]})]}),(0,p.jsx)(l.ZP,{item:!0,xs:12,sm:6,children:(0,p.jsxs)("div",{style:{position:"relative"},children:[(0,p.jsx)("img",{src:m,alt:"session_pic",style:{width:"100%",height:"auto",cursor:x?"zoom-out":"zoom-in"},onClick:S}),x?(0,p.jsx)(r.Z,{"aria-label":"shrink",onClick:S,sx:{position:"absolute",bottom:8,right:8,color:"#fff"},children:(0,p.jsx)(u.I_n,{})}):(0,p.jsx)(r.Z,{"aria-label":"expand",onClick:S,sx:{position:"absolute",bottom:8,right:8,color:"#fff"},children:(0,p.jsx)(u.Nms,{})})]})})]})})]})})}},16704:function(n,e,t){t.d(e,{QR:function(){return y},Uj:function(){return I},Uv:function(){return Z},_X:function(){return $},a5:function(){return P},iF:function(){return w},jb:function(){return V},nM:function(){return S},p7:function(){return b},sr:function(){return F}});var i,a,s,r,o,d,c,l,u,m,p,_,g,f,h,v,x=t(30168),j=t(9383),y=(0,j.Ps)(i||(i=(0,x.Z)(["\n  query GetFarmVisitsByProject($projectId: String!) {\n    getFarmVisitsByProject(project_id: $projectId) {\n      message\n      status\n      farmVisits {\n        fv_id\n        training_group\n        farmer_tns_id\n        household_tns_id\n        farm_visited\n        farmer_trainer\n        date_visited\n        pima_household_id\n        pima_farmer_id\n        gender\n      }\n    }\n  }\n"]))),Z=(0,j.Ps)(a||(a=(0,x.Z)(["\n  query GetFarmVisitsByGroup($tgId: String!) {\n    getFarmVisitsByGroup(tg_id: $tgId) {\n      message\n      status\n      farmVisits {\n        fv_id\n        fv_name\n        training_group\n        training_session\n        tns_id\n        farm_visited\n        household_id\n        farmer_trainer\n        has_training\n        date_visited\n      }\n    }\n  }\n"]))),b=((0,j.Ps)(s||(s=(0,x.Z)(["\n  query GetFarmVisitsBySession($tsId: String!) {\n    getFarmVisitsBySession(ts_id: $tsId) {\n      message\n      status\n      farmVisits {\n        fv_id\n        fv_name\n        training_group\n        training_session\n        tns_id\n        farm_visited\n        household_id\n        farmer_trainer\n        has_training\n        date_visited\n      }\n    }\n  }\n"]))),(0,j.Ps)(r||(r=(0,x.Z)(["\n  query GetFarmVisitsByParticipant($partId: String!) {\n    getFarmVisitsByParticipant(part_id: $partId) {\n      message\n      status\n      farmVisits {\n        fv_id\n        fv_name\n        training_group\n        training_session\n        farmer_tns_id\n        farm_visited\n        household_id\n        farmer_trainer\n        has_training\n        date_visited\n      }\n    }\n  }\n"])))),S=(0,j.Ps)(o||(o=(0,x.Z)(["\n  query GetFVQAsByFarmVisits($fvId: String!) {\n    getFVQAsByFarmVisits(fv_id: $fvId) {\n      message\n      status\n      fvQAs {\n        bp_id\n        fv_id\n        qas {\n          practice_name_id\n          practice_name\n          questions\n          answers\n        }\n      }\n    }\n  }\n"]))),w=(0,j.Ps)(d||(d=(0,x.Z)(["\n  mutation UpdateFVQAImageStatus(\n    $bpId: String!\n    $fieldName: FieldNames!\n    $imageStatus: Status!\n  ) {\n    updateFVQAImageStatus(\n      bp_id: $bpId\n      field_name: $fieldName\n      image_status: $imageStatus\n    ) {\n      message\n      status\n    }\n  }\n"]))),I=((0,j.Ps)(c||(c=(0,x.Z)(["\n  query getFVQAsByProjectForReview(\n    $projectId: String!\n    $limit: Int!\n    $offset: Int!\n  ) {\n    getFVQAsByProjectForReview(\n      project_id: $projectId\n      limit: $limit\n      offset: $offset\n    ) {\n      message\n      status\n      farmVisits {\n        fv_id\n        training_group\n        training_session\n        tns_id\n        farm_visited\n        household_id\n        farmer_trainer\n        has_training\n        date_visited\n        status\n        qas {\n          practice_name_id\n          practice_name\n          questions\n          answers\n        }\n      }\n    }\n  }\n"]))),(0,j.Ps)(l||(l=(0,x.Z)(["\n  query getFVQAsByProjectInExcel($projectId: String!, $practiceName: String!) {\n    getFVQAsByProjectInExcel(\n      project_id: $projectId\n      practice_name: $practiceName\n    ) {\n      message\n      status\n      file\n    }\n  }\n"]))),(0,j.Ps)(u||(u=(0,x.Z)(["\n  query getFVQAsByProjectInExcel($projectId: String!, $practiceName: String!) {\n    getFVQAsByProjectInExcel(\n      project_id: $projectId\n      practice_name: $practiceName\n    ) {\n      message\n      status\n      file\n    }\n  }\n"]))),(0,j.Ps)(m||(m=(0,x.Z)(["\n  mutation UploadParticipants($partsFile: Upload!) {\n    uploadParticipants(parts_file: $partsFile) {\n      message\n      status\n    }\n  }\n"]))),(0,j.Ps)(p||(p=(0,x.Z)(["\n  query GetSampledVisitsStats($projectId: String!) {\n    getSampledVisitsStats(projectId: $projectId) {\n      totalSampledVisits\n      totalReviewed\n      remainingVisits\n    }\n  }\n"])))),P=(0,j.Ps)(_||(_=(0,x.Z)(["\n  query GetBestPracticeStats($projectId: String!, $practiceName: String!) {\n    getBestPracticeReviewStats(\n      projectId: $projectId\n      practiceName: $practiceName\n    ) {\n      reviewedVisits\n      remainingVisits\n      totalVisits\n    }\n  }\n"]))),F=(0,j.Ps)(g||(g=(0,x.Z)(["\n  query GetPaginatedReviews(\n    $projectId: String!\n    $practiceName: String!\n    $page: Int!\n    $pageSize: Int!\n  ) {\n    getPaginatedReviews(\n      projectId: $projectId\n      practiceName: $practiceName\n      page: $page\n      pageSize: $pageSize\n    ) {\n      visit_id\n      sf_visit_id\n      farmer_name\n      farmer_pima_id\n      farmer_tns_id\n      date_visited\n      farmer_trainer\n      BestPractices {\n        practice_id\n        practice_name\n        image_url\n        sf_practice_id\n        question\n        answer\n      }\n    }\n  }\n"]))),$=(0,j.Ps)(f||(f=(0,x.Z)(["\n  query GenerateFarmVisitReport($projectId: String!) {\n    generateFarmVisitReport(projectId: $projectId) {\n      message\n      status\n      file\n    }\n  }\n"]))),V=((0,j.Ps)(h||(h=(0,x.Z)(["\n  mutation SubmitBatch($input: [BatchInput!]!) {\n    submitBatch(input: $input) {\n      success\n      message\n    }\n  }\n"]))),(0,j.Ps)(v||(v=(0,x.Z)(["\n  mutation SubmitBatch($input: [BatchInput!]!) {\n    submitBatch(input: $input) {\n      success\n      message\n    }\n  }\n"]))))},60586:function(n,e,t){t.d(e,{o:function(){return o}});var i,a,s=t(30168),r=t(9383),o=((0,r.Ps)(i||(i=(0,s.Z)(["\n  query GetAllTrainingModules {\n    getAllTrainingModules {\n      message\n      status\n      training_modules {\n        tm_id\n        tm_name\n        tm_title\n        tm_module_number\n        tm_project\n        tm_status\n        tm_is_current\n        tm_date\n      }\n    }\n  }\n"]))),(0,r.Ps)(a||(a=(0,s.Z)(["\n  query GetTrainingModulesByProject($projectId: String!) {\n    getTrainingModulesByProject(project_id: $projectId) {\n      message\n      status\n      training_modules {\n        tm_id\n        tm_name\n        tm_title\n        tm_module_number\n        tm_project\n        tm_status\n        tm_is_current\n        tm_date\n      }\n    }\n  }\n"]))))}}]);
//# sourceMappingURL=770.42a50a70.chunk.js.map