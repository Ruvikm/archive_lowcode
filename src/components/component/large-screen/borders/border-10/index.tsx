import {  useState } from "react"
import { useEffect } from "react"
import {useRef } from "react"
import {PropsType} from '../../index.ts'

const LargeScreenBorder10 = (props:PropsType)=>{
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
                  ${w - 15}, 22 170, 22 150, 7 40, 7 28, 21 32, 24
                  16, 42 16, ${h - 32} 41, ${h - 7} ${w - 15}, ${h - 7}
                `}
              />

              <polyline
                fill='none'
                strokeWidth={1}
                stroke={borderColor}
                points={`145, ${h - 5} 40, ${h - 5} 10, ${h - 35}
                  10, 40 40, 5 150, 5 170, 20 ${w - 15}, 20`}
              />
              <polyline
                fill='none'
                stroke={lineColor}
                strokeWidth={1}
                points={`245, ${h - 1} 36, ${h - 1} 14, ${h - 23}
                  14, ${h - 100}`}
              />

              <polyline
                fill='none'
                strokeWidth='3px'
                strokeLinecap='round'
                stroke={borderColor}
                points={`7, ${h - 40} 7, ${h - 75}`}
              />
              <polyline
                fill='none'
                strokeWidth='3px'
                strokeLinecap='round'
                stroke={borderColor}
                points={`28, 24 13, 41 13, 64`}
              />
              <polyline
                fill='none'
                stroke={borderColor}
                points={`5, 45 5, 140`}
              />
              <polyline
                fill='none'
                strokeWidth={1}
                stroke={lineColor}
                points={`14, 75 14, 180`}
              />
              <polyline
                fill='none'
                strokeWidth={1}
                stroke={lineColor}
                points={`55, 11 147, 11 167, 26 250, 26`}
              />
              <polyline
                fill='none'
                strokeWidth='3px'
                strokeLinecap='round'
                stroke={lineColor}
                points={`158, 5 173, 16`}
              />
              <polyline
                fill='none'
                strokeWidth='3px'
                strokeLinecap='round'
                stroke={borderColor}
                strokeDasharray='100 250'
                points={`200, 17 ${w - 10}, 17`}
              />
              <polyline
                fill='none'
                strokeDasharray='80 270'
                strokeWidth={1}
                stroke={lineColor}
                points={`385, 17 ${w - 10}, 17`}
              />
            </svg>
  </div>
}

export default LargeScreenBorder10
export {LargeScreenBorder10}