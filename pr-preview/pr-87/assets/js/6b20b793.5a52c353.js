"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[84],{7331:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>$,contentTitle:()=>G,default:()=>O,frontMatter:()=>E,metadata:()=>t,toc:()=>I});const t=JSON.parse('{"id":"blueprint/Components/Avatar","title":"Avatar","description":"Let\'s discover Docusaurus in less than 5 minutes.","source":"@site/docs/blueprint/03-Components/02-Avatar.mdx","sourceDirName":"blueprint/03-Components","slug":"/blueprint/Components/Avatar","permalink":"/pr-preview/pr-87/docs/blueprint/Components/Avatar","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/blueprint/03-Components/02-Avatar.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{},"sidebar":"blueprintSidebar","previous":{"title":"Sidebar","permalink":"/pr-preview/pr-87/docs/blueprint/Shells/Sidebar"}}');var n=o(4848),s=o(1184),l=o(6540),a=o(2489),i=o(7227),c=o(4988),d=o(5635),u="Avatar",[p,f]=(0,a.c)(u),[b,m]=p(u),g=l.forwardRef(((e,r)=>{const{__scopeAvatar:o,...t}=e,[s,a]=l.useState("idle");return(0,n.jsx)(b,{scope:o,imageLoadingStatus:s,onImageLoadingStatusChange:a,children:(0,n.jsx)(d.P.span,{...t,ref:r})})}));g.displayName=u;var h="AvatarImage",v=l.forwardRef(((e,r)=>{const{__scopeAvatar:o,src:t,onLoadingStatusChange:s=()=>{},...a}=e,u=m(h,o),p=function(e,r){const[o,t]=l.useState("idle");return(0,c.u)((()=>{if(!e)return void t("error");let o=!0;const n=new window.Image,s=e=>()=>{o&&t(e)};return t("loading"),n.onload=s("loaded"),n.onerror=s("error"),n.src=e,r&&(n.referrerPolicy=r),()=>{o=!1}}),[e,r]),o}(t,a.referrerPolicy),f=(0,i.u)((e=>{s(e),u.onImageLoadingStatusChange(e)}));return(0,c.u)((()=>{"idle"!==p&&f(p)}),[p,f]),"loaded"===p?(0,n.jsx)(d.P.img,{...a,ref:r,src:t}):null}));v.displayName=h;var y="AvatarFallback",x=l.forwardRef(((e,r)=>{const{__scopeAvatar:o,delayMs:t,...s}=e,a=m(y,o),[i,c]=l.useState(void 0===t);return l.useEffect((()=>{if(void 0!==t){const e=window.setTimeout((()=>c(!0)),t);return()=>window.clearTimeout(e)}}),[t]),i&&"loaded"!==a.imageLoadingStatus?(0,n.jsx)(d.P.span,{...s,ref:r}):null}));x.displayName=y;var w=g,k=v,j=x,C=o(8936);const N=l.forwardRef(((e,r)=>{let{className:o,...t}=e;return(0,n.jsx)(w,{ref:r,className:(0,C.cn)("bp-relative bp-flex bp-h-10 bp-w-10 bp-shrink-0 bp-overflow-hidden bp-rounded-full",o),...t})}));N.displayName=w.displayName;const z=l.forwardRef(((e,r)=>{let{className:o,...t}=e;return(0,n.jsx)(k,{ref:r,className:(0,C.cn)("bp-aspect-square bp-h-full bp-w-full",o),...t})}));z.displayName=k.displayName;const P=l.forwardRef(((e,r)=>{let{className:o,...t}=e;return(0,n.jsx)(j,{ref:r,className:(0,C.cn)("bp-flex bp-h-full bp-w-full bp-items-center bp-justify-center bp-rounded-full bp-bg-muted",o),...t})}));P.displayName=j.displayName;const S=()=>{const e="ABCDEFGHIJKLMNOPQRSTUVWXYZ";return`${e[Math.floor(26*Math.random())]}${e[Math.floor(26*Math.random())]}`},M=()=>{const e=l.useMemo(S,[]);return(0,n.jsx)(N,{children:(0,n.jsx)(P,{children:e})})};A=M,R="blueprintavatar";var A,R;const E={},G="Avatar",$={},I=[{value:"Preview",id:"preview",level:2}];function _(e){const r={h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"avatar",children:"Avatar"})}),"\n",(0,n.jsxs)(r.p,{children:["Let's discover ",(0,n.jsx)(r.strong,{children:"Docusaurus in less than 5 minutes"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"preview",children:"Preview"}),"\n","\n",(0,n.jsx)(M,{})]})}function O(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(_,{...e})}):_(e)}},1184:(e,r,o)=>{o.d(r,{R:()=>l,x:()=>a});var t=o(6540);const n={},s=t.createContext(n);function l(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),t.createElement(s.Provider,{value:r},e.children)}},8936:(e,r,o)=>{o.d(r,{cn:()=>n});var t=o(5336);function n(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(0,t.t)((0,t.c)(r))}},5336:(e,r,o)=>{function t(e){var r,o,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var s=e.length;for(r=0;r<s;r++)e[r]&&(o=t(e[r]))&&(n&&(n+=" "),n+=o)}else for(o in e)e[o]&&(n&&(n+=" "),n+=o);return n}function n(){for(var e,r,o=0,n="",s=arguments.length;o<s;o++)(e=arguments[o])&&(r=t(e))&&(n&&(n+=" "),n+=r);return n}o.d(r,{c:()=>n,t:()=>K});const s=e=>{const r=c(e),{conflictingClassGroups:o,conflictingClassGroupModifiers:t}=e;return{getClassGroupId:e=>{const o=e.split("-");return""===o[0]&&1!==o.length&&o.shift(),l(o,r)||i(e)},getConflictingClassGroupIds:(e,r)=>{const n=o[e]||[];return r&&t[e]?[...n,...t[e]]:n}}},l=(e,r)=>{var o;if(0===e.length)return r.classGroupId;const t=e[0],n=r.nextPart.get(t),s=n?l(e.slice(1),n):void 0;if(s)return s;if(0===r.validators.length)return;const a=e.join("-");return null==(o=r.validators.find((e=>{let{validator:r}=e;return r(a)})))?void 0:o.classGroupId},a=/^\[(.+)\]$/,i=e=>{if(a.test(e)){const r=a.exec(e)[1],o=null==r?void 0:r.substring(0,r.indexOf(":"));if(o)return"arbitrary.."+o}},c=e=>{const{theme:r,prefix:o}=e,t={nextPart:new Map,validators:[]};return f(Object.entries(e.classGroups),o).forEach((e=>{let[o,n]=e;d(n,t,o,r)})),t},d=(e,r,o,t)=>{e.forEach((e=>{if("string"!=typeof e){if("function"==typeof e)return p(e)?void d(e(t),r,o,t):void r.validators.push({validator:e,classGroupId:o});Object.entries(e).forEach((e=>{let[n,s]=e;d(s,u(r,n),o,t)}))}else{(""===e?r:u(r,e)).classGroupId=o}}))},u=(e,r)=>{let o=e;return r.split("-").forEach((e=>{o.nextPart.has(e)||o.nextPart.set(e,{nextPart:new Map,validators:[]}),o=o.nextPart.get(e)})),o},p=e=>e.isThemeGetter,f=(e,r)=>r?e.map((e=>{let[o,t]=e;return[o,t.map((e=>"string"==typeof e?r+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map((e=>{let[o,t]=e;return[r+o,t]}))):e))]})):e,b=e=>{if(e<1)return{get:()=>{},set:()=>{}};let r=0,o=new Map,t=new Map;const n=(n,s)=>{o.set(n,s),r++,r>e&&(r=0,t=o,o=new Map)};return{get(e){let r=o.get(e);return void 0!==r?r:void 0!==(r=t.get(e))?(n(e,r),r):void 0},set(e,r){o.has(e)?o.set(e,r):n(e,r)}}},m=e=>{const{separator:r,experimentalParseClassName:o}=e,t=1===r.length,n=r[0],s=r.length,l=e=>{const o=[];let l,a=0,i=0;for(let u=0;u<e.length;u++){let c=e[u];if(0===a){if(c===n&&(t||e.slice(u,u+s)===r)){o.push(e.slice(i,u)),i=u+s;continue}if("/"===c){l=u;continue}}"["===c?a++:"]"===c&&a--}const c=0===o.length?e:e.substring(i),d=c.startsWith("!");return{modifiers:o,hasImportantModifier:d,baseClassName:d?c.substring(1):c,maybePostfixModifierPosition:l&&l>i?l-i:void 0}};return o?e=>o({className:e,parseClassName:l}):l},g=e=>{if(e.length<=1)return e;const r=[];let o=[];return e.forEach((e=>{"["===e[0]?(r.push(...o.sort(),e),o=[]):o.push(e)})),r.push(...o.sort()),r},h=/\s+/;function v(){let e,r,o=0,t="";for(;o<arguments.length;)(e=arguments[o++])&&(r=y(e))&&(t&&(t+=" "),t+=r);return t}const y=e=>{if("string"==typeof e)return e;let r,o="";for(let t=0;t<e.length;t++)e[t]&&(r=y(e[t]))&&(o&&(o+=" "),o+=r);return o};function x(e){for(var r=arguments.length,o=new Array(r>1?r-1:0),t=1;t<r;t++)o[t-1]=arguments[t];let n,l,a,i=function(r){const t=o.reduce(((e,r)=>r(e)),e());return n=(e=>({cache:b(e.cacheSize),parseClassName:m(e),...s(e)}))(t),l=n.cache.get,a=n.cache.set,i=c,c(r)};function c(e){const r=l(e);if(r)return r;const o=((e,r)=>{const{parseClassName:o,getClassGroupId:t,getConflictingClassGroupIds:n}=r,s=[],l=e.trim().split(h);let a="";for(let i=l.length-1;i>=0;i-=1){const e=l[i],{modifiers:r,hasImportantModifier:c,baseClassName:d,maybePostfixModifierPosition:u}=o(e);let p=!!u,f=t(p?d.substring(0,u):d);if(!f){if(!p){a=e+(a.length>0?" "+a:a);continue}if(f=t(d),!f){a=e+(a.length>0?" "+a:a);continue}p=!1}const b=g(r).join(":"),m=c?b+"!":b,h=m+f;if(s.includes(h))continue;s.push(h);const v=n(f,p);for(let o=0;o<v.length;++o){const e=v[o];s.push(m+e)}a=e+(a.length>0?" "+a:a)}return a})(e,n);return a(e,o),o}return function(){return i(v.apply(null,arguments))}}const w=e=>{const r=r=>r[e]||[];return r.isThemeGetter=!0,r},k=/^\[(?:([a-z-]+):)?(.+)\]$/i,j=/^\d+\/\d+$/,C=new Set(["px","full","screen"]),N=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,z=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,P=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,S=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,M=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,A=e=>E(e)||C.has(e)||j.test(e),R=e=>B(e,"length",J),E=e=>!!e&&!Number.isNaN(Number(e)),G=e=>B(e,"number",E),$=e=>!!e&&Number.isInteger(Number(e)),I=e=>e.endsWith("%")&&E(e.slice(0,-1)),_=e=>k.test(e),O=e=>N.test(e),L=new Set(["length","size","percentage"]),W=e=>B(e,L,U),T=e=>B(e,"position",U),D=new Set(["image","url"]),V=e=>B(e,D,H),F=e=>B(e,"",Z),q=()=>!0,B=(e,r,o)=>{const t=k.exec(e);return!!t&&(t[1]?"string"==typeof r?t[1]===r:r.has(t[1]):o(t[2]))},J=e=>z.test(e)&&!P.test(e),U=()=>!1,Z=e=>S.test(e),H=e=>M.test(e),K=x((()=>{const e=w("colors"),r=w("spacing"),o=w("blur"),t=w("brightness"),n=w("borderColor"),s=w("borderRadius"),l=w("borderSpacing"),a=w("borderWidth"),i=w("contrast"),c=w("grayscale"),d=w("hueRotate"),u=w("invert"),p=w("gap"),f=w("gradientColorStops"),b=w("gradientColorStopPositions"),m=w("inset"),g=w("margin"),h=w("opacity"),v=w("padding"),y=w("saturate"),x=w("scale"),k=w("sepia"),j=w("skew"),C=w("space"),N=w("translate"),z=()=>["auto",_,r],P=()=>[_,r],S=()=>["",A,R],M=()=>["auto",E,_],L=()=>["","0",_],D=()=>[E,_];return{cacheSize:500,separator:":",theme:{colors:[q],spacing:[A,R],blur:["none","",O,_],brightness:D(),borderColor:[e],borderRadius:["none","","full",O,_],borderSpacing:P(),borderWidth:S(),contrast:D(),grayscale:L(),hueRotate:D(),invert:L(),gap:P(),gradientColorStops:[e],gradientColorStopPositions:[I,R],inset:z(),margin:z(),opacity:D(),padding:P(),saturate:D(),scale:D(),sepia:L(),skew:D(),space:P(),translate:P()},classGroups:{aspect:[{aspect:["auto","square","video",_]}],container:["container"],columns:[{columns:[O]}],"break-after":[{"break-after":["auto","avoid","all","avoid-page","page","left","right","column"]}],"break-before":[{"break-before":["auto","avoid","all","avoid-page","page","left","right","column"]}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top",_]}],overflow:[{overflow:["auto","hidden","clip","visible","scroll"]}],"overflow-x":[{"overflow-x":["auto","hidden","clip","visible","scroll"]}],"overflow-y":[{"overflow-y":["auto","hidden","clip","visible","scroll"]}],overscroll:[{overscroll:["auto","contain","none"]}],"overscroll-x":[{"overscroll-x":["auto","contain","none"]}],"overscroll-y":[{"overscroll-y":["auto","contain","none"]}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",$,_]}],basis:[{basis:z()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",_]}],grow:[{grow:L()}],shrink:[{shrink:L()}],order:[{order:["first","last","none",$,_]}],"grid-cols":[{"grid-cols":[q]}],"col-start-end":[{col:["auto",{span:["full",$,_]},_]}],"col-start":[{"col-start":M()}],"col-end":[{"col-end":M()}],"grid-rows":[{"grid-rows":[q]}],"row-start-end":[{row:["auto",{span:[$,_]},_]}],"row-start":[{"row-start":M()}],"row-end":[{"row-end":M()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",_]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",_]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal","start","end","center","between","around","evenly","stretch"]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal","start","end","center","between","around","evenly","stretch","baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":["start","end","center","between","around","evenly","stretch","baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[v]}],px:[{px:[v]}],py:[{py:[v]}],ps:[{ps:[v]}],pe:[{pe:[v]}],pt:[{pt:[v]}],pr:[{pr:[v]}],pb:[{pb:[v]}],pl:[{pl:[v]}],m:[{m:[g]}],mx:[{mx:[g]}],my:[{my:[g]}],ms:[{ms:[g]}],me:[{me:[g]}],mt:[{mt:[g]}],mr:[{mr:[g]}],mb:[{mb:[g]}],ml:[{ml:[g]}],"space-x":[{"space-x":[C]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[C]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",_,r]}],"min-w":[{"min-w":[_,r,"min","max","fit"]}],"max-w":[{"max-w":[_,r,"none","full","min","max","fit","prose",{screen:[O]},O]}],h:[{h:[_,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[_,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[_,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[_,r,"auto","min","max","fit"]}],"font-size":[{text:["base",O,R]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",G]}],"font-family":[{font:[q]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",_]}],"line-clamp":[{"line-clamp":["none",E,G]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",A,_]}],"list-image":[{"list-image":["none",_]}],"list-style-type":[{list:["none","disc","decimal",_]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:["solid","dashed","dotted","double","none","wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",A,R]}],"underline-offset":[{"underline-offset":["auto",A,_]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:P()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",_]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",_]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top",T]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",W]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},V]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[b]}],"gradient-via-pos":[{via:[b]}],"gradient-to-pos":[{to:[b]}],"gradient-from":[{from:[f]}],"gradient-via":[{via:[f]}],"gradient-to":[{to:[f]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:["solid","dashed","dotted","double","none","hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:["solid","dashed","dotted","double","none"]}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-s":[{"border-s":[n]}],"border-color-e":[{"border-e":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["","solid","dashed","dotted","double","none"]}],"outline-offset":[{"outline-offset":[A,_]}],"outline-w":[{outline:[A,R]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:S()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[A,R]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",O,F]}],"shadow-color":[{shadow:[q]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"]}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[t]}],contrast:[{contrast:[i]}],"drop-shadow":[{"drop-shadow":["","none",O,_]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[u]}],saturate:[{saturate:[y]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[t]}],"backdrop-contrast":[{"backdrop-contrast":[i]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[y]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[l]}],"border-spacing-x":[{"border-spacing-x":[l]}],"border-spacing-y":[{"border-spacing-y":[l]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",_]}],duration:[{duration:D()}],ease:[{ease:["linear","in","out","in-out",_]}],delay:[{delay:D()}],animate:[{animate:["none","spin","ping","pulse","bounce",_]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[x]}],"scale-x":[{"scale-x":[x]}],"scale-y":[{"scale-y":[x]}],rotate:[{rotate:[$,_]}],"translate-x":[{"translate-x":[N]}],"translate-y":[{"translate-y":[N]}],"skew-x":[{"skew-x":[j]}],"skew-y":[{"skew-y":[j]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",_]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",_]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":P()}],"scroll-mx":[{"scroll-mx":P()}],"scroll-my":[{"scroll-my":P()}],"scroll-ms":[{"scroll-ms":P()}],"scroll-me":[{"scroll-me":P()}],"scroll-mt":[{"scroll-mt":P()}],"scroll-mr":[{"scroll-mr":P()}],"scroll-mb":[{"scroll-mb":P()}],"scroll-ml":[{"scroll-ml":P()}],"scroll-p":[{"scroll-p":P()}],"scroll-px":[{"scroll-px":P()}],"scroll-py":[{"scroll-py":P()}],"scroll-ps":[{"scroll-ps":P()}],"scroll-pe":[{"scroll-pe":P()}],"scroll-pt":[{"scroll-pt":P()}],"scroll-pr":[{"scroll-pr":P()}],"scroll-pb":[{"scroll-pb":P()}],"scroll-pl":[{"scroll-pl":P()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",_]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[A,R,G]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}))},6021:(e,r,o)=>{o.d(r,{c:()=>s,u:()=>l});var t=o(6540);function n(e,r){if("function"==typeof e)return e(r);null!=e&&(e.current=r)}function s(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return e=>{let o=!1;const t=r.map((r=>{const t=n(r,e);return!o&&"function"==typeof t&&(o=!0),t}));if(o)return()=>{for(let e=0;e<t.length;e++){const o=t[e];"function"==typeof o?o():n(r[e],null)}}}}function l(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return t.useCallback(s(...r),r)}},2489:(e,r,o)=>{o.d(r,{a:()=>s,c:()=>l});var t=o(6540),n=o(4848);function s(e,r){const o=t.createContext(r),s=e=>{const{children:r,...s}=e,l=t.useMemo((()=>s),Object.values(s));return(0,n.jsx)(o.Provider,{value:l,children:r})};return s.displayName=e+"Provider",[s,function(n){const s=t.useContext(o);if(s)return s;if(void 0!==r)return r;throw new Error(`\`${n}\` must be used within \`${e}\``)}]}function l(e,r){void 0===r&&(r=[]);let o=[];const s=()=>{const r=o.map((e=>t.createContext(e)));return function(o){const n=(null==o?void 0:o[e])||r;return t.useMemo((()=>({[`__scope${e}`]:{...o,[e]:n}})),[o,n])}};return s.scopeName=e,[function(r,s){const l=t.createContext(s),a=o.length;o=[...o,s];const i=r=>{var o;const{scope:s,children:i,...c}=r,d=(null==(o=null==s?void 0:s[e])?void 0:o[a])||l,u=t.useMemo((()=>c),Object.values(c));return(0,n.jsx)(d.Provider,{value:u,children:i})};return i.displayName=r+"Provider",[i,function(o,n){var i;const c=(null==(i=null==n?void 0:n[e])?void 0:i[a])||l,d=t.useContext(c);if(d)return d;if(void 0!==s)return s;throw new Error(`\`${o}\` must be used within \`${r}\``)}]},a(s,...r)]}function a(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];const n=r[0];if(1===r.length)return n;const s=()=>{const e=r.map((e=>({useScope:e(),scopeName:e.scopeName})));return function(r){const o=e.reduce(((e,o)=>{let{useScope:t,scopeName:n}=o;return{...e,...t(r)[`__scope${n}`]}}),{});return t.useMemo((()=>({[`__scope${n.scopeName}`]:o})),[o])}};return s.scopeName=n.scopeName,s}},5635:(e,r,o)=>{o.d(r,{P:()=>a,d:()=>i});var t=o(6540),n=o(961),s=o(4282),l=o(4848),a=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce(((e,r)=>{const o=t.forwardRef(((e,o)=>{const{asChild:t,...n}=e,a=t?s.a:r;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),(0,l.jsx)(a,{...n,ref:o})}));return o.displayName=`Primitive.${r}`,{...e,[r]:o}}),{});function i(e,r){e&&n.flushSync((()=>e.dispatchEvent(r)))}},4282:(e,r,o)=>{o.d(r,{S:()=>i,a:()=>l});var t=o(6540),n=o(6021),s=o(4848),l=t.forwardRef(((e,r)=>{const{children:o,...n}=e,l=t.Children.toArray(o),i=l.find(c);if(i){const e=i.props.children,o=l.map((r=>r===i?t.Children.count(e)>1?t.Children.only(null):t.isValidElement(e)?e.props.children:null:r));return(0,s.jsx)(a,{...n,ref:r,children:t.isValidElement(e)?t.cloneElement(e,void 0,o):null})}return(0,s.jsx)(a,{...n,ref:r,children:o})}));l.displayName="Slot";var a=t.forwardRef(((e,r)=>{const{children:o,...s}=e;if(t.isValidElement(o)){const e=function(e){var r,o;let t=null==(r=Object.getOwnPropertyDescriptor(e.props,"ref"))?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=null==(o=Object.getOwnPropertyDescriptor(e,"ref"))?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}(o);return t.cloneElement(o,{...d(s,o.props),ref:r?(0,n.c)(r,e):e})}return t.Children.count(o)>1?t.Children.only(null):null}));a.displayName="SlotClone";var i=e=>{let{children:r}=e;return(0,s.jsx)(s.Fragment,{children:r})};function c(e){return t.isValidElement(e)&&e.type===i}function d(e,r){const o={...r};for(const t in r){const n=e[t],s=r[t];/^on[A-Z]/.test(t)?n&&s?o[t]=function(){s(...arguments),n(...arguments)}:n&&(o[t]=n):"style"===t?o[t]={...n,...s}:"className"===t&&(o[t]=[n,s].filter(Boolean).join(" "))}return{...e,...o}}},7227:(e,r,o)=>{o.d(r,{u:()=>n});var t=o(6540);function n(e){const r=t.useRef(e);return t.useEffect((()=>{r.current=e})),t.useMemo((()=>function(){for(var e,o=arguments.length,t=new Array(o),n=0;n<o;n++)t[n]=arguments[n];return null==(e=r.current)?void 0:e.call(r,...t)}),[])}},4988:(e,r,o)=>{o.d(r,{u:()=>n});var t=o(6540),n=null!=globalThis&&globalThis.document?t.useLayoutEffect:()=>{}}}]);