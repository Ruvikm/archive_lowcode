import style from './index.module.scss'
import { useState } from 'react'
import * as Antd from '@/components/antd'
import { addAdministratorEzow } from '@/api/api-interface'
import { routes } from '@/router/index'
import { getParentInfoList } from '@/utils'
import { useNavigate } from 'react-router-dom'
// 添加管理员
              const AddAdministratorObhg = () => {
const [formXggkForm] = Antd.Form.useForm() 
const navigate = useNavigate()
// 点击-按钮
          const clickOnTheButton = async(event,) =>{

              // 调用接口 获取新增管理员数据
              let callInterfaceMnde = await addAdministratorEzow<unknown>({

              headerParams: {"token":'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjb20uaW11LmxpIiwidXNlcklEIjoxMjM0NTY3ODk5LCJuYW1lIjoiYWRtaW4iLCJ1c2VySWRlbnRpdHkiOjAsImlhdCI6MTcyNDgzMTMzMiwiZXhwIjoxNzI0ODM0OTMyfQ.uHwFI4xMQs_TQ_6FOzxGMQU7cb8c4q9l-ibSZlPdOC4',
},
restParams: {},
queryParams: {"account":12423525,
"userName":'gdfgdfgdfgs',
"password":'fgfdfgsd',
},
bodyParams:undefined
})
}
// 点击-按钮1
          const clickButton1 = (eventSfgr,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "defaultPageFhue").slice(1).map(item => item.path).join('/')}`)
}

              // 页面容器 开始属性
              const [pageContainerState, setpageContainerState] = useState({style:{width:"100vw",
height:"100vh",
display:"flex",
alignItems:"center",
whiteSpace:"normal",
justifyContent:"center",
backgroundColor:undefined,
backgroundImage:"url(https://s21.ax1x.com/2024/08/23/pAFVcAH.jpg)",
backgroundRepeat:"repeat",
},
})
              // 页面容器 结束属性
              
              // 内容容器 开始属性
              const [contentContainerState, setcontentContainerState] = useState({style:{display:"flex",
maxWidth:"1200px",
maxHeight:undefined,
alignItems:"center",
justifyContent:"space-between",
},
})
              // 内容容器 结束属性
              
              // 输入容器 开始属性
              const [inputContainerState, setinputContainerState] = useState({style:{width:undefined,
display:"flex",
alignItems:"center",
marginLeft:"auto",
marginRight:"auto",
flexDirection:"column",
justifyContent:"center",
},
})
              // 输入容器 结束属性
              
              // 标题 开始属性
              const [titleState, settitleState] = useState({style:{display:"flex",
justifyContent:"center",
},
})
              // 标题 结束属性
              
              // 标题 开始属性
              const [title1121State, settitle1121State] = useState({code:false,
mark:false,
type:undefined,
level:2,
delete:false,
italic:false,
children:"请为管理员分配账号",
copyable:false,
disabled:false,
editable:false,
ellipsis:false,
underline:false,
style:{color:"#ffffff",
},
})
              // 标题 结束属性
              
              // 输入框 开始属性
              const [inputBoxState, setinputBoxState] = useState({style:{},
})
              // 输入框 结束属性
              
              // 表单 开始属性
              const [formXggkState, setformXggkState] = useState({size:"middle",
colon:true,
layout:"horizontal",
disabled:false,
labelWrap:false,
labelAlign:"right",
style:{},
})
              // 表单 结束属性
              
              // 文本1 开始属性
              const [textYhmxState, settextYhmxState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"用户名",
copyable:false,
disabled:false,
editable:false,
ellipsis:false,
keyboard:false,
underline:false,
style:{color:"#ffffff",
},
})
              // 文本1 结束属性
              
              // 输入框 开始属性
              const [inputBoxTiwxState, setinputBoxTiwxState] = useState({size:"middle",
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"请输入",
defaultValue:undefined,
style:{},
})
              // 输入框 结束属性
              
              // 文本2 开始属性
              const [textKebfState, settextKebfState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"密码",
copyable:false,
disabled:false,
editable:false,
ellipsis:false,
keyboard:false,
underline:false,
style:{color:"#ffffff",
},
})
              // 文本2 结束属性
              
              // 密码输入框 开始属性
              const [passwordInputBoxQntmState, setpasswordInputBoxQntmState] = useState({size:"middle",
value:undefined,
prefix:undefined,
bordered:true,
maxLength:20,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"请输入",
defaultValue:undefined,
visibilityToggle:true,
style:{},
})
              // 密码输入框 结束属性
              
              // 按钮 开始属性
              const [buttonApfhState, setbuttonApfhState] = useState({style:{width:"200px",
display:"flex",
maxWidth:undefined,
marginTop:"30px",
justifyContent:"space-between",
},
})
              // 按钮 结束属性
              
              // 按钮 开始属性
              const [buttonSxolState, setbuttonSxolState] = useState({size:"middle",
type:"primary",
ghost:false,
shape:"default",
danger:false,
children:"注册",
disabled:false,
style:{},
})
              // 按钮 结束属性
              
              // 按钮1 开始属性
              const [buttonXwflState, setbuttonXwflState] = useState({size:"middle",
type:"primary",
ghost:false,
shape:"default",
danger:false,
children:"返回",
disabled:false,
style:{},
})
              // 按钮1 结束属性
              
              // 文字提示 开始属性
              const [textPromptsState, settextPromptsState] = useState({style:{width:undefined,
height:undefined,
display:"flex",
marginLeft:"90px",
marginRight:"auto",
flexDirection:"column",
justifyContent:"center",
},
})
              // 文字提示 结束属性
              
              // 账号要求： 开始属性
              const [requestState, setrequestState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:true,
children:"账号要求：",
copyable:false,
disabled:false,
editable:false,
ellipsis:false,
keyboard:false,
underline:false,
style:{color:"#ffffff",
fontSize:"20px",
},
})
              // 账号要求： 结束属性
              
              // 文本 开始属性
              const [textQztbState, settextQztbState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"用户名：中文名（可以中文后面加数字）",
copyable:false,
disabled:false,
editable:false,
ellipsis:false,
keyboard:false,
underline:false,
style:{color:"#ffffff",
fontSize:"18px",
},
})
              // 文本 结束属性
              
              // 文本2 开始属性
              const [textTrbyState, settextTrbyState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"密码：字母+数字",
copyable:false,
disabled:false,
editable:false,
ellipsis:false,
keyboard:false,
underline:false,
style:{color:"#ffffff",
fontSize:"18px",
},
})
              // 文本2 结束属性
              
              // 文本3 开始属性
              const [textGxcbsdfdaState, settextGxcbsdfdaState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:true,
children:"例如：",
copyable:false,
disabled:false,
editable:false,
ellipsis:false,
keyboard:false,
underline:false,
style:{color:"#ffffff",
fontSize:"18px",
},
})
              // 文本3 结束属性
              
              // 文本1 开始属性
              const [textTgjkState, settextTgjkState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"用户名：使用说明1，密码：123321",
copyable:false,
disabled:false,
editable:false,
ellipsis:false,
keyboard:false,
underline:false,
style:{color:"#ffffff",
fontSize:"18px",
},
})
              // 文本1 结束属性
              return<>
            {/* 页面容器 */}
            <div
style={{width:pageContainerState.style.width,
height:pageContainerState.style.height,
display:pageContainerState.style.display,
alignItems:pageContainerState.style.alignItems,
whiteSpace:pageContainerState.style.whiteSpace,
justifyContent:pageContainerState.style.justifyContent,
backgroundColor:pageContainerState.style.backgroundColor,
backgroundImage:pageContainerState.style.backgroundImage,
backgroundRepeat:pageContainerState.style.backgroundRepeat,
}}
className={`${style.pageContainer}`}
>
            {/* 内容容器 */}
            <div
style={{display:contentContainerState.style.display,
maxWidth:contentContainerState.style.maxWidth,
maxHeight:contentContainerState.style.maxHeight,
alignItems:contentContainerState.style.alignItems,
justifyContent:contentContainerState.style.justifyContent,
}}
className={`${style.contentContainer}`}
>
            {/* 输入容器 */}
            <div
style={{width:inputContainerState.style.width,
display:inputContainerState.style.display,
alignItems:inputContainerState.style.alignItems,
marginLeft:inputContainerState.style.marginLeft,
marginRight:inputContainerState.style.marginRight,
flexDirection:inputContainerState.style.flexDirection,
justifyContent:inputContainerState.style.justifyContent,
}}
className={`${style.inputContainer}`}
>
            {/* 标题 */}
            <div
style={{display:titleState.style.display,
justifyContent:titleState.style.justifyContent,
}}
className={`${style.title}`}
>
            {/* 标题 */}
            <Antd.Typography.Title
code={title1121State.code}
mark={title1121State.mark}
type={title1121State.type}
level={title1121State.level}
delete={title1121State.delete}
italic={title1121State.italic}
children={title1121State.children}
copyable={title1121State.copyable}
disabled={title1121State.disabled}
editable={title1121State.editable}
ellipsis={title1121State.ellipsis}
underline={title1121State.underline}
style={{color:title1121State.style.color,
}}
className={`${style.title1121}`}
></Antd.Typography.Title>
            {/* 标题 */}
            </div>
            {/* 标题 */}
            
            {/* 输入框 */}
            <div
style={{}}
className={`${style.inputBox}`}
>
            {/* 表单 */}
            <Antd.Form
 form={formXggkForm}
size={formXggkState.size}
colon={formXggkState.colon}
layout={formXggkState.layout}
disabled={formXggkState.disabled}
labelWrap={formXggkState.labelWrap}
labelAlign={formXggkState.labelAlign}
style={{}}
className={`${style.formXggk}`}
>
            {/* 文本1 */}
            <Antd.Typography.Text
code={textYhmxState.code}
mark={textYhmxState.mark}
type={textYhmxState.type}
delete={textYhmxState.delete}
italic={textYhmxState.italic}
strong={textYhmxState.strong}
children={textYhmxState.children}
copyable={textYhmxState.copyable}
disabled={textYhmxState.disabled}
editable={textYhmxState.editable}
ellipsis={textYhmxState.ellipsis}
keyboard={textYhmxState.keyboard}
underline={textYhmxState.underline}
style={{color:textYhmxState.style.color,
}}
className={`${style.textYhmx}`}
></Antd.Typography.Text>
            {/* 文本1 */}
            
            {/* 输入框 */}
            <Antd.Input
size={inputBoxTiwxState.size}
prefix={inputBoxTiwxState.prefix}
bordered={inputBoxTiwxState.bordered}
disabled={inputBoxTiwxState.disabled}
maxLength={inputBoxTiwxState.maxLength}
showCount={inputBoxTiwxState.showCount}
addonAfter={inputBoxTiwxState.addonAfter}
allowClear={inputBoxTiwxState.allowClear}
addonBefore={inputBoxTiwxState.addonBefore}
placeholder={inputBoxTiwxState.placeholder}
defaultValue={inputBoxTiwxState.defaultValue}
style={{}}
className={`${style.inputBoxTiwx}`}
></Antd.Input>
            {/* 输入框 */}
            
            {/* 文本2 */}
            <Antd.Typography.Text
code={textKebfState.code}
mark={textKebfState.mark}
type={textKebfState.type}
delete={textKebfState.delete}
italic={textKebfState.italic}
strong={textKebfState.strong}
children={textKebfState.children}
copyable={textKebfState.copyable}
disabled={textKebfState.disabled}
editable={textKebfState.editable}
ellipsis={textKebfState.ellipsis}
keyboard={textKebfState.keyboard}
underline={textKebfState.underline}
style={{color:textKebfState.style.color,
}}
className={`${style.textKebf}`}
></Antd.Typography.Text>
            {/* 文本2 */}
            
            {/* 密码输入框 */}
            <Antd.Input.Password
size={passwordInputBoxQntmState.size}
value={passwordInputBoxQntmState.value}
prefix={passwordInputBoxQntmState.prefix}
bordered={passwordInputBoxQntmState.bordered}
maxLength={passwordInputBoxQntmState.maxLength}
showCount={passwordInputBoxQntmState.showCount}
addonAfter={passwordInputBoxQntmState.addonAfter}
allowClear={passwordInputBoxQntmState.allowClear}
addonBefore={passwordInputBoxQntmState.addonBefore}
placeholder={passwordInputBoxQntmState.placeholder}
defaultValue={passwordInputBoxQntmState.defaultValue}
visibilityToggle={passwordInputBoxQntmState.visibilityToggle}
style={{}}
className={`${style.passwordInputBoxQntm}`}
></Antd.Input.Password>
            {/* 密码输入框 */}
            </Antd.Form>
            {/* 表单 */}
            </div>
            {/* 输入框 */}
            
            {/* 按钮 */}
            <div
style={{width:buttonApfhState.style.width,
display:buttonApfhState.style.display,
maxWidth:buttonApfhState.style.maxWidth,
marginTop:buttonApfhState.style.marginTop,
justifyContent:buttonApfhState.style.justifyContent,
}}
className={`${style.buttonApfh}`}
>
            {/* 按钮 */}
            <Antd.Button
size={buttonSxolState.size}
type={buttonSxolState.type}
ghost={buttonSxolState.ghost}
shape={buttonSxolState.shape}
danger={buttonSxolState.danger}
children={buttonSxolState.children}
disabled={buttonSxolState.disabled}
style={{}}
className={`${style.buttonSxol}`}
onClick={(event,) =>clickOnTheButton(event,)}></Antd.Button>
            {/* 按钮 */}
            
            {/* 按钮1 */}
            <Antd.Button
size={buttonXwflState.size}
type={buttonXwflState.type}
ghost={buttonXwflState.ghost}
shape={buttonXwflState.shape}
danger={buttonXwflState.danger}
children={buttonXwflState.children}
disabled={buttonXwflState.disabled}
style={{}}
className={`${style.buttonXwfl}`}
onClick={(eventSfgr,) =>clickButton1(eventSfgr,)}></Antd.Button>
            {/* 按钮1 */}
            </div>
            {/* 按钮 */}
            </div>
            {/* 输入容器 */}
            
            {/* 文字提示 */}
            <div
style={{width:textPromptsState.style.width,
height:textPromptsState.style.height,
display:textPromptsState.style.display,
marginLeft:textPromptsState.style.marginLeft,
marginRight:textPromptsState.style.marginRight,
flexDirection:textPromptsState.style.flexDirection,
justifyContent:textPromptsState.style.justifyContent,
}}
className={`${style.textPrompts}`}
>
            {/* 账号要求： */}
            <Antd.Typography.Text
code={requestState.code}
mark={requestState.mark}
type={requestState.type}
delete={requestState.delete}
italic={requestState.italic}
strong={requestState.strong}
children={requestState.children}
copyable={requestState.copyable}
disabled={requestState.disabled}
editable={requestState.editable}
ellipsis={requestState.ellipsis}
keyboard={requestState.keyboard}
underline={requestState.underline}
style={{color:requestState.style.color,
fontSize:requestState.style.fontSize,
}}
className={`${style.request}`}
></Antd.Typography.Text>
            {/* 账号要求： */}
            
            {/* 文本 */}
            <Antd.Typography.Text
code={textQztbState.code}
mark={textQztbState.mark}
type={textQztbState.type}
delete={textQztbState.delete}
italic={textQztbState.italic}
strong={textQztbState.strong}
children={textQztbState.children}
copyable={textQztbState.copyable}
disabled={textQztbState.disabled}
editable={textQztbState.editable}
ellipsis={textQztbState.ellipsis}
keyboard={textQztbState.keyboard}
underline={textQztbState.underline}
style={{color:textQztbState.style.color,
fontSize:textQztbState.style.fontSize,
}}
className={`${style.textQztb}`}
></Antd.Typography.Text>
            {/* 文本 */}
            
            {/* 文本2 */}
            <Antd.Typography.Text
code={textTrbyState.code}
mark={textTrbyState.mark}
type={textTrbyState.type}
delete={textTrbyState.delete}
italic={textTrbyState.italic}
strong={textTrbyState.strong}
children={textTrbyState.children}
copyable={textTrbyState.copyable}
disabled={textTrbyState.disabled}
editable={textTrbyState.editable}
ellipsis={textTrbyState.ellipsis}
keyboard={textTrbyState.keyboard}
underline={textTrbyState.underline}
style={{color:textTrbyState.style.color,
fontSize:textTrbyState.style.fontSize,
}}
className={`${style.textTrby}`}
></Antd.Typography.Text>
            {/* 文本2 */}
            
            {/* 文本3 */}
            <Antd.Typography.Text
code={textGxcbsdfdaState.code}
mark={textGxcbsdfdaState.mark}
type={textGxcbsdfdaState.type}
delete={textGxcbsdfdaState.delete}
italic={textGxcbsdfdaState.italic}
strong={textGxcbsdfdaState.strong}
children={textGxcbsdfdaState.children}
copyable={textGxcbsdfdaState.copyable}
disabled={textGxcbsdfdaState.disabled}
editable={textGxcbsdfdaState.editable}
ellipsis={textGxcbsdfdaState.ellipsis}
keyboard={textGxcbsdfdaState.keyboard}
underline={textGxcbsdfdaState.underline}
style={{color:textGxcbsdfdaState.style.color,
fontSize:textGxcbsdfdaState.style.fontSize,
}}
className={`${style.textGxcbsdfda}`}
></Antd.Typography.Text>
            {/* 文本3 */}
            
            {/* 文本1 */}
            <Antd.Typography.Text
code={textTgjkState.code}
mark={textTgjkState.mark}
type={textTgjkState.type}
delete={textTgjkState.delete}
italic={textTgjkState.italic}
strong={textTgjkState.strong}
children={textTgjkState.children}
copyable={textTgjkState.copyable}
disabled={textTgjkState.disabled}
editable={textTgjkState.editable}
ellipsis={textTgjkState.ellipsis}
keyboard={textTgjkState.keyboard}
underline={textTgjkState.underline}
style={{color:textTgjkState.style.color,
fontSize:textTgjkState.style.fontSize,
}}
className={`${style.textTgjk}`}
></Antd.Typography.Text>
            {/* 文本1 */}
            </div>
            {/* 文字提示 */}
            </div>
            {/* 内容容器 */}
            </div>
            {/* 页面容器 */}
            </>}
export default AddAdministratorObhg
export { AddAdministratorObhg }