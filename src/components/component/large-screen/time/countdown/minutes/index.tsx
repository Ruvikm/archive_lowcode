import { useContext, useMemo } from "react"
import ItemRender from "../item-render/index.tsx"
import { CountdownContext } from "../index.ts"
const MinutesRender = (props:{minutes:string})=>{
  const [minute1,minute2] = props.minutes.split('')
  const {contentWidth,contentHeight,contentColor} = useContext(CountdownContext)

  const LeftMinutes = useMemo(()=><ItemRender count={minute1}/>,[minute1])
  const RightMinutes = useMemo(()=><ItemRender count={minute2}/>,[minute2])
  return  <>
            {LeftMinutes}
            {RightMinutes}
            <div style={{width:`${contentWidth}px`, height:`${contentHeight}px`, fontSize:`${contentWidth}px`,color:contentColor,lineHeight:`${contentHeight}px`}}>分</div>
          </>
}

export default MinutesRender