import{d as e,g as s,A as a,p as l,q as t,s as r,o as c,f as n,w as y,e as o,h as p,u as k,c as i,F as u,b as d,i as f,t as _,y as m,v as g,l as h}from"./index-55845ce0.js";import{_ as C,a as w}from"./index.f4d2668a.js";import{_ as v}from"./_plugin-vue_export-helper.1b428a4d.js";const b=["1","2","3","4","5","6","7","8","9","0"],S=["1","2","3","4","5","6","7","8","9",".","0"],x=["1","2","3","4","5","6","7","8","9","X","0"],j=["京","津","渝","沪","冀","晋","辽","吉","黑","苏","浙","皖","闽","赣","鲁","豫","鄂","湘","粤","琼","川","贵","云","陕","甘","青","蒙","桂","宁","新","藏","港","澳","使","领","警","学"],A=["1","2","3","4","5","6","7","8","9","0","Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];function $(){return function(e){const s=e.slice();for(let a=e.length-1;a>=0;a--){const e=~~(Math.random()*(a+1)),l=s[e];s[e]=s[a],s[a]=l}return s}(b)}const I=v(e({options:{virtualHost:!0,styleIsolation:"shared"},__name:"keyboard",props:{rootStyle:[String,Object,Array],rootClass:String,type:{type:String,default:"number"}},emits:["input","delete"],setup(e,{expose:v,emit:I}){const B=e,F=w("keyboard"),H=e=>{I("input",e)},M=()=>{I("delete")};v({shuffle(){O.value=$()},toggle(){E()}});const O=s([]);a((()=>B.type),(()=>{"random"===B.type&&(O.value=$())}),{immediate:!0});const X=s("chinese"),q=l((()=>({chinese:"ABC",english:"省份"}[X.value]))),D=l((()=>{if("english"===X.value)return A.length-8;const e=j.length%10;return j.length-(e>7?0:e+1)})),E=()=>{X.value="chinese"===X.value?"english":"chinese"},G=l((()=>t(F.b(),F.m(B.type),B.rootClass))),J=l((()=>r(B.rootStyle))),K=l((()=>t(F.e("key-wrapper"),F.em("key-wrapper","toggle")))),L=l((()=>t(F.e("key-wrapper"),F.em("key-wrapper","backspace"))));return(e,s)=>{const a=h;return c(),n(a,{class:p(k(G)),style:m(k(J))},{default:y((()=>[o(a,{class:p(k(F).e("content"))},{default:y((()=>["number"===e.type?(c(!0),i(u,{key:0},d(k(b),(e=>(c(),n(a,{key:e,class:p(k(t)(k(F).e("key-wrapper"),k(F).em("key-wrapper",e))),onClick:s=>H(e)},{default:y((()=>[o(a,{class:p(k(F).e("key"))},{default:y((()=>[f(_(e),1)])),_:2},1032,["class"])])),_:2},1032,["class","onClick"])))),128)):"digit"===e.type?(c(!0),i(u,{key:1},d(k(S),(e=>(c(),n(a,{key:e,class:p(k(t)(k(F).e("key-wrapper"),k(F).em("key-wrapper",e))),onClick:s=>H(e)},{default:y((()=>[o(a,{class:p(k(F).e("key"))},{default:y((()=>[f(_(e),1)])),_:2},1032,["class"])])),_:2},1032,["class","onClick"])))),128)):"idcard"===e.type?(c(!0),i(u,{key:2},d(k(x),(e=>(c(),n(a,{key:e,class:p(k(t)(k(F).e("key-wrapper"),k(F).em("key-wrapper",e))),onClick:s=>H(e)},{default:y((()=>[o(a,{class:p(k(F).e("key"))},{default:y((()=>[f(_(e),1)])),_:2},1032,["class"])])),_:2},1032,["class","onClick"])))),128)):"random"===e.type?(c(!0),i(u,{key:3},d(O.value,(e=>(c(),n(a,{key:e,class:p(k(t)(k(F).e("key-wrapper"),k(F).em("key-wrapper",e))),onClick:s=>H(e)},{default:y((()=>[o(a,{class:p(k(F).e("key"))},{default:y((()=>[f(_(e),1)])),_:2},1032,["class"])])),_:2},1032,["class","onClick"])))),128)):"plate"===e.type?(c(),i(u,{key:4},["chinese"===X.value?(c(),i(u,{key:0},[(c(!0),i(u,null,d(k(j),((e,s)=>(c(),n(a,{key:e,class:p(k(t)(k(F).e("key-wrapper"),k(F).em("key-wrapper",e))),style:m(`order: ${s}`),onClick:s=>H(e)},{default:y((()=>[o(a,{class:p(k(F).e("key"))},{default:y((()=>[f(_(e),1)])),_:2},1032,["class"])])),_:2},1032,["class","style","onClick"])))),128)),o(a,{class:p(k(F).e("intercept")),style:m(`order: ${k(D)}`)},null,8,["class","style"])],64)):g("",!0),"english"===X.value?(c(!0),i(u,{key:1},d(k(A),((e,s)=>(c(),n(a,{key:e,style:m(`order: ${s}`),class:p(k(t)(k(F).e("key-wrapper"),k(F).em("key-wrapper",e))),onClick:s=>H(e)},{default:y((()=>[o(a,{class:p(k(F).e("key"))},{default:y((()=>[f(_(e),1)])),_:2},1032,["class"])])),_:2},1032,["style","class","onClick"])))),128)):g("",!0),o(a,{class:p(k(K)),style:m(`order: ${k(D)}`),onClick:E},{default:y((()=>[o(a,{class:p(k(F).e("key"))},{default:y((()=>[f(_(k(q)),1)])),_:1},8,["class"])])),_:1},8,["class","style"])],64)):g("",!0),o(a,{class:p(k(L)),style:{order:"100"},onClick:M},{default:y((()=>[o(a,{class:p(k(F).e("key"))},{default:y((()=>[o(C,{name:"backspace"})])),_:1},8,["class"])])),_:1},8,["class"])])),_:1},8,["class"])])),_:1},8,["class","style"])}}}),[["__scopeId","data-v-8c8d9e1e"]]);export{I as _};