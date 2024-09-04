import style from './index.module.scss'
import { useState } from 'react'
import * as Antd from '@/components/antd'
import { routes } from '@/router/index'
import { getParentInfoList } from '@/utils'
import { useNavigate } from 'react-router-dom'
import * as AntdIcon from '@ant-design/icons'
// 元数据形式特征
              const CharacteristicsOfMetadataFormatZhhg = () => {
const navigate = useNavigate()
// 点击时-档号配置
          const clickToConfigureFileNumberQpdf = (eventXpts,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageDano").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据内容描述
          const whenClickedMetadataContentDescriptionYunk = (eventUyky,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "page401").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-聚合层次
          const clickOnAggregateHierarchyDhjj = (eventVvis,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageVomd").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据形式特征
          const whenClickedMetadataFormatFeaturesRotp = (eventPmam,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageWcoq").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据存储位置
          const whenClickedMetadataStorageLocationVdhk = (eventJubx,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageDbgh").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据电子签名
          const whenClickedMetadataElectronicSignatureYwzj = (eventAuvj,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageWsbf").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据来源
          const whenClickedMetadataSourceKskn = (eventPqko,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageGafh").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-档号
          const clickTimeFileNumberOdxi = (eventIlux,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageGafh").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-待审核日志
          const whenClickedPendingAuditLogZmbc = (eventZydu,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageZuvc").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-已审核日志
          const whenClickedReviewedLogsIkkw = (eventQjim,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageStsm").slice(1).map(item => item.path).join('/')}`)
}
// 点击-退出按钮
          const clickExitButtonPumf = (eventWguk,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "defaultPageFhue").slice(1).map(item => item.path).join('/')}`)
}

              // 容器 开始属性
              const [containerRdcxState, setcontainerRdcxState] = useState({style:{width:"100vw",
height:"100vh",
display:"flex",
},
})
              // 容器 结束属性
              
              // 导航菜单 开始属性
              const [navigationMenuPzxxState, setnavigationMenuPzxxState] = useState({mode:"vertical",
expandIcon:undefined,
style:{width:"14%",
height:"100vh",
backgroundColor:"#336395",
backgroundImage:undefined,
backgroundRepeat:"repeat",
borderTopRightRadius:"0px",
borderBottomRightRadius:"10px",
},
})
              // 导航菜单 结束属性
              
              // 容器 开始属性
              const [containerZoofState, setcontainerZoofState] = useState({style:{width:"100%",
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
              const [pictureInawState, setpictureInawState] = useState({alt:undefined,
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
              const [administratorHomepageYhznState, setadministratorHomepageYhznState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"管理员首页",
copyable:false,
disabled:false,
editable:false,
ellipsis:false,
keyboard:false,
underline:false,
style:{color:"#f0f8ff",
width:"200px",
height:undefined,
fontSize:"20px",
textAlign:"center",
fontWeight:600,
marginLeft:"-20px",
},
})
              // 管理员首页 结束属性
              
              // 档号配置 开始属性
              const [fileNumberConfigurationUdheState, setfileNumberConfigurationUdheState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"档号配置",
disabled:false,
style:{color:"#f0f8ff",
width:"100%",
marginLeft:"0px",
borderColor:"#4e89c2",
borderStyle:"solid",
marginRight:"0px",
backgroundColor:"#00000000",
borderBottomWidth:"5px",
borderTopLeftRadius:"0px",
borderTopRightRadius:"0px",
borderBottomLeftRadius:"0px",
borderBottomRightRadius:"0px",
},
})
              // 档号配置 结束属性
              
              // 元数据填写 开始属性
              const [fillInMetadataEtkfState, setfillInMetadataEtkfState] = useState({title:"元数据填写",
style:{color:"#f0f8ff",
borderColor:"#4e89c2",
borderStyle:"groove",
borderTopWidth:"0px",
borderLeftWidth:"0px",
borderRightWidth:"0px",
borderBottomWidth:"5px",
},
})
              // 元数据填写 结束属性
              
              // 元数据内容描述 开始属性
              const [descriptionOfMetadataContentMjtsState, setdescriptionOfMetadataContentMjtsState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据内容描述",
disabled:false,
style:{color:"#f0f8ff",
backgroundColor:"#00000000",
},
})
              // 元数据内容描述 结束属性
              
              // 聚合层次 开始属性
              const [aggregationHierarchyEyeiState, setaggregationHierarchyEyeiState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"聚合层次",
disabled:false,
style:{color:"#f0f8ff",
backgroundColor:"#6d8fc000",
},
})
              // 聚合层次 结束属性
              
              // 元数据形式特征 开始属性
              const [characteristicsOfMetadataFormatNrfpState, setcharacteristicsOfMetadataFormatNrfpState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据形式特征",
disabled:false,
style:{color:"#f0f8ff",
backgroundColor:"#6d8fc0",
},
})
              // 元数据形式特征 结束属性
              
              // 元数据存储位置 开始属性
              const [metadataStorageLocationTsrxState, setmetadataStorageLocationTsrxState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据存储位置",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 元数据存储位置 结束属性
              
              // 元数据电子签名 开始属性
              const [metadataElectronicSignatureMvwcState, setmetadataElectronicSignatureMvwcState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据电子签名",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 元数据电子签名 结束属性
              
              // 元数据来源 开始属性
              const [sourceOfMetadataPgouState, setsourceOfMetadataPgouState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据来源",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 元数据来源 结束属性
              
              // 档号 开始属性
              const [referenceKkepState, setreferenceKkepState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"档号",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 档号 结束属性
              
              // 生成文件 开始属性
              const [generateFileUrdoState, setgenerateFileUrdoState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"生成文件",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 生成文件 结束属性
              
              // 日志审核 开始属性
              const [logAuditBhooState, setlogAuditBhooState] = useState({title:"日志审核",
style:{borderColor:"#4e89c2",
borderStyle:"groove",
borderTopWidth:"0px",
borderLeftWidth:"0px",
borderRightWidth:"0px",
borderBottomWidth:"5px",
},
})
              // 日志审核 结束属性
              
              // 待审核日志 开始属性
              const [pendingAuditLogOkpbState, setpendingAuditLogOkpbState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"待审核日志",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 待审核日志 结束属性
              
              // 已审核日志 开始属性
              const [verifiedLogsYsorState, setverifiedLogsYsorState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"已审核日志",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 已审核日志 结束属性
              
              // 两栏容器 开始属性
              const [twoColumnContainerBxlkState, settwoColumnContainerBxlkState] = useState({style:{width:"86%",
display:"flex",
flexDirection:"column",
justifyContent:"center",
},
})
              // 两栏容器 结束属性
              
              // 容器 开始属性
              const [containerGrpyState, setcontainerGrpyState] = useState({style:{width:"100%",
height:"9%",
backgroundColor:"#f0f8ff",
},
})
              // 容器 结束属性
              
              // 容器 开始属性
              const [containerFvwcState, setcontainerFvwcState] = useState({style:{width:"100%",
height:"9%",
backgroundColor:"#ffffff",
},
})
              // 容器 结束属性
              
              // 两栏容器 开始属性
              const [twoColumnContainerVxtyState, settwoColumnContainerVxtyState] = useState({style:{width:"100%",
display:"flex",
flexDirection:"column",
},
})
              // 两栏容器 结束属性
              
              // 容器 开始属性
              const [containerZabmState, setcontainerZabmState] = useState({style:{width:"100%",
},
})
              // 容器 结束属性
              
              // 两栏容器 开始属性
              const [twoColumnContainerRffrState, settwoColumnContainerRffrState] = useState({style:{width:"100%",
display:"flex",
flexDirection:"column",
},
})
              // 两栏容器 结束属性
              
              // 系统名称 开始属性
              const [systemNameGbgnState, setsystemNameGbgnState] = useState({style:{gap:"14px",
color:"#f0f8ff",
width:"100%",
height:"40px",
display:"flex",
fontSize:"22px",
marginTop:"-2px",
textAlign:"center",
alignItems:"center",
borderColor:"#4e89c2",
borderStyle:"groove",
flexDirection:"row",
justifyContent:"center",
backgroundColor:"#336395",
borderBottomWidth:"6px",
},
})
              // 系统名称 结束属性
              
              // 系统名称 开始属性
              const [systemNameTntsState, setsystemNameTntsState] = useState({code:false,
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
display:"flex",
fontSize:"16px",
textAlign:"justify",
alignItems:"center",
fontWeight:600,
justifyContent:"space-between",
},
})
              // 系统名称 结束属性
              
              // 容器 开始属性
              const [containerHztwState, setcontainerHztwState] = useState({style:{width:"100%",
height:"50px",
display:"flex",
flexWrap:"nowrap",
alignItems:"flex-end",
borderColor:"#4e89c2",
borderStyle:"groove",
flexDirection:"row",
justifyContent:"flex-end",
backgroundColor:"#336395",
},
})
              // 容器 结束属性
              
              // 图标 开始属性
              const [iconZwpeState, seticonZwpeState] = useState({spin:false,
rotate:undefined,
twoToneColor:undefined,
style:{color:"#fffbfb",
width:"50px",
height:"50px",
fontSize:"34px",
marginTop:"5px",
fontWeight:200,
marginRight:"20px",
},
})
              // 图标 结束属性
              
              // 退出按钮 开始属性
              const [exitButtonZzdkState, setexitButtonZzdkState] = useState({icon:undefined,
size:"middle",
type:"primary",
ghost:true,
shape:"round",
danger:false,
loading:false,
children:"退出",
disabled:false,
style:{fontSize:"18px",
fontWeight:800,
marginRight:"60px",
marginBottom:"10px",
backgroundColor:"#fefbfb",
},
})
              // 退出按钮 结束属性
              
              // 请输入说明题名文字 开始属性
              const [pleaseEnterExplanatoryTitleTextGqctState, setpleaseEnterExplanatoryTitleTextGqctState] = useState({style:{width:"100%",
height:"91%",
display:"flex",
marginTop:"-5px",
borderColor:"#000000",
borderStyle:"solid",
paddingLeft:"10px",
paddingRight:"10px",
flexDirection:"column",
backgroundColor:"#dcdcdc",
},
})
              // 请输入说明题名文字 结束属性
              
              // 电子文件号 开始属性
              const [electronicFileNumberRjoiState, setelectronicFileNumberRjoiState] = useState({style:{width:"100%",
height:"60px",
display:"flex",
marginTop:"2%",
marginBottom:"0px",
justifyContent:"flex-start",
borderTopLeftRadius:"2px",
borderTopRightRadius:"2px",
borderBottomLeftRadius:"2px",
borderBottomRightRadius:"2px",
},
})
              // 电子文件号 结束属性
              
              // 电子文件号前缀 开始属性
              const [electronicFileNumberPrefixLdibState, setelectronicFileNumberPrefixLdibState] = useState({style:{width:"49%",
height:"60px",
display:"flex",
alignItems:"center",
marginRight:"10px",
justifyContent:"center",
backgroundColor:"#ffffff",
borderTopLeftRadius:"10px",
borderTopRightRadius:"10px",
borderBottomLeftRadius:"10px",
borderBottomRightRadius:"10px",
},
})
              // 电子文件号前缀 结束属性
              
              // 电子文件号 开始属性
              const [electronicFileNumberQktiState, setelectronicFileNumberQktiState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"电子文件号",
copyable:false,
disabled:false,
editable:false,
ellipsis:false,
keyboard:false,
underline:false,
style:{gap:"14px",
color:"#000000",
width:"40%",
height:"100%",
display:"flex",
fontSize:"15px",
textAlign:"start",
alignItems:"center",
marginRight:"10px",
flexDirection:"row",
justifyContent:"center",
},
})
              // 电子文件号 结束属性
              
              // 请输入电子文件号 开始属性
              const [pleaseEnterTheElectronicFileNumberEbddState, setpleaseEnterTheElectronicFileNumberEbddState] = useState({size:"middle",
value:undefined,
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"电子文件号",
defaultValue:undefined,
style:{width:"60%",
height:"60px",
borderStyle:"solid",
},
})
              // 请输入电子文件号 结束属性
              
              // 并列题名 开始属性
              const [parallelTitleLixaState, setparallelTitleLixaState] = useState({style:{width:"100%",
height:"60px",
display:"flex",
marginTop:"2%",
marginLeft:"5px",
marginBottom:undefined,
borderTopLeftRadius:"2px",
borderTopRightRadius:"2px",
borderBottomLeftRadius:"2px",
borderBottomRightRadius:"2px",
},
})
              // 并列题名 结束属性
              
              // 全宗号 开始属性
              const [completeAccountNumberWonhState, setcompleteAccountNumberWonhState] = useState({style:{width:"49%",
height:"60px",
display:"flex",
marginRight:"10px",
backgroundColor:"#ffffff",
borderTopLeftRadius:"10px",
borderTopRightRadius:"10px",
borderBottomLeftRadius:"10px",
borderBottomRightRadius:"10px",
},
})
              // 全宗号 结束属性
              
              // 文档聚合类型 开始属性
              const [documentAggregationTypeState, setdocumentAggregationTypeState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"文档聚合类型",
copyable:false,
disabled:false,
editable:false,
ellipsis:false,
keyboard:false,
underline:false,
style:{gap:"14px",
color:"#000000",
width:"40%",
height:"100%",
display:"flex",
fontSize:"15px",
textAlign:"start",
alignItems:"center",
marginRight:"10px",
flexDirection:"row",
justifyContent:"center",
},
})
              // 文档聚合类型 结束属性
              
              // 请输入文档聚合类型 开始属性
              const [pleaseEnterTheDocumentAggregationTypeState, setpleaseEnterTheDocumentAggregationTypeState] = useState({size:"middle",
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"请输入文档聚合类型",
defaultValue:undefined,
style:{width:"60%",
},
})
              // 请输入文档聚合类型 结束属性
              
              // 全宗号1 开始属性
              const [totalNumber1FvapState, settotalNumber1FvapState] = useState({style:{width:"49%",
height:"60px",
display:"flex",
marginRight:"10px",
backgroundColor:"#ffffff",
borderTopLeftRadius:"10px",
borderTopRightRadius:"10px",
borderBottomLeftRadius:"10px",
borderBottomRightRadius:"10px",
},
})
              // 全宗号1 结束属性
              
              // 原稿类型 开始属性
              const [originalTypeState, setoriginalTypeState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"原稿类型",
copyable:false,
disabled:false,
editable:false,
ellipsis:false,
keyboard:false,
underline:false,
style:{gap:"14px",
color:"#000000",
width:"40%",
height:"100%",
display:"flex",
fontSize:"15px",
textAlign:"start",
alignItems:"center",
marginRight:"10px",
flexDirection:"row",
justifyContent:"center",
},
})
              // 原稿类型 结束属性
              
              // 请输入原稿类型 开始属性
              const [pleaseEnterTheTypeOfOriginalManuscriptState, setpleaseEnterTheTypeOfOriginalManuscriptState] = useState({size:"middle",
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"请输入原稿类型",
defaultValue:undefined,
style:{width:"60%",
},
})
              // 请输入原稿类型 结束属性
              
              // 按钮 开始属性
              const [buttonUmuaState, setbuttonUmuaState] = useState({size:"middle",
type:"primary",
ghost:false,
shape:"default",
danger:false,
children:"提交",
disabled:false,
style:{width:"10%",
height:"60px",
fontSize:"26px",
marginTop:"5%",
fontWeight:600,
marginLeft:"45%",
marginRight:"45%",
borderTopLeftRadius:"10px",
borderTopRightRadius:"10px",
borderBottomLeftRadius:"10px",
borderBottomRightRadius:"10px",
},
})
              // 按钮 结束属性
              return<>
            {/* 容器 */}
            <div
style={{width:containerRdcxState.style.width,
height:containerRdcxState.style.height,
display:containerRdcxState.style.display,
}}
className={`${style.containerRdcx}`}
>
            {/* 导航菜单 */}
            <Antd.Menu
mode={navigationMenuPzxxState.mode}
expandIcon={navigationMenuPzxxState.expandIcon}
style={{width:navigationMenuPzxxState.style.width,
height:navigationMenuPzxxState.style.height,
backgroundColor:navigationMenuPzxxState.style.backgroundColor,
backgroundImage:navigationMenuPzxxState.style.backgroundImage,
backgroundRepeat:navigationMenuPzxxState.style.backgroundRepeat,
borderTopRightRadius:navigationMenuPzxxState.style.borderTopRightRadius,
borderBottomRightRadius:navigationMenuPzxxState.style.borderBottomRightRadius,
}}
className={`${style.navigationMenuPzxx}`}
>
            {/* 容器 */}
            <div
style={{width:containerZoofState.style.width,
height:containerZoofState.style.height,
display:containerZoofState.style.display,
flexWrap:containerZoofState.style.flexWrap,
alignItems:containerZoofState.style.alignItems,
paddingTop:containerZoofState.style.paddingTop,
borderColor:containerZoofState.style.borderColor,
borderStyle:containerZoofState.style.borderStyle,
flexDirection:containerZoofState.style.flexDirection,
justifyContent:containerZoofState.style.justifyContent,
borderBottomWidth:containerZoofState.style.borderBottomWidth,
}}
className={`${style.containerZoof}`}
>
            {/* 图片 */}
            <Antd.Image
alt={pictureInawState.alt}
src={pictureInawState.src}
width={pictureInawState.width}
height={pictureInawState.height}
preview={pictureInawState.preview}
fallback={pictureInawState.fallback}
placeholder={pictureInawState.placeholder}
style={{width:pictureInawState.style.width,
height:pictureInawState.style.height,
marginTop:pictureInawState.style.marginTop,
marginLeft:pictureInawState.style.marginLeft,
}}
className={`${style.pictureInaw}`}
></Antd.Image>
            {/* 图片 */}
            
            {/* 管理员首页 */}
            <Antd.Typography.Text
code={administratorHomepageYhznState.code}
mark={administratorHomepageYhznState.mark}
type={administratorHomepageYhznState.type}
delete={administratorHomepageYhznState.delete}
italic={administratorHomepageYhznState.italic}
strong={administratorHomepageYhznState.strong}
children={administratorHomepageYhznState.children}
copyable={administratorHomepageYhznState.copyable}
disabled={administratorHomepageYhznState.disabled}
editable={administratorHomepageYhznState.editable}
ellipsis={administratorHomepageYhznState.ellipsis}
keyboard={administratorHomepageYhznState.keyboard}
underline={administratorHomepageYhznState.underline}
style={{color:administratorHomepageYhznState.style.color,
width:administratorHomepageYhznState.style.width,
height:administratorHomepageYhznState.style.height,
fontSize:administratorHomepageYhznState.style.fontSize,
textAlign:administratorHomepageYhznState.style.textAlign,
fontWeight:administratorHomepageYhznState.style.fontWeight,
marginLeft:administratorHomepageYhznState.style.marginLeft,
}}
className={`${style.administratorHomepageYhzn}`}
></Antd.Typography.Text>
            {/* 管理员首页 */}
            </div>
            {/* 容器 */}
            
            {/* 档号配置 */}
            <Antd.Menu.Item
key={fileNumberConfigurationUdheState.key}
icon={fileNumberConfigurationUdheState.icon}
danger={fileNumberConfigurationUdheState.danger}
children={fileNumberConfigurationUdheState.children}
disabled={fileNumberConfigurationUdheState.disabled}
style={{color:fileNumberConfigurationUdheState.style.color,
width:fileNumberConfigurationUdheState.style.width,
marginLeft:fileNumberConfigurationUdheState.style.marginLeft,
borderColor:fileNumberConfigurationUdheState.style.borderColor,
borderStyle:fileNumberConfigurationUdheState.style.borderStyle,
marginRight:fileNumberConfigurationUdheState.style.marginRight,
backgroundColor:fileNumberConfigurationUdheState.style.backgroundColor,
borderBottomWidth:fileNumberConfigurationUdheState.style.borderBottomWidth,
borderTopLeftRadius:fileNumberConfigurationUdheState.style.borderTopLeftRadius,
borderTopRightRadius:fileNumberConfigurationUdheState.style.borderTopRightRadius,
borderBottomLeftRadius:fileNumberConfigurationUdheState.style.borderBottomLeftRadius,
borderBottomRightRadius:fileNumberConfigurationUdheState.style.borderBottomRightRadius,
}}
className={`${style.fileNumberConfigurationUdhe}`}
onClick={(eventXpts,) =>clickToConfigureFileNumberQpdf(eventXpts,)}></Antd.Menu.Item>
            {/* 档号配置 */}
            
            {/* 元数据填写 */}
            <Antd.Menu.ItemGroup
title={fillInMetadataEtkfState.title}
style={{color:fillInMetadataEtkfState.style.color,
borderColor:fillInMetadataEtkfState.style.borderColor,
borderStyle:fillInMetadataEtkfState.style.borderStyle,
borderTopWidth:fillInMetadataEtkfState.style.borderTopWidth,
borderLeftWidth:fillInMetadataEtkfState.style.borderLeftWidth,
borderRightWidth:fillInMetadataEtkfState.style.borderRightWidth,
borderBottomWidth:fillInMetadataEtkfState.style.borderBottomWidth,
}}
className={`${style.fillInMetadataEtkf}`}
>
            {/* 元数据内容描述 */}
            <Antd.Menu.Item
key={descriptionOfMetadataContentMjtsState.key}
icon={descriptionOfMetadataContentMjtsState.icon}
danger={descriptionOfMetadataContentMjtsState.danger}
children={descriptionOfMetadataContentMjtsState.children}
disabled={descriptionOfMetadataContentMjtsState.disabled}
style={{color:descriptionOfMetadataContentMjtsState.style.color,
backgroundColor:descriptionOfMetadataContentMjtsState.style.backgroundColor,
}}
className={`${style.descriptionOfMetadataContentMjts}`}
onClick={(eventUyky,) =>whenClickedMetadataContentDescriptionYunk(eventUyky,)}></Antd.Menu.Item>
            {/* 元数据内容描述 */}
            
            {/* 聚合层次 */}
            <Antd.Menu.Item
key={aggregationHierarchyEyeiState.key}
icon={aggregationHierarchyEyeiState.icon}
danger={aggregationHierarchyEyeiState.danger}
children={aggregationHierarchyEyeiState.children}
disabled={aggregationHierarchyEyeiState.disabled}
style={{color:aggregationHierarchyEyeiState.style.color,
backgroundColor:aggregationHierarchyEyeiState.style.backgroundColor,
}}
className={`${style.aggregationHierarchyEyei}`}
onClick={(eventVvis,) =>clickOnAggregateHierarchyDhjj(eventVvis,)}></Antd.Menu.Item>
            {/* 聚合层次 */}
            
            {/* 元数据形式特征 */}
            <Antd.Menu.Item
key={characteristicsOfMetadataFormatNrfpState.key}
icon={characteristicsOfMetadataFormatNrfpState.icon}
danger={characteristicsOfMetadataFormatNrfpState.danger}
children={characteristicsOfMetadataFormatNrfpState.children}
disabled={characteristicsOfMetadataFormatNrfpState.disabled}
style={{color:characteristicsOfMetadataFormatNrfpState.style.color,
backgroundColor:characteristicsOfMetadataFormatNrfpState.style.backgroundColor,
}}
className={`${style.characteristicsOfMetadataFormatNrfp}`}
onClick={(eventPmam,) =>whenClickedMetadataFormatFeaturesRotp(eventPmam,)}></Antd.Menu.Item>
            {/* 元数据形式特征 */}
            
            {/* 元数据存储位置 */}
            <Antd.Menu.Item
key={metadataStorageLocationTsrxState.key}
icon={metadataStorageLocationTsrxState.icon}
danger={metadataStorageLocationTsrxState.danger}
children={metadataStorageLocationTsrxState.children}
disabled={metadataStorageLocationTsrxState.disabled}
style={{color:metadataStorageLocationTsrxState.style.color,
}}
className={`${style.metadataStorageLocationTsrx}`}
onClick={(eventJubx,) =>whenClickedMetadataStorageLocationVdhk(eventJubx,)}></Antd.Menu.Item>
            {/* 元数据存储位置 */}
            
            {/* 元数据电子签名 */}
            <Antd.Menu.Item
key={metadataElectronicSignatureMvwcState.key}
icon={metadataElectronicSignatureMvwcState.icon}
danger={metadataElectronicSignatureMvwcState.danger}
children={metadataElectronicSignatureMvwcState.children}
disabled={metadataElectronicSignatureMvwcState.disabled}
style={{color:metadataElectronicSignatureMvwcState.style.color,
}}
className={`${style.metadataElectronicSignatureMvwc}`}
onClick={(eventAuvj,) =>whenClickedMetadataElectronicSignatureYwzj(eventAuvj,)}></Antd.Menu.Item>
            {/* 元数据电子签名 */}
            
            {/* 元数据来源 */}
            <Antd.Menu.Item
key={sourceOfMetadataPgouState.key}
icon={sourceOfMetadataPgouState.icon}
danger={sourceOfMetadataPgouState.danger}
children={sourceOfMetadataPgouState.children}
disabled={sourceOfMetadataPgouState.disabled}
style={{color:sourceOfMetadataPgouState.style.color,
}}
className={`${style.sourceOfMetadataPgou}`}
onClick={(eventPqko,) =>whenClickedMetadataSourceKskn(eventPqko,)}></Antd.Menu.Item>
            {/* 元数据来源 */}
            
            {/* 档号 */}
            <Antd.Menu.Item
key={referenceKkepState.key}
icon={referenceKkepState.icon}
danger={referenceKkepState.danger}
children={referenceKkepState.children}
disabled={referenceKkepState.disabled}
style={{color:referenceKkepState.style.color,
}}
className={`${style.referenceKkep}`}
onClick={(eventIlux,) =>clickTimeFileNumberOdxi(eventIlux,)}></Antd.Menu.Item>
            {/* 档号 */}
            
            {/* 生成文件 */}
            <Antd.Menu.Item
key={generateFileUrdoState.key}
icon={generateFileUrdoState.icon}
danger={generateFileUrdoState.danger}
children={generateFileUrdoState.children}
disabled={generateFileUrdoState.disabled}
style={{color:generateFileUrdoState.style.color,
}}
className={`${style.generateFileUrdo}`}
></Antd.Menu.Item>
            {/* 生成文件 */}
            </Antd.Menu.ItemGroup>
            {/* 元数据填写 */}
            
            {/* 日志审核 */}
            <Antd.Menu.ItemGroup
title={logAuditBhooState.title}
style={{borderColor:logAuditBhooState.style.borderColor,
borderStyle:logAuditBhooState.style.borderStyle,
borderTopWidth:logAuditBhooState.style.borderTopWidth,
borderLeftWidth:logAuditBhooState.style.borderLeftWidth,
borderRightWidth:logAuditBhooState.style.borderRightWidth,
borderBottomWidth:logAuditBhooState.style.borderBottomWidth,
}}
className={`${style.logAuditBhoo}`}
>
            {/* 待审核日志 */}
            <Antd.Menu.Item
key={pendingAuditLogOkpbState.key}
icon={pendingAuditLogOkpbState.icon}
danger={pendingAuditLogOkpbState.danger}
children={pendingAuditLogOkpbState.children}
disabled={pendingAuditLogOkpbState.disabled}
style={{color:pendingAuditLogOkpbState.style.color,
}}
className={`${style.pendingAuditLogOkpb}`}
onClick={(eventZydu,) =>whenClickedPendingAuditLogZmbc(eventZydu,)}></Antd.Menu.Item>
            {/* 待审核日志 */}
            
            {/* 已审核日志 */}
            <Antd.Menu.Item
key={verifiedLogsYsorState.key}
icon={verifiedLogsYsorState.icon}
danger={verifiedLogsYsorState.danger}
children={verifiedLogsYsorState.children}
disabled={verifiedLogsYsorState.disabled}
style={{color:verifiedLogsYsorState.style.color,
}}
className={`${style.verifiedLogsYsor}`}
onClick={(eventQjim,) =>whenClickedReviewedLogsIkkw(eventQjim,)}></Antd.Menu.Item>
            {/* 已审核日志 */}
            </Antd.Menu.ItemGroup>
            {/* 日志审核 */}
            </Antd.Menu>
            {/* 导航菜单 */}
            
            {/* 两栏容器 */}
            <div
style={{width:twoColumnContainerBxlkState.style.width,
display:twoColumnContainerBxlkState.style.display,
flexDirection:twoColumnContainerBxlkState.style.flexDirection,
justifyContent:twoColumnContainerBxlkState.style.justifyContent,
}}
className={`${style.twoColumnContainerBxlk}`}
>
            {/* 容器 */}
            <div
style={{width:containerGrpyState.style.width,
height:containerGrpyState.style.height,
backgroundColor:containerGrpyState.style.backgroundColor,
}}
className={`${style.containerGrpy}`}
>
            {/* 容器 */}
            <div
style={{width:containerFvwcState.style.width,
height:containerFvwcState.style.height,
backgroundColor:containerFvwcState.style.backgroundColor,
}}
className={`${style.containerFvwc}`}
>
            {/* 两栏容器 */}
            <div
style={{width:twoColumnContainerVxtyState.style.width,
display:twoColumnContainerVxtyState.style.display,
flexDirection:twoColumnContainerVxtyState.style.flexDirection,
}}
className={`${style.twoColumnContainerVxty}`}
>
            {/* 容器 */}
            <div
style={{width:containerZabmState.style.width,
}}
className={`${style.containerZabm}`}
>
            {/* 两栏容器 */}
            <div
style={{width:twoColumnContainerRffrState.style.width,
display:twoColumnContainerRffrState.style.display,
flexDirection:twoColumnContainerRffrState.style.flexDirection,
}}
className={`${style.twoColumnContainerRffr}`}
>
            {/* 系统名称 */}
            <div
style={{gap:systemNameGbgnState.style.gap,
color:systemNameGbgnState.style.color,
width:systemNameGbgnState.style.width,
height:systemNameGbgnState.style.height,
display:systemNameGbgnState.style.display,
fontSize:systemNameGbgnState.style.fontSize,
marginTop:systemNameGbgnState.style.marginTop,
textAlign:systemNameGbgnState.style.textAlign,
alignItems:systemNameGbgnState.style.alignItems,
borderColor:systemNameGbgnState.style.borderColor,
borderStyle:systemNameGbgnState.style.borderStyle,
flexDirection:systemNameGbgnState.style.flexDirection,
justifyContent:systemNameGbgnState.style.justifyContent,
backgroundColor:systemNameGbgnState.style.backgroundColor,
borderBottomWidth:systemNameGbgnState.style.borderBottomWidth,
}}
className={`${style.systemNameGbgn}`}
>
            {/* 系统名称 */}
            <Antd.Typography.Text
code={systemNameTntsState.code}
mark={systemNameTntsState.mark}
type={systemNameTntsState.type}
delete={systemNameTntsState.delete}
italic={systemNameTntsState.italic}
strong={systemNameTntsState.strong}
children={systemNameTntsState.children}
copyable={systemNameTntsState.copyable}
disabled={systemNameTntsState.disabled}
editable={systemNameTntsState.editable}
ellipsis={systemNameTntsState.ellipsis}
keyboard={systemNameTntsState.keyboard}
underline={systemNameTntsState.underline}
style={{color:systemNameTntsState.style.color,
display:systemNameTntsState.style.display,
fontSize:systemNameTntsState.style.fontSize,
textAlign:systemNameTntsState.style.textAlign,
alignItems:systemNameTntsState.style.alignItems,
fontWeight:systemNameTntsState.style.fontWeight,
justifyContent:systemNameTntsState.style.justifyContent,
}}
className={`${style.systemNameTnts}`}
></Antd.Typography.Text>
            {/* 系统名称 */}
            </div>
            {/* 系统名称 */}
            
            {/* 容器 */}
            <div
style={{width:containerHztwState.style.width,
height:containerHztwState.style.height,
display:containerHztwState.style.display,
flexWrap:containerHztwState.style.flexWrap,
alignItems:containerHztwState.style.alignItems,
borderColor:containerHztwState.style.borderColor,
borderStyle:containerHztwState.style.borderStyle,
flexDirection:containerHztwState.style.flexDirection,
justifyContent:containerHztwState.style.justifyContent,
backgroundColor:containerHztwState.style.backgroundColor,
}}
className={`${style.containerHztw}`}
>
            {/* 图标 */}
            <AntdIcon.UserOutlined
spin={iconZwpeState.spin}
rotate={iconZwpeState.rotate}
twoToneColor={iconZwpeState.twoToneColor}
style={{color:iconZwpeState.style.color,
width:iconZwpeState.style.width,
height:iconZwpeState.style.height,
fontSize:iconZwpeState.style.fontSize,
marginTop:iconZwpeState.style.marginTop,
fontWeight:iconZwpeState.style.fontWeight,
marginRight:iconZwpeState.style.marginRight,
}}
className={`${style.iconZwpe}`}
></AntdIcon.UserOutlined>
            {/* 图标 */}
            
            {/* 退出按钮 */}
            <Antd.Button
icon={exitButtonZzdkState.icon}
size={exitButtonZzdkState.size}
type={exitButtonZzdkState.type}
ghost={exitButtonZzdkState.ghost}
shape={exitButtonZzdkState.shape}
danger={exitButtonZzdkState.danger}
loading={exitButtonZzdkState.loading}
children={exitButtonZzdkState.children}
disabled={exitButtonZzdkState.disabled}
style={{fontSize:exitButtonZzdkState.style.fontSize,
fontWeight:exitButtonZzdkState.style.fontWeight,
marginRight:exitButtonZzdkState.style.marginRight,
marginBottom:exitButtonZzdkState.style.marginBottom,
backgroundColor:exitButtonZzdkState.style.backgroundColor,
}}
className={`${style.exitButtonZzdk}`}
onClick={(eventWguk,) =>clickExitButtonPumf(eventWguk,)}></Antd.Button>
            {/* 退出按钮 */}
            </div>
            {/* 容器 */}
            </div>
            {/* 两栏容器 */}
            </div>
            {/* 容器 */}
            </div>
            {/* 两栏容器 */}
            </div>
            {/* 容器 */}
            </div>
            {/* 容器 */}
            
            {/* 请输入说明题名文字 */}
            <div
style={{width:pleaseEnterExplanatoryTitleTextGqctState.style.width,
height:pleaseEnterExplanatoryTitleTextGqctState.style.height,
display:pleaseEnterExplanatoryTitleTextGqctState.style.display,
marginTop:pleaseEnterExplanatoryTitleTextGqctState.style.marginTop,
borderColor:pleaseEnterExplanatoryTitleTextGqctState.style.borderColor,
borderStyle:pleaseEnterExplanatoryTitleTextGqctState.style.borderStyle,
paddingLeft:pleaseEnterExplanatoryTitleTextGqctState.style.paddingLeft,
paddingRight:pleaseEnterExplanatoryTitleTextGqctState.style.paddingRight,
flexDirection:pleaseEnterExplanatoryTitleTextGqctState.style.flexDirection,
backgroundColor:pleaseEnterExplanatoryTitleTextGqctState.style.backgroundColor,
}}
className={`${style.pleaseEnterExplanatoryTitleTextGqct}`}
>
            {/* 电子文件号 */}
            <div
style={{width:electronicFileNumberRjoiState.style.width,
height:electronicFileNumberRjoiState.style.height,
display:electronicFileNumberRjoiState.style.display,
marginTop:electronicFileNumberRjoiState.style.marginTop,
marginBottom:electronicFileNumberRjoiState.style.marginBottom,
justifyContent:electronicFileNumberRjoiState.style.justifyContent,
borderTopLeftRadius:electronicFileNumberRjoiState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumberRjoiState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumberRjoiState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumberRjoiState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumberRjoi}`}
>
            {/* 电子文件号前缀 */}
            <div
style={{width:electronicFileNumberPrefixLdibState.style.width,
height:electronicFileNumberPrefixLdibState.style.height,
display:electronicFileNumberPrefixLdibState.style.display,
alignItems:electronicFileNumberPrefixLdibState.style.alignItems,
marginRight:electronicFileNumberPrefixLdibState.style.marginRight,
justifyContent:electronicFileNumberPrefixLdibState.style.justifyContent,
backgroundColor:electronicFileNumberPrefixLdibState.style.backgroundColor,
borderTopLeftRadius:electronicFileNumberPrefixLdibState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumberPrefixLdibState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumberPrefixLdibState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumberPrefixLdibState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumberPrefixLdib}`}
>
            {/* 电子文件号 */}
            <Antd.Typography.Text
code={electronicFileNumberQktiState.code}
mark={electronicFileNumberQktiState.mark}
type={electronicFileNumberQktiState.type}
delete={electronicFileNumberQktiState.delete}
italic={electronicFileNumberQktiState.italic}
strong={electronicFileNumberQktiState.strong}
children={electronicFileNumberQktiState.children}
copyable={electronicFileNumberQktiState.copyable}
disabled={electronicFileNumberQktiState.disabled}
editable={electronicFileNumberQktiState.editable}
ellipsis={electronicFileNumberQktiState.ellipsis}
keyboard={electronicFileNumberQktiState.keyboard}
underline={electronicFileNumberQktiState.underline}
style={{gap:electronicFileNumberQktiState.style.gap,
color:electronicFileNumberQktiState.style.color,
width:electronicFileNumberQktiState.style.width,
height:electronicFileNumberQktiState.style.height,
display:electronicFileNumberQktiState.style.display,
fontSize:electronicFileNumberQktiState.style.fontSize,
textAlign:electronicFileNumberQktiState.style.textAlign,
alignItems:electronicFileNumberQktiState.style.alignItems,
marginRight:electronicFileNumberQktiState.style.marginRight,
flexDirection:electronicFileNumberQktiState.style.flexDirection,
justifyContent:electronicFileNumberQktiState.style.justifyContent,
}}
className={`${style.electronicFileNumberQkti}`}
></Antd.Typography.Text>
            {/* 电子文件号 */}
            
            {/* 请输入电子文件号 */}
            <Antd.Input
size={pleaseEnterTheElectronicFileNumberEbddState.size}
value={pleaseEnterTheElectronicFileNumberEbddState.value}
prefix={pleaseEnterTheElectronicFileNumberEbddState.prefix}
bordered={pleaseEnterTheElectronicFileNumberEbddState.bordered}
disabled={pleaseEnterTheElectronicFileNumberEbddState.disabled}
maxLength={pleaseEnterTheElectronicFileNumberEbddState.maxLength}
showCount={pleaseEnterTheElectronicFileNumberEbddState.showCount}
addonAfter={pleaseEnterTheElectronicFileNumberEbddState.addonAfter}
allowClear={pleaseEnterTheElectronicFileNumberEbddState.allowClear}
addonBefore={pleaseEnterTheElectronicFileNumberEbddState.addonBefore}
placeholder={pleaseEnterTheElectronicFileNumberEbddState.placeholder}
defaultValue={pleaseEnterTheElectronicFileNumberEbddState.defaultValue}
style={{width:pleaseEnterTheElectronicFileNumberEbddState.style.width,
height:pleaseEnterTheElectronicFileNumberEbddState.style.height,
borderStyle:pleaseEnterTheElectronicFileNumberEbddState.style.borderStyle,
}}
className={`${style.pleaseEnterTheElectronicFileNumberEbdd}`}
></Antd.Input>
            {/* 请输入电子文件号 */}
            </div>
            {/* 电子文件号前缀 */}
            </div>
            {/* 电子文件号 */}
            
            {/* 并列题名 */}
            <div
style={{width:parallelTitleLixaState.style.width,
height:parallelTitleLixaState.style.height,
display:parallelTitleLixaState.style.display,
marginTop:parallelTitleLixaState.style.marginTop,
marginLeft:parallelTitleLixaState.style.marginLeft,
marginBottom:parallelTitleLixaState.style.marginBottom,
borderTopLeftRadius:parallelTitleLixaState.style.borderTopLeftRadius,
borderTopRightRadius:parallelTitleLixaState.style.borderTopRightRadius,
borderBottomLeftRadius:parallelTitleLixaState.style.borderBottomLeftRadius,
borderBottomRightRadius:parallelTitleLixaState.style.borderBottomRightRadius,
}}
className={`${style.parallelTitleLixa}`}
>
            {/* 全宗号 */}
            <div
style={{width:completeAccountNumberWonhState.style.width,
height:completeAccountNumberWonhState.style.height,
display:completeAccountNumberWonhState.style.display,
marginRight:completeAccountNumberWonhState.style.marginRight,
backgroundColor:completeAccountNumberWonhState.style.backgroundColor,
borderTopLeftRadius:completeAccountNumberWonhState.style.borderTopLeftRadius,
borderTopRightRadius:completeAccountNumberWonhState.style.borderTopRightRadius,
borderBottomLeftRadius:completeAccountNumberWonhState.style.borderBottomLeftRadius,
borderBottomRightRadius:completeAccountNumberWonhState.style.borderBottomRightRadius,
}}
className={`${style.completeAccountNumberWonh}`}
>
            {/* 文档聚合类型 */}
            <Antd.Typography.Text
code={documentAggregationTypeState.code}
mark={documentAggregationTypeState.mark}
type={documentAggregationTypeState.type}
delete={documentAggregationTypeState.delete}
italic={documentAggregationTypeState.italic}
strong={documentAggregationTypeState.strong}
children={documentAggregationTypeState.children}
copyable={documentAggregationTypeState.copyable}
disabled={documentAggregationTypeState.disabled}
editable={documentAggregationTypeState.editable}
ellipsis={documentAggregationTypeState.ellipsis}
keyboard={documentAggregationTypeState.keyboard}
underline={documentAggregationTypeState.underline}
style={{gap:documentAggregationTypeState.style.gap,
color:documentAggregationTypeState.style.color,
width:documentAggregationTypeState.style.width,
height:documentAggregationTypeState.style.height,
display:documentAggregationTypeState.style.display,
fontSize:documentAggregationTypeState.style.fontSize,
textAlign:documentAggregationTypeState.style.textAlign,
alignItems:documentAggregationTypeState.style.alignItems,
marginRight:documentAggregationTypeState.style.marginRight,
flexDirection:documentAggregationTypeState.style.flexDirection,
justifyContent:documentAggregationTypeState.style.justifyContent,
}}
className={`${style.documentAggregationType}`}
></Antd.Typography.Text>
            {/* 文档聚合类型 */}
            
            {/* 请输入文档聚合类型 */}
            <Antd.Input
size={pleaseEnterTheDocumentAggregationTypeState.size}
prefix={pleaseEnterTheDocumentAggregationTypeState.prefix}
bordered={pleaseEnterTheDocumentAggregationTypeState.bordered}
disabled={pleaseEnterTheDocumentAggregationTypeState.disabled}
maxLength={pleaseEnterTheDocumentAggregationTypeState.maxLength}
showCount={pleaseEnterTheDocumentAggregationTypeState.showCount}
addonAfter={pleaseEnterTheDocumentAggregationTypeState.addonAfter}
allowClear={pleaseEnterTheDocumentAggregationTypeState.allowClear}
addonBefore={pleaseEnterTheDocumentAggregationTypeState.addonBefore}
placeholder={pleaseEnterTheDocumentAggregationTypeState.placeholder}
defaultValue={pleaseEnterTheDocumentAggregationTypeState.defaultValue}
style={{width:pleaseEnterTheDocumentAggregationTypeState.style.width,
}}
className={`${style.pleaseEnterTheDocumentAggregationType}`}
></Antd.Input>
            {/* 请输入文档聚合类型 */}
            </div>
            {/* 全宗号 */}
            
            {/* 全宗号1 */}
            <div
style={{width:totalNumber1FvapState.style.width,
height:totalNumber1FvapState.style.height,
display:totalNumber1FvapState.style.display,
marginRight:totalNumber1FvapState.style.marginRight,
backgroundColor:totalNumber1FvapState.style.backgroundColor,
borderTopLeftRadius:totalNumber1FvapState.style.borderTopLeftRadius,
borderTopRightRadius:totalNumber1FvapState.style.borderTopRightRadius,
borderBottomLeftRadius:totalNumber1FvapState.style.borderBottomLeftRadius,
borderBottomRightRadius:totalNumber1FvapState.style.borderBottomRightRadius,
}}
className={`${style.totalNumber1Fvap}`}
>
            {/* 原稿类型 */}
            <Antd.Typography.Text
code={originalTypeState.code}
mark={originalTypeState.mark}
type={originalTypeState.type}
delete={originalTypeState.delete}
italic={originalTypeState.italic}
strong={originalTypeState.strong}
children={originalTypeState.children}
copyable={originalTypeState.copyable}
disabled={originalTypeState.disabled}
editable={originalTypeState.editable}
ellipsis={originalTypeState.ellipsis}
keyboard={originalTypeState.keyboard}
underline={originalTypeState.underline}
style={{gap:originalTypeState.style.gap,
color:originalTypeState.style.color,
width:originalTypeState.style.width,
height:originalTypeState.style.height,
display:originalTypeState.style.display,
fontSize:originalTypeState.style.fontSize,
textAlign:originalTypeState.style.textAlign,
alignItems:originalTypeState.style.alignItems,
marginRight:originalTypeState.style.marginRight,
flexDirection:originalTypeState.style.flexDirection,
justifyContent:originalTypeState.style.justifyContent,
}}
className={`${style.originalType}`}
></Antd.Typography.Text>
            {/* 原稿类型 */}
            
            {/* 请输入原稿类型 */}
            <Antd.Input
size={pleaseEnterTheTypeOfOriginalManuscriptState.size}
prefix={pleaseEnterTheTypeOfOriginalManuscriptState.prefix}
bordered={pleaseEnterTheTypeOfOriginalManuscriptState.bordered}
disabled={pleaseEnterTheTypeOfOriginalManuscriptState.disabled}
maxLength={pleaseEnterTheTypeOfOriginalManuscriptState.maxLength}
showCount={pleaseEnterTheTypeOfOriginalManuscriptState.showCount}
addonAfter={pleaseEnterTheTypeOfOriginalManuscriptState.addonAfter}
allowClear={pleaseEnterTheTypeOfOriginalManuscriptState.allowClear}
addonBefore={pleaseEnterTheTypeOfOriginalManuscriptState.addonBefore}
placeholder={pleaseEnterTheTypeOfOriginalManuscriptState.placeholder}
defaultValue={pleaseEnterTheTypeOfOriginalManuscriptState.defaultValue}
style={{width:pleaseEnterTheTypeOfOriginalManuscriptState.style.width,
}}
className={`${style.pleaseEnterTheTypeOfOriginalManuscript}`}
></Antd.Input>
            {/* 请输入原稿类型 */}
            </div>
            {/* 全宗号1 */}
            </div>
            {/* 并列题名 */}
            
            {/* 按钮 */}
            <Antd.Button
size={buttonUmuaState.size}
type={buttonUmuaState.type}
ghost={buttonUmuaState.ghost}
shape={buttonUmuaState.shape}
danger={buttonUmuaState.danger}
children={buttonUmuaState.children}
disabled={buttonUmuaState.disabled}
style={{width:buttonUmuaState.style.width,
height:buttonUmuaState.style.height,
fontSize:buttonUmuaState.style.fontSize,
marginTop:buttonUmuaState.style.marginTop,
fontWeight:buttonUmuaState.style.fontWeight,
marginLeft:buttonUmuaState.style.marginLeft,
marginRight:buttonUmuaState.style.marginRight,
borderTopLeftRadius:buttonUmuaState.style.borderTopLeftRadius,
borderTopRightRadius:buttonUmuaState.style.borderTopRightRadius,
borderBottomLeftRadius:buttonUmuaState.style.borderBottomLeftRadius,
borderBottomRightRadius:buttonUmuaState.style.borderBottomRightRadius,
}}
className={`${style.buttonUmua}`}
></Antd.Button>
            {/* 按钮 */}
            </div>
            {/* 请输入说明题名文字 */}
            </div>
            {/* 两栏容器 */}
            </div>
            {/* 容器 */}
            </>}
export default CharacteristicsOfMetadataFormatZhhg
export { CharacteristicsOfMetadataFormatZhhg }