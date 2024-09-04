import { useState } from "react"
import { useEffect } from "react"
import {useRef } from "react"
import componentStyle from './index.module.scss'
import { PropsType } from "../../index.ts"
interface PropsTypes extends PropsType{
  reverse:boolean
  dur:number
  className:string
}



const LargeScreenBorder02 = (props:PropsTypes)=>{
  const {style,lineColor,borderColor,dur,backgroundColor,className,..._props} = props
  const domRef = useRef(null)
  const {width,height} = style
  const [w,setW] = useState<number>(parseInt(width)||0)
  const [h,setH] = useState<number>(parseInt(height)||0)
const borders = ['left-top', 'right-top', 'left-bottom', 'right-bottom']
  useEffect(()=>{
    if(domRef?.current){
     setW((domRef?.current as HTMLElement)?.clientWidth)
     setH((domRef?.current as HTMLElement)?.clientHeight)
    }
  },[style?.width,style?.height])
  return <div ref={domRef} style={style} className={`${className} ${componentStyle['border-box']}`} {..._props}>
     <svg width={w} height={h}>
      <polygon fill={backgroundColor} points={`10, 27 10, ${h - 27} 13, ${h - 24} 13, ${h - 21} 24, ${h - 11}
      38, ${h - 11} 41, ${h - 8} 73, ${h - 8} 75, ${h - 10} 81, ${h - 10}
      85, ${h - 6} ${w - 85}, ${h - 6} ${w - 81}, ${h - 10} ${w - 75}, ${h - 10}
      ${w - 73}, ${h - 8} ${w - 41}, ${h - 8} ${w - 38}, ${h - 11}
      ${w - 24}, ${h - 11} ${w - 13}, ${h - 21} ${w - 13}, ${h - 24}
      ${w - 10}, ${h - 27} ${w - 10}, 27 ${w - 13}, 25 ${w - 13}, 21
      ${w - 24}, 11 ${w - 38}, 11 ${w - 41}, 8 ${w - 73}, 8 ${w - 75}, 10
      ${w - 81}, 10 ${w - 85}, 6 85, 6 81, 10 75, 10 73, 8 41, 8 38, 11 24, 11 13, 21 13, 24`}/>
    </svg>
    {borders.map(item=><svg
          width={w} 
          height={h}
          key={item}
          className={`${componentStyle['border-item']} ${componentStyle[item]}`}
        >
          <polygon
            fill={borderColor}
            points="6,66 6,18 12,12 18,12 24,6 27,6 30,9 36,9 39,6 84,6 81,9 75,9 73.2,7 40.8,7 37.8,10.2 24,10.2 12,21 12,24 9,27 9,51 7.8,54 7.8,63"
          >
            <animate
              attributeName="fill"
              values={`${borderColor};${lineColor};${borderColor}`}
              dur={`${dur}s`}
              begin="0s"
              repeatCount="indefinite"
            />
          </polygon>
          <polygon
            fill={lineColor}
            points="27.599999999999998,4.8 38.4,4.8 35.4,7.8 30.599999999999998,7.8"
          >
            <animate
              attributeName="fill"
              values={`${lineColor};${borderColor};${lineColor}`}
              dur={`${dur}s`}
              begin="0s"
              repeatCount="indefinite"
            />
          </polygon>
          <polygon
            fill={borderColor}
            points="9,54 9,63 7.199999999999999,66 7.199999999999999,75 7.8,78 7.8,110 8.4,110 8.4,66 9.6,66 9.6,54"
          >
            <animate
              attributeName="fill"
              values={`${borderColor};${lineColor};transparent`}
              dur={`${dur + 1}s`}
              begin="0s"
              repeatCount="indefinite"
            />
          </polygon>
        </svg>)}
  </div>
}

export default LargeScreenBorder02
export {LargeScreenBorder02}