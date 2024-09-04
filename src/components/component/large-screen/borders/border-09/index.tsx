import {  useState } from "react"
import { useEffect } from "react"
import {useRef } from "react"
import {PropsType} from '../../index.ts'



const LargeScreenBorder09 = (props:PropsType)=>{
  const {style,lineColor,borderColor,backgroundColor,..._props} = props
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
            <svg width={w} height={h}>
            <polygon fill={backgroundColor} points={` 9, 7 ${w - 9}, 7 ${w - 9}, ${h - 7} 9, ${h - 7}`}/>
            <circle fill={lineColor} cx="5" cy="5" r="2"/>
            <circle fill={lineColor} cx={w - 5} cy="5" r="2"/>
            <circle fill={lineColor} cx={w - 5} cy={h - 5} r="2"/>
            <circle fill={lineColor} cx="5" cy={h - 5} r="2"/>
            <polyline stroke={borderColor} points={`10, 4 ${w - 10}, 4`}/>
            <polyline stroke={borderColor} points={`10, ${h - 4} ${w - 10}, ${h - 4}`}/>
            <polyline stroke={borderColor} points={`5, 70 5, ${h - 70}`}/>
            <polyline stroke={borderColor} points={`${w - 5}, 70 ${w - 5}, ${h - 70}`}/>
            <polyline stroke={borderColor} points={`3, 10, 3, 50`}/>
            <polyline stroke={borderColor} points={`7, 30 7, 80`}/>
            <polyline stroke={borderColor} points={`${w - 3}, 10 ${w - 3}, 50`}/>
            <polyline stroke={borderColor} points={`${w - 7}, 30 ${w - 7}, 80`}/>
            <polyline stroke={borderColor} points={`3, ${h - 10} 3, ${h - 50}`}/>
            <polyline stroke={borderColor} points={`7, ${h - 30} 7, ${h - 80}`}/>
            <polyline stroke={borderColor} points={`${w - 3}, ${h - 10} ${w - 3}, ${h - 50}`}/>
            <polyline stroke={borderColor} points={`${w - 7}, ${h - 30} ${w - 7}, ${h - 80}`}/>
          </svg>
  </div>
}

export default LargeScreenBorder09
export {LargeScreenBorder09}