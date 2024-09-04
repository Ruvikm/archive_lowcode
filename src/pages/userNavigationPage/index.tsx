import style from './index.module.scss'
import { useState } from 'react'
import * as Antd from '@/components/antd'
import { routes } from '@/router/index'
import { getParentInfoList } from '@/utils'
import { useNavigate } from 'react-router-dom'
// 用户-导航页
              const UserNavigationPage = () => {
const navigate = useNavigate()
// 点击时- 日志录入
          const whenClickedLogEntry = (eventIuug,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pagePpnk").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-我的日志
          const whenClickedMyLog = (eventUhcr,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageQgpx").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-导航菜单项
          const whenClickedNavigationMenuItem = (eventDzop,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "defaultPageFhue").slice(1).map(item => item.path).join('/')}`)
}

              // 页面容器 开始属性
              const [pageContainerLtlvState, setpageContainerLtlvState] = useState({style:{width:"100vw",
height:"100vh",
display:"flex",
},
})
              // 页面容器 结束属性
              
              // 导航菜单 开始属性
              const [navigationMenuXumnState, setnavigationMenuXumnState] = useState({mode:"vertical",
expandIcon:undefined,
style:{width:"14%",
height:"100vh",
backgroundColor:"#336395",
},
})
              // 导航菜单 结束属性
              
              // 容器 开始属性
              const [containerVylxState, setcontainerVylxState] = useState({style:{width:undefined,
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
              const [pictureIcziState, setpictureIcziState] = useState({alt:undefined,
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
              const [administratorHomepageFbvqState, setadministratorHomepageFbvqState] = useState({code:false,
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
              const [myLogFnkvState, setmyLogFnkvState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"我的日志",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 我的日志 结束属性
              
              // 导航菜单项 开始属性
              const [navigationMenuItemsVscnState, setnavigationMenuItemsVscnState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"退出",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 导航菜单项 结束属性
              
              // 两栏容器 开始属性
              const [twoColumnContainerIonuState, settwoColumnContainerIonuState] = useState({style:{width:"86%",
display:"flex",
flexDirection:"column",
},
})
              // 两栏容器 结束属性
              
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
              
              // 子页面容器 开始属性
              const [subpageContainerIfnrState, setsubpageContainerIfnrState] = useState({style:{width:"100%",
height:"100%",
},
})
              // 子页面容器 结束属性
              return<>
            {/* 页面容器 */}
            <div
style={{width:pageContainerLtlvState.style.width,
height:pageContainerLtlvState.style.height,
display:pageContainerLtlvState.style.display,
}}
className={`${style.pageContainerLtlv}`}
>
            {/* 导航菜单 */}
            <Antd.Menu
mode={navigationMenuXumnState.mode}
expandIcon={navigationMenuXumnState.expandIcon}
style={{width:navigationMenuXumnState.style.width,
height:navigationMenuXumnState.style.height,
backgroundColor:navigationMenuXumnState.style.backgroundColor,
}}
className={`${style.navigationMenuXumn}`}
>
            {/* 容器 */}
            <div
style={{width:containerVylxState.style.width,
height:containerVylxState.style.height,
display:containerVylxState.style.display,
flexWrap:containerVylxState.style.flexWrap,
alignItems:containerVylxState.style.alignItems,
paddingTop:containerVylxState.style.paddingTop,
borderColor:containerVylxState.style.borderColor,
borderStyle:containerVylxState.style.borderStyle,
flexDirection:containerVylxState.style.flexDirection,
justifyContent:containerVylxState.style.justifyContent,
borderBottomWidth:containerVylxState.style.borderBottomWidth,
}}
className={`${style.containerVylx}`}
>
            {/* 图片 */}
            <Antd.Image
alt={pictureIcziState.alt}
src={pictureIcziState.src}
width={pictureIcziState.width}
height={pictureIcziState.height}
preview={pictureIcziState.preview}
fallback={pictureIcziState.fallback}
placeholder={pictureIcziState.placeholder}
style={{width:pictureIcziState.style.width,
height:pictureIcziState.style.height,
marginTop:pictureIcziState.style.marginTop,
marginLeft:pictureIcziState.style.marginLeft,
}}
className={`${style.pictureIczi}`}
></Antd.Image>
            {/* 图片 */}
            
            {/* 管理员首页 */}
            <Antd.Typography.Text
code={administratorHomepageFbvqState.code}
mark={administratorHomepageFbvqState.mark}
type={administratorHomepageFbvqState.type}
delete={administratorHomepageFbvqState.delete}
italic={administratorHomepageFbvqState.italic}
strong={administratorHomepageFbvqState.strong}
children={administratorHomepageFbvqState.children}
copyable={administratorHomepageFbvqState.copyable}
disabled={administratorHomepageFbvqState.disabled}
editable={administratorHomepageFbvqState.editable}
ellipsis={administratorHomepageFbvqState.ellipsis}
keyboard={administratorHomepageFbvqState.keyboard}
underline={administratorHomepageFbvqState.underline}
style={{color:administratorHomepageFbvqState.style.color,
fontSize:administratorHomepageFbvqState.style.fontSize,
fontWeight:administratorHomepageFbvqState.style.fontWeight,
marginLeft:administratorHomepageFbvqState.style.marginLeft,
paddingLeft:administratorHomepageFbvqState.style.paddingLeft,
paddingRight:administratorHomepageFbvqState.style.paddingRight,
}}
className={`${style.administratorHomepageFbvq}`}
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
onClick={(eventIuug,) =>whenClickedLogEntry(eventIuug,)}></Antd.Menu.Item>
            {/*  日志录入 */}
            
            {/* 我的日志 */}
            <Antd.Menu.Item
key={myLogFnkvState.key}
icon={myLogFnkvState.icon}
danger={myLogFnkvState.danger}
children={myLogFnkvState.children}
disabled={myLogFnkvState.disabled}
style={{color:myLogFnkvState.style.color,
}}
className={`${style.myLogFnkv}`}
onClick={(eventUhcr,) =>whenClickedMyLog(eventUhcr,)}></Antd.Menu.Item>
            {/* 我的日志 */}
            
            {/* 导航菜单项 */}
            <Antd.Menu.Item
key={navigationMenuItemsVscnState.key}
icon={navigationMenuItemsVscnState.icon}
danger={navigationMenuItemsVscnState.danger}
children={navigationMenuItemsVscnState.children}
disabled={navigationMenuItemsVscnState.disabled}
style={{color:navigationMenuItemsVscnState.style.color,
}}
className={`${style.navigationMenuItemsVscn}`}
onClick={(eventDzop,) =>whenClickedNavigationMenuItem(eventDzop,)}></Antd.Menu.Item>
            {/* 导航菜单项 */}
            </Antd.Menu>
            {/* 导航菜单 */}
            
            {/* 两栏容器 */}
            <div
style={{width:twoColumnContainerIonuState.style.width,
display:twoColumnContainerIonuState.style.display,
flexDirection:twoColumnContainerIonuState.style.flexDirection,
}}
className={`${style.twoColumnContainerIonu}`}
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
            
            {/* 子页面容器 */}
            <div
style={{width:subpageContainerIfnrState.style.width,
height:subpageContainerIfnrState.style.height,
}}
className={`${style.subpageContainerIfnr}`}
></div>
            {/* 子页面容器 */}
            </div>
            {/* 两栏容器 */}
            </div>
            {/* 页面容器 */}
            </>}
export default UserNavigationPage
export { UserNavigationPage }