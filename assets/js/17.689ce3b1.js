(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{411:function(s,a,e){"use strict";e.r(a);var t=e(51),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"环境变量设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境变量设置"}},[s._v("#")]),s._v(" 环境变量设置")]),s._v(" "),e("p",[s._v("根据用户帐号使用的 Shell 的不同，设置环境变量的方法也有所不同。")]),s._v(" "),e("p",[s._v("假设我们要增加一个用来表示字符串“/usr/local/bin”的环境变量 MYENV，可以采用下面的方法来设置。（TH-1A 系统默认用户选择的环境变量为 Bash）")]),s._v(" "),e("p",[s._v("1）Bash 的设置方法")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYENV")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/bin\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("如果需要环境变量在登录进用户帐号后自动设置，则可以编辑用户帐号主目录（$HOME）下的.bashrc 文件，将上述命令行加入文件中。")]),s._v(" "),e("p",[s._v("2）sh 的设置方法")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYENV")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/bin\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" MYENV\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("如果需要环境变量在登录进用户帐号后被自动设置，则编辑用户帐号主目录（$HOME）下的.profile 文件，将上述命令行加入文件中。")]),s._v(" "),e("p",[s._v("3）csh 的设置方法")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("setenv MYENV /usr/local/bin\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("如果需要环境变量在登录进用户帐号后被自动设置，则编辑用户帐号主目录（$HOME）下的.cshrc 文件，将上述命令行加入文件中。")])])}),[],!1,null,null,null);a.default=n.exports}}]);