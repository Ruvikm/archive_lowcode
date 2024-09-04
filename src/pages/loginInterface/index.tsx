import style from './index.module.scss'
import { useState } from 'react'
import * as Antd from '@/components/antd'
import { routes } from '@/router/index'
import { getParentInfoList } from '@/utils'
import { useNavigate } from 'react-router-dom'
// 登录界面
              const LoginInterface = () => {
const [loginFormForm] = Antd.Form.useForm() 
const navigate = useNavigate()
// 获取焦点-用户单选框
          const getFocusUserSingleChoiceButton = () =>{
 // 赋值 
setuserRadioButtonTsjqState(state => {
              let copyState = JSON.parse(JSON.stringify(state))
                copyState.checked = true
return copyState 
          })
setrole(state => {
                let copyState = JSON.parse(JSON.stringify(state ?? null))
                copyState = userRadioButtonTsjqState?.value
return copyState 
          })
}
// 获取焦点-管理员单选框1
          const getFocusAdministratorRadioButton1Tafc = () =>{
 // 赋值 
setadministratorRadioButton1State(state => {
              let copyState = JSON.parse(JSON.stringify(state))
                copyState.checked = true
return copyState 
          })
setrole(state => {
                let copyState = JSON.parse(JSON.stringify(state ?? null))
                copyState = administratorRadioButton1State?.value
return copyState 
          })
}
// 获取焦点-超管单选框
          const getFocusSuperTubeRadioButtonLgmg = () =>{
 // 赋值 
setsuperTubeRadioButtonState(state => {
              let copyState = JSON.parse(JSON.stringify(state))
                copyState.checked = true
return copyState 
          })
setrole(state => {
                let copyState = JSON.parse(JSON.stringify(state ?? null))
                copyState = superTubeRadioButtonState?.value
return copyState 
          })
}
// 点击-按钮
          const clickOnTheButtonVgkl = (eventJqla,) =>{
 // 调用动作流
              let callActionFlowHumk = loginProcess()
}
// 登录流程
          const loginProcess = () =>{

              // 打印
              console.log(role = role)
// 判断
if (((role==0)  )){
                      // 超管条件
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "page").slice(1).map(item => item.path).join('/')}`)
}
else if (((role==1)  )){
                      // 管理员条件
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageMqun").slice(1).map(item => item.path).join('/')}`)
}
else {
                  // 条件判断else
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageLfxr").slice(1).map(item => item.path).join('/')}`)
}
}

      // role
      let [role,setrole] = useState(undefined)

      // userName
      let [userName,setuserName] = useState(undefined)

      // password
      let [password,setpassword] = useState(undefined)

              // 页面容器 开始属性
              const [pageContainerHqbjState, setpageContainerHqbjState] = useState({style:{width:"100vw",
height:"100vh",
display:"flex",
alignItems:"center",
flexDirection:"row",
justifyContent:"center",
backgroundColor:undefined,
backgroundImage:"url(https://s21.ax1x.com/2024/08/26/pAkCI4x.jpg)",
backgroundRepeat:"repeat-x",
},
})
              // 页面容器 结束属性
              
              // 容器 开始属性
              const [containerFcqfState, setcontainerFcqfState] = useState({style:{width:"90vw",
height:"500px",
display:"flex",
flexWrap:"nowrap",
maxWidth:undefined,
maxHeight:undefined,
alignItems:"center",
marginLeft:"nullpx",
marginRight:"nullpx",
justifyContent:"center",
backgroundColor:undefined,
backgroundImage:undefined,
},
})
              // 容器 结束属性
              
              // 登录信息 开始属性
              const [loginInformationState, setloginInformationState] = useState({style:{width:"600px",
height:"500px",
display:"flex",
maxWidth:"1200px",
boxShadow:"20px 20px 30px 10px #7e7878",
marginTop:undefined,
alignItems:"center",
marginLeft:undefined,
borderColor:"#878484",
borderStyle:"solid",
flexDirection:"column",
borderTopWidth:"0px",
justifyContent:"center",
},
})
              // 登录信息 结束属性
              
              // 输入框 开始属性
              const [inputBoxBzoiState, setinputBoxBzoiState] = useState({style:{height:undefined,
},
})
              // 输入框 结束属性
              
              // 登录表单 开始属性
              const [loginFormState, setloginFormState] = useState({size:"middle",
colon:false,
layout:"horizontal",
disabled:false,
labelWrap:false,
labelAlign:"right",
style:{width:undefined,
height:undefined,
display:"block",
alignItems:"center",
flexDirection:"column",
justifyContent:"center",
},
})
              // 登录表单 结束属性
              
              // 用户名 开始属性
              const [userNameVoboState, setuserNameVoboState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"用户名：",
copyable:false,
disabled:false,
editable:false,
ellipsis:false,
keyboard:false,
underline:false,
style:{color:"#ffffff",
display:"block",
fontSize:"20px",
marginTop:undefined,
marginLeft:undefined,
marginRight:undefined,
marginBottom:undefined,
},
})
              // 用户名 结束属性
              
              // 输入框 开始属性
              const [inputBoxState, setinputBoxState] = useState({size:"middle",
value:undefined,
prefix:undefined,
bordered:true,
disabled:false,
maxLength:20,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"请输入用户名",
defaultValue:undefined,
style:{width:"300px",
height:"50px",
fontSize:"18px",
lineHeight:"20px",
},
})
              // 输入框 结束属性
              
              // 密码 开始属性
              const [passwordState, setpasswordState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"密码：",
copyable:false,
disabled:false,
editable:false,
ellipsis:false,
keyboard:false,
underline:false,
style:{color:"#ffffff",
display:"block",
fontSize:"20px",
marginTop:undefined,
marginLeft:undefined,
marginBottom:undefined,
},
})
              // 密码 结束属性
              
              // 密码输入框 开始属性
              const [passwordInputBoxEguaState, setpasswordInputBoxEguaState] = useState({size:"middle",
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
visibilityToggle:true,
style:{width:"300px",
height:"50px",
fontSize:"18px",
lineHeight:"20px",
},
})
              // 密码输入框 结束属性
              
              // 单选框组 开始属性
              const [radioBoxGroupDvutState, setradioBoxGroupDvutState] = useState({size:"middle",
value:undefined,
disabled:false,
optionType:"default",
buttonStyle:"outline",
defaultValue:undefined,
style:{},
})
              // 单选框组 结束属性
              
              // 用户单选框 开始属性
              const [userRadioButtonTsjqState, setuserRadioButtonTsjqState] = useState({value:"2",
checked:false,
children:"用户",
disabled:false,
autoFocus:false,
defaultChecked:false,
style:{color:"#ffffff",
},
})
              // 用户单选框 结束属性
              
              // 管理员单选框1 开始属性
              const [administratorRadioButton1State, setadministratorRadioButton1State] = useState({value:"1",
checked:false,
children:"管理员",
disabled:false,
autoFocus:false,
defaultChecked:false,
style:{color:"#ffffff",
},
})
              // 管理员单选框1 结束属性
              
              // 超管单选框 开始属性
              const [superTubeRadioButtonState, setsuperTubeRadioButtonState] = useState({value:"0",
checked:false,
children:"超级管理员",
disabled:false,
autoFocus:false,
defaultChecked:false,
style:{color:"#ffffff",
},
})
              // 超管单选框 结束属性
              
              // 按钮 开始属性
              const [buttonQrohState, setbuttonQrohState] = useState({size:"middle",
type:"primary",
ghost:false,
shape:"default",
danger:false,
children:"登录",
disabled:false,
style:{width:"100px",
height:"40px",
display:"block",
fontSize:"20px",
marginTop:"20px",
alignItems:"center",
marginBottom:undefined,
flexDirection:"column",
justifyContent:"center",
},
})
              // 按钮 结束属性
              return<>
            {/* 页面容器 */}
            <div
style={{width:pageContainerHqbjState.style.width,
height:pageContainerHqbjState.style.height,
display:pageContainerHqbjState.style.display,
alignItems:pageContainerHqbjState.style.alignItems,
flexDirection:pageContainerHqbjState.style.flexDirection,
justifyContent:pageContainerHqbjState.style.justifyContent,
backgroundColor:pageContainerHqbjState.style.backgroundColor,
backgroundImage:pageContainerHqbjState.style.backgroundImage,
backgroundRepeat:pageContainerHqbjState.style.backgroundRepeat,
}}
className={`${style.pageContainerHqbj}`}
>
            {/* 容器 */}
            <div
style={{width:containerFcqfState.style.width,
height:containerFcqfState.style.height,
display:containerFcqfState.style.display,
flexWrap:containerFcqfState.style.flexWrap,
maxWidth:containerFcqfState.style.maxWidth,
maxHeight:containerFcqfState.style.maxHeight,
alignItems:containerFcqfState.style.alignItems,
marginLeft:containerFcqfState.style.marginLeft,
marginRight:containerFcqfState.style.marginRight,
justifyContent:containerFcqfState.style.justifyContent,
backgroundColor:containerFcqfState.style.backgroundColor,
backgroundImage:containerFcqfState.style.backgroundImage,
}}
className={`${style.containerFcqf}`}
>
            {/* 登录信息 */}
            <div
style={{width:loginInformationState.style.width,
height:loginInformationState.style.height,
display:loginInformationState.style.display,
maxWidth:loginInformationState.style.maxWidth,
boxShadow:loginInformationState.style.boxShadow,
marginTop:loginInformationState.style.marginTop,
alignItems:loginInformationState.style.alignItems,
marginLeft:loginInformationState.style.marginLeft,
borderColor:loginInformationState.style.borderColor,
borderStyle:loginInformationState.style.borderStyle,
flexDirection:loginInformationState.style.flexDirection,
borderTopWidth:loginInformationState.style.borderTopWidth,
justifyContent:loginInformationState.style.justifyContent,
}}
className={`${style.loginInformation}`}
>
            {/* 输入框 */}
            <div
style={{height:inputBoxBzoiState.style.height,
}}
className={`${style.inputBoxBzoi}`}
>
            {/* 登录表单 */}
            <Antd.Form
 form={loginFormForm}
size={loginFormState.size}
colon={loginFormState.colon}
layout={loginFormState.layout}
disabled={loginFormState.disabled}
labelWrap={loginFormState.labelWrap}
labelAlign={loginFormState.labelAlign}
style={{width:loginFormState.style.width,
height:loginFormState.style.height,
display:loginFormState.style.display,
alignItems:loginFormState.style.alignItems,
flexDirection:loginFormState.style.flexDirection,
justifyContent:loginFormState.style.justifyContent,
}}
className={`${style.loginForm}`}
>
            {/* 用户名 */}
            <Antd.Typography.Text
code={userNameVoboState.code}
mark={userNameVoboState.mark}
type={userNameVoboState.type}
delete={userNameVoboState.delete}
italic={userNameVoboState.italic}
strong={userNameVoboState.strong}
children={userNameVoboState.children}
copyable={userNameVoboState.copyable}
disabled={userNameVoboState.disabled}
editable={userNameVoboState.editable}
ellipsis={userNameVoboState.ellipsis}
keyboard={userNameVoboState.keyboard}
underline={userNameVoboState.underline}
style={{color:userNameVoboState.style.color,
display:userNameVoboState.style.display,
fontSize:userNameVoboState.style.fontSize,
marginTop:userNameVoboState.style.marginTop,
marginLeft:userNameVoboState.style.marginLeft,
marginRight:userNameVoboState.style.marginRight,
marginBottom:userNameVoboState.style.marginBottom,
}}
className={`${style.userNameVobo}`}
></Antd.Typography.Text>
            {/* 用户名 */}
            
            {/* 输入框 */}
            <Antd.Input
size={inputBoxState.size}
value={inputBoxState.value}
prefix={inputBoxState.prefix}
bordered={inputBoxState.bordered}
disabled={inputBoxState.disabled}
maxLength={inputBoxState.maxLength}
showCount={inputBoxState.showCount}
addonAfter={inputBoxState.addonAfter}
allowClear={inputBoxState.allowClear}
addonBefore={inputBoxState.addonBefore}
placeholder={inputBoxState.placeholder}
defaultValue={inputBoxState.defaultValue}
style={{width:inputBoxState.style.width,
height:inputBoxState.style.height,
fontSize:inputBoxState.style.fontSize,
lineHeight:inputBoxState.style.lineHeight,
}}
className={`${style.inputBox}`}
></Antd.Input>
            {/* 输入框 */}
            
            {/* 密码 */}
            <Antd.Typography.Text
code={passwordState.code}
mark={passwordState.mark}
type={passwordState.type}
delete={passwordState.delete}
italic={passwordState.italic}
strong={passwordState.strong}
children={passwordState.children}
copyable={passwordState.copyable}
disabled={passwordState.disabled}
editable={passwordState.editable}
ellipsis={passwordState.ellipsis}
keyboard={passwordState.keyboard}
underline={passwordState.underline}
style={{color:passwordState.style.color,
display:passwordState.style.display,
fontSize:passwordState.style.fontSize,
marginTop:passwordState.style.marginTop,
marginLeft:passwordState.style.marginLeft,
marginBottom:passwordState.style.marginBottom,
}}
className={`${style.password}`}
></Antd.Typography.Text>
            {/* 密码 */}
            
            {/* 密码输入框 */}
            <Antd.Input.Password
size={passwordInputBoxEguaState.size}
value={passwordInputBoxEguaState.value}
prefix={passwordInputBoxEguaState.prefix}
bordered={passwordInputBoxEguaState.bordered}
maxLength={passwordInputBoxEguaState.maxLength}
showCount={passwordInputBoxEguaState.showCount}
addonAfter={passwordInputBoxEguaState.addonAfter}
allowClear={passwordInputBoxEguaState.allowClear}
addonBefore={passwordInputBoxEguaState.addonBefore}
placeholder={passwordInputBoxEguaState.placeholder}
defaultValue={passwordInputBoxEguaState.defaultValue}
visibilityToggle={passwordInputBoxEguaState.visibilityToggle}
style={{width:passwordInputBoxEguaState.style.width,
height:passwordInputBoxEguaState.style.height,
fontSize:passwordInputBoxEguaState.style.fontSize,
lineHeight:passwordInputBoxEguaState.style.lineHeight,
}}
className={`${style.passwordInputBoxEgua}`}
></Antd.Input.Password>
            {/* 密码输入框 */}
            </Antd.Form>
            {/* 登录表单 */}
            
            {/* 单选框组 */}
            <Antd.Radio.Group
size={radioBoxGroupDvutState.size}
value={role}
disabled={radioBoxGroupDvutState.disabled}
optionType={radioBoxGroupDvutState.optionType}
buttonStyle={radioBoxGroupDvutState.buttonStyle}
defaultValue={radioBoxGroupDvutState.defaultValue}
style={{}}
className={`${style.radioBoxGroupDvut}`}
>
            {/* 用户单选框 */}
            <Antd.Radio
value={userRadioButtonTsjqState.value}
checked={userRadioButtonTsjqState.checked}
children={userRadioButtonTsjqState.children}
disabled={userRadioButtonTsjqState.disabled}
autoFocus={userRadioButtonTsjqState.autoFocus}
defaultChecked={userRadioButtonTsjqState.defaultChecked}
style={{color:userRadioButtonTsjqState.style.color,
}}
className={`${style.userRadioButtonTsjq}`}
onFocus={() =>getFocusUserSingleChoiceButton()}></Antd.Radio>
            {/* 用户单选框 */}
            
            {/* 管理员单选框1 */}
            <Antd.Radio
value={administratorRadioButton1State.value}
checked={administratorRadioButton1State.checked}
children={administratorRadioButton1State.children}
disabled={administratorRadioButton1State.disabled}
autoFocus={administratorRadioButton1State.autoFocus}
defaultChecked={administratorRadioButton1State.defaultChecked}
style={{color:administratorRadioButton1State.style.color,
}}
className={`${style.administratorRadioButton1}`}
onFocus={() =>getFocusAdministratorRadioButton1Tafc()}></Antd.Radio>
            {/* 管理员单选框1 */}
            
            {/* 超管单选框 */}
            <Antd.Radio
value={superTubeRadioButtonState.value}
checked={superTubeRadioButtonState.checked}
children={superTubeRadioButtonState.children}
disabled={superTubeRadioButtonState.disabled}
autoFocus={superTubeRadioButtonState.autoFocus}
defaultChecked={superTubeRadioButtonState.defaultChecked}
style={{color:superTubeRadioButtonState.style.color,
}}
className={`${style.superTubeRadioButton}`}
onFocus={() =>getFocusSuperTubeRadioButtonLgmg()}></Antd.Radio>
            {/* 超管单选框 */}
            </Antd.Radio.Group>
            {/* 单选框组 */}
            
            {/* 按钮 */}
            <Antd.Button
size={buttonQrohState.size}
type={buttonQrohState.type}
ghost={buttonQrohState.ghost}
shape={buttonQrohState.shape}
danger={buttonQrohState.danger}
children={buttonQrohState.children}
disabled={buttonQrohState.disabled}
style={{width:buttonQrohState.style.width,
height:buttonQrohState.style.height,
display:buttonQrohState.style.display,
fontSize:buttonQrohState.style.fontSize,
marginTop:buttonQrohState.style.marginTop,
alignItems:buttonQrohState.style.alignItems,
marginBottom:buttonQrohState.style.marginBottom,
flexDirection:buttonQrohState.style.flexDirection,
justifyContent:buttonQrohState.style.justifyContent,
}}
className={`${style.buttonQroh}`}
onClick={(eventJqla,) =>clickOnTheButtonVgkl(eventJqla,)}></Antd.Button>
            {/* 按钮 */}
            </div>
            {/* 输入框 */}
            </div>
            {/* 登录信息 */}
            </div>
            {/* 容器 */}
            </div>
            {/* 页面容器 */}
            </>}
export default LoginInterface
export { LoginInterface }