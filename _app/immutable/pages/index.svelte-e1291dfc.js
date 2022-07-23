import{S as wt,i as Dt,s as It,l as m,u as j,a as W,m as b,p as y,v as E,h as r,c as A,q as o,b as k,J as s,K as ft,L as tt,w as Q,n as at,M as St,N as yt,O as ut,e as dt}from"../chunks/index-6a061858.js";function vt(u,t,l){const i=u.slice();i[16]=t[l].temp,i[17]=t[l].humidity,i[18]=t[l].uvi,i[19]=t[l].wind_speed,i[20]=t[l].weather,i[24]=l;const c=Object.values(i[16]);i[21]=c;const v=i[21].reduce((e,a)=>e+a)/i[21].length;return i[22]=v,i}function et(u){const t=u.slice(),l=5;return t[15]=l,t}function lt(u){const t=u.slice(),l=t[2];return t[16]=l.temp,t[17]=l.humidity,t[18]=l.uvi,t[19]=l.wind_speed,t}function _t(u,t,l){const i=u.slice();return i[25]=t[l].name,i[26]=t[l].lat,i[27]=t[l].lon,i}function kt(u){let t,l,i,c,v,e,a,_,h,d,p,M,T,q,F,V,I,H,S,B,w,D,C;return{c(){t=m("button"),l=j("Austin"),i=W(),c=m("button"),v=j("Chicago"),e=W(),a=m("button"),_=j("New York"),h=W(),d=m("button"),p=j("Orlando"),M=W(),T=m("button"),q=j("San Francisco"),F=W(),V=m("button"),I=j("Seat Pleasant"),H=W(),S=m("button"),B=j("Denver"),w=W(),D=m("button"),C=j("Atlanta"),this.h()},l(n){t=b(n,"BUTTON",{"data-lat":!0,"data-lon":!0,class:!0});var f=y(t);l=E(f,"Austin"),f.forEach(r),i=A(n),c=b(n,"BUTTON",{"data-lat":!0,"data-lon":!0,class:!0});var O=y(c);v=E(O,"Chicago"),O.forEach(r),e=A(n),a=b(n,"BUTTON",{"data-lat":!0,"data-lon":!0,class:!0});var P=y(a);_=E(P,"New York"),P.forEach(r),h=A(n),d=b(n,"BUTTON",{"data-lat":!0,"data-lon":!0,class:!0});var N=y(d);p=E(N,"Orlando"),N.forEach(r),M=A(n),T=b(n,"BUTTON",{"data-lat":!0,"data-lon":!0,class:!0});var G=y(T);q=E(G,"San Francisco"),G.forEach(r),F=A(n),V=b(n,"BUTTON",{"data-lat":!0,"data-lon":!0,class:!0});var R=y(V);I=E(R,"Seat Pleasant"),R.forEach(r),H=A(n),S=b(n,"BUTTON",{"data-lat":!0,"data-lon":!0,class:!0});var z=y(S);B=E(z,"Denver"),z.forEach(r),w=A(n),D=b(n,"BUTTON",{"data-lat":!0,"data-lon":!0,class:!0});var J=y(D);C=E(J,"Atlanta"),J.forEach(r),this.h()},h(){o(t,"data-lat","30.2711286"),o(t,"data-lon","-97.7436995"),o(t,"class","svelte-1tfj8i4"),o(c,"data-lat","41.8755616"),o(c,"data-lon","-87.6244212"),o(c,"class","svelte-1tfj8i4"),o(a,"data-lat","40.7127281"),o(a,"data-lon","-74.0060152"),o(a,"class","svelte-1tfj8i4"),o(d,"data-lat","28.5421109"),o(d,"data-lon","-81.3790304"),o(d,"class","svelte-1tfj8i4"),o(T,"data-lat","37.7790262"),o(T,"data-lon","-122.419906"),o(T,"class","svelte-1tfj8i4"),o(V,"data-lat","38.8879957"),o(V,"data-lon","-76.8987649"),o(V,"class","svelte-1tfj8i4"),o(S,"data-lat","39.7392364"),o(S,"data-lon","-104.9848623"),o(S,"class","svelte-1tfj8i4"),o(D,"data-lat","33.7489924"),o(D,"data-lon","-84.3902644"),o(D,"class","svelte-1tfj8i4")},m(n,f){k(n,t,f),s(t,l),k(n,i,f),k(n,c,f),s(c,v),k(n,e,f),k(n,a,f),s(a,_),k(n,h,f),k(n,d,f),s(d,p),k(n,M,f),k(n,T,f),s(T,q),k(n,F,f),k(n,V,f),s(V,I),k(n,H,f),k(n,S,f),s(S,B),k(n,w,f),k(n,D,f),s(D,C)},p:at,d(n){n&&r(t),n&&r(i),n&&r(c),n&&r(e),n&&r(a),n&&r(h),n&&r(d),n&&r(M),n&&r(T),n&&r(F),n&&r(V),n&&r(H),n&&r(S),n&&r(w),n&&r(D)}}}function Nt(u){let t,l=[...u[0].history].reverse(),i=[];for(let c=0;c<l.length;c+=1)i[c]=ht(_t(u,l,c));return{c(){for(let c=0;c<i.length;c+=1)i[c].c();t=dt()},l(c){for(let v=0;v<i.length;v+=1)i[v].l(c);t=dt()},m(c,v){for(let e=0;e<i.length;e+=1)i[e].m(c,v);k(c,t,v)},p(c,v){if(v&1){l=[...c[0].history].reverse();let e;for(e=0;e<l.length;e+=1){const a=_t(c,l,e);i[e]?i[e].p(a,v):(i[e]=ht(a),i[e].c(),i[e].m(t.parentNode,t))}for(;e<i.length;e+=1)i[e].d(1);i.length=l.length}},d(c){yt(i,c),c&&r(t)}}}function ht(u){let t,l=u[25]+"",i,c,v;return{c(){t=m("button"),i=j(l),this.h()},l(e){t=b(e,"BUTTON",{"data-lat":!0,"data-lon":!0,class:!0});var a=y(t);i=E(a,l),a.forEach(r),this.h()},h(){o(t,"data-lat",c=u[26]),o(t,"data-lon",v=u[27]),o(t,"class","svelte-1tfj8i4")},m(e,a){k(e,t,a),s(t,i)},p(e,a){a&1&&l!==(l=e[25]+"")&&Q(i,l),a&1&&c!==(c=e[26])&&o(t,"data-lat",c),a&1&&v!==(v=e[27])&&o(t,"data-lon",v)},d(e){e&&r(t)}}}function pt(u){let t,l,i=u[16]+"",c,v,e,a,_,h=u[19]+"",d,p,M,T,q,F=u[17]+"",V,I,H,S,B,w,D=u[18]+"",C,n;return{c(){t=m("p"),l=j("Temp: "),c=j(i),v=j(" \xB0F"),e=W(),a=m("p"),_=j("Wind: "),d=j(h),p=j(" MPH"),M=W(),T=m("p"),q=j("Humidity: "),V=j(F),I=j("%"),H=W(),S=m("p"),B=j("UV Index: "),w=m("span"),C=j(D),this.h()},l(f){t=b(f,"P",{class:!0});var O=y(t);l=E(O,"Temp: "),c=E(O,i),v=E(O," \xB0F"),O.forEach(r),e=A(f),a=b(f,"P",{class:!0});var P=y(a);_=E(P,"Wind: "),d=E(P,h),p=E(P," MPH"),P.forEach(r),M=A(f),T=b(f,"P",{class:!0});var N=y(T);q=E(N,"Humidity: "),V=E(N,F),I=E(N,"%"),N.forEach(r),H=A(f),S=b(f,"P",{class:!0});var G=y(S);B=E(G,"UV Index: "),w=b(G,"SPAN",{class:!0});var R=y(w);C=E(R,D),R.forEach(r),G.forEach(r),this.h()},h(){o(t,"class","svelte-1tfj8i4"),o(a,"class","svelte-1tfj8i4"),o(T,"class","svelte-1tfj8i4"),o(w,"class",n="uv-index "+Et(u[18])+" svelte-1tfj8i4"),o(S,"class","svelte-1tfj8i4")},m(f,O){k(f,t,O),s(t,l),s(t,c),s(t,v),k(f,e,O),k(f,a,O),s(a,_),s(a,d),s(a,p),k(f,M,O),k(f,T,O),s(T,q),s(T,V),s(T,I),k(f,H,O),k(f,S,O),s(S,B),s(S,w),s(w,C)},p(f,O){O&4&&i!==(i=f[16]+"")&&Q(c,i),O&4&&h!==(h=f[19]+"")&&Q(d,h),O&4&&F!==(F=f[17]+"")&&Q(V,F),O&4&&D!==(D=f[18]+"")&&Q(C,D),O&4&&n!==(n="uv-index "+Et(f[18])+" svelte-1tfj8i4")&&o(w,"class",n)},d(f){f&&r(t),f&&r(e),f&&r(a),f&&r(M),f&&r(T),f&&r(H),f&&r(S)}}}function mt(u){let t,l,i,c,v,e=u[1].splice(0,u[15]),a=[];for(let _=0;_<e.length;_+=1)a[_]=bt(vt(u,e,_));return{c(){t=m("h1"),l=j(u[15]),i=j("-Day Forecast:"),c=W(),v=m("div");for(let _=0;_<a.length;_+=1)a[_].c();this.h()},l(_){t=b(_,"H1",{class:!0});var h=y(t);l=E(h,u[15]),i=E(h,"-Day Forecast:"),h.forEach(r),c=A(_),v=b(_,"DIV",{class:!0});var d=y(v);for(let p=0;p<a.length;p+=1)a[p].l(d);d.forEach(r),this.h()},h(){o(t,"class","forecast-title svelte-1tfj8i4"),o(v,"class","forecast-days svelte-1tfj8i4")},m(_,h){k(_,t,h),s(t,l),s(t,i),k(_,c,h),k(_,v,h);for(let d=0;d<a.length;d+=1)a[d].m(v,null)},p(_,h){if(h&34){e=_[1].splice(0,_[15]);let d;for(d=0;d<e.length;d+=1){const p=vt(_,e,d);a[d]?a[d].p(p,h):(a[d]=bt(p),a[d].c(),a[d].m(v,null))}for(;d<a.length;d+=1)a[d].d(1);a.length=e.length}},d(_){_&&r(t),_&&r(c),_&&r(v),yt(a,_)}}}function bt(u){let t,l,i=u[5](u[24]+1)+"",c,v,e,a,_,h,d,p=u[22].toFixed(1)+"",M,T,q,F,V,I=u[19]+"",H,S,B,w,D,C=u[17]+"",n,f,O;return{c(){t=m("div"),l=m("div"),c=j(i),v=W(),e=m("img"),_=W(),h=m("div"),d=j("Temp: "),M=j(p),T=j(" \xB0F"),q=W(),F=m("div"),V=j("Wind: "),H=j(I),S=j(" MPH"),B=W(),w=m("div"),D=j("Humidity: "),n=j(C),f=j("%"),O=W(),this.h()},l(P){t=b(P,"DIV",{class:!0});var N=y(t);l=b(N,"DIV",{class:!0});var G=y(l);c=E(G,i),G.forEach(r),v=A(N),e=b(N,"IMG",{class:!0,src:!0,alt:!0}),_=A(N),h=b(N,"DIV",{class:!0});var R=y(h);d=E(R,"Temp: "),M=E(R,p),T=E(R," \xB0F"),R.forEach(r),q=A(N),F=b(N,"DIV",{class:!0});var z=y(F);V=E(z,"Wind: "),H=E(z,I),S=E(z," MPH"),z.forEach(r),B=A(N),w=b(N,"DIV",{class:!0});var J=y(w);D=E(J,"Humidity: "),n=E(J,C),f=E(J,"%"),J.forEach(r),O=A(N),N.forEach(r),this.h()},h(){o(l,"class","date svelte-1tfj8i4"),o(e,"class","weather-icon svelte-1tfj8i4"),ut(e.src,a=`http://openweathermap.org/img/wn/${u[20][0].icon}@2x.png`)||o(e,"src",a),o(e,"alt",""),o(h,"class","temperature svelte-1tfj8i4"),o(F,"class","wind_speed svelte-1tfj8i4"),o(w,"class","Humidity svelte-1tfj8i4"),o(t,"class","forcast-item svelte-1tfj8i4")},m(P,N){k(P,t,N),s(t,l),s(l,c),s(t,v),s(t,e),s(t,_),s(t,h),s(h,d),s(h,M),s(h,T),s(t,q),s(t,F),s(F,V),s(F,H),s(F,S),s(t,B),s(t,w),s(w,D),s(w,n),s(w,f),s(t,O)},p(P,N){N&2&&!ut(e.src,a=`http://openweathermap.org/img/wn/${P[20][0].icon}@2x.png`)&&o(e,"src",a),N&2&&p!==(p=P[22].toFixed(1)+"")&&Q(M,p),N&2&&I!==(I=P[19]+"")&&Q(H,I),N&2&&C!==(C=P[17]+"")&&Q(n,C)},d(P){P&&r(t)}}}function Ot(u){let t,l,i,c,v,e,a,_,h,d,p,M,T,q,F,V,I=(u[4]||"")+"",H,S,B,w,D,C,n,f,O,P,N,G;function R(U,Y){return U[0].history?Nt:kt}let z=R(u),J=z(u),K=u[2]&&pt(lt(u)),L=u[1]&&mt(et(u));return{c(){t=m("header"),l=m("h1"),i=j("Weather Dashboard"),c=W(),v=m("main"),e=m("aside"),a=m("h1"),_=j("Search for a City:"),h=W(),d=m("div"),p=m("input"),M=W(),T=m("button"),q=j("Search"),F=W(),V=m("div"),H=j(I),S=W(),B=m("div"),J.c(),w=W(),D=m("div"),C=m("div"),n=m("h1"),f=W(),K&&K.c(),O=W(),P=m("div"),L&&L.c(),this.h()},l(U){t=b(U,"HEADER",{class:!0});var Y=y(t);l=b(Y,"H1",{class:!0});var st=y(l);i=E(st,"Weather Dashboard"),st.forEach(r),Y.forEach(r),c=A(U),v=b(U,"MAIN",{class:!0});var $=y(v);e=b($,"ASIDE",{class:!0});var X=y(e);a=b(X,"H1",{class:!0});var it=y(a);_=E(it,"Search for a City:"),it.forEach(r),h=A(X),d=b(X,"DIV",{class:!0});var Z=y(d);p=b(Z,"INPUT",{type:!0,class:!0,placeholder:!0}),M=A(Z),T=b(Z,"BUTTON",{class:!0});var rt=y(T);q=E(rt,"Search"),rt.forEach(r),F=A(Z),V=b(Z,"DIV",{class:!0});var nt=y(V);H=E(nt,I),nt.forEach(r),Z.forEach(r),S=A(X),B=b(X,"DIV",{class:!0});var ot=y(B);J.l(ot),ot.forEach(r),X.forEach(r),w=A($),D=b($,"DIV",{class:!0});var g=y(D);C=b(g,"DIV",{class:!0});var x=y(C);n=b(x,"H1",{class:!0});var Tt=y(n);Tt.forEach(r),f=A(x),K&&K.l(x),x.forEach(r),O=A(g),P=b(g,"DIV",{class:!0});var ct=y(P);L&&L.l(ct),ct.forEach(r),g.forEach(r),$.forEach(r),this.h()},h(){o(l,"class","svelte-1tfj8i4"),o(t,"class","svelte-1tfj8i4"),o(a,"class","svelte-1tfj8i4"),o(p,"type","text"),o(p,"class","search-box svelte-1tfj8i4"),o(p,"placeholder","San Diego"),o(T,"class","svelte-1tfj8i4"),o(V,"class","search--message svelte-1tfj8i4"),o(d,"class","search-wrapper svelte-1tfj8i4"),o(B,"class","history svelte-1tfj8i4"),o(e,"class","svelte-1tfj8i4"),o(n,"class","svelte-1tfj8i4"),o(C,"class","weather-info svelte-1tfj8i4"),o(P,"class","forecast svelte-1tfj8i4"),o(D,"class","display svelte-1tfj8i4"),o(v,"class","svelte-1tfj8i4")},m(U,Y){k(U,t,Y),s(t,l),s(l,i),k(U,c,Y),k(U,v,Y),s(v,e),s(e,a),s(a,_),s(e,h),s(e,d),s(d,p),ft(p,u[3]),s(d,M),s(d,T),s(T,q),s(d,F),s(d,V),s(V,H),s(e,S),s(e,B),J.m(B,null),s(v,w),s(v,D),s(D,C),s(C,n),s(C,f),K&&K.m(C,null),s(D,O),s(D,P),L&&L.m(P,null),N||(G=[tt(p,"keypress",u[8]),tt(p,"input",u[9]),tt(T,"click",u[10]),tt(B,"click",u[7])],N=!0)},p(U,[Y]){Y&8&&p.value!==U[3]&&ft(p,U[3]),Y&16&&I!==(I=(U[4]||"")+"")&&Q(H,I),z===(z=R(U))&&J?J.p(U,Y):(J.d(1),J=z(U),J&&(J.c(),J.m(B,null))),U[2]?K?K.p(lt(U),Y):(K=pt(lt(U)),K.c(),K.m(C,null)):K&&(K.d(1),K=null),U[1]?L?L.p(et(U),Y):(L=mt(et(U)),L.c(),L.m(P,null)):L&&(L.d(1),L=null)},i:at,o:at,d(U){U&&r(t),U&&r(c),U&&r(v),J.d(),K&&K.d(),L&&L.d(),N=!1,St(G)}}}const jt="242ac63bb227a6e15c4c2da3af2251d5";function Et(u){const t=(l,i,c)=>i<=l&&l<=c;if(t(u,1,2))return"low";if(t(u,3,5))return"moderate";if(t(u,6,7))return"high";if(t(u,8,10))return"veryhigh";if(t(u,11,1/0))return"extreme"}function Ht(u,t,l){const i=new Date().getTime(),c=I=>{const H=86400*I;return new Date(i+H).toLocaleDateString()},v=localStorage.getItem("weather")||"{}";let e=JSON.parse(v),{dailyForecast:a}=e,_,h,d;async function p(I=h,H=5,S=jt){const w=(await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${I}&limit=${H}&appid=${S}`).then(D=>D.json()))[0];if(w){w.name;const D=e.history||[];D.push(w),M(w.lat,w.lon),l(0,e={...e,history:D.slice(-8)}),console.log(e),localStorage.setItem("weather",JSON.stringify(e))}else l(4,d="No city found"),setTimeout(()=>l(4,d=""),1500)}async function M(I,H,S=jt){const B=await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${I}&lon=${H}&appid=${S}`).then(w=>w.json());l(2,_=B.current),l(1,a=B.daily),l(0,e.dailyForecast=a,e),localStorage.setItem("weather",JSON.stringify(e))}function T({target:I}){if(I===this)return;I.textContent;const H=I.dataset.lat,S=I.dataset.lon;M(H,S)}const q=({key:I})=>I==="Enter"&&p();function F(){h=this.value,l(3,h)}return[e,a,_,h,d,c,p,T,q,F,()=>p()]}class Pt extends wt{constructor(t){super(),Dt(this,t,Ht,Ot,It,{})}}export{Pt as default};