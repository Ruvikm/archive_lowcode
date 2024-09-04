import style from './index.module.scss'
import { useState } from 'react'
import * as Antd from '@/components/antd'
import { routes } from '@/router/index'
import { getParentInfoList } from '@/utils'
import { useNavigate } from 'react-router-dom'
// 用户日志输入
              const UserLogInputLkqh = () => {
const navigate = useNavigate()
// 点击时- 日志录入
          const whenClickedLogEntryHjwi = (eventZykg,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pagePpnk").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-我的日志
          const whenClickedMyLogZgim = (eventFoic,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageQgpx").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-退出
          const whenClickedExitEotz = (eventRbyx,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "defaultPageFhue").slice(1).map(item => item.path).join('/')}`)
}
// 点击-预览
          const clickPreview = (eventXdxn,) =>{
 // 赋值 
setlogPreviewDialogueBoxState(state => {
              let copyState = JSON.parse(JSON.stringify(state))
                copyState.open = true
return copyState 
          })
}
// 点击确定-日志预览对话框
          const clickOkLogPreviewDialogBox = () =>{
 // 赋值 
setlogPreviewDialogueBoxState(state => {
              let copyState = JSON.parse(JSON.stringify(state))
                copyState.open = false
return copyState 
          })
}
// 点击遮罩层或右上角叉或取消按钮-日志预览对话框
          const clickOnTheMaskLayerOrTheTopRightCrossOrCancelButtonLogPreviewDialogBoxGcax = () =>{
 // 赋值 
setlogPreviewDialogueBoxState(state => {
              let copyState = JSON.parse(JSON.stringify(state))
                copyState.open = false
return copyState 
          })
}

      // preview_flag
      let [previewFlag,setpreviewFlag] = useState(undefined)

              // 页面容器 开始属性
              const [pageContainerState, setpageContainerState] = useState({style:{width:"100vw",
height:"100vh",
display:"flex",
},
})
              // 页面容器 结束属性
              
              // 导航菜单 开始属性
              const [navigationMenuWzgsState, setnavigationMenuWzgsState] = useState({mode:"vertical",
expandIcon:undefined,
style:{width:"14%",
height:"100vh",
backgroundColor:"#336395",
},
})
              // 导航菜单 结束属性
              
              // 容器 开始属性
              const [containerBacpState, setcontainerBacpState] = useState({style:{width:undefined,
height:"9%",
display:"flex",
flexWrap:"nowrap",
alignItems:"center",
paddingTop:"20px",
borderColor:"#4e89c2",
borderStyle:"ridge",
flexDirection:"row",
justifyContent:"flex-start",
borderBottomWidth:"5px",
},
})
              // 容器 结束属性
              
              // 图片 开始属性
              const [pictureAtuoState, setpictureAtuoState] = useState({alt:undefined,
src:"https://img.shanhuyun.cn/customer_resource/122f439670434c81971d13ddf08b899f.png",
width:100,
height:100,
preview:false,
fallback:"https://img.xl-ai.com/shanhuyun/others/%E5%8A%A0%E8%BD%BD%E5%A4%B1%E8%B4%A5.jpeg",
placeholder:undefined,
style:{width:"50px",
height:"50px",
marginTop:"20px",
marginLeft:"20px",
},
})
              // 图片 结束属性
              
              // 管理员首页 开始属性
              const [administratorHomepageHxfvState, setadministratorHomepageHxfvState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"用户首页",
copyable:false,
disabled:false,
editable:false,
ellipsis:false,
keyboard:false,
underline:false,
style:{color:"#f0f8ff",
fontSize:"20px",
fontWeight:600,
marginLeft:"-20px",
paddingLeft:"10px",
paddingRight:"10px",
},
})
              // 管理员首页 结束属性
              
              //  日志录入 开始属性
              const [logEntryState, setlogEntryState] = useState({key:undefined,
icon:undefined,
danger:false,
children:" 日志录入",
disabled:false,
style:{color:"#f0f8ff",
},
})
              //  日志录入 结束属性
              
              // 我的日志 开始属性
              const [myLogState, setmyLogState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"我的日志",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 我的日志 结束属性
              
              // 退出 开始属性
              const [quitJbasState, setquitJbasState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"退出",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 退出 结束属性
              
              // 子页面 开始属性
              const [subpageState, setsubpageState] = useState({style:{width:"86%",
display:"flex",
flexDirection:"column",
},
})
              // 子页面 结束属性
              
              // 标题容器 开始属性
              const [titleContainerState, settitleContainerState] = useState({style:{width:"100%",
height:"9%",
display:"flex",
alignItems:"center",
justifyContent:"center",
backgroundColor:"#336395",
},
})
              // 标题容器 结束属性
              
              // 重  特  大  事  件  日  志  电  子  档  案  的  自  动  形  成  及  其  智  能  归  档  系  统 开始属性
              const [automaticFormationAndIntelligentArchivingSystemForElectronicArchivesOfMajorEventLogsState, setautomaticFormationAndIntelligentArchivingSystemForElectronicArchivesOfMajorEventLogsState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"重  特  大  事  件  日  志  电  子  档  案  的  自  动  形  成  及  其  智  能  归  档  系  统",
copyable:false,
disabled:false,
editable:false,
ellipsis:false,
keyboard:false,
underline:false,
style:{color:"#f0f8ff",
fontSize:"16px",
fontWeight:600,
},
})
              // 重  特  大  事  件  日  志  电  子  档  案  的  自  动  形  成  及  其  智  能  归  档  系  统 结束属性
              
              // 子页面标题容器 开始属性
              const [subpageTitleContainerState, setsubpageTitleContainerState] = useState({style:{display:"flex",
marginTop:"10px",
alignItems:"center",
marginBottom:"10px",
justifyContent:"center",
},
})
              // 子页面标题容器 结束属性
              
              // 日志输入 开始属性
              const [logInputRalpState, setlogInputRalpState] = useState({code:false,
mark:false,
type:"secondary",
delete:false,
italic:false,
strong:true,
children:"日志输入，请按照下列的规则编写日志",
copyable:false,
disabled:false,
editable:false,
ellipsis:false,
keyboard:false,
underline:false,
style:{color:"#212121",
fontSize:"15px",
textAlign:"left",
fontWeight:500,
},
})
              // 日志输入 结束属性
              
              // 子页面容器 开始属性
              const [subpageContainerState, setsubpageContainerState] = useState({style:{width:"100%",
height:"100%",
},
})
              // 子页面容器 结束属性
              
              // 字页面输入框容器 开始属性
              const [wordPageInputBoxContainerState, setwordPageInputBoxContainerState] = useState({style:{width:undefined,
height:"40%",
},
})
              // 字页面输入框容器 结束属性
              
              // 多行输入框 开始属性
              const [multilineInputBoxPhbbState, setmultilineInputBoxPhbbState] = useState({value:undefined,
autoSize:false,
bordered:true,
disabled:false,
maxLength:500,
showCount:false,
allowClear:false,
placeholder:"上午我XXXX，下午我XXXX，晚上我XXXX。例如： 上午我在看论文，下午我在写论文，晚上我在跑实验。",
defaultValue:undefined,
style:{height:"100%",
},
})
              // 多行输入框 结束属性
              
              // 按钮容器 开始属性
              const [buttonContainerState, setbuttonContainerState] = useState({style:{display:"flex",
alignItems:"center",
justifyContent:"center",
},
})
              // 按钮容器 结束属性
              
              // 提交 开始属性
              const [submitState, setsubmitState] = useState({size:"middle",
type:"primary",
ghost:false,
shape:"default",
danger:false,
children:"提交",
disabled:false,
htmlType:"submit",
style:{},
})
              // 提交 结束属性
              
              // 预览 开始属性
              const [previewState, setpreviewState] = useState({size:"middle",
type:"primary",
ghost:false,
shape:"default",
danger:false,
children:"预览",
disabled:false,
htmlType:"button",
style:{marginLeft:"40px",
},
})
              // 预览 结束属性
              
              // 上传 开始属性
              const [uploadCmzwState, setuploadCmzwState] = useState({accept:undefined,
action:undefined,
disabled:false,
listType:"picture",
maxCount:1,
multiple:false,
directory:false,
iconRender:"https://s21.ax1x.com/2024/08/27/pAkWZ0s.png",
showUploadList:true,
defaultFieldHzhg:".jpg",
openFileDialogOnClick:true,
style:{width:undefined,
height:undefined,
},
})
              // 上传 结束属性
              
              // 上传图片 开始属性
              const [uploadImageState, setuploadImageState] = useState({size:"middle",
type:"primary",
ghost:false,
shape:"default",
danger:false,
children:"上传",
disabled:false,
style:{marginLeft:"40px",
},
})
              // 上传图片 结束属性
              
              // 日志预览对话框 开始属性
              const [logPreviewDialogueBoxState, setlogPreviewDialogueBoxState] = useState({mask:true,
open:false,
title:"日志预览",
footer:undefined,
content:undefined,
centered:true,
keyboard:true,
cancelText:undefined,
maskClosable:false,
style:{marginTop:undefined,
marginBottom:undefined,
},
})
              // 日志预览对话框 结束属性
              
              // 预览图片容器 开始属性
              const [previewImageContainerState, setpreviewImageContainerState] = useState({style:{width:undefined,
height:"70vh",
display:"flex",
justifyContent:"center",
},
})
              // 预览图片容器 结束属性
              
              // 图片组件 开始属性
              const [imageComponentMplxState, setimageComponentMplxState] = useState({alt:undefined,
src:"https://s21.ax1x.com/2024/08/27/pAkfpDJ.png",
placeholder:"日志预览图片加载中...",
style:{width:"70%",
height:"100%",
},
})
              // 图片组件 结束属性
              return<>
            {/* 页面容器 */}
            <div
style={{width:pageContainerState.style.width,
height:pageContainerState.style.height,
display:pageContainerState.style.display,
}}
className={`${style.pageContainer}`}
>
            {/* 导航菜单 */}
            <Antd.Menu
mode={navigationMenuWzgsState.mode}
expandIcon={navigationMenuWzgsState.expandIcon}
style={{width:navigationMenuWzgsState.style.width,
height:navigationMenuWzgsState.style.height,
backgroundColor:navigationMenuWzgsState.style.backgroundColor,
}}
className={`${style.navigationMenuWzgs}`}
>
            {/* 容器 */}
            <div
style={{width:containerBacpState.style.width,
height:containerBacpState.style.height,
display:containerBacpState.style.display,
flexWrap:containerBacpState.style.flexWrap,
alignItems:containerBacpState.style.alignItems,
paddingTop:containerBacpState.style.paddingTop,
borderColor:containerBacpState.style.borderColor,
borderStyle:containerBacpState.style.borderStyle,
flexDirection:containerBacpState.style.flexDirection,
justifyContent:containerBacpState.style.justifyContent,
borderBottomWidth:containerBacpState.style.borderBottomWidth,
}}
className={`${style.containerBacp}`}
>
            {/* 图片 */}
            <Antd.Image
alt={pictureAtuoState.alt}
src={pictureAtuoState.src}
width={pictureAtuoState.width}
height={pictureAtuoState.height}
preview={pictureAtuoState.preview}
fallback={pictureAtuoState.fallback}
placeholder={pictureAtuoState.placeholder}
style={{width:pictureAtuoState.style.width,
height:pictureAtuoState.style.height,
marginTop:pictureAtuoState.style.marginTop,
marginLeft:pictureAtuoState.style.marginLeft,
}}
className={`${style.pictureAtuo}`}
></Antd.Image>
            {/* 图片 */}
            
            {/* 管理员首页 */}
            <Antd.Typography.Text
code={administratorHomepageHxfvState.code}
mark={administratorHomepageHxfvState.mark}
type={administratorHomepageHxfvState.type}
delete={administratorHomepageHxfvState.delete}
italic={administratorHomepageHxfvState.italic}
strong={administratorHomepageHxfvState.strong}
children={administratorHomepageHxfvState.children}
copyable={administratorHomepageHxfvState.copyable}
disabled={administratorHomepageHxfvState.disabled}
editable={administratorHomepageHxfvState.editable}
ellipsis={administratorHomepageHxfvState.ellipsis}
keyboard={administratorHomepageHxfvState.keyboard}
underline={administratorHomepageHxfvState.underline}
style={{color:administratorHomepageHxfvState.style.color,
fontSize:administratorHomepageHxfvState.style.fontSize,
fontWeight:administratorHomepageHxfvState.style.fontWeight,
marginLeft:administratorHomepageHxfvState.style.marginLeft,
paddingLeft:administratorHomepageHxfvState.style.paddingLeft,
paddingRight:administratorHomepageHxfvState.style.paddingRight,
}}
className={`${style.administratorHomepageHxfv}`}
></Antd.Typography.Text>
            {/* 管理员首页 */}
            </div>
            {/* 容器 */}
            
            {/*  日志录入 */}
            <Antd.Menu.Item
key={logEntryState.key}
icon={logEntryState.icon}
danger={logEntryState.danger}
children={logEntryState.children}
disabled={logEntryState.disabled}
style={{color:logEntryState.style.color,
}}
className={`${style.logEntry}`}
onClick={(eventZykg,) =>whenClickedLogEntryHjwi(eventZykg,)}></Antd.Menu.Item>
            {/*  日志录入 */}
            
            {/* 我的日志 */}
            <Antd.Menu.Item
key={myLogState.key}
icon={myLogState.icon}
danger={myLogState.danger}
children={myLogState.children}
disabled={myLogState.disabled}
style={{color:myLogState.style.color,
}}
className={`${style.myLog}`}
onClick={(eventFoic,) =>whenClickedMyLogZgim(eventFoic,)}></Antd.Menu.Item>
            {/* 我的日志 */}
            
            {/* 退出 */}
            <Antd.Menu.Item
key={quitJbasState.key}
icon={quitJbasState.icon}
danger={quitJbasState.danger}
children={quitJbasState.children}
disabled={quitJbasState.disabled}
style={{color:quitJbasState.style.color,
}}
className={`${style.quitJbas}`}
onClick={(eventRbyx,) =>whenClickedExitEotz(eventRbyx,)}></Antd.Menu.Item>
            {/* 退出 */}
            </Antd.Menu>
            {/* 导航菜单 */}
            
            {/* 子页面 */}
            <div
style={{width:subpageState.style.width,
display:subpageState.style.display,
flexDirection:subpageState.style.flexDirection,
}}
className={`${style.subpage}`}
>
            {/* 标题容器 */}
            <div
style={{width:titleContainerState.style.width,
height:titleContainerState.style.height,
display:titleContainerState.style.display,
alignItems:titleContainerState.style.alignItems,
justifyContent:titleContainerState.style.justifyContent,
backgroundColor:titleContainerState.style.backgroundColor,
}}
className={`${style.titleContainer}`}
>
            {/* 重  特  大  事  件  日  志  电  子  档  案  的  自  动  形  成  及  其  智  能  归  档  系  统 */}
            <Antd.Typography.Text
code={automaticFormationAndIntelligentArchivingSystemForElectronicArchivesOfMajorEventLogsState.code}
mark={automaticFormationAndIntelligentArchivingSystemForElectronicArchivesOfMajorEventLogsState.mark}
type={automaticFormationAndIntelligentArchivingSystemForElectronicArchivesOfMajorEventLogsState.type}
delete={automaticFormationAndIntelligentArchivingSystemForElectronicArchivesOfMajorEventLogsState.delete}
italic={automaticFormationAndIntelligentArchivingSystemForElectronicArchivesOfMajorEventLogsState.italic}
strong={automaticFormationAndIntelligentArchivingSystemForElectronicArchivesOfMajorEventLogsState.strong}
children={automaticFormationAndIntelligentArchivingSystemForElectronicArchivesOfMajorEventLogsState.children}
copyable={automaticFormationAndIntelligentArchivingSystemForElectronicArchivesOfMajorEventLogsState.copyable}
disabled={automaticFormationAndIntelligentArchivingSystemForElectronicArchivesOfMajorEventLogsState.disabled}
editable={automaticFormationAndIntelligentArchivingSystemForElectronicArchivesOfMajorEventLogsState.editable}
ellipsis={automaticFormationAndIntelligentArchivingSystemForElectronicArchivesOfMajorEventLogsState.ellipsis}
keyboard={automaticFormationAndIntelligentArchivingSystemForElectronicArchivesOfMajorEventLogsState.keyboard}
underline={automaticFormationAndIntelligentArchivingSystemForElectronicArchivesOfMajorEventLogsState.underline}
style={{color:automaticFormationAndIntelligentArchivingSystemForElectronicArchivesOfMajorEventLogsState.style.color,
fontSize:automaticFormationAndIntelligentArchivingSystemForElectronicArchivesOfMajorEventLogsState.style.fontSize,
fontWeight:automaticFormationAndIntelligentArchivingSystemForElectronicArchivesOfMajorEventLogsState.style.fontWeight,
}}
className={`${style.automaticFormationAndIntelligentArchivingSystemForElectronicArchivesOfMajorEventLogs}`}
></Antd.Typography.Text>
            {/* 重  特  大  事  件  日  志  电  子  档  案  的  自  动  形  成  及  其  智  能  归  档  系  统 */}
            </div>
            {/* 标题容器 */}
            
            {/* 子页面标题容器 */}
            <div
style={{display:subpageTitleContainerState.style.display,
marginTop:subpageTitleContainerState.style.marginTop,
alignItems:subpageTitleContainerState.style.alignItems,
marginBottom:subpageTitleContainerState.style.marginBottom,
justifyContent:subpageTitleContainerState.style.justifyContent,
}}
className={`${style.subpageTitleContainer}`}
>
            {/* 日志输入 */}
            <Antd.Typography.Text
code={logInputRalpState.code}
mark={logInputRalpState.mark}
type={logInputRalpState.type}
delete={logInputRalpState.delete}
italic={logInputRalpState.italic}
strong={logInputRalpState.strong}
children={logInputRalpState.children}
copyable={logInputRalpState.copyable}
disabled={logInputRalpState.disabled}
editable={logInputRalpState.editable}
ellipsis={logInputRalpState.ellipsis}
keyboard={logInputRalpState.keyboard}
underline={logInputRalpState.underline}
style={{color:logInputRalpState.style.color,
fontSize:logInputRalpState.style.fontSize,
textAlign:logInputRalpState.style.textAlign,
fontWeight:logInputRalpState.style.fontWeight,
}}
className={`${style.logInputRalp}`}
></Antd.Typography.Text>
            {/* 日志输入 */}
            </div>
            {/* 子页面标题容器 */}
            
            {/* 子页面容器 */}
            <div
style={{width:subpageContainerState.style.width,
height:subpageContainerState.style.height,
}}
className={`${style.subpageContainer}`}
>
            {/* 字页面输入框容器 */}
            <div
style={{width:wordPageInputBoxContainerState.style.width,
height:wordPageInputBoxContainerState.style.height,
}}
className={`${style.wordPageInputBoxContainer}`}
>
            {/* 多行输入框 */}
            <Antd.Input.TextArea
value={multilineInputBoxPhbbState.value}
autoSize={multilineInputBoxPhbbState.autoSize}
bordered={multilineInputBoxPhbbState.bordered}
disabled={multilineInputBoxPhbbState.disabled}
maxLength={multilineInputBoxPhbbState.maxLength}
showCount={multilineInputBoxPhbbState.showCount}
allowClear={multilineInputBoxPhbbState.allowClear}
placeholder={multilineInputBoxPhbbState.placeholder}
defaultValue={multilineInputBoxPhbbState.defaultValue}
style={{height:multilineInputBoxPhbbState.style.height,
}}
className={`${style.multilineInputBoxPhbb}`}
></Antd.Input.TextArea>
            {/* 多行输入框 */}
            
            {/* 按钮容器 */}
            <div
style={{display:buttonContainerState.style.display,
alignItems:buttonContainerState.style.alignItems,
justifyContent:buttonContainerState.style.justifyContent,
}}
className={`${style.buttonContainer}`}
>
            {/* 提交 */}
            <Antd.Button
size={submitState.size}
type={submitState.type}
ghost={submitState.ghost}
shape={submitState.shape}
danger={submitState.danger}
children={submitState.children}
disabled={submitState.disabled}
htmlType={submitState.htmlType}
style={{}}
className={`${style.submit}`}
></Antd.Button>
            {/* 提交 */}
            
            {/* 预览 */}
            <Antd.Button
size={previewState.size}
type={previewState.type}
ghost={previewState.ghost}
shape={previewState.shape}
danger={previewState.danger}
children={previewState.children}
disabled={previewState.disabled}
htmlType={previewState.htmlType}
style={{marginLeft:previewState.style.marginLeft,
}}
className={`${style.preview}`}
onClick={(eventXdxn,) =>clickPreview(eventXdxn,)}></Antd.Button>
            {/* 预览 */}
            
            {/* 上传 */}
            <Antd.Upload
accept={uploadCmzwState.accept}
action={uploadCmzwState.action}
disabled={uploadCmzwState.disabled}
listType={uploadCmzwState.listType}
maxCount={uploadCmzwState.maxCount}
multiple={uploadCmzwState.multiple}
directory={uploadCmzwState.directory}
iconRender={uploadCmzwState.iconRender}
showUploadList={uploadCmzwState.showUploadList}
defaultFieldHzhg={uploadCmzwState.defaultFieldHzhg}
openFileDialogOnClick={uploadCmzwState.openFileDialogOnClick}
style={{width:uploadCmzwState.style.width,
height:uploadCmzwState.style.height,
}}
className={`${style.uploadCmzw}`}
>
            {/* 上传图片 */}
            <Antd.Button
size={uploadImageState.size}
type={uploadImageState.type}
ghost={uploadImageState.ghost}
shape={uploadImageState.shape}
danger={uploadImageState.danger}
children={uploadImageState.children}
disabled={uploadImageState.disabled}
style={{marginLeft:uploadImageState.style.marginLeft,
}}
className={`${style.uploadImage}`}
></Antd.Button>
            {/* 上传图片 */}
            </Antd.Upload>
            {/* 上传 */}
            </div>
            {/* 按钮容器 */}
            </div>
            {/* 字页面输入框容器 */}
            
            {/* 日志预览对话框 */}
            <Antd.Modal
mask={logPreviewDialogueBoxState.mask}
open={logPreviewDialogueBoxState.open}
title={logPreviewDialogueBoxState.title}
footer={logPreviewDialogueBoxState.footer}
content={logPreviewDialogueBoxState.content}
centered={logPreviewDialogueBoxState.centered}
keyboard={logPreviewDialogueBoxState.keyboard}
cancelText={logPreviewDialogueBoxState.cancelText}
maskClosable={logPreviewDialogueBoxState.maskClosable}
style={{marginTop:logPreviewDialogueBoxState.style.marginTop,
marginBottom:logPreviewDialogueBoxState.style.marginBottom,
}}
className={`${style.logPreviewDialogueBox}`}
onOk={() =>clickOkLogPreviewDialogBox()}onCancel={() =>clickOnTheMaskLayerOrTheTopRightCrossOrCancelButtonLogPreviewDialogBoxGcax()}>
            {/* 预览图片容器 */}
            <div
style={{width:previewImageContainerState.style.width,
height:previewImageContainerState.style.height,
display:previewImageContainerState.style.display,
justifyContent:previewImageContainerState.style.justifyContent,
}}
className={`${style.previewImageContainer}`}
>
            {/* 图片组件 */}
            <img
alt={imageComponentMplxState.alt}
src={imageComponentMplxState.src}
placeholder={imageComponentMplxState.placeholder}
style={{width:imageComponentMplxState.style.width,
height:imageComponentMplxState.style.height,
}}
className={`${style.imageComponentMplx}`}
></img>
            {/* 图片组件 */}
            </div>
            {/* 预览图片容器 */}
            </Antd.Modal>
            {/* 日志预览对话框 */}
            </div>
            {/* 子页面容器 */}
            </div>
            {/* 子页面 */}
            </div>
            {/* 页面容器 */}
            </>}
export default UserLogInputLkqh
export { UserLogInputLkqh }