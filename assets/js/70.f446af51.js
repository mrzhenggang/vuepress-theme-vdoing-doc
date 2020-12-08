(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{464:function(s,a,t){"use strict";t.r(a);var n=t(51),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"用户需求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用户需求"}},[s._v("#")]),s._v(" 用户需求")]),s._v(" "),t("blockquote",[t("p",[s._v("已经提交了很多任务，一部分已经在计算中 "),t("code",[s._v("RUN")]),s._v("，一部分在排队中 "),t("code",[s._v("PD")]),s._v("。现在新提交一个任务，希望该任务能够优先计算。")])]),s._v(" "),t("h2",{attrs:{id:"解决思路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决思路"}},[s._v("#")]),s._v(" 解决思路")]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v("yhcontrol hold | release")]),s._v(" 来解决。")]),s._v(" "),t("h2",{attrs:{id:"解决步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决步骤"}},[s._v("#")]),s._v(" 解决步骤")]),s._v(" "),t("ol",[t("li",[s._v("提交新任务。")]),s._v(" "),t("li",[s._v("使用"),t("code",[s._v("yhcontrol hold")]),s._v("来 "),t("code",[s._v("暂停")]),s._v(" 已经提交任务中状态为排队 "),t("code",[s._v("PD")]),s._v(" 的任务。")]),s._v(" "),t("li",[s._v("等待新任务开始计算，使用"),t("code",[s._v("yhcontrol release")]),s._v("来 恢复之前被 "),t("code",[s._v("暂停")]),s._v(" 的任务。（手动或写脚本自动实现）")])]),s._v(" "),t("h2",{attrs:{id:"举例说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#举例说明"}},[s._v("#")]),s._v(" 举例说明")]),s._v(" "),t("h3",{attrs:{id:"_1-提交新任务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-提交新任务"}},[s._v("#")]),s._v(" 1.提交新任务")]),s._v(" "),t("p",[s._v("已经提交了5个任务，使用 "),t("code",[s._v("yhq")]),s._v(" 命令查看，得到如下结果：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ yhq\nJOBID     PARTITION  NAME     "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("       ST  TIME      NODES NODELIST"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("REASON"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100001")]),s._v("    debug      sub.sh   zhenggang  R   00:05:01  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("     cn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100002")]),s._v("    debug      sub.sh   zhenggang  R   00:05:02  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("     cn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100003")]),s._v("    debug      sub.sh   zhenggang  PD  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Resources"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100004")]),s._v("    debug      sub.sh   zhenggang  PD  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Resources"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100005")]),s._v("    debug      sub.sh   zhenggang  PD  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Resources"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("其中，"),t("code",[s._v("100001 100002")]),s._v(" 在计算， "),t("code",[s._v("100003 100004 100005")]),s._v(" 在排队。")]),s._v(" "),t("p",[s._v("现在我们提交一个新的任务，然后再 "),t("code",[s._v("yhq")]),s._v(" 查看，得到如下结果：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ yhq\nJOBID     PARTITION  NAME     "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("       ST  TIME      NODES NODELIST"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("REASON"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100001")]),s._v("    debug      sub.sh   zhenggang  R   00:05:11  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("     cn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100002")]),s._v("    debug      sub.sh   zhenggang  R   00:05:12  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("     cn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100003")]),s._v("    debug      sub.sh   zhenggang  PD  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Resources"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100004")]),s._v("    debug      sub.sh   zhenggang  PD  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Resources"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100005")]),s._v("    debug      sub.sh   zhenggang  PD  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Resources"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100006")]),s._v("    debug      sub.sh   zhenggang  PD  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Resources"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"_2-暂停任务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-暂停任务"}},[s._v("#")]),s._v(" 2.暂停任务")]),s._v(" "),t("p",[s._v("我们希望任务 "),t("code",[s._v("100006")]),s._v(" 在任务 "),t("code",[s._v("100003 100004 100005")]),s._v(" 之前先计算，那么我们就将这3个任务 "),t("code",[s._v("hold")]),s._v(" 一下：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yhcontrol hold "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100003")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100004")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100005")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("然后我们再 "),t("code",[s._v("yhq")]),s._v(" 查看，得到如下结果：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ yhq\nJOBID     PARTITION  NAME     "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("       ST  TIME      NODES NODELIST"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("REASON"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100001")]),s._v("    debug      sub.sh   zhenggang  R   00:05:21  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("     cn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100002")]),s._v("    debug      sub.sh   zhenggang  R   00:05:22  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("     cn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100003")]),s._v("    debug      sub.sh   zhenggang  PD  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("JobHeldUser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100004")]),s._v("    debug      sub.sh   zhenggang  PD  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("JobHeldUser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100005")]),s._v("    debug      sub.sh   zhenggang  PD  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("JobHeldUser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100006")]),s._v("    debug      sub.sh   zhenggang  PD  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Resources"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("可以看到这3个任务的 "),t("code",[s._v("NODELIST(REASON)")]),s._v(" 变为了 "),t("code",[s._v("JobHeldUser")]),s._v(" 。")]),s._v(" "),t("p",[s._v("这样修改后，当系统有可用的计算资源时，会优先计算任务 "),t("code",[s._v("100006")]),s._v(" ，跳过被 "),t("code",[s._v("hold")]),s._v(" 的任务。")]),s._v(" "),t("h3",{attrs:{id:"_3-恢复任务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-恢复任务"}},[s._v("#")]),s._v(" 3.恢复任务")]),s._v(" "),t("p",[s._v("之前我们把任务 "),t("code",[s._v("100003 100004 100005")]),s._v(" 变为了 "),t("code",[s._v("hold")]),s._v(" 的任务，如果不恢复，那么它们会一直无法计算的。")]),s._v(" "),t("p",[s._v("所以需要在希望优先计算的任务 "),t("code",[s._v("100006")]),s._v(" 开始计算后，将这些被 "),t("code",[s._v("hold")]),s._v(" 的任务状态改回来，即为 "),t("code",[s._v("release")]),s._v(" ， 命令如下：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yhcontrol release "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100003")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100004")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100005")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("然后我们再 "),t("code",[s._v("yhq")]),s._v(" 查看，得到如下结果：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ yhq\nJOBID     PARTITION  NAME     "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("       ST  TIME      NODES NODELIST"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("REASON"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100001")]),s._v("    debug      sub.sh   zhenggang  R   00:05:21  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("     cn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100002")]),s._v("    debug      sub.sh   zhenggang  R   00:05:22  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("     cn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100003")]),s._v("    debug      sub.sh   zhenggang  PD  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Resources"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100004")]),s._v("    debug      sub.sh   zhenggang  PD  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Resources"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100005")]),s._v("    debug      sub.sh   zhenggang  PD  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Resources"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100006")]),s._v("    debug      sub.sh   zhenggang  R   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":10      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("     cn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"_4-自动暂停-恢复"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-自动暂停-恢复"}},[s._v("#")]),s._v(" 4.自动暂停|恢复")]),s._v(" "),t("h4",{attrs:{id:"_4-1-暂停任务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-暂停任务"}},[s._v("#")]),s._v(" 4.1 暂停任务")]),s._v(" "),t("p",[s._v("当需要被 "),t("code",[s._v("hold")]),s._v(" 的任务很多的时候，使用 "),t("code",[s._v("yhq")]),s._v(" 命令得到 "),t("code",[s._v("jobid")]),s._v(" 的列表，然后逐一粘贴，不是很方便。我们可以写一个简单的脚本实现。")]),s._v(" "),t("p",[s._v("1.获得需要被hold的任务列表，存到一个临时文件 "),t("code",[s._v("jobhold.txt")]),s._v(" 中：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yhq "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" PD "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("}'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" jobhold.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("2.循环遍历这个临时文件的每一行，逐一 "),t("code",[s._v("hold")]),s._v(" 这些任务：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("jobid")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" jobhold.txt"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\nyhcontrol hold "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$jobid")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h4",{attrs:{id:"_4-2-恢复任务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-恢复任务"}},[s._v("#")]),s._v(" 4.2 恢复任务")]),s._v(" "),t("p",[s._v("我们可以编写一个脚本，例如 "),t("code",[s._v("jobrelease.sh")]),s._v(" ，然后提交到登陆节点后台，自动的定期检查新提交任务的状态，如果任务已经在计算，则自动恢复之前被 "),t("code",[s._v("hold")]),s._v(" 的任务。脚本举例如下：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("jobid")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100006")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" ture\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("jobst")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("yhqueue "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" $jobid "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$5")]),s._v("}'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"None"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$jobst")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'PD'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("jobid")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" jobhold.txt"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n      yhcontrol release "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$jobid")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("break")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("blockquote",[t("p",[s._v("脚本中 "),t("code",[s._v("jobid='100006'")]),s._v(" 需要根据实际需求来修改。")])]),s._v(" "),t("p",[s._v("然后将这个脚本提交到登陆节点后台：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x jobrelease.sh\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" ./jobrelease.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /dev/null "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("如果我们不止有一个任务需要被优先计算，例如新提交了 "),t("code",[s._v("100006 100007 100008")]),s._v(" 三个任务，希望先算这3个，然后再算之前提交的任务，我们可以略微修改一下刚才的 "),t("code",[s._v("jobrelease.sh")]),s._v(" 脚本：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("jobids")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100006")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100007")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100008")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("bool_release")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("jobid")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${jobids"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("jobst")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("yhqueue "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" $jobid "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$5")]),s._v("}'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"None"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$jobst")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'PD'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("bool_release")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("false\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n  \n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$bool_release")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'true'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("jobid")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" jobhold.txt"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n      yhcontrol release "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$jobid")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("break")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br")])]),t("p",[s._v("然后再提交：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("chmod +x jobrelease.sh\nnohup ./jobrelease.sh > /dev/null 2>&1 &\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);