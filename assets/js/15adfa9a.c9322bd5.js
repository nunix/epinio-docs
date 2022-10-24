"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[80217],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),h=o,d=m["".concat(l,".").concat(h)]||m[h]||u[h]||i;return n?a.createElement(d,r(r({ref:t},c),{},{components:n})):a.createElement(d,r({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,r[1]=p;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54515:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var a=n(83117),o=n(80102),i=(n(67294),n(3905)),r=["components"],p={sidebar_label:"How To use custom application Helm charts",sidebar_position:13,title:""},l="Introduction",s={unversionedId:"howtos/using_custom_appcharts",id:"howtos/using_custom_appcharts",title:"",description:"Epinio deploys applications on Kubernetes as Helm charts.",source:"@site/docs/howtos/using_custom_appcharts.md",sourceDirName:"howtos",slug:"/howtos/using_custom_appcharts",permalink:"/next/howtos/using_custom_appcharts",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/docs/howtos/using_custom_appcharts.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_label:"How To use custom application Helm charts",sidebar_position:13,title:""},sidebar:"docs",previous:{title:"How To create custom application Helm charts",permalink:"/next/howtos/create_custom_appcharts"},next:{title:"Install Epinio on Rancher",permalink:"/next/howtos/install_epinio_on_rancher"}},c={},u=[],m={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Epinio deploys applications on Kubernetes as ",(0,i.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm charts"),"."),(0,i.kt)("p",null,"By default, a standard Helm chart is provided when Epinio is installed.\nHowever, operators may wish to ",(0,i.kt)("a",{parentName:"p",href:"/next/howtos/create_custom_appcharts"},"create and register custom charts")," specific to their environment."),(0,i.kt)("p",null,"Once the custom charts are registered in Epinio, the developers can use them when deploying their\napplications as described in this How-To."),(0,i.kt)("h1",{id:"listing-the-available-helm-charts"},"Listing the available Helm charts"),(0,i.kt)("p",null,"You can list the available Helm charts by running the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ epinio app chart list\n")),(0,i.kt)("p",null,"As an example, here is the output of an unmodified Epinio installation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"| DEFAULT |   NAME   |        DESCRIPTION         |\n|---------|----------|----------------------------|\n|         | standard | Epinio standard deployment |\n")),(0,i.kt)("p",null,"The output will only list the ",(0,i.kt)("inlineCode",{parentName:"p"}," standard")," Helm chart, which Epinio installs by default."),(0,i.kt)("h1",{id:"deploying-applications-with-a-custom-helm-chart"},"Deploying applications with a custom Helm chart"),(0,i.kt)("p",null,"Use the option ",(0,i.kt)("inlineCode",{parentName:"p"},"--app-chart")," to specify the name of the custom Helm chart to use when\ncreating, updating, or deploying an application."),(0,i.kt)("p",null,"For detailed information on the ",(0,i.kt)("inlineCode",{parentName:"p"},"--app-chart")," setting, see the following CLI commands pages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/references/commands/cli/app/epinio_app_create"},"epinio app create")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/references/commands/cli/app/epinio_app_update"},"epinio app update")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/references/commands/cli/epinio_push"},"epinio push"))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Changing the chart to use is ",(0,i.kt)("strong",{parentName:"p"},"not possible")," if the application has an\nactive workload."),(0,i.kt)("p",{parentName:"admonition"},"To switch a deployed application to a different Helm chart, you will have to\ndelete and re-deploy the application.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Scaling the application to zero instances is ",(0,i.kt)("strong",{parentName:"p"},"not sufficient"),". While that effectively\nstops the application it does not remove the deployed workload, just the underlying active\nelements.")),(0,i.kt)("h1",{id:"setting-a-default-helm-chart"},"Setting a default Helm chart"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"--app-chart")," option described in the previous section is more suitable for\nsingle or few deployments requiring a custom Helm chart."),(0,i.kt)("p",null,"However, if the majority of applications use a specific custom chart, for example ",(0,i.kt)("inlineCode",{parentName:"p"},"FOO"),", it makes more sense to\nchange the default chart."),(0,i.kt)("p",null,"You can set a custom chart as the default by running the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ epinio app chart default FOO\n")),(0,i.kt)("p",null,"Now, all future invocations of ",(0,i.kt)("inlineCode",{parentName:"p"},"epinio push")," will use the custom Helm chart set as default.\nYou will be able to override it with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--app-chart")," option, as described above."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," chart is a ",(0,i.kt)("strong",{parentName:"p"},"local")," setting. It affects only the developer who made\nthe change.\n:::"),(0,i.kt)("h1",{parentName:"admonition",id:"querying-the-default-helm-chart"},"Querying the default Helm chart"),(0,i.kt)("p",{parentName:"admonition"},"You can check which chart is set as ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," by running the following command:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"$ epinio app chart default\n")),(0,i.kt)("p",{parentName:"admonition"},"You can also check which chart is set as ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," when listing the available charts.\nAs an example, the output below shows the chart ",(0,i.kt)("inlineCode",{parentName:"p"},"FOO")," as the current default:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"| DEFAULT |   NAME   |        DESCRIPTION         |\n|---------|----------|----------------------------|\n| *       | FOO      | Foofy deployment           |\n|         | standard | Epinio standard deployment |\n")),(0,i.kt)("h1",{parentName:"admonition",id:"unsetting-the-default-helm-chart"},"Unsetting the default Helm chart"),(0,i.kt)("p",{parentName:"admonition"},"You can set the system chart ",(0,i.kt)("inlineCode",{parentName:"p"},"standard")," back as the default, by running the following command:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"$ epinio app chart default ''\n"))),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"empty string")," used in place of the chart name is mandatory. If you do not add it,\nthe command will only list the charts available.\n:::"))}h.isMDXComponent=!0}}]);