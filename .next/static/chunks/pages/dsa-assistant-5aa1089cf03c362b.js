(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[979],{978:(e,t,r)=>{"use strict";r.d(t,{A:()=>k});var o=r(7876),s=r(4232),n=r(5500),i=r(1494),l=r(8050),a=r(7455),d=r(987),c=r(946),x=r(3009),h=r(2572),u=r(2398),p=r(169),g=r(9390),A=r(7018),b=r(4868),m=r(2991),j=r(2449),f=r(7188),y=r(8230),v=r.n(y);let w=["Home","About"];function k(e){let{window:t}=e,[r,y]=(0,s.useState)(!1),[k,C]=(0,s.useState)(!1),[S,E]=(0,s.useState)(()=>void 0!==t&&"dark"===localStorage.getItem("theme")),M=()=>{y(e=>!e)},_=()=>{E(e=>{let r=!e;return localStorage.setItem("theme",r?"dark":"light"),t&&t().dispatchEvent(new Event("storage")),r})};(0,s.useEffect)(()=>{let e=()=>{t&&C(t().scrollY>100)};return t&&t().addEventListener("scroll",e),()=>{t&&t().removeEventListener("scroll",e)}},[t]),(0,s.useEffect)(()=>{S?(document.body.style.backgroundColor="#121212",document.body.style.color="#b0b0b0"):(document.body.style.backgroundColor="#ffffff",document.body.style.color="#4f4f4f")},[S]);let I=(0,o.jsxs)(i.A,{onClick:M,sx:{textAlign:"center"},children:[(0,o.jsx)(A.A,{variant:"h6",sx:{my:2},children:"MUI"}),(0,o.jsx)(a.A,{}),(0,o.jsxs)(x.A,{children:[w.map(e=>(0,o.jsx)(h.Ay,{disablePadding:!0,children:(0,o.jsx)(u.A,{sx:{textAlign:"center"},children:(0,o.jsx)(p.A,{primary:e})})},e)),(0,o.jsx)(h.Ay,{disablePadding:!0,children:(0,o.jsx)(u.A,{sx:{textAlign:"center"},onClick:_,children:S?(0,o.jsx)(f.A,{}):(0,o.jsx)(j.A,{})})})]})]}),D=void 0!==t?()=>t().document.body:void 0;return(0,o.jsxs)(i.A,{sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:[(0,o.jsx)(l.Ay,{}),(0,o.jsx)(n.A,{component:"nav",sx:{backgroundColor:k?"rgba(0, 0, 0, 0.29)":S?"#292929":"black",backdropFilter:k?"blur(10px)":"none",boxShadow:k?"0 4px 30px rgba(0, 0, 0, 0.1)":"none",border:k?"1px solid rgba(255, 255, 255, 0.3)":"none",transition:"all 0.3s ease",width:k?"80%":"100%",marginTop:k?"20px":"0",right:"unset",borderRadius:k?"20px":"0"},children:(0,o.jsxs)(g.A,{children:[(0,o.jsx)(c.A,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:M,sx:{mr:2,display:{sm:"none"}},children:(0,o.jsx)(m.A,{})}),(0,o.jsx)(A.A,{variant:"h6",component:"div",sx:{flexGrow:1,display:{xs:"none",sm:"block"}},children:(0,o.jsx)(v(),{href:"/",style:{textDecoration:"none",color:"inherit"},children:"Logo"})}),(0,o.jsxs)(i.A,{sx:{display:{xs:"none",sm:"block"}},children:[w.map(e=>(0,o.jsx)(b.A,{sx:{color:"#fff"},children:(0,o.jsx)(v(),{href:"Home"===e?"/":"/".concat(e.toLowerCase().replace(" ","")),style:{textDecoration:"none",color:"inherit"},children:e})},e)),(0,o.jsx)(c.A,{sx:{color:S?"#b0b0b0":"#fff"},onClick:_,children:S?(0,o.jsx)(j.A,{}):(0,o.jsx)(f.A,{})})]})]})}),(0,o.jsx)(d.Ay,{container:D,variant:"temporary",open:r,onClose:M,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:240}},children:I})]})}},7456:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/dsa-assistant",function(){return r(7701)}])},7701:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var o=r(7876);r(4232);var s=r(1494),n=r(7018),i=r(8518),l=r(9404);let a=e=>(0,o.jsx)(i.A,{window:e.window,children:(0,o.jsxs)(s.A,{sx:{padding:"20px"},children:[(0,o.jsx)(n.A,{variant:"h4",gutterBottom:!0,children:"DSA Assistant"}),(0,o.jsx)(n.A,{variant:"body1",children:"Welcome to the DSA Assistant page. Here you can find resources and tools to help you with Data Structures and Algorithms."}),(0,o.jsx)(l.A,{})]})})},8518:(e,t,r)=>{"use strict";r.d(t,{A:()=>A});var o=r(7876),s=r(4232),n=r(978),i=r(1494),l=r(4410),a=r(7018),d=r(7855),c=r(4868),x=r(9248),h=r(4495),u=r(6060),p=r(6514);let g=e=>{let{darkMode:t}=e,[r,n]=(0,s.useState)("white");return(0,s.useEffect)(()=>{t?n("#292929"):n("#000")},[t]),(0,o.jsx)(i.A,{sx:{backgroundColor:r,padding:"40px 20px"},children:(0,o.jsxs)(l.Ay,{container:!0,spacing:4,children:[(0,o.jsxs)(l.Ay,{item:!0,xs:12,md:4,children:[(0,o.jsx)(a.A,{color:t?"rgb(176, 176, 176)":"white",variant:"h6",gutterBottom:!0,children:"Company Address"}),(0,o.jsxs)(a.A,{color:t?"rgb(176, 176, 176)":"white",variant:"body1",children:["1234 Street Name",(0,o.jsx)("br",{}),"City, State, 12345",(0,o.jsx)("br",{}),"Country"]})]}),(0,o.jsxs)(l.Ay,{item:!0,xs:12,md:4,children:[(0,o.jsx)(a.A,{color:t?"rgb(176, 176, 176)":"white",variant:"h6",gutterBottom:!0,children:"Follow Us"}),(0,o.jsxs)(i.A,{sx:{display:"flex",gap:"10px"},children:[(0,o.jsx)(x.A,{}),(0,o.jsx)(h.A,{}),(0,o.jsx)(u.A,{}),(0,o.jsx)(p.A,{})]})]}),(0,o.jsxs)(l.Ay,{item:!0,xs:12,md:4,children:[(0,o.jsx)(a.A,{variant:"h6",color:t?"rgb(176, 176, 176)":"white",gutterBottom:!0,children:"Contact Us"}),(0,o.jsxs)(i.A,{component:"form",sx:{display:"flex",flexDirection:"column",gap:"10px"},children:[(0,o.jsx)(d.A,{label:"Email",variant:"outlined",fullWidth:!0,sx:{"& .MuiInputLabel-root":{color:"white"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"white"},"&:hover fieldset":{borderColor:"white"},"&.Mui-focused fieldset":{borderColor:"white"}}}}),(0,o.jsx)(d.A,{label:"Message",variant:"outlined",fullWidth:!0,multiline:!0,rows:4,sx:{"& .MuiInputLabel-root":{color:"white"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"white"},"&:hover fieldset":{borderColor:"white"},"&.Mui-focused fieldset":{borderColor:"white"}},color:"grey"}}),(0,o.jsx)(c.A,{variant:"contained",sx:{backgroundColor:t?"rgb(176, 176, 176)":"white",color:"black",fontSize:"0.875rem",padding:"6px 12px","&:hover":{backgroundColor:"rgba(255, 255, 255, 0.8)"}},children:"Send"})]})]})]})})},A=e=>{let{children:t,window:r}=e,[i,l]=(0,s.useState)(()=>void 0!==r&&"dark"===localStorage.getItem("theme"));return(0,s.useEffect)(()=>{let e=()=>{l("dark"===localStorage.getItem("theme"))};return r&&r().addEventListener("storage",e),()=>{r&&r().removeEventListener("storage",e)}},[r]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.A,{window:r}),(0,o.jsx)("main",{style:{paddingTop:"64px",minHeight:"90vh"},children:t}),(0,o.jsx)(g,{darkMode:i})]})}},9404:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var o=r(7876);r(4232);var s=r(1494),n=r(7018),i=r(4587),l=r.n(i);let a=()=>(0,o.jsxs)(s.A,{sx:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",padding:"20px"},children:[(0,o.jsx)(l(),{height:100,width:100,src:"/path/to/your/image.jpg",alt:"Descriptive Alt Text",style:{width:"100%",maxWidth:"600px",borderRadius:"8px"}}),(0,o.jsx)(n.A,{variant:"body1",sx:{marginTop:"20px",color:"grey"},children:"This is a paragraph that describes the image above. You can add more text here to provide additional context or information about the image."})]})}},e=>{var t=t=>e(e.s=t);e.O(0,[638,587,636,593,792],()=>t(7456)),_N_E=e.O()}]);