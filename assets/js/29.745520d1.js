(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{301:function(t,_,v){"use strict";v.r(_);var a=v(14),e=Object(a.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"回顾"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#回顾"}},[t._v("#")]),t._v(" 回顾")]),t._v(" "),_("p",[t._v("在上一篇"),_("a",{attrs:{href:"https://wiki.uino.com/d/62b944c2b33e6f3a465b6fbf.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("《WebSocket原理》"),_("OutboundLink")],1),t._v("中，简单介绍了WebSocket与HTTP的不同、握手环节、以及基于数据帧格式的数据传输。")]),t._v(" "),_("p",[t._v("WebSocket复用了HTTP的握手通道，客户端通过HTTP请求与WebSocket服务端协商升级协议。协议升级完成后，后续的数据交换则按照WebSocket的协议。")]),t._v(" "),_("p",[t._v("与HTTP不同的一点是：HTTP只需要数据传输/收发数据就可以了。")]),t._v(" "),_("p",[t._v("而WebScoket在它底层其实是有一套加密机制的。")]),t._v(" "),_("p",[t._v("比如：我通过WebSocket客户端发送了一句“你好”，在浏览器的底层它会对“你好”进行加密，加完密之后，它是密文，会通过网络传送给服务器，服务器接收到这个密文后，会进行解密。")]),t._v(" "),_("p",[t._v("那这个加密和解密过程是怎样的呢？今天我们就来一起研究研究。")]),t._v(" "),_("h2",{attrs:{id:"数据加密"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据加密"}},[t._v("#")]),t._v(" 数据加密")]),t._v(" "),_("h3",{attrs:{id:"加密方式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#加密方式"}},[t._v("#")]),t._v(" 加密方式")]),t._v(" "),_("p",[t._v("我们再次 Look一Look 数据帧的格式，理解这张图，对数据的加解密非常重要。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://pan.udolphin.com/files/image/2022/8/a7462bd8b6e33f0ec2d0ca8c6176cdab.png",alt:""}})]),t._v(" "),_("p",[t._v("细心的小伙伴可能会发现这张表里有2个单词：MASK、Masking-key 。")]),t._v(" "),_("p",[t._v("mask翻译成中文的意思是：掩码。")]),t._v(" "),_("p",[t._v("没错WebSocket底层就是使用掩码进行加解密的。")]),t._v(" "),_("p",[_("strong",[t._v("mask")]),t._v(":")]),t._v(" "),_("p",[t._v("表示是否要对数据载荷进行掩码操作。从客户端向服务端发送数据时，需要对数据进行掩码操作；从服务端向客户端发送数据时，不需要对数据进行掩码操作。")]),t._v(" "),_("p",[t._v("如果服务端接收到的数据没有进行过掩码操作，服务端需要断开连接。")]),t._v(" "),_("p",[t._v("如果Mask是1，那么在Masking-key中会定义一个掩码键（masking key），并用这个掩码键来对数据载荷进行反掩码。所有客户端发送到服务端的数据帧，Mask都是1。")]),t._v(" "),_("p",[_("strong",[t._v("Masking-key")]),t._v("：0或4字节（32位）")]),t._v(" "),_("p",[t._v("浏览器随机生成的32位（4字节）数。所有从客户端传送到服务端的数据帧，数据载荷都进行了掩码操作，Mask为1，且携带了4字节的Masking-key。如果Mask为0，则没有Masking-key。")]),t._v(" "),_("p",[t._v("备注：载荷数据的长度，不包括masking key的长度。")]),t._v(" "),_("p",[t._v("表里的其他字段的含义可以看我上一篇文章"),_("a",{attrs:{href:"https://wiki.uino.com/d/62b944c2b33e6f3a465b6fbf.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("《WebSocket原理》"),_("OutboundLink")],1),t._v("。")]),t._v(" "),_("h3",{attrs:{id:"加密算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#加密算法"}},[t._v("#")]),t._v(" 加密算法")]),t._v(" "),_("p",[t._v("掩码一般都伴随着位运算，在详细介绍加密算法之前，我们先说一下异或（XOR）运算。看下图：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://pan.udolphin.com/files/image/2022/8/4e31fba33c1709125bf5c81282252f57.png",alt:""}})]),t._v(" "),_("p",[t._v("具体来说，异或运算就是：如果a、b两个值不相同，则异或结果为1。如果a、b两个值相同，异或结果为0")]),t._v(" "),_("p",[t._v("并且原始值被异或后，可以通过同一个值再异或回原始值，这个过程可以理解成对称加密。")]),t._v(" "),_("p",[t._v("知道了异或运算后，我们再来看看WebSocket底层是怎么对数据进行掩码计算的：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("j = i MOD 4\n\ntransformed-octet-i = original-octet-i XOR masking-key-octet-j\n")])])]),_("ul",[_("li",[t._v("original-octet-i为原始数据的第i字节")]),t._v(" "),_("li",[t._v("transformed-octet-i为转换后的数据的第i字节")]),t._v(" "),_("li",[t._v("masking-key-octet-j 表示 Masking-key 的第 j 个字节")]),t._v(" "),_("li",[t._v("j为i mod 4的结果 (mod是取模的意思)")])]),t._v(" "),_("h3",{attrs:{id:"数据解密"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据解密"}},[t._v("#")]),t._v(" 数据解密")]),t._v(" "),_("p",[t._v("数据解密的过程也是才用的同一套掩码算法，只是由于Payload length的不同，会出现若干种情况：")]),t._v(" "),_("ol",[_("li",[t._v("读取 9-15(包括) 位并将其解析为无符号整型。如果长度小于等于 125，那么就是长度;你就完成了。如果是 126，到第二步。如果是 127，到步骤 3。")]),t._v(" "),_("li",[t._v("读取下面的 16 位，并将其解释为无符号整型。你就完成了。")]),t._v(" "),_("li",[t._v("读取接下来的 64 位，并将其解释为无符号整型 (最重要的位必须为 0)。")])]),t._v(" "),_("p",[t._v("伪代码如下：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('function read_msg(data) {\n  let str2 = data[1].toString(2);     // 将第二个字节转换为二进制的字符串形式\n  let msg_len = parseInt(str2.slice(1), 2); // 数据载荷(payload length)的长度\n  if (msg_len == 126) {\n    // 如果payload length的长度为126，则后面的两个字节（16位）内容应该被识别成一个16位的二进制数表示数据内容大小\n    mask = data.slice(4, 8); // Mask 掩码\n    content = data.slice(8); // 消息内容\n  } else if (msg_len == 127) {\n    // 如果payload length的长度为127，则后面的8个字节（64位）内容应该被识别成一个64位的二进制数表示数据内容大小\n    mask = data.slice(10, 14);\n    content = data.slice(14);\n  } else {\n    // 如果payload length的长度<=125\n    mask = data.slice(2, 6);\n    content = data.slice(6);\n  }\n\n  let DECODED = ""; // 解码后的内容\n  for (let i = 0; i < content.length; i++) {\n    DECODED[i] = content[i] ^ mask[i % 4];\n  }\n  return DECODED;\n}\n')])])]),_("h2",{attrs:{id:"数据掩码的作用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据掩码的作用"}},[t._v("#")]),t._v(" 数据掩码的作用")]),t._v(" "),_("p",[t._v("WebSocket协议中，数据掩码的作用是增强协议的安全性。但数据掩码并不是为了保护数据本身，因为算法本身是公开的，运算也不复杂。除了加密通道本身，似乎没有太多有效的保护通信安全的办法。")]),t._v(" "),_("p",[t._v("那么为什么还要引入掩码计算呢，除了增加计算机器的运算量外似乎并没有太多的收益（这也是不少同学疑惑的点）。")]),t._v(" "),_("p",[t._v("答案还是两个字："),_("strong",[t._v("安全")]),t._v("。但并不是为了防止数据泄密，而是为了防止早期版本的协议中存在的代理缓存污染攻击（proxy cache poisoning attacks）等问题。")]),t._v(" "),_("h3",{attrs:{id:"代理缓存污染攻击"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#代理缓存污染攻击"}},[t._v("#")]),t._v(" 代理缓存污染攻击")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://pan.udolphin.com/files/image/2022/8/beeb1013421e9a80f02a2e8aa5164eda.png",alt:""}})]),t._v(" "),_("p",[t._v("攻击步骤一：")]),t._v(" "),_("ol",[_("li",[_("strong",[t._v("攻击者")]),t._v("浏览器 向 "),_("strong",[t._v("邪恶服务器")]),t._v(" 发起WebSocket连接。根据前文，首先是一个协议升级请求。")]),t._v(" "),_("li",[t._v("协议升级请求 实际到达 "),_("strong",[t._v("代理服务器")]),t._v("。")]),t._v(" "),_("li",[_("strong",[t._v("代理服务器")]),t._v(" 将协议升级请求转发到 "),_("strong",[t._v("邪恶服务器")]),t._v("。")]),t._v(" "),_("li",[_("strong",[t._v("邪恶服务器")]),t._v(" 同意连接，"),_("strong",[t._v("代理服务器")]),t._v(" 将响应转发给 "),_("strong",[t._v("攻击者")]),t._v("。")])]),t._v(" "),_("p",[t._v("由于 upgrade 的实现上有缺陷，"),_("strong",[t._v("代理服务器")]),t._v(" 以为之前转发的是普通的HTTP消息。因此，当"),_("strong",[t._v("邪恶服务器")]),t._v(" 同意连接，"),_("strong",[t._v("代理服务器")]),t._v(" 以为本次会话已经结束。")]),t._v(" "),_("p",[t._v("攻击步骤二：")]),t._v(" "),_("ol",[_("li",[_("strong",[t._v("攻击者")]),t._v(" 在之前建立的连接上，通过WebSocket的接口向 "),_("strong",[t._v("邪恶服务器")]),t._v(" 发送数据，且数据是精心构造的HTTP格式的文本。其中包含了 "),_("strong",[t._v("正义资源")]),t._v(" 的地址，以及一个伪造的host（指向"),_("strong",[t._v("正义服务器")]),t._v("）。（见后面报文）")]),t._v(" "),_("li",[t._v("请求到达 "),_("strong",[t._v("代理服务器")]),t._v(" 。虽然复用了之前的TCP连接，但 "),_("strong",[t._v("代理服务器")]),t._v(" 以为是新的HTTP请求。")]),t._v(" "),_("li",[_("strong",[t._v("代理服务器")]),t._v(" 向 "),_("strong",[t._v("邪恶服务器")]),t._v(" 请求 "),_("strong",[t._v("邪恶资源")]),t._v("。")]),t._v(" "),_("li",[_("strong",[t._v("邪恶服务器")]),t._v(" 返回 "),_("strong",[t._v("邪恶资源")]),t._v("。"),_("strong",[t._v("代理服务器")]),t._v(" 缓存住 "),_("strong",[t._v("邪恶资源")]),t._v("（url是对的，但host是 "),_("strong",[t._v("正义服务器")]),t._v(" 的地址）。")])]),t._v(" "),_("p",[t._v("到这里，受害者可以登场了：")]),t._v(" "),_("ol",[_("li",[_("strong",[t._v("受害者")]),t._v(" 通过 "),_("strong",[t._v("代理服务器")]),t._v(" 访问 "),_("strong",[t._v("正义服务器")]),t._v(" 的 "),_("strong",[t._v("正义资源")]),t._v("。")]),t._v(" "),_("li",[_("strong",[t._v("代理服务器")]),t._v(" 检查该资源的url、host，发现本地有一份缓存（伪造的）。")]),t._v(" "),_("li",[_("strong",[t._v("代理服务器")]),t._v(" 将 "),_("strong",[t._v("邪恶资源")]),t._v(" 返回给 "),_("strong",[t._v("受害者")]),t._v("。")]),t._v(" "),_("li",[_("strong",[t._v("受害者")]),t._v(" GG。")])]),t._v(" "),_("p",[t._v("缓存污染的核心在于能够让代理服务器缓存伪造的响应。 假设浏览器没有任何安全策略，恶意页面能够控制浏览器请求发送行为，那么恶意页面可以按照如下流程发起缓存伪造攻击：")]),t._v(" "),_("p",[t._v("1、发起"),_("mark",[t._v("第一")]),t._v("个HTTP请求（HOST为恶意域名），建立与恶意服务器的长连接")]),t._v(" "),_("p",[t._v("2、复用该长连接，发起第二个HTTP请求（HOST为被攻击域名），请求到达恶意服务器")]),t._v(" "),_("p",[t._v("3、恶意服务器返回伪造响应，被代理服务器缓存")]),t._v(" "),_("p",[t._v("4、用户访问被攻击域名，代理服务器返回已经缓存的伪造响应，正常用户请求无法到达被攻击域名 这个攻击过程在用户使用正常浏览器情况下是无法实现的，因为第二个HTTP请求无法复用"),_("mark",[t._v("第一")]),t._v("个HTTP请求所建立的长连接。")]),t._v(" "),_("p",[t._v("有了WebSocket协议后，恶意页面可以通过WebSocket协议建立与恶意服务器的长连接，并且发送一个格式符合HTTP规范的数据帧，由于代理服务器不支持WebSocket，会将该数据帧识别为HTTP请求并转发给恶意服务器，这样恶意服务器就可以返回伪造响应给代理服务器。")]),t._v(" "),_("h3",{attrs:{id:"当前解决方案"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#当前解决方案"}},[t._v("#")]),t._v(" 当前解决方案")]),t._v(" "),_("p",[t._v("最初的提案是对数据进行加密处理。基于安全、效率的考虑，最终采用了折中的方案：对数据载荷进行掩码处理。 有了掩码机制后，恶意页面无法控制实际发送的数据，即使恶意页面构造了一个符合HTTP规范的数据帧，经过掩码后，数据已经不再符合HTTP规范，代理服务器无法识别，会关闭连接。 需要注意的是，这里只是限制了浏览器对数据载荷进行掩码处理，但是坏人完全可以实现自己的WebSocket客户端、服务端，不按规则来，攻击可以照常进行。 但是对浏览器加上这个限制后，可以大大增加攻击的难度，以及攻击的影响范围。如果没有这个限制，只需要在网上放个钓鱼网站骗人去访问，一下子就可以在短时间内展开大范围的攻击。")]),t._v(" "),_("p",[t._v("以上就是关于WebSocket数据加密的介绍，WebSocket还有很多有趣的东西值得去探究，欢迎感兴趣的小伙伴可以和我一起探究探究")])])}),[],!1,null,null,null);_.default=e.exports}}]);