import { useMemo, useState } from "react"
import { useEffect } from "react"
import {useRef } from "react"
import {getUUID} from '../../index.ts'
import { PropsType } from "../../index.ts"
interface PropsTypes extends PropsType{
  reverse:boolean
  dur:number
  className:string
  borderTitle:string
  borderTitleColor:string
  borderTitleSize:number
  borderTitleHeight:number
  borderTitleWidth:number
}


const LargeScreenBorder04 = (props:PropsTypes)=>{
const { style,
        lineColor,
        borderColor,
        backgroundColor,
        borderTitle,
        borderTitleColor,
        borderTitleSize,
        borderTitleHeight,
        borderTitleWidth,
        ..._props
      } = props
  const domRef = useRef(null)
  const {width,height} = style
  const [w,setW] = useState<number>(parseInt(width)||0)
  const [h,setH] = useState<number>(parseInt(height)||0)
  const filterId = useMemo(()=>`border-box-04-filterId-${getUUID()}`,[])
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
            radius="2"
            in="SourceAlpha"
            result="thicken"
          />
          <feGaussianBlur in="thicken" stdDeviation="3" result="blurred" />
          <feFlood floodColor={lineColor} result="glowColor" />
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

      <polygon
        fill={backgroundColor}
        points={`
        20, 32 ${w * 0.5 - borderTitleWidth / 2}, 32 ${w * 0.5 - borderTitleWidth / 2 + 20}, 53
        ${w * 0.5 + borderTitleWidth / 2 - 20}, 53 ${w * 0.5 + borderTitleWidth / 2}, 32
        ${w - 20}, 32 ${w - 8}, 48 ${w - 8}, ${h - 25} ${w - 20}, ${h - 8}
        20, ${h - 8} 8, ${h - 25} 8, 50
      `}
      />

      <polyline
        fill={backgroundColor}
        stroke={borderColor}
        filter={`url(#${filterId})`}
        points={`
          ${(w - borderTitleWidth) / 2}, 30
          20, 30 7, 50 7, ${50 + (h - 167) / 2}
          13, ${55 + (h - 167) / 2} 13, ${135 + (h - 167) / 2}
          7, ${140 + (h - 167) / 2} 7, ${h - 27}
          20, ${h - 7} ${w - 20}, ${h - 7} ${w - 7}, ${h - 27}
          ${w - 7}, ${140 + (h - 167) / 2} ${w - 13}, ${135 + (h - 167) / 2}
          ${w - 13}, ${55 + (h - 167) / 2} ${w - 7}, ${50 + (h - 167) / 2}
          ${w - 7}, 50 ${w - 20}, 30 ${(w + borderTitleWidth) / 2}, 30
          ${(w + borderTitleWidth) / 2 - 20}, 7 ${(w - borderTitleWidth) / 2 + 20}, 7
          ${(w - borderTitleWidth) / 2}, 30 ${(w - borderTitleWidth) / 2 + 20}, 52
          ${(w + borderTitleWidth) / 2 - 20}, 52 ${(w + borderTitleWidth) / 2}, 30
        `}
      />

      <polygon
        stroke={borderColor}
        fill="transparent"
        points={`
          ${(w + borderTitleWidth) / 2 - 5}, 30 ${(w + borderTitleWidth) / 2 - 21}, 11
          ${(w + borderTitleWidth) / 2 - 27}, 11 ${(w + borderTitleWidth) / 2 - 8}, 34
        `}
      />

      <polygon
        stroke={borderColor}
        fill="transparent"
        points={`
          ${(w - borderTitleWidth) / 2 + 5}, 30 ${(w - borderTitleWidth) / 2 + 22}, 49
          ${(w - borderTitleWidth) / 2 + 28}, 49 ${(w - borderTitleWidth) / 2 + 8}, 26
        `}
      />

      <polygon
        stroke={borderColor}
        fill={lineColor}
        filter={`url(#${filterId})`}
        points={`
          ${(w + borderTitleWidth) / 2 - 11}, 37 ${(w + borderTitleWidth) / 2 - 32}, 11
          ${(w - borderTitleWidth) / 2 + 23}, 11 ${(w - borderTitleWidth) / 2 + 11}, 23
          ${(w - borderTitleWidth) / 2 + 33}, 49 ${(w + borderTitleWidth) / 2 - 22}, 49
        `}
      />

      <polygon
        filter={`url(#${filterId})`}
        fill={borderColor}
        opacity="1"
        points={`
          ${(w - borderTitleWidth) / 2 - 10}, 37 ${(w - borderTitleWidth) / 2 - 31}, 37
          ${(w - borderTitleWidth) / 2 - 25}, 46 ${(w - borderTitleWidth) / 2 - 4}, 46
        `}
      >
        <animate
          attributeName="opacity"
          values="1;0.7;1"
          dur="2s"
          begin="0s"
          repeatCount="indefinite"
        />
      </polygon>

      <polygon
        filter={`url(#${filterId})`}
        fill={borderColor}
        opacity="0.7"
        points={`
          ${(w - borderTitleWidth) / 2 - 40}, 37 ${(w - borderTitleWidth) / 2 - 61}, 37
          ${(w - borderTitleWidth) / 2 - 55}, 46 ${(w - borderTitleWidth) / 2 - 34}, 46
        `}
      >
        <animate
          attributeName="opacity"
          values="0.7;0.4;0.7"
          dur="2s"
          begin="0s"
          repeatCount="indefinite"
        />
      </polygon>

      <polygon
        filter={`url(#${filterId})`}
        fill={borderColor}
        opacity="0.5"
        points={`
          ${(w - borderTitleWidth) / 2 - 70}, 37 ${(w - borderTitleWidth) / 2 - 91}, 37
          ${(w - borderTitleWidth) / 2 - 85}, 46 ${(w - borderTitleWidth) / 2 - 64}, 46
        `}
      >
        <animate
          attributeName="opacity"
          values="0.5;0.2;0.5"
          dur="2s"
          begin="0s"
          repeatCount="indefinite"
        />
      </polygon>

      <polygon
        filter={`url(#${filterId})`}
        fill={borderColor}
        opacity="1"
        points={`
          ${(w + borderTitleWidth) / 2 + 30}, 37 ${(w + borderTitleWidth) / 2 + 9}, 37
          ${(w + borderTitleWidth) / 2 + 3}, 46 ${(w + borderTitleWidth) / 2 + 24}, 46
        `}
      >
        <animate
          attributeName="opacity"
          values="1;0.7;1"
          dur="2s"
          begin="0s"
          repeatCount="indefinite"
        />
      </polygon>

      <polygon
        filter={`url(#${filterId})`}
        fill={borderColor}
        opacity="0.7"
        points={`
          ${(w + borderTitleWidth) / 2 + 60}, 37 ${(w + borderTitleWidth) / 2 + 39}, 37
          ${(w + borderTitleWidth) / 2 + 33}, 46 ${(w + borderTitleWidth) / 2 + 54}, 46
        `}
      >
        <animate
          attributeName="opacity"
          values="0.7;0.4;0.7"
          dur="2s"
          begin="0s"
          repeatCount="indefinite"
        />
      </polygon>

      <polygon
        filter={`url(#${filterId})`}
        fill={borderColor}
        opacity="0.5"
        points={`
          ${(w + borderTitleWidth) / 2 + 90}, 37 ${(w + borderTitleWidth) / 2 + 69}, 37
          ${(w + borderTitleWidth) / 2 + 63}, 46 ${(w + borderTitleWidth) / 2 + 84}, 46
        `}
      >
        <animate
          attributeName="opacity"
          values="0.5;0.2;0.5"
          dur="2s"
          begin="0s"
          repeatCount="indefinite"
        />
      </polygon>

      <text
        x={`${w / 2}`}
        y={borderTitleHeight}
        fill={borderTitleColor}
        fontSize={borderTitleSize}
        textAnchor="middle"
        dominantBaseline="middle"
      >
        { borderTitle }
      </text>

      <polygon
        fill={borderColor} 
        filter={`url(#${filterId})`}
        points={`
          7, ${53 + (h - 167) / 2} 11, ${57 + (h - 167) / 2}
          11, ${133 + (h - 167) / 2} 7, ${137 + (h - 167) / 2}
        `}
      />

      <polygon
        fill={borderColor}
        filter={`url(#${filterId})`}
        points={`
          ${w - 7}, ${53 + (h - 167) / 2} ${w - 11}, ${57 + (h - 167) / 2}
          ${w - 11}, ${133 + (h - 167) / 2} ${w - 7}, ${137 + (h - 167) / 2}
        `}
      />
    </svg>
  </div>
}

export default LargeScreenBorder04
export {LargeScreenBorder04}