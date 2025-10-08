import{_ as p,c as l,w as t,r as o,o as u,a as r,b as n,d as s}from"./index-BzgAv4Au.js";const k={};function i(d,a){const e=o("SCMarkdown"),c=o("SCFrontMatterProvider");return u(),l(c,{"front-matter":"%7B%22nav%22%3A%22%E5%B7%A5%E5%85%B7%22%2C%22title%22%3A%22%E8%B7%AF%E7%94%B1%22%2C%22group%22%3A%7B%22title%22%3A%22%E5%B7%A5%E7%A8%8B%E5%8C%96%22%7D%2C%22version%22%3A%221.20%2B%22%7D"},{default:t(()=>[r(e,null,{default:t(()=>a[0]||(a[0]=[n("h2",{id:"介绍"},[s("介绍"),n("a",{class:"sc-anchor",href:"#介绍"},"#")],-1),n("p",null,"uniapp 的路由接口已经十分简单了，但有时需要对路由进行统一拦截处理，例如未认证的用户访问需要认证的页面时，弹出登录窗口或跳转到登录页面。",-1),n("p",null,[s("本库实现了 "),n("code",null,"Router"),s(" 类，对 uniapp 路由接口进行简单包装，并添加了以下特性：")],-1),n("ul",null,[n("li",null,"路由守卫"),n("li",null,"自动拼接查询参数"),n("li",null,"自动编码"),n("li",null,"避免多次跳转")],-1),n("h2",{id:"使用"},[s("使用"),n("a",{class:"sc-anchor",href:"#使用"},"#")],-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Router "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'sard-uniapp'"),s(`

`),n("span",{class:"token keyword"},"const"),s(" router "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Router"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

router`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"navigateTo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  url`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'/pages/product-list/index?type=clothing'"),n("span",{class:"token punctuation"},","),s(`
  query`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    page`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
    gender`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'man'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1),n("p",null,[s("Router 实现了和 uniapp 类似的接口，并添加了 "),n("code",null,"query"),s(" 选项，用于配置查询参数。所有查询参数都会使用 "),n("code",null,"encodeURIComponent"),s(" 进行编码，在 "),n("code",null,"onLoad"),s(" 中访问查询参数时，需要使用 "),n("code",null,"decodeURIComponent"),s(" 进行解码。")],-1),n("h2",{id:"接口"},[s("接口"),n("a",{class:"sc-anchor",href:"#接口"},"#")],-1),n("p",null,"和 uniapp 接口几乎一致。",-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[n("span",{class:"token comment"},`/**
 * 保留当前页面，跳转到应用内的某个页面。
 */`),s(`
Router`),n("span",{class:"token function"},"#navigateTo"),n("span",{class:"token punctuation"},"("),s("options"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},`/**
 * 关闭当前页面，跳转到应用内的某个页面。
 */`),s(`
Router`),n("span",{class:"token function"},"#redirectTo"),n("span",{class:"token punctuation"},"("),s("options"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},`/**
 * 关闭所有页面，打开到应用内的某个页面。
 */`),s(`
Router`),n("span",{class:"token function"},"#reLaunch"),n("span",{class:"token punctuation"},"("),s("options"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},`/**
 * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。
 */`),s(`
Router`),n("span",{class:"token function"},"#switchTab"),n("span",{class:"token punctuation"},"("),s("options"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},`/**
 * 关闭当前页面，返回上一页面或多级页面。
 */`),s(`
Router`),n("span",{class:"token function"},"#navigateBack"),n("span",{class:"token punctuation"},"("),s("options"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},`/**
 * 路由守卫，可以阻止跳转或自定义跳转
 */`),s(`
Router`),n("span",{class:"token function"},"#beforeEach"),n("span",{class:"token punctuation"},"("),s("guard"),n("span",{class:"token operator"},":"),s(" RouterGuard"),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1),n("h3",{id:"RouterGuard"},[s("RouterGuard"),n("a",{class:"sc-anchor",href:"#RouterGuard"},"#")],-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"RouterGuard"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s(`
  to`),n("span",{class:"token operator"},":"),s(" Route"),n("span",{class:"token punctuation"},","),s(`
  from`),n("span",{class:"token operator"},":"),s(" Route"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(`
  `),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token builtin"},"boolean"),s(`
  `),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"undefined"),s(`
  `),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"null"),s(`
  `),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"void"),s(`
  `),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token builtin"},"string"),s(`
  `),n("span",{class:"token operator"},"|"),s(` Route
  `),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token builtin"},"Promise"),n("span",{class:"token operator"},"<"),n("span",{class:"token builtin"},"boolean"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"undefined"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token operator"},"|"),s(" Route"),n("span",{class:"token operator"},">"),s(`
`)])])],-1),n("h3",{id:"Route"},[s("Route"),n("a",{class:"sc-anchor",href:"#Route"},"#")],-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"Route"),s(),n("span",{class:"token punctuation"},"{"),s(`
  url`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(`
  query`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" Record"),n("span",{class:"token operator"},"<"),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"any"),n("span",{class:"token operator"},">"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),n("h2",{id:"路由守卫"},[s("路由守卫"),n("a",{class:"sc-anchor",href:"#路由守卫"},"#")],-1),n("p",null,[s("使用 "),n("code",null,"Router#beforeEach"),s(" 方法添加守卫")],-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[n("span",{class:"token keyword"},"const"),s(" authPages "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'/pages/my/profile'"),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token keyword"},"const"),s(" deprecatedPages "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'/pages/activity/spring'"),n("span",{class:"token punctuation"},"]"),s(`

router`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"beforeEach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("to"),n("span",{class:"token punctuation"},","),s(" from"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" userStore "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useUserStore"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// 进入需要认证的页面时，如果没有认证则跳转到登录页"),s(`
  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("authPages"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"includes"),n("span",{class:"token punctuation"},"("),s("to"),n("span",{class:"token punctuation"},"."),s("url"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token operator"},"!"),s("userStore"),n("span",{class:"token punctuation"},"."),s("token"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// 可返回 url 字符串，或者对象"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      url`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'/pages/auth/login'"),n("span",{class:"token punctuation"},","),s(`
      query`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// 登录完可以重定向到之前的页面"),s(`
        redirect`),n("span",{class:"token operator"},":"),s(" to"),n("span",{class:"token punctuation"},"."),s("url"),n("span",{class:"token punctuation"},","),s(`
        query`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stringify"),n("span",{class:"token punctuation"},"("),s("to"),n("span",{class:"token punctuation"},"."),s("query"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("deprecatedPages"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"includes"),n("span",{class:"token punctuation"},"("),s("to"),n("span",{class:"token punctuation"},"."),s("url"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// 返回 false 表示阻止跳转"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token comment"},"// 其他情况则正常跳转"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1)])),_:1})]),_:1})}const f=p(k,[["render",i]]);export{f as default};
