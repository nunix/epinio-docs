"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[71033],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),f=l(n),m=r,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||o;return n?i.createElement(d,p(p({ref:t},c),{},{components:n})):i.createElement(d,p({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,p[1]=a;for(var l=2;l<o;l++)p[l]=n[l];return i.createElement.apply(null,p)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},89927:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var i=n(83117),r=n(80102),o=(n(67294),n(3905)),p=["components"],a={title:"",sidebar_label:"epinio app list"},s=void 0,l={unversionedId:"references/commands/cli/app/epinio_app_list",id:"version-1.2.0/references/commands/cli/app/epinio_app_list",title:"",description:"epinio app list",source:"@site/versioned_docs/version-1.2.0/references/commands/cli/app/epinio_app_list.md",sourceDirName:"references/commands/cli/app",slug:"/references/commands/cli/app/epinio_app_list",permalink:"/1.2.0/references/commands/cli/app/epinio_app_list",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.2.0/references/commands/cli/app/epinio_app_list.md",tags:[],version:"1.2.0",frontMatter:{title:"",sidebar_label:"epinio app list"},sidebar:"docs",previous:{title:"epinio app export",permalink:"/1.2.0/references/commands/cli/app/epinio_app_export"},next:{title:"epinio app logs",permalink:"/1.2.0/references/commands/cli/app/epinio_app_logs"}},c={},u=[{value:"epinio app list",id:"epinio-app-list",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],f={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"epinio-app-list"},"epinio app list"),(0,o.kt)("p",null,"Lists applications"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Lists applications in the targeted namespace, or all"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"epinio app list [--all] [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --all    list all applications\n  -h, --help   help for list\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -c, --kubeconfig string        (KUBECONFIG) path to a kubeconfig, not required in-cluster\n      --no-colors                Suppress colorized output\n      --settings-file string     (EPINIO_SETTINGS) set path of settings file (default "~/.config/epinio/settings.yaml")\n      --skip-ssl-verification    (SKIP_SSL_VERIFICATION) Skip the verification of TLS certificates\n      --timeout-multiplier int   (EPINIO_TIMEOUT_MULTIPLIER) Multiply timeouts by this factor (default 1)\n      --trace-level int          (TRACE_LEVEL) Only print trace messages at or above this level (0 to 255, default 0, print nothing)\n      --verbosity int            (VERBOSITY) Only print progress messages at or above this level (0 or 1, default 0)\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/1.2.0/references/commands/cli/app/epinio_app"},"epinio app"),"\t - Epinio application features")))}m.isMDXComponent=!0}}]);