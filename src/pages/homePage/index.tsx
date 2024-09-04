import style from './index.module.scss'
import { useState } from 'react'
import * as Antd from '@/components/antd'
// 首页
              const HomePage = () => {

              // 最外层 开始属性
              const [outermostLayerState, setoutermostLayerState] = useState({style:{width:"100vw",
height:"100vh",
display:"flex",
backgroundSize:"100% 100%",
backgroundColor:undefined,
backgroundImage:"url(https://img.xl-ai.com/shanhuyun/user_upload_file/背景图.jpeg)",
backgroundRepeat:"repeat",
},
})
              // 最外层 结束属性
              
              // 左侧容器 开始属性
              const [leftContainerState, setleftContainerState] = useState({style:{width:"50%",
display:"flex",
alignItems:"center",
flexDirection:"row",
justifyContent:"center",
},
})
              // 左侧容器 结束属性
              
              // 图片 开始属性
              const [pictureNzcjState, setpictureNzcjState] = useState({alt:undefined,
src:"https://img.xl-ai.com/shanhuyun/user_upload_file/上层 (1).png",
width:400,
height:580,
preview:false,
fallback:"https://img.xl-ai.com/shanhuyun/others/%E5%8A%A0%E8%BD%BD%E5%A4%B1%E8%B4%A5.jpeg",
placeholder:undefined,
style:{marginTop:"0px",
marginLeft:"0px",
paddingTop:"0px",
},
})
              // 图片 结束属性
              
              // 右侧容器 开始属性
              const [rightContainerState, setrightContainerState] = useState({style:{width:"50%",
display:"flex",
alignItems:"center",
justifyContent:"flex-start",
},
})
              // 右侧容器 结束属性
              
              // 容器 开始属性
              const [containerAximState, setcontainerAximState] = useState({style:{maxWidth:"440px",
minWidth:"440px",
boxShadow:"0px 0px 30px 0px rgba(0, 0, 0, 0.12)",
minHeight:"450px",
marginLeft:"40px",
paddingTop:"50px",
paddingLeft:"50px",
paddingRight:"50px",
paddingBottom:"20px",
backgroundColor:"rgb(255, 255, 255)",
borderTopLeftRadius:"4px",
borderTopRightRadius:"4px",
borderBottomLeftRadius:"4px",
borderBottomRightRadius:"4px",
},
})
              // 容器 结束属性
              
              // 欢迎登录系统 开始属性
              const [welcomeToLogInToTheSystemState, setwelcomeToLogInToTheSystemState] = useState({code:false,
mark:false,
type:undefined,
level:1,
delete:false,
italic:false,
children:"欢迎登录系统",
copyable:false,
disabled:false,
editable:false,
ellipsis:false,
underline:false,
style:{display:"flex",
fontSize:"28px",
justifyContent:"center",
},
})
              // 欢迎登录系统 结束属性
              
              // 手机号输入框 开始属性
              const [phoneNumberInputBoxState, setphoneNumberInputBoxState] = useState({size:"middle",
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"请输入账号",
defaultValue:undefined,
style:{height:"48px",
marginTop:"30px",
backgroundColor:"rgb(247, 248, 250)",
},
})
              // 手机号输入框 结束属性
              
              // 密码输入框 开始属性
              const [passwordInputBoxState, setpasswordInputBoxState] = useState({size:"middle",
value:undefined,
prefix:undefined,
bordered:true,
maxLength:20,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"请输入密码",
defaultValue:undefined,
visibilityToggle:false,
style:{height:"48px",
marginTop:"25px",
backgroundColor:"rgb(247, 248, 250)",
},
})
              // 密码输入框 结束属性
              
              // 容器 开始属性
              const [containerOjicState, setcontainerOjicState] = useState({style:{display:"block",
marginTop:"12px",
justifyContent:"space-between",
},
})
              // 容器 结束属性
              
              // 单选框 开始属性
              const [radioState, setradioState] = useState({checked:false,
children:"记住密码",
disabled:false,
autoFocus:false,
defaultChecked:false,
style:{color:"#c6cad0",
},
})
              // 单选框 结束属性
              
              // 登录按钮 开始属性
              const [loginButtonState, setloginButtonState] = useState({size:"middle",
type:"primary",
ghost:false,
shape:"default",
danger:false,
children:"登录",
disabled:false,
style:{width:"100%",
height:"50px",
fontSize:"18px",
marginTop:"40px",
marginBottom:"20px",
borderTopLeftRadius:"4px",
borderTopRightRadius:"4px",
borderBottomLeftRadius:"4px",
borderBottomRightRadius:"4px",
},
})
              // 登录按钮 结束属性
              
              // 注册按钮 开始属性
              const [registrationButtonFzbtState, setregistrationButtonFzbtState] = useState({size:"middle",
type:"default",
ghost:false,
shape:"default",
danger:false,
children:"注册",
disabled:false,
style:{width:"100%",
height:"50px",
fontSize:"18px",
marginTop:undefined,
borderStyle:"solid",
marginBottom:"20px",
borderTopLeftRadius:"4px",
borderTopRightRadius:"4px",
borderBottomLeftRadius:"4px",
borderBottomRightRadius:"4px",
},
})
              // 注册按钮 结束属性
              return<>
            {/* 最外层 */}
            <div
style={{width:outermostLayerState.style.width,
height:outermostLayerState.style.height,
display:outermostLayerState.style.display,
backgroundSize:outermostLayerState.style.backgroundSize,
backgroundColor:outermostLayerState.style.backgroundColor,
backgroundImage:outermostLayerState.style.backgroundImage,
backgroundRepeat:outermostLayerState.style.backgroundRepeat,
}}
className={`${style.outermostLayer}`}
>
            {/* 左侧容器 */}
            <div
style={{width:leftContainerState.style.width,
display:leftContainerState.style.display,
alignItems:leftContainerState.style.alignItems,
flexDirection:leftContainerState.style.flexDirection,
justifyContent:leftContainerState.style.justifyContent,
}}
className={`${style.leftContainer}`}
>
            {/* 图片 */}
            <Antd.Image
alt={pictureNzcjState.alt}
src={pictureNzcjState.src}
width={pictureNzcjState.width}
height={pictureNzcjState.height}
preview={pictureNzcjState.preview}
fallback={pictureNzcjState.fallback}
placeholder={pictureNzcjState.placeholder}
style={{marginTop:pictureNzcjState.style.marginTop,
marginLeft:pictureNzcjState.style.marginLeft,
paddingTop:pictureNzcjState.style.paddingTop,
}}
className={`${style.pictureNzcj}`}
></Antd.Image>
            {/* 图片 */}
            </div>
            {/* 左侧容器 */}
            
            {/* 右侧容器 */}
            <div
style={{width:rightContainerState.style.width,
display:rightContainerState.style.display,
alignItems:rightContainerState.style.alignItems,
justifyContent:rightContainerState.style.justifyContent,
}}
className={`${style.rightContainer}`}
>
            {/* 容器 */}
            <div
style={{maxWidth:containerAximState.style.maxWidth,
minWidth:containerAximState.style.minWidth,
boxShadow:containerAximState.style.boxShadow,
minHeight:containerAximState.style.minHeight,
marginLeft:containerAximState.style.marginLeft,
paddingTop:containerAximState.style.paddingTop,
paddingLeft:containerAximState.style.paddingLeft,
paddingRight:containerAximState.style.paddingRight,
paddingBottom:containerAximState.style.paddingBottom,
backgroundColor:containerAximState.style.backgroundColor,
borderTopLeftRadius:containerAximState.style.borderTopLeftRadius,
borderTopRightRadius:containerAximState.style.borderTopRightRadius,
borderBottomLeftRadius:containerAximState.style.borderBottomLeftRadius,
borderBottomRightRadius:containerAximState.style.borderBottomRightRadius,
}}
className={`${style.containerAxim}`}
>
            {/* 欢迎登录系统 */}
            <Antd.Typography.Title
code={welcomeToLogInToTheSystemState.code}
mark={welcomeToLogInToTheSystemState.mark}
type={welcomeToLogInToTheSystemState.type}
level={welcomeToLogInToTheSystemState.level}
delete={welcomeToLogInToTheSystemState.delete}
italic={welcomeToLogInToTheSystemState.italic}
children={welcomeToLogInToTheSystemState.children}
copyable={welcomeToLogInToTheSystemState.copyable}
disabled={welcomeToLogInToTheSystemState.disabled}
editable={welcomeToLogInToTheSystemState.editable}
ellipsis={welcomeToLogInToTheSystemState.ellipsis}
underline={welcomeToLogInToTheSystemState.underline}
style={{display:welcomeToLogInToTheSystemState.style.display,
fontSize:welcomeToLogInToTheSystemState.style.fontSize,
justifyContent:welcomeToLogInToTheSystemState.style.justifyContent,
}}
className={`${style.welcomeToLogInToTheSystem}`}
></Antd.Typography.Title>
            {/* 欢迎登录系统 */}
            
            {/* 手机号输入框 */}
            <Antd.Input
size={phoneNumberInputBoxState.size}
prefix={phoneNumberInputBoxState.prefix}
bordered={phoneNumberInputBoxState.bordered}
disabled={phoneNumberInputBoxState.disabled}
maxLength={phoneNumberInputBoxState.maxLength}
showCount={phoneNumberInputBoxState.showCount}
addonAfter={phoneNumberInputBoxState.addonAfter}
allowClear={phoneNumberInputBoxState.allowClear}
addonBefore={phoneNumberInputBoxState.addonBefore}
placeholder={phoneNumberInputBoxState.placeholder}
defaultValue={phoneNumberInputBoxState.defaultValue}
style={{height:phoneNumberInputBoxState.style.height,
marginTop:phoneNumberInputBoxState.style.marginTop,
backgroundColor:phoneNumberInputBoxState.style.backgroundColor,
}}
className={`${style.phoneNumberInputBox}`}
></Antd.Input>
            {/* 手机号输入框 */}
            
            {/* 密码输入框 */}
            <Antd.Input.Password
size={passwordInputBoxState.size}
value={passwordInputBoxState.value}
prefix={passwordInputBoxState.prefix}
bordered={passwordInputBoxState.bordered}
maxLength={passwordInputBoxState.maxLength}
showCount={passwordInputBoxState.showCount}
addonAfter={passwordInputBoxState.addonAfter}
allowClear={passwordInputBoxState.allowClear}
addonBefore={passwordInputBoxState.addonBefore}
placeholder={passwordInputBoxState.placeholder}
defaultValue={passwordInputBoxState.defaultValue}
visibilityToggle={passwordInputBoxState.visibilityToggle}
style={{height:passwordInputBoxState.style.height,
marginTop:passwordInputBoxState.style.marginTop,
backgroundColor:passwordInputBoxState.style.backgroundColor,
}}
className={`${style.passwordInputBox}`}
></Antd.Input.Password>
            {/* 密码输入框 */}
            
            {/* 容器 */}
            <div
style={{display:containerOjicState.style.display,
marginTop:containerOjicState.style.marginTop,
justifyContent:containerOjicState.style.justifyContent,
}}
className={`${style.containerOjic}`}
>
            {/* 单选框 */}
            <Antd.Radio
checked={radioState.checked}
children={radioState.children}
disabled={radioState.disabled}
autoFocus={radioState.autoFocus}
defaultChecked={radioState.defaultChecked}
style={{color:radioState.style.color,
}}
className={`${style.radio}`}
></Antd.Radio>
            {/* 单选框 */}
            </div>
            {/* 容器 */}
            
            {/* 登录按钮 */}
            <Antd.Button
size={loginButtonState.size}
type={loginButtonState.type}
ghost={loginButtonState.ghost}
shape={loginButtonState.shape}
danger={loginButtonState.danger}
children={loginButtonState.children}
disabled={loginButtonState.disabled}
style={{width:loginButtonState.style.width,
height:loginButtonState.style.height,
fontSize:loginButtonState.style.fontSize,
marginTop:loginButtonState.style.marginTop,
marginBottom:loginButtonState.style.marginBottom,
borderTopLeftRadius:loginButtonState.style.borderTopLeftRadius,
borderTopRightRadius:loginButtonState.style.borderTopRightRadius,
borderBottomLeftRadius:loginButtonState.style.borderBottomLeftRadius,
borderBottomRightRadius:loginButtonState.style.borderBottomRightRadius,
}}
className={`${style.loginButton}`}
></Antd.Button>
            {/* 登录按钮 */}
            
            {/* 注册按钮 */}
            <Antd.Button
size={registrationButtonFzbtState.size}
type={registrationButtonFzbtState.type}
ghost={registrationButtonFzbtState.ghost}
shape={registrationButtonFzbtState.shape}
danger={registrationButtonFzbtState.danger}
children={registrationButtonFzbtState.children}
disabled={registrationButtonFzbtState.disabled}
style={{width:registrationButtonFzbtState.style.width,
height:registrationButtonFzbtState.style.height,
fontSize:registrationButtonFzbtState.style.fontSize,
marginTop:registrationButtonFzbtState.style.marginTop,
borderStyle:registrationButtonFzbtState.style.borderStyle,
marginBottom:registrationButtonFzbtState.style.marginBottom,
borderTopLeftRadius:registrationButtonFzbtState.style.borderTopLeftRadius,
borderTopRightRadius:registrationButtonFzbtState.style.borderTopRightRadius,
borderBottomLeftRadius:registrationButtonFzbtState.style.borderBottomLeftRadius,
borderBottomRightRadius:registrationButtonFzbtState.style.borderBottomRightRadius,
}}
className={`${style.registrationButtonFzbt}`}
></Antd.Button>
            {/* 注册按钮 */}
            </div>
            {/* 容器 */}
            </div>
            {/* 右侧容器 */}
            </div>
            {/* 最外层 */}
            </>}
export default HomePage
export { HomePage }