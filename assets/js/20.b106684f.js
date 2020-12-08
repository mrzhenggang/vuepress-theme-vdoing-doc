(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{421:function(t,e,a){"use strict";a.r(e);var n=a(51),v=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"状态查看"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#状态查看"}},[t._v("#")]),t._v(" 状态查看")]),t._v(" "),a("h2",{attrs:{id:"节点状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#节点状态"}},[t._v("#")]),t._v(" 节点状态")]),t._v(" "),a("p",[t._v("yhi 为 yhinfo 命令的简写，用户可以使用 yhi 或者 yhinfo 命令查看结点的使用情况，从而根据情况做出选择。")]),t._v(" "),a("p",[t._v("可以通过命令"),a("code",[t._v("yhi -l")]),t._v("获得结点更为详细的信息。")]),t._v(" "),a("center",[t._v(" 表 yhi输出的关键词说明")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("关键词")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("PARTITION")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("用户可用的计算分区")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("AVAIL")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("可用状态：up 表示可用；down 表示不可用")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("TIMELIMIT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("该分区的作业最大运行时长限制")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("NODES")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("节点数量")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("STAT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("节点状态："),a("br"),t._v("down: 不可用状态"),a("br"),t._v("idle: 空闲状态"),a("br"),t._v("alloc: 被分配状态"),a("br"),t._v("drain: 排空状态"),a("br"),t._v("表示该类结点不再分配到其他作业")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("NODELIST")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("节点名字列表")])])])]),t._v(" "),a("h2",{attrs:{id:"作业状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作业状态"}},[t._v("#")]),t._v(" 作业状态")]),t._v(" "),a("p",[t._v("yhqueue 或 yhq 命令用于查看系统中，各计算结点的运行情况。")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ yhq\nJOBID    PARTITION  NAME     "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("USER")]),t._v("       ST  TIME      NODES NODELIST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("REASON"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1454916")]),t._v("  debug      sub.sh   zhenggang  R   00:05:00  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("     cn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("-6"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("参数说明如下：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("关键词")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("含义")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("JOBID")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("任务编号")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("唯一编号，方便追溯")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("PARTITION")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("计算分区名")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("可用"),a("code",[t._v("yhi")]),t._v("查询")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("NAME")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("任务名")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("默认以提交脚本的名称当作任务名")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("USER")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("用户名")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("提交该任务的用户名")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ST")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("任务状态")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("PD排队"),a("br"),t._v("R运行"),a("br"),t._v("S挂起"),a("br"),t._v("CG正在退出")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("TIME")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("任务运行时间")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("例子中为5分钟")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("NODES")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("任务作占节点数")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("例子中为1个")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("NODELIST(REASON)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("节点列表（排队原因）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("如果是排队状态的任务，则会给出排队原因")])])])]),t._v(" "),a("p",[t._v("总结来讲，用户作业的状态主要有如下几种：")]),t._v(" "),a("ul",[a("li",[t._v("PD: 排队，pending")]),t._v(" "),a("li",[t._v("R: 运行中，running")]),t._v(" "),a("li",[t._v("S: 挂起中，suspended")]),t._v(" "),a("li",[t._v("CA: 被取消，canceled")]),t._v(" "),a("li",[t._v("CD: 成功结束，completed")]),t._v(" "),a("li",[t._v("F: 失败结束，failed")]),t._v(" "),a("li",[t._v("TD: 超时，timeout")]),t._v(" "),a("li",[t._v("NF: 因节点故障而运行失败，node_fail")])]),t._v(" "),a("p",[t._v("作业状态转换的详细图如下，由于 CD, CA, F 这三个作业状态持续时间很短，因此使用 yhq 命令可能会观察不到这些状态。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://cdn.jsdelivr.net/gh/mrzhenggang/CDN@master/img/user-manual-th1a/slurm-job-state.png",target:"_blank",rel:"noopener noreferrer"}},[t._v("slurm-job-state"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("用户可以使用 yhq 查看自己提交的作业，为了保证用户的数据安全，普通用户通过 yhq 只能看到自己提交的作业。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("常见排队原因")]),t._v(" "),a("ul",[a("li",[t._v("AssociationResourceLimit：关联的资源限制已满 --- 账户有使用节点数限制，已经用满了")]),t._v(" "),a("li",[t._v("Resources：当前可用资源不能满足作业需求 --- 系统的可用节点资源不足")]),t._v(" "),a("li",[t._v("Dependency：作业的依赖关系未满足 --- 作业之间有依赖关系，依赖的作业没完成")]),t._v(" "),a("li",[t._v("PartitionDown：作业所在的分区处于 down 状态 --- 分区down，所以节点不可用")])])]),t._v(" "),a("h2",{attrs:{id:"查看作业明细"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看作业明细"}},[t._v("#")]),t._v(" 查看作业明细")]),t._v(" "),a("p",[t._v("用户可以通过如下命令来查看自己提交的作业明细")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("yhcontrol show jobs jobid\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("其中 jobid 表示作业的 id 号，用户根据自己作业的情况填入即可，之后用户即可以看到该作业十分详细的信息。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("用户作业如果长时间为 CG 状态，表示作业没有正常退出，系统管理员会定期扫描 CG 作业并处理，请用户耐心等待；用户作业如果变成 S 状态，表示系\n统管理员在维护系统，维护完成后会将用户作业恢复，对用户作业不会造成影响。")])])],1)}),[],!1,null,null,null);e.default=v.exports}}]);