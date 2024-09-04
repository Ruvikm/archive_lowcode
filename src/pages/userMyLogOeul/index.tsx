import style from './index.module.scss'
import { useState } from 'react'
import * as Antd from '@/components/antd'
import { routes } from '@/router/index'
import { getParentInfoList } from '@/utils'
import { useNavigate } from 'react-router-dom'
// 用户我的日志
              const UserMyLogOeul = () => {
const navigate = useNavigate()
// 点击时- 日志录入
          const whenClickedLogEntrySaqi = (eventZevm,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pagePpnk").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-我的日志
          const whenClickedMyLogZrms = (eventWpsl,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageQgpx").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-退出
          const whenClickedExitIald = (eventHuxc,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "defaultPageFhue").slice(1).map(item => item.path).join('/')}`)
}
// 点击确定-日志预览对话框
          const clickOkLogPreviewDialogBoxSkby = () =>{
 // 赋值 
setlogPreviewDialogueBoxState(state => {
              let copyState = JSON.parse(JSON.stringify(state))
                copyState.open = false
return copyState 
          })
}
// 点击遮罩层或右上角叉或取消按钮-日志预览对话框
          const clickOnTheMaskLayerOrTheTopRightCrossOrCancelButtonLogPreviewDialogBoxQpif = () =>{
 // 赋值 
setlogPreviewDialogueBoxState(state => {
              let copyState = JSON.parse(JSON.stringify(state))
                copyState.open = false
return copyState 
          })
}

      // 日志状态
      let [logStatus,setlogStatus] = useState(undefined)

              // 页面容器 开始属性
              const [pageContainerAkexState, setpageContainerAkexState] = useState({style:{width:"100vw",
height:"100vh",
display:"flex",
},
})
              // 页面容器 结束属性
              
              // 导航菜单 开始属性
              const [navigationMenuDvejState, setnavigationMenuDvejState] = useState({mode:"vertical",
expandIcon:undefined,
style:{width:"14%",
height:"100vh",
backgroundColor:"#336395",
},
})
              // 导航菜单 结束属性
              
              // 容器 开始属性
              const [containerTbbsState, setcontainerTbbsState] = useState({style:{width:undefined,
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
              const [pictureWzpzState, setpictureWzpzState] = useState({alt:undefined,
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
              const [administratorHomepageMbmpState, setadministratorHomepageMbmpState] = useState({code:false,
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
              const [logEntryXlvnState, setlogEntryXlvnState] = useState({key:undefined,
icon:undefined,
danger:false,
children:" 日志录入",
disabled:false,
style:{color:"#f0f8ff",
},
})
              //  日志录入 结束属性
              
              // 我的日志 开始属性
              const [myLogOrjuState, setmyLogOrjuState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"我的日志",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 我的日志 结束属性
              
              // 退出 开始属性
              const [quitYeomState, setquitYeomState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"退出",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 退出 结束属性
              
              // 两栏容器 开始属性
              const [twoColumnContainerWuqhState, settwoColumnContainerWuqhState] = useState({style:{width:"86%",
display:"flex",
flexDirection:"column",
},
})
              // 两栏容器 结束属性
              
              // 标题容器 开始属性
              const [titleContainerNbiaState, settitleContainerNbiaState] = useState({style:{width:"100%",
height:"9%",
display:"flex",
alignItems:"center",
justifyContent:"center",
backgroundColor:"#336395",
},
})
              // 标题容器 结束属性
              
              // 重  特  大  事  件  日  志  电  子  档  案  的  自  动  形  成  及  其  智  能  归  档  系  统 开始属性
              const [automaticFormationAndIntelligentArchivingSystemForElectronicArchivesOfMajorEventLogsWezdState, setautomaticFormationAndIntelligentArchivingSystemForElectronicArchivesOfMajorEventLogsWezdState] = useState({code:false,
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
              
              // 子页面容器 开始属性
              const [subpageContainerYvnbState, setsubpageContainerYvnbState] = useState({style:{width:"100%",
height:"100%",
},
})
              // 子页面容器 结束属性
              
              // 字页面标题容器 开始属性
              const [wordPageTitleContainerRfriState, setwordPageTitleContainerRfriState] = useState({style:{top:undefined,
bottom:undefined,
display:"flex",
marginTop:"10px",
alignItems:"center",
marginBottom:"10px",
justifyContent:"center",
},
})
              // 字页面标题容器 结束属性
              
              // 我的日志 开始属性
              const [myLogYfarState, setmyLogYfarState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:true,
children:"我的日志",
copyable:false,
disabled:false,
editable:false,
ellipsis:false,
keyboard:false,
underline:false,
style:{color:"#212121",
fontSize:"15px",
fontWeight:500,
},
})
              // 我的日志 结束属性
              
              // 表格容器 开始属性
              const [tableContainerState, settableContainerState] = useState({style:{width:"100vw",
height:"70%",
},
})
              // 表格容器 结束属性
              
              // 表格 开始属性
              const [viewLogAbiwState, setviewLogAbiwState] = useState({rowKey:undefined,
columns:[
{title:"日志名称",
width:200,
render:null,
children:[
],
dataIndex:undefined,
},
{title:"录入时间",
render:null,
children:[
],
dataIndex:undefined,
},
{title:"日志状态",
render:null,
children:[
],
dataIndex:undefined,
},
{title:"操作",
width:100,
render:null,
dataIndex:undefined,
},
],
loading:false,
bordered:true,
dataSource:[
],
pagination:{showSizeChanger:true,
},
rowSelection:undefined,
style:{width:"100%",
height:"100%",
},
})
              // 表格 结束属性
              
              // 文本 开始属性
              const [textSbqeState, settextSbqeState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"文本1",
copyable:false,
disabled:false,
editable:false,
ellipsis:false,
keyboard:false,
underline:false,
style:{},
})
              // 文本 结束属性
              
              // 文本1 开始属性
              const [textChosState, settextChosState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"文本",
copyable:false,
disabled:false,
editable:false,
ellipsis:false,
keyboard:false,
underline:false,
style:{},
})
              // 文本1 结束属性
              
              // 文本2 开始属性
              const [textQpkcState, settextQpkcState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"文本",
copyable:false,
disabled:false,
editable:false,
ellipsis:false,
keyboard:false,
underline:false,
style:{},
})
              // 文本2 结束属性
              
              // 日志预览对话框 开始属性
              const [logPreviewDialogueBoxBqxwState, setlogPreviewDialogueBoxBqxwState] = useState({mask:true,
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
              const [previewImageContainerNxdxState, setpreviewImageContainerNxdxState] = useState({style:{width:undefined,
height:"70vh",
display:"flex",
justifyContent:"center",
},
})
              // 预览图片容器 结束属性
              
              // 图片组件 开始属性
              const [imageComponentEfuxState, setimageComponentEfuxState] = useState({alt:undefined,
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
style={{width:pageContainerAkexState.style.width,
height:pageContainerAkexState.style.height,
display:pageContainerAkexState.style.display,
}}
className={`${style.pageContainerAkex}`}
>
            {/* 导航菜单 */}
            <Antd.Menu
mode={navigationMenuDvejState.mode}
expandIcon={navigationMenuDvejState.expandIcon}
style={{width:navigationMenuDvejState.style.width,
height:navigationMenuDvejState.style.height,
backgroundColor:navigationMenuDvejState.style.backgroundColor,
}}
className={`${style.navigationMenuDvej}`}
>
            {/* 容器 */}
            <div
style={{width:containerTbbsState.style.width,
height:containerTbbsState.style.height,
display:containerTbbsState.style.display,
flexWrap:containerTbbsState.style.flexWrap,
alignItems:containerTbbsState.style.alignItems,
paddingTop:containerTbbsState.style.paddingTop,
borderColor:containerTbbsState.style.borderColor,
borderStyle:containerTbbsState.style.borderStyle,
flexDirection:containerTbbsState.style.flexDirection,
justifyContent:containerTbbsState.style.justifyContent,
borderBottomWidth:containerTbbsState.style.borderBottomWidth,
}}
className={`${style.containerTbbs}`}
>
            {/* 图片 */}
            <Antd.Image
alt={pictureWzpzState.alt}
src={pictureWzpzState.src}
width={pictureWzpzState.width}
height={pictureWzpzState.height}
preview={pictureWzpzState.preview}
fallback={pictureWzpzState.fallback}
placeholder={pictureWzpzState.placeholder}
style={{width:pictureWzpzState.style.width,
height:pictureWzpzState.style.height,
marginTop:pictureWzpzState.style.marginTop,
marginLeft:pictureWzpzState.style.marginLeft,
}}
className={`${style.pictureWzpz}`}
></Antd.Image>
            {/* 图片 */}
            
            {/* 管理员首页 */}
            <Antd.Typography.Text
code={administratorHomepageMbmpState.code}
mark={administratorHomepageMbmpState.mark}
type={administratorHomepageMbmpState.type}
delete={administratorHomepageMbmpState.delete}
italic={administratorHomepageMbmpState.italic}
strong={administratorHomepageMbmpState.strong}
children={administratorHomepageMbmpState.children}
copyable={administratorHomepageMbmpState.copyable}
disabled={administratorHomepageMbmpState.disabled}
editable={administratorHomepageMbmpState.editable}
ellipsis={administratorHomepageMbmpState.ellipsis}
keyboard={administratorHomepageMbmpState.keyboard}
underline={administratorHomepageMbmpState.underline}
style={{color:administratorHomepageMbmpState.style.color,
fontSize:administratorHomepageMbmpState.style.fontSize,
fontWeight:administratorHomepageMbmpState.style.fontWeight,
marginLeft:administratorHomepageMbmpState.style.marginLeft,
paddingLeft:administratorHomepageMbmpState.style.paddingLeft,
paddingRight:administratorHomepageMbmpState.style.paddingRight,
}}
className={`${style.administratorHomepageMbmp}`}
></Antd.Typography.Text>
            {/* 管理员首页 */}
            </div>
            {/* 容器 */}
            
            {/*  日志录入 */}
            <Antd.Menu.Item
key={logEntryXlvnState.key}
icon={logEntryXlvnState.icon}
danger={logEntryXlvnState.danger}
children={logEntryXlvnState.children}
disabled={logEntryXlvnState.disabled}
style={{color:logEntryXlvnState.style.color,
}}
className={`${style.logEntryXlvn}`}
onClick={(eventZevm,) =>whenClickedLogEntrySaqi(eventZevm,)}></Antd.Menu.Item>
            {/*  日志录入 */}
            
            {/* 我的日志 */}
            <Antd.Menu.Item
key={myLogOrjuState.key}
icon={myLogOrjuState.icon}
danger={myLogOrjuState.danger}
children={myLogOrjuState.children}
disabled={myLogOrjuState.disabled}
style={{color:myLogOrjuState.style.color,
}}
className={`${style.myLogOrju}`}
onClick={(eventWpsl,) =>whenClickedMyLogZrms(eventWpsl,)}></Antd.Menu.Item>
            {/* 我的日志 */}
            
            {/* 退出 */}
            <Antd.Menu.Item
key={quitYeomState.key}
icon={quitYeomState.icon}
danger={quitYeomState.danger}
children={quitYeomState.children}
disabled={quitYeomState.disabled}
style={{color:quitYeomState.style.color,
}}
className={`${style.quitYeom}`}
onClick={(eventHuxc,) =>whenClickedExitIald(eventHuxc,)}></Antd.Menu.Item>
            {/* 退出 */}
            </Antd.Menu>
            {/* 导航菜单 */}
            
            {/* 两栏容器 */}
            <div
style={{width:twoColumnContainerWuqhState.style.width,
display:twoColumnContainerWuqhState.style.display,
flexDirection:twoColumnContainerWuqhState.style.flexDirection,
}}
className={`${style.twoColumnContainerWuqh}`}
>
            {/* 标题容器 */}
            <div
style={{width:titleContainerNbiaState.style.width,
height:titleContainerNbiaState.style.height,
display:titleContainerNbiaState.style.display,
alignItems:titleContainerNbiaState.style.alignItems,
justifyContent:titleContainerNbiaState.style.justifyContent,
backgroundColor:titleContainerNbiaState.style.backgroundColor,
}}
className={`${style.titleContainerNbia}`}
>
            {/* 重  特  大  事  件  日  志  电  子  档  案  的  自  动  形  成  及  其  智  能  归  档  系  统 */}
            <Antd.Typography.Text
code={automaticFormationAndIntelligentArchivingSystemForElectronicArchivesOfMajorEventLogsWezdState.code}
mark={automaticFormationAndIntelligentArchivingSystemForElectronicArchivesOfMajorEventLogsWezdState.mark}
type={automaticFormationAndIntelligentArchivingSystemForElectronicArchivesOfMajorEventLogsWezdState.type}
delete={automaticFormationAndIntelligentArchivingSystemForElectronicArchivesOfMajorEventLogsWezdState.delete}
italic={automaticFormationAndIntelligentArchivingSystemForElectronicArchivesOfMajorEventLogsWezdState.italic}
strong={automaticFormationAndIntelligentArchivingSystemForElectronicArchivesOfMajorEventLogsWezdState.strong}
children={automaticFormationAndIntelligentArchivingSystemForElectronicArchivesOfMajorEventLogsWezdState.children}
copyable={automaticFormationAndIntelligentArchivingSystemForElectronicArchivesOfMajorEventLogsWezdState.copyable}
disabled={automaticFormationAndIntelligentArchivingSystemForElectronicArchivesOfMajorEventLogsWezdState.disabled}
editable={automaticFormationAndIntelligentArchivingSystemForElectronicArchivesOfMajorEventLogsWezdState.editable}
ellipsis={automaticFormationAndIntelligentArchivingSystemForElectronicArchivesOfMajorEventLogsWezdState.ellipsis}
keyboard={automaticFormationAndIntelligentArchivingSystemForElectronicArchivesOfMajorEventLogsWezdState.keyboard}
underline={automaticFormationAndIntelligentArchivingSystemForElectronicArchivesOfMajorEventLogsWezdState.underline}
style={{color:automaticFormationAndIntelligentArchivingSystemForElectronicArchivesOfMajorEventLogsWezdState.style.color,
fontSize:automaticFormationAndIntelligentArchivingSystemForElectronicArchivesOfMajorEventLogsWezdState.style.fontSize,
fontWeight:automaticFormationAndIntelligentArchivingSystemForElectronicArchivesOfMajorEventLogsWezdState.style.fontWeight,
}}
className={`${style.automaticFormationAndIntelligentArchivingSystemForElectronicArchivesOfMajorEventLogsWezd}`}
></Antd.Typography.Text>
            {/* 重  特  大  事  件  日  志  电  子  档  案  的  自  动  形  成  及  其  智  能  归  档  系  统 */}
            </div>
            {/* 标题容器 */}
            
            {/* 子页面容器 */}
            <div
style={{width:subpageContainerYvnbState.style.width,
height:subpageContainerYvnbState.style.height,
}}
className={`${style.subpageContainerYvnb}`}
>
            {/* 字页面标题容器 */}
            <div
style={{top:wordPageTitleContainerRfriState.style.top,
bottom:wordPageTitleContainerRfriState.style.bottom,
display:wordPageTitleContainerRfriState.style.display,
marginTop:wordPageTitleContainerRfriState.style.marginTop,
alignItems:wordPageTitleContainerRfriState.style.alignItems,
marginBottom:wordPageTitleContainerRfriState.style.marginBottom,
justifyContent:wordPageTitleContainerRfriState.style.justifyContent,
}}
className={`${style.wordPageTitleContainerRfri}`}
>
            {/* 我的日志 */}
            <Antd.Typography.Text
code={myLogYfarState.code}
mark={myLogYfarState.mark}
type={myLogYfarState.type}
delete={myLogYfarState.delete}
italic={myLogYfarState.italic}
strong={myLogYfarState.strong}
children={myLogYfarState.children}
copyable={myLogYfarState.copyable}
disabled={myLogYfarState.disabled}
editable={myLogYfarState.editable}
ellipsis={myLogYfarState.ellipsis}
keyboard={myLogYfarState.keyboard}
underline={myLogYfarState.underline}
style={{color:myLogYfarState.style.color,
fontSize:myLogYfarState.style.fontSize,
fontWeight:myLogYfarState.style.fontWeight,
}}
className={`${style.myLogYfar}`}
></Antd.Typography.Text>
            {/* 我的日志 */}
            </div>
            {/* 字页面标题容器 */}
            
            {/* 表格容器 */}
            <div
style={{width:tableContainerState.style.width,
height:tableContainerState.style.height,
}}
className={`${style.tableContainer}`}
>
            {/* 表格 */}
            <Antd.Table
rowKey={viewLogAbiwState.rowKey}
columns={[
{title:viewLogAbiwState.columns[0].title,
width:viewLogAbiwState.columns[0].width,
render:() => {return <>
            {/* 文本 */}
            <Antd.Typography.Text
code={textSbqeState.code}
mark={textSbqeState.mark}
type={textSbqeState.type}
delete={textSbqeState.delete}
italic={textSbqeState.italic}
strong={textSbqeState.strong}
children={textSbqeState.children}
copyable={textSbqeState.copyable}
disabled={textSbqeState.disabled}
editable={textSbqeState.editable}
ellipsis={textSbqeState.ellipsis}
keyboard={textSbqeState.keyboard}
underline={textSbqeState.underline}
style={{}}
className={`${style.textSbqe}`}
></Antd.Typography.Text>
            {/* 文本 */}
            </>},
children:[
],
dataIndex:viewLogAbiwState.columns[0].dataIndex,
},
{title:viewLogAbiwState.columns[1].title,
render:() => {return <>
            {/* 文本1 */}
            <Antd.Typography.Text
code={textChosState.code}
mark={textChosState.mark}
type={textChosState.type}
delete={textChosState.delete}
italic={textChosState.italic}
strong={textChosState.strong}
children={textChosState.children}
copyable={textChosState.copyable}
disabled={textChosState.disabled}
editable={textChosState.editable}
ellipsis={textChosState.ellipsis}
keyboard={textChosState.keyboard}
underline={textChosState.underline}
style={{}}
className={`${style.textChos}`}
></Antd.Typography.Text>
            {/* 文本1 */}
            </>},
children:[
],
dataIndex:viewLogAbiwState.columns[1].dataIndex,
},
{title:viewLogAbiwState.columns[2].title,
render:() => {return <>
            {/* 文本2 */}
            <Antd.Typography.Text
code={textQpkcState.code}
mark={textQpkcState.mark}
type={textQpkcState.type}
delete={textQpkcState.delete}
italic={textQpkcState.italic}
strong={textQpkcState.strong}
children={textQpkcState.children}
copyable={textQpkcState.copyable}
disabled={textQpkcState.disabled}
editable={textQpkcState.editable}
ellipsis={textQpkcState.ellipsis}
keyboard={textQpkcState.keyboard}
underline={textQpkcState.underline}
style={{}}
className={`${style.textQpkc}`}
></Antd.Typography.Text>
            {/* 文本2 */}
            </>},
children:[
],
dataIndex:viewLogAbiwState.columns[2].dataIndex,
},
{title:viewLogAbiwState.columns[3].title,
width:viewLogAbiwState.columns[3].width,
render:() => {return <></>},
dataIndex:viewLogAbiwState.columns[3].dataIndex,
},
]}
loading={viewLogAbiwState.loading}
bordered={viewLogAbiwState.bordered}
dataSource={[]}
pagination={{showSizeChanger:viewLogAbiwState.pagination.showSizeChanger,
}}
rowSelection={viewLogAbiwState.rowSelection}
style={{width:viewLogAbiwState.style.width,
height:viewLogAbiwState.style.height,
}}
className={`${style.viewLogAbiw}`}
></Antd.Table>
            {/* 表格 */}
            
            {/* 日志预览对话框 */}
            <Antd.Modal
mask={logPreviewDialogueBoxBqxwState.mask}
open={logPreviewDialogueBoxBqxwState.open}
title={logPreviewDialogueBoxBqxwState.title}
footer={logPreviewDialogueBoxBqxwState.footer}
content={logPreviewDialogueBoxBqxwState.content}
centered={logPreviewDialogueBoxBqxwState.centered}
keyboard={logPreviewDialogueBoxBqxwState.keyboard}
cancelText={logPreviewDialogueBoxBqxwState.cancelText}
maskClosable={logPreviewDialogueBoxBqxwState.maskClosable}
style={{marginTop:logPreviewDialogueBoxBqxwState.style.marginTop,
marginBottom:logPreviewDialogueBoxBqxwState.style.marginBottom,
}}
className={`${style.logPreviewDialogueBoxBqxw}`}
onOk={() =>clickOkLogPreviewDialogBoxSkby()}onCancel={() =>clickOnTheMaskLayerOrTheTopRightCrossOrCancelButtonLogPreviewDialogBoxQpif()}>
            {/* 预览图片容器 */}
            <div
style={{width:previewImageContainerNxdxState.style.width,
height:previewImageContainerNxdxState.style.height,
display:previewImageContainerNxdxState.style.display,
justifyContent:previewImageContainerNxdxState.style.justifyContent,
}}
className={`${style.previewImageContainerNxdx}`}
>
            {/* 图片组件 */}
            <img
alt={imageComponentEfuxState.alt}
src={imageComponentEfuxState.src}
placeholder={imageComponentEfuxState.placeholder}
style={{width:imageComponentEfuxState.style.width,
height:imageComponentEfuxState.style.height,
}}
className={`${style.imageComponentEfux}`}
></img>
            {/* 图片组件 */}
            </div>
            {/* 预览图片容器 */}
            </Antd.Modal>
            {/* 日志预览对话框 */}
            </div>
            {/* 表格容器 */}
            </div>
            {/* 子页面容器 */}
            </div>
            {/* 两栏容器 */}
            </div>
            {/* 页面容器 */}
            </>}
export default UserMyLogOeul
export { UserMyLogOeul }