(this.webpackJsonpiexhibit=this.webpackJsonpiexhibit||[]).push([[0],{20:function(e,t,n){e.exports=n.p+"static/media/under_construction.1eb615da.svg"},22:function(e,t,n){e.exports=n.p+"static/media/not_found.bbd6c834.svg"},24:function(e,t,n){e.exports=n(45)},29:function(e,t,n){},35:function(e,t,n){var i={"./7MZDH1x2aeRROJH.jpg":36,"./A50Mkm1jNRxulZt.jpg":37,"./Ba9V8FQx5RgAX9w.jpg":38,"./I0GnednDKO6l0Fd.jpg":39,"./KdlLUVevlD4Nb0k.jpg":40,"./NKpPebgkyknKPWQ.jpg":41,"./YLEiEsc75O6govX.jpg":42,"./lZmHRIecWl287Zz.jpg":43,"./s5DPPjtPbTn3Mu1.jpg":44};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}a.keys=function(){return Object.keys(i)},a.resolve=r,e.exports=a,a.id=35},36:function(e,t,n){e.exports=n.p+"static/media/7MZDH1x2aeRROJH.aeef521a.jpg"},37:function(e,t,n){e.exports=n.p+"static/media/A50Mkm1jNRxulZt.c311bd37.jpg"},38:function(e,t,n){e.exports=n.p+"static/media/Ba9V8FQx5RgAX9w.34ab8367.jpg"},39:function(e,t,n){e.exports=n.p+"static/media/I0GnednDKO6l0Fd.b786dd49.jpg"},40:function(e,t,n){e.exports=n.p+"static/media/KdlLUVevlD4Nb0k.1f4d324d.jpg"},41:function(e,t,n){e.exports=n.p+"static/media/NKpPebgkyknKPWQ.dc7da791.jpg"},42:function(e,t,n){e.exports=n.p+"static/media/YLEiEsc75O6govX.19dd1656.jpg"},43:function(e,t,n){e.exports=n.p+"static/media/lZmHRIecWl287Zz.63571bbc.jpg"},44:function(e,t,n){e.exports=n.p+"static/media/s5DPPjtPbTn3Mu1.050c00d7.jpg"},45:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(11),c=n.n(r),o=n(4),m=n(1);n(29);function l(e){var t=e.img,n=e.txt;return a.a.createElement("div",{className:"flex center align-center full main-container w100 rtl empty-page-container"},a.a.createElement("img",{className:"empty-page-img",src:t,alt:n}),a.a.createElement("div",{className:"flex column center align-center"},a.a.createElement("div",{className:"empty-page-txt"},n),a.a.createElement(o.b,{className:"",to:"/"},a.a.createElement("button",null,"\u05dc\u05e2\u05de\u05d5\u05d3 \u05d4\u05d1\u05d9\u05ea"))))}var s=n(20),u=n.n(s);function d(){return a.a.createElement(l,{img:u.a,txt:"\u05d4\u05e2\u05de\u05d5\u05d3 \u05e2\u05d3\u05d9\u05d9\u05df \u05d1\u05d1\u05e0\u05d9\u05d9\u05d4... \u05e2\u05de\u05db\u05dd \u05d4\u05e1\u05dc\u05d9\u05d7\u05d4 :)"})}function p(){return a.a.createElement(d,null)}function g(){return a.a.createElement(d,null)}var h=n(6),f=n(46),b=n(47);function E(e){var t=e.img,n=t.description.substring(0,15).concat("...");return a.a.createElement(o.b,{to:"/gallery/".concat(t._id),className:"flex column gallery-preview-container"},a.a.createElement("img",{src:t.imgUrl,alt:n}),a.a.createElement("div",{className:"flex center align-center gallery-preview-container-screen"},t.author))}function v(e){var t=e.props,i=e.type;return t.map((function(e){return"imgs"===i?a.a.createElement(E,{key:e._id,img:e}):a.a.createElement("div",{key:e._id,className:"flex column gallery-preview-container"},a.a.createElement("img",{src:n(35)("./".concat(e.imgId,".jpg")),alt:""}),a.a.createElement("div",null,e.name))}))}function j(){return a.a.createElement("div",{className:"flex full center align-center main-container w100"},"\u05d4\u05e2\u05de\u05d5\u05d3 \u05d1\u05d8\u05e2\u05d9\u05e0\u05d4...")}var x={store:function(e,t){localStorage[e]=JSON.stringify(t)},load:function(e){var t=localStorage[e]||"null";return JSON.parse(t)},getRandomId:function(){for(var e="0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM",t=e.length,n="",i=0;i<15;i++){var a=Math.floor(Math.random()*t);n+=e[a]}return n}};var I={query:function(){return x.store("ArtsDB",N),N},getRandomPics:function(){for(var e=JSON.parse(JSON.stringify(N)),t=[],n=0;n<4;n++){var i=Math.floor(Math.random()*(e.length-1));t[n]=e[i],e.splice(i,1)}return t},getItemById:function(e){return N.find((function(t){return t._id===e}))},getNextId:function(e,t){var n=N.findIndex((function(t){return t._id===e}))+t;return n===N.length?N[0]._id:n<0?N[N.length-1]._id:N[n]._id},getArtists:function(){return x.store("ArtistsDB",y),y}};var N=x.load("ArtsDB")||[{_id:x.getRandomId(),imgUrl:"https://i.picsum.photos/id/287/720/405.jpg?hmac=fz95ZgrQG0dHOq-IjrtA4dp0UA29V6S3SxWIzvMtnxQ",author:"\u05d0\u05d9\u05e6\u05d9\u05e7 \u05db\u05d4\u05df",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, debitis!"},{_id:x.getRandomId(),imgUrl:"https://i.picsum.photos/id/524/720/405.jpg?hmac=lZS4ZIaxObUOtxLLRPcqRHtLubhgnCTvNlDc6CcA2JQ",author:"\u05e9\u05d0\u05d5\u05dc \u05dc\u05d5\u05d9",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, debitis!"},{_id:x.getRandomId(),imgUrl:"https://i.picsum.photos/id/865/720/405.jpg?hmac=tN-xje94La94ycx2u5pz3Z5-QhGI0z0i2WBZ9OxPQwM",author:"\u05d0\u05d9\u05d9\u05dc \u05d1\u05df \u05d7\u05d5\u05e8\u05d9\u05df",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, debitis!"},{_id:x.getRandomId(),imgUrl:"https://i.picsum.photos/id/671/720/405.jpg?hmac=XaHb4TxX20HVJxzPazkobWQxIRVk27kmiCszg_bcXYs",author:"\u05e9\u05e8\u05d4 \u05d1\u05e8\u05d2\u05e8",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, debitis!"},{_id:x.getRandomId(),imgUrl:"https://i.picsum.photos/id/90/720/405.jpg?hmac=mVL2na1-UHwXoyph7WOvrTqk4wXM0C7PYaNSntfBEq0",author:"\u05e8\u05d5\u05ea \u05dc\u05d9\u05d9\u05d1\u05d5\u05d1\u05d9\u05e5'",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, debitis!"},{_id:x.getRandomId(),imgUrl:"https://i.picsum.photos/id/641/720/405.jpg?hmac=UhX_Fmzy1wy-ucavA1cv5EVw96XfERZkGVN-7rpbAac",author:"\u05de\u05e0\u05d7\u05dd \u05e1\u05d2\u05dc",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, debitis!"},{_id:x.getRandomId(),imgUrl:"https://i.picsum.photos/id/130/720/405.jpg?hmac=4SKWF5Y9bAbIR2d3FWIjFpIpOyOBxEamwhe2-g9Gr2w",author:"\u05e9\u05d0\u05d5\u05dc \u05dc\u05d5\u05d9",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, debitis!"},{_id:x.getRandomId(),imgUrl:"https://i.picsum.photos/id/293/720/405.jpg?hmac=CXe1yAmQIzkg9OqdjmcCTlqz7QZB1egwFk9e-w_QETk",author:"\u05e0\u05d8\u05e2 \u05dc\u05d9 \u05de\u05dc\u05d5\u05dc",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, debitis!"},{_id:x.getRandomId(),imgUrl:"https://i.picsum.photos/id/731/720/405.jpg?hmac=pyqjq1sQF2a15SVF3iPLNgMiUowIkFrPDH_N2X61TMA",author:"\u05e9\u05e8\u05d4 \u05d1\u05e8\u05d2\u05e8",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, debitis!"},{_id:x.getRandomId(),imgUrl:"https://i.picsum.photos/id/38/720/405.jpg?hmac=YjkvfzuzLZ9UEIODEwAwcG4ZBTAitvptZBImvtVuqRk",author:"\u05e9\u05d0\u05d5\u05dc \u05e7\u05e1\u05dc",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, debitis!"},{_id:x.getRandomId(),imgUrl:"https://i.picsum.photos/id/327/720/405.jpg?hmac=JIiP4JfiqKATjPo5FxB6c44UrtGkCWDBT4un62gPF0M",author:"\u05e9\u05d0\u05d5\u05dc \u05e7\u05e1\u05dc",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, debitis!"},{_id:x.getRandomId(),imgUrl:"https://i.picsum.photos/id/264/720/405.jpg?hmac=QyiiX1nVUGOkjQfnQGO4Pc4ZrHMQ8D3_QoM464i0F2k",author:"\u05e0\u05d8\u05e2 \u05dc\u05d9 \u05de\u05dc\u05d5\u05dc",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, debitis!"},{_id:x.getRandomId(),imgUrl:"https://i.picsum.photos/id/1050/720/405.jpg?hmac=VXRzmUPchtwOnt1ONI40cexdpD_FOMYFB_nl6WIRCbc",author:"\u05e9\u05e8\u05d4 \u05d1\u05e8\u05d2\u05e8",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, debitis!"},{_id:x.getRandomId(),imgUrl:"https://i.picsum.photos/id/379/720/405.jpg?hmac=Lz5f7J6XrspDjZI-yJOVUIn6dW3Ko95eMVIwSnZWtt8",author:"\u05d0\u05d9\u05e6\u05d9\u05e7 \u05db\u05d4\u05df",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, debitis!"},{_id:x.getRandomId(),imgUrl:"https://i.picsum.photos/id/545/720/405.jpg?hmac=rdembDYtCvUYdfBFyWKZK3xnQlTnTKjbydIYFeI1pRM",author:"\u05e9\u05d0\u05d5\u05dc \u05dc\u05d5\u05d9",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, debitis!"},{_id:x.getRandomId(),imgUrl:"https://i.picsum.photos/id/478/720/405.jpg?hmac=zznO4GCywFWV8MT2g0HAScjhzvn9XxgNQKW-opVpESE",author:"\u05d9\u05e6\u05d7\u05e7 \u05e9\u05e9\u05d5\u05df",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, debitis!"},{_id:x.getRandomId(),imgUrl:"https://i.picsum.photos/id/1028/720/405.jpg?hmac=ANnCuOnSQEjx6Y2JM6NcVq4KzGVNt-8tmRVnBL-ff78",author:"\u05d0\u05d9\u05d9\u05dc \u05d1\u05df \u05d7\u05d5\u05e8\u05d9\u05df",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, debitis!"},{_id:x.getRandomId(),imgUrl:"https://i.picsum.photos/id/888/720/405.jpg?hmac=O8WJlJLcoMy9EF8cxGpKD2NZ6PQx5w-zR-cLJV3H6ZY",author:"\u05e9\u05e8\u05d4 \u05d1\u05e8\u05d2\u05e8",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, debitis!"},{_id:x.getRandomId(),imgUrl:"https://i.picsum.photos/id/461/720/405.jpg?hmac=-RtzpQigLG4ddXCukND027eX8xFQYuUvGA_-3BE8eD0",author:"\u05e0\u05d8\u05e2 \u05dc\u05d9 \u05de\u05dc\u05d5\u05dc",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, debitis!"},{_id:x.getRandomId(),imgUrl:"https://i.picsum.photos/id/391/720/405.jpg?hmac=orzpiaZNNXmiiH2QfleoRPL8BTkYSvYHRcVMXnhmzoE",author:"\u05e0\u05d8\u05e2 \u05dc\u05d9 \u05de\u05dc\u05d5\u05dc",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, debitis!"}],y=[{_id:x.getRandomId(),name:"\u05d0\u05d9\u05e6\u05d9\u05e7 \u05db\u05d4\u05df",imgId:"Ba9V8FQx5RgAX9w",about:"lorem"},{_id:x.getRandomId(),name:"\u05e9\u05d0\u05d5\u05dc \u05dc\u05d5\u05d9",imgId:"s5DPPjtPbTn3Mu1",about:"lorem"},{_id:x.getRandomId(),name:"\u05d0\u05d9\u05d9\u05dc \u05d1\u05df \u05d7\u05d5\u05e8\u05d9\u05df",imgId:"NKpPebgkyknKPWQ",about:"lorem"},{_id:x.getRandomId(),name:"\u05e9\u05e8\u05d4 \u05d1\u05e8\u05d2\u05e8",imgId:"KdlLUVevlD4Nb0k",about:"lorem"},{_id:x.getRandomId(),name:"\u05e8\u05d5\u05ea \u05dc\u05d9\u05d9\u05d1\u05d5\u05d1\u05d9\u05e5'",imgId:"YLEiEsc75O6govX",about:"lorem"},{_id:x.getRandomId(),name:"\u05de\u05e0\u05d7\u05dd \u05e1\u05d2\u05dc",imgId:"A50Mkm1jNRxulZt",about:"lorem"},{_id:x.getRandomId(),name:"\u05e0\u05d8\u05e2 \u05dc\u05d9 \u05de\u05dc\u05d5\u05dc",imgId:"I0GnednDKO6l0Fd",about:"lorem"},{_id:x.getRandomId(),name:"\u05e9\u05d0\u05d5\u05dc \u05e7\u05e1\u05dc",imgId:"7MZDH1x2aeRROJH",about:"lorem"},{_id:x.getRandomId(),name:"\u05d9\u05e6\u05d7\u05e7 \u05e9\u05e9\u05d5\u05df",imgId:"lZmHRIecWl287Zz",about:"lorem"}];function R(){var e=Object(i.useState)(),t=Object(h.a)(e,2),n=t[0],r=t[1],c=Object(i.useState)(),m=Object(h.a)(c,2),l=m[0],s=m[1],u=Object(i.useState)(!1),d=Object(h.a)(u,2),p=d[0],g=d[1],E=Object(i.useState)(!0),x=Object(h.a)(E,2),N=x[0],y=x[1],R=function(e){"artists"===e&&l||"imgs"===e&&n||(y(!N),"artists"===e?(r(null),setTimeout((function(){return s(I.getArtists())}),1e3),g(!p)):(s(null),setTimeout((function(){return r(I.query())}),1e3),g(!p)))};return Object(i.useEffect)((function(){return setTimeout((function(){return r(I.query())}),1e3),g(!p),function(){return g(!p)}}),[]),a.a.createElement("div",{className:"flex column full rtl gallery-container"},a.a.createElement("div",{className:"flex main-container w100 show-container"},a.a.createElement("div",null,"\u05d4\u05e6\u05d2 \u05dc\u05e4\u05d9:"),a.a.createElement("div",{className:N?"pointer":"selected",onClick:function(){return R("artists")}},"\u05d0\u05de\u05e0\u05d9\u05dd"),a.a.createElement("div",null,"|"),a.a.createElement("div",{className:N?"selected":"pointer",onClick:function(){return R("imgs")}},"\u05d9\u05e6\u05d9\u05e8\u05d5\u05ea")),a.a.createElement(f.a,{mode:"out-in"},a.a.createElement(b.a,{key:p,timeout:600,classNames:"cmp-animation"},n?a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"main-container gallery-view-container"},a.a.createElement(v,{props:n,type:"imgs"})),a.a.createElement(o.b,{className:"flex main-container w100 home-button-container",to:"/"},a.a.createElement("button",null,"\u05dc\u05e2\u05de\u05d5\u05d3 \u05d4\u05d1\u05d9\u05ea"))):l?a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"main-container gallery-view-container"},a.a.createElement(v,{props:l,type:"artists"})),a.a.createElement(o.b,{className:"flex main-container w100 home-button-container",to:"/"},a.a.createElement("button",null,"\u05dc\u05e2\u05de\u05d5\u05d3 \u05d4\u05d1\u05d9\u05ea"))):a.a.createElement(j,null))))}var O=n(21);function w(e){var t=e.match.params.id,n=Object(i.useState)(),r=Object(h.a)(n,2),c=r[0],o=r[1],m=Object(i.useState)(!1),l=Object(h.a)(m,2),s=l[0],u=l[1],d=function(){return window.innerWidth<460?236.39:"auto"},p=function(t){var n=I.getNextId(c._id,t);e.history.push("/gallery/".concat(n))};return Object(i.useEffect)((function(){return o(I.getItemById(t)),u(!s),window.addEventListener("resize",d),function(){return u(!s)}}),[t]),a.a.createElement("div",{className:"flex column full rtl w100 main-container gallery-item-container"},a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"gallery-item-subcontainer"},a.a.createElement("div",{className:"flex gallery-item-buttons"},a.a.createElement("button",{className:"gellery-item-btn",onClick:function(){return p(-1)}},"\u05d4\u05e7\u05d5\u05d3\u05dd"),a.a.createElement("button",{className:"gellery-item-btn",onClick:function(){return p(1)}},"\u05d4\u05d1\u05d0"),a.a.createElement("button",{className:"gellery-item-btn",onClick:function(){return e.history.push("/gallery")}},"\u05d7\u05d6\u05e8\u05d4 \u05dc\u05d2\u05dc\u05e8\u05d9\u05d4")),a.a.createElement(f.a,{mode:"out-in"},a.a.createElement(b.a,{key:s,timeout:1500,classNames:"gallery-item-animation",addEndListener:function(e,t){e.addEventListener("transitionend",t,!1)},unmountOnExit:!0},a.a.createElement(a.a.Fragment,null,c&&a.a.createElement("div",null,a.a.createElement(O.LazyLoadImage,{alt:"",effect:"blur",height:d(),placeholderSrc:c.imgUrl,src:function(){var e=c.imgUrl.replace("/720/405","/1200/720").substring(10,39),t="https://";return"."===e.charAt(28)?t+=e.substring(0,28):"2"===e.charAt(28)?t+=e+"0":t+=e,t}(),visibleByDefault:!0}),a.a.createElement("div",{className:"item-field"},"\u05d0\u05de\u05df : ",c.author),a.a.createElement("div",{className:"item-field"},"\u05e7\u05e6\u05ea \u05e2\u05dc \u05d4\u05d9\u05e6\u05d9\u05e8\u05d4: ",c.description))))))))}function _(e){var t=e.pics;return a.a.createElement("div",{className:"slideshow-inner-container"},a.a.createElement("div",{className:"flex slides-container"},t.map((function(e){return a.a.createElement("img",{key:e._id,src:e.imgUrl,alt:"img"})}))))}function k(){var e=Object(i.useState)(),t=Object(h.a)(e,2),n=t[0],r=t[1],c=Object(i.useState)(!1),m=Object(h.a)(c,2),l=m[0],s=m[1];return Object(i.useEffect)((function(){return r(I.getRandomPics()),s(!l),function(){return s(!l)}}),[]),a.a.createElement(f.a,{mode:"out-in"},a.a.createElement(b.a,{key:l,timeout:600,classNames:"cmp-animation",unmountOnExit:!0},a.a.createElement("div",{className:"flex full main-container w100 rtl home-container"},a.a.createElement(a.a.Fragment,null,n?a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"flex slideshow-container"},a.a.createElement(_,{pics:n})),a.a.createElement("div",{className:"flex column center action-container"},a.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eum sit sint nobis corporis. A vero quod labore optio maiores, numquam aut magni amet error."),a.a.createElement(o.b,{className:"gallery-btn",to:"/gallery"},a.a.createElement("button",{className:"home-action-button"},"\u05dc\u05ea\u05e2\u05e8\u05d5\u05db\u05d4")))):a.a.createElement(j,null)))))}var L=n(22),U=n.n(L);function T(){return a.a.createElement(l,{img:U.a,txt:"\u05d4\u05e2\u05de\u05d5\u05d3 \u05e9\u05e0\u05d9\u05e1\u05d9\u05ea \u05dc\u05d4\u05d9\u05db\u05e0\u05e1 \u05d0\u05dc\u05d9\u05d5 \u05dc\u05d0 \u05e7\u05d9\u05d9\u05dd \u05d9\u05d5\u05ea\u05e8 \u05d0\u05d5 \u05e9\u05d4\u05db\u05ea\u05d5\u05d1\u05ea \u05dc\u05d0 \u05e0\u05db\u05d5\u05e0\u05d4."})}function M(){return a.a.createElement("div",{className:"flex center align-center footer-container"},a.a.createElement("small",null,"2020 designed by gazorpazorp"))}function F(e){var t=e.mobileMenuHandler,n=e.route,i=e.txt;return a.a.createElement("div",{className:"btn",onClick:t},a.a.createElement(o.b,{to:"".concat(n)},i))}function z(){var e=Object(i.useState)(!1),t=Object(h.a)(e,2),n=t[0],r=t[1];window.addEventListener("resize",(function(){window.innerWidth>460&&r(!1)}));var c=function(){r(!n)};return a.a.createElement("div",{className:"main-container w100 rtl nav-bar-container"},a.a.createElement("div",{className:"flex main-container nav-bar-subcontainer "},a.a.createElement("div",{className:"logo",onClick:function(){window.innerWidth<=460&&r(!1)}},a.a.createElement(o.b,{to:"/"},"\u05d4\u05ea\u05e2\u05e8\u05d5\u05db\u05d4 \u05e9\u05dc\u05d9")),a.a.createElement("div",{className:"flex nav-bar-menu".concat(n?" mobile-menu":"")},a.a.createElement(F,{mobileMenuHandler:c,route:"/about",txt:"\u05de\u05d9 \u05d0\u05e0\u05d7\u05e0\u05d5"}),a.a.createElement(F,{mobileMenuHandler:c,route:"/gallery",txt:"\u05d2\u05dc\u05e8\u05d9\u05d4"}),a.a.createElement(F,{mobileMenuHandler:c,route:"/contact",txt:"\u05e6\u05d5\u05e8 \u05e7\u05e9\u05e8"})),a.a.createElement("div",{className:"menu-btn".concat(n?" open":""),onClick:c},a.a.createElement("div",{className:"menu-btn__burger"}))))}var P=function(){return a.a.createElement(o.a,null,a.a.createElement(z,null),a.a.createElement(m.c,null,a.a.createElement(m.a,{path:"/",component:k,exact:!0}),a.a.createElement(m.a,{path:"/gallery",component:R,exact:!0}),a.a.createElement(m.a,{path:"/gallery/:id",component:w}),a.a.createElement(m.a,{path:"/contact",component:g,exact:!0}),a.a.createElement(m.a,{path:"/about",component:p,exact:!0}),a.a.createElement(m.a,{path:"*",component:T})),a.a.createElement(M,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.c159e28b.chunk.js.map