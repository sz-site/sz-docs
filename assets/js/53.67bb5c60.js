(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{325:function(e,v,_){"use strict";_.r(v);var o=_(14),n=Object(o.a)({},(function(){var e=this,v=e._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h2",{attrs:{id:"面试题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#面试题"}},[e._v("#")]),e._v(" 面试题")]),e._v(" "),v("p",[e._v("几年前，有一个小伙伴问过我一道面试题：13个人手拉手围成一个圈，假设从"),v("code",[e._v("1号")]),e._v("开始报数1，他的下一位"),v("code",[e._v("2号")]),e._v("报数2，再下一位"),v("code",[e._v("3号")]),e._v("报数3，当报数是3的人（即"),v("code",[e._v("3号")]),e._v("）退出圈，他的前后两人（即"),v("code",[e._v("2号")]),e._v("和"),v("code",[e._v("4号")]),e._v("）重新拉上手，然后从"),v("code",[e._v("4号")]),e._v("开始重复上述过程，这样经过若干次后这个圈会最终剩下一个人，那么请问最后这个人是谁，请写出程序找到这个人。"),v("br"),e._v(" "),v("img",{attrs:{src:"https://pan.udolphin.com/files/image/2021/11/ee99b410117ebd005b2ff9e7ad60ba3a.gif",alt:""}})]),e._v(" "),v("h2",{attrs:{id:"朴素解"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#朴素解"}},[e._v("#")]),e._v(" 朴素解")]),e._v(" "),v("p",[e._v("看到这道题，我的第一感觉是模拟整个过程从而找到最后剩下的那个人。同时很快意识到这题的考点是"),v("code",[e._v("链表")]),e._v("。我相信大多数小伙伴和我的认识是一样的。下面给出我的实现。")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("function find(person, countNumber) {\n  let nodes = new Array();\n  for (let i = 0; i < person; i++) {\n    let node = new Object();\n    node.id = i + 1;\n    nodes.push(node);\n  }\n  for (let i = 0; i < nodes.length; i++) {\n    if (i == nodes.length - 1) {\n      nodes[i].next = nodes[0];\n    } else {\n      nodes[i].next = nodes[i + 1];\n    }\n    if (i == 0) {\n      nodes[i].prev = nodes[nodes.length - 1];\n    } else {\n      nodes[i].prev = nodes[i - 1];\n    }\n  }\n\n  let curNode = nodes[0];\n  let count = 0;\n  while (true) {\n    let nextNode = curNode.next;\n    if (count == countNumber - 1) {\n      let prevNode = curNode.prev;\n      if (nextNode.id == prevNode.id) {\n        curNode = nextNode;\n        break;\n      } else {\n        prevNode.next = nextNode;\n        nextNode.prev = prevNode;\n        curNode = nextNode;\n      }\n      count = 0;\n    } else {\n      curNode = nextNode;\n      count++;\n    }\n  }\n  return curNode.id;\n}\n")])])]),v("h2",{attrs:{id:"隐患"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#隐患"}},[e._v("#")]),e._v(" 隐患")]),e._v(" "),v("p",[e._v("上面的解看似完美的解出了这道题，但总感觉哪里不太对。这个感觉纠缠了我一周。假如不是"),v("code",[e._v("13人围成圈")]),e._v("，而是"),v("code",[e._v("13亿人围成圈")]),e._v("，程序会怎么样呢？首先，内存肯定是爆了，内存放不下13亿对象的链表。其次，即便有一个超级内存可以容纳下13亿对象的链表，循环次数会是"),v("code",[e._v("（1300000000 - 1）* 3")]),e._v("次，显然时间复杂度上也是不能接受的。那怎么办呢？")]),e._v(" "),v("h2",{attrs:{id:"探索过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#探索过程"}},[e._v("#")]),e._v(" 探索过程")]),e._v(" "),v("p",[e._v("在之后的一个周六，这个感觉越发强烈，好像神在驱使我必须解决这个问题。我首先意识到，基于"),v("code",[e._v("链表")]),e._v("的思路，不管怎么优化算法，始终绕不开"),v("code",[e._v("模拟循环报数的次数")]),e._v("。这是一个好的开始，因为我发现了"),v("code",[e._v("链表")]),e._v("思路的本质问题。我们让计算机模拟业务的全过程，按现在流行的说法，这是在"),v("code",[e._v("把围圈报数游戏数字孪生")]),e._v("。"),v("code",[e._v("数字孪生体")]),e._v("被要求和"),v("code",[e._v("现实孪生体")]),e._v("一模一样，而"),v("code",[e._v("现实孪生体")]),e._v("本身就是要循环那么多次，所以我们不管怎样"),v("code",[e._v("数字孪生")]),e._v("，永远不可能跳出"),v("code",[e._v("现实孪生体")]),e._v("的约束。")]),e._v(" "),v("p",[e._v("然后，我尝试把"),v("code",[e._v("围圈人数")]),e._v("从2到1000的结果打印出来，看看有什么启发。")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("2,2,1,4,1,4,7,1,4,7,10,13,2,5,8,11,14,17,20,2,5,8,11,14,17,20,23,26,29,1,4,7,10,13,16,19,22,25,28,31,34,37,40,43,46,2,5,8,11,14,17,20,23,26,29,32,35,38,41...\n")])])]),v("p",[e._v("看到结果我震惊了，发现这串数字是由一段一段的等差数列组成的，这难道是我的"),v("code",[e._v("达芬奇密码")]),e._v("吗？怀着激动的心情，我意识到它是一个数学问题，解是有规律的。既然解随入参规律变化而规律变化，我们应该可以找到一个"),v("code",[e._v("恰当的函数")]),e._v("来描述这个现象。（这一步是最关键的一步，为何从这个尝试来入手，说实在的纯粹是瞎蒙，也可能这就是"),v("code",[e._v("神的指引")]),e._v("吧。）")]),e._v(" "),v("p",[e._v("虽然已经从数列中发现了规律，但这还不够直观，需要对数列进行一定的可视化，从而发现更多规律。下图是"),v("code",[e._v("报数为3")]),e._v("的函数图，横坐标是"),v("code",[e._v("围圈人数")]),e._v("，纵坐标是"),v("code",[e._v("剩下的那个人的编号")]),e._v("。"),v("br"),e._v(" "),v("img",{attrs:{src:"https://pan.udolphin.com/files/image/2021/11/bc3f2afcb45384db74c9dcce4196fbcf.png",alt:"image.png"}}),v("br"),e._v("\n我们可以发现，函数由若干个斜率为正的直线组成，这些直线是平行的（即斜率=数列公差=3），这些直线按一定的周期会做一次"),v("code",[e._v("归零")]),e._v("操作。进一步，我们把所有"),v("code",[e._v("归零")]),e._v("的点连起来，能发现这些点似乎在另一条直线上，这条直线是"),v("code",[e._v("f(x) = x")]),e._v("。"),v("br"),e._v(" "),v("img",{attrs:{src:"https://pan.udolphin.com/files/image/2021/11/14014e4ed273855eef05bc565b906b2c.png",alt:"image.png"}})]),e._v(" "),v("p",[e._v("考察完"),v("code",[e._v("报数为3")]),e._v("的函数图，我又去绘制了"),v("code",[e._v("报数为5、7、12")]),e._v("的函数图，结论是我再次被震惊了。"),v("br"),e._v(" "),v("img",{attrs:{src:"https://pan.udolphin.com/files/image/2021/11/2d3ac99dd0afaf11bcf8a3f9cbedf165.png",alt:"image.png"}}),v("br"),e._v(" "),v("img",{attrs:{src:"https://pan.udolphin.com/files/image/2021/11/c05bc8c03907e7290a6d00181cc9235f.png",alt:"image.png"}}),v("br"),e._v(" "),v("img",{attrs:{src:"https://pan.udolphin.com/files/image/2021/11/87ce117348f29344b86722b30214f67a.png",alt:"image.png"}}),v("br"),e._v("\n上述规律基本都重现了，唯一不同的是斜率分别为5、7、12。报数我特意选取了既有"),v("code",[e._v("质数")]),e._v("又有"),v("code",[e._v("合数")]),e._v("的情况，说明这些规律是普遍的，和"),v("code",[e._v("报数选取几")]),e._v("应该是没关系的，同时进一步能发现数列公差就是报数的数字。")]),e._v(" "),v("p",[e._v("按照上述规律，尝试总结出那个"),v("code",[e._v("恰当的函数")]),e._v("。我们只要知道"),v("code",[e._v("围圈人数")]),e._v("处于哪个直线周期，同时确定那个直线周期"),v("code",[e._v("f(x) = kx + b")]),e._v("的k和b，就可以一步到位计算出最终剩下的那个人的编号了。k很好确定，就是"),v("code",[e._v("报数选取几")]),e._v("。我们再来观察一下这个数列。")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("用中括号隔开相邻的直线周期\n最终那人：[2],[2],[1,4],[1,4,7],[1, 4, 7,10,13],[ 2, 5, 8,11,14,17,20],[ 2, 5, 8,11,14,17,20,23,26,29],[ 1, 4, 7,10,13,16,19,22,25,28,31,34,37,40,43,46],[ 2, 5, 8,11,14,17,20,23,26,29,32,35,38,41...\n围圈人数：[2],[3],[4,5],[6,7,8],[9,10,11,12,13],[14,15,16,17,18,19,20],[21,22,23,24,25,26,27,28,29,30],[31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46],[47,48,49,50,51,52,53,54,55,56,57,58,59,60...\n")])])]),v("p",[e._v("这里先要理解下为什么会有"),v("code",[e._v("周期归零")]),e._v("的现象。假设没有"),v("code",[e._v("周期归零")]),e._v("，当"),v("code",[e._v("围圈人数")]),e._v("是9时，我们猜想"),v("code",[e._v("最终那人")]),e._v("是"),v("code",[e._v("7 + 3 = 10")]),e._v("，这样就会形成悖论：总共有9个人围圈，但最终剩下的人是10号，10号人是不存在的，因为总共就9个人。这样我们也可以理解图中"),v("code",[e._v("红色箭头")]),e._v("函数为什么是"),v("code",[e._v("f(x) = x")]),e._v("了，因为"),v("code",[e._v("最终那人")]),e._v("不能超过"),v("code",[e._v("围圈人数")]),e._v("。我们再来看一下刚才的猜想，当"),v("code",[e._v("围圈人数")]),e._v("是9时，按上一个直线周期1（6）、4（7）、7（8），它应该是10（9），但是受"),v("code",[e._v("围圈人数")]),e._v("的限制，这时应该"),v("code",[e._v("归零")]),e._v("，我们再看一下实际的值是1（9）。这就很有意思了，"),v("code",[e._v("10 - 9 = 1")]),e._v("。同学们可以去自己算算其他"),v("code",[e._v("周期归零")]),e._v("时的情况，都是符合这个规律的。")]),e._v(" "),v("h2",{attrs:{id:"高级解"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#高级解"}},[e._v("#")]),e._v(" 高级解")]),e._v(" "),v("p",[e._v("按照上述规律，总结下算法过程。")]),e._v(" "),v("p",[v("code",[e._v("入参取值范围")]),e._v("："),v("code",[e._v("围圈人数")]),e._v("为大于1的正整数，"),v("code",[e._v("报数是几")]),e._v("为正整数。")]),e._v(" "),v("p",[v("code",[e._v("步骤1")]),e._v("：当"),v("code",[e._v("报数是1")]),e._v("时，"),v("code",[e._v("最终那人")]),e._v("的编号是"),v("code",[e._v("围圈人数")]),e._v("的值。")]),e._v(" "),v("p",[v("code",[e._v("步骤2")]),e._v("：确定当"),v("code",[e._v("报数大于1")]),e._v("时"),v("code",[e._v("数列首项")]),e._v("（围圈人数为2）的值。当"),v("code",[e._v("报数是偶数")]),e._v("时，"),v("code",[e._v("数列首项")]),e._v("是1；当"),v("code",[e._v("报数是奇数")]),e._v("时，"),v("code",[e._v("数列首项")]),e._v("是2。")]),e._v(" "),v("p",[v("code",[e._v("步骤3")]),e._v("：确定"),v("code",[e._v("围圈人数")]),e._v("处于哪个周期的直线（"),v("code",[e._v("f(x) = kx + b")]),e._v("）上，并计算出对应的k和b，最后把"),v("code",[e._v("围圈人数")]),e._v("代入到"),v("code",[e._v("f(x)")]),e._v("中，计算出"),v("code",[e._v("最终那人")]),e._v("的编号。k的值是"),v("code",[e._v("报数是几")]),e._v("，代入当前"),v("code",[e._v("数列首项")]),e._v("的(x, y)，求解出：b = "),v("code",[e._v("数列首项y")]),e._v(" - "),v("code",[e._v("报数是几")]),e._v(" * "),v("code",[e._v("数列首项x")]),e._v("。确定k和b后，计算"),v("code",[e._v("f(x) = kx + b")]),e._v("和"),v("code",[e._v("g(x) = x")]),e._v("两条直线的交点的x值，即"),v("code",[e._v("b / (1 - k)")]),e._v("。若"),v("code",[e._v("围圈人数")]),e._v("小于等于交点的x值，则把"),v("code",[e._v("围圈人数")]),e._v("代入到"),v("code",[e._v("f(x) = kx + b")]),e._v("中，计算出"),v("code",[e._v("最终那人")]),e._v("的编号；反之，则确定下一周期直线的首项，即( floor(交点的x值) + 1, k * (floor(交点的x值) + 1) + b - (floor(交点的x值) + 1) )，重复本步骤。")]),e._v(" "),v("p",[e._v("下面是代码实现")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("function findAdvanced(person, countNumber) {\n  if (countNumber == 1) {\n    return person;\n  } else {\n    let startX = 2;\n    let startY = (countNumber % 2) + 1;\n    let judas = null;\n    while (true) {\n      const b = startY - countNumber * startX;\n      let crossX = Math.floor(b / (1 - countNumber));\n      if (person > crossX) {\n        startX = crossX + 1;\n        startY = countNumber * startX + b - startX;\n      } else {\n        judas = countNumber * person + b;\n        break;\n      }\n    }\n    return judas;\n  }\n}\n")])])]),v("h2",{attrs:{id:"感想"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#感想"}},[e._v("#")]),e._v(" 感想")]),e._v(" "),v("p",[e._v("我们在写程序时候本能能设计出的算法一般都是按照题目或业务逻辑用模拟的思路来构建的，我对这类算法称为朴素算法，而对于较复杂的问题朴素算法往往不是最优解。这就需要我们运用其他的一些知识来优化甚至重写朴素算法。其中最重要的一种知识就是数学。而我们一般都是凡人，很少有经过正规数学训练的经历，也没有很强的抽象能力，所以我们很难从本质上分析解决问题。但是我们可以通过一些辅助手段来接近问题的本质，比如可视化方式就是一种，可视化就是把抽象的东西形象化，能让我们这些凡人也能理解一些深奥的东西。最后，本文只是从现象本身总结出了一些规律，从而利用这些规律辅助解题，并没有对这些规律进行严谨的数学证明，欢迎与有兴趣的同学一起研究讨论。")])])}),[],!1,null,null,null);v.default=n.exports}}]);