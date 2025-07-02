import{_ as p,c as l,w as t,r as o,o as u,a as k,b as n,d as s}from"./index-bS9janvH.js";const i={};function r(d,a){const e=o("SCMarkdown"),c=o("SCFrontMatterProvider");return u(),l(c,{"front-matter":"%7B%22nav%22%3A%22%E5%B7%A5%E5%85%B7%22%2C%22title%22%3A%22%E5%85%A8%E5%B1%80%E7%8A%B6%E6%80%81%22%2C%22group%22%3A%7B%22title%22%3A%22%E5%B7%A5%E7%A8%8B%E5%8C%96%22%7D%7D"},{default:t(()=>[k(e,null,{default:t(()=>a[0]||(a[0]=[n("h2",{id:"介绍"},[s("介绍"),n("a",{class:"sc-anchor",href:"#介绍"},"#")],-1),n("p",null,"全局状态存储库允许你跨页面、跨组件共享状态。",-1),n("p",null,[s("下面演示如何使用 "),n("code",null,"pinia"),s(" 以及编写持久化全局状态插件。")],-1),n("h2",{id:"安装pinia"},[s("安装 pinia"),n("a",{class:"sc-anchor",href:"#安装pinia"},"#")],-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-bash"},[n("code",{class:"language-bash"},[n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(` pinia@2
`)])])],-1),n("p",null,[s("必须安装 "),n("code",null,"pinia@2"),s(" 版本，更高版本不支持。")],-1),n("h2",{id:"创建pinia实例并注册"},[s("创建 pinia 实例并注册"),n("a",{class:"sc-anchor",href:"#创建pinia实例并注册"},"#")],-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" createPinia "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'pinia'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" createSSRApp "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"const"),s(" pinia "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"createPinia"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"const"),s(" app "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"createSSRApp"),n("span",{class:"token punctuation"},"("),s("App"),n("span",{class:"token punctuation"},")"),s(`

app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("pinia"),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1),n("h2",{id:"创建store"},[s("创建 store"),n("a",{class:"sc-anchor",href:"#创建store"},"#")],-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[n("span",{class:"token comment"},"// stores/user.ts"),s(`

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineStore "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'pinia'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(" useUserStore "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"defineStore"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" token "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
    token`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1),n("h2",{id:"使用"},[s("使用"),n("a",{class:"sc-anchor",href:"#使用"},"#")],-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-html"},[n("code",{class:"language-html"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"setup"),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
  `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useUserStore "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@/stores/user'"),s(`

  `),n("span",{class:"token keyword"},"const"),s(" userStore "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useUserStore"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

  userStore`),n("span",{class:"token punctuation"},"."),s("token "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'QWERTYUIOP'"),s(`

  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("userStore"),n("span",{class:"token punctuation"},"."),s("token"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),n("h2",{id:"持久化全局状态"},[s("持久化全局状态"),n("a",{class:"sc-anchor",href:"#持久化全局状态"},"#")],-1),n("p",null,[s("在 "),n("code",null,"pinia"),s(" 中使用 "),n("code",null,"Persist"),s(" 将需要的全局状态进行持久化处理。")],-1),n("h3",{id:"定义pinia插件"},[s("定义 pinia 插件"),n("a",{class:"sc-anchor",href:"#定义pinia插件"},"#")],-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[n("span",{class:"token comment"},"// stores/plugin.ts"),s(`

`),n("span",{class:"token keyword"},"import"),s(" persist "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@/utils/persist'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"PiniaPluginContext"),s(),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'pinia'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" watch "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"declare"),s(),n("span",{class:"token keyword"},"module"),s(),n("span",{class:"token string"},"'pinia'"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// eslint-disable-next-line @typescript-eslint/no-unused-vars"),s(`
  `),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},[s("DefineStoreOptionsBase"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"S"),n("span",{class:"token punctuation"},","),s(" Store"),n("span",{class:"token operator"},">")]),s(),n("span",{class:"token punctuation"},"{"),s(`
    persist`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      pick`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"keyof"),s(),n("span",{class:"token constant"},"S"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"piniaPluginPersist"),n("span",{class:"token punctuation"},"("),s("context"),n("span",{class:"token operator"},":"),s(" PiniaPluginContext"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(`
    store`),n("span",{class:"token punctuation"},","),s(`
    options`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(" persist"),n("span",{class:"token operator"},":"),s(" storePersist "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(` context

  `),n("span",{class:"token keyword"},"const"),s(" pickKeys "),n("span",{class:"token operator"},"="),s(" storePersist"),n("span",{class:"token operator"},"?."),s("pick "),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`

  `),n("span",{class:"token keyword"},"const"),s(" persistKey "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"pinia:"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("store"),n("span",{class:"token punctuation"},"."),s("$id"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),s(`

  `),n("span",{class:"token keyword"},"const"),s(" localData "),n("span",{class:"token operator"},"="),s(" persist"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),s("persistKey"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`

  store`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"$patch"),n("span",{class:"token punctuation"},"("),s("localData"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),s(`
    pickKeys`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" store"),n("span",{class:"token punctuation"},"["),s("key"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      persist`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),s(`
        persistKey`),n("span",{class:"token punctuation"},","),s(`
        Object`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fromEntries"),n("span",{class:"token punctuation"},"("),s("pickKeys"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"["),s("key"),n("span",{class:"token punctuation"},","),s(" store"),n("span",{class:"token punctuation"},"["),s("key"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),n("h3",{id:"注册插件"},[s("注册插件"),n("a",{class:"sc-anchor",href:"#注册插件"},"#")],-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[n("span",{class:"token comment"},"// stores/index.ts"),s(`

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" createPinia "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'pinia'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" piniaPluginPersist "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./plugin'"),s(`

`),n("span",{class:"token keyword"},"const"),s(" pinia "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"createPinia"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

pinia`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("piniaPluginPersist"),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1),n("h3",{id:"声明需要持久化的全局状态"},[s("声明需要持久化的全局状态"),n("a",{class:"sc-anchor",href:"#声明需要持久化的全局状态"},"#")],-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[n("span",{class:"token comment"},"// stores/user.ts"),s(`

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineStore "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'pinia'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(" useUserStore "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"defineStore"),n("span",{class:"token punctuation"},"("),s(`
  `),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" token "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      token`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    persist`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      pick`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'token'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1),n("p",null,[s("如上，在 "),n("code",null,"defineStore"),s(" 第三个参数的选项对象中，"),n("code",null,"persist.pick"),s(" 数组中声明的状态就是要持久化处理的。")],-1),n("p",null,"在应用启动阶段，会读取硬盘中的状态并初始化；状态值改变时，会保存到硬盘中。",-1)])),_:1})]),_:1})}const f=p(i,[["render",r]]);export{f as default};
