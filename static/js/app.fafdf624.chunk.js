(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{87:function(e,t,n){"use strict";n.d(t,"a",(function(){return T}));var r=n(11),o=n.n(r),c=n(57),i=n.n(c),a=n(31),s=n.n(a),l=n(1),u=n.n(l),j=n(85),f=n(0),b=n(3),d=n(20),O=n(7),h=n(33),p=n(76),x=n(86),g=n(59),y="black",w="#3A3D40",D=n(51),m=n(121),P=n(2);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(){var e=Object(f.useState)(!0),t=s()(e,2),n=t[0],r=t[1],c=Object(f.useState)(""),a=s()(c,2),l=a[0],b=a[1],y=Object(f.useState)({}),v=s()(y,2),T=v[0],z=v[1];Object(f.useEffect)((function(){C()}),[]);var C=function(){var e;return u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(D.a.getItem("@toDos"));case 2:(e=t.sent)&&z(JSON.parse(e));case 4:case"end":return t.stop()}}),null,null,null,Promise)},W=function(e){return u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(D.a.setItem("@toDos",JSON.stringify(e)));case 2:case"end":return t.stop()}}),null,null,null,Promise)},E=function(e){g.a.alert("Delete To Do?","Are you sure?",[{text:"Yes",onPress:function(){var t=S({},T);delete t[e],z(t),W(t)}},{text:"Cancel"}])};return Object(P.jsxs)(O.a,{style:k.container,children:[Object(P.jsx)(j.a,{style:"light"}),Object(P.jsxs)(O.a,{style:k.header,children:[Object(P.jsx)(h.a,{onPress:function(){r(!0)},children:Object(P.jsx)(d.a,{style:S(S({},k.btnText),{},{color:n?"white":w}),children:"Work"})}),Object(P.jsx)(h.a,{onPress:function(){r(!1)},children:Object(P.jsx)(d.a,{style:S(S({},k.btnText),{},{color:n?w:"white"}),children:"Travel"})})]}),Object(P.jsx)(p.a,{style:k.input,placeholder:n?"Add a To Do":"Where you want to go",returnKeyType:"done",value:l,onChangeText:function(e){b(e)},onSubmitEditing:function(){if(""!==l){var e=i()({},T,o()({},Date.now(),{text:l,working:n}));z(e),W(e),b("")}}}),Object(P.jsx)(x.a,{children:Object.keys(T).map((function(e){return T[e].working===n?Object(P.jsxs)(O.a,{style:k.toDo,children:[Object(P.jsx)(h.a,{onPress:function(){return function(e){T[e].done=!T[e].done}(e)},children:Object(P.jsx)(d.a,{style:k.toDoText,children:T[e].text})}),Object(P.jsxs)(O.a,{style:{flexDirection:"row"},children:[Object(P.jsx)(h.a,{onPress:function(){return E(e)},style:{marginRight:10},children:Object(P.jsx)(m.a,{name:"edit",size:24,color:"white"})}),Object(P.jsx)(h.a,{onPress:function(){return E(e)},children:Object(P.jsx)(m.a,{name:"delete",size:24,color:"red"})})]})]},e):null}))})]})}var k=b.a.create({container:{flex:1,backgroundColor:y,paddingHorizontal:20},header:{justifyContent:"space-between",flexDirection:"row",marginTop:100},btnText:{fontSize:38,fontWeight:"600",color:w},input:{backgroundColor:"white",paddingVertical:10,paddingHorizontal:20,borderRadius:30,marginVertical:30,fontSize:15},toDo:{backgroundColor:"#444444",marginBottom:10,padding:20,borderRadius:10,flexDirection:"row",alignItems:"center",justifyContent:"space-between"},toDoText:{color:"white",fontSize:20,fontWeight:"500"},toDoTextDone:{color:"white",fontSize:20,fontWeight:"500",textDecorationLine:"line-through"}})},88:function(e,t,n){e.exports=n(115)}},[[88,1,2]]]);
//# sourceMappingURL=app.fafdf624.chunk.js.map