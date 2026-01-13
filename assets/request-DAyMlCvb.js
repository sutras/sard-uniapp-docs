import{_ as p,c as l,w as t,r as o,o as u,a as k,b as n,d as s}from"./index-DGSwdnbA.js";const i={};function r(d,a){const e=o("SCMarkdown"),c=o("SCFrontMatterProvider");return u(),l(c,{"front-matter":"%7B%22nav%22%3A%7B%22title%22%3A%22%E5%B7%A5%E5%85%B7%22%2C%22order%22%3A2%7D%2C%22title%22%3A%22%E8%AF%B7%E6%B1%82%22%2C%22group%22%3A%7B%22title%22%3A%22%E5%B7%A5%E7%A8%8B%E5%8C%96%22%7D%2C%22version%22%3A%221.20%2B%22%7D"},{default:t(()=>[k(e,null,{default:t(()=>a[0]||(a[0]=[n("h2",{id:"介绍"},[s("介绍"),n("a",{class:"sc-anchor",href:"#介绍"},"#")],-1),n("p",null,[n("code",null,"uni.request"),s(" 接口是基础的、原始的，通常需要经过封装才更好使用。")],-1),n("p",null,[s("本库因此提供了 "),n("code",null,"Request"),s(" 类用于发送请求，在 "),n("code",null,"uni.request"),s(" 基础上，新增以下特性：")],-1),n("ul",null,[n("li",null,"支持默认配置"),n("li",null,"提供快捷方法"),n("li",null,"拦截请求和响应"),n("li",null,"自动处理 URL 的查询字符串"),n("li",null,"支持额外参数"),n("li",null,"支持文件上传/下载")],-1),n("h2",{id:"用例"},[s("用例"),n("a",{class:"sc-anchor",href:"#用例"},"#")],-1),n("p",null,"创建请求对象",-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Request "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'sard-uniapp'"),s(`

`),n("span",{class:"token keyword"},"const"),s(" request "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Request"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  baseURL`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://localhost/api'"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1),n("p",null,"发送一个 GET 请求",-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[n("span",{class:"token comment"},"// 向给定ID的用户发起请求"),s(`
request
  `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'/user?ID=12345'"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("response"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// 处理成功情况"),s(`
    `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("response"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"catch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("error"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// 处理错误情况"),s(`
    `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("error"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"finally"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// 总是会执行"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// 上述请求也可以按以下方式完成（可选）"),s(`
request`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'/user'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  params`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token constant"},"ID"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"12345"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// 支持async/await用法"),s(`
`),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"getUser"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" response "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" request"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'/user?ID=12345'"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("response"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"("),s("error"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),s("error"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),n("p",null,"发起一个 POST 请求",-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[s(`request
  `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"post"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'/user'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
    firstName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Fred'"),n("span",{class:"token punctuation"},","),s(`
    lastName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Flintstone'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("response"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("response"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"catch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("error"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("error"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1),n("p",null,"发起多个并发请求",-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"getUserAccount"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(" request"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'/user/12345'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"getUserPermissions"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(" request"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'/user/12345/permissions'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"["),s("acct"),n("span",{class:"token punctuation"},","),s(" perm"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(),n("span",{class:"token builtin"},"Promise"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"all"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token function"},"getUserAccount"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"getUserPermissions"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// OR"),s(`

`),n("span",{class:"token builtin"},"Promise"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"all"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token function"},"getUserAccount"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"getUserPermissions"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s("acct"),n("span",{class:"token punctuation"},","),s(" perm"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// ..."),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1),n("h2",{id:"接口"},[s("接口"),n("a",{class:"sc-anchor",href:"#接口"},"#")],-1),n("h3",{id:"Request构造函数"},[s("Request 构造函数"),n("a",{class:"sc-anchor",href:"#Request构造函数"},"#")],-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[s("constructor "),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"Request"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"E"),s(),n("span",{class:"token keyword"},"extends"),s(" Record"),n("span",{class:"token operator"},"<"),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"any"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token builtin"},"any"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),s("defaultConfig"),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" RequestConfig"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(" Request"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"E"),n("span",{class:"token operator"},">"),s(`
`)])])],-1),n("h3",{id:"实例方法"},[s("实例方法"),n("a",{class:"sc-anchor",href:"#实例方法"},"#")],-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[s("Request"),n("span",{class:"token function"},"#request"),n("span",{class:"token punctuation"},"("),s("config"),n("span",{class:"token punctuation"},")"),s(`
Request`),n("span",{class:"token function"},"#get"),n("span",{class:"token punctuation"},"("),s("url"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},","),s(" config"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
Request`),n("span",{class:"token function"},"#head"),n("span",{class:"token punctuation"},"("),s("url"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},","),s(" config"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
Request`),n("span",{class:"token function"},"#connect"),n("span",{class:"token punctuation"},"("),s("url"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},","),s(" config"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
Request`),n("span",{class:"token function"},"#trace"),n("span",{class:"token punctuation"},"("),s("url"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},","),s(" config"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
Request`),n("span",{class:"token function"},"#post"),n("span",{class:"token punctuation"},"("),s("url"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},","),s(" data"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},","),s(" config"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
Request`),n("span",{class:"token function"},"#put"),n("span",{class:"token punctuation"},"("),s("url"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},","),s(" data"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},","),s(" config"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
Request#`),n("span",{class:"token keyword"},"delete"),n("span",{class:"token punctuation"},"("),s("url"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},","),s(" data"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},","),s(" config"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
Request`),n("span",{class:"token function"},"#options"),n("span",{class:"token punctuation"},"("),s("url"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},","),s(" data"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},","),s(" config"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
Request`),n("span",{class:"token function"},"#upload"),n("span",{class:"token punctuation"},"("),s("url"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},","),s(" data"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},","),s(" config"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
Request`),n("span",{class:"token function"},"#download"),n("span",{class:"token punctuation"},"("),s("url"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},","),s(" data"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},","),s(" config"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1),n("h3",{id:"请求配置RequestConfig"},[s("请求配置 RequestConfig"),n("a",{class:"sc-anchor",href:"#请求配置RequestConfig"},"#")],-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"RequestConfig"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"/**\n   * 自动加在 `url` 前面，除非 `url` 是一个绝对 URL\n   */"),s(`
  baseURL`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(`
  `),n("span",{class:"token comment"},`/**
   * 与请求一起发送的 URL 参数
   */`),s(`
  params`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token punctuation"},"["),s("key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"any"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token comment"},`/**
   * 获取 uni.request 返回值，可用于中断请求
   */`),s(`
  getTask`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s("task"),n("span",{class:"token operator"},":"),s(" UniApp"),n("span",{class:"token punctuation"},"."),s("RequestTask"),n("span",{class:"token punctuation"},","),s(" config"),n("span",{class:"token operator"},":"),s(" RequestConfig"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),s(`
  `),n("span",{class:"token comment"},`/**
   * 请求的参数
   */`),s(`
  data`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"any"),s(`
  `),n("span",{class:"token comment"},`/**
   * 额外的请求参数，用于实现自定义的行为
   */`),s(`
  extra`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" Record"),n("span",{class:"token operator"},"<"),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"any"),n("span",{class:"token operator"},">"),s(`

  `),n("span",{class:"token comment"},`/**
   * 资源url
   */`),s(`
  url`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(`
  `),n("span",{class:"token comment"},`/**
   * 设置请求的 header，header 中不能设置 Referer。
   */`),s(`
  header`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"any"),s(`
  `),n("span",{class:"token comment"},`/**
   * 默认为 GET
   * 可以是：OPTIONS，GET，HEAD，POST，PUT，DELETE，TRACE，CONNECT
   */`),s(`
  method`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(`
    `),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token string"},"'OPTIONS'"),s(`
    `),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token string"},"'GET'"),s(`
    `),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token string"},"'HEAD'"),s(`
    `),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token string"},"'POST'"),s(`
    `),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token string"},"'PUT'"),s(`
    `),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token string"},"'DELETE'"),s(`
    `),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token string"},"'TRACE'"),s(`
    `),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token string"},"'CONNECT'"),s(`
    `),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token string"},"'DOWNLOAD'"),s(`
    `),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token string"},"'UPLOAD'"),s(`
  `),n("span",{class:"token comment"},`/**
   * 超时时间
   */`),s(`
  timeout`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),s(`
  `),n("span",{class:"token comment"},`/**
   * 如果设为json，会尝试对返回的数据做一次 JSON.parse
   */`),s(`
  dataType`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(`
  `),n("span",{class:"token comment"},`/**
   * 设置响应的数据类型。合法值：text、arraybuffer
   */`),s(`
  responseType`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(`
  `),n("span",{class:"token comment"},`/**
   * 验证 ssl 证书
   */`),s(`
  sslVerify`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"boolean"),s(`
  `),n("span",{class:"token comment"},`/**
   * 跨域请求时是否携带凭证
   */`),s(`
  withCredentials`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"boolean"),s(`
  `),n("span",{class:"token comment"},`/**
   * DNS解析时优先使用 ipv4
   */`),s(`
  firstIpv4`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"boolean"),s(`
  `),n("span",{class:"token comment"},`/**
   * 开启 http2
   */`),s(`
  enableHttp2`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"boolean"),s(`
  `),n("span",{class:"token comment"},`/**
   * 开启 quic
   */`),s(`
  enableQuic`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"boolean"),s(`
  `),n("span",{class:"token comment"},`/**
   * 开启 cache
   */`),s(`
  enableCache`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"boolean"),s(`
  `),n("span",{class:"token comment"},`/**
   * 是否开启 HttpDNS 服务。如开启，需要同时填入 httpDNSServiceId 。 HttpDNS 用法详见 [移动解析HttpDNS](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/HTTPDNS.html)
   */`),s(`
  enableHttpDNS`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"boolean"),s(`
  `),n("span",{class:"token comment"},`/**
   * HttpDNS 服务商 Id。 HttpDNS 用法详见 [移动解析HttpDNS](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/HTTPDNS.html)
   */`),s(`
  httpDNSServiceId`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"boolean"),s(`
  `),n("span",{class:"token comment"},`/**
   * 开启 transfer-encoding chunked
   */`),s(`
  enableChunked`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"boolean"),s(`
  `),n("span",{class:"token comment"},`/**
   * wifi下使用移动网络发送请求
   */`),s(`
  forceCellularNetwork`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"boolean"),s(`
  `),n("span",{class:"token comment"},`/**
   * 默认 false，开启后可在headers中编辑cookie（支付宝小程序10.2.33版本开始支持）
   */`),s(`
  enableCookie`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"boolean"),s(`
  `),n("span",{class:"token comment"},`/**
   * 是否开启云加速（详见[云加速服务](https://smartprogram.baidu.com/docs/develop/extended/component-codeless/cloud-speed/introduction/)）
   */`),s(`
  cloudCache`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" object "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token builtin"},"boolean"),s(`
  `),n("span",{class:"token comment"},`/**
   * 控制当前请求是否延时至首屏内容渲染后发送
   */`),s(`
  defer`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"boolean"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),n("h3",{id:"请求成功响应对象Response"},[s("请求成功响应对象 Response"),n("a",{class:"sc-anchor",href:"#请求成功响应对象Response"},"#")],-1),n("p",null,"一个请求的成功响应包含以下信息。",-1),n("p",null,"注意，此“成功”指服务器有处理请求，无论响应的状态码是什么。",-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"Response"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},`/**
   * 开发者服务器返回的数据
   */`),s(`
  data`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"any"),s(`
  `),n("span",{class:"token comment"},`/**
   * 开发者服务器返回的 HTTP 状态码
   */`),s(`
  statusCode`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),s(`
  `),n("span",{class:"token comment"},`/**
   * 开发者服务器返回的 HTTP Response Header
   */`),s(`
  header`),n("span",{class:"token operator"},":"),s(" Record"),n("span",{class:"token operator"},"<"),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token operator"},">"),s(`
  `),n("span",{class:"token comment"},`/**
   * 开发者服务器返回的 cookies，格式为字符串数组
   */`),s(`
  cookies`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token comment"},`/**
   * 请求的配置信息
   */`),s(`
  config`),n("span",{class:"token operator"},":"),s(` RequestConfig
  `),n("span",{class:"token comment"},`/**
   * 错误信息
   */`),s(`
  errMsg`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(`
  `),n("span",{class:"token comment"},`/**
   * 临时文件路径，下载后的文件会存储到一个临时文件。微信小程序、支付宝小程序、百度小程序、抖音小程序、飞书小程序
   *
   * 仅 download 接口。
   */`),s(`
  tempFilePath`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(`
  `),n("span",{class:"token comment"},`/**
   * 下载文件保存的路径（本地临时文件）。入参未指定 filePath 的情况下可用。支付宝小程序
   *
   * 仅 download 接口。
   */`),s(`
  apFilePath`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(`
  `),n("span",{class:"token comment"},`/**
   * 用户文件路径 (本地路径)。传入 filePath 时会返回，跟传入的 filePath 一致。微信小程序、支付宝小程序、抖音小程序、飞书小程序
   *
   * 仅 download 接口。
   */`),s(`
  filePath`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(`
  `),n("span",{class:"token comment"},`/**
   * 文件内容。QQ小程序
   *
   * 仅 download 接口。
   */`),s(`
  fileContent`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(` Buffer
  `),n("span",{class:"token comment"},`/**
   * 需要基础库： \`2.10.4\`
   *
   * 网络请求过程中一些调试信息，[查看详细说明](https://developers.weixin.qq.com/miniprogram/dev/framework/performance/network.html)
   *
   * 仅 download 接口。
   */`),s(`
  profile`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" UniApp"),n("span",{class:"token punctuation"},"."),s(`RequestProfile
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),n("p",null,"当使用 then 时，您将接收如下响应:",-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[s("request"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'/user/12345'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("response"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("response"),n("span",{class:"token punctuation"},"."),s("data"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("response"),n("span",{class:"token punctuation"},"."),s("statusCode"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("response"),n("span",{class:"token punctuation"},"."),s("header"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("response"),n("span",{class:"token punctuation"},"."),s("cookies"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("response"),n("span",{class:"token punctuation"},"."),s("config"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("response"),n("span",{class:"token punctuation"},"."),s("errMsg"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1),n("h3",{id:"请求失败响应对象ErrorResponse"},[s("请求失败响应对象 ErrorResponse"),n("a",{class:"sc-anchor",href:"#请求失败响应对象ErrorResponse"},"#")],-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"ErrorResponse"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},`/**
   * 请求的配置信息
   */`),s(`
  config`),n("span",{class:"token operator"},":"),s(` RequestConfig
  `),n("span",{class:"token comment"},`/**
   * 错误信息
   */`),s(`
  errMsg`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),n("p",null,"请求失败原因可能为以下或其他：",-1),n("ul",null,[n("li",null,"网络不通"),n("li",null,"服务器拒绝连接"),n("li",null,"跨域错误"),n("li",null,"连接超时"),n("li",null,"其他")],-1),n("h3",{id:"拦截器"},[s("拦截器"),n("a",{class:"sc-anchor",href:"#拦截器"},"#")],-1),n("p",null,"在请求或响应被 then 或 catch 处理前拦截它们。",-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[n("span",{class:"token comment"},"// 添加请求拦截器"),s(`
request`),n("span",{class:"token punctuation"},"."),s("interceptors"),n("span",{class:"token punctuation"},"."),s("request"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s(`
  `),n("span",{class:"token punctuation"},"("),s("config"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// 在发送请求之前做些什么"),s(`
    `),n("span",{class:"token keyword"},"return"),s(` config
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"("),s("error"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// 对请求错误做些什么"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token builtin"},"Promise"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reject"),n("span",{class:"token punctuation"},"("),s("error"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// 添加响应拦截器"),s(`
request`),n("span",{class:"token punctuation"},"."),s("interceptors"),n("span",{class:"token punctuation"},"."),s("response"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s(`
  `),n("span",{class:"token punctuation"},"("),s("response"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// 服务器有响应触发该函数，需要对非 2xx 做处理"),s(`
    `),n("span",{class:"token comment"},"// 对响应数据做点什么"),s(`
    `),n("span",{class:"token keyword"},"return"),s(` response
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"("),s("error"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// 请求失败时触发该函数"),s(`
    `),n("span",{class:"token comment"},"// 对响应错误做点什么"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token builtin"},"Promise"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reject"),n("span",{class:"token punctuation"},"("),s("error"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1),n("h3",{id:"中断请求"},[s("中断请求"),n("a",{class:"sc-anchor",href:"#中断请求"},"#")],-1),n("p",null,[n("code",null,"getTask"),s(" 配置项可用于获取 "),n("a",{target:"_blank",href:"https://uniapp.dcloud.net.cn/api/request/request.html#requesttask-values"},[n("code",null,"RequestTask")]),s("。")],-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[n("span",{class:"token keyword"},"let"),s(" requestTask"),n("span",{class:"token operator"},":"),s(" UniApp"),n("span",{class:"token punctuation"},"."),s("RequestTask "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),s(`

request`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'/user?ID=12345'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"getTask"),n("span",{class:"token punctuation"},"("),s("task"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    requestTask `),n("span",{class:"token operator"},"="),s(` task
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  requestTask`),n("span",{class:"token operator"},"?."),n("span",{class:"token function"},"abort"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1),n("h3",{id:"重试"},[s("重试"),n("a",{class:"sc-anchor",href:"#重试"},"#")],-1),n("p",null,[s("将重试相关配置放置在 "),n("code",null,"extra"),s(" 配置项，并在请求失败时重试。")],-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[s("request"),n("span",{class:"token punctuation"},"."),s("interceptors"),n("span",{class:"token punctuation"},"."),s("response"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(" config"),n("span",{class:"token punctuation"},","),s(" errMsg "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" extra "),n("span",{class:"token operator"},"="),s(" config"),n("span",{class:"token punctuation"},"."),s(`extra
  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("extra"),n("span",{class:"token punctuation"},"."),s("retryCount "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token operator"},"--"),s("extra"),n("span",{class:"token punctuation"},"."),s("retryCount "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[n("span",{class:"token builtin"},"Promise")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("resolve"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),s("resolve"),n("span",{class:"token punctuation"},","),s(" extra"),n("span",{class:"token punctuation"},"."),s("retryDelay "),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" request"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"request"),n("span",{class:"token punctuation"},"("),s("config"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  uni`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"showToast"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    title`),n("span",{class:"token operator"},":"),s(" errMsg"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token builtin"},"Promise"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reject"),n("span",{class:"token punctuation"},"("),s("errMsg"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1),n("p",null,"发送请求",-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[s("request"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'admin/users'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  extra`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    retryCount`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
    retryDelay`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1),n("h3",{id:"通用工厂函数"},[s("通用工厂函数"),n("a",{class:"sc-anchor",href:"#通用工厂函数"},"#")],-1),n("p",null,[s("下面演示如何编写一个通用的 "),n("code",null,"Request"),s(" 工厂函数，可以处理添加 token、失败状态码、错误提示、重试。")],-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[n("span",{class:"token comment"},"// @/utils/request.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Request"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"RequestConfig"),s(),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'sard-uniapp'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useUserStore "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@/stores/user'"),s(`

`),n("span",{class:"token keyword"},"const"),s(" errToastDuration "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"5000"),s(`

`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"createRequest"),n("span",{class:"token punctuation"},"("),s("defaultConfig"),n("span",{class:"token operator"},":"),s(" RequestConfig"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" request "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Request"),n("span",{class:"token punctuation"},"("),s("defaultConfig"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// 请求拦截器"),s(`
  request`),n("span",{class:"token punctuation"},"."),s("interceptors"),n("span",{class:"token punctuation"},"."),s("request"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("config"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" userStore "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useUserStore"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token comment"},"// 添加 token 到请求头"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("userStore"),n("span",{class:"token punctuation"},"."),s("token"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      config`),n("span",{class:"token punctuation"},"."),s("header"),n("span",{class:"token punctuation"},"."),s("Authorization "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'Bearer '"),s(),n("span",{class:"token operator"},"+"),s(" userStore"),n("span",{class:"token punctuation"},"."),s(`token
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"return"),s(` config
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// 响应拦截器"),s(`
  request`),n("span",{class:"token punctuation"},"."),s("interceptors"),n("span",{class:"token punctuation"},"."),s("response"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token punctuation"},"("),s("response"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// 处理 http 状态码"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("response"),n("span",{class:"token punctuation"},"."),s("statusCode "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"200"),s(),n("span",{class:"token operator"},"||"),s(" response"),n("span",{class:"token punctuation"},"."),s("statusCode "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"300"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        uni`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"showToast"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
          title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Error: statusCode '"),s(),n("span",{class:"token operator"},"+"),s(" response"),n("span",{class:"token punctuation"},"."),s("statusCode"),n("span",{class:"token punctuation"},","),s(`
          icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'none'"),n("span",{class:"token punctuation"},","),s(`
          duration`),n("span",{class:"token operator"},":"),s(" errToastDuration"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token builtin"},"Promise"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reject"),n("span",{class:"token punctuation"},"("),s("response"),n("span",{class:"token punctuation"},"."),s("errMsg"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`

      `),n("span",{class:"token comment"},"// 假设返回 json 类型数据"),s(`
      `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(`
        code`),n("span",{class:"token punctuation"},","),s(`
        data`),n("span",{class:"token punctuation"},","),s(`
        message `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("response"),n("span",{class:"token punctuation"},"."),s("data "),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"as"),s(),n("span",{class:"token punctuation"},"{"),s(`
        code`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),s(`
        data`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"any"),s(`
        message`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`

      `),n("span",{class:"token comment"},"// 处理自定义状态码"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("code "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        uni`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"showToast"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
          title`),n("span",{class:"token operator"},":"),s(" message"),n("span",{class:"token punctuation"},","),s(`
          icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'none'"),n("span",{class:"token punctuation"},","),s(`
          duration`),n("span",{class:"token operator"},":"),s(" errToastDuration"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token builtin"},"Promise"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reject"),n("span",{class:"token punctuation"},"("),s("message"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`

      `),n("span",{class:"token keyword"},"return"),s(` data
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(" config"),n("span",{class:"token punctuation"},","),s(" errMsg "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" extra "),n("span",{class:"token operator"},"="),s(" config"),n("span",{class:"token punctuation"},"."),s(`extra
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("extra"),n("span",{class:"token punctuation"},"."),s("retryCount "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token operator"},"--"),s("extra"),n("span",{class:"token punctuation"},"."),s("retryCount "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[n("span",{class:"token builtin"},"Promise")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("resolve"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(`
          `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),s("resolve"),n("span",{class:"token punctuation"},","),s(" extra"),n("span",{class:"token punctuation"},"."),s("retryDelay "),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" request"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"request"),n("span",{class:"token punctuation"},"("),s("config"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`

      `),n("span",{class:"token comment"},"// 处理请求失败"),s(`
      uni`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"showToast"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
        title`),n("span",{class:"token operator"},":"),s(" errMsg"),n("span",{class:"token punctuation"},","),s(`
        icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'none'"),n("span",{class:"token punctuation"},","),s(`
        duration`),n("span",{class:"token operator"},":"),s(" errToastDuration"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token builtin"},"Promise"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reject"),n("span",{class:"token punctuation"},"("),s("errMsg"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token keyword"},"return"),s(` request
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),n("p",null,"创建请求对象",-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(" requestV1 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"createRequest"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  baseURL`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://localhost/api-v1'"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(" requestV2 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"createRequest"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  baseURL`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://localhost/api-v2'"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1),n("h3",{id:"上传"},[s("上传"),n("a",{class:"sc-anchor",href:"#上传"},"#")],-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[s("request"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"upload"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'api/upload'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},`/**
   * 资源url
   */`),s(`
  url`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(`
  `),n("span",{class:"token comment"},"/**\n   * 自动加在 `url` 前面，除非 `url` 是一个绝对 URL\n   */"),s(`
  baseURL`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(`
  `),n("span",{class:"token comment"},`/**
   * 与请求一起发送的 URL 参数
   */`),s(`
  params`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token punctuation"},"["),s("key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"any"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token comment"},`/**
   * 获取 uni.uploadFile 返回值，可用于中断请求
   */`),s(`
  getTask`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s("task"),n("span",{class:"token operator"},":"),s(" UniApp"),n("span",{class:"token punctuation"},"."),s("UploadTask"),n("span",{class:"token punctuation"},","),s(" config"),n("span",{class:"token operator"},":"),s(" RequestConfig"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),s(`
  `),n("span",{class:"token comment"},`/**
   * 设置请求的 header，header 中不能设置 Referer。
   */`),s(`
  header`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"any"),s(`
  `),n("span",{class:"token comment"},`/**
   * 超时时间
   */`),s(`
  timeout`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),s(`
  `),n("span",{class:"token comment"},`/**
   * 需要上传的文件列表。App、H5（ 2.6.15+）
   */`),s(`
  files`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" UploadFileOptionFiles"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token comment"},`/**
   * 文件类型，image/video/audio，仅支付宝小程序，且必填。
   * - image: 图像
   * - video: 视频
   * - audio: 音频
   */`),s(`
  fileType`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'image'"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token string"},"'video'"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token string"},"'audio'"),s(`
  `),n("span",{class:"token comment"},`/**
   * 要上传的文件对象。	仅H5（2.6.15+）支持
   */`),s(`
  file`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(` File
  `),n("span",{class:"token comment"},`/**
   * 要上传文件资源的路径
   */`),s(`
  filePath`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(`
  `),n("span",{class:"token comment"},`/**
   * 文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
   */`),s(`
  name`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(`
  `),n("span",{class:"token comment"},`/**
   * HTTP 请求中其他额外的 form data
   */`),s(`
  formData`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
   `),n("span",{class:"token punctuation"},"["),s("key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"any"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1),n("h3",{id:"下载"},[s("下载"),n("a",{class:"sc-anchor",href:"#下载"},"#")],-1),n("div",{class:"sc-code-wrapper"},[n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[s("request"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"upload"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'api/download'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},`/**
   * 资源url
   */`),s(`
  url`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(`
  `),n("span",{class:"token comment"},"/**\n   * 自动加在 `url` 前面，除非 `url` 是一个绝对 URL\n   */"),s(`
  baseURL`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(`
  `),n("span",{class:"token comment"},`/**
   * 与请求一起发送的 URL 参数
   */`),s(`
  params`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token punctuation"},"["),s("key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"any"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token comment"},`/**
   * 获取 uni.uploadFile 返回值，可用于中断请求
   */`),s(`
  getTask`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s("task"),n("span",{class:"token operator"},":"),s(" UniApp"),n("span",{class:"token punctuation"},"."),s("UploadTask"),n("span",{class:"token punctuation"},","),s(" config"),n("span",{class:"token operator"},":"),s(" RequestConfig"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),s(`
  `),n("span",{class:"token comment"},`/**
   * 设置请求的 header，header 中不能设置 Referer。
   */`),s(`
  header`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"any"),s(`
  `),n("span",{class:"token comment"},`/**
   * 超时时间
   */`),s(`
  timeout`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),s(`
  `),n("span",{class:"token comment"},`/**
   * 要下载文件资源的路径
   */`),s(`
  filePath`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1)])),_:1})]),_:1})}const g=p(i,[["render",r]]);export{g as default};
