/*! For license information please see dcf904df.6477b80e.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[43387],{33243:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>p,metadata:()=>d,toc:()=>o});var n=t(85893),s=t(11151);const p={sidebar_label:"PuppeteerNode"},i="PuppeteerNode class",d={id:"api/puppeteer.puppeteernode",title:"PuppeteerNode class",description:"Extends the main Puppeteer class with Node specific behaviour for fetching and downloading browsers.",source:"@site/../docs/api/puppeteer.puppeteernode.md",sourceDirName:"api",slug:"/api/puppeteer.puppeteernode",permalink:"/next/api/puppeteer.puppeteernode",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"PuppeteerNode"},sidebar:"api",next:{title:"PuppeteerNode.connect",permalink:"/next/api/puppeteer.puppeteernode.connect"}},c={},o=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function l(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"puppeteernode-class",children:"PuppeteerNode class"}),"\n",(0,n.jsxs)(r.p,{children:["Extends the main ",(0,n.jsx)(r.a,{href:"/next/api/puppeteer.puppeteer",children:"Puppeteer"})," class with Node specific behaviour for fetching and downloading browsers."]}),"\n",(0,n.jsxs)(r.p,{children:["If you're using Puppeteer in a Node environment, this is the class you'll get when you run ",(0,n.jsx)(r.code,{children:"require('puppeteer')"})," (or the equivalent ES ",(0,n.jsx)(r.code,{children:"import"}),")."]}),"\n",(0,n.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export declare class PuppeteerNode extends Puppeteer\n"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Extends:"})," ",(0,n.jsx)(r.a,{href:"/next/api/puppeteer.puppeteer",children:"Puppeteer"})]}),"\n",(0,n.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(r.p,{children:["The most common method to use is ",(0,n.jsx)(r.a,{href:"/next/api/puppeteer.puppeteernode.launch",children:"launch"}),", which is used to launch and connect to a new browser instance."]}),"\n",(0,n.jsxs)(r.p,{children:["See ",(0,n.jsx)(r.a,{href:"/next/api/puppeteer.puppeteer",children:"the main Puppeteer class"})," for methods common to all environments, such as ",(0,n.jsx)(r.a,{href:"/next/api/puppeteer.puppeteer.connect",children:"Puppeteer.connect()"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,n.jsx)(r.code,{children:"PuppeteerNode"})," class."]}),"\n",(0,n.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(r.p,{children:"The following is a typical example of using Puppeteer to drive automation:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.goto('https://www.google.com');\n  // other actions...\n  await browser.close();\n})();\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Once you have created a ",(0,n.jsx)(r.code,{children:"page"})," you have access to a large API to interact with the page, navigate, or find certain elements in that page. The ",(0,n.jsx)(r.a,{href:"/next/api/puppeteer.page",children:"`page` documentation"})," lists all the available methods."]}),"\n",(0,n.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Property"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Modifiers"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Description"})})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"defaultProduct"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"readonly"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/next/api/puppeteer.product",children:"Product"})})}),(0,n.jsx)("td",{children:(0,n.jsxs)(r.p,{children:["The name of the browser that will be launched by default. For ",(0,n.jsx)(r.code,{children:"puppeteer"}),", this is influenced by your configuration. Otherwise, it's ",(0,n.jsx)(r.code,{children:"chrome"}),"."]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"lastLaunchedProduct"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"readonly"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/next/api/puppeteer.product",children:"Product"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"The name of the browser that was last launched."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"product"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"readonly, deprecated"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"string"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Deprecated:"})}),(0,n.jsxs)(r.p,{children:["Do not use as this field as it does not take into account multiple browsers of different types. Use ",(0,n.jsx)(r.a,{href:"./puppeteer.puppeteernode.defaultproduct.md",children:"defaultProduct"})," or ",(0,n.jsx)(r.a,{href:"./puppeteer.puppeteernode.lastlaunchedproduct.md",children:"lastLaunchedProduct"}),"."]})]})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Method"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Modifiers"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Description"})})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/next/api/puppeteer.puppeteernode.connect",children:"connect(options)"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"This method attaches Puppeteer to an existing browser instance."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/next/api/puppeteer.puppeteernode.defaultargs",children:"defaultArgs(options)"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/next/api/puppeteer.puppeteernode.executablepath",children:"executablePath(channel)"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"The default executable path."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/next/api/puppeteer.puppeteernode.launch",children:"launch(options)"})})}),(0,n.jsx)("td",{}),(0,n.jsxs)("td",{children:[(0,n.jsx)(r.p,{children:"Launches a browser instance with given arguments and options when specified."}),(0,n.jsxs)(r.p,{children:["When using with ",(0,n.jsx)(r.code,{children:"puppeteer-core"}),", ",(0,n.jsx)(r.a,{href:"/next/api/puppeteer.launchoptions",children:"options.executablePath"})," or ",(0,n.jsx)(r.a,{href:"/next/api/puppeteer.launchoptions",children:"options.channel"})," must be provided."]})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/next/api/puppeteer.puppeteernode.trimcache",children:"trimCache()"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsxs)(r.p,{children:["Removes all non-current Firefox and Chrome binaries in the cache directory identified by the provided Puppeteer configuration. The current browser version is determined by resolving PUPPETEER_REVISIONS from Puppeteer unless ",(0,n.jsx)(r.code,{children:"configuration.browserRevision"})," is provided."]})})]})]})]})]})}function a(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},75251:(e,r,t)=>{var n=t(67294),s=Symbol.for("react.element"),p=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,r,t){var n,p={},o=null,l=null;for(n in void 0!==t&&(o=""+t),void 0!==r.key&&(o=""+r.key),void 0!==r.ref&&(l=r.ref),r)i.call(r,n)&&!c.hasOwnProperty(n)&&(p[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===p[n]&&(p[n]=r[n]);return{$$typeof:s,type:e,key:o,ref:l,props:p,_owner:d.current}}r.Fragment=p,r.jsx=o,r.jsxs=o},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>d,a:()=>i});var n=t(67294);const s={},p=n.createContext(s);function i(e){const r=n.useContext(p);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(p.Provider,{value:r},e.children)}}}]);