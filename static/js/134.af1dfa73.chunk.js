"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{25:function(e,t,r){r.d(t,{DD:function(){return s},Mc:function(){return c},mv:function(){return p},wH:function(){return o},y:function(){return i}});var n=r(861),a=r(687),u=r.n(a),f=r(243),s=function(){var e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f.Z.defaults.baseURL="https://api.themoviedb.org/3/trending/movie/day","b2ef32b4f6ff426002ea648d4ef256a9",e.next=4,f.Z.get("",{params:{api_key:"b2ef32b4f6ff426002ea648d4ef256a9"}});case 4:return t=e.sent,e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f.Z.defaults.baseURL="https://api.themoviedb.org/3/movie/","b2ef32b4f6ff426002ea648d4ef256a9",e.next=4,f.Z.get("".concat(t),{params:{api_key:"b2ef32b4f6ff426002ea648d4ef256a9"}});case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f.Z.defaults.baseURL="https://api.themoviedb.org/3/movie/","b2ef32b4f6ff426002ea648d4ef256a9",e.next=4,f.Z.get("".concat(t,"/credits"),{params:{api_key:"b2ef32b4f6ff426002ea648d4ef256a9"}});case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f.Z.defaults.baseURL="https://api.themoviedb.org/3/movie/","b2ef32b4f6ff426002ea648d4ef256a9",e.next=4,f.Z.get("".concat(t,"/reviews"),{params:{api_key:"b2ef32b4f6ff426002ea648d4ef256a9"}});case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f.Z.defaults.baseURL="https://api.themoviedb.org/3/search/movie","b2ef32b4f6ff426002ea648d4ef256a9",e.next=4,f.Z.get("",{params:{api_key:"b2ef32b4f6ff426002ea648d4ef256a9",language:"en-US",query:t,page:1,include_adult:!0}});case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},639:function(e,t,r){r.d(t,{Z:function(){return f}});var n=r(689),a=r(87),u=r(184);function f(e){var t=e.movies,r=(0,n.TH)();return console.log(t),(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("ul",{children:t.map((function(e){return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movies/".concat(e.id),state:{from:r},children:(0,u.jsx)("p",{children:e.title})})},e.id)}))})})}},134:function(e,t,r){r.r(t);var n=r(861),a=r(439),u=r(687),f=r.n(u),s=r(87),c=r(25),i=r(791),o=r(639),p=r(184);t.default=function(){var e=(0,s.lr)(),t=(0,a.Z)(e,2),r=t[0],u=t[1],d=null===r.get("query")?"":r.get("query"),l=(0,i.useState)([]),v=(0,a.Z)(l,2),b=v[0],m=v[1];console.log(d),(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(f().mark((function e(){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,c.mv)(d);case 3:t=e.sent,m(t.data.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[d]);return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{children:[(0,p.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault(),u({query:e.target.elements.input.value})},children:[(0,p.jsx)("input",{type:"text",name:"input"}),(0,p.jsx)("button",{type:"submit",children:"Submit"})]}),(0,p.jsx)(o.Z,{movies:b})]})})}}}]);
//# sourceMappingURL=134.af1dfa73.chunk.js.map