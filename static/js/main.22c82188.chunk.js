(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,n,t){"use strict";t.r(n);var a=t(2),i=t.n(a),o=t(60),r=t.n(o),u=(t(67),t(26)),c=t(27),l=t(29),s=t(28),h=t(30),p=t(61),d=t.n(p),m=t(6),g=t.n(m);g.a.initializeApp({apiKey:"AIzaSyD1C9Nn6MOuAuQNDKXXvT5rdePgp97F-dQ",authDomain:"socialauth-95094.firebaseapp.com"});var f=function(e){function n(){var e,t;Object(u.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(t=Object(l.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(i)))).state={isSignedIn:!1},t.uiConfig={signInFlow:"popup",signInOptions:[g.a.auth.GoogleAuthProvider.PROVIDER_ID,g.a.auth.EmailAuthProvider.PROVIDER_ID],callbacks:{signInSuccess:function(){return!1}}},t.componentDidMount=function(){g.a.auth().onAuthStateChanged(function(e){t.setState({isSignedIn:!!e}),console.log("user",e)})},t}return Object(h.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return i.a.createElement("div",null,this.state.isSignedIn?i.a.createElement("span",null,i.a.createElement("div",null,"Signed In!"),i.a.createElement("button",{onClick:function(){return g.a.auth().signOut()}},"Sign out!"),i.a.createElement("h1",null,"Welcome ",g.a.auth().currentUser.displayName),i.a.createElement("image",{alt:"profile picture",src:g.a.auth().currentUser.photoURL})):i.a.createElement(d.a,{uiConfig:this.uiConfig,firebaseAuth:g.a.auth()}))}}]),n}(a.Component),b=function(e){function n(){return Object(u.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(h.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return i.a.createElement(f,null)}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},62:function(e,n,t){e.exports=t(122)},67:function(e,n,t){}},[[62,1,2]]]);
//# sourceMappingURL=main.22c82188.chunk.js.map