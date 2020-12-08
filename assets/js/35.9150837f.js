(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{431:function(s,t,e){"use strict";e.r(t);var a=e(51),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"下载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载"}},[s._v("#")]),s._v(" 下载")]),s._v(" "),e("p",[s._v("http://leonardo.phys.washington.edu/jfeff-9.7.1/#opennewwindow")]),s._v(" "),e("h2",{attrs:{id:"上传-增加可执行权限-执行安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#上传-增加可执行权限-执行安装"}},[s._v("#")]),s._v(" 上传，增加可执行权限，执行安装")]),s._v(" "),e("p",[s._v("在windows下下载后的文件名为 "),e("code",[s._v("jfeff-9.7.1-linux-x64-installer.man")]),s._v(" ，使用 "),e("code",[s._v("ftp")]),s._v(" 工具上传到服务器某目录。然后使用 "),e("code",[s._v("chmod +x 文件名")]),s._v(" 命令增加可执行权限。使用 "),e("code",[s._v("./文件名")]),s._v(" 来执行安装命令，如下图：")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/mrzhenggang/CDN@master/img/jfeff/jfeff-1.png",alt:"jfeff-istall"}})]),s._v(" "),e("p",[s._v("选择"),e("code",[s._v("Next")])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/mrzhenggang/CDN@master/img/jfeff/jfeff-2.png",alt:"jfeff-istall"}})]),s._v(" "),e("p",[s._v("勾选"),e("code",[s._v("I accept ... ...")]),s._v("，选择"),e("code",[s._v("Next")])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/mrzhenggang/CDN@master/img/jfeff/jfeff-3.png",alt:"jfeff-istall"}})]),s._v(" "),e("p",[s._v("选择"),e("code",[s._v("Next")])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/mrzhenggang/CDN@master/img/jfeff/jfeff-4.png",alt:"jfeff-istall"}})]),s._v(" "),e("p",[s._v("安装中：")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/mrzhenggang/CDN@master/img/jfeff/jfeff-5.png",alt:"jfeff-istall"}})]),s._v(" "),e("p",[s._v("选择"),e("code",[s._v("Finish")]),s._v(" 完成安装。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/mrzhenggang/CDN@master/img/jfeff/jfeff-6.png",alt:"jfeff-istall"}})]),s._v(" "),e("p",[s._v("软件自动勾选"),e("code",[s._v("launch JFEFF")]),s._v("，选择"),e("code",[s._v("Finish")]),s._v("后会自动加载软件，如下图：")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/mrzhenggang/CDN@master/img/jfeff/jfeff-7.png",alt:"jfeff-istall"}})]),s._v(" "),e("h2",{attrs:{id:"配置环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置环境"}},[s._v("#")]),s._v(" 配置环境")]),s._v(" "),e("p",[s._v("用户以后想再次打开软件，可以通过一下操作实现：")]),s._v(" "),e("ol",[e("li",[s._v("修改打开脚本 "),e("code",[s._v("jfeff.command")]),s._v(" 的路径为自己的目录；")]),s._v(" "),e("li",[s._v("为命令添加软连接；")]),s._v(" "),e("li",[s._v("写入 "),e("code",[s._v("~/.bashrc")]),s._v(" 文件可以自动加载环境。")])]),s._v(" "),e("p",[s._v("可以执行如下命令：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/JFEFF\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s%/Applications/jfeff.app/Contents/Resources%'),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v('%g"')]),s._v(" jfeff.command\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -sf jfeff.command jfeff\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'export PATH="),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(":"),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/JFEFF'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.bashrc\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.bashrc\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("以后再用，直接执行 "),e("code",[s._v("jfeff")]),s._v(" 命令即可。")]),s._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[s._v("系统环境\n如果系统已经安装该软件，可以咨询系统管理员，得到使用方法，例如：")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("module "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" jfeff/9.7.1\njfeff\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("blockquote",[e("p",[s._v("注意，请使用支持图像界面的SSH终端，例如mobaxterm，可以参考：https://blog.mrzhenggang.com/supercomputer-courses-ssh-sftp-mobaxterm/")])])])}),[],!1,null,null,null);t.default=n.exports}}]);