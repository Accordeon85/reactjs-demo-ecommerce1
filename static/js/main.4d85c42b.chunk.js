(this["webpackJsonpprojet-ecommerce1"]=this["webpackJsonpprojet-ecommerce1"]||[]).push([[0],{103:function(e,t,a){e.exports=a.p+"static/media/default.be531d31.png"},122:function(e,t,a){e.exports=a(244)},127:function(e,t,a){},128:function(e,t,a){},241:function(e,t,a){},242:function(e,t,a){var n={"./default.png":103,"./fraise.png":243,"./guitare_classique.png":67,"./piano.png":68};function r(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=242},243:function(e,t,a){e.exports=a.p+"static/media/fraise.ea021390.png"},244:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(15),c=a.n(i),l=(a(127),a(128),a(9)),o=a(5),s=a(18),u=Object(s.b)((function(e){return{basket:e.basket}}))((function(e){var t=e.basket,a=t?t.length:0;return r.a.createElement("div",null,r.a.createElement("div",{className:"titlebar"},r.a.createElement("table",{className:"titletable"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("h1",null,"D\xe9mo e-commerce (wip)")),r.a.createElement("td",{className:"rightinfos"},r.a.createElement("ul",{className:"linklist"},r.a.createElement("li",null,r.a.createElement(l.b,{to:"../articles",className:"rightLink"},"Articles")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"../panier",className:"rightLink"},"Panier ",a>0?"("+a+")":null)),r.a.createElement("li",null,r.a.createElement(l.b,{to:"../infospratiques",className:"rightLink"},"Infos pratiques")))))))),r.a.createElement("div",{className:"maindescriptionbar"},r.a.createElement(l.b,{to:"../"},"Accueil")," - ",r.a.createElement(l.b,{to:"../articles/Guitare"},"Guitares")," - ",r.a.createElement(l.b,{to:"../articles/Piano"},"Pianos")," - Accord\xe9ons - Banjos - Clarinettes - Archives (articles non disponibles)"))})),m=a(254),d=a(67),p=a.n(d),E=a(68),f=a.n(E),g=[{id:"1",name:"Guitare",displayName:"Guitares",imageLink:p.a},{id:"2",name:"Piano",displayName:"Pianos",imageLink:f.a}],b=function(e){return e.categories.map((function(e){return r.a.createElement("div",{key:e.id,className:"categorycontainer"},r.a.createElement(l.b,{to:"./articles/".concat(e.name)},r.a.createElement(m.a,{src:e.imageLink,verticalAlign:"middle",className:"articleimage",fluid:!0}),r.a.createElement("span",null,r.a.createElement("h4",null,e.displayName))))}))},k=function(){return r.a.createElement("div",null,r.a.createElement(u,null),r.a.createElement("div",null,r.a.createElement("h4",null,"Cat\xe9gories")),r.a.createElement("div",{className:"categories"},r.a.createElement(b,{categories:g})))},v=(a(66),a(255)),h=a(251),O=a(252),y=a(253),j=(a(241),function(e){try{return a(242)("./".concat(e))}catch(t){return a(103)}}),B=function(e){var t,a=e.article,n=e.updateBasket,i=e.isInBasket,c=void 0!==i&&i?r.a.createElement(v.a,{size:"sm",className:"btnRemoveFromBasket",onClick:n},"Retirer du panier"):r.a.createElement(v.a,{size:"sm",className:"btnAddToBasket",onClick:n},"Ajouter au panier");return r.a.createElement(h.a,{className:"articlecontainer"},r.a.createElement(O.a,null,r.a.createElement(y.a,{sm:"2"},r.a.createElement("img",{src:j(a.imageLink),verticalAlign:"middle",className:"articleimage",alt:a.imageLink})),r.a.createElement(y.a,{sm:"4"},r.a.createElement("span",null,r.a.createElement("h4",null,a.name)),r.a.createElement("div",{className:"price"},(t=a.price,"".concat(t," \u20ac"))),r.a.createElement("span",null,r.a.createElement("ul",null,a.description.split("\n").map((function(e){return r.a.createElement("li",{key:e},e)}))))),r.a.createElement(y.a,{sm:"6",style:{marginTop:"1em"}},c)))},N=function(e){return function(t){t({type:"REMOVE_FROM_BASKET",id:e})}},P=function(e){return(e.category?e.articles.filter((function(t){return t.category===e.category})):e.articles).map((function(t){return r.a.createElement("div",{key:t.id},r.a.createElement(B,{article:t,isInBasket:e.isInBasket(t.id),updateBasket:function(){return e.onUpdateBasket(t.id)}}))}))},T=Object(s.b)((function(e){return{basket:e.basket}}),(function(e){return{addToBasket:function(t){return e(function(e){return function(t){t({type:"ADD_TO_BASKET",id:e})}}(t))},removeFromBasket:function(t){return e(N(t))}}}))((function(e){var t=e.articles,a=e.basket,n=e.addToBasket,i=e.removeFromBasket,c=Object(o.g)().category,l=[];l=c?t.filter((function(e){return e.category===c})):t;var s=function(e){var t=l.find((function(t){return t.id===e}));return a.includes(t)};return r.a.createElement("div",{className:"articles"},r.a.createElement(P,{articles:l,isInBasket:s,category:c,onUpdateBasket:function(e){return s(e)?i(e):n(e)}}))})),A={guitareC6:{id:"1",name:"Guitare classique 6 cordes",category:"Guitare",price:320,imageLink:"guitare_classique.png",description:"Table en c\xe8dre canadien massif\nFond et \xe9clisses en acajou\nDiapason: 630 mm"},guitareC7:{id:"2",name:"Guitare classique 7 cordes",category:"Guitare",price:380,imageLink:"guitare_classique.png",description:"Table en c\xe8dre canadien massif\nTouche en \xe9rable\nFinition: Vernis marron clair haute brillance"},PianoD72:{id:"3",name:"Piano droit 72 touches",category:"Piano",price:780,imageLink:"piano.png",description:"72 touches\n2 p\xe9dales\nPoids: 208 kg"},PianoD88:{id:"4",name:"Piano droit 88 touches",category:"Piano",price:880,imageLink:"piano.png",description:"88 touches\n3 p\xe9dales\nPoids: 227 kg"},PianoN88:{id:"5",name:"Piano num\xe9rique 88 touches",category:"Piano",price:460,imageLink:"piano.png",description:"88 touches\n2 p\xe9dales\n12 sons\nM\xe9tronome\nSortie casque\nPoids: 12 kg"}},L=function(){var e=Object.values(A),t=Object(o.g)().category,a=t?r.a.createElement("h2",null,"Cat\xe9gorie : ",t):null;return r.a.createElement("div",null,r.a.createElement(u,null),a,r.a.createElement(T,{articles:e}))},_=a(32),w=a(113),S=function(e){return e.articles.map((function(t){return r.a.createElement("div",{key:t.id},r.a.createElement(B,{article:t,isInBasket:!0,updateBasket:function(){return e.onUpdateBasket(t.id)}}))}))},q=Object(s.b)((function(e){return{basket:e.basket}}),(function(e){return{removeFromBasket:function(t){return e(N(t))}}}))((function(e){var t=e.articles,a=(e.basket,e.removeFromBasket),i=Object(n.useState)(t),c=Object(w.a)(i,2),l=c[0],o=c[1];return r.a.createElement("div",{className:"articles"},r.a.createElement(S,{articles:l,onUpdateBasket:function(e){a(e),o(Object(_.a)(t.filter((function(e){return localStorage.getItem(e.id)}))))}}))})),x=function(){var e=Object.values(A).filter((function(e){return localStorage.getItem(e.id)})),t=e.length>0?r.a.createElement(q,{articles:e}):r.a.createElement("h4",null,"Aucun \xe9l\xe9ment ajout\xe9 au panier.");return r.a.createElement("div",null,r.a.createElement(u,null),r.a.createElement("h2",null,"Votre panier"),t)},I=function(){return r.a.createElement("div",null,r.a.createElement(u,null),r.a.createElement("ul",null,r.a.createElement("li",null,"3, rue des Quatre Temps"),r.a.createElement("li",null,"44848484 Saint-Octave-Les-Tonalit\xe9s")))},D=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Page not found"))};var F=function(){return r.a.createElement(l.a,null,r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:"/",component:k}),r.a.createElement(o.b,{exact:!0,path:"/articles/:category?",component:L}),r.a.createElement(o.b,{exact:!0,path:"/panier",component:x}),r.a.createElement(o.b,{exact:!0,path:"/infospratiques",component:I}),r.a.createElement(o.b,{exact:!0,path:"/404",component:D}),r.a.createElement(o.a,{to:"/404"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=a(30),G=a(112),M=a(33),R={basket:[]},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_BASKET":var a=Object.values(A),n=a.find((function(e){return e.id===t.id}));return e.basket.includes(n)?{state:e}:(localStorage.setItem(n.id,n.name),Object(M.a)(Object(M.a)({},e),{},{basket:[].concat(Object(_.a)(e.basket),[n])}));case"REMOVE_FROM_BASKET":var r=Object.values(A),i=r.find((function(e){return e.id===t.id}));return localStorage.removeItem(i.id),Object(M.a)(Object(M.a)({},e),{},{basket:Object(_.a)(e.basket.filter((function(e){return e.id!==t.id})))});default:return e}},K=Object(C.c)(U,R,Object(C.a)(G.a)),V=function(e){return r.a.createElement(s.a,Object.assign({store:K},e))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null,r.a.createElement(F,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},66:function(e,t,a){},67:function(e,t,a){e.exports=a.p+"static/media/guitare_classique.00ce7103.png"},68:function(e,t,a){e.exports=a.p+"static/media/piano.15743033.png"}},[[122,1,2]]]);
//# sourceMappingURL=main.4d85c42b.chunk.js.map