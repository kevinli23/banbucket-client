(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{327:function(e,t,n){},524:function(e,t,n){},525:function(e,t,n){"use strict";n.r(t);var a,r,c,i=n(0),o=n.n(i),s=n(50),l=n.n(s),d=(n(327),n(14)),x=n.n(d),h=n(26),p=n(10),u=n(29),j=n(261),f=n(265),b=n(262),m=n(266),O=n(267),y=n(144),g=(n(228),n(2)),v=function(e){return 0===e?"#FFD700":1===e?"#d8d8d8":2===e?"#b08d57":"white"},w=function(e){var t=e.donator,n=e.ind;return Object(g.jsxs)("div",{style:{backgroundColor:"#1e1f26",minWidth:0===n?"220px":"170px",maxWidth:"100px",marginLeft:"15px",marginRight:"15px",minHeight:0===n?"200px":"170px",maxHeight:0===n?"200px":"170px",marginBottom:0===n?"20px":1===n?"-10px":"-30px",borderRadius:"15px",display:"inline",wordWrap:"break-word",padding:"10px",boxShadow:"0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)"},children:[Object(g.jsx)(b.e,{color:v(n),children:t.addr}),Object(g.jsx)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:"auto"},children:Object(g.jsx)(b.e,{color:v(n),fontSize:0===n?"6xl":"4xl",children:t.amount})})]})},C=function(e){var t=e.donators;return Object(g.jsxs)("div",{style:{display:"flex",flexDirection:"column",marginTop:"10px",marginBottom:"10px"},children:[Object(g.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-end"},children:[Object(g.jsx)(w,{donator:t[1],ind:1}),Object(g.jsx)(w,{donator:t[0],ind:0}),Object(g.jsx)(w,{donator:t[2],ind:2})]}),Object(g.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-end"},children:[Object(g.jsx)("div",{style:{backgroundColor:"#A6B9C7",minWidth:"200px",minHeight:"90px",maxHeight:"90px",color:"black",display:"flex",justifyContent:"center",alignItems:"center",borderRight:"10px solid #899CAA",borderTopLeftRadius:"10px"},children:Object(g.jsx)(b.e,{color:"white",fontFamily:"Open Sans, sans-serif",fontSize:"6xl",children:"2"})}),Object(g.jsx)("div",{style:{backgroundColor:"#A6B9C7",minWidth:"250px",minHeight:"125px",maxHeight:"125px",display:"flex",justifyContent:"center",alignItems:"center",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"},children:Object(g.jsx)(b.e,{color:"white",fontFamily:"Open Sans, sans-serif",fontSize:"6xl",children:"1"})}),Object(g.jsx)("div",{style:{backgroundColor:"#A6B9C7",minWidth:"200px",minHeight:"75px",maxHeight:"75px",display:"flex",justifyContent:"center",alignItems:"center",borderLeft:"10px solid #899CAA",borderTopRightRadius:"10px"},children:Object(g.jsx)(b.e,{color:"white",fontFamily:"Open Sans, sans-serif",fontSize:"6xl",children:"3"})})]})]})},k=function(e){var t,n=e.address,a=e.amount,r=e.ind;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(b.a,{mt:"10px"}),Object(g.jsxs)(b.a,{maxWidth:"80vw",minWidth:"80vw",backgroundColor:(t=r,0===t?"#FFD700":1===t?"#D8D8D8":2===t?"#b08d57":"#ADD8E6"),borderRadius:"15px",padding:"15px",m:"10px",children:[Object(g.jsx)(b.e,{color:"black",children:n}),Object(g.jsx)(b.e,{color:"black",textAlign:"center",fontFamily:"SF Mono",fontSize:"2xl",mt:"5px",children:a})]})]})},S=function(e){return 0===e?"#FFD700":1===e?"#d8d8d8":2===e?"#b08d57":"white"},E=function(){var e=Object(i.useState)([{addr:"ban_1j3rqseffoin7x5z5y1ehaqe1n7todza41kdf4oyga8phps3ea31u39ruchu",amount:2e3},{addr:"ban_1j3rqseffoin7x5z5y1ehaqe1n7todza41kdf4oyga8phps3ea31u39ruchu",amount:1e3},{addr:"ban_1j3rqseffoin7x5z5y1ehaqe1n7todza41kdf4oyga8phps3ea31u39ruchu",amount:20},{addr:"ban_1j3rqseffoin7x5z5y1ehaqe1n7todza41kdf4oyga8phps3ea31u39ruchu",amount:1},{addr:"ban_1j3rqseffoin7x5z5y1ehaqe1n7todza41kdf4oyga8phps3ea31u39ruchu",amount:1},{addr:"ban_1j3rqseffoin7x5z5y1ehaqe1n7todza41kdf4oyga8phps3ea31u39ruchu",amount:1},{addr:"ban_1j3rqseffoin7x5z5y1ehaqe1n7todza41kdf4oyga8phps3ea31u39ruchu",amount:1}]),t=Object(p.a)(e,2),n=t[0],a=t[1],r="https://banbucket.herokuapp.com",c=Object(u.c)("ban_1j3rqseffoin7x5z5y1ehaqe1n7todza41kdf4oyga8phps3ea31u39ruchu"),o=c.hasCopied,s=c.onCopy,l=Object(j.a)(),d=Object(f.a)("(max-width: 1024px)"),v=Object(p.a)(d,1)[0];return Object(i.useEffect)((function(){!l.isActive("copied")&&o&&l({id:"copied",title:"Copy",description:"Faucet Address copied to clipboard",status:"info",duration:3e3,isClosable:!0,position:"top"})}),[o,l]),Object(i.useEffect)((function(){Object(h.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(r,"/api/v1/donators"),{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(){var e=Object(h.a)(x.a.mark((function e(t){var n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,(r=n.donators).sort((function(e,t){return e.amount>t.amount?-1:e.amount<t.amount?1:0})),a(r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){}));case 2:case"end":return e.stop()}}),e)})))()}),[r]),Object(g.jsxs)("div",{className:"App",style:{minWidth:"100vw",minHeight:"95vh",maxWidth:"100vw",backgroundColor:"#212529",display:"flex",flexDirection:"column",alignItems:"center",color:"white",overflowX:"hidden"},children:[Object(g.jsx)(b.c,{m:"20px",fontFamily:"SF Mono",fontSize:v?"3xl":"5xl",color:"white",children:"Hall of Donators"}),Object(g.jsx)(m.a,{mr:"-8px",colorScheme:"blue",variant:"solid",onClick:s,fontSize:"lg",m:"10px",mt:"1px",children:"Donate"}),!v&&Object(g.jsx)(C,{donators:n}),v?Object(g.jsx)(b.f,{maxHeight:"75vh",minHeight:"75vh",overflowY:"scroll",mb:"5px",children:n.map((function(e,t){return Object(g.jsx)(k,{address:e.addr,amount:e.amount,ind:t})}))}):Object(g.jsx)(y.a,{style:{maxWidth:v?"100vw":"40vw",minWidth:v?"100vw":"40vw",minHeight:"38vh",maxHeight:"38vh",overflowX:"hidden",display:"flex",alignItems:"center"},children:Object(g.jsxs)(O.a,{m:"15px",size:v?"sm":"md",variant:"simple",colorScheme:"linkedin",children:[Object(g.jsx)(O.e,{children:Object(g.jsxs)(O.f,{children:[Object(g.jsx)(O.d,{children:"Address"}),Object(g.jsx)(O.d,{isNumeric:!0,children:"Amount"})]})}),Object(g.jsx)(O.b,{children:n.map((function(e,t){return Object(g.jsxs)(O.f,{children:[Object(g.jsx)(O.c,{color:S(t),children:e.addr}),Object(g.jsx)(O.c,{isNumeric:!0,children:Math.round(100*e.amount)/100})]})}))})]})})]})},F=n(268),D=n(264),_=n(272),z=n.n(_),W=["title","titleId"];function T(){return T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},T.apply(this,arguments)}function M(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function A(e,t){var n=e.title,o=e.titleId,s=M(e,W);return i.createElement("svg",T({width:"300px",height:"300px",viewBox:"0 0 300 300",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":o},s),void 0===n?i.createElement("title",{id:o},"banano-icon"):n?i.createElement("title",{id:o},n):null,a||(a=i.createElement("desc",null,"Created with Sketch.")),r||(r=i.createElement("defs",null,i.createElement("radialGradient",{cx:"15.8840638%",cy:"10.8985871%",fx:"15.8840638%",fy:"10.8985871%",r:"97.1594073%",id:"radialGradient-1"},i.createElement("stop",{stopColor:"#FFFFFF",stopOpacity:.15,offset:"0%"}),i.createElement("stop",{stopColor:"#FFFFFF",stopOpacity:0,offset:"100%"})),i.createElement("path",{d:"M127.311915,92.3143368 C71.5350042,99.3357531 45.8513339,50.2282589 50.406742,45.4368897 C53.4146482,42.2736165 58.0915878,42.0837393 62.1446654,41.9746609 C80.7936837,41.4696684 107.190339,63.2429265 112.543805,63.1358681 C122.912472,62.9237712 138.511048,46.4448548 148.731853,32.8605556 C153.009764,27.1783796 179.734555,18.6157261 176.77121,33.5453255 C167.162114,81.9640098 134.419486,91.4194901 127.311915,92.3143368 Z M49.6880853,0.685663156 C105.464996,-6.33575306 131.148666,42.7717411 126.591233,47.5631103 C123.583327,50.7263835 118.908412,50.9162607 114.855335,51.0253391 C96.2063165,51.5303316 69.8096611,29.7550535 64.4561957,29.8641319 C54.0875279,30.0762288 38.4889518,46.5551452 28.2661219,60.1394444 C23.9902364,65.8216204 -2.73455431,74.3842739 0.228790299,59.4566945 C9.83788587,11.0359902 42.5805144,1.58050993 49.6880853,0.685663156 Z",id:"path-2"}),i.createElement("filter",{x:"-12.7%",y:"-17.7%",width:"125.4%",height:"148.4%",filterUnits:"objectBoundingBox",id:"filter-3"},i.createElement("feOffset",{dx:0,dy:6,in:"SourceAlpha",result:"shadowOffsetOuter1"}),i.createElement("feGaussianBlur",{stdDeviation:6.5,in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}),i.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.248131793 0",type:"matrix",in:"shadowBlurOuter1"})))),c||(c=i.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},i.createElement("g",{id:"icon",transform:"translate(-350.000000, -350.000000)"},i.createElement("g",{id:"banano-icon",transform:"translate(150.000000, 150.000000)"},i.createElement("g",{transform:"translate(200.000000, 200.000000)"},i.createElement("g",{id:"base"},i.createElement("rect",{id:"path-1",fill:"#FBDD11",x:0,y:0,width:300,height:300,rx:150}),i.createElement("path",{d:"M300,150 C300,232.842713 232.842713,300 150,300 C67.1572875,300 1.01453062e-14,232.842713 0,150 C-6.13029393e-17,149.499424 0.00245202796,148.99942 0.00734472809,148.5 C0.812166334,230.651854 67.6578633,297 150,297 C232.342137,297 299.187834,230.651854 299.992655,148.499998 C299.997548,148.99942 300,149.499424 300,150 Z",id:"Combined-Shape",fill:"#E8C900"}),i.createElement("path",{d:"M299.992655,151.500002 C299.187834,69.3481459 232.342137,3 150,3 C67.6578633,3 0.812166334,69.3481459 0.00734470617,151.500002 C0.00245202796,151.00058 6.13029393e-17,150.500576 0,150 C-1.01453062e-14,67.1572875 67.1572875,1.52179594e-14 150,0 C232.842713,-1.52179594e-14 300,67.1572875 300,150 C300,150.500576 299.997548,151.00058 299.992655,151.5 L299.992655,151.500002 Z",id:"Combined-Shape",fill:"#FFEF7F"}),i.createElement("rect",{id:"innerring",fill:"#2A2A2E",x:15,y:15,width:270,height:270,rx:135})),i.createElement("rect",{id:"finish",fill:"url(#radialGradient-1)",x:0,y:0,width:300,height:300,rx:150}),i.createElement("g",{id:"logo",transform:"translate(61.800000, 103.800000)"},i.createElement("g",null,i.createElement("use",{fill:"black",fillOpacity:1,filter:"url(#filter-3)",xlinkHref:"#path-2"}),i.createElement("use",{fill:"#FBDD11",fillRule:"evenodd",xlinkHref:"#path-2"})),i.createElement("path",{d:"M126.983272,46.8179364 C125.005537,34.857328 99.2059868,-3.14784444 49.6880853,3.08566316 C42.5805144,3.98050993 9.83788587,13.4359902 0.228790299,61.8566945 C0.167353326,62.1661777 0.118677162,62.4655641 0.0822971972,62.7550887 C-0.0600755246,61.8129063 -0.0217470759,60.7187538 0.228790299,59.4566945 C9.83788587,11.0359902 42.5805144,1.58050993 49.6880853,0.685663156 C103.316569,-6.06530068 129.12544,39.0719514 126.983272,46.8179364 Z M50.0151677,48.5811968 C49.7651982,47.0698368 49.8956543,45.9744507 50.406742,45.4368897 C53.4146482,42.2736165 58.0915878,42.0837393 62.1446654,41.9746609 C80.7936837,41.4696684 107.190339,63.2429265 112.543805,63.1358681 C122.912472,62.9237712 138.511048,46.4448548 148.731853,32.8605556 C152.921054,27.2962093 178.635838,18.9696103 176.917726,32.646623 C175.376324,22.4429233 152.648107,30.0587543 148.731853,35.2605556 C138.511048,48.8448548 122.912472,65.3237712 112.543805,65.5358681 C107.190339,65.6429265 80.7936837,43.8696684 62.1446654,44.3746609 C58.0915878,44.4837393 53.4146482,44.6736165 50.406742,47.8368897 C50.2314392,48.0212728 50.1009172,48.2712832 50.0151677,48.5811968 Z",id:"highlight",fill:"#FFEF7F"}),i.createElement("path",{d:"M126.983272,44.4179364 C127.233256,45.9297444 127.102645,47.0254465 126.591233,47.5631103 C123.583327,50.7263835 118.908412,50.9162607 114.855335,51.0253391 C96.2063165,51.5303316 69.8096611,29.7550535 64.4561957,29.8641319 C54.0875279,30.0762288 38.4889518,46.5551452 28.2661219,60.1394444 C24.0788853,65.7038158 -1.63607031,74.0304648 0.0822971972,60.3550887 C1.62390252,70.5569961 24.3517431,62.9412182 28.2661219,57.7394444 C38.4889518,44.1551452 54.0875279,27.6762288 64.4561957,27.4641319 C69.8096611,27.3550535 96.2063165,49.1303316 114.855335,48.6253391 C118.908412,48.5162607 123.583327,48.3263835 126.591233,45.1631103 C126.766777,44.9785553 126.897454,44.7282506 126.983272,44.4179364 Z M50.0151677,46.1811968 C51.9932171,58.1408357 77.7928172,96.147995 127.311915,89.9143368 C134.419486,89.0194901 167.162114,79.5640098 176.77121,31.1453255 C176.83266,30.8357344 176.881344,30.5362453 176.917726,30.246623 C177.060071,31.1889119 177.021733,32.2831678 176.77121,33.5453255 C167.162114,81.9640098 134.419486,91.4194901 127.311915,92.3143368 C73.6814302,99.0655525 47.8726341,53.9246806 50.0151677,46.1811968 Z",id:"shadow",fill:"#E8C900"}))))))))}var I=i.forwardRef(A),H=(n.p,n(263)),B=function(){var e=Object(i.useState)("0"),t=Object(p.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)("0"),c=Object(p.a)(r,2),o=c[0],s=c[1],l="https://banbucket.herokuapp.com";return Object(i.useEffect)((function(){Object(h.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(l,"/api/v1/price"),{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(){var e=Object(h.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,a(n.price),s(n.change);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){}));case 2:case"end":return e.stop()}}),e)})))()}),[n,o,l]),Object(g.jsxs)(H.a,{color:"white",backgroundColor:"#1e1f26",boxShadow:"0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)",padding:"10px",borderRadius:"15px",children:[Object(g.jsxs)(H.e,{display:"flex",flexDirection:"row",children:[Object(g.jsx)(b.e,{color:"#E4C703",mr:"5px",children:"BAN"}),"(from",Object(g.jsx)(b.d,{href:"https://www.coingecko.com/en/coins/banano",ml:"5px",textDecoration:"none",_hover:{textDecoration:"none",color:"rgb(249, 233, 136)"},_focus:{textDecoration:"none"},isExternal:!0,color:"rgb(140, 198, 63)",children:"CoinGecko"}),")"]}),Object(g.jsxs)(H.f,{color:"#E4C703",children:["$",n," USD"]}),Object(g.jsxs)(H.d,{color:"-"===o.charAt(0)?"red.400":"green.400",children:[Object(g.jsx)(H.b,{type:"-"===o.charAt(0)?"decrease":"increase"}),o,"% (24h)"]})]})},q=n(274),R=n(273),N=function(e){var t=e.amount,n=Object(i.useState)(0),a=Object(p.a)(n,2),r=a[0],c=a[1];return Object(i.useEffect)((function(){Object(h.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://banbucket.herokuapp.com","/api/v1/payout"),{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(){var e=Object(h.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,c(n.message);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){c(0)}));case 2:case"end":return e.stop()}}),e)})))()}),[]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(b.c,{color:"#E4C703",fontFamily:"Aleo, serif",size:"4xl",children:"BanBucket"}),Object(g.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",minWidth:"300px",maxWidth:"300px",marginBottom:"10px"},children:[Object(g.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",minWidth:"110px",maxWidth:"110px",paddingRight:"15px"},children:[Object(g.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[Object(g.jsx)(b.e,{color:"white",fontSize:"xl",m:"5px",children:t}),Object(g.jsx)(I,{style:{width:"20px",height:"20px"}})]}),Object(g.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",marginLeft:"12px"},children:[Object(g.jsx)(R.a,{color:"white",icon:q.a,size:"1x"}),Object(g.jsx)(b.e,{color:"white",fontSize:"xl",m:"5px",children:r}),Object(g.jsx)(I,{style:{width:"20px",height:"20px"}})]})]}),Object(g.jsx)(B,{})]}),Object(g.jsx)(b.d,{href:"https://nanswap.com/swap/XNO/BAN?ref=banbucket",target:"_blank",_hover:{textDecoration:"none"},children:Object(g.jsx)(m.a,{colorScheme:"blue",minWidth:"300px",minHeight:"50px",mb:"5px",children:"Feeless XNO/BAN Swap with NanSwap"})})]})};var G=function(e,t){var n=Object(i.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(a){return console.log(a),t}})),a=Object(p.a)(n,2),r=a[0],c=a[1];return[r,function(t){try{var n=t instanceof Function?t(r):t;c(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(a){console.log(a)}}]},L=function(){var e=G("ban_addr",""),t=Object(p.a)(e,2),n=t[0],a=t[1],r=G("last_claim",-1),c=Object(p.a)(r,2),o=c[0],s=c[1],l=Object(i.useState)(""),d=Object(p.a)(l,2),u=d[0],f=d[1],b=Object(i.useState)(Date.now()),O=Object(p.a)(b,2),y=O[0],v=O[1],w=Object(i.useState)(!1),C=Object(p.a)(w,2),k=C[0],S=C[1],E=Object(i.useState)(!1),_=Object(p.a)(E,2),W=_[0],T=_[1],M=Object(i.useState)(0),A=Object(p.a)(M,2),I=A[0],H=A[1],B=Object(j.a)(),q="https://banbucket.herokuapp.com";Object(i.useEffect)((function(){S(n.startsWith("ban_")&&64===n.length)}),[n]),Object(i.useEffect)((function(){Object(h.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(q,"/api/v1/amount"),{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(){var e=Object(h.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,H(n.message);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){H(0)}));case 2:case"end":return e.stop()}}),e)})))()}),[W,q]),Object(i.useEffect)((function(){setInterval((function(){v(Date.now())}),1e3)}),[]),Object(i.useEffect)((function(){if(o>0){var e=new Date(o);e.setHours(e.getHours()+15);var t=e.getTime()-y;if(t<=0)f("Your next claim is available");else{var n=Math.floor(t/36e5),a=60*(t/36e5-n),r=Math.floor(a),c=Math.floor(60*(a-r));f("Your next claim is in ".concat(n,"h ").concat(r,"m ").concat(c,"s"))}}}),[y,o]);var R=Object(i.useRef)(null);return Object(g.jsxs)("div",{style:{marginTop:"auto",display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(g.jsx)(N,{amount:I}),Object(g.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",minWidth:"300px",maxWidth:"300px",marginTop:"10px"},children:[Object(g.jsx)(F.a,{id:"faddr",mb:"10px",value:n,onChange:function(e){a(e.target.value),S(e.target.value.startsWith("ban_")&&64===e.target.value.length)},size:"md",color:"white",borderColor:0===n.length?"white":k?"green":"red",focusBorderColor:"#E4C703",_hover:{borderColor:"#E4C703"},isInvalid:!k&&""!==n,placeholder:"Enter your Banano address"}),Object(g.jsx)(z.a,{sitekey:"abef2c9f-abd9-4ebe-a315-384c3228cd11",onVerify:function(){var e=Object(h.a)(x.a.mark((function e(t){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(T(!0),!1){e.next=7;break}return a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({addr:n,captcha:t})},!1,e.next=7,fetch("".concat(q,"/api/v1/claim"),a).then(function(){var e=Object(h.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,400===t.status||500===t.status?B({title:"Bad Request",description:n.message,status:"error",duration:2500,isClosable:!0,position:"top"}):(B({title:"Successful Claim",description:n.message,status:"success",duration:2500,isClosable:!0,position:"top"}),s(Date.now())),T(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){T(!1),B.isActive("server-connection")||B({id:"server-connection",title:"Connection Error",description:"Failed to connect to server",status:"error",duration:3e3,isClosable:!0,position:"top"})}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),size:"invisible",theme:"dark",ref:R}),Object(g.jsx)(m.a,{mt:"10px",color:"#231F20",width:"300px",backgroundColor:"#E4C703",_hover:{backgroundColor:"#FCB600"},size:"lg",disabled:!k||64!==n.length,isLoading:W,onClick:function(){R&&R.current&&R.current.execute()},fontFamily:"Roboto, sans-serif",children:"Claim Free Banano"}),""!==u&&Object(g.jsx)(D.a,{mt:"10px",colorScheme:u.endsWith("available")?"green":"red",children:u})]})]})},U=function(){return Object(g.jsxs)(b.a,{minW:"100vw",minH:"95vh",backgroundColor:"#212529",d:"flex",flexDir:"column",alignItems:"center",justifyContent:"center",children:[Object(g.jsx)(L,{}),Object(g.jsx)(b.a,{justifySelf:"flex-end",d:"flex",mt:"auto",mb:"10px",alignItems:"center",flexDir:"column",children:Object(g.jsxs)(b.e,{color:"white",fontSize:"xs",children:["This site is protected by"," ",Object(g.jsx)("span",{style:{color:"#00A7BF"},children:"hCaptcha"})," and its",Object(g.jsxs)(b.e,{children:[Object(g.jsx)("a",{style:{color:"#80DAE0",textDecoration:"underline"},href:"https://hcaptcha.com/privacy",target:"_blank",rel:"noreferrer",children:"Privacy Policy"})," ","and"," ",Object(g.jsx)("a",{style:{color:"#80DAE0",textDecoration:"underline"},href:"https://hcaptcha.com/terms",target:"_blank",rel:"noreferrer",children:"Terms of Service"})," ","apply."]})]})})]})},Z=n(275),P=function(e){var t=e.children,n=Object(f.a)("(max-width: 1024px)"),a=Object(p.a)(n,1)[0];return Object(g.jsx)(y.a,{style:{maxHeight:"80vh",maxWidth:a?"80vw":"30vw",minHeight:"80vh",minWidth:a?"80vw":"30vw",padding:"20px",backgroundColor:"#212529",borderRadius:"15px",marginTop:"10px"},children:t})},X=function(){var e=Object(i.useState)(""),t=Object(p.a)(e,2),n=t[0],a=t[1];return Object(i.useEffect)((function(){fetch("/CHANGELOG.MD").then((function(e){return e.text()})).then((function(e){a(e)}))}),[]),Object(g.jsxs)("div",{className:"App",style:{minWidth:"100vw",minHeight:"95vh",maxHeight:"95vh",maxWidth:"100vw",backgroundColor:"#212529",display:"flex",flexDirection:"column",alignItems:"center",color:"white"},children:[Object(g.jsx)(b.c,{mt:"20px",color:"#E4C703",fontFamily:"SF Mono",size:"3xl",children:"Update Logs"}),Object(g.jsx)(Z.a,{options:{overrides:{h1:{component:b.c,props:{mb:"10px",fontFamily:"SF Mono"}},h2:{component:D.a}},wrapper:P},children:n})]})},Y=n(530),J=n(293),K=n(534),V=n(289),$=n(290),Q=n(118),ee={total_claims:5173,today_claims:500,yesterday_claims:123,unique_claims:1731,daily_claims:{"2021-10-20":8,"2021-10-21":52,"2021-10-22":87,"2021-10-23":175,"2021-10-24":252,"2021-10-25":179,"2021-10-26":175,"2021-10-27":161,"2021-10-28":165,"2021-10-29":266,"2021-10-30":295,"2021-10-31":238,"2021-11-01":217,"2021-11-02":296,"2021-11-03":343,"2021-11-04":294,"2021-11-05":276,"2021-11-06":306,"2021-11-07":154,"2021-11-08":283,"2021-11-09":270,"2021-11-10":247,"2021-11-11":123,"2021-11-12":500},last_updated:1636762176},te=function(e){var t=e.title,n=e.value,a=e.type,r=e.percent;return Object(g.jsxs)(H.a,{color:"white",backgroundColor:"#1e1f26",boxShadow:"0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)",padding:"10px",pb:"5px",borderRadius:"15px",maxW:"150px",fontFamily:"SF Mono",children:[Object(g.jsx)(H.e,{children:t}),Object(g.jsx)(H.f,{color:"#e4c703",children:n}),Object(g.jsxs)(H.d,{fontSize:"12px",children:[Object(g.jsx)(H.b,{type:a}),r,"% (24h)"]})]})},ne=function(){var e=Object(i.useState)(ee),t=Object(p.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)(""),c=Object(p.a)(r,2),o=c[0],s=c[1],l=Object(i.useState)(0),d=Object(p.a)(l,2),u=d[0],j=d[1],O=Object(i.useState)(0),y=Object(p.a)(O,2),v=y[0],w=y[1],C=Object(i.useState)([]),k=Object(p.a)(C,2),S=k[0],E=k[1],F=Object(f.a)("(max-width: 700px)"),D=Object(p.a)(F,1)[0];return Object(i.useEffect)((function(){Object(h.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://banbucket.herokuapp.com/api/v1/stats",{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(){var e=Object(h.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,a(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){a(ee)}));case 2:case"end":return e.stop()}}),e)})))()}),[]),Object(i.useEffect)((function(){if(s(new Intl.DateTimeFormat("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(1e3*n.last_updated)),n.daily_claims){w(Math.round(1e3*n.total_claims/Object.keys(n.daily_claims).length)/1e3),j(Math.round(1e3*(n.total_claims-n.today_claims)/(Object.keys(n.daily_claims).length-1))/1e3);for(var e=[],t=0,a=Object.entries(n.daily_claims);t<a.length;t++){var r=Object(p.a)(a[t],2),c=r[0],i=r[1],o=new Date(c);e.push({name:"".concat(o.getUTCMonth()+1,"/").concat(o.getUTCDate(),"/").concat(o.getUTCFullYear().toString().substring(2)),claims:i})}E(e)}}),[n]),Object(g.jsxs)("div",{className:"App",style:{minWidth:"100vw",minHeight:"95vh",maxHeight:"95vh",maxWidth:"100vw",backgroundColor:"#212529",display:"flex",flexDirection:"column",alignItems:"center",color:"white"},children:[Object(g.jsx)(b.c,{size:"2xl",color:"#e4c703",mt:"4vh",fontFamily:"SF Mono",children:"BanBucket Stats"}),Object(g.jsxs)(b.e,{fontFamily:"SF Mono",children:["Last Updated: ",Object(g.jsx)("span",{style:{color:"#80DAE0"},children:o})]}),Object(g.jsxs)(b.b,{mt:"10px",fontFamily:"SF Mono",children:[Object(g.jsx)(b.d,{href:"https://creeper.banano.cc/explorer/account/ban_1j3rqseffoin7x5z5y1ehaqe1n7todza41kdf4oyga8phps3ea31u39ruchu/history",target:"_blank",_hover:{textDecoration:"none"},children:Object(g.jsx)(m.a,{m:"5px",colorScheme:"yellow",children:"Creeper"})}),Object(g.jsx)(b.d,{href:"https://www.yellowspyglass.com/account/ban_1j3rqseffoin7x5z5y1ehaqe1n7todza41kdf4oyga8phps3ea31u39ruchu",target:"_blank",_hover:{textDecoration:"none"},children:Object(g.jsx)(m.a,{colorScheme:"yellow",children:Object(g.jsx)(b.e,{children:"YellowSpyGlass"})})})]}),Object(g.jsx)(b.a,{m:"20px",d:"flex",flexDir:"column",minW:"100vw",alignItems:"center",children:Object(g.jsxs)(H.c,{minW:"350px",maxW:"350px",children:[Object(g.jsx)(te,{title:"Total Claims",value:n.total_claims,type:"increase",percent:Math.round(1e5*n.today_claims/(n.total_claims-n.today_claims))/1e3}),Object(g.jsx)(te,{title:"Claims Today",value:n.today_claims,type:n.today_claims>=n.yesterday_claims?"increase":"decrease",percent:Math.abs(Math.round(1e5*(n.today_claims-n.yesterday_claims)/n.yesterday_claims)/1e3)})]})}),Object(g.jsx)(b.a,{children:Object(g.jsxs)(H.c,{minW:"350px",maxW:"350px",children:[Object(g.jsx)(te,{title:"Unique Claims",value:n.unique_claims,type:"increase",percent:"-"}),Object(g.jsx)(te,{title:"Daily Average",value:v,type:v>=u?"increase":"decrease",percent:Math.abs(Math.round(1e5*(v-u)/u)/1e3)})]})}),Object(g.jsx)(b.a,{mt:"40px",ml:"-30px",color:"black",d:"flex",flexDir:"column",alignItems:"center",children:Object(g.jsxs)(Y.a,{width:D?360:660,height:D?300:400,data:S,children:[Object(g.jsx)(J.a,{type:"monotone",dataKey:"claims"}),Object(g.jsx)(K.a,{stroke:"white"}),Object(g.jsx)(V.a,{fontFamily:"SF Mono",fontSize:"13px",dataKey:"name",stroke:"white"}),Object(g.jsx)($.a,{fontFamily:"SF Mono",stroke:"white"}),Object(g.jsx)(Q.a,{contentStyle:{color:"black"}})]})})]})},ae=n(194),re=n(136),ce=function(e){var t=Object(f.a)("(max-width: 820px)"),n=Object(p.a)(t,1)[0];return Object(g.jsx)(b.d,{href:"https://creeper.banano.cc/explorer/block/".concat(e.hash),_hover:{textDecoration:"none"},target:"_blank",children:Object(g.jsxs)(b.a,{bg:"#15202B",m:"5px",color:"white",maxWidth:n?"375px":"800px",minWidth:n?"375px":"800px",p:"5px",borderRadius:"20px",id:e.hash,display:"flex",flexDir:"row",alignItems:"center",_hover:{bg:"#192734"},children:[Object(g.jsx)("img",{src:"https://monkey.banano.cc/api/v1/monkey/".concat(e.address),alt:"monkey",height:"80px",width:"80px"}),Object(g.jsxs)(b.a,{display:"flex",flexDir:"column",children:[Object(g.jsx)(b.a,{maxWidth:n?"200px":"490px",minWidth:n?"200px":"490px",children:Object(g.jsx)(b.e,{fontSize:"sm",children:e.address})}),Object(g.jsx)(b.a,{mt:"5px",maxWidth:n?"200px":"490px",minWidth:n?"200px":"490px",children:Object(g.jsx)(b.e,{fontSize:"xs",color:"yellow.200",children:e.hash})}),Object(g.jsx)(b.a,{mt:"5px",maxWidth:n?"200px":"490px",minWidth:n?"200px":"490px",children:Object(g.jsx)(b.e,{fontSize:"xs",children:e.date})})]}),Object(g.jsx)(b.a,{display:"flex",flexDir:"column",marginLeft:"auto",mr:"15px",children:Object(g.jsxs)(b.e,{color:"receive"===e.type?"green.300":"red.300",fontSize:"lg",children:["receive"===e.type?"+":"-",Math.round(1e4*e.amount)/1e4]})})]})})},ie=function(){var e=Object(i.useState)([]),t=Object(p.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)([]),c=Object(p.a)(r,2),o=c[0],s=c[1];return Object(i.useEffect)((function(){Object(h.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://banbucket-infoservice.vercel.app/api/transactions",{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(){var e=Object(h.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,a(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){}));case 2:return e.next=4,fetch("https://banbucket-infoservice.vercel.app/api/donations",{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(){var e=Object(h.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,s(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){}));case 4:case"end":return e.stop()}}),e)})))()}),[]),Object(g.jsx)("div",{className:"App",style:{minWidth:"100vw",minHeight:"95vh",maxHeight:"95vh",maxWidth:"100vw",backgroundColor:"#212529",display:"flex",flexDirection:"column",alignItems:"center",color:"white",overflowY:"scroll"},children:o.length>0?Object(g.jsxs)(g.Fragment,{children:[" ",Object(g.jsx)(b.c,{color:"green.300",fontFamily:"Open Sans, sans-serif",fontSize:"4xl",mt:"10px",children:"Recent Donations"}),o.map((function(e){return Object(g.jsx)(ce,Object(ae.a)({},e))})),Object(g.jsx)(b.c,{color:"red.300",fontFamily:"Open Sans, sans-serif",fontSize:"4xl",mt:"10px",children:"Recent Claims"}),n.map((function(e){return Object(g.jsx)(ce,Object(ae.a)({},e))}))]}):Object(g.jsx)(b.a,{minH:"95vh",display:"flex",alignItems:"center",justifyContent:"center",children:Object(g.jsx)(re.a,{color:"yellow.300",size:"xl"})})})},oe=n(25),se=n(142),le=function(e){var t=e.route,n=e.text,a=Object(oe.f)();return Object(g.jsx)(b.d,{to:t,as:se.b,_hover:{textDecoration:"none",color:"#E4C703"},_active:{textDecoration:"none"},_visited:{textDecoration:"none"},_focus:{textDecoration:"none"},color:a.pathname!==t?"white":"blue.200",children:Object(g.jsx)(b.e,{children:n})})},de=function(){return Object(g.jsx)(b.a,{ml:"5px",mr:"5px",color:"white",children:"\xb7"})},xe=function(){return Object(g.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",minWidth:"100vw",maxHeight:"5vh",minHeight:"5vh",backgroundColor:"#212529",fontFamily:"Roboto, sans-serif",boxShadow:"0px 10px 13px -7px #000000, 0px -5px 12px 2px rgba(18,20,23,0.59)"},children:[Object(g.jsx)(le,{route:"/",text:"Faucet"}),Object(g.jsx)(de,{}),Object(g.jsx)(le,{route:"/transactions",text:"Transactions"}),Object(g.jsx)(de,{}),Object(g.jsx)(le,{route:"/stats",text:"Stats"})]})};n(524);var he=function(){return Object(g.jsx)("div",{style:{overflowX:"hidden"},children:Object(g.jsxs)(se.a,{basename:"",children:[Object(g.jsxs)(oe.c,{children:[Object(g.jsx)(oe.a,{path:"/donate",children:Object(g.jsx)(E,{})}),Object(g.jsx)(oe.a,{path:"/transactions",children:Object(g.jsx)(ie,{})}),Object(g.jsx)(oe.a,{path:"/updates",children:Object(g.jsx)(X,{})}),Object(g.jsx)(oe.a,{path:"/stats",children:Object(g.jsx)(ne,{})}),Object(g.jsx)(oe.a,{path:"/",children:Object(g.jsx)(U,{})})]}),Object(g.jsx)(xe,{})]})})},pe=n(38);l.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(pe.a,{children:Object(g.jsx)(he,{})})}),document.getElementById("root"))}},[[525,1,2]]]);
//# sourceMappingURL=main.d2f08e4b.chunk.js.map