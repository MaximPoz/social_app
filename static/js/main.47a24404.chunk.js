(this["webpackJsonpreact-kamasutra-1"]=this["webpackJsonpreact-kamasutra-1"]||[]).push([[1],{12:function(e,t,n){e.exports={nav:"Nav_nav__1JLm7",item:"Nav_item__1Bqih",activeLink:"Nav_activeLink__8yt9A"}},144:function(e,t,n){},145:function(e,t,n){},151:function(e,t,n){},152:function(e,t,n){},153:function(e,t,n){},234:function(e,t,n){"use strict";n.r(t);var r=function(e){e&&e instanceof Function&&n.e(7).then(n.bind(null,302)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))},a=n(0),s=n.n(a),c=n(47),i=n.n(c),o=(n(144),n(26)),u=n(27),l=n(29),g=n(28),d=(n(145),n(8)),f=n(12),j=n.n(f),A=n(1),p=function(){return Object(A.jsxs)("nav",{className:j.a.nav,children:[Object(A.jsx)("div",{className:j.a.item,children:Object(A.jsx)(d.b,{to:"/Profile",activeClassName:j.a.activeLink,children:"Profile"})})," ",Object(A.jsx)("div",{className:j.a.item,children:Object(A.jsx)(d.b,{to:"/Dialogs",activeClassName:j.a.activeLink,children:"Messages"})}),Object(A.jsx)("div",{className:j.a.item,children:Object(A.jsx)(d.b,{to:"/News",activeClassName:j.a.activeLink,children:"Mews"})}),Object(A.jsx)("div",{className:j.a.item,children:Object(A.jsx)(d.b,{to:"/Music",activeClassName:j.a.activeLink,children:"Music"})}),Object(A.jsx)("div",{className:j.a.item,children:Object(A.jsx)(d.b,{to:"/Settings",activeClassName:j.a.activeLink,children:"Settings"})}),Object(A.jsx)("hr",{}),Object(A.jsx)("div",{className:j.a.item,children:Object(A.jsx)(d.b,{to:"/Users",activeClassName:j.a.activeLink,children:"Friends online"})})]})},b=(n(151),function(e){return Object(A.jsx)("div",{children:Object(A.jsx)("a",{children:" First news "})})}),O=n(7),h=(n(152),function(e){return Object(A.jsx)("div",{children:Object(A.jsx)("a",{children:" TamTararaaaam "})})}),w=(n(153),function(e){return Object(A.jsx)("div",{children:Object(A.jsx)("a",{children:" Settings "})})}),C=n(18),v=n(6),m=n.n(v),E=n(15),P=n(31),x=n(3),k=n(9),D=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(x.a)(Object(x.a)({},e),r):e}))},S="FOLLOW",Q="UNFOLLOW",B="SET_USERS",N="SET_CURRENT_PAGE",I="SET_TOTAL_USERS_COUNT",y="TOGGLE_IS_FETCHING",G="TOGGLE_IS_FOLLOWING_PROGRESS",F={users:[],pageSize:4,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},L=function(e){return{type:S,userId:e}},H=function(e){return{type:Q,userId:e}},U=function(e){return{type:y,isFetching:e}},T=function(e,t){return{type:G,isFetching:e,userId:t}},J=function(){var e=Object(E.a)(m.a.mark((function e(t,n,r,a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(T(!0,n)),e.next=3,r(n);case 3:0==e.sent.data.resultCode&&t(a(n)),t(T(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(x.a)(Object(x.a)({},e),{},{users:D(e.users,t.userId,"id",{followed:!0})});case Q:return Object(x.a)(Object(x.a)({},e),{},{users:D(e.users,t.userId,"id",{followed:!1})});case B:return Object(x.a)(Object(x.a)({},e),{},{users:t.users});case N:return Object(x.a)(Object(x.a)({},e),{},{currentPage:t.currentPage});case I:return Object(x.a)(Object(x.a)({},e),{},{totalUsersCount:t.count});case y:return Object(x.a)(Object(x.a)({},e),{},{isFetching:t.isFetching});case G:return Object(x.a)(Object(x.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(P.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},R=n(61),X=n(49),z=n(83),V=n(50),Y=n.n(V),Z=n(88),K=n.n(Z),W=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,s=e.onPageChanged,c=e.portionSize,i=void 0===c?30:c,o=Math.ceil(t/n),u=[],l=1;l<=o;l++)u.push(l);var g=Math.ceil(o/i),d=Object(a.useState)(1),f=Object(z.a)(d,2),j=f[0],p=f[1],b=(j-1)*i+1,O=j*i;return Object(A.jsxs)("div",{className:Y.a.paginator,children:[j>1&&Object(A.jsx)("button",{onClick:function(){p(j-1)},children:"PREV"}),u.filter((function(e){return e>=b&&e<=O})).map((function(e){return Object(A.jsxs)("span",{className:K()(Object(X.a)({},Y.a.selectedPage,r===e),Y.a.pageNumber),onClick:function(t){s(e)},children:["  ",e]},e)})),g>j&&Object(A.jsx)("button",{onClick:function(){p(j+1)},children:"NEXT"})]})},q=n(89),_=n.n(q),$=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,a=e.follow;return Object(A.jsxs)("div",{children:[Object(A.jsxs)("span",{children:[Object(A.jsx)("div",{className:"avaUsers",children:Object(A.jsx)(d.b,{to:"/profile/"+t.id,children:Object(A.jsx)("img",{src:null!=t.photos.small?t.photos.small:"data:image/png;base64,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",className:_.a.usersPhoto})})}),Object(A.jsx)("div",{children:t.followed?Object(A.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:" \u041e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f "}):Object(A.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"})})]}),Object(A.jsxs)("span",{children:[Object(A.jsxs)("span",{children:[Object(A.jsx)("div",{children:t.name}),Object(A.jsx)("div",{children:t.status})]}),Object(A.jsxs)("span",{children:[Object(A.jsx)("div",{children:"\u0417\u0430\u0433\u043d\u0438\u0432\u0430\u044e\u0449\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0430"}),Object(A.jsx)("div",{children:"\u0416\u043e\u043f\u043e\u0441\u0440\u0430\u043d\u0441\u043a"})]})]})]})},ee=["currentPage","totalUsersCount","pageSize","onPageChanged","users"],te=function(e){var t=e.currentPage,n=e.totalUsersCount,r=e.pageSize,a=e.onPageChanged,s=e.users,c=Object(R.a)(e,ee);return Object(A.jsxs)("div",{children:[s.map((function(e){return Object(A.jsx)($,{user:e,followingInProgress:c.followingInProgress,unfollow:c.unfollow,follow:c.follow},e.id)})),Object(A.jsx)("div",{children:Object(A.jsx)(W,{currentPage:t,onPageChanged:a,totalItemsCount:n,pageSize:r})})]})},ne=n(46),re=n(20),ae=n(92),se=Object(ae.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),ce=function(e){return e.usersPage.pageSize},ie=function(e){return e.usersPage.totalUsersCount},oe=function(e){return e.usersPage.currentPage},ue=function(e){return e.usersPage.isFetching},le=function(e){return e.usersPage.followingInProgress},ge=function(e){Object(l.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.setCurrentPage(t),e.props.getUser(t,n)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUser(t,n)}},{key:"render",value:function(){return Object(A.jsxs)(A.Fragment,{children:[this.props.isFetching?Object(A.jsx)(ne.a,{}):null,Object(A.jsx)(te,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(s.a.Component),de=Object(re.d)(Object(C.b)((function(e){return{users:se(e),pageSize:ce(e),totalUsersCount:ie(e),currentPage:oe(e),isFetching:ue(e),followingInProgress:le(e)}}),{follow:function(e){return function(){var t=Object(E.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:J(n,e,k.c.follow.bind(k.c),L);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(E.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:J(n,e,k.c.unfollow.bind(k.c),H);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:function(e){return{type:N,currentPage:e}},toggleFollowingProgress:T,getUser:function(e,t){return function(){var n=Object(E.a)(m.a.mark((function n(r){var a;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(U(!0)),n.next=3,k.c.getUsers(e,t);case 3:a=n.sent,r(U(!1)),r((c=a.items,{type:B,users:c})),r((s=a.totalCount,{type:I,count:s}));case 7:case"end":return n.stop()}var s,c}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(ge),fe=n(30),je=n(58),Ae=n.n(je),pe=function(e){return Object(A.jsxs)("header",{className:Ae.a.header,children:[Object(A.jsx)("img",{src:"https://www.reviewpro.com/wp-content/uploads/2019/03/mews-logo-dark.png"}),Object(A.jsx)("div",{className:Ae.a.loginBlock,children:e.isAuth?Object(A.jsxs)("div",{children:[" ",e.login," - ",Object(A.jsx)("button",{onClick:e.logout,children:" Logout "})," "]}):Object(A.jsx)(d.b,{to:"/login",children:"Login"})})]})},be=function(e){Object(l.a)(n,e);var t=Object(g.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(A.jsx)(pe,Object(x.a)({},this.props))}}]),n}(s.a.Component),Oe=Object(C.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:fe.d})(be),he="INITIALIZED_SUCCESS",we={initialized:!1},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;return t.type===he?Object(x.a)(Object(x.a)({},e),{},{initialized:!0}):e},ve=n(77),me=n(63),Ee={friendsOnline:[{id:1,name:"Lena"},{id:2,name:"Viktor"},{id:3,name:"Artur"}]},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee;return e},xe=n(91),ke=n(84),De=Object(re.c)({profilePage:me.b,dialogsPage:ve.a,sidebar:Pe,usersPage:M,auth:fe.a,form:ke.a,app:Ce}),Se=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||re.d,Qe=Object(re.e)(De,Se(Object(re.a)(xe.a)));window.__store__=Qe;var Be=Qe,Ne=function(e){return function(t){return Object(A.jsx)(s.a.Suspense,{fallback:Object(A.jsx)("div",{children:"Loading..."}),children:Object(A.jsx)(e,Object(x.a)({},t))})}},Ie=s.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,305))})),ye=s.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,304))})),Ge=s.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,303))})),Fe=function(e){Object(l.a)(n,e);var t=Object(g.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(A.jsxs)("div",{className:"app-wrapper",children:[Object(A.jsx)(Oe,{}),Object(A.jsx)(p,{}),Object(A.jsxs)("div",{className:"app-wrapper-content",children:[Object(A.jsx)(O.b,{path:"/Dialogs",render:Ne(Ie)}),Object(A.jsx)(O.b,{path:"/profile/:userId?",render:Ne(ye)}),Object(A.jsx)(O.b,{path:"/News",render:function(){return Object(A.jsx)(b,{})}}),Object(A.jsx)(O.b,{path:"/Music",render:function(){return Object(A.jsx)(h,{})}}),Object(A.jsx)(O.b,{path:"/Settings",render:function(){return Object(A.jsx)(w,{})}}),Object(A.jsx)(O.b,{path:"/Users",render:function(){return Object(A.jsx)(de,{})}}),Object(A.jsx)(O.b,{path:"/login",render:Ne(Ge)})]})]}):Object(A.jsx)(ne.a,{})}}]),n}(a.Component),Le=Object(re.d)(O.f,Object(C.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Object(fe.b)());Promise.all([t]).then((function(){e({type:he})}))}}}))(Fe),He=function(e){return Object(A.jsx)(s.a.StrictMode,{children:Object(A.jsx)(d.a,{children:Object(A.jsx)(C.a,{store:Be,children:Object(A.jsx)(Le,{})})})})};i.a.render(Object(A.jsx)(He,{}),document.getElementById("root")),r()},30:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return j}));var r=n(6),a=n.n(r),s=n(15),c=n(3),i=n(37),o=n(9),u="samurai-network/auth/SET_USER_DATA",l={userId:null,email:null,login:null,isAuth:!1},g=function(e,t,n,r){return{type:u,payload:{userId:e,email:t,login:n,isAuth:r}}},d=function(){return function(){var e=Object(s.a)(a.a.mark((function e(t){var n,r,s,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,s=r.id,c=r.email,i=r.login,t(g(s,c,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},f=function(e,t,n){return function(){var r=Object(s.a)(a.a.mark((function r(s){var c,u;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.a.login(e,t,n);case 2:0===(c=r.sent).data.resultCode?s(d()):(u=c.data.messages.length>0?c.data.messages[0]:"Some error",s(Object(i.a)("login",{_error:u})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},j=function(e,t,n){return function(){var e=Object(s.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.logout();case 2:0===e.sent.data.resultCode&&t(g(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;return t.type===u?Object(c.a)(Object(c.a)({},e),t.payload):e}},46:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/loader.7cd1db2b.svg",a=n(1);t.a=function(e){return Object(a.jsx)("img",{src:r})}},50:function(e,t,n){e.exports={paginator:"Paginator_paginator__1haXN",pageNumber:"Paginator_pageNumber__1hVon",selectedPage:"Paginator_selectedPage__2v7Tv"}},58:function(e,t,n){e.exports={header:"Header_header__208Kf",loginBlock:"Header_loginBlock__Qf9ax"}},63:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return b})),n.d(t,"e",(function(){return O}));var r=n(6),a=n.n(r),s=n(15),c=n(31),i=n(3),o=n(9),u="ADD-POST",l="SET_USER_PROFILE",g="SET_STATUS",d="DELETE_POST",f={posts:[{id:1,message:"ya Oleg",likesCount:"+16"},{id:2,message:"ya tozhe",likesCount:"+21"},{id:3,message:"a ya zhenya",likesCount:"-12"},{id:4,message:"Dada",likesCount:11}],profile:null,status:""},j=function(e){return{type:u,newPost:e}},A=function(e){return{type:g,status:e}},p=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:l,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(A(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(A(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:5,message:t.newPostText,likesCount:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[n]),newPostText:""});case l:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case g:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case d:return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});default:return e}}},77:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(31),a=n(3),s="SAND-MESSAGE",c={messages:[{id:1,message:"Hey"},{id:2,message:"Bro"},{id:3,message:"tools"}],dialogs:[{id:1,name:"Lena"},{id:2,name:"Viktor"},{id:3,name:"Artur"}]},i=function(e){return{type:s,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;if(t.type===s){var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:4,message:n+"   \u0422\u0423\u0426-\u0422\u0423\u0426"}])})}return e}},89:function(e,t,n){e.exports={usersPhoto:"Users_usersPhoto__3vk0Q",avaUsers:"Users_avaUsers__23iB7"}},9:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(87),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"4b7c36f2-f146-498a-8850-f32bc3f1361f"}}),s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please use profileAPI object "),c.getProfile(e)}},c={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})}},i={me:function(){return a.get("auth/me")},login:function(e,t,n){return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}}},[[234,2,3]]]);
//# sourceMappingURL=main.47a24404.chunk.js.map