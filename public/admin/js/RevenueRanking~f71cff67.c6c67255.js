(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["RevenueRanking~f71cff67"],{"48fb":function(t,e,n){"use strict";n.d(e,"e",(function(){return r})),n.d(e,"d",(function(){return u})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return l}));var a=n("a27e");function r(t){return Object(a["a"])({url:"year_reports",params:t})}function u(){return Object(a["a"])({url:"year_reports_chart"})}function s(t){return Object(a["a"])({url:"new_client",params:t})}function o(t){return Object(a["a"])({url:"product_income",params:t})}function l(t){return Object(a["a"])({url:"forward_client",params:t})}},"4c2b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("h5",{staticClass:"mt-0"},[t._v(t._s(t.$lang.income_ranked_hint)+" ")]),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[n("div",{attrs:{slot:"empty"},slot:"empty"},[!t.tableData.length&&t.tableLoading?n("span",[n("i",{staticClass:"el-icon-loading"}),t._v(" "+t._s(t.$lang.loading)+" ... ")]):t._e(),t.tableData.length||t.tableLoading?t._e():n("span",[t._v(t._s(t.$lang.no_data))])]),n("el-table-column",{attrs:{prop:"id",label:"ID"}}),n("el-table-column",{attrs:{prop:"username",label:t.$lang.customer_name2},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("div",[n("el-link",{on:{click:function(e){return t.goAbstract(a)}}},[t._v(t._s(a.username))])],1)]}}])}),n("el-table-column",{attrs:{prop:"income_sum",label:t.$lang.income},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("div",[t._v(" "+t._s(a.prefix)+t._s(a.income_sum)+t._s(a.suffix)+" ")])]}}])}),n("el-table-column",{attrs:{prop:"expense_sum",label:t.$lang.expenditure},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("div",[t._v(" "+t._s(a.prefix)+t._s(a.expense_sum)+t._s(a.suffix)+" ")])]}}])}),n("el-table-column",{attrs:{prop:"last",label:t.$lang.surplus},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("div",[t._v(" "+t._s(a.prefix)+t._s(a.last)+t._s(a.suffix)+" ")])]}}])})],1)],1)},r=[],u=(n("96cf"),n("1da1")),s=n("48fb"),o={metaInfo:{title:window.zjmf_cw_lang.revenue_ranking},data:function(){return{tableLoading:!1,tableData:[]}},created:function(){this.getForwardt()},mounted:function(){},methods:{goAbstract:function(t){this.$router.push({name:"abstract",query:{id:t.id}})},getForwardt:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.tableLoading=!0,e.next=3,Object(s["a"])();case 3:if(n=e.sent,a=n.data,200===a.status){e.next=9;break}return t.$message.error(a.msg),t.tableLoading=!1,e.abrupt("return");case 9:t.tableData=a.data,t.tableLoading=!1;case 11:case"end":return e.stop()}}),e)})))()}},computed:{},watch:{}},l=o,i=n("2877"),c=Object(i["a"])(l,a,r,!1,null,"ab649ee2",null);e["default"]=c.exports}}]);