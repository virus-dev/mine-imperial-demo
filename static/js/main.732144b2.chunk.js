(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{21:function(e,t){},23:function(e,t){},24:function(e,t){},25:function(e,t){},26:function(e,t){},27:function(e,t){},28:function(e,t){},29:function(e,t){},35:function(e,t,a){e.exports=a(46)},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),c=a.n(o),i=a(3),s=a(14),l=(a(21),a(30)),h=a(31),u=a(34),p=a(33),d=a(15),x=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).startLooking=function(e){n.mouseDown=!0,n.startDragOffset.x=e.clientX-n.translatePos.x,n.startDragOffset.y=e.clientY-n.translatePos.y},n.looking=function(e){n.mouseDown&&(n.translatePos.x=e.clientX-n.startDragOffset.x,n.translatePos.y=e.clientY-n.startDragOffset.y,n.draw(n.scale,n.translatePos)),void 0!==n.markers&&(n.mouseOnMarker=!1,n.markers.map((function(t,a){var r=t.markerHitbox,o=t.markerInfo;e.pageX>r.xStart&&e.pageX<r.xFinish&&e.pageY>r.yStart&&e.pageY<r.yFinish&&(n.NeatherMap.current.style="cursor: pointer;",n.mouseOnMarker=!0,n.markerForModal=[r,o],n.setState({modalNeatherMapIsOpen:!0})),n.mouseOnMarker||(n.NeatherMap.current.style="cursor: default;",n.setState({modalNeatherMapIsOpen:!1}))}))),n.pointModal()},n.finishLooking=function(){n.mouseDown=!1},n.wheel=function(e){e.deltaY>0?n.scale*=n.scaleMultiplier:n.scale/=n.scaleMultiplier,n.scale>2&&(n.scale=2),n.scale<.5&&(n.scale=.5),n.pointModal(),n.draw(n.scale,n.translatePos),n.setState({modalNeatherMapIsOpen:!1})},n.pointModal=function(){n.markers=[],n.points.map((function(e){var t=e.point;n.markers.push({markerHitbox:{xStart:n.translatePos.x+t.x*n.scale-n.pointRadius,xFinish:n.translatePos.x+t.x*n.scale+n.pointRadius,yStart:n.translatePos.y+t.y*n.scale-n.pointRadius,yFinish:n.translatePos.y+t.y*n.scale+n.pointRadius},markerInfo:{point:t}})})),n.firstRender&&(n.setState({isRender:!n.state.isRender}),n.firstRender=!1)},n.renderMainTunnels=function(){n.maxCordMainTunnel=2e3,n.ctx.beginPath(),n.ctx.moveTo(0,0),n.ctx.lineTo(0,n.maxCordMainTunnel),n.ctx.strokeStyle="red",n.ctx.lineWidth="10",n.ctx.stroke(),n.ctx.beginPath(),n.ctx.moveTo(0,0),n.ctx.lineTo(0,-n.maxCordMainTunnel),n.ctx.strokeStyle="blue",n.ctx.lineWidth="10",n.ctx.stroke(),n.ctx.beginPath(),n.ctx.moveTo(0,0),n.ctx.lineTo(n.maxCordMainTunnel,0),n.ctx.strokeStyle="yellow",n.ctx.lineWidth="10",n.ctx.stroke(),n.ctx.beginPath(),n.ctx.moveTo(0,0),n.ctx.lineTo(-n.maxCordMainTunnel,0),n.ctx.strokeStyle="green",n.ctx.lineWidth="10",n.ctx.stroke()},n.draw=function(e,t){n.ctx.clearRect(0,0,n.NeatherMap.current.width,n.NeatherMap.current.height),n.ctx.save(),n.ctx.translate(t.x,t.y),n.ctx.scale(e,e),n.renderMainTunnels(),n.points=[],n.props.branchs.map((function(e){if(n.ctx.beginPath(),e.tunnel&&"two"!==e.branch){switch("red"===e.branch||"blue"===e.branch?(n.ctx.moveTo(0,e.y),n.ctx.lineTo(e.x,e.y)):"green"!==e.branch&&"yellow"!==e.branch||(n.ctx.moveTo(e.x,0),n.ctx.lineTo(e.x,e.y)),e.branch){case"blue":n.ctx.strokeStyle="blue";break;case"yellow":n.ctx.strokeStyle="yellow";break;case"red":n.ctx.strokeStyle="red";break;case"green":n.ctx.strokeStyle="green"}n.ctx.lineWidth="8",n.ctx.stroke()}"two"===e.branch&&(n.ctx.beginPath(),n.ctx.moveTo(0,e.y),n.ctx.lineTo(e.x,e.y),e.y<0?n.ctx.strokeStyle="blue":n.ctx.strokeStyle="red",n.ctx.lineWidth="10",n.ctx.stroke(),n.ctx.beginPath(),n.ctx.moveTo(e.x,0),n.ctx.lineTo(e.x,e.y),e.x<0?n.ctx.strokeStyle="green":n.ctx.strokeStyle="yellow",n.ctx.lineWidth="10",n.ctx.stroke()),"portal"!==e.type&&"end"!==e.type||(n.ctx.beginPath(),n.points.push({point:e}),n.ctx.arc(e.x,e.y,n.pointRadius,0,6.28),n.ctx.lineWidth="1",n.ctx.fillStyle="purple",n.ctx.strokeStyle="black",n.ctx.stroke(),n.ctx.fill()),"hab"===e.type&&(n.ctx.beginPath(),n.ctx.arc(e.x,-e.y,25,0,6.28),n.ctx.lineWidth="1",n.ctx.fillStyle="white",n.ctx.strokeStyle="black",n.ctx.stroke(),n.ctx.fill())})),n.ctx.restore()},n.NeatherMap=r.a.createRef(),n.state={modalNeatherMapIsOpen:!1,isRender:!1},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.ctx=this.NeatherMap.current.getContext("2d"),this.onMarkerView={x:0,z:0},this.mouseDown=!1,this.startDragOffset={},this.pointRadius=5,this.scale=1,this.scaleMultiplier=.9,this.translatePos={x:this.NeatherMap.current.width/2-this.onMarkerView.x,y:this.NeatherMap.current.height/2-this.onMarkerView.z},this.startTranslatePos={x:this.NeatherMap.current.width/2,y:this.NeatherMap.current.height/2},this.firstRender=!0,this.draw(this.scale,this.translatePos),this.pointModal()}},{key:"componentDidUpdate",value:function(){this.draw(this.scale,this.translatePos)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{position:"relative",overflow:"hidden"}},r.a.createElement("canvas",{height:document.body.clientHeight,width:document.body.clientWidth,ref:this.NeatherMap,onMouseDown:this.startLooking,onMouseMove:this.looking,onMouseUp:this.finishLooking,onMouseOver:this.finishLooking,onWheel:this.wheel,onClick:this.pointModal}),void 0===this.markers?"":this.markers.map((function(t,a){return r.a.createElement(b,{props:t,scale:e.scale,key:a})})),this.state.modalNeatherMapIsOpen&&r.a.createElement(m,{marker:this.markerForModal}))}}]),a}(r.a.Component),y=Object(d.b)((function(e){return{branchs:e.branchs}}))(x),m=function(e){var t=e.marker[0],a=e.marker[1].point;return r.a.createElement("div",{className:"modalNeatherMap",style:{left:t.xFinish+5,top:t.yStart}},r.a.createElement("h2",{className:"modalNeatherMap__title"},a.name),r.a.createElement("div",{className:"modalNeatherMap__description"},a.description),r.a.createElement("div",{className:"modalNeatherMap__cords"},r.a.createElement("div",null,"X: ",r.a.createElement("span",null,a.x)),r.a.createElement("div",null,"Z: ",r.a.createElement("span",null,a.y))))};var b=function(e){var t=e.props,a=e.scale;return r.a.createElement("div",{className:"nameNeatherMap",style:{left:t.markerHitbox.xFinish+7,top:t.markerHitbox.yStart,fontSize:14*a}},t.markerInfo.point.name)};a(23),a(24),a(25),a(26),a(27),a(28),a(29);var f=function(){return r.a.createElement("div",null,r.a.createElement(i.a,{path:"/",exact:!0},r.a.createElement(s.b,{to:"neather",style:{display:"block",margin:"20px"}},"\u041a\u0430\u0440\u0442\u0430 \u0445\u0430\u0439\u043f\u0435\u0440\u043b\u0443\u043f\u043e\u0432 (\u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0435)"),r.a.createElement("a",{style:{display:"block",margin:"20px"},href:"https://docs.google.com/spreadsheets/d/1H6pn4vk-HvZuHFTm8-ZwM9rafYJXuNHkOfJl7_M6_R8/edit#gid=0"},"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0431\u0430\u043d\u043a\u0430 \u0440\u0430\u0439\u0441\u043a\u0430")),r.a.createElement(i.a,{component:y,path:"/neather",exact:!0}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=a(10),O=a(8),g=[{name:"\u0420\u0430\u0439\u0441\u043a",description:"\u0421\u0442\u043e\u043b\u0438\u0446\u0430 \u0418\u043c\u043f\u0435\u0440\u0438\u0438",branch:"red",type:"portal",tunnel:!0,x:21,y:194},{name:"\u0424\u0435\u0440\u043c\u044b",description:"\u0422\u0443\u0442 \u0444\u0435\u0440\u043c\u0430 \u043f\u043e\u0440\u043e\u0445\u0430, \u043e\u043f\u044b\u0442\u0430 \u0438 \u043a\u0430\u043a\u0442\u0443\u0441\u043e\u0432",branch:"red",type:"portal",tunnel:!0,x:-12,y:314},{name:"\u041a\u0440\u0435\u043f\u043e\u0441\u0442\u044c",description:"\u041a\u0440\u0435\u043f\u043e\u0441\u0442\u044c \u043d\u0438\u0436\u043d\u0435\u0433\u043e \u043c\u0438\u0440\u0430",branch:!1,type:"portal",tunnel:!0,x:100,y:350},{name:"\u041c\u0435\u0441\u0441\u0430",description:"\u0422\u0443\u0442 \u043c\u043d\u043e\u0433\u043e \u0442\u0435\u0440\u0440\u0430\u043a\u043e\u0442\u044b",branch:"red",type:"portal",tunnel:!0,x:15,y:525},{name:"\u0413\u043b\u0430\u0432\u043d\u044b\u0439 \u043f\u043e\u0440\u0442\u0430\u043b \u0432 \u044d\u043d\u0434\u0435\u0440 \u043c\u0438\u0440",description:"\u0415\u0441\u043b\u0438 \u0432\u043e\u0437\u0440\u043e\u0434\u0438\u043b \u0434\u0440\u0430\u043a\u043e\u043d\u0430, \u0442\u043e \u0441\u0430\u043c \u0435\u0433\u043e \u0438 \u0443\u0431\u0438\u0432\u0430\u0439",branch:"red",type:"portal",tunnel:!0,x:121,y:146},{name:"\u041f\u043b\u044f\u0436",description:"\u0417\u0430\u0431\u0440\u043e\u0448\u0435\u043d\u043d\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",branch:"yellow",type:"portal",tunnel:!0,x:175,y:62},{name:"\u0424\u0435\u0440\u043c\u0430 \u0433\u0432\u0430\u0440\u0434\u0438\u0430\u043d\u043e\u0432",description:"\u0422\u0443\u0442 \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0444\u0430\u0440\u043c\u0438\u0442\u044c \u043c\u043e\u0440\u0441\u043a\u0438\u0435 \u0444\u043e\u043d\u0430\u0440\u0438\u043a\u0438",branch:"green",type:"portal",tunnel:!0,x:-194,y:42},{name:"\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u0431\u0438\u043e\u043c",description:"\u041c\u043d\u043e\u0433\u043e \u0431\u043e\u0440\u043e\u0432\u043e\u0432",branch:"green",type:"portal",tunnel:!0,x:-1e3,y:-200},{name:"\u0422\u0451\u043c\u043d\u044b\u0439 \u043b\u0435\u0441",description:"\u0422\u0451\u043c\u043d\u044b\u0439 \u043b\u0435\u0441, \u0440\u043e\u0432\u043d\u043e\u0435 \u0431\u043e\u043b\u043e\u0442\u043e",branch:"blue",type:"portal",tunnel:!0,x:-8,y:-126},{name:"\u0413\u0440\u0438\u0431\u043d\u043e\u0439 \u043e\u0441\u0442\u0440\u043e\u0432",description:"\u041c\u043e\u0436\u043d\u043e \u0431\u0440\u0430\u0442\u044c \u0433\u0440\u0438\u0431\u043d\u044b\u0445 \u043a\u043e\u0440\u043e\u0432",branch:"blue",type:"portal",tunnel:!0,x:-473,y:-1062},{name:"\u0425\u0430\u0431",description:"\u0442\u0443\u0442",branch:"all",type:"hab",x:0,y:0}],T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BRANCHS":return[].concat(Object(O.a)(e),[t.payload]);default:return e}},N=a(2),M={title:"",description:"",x:"0",y:"0",hasTunnel:!1,hasTwoTunnelDisabled:!0,hasTwoTunnel:!1,branchColor:[]},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_BRANCH_TITLE":return Object(N.a)(Object(N.a)({},e),{},{title:t.payload});case"ADD_BRANCH_DESCRIPTION":return Object(N.a)(Object(N.a)({},e),{},{description:t.payload});case"ADD_BRANCH_X":return Object(N.a)(Object(N.a)({},e),{},{x:t.payload,hasTwoTunnel:!1,branchColor:[]});case"ADD_BRANCH_Y":return Object(N.a)(Object(N.a)({},e),{},{y:t.payload,hasTwoTunnel:!1,branchColor:[]});case"ADD_BRANCH_HAS_TUNNEL":return Object(N.a)(Object(N.a)({},e),{},{hasTunnel:t.payload,branchColor:[]});case"ADD_BRANCH_HAS_TWO_TUNNEL_DISABLED":return Object(N.a)(Object(N.a)({},e),{},{hasTwoTunnelDisabled:t.payload,branchColor:[]});case"ADD_BRANCH_HAS_TWO_TUNNEL":return Object(N.a)(Object(N.a)({},e),{},{hasTwoTunnel:t.payload});case"ADD_BRANCH_COLOR":return Object(N.a)(Object(N.a)({},e),{},{branchColor:t.payload,hasTwoTunnel:!1});case"ADD_BRANCH_EMPTY":return Object(N.a)(Object(N.a)({},e),{},{title:"",description:"",x:"0",y:"0",hasTunnel:!1,hasTwoTunnelDisabled:!0,hasTwoTunnel:!1,branchColor:[]});default:return e}},w={user:"user"},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return Object(N.a)(Object(N.a)({},e),{},{user:t.payload});default:return e}},E=[{name:"\u0427\u0442\u043e \u0437\u0434\u0435\u0441\u044c?",description:"\u043b\u0430\u043b\u0430\u043b\u0430\u043b\u0430\u043b\u0430\u043b\u0430\u043b\u0430",branch:"two",type:"portal",tunnel:!0,x:1500,y:1500},{name:"\u041f\u043b\u043e\u0445\u043e\u0439 \u043c\u0430\u0440\u043a\u0435\u0440",description:"\u0410\u0425\u0425\u0410\u0425\u0410",branch:"two",type:"portal",tunnel:!0,x:345,y:1456},{name:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u0431\u0440\u043e\u043d\u0438",description:"\u0417\u0434\u0435\u0441\u044c \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043a\u0443\u043f\u0438\u0442\u044c \u0431\u0440\u043e\u043d\u044e",branch:"yellow",type:"portal",tunnel:!0,x:700,y:-500},{name:"\u0421\u0446\u0435\u043d\u0430 \u0434\u043b\u044f \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u0439",description:"\u0412\u0445\u043e\u0434 \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u044b\u0439, \u0441\u043a\u043e\u0440\u043e \u043f\u043e\u0441\u0442\u0440\u043e\u0438\u043c \u0442\u0443\u043d\u043d\u0435\u043b\u044c!",branch:!1,type:"portal",tunnel:!1,x:-300,y:200}],S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BRANCHS_ON_MODEDERATION":return[].concat(Object(O.a)(e),[t.payload]);case"DELITE_ONE_BRANCH_ON_MODERATION":return Object(O.a)(t.payload);default:return e}},D=[],R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BRANCHS_ON_NEATHER_MAP_MODERATION":return Object(O.a)(t.payload);default:return e}},j=Object(k.b)({branchs:T,addBranchForm:v,user:_,branchsOnModeration:S,branchsOnNeaterMapModeration:R}),A=Object(k.c)(j,null===localStorage.getItem("redux-store")?{}:JSON.parse(localStorage.getItem("redux-store")),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());A.subscribe((function(){localStorage.setItem("redux-store",JSON.stringify(A.getState()))}));var C=A;a(45);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,null,r.a.createElement(d.a,{store:C},r.a.createElement(f,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.732144b2.chunk.js.map