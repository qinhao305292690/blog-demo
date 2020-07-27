(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{621:function(t,e,a){"use strict";a.r(e);var n=a(3),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"nodejs之timer模块学习笔记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodejs之timer模块学习笔记"}},[t._v("🌙")]),t._v(" NodeJS之timer模块学习笔记")]),t._v(" "),a("h2",{attrs:{id:"_1-timer（定时器）简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-timer（定时器）简介"}},[t._v("🌙")]),t._v(" 1.timer（定时器）简介")]),t._v(" "),a("p",[a("code",[t._v("timer")]),t._v(" 模块开放了一个"),a("strong",[t._v("全局")]),t._v("的 API，用于安排函数在未来某个时间点被调用。 因为定时器函数是全局的，所以使用 API 不需要调用 "),a("code",[t._v("require('timers')")]),t._v("。")]),t._v(" "),a("p",[t._v("Node.js 中的定时器函数实现了与 Web 浏览器提供的定时器 API 类似的 API，但是使用了不同的内部实现（构建于 Node.js "),a("a",{attrs:{href:"http://nodejs.cn/s/eeiBdr",target:"_blank",rel:"noopener noreferrer"}},[t._v("事件循环"),a("OutboundLink")],1),t._v("）。")]),t._v(" "),a("h2",{attrs:{id:"_2-设置定时器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-设置定时器"}},[t._v("🌙")]),t._v(" 2.设置定时器")]),t._v(" "),a("blockquote",[a("p",[t._v("["),a("a",{attrs:{href:"https://segmentfault.com/a/1190000013102056",target:"_blank",rel:"noopener noreferrer"}},[t._v("由setTimeout和setImmediate执行顺序的随机性窥探Node的事件循环机制"),a("OutboundLink")],1),t._v("](https://segmentfault.com/a/1190000013102056)")])]),t._v(" "),a("h3",{attrs:{id:"_2-1-setimmediate-callback-args-事件轮询的末尾处执行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-setimmediate-callback-args-事件轮询的末尾处执行"}},[t._v("🌙")]),t._v(" 2.1 "),a("code",[t._v("setImmediate(callback[, ...args])")]),t._v("事件轮询的末尾处执行")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("callback")]),t._v(" "),a("a",{attrs:{href:"http://nodejs.cn/s/ceTQa6",target:"_blank",rel:"noopener noreferrer"}},[a("Function",[a("OutboundLink")],1)],1),t._v(" Node.js "),a("a",{attrs:{href:"http://nodejs.cn/s/eeiBdr",target:"_blank",rel:"noopener noreferrer"}},[t._v("事件循环"),a("OutboundLink")],1),t._v("的此回合结束时要调用的函数。")]),t._v(" "),a("li",[a("code",[t._v("...args")]),t._v(" "),a("a",{attrs:{href:"http://nodejs.cn/s/6sTGdS",target:"_blank",rel:"noopener noreferrer"}},[a("any",[a("OutboundLink")],1)],1),t._v(" 当调用 "),a("code",[t._v("callback")]),t._v(" 时传入的可选的参数。")]),t._v(" "),a("li",[t._v("返回: "),a("a",{attrs:{href:"http://nodejs.cn/s/SvSBDC",target:"_blank",rel:"noopener noreferrer"}},[a("Immediate",[a("OutboundLink")],1)],1),t._v(" 用于 "),a("a",{attrs:{href:"http://nodejs.cn/s/tn26EY",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("clearImmediate()")]),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("p",[t._v("安排在 I/O 事件的回调之后立即执行的 "),a("code",[t._v("callback")]),t._v("。")]),t._v(" "),a("p",[t._v("当多次调用 "),a("code",[t._v("setImmediate()")]),t._v(" 时， "),a("code",[t._v("callback")]),t._v(" 函数会按它们被创建的顺序放入排队等待执行。 每轮的事件循环迭代都会处理整个回调队列。 如果一个 immediate 定时器是从一个正在执行中的回调内部被放入队列，则该定时器将不会被触发，直到下一轮的事件循环迭代。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'before immediate'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setImmediate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("arg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("executing immediate: ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("arg"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'so immediate'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'after immediate'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出结果")]),t._v("\nbefore immediate\nafter immediate\nexecuting immediate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" so immediate\n")])])]),a("p",[t._v("此方法有一个定制的用于 promise 的变体，使用 "),a("a",{attrs:{href:"http://nodejs.cn/s/DGMNHh",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("util.promisify()")]),a("OutboundLink")],1),t._v(" 创建：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" util "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'util'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" setImmediatePromise "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" util"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("promisify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("setImmediate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setImmediatePromise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foobar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// value === 'foobar' （传值是可选的）")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这会在所有的 I/O 回调之后执行。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 或使用异步函数。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("timerExample")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'在 I/O 回调之前'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setImmediatePromise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'在 I/O 回调之后'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("timerExample")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2-2-setinterval-callback-delay-args-永远的轮询执行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-setinterval-callback-delay-args-永远的轮询执行"}},[t._v("🌙")]),t._v(" 2.2 "),a("code",[t._v("setInterval(callback, delay[, ...args])")]),t._v("永远的轮询执行")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("callback")]),t._v(" "),a("a",{attrs:{href:"http://nodejs.cn/s/ceTQa6",target:"_blank",rel:"noopener noreferrer"}},[a("function",[a("OutboundLink")],1)],1),t._v(" 当定时器到点时调用的函数。")]),t._v(" "),a("li",[a("code",[t._v("delay")]),t._v(" "),a("a",{attrs:{href:"http://nodejs.cn/s/SXbo1v",target:"_blank",rel:"noopener noreferrer"}},[a("number",[a("OutboundLink")],1)],1),t._v(" 调用 "),a("code",[t._v("callback")]),t._v(" 之前等待的毫秒数。")]),t._v(" "),a("li",[a("code",[t._v("...args")]),t._v(" "),a("a",{attrs:{href:"http://nodejs.cn/s/6sTGdS",target:"_blank",rel:"noopener noreferrer"}},[a("any",[a("OutboundLink")],1)],1),t._v(" 当调用 "),a("code",[t._v("callback")]),t._v(" 时传入的可选参数。")]),t._v(" "),a("li",[t._v("返回: "),a("a",{attrs:{href:"http://nodejs.cn/s/ezS7LR",target:"_blank",rel:"noopener noreferrer"}},[a("Timeout",[a("OutboundLink")],1)],1),t._v(" 用于 "),a("a",{attrs:{href:"http://nodejs.cn/s/zRW98q",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("clearInterval()")]),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("p",[t._v("安排每隔 "),a("code",[t._v("delay")]),t._v(" 毫秒重复执行 "),a("code",[t._v("callback")]),t._v("。")]),t._v(" "),a("p",[t._v("当 "),a("code",[t._v("delay")]),t._v(" 大于 "),a("code",[t._v("2147483647")]),t._v(" 或小于 "),a("code",[t._v("1")]),t._v(" 时，则 "),a("code",[t._v("delay")]),t._v(" 将会被设置为 "),a("code",[t._v("1")]),t._v("。 非整数的 delay 会被截断为整数。")]),t._v(" "),a("h3",{attrs:{id:"_2-3-settimeout-callback-delay-args-指定时间之后执行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-settimeout-callback-delay-args-指定时间之后执行"}},[t._v("🌙")]),t._v(" 2.3 "),a("code",[t._v("setTimeout(callback, delay[, ...args])")]),t._v("指定时间之后执行")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("callback")]),t._v(" "),a("a",{attrs:{href:"http://nodejs.cn/s/ceTQa6",target:"_blank",rel:"noopener noreferrer"}},[a("function",[a("OutboundLink")],1)],1),t._v(" 当定时器到点时调用的函数。")]),t._v(" "),a("li",[a("code",[t._v("delay")]),t._v(" "),a("a",{attrs:{href:"http://nodejs.cn/s/SXbo1v",target:"_blank",rel:"noopener noreferrer"}},[a("number",[a("OutboundLink")],1)],1),t._v(" 调用 "),a("code",[t._v("callback")]),t._v(" 之前等待的毫秒数。")]),t._v(" "),a("li",[a("code",[t._v("...args")]),t._v(" "),a("a",{attrs:{href:"http://nodejs.cn/s/6sTGdS",target:"_blank",rel:"noopener noreferrer"}},[a("any",[a("OutboundLink")],1)],1),t._v(" 当调用 "),a("code",[t._v("callback")]),t._v(" 时传入的可选参数。")]),t._v(" "),a("li",[t._v("返回: "),a("a",{attrs:{href:"http://nodejs.cn/s/ezS7LR",target:"_blank",rel:"noopener noreferrer"}},[a("Timeout",[a("OutboundLink")],1)],1),t._v(" 用于 "),a("a",{attrs:{href:"http://nodejs.cn/s/zRW98q",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("clearInterval()")]),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("p",[t._v("安排在 "),a("code",[t._v("delay")]),t._v(" 毫秒之后执行一次性的 "),a("code",[t._v("callback")]),t._v("。")]),t._v(" "),a("p",[a("code",[t._v("callback")]),t._v(" 可能不会精确地在 "),a("code",[t._v("delay")]),t._v(" 毫秒后被调用 。 Node.js 不保证回调被触发的确切时间，也不保证它们的顺序。 回调会在尽可能接近指定的时间被调用。")]),t._v(" "),a("p",[t._v("当 "),a("code",[t._v("delay")]),t._v(" 大于 "),a("code",[t._v("2147483647")]),t._v(" 或小于 "),a("code",[t._v("1")]),t._v(" 时，则 "),a("code",[t._v("delay")]),t._v(" 将会被设置为 "),a("code",[t._v("1")]),t._v("。 非整数的 delay 会被截断为整数。")]),t._v(" "),a("p",[t._v("如果 "),a("code",[t._v("callback")]),t._v(" 不是函数，则抛出 "),a("a",{attrs:{href:"http://nodejs.cn/s/Z7Lqyj",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("TypeError")]),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("此方法有一个定制的用于 promise 的变体，使用 "),a("a",{attrs:{href:"http://nodejs.cn/s/DGMNHh",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("util.promisify()")]),a("OutboundLink")],1),t._v(" 创建：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" util "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'util'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" setTimeoutPromise "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" util"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("promisify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("setTimeout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeoutPromise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foobar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// value === 'foobar' （传值是可选的）")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这会在大约 40 毫秒后执行。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"_3-取消定时器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-取消定时器"}},[t._v("🌙")]),t._v(" 3.取消定时器")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://nodejs.cn/s/Cjc23N",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("setImmediate()")]),a("OutboundLink")],1),t._v("、"),a("a",{attrs:{href:"http://nodejs.cn/s/hWCq4X",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("setInterval()")]),a("OutboundLink")],1),t._v(" 和 "),a("a",{attrs:{href:"http://nodejs.cn/s/UxXb1y",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("setTimeout()")]),a("OutboundLink")],1),t._v(" 方法会各自返回表示安排的定时器的对象。 它们可用于取消定时器并阻止其触发。")]),t._v(" "),a("p",[t._v("使用 "),a("a",{attrs:{href:"http://nodejs.cn/s/Cjc23N",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("setImmediate()")]),a("OutboundLink")],1),t._v("、"),a("a",{attrs:{href:"http://nodejs.cn/s/UxXb1y",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("setTimeout()")]),a("OutboundLink")],1),t._v(" 的 promise 化的变体创建的定时器则无法取消。")]),t._v(" "),a("h3",{attrs:{id:"_3-1clearimmediate-immediate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1clearimmediate-immediate"}},[t._v("🌙")]),t._v(" 3.1"),a("code",[t._v("clearImmediate(immediate)")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("immediate")]),t._v(" "),a("a",{attrs:{href:"http://nodejs.cn/s/SvSBDC",target:"_blank",rel:"noopener noreferrer"}},[a("Immediate",[a("OutboundLink")],1)],1),t._v(" "),a("a",{attrs:{href:"http://nodejs.cn/s/Cjc23N",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("setImmediate()")]),a("OutboundLink")],1),t._v(" 返回的 "),a("code",[t._v("Immediate")]),t._v(" 对象。")])]),t._v(" "),a("p",[t._v("取消由 "),a("a",{attrs:{href:"http://nodejs.cn/s/Cjc23N",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("setImmediate()")]),a("OutboundLink")],1),t._v(" 创建的 "),a("code",[t._v("Immediate")]),t._v(" 对象。")]),t._v(" "),a("h3",{attrs:{id:"_3-2clearinterval-timeout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2clearinterval-timeout"}},[t._v("🌙")]),t._v(" 3.2"),a("code",[t._v("clearInterval(timeout)")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("timeout")]),t._v(" "),a("a",{attrs:{href:"http://nodejs.cn/s/ezS7LR",target:"_blank",rel:"noopener noreferrer"}},[a("Timeout",[a("OutboundLink")],1)],1),t._v(" "),a("a",{attrs:{href:"http://nodejs.cn/s/hWCq4X",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("setInterval()")]),a("OutboundLink")],1),t._v(" 返回的 "),a("code",[t._v("Timeout")]),t._v(" 对象。")])]),t._v(" "),a("p",[t._v("取消由 "),a("a",{attrs:{href:"http://nodejs.cn/s/hWCq4X",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("setInterval()")]),a("OutboundLink")],1),t._v(" 创建的 "),a("code",[t._v("Timeout")]),t._v(" 对象。")]),t._v(" "),a("h3",{attrs:{id:"_3-3cleartimeout-timeout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3cleartimeout-timeout"}},[t._v("🌙")]),t._v(" 3.3"),a("code",[t._v("clearTimeout(timeout)")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("timeout")]),t._v(" "),a("a",{attrs:{href:"http://nodejs.cn/s/ezS7LR",target:"_blank",rel:"noopener noreferrer"}},[a("Timeout",[a("OutboundLink")],1)],1),t._v(" "),a("a",{attrs:{href:"http://nodejs.cn/s/UxXb1y",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("setTimeout()")]),a("OutboundLink")],1),t._v(" 返回的 "),a("code",[t._v("Timeout")]),t._v(" 对象。")])]),t._v(" "),a("p",[t._v("取消由 "),a("a",{attrs:{href:"http://nodejs.cn/s/UxXb1y",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("setTimeout()")]),a("OutboundLink")],1),t._v(" 创建的 "),a("code",[t._v("Timeout")]),t._v(" 对象。")])])}),[],!1,null,null,null);e.default=s.exports}}]);