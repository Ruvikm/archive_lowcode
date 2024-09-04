import { useState } from "react"
import { useEffect } from "react"
import {useRef } from "react"
import { PropsType } from "../../index.ts"

const LargeScreenBorder03 = (props:PropsType)=>{
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
  return <div ref={domRef} style={style} {..._props}>
      <svg width={w} height={h}>
      <path
        fill={backgroundColor}
        stroke={borderColor}
        d={`
          M 5 20 L 5 10 L 12 3  L 60 3 L 68 10
          L ${w - 20} 10 L ${w - 5} 25
          L ${w - 5} ${h - 5} L 20 ${h - 5}
          L 5 ${h - 20} L 5 20
        `}
      />

      <path
        fill="transparent"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="10, 5"
        stroke={backgroundColor}
        d={`M 16 9 L 61 9`}
      />

      <path
        fill="transparent"
        stroke={lineColor}
        d={`M 5 20 L 5 10 L 12 3  L 60 3 L 68 10`}
      />

      <path
        fill="transparent"
        stroke={lineColor}
        d={`M ${w - 5} ${h - 30} L ${w - 5} ${h - 5} L ${w - 30} ${h - 5}`}
      />
    </svg>
  </div>
}

export default LargeScreenBorder03
export {LargeScreenBorder03}