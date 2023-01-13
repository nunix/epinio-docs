"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[62009],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return t?a.createElement(h,o(o({ref:n},u),{},{components:t})):a.createElement(h,o({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},76487:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var a=t(83117),i=t(80102),r=(t(67294),t(3905)),o=["components"],l={sidebar_label:"Install Epinio",title:""},s="Installation of Epinio",p={unversionedId:"installation/install_epinio",id:"version-0.9.0/installation/install_epinio",title:"",description:"Introduction",source:"@site/versioned_docs/version-0.9.0/installation/install_epinio.md",sourceDirName:"installation",slug:"/installation/install_epinio",permalink:"/0.9.0/installation/install_epinio",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-0.9.0/installation/install_epinio.md",tags:[],version:"0.9.0",frontMatter:{sidebar_label:"Install Epinio",title:""},sidebar:"docs",previous:{title:"Quick Start",permalink:"/0.9.0/tutorials/quickstart"},next:{title:"Install Epinio CLI",permalink:"/0.9.0/installation/install_epinio_cli"}},u={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Ingress Controller",id:"ingress-controller",level:3},{value:"Cert Manager",id:"cert-manager",level:3},{value:"Kubed",id:"kubed",level:3},{value:"S3 storage",id:"s3-storage",level:3},{value:"Container Registry",id:"container-registry",level:3},{value:"Install Epinio",id:"install-epinio",level:3},{value:"Installation on Specific Kubernetes Offerings",id:"installation-on-specific-kubernetes-offerings",level:2}],d={toc:c};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation-of-epinio"},"Installation of Epinio"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Epinio is installed from a single Helm chart and, by default, it also installs ",(0,r.kt)("a",{parentName:"p",href:"#kubed"},(0,r.kt)("inlineCode",{parentName:"a"},"Kubed")),", ",(0,r.kt)("a",{parentName:"p",href:"#s3-storage"},(0,r.kt)("inlineCode",{parentName:"a"},"MinIO")),"\nand a ",(0,r.kt)("a",{parentName:"p",href:"#container-registry"},"container registry")," in your Kubernetes cluster."),(0,r.kt)("p",null,"You can disable the installation of ",(0,r.kt)("inlineCode",{parentName:"p"},"Kubed"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"MinIO")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"container registry")," by changing the settings as described in the respective sections."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/0.9.0/references/system_requirements"},"system requirements")," for a detailed list of external components your\nKubernetes cluster needs to have before you install Epinio."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"IMPORTANT:")," Some of the namespaces of the components are hardcoded in the Epinio\ncode and thus are important to be the same as described here. In the future this\nmay be configurable on the Epinio Helm chart.")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("h3",{id:"ingress-controller"},"Ingress Controller"),(0,r.kt)("p",null,"Epinio creates Ingress resources for the API server, the applications and depending\non your setup, the internal container registry. Those resources won't work unless\nan Ingress controller is running on your cluster."),(0,r.kt)("p",null,"If you don't have an Ingress controller already running, you can install Traefik with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ kubectl create namespace traefik\n$ export LOAD_BALANCER_IP=$(LOAD_BALANCER_IP:-) # Set this to the IP of your load balancer if you know that\n$ helm install traefik --namespace traefik \"https://helm.traefik.io/traefik/traefik-10.3.4.tgz\" \\\n        --set globalArguments='' \\\n        --set-string ports.web.redirectTo=websecure \\\n        --set-string ingressClass.enabled=true \\\n        --set-string ingressClass.isDefaultClass=true \\\n        --set-string service.spec.loadBalancerIP=$LOAD_BALANCER_IP\n")),(0,r.kt)("p",null,"It's also possible to use Nginx instead of Traefik following the official ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/deploy/#quick-start"},"documentation"),"."),(0,r.kt)("p",null,"Do not forget to use the option ",(0,r.kt)("inlineCode",{parentName:"p"},"--set controller.setAsDefaultIngress=true")," when you install Nginx.",(0,r.kt)("br",null),"\nOtherwise, if you do not want defining Nginx as the default ingress, feel free to use ",(0,r.kt)("inlineCode",{parentName:"p"},"--set ingress.ingressClassName=nginx"),"when you deploy Epinio."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"WARNING"),": Sometimes, when Epinio uploads your app, you might see ",(0,r.kt)("inlineCode",{parentName:"p"},"error pushing app to server: can't upload archive: server status code: Request Entity Too Large"),".",(0,r.kt)("br",null),"\nIn this case, you need to increase the ",(0,r.kt)("inlineCode",{parentName:"p"},"max body size")," by adding an annotation to your ingress as described in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/ingress-nginx/blob/main/docs/user-guide/nginx-configuration/annotations.md#custom-max-body-size"},"nginx.ingress.kubernetes.io/proxy-body-size"))),(0,r.kt)("h3",{id:"cert-manager"},"Cert Manager"),(0,r.kt)("p",null,"Epinio needs ",(0,r.kt)("a",{parentName:"p",href:"https://cert-manager.io/"},"cert-manager"),' in order to create TLS\ncertificates for the various Ingresses (see "Ingress controller" above).'),(0,r.kt)("p",null,"If cert-manager is not already installed on the cluster, it can be installed like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ kubectl create namespace cert-manager\n$ helm repo add jetstack https://charts.jetstack.io\n$ helm repo update\n$ helm install cert-manager --namespace cert-manager jetstack/cert-manager \\\n        --set installCRDs=true \\\n        --set extraArgs[0]=--enable-certificate-owner-ref=true\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"WARNING"),": if cert-manager isn't installed in the namespace ",(0,r.kt)("inlineCode",{parentName:"p"},"cert-manager"),",\nyou have to set ",(0,r.kt)("inlineCode",{parentName:"p"},".Values.certManagerNamespace")," accordingly, otherwise Epinio installation will fail.")),(0,r.kt)("h3",{id:"kubed"},"Kubed"),(0,r.kt)("p",null,"Kubed is installed as a subchart when ",(0,r.kt)("inlineCode",{parentName:"p"},".Values.kubed.enabled"),' is true (default).\nIf you already have kubed running, you can skip the installation by setting\nthe helm value "kubed.enabled" to "false".'),(0,r.kt)("h3",{id:"s3-storage"},"S3 storage"),(0,r.kt)("p",null,"Epinio is using an S3 compatible storage to store the application source code.\nThis chart will install ",(0,r.kt)("a",{parentName:"p",href:"https://min.io/"},"Minio")," when ",(0,r.kt)("inlineCode",{parentName:"p"},".Values.minio.enabled")," is\ntrue (default). Any S3 compatible solution can be used instead by setting this\nvalue to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," and using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/epinio/helm-charts/blob/b389a4875af9f03b484a911c49a14f834ba04b64/chart/epinio/values.yaml#L44"},"the values under ",(0,r.kt)("inlineCode",{parentName:"a"},"s3")),"\nto point to the desired S3 server."),(0,r.kt)("h3",{id:"container-registry"},"Container Registry"),(0,r.kt)("p",null,"When Epinio builds a container image for an application from source, it needs\nto store that image to a container registry. Epinio installs a container registry\non the cluster when ",(0,r.kt)("inlineCode",{parentName:"p"},".Values.containerregistry.enabled")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," (default)."),(0,r.kt)("p",null,"Any container registry that supports basic auth authentication (e.g. gcr, dockerhub etc) can be used\ninstead, by setting this value to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," and using\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/epinio/helm-charts/blob/b389a4875af9f03b484a911c49a14f834ba04b64/chart/epinio/values.yaml#L107-L111"},"the relevant global values"),"\nto point to the desired container registry."),(0,r.kt)("h3",{id:"install-epinio"},"Install Epinio"),(0,r.kt)("p",null,"If the above dependencies are available or going to be installed by this chart,\nEpinio can be installed with the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ helm repo add epinio https://epinio.github.io/helm-charts\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ helm install epinio -n epinio --create-namespace epinio/epinio --values epinio-values.yaml --set global.domain=myepiniodomain.org\n")),(0,r.kt)("p",null,"The only value that is mandatory is the ",(0,r.kt)("inlineCode",{parentName:"p"},".Values.global.domain")," which\nshould be a wildcard domain, pointing to the IP address of your running\nIngress controller."),(0,r.kt)("p",null,"Read more on how to setup DNS here: ",(0,r.kt)("a",{parentName:"p",href:"/0.9.0/installation/dns_setup"},"DNS setup")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"NOTE"),': If you\'re deploying Epinio in a "localhost" environment, you can use a "',(0,r.kt)("a",{parentName:"p",href:"/0.9.0/installation/magicDNS_setup"},"magic domain name"),'".')),(0,r.kt)("h2",{id:"installation-on-specific-kubernetes-offerings"},"Installation on Specific Kubernetes Offerings"),(0,r.kt)("p",null,"Installing Epinio is a standard process as explained above, however you might need to configure it for a specific Kubernetes cluster."),(0,r.kt)("p",null,"To help you, see the following HowTos for various well-known Kubernetes clusters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/0.9.0/howtos/install_epinio_on_rancher"},"Install on Rancher")," - Install Epinio on Rancher"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/0.9.0/howtos/install_epinio_on_public_cloud"},"Install on Public Cloud")," - Install Epinio on Public Cloud cluster"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/0.9.0/howtos/install_epinio_on_rke"},"Install on RKE2")," - Install Epinio on Rancher RKE2 cluster"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/0.9.0/howtos/install_epinio_on_k3d"},"Install on K3d")," - Install Epinio on K3d cluster"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/0.9.0/howtos/install_epinio_on_k3s"},"Install on K3s")," - Install Epinio on K3s cluster"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/0.9.0/howtos/install_epinio_on_rancher_desktop"},"Install on Rancher Desktop")," - Install Epinio on Rancher Desktop"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/0.9.0/howtos/install_epinio_on_minikube"},"Install on Minikube")," - Install Epinio on Minikube cluster")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"NOTE"),": The Public Cloud howto lists the three major Cloud providers but Epinio can run on any Kubernetes cluster.")))}m.isMDXComponent=!0}}]);