(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{163:function(a,t,s){a.exports=s.p+"assets/img/intellisense.4bb5c01c.png"},229:function(a,t,s){"use strict";s.r(t);var r=s(2),e=Object(r.a)({},function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"常见问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#常见问题","aria-hidden":"true"}},[a._v("#")]),a._v(" 常见问题")]),a._v(" "),r("h2",{attrs:{id:"为什么不支持-linq"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么不支持-linq","aria-hidden":"true"}},[a._v("#")]),a._v(" 为什么不支持 Linq?")]),a._v(" "),r("p",[a._v("SmartSql 希望 开发人员更多的接触 Sql ,获得绝对的控制权与安全感。所以目前没有计划支持 Code First 编程模式。")]),a._v(" "),r("blockquote",[r("p",[a._v("我想好了Sql怎么写，然后再来写Linq,完了可能还要再查看一下Linq输出的Sql是什么样的，这真是糟糕的体验。要想对Sql做绝对的优化，那么开发者必须对Sql有绝对的控制权。另外Sql本身很简单，为何要增加一层翻译器呢？")])]),a._v(" "),r("blockquote",[r("p",[r("strong",[a._v("Codefirst 一个美好，却不切实际的想法。")])])]),a._v(" "),r("h2",{attrs:{id:"对smartsql很感兴趣，不知从何开始？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#对smartsql很感兴趣，不知从何开始？","aria-hidden":"true"}},[a._v("#")]),a._v(" 对SmartSql很感兴趣，不知从何开始？")]),a._v(" "),r("p",[a._v("请阅读示例项目："),r("a",{attrs:{href:"https://github.com/Ahoo-Wang/SmartSql-Starter",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/Ahoo-Wang/SmartSql-Starter"),r("OutboundLink")],1)]),a._v(" "),r("h2",{attrs:{id:"smartsql支持哪些数据库？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#smartsql支持哪些数据库？","aria-hidden":"true"}},[a._v("#")]),a._v(" SmartSql支持哪些数据库？")]),a._v(" "),r("p",[a._v("只要是实现了ADO.NET的数据库驱动的数据库均支持，您只需要安装好对应的驱动即可。")]),a._v(" "),r("h2",{attrs:{id:"smartsql是否支持多数据库？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#smartsql是否支持多数据库？","aria-hidden":"true"}},[a._v("#")]),a._v(" SmartSql是否支持多数据库？")]),a._v(" "),r("p",[a._v("支持，可以通过配置引入多个数据库实例：")]),a._v(" "),r("div",{staticClass:"language-csharp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-csharp"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" sqlServerMapper "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" SmartSqlContainer"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Instance"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("GetSmartSql")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[a._v('"SqlServer"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" mySqlMapepr "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" SmartSqlContainer"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Instance"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("GetSmartSql")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[a._v('"MySql"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),r("h2",{attrs:{id:"smartsql性能如何？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#smartsql性能如何？","aria-hidden":"true"}},[a._v("#")]),a._v(" SmartSql性能如何？")]),a._v(" "),r("p",[a._v("SmartSql的性能与Dapper是保存同一级别的≈原生手写（另外多个其他ORM在自己的测试报告中写明比Dapper性能还高，"),r("strong",[a._v("请同学们保持好奇")]),a._v("），文档中的 SmartSql 性能对比测试报告是开放了源代码的，任何对于性能感兴趣的同学均可以clone源代码自己跑一遍性能测试。"),r("strong",[a._v("自己Run的性能测试才是真的测试！")])]),a._v(" "),r("h2",{attrs:{id:"smartsql可用性如何？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#smartsql可用性如何？","aria-hidden":"true"}},[a._v("#")]),a._v(" SmartSql可用性如何？")]),a._v(" "),r("p",[a._v("SmartSql 已历经1年多的线上数十个微服务场景验证，其性能、可用性、生产力是得到验证的。")]),a._v(" "),r("h2",{attrs:{id:"对于简单curd配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#对于简单curd配置","aria-hidden":"true"}},[a._v("#")]),a._v(" 对于简单CURD配置")]),a._v(" "),r("p",[a._v("作者还开源了一个代码生成器项目：SmartCode: "),r("a",{attrs:{href:"https://github.com/Ahoo-Wang/SmartCode",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/Ahoo-Wang/SmartCode"),r("OutboundLink")],1),a._v(" ,可以使用SmartCode生成解决方案，包括所有CURD操作的XML/Entity/IRepository!")]),a._v(" "),r("h2",{attrs:{id:"为什么选择xml作为配置语法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么选择xml作为配置语法","aria-hidden":"true"}},[a._v("#")]),a._v(" 为什么选择Xml作为配置语法")]),a._v(" "),r("p",[a._v("Xml 的标签语法用起来会比较灵活. 比如 筛选标签,嵌套复用,可读性.\n复杂查询场景用起来会非常舒爽,可读性也会比较好,代码层面不需要做任何处理,全部交给Xml .")]),a._v(" "),r("h2",{attrs:{id:"集群场景如何使用获得缓存一致性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#集群场景如何使用获得缓存一致性","aria-hidden":"true"}},[a._v("#")]),a._v(" 集群场景如何使用获得缓存一致性")]),a._v(" "),r("p",[a._v("SmartSql提供了Redis缓存插件,可通过NuGet安装:")]),a._v(" "),r("div",{staticClass:"language-csharp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-csharp"}},[r("code",[a._v("Install"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),r("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Package")]),a._v(" SmartSql"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Cache"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Redis\n")])])]),r("h2",{attrs:{id:"集群场景中sql配置很多copy怎么办"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#集群场景中sql配置很多copy怎么办","aria-hidden":"true"}},[a._v("#")]),a._v(" 集群场景中Sql配置很多Copy怎么办")]),a._v(" "),r("p",[a._v("SmartSql 提供了 ZooKeeper配置插件,通过NuGet安装:")]),a._v(" "),r("div",{staticClass:"language-csharp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-csharp"}},[r("code",[a._v("Install"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),r("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Package")]),a._v(" SmartSql"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("ZooKeeperConfig\n")])])]),r("ul",[r("li",[a._v("另外作者还开源了ZooKeeper节点管理工具:"),r("a",{attrs:{href:"https://github.com/Ahoo-Wang/ZooKeeper-Admin",target:"_blank",rel:"noopener noreferrer"}},[a._v("ZooKeeper-Admin"),r("OutboundLink")],1),a._v(",可直接通过该管理工具直接配置. 关于"),r("a",{attrs:{href:"https://github.com/Ahoo-Wang/ZooKeeper-Admin",target:"_blank",rel:"noopener noreferrer"}},[a._v("ZooKeeper-Admin"),r("OutboundLink")],1),a._v(":")]),a._v(" "),r("li",[a._v("使用 Asp.net Core 编写")]),a._v(" "),r("li",[a._v("Docker安装:")])]),a._v(" "),r("div",{staticClass:"language-csharp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-csharp"}},[r("code",[a._v("docker pull ahoowang"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("zookeeper"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("admin\ndocker run "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("name zooAdmin "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("p "),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v(" ahoowang"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("zookeeper"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("admin\n")])])]),r("ul",[r("li",[a._v("本地安装")])]),a._v(" "),r("div",{staticClass:"language-csharp extra-class"},[r("pre",{pre:!0,attrs:{class:"language-csharp"}},[r("code",[a._v("git clone https"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("github"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("com"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("Ahoo"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("Wang"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("ZooKeeper"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),r("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Admin"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("git")]),a._v("\ndotnet run\n")])])]),r("h2",{attrs:{id:"我之前使用过mybatis-感觉smartsql有种似曾相识的感觉"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#我之前使用过mybatis-感觉smartsql有种似曾相识的感觉","aria-hidden":"true"}},[a._v("#")]),a._v(" 我之前使用过MyBatis,感觉SmartSql有种似曾相识的感觉")]),a._v(" "),r("p",[a._v("是的,SmartSql编程模型多处借鉴了MyBatis,如果你之前使用过MyBatis,那么SmartSql将是你更好的选择,因为你几乎不需要有任何编程方式的转变就可以直接上手,并且拥有跨平台,高性能,以及众多你插件的支持.")]),a._v(" "),r("h2",{attrs:{id:"手写xml-很痛苦是否有智能提示"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#手写xml-很痛苦是否有智能提示","aria-hidden":"true"}},[a._v("#")]),a._v(" 手写Xml 很痛苦是否有智能提示")]),a._v(" "),r("p",[a._v("SmartSql 提供了Xml架构文档,可以获得输入智能提示的体验:\n"),r("img",{attrs:{src:s(163),alt:"智能提示"}})])])},[],!1,null,null,null);t.default=e.exports}}]);