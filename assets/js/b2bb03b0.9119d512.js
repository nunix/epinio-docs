"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[66525],{3905:function(e,n,i){i.d(n,{Zo:function(){return s},kt:function(){return m}});var t=i(67294);function r(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function o(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function a(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?o(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function p(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=t.createContext({}),c=function(e){var n=t.useContext(l),i=n;return e&&(i="function"==typeof e?e(n):a(a({},n),e)),i},s=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var i=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=c(i),m=r,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||o;return i?t.createElement(d,a(a({ref:n},s),{},{components:i})):t.createElement(d,a({ref:n},s))}));function m(e,n){var i=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=f;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var c=2;c<o;c++)a[c]=i[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,i)}f.displayName="MDXCreateElement"},90743:function(e,n,i){i.r(n),i.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var t=i(83117),r=i(80102),o=(i(67294),i(3905)),a=["components"],p={title:"",sidebar_label:"epinio"},l=void 0,c={unversionedId:"references/cli/epinio",id:"version-1.0.0/references/cli/epinio",title:"",description:"epinio",source:"@site/versioned_docs/version-1.0.0/references/cli/epinio.md",sourceDirName:"references/cli",slug:"/references/cli/epinio",permalink:"/1.0.0/references/cli/epinio",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.0.0/references/cli/epinio.md",tags:[],version:"1.0.0",frontMatter:{title:"",sidebar_label:"epinio"},sidebar:"docs",previous:{title:"Authorization",permalink:"/1.0.0/references/authorization"},next:{title:"epinio app",permalink:"/1.0.0/references/cli/epinio_app"}},s={},u=[{value:"epinio",id:"epinio",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}],f={toc:u};function m(e){var n=e.components,i=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},f,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"epinio"},"epinio"),(0,o.kt)("p",null,"Epinio cli"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"epinio cli is the official command line interface for Epinio PaaS "),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -h, --help                     help for epinio\n  -c, --kubeconfig string        (KUBECONFIG) path to a kubeconfig, not required in-cluster\n      --no-colors                Suppress colorized output\n      --settings-file string     (EPINIO_SETTINGS) set path of settings file (default "~/.config/epinio/settings.yaml")\n      --skip-ssl-verification    (SKIP_SSL_VERIFICATION) Skip the verification of TLS certificates\n      --timeout-multiplier int   (EPINIO_TIMEOUT_MULTIPLIER) Multiply timeouts by this factor (default 1)\n      --trace-level int          (TRACE_LEVEL) Only print trace messages at or above this level (0 to 255, default 0, print nothing)\n      --verbosity int            (VERBOSITY) Only print progress messages at or above this level (0 or 1, default 0)\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/1.0.0/references/cli/epinio_app"},"epinio app"),"\t - Epinio application features"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/1.0.0/references/cli/epinio_completion"},"epinio completion"),"\t - Generate completion script for a shell"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/1.0.0/references/cli/epinio_configuration"},"epinio configuration"),"\t - Epinio configuration features"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/1.0.0/references/cli/epinio_info"},"epinio info"),"\t - Shows information about the Epinio environment"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/1.0.0/references/cli/epinio_login"},"epinio login"),"\t - Epinio login to the server"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/1.0.0/references/cli/epinio_namespace"},"epinio namespace"),"\t - Epinio-controlled namespaces"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/1.0.0/references/cli/epinio_push"},"epinio push"),"\t - Push an application declared in the specified manifest"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/1.0.0/references/cli/epinio_server"},"epinio server"),"\t - Starts the Epinio server."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/1.0.0/references/cli/epinio_service"},"epinio service"),"\t - Epinio service management"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/1.0.0/references/cli/epinio_settings"},"epinio settings"),"\t - Epinio settings management"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/1.0.0/references/cli/epinio_target"},"epinio target"),"\t - Targets an epinio-controlled namespace."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/1.0.0/references/cli/epinio_version"},"epinio version"),"\t - Print the version number")))}m.isMDXComponent=!0}}]);