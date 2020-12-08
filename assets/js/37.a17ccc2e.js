(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{430:function(s,a,t){"use strict";t.r(a);var e=t(51),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"mitgcm-安装说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mitgcm-安装说明"}},[s._v("#")]),s._v(" MITgcm 安装说明")]),s._v(" "),t("h2",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),t("p",[s._v("麻省技术研究所的环流模式，模拟大尺度海洋环流。")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("主页\t"),t("a",{attrs:{href:"http://mitgcm.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://mitgcm.org/"),t("OutboundLink")],1)])]),s._v(" "),t("li",[t("p",[s._v("最新版手册\t"),t("a",{attrs:{href:"http://mitgcm.org/public/r2_manual/latest/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://mitgcm.org/public/r2_manual/latest/"),t("OutboundLink")],1)])])]),s._v(" "),t("h2",{attrs:{id:"下载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载"}},[s._v("#")]),s._v(" 下载")]),s._v(" "),t("p",[s._v("MITgcm_c66b.tar.gz\t02-Dec-2016 00:14\t115M")]),s._v(" "),t("p",[s._v("地址：")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://mitgcm.org/download/MITgcm_c66b.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://mitgcm.org/download/MITgcm_c66b.tar.gz"),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"编译"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[s._v("#")]),s._v(" 编译")]),s._v(" "),t("h3",{attrs:{id:"依赖说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#依赖说明"}},[s._v("#")]),s._v(" 依赖说明")]),s._v(" "),t("p",[s._v("编译mitgcm需要如下环境：")]),s._v(" "),t("ol",[t("li",[s._v("intel / gnu compiler")]),s._v(" "),t("li",[s._v("mpi compiler")]),s._v(" "),t("li",[s._v("netcdf")]),s._v(" "),t("li",[s._v("*lapack库")])]),s._v(" "),t("h3",{attrs:{id:"配置环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置环境"}},[s._v("#")]),s._v(" 配置环境")]),s._v(" "),t("h4",{attrs:{id:"_1-intel-gnu-compiler"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-intel-gnu-compiler"}},[s._v("#")]),s._v(" 1. intel / gnu compiler")]),s._v(" "),t("p",[s._v("我们使用系统安装好的Intel2013编译器，加载方式为：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("module "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" Intel_compiler/13.0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"_2-mpi-compiler"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-mpi-compiler"}},[s._v("#")]),s._v(" 2. mpi compiler")]),s._v(" "),t("p",[s._v("我们使用系统安装好的 mpich 编译器，加载方式为：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("module "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" MPI/mpich/intel2013\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"_3-netcdf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-netcdf"}},[s._v("#")]),s._v(" 3.netcdf")]),s._v(" "),t("p",[s._v("我们使用系统安装好的、与上述编译器配套的netcdf版本，加载方式为：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("module "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" netcdf/4.4\nmodule "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" hdf5/1.8.11 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 因为netcdf4默认需要hdf5")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h4",{attrs:{id:"_4-lapack-默认不需要"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-lapack-默认不需要"}},[s._v("#")]),s._v(" 4.lapack（默认不需要）")]),s._v(" "),t("p",[s._v("我们使用系统安装好的lapack版本，加载方式为：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("module "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" lapack/3.8.0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"生成makefile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成makefile"}},[s._v("#")]),s._v(" 生成makefile")]),s._v(" "),t("p",[s._v("以用户的一个"),t("code",[s._v("test_code")]),s._v("为例，进行说明。")]),s._v(" "),t("p",[s._v("（1）添加genmake2命令搜索路径")]),s._v(" "),t("p",[s._v("我们找到解压缩后的"),t("code",[s._v("MITgcm_c66b/tools")]),s._v("文件夹，里面有一个"),t("code",[s._v("gmake2")]),s._v("命令。我们将该命令所在路径添加到"),t("code",[s._v("PATH")]),s._v("环境变量中。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" MITgcm_c66b/tools \t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用cd命令进入解压缩的tools文件夹（自己找一下）")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(" \t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行export命令把当前文件夹添加到PATH环境变量中")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("对于LAPACK而言，默认是开启了"),t("code",[s._v("SKIP_LAPACK_CHECK=t")]),s._v("选项，跳过检查。如果想打开，需要修改"),t("code",[s._v("genmake2")]),s._v("命令中的内容：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# comment this line out to enable lapack test")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# SKIP_LAPACK_CHECK=t")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("然后在下面的配置文件中添加LAPACK库相关的内容。")]),s._v(" "),t("p",[s._v("此处我们可以忽略这个"),t("code",[s._v("Can we create LAPACK-enabled binaries... no")]),s._v("的问题")])]),s._v(" "),t("p",[s._v("（2）进入算例文件夹")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" test_code \t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用户自己知道在哪")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" \t\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出文件, 比如会显示: build code run 等文件夹")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" build \t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入build文件夹")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("（3）创建编译配置文件")]),s._v(" "),t("p",[s._v("我们以解压后的"),t("code",[s._v("MITgcm_c66b/tools/build_options")]),s._v("目录中"),t("code",[s._v("linux_ia32_ifort11")]),s._v("文件为模板，进行修改，创建适合于当前编译环境下的配置文件"),t("code",[s._v("linux_config_th1a")]),s._v("，文件内容如下：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MPI")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"true"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CC")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mpicc"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("FC")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mpif77"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("F90C")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mpif90"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LINK")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$F90C")]),s._v(' -shared-intel -no-ipo"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DEFINES")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-DALLOW_USE_MPI -DALWAYS_USE_MPI -DWORDLENGTH=4 -DNML_TERMINATOR'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("F90FIXEDFORMAT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-fixed -Tf'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("EXTENDED_SRC_FLAG")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-132'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GET_FC_VERSION")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--version"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("OMPFLAG")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-openmp'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CPP")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cpp -traditional -P'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NOOPTFLAGS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-O0 -g'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NOOPTFILES")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PROCF")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-xHost'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CFLAGS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-O3 -ip -m64 -no-offload -fno-alias -ansi-alias -override-limits '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PROCF")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("FFLAGS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$FFLAGS")]),s._v(" -m64 -convert big_endian -assume byterecl -mcmodel=medium -shared-intel -no-offload -fno-alias -ansi-alias -override-limits "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PROCF")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("F90FLAGS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$FFLAGS")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("F90OPTIM")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("$"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-O2 -align -ip -fp-model source '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PROCF")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("INCLUDEDIRS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("INCLUDES")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LIBS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("INCLUDES")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-I/vol-th/software/io_tools/netcdf/mpi/4.1.2/lib/include'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LIBS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-L/vol-th/software/io_tools/netcdf/mpi/4.1.2/lib -lnetcdff -lnetcdf'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("INCLUDES")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$INCLUDES")]),s._v(' -I/vol-th/software/io_tools/hdf5/mpi/1.8.11/include"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LIBS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LIBS")]),s._v(' -L/vol-th/software/io_tools/hdf5/mpi/1.8.11/lib -lhdf5_hl -lhdf5"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LIBS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LIBS")]),s._v(' -lpthread"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MPI_INC_DIR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/usr/local/mpi-intel2013/include'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("INCLUDES")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$INCLUDES")]),s._v(" -I"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MPI_INC_DIR")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("INCLUDEDIRS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$INCLUDEDIRS")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MPI_INC_DIR")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LIBS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LIBS")]),s._v(" -L"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MPI_INC_DIR")]),s._v(' -lmpich"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MPIINCLUDEDIR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MPI_INC_DIR")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LIBS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LIBS")]),s._v(' -L/vol-th/software/libraries/lapack/3.8.0/lib64 -llapack -lblas"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# lapack on")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[t("code",[s._v("linux_amd64_ifort_mpich_th1a")]),s._v(" 文件放在build文件夹即可。放别的文件夹也行，一会儿能找到就行。")])]),s._v(" "),t("p",[s._v("（4）使用"),t("code",[s._v("genmake2")]),s._v("命令创建makefile")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("genmake2 -mods"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/code -mpi -of"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("./linux_config_th1a\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("说明：")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("gmake2")]),s._v("是生成makefile的命令，如果找不到该命令，可以参考上文将程序所在路径添加到PATH环境变量中，或者找到后在使用时给出绝对路径。")]),s._v(" "),t("li",[t("code",[s._v("-modes=../code")]),s._v("指明源码路径位置。通常算例目录结构为"),t("code",[s._v("build code run")]),s._v(" 这几个文件夹放一起。")]),s._v(" "),t("li",[t("code",[s._v("-mpi")]),s._v("指明编译mpi版本")]),s._v(" "),t("li",[t("code",[s._v("-of=./linux_config_th1a指明使用当前目录下的")]),s._v("linux_config_th1a`脚本当做配置文件")])]),s._v(" "),t("h3",{attrs:{id:"执行make命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行make命令"}},[s._v("#")]),s._v(" 执行make命令")]),s._v(" "),t("p",[s._v("生成makefile文件后，我们执行编译命令：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" depend\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" -j "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("经过耐心等待，编译完成后会生成名为"),t("code",[s._v("mitgcmuv")]),s._v("的可执行文件")]),s._v(" "),t("h2",{attrs:{id:"配置运行环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置运行环境"}},[s._v("#")]),s._v(" 配置运行环境")]),s._v(" "),t("p",[s._v("由于编译完成的可执行程序需要在运行时寻找动态库，因此我们可以选择：")]),s._v(" "),t("p",[s._v("（1）将相关动态库的路径写入"),t("code",[s._v("~/.bashrc")]),s._v("文件，这样每次启动就可以自动加载。但是这样可能会在多用户多种库版本需求是造成冲突，因此不十分推荐。")]),s._v(" "),t("p",[s._v("（2）将相关动态库的路径写入任务提交脚本，这样就保证了多个任务之间的独立性。")]),s._v(" "),t("p",[s._v("相关库路径内容如下：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LUSTRE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F / "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v("}'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LD_LIBRARY_PATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LUSTRE")]),s._v("/software/io_tools/netcdf/mpi/4.1.2/lib:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LD_LIBRARY_PATH")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LD_LIBRARY_PATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LUSTRE")]),s._v("/software/io_tools/hdf5/mpi/1.8.11/lib:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LD_LIBRARY_PATH")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LD_LIBRARY_PATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LUSTRE")]),s._v("/intel2013_lib:/vol-th/lib:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LD_LIBRARY_PATH")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"提交任务测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提交任务测试"}},[s._v("#")]),s._v(" 提交任务测试")]),s._v(" "),t("p",[s._v("以上步骤完成后，我们可以开始进行算例测试了。")]),s._v(" "),t("p",[s._v("我们编写一个提交脚本文件"),t("code",[s._v("sub.sh")]),s._v("，内容类似：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mitgcm")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/path/to/case/build:"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# !!! 需要修改为刚才编译的build文件夹")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# libs")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LUSTRE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F / "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v("}'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LD_LIBRARY_PATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LUSTRE")]),s._v("/software/io_tools/netcdf/mpi/4.1.2/lib:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LD_LIBRARY_PATH")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LD_LIBRARY_PATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LUSTRE")]),s._v("/software/io_tools/hdf5/mpi/1.8.11/lib:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LD_LIBRARY_PATH")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LD_LIBRARY_PATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LUSTRE")]),s._v("/intel2013_lib:/vol-th/lib:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LD_LIBRARY_PATH")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# run")]),s._v("\nyhrun -N "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" -n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v(" -p debug mitgcmuv\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("说明：")]),s._v(" "),t("ol",[t("li",[s._v("请按需要调整最后一行命令。"),t("code",[s._v("-N")]),s._v("节点数，"),t("code",[s._v("-n")]),s._v("总核数，"),t("code",[s._v("-p")]),s._v("运行分区名。详情请参考用户手册提交作业部分。")])]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("ol",[t("li",[s._v("请注意修改脚本的相关路径，否则找不到可执行程序")]),s._v(" "),t("li",[s._v("不同算例编译时就确定了需要的核数，例如"),t("code",[s._v("nPx*nPy= 24")]),s._v("，请使用相同的核数进行提交运行")])])]),s._v(" "),t("p",[s._v("然后使用"),t("code",[s._v("yhbatch")]),s._v("命令提交作业：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yhbatch -N "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" -n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v(" -p debug mitgcmuv\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("成功提交后，可以使用"),t("code",[s._v("yhq")]),s._v("命令查看作业状态，可以在提交目录查看如"),t("code",[s._v("STDOUT.0000")]),s._v("等文件，检查运行结果。")])])}),[],!1,null,null,null);a.default=n.exports}}]);