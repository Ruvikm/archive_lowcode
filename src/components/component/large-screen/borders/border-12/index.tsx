import {  useState } from "react"
import { useEffect } from "react"
import {useRef } from "react"
import {PropsType} from '../../index.ts'

const LargeScreenBorder12 = (props:PropsType)=>{
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
                10, 22 ${w - 22}, 22 ${w - 22}, ${h - 86} ${w - 84}, ${
                  h - 24
                } 10, ${h - 24}
              `}
              />

              <polyline
                fill="none"
                stroke={borderColor}
                points={`8, 5 ${w - 5}, 5 ${w - 5}, ${h - 100}
                  ${w - 100}, ${h - 5} 8, ${h - 5} 8, 5`}
              />
              <polyline
                fill="none"
                stroke={lineColor}
                points={`3, 5 ${w - 20}, 5 ${w - 20}, ${h - 60}
                  ${w - 74}, ${h - 5} 3, ${h - 5} 3, 5`}
              />
              <polyline
                fill="none"
                stroke={lineColor}
                points={`50, 13 ${w - 35}, 13`}
              />
              <polyline
                fill="none"
                stroke={lineColor}
                points={`15, 20 ${w - 35}, 20`}
              />
              <polyline
                fill="none"
                stroke={lineColor}
                points={`15, ${h - 20} ${w - 110}, ${h - 20}`}
              />
              <polyline
                fill="none"
                stroke={lineColor}
                points={`15, ${h - 13} ${w - 110}, ${h - 13}`}
              />
            </svg>
  </div>
}

export default LargeScreenBorder12
export {LargeScreenBorder12}