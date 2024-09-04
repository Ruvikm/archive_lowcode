import { useState } from "react"
import { useEffect } from "react"
import {useRef } from "react"
import {getUUID,type PropsType} from '../../index.ts'
import { useMemo } from "react"
interface PropsTypes extends PropsType{
  reverse:boolean
  dur:number
}


const LargeScreenBorder01 = (props:PropsTypes)=>{
  const {style,lineColor,borderColor,reverse,dur,backgroundColor,..._props} = props
  const domRef = useRef(null)
  const {width,height} = style
  const [w,setW] = useState<number>(parseInt(width)||0)
  const [h,setH] = useState<number>(parseInt(height)||0)
  const path = useMemo(()=>`border-box-01-path-${getUUID()}`,[])
  const gradient = useMemo(()=>`border-box-01-gradient-${getUUID()}`,[])
  const mask = useMemo(()=>`border-box-01-mask-${getUUID()}`,[])
  const pathD = reverse?`M 2.5, 2.5 L 2.5, ${h - 2.5} L ${w - 2.5}, ${h - 2.5} L ${w - 2.5}, 2.5 L 2.5, 2.5`:`M2.5, 2.5 L${w - 2.5}, 2.5 L${w - 2.5}, ${h - 2.5} L2.5, ${h - 2.5} L2.5, 2.5`
  const length = (w + h - 5) * 2
  useEffect(()=>{
    if(domRef?.current){
     setW((domRef?.current as HTMLElement)?.clientWidth)
     setH((domRef?.current as HTMLElement)?.clientHeight)
    }
  },[style?.width,style?.height])
  return <div ref={domRef} style={style} {..._props}>
     <svg width={w} height={h}>
      <defs>
        <path id={path} d={pathD} fill="transparent" />
        <radialGradient id={gradient} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff" stopOpacity="1" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>

        <mask id={mask}>
          <circle cx="0" cy="0" r="150" fill={`url(#${gradient})`}>
            <animateMotion
              dur={`${dur}s`}
              path={pathD}
              rotate="auto"
              repeatCount="indefinite"
            />
          </circle>
        </mask>
      </defs>

      <polygon
        fill={backgroundColor}
        points={`5, 5 ${w - 5}, 5 ${w - 5} ${h - 5} 5, ${h - 5}`}
      />

      <use stroke={borderColor} strokeWidth="1" xlinkHref={`#${path}`} />

      <use
        stroke={lineColor}
        strokeWidth="3"
        xlinkHref={`#${path}`}
        mask={`url(#${mask})`}
      >
        <animate
          attributeName="stroke-dasharray"
          from={`0, ${length}`}
          to={`${length}, 0`}
          dur={`${dur}s`}
          repeatCount="indefinite"
        />
      </use>
    </svg>
  </div>
}

export default LargeScreenBorder01
export {LargeScreenBorder01}