import style from './index.module.scss'
import { useState } from 'react'
import * as Antd from '@/components/antd'
import { routes } from '@/router/index'
import { getParentInfoList } from '@/utils'
import { useNavigate } from 'react-router-dom'
import * as AntdIcon from '@ant-design/icons'
// 元数据存储位置
              const MetadataStorageLocationDyss = () => {
const navigate = useNavigate()
// 点击时-档号配置
          const clickToConfigureFileNumberTglq = (eventYndy,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageDano").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据内容描述
          const whenClickedMetadataContentDescriptionWokz = (eventYxsz,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "page401").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-聚合层次
          const clickOnAggregateHierarchySlgw = (eventCtat,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageVomd").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据形式特征
          const whenClickedMetadataFormatFeaturesIqml = (eventIukh,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageWcoq").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据存储位置
          const whenClickedMetadataStorageLocationInxa = (eventPhce,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageDbgh").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据电子签名
          const whenClickedMetadataElectronicSignatureWgcj = (eventOscq,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageWsbf").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据来源
          const whenClickedMetadataSourceKjco = (eventClqv,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageGafh").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-档号
          const clickTimeFileNumberDfkw = (eventDtej,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageGafh").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-生成文件
          const whenClickedGenerateFileLcqx = (eventDuio,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageYfhi").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-待审核日志
          const whenClickedPendingAuditLogHdag = (eventQvji,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageZuvc").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-已审核日志
          const whenClickedReviewedLogsNktx = (eventSxuj,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageStsm").slice(1).map(item => item.path).join('/')}`)
}
// 点击-退出按钮
          const clickExitButtonDzsx = (eventJqid,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "defaultPageFhue").slice(1).map(item => item.path).join('/')}`)
}

              // 容器 开始属性
              const [containerGxhgState, setcontainerGxhgState] = useState({style:{width:"100vw",
height:"100vh",
display:"flex",
},
})
              // 容器 结束属性
              
              // 导航菜单 开始属性
              const [navigationMenuDzojState, setnavigationMenuDzojState] = useState({mode:"vertical",
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
              const [containerRispState, setcontainerRispState] = useState({style:{width:"100%",
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
              const [pictureTgigState, setpictureTgigState] = useState({alt:undefined,
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
              const [administratorHomepageUxeqState, setadministratorHomepageUxeqState] = useState({code:false,
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
              const [fileNumberConfigurationHkwqState, setfileNumberConfigurationHkwqState] = useState({key:undefined,
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
              const [fillInMetadataSsblState, setfillInMetadataSsblState] = useState({title:"元数据填写",
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
              const [descriptionOfMetadataContentRppdState, setdescriptionOfMetadataContentRppdState] = useState({key:undefined,
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
              const [aggregationHierarchyOfkzState, setaggregationHierarchyOfkzState] = useState({key:undefined,
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
              const [characteristicsOfMetadataFormatDokmState, setcharacteristicsOfMetadataFormatDokmState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据形式特征",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 元数据形式特征 结束属性
              
              // 元数据存储位置 开始属性
              const [metadataStorageLocationUcjaState, setmetadataStorageLocationUcjaState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据存储位置",
disabled:false,
style:{color:"#f0f8ff",
backgroundColor:"#6d8fc0",
},
})
              // 元数据存储位置 结束属性
              
              // 元数据电子签名 开始属性
              const [metadataElectronicSignatureUcvkState, setmetadataElectronicSignatureUcvkState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据电子签名",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 元数据电子签名 结束属性
              
              // 元数据来源 开始属性
              const [sourceOfMetadataZmsiState, setsourceOfMetadataZmsiState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据来源",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 元数据来源 结束属性
              
              // 档号 开始属性
              const [referenceAohaState, setreferenceAohaState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"档号",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 档号 结束属性
              
              // 生成文件 开始属性
              const [generateFileLkmgState, setgenerateFileLkmgState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"生成文件",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 生成文件 结束属性
              
              // 日志审核 开始属性
              const [logAuditKhzsState, setlogAuditKhzsState] = useState({title:"日志审核",
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
              const [pendingAuditLogSzbxState, setpendingAuditLogSzbxState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"待审核日志",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 待审核日志 结束属性
              
              // 已审核日志 开始属性
              const [verifiedLogsIouzState, setverifiedLogsIouzState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"已审核日志",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 已审核日志 结束属性
              
              // 两栏容器 开始属性
              const [twoColumnContainerTznsState, settwoColumnContainerTznsState] = useState({style:{width:"86%",
display:"flex",
flexDirection:"column",
justifyContent:"center",
},
})
              // 两栏容器 结束属性
              
              // 容器 开始属性
              const [containerUskaState, setcontainerUskaState] = useState({style:{width:"100%",
height:"9%",
backgroundColor:"#f0f8ff",
},
})
              // 容器 结束属性
              
              // 容器 开始属性
              const [containerNtzrState, setcontainerNtzrState] = useState({style:{width:"100%",
height:"9%",
backgroundColor:"#ffffff",
},
})
              // 容器 结束属性
              
              // 两栏容器 开始属性
              const [twoColumnContainerDlofState, settwoColumnContainerDlofState] = useState({style:{width:"100%",
display:"flex",
flexDirection:"column",
},
})
              // 两栏容器 结束属性
              
              // 容器 开始属性
              const [containerNvslState, setcontainerNvslState] = useState({style:{width:"100%",
},
})
              // 容器 结束属性
              
              // 两栏容器 开始属性
              const [twoColumnContainerWrokState, settwoColumnContainerWrokState] = useState({style:{width:"100%",
display:"flex",
flexDirection:"column",
},
})
              // 两栏容器 结束属性
              
              // 系统名称 开始属性
              const [systemNameVjvsState, setsystemNameVjvsState] = useState({style:{gap:"14px",
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
              const [systemNameOpebState, setsystemNameOpebState] = useState({code:false,
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
              const [containerOlmlState, setcontainerOlmlState] = useState({style:{width:"100%",
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
              const [iconEmfrState, seticonEmfrState] = useState({spin:false,
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
              const [exitButtonAsknState, setexitButtonAsknState] = useState({icon:undefined,
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
              const [pleaseEnterExplanatoryTitleTextKvuhState, setpleaseEnterExplanatoryTitleTextKvuhState] = useState({style:{width:"100%",
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
              const [electronicFileNumberTkheState, setelectronicFileNumberTkheState] = useState({style:{width:"100%",
height:"60px",
display:"flex",
marginTop:"1%",
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
              const [electronicFileNumberPrefixNaqtState, setelectronicFileNumberPrefixNaqtState] = useState({style:{width:"49%",
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
              const [electronicFileNumberEsxmState, setelectronicFileNumberEsxmState] = useState({code:false,
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
              const [pleaseEnterTheElectronicFileNumberCfdkState, setpleaseEnterTheElectronicFileNumberCfdkState] = useState({size:"middle",
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
},
})
              // 请输入电子文件号 结束属性
              
              // 并列题名 开始属性
              const [parallelTitleRdfqState, setparallelTitleRdfqState] = useState({style:{width:"100%",
height:"60px",
display:"flex",
marginTop:"1%",
marginLeft:"5px",
marginBottom:undefined,
justifyContent:"center",
borderTopLeftRadius:"2px",
borderTopRightRadius:"2px",
borderBottomLeftRadius:"2px",
borderBottomRightRadius:"2px",
},
})
              // 并列题名 结束属性
              
              // 全宗号 开始属性
              const [completeAccountNumberMhooState, setcompleteAccountNumberMhooState] = useState({style:{width:"49%",
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
              
              // 当前位置 开始属性
              const [currentLocationState, setcurrentLocationState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"当前位置",
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
              // 当前位置 结束属性
              
              // 请输入当前位置 开始属性
              const [pleaseEnterYourCurrentLocationState, setpleaseEnterYourCurrentLocationState] = useState({size:"middle",
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"请输入当前位置",
defaultValue:undefined,
style:{width:"60%",
},
})
              // 请输入当前位置 结束属性
              
              // 按钮 开始属性
              const [buttonBtaxState, setbuttonBtaxState] = useState({size:"middle",
type:"primary",
ghost:false,
shape:"default",
danger:false,
children:"提交",
disabled:false,
style:{width:"10%",
height:"60px",
fontSize:"26px",
marginTop:"1%",
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
style={{width:containerGxhgState.style.width,
height:containerGxhgState.style.height,
display:containerGxhgState.style.display,
}}
className={`${style.containerGxhg}`}
>
            {/* 导航菜单 */}
            <Antd.Menu
mode={navigationMenuDzojState.mode}
expandIcon={navigationMenuDzojState.expandIcon}
style={{width:navigationMenuDzojState.style.width,
height:navigationMenuDzojState.style.height,
backgroundColor:navigationMenuDzojState.style.backgroundColor,
backgroundImage:navigationMenuDzojState.style.backgroundImage,
backgroundRepeat:navigationMenuDzojState.style.backgroundRepeat,
borderTopRightRadius:navigationMenuDzojState.style.borderTopRightRadius,
borderBottomRightRadius:navigationMenuDzojState.style.borderBottomRightRadius,
}}
className={`${style.navigationMenuDzoj}`}
>
            {/* 容器 */}
            <div
style={{width:containerRispState.style.width,
height:containerRispState.style.height,
display:containerRispState.style.display,
flexWrap:containerRispState.style.flexWrap,
alignItems:containerRispState.style.alignItems,
paddingTop:containerRispState.style.paddingTop,
borderColor:containerRispState.style.borderColor,
borderStyle:containerRispState.style.borderStyle,
flexDirection:containerRispState.style.flexDirection,
justifyContent:containerRispState.style.justifyContent,
borderBottomWidth:containerRispState.style.borderBottomWidth,
}}
className={`${style.containerRisp}`}
>
            {/* 图片 */}
            <Antd.Image
alt={pictureTgigState.alt}
src={pictureTgigState.src}
width={pictureTgigState.width}
height={pictureTgigState.height}
preview={pictureTgigState.preview}
fallback={pictureTgigState.fallback}
placeholder={pictureTgigState.placeholder}
style={{width:pictureTgigState.style.width,
height:pictureTgigState.style.height,
marginTop:pictureTgigState.style.marginTop,
marginLeft:pictureTgigState.style.marginLeft,
}}
className={`${style.pictureTgig}`}
></Antd.Image>
            {/* 图片 */}
            
            {/* 管理员首页 */}
            <Antd.Typography.Text
code={administratorHomepageUxeqState.code}
mark={administratorHomepageUxeqState.mark}
type={administratorHomepageUxeqState.type}
delete={administratorHomepageUxeqState.delete}
italic={administratorHomepageUxeqState.italic}
strong={administratorHomepageUxeqState.strong}
children={administratorHomepageUxeqState.children}
copyable={administratorHomepageUxeqState.copyable}
disabled={administratorHomepageUxeqState.disabled}
editable={administratorHomepageUxeqState.editable}
ellipsis={administratorHomepageUxeqState.ellipsis}
keyboard={administratorHomepageUxeqState.keyboard}
underline={administratorHomepageUxeqState.underline}
style={{color:administratorHomepageUxeqState.style.color,
width:administratorHomepageUxeqState.style.width,
height:administratorHomepageUxeqState.style.height,
fontSize:administratorHomepageUxeqState.style.fontSize,
textAlign:administratorHomepageUxeqState.style.textAlign,
fontWeight:administratorHomepageUxeqState.style.fontWeight,
marginLeft:administratorHomepageUxeqState.style.marginLeft,
}}
className={`${style.administratorHomepageUxeq}`}
></Antd.Typography.Text>
            {/* 管理员首页 */}
            </div>
            {/* 容器 */}
            
            {/* 档号配置 */}
            <Antd.Menu.Item
key={fileNumberConfigurationHkwqState.key}
icon={fileNumberConfigurationHkwqState.icon}
danger={fileNumberConfigurationHkwqState.danger}
children={fileNumberConfigurationHkwqState.children}
disabled={fileNumberConfigurationHkwqState.disabled}
style={{color:fileNumberConfigurationHkwqState.style.color,
width:fileNumberConfigurationHkwqState.style.width,
marginLeft:fileNumberConfigurationHkwqState.style.marginLeft,
borderColor:fileNumberConfigurationHkwqState.style.borderColor,
borderStyle:fileNumberConfigurationHkwqState.style.borderStyle,
marginRight:fileNumberConfigurationHkwqState.style.marginRight,
backgroundColor:fileNumberConfigurationHkwqState.style.backgroundColor,
borderBottomWidth:fileNumberConfigurationHkwqState.style.borderBottomWidth,
borderTopLeftRadius:fileNumberConfigurationHkwqState.style.borderTopLeftRadius,
borderTopRightRadius:fileNumberConfigurationHkwqState.style.borderTopRightRadius,
borderBottomLeftRadius:fileNumberConfigurationHkwqState.style.borderBottomLeftRadius,
borderBottomRightRadius:fileNumberConfigurationHkwqState.style.borderBottomRightRadius,
}}
className={`${style.fileNumberConfigurationHkwq}`}
onClick={(eventYndy,) =>clickToConfigureFileNumberTglq(eventYndy,)}></Antd.Menu.Item>
            {/* 档号配置 */}
            
            {/* 元数据填写 */}
            <Antd.Menu.ItemGroup
title={fillInMetadataSsblState.title}
style={{color:fillInMetadataSsblState.style.color,
borderColor:fillInMetadataSsblState.style.borderColor,
borderStyle:fillInMetadataSsblState.style.borderStyle,
borderTopWidth:fillInMetadataSsblState.style.borderTopWidth,
borderLeftWidth:fillInMetadataSsblState.style.borderLeftWidth,
borderRightWidth:fillInMetadataSsblState.style.borderRightWidth,
borderBottomWidth:fillInMetadataSsblState.style.borderBottomWidth,
}}
className={`${style.fillInMetadataSsbl}`}
>
            {/* 元数据内容描述 */}
            <Antd.Menu.Item
key={descriptionOfMetadataContentRppdState.key}
icon={descriptionOfMetadataContentRppdState.icon}
danger={descriptionOfMetadataContentRppdState.danger}
children={descriptionOfMetadataContentRppdState.children}
disabled={descriptionOfMetadataContentRppdState.disabled}
style={{color:descriptionOfMetadataContentRppdState.style.color,
backgroundColor:descriptionOfMetadataContentRppdState.style.backgroundColor,
}}
className={`${style.descriptionOfMetadataContentRppd}`}
onClick={(eventYxsz,) =>whenClickedMetadataContentDescriptionWokz(eventYxsz,)}></Antd.Menu.Item>
            {/* 元数据内容描述 */}
            
            {/* 聚合层次 */}
            <Antd.Menu.Item
key={aggregationHierarchyOfkzState.key}
icon={aggregationHierarchyOfkzState.icon}
danger={aggregationHierarchyOfkzState.danger}
children={aggregationHierarchyOfkzState.children}
disabled={aggregationHierarchyOfkzState.disabled}
style={{color:aggregationHierarchyOfkzState.style.color,
backgroundColor:aggregationHierarchyOfkzState.style.backgroundColor,
}}
className={`${style.aggregationHierarchyOfkz}`}
onClick={(eventCtat,) =>clickOnAggregateHierarchySlgw(eventCtat,)}></Antd.Menu.Item>
            {/* 聚合层次 */}
            
            {/* 元数据形式特征 */}
            <Antd.Menu.Item
key={characteristicsOfMetadataFormatDokmState.key}
icon={characteristicsOfMetadataFormatDokmState.icon}
danger={characteristicsOfMetadataFormatDokmState.danger}
children={characteristicsOfMetadataFormatDokmState.children}
disabled={characteristicsOfMetadataFormatDokmState.disabled}
style={{color:characteristicsOfMetadataFormatDokmState.style.color,
}}
className={`${style.characteristicsOfMetadataFormatDokm}`}
onClick={(eventIukh,) =>whenClickedMetadataFormatFeaturesIqml(eventIukh,)}></Antd.Menu.Item>
            {/* 元数据形式特征 */}
            
            {/* 元数据存储位置 */}
            <Antd.Menu.Item
key={metadataStorageLocationUcjaState.key}
icon={metadataStorageLocationUcjaState.icon}
danger={metadataStorageLocationUcjaState.danger}
children={metadataStorageLocationUcjaState.children}
disabled={metadataStorageLocationUcjaState.disabled}
style={{color:metadataStorageLocationUcjaState.style.color,
backgroundColor:metadataStorageLocationUcjaState.style.backgroundColor,
}}
className={`${style.metadataStorageLocationUcja}`}
onClick={(eventPhce,) =>whenClickedMetadataStorageLocationInxa(eventPhce,)}></Antd.Menu.Item>
            {/* 元数据存储位置 */}
            
            {/* 元数据电子签名 */}
            <Antd.Menu.Item
key={metadataElectronicSignatureUcvkState.key}
icon={metadataElectronicSignatureUcvkState.icon}
danger={metadataElectronicSignatureUcvkState.danger}
children={metadataElectronicSignatureUcvkState.children}
disabled={metadataElectronicSignatureUcvkState.disabled}
style={{color:metadataElectronicSignatureUcvkState.style.color,
}}
className={`${style.metadataElectronicSignatureUcvk}`}
onClick={(eventOscq,) =>whenClickedMetadataElectronicSignatureWgcj(eventOscq,)}></Antd.Menu.Item>
            {/* 元数据电子签名 */}
            
            {/* 元数据来源 */}
            <Antd.Menu.Item
key={sourceOfMetadataZmsiState.key}
icon={sourceOfMetadataZmsiState.icon}
danger={sourceOfMetadataZmsiState.danger}
children={sourceOfMetadataZmsiState.children}
disabled={sourceOfMetadataZmsiState.disabled}
style={{color:sourceOfMetadataZmsiState.style.color,
}}
className={`${style.sourceOfMetadataZmsi}`}
onClick={(eventClqv,) =>whenClickedMetadataSourceKjco(eventClqv,)}></Antd.Menu.Item>
            {/* 元数据来源 */}
            
            {/* 档号 */}
            <Antd.Menu.Item
key={referenceAohaState.key}
icon={referenceAohaState.icon}
danger={referenceAohaState.danger}
children={referenceAohaState.children}
disabled={referenceAohaState.disabled}
style={{color:referenceAohaState.style.color,
}}
className={`${style.referenceAoha}`}
onClick={(eventDtej,) =>clickTimeFileNumberDfkw(eventDtej,)}></Antd.Menu.Item>
            {/* 档号 */}
            
            {/* 生成文件 */}
            <Antd.Menu.Item
key={generateFileLkmgState.key}
icon={generateFileLkmgState.icon}
danger={generateFileLkmgState.danger}
children={generateFileLkmgState.children}
disabled={generateFileLkmgState.disabled}
style={{color:generateFileLkmgState.style.color,
}}
className={`${style.generateFileLkmg}`}
onClick={(eventDuio,) =>whenClickedGenerateFileLcqx(eventDuio,)}></Antd.Menu.Item>
            {/* 生成文件 */}
            </Antd.Menu.ItemGroup>
            {/* 元数据填写 */}
            
            {/* 日志审核 */}
            <Antd.Menu.ItemGroup
title={logAuditKhzsState.title}
style={{borderColor:logAuditKhzsState.style.borderColor,
borderStyle:logAuditKhzsState.style.borderStyle,
borderTopWidth:logAuditKhzsState.style.borderTopWidth,
borderLeftWidth:logAuditKhzsState.style.borderLeftWidth,
borderRightWidth:logAuditKhzsState.style.borderRightWidth,
borderBottomWidth:logAuditKhzsState.style.borderBottomWidth,
}}
className={`${style.logAuditKhzs}`}
>
            {/* 待审核日志 */}
            <Antd.Menu.Item
key={pendingAuditLogSzbxState.key}
icon={pendingAuditLogSzbxState.icon}
danger={pendingAuditLogSzbxState.danger}
children={pendingAuditLogSzbxState.children}
disabled={pendingAuditLogSzbxState.disabled}
style={{color:pendingAuditLogSzbxState.style.color,
}}
className={`${style.pendingAuditLogSzbx}`}
onClick={(eventQvji,) =>whenClickedPendingAuditLogHdag(eventQvji,)}></Antd.Menu.Item>
            {/* 待审核日志 */}
            
            {/* 已审核日志 */}
            <Antd.Menu.Item
key={verifiedLogsIouzState.key}
icon={verifiedLogsIouzState.icon}
danger={verifiedLogsIouzState.danger}
children={verifiedLogsIouzState.children}
disabled={verifiedLogsIouzState.disabled}
style={{color:verifiedLogsIouzState.style.color,
}}
className={`${style.verifiedLogsIouz}`}
onClick={(eventSxuj,) =>whenClickedReviewedLogsNktx(eventSxuj,)}></Antd.Menu.Item>
            {/* 已审核日志 */}
            </Antd.Menu.ItemGroup>
            {/* 日志审核 */}
            </Antd.Menu>
            {/* 导航菜单 */}
            
            {/* 两栏容器 */}
            <div
style={{width:twoColumnContainerTznsState.style.width,
display:twoColumnContainerTznsState.style.display,
flexDirection:twoColumnContainerTznsState.style.flexDirection,
justifyContent:twoColumnContainerTznsState.style.justifyContent,
}}
className={`${style.twoColumnContainerTzns}`}
>
            {/* 容器 */}
            <div
style={{width:containerUskaState.style.width,
height:containerUskaState.style.height,
backgroundColor:containerUskaState.style.backgroundColor,
}}
className={`${style.containerUska}`}
>
            {/* 容器 */}
            <div
style={{width:containerNtzrState.style.width,
height:containerNtzrState.style.height,
backgroundColor:containerNtzrState.style.backgroundColor,
}}
className={`${style.containerNtzr}`}
>
            {/* 两栏容器 */}
            <div
style={{width:twoColumnContainerDlofState.style.width,
display:twoColumnContainerDlofState.style.display,
flexDirection:twoColumnContainerDlofState.style.flexDirection,
}}
className={`${style.twoColumnContainerDlof}`}
>
            {/* 容器 */}
            <div
style={{width:containerNvslState.style.width,
}}
className={`${style.containerNvsl}`}
>
            {/* 两栏容器 */}
            <div
style={{width:twoColumnContainerWrokState.style.width,
display:twoColumnContainerWrokState.style.display,
flexDirection:twoColumnContainerWrokState.style.flexDirection,
}}
className={`${style.twoColumnContainerWrok}`}
>
            {/* 系统名称 */}
            <div
style={{gap:systemNameVjvsState.style.gap,
color:systemNameVjvsState.style.color,
width:systemNameVjvsState.style.width,
height:systemNameVjvsState.style.height,
display:systemNameVjvsState.style.display,
fontSize:systemNameVjvsState.style.fontSize,
marginTop:systemNameVjvsState.style.marginTop,
textAlign:systemNameVjvsState.style.textAlign,
alignItems:systemNameVjvsState.style.alignItems,
borderColor:systemNameVjvsState.style.borderColor,
borderStyle:systemNameVjvsState.style.borderStyle,
flexDirection:systemNameVjvsState.style.flexDirection,
justifyContent:systemNameVjvsState.style.justifyContent,
backgroundColor:systemNameVjvsState.style.backgroundColor,
borderBottomWidth:systemNameVjvsState.style.borderBottomWidth,
}}
className={`${style.systemNameVjvs}`}
>
            {/* 系统名称 */}
            <Antd.Typography.Text
code={systemNameOpebState.code}
mark={systemNameOpebState.mark}
type={systemNameOpebState.type}
delete={systemNameOpebState.delete}
italic={systemNameOpebState.italic}
strong={systemNameOpebState.strong}
children={systemNameOpebState.children}
copyable={systemNameOpebState.copyable}
disabled={systemNameOpebState.disabled}
editable={systemNameOpebState.editable}
ellipsis={systemNameOpebState.ellipsis}
keyboard={systemNameOpebState.keyboard}
underline={systemNameOpebState.underline}
style={{color:systemNameOpebState.style.color,
display:systemNameOpebState.style.display,
fontSize:systemNameOpebState.style.fontSize,
textAlign:systemNameOpebState.style.textAlign,
alignItems:systemNameOpebState.style.alignItems,
fontWeight:systemNameOpebState.style.fontWeight,
justifyContent:systemNameOpebState.style.justifyContent,
}}
className={`${style.systemNameOpeb}`}
></Antd.Typography.Text>
            {/* 系统名称 */}
            </div>
            {/* 系统名称 */}
            
            {/* 容器 */}
            <div
style={{width:containerOlmlState.style.width,
height:containerOlmlState.style.height,
display:containerOlmlState.style.display,
flexWrap:containerOlmlState.style.flexWrap,
alignItems:containerOlmlState.style.alignItems,
borderColor:containerOlmlState.style.borderColor,
borderStyle:containerOlmlState.style.borderStyle,
flexDirection:containerOlmlState.style.flexDirection,
justifyContent:containerOlmlState.style.justifyContent,
backgroundColor:containerOlmlState.style.backgroundColor,
}}
className={`${style.containerOlml}`}
>
            {/* 图标 */}
            <AntdIcon.UserOutlined
spin={iconEmfrState.spin}
rotate={iconEmfrState.rotate}
twoToneColor={iconEmfrState.twoToneColor}
style={{color:iconEmfrState.style.color,
width:iconEmfrState.style.width,
height:iconEmfrState.style.height,
fontSize:iconEmfrState.style.fontSize,
marginTop:iconEmfrState.style.marginTop,
fontWeight:iconEmfrState.style.fontWeight,
marginRight:iconEmfrState.style.marginRight,
}}
className={`${style.iconEmfr}`}
></AntdIcon.UserOutlined>
            {/* 图标 */}
            
            {/* 退出按钮 */}
            <Antd.Button
icon={exitButtonAsknState.icon}
size={exitButtonAsknState.size}
type={exitButtonAsknState.type}
ghost={exitButtonAsknState.ghost}
shape={exitButtonAsknState.shape}
danger={exitButtonAsknState.danger}
loading={exitButtonAsknState.loading}
children={exitButtonAsknState.children}
disabled={exitButtonAsknState.disabled}
style={{fontSize:exitButtonAsknState.style.fontSize,
fontWeight:exitButtonAsknState.style.fontWeight,
marginRight:exitButtonAsknState.style.marginRight,
marginBottom:exitButtonAsknState.style.marginBottom,
backgroundColor:exitButtonAsknState.style.backgroundColor,
}}
className={`${style.exitButtonAskn}`}
onClick={(eventJqid,) =>clickExitButtonDzsx(eventJqid,)}></Antd.Button>
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
style={{width:pleaseEnterExplanatoryTitleTextKvuhState.style.width,
height:pleaseEnterExplanatoryTitleTextKvuhState.style.height,
display:pleaseEnterExplanatoryTitleTextKvuhState.style.display,
marginTop:pleaseEnterExplanatoryTitleTextKvuhState.style.marginTop,
borderColor:pleaseEnterExplanatoryTitleTextKvuhState.style.borderColor,
borderStyle:pleaseEnterExplanatoryTitleTextKvuhState.style.borderStyle,
paddingLeft:pleaseEnterExplanatoryTitleTextKvuhState.style.paddingLeft,
paddingRight:pleaseEnterExplanatoryTitleTextKvuhState.style.paddingRight,
flexDirection:pleaseEnterExplanatoryTitleTextKvuhState.style.flexDirection,
backgroundColor:pleaseEnterExplanatoryTitleTextKvuhState.style.backgroundColor,
}}
className={`${style.pleaseEnterExplanatoryTitleTextKvuh}`}
>
            {/* 电子文件号 */}
            <div
style={{width:electronicFileNumberTkheState.style.width,
height:electronicFileNumberTkheState.style.height,
display:electronicFileNumberTkheState.style.display,
marginTop:electronicFileNumberTkheState.style.marginTop,
marginBottom:electronicFileNumberTkheState.style.marginBottom,
justifyContent:electronicFileNumberTkheState.style.justifyContent,
borderTopLeftRadius:electronicFileNumberTkheState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumberTkheState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumberTkheState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumberTkheState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumberTkhe}`}
>
            {/* 电子文件号前缀 */}
            <div
style={{width:electronicFileNumberPrefixNaqtState.style.width,
height:electronicFileNumberPrefixNaqtState.style.height,
display:electronicFileNumberPrefixNaqtState.style.display,
alignItems:electronicFileNumberPrefixNaqtState.style.alignItems,
marginRight:electronicFileNumberPrefixNaqtState.style.marginRight,
justifyContent:electronicFileNumberPrefixNaqtState.style.justifyContent,
backgroundColor:electronicFileNumberPrefixNaqtState.style.backgroundColor,
borderTopLeftRadius:electronicFileNumberPrefixNaqtState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumberPrefixNaqtState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumberPrefixNaqtState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumberPrefixNaqtState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumberPrefixNaqt}`}
>
            {/* 电子文件号 */}
            <Antd.Typography.Text
code={electronicFileNumberEsxmState.code}
mark={electronicFileNumberEsxmState.mark}
type={electronicFileNumberEsxmState.type}
delete={electronicFileNumberEsxmState.delete}
italic={electronicFileNumberEsxmState.italic}
strong={electronicFileNumberEsxmState.strong}
children={electronicFileNumberEsxmState.children}
copyable={electronicFileNumberEsxmState.copyable}
disabled={electronicFileNumberEsxmState.disabled}
editable={electronicFileNumberEsxmState.editable}
ellipsis={electronicFileNumberEsxmState.ellipsis}
keyboard={electronicFileNumberEsxmState.keyboard}
underline={electronicFileNumberEsxmState.underline}
style={{gap:electronicFileNumberEsxmState.style.gap,
color:electronicFileNumberEsxmState.style.color,
width:electronicFileNumberEsxmState.style.width,
height:electronicFileNumberEsxmState.style.height,
display:electronicFileNumberEsxmState.style.display,
fontSize:electronicFileNumberEsxmState.style.fontSize,
textAlign:electronicFileNumberEsxmState.style.textAlign,
alignItems:electronicFileNumberEsxmState.style.alignItems,
marginRight:electronicFileNumberEsxmState.style.marginRight,
flexDirection:electronicFileNumberEsxmState.style.flexDirection,
justifyContent:electronicFileNumberEsxmState.style.justifyContent,
}}
className={`${style.electronicFileNumberEsxm}`}
></Antd.Typography.Text>
            {/* 电子文件号 */}
            
            {/* 请输入电子文件号 */}
            <Antd.Input
size={pleaseEnterTheElectronicFileNumberCfdkState.size}
prefix={pleaseEnterTheElectronicFileNumberCfdkState.prefix}
bordered={pleaseEnterTheElectronicFileNumberCfdkState.bordered}
disabled={pleaseEnterTheElectronicFileNumberCfdkState.disabled}
maxLength={pleaseEnterTheElectronicFileNumberCfdkState.maxLength}
showCount={pleaseEnterTheElectronicFileNumberCfdkState.showCount}
addonAfter={pleaseEnterTheElectronicFileNumberCfdkState.addonAfter}
allowClear={pleaseEnterTheElectronicFileNumberCfdkState.allowClear}
addonBefore={pleaseEnterTheElectronicFileNumberCfdkState.addonBefore}
placeholder={pleaseEnterTheElectronicFileNumberCfdkState.placeholder}
defaultValue={pleaseEnterTheElectronicFileNumberCfdkState.defaultValue}
style={{width:pleaseEnterTheElectronicFileNumberCfdkState.style.width,
height:pleaseEnterTheElectronicFileNumberCfdkState.style.height,
}}
className={`${style.pleaseEnterTheElectronicFileNumberCfdk}`}
></Antd.Input>
            {/* 请输入电子文件号 */}
            </div>
            {/* 电子文件号前缀 */}
            </div>
            {/* 电子文件号 */}
            
            {/* 并列题名 */}
            <div
style={{width:parallelTitleRdfqState.style.width,
height:parallelTitleRdfqState.style.height,
display:parallelTitleRdfqState.style.display,
marginTop:parallelTitleRdfqState.style.marginTop,
marginLeft:parallelTitleRdfqState.style.marginLeft,
marginBottom:parallelTitleRdfqState.style.marginBottom,
justifyContent:parallelTitleRdfqState.style.justifyContent,
borderTopLeftRadius:parallelTitleRdfqState.style.borderTopLeftRadius,
borderTopRightRadius:parallelTitleRdfqState.style.borderTopRightRadius,
borderBottomLeftRadius:parallelTitleRdfqState.style.borderBottomLeftRadius,
borderBottomRightRadius:parallelTitleRdfqState.style.borderBottomRightRadius,
}}
className={`${style.parallelTitleRdfq}`}
>
            {/* 全宗号 */}
            <div
style={{width:completeAccountNumberMhooState.style.width,
height:completeAccountNumberMhooState.style.height,
display:completeAccountNumberMhooState.style.display,
marginRight:completeAccountNumberMhooState.style.marginRight,
backgroundColor:completeAccountNumberMhooState.style.backgroundColor,
borderTopLeftRadius:completeAccountNumberMhooState.style.borderTopLeftRadius,
borderTopRightRadius:completeAccountNumberMhooState.style.borderTopRightRadius,
borderBottomLeftRadius:completeAccountNumberMhooState.style.borderBottomLeftRadius,
borderBottomRightRadius:completeAccountNumberMhooState.style.borderBottomRightRadius,
}}
className={`${style.completeAccountNumberMhoo}`}
>
            {/* 当前位置 */}
            <Antd.Typography.Text
code={currentLocationState.code}
mark={currentLocationState.mark}
type={currentLocationState.type}
delete={currentLocationState.delete}
italic={currentLocationState.italic}
strong={currentLocationState.strong}
children={currentLocationState.children}
copyable={currentLocationState.copyable}
disabled={currentLocationState.disabled}
editable={currentLocationState.editable}
ellipsis={currentLocationState.ellipsis}
keyboard={currentLocationState.keyboard}
underline={currentLocationState.underline}
style={{gap:currentLocationState.style.gap,
color:currentLocationState.style.color,
width:currentLocationState.style.width,
height:currentLocationState.style.height,
display:currentLocationState.style.display,
fontSize:currentLocationState.style.fontSize,
textAlign:currentLocationState.style.textAlign,
alignItems:currentLocationState.style.alignItems,
marginRight:currentLocationState.style.marginRight,
flexDirection:currentLocationState.style.flexDirection,
justifyContent:currentLocationState.style.justifyContent,
}}
className={`${style.currentLocation}`}
></Antd.Typography.Text>
            {/* 当前位置 */}
            
            {/* 请输入当前位置 */}
            <Antd.Input
size={pleaseEnterYourCurrentLocationState.size}
prefix={pleaseEnterYourCurrentLocationState.prefix}
bordered={pleaseEnterYourCurrentLocationState.bordered}
disabled={pleaseEnterYourCurrentLocationState.disabled}
maxLength={pleaseEnterYourCurrentLocationState.maxLength}
showCount={pleaseEnterYourCurrentLocationState.showCount}
addonAfter={pleaseEnterYourCurrentLocationState.addonAfter}
allowClear={pleaseEnterYourCurrentLocationState.allowClear}
addonBefore={pleaseEnterYourCurrentLocationState.addonBefore}
placeholder={pleaseEnterYourCurrentLocationState.placeholder}
defaultValue={pleaseEnterYourCurrentLocationState.defaultValue}
style={{width:pleaseEnterYourCurrentLocationState.style.width,
}}
className={`${style.pleaseEnterYourCurrentLocation}`}
></Antd.Input>
            {/* 请输入当前位置 */}
            </div>
            {/* 全宗号 */}
            </div>
            {/* 并列题名 */}
            
            {/* 按钮 */}
            <Antd.Button
size={buttonBtaxState.size}
type={buttonBtaxState.type}
ghost={buttonBtaxState.ghost}
shape={buttonBtaxState.shape}
danger={buttonBtaxState.danger}
children={buttonBtaxState.children}
disabled={buttonBtaxState.disabled}
style={{width:buttonBtaxState.style.width,
height:buttonBtaxState.style.height,
fontSize:buttonBtaxState.style.fontSize,
marginTop:buttonBtaxState.style.marginTop,
fontWeight:buttonBtaxState.style.fontWeight,
marginLeft:buttonBtaxState.style.marginLeft,
marginRight:buttonBtaxState.style.marginRight,
borderTopLeftRadius:buttonBtaxState.style.borderTopLeftRadius,
borderTopRightRadius:buttonBtaxState.style.borderTopRightRadius,
borderBottomLeftRadius:buttonBtaxState.style.borderBottomLeftRadius,
borderBottomRightRadius:buttonBtaxState.style.borderBottomRightRadius,
}}
className={`${style.buttonBtax}`}
></Antd.Button>
            {/* 按钮 */}
            </div>
            {/* 请输入说明题名文字 */}
            </div>
            {/* 两栏容器 */}
            </div>
            {/* 容器 */}
            </>}
export default MetadataStorageLocationDyss
export { MetadataStorageLocationDyss }