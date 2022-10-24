"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[8205],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},37182:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=["components"],s={sidebar_label:"Supported Applications",title:""},l=void 0,u={unversionedId:"references/system_requirements",id:"version-0.9.0/references/system_requirements",title:"",description:"Kubernetes Cluster Requirements",source:"@site/versioned_docs/version-0.9.0/references/system_requirements.md",sourceDirName:"references",slug:"/references/system_requirements",permalink:"/0.9.0/references/system_requirements",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-0.9.0/references/system_requirements.md",tags:[],version:"0.9.0",frontMatter:{sidebar_label:"Supported Applications",title:""},sidebar:"docs",previous:{title:"",permalink:"/0.9.0/references/"},next:{title:"Windows",permalink:"/0.9.0/references/windows"}},p={},c=[{value:"Kubernetes Cluster Requirements",id:"kubernetes-cluster-requirements",level:2},{value:"Storage Class",id:"storage-class",level:3},{value:"Load Balancer",id:"load-balancer",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3}],m={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"kubernetes-cluster-requirements"},"Kubernetes Cluster Requirements"),(0,a.kt)("p",null,"For the Epinio server, and related deployments we recommend to consider the following resources:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"x86_64, ARM32, or ARM64 architecture"),(0,a.kt)("li",{parentName:"ul"},"Supported operating systems",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Linux",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"K3s, K3d"),(0,a.kt)("li",{parentName:"ul"},"minikube"))),(0,a.kt)("li",{parentName:"ul"},"Windows",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/0.9.0/howtos/install_epinio_on_rancher_desktop"},"Rancher Desktop")))),(0,a.kt)("li",{parentName:"ul"},"MacOS"))),(0,a.kt)("li",{parentName:"ul"},"Kubernetes versions 1.20 .. 1.23"),(0,a.kt)("li",{parentName:"ul"},"2-4 VCPUs"),(0,a.kt)("li",{parentName:"ul"},"8GB RAM (system memory + 4GB)"),(0,a.kt)("li",{parentName:"ul"},"10GB Disk space (system disk + 5GB)")),(0,a.kt)("p",null,"In addition, extensive requirements for your workload (apps) would add to that."),(0,a.kt)("h3",{id:"storage-class"},"Storage Class"),(0,a.kt)("p",null,"A default storage class (with annotation ",(0,a.kt)("inlineCode",{parentName:"p"},'storageclass.kubernetes.io/is-default-class: "true"'),") is needed."),(0,a.kt)("h3",{id:"load-balancer"},"Load Balancer"),(0,a.kt)("p",null,"Epinio (Traefik) requires a load-balancer. Depending on your target infrastructure, you can use embedded ones (like on Public Cloud, K3d, aso.) or configure your own.\nAlso see ",(0,a.kt)("a",{parentName:"p",href:"/0.9.0/howtos/provision_external_ip_for_local_kubernetes"},"Provision of External IP for LoadBalancer service type in Kubernetes")," for more information."),(0,a.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"While Kubernetes ",(0,a.kt)("strong",{parentName:"p"},"v1.22")," is supported there is an issue when the container runtime is ",(0,a.kt)("inlineCode",{parentName:"p"},"containerd > 1.5.6"),": the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/buildpacks/pack"},"pack cli")," is placing too much information into the\nimage layers (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paketo-buildpacks/full-builder/issues/415"},"relevant issue"),")."),(0,a.kt)("p",null,"This was fixed in version ",(0,a.kt)("strong",{parentName:"p"},"v1.5.8")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"containerd"),", and the updated runtime is available from Kubernetes ",(0,a.kt)("strong",{parentName:"p"},"v1.22.4")," onwward, so if you have a lower version please update."))}d.isMDXComponent=!0}}]);