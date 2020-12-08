(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{458:function(s,n,a){"use strict";a.r(n);var e=a(51),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("在优化表面，二维或一维体系时，必须固定某个或某几个晶胞方向不优化。VASP本身没有这个功能，但是提供了 "),a("code",[s._v("constr_cell_relax.F")]),s._v(" 文件来设置。根据文件中的提示，添加几行代码后，就可以任意固定晶胞方向了。")]),s._v(" "),a("p",[s._v("使用方法：在目录下建立文件 "),a("code",[s._v("OPTCELL")]),s._v(" ，第一行输入三个数字（比如 "),a("code",[s._v("110")]),s._v(" ），数字 "),a("code",[s._v("1")]),s._v(" 表示优化，数字 "),a("code",[s._v("0")]),s._v(" 表示不优化；三个数字依次对应于xyz方向。比如 "),a("code",[s._v("110")]),s._v(" 表示z轴不优化；"),a("code",[s._v("001")]),s._v(" 表示x和y轴都不优化。")]),s._v(" "),a("blockquote",[a("p",[s._v("注1. 无OPTCELL文件则完全是原版软件的功能；\n注2. 只适用与正交晶胞，所有角都是直角。")])]),s._v(" "),a("p",[s._v("附：修改后的 "),a("code",[s._v("constr_cell_relax.F")]),s._v(" 文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("      SUBROUTINE CONSTR_CELL_RELAX(FCELL)\n      USE PREC\n      REAL(Q) FCELL(3,3), SAVE(3)\n      LOGICAL FILFLG\n      INTEGER ICELL(3)\n\n      INQUIRE(FILE='OPTCELL',EXIST=FILFLG)\n      IF (FILFLG) THEN\n        OPEN(67,FILE='OPTCELL',FORM='FORMATTED',STATUS='OLD')\n          READ(67,\"(3I1)\") (ICELL(I),I=1,3)\n        CLOSE(67)\n        DO I=1,3\n          SAVE(I)=FCELL(I,I)\n        ENDDO\n        FCELL=0.0d0\n        DO I=1,3\n          IF (ICELL(I)==1) FCELL(I,I)=SAVE(I)\n        ENDDO\n      ENDIF\n\n!     just one simple example\n!     relaxation in x directions only\n!      SAVE=FCELL(1,1)\n!      FCELL=0   ! F90 style: set the whole array to zero\n!      FCELL(1,1)=SAVE\n\n      RETURN\n      END SUBROUTINE\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);