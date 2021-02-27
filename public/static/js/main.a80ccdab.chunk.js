(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(5),c=a.n(l),o=(a(15),a(9)),i=a(1),s=a(6),u=a.n(s);var m=function(){return r.a.createElement("header",{className:"header page__header"},r.a.createElement("picture",{className:"logo header__logo"},r.a.createElement("img",{className:"logo__img",src:u.a,alt:"\u043b\u043e\u0433\u043e\u0442\u0438\u043f"})))},p=r.a.createContext({}),_=function(e){var t=e.card,a=e.onCardClick,n=e.onCardLike,l=e.onPopupDeleteCard,c=e.onPopupImg,o=t.link,i=t.name,s=t.likes,u=t.ownerId,m=r.a.useContext(p),_=u===m._id,d="button ".concat(_?"elements__delete-button_visible":"elements__delete-button_hidden"),f=s.some((function(e){return e._id===m._id}))?"button button__like button__like_active":"button button__like";return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"elements__item"},r.a.createElement("button",{type:"button",className:d,onClick:function(){l(),a(t)}},r.a.createElement("svg",{width:"18",height:"20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M2.458 18.142c.06.67.61 1.158 1.28 1.158H14.26c.67 0 1.22-.508 1.28-1.158L16.72 5.79H1.28l1.178 12.352zM16.72 1.93h-5.14v-.65C11.58.569 11.011 0 10.3 0H7.72C7.01 0 6.44.569 6.44 1.28v.65H1.28C.569 1.93 0 2.499 0 3.21c0 .711.569 1.28 1.28 1.28h15.44c.711 0 1.28-.569 1.28-1.28 0-.711-.569-1.28-1.28-1.28z",fill:"#fff"}))),r.a.createElement("img",{src:o,alt:i,onClick:function(){c(),a(t)},className:"elements__img"}),r.a.createElement("div",{className:"elements__wrap"},r.a.createElement("h2",{className:"elements__title"},i),r.a.createElement("div",{className:"elements__container"},r.a.createElement("button",{type:"button",className:f,onClick:function(){n(t)}}),r.a.createElement("h3",{className:"elements__likes"},s.length)))))},d=r.a.createContext([]),f=function(e){var t=e.onEditAvatar,a=e.onEditProfile,n=e.onAddPlace,l=e.onCardClick,c=e.onCardLike,o=e.onPopupDeleteCard,i=e.onPopupImg,s=r.a.useContext(p),u=r.a.useContext(d),m=s.avatar,f=s.about,h=s.name;return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:"page__content"},r.a.createElement("section",{className:"profile page__profile"},r.a.createElement("div",{className:"profile__info"},r.a.createElement("div",{className:"profile__wrap"},r.a.createElement("img",{src:m,alt:"\u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",className:"profile__avatar"}),r.a.createElement("button",{type:"button",className:"button button_edit-avatar",onClick:t},r.a.createElement("svg",{width:"26",height:"26",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M26 3.454L6.77 22.794 3.336 19.29 22.517 0 26 3.454zM0 26l5.102-1.53-3.581-3.453L0 26z",fill:"#fff"})))),r.a.createElement("div",{className:"profile__container"},r.a.createElement("h2",{className:"profile__name"},h),r.a.createElement("p",{className:"profile__job"},f),r.a.createElement("button",{type:"button",className:"button button_edit",onClick:a}))),r.a.createElement("button",{type:"button",className:"button button_add",onClick:n})),r.a.createElement("section",{className:"elements"},r.a.createElement("ul",{className:"elements__items"},u.map((function(e){return r.a.createElement(_,{card:e,key:e._id,onCardClick:l,onCardLike:c,onPopupDeleteCard:o,onPopupImg:i})}))))))};var h=function(){return r.a.createElement("footer",{className:"footer page__footer"},r.a.createElement("p",{className:"footer__copy"},"\xa9 2020 Mesto Russia"))},b=function(){return r.a.createElement("div",{className:"lds-default"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))};var E=function(e){var t=e.name,a=e.title,n=e.isOpen,l=e.onClose,c=e.children,o=e.onSubmit,i=e.textSubmitBtn,s="popup popup_theme_".concat(t," ").concat(n&&"popup_opened");return r.a.createElement("section",{className:s},r.a.createElement("div",{className:"popup__container"},r.a.createElement("button",{type:"button",className:"button popup__close",onClick:l}),r.a.createElement("form",{className:"popup__content popup__content_theme_".concat(t),noValidate:!0,onSubmit:o},r.a.createElement("h2",{className:"popup__title popup__title_theme_profile"},a),r.a.createElement("div",{className:"popup__fields"},c,r.a.createElement("button",{type:"submit",className:"button button_submit"},i)))))},v=r.a.createContext({}),g={save:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",confirm:"\u0414\u0430"},C=function(e){var t=e.isOpen,a=e.onClose,l=e.onUpdateUser,c=Object(n.useState)(""),o=Object(i.a)(c,2),s=o[0],u=o[1],m=Object(n.useState)(""),_=Object(i.a)(m,2),d=_[0],f=_[1],h=r.a.useContext(p),b=Object(n.useContext)(v);Object(n.useEffect)((function(){u(h.name||""),f(h.about||"")}),[h]);var g=function(e){var t=e.target,a="name"===t.name?t.value:s,n="description"===t.name?t.value:d;u(a),f(n)};return r.a.createElement(E,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),l({name:s,about:d})},textSubmitBtn:b.save},r.a.createElement("label",{className:"popup__field"},r.a.createElement("input",{type:"text",className:"popup__input popup__input_type_name",name:"name",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",minLength:"2",maxLength:"40",value:s,onChange:g,required:!0}),r.a.createElement("span",{className:"popup__error"})),r.a.createElement("label",{className:"popup__field"},r.a.createElement("input",{type:"text",className:"popup__input popup__input_type_job",name:"description",value:d,onChange:g,placeholder:"\u0412\u0430\u0448\u0430 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044f",minLength:"2",maxLength:"200",required:!0}),r.a.createElement("span",{className:"popup__error"})))},O=function(e){var t=e.isOpen,a=e.onClose,l=e.onUpdateAvatar,c=Object(n.useRef)(),o=Object(n.useContext)(v);return r.a.createElement(E,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),l({avatar:c.current.value})},textSubmitBtn:o.save},r.a.createElement("label",{className:"popup__field"},"*/}",r.a.createElement("input",{ref:c,type:"url",className:"popup__input popup__input_type_link",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),r.a.createElement("span",{className:"popup__error"})))},N=function(e){var t=e.card,a=e.isOpen,l=e.onClose,c=e.onCardDelete,o=Object(n.useContext)(v);return r.a.createElement(E,{name:"card-delete popup__title_theme_card-delete",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",isOpen:a,onClose:l,onSubmit:function(e){e.preventDefault(),c(t)},textSubmitBtn:o.confirm},r.a.createElement("label",{className:"popup__field"},r.a.createElement("span",{className:"popup__error"})))},k=function(e){var t=e.card,a=e.onClose,n=e.isOpen,l=t?t.link:"#",c=t?t.name:"",o="popup popup_theme_image ".concat(n&&"popup_opened");return r.a.createElement("section",{className:o},r.a.createElement("div",{className:"popup__container popup__container_theme_img"},r.a.createElement("button",{type:"button",className:"button popup__close",onClick:a}),r.a.createElement("img",{src:l,alt:c,className:"popup__img"}),r.a.createElement("p",{className:"popup__caption"},c)))},j=a(7),y=a(8),S=new(function(){function e(t){var a=t.baseUrl,n=t.headers;Object(j.a)(this,e),this._baseUrl=a,this._headers=n}return Object(y.a)(e,[{key:"_handleOriginal",value:function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}},{key:"_getUserInfo",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(t){return e._handleOriginal(t)}))}},{key:"_getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(t){return e._handleOriginal(t)}))}},{key:"getAppInfo",value:function(){return Promise.all([this._getInitialCards(),this._getUserInfo()])}},{key:"createCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._handleOriginal(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._handleOriginal(e)}))}},{key:"editUserInfo",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._handleOriginal(e)}))}},{key:"changeUserPicture",value:function(e){var t=this;return console.log(e),fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return t._handleOriginal(e)}))}},{key:"changeLikeCardStatus",value:function(e,t){var a=this;return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:t?"PUT":"DELETE",headers:this._headers}).then((function(e){return a._handleOriginal(e)}))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-14",headers:{authorization:"c543d785-697b-4b19-aa15-a606529eab61","Content-Type":"application/json"}}),x=function(e){return{link:e.link,likes:e.likes,name:e.name,_id:e._id,ownerId:e.owner._id}},P=function(e){var t=e.isOpen,a=e.onClose,l=e.onAddPlace,c=Object(n.useRef)(),o=Object(n.useRef)(),i=Object(n.useContext)(v);return r.a.createElement(E,{name:"elements",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),l({name:c.current.value,link:o.current.value})},textSubmitBtn:i.save},r.a.createElement("label",{className:"popup__field"},r.a.createElement("input",{ref:c,type:"text",className:"popup__input popup__input_type_place",name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"1",maxLength:"30",required:!0}),r.a.createElement("span",{className:"popup__error"})),r.a.createElement("label",{className:"popup__field"},r.a.createElement("input",{ref:o,type:"url",className:"popup__input popup__input_type_link",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),r.a.createElement("span",{className:"popup__error"})))};var U=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),s=Object(i.a)(c,2),u=s[0],_=s[1],E=Object(n.useState)(!1),j=Object(i.a)(E,2),y=j[0],U=j[1],w=Object(n.useState)(!1),L=Object(i.a)(w,2),I=L[0],A=L[1],D=Object(n.useState)(!1),T=Object(i.a)(D,2),B=T[0],H=T[1],M=Object(n.useState)(null),q=Object(i.a)(M,2),z=q[0],J=q[1],R=Object(n.useState)({}),F=Object(i.a)(R,2),V=F[0],G=F[1],K=Object(n.useState)([]),Q=Object(i.a)(K,2),W=Q[0],X=Q[1],Y=Object(n.useState)(!1),Z=Object(i.a)(Y,2),$=Z[0],ee=Z[1],te=function(){U(!1),l(!1),_(!1),A(!1),H(!1),J(null)};return Object(n.useEffect)((function(){ee(!0),S.getAppInfo().then((function(e){var t=Object(i.a)(e,2),a=t[0],n=t[1];G(n);var r=a.map((function(e){return x(e)}));X(r)})).catch((function(e){return console.log(e)})).finally((function(){return ee(!1)}))}),[]),r.a.createElement(d.Provider,{value:W},r.a.createElement(p.Provider,{value:V},r.a.createElement("div",{className:"page"},r.a.createElement(m,null),$?r.a.createElement(b,null):r.a.createElement(f,{onEditAvatar:function(){U(!y)},onEditProfile:function(){l(!a)},onAddPlace:function(){_(!u)},onPopupDeleteCard:function(){A(!I)},onPopupImg:function(){H(!B)},onCardClick:J,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===V._id}));S.changeLikeCardStatus(e._id,!t).then((function(t){var a=W.map((function(a){return a._id===e._id?t:a}));X(a)})).catch((function(e){return console.log(e)}))}}),r.a.createElement(h,null),r.a.createElement(v.Provider,{value:g},r.a.createElement(C,{isOpen:a,onClose:te,onUpdateUser:function(e){S.editUserInfo(e).then((function(e){G(e),te()})).catch((function(e){return console.log(e)}))}}),r.a.createElement(O,{isOpen:y,onClose:te,onUpdateAvatar:function(e){S.changeUserPicture(e).then((function(e){G(e),te()})).catch((function(e){return console.log(e)}))}}),r.a.createElement(P,{isOpen:u,onClose:te,onAddPlace:function(e){S.createCard(e).then((function(e){var t=x(e);X([t].concat(Object(o.a)(W))),te()})).catch((function(e){return console.log(e)}))}}),r.a.createElement(N,{isOpen:I,onClose:te,card:z,onCardDelete:function(e){S.deleteCard(e._id).then((function(){var t=W.filter((function(t){return t._id!==e._id}));X(t),te()})).catch((function(e){return console.log(e)}))}}),r.a.createElement(k,{isOpen:B,onClose:te,card:z})))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root"))},6:function(e,t,a){e.exports=a.p+"static/media/logo_mesto.e889e45f.svg"}},[[10,1,2]]]);
//# sourceMappingURL=main.a80ccdab.chunk.js.map