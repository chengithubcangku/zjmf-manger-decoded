(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Second~31ecd969"],{2532:function(e,n,t){"use strict";var r=t("23e7"),o=t("5a34"),a=t("1d80"),i=t("ab13");r({target:"String",proto:!0,forced:!i("includes")},{includes:function(e){return!!~String(a(this)).indexOf(o(e),arguments.length>1?arguments[1]:void 0)}})},"4de4":function(e,n,t){"use strict";var r=t("23e7"),o=t("b727").filter,a=t("1dde"),i=t("ae40"),c=a("filter"),s=i("filter");r({target:"Array",proto:!0,forced:!c||!s},{filter:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},"5a34":function(e,n,t){var r=t("44e7");e.exports=function(e){if(r(e))throw TypeError("The method doesn't accept regular expressions");return e}},"6d57":function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"box"},[t("el-row",{staticClass:"topform_wrap"},[t("el-form",{ref:"elForm",attrs:{model:e.formData,"label-width":"140px","label-position":"top"}},[t("el-form-item",{attrs:{label:e.$lang.two_secondary_is_on,prop:"second_verify_home"}},[t("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:e.formData.second_verify_home,callback:function(n){e.$set(e.formData,"second_verify_home",n)},expression:"formData.second_verify_home"}})],1),"1"===e.formData.second_verify_home?t("el-form-item",{attrs:{label:e.$lang.foreground_verification_method,prop:"second_verify_action_home_type"}},[t("el-checkbox-group",{model:{value:e.formData.second_verify_action_home_type,callback:function(n){e.$set(e.formData,"second_verify_action_home_type",n)},expression:"formData.second_verify_action_home_type"}},e._l(e.pageData.home_type,(function(n,r){return t("el-checkbox",{key:r,attrs:{label:n.name}},[e._v(e._s(n.name_zh)+" ")])})),1)],1):e._e(),"1"===e.formData.second_verify_home?t("el-form-item",{attrs:{label:e.$lang.front_desk_action,prop:"second_verify_action_home"}},[t("el-checkbox-group",{model:{value:e.formData.second_verify_action_home,callback:function(n){e.$set(e.formData,"second_verify_action_home",n)},expression:"formData.second_verify_action_home"}},e._l(e.pageData.home_action,(function(n,r){return t("el-checkbox",{key:r,attrs:{label:n.name}},[e._v(" "+e._s(n.name_zh))])})),1)],1):e._e(),t("el-form-item",{attrs:{label:e.$lang.two_secondary_is_on_last,prop:"second_verify_admin"}},[t("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:e.formData.second_verify_admin,callback:function(n){e.$set(e.formData,"second_verify_admin",n)},expression:"formData.second_verify_admin"}})],1),"1"===e.formData.second_verify_admin?t("el-form-item",{attrs:{label:e.$lang.last_desk_action,prop:"second_verify_action_admin"}},[t("el-checkbox-group",{model:{value:e.formData.second_verify_action_admin,callback:function(n){e.$set(e.formData,"second_verify_action_admin",n)},expression:"formData.second_verify_action_admin"}},e._l(e.pageData.admin_action,(function(n,r){return t("el-checkbox",{key:r,attrs:{label:n.name}},[e._v(" "+e._s(n.name_zh))])})),1)],1):e._e()],1)],1),t("div",{staticClass:"bottomOperationAdd"},[t("el-button",{attrs:{size:"small",type:"primary",loading:e.btnLoading},on:{click:e.submitForm}},[e._v(e._s(e.$lang.save_the_changes))]),t("el-button",{attrs:{size:"small"},on:{click:e.resetForm}},[e._v(e._s(e.$lang.cancel_changes))])],1),t("second",{attrs:{secondVerifyVis:e.secondVerifyVis,secondAction:e.secondAction},on:{secondClose:function(n){e.secondVerifyVis=!1},secondeVerifySuccess:e.secondeVerifySuccess}})],1)},o=[],a=(t("4de4"),t("caad"),t("2532"),t("96cf"),t("1da1")),i=t("a494"),c=t("bbcf"),s=t("7ded"),u={data:function(){return{screenWidth:document.body.clientWidth,pageData:{admin_action:[],home_action:[],home_type:[]},formData:{second_verify_home:"0",second_verify_action_home_type:[],second_verify_action_home:[],second_verify_admin:"0",second_verify_action_admin:[]},btnLoading:!1,second_verify_admin:0,second_verify_action_admin:[],secondVerifyVis:!1,secondAction:"second_verify_set"}},components:{second:c["a"]},methods:{getPageData:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var t,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(i["D"])();case 2:t=n.sent,r=t.data,200!==r.status?e.$message.error(r.msg):(e.pageData=r.data,e.formData.second_verify_home=r.data.second_verify_home,e.formData.second_verify_action_home_type=r.data.second_verify_action_home_type.filter((function(e){return""!==e})),e.formData.second_verify_action_home=r.data.second_verify_action_home.filter((function(e){return""!==e})),e.formData.second_verify_admin=r.data.second_verify_admin,e.formData.second_verify_action_admin=r.data.second_verify_action_admin.filter((function(e){return""!==e})));case 5:case"end":return n.stop()}}),n)})))()},submitForm:function(){var e=this;this.$refs.elForm.validate(function(){var n=Object(a["a"])(regeneratorRuntime.mark((function n(t){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t){n.next=2;break}return n.abrupt("return",!1);case 2:1===e.second_verify_admin&&e.second_verify_action_admin.includes("second_verify_set")?e.secondVerifyVis=!0:e.submitApi();case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())},submitApi:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var t,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.btnLoading=!0,n.next=3,Object(i["C"])(e.formData);case 3:t=n.sent,r=t.data,200!==r.status?e.$message.error(r.msg):(e.getPageData(),e.$message.success(r.msg),e.secondVerifyVis=!1),e.btnLoading=!1;case 7:case"end":return n.stop()}}),n)})))()},resetForm:function(){this.getPageData()},getCommonData:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var t,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(s["b"])();case 2:if(t=n.sent,r=t.data,200===r.status){n.next=6;break}return n.abrupt("return",!1);case 6:e.second_verify_admin=parseInt(r.data.second_verify_admin),e.second_verify_action_admin=r.data.second_verify_action_admin;case 8:case"end":return n.stop()}}),n)})))()},secondeVerifySuccess:function(e){this.formData.code=e,this.submitApi()},resize:function(){this.screenWidth=document.body.clientWidth}},created:function(){this.getPageData(),this.getCommonData()},mounted:function(){window.addEventListener("resize",this.resize)}},d=u,f=t("2877"),l=Object(f["a"])(d,r,o,!1,null,"536c1218",null);n["default"]=l.exports},a494:function(e,n,t){"use strict";t.d(n,"f",(function(){return o})),t.d(n,"r",(function(){return a})),t.d(n,"h",(function(){return i})),t.d(n,"t",(function(){return c})),t.d(n,"n",(function(){return s})),t.d(n,"z",(function(){return u})),t.d(n,"g",(function(){return d})),t.d(n,"s",(function(){return f})),t.d(n,"l",(function(){return l})),t.d(n,"x",(function(){return _})),t.d(n,"k",(function(){return m})),t.d(n,"w",(function(){return g})),t.d(n,"m",(function(){return p})),t.d(n,"y",(function(){return h})),t.d(n,"j",(function(){return v})),t.d(n,"v",(function(){return y})),t.d(n,"i",(function(){return b})),t.d(n,"u",(function(){return V})),t.d(n,"o",(function(){return D})),t.d(n,"p",(function(){return O})),t.d(n,"A",(function(){return j})),t.d(n,"B",(function(){return w})),t.d(n,"a",(function(){return $})),t.d(n,"b",(function(){return x})),t.d(n,"D",(function(){return k})),t.d(n,"C",(function(){return F})),t.d(n,"e",(function(){return S})),t.d(n,"E",(function(){return C})),t.d(n,"q",(function(){return R})),t.d(n,"c",(function(){return A})),t.d(n,"d",(function(){return z}));var r=t("a27e");function o(){return Object(r["a"])({url:"config_general/general"})}function a(e){return Object(r["a"])({url:"config_general/general",method:"post",data:e})}function i(){return Object(r["a"])({url:"config_general/local"})}function c(e){return Object(r["a"])({url:"config_general/local",method:"post",data:e})}function s(){return Object(r["a"])({url:"config_general/support"})}function u(e){return Object(r["a"])({url:"config_general/support",method:"post",data:e})}function d(){return Object(r["a"])({url:"config_general/invoice"})}function f(e){return Object(r["a"])({url:"config_general/invoice",method:"post",data:e})}function l(){return Object(r["a"])({url:"config_general/recharge"})}function _(e){return Object(r["a"])({url:"config_general/recharge",method:"post",data:e})}function m(){return Object(r["a"])({url:"config_general/affiliate"})}function g(e){return Object(r["a"])({url:"config_general/affiliate",method:"post",data:e})}function p(){return Object(r["a"])({url:"config_general/safe"})}function h(e){return Object(r["a"])({url:"config_general/safe",method:"post",data:e})}function v(){return Object(r["a"])({url:"config_general/other"})}function y(e){return Object(r["a"])({url:"config_general/other",method:"post",data:e})}function b(){return Object(r["a"])({url:"config_general/register_login_page"})}function V(e){return Object(r["a"])({url:"config_general/register_login",method:"post",data:e})}function D(){return Object(r["a"])({url:"config_general/invoice_page"})}function O(e){return Object(r["a"])({url:"config_general/invoice_post",method:"post",data:e})}function j(){return Object(r["a"])({url:"config_general/productgroup_page"})}function w(e){return Object(r["a"])({url:"config_general/productgroup",method:"post",data:e})}function $(){return Object(r["a"])({url:"config_general/apiconfig"})}function x(e){return Object(r["a"])({url:"config_general/apiconfig",method:"post",data:e})}function k(){return Object(r["a"])({url:"config_general/secondverify"})}function F(e){return Object(r["a"])({url:"config_general/secondverify",method:"post",data:e})}function S(){return Object(r["a"])({url:"config_general/captcha_page"})}function C(e){return Object(r["a"])({url:"config_general/register_login_captcha",method:"post",data:e})}function R(e){return Object(r["a"])({url:"config_general/navgrouporder",params:e})}function A(e){return Object(r["a"])({url:"config_general/buy_product_page",params:e})}function z(e){return Object(r["a"])({url:"config_general/buy_product",method:"post",data:e})}},ab13:function(e,n,t){var r=t("b622"),o=r("match");e.exports=function(e){var n=/./;try{"/./"[e](n)}catch(t){try{return n[o]=!1,"/./"[e](n)}catch(r){}}return!1}},bbcf:function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("el-dialog",e._g(e._b({attrs:{visible:e.mySecondVerifyVis,title:e.$lang.secondary_validation,width:"500px"},on:{"update:visible":function(n){e.mySecondVerifyVis=n},close:e.secondDialogClose}},"el-dialog",e.$attrs,!1),e.$listeners),[t("el-form",{ref:"secondVerifyForm",attrs:{model:e.secondVerifyFormData,rules:e.secondVerifyRules,size:"medium","label-width":"130px"}},[t("el-form-item",{attrs:{label:e.$lang.verification_code,prop:"code"}},[t("el-input",{style:{width:"100%"},attrs:{placeholder:e.$lang.enter_verification_code,clearable:""},model:{value:e.secondVerifyFormData.code,callback:function(n){e.$set(e.secondVerifyFormData,"code",n)},expression:"secondVerifyFormData.code"}},[t("el-button",{attrs:{slot:"append",disabled:e.changeBtnValue!==e.$lang.get_code},on:{click:e.sendCode},slot:"append"},[e._v(e._s(e.changeBtnValue))])],1)],1)],1),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:e.secondVerifyClose}},[e._v(e._s(e.$lang.cancel))]),t("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:e.secondVerifySubmit}},[e._v(e._s(e.$lang.confirm))])],1)],1)],1)},o=[],a=(t("96cf"),t("1da1")),i=t("7ded"),c={props:{secondVerifyVis:{type:Boolean,default:!1},secondAction:{type:String,default:""}},data:function(){return{mySecondVerifyVis:!1,changeBtnValue:this.$lang.get_code,secondVerifyFormData:{code:void 0},secondVerifyRules:{code:[{required:!0,message:this.$lang.enter_verification_code,trigger:"blur"}]},btnLoading:!1,selectedTypeAccount:""}},methods:{secondDialogClose:function(){this.$emit("secondClose",!1),this.$refs.secondVerifyForm.clearValidate(),this.$refs.secondVerifyForm.resetFields()},countDown:function(){var e=this,n=60;this.changeBtnValue=n+"s"+this.$lang.try_again,this.timer=setInterval((function(){0===n?(clearInterval(e.timer),e.codeBtnDisabled=!1,e.changeBtnValue=e.$lang.get_code):(e.codeBtnDisabled=!0,e.changeBtnValue=n+"s"+e.$lang.try_again,n--)}),1e3)},sendCode:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var t,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.countDown(),n.next=3,Object(i["i"])({action:e.secondAction});case 3:t=n.sent,r=t.data,200!==r.status?e.$message.error(r.msg):e.$message.success(r.msg);case 6:case"end":return n.stop()}}),n)})))()},secondVerifyClose:function(){this.$refs.secondVerifyForm.clearValidate(),this.$refs.secondVerifyForm.resetFields(),this.secondVerifyVis=!1},secondVerifySubmit:function(){var e=this;this.$refs.secondVerifyForm.validate(function(){var n=Object(a["a"])(regeneratorRuntime.mark((function n(t){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t){n.next=2;break}return n.abrupt("return",!1);case 2:e.$emit("secondeVerifySuccess",e.secondVerifyFormData.code);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}},watch:{secondVerifyVis:function(e){this.mySecondVerifyVis=e}},mounted:function(){this.mySecondVerifyVis=this.secondVerifyVis}},s=c,u=t("2877"),d=Object(u["a"])(s,r,o,!1,null,"6bb542ed",null);n["a"]=d.exports},caad:function(e,n,t){"use strict";var r=t("23e7"),o=t("4d64").includes,a=t("44d2"),i=t("ae40"),c=i("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:!c},{includes:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),a("includes")}}]);