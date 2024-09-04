import { CSSProperties, useMemo, useState } from "react"
import {Statistic} from 'antd'
import dayjs from "dayjs"
import duration from 'dayjs/plugin/duration'
import {CountdownContext} from './index.ts'
dayjs.extend(duration)

interface PropsType {
  style:CSSProperties
  date:string|null
  contentWidth:number
  contentHeight:number
  contentRadius:number
  contentSpace:number
  contentBackground:string
  contentColor:string
  speed:number
  mode:string
}

const {Countdown}  = Statistic

import DayRender from './day/index.tsx'
import HourRender from './hour/index.tsx'
import MinutesRender from './minutes/index.tsx'
import SecondsRender from './seconds/index.tsx'


const LargeScreenCountdown = ( props:PropsType )=>{
  const {date,contentWidth,contentBackground,contentColor,contentHeight,contentRadius,contentSpace,speed,mode,..._props} = props
  const newDate = useMemo(()=>date ? new Date(date).getTime(): new Date().getTime(),[date])
  // 天
  const [day,setDay] = useState<string>('00')
  const DayComponent = useMemo(()=><DayRender day = {day} />,[day])
  // 小时
  const [hour,setHour] = useState<string>('00')
  const HourComponent = useMemo(()=><HourRender hour = {hour} />,[hour])
  // 分钟
  const [minutes,setMinutes] = useState<string>('00')
  const MinutesComponent = useMemo(()=><MinutesRender minutes ={minutes} />,[minutes])
  // 秒
  const [seconds,setSeconds] = useState<string>('00')
  const SecondsComponent = useMemo(()=><SecondsRender seconds={seconds} />,[seconds])


  
  

  const toStringChange = (v:number)=>{
    return v.toString().padStart(2,'0')
  }
  const onCountDownChange = (v:number|string|undefined)=>{
    if(v){
      setDay(toStringChange(dayjs.duration(v as number).days()))
      setHour(toStringChange(dayjs.duration(v as number).hours()))
      setMinutes(toStringChange(dayjs.duration(v as number).minutes()))
      setSeconds(toStringChange(dayjs.duration(v as number).seconds()))
    }
  }
  return <div {..._props}>
   <Countdown
      style={{display:'none'}}
      value={newDate} 
      onChange={onCountDownChange}
    />
    <CountdownContext.Provider value={{contentWidth,contentBackground,contentColor,contentHeight,contentRadius,contentSpace,speed,mode}}>
      {DayComponent}
      {HourComponent}
      {MinutesComponent}
      {SecondsComponent}
    </CountdownContext.Provider>
  </div>
}

export default LargeScreenCountdown
export {LargeScreenCountdown}