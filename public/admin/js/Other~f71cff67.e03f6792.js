(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Other~f71cff67"],{a494:function(e,t,n){"use strict";n.d(t,"f",(function(){return a})),n.d(t,"r",(function(){return o})),n.d(t,"h",(function(){return u})),n.d(t,"t",(function(){return i})),n.d(t,"n",(function(){return c})),n.d(t,"z",(function(){return l})),n.d(t,"g",(function(){return f})),n.d(t,"s",(function(){return s})),n.d(t,"l",(function(){return g})),n.d(t,"x",(function(){return p})),n.d(t,"k",(function(){return d})),n.d(t,"w",(function(){return _})),n.d(t,"m",(function(){return b})),n.d(t,"y",(function(){return m})),n.d(t,"j",(function(){return h})),n.d(t,"v",(function(){return O})),n.d(t,"i",(function(){return j})),n.d(t,"u",(function(){return v})),n.d(t,"o",(function(){return F})),n.d(t,"p",(function(){return k})),n.d(t,"A",(function(){return w})),n.d(t,"B",(function(){return x})),n.d(t,"a",(function(){return D})),n.d(t,"b",(function(){return y})),n.d(t,"D",(function(){return $})),n.d(t,"C",(function(){return R})),n.d(t,"e",(function(){return z})),n.d(t,"E",(function(){return q})),n.d(t,"q",(function(){return C})),n.d(t,"c",(function(){return E})),n.d(t,"d",(function(){return J}));var r=n("a27e");function a(){return Object(r["a"])({url:"config_general/general"})}function o(e){return Object(r["a"])({url:"config_general/general",method:"post",data:e})}function u(){return Object(r["a"])({url:"config_general/local"})}function i(e){return Object(r["a"])({url:"config_general/local",method:"post",data:e})}function c(){return Object(r["a"])({url:"config_general/support"})}function l(e){return Object(r["a"])({url:"config_general/support",method:"post",data:e})}function f(){return Object(r["a"])({url:"config_general/invoice"})}function s(e){return Object(r["a"])({url:"config_general/invoice",method:"post",data:e})}function g(){return Object(r["a"])({url:"config_general/recharge"})}function p(e){return Object(r["a"])({url:"config_general/recharge",method:"post",data:e})}function d(){return Object(r["a"])({url:"config_general/affiliate"})}function _(e){return Object(r["a"])({url:"config_general/affiliate",method:"post",data:e})}function b(){return Object(r["a"])({url:"config_general/safe"})}function m(e){return Object(r["a"])({url:"config_general/safe",method:"post",data:e})}function h(){return Object(r["a"])({url:"config_general/other"})}function O(e){return Object(r["a"])({url:"config_general/other",method:"post",data:e})}function j(){return Object(r["a"])({url:"config_general/register_login_page"})}function v(e){return Object(r["a"])({url:"config_general/register_login",method:"post",data:e})}function F(){return Object(r["a"])({url:"config_general/invoice_page"})}function k(e){return Object(r["a"])({url:"config_general/invoice_post",method:"post",data:e})}function w(){return Object(r["a"])({url:"config_general/productgroup_page"})}function x(e){return Object(r["a"])({url:"config_general/productgroup",method:"post",data:e})}function D(){return Object(r["a"])({url:"config_general/apiconfig"})}function y(e){return Object(r["a"])({url:"config_general/apiconfig",method:"post",data:e})}function $(){return Object(r["a"])({url:"config_general/secondverify"})}function R(e){return Object(r["a"])({url:"config_general/secondverify",method:"post",data:e})}function z(){return Object(r["a"])({url:"config_general/captcha_page"})}function q(e){return Object(r["a"])({url:"config_general/register_login_captcha",method:"post",data:e})}function C(e){return Object(r["a"])({url:"config_general/navgrouporder",params:e})}function E(e){return Object(r["a"])({url:"config_general/buy_product_page",params:e})}function J(e){return Object(r["a"])({url:"config_general/buy_product",method:"post",data:e})}},fe46:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"generalothers"},[n("el-row",{attrs:{gutter:15}},[n("el-form",{ref:"generalOtherForm",attrs:{model:e.generalOtherFormData,rules:e.generalOtherFormRules,"label-width":"150px"}},[n("el-col",{attrs:{span:12,offset:6}},[n("el-row",{attrs:{gutter:15}},[n("el-col",{attrs:{span:24}},[n("el-form-item",{attrs:{label:e.$lang.optional_fields_for_registration,prop:"clients_profoptional"}},[n("el-checkbox-group",{model:{value:e.generalOtherFormData.clients_profoptional,callback:function(t){e.$set(e.generalOtherFormData,"clients_profoptional",t)},expression:"generalOtherFormData.clients_profoptional"}},e._l(e.clients_profoptionalOptions,(function(t,r){return n("el-checkbox",{key:r,attrs:{label:t.value}},[e._v(e._s(t.label))])})),1)],1)],1)],1)],1),n("el-col",{attrs:{span:6,offset:9}},[n("el-form-item",[n("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.submitForm}},[e._v(e._s(e.$lang.submit))]),n("el-button",{attrs:{size:"small"},on:{click:e.resetForm}},[e._v(e._s(e.$lang.reset))])],1)],1)],1)],1)],1)},a=[],o=(n("96cf"),n("1da1")),u=n("a494"),i={data:function(){return{generalOtherFormData:{clients_profoptional:[],clients_profuneditable:[],show_cancel:"0",aff_report:"0",display_errors:"0",sql_error_reporting:"0",hooks_debug_mode:"0"},generalOtherFormRules:{},clients_profoptionalOptions:[],clients_profuneditableOptions:[]}},methods:{getData:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,r,a,o,i,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(u["j"])();case 2:if(n=t.sent,r=n.data,200===r.status){t.next=6;break}return t.abrupt("return",!1);case 6:for(a in e.clients_profoptionalOptions=[],r.data.clients_profoptional_list)o={value:a,label:r.data.clients_profoptional_list[a]},e.clients_profoptionalOptions.push(o);for(i in e.clients_profuneditableOptions=[],r.data.clients_profuneditable_list)c={value:i,label:r.data.clients_profuneditable_list[i]},e.clients_profuneditableOptions.push(c);e.generalOtherFormData=r.data.config_value,e.generalOtherFormData.clients_profoptional=r.data.config_value.clients_profoptional_checked,e.generalOtherFormData.clients_profuneditable=r.data.config_value.clients_profuneditable_checked;case 13:case"end":return t.stop()}}),t)})))()},submitForm:function(){var e=this;this.$refs.generalOtherForm.validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(n){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n){t.next=12;break}return t.next=3,Object(u["v"])(e.generalOtherFormData);case 3:if(r=t.sent,a=r.data,200===a.status){t.next=8;break}return e.$message({message:a.msg,type:"error"}),t.abrupt("return",!1);case 8:e.$message({message:a.msg,type:"success"}),e.getData(),t.next=13;break;case 12:return t.abrupt("return",!1);case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},resetForm:function(){this.$refs.generalOtherForm.resetFields(),this.getData()}},created:function(){this.getData()}},c=i,l=n("2877"),f=Object(l["a"])(c,r,a,!1,null,"0445d179",null);t["default"]=f.exports}}]);