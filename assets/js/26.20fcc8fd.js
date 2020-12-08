(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{420:function(s,a,t){"use strict";t.r(a);var e=t(51),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"什么是dft"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是dft"}},[s._v("#")]),s._v(" 什么是DFT")]),s._v(" "),t("p",[s._v("DFT（Discrete Fourier Transform），即离散傅里叶变换，是傅里叶变换在时域和频域上都呈离散的形式,将信号的时域采样变换为其DTFT的频域采样。")]),s._v(" "),t("h2",{attrs:{id:"什么是fft"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是fft"}},[s._v("#")]),s._v(" 什么是FFT")]),s._v(" "),t("p",[s._v("FFT（Fast Fourier Transformation），即为快速傅氏变换，是离散傅氏变换（DFT）的快速算法，它是根据离散傅氏变换的奇、偶、虚、实等特性，对离散傅立叶变换的算法进行改进获得的。")]),s._v(" "),t("h2",{attrs:{id:"什么是fftw"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是fftw"}},[s._v("#")]),s._v(" 什么是FFTW")]),s._v(" "),t("p",[s._v("FFTW ( the Faster Fourier Transform in the West)是一个快速计算离散傅里叶变换的标准C语言程序集，其由MIT的M.Frigo和S. Johnson开发。可计算一维或多维实和复数据以及任意规模的DFT。")]),s._v(" "),t("p",[s._v("官网地址："),t("a",{attrs:{href:"http://www.fftw.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("传送门"),t("OutboundLink")],1),s._v("，下载地址："),t("a",{attrs:{href:"http://www.fftw.org/download.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("传送门"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("p",[s._v("目前最新版本为\nVersion 3.3.6 is the latest stable release of FFTW ( 截止2017-04-30）")]),s._v(" "),t("h2",{attrs:{id:"ftw库所需的编译环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ftw库所需的编译环境"}},[s._v("#")]),s._v(" FTW库所需的编译环境")]),s._v(" "),t("p",[s._v("Intel Compiler /GNU Compiler + MPI Compiler （如果编译mpi版的fftw）")]),s._v(" "),t("h2",{attrs:{id:"默认编译"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#默认编译"}},[s._v("#")]),s._v(" 默认编译")]),s._v(" "),t("p",[s._v("安装fftw仅需要遵循常见的三步骤即可（configure+make+make install），在这里先介绍一下默认安装，再然着重介绍一些configure的配置选项。")]),s._v(" "),t("p",[s._v("以fftw-3.3.6-pl2.tar.gz为例，先从官网下载该压缩包。解压缩，并进入源码目录进行编译即可。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" zxvf fftw-3.3.6-pl2.tar.gz  \n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" fftw-3.3.6-pl2  \n./configure  \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("  \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("这样就可以把fftw库按照默认配置，安装到默认的路径下。\n使用的是GNU的编译器，安装到的是/usr/local下面。")]),s._v(" "),t("h2",{attrs:{id:"优化编译参数介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优化编译参数介绍"}},[s._v("#")]),s._v(" 优化编译参数介绍")]),s._v(" "),t("p",[s._v("但是，我们通常会依据./configure -help得到的信息来添加一些参数来达到优化编译的目录。\n接下来我们使用命令查看一些常用配置参数：")]),s._v(" "),t("p",[s._v("设定安装目录")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("Installation directories:\n--prefix"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("PREFIX    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" architecture-independent files "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" PREFIX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("/usr/local"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("是否编译动态库")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("Optional Features:\n--enable-shared"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("PKGS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("    build shared libraries "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("default"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("no"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("是否编译静态库")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("--enable-static"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("PKGS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("    build static libraries "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("default"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("是否编译单精度版本")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("--enable-single         compile fftw "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" single precision\n--enable-float          synonym "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" --enable-single\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("开启针对特定机器架构的优化，这个取决于机器CPU（下面有介绍）。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("--enable-sse            "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" SSE optimizations\n--enable-sse2           "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" SSE/SSE2 optimizations\n--enable-avx            "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" AVX optimizations\n--enable-avx2           "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" AVX2 optimizations\n--enable-neon           "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" ARM NEON optimizations\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("开启积和熔加运算(Fused Multiply-Add/FMA)的优化")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("--enable-fma            "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" optimizations "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" machineswith fused multiply-add\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("是否编译mpi版的fftw库")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("--enable-mpi            compile FFTW MPI library\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("是否使用OpenMP指令进行并行")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("--enable-openmp         use OpenMP directives "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" parallelism\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("是否编译FFTW SMP线程库")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("--enable-threads        compile FFTW SMP threads library\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这部分是指定编译器及编译参数，默认是用GNU的编译器：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("Some influential environment variables:\n  CC          C compiler "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v("\n  CFLAGS      C compiler flags\n  CPP         C preprocessor\n  MPICC       MPI C compiler "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v("\n  F77         Fortran "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("77")]),s._v(" compiler "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v("\n  FFLAGS      Fortran "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("77")]),s._v(" compiler flags\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("为了用intel的编译器，我们需要特别指定一下：CC=icc F77=ifort，相关的参数通常保持默认即可。")]),s._v(" "),t("p",[s._v("备注：\n1）如何查看CPU是否支持某个指令集呢？使用如下命令可以列出支持的指令集名称")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/cpuinfo "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" flags "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uniq")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("2）SIMD\nSIMD单指令流多数据流(SingleInstructionMultiple Data,SIMD)是一种采用一个控制器来控制多个处理器，同时对一组数据（又称“数据向量”）中的每一个分别执行相同的操作从而实现空间上的并行性的技术。")]),s._v(" "),t("p",[s._v("MMX是由英特尔开发的一种SIMD多媒体指令集，SSE（Streaming SIMDExtensions）是MMX的扩充指令集，AVX（Advanced VectorExtensions）是Intel的SSE延伸架构，FMA（Fused MultiplyAccumulate）是Intel的AVX扩充指令集。")]),s._v(" "),t("p",[s._v("NEON实际上是ARM的SIMD（Single InstructionMultiple Data）技术的延续，它是一个结合64和128 bit的SIMD（Single InstructionMultiple Data 单指令多重数据）指令集。")]),s._v(" "),t("h2",{attrs:{id:"优化编译单精度版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优化编译单精度版本"}},[s._v("#")]),s._v(" 优化编译单精度版本")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("./configure --prefix"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/software/fftw/3.3.6-pl2-icc13 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("  \n  "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CC")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("icc "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("F77")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ifort "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("  \n  --enable-shared --enable-static "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("  \n  --enable-float "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("  \n  --enable-sse --enable-sse2 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("  \n  --enable-avx --enable-avx2 --enable-fma "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("  \n  --enable-mpi "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("  \n  --enable-threads--enable-openmp  \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("  \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h2",{attrs:{id:"优化编译双精度版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优化编译双精度版本"}},[s._v("#")]),s._v(" 优化编译双精度版本")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("./configure --prefix"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/software/fftw/3.3.6-pl2-icc13 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("  \n  "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CC")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("icc "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("F77")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ifort "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("  \n  --enable-shared --enable-static "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("  \n  --enable-sse2 --enable-avx --enable-avx2 --enable-fma "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("  \n  --enable-mpi "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("  \n  --enable-threads--enable-openmp  \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"编译一些需要fftw的软件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译一些需要fftw的软件"}},[s._v("#")]),s._v(" 编译一些需要fftw的软件")]),s._v(" "),t("p",[s._v("通常会用到的是libfftw.a以及一些头文件，在编译或链接的时候，给出它的路径即可。")]),s._v(" "),t("p",[s._v("比如：\ngromacs软件：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("  -DFFTWF_LIBRARY"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v('/software/fftw/3.3.6-pl2-icc13"')]),s._v(" \n  -DFFTWF_INCLUDE_DIR"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v('/fftw/include/"')]),s._v("  \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("这里介绍的是官网题的fftw库，我们还可以使用Intel MKL库中的fftw接口。")])])}),[],!1,null,null,null);a.default=n.exports}}]);