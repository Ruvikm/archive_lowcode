import {  useState } from "react"
import { useEffect } from "react"
import {useRef } from "react"
import {PropsType} from '../../index.ts'
interface PropsTypes extends PropsType{
  dur:number
  endWidth:number
  endColor:string
}

const LargeScreenLine01 = (props:PropsTypes)=>{
  const {style,lineColor,endColor,endWidth,dur,..._props} = props
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
            style={{...style,lineHeight:height}} 
            {..._props}
          >
          <svg width={w} height={h}>
            <rect x={0} y={0} width={w} height={h} fill={lineColor}>
              <animate
                attributeName="width"
                from="0"
                to={w}
                dur={`${dur}s`}
                calcMode="spline"
                keyTimes="0;1"
                keySplines=".42,0,.58,1"
                repeatCount="indefinite"
              />
            </rect>

            <rect x={0} y={0} width={endWidth} height={h} fill={endColor}>
              <animate
                attributeName="x"
                from="0"
                to={w}
                dur={`${dur}s`}
                calcMode="spline"
                keyTimes="0;1"
                keySplines="0.42,0,0.58,1"
                repeatCount="indefinite"
              />
            </rect>
          </svg>
  </div>
}

export default LargeScreenLine01
export {LargeScreenLine01}