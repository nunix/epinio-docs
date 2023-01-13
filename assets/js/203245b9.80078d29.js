"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[40269],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(h,o(o({ref:t},l),{},{components:r})):n.createElement(h,o({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},86848:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=r(83117),a=r(80102),i=(r(67294),r(3905)),o=["components"],s={sidebar_label:"Services",title:""},p="Services",c={unversionedId:"references/services",id:"version-1.5.0/references/services",title:"",description:"Most real world applications work together with other services to store data, logs, to exchange messages with other systems etc.",source:"@site/versioned_docs/version-1.5.0/references/services.md",sourceDirName:"references",slug:"/references/services",permalink:"/1.5.0/references/services",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.5.0/references/services.md",tags:[],version:"1.5.0",frontMatter:{sidebar_label:"Services",title:""},sidebar:"docs",previous:{title:"Application Manifests",permalink:"/1.5.0/references/manifests"},next:{title:"CLI Settings",permalink:"/1.5.0/references/settings"}},l={},u=[{value:"How does it work?",id:"how-does-it-work",level:2},{value:"Provision a database",id:"provision-a-database",level:2}],d={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"services"},"Services"),(0,i.kt)("p",null,"Most real world applications work together with other services to store data, logs, to exchange messages with other systems etc.\nThe most common example is probably a database. There are at least 2 ways to connect an Epinio application to a Service.\nThe first way is to provision the service manually and ",(0,i.kt)("a",{parentName:"p",href:"/1.5.0/references/configurations"},"create an Epinio Configuration")," to define the Service connection details available to the application."),(0,i.kt)("p",null,"The second way lets Epinio provision the Service, and afterwards create a binding to your application with the ",(0,i.kt)("inlineCode",{parentName:"p"},"epinio service bind")," command. For additional information, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"/1.5.0/references/commands/cli/service/epinio_service"},"epinio service")," page."),(0,i.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,i.kt)("p",null,"Epinio is very flexible on how a service is provisioned. Many public cloud providers maintain their own operators (e.g. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-service-operator"},"Azure"),"). There are also projects like ",(0,i.kt)("a",{parentName:"p",href:"https://crossplane.io/"},"Crossplane")," that allow services provisioning for various public cloud providers. All these solutions work by creating custom resources on a cluster, and a controller will create the desired service.\nThis shared method allows Epinio to stay agnostic of the provisioning method. You only need to create a Helm chart with the needed resources and ",(0,i.kt)("a",{parentName:"p",href:"/1.5.0/howtos/create_custom_service"},"describe how to install the Service with Epinio"),'.\nThe same method can be used with "in-cluster" services (e.g. a MySQL database running on the same cluster as Epinio). Actually, the Epinio services available by default are based on off-the-shelf Helm charts from Bitnami and their names are suffixed with ',(0,i.kt)("inlineCode",{parentName:"p"},"-dev")," because in the provided default configuration they might not be suitable for production usage."),(0,i.kt)("h2",{id:"provision-a-database"},"Provision a database"),(0,i.kt)("p",null,"Here is an example on how to provision a database and make it available to some running application:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Push a sample app"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"$ epinio app push -n sample --container-image-url splatform/sample-app\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"[Optional]"," List catalog services"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"$ epinio service catalog\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Provision an in-cluster database"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"$ epinio service create mysql-dev mydb\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Wait until it\'s ready (status should be "deployed")'),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"$ epinio service show mydb\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Bind the database secrets to the application"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"$ epinio service bind mydb sample\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Check that the database secrets are available to the application"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"$ epinio app exec sample\n\n\ud83d\udea2  Executing a shell\nNamespace: workspace\nApplication: sample\ncnb@sample-7bc756989-tjvt9:/$ cat /configurations/workspace-mydb-mysql/\n...\ncnb@sample-7bc756989-tjvt9:/$ exit\n")))),(0,i.kt)("p",null,"At this point, it's up to the application to make use of that secret. The helm chart used for this example doesn't write the hostname of the database in the generated secret. That's because the Helm chart wasn't created specifically for Epinio. To figure out the hostname, you might need to ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/"},"know how Kubernetes DNS works"),"."),(0,i.kt)("p",null,"For the example above, the hostname is: ",(0,i.kt)("inlineCode",{parentName:"p"},"workspace-mydb-mysql.workspace.svc.cluster.local"),"."),(0,i.kt)("p",null,"When you are done with this example, you can delete all generated resources with the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ epinio service delete mydb\n$ epinio app delete sample\n")))}m.isMDXComponent=!0}}]);