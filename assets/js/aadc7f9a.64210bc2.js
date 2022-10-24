"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[87804],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=u(r),d=a,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},37068:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],s={sidebar_label:"Cert Manager",title:""},c="Cert Manager",u={unversionedId:"references/cert-manager",id:"version-1.1.0/references/cert-manager",title:"",description:"Purpose",source:"@site/versioned_docs/version-1.1.0/references/cert-manager.md",sourceDirName:"references",slug:"/references/cert-manager",permalink:"/1.1.0/references/cert-manager",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.1.0/references/cert-manager.md",tags:[],version:"1.1.0",frontMatter:{sidebar_label:"Cert Manager",title:""},sidebar:"docs",previous:{title:"Authorization",permalink:"/1.1.0/references/authorization"},next:{title:"Configurations",permalink:"/1.1.0/references/configurations"}},l={},p=[{value:"Purpose",id:"purpose",level:2},{value:"Installation",id:"installation",level:2},{value:"Version",id:"version",level:2}],f={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cert-manager"},"Cert Manager"),(0,o.kt)("h2",{id:"purpose"},"Purpose"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://cert-manager.io/"},"Cert Manager")," is a component watching for kubernetes\nCertificate resources and generating Secrets holding the requested certificate data. It\ncan be configured with a variety of issuers for fulfilling these requests. One such\nissuer is ",(0,o.kt)("a",{parentName:"p",href:"https://letsencrypt.org/"},"Let's Encrypt"),"."),(0,o.kt)("p",null,"Epinio uses it to generate the internal certificates used to secure the communication\nbetween its components, as well as for the certificates used to secure the application\nIngresses."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"The Cert Manager is a dependency of Epinio, and not installed by it.  In other words,\nEpinio expects to have a Cert Manager available to it on the cluster, when it is\ninstalled."),(0,o.kt)("h2",{id:"version"},"Version"),(0,o.kt)("p",null,"Epinio development uses Cert Manager version 1.8.2.  For details of this version see the\n",(0,o.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/installation/supported-releases/"},"releases"),"."))}d.isMDXComponent=!0}}]);