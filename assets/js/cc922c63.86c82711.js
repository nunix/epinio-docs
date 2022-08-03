"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[379],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60635:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],c={sidebar_label:"Create a custom Service",sidebar_position:10,title:""},s="Create a custom service",l={unversionedId:"howtos/create_custom_service",id:"howtos/create_custom_service",title:"",description:"As described in the Service reference page, Epinio services are nothing but descriptions of Helm charts. An operator may add more services by simply creating a Custom Resource in the namespace where Epinio is installed.",source:"@site/docs/howtos/create_custom_service.md",sourceDirName:"howtos",slug:"/howtos/create_custom_service",permalink:"/next/howtos/create_custom_service",editUrl:"https://github.com/epinio/docs/docs/howtos/create_custom_service.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_label:"Create a custom Service",sidebar_position:10,title:""},sidebar:"docs",previous:{title:"Custom Routes",permalink:"/next/howtos/custom_routes"},next:{title:"Custom builders",permalink:"/next/howtos/custom_builder"}},p={},u=[{value:"Adding an Image to the service",id:"adding-an-image-to-the-service",level:2},{value:"Multiple Secret types",id:"multiple-secret-types",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-a-custom-service"},"Create a custom service"),(0,a.kt)("p",null,"As described ",(0,a.kt)("a",{parentName:"p",href:"/next/references/services"},"in the Service reference page"),", Epinio services are nothing but descriptions of Helm charts. An operator may add more services by simply creating a Custom Resource in the namespace where Epinio is installed."),(0,a.kt)("p",null,"As a starting point, you can check the services installed by default for Epinio:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ kubectl get services.application.epinio.io -A\n")),(0,a.kt)("p",null,"If Epinio is installed in a namespace called ",(0,a.kt)("inlineCode",{parentName:"p"},"epinio"),", the following command outputs the Service definition in ",(0,a.kt)("inlineCode",{parentName:"p"},"yaml")," format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ kubectl get services.application.epinio.io -n epinio mysql-dev -o yaml > service.yaml\n")),(0,a.kt)("p",null,"or you can find the definition of the catalog services ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/epinio/helm-charts/blob/3a12bac7aee5ac36c6d43416f2e83ac10090c62a/chart/epinio/templates/service-catalog.yaml"},"here"),"."),(0,a.kt)("p",null,"Change the fields to point to the desired helm chart and apply the yaml with a command like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ kubeclt apply -f service.yaml\n")),(0,a.kt)("p",null,"If everything worked correctly, you can see your Service in the Epinio ",(0,a.kt)("inlineCode",{parentName:"p"},"service-catalog"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ epinio service catalog\n")),(0,a.kt)("h2",{id:"adding-an-image-to-the-service"},"Adding an Image to the service"),(0,a.kt)("p",null,"The various consumers of the API (e.g. the web UI of Epinio) can show an icon when\nlisting the various available services. If you want to assign an image to your\ncustom service, make sure you add the ",(0,a.kt)("inlineCode",{parentName:"p"},"serviceIcon")," field in the Custom Resource\nyaml."),(0,a.kt)("p",null,"Generally, helm charts have an icon field defined which already provides such an\nimage. You can find the icon field with the ",(0,a.kt)("inlineCode",{parentName:"p"},"helm show")," command. E.g. for the\nbitnami rabbitmq helm chart:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"helm show chart https://charts.bitnami.com/bitnami/rabbitmq-9.0.5.tgz | yq .icon\n")),(0,a.kt)("h2",{id:"multiple-secret-types"},"Multiple Secret types"),(0,a.kt)("p",null,"By default Epinio will look for Opaque secret types to label them as Configurations.",(0,a.kt)("br",{parentName:"p"}),"\n","Sometimes this is not enough, so you can define different types with the ",(0,a.kt)("inlineCode",{parentName:"p"},"application.epinio.io/catalog-service-secret-types")," annotation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: application.epinio.io/v1\nkind: Service\nmetadata:\n  name: myservice\n  namespace: epinio\n  annotations:\n    application.epinio.io/catalog-service-secret-types: Opaque,BasicAuth,connection.crossplane.io/v1alpha1\n    ...\n")),(0,a.kt)("p",null,"With this definition, Epinio will get all the ",(0,a.kt)("inlineCode",{parentName:"p"},"Opaque"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"BasicAuth"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"connection.crossplane.io/v1alpha1")," secrets generated during the creation of this Service (any type of secret can be listed)."))}d.isMDXComponent=!0}}]);