(this.webpackJsonpcinemaapp=this.webpackJsonpcinemaapp||[]).push([[0],{120:function(e,n,t){e.exports=t(245)},244:function(e,n,t){},245:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(34),i=t.n(o),c=t(7),l=t(6),s=t(109),u=t(36),p=t(30),d=t(16),m=t(17),h=t(19),f=t(18),b=t(20),v=t(22),g=t.n(v),k=t(110),E=t.n(k).a.create({baseURL:"https://api.themoviedb.org/3/movie/now_playing?api_key=".concat("c2a3bc12e5a28aefbab1bbb6777a765b","&language=en-US&page=1")}),O=t(35),x=function(e){var n="/seats/".concat(e.filmId,"/").concat(e.time.split(" ").join(""));return r.a.createElement(u.b,{to:n},r.a.createElement("button",{onClick:e.handleClick},e.time))},y={setFilmToBook:function(e){return{type:"FILM_TO_BOOK_CHOSEN",payload:e}},setTimeOfBooking:function(e){return{type:"TIME_OF_BOOKING_CHOSEN",payload:e}},setFilmTitleToBook:function(e){return{type:"FILM_TITLE_CHOSEN",payload:e}}},j=function(e){function n(e){var t;return Object(d.a)(this,n),(t=Object(h.a)(this,Object(f.a)(n).call(this,e))).screeningTimeList=["4:00 PM","6:30 PM","9:00 PM"],t.handleClick=t.handleClick.bind(Object(O.a)(t)),t}return Object(b.a)(n,e),Object(m.a)(n,[{key:"handleClick",value:function(e){this.props.setFilmToBook(this.props.film.id),this.props.setTimeOfBooking(e.target.innerText),this.props.setFilmTitleToBook(this.props.film.title)}},{key:"render",value:function(){var e=this,n=this.props.film,t="https://image.tmdb.org/t/p/w300/".concat(n.poster_path);return r.a.createElement("li",null,r.a.createElement("span",null,r.a.createElement("img",{src:t,alt:""})),r.a.createElement("span",null,n.title),r.a.createElement("span",null,n.overview),r.a.createElement("span",null,"Book a ticket:",this.screeningTimeList.map((function(t,a){return r.a.createElement(x,{key:a,time:t,filmId:n.id,handleClick:e.handleClick})}))))}}]),n}(r.a.Component),S=Object(c.b)(null,y)(j),T=function(e){function n(){return Object(d.a)(this,n),Object(h.a)(this,Object(f.a)(n).apply(this,arguments))}return Object(b.a)(n,e),Object(m.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchCurrentFilms()}},{key:"render",value:function(){var e=this.props.currentFilms;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Movie List"),r.a.createElement("ol",null,e.map((function(e){return r.a.createElement(S,{key:e.id,film:e})}))))}}]),n}(a.Component),w=Object(c.b)((function(e){return{currentFilms:e.currentFilms}}),{fetchCurrentFilms:function(){return function(e){var n,t,a;return g.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return a=function(e){var n;return g.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return n=[],a.next=3,g.a.awrap(Promise.all(e.map((function(e){var a;return g.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,g.a.awrap(t(e));case 3:a=r.sent,n.push(a),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.log("error"+r.t0);case 10:case"end":return r.stop()}}),null,null,[[0,7]])}))));case 3:case"end":return a.stop()}}))},r.next=3,g.a.awrap(E.get());case 3:return n=r.sent,r.t0=console,r.next=7,g.a.awrap(n.data.results);case 7:r.t1=r.sent,r.t0.log.call(r.t0,r.t1),t=function(e){fetch("http://localhost:8000/api/movies",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({name:e.title,overview:e.overview,hoursArray:[4,6.5,9]})}).catch((function(e){console.log(e)}))},a(n.data.results),e({type:"FETCH_CURRENT_FILMS_SUCCESS",payload:n.data.results});case 12:case"end":return r.stop()}}))}}})(T),C=t(9),_=t(10);function F(){var e=Object(C.a)(["\n  font-size: 1.2rem;\n  font-weight: 400;\n"]);return F=function(){return e},e}function A(){var e=Object(C.a)(["\n  background-color: #fafafa;\n  height: fit-content;\n  border: 2px solid #2F4858;\n  border-radius: 5px; \n  padding: 1.5rem;\n  margin-top: 20vh;\n  text-align: center;\n"]);return A=function(){return e},e}function N(){var e=Object(C.a)(["\n  background-color: rgba(47, 72, 88, .7);\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  display: flex;\n  justify-content: center;\n"]);return N=function(){return e},e}function M(){var e=Object(C.a)(["\n  font-size: 1.2rem;\n  color: #fafafa;\n  padding: 0.5rem 1.2rem;\n  border: none;\n  border-radius: 5px;\n  background-color: #2f4858;\n  margin: 10px;\n  cursor: pointer;\n\n  &:disabled,\n  &:disabled&:hover {\n    background-color: rgba(47, 72, 88, 0.6);\n    box-shadow: none;\n    cursor: default;\n  }\n\n  &:focus,\n  &:active,\n  &:hover {\n    outline: none;\n    background-color: #005263;\n    box-shadow: 2px 4px 8px #87898a;\n  }\n"]);return M=function(){return e},e}function I(){var e=Object(C.a)(["\n  font-size: 0.8rem;\n  color: #d8000c;\n  background-color: #ffbaba;\n  text-align: center;\n  padding: 2px;\n  margin: 2px;\n"]);return I=function(){return e},e}function B(){var e=Object(C.a)(["\n  border: 1px solid grey;\n  border-radius: 5px;\n  font-size: 1rem;\n  padding: 8px;\n  margin: 5px;\n  min-width: 240px;\n\n  &:focus {\n    outline: none;\n    box-shadow: 2px 4px 8px #87898a;\n  }\n\n  &::placeholder {\n    color: #87898a;\n  }\n"]);return B=function(){return e},e}function L(){var e=Object(C.a)(["\n  margin: 1rem 0;\n"]);return L=function(){return e},e}function P(){var e=Object(C.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  margin-top: 10px;\n"]);return P=function(){return e},e}function R(){var e=Object(C.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  max-width: 500px;\n  margin: auto;\n  padding: 1rem 1.5rem;\n  text-align: center;\n  border: 2px solid #2f4858;\n  border-radius: 5px;\n"]);return R=function(){return e},e}function K(){var e=Object(C.a)(["\n  text-align: center;\n  margin: 15px;\n"]);return K=function(){return e},e}function H(){var e=Object(C.a)(["\n  &::before, &::after  {\n    content: '","';\n    margin: 2px;\n    font-size: 12px;\n  }\n"]);return H=function(){return e},e}function D(){var e=Object(C.a)(["\n  // Hide checkbox visually but remain accessible to screen readers.\n  // Source: https://polished.js.org/docs/#hidevisually\n  border: 0;\n  clip: rect(0 0 0 0);\n  clippath: inset(50%);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n"]);return D=function(){return e},e}function U(){var e=Object(C.a)(["\n  display: inline-block;\n  vertical-align: middle;\n"]);return U=function(){return e},e}function z(){var e=Object(C.a)(["\n  height: 20px;\n  width: 20px;\n  border-radius: 5px;\n  background-color: ",";\n  margin: 3px 2px;\n  display: inline-block;\n  cursor: pointer;\n  color: ",";\n  font-size: 12px;\n  line-height: 20px;\n  text-align: center;\n  user-select: none;\n  transition: background-color 0.1s;\n\n  &:hover {\n      color: ",";\n      background-color: ",";\n  }\n\n  @media (min-width: 400px) {\n    height: 30px;\n    width: 30px;\n    line-height: 30px;\n  }\n"]);return z=function(){return e},e}function Y(){var e=Object(C.a)(["\n  text-align: center;\n  color: #fafafa;\n  background-color: #000;\n  width: 280px;\n  border-radius: 5px;\n  font-size: 0.8rem;\n  padding: 2px;\n  margin: auto;\n\n  @media (min-width: 400px) {\n    width: 350px;\n  }\n"]);return Y=function(){return e},e}var G=_.a.div(Y()),J=_.a.div(z(),(function(e){return e.disabled?"rgba(47, 72, 88, .6)":e.checked?"black":"green"}),(function(e){return e.disabled?"transparent":e.checked?"#fafafa":"transparent"}),(function(e){return e.disabled?"transparent":"#fafafa"}),(function(e){return e.disabled?"rgba(47, 72, 88, .6)":"purple"})),q=_.a.label(U()),V=_.a.input.attrs({type:"checkbox"})(D()),Z=_.a.div(H(),(function(e){return e.rowName})),X=_.a.div(K()),$=_.a.div(R()),Q=_.a.form(P()),W=_.a.p(L()),ee=_.a.input(B()),ne=_.a.p(I()),te=_.a.button(M()),ae=_.a.div(N()),re=_.a.div(A()),oe=_.a.p(F()),ie={addTakenSeat:function(e){return{type:"ADD_TAKEN_SEAT",payload:e}},removeTakenSeat:function(e){return{type:"REMOVE_TAKEN_SEAT",payload:e}}},ce=function(e){function n(e){var t;return Object(d.a)(this,n),(t=Object(h.a)(this,Object(f.a)(n).call(this,e))).handleCheckboxChange=function(e){var n;return g.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,g.a.awrap(t.setState({checked:e.target.checked}));case 2:n="".concat(t.props.id).concat(t.props.rowName),t.state.checked?t.props.addTakenSeat(n):t.props.removeTakenSeat(n);case 4:case"end":return a.stop()}}))},t.state={checked:!1},t.handleCheckboxChange.bind(Object(O.a)(t)),t}return Object(b.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){var e="".concat(this.props.id).concat(this.props.rowName),n=this.props.taken.indexOf(e)>-1;return r.a.createElement(q,{checked:n||this.state.checked},r.a.createElement(V,{checked:n||this.state.checked,onChange:this.handleCheckboxChange,disabled:n}),r.a.createElement(J,{checked:n||this.state.checked,disabled:n},this.props.id))}}]),n}(a.Component),le=Object(c.b)(null,ie)(ce),se=function(e){for(var n=[],t=0;t<10;t++)n.push(r.a.createElement(le,{id:t+1,key:"seat".concat(t+1),rowName:e.rowName,taken:e.taken}));return r.a.createElement(Z,{rowName:e.rowName},n)},ue=function(e){for(var n=[],t=["A","B","C","D","E","F","G","H"],a=0;a<8;a++)n.push(r.a.createElement(se,{key:"row".concat(a),rowName:t[a],taken:e.taken}));return r.a.createElement(X,null,n)},pe=t(247),de=t(246),me=function(e){var n=e.input,t=e.type,a=e.label,o=e.meta,i=o.touched,c=o.error;return r.a.createElement("div",null,r.a.createElement(ee,Object.assign({},n,{placeholder:a,type:t,autoComplete:"off"})),i&&c&&r.a.createElement(ne,null,c))},he=function(e){function n(){return Object(d.a)(this,n),Object(h.a)(this,Object(f.a)(n).apply(this,arguments))}return Object(b.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){var e=this.props,n=e.handleSubmit,t=e.pristine,a=e.submitting;return r.a.createElement($,null,r.a.createElement("h2",null,"Reservation form"),r.a.createElement(W,null,"To make a reservation, please enter your name and email address so we can send you a confirmation message with all the further details"),r.a.createElement(Q,{onSubmit:n(this.props.onFormSubmit)},r.a.createElement(pe.a,{name:"username",type:"text",component:me,label:"username"}),r.a.createElement(pe.a,{name:"email",type:"email",component:me,label:"email"}),r.a.createElement(te,{type:"submit",disabled:t||a},"Submit")))}}]),n}(a.Component),fe=he=Object(de.a)({form:"reservationForm",validate:function(e){var n=e.username,t=e.email,a={};return n?n.length>15&&(a.username="The name can have max 15 characters"):a.username="Your name is required",t?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t)||(a.email="Invalid email address"):a.email="Your email is required",a}})(he),be={resetTakenSeats:function(){return{type:"RESET_TAKEN_SEATS"}}},ve=function(e){function n(){var e,t;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(h.a)(this,(e=Object(f.a)(n)).call.apply(e,[this].concat(r)))).handleClick=function(){t.props.resetTakenSeats()},t}return Object(b.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){return i.a.createPortal(r.a.createElement(ae,null,r.a.createElement(re,null,r.a.createElement("h2",null,"The confirmation email was sent"),r.a.createElement(W,null,"You reserved ",this.props.seats," seats for the movie:"),r.a.createElement(oe,null,'"',this.props.film,'"'),r.a.createElement(W,null,"The screening will take place at ",this.props.time),r.a.createElement(u.b,{to:"/"},r.a.createElement(te,{onClick:this.handleClick},"OK")))),document.querySelector("#modal"))}}]),n}(a.Component),ge=Object(c.b)(null,be)(ve),ke=function(e){function n(e){var t;return Object(d.a)(this,n),(t=Object(h.a)(this,Object(f.a)(n).call(this,e))).onFormSubmit=function(e){var n=e.username,a=e.email;if(console.log("You made a reservation of seats: . Username: ".concat(n," email address: ").concat(a)),0===t.props.takenSeats.length)alert("You need to choose at least one seat");else if(t.props.takenSeats.length>10)alert("You can choose maximum 10 seats on one reservation");else{t.setState({showModal:!0});!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Ad Astra",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,t=arguments.length>2?arguments[2]:void 0;fetch("http://localhost:8000/api/movies/".concat(e),{headers:{"Content-Type":"application/json"},method:"PUT",body:JSON.stringify({seatsToReserve:t,hour:n})})}("Ad Astra",4,t.props.takenSeats)}},t.state={taken:["1A","7C"],showModal:!1},t}return Object(b.a)(n,e),Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Ad Astra",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"6:30PM";return"4:00PM"===n?0:"6:30PM"===n?1:"9:00PM"===n&&2,fetch("http://localhost:8000/api/movies/".concat(e),{headers:{"Content-Type":"application/json"},method:"GET"}).then((function(e){return e.json()})).then((function(e){return e[0].hours[0].reservedSeats})).catch((function(e){return console.log(e)}))})("Ad Astra",0).then((function(n){e.setState({taken:n})}))}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.showModal&&r.a.createElement(ge,{film:this.props.bookedTitle,seats:this.props.takenSeats.length,time:this.props.bookingTime}),r.a.createElement("h1",null,"Choose your seats for the movie"),r.a.createElement(G,null,"screen"),r.a.createElement(ue,{taken:this.state.taken}),r.a.createElement(fe,{onFormSubmit:this.onFormSubmit}))}}]),n}(a.Component);var Ee=Object(c.b)((function(e){return{takenSeats:e.takenSeats.takenSeats,bookingTime:e.bookingTime,bookedTitle:e.bookedTitle}}))(ke),Oe=function(){var e=Object(c.c)((function(e){return e.currentFilms}));return r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement("div",null,r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/",exact:!0,component:w}),r.a.createElement(p.a,{path:"/film",exact:!0,component:S}),e.map((function(e,n){var t="/seats/".concat(e.id,"/:hour");return r.a.createElement(p.a,{key:n,path:t,exact:!0,component:Ee})}))))))},xe=t(248),ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"FETCH_CURRENT_FILMS_SUCCESS":return n.payload;default:return e}},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"FILM_TO_BOOK_CHOSEN":return n.payload;default:return e}},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"TIME_OF_BOOKING_CHOSEN":return n.payload;default:return e}},Te=t(116),we=t(115),Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{takenSeats:[]},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD_TAKEN_SEAT":return{takenSeats:[].concat(Object(we.a)(e.takenSeats),[n.payload])};case"REMOVE_TAKEN_SEAT":var t=e.takenSeats.filter((function(e){return e!==n.payload}));return{takenSeats:t};case"RESET_TAKEN_SEATS":return Object(Te.a)({},e,{takenSeats:[]});default:return e}},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"FILM_TITLE_CHOSEN":return n.payload;default:return e}},Fe=Object(l.c)({form:xe.a,currentFilms:ye,bookedFilm:je,bookingTime:Se,takenSeats:Ce,bookedTitle:_e}),Ae=(t(244),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d),Ne=Object(l.e)(Fe,Ae(Object(l.a)(s.a)));i.a.render(r.a.createElement(c.a,{store:Ne},r.a.createElement(Oe,null)),document.getElementById("root"))}},[[120,1,2]]]);
//# sourceMappingURL=main.61042dcb.chunk.js.map