(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{193:function(e,t,n){},275:function(e,t,n){},276:function(e,t,n){"use strict";n.r(t);var r,i,a,o=n(0),c=n.n(o),s=n(58),l=n.n(s),d=(n(193),n(20)),h=n.n(d),x=n(40),u=n(4),j=n(167),p=n.n(j),b=n(292),f=n(301),m=n(293),O=n(294),C=n(305),g=n(306),v=n(180),y=n(291),w=n(295),k=n(296),E=n(97),F=(n(160),n(303)),S=n(2),z=function(e){return 0===e?"#FFD700":1===e?"#d8d8d8":2===e?"#b08d57":"white"},D=function(e){var t=e.donator,n=e.ind;return Object(S.jsxs)("div",{style:{backgroundColor:"#1e1f26",minWidth:0===n?"220px":"170px",maxWidth:"100px",marginLeft:"15px",marginRight:"15px",minHeight:0===n?"200px":"170px",maxHeight:0===n?"200px":"170px",marginBottom:0===n?"20px":1===n?"-10px":"-30px",borderRadius:"15px",display:"inline",wordWrap:"break-word",padding:"10px",boxShadow:"0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)"},children:[Object(S.jsx)(y.a,{color:z(n),children:t.addr}),Object(S.jsx)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:"auto"},children:Object(S.jsx)(y.a,{color:z(n),fontSize:0===n?"6xl":"4xl",children:t.amount})})]})},A=function(e){var t=e.donators;return Object(S.jsxs)("div",{style:{display:"flex",flexDirection:"column",marginTop:"10px",marginBottom:"10px"},children:[Object(S.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-end"},children:[Object(S.jsx)(D,{donator:t[1],ind:1}),Object(S.jsx)(D,{donator:t[0],ind:0}),Object(S.jsx)(D,{donator:t[2],ind:2})]}),Object(S.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-end"},children:[Object(S.jsx)("div",{style:{backgroundColor:"#A6B9C7",minWidth:"200px",minHeight:"90px",maxHeight:"90px",color:"black",display:"flex",justifyContent:"center",alignItems:"center",borderRight:"10px solid #899CAA",borderTopLeftRadius:"10px"},children:Object(S.jsx)(y.a,{color:"white",fontFamily:"Open Sans, sans-serif",fontSize:"6xl",children:"2"})}),Object(S.jsx)("div",{style:{backgroundColor:"#A6B9C7",minWidth:"250px",minHeight:"125px",maxHeight:"125px",display:"flex",justifyContent:"center",alignItems:"center",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"},children:Object(S.jsx)(y.a,{color:"white",fontFamily:"Open Sans, sans-serif",fontSize:"6xl",children:"1"})}),Object(S.jsx)("div",{style:{backgroundColor:"#A6B9C7",minWidth:"200px",minHeight:"75px",maxHeight:"75px",display:"flex",justifyContent:"center",alignItems:"center",borderLeft:"10px solid #899CAA",borderTopRightRadius:"10px"},children:Object(S.jsx)(y.a,{color:"white",fontFamily:"Open Sans, sans-serif",fontSize:"6xl",children:"3"})})]})]})},_=function(e){return 0===e?"#FFD700":1===e?"#d8d8d8":2===e?"#b08d57":"white"},B=function(){var e=Object(o.useState)([{addr:"ban_1j3rqseffoin7x5z5y1ehaqe1n7todza41kdf4oyga8phps3ea31u39ruchu",amount:2e3},{addr:"ban_1j3rqseffoin7x5z5y1ehaqe1n7todza41kdf4oyga8phps3ea31u39ruchu",amount:1e3},{addr:"ban_1j3rqseffoin7x5z5y1ehaqe1n7todza41kdf4oyga8phps3ea31u39ruchu",amount:20},{addr:"ban_1j3rqseffoin7x5z5y1ehaqe1n7todza41kdf4oyga8phps3ea31u39ruchu",amount:1}]),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(b.a)("ban_1j3rqseffoin7x5z5y1ehaqe1n7todza41kdf4oyga8phps3ea31u39ruchu"),a=i.hasCopied,c=i.onCopy,s=Object(f.a)(),l=Object(m.a)("(max-width: 1024px)"),d=Object(u.a)(l,1)[0];return Object(o.useEffect)((function(){!s.isActive("copied")&&a&&s({id:"copied",title:"Copy",description:"Faucet Address copied to clipboard",status:"info",duration:3e3,isClosable:!0,position:"top"})}),[a,s]),Object(o.useEffect)((function(){Object(x.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://banbucket.herokuapp.com/api/v1/donators",{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(){var e=Object(x.a)(h.a.mark((function e(t){var n,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,(i=n.donators).sort((function(e,t){return e.amount>t.amount?-1:e.amount<t.amount?1:0})),r(i);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){}));case 2:case"end":return e.stop()}}),e)})))()}),[]),Object(S.jsxs)("div",{className:"App",style:{minWidth:"100vw",minHeight:"95vh",maxWidth:"100vw",backgroundColor:"#212529",display:"flex",flexDirection:"column",alignItems:"center",color:"white",overflowX:"hidden"},children:[Object(S.jsx)(O.a,{m:"20px",fontFamily:"Aleo, serif",size:d?"2xl":"3xl",color:"white",children:"Hall of Donators"}),Object(S.jsxs)(C.a,{children:[Object(S.jsx)(g.a,{boxSize:"150px",src:"/monke.svg"}),Object(S.jsx)(p.a,{size:128,value:"ban_1j3rqseffoin7x5z5y1ehaqe1n7todza41kdf4oyga8phps3ea31u39ruchu"})]}),Object(S.jsxs)(C.a,{mt:"10px",children:[!d&&Object(S.jsxs)(v.a,{mr:"-8px",color:"#CBC3E3",_hover:{backgroundColor:"#878787"},variant:"ghost",onClick:c,fontSize:"lg",children:[Object(S.jsx)(y.a,{color:"#E4C703",children:"ban_"}),"1j3rqseffoin7x5z5y1ehaqe1n7todza41kdf4oyga8phps3ea31u39ruchu"]}),Object(S.jsx)(w.a,{colorScheme:"linkedin","aria-label":"copy",icon:Object(S.jsx)(F.a,{}),onClick:c})]}),Object(S.jsx)(A,{donators:n}),Object(S.jsx)(E.a,{style:{maxWidth:d?"100vw":"40vw",minWidth:d?"100vw":"40vw",minHeight:"23vh",maxHeight:"23vh",overflowX:"hidden",display:"flex",alignItems:"center"},children:Object(S.jsxs)(k.a,{m:"15px",size:d?"sm":"md",variant:"simple",colorScheme:"linkedin",children:[Object(S.jsx)(k.e,{children:Object(S.jsxs)(k.f,{children:[Object(S.jsx)(k.d,{children:"Address"}),Object(S.jsx)(k.d,{isNumeric:!0,children:"Amount"})]})}),Object(S.jsx)(k.b,{children:n.map((function(e,t){return Object(S.jsxs)(k.f,{children:[Object(S.jsx)(k.c,{color:_(t),children:e.addr}),Object(S.jsx)(k.c,{isNumeric:!0,children:e.amount})]})}))})]})})]})},H=n(302),R=n(299),W=n(300),I=n(174),q=n.n(I),T=n(297),M=n(74),G=n(72),L=["title","titleId"];function N(){return N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},N.apply(this,arguments)}function Z(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function P(e,t){var n=e.title,c=e.titleId,s=Z(e,L);return o.createElement("svg",N({width:"300px",height:"300px",viewBox:"0 0 300 300",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":c},s),void 0===n?o.createElement("title",{id:c},"banano-icon"):n?o.createElement("title",{id:c},n):null,r||(r=o.createElement("desc",null,"Created with Sketch.")),i||(i=o.createElement("defs",null,o.createElement("radialGradient",{cx:"15.8840638%",cy:"10.8985871%",fx:"15.8840638%",fy:"10.8985871%",r:"97.1594073%",id:"radialGradient-1"},o.createElement("stop",{stopColor:"#FFFFFF",stopOpacity:.15,offset:"0%"}),o.createElement("stop",{stopColor:"#FFFFFF",stopOpacity:0,offset:"100%"})),o.createElement("path",{d:"M127.311915,92.3143368 C71.5350042,99.3357531 45.8513339,50.2282589 50.406742,45.4368897 C53.4146482,42.2736165 58.0915878,42.0837393 62.1446654,41.9746609 C80.7936837,41.4696684 107.190339,63.2429265 112.543805,63.1358681 C122.912472,62.9237712 138.511048,46.4448548 148.731853,32.8605556 C153.009764,27.1783796 179.734555,18.6157261 176.77121,33.5453255 C167.162114,81.9640098 134.419486,91.4194901 127.311915,92.3143368 Z M49.6880853,0.685663156 C105.464996,-6.33575306 131.148666,42.7717411 126.591233,47.5631103 C123.583327,50.7263835 118.908412,50.9162607 114.855335,51.0253391 C96.2063165,51.5303316 69.8096611,29.7550535 64.4561957,29.8641319 C54.0875279,30.0762288 38.4889518,46.5551452 28.2661219,60.1394444 C23.9902364,65.8216204 -2.73455431,74.3842739 0.228790299,59.4566945 C9.83788587,11.0359902 42.5805144,1.58050993 49.6880853,0.685663156 Z",id:"path-2"}),o.createElement("filter",{x:"-12.7%",y:"-17.7%",width:"125.4%",height:"148.4%",filterUnits:"objectBoundingBox",id:"filter-3"},o.createElement("feOffset",{dx:0,dy:6,in:"SourceAlpha",result:"shadowOffsetOuter1"}),o.createElement("feGaussianBlur",{stdDeviation:6.5,in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}),o.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.248131793 0",type:"matrix",in:"shadowBlurOuter1"})))),a||(a=o.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},o.createElement("g",{id:"icon",transform:"translate(-350.000000, -350.000000)"},o.createElement("g",{id:"banano-icon",transform:"translate(150.000000, 150.000000)"},o.createElement("g",{transform:"translate(200.000000, 200.000000)"},o.createElement("g",{id:"base"},o.createElement("rect",{id:"path-1",fill:"#FBDD11",x:0,y:0,width:300,height:300,rx:150}),o.createElement("path",{d:"M300,150 C300,232.842713 232.842713,300 150,300 C67.1572875,300 1.01453062e-14,232.842713 0,150 C-6.13029393e-17,149.499424 0.00245202796,148.99942 0.00734472809,148.5 C0.812166334,230.651854 67.6578633,297 150,297 C232.342137,297 299.187834,230.651854 299.992655,148.499998 C299.997548,148.99942 300,149.499424 300,150 Z",id:"Combined-Shape",fill:"#E8C900"}),o.createElement("path",{d:"M299.992655,151.500002 C299.187834,69.3481459 232.342137,3 150,3 C67.6578633,3 0.812166334,69.3481459 0.00734470617,151.500002 C0.00245202796,151.00058 6.13029393e-17,150.500576 0,150 C-1.01453062e-14,67.1572875 67.1572875,1.52179594e-14 150,0 C232.842713,-1.52179594e-14 300,67.1572875 300,150 C300,150.500576 299.997548,151.00058 299.992655,151.5 L299.992655,151.500002 Z",id:"Combined-Shape",fill:"#FFEF7F"}),o.createElement("rect",{id:"innerring",fill:"#2A2A2E",x:15,y:15,width:270,height:270,rx:135})),o.createElement("rect",{id:"finish",fill:"url(#radialGradient-1)",x:0,y:0,width:300,height:300,rx:150}),o.createElement("g",{id:"logo",transform:"translate(61.800000, 103.800000)"},o.createElement("g",null,o.createElement("use",{fill:"black",fillOpacity:1,filter:"url(#filter-3)",xlinkHref:"#path-2"}),o.createElement("use",{fill:"#FBDD11",fillRule:"evenodd",xlinkHref:"#path-2"})),o.createElement("path",{d:"M126.983272,46.8179364 C125.005537,34.857328 99.2059868,-3.14784444 49.6880853,3.08566316 C42.5805144,3.98050993 9.83788587,13.4359902 0.228790299,61.8566945 C0.167353326,62.1661777 0.118677162,62.4655641 0.0822971972,62.7550887 C-0.0600755246,61.8129063 -0.0217470759,60.7187538 0.228790299,59.4566945 C9.83788587,11.0359902 42.5805144,1.58050993 49.6880853,0.685663156 C103.316569,-6.06530068 129.12544,39.0719514 126.983272,46.8179364 Z M50.0151677,48.5811968 C49.7651982,47.0698368 49.8956543,45.9744507 50.406742,45.4368897 C53.4146482,42.2736165 58.0915878,42.0837393 62.1446654,41.9746609 C80.7936837,41.4696684 107.190339,63.2429265 112.543805,63.1358681 C122.912472,62.9237712 138.511048,46.4448548 148.731853,32.8605556 C152.921054,27.2962093 178.635838,18.9696103 176.917726,32.646623 C175.376324,22.4429233 152.648107,30.0587543 148.731853,35.2605556 C138.511048,48.8448548 122.912472,65.3237712 112.543805,65.5358681 C107.190339,65.6429265 80.7936837,43.8696684 62.1446654,44.3746609 C58.0915878,44.4837393 53.4146482,44.6736165 50.406742,47.8368897 C50.2314392,48.0212728 50.1009172,48.2712832 50.0151677,48.5811968 Z",id:"highlight",fill:"#FFEF7F"}),o.createElement("path",{d:"M126.983272,44.4179364 C127.233256,45.9297444 127.102645,47.0254465 126.591233,47.5631103 C123.583327,50.7263835 118.908412,50.9162607 114.855335,51.0253391 C96.2063165,51.5303316 69.8096611,29.7550535 64.4561957,29.8641319 C54.0875279,30.0762288 38.4889518,46.5551452 28.2661219,60.1394444 C24.0788853,65.7038158 -1.63607031,74.0304648 0.0822971972,60.3550887 C1.62390252,70.5569961 24.3517431,62.9412182 28.2661219,57.7394444 C38.4889518,44.1551452 54.0875279,27.6762288 64.4561957,27.4641319 C69.8096611,27.3550535 96.2063165,49.1303316 114.855335,48.6253391 C118.908412,48.5162607 123.583327,48.3263835 126.591233,45.1631103 C126.766777,44.9785553 126.897454,44.7282506 126.983272,44.4179364 Z M50.0151677,46.1811968 C51.9932171,58.1408357 77.7928172,96.147995 127.311915,89.9143368 C134.419486,89.0194901 167.162114,79.5640098 176.77121,31.1453255 C176.83266,30.8357344 176.881344,30.5362453 176.917726,30.246623 C177.060071,31.1889119 177.021733,32.2831678 176.77121,33.5453255 C167.162114,81.9640098 134.419486,91.4194901 127.311915,92.3143368 C73.6814302,99.0655525 47.8726341,53.9246806 50.0151677,46.1811968 Z",id:"shadow",fill:"#E8C900"}))))))))}var U=o.forwardRef(P),X=(n.p,function(){return Object(S.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center"},children:[Object(S.jsx)(T.a,{href:"https://www.reddit.com/r/banano/",isExternal:!0,children:Object(S.jsx)(w.a,{backgroundColor:"white","aria-label":"reddit",isRound:!0,icon:Object(S.jsx)(G.a,{color:"#FF5700",icon:M.b,size:"2x"}),m:"5px",_hover:{backgroundColor:"#E4C703"}})}),Object(S.jsx)(T.a,{href:"https://chat.banano.cc/",isExternal:!0,children:Object(S.jsx)(w.a,{"aria-label":"discord",backgroundColor:"#5C6BC0",isRound:!0,icon:Object(S.jsx)(G.a,{color:"white",icon:M.a,size:"lg"}),m:"5px",_hover:{backgroundColor:"#E4C703"}})}),Object(S.jsx)(T.a,{href:"https://t.me/banano_official",isExternal:!0,children:Object(S.jsx)(w.a,{backgroundColor:"white","aria-label":"telegram",isRound:!0,icon:Object(S.jsx)(G.a,{color:"#32A8DD",icon:M.c,size:"2x"}),m:"5px",_hover:{backgroundColor:"#E4C703"}})}),Object(S.jsx)(T.a,{href:"https://twitter.com/bananocoin",isExternal:!0,children:Object(S.jsx)(w.a,{backgroundColor:"white","aria-label":"twitter",isRound:!0,icon:Object(S.jsx)(G.a,{color:"#1DA1F2",icon:M.d,size:"2x"}),m:"5px",_hover:{backgroundColor:"#E4C703"}})}),Object(S.jsx)(T.a,{href:"https://banano.cc/",isExternal:!0,children:Object(S.jsx)(w.a,{backgroundColor:"white","aria-label":"banano",isRound:!0,icon:Object(S.jsx)(U,{style:{width:"35px",height:"35px"}}),m:"5px",_hover:{backgroundColor:"#E4C703"}})})]})}),J=function(){var e=Object(o.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(o.useState)(!1),a=Object(u.a)(i,2),c=a[0],s=a[1],l=Object(o.useState)(""),d=Object(u.a)(l,2),j=d[0],p=d[1],b=Object(o.useState)("Please enter a valid Banano address"),m=Object(u.a)(b,2),C=m[0],g=(m[1],Object(o.useState)(!1)),w=Object(u.a)(g,2),k=w[0],E=w[1],F=Object(o.useState)(0),z=Object(u.a)(F,2),D=z[0],A=z[1],_=Object(o.useState)("0"),B=Object(u.a)(_,2),I=B[0],T=B[1],M=Object(o.useState)("0"),G=Object(u.a)(M,2),L=G[0],N=G[1],Z=Object(f.a)();Object(o.useEffect)((function(){Object(x.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://banbucket.herokuapp.com/api/v1/amount",{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(){var e=Object(x.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,A(n.message);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){A(0)}));case 2:case"end":return e.stop()}}),e)})))()}),[k]),Object(o.useEffect)((function(){Object(x.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://banbucket.herokuapp.com/api/v1/price",{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(){var e=Object(x.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,T(n.price),N(n.change);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){}));case 2:case"end":return e.stop()}}),e)})))()}),[I,L]);var P=Object(o.useRef)(null);return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(O.a,{mt:"20px",color:"#E4C703",fontFamily:"Aleo, serif",size:"3xl",children:"BanBucket"}),Object(S.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[Object(S.jsx)(y.a,{color:"white",fontSize:"xl",m:"5px",children:D}),Object(S.jsx)(U,{style:{width:"20px",height:"20px"}})]}),Object(S.jsx)("div",{style:{minHeight:"30px"},children:!c&&""!==n&&Object(S.jsx)(y.a,{fontSize:"lg",color:"red.500",children:C})}),Object(S.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",minWidth:"300px"},children:[Object(S.jsx)(H.a,{mb:"10px",value:n,onChange:function(e){r(e.target.value),s(e.target.value.startsWith("ban_")&&64===e.target.value.length)},size:"md",color:"white",borderColor:"white",focusBorderColor:"#E4C703",_hover:{borderColor:"#E4C703"},isInvalid:!c&&""!==n,placeholder:"Enter your Banano address"}),Object(S.jsx)(q.a,{sitekey:"abef2c9f-abd9-4ebe-a315-384c3228cd11",onVerify:function(e,t){p(e)},theme:"dark",ref:P}),Object(S.jsx)(v.a,{mt:"10px",color:"black",width:"300px",backgroundColor:"#E4C703",_hover:{backgroundColor:"#FCB600"},size:"lg",disabled:!c||64!==n.length||0===j.length,isLoading:k,onClick:Object(x.a)(h.a.mark((function e(){var t,r,i,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E(!0),P.current.resetCaptcha(),t=!1){e.next=16;break}return r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({addr:n,captcha:j})},t=!1,e.next=8,fetch("https://banbucket.herokuapp.com/api/v1/claim",r).catch((function(e){E(!1),Z.isActive("server-connection")||Z({id:"server-connection",title:"Connection Error",description:"Failed to connect to server",status:"error",duration:3e3,isClosable:!0,position:"top"}),t=!0}));case 8:if(i=e.sent,t){e.next=16;break}return e.next=12,i.json();case 12:a=e.sent,400===i.status||500===i.status?Z({title:"Bad Request",description:a.message,status:"error",duration:2500,isClosable:!0,position:"top"}):Z({title:"Successful Claim",description:a.message,status:"success",duration:2500,isClosable:!0,position:"top"}),E(!1),p("");case 16:case"end":return e.stop()}}),e)}))),children:"Claim Free Banano"}),Object(S.jsx)(y.a,{color:"white",mt:"20px",mb:"5px",fontSize:"xl",children:"Learn More"}),Object(S.jsx)(X,{}),Object(S.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(S.jsx)("div",{style:{display:"flex",flexDirection:"row",marginTop:"20px"},children:Object(S.jsxs)(R.a,{children:[Object(S.jsx)(R.d,{children:"BAN (CoinGecko)"}),Object(S.jsxs)(R.e,{children:["$ ",I," USD"]}),Object(S.jsxs)(R.c,{children:[Object(S.jsx)(R.b,{type:"-"===L.charAt(0)?"decrease":"increase"}),L,"%"]})]})}),Object(S.jsx)(W.a,{mt:"10px",color:"white",backgroundColor:"red.600",children:"abusers will be blacklisted"})]})]})]})},V=function(){return Object(S.jsx)("div",{className:"App",style:{minWidth:"100vw",minHeight:"95vh",backgroundColor:"#212529",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:Object(S.jsx)(J,{})})},$=n(175),K=function(e){var t=e.children,n=Object(m.a)("(max-width: 1024px)"),r=Object(u.a)(n,1)[0];return Object(S.jsx)(E.a,{style:{maxHeight:"80vh",maxWidth:r?"80vw":"30vw",minHeight:"80vh",minWidth:r?"80vw":"30vw",padding:"20px",backgroundColor:"#212529",borderRadius:"15px",marginTop:"10px"},children:t})},Q=function(){var e=Object(o.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(o.useEffect)((function(){fetch("/CHANGELOG.MD").then((function(e){return e.text()})).then((function(e){r(e)}))}),[]),Object(S.jsxs)("div",{className:"App",style:{minWidth:"100vw",minHeight:"95vh",maxHeight:"95vh",maxWidth:"100vw",backgroundColor:"#212529",display:"flex",flexDirection:"column",alignItems:"center",color:"white"},children:[Object(S.jsx)(O.a,{mt:"20px",color:"#E4C703",fontFamily:"Aleo, serif",size:"3xl",children:"Update Logs"}),Object(S.jsx)($.a,{options:{overrides:{h1:{component:O.a},h2:{component:W.a}},wrapper:K},children:n})]})},Y=n(13),ee=n(69),te=function(e){var t=e.route,n=e.text,r=Object(Y.f)();return Object(S.jsx)(T.a,{to:t,as:ee.b,_hover:{textDecoration:"none",color:"#E4C703"},_link:{textDecoration:"none"},_active:{textDecoration:"none"},_visited:{textDecoration:"none"},_focus:{textDecoration:"none"},color:r.pathname!==t?"white":"blue.200",children:Object(S.jsx)(y.a,{children:n})})},ne=function(){return Object(S.jsx)("div",{style:{marginLeft:"5px",marginRight:"5px"},children:"\xb7"})},re=function(){return Object(S.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",minWidth:"100vw",maxHeight:"5vh",minHeight:"5vh",backgroundColor:"#212529"},children:[Object(S.jsx)(te,{route:"/",text:"Faucet"}),Object(S.jsx)(ne,{}),Object(S.jsx)(te,{route:"/donate",text:"Donate"}),Object(S.jsx)(ne,{}),Object(S.jsx)(te,{route:"/updates",text:"Updates"}),Object(S.jsx)(ne,{}),Object(S.jsx)(T.a,{href:"https://www.yellowspyglass.com/account/ban_1j3rqseffoin7x5z5y1ehaqe1n7todza41kdf4oyga8phps3ea31u39ruchu",_hover:{textDecoration:"none",color:"#E4C703"},_link:{textDecoration:"none"},_focus:{textDecoration:"none"},isExternal:!0,color:"white",children:Object(S.jsx)(y.a,{children:"SpyGlass"})})]})};n(275);var ie=function(){return Object(S.jsx)("div",{style:{overflowX:"hidden"},children:Object(S.jsxs)(ee.a,{basename:"",children:[Object(S.jsxs)(Y.c,{children:[Object(S.jsx)(Y.a,{path:"/donate",children:Object(S.jsx)(B,{})}),Object(S.jsx)(Y.a,{path:"/updates",children:Object(S.jsx)(Q,{})}),Object(S.jsx)(Y.a,{path:"/",children:Object(S.jsx)(V,{})})]}),Object(S.jsx)(re,{})]})})},ae=n(304);l.a.render(Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(ae.a,{children:Object(S.jsx)(ie,{})})}),document.getElementById("root"))}},[[276,1,2]]]);
//# sourceMappingURL=main.adf03d18.chunk.js.map