/*! For license information please see e48d16dd.10a511fe.js.LICENSE.txt */
"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8597],{4232:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>me,contentTitle:()=>fe,default:()=>xe,frontMatter:()=>be,metadata:()=>t,toc:()=>he});const t=JSON.parse('{"id":"rcp/intro","title":"Intro","description":"Do you build react components? And do you also try to document them? How do you show the preview of the component?","source":"@site/docs/rcp/01-intro.mdx","sourceDirName":"rcp","slug":"/rcp/intro","permalink":"/pr-preview/pr-82/docs/rcp/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/rcp/01-intro.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"rcpSidebar"}');var n=o(4848),l=o(1184),s=o(6540),a=o(748);const i=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),c=function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return r.filter(((e,r,o)=>!!e&&""!==e.trim()&&o.indexOf(e)===r)).join(" ").trim()};var d={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const u=(0,s.forwardRef)(((e,r)=>{let{color:o="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:l,className:a="",children:i,iconNode:u,...p}=e;return(0,s.createElement)("svg",{ref:r,...d,width:t,height:t,stroke:o,strokeWidth:l?24*Number(n)/Number(t):n,className:c("lucide",a),...p},[...u.map((e=>{let[r,o]=e;return(0,s.createElement)(r,o)})),...Array.isArray(i)?i:[i]])})),p=((e,r)=>{const o=(0,s.forwardRef)(((o,t)=>{let{className:n,...l}=o;return(0,s.createElement)(u,{ref:t,iconNode:r,className:c(`lucide-${i(e)}`,n),...l})}));return o.displayName=`${e}`,o})("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);function b(e){var r,o,t="";if("string"==typeof e||"number"==typeof e)t+=e;else if("object"==typeof e)if(Array.isArray(e)){var n=e.length;for(r=0;r<n;r++)e[r]&&(o=b(e[r]))&&(t&&(t+=" "),t+=o)}else for(o in e)e[o]&&(t&&(t+=" "),t+=o);return t}const f=e=>{const r=x(e),{conflictingClassGroups:o,conflictingClassGroupModifiers:t}=e;return{getClassGroupId:e=>{const o=e.split("-");return""===o[0]&&1!==o.length&&o.shift(),m(o,r)||g(e)},getConflictingClassGroupIds:(e,r)=>{const n=o[e]||[];return r&&t[e]?[...n,...t[e]]:n}}},m=(e,r)=>{var o;if(0===e.length)return r.classGroupId;const t=e[0],n=r.nextPart.get(t),l=n?m(e.slice(1),n):void 0;if(l)return l;if(0===r.validators.length)return;const s=e.join("-");return null==(o=r.validators.find((e=>{let{validator:r}=e;return r(s)})))?void 0:o.classGroupId},h=/^\[(.+)\]$/,g=e=>{if(h.test(e)){const r=h.exec(e)[1],o=null==r?void 0:r.substring(0,r.indexOf(":"));if(o)return"arbitrary.."+o}},x=e=>{const{theme:r,prefix:o}=e,t={nextPart:new Map,validators:[]};return k(Object.entries(e.classGroups),o).forEach((e=>{let[o,n]=e;v(n,t,o,r)})),t},v=(e,r,o,t)=>{e.forEach((e=>{if("string"!=typeof e){if("function"==typeof e)return w(e)?void v(e(t),r,o,t):void r.validators.push({validator:e,classGroupId:o});Object.entries(e).forEach((e=>{let[n,l]=e;v(l,y(r,n),o,t)}))}else{(""===e?r:y(r,e)).classGroupId=o}}))},y=(e,r)=>{let o=e;return r.split("-").forEach((e=>{o.nextPart.has(e)||o.nextPart.set(e,{nextPart:new Map,validators:[]}),o=o.nextPart.get(e)})),o},w=e=>e.isThemeGetter,k=(e,r)=>r?e.map((e=>{let[o,t]=e;const n=t.map((e=>"string"==typeof e?r+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map((e=>{let[o,t]=e;return[r+o,t]}))):e));return[o,n]})):e,z=e=>{if(e<1)return{get:()=>{},set:()=>{}};let r=0,o=new Map,t=new Map;const n=(n,l)=>{o.set(n,l),r++,r>e&&(r=0,t=o,o=new Map)};return{get(e){let r=o.get(e);return void 0!==r?r:void 0!==(r=t.get(e))?(n(e,r),r):void 0},set(e,r){o.has(e)?o.set(e,r):n(e,r)}}},j=e=>{const{separator:r,experimentalParseClassName:o}=e,t=1===r.length,n=r[0],l=r.length,s=e=>{const o=[];let s,a=0,i=0;for(let u=0;u<e.length;u++){let c=e[u];if(0===a){if(c===n&&(t||e.slice(u,u+l)===r)){o.push(e.slice(i,u)),i=u+l;continue}if("/"===c){s=u;continue}}"["===c?a++:"]"===c&&a--}const c=0===o.length?e:e.substring(i),d=c.startsWith("!");return{modifiers:o,hasImportantModifier:d,baseClassName:d?c.substring(1):c,maybePostfixModifierPosition:s&&s>i?s-i:void 0}};return o?e=>o({className:e,parseClassName:s}):s},N=e=>{if(e.length<=1)return e;const r=[];let o=[];return e.forEach((e=>{"["===e[0]?(r.push(...o.sort(),e),o=[]):o.push(e)})),r.push(...o.sort()),r},C=/\s+/;function P(){let e,r,o=0,t="";for(;o<arguments.length;)(e=arguments[o++])&&(r=S(e))&&(t&&(t+=" "),t+=r);return t}const S=e=>{if("string"==typeof e)return e;let r,o="";for(let t=0;t<e.length;t++)e[t]&&(r=S(e[t]))&&(o&&(o+=" "),o+=r);return o};function G(e){for(var r=arguments.length,o=new Array(r>1?r-1:0),t=1;t<r;t++)o[t-1]=arguments[t];let n,l,s,a=function(r){const t=o.reduce(((e,r)=>r(e)),e());return n=(e=>({cache:z(e.cacheSize),parseClassName:j(e),...f(e)}))(t),l=n.cache.get,s=n.cache.set,a=i,i(r)};function i(e){const r=l(e);if(r)return r;const o=((e,r)=>{const{parseClassName:o,getClassGroupId:t,getConflictingClassGroupIds:n}=r,l=[],s=e.trim().split(C);let a="";for(let i=s.length-1;i>=0;i-=1){const e=s[i],{modifiers:r,hasImportantModifier:c,baseClassName:d,maybePostfixModifierPosition:u}=o(e);let p=!!u,b=t(p?d.substring(0,u):d);if(!b){if(!p){a=e+(a.length>0?" "+a:a);continue}if(b=t(d),!b){a=e+(a.length>0?" "+a:a);continue}p=!1}const f=N(r).join(":"),m=c?f+"!":f,h=m+b;if(l.includes(h))continue;l.push(h);const g=n(b,p);for(let o=0;o<g.length;++o){const e=g[o];l.push(m+e)}a=e+(a.length>0?" "+a:a)}return a})(e,n);return s(e,o),o}return function(){return a(P.apply(null,arguments))}}const I=e=>{const r=r=>r[e]||[];return r.isThemeGetter=!0,r},M=/^\[(?:([a-z-]+):)?(.+)\]$/i,E=/^\d+\/\d+$/,R=new Set(["px","full","screen"]),$=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,A=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,W=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,D=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,O=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,q=e=>F(e)||R.has(e)||E.test(e),T=e=>ee(e,"length",re),F=e=>!!e&&!Number.isNaN(Number(e)),H=e=>ee(e,"number",F),L=e=>!!e&&Number.isInteger(Number(e)),U=e=>e.endsWith("%")&&F(e.slice(0,-1)),Z=e=>M.test(e),_=e=>$.test(e),Y=new Set(["length","size","percentage"]),B=e=>ee(e,Y,oe),J=e=>ee(e,"position",oe),V=new Set(["image","url"]),K=e=>ee(e,V,ne),Q=e=>ee(e,"",te),X=()=>!0,ee=(e,r,o)=>{const t=M.exec(e);return!!t&&(t[1]?"string"==typeof r?t[1]===r:r.has(t[1]):o(t[2]))},re=e=>A.test(e)&&!W.test(e),oe=()=>!1,te=e=>D.test(e),ne=e=>O.test(e),le=()=>{const e=I("colors"),r=I("spacing"),o=I("blur"),t=I("brightness"),n=I("borderColor"),l=I("borderRadius"),s=I("borderSpacing"),a=I("borderWidth"),i=I("contrast"),c=I("grayscale"),d=I("hueRotate"),u=I("invert"),p=I("gap"),b=I("gradientColorStops"),f=I("gradientColorStopPositions"),m=I("inset"),h=I("margin"),g=I("opacity"),x=I("padding"),v=I("saturate"),y=I("scale"),w=I("sepia"),k=I("skew"),z=I("space"),j=I("translate"),N=()=>["auto",Z,r],C=()=>[Z,r],P=()=>["",q,T],S=()=>["auto",F,Z],G=()=>["","0",Z],M=()=>[F,Z];return{cacheSize:500,separator:":",theme:{colors:[X],spacing:[q,T],blur:["none","",_,Z],brightness:M(),borderColor:[e],borderRadius:["none","","full",_,Z],borderSpacing:C(),borderWidth:P(),contrast:M(),grayscale:G(),hueRotate:M(),invert:G(),gap:C(),gradientColorStops:[e],gradientColorStopPositions:[U,T],inset:N(),margin:N(),opacity:M(),padding:C(),saturate:M(),scale:M(),sepia:G(),skew:M(),space:C(),translate:C()},classGroups:{aspect:[{aspect:["auto","square","video",Z]}],container:["container"],columns:[{columns:[_]}],"break-after":[{"break-after":["auto","avoid","all","avoid-page","page","left","right","column"]}],"break-before":[{"break-before":["auto","avoid","all","avoid-page","page","left","right","column"]}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top",Z]}],overflow:[{overflow:["auto","hidden","clip","visible","scroll"]}],"overflow-x":[{"overflow-x":["auto","hidden","clip","visible","scroll"]}],"overflow-y":[{"overflow-y":["auto","hidden","clip","visible","scroll"]}],overscroll:[{overscroll:["auto","contain","none"]}],"overscroll-x":[{"overscroll-x":["auto","contain","none"]}],"overscroll-y":[{"overscroll-y":["auto","contain","none"]}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",L,Z]}],basis:[{basis:N()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Z]}],grow:[{grow:G()}],shrink:[{shrink:G()}],order:[{order:["first","last","none",L,Z]}],"grid-cols":[{"grid-cols":[X]}],"col-start-end":[{col:["auto",{span:["full",L,Z]},Z]}],"col-start":[{"col-start":S()}],"col-end":[{"col-end":S()}],"grid-rows":[{"grid-rows":[X]}],"row-start-end":[{row:["auto",{span:[L,Z]},Z]}],"row-start":[{"row-start":S()}],"row-end":[{"row-end":S()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Z]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Z]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal","start","end","center","between","around","evenly","stretch"]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal","start","end","center","between","around","evenly","stretch","baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":["start","end","center","between","around","evenly","stretch","baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[x]}],px:[{px:[x]}],py:[{py:[x]}],ps:[{ps:[x]}],pe:[{pe:[x]}],pt:[{pt:[x]}],pr:[{pr:[x]}],pb:[{pb:[x]}],pl:[{pl:[x]}],m:[{m:[h]}],mx:[{mx:[h]}],my:[{my:[h]}],ms:[{ms:[h]}],me:[{me:[h]}],mt:[{mt:[h]}],mr:[{mr:[h]}],mb:[{mb:[h]}],ml:[{ml:[h]}],"space-x":[{"space-x":[z]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[z]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Z,r]}],"min-w":[{"min-w":[Z,r,"min","max","fit"]}],"max-w":[{"max-w":[Z,r,"none","full","min","max","fit","prose",{screen:[_]},_]}],h:[{h:[Z,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Z,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Z,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Z,r,"auto","min","max","fit"]}],"font-size":[{text:["base",_,T]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",H]}],"font-family":[{font:[X]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Z]}],"line-clamp":[{"line-clamp":["none",F,H]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",q,Z]}],"list-image":[{"list-image":["none",Z]}],"list-style-type":[{list:["none","disc","decimal",Z]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[g]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[g]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:["solid","dashed","dotted","double","none","wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",q,T]}],"underline-offset":[{"underline-offset":["auto",q,Z]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:C()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Z]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Z]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[g]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top",J]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",B]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},K]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[f]}],"gradient-via-pos":[{via:[f]}],"gradient-to-pos":[{to:[f]}],"gradient-from":[{from:[b]}],"gradient-via":[{via:[b]}],"gradient-to":[{to:[b]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[g]}],"border-style":[{border:["solid","dashed","dotted","double","none","hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[g]}],"divide-style":[{divide:["solid","dashed","dotted","double","none"]}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-s":[{"border-s":[n]}],"border-color-e":[{"border-e":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["","solid","dashed","dotted","double","none"]}],"outline-offset":[{"outline-offset":[q,Z]}],"outline-w":[{outline:[q,T]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:P()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[g]}],"ring-offset-w":[{"ring-offset":[q,T]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",_,Q]}],"shadow-color":[{shadow:[X]}],opacity:[{opacity:[g]}],"mix-blend":[{"mix-blend":["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"]}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[t]}],contrast:[{contrast:[i]}],"drop-shadow":[{"drop-shadow":["","none",_,Z]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[u]}],saturate:[{saturate:[v]}],sepia:[{sepia:[w]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[t]}],"backdrop-contrast":[{"backdrop-contrast":[i]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[g]}],"backdrop-saturate":[{"backdrop-saturate":[v]}],"backdrop-sepia":[{"backdrop-sepia":[w]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Z]}],duration:[{duration:M()}],ease:[{ease:["linear","in","out","in-out",Z]}],delay:[{delay:M()}],animate:[{animate:["none","spin","ping","pulse","bounce",Z]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[y]}],"scale-x":[{"scale-x":[y]}],"scale-y":[{"scale-y":[y]}],rotate:[{rotate:[L,Z]}],"translate-x":[{"translate-x":[j]}],"translate-y":[{"translate-y":[j]}],"skew-x":[{"skew-x":[k]}],"skew-y":[{"skew-y":[k]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Z]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Z]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":C()}],"scroll-mx":[{"scroll-mx":C()}],"scroll-my":[{"scroll-my":C()}],"scroll-ms":[{"scroll-ms":C()}],"scroll-me":[{"scroll-me":C()}],"scroll-mt":[{"scroll-mt":C()}],"scroll-mr":[{"scroll-mr":C()}],"scroll-mb":[{"scroll-mb":C()}],"scroll-ml":[{"scroll-ml":C()}],"scroll-p":[{"scroll-p":C()}],"scroll-px":[{"scroll-px":C()}],"scroll-py":[{"scroll-py":C()}],"scroll-ps":[{"scroll-ps":C()}],"scroll-pe":[{"scroll-pe":C()}],"scroll-pt":[{"scroll-pt":C()}],"scroll-pr":[{"scroll-pr":C()}],"scroll-pb":[{"scroll-pb":C()}],"scroll-pl":[{"scroll-pl":C()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Z]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[q,T,H]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},se=G(le);function ae(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return se(function(){for(var e,r,o=0,t="",n=arguments.length;o<n;o++)(e=arguments[o])&&(r=b(e))&&(t&&(t+=" "),t+=r);return t}(r))}const ie=e=>{let{className:r,...o}=e;return(0,n.jsx)(a.YZ,{className:ae("flex h-full w-full data-[panel-group-direction=vertical]:flex-col",r),...o})},ce=a.Zk,de=e=>{let{withHandle:r,className:o,...t}=e;return(0,n.jsx)(a.TW,{className:ae("relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",o),...t,children:r&&(0,n.jsx)("div",{className:"z-10 flex items-center justify-center w-3 h-4 border rounded-sm bg-border",children:(0,n.jsx)(p,{className:"h-2.5 w-2.5"})})})};function ue(e){let{children:r,className:o}=e;const t=s.useRef(null);return(0,n.jsx)("div",{className:"group-data-[view=code]/block-view-wrapper:hidden md:h-[--height] twp",children:(0,n.jsx)("div",{className:"grid w-full gap-4",children:(0,n.jsxs)(ie,{direction:"horizontal",className:"relative z-10",children:[(0,n.jsx)(ce,{ref:t,className:`relative aspect-[4/2.5] rounded-xl border bg-background md:aspect-auto ${o}`,defaultSize:100,minSize:30,children:r}),(0,n.jsx)(de,{className:"relative hidden w-3 bg-transparent p-0 after:absolute after:right-0 after:top-1/2 after:h-8 after:w-[6px] after:-translate-y-1/2 after:translate-x-[-1px] after:rounded-full after:bg-border after:transition-all after:hover:h-10 md:block"}),(0,n.jsx)(ce,{defaultSize:0,minSize:0})]})})})}function pe(e){let{srcUrl:r,height:o,colorMode:t}=e;return s.useEffect((()=>{(e=>{const r=document.querySelector("iframe");r&&r.contentDocument&&r.contentDocument.documentElement.setAttribute("data-theme",e)})(t)}),[t]),(0,n.jsx)(ue,{children:(0,n.jsx)("iframe",{allow:"cross-origin-isolated",src:r,height:o||930,className:"relative z-20 hidden w-full bg-background md:block"})})}const be={},fe="Intro",me={},he=[{value:"IFramePreview Demo",id:"iframepreview-demo",level:2}];function ge(e){const r={blockquote:"blockquote",h1:"h1",h2:"h2",header:"header",p:"p",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"intro",children:"Intro"})}),"\n",(0,n.jsx)(r.p,{children:"Do you build react components? And do you also try to document them? How do you show the preview of the component?"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"You may be using storybook or ladle, in that case this component is not for you"}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"If you are building custom documentation like shadcn, tailwindui etc., you need a preview component which can be resized and it can show how component behaves responsively."}),"\n",(0,n.jsx)(r.p,{children:"RCP (React Component Preview) Component is for that!"}),"\n",(0,n.jsx)(r.h2,{id:"iframepreview-demo",children:"IFramePreview Demo"}),"\n","\n",(0,n.jsx)(pe,{srcUrl:"/tailwind_2"})]})}function xe(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(ge,{...e})}):ge(e)}},1184:(e,r,o)=>{o.d(r,{R:()=>s,x:()=>a});var t=o(6540);const n={},l=t.createContext(n);function s(e){const r=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),t.createElement(l.Provider,{value:r},e.children)}}}]);