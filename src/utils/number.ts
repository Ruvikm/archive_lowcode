

/** 数字转换成大写字符串
 * 例如 123 一百二十三
 * @param {number} 数字
 *  */ 
const numberToChineseConverter = (number: number)=>{
  if(number === 0) return '零'
  
  const chineseNum = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
  const chineseUnit = ["", "十", "百", "千", "万", "亿"];
  let numStr = number.toString();
  let len = numStr.length;
  let str = "";
  for (let i = 0; i < len; i++) {
    str += chineseNum[parseInt(numStr[i])] + chineseUnit[len - 1 - i];
  }
  str = str.replace(/零[十百千]/g, "零");
  str = str.replace(/零+/g, "零");
  str = str.replace(/^零+/, "");
  str = str.replace(/零+$/, "");
  if (str[str.length - 1] === "零") {
    str = str.slice(0, -1);
  }

  return str;
}

 export {
  numberToChineseConverter
 }