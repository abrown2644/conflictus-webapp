(this["webpackJsonpconflictus-webapp"]=this["webpackJsonpconflictus-webapp"]||[]).push([[0],{51:function(t,e,n){},54:function(t,e,n){},86:function(t,e,n){},87:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n.n(a),c=n(11),i=n.n(c),o=(n(51),n.p+"static/media/logo.c40c83bd.svg"),l=n(17),r=n(38),u=(n(52),n(13)),b=n.n(u),d=n(106),j=n(112),h=n(113),p=n(107),x=n(3);var m=function(t){var e=t.theme,n=t.battleItems,a=b.a.latLng(-90,-200),s=b.a.latLng(90,200),c=b.a.latLngBounds(a,s);return Object(x.jsxs)(d.a,{center:[28.987776073100964,-40.70433830991955],zoom:3,minZoom:3,scrollWheelZoom:!0,zoomControl:!1,maxBounds:c,maxBoundsViscosity:1,style:{height:"100vh"},children:["light"==e?Object(x.jsx)(j.a,{attribution:"Tiles \xa9 Esri \u2014 Esri, DeLorme, NAVTEQ",url:"https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"}):Object(x.jsx)(j.a,{attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors \xa9 <a href="https://carto.com/attributions">CARTO</a>',url:"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"}),n&&n.map((function(t,e){return Object(x.jsx)(h.a,{pathOptions:{color:"red"},center:[t.location.latitude,t.location.longitude],children:Object(x.jsxs)(p.a,{children:[Object(x.jsx)("h4",{children:t.title}),Object(x.jsx)("h5",{children:t.date})]})},e)}))]})},f=n(108),g=n(111),O=n(110);n(54);var v=function(t){var e=t.theme,n=(new Date).getFullYear(),s=Object(a.useState)({value:1,label:"Seven Years' War"}),c=Object(l.a)(s,2),i=c[0],o=c[1],u=Object(a.useState)({loading:!0,wars:null,error:null}),b=Object(l.a)(u,2),d=b[0],j=b[1],h=Object(a.useState)({loading:!0,battles:null}),p=Object(l.a)(h,2),v=p[0],y=p[1],w=Object(a.useState)([n-100,n]),C=Object(l.a)(w,2),I=C[0],S=C[1];function L(t){var e="https://localhost:44346/api/battles/war=".concat(t.value);fetch(e).then((function(t){return t.json()})).then((function(t){y({battles:t.data})})),o(t.value),document.title=t.label}return Object(a.useEffect)((function(){fetch("https://localhost:44346/api/wars").then((function(t){return t.json()})).then((function(t){j({loading:!1,wars:t.data})}),(function(t){j({loading:!1,error:t})}))}),[]),Object(a.useEffect)((function(){L(i)}),[]),Object(x.jsxs)("div",{id:"map",children:[Object(x.jsxs)(f.a,{container:!0,style:{position:"absolute",zIndex:"99999",alignItems:"center",marginTop:"8px"},children:[Object(x.jsx)(f.a,{item:!0,xs:2,md:1}),Object(x.jsx)(f.a,{item:!0,xs:10,md:11,style:{display:"flex",justifyContent:"end"},children:Object(x.jsx)(f.a,{item:!0,xs:12,md:3,style:{marginRight:"10px",border:"1px solid #bb0101",borderRadius:"5px"},children:d.wars?Object(x.jsx)(r.a,{onChange:function(t){return L(t)},placeholder:"select a war",options:d.wars.map((function(t,e){return{value:t.id,label:t.name}})),className:"selectMenu",style:{marginRight:"10px"}}):Object(x.jsx)(r.a,{defaultValue:1,isLoading:!0,isDisabled:!0,placeholder:"loading..",options:"none",style:{marginRight:"10px"}})})})]}),Object(x.jsx)(f.a,{container:!0,style:{display:"flex",justifyContent:"center",position:"absolute",zIndex:"999",alignItems:"center",bottom:"20px"},children:Object(x.jsxs)(f.a,{item:!0,xs:9,children:[Object(x.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly"},children:[Object(x.jsxs)("b",{children:["from: ",I[0]]}),Object(x.jsxs)("b",{children:["to: ",I[1]]}),Object(x.jsx)(O.a,{variant:"contained",onClick:function(){return function(t){console.log("fetching by date range!"),console.log(t);var e="https://localhost:44346/api/battles/date=".concat(t[0],",").concat(t[1]);fetch(e).then((function(t){return t.json()})).then((function(t){y({battles:t.data})}),[]),document.title="".concat(t[0]," - ").concat(t[1])}(I)},children:"FIND"})]}),Object(x.jsx)(g.a,{value:I,onChange:function(t,e){S(e)},valueLabelDisplay:"auto","aria-labelledby":"range-slider",min:-1273,max:(new Date).getFullYear()})]})}),v.battles?Object(x.jsx)(m,{theme:e,battleItems:v.battles}):Object(x.jsx)(m,{theme:e})]})};n(69),n(86);var y=function(){return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("img",{src:o,style:{position:"absolute",zIndex:"99999999",left:"0",top:"0",height:"70px"}}),Object(x.jsx)(v,{theme:"light"})]})},w=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,115)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),a(t),s(t),c(t),i(t)}))};i.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(y,{})}),document.getElementById("root")),w()}},[[87,1,2]]]);
//# sourceMappingURL=main.c378196a.chunk.js.map