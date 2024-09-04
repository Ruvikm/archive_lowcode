import {  useState } from "react"
import { useEffect } from "react"
import {useRef } from "react"
import {PropsType} from '../../index.ts'


const LargeScreenBorder13 = (props:PropsType)=>{
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
              <polygon
                fill={backgroundColor}
                points={`
                7, 7 ${w - 7}, 7 ${w - 7}, ${h - 7} 7, ${h - 7}
              `}
              />

              <polyline
                fill='none'
                stroke={borderColor}
                points={`2, 2 ${w - 2} ,2 ${w - 2}, ${h - 2} 2, ${h - 2} 2, 2`}
              />
              <polyline
                fill='none'
                stroke={lineColor}
                points={`6, 6 ${w - 6}, 6 ${w - 6}, ${h - 6} 6, ${h - 6} 6, 6`}
              />
              <circle fill={borderColor} cx="11" cy="11" r="1" />
              <circle fill={borderColor} cx={w - 11} cy="11" r="1" />
              <circle fill={borderColor} cx={w - 11} cy={h - 11} r="1" />
              <circle fill={borderColor} cx="11" cy={h - 11} r="1" />
            </svg>
  </div>
}

export default LargeScreenBorder13
export {LargeScreenBorder13}