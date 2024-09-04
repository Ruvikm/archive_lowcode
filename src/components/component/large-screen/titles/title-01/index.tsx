
import {PropsType} from '../../index.ts'
interface PropsTypes extends PropsType{
  textColor:string
  textSize:string
  text:string
}

const LargeScreenTitle01 = (props:PropsTypes)=>{
  const {style,lineColor,borderColor,textColor,textSize,text,..._props} = props
  return  <div 
            style={style} 
            {..._props}
          >
               <svg width={20} height={20}>
                <polyline
                  strokeWidth="4"
                  fill="transparent"
                  stroke={borderColor}
                  points="10, 0 19, 10 10, 20"
                />
                <polyline
                  strokeWidth="2"
                  fill="transparent"
                  stroke={lineColor}
                  points="2, 0 11, 10 2, 20"
                />
              </svg>
              <span style={{color: textColor,fontSize: `${textSize}px`,textAlign:'center',flex:1}}>
                { text }</span
              >
              <svg width={20} height={20}>
                <polyline
                  strokeWidth="4"
                  fill="transparent"
                  stroke={borderColor}
                  points="11, 0 2, 10 11, 20"
                />
                <polyline
                  strokeWidth="2"
                  fill="transparent"
                  stroke={lineColor}
                  points="19, 0 10, 10 19, 20"
                />
              </svg>
  </div>
}

export default LargeScreenTitle01
export {LargeScreenTitle01}