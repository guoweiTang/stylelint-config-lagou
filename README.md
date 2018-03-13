# stylelint-config-lagou
A simple configuration based on [configuring stylelint](https://stylelint.io/user-guide/configuration/)

### Rules
The following is introduce of **rules**:

#### Spaces or Empty lines
* [warn : indentation] 缩进为4个空格
* [warn : max-empty-lines] 最大连续空2行
* `[error : block-no-empty] 禁止空代码块`
* `[error : comment-no-empty] 禁止空注释块（多行注释）`
* [warn : comment-whitespace-inside] 注释两侧必须有空格
* [warn : value-list-comma-space-before] 逗号前不能有空格
* [warn : value-list-comma-space-after] 逗号后必须有空格
* [warn : value-list-max-empty-lines] 禁止值列表中存在空行
* [warn : declaration-block-semicolon-space-after] 单行语句分号后必须有空格
* [warn : block-closing-brace-empty-line-before] 语句块（右大括号）结束前一行不能是空行
* `[error : block-opening-brace-newline-after] 多行语句块（左大括号）后必须换行`
* [warn : block-opening-brace-space-before] 语句块（左大括号）开始前必须有空格
* [warn : declaration-colon-space-after] 属性值之前（冒号后）必须有空格
<!-- * [warn : rule-empty-line-before] 多行规则的语句块间必须有空行 -->




#### Specific Syntax
* [warn : function-calc-no-unspaced-operator] 禁止calc语句中计算符（+、-、*、/）两侧无空格
* `[error : declaration-no-important] 禁止!important`
* `[error : media-feature-name-no-unknown] 禁止未知的media名称`
* `[error : no-duplicate-at-import-rules] 禁止同一个文件中值重复的@import语句`
* `[error : no-unknown-animations] 禁止未知的animation-name`


#### Structure
<!-- * [warn : selector-max-compound-selectors] 禁止选择器继承关系超过3层 -->
* [warn : selector-max-id] 禁止ID选择器超过1层
<!-- * [warn : max-nesting-depth] 禁止选择器嵌套超过3层 -->

#### Others
<!-- * [warn : number-leading-zero] 禁止不足1的小数整数位有0 -->
* `[error : number-no-trailing-zero] 禁止小数末尾有0`
* `[error : length-zero-no-unit] 禁止数值0后有单位`
* `[error : color-no-invalid-hex] 禁止无效的十六进制颜色`
* [warn : color-named] 禁止使用颜色名字
* `[error : string-no-newline] 禁止同一个字符串内部换行（可用\n代替）`
* [warn : number-max-precision] 禁止小数尾数超过4位
* `[error : unit-no-unknown] 禁止未知单位`
* `[error : property-no-unknown] 禁止未知属性`
* `[error : selector-pseudo-class-no-unknown] 禁止未知伪类选择器`
* `[error : selector-pseudo-element-no-unknown] 禁止未知伪元素选择器`
* `[error : declaration-block-no-duplicate-properties] 禁止重复属性名`
* `[error : no-duplicate-selectors] 禁止重复的选择器`
* `[error : no-extra-semicolons] 禁止额外的的分号`
* `[error : declaration-block-trailing-semicolon] 语句必须分号结尾`
* [warn : string-quotes] 字符串的引号必须为双引号
* `[error : selector-type-case] 标签选择器必须是小写`
* `[error : property-case] 属性名小写`