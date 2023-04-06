(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{302:function(e,t,n){"use strict";n.r(t);var o=n(14),s=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"我是怎么接触到ahooks的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#我是怎么接触到ahooks的"}},[e._v("#")]),e._v(" 我是怎么接触到ahooks的")]),e._v(" "),t("p",[e._v("有一天进行开发，遇到的需要防抖的需求，平时一直借用RxJs来写防抖，经常会在各种地方重复用到，于是就想在网上找找解决方案。就接触到了"),t("a",{attrs:{href:"https://ahooks.js.org/zh-CN/hooks/use-debounce",target:"_blank",rel:"noopener noreferrer"}},[e._v("useDebounce"),t("OutboundLink")],1),e._v("这个钩子，发现用起来竟然十分轻松顺手，从此发现了一片新大陆——竟然有现成易用的，覆盖面还稍微有那么一点点广的React库。那么，看看官网，他都有什么呢？")]),e._v(" "),t("h2",{attrs:{id:"简单介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简单介绍"}},[e._v("#")]),e._v(" 简单介绍")]),e._v(" "),t("p",[e._v("ahooks的官网对自己的介绍很短：")]),e._v(" "),t("blockquote",[t("p",[e._v("ahooks，发音 [eɪ hʊks]，是一套高质量可靠的 React Hooks 库。")])]),e._v(" "),t("p",[e._v("就这么一句话，十分简单，也没体现出它的用途，目的，功能。")]),e._v(" "),t("p",[e._v("那我们来看看他的开发者怎么说：")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.cn/post/6844904196446093326",target:"_blank",rel:"noopener noreferrer"}},[e._v("掘金链接"),t("OutboundLink")],1)]),e._v(" "),t("blockquote",[t("p",[e._v("ahooks 基于 React Hooks 的逻辑封装能力，提供了大量常见好用的 Hooks，可以极大降低代码复杂度，提升开发效率。"),t("br"),e._v("\nahooks 致力成为和 antd/fusion 一样的 React 基础设施，帮助开发者在逻辑层面省去大量的重复工作。")])]),e._v(" "),t("p",[e._v("跟预想的一样，就是对开发过程中会遇到的常用情况封装成"),t("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/hooks-custom.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("自定义hook"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("p",[e._v("那么，除了防抖之外，还有什么常用的功能被封装起来了呢？平时没用到ahooks的时候开发起来也很顺利啊？它能有多常用？")]),e._v(" "),t("p",[e._v("我在这里举几个栗子：")]),e._v(" "),t("p",[e._v("官方声称在React 项目中的网络请求场景使用它就够了的"),t("a",{attrs:{href:"https://ahooks.js.org/zh-CN/hooks/use-request/index",target:"_blank",rel:"noopener noreferrer"}},[e._v("useRequest"),t("OutboundLink")],1),e._v("。支持自动请求，手动请求，屏幕聚焦时重新发送请求，防抖节流，错误重试，轮询，SWR，缓存等功能。")]),e._v(" "),t("p",[e._v("可以对你的state进行防抖节流操作的"),t("a",{attrs:{href:"https://ahooks.js.org/zh-CN/hooks/use-debounce",target:"_blank",rel:"noopener noreferrer"}},[e._v("useDebounce"),t("OutboundLink")],1),e._v("和"),t("a",{attrs:{href:"https://ahooks.js.org/zh-CN/hooks/use-throttle",target:"_blank",rel:"noopener noreferrer"}},[e._v("useThrottle"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("p",[e._v("可以不用担心组件被卸载后异步回调内执行setState的"),t("a",{attrs:{href:"https://ahooks.js.org/zh-CN/hooks/use-safe-state",target:"_blank",rel:"noopener noreferrer"}},[e._v("useSafeState"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("p",[e._v("可以像使用state一样使用cookie的"),t("a",{attrs:{href:"https://ahooks.js.org/zh-CN/hooks/use-cookie-state",target:"_blank",rel:"noopener noreferrer"}},[e._v("useCookieState"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("p",[e._v("可以解决大列表渲染卡顿问题的虚拟列表"),t("a",{attrs:{href:"https://ahooks.js.org/zh-CN/hooks/use-virtual-list",target:"_blank",rel:"noopener noreferrer"}},[e._v("useVirtualList"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("p",[e._v("可以再也不用担心自己设置的定时器忘记清除了的"),t("a",{attrs:{href:"https://ahooks.js.org/zh-CN/hooks/use-interval",target:"_blank",rel:"noopener noreferrer"}},[e._v("useInterval"),t("OutboundLink")],1),e._v("和"),t("a",{attrs:{href:"https://ahooks.js.org/zh-CN/hooks/use-timeout",target:"_blank",rel:"noopener noreferrer"}},[e._v("useTimeout"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("p",[e._v("还有像是"),t("a",{attrs:{href:"https://ahooks.js.org/zh-CN/hooks/use-click-away",target:"_blank",rel:"noopener noreferrer"}},[e._v("useClickAway"),t("OutboundLink")],1),e._v("，"),t("a",{attrs:{href:"https://ahooks.js.org/zh-CN/hooks/use-drop",target:"_blank",rel:"noopener noreferrer"}},[e._v("useDrop"),t("OutboundLink")],1),e._v("，"),t("a",{attrs:{href:"https://ahooks.js.org/zh-CN/hooks/use-scroll",target:"_blank",rel:"noopener noreferrer"}},[e._v("useScroll"),t("OutboundLink")],1),e._v("，"),t("a",{attrs:{href:"https://ahooks.js.org/zh-CN/hooks/use-size",target:"_blank",rel:"noopener noreferrer"}},[e._v("useSize"),t("OutboundLink")],1),e._v("等可以与dom进行交互的钩子。")]),e._v(" "),t("p",[e._v("等等等等一系列神奇的钩子，让人一眼看上就觉得好用但是不知道哪儿能用得上。")]),e._v(" "),t("p",[e._v("光用怎么能行呢，其中一部分钩子的使用情况不是跟平时我写的一样吗？得学习学习人家的优点，让我们来看看开发者是怎么说它的优点的：")]),e._v(" "),t("blockquote",[t("p",[e._v("ahooks 3.0 的目标是建设"),t("strong",[e._v("高质量可靠的")]),e._v("React Hooks 库，我们希望成为像 lodash 一样的稳定的基础依赖。相较于 2.0，具有以下几个优势：")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("全面支持 SSR")])]),e._v(" "),t("li",[t("strong",[e._v("全新的 useRequest")])]),e._v(" "),t("li",[t("strong",[e._v("所有的输出函数地址是固定的，避免闭包问题")])]),e._v(" "),t("li",[t("strong",[e._v("DOM 类 Hooks 支持 target 动态变化")])]),e._v(" "),t("li",[e._v("更合理的 API 设计")]),e._v(" "),t("li",[e._v("解决了在严格模式（Strict Mode）下的问题")]),e._v(" "),t("li",[e._v("解决了在 react-refresh（HRM）模式下的问题")]),e._v(" "),t("li",[e._v("新增了更多 Hooks")]),e._v(" "),t("li",[e._v("修复了很多已知问题")])])]),e._v(" "),t("h2",{attrs:{id:"一个特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一个特性"}},[e._v("#")]),e._v(" 一个特性")]),e._v(" "),t("p",[e._v("所有输出函数的"),t("strong",[e._v("地址是固定")]),e._v("的？")]),e._v(" "),t("p",[e._v("这句话是什么意思呢？")]),e._v(" "),t("p",[e._v("不知道各位有没有发现一个盲点：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://pan.udolphin.com/files/image/2022/4/2f6e28a2a3779fe8fb9163282e3fbead.png",alt:""}})]),e._v(" "),t("p",[e._v("当我用到state的时候，eslint会提示我在useEffect里面添加其为依赖。")]),e._v(" "),t("p",[e._v("但当我用到setState的时候，就没有：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://pan.udolphin.com/files/image/2022/4/1909d67e3346bbb767887001112b30f2.png",alt:""}})]),e._v(" "),t("p",[e._v("这是为什么呢？答案是useState返回的setState的地址永远是不变的。")]),e._v(" "),t("p",[e._v("而这代表着什么呢？我们先来看一个例子")]),e._v(" "),t("h2",{attrs:{id:"usememoizedfn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usememoizedfn"}},[e._v("#")]),e._v(" useMemoizedFn")]),e._v(" "),t("p",[e._v("首先要提到这么一个钩子："),t("a",{attrs:{href:"https://ahooks.js.org/zh-CN/hooks/use-memoized-fn",target:"_blank",rel:"noopener noreferrer"}},[e._v("useMemoizedFn"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("官方文档给的简介是：")]),e._v(" "),t("blockquote",[t("p",[e._v("理论上，可以使用 useMemoizedFn 完全代替 useCallback。")])]),e._v(" "),t("p",[e._v("那么，为什么呢？")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('import { useMemoizedFn } from "ahooks";\nimport { useCallback, useEffect, useState } from "react";\n\nexport function AUseMemoizedFn() {\n  const [count, setCount] = useState(0);\n  const [number, setNumber] = useState(0);\n  const memoizedFn = useMemoizedFn(() => {\n    console.log(count, "memoized");\n  });\n  const callbackFn = useCallback(() => {\n    console.log(count, "callback");\n  }, [count]);\n  const normalFn = () => {\n    console.log(count, "normal");\n  };\n  useEffect(() => {\n    console.log("memo变了");\n  }, [memoizedFn]);\n  useEffect(() => {\n    console.log("callback变了");\n  }, [callbackFn]);\n  useEffect(() => {\n    console.log("normal变了");\n  }, [normalFn]);\n  return (\n    <div>\n      <button\n        onClick={() => {\n          setCount((v) => v + 1);\n        }}\n      >\n        点击count+1\n      </button>\n      <button\n        onClick={() => {\n          setNumber((v) => v + 1);\n        }}\n      >\n        点击number+1\n      </button>\n      <button\n        onClick={() => {\n          memoizedFn();\n        }}\n      >\n        memoizedFn\n      </button>\n      <button\n        onClick={() => {\n          callbackFn();\n        }}\n      >\n        callbackFn\n      </button>\n      <button\n        onClick={() => {\n          normalFn();\n        }}\n      >\n        normalFn\n      </button>\n    </div>\n  );\n}\n\n')])])]),t("p",[e._v("我有这样一个组件，定义了三个函数，他们的作用都是打印count当前的数值。其中一个使用useMemoizedFn包裹起来，一个用useCallback包裹起来，还有一个直接在组件内直接定义了一个函数。")]),e._v(" "),t("p",[e._v("我们来执行一下：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://pan.udolphin.com/files/image/2022/4/f9ff4e5dd8151fb570b2e7f7c83c1b18.png",alt:""}})]),e._v(" "),t("p",[e._v("可以看到，当组件初始化的时候，三个useEffect都被正常触发了")]),e._v(" "),t("p",[e._v("那么，当我点击number+1时，会有哪些useEffect被触发呢？")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://pan.udolphin.com/files/image/2022/4/149b531fad21bd7204f08b46ab451fec.png",alt:""}})]),e._v(" "),t("p",[e._v("答案是只有normal，为什么呢？因为useCallback和useMemoizedFn都对函数进行了持久化存储，当其他依赖变化时，不会重新创建一个新的函数。")]),e._v(" "),t("p",[e._v("那么，当我点击count+1时，会有几个useEffect被触发呢？")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://pan.udolphin.com/files/image/2022/4/1780ac7a6544638644e1ac36e1445e4d.png",alt:""}})]),e._v(" "),t("p",[e._v("答案是callback和normal都被触发了，这是为什么呢？")]),e._v(" "),t("p",[e._v("useCallback会在依赖项更新的时候重新生成一个函数，并重新生成一个新的callbackFn，改变了地址，引起了useEffect的更新。")]),e._v(" "),t("p",[e._v("那么，使用useMemoizedFn包裹起来的函数地址没有变化的话，它所取到的count值是否为最新的值呢？")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://pan.udolphin.com/files/image/2022/4/b0d51d4b339232ceea871641e01fbf96.png",alt:""}})]),e._v(" "),t("p",[e._v("是。")]),e._v(" "),t("p",[e._v("接下来，我们一起看看它是怎么实现的吧！我们找到它的"),t("a",{attrs:{href:"https://github.com/alibaba/hooks/blob/master/packages/hooks/src/useMemoizedFn/index.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("源码"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://pan.udolphin.com/files/image/2022/4/340cbe0b2bbaee8cf636640d0b86cbd2.png",alt:""}})]),e._v(" "),t("p",[e._v("没想到吧，意外的很短，有用的代码不过十几行，但短短的十几行代码又揭示了另一个可能会被大家忽视的问题：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://pan.udolphin.com/files/image/2022/4/d2051b742d2d5cd29ebb07ece1b538b9.png",alt:""}})]),e._v(" "),t("p",[e._v("useRef所返回的永远是同一个ref对象，这也就是为什么useMemoizedFn可以返回地址相同的函数的原因了。")]),e._v(" "),t("p",[e._v("其实如果懂useRef的小伙伴已经发现了，这个钩子实际上对性能并没有什么提升，没发现也没关系，我们来看下一个钩子：")]),e._v(" "),t("h2",{attrs:{id:"usecreation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usecreation"}},[e._v("#")]),e._v(" useCreation")]),e._v(" "),t("p",[e._v("官方文档对其的介绍是：useMemo或useRef的替代品。")]),e._v(" "),t("p",[e._v("因为useMemo不能保证被memo的值一定不会被重新计算，但useCreation可以，React文档中是这样写的：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://pan.udolphin.com/files/image/2022/4/f25ad35dbba369592c6a22f271047ae7.png",alt:""}})]),e._v(" "),t("p",[e._v("再说useRef，请看这段代码：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('import { useRef, useState } from "react";\n\nclass Foo {\n  constructor() {\n    this.data = Math.random();\n    console.log(this.data,"NoCreation");\n  }\n\n  data: number;\n}\n\nexport default function NoACreation() {\n  const foo = useRef(new Foo());\n  const [, setFlag] = useState({});\n  return (\n    <>\n      <p>{foo.current.data}</p>\n      <button\n        type="button"\n        onClick={() => {\n          setFlag({});\n        }}\n      >\n        Rerender\n      </button>\n    </>\n  );\n}\n')])])]),t("p",[e._v("我们都知道，当有state变化时，useRef的值不会重新计算，所以不管我们点击几次Rerender按钮，foo.current.data的值都是固定的。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://pan.udolphin.com/files/image/2022/4/2f76d02992078e7a691d8bbd090921d6.gif",alt:""}})]),e._v(" "),t("p",[e._v("但这并不代表着在此过程中，没有新的Foo类被实例化。其实在此过程中，该被实例化的Foo类一个没少：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://pan.udolphin.com/files/image/2022/4/1da9ddb615e12589cf5d5b393ed17667.gif",alt:""}})]),e._v(" "),t("p",[e._v("我的例子中所写的类比较小，多实例化几次对性能也没什么影响，但是如果是"),t("a",{attrs:{href:"https://react.docschina.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily",target:"_blank",rel:"noopener noreferrer"}},[e._v("比较昂贵的类"),t("OutboundLink")],1),e._v("，就会产生一些影响了。")]),e._v(" "),t("p",[e._v("我们再来看看useCreation的表现效果：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('import { useState } from "react";\nimport { useCreation } from "ahooks";\n\nclass Foo {\n  constructor() {\n    this.data = Math.random();\n    console.log(this.data,"Creation");\n  }\n\n  data: number;\n}\n\nexport default function ACreation() {\n  const foo = useCreation(() => {\n    return new Foo();\n  }, []);\n  const [, setFlag] = useState({});\n  return (\n    <>\n      <p>{foo.data}</p>\n      <button\n        type="button"\n        onClick={() => {\n          setFlag({});\n        }}\n      >\n        Rerender\n      </button>\n    </>\n  );\n}\n')])])]),t("p",[t("img",{attrs:{src:"https://pan.udolphin.com/files/image/2022/4/2019315f1898b13b003407628b50b007.gif",alt:""}})]),e._v(" "),t("p",[e._v("没错，没有再进行实例化了，我们来看看源码：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://pan.udolphin.com/files/image/2022/4/c68cfe9cc5f224be5233f2ee60820f6f.png",alt:""}})]),e._v(" "),t("p",[e._v("甚至比刚刚useMemoizedFn那段代码还短，但他们的实现原理都差不多，都是运用了useRef的特性：返回的ref对象在组件的整个生命周期内保持不变。所以，当useCreation再次被执行的时候，如果依赖没有变化，那么就不会实例化传进来的对象。")]),e._v(" "),t("p",[e._v("好了，可能会有些坑的地方说完了，是不是有点无聊，类似钻牛角尖了，接下来看点轻松的，来回头看看我的例子中的代码：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://pan.udolphin.com/files/image/2022/4/2b59974face4ff4734fd7e0a06c5aab9.png",alt:""}})]),e._v(" "),t("p",[e._v("这是什么意思呢，一看就知道，是更新一下state用以重新渲染组件的，那么，是不是封装起来比较好呢？")]),e._v(" "),t("p",[e._v("当然，ahooks里面封装好了：")]),e._v(" "),t("h2",{attrs:{id:"useupdate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#useupdate"}},[e._v("#")]),e._v(" useUpdate")]),e._v(" "),t("p",[e._v("官方的解释是：useUpdate会返回一个函数，调用该函数会强制组件重新渲染。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('import { useUpdate } from "ahooks";\n\nexport default function AUseUpdate() {\n  const update = useUpdate();\n\n  return (\n    <>\n      <div>Time: {Date.now()}</div>\n      <button type="button" onClick={update} style={{ marginTop: 8 }}>\n        update\n      </button>\n    </>\n  );\n}\n')])])]),t("p",[t("img",{attrs:{src:"https://pan.udolphin.com/files/image/2022/4/7a0792ac8e67b2149d44ed370b58e3e5.gif",alt:""}})]),e._v(" "),t("p",[e._v("话不多说，看看源码：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://pan.udolphin.com/files/image/2022/4/2cae2d43213235b91dbcdb4fd954a0b1.png",alt:""}})]),e._v(" "),t("p",[e._v("没错，跟我们写的逻辑几乎一模一样，但封装起来之后代码简洁了不少。")]),e._v(" "),t("p",[e._v("其实ahooks里面有很多很多的钩子都是平时我们有意无意中会复用的逻辑，很多代码并不复杂。希望大家闲时可以看看，一些自己也写过的钩子与ahooks提供的有哪些相同和不同，借鉴一下。")]),e._v(" "),t("p",[e._v("是不是以为我要讲完收尾了，其实还有一个小小的坑在，有关useEffect与闭包陷阱的：")]),e._v(" "),t("h2",{attrs:{id:"uselastest"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uselastest"}},[e._v("#")]),e._v(" useLastest")]),e._v(" "),t("p",[e._v("官方文档对其的解释为：返回当前最新值的 Hook，可以避免闭包问题。")]),e._v(" "),t("p",[e._v("假设我现在有这样一个需求：进入页面三秒钟后打印最新的count值。")]),e._v(" "),t("p",[e._v("那么，我们来尝试写一下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('import { useEffect, useState } from "react";\n\nexport default function SmallTest() {\n  const [count, setCount] = useState(0);\n\n  useEffect(() => {\n    const timer = setTimeout(() => {\n      console.log(count);\n    }, 3000);\n    return () => {\n      clearTimeout(timer);\n    };\n  }, []);\n\n  return <button onClick={() => setCount((c) => c + 1)}>click</button>;\n}\n')])])]),t("p",[e._v("好，写完了，现在我们来看一下结果怎么样：")]),e._v(" "),t("p",[e._v("结果显而易见，因为我们没有在useEffct里面添加count为依赖，所以无论我们如何改变count，count依旧为初始值0。那么，我们来改进一下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("  useEffect(() => {\n    const timer = setTimeout(() => {\n      console.log(count);\n    }, 3000);\n    return () => {\n      clearTimeout(timer);\n    };\n  }, [count]);\n")])])]),t("p",[e._v("聪明的小伙伴已经看出问题了，每当我点击按钮改变count的值的时候，定时器都会被清空然后重新执行，已经不符合我们的需求了，那么我们该怎么办呢？")]),e._v(" "),t("p",[e._v("或许有的人（比如我）的巨不靠谱的第一直觉是这样的：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("  useEffect(() => {\n    const timer = setTimeout(() => {\n      setCount((c) => {\n        console.log(c);\n        return c;\n      });\n    }, 3000);\n    return () => {\n      clearTimeout(timer);\n    };\n  }, []);\n")])])]),t("p",[e._v("利用setState中永远能取到最新值的特性，在setState中执行代码，虽然可以成功的运行，但…………")]),e._v(" "),t("p",[e._v("好吧，其实我也想不出来更好的方法了，不如来看看如何使用ahooks来解决这个问题吧，使用useLastest钩子。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('import { useEffect, useState } from "react";\nimport { useLatest } from "ahooks";\n\nexport default function SmallTest() {\n  const [count, setCount] = useState(0);\n  const lastCount = useLatest(count);\n\n  useEffect(() => {\n    const timer = setTimeout(() => {\n      console.log(lastCount);\n    }, 3000);\n    return () => {\n      clearTimeout(timer);\n    };\n  }, []);\n\n  return <button onClick={() => setCount((c) => c + 1)}>click</button>;\n}\n')])])]),t("p",[e._v("成功了，让我们来看看他是怎么实现的：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://pan.udolphin.com/files/image/2022/4/84e4e398c0c985fc9288f6c0836a33ee.png",alt:""}})]),e._v(" "),t("p",[e._v("没想到吧，最后还是利用了useRef，将值重新存了一遍，以获取最新值。这种用法虽然可能奇怪，但确确实实好用，能解决很多问题。")]),e._v(" "),t("h2",{attrs:{id:"结语"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[e._v("#")]),e._v(" 结语")]),e._v(" "),t("p",[e._v("一些看似没什么坑的地方，稍微深挖下去竟然也能出现这么多意外，而这些意外的解决方案竟然又是如此简短。多多观摩借鉴别人写出的代码，收获无穷啊。")]),e._v(" "),t("p",[e._v("除了这些用以解决奇妙问题的钩子，ahooks更多的是常用且方便的钩子，本期就先不讲了，希望大家有机会自行查看，我们下次再见。")])])}),[],!1,null,null,null);t.default=s.exports}}]);