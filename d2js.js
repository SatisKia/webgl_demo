/*
 * D2JS
 * Copyright (C) SatisKia. All rights reserved.
 */
(function(n,t){function ef(){return!!u.createElement(pu).getContext}function bs(){e=[];e[0]=8;e[1]=9;e[2]=13;e[3]=16;e[4]=17;e[5]=32;e[6]=37;e[7]=38;e[8]=39;e[9]=40;e[10]=48;e[11]=49;e[12]=50;e[13]=51;e[14]=52;e[15]=53;e[16]=54;e[17]=55;e[18]=56;e[19]=57;e[20]=67;e[21]=88;e[22]=90;init();_USE_EXCANVAS||ef()?(_USE_LAYOUTMOUSE&&(et=!0,_USE_MOUSE=!0),_USE_LAYOUTTOUCH&&(et=!0,_USE_TOUCH=!0),_USE_KEY&&(o(u,we,kh),o(u,be,dh)),_USE_TOUCH&&(o(u,ir,sc),o(u,rr,hc),o(u,ur,cc)),b=u.createElement(wu),b.style.cssText=of,u.body.appendChild(b),start()&&sf()):error()}function ks(){processEvent(13,n.orientation)}function ds(){processEvent(14,0)}function sf(){oi=!1;k()}function gs(){oi=!0}function nh(n){lr=n}function hf(){d=frameTime()-(vt-si);d<0&&(d=0);d>frameTime()&&(d=frameTime())}function bt(){while(vt>si&&vt-si<frameTime())vt=ut()}function k(){if(oi){oi=!1;return}si=ut();lr();vt=ut();_USE_REQUESTANIMATIONFRAME?n.requestAnimationFrame?(bt(),n.requestAnimationFrame(k)):n.webkitRequestAnimationFrame?(bt(),n.webkitRequestAnimationFrame(k)):n.mozRequestAnimationFrame?(bt(),n.mozRequestAnimationFrame(k)):n.oRequestAnimationFrame?(bt(),n.oRequestAnimationFrame(k)):n.msRequestAnimationFrame?(bt(),n.msRequestAnimationFrame(k)):(hf(),n.setTimeout(k,d)):(hf(),n.setTimeout(k,d))}function o(n,t,i){n.addEventListener?n.addEventListener(t,i,!1):n.attachEvent?n.attachEvent(ii+t,i):n[ii+t]=i}function h(n,t,i){n.removeEventListener?n.removeEventListener(t,i,!1):n.detachEvent?n.detachEvent(ii+t,i):n[ii+t]=null}function th(){_USE_MOUSE&&f!=null&&(h(f,st,pr),h(f,fr,wr),h(f,ri,yf),h(f,ui,pf),h(f,ht,br))}function cf(){_USE_MOUSE&&(o(f,st,pr),o(f,fr,wr),o(f,ri,yf),o(f,ui,pf),o(f,ht,br))}function ih(n){f=u.getElementById(n);i=f.getContext(bu);lf();i.textAlign=er;i.textBaseline=or;hi=new ou;cf()}function rh(n){hi=n}function uh(){return f}function fh(){return i}function eh(){return hi}function oh(n){return f=n}function sh(n){return i=n}function lf(){yt=!1}function hh(n,t){f.width=n;f.height=t;i.textAlign=er;i.textBaseline=or}function ar(){return parseInt(f.width)}function vr(){return parseInt(f.height)}function vi(n){for(var t=0;n;)t+=n.offsetLeft,n=n.offsetParent;return t}function yi(n){for(var t=0;n;)t+=n.offsetTop,n=n.offsetParent;return t}function ch(){if(!!u.documentElement&&u.documentElement.clientWidth>0)return u.documentElement.clientWidth;if(!u.body){if(!!n.innerWidth)return n.innerWidth}else return u.body.clientWidth;return 0}function lh(){if(!!u.documentElement&&u.documentElement.clientHeight>0)return u.documentElement.clientHeight;if(!u.body){if(!!n.innerHeight)return n.innerHeight}else return u.body.clientHeight;return 0}function ah(){return n.orientation}function af(n,t){var u="",i=n.indexOf(ke+t+ct),r;return i<0&&(i=n.indexOf("&"+t+ct)),i>=0&&(i+=t.length+2,r=n.indexOf("&",i),r<0&&(r=n.length),u=n.substring(i,r)),decodeURIComponent(u)}function vh(n){for(var i,r=n.split("&"),u=[],t=0;t<r.length;t++)i=r[t].split(ct),u[i[0]]=decodeURIComponent(i[1]);return u}function yh(n){return af(yu.href,n)}function ph(n){return u.getElementById(n)}function wh(n){var t=u.getElementById(n).innerHTML;return t=t.replace(new RegExp("&lt;",ft),"<"),t.replace(new RegExp("&gt;",ft),">")}function ut(){return(new Date).getTime()}function bh(n){var i=n.length,t;for(e=[],t=0;t<i;t++)e[t]=n[t]}function yr(n){for(var i=e.length,t=0;t<i;t++)if(e[t]==n)return 1<<t;return 0}function kh(n){var t=yr(n.keyCode);(pt&t)==0&&(pt+=t);processEvent(4,n.keyCode)}function dh(n){var t=yr(n.keyCode);(pt&t)!=0&&(pt-=t);processEvent(5,n.keyCode)}function gh(){return pt}function nc(n,t,i,r,u){this.x=n;this.y=t;this.width=i;this.height=r;this.id=u;this.shape=null;this.coords=null}function tc(){r=[]}function vf(n,t,i,u,f){r[r.length]=new nc(n,t,i,u,f)}function ic(n,t,u,f,e,o,s){var c,h;if(vf(n,t,u,f,e),!!i.isPointInPath)for(r[r.length-1].shape=o,c=s.split(w),r[r.length-1].coords=new Array(c.length),h=0;h<c.length;h++)r[r.length-1].coords[h]=parseInt(c[h])}function rc(n){if(r.length>0)for(var t=0;t<r.length;t++)if(r[t].id==n)return r[t];return null}function ot(n,t){var u,f;if(r.length>0)for(u=0;u<r.length;u++)if(r[u].shape==null){if(n>=r[u].x&&n<r[u].x+r[u].width&&t>=r[u].y&&t<r[u].y+r[u].height)return r[u].id}else{if(i.beginPath(),r[u].shape==de)i.arc(r[u].x+r[u].coords[0],r[u].y+r[u].coords[1],r[u].coords[2],0,Math.PI*2,!1);else if(r[u].shape==ge){for(i.moveTo(r[u].x+r[u].coords[0],r[u].y+r[u].coords[1]),f=2;f<r[u].coords.length-1;f+=2)i.lineTo(r[u].x+r[u].coords[f],r[u].y+r[u].coords[f+1]);i.closePath()}else r[u].shape==no&&(i.moveTo(r[u].x+r[u].coords[0],r[u].y+r[u].coords[1]),i.lineTo(r[u].x+r[u].coords[2],r[u].y+r[u].coords[1]),i.lineTo(r[u].x+r[u].coords[2],r[u].y+r[u].coords[3]),i.lineTo(r[u].x+r[u].coords[0],r[u].y+r[u].coords[3]),i.closePath());if(i.isPointInPath(n,t))return r[u].id}return-1}function uc(){for(var i=0,t,n=0;n<y.length;n++)t=ot(y[n],g[n]),t>=0&&(i|=1<<t);return i}function fc(n){return 1<<n}function kt(n){ci=n.clientX+u.body.scrollLeft+u.documentElement.scrollLeft-vi(f);li=n.clientY+u.body.scrollTop+u.documentElement.scrollTop-yi(f)}function pr(n){if(kt(n),et&&r.length>0){var t=ot(ci,li);if(t>=0){processEvent(6,t);return}}processEvent(8,0)}function wr(n){kt(n);processEvent(9,0)}function yf(n){kt(n);processEvent(10,0)}function pf(n){kt(n);processEvent(11,0)}function br(n){if(kt(n),et&&r.length>0){var t=ot(ci,li);if(t>=0){processEvent(7,t);return}}processEvent(12,0)}function ec(){return ci}function oc(){return li}function kr(n){y=[];g=[];for(var t=0;t<n.touches.length;t++)y[t]=n.touches[t].pageX-vi(f),g[t]=n.touches[t].pageY-yi(f)}function sc(n){if(kr(n),nt=y[0],tt=g[0],nt>=0&&nt<ar()&&tt>=0&&tt<vr()){if(ai=!0,et&&r.length>0){var t=ot(nt,tt);if(t>=0){processEvent(6,t);n.preventDefault();return}}processEvent(15,0);n.preventDefault()}}function hc(n){ai&&(kr(n),nt=y[0],tt=g[0],processEvent(16,0),n.preventDefault())}function cc(n){if(ai){if(ai=!1,kr(n),et&&r.length>0){var t=ot(nt,tt);if(t>=0){processEvent(7,t);n.preventDefault();return}}processEvent(17,0);n.preventDefault()}}function lc(){return y.length}function ac(n){return n<y.length?y[n]:nt}function vc(n){return n<g.length?g[n]:tt}function yc(n){yu.replace(n)}function dr(n,t){rt=n;wt=t.indexOf(to)>=0?lt+t+lt:t;b.style.cssText=of+ku+rt+fi+wt}function gr(n){b.innerHTML=lt;var t=b.offsetWidth;return n=n.replace(new RegExp("<",ft),"&lt;"),n=n.replace(new RegExp(">",ft),"&gt;"),b.innerHTML=lt+n+lt,b.offsetWidth-t*2}function nu(){return rt}function wf(n,t,i){yt||(s>=v.length&&(v[s]=u.createElement(wu),v[s].style.cssText=io,u.body.appendChild(v[s]),_USE_MOUSE&&(o(v[s],st,pr),o(v[s],fr,wr),o(v[s],ht,br))),v[s].style.cssText=du+(vi(f)+t)+gu+(yi(f)+i-rt)+ro+it+ku+rt+fi+wt,n=n.replace(new RegExp("<",ft),"&lt;"),n=n.replace(new RegExp(">",ft),"&gt;"),v[s].innerHTML=n,s++)}function bf(){return!!u.createElement(ei).canPlayType}function pc(n){var t=u.createElement(ei);return!t.canPlayType?!1:t.canPlayType(n).replace(new RegExp(uo),"")!=""}function tu(){this.element=null;this.state=0;this.volume=100;this.id=ut()}function wc(){this.element=null;this.src=null;this.tag=null}function c(){return _USE_AUDIOEX&&!bf()?!0:!1}function bc(n){if(c())return iu(n);try{var t=new tu;return t.element=new Audio(""),t.element.autoplay=!1,t.element.src=n,t.element.load(),t}catch(i){}return null}function iu(n){var t=new wc;return t.src=n,t}function kc(n,t){if(c())return kf(n,t,audioExElement());try{var i=new tu;return i.element=new Audio(""),i.element.autoplay=!1,i.element.src=n,i.element.loop=t,i.element.play(),i.state=1,i}catch(r){}return null}function kf(n,t,i){var r=iu(n);return ru(r,t,i),r}function dc(n){if(c())return!0;if(n!=null)try{if(n.element.readyState>=4)return!0}catch(t){}return!1}function df(n){if(c()){gf(n);return}if(n!=null&&n.state!=0){try{n.state==2?n.element.currentTime=0:n.state!=1||n.element.ended||(n.element.pause(),n.element.currentTime=0)}catch(t){}n.state=0}}function gf(n){n!=null&&n.element!=null&&(n.element.setAttribute(sr,""),u.body.removeChild(n.element),n.element=null)}function gc(n){if((df(n),!c())&&n!=null)try{n.element.load()}catch(t){}}function nl(n,t){if(c()){ru(n,t,audioExElement());return}if(n!=null){if(n.state==1)try{n.element.ended||(n.element.pause(),n.element.currentTime=0)}catch(i){}try{n.element.loop=t;n.element.play();n.state=1}catch(i){}}}function ru(n,t,i){n!=null&&(n.element!=null&&(n.element.setAttribute(sr,""),u.body.removeChild(n.element)),n.tag=i,n.element=u.createElement(n.tag),n.element.setAttribute(sr,n.src),n.tag==ei?(n.element.setAttribute(fo,at),t&&n.element.setAttribute(hr,at)):n.tag==eo?t&&n.element.setAttribute(hr,oo):n.tag==so&&(n.element.setAttribute(ho,at),n.element.setAttribute(co,lo),n.element.setAttribute(ao,nf),n.element.setAttribute(vo,nf),t&&(n.element.setAttribute(hr,at),n.element.setAttribute(yo,at))),u.body.appendChild(n.element))}function tl(n){if(c())return ne(n);if(n!=null&&n.state==1){try{return!n.element.ended}catch(t){}return!0}return!1}function ne(n){if(n!=null&&n.element!=null){if(n.tag==ei)try{return!n.element.ended}catch(t){}return!0}return!1}function te(n){if(!c()&&n!=null&&n.state==1)try{n.element.ended||(n.element.pause(),n.state=2)}catch(t){}}function il(n){if(!c()&&n!=null&&n.state==2)try{n.element.play();n.state=1}catch(t){}}function rl(n,t){if(!c()&&n!=null){n.volume=t;try{n.element.volume=n.volume/100}catch(i){}}}function ul(n){return c()?0:n!=null?n.volume:0}function fl(n){if(c())return 0;if(n!=null)try{return Math.floor(n.element.currentTime*1e3)}catch(t){}return 0}function el(n,t,i,r){n!=null&&n.id==t&&n.state==1&&uu(n,i,r,!0)}function ol(n,t){n!=null&&n.id==t&&n.state==1&&te(n)}function sl(n,t,i,r){try{var u=new tu;return u.element=new Audio(""),u.element.autoplay=!1,u.element.src=n,uu(u,t,i,r),u}catch(f){}return null}function uu(n,t,i,r){var u,f,e;if(n!=null)try{if(u=ut(),n.id=u,f=t/1e3,e=!1,n.state!=0)try{n.state==2?(n.element.currentTime=f,e=!0):n.state!=1||n.element.ended||(n.element.pause(),n.element.currentTime=f,e=!0)}catch(o){}if(n.element.loop=!1,n.element.play(),n.state=1,!e)try{n.element.currentTime=f}catch(o){}r?setTimeout(function(n,t,i,r){el(n,t,i,r)},i,n,u,t,i):setTimeout(function(n,t){ol(n,t)},i,n,u)}catch(o){}}function dt(n){return n.e}function hl(n){return n.x}function cl(n){return n.y}function ll(n){return n.width}function al(n){return n.height}function fu(n,t){n.e.src=t}function p(n){n.e.style.cssText=du+(vi(n.p)+n.x)+gu+(yi(n.p)+n.y)+po+n.width+wo+n.height+bo}function vl(n,t){n.x=t;p(n)}function yl(n,t){n.y=t;p(n)}function pl(n,t,i){n.x=t;n.y=i;p(n)}function wl(n,t){n.width=t;p(n)}function bl(n,t){n.height=t;p(n)}function kl(n,t,i){n.width=t;n.height=i;p(n)}function ie(n,t,i,r,u){n.x=t;n.y=i;n.width=r;n.height=u;p(n)}function re(n,t,i){n.a!=null&&(n.a.setAttribute(ko,t),n.a.setAttribute(go,i))}function pi(n,t,i,r,u,f,e){this.p=n;this.e=t;this.c=i;this.m=null;this.a=null;ie(this,r,u,f,e)}function wi(n,t){n.onButtonDown=function(){processEvent(0,n.e)};n.onButtonOut=function(){processEvent(1,n.e)};n.onButtonOver=function(){processEvent(2,n.e)};n.onButtonUp=function(){processEvent(3,n.e)};var i=t?n.a:n.e;_USE_MOUSE&&(o(i,st,n.onButtonDown),o(i,ri,n.onButtonOut),o(i,ui,n.onButtonOver),o(i,ht,n.onButtonUp));_USE_TOUCH&&(o(i,ir,n.onButtonDown),o(i,rr,n.onButtonOver),o(i,ur,n.onButtonUp))}function eu(n,t,i,r,f,e){var o=new pi(n,u.createElement(tf),!0,i,r,f,e);return fu(o,t),u.body.appendChild(o.e),wi(o,!1),o}function dl(n,t,i,r,f,e,o,s,h){var c=new pi(n,u.createElement(tf),!0,i,r,f,e);return fu(c,t),c.e.setAttribute(ns,ts+o),c.e.setAttribute(is,rs),u.body.appendChild(c.e),c.m=u.createElement(us),c.m.setAttribute(fs,o),u.body.appendChild(c.m),c.a=u.createElement(es),re(c,s,h),c.m.appendChild(c.a),wi(c,!0),c}function gl(n,t,i,r,f,e){var o=new pi(n,u.getElementById(t),!1,i,r,f,e);return wi(o,!1),o}function na(n,t,i,r,f,e,o){var s=new pi(n,u.getElementById(t),!1,i,r,f,e);return s.a=u.getElementById(o),wi(s,!0),s}function ue(n){if(n.c){var t=n.a!=null?n.a:n.e;_USE_MOUSE&&(h(t,st,n.onButtonDown),h(t,ri,n.onButtonOut),h(t,ui,n.onButtonOver),h(t,ht,n.onButtonUp));_USE_TOUCH&&(h(t,ir,n.onButtonDown),h(t,rr,n.onButtonOver),h(t,ur,n.onButtonUp));u.body.removeChild(n.e)}}function ou(){this.f=0}function fe(){this.f=0;this.s=1}function ta(n){bi++;var t=new Image;return t.onload=function(){bi--},t.src=n,t}function ia(){return bi>0}function ee(n,t){this.image=new Image;this.canvas=u.createElement(pu);this.context=this.canvas.getContext(bu);this.canvas.width=n;this.canvas.height=t;this.context.textAlign=er;this.context.textBaseline=or}function oe(n){this.s=n;this.o=[];this.id=-1}function ra(n){return gt.int(n)}function ua(n,t){return gt.div(n,t)}function fa(n,t){return gt.mod(n,t)}function se(){}function ce(n){this.o=new Array(n);this.n=0}function ea(){return pe.cookieEnabled}function oa(n){su=new Date(ut()+n*864e5).toGMTString()}function ki(){return u.cookie.split(ss)}function hu(n){var t=n.split(ct);return t[0]=t[0].replace(new RegExp("^\\s+"),""),t}function sa(){return u.cookie.length==0?0:ki().length}function ha(n){var t,i;return u.cookie.length==0?"":(t=ki(),n>=t.length)?"":(i=hu(t[n]),i[0])}function le(n,t){for(var r,u=ki(),i=0;i<u.length;i++)if(r=hu(u[i]),r[0]==n)return unescape(r[1]);return t}function cu(n,t){var i,r;t==null&&(t="");i=su;t.length==0&&(r=new Date,r.setTime(0),i=r.toGMTString());u.cookie=n+ct+escape(t)+hs+i}function ca(n){for(var r,u=ki(),i=u.length-1;i>=0;i--)r=hu(u[i]),(n==t||r[0].indexOf(n)==0)&&cu(r[0],"")}function la(n){l=le(n,"");ni=0}function aa(){if(ni>=l.length)di="";else{var n=l.indexOf("&",ni);n<0&&(n=l.length);di=l.substring(ni,n);ni=n+1}return unescape(di)}function va(){l="";di=""}function ya(){l=""}function pa(n){l.length>0&&(l+="&");l+=escape(n)}function wa(n){cu(n,l);l=""}function lu(n,t){this._header=n;this._value=t}function ba(){gi=[]}function ka(n,t){gi[gi.length]=new lu(n,t)}function da(){return gi}function ae(n,t){var i=null;if(!XMLHttpRequest){if(!!ActiveXObject)try{i=new ActiveXObject(cs)}catch(r){try{i=new ActiveXObject(ls)}catch(r){try{i=new ActiveXObject(as)}catch(r){try{i=new ActiveXObject(vs)}catch(r){}}}}}else i=new XMLHttpRequest;return i!=null&&(i.open(n,t,!0),i.onreadystatechange=function(){i.readyState==4&&(i.status==200?onHttpResponse(i,i.responseText):onHttpError(i,i.status))}),i}function nr(n,t,i){n.setRequestHeader(t,i);onHttpSetRequestHeader(t,i)}function ga(n,i){var r=ae(ys,n),u;if(r!=null){if(nr(r,uf,ff),i!=t)for(u=0;u<i.length;u++)i[u].set(r);r.send(null)}return r}function nv(n,i,r,u){var f=ae(ps,n),e;if(f!=null){if(nr(f,uf,ff),nr(f,ws,r),u!=t)for(e=0;e<u.length;e++)u[e].set(f);f.send(i)}return f}function tv(){try{return n.localStorage!=null}catch(t){}return!1}function au(){return n.localStorage.length}function ve(t){return t>=au()?"":n.localStorage.key(t)}function ye(t,i){var r=n.localStorage.getItem(t);return r==null?i:r}function vu(t,i){i!=null&&i.length>0?n.localStorage.setItem(t,i):n.localStorage.removeItem(t)}function iv(i){var f,u,r;if(i==t)n.localStorage.clear();else for(f=au(),r=f-1;r>=0;r--)u=ve(r),(i==t||u.indexOf(i)==0)&&vu(u,null)}function rv(n){a=ye(n,"");ti=0}function uv(){if(ti>=a.length)tr="";else{var n=a.indexOf("&",ti);n<0&&(n=a.length);tr=a.substring(ti,n);ti=n+1}return unescape(tr)}function fv(){a="";tr=""}function ev(){a=""}function ov(n){a.length>0&&(a+="&");a+=escape(n)}function sv(n){vu(n,a);a=""}var u=n.document,yu=n.location,pe=n.navigator,pu="canvas",we="keydown",be="keyup",ir="touchstart",rr="touchmove",ur="touchend",wu="span",ii="on",st="mousedown",fr="mousemove",ri="mouseout",ui="mouseover",ht="mouseup",bu="2d",er="left",or="bottom",ke="?",ct="=",ft="igm",w=",",de="circle",ge="poly",no="rect",to=" ",lt="'",ku=";font:",fi="px ",io="position:absolute",du="position:absolute;left:",gu="px;top:",ro="px;color:",ei="audio",uo="no",sr="src",fo="autoplay",at="true",hr="loop",eo="bgsound",oo="infinite",so="embed",ho="autostart",co="hidden",lo="false",ao="width",nf="1",vo="height",yo="repeat",po="px;width:",wo="px;height:",bo="px",ko="shape",go="coords",tf="img",ns="usemap",ts="#",is="border",rs="0",us="map",fs="name",es="area",rf="rgb(",cr=")",os="rgba(",ss=";",hs="; expires=",cs="Msxml2.XMLHTTP.6.0",ls="Msxml2.XMLHTTP.3.0",as="Msxml2.XMLHTTP",vs="Microsoft.XMLHTTP",ys="GET",uf="If-Modified-Since",ff="Thu, 01 Jun 1970 00:00:00 GMT",ps="POST",ws="Content-Type",lr,bi,gt,he,su,l,ni,di,gi,a,ti,tr;n._USE_AUDIOEX=!1;n._USE_DRAWSTRINGEX=!1;n._USE_EXCANVAS=!1;n._USE_KEY=!1;n._USE_MOUSE=!1;n._USE_TOUCH=!1;n._USE_LAYOUTMOUSE=!1;n._USE_LAYOUTTOUCH=!1;n._USE_REQUESTANIMATIONFRAME=!1;var oi=!1,si,vt,d,f=null,i,yt,hi,pt=0,e,et=!1,r=[],ci,li,ai=!1,y=[],g=[],nt,tt,it,rt,wt,v=[],s,b,of="visibility:hidden;position:absolute;left:0;top:0";lr=function(){if(_USE_DRAWSTRINGEX&&(s=0),i.clearRect(0,0,ar(),vr()),i.save(),paint(hi),i.restore(),_USE_DRAWSTRINGEX)for(var n=s;n<v.length;n++)v[n].innerHTML=""};ou.prototype={canUseClip:function(){return!!i.clip},canUseText:function(){return!!i.fillText},getColorOfRGB:function(n,t,i){return rf+n+w+t+w+i+cr},getColorOfRGBA:function(n,t,i,r){return os+n+w+t+w+i+w+r/255+cr},setStrokeWidth:function(n){i.lineWidth=n},setColor:function(n){it=n;i.fillStyle=it;i.strokeStyle=it},setAlpha:function(n){i.globalAlpha=n/255},setROP:function(n){i.globalCompositeOperation=n},setFont:function(n,t){dr(n,t);i.font=""+rt+fi+wt},stringWidth:function(n){return gr(n)},fontHeight:function(){return nu()},clearClip:function(){i.restore();i.save()},setClip:function(n,t,r,u){!i.clip||(i.restore(),i.save(),i.beginPath(),i.moveTo(n,t),i.lineTo(n+r,t),i.lineTo(n+r,t+u),i.lineTo(n,t+u),i.closePath(),i.clip())},drawLine:function(n,t,r,u){i.beginPath();i.moveTo(n+.5,t+.5);i.lineTo(r+.5,u+.5);i.stroke();i.closePath()},drawRect:function(n,t,r,u){i.strokeRect(n+.5,t+.5,r,u)},fillRect:function(n,t,r,u){i.fillRect(n,t,r,u)},drawCircle:function(n,t,r){i.beginPath();i.arc(n,t,r,0,Math.PI*2,!1);i.stroke()},drawString:function(n,t,r){i.fillText?i.fillText(n,t,r):_USE_DRAWSTRINGEX&&wf(n,t,r)},setFlipMode:function(n){this.f=n},drawScaledImage:function(n,t,r,u,f,e,o,s,h){if(this.f==0)try{i.drawImage(n,e,o,s,h,t,r,u,f)}catch(c){}else{i.save();i.setTransform(1,0,0,1,0,0);switch(this.f){case 1:i.translate(t+u,r);i.scale(-1,1);break;case 2:i.translate(t,r+f);i.scale(1,-1);break;case 3:i.translate(t+u,r+f);i.scale(-1,-1)}try{i.drawImage(n,e,o,s,h,0,0,u,f)}catch(c){}i.restore()}},drawImage:function(n,t,i){this.drawScaledImage(n,t,i,n.width,n.height,0,0,n.width,n.height)},drawTransImage:function(n,t,r,u,f,e,o,s,h,c,l,a){i.save();i.setTransform(1,0,0,1,0,0);i.translate(t,r);i.rotate(Math.PI*c/180);i.scale(l/128,a/128);i.translate(-s,-h);try{i.drawImage(n,u,f,e,o,0,0,e,o)}catch(v){}i.restore()}};fe.prototype={canUseClip:function(){return!!i.clip},canUseText:function(){return!!i.fillText},setScale:function(n){this.s=n},scale:function(){return this.s},getColorOfRGB:function(n,t,i){return rf+n+w+t+w+i+cr},setStrokeWidth:function(n){i.lineWidth=n*this.s},setColor:function(n){it=n;i.fillStyle=it;i.strokeStyle=it},setAlpha:function(n){i.globalAlpha=n/255},setROP:function(n){i.globalCompositeOperation=n},setFont:function(n,t){dr(Math.floor(n*this.s),t);i.font=""+rt+fi+wt},stringWidth:function(n){return this.s==0?0:gr(n)/this.s},fontHeight:function(){return this.s==0?0:nu()/this.s},clearClip:function(){i.restore();i.save()},setClip:function(n,t,r,u){!i.clip||(i.restore(),i.save(),i.beginPath(),i.moveTo(n*this.s,t*this.s),i.lineTo(n*this.s+r*this.s,t*this.s),i.lineTo(n*this.s+r*this.s,t*this.s+u*this.s),i.lineTo(n*this.s,t*this.s+u*this.s),i.closePath(),i.clip())},drawLine:function(n,t,r,u){i.beginPath();i.moveTo((n+.5)*this.s,(t+.5)*this.s);i.lineTo((r+.5)*this.s,(u+.5)*this.s);i.stroke();i.closePath()},drawRect:function(n,t,r,u){i.strokeRect((n+.5)*this.s,(t+.5)*this.s,r*this.s,u*this.s)},fillRect:function(n,t,r,u){i.fillRect(n*this.s,t*this.s,r*this.s,u*this.s)},drawCircle:function(n,t,r){i.beginPath();i.arc(n*this.s,t*this.s,r*this.s,0,Math.PI*2,!1);i.stroke()},drawString:function(n,t,r){i.fillText?i.fillText(n,t*this.s,r*this.s):_USE_DRAWSTRINGEX&&wf(n,t*this.s,r*this.s)},setFlipMode:function(n){this.f=n},drawScaledImage:function(n,t,r,u,f,e,o,s,h){if(this.f==0)try{i.drawImage(n,e,o,s,h,t*this.s,r*this.s,u*this.s,f*this.s)}catch(c){}else{i.save();i.setTransform(1,0,0,1,0,0);switch(this.f){case 1:i.translate((t+u)*this.s,r*this.s);i.scale(-this.s,this.s);break;case 2:i.translate(t*this.s,(r+f)*this.s);i.scale(this.s,-this.s);break;case 3:i.translate((t+u)*this.s,(r+f)*this.s);i.scale(-this.s,-this.s)}try{i.drawImage(n,e,o,s,h,0,0,u,f)}catch(c){}i.restore()}},drawImage:function(n,t,i){this.drawScaledImage(n,t,i,n.width,n.height,0,0,n.width,n.height)},drawTransImage:function(n,t,r,u,f,e,o,s,h,c,l,a){i.save();i.setTransform(1,0,0,1,0,0);i.translate(t*this.s,r*this.s);i.rotate(Math.PI*c/180);i.scale(l*this.s/128,a*this.s/128);i.translate(-s,-h);try{i.drawImage(n,u,f,e,o,0,0,e,o)}catch(v){}i.restore()}};bi=0;ee.prototype={lock:function(){this.sav_canvas=f;this.sav_context=i;this.sav_lock=yt;f=this.canvas;i=this.context;yt=!0;i.clearRect(0,0,f.width,f.height);i.save()},unlock:function(){i.restore();f=this.sav_canvas;i=this.sav_context;yt=this.sav_lock;this.image.src=this.canvas.toDataURL()},getWidth:function(){return this.canvas.width},getHeight:function(){return this.canvas.height},getImage:function(){return this.image}};oe.prototype={clear:function(){for(var n=0;n<this.o.length;n++)ue(this.o[n]);this.o=[]},add:function(n,t,i,r,u){this.o[this.o.length]=eu(f,this.s,n,t,i,r);this.o[this.o.length-1].id=u},addArea:function(n,t,i,r,u,e,o,s){this.o[this.o.length]=eu(f,this.s,n,t,i,r,e,o,s);this.o[this.o.length-1].id=u},get:function(n){for(var t=0;t<this.o.length;t++)if(this.o[t].id==n)return this.o[t];return null},check:function(){return this.id},handleEvent:function(n,t){var i;switch(n){case 0:for(i=0;i<this.o.length;i++)if(t==dt(this.o[i])){processEvent(6,this.o[i].id);break}break;case 1:for(i=0;i<this.o.length;i++)if(t==dt(this.o[i])){this.id=-1;break}break;case 2:for(i=0;i<this.o.length;i++)if(t==dt(this.o[i])){this.id=this.o[i].id;break}break;case 3:for(i=0;i<this.o.length;i++)if(t==dt(this.o[i])){processEvent(7,this.o[i].id);break}break;case 14:for(i=0;i<this.o.length;i++)p(this.o[i])}}};gt={int:function(n){return n<0?Math.ceil(n):Math.floor(n)},div:function(n,t){return n<0?Math.ceil(n/t):Math.floor(n/t)},mod:function(n,t){return n<0?(n=-n,-(n-Math.floor(n/t)*t)):n-Math.floor(n/t)*t}};se.prototype={next:function(n){return Math.random()<.5?-Math.floor(Math.random()*n):Math.floor(Math.random()*n)},nextInt:function(){return Math.random()<.5?-Math.floor(Math.random()*2147483648):Math.floor(Math.random()*2147483648)}};he={arraycopy:function(n,t,i,r,u){for(var f=0;f<u;f++)i[r+f]=n[t+f]}};ce.prototype={size:function(){return this.n},isEmpty:function(){return this.n==0},elementAt:function(n){return this.o[n]},firstElement:function(){return this.o[0]},lastElement:function(){return this.o[this.n-1]},setElementAt:function(n,t){t>=0&&t<this.n&&(this.o[t]=n)},removeElementAt:function(n){if(n>=0&&n<this.n){for(this.i=n;this.i<this.n-1;this.i++)this.o[this.i]=this.o[this.i+1];this.n--}},insertElementAt:function(n,t){if(t>=0&&t<this.n){for(this.i=this.n-1;this.i>=t;this.i--)this.o[this.i+1]=this.o[this.i];this.o[t]=n;this.n++}},addElement:function(n){this.o[this.n]=n;this.n++},removeAllElements:function(){this.n=0}};su="Tue, 01 Jan 2030 00:00:00 GMT";lu.prototype={set:function(n){nr(n,this._header,this._value)}};n.canUseCanvas=ef;n.d2js_onload=bs;n.d2js_onorientationchange=ks;n.d2js_onresize=ds;n.setTimer=sf;n.killTimer=gs;n.setRepaintFunc=nh;n.removeMouseEvent=th;n.addMouseEvent=cf;n.setCurrent=ih;n.setGraphics=rh;n.getCurrent=uh;n.getCurrentContext=fh;n.getGraphics=eh;n.setCanvas=oh;n.setContext=sh;n.initLock=lf;n.setCanvasSize=hh;n.getWidth=ar;n.getHeight=vr;n.getBrowserWidth=ch;n.getBrowserHeight=lh;n.getOrientation=ah;n.readParameter=af;n.readParameters=vh;n.getParameter=yh;n.getResImage=ph;n.getResString=wh;n.currentTimeMillis=ut;n.setKeyArray=bh;n.keyBit=yr;n.getKeypadState=gh;n.clearLayout=tc;n.addLayout=vf;n.addLayoutArea=ic;n.getLayout=rc;n.checkLayout=ot;n.getLayoutState=uc;n.layoutBit=fc;n.getMouseX=ec;n.getMouseY=oc;n.touchNum=lc;n.getTouchX=ac;n.getTouchY=vc;n.launch=yc;n.setFont=dr;n.stringWidth=gr;n.fontHeight=nu;n.canUseAudio=bf;n.canPlayType=pc;n.loadAudio=bc;n.loadAudioEx=iu;n.loadAndPlayAudio=kc;n.loadAndPlayAudioEx=kf;n.isLoaded=dc;n.stopAudio=df;n.stopAudioEx=gf;n.reloadAudio=gc;n.playAudio=nl;n.playAudioEx=ru;n.isPlaying=tl;n.isPlayingEx=ne;n.pauseAudio=te;n.restartAudio=il;n.setVolume=rl;n.getVolume=ul;n.getCurrentTime=fl;n.loadAndPlayAudioSprite=sl;n.playAudioSprite=uu;n.buttonElement=dt;n.buttonX=hl;n.buttonY=cl;n.buttonWidth=ll;n.buttonHeight=al;n.setButtonSrc=fu;n.updateButtonPos=p;n.setButtonX=vl;n.setButtonY=yl;n.setButtonPos=pl;n.setButtonWidth=wl;n.setButtonHeight=bl;n.setButtonSize=kl;n.setButtonPosSize=ie;n.setButtonArea=re;n.createButton=eu;n.createButtonArea=dl;n.attachButton=gl;n.attachButtonArea=na;n.removeButton=ue;n._Graphics=ou;n._ScalableGraphics=fe;n.loadImage=ta;n.isImageBusy=ia;n._Image=ee;n._Layout=oe;n._Math=gt;n._INT=ra;n._DIV=ua;n._MOD=fa;n._Random=se;n._System=he;n._Vector=ce;n.canUseCookie=ea;n.setExpiresDate=oa;n.cookieNum=sa;n.getCookieKey=ha;n.getCookie=le;n.setCookie=cu;n.clearCookie=ca;n.beginCookieRead=la;n.cookieRead=aa;n.endCookieRead=va;n.beginCookieWrite=ya;n.cookieWrite=pa;n.endCookieWrite=wa;n._HttpRequestHeader=lu;n.httpInitHeader=ba;n.httpAddHeader=ka;n.httpHeader=da;n.httpGet=ga;n.httpPost=nv;n.canUseStorage=tv;n.storageNum=au;n.getStorageKey=ve;n.getStorage=ye;n.setStorage=vu;n.clearStorage=iv;n.beginStorageRead=rv;n.storageRead=uv;n.endStorageRead=fv;n.beginStorageWrite=ev;n.storageWrite=ov;n.endStorageWrite=sv;n._KEY_BACKSPACE=8;n._KEY_TAB=9;n._KEY_ENTER=13;n._KEY_SELECT=n._KEY_ENTER;n._KEY_SHIFT=16;n._KEY_CTRL=17;n._KEY_SPACE=32;n._KEY_LEFT=37;n._KEY_UP=38;n._KEY_RIGHT=39;n._KEY_DOWN=40;n._KEY_0=48;n._KEY_1=49;n._KEY_2=50;n._KEY_3=51;n._KEY_4=52;n._KEY_5=53;n._KEY_6=54;n._KEY_7=55;n._KEY_8=56;n._KEY_9=57;n._KEY_A=65;n._KEY_B=66;n._KEY_C=67;n._KEY_D=68;n._KEY_E=69;n._KEY_F=70;n._KEY_G=71;n._KEY_H=72;n._KEY_I=73;n._KEY_J=74;n._KEY_K=75;n._KEY_L=76;n._KEY_M=77;n._KEY_N=78;n._KEY_O=79;n._KEY_P=80;n._KEY_Q=81;n._KEY_R=82;n._KEY_S=83;n._KEY_T=84;n._KEY_U=85;n._KEY_V=86;n._KEY_W=87;n._KEY_X=88;n._KEY_Y=89;n._KEY_Z=90;n._ROP_COPY="source-over";n._ROP_ADD="lighter";n._FLIP_NONE=0;n._FLIP_HORIZONTAL=1;n._FLIP_VERTICAL=2;n._FLIP_ROTATE=3;n._BUTTON_DOWN_EVENT=0;n._BUTTON_OUT_EVENT=1;n._BUTTON_OVER_EVENT=2;n._BUTTON_UP_EVENT=3;n._KEY_PRESSED_EVENT=4;n._KEY_RELEASED_EVENT=5;n._LAYOUT_DOWN_EVENT=6;n._LAYOUT_UP_EVENT=7;n._MOUSE_DOWN_EVENT=8;n._MOUSE_MOVE_EVENT=9;n._MOUSE_OUT_EVENT=10;n._MOUSE_OVER_EVENT=11;n._MOUSE_UP_EVENT=12;n._ORIENTATIONCHANGE_EVENT=13;n._RESIZE_EVENT=14;n._TOUCH_START_EVENT=15;n._TOUCH_MOVE_EVENT=16;n._TOUCH_END_EVENT=17})(window)