webpackJsonp([1,2],Array(23).concat([function(t,e,n){"use strict";var o=n(2),i=n(22),a=n(130),r=n(124);o.default.use(i.c);var s=new i.c.Store({modules:{test:a.a,myGlobal:r.a}});e.a=s},function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"d",function(){return i}),n.d(e,"b",function(){return a}),n.d(e,"c",function(){return r}),n.d(e,"k",function(){return s}),n.d(e,"f",function(){return l}),n.d(e,"e",function(){return c}),n.d(e,"g",function(){return u}),n.d(e,"h",function(){return d}),n.d(e,"i",function(){return f}),n.d(e,"j",function(){return p});var o="global/as/user_login",i="global/as/login_show",a="global/as/login_hide",r="global/as/get_check_code",s="global/mu/login_loading",l="global/mu/login_onload",c="global/mu/login_submitting",u="global/mu/login_error",d="global/mu/login_show",f="global/mu/login_hide",p="global/mu/get_check_code"},function(t,e,n){"use strict";n.d(e,"b",function(){return o}),n.d(e,"a",function(){return i}),n.d(e,"c",function(){return a}),n.d(e,"d",function(){return r}),n.d(e,"e",function(){return s});var o="test/as/list_request",i="Hello_demo/as/start_main",a="test/mu/list_loading",r="test/mu/list_received",s="test/mu/list_error"},,,,,,,,function(t,e,n){"use strict";var o=n(12),i=n.n(o);e.a=function(t,e){var n=t.query;n._type,n.current,n.keyword;return i()({},t.query)}},,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return n.i(a.a)({url:t,data:e,success:function(t){console.log("rsp",t),t.success?o&&o(t.vars):(console.warn("error: api.req"),i&&i(t))}})}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return n.i(a.a)({url:t,data:e,method:"post",success:function(t){t.success?o&&o(t.vars):(console.warn("error: api.post"),i&&i(t))}})}var a=n(133);n.d(e,"b",function(){return o}),n.d(e,"a",function(){return i})},,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){n(197),n(198);var o=n(5)(n(112),n(210),"data-v-5162d460",null);t.exports=o.exports},function(t,e,n){n(199);var o=n(5)(n(113),n(211),null,null);t.exports=o.exports},function(t,e,n){var o=n(5)(n(116),n(208),null,null);t.exports=o.exports},function(t,e,n){n(196);var o=n(5)(n(117),n(207),null,null);t.exports=o.exports},function(t,e,n){"use strict";var o=n(2),i=n(214),a=n(78),r=(n.n(a),n(79)),s=(n.n(r),n(23),n(33),n(25),n(120)),l=n(119),c=n(118);o.default.use(i.a);var u=function(t){var e=n.i(s.a)(t);console.log("routes",e);var o=new i.a({routes:e});return o.beforeEach(function(e,o,i){c.a.has(e.name)&&(console.log("进入重定向"),i({name:"Hello"})),n.i(l.a)({to:e,from:o,next:i},t)}),console.log("得到的router配置为",o),o};e.a=u},,function(t,e){},function(t,e){},function(t,e,n){n(195);var o=n(5)(n(111),n(206),null,null);t.exports=o.exports},,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="undefined"!=typeof window;o&&(window.Swiper=n(76),n(193)),e.default={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&o&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&o){delete t.options.notNextTick;var e=!1;for(var n in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(n)&&t.options[n]&&(e=!0,t.defaultSwiperClasses[n]=t.options[n]);var i=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(i):i()}};this.options.notNextTick?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(12),i=n.n(o),a=n(17),r=n.n(a),s=n(22),l=n(24),c=n(204),u=n.n(c),d=n(203),f=n.n(d),p=n(80),g=n.n(p);e.default={name:"app",data:function(){return{loginForm:{userName:"",password:"",code:""},loginData:{size:"tiny",confirmButtonText:"确认登录",title:"登录"},loginRules:{userName:{required:!0,validator:this.checkUserName,trigger:"blur"},password:{required:!0,message:"请输入密码",trigger:"blur"},code:{required:!0,message:"请输入验证码",trigger:"blur"}}}},computed:r()({},n.i(s.a)({dialogStep:function(t){return t.myGlobal.dialogStep},loginErrorMsg:function(t){return t.myGlobal.loginErrorMsg},loginDialogVisible:function(t){return t.myGlobal.loginDialogVisible},code:function(t){return t.myGlobal.code}}),{loginFormData:function(){return i()(this.loginData,{visible:this.loginDialogVisible})}}),watch:{loginDialogVisible:function(){console.log("loginDialogVisible 的值改变了",this.loginDialogVisible),this.loginDialogVisible&&this.onLogin()}},methods:r()({},n.i(s.b)({userLogin:l.a,loginHide:l.b,getCheckCode:l.c}),{onLogin:function(){var t=this;console.log("loginFormData11",this.loginFormData),console.log("code",this.code),this.getCheckCode(),this.openModal(this.loginFormData,{beforeConfirm:function(e){console.log("beforeConfirm"),t.$refs.loginForm.validate(function(n){n&&(console.log("dialogStep",t.dialogStep),console.log("loginForm22",t.loginFormData),t.userLogin({userName:t.loginFormData.userName,password:t.loginFormData.password,code:t.loginFormData.code}).then(function(){return"error"===t.dialogStep?void t.showMessage():(t.$message({type:"success",message:"登录成功"}),e())}))})},beforeCancel:function(e){console.log("beforeCancel"),t.loginHide().then(function(){return e()})}})},openModal:function(t,e){for(var n in e)"function"==typeof e[n]&&(t[n]=e[n])},checkUserName:function(t,e,n){return void 0===e||""===e?n(new Error("请输入用户名")):n()},showMessage:function(){this.$message.error(this.loginErrorMsg)},getScroll:function(){window.onscroll=function(){var t=document.querySelector(".header").className.match(/(?:^|\s)header-active(?!\S)/),e=document.querySelector("body").scrollTop;e>0&&!t&&(document.querySelector(".header").className+=" header-active "),0==e&&(document.querySelector(".header").className=document.querySelector(".header").className.replace(/(?:^|\s)header-active(?!\S)/,""))}}}),mounted:function(){this.getScroll()},components:{MyHeader:u.a,MyFooter:f.a,MyModal:g.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(17),i=n.n(o),a=n(22);e.default={name:"hello",data:function(){return{msg:"中间主体内容"}},computed:i()({},n.i(a.a)({items:function(t){return t.test.items}})),methods:{onBack:function(){this.$router.push({path:"demo"})}},beforeRouteLeave:function(t,e,n){console.log("要离开了"),n()}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(17),i=n.n(o),a=n(22);e.default={name:"demo",data:function(){return{msg:"Welcome to Your Vue.js App",imageUrl:""}},computed:i()({},n.i(a.a)({items:function(t){return t.test.items},isRedirect:function(t){return t.test.isRedirect}})),watch:{isRedirect:function(){console.log("值改变了")}},methods:{goToRediract:function(){this.$router.push({path:"/error"})},handleAvatarSuccess:function(t,e){this.imageUrl=URL.createObjectURL(e.raw)},beforeAvatarUpload:function(t){var e="image/jpeg"===t.type,n=t.size/1024/1024<2;return e||this.$message.error("上传头像图片只能是 JPG 格式!"),n||this.$message.error("上传头像图片大小不能超过 2MB!"),e&&n}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Footer"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(17),i=n.n(o),a=n(22),r=(n(23),n(80)),s=n.n(r),l=n(24);e.default={name:"header",data:function(){return{activeIndex:"1",localUserName:""}},computed:i()({},n.i(a.a)({dialogStep:function(t){return t.myGlobal.dialogStep},loginErrorMsg:function(t){return t.myGlobal.loginErrorMsg},loginDialogVisible:function(t){return t.myGlobal.loginDialogVisible},userName:function(t){return t.myGlobal.username}})),watch:{userName:function(){console.log("出发 islogin"),this.isLogin()}},methods:i()({},n.i(a.b)({userLogin:l.a,loginShow:l.d}),{handleSelect:function(t,e){console.log(t,e)},onLogin:function(){this.loginShow()},openModal:function(t,e){t.visible=!0;for(var n in e)"function"==typeof e[n]&&(t[n]=e[n])},checkUserName:function(t,e,n){return void 0===e||""===e?n(new Error("请输入用户名")):n()},checkPwd:function(t,e,n){return void 0===e?n(new Error("请输入密码")):n()},showMessage:function(){this.$message.error(this.loginErrorMsg)},isLogin:function(){this.userName&&(console.log("xiugai "),this.localUserName=this.userName)}}),components:{MyModal:s.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Modal",props:{step:{type:String,default:"onload"},data:{type:Object,default:function(){return{title:"",visible:!1,size:"",confirmButtonText:"确定",cancelButtonText:"取消",beforeConfirm:null,beforeCancel:null,afterConfirm:null,afterCancel:null}}}},computed:{loading:function(){return"loading"===this.step||"submitting"===this.step},confirmText:function(){return"loading"===this.step?"加载中":"submitting"===this.step?"提交中":"确定"}},methods:{onOk:function(){this.data&&"function"==typeof this.data.beforeConfirm?this.data.beforeConfirm(this.doOk.bind(this)):this.doOk()},onClose:function(){this.data&&"function"==typeof this.data.beforeCancel?this.data.beforeCancel(this.doClose.bind(this)):this.doClose()},doOk:function(){this.data.visible=!1,this.data&&"function"==typeof this.data.afterConfirm&&this.data.afterConfirm()},doClose:function(){this.data.visible=!1,this.data&&"function"==typeof this.data.afterCancel&&this.data.afterCancel()},afterClose:function(){this.onClose()}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(53);n.n(o);e.default={name:"index",data:function(){return{swiperOption:{autoplay:3500,loop:!0,setWrapperSize:!0,pagination:".swiper-pagination",paginationClickable:!0,observeParents:!0,effect:"fade",width:window.innerWidth,height:window.innerHeight},swiperSlides:[{img:"/img/test.png"},{img:"/img/test1.jpg"}]}},components:{swiper:o.swiper,swiperSlide:o.swiperSlide}}},function(t,e,n){"use strict";var o=n(136),i=n.n(o);n.d(e,"a",function(){return a});var a=new i.a(["error404"])},function(t,e,n){"use strict";var o=n(17),i=n.n(o),a=n(33);e.a=function(t,e){var o=t.to,r=t.from,s=t.next;console.debug("全局路由钩子.beforeEach",o,r);var l="";/^\//.test(o.path)&&(l=o.path.slice(1).replace(/\//g,"_"));var c=l+"/as/start_main",u=e.hasOwnProperty(c);if(console.debug("触发页面初始 ACTIONS",c,u,e._actions[c]),e._actions[c]&&e._actions[c].length){var d=n.i(a.a)(o),f=i()({},d);e.dispatch(c,f)}s()}},function(t,e,n){"use strict";function o(t){var e=function(t,e){t._path=e._path};return u.forEach(function(t,n){t.children&&t.children.forEach(function(n,o){e(n,{_path:t.path+"/"+n.path})}),e(t,{_path:t.path})}),u}var i=n(78),a=n.n(i),r=n(81),s=n.n(r),l=n(79),c=n.n(l);n(23),n(33),n(25);n.d(e,"a",function(){return o});var u=[{label:"首页",path:"/",name:"Index",component:s.a},{path:"/Hello",name:"Hello",component:a.a,children:[{path:"demo",component:c.a}]}]},function(t,e,n){"use strict";var o,i=n(26),a=n.n(i),r=n(24),s=n(122),l=n(55),c=(o={},a()(o,r.a,function(t,e){var n=t.commit;t.state,t.dispatch;return n(r.e),l.a(s.a.login,e,function(t){console.log("用户登录成功",e),n(r.f,t)},function(t){n(r.g,t),console.log("用户登录失败")})}),a()(o,r.d,function(t,e){var n=t.commit;t.state,t.dispatch;n(r.h)}),a()(o,r.b,function(t,e){var n=t.commit;t.state,t.dispatch;n(r.i)}),a()(o,r.c,function(t,e){var n=t.commit;t.state,t.dispatch;return l.b(s.a.getCode,e,function(t){n(r.j,t)},function(t){console.log("获取验证码失败")})}),o);e.a=c},function(t,e,n){"use strict";var o={login:"http://bbs.chenxubiao.cn/user/login/data",regester:"http://bbs.chenxubiao.cn/user/regester/data",error:"/data?name=error",getCode:"data?name=get_check_code"};e.a=o},function(t,e){},function(t,e,n){"use strict";var o=n(126),i=n(125),a=n(121),r=n(123),s=n.n(r);e.a={state:o.a,getters:s.a,mutations:i.a,actions:a.a}},function(t,e,n){"use strict";var o,i=n(26),a=n.n(i),r=n(12),s=n.n(r),l=n(24);e.a=o={},a()(o,l.k,function(t,e){console.log("M_LOGIN_LOADING",e)}),a()(o,l.e,function(t,e){console.log("M_LOGIN_SUBMITTING state",t),s()(t,{dialogStep:"submitting"}),console.log("state.dialogStep",t.dialogStep)}),a()(o,l.f,function(t,e){console.log("M_LOGIN_ONLOAD 要回显用户信息",e),s()(t,{dialogStep:"onload",username:e.userName})}),a()(o,l.g,function(t,e){console.log("M_LOGIN_ERROR",e),s()(t,{dialogStep:"error",loginErrorMsg:e.message})}),a()(o,l.h,function(t,e){console.log("M_LOGIN_SHOW",e),s()(t,{loginDialogVisible:!0}),console.log("M_LOGIN_SHOW loginDialogVisible",t.loginDialogVisible)}),a()(o,l.i,function(t,e){console.log("M_LOGIN_HIDE",e),s()(t,{loginDialogVisible:!1}),console.log("M_LOGIN_HIDE loginDialogVisible",t.loginDialogVisible)}),a()(o,l.j,function(t,e){console.log("M_GET_CHECK_CODE"),s()(t,{code:e.code}),console.log("M_GET_CHECK_CODE checkCode",t.code)})},function(t,e,n){"use strict";e.a={dialogStep:"",loginErrorMsg:"",loginDialogVisible:!1,username:"",code:""}},function(t,e,n){"use strict";var o,i=n(26),a=n.n(i),r=n(25),s=n(128),l=n(55),c=(o={},a()(o,r.a,function(t,e){t.commit,t.state;(0,t.dispatch)(r.b,e)}),a()(o,r.b,function(t,e){var n=t.commit;t.state,t.dispatch;return n(r.c),console.log("A_LIST_REQUEST"),l.b(s.a.list,e,function(t){n(r.d,t),console.log("成功",t)},function(t){console.log("失败",t),n(r.e,t)})}),o);e.a=c},function(t,e,n){"use strict";e.a={list:"/data?name=items_management_category",error:"/data?name=error"}},function(t,e,n){"use strict";e.a={}},function(t,e,n){"use strict";var o=n(132),i=n(131),a=n(127),r=n(129);e.a={state:o.a,getters:r.a,mutations:i.a,actions:a.a}},function(t,e,n){"use strict";var o,i=n(26),a=n.n(i),r=n(12),s=n.n(r),l=n(25);e.a=o={},a()(o,l.c,function(t,e){s()(t,{itemsStep:"loading"})}),a()(o,l.d,function(t,e){console.log("M_LIST_RECEIVED",e),s()(t,e,{itemsStep:"onload"}),console.log("M_LIST_RECEIVED",t)}),a()(o,l.e,function(t,e){s()(t,{itemsStep:"error",errorMessage:e.errorMessage,isRedirect:!0}),console.log("M_LIST_ERROR",e)})},function(t,e,n){"use strict";e.a={itemsStep:"loading",isRedirect:!1,items:[{test:1},{test:2}],pageBean:{current:1,count:0,total:0},errorMessage:""}},function(t,e,n){"use strict";var o=n(135),i=n.n(o),a=n(12),r=n.n(a),s=n(200),l=n.n(s),c=n(2);e.a=function(t){var e=2;if(1==e&&(t.type=t.method,ajax(t)),2==e)return t=r()({},{crossOrigin:!0},t),l()(t);if(3==e){var n=r()({},{url:"",method:"get",data:null,emulateJSON:!0,success:null},t);return"get"==n.method?n.params=n.data:n.body=n.data,new i.a(function(t,e){c.default.http(n).then(function(e){n.success(e.body),t()},function(t){e()})})}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e,n){var o=n(5)(n(109),n(213),null,null);t.exports=o.exports},function(t,e,n){var o=n(5)(n(110),n(212),null,null);t.exports=o.exports},function(t,e,n){n(194);var o=n(5)(n(114),n(205),null,null);t.exports=o.exports},function(t,e,n){var o=n(5)(n(115),n(209),null,null);t.exports=o.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-footer"},[t._v("\n    Copyright © 2017 图片社区 "),n("br"),t._v("All Rights Reserved By chenxubiao\n")])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("MyModal",{staticClass:"my-login-box",staticStyle:{"text-align":"left"},attrs:{data:t.loginData,step:t.dialogStep}},[n("el-form",{ref:"loginForm",attrs:{model:t.loginFormData,rules:t.loginRules,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"用户名：",prop:"userName"}},[n("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:t.loginFormData.userName,callback:function(e){t.loginFormData.userName=e},expression:"loginFormData.userName"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"密码：",prop:"password"}},[n("el-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:t.loginFormData.password,callback:function(e){t.loginFormData.password=e},expression:"loginFormData.password"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"验证码",prop:"code"}},[n("el-input",{staticStyle:{width:"120px"},model:{value:t.loginFormData.code,callback:function(e){t.loginFormData.code=e},expression:"loginFormData.code"}}),t._v(" "),n("img",{staticStyle:{width:"120px",height:"40px","vertical-align":"middle"},attrs:{src:"http://bbs.chenxubiao.cn/kaptcha-image",alt:""}})],1)],1)],1),t._v(" "),n("el-row",{staticClass:"header",attrs:{type:"flex",justify:"space-around",align:"center"}},[n("el-col",{staticClass:"logo"},[t._v("\n            图片社区\n        ")]),t._v(" "),n("el-col",{staticClass:"my_header"},[n("MyHeader")],1)],1),t._v(" "),n("el-row",{staticClass:"container"},[n("router-view")],1),t._v(" "),n("el-row",[n("MyFooter")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index"},[n("div",{staticClass:"my-swiper"},[n("swiper",{staticClass:"my-swiper-container",attrs:{options:t.swiperOption}},t._l(t.swiperSlides,function(t){return n("swiperSlide",{key:""},[n("div",{staticClass:"my-swiper-box",style:{backgroundImage:"url("+t.img+")"}})])})),t._v(" "),n("div",{staticClass:"swiper-pagination",slot:"pagination"})],1),t._v(" "),n("section",{staticClass:"show-banners"},[n("el-row",{attrs:{type:"flex",justify:"space-between"}},t._l(6,function(e,o){return n("el-col",{key:""},[n("el-card",{attrs:{"body-style":{padding:"0px"}}},[n("img",{staticClass:"image",attrs:{src:"/img/test.png"}}),t._v(" "),n("div",{staticStyle:{padding:"14px"}},[n("span",[t._v("图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍")]),t._v(" "),n("div",{staticClass:"bottom clearfix"},[n("time",{staticClass:"time"},[t._v(t._s(t._f("data")(0xb3a73ce5b59)))]),t._v(" "),n("router-link",{staticClass:"button",attrs:{to:"/home"}},[n("img",{staticStyle:{width:"40px",height:"40px","border-radius":"100%"},attrs:{src:"/img/user.jpeg",alt:""}}),t._v(" "),n("span",[t._v("chenxb")])])],1)])])],1)}))],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{ref:"modal",attrs:{title:t.data.title,size:t.data.size,"close-on-click-modal":!1,"close-on-press-escape":!1},on:{close:t.onClose},model:{value:t.data.visible,callback:function(e){t.data.visible=e},expression:"data.visible"}},[n("div",[t._t("default")],2),t._v(" "),n("span",{staticClass:"dialog-footer",slot:"footer"},[n("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.onOk}},[t._v(t._s(t.data.confirmButtonText||"确定"))]),t._v(" "),n("el-button",{on:{click:t.onClose}},[t._v(t._s(t.data.cancelButtonText||"取消"))])],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal"},on:{select:t.handleSelect}},[n("el-menu-item",{attrs:{index:"1"}},[n("router-link",{attrs:{to:"/Hello/demo"}},[t._v("demo页")])],1),t._v(" "),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[n("router-link",{attrs:{to:"/"}},[t._v("index页")])],1),t._v(" "),n("el-menu-item",{attrs:{index:"2-1"}},[t._v("选项1")]),t._v(" "),n("el-menu-item",{attrs:{index:"2-2"}},[t._v("选项2")]),t._v(" "),n("el-menu-item",{attrs:{index:"2-3"}},[t._v("选项3")])],2),t._v(" "),t.localUserName?n("el-submenu",{staticClass:"userInfoBox",attrs:{index:"4"}},[n("template",{slot:"title"},[n("img",{staticStyle:{width:"40px",height:"40px","border-radius":"100%"},attrs:{src:"static/img/userImg.jpeg",alt:""}}),t._v(" "),n("span",[t._v(t._s(t.localUserName))])]),t._v(" "),n("el-menu-item",{attrs:{index:"4-1"}},[t._v("选项1")]),t._v(" "),n("el-menu-item",{attrs:{index:"4-2"}},[t._v("选项2")]),t._v(" "),n("el-menu-item",{attrs:{index:"4-3"}},[t._v("选项3")])],2):n("el-menu-item",{attrs:{index:"3"}},[n("el-button",{attrs:{type:"text"},on:{click:t.onLogin}},[t._v("请登录")])],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("transition",{attrs:{name:"slide-fade"}},[n("router-view")],1),t._v(" "),n("h1",{staticClass:"chenxb-style"},[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("Essential Links")]),t._v(" "),t._l(t.items,function(e){return[n("div",[t._v(t._s(e.test))])]}),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.onBack}},[t._v("进入demo")]),t._v(" "),n("el-button",{attrs:{type:"primary"}},[t._v("主要按钮")])],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"name"},[t._m(0),t._v(" "),t._l(t.items,function(e){return n("div",[t._v(t._s(e.test))])}),t._v("\n    "+t._s(t.isRedirect)+"\n")],2),t._v(" "),n("el-upload",{staticClass:"avatar-uploader",attrs:{action:"/file-upload","show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload}},[t.imageUrl?n("img",{staticClass:"avatar",attrs:{src:t.imageUrl}}):n("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),n("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.slideClass},[t._t("default")],2)},staticRenderFns:[]}},,,,function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),i=n(86),a=n.n(i),r=n(82),s=n(23),l=n(83),c=n.n(l),u=n(53),d=n.n(u),f=n(84),p=(n.n(f),n(85));n.n(p);o.default.config.productionTip=!1,o.default.use(c.a),o.default.use(d.a),o.default.filter("data",function(t){function e(t){return t<10?"0"+t:t}var n=new Date(parseInt(t)),o=n.getFullYear(),i=n.getMonth()+1,a=n.getDate(),r=n.getHours(),s=n.getMinutes();return o+"-"+e(i)+"-"+e(a)+"  "+e(r)+":"+e(s)}),new o.default({el:"#app",router:n.i(r.a)(s.a),store:s.a,template:"<App/>",components:{App:a.a}})}]),[218]);
//# sourceMappingURL=app.9f1baaf6880f80230cd3.js.map