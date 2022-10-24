"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[10709],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return t?i.createElement(h,o(o({ref:n},c),{},{components:t})):i.createElement(h,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},19224:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var i=t(83117),a=t(80102),r=(t(67294),t(3905)),o=["components"],l={sidebar_label:"Install Epinio CLI",sidebar_position:2,title:""},s="Installation of the Epinio CLI",p={unversionedId:"installation/install_epinio_cli",id:"version-1.4.0/installation/install_epinio_cli",title:"",description:"The epinio cli can be used to interact with a cluster that has Epinio installed on it.",source:"@site/versioned_docs/version-1.4.0/installation/install_epinio_cli.md",sourceDirName:"installation",slug:"/installation/install_epinio_cli",permalink:"/installation/install_epinio_cli",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.4.0/installation/install_epinio_cli.md",tags:[],version:"1.4.0",sidebarPosition:2,frontMatter:{sidebar_label:"Install Epinio CLI",sidebar_position:2,title:""},sidebar:"docs",previous:{title:"Install Epinio",permalink:"/installation/install_epinio"},next:{title:"DNS setup",permalink:"/installation/dns_setup"}},c={},u=[{value:"From Homebrew (Linux and Mac)",id:"from-homebrew-linux-and-mac",level:2},{value:"From the Binary Releases",id:"from-the-binary-releases",level:2},{value:"Linux",id:"linux",level:3},{value:"MacOS",id:"macos",level:3},{value:"Windows",id:"windows",level:3},{value:"Make the Binary Executable (Linux and Mac)",id:"make-the-binary-executable-linux-and-mac",level:3}],d={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation-of-the-epinio-cli"},"Installation of the Epinio CLI"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"epinio")," cli can be used to interact with a cluster that has Epinio installed on it.\nApplication developers shouldn't need to access the cluster directly. Requests to\nthe Epinio API server are authenticated with Basic Auth. No direct access to the cluster\nis required (e.g. through kubectl)."),(0,r.kt)("h2",{id:"from-homebrew-linux-and-mac"},"From Homebrew (Linux and Mac)"),(0,r.kt)("p",null,"Epinio has its own formula available in the homebrew/core tap."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install epinio\n")),(0,r.kt)("p",null,"Alternatively, if you want to get the latest Epinio CLI faster, there is a custom tap you can use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew tap epinio/tap\nbrew install epinio/tap/epinio\n")),(0,r.kt)("h2",{id:"from-the-binary-releases"},"From the Binary Releases"),(0,r.kt)("p",null,"Find the latest version at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/epinio/epinio/releases"},"Releases"),"."),(0,r.kt)("h3",{id:"linux"},"Linux"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o epinio -L https://github.com/epinio/epinio/releases/download/v1.4.0/epinio-linux-x86_64\n")),(0,r.kt)("h3",{id:"macos"},"MacOS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o epinio -L https://github.com/epinio/epinio/releases/download/v1.4.0/epinio-darwin-x86_64\n")),(0,r.kt)("h3",{id:"windows"},"Windows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," curl -LO https://github.com/epinio/epinio/releases/download/v1.4.0/epinio-windows-x86_64.zip\n")),(0,r.kt)("p",null,"Extract the zip archive and put the binary in a directory that is in your ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable. Instructions on how to add directories to the ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH")," vary depending on your version of Windows."),(0,r.kt)("h3",{id:"make-the-binary-executable-linux-and-mac"},"Make the Binary Executable (Linux and Mac)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chmod +x epinio\n")),(0,r.kt)("p",null,"Move the binary to your PATH"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mv ./epinio /usr/local/bin/epinio\n")),(0,r.kt)("h1",{id:"verify-the-installation"},"Verify the Installation"),(0,r.kt)("p",null,"Run e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"epinio version")," to test the successful installation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"> epinio version\nEpinio Version: v1.4.0\nGo Version: go1.18\n")))}m.isMDXComponent=!0}}]);