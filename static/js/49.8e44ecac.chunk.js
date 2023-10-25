"use strict";(self.webpackChunkrent_a_car=self.webpackChunkrent_a_car||[]).push([[49],{3049:function(n,e,t){t.d(e,{Z:function(){return Nn}});var r,i,o,l,a,s,c,d,p,x,h,f,u,g,m,b,v,j,Z,y,w,P,k,C=t(9439),L=t(2791),O=t(9434),S=t(2068),I=t(4164),z=t(168),E=t(5867),F=t(4651),_=E.ZP.div(r||(r=(0,z.Z)(["\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  padding: 40px;\n  width: 541px;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #fff;\n  z-index: 1000;\n"]))),J=E.ZP.div(i||(i=(0,z.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(18, 20, 23, 0.5);\n  z-index: 1000;\n"]))),M=E.ZP.button(o||(o=(0,z.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n  width: 24px;\n  height: 24px;\n  border: none;\n  background-color: transparent;\n\n  cursor: pointer;\n\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  color: rgba(18, 20, 23, 1);\n\n  transition: all 1250ms;\n  :hover,\n  :focus {\n    color: #0b44cd;\n  }\n"]))),N=(0,E.ZP)(F.S1K)(l||(l=(0,z.Z)(["\n  transition: all 250ms;\n  :hover,\n  :focus {\n    color: #0b44cd;\n  }\n"]))),T=E.ZP.div(a||(a=(0,z.Z)(["\n  width: 461px;\n  height: 248px;\n  overflow: hidden;\n  border-radius: 14px;\n  /* margin-top: -21px; */\n  margin-bottom: 14px;\n  background-color: gray;\n"]))),A=E.ZP.img(s||(s=(0,z.Z)(["\n  width: 461px;\n  height: 248px;\n  object-fit: fit;\n"]))),B=E.ZP.h3(c||(c=(0,z.Z)(["\n  color: rgba(18, 20, 23, 1);\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 1.33;\n  margin-top: 0;\n  margin-bottom: 8px;\n"]))),R=E.ZP.span(d||(d=(0,z.Z)(["\n  color: rgba(52, 112, 255, 1);\n"]))),W=E.ZP.div(p||(p=(0,z.Z)(["\n  display: flex;\n  width: 277px;\n  height: 40px;\n  flex-direction: column;\n  gap: 4px;\n  color: rgba(18, 20, 23, 0.5);\n  margin-bottom: 14px;\n  overflow: hidden;\n  font-size: 12px;\n  line-height: 1.5;\n"]))),K=E.ZP.div(x||(x=(0,z.Z)(["\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.43;\n  margin-bottom: 24px;\n"]))),Y=E.ZP.div(h||(h=(0,z.Z)(["\n  margin-bottom: 24px;\n"]))),q=E.ZP.div(f||(f=(0,z.Z)(["\n  display: flex;\n  width: 100%;\n  height: 40px;\n  flex-direction: column;\n  gap: 4px;\n  color: rgba(18, 20, 23, 0.5);\n  overflow: hidden;\n  font-size: 12px;\n  line-height: 1.5;\n  overflow: auto;\n"]))),D=E.ZP.h3(u||(u=(0,z.Z)(["\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 1.43;\n  margin-top: 0px;\n  margin-bottom: 8px;\n"]))),G=E.ZP.div(g||(g=(0,z.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 24px;\n"]))),H=E.ZP.h3(m||(m=(0,z.Z)(["\n  margin: 0;\n  color: rgba(18, 20, 23, 1);\n  font-weight: 500px;\n  font-size: 14px;\n  line-height: 1.43;\n"]))),Q=(E.ZP.div(b||(b=(0,z.Z)(["\n  display: flex;\n  gap: 8px;\n"]))),E.ZP.div(v||(v=(0,z.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"])))),U=E.ZP.span(j||(j=(0,z.Z)(["\n  display: inline-block;\n  background-color: rgba(249, 249, 249, 1);\n  padding: 7px 14px;\n  border-radius: 35px;\n"]))),V=E.ZP.div(Z||(Z=(0,z.Z)(["\n  display: flex;\n  gap: 8px;\n"]))),X=E.ZP.span(y||(y=(0,z.Z)(["\n  color: rgba(52, 112, 255, 1);\n"]))),$=E.ZP.button(w||(w=(0,z.Z)(["\n  width: 168px;\n  height: 44px;\n  border-radius: 12px;\n  background-color: #3470ff;\n  border: none;\n  transition: all 250ms;\n  cursor: pointer;\n  color: white;\n\n  &:hover,\n  &:focus {\n    background-color: #0b44cd;\n  }\n"]))),nn=E.ZP.a(P||(P=(0,z.Z)(["\n  font-size: 14px;\n  line-height: 1.43;\n  color: white;\n  text-decoration: none;\n"]))),en=t(184);function tn(n){var e=n.open,t=n.onClose,r=n.card;if((0,L.useEffect)((function(){var n=function(n){"Escape"===n.code&&t()};return document.addEventListener("keydown",n),function(){document.removeEventListener("keydown",n)}}),[t]),!e)return null;var i=r.rentalConditions.split("\n"),o=i[0].split(": "),l=r.address.split(", "),a=l[l.length-1],s=l[l.length-2],c=r.img?r.img:r.photoLink,d=[s,a,"Id: ".concat(r.id),"Year: ".concat(r.year),"Type: ".concat(r.type)].join(" | "),p=["Fuel Consumption: ".concat(r.fuelConsumption),"Engine Size: ".concat(r.engineSize)].join(" | "),x=r.mileage.toString(),h=[x.toString().slice(0,1),",",x.slice(1)].join("");return I.createPortal((0,en.jsxs)(en.Fragment,{children:[(0,en.jsx)(J,{onClick:function(n){n.target===n.currentTarget&&t()}}),(0,en.jsxs)(_,{children:[(0,en.jsx)(M,{type:"button",onClick:t,children:(0,en.jsx)(N,{size:24})}),(0,en.jsx)(T,{children:(0,en.jsx)(A,{src:c,alt:r.make})}),(0,en.jsxs)(B,{children:[r.make," ",(0,en.jsx)(R,{children:r.model}),", ",r.year]}),(0,en.jsxs)(W,{children:[(0,en.jsx)("div",{children:d}),(0,en.jsx)("div",{children:p})]}),(0,en.jsx)(K,{children:r.description}),(0,en.jsxs)(Y,{children:[(0,en.jsx)(D,{children:"Accessories and functionalities:"}),(0,en.jsxs)(q,{children:[(0,en.jsx)("div",{children:r.accessories.join(" | ")}),(0,en.jsx)("div",{children:r.functionalities.join(" | ")})]})]}),(0,en.jsxs)(G,{children:[(0,en.jsx)(H,{children:"Rental Conditions:"}),(0,en.jsxs)(Q,{children:[(0,en.jsxs)(V,{children:[(0,en.jsxs)(U,{children:["Minimum age: ",(0,en.jsx)(X,{children:o[1]})]}),(0,en.jsx)(U,{children:i[1]})]}),(0,en.jsxs)(V,{children:[(0,en.jsx)(U,{children:i[1]}),(0,en.jsxs)(U,{children:["Mileage: ",(0,en.jsx)(X,{children:h})]}),(0,en.jsxs)(U,{children:["Price: ",(0,en.jsx)(X,{children:r.rentalPrice})]})]})]})]}),(0,en.jsx)($,{type:"button",children:(0,en.jsx)(nn,{href:"tel:+380730000000",target:"_blank",rel:"noopener noreferrer",children:"Learn more"})})]})]}),document.getElementById("modal"))}var rn=["title","titleId"];function on(){return on=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},on.apply(this,arguments)}function ln(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function an(n,e){var t=n.title,r=n.titleId,i=ln(n,rn);return L.createElement("svg",on({width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},i),t?L.createElement("title",{id:r},t):null,k||(k=L.createElement("path",{d:"M15.6301 3.45753C15.247 3.07428 14.7922 2.77026 14.2916 2.56284C13.791 2.35542 13.2545 2.24866 12.7126 2.24866C12.1707 2.24866 11.6342 2.35542 11.1336 2.56284C10.633 2.77026 10.1782 3.07428 9.79509 3.45753L9.00009 4.25253L8.20509 3.45753C7.43132 2.68376 6.38186 2.24906 5.28759 2.24906C4.19331 2.24906 3.14386 2.68376 2.37009 3.45753C1.59632 4.2313 1.16162 5.28075 1.16162 6.37503C1.16162 7.4693 1.59632 8.51876 2.37009 9.29253L3.16509 10.0875L9.00009 15.9225L14.8351 10.0875L15.6301 9.29253C16.0133 8.90946 16.3174 8.45464 16.5248 7.95404C16.7322 7.45345 16.839 6.91689 16.839 6.37503C16.839 5.83316 16.7322 5.2966 16.5248 4.79601C16.3174 4.29542 16.0133 3.84059 15.6301 3.45753Z",stroke:"white",strokeOpacity:.8,strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var sn,cn=L.forwardRef(an),dn=(t.p,["title","titleId"]);function pn(){return pn=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},pn.apply(this,arguments)}function xn(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function hn(n,e){var t=n.title,r=n.titleId,i=xn(n,dn);return L.createElement("svg",pn({width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},i),t?L.createElement("title",{id:r},t):null,sn||(sn=L.createElement("path",{d:"M15.6301 3.45753C15.247 3.07428 14.7922 2.77026 14.2916 2.56284C13.791 2.35542 13.2545 2.24866 12.7126 2.24866C12.1707 2.24866 11.6342 2.35542 11.1336 2.56284C10.633 2.77026 10.1782 3.07428 9.79509 3.45753L9.00009 4.25253L8.20509 3.45753C7.43132 2.68376 6.38186 2.24906 5.28759 2.24906C4.19331 2.24906 3.14386 2.68376 2.37009 3.45753C1.59632 4.2313 1.16162 5.28075 1.16162 6.37503C1.16162 7.4693 1.59632 8.51876 2.37009 9.29253L3.16509 10.0875L9.00009 15.9225L14.8351 10.0875L15.6301 9.29253C16.0133 8.90946 16.3174 8.45464 16.5248 7.95404C16.7322 7.45345 16.839 6.91689 16.839 6.37503C16.839 5.83316 16.7322 5.2966 16.5248 4.79601C16.3174 4.29542 16.0133 3.84059 15.6301 3.45753Z",fill:"#3470FF",stroke:"#3470FF",strokeLinecap:"round",strokeLinejoin:"round"})))}var fn,un,gn,mn,bn,vn,jn,Zn,yn,wn,Pn,kn=L.forwardRef(hn),Cn=(t.p,E.ZP.div(fn||(fn=(0,z.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 29px;\n\n  width: 1184px;\n\n  margin-bottom: 100px;\n"])))),Ln=E.ZP.div(un||(un=(0,z.Z)(["\n  background-color: transparent;\n  border-radius: 14px;\n\n  width: 274px;\n  height: 426px;\n\n  &:hover,\n  &:focus {\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  }\n"]))),On=E.ZP.div(gn||(gn=(0,z.Z)(["\n  width: 274px;\n  height: 268px;\n  overflow: hidden;\n  border-radius: 14px;\n  margin-top: -21px;\n  margin-bottom: 14px;\n"]))),Sn=E.ZP.img(mn||(mn=(0,z.Z)(["\n  width: 274px;\n  height: 268px;\n  object-fit: cover;\n  object-position: center;\n"]))),In=E.ZP.div(bn||(bn=(0,z.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),zn=E.ZP.span(vn||(vn=(0,z.Z)(["\n  color: rgba(52, 112, 255, 1);\n"]))),En=E.ZP.div(jn||(jn=(0,z.Z)(["\n  margin-bottom: 31px;\n  overflow: hidden;\n  font-size: 14px;\n  width: 270px;\n  height: 40px;\n"]))),Fn=E.ZP.button(Zn||(Zn=(0,z.Z)(["\n  width: 100%;\n  height: 44px;\n  border-radius: 12px;\n  background-color: #3470ff;\n  border: none;\n  transition: all 250ms;\n  cursor: pointer;\n  color: #ffffff;\n\n  &:hover,\n  &:focus {\n    background-color: #0b44cd;\n  }\n"]))),_n=E.ZP.button(yn||(yn=(0,z.Z)(["\n  background-color: transparent;\n  border: none;\n  margin: 0px;\n  margin-bottom: -29px;\n  padding: 0px;\n  position: relative;\n  top: 14px;\n  left: 251px;\n  cursor: pointer;\n"]))),Jn=(0,E.ZP)(cn)(wn||(wn=(0,z.Z)([""]))),Mn=(0,E.ZP)(kn)(Pn||(Pn=(0,z.Z)([""])));function Nn(n){var e=n.cardsArray,t=n.setLocalList,r=(n.page,(0,L.useState)(!1)),i=(0,C.Z)(r,2),o=i[0],l=i[1],a=(0,L.useState)(!1),s=(0,C.Z)(a,2),c=s[0],d=s[1],p=(0,L.useState)(""),x=(0,C.Z)(p,2),h=x[0],f=x[1],u=(0,O.v9)(S.W),g=[];function m(n){l(!o);var e=u.find((function(e){return e.id===n.currentTarget.id}));if(g.some((function(n){return n.id===e.id}))){var r=g.filter((function(n){return n.id!==e.id}));localStorage.setItem("favListItems",JSON.stringify(r))}else g.push(e),localStorage.setItem("favListItems",JSON.stringify(g));t&&t(JSON.parse(localStorage.getItem("favListItems")))}function b(n){f(n.currentTarget.getAttribute("id")),d(!0)}function v(){d(!1)}return localStorage.getItem("favListItems")&&(g=JSON.parse(localStorage.getItem("favListItems"))),(0,en.jsx)(Cn,{children:e.map((function(n){var e=n.address.split(", "),t=e[e.length-1],r=e[e.length-2],i=n.img?n.img:n.photoLink,o=g.some((function(e){return e.id===n.id})),l=[r,t,n.rentalCompany,n.type,n.fuelConsumption,n.id,n.accessories[0]].join(" | ");return(0,en.jsxs)(Ln,{children:[(0,en.jsx)(_n,{type:"button",onClick:m,id:n.id,children:o?(0,en.jsx)(Mn,{}):(0,en.jsx)(Jn,{})}),(0,en.jsx)(On,{children:(0,en.jsx)(Sn,{src:i,alt:n.make})}),(0,en.jsxs)(In,{children:[(0,en.jsxs)("div",{children:[n.make," ",(0,en.jsx)(zn,{children:n.model}),", ",n.year]}),(0,en.jsx)("div",{children:n.rentalPrice})]}),(0,en.jsx)(En,{children:l}),(0,en.jsxs)("div",{children:[(0,en.jsx)(Fn,{type:"button",onClick:b,id:n.id,children:"Learn more"}),h===n.id&&(0,en.jsx)(tn,{open:c,onClose:v,card:n})]})]},n.id)}))})}},2068:function(n,e,t){t.d(e,{W:function(){return r}});var r=function(n){return n.cars.carList}}}]);
//# sourceMappingURL=49.8e44ecac.chunk.js.map