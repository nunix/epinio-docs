"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[20164],{3905:function(e,n,i){i.d(n,{Zo:function(){return s},kt:function(){return f}});var t=i(67294);function r(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function o(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function a(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?o(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function c(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var p=t.createContext({}),l=function(e){var n=t.useContext(p),i=n;return e&&(i="function"==typeof e?e(n):a(a({},n),e)),i},s=function(e){var n=l(e.components);return t.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var i=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(i),f=r,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||o;return i?t.createElement(d,a(a({ref:n},s),{},{components:i})):t.createElement(d,a({ref:n},s))}));function f(e,n){var i=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=u;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=i[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,i)}u.displayName="MDXCreateElement"},21825:function(e,n,i){i.r(n),i.d(n,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return m}});var t=i(83117),r=i(80102),o=(i(67294),i(3905)),a=["components"],c={title:"",sidebar_label:"epinio cli"},p=void 0,l={unversionedId:"references/commands/cli/epinio",id:"version-1.1.0/references/commands/cli/epinio",title:"",description:"epinio",source:"@site/versioned_docs/version-1.1.0/references/commands/cli/epinio.md",sourceDirName:"references/commands/cli",slug:"/references/commands/cli/epinio",permalink:"/references/commands/cli/epinio",draft:!1,editUrl:"https://github.com/epinio/docs/versioned_docs/version-1.1.0/references/commands/cli/epinio.md",tags:[],version:"1.1.0",frontMatter:{title:"",sidebar_label:"epinio cli"},sidebar:"docs",previous:{title:"epinio configuration update",permalink:"/references/commands/cli/configuration/epinio_configuration_update"},next:{title:"epinio completion",permalink:"/references/commands/cli/epinio_completion"}},s={},m=[{value:"epinio",id:"epinio",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}],u={toc:m};function f(e){var n=e.components,i=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"epinio"},"epinio"),(0,o.kt)("p",null,"Epinio cli"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"epinio cli is the official command line interface for Epinio PaaS "),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -h, --help                     help for epinio\n  -c, --kubeconfig string        (KUBECONFIG) path to a kubeconfig, not required in-cluster\n      --no-colors                Suppress colorized output\n      --settings-file string     (EPINIO_SETTINGS) set path of settings file (default "~/.config/epinio/settings.yaml")\n      --skip-ssl-verification    (SKIP_SSL_VERIFICATION) Skip the verification of TLS certificates\n      --timeout-multiplier int   (EPINIO_TIMEOUT_MULTIPLIER) Multiply timeouts by this factor (default 1)\n      --trace-level int          (TRACE_LEVEL) Only print trace messages at or above this level (0 to 255, default 0, print nothing)\n      --verbosity int            (VERBOSITY) Only print progress messages at or above this level (0 or 1, default 0)\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/references/commands/cli/app/epinio_app"},"epinio app"),"\t - Epinio application features"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/references/commands/cli/epinio_completion"},"epinio completion"),"\t - Generate completion script for a shell"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/references/commands/cli/configuration/epinio_configuration"},"epinio configuration"),"\t - Epinio configuration features"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/references/commands/cli/epinio_info"},"epinio info"),"\t - Shows information about the Epinio environment"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/references/commands/cli/epinio_login"},"epinio login"),"\t - Epinio login to the server"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/references/commands/cli/namespace/epinio_namespace"},"epinio namespace"),"\t - Epinio-controlled namespaces"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/references/commands/cli/epinio_push"},"epinio push"),"\t - Push an application declared in the specified manifest"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/references/commands/cli/epinio_server"},"epinio server"),"\t - Starts the Epinio server."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/references/commands/cli/service/epinio_service"},"epinio service"),"\t - Epinio service management"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/references/commands/cli/settings/epinio_settings"},"epinio settings"),"\t - Epinio settings management"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/references/commands/cli/epinio_target"},"epinio target"),"\t - Targets an epinio-controlled namespace."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/references/commands/cli/epinio_version"},"epinio version"),"\t - Print the version number")))}f.isMDXComponent=!0}}]);