"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[7622],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),u=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return i.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},b=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),b=u(t),d=r,k=b["".concat(s,".").concat(d)]||b[d]||p[d]||o;return t?i.createElement(k,l(l({ref:n},c),{},{components:t})):i.createElement(k,l({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=b;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var u=2;u<o;u++)l[u]=t[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}b.displayName="MDXCreateElement"},78721:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var i=t(87462),r=t(63366),o=(t(67294),t(3905)),l=["components"],a={sidebar_label:"Install Epinio on Minikube (local)",sidebar_position:17,title:""},s="Creating a Minikube Kubernetes Cluster",u={unversionedId:"howtos/install_epinio_on_minikube",id:"version-1.0.0/howtos/install_epinio_on_minikube",title:"",description:"This how-to was written using the following versions:",source:"@site/versioned_docs/version-1.0.0/howtos/install_epinio_on_minikube.md",sourceDirName:"howtos",slug:"/howtos/install_epinio_on_minikube",permalink:"/howtos/install_epinio_on_minikube",editUrl:"https://github.com/epinio/docs/versioned_docs/version-1.0.0/howtos/install_epinio_on_minikube.md",tags:[],version:"1.0.0",sidebarPosition:17,frontMatter:{sidebar_label:"Install Epinio on Minikube (local)",sidebar_position:17,title:""},sidebar:"docs",previous:{title:"Install Epinio on k3d (local)",permalink:"/howtos/install_epinio_on_k3d"},next:{title:"Install Epinio on Public Clouds",permalink:"/howtos/install_epinio_on_public_cloud"}},c={},p=[{value:"Get Minikube Kubernetes Cluster",id:"get-minikube-kubernetes-cluster",level:2},{value:"Install Minikube",id:"install-minikube",level:3},{value:"Create a Minikube kubernetes cluster",id:"create-a-minikube-kubernetes-cluster",level:3},{value:"Install Epinio on the Cluster",id:"install-epinio-on-the-cluster",level:3}],b={toc:p};function d(e){var n=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creating-a-minikube-kubernetes-cluster"},"Creating a Minikube Kubernetes Cluster"),(0,o.kt)("p",null,"This how-to was written using the following versions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/epinio/helm-charts/releases/tag/epinio-0.7.1"},"epinio helm chart 0.7.1")),(0,o.kt)("li",{parentName:"ul"},"minikube version v1.25.2")),(0,o.kt)("h2",{id:"get-minikube-kubernetes-cluster"},"Get Minikube Kubernetes Cluster"),(0,o.kt)("h3",{id:"install-minikube"},"Install Minikube"),(0,o.kt)("p",null,"Follow the ",(0,o.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"instructions")," to install Minikube on your system."),(0,o.kt)("h3",{id:"create-a-minikube-kubernetes-cluster"},"Create a Minikube kubernetes cluster"),(0,o.kt)("p",null,"Epinio installation was tested on Minikube with the following drivers: docker, kvm, virtualbox."),(0,o.kt)("p",null,"Specify the driver you want to use with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--driver")," option."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ minikube start --driver=docker\n")),(0,o.kt)("p",null,"Once the cluster is ready, you need to install the metallb addon:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ minikube addons enable metallb\n")),(0,o.kt)("p",null,"Then, you have to configure metallb by giving it an IP address range.",(0,o.kt)("br",null),"\nFor instance check your minikube IP with ",(0,o.kt)("inlineCode",{parentName:"p"},"minikube ip")," and choose how many IP addresses you need."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ minikube ip\n192.168.49.2\n")),(0,o.kt)("p",null,"As an example, we choose the range ",(0,o.kt)("inlineCode",{parentName:"p"},"192.168.49.100-192.168.49.120"),".",(0,o.kt)("br",null),"\nConfigure the addon with those values."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ minikube addons configure metallb\n-- Enter Load Balancer Start IP: 192.168.49.100\n-- Enter Load Balancer End IP: 192.168.49.120\n     Using image metallb/speaker:v0.9.6\n     Using image metallb/controller:v0.9.6\n  metallb was successfully configured\n")),(0,o.kt)("p",null,"Now you can install Epinio on the Cluster."),(0,o.kt)("h3",{id:"install-epinio-on-the-cluster"},"Install Epinio on the Cluster"),(0,o.kt)("p",null,"With Minikube, you'll need to deploy Traefik and cert-manager.\nAll is explained in the ",(0,o.kt)("a",{parentName:"p",href:"/installation/install_epinio"},"Epinio installation process"),"."))}d.isMDXComponent=!0}}]);