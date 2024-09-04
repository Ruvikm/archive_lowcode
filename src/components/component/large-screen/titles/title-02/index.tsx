import {  useState } from "react"
import { useEffect } from "react"
import {useRef } from "react"
import {PropsType} from '../../index.ts'

interface PropsTypes extends PropsType{
textSize:number
textColor:string
text:string
}
const LargeScreenTitle02 = (props:PropsTypes)=>{
  const {style,lineColor,borderColor,textColor,textSize,text,..._props} = props
  const domRef = useRef(null)
  const {width,height} = style
  const [w,setW] = useState<number>(parseInt(width)||0)
  const [h,setH] = useState<number>(parseInt(height)||0)
  useEffect(()=>{
    if(domRef?.current){
     setW((domRef?.current as HTMLElement)?.clientWidth)
     setH((domRef?.current as HTMLElement)?.clientHeight)
    }
  },[style?.width,style?.height])
  return  <div 
            ref={domRef} 
            style={style} 
            {..._props}
          >
          <span style={{color:textColor,fontSize:textSize}}>{text}</span>
          <svg width={w} height={h} style={{position:'absolute'}}>
          <polygon stroke={lineColor} fill={borderColor} points={`15.5 6.5 20.5 0.5 50.5 0.5 55.5 6.5 15.5 6.5`} />
          <polygon
            stroke={lineColor}
            fill={borderColor}
            points={`15.5 ${h - 6.5} 20.5 ${h - 0.5} 50.5 ${h - 0.5} 55.5 ${h - 6.5} 15.5 ${h - 6.5}`}
          />
          <polygon
          stroke={lineColor}
            fill={borderColor}
            points={`${w - 15.5} 6.5 ${w - 20.5} 0.5 ${w - 50.5} 0.5 ${w - 55.5} 6.5 ${w - 15.5} 6.5`}
          />
          <polygon
          stroke={lineColor}
            fill={borderColor}
            points={`${w - 15.5} ${h - 6.5} ${w - 20.5} ${h - 0.5} ${w - 50.5} ${h - 0.5} ${w - 55.5} ${h - 6.5} ${
              w - 15.5
            } ${h - 6.5}`}
          />
          <polygon
            stroke={lineColor}
            fill={borderColor}
            points={`15.5 6.5 0.5 ${h / 2} 15.5 ${h - 6.5} ${w - 15.5} ${h - 6.5} ${w - 0.5} ${h / 2} ${
              w - 15.5
            } 6.5 15.5 6.5`}
          />
          <polyline stroke={lineColor} fill='none' points={`20.5 14.5 8.5 ${h / 2} 20.5 ${h - 14.5}`} />
          <polyline stroke={lineColor} fill='none' points={`${w - 20.5} 14.5 ${w - 8.5} ${h / 2} ${w - 20.5} ${h - 14.5}`} />
        </svg>
  </div>
}

export default LargeScreenTitle02
export {LargeScreenTitle02}