import { useContext, useMemo } from 'react'
import ItemRender from '../item-render/index.tsx'
import { CountdownContext } from "../index.ts"
const HourRender = (props:{hour:string})=>{
  const [hour1,hour2] = props.hour.split('')
  const {contentWidth,contentHeight,contentColor} = useContext(CountdownContext)
  const LeftHour = useMemo(()=><ItemRender count={hour1}/>,[hour1])
  const RightHour = useMemo(()=><ItemRender count={hour2}/>,[hour2])
  return  <>
            {LeftHour}
            {RightHour}
            <div style={{width:`${contentWidth}px`, height:`${contentHeight}px`, fontSize:`${contentWidth}px`,color:contentColor,lineHeight:`${contentHeight}px`}}>时</div>
          </>
}

export default HourRender