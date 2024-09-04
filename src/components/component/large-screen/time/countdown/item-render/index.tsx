import { CSSProperties, useContext, useEffect, useMemo, useState } from 'react'
import style from './index.module.scss'
import { CountdownContext } from '../index.ts'
const ItemRender = (props:{count:string})=>{


  const {contentWidth,contentBackground,contentColor,contentHeight,contentRadius,speed,mode} = useContext(CountdownContext)
  const {count} = props
   const [isMoving,setMove]= useState(false)
   let timer:number = useMemo(()=>0,[])
  const [frontText,setFrontText] = useState(count)
  const [backText,setBackText] = useState(count)
   const move = async ()=>{
    if(timer){
      setMove(false)
      clearTimeout(timer)
      return 
    }
      setBackText(count)
    setMove(true)
    timer = setTimeout(()=>{
      setMove(false)
      setFrontText(count)
    },speed)
   }
   
   useEffect(()=>{
      move()
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[count])


   const styleComponent = {'--height':`${contentHeight}px`,'--width' : `${contentWidth}px`,'--radius':`${contentRadius}px`,'--color':`${contentColor}`,'--background':`${contentBackground}`,'--speed':`${speed/1000}s`} as CSSProperties


  return <div className={`${style['content']}`} style={styleComponent}>
    <div className={`content-item ${mode}-front ${isMoving?`${mode}-frontMove`:''}`} data-text={frontText}></div>
    <div className={`content-item ${mode}-back ${isMoving?`${mode}-backMove`:''}`} data-text={backText}></div>
  </div>
}

export default ItemRender