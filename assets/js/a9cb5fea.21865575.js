"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[84648],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88731:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),s=["components"],o={sidebar_label:"Certificate Issuers",title:""},l="Using a Certificate Issuer",c={unversionedId:"howtos/certificate_issuers",id:"version-0.7.1/howtos/certificate_issuers",title:"",description:"Epinio comes with multiple cert-manager cluster issuers for creating certificates:",source:"@site/versioned_docs/version-0.7.1/howtos/certificate_issuers.md",sourceDirName:"howtos",slug:"/howtos/certificate_issuers",permalink:"/0.7.1/howtos/certificate_issuers",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-0.7.1/howtos/certificate_issuers.md",tags:[],version:"0.7.1",frontMatter:{sidebar_label:"Certificate Issuers",title:""},sidebar:"docs",previous:{title:"",permalink:"/0.7.1/howtos/"},next:{title:"Debug application",permalink:"/0.7.1/howtos/debug"}},p={},u=[{value:"Choosing a Different Issuer",id:"choosing-a-different-issuer",level:2},{value:"Cluster Issuer for ACME DNS Challenge",id:"cluster-issuer-for-acme-dns-challenge",level:3},{value:"Cluster Issuer for Existing Private CA",id:"cluster-issuer-for-existing-private-ca",level:3},{value:"Create Secret With CA Cert and Key",id:"create-secret-with-ca-cert-and-key",level:4},{value:"Create ClusterIssuer",id:"create-clusterissuer",level:4},{value:"Install Epinio",id:"install-epinio",level:4},{value:"Background on Cert Manager and Issuers",id:"background-on-cert-manager-and-issuers",level:2},{value:"Epinio Push",id:"epinio-push",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-a-certificate-issuer"},"Using a Certificate Issuer"),(0,a.kt)("p",null,"Epinio comes with multiple ",(0,a.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/configuration/"},"cert-manager cluster issuers")," for creating certificates:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"epinio-ca (default)"),(0,a.kt)("li",{parentName:"ul"},"letsencrypt-production"),(0,a.kt)("li",{parentName:"ul"},"selfsigned-issuer")),(0,a.kt)("p",null,"The issuer will be used for both, the Epinio API endpoint and workloads (i.e. pushed applications)."),(0,a.kt)("h2",{id:"choosing-a-different-issuer"},"Choosing a Different Issuer"),(0,a.kt)("p",null,"When ",(0,a.kt)("a",{parentName:"p",href:"/0.7.1/installation/#install-epinio"},"installing Epinio with helm"),", you can choose between those issuers by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"global.tlsIssuer")," helm variable."),(0,a.kt)("p",null,"It's also possible to create a cert-manager cluster issuer in the cluster, before installing Epinio and referencing it by name when installing."),(0,a.kt)("h3",{id:"cluster-issuer-for-acme-dns-challenge"},"Cluster Issuer for ACME DNS Challenge"),(0,a.kt)("p",null,"For example to use Letsencrypt with a DNS challenge, which supports wildcards and private IPs, create this cluster issuer after installing cert-manager:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apiVersion: cert-manager.io/v1\nkind: ClusterIssuer\nmetadata:\n  name: dns-staging\nspec:\n  acme:\n    server: https://acme-staging-v02.api.letsencrypt.org/directory\n    privateKeySecretRef:\n      name: example-issuer-account-key\n    solvers:\n    - dns01:\n        cloudflare:\n          email: user@example.com\n          apiKeySecretRef:\n            name: cloudflare-apikey-secret\n            key: apikey\n      selector:\n        dnsNames:\n        - 'example.com'\n        - '*.example.com'\n")),(0,a.kt)("p",null,"Note: This uses the Letsencrypt staging endpoint for testing. More information in the ",(0,a.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/configuration/acme/dns01/"},"cert-manager ACME docs"),"."),(0,a.kt)("p",null,"You can then install Epinio with the ",(0,a.kt)("inlineCode",{parentName:"p"},"global.tlsIssuer")," pointing to the new cluster issuer:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"helm install epinio epinio/epinio --set global.tlsIssuer=dns-staging ...(other values here)\n")),(0,a.kt)("h3",{id:"cluster-issuer-for-existing-private-ca"},"Cluster Issuer for Existing Private CA"),(0,a.kt)("p",null,"According to the instructions from ",(0,a.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/configuration/ca/"},"https://cert-manager.io/docs/configuration/ca/"),", follow these steps:"),(0,a.kt)("h4",{id:"create-secret-with-ca-cert-and-key"},"Create Secret With CA Cert and Key"),(0,a.kt)("p",null,"If you don't already have a private CA, use a tool like openssl or easy-rsa to create it."),(0,a.kt)("p",null,"The following oneliner creates a CA:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'openssl req -x509 -newkey rsa:4096 -sha256 -days 3650 -nodes \\\n  -keyout example.key -out example.crt -subj "/CN=*.yourdomainhere.org"\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"IMPORTANT: make sure the ",(0,a.kt)("inlineCode",{parentName:"p"},"CN")," field matches the domain you are planning to use with Epinio")),(0,a.kt)("p",null,"Create a Kubernetes secret from the CA, in the cert-manager namespace."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl create secret -n cert-manager tls private-ca-secret \\\n  --cert=./example.crt --key=./example.key\n")),(0,a.kt)("p",null,"The cert-manager documentation has more details about this."),(0,a.kt)("h4",{id:"create-clusterissuer"},"Create ClusterIssuer"),(0,a.kt)("p",null,"Then create the cluster issuer:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apiVersion: cert-manager.io/v1\nkind: ClusterIssuer\nmetadata:\n  name: private-ca\nspec:\n  ca:\n    secretName: private-ca-secret\n")),(0,a.kt)("h4",{id:"install-epinio"},"Install Epinio"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"global.tlsIssuer")," variable to choose your cluster issuer:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"helm install --set global.tlsIssuer=private-ca epinio epinio/epinio --global.domain=epinio.yourdomainhere.org\n")),(0,a.kt)("h2",{id:"background-on-cert-manager-and-issuers"},"Background on Cert Manager and Issuers"),(0,a.kt)("p",null,"Cert manager watches for a ",(0,a.kt)("em",{parentName:"p"},"certificate")," resource and uses the referenced ",(0,a.kt)("em",{parentName:"p"},"cluster issuer")," to generate a certificate.\nThe certificate is stored in a ",(0,a.kt)("em",{parentName:"p"},"secret"),", in the namespace the certificate resources was created in.\nAn ",(0,a.kt)("em",{parentName:"p"},"ingress")," resource can then use that secret to set up TLS."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The Epinio installation creates a certificate resource in epinio namespace")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apiVersion: cert-manager.io/v1alpha2\nkind: Certificate\nmetadata:\n  name: epinio\n  namespace: epinio\nspec:\n  commonName: epinio.172.27.0.2.omg.howdoi.website\n  dnsNames:\n  - epinio.172.27.0.2.omg.howdoi.website\n  issuerRef:\n    kind: ClusterIssuer\n    name: epinio-ca\n  secretName: epinio-tls\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"cert-manager creates the 'epinio-tls' secret, using the referenced cluster issuer 'epinio-ca'")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'apiVersion: v1\nkind: Secret\ntype: kubernetes.io/tls\nmetadata:\n  annotations:\n    cert-manager.io/alt-names: epinio.172.27.0.2.omg.howdoi.website\n    cert-manager.io/certificate-name: epinio\n    cert-manager.io/common-name: epinio.172.27.0.2.omg.howdoi.website\n    cert-manager.io/ip-sans: ""\n    cert-manager.io/issuer-group: ""\n    cert-manager.io/issuer-kind: ClusterIssuer\n    cert-manager.io/issuer-name: epinio-ca\n    cert-manager.io/uri-sans: ""\n  name: epinio-tls\n  namespace: epinio\ndata:\n  ca.crt: ...\n  tls.crt: ...\n  tls.key: ...\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Epinio creates an ingress resource")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  annotations:\n    kubernetes.io/ingress.class: traefik\n    traefik.ingress.kubernetes.io/router.entrypoints: websecure\n    traefik.ingress.kubernetes.io/router.middlewares: epinio-epinio-api-auth@kubernetescrd\n    traefik.ingress.kubernetes.io/router.tls: "true"\n  labels:\n    app.kubernetes.io/name: epinio\n  name: epinio\n  namespace: epinio\nspec:\n  rules:\n  - host: epinio.172.27.0.2.omg.howdoi.website\n    http:\n      paths:\n      - backend:\n          service:\n            name: epinio-server\n            port:\n              number: 80\n        path: /\n        pathType: ImplementationSpecific\n  tls:\n  - hosts:\n    - epinio.172.27.0.2.omg.howdoi.website\n    secretName: epinio-tls\n')),(0,a.kt)("h2",{id:"epinio-push"},"Epinio Push"),(0,a.kt)("p",null,"The same is true for applications, ",(0,a.kt)("inlineCode",{parentName:"p"},"epinio push")," creates a ",(0,a.kt)("inlineCode",{parentName:"p"},"certificate")," in the app's workspace and cert-manager creates a secret for the app's ingress."))}d.isMDXComponent=!0}}]);