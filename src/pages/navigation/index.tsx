import style from './index.module.scss'
import { useState } from 'react'
import * as Antd from '@/components/antd'
import { routes } from '@/router/index'
import { getParentInfoList } from '@/utils'
import { useNavigate } from 'react-router-dom'
import * as AntdIcon from '@ant-design/icons'
// 导航
              const Navigation = () => {
const navigate = useNavigate()
// 点击时-档号配置
          const clickToConfigureFileNumber = (eventSomu,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageDano").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据内容描述
          const whenClickedMetadataContentDescription = (eventBtoz,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageJzod").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-聚合层次
          const clickOnAggregateHierarchyHfrx = (eventWslx,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageVomd").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据形式特征
          const whenClickedMetadataFormatFeaturesKhav = (eventJnfk,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageWcoq").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据存储位置
          const whenClickedMetadataStorageLocationUdmn = (eventGfeb,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageDbgh").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据电子签名
          const whenClickedMetadataElectronicSignatureCujv = (eventUrxi,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageWsbf").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据来源
          const whenClickedMetadataSourceDawa = (eventUwfm,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageWsbf").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-档号
          const clickTimeFileNumberIkqi = (eventJqym,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageNfdu").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-待审核日志
          const whenClickedPendingAuditLog = (eventNcnj,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageZuvc").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-已审核日志
          const whenClickedReviewedLogs = (eventPstj,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageStsm").slice(1).map(item => item.path).join('/')}`)
}
// 点击-退出按钮
          const clickExitButton = (eventTawi,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "defaultPageFhue").slice(1).map(item => item.path).join('/')}`)
}

              // 容器 开始属性
              const [containerVhywState, setcontainerVhywState] = useState({style:{width:"100vw",
height:"100vh",
display:"flex",
},
})
              // 容器 结束属性
              
              // 导航菜单 开始属性
              const [navigationMenuIcytState, setnavigationMenuIcytState] = useState({mode:"vertical",
expandIcon:undefined,
style:{width:"14%",
height:"100vh",
backgroundColor:"#336395",
backgroundImage:undefined,
backgroundRepeat:"repeat",
borderTopRightRadius:"0px",
borderBottomRightRadius:"0px",
},
})
              // 导航菜单 结束属性
              
              // 容器 开始属性
              const [containerDxqyState, setcontainerDxqyState] = useState({style:{width:undefined,
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
              const [pictureLipvState, setpictureLipvState] = useState({alt:undefined,
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
              const [administratorHomepageUgzcState, setadministratorHomepageUgzcState] = useState({code:false,
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
fontSize:"20px",
fontWeight:600,
marginLeft:"-20px",
paddingLeft:"10px",
paddingRight:"10px",
},
})
              // 管理员首页 结束属性
              
              // 档号配置 开始属性
              const [fileNumberConfigurationState, setfileNumberConfigurationState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"档号配置",
disabled:false,
style:{color:"#f0f8ff",
width:"100%",
marginTop:"0px",
marginLeft:"0px",
borderColor:"#4e89c2",
borderStyle:"groove",
marginRight:"0px",
paddingLeft:"16px",
marginBottom:"0px",
paddingRight:undefined,
borderBottomWidth:"5px",
borderTopLeftRadius:"0px",
borderTopRightRadius:"0px",
borderBottomLeftRadius:"0px",
borderBottomRightRadius:"0px",
},
})
              // 档号配置 结束属性
              
              // 元数据填写 开始属性
              const [fillInMetadataPqxaState, setfillInMetadataPqxaState] = useState({title:"元数据填写",
style:{color:"#f0f8ff",
width:undefined,
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
              const [descriptionOfMetadataContentInqsState, setdescriptionOfMetadataContentInqsState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据内容描述",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 元数据内容描述 结束属性
              
              // 聚合层次 开始属性
              const [aggregationHierarchyState, setaggregationHierarchyState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"聚合层次",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 聚合层次 结束属性
              
              // 元数据形式特征 开始属性
              const [characteristicsOfMetadataFormatState, setcharacteristicsOfMetadataFormatState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据形式特征",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 元数据形式特征 结束属性
              
              // 元数据存储位置 开始属性
              const [metadataStorageLocationState, setmetadataStorageLocationState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据存储位置",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 元数据存储位置 结束属性
              
              // 元数据电子签名 开始属性
              const [metadataElectronicSignatureState, setmetadataElectronicSignatureState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据电子签名",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 元数据电子签名 结束属性
              
              // 元数据来源 开始属性
              const [sourceOfMetadataState, setsourceOfMetadataState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据来源",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 元数据来源 结束属性
              
              // 档号 开始属性
              const [referenceState, setreferenceState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"档号",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 档号 结束属性
              
              // 生成文件 开始属性
              const [generateFileState, setgenerateFileState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"生成文件",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 生成文件 结束属性
              
              // 日志审核 开始属性
              const [logAuditXbsyState, setlogAuditXbsyState] = useState({title:"日志审核",
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
              const [pendingAuditLogLpeyState, setpendingAuditLogLpeyState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"待审核日志",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 待审核日志 结束属性
              
              // 已审核日志 开始属性
              const [verifiedLogsState, setverifiedLogsState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"已审核日志",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 已审核日志 结束属性
              
              // 两栏容器 开始属性
              const [twoColumnContainerState, settwoColumnContainerState] = useState({style:{width:"86%",
display:"flex",
flexDirection:"column",
justifyContent:"center",
},
})
              // 两栏容器 结束属性
              
              // 容器 开始属性
              const [containerGlgaState, setcontainerGlgaState] = useState({style:{width:"100%",
height:"9%",
backgroundColor:"#ffffff",
},
})
              // 容器 结束属性
              
              // 两栏容器 开始属性
              const [twoColumnContainerEtiiState, settwoColumnContainerEtiiState] = useState({style:{width:"100%",
display:"flex",
flexDirection:"column",
},
})
              // 两栏容器 结束属性
              
              // 系统名称 开始属性
              const [systemNameState, setsystemNameState] = useState({style:{gap:"14px",
color:"#f0f8ff",
width:"100%",
height:"40px",
display:"flex",
fontSize:"22px",
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
              const [systemNameAwjrState, setsystemNameAwjrState] = useState({code:false,
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
              const [containerDazxState, setcontainerDazxState] = useState({style:{width:"100%",
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
              const [iconIyklState, seticonIyklState] = useState({spin:false,
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
              const [exitButtonState, setexitButtonState] = useState({icon:undefined,
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
              
              // 容器 开始属性
              const [containerOzmvState, setcontainerOzmvState] = useState({style:{width:"100%",
height:"91%",
backgroundColor:"#dcdcdc",
},
})
              // 容器 结束属性
              
              // 两栏容器 开始属性
              const [twoColumnContainerZhztState, settwoColumnContainerZhztState] = useState({style:{width:"100%",
height:"100%",
display:"flex",
marginTop:"-5px",
flexDirection:"column-reverse",
backgroundColor:undefined,
backgroundImage:"linear-gradient(rgb(202, 212, 221),rgb(20, 73, 125))",
},
})
              // 两栏容器 结束属性
              
              // 中间容器 开始属性
              const [intermediateContainerState, setintermediateContainerState] = useState({style:{height:"100%",
display:"flex",
alignItems:"flex-start",
flexDirection:"row",
justifyContent:"flex-start",
},
})
              // 中间容器 结束属性
              
              // 底部容器 开始属性
              const [bottomContainerState, setbottomContainerState] = useState({style:{width:"100%",
height:"5%",
marginBottom:"-5px",
backgroundColor:"#336395",
},
})
              // 底部容器 结束属性
              
              // 图片1 开始属性
              const [pictureBzcjState, setpictureBzcjState] = useState({alt:undefined,
src:"https://img.shanhuyun.cn/customer_resource/4c6c945c621d4fbdb64cba2dd3a7264e.png",
width:100,
height:100,
preview:false,
fallback:"https://img.xl-ai.com/shanhuyun/others/%E5%8A%A0%E8%BD%BD%E5%A4%B1%E8%B4%A5.jpeg",
placeholder:undefined,
style:{width:"500px",
height:"500px",
marginTop:"200px",
marginLeft:"500%",
},
})
              // 图片1 结束属性
              
              // 图片2 开始属性
              const [pictureHtkgState, setpictureHtkgState] = useState({alt:undefined,
src:"https://img.shanhuyun.cn/customer_resource/3f47d259fa46433e82f50555eb67eb2a.png",
width:100,
height:100,
preview:false,
fallback:"https://img.xl-ai.com/shanhuyun/others/%E5%8A%A0%E8%BD%BD%E5%A4%B1%E8%B4%A5.jpeg",
placeholder:undefined,
style:{top:undefined,
right:undefined,
width:"400px",
height:"400px",
display:"flex",
position:"relative",
marginTop:"200px",
marginRight:"20%",
},
})
              // 图片2 结束属性
              return<>
            {/* 容器 */}
            <div
style={{width:containerVhywState.style.width,
height:containerVhywState.style.height,
display:containerVhywState.style.display,
}}
className={`${style.containerVhyw}`}
>
            {/* 导航菜单 */}
            <Antd.Menu
mode={navigationMenuIcytState.mode}
expandIcon={navigationMenuIcytState.expandIcon}
style={{width:navigationMenuIcytState.style.width,
height:navigationMenuIcytState.style.height,
backgroundColor:navigationMenuIcytState.style.backgroundColor,
backgroundImage:navigationMenuIcytState.style.backgroundImage,
backgroundRepeat:navigationMenuIcytState.style.backgroundRepeat,
borderTopRightRadius:navigationMenuIcytState.style.borderTopRightRadius,
borderBottomRightRadius:navigationMenuIcytState.style.borderBottomRightRadius,
}}
className={`${style.navigationMenuIcyt}`}
>
            {/* 容器 */}
            <div
style={{width:containerDxqyState.style.width,
height:containerDxqyState.style.height,
display:containerDxqyState.style.display,
flexWrap:containerDxqyState.style.flexWrap,
alignItems:containerDxqyState.style.alignItems,
paddingTop:containerDxqyState.style.paddingTop,
borderColor:containerDxqyState.style.borderColor,
borderStyle:containerDxqyState.style.borderStyle,
flexDirection:containerDxqyState.style.flexDirection,
justifyContent:containerDxqyState.style.justifyContent,
borderBottomWidth:containerDxqyState.style.borderBottomWidth,
}}
className={`${style.containerDxqy}`}
>
            {/* 图片 */}
            <Antd.Image
alt={pictureLipvState.alt}
src={pictureLipvState.src}
width={pictureLipvState.width}
height={pictureLipvState.height}
preview={pictureLipvState.preview}
fallback={pictureLipvState.fallback}
placeholder={pictureLipvState.placeholder}
style={{width:pictureLipvState.style.width,
height:pictureLipvState.style.height,
marginTop:pictureLipvState.style.marginTop,
marginLeft:pictureLipvState.style.marginLeft,
}}
className={`${style.pictureLipv}`}
></Antd.Image>
            {/* 图片 */}
            
            {/* 管理员首页 */}
            <Antd.Typography.Text
code={administratorHomepageUgzcState.code}
mark={administratorHomepageUgzcState.mark}
type={administratorHomepageUgzcState.type}
delete={administratorHomepageUgzcState.delete}
italic={administratorHomepageUgzcState.italic}
strong={administratorHomepageUgzcState.strong}
children={administratorHomepageUgzcState.children}
copyable={administratorHomepageUgzcState.copyable}
disabled={administratorHomepageUgzcState.disabled}
editable={administratorHomepageUgzcState.editable}
ellipsis={administratorHomepageUgzcState.ellipsis}
keyboard={administratorHomepageUgzcState.keyboard}
underline={administratorHomepageUgzcState.underline}
style={{color:administratorHomepageUgzcState.style.color,
fontSize:administratorHomepageUgzcState.style.fontSize,
fontWeight:administratorHomepageUgzcState.style.fontWeight,
marginLeft:administratorHomepageUgzcState.style.marginLeft,
paddingLeft:administratorHomepageUgzcState.style.paddingLeft,
paddingRight:administratorHomepageUgzcState.style.paddingRight,
}}
className={`${style.administratorHomepageUgzc}`}
></Antd.Typography.Text>
            {/* 管理员首页 */}
            </div>
            {/* 容器 */}
            
            {/* 档号配置 */}
            <Antd.Menu.Item
key={fileNumberConfigurationState.key}
icon={fileNumberConfigurationState.icon}
danger={fileNumberConfigurationState.danger}
children={fileNumberConfigurationState.children}
disabled={fileNumberConfigurationState.disabled}
style={{color:fileNumberConfigurationState.style.color,
width:fileNumberConfigurationState.style.width,
marginTop:fileNumberConfigurationState.style.marginTop,
marginLeft:fileNumberConfigurationState.style.marginLeft,
borderColor:fileNumberConfigurationState.style.borderColor,
borderStyle:fileNumberConfigurationState.style.borderStyle,
marginRight:fileNumberConfigurationState.style.marginRight,
paddingLeft:fileNumberConfigurationState.style.paddingLeft,
marginBottom:fileNumberConfigurationState.style.marginBottom,
paddingRight:fileNumberConfigurationState.style.paddingRight,
borderBottomWidth:fileNumberConfigurationState.style.borderBottomWidth,
borderTopLeftRadius:fileNumberConfigurationState.style.borderTopLeftRadius,
borderTopRightRadius:fileNumberConfigurationState.style.borderTopRightRadius,
borderBottomLeftRadius:fileNumberConfigurationState.style.borderBottomLeftRadius,
borderBottomRightRadius:fileNumberConfigurationState.style.borderBottomRightRadius,
}}
className={`${style.fileNumberConfiguration}`}
onClick={(eventSomu,) =>clickToConfigureFileNumber(eventSomu,)}></Antd.Menu.Item>
            {/* 档号配置 */}
            
            {/* 元数据填写 */}
            <Antd.Menu.ItemGroup
title={fillInMetadataPqxaState.title}
style={{color:fillInMetadataPqxaState.style.color,
width:fillInMetadataPqxaState.style.width,
borderColor:fillInMetadataPqxaState.style.borderColor,
borderStyle:fillInMetadataPqxaState.style.borderStyle,
borderTopWidth:fillInMetadataPqxaState.style.borderTopWidth,
borderLeftWidth:fillInMetadataPqxaState.style.borderLeftWidth,
borderRightWidth:fillInMetadataPqxaState.style.borderRightWidth,
borderBottomWidth:fillInMetadataPqxaState.style.borderBottomWidth,
}}
className={`${style.fillInMetadataPqxa}`}
>
            {/* 元数据内容描述 */}
            <Antd.Menu.Item
key={descriptionOfMetadataContentInqsState.key}
icon={descriptionOfMetadataContentInqsState.icon}
danger={descriptionOfMetadataContentInqsState.danger}
children={descriptionOfMetadataContentInqsState.children}
disabled={descriptionOfMetadataContentInqsState.disabled}
style={{color:descriptionOfMetadataContentInqsState.style.color,
}}
className={`${style.descriptionOfMetadataContentInqs}`}
onClick={(eventBtoz,) =>whenClickedMetadataContentDescription(eventBtoz,)}></Antd.Menu.Item>
            {/* 元数据内容描述 */}
            
            {/* 聚合层次 */}
            <Antd.Menu.Item
key={aggregationHierarchyState.key}
icon={aggregationHierarchyState.icon}
danger={aggregationHierarchyState.danger}
children={aggregationHierarchyState.children}
disabled={aggregationHierarchyState.disabled}
style={{color:aggregationHierarchyState.style.color,
}}
className={`${style.aggregationHierarchy}`}
onClick={(eventWslx,) =>clickOnAggregateHierarchyHfrx(eventWslx,)}></Antd.Menu.Item>
            {/* 聚合层次 */}
            
            {/* 元数据形式特征 */}
            <Antd.Menu.Item
key={characteristicsOfMetadataFormatState.key}
icon={characteristicsOfMetadataFormatState.icon}
danger={characteristicsOfMetadataFormatState.danger}
children={characteristicsOfMetadataFormatState.children}
disabled={characteristicsOfMetadataFormatState.disabled}
style={{color:characteristicsOfMetadataFormatState.style.color,
}}
className={`${style.characteristicsOfMetadataFormat}`}
onClick={(eventJnfk,) =>whenClickedMetadataFormatFeaturesKhav(eventJnfk,)}></Antd.Menu.Item>
            {/* 元数据形式特征 */}
            
            {/* 元数据存储位置 */}
            <Antd.Menu.Item
key={metadataStorageLocationState.key}
icon={metadataStorageLocationState.icon}
danger={metadataStorageLocationState.danger}
children={metadataStorageLocationState.children}
disabled={metadataStorageLocationState.disabled}
style={{color:metadataStorageLocationState.style.color,
}}
className={`${style.metadataStorageLocation}`}
onClick={(eventGfeb,) =>whenClickedMetadataStorageLocationUdmn(eventGfeb,)}></Antd.Menu.Item>
            {/* 元数据存储位置 */}
            
            {/* 元数据电子签名 */}
            <Antd.Menu.Item
key={metadataElectronicSignatureState.key}
icon={metadataElectronicSignatureState.icon}
danger={metadataElectronicSignatureState.danger}
children={metadataElectronicSignatureState.children}
disabled={metadataElectronicSignatureState.disabled}
style={{color:metadataElectronicSignatureState.style.color,
}}
className={`${style.metadataElectronicSignature}`}
onClick={(eventUrxi,) =>whenClickedMetadataElectronicSignatureCujv(eventUrxi,)}></Antd.Menu.Item>
            {/* 元数据电子签名 */}
            
            {/* 元数据来源 */}
            <Antd.Menu.Item
key={sourceOfMetadataState.key}
icon={sourceOfMetadataState.icon}
danger={sourceOfMetadataState.danger}
children={sourceOfMetadataState.children}
disabled={sourceOfMetadataState.disabled}
style={{color:sourceOfMetadataState.style.color,
}}
className={`${style.sourceOfMetadata}`}
onClick={(eventUwfm,) =>whenClickedMetadataSourceDawa(eventUwfm,)}></Antd.Menu.Item>
            {/* 元数据来源 */}
            
            {/* 档号 */}
            <Antd.Menu.Item
key={referenceState.key}
icon={referenceState.icon}
danger={referenceState.danger}
children={referenceState.children}
disabled={referenceState.disabled}
style={{color:referenceState.style.color,
}}
className={`${style.reference}`}
onClick={(eventJqym,) =>clickTimeFileNumberIkqi(eventJqym,)}></Antd.Menu.Item>
            {/* 档号 */}
            
            {/* 生成文件 */}
            <Antd.Menu.Item
key={generateFileState.key}
icon={generateFileState.icon}
danger={generateFileState.danger}
children={generateFileState.children}
disabled={generateFileState.disabled}
style={{color:generateFileState.style.color,
}}
className={`${style.generateFile}`}
></Antd.Menu.Item>
            {/* 生成文件 */}
            </Antd.Menu.ItemGroup>
            {/* 元数据填写 */}
            
            {/* 日志审核 */}
            <Antd.Menu.ItemGroup
title={logAuditXbsyState.title}
style={{borderColor:logAuditXbsyState.style.borderColor,
borderStyle:logAuditXbsyState.style.borderStyle,
borderTopWidth:logAuditXbsyState.style.borderTopWidth,
borderLeftWidth:logAuditXbsyState.style.borderLeftWidth,
borderRightWidth:logAuditXbsyState.style.borderRightWidth,
borderBottomWidth:logAuditXbsyState.style.borderBottomWidth,
}}
className={`${style.logAuditXbsy}`}
>
            {/* 待审核日志 */}
            <Antd.Menu.Item
key={pendingAuditLogLpeyState.key}
icon={pendingAuditLogLpeyState.icon}
danger={pendingAuditLogLpeyState.danger}
children={pendingAuditLogLpeyState.children}
disabled={pendingAuditLogLpeyState.disabled}
style={{color:pendingAuditLogLpeyState.style.color,
}}
className={`${style.pendingAuditLogLpey}`}
onClick={(eventNcnj,) =>whenClickedPendingAuditLog(eventNcnj,)}></Antd.Menu.Item>
            {/* 待审核日志 */}
            
            {/* 已审核日志 */}
            <Antd.Menu.Item
key={verifiedLogsState.key}
icon={verifiedLogsState.icon}
danger={verifiedLogsState.danger}
children={verifiedLogsState.children}
disabled={verifiedLogsState.disabled}
style={{color:verifiedLogsState.style.color,
}}
className={`${style.verifiedLogs}`}
onClick={(eventPstj,) =>whenClickedReviewedLogs(eventPstj,)}></Antd.Menu.Item>
            {/* 已审核日志 */}
            </Antd.Menu.ItemGroup>
            {/* 日志审核 */}
            </Antd.Menu>
            {/* 导航菜单 */}
            
            {/* 两栏容器 */}
            <div
style={{width:twoColumnContainerState.style.width,
display:twoColumnContainerState.style.display,
flexDirection:twoColumnContainerState.style.flexDirection,
justifyContent:twoColumnContainerState.style.justifyContent,
}}
className={`${style.twoColumnContainer}`}
>
            {/* 容器 */}
            <div
style={{width:containerGlgaState.style.width,
height:containerGlgaState.style.height,
backgroundColor:containerGlgaState.style.backgroundColor,
}}
className={`${style.containerGlga}`}
>
            {/* 两栏容器 */}
            <div
style={{width:twoColumnContainerEtiiState.style.width,
display:twoColumnContainerEtiiState.style.display,
flexDirection:twoColumnContainerEtiiState.style.flexDirection,
}}
className={`${style.twoColumnContainerEtii}`}
>
            {/* 系统名称 */}
            <div
style={{gap:systemNameState.style.gap,
color:systemNameState.style.color,
width:systemNameState.style.width,
height:systemNameState.style.height,
display:systemNameState.style.display,
fontSize:systemNameState.style.fontSize,
textAlign:systemNameState.style.textAlign,
alignItems:systemNameState.style.alignItems,
borderColor:systemNameState.style.borderColor,
borderStyle:systemNameState.style.borderStyle,
flexDirection:systemNameState.style.flexDirection,
justifyContent:systemNameState.style.justifyContent,
backgroundColor:systemNameState.style.backgroundColor,
borderBottomWidth:systemNameState.style.borderBottomWidth,
}}
className={`${style.systemName}`}
>
            {/* 系统名称 */}
            <Antd.Typography.Text
code={systemNameAwjrState.code}
mark={systemNameAwjrState.mark}
type={systemNameAwjrState.type}
delete={systemNameAwjrState.delete}
italic={systemNameAwjrState.italic}
strong={systemNameAwjrState.strong}
children={systemNameAwjrState.children}
copyable={systemNameAwjrState.copyable}
disabled={systemNameAwjrState.disabled}
editable={systemNameAwjrState.editable}
ellipsis={systemNameAwjrState.ellipsis}
keyboard={systemNameAwjrState.keyboard}
underline={systemNameAwjrState.underline}
style={{color:systemNameAwjrState.style.color,
display:systemNameAwjrState.style.display,
fontSize:systemNameAwjrState.style.fontSize,
textAlign:systemNameAwjrState.style.textAlign,
alignItems:systemNameAwjrState.style.alignItems,
fontWeight:systemNameAwjrState.style.fontWeight,
justifyContent:systemNameAwjrState.style.justifyContent,
}}
className={`${style.systemNameAwjr}`}
></Antd.Typography.Text>
            {/* 系统名称 */}
            </div>
            {/* 系统名称 */}
            
            {/* 容器 */}
            <div
style={{width:containerDazxState.style.width,
height:containerDazxState.style.height,
display:containerDazxState.style.display,
flexWrap:containerDazxState.style.flexWrap,
alignItems:containerDazxState.style.alignItems,
borderColor:containerDazxState.style.borderColor,
borderStyle:containerDazxState.style.borderStyle,
flexDirection:containerDazxState.style.flexDirection,
justifyContent:containerDazxState.style.justifyContent,
backgroundColor:containerDazxState.style.backgroundColor,
}}
className={`${style.containerDazx}`}
>
            {/* 图标 */}
            <AntdIcon.UserOutlined
spin={iconIyklState.spin}
rotate={iconIyklState.rotate}
twoToneColor={iconIyklState.twoToneColor}
style={{color:iconIyklState.style.color,
width:iconIyklState.style.width,
height:iconIyklState.style.height,
fontSize:iconIyklState.style.fontSize,
marginTop:iconIyklState.style.marginTop,
fontWeight:iconIyklState.style.fontWeight,
marginRight:iconIyklState.style.marginRight,
}}
className={`${style.iconIykl}`}
></AntdIcon.UserOutlined>
            {/* 图标 */}
            
            {/* 退出按钮 */}
            <Antd.Button
icon={exitButtonState.icon}
size={exitButtonState.size}
type={exitButtonState.type}
ghost={exitButtonState.ghost}
shape={exitButtonState.shape}
danger={exitButtonState.danger}
loading={exitButtonState.loading}
children={exitButtonState.children}
disabled={exitButtonState.disabled}
style={{fontSize:exitButtonState.style.fontSize,
fontWeight:exitButtonState.style.fontWeight,
marginRight:exitButtonState.style.marginRight,
marginBottom:exitButtonState.style.marginBottom,
backgroundColor:exitButtonState.style.backgroundColor,
}}
className={`${style.exitButton}`}
onClick={(eventTawi,) =>clickExitButton(eventTawi,)}></Antd.Button>
            {/* 退出按钮 */}
            </div>
            {/* 容器 */}
            </div>
            {/* 两栏容器 */}
            </div>
            {/* 容器 */}
            
            {/* 容器 */}
            <div
style={{width:containerOzmvState.style.width,
height:containerOzmvState.style.height,
backgroundColor:containerOzmvState.style.backgroundColor,
}}
className={`${style.containerOzmv}`}
>
            {/* 两栏容器 */}
            <div
style={{width:twoColumnContainerZhztState.style.width,
height:twoColumnContainerZhztState.style.height,
display:twoColumnContainerZhztState.style.display,
marginTop:twoColumnContainerZhztState.style.marginTop,
flexDirection:twoColumnContainerZhztState.style.flexDirection,
backgroundColor:twoColumnContainerZhztState.style.backgroundColor,
backgroundImage:twoColumnContainerZhztState.style.backgroundImage,
}}
className={`${style.twoColumnContainerZhzt}`}
>
            {/* 中间容器 */}
            <div
style={{height:intermediateContainerState.style.height,
display:intermediateContainerState.style.display,
alignItems:intermediateContainerState.style.alignItems,
flexDirection:intermediateContainerState.style.flexDirection,
justifyContent:intermediateContainerState.style.justifyContent,
}}
className={`${style.intermediateContainer}`}
>
            {/* 底部容器 */}
            <div
style={{width:bottomContainerState.style.width,
height:bottomContainerState.style.height,
marginBottom:bottomContainerState.style.marginBottom,
backgroundColor:bottomContainerState.style.backgroundColor,
}}
className={`${style.bottomContainer}`}
></div>
            {/* 底部容器 */}
            
            {/* 图片1 */}
            <Antd.Image
alt={pictureBzcjState.alt}
src={pictureBzcjState.src}
width={pictureBzcjState.width}
height={pictureBzcjState.height}
preview={pictureBzcjState.preview}
fallback={pictureBzcjState.fallback}
placeholder={pictureBzcjState.placeholder}
style={{width:pictureBzcjState.style.width,
height:pictureBzcjState.style.height,
marginTop:pictureBzcjState.style.marginTop,
marginLeft:pictureBzcjState.style.marginLeft,
}}
className={`${style.pictureBzcj}`}
></Antd.Image>
            {/* 图片1 */}
            
            {/* 图片2 */}
            <Antd.Image
alt={pictureHtkgState.alt}
src={pictureHtkgState.src}
width={pictureHtkgState.width}
height={pictureHtkgState.height}
preview={pictureHtkgState.preview}
fallback={pictureHtkgState.fallback}
placeholder={pictureHtkgState.placeholder}
style={{top:pictureHtkgState.style.top,
right:pictureHtkgState.style.right,
width:pictureHtkgState.style.width,
height:pictureHtkgState.style.height,
display:pictureHtkgState.style.display,
position:pictureHtkgState.style.position,
marginTop:pictureHtkgState.style.marginTop,
marginRight:pictureHtkgState.style.marginRight,
}}
className={`${style.pictureHtkg}`}
></Antd.Image>
            {/* 图片2 */}
            </div>
            {/* 中间容器 */}
            </div>
            {/* 两栏容器 */}
            </div>
            {/* 容器 */}
            </div>
            {/* 两栏容器 */}
            </div>
            {/* 容器 */}
            </>}
export default Navigation
export { Navigation }