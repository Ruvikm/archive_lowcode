import style from './index.module.scss'
import { useState } from 'react'
import * as Antd from '@/components/antd'
// 页面404
              const Page404 = () => {

              // 最外层容器 开始属性
              const [outermostContainerKlnmState, setoutermostContainerKlnmState] = useState({style:{top:undefined,
width:"100%",
height:"80vh",
display:"flex",
position:"static",
alignItems:"center",
justifyContent:"center",
backgroundColor:undefined,
backgroundImage:"url()",
backgroundRepeat:"repeat",
},
})
              // 最外层容器 结束属性
              
              // 居中容器 开始属性
              const [centeredContainerState, setcenteredContainerState] = useState({style:{width:"800px",
height:undefined,
textAlign:"center",
},
})
              // 居中容器 结束属性
              
              // 图片 开始属性
              const [pictureYygqState, setpictureYygqState] = useState({alt:undefined,
src:"https://img.shanhuyun.cn/user_resource/1706517758795.jpg",
width:800,
height:400,
preview:false,
fallback:"https://img.xl-ai.com/shanhuyun/others/%E5%8A%A0%E8%BD%BD%E5%A4%B1%E8%B4%A5.jpeg",
placeholder:undefined,
style:{width:"100%",
height:"100%",
},
})
              // 图片 结束属性
              
              // 文本 开始属性
              const [textLefhState, settextLefhState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"非常抱歉，您访问的页面不存在",
copyable:false,
disabled:false,
editable:false,
ellipsis:false,
keyboard:false,
underline:false,
style:{color:"#cfc9c9",
display:"block",
fontSize:"28px",
},
})
              // 文本 结束属性
              
              // 按钮 开始属性
              const [buttonState, setbuttonState] = useState({size:"large",
type:"primary",
ghost:false,
shape:"default",
danger:false,
children:"返回首页",
disabled:false,
style:{width:"200px",
height:undefined,
marginTop:"20px",
borderTopWidth:undefined,
borderLeftWidth:undefined,
borderRightWidth:undefined,
borderBottomWidth:undefined,
borderTopLeftRadius:"20px",
borderTopRightRadius:"20px",
borderBottomLeftRadius:"20px",
borderBottomRightRadius:"20px",
},
})
              // 按钮 结束属性
              return<>
            {/* 最外层容器 */}
            <div
style={{top:outermostContainerKlnmState.style.top,
width:outermostContainerKlnmState.style.width,
height:outermostContainerKlnmState.style.height,
display:outermostContainerKlnmState.style.display,
position:outermostContainerKlnmState.style.position,
alignItems:outermostContainerKlnmState.style.alignItems,
justifyContent:outermostContainerKlnmState.style.justifyContent,
backgroundColor:outermostContainerKlnmState.style.backgroundColor,
backgroundImage:outermostContainerKlnmState.style.backgroundImage,
backgroundRepeat:outermostContainerKlnmState.style.backgroundRepeat,
}}
className={`${style.outermostContainerKlnm}`}
>
            {/* 居中容器 */}
            <div
style={{width:centeredContainerState.style.width,
height:centeredContainerState.style.height,
textAlign:centeredContainerState.style.textAlign,
}}
className={`${style.centeredContainer}`}
>
            {/* 图片 */}
            <Antd.Image
alt={pictureYygqState.alt}
src={pictureYygqState.src}
width={pictureYygqState.width}
height={pictureYygqState.height}
preview={pictureYygqState.preview}
fallback={pictureYygqState.fallback}
placeholder={pictureYygqState.placeholder}
style={{width:pictureYygqState.style.width,
height:pictureYygqState.style.height,
}}
className={`${style.pictureYygq}`}
></Antd.Image>
            {/* 图片 */}
            
            {/* 文本 */}
            <Antd.Typography.Text
code={textLefhState.code}
mark={textLefhState.mark}
type={textLefhState.type}
delete={textLefhState.delete}
italic={textLefhState.italic}
strong={textLefhState.strong}
children={textLefhState.children}
copyable={textLefhState.copyable}
disabled={textLefhState.disabled}
editable={textLefhState.editable}
ellipsis={textLefhState.ellipsis}
keyboard={textLefhState.keyboard}
underline={textLefhState.underline}
style={{color:textLefhState.style.color,
display:textLefhState.style.display,
fontSize:textLefhState.style.fontSize,
}}
className={`${style.textLefh}`}
></Antd.Typography.Text>
            {/* 文本 */}
            
            {/* 按钮 */}
            <Antd.Button
size={buttonState.size}
type={buttonState.type}
ghost={buttonState.ghost}
shape={buttonState.shape}
danger={buttonState.danger}
children={buttonState.children}
disabled={buttonState.disabled}
style={{width:buttonState.style.width,
height:buttonState.style.height,
marginTop:buttonState.style.marginTop,
borderTopWidth:buttonState.style.borderTopWidth,
borderLeftWidth:buttonState.style.borderLeftWidth,
borderRightWidth:buttonState.style.borderRightWidth,
borderBottomWidth:buttonState.style.borderBottomWidth,
borderTopLeftRadius:buttonState.style.borderTopLeftRadius,
borderTopRightRadius:buttonState.style.borderTopRightRadius,
borderBottomLeftRadius:buttonState.style.borderBottomLeftRadius,
borderBottomRightRadius:buttonState.style.borderBottomRightRadius,
}}
className={`${style.button}`}
></Antd.Button>
            {/* 按钮 */}
            </div>
            {/* 居中容器 */}
            </div>
            {/* 最外层容器 */}
            </>}
export default Page404
export { Page404 }