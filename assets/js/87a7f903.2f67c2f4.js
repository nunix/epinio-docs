"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[85878],{3905:function(e,n,i){i.d(n,{Zo:function(){return l},kt:function(){return m}});var t=i(67294);function o(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function r(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function a(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){o(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function c(e,n){if(null==e)return{};var i,t,o=function(e,n){if(null==e)return{};var i,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||(o[i]=e[i]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var u=t.createContext({}),p=function(e){var n=t.useContext(u),i=n;return e&&(i="function"==typeof e?e(n):a(a({},n),e)),i},l=function(e){var n=p(e.components);return t.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var i=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(i),m=o,d=s["".concat(u,".").concat(m)]||s[m]||f[m]||r;return i?t.createElement(d,a(a({ref:n},l),{},{components:i})):t.createElement(d,a({ref:n},l))}));function m(e,n){var i=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=i.length,a=new Array(r);a[0]=s;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<r;p++)a[p]=i[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,i)}s.displayName="MDXCreateElement"},63742:function(e,n,i){i.r(n),i.d(n,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return f}});var t=i(83117),o=i(80102),r=(i(67294),i(3905)),a=["components"],c={title:"",sidebar_label:"epinio configuration"},u=void 0,p={unversionedId:"references/commands/cli/configuration/epinio_configuration",id:"version-1.1.0/references/commands/cli/configuration/epinio_configuration",title:"",description:"epinio configuration",source:"@site/versioned_docs/version-1.1.0/references/commands/cli/configuration/epinio_configuration.md",sourceDirName:"references/commands/cli/configuration",slug:"/references/commands/cli/configuration/epinio_configuration",permalink:"/1.1.0/references/commands/cli/configuration/epinio_configuration",draft:!1,editUrl:"https://github.com/epinio/docs/versioned_docs/version-1.1.0/references/commands/cli/configuration/epinio_configuration.md",tags:[],version:"1.1.0",frontMatter:{title:"",sidebar_label:"epinio configuration"},sidebar:"docs",previous:{title:"epinio app update",permalink:"/1.1.0/references/commands/cli/app/epinio_app_update"},next:{title:"epinio configuration bind",permalink:"/1.1.0/references/commands/cli/configuration/epinio_configuration_bind"}},l={},f=[{value:"epinio configuration",id:"epinio-configuration",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],s={toc:f};function m(e){var n=e.components,i=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,t.Z)({},s,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"epinio-configuration"},"epinio configuration"),(0,r.kt)("p",null,"Epinio configuration features"),(0,r.kt)("h3",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Handle configuration features with Epinio"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"epinio configuration [flags]\n")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  -h, --help   help for configuration\n")),(0,r.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  -c, --kubeconfig string        (KUBECONFIG) path to a kubeconfig, not required in-cluster\n      --no-colors                Suppress colorized output\n      --settings-file string     (EPINIO_SETTINGS) set path of settings file (default "~/.config/epinio/settings.yaml")\n      --skip-ssl-verification    (SKIP_SSL_VERIFICATION) Skip the verification of TLS certificates\n      --timeout-multiplier int   (EPINIO_TIMEOUT_MULTIPLIER) Multiply timeouts by this factor (default 1)\n      --trace-level int          (TRACE_LEVEL) Only print trace messages at or above this level (0 to 255, default 0, print nothing)\n      --verbosity int            (VERBOSITY) Only print progress messages at or above this level (0 or 1, default 0)\n')),(0,r.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/1.1.0/references/commands/cli/epinio"},"epinio"),"\t - Epinio cli"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/1.1.0/references/commands/cli/configuration/epinio_configuration_bind"},"epinio configuration bind"),"\t - Bind a configuration to an application"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/1.1.0/references/commands/cli/configuration/epinio_configuration_create"},"epinio configuration create"),"\t - Create a configuration"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/1.1.0/references/commands/cli/configuration/epinio_configuration_delete"},"epinio configuration delete"),"\t - Delete a configuration"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/1.1.0/references/commands/cli/configuration/epinio_configuration_list"},"epinio configuration list"),"\t - Lists configurations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/1.1.0/references/commands/cli/configuration/epinio_configuration_show"},"epinio configuration show"),"\t - Configuration information"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/1.1.0/references/commands/cli/configuration/epinio_configuration_unbind"},"epinio configuration unbind"),"\t - Unbind configuration from an application"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/1.1.0/references/commands/cli/configuration/epinio_configuration_update"},"epinio configuration update"),"\t - Update a configuration")))}m.isMDXComponent=!0}}]);