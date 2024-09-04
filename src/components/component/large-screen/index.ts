import Color from 'color'

interface PropsType{
  style:CSSStyleDeclaration
  lineColor:string
  borderColor:string
  backgroundColor:string
}

const getUUID = (randomLength = 10) => {
  return Number(Math.random().toString().substring(2, randomLength) + Date.now()).toString(36)
}
const alpha=(color: string, alpha = 1) =>{
  return Color(color).alpha(alpha).toString()
}

export {getUUID,alpha, type PropsType}