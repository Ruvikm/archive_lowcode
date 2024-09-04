import React, { ReactElement } from 'react';
import {SpringProps,animated,useSpring} from 'react-spring'
interface PropsType extends SpringProps{
    children:ReactElement
    animationPath:string
}

interface RenderType {
    element:ReactElement
    animationPath:string
    animationProps:{[key : string] : unknown}
}


const Render = (props:RenderType)=>{
    const {element,animationPath,animationProps} = props
    const newAnimationProps = animationPath==='attribute'?{
        ...element.props,
        ...animationProps
    }:{
            ...element.props,
            style:{
                ...element.props.style,
                ...animationProps
            }
    }
    return React.cloneElement(element,{...newAnimationProps})
}
const ComponentRender = (props:RenderType)=>{
    return <Render {...props}></Render>
}

const Spring = (props:PropsType) => {
    const {children,animationPath,..._props} = props
    const childrenList = children instanceof Array? children:[children]
    const [config] = useSpring(()=>_props)
    const childrenNodes  = ()=>{
        return childrenList.map((item,index)=>{
            const RenderComponent = animated(ComponentRender)
            return <RenderComponent key={index} element={item}  animationPath={animationPath} animationProps={config}/>
        })
    }
    return <>{
        childrenNodes()
    }</>
};
export { Spring };
export default Spring;
