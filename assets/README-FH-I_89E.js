import{_ as l,c,w as a,r as o,o as r,a as i,b as n,d as t}from"./index-_Zb2Qk-x.js";const u={};function k(m,s){const e=o("SCMarkdown"),p=o("SCFrontMatterProvider");return r(),c(p,{"front-matter":"%7B%22nav%22%3A%22%E7%BB%84%E4%BB%B6%22%2C%22title%22%3A%22Timeline%22%2C%22subtitle%22%3A%22%E6%97%B6%E9%97%B4%E8%BD%B4%22%2C%22group%22%3A%22%E6%95%B0%E6%8D%AE%E5%B1%95%E7%A4%BA%22%2C%22version%22%3A%221.6%2B%22%7D"},{default:a(()=>[i(e,null,{default:a(()=>s[0]||(s[0]=[n("h2",{id:"介绍"},[t("介绍"),n("a",{class:"sc-anchor",href:"#介绍"},"#")],-1),n("p",null,"垂直展示的时间流信息。",-1),n("h2",{id:"引入"},[t("引入"),n("a",{class:"sc-anchor",href:"#引入"},"#")],-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[n("span",{class:"token keyword"},"import"),t(" Timeline "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'sard-uniapp/components/timeline/timeline.vue'"),t(`
`),n("span",{class:"token keyword"},"import"),t(" TimelineItem "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'sard-uniapp/components/timeline-item/timeline-item.vue'"),t(`
`)])])],-1),n("h2",{id:"代码演示"},[t("代码演示"),n("a",{class:"sc-anchor",href:"#代码演示"},"#")],-1),n("h3",{id:"基础使用"},[t("基础使用"),n("a",{class:"sc-anchor",href:"#基础使用"},"#")],-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-html"},[n("code",{class:"language-html"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("sar-timeline")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("sar-timeline-item")]),t(`
      `),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("(item, index) in logistics"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("index"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item.title"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":time"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item.time"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"icon-family"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("demo-icons"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item.icon"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":icon-color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item.iconColor"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":root-style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`{
        color: index !== 1 ? 'var(--sar-tertiary-color)' : '',
      }`),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("view")]),t(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item.tel"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(`
          `),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("(subStr, i) in item.description.split(/(\\${tel})/)"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("i"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("text")]),t(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("subStr === '${tel}'"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),t("--sar-primary"),n("span",{class:"token punctuation"},")")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
            {{ item.tel }}
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("text")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("text")]),t(),n("span",{class:"token attr-name"},"v-else"),n("span",{class:"token punctuation"},">")]),t("{{ subStr }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("text")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("view")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"v-else"),n("span",{class:"token punctuation"},">")]),t(`
        {{ item.description }}
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("sar-timeline-item")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("sar-timeline")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"const"),t(" logistics "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'收货地址：广东广州xxx1号店'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'check'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"iconColor"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'var(--sar-primary)'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'已签收'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),t(`
      `),n("span",{class:"token string"},"'您的订单已由【xxx（广州xxx1号店）代收。如有疑问您可以联系配送员【xxx，${tel}】确认。感谢您在xxx购物，欢迎再次光临。】'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"tel"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'13800138000'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"time"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2024-06-17 09:01:47'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'delivery'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'派送中'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),t(`
      `),n("span",{class:"token string"},"'您的订单正在配送途中（快递员：xxx，电话${tel}），请你耐心等待。'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"tel"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'13800138000'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"time"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2024-06-17 08:01:25'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'transport'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'运输中'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'您的订单已送达【广州xx营业部】'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"time"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2024-06-17 06:21:23'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'您的订单已离开广州xx分拣中心，前往广州xx营业务途中'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"time"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2024-06-17 06:21:23'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'您的订单在【广州xx分拣中心】准备送往【广州xx营业部】'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"time"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2024-06-17 04:27:51'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'您的订单在【广州xx接货仓】分拣完成'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"time"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2024-06-16 21:07:28'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'warehouse'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'仓库处理中'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'打包完成'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"time"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2024-06-16 20:58:13'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'扫描完成'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"time"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2024-06-16 20:58:13'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'拣货完成'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"time"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2024-06-16 19:18:06'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'您的订单已经打印完成'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"time"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2024-06-16 18:53:15'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'order'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'已下单'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'温馨提示：您的订单预计6月17日09:00-15:00送达'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"time"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2024-06-16 18:50:30'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'您的订单已经进入广州仓库准备出库'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"time"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2024-06-16 18:20:49'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'您的订单预计2024-06-16 18:20开始处理，请您耐心等待'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"time"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2024-06-16 18:20:48'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'您提交了订单，请等待系统确认'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"time"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2021-06-16 18:20:30'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"]"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),n("h2",{id:"API"},[t("API"),n("a",{class:"sc-anchor",href:"#API"},"#")],-1),n("h3",{id:"TimelineProps"},[t("TimelineProps"),n("a",{class:"sc-anchor",href:"#TimelineProps"},"#")],-1),n("div",{class:"sc-table-responsive is-component-table"},[n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"属性"),n("th",null,"描述"),n("th",null,"类型"),n("th",null,"默认值")])]),n("tbody",null,[n("tr",null,[n("td",null,"root-class"),n("td",null,"组件根元素类名"),n("td",null,"string"),n("td",null,"-")]),n("tr",null,[n("td",null,"root-style"),n("td",null,"组件根元素样式"),n("td",null,"StyleValue"),n("td",null,"-")])])])],-1),n("h3",{id:"TimelineSlots"},[t("TimelineSlots"),n("a",{class:"sc-anchor",href:"#TimelineSlots"},"#")],-1),n("div",{class:"sc-table-responsive is-component-table"},[n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"插槽"),n("th",null,"描述"),n("th",null,"属性")])]),n("tbody",null,[n("tr",null,[n("td",null,"default"),n("td",null,"自定义默认内容"),n("td",null,"-")])])])],-1),n("h3",{id:"TimelineItemProps"},[t("TimelineItemProps"),n("a",{class:"sc-anchor",href:"#TimelineItemProps"},"#")],-1),n("div",{class:"sc-table-responsive is-component-table"},[n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"属性"),n("th",null,"描述"),n("th",null,"类型"),n("th",null,"默认值")])]),n("tbody",null,[n("tr",null,[n("td",null,"root-class"),n("td",null,"组件根元素类名"),n("td",null,"string"),n("td",null,"-")]),n("tr",null,[n("td",null,"root-style"),n("td",null,"组件根元素样式"),n("td",null,"StyleValue"),n("td",null,"-")]),n("tr",null,[n("td",null,"title"),n("td",null,"标题内容"),n("td",null,"string"),n("td",null,"-")]),n("tr",null,[n("td",null,"time"),n("td",null,"时间内容"),n("td",null,"string"),n("td",null,"-")]),n("tr",null,[n("td",null,"icon"),n("td",null,"自定义图标"),n("td",null,"string"),n("td",null,"-")]),n("tr",null,[n("td",null,"icon-family"),n("td",null,"图标字体"),n("td",null,"string"),n("td",null,"-")]),n("tr",null,[n("td",null,"icon-color"),n("td",null,"图标颜色"),n("td",null,"string"),n("td",null,"-")])])])],-1),n("h3",{id:"TimelineItemSlots"},[t("TimelineItemSlots"),n("a",{class:"sc-anchor",href:"#TimelineItemSlots"},"#")],-1),n("div",{class:"sc-table-responsive is-component-table"},[n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"插槽"),n("th",null,"描述"),n("th",null,"属性")])]),n("tbody",null,[n("tr",null,[n("td",null,"default"),n("td",null,"自定义默认内容"),n("td",null,"-")]),n("tr",null,[n("td",null,"icon"),n("td",null,[t("自定义图标内容，会覆盖 "),n("code",null,"icon"),t(" 属性")]),n("td",null,"-")]),n("tr",null,[n("td",null,"title"),n("td",null,[t("自定义标题内容，会覆盖 "),n("code",null,"title"),t(" 属性")]),n("td",null,"-")]),n("tr",null,[n("td",null,"time"),n("td",null,[t("自定义时间内容，会覆盖 "),n("code",null,"time"),t(" 属性")]),n("td",null,"-")])])])],-1),n("h2",{id:"主题定制"},[t("主题定制"),n("a",{class:"sc-anchor",href:"#主题定制"},"#")],-1),n("h3",{id:"CSS变量"},[t("CSS 变量"),n("a",{class:"sc-anchor",href:"#CSS变量"},"#")],-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-scss"},[n("code",{class:"language-scss"},[n("span",{class:"token selector"},`page,
.sar-portal `),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"--sar-timeline-item-header-width"),n("span",{class:"token punctuation"},":"),t(" 96rpx"),n("span",{class:"token punctuation"},";"),t(`

  `),n("span",{class:"token property"},"--sar-timeline-item-line-width"),n("span",{class:"token punctuation"},":"),t(" 1px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"--sar-timeline-item-line-dotted-before-height"),n("span",{class:"token punctuation"},":"),t(" 14rpx"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"--sar-timeline-item-line-color"),n("span",{class:"token punctuation"},":"),t(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),t("--sar-border-color"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

  `),n("span",{class:"token property"},"--sar-timeline-item-icon-wrapper-margin-y"),n("span",{class:"token punctuation"},":"),t(" 6rpx"),n("span",{class:"token punctuation"},";"),t(`

  `),n("span",{class:"token property"},"--sar-timeline-item-icon-font-size"),n("span",{class:"token punctuation"},":"),t(" 48rpx"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"--sar-timeline-item-icon-color"),n("span",{class:"token punctuation"},":"),t(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),t("--sar-fourth-bg"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

  `),n("span",{class:"token property"},"--sar-timeline-item-dot-size"),n("span",{class:"token punctuation"},":"),t(" 16rpx"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"--sar-timeline-item-dot-bg"),n("span",{class:"token punctuation"},":"),t(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),t("--sar-tertiary-bg"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

  `),n("span",{class:"token property"},"--sar-timeline-item-body-padding-top"),n("span",{class:"token punctuation"},":"),t(" 6rpx"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"--sar-timeline-item-body-padding-bottom"),n("span",{class:"token punctuation"},":"),t(" 48rpx"),n("span",{class:"token punctuation"},";"),t(`

  `),n("span",{class:"token property"},"--sar-timeline-item-title-margin-bottom"),n("span",{class:"token punctuation"},":"),t(" 12rpx"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"--sar-timeline-item-title-font-size"),n("span",{class:"token punctuation"},":"),t(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),t("--sar-text-lg"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

  `),n("span",{class:"token property"},"--sar-timeline-item-description-margin-bottom"),n("span",{class:"token punctuation"},":"),t(" 12rpx"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"--sar-timeline-item-description-font-size"),n("span",{class:"token punctuation"},":"),t(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),t("--sar-text-base"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

  `),n("span",{class:"token property"},"--sar-timeline-item-time-font-size"),n("span",{class:"token punctuation"},":"),t(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),t("--sar-text-sm"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"--sar-timeline-item-time-color"),n("span",{class:"token punctuation"},":"),t(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),t("--sar-tertiary-color"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])])],-1)])),_:1})]),_:1})}const y=l(u,[["render",k]]);export{y as default};
