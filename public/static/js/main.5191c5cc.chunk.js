(this.webpackJsonparound_react_p10=this.webpackJsonparound_react_p10||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),c=a.n(r),i=a(6),s=a.n(i),o=(a(15),a(9)),l=a(2),d=a.p+"static/media/logo.4e8e0a1d.svg";var u=function(){return Object(n.jsx)("header",{className:"header",children:Object(n.jsx)("img",{src:d,className:"logo",alt:"Around US Logo"})})},m=a.p+"static/media/Trashcan_lid.7b8dd559.svg",h=a.p+"static/media/trashcan_bottom.596a2577.svg",j=c.a.createContext();var _=function(e){var t=c.a.useContext(j),a=e.owner._id===t._id,r="card__delete ".concat(a?"card__remove-btn_visible":"card__remove-btn"),i=e.likes.some((function(e){return e._id===t._id})),s="card__heart ".concat(i?"card__like":"card__heart");return Object(n.jsxs)("li",{className:"card",children:[Object(n.jsx)("img",{className:"card__img",src:e.src,onClick:function(){e.onCardClick(e.card)},alt:e.title}),Object(n.jsxs)("button",{className:r,onClick:function(){e.onDeleteClick(e.card)},children:[Object(n.jsx)("img",{src:m,alt:"Trashcan lid",className:"card__trash-top"}),Object(n.jsx)("img",{src:h,alt:"trashcan bottom",className:"card__trash-bottom"})]}),Object(n.jsxs)("div",{className:"card__info",children:[Object(n.jsx)("h2",{className:"card__title",children:e.title}),Object(n.jsxs)("div",{className:"card__likes",children:[Object(n.jsx)("button",{className:s,onClick:function(){e.onLikeClick(e.card)}}),Object(n.jsx)("p",{className:"card__like-total",children:e.likes.length})]})]})]})};var b=function(e){var t=c.a.useContext(j);return Object(n.jsxs)("main",{className:"main",children:[Object(n.jsxs)("section",{className:"profile",children:[Object(n.jsxs)("div",{className:"profile__avatar-container",children:[Object(n.jsx)("img",{className:"profile__avatar",src:t.avatar,alt:"profile"}),Object(n.jsx)("button",{className:"profile__avatar_edit-btn",onClick:e.handleEditAvatarClick})]}),Object(n.jsxs)("div",{className:"profile-info",children:[Object(n.jsxs)("div",{className:"profile-info__text",children:[Object(n.jsx)("h1",{className:"profile-info__title",children:t.name}),Object(n.jsx)("p",{className:"profile-info__sub-title",children:t.about})]}),Object(n.jsx)("button",{className:"profile__edit-btn link",onClick:e.handleEditProfileClick})]}),Object(n.jsx)("button",{className:"profile__add-btn link",onClick:e.handleAddPlaceClick})]}),Object(n.jsx)("section",{className:"photo-container",children:Object(n.jsx)("ul",{className:"photo-grid",children:e.cards.map((function(t,a){return Object(n.jsx)(_,{card:t,src:t.link,title:t.name,likes:t.likes,owner:t.owner,_id:t._id,onCardClick:function(){return e.handleCardClick(t.link,t.name)},onDeleteClick:function(t){return e.handleCardDelete(t)},onLikeClick:function(t){return e.handleCardLike(t)}},a)}))})})]})};var f=function(){return Object(n.jsx)("footer",{className:"footer",children:"\xa9 2020 Around the U.S."})};var p=function(e){return Object(n.jsx)("div",{className:"modal modal_type_".concat(e.name," ").concat(e.isOpen?"modal_display":" "),children:Object(n.jsx)("div",{className:"modal__container",children:Object(n.jsxs)("div",{className:"modal__content",children:[Object(n.jsx)("h3",{className:"modal__title",children:"".concat(e.title)}),Object(n.jsxs)("form",{action:"#",className:"modal__form form form_type_".concat(e.name),noValidate:!0,onSubmit:e.onSubmit,children:[e.children,Object(n.jsx)("button",{type:"submit",className:"modal__button form__save",disabled:"",children:e.buttonText})]}),Object(n.jsx)("button",{className:"modal__close link",onClick:e.onClose})]})})})};var O=function(e){var t=c.a.useState(""),a=Object(l.a)(t,2),r=a[0],i=a[1],s=c.a.useState(""),o=Object(l.a)(s,2),d=o[0],u=o[1];return Object(n.jsxs)(p,{name:"add-card",title:"New Card",buttonText:"Save",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.handleAddPlace({name:r,link:d})},children:[Object(n.jsxs)("label",{className:"modal__label",children:[Object(n.jsx)("input",{id:"image-title",type:"text",name:"name",className:"modal__input form__title-input",placeholder:"title",minLength:"1",maxLength:"30",onChange:function(e){i(e.target.value)},value:r,required:!0}),Object(n.jsx)("span",{id:"image-title-error",className:"modal__error"})]}),Object(n.jsxs)("label",{className:"modal__label",children:[Object(n.jsx)("input",{id:"image-url",type:"url",name:"link",className:"modal__input form__url-input",placeholder:"url",onChange:function(e){u(e.target.value)},value:d,required:!0}),Object(n.jsx)("span",{id:"image-url-error",className:"modal__error"})]})]})};var v=function(e){var t=c.a.useState(""),a=Object(l.a)(t,2),r=a[0],i=a[1],s=c.a.useState(""),o=Object(l.a)(s,2),d=o[0],u=o[1];return Object(n.jsxs)(p,{name:"edit-profile",title:"Edit profile",buttonText:"Save",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onProfileUpdate({name:r,about:d})},children:[Object(n.jsxs)("label",{className:"modal__label",children:[Object(n.jsx)("input",{id:"profile-name",type:"text",name:"name",className:"modal__input form__name-input",placeholder:"name",minLength:"2",maxLength:"40",onChange:function(e){i(e.target.value)},value:r,required:!0}),Object(n.jsx)("span",{id:"profile-name-error",className:"modal__error"})]}),Object(n.jsxs)("label",{className:"modal__label",children:[Object(n.jsx)("input",{id:"profile-occupation",type:"text",name:"occupation",className:"modal__input form__job-input",placeholder:"occupation",minLength:"2",maxLength:"200",onChange:function(e){u(e.target.value)},value:d,required:!0}),Object(n.jsx)("span",{id:"profile-occupation-error",className:"modal__error"})]})]})};var x=function(e){var t=c.a.useRef();return Object(n.jsx)(p,{name:"edit-avatar",title:"Change profile picture",buttonText:"Save",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(a){a.preventDefault(),e.onUpdateAvatar(t.current.value)},children:Object(n.jsxs)("label",{className:"modal__label",children:[Object(n.jsx)("input",{ref:t,id:"avatar-url",type:"url",name:"avatar",className:"modal__input form__url-input",placeholder:"avatar url",minLength:"2",required:!0}),Object(n.jsx)("span",{id:"avatar-url-error",className:"modal__error",children:"Please enter a url."})]})})};var k=function(e){return Object(n.jsx)("div",{className:"modal modal_type_display-image ".concat(e.isOpen?"modal_display":" "),onClick:e.onClose,children:Object(n.jsxs)("div",{className:"modal__container",children:[Object(n.jsx)("button",{className:"modal__close link",onClick:e.onClose}),Object(n.jsxs)("figure",{children:[Object(n.jsx)("img",{src:e.link,alt:e.title,className:"modal__img"}),Object(n.jsx)("figcaption",{className:"modal__caption",children:e.title})]})]})})},C=a(7),g=a(8),N=new(function(){function e(t){var a=t.baseURL,n=t.headers;Object(C.a)(this,e),this._baseURL=a,this._headers=n}return Object(g.a)(e,[{key:"getInitialCards",value:function(){return fetch(this._baseURL+"/cards",{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}},{key:"getUserInfo",value:function(){return fetch(this._baseURL+"/users/me",{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}},{key:"getAppInfo",value:function(){return Promise.all([this.getUserInfo(),this.getInitialCards()])}},{key:"setUserInfo",value:function(e){var t=e.name,a=e.about;return fetch(this._baseURL+"/users/me",{headers:this._headers,method:"PATCH",body:JSON.stringify({name:t,about:a})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}},{key:"addCard",value:function(e){var t=e.name,a=e.link;return fetch(this._baseURL+"/cards",{headers:this._headers,method:"POST",body:JSON.stringify({name:t,link:a})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}},{key:"removeCard",value:function(e){return fetch(this._baseURL+"/cards/"+e,{headers:this._headers,method:"DELETE"}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}},{key:"addLikes",value:function(e){return fetch(this._baseURL+"/cards/likes/"+e,{headers:this._headers,method:"PUT"}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}},{key:"removeLikes",value:function(e){return fetch(this._baseURL+"/cards/likes/"+e,{headers:this._headers,method:"DELETE"}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}},{key:"setAvatar",value:function(e){var t=e.avatar;return fetch(this._baseURL+"/users/me/avatar",{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:t})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}}]),e}())({baseURL:"https://around.nomoreparties.co/v1/group-5",headers:{authorization:"97759523-392d-4e85-9860-1537a0a1a99b","Content-Type":"application/json"}});var L=function(){var e=c.a.useState([]),t=Object(l.a)(e,2),a=t[0],r=t[1],i=c.a.useState(!1),s=Object(l.a)(i,2),d=s[0],m=s[1],h=c.a.useState(!1),_=Object(l.a)(h,2),p=_[0],C=_[1],g=c.a.useState(!1),L=Object(l.a)(g,2),y=L[0],S=L[1],P=c.a.useState(!1),U=Object(l.a)(P,2),A=U[0],T=U[1],E=c.a.useState(""),R=Object(l.a)(E,2),D=R[0],I=R[1],w=c.a.useState(""),q=Object(l.a)(w,2),J=q[0],F=q[1],B=c.a.useState(""),H=Object(l.a)(B,2),z=H[0],M=H[1];function V(e,t){T(!0),I(e),F(t)}function G(){S(!1),m(!1),C(!1),T(!1)}function K(e){(!1===e.likes.some((function(e){return e._id===z._id}))?N.addLikes(e._id):N.removeLikes(e._id)).then((function(t){var n=a.map((function(a){return a._id===e._id?t:a}));r(n)})).catch((function(e){return console.log(e)}))}function Q(e){N.removeCard(e._id).then((function(){var t=a.filter((function(t){return t._id!==e._id}));r(t)})).catch((function(e){return console.log(e)}))}return c.a.useEffect((function(){N.getUserInfo().then((function(e){console.log(e),M(e)})).catch((function(e){return console.log(e)})),N.getInitialCards().then((function(e){console.log(e),r(e.map((function(e){return{name:e.name,link:e.link,likes:e.likes,_id:e._id,owner:e.owner}})))})).catch((function(e){return console.log(e)}))}),[]),Object(n.jsx)("div",{children:Object(n.jsxs)(j.Provider,{value:z,children:[Object(n.jsx)(u,{}),Object(n.jsx)(b,{cards:a,handleEditAvatarClick:function(){m(!0)},handleEditProfileClick:function(){C(!0)},handleAddPlaceClick:function(){S(!0)},handleCardClick:V,onCardClick:function(e){V(e)},onDeleteClick:function(e){Q(e)},onLikeClick:function(e){K(e)},handleCardLike:K,handleCardDelete:Q}),Object(n.jsx)(f,{}),Object(n.jsx)(O,{isOpen:y,onClose:G,handleAddPlace:function(e){var t=e.name,n=e.link;N.addCard({name:t,link:n}).then((function(e){r([e].concat(Object(o.a)(a)))})).then((function(){return S(!1)})).catch((function(e){return console.log(e)}))}}),Object(n.jsx)(x,{isOpen:d,onClose:G,onUpdateAvatar:function(e){N.setAvatar({avatar:e}).then((function(e){M(e)})).then((function(){return m(!1)})).catch((function(e){return console.log(e)}))}}),Object(n.jsx)(v,{isOpen:p,onClose:G,onProfileUpdate:function(e){var t=e.name,a=e.about;N.setUserInfo({name:t,about:a}).then((function(e){M(e)})).then((function(){return C(!1)})).catch((function(e){return console.log(e)}))}}),Object(n.jsx)(k,{isOpen:A,onClose:G,title:J,link:D})]})})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))};s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(L,{})}),document.getElementById("root")),y()}},[[16,1,2]]]);
//# sourceMappingURL=main.5191c5cc.chunk.js.map