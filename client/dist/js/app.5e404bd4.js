(function(t){function e(e){for(var s,i,o=e[0],c=e[1],l=e[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var s={},a={app:0},r=[];function i(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var s=n("64a9"),a=n.n(s);a.a},2322:function(t,e,n){"use strict";var s=n("5885"),a=n.n(s);a.a},5032:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("AddTask",{on:{"add-task":t.createTask}}),n("Tasks",{attrs:{tasks:t.tasks},on:{"delete-task":function(e){return t.deleteTask(t.id)}}})],1)},r=[],i=n("75fc"),o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("h1",{staticClass:"title"},[t._v("Wed-Ly")]),n("h2",{staticClass:"subtitle"},[t._v("Personalized Wedding Checklist")])])}],l={name:"Header"},u=l,d=(n("c282"),n("2877")),p=Object(d["a"])(u,o,c,!1,null,"52b2bc0d",null),f=p.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.tasks,(function(e){return n("div",{key:e._id},[n("TaskObject",{attrs:{task:e},on:{"delete-task":function(n){return t.$emit("delete-task",e._id)}}})],1)})),0)},k=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{key:t.task._id,staticClass:"task-object",class:{"task-complete":t.task.isCompleted}},[n("p",[n("input",{attrs:{type:"checkbox"},on:{change:t.completeTask}})]),n("h4",[t._v("Category:")]),t._v("\n      "+t._s(t.task.title)+"\n    "),n("h4",[t._v("Description: ")]),t._v("\n      "+t._s(t.task.description)+"\n    "),n("h4",[t._v("Completed:")]),t._v("\n      "+t._s(t.task.isCompleted)+"\n    "),n("button",{on:{click:function(e){return t.deleteTask(t.task,t.id)}}},[t._v("X")]),n("p")])},v=[],b=n("bc3a"),_=n.n(b),g={name:"TaskObject",props:["task"],data:function(){return{title:"",description:"",isCompleted:!1,id:""}},methods:{completeTask:function(){this.task.isCompleted=!this.task.isCompleted},deleteTask:function(t,e){var n=this;_.a.delete("http://localhost:3000/tasks/".concat(t._id)).then((function(t){return n.tasks=n.tasks.filter((function(t){return t._id!==e}))})).catch((function(t){return console.log(t)}))}}},y=g,C=(n("2322"),Object(d["a"])(y,m,v,!1,null,"0cefb343",null)),T=C.exports,O={name:"Tasks",components:{TaskObject:T},props:["tasks","task"]},j=O,x=Object(d["a"])(j,h,k,!1,null,"7a588124",null),w=x.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("form",{staticClass:"taskCreation",on:{submit:t.createTask}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"titleInput",attrs:{type:"text",name:"title",placeholder:"Category"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"descInput",attrs:{type:"text",name:"description",placeholder:"Task Description"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),n("input",{staticClass:"submitButton",attrs:{type:"submit",value:"Submit"}})])])},$=[];var E={name:"AddTask",data:function(){return{title:"",description:""}},methods:{createTask:function(t,e){t.preventDefault();var n={title:this.title,description:this.description,isCompleted:!1};this.$emit("create-task",n),title=this.title,description=this.description,isCompleted=!1}}},S=E,A=(n("f720"),Object(d["a"])(S,P,$,!1,null,"38e6ce5d",null)),M=A.exports,D={name:"App",components:{Header:f,Tasks:w,AddTask:M},data:function(){return{tasks:[],error:"",text:"",title:"",description:"",isCompleted:!1}},methods:{deleteTask:function(t){var e=this;_.a.delete("http://localhost:3000/tasks/".concat(task._id)).then((function(n){return e.tasks=e.tasks.filter((function(e){return e.id!==t}))})).catch((function(t){return console.log(t)}))},createTask:function(t){var e=this,n=t.title,s=t.description,a=t.isCompleted;_.a.post("http://localhost:3000/tasks/",{title:n,description:s,isCompleted:a}).then((function(t){return e.tasks=[].concat(Object(i["a"])(e.tasks),[t.data])})).catch((function(t){return console.log(t)})),this.tasks=[].concat(Object(i["a"])(this.tasks),[t])}},mounted:function(){var t=this;console.log(_.a.get("http://localhost:3000/tasks")),_.a.get("http://localhost:3000/tasks").then((function(e){return t.tasks=e.data})).catch((function(t){return console.log(t)}))},created:function(){var t=this;_.a.get("").then((function(e){return t.tasks=e.data})).catch((function(t){return console.log(t)}))}},H=D,I=(n("034f"),Object(d["a"])(H,a,r,!1,null,null,null)),J=I.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(J)}}).$mount("#app")},5885:function(t,e,n){},"64a9":function(t,e,n){},c282:function(t,e,n){"use strict";var s=n("e90c"),a=n.n(s);a.a},e90c:function(t,e,n){},f720:function(t,e,n){"use strict";var s=n("5032"),a=n.n(s);a.a}});
//# sourceMappingURL=app.5e404bd4.js.map