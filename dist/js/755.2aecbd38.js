"use strict";(self["webpackChunksimple_login_app"]=self["webpackChunksimple_login_app"]||[]).push([[755],{2755:function(e,c,a){a.r(c),a.d(c,{default:function(){return n}});var t=function(){var e=this,c=e.$createElement,t=e._self._c||c;return t("div",{attrs:{id:"dogcheck"}},[t("h1",[e._v("견종선택")]),t("div",{staticClass:"flex1"},[t("div",{staticClass:"dac"},[t("img",{attrs:{alt:"Dog",src:a(9897),height:"150px",width:"150px"}}),t("div",[t("label",{attrs:{for:"dac"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],attrs:{type:"checkbox",id:"dac",value:"Dachshund"},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,"Dachshund")>-1:e.checked},on:{click:function(c){return e.check_one()},change:function(c){var a=e.checked,t=c.target,i=!!t.checked;if(Array.isArray(a)){var r="Dachshund",d=e._i(a,r);t.checked?d<0&&(e.checked=a.concat([r])):d>-1&&(e.checked=a.slice(0,d).concat(a.slice(d+1)))}else e.checked=i}}}),e._v(" 닥스훈트 ")])])]),t("div",{staticClass:"bea"},[t("img",{attrs:{alt:"Dog",src:a(1406),height:"150px",width:"150px"}}),t("div",[t("label",{attrs:{for:"bea"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],attrs:{type:"checkbox",id:"bea",value:"Beagle"},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,"Beagle")>-1:e.checked},on:{click:function(c){return e.check_one()},change:function(c){var a=e.checked,t=c.target,i=!!t.checked;if(Array.isArray(a)){var r="Beagle",d=e._i(a,r);t.checked?d<0&&(e.checked=a.concat([r])):d>-1&&(e.checked=a.slice(0,d).concat(a.slice(d+1)))}else e.checked=i}}}),e._v(" 비글 ")])])]),t("div",{staticClass:"ret"},[t("img",{attrs:{alt:"Dog",src:a(4369),height:"150px",width:"150px"}}),t("div",[t("label",{attrs:{for:"ret"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],attrs:{type:"checkbox",id:"ret",value:"Retriever"},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,"Retriever")>-1:e.checked},on:{click:function(c){return e.check_one()},change:function(c){var a=e.checked,t=c.target,i=!!t.checked;if(Array.isArray(a)){var r="Retriever",d=e._i(a,r);t.checked?d<0&&(e.checked=a.concat([r])):d>-1&&(e.checked=a.slice(0,d).concat(a.slice(d+1)))}else e.checked=i}}}),e._v(" 리트리버 ")])])])]),t("div",{staticClass:"flex2"},[t("div",{staticClass:"mal"},[t("img",{attrs:{alt:"Dog",src:a(1251),height:"150px",width:"150px"}}),t("div",[t("label",{attrs:{for:"mal"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],attrs:{type:"checkbox",id:"mal",value:"Maltese"},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,"Maltese")>-1:e.checked},on:{click:function(c){return e.check_one()},change:function(c){var a=e.checked,t=c.target,i=!!t.checked;if(Array.isArray(a)){var r="Maltese",d=e._i(a,r);t.checked?d<0&&(e.checked=a.concat([r])):d>-1&&(e.checked=a.slice(0,d).concat(a.slice(d+1)))}else e.checked=i}}}),e._v(" 말티즈 ")])])]),t("div",{staticClass:"wel"},[t("img",{attrs:{alt:"Dog",src:a(8600),height:"150px",width:"150px"}}),t("div",[t("label",{attrs:{for:"welsh"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],attrs:{type:"checkbox",id:"welsh",value:"Welsh Corgi"},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,"Welsh Corgi")>-1:e.checked},on:{click:function(c){return e.check_one()},change:function(c){var a=e.checked,t=c.target,i=!!t.checked;if(Array.isArray(a)){var r="Welsh Corgi",d=e._i(a,r);t.checked?d<0&&(e.checked=a.concat([r])):d>-1&&(e.checked=a.slice(0,d).concat(a.slice(d+1)))}else e.checked=i}}}),e._v(" 웰시코기 ")])])]),t("div",{staticClass:"chi"},[t("img",{attrs:{alt:"Dog",src:a(3516),height:"150px",width:"150px"}}),t("div",[t("label",{attrs:{for:"chi"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],attrs:{type:"checkbox",id:"chi",value:"Chihuahua"},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,"Chihuahua")>-1:e.checked},on:{click:function(c){return e.check_one()},change:function(c){var a=e.checked,t=c.target,i=!!t.checked;if(Array.isArray(a)){var r="Chihuahua",d=e._i(a,r);t.checked?d<0&&(e.checked=a.concat([r])):d>-1&&(e.checked=a.slice(0,d).concat(a.slice(d+1)))}else e.checked=i}}}),e._v(" 치와와 ")])])])]),t("div",[t("br"),t("br"),t("span",[e._v(e._s(e.checked))]),t("br"),t("button",{staticClass:"btn",on:{click:function(c){return e.secure()}}},[e._v("다음")])])])},i=[],r={name:"dogcheck",data(){return{checked:[]}},methods:{check_one:function(){this.checked=[]},secure(){localStorage.setItem("dog_breed",JSON.stringify(this.checked[0])),this.$router.push("./dogimage").catch((()=>{}))}}},d=r,h=a(1001),s=(0,h.Z)(d,t,i,!1,null,"9ada657a",null),n=s.exports},1406:function(e,c,a){e.exports=a.p+"img/bea1.941c54ad.png"},3516:function(e,c,a){e.exports=a.p+"img/chi1.b52af697.png"},9897:function(e,c,a){e.exports=a.p+"img/da1.406eafac.png"},1251:function(e,c,a){e.exports=a.p+"img/mal1.8df80b5b.png"},4369:function(e,c,a){e.exports=a.p+"img/ret1.df79c80d.png"},8600:function(e,c,a){e.exports=a.p+"img/wel1.b74a9ccc.png"}}]);
//# sourceMappingURL=755.2aecbd38.js.map