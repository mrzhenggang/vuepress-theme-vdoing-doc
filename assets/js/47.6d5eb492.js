(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{441:function(s,a,t){"use strict";t.r(a);var e=t(51),v=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("对于大型集群环境，通常需要有作业管理系统来调度分配系统资源，本文介绍一款开源免费的容错和高度可扩展的集群管理和作业调度系统：SLURM。在我国首次获得世界TOP500计算机排名第一的天河一号计算机上使用的集群管理和作业调度系统，就是基于SLURM二次开发的，可见其强大。")]),s._v(" "),t("p",[s._v("它的官网是："),t("a",{attrs:{href:"https://slurm.schedmd.com/",title:"slurm作业管理系统官网",target:"_blank",rel:"noopener noreferrer"}},[s._v("传送门"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"准备可执行程序和输入文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备可执行程序和输入文件"}},[s._v("#")]),s._v(" 准备可执行程序和输入文件")]),s._v(" "),t("p",[s._v("我们想提交一个计算任务，首先要准备好可执行程序和输入文件。")]),s._v(" "),t("ul",[t("li",[s._v("可执行程序需要系统管理员进行编译安装，并配置好环境。")]),s._v(" "),t("li",[s._v("输入文件需要每一位用户针对自己的计算问题进行配置，并上传到自己的账户目录下。")])]),s._v(" "),t("p",[s._v("然后我们要看看自己登录的账户可用的资源情况，这样子才能有针对性的提交到合适的计算分区，申请相应的系统资源进行作业的计算。")]),s._v(" "),t("p",[s._v("这里我们假设：可执行程序的名字叫做 "),t("strong",[s._v("program.exe")]),s._v("，输入文件的名字叫做 "),t("strong",[s._v("inputfile")]),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"查看可用计算节点信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看可用计算节点信息"}},[s._v("#")]),s._v(" 查看可用计算节点信息")]),s._v(" "),t("p",[s._v("查看可用计算节点信息的命令是：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("sinfo\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("天河系统的相应命令是：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yhi\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("显示如下（举例）：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("PARTITION AVAIL  TIMELIMIT  NODES  STATE  NODELIST\ndebug        up      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v(":00     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("  drain  cn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("-2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\ndebug        up      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v(":00     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("  alloc  cn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("-4"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\ndebug        up      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v(":00     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("   idle  cn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("-6"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("说明：")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("关键词")]),s._v(" "),t("th",[s._v("含义")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("PARTITION")]),s._v(" "),t("td",[s._v("分区名，大型集群为了方便管理，会将节点划分为不同的分区设置不同权限")])]),s._v(" "),t("tr",[t("td",[s._v("AVAIL")]),s._v(" "),t("td",[s._v("可用状态：up 可用；down 不可用")])]),s._v(" "),t("tr",[t("td",[s._v("TIMELIMIT")]),s._v(" "),t("td",[s._v("该分区的作业最大运行时长限制, 30:00 表示30分钟，如果是2-00:00:00表示2天，如果是infinite表示不限时间")])]),s._v(" "),t("tr",[t("td",[s._v("NODES")]),s._v(" "),t("td",[s._v("节点的数量")])]),s._v(" "),t("tr",[t("td",[s._v("STATE")]),s._v(" "),t("td",[s._v("节点的状态：drain: 排空状态，表示该类结点不再分配到其他；idle: 空闲状态；alloc: 被分配状态")])])])]),s._v(" "),t("p",[s._v("通过查看系统可用资源情况，我们就知道了要将计算任务提交到那里了，比如例子中的debug计算分区。")]),s._v(" "),t("h2",{attrs:{id:"提交作业进行计算"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提交作业进行计算"}},[s._v("#")]),s._v(" 提交作业进行计算")]),s._v(" "),t("p",[s._v("接下来应该就是使用slurm作业管理系统进行作业提交了，常用的提交方式有2种，分别介绍如下：")]),s._v(" "),t("h3",{attrs:{id:"方式1-使用srun直接执行可执行程序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方式1-使用srun直接执行可执行程序"}},[s._v("#")]),s._v(" 方式1：使用srun直接执行可执行程序")]),s._v(" "),t("p",[s._v("在命令行终端直接执行srun命令进行作业提交计算：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("srun -N "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" -n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v(" -p debug program.exe "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" inputfile\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("天河系统的相应命令是：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yhrun -N "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" -n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v(" -p debug program.exe "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" inputfile\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("参数说明如下：")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("关键词")]),s._v(" "),t("th",[s._v("含义")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("srun")]),s._v(" "),t("td",[s._v("srun是slurm作业管理系统并行执行mpi程序的命令，类似mpirun")])]),s._v(" "),t("tr",[t("td",[s._v("-N")]),s._v(" "),t("td",[s._v("任务所需的总节点数")])]),s._v(" "),t("tr",[t("td",[s._v("-n")]),s._v(" "),t("td",[s._v("任务所需的总核数")])]),s._v(" "),t("tr",[t("td",[s._v("-p")]),s._v(" "),t("td",[s._v("任务申请的计算分区名称，刚刚用sinfo查询过，记得吗？")])]),s._v(" "),t("tr",[t("td",[s._v("program.exe")]),s._v(" "),t("td",[s._v("可执行程序名称")])]),s._v(" "),t("tr",[t("td",[s._v("inputfile")]),s._v(" "),t("td",[s._v('输入文件的名称，"<"简单讲，就是把inputfile文件给program.exe')])])])]),s._v(" "),t("p",[s._v("备注：")]),s._v(" "),t("ol",[t("li",[s._v("有的程序不需要特别指定输入文件的名称，会自动寻找，那么就不需要写 "),t("code",[s._v("< inputfile")]),s._v(" 了。")]),s._v(" "),t("li",[s._v("关于结果输出：\n"),t("ol",[t("li",[s._v("如果程序有内置的输出文件名，那么就会写到默认的输出文件中；")]),s._v(" "),t("li",[s._v("如果没有的话，使用 "),t("code",[s._v("srun")]),s._v(" 提交的任务的输出会显示在当前屏幕中；")]),s._v(" "),t("li",[s._v("如果想将输出结果定向到别的文件，可以使用例如 "),t("code",[s._v("> outputfile")]),s._v(" 的写法，将输出结果写到 "),t("code",[s._v("outputfile")]),s._v(" 文件中。")])])]),s._v(" "),t("li",[s._v("不过要注意的是，在有登录节点和计算节点的大型集群中，使用 "),t("code",[s._v("srun")]),s._v(" 命令提交任务，会由于用户的当前终端关闭而导致任务断掉，因此建议用户使用下面的方式提交组偶也。")])]),s._v(" "),t("h3",{attrs:{id:"方式2-使用sbatch提交批处理脚本进行任务计算"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方式2-使用sbatch提交批处理脚本进行任务计算"}},[s._v("#")]),s._v(" 方式2：使用sbatch提交批处理脚本进行任务计算")]),s._v(" "),t("p",[s._v("这种方式是最为推荐的方式，先编写一个脚本（别担心，很简单），然后用提交命令提交这个脚本即可。")]),s._v(" "),t("p",[t("strong",[s._v("编写脚本")])]),s._v(" "),t("p",[s._v("使用文本编辑器（例如vim等），创建一个用于提交作业的脚本文件，例如名为"),t("strong",[s._v("sub.sh")]),s._v("的文件。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" sub.sh\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("然后写入脚本内容")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\nsrun -N "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" -n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v(" -p debug program.exe "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" inputfile\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("天河系统的相应命令是：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yhrun -N "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" -n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v(" -p debug program.exe "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" inputfile\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("第一行表示这个文件是一个bash的脚本文件。\n第二行表示我要用srun命令，申请2个节点，一共24个cpu核，在debug分区，使用program.exe程序计算inputfile输入文件所设定的具体计算任务。")]),s._v(" "),t("p",[s._v("这个和方式1种的命令，完全相同。")]),s._v(" "),t("p",[t("strong",[s._v("提交脚本")])]),s._v(" "),t("p",[s._v("我们用命令将刚刚写的脚本提交一下，放到后台，这样子就不担心因为当前终端关闭而导致任务断掉的问题了，命令为：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("sbatch -N "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" -n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v(" -p debug sub.sh  \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("天河系统的相应命令是：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yhbatch -N "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" -n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v(" -p debug sub.sh\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("参数说明如下：")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("关键词")]),s._v(" "),t("th",[s._v("含义")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("sbatch")]),s._v(" "),t("td",[s._v("sbatch是slurm作业管理系统提交批处理脚本的命令")])]),s._v(" "),t("tr",[t("td",[s._v("-N")]),s._v(" "),t("td",[s._v("任务所需的总节点数")])]),s._v(" "),t("tr",[t("td",[s._v("-n")]),s._v(" "),t("td",[s._v("任务所需的总核数")])]),s._v(" "),t("tr",[t("td",[s._v("-p")]),s._v(" "),t("td",[s._v("任务申请的计算分区名称")])]),s._v(" "),t("tr",[t("td",[s._v("sub.sh")]),s._v(" "),t("td",[s._v("脚本的名字，我们起的名字是sub.sh")])])])]),s._v(" "),t("p",[s._v('使用这种方式提交的任务，会自动生成一个名为slurm-jobid.out的文件，其中"jobid"是slurm分配给这个任务的具体编号数字。里面会有除了程序特殊指定，或用户重定向以外的所有作业的标准输出和错误信息。当计算任务出现错误的时候，我们也是第一时间查看该文件，寻找原因。')]),s._v(" "),t("h2",{attrs:{id:"查看作业状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看作业状态"}},[s._v("#")]),s._v(" 查看作业状态")]),s._v(" "),t("p",[s._v("如果我们想查看一下当前用户的作业状态，可以使用如下命令：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("squeue\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("天河系统的相应命令是：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yhqueue\n或\nyhq\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("显示如下（举例）：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("JOBID   PARTITION  NAME     "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("       ST  TIME      NODES NODELIST"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("REASON"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100001")]),s._v("  debug      sub.sh   zhenggang  R   00:05:00  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("     cn6\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("参数说明如下：")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("关键词")]),s._v(" "),t("th",[s._v("含义")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("JOBID")]),s._v(" "),t("td",[s._v("job的id号，每个成功提交的任务都会有唯一的id")])]),s._v(" "),t("tr",[t("td",[s._v("PARTITION")]),s._v(" "),t("td",[s._v("计算分区名")])]),s._v(" "),t("tr",[t("td",[s._v("NAME")]),s._v(" "),t("td",[s._v("任务名，默认以提交脚本的名称当作任务名")])]),s._v(" "),t("tr",[t("td",[s._v("USER")]),s._v(" "),t("td",[s._v("用户名，提交该任务的用户名")])]),s._v(" "),t("tr",[t("td",[s._v("ST")]),s._v(" "),t("td",[s._v("任务状态：PD排队；R运行；S挂起；CG正在退出")])]),s._v(" "),t("tr",[t("td",[s._v("TIME")]),s._v(" "),t("td",[s._v("任务运行时间，例子中为5分钟")])]),s._v(" "),t("tr",[t("td",[s._v("NODES")]),s._v(" "),t("td",[s._v("任务作占节点数，例子中为1个")])]),s._v(" "),t("tr",[t("td",[s._v("NODELIST(REASON)")]),s._v(" "),t("td",[s._v("任务所占节点列表，如果是排队状态的任务，则会给出排队原因")])])])]),s._v(" "),t("p",[s._v("备注：常见排队原因：")]),s._v(" "),t("ul",[t("li",[s._v("AssociationResourceLimit：关联的资源限制已满 --- 账户有使用节点数限制，已经用满了。")]),s._v(" "),t("li",[s._v("Resources：当前可用资源不能满足作业需求 --- 系统的可用节点资源不足")]),s._v(" "),t("li",[s._v("Dependency：作业的依赖关系未满足 --- 作业之间有依赖关系，依赖的作业没完成")]),s._v(" "),t("li",[s._v("PartitionDown：作业所在的分区处于 down 状态 --- 分区down，所以节点不可用。")])]),s._v(" "),t("h2",{attrs:{id:"取消作业"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#取消作业"}},[s._v("#")]),s._v(" 取消作业")]),s._v(" "),t("p",[s._v("如果提交作业后，发现有些输入文件参数设置错了，或者其他原因想停止这个作业，可以先使用squeue（或yhq)找到该作业的id号，如100001，然后使用如下命令杀掉任务：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("scancel "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100001")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("天河系统的相应命令是：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yhcancel "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100001")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"进阶"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进阶"}},[s._v("#")]),s._v(" 进阶")]),s._v(" "),t("p",[s._v("关于slurm作业管理系统，还有非常丰富的内容，本文仅给出了最最常用的几个命令。如果想深入了解，可以关于以后的文章。")]),s._v(" "),t("p",[s._v("比如：")]),s._v(" "),t("ul",[t("li",[s._v("如何给任务起名字，让每个任务不一样")]),s._v(" "),t("li",[s._v("如何限制任务的运行时间")]),s._v(" "),t("li",[s._v("如何申请特定节点，排除特定的节点")]),s._v(" "),t("li",[s._v("如何查看作业运行的详细信息，比如提交目录、运行耗时")]),s._v(" "),t("li",[s._v("如何设置作业之间的依赖关系，让某个作业在另一个之后才运行")])]),s._v(" "),t("p",[s._v("不过这些通常用户用到的不多，如果想知道的话，留言哦。")])])}),[],!1,null,null,null);a.default=v.exports}}]);