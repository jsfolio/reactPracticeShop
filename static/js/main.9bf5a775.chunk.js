(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{100:function(e,t,c){"use strict";c.r(t);var n,s,i=c(0),a=c.n(i),j=c(23),r=c.n(j),o=(c(74),c(38)),l=c(9),d=c(104),b=c(103),h=c(105),O=c(106),u=(c(75),[{id:0,title:"White and Black",content:"Born in France",price:12e4},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4},{id:2,title:"Grey Yordan",content:"Born in the States",price:13e4}]),p=c(36),x=c(8),m=c(51),g=c(52),f=c(44),k=c.n(f),v=c(1),N=g.a.div(n||(n=Object(m.a)(["\n  padding: 20px;\n"]))),S=g.a.h4(s||(s=Object(m.a)(["\n  font-size: 30px;\n  color: ",";\n"])),(function(e){return e.whatColor}));function w(e){var t=e.stock;return Object(v.jsxs)("p",{children:["\uc7ac\uace0: ",t," "]})}var C=function(e){var t=e.shoes,c=e.stock,n=e.setStock,s=Object(i.useState)(!0),a=Object(l.a)(s,2),j=a[0],r=a[1],o=Object(i.useState)(""),d=Object(l.a)(o,2),b=d[0],h=d[1];Object(i.useEffect)((function(){k.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){console.log("\ucef4\ud3ec\ub10c\ud2b8 \ub4f1\uc7a5\uc2dc/\uc5c5\ub370\uc774\ud2b8\uc2dc \uc2e4\ud589\ub429\ub2c8\ub2e4")})).catch((function(e){console.log(e)}))}),[]),Object(i.useEffect)((function(){var e=setTimeout((function(){r(!1)}),2e3);return function(){clearTimeout(e)}}),[b]);var O=Object(x.g)().id,u=t.find((function(e){return e.id==O})),p=Object(x.f)();return Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(N,{children:Object(v.jsx)(S,{whatColor:"#ff0000",children:"Detail"})}),Object(v.jsx)("input",{type:"text",onChange:function(e){h(e.target.value)}}),b,!0===j?Object(v.jsx)("div",{className:"alertBox",children:Object(v.jsx)("p",{children:"\ud488\uc808 \uc784\ubc15! \uc7ac\uace0\uac00 \uc5bc\ub9c8 \ub0a8\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."})}):null,Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-md-6",children:Object(v.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes".concat(u.id+1,".jpg"),width:"100%"})}),Object(v.jsxs)("div",{className:"col-md-6 mt-4",children:[Object(v.jsx)("h4",{className:"pt-5",children:u.title}),Object(v.jsx)("p",{children:u.content}),Object(v.jsx)("p",{children:u.price}),Object(v.jsx)(w,{stock:c,setStock:n}),Object(v.jsx)("button",{className:"btn btn-danger",onClick:function(){n([9,11,12])},children:"\uc8fc\ubb38\ud558\uae30"}),Object(v.jsx)("button",{className:"btn",onClick:function(){p.goBack()},children:"\ub4a4\ub85c\uac00\uae30"})]})]})]})};var B=function(){var e=Object(i.useState)(u),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(i.useState)(!1),a=Object(l.a)(s,2),j=a[0],r=a[1],m=Object(i.useState)([10,11,12]),g=Object(l.a)(m,2),f=g[0],N=g[1];return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(d.a,{bg:"primary",variant:"dark",children:Object(v.jsxs)(b.a,{children:[Object(v.jsx)(d.a.Brand,{href:"#home",children:"Navbar"}),Object(v.jsxs)(h.a,{className:"me-auto",children:[Object(v.jsx)(h.a.Link,{as:p.b,to:"/",children:"Home"}),Object(v.jsx)(h.a.Link,{as:p.b,to:"/detail",children:"Detail"}),Object(v.jsx)(h.a.Link,{href:"#pricing",children:"Pricing"})]})]})}),Object(v.jsxs)(O.a,{children:[Object(v.jsxs)(O.a.Item,{children:[Object(v.jsx)("img",{className:"d-block w-100",src:"https://file.mk.co.kr/meet/neds/2021/05/image_readtop_2021_515334_16221769004661509.jpg",alt:"First slide"}),Object(v.jsxs)(O.a.Caption,{children:[Object(v.jsx)("h3",{children:"First slide label"}),Object(v.jsx)("p",{children:"Nulla vitae elit libero, a pharetra augue mollis interdum."})]})]}),Object(v.jsxs)(O.a.Item,{children:[Object(v.jsx)("img",{className:"d-block w-100",src:"https://t1.kakaocdn.net/kakaoenterprise_com/images/img_kakaowork02.jpg",alt:"Second slide"}),Object(v.jsxs)(O.a.Caption,{children:[Object(v.jsx)("h3",{children:"Second slide label"}),Object(v.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})]}),Object(v.jsxs)(O.a.Item,{children:[Object(v.jsx)("img",{className:"d-block w-100",src:"https://a.ksd-i.com/s/800_86400_ffdcd376ae6c60ce7a916b7f2c87faa4/static.koreastardaily.com/2017-05-16/94537-512838.jpg",alt:"Third slide"}),Object(v.jsxs)(O.a.Caption,{children:[Object(v.jsx)("h3",{children:"Third slide label"}),Object(v.jsx)("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur."})]})]})]}),Object(v.jsxs)(x.c,{children:[Object(v.jsx)(x.a,{exact:!0,path:"/",children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("div",{className:"row",children:c.map((function(e,t){return Object(v.jsx)(_,{shoes:c,index:t},t)}))}),!0===j?Object(v.jsx)("div",{children:"\ub85c\ub529\uc911\uc785\ub2c8\ub2e4..."}):null,Object(v.jsx)("button",{className:"btn btn-primary",onClick:function(){r(!0),k.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){r(!1),n([].concat(Object(o.a)(c),Object(o.a)(e.data)))})).catch((function(e){r(!1),console.log(e)}))},children:"\ub354\ubcf4\uae30"})]})}),Object(v.jsx)(x.a,{path:"/detail/:id",children:Object(v.jsx)(C,{shoes:c,stock:f,setStock:N})}),Object(v.jsx)(x.a,{path:"/:id",children:Object(v.jsx)("div",{children:"\uc544\ubb34 \ubb38\uc790\uc5f4 \uc801\uc5c8\uc744\ub54c"})})]})]})};function _(e){var t=e.shoes,c=e.index;return Object(v.jsxs)("div",{className:"col-md-4",children:[Object(v.jsx)("img",{className:"w-100",src:"https://codingapple1.github.io/shop/shoes".concat(c+1,".jpg"),alt:""}),Object(v.jsx)("h4",{children:t[c].title}),Object(v.jsx)("p",{children:t[c].content})]})}var F=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,107)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))};r.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(p.a,{children:Object(v.jsx)(B,{})})}),document.getElementById("root")),F()},74:function(e,t,c){},75:function(e,t,c){}},[[100,1,2]]]);
//# sourceMappingURL=main.9bf5a775.chunk.js.map