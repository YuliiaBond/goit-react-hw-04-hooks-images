(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{19:function(e,t,n){e.exports={container:"Container_container__1EYk8"}},5:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(7),o=n.n(a),i=n(10),s=n(4),u=(n(5),n(1));function l(e){var t=e.onSubmit,n=Object(c.useState)(""),r=Object(s.a)(n,2),a=r[0],o=r[1];return Object(u.jsx)("header",{className:"Searchbar",children:Object(u.jsxs)("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault(),""!==a.trim()?(t(a),o("")):alert("Enter your request, please!")},children:[Object(u.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(u.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(u.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:a,onChange:function(e){o(e.currentTarget.value.toLowerCase())}})]})})}var j=n(19),b=n.n(j),d=function(e){var t=e.children;return Object(u.jsx)("div",{className:b.a.container,children:t})},h=function(e){var t=e.webformatURL,n=e.onClick,c=e.largeImageURL,r=e.tags;return Object(u.jsx)("img",{src:t,alt:r,className:"ImageGalleryItem-image",onClick:function(){n({largeImageURL:c})}})},m=function(e){var t=e.hits,n=e.onOpenModalImg;return Object(u.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.id,c=e.webformatURL,r=e.largeImageURL;return Object(u.jsx)("li",{children:Object(u.jsx)(h,{webformatURL:c,onClick:function(){return n(r)}})},t)}))})},f=n(20),O=n.n(f),g=(n(47),function(){return Object(u.jsx)(O.a,{className:"Loader",type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})}),p=document.querySelector("#modal-root");function x(e){var t=e.onClose,n=e.children;Object(c.useEffect)((function(){return window.addEventListener("keydown",r),function(){return window.removeEventListener("keydown",r)}}));var r=function(e){"Escape"===e.code&&t()};return Object(a.createPortal)(Object(u.jsx)("div",{className:"Overlay",onClick:function(e){e.currentTarget===e.target&&t()},children:Object(u.jsx)("div",{className:"Modal",children:n})}),p)}var v=function(e){var t=e.onClick;return Object(u.jsx)("button",{className:"Button",type:"button",onClick:t,children:"Load more"})},y=n(21),S=n.n(y),w=function(e){var t=e.searchQuery,n=void 0===t?"":t,c=e.currentPage,r=void 0===c?1:c,a=e.pageSize,o=void 0===a?12:a;return S.a.get("https://pixabay.com/api/?q=".concat(n,"&page=").concat(r,"&key=21813787-5b33d57d4a7410a6824d2f569&image_type=photo&orientation=horizontal&per_page=").concat(o)).then((function(e){return e.data.hits}))};function k(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),o=Object(s.a)(a,2),j=o[0],b=o[1],h=Object(c.useState)(1),f=Object(s.a)(h,2),O=f[0],p=f[1],y=Object(c.useState)(!1),S=Object(s.a)(y,2),k=S[0],C=S[1],N=Object(c.useState)(""),L=Object(s.a)(N,2),F=L[0],I=L[1],E=Object(c.useState)(null),P=Object(s.a)(E,2),R=P[0],U=P[1];Object(c.useEffect)((function(){""!==j&&(C(!0),w({searchQuery:j,currentPage:O}).then((function(e){r((function(t){return[].concat(Object(i.a)(t),Object(i.a)(e))}))})).then((function(){window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})})).catch((function(e){return U({error:"Sorry! Picture not found. Please try again later!!!"})})).finally((function(){return C(!1)})))}),[j,O]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(l,{onSubmit:function(e){b(e),p(1),r([]),U(null)}}),R&&Object(u.jsx)("h1",{children:R}),Object(u.jsxs)(d,{children:[Object(u.jsx)(m,{hits:n,onOpenModalImg:function(e){I(e)}}),k&&Object(u.jsx)(g,{}),n.length>11&&!k&&Object(u.jsx)(v,{onClick:function(){return p(O+1)}}),F&&Object(u.jsx)(x,{onClose:function(){I("")},children:Object(u.jsx)("img",{src:F,alt:"card"})})]})]})}n(66);o.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.ebd43227.chunk.js.map