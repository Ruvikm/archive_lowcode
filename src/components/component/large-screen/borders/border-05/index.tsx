import { useMemo, useState } from "react"
import { useEffect } from "react"
import {useRef } from "react"
import { getUUID,alpha } from "../../index.ts"
import { PropsType } from "../../index.ts"



const LargeScreenBorder05 = (props:PropsType)=>{
  const {style,lineColor,borderColor,backgroundColor,..._props} = props
  const domRef = useRef(null)
  const {width,height} = style
  const [w,setW] = useState<number>(parseInt(width)||0)
  const [h,setH] = useState<number>(parseInt(height)||0)
  const filterId = useMemo(()=>`border-box-03-filterId-${getUUID()}`,[])
  useEffect(()=>{
    if(domRef?.current){
     setW((domRef?.current as HTMLElement)?.clientWidth)
     setH((domRef?.current as HTMLElement)?.clientHeight)
    }
  },[style?.width,style?.height])
  return <div ref={domRef} style={style} {..._props}>
     <svg width={w} height={h}>
      <defs>
        <filter id={filterId} height="150%" width="150%" x="-25%" y="-25%">
          <feMorphology
            operator="dilate"
            radius="1"
            in="SourceAlpha"
            result="thicken"
          />
          <feGaussianBlur in="thicken" stdDeviation="2" result="blurred" />
          <feFlood floodColor={alpha(lineColor, 0.7)} result="glowColor">
            <animate
              attributeName="flood-color"
              values={`
                ${alpha(lineColor, 0.7)};
                ${alpha(lineColor, 0.3)};
                ${alpha(lineColor, 0.7)};
              `}
              dur="3s"
              begin="0s"
              repeatCount="indefinite"
            />
          </feFlood>
          <feComposite
            in="glowColor"
            in2="blurred"
            operator="in"
            result="softGlowColored"
          />
          <feMerge>
            <feMergeNode in="softGlowColored" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

     {w&&h&& <path
        fill={backgroundColor}
        strokeWidth="2"
        stroke={borderColor}
        d={`
          M15 5 L ${w - 15} 5 Q ${w - 5} 5, ${w - 5} 15
          L ${w - 5} ${h - 15} Q ${w - 5} ${h - 5}, ${w - 15} ${h - 5}
          L 15, ${h - 5} Q 5 ${h - 5} 5 ${h - 15} L 5 15
          Q 5 5 15 5
        `}
      />}

      <path
        strokeWidth="2"
        fill="transparent"
        strokeLinecap="round"
        filter={`url(#${filterId})`}
        stroke={lineColor}
        d={`M 20 5 L 15 5 Q 5 5 5 15 L 5 20`}
      />

      <path
        strokeWidth="2"
        fill="transparent"
        strokeLinecap="round"
        filter={`url(#${filterId})`}
        stroke={lineColor}
        d={`M ${w - 20} 5 L ${w - 15} 5 Q ${w - 5} 5 ${w - 5} 15 L ${
          w - 5
        } 20`}
      />

      <path
        strokeWidth="2"
        fill="transparent"
        strokeLinecap="round"
        filter={`url(#${filterId})`}
        stroke={lineColor}
        d={`
          M ${w - 20} ${h - 5} L ${w - 15} ${h - 5}
          Q ${w - 5} ${h - 5} ${w - 5} ${h - 15}
          L ${w - 5} ${h - 20}
        `}
      />

      <path
        strokeWidth="2"
        fill="transparent"
        strokeLinecap="round"
        filter={`url(#${filterId})`}
        stroke={lineColor}
        d={`
          M 20 ${h - 5} L 15 ${h - 5}
          Q 5 ${h - 5} 5 ${h - 15}
          L 5 ${h - 20}
        `}
      />
    </svg>
  </div>
}

export default LargeScreenBorder05
export {LargeScreenBorder05}