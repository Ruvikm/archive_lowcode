import style from './index.module.scss'
import { useState } from 'react'
import * as Antd from '@/components/antd'
// 页面401
              const Page401 = () => {

              // 最外层容器 开始属性
              const [outermostContainerState, setoutermostContainerState] = useState({style:{width:"100%",
height:"80vh",
display:"flex",
alignItems:"center",
justifyContent:"center",
},
})
              // 最外层容器 结束属性
              
              // 容器 开始属性
              const [containerState, setcontainerState] = useState({style:{width:"800px",
height:undefined,
display:"flex",
textAlign:undefined,
alignItems:"center",
flexDirection:"column",
justifyContent:"flex-start",
},
})
              // 容器 结束属性
              
              // 图片 开始属性
              const [pictureState, setpictureState] = useState({alt:undefined,
src:"https://img.shanhuyun.cn/user_resource/1706520318702.jpg",
width:600,
height:500,
preview:false,
fallback:"https://img.xl-ai.com/shanhuyun/others/%E5%8A%A0%E8%BD%BD%E5%A4%B1%E8%B4%A5.jpeg",
placeholder:undefined,
style:{},
})
              // 图片 结束属性
              
              // 文本 开始属性
              const [textState, settextState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"您没有访问该页面的权限",
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
              
              // 容器 开始属性
              const [containerSihiState, setcontainerSihiState] = useState({style:{width:"300px",
display:"flex",
marginTop:"20px",
alignItems:"center",
justifyContent:"space-between",
},
})
              // 容器 结束属性
              
              // 按钮 开始属性
              const [buttonGlgaState, setbuttonGlgaState] = useState({size:"large",
type:"primary",
ghost:false,
shape:"default",
danger:false,
children:"重新登录",
disabled:false,
style:{width:"120px",
borderTopLeftRadius:"20px",
borderTopRightRadius:"20px",
borderBottomLeftRadius:"20px",
borderBottomRightRadius:"20px",
},
})
              // 按钮 结束属性
              
              // 按钮1 开始属性
              const [button1State, setbutton1State] = useState({size:"large",
type:"default",
ghost:false,
shape:"default",
danger:false,
children:"返回首页",
disabled:false,
style:{width:"120px",
borderTopLeftRadius:"20px",
borderTopRightRadius:"20px",
borderBottomLeftRadius:"20px",
borderBottomRightRadius:"20px",
},
})
              // 按钮1 结束属性
              return<>
            {/* 最外层容器 */}
            <div
style={{width:outermostContainerState.style.width,
height:outermostContainerState.style.height,
display:outermostContainerState.style.display,
alignItems:outermostContainerState.style.alignItems,
justifyContent:outermostContainerState.style.justifyContent,
}}
className={`${style.outermostContainer}`}
>
            {/* 容器 */}
            <div
style={{width:containerState.style.width,
height:containerState.style.height,
display:containerState.style.display,
textAlign:containerState.style.textAlign,
alignItems:containerState.style.alignItems,
flexDirection:containerState.style.flexDirection,
justifyContent:containerState.style.justifyContent,
}}
className={`${style.container}`}
>
            {/* 图片 */}
            <Antd.Image
alt={pictureState.alt}
src={pictureState.src}
width={pictureState.width}
height={pictureState.height}
preview={pictureState.preview}
fallback={pictureState.fallback}
placeholder={pictureState.placeholder}
style={{}}
className={`${style.picture}`}
></Antd.Image>
            {/* 图片 */}
            
            {/* 文本 */}
            <Antd.Typography.Text
code={textState.code}
mark={textState.mark}
type={textState.type}
delete={textState.delete}
italic={textState.italic}
strong={textState.strong}
children={textState.children}
copyable={textState.copyable}
disabled={textState.disabled}
editable={textState.editable}
ellipsis={textState.ellipsis}
keyboard={textState.keyboard}
underline={textState.underline}
style={{color:textState.style.color,
display:textState.style.display,
fontSize:textState.style.fontSize,
}}
className={`${style.text}`}
></Antd.Typography.Text>
            {/* 文本 */}
            
            {/* 容器 */}
            <div
style={{width:containerSihiState.style.width,
display:containerSihiState.style.display,
marginTop:containerSihiState.style.marginTop,
alignItems:containerSihiState.style.alignItems,
justifyContent:containerSihiState.style.justifyContent,
}}
className={`${style.containerSihi}`}
>
            {/* 按钮 */}
            <Antd.Button
size={buttonGlgaState.size}
type={buttonGlgaState.type}
ghost={buttonGlgaState.ghost}
shape={buttonGlgaState.shape}
danger={buttonGlgaState.danger}
children={buttonGlgaState.children}
disabled={buttonGlgaState.disabled}
style={{width:buttonGlgaState.style.width,
borderTopLeftRadius:buttonGlgaState.style.borderTopLeftRadius,
borderTopRightRadius:buttonGlgaState.style.borderTopRightRadius,
borderBottomLeftRadius:buttonGlgaState.style.borderBottomLeftRadius,
borderBottomRightRadius:buttonGlgaState.style.borderBottomRightRadius,
}}
className={`${style.buttonGlga}`}
></Antd.Button>
            {/* 按钮 */}
            
            {/* 按钮1 */}
            <Antd.Button
size={button1State.size}
type={button1State.type}
ghost={button1State.ghost}
shape={button1State.shape}
danger={button1State.danger}
children={button1State.children}
disabled={button1State.disabled}
style={{width:button1State.style.width,
borderTopLeftRadius:button1State.style.borderTopLeftRadius,
borderTopRightRadius:button1State.style.borderTopRightRadius,
borderBottomLeftRadius:button1State.style.borderBottomLeftRadius,
borderBottomRightRadius:button1State.style.borderBottomRightRadius,
}}
className={`${style.button1}`}
></Antd.Button>
            {/* 按钮1 */}
            </div>
            {/* 容器 */}
            </div>
            {/* 容器 */}
            </div>
            {/* 最外层容器 */}
            </>}
export default Page401
export { Page401 }