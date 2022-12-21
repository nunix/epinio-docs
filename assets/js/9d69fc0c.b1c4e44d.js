"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[6684],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),u=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(a.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=u(n),k=r,d=h["".concat(a,".").concat(k)]||h[k]||c[k]||i;return n?o.createElement(d,s(s({ref:t},p),{},{components:n})):o.createElement(d,s({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=h;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var u=2;u<i;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},43923:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return a},default:function(){return k},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var o=n(83117),r=n(80102),i=(n(67294),n(3905)),s=["components"],l={sidebar_label:"Install Epinio on K3s (local)",sidebar_position:16,title:""},a="Creating a K3s Kubernetes Cluster",u={unversionedId:"howtos/install_epinio_on_k3s",id:"version-1.4.0/howtos/install_epinio_on_k3s",title:"",description:"This how-to was written using the following versions:",source:"@site/versioned_docs/version-1.4.0/howtos/install_epinio_on_k3s.md",sourceDirName:"howtos",slug:"/howtos/install_epinio_on_k3s",permalink:"/1.4.0/howtos/install_epinio_on_k3s",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.4.0/howtos/install_epinio_on_k3s.md",tags:[],version:"1.4.0",sidebarPosition:16,frontMatter:{sidebar_label:"Install Epinio on K3s (local)",sidebar_position:16,title:""},sidebar:"docs",previous:{title:"Install Epinio on RKE2 (Rancher)",permalink:"/1.4.0/howtos/install_epinio_on_rke"},next:{title:"Install Epinio on Rancher Desktop (local)",permalink:"/1.4.0/howtos/install_epinio_on_rancher_desktop"}},p={},c=[{value:"Get K3s Kubernetes Cluster",id:"get-k3s-kubernetes-cluster",level:2},{value:"Install K3s",id:"install-k3s",level:3},{value:"Install Epinio on the Cluster",id:"install-epinio-on-the-cluster",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"DNS Issues",id:"dns-issues",level:4},{value:"Traefik",id:"traefik",level:4}],h={toc:c};function k(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"creating-a-k3s-kubernetes-cluster"},"Creating a K3s Kubernetes Cluster"),(0,i.kt)("p",null,"This how-to was written using the following versions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/epinio/helm-charts/releases/tag/epinio-0.7.1"},"epinio helm chart 0.7.1")),(0,i.kt)("li",{parentName:"ul"},"k3s version v1.23.4+k3s1 and v1.22.7+k3s1 "),(0,i.kt)("li",{parentName:"ul"},"openSUSE Leap 15.3 and Tumbleweed")),(0,i.kt)("h2",{id:"get-k3s-kubernetes-cluster"},"Get K3s Kubernetes Cluster"),(0,i.kt)("h3",{id:"install-k3s"},"Install K3s"),(0,i.kt)("p",null,"Follow the ",(0,i.kt)("a",{parentName:"p",href:"https://k3s.io/"},"instructions")," to install K3s on your system."),(0,i.kt)("p",null,"The K3s versions used in this how-to are the ones mentioned just above, with all the options set by default."),(0,i.kt)("h3",{id:"install-epinio-on-the-cluster"},"Install Epinio on the Cluster"),(0,i.kt)("p",null,"Export the k3s cluster configration first:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export KUBECONFIG=/etc/rancher/k3s/k3s.yaml\n")),(0,i.kt)("p",null,"Follow ",(0,i.kt)("a",{parentName:"p",href:"../installation/magicDNS_setup"},'"magic" DNS setup')," to install Epinio in your test environment."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<IP>")," can be found by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ kubectl get svc -n kube-system traefik -o jsonpath="{.status.loadBalancer.ingress[0]}"\n')),(0,i.kt)("p",null,"Then, continue with the ",(0,i.kt)("a",{parentName:"p",href:"/1.4.0/installation/install_epinio"},"Epinio installation process"),"."),(0,i.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("h4",{id:"dns-issues"},"DNS Issues"),(0,i.kt)("p",null,"In case of trouble with DNS resolution, for example if you have something like this in your logs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"dial tcp: lookup epinio-registry.192.168.1.10.omg.howdoi.website on 10.43.0.10:53: no such host\n")),(0,i.kt)("p",null,"You can try to install K3s with one known-to-work DNS server:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl -sfL https://get.k3s.io | K3S_RESOLV_CONF=/etc/my-good-resolv.conf sh -\n")),(0,i.kt)("p",null,"With ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/my-good-resolv.conf")," containing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"nameserver 1.1.1.1\n")),(0,i.kt)("p",null,"This kind of issue could happen for example when you have multiple DNS servers and some of them are not able to resolve some domain names."),(0,i.kt)("h4",{id:"traefik"},"Traefik"),(0,i.kt)("p",null,"In case of trouble with Epinio's Traefik component or Ingress controllers, the ",(0,i.kt)("a",{parentName:"p",href:"/1.4.0/explanations/advanced#traefik"},"Traefik")," section in the\n",(0,i.kt)("a",{parentName:"p",href:"/1.4.0/explanations/advanced"},"Advanced Topics")," document shall be your friend."))}k.isMDXComponent=!0}}]);