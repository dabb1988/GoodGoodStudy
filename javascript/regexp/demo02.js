function fun00(){
  var patt = /a/g
  var text = ``
  console.log(text.search(patt))
  console.log(text.match(patt))
  console.log(patt.test(text))
  console.log(patt.exec(text))
}
/**
 * 子表达式必须用（和）括起来
 */
function fun01(){
  var patt = /&nbsp;{2,}/g
  var text = `This Tom&nbsp;J
  window&nbsp;&nbsp;2000,and
  `
  console.log(text.search(patt))
  console.log(text.match(patt))
  console.log(patt.test(text))
  console.log(patt.exec(text))
}

function fun02(){
  var patt = /(\d{1,3}\.){3}\d{1,3}/g
  var text = `My ip is [127.0.0.1],and yours is[192.168.1.201]`
  console.log(text.search(patt))
  console.log(text.match(patt))
  console.log(patt.test(text))
  console.log(patt.exec(text))
}
function fun03(){
  var patt = /(19|20)\d{2}/g
  var text = `I borned in 1988-08-09`
  console.log(text.search(patt))
  console.log(text.match(patt))
  console.log(patt.test(text))
  console.log(patt.exec(text))
}

function fun04(){
  var patt = /((\d{1,2}|1\d{2}|2[0-4]\d|(25[0-5]))\.){3}(\d{1,2}|1\d{2}|2[0-4]\d|(25[0-5]))/g
  var text = `My ip is [127.0.0.1],and yours is[192.168.1.201]`
  console.log(text.search(patt))
  console.log(text.match(patt))
  console.log(patt.test(text))
  console.log(patt.exec(text))
}

fun04()