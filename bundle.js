!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=function(){let e=document.createElement("div");e.className="search-bar",e.innerHTML='\n        <input type="text" class="search-box" placeholder = "Enter the query">\n        <button class = "search-button">search</button>\n    ',document.body.appendChild(e);let t=document.createElement("div");t.className="videos",document.body.appendChild(t)}},function(e,t,n){const i=n(0),o=n(5),l=n(7),s=n(8);i(),s(o),l(o)},function(e,t){e.exports={key:"AIzaSyCGrjhRuwe3F9autO8pZI4IEG9W91kwUzA",baseUrl:"https://www.googleapis.com/youtube/v3/",baseSearchParam:"type=video&part=snippet&maxResults=18&order=viewCount"}},function(e,t,n){const i=n(4),o=n(9),l=n(10),s=n(11),r=n(12);e.exports=function(e,t){e.forEach((e,n)=>{let o=l(t[n].contentDetails.duration),c=t[n].statistics.viewCount,a=s(e.snippet.publishedAt.substr(0,10)),d=document.createElement("div");d.className="video",d.innerHTML=`\n            <div class="clip-preview">\n                <img src=${e.snippet.thumbnails.medium.url}>\n                <div class="duration">${o}</div>\n            </div>\n            <div class="channel-title">channel: ${e.snippet.channelTitle}</div>   \n            <div class="video-title">${e.snippet.title}</div>\n            <div class="date">${a}</div>\n            <div class="views">${c} views</div>\n        `,r(d,e),d.children[0].children[0].addEventListener("click",()=>{let t=i(e.id.videoId);document.body.appendChild(t);let n=getComputedStyle(t.children[0]).width,o=n.substr(0,n.length-2);t.children[0].style.height=`${9*o/16}px`,window.addEventListener("resize",()=>{let e=getComputedStyle(t.children[0]).width,n=e.substr(0,e.length-2);t.children[0].style.height=`${9*n/16}px`}),t.addEventListener("click",()=>{t.remove()})}),document.getElementsByClassName("videos")[0].appendChild(d)}),e.length?o():document.getElementsByClassName("rotating")[0].remove()}},function(e,t){e.exports=function(e){let t=document.createElement("div");return t.className="player",t.innerHTML=`\n        <iframe src="https://www.youtube.com/embed/${e}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>\n    `,t}},function(e,t,n){const i=n(3),{key:o,baseUrl:l,baseSearchParam:s}=n(2);let r,c;e.exports=function(e){let t=e.split(" ").filter(e=>!!e).join("+");t!==c&&(r="",c=t),!r&&(r="");let n=`${l}search?key=${o}&${s}&q=${t}&pageToken=${r}`;fetch(n).then(e=>e.json()).then(e=>{let t="";e.items.forEach(e=>{t+=e.id.videoId+","}),r=e.nextPageToken;let n=`${l}videos?key=${o}&id=${t}&part=contentDetails,statistics`;fetch(n).then(e=>e.json()).then(t=>i(e.items,t.items))})}},,function(e,t){e.exports=function(e){function t(){let n=document.getElementsByClassName("search-box")[0],i=document.body.scrollHeight||document.documentElement.scrollHeight,o=window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop,l=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,s=Math.floor(i-o);s!==l&&s!==l-1&&s!==l+1||(e(n.value),window.removeEventListener("scroll",t))}window.addEventListener("scroll",()=>{window.addEventListener("scroll",t)})}},function(e,t){e.exports=function(e){let t=document.getElementsByClassName("search-button")[0];t.addEventListener("click",()=>{let n=document.getElementsByClassName("search-box")[0],i=n.value;""!==n.value&&"search"===t.innerHTML?(document.getElementsByClassName("rotating").length&&document.getElementsByClassName("rotating")[0].remove(),document.getElementsByClassName("videos")[0].innerHTML="",e(n.value),t.innerHTML="clear"):"clear"===t.innerHTML&&(n.value="",t.innerHTML="search"),n.addEventListener("input",()=>{n.value!==i&&(t.innerHTML="search")})})}},function(e,t){e.exports=function(){if(!document.getElementsByClassName("rotating").length&&document.documentElement.clientHeight!==document.documentElement.scrollHeight){let e=document.createElement("div");e.className="rotating",e.innerHTML="\n                <img src='./img/loading.png'>\n            ",document.body.appendChild(e)}}},function(e,t){e.exports=function(e){let t=[0,0,0];for(let n=0;n<e.length;n++){let i="number"==typeof+e[n]&&"number"==typeof+e[n+1]&&!isNaN(+e[n])&&!isNaN(+e[n+1]),o="number"==typeof+e[n]&&!isNaN(+e[n]),l=i&&"H"===e[n+2],s=o&&"H"===e[n+1],r=i&&"M"===e[n+2],c=o&&"M"===e[n+1],a=i&&"S"===e[n+2],d=o&&"S"===e[n+1];l?(t[0]=e[n]+e[n+1],n+=2):s?(t[0]=e[n],n+=1):r?(t[1]=e[n]+e[n+1],n+=2):c?(t[1]=e[n],n+=1):a?(t[2]=e[n]+e[n+1],n+=2):d&&(t[2]=e[n],n+=1)}return 0===t[0]?(0===t[2]&&(t[2]="00"),0!==t[2]&&1===t[2].length&&(t[2]="0"+t[2]),t[1]+":"+t[2]):(0===t[1]&&(t[1]="00"),0!==t[1]&&1===t[1].length&&(t[1]="0"+t[1]),0===t[2]&&(t[2]="00"),0!==t[2]&&1===t[2].length&&(t[2]="0"+t[2]),t[0]+":"+t[1]+":"+t[2])}},function(e,t){e.exports=function(e){let t=e.split("-");return`${["January","February","March","April","May","June","July","August","September","October","November","December"][+t[1]-1]} ${+t[2]}, ${t[0]}`}},function(e,t){e.exports=function(e,t){let n=document.createElement("div");n.className="show-description",n.innerHTML="show more...";let i=document.createElement("div");i.className="description",i.style.display="none",i.innerHTML=`${t.snippet.description}`,n.addEventListener("click",()=>{"show more..."===n.innerHTML?(i.style.display="block",n.innerHTML="hide..."):(i.style.display="none",n.innerHTML="show more...")}),e.appendChild(n),e.appendChild(i)}}]);
//# sourceMappingURL=bundle.js.map