import{E as e,d as s,G as a,g as l,A as t,p as c,o as r,f as n,w as y,e as o,h as p,u as k,c as u,F as i,b as d,q as f,i as _,t as m,x as v,s as C,z as h,l as w}from"./index-cDBoG4Q4.js";import{a as g,b,_ as x}from"./index.DPvFFOke.js";const $=e.keyboard,A=["1","2","3","4","5","6","7","8","9","0"],I=["1","2","3","4","5","6","7","8","9",".","0"],S=["1","2","3","4","5","6","7","8","9","X","0"],j=["京","津","渝","沪","冀","晋","辽","吉","黑","苏","浙","皖","闽","赣","鲁","豫","鄂","湘","粤","琼","川","贵","云","陕","甘","青","蒙","桂","宁","新","藏","港","澳","使","领","警","学"],B=["1","2","3","4","5","6","7","8","9","0","Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];function E(){return function(e){const s=e.slice();for(let a=e.length-1;a>=0;a--){const e=~~(Math.random()*(a+1)),l=s[e];s[e]=s[a],s[a]=l}return s}(A)}const F=x(s({options:{virtualHost:!0,styleIsolation:"shared"},__name:"keyboard",props:a({rootStyle:{},rootClass:{},type:{}},$),emits:["input","delete"],setup(e,{expose:s,emit:a}){const x=e,$=a,F=b("keyboard"),G=e=>{$("input",e)},H=()=>{$("delete")};s({shuffle(){M.value=E()},toggle(){D()}});const M=l([]);t((()=>x.type),(()=>{"random"===x.type&&(M.value=E())}),{immediate:!0});const X=l("chinese"),q=c((()=>({chinese:"ABC",english:"省份"}[X.value]))),z=c((()=>{if("english"===X.value)return B.length-8;const e=j.length%10;return j.length-(e>7?0:e+1)})),D=()=>{X.value="chinese"===X.value?"english":"chinese"},J=c((()=>f(F.b(),F.m(x.type),x.rootClass))),K=c((()=>h(x.rootStyle))),L=c((()=>f(F.e("key-wrapper"),F.em("key-wrapper","toggle")))),N=c((()=>f(F.e("key-wrapper"),F.em("key-wrapper","backspace"))));return(e,s)=>{const a=w;return r(),n(a,{class:p(J.value),style:v(K.value)},{default:y((()=>[o(a,{class:p(k(F).e("content"))},{default:y((()=>["number"===e.type?(r(!0),u(i,{key:0},d(k(A),(e=>(r(),n(a,{key:e,class:p(k(f)(k(F).e("key-wrapper"),k(F).em("key-wrapper",e))),onClick:s=>G(e)},{default:y((()=>[o(a,{class:p(k(F).e("key"))},{default:y((()=>[_(m(e),1)])),_:2},1032,["class"])])),_:2},1032,["class","onClick"])))),128)):"digit"===e.type?(r(!0),u(i,{key:1},d(k(I),(e=>(r(),n(a,{key:e,class:p(k(f)(k(F).e("key-wrapper"),k(F).em("key-wrapper",e))),onClick:s=>G(e)},{default:y((()=>[o(a,{class:p(k(F).e("key"))},{default:y((()=>[_(m(e),1)])),_:2},1032,["class"])])),_:2},1032,["class","onClick"])))),128)):"idcard"===e.type?(r(!0),u(i,{key:2},d(k(S),(e=>(r(),n(a,{key:e,class:p(k(f)(k(F).e("key-wrapper"),k(F).em("key-wrapper",e))),onClick:s=>G(e)},{default:y((()=>[o(a,{class:p(k(F).e("key"))},{default:y((()=>[_(m(e),1)])),_:2},1032,["class"])])),_:2},1032,["class","onClick"])))),128)):"random"===e.type?(r(!0),u(i,{key:3},d(M.value,(e=>(r(),n(a,{key:e,class:p(k(f)(k(F).e("key-wrapper"),k(F).em("key-wrapper",e))),onClick:s=>G(e)},{default:y((()=>[o(a,{class:p(k(F).e("key"))},{default:y((()=>[_(m(e),1)])),_:2},1032,["class"])])),_:2},1032,["class","onClick"])))),128)):"plate"===e.type?(r(),u(i,{key:4},["chinese"===X.value?(r(),u(i,{key:0},[(r(!0),u(i,null,d(k(j),((e,s)=>(r(),n(a,{key:e,class:p(k(f)(k(F).e("key-wrapper"),k(F).em("key-wrapper",e))),style:v(`order: ${s}`),onClick:s=>G(e)},{default:y((()=>[o(a,{class:p(k(F).e("key"))},{default:y((()=>[_(m(e),1)])),_:2},1032,["class"])])),_:2},1032,["class","style","onClick"])))),128)),o(a,{class:p(k(F).e("intercept")),style:v(`order: ${z.value}`)},null,8,["class","style"])],64)):C("",!0),"english"===X.value?(r(!0),u(i,{key:1},d(k(B),((e,s)=>(r(),n(a,{key:e,style:v(`order: ${s}`),class:p(k(f)(k(F).e("key-wrapper"),k(F).em("key-wrapper",e))),onClick:s=>G(e)},{default:y((()=>[o(a,{class:p(k(F).e("key"))},{default:y((()=>[_(m(e),1)])),_:2},1032,["class"])])),_:2},1032,["style","class","onClick"])))),128)):C("",!0),o(a,{class:p(L.value),style:v(`order: ${z.value}`),onClick:D},{default:y((()=>[o(a,{class:p(k(F).e("key"))},{default:y((()=>[_(m(q.value),1)])),_:1},8,["class"])])),_:1},8,["class","style"])],64)):C("",!0),o(a,{class:p(N.value),style:{order:"100"},onClick:H},{default:y((()=>[o(a,{class:p(k(F).e("key"))},{default:y((()=>[o(g,{name:"backspace"})])),_:1},8,["class"])])),_:1},8,["class"])])),_:1},8,["class"])])),_:1},8,["class","style"])}}}),[["__scopeId","data-v-9fabc794"]]);export{F as _};