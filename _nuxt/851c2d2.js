(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2],{313:function(t,e,n){"use strict";n.r(e);n(42),n(31),n(41),n(11),n(55),n(36),n(56);var o=n(22),r=n(149),l=n(148);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={components:{AppControlInput:r.default,AppButton:l.default},props:{loadedPost:{required:!1,type:Object}},data:function(){return{singlePost:this.loadedPost?h({},this.loadedPost):{author:"",title:"",thumbnailLink:"",content:"",previewText:""}}},methods:{onSave:function(){var t=this,e=this.$route;"/admin/new-post"===e.fullPath?this.$store.dispatch("createPost",{author:this.singlePost.author,thumbnailLink:this.singlePost.thumbnailLink,title:this.singlePost.title,content:this.singlePost.content,previewText:this.singlePost.previewText}).then((function(){t.$router.push("/admin")})):e.fullPath==="/admin/".concat(this.$route.params.postId)&&this.$store.dispatch("editSinglePost",{id:this.$route.params.postId,author:this.singlePost.author,thumbnailLink:this.singlePost.thumbnailLink,title:this.singlePost.title,content:this.singlePost.content,previewText:this.singlePost.previewText}).then((function(){t.$router.push("/admin")}))},onCancel:function(){this.singlePost.author="",this.singlePost.title="",this.singlePost.thumbnailLink="",this.singlePost.content="",this.$router.push("/admin")}}},d=n(9),component=Object(d.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:function(e){return e.preventDefault(),t.onSave.apply(null,arguments)}}},[n("AppControlInput",{model:{value:t.singlePost.author,callback:function(e){t.$set(t.singlePost,"author",e)},expression:"singlePost.author"}},[t._v("Author Name")]),t._v(" "),n("AppControlInput",{model:{value:t.singlePost.title,callback:function(e){t.$set(t.singlePost,"title",e)},expression:"singlePost.title"}},[t._v("Title")]),t._v(" "),n("AppControlInput",{model:{value:t.singlePost.thumbnailLink,callback:function(e){t.$set(t.singlePost,"thumbnailLink",e)},expression:"singlePost.thumbnailLink"}},[t._v("Thumbnail Link")]),t._v(" "),n("AppControlInput",{attrs:{"control-type":"textarea"},model:{value:t.singlePost.content,callback:function(e){t.$set(t.singlePost,"content",e)},expression:"singlePost.content"}},[t._v("Content")]),t._v(" "),n("AppControlInput",{attrs:{"control-type":"textarea"},model:{value:t.singlePost.previewText,callback:function(e){t.$set(t.singlePost,"previewText",e)},expression:"singlePost.previewText"}},[t._v("Preview Text")]),t._v(" "),n("AppButton",{attrs:{type:"submit"}},[t._v("Save")]),t._v(" "),n("AppButton",{staticStyle:{"margin-left":"10px"},attrs:{type:"button","btn-style":"cancel"},on:{click:t.onCancel}},[t._v("Cancel")])],1)}),[],!1,null,null,null);e.default=component.exports},343:function(t,e,n){"use strict";n.r(e);var o=n(7),r=(n(40),n(69),{layout:"admin",components:{AdminPostForm:n(313).default},middleware:"auth",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,o=t.error,r=t.params,e.prev=1,e.next=4,n.$get("/test/api/posts/".concat(r.postId));case 4:return l=e.sent,c=l.data[0],e.abrupt("return",{singlePost:c});case 9:e.prev=9,e.t0=e.catch(1),o({statusCode:e.t0.statusCode,message:e.t0.message}),console.log("".concat(e.t0.statusCode,": ").concat(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))()}}),l=n(9),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"admin-post-page"},[n("section",{staticClass:"update-form"},[n("AdminPostForm",{attrs:{loadedPost:t.singlePost}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AdminPostForm:n(313).default})}}]);