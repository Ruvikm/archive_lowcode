import { useContext, useMemo } from "react"
import ItemRender from "../item-render/index.tsx"
import { CountdownContext } from "../index.ts"

const DayRender = (props:{day:string})=>{
  const {contentWidth,contentHeight,contentColor} = useContext(CountdownContext)
  const [day1,day2] = props.day.split('')
  const LeftDay = useMemo(()=><ItemRender count={day1}/>,[day1])
  const RightDay = useMemo(()=><ItemRender count={day2}/>,[day2])
  return  <>
            {LeftDay}
            {RightDay}
            <div style={{width:`${contentWidth}px`, height:`${contentHeight}px`, fontSize:`${contentWidth}px`,color:contentColor,lineHeight:`${contentHeight}px`}}>天</div>
          </>
}

export default DayRender