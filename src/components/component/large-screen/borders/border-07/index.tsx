import { useState } from "react"
import { useEffect } from "react"
import {useRef } from "react"
import {PropsType} from '../../index.ts'

const LargeScreenBorder07 = (props:PropsType)=>{
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
            style={{
              ...style,
              boxShadow:`inset 0 0 25px 3px ${borderColor}`,
              border: `1px solid ${lineColor}`,
              backgroundColor: backgroundColor
            }} 
            {..._props}
          >
             <svg width={w} height={h}>
              <polyline
                fill='none'
                strokeLinecap='round'
                strokeWidth={2}
                stroke={borderColor}
                points={`0, 25 0, 0 25, 0`}
              />
              <polyline
              fill='none'
                strokeLinecap='round'
                strokeWidth={2}
                stroke={borderColor}
                points={`${w - 25}, 0 ${w}, 0 ${w}, 25`}
              />
              <polyline
              fill='none'
                strokeLinecap='round'
                strokeWidth={2}
                stroke={borderColor}
                points={`${w - 25}, ${h} ${w}, ${h} ${w}, ${h - 25}`}
              />
              <polyline
              fill='none'
                strokeLinecap='round'
                strokeWidth={2}
                stroke={borderColor}
                points={`0, ${h - 25} 0, ${h} 25, ${h}`}
              />

              <polyline
              fill='none'
                strokeLinecap='round'
                strokeWidth={5}
                stroke={lineColor}
                points={`0, 10 0, 0 10, 0`}
              />
              <polyline
               fill='none'
                strokeLinecap='round'
                strokeWidth={5}
                stroke={lineColor}
                points={`${w - 10}, 0 ${w}, 0 ${w}, 10`}
              />
              <polyline
               fill='none'
                strokeLinecap='round'
                strokeWidth={5}
                stroke={lineColor}
                points={`${w - 10}, ${h} ${w}, ${h} ${w}, ${h - 10}`}
              />
              <polyline
               fill='none'
                strokeLinecap='round'
                strokeWidth={5}
                stroke={lineColor}
                points={`0, ${h - 10} 0, ${h} 10, ${h}`}
              />
            </svg>
  </div>
}

export default LargeScreenBorder07
export {LargeScreenBorder07}