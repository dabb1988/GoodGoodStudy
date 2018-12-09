// console.log(__dirname)
// 在 JavaScript 中，支持正则表达式的 String 对象的方法: search()、match()、replace()、split()
// 在 JavaScript 中，RegExp 对象方法 : test()、exec()、compile() 
// .可以匹配任何 单个 字符、字母、数组甚至是.本身（换行符以外）
function fun01(){
  var patt = /[ns]a.\.xls/
  console.log(patt.test("na1.xls"))
}
function fun02(){
  var patt = /[Rr]eg[Ee]x/g
  console.log("As RegEx or regex".match(patt))
}
// -不需要被转义，就是普通字符，-只有在[]代表区间字符
function fun03(){
  var patt = /[ns]a[0-9].xls/
  console.log(patt.test("na1.xls"))
}
// ^:[]里面叫做取非匹配^,在外面是开头的意思
function fun04(){
  var patt = /[ns]a[^0-9].xls/g
  console.log(patt.test("naa.xls"))
  var patt2 = /^[ns]a\^a.xls/g
  console.log(patt2.test("na^a.xls"))
}

function fun05(){
  // Backspace键
  var patt1 = /[\b]/g
  // 换页符
  var patt2 = /[\f]/g
  // 换行符
  var patt3 = /[\n]/g
  // 回车符
  var patt4 = /[\r]/g
  // 制表符（TAB键）
  var patt5 = /[\t]/g
  // 垂直制表符
  var patt6 = /[\v]/g
  // /r/n是Windows所使用的文本结束标签
  // /n/n是Linux和Unix所使用的文本结束标签
}

function fun06(){
  // 数字
  var patt1 = /\d/g
  console.log(patt1.test('22'))
  console.log(patt1.exec('22'))
  console.log(patt1.compile('22'))
  console.log('22'.search(patt1))
  console.log('22'.match(patt1))
  // 非数字
  var patt2 = /\D/g
  console.log(patt2.test('2d'))
  console.log(patt2.exec('2d'))
  console.log(patt2.compile('2d'))
  console.log('2d'.search(patt2))
  console.log('2d'.match(patt2))
}

function fun07(){
  // 字母数字和下划线
  var patt1 = /\w/g
  // 非字母数字和下划线
  var patt2 = /\W/g
}

function fun08(){
  // 空白字符 \f\r\n\t\v
  var patt1 = /\s/g
  // 非空白字符 非\f\r\n\t\v
  var patt2 = /\S/g
}

function fun09(){
  // 十六进制 前缀\x
  var patt1 = /\x1/g
  // 八进制 前缀\0
  var patt2 = /\01/g
}

function fun10(){
  // +匹配一个或多个字符
  var patt = /[\w.]+@[\w.]+\.\w+/g
  console.log('57229509@qq.com'.match(patt))
  console.log('233432.57229509@qq.com 57229509@qq.com 57229509@qq.com.cn'.match(patt))
}

function fun11(){
  // *0次或者任意次
  var patt = /\w+[\w.]*@[\w.]+\.\w+/g
  console.log('.23@qq.com 57229509@qq.com 57229509@qq.com.cn'.match(patt))
}

function fun12(){
  // ?0次或1次
  var patt = /https?:\/\/[\w./]+/g
  console.log('url:https://www.baidu.com'.match(patt))
}

function fun13(){
  // +和*都是贪婪型元字符，懒惰型元字符只要给贪婪型加个？即可，例如*？、+？、{n,}?
  var patt1 = /\<[Bb]\>.*\<\/[Bb]\>/g
  console.log('living in <B>AK</B> and <b>HI</b>'.match(patt1))
  var patt2 = /\<[Bb]\>.*?\<\/[Bb]\>/g
  console.log('living in <B>AK</B> and <b>HI</b>'.match(patt2))
}

function fun14(){
  // 边界符\b 与 Backspace键 [\b] 区别，表示\w与\W之间
  // 只匹配位置，不匹配字符
  var patt1 = /\bcat\b/g
  console.log('livcating cat in <B>AK</B> cat <b>HI</b>'.match(patt1))
  var patt2 = /\Bcat\B/g
  console.log('licatving in <B>AK</B> cat <b>HI</b>'.match(patt2))
}

function fun15(){
  var patt = /^\s*\/\/.*/gm
  var paragraph = `// 注释1
    <script>
      
      var a = 1
      // 打印
      console.log(a)
    </script>
  `
  console.log(paragraph.match(patt))
}

fun15()

