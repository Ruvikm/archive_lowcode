import { useState } from "react"
import { useEffect } from "react"
import {useRef } from "react"
import componentStyle from './index.module.scss'
import {PropsType} from '../../index.ts'
interface PropsTypes extends PropsType{
  className:string
}


const LargeScreenBorder06 = (props:PropsTypes)=>{
  const {style,lineColor,borderColor,backgroundColor,className,..._props} = props
  const domRef = useRef(null)
  const {width,height} = style
  const [w,setW] = useState<number>(parseInt(width)||0)
  const [h,setH] = useState<number>(parseInt(height)||0)
  const border = ['left-top', 'right-top', 'left-bottom', 'right-bottom']
  useEffect(()=>{
    if(domRef?.current){
     setW((domRef?.current as HTMLElement)?.clientWidth)
     setH((domRef?.current as HTMLElement)?.clientHeight)
    }
  },[style?.width,style?.height])
  return  <div 
            ref={domRef} 
            style={{...style,boxShadow:`inset 0 0 25px 3px ${borderColor}`}} 
            className={`${className} ${componentStyle['border-box']}`}
            {..._props}
          >
          <svg width={w} height={h}>
          <polygon fill={backgroundColor} points={`
            4, 0 ${w - 4}, 0 ${w}, 4 ${w}, ${h - 4} ${w - 4}, ${h}
            4, ${h} 0, ${h - 4} 0, 4
          `}/>
        </svg>
        {border.map(item=> <svg
          width={w}
          height={h}
          key={item}
          className={`${componentStyle['border-item']} ${componentStyle[item]}`}
        >
        <polygon
          fill={lineColor}
          points="40, 0 5, 0 0, 5 0, 16 3, 19 3, 7 7, 3 35, 3"
        />
        </svg>)}
   
  </div>
}

export default LargeScreenBorder06
export {LargeScreenBorder06}