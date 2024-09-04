import { CSSProperties, useEffect, useState } from "react"

interface PropsType{
  style:CSSProperties
}
const LargeScreenTime = (props:PropsType)=>{
  const [time,setTime] = useState('')
  const [timer,setTimer] = useState(0)
  useEffect(()=>{
    setTimer(setInterval(() => {
      const datetime = new Date()
      const year = datetime.getFullYear()
      const month = datetime.getMonth() + 1 < 10 ? '0' + (datetime.getMonth() + 1) : datetime.getMonth() + 1
      const date = datetime.getDate() < 10 ? '0' + datetime.getDate() : datetime.getDate()
      const hh = datetime.getHours() // 时
      const mm = datetime.getMinutes() // 分
      const ss = datetime.getSeconds() // 分
      let time = ''
      if (hh < 10) time += '0'
      time += hh + ':'
      if (mm < 10) time += '0'
      time += mm + ':'
      if (ss < 10) time += '0'
      time += ss
      const yearMonthDay = `${year}-${month}-${date}`
      setTime(yearMonthDay+' '+time)
    }, 500))
    return ()=>{
      clearInterval(timer)
    }
  },[])
  return <div {...props}>
      {time}
  </div>
}

export {LargeScreenTime}
export default LargeScreenTime