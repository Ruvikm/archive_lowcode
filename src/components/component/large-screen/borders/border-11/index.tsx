import {  useState } from "react"
import { useEffect } from "react"
import {useRef } from "react"
import {PropsType} from '../../index.ts'


const LargeScreenBorder11 = (props:PropsType)=>{
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
             <svg  width={w} height={h}>
              <polygon
                fill={backgroundColor}
                points={`
                23, 23 ${w - 24}, 23 ${w - 24}, ${h - 24} 23, ${h - 24}
              `}
              />

              <polyline
                fill='none'
                strokeWidth={1}
                stroke={borderColor}
                points={`4, 4 ${w - 22} ,4 ${w - 22}, ${h - 22} 4, ${h - 22} 4, 4`}
              />
              <polyline
                fill='none'
                strokeWidth={3}
                stroke={lineColor}
                points={`10, 10 ${w - 16}, 10 ${w - 16}, ${h - 16} 10, ${
                  h - 16
                } 10, 10`}
              />
              <polyline
                fill='none'
                strokeWidth={3}
                stroke={lineColor}
                points={`16, 16 ${w - 10}, 16 ${w - 10}, ${h - 10} 16, ${
                  h - 10
                } 16, 16`}
              />
              <polyline
                fill='none'
                strokeWidth={3}
                stroke={lineColor}
                points={`22, 22 ${w - 4}, 22 ${w - 4}, ${h - 4} 22, ${h - 4} 22, 22`}
              />
            </svg>
  </div>
}

export default LargeScreenBorder11
export {LargeScreenBorder11}