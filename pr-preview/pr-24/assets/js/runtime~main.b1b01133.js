(()=>{"use strict";var e,a,c,f,t,r={},d={};function b(e){var a=d[e];if(void 0!==a)return a.exports;var c=d[e]={id:e,loaded:!1,exports:{}};return r[e].call(c.exports,c,c.exports,b),c.loaded=!0,c.exports}b.m=r,b.c=d,e=[],b.O=(a,c,f,t)=>{if(!c){var r=1/0;for(i=0;i<e.length;i++){c=e[i][0],f=e[i][1],t=e[i][2];for(var d=!0,o=0;o<c.length;o++)(!1&t||r>=t)&&Object.keys(b.O).every((e=>b.O[e](c[o])))?c.splice(o--,1):(d=!1,t<r&&(r=t));if(d){e.splice(i--,1);var n=f();void 0!==n&&(a=n)}}return a}t=t||0;for(var i=e.length;i>0&&e[i-1][2]>t;i--)e[i]=e[i-1];e[i]=[c,f,t]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var t=Object.create(null);b.r(t);var r={};a=a||[null,c({}),c([]),c(c)];for(var d=2&f&&e;"object"==typeof d&&!~a.indexOf(d);d=c(d))Object.getOwnPropertyNames(d).forEach((a=>r[a]=()=>e[a]));return r.default=()=>e,b.d(t,r),t},b.d=(e,a)=>{for(var c in a)b.o(a,c)&&!b.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,c)=>(b.f[c](e,a),a)),[])),b.u=e=>"assets/js/"+({60:"9336fedc",310:"628dd60c",453:"0d5066cd",685:"fc418dc3",867:"33fc5bb8",1235:"a7456010",1688:"a34c72be",1724:"dff1c289",1903:"acecf23e",1953:"1e4232ab",1972:"73664a40",1974:"5c868d36",2711:"9e4087bc",2748:"822bd8ab",2922:"421cbb61",3098:"533a09ca",3249:"ccc49370",3637:"f4f34a3a",3694:"8717b14a",3838:"5bcfbebf",3969:"af6677c0",3976:"0e384e19",4134:"393be207",4212:"621db11d",4583:"1df93b7f",4736:"e44a2883",4761:"8caeae89",4813:"6875c492",4908:"14790800",5557:"d9f32620",5742:"aba21aa0",6061:"1f391b9e",6441:"9d740f60",6644:"a90fafb4",6969:"14eb3368",7098:"a7bd4aaa",7472:"814f3328",7643:"a6aa9e1f",8209:"01a85c17",8401:"17896441",8609:"925b3f96",8737:"7661071f",8863:"f55d3e7a",9037:"92e04d97",9048:"a94703ab",9212:"ef2ee622",9262:"18c41134",9325:"59362658",9328:"e273c56f",9647:"5e95c892",9858:"36994c47",9871:"dec5c372"}[e]||e)+"."+{60:"8d8b4cc4",310:"91b112f6",453:"6b8186ba",685:"0b245028",867:"78d828b3",1235:"39e998a2",1688:"be213d75",1724:"3f8b9af2",1903:"8753a000",1907:"f1588a1f",1953:"6284cd27",1972:"65b95cd0",1974:"6a0ace48",2008:"0950c1c7",2711:"9b252374",2748:"ee3d9424",2922:"b33c247b",3098:"cd8c90d4",3249:"610d0c85",3637:"5a7d91d2",3694:"1ff9c4b8",3838:"d02fe76e",3969:"ddb66abb",3976:"950793c2",4134:"ee7c0fa1",4212:"d588cf09",4250:"b997c987",4583:"64028666",4736:"f6795e09",4761:"8ab8ff00",4813:"587ee936",4908:"20656e94",5557:"8b0e6232",5742:"15d6424f",5776:"1125e944",6061:"da02fd7a",6441:"c1ffe8e9",6644:"c18a8d85",6969:"d72dcba3",7098:"330fb7fe",7472:"58ce996d",7643:"bd7c4e65",8209:"5ede2d72",8308:"0a6ec99b",8401:"c70c32b6",8609:"d453f17d",8737:"95299c6c",8863:"abf71771",9037:"45dc9de4",9048:"177dae2a",9212:"9f3a2b26",9262:"3bf07215",9325:"10fce1b8",9328:"f6097b7b",9647:"5d57a794",9858:"6f292635",9871:"606e76fc"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),f={},t="@locospec/site:",b.l=(e,a,c,r)=>{if(f[e])f[e].push(a);else{var d,o;if(void 0!==c)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==t+c){d=l;break}}d||(o=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,b.nc&&d.setAttribute("nonce",b.nc),d.setAttribute("data-webpack",t+c),d.src=e),f[e]=[a];var u=(a,c)=>{d.onerror=d.onload=null,clearTimeout(s);var t=f[e];if(delete f[e],d.parentNode&&d.parentNode.removeChild(d),t&&t.forEach((e=>e(c))),a)return a(c)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=u.bind(null,d.onerror),d.onload=u.bind(null,d.onload),o&&document.head.appendChild(d)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/pr-preview/pr-24/",b.gca=function(e){return e={14790800:"4908",17896441:"8401",59362658:"9325","9336fedc":"60","628dd60c":"310","0d5066cd":"453",fc418dc3:"685","33fc5bb8":"867",a7456010:"1235",a34c72be:"1688",dff1c289:"1724",acecf23e:"1903","1e4232ab":"1953","73664a40":"1972","5c868d36":"1974","9e4087bc":"2711","822bd8ab":"2748","421cbb61":"2922","533a09ca":"3098",ccc49370:"3249",f4f34a3a:"3637","8717b14a":"3694","5bcfbebf":"3838",af6677c0:"3969","0e384e19":"3976","393be207":"4134","621db11d":"4212","1df93b7f":"4583",e44a2883:"4736","8caeae89":"4761","6875c492":"4813",d9f32620:"5557",aba21aa0:"5742","1f391b9e":"6061","9d740f60":"6441",a90fafb4:"6644","14eb3368":"6969",a7bd4aaa:"7098","814f3328":"7472",a6aa9e1f:"7643","01a85c17":"8209","925b3f96":"8609","7661071f":"8737",f55d3e7a:"8863","92e04d97":"9037",a94703ab:"9048",ef2ee622:"9212","18c41134":"9262",e273c56f:"9328","5e95c892":"9647","36994c47":"9858",dec5c372:"9871"}[e]||e,b.p+b.u(e)},(()=>{var e={5354:0,1869:0};b.f.j=(a,c)=>{var f=b.o(e,a)?e[a]:void 0;if(0!==f)if(f)c.push(f[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var t=new Promise(((c,t)=>f=e[a]=[c,t]));c.push(f[2]=t);var r=b.p+b.u(a),d=new Error;b.l(r,(c=>{if(b.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var t=c&&("load"===c.type?"missing":c.type),r=c&&c.target&&c.target.src;d.message="Loading chunk "+a+" failed.\n("+t+": "+r+")",d.name="ChunkLoadError",d.type=t,d.request=r,f[1](d)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,c)=>{var f,t,r=c[0],d=c[1],o=c[2],n=0;if(r.some((a=>0!==e[a]))){for(f in d)b.o(d,f)&&(b.m[f]=d[f]);if(o)var i=o(b)}for(a&&a(c);n<r.length;n++)t=r[n],b.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return b.O(i)},c=self.webpackChunk_locospec_site=self.webpackChunk_locospec_site||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})()})();