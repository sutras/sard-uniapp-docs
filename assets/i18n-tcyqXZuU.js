import{_ as l,c as p,w as t,r as o,o as u,a as r,b as n,d as s}from"./index-BbSf9m72.js";const k={};function i(d,a){const e=o("SCMarkdown"),c=o("SCFrontMatterProvider");return u(),p(c,{"front-matter":"%7B%22nav%22%3A%22%E6%8C%87%E5%BC%95%22%2C%22title%22%3A%22%E5%9B%BD%E9%99%85%E5%8C%96%22%2C%22order%22%3A0%2C%22group%22%3A%7B%22title%22%3A%22%E8%BF%9B%E9%98%B6%22%2C%22order%22%3A1%7D%7D"},{default:t(()=>[r(e,null,{default:t(()=>a[0]||(a[0]=[n("h2",{id:"介绍"},[s("介绍"),n("a",{class:"sc-anchor",href:"#介绍"},"#")],-1),n("p",null,"默认采用中文作为默认语言，允许切换不同语言。",-1),n("h2",{id:"语言切换"},[s("语言切换"),n("a",{class:"sc-anchor",href:"#语言切换"},"#")],-1),n("p",null,[n("code",null,"sard-uniapp"),s(" 提供了 "),n("code",null,"setLocale"),s(" 函数来切换当前使用的语言。")],-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[n("span",{class:"token comment"},"// main.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" setLocale "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'sard-uniapp'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" enUS "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'sard-uniapp/components/locale/lang/en-US'"),s(`

`),n("span",{class:"token function"},"setLocale"),n("span",{class:"token punctuation"},"("),s("enUS"),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1),n("h2",{id:"支持的语言列表"},[s("支持的语言列表"),n("a",{class:"sc-anchor",href:"#支持的语言列表"},"#")],-1),n("ul",null,[n("li",null,"简体中文（zh-CN）"),n("li",null,"美国英语（en-US）")],-1),n("p",null,[s("如果你需要使用其他的语言，欢迎贡献 "),n("a",{href:"https://github.com/sutras/sard-uniapp/pulls",target:"_blank"},"PR"),s("，只需在 "),n("a",{href:"https://github.com/sutras/sard-uniapp/tree/main/src/lib/components/locale/lang",target:"_blank"},"这里"),s(" 添加一个语言配置文件即可。")],-1),n("h2",{id:"动态切换"},[s("动态切换"),n("a",{class:"sc-anchor",href:"#动态切换"},"#")],-1),n("p",null,[s("调用 "),n("code",null,"setLocale"),s(" 函数会更新视图中的语言。")],-1),n("p",null,[s("可以对其进行封装，或者使用内置的钩子函数，例如下面的 "),n("code",null,"useLocaleProvide"),s(" 函数就使用到 "),n("code",null,"setLocale"),s(" 。")],-1),n("h3",{id:"useLocaleProvide1195"},[s("useLocaleProvide "),n("sup",null,"1.19.5+"),n("a",{class:"sc-anchor",href:"#useLocaleProvide1195"},"#")],-1),n("p",null,[n("code",null,"useLocaleProvide"),s(" 钩子函数会设置默认语言包，以及全局注入语言包信息，以便在任意组件获取和切换语言。")],-1),n("p",null,"类型：",-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"useLocaleProvide"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),s(),n("span",{class:"token keyword"},"extends"),s(" Record"),n("span",{class:"token operator"},"<"),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"any"),n("span",{class:"token operator"},">>")])]),n("span",{class:"token punctuation"},"("),s(`
  app`),n("span",{class:"token operator"},":"),s(" App"),n("span",{class:"token punctuation"},","),s(`
  languages`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},","),s(`
  defaultLocale`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"keyof"),s(),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"void"),s(`
`)])])],-1),n("p",null,"使用：",-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[n("span",{class:"token comment"},"// main.ts"),s(`

`),n("span",{class:"token keyword"},"import"),s(" zhCN "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'sard-uniapp/components/locale/lang/zh-CN'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" enUS "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'sard-uniapp/components/locale/lang/en-US'"),s(`

`),n("span",{class:"token keyword"},"const"),s(" app "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"createSSRApp"),n("span",{class:"token punctuation"},"("),s("App"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token function"},"useLocaleProvide"),n("span",{class:"token punctuation"},"("),s(`
  app`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    zhCN`),n("span",{class:"token punctuation"},","),s(`
    enUS`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token string"},"'zhCN'"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1),n("h3",{id:"useLocale1195"},[s("useLocale "),n("sup",null,"1.19.5+"),n("a",{class:"sc-anchor",href:"#useLocale1195"},"#")],-1),n("p",null,[n("code",null,"useLocale"),s(" 用于消费 "),n("code",null,"useLocaleProvide"),s(" 提供的数据，可以用来获取或设置当前语言。")],-1),n("p",null,"类型：",-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"useLocale"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(" Ref"),n("span",{class:"token operator"},"<"),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"undefined"),s(`
`)])])],-1),n("p",null,"使用：",-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[n("span",{class:"token comment"},"// 任意组件中"),s(`

`),n("span",{class:"token keyword"},"const"),s(" locale "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useLocale"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"!"),s(`

`),n("span",{class:"token comment"},"// 获取"),s(`
`),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("locale"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// zhCN"),s(`

`),n("span",{class:"token comment"},"// 设置"),s(`
locale`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'enUS'"),s(`
`)])])],-1),n("h3",{id:"useTranslate"},[s("useTranslate"),n("a",{class:"sc-anchor",href:"#useTranslate"},"#")],-1),n("p",null,[n("code",null,"useTranslate"),s(" 用于获取当前语言的翻译文字。"),n("code",null,"Calendar、DatetimePicker、Dialog、Form"),s(" 等组件都使用到这个钩子函数。")],-1),n("p",null,"类型：",-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"useTranslate"),n("span",{class:"token punctuation"},"("),s("prefix"),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
  t`),n("span",{class:"token operator"},":"),s(` LocaleTranslate
  translate`),n("span",{class:"token operator"},":"),s(` LocaleTranslate
  `),n("span",{class:"token function-variable function"},"select"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s("chain"),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token builtin"},"any"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"LocaleTranslate"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token punctuation"},"("),s(`
    chainOrData`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token operator"},"|"),s(" Record"),n("span",{class:"token operator"},"<"),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"number"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),s(`
    data`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" Record"),n("span",{class:"token operator"},"<"),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"number"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),n("p",null,"说明：",-1),n("ul",null,[n("li",null,[s("参数 "),n("code",null,"prefix"),s("：可以设置前缀来减少样板代码。")]),n("li",null,[n("code",null,"t、translate"),s(" 函数：根据链式字符串获取语言对象中嵌套的数据，如果没有找到字符串结果，则返回链式字符串本身。此函数是响应式的，放置在模板中，可在切换语言时自动更新视图。")]),n("li",null,[n("code",null,"select"),s(" 函数：根据链式字符串获取语言中任意的数据，类似于 "),n("code",null,"lodash"),s(" 的 "),n("code",null,"get"),s(" 函数。")])],-1),n("p",null,"使用：",-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[n("span",{class:"token comment"},"// 任意组件中"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" t "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useTranslate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'calendar'"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// 中文"),s(`
`),n("span",{class:"token function"},"t"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'start'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// '开始'"),s(`

`),n("span",{class:"token comment"},"// 英文"),s(`
`),n("span",{class:"token function"},"t"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'start'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 'start'"),s(`

`),n("span",{class:"token comment"},"// 可传入数据"),s(`
`),n("span",{class:"token function"},"t"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'monthTitle'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  year`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2000"),n("span",{class:"token punctuation"},","),s(`
  month`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'05'"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// '2000年05月'"),s(`
`)])])],-1),n("p",null,[s("上面示例中，"),n("code",null,"t"),s(" 函数第二个参数传递了一个数据对象。")],-1),n("p",null,[s("因为语言模板中可包含 "),n("code",null,"${}"),s(" 占位字符，使其能够渲染非固定字符，比如，上面链式字符串 "),n("code",null,"calendar.monthTitle"),s(" 对应的中文模板为： "),n("code",null,"${year}年${month}月"),s("。")],-1),n("h2",{id:"覆盖语言包"},[s("覆盖语言包"),n("a",{class:"sc-anchor",href:"#覆盖语言包"},"#")],-1),n("p",null,"语言包导出一个普通的对象，可直接对其进行修改：",-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[n("span",{class:"token keyword"},"import"),s(" zhCN "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'sard-uniapp/components/locale/lang/zh-CN'"),s(`

zhCN`),n("span",{class:"token punctuation"},"."),s("calendar"),n("span",{class:"token punctuation"},"."),s("start "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'始'"),s(`
`)])])],-1),n("p",null,[s("或者使用内置 "),n("code",null,"extend"),s(" 工具函数进行修改：")],-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" extend "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'sard-uniapp'"),s(`

`),n("span",{class:"token function"},"extend"),n("span",{class:"token punctuation"},"("),s("zhCN"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  calendar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    start`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'始'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1),n("p",null,[s("更多字段，可参考 "),n("a",{href:"https://github.com/sutras/sard-uniapp/blob/main/src/lib/components/locale/lang/zh-CN.ts",target:"_blank"},"zh-CN.ts"),s("。")],-1)])),_:1})]),_:1})}const m=l(k,[["render",i]]);export{m as default};
