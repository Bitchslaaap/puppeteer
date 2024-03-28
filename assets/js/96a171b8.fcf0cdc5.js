/*! For license information please see 96a171b8.fcf0cdc5.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4811],{64790:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=t(85893),r=t(11151);const i={sidebar_label:"PredefinedNetworkConditions"},a="PredefinedNetworkConditions variable",s={id:"api/puppeteer.predefinednetworkconditions",title:"PredefinedNetworkConditions variable",description:"A list of network conditions to be used with Page.emulateNetworkConditions().",source:"@site/versioned_docs/version-22.6.2/api/puppeteer.predefinednetworkconditions.md",sourceDirName:"api",slug:"/api/puppeteer.predefinednetworkconditions",permalink:"/api/puppeteer.predefinednetworkconditions",draft:!1,unlisted:!1,tags:[],version:"22.6.2",frontMatter:{sidebar_label:"PredefinedNetworkConditions"},sidebar:"api",previous:{title:"Point",permalink:"/api/puppeteer.point"},next:{title:"Predicate",permalink:"/api/puppeteer.predicate"}},d={},p=[{value:"Signature:",id:"signature",level:4},{value:"Example",id:"example",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"predefinednetworkconditions-variable",children:"PredefinedNetworkConditions variable"}),"\n",(0,o.jsxs)(n.p,{children:["A list of network conditions to be used with ",(0,o.jsx)(n.a,{href:"/api/puppeteer.page.emulatenetworkconditions",children:"Page.emulateNetworkConditions()"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"signature",children:"Signature:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"PredefinedNetworkConditions: Readonly<{\n  'Slow 3G': NetworkConditions;\n  'Fast 3G': NetworkConditions;\n}>;\n"})}),"\n",(0,o.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import {PredefinedNetworkConditions} from 'puppeteer';\nconst slow3G = PredefinedNetworkConditions['Slow 3G'];\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.emulateNetworkConditions(slow3G);\n  await page.goto('https://www.google.com');\n  // other actions...\n  await browser.close();\n})();\n"})})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},75251:(e,n,t)=>{var o=t(67294),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function p(e,n,t){var o,i={},p=null,l=null;for(o in void 0!==t&&(p=""+t),void 0!==n.key&&(p=""+n.key),void 0!==n.ref&&(l=n.ref),n)a.call(n,o)&&!d.hasOwnProperty(o)&&(i[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===i[o]&&(i[o]=n[o]);return{$$typeof:r,type:e,key:p,ref:l,props:i,_owner:s.current}}n.Fragment=i,n.jsx=p,n.jsxs=p},85893:(e,n,t)=>{e.exports=t(75251)},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var o=t(67294);const r={},i=o.createContext(r);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);