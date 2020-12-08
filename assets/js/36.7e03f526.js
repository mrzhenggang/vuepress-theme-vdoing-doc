(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{429:function(a,s,t){"use strict";t.r(s);var e=t(51),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[a._v("#")]),a._v(" 简介")]),a._v(" "),t("p",[a._v("LAMMPS即Large-scale Atomic/MolecularMassivelyParallel Simulator，可以翻译为大规模原子分子并行模拟器，主要用于分子动力学相关的一些计算和模拟工作。")]),a._v(" "),t("p",[a._v("链接："),t("a",{attrs:{href:"http://lammps.sandia.gov/",target:"_blank",rel:"noopener noreferrer"}},[a._v("官网地址"),t("OutboundLink")],1),a._v("，"),t("a",{attrs:{href:"http://lammps.sandia.gov/download.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("下载最新稳定版"),t("OutboundLink")],1),a._v("，"),t("a",{attrs:{href:"http://lammps.sandia.gov/tars/",target:"_blank",rel:"noopener noreferrer"}},[a._v("下载指定版本"),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"编译环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译环境"}},[a._v("#")]),a._v(" 编译环境")]),a._v(" "),t("p",[a._v("需要的编译环境为：")]),a._v(" "),t("ul",[t("li",[a._v("c/c++的编译器，如gcc/icc等")]),a._v(" "),t("li",[a._v("mpi编译器，如mpich等")]),a._v(" "),t("li",[a._v("fftw数学库")])]),a._v(" "),t("p",[a._v("下面以intel 2013 compiler 编译器 和 mpich3.0.4 版本为例，介绍 lammps 的安装。")]),a._v(" "),t("p",[a._v("我们需要先设置一下环境变量：")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 设置编译c/c++的环境")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" /opt/intel/composer_xe_2013.0.079/bin/iccvars.sh intel64 \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 设置mpi编译环境  ")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/local/mpi-intel2013/bin:"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),a._v(" \n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("LD_LIBRARY_PATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/local/mpi-intel2013/lib:"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$LD_LIBRARY_PATH")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[a._v("不同机器的编译器版本、安装目录不同，请依据自己的情况修改，不要直接copy。")]),a._v(" "),t("h2",{attrs:{id:"安装lammps的说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装lammps的说明"}},[a._v("#")]),a._v(" 安装lammps的说明")]),a._v(" "),t("p",[a._v("lammps包含了非常丰富的packages，截止到现在大约有60多个，默认开启的是：")]),a._v(" "),t("ul",[t("li",[a._v("KSPACE")]),a._v(" "),t("li",[a._v("MANYBODY")]),a._v(" "),t("li",[a._v("MOLECULE")])]),a._v(" "),t("p",[a._v("其他的包，我大致分为3类：")]),a._v(" "),t("ul",[t("li",[a._v("直接通过 make yes 就能安装的包，如ASPHERE、BODY、CLASS2等。")]),a._v(" "),t("li",[a._v("需要在lammps/lib文件夹下手动编译的包，如atc、quip、reaxc等。")]),a._v(" "),t("li",[a._v("需要在lammps/lib文件夹下，额外下载源码安装，然后再链接的包，如kim、voronoi、user-quip等。")])]),a._v(" "),t("p",[a._v("另外特别指出，还有一些功能可以支持，部分列举如下：")]),a._v(" "),t("ul",[t("li",[a._v("lammps支持GPU，可以编译出GPU版本")]),a._v(" "),t("li",[a._v("安装jpeg/png的库，并通过修改lammps的makefile来支持")]),a._v(" "),t("li",[a._v("修改lammps的makefile的宏定义来支持ffmpeg")]),a._v(" "),t("li",[a._v("修改lammps的makefile的宏定义来编译出不同精度的lammps")])]),a._v(" "),t("p",[a._v("此次编译仅安装默认的包，其他的内容以后会介绍。")]),a._v(" "),t("h2",{attrs:{id:"编译lammps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译lammps"}},[a._v("#")]),a._v(" 编译lammps")]),a._v(" "),t("h3",{attrs:{id:"解压缩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解压缩"}},[a._v("#")]),a._v(" 解压缩")]),a._v(" "),t("p",[a._v("如果我们下载到的压缩包为lammps-30Jul16.tar.gz，将其放置在某个目录下，例如用户根目录$HOME,先进行解压缩：")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" lammps-30Jul16.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" lammps-30Jul16\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" src\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h3",{attrs:{id:"修改makefile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改makefile"}},[a._v("#")]),a._v(" 修改Makefile")]),a._v(" "),t("p",[a._v("我们使用文本编辑器（例如vim），打开lammps的makefile文件，修改其中的参数为我们需要的。")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" MAKE/Makefile.mpi\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("需要修改的参数包括如下部分：")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# intel的FFTW  ")]),a._v("\nMKLROOT "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" /opt/intel/composer_xe_2013.0.079/mkl  \nFFT_INC "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("    -DFFT_FFTW3  -I"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("MKLROOT"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("/include/fftw  \nFFT_PATH "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("  \nFFT_LIB "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("MKLROOT"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("/interfaces/fftw3xf/libfftw3xf_intel.a  \n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[a._v("备注：MKLROOT为系统中Intel Compiler的mkl库的根目录，请依据自己的情况进行修改为实际路径。默认情况下安装的Intel Compiler的MKL库并未编译fftw的静态库，故需要手动编译。以后关于intel FFTW库的文章会介绍道的。")]),a._v(" "),t("h3",{attrs:{id:"编译"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[a._v("#")]),a._v(" 编译")]),a._v(" "),t("p",[a._v("编译命令为：")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" mpi "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 如果是多核的机器可以并行编译，如make -j 4 mpi 表示用4个cpu核一起编译")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("如果编译成功，会会生成一个名为 lmp_mpi 的可执行文件。")]),a._v(" "),t("h2",{attrs:{id:"测试lammps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试lammps"}},[a._v("#")]),a._v(" 测试lammps")]),a._v(" "),t("p",[a._v("下面举例说明如何在天河超算平台下，通过slurm作业管理系统，提交lammps程序。")]),a._v(" "),t("h3",{attrs:{id:"准备输入文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备输入文件"}},[a._v("#")]),a._v(" 准备输入文件")]),a._v(" "),t("p",[a._v("准备一个输入文件，如用lammps自带的例子：")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" lammps/bench\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("里面有一个名为in.lj的文件。")]),a._v(" "),t("h3",{attrs:{id:"编写提交脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编写提交脚本"}},[a._v("#")]),a._v(" 编写提交脚本")]),a._v(" "),t("p",[a._v("编写一个名为sub.sh的脚本文件，里面写：")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[a._v("#!/bin/bash  ")]),a._v("\nyhrun -N "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" -n "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("24")]),a._v(" -p debug /path/to/lmp_th "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" in.lj  \n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("参数说明如下：")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("参数")]),a._v(" "),t("th",[a._v("含义")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("yhrun")]),a._v(" "),t("td",[a._v("slurm作业管理系统中，并行执行mpi程序的命令，类似mpirun")])]),a._v(" "),t("tr",[t("td",[a._v("-N")]),a._v(" "),t("td",[a._v("任务所需的总节点数")])]),a._v(" "),t("tr",[t("td",[a._v("-n")]),a._v(" "),t("td",[a._v("任务所需的总核数")])]),a._v(" "),t("tr",[t("td",[a._v("-p")]),a._v(" "),t("td",[a._v("计算分区")])]),a._v(" "),t("tr",[t("td",[a._v("/path/to/lmp_mpi")]),a._v(" "),t("td",[a._v("lmp_mpi可执行程序所在位置，请替换为实际的路径")])]),a._v(" "),t("tr",[t("td",[a._v("< in.lj")]),a._v(" "),t("td",[a._v("表示以in.lj作为输入文件")])])])]),a._v(" "),t("h3",{attrs:{id:"提交任务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提交任务"}},[a._v("#")]),a._v(" 提交任务")]),a._v(" "),t("p",[a._v("使用yhbatch命令提交作业：")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yhbatch -N "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" -n "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("24")]),a._v("-p debug sub.sh  \n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"查看结果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看结果"}},[a._v("#")]),a._v(" 查看结果")]),a._v(" "),t("p",[a._v("计算完成后会在默认的输出文件log.lammps中生成结果文件，查看是否正确。")])])}),[],!1,null,null,null);s.default=r.exports}}]);