function fun00(){
  var patt = /a/g
  var text = ``
  console.log(text.search(patt))
  console.log(text.match(patt))
  console.log(patt.test(text))
  console.log(patt.exec(text))
}
/**
 * 回溯引用指的是模式的后半不分引用在前半部分中定义的子表达式
 */
function fun01(){
  var patt = /[ ]+(\w+)[ ]+\1/g
  var text = `
    This a book block of of text
    several words here are are
    repeated.
  `
  console.log(text.search(patt))
  console.log(text.match(patt))
  console.log(patt.test(text))
  console.log(patt.exec(text))
}

function fun02(){
  var patt = /<[hH]([1-6])>.*?<\/[hH]\1>/g
  var text = `
    <h1>This a book</h1> block of of text
    several <h2>words here </h2>are are
    repe<h3>ated.</h4>
  `
  console.log(text.search(patt))
  console.log(text.match(patt))
  console.log(patt.test(text))
  console.log(patt.exec(text))
}

function fun03(){
  var patt = /(\w+[\w\.]*@[\w\.]+\.\w+)/g
  var text = `
    Hello, ben@qq.com is my email address
  `
  console.log(text.search(patt))
  console.log(text.match(patt))
  console.log(patt.test(text))
  console.log(patt.exec(text))

  var result = text.replace(patt,"<a href='mailto:$1'>$1</a>")
  console.log(result)
}

function fun04(){
  var patt = /(\d{3})(-)(\d{3})(-)(\d{4})/g
  var text = `
    313-555-1234
    248-555-9999
    810-555-9000
  `
  console.log(text.search(patt))
  console.log(text.match(patt))
  // console.log(patt.test(text))
  // console.log(patt.test(text))
  // console.log(patt.test(text))
  console.log(patt.exec(text))
  console.log(patt.exec(text))
  console.log(patt.exec(text))
  console.log(patt.exec(text))

  var result = text.replace(patt,"($1) $3-$5")
  console.log(result)
}

/**
 * \E \l \L \u \U 看78页表格
 */
function fun05(){
  var patt = /(<[hH]1>)(.*?)(<\/[hH]1>)/g
  var text = `
    <h1>This a book</h1> block of of text
    several <h2>words here </h2>are are
    repe<h3>ated.</h4>
  `
  console.log(text.search(patt))
  console.log(text.match(patt))
  // console.log(patt.test(text))
  console.log(patt.exec(text))

  var result = text.replace(patt,function(match,$1,$2,$3){
    console.log(match)
    console.log($1)
    console.log($2)
    console.log($3)
    return $1 + $2.toLocaleUpperCase() + $3
  })
  console.log(result)
}

fun04()