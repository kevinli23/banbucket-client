(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{190:function(e,t,n){},272:function(e,t,n){},273:function(e,t,n){"use strict";n.r(t);var r,a,c,i=n(0),o=n.n(i),s=n(56),l=n.n(s),d=(n(190),n(27)),h=n.n(d),u=n(49),j=n(4),x=n(165),b=n.n(x),p=n(288),f=n(295),m=n(289),O=n(299),C=n(300),v=n(178),g=n(290),y=n(291),w=n(292),E=n(293),k=n(95),F=(n(158),n(298)),D=n(2),_=function(){var e=Object(i.useState)([{addr:"ban_1j3rqseffoin7x5z5y1ehaqe1n7todza41kdf4oyga8phps3ea31u39ruchu",amount:0}]),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(p.a)("ban_1j3rqseffoin7x5z5y1ehaqe1n7todza41kdf4oyga8phps3ea31u39ruchu"),c=a.hasCopied,o=a.onCopy,s=Object(f.a)();return Object(i.useEffect)((function(){!s.isActive("copied")&&c&&s({id:"copied",title:"Copy",description:"Faucet Address copied to clipboard",status:"info",duration:3e3,isClosable:!0,position:"top"})}),[c,s]),Object(i.useEffect)((function(){Object(u.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://banbucket.herokuapp.com/api/v1/donators",{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(){var e=Object(u.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,(a=n.donators).sort((function(e,t){return e.amount>t.amount?-1:e.amount<t.amount?1:0})),r(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){}));case 2:case"end":return e.stop()}}),e)})))()}),[]),Object(D.jsxs)("div",{className:"App",style:{minWidth:"100vw",minHeight:"95vh",maxWidth:"100vw",backgroundColor:"#212529",display:"flex",flexDirection:"column",alignItems:"center",color:"white",overflowX:"hidden"},children:[Object(D.jsx)(m.a,{m:"20px",fontFamily:"Aleo, serif",size:"3xl",color:"white",children:"Hall of Donators"}),Object(D.jsxs)(O.a,{children:[Object(D.jsx)(C.a,{boxSize:"150px",src:"https://monkey.banano.cc/api/v1/monkey/ban_1j3rqseffoin7x5z5y1ehaqe1n7todza41kdf4oyga8phps3ea31u39ruchu?svc=creeper"}),Object(D.jsx)(b.a,{size:128,value:"ban_1j3rqseffoin7x5z5y1ehaqe1n7todza41kdf4oyga8phps3ea31u39ruchu"})]}),Object(D.jsxs)(O.a,{mt:"10px",children:[Object(D.jsxs)(v.a,{mr:"-8px",colorScheme:"linkedin",variant:"ghost",onClick:o,children:[Object(D.jsx)(g.a,{color:"#E4C703",children:"ban_"}),"1j3rqseffoin7x5z5y1ehaqe1n7todza41kdf4oyga8phps3ea31u39ruchu"]}),Object(D.jsx)(y.a,{colorScheme:"linkedin","aria-label":"copy",icon:Object(D.jsx)(F.a,{}),onClick:o})]}),Object(D.jsx)(k.a,{style:{maxWidth:"40vw",minWidth:"40vw",minHeight:"60vh",maxHeight:"60vh",overflowX:"hidden",display:"flex",alignItems:"center"},children:Object(D.jsxs)(w.a,{m:"15px",maxWidth:"37vw",variant:"simple",colorScheme:"linkedin",children:[Object(D.jsx)(w.e,{children:Object(D.jsxs)(w.f,{children:[Object(D.jsx)(w.d,{children:"Address"}),Object(D.jsx)(w.d,{isNumeric:!0,children:"Amount"})]})}),Object(D.jsx)(w.b,{children:n.map((function(e){return Object(D.jsxs)(w.f,{children:[Object(D.jsx)(w.c,{children:Object(D.jsx)(E.a,{href:"https://creeper.banano.cc/explorer/account/"+e.addr+"/history",_hover:{textDecoration:"none",color:"#E4C703"},_link:{textDecoration:"none"},_focus:{textDecoration:"none"},id:e.addr,isExternal:!0,children:e.addr})}),Object(D.jsx)(w.c,{isNumeric:!0,children:e.amount})]})}))})]})})]})},z=n(297),S=n(172),B=n.n(S),A=n(73),H=n(71),W=["title","titleId"];function q(){return q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},q.apply(this,arguments)}function I(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function M(e,t){var n=e.title,o=e.titleId,s=I(e,W);return i.createElement("svg",q({width:"300px",height:"300px",viewBox:"0 0 300 300",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":o},s),void 0===n?i.createElement("title",{id:o},"banano-icon"):n?i.createElement("title",{id:o},n):null,r||(r=i.createElement("desc",null,"Created with Sketch.")),a||(a=i.createElement("defs",null,i.createElement("radialGradient",{cx:"15.8840638%",cy:"10.8985871%",fx:"15.8840638%",fy:"10.8985871%",r:"97.1594073%",id:"radialGradient-1"},i.createElement("stop",{stopColor:"#FFFFFF",stopOpacity:.15,offset:"0%"}),i.createElement("stop",{stopColor:"#FFFFFF",stopOpacity:0,offset:"100%"})),i.createElement("path",{d:"M127.311915,92.3143368 C71.5350042,99.3357531 45.8513339,50.2282589 50.406742,45.4368897 C53.4146482,42.2736165 58.0915878,42.0837393 62.1446654,41.9746609 C80.7936837,41.4696684 107.190339,63.2429265 112.543805,63.1358681 C122.912472,62.9237712 138.511048,46.4448548 148.731853,32.8605556 C153.009764,27.1783796 179.734555,18.6157261 176.77121,33.5453255 C167.162114,81.9640098 134.419486,91.4194901 127.311915,92.3143368 Z M49.6880853,0.685663156 C105.464996,-6.33575306 131.148666,42.7717411 126.591233,47.5631103 C123.583327,50.7263835 118.908412,50.9162607 114.855335,51.0253391 C96.2063165,51.5303316 69.8096611,29.7550535 64.4561957,29.8641319 C54.0875279,30.0762288 38.4889518,46.5551452 28.2661219,60.1394444 C23.9902364,65.8216204 -2.73455431,74.3842739 0.228790299,59.4566945 C9.83788587,11.0359902 42.5805144,1.58050993 49.6880853,0.685663156 Z",id:"path-2"}),i.createElement("filter",{x:"-12.7%",y:"-17.7%",width:"125.4%",height:"148.4%",filterUnits:"objectBoundingBox",id:"filter-3"},i.createElement("feOffset",{dx:0,dy:6,in:"SourceAlpha",result:"shadowOffsetOuter1"}),i.createElement("feGaussianBlur",{stdDeviation:6.5,in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}),i.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.248131793 0",type:"matrix",in:"shadowBlurOuter1"})))),c||(c=i.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},i.createElement("g",{id:"icon",transform:"translate(-350.000000, -350.000000)"},i.createElement("g",{id:"banano-icon",transform:"translate(150.000000, 150.000000)"},i.createElement("g",{transform:"translate(200.000000, 200.000000)"},i.createElement("g",{id:"base"},i.createElement("rect",{id:"path-1",fill:"#FBDD11",x:0,y:0,width:300,height:300,rx:150}),i.createElement("path",{d:"M300,150 C300,232.842713 232.842713,300 150,300 C67.1572875,300 1.01453062e-14,232.842713 0,150 C-6.13029393e-17,149.499424 0.00245202796,148.99942 0.00734472809,148.5 C0.812166334,230.651854 67.6578633,297 150,297 C232.342137,297 299.187834,230.651854 299.992655,148.499998 C299.997548,148.99942 300,149.499424 300,150 Z",id:"Combined-Shape",fill:"#E8C900"}),i.createElement("path",{d:"M299.992655,151.500002 C299.187834,69.3481459 232.342137,3 150,3 C67.6578633,3 0.812166334,69.3481459 0.00734470617,151.500002 C0.00245202796,151.00058 6.13029393e-17,150.500576 0,150 C-1.01453062e-14,67.1572875 67.1572875,1.52179594e-14 150,0 C232.842713,-1.52179594e-14 300,67.1572875 300,150 C300,150.500576 299.997548,151.00058 299.992655,151.5 L299.992655,151.500002 Z",id:"Combined-Shape",fill:"#FFEF7F"}),i.createElement("rect",{id:"innerring",fill:"#2A2A2E",x:15,y:15,width:270,height:270,rx:135})),i.createElement("rect",{id:"finish",fill:"url(#radialGradient-1)",x:0,y:0,width:300,height:300,rx:150}),i.createElement("g",{id:"logo",transform:"translate(61.800000, 103.800000)"},i.createElement("g",null,i.createElement("use",{fill:"black",fillOpacity:1,filter:"url(#filter-3)",xlinkHref:"#path-2"}),i.createElement("use",{fill:"#FBDD11",fillRule:"evenodd",xlinkHref:"#path-2"})),i.createElement("path",{d:"M126.983272,46.8179364 C125.005537,34.857328 99.2059868,-3.14784444 49.6880853,3.08566316 C42.5805144,3.98050993 9.83788587,13.4359902 0.228790299,61.8566945 C0.167353326,62.1661777 0.118677162,62.4655641 0.0822971972,62.7550887 C-0.0600755246,61.8129063 -0.0217470759,60.7187538 0.228790299,59.4566945 C9.83788587,11.0359902 42.5805144,1.58050993 49.6880853,0.685663156 C103.316569,-6.06530068 129.12544,39.0719514 126.983272,46.8179364 Z M50.0151677,48.5811968 C49.7651982,47.0698368 49.8956543,45.9744507 50.406742,45.4368897 C53.4146482,42.2736165 58.0915878,42.0837393 62.1446654,41.9746609 C80.7936837,41.4696684 107.190339,63.2429265 112.543805,63.1358681 C122.912472,62.9237712 138.511048,46.4448548 148.731853,32.8605556 C152.921054,27.2962093 178.635838,18.9696103 176.917726,32.646623 C175.376324,22.4429233 152.648107,30.0587543 148.731853,35.2605556 C138.511048,48.8448548 122.912472,65.3237712 112.543805,65.5358681 C107.190339,65.6429265 80.7936837,43.8696684 62.1446654,44.3746609 C58.0915878,44.4837393 53.4146482,44.6736165 50.406742,47.8368897 C50.2314392,48.0212728 50.1009172,48.2712832 50.0151677,48.5811968 Z",id:"highlight",fill:"#FFEF7F"}),i.createElement("path",{d:"M126.983272,44.4179364 C127.233256,45.9297444 127.102645,47.0254465 126.591233,47.5631103 C123.583327,50.7263835 118.908412,50.9162607 114.855335,51.0253391 C96.2063165,51.5303316 69.8096611,29.7550535 64.4561957,29.8641319 C54.0875279,30.0762288 38.4889518,46.5551452 28.2661219,60.1394444 C24.0788853,65.7038158 -1.63607031,74.0304648 0.0822971972,60.3550887 C1.62390252,70.5569961 24.3517431,62.9412182 28.2661219,57.7394444 C38.4889518,44.1551452 54.0875279,27.6762288 64.4561957,27.4641319 C69.8096611,27.3550535 96.2063165,49.1303316 114.855335,48.6253391 C118.908412,48.5162607 123.583327,48.3263835 126.591233,45.1631103 C126.766777,44.9785553 126.897454,44.7282506 126.983272,44.4179364 Z M50.0151677,46.1811968 C51.9932171,58.1408357 77.7928172,96.147995 127.311915,89.9143368 C134.419486,89.0194901 167.162114,79.5640098 176.77121,31.1453255 C176.83266,30.8357344 176.881344,30.5362453 176.917726,30.246623 C177.060071,31.1889119 177.021733,32.2831678 176.77121,33.5453255 C167.162114,81.9640098 134.419486,91.4194901 127.311915,92.3143368 C73.6814302,99.0655525 47.8726341,53.9246806 50.0151677,46.1811968 Z",id:"shadow",fill:"#E8C900"}))))))))}var R=i.forwardRef(M),G=(n.p,function(){return Object(D.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center"},children:[Object(D.jsx)(E.a,{href:"https://www.reddit.com/r/banano/",isExternal:!0,children:Object(D.jsx)(y.a,{backgroundColor:"white","aria-label":"reddit",isRound:!0,icon:Object(D.jsx)(H.a,{color:"#FF5700",icon:A.b,size:"2x"}),m:"5px",_hover:{backgroundColor:"#E4C703"}})}),Object(D.jsx)(E.a,{href:"https://chat.banano.cc/",isExternal:!0,children:Object(D.jsx)(y.a,{"aria-label":"discord",backgroundColor:"#5C6BC0",isRound:!0,icon:Object(D.jsx)(H.a,{color:"white",icon:A.a,size:"lg"}),m:"5px",_hover:{backgroundColor:"#E4C703"}})}),Object(D.jsx)(E.a,{href:"https://t.me/banano_official",isExternal:!0,children:Object(D.jsx)(y.a,{backgroundColor:"white","aria-label":"telegram",isRound:!0,icon:Object(D.jsx)(H.a,{color:"#32A8DD",icon:A.c,size:"2x"}),m:"5px",_hover:{backgroundColor:"#E4C703"}})}),Object(D.jsx)(E.a,{href:"https://twitter.com/bananocoin",isExternal:!0,children:Object(D.jsx)(y.a,{backgroundColor:"white","aria-label":"twitter",isRound:!0,icon:Object(D.jsx)(H.a,{color:"#1DA1F2",icon:A.d,size:"2x"}),m:"5px",_hover:{backgroundColor:"#E4C703"}})}),Object(D.jsx)(E.a,{href:"https://banano.cc/",isExternal:!0,children:Object(D.jsx)(y.a,{backgroundColor:"white","aria-label":"banano",isRound:!0,icon:Object(D.jsx)(R,{style:{width:"35px",height:"35px"}}),m:"5px",_hover:{backgroundColor:"#E4C703"}})})]})}),Z=n(58),N=function(){var e=Object(i.useState)(""),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(i.useState)(!1),c=Object(j.a)(a,2),o=c[0],s=c[1],l=Object(i.useState)(""),d=Object(j.a)(l,2),x=d[0],b=d[1],p=Object(i.useState)("Please enter a valid Banano address"),O=Object(j.a)(p,2),C=O[0],y=(O[1],Object(i.useState)(!1)),w=Object(j.a)(y,2),k=w[0],F=w[1],_=Object(i.useState)(0),S=Object(j.a)(_,2),A=S[0],H=S[1],W=Object(f.a)();Object(i.useEffect)((function(){Object(u.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://banbucket.herokuapp.com/api/v1/amount",{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(){var e=Object(u.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,H(n.message);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){H(0)}));case 2:case"end":return e.stop()}}),e)})))()}),[k]);var q=Object(i.useRef)(null);return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(m.a,{mt:"20px",color:"#E4C703",fontFamily:"Aleo, serif",size:"3xl",children:"BanBucket"}),Object(D.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[Object(D.jsx)(g.a,{color:"white",fontSize:"xl",m:"5px",children:A}),Object(D.jsx)(R,{style:{width:"20px",height:"20px"}})]}),Object(D.jsx)("div",{style:{minHeight:"30px"},children:!o&&""!==n&&Object(D.jsx)(g.a,{fontSize:"lg",color:"red.500",children:C})}),Object(D.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",minWidth:"300px"},children:[Object(D.jsx)(z.a,{mb:"10px",value:n,onChange:function(e){r(e.target.value),s(e.target.value.startsWith("ban_")&&64===e.target.value.length)},size:"md",color:"white",borderColor:"white",focusBorderColor:"#E4C703",_hover:{borderColor:"#E4C703"},isInvalid:!o&&""!==n,placeholder:"Enter your Banano address"}),Object(D.jsx)(B.a,{sitekey:"abef2c9f-abd9-4ebe-a315-384c3228cd11",onVerify:function(e,t){b(e)},theme:"dark",ref:q}),Object(D.jsx)(v.a,{mt:"10px",color:"black",width:"300px",backgroundColor:"#E4C703",_hover:{backgroundColor:"#FCB600"},size:"lg",disabled:!o||64!==n.length||0===x.length,isLoading:k,onClick:Object(u.a)(h.a.mark((function e(){var t,r,a,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(F(!0),q.current.resetCaptcha(),t=!1){e.next=16;break}return r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({addr:n,captcha:x})},t=!1,e.next=8,fetch("https://banbucket.herokuapp.com/api/v1/claim",r).catch((function(e){F(!1),W.isActive("server-connection")||W({id:"server-connection",title:"Connection Error",description:"Failed to connect to server",status:"error",duration:3e3,isClosable:!0,position:"top"}),t=!0}));case 8:if(a=e.sent,t){e.next=16;break}return e.next=12,a.json();case 12:c=e.sent,400===a.status||500===a.status?W({title:"Bad Request",description:c.message,status:"error",duration:2500,isClosable:!0,position:"top"}):W({title:"Successful Claim",description:c.message,status:"success",duration:2500,isClosable:!0,position:"top"}),F(!1),b("");case 16:case"end":return e.stop()}}),e)}))),children:"Claim Free Banano"}),Object(D.jsx)(g.a,{color:"white",mt:"20px",mb:"5px",fontSize:"xl",children:"Learn More"}),Object(D.jsx)(G,{}),Object(D.jsx)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:Object(D.jsx)(E.a,{to:"/donate",as:Z.b,_hover:{textDecoration:"none"},_link:{textDecoration:"none"},children:Object(D.jsx)(v.a,{colorScheme:"blue",mt:"30px",mb:"5px",fontSize:"xl",children:"Donate!"})})})]})]})},T=function(){return Object(D.jsx)("div",{className:"App",style:{minWidth:"100vw",minHeight:"95vh",backgroundColor:"#212529",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:Object(D.jsx)(N,{})})},L=n(175),P=function(e){var t=e.children;return Object(D.jsx)(k.a,{style:{maxHeight:"80vh",maxWidth:"25vw",minHeight:"80vh",minWidth:"25vw",padding:"20px",backgroundColor:"#212529",borderRadius:"15px",marginTop:"10px"},children:t})},J=function(){var e=Object(i.useState)(""),t=Object(j.a)(e,2),n=t[0],r=t[1];return Object(i.useEffect)((function(){fetch("/CHANGELOG.MD").then((function(e){return e.text()})).then((function(e){r(e)}))}),[]),Object(D.jsxs)("div",{className:"App",style:{minWidth:"100vw",minHeight:"95vh",maxHeight:"95vh",maxWidth:"100vw",backgroundColor:"#212529",display:"flex",flexDirection:"column",alignItems:"center",color:"white"},children:[Object(D.jsx)(m.a,{mt:"20px",color:"#E4C703",fontFamily:"Aleo, serif",size:"3xl",children:"Update Logs"}),Object(D.jsx)(L.a,{options:{overrides:{h1:{component:m.a}},wrapper:P},children:n})]})},U=n(11),X=function(e){var t=e.route,n=e.text,r=Object(U.f)();return Object(D.jsx)(E.a,{to:t,as:Z.b,_hover:{textDecoration:"none",color:"#E4C703"},_link:{textDecoration:"none"},_active:{textDecoration:"none"},_visited:{textDecoration:"none"},_focus:{textDecoration:"none"},color:r.pathname!==t?"white":"blue.200",children:Object(D.jsx)(g.a,{children:n})})},V=function(){return Object(D.jsx)("div",{style:{marginLeft:"5px",marginRight:"5px"},children:"\xb7"})},K=function(){return Object(D.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",minWidth:"100vw",maxHeight:"5vh",minHeight:"5vh",backgroundColor:"#212529"},children:[Object(D.jsx)(X,{route:"/",text:"Faucet"}),Object(D.jsx)(V,{}),Object(D.jsx)(X,{route:"/donate",text:"Donate"}),Object(D.jsx)(V,{}),Object(D.jsx)(X,{route:"/updates",text:"Updates"}),Object(D.jsx)(V,{}),Object(D.jsx)(E.a,{href:"https://creeper.banano.cc/explorer/account/ban_1j3rqseffoin7x5z5y1ehaqe1n7todza41kdf4oyga8phps3ea31u39ruchu/history",_hover:{textDecoration:"none",color:"#E4C703"},_link:{textDecoration:"none"},_focus:{textDecoration:"none"},isExternal:!0,color:"white",children:Object(D.jsx)(g.a,{children:"Creeper"})})]})};n(272);var Q=function(){return Object(D.jsx)(D.Fragment,{children:Object(D.jsxs)(Z.a,{basename:"",children:[Object(D.jsxs)(U.c,{children:[Object(D.jsx)(U.a,{path:"/donate",children:Object(D.jsx)(_,{})}),Object(D.jsx)(U.a,{path:"/updates",children:Object(D.jsx)(J,{})}),Object(D.jsx)(U.a,{path:"/",children:Object(D.jsx)(T,{})})]}),Object(D.jsx)(K,{})]})})},Y=n(296);l.a.render(Object(D.jsx)(o.a.StrictMode,{children:Object(D.jsx)(Y.a,{children:Object(D.jsx)(Q,{})})}),document.getElementById("root"))}},[[273,1,2]]]);
//# sourceMappingURL=main.f03b1729.chunk.js.map