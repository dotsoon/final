"use strict";(self["webpackChunksimple_login_app"]=self["webpackChunksimple_login_app"]||[]).push([[649],{7649:function(e,s,t){t.r(s),t.d(s,{default:function(){return l}});var r=function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("div",{attrs:{id:"login"}},[r("img",{attrs:{alt:"Dog",src:t(9145),height:"350px",width:"350px"}}),r("h2",[e._v("로그인")]),r("div",{staticClass:"form-inputs"},[r("label",{attrs:{for:"username"}},[e._v("아 이 디 :")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.userid,expression:"user.userid"}],attrs:{type:"text",id:"username",name:"username",placeholder:"Username"},domProps:{value:e.user.userid},on:{input:function(s){s.target.composing||e.$set(e.user,"userid",s.target.value)}}})]),r("div",{staticClass:"form-inputs"},[r("label",{attrs:{for:"password"}},[e._v("비밀번호 : ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],attrs:{type:"password",id:"password",name:"password",placeholder:"Password"},domProps:{value:e.user.password},on:{input:function(s){s.target.composing||e.$set(e.user,"password",s.target.value)}}})]),r("button",{staticClass:"btn",on:{click:e.login}},[e._v("Login")]),r("button",{staticClass:"btn",on:{click:e.signup}},[e._v("회원가입")])])},a=[];localStorage.clear();var i={name:"Login",data(){return{user:{userid:"",password:""}}},methods:{login(){this.$http.post("http://35.76.37.170:8980/dogobesitytest/",{user:this.user}).then((e=>{200==e.status?(localStorage.setItem("userid",JSON.stringify(this.user.userid)),this.$emit("authenticated",!0),this.$router.replace({name:"Check"})):alert(e.data.message)}),(e=>{alert("로그인 실패! 아이디와 비밀번호를 확인해주세요")})).catch((e=>{alert(e)}))},signup(){this.$router.push("../dogobesitytest/signup").catch((()=>{}))}}},o=i,n=t(1001),u=(0,n.Z)(o,r,a,!1,null,null,null),l=u.exports},9145:function(e,s,t){e.exports=t.p+"img/Dog.9d7ce6f7.jpg"}}]);
//# sourceMappingURL=649.c3fd25e5.js.map