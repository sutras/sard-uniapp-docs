import{_ as r,c as u,w as t,r as o,o as i,a as p,b as n,d as s}from"./index-CZIuK9Yw.js";const k={};function d(y,a){const e=o("SCAlert"),c=o("SCMarkdown"),l=o("SCFrontMatterProvider");return i(),u(l,{"front-matter":"%7B%22nav%22%3A%22%E5%B7%A5%E5%85%B7%22%2C%22title%22%3A%22%E5%8E%9F%E5%AD%90%E5%8C%96%E6%A0%B7%E5%BC%8F%22%2C%22order%22%3A-2%2C%22group%22%3A%7B%22title%22%3A%22%E5%B7%A5%E7%A8%8B%E5%8C%96%22%7D%7D"},{default:t(()=>[p(c,null,{default:t(()=>[a[1]||(a[1]=n("h2",{id:"介绍"},[s("介绍"),n("a",{class:"sc-anchor",href:"#介绍"},"#")],-1)),a[2]||(a[2]=n("p",null,"原子化样式能提升编写样式的效率，特别在编写业务组件时；在一定程度上也能降低项目打包体积。",-1)),a[3]||(a[3]=n("p",null,[s("下面演示如何将 "),n("code",null,"sard-uniapp"),s(" 的样式设计体系融合到 "),n("code",null,"tailwindcss"),s("，使其能简化 "),n("code",null,"sard-uniapp"),s(" 样式的使用。同时自定义了 "),n("code",null,"tailwindcss"),s(" 的主题，使其更好兼容 "),n("code",null,"uniapp"),s("。")],-1)),p(e,{type:"info",title:""},{default:t(()=>a[0]||(a[0]=[n("p",null,"仅适用通过命令行创建的项目。",-1)])),_:1}),a[4]||(a[4]=n("h2",{id:"安装tailwindcss"},[s("安装 tailwindcss"),n("a",{class:"sc-anchor",href:"#安装tailwindcss"},"#")],-1)),a[5]||(a[5]=n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-bash"},[n("code",{class:"language-bash"},[n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(" tailwindcss@3 "),n("span",{class:"token parameter variable"},"-D"),s(`
`)])])],-1)),a[6]||(a[6]=n("p",null,[s("必须安装 "),n("code",null,"tailwindcss@3"),s(" 版本，更高版本不支持。")],-1)),a[7]||(a[7]=n("h2",{id:"编写tailwindcss配置"},[s("编写 tailwindcss 配置"),n("a",{class:"sc-anchor",href:"#编写tailwindcss配置"},"#")],-1)),a[8]||(a[8]=n("p",null,[s("在项目根目录创建 "),n("code",null,"tailwind.config.js"),s(" 文件，并写入以下内容：")],-1)),a[9]||(a[9]=n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-js"},[n("code",{class:"language-js"},[n("span",{class:"token keyword"},"import"),s(" plugin "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'tailwindcss/plugin'"),s(`

`),n("span",{class:"token comment"},"/** @type {import('tailwindcss').Config} */"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"files"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'./src/components/**/*.vue'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'./src/pages/**/*.vue'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"extract"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token function-variable function"},"vue"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"content"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" content"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"match"),n("span",{class:"token punctuation"},"("),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"[^<>\"'`\\s!:]*"),n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-flags"},"g")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token literal-property property"},"corePlugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"preflight"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"container"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"float"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"clear"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"listStyleType"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"listStyleImage"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"listStylePosition"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"spacing"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token number"},"0"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0px'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"px"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1px'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token operator"},"..."),n("span",{class:"token function"},"Array"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"750"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reduce"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("pair"),n("span",{class:"token punctuation"},","),s(" _"),n("span",{class:"token punctuation"},","),s(" i")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token keyword"},"const"),s(" n "),n("span",{class:"token operator"},"="),s(" i "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),s(`
          `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("n "),n("span",{class:"token operator"},"%"),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            pair`),n("span",{class:"token punctuation"},"["),s("n"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" n "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token string"},"'rpx'"),s(`
          `),n("span",{class:"token punctuation"},"}"),s(`
          `),n("span",{class:"token keyword"},"return"),s(` pair
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"colors"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"primary"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'var(--sar-primary)'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"secondary"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'var(--sar-secondary)'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"success"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'var(--sar-success)'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"info"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'var(--sar-info)'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"warning"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'var(--sar-warning)'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"danger"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'var(--sar-danger)'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"borderRadius"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"none"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"inherit"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'inherit'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"xs"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'var(--sar-rounded-xs)'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"sm"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'var(--sar-rounded-sm)'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token constant"},"DEFAULT"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'var(--sar-rounded)'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"lg"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'var(--sar-rounded-lg)'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"xl"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'var(--sar-rounded-xl)'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"full"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'var(--sar-rounded-full)'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"borderColor"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"current"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'currentColor'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"transparent"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'transparent'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"inherit"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'inherit'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"white"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'white'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"black"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'black'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"base"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'var(--sar-border-color)'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"fontSize"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"xs"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'var(--sar-text-xs)'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"sm"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'var(--sar-text-sm)'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"base"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'var(--sar-text-base)'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"lg"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'var(--sar-text-lg)'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"xl"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'var(--sar-text-xl)'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string-property property"},"'2xl'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'var(--sar-text-2xl)'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"fontWeight"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"bold"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'var(--sar-font-bold)'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"normal"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'var(--sar-font-normal)'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"light"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'var(--sar-font-light)'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"lineHeight"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"none"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'var(--sar-leading-none)'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"tight"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'var(--sar-leading-tight)'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"snug"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'var(--sar-leading-snug)'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"normal"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'var(--sar-leading-normal)'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"relaxed"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'var(--sar-leading-relaxed)'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"loose"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'var(--sar-leading-loose)'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"fontFamily"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"sans"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'var(--sar-font-sans)'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"serif"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'var(--sar-font-serif)'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"mono"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'var(--sar-font-mono)'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"plugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" addUtilities "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token function"},"addUtilities"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token string-property property"},"'.sbg-body'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token string-property property"},"'background-color'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'var(--sar-body-bg)'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string-property property"},"'.sbg-secondary'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token string-property property"},"'background-color'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'var(--sar-secondary-bg)'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string-property property"},"'.sbg-tertiary'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token string-property property"},"'background-color'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'var(--sar-tertiary-bg)'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string-property property"},"'.sbg-fourth'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token string-property property"},"'background-color'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'var(--sar-fourth-bg)'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string-property property"},"'.sbg-emphasis'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token string-property property"},"'background-color'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'var(--sar-emphasis-bg)'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string-property property"},"'.sbg-active'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token string-property property"},"'background-color'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'var(--sar-active-bg)'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string-property property"},"'.sbg-active-deep'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token string-property property"},"'background-color'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'var(--sar-active-deep-bg)'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

        `),n("span",{class:"token string-property property"},"'.stext-body'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'var(--sar-body-color)'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string-property property"},"'.stext-secondary'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'var(--sar-secondary-color)'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string-property property"},"'.stext-tertiary'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'var(--sar-tertiary-color)'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string-property property"},"'.stext-fourth'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'var(--sar-fourth-color)'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string-property property"},"'.stext-emphasis'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'var(--sar-emphasis-color)'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"important"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1)),a[10]||(a[10]=n("h2",{id:"添加为postcss插件"},[s("添加为 postcss 插件"),n("a",{class:"sc-anchor",href:"#添加为postcss插件"},"#")],-1)),a[11]||(a[11]=n("p",null,[s("在 "),n("code",null,"vite.config.ts"),s(" 文件中进行配置：")],-1)),a[12]||(a[12]=n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[n("span",{class:"token keyword"},"import"),s(" tailwindcss "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'tailwindcss'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// ..."),s(`
  css`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    postcss`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      plugins`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token function"},"tailwindcss"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token comment"},"// ..."),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1)),a[13]||(a[13]=n("h2",{id:"添加tailwind指令"},[s("添加 @tailwind 指令"),n("a",{class:"sc-anchor",href:"#添加tailwind指令"},"#")],-1)),a[14]||(a[14]=n("p",null,[s("在 "),n("code",null,"App.vue"),s(" 中添加以下指令：")],-1)),a[15]||(a[15]=n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-css"},[n("code",{class:"language-css"},[n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@tailwind"),s(" utilities"),n("span",{class:"token punctuation"},";")]),s(`
`)])])],-1)),a[16]||(a[16]=n("h2",{id:"忽略vscode提示"},[s("忽略 vscode 提示"),n("a",{class:"sc-anchor",href:"#忽略vscode提示"},"#")],-1)),a[17]||(a[17]=n("p",null,[n("code",null,"@tailwind"),s(" 会有以下的提示：")],-1)),a[18]||(a[18]=n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-bash"},[n("code",{class:"language-bash"},[s("Unknown at rule @tailwind scss"),n("span",{class:"token punctuation"},"("),s("unknownAtRules"),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1)),a[19]||(a[19]=n("p",null,[s("需在 "),n("code",null,".vscode/settings.json"),s(" 文件添加以下配置以便忽略提示：")],-1)),a[20]||(a[20]=n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-json"},[n("code",{class:"language-json"},[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// ..."),s(`
  `),n("span",{class:"token property"},'"scss.lint.unknownAtRules"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"ignore"'),s(`
  `),n("span",{class:"token comment"},"// ..."),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1)),a[21]||(a[21]=n("p",null,[s("运行 "),n("code",null,"Vue: Restart Vue and TS servers"),s(" 命令即可生效。")],-1)),a[22]||(a[22]=n("h2",{id:"vscode中类名自动补全"},[s("vscode 中类名自动补全"),n("a",{class:"sc-anchor",href:"#vscode中类名自动补全"},"#")],-1)),a[23]||(a[23]=n("p",null,[s("在 vscode 中安装 "),n("code",null,"Tailwind CSS IntelliSense"),s(" 扩展，即可享受类名自动补全。")],-1)),a[24]||(a[24]=n("h2",{id:"使用"},[s("使用"),n("a",{class:"sc-anchor",href:"#使用"},"#")],-1)),a[25]||(a[25]=n("p",null,[s("经过上面的配置，就可以使用 "),n("code",null,"tailwindcss"),s(" 工具类了。")],-1)),a[26]||(a[26]=n("p",null,[s("下面讲解 "),n("code",null,"tailwind.config.js"),s(" 的配置和对应的使用方式。")],-1)),a[27]||(a[27]=n("h3",{id:"间距和大小"},[s("间距和大小"),n("a",{class:"sc-anchor",href:"#间距和大小"},"#")],-1)),a[28]||(a[28]=n("p",null,[n("code",null,"theme.spacing"),s(" 配置了 0至750中偶数的间距和大小，单位为 rpx；在 750px 宽度的设计稿中，测试到多大尺寸直接就能用这个数值了，无需进行换算。")],-1)),a[29]||(a[29]=n("p",null,"下面是类名和对应的声明：",-1)),a[30]||(a[30]=n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-scss"},[n("code",{class:"language-scss"},[n("span",{class:"token selector"},".w-100 "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 100rpx "),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".h-100 "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 100rpx "),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".m-100 "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 100rpx "),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".p-100 "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 100rpx "),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".top-100 "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"top"),n("span",{class:"token punctuation"},":"),s(" 100rpx "),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".gap-100 "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"gap"),n("span",{class:"token punctuation"},":"),s(" 100rpx "),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// ..."),s(`
`)])])],-1)),a[31]||(a[31]=n("h3",{id:"主题色"},[s("主题色"),n("a",{class:"sc-anchor",href:"#主题色"},"#")],-1)),a[32]||(a[32]=n("p",null,[n("code",null,"theme.colors"),s(" 配置了颜色名称与 "),n("code",null,"sard-uniapp"),s(" css 变量的对应关系。")],-1)),a[33]||(a[33]=n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-scss"},[n("code",{class:"language-scss"},[n("span",{class:"token selector"},".text-primary "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-primary"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".text-secondary "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-secondary"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".text-success "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-success"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".text-info "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-info"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".text-warning "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-warning"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".text-danger "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-danger"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".bg-primary "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-primary"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".bg-secondary "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-secondary"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".bg-success "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-success"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".bg-info "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-info"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".bg-warning "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-warning"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".bg-danger "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-danger"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// ..."),s(`
`)])])],-1)),a[34]||(a[34]=n("h3",{id:"圆角"},[s("圆角"),n("a",{class:"sc-anchor",href:"#圆角"},"#")],-1)),a[35]||(a[35]=n("p",null,[n("code",null,"theme.borderRadius"),s(" 配置了圆角名称与 "),n("code",null,"sard-uniapp"),s(" css变量的对应关系。")],-1)),a[36]||(a[36]=n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-scss"},[n("code",{class:"language-scss"},[n("span",{class:"token selector"},".rounded-xs "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"border-radius"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-rounded-xs"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".rounded-sm "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"border-radius"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-rounded-sm"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".rounded "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"border-radius"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-rounded"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".rounded-lg "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"border-radius"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-rounded-lg"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".rounded-xl "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"border-radius"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-rounded-xl"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".rounded-full "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"border-radius"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-rounded-full"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// ..."),s(`
`)])])],-1)),a[37]||(a[37]=n("h3",{id:"边框颜色"},[s("边框颜色"),n("a",{class:"sc-anchor",href:"#边框颜色"},"#")],-1)),a[38]||(a[38]=n("p",null,[n("code",null,"theme.borderColor"),s(" 配置了边框颜色名称与 "),n("code",null,"sard-uniapp"),s(" css变量的对应关系。")],-1)),a[39]||(a[39]=n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-scss"},[n("code",{class:"language-scss"},[n("span",{class:"token selector"},".border-current "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"border-color"),n("span",{class:"token punctuation"},":"),s(" currentColor "),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".border-transparent "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"border-color"),n("span",{class:"token punctuation"},":"),s(" transparent "),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".border-inherit "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"border-color"),n("span",{class:"token punctuation"},":"),s(" inherit "),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".border-white "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"border-color"),n("span",{class:"token punctuation"},":"),s(" white "),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".border-black "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"border-color"),n("span",{class:"token punctuation"},":"),s(" black "),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".border-base "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"border-color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-border-color"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".border-primary "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"border-color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-primary"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".border-secondary "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"border-color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-secondary"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".border-success "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"border-color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-success"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".border-info "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"border-color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-info"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".border-warning "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"border-color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-warning"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".border-danger "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"border-color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-danger"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1)),a[40]||(a[40]=n("h3",{id:"字号"},[s("字号"),n("a",{class:"sc-anchor",href:"#字号"},"#")],-1)),a[41]||(a[41]=n("p",null,[n("code",null,"theme.fontSize"),s(" 配置了字号名称与 "),n("code",null,"sard-uniapp"),s(" css变量的对应关系。")],-1)),a[42]||(a[42]=n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-scss"},[n("code",{class:"language-scss"},[n("span",{class:"token selector"},".text-xs "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-text-xs"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".text-sm "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-text-sm"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".text-base "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-text-base"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".text-lg "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-text-lg"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".text-xl "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-text-xl"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".text-2xl "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-text-2xl"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1)),a[43]||(a[43]=n("h3",{id:"字重"},[s("字重"),n("a",{class:"sc-anchor",href:"#字重"},"#")],-1)),a[44]||(a[44]=n("p",null,[n("code",null,"theme.fontWeight"),s(" 配置了字重名称与 "),n("code",null,"sard-uniapp"),s(" css变量的对应关系。")],-1)),a[45]||(a[45]=n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-scss"},[n("code",{class:"language-scss"},[n("span",{class:"token selector"},".font-bold "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"font-weight"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-font-bold"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".font-normal "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"font-weight"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-font-normal"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".font-light "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"font-weight"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-font-light"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1)),a[46]||(a[46]=n("h3",{id:"行高"},[s("行高"),n("a",{class:"sc-anchor",href:"#行高"},"#")],-1)),a[47]||(a[47]=n("p",null,[n("code",null,"theme.lineHeight"),s(" 配置了行高名称与 "),n("code",null,"sard-uniapp"),s(" css变量的对应关系。")],-1)),a[48]||(a[48]=n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-scss"},[n("code",{class:"language-scss"},[n("span",{class:"token selector"},".leading-none "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"line-height"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-leading-none"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".leading-tight "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"line-height"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-leading-tight"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".leading-snug "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"line-height"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-leading-snug"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".leading-normal "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"line-height"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-leading-normal"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".leading-relaxed "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"line-height"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-leading-relaxed"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".leading-loose "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"line-height"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-leading-loose"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1)),a[49]||(a[49]=n("h3",{id:"字体"},[s("字体"),n("a",{class:"sc-anchor",href:"#字体"},"#")],-1)),a[50]||(a[50]=n("p",null,[n("code",null,"theme.fontFamily"),s(" 配置了字体名称与 "),n("code",null,"sard-uniapp"),s(" css变量的对应关系。")],-1)),a[51]||(a[51]=n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-scss"},[n("code",{class:"language-scss"},[n("span",{class:"token selector"},".font-sans "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"font-family"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-font-sans"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".font-serif "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"font-family"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-font-serif"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".font-mono "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"font-family"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-font-mono"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1)),a[52]||(a[52]=n("h3",{id:"灰度场景色"},[s("灰度场景色"),n("a",{class:"sc-anchor",href:"#灰度场景色"},"#")],-1)),a[53]||(a[53]=n("p",null,[n("code",null,"plugins"),s(" 配置了一个 "),n("code",null,"tailwindcss"),s(" 插件，添加了一些灰度场景色的工具类，相比较于 "),n("code",null,"theme.colors"),s(" 中的类名，"),n("code",null,"sbg-*"),s(" 和 "),n("code",null,"stext-*"),s(" 可以适应亮色和暗色的系统主题。")],-1)),a[54]||(a[54]=n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-scss"},[n("code",{class:"language-scss"},[n("span",{class:"token selector"},".sbg-body "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-body-bg"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".sbg-secondary "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-secondary-bg"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".sbg-tertiary "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-tertiary-bg"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".sbg-fourth "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-fourth-bg"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".sbg-emphasis "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-emphasis-bg"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".sbg-active "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-active-bg"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".sbg-active-deep "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-active-deep-bg"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".stext-body "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-body-color"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".stext-secondary "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-secondary-color"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".stext-tertiary "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-tertiary-color"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".stext-fourth "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-fourth-color"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".stext-emphasis "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--sar-emphasis-color"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1)),a[55]||(a[55]=n("h2",{id:"关于important"},[s("关于 !important"),n("a",{class:"sc-anchor",href:"#关于important"},"#")],-1)),a[56]||(a[56]=n("p",null,[s("工具类的优先级通常比组件的优先级要高，因此配置 "),n("code",null,"important: true"),s(" 是合理的，并且因为小程序端不支持类名中包含特殊字符，因此也只能配置 "),n("code",null,"important: true"),s("。")],-1))]),_:1})]),_:1})}const m=r(k,[["render",d]]);export{m as default};
