"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[17860],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},p=Object.keys(e);for(i=0;i<p.length;i++)n=p[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(i=0;i<p.length;i++)n=p[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||p;return n?i.createElement(d,r(r({ref:t},s),{},{components:n})):i.createElement(d,r({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,r=new Array(p);r[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var c=2;c<p;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},53318:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return m}});var i=n(83117),a=n(80102),p=(n(67294),n(3905)),r=["components"],o={title:"",sidebar_label:"epinio app"},l=void 0,c={unversionedId:"references/commands/cli/app/epinio_app",id:"version-1.2.0/references/commands/cli/app/epinio_app",title:"",description:"epinio app",source:"@site/versioned_docs/version-1.2.0/references/commands/cli/app/epinio_app.md",sourceDirName:"references/commands/cli/app",slug:"/references/commands/cli/app/epinio_app",permalink:"/1.2.0/references/commands/cli/app/epinio_app",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.2.0/references/commands/cli/app/epinio_app.md",tags:[],version:"1.2.0",frontMatter:{title:"",sidebar_label:"epinio app"},sidebar:"docs",previous:{title:"epinio app env unset",permalink:"/1.2.0/references/commands/cli/app/env/epinio_app_env_unset"},next:{title:"epinio app create",permalink:"/1.2.0/references/commands/cli/app/epinio_app_create"}},s={},m=[{value:"epinio app",id:"epinio-app",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],u={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,r);return(0,p.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"epinio-app"},"epinio app"),(0,p.kt)("p",null,"Epinio application features"),(0,p.kt)("h3",{id:"synopsis"},"Synopsis"),(0,p.kt)("p",null,"Manage epinio application"),(0,p.kt)("h3",{id:"options"},"Options"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"  -h, --help   help for app\n")),(0,p.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'  -c, --kubeconfig string        (KUBECONFIG) path to a kubeconfig, not required in-cluster\n      --no-colors                Suppress colorized output\n      --settings-file string     (EPINIO_SETTINGS) set path of settings file (default "~/.config/epinio/settings.yaml")\n      --skip-ssl-verification    (SKIP_SSL_VERIFICATION) Skip the verification of TLS certificates\n      --timeout-multiplier int   (EPINIO_TIMEOUT_MULTIPLIER) Multiply timeouts by this factor (default 1)\n      --trace-level int          (TRACE_LEVEL) Only print trace messages at or above this level (0 to 255, default 0, print nothing)\n      --verbosity int            (VERBOSITY) Only print progress messages at or above this level (0 or 1, default 0)\n')),(0,p.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/1.2.0/references/commands/cli/epinio"},"epinio"),"\t - Epinio cli"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/1.2.0/references/commands/cli/app/chart/epinio_app_chart"},"epinio app chart"),"\t - Epinio application chart management"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/1.2.0/references/commands/cli/app/epinio_app_create"},"epinio app create"),"\t - Create just the app, without creating a workload"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/1.2.0/references/commands/cli/app/epinio_app_delete"},"epinio app delete"),"\t - Deletes an application"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/1.2.0/references/commands/cli/app/env/epinio_app_env"},"epinio app env"),"\t - Epinio application configuration"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/1.2.0/references/commands/cli/app/epinio_app_exec"},"epinio app exec"),"\t - creates a shell to the application"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/1.2.0/references/commands/cli/app/epinio_app_export"},"epinio app export"),"\t - Export the named application into the directory"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/1.2.0/references/commands/cli/app/epinio_app_list"},"epinio app list"),"\t - Lists applications"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/1.2.0/references/commands/cli/app/epinio_app_logs"},"epinio app logs"),"\t - Streams the logs of the application"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/1.2.0/references/commands/cli/app/epinio_app_manifest"},"epinio app manifest"),"\t - Save state of the named application as a manifest"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/1.2.0/references/commands/cli/app/epinio_app_port-forward"},"epinio app port-forward"),"\t - forward one or more local ports to a pod"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/1.2.0/references/commands/cli/epinio_push"},"epinio app push"),"\t - Push an application declared in the specified manifest"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/1.2.0/references/commands/cli/app/epinio_app_restage"},"epinio app restage"),"\t - Restage the application"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/1.2.0/references/commands/cli/app/epinio_app_restart"},"epinio app restart"),"\t - Restart the application"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/1.2.0/references/commands/cli/app/epinio_app_show"},"epinio app show"),"\t - Describe the named application"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/1.2.0/references/commands/cli/app/epinio_app_update"},"epinio app update"),"\t - Update the named application")))}f.isMDXComponent=!0}}]);