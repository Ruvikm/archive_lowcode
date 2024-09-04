import style from './index.module.scss'
import { useState } from 'react'
import * as Antd from '@/components/antd'
import { routes } from '@/router/index'
import { getParentInfoList } from '@/utils'
import { useNavigate } from 'react-router-dom'
import * as AntdIcon from '@ant-design/icons'
// 聚合层次
              const AggregationHierarchyGtyj = () => {
const navigate = useNavigate()
// 点击时-档号配置
          const clickToConfigureFileNumberXjfg = (eventTkue,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageDano").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据内容描述
          const whenClickedMetadataContentDescriptionKeyx = (eventGzvt,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "page401").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-聚合层次
          const clickOnAggregateHierarchySeqy = (eventVone,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageVomd").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据形式特征
          const whenClickedMetadataFormatFeatures = (eventDebo,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageWcoq").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据存储位置
          const whenClickedMetadataStorageLocation = (eventHmvb,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageDbgh").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据电子签名
          const whenClickedMetadataElectronicSignature = (eventPdhr,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageWsbf").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据来源
          const whenClickedMetadataSource = (eventLupo,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageGafh").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-档号
          const clickTimeFileNumber = (eventLesb,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageGafh").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-待审核日志
          const whenClickedPendingAuditLogItei = (eventPpso,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageZuvc").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-已审核日志
          const whenClickedReviewedLogsRxpj = (eventIxpo,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageStsm").slice(1).map(item => item.path).join('/')}`)
}
// 点击-退出按钮
          const clickExitButtonExoc = (eventMaqn,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "defaultPageFhue").slice(1).map(item => item.path).join('/')}`)
}

              // 容器 开始属性
              const [containerQsrjState, setcontainerQsrjState] = useState({style:{width:"100vw",
height:"100vh",
display:"flex",
},
})
              // 容器 结束属性
              
              // 导航菜单 开始属性
              const [navigationMenuDfzqState, setnavigationMenuDfzqState] = useState({mode:"vertical",
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
              const [containerCtycState, setcontainerCtycState] = useState({style:{width:"100%",
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
              const [pictureEkjoState, setpictureEkjoState] = useState({alt:undefined,
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
              const [administratorHomepageTvmuState, setadministratorHomepageTvmuState] = useState({code:false,
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
              const [fileNumberConfigurationRerjState, setfileNumberConfigurationRerjState] = useState({key:undefined,
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
              const [fillInMetadataHowyState, setfillInMetadataHowyState] = useState({title:"元数据填写",
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
              const [descriptionOfMetadataContentKehuState, setdescriptionOfMetadataContentKehuState] = useState({key:undefined,
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
              const [aggregationHierarchyErvpState, setaggregationHierarchyErvpState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"聚合层次",
disabled:false,
style:{color:"#f0f8ff",
backgroundColor:"#6d8fc0",
},
})
              // 聚合层次 结束属性
              
              // 元数据形式特征 开始属性
              const [characteristicsOfMetadataFormatAeetState, setcharacteristicsOfMetadataFormatAeetState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据形式特征",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 元数据形式特征 结束属性
              
              // 元数据存储位置 开始属性
              const [metadataStorageLocationZrsvState, setmetadataStorageLocationZrsvState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据存储位置",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 元数据存储位置 结束属性
              
              // 元数据电子签名 开始属性
              const [metadataElectronicSignatureBdoaState, setmetadataElectronicSignatureBdoaState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据电子签名",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 元数据电子签名 结束属性
              
              // 元数据来源 开始属性
              const [sourceOfMetadataJxojState, setsourceOfMetadataJxojState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据来源",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 元数据来源 结束属性
              
              // 档号 开始属性
              const [referenceBqhnState, setreferenceBqhnState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"档号",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 档号 结束属性
              
              // 生成文件 开始属性
              const [generateFileXnjbState, setgenerateFileXnjbState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"生成文件",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 生成文件 结束属性
              
              // 日志审核 开始属性
              const [logAuditHefyState, setlogAuditHefyState] = useState({title:"日志审核",
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
              const [pendingAuditLogWfteState, setpendingAuditLogWfteState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"待审核日志",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 待审核日志 结束属性
              
              // 已审核日志 开始属性
              const [verifiedLogsUwcoState, setverifiedLogsUwcoState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"已审核日志",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 已审核日志 结束属性
              
              // 两栏容器 开始属性
              const [twoColumnContainerAcnzState, settwoColumnContainerAcnzState] = useState({style:{width:"86%",
display:"flex",
flexDirection:"column",
justifyContent:"center",
},
})
              // 两栏容器 结束属性
              
              // 容器 开始属性
              const [containerCymyState, setcontainerCymyState] = useState({style:{width:"100%",
height:"9%",
backgroundColor:"#f0f8ff",
},
})
              // 容器 结束属性
              
              // 容器 开始属性
              const [containerDgcuState, setcontainerDgcuState] = useState({style:{width:"100%",
height:"9%",
backgroundColor:"#ffffff",
},
})
              // 容器 结束属性
              
              // 两栏容器 开始属性
              const [twoColumnContainerImiaState, settwoColumnContainerImiaState] = useState({style:{width:"100%",
display:"flex",
flexDirection:"column",
},
})
              // 两栏容器 结束属性
              
              // 容器 开始属性
              const [containerEgguState, setcontainerEgguState] = useState({style:{width:"100%",
},
})
              // 容器 结束属性
              
              // 两栏容器 开始属性
              const [twoColumnContainerMtnjState, settwoColumnContainerMtnjState] = useState({style:{width:"100%",
display:"flex",
marginTop:"-2px",
flexDirection:"column",
},
})
              // 两栏容器 结束属性
              
              // 系统名称 开始属性
              const [systemNameQcfuState, setsystemNameQcfuState] = useState({style:{gap:"14px",
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
              const [systemNameWxqrState, setsystemNameWxqrState] = useState({code:false,
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
              const [containerXomoState, setcontainerXomoState] = useState({style:{width:"100%",
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
              const [iconBhkhState, seticonBhkhState] = useState({spin:false,
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
              const [exitButtonNnrbState, setexitButtonNnrbState] = useState({icon:undefined,
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
              const [pleaseEnterExplanatoryTitleTextState, setpleaseEnterExplanatoryTitleTextState] = useState({style:{width:"100%",
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
              const [electronicFileNumberState, setelectronicFileNumberState] = useState({style:{width:"100%",
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
              const [electronicFileNumberPrefixAaqrState, setelectronicFileNumberPrefixAaqrState] = useState({style:{width:"49%",
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
              const [electronicFileNumberVhldState, setelectronicFileNumberVhldState] = useState({code:false,
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
              const [pleaseEnterTheElectronicFileNumberState, setpleaseEnterTheElectronicFileNumberState] = useState({size:"middle",
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
              
              // 电子文件号1 开始属性
              const [electronicFileNumberCsvcState, setelectronicFileNumberCsvcState] = useState({style:{width:"100%",
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
              // 电子文件号1 结束属性
              
              // 电子文件号前缀 开始属性
              const [electronicFileNumberPrefixMiydState, setelectronicFileNumberPrefixMiydState] = useState({style:{width:"49%",
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
              
              // 聚合层次 开始属性
              const [aggregationHierarchyEwyaState, setaggregationHierarchyEwyaState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"聚合层次",
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
              // 聚合层次 结束属性
              
              // 请输入聚合层次 开始属性
              const [pleaseEnterTheAggregationHierarchyState, setpleaseEnterTheAggregationHierarchyState] = useState({size:"middle",
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"聚合层次",
defaultValue:undefined,
style:{width:"60%",
height:"60px",
},
})
              // 请输入聚合层次 结束属性
              
              // 按钮 开始属性
              const [buttonYiseState, setbuttonYiseState] = useState({size:"middle",
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
style={{width:containerQsrjState.style.width,
height:containerQsrjState.style.height,
display:containerQsrjState.style.display,
}}
className={`${style.containerQsrj}`}
>
            {/* 导航菜单 */}
            <Antd.Menu
mode={navigationMenuDfzqState.mode}
expandIcon={navigationMenuDfzqState.expandIcon}
style={{width:navigationMenuDfzqState.style.width,
height:navigationMenuDfzqState.style.height,
backgroundColor:navigationMenuDfzqState.style.backgroundColor,
backgroundImage:navigationMenuDfzqState.style.backgroundImage,
backgroundRepeat:navigationMenuDfzqState.style.backgroundRepeat,
borderTopRightRadius:navigationMenuDfzqState.style.borderTopRightRadius,
borderBottomRightRadius:navigationMenuDfzqState.style.borderBottomRightRadius,
}}
className={`${style.navigationMenuDfzq}`}
>
            {/* 容器 */}
            <div
style={{width:containerCtycState.style.width,
height:containerCtycState.style.height,
display:containerCtycState.style.display,
flexWrap:containerCtycState.style.flexWrap,
alignItems:containerCtycState.style.alignItems,
paddingTop:containerCtycState.style.paddingTop,
borderColor:containerCtycState.style.borderColor,
borderStyle:containerCtycState.style.borderStyle,
flexDirection:containerCtycState.style.flexDirection,
justifyContent:containerCtycState.style.justifyContent,
borderBottomWidth:containerCtycState.style.borderBottomWidth,
}}
className={`${style.containerCtyc}`}
>
            {/* 图片 */}
            <Antd.Image
alt={pictureEkjoState.alt}
src={pictureEkjoState.src}
width={pictureEkjoState.width}
height={pictureEkjoState.height}
preview={pictureEkjoState.preview}
fallback={pictureEkjoState.fallback}
placeholder={pictureEkjoState.placeholder}
style={{width:pictureEkjoState.style.width,
height:pictureEkjoState.style.height,
marginTop:pictureEkjoState.style.marginTop,
marginLeft:pictureEkjoState.style.marginLeft,
}}
className={`${style.pictureEkjo}`}
></Antd.Image>
            {/* 图片 */}
            
            {/* 管理员首页 */}
            <Antd.Typography.Text
code={administratorHomepageTvmuState.code}
mark={administratorHomepageTvmuState.mark}
type={administratorHomepageTvmuState.type}
delete={administratorHomepageTvmuState.delete}
italic={administratorHomepageTvmuState.italic}
strong={administratorHomepageTvmuState.strong}
children={administratorHomepageTvmuState.children}
copyable={administratorHomepageTvmuState.copyable}
disabled={administratorHomepageTvmuState.disabled}
editable={administratorHomepageTvmuState.editable}
ellipsis={administratorHomepageTvmuState.ellipsis}
keyboard={administratorHomepageTvmuState.keyboard}
underline={administratorHomepageTvmuState.underline}
style={{color:administratorHomepageTvmuState.style.color,
width:administratorHomepageTvmuState.style.width,
height:administratorHomepageTvmuState.style.height,
fontSize:administratorHomepageTvmuState.style.fontSize,
textAlign:administratorHomepageTvmuState.style.textAlign,
fontWeight:administratorHomepageTvmuState.style.fontWeight,
marginLeft:administratorHomepageTvmuState.style.marginLeft,
}}
className={`${style.administratorHomepageTvmu}`}
></Antd.Typography.Text>
            {/* 管理员首页 */}
            </div>
            {/* 容器 */}
            
            {/* 档号配置 */}
            <Antd.Menu.Item
key={fileNumberConfigurationRerjState.key}
icon={fileNumberConfigurationRerjState.icon}
danger={fileNumberConfigurationRerjState.danger}
children={fileNumberConfigurationRerjState.children}
disabled={fileNumberConfigurationRerjState.disabled}
style={{color:fileNumberConfigurationRerjState.style.color,
width:fileNumberConfigurationRerjState.style.width,
marginLeft:fileNumberConfigurationRerjState.style.marginLeft,
borderColor:fileNumberConfigurationRerjState.style.borderColor,
borderStyle:fileNumberConfigurationRerjState.style.borderStyle,
marginRight:fileNumberConfigurationRerjState.style.marginRight,
backgroundColor:fileNumberConfigurationRerjState.style.backgroundColor,
borderBottomWidth:fileNumberConfigurationRerjState.style.borderBottomWidth,
borderTopLeftRadius:fileNumberConfigurationRerjState.style.borderTopLeftRadius,
borderTopRightRadius:fileNumberConfigurationRerjState.style.borderTopRightRadius,
borderBottomLeftRadius:fileNumberConfigurationRerjState.style.borderBottomLeftRadius,
borderBottomRightRadius:fileNumberConfigurationRerjState.style.borderBottomRightRadius,
}}
className={`${style.fileNumberConfigurationRerj}`}
onClick={(eventTkue,) =>clickToConfigureFileNumberXjfg(eventTkue,)}></Antd.Menu.Item>
            {/* 档号配置 */}
            
            {/* 元数据填写 */}
            <Antd.Menu.ItemGroup
title={fillInMetadataHowyState.title}
style={{color:fillInMetadataHowyState.style.color,
borderColor:fillInMetadataHowyState.style.borderColor,
borderStyle:fillInMetadataHowyState.style.borderStyle,
borderTopWidth:fillInMetadataHowyState.style.borderTopWidth,
borderLeftWidth:fillInMetadataHowyState.style.borderLeftWidth,
borderRightWidth:fillInMetadataHowyState.style.borderRightWidth,
borderBottomWidth:fillInMetadataHowyState.style.borderBottomWidth,
}}
className={`${style.fillInMetadataHowy}`}
>
            {/* 元数据内容描述 */}
            <Antd.Menu.Item
key={descriptionOfMetadataContentKehuState.key}
icon={descriptionOfMetadataContentKehuState.icon}
danger={descriptionOfMetadataContentKehuState.danger}
children={descriptionOfMetadataContentKehuState.children}
disabled={descriptionOfMetadataContentKehuState.disabled}
style={{color:descriptionOfMetadataContentKehuState.style.color,
backgroundColor:descriptionOfMetadataContentKehuState.style.backgroundColor,
}}
className={`${style.descriptionOfMetadataContentKehu}`}
onClick={(eventGzvt,) =>whenClickedMetadataContentDescriptionKeyx(eventGzvt,)}></Antd.Menu.Item>
            {/* 元数据内容描述 */}
            
            {/* 聚合层次 */}
            <Antd.Menu.Item
key={aggregationHierarchyErvpState.key}
icon={aggregationHierarchyErvpState.icon}
danger={aggregationHierarchyErvpState.danger}
children={aggregationHierarchyErvpState.children}
disabled={aggregationHierarchyErvpState.disabled}
style={{color:aggregationHierarchyErvpState.style.color,
backgroundColor:aggregationHierarchyErvpState.style.backgroundColor,
}}
className={`${style.aggregationHierarchyErvp}`}
onClick={(eventVone,) =>clickOnAggregateHierarchySeqy(eventVone,)}></Antd.Menu.Item>
            {/* 聚合层次 */}
            
            {/* 元数据形式特征 */}
            <Antd.Menu.Item
key={characteristicsOfMetadataFormatAeetState.key}
icon={characteristicsOfMetadataFormatAeetState.icon}
danger={characteristicsOfMetadataFormatAeetState.danger}
children={characteristicsOfMetadataFormatAeetState.children}
disabled={characteristicsOfMetadataFormatAeetState.disabled}
style={{color:characteristicsOfMetadataFormatAeetState.style.color,
}}
className={`${style.characteristicsOfMetadataFormatAeet}`}
onClick={(eventDebo,) =>whenClickedMetadataFormatFeatures(eventDebo,)}></Antd.Menu.Item>
            {/* 元数据形式特征 */}
            
            {/* 元数据存储位置 */}
            <Antd.Menu.Item
key={metadataStorageLocationZrsvState.key}
icon={metadataStorageLocationZrsvState.icon}
danger={metadataStorageLocationZrsvState.danger}
children={metadataStorageLocationZrsvState.children}
disabled={metadataStorageLocationZrsvState.disabled}
style={{color:metadataStorageLocationZrsvState.style.color,
}}
className={`${style.metadataStorageLocationZrsv}`}
onClick={(eventHmvb,) =>whenClickedMetadataStorageLocation(eventHmvb,)}></Antd.Menu.Item>
            {/* 元数据存储位置 */}
            
            {/* 元数据电子签名 */}
            <Antd.Menu.Item
key={metadataElectronicSignatureBdoaState.key}
icon={metadataElectronicSignatureBdoaState.icon}
danger={metadataElectronicSignatureBdoaState.danger}
children={metadataElectronicSignatureBdoaState.children}
disabled={metadataElectronicSignatureBdoaState.disabled}
style={{color:metadataElectronicSignatureBdoaState.style.color,
}}
className={`${style.metadataElectronicSignatureBdoa}`}
onClick={(eventPdhr,) =>whenClickedMetadataElectronicSignature(eventPdhr,)}></Antd.Menu.Item>
            {/* 元数据电子签名 */}
            
            {/* 元数据来源 */}
            <Antd.Menu.Item
key={sourceOfMetadataJxojState.key}
icon={sourceOfMetadataJxojState.icon}
danger={sourceOfMetadataJxojState.danger}
children={sourceOfMetadataJxojState.children}
disabled={sourceOfMetadataJxojState.disabled}
style={{color:sourceOfMetadataJxojState.style.color,
}}
className={`${style.sourceOfMetadataJxoj}`}
onClick={(eventLupo,) =>whenClickedMetadataSource(eventLupo,)}></Antd.Menu.Item>
            {/* 元数据来源 */}
            
            {/* 档号 */}
            <Antd.Menu.Item
key={referenceBqhnState.key}
icon={referenceBqhnState.icon}
danger={referenceBqhnState.danger}
children={referenceBqhnState.children}
disabled={referenceBqhnState.disabled}
style={{color:referenceBqhnState.style.color,
}}
className={`${style.referenceBqhn}`}
onClick={(eventLesb,) =>clickTimeFileNumber(eventLesb,)}></Antd.Menu.Item>
            {/* 档号 */}
            
            {/* 生成文件 */}
            <Antd.Menu.Item
key={generateFileXnjbState.key}
icon={generateFileXnjbState.icon}
danger={generateFileXnjbState.danger}
children={generateFileXnjbState.children}
disabled={generateFileXnjbState.disabled}
style={{color:generateFileXnjbState.style.color,
}}
className={`${style.generateFileXnjb}`}
></Antd.Menu.Item>
            {/* 生成文件 */}
            </Antd.Menu.ItemGroup>
            {/* 元数据填写 */}
            
            {/* 日志审核 */}
            <Antd.Menu.ItemGroup
title={logAuditHefyState.title}
style={{borderColor:logAuditHefyState.style.borderColor,
borderStyle:logAuditHefyState.style.borderStyle,
borderTopWidth:logAuditHefyState.style.borderTopWidth,
borderLeftWidth:logAuditHefyState.style.borderLeftWidth,
borderRightWidth:logAuditHefyState.style.borderRightWidth,
borderBottomWidth:logAuditHefyState.style.borderBottomWidth,
}}
className={`${style.logAuditHefy}`}
>
            {/* 待审核日志 */}
            <Antd.Menu.Item
key={pendingAuditLogWfteState.key}
icon={pendingAuditLogWfteState.icon}
danger={pendingAuditLogWfteState.danger}
children={pendingAuditLogWfteState.children}
disabled={pendingAuditLogWfteState.disabled}
style={{color:pendingAuditLogWfteState.style.color,
}}
className={`${style.pendingAuditLogWfte}`}
onClick={(eventPpso,) =>whenClickedPendingAuditLogItei(eventPpso,)}></Antd.Menu.Item>
            {/* 待审核日志 */}
            
            {/* 已审核日志 */}
            <Antd.Menu.Item
key={verifiedLogsUwcoState.key}
icon={verifiedLogsUwcoState.icon}
danger={verifiedLogsUwcoState.danger}
children={verifiedLogsUwcoState.children}
disabled={verifiedLogsUwcoState.disabled}
style={{color:verifiedLogsUwcoState.style.color,
}}
className={`${style.verifiedLogsUwco}`}
onClick={(eventIxpo,) =>whenClickedReviewedLogsRxpj(eventIxpo,)}></Antd.Menu.Item>
            {/* 已审核日志 */}
            </Antd.Menu.ItemGroup>
            {/* 日志审核 */}
            </Antd.Menu>
            {/* 导航菜单 */}
            
            {/* 两栏容器 */}
            <div
style={{width:twoColumnContainerAcnzState.style.width,
display:twoColumnContainerAcnzState.style.display,
flexDirection:twoColumnContainerAcnzState.style.flexDirection,
justifyContent:twoColumnContainerAcnzState.style.justifyContent,
}}
className={`${style.twoColumnContainerAcnz}`}
>
            {/* 容器 */}
            <div
style={{width:containerCymyState.style.width,
height:containerCymyState.style.height,
backgroundColor:containerCymyState.style.backgroundColor,
}}
className={`${style.containerCymy}`}
>
            {/* 容器 */}
            <div
style={{width:containerDgcuState.style.width,
height:containerDgcuState.style.height,
backgroundColor:containerDgcuState.style.backgroundColor,
}}
className={`${style.containerDgcu}`}
>
            {/* 两栏容器 */}
            <div
style={{width:twoColumnContainerImiaState.style.width,
display:twoColumnContainerImiaState.style.display,
flexDirection:twoColumnContainerImiaState.style.flexDirection,
}}
className={`${style.twoColumnContainerImia}`}
>
            {/* 容器 */}
            <div
style={{width:containerEgguState.style.width,
}}
className={`${style.containerEggu}`}
>
            {/* 两栏容器 */}
            <div
style={{width:twoColumnContainerMtnjState.style.width,
display:twoColumnContainerMtnjState.style.display,
marginTop:twoColumnContainerMtnjState.style.marginTop,
flexDirection:twoColumnContainerMtnjState.style.flexDirection,
}}
className={`${style.twoColumnContainerMtnj}`}
>
            {/* 系统名称 */}
            <div
style={{gap:systemNameQcfuState.style.gap,
color:systemNameQcfuState.style.color,
width:systemNameQcfuState.style.width,
height:systemNameQcfuState.style.height,
display:systemNameQcfuState.style.display,
fontSize:systemNameQcfuState.style.fontSize,
textAlign:systemNameQcfuState.style.textAlign,
alignItems:systemNameQcfuState.style.alignItems,
borderColor:systemNameQcfuState.style.borderColor,
borderStyle:systemNameQcfuState.style.borderStyle,
flexDirection:systemNameQcfuState.style.flexDirection,
justifyContent:systemNameQcfuState.style.justifyContent,
backgroundColor:systemNameQcfuState.style.backgroundColor,
borderBottomWidth:systemNameQcfuState.style.borderBottomWidth,
}}
className={`${style.systemNameQcfu}`}
>
            {/* 系统名称 */}
            <Antd.Typography.Text
code={systemNameWxqrState.code}
mark={systemNameWxqrState.mark}
type={systemNameWxqrState.type}
delete={systemNameWxqrState.delete}
italic={systemNameWxqrState.italic}
strong={systemNameWxqrState.strong}
children={systemNameWxqrState.children}
copyable={systemNameWxqrState.copyable}
disabled={systemNameWxqrState.disabled}
editable={systemNameWxqrState.editable}
ellipsis={systemNameWxqrState.ellipsis}
keyboard={systemNameWxqrState.keyboard}
underline={systemNameWxqrState.underline}
style={{color:systemNameWxqrState.style.color,
display:systemNameWxqrState.style.display,
fontSize:systemNameWxqrState.style.fontSize,
textAlign:systemNameWxqrState.style.textAlign,
alignItems:systemNameWxqrState.style.alignItems,
fontWeight:systemNameWxqrState.style.fontWeight,
justifyContent:systemNameWxqrState.style.justifyContent,
}}
className={`${style.systemNameWxqr}`}
></Antd.Typography.Text>
            {/* 系统名称 */}
            </div>
            {/* 系统名称 */}
            
            {/* 容器 */}
            <div
style={{width:containerXomoState.style.width,
height:containerXomoState.style.height,
display:containerXomoState.style.display,
flexWrap:containerXomoState.style.flexWrap,
alignItems:containerXomoState.style.alignItems,
borderColor:containerXomoState.style.borderColor,
borderStyle:containerXomoState.style.borderStyle,
flexDirection:containerXomoState.style.flexDirection,
justifyContent:containerXomoState.style.justifyContent,
backgroundColor:containerXomoState.style.backgroundColor,
}}
className={`${style.containerXomo}`}
>
            {/* 图标 */}
            <AntdIcon.UserOutlined
spin={iconBhkhState.spin}
rotate={iconBhkhState.rotate}
twoToneColor={iconBhkhState.twoToneColor}
style={{color:iconBhkhState.style.color,
width:iconBhkhState.style.width,
height:iconBhkhState.style.height,
fontSize:iconBhkhState.style.fontSize,
marginTop:iconBhkhState.style.marginTop,
fontWeight:iconBhkhState.style.fontWeight,
marginRight:iconBhkhState.style.marginRight,
}}
className={`${style.iconBhkh}`}
></AntdIcon.UserOutlined>
            {/* 图标 */}
            
            {/* 退出按钮 */}
            <Antd.Button
icon={exitButtonNnrbState.icon}
size={exitButtonNnrbState.size}
type={exitButtonNnrbState.type}
ghost={exitButtonNnrbState.ghost}
shape={exitButtonNnrbState.shape}
danger={exitButtonNnrbState.danger}
loading={exitButtonNnrbState.loading}
children={exitButtonNnrbState.children}
disabled={exitButtonNnrbState.disabled}
style={{fontSize:exitButtonNnrbState.style.fontSize,
fontWeight:exitButtonNnrbState.style.fontWeight,
marginRight:exitButtonNnrbState.style.marginRight,
marginBottom:exitButtonNnrbState.style.marginBottom,
backgroundColor:exitButtonNnrbState.style.backgroundColor,
}}
className={`${style.exitButtonNnrb}`}
onClick={(eventMaqn,) =>clickExitButtonExoc(eventMaqn,)}></Antd.Button>
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
style={{width:pleaseEnterExplanatoryTitleTextState.style.width,
height:pleaseEnterExplanatoryTitleTextState.style.height,
display:pleaseEnterExplanatoryTitleTextState.style.display,
marginTop:pleaseEnterExplanatoryTitleTextState.style.marginTop,
borderColor:pleaseEnterExplanatoryTitleTextState.style.borderColor,
borderStyle:pleaseEnterExplanatoryTitleTextState.style.borderStyle,
paddingLeft:pleaseEnterExplanatoryTitleTextState.style.paddingLeft,
paddingRight:pleaseEnterExplanatoryTitleTextState.style.paddingRight,
flexDirection:pleaseEnterExplanatoryTitleTextState.style.flexDirection,
backgroundColor:pleaseEnterExplanatoryTitleTextState.style.backgroundColor,
}}
className={`${style.pleaseEnterExplanatoryTitleText}`}
>
            {/* 电子文件号 */}
            <div
style={{width:electronicFileNumberState.style.width,
height:electronicFileNumberState.style.height,
display:electronicFileNumberState.style.display,
marginTop:electronicFileNumberState.style.marginTop,
marginBottom:electronicFileNumberState.style.marginBottom,
justifyContent:electronicFileNumberState.style.justifyContent,
borderTopLeftRadius:electronicFileNumberState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumberState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumberState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumberState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumber}`}
>
            {/* 电子文件号前缀 */}
            <div
style={{width:electronicFileNumberPrefixAaqrState.style.width,
height:electronicFileNumberPrefixAaqrState.style.height,
display:electronicFileNumberPrefixAaqrState.style.display,
alignItems:electronicFileNumberPrefixAaqrState.style.alignItems,
marginRight:electronicFileNumberPrefixAaqrState.style.marginRight,
justifyContent:electronicFileNumberPrefixAaqrState.style.justifyContent,
backgroundColor:electronicFileNumberPrefixAaqrState.style.backgroundColor,
borderTopLeftRadius:electronicFileNumberPrefixAaqrState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumberPrefixAaqrState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumberPrefixAaqrState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumberPrefixAaqrState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumberPrefixAaqr}`}
>
            {/* 电子文件号 */}
            <Antd.Typography.Text
code={electronicFileNumberVhldState.code}
mark={electronicFileNumberVhldState.mark}
type={electronicFileNumberVhldState.type}
delete={electronicFileNumberVhldState.delete}
italic={electronicFileNumberVhldState.italic}
strong={electronicFileNumberVhldState.strong}
children={electronicFileNumberVhldState.children}
copyable={electronicFileNumberVhldState.copyable}
disabled={electronicFileNumberVhldState.disabled}
editable={electronicFileNumberVhldState.editable}
ellipsis={electronicFileNumberVhldState.ellipsis}
keyboard={electronicFileNumberVhldState.keyboard}
underline={electronicFileNumberVhldState.underline}
style={{gap:electronicFileNumberVhldState.style.gap,
color:electronicFileNumberVhldState.style.color,
width:electronicFileNumberVhldState.style.width,
height:electronicFileNumberVhldState.style.height,
display:electronicFileNumberVhldState.style.display,
fontSize:electronicFileNumberVhldState.style.fontSize,
textAlign:electronicFileNumberVhldState.style.textAlign,
alignItems:electronicFileNumberVhldState.style.alignItems,
marginRight:electronicFileNumberVhldState.style.marginRight,
flexDirection:electronicFileNumberVhldState.style.flexDirection,
justifyContent:electronicFileNumberVhldState.style.justifyContent,
}}
className={`${style.electronicFileNumberVhld}`}
></Antd.Typography.Text>
            {/* 电子文件号 */}
            
            {/* 请输入电子文件号 */}
            <Antd.Input
size={pleaseEnterTheElectronicFileNumberState.size}
prefix={pleaseEnterTheElectronicFileNumberState.prefix}
bordered={pleaseEnterTheElectronicFileNumberState.bordered}
disabled={pleaseEnterTheElectronicFileNumberState.disabled}
maxLength={pleaseEnterTheElectronicFileNumberState.maxLength}
showCount={pleaseEnterTheElectronicFileNumberState.showCount}
addonAfter={pleaseEnterTheElectronicFileNumberState.addonAfter}
allowClear={pleaseEnterTheElectronicFileNumberState.allowClear}
addonBefore={pleaseEnterTheElectronicFileNumberState.addonBefore}
placeholder={pleaseEnterTheElectronicFileNumberState.placeholder}
defaultValue={pleaseEnterTheElectronicFileNumberState.defaultValue}
style={{width:pleaseEnterTheElectronicFileNumberState.style.width,
height:pleaseEnterTheElectronicFileNumberState.style.height,
}}
className={`${style.pleaseEnterTheElectronicFileNumber}`}
></Antd.Input>
            {/* 请输入电子文件号 */}
            </div>
            {/* 电子文件号前缀 */}
            </div>
            {/* 电子文件号 */}
            
            {/* 电子文件号1 */}
            <div
style={{width:electronicFileNumberCsvcState.style.width,
height:electronicFileNumberCsvcState.style.height,
display:electronicFileNumberCsvcState.style.display,
marginTop:electronicFileNumberCsvcState.style.marginTop,
marginBottom:electronicFileNumberCsvcState.style.marginBottom,
justifyContent:electronicFileNumberCsvcState.style.justifyContent,
borderTopLeftRadius:electronicFileNumberCsvcState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumberCsvcState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumberCsvcState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumberCsvcState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumberCsvc}`}
>
            {/* 电子文件号前缀 */}
            <div
style={{width:electronicFileNumberPrefixMiydState.style.width,
height:electronicFileNumberPrefixMiydState.style.height,
display:electronicFileNumberPrefixMiydState.style.display,
alignItems:electronicFileNumberPrefixMiydState.style.alignItems,
marginRight:electronicFileNumberPrefixMiydState.style.marginRight,
justifyContent:electronicFileNumberPrefixMiydState.style.justifyContent,
backgroundColor:electronicFileNumberPrefixMiydState.style.backgroundColor,
borderTopLeftRadius:electronicFileNumberPrefixMiydState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumberPrefixMiydState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumberPrefixMiydState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumberPrefixMiydState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumberPrefixMiyd}`}
>
            {/* 聚合层次 */}
            <Antd.Typography.Text
code={aggregationHierarchyEwyaState.code}
mark={aggregationHierarchyEwyaState.mark}
type={aggregationHierarchyEwyaState.type}
delete={aggregationHierarchyEwyaState.delete}
italic={aggregationHierarchyEwyaState.italic}
strong={aggregationHierarchyEwyaState.strong}
children={aggregationHierarchyEwyaState.children}
copyable={aggregationHierarchyEwyaState.copyable}
disabled={aggregationHierarchyEwyaState.disabled}
editable={aggregationHierarchyEwyaState.editable}
ellipsis={aggregationHierarchyEwyaState.ellipsis}
keyboard={aggregationHierarchyEwyaState.keyboard}
underline={aggregationHierarchyEwyaState.underline}
style={{gap:aggregationHierarchyEwyaState.style.gap,
color:aggregationHierarchyEwyaState.style.color,
width:aggregationHierarchyEwyaState.style.width,
height:aggregationHierarchyEwyaState.style.height,
display:aggregationHierarchyEwyaState.style.display,
fontSize:aggregationHierarchyEwyaState.style.fontSize,
textAlign:aggregationHierarchyEwyaState.style.textAlign,
alignItems:aggregationHierarchyEwyaState.style.alignItems,
marginRight:aggregationHierarchyEwyaState.style.marginRight,
flexDirection:aggregationHierarchyEwyaState.style.flexDirection,
justifyContent:aggregationHierarchyEwyaState.style.justifyContent,
}}
className={`${style.aggregationHierarchyEwya}`}
></Antd.Typography.Text>
            {/* 聚合层次 */}
            
            {/* 请输入聚合层次 */}
            <Antd.Input
size={pleaseEnterTheAggregationHierarchyState.size}
prefix={pleaseEnterTheAggregationHierarchyState.prefix}
bordered={pleaseEnterTheAggregationHierarchyState.bordered}
disabled={pleaseEnterTheAggregationHierarchyState.disabled}
maxLength={pleaseEnterTheAggregationHierarchyState.maxLength}
showCount={pleaseEnterTheAggregationHierarchyState.showCount}
addonAfter={pleaseEnterTheAggregationHierarchyState.addonAfter}
allowClear={pleaseEnterTheAggregationHierarchyState.allowClear}
addonBefore={pleaseEnterTheAggregationHierarchyState.addonBefore}
placeholder={pleaseEnterTheAggregationHierarchyState.placeholder}
defaultValue={pleaseEnterTheAggregationHierarchyState.defaultValue}
style={{width:pleaseEnterTheAggregationHierarchyState.style.width,
height:pleaseEnterTheAggregationHierarchyState.style.height,
}}
className={`${style.pleaseEnterTheAggregationHierarchy}`}
></Antd.Input>
            {/* 请输入聚合层次 */}
            </div>
            {/* 电子文件号前缀 */}
            </div>
            {/* 电子文件号1 */}
            
            {/* 按钮 */}
            <Antd.Button
size={buttonYiseState.size}
type={buttonYiseState.type}
ghost={buttonYiseState.ghost}
shape={buttonYiseState.shape}
danger={buttonYiseState.danger}
children={buttonYiseState.children}
disabled={buttonYiseState.disabled}
style={{width:buttonYiseState.style.width,
height:buttonYiseState.style.height,
fontSize:buttonYiseState.style.fontSize,
marginTop:buttonYiseState.style.marginTop,
fontWeight:buttonYiseState.style.fontWeight,
marginLeft:buttonYiseState.style.marginLeft,
marginRight:buttonYiseState.style.marginRight,
borderTopLeftRadius:buttonYiseState.style.borderTopLeftRadius,
borderTopRightRadius:buttonYiseState.style.borderTopRightRadius,
borderBottomLeftRadius:buttonYiseState.style.borderBottomLeftRadius,
borderBottomRightRadius:buttonYiseState.style.borderBottomRightRadius,
}}
className={`${style.buttonYise}`}
></Antd.Button>
            {/* 按钮 */}
            </div>
            {/* 请输入说明题名文字 */}
            </div>
            {/* 两栏容器 */}
            </div>
            {/* 容器 */}
            </>}
export default AggregationHierarchyGtyj
export { AggregationHierarchyGtyj }