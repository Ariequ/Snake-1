var g=void 0,k=!0,n=null,p=!1,r,s=this;function aa(a,b){var c=a.split("."),d=s;!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var f;c.length&&(f=c.shift());)!c.length&&b!==g?d[f]=b:d=d[f]?d[f]:d[f]={}}
function t(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function u(a){return"string"==typeof a}function ba(a){var b=typeof a;return"object"==b&&a!=n||"function"==b}var v="closure_uid_"+Math.floor(2147483648*Math.random()).toString(36),da=0,ea=Date.now||function(){return+new Date};function fa(a){var a=String(a),b=a.indexOf(".");-1==b&&(b=a.length);b=Math.max(0,2-b);return Array(b+1).join("0")+a};var w=Array.prototype,ga=w.indexOf?function(a,b,c){return w.indexOf.call(a,b,c)}:function(a,b,c){c=c==n?0:0>c?Math.max(0,a.length+c):c;if(u(a))return!u(b)||1!=b.length?-1:a.indexOf(b,c);for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ha=w.forEach?function(a,b,c){w.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,f=u(a)?a.split(""):a,e=0;e<d;e++)e in f&&b.call(c,f[e],e,a)};var ia={ja:["BC","AD"],ia:["Before Christ","Anno Domini"],la:"JFMAMJJASOND".split(""),sa:"JFMAMJJASOND".split(""),ka:"January February March April May June July August September October November December".split(" "),ra:"January February March April May June July August September October November December".split(" "),oa:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),ua:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),ya:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
wa:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),qa:"Sun Mon Tue Wed Thu Fri Sat".split(" "),va:"Sun Mon Tue Wed Thu Fri Sat".split(" "),ma:"SMTWTFS".split(""),ta:"SMTWTFS".split(""),pa:["Q1","Q2","Q3","Q4"],na:["1st quarter","2nd quarter","3rd quarter","4th quarter"],ga:["AM","PM"],ha:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],xa:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],$:6,za:[5,6],aa:5};function x(a,b,c){"number"==typeof a?(this.c=new Date(a,b||0,c||1),ja(this,c||1)):ba(a)?(this.c=new Date(a.getFullYear(),a.getMonth(),a.getDate()),ja(this,a.getDate())):(this.c=new Date(ea()),this.c.setHours(0),this.c.setMinutes(0),this.c.setSeconds(0),this.c.setMilliseconds(0))}r=x.prototype;r.R=ia.$;r.S=ia.aa;r.n=function(){var a=new x(this.c);a.R=this.R;a.S=this.S;return a};r.getFullYear=function(){return this.c.getFullYear()};r.getYear=function(){return this.getFullYear()};r.getMonth=function(){return this.c.getMonth()};
r.getDate=function(){return this.c.getDate()};r.getUTCHours=function(){return this.c.getUTCHours()};r.P=function(a){return this.getYear()==a.getYear()&&this.getMonth()==a.getMonth()&&this.getDate()==a.getDate()};r.toString=function(){return[this.getFullYear(),fa(this.getMonth()+1),fa(this.getDate())].join("")+""};function ja(a,b){a.getDate()!=b&&a.c.setUTCHours(a.c.getUTCHours()+(a.getDate()<b?1:-1))}r.valueOf=function(){return this.c.valueOf()};var y,ka,A,la;function ma(){return s.navigator?s.navigator.userAgent:n}la=A=ka=y=p;var B;if(B=ma()){var na=s.navigator;y=0==B.indexOf("Opera");ka=!y&&-1!=B.indexOf("MSIE");A=!y&&-1!=B.indexOf("WebKit");la=!y&&!A&&"Gecko"==na.product}var oa=y,C=ka,D=la,E=A,pa=s.navigator,qa=-1!=(pa&&pa.platform||"").indexOf("Mac"),ra;
a:{var sa="",F;if(oa&&s.opera)var ta=s.opera.version,sa="function"==typeof ta?ta():ta;else if(D?F=/rv\:([^\);]+)(\)|;)/:C?F=/MSIE\s+([^\);]+)(\)|;)/:E&&(F=/WebKit\/(\S+)/),F)var ua=F.exec(ma()),sa=ua?ua[1]:"";if(C){var va,wa=s.document;va=wa?wa.documentMode:g;if(va>parseFloat(sa)){ra=String(va);break a}}ra=sa}var xa={};
function G(a){var b;if(!(b=xa[a])){b=0;for(var c=String(ra).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),f=Math.max(c.length,d.length),e=0;0==b&&e<f;e++){var h=c[e]||"",i=d[e]||"",l=RegExp("(\\d*)(\\D*)","g"),j=RegExp("(\\d*)(\\D*)","g");do{var q=l.exec(h)||["","",""],m=j.exec(i)||["","",""];if(0==q[0].length&&0==m[0].length)break;b=((0==q[1].length?0:parseInt(q[1],10))<(0==m[1].length?0:parseInt(m[1],10))?-1:(0==q[1].length?0:parseInt(q[1],
10))>(0==m[1].length?0:parseInt(m[1],10))?1:0)||((0==q[2].length)<(0==m[2].length)?-1:(0==q[2].length)>(0==m[2].length)?1:0)||(q[2]<m[2]?-1:q[2]>m[2]?1:0)}while(0==b)}b=xa[a]=0<=b}return b}var ya={};function za(){return ya[9]||(ya[9]=C&&!!document.documentMode&&9<=document.documentMode)};var Aa;!C||za();!D&&!C||C&&za()||D&&G("1.9.1");C&&G("9");function H(a,b){this.width=a;this.height=b}r=H.prototype;r.n=function(){return new H(this.width,this.height)};r.toString=function(){return"("+this.width+" x "+this.height+")"};r.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};r.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};r.scale=function(a){this.width*=a;this.height*=a;return this};function I(a){return u(a)?document.getElementById(a):a}function Ba(a){for(var b;b=a.firstChild;)a.removeChild(b)}function J(a){return 9==a.nodeType?a:a.ownerDocument||a.document}function K(a,b){if("textContent"in a)a.textContent=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else Ba(a),a.appendChild(J(a).createTextNode(b))}function L(a){this.I=a||s.document||document}L.prototype.createElement=function(a){return this.I.createElement(a)};
L.prototype.createTextNode=function(a){return this.I.createTextNode(a)};L.prototype.appendChild=function(a,b){a.appendChild(b)};
L.prototype.append=function(a,b){function c(a){a&&f.appendChild(u(a)?d.createTextNode(a):a)}for(var d=J(a),f=a,e=arguments,h=1;h<e.length;h++){var i=e[h],l=i,j=t(l);if(("array"==j||"object"==j&&"number"==typeof l.length)&&!(ba(i)&&0<i.nodeType)){l=ha;a:{if((j=i)&&"number"==typeof j.length){if(ba(j)){j="function"==typeof j.item||"string"==typeof j.item;break a}if("function"==t(j)){j="function"==typeof j.item;break a}}j=p}if(j)if(j=i.length,0<j){for(var q=Array(j),m=0;m<j;m++)q[m]=i[m];i=q}else i=[];
l(i,c)}else c(i)}};function Ca(a,b){if("FORM"==a.tagName)for(var c=a.elements,d=0;a=c[d];d++)Ca(a,b);else b==k&&a.blur(),a.disabled=b}function Da(a){var b=a.type;if(b===g)return n;switch(b.toLowerCase()){case "checkbox":case "radio":return a.checked?a.value:n;case "select-one":return b=a.selectedIndex,0<=b?a.options[b].value:n;case "select-multiple":for(var b=[],c,d=0;c=a.options[d];d++)c.selected&&b.push(c.value);return b.length?b:n;default:return a.value!==g?a.value:n}};!C||za();var Ea=!C||za(),Fa=C&&!G("8");!E||G("528");D&&G("1.9b")||C&&G("8")||oa&&G("9.5")||E&&G("528");D&&!G("8")||C&&G("9");function M(a,b){this.type=a;this.currentTarget=this.target=b}M.prototype.M=p;M.prototype.defaultPrevented=p;M.prototype.ea=k;M.prototype.preventDefault=function(){this.defaultPrevented=k;this.ea=p};function Ga(a){Ga[" "](a);return a}Ga[" "]=function(){};function N(a,b){a&&this.A(a,b)}function Ha(){}Ha.prototype=M.prototype;N.fa=M.prototype;N.prototype=new Ha;r=N.prototype;r.target=n;r.relatedTarget=n;r.offsetX=0;r.offsetY=0;r.clientX=0;r.clientY=0;r.screenX=0;r.screenY=0;r.button=0;r.keyCode=0;r.charCode=0;r.ctrlKey=p;r.altKey=p;r.shiftKey=p;r.metaKey=p;r.da=p;r.Q=n;
r.A=function(a,b){var c=this.type=a.type;M.call(this,c);this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(D){var f;a:{try{Ga(d.nodeName);f=k;break a}catch(e){}f=p}f||(d=n)}}else"mouseover"==c?d=a.fromElement:"mouseout"==c&&(d=a.toElement);this.relatedTarget=d;this.offsetX=E||a.offsetX!==g?a.offsetX:a.layerX;this.offsetY=E||a.offsetY!==g?a.offsetY:a.layerY;this.clientX=a.clientX!==g?a.clientX:a.pageX;this.clientY=a.clientY!==g?a.clientY:a.pageY;this.screenX=a.screenX||
0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.da=qa?a.metaKey:a.ctrlKey;this.state=a.state;this.Q=a;a.defaultPrevented&&this.preventDefault();delete this.M};
r.preventDefault=function(){N.fa.preventDefault.call(this);var a=this.Q;if(a.preventDefault)a.preventDefault();else if(a.returnValue=p,Fa)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};function Ia(){}var Ja=0;r=Ia.prototype;r.key=0;r.r=p;r.O=p;r.A=function(a,b,c,d,f,e){if("function"==t(a))this.V=k;else if(a&&a.handleEvent&&"function"==t(a.handleEvent))this.V=p;else throw Error("Invalid listener argument");this.B=a;this.Y=b;this.src=c;this.type=d;this.capture=!!f;this.T=e;this.O=p;this.key=++Ja;this.r=p};r.handleEvent=function(a){return this.V?this.B.call(this.T||this.src,a):this.B.handleEvent.call(this.B,a)};var O={},P={},Q={},R={};
function Ka(a,b,c,d,f){if(b)if("array"==t(b))for(var e=0;e<b.length;e++)Ka(a,b[e],c,d,f);else{var d=!!d,h=P;b in h||(h[b]={j:0,q:0});h=h[b];d in h||(h[d]={j:0,q:0},h.j++);var h=h[d],i=a[v]||(a[v]=++da),l;h.q++;if(h[i]){l=h[i];for(e=0;e<l.length;e++)if(h=l[e],h.B==c&&h.T==f){if(h.r)break;return}}else l=h[i]=[],h.j++;var j=La,q=Ea?function(a){return j.call(q.src,q.key,a)}:function(a){a=j.call(q.src,q.key,a);if(!a)return a},e=q;e.src=a;h=new Ia;h.A(c,e,a,b,d,f);c=h.key;e.key=c;l.push(h);O[c]=h;Q[i]||
(Q[i]=[]);Q[i].push(h);a.addEventListener?(a==s||!a.ba)&&a.addEventListener(b,e,d):a.attachEvent(b in R?R[b]:R[b]="on"+b,e)}else throw Error("Invalid event type");}function Ma(a,b,c,d){if(!d.C&&d.X){for(var f=0,e=0;f<d.length;f++)d[f].r?d[f].Y.src=n:(f!=e&&(d[e]=d[f]),e++);d.length=e;d.X=p;0==e&&(delete P[a][b][c],P[a][b].j--,0==P[a][b].j&&(delete P[a][b],P[a].j--),0==P[a].j&&delete P[a])}}
function Na(a,b,c,d,f){var e=1,b=b[v]||(b[v]=++da);if(a[b]){a.q--;a=a[b];a.C?a.C++:a.C=1;try{for(var h=a.length,i=0;i<h;i++){var l=a[i];l&&!l.r&&(e&=Oa(l,f)!==p)}}finally{a.C--,Ma(c,d,b,a)}}return Boolean(e)}
function Oa(a,b){if(a.O){var c=a.key;if(O[c]){var d=O[c];if(!d.r){var f=d.src,e=d.type,h=d.Y,i=d.capture;f.removeEventListener?(f==s||!f.ba)&&f.removeEventListener(e,h,i):f.detachEvent&&f.detachEvent(e in R?R[e]:R[e]="on"+e,h);f=f[v]||(f[v]=++da);if(Q[f]){var h=Q[f],l=ga(h,d);0<=l&&w.splice.call(h,l,1);0==h.length&&delete Q[f]}d.r=k;if(d=P[e][i][f])d.X=k,Ma(e,i,f,d);delete O[c]}}}return a.handleEvent(b)}
function La(a,b){if(!O[a])return k;var c=O[a],d=c.type,f=P;if(!(d in f))return k;var f=f[d],e,h;if(!Ea){var i;if(!(i=b))a:{i=["window","event"];for(var l=s;e=i.shift();)if(l[e]!=n)l=l[e];else{i=n;break a}i=l}e=i;i=k in f;l=p in f;if(i){if(0>e.keyCode||e.returnValue!=g)return k;a:{var j=p;if(0==e.keyCode)try{e.keyCode=-1;break a}catch(q){j=k}if(j||e.returnValue==g)e.returnValue=k}}j=new N;j.A(e,this);e=k;try{if(i){for(var m=[],ca=j.currentTarget;ca;ca=ca.parentNode)m.push(ca);h=f[k];h.q=h.j;for(var z=
m.length-1;!j.M&&0<=z&&h.q;z--)j.currentTarget=m[z],e&=Na(h,m[z],d,k,j);if(l){h=f[p];h.q=h.j;for(z=0;!j.M&&z<m.length&&h.q;z++)j.currentTarget=m[z],e&=Na(h,m[z],d,p,j)}}else e=Oa(c,j)}finally{m&&(m.length=0)}return e}d=new N(b,this);return e=Oa(c,d)};function S(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}S.prototype.n=function(){return new S(this.top,this.right,this.bottom,this.left)};S.prototype.toString=function(){return"("+this.top+"t, "+this.right+"r, "+this.bottom+"b, "+this.left+"l)"};function T(a,b){var c=J(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,n))?c[b]||c.getPropertyValue(b)||"":""}function Pa(){var a=20;"number"==typeof a&&(a=Math.round(a)+"px");return a}function Qa(a){a=a.style;a.position="relative";C&&!G("8")?(a.zoom="1",a.display="inline"):a.display=D?G("1.9a")?"inline-block":"-moz-inline-box":"inline-block"}
function Ra(a,b,c,d){if(/^\d+px?$/.test(b))return parseInt(b,10);var f=a.style[c],e=a.runtimeStyle[c];a.runtimeStyle[c]=a.currentStyle[c];a.style[c]=b;b=a.style[d];a.style[c]=f;a.runtimeStyle[c]=e;return b}function Sa(a,b){return Ra(a,a.currentStyle?a.currentStyle[b]:n,"left","pixelLeft")}var Ta={thin:2,medium:4,thick:6};
function Ua(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:n))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:n;return c in Ta?Ta[c]:Ra(a,c,"left","pixelLeft")};function U(){this.o=[]}U.prototype.h=0;U.prototype.i=0;function Va(a){if(a.h!=a.i){var b=a.o[a.h];delete a.o[a.h];a.h++;return b}}U.prototype.clear=function(){this.i=this.h=this.o.length=0};U.prototype.w=function(){return this.o.slice(this.h,this.i)};function V(){this.k=k;this.l=p;this.t=10;this.a=this.v=this.map=n;this.U=p;this.s={};Ka(document,"keydown",this.ca,p,this)}r=V.prototype;r.ca=function(a){if(a)switch(a.keyCode){case 37:case 38:case 39:case 40:if(!this.l){var b=this.a;switch(a.keyCode){case 37:b.p!=Wa&&(b.m=3);break;case 38:2!=b.p&&(b.m=1);break;case 39:3!=b.p&&(b.m=Wa);break;case 40:1!=b.p&&(b.m=2)}}break;case 32:Xa(this);break;case 76:this.k&&this.W();break;case 78:this.k&&this.Z();break;case 83:this.k||this.N()}};
r.Z=function(){this.J=I("gameBoard");this.u=I("snakeSpeedForm");this.l=this.k=p;var a;a:if(a=this.u.elements.snakeSpeed,a.type)a=Da(a);else{for(var b=0;b<a.length;b++){var c=Da(a[b]);if(c){a=c;break a}}a=n}this.t=a;Ca(this.u,k);I("finalScore").style.display="none";K(I("counter"),"0");a=this.J;var c=J(a),b=C&&a.currentStyle,d;if(d=b)d="CSS1Compat"==(c?new L(J(c)):Aa||(Aa=new L)).I.compatMode&&"auto"!=b.width&&"auto"!=b.height&&!b.boxSizing;if(d)c=Ra(a,b.width,"width","pixelWidth"),a=Ra(a,b.height,
"height","pixelHeight"),a=new H(c,a);else{b=new H(a.offsetWidth,a.offsetHeight);if(C){c=Sa(a,"paddingLeft");d=Sa(a,"paddingRight");var f=Sa(a,"paddingTop"),e=Sa(a,"paddingBottom"),c=new S(f,d,e,c)}else c=T(a,"paddingLeft"),d=T(a,"paddingRight"),f=T(a,"paddingTop"),e=T(a,"paddingBottom"),c=new S(parseFloat(f),parseFloat(d),parseFloat(e),parseFloat(c));C?(d=Ua(a,"borderLeft"),f=Ua(a,"borderRight"),e=Ua(a,"borderTop"),a=Ua(a,"borderBottom"),a=new S(e,f,a,d)):(d=T(a,"borderLeftWidth"),f=T(a,"borderRightWidth"),
e=T(a,"borderTopWidth"),a=T(a,"borderBottomWidth"),a=new S(parseFloat(e),parseFloat(f),parseFloat(a),parseFloat(d)));a=new H(b.width-a.left-c.left-c.right-a.right,b.height-a.top-c.top-c.bottom-a.bottom)}this.g=a.scale(0.05).floor();Ya(this);this.map=new Za(this.g);a=new SnakeCoordinates(Math.floor(this.g.height/2),Math.floor(this.g.width/2));W(this.map,X,a);this.a=new Y(1,a);$a(this);this.move()};
function Ya(a){Ba(a.J);for(var b,c,d=0;d<a.g.height;d++){b=document.createElement("DIV");b.id="row"+d;for(var f=0;f<a.g.width;f++)c=document.createElement("DIV"),c.id="spot"+d+"-"+f,c.style.height=Pa(),c.style.width=Pa(),Qa(c),b.appendChild(c);a.J.appendChild(b)}}
function $a(a,b){for(var c=new SnakeCoordinates(b?b.e:Math.floor(Math.random()*a.g.width),b?b.d:Math.floor(Math.random()*a.g.height));ab(a.map,c)!=bb;)c.e=Math.floor(Math.random()*a.g.width),c.d=Math.floor(Math.random()*a.g.height);W(a.map,Z,c);a.v=c}
r.move=function(){if(!this.l){var a=this.a.move();switch(ab(this.map,a)){case cb:Va(this.a.b);db(this);return;case Z:K(I("counter"),this.a.b.i-this.a.b.h-1+"");$a(this);break;default:this.map.clear(Va(this.a.b))}a=W(this.map,X,a);a===$||a===X?db(this):setTimeout("snakeManager.move()",1E3/this.t)}};
function db(a){a.k=k;K(I("finalScoreNum"),a.a.b.i-a.a.b.h-1+"");Qa(I("finalScore"));Ca(a.u,p);var b=document.createElement("DIV");b.className="previous-scores-text";K(b,a.a.b.i-a.a.b.h-1+"");I("previousScores").appendChild(b)}r.N=function(){this.k||(this.s.snake=this.a.n(),this.s.snakeSpeed=this.t,this.s.gemCoordinates=this.v.n(),this.U=k)};
r.W=function(){if(this.k&&this.U){this.l=this.k=p;this.a=this.s.snake;this.t=this.s.snakeSpeed;this.v=this.s.gemCoordinates;this.N();for(var a=this.u.elements.snakeSpeed,b=0;b<a.length;b++)a[b].checked=parseInt(a[b].value,10)!=this.t?p:k;Ca(this.u,k);I("finalScore").style.display="none";K(I("counter"),this.a.b.i-this.a.b.h-1+"");Ya(this);this.map=new Za(this.g);$a(this,this.v);ha(this.a.w(),function(a){this.a.head!==g&&this.a.head.P(a)?W(this.map,X,a):W(this.map,$,a)},this);Xa(this)}};
function Xa(a){a.k||(a.l=!a.l,I("pauseButton").value=a.l?"Resume":"Pause",I("pauseGameOverlay").style.display=a.l?"block":"none",a.l||setTimeout("snakeManager.move()",1E3/a.t))}
function Y(a,b){this.id=a;switch((new x).getMonth()){case 9:this.L="url('images/head_halloween.png')";this.G="url('images/body_halloween.gif')";this.K="url('images/gem_halloween.png')";break;case 10:this.L="url('images/head_turkey.png')";this.G="url('images/body_turkey.png')";this.K="url('images/gem_turkey.png')";break;case 11:this.L="url('images/head_christmas.png')";this.G="url('images/body_christmas.png')";this.K="url('images/gem_christmas.png')";break;default:this.L="url('images/head_default.jpg')",
this.G="url('images/body_default.jpg')",this.K="url('images/gem_default.png')"}this.p=this.m=Wa;this.head=b;var c=this.b=new U;c.o[c.i++]=b}var Wa=4;Y.prototype.n=function(){var a=new Y(this.id,this.head);a.m=this.m;a.p=this.p;a.b=new U;ha(this.b.w(),function(b){a.append(b)},this);return a};Y.prototype.w=function(){return this.b.w()};Y.prototype.append=function(a){var b=this.head;this.head=a;var c=this.b;c.o[c.i++]=a;return b};
Y.prototype.move=function(){var a=this.head.n();switch(this.m){case 3:a.d--;break;case 1:a.e--;break;case Wa:a.d++;break;case 2:a.e++}this.head=a;var b=this.b;b.o[b.i++]=a;this.p=this.m;return a};SnakeCoordinates=function(a,b){this.e=a;this.d=b};SnakeCoordinates.prototype.n=function(){return new SnakeCoordinates(this.e,this.d)};SnakeCoordinates.prototype.P=function(a){return this.e===a.e&&this.d===a.d};function Za(a){this.size=a;this.D=[];for(a=0;a<this.size.height;a++)this.D[a]=[]}
function ab(a,b){if(eb(a,b)){var c=a.D[b.e][b.d];return c?c.F:bb}return cb}function W(a,b,c){var d=ab(a,c);eb(a,c)&&(b=new fb(c,b),a.D[c.e][c.d]=b,gb(b),b.F===X&&(a.z!==g&&ab(a,a.z.H)===X&&(a.z.F=$,gb(a.z)),a.z=b));return d}Za.prototype.clear=function(a){if(eb(this,a)){var b=new fb(a,bb);this.D[a.e][a.d]=b;gb(b)}};function eb(a,b){return 0<=b.e&&b.e<a.size.height&&0<=b.d&&b.d<a.size.width}
function fb(a,b){this.H=a;this.F=b;this.f={};switch((new x).getMonth()){case 9:this.f[X]="url('images/head_halloween.png')";this.f[$]="url('images/body_halloween.gif')";this.f[Z]="url('images/gem_halloween.png')";break;case 10:this.f[X]="url('images/head_turkey.png')";this.f[$]="url('images/body_turkey.png')";this.f[Z]="url('images/gem_turkey.png')";break;case 11:this.f[X]="url('images/head_christmas.png')";this.f[$]="url('images/body_christmas.png')";this.f[Z]="url('images/gem_christmas.png')";break;
default:this.f[X]="url('images/head_default.jpg')",this.f[$]="url('images/body_default.jpg')",this.f[Z]="url('images/gem_default.png')"}}function gb(a){var b=I("spot"+a.H.e+"-"+a.H.d);b&&(b.style.backgroundImage=a.f[a.F]||"")}var cb=0,bb=1,X=2,$=3,Z=4;aa("Snake",Y);aa("SnakeManager",V);aa("SnakeState",{});V.prototype.move=V.prototype.move;V.prototype.startGame=V.prototype.Z;V.prototype.saveGame=V.prototype.N;V.prototype.loadGame=V.prototype.W;