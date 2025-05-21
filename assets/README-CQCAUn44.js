import{_ as c,c as l,w as t,r as o,o as r,a as u,b as n,d as s}from"./index-C-OesnoT.js";const k={};function i(y,a){const p=o("SCMarkdown"),e=o("SCFrontMatterProvider");return r(),l(e,{"front-matter":"%7B%22nav%22%3A%22%E7%BB%84%E4%BB%B6%22%2C%22title%22%3A%22ShareSheet%22%2C%22subtitle%22%3A%22%E5%88%86%E4%BA%AB%E9%9D%A2%E6%9D%BF%22%2C%22group%22%3A%22%E5%8F%8D%E9%A6%88%E7%BB%84%E4%BB%B6%22%7D"},{default:t(()=>[u(p,null,{default:t(()=>a[0]||(a[0]=[n("h2",{id:"介绍"},[s("介绍"),n("a",{class:"sc-anchor",href:"#介绍"},"#")],-1),n("p",null,"从底部向上弹出分享菜单。",-1),n("h2",{id:"引入"},[s("引入"),n("a",{class:"sc-anchor",href:"#引入"},"#")],-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[n("span",{class:"token keyword"},"import"),s(" ShareSheet "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'sard-uniapp/components/share-sheet/share-sheet.vue'"),s(`
`)])])],-1),n("h2",{id:"代码演示"},[s("代码演示"),n("a",{class:"sc-anchor",href:"#代码演示"},"#")],-1),n("h3",{id:"基础使用"},[s("基础使用"),n("a",{class:"sc-anchor",href:"#基础使用"},"#")],-1),n("p",null,[s("使用 "),n("code",null,"v-model:visible"),s(" 属性控制显隐，使用 "),n("code",null,"itemList"),s(" 属性配置分享项。")],-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-html"},[n("code",{class:"language-html"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("sar-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("visible = true"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("显示分享面板"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("sar-button")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("sar-share-sheet")]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("visible")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("visible"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":item-list"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("itemList"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"cancel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("取消"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@select"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onSelect"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"setup"),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" toast"),n("span",{class:"token punctuation"},","),s(" type ShareSheetItem "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'sard-uniapp'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"const"),s(" itemList "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Wechat'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#fff'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"background"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#0bc15f'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'wechat-fill'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"iconFamily"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'demo-icons'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Alipay'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#fff'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"background"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#1677ff'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'alipay-fill'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"iconFamily"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'demo-icons'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Twitter'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#fff'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"background"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#1d9bf0'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'twitter-fill'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"iconFamily"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'demo-icons'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Facebook'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#fff'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"background"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#1877f2'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'facebook-circle-fill'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"iconFamily"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'demo-icons'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token keyword"},"const"),s(" visible "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"onSelect"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"item"),n("span",{class:"token operator"},":"),s(" ShareSheetItem")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"toast"),n("span",{class:"token punctuation"},"("),s("item"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),n("h3",{id:"多行"},[s("多行"),n("a",{class:"sc-anchor",href:"#多行"},"#")],-1),n("p",null,[n("code",null,"itemList"),s(" 属性值如果是二维数组则渲染成多行。")],-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-html"},[n("code",{class:"language-html"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("sar-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("visible = true"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("显示分享面板"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("sar-button")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("sar-share-sheet")]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("visible")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("visible"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":item-list"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("itemList"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"cancel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("取消"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@select"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onSelect"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"setup"),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" toast"),n("span",{class:"token punctuation"},","),s(" type ShareSheetItem "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'sard-uniapp'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"const"),s(" itemList "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Wechat'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#fff'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"background"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#0bc15f'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"iconFamily"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'demo-icons'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'wechat-fill'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Alipay'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#fff'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"background"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#1677ff'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"iconFamily"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'demo-icons'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'alipay-fill'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Twitter'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#fff'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"background"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#1d9bf0'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"iconFamily"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'demo-icons'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'twitter-fill'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Facebook'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#fff'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"background"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#1877f2'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"iconFamily"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'demo-icons'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'facebook-circle-fill'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Spotify'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#fff'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"background"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#1ed760'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"iconFamily"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'demo-icons'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'spotify-fill'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Skype'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#fff'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"background"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#0b64a4'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"iconFamily"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'demo-icons'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'skype-fill'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Youtube'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#fff'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"background"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#ff0000'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"iconFamily"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'demo-icons'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'youtube-fill'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Paypal'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#fff'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"background"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#0070ba'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"iconFamily"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'demo-icons'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'paypal-fill'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Whatsapp'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#fff'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"background"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#128c7e'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"iconFamily"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'demo-icons'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'whatsapp-fill'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Telegram'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#fff'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"background"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#0088cc'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"iconFamily"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'demo-icons'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'telegram-fill'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Snapchat'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#000'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"background"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#fffc00'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"iconFamily"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'demo-icons'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'snapchat-fill'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token keyword"},"const"),s(" visible "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"onSelect"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"item"),n("span",{class:"token operator"},":"),s(" ShareSheetItem")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"toast"),n("span",{class:"token punctuation"},"("),s("item"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),n("h3",{id:"标题和描述"},[s("标题和描述"),n("a",{class:"sc-anchor",href:"#标题和描述"},"#")],-1),n("p",null,[s("使用 "),n("code",null,"title"),s(" 和 "),n("code",null,"description"),s(" 配置标题和描述。")],-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-html"},[n("code",{class:"language-html"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("sar-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("visible = true"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("显示分享面板"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("sar-button")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("sar-share-sheet")]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("visible")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("visible"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":item-list"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("itemList"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("分享到"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"description"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("这是描述"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"cancel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("取消"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@select"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onSelect"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"setup"),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" toast"),n("span",{class:"token punctuation"},","),s(" type ShareSheetItem "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'sard-uniapp'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"const"),s(" itemList "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Wechat'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#fff'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"background"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#0bc15f'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"iconFamily"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'demo-icons'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'wechat-fill'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Alipay'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#fff'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"background"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#1677ff'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"iconFamily"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'demo-icons'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'alipay-fill'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'这是描述这是描述'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Twitter'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#fff'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"background"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#1d9bf0'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"iconFamily"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'demo-icons'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'twitter-fill'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Facebook'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#fff'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"background"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#1877f2'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"iconFamily"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'demo-icons'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'facebook-circle-fill'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token keyword"},"const"),s(" visible "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"onSelect"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"item"),n("span",{class:"token operator"},":"),s(" ShareSheetItem")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"toast"),n("span",{class:"token punctuation"},"("),s("item"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),n("h3",{id:"图片类型图标"},[s("图片类型图标"),n("a",{class:"sc-anchor",href:"#图片类型图标"},"#")],-1),n("p",null,[n("code",null,"icon"),s(" 属性可以是图片路径。")],-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-html"},[n("code",{class:"language-html"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("sar-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("visible = true"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("显示分享面板"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("sar-button")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("sar-share-sheet")]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("visible")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("visible"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":item-list"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("itemList"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"cancel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("取消"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@select"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onSelect"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"setup"),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" toast"),n("span",{class:"token punctuation"},","),s(" type ShareSheetItem "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'sard-uniapp'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"const"),s(" itemList "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Sard'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://fastly.jsdelivr.net/npm/@sard/assets/pic1.jpg'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Wechat'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#fff'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"background"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#0bc15f'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"iconFamily"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'demo-icons'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'wechat-fill'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token keyword"},"const"),s(" visible "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"onSelect"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"item"),n("span",{class:"token operator"},":"),s(" ShareSheetItem")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"toast"),n("span",{class:"token punctuation"},"("),s("item"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),n("h3",{id:"禁用"},[s("禁用"),n("a",{class:"sc-anchor",href:"#禁用"},"#")],-1),n("p",null,"禁用的选项不可点击。",-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-html"},[n("code",{class:"language-html"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("sar-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("visible = true"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("显示分享面板"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("sar-button")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("sar-share-sheet")]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("visible")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("visible"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":item-list"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("itemList"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"cancel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("取消"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@select"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onSelect"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"setup"),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" toast"),n("span",{class:"token punctuation"},","),s(" type ShareSheetItem "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'sard-uniapp'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"const"),s(" itemList "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Wechat'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#fff'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"background"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#0bc15f'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'wechat-fill'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"iconFamily"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'demo-icons'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Alipay'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#fff'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"background"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#1677ff'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'alipay-fill'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"iconFamily"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'demo-icons'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token keyword"},"const"),s(" visible "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"onSelect"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"item"),n("span",{class:"token operator"},":"),s(" ShareSheetItem")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"toast"),n("span",{class:"token punctuation"},"("),s("item"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),n("h2",{id:"API"},[s("API"),n("a",{class:"sc-anchor",href:"#API"},"#")],-1),n("h3",{id:"ShareSheetProps"},[s("ShareSheetProps"),n("a",{class:"sc-anchor",href:"#ShareSheetProps"},"#")],-1),n("p",null,[n("code",null,"ShareSheetProps"),s(" 继承 "),n("code",null,"PopupProps"),s(" 并拥有以下属性：")],-1),n("div",{class:"sc-table-responsive"},[n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"属性"),n("th",null,"描述"),n("th",null,"类型"),n("th",null,"默认值")])]),n("tbody",null,[n("tr",null,[n("td",null,"root-class"),n("td",null,"组件根元素类名"),n("td",null,"string"),n("td",null,"-")]),n("tr",null,[n("td",null,"root-style"),n("td",null,"组件根元素样式"),n("td",null,"StyleValue"),n("td",null,"-")]),n("tr",null,[n("td",null,"item-list"),n("td",null,"面板选项列表"),n("td",null,"ShareSheetItem[] | ShareSheetItem[][]"),n("td",null,"[]")]),n("tr",null,[n("td",null,"title"),n("td",null,"面板标题"),n("td",null,"string"),n("td",null,"-")]),n("tr",null,[n("td",null,"description"),n("td",null,"面板描述"),n("td",null,"string"),n("td",null,"-")]),n("tr",null,[n("td",null,"cancel"),n("td",null,"取消按钮内容"),n("td",null,"string"),n("td",null,"-")]),n("tr",null,[n("td",null,"visible (v-model)"),n("td",null,"面板是否可见"),n("td",null,"boolean"),n("td",null,"-")]),n("tr",null,[n("td",null,"overlay-closable"),n("td",null,"点击遮罩后是否关闭"),n("td",null,"boolean"),n("td",null,"true")]),n("tr",null,[n("td",null,"before-close"),n("td",null,[s("关闭前的回调，返回 "),n("code",null,"false"),s(" 可阻止关闭，支持返回 "),n("code",null,"Promise")]),n("td",null,"(type: 'close' | 'cancel' | 'select') => boolean | Promise<any>"),n("td",null,"-")]),n("tr",null,[n("td",null,"duration"),n("td",null,"显隐动画时长，单位 ms"),n("td",null,"number"),n("td",null,"300")])])])],-1),n("h3",{id:"ShareSheetEmits"},[s("ShareSheetEmits"),n("a",{class:"sc-anchor",href:"#ShareSheetEmits"},"#")],-1),n("div",{class:"sc-table-responsive"},[n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"事件"),n("th",null,"描述"),n("th",null,"类型")])]),n("tbody",null,[n("tr",null,[n("td",null,"update:visible"),n("td",null,"分享面板显隐时触发"),n("td",null,"(visible: boolean) => void")]),n("tr",null,[n("td",null,"close"),n("td",null,"点击遮罩时触发"),n("td",null,"() => void")]),n("tr",null,[n("td",null,"cancel"),n("td",null,"点击取消按钮时触发"),n("td",null,"() => void")]),n("tr",null,[n("td",null,"select"),n("td",null,"点击分享项时触发"),n("td",null,"(item: ShareSheetItem) => void")])])])],-1),n("h3",{id:"ShareSheetItem"},[s("ShareSheetItem"),n("a",{class:"sc-anchor",href:"#ShareSheetItem"},"#")],-1),n("div",{class:"sc-table-responsive"},[n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"属性"),n("th",null,"描述"),n("th",null,"类型"),n("th",null,"默认值")])]),n("tbody",null,[n("tr",null,[n("td",null,"name"),n("td",null,"名称"),n("td",null,"string"),n("td",null,"-")]),n("tr",null,[n("td",null,"description"),n("td",null,"标签"),n("td",null,"string"),n("td",null,"-")]),n("tr",null,[n("td",null,"color"),n("td",null,"图标颜色"),n("td",null,"string"),n("td",null,"-")]),n("tr",null,[n("td",null,"background"),n("td",null,"图标背景颜色"),n("td",null,"string"),n("td",null,"-")]),n("tr",null,[n("td",null,"icon"),n("td",null,"图标名称，可以是图片路径"),n("td",null,"string"),n("td",null,"-")]),n("tr",null,[n("td",null,"iconFamily"),n("td",null,"图标字体"),n("td",null,"string"),n("td",null,"-")]),n("tr",null,[n("td",null,"disabled"),n("td",null,"禁用状态"),n("td",null,"boolean"),n("td",null,"false")])])])],-1),n("h2",{id:"主题定制"},[s("主题定制"),n("a",{class:"sc-anchor",href:"#主题定制"},"#")],-1),n("h3",{id:"CSS变量"},[s("CSS 变量"),n("a",{class:"sc-anchor",href:"#CSS变量"},"#")],-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-scss"},[n("code",{class:"language-scss"},[n("span",{class:"token selector"},`page,
.sar-portal `),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"--sar-share-sheet-border-radius"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-rounded-xl"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"--sar-share-sheet-border-color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-border-color"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"--sar-share-sheet-bg"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-emphasis-bg"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token property"},"--sar-share-sheet-header-padding"),n("span",{class:"token punctuation"},":"),s(" 32rpx"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token property"},"--sar-share-sheet-title-font-size"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-text-lg"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token property"},"--sar-share-sheet-description-margin-top"),n("span",{class:"token punctuation"},":"),s(" 16rpx"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"--sar-share-sheet-description-font-size"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-text-base"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"--sar-share-sheet-description-color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-tertiary-color"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token property"},"--sar-share-sheet-row-padding-y"),n("span",{class:"token punctuation"},":"),s(" 32rpx"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"--sar-share-sheet-row-padding-x"),n("span",{class:"token punctuation"},":"),s(" 16rpx"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token property"},"--sar-share-sheet-item-width"),n("span",{class:"token punctuation"},":"),s(" 160rpx"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"--sar-share-sheet-item-active-opacity"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-active-opacity"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token property"},"--sar-share-sheet-icon-wrapper-size"),n("span",{class:"token punctuation"},":"),s(" 96rpx"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"--sar-share-sheet-icon-wrapper-border-radius"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-rounded-full"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token property"},"--sar-share-sheet-icon-font-size"),n("span",{class:"token punctuation"},":"),s(" 48rpx"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"--sar-share-sheet-icon-color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-tertiary-color"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"--sar-share-sheet-icon-bg"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-secondary-bg"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token property"},"--sar-share-sheet-name-margin-top"),n("span",{class:"token punctuation"},":"),s(" 16rpx"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"--sar-share-sheet-name-padding-x"),n("span",{class:"token punctuation"},":"),s(" 8rpx"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"--sar-share-sheet-name-font-size"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-text-base"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"--sar-share-sheet-name-color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-tertiary-color"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token property"},"--sar-share-sheet-item-description-margin-top"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"--sar-share-sheet-item-description-padding-x"),n("span",{class:"token punctuation"},":"),s(" 8rpx"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"--sar-share-sheet-item-description-font-size"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-text-sm"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"--sar-share-sheet-item-description-color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-quaternary-color"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token property"},"--sar-share-sheet-gap-bg"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-body-bg"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"--sar-share-sheet-gap-height"),n("span",{class:"token punctuation"},":"),s(" 16rpx"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token property"},"--sar-share-sheet-cancel-min-height"),n("span",{class:"token punctuation"},":"),s(" 96rpx"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"--sar-share-sheet-cancel-padding"),n("span",{class:"token punctuation"},":"),s(" 16rpx 32rpx"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"--sar-share-sheet-cancel-font-size"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-text-lg"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"--sar-share-sheet-cancel-active-bg"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-active-bg"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1)])),_:1})]),_:1})}const d=c(k,[["render",i]]);export{d as default};
