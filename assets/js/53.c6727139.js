(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{446:function(a,s,t){"use strict";t.r(s);var e=t(51),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("python拥有非常丰富的扩展包，下面介绍常见的扩展包安装方法。")]),a._v(" "),t("h2",{attrs:{id:"使用anaconda集成环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用anaconda集成环境"}},[a._v("#")]),a._v(" 使用Anaconda集成环境")]),a._v(" "),t("p",[a._v("通过使用该python的集成环境，可以解决大部分常见包的安装以相互依赖问题。")]),a._v(" "),t("h2",{attrs:{id:"使用zip-tar等格式源码包安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用zip-tar等格式源码包安装"}},[a._v("#")]),a._v(" 使用zip/tar等格式源码包安装")]),a._v(" "),t("p",[a._v("例如我们想安装numpy，可以：")]),a._v(" "),t("h3",{attrs:{id:"下载源码包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载源码包"}},[a._v("#")]),a._v(" 下载源码包")]),a._v(" "),t("p",[a._v("通过"),t("a",{attrs:{href:"https://pypi.python.org",target:"_blank",rel:"noopener noreferrer"}},[a._v("pip网站"),t("OutboundLink")],1),a._v("下载"),t("a",{attrs:{href:"https://pypi.python.org/packages/c0/3a/40967d9f5675fbb097ffec170f59c2ba19fc96373e73ad47c2cae9a30aed/numpy-1.13.1.zip#md5=2c3c0f4edf720c3a7b525dacc825b9ae",target:"_blank",rel:"noopener noreferrer"}},[a._v("numpy-1.13.1.zip"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("该源码包是zip格式的，我们可以用unzip命令解压缩。")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("unzip")]),a._v(" numpy-1.13.1.zip\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" numpu-1.13.1\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("h3",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),t("p",[a._v("如果是安装在当前系统环境python的默认路径下，那么直接执行下面的命令即可：")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("python setup.py "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" \n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("如果是希望修改安装路径，可以加上"),t("code",[a._v("--prefix参数")]),a._v("，即：")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("python setup.py "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" --prefix"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/path/to/install  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 等号后面写安装路径")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"使用egg格式文件安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用egg格式文件安装"}},[a._v("#")]),a._v(" 使用egg格式文件安装")]),a._v(" "),t("p",[a._v("安装方法也很简单：")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("easy_install "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("123")]),a._v(".egg "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 123.egg 是egg包的名字")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("使用这类包的时候，请注意：")]),a._v(" "),t("ul",[t("li",[a._v("下载的版本与系统的python版本相对应，如py2表示python2版本，py3.6表示python3.6版本")]),a._v(" "),t("li",[a._v("下载的版本与系统的版本相对应，一般的i686对应32位系统，x86_64对应64位系统")])]),a._v(" "),t("p",[a._v("设置安装路径也是添加 "),t("code",[a._v("--prefix=/path/to/install")]),a._v(" 即可。")]),a._v(" "),t("h2",{attrs:{id:"使用whl格式文件安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用whl格式文件安装"}},[a._v("#")]),a._v(" 使用whl格式文件安装")]),a._v(" "),t("p",[a._v("安装方法也很简单：")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("pip "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("123")]),a._v(".whl "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 123.whl 是whl包的名字")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("我们可以通过添加 "),t("code",[a._v("--target=/path/to/install")]),a._v(" 来指定安装路径")]),a._v(" "),t("h2",{attrs:{id:"使用conda命令安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用conda命令安装"}},[a._v("#")]),a._v(" 使用conda命令安装")]),a._v(" "),t("p",[a._v("集成环境中其实配置了python包的管理工具，我们可以使用它来管理包。不过有时候，从国外下载包会比较慢。")]),a._v(" "),t("p",[a._v("比如，我想安装numpy-1.13.1，只需要输入：")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("conda "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("numpy")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.13")]),a._v(".1\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("如果是更新的话，只需要输入例如：")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("conda update "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("numpy")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.13")]),a._v(".11\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("可以查看官网的"),t("a",{attrs:{href:"https://conda.io/docs/user-guide/overview.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("conda介绍"),t("OutboundLink")],1),a._v("。")]),a._v(" "),t("h2",{attrs:{id:"设置默认安装路径"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置默认安装路径"}},[a._v("#")]),a._v(" 设置默认安装路径")]),a._v(" "),t("p",[a._v("一般情况下，我们使用setup.py 或者 pip等方式安装一个python的扩展包时，都是安装到当前环境中的python的默认对应路径。")]),a._v(" "),t("p",[a._v("例如：")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("which")]),a._v(" python\n"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$HOME")]),a._v("/software/python/bin/python\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("默认包的安装路径很可能为（对于2.7版本）：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$HOME/software/python/lib/python2.7/site-packages\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("如何修改默认的安装路径，让我们不需要指定例如 "),t("code",[a._v("--prefix")]),a._v(" 参数就可以实现呢？")]),a._v(" "),t("p",[a._v('我们可以在$HOME目录下创建一个配置文件 ".pydistutils.cfg" ，用来特别指定python的packages的默认安装目录，例如：')]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("install"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\ninstall_lib "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$HOME")]),a._v("/software/lib/python\ninstall_scripts "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$HOME")]),a._v("/software/python/bin\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[a._v("通过配置此文件，即可修改默认安装目录。")]),a._v(" "),t("p",[a._v("如果在安装python的packages过程中并未指定安装路径，但在默认的安装路径中并未发现安装的文件，可以找找此文件看一下。")])])}),[],!1,null,null,null);s.default=n.exports}}]);