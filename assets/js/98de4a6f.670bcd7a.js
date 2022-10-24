"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[20866],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return f}});var i=r(67294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,i)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,i,t=function(e,n){if(null==e)return{};var r,i,t={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var a=i.createContext({}),l=function(e){var n=i.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},p=function(e){var n=l(e.components);return i.createElement(a.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=t,m=d["".concat(a,".").concat(f)]||d[f]||u[f]||o;return r?i.createElement(m,c(c({ref:n},p),{},{components:r})):i.createElement(m,c({ref:n},p))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,c=new Array(o);c[0]=d;var s={};for(var a in n)hasOwnProperty.call(n,a)&&(s[a]=n[a]);s.originalType=e,s.mdxType="string"==typeof e?e:t,c[1]=s;for(var l=2;l<o;l++)c[l]=r[l];return i.createElement.apply(null,c)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},65289:function(e,n,r){r.r(n),r.d(n,{assets:function(){return p},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var i=r(83117),t=r(80102),o=(r(67294),r(3905)),c=["components"],s={title:"",sidebar_label:"epinio service unbind"},a=void 0,l={unversionedId:"references/commands/cli/service/epinio_service_unbind",id:"version-1.4.0/references/commands/cli/service/epinio_service_unbind",title:"",description:"epinio service unbind",source:"@site/versioned_docs/version-1.4.0/references/commands/cli/service/epinio_service_unbind.md",sourceDirName:"references/commands/cli/service",slug:"/references/commands/cli/service/epinio_service_unbind",permalink:"/references/commands/cli/service/epinio_service_unbind",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.4.0/references/commands/cli/service/epinio_service_unbind.md",tags:[],version:"1.4.0",frontMatter:{title:"",sidebar_label:"epinio service unbind"},sidebar:"docs",previous:{title:"epinio service show",permalink:"/references/commands/cli/service/epinio_service_show"},next:{title:"epinio settings",permalink:"/references/commands/cli/settings/epinio_settings"}},p={},u=[{value:"epinio service unbind",id:"epinio-service-unbind",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],d={toc:u};function f(e){var n=e.components,r=(0,t.Z)(e,c);return(0,o.kt)("wrapper",(0,i.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"epinio-service-unbind"},"epinio service unbind"),(0,o.kt)("p",null,"Unbinds a service SERVICENAME from an Epinio app APPNAME"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"epinio service unbind SERVICENAME APPNAME [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help   help for unbind\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -c, --kubeconfig string        (KUBECONFIG) path to a kubeconfig, not required in-cluster\n      --no-colors                Suppress colorized output\n      --settings-file string     (EPINIO_SETTINGS) set path of settings file (default "~/.config/epinio/settings.yaml")\n      --skip-ssl-verification    (SKIP_SSL_VERIFICATION) Skip the verification of TLS certificates\n      --timeout-multiplier int   (EPINIO_TIMEOUT_MULTIPLIER) Multiply timeouts by this factor (default 1)\n      --trace-level int          (TRACE_LEVEL) Only print trace messages at or above this level (0 to 255, default 0, print nothing)\n      --verbosity int            (VERBOSITY) Only print progress messages at or above this level (0 or 1, default 0)\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/references/commands/cli/service/epinio_service"},"epinio service"),"\t - Epinio service management")))}f.isMDXComponent=!0}}]);