(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["GroupList~f71cff67"],{"0057":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"group-list"},[n("div",{staticClass:"group-list-flex",on:{click:t.back}},[n("i",{staticClass:"back-icon el-icon-arrow-left"}),n("h2",[t._v(t._s(t.$route.query.name))])]),n("el-table",{staticClass:"mt-10",attrs:{border:"",data:t.interfaceData}},[n("div",{attrs:{slot:"empty"},slot:"empty"},[!t.interfaceData.length&&t.tableLoading?n("span",[n("i",{staticClass:"el-icon-loading"}),t._v(" "+t._s(t.$lang.loading)+" ... ")]):t._e(),t.interfaceData.length||t.tableLoading?t._e():n("span",[t._v(t._s(t.$lang.no_data))])]),n("el-table-column",{attrs:{prop:"id",label:"ID",width:"70",align:"center"}}),n("el-table-column",{attrs:{label:t.$lang.state,width:"60",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[0!==a.link_status||a.statusLoading?t._e():n("el-tooltip",{attrs:{effect:"light",content:a.msg?a.msg:t.$lang.connection_fail,placement:"right"}},[n("i",{staticClass:"el-icon-circle-close no-icon"})]),0===a.link_status||a.statusLoading?t._e():n("el-tooltip",{attrs:{effect:"light",content:a.msg?a.msg:t.$lang.connection_succeed,placement:"right"}},[n("i",{staticClass:"el-icon-circle-check yes-icon"})]),a.statusLoading?n("i",{staticClass:"el-icon-loading"}):t._e()]}}])},[n("template",{slot:"header"},[n("i",{staticClass:"el-icon-refresh mr-5",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.getAllStatus()}}}),n("el-popover",{attrs:{placement:"top-start",title:"",width:"200",trigger:"hover"}},[n("el-row",[n("el-col",{attrs:{span:24}},[t._v(t._s(t.$lang.click_this_refresh))])],1),n("i",{staticClass:"el-icon-question blue_qus",attrs:{slot:"reference"},slot:"reference"})],1)],1)],2),n("el-table-column",{attrs:{prop:"name",label:t.$lang.interface_name,align:"center"}}),n("el-table-column",{attrs:{prop:"type",label:t.$lang.server_module,align:"center"}}),n("el-table-column",{attrs:{prop:"gname",label:t.$lang.interface_group_name,align:"center"}}),n("el-table-column",{attrs:{prop:"ip_address",label:t.$lang.ip_address,align:"center"}}),n("el-table-column",{attrs:{prop:"open_num",align:"center"}},[n("template",{slot:"header"},[t._v(" "+t._s(t.$lang.product_quantitys)+" "),n("el-popover",{attrs:{placement:"top-start",title:"",width:"200",trigger:"hover"}},[n("el-row",[n("el-col",{attrs:{span:24}},[t._v(t._s(t.$lang.used_total))])],1),n("i",{staticClass:"el-icon-question blue_qus",attrs:{slot:"reference"},slot:"reference"})],1)],1)],2),n("el-table-column",{attrs:{prop:"disabled",label:t.$lang.state,align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{style:"color:"+(1==e.row.disabled?"#F56C6C":"#67C23A")},[t._v(t._s(1==e.row.disabled?t.$lang.forbidden:t.$lang.start_using))])]}}])}),n("el-table-column",{attrs:{label:t.$lang.operation,width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){return t.toEdit(a)}}},[t._v(t._s(t.$lang.edit))]),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(e){return t.deleteServer(a)}}},[t._v(t._s(t.$lang.delete))])]}}])})],1),n("el-pagination",{attrs:{"current-page":t.pageInfo.current,"page-sizes":[50,100],"page-size":t.pageInfo.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.pageInfo.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)},r=[],s=(n("4160"),n("159b"),n("96cf"),n("1da1")),i=n("bdf0"),o={data:function(){return{tableLoading:!1,interfaceData:[],pageInfo:{total:0,limit:10,current:1}}},mounted:function(){this.getInterface()},methods:{getInterface:function(){var t=this;Object(i["n"])(this.pageInfo.limit,this.pageInfo.current,"",this.$route.query.id).then((function(e){200===e.status&&(t.pageInfo.total=e.data.count,(e.data.data||[]).forEach((function(t){t.statusLoading=!1})),t.interfaceData=e.data.data,t.getAllStatus())}))},getAllStatus:function(){var t=this;(this.interfaceData||[]).forEach((function(e){t.getSingleStatus(e)}))},getSingleStatus:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.statusLoading=!0,e.$forceUpdate(),n.next=4,Object(i["a"])(t.id);case 4:a=n.sent,r=a.data,200!==r.status?t.msg=r.msg:(t.link_status=r.data.server_status,0===r.data.server_status?t.msg=r.data.msg:t.msg=e.$lang.connection_succeed),t.statusLoading=!1,e.$forceUpdate();case 9:case"end":return n.stop()}}),n)})))()},deleteServer:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$confirm(e.$lang.to_delete_operation,e.$lang.hint,{confirmButtonText:e.$lang.confirm,cancelButtonText:e.$lang.cancel,type:"warning"}).catch((function(t){return t}));case 2:if(a=n.sent,"confirm"===a){n.next=5;break}return n.abrupt("return",e.$message.info(e.$lang.cancel_del_text));case 5:return n.next=7,Object(i["g"])(t.id);case 7:if(r=n.sent,200===r.data.status){n.next=10;break}return n.abrupt("return",e.$message.error(r.data.msg));case 10:e.$message.success(r.data.msg),e.getInterface();case 12:case"end":return n.stop()}}),n)})))()},toEdit:function(t){this.$router.push({path:"/add-interface",query:{id:t.id,type:"edit"}})},handleSizeChange:function(t){this.pageInfo.limit=t},handleCurrentChange:function(t){this.pageInfo.currentPage=t},back:function(){this.$router.back()}}},c=o,l=(n("4662"),n("2877")),u=Object(l["a"])(c,a,r,!1,null,"3086faad",null);e["default"]=u.exports},4662:function(t,e,n){"use strict";var a=n("5c09"),r=n.n(a);r.a},"5c09":function(t,e,n){},bdf0:function(t,e,n){"use strict";n.d(e,"n",(function(){return r})),n.d(e,"g",(function(){return s})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return c})),n.d(e,"m",(function(){return l})),n.d(e,"f",(function(){return u})),n.d(e,"i",(function(){return d})),n.d(e,"b",(function(){return g})),n.d(e,"j",(function(){return f})),n.d(e,"h",(function(){return p})),n.d(e,"a",(function(){return _})),n.d(e,"k",(function(){return m})),n.d(e,"e",(function(){return h})),n.d(e,"l",(function(){return b}));var a=n("a27e");function r(t,e,n,r){return Object(a["a"])({url:"servers_list",params:{limit:t,page:e,search:n,gid:r}})}function s(t){return Object(a["a"])({url:"delete_servers/".concat(t)})}function i(){return Object(a["a"])({url:"servers_add"})}var o={headers:{"Content-Type":"multipart/form-data"}};function c(t){return Object(a["a"])({url:"servers_add_post",method:"post",data:t,config:o})}function l(t){return Object(a["a"])({url:"edit_servers/".concat(t),method:"get"})}function u(t){return Object(a["a"])({url:"delete_server_groups/".concat(t)})}function d(t){return Object(a["a"])({url:"edit_server_groups/".concat(t)})}function g(t){return Object(a["a"])({url:"create_groups_post",method:"post",data:t})}function f(t){return Object(a["a"])({url:"edit_server_groups_post",method:"post",data:t})}function p(t){return Object(a["a"])({url:"edit_servers_post",method:"post",data:t})}function _(t){return Object(a["a"])({url:"server_test_link/".concat(t)})}function m(t,e){return Object(a["a"])({url:"groups_list",params:{limit:t,page:e}})}function h(t){return Object(a["a"])({url:"create_groups"})}function b(t){return Object(a["a"])({url:"get_modules_group",method:"post",data:t})}}}]);