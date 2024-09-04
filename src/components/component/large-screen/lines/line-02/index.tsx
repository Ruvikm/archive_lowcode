import {  useMemo, useState } from "react"
import { useEffect } from "react"
import {useRef } from "react"
import {PropsType,getUUID} from '../../index.ts'
interface PropsTypes extends PropsType{
  dur:number
}

const LargeScreenLine02 = (props:PropsTypes)=>{
  const {style,lineColor,borderColor,dur,..._props} = props
  const domRef = useRef(null)
  const {width,height} = style
  const [w,setW] = useState<number>(parseInt(width)||0)
  const [h,setH] = useState<number>(parseInt(height)||0)
  const id = useMemo(()=>getUUID(),[]) 
  const animationId1 = useMemo(()=>`d10ani1${id}`,[id])
  const animationId2 = useMemo(()=>`d10ani2${id}`,[id])
  const animationId3 = useMemo(()=>`d10ani3${id}`,[id])
  const animationId4 = useMemo(()=>`d10ani4${id}`,[id])
  const animationId5 = useMemo(()=>`d10ani5${id}`,[id])
  const animationId6 = useMemo(()=>`d10ani6${id}`,[id])
  const animationId7 = useMemo(()=>`d10ani7${id}`,[id])
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
            <polyline
              stroke={lineColor}
              strokeWidth="2"
              points={`0, ${h / 2} ${w}, ${h / 2}`}
            />

            <polyline
              stroke={borderColor}
              strokeWidth="2"
              points={`5, ${h / 2} ${w * 0.2 - 3}, ${h / 2}`}
              strokeDasharray={`0, ${w * 0.2}`}
              fill="freeze"
            >
              <animate
                id={animationId2}
                attributeName="stroke-dasharray"
                values={`0, ${w * 0.2};${w * 0.2}, 0;`}
                dur={dur}
                begin={`${animationId1}.end`}
                fill="freeze"
              />
              <animate
                attributeName="stroke-dasharray"
                values={`${w * 0.2}, 0;0, ${w * 0.2}`}
                dur="0.01s"
                begin={`${animationId7}.end`}
                fill="freeze"
              />
            </polyline>

            <polyline
              stroke={borderColor}
              strokeWidth="2"
              points={`${w * 0.2 + 3}, ${h / 2} ${w * 0.8 - 3}, ${h / 2}`}
              strokeDasharray={`0, ${w * 0.6}`}
            >
              <animate
                id={animationId4}
                attributeName="stroke-dasharray"
                values={`0, ${w * 0.6};${w * 0.6}, 0`}
                dur={dur}
                begin={`${animationId3}.end + 1s`}
                fill="freeze"
              />
              <animate
                attributeName="stroke-dasharray"
                values={`${w * 0.6}, 0;0, ${w * 0.6}`}
                dur="0.01s"
                begin={`${animationId7}.end`}
                fill="freeze"
              />
            </polyline>

            <polyline
              stroke={borderColor}
              strokeWidth="2"
              points={`${w * 0.8 + 3}, ${h / 2} ${w - 5}, ${h / 2}`}
              strokeDasharray={`0, ${w * 0.2}`}
            >
              <animate
                id={animationId6}
                attributeName="stroke-dasharray"
                values={`0, ${w * 0.2};${w * 0.2}, 0`}
                dur={dur}
                begin={`${animationId5}.end + 1s`}
                fill="freeze"
              />
              <animate
                attributeName="stroke-dasharray"
                values={`${w * 0.2}, 0;0, ${w * 0.3}`}
                dur="0.01s"
                begin={`${animationId7}.end`}
                fill="freeze"
              />
            </polyline>

            <circle cx="2" cy={h / 2} r="2" fill={lineColor}>
              <animate
                id={animationId1}
                attributeName="fill"
                values={`${lineColor};${borderColor}`}
                begin={`0s;${animationId7}.end`}
                dur="0.3s"
                fill="freeze"
              />
            </circle>

            <circle cx={w * 0.2} cy={h / 2} r="2" fill={lineColor}>
              <animate
                id={animationId3}
                attributeName="fill"
                values={`${lineColor};${borderColor}`}
                begin={`${animationId2}.end`}
                dur="0.3s"
                fill="freeze"
              />
              <animate
                attributeName="fill"
                values={`${lineColor};${lineColor}`}
                dur="0.01s"
                begin={`${animationId7}.end`}
                fill="freeze"
              />
            </circle>

            <circle cx={w * 0.8} cy={h / 2} r="2" fill={lineColor}>
              <animate
                id={animationId5}
                attributeName="fill"
                values={`${lineColor};${borderColor}`}
                begin={`${animationId4}.end`}
                dur="0.3s"
                fill="freeze"
              />
              <animate
                attributeName="fill"
                values={`${lineColor};${lineColor}`}
                dur="0.01s"
                begin={`${animationId7}.end`}
                fill="freeze"
              />
            </circle>

            <circle cx={w - 2} cy={h / 2} r="2" fill={lineColor}>
              <animate
                id={animationId7}
                attributeName="fill"
                values={`${lineColor};${borderColor}`}
                begin={`${animationId6}.end`}
                dur="0.3s"
                fill="freeze"
              />
              <animate
                attributeName="fill"
                values={`${lineColor};${borderColor}`}
                dur="0.01s"
                begin={`${animationId7}.end`}
                fill="freeze"
              />
            </circle>
          </svg>
  </div>
}

export default LargeScreenLine02
export {LargeScreenLine02}