function fun00(){
  var patt = /a/g
  var text = ``
  console.log(text.search(patt))
  console.log(text.match(patt))
  console.log(patt.test(text))
  console.log(patt.exec(text))
}
/**
 * 
 */
function fun01(){
  var data = '"{"resultInfo":[{"EXPERTList":[{"EXPERT_EMAIL":"zhangxinxiao@cmbc.com.cn","EXPERT_ID":"0000040674","EXPERT_MPHONE":"18611025958","EXPERT_TPHONE":"","USERNAME":"张馨啸"}],"prodList":[{"CPDY":"指出口贸易项下，民生银行委托境内外代理行或民生银行海外分支机构为出口客户提供的外币短期融资便利和支付服务。","CREATE_DATE":"2017-09-28 14:27:40","CSAN":"78","GZS":"1","ISGZ":"1","PROD_CATA_ID":"04010202","PROD_CATA_NAME":"出口代付","PROD_ID":"00005008","PROD_NAME":"出口代付","QYXQ":"基础贸易采用远期付款，且希望获得融资或有增值需求的出口企业。","SEND_NO":"民银发[2014]206号、民银办发[2014]657号","TDYS":"1、手续简便，满足客户融资需求；\r\n2、融资渠道广泛、降低企业融资成本。","VALID_FLAG":"0","WT":"","YQ":"无","ZLLC":"1、企业提交融资申请书，以及进口贸易背景资料；2、民生银行联系代理行询价，确定代付行后，指示代付行向出口商付款；\r\n3、融资到期后，企业还款；\r\n4、民生银行向代理行支付代付本金及利息。"}]}],"returnCode":{"code":"AAAAAA","type":"S"}}"';
  data = data.replace(/(^[\"\'])|([\"\']$)/g,'')
  // data = data.replace(/\\r\\n/g,'<br />')
  console.log(data)
  console.log(JSON.parse(data))
  var obj = eval(`(${data})`)
  console.log(obj)
}

function fun02(){
  var patt = /(\()?\d{3}(?(1)\))/g
  var text = `
    123-456-7890
    (123)456-7890
    (123)-456-7890
    (123-456-7890
    1234567890
    123 456 7890
  `
  console.log(text.search(patt))
  console.log(text.match(patt))
  console.log(patt.test(text))
  console.log(patt.exec(text))
}

fun02()