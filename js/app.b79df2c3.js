(function(e){function t(t){for(var o,r,l=t[0],a=t[1],s=t[2],u=0,m=[];u<l.length;u++)r=l[u],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&m.push(c[r][0]),c[r]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);d&&d(t);while(m.length)m.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,l=1;l<n.length;l++){var a=n[l];0!==c[a]&&(o=!1)}o&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},c={app:0},i=[];function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/todoListApp/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var d=a;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0591":function(e,t,n){var o={"./check.svg":"6aa8","./close.svg":"1d1b","./garbage.svg":"2d77","./pencil.svg":"2d07"};function c(e){var t=i(e);return n(t)}function i(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}c.keys=function(){return Object.keys(o)},c.resolve=i,e.exports=c,c.id="0591"},"0ae0":function(e,t,n){},"13f0":function(e,t,n){"use strict";n("c5c4")},"1d1b":function(e,t,n){e.exports=n.p+"img/close.5b2caa7b.svg"},"2d07":function(e,t,n){e.exports=n.p+"img/pencil.b91c51be.svg"},"2d77":function(e,t,n){e.exports=n.p+"img/garbage.dc96640a.svg"},"3cc8":function(e,t,n){},"439e":function(e,t,n){},4797:function(e,t,n){"use strict";n("0ae0")},5309:function(e,t,n){},"5c49":function(e,t,n){},6307:function(e,t,n){"use strict";n("5309")},"6aa8":function(e,t,n){e.exports=n.p+"img/check.a01fe6e4.svg"},"6ac5":function(e,t,n){},"72a0":function(e,t,n){},"7d01":function(e,t,n){"use strict";n("6ac5")},9369:function(e,t,n){"use strict";n("a855")},"9b79":function(e,t,n){"use strict";n("439e")},"9c1c":function(e,t,n){"use strict";n("3cc8")},a855:function(e,t,n){},b751:function(e,t,n){},c5c4:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function c(e,t,n,c,i,r){var l=Object(o["resolveComponent"])("color-picker"),a=Object(o["resolveComponent"])("todo-list");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{id:"app",class:Object(o["normalizeClass"])(["app",e.theme.title])},[Object(o["createVNode"])(l,{themes:e.themes,onChangeTheme:e.setTheme,class:"app__colorPicker"},null,8,["themes","onChangeTheme"]),Object(o["createVNode"])(a)],2)}var i=n("2909"),r=function(e){return Object(o["pushScopeId"])("data-v-715b9db0"),e=e(),Object(o["popScopeId"])(),e},l={class:"todos"},a=r((function(){return Object(o["createElementVNode"])("h1",{class:"todos__title"},"Твой список задач",-1)})),s={key:0,class:"todos__wrapper"},d={key:1,class:"todos__empty text-md"};function u(e,t,n,c,i,r){var u=Object(o["resolveComponent"])("create-item"),m=Object(o["resolveComponent"])("filter-items"),f=Object(o["resolveComponent"])("todo-item");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",l,[a,Object(o["createVNode"])(u),Object(o["createVNode"])(o["Transition"],{name:"slide-fade"},{default:Object(o["withCtx"])((function(){return[e.todoList.length?(Object(o["openBlock"])(),Object(o["createBlock"])(m,{key:0})):Object(o["createCommentVNode"])("",!0)]})),_:1}),Object(o["createVNode"])(o["Transition"],{name:"slide-fade",appear:""},{default:Object(o["withCtx"])((function(){return[e.filteredTodos.length?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",s,[Object(o["createVNode"])(o["TransitionGroup"],{name:"list",tag:"ul",class:"todos__list",appear:""},{default:Object(o["withCtx"])((function(){return[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.filteredTodos,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])(f,{index:t,key:e.id,todo:e},null,8,["index","todo"])})),128))]})),_:1})])):(Object(o["openBlock"])(),Object(o["createElementBlock"])("p",d,"Список задач пуст"))]})),_:1})])}var m=function(e){return Object(o["pushScopeId"])("data-v-3134c3e0"),e=e(),Object(o["popScopeId"])(),e},f={class:"header"},p=m((function(){return Object(o["createElementVNode"])("p",{class:"header__text text-md"},"Напиши список дел, чтобы не забыть их выполнить",-1)})),b={class:"header__form"};function O(e,t,n,c,i,r){var l=Object(o["resolveComponent"])("base-input"),a=Object(o["resolveComponent"])("base-btn");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",f,[p,Object(o["createElementVNode"])("div",b,[Object(o["createVNode"])(l,{modelValue:e.todoText,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.todoText=t}),"aria-label":"Write a to-do",class:"header__input",placeholder:"Важное дело",onKeyup:Object(o["withKeys"])(Object(o["withModifiers"])(e.addNewItem,["prevent"]),["enter"])},null,8,["modelValue","onKeyup"]),Object(o["createVNode"])(a,{icon:"check",class:"header__addBtn",name:"add",onClick:e.addNewItem},null,8,["onClick"])])])}var v={type:"button",class:"btn"};function j(e,t,c,i,r,l){var a=Object(o["resolveComponent"])("inline-svg");return Object(o["openBlock"])(),Object(o["createElementBlock"])("button",v,[e.icon?(Object(o["openBlock"])(),Object(o["createBlock"])(a,{key:0,src:n("0591")("./".concat(e.icon,".svg")),class:"btn__icon"},null,8,["src"])):Object(o["createCommentVNode"])("",!0),Object(o["renderSlot"])(e.$slots,"default",{},void 0,!0)])}var h=Object(o["defineComponent"])({name:"BaseBtn",props:{icon:{type:String}}}),_=(n("9369"),n("6b0d")),k=n.n(_);const g=k()(h,[["render",j],["__scopeId","data-v-ac32ff7a"]]);var E=g;function C(e,t,n,c,i,r){var l=Object(o["resolveDirective"])("focus");return Object(o["withDirectives"])((Object(o["openBlock"])(),Object(o["createElementBlock"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.model=t}),type:"text",class:"input"},null,512)),[[o["vModelText"],e.model],[l]])}var T={mounted:function(e){e.focus()}},I=Object(o["defineComponent"])({name:"BaseInput",inheritAttrs:!0,directives:{focus:T},props:{modelValue:{type:String,default:""}},emits:["update:modelValue"],setup:function(e,t){var n=Object(o["computed"])({get:function(){return e.modelValue},set:function(e){t.emit("update:modelValue",e)}});return{model:n}}});n("7d01");const B=k()(I,[["render",C],["__scopeId","data-v-b11d4282"]]);var y,N=B,S=(n("c740"),n("a434"),n("4de4"),n("d3b7"),[{title:"light",color:"#fc6d00"},{title:"dark",color:"#ff00a6"}]),w=(n("25f0"),n("e9c4"),{setItem:function(e,t){localStorage.setItem(e.toString(),JSON.stringify(t))},clearAll:function(){localStorage.clear()},getTodoList:function(){var e=localStorage.getItem("todoList");return e?JSON.parse(e):[]},getTheme:function(){var e=localStorage.getItem("theme");return e?JSON.parse(e):null},updateLocalStorage:function(e){w.setItem("todoList",e)},setTheme:function(e){w.setItem("theme",e)}});(function(e){e["active"]="Активные",e["completed"]="Выполненные",e["all"]="Все"})(y||(y={}));var L=n("5502"),V=n("0e44"),x=Object(L["a"])({state:{todoList:[],id:0,listName:y.all,theme:S[0]},mutations:{ADD_ITEM:function(e,t){var n={completed:!1,text:t,id:e.id++};e.todoList.unshift(n),w.updateLocalStorage(e.todoList)},EDIT_ITEM:function(e,t){var n=e.todoList.findIndex((function(e){return e.id===t.id}));e.todoList.splice(n,1,t),w.updateLocalStorage(e.todoList)},DELETE_ITEM:function(e,t){e.todoList.splice(t,1),w.updateLocalStorage(e.todoList)},SHOW_ACTIVE:function(e){e.listName=y.active},SHOW_COMPLETED:function(e){e.listName=y.completed},SHOW_ALL:function(e){e.listName=y.all},DELETE_ALL:function(e){e.todoList=[],e.id=-1,w.clearAll()},SET_ALL_TODOS:function(e){e.todoList=w.getTodoList()},SET_ID:function(e){var t=e.todoList[0];e.id=t?t.id+1:0},SET_THEME:function(e,t){e.theme=t,w.setTheme(t)},GET_THEME:function(e){var t;e.theme=null!==(t=w.getTheme())&&void 0!==t?t:S[0]}},actions:{addItem:function(e,t){var n=e.commit;n("ADD_ITEM",t)},editItem:function(e,t){var n=e.commit;n("EDIT_ITEM",t)},deleteItem:function(e,t){var n=e.commit;n("DELETE_ITEM",t)},showActive:function(e){var t=e.commit;t("SHOW_ACTIVE")},showCompleted:function(e){var t=e.commit;t("SHOW_COMPLETED")},showAll:function(e){var t=e.commit;t("SHOW_ALL")},deleteAll:function(e){var t=e.commit;t("DELETE_ALL")},setAllTodos:function(e){var t=e.commit;t("SET_ALL_TODOS")},setId:function(e){var t=e.commit;t("SET_ID")},setTheme:function(e,t){var n=e.commit;n("SET_THEME",t)},getTheme:function(e){var t=e.commit;t("GET_THEME")}},getters:{filteredTodos:function(e){switch(e.listName){case y.active:return e.todoList.filter((function(e){return!e.completed}));case y.completed:return e.todoList.filter((function(e){return e.completed}));default:return e.todoList}},todoList:function(e){return e.todoList},listName:function(e){return e.listName},id:function(e){return e.id},theme:function(e){return e.theme}},strict:!0,plugins:[Object(V["a"])()]}),A=Object(o["defineComponent"])({components:{BaseInput:N,BaseBtn:E},directives:{focus:T},setup:function(){var e=Object(o["ref"])(""),t=function(){var t;(null===(t=e.value)||void 0===t?void 0:t.length)>0&&x.dispatch("addItem",e.value),e.value=""};return{todoText:e,addNewItem:t}}});n("6307");const D=k()(A,[["render",O],["__scopeId","data-v-3134c3e0"]]);var M=D,P={class:"listItem"},W={class:"listItem__container"},H={class:"listItem__labelContainer"},$={class:"listItem__btns"},F={class:"listItem__btns listItem__btns--actions"};function U(e,t,c,i,r,l){var a=Object(o["resolveComponent"])("inline-svg"),s=Object(o["resolveComponent"])("base-input"),d=Object(o["resolveComponent"])("base-btn"),u=Object(o["resolveComponent"])("SwipeActions");return Object(o["openBlock"])(),Object(o["createElementBlock"])("li",P,[Object(o["createVNode"])(u,{isClosedOnClick:""},{right:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",F,[Object(o["createVNode"])(d,{icon:"pencil",name:"edit",class:"listItem__btn",onClick:e.startEditing},null,8,["onClick"]),Object(o["createVNode"])(d,{icon:"garbage",name:"delete",class:"listItem__btn",onClick:e.deleteItem},null,8,["onClick"])])]})),default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",W,[e.isEditing?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createElementBlock"])("button",{key:0,class:"listItem__btnComplete",type:"button",name:"check-complete",onClick:t[0]||(t[0]=function(){return e.completeItem&&e.completeItem.apply(e,arguments)})},[Object(o["withDirectives"])(Object(o["createVNode"])(a,{src:n("6aa8"),class:"listItem__icon"},null,8,["src"]),[[o["vShow"],e.todo.completed]])])),Object(o["createElementVNode"])("div",H,[e.isEditing?(Object(o["openBlock"])(),Object(o["createBlock"])(s,{key:1,modelValue:e.model,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.model=t}),"aria-label":"Edit to-do",class:"listItem__input"},null,8,["modelValue"])):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{key:0,class:Object(o["normalizeClass"])(["listItem__label",{completed:e.todo.completed}]),onDblclick:t[1]||(t[1]=function(){return e.startEditing&&e.startEditing.apply(e,arguments)})},Object(o["toDisplayString"])(e.todo.text),35))]),Object(o["createElementVNode"])("div",$,[e.isEditing?(Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],{key:1},[Object(o["createVNode"])(d,{icon:"check",name:"finish-editing",onClick:e.finishEditing},null,8,["onClick"]),Object(o["createVNode"])(d,{icon:"close",name:"cancel-editing",onClick:e.endEditing},null,8,["onClick"])],64)):(Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],{key:0},[Object(o["createVNode"])(d,{icon:"pencil",name:"edit",class:"listItem__btn listItem__btn--desk",onClick:e.startEditing},null,8,["onClick"]),Object(o["createVNode"])(d,{icon:"garbage",name:"delete",class:"listItem__btn listItem__btn--desk",onClick:e.deleteItem},null,8,["onClick"])],64))])])]})),_:1})])}var J=n("5530"),z=(n("a9e3"),{class:"swipeActions"}),G={ref:"wrapper",class:"swipeActions__wrapper"};function K(e,t,n,c,i,r){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",z,[Object(o["createElementVNode"])("div",G,[e.$slots.left?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{key:0,ref:"left",class:"swipeActions__left",onClick:t[0]||(t[0]=function(){return e.onClick&&e.onClick.apply(e,arguments)})},[Object(o["renderSlot"])(e.$slots,"left",{},void 0,!0)],512)):Object(o["createCommentVNode"])("",!0),Object(o["createElementVNode"])("div",{ref:"content",class:"swipeActions__content",onTouchstartPassive:t[1]||(t[1]=function(){return e.onTouchStart&&e.onTouchStart.apply(e,arguments)}),onTouchmovePassive:t[2]||(t[2]=function(){return e.onTouchMove&&e.onTouchMove.apply(e,arguments)}),onTouchendPassive:t[3]||(t[3]=function(){return e.onTouchEnd&&e.onTouchEnd.apply(e,arguments)})},[Object(o["renderSlot"])(e.$slots,"default",{},void 0,!0)],544),e.$slots.right?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{key:1,ref:"right",class:"swipeActions__right",onClick:t[4]||(t[4]=function(){return e.onClick&&e.onClick.apply(e,arguments)})},[Object(o["renderSlot"])(e.$slots,"right",{},void 0,!0)],512)):Object(o["createCommentVNode"])("",!0)],512)])}function X(e){return 0===e?"":"translate3d(".concat(e,"px, 0, 0)")}var q=Object(o["defineComponent"])({name:"SwipeActions",props:{breakpoint:{type:Number,default:768},isClosedOnClick:{type:Boolean,default:!1}},data:function(){return{isActive:!1,coord:0,dir:""}},methods:{reveal:function(){if(this.dir){if(!this.isActive&&this.$refs[this.dir]){var e=this.$refs[this.dir].clientWidth;this.animateSlide("left"===this.dir?e:-e)}}else this.animateSlide(0)},animateSlide:function(e){var t=this.$refs.wrapper;t&&(t.style.transform=X(e))},onClick:function(){this.isClosedOnClick&&(this.dir="",this.reveal())},onTouchStart:function(e){if(window.innerWidth<=this.breakpoint){if(this.isActive=!0,this.dir)return this.dir="",void this.reveal();this.coord=e.touches[0].clientX}},onTouchMove:function(e){if(window.innerWidth<=this.breakpoint&&this.isActive){var t=-this.coord+(this.coord=e.touches[0].clientX);if(Math.abs(t)<10)return;this.dir=t>=0?"left":"right"}},onTouchEnd:function(){window.innerWidth<=this.breakpoint&&(this.isActive=!1,this.reveal())}}});n("13f0");const Q=k()(q,[["render",K],["__scopeId","data-v-26fe23f0"]]);var R=Q,Y=Object(o["defineComponent"])({components:{BaseInput:N,BaseBtn:E,SwipeActions:R},props:{todo:Object,index:Number},setup:function(e){var t,n,c=Object(o["ref"])(!1),i=function(){return c.value=!0},r=Object(o["ref"])(null!==(t=null===(n=e.todo)||void 0===n?void 0:n.text)&&void 0!==t?t:""),l=Object(o["computed"])({get:function(){var t,n;return null!==(t=null===(n=e.todo)||void 0===n?void 0:n.text)&&void 0!==t?t:""},set:function(e){r.value=e}}),a=function(){return c.value=!1},s=function(){if(r.value.length){var t=Object(J["a"])(Object(J["a"])({},e.todo),{},{text:r.value});a(),x.dispatch("editItem",t)}},d=function(){return x.dispatch("deleteItem",e.index)},u=function(){var t,n=Object(J["a"])(Object(J["a"])({},e.todo),{},{completed:!(null!==(t=e.todo)&&void 0!==t&&t.completed)});x.dispatch("editItem",n)};return{isEditing:c,model:l,newText:r,startEditing:i,finishEditing:s,endEditing:a,deleteItem:d,completeItem:u}}});n("9b79");const Z=k()(Y,[["render",U],["__scopeId","data-v-18d52cf7"]]);var ee=Z,te={class:"filter"},ne={class:"filter__title"},oe={class:"filter__btns"},ce={class:"filter__container"},ie=Object(o["createTextVNode"])("Очистить");function re(e,t,n,c,i,r){var l=Object(o["resolveComponent"])("base-btn");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",te,[Object(o["createElementVNode"])("h2",ne,Object(o["toDisplayString"])(e.listName+" задачи"),1),Object(o["createElementVNode"])("div",oe,[Object(o["createElementVNode"])("div",ce,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.listNames,(function(t,n){return Object(o["openBlock"])(),Object(o["createBlock"])(l,{key:n,name:"active",class:Object(o["normalizeClass"])([{selected:e.listName===t},"filter__btn"]),onClick:function(t){return e.filterTodos(n)}},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(t),1)]})),_:2},1032,["class","onClick"])})),128))]),Object(o["createVNode"])(l,{name:"delete_all",class:"filter__btn filter__btnDelete",onClick:e.deleteAll},{default:Object(o["withCtx"])((function(){return[ie]})),_:1},8,["onClick"])])])}n("159b"),n("4fad"),n("b64b"),n("99af"),n("fb6a");var le=Object(o["defineComponent"])({components:{BaseBtn:E},setup:function(){var e=Object(o["computed"])((function(){return x.getters.listName})),t={};Object.entries(y).forEach((function(e){return t[e[0]]=e[1]}));var n=function(e){var n=e;if(window.innerWidth<768){var o=Object.keys(t),c=o.indexOf(n);n=o[c===o.length-1?0:c+1]}x.dispatch("show".concat(n[0].toUpperCase()).concat(n.slice(1)))},c=function(){x.dispatch("deleteAll")};return{listName:e,listNames:t,filterTodos:n,deleteAll:c}}});n("de62");const ae=k()(le,[["render",re],["__scopeId","data-v-2dad4186"]]);var se=ae,de=Object(o["defineComponent"])({components:{CreateItem:M,TodoItem:ee,FilterItems:se},setup:function(){var e=Object(o["computed"])((function(){return x.getters.id})),t=Object(o["computed"])((function(){return x.getters.todoList})),n=Object(o["computed"])((function(){return x.getters.filteredTodos}));return{id:e,todoList:t,filteredTodos:n}}});n("fb24");const ue=k()(de,[["render",u],["__scopeId","data-v-715b9db0"]]);var me=ue,fe={class:"colorPicker"},pe=["onClick"];function be(e,t,n,c,i,r){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",fe,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.themes,(function(t,n){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{key:"color-".concat(n),class:"colorPicker__item",style:Object(o["normalizeStyle"])("background-color: ".concat(t.color)),onClick:function(n){return e.changeTheme(t)}},null,12,pe)})),128))])}var Oe=Object(o["defineComponent"])({name:"ColorPicker",props:{themes:{type:Array,default:function(){return[]}}},setup:function(e,t){var n=function(e){t.emit("change-theme",e)};return{changeTheme:n}},emits:["change-theme"]});n("4797");const ve=k()(Oe,[["render",be],["__scopeId","data-v-ea187af8"]]);var je=ve,he=Object(o["defineComponent"])({name:"App",components:{TodoList:me,ColorPicker:je},setup:function(){var e=Object(i["a"])(S),t=Object(o["computed"])((function(){return x.getters.theme})),n=function(e){return x.dispatch("setTheme",e)};return x.dispatch("getTheme"),x.dispatch("setAllTodos"),x.dispatch("setId"),{themes:e,theme:t,setTheme:n}}});n("9c1c");const _e=k()(he,[["render",c],["__scopeId","data-v-86da1038"]]);var ke=_e,ge=n("6d5e"),Ee=n.n(ge);n("b751");Object(o["createApp"])(ke).use(x).component("inline-svg",Ee.a).mount("#app")},de62:function(e,t,n){"use strict";n("72a0")},fb24:function(e,t,n){"use strict";n("5c49")}});
//# sourceMappingURL=app.b79df2c3.js.map