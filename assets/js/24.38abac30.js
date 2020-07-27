(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{612:function(e,a,t){"use strict";t.r(a);var r=t(3),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"nodejs之global全局变量学习笔记"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nodejs之global全局变量学习笔记"}},[e._v("🌙")]),e._v(" NodeJS之global全局变量学习笔记")]),e._v(" "),t("h2",{attrs:{id:"_1-global（全局变量）简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-global（全局变量）简介"}},[e._v("🌙")]),e._v(" 1.global（全局变量）简介")]),e._v(" "),t("p",[e._v("所谓global（全局变量），即在所有的模块中都可用。 以下的变量虽然看似全局的，但实际上不是。 它们仅存在于模块的作用域中，参见"),t("a",{attrs:{href:"http://nodejs.cn/s/TQHXpm",target:"_blank",rel:"noopener noreferrer"}},[e._v("模块系统的文档"),t("OutboundLink")],1),e._v("：")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://nodejs.cn/s/etUQhi",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("__dirname")]),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://nodejs.cn/s/RH6qCV",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("__filename")]),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://nodejs.cn/s/JzVhDV",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("exports")]),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://nodejs.cn/s/2UCVu5",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("module")]),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://nodejs.cn/s/bVPMwV",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("require()")]),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("此处列出的对象特定于 Node.js。 有些"),t("a",{attrs:{href:"http://nodejs.cn/s/GMhHSn",target:"_blank",rel:"noopener noreferrer"}},[e._v("内置对象"),t("OutboundLink")],1),e._v("是 JavaScript 语言本身的一部分，它们也是全局可访问的。")]),e._v(" "),t("h2",{attrs:{id:"_2-全局变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-全局变量"}},[e._v("🌙")]),e._v(" 2.全局变量")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Buffer")])]),e._v(" "),t("li",[t("h2",{attrs:{id:"clearimmediate-immediateobject"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clearimmediate-immediateobject"}},[e._v("🌙")]),e._v(" "),t("code",[e._v("clearImmediate(immediateObject)")])])]),e._v(" "),t("li",[t("h2",{attrs:{id:"clearinterval-intervalobject"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clearinterval-intervalobject"}},[e._v("🌙")]),e._v(" "),t("code",[e._v("clearInterval(intervalObject)")])])]),e._v(" "),t("li",[t("h2",{attrs:{id:"cleartimeout-timeoutobject"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cleartimeout-timeoutobject"}},[e._v("🌙")]),e._v(" "),t("code",[e._v("clearTimeout(timeoutObject)")])])]),e._v(" "),t("li",[t("p",[t("code",[e._v("setImmediate(callback[, ...args])")])])]),e._v(" "),t("li",[t("h2",{attrs:{id:"setinterval-callback-delay-args"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setinterval-callback-delay-args"}},[e._v("🌙")]),e._v(" "),t("code",[e._v("setInterval(callback, delay[, ...args])")])])]),e._v(" "),t("li",[t("h2",{attrs:{id:"settimeout-callback-delay-args"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#settimeout-callback-delay-args"}},[e._v("🌙")]),e._v(" "),t("code",[e._v("setTimeout(callback, delay[, ...args])")])])]),e._v(" "),t("li",[t("h2",{attrs:{id:"console"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#console"}},[e._v("🌙")]),e._v(" "),t("code",[e._v("console")])])]),e._v(" "),t("li",[t("h2",{attrs:{id:"global"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#global"}},[e._v("🌙")]),e._v(" "),t("code",[e._v("global")])])]),e._v(" "),t("li",[t("h2",{attrs:{id:"process"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#process"}},[e._v("🌙")]),e._v(" "),t("code",[e._v("process")])])]),e._v(" "),t("li",[t("h2",{attrs:{id:"queuemicrotask-callback"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#queuemicrotask-callback"}},[e._v("🌙")]),e._v(" "),t("code",[e._v("queueMicrotask(callback)")])])]),e._v(" "),t("li",[t("h2",{attrs:{id:"textdecoder"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#textdecoder"}},[e._v("🌙")]),e._v(" "),t("code",[e._v("TextDecoder")])])]),e._v(" "),t("li",[t("h2",{attrs:{id:"textencoder"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#textencoder"}},[e._v("🌙")]),e._v(" "),t("code",[e._v("TextEncoder")])])]),e._v(" "),t("li",[t("h2",{attrs:{id:"url"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#url"}},[e._v("🌙")]),e._v(" "),t("code",[e._v("URL")])])]),e._v(" "),t("li",[t("h2",{attrs:{id:"urlsearchparams"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#urlsearchparams"}},[e._v("🌙")]),e._v(" "),t("code",[e._v("URLSearchParams")])])]),e._v(" "),t("li",[t("h2",{attrs:{id:"webassembly"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webassembly"}},[e._v("🌙")]),e._v(" "),t("code",[e._v("WebAssembly")])])])])])}),[],!1,null,null,null);a.default=s.exports}}]);