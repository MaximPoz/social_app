(this["webpackJsonpreact-kamasutra-1"]=this["webpackJsonpreact-kamasutra-1"]||[]).push([[6],{235:function(t,r,e){"use strict";e.d(r,"b",(function(){return n})),e.d(r,"a",(function(){return c}));var n=function(t){if(!t)return"Field is required"},c=function(t){return function(r){if(r&&r.length>t)return"Max length is ".concat(t," symbols")}}},236:function(t,r,e){t.exports={formControl:"FormsControls_formControl__2ZO4u",error:"FormsControls_error__1OgfD",formSummaryError:"FormsControls_formSummaryError__34K1F"}},237:function(t,r,e){"use strict";e.d(r,"b",(function(){return l})),e.d(r,"a",(function(){return m})),e.d(r,"c",(function(){return d}));var n=e(3),c=e(61),i=(e(0),e(113)),o=(e(235),e(236)),a=e.n(o),u=e(1),s=["input","meta","child"],j=["input","meta","child"],b=function(t){t.input;var r=t.meta,e=r.touched,n=r.error,c=t.children,i=e&&n;return Object(u.jsxs)("div",{className:a.a.formControl+" "+(i?a.a.error:""),children:[Object(u.jsx)("div",{children:c}),i&&Object(u.jsx)("span",{children:n})]})},l=function(t){var r=t.input,e=(t.meta,t.child,Object(c.a)(t,s));return Object(u.jsx)(b,Object(n.a)(Object(n.a)({},t),{},{children:Object(u.jsx)("textarea",Object(n.a)(Object(n.a)({},r),e))}))},m=function(t){var r=t.input,e=(t.meta,t.child,Object(c.a)(t,j));return Object(u.jsx)(b,Object(n.a)(Object(n.a)({},t),{},{children:Object(u.jsx)("input",Object(n.a)(Object(n.a)({},r),e))}))},d=function(t,r,e,c){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(u.jsxs)("div",{children:[Object(u.jsx)(i.a,Object(n.a)({placeholder:t,name:r,validate:e,component:c},o))," ",a]})}},303:function(t,r,e){"use strict";e.r(r);e(0);var n=e(18),c=e(7),i=e(114),o=e(30),a=e(235),u=e(237),s=e(236),j=e.n(s),b=e(1),l=Object(i.a)({form:"login"})((function(t){var r=t.handleSubmit,e=t.error;return Object(b.jsxs)("form",{onSubmit:r,children:[Object(u.c)("Email","email",[a.b],u.a),Object(u.c)("Password","password",[a.b],u.a,{type:"password"}),Object(u.c)(null,"rememberMe",[],u.a,{type:"checkbox"},"remember me"),e&&Object(b.jsxs)("div",{className:j.a.formSummaryError,children:[" ",e]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{children:"Login"})})]})}));r.default=Object(n.b)((function(t){return{isAuth:t.auth.isAuth}}),{login:o.c})((function(t){return t.isAuth?Object(b.jsx)(c.a,{to:"/profile"}):Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"LOGIN"}),Object(b.jsx)(l,{onSubmit:function(r){t.login(r.email,r.password,r.rememberMe)}})]})}))}}]);
//# sourceMappingURL=6.ce059b43.chunk.js.map