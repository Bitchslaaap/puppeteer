/*! For license information please see 27209eff.b75ae436.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[66761],{60273:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>d,metadata:()=>i,toc:()=>p});var t=n(85893),s=n(11151);const d={sidebar_label:"Mouse.dragAndDrop"},o="Mouse.dragAndDrop() method",i={id:"api/puppeteer.mouse.draganddrop",title:"Mouse.dragAndDrop() method",description:"Performs a drag, dragenter, dragover, and drop in sequence.",source:"@site/versioned_docs/version-22.6.2/api/puppeteer.mouse.draganddrop.md",sourceDirName:"api",slug:"/api/puppeteer.mouse.draganddrop",permalink:"/api/puppeteer.mouse.draganddrop",draft:!1,unlisted:!1,tags:[],version:"22.6.2",frontMatter:{sidebar_label:"Mouse.dragAndDrop"},sidebar:"api",previous:{title:"Mouse.drag",permalink:"/api/puppeteer.mouse.drag"},next:{title:"Mouse.dragEnter",permalink:"/api/puppeteer.mouse.dragenter"}},a={},p=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}];function c(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"mousedraganddrop-method",children:"Mouse.dragAndDrop() method"}),"\n",(0,t.jsx)(r.p,{children:"Performs a drag, dragenter, dragover, and drop in sequence."}),"\n",(0,t.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"class Mouse {\n  abstract dragAndDrop(\n    start: Point,\n    target: Point,\n    options?: {\n      delay?: number;\n    }\n  ): Promise<void>;\n}\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Parameter"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Type"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Description"})})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"start"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/api/puppeteer.point",children:"Point"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"point to drag from"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"target"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/api/puppeteer.point",children:"Point"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"point to drop on"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"options"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"{ delay?: number; }"})}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"(Optional)"})," An object of options. Accepts delay which, if specified, is the time to wait between ",(0,t.jsx)(r.code,{children:"dragover"})," and ",(0,t.jsx)(r.code,{children:"drop"})," in milliseconds. Defaults to 0."]})})]})]})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,t.jsx)(r.p,{children:"Promise<void>"})]})}function l(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},75251:(e,r,n)=>{var t=n(67294),s=Symbol.for("react.element"),d=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function p(e,r,n){var t,d={},p=null,c=null;for(t in void 0!==n&&(p=""+n),void 0!==r.key&&(p=""+r.key),void 0!==r.ref&&(c=r.ref),r)o.call(r,t)&&!a.hasOwnProperty(t)&&(d[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===d[t]&&(d[t]=r[t]);return{$$typeof:s,type:e,key:p,ref:c,props:d,_owner:i.current}}r.Fragment=d,r.jsx=p,r.jsxs=p},85893:(e,r,n)=>{e.exports=n(75251)},11151:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>o});var t=n(67294);const s={},d=t.createContext(s);function o(e){const r=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(d.Provider,{value:r},e.children)}}}]);