(this["webpackJsonpcotizador-cripto"]=this["webpackJsonpcotizador-cripto"]||[]).push([[0],{34:function(e,n,t){},35:function(e,n,t){},36:function(e,n,t){"use strict";t.r(n);var c,a,o,r,i,s,d,l,j,b,p,u,f,m=t(1),O=t.n(m),x=t(11),h=t.n(x),g=t(5),v=t.n(g),k=t(6),y=t(4),w=t(2),C=t(3),z=t.p+"static/media/cryptomonedas.51f1d2ed.png",N=t(0),A=C.a.label(c||(c=Object(w.a)(["\nfont-family: 'Bebas Neue', cursive;\ncolor: #fff;\ntext-transform:uppercase;\nfont-weight:bold;\nfont-size:2.4rem;\nmagin-top:2rem;\ndisplay:block;\n"]))),E=C.a.select(a||(a=Object(w.a)(["\nwidth:100%;\ndisplay:block;\npadding:1rem;\n-webkit-appearance:none;\nborder-radius:10px;\nfont-size:1.1rem;\n"]))),S=C.a.label(o||(o=Object(w.a)(["\nfont-family: 'Bebas Neue', cursive;\ncolor: #fff;\ntext-transform:uppercase;\nfont-weight:bold;\nfont-size:2.4rem;\nmagin-top:2rem;\ndisplay:block;\n"]))),I=C.a.select(r||(r=Object(w.a)(["\nwidth:100%;\ndisplay:block;\npadding:1rem;\n-webkit-appearance:none;\nborder-radius:10px;\nfont-size:1.1rem;\n"]))),D=t(13),H=t.n(D),P=C.a.input(i||(i=Object(w.a)(["\nmargin:auto;\nmargin-top:20px;\nfont-weight:bold;\nfont-size:20px;\npadding:10px;\nbackground-color:#66a2fe;\nborder:none;\nwidth:100%;\nborder-radius:10px;\ncolor:#fff;\ntransition:background-color .3s ease;\n\n&:hover{\n    background-color:#326AC0;\n    cursor:pointer; \n}\n"]))),R=[{codigo:"ARS",nombre:"Peso Argentino"},{codigo:"USD",nombre:"Dolar de Estados Unidos"},{codigo:"MXN",nombre:"Peso Mexicano"},{codigo:"EUR",nombre:"Euro"}],U=function(e){var n=e.guardarDatosCotizacion,t=Object(m.useState)([]),c=Object(y.a)(t,2),a=c[0],o=c[1],r=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0,c=Object(m.useState)(n),a=Object(y.a)(c,2),o=a[0],r=a[1];return[o,function(){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(A,{children:e}),Object(N.jsxs)(E,{onChange:function(e){return r(e.target.value)},value:o,children:[Object(N.jsx)("option",{value:"",children:"-- Seleccione --"}),t.map((function(e){return Object(N.jsx)("option",{value:e.codigo,children:e.nombre},e.codigo)}))]})]})}]}("Elige la moneda","",R),i=Object(y.a)(r,2),s=i[0],d=i[1],l=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0,c=Object(m.useState)(n),a=Object(y.a)(c,2),o=a[0],r=a[1];return[o,function(){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(S,{children:e}),Object(N.jsxs)(I,{onChange:function(e){return r(e.target.value)},value:o,children:[Object(N.jsx)("option",{value:"",children:"-- Seleccione --"}),t.map((function(e){return Object(N.jsx)("option",{value:e.CoinInfo.Name,children:e.CoinInfo.FullName},e.CoinInfo.Id)}))]})]})}]}("Elige la criptomoneda","",a),j=Object(y.a)(l,2),b=j[0],p=j[1];Object(m.useEffect)((function(){var e=function(){var e=Object(k.a)(v.a.mark((function e(){var n,t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD",e.next=3,fetch("https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD");case 3:return n=e.sent,e.next=6,n.json();case 6:t=e.sent,o(t.Data);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===s||""===b)return H.a.fire("Error","Completa todos los campos","error");n(s,b)},children:[Object(N.jsx)(d,{}),Object(N.jsx)(p,{}),Object(N.jsx)(P,{type:"submit",value:"CALCULAR"})]}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{})]})},F=C.a.div(s||(s=Object(w.a)(["\ncolor:#fff;\nfont-family: sans-serif;\ntext-align:center;\nfont-family: Arial, Helvetica, sans-serif;\np{\n    margin:5px;\n}\n"]))),B=C.a.p(d||(d=Object(w.a)(["\nfont-size:18px;\n"]))),G=C.a.p(l||(l=Object(w.a)(["\nfont-size:20px;\nmargin-bottom:10px;\n\nspan{\n    font-size:30px;\n    font-weight:bold;\n}\n\n"]))),L=C.a.p(j||(j=Object(w.a)(["\ncolor:#a70c2d;\nfont-size:25px;\nfont-weight:bold;\n\n"]))),T=C.a.p(b||(b=Object(w.a)(["\ncolor:#0da931;\nfont-size:25px;\nfont-weight:bold;\n"]))),M=function(e){var n=e.cotizacion;return 0===Object.keys(n).length?null:Object(N.jsxs)(F,{children:[parseFloat(n.CHANGEPCT24HOUR)<0?Object(N.jsxs)(L,{children:["VARIACION ",n.CHANGEPCT24HOUR]}):Object(N.jsxs)(T,{children:["VARIACION ",n.CHANGEPCT24HOUR]}),Object(N.jsxs)(G,{children:["El precio es: ",Object(N.jsx)("span",{children:n.PRICE})]}),Object(N.jsxs)(B,{children:["Precio mas alto del d\xeda: ",n.HIGHDAY]}),Object(N.jsxs)(B,{children:["Precio mas bajo del d\xeda: ",n.LOWDAY]}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{})]})},Y=(t(34),function(){return Object(N.jsxs)("div",{className:"sk-chase",children:[Object(N.jsx)("div",{className:"sk-chase-dot"}),Object(N.jsx)("div",{className:"sk-chase-dot"}),Object(N.jsx)("div",{className:"sk-chase-dot"}),Object(N.jsx)("div",{className:"sk-chase-dot"}),Object(N.jsx)("div",{className:"sk-chase-dot"}),Object(N.jsx)("div",{className:"sk-chase-dot"})]})}),J=C.a.div(p||(p=Object(w.a)(["\nmax-width: 900px;\nmargin: 0 auto;\n@media(min-width:992px){\n    display:grid;\n    grid-template-columns: repeat(2,1fr);\n    column-gap:2rem;\n}\n"]))),V=C.a.img(u||(u=Object(w.a)(["\nmax-width:100%;\nmargin-top:3rem;\nmax-heigth:70%\n"]))),W=C.a.h1(f||(f=Object(w.a)(["\nfont-family: 'Bebas Neue', cursive;\ncolor: #fff;\ntext-align:left;\nfont-weigth:700;\nfont-size:50px;\nmargin-bottom:50px;\nmargin-top:40px;\n\n&::after{\n    content: '';\n    width:100px;\n    height:6px;\n    background-color:#66A2FE;\n    display:block;\n}\n"]))),X=function(){var e=Object(m.useState)({}),n=Object(y.a)(e,2),t=n[0],c=n[1],a=Object(m.useState)({moneda:"",cripto:""}),o=Object(y.a)(a,2),r=o[0],i=o[1],s=r.moneda,d=r.cripto,l=Object(m.useState)(!1),j=Object(y.a)(l,2),b=j[0],p=j[1],u=function(){var e=Object(k.a)(v.a.mark((function e(){var n,t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),n="https://min-api.cryptocompare.com/data/pricemultifull?fsyms=".concat(d,"&tsyms=").concat(s),e.next=4,fetch(n);case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,c(a.DISPLAY[d][s]),setTimeout((function(){p(!1)}),3e3);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.useEffect)((function(){""!==s&&""!==d&&u()}),[s,d]),Object(N.jsxs)(J,{children:[Object(N.jsx)("div",{children:Object(N.jsx)(V,{src:z,alt:"imagen cripto"})}),Object(N.jsxs)("div",{children:[Object(N.jsx)(W,{children:"Cotizador de criptomonedas"}),Object(N.jsx)(U,{guardarDatosCotizacion:function(e,n){i({moneda:e,cripto:n})}}),b?Object(N.jsx)(Y,{}):Object(N.jsx)(M,{cotizacion:t})]})]})};t(35);h.a.render(Object(N.jsx)(O.a.StrictMode,{children:Object(N.jsx)(X,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.1ad58f5b.chunk.js.map