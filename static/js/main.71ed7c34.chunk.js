(this.webpackJsonpiexhibit=this.webpackJsonpiexhibit||[]).push([[0],{19:function(e,t,n){var a={"./7MZDH1x2aeRROJH.jpg":36,"./A50Mkm1jNRxulZt.jpg":37,"./Ba9V8FQx5RgAX9w.jpg":38,"./I0GnednDKO6l0Fd.jpg":39,"./KdlLUVevlD4Nb0k.jpg":40,"./NKpPebgkyknKPWQ.jpg":41,"./YLEiEsc75O6govX.jpg":42,"./lZmHRIecWl287Zz.jpg":43,"./s5DPPjtPbTn3Mu1.jpg":44};function i(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=r,e.exports=i,i.id=19},21:function(e,t,n){e.exports=n.p+"static/media/under_construction.1eb615da.svg"},23:function(e,t,n){e.exports=n.p+"static/media/not_found.bbd6c834.svg"},25:function(e,t,n){e.exports=n(45)},30:function(e,t,n){},36:function(e,t,n){e.exports=n.p+"static/media/7MZDH1x2aeRROJH.aeef521a.jpg"},37:function(e,t,n){e.exports=n.p+"static/media/A50Mkm1jNRxulZt.c311bd37.jpg"},38:function(e,t,n){e.exports=n.p+"static/media/Ba9V8FQx5RgAX9w.34ab8367.jpg"},39:function(e,t,n){e.exports=n.p+"static/media/I0GnednDKO6l0Fd.b786dd49.jpg"},40:function(e,t,n){e.exports=n.p+"static/media/KdlLUVevlD4Nb0k.1f4d324d.jpg"},41:function(e,t,n){e.exports=n.p+"static/media/NKpPebgkyknKPWQ.dc7da791.jpg"},42:function(e,t,n){e.exports=n.p+"static/media/YLEiEsc75O6govX.19dd1656.jpg"},43:function(e,t,n){e.exports=n.p+"static/media/lZmHRIecWl287Zz.63571bbc.jpg"},44:function(e,t,n){e.exports=n.p+"static/media/s5DPPjtPbTn3Mu1.050c00d7.jpg"},45:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(11),c=n.n(r),o=n(3),m=n(1);n(30);function l(e){var t=e.img,n=e.txt;return i.a.createElement("div",{className:"flex center align-center full main-container w100 rtl empty-page-container"},i.a.createElement("img",{className:"empty-page-img",src:t,alt:n}),i.a.createElement("div",{className:"flex column center align-center"},i.a.createElement("div",{className:"empty-page-txt"},n),i.a.createElement(o.b,{className:"",to:"/"},i.a.createElement("button",null,"\u05dc\u05e2\u05de\u05d5\u05d3 \u05d4\u05d1\u05d9\u05ea"))))}var s=n(21),u=n.n(s);function d(){return i.a.createElement(l,{img:u.a,txt:"\u05d4\u05e2\u05de\u05d5\u05d3 \u05e2\u05d3\u05d9\u05d9\u05df \u05d1\u05d1\u05e0\u05d9\u05d9\u05d4... \u05e2\u05de\u05db\u05dd \u05d4\u05e1\u05dc\u05d9\u05d7\u05d4 :)"})}function p(){return i.a.createElement(d,null)}var g=n(5),f={store:function(e,t){localStorage[e]=JSON.stringify(t)},load:function(e){var t=localStorage[e]||"null";return JSON.parse(t)},getRandomId:function(){for(var e="0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM",t=e.length,n="",a=0;a<15;a++){var i=Math.floor(Math.random()*t);n+=e[i]}return n}};var h={query:function(){return f.store("ArtsDB",b),b},getRandomPics:function(){for(var e=JSON.parse(JSON.stringify(b)),t=[],n=0;n<4;n++){var a=Math.floor(Math.random()*(e.length-1));t[n]=e[a],e.splice(a,1)}return t},getItemById:function(e){return b.find((function(t){return t._id===e}))},getNextId:function(e,t){var n=b.findIndex((function(t){return t._id===e}))+t;return n===b.length?b[0]._id:n<0?b[b.length-1]._id:b[n]._id},getArtists:function(){return f.store("ArtistsDB",E),E},getArtistById:function(e){return E.find((function(t){return t._id===e}))},getItemsByName:function(e){return b.filter((function(t){return t.author===e}))}};var b=f.load("ArtsDB")||[{_id:f.getRandomId(),imgUrl:"https://i.picsum.photos/id/287/720/405.jpg?hmac=fz95ZgrQG0dHOq-IjrtA4dp0UA29V6S3SxWIzvMtnxQ",author:"\u05d0\u05d9\u05e6\u05d9\u05e7 \u05db\u05d4\u05df",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, debitis!"},{_id:f.getRandomId(),imgUrl:"https://i.picsum.photos/id/524/720/405.jpg?hmac=lZS4ZIaxObUOtxLLRPcqRHtLubhgnCTvNlDc6CcA2JQ",author:"\u05e9\u05d0\u05d5\u05dc \u05dc\u05d5\u05d9",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, debitis!"},{_id:f.getRandomId(),imgUrl:"https://i.picsum.photos/id/865/720/405.jpg?hmac=tN-xje94La94ycx2u5pz3Z5-QhGI0z0i2WBZ9OxPQwM",author:"\u05d0\u05d9\u05d9\u05dc \u05d1\u05df \u05d7\u05d5\u05e8\u05d9\u05df",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, debitis!"},{_id:f.getRandomId(),imgUrl:"https://i.picsum.photos/id/671/720/405.jpg?hmac=XaHb4TxX20HVJxzPazkobWQxIRVk27kmiCszg_bcXYs",author:"\u05e9\u05e8\u05d4 \u05d1\u05e8\u05d2\u05e8",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, debitis!"},{_id:f.getRandomId(),imgUrl:"https://i.picsum.photos/id/90/720/405.jpg?hmac=mVL2na1-UHwXoyph7WOvrTqk4wXM0C7PYaNSntfBEq0",author:"\u05e8\u05d5\u05ea \u05dc\u05d9\u05d9\u05d1\u05d5\u05d1\u05d9\u05e5'",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, debitis!"},{_id:f.getRandomId(),imgUrl:"https://i.picsum.photos/id/641/720/405.jpg?hmac=UhX_Fmzy1wy-ucavA1cv5EVw96XfERZkGVN-7rpbAac",author:"\u05de\u05e0\u05d7\u05dd \u05e1\u05d2\u05dc",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, debitis!"},{_id:f.getRandomId(),imgUrl:"https://i.picsum.photos/id/130/720/405.jpg?hmac=4SKWF5Y9bAbIR2d3FWIjFpIpOyOBxEamwhe2-g9Gr2w",author:"\u05e9\u05d0\u05d5\u05dc \u05dc\u05d5\u05d9",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, debitis!"},{_id:f.getRandomId(),imgUrl:"https://i.picsum.photos/id/293/720/405.jpg?hmac=CXe1yAmQIzkg9OqdjmcCTlqz7QZB1egwFk9e-w_QETk",author:"\u05e0\u05d8\u05e2 \u05dc\u05d9 \u05de\u05dc\u05d5\u05dc",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, debitis!"},{_id:f.getRandomId(),imgUrl:"https://i.picsum.photos/id/731/720/405.jpg?hmac=pyqjq1sQF2a15SVF3iPLNgMiUowIkFrPDH_N2X61TMA",author:"\u05e9\u05e8\u05d4 \u05d1\u05e8\u05d2\u05e8",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, debitis!"},{_id:f.getRandomId(),imgUrl:"https://i.picsum.photos/id/38/720/405.jpg?hmac=YjkvfzuzLZ9UEIODEwAwcG4ZBTAitvptZBImvtVuqRk",author:"\u05e9\u05d0\u05d5\u05dc \u05e7\u05e1\u05dc",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, debitis!"},{_id:f.getRandomId(),imgUrl:"https://i.picsum.photos/id/327/720/405.jpg?hmac=JIiP4JfiqKATjPo5FxB6c44UrtGkCWDBT4un62gPF0M",author:"\u05e9\u05d0\u05d5\u05dc \u05e7\u05e1\u05dc",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, debitis!"},{_id:f.getRandomId(),imgUrl:"https://i.picsum.photos/id/264/720/405.jpg?hmac=QyiiX1nVUGOkjQfnQGO4Pc4ZrHMQ8D3_QoM464i0F2k",author:"\u05e0\u05d8\u05e2 \u05dc\u05d9 \u05de\u05dc\u05d5\u05dc",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, debitis!"},{_id:f.getRandomId(),imgUrl:"https://i.picsum.photos/id/1050/720/405.jpg?hmac=VXRzmUPchtwOnt1ONI40cexdpD_FOMYFB_nl6WIRCbc",author:"\u05e9\u05e8\u05d4 \u05d1\u05e8\u05d2\u05e8",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, debitis!"},{_id:f.getRandomId(),imgUrl:"https://i.picsum.photos/id/379/720/405.jpg?hmac=Lz5f7J6XrspDjZI-yJOVUIn6dW3Ko95eMVIwSnZWtt8",author:"\u05d0\u05d9\u05e6\u05d9\u05e7 \u05db\u05d4\u05df",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, debitis!"},{_id:f.getRandomId(),imgUrl:"https://i.picsum.photos/id/545/720/405.jpg?hmac=rdembDYtCvUYdfBFyWKZK3xnQlTnTKjbydIYFeI1pRM",author:"\u05e9\u05d0\u05d5\u05dc \u05dc\u05d5\u05d9",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, debitis!"},{_id:f.getRandomId(),imgUrl:"https://i.picsum.photos/id/478/720/405.jpg?hmac=zznO4GCywFWV8MT2g0HAScjhzvn9XxgNQKW-opVpESE",author:"\u05d9\u05e6\u05d7\u05e7 \u05e9\u05e9\u05d5\u05df",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, debitis!"},{_id:f.getRandomId(),imgUrl:"https://i.picsum.photos/id/1028/720/405.jpg?hmac=ANnCuOnSQEjx6Y2JM6NcVq4KzGVNt-8tmRVnBL-ff78",author:"\u05d0\u05d9\u05d9\u05dc \u05d1\u05df \u05d7\u05d5\u05e8\u05d9\u05df",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, debitis!"},{_id:f.getRandomId(),imgUrl:"https://i.picsum.photos/id/888/720/405.jpg?hmac=O8WJlJLcoMy9EF8cxGpKD2NZ6PQx5w-zR-cLJV3H6ZY",author:"\u05e9\u05e8\u05d4 \u05d1\u05e8\u05d2\u05e8",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, debitis!"},{_id:f.getRandomId(),imgUrl:"https://i.picsum.photos/id/461/720/405.jpg?hmac=-RtzpQigLG4ddXCukND027eX8xFQYuUvGA_-3BE8eD0",author:"\u05e0\u05d8\u05e2 \u05dc\u05d9 \u05de\u05dc\u05d5\u05dc",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, debitis!"},{_id:f.getRandomId(),imgUrl:"https://i.picsum.photos/id/391/720/405.jpg?hmac=orzpiaZNNXmiiH2QfleoRPL8BTkYSvYHRcVMXnhmzoE",author:"\u05e0\u05d8\u05e2 \u05dc\u05d9 \u05de\u05dc\u05d5\u05dc",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, debitis!"}],E=f.load("ArtistsDB")||[{_id:f.getRandomId(),name:"\u05d0\u05d9\u05e6\u05d9\u05e7 \u05db\u05d4\u05df",imgId:"Ba9V8FQx5RgAX9w",about:"lorem"},{_id:f.getRandomId(),name:"\u05e9\u05d0\u05d5\u05dc \u05dc\u05d5\u05d9",imgId:"s5DPPjtPbTn3Mu1",about:"lorem"},{_id:f.getRandomId(),name:"\u05d0\u05d9\u05d9\u05dc \u05d1\u05df \u05d7\u05d5\u05e8\u05d9\u05df",imgId:"NKpPebgkyknKPWQ",about:"lorem"},{_id:f.getRandomId(),name:"\u05e9\u05e8\u05d4 \u05d1\u05e8\u05d2\u05e8",imgId:"KdlLUVevlD4Nb0k",about:"lorem"},{_id:f.getRandomId(),name:"\u05e8\u05d5\u05ea \u05dc\u05d9\u05d9\u05d1\u05d5\u05d1\u05d9\u05e5'",imgId:"YLEiEsc75O6govX",about:"lorem"},{_id:f.getRandomId(),name:"\u05de\u05e0\u05d7\u05dd \u05e1\u05d2\u05dc",imgId:"A50Mkm1jNRxulZt",about:"lorem"},{_id:f.getRandomId(),name:"\u05e0\u05d8\u05e2 \u05dc\u05d9 \u05de\u05dc\u05d5\u05dc",imgId:"I0GnednDKO6l0Fd",about:"lorem"},{_id:f.getRandomId(),name:"\u05e9\u05d0\u05d5\u05dc \u05e7\u05e1\u05dc",imgId:"7MZDH1x2aeRROJH",about:"lorem"},{_id:f.getRandomId(),name:"\u05d9\u05e6\u05d7\u05e7 \u05e9\u05e9\u05d5\u05df",imgId:"lZmHRIecWl287Zz",about:"lorem"}];function v(e){var t=e.match.params.id,r=Object(a.useState)(h.getArtistById(t)),c=Object(g.a)(r,2),m=c[0],l=c[1],s=Object(a.useState)(h.getItemsByName(m.name)),u=Object(g.a)(s,2),d=u[0],p=u[1];return Object(a.useEffect)((function(){l(h.getArtistById(t)),m&&p(h.getItemsByName(m.name))}),[t]),i.a.createElement("div",{className:"flex column full rtl main-container w100 artist-container"},m&&i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"flex artist-info-container"},i.a.createElement("img",{src:n(19)("./".concat(m.imgId,".jpg")),alt:""}),i.a.createElement("div",{className:"flex column"},i.a.createElement("div",null,m.name),i.a.createElement("div",null,m.about))),i.a.createElement("div",{className:"seperator-container"},"\u05d4\u05d9\u05e6\u05d9\u05e8\u05d5\u05ea \u05e9\u05de\u05d5\u05e6\u05d2\u05d5\u05ea \u05d1\u05ea\u05e2\u05e8\u05d5\u05db\u05d4:"),i.a.createElement("div",{className:"arts-container"},d.map((function(e){return i.a.createElement(o.b,{to:"/gallery/".concat(e._id),key:e._id},i.a.createElement("img",{src:e.imgUrl}))})))))}function j(){return i.a.createElement(d,null)}var N=n(46),x=n(47);var I={artists:function(e){var t=e.prop;return i.a.createElement(o.b,{to:"/artist/".concat(t._id),className:"flex column artist-preview-container"},i.a.createElement("img",{src:n(19)("./".concat(t.imgId,".jpg")),alt:""}),i.a.createElement("div",null,t.name))},imgs:function(e){var t=e.prop,n=t.description.substring(0,15).concat("...");return i.a.createElement(o.b,{to:"/gallery/".concat(t._id),className:"flex column image-preview-container"},i.a.createElement("img",{src:t.imgUrl,alt:n}),i.a.createElement("div",{className:"flex center align-center image-preview-container-screen"},t.author))}};function y(e){var t=e.props,n=e.type,a=I[n];return t.map((function(e){return i.a.createElement(a,{key:e._id,prop:e})}))}function O(){return i.a.createElement("div",{className:"flex full center align-center main-container w100"},"\u05d4\u05e2\u05de\u05d5\u05d3 \u05d1\u05d8\u05e2\u05d9\u05e0\u05d4...")}function R(){var e=Object(a.useState)(),t=Object(g.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(),m=Object(g.a)(c,2),l=m[0],s=m[1],u=Object(a.useState)(!1),d=Object(g.a)(u,2),p=d[0],f=d[1],b=Object(a.useState)(!0),E=Object(g.a)(b,2),v=E[0],j=E[1],I=function(e){"artists"===e&&l||"imgs"===e&&n||(j(!v),"artists"===e?(r(null),setTimeout((function(){return s(h.getArtists())}),1e3),f(!p)):(s(null),setTimeout((function(){return r(h.query())}),1e3),f(!p)))};return Object(a.useEffect)((function(){return setTimeout((function(){return r(h.query())}),1e3),f(!p),function(){return f(!p)}}),[]),i.a.createElement("div",{className:"flex column full rtl gallery-container"},i.a.createElement("div",{className:"flex main-container w100 show-container"},i.a.createElement("div",null,"\u05d4\u05e6\u05d2 \u05dc\u05e4\u05d9:"),i.a.createElement("div",{className:v?"pointer":"selected",onClick:function(){return I("artists")}},"\u05d0\u05de\u05e0\u05d9\u05dd"),i.a.createElement("div",null,"|"),i.a.createElement("div",{className:v?"selected":"pointer",onClick:function(){return I("imgs")}},"\u05d9\u05e6\u05d9\u05e8\u05d5\u05ea")),i.a.createElement(N.a,{mode:"out-in"},i.a.createElement(x.a,{key:p,timeout:600,classNames:"cmp-animation"},n?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"main-container gallery-view-container"},i.a.createElement(y,{props:n,type:"imgs"})),i.a.createElement(o.b,{className:"flex main-container w100 home-button-container",to:"/"},i.a.createElement("button",null,"\u05dc\u05e2\u05de\u05d5\u05d3 \u05d4\u05d1\u05d9\u05ea"))):l?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"main-container gallery-view-container"},i.a.createElement(y,{props:l,type:"artists"})),i.a.createElement(o.b,{className:"flex main-container w100 home-button-container",to:"/"},i.a.createElement("button",null,"\u05dc\u05e2\u05de\u05d5\u05d3 \u05d4\u05d1\u05d9\u05ea"))):i.a.createElement(O,null))))}var w=n(22);function _(e){var t=e.match.params.id,n=Object(a.useState)(),r=Object(g.a)(n,2),c=r[0],o=r[1],m=Object(a.useState)(!1),l=Object(g.a)(m,2),s=l[0],u=l[1],d=function(){return window.innerWidth<460?236.39:"auto"},p=function(t){var n=h.getNextId(c._id,t);e.history.push("/gallery/".concat(n))};return Object(a.useEffect)((function(){return o(h.getItemById(t)),u(!s),window.addEventListener("resize",d),function(){return u(!s)}}),[t]),i.a.createElement("div",{className:"flex column full rtl w100 main-container gallery-item-container"},i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"gallery-item-subcontainer"},i.a.createElement("div",{className:"flex gallery-item-buttons"},i.a.createElement("button",{className:"gellery-item-btn",onClick:function(){return p(-1)}},"\u05d4\u05e7\u05d5\u05d3\u05dd"),i.a.createElement("button",{className:"gellery-item-btn",onClick:function(){return p(1)}},"\u05d4\u05d1\u05d0"),i.a.createElement("button",{className:"gellery-item-btn",onClick:function(){return e.history.push("/gallery")}},"\u05d7\u05d6\u05e8\u05d4 \u05dc\u05d2\u05dc\u05e8\u05d9\u05d4")),i.a.createElement(N.a,{mode:"out-in"},i.a.createElement(x.a,{key:s,timeout:1500,classNames:"gallery-item-animation",addEndListener:function(e,t){e.addEventListener("transitionend",t,!1)},unmountOnExit:!0},i.a.createElement(i.a.Fragment,null,c&&i.a.createElement("div",null,i.a.createElement(w.LazyLoadImage,{alt:"",effect:"blur",height:d(),placeholderSrc:c.imgUrl,src:function(){var e=c.imgUrl.replace("/720/405","/1200/720").substring(10,39),t="https://";return"."===e.charAt(28)?t+=e.substring(0,28):"2"===e.charAt(28)?t+=e+"0":t+=e,t}(),visibleByDefault:!0}),i.a.createElement("div",{className:"item-field"},"\u05d0\u05de\u05df : ",c.author),i.a.createElement("div",{className:"item-field"},"\u05e7\u05e6\u05ea \u05e2\u05dc \u05d4\u05d9\u05e6\u05d9\u05e8\u05d4: ",c.description))))))))}function k(e){var t=e.pics;return i.a.createElement("div",{className:"slideshow-inner-container"},i.a.createElement("div",{className:"flex slides-container"},t.map((function(e){return i.a.createElement("img",{key:e._id,src:e.imgUrl,alt:"img"})}))))}function L(){var e=Object(a.useState)(),t=Object(g.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),m=Object(g.a)(c,2),l=m[0],s=m[1];return Object(a.useEffect)((function(){return r(h.getRandomPics()),s(!l),function(){return s(!l)}}),[]),i.a.createElement(N.a,{mode:"out-in"},i.a.createElement(x.a,{key:l,timeout:600,classNames:"cmp-animation",unmountOnExit:!0},i.a.createElement("div",{className:"flex full main-container w100 rtl home-container"},i.a.createElement(i.a.Fragment,null,n?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"flex slideshow-container"},i.a.createElement(k,{pics:n})),i.a.createElement("div",{className:"flex column center action-container"},i.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eum sit sint nobis corporis. A vero quod labore optio maiores, numquam aut magni amet error."),i.a.createElement(o.b,{className:"gallery-btn",to:"/gallery"},i.a.createElement("button",{className:"home-action-button"},"\u05dc\u05ea\u05e2\u05e8\u05d5\u05db\u05d4")))):i.a.createElement(O,null)))))}var U=n(23),T=n.n(U);function M(){return i.a.createElement(l,{img:T.a,txt:"\u05d4\u05e2\u05de\u05d5\u05d3 \u05e9\u05e0\u05d9\u05e1\u05d9\u05ea \u05dc\u05d4\u05d9\u05db\u05e0\u05e1 \u05d0\u05dc\u05d9\u05d5 \u05dc\u05d0 \u05e7\u05d9\u05d9\u05dd \u05d9\u05d5\u05ea\u05e8 \u05d0\u05d5 \u05e9\u05d4\u05db\u05ea\u05d5\u05d1\u05ea \u05dc\u05d0 \u05e0\u05db\u05d5\u05e0\u05d4."})}function A(){return i.a.createElement("div",{className:"flex center align-center footer-container"},i.a.createElement("small",null,"2020 designed by gazorpazorp"))}function F(e){var t=e.mobileMenuHandler,n=e.route,a=e.txt;return i.a.createElement("div",{className:"btn",onClick:t},i.a.createElement(o.b,{to:"".concat(n)},a))}function B(){var e=Object(a.useState)(!1),t=Object(g.a)(e,2),n=t[0],r=t[1];window.addEventListener("resize",(function(){window.innerWidth>460&&r(!1)}));var c=function(){r(!n)};return i.a.createElement("div",{className:"main-container w100 rtl nav-bar-container"},i.a.createElement("div",{className:"flex main-container nav-bar-subcontainer "},i.a.createElement("div",{className:"logo",onClick:function(){window.innerWidth<=460&&r(!1)}},i.a.createElement(o.b,{to:"/"},"\u05d4\u05ea\u05e2\u05e8\u05d5\u05db\u05d4 \u05e9\u05dc\u05d9")),i.a.createElement("div",{className:"flex nav-bar-menu".concat(n?" mobile-menu":"")},i.a.createElement(F,{mobileMenuHandler:c,route:"/about",txt:"\u05de\u05d9 \u05d0\u05e0\u05d7\u05e0\u05d5"}),i.a.createElement(F,{mobileMenuHandler:c,route:"/gallery",txt:"\u05d2\u05dc\u05e8\u05d9\u05d4"}),i.a.createElement(F,{mobileMenuHandler:c,route:"/contact",txt:"\u05e6\u05d5\u05e8 \u05e7\u05e9\u05e8"})),i.a.createElement("div",{className:"menu-btn".concat(n?" open":""),onClick:c},i.a.createElement("div",{className:"menu-btn__burger"}))))}var z=function(){return i.a.createElement(o.a,null,i.a.createElement(B,null),i.a.createElement(m.c,null,i.a.createElement(m.a,{path:"/",component:L,exact:!0}),i.a.createElement(m.a,{path:"/about",component:p,exact:!0}),i.a.createElement(m.a,{path:"/artist/:id",component:v}),i.a.createElement(m.a,{path:"/contact",component:j,exact:!0}),i.a.createElement(m.a,{path:"/gallery",component:R,exact:!0}),i.a.createElement(m.a,{path:"/gallery/:id",component:_}),i.a.createElement(m.a,{path:"*",component:M})),i.a.createElement(A,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.71ed7c34.chunk.js.map