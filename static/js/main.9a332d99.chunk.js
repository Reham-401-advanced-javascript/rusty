(this["webpackJsonpsimple-react"]=this["webpackJsonpsimple-react"]||[]).push([[0],{11:function(e,t,n){e.exports=n(19)},16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(2),s=n(4),c=n(3),l=n(0),u=n.n(l),o=n(8),i=n.n(o),h=(n(16),function(e){Object(s.a)(n,e);var t=Object(c.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return u.a.createElement("header",null,u.a.createElement("h1",null,"RESTy"))}}]),n}(u.a.Component)),m=n(5),d=n.n(m),p=n(9),f=(n(7),function(e){Object(s.a)(n,e);var t=Object(c.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).handleSubmit=function(){var e=Object(p.a)(d.a.mark((function e(t){var n,a,s,c,l,u;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),t.target.reset(),!r.state.url||!r.state.method){e.next=25;break}return n=r.state.url,a=r.state.method||"get",e.next=7,fetch(n,{method:a});case 7:return s=e.sent,e.next=10,s.json();case 10:return c=e.sent,s.headers.forEach((function(e){l={"Content-Type":e}})),u={Headers:l,Response:c},e.next=15,"";case 15:return n=e.sent,e.next=18,"";case 18:return a=e.sent,e.next=21,r.setState({results:u,url:n,method:a});case 21:return e.next=23,r.props.update(u);case 23:e.next=26;break;case 25:alert("missing information");case 26:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.handleChangeURL=function(e){var t=e.target.value;r.setState({url:t})},r.handleChangeMethod=function(e){var t=e.target.id;r.setState({method:t})},r.state={url:"",method:"get",request:{},results:[]},r}return Object(r.a)(n,[{key:"render",value:function(){return u.a.createElement("section",null,u.a.createElement("form",{id:"form",onSubmit:this.handleSubmit},u.a.createElement("label",null,u.a.createElement("span",null,"URL: "),u.a.createElement("input",{name:"url",id:"url",type:"text",onChange:this.handleChangeURL}),u.a.createElement("button",{id:"goButton",type:"submit"},"GO!")),u.a.createElement("label",{className:"methods"},u.a.createElement("span",{className:"get"===this.state.method?"active":"",id:"get",onClick:this.handleChangeMethod},"GET"),u.a.createElement("span",{className:"post"===this.state.method?"active":"",id:"post",onClick:this.handleChangeMethod},"POST"),u.a.createElement("span",{className:"put"===this.state.method?"active":"",id:"put",onClick:this.handleChangeMethod},"PUT"),u.a.createElement("span",{className:"delete"===this.state.method?"active":"",id:"delete",onClick:this.handleChangeMethod},"DELETE"))))}}]),n}(u.a.Component)),b=n(10),E=n.n(b);var v=function(e){return e.response.Headers?u.a.createElement("section",null,u.a.createElement(E.a,{src:e.response})):u.a.createElement("section",null)},O=(n(18),function(e){Object(s.a)(n,e);var t=Object(c.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return u.a.createElement("footer",null,"\xa9 2020 Reham Omar ^_^")}}]),n}(u.a.Component)),j=function(e){Object(s.a)(n,e);var t=Object(c.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).handleUpdate=function(e){var t=e.Headers,n=e.Response;r.setState({Headers:{header:t},Response:{response:n}})},r.state={},r}return Object(r.a)(n,[{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(h,null),u.a.createElement(f,{update:this.handleUpdate}),u.a.createElement(v,{response:this.state}),u.a.createElement(O,null))}}]),n}(u.a.Component),g=function(e){Object(s.a)(n,e);var t=Object(c.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return u.a.createElement(j,null)}}]),n}(u.a.Component),C=document.getElementById("root");i.a.render(u.a.createElement(g,null),C)},7:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.9a332d99.chunk.js.map