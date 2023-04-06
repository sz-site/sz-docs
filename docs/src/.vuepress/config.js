const { description } = require('../../package');
const fs = require('fs');
const path = require('path');

module.exports = {
	base: '/sz-docs/',
  title: '生椰拿铁',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: 'https://static.uino.cn/uino_favicon_32.ico' }]
  ],
  themeConfig: {
    footer: "MIT Licensed | Copyright © 2018-present Evan You",
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    sidebarDepth: 2,
    lastUpdated: false,
    nav: [
      {
        text: '文章',
        link: '/guide/',
      },
    ],
    sidebar: [
      ['/guide/万字解析 - React Fiber架构', '第1期：万字解析 - React Fiber架构'],
      ['/guide/Svelte，未来十年可能取代React和Vue等其他框架的新兴技术', '第2期：未来之星 - Svelte'],
      ['/guide/一看就会 - Git篇', '第3期：一看就会 - Git篇'],
      ['/guide/意博趣深 - RxJS', '第4期：意博趣深 - RxJS'],
      ['/guide/一劳永逸 - CSS布局', '第5期（上）：一劳永逸 - CSS布局'],
      ['/guide/CSS前生今世', '第5期（下）：一劳永逸 - CSS前生今世'],
      ['/guide/降维打击-Webpack对我们的代码做了什么？', '第6期：降维打击-Webpack对我们的代码做了什么？'],
      ['/guide/轮播图篇', '第7期：相见恨晚 - 轮播图篇'],
      ['/guide/TypeScript上', '第8期（上）：通俗易懂 - TypeScript(上)'],
      ['/guide/TypeScript下', '第8期（下）：通俗易懂-TypeScript(下)'],
      ['/guide/从koa到oak', '第9期：谁主沉浮 - 从koa到oak'],
      ['/guide/数字空间 - 如何提供稳定可靠服务？', '第10期：数字空间 - 如何提供稳定可靠服务？'],
      ['/guide/序列比对-Smith–Waterman算法', '第11期（上）：序列比对-Smith–Waterman算法'],
      ['/guide/图布局算法-Sugiyama算法框架', '第11期（下）：图布局算法-Sugiyama算法框架'],
      ['/guide/数组进阶 - 数组学到什么样才算精通', '第12期（上）：数组进阶 - 数组学到什么样才算精通'],
      ['/guide/复杂度分析 - 这可能是你见过的最好的复杂度分析文章', '第12期（中）：复杂度分析 - 这可能是你见过的最好的复杂度分析文章'],
      ['/guide/散列表与二分查找', '第12期（下）：散列表与二分查找'],
      ['/guide/Promise漫谈', '第13期：一诺千金 - Promise漫谈'],
      ['/guide/编译原理 - 抽象语法树（Abstract Syntax Tree，AST）', '第14期：编译原理 - 抽象语法树（Abstract Syntax Tree，AST）'],
      [ '/guide/如何写出健壮的CSS.md', '第15期（上）：得心应手 - 如何写出健壮的CSS' ],
      [ '/guide/CSS3的世界.md', '第15期（上）：得心应手 - CSS3的世界' ],
      [ '/guide/正则表达式.md', '第16期：如鱼得水 - 正则表达式' ],
      [ '/guide/由一道面试题想到的.md', '第17期：由一道面试题想到的' ],
      [ '/guide/浅谈移动端.md', '第18期：手机时代 - 浅谈移动端' ],
      [
        '/guide/js设计模式思想之策略模式思想与发布订阅模式思想.md',
        '第19期： 代码重构 - 浅谈策略模式思想与发布-订阅模式思想'
      ],
      [ '/guide/第二十期：手写系列-简易webpack编译过程.md', '第20期：手写系列 - 简易webpack编译过程' ],
      [ '/guide/Vite pourquoi si vite.md', '第21期：Vite pourquoi si vite' ],
      [ '/guide/WebAssembly.md', '第22期：未来已来 - WebAssembly' ],
      [ '/guide/浅谈数据压缩.md', '第23期：浅谈数据压缩'],
      [
        '/guide/第二十四期：Apache POI Excel 和 EasyExcel——读写Excel.md',
        '第24期：Apache POI Excel 和 EasyExcel——读写Excel'
      ],
      [ '/guide/第二十五期：浅谈多线程.md', '第25期：浅谈多线程' ],
      [ '/guide/霍夫曼编码-Huffman Coding.md', '第26期：霍夫曼编码-Huffman Coding' ],
      [ '/guide/聚类基础-KMean和均值漂移聚类.md', '第27期：聚类基础-KMean和均值漂移聚类' ],
      [ '/guide/web性能优化.md', '第28期：web性能优化' ],
      [ '/guide/第二十九期：分包吗 - Webpack.md', '第29期：分包吗 - Webpack' ],
      [ '/guide/TypeScript类型编程.md', '第30期：类型体操 - TypeScript类型编程' ],
      [ '/guide/Javasript设计模式之状态模式和代理模式.md', '第31期（上）：Javasript设计模式之状态模式和代理模式' ],
      [
        '/guide/Javasript设计模式之工厂模式和装饰器模式.md',
        '第31期（下）：Javasript设计模式之工厂模式和装饰器模式'
      ],
      [
        '/guide/ahooks-一套方便且实用的React Hooks库.md',
        '第32期：ahooks-一套方便且实用的React Hooks库'
      ],
      [ '/guide/Babel-通天塔.md', '第33期：Babel-通天塔' ],
      [ '/guide/Canvas.md', '第34期：Canvas-全集宝典' ],
      [ '/guide/WebSocket原理.md', '第35期：WebSocket原理' ],
      [ '/guide/操作系统——前言.md', '第36期：操作系统——前言' ],
      [ '/guide/WebSocket数据加密.md', ' 第37期：WebSocket数据加密' ],
      [ '/guide/Redis五种数据类型实现.md', '第38期：Redis五种数据类型实现' ],
      [ '/guide/操作系统——启动流程.md', '第39期：操作系统——启动流程' ],
      [ '/guide/Docker初识.md', '第40期：Docker初识' ],
      [ '/guide/webpack-runtime.md', '第41期：揭开WebpackRuntime的面纱' ],
      [ '/guide/grid layout.md', '第42期：前端布局大法之grid布局' ],
      [ '/guide/Vuejs 3.X源码解析---渲染流程.md', '第43期：Vuejs 3.X源码解析---渲染流程'],
    ]
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/nprogress',
  ]
}
