"use strict";(self.webpackChunk_semaphore_docs=self.webpackChunk_semaphore_docs||[]).push([[196],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,a(a({ref:t},l),{},{components:n})):r.createElement(h,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3849:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],s={id:"introduction",title:"What Is Semaphore?",sidebar_position:1},p=void 0,c={unversionedId:"introduction",id:"version-V2/introduction",title:"What Is Semaphore?",description:"Semaphore's V2 documentation is under development.",source:"@site/versioned_docs/version-V2/what-is-semaphore.md",sourceDirName:".",slug:"/introduction",permalink:"/docs/introduction",editUrl:"https://github.com/appliedzkp/semaphore/edit/main/versioned_docs/version-V2/what-is-semaphore.md",tags:[],version:"V2",sidebarPosition:1,frontMatter:{id:"introduction",title:"What Is Semaphore?",sidebar_position:1},sidebar:"version-V2/mySidebar",next:{title:"Quick setup",permalink:"/docs/quick-setup"}},l=[{value:"Overview",id:"overview",children:[],level:2},{value:"Basic features",id:"basic-features",children:[],level:2},{value:"About the code",id:"about-the-code",children:[],level:2}],d={toc:l};function u(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Semaphore's V2 documentation is under development."))),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/appliedzkp/semaphore"},"Semaphore")," is a zero-knowledge gadget\nwhich allows Ethereum users to prove their membership of a set which they had\npreviously joined without revealing their original identity. At the same time,\nit allows users to signal their endorsement of an arbitrary string. It is\ndesigned to be a simple and generic privacy layer for Ethereum DApps. Use cases\ninclude private voting, whistleblowing, mixers, and anonymous authentication.\nFinally, it provides a simple built-in mechanism to prevent double-signalling\nor double-spending."),(0,i.kt)("p",null,"This gadget comprises of smart contracts and\n",(0,i.kt)("a",{parentName:"p",href:"https://z.cash/technology/zksnarks/"},"zero-knowledge")," components which work in\ntandem. The Semaphore smart contract handles state, permissions, and proof\nverification onchain. The zero-knowledge components work offchain to allow\nusers to generate proofs, which allow the smart contract to update its state\nif these proofs are valid."),(0,i.kt)("p",null,"Semaphore is designed for DApp developers (not for end-users) and it allows them to abstract their\nfeatures in order to provide user-friendly privacy."),(0,i.kt)("h2",{id:"basic-features"},"Basic features"),(0,i.kt)("p",null,"In sum, Semaphore provides the ability to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"generate offchain identities and add them to a Merkle tree (offchain or onchain);"),(0,i.kt)("li",{parentName:"ol"},"anonymously broadcast a signal onchain, if and only if the identity of the owner belongs to a\nvalid Merkle tree and if the nullifier has not already been used.")),(0,i.kt)("h2",{id:"about-the-code"},"About the code"),(0,i.kt)("p",null,"The core of the protocol is in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/appliedzkp/semaphore/tree/main/circuits/scheme.png"},"circuit logic"),". However\nSemaphore also provides ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/appliedzkp/semaphore/tree/main/contracts"},"Solidity contracts"),"\nand ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/appliedzkp/zk-kit"},"JavaScript libraries")," (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"@zk-kit/identity")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@zk-kit/protocols"),") to make\nthe steps for offchain proof creation and onchain verification simpler."),(0,i.kt)("p",null,"A code audit and a multi-party computation to produce the zk-SNARK proving and verification keys\nfor Semaphore will begin in the near future."))}u.isMDXComponent=!0}}]);