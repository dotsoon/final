"use strict";(self["webpackChunksimple_login_app"]=self["webpackChunksimple_login_app"]||[]).push([[358],{5358:function(s,e,t){t.r(e),t.d(e,{default:function(){return u}});var a=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("form",{on:{submit:function(e){return e.preventDefault(),s.signUp(e)}}},[t("div",{attrs:{id:"signup"}},[t("div",{staticClass:"form-inputs"},[t("label",{attrs:{for:"username"}},[s._v("아이디 ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:s.user.userid,expression:"user.userid"}],attrs:{id:"username",type:"text",placeholder:"아이디"},domProps:{value:s.user.userid},on:{input:function(e){e.target.composing||s.$set(s.user,"userid",e.target.value)}}}),s.idValid?s._e():t("div",[s._v(" 유효하지 않은 아이디입니다. ")])]),t("div",{staticClass:"form-inputs"},[t("label",{attrs:{for:"password"}},[s._v("비밀번호 ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:s.user.password,expression:"user.password"}],attrs:{id:"password",type:"password",placeholder:"비밀번호"},domProps:{value:s.user.password},on:{blur:s.passwordValid,input:function(e){e.target.composing||s.$set(s.user,"password",e.target.value)}}}),s.passwordValidFlag?s._e():t("div",[s._v(" 비밀번호는 숫자+영문자 조합으로 구성해주세요. ")])]),t("div",{staticClass:"form-inputs"},[t("label",{attrs:{for:"passwordcheck"}},[s._v("비밀번호 확인 ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:s.passwordCheck,expression:"passwordCheck"}],attrs:{id:"passwordcheck",type:"password",placeholder:"비밀번호 확인"},domProps:{value:s.passwordCheck},on:{blur:s.passwordCheckValid,input:function(e){e.target.composing||(s.passwordCheck=e.target.value)}}}),s.passwordCheckFlag?s._e():t("div",[s._v(" 비밀번호가 동일하지 않습니다. ")])])]),t("button",{staticClass:"btn",attrs:{type:"submit"}},[s._v("회원 가입")]),t("div",[t("router-link",{staticClass:"btn-signup",attrs:{tag:"button",id:"btn-signup",to:"./"}},[s._v("취소")])],1)])},r=[],i={data(){return{user:{userid:null,password:""},passwordValidFlag:!0,passwordCheck:"",passwordCheckFlag:!0,idValidflag:!0}},computed:{idValid(){return/^[A-Za-z0-9]+$/.test(this.user.userid)}},methods:{passwordValid(){/^(?=.*[a-z])(?=.*[0-9]).{4,16}$/.test(this.user.password)?this.passwordValidFlag=!0:this.passwordValidFlag=!1},passwordCheckValid(){this.user.password==this.passwordCheck?this.passwordCheckFlag=!0:this.passwordCheckFlag=!1},signUp(){null!=this.user.userid&&null!=this.user.password&&null!=this.passwordCheck?this.idValid&&this.passwordValidFlag&&this.passwordCheckFlag?this.$http.post("http://35.76.37.170:8980/dogobesitytest/signup/",{user:this.user}).then((s=>{201==s.status&&(alert("회원가입 성공!"),this.$router.replace({name:"Login"})),409==s.status&&alert("이미 존재하는 아이디 입니다")})).catch((function(s){alert("error")})):alert("유효성을 확인해 주세요"):alert("값을 입력해 주세요")}}},d=i,o=t(1001),l=(0,o.Z)(d,a,r,!1,null,null,null),u=l.exports}}]);
//# sourceMappingURL=358.cfba4bc6.js.map