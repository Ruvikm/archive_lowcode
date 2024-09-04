import { useContext, useMemo } from "react"
import ItemRender from "../item-render/index.tsx"
import { CountdownContext } from "../index.ts"
const SecondsRender = (props:{seconds:string})=>{
  const [second1,second2] = props.seconds.split('')
  const {contentWidth,contentHeight,contentColor} = useContext(CountdownContext)
  
  const LeftSeconds = useMemo(()=><ItemRender count={second1}/>,[second1])
  const RightSeconds = useMemo(()=><ItemRender count={second2}/>,[second2])
  return  <>
            {LeftSeconds}
            {RightSeconds}
            <div style={{width:`${contentWidth}px`, height:`${contentHeight}px`, fontSize:`${contentWidth}px`,color:contentColor,lineHeight:`${contentHeight}px`}}>秒</div>
          </>
}

export default SecondsRender