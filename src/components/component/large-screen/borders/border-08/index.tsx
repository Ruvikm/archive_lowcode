import { useMemo, useState } from "react"
import { useEffect } from "react"
import {useRef } from "react"
import {getUUID} from '../../index.ts'
import {PropsType} from '../../index.ts'


const LargeScreenBorder08 = (props:PropsType)=>{
  const {style,lineColor,borderColor,backgroundColor,..._props} = props
  const domRef = useRef(null)
  const {width,height} = style
  const [w,setW] = useState<number>(parseInt(width)||0)
  const [h,setH] = useState<number>(parseInt(height)||0)
  const filterId = useMemo(()=>`border-box-08-filter-${getUUID()}`,[])
const maskId = useMemo(()=>`border-box-08-mask-${getUUID()}`,[])
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
              <defs>
                <linearGradient id={filterId} x1="0%" y1="0%" x2="100%" y2="100%">
                  <animate
                    attributeName="x1"
                    values="0%;100%;0%"
                    dur="10s"
                    begin="0s"
                    repeatCount="indefinite"
                  />

                  <animate
                    attributeName="x2"
                    values="100%;0%;100%"
                    dur="10s"
                    begin="0s"
                    repeatCount="indefinite"
                  />

                  <stop offset="0%" stopColor={borderColor}>
                    <animate
                      attributeName="stop-color"
                      values={`${borderColor};${lineColor};${borderColor}`}
                      dur="10s"
                      begin="0s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="100%" stopColor={lineColor}>
                    <animate
                      attributeName="stop-color"
                      values={`${lineColor};${borderColor};${lineColor}`}
                      dur="10s"
                      begin="0s"
                      repeatCount="indefinite"
                    />
                  </stop>
                </linearGradient>

                <mask id={maskId}>
                  <polyline
                    stroke="#fff"
                    strokeWidth="3"
                    fill="transparent"
                    points={`8, ${h * 0.4} 8, 3, ${w * 0.4 + 7}, 3`}
                  />
                  <polyline
                    fill="#fff"
                    points={
                       `8, ${h * 0.15} 8, 3, ${w * 0.1 + 7}, 3
                      ${w * 0.1}, 8 14, 8 14, ${h * 0.15 - 7}
                    `
                    }
                  />

                  <polyline
                    stroke="#fff"
                    strokeWidth="3"
                    fill="transparent"
                    points={`${w * 0.5}, 3 ${w - 3}, 3, ${w - 3}, ${h * 0.25}`}
                  />
                  <polyline
                    fill="#fff"
                    points={`
                      ${w * 0.52}, 3 ${w * 0.58}, 3
                      ${w * 0.58 - 7}, 9 ${w * 0.52 + 7}, 9
                    `}
                  />
                  <polyline
                    fill="#fff"
                    points={`
                      ${w * 0.9}, 3 ${w - 3}, 3 ${w - 3}, ${h * 0.1}
                      ${w - 9}, ${h * 0.1 - 7} ${w - 9}, 9 ${w * 0.9 + 7}, 9
                    `}
                  />

                  <polyline
                    stroke="#fff"
                    strokeWidth="3"
                    fill="transparent"
                    points={`8, ${h * 0.5} 8, ${h - 3} ${w * 0.3 + 7}, ${h - 3}`}
                  />
                  <polyline
                    fill="#fff"
                    points={`
                      8, ${h * 0.55} 8, ${h * 0.7}
                      2, ${h * 0.7 - 7} 2, ${h * 0.55 + 7}
                    `}
                  />

                  <polyline
                    stroke="#fff"
                    strokeWidth="3"
                    fill="transparent"
                    points={`${w * 0.35}, ${h - 3} ${w - 3}, ${h - 3} ${w - 3}, ${h * 0.35}`}
                  />
                  <polyline
                    fill="#fff"
                    points={
                      `
                      ${w * 0.92}, ${h - 3} ${w - 3}, ${h - 3} ${w - 3}, ${h * 0.8}
                      ${w - 9}, ${h * 0.8 + 7} ${w - 9}, ${h - 9} ${w * 0.92 + 7}, ${h - 9}
                    `
                    }
                  />
                </mask>
              </defs>

              <polygon fill={backgroundColor} points={`
                15, 9 ${w * 0.1 + 1}, 9 ${w * 0.1 + 4}, 6 ${w * 0.52 + 2}, 6
                ${w * 0.52 + 6}, 10 ${w * 0.58 - 7}, 10 ${w * 0.58 - 2}, 6
                ${w * 0.9 + 2}, 6 ${w * 0.9 + 6}, 10 ${w - 10}, 10 ${w - 10}, ${h * 0.1 - 6}
                ${w - 6}, ${h * 0.1 - 1} ${w - 6}, ${h * 0.8 + 1} ${w - 10}, ${h * 0.8 + 6}
                ${w - 10}, ${h - 10} ${w * 0.92 + 7}, ${h - 10}  ${w * 0.92 + 2}, ${h - 6}
                11, ${h - 6} 11, ${h * 0.15 - 2} 15, ${h * 0.15 - 7}
              `}/>

              <rect x="0" y="0" width={w} height={h} fill={`url(#${filterId})`} mask={`url(#${maskId})`}/>
            </svg>
  </div>
}

export default LargeScreenBorder08
export {LargeScreenBorder08}