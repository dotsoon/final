"use strict";(self["webpackChunksimple_login_app"]=self["webpackChunksimple_login_app"]||[]).push([[995],{5995:function(t,e,a){a.r(e),a.d(e,{default:function(){return p}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"secure"}},[a("h1",[t._v("사진첨부")]),a("br"),a("br"),a("span",[t._v("선택한 견종: "+t._s(t.checked))]),a("br"),a("div",{staticClass:"container"},[a("div",{staticClass:"file-upload-container",on:{dragenter:t.onDragenter,dragover:t.onDragover,dragleave:t.onDragleave,drop:t.onDrop,click:t.onClick}},[a("div",{staticClass:"file-upload"},[t._v(" Drag & Drop Files ")])]),a("input",{ref:"fileInput",staticClass:"file-upload-input",attrs:{type:"file",multiple:""},on:{change:t.onFileChange}}),a("div",{staticClass:"file-upload-list"},t._l(t.fileList,(function(e,s){return a("div",{key:s,staticClass:"file-upload-list__item"},[a("div",{staticClass:"file-upload-list__item__data"},[a("img",{staticClass:"file-upload-list__item__data-thumbnail",attrs:{id:"img1",src:e.src}}),a("div",{staticClass:"file-upload-list__item__data-name"},[t._v(" "+t._s(e.name)+" ")])]),a("div",{staticClass:"file-upload-list__item__btn-remove",on:{click:function(e){return t.handleRemove(s)}}},[t._v(" 삭제 ")])])})),0)]),a("button",{staticClass:"btn",on:{click:t.result}},[t._v("결과")]),t.modal?a("MyModal",{on:{click:t.closeModal}},[a("h1",[t._v("비만 여부를 판별 중입니다!")]),a("div",{staticClass:"spinner-container"},[a("div",{staticClass:"spinner"})]),a("template",{slot:"footer"},[a("button",{on:{click:t.doSend}},[t._v("취소")])])],2):t._e()],1)},i=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"modal",appear:""}},[a("div",{staticClass:"modal modal-overlay",on:{click:function(e){return e.target!==e.currentTarget?null:t.$emit("close")}}},[a("div",{staticClass:"modal-window"},[a("div",{staticClass:"modal-content"},[t._t("default")],2),a("footer",{staticClass:"modal-footer"},[t._t("footer",[a("button",{on:{click:function(e){return t.$emit("close")}}},[t._v("Close")])])],2)])])])},o=[],r=a(1001),n={},d=(0,r.Z)(n,l,o,!1,null,"3b942229",null),c=d.exports,u={components:{MyModal:c},name:"Secure",data(){return{fileList:[],isDragged:"",upload:{userid:JSON.parse(localStorage.getItem("userid")),image:null,dog_breed:JSON.parse(localStorage.getItem("dog_breed"))},modal:!1,checked:JSON.parse(localStorage.getItem("dog_breed"))}},mounted(){this.$emit("authenticated",JSON.parse(localStorage.getItem("authenticated"))),this.$parent.authenticated||this.$router.replace({name:"Login"})},methods:{result(){var t=document.getElementById("img1").src;localStorage.setItem("image",JSON.stringify(t));var e=JSON.parse(localStorage.getItem("image"));this.upload.image=e.split("base64,")[1],null!=this.upload.userid&&null!=this.upload.image&&null!=this.upload.dog_breed?(this.modal=!0,this.$http.post("http://35.76.37.170:8980/dogobesitytest/dogimage/",{upload:this.upload}).then((t=>{if(201==t.status){this.result=t.data["text"];let e=t.data["accuracy"],a=t.data["image"];localStorage.setItem("image_name",JSON.stringify(a)),localStorage.setItem("result",JSON.stringify(this.result)),localStorage.setItem("accuracy",JSON.stringify(e)),this.modal=!1,this.$router.push("./testresult")}400==t.status&&(alert(t.data.message),this.$router.push("./dogimage")),204==t.status&&(alert("강아지 사진을 넣어주세요"),this.modal=!1)})).catch((function(t){alert("error")}))):alert("이미지를 업로드 해 주세요")},closeModal(){this.modal=!1},doSend(){this.closeModal(),this.$router.push("./dogimage").catch((()=>{}))},onClick(){this.$refs.fileInput.click()},onDragenter(t){this.isDragged=!0},onDragleave(t){this.isDragged=!1},onDragover(t){t.preventDefault()},onDrop(t){t.preventDefault(),this.isDragged=!1;const e=t.dataTransfer.files;this.addFiles(e)},onFileChange(t){const e=t.target.files;this.addFiles(e)},async addFiles(t){for(let e=0;e<t.length;e++){const a=await this.readFiles(t[e]);t[e].src=a,this.fileList.push(t[e])}},async readFiles(t){return new Promise(((e,a)=>{const s=new FileReader;s.onload=async t=>{e(t.target.result)},s.readAsDataURL(t)}))},handleRemove(t){this.fileList.splice(t,1)}}},g=u,m=(0,r.Z)(g,s,i,!1,null,null,null),p=m.exports}}]);
//# sourceMappingURL=995-legacy.890bd59f.js.map