(this["webpackJsonpmovies-app"]=this["webpackJsonpmovies-app"]||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),i=n.n(a),c=n(22),s=n.n(c),o=n(8),l=n(10),u=n(12),j=n(11),d=n(5),m=n.n(d),b=n(14),h=function e(){var t=this;Object(o.a)(this,e),this._baseUrl="https://api.themoviedb.org/3",this._apiKey="4d8b2f4b197b6cc4163b866a0d50a1f9",this.getResource=function(){var e=Object(b.a)(m.a.mark((function e(n){var r,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t._baseUrl).concat(n,"?api_key=").concat(t._apiKey));case 2:if((r=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(n,", received ").concat(r.status));case 5:return a=r.json(),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getMovie=function(){var e=Object(b.a)(m.a.mark((function e(n){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/movie/".concat(n));case 2:return r=e.sent,e.abrupt("return",t._transformMovieDetail(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getGenresList=Object(b.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.getResource("/genre/list"));case 1:case"end":return e.stop()}}),e)}))),this.getGenre=function(){var e=Object(b.a)(m.a.mark((function e(n){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.getGenresList(),e.abrupt("return",r);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getPopularMovies=Object(b.a)(m.a.mark((function e(){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/movie/popular");case 2:return n=e.sent,e.abrupt("return",n.results.map(t._transformMovieDetail));case 4:case"end":return e.stop()}}),e)}))),this.getPopularPeople=Object(b.a)(m.a.mark((function e(){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/person/popular");case 2:return n=e.sent,e.abrupt("return",n.results.map(t._transformPersonList));case 4:case"end":return e.stop()}}),e)}))),this.getPerson=function(){var e=Object(b.a)(m.a.mark((function e(n){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/person/".concat(n));case 2:return r=e.sent,e.abrupt("return",t._transformPersonDetail(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._transformPersonList=function(e){return{id:e.id,name:e.name,rating:e.popularity,img:e.profile_path}},this._transformMovieDetail=function(e){return{id:e.id,name:e.original_title,releaseDate:t._transformDateFormat(e.release_date),rating:e.vote_average,img:e.poster_path,overview:e.overview}},this._transformPersonDetail=function(e){return{id:e.id,name:e.name,birthday:t._transformDateFormat(e.birthday),gender:t.getPersonGender(e.gender),bio:e.biography,popularity:e.popularity,knownFor:e.also_known_as,img:e.profile_path}},this.arrayToString=function(e){var t=[];return e.forEach((function(e){t.push(e.name)})),t.join(", ")},this._transformDateFormat=function(e){return e?e.split("-").reverse().join("/"):"---"},this.getPersonGender=function(e){return 1===e?"female":"male"}},p=n(13),v=n.p+"static/media/logo.b713f270.png",f=function(){return Object(r.jsx)("div",{children:Object(r.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark",children:[Object(r.jsx)(p.b,{to:"/",className:"navbar-brand",children:Object(r.jsx)("img",{src:v,width:"50",height:"50",className:"d-inline-block align-top",alt:"Logo"})}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(r.jsxs)("ul",{className:"navbar-nav",children:[Object(r.jsx)("li",{className:"nav-item active",children:Object(r.jsx)(p.b,{className:"nav-link",to:"/",children:"Home"})}),Object(r.jsx)("li",{className:"nav-item active",children:Object(r.jsx)(p.b,{className:"nav-link",to:"/people/",children:"People"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(p.b,{className:"nav-link",to:"/movies/",children:"Movies"})})]})})]})})},O=(n(35),function(){return Object(r.jsxs)("div",{className:"jumbotron rounded error-indicator",children:[Object(r.jsx)("span",{className:"boom",children:" BOOM! "}),Object(r.jsx)("span",{children:"Sorry, something has gone wrong!"}),Object(r.jsx)("span",{children:" (but we already fix it!) "})]})}),x=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={hasError:!1},e}return Object(l.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)(O,{}):this.props.children}}]),n}(a.Component),g=i.a.createContext(),N=g.Provider,y=g.Consumer,w=n(2),k=n(4),D=(n(36),function(){return Object(r.jsx)("div",{className:"loadingio-spinner-double-ring mt-2 mb-2",children:Object(r.jsxs)("div",{className:"ldio",children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{children:Object(r.jsx)("div",{})}),Object(r.jsx)("div",{children:Object(r.jsx)("div",{})})]})})}),_=(n(37),function(e){var t=e.item,n=e.field,a=e.label;return Object(r.jsxs)("li",{className:"list-group-item",children:[Object(r.jsxs)("span",{className:"text-info",children:[a,": "]}),Object(r.jsxs)("span",{children:[t[n]," "]})]})}),M=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).movieService=new h,e.state={itemId:null,loading:!0},e.onItemLoaded=function(t){e.setState({item:t,loading:!1})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.updateItem()}},{key:"componentDidUpdate",value:function(e){this.props.itemId!==e.itemId&&(this.itemLoadingSpinner(),this.updateItem())}},{key:"itemLoadingSpinner",value:function(){this.setState({loading:!0})}},{key:"updateItem",value:function(){var e=this.props,t=e.itemId,n=e.getData;t&&n(t).then(this.onItemLoaded)}},{key:"render",value:function(){if(!this.state.item)return Object(r.jsx)("span",{className:"item-detail jumbotron rounded",children:"Select a item from a list"});var e=this.state,t=e.item,n=e.loading?Object(r.jsx)(D,{}):Object(r.jsx)(P,{item:t,children:this.props.children});return Object(r.jsx)("div",{className:"item-detail jumbotron rounded",children:n})}}]),n}(a.Component),P=function(e){var t=e.item,n=e.children,a=t.img;return Object(r.jsxs)(i.a.Fragment,{children:[Object(r.jsx)("img",{className:"item-img rounded",src:"http://image.tmdb.org/t/p/w185".concat(a),alt:"img"}),Object(r.jsx)("ul",{className:"list-group list-group-flush",children:i.a.Children.map(n,(function(e,n){return i.a.cloneElement(e,{item:t})}))})]})},S=M,I=function(e){return function(t){Object(u.a)(a,t);var n=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).state={data:null},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.getData().then((function(t){e.setState({data:t})}))}},{key:"render",value:function(){var t=this.state.data;return t?Object(r.jsx)(e,Object(k.a)(Object(k.a)({},this.props),{},{data:t})):Object(r.jsx)(D,{})}}]),a}(a.Component)},C=function(e,t){return function(n){return Object(r.jsx)(y,{children:function(a){var i=t(a);return Object(r.jsx)(e,Object(k.a)(Object(k.a)({},n),i))}})}},E=C((function(e){return Object(r.jsxs)(S,Object(k.a)(Object(k.a)({},e),{},{children:[Object(r.jsx)(_,{field:"name",label:"Name"}),Object(r.jsx)(_,{field:"gender",label:"Gender"}),Object(r.jsx)(_,{field:"birthday",label:"Birthday"})]}))}),(function(e){return{getData:e.getPerson}})),L=C((function(e){return Object(r.jsxs)(S,Object(k.a)(Object(k.a)({},e),{},{children:[Object(r.jsx)(_,{field:"name",label:"Name"}),Object(r.jsx)(_,{field:"releaseDate",label:"Release date"}),Object(r.jsx)(_,{field:"rating",label:"Rating"}),Object(r.jsx)(_,{field:"overview",label:"Overview"})]}))}),(function(e){return{getData:e.getMovie}})),R=(n(38),function(e){var t=e.data,n=e.onItemSelected,a=e.children,i=t.map((function(e){var t=e.id,i=a(e);return Object(r.jsx)("li",{className:"list-group-item",onClick:function(){return n(t)},children:i},t)}));return Object(r.jsx)("ul",{className:"item-list mb-4",children:i})});R.defaultProps={onItemSelected:function(){}};var A=R,F=function(e,t){return function(n){return Object(r.jsx)(e,Object(k.a)(Object(k.a)({},n),{},{children:t}))}},G=function(e){var t=e.name,n=e.img;return Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{className:"item-list-name",children:t}),Object(r.jsx)("img",{className:"item-list-img",src:"http://image.tmdb.org/t/p/w185".concat(n),alt:"poster"})]})},U=C(I(F(A,G)),(function(e){return{getData:e.getPopularPeople}})),B=C(I(F(A,G)),(function(e){return{getData:e.getPopularMovies}})),J=(n(39),function(e){var t=e.leftElement,n=e.rightElement,a=e.leftCol,i=void 0===a?6:a,c=e.rightCol,s=void 0===c?6:c,o="col-md-".concat(i),l="col-md-".concat(s);return Object(r.jsxs)("div",{className:"row mb-2",children:[Object(r.jsx)("div",{className:o,children:t}),Object(r.jsx)("div",{className:l,children:n})]})}),K=Object(w.f)((function(e){var t=e.history,n=e.match.params.id;return Object(r.jsx)(J,{leftElement:Object(r.jsx)(U,{onItemSelected:function(e){return t.push("".concat(e))}}),rightElement:Object(r.jsx)(E,{itemId:n}),leftCol:7,rightCol:5})})),T=function(e){var t=e.history;return Object(r.jsx)(B,{onItemSelected:function(e){t.push("".concat(e))}})},W=(n(40),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).movieService=new h,e.state={movie:{},loading:!0,error:!1},e.onMovieLoaded=function(t){var n=t[Math.floor(Math.random()*t.length)];e.setState({movie:n,loading:!1})},e.onError=function(t){e.setState({error:!0,loading:!1})},e.updateMovie=function(){e.movieService.getPopularMovies().then(e.onMovieLoaded).catch(e.onError)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.updateInterval;this.updateMovie(),this.interval=setInterval(this.updateMovie,e)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state,t=e.movie,n=e.loading,a=e.error,i=!(n||a),c=a?Object(r.jsx)(O,{}):null,s=n?Object(r.jsx)(D,{}):null,o=i?Object(r.jsx)(H,{movie:t}):null;return Object(r.jsxs)("div",{className:"random-movie jumbotron rounded mt-3",children:[c,s,o]})}}]),n}(a.Component));W.defaultProps={updateInterval:4e3};var H=function(e){var t=e.movie,n=t.id,a=t.name,c=t.releaseDate,s=t.rating,o=t.img,l=t.overview,u=Object(r.jsx)("img",{className:"poster-img rounded",src:"http://image.tmdb.org/t/p/w300".concat(o),alt:"img"}),j=Object(r.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(r.jsxs)("li",{className:"list-group-item",children:[Object(r.jsx)("span",{className:"text-info",children:"   Name:  "}),Object(r.jsx)("span",{children:Object(r.jsx)("a",{href:"movies/".concat(n),children:a})})]}),Object(r.jsxs)("li",{className:"list-group-item",children:[Object(r.jsx)("span",{className:"text-info",children:"Release Date: "}),Object(r.jsx)("span",{children:c})]}),Object(r.jsxs)("li",{className:"list-group-item",children:[Object(r.jsx)("span",{className:"text-info",children:"Rating: "}),Object(r.jsx)("span",{children:s})]}),Object(r.jsxs)("li",{className:"list-group-item",children:[Object(r.jsx)("span",{className:"text-info",children:"Overview: "}),Object(r.jsx)("span",{children:l})]})]});return Object(r.jsxs)(i.a.Fragment,{children:[Object(r.jsx)("h3",{children:" Popular daily movies "}),Object(r.jsx)(J,{leftElement:u,rightElement:j,leftCol:3,rightCol:9})]})},q=W,z=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{className:"jumbotron text-center",children:"Welcome to Movies App!"}),Object(r.jsx)(q,{})]})},Q=(n(41),n(42),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).movieServices=new h,e}return Object(l.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return Object(r.jsx)(x,{children:Object(r.jsx)(N,{value:this.movieServices,children:Object(r.jsx)(p.a,{children:Object(r.jsxs)("div",{children:[Object(r.jsx)(f,{}),Object(r.jsxs)(w.c,{children:[Object(r.jsx)(w.a,{path:"/",component:z,exact:!0}),Object(r.jsx)(w.a,{path:"/people/:id?",component:K}),Object(r.jsx)(w.a,{path:"/movies",exact:!0,component:T}),Object(r.jsx)(w.a,{path:"/movies/:id",render:function(e){var t=e.match;return Object(r.jsx)(L,{itemId:t.params.id})}}),Object(r.jsx)(w.a,{render:function(){return Object(r.jsx)("h2",{children:"Page not found"})}})]})]})})})})}}]),n}(a.Component));s.a.render(Object(r.jsx)(Q,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.3ff9d925.chunk.js.map