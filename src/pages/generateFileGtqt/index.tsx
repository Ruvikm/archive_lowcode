import style from './index.module.scss'
import { useState } from 'react'
import * as Antd from '@/components/antd'
import { routes } from '@/router/index'
import { getParentInfoList } from '@/utils'
import { useNavigate } from 'react-router-dom'
import * as AntdIcon from '@ant-design/icons'
// 生成文件
              const GenerateFileGtqt = () => {
const navigate = useNavigate()
// 点击时-档号配置
          const clickToConfigureFileNumberLkqm = (eventKnnw,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageDano").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据内容描述
          const whenClickedMetadataContentDescriptionGxrv = (eventCbfh,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "page401").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-聚合层次
          const clickOnAggregateHierarchyHufm = (eventJlqk,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageVomd").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据形式特征
          const whenClickedMetadataFormatFeaturesHbds = (eventShrg,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageWcoq").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据存储位置
          const whenClickedMetadataStorageLocationQfiy = (eventSmam,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageDbgh").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据电子签名
          const whenClickedMetadataElectronicSignatureZlwi = (eventQdou,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageWsbf").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据来源
          const whenClickedMetadataSourceYmeb = (eventSmyf,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageGafh").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-档号
          const clickTimeFileNumberDhco = (eventJeme,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageGafh").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-待审核日志
          const whenClickedPendingAuditLogFtvf = (eventXkoo,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageZuvc").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-已审核日志
          const whenClickedReviewedLogsEnpr = (eventDovh,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageStsm").slice(1).map(item => item.path).join('/')}`)
}
// 点击-退出按钮
          const clickExitButtonApam = (eventFzbe,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "defaultPageFhue").slice(1).map(item => item.path).join('/')}`)
}

              // 容器 开始属性
              const [containerZgntState, setcontainerZgntState] = useState({style:{width:"100vw",
height:"100vh",
display:"flex",
},
})
              // 容器 结束属性
              
              // 导航菜单 开始属性
              const [navigationMenuNmevState, setnavigationMenuNmevState] = useState({mode:"vertical",
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
              const [containerDbzpState, setcontainerDbzpState] = useState({style:{width:"100%",
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
              const [pictureIreqState, setpictureIreqState] = useState({alt:undefined,
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
              const [administratorHomepageUmoeState, setadministratorHomepageUmoeState] = useState({code:false,
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
              const [fileNumberConfigurationOntyState, setfileNumberConfigurationOntyState] = useState({key:undefined,
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
              const [fillInMetadataDlzxState, setfillInMetadataDlzxState] = useState({title:"元数据填写",
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
              const [descriptionOfMetadataContentYqooState, setdescriptionOfMetadataContentYqooState] = useState({key:undefined,
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
              const [aggregationHierarchyZvnhState, setaggregationHierarchyZvnhState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"聚合层次",
disabled:false,
style:{color:"#f0f8ff",
backgroundColor:"#336395",
},
})
              // 聚合层次 结束属性
              
              // 元数据形式特征 开始属性
              const [characteristicsOfMetadataFormatZfeeState, setcharacteristicsOfMetadataFormatZfeeState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据形式特征",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 元数据形式特征 结束属性
              
              // 元数据存储位置 开始属性
              const [metadataStorageLocationUirsState, setmetadataStorageLocationUirsState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据存储位置",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 元数据存储位置 结束属性
              
              // 元数据电子签名 开始属性
              const [metadataElectronicSignatureJcmsState, setmetadataElectronicSignatureJcmsState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据电子签名",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 元数据电子签名 结束属性
              
              // 元数据来源 开始属性
              const [sourceOfMetadataLkmgState, setsourceOfMetadataLkmgState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据来源",
disabled:false,
style:{color:"#f0f8ff",
backgroundColor:"#336395",
},
})
              // 元数据来源 结束属性
              
              // 档号 开始属性
              const [referenceJejtState, setreferenceJejtState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"档号",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 档号 结束属性
              
              // 生成文件 开始属性
              const [generateFileIqkhState, setgenerateFileIqkhState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"生成文件",
disabled:false,
style:{color:"#f0f8ff",
backgroundColor:"#6d8fc0",
},
})
              // 生成文件 结束属性
              
              // 日志审核 开始属性
              const [logAuditUysmState, setlogAuditUysmState] = useState({title:"日志审核",
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
              const [pendingAuditLogKdsaState, setpendingAuditLogKdsaState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"待审核日志",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 待审核日志 结束属性
              
              // 已审核日志 开始属性
              const [verifiedLogsEovyState, setverifiedLogsEovyState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"已审核日志",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 已审核日志 结束属性
              
              // 两栏容器 开始属性
              const [twoColumnContainerBxbrState, settwoColumnContainerBxbrState] = useState({style:{width:"86%",
display:"flex",
flexDirection:"column",
justifyContent:"center",
},
})
              // 两栏容器 结束属性
              
              // 容器 开始属性
              const [containerZnfiState, setcontainerZnfiState] = useState({style:{width:"100%",
height:"9%",
backgroundColor:"#f0f8ff",
},
})
              // 容器 结束属性
              
              // 容器 开始属性
              const [containerJlefState, setcontainerJlefState] = useState({style:{width:"100%",
height:"9%",
backgroundColor:"#ffffff",
},
})
              // 容器 结束属性
              
              // 两栏容器 开始属性
              const [twoColumnContainerCzllState, settwoColumnContainerCzllState] = useState({style:{width:"100%",
display:"flex",
flexDirection:"column",
},
})
              // 两栏容器 结束属性
              
              // 容器 开始属性
              const [containerZbcsState, setcontainerZbcsState] = useState({style:{width:"100%",
},
})
              // 容器 结束属性
              
              // 两栏容器 开始属性
              const [twoColumnContainerOqfqState, settwoColumnContainerOqfqState] = useState({style:{width:"100%",
display:"flex",
flexDirection:"column",
},
})
              // 两栏容器 结束属性
              
              // 系统名称 开始属性
              const [systemNameGduaState, setsystemNameGduaState] = useState({style:{gap:"14px",
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
              const [systemNameZujzState, setsystemNameZujzState] = useState({code:false,
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
              const [containerWsvtState, setcontainerWsvtState] = useState({style:{width:"100%",
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
              const [iconNdiaState, seticonNdiaState] = useState({spin:false,
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
              const [exitButtonTjxdState, setexitButtonTjxdState] = useState({icon:undefined,
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
              const [pleaseEnterExplanatoryTitleTextOuzgState, setpleaseEnterExplanatoryTitleTextOuzgState] = useState({style:{width:"100%",
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
              const [electronicFileNumberGjobState, setelectronicFileNumberGjobState] = useState({style:{width:"100%",
height:"60px",
display:"flex",
marginTop:"5%",
marginBottom:"0px",
justifyContent:"center",
borderTopLeftRadius:"2px",
borderTopRightRadius:"2px",
borderBottomLeftRadius:"2px",
borderBottomRightRadius:"2px",
},
})
              // 电子文件号 结束属性
              
              // 电子文件号前缀 开始属性
              const [electronicFileNumberPrefixKeixState, setelectronicFileNumberPrefixKeixState] = useState({style:{width:"49%",
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
              const [electronicFileNumberFlveState, setelectronicFileNumberFlveState] = useState({code:false,
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
              const [pleaseEnterTheElectronicFileNumberBjteState, setpleaseEnterTheElectronicFileNumberBjteState] = useState({size:"middle",
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"请输入电子文件号",
defaultValue:undefined,
style:{width:"60%",
height:"60px",
},
})
              // 请输入电子文件号 结束属性
              
              // 按钮 开始属性
              const [buttonEfajState, setbuttonEfajState] = useState({size:"middle",
type:"primary",
ghost:false,
shape:"default",
danger:false,
children:"生成文件",
disabled:false,
style:{width:"10%",
height:"60px",
fontSize:"26px",
marginTop:"4%",
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
style={{width:containerZgntState.style.width,
height:containerZgntState.style.height,
display:containerZgntState.style.display,
}}
className={`${style.containerZgnt}`}
>
            {/* 导航菜单 */}
            <Antd.Menu
mode={navigationMenuNmevState.mode}
expandIcon={navigationMenuNmevState.expandIcon}
style={{width:navigationMenuNmevState.style.width,
height:navigationMenuNmevState.style.height,
backgroundColor:navigationMenuNmevState.style.backgroundColor,
backgroundImage:navigationMenuNmevState.style.backgroundImage,
backgroundRepeat:navigationMenuNmevState.style.backgroundRepeat,
borderTopRightRadius:navigationMenuNmevState.style.borderTopRightRadius,
borderBottomRightRadius:navigationMenuNmevState.style.borderBottomRightRadius,
}}
className={`${style.navigationMenuNmev}`}
>
            {/* 容器 */}
            <div
style={{width:containerDbzpState.style.width,
height:containerDbzpState.style.height,
display:containerDbzpState.style.display,
flexWrap:containerDbzpState.style.flexWrap,
alignItems:containerDbzpState.style.alignItems,
paddingTop:containerDbzpState.style.paddingTop,
borderColor:containerDbzpState.style.borderColor,
borderStyle:containerDbzpState.style.borderStyle,
flexDirection:containerDbzpState.style.flexDirection,
justifyContent:containerDbzpState.style.justifyContent,
borderBottomWidth:containerDbzpState.style.borderBottomWidth,
}}
className={`${style.containerDbzp}`}
>
            {/* 图片 */}
            <Antd.Image
alt={pictureIreqState.alt}
src={pictureIreqState.src}
width={pictureIreqState.width}
height={pictureIreqState.height}
preview={pictureIreqState.preview}
fallback={pictureIreqState.fallback}
placeholder={pictureIreqState.placeholder}
style={{width:pictureIreqState.style.width,
height:pictureIreqState.style.height,
marginTop:pictureIreqState.style.marginTop,
marginLeft:pictureIreqState.style.marginLeft,
}}
className={`${style.pictureIreq}`}
></Antd.Image>
            {/* 图片 */}
            
            {/* 管理员首页 */}
            <Antd.Typography.Text
code={administratorHomepageUmoeState.code}
mark={administratorHomepageUmoeState.mark}
type={administratorHomepageUmoeState.type}
delete={administratorHomepageUmoeState.delete}
italic={administratorHomepageUmoeState.italic}
strong={administratorHomepageUmoeState.strong}
children={administratorHomepageUmoeState.children}
copyable={administratorHomepageUmoeState.copyable}
disabled={administratorHomepageUmoeState.disabled}
editable={administratorHomepageUmoeState.editable}
ellipsis={administratorHomepageUmoeState.ellipsis}
keyboard={administratorHomepageUmoeState.keyboard}
underline={administratorHomepageUmoeState.underline}
style={{color:administratorHomepageUmoeState.style.color,
width:administratorHomepageUmoeState.style.width,
height:administratorHomepageUmoeState.style.height,
fontSize:administratorHomepageUmoeState.style.fontSize,
textAlign:administratorHomepageUmoeState.style.textAlign,
fontWeight:administratorHomepageUmoeState.style.fontWeight,
marginLeft:administratorHomepageUmoeState.style.marginLeft,
}}
className={`${style.administratorHomepageUmoe}`}
></Antd.Typography.Text>
            {/* 管理员首页 */}
            </div>
            {/* 容器 */}
            
            {/* 档号配置 */}
            <Antd.Menu.Item
key={fileNumberConfigurationOntyState.key}
icon={fileNumberConfigurationOntyState.icon}
danger={fileNumberConfigurationOntyState.danger}
children={fileNumberConfigurationOntyState.children}
disabled={fileNumberConfigurationOntyState.disabled}
style={{color:fileNumberConfigurationOntyState.style.color,
width:fileNumberConfigurationOntyState.style.width,
marginLeft:fileNumberConfigurationOntyState.style.marginLeft,
borderColor:fileNumberConfigurationOntyState.style.borderColor,
borderStyle:fileNumberConfigurationOntyState.style.borderStyle,
marginRight:fileNumberConfigurationOntyState.style.marginRight,
backgroundColor:fileNumberConfigurationOntyState.style.backgroundColor,
borderBottomWidth:fileNumberConfigurationOntyState.style.borderBottomWidth,
borderTopLeftRadius:fileNumberConfigurationOntyState.style.borderTopLeftRadius,
borderTopRightRadius:fileNumberConfigurationOntyState.style.borderTopRightRadius,
borderBottomLeftRadius:fileNumberConfigurationOntyState.style.borderBottomLeftRadius,
borderBottomRightRadius:fileNumberConfigurationOntyState.style.borderBottomRightRadius,
}}
className={`${style.fileNumberConfigurationOnty}`}
onClick={(eventKnnw,) =>clickToConfigureFileNumberLkqm(eventKnnw,)}></Antd.Menu.Item>
            {/* 档号配置 */}
            
            {/* 元数据填写 */}
            <Antd.Menu.ItemGroup
title={fillInMetadataDlzxState.title}
style={{color:fillInMetadataDlzxState.style.color,
borderColor:fillInMetadataDlzxState.style.borderColor,
borderStyle:fillInMetadataDlzxState.style.borderStyle,
borderTopWidth:fillInMetadataDlzxState.style.borderTopWidth,
borderLeftWidth:fillInMetadataDlzxState.style.borderLeftWidth,
borderRightWidth:fillInMetadataDlzxState.style.borderRightWidth,
borderBottomWidth:fillInMetadataDlzxState.style.borderBottomWidth,
}}
className={`${style.fillInMetadataDlzx}`}
>
            {/* 元数据内容描述 */}
            <Antd.Menu.Item
key={descriptionOfMetadataContentYqooState.key}
icon={descriptionOfMetadataContentYqooState.icon}
danger={descriptionOfMetadataContentYqooState.danger}
children={descriptionOfMetadataContentYqooState.children}
disabled={descriptionOfMetadataContentYqooState.disabled}
style={{color:descriptionOfMetadataContentYqooState.style.color,
backgroundColor:descriptionOfMetadataContentYqooState.style.backgroundColor,
}}
className={`${style.descriptionOfMetadataContentYqoo}`}
onClick={(eventCbfh,) =>whenClickedMetadataContentDescriptionGxrv(eventCbfh,)}></Antd.Menu.Item>
            {/* 元数据内容描述 */}
            
            {/* 聚合层次 */}
            <Antd.Menu.Item
key={aggregationHierarchyZvnhState.key}
icon={aggregationHierarchyZvnhState.icon}
danger={aggregationHierarchyZvnhState.danger}
children={aggregationHierarchyZvnhState.children}
disabled={aggregationHierarchyZvnhState.disabled}
style={{color:aggregationHierarchyZvnhState.style.color,
backgroundColor:aggregationHierarchyZvnhState.style.backgroundColor,
}}
className={`${style.aggregationHierarchyZvnh}`}
onClick={(eventJlqk,) =>clickOnAggregateHierarchyHufm(eventJlqk,)}></Antd.Menu.Item>
            {/* 聚合层次 */}
            
            {/* 元数据形式特征 */}
            <Antd.Menu.Item
key={characteristicsOfMetadataFormatZfeeState.key}
icon={characteristicsOfMetadataFormatZfeeState.icon}
danger={characteristicsOfMetadataFormatZfeeState.danger}
children={characteristicsOfMetadataFormatZfeeState.children}
disabled={characteristicsOfMetadataFormatZfeeState.disabled}
style={{color:characteristicsOfMetadataFormatZfeeState.style.color,
}}
className={`${style.characteristicsOfMetadataFormatZfee}`}
onClick={(eventShrg,) =>whenClickedMetadataFormatFeaturesHbds(eventShrg,)}></Antd.Menu.Item>
            {/* 元数据形式特征 */}
            
            {/* 元数据存储位置 */}
            <Antd.Menu.Item
key={metadataStorageLocationUirsState.key}
icon={metadataStorageLocationUirsState.icon}
danger={metadataStorageLocationUirsState.danger}
children={metadataStorageLocationUirsState.children}
disabled={metadataStorageLocationUirsState.disabled}
style={{color:metadataStorageLocationUirsState.style.color,
}}
className={`${style.metadataStorageLocationUirs}`}
onClick={(eventSmam,) =>whenClickedMetadataStorageLocationQfiy(eventSmam,)}></Antd.Menu.Item>
            {/* 元数据存储位置 */}
            
            {/* 元数据电子签名 */}
            <Antd.Menu.Item
key={metadataElectronicSignatureJcmsState.key}
icon={metadataElectronicSignatureJcmsState.icon}
danger={metadataElectronicSignatureJcmsState.danger}
children={metadataElectronicSignatureJcmsState.children}
disabled={metadataElectronicSignatureJcmsState.disabled}
style={{color:metadataElectronicSignatureJcmsState.style.color,
}}
className={`${style.metadataElectronicSignatureJcms}`}
onClick={(eventQdou,) =>whenClickedMetadataElectronicSignatureZlwi(eventQdou,)}></Antd.Menu.Item>
            {/* 元数据电子签名 */}
            
            {/* 元数据来源 */}
            <Antd.Menu.Item
key={sourceOfMetadataLkmgState.key}
icon={sourceOfMetadataLkmgState.icon}
danger={sourceOfMetadataLkmgState.danger}
children={sourceOfMetadataLkmgState.children}
disabled={sourceOfMetadataLkmgState.disabled}
style={{color:sourceOfMetadataLkmgState.style.color,
backgroundColor:sourceOfMetadataLkmgState.style.backgroundColor,
}}
className={`${style.sourceOfMetadataLkmg}`}
onClick={(eventSmyf,) =>whenClickedMetadataSourceYmeb(eventSmyf,)}></Antd.Menu.Item>
            {/* 元数据来源 */}
            
            {/* 档号 */}
            <Antd.Menu.Item
key={referenceJejtState.key}
icon={referenceJejtState.icon}
danger={referenceJejtState.danger}
children={referenceJejtState.children}
disabled={referenceJejtState.disabled}
style={{color:referenceJejtState.style.color,
}}
className={`${style.referenceJejt}`}
onClick={(eventJeme,) =>clickTimeFileNumberDhco(eventJeme,)}></Antd.Menu.Item>
            {/* 档号 */}
            
            {/* 生成文件 */}
            <Antd.Menu.Item
key={generateFileIqkhState.key}
icon={generateFileIqkhState.icon}
danger={generateFileIqkhState.danger}
children={generateFileIqkhState.children}
disabled={generateFileIqkhState.disabled}
style={{color:generateFileIqkhState.style.color,
backgroundColor:generateFileIqkhState.style.backgroundColor,
}}
className={`${style.generateFileIqkh}`}
></Antd.Menu.Item>
            {/* 生成文件 */}
            </Antd.Menu.ItemGroup>
            {/* 元数据填写 */}
            
            {/* 日志审核 */}
            <Antd.Menu.ItemGroup
title={logAuditUysmState.title}
style={{borderColor:logAuditUysmState.style.borderColor,
borderStyle:logAuditUysmState.style.borderStyle,
borderTopWidth:logAuditUysmState.style.borderTopWidth,
borderLeftWidth:logAuditUysmState.style.borderLeftWidth,
borderRightWidth:logAuditUysmState.style.borderRightWidth,
borderBottomWidth:logAuditUysmState.style.borderBottomWidth,
}}
className={`${style.logAuditUysm}`}
>
            {/* 待审核日志 */}
            <Antd.Menu.Item
key={pendingAuditLogKdsaState.key}
icon={pendingAuditLogKdsaState.icon}
danger={pendingAuditLogKdsaState.danger}
children={pendingAuditLogKdsaState.children}
disabled={pendingAuditLogKdsaState.disabled}
style={{color:pendingAuditLogKdsaState.style.color,
}}
className={`${style.pendingAuditLogKdsa}`}
onClick={(eventXkoo,) =>whenClickedPendingAuditLogFtvf(eventXkoo,)}></Antd.Menu.Item>
            {/* 待审核日志 */}
            
            {/* 已审核日志 */}
            <Antd.Menu.Item
key={verifiedLogsEovyState.key}
icon={verifiedLogsEovyState.icon}
danger={verifiedLogsEovyState.danger}
children={verifiedLogsEovyState.children}
disabled={verifiedLogsEovyState.disabled}
style={{color:verifiedLogsEovyState.style.color,
}}
className={`${style.verifiedLogsEovy}`}
onClick={(eventDovh,) =>whenClickedReviewedLogsEnpr(eventDovh,)}></Antd.Menu.Item>
            {/* 已审核日志 */}
            </Antd.Menu.ItemGroup>
            {/* 日志审核 */}
            </Antd.Menu>
            {/* 导航菜单 */}
            
            {/* 两栏容器 */}
            <div
style={{width:twoColumnContainerBxbrState.style.width,
display:twoColumnContainerBxbrState.style.display,
flexDirection:twoColumnContainerBxbrState.style.flexDirection,
justifyContent:twoColumnContainerBxbrState.style.justifyContent,
}}
className={`${style.twoColumnContainerBxbr}`}
>
            {/* 容器 */}
            <div
style={{width:containerZnfiState.style.width,
height:containerZnfiState.style.height,
backgroundColor:containerZnfiState.style.backgroundColor,
}}
className={`${style.containerZnfi}`}
>
            {/* 容器 */}
            <div
style={{width:containerJlefState.style.width,
height:containerJlefState.style.height,
backgroundColor:containerJlefState.style.backgroundColor,
}}
className={`${style.containerJlef}`}
>
            {/* 两栏容器 */}
            <div
style={{width:twoColumnContainerCzllState.style.width,
display:twoColumnContainerCzllState.style.display,
flexDirection:twoColumnContainerCzllState.style.flexDirection,
}}
className={`${style.twoColumnContainerCzll}`}
>
            {/* 容器 */}
            <div
style={{width:containerZbcsState.style.width,
}}
className={`${style.containerZbcs}`}
>
            {/* 两栏容器 */}
            <div
style={{width:twoColumnContainerOqfqState.style.width,
display:twoColumnContainerOqfqState.style.display,
flexDirection:twoColumnContainerOqfqState.style.flexDirection,
}}
className={`${style.twoColumnContainerOqfq}`}
>
            {/* 系统名称 */}
            <div
style={{gap:systemNameGduaState.style.gap,
color:systemNameGduaState.style.color,
width:systemNameGduaState.style.width,
height:systemNameGduaState.style.height,
display:systemNameGduaState.style.display,
fontSize:systemNameGduaState.style.fontSize,
marginTop:systemNameGduaState.style.marginTop,
textAlign:systemNameGduaState.style.textAlign,
alignItems:systemNameGduaState.style.alignItems,
borderColor:systemNameGduaState.style.borderColor,
borderStyle:systemNameGduaState.style.borderStyle,
flexDirection:systemNameGduaState.style.flexDirection,
justifyContent:systemNameGduaState.style.justifyContent,
backgroundColor:systemNameGduaState.style.backgroundColor,
borderBottomWidth:systemNameGduaState.style.borderBottomWidth,
}}
className={`${style.systemNameGdua}`}
>
            {/* 系统名称 */}
            <Antd.Typography.Text
code={systemNameZujzState.code}
mark={systemNameZujzState.mark}
type={systemNameZujzState.type}
delete={systemNameZujzState.delete}
italic={systemNameZujzState.italic}
strong={systemNameZujzState.strong}
children={systemNameZujzState.children}
copyable={systemNameZujzState.copyable}
disabled={systemNameZujzState.disabled}
editable={systemNameZujzState.editable}
ellipsis={systemNameZujzState.ellipsis}
keyboard={systemNameZujzState.keyboard}
underline={systemNameZujzState.underline}
style={{color:systemNameZujzState.style.color,
display:systemNameZujzState.style.display,
fontSize:systemNameZujzState.style.fontSize,
textAlign:systemNameZujzState.style.textAlign,
alignItems:systemNameZujzState.style.alignItems,
fontWeight:systemNameZujzState.style.fontWeight,
justifyContent:systemNameZujzState.style.justifyContent,
}}
className={`${style.systemNameZujz}`}
></Antd.Typography.Text>
            {/* 系统名称 */}
            </div>
            {/* 系统名称 */}
            
            {/* 容器 */}
            <div
style={{width:containerWsvtState.style.width,
height:containerWsvtState.style.height,
display:containerWsvtState.style.display,
flexWrap:containerWsvtState.style.flexWrap,
alignItems:containerWsvtState.style.alignItems,
borderColor:containerWsvtState.style.borderColor,
borderStyle:containerWsvtState.style.borderStyle,
flexDirection:containerWsvtState.style.flexDirection,
justifyContent:containerWsvtState.style.justifyContent,
backgroundColor:containerWsvtState.style.backgroundColor,
}}
className={`${style.containerWsvt}`}
>
            {/* 图标 */}
            <AntdIcon.UserOutlined
spin={iconNdiaState.spin}
rotate={iconNdiaState.rotate}
twoToneColor={iconNdiaState.twoToneColor}
style={{color:iconNdiaState.style.color,
width:iconNdiaState.style.width,
height:iconNdiaState.style.height,
fontSize:iconNdiaState.style.fontSize,
marginTop:iconNdiaState.style.marginTop,
fontWeight:iconNdiaState.style.fontWeight,
marginRight:iconNdiaState.style.marginRight,
}}
className={`${style.iconNdia}`}
></AntdIcon.UserOutlined>
            {/* 图标 */}
            
            {/* 退出按钮 */}
            <Antd.Button
icon={exitButtonTjxdState.icon}
size={exitButtonTjxdState.size}
type={exitButtonTjxdState.type}
ghost={exitButtonTjxdState.ghost}
shape={exitButtonTjxdState.shape}
danger={exitButtonTjxdState.danger}
loading={exitButtonTjxdState.loading}
children={exitButtonTjxdState.children}
disabled={exitButtonTjxdState.disabled}
style={{fontSize:exitButtonTjxdState.style.fontSize,
fontWeight:exitButtonTjxdState.style.fontWeight,
marginRight:exitButtonTjxdState.style.marginRight,
marginBottom:exitButtonTjxdState.style.marginBottom,
backgroundColor:exitButtonTjxdState.style.backgroundColor,
}}
className={`${style.exitButtonTjxd}`}
onClick={(eventFzbe,) =>clickExitButtonApam(eventFzbe,)}></Antd.Button>
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
style={{width:pleaseEnterExplanatoryTitleTextOuzgState.style.width,
height:pleaseEnterExplanatoryTitleTextOuzgState.style.height,
display:pleaseEnterExplanatoryTitleTextOuzgState.style.display,
marginTop:pleaseEnterExplanatoryTitleTextOuzgState.style.marginTop,
borderColor:pleaseEnterExplanatoryTitleTextOuzgState.style.borderColor,
borderStyle:pleaseEnterExplanatoryTitleTextOuzgState.style.borderStyle,
paddingLeft:pleaseEnterExplanatoryTitleTextOuzgState.style.paddingLeft,
paddingRight:pleaseEnterExplanatoryTitleTextOuzgState.style.paddingRight,
flexDirection:pleaseEnterExplanatoryTitleTextOuzgState.style.flexDirection,
backgroundColor:pleaseEnterExplanatoryTitleTextOuzgState.style.backgroundColor,
}}
className={`${style.pleaseEnterExplanatoryTitleTextOuzg}`}
>
            {/* 电子文件号 */}
            <div
style={{width:electronicFileNumberGjobState.style.width,
height:electronicFileNumberGjobState.style.height,
display:electronicFileNumberGjobState.style.display,
marginTop:electronicFileNumberGjobState.style.marginTop,
marginBottom:electronicFileNumberGjobState.style.marginBottom,
justifyContent:electronicFileNumberGjobState.style.justifyContent,
borderTopLeftRadius:electronicFileNumberGjobState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumberGjobState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumberGjobState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumberGjobState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumberGjob}`}
>
            {/* 电子文件号前缀 */}
            <div
style={{width:electronicFileNumberPrefixKeixState.style.width,
height:electronicFileNumberPrefixKeixState.style.height,
display:electronicFileNumberPrefixKeixState.style.display,
alignItems:electronicFileNumberPrefixKeixState.style.alignItems,
marginRight:electronicFileNumberPrefixKeixState.style.marginRight,
justifyContent:electronicFileNumberPrefixKeixState.style.justifyContent,
backgroundColor:electronicFileNumberPrefixKeixState.style.backgroundColor,
borderTopLeftRadius:electronicFileNumberPrefixKeixState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumberPrefixKeixState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumberPrefixKeixState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumberPrefixKeixState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumberPrefixKeix}`}
>
            {/* 电子文件号 */}
            <Antd.Typography.Text
code={electronicFileNumberFlveState.code}
mark={electronicFileNumberFlveState.mark}
type={electronicFileNumberFlveState.type}
delete={electronicFileNumberFlveState.delete}
italic={electronicFileNumberFlveState.italic}
strong={electronicFileNumberFlveState.strong}
children={electronicFileNumberFlveState.children}
copyable={electronicFileNumberFlveState.copyable}
disabled={electronicFileNumberFlveState.disabled}
editable={electronicFileNumberFlveState.editable}
ellipsis={electronicFileNumberFlveState.ellipsis}
keyboard={electronicFileNumberFlveState.keyboard}
underline={electronicFileNumberFlveState.underline}
style={{gap:electronicFileNumberFlveState.style.gap,
color:electronicFileNumberFlveState.style.color,
width:electronicFileNumberFlveState.style.width,
height:electronicFileNumberFlveState.style.height,
display:electronicFileNumberFlveState.style.display,
fontSize:electronicFileNumberFlveState.style.fontSize,
textAlign:electronicFileNumberFlveState.style.textAlign,
alignItems:electronicFileNumberFlveState.style.alignItems,
marginRight:electronicFileNumberFlveState.style.marginRight,
flexDirection:electronicFileNumberFlveState.style.flexDirection,
justifyContent:electronicFileNumberFlveState.style.justifyContent,
}}
className={`${style.electronicFileNumberFlve}`}
></Antd.Typography.Text>
            {/* 电子文件号 */}
            
            {/* 请输入电子文件号 */}
            <Antd.Input
size={pleaseEnterTheElectronicFileNumberBjteState.size}
prefix={pleaseEnterTheElectronicFileNumberBjteState.prefix}
bordered={pleaseEnterTheElectronicFileNumberBjteState.bordered}
disabled={pleaseEnterTheElectronicFileNumberBjteState.disabled}
maxLength={pleaseEnterTheElectronicFileNumberBjteState.maxLength}
showCount={pleaseEnterTheElectronicFileNumberBjteState.showCount}
addonAfter={pleaseEnterTheElectronicFileNumberBjteState.addonAfter}
allowClear={pleaseEnterTheElectronicFileNumberBjteState.allowClear}
addonBefore={pleaseEnterTheElectronicFileNumberBjteState.addonBefore}
placeholder={pleaseEnterTheElectronicFileNumberBjteState.placeholder}
defaultValue={pleaseEnterTheElectronicFileNumberBjteState.defaultValue}
style={{width:pleaseEnterTheElectronicFileNumberBjteState.style.width,
height:pleaseEnterTheElectronicFileNumberBjteState.style.height,
}}
className={`${style.pleaseEnterTheElectronicFileNumberBjte}`}
></Antd.Input>
            {/* 请输入电子文件号 */}
            </div>
            {/* 电子文件号前缀 */}
            </div>
            {/* 电子文件号 */}
            
            {/* 按钮 */}
            <Antd.Button
size={buttonEfajState.size}
type={buttonEfajState.type}
ghost={buttonEfajState.ghost}
shape={buttonEfajState.shape}
danger={buttonEfajState.danger}
children={buttonEfajState.children}
disabled={buttonEfajState.disabled}
style={{width:buttonEfajState.style.width,
height:buttonEfajState.style.height,
fontSize:buttonEfajState.style.fontSize,
marginTop:buttonEfajState.style.marginTop,
fontWeight:buttonEfajState.style.fontWeight,
marginLeft:buttonEfajState.style.marginLeft,
marginRight:buttonEfajState.style.marginRight,
borderTopLeftRadius:buttonEfajState.style.borderTopLeftRadius,
borderTopRightRadius:buttonEfajState.style.borderTopRightRadius,
borderBottomLeftRadius:buttonEfajState.style.borderBottomLeftRadius,
borderBottomRightRadius:buttonEfajState.style.borderBottomRightRadius,
}}
className={`${style.buttonEfaj}`}
></Antd.Button>
            {/* 按钮 */}
            </div>
            {/* 请输入说明题名文字 */}
            </div>
            {/* 两栏容器 */}
            </div>
            {/* 容器 */}
            </>}
export default GenerateFileGtqt
export { GenerateFileGtqt }