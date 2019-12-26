/**
 * 创建时间
 * @returns {string}
 */
export function date() {
  var mydate = new Date()
  var str = '' + mydate.getFullYear() + '年'
  //判断小于是是直接小于10月就可以了
  if (mydate.getMonth() < 10) {
    str += '0' + (mydate.getMonth() + 1) + '月'
  } else {
    str += mydate.getMonth() + 1 + '月'
  }
  //判断小于是是直接小于10日就可以了
  if (mydate.getDate() < 10) {
    str += '0' + mydate.getDate() + '日'
  } else {
    str += mydate.getDate() + '日'
  }
  str += mydate.getHours() + '时'
  str += mydate.getMinutes() + '分'
  str += mydate.getSeconds()
  return str
}
