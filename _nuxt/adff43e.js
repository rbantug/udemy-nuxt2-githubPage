(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{321:function(t,e,o){var content=o(333);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(26).default)("6b31148a",content,!0,{sourceMap:!1})},332:function(t,e,o){"use strict";o(321)},333:function(t,e,o){var n=o(25)(!1);n.push([t.i,".single-post-page[data-v-c167d4e6]{padding:30px;text-align:center;box-sizing:border-box}.post[data-v-c167d4e6]{width:100%}@media (min-width:768px){.post[data-v-c167d4e6]{width:600px;margin:auto}}.post-title[data-v-c167d4e6]{margin:0}.post-details[data-v-c167d4e6]{padding:10px;box-sizing:border-box;border-bottom:3px solid #ccc;display:flex;justify-content:center;align-items:center;flex-direction:column}@media (min-width:768px){.post-details[data-v-c167d4e6]{flex-direction:row}}.post-detail[data-v-c167d4e6]{color:#585858;margin:0 10px}.post-feedback a[data-v-c167d4e6]{color:red;text-decoration:none}.post-feedback a[data-v-c167d4e6]:active,.post-feedback a[data-v-c167d4e6]:hover{color:salmon}",""]),t.exports=n},344:function(t,e,o){"use strict";o.r(e);var n=o(7),c=(o(40),o(69),{components:{Error:o(47).a},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n,c,r,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.params,n=t.$axios,c=t.error,e.prev=1,e.next=4,n.$get("/test/api/posts/".concat(o.id));case 4:return r=e.sent,d=r.data[0],e.abrupt("return",{singlePost:d});case 9:e.prev=9,e.t0=e.catch(1),c({statusCode:e.t0.statusCode,message:e.t0.message}),console.log("".concat(e.t0.statusCode,": ").concat(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))()},computed:{fullDate:function(){var t=new Date(this.singlePost.updatedDate),e=t.getMonth(),o=t.getDate(),n=t.getFullYear(),c=t.getHours(),r=t.getMinutes(),d=t.getSeconds();return"".concat(["January","February","March","April","May","June","July","August","September","October","November","December"][e]," ").concat(o,", ").concat(n," - ").concat(c,":").concat(r,":").concat(d)},increment:function(){return this.$store.getters.incrementGetters}},methods:{addMOAR:function(){this.$store.commit("add")}},created:function(){}}),r=c,d=(o(332),o(9)),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"single-post-page"},[o("section",{staticClass:"post"},[o("h1",{staticClass:"post-title"},[t._v(t._s(t.singlePost.title))]),t._v(" "),o("div",{staticClass:"post-details"},[o("div",{staticClass:"post-detail"},[t._v("Last updated on "+t._s(t.fullDate))]),t._v(" "),o("div",{staticClass:"post-detail"},[t._v(t._s(t.singlePost.author?t.singlePost.author:"Author unknown"))]),t._v(" "),o("p",{staticClass:"post-content"},[t._v(t._s(t.singlePost.content?t.singlePost.content:"There should be something in here..."))])])]),t._v(" "),o("div",{staticClass:"post-feedback"},[t._m(0),t._v(" "),o("p",[t._v(t._s(t.increment))]),t._v(" "),o("button",{on:{click:t.addMOAR}},[t._v("click ME!!")])])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[t._v("Let me know what you think about the post, send a mail to "),o("a",{attrs:{href:"mailto:#"}},[t._v("something@mail.com")])])}],!1,null,"c167d4e6",null);e.default=component.exports}}]);