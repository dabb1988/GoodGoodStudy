function fun00(){
  var patt = /a/g
  var text = ``
  console.log(text.search(patt))
  console.log(text.match(patt))
  console.log(patt.test(text))
  console.log(patt.exec(text))
}
/**
 * 前瞻模式就是以?=开头的子表达式，需要匹配的文本跟着=后面
 */
function fun01(){
  var patt = /.+(?=:)/g
  var text = `
    http://www.fora.com/
    https://mail.fora.com/
    ftp://ftp.fora.com
  `
  console.log(text.search(patt))
  console.log(text.match(patt))
  console.log(patt.test(text))
  console.log(patt.exec(text))
}


function fun02(){
  var patt = /[^\s].+(:)/g
  var text = `
    http://www.fora.com/
    https://mail.fora.com/
    ftp://ftp.fora.com
  `
  console.log(text.search(patt))
  console.log(text.match(patt))
  console.log(patt.test(text))
  console.log(patt.exec(text))
}

function fun03(){
  var patt = /(?<=\$)\d+/g
  var text = `
    I paid $30 for 100 apples,
    50 oranges, and 60 pears.
    I save $5 on this order.
  `
  console.log(text.search(patt))
  console.log(text.match(patt))
  console.log(patt.test(text))
  console.log(patt.exec(text))
}

function fun04(){
  var patt = /\b(?<!\$)\d+\b/g
  var text = `
    I paid $30 for 100 apples,
    50 oranges, and 60 pears.
    I save $5 on this order.
  `
  console.log(text.search(patt))
  console.log(text.match(patt))
  console.log(patt.test(text))
  console.log(patt.exec(text))
}

fun04()