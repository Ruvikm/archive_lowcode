import style from './index.module.scss'
import { useState } from 'react'
import * as Antd from '@/components/antd'
import { routes } from '@/router/index'
import { getParentInfoList } from '@/utils'
import { useNavigate } from 'react-router-dom'
import * as AntdIcon from '@ant-design/icons'
// 待审核日志
              const PendingAuditLogBogy = () => {
const navigate = useNavigate()
// 点击时-元数据内容描述
          const whenClickedMetadataContentDescriptionUecb = (eventNlfb,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "page401").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-待审核日志
          const whenClickedPendingAuditLogAkut = (eventAgyu,) =>{
}
// 点击时-已审核日志
          const whenClickedReviewedLogsQlxz = (eventCssj,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageStsm").slice(1).map(item => item.path).join('/')}`)
}
// 点击-退出按钮
          const clickExitButtonTcrd = (eventIzqq,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "defaultPageFhue").slice(1).map(item => item.path).join('/')}`)
}
// 获取焦点-多行输入框
          const getFocusMultiLineInputBox = (eventBynu,) =>{
}

              // 容器 开始属性
              const [containerFsxxState, setcontainerFsxxState] = useState({style:{width:"100vw",
height:"100vh",
display:"flex",
},
})
              // 容器 结束属性
              
              // 导航菜单 开始属性
              const [navigationMenuVpnrState, setnavigationMenuVpnrState] = useState({mode:"vertical",
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
              const [containerDxwnState, setcontainerDxwnState] = useState({style:{width:"100%",
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
              const [pictureRrogState, setpictureRrogState] = useState({alt:undefined,
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
              const [administratorHomepageGrjvState, setadministratorHomepageGrjvState] = useState({code:false,
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
              const [fileNumberConfigurationDrboState, setfileNumberConfigurationDrboState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"档号配置",
disabled:false,
style:{color:"#f0f8ff",
width:"100%",
marginLeft:"0px",
borderColor:"#4e89c2",
borderStyle:"groove",
marginRight:"0px",
backgroundColor:"#336395",
borderBottomWidth:"5px",
borderTopLeftRadius:"0px",
borderTopRightRadius:"0px",
borderBottomLeftRadius:"0px",
borderBottomRightRadius:"0px",
},
})
              // 档号配置 结束属性
              
              // 元数据填写 开始属性
              const [fillInMetadataLqdjState, setfillInMetadataLqdjState] = useState({title:"元数据填写",
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
              const [descriptionOfMetadataContentHzuwState, setdescriptionOfMetadataContentHzuwState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据内容描述",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 元数据内容描述 结束属性
              
              // 聚合层次 开始属性
              const [aggregationHierarchyJcvzState, setaggregationHierarchyJcvzState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"聚合层次",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 聚合层次 结束属性
              
              // 元数据形式特征 开始属性
              const [characteristicsOfMetadataFormatTpmuState, setcharacteristicsOfMetadataFormatTpmuState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据形式特征",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 元数据形式特征 结束属性
              
              // 元数据存储位置 开始属性
              const [metadataStorageLocationPpwlState, setmetadataStorageLocationPpwlState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据存储位置",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 元数据存储位置 结束属性
              
              // 元数据电子签名 开始属性
              const [metadataElectronicSignatureEjftState, setmetadataElectronicSignatureEjftState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据电子签名",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 元数据电子签名 结束属性
              
              // 元数据来源 开始属性
              const [sourceOfMetadataIpfqState, setsourceOfMetadataIpfqState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据来源",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 元数据来源 结束属性
              
              // 档号 开始属性
              const [referenceWzzrState, setreferenceWzzrState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"档号",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 档号 结束属性
              
              // 生成文件 开始属性
              const [generateFileCxkeState, setgenerateFileCxkeState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"生成文件",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 生成文件 结束属性
              
              // 日志审核 开始属性
              const [logAuditMwdxState, setlogAuditMwdxState] = useState({title:"日志审核",
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
              const [pendingAuditLogMlhpState, setpendingAuditLogMlhpState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"待审核日志",
disabled:false,
style:{color:"#f0f8ff",
backgroundColor:"#6d8fc0",
},
})
              // 待审核日志 结束属性
              
              // 已审核日志 开始属性
              const [verifiedLogsJgriState, setverifiedLogsJgriState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"已审核日志",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 已审核日志 结束属性
              
              // 两栏容器 开始属性
              const [twoColumnContainerZvrfState, settwoColumnContainerZvrfState] = useState({style:{width:"86%",
display:"flex",
flexDirection:"column",
justifyContent:"center",
},
})
              // 两栏容器 结束属性
              
              // 容器 开始属性
              const [containerPplcState, setcontainerPplcState] = useState({style:{width:"100%",
height:"9%",
backgroundColor:"#f0f8ff",
},
})
              // 容器 结束属性
              
              // 容器 开始属性
              const [containerEiuxState, setcontainerEiuxState] = useState({style:{width:"100%",
height:"9%",
backgroundColor:"#ffffff",
},
})
              // 容器 结束属性
              
              // 两栏容器 开始属性
              const [twoColumnContainerZkbxState, settwoColumnContainerZkbxState] = useState({style:{width:"100%",
display:"flex",
flexDirection:"column",
},
})
              // 两栏容器 结束属性
              
              // 容器 开始属性
              const [containerOdblState, setcontainerOdblState] = useState({style:{width:"100%",
},
})
              // 容器 结束属性
              
              // 两栏容器 开始属性
              const [twoColumnContainerDbwlState, settwoColumnContainerDbwlState] = useState({style:{width:"100%",
display:"flex",
flexDirection:"column",
},
})
              // 两栏容器 结束属性
              
              // 系统名称 开始属性
              const [systemNameSpfxState, setsystemNameSpfxState] = useState({style:{gap:"14px",
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
              const [systemNameCyjlState, setsystemNameCyjlState] = useState({code:false,
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
              const [containerRhwlState, setcontainerRhwlState] = useState({style:{width:"100%",
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
              const [iconGwepState, seticonGwepState] = useState({spin:false,
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
              const [exitButtonJpjmState, setexitButtonJpjmState] = useState({icon:undefined,
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
              
              // 档号前缀 开始属性
              const [fileNumberPrefixBeftState, setfileNumberPrefixBeftState] = useState({style:{width:"100%",
height:"91%",
display:"flex",
marginTop:"-5px",
alignItems:"center",
fontWeight:600,
borderColor:"#000000",
borderStyle:"groove",
paddingLeft:"10px",
paddingRight:"10px",
flexDirection:"column",
backgroundColor:"#dcdcdc",
},
})
              // 档号前缀 结束属性
              
              // 待审核日志 开始属性
              const [pendingAuditLogOvwnState, setpendingAuditLogOvwnState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"待    审    核    日    志    列    表",
copyable:false,
disabled:false,
editable:false,
ellipsis:false,
keyboard:false,
underline:false,
style:{color:"#336395",
width:"300px",
display:"flex",
fontSize:"28px",
boxShadow:"20px 20px 5px 0px #426888",
alignItems:"center",
paddingTop:"20px",
borderColor:"#336395",
borderStyle:"dotted",
justifyContent:"center",
},
})
              // 待审核日志 结束属性
              
              // 列表 开始属性
              const [listUdpfState, setlistUdpfState] = useState({alt:{type:"bordered",
value:false,
},
grid:{column:1,
gutter:0,
},
split:true,
footer:undefined,
header:undefined,
rowKey:undefined,
dataSource:[
],
itemLayout:"horizontal",
pagination:false,
renderItem:null,
style:{width:"500px",
paddingTop:"100px",
},
})
              // 列表 结束属性
              
              // 多行输入框 开始属性
              const [multilineInputBoxJyjfState, setmultilineInputBoxJyjfState] = useState({value:undefined,
autoSize:false,
bordered:true,
disabled:false,
maxLength:500,
showCount:false,
allowClear:false,
placeholder:"待审核日志",
defaultValue:undefined,
style:{},
})
              // 多行输入框 结束属性
              
              // 多行输入框4 开始属性
              const [multilineInputBoxVmnsState, setmultilineInputBoxVmnsState] = useState({value:undefined,
autoSize:false,
bordered:true,
disabled:false,
maxLength:500,
showCount:false,
allowClear:false,
placeholder:"待审核日志",
defaultValue:undefined,
style:{},
})
              // 多行输入框4 结束属性
              
              // 多行输入框3 开始属性
              const [multilineInputBoxMgfaState, setmultilineInputBoxMgfaState] = useState({value:undefined,
autoSize:false,
bordered:true,
disabled:false,
maxLength:500,
showCount:false,
allowClear:false,
placeholder:"待审核日志",
defaultValue:undefined,
style:{},
})
              // 多行输入框3 结束属性
              
              // 多行输入框2 开始属性
              const [multilineInputBoxPulyState, setmultilineInputBoxPulyState] = useState({value:undefined,
autoSize:false,
bordered:true,
disabled:false,
maxLength:500,
showCount:false,
allowClear:false,
placeholder:"待审核日志",
defaultValue:undefined,
style:{},
})
              // 多行输入框2 结束属性
              return<>
            {/* 容器 */}
            <div
style={{width:containerFsxxState.style.width,
height:containerFsxxState.style.height,
display:containerFsxxState.style.display,
}}
className={`${style.containerFsxx}`}
>
            {/* 导航菜单 */}
            <Antd.Menu
mode={navigationMenuVpnrState.mode}
expandIcon={navigationMenuVpnrState.expandIcon}
style={{width:navigationMenuVpnrState.style.width,
height:navigationMenuVpnrState.style.height,
backgroundColor:navigationMenuVpnrState.style.backgroundColor,
backgroundImage:navigationMenuVpnrState.style.backgroundImage,
backgroundRepeat:navigationMenuVpnrState.style.backgroundRepeat,
borderTopRightRadius:navigationMenuVpnrState.style.borderTopRightRadius,
borderBottomRightRadius:navigationMenuVpnrState.style.borderBottomRightRadius,
}}
className={`${style.navigationMenuVpnr}`}
>
            {/* 容器 */}
            <div
style={{width:containerDxwnState.style.width,
height:containerDxwnState.style.height,
display:containerDxwnState.style.display,
flexWrap:containerDxwnState.style.flexWrap,
alignItems:containerDxwnState.style.alignItems,
paddingTop:containerDxwnState.style.paddingTop,
borderColor:containerDxwnState.style.borderColor,
borderStyle:containerDxwnState.style.borderStyle,
flexDirection:containerDxwnState.style.flexDirection,
justifyContent:containerDxwnState.style.justifyContent,
borderBottomWidth:containerDxwnState.style.borderBottomWidth,
}}
className={`${style.containerDxwn}`}
>
            {/* 图片 */}
            <Antd.Image
alt={pictureRrogState.alt}
src={pictureRrogState.src}
width={pictureRrogState.width}
height={pictureRrogState.height}
preview={pictureRrogState.preview}
fallback={pictureRrogState.fallback}
placeholder={pictureRrogState.placeholder}
style={{width:pictureRrogState.style.width,
height:pictureRrogState.style.height,
marginTop:pictureRrogState.style.marginTop,
marginLeft:pictureRrogState.style.marginLeft,
}}
className={`${style.pictureRrog}`}
></Antd.Image>
            {/* 图片 */}
            
            {/* 管理员首页 */}
            <Antd.Typography.Text
code={administratorHomepageGrjvState.code}
mark={administratorHomepageGrjvState.mark}
type={administratorHomepageGrjvState.type}
delete={administratorHomepageGrjvState.delete}
italic={administratorHomepageGrjvState.italic}
strong={administratorHomepageGrjvState.strong}
children={administratorHomepageGrjvState.children}
copyable={administratorHomepageGrjvState.copyable}
disabled={administratorHomepageGrjvState.disabled}
editable={administratorHomepageGrjvState.editable}
ellipsis={administratorHomepageGrjvState.ellipsis}
keyboard={administratorHomepageGrjvState.keyboard}
underline={administratorHomepageGrjvState.underline}
style={{color:administratorHomepageGrjvState.style.color,
width:administratorHomepageGrjvState.style.width,
height:administratorHomepageGrjvState.style.height,
fontSize:administratorHomepageGrjvState.style.fontSize,
textAlign:administratorHomepageGrjvState.style.textAlign,
fontWeight:administratorHomepageGrjvState.style.fontWeight,
marginLeft:administratorHomepageGrjvState.style.marginLeft,
}}
className={`${style.administratorHomepageGrjv}`}
></Antd.Typography.Text>
            {/* 管理员首页 */}
            </div>
            {/* 容器 */}
            
            {/* 档号配置 */}
            <Antd.Menu.Item
key={fileNumberConfigurationDrboState.key}
icon={fileNumberConfigurationDrboState.icon}
danger={fileNumberConfigurationDrboState.danger}
children={fileNumberConfigurationDrboState.children}
disabled={fileNumberConfigurationDrboState.disabled}
style={{color:fileNumberConfigurationDrboState.style.color,
width:fileNumberConfigurationDrboState.style.width,
marginLeft:fileNumberConfigurationDrboState.style.marginLeft,
borderColor:fileNumberConfigurationDrboState.style.borderColor,
borderStyle:fileNumberConfigurationDrboState.style.borderStyle,
marginRight:fileNumberConfigurationDrboState.style.marginRight,
backgroundColor:fileNumberConfigurationDrboState.style.backgroundColor,
borderBottomWidth:fileNumberConfigurationDrboState.style.borderBottomWidth,
borderTopLeftRadius:fileNumberConfigurationDrboState.style.borderTopLeftRadius,
borderTopRightRadius:fileNumberConfigurationDrboState.style.borderTopRightRadius,
borderBottomLeftRadius:fileNumberConfigurationDrboState.style.borderBottomLeftRadius,
borderBottomRightRadius:fileNumberConfigurationDrboState.style.borderBottomRightRadius,
}}
className={`${style.fileNumberConfigurationDrbo}`}
></Antd.Menu.Item>
            {/* 档号配置 */}
            
            {/* 元数据填写 */}
            <Antd.Menu.ItemGroup
title={fillInMetadataLqdjState.title}
style={{color:fillInMetadataLqdjState.style.color,
borderColor:fillInMetadataLqdjState.style.borderColor,
borderStyle:fillInMetadataLqdjState.style.borderStyle,
borderTopWidth:fillInMetadataLqdjState.style.borderTopWidth,
borderLeftWidth:fillInMetadataLqdjState.style.borderLeftWidth,
borderRightWidth:fillInMetadataLqdjState.style.borderRightWidth,
borderBottomWidth:fillInMetadataLqdjState.style.borderBottomWidth,
}}
className={`${style.fillInMetadataLqdj}`}
>
            {/* 元数据内容描述 */}
            <Antd.Menu.Item
key={descriptionOfMetadataContentHzuwState.key}
icon={descriptionOfMetadataContentHzuwState.icon}
danger={descriptionOfMetadataContentHzuwState.danger}
children={descriptionOfMetadataContentHzuwState.children}
disabled={descriptionOfMetadataContentHzuwState.disabled}
style={{color:descriptionOfMetadataContentHzuwState.style.color,
}}
className={`${style.descriptionOfMetadataContentHzuw}`}
onClick={(eventNlfb,) =>whenClickedMetadataContentDescriptionUecb(eventNlfb,)}></Antd.Menu.Item>
            {/* 元数据内容描述 */}
            
            {/* 聚合层次 */}
            <Antd.Menu.Item
key={aggregationHierarchyJcvzState.key}
icon={aggregationHierarchyJcvzState.icon}
danger={aggregationHierarchyJcvzState.danger}
children={aggregationHierarchyJcvzState.children}
disabled={aggregationHierarchyJcvzState.disabled}
style={{color:aggregationHierarchyJcvzState.style.color,
}}
className={`${style.aggregationHierarchyJcvz}`}
></Antd.Menu.Item>
            {/* 聚合层次 */}
            
            {/* 元数据形式特征 */}
            <Antd.Menu.Item
key={characteristicsOfMetadataFormatTpmuState.key}
icon={characteristicsOfMetadataFormatTpmuState.icon}
danger={characteristicsOfMetadataFormatTpmuState.danger}
children={characteristicsOfMetadataFormatTpmuState.children}
disabled={characteristicsOfMetadataFormatTpmuState.disabled}
style={{color:characteristicsOfMetadataFormatTpmuState.style.color,
}}
className={`${style.characteristicsOfMetadataFormatTpmu}`}
></Antd.Menu.Item>
            {/* 元数据形式特征 */}
            
            {/* 元数据存储位置 */}
            <Antd.Menu.Item
key={metadataStorageLocationPpwlState.key}
icon={metadataStorageLocationPpwlState.icon}
danger={metadataStorageLocationPpwlState.danger}
children={metadataStorageLocationPpwlState.children}
disabled={metadataStorageLocationPpwlState.disabled}
style={{color:metadataStorageLocationPpwlState.style.color,
}}
className={`${style.metadataStorageLocationPpwl}`}
></Antd.Menu.Item>
            {/* 元数据存储位置 */}
            
            {/* 元数据电子签名 */}
            <Antd.Menu.Item
key={metadataElectronicSignatureEjftState.key}
icon={metadataElectronicSignatureEjftState.icon}
danger={metadataElectronicSignatureEjftState.danger}
children={metadataElectronicSignatureEjftState.children}
disabled={metadataElectronicSignatureEjftState.disabled}
style={{color:metadataElectronicSignatureEjftState.style.color,
}}
className={`${style.metadataElectronicSignatureEjft}`}
></Antd.Menu.Item>
            {/* 元数据电子签名 */}
            
            {/* 元数据来源 */}
            <Antd.Menu.Item
key={sourceOfMetadataIpfqState.key}
icon={sourceOfMetadataIpfqState.icon}
danger={sourceOfMetadataIpfqState.danger}
children={sourceOfMetadataIpfqState.children}
disabled={sourceOfMetadataIpfqState.disabled}
style={{color:sourceOfMetadataIpfqState.style.color,
}}
className={`${style.sourceOfMetadataIpfq}`}
></Antd.Menu.Item>
            {/* 元数据来源 */}
            
            {/* 档号 */}
            <Antd.Menu.Item
key={referenceWzzrState.key}
icon={referenceWzzrState.icon}
danger={referenceWzzrState.danger}
children={referenceWzzrState.children}
disabled={referenceWzzrState.disabled}
style={{color:referenceWzzrState.style.color,
}}
className={`${style.referenceWzzr}`}
></Antd.Menu.Item>
            {/* 档号 */}
            
            {/* 生成文件 */}
            <Antd.Menu.Item
key={generateFileCxkeState.key}
icon={generateFileCxkeState.icon}
danger={generateFileCxkeState.danger}
children={generateFileCxkeState.children}
disabled={generateFileCxkeState.disabled}
style={{color:generateFileCxkeState.style.color,
}}
className={`${style.generateFileCxke}`}
></Antd.Menu.Item>
            {/* 生成文件 */}
            </Antd.Menu.ItemGroup>
            {/* 元数据填写 */}
            
            {/* 日志审核 */}
            <Antd.Menu.ItemGroup
title={logAuditMwdxState.title}
style={{borderColor:logAuditMwdxState.style.borderColor,
borderStyle:logAuditMwdxState.style.borderStyle,
borderTopWidth:logAuditMwdxState.style.borderTopWidth,
borderLeftWidth:logAuditMwdxState.style.borderLeftWidth,
borderRightWidth:logAuditMwdxState.style.borderRightWidth,
borderBottomWidth:logAuditMwdxState.style.borderBottomWidth,
}}
className={`${style.logAuditMwdx}`}
>
            {/* 待审核日志 */}
            <Antd.Menu.Item
key={pendingAuditLogMlhpState.key}
icon={pendingAuditLogMlhpState.icon}
danger={pendingAuditLogMlhpState.danger}
children={pendingAuditLogMlhpState.children}
disabled={pendingAuditLogMlhpState.disabled}
style={{color:pendingAuditLogMlhpState.style.color,
backgroundColor:pendingAuditLogMlhpState.style.backgroundColor,
}}
className={`${style.pendingAuditLogMlhp}`}
onClick={(eventAgyu,) =>whenClickedPendingAuditLogAkut(eventAgyu,)}></Antd.Menu.Item>
            {/* 待审核日志 */}
            
            {/* 已审核日志 */}
            <Antd.Menu.Item
key={verifiedLogsJgriState.key}
icon={verifiedLogsJgriState.icon}
danger={verifiedLogsJgriState.danger}
children={verifiedLogsJgriState.children}
disabled={verifiedLogsJgriState.disabled}
style={{color:verifiedLogsJgriState.style.color,
}}
className={`${style.verifiedLogsJgri}`}
onClick={(eventCssj,) =>whenClickedReviewedLogsQlxz(eventCssj,)}></Antd.Menu.Item>
            {/* 已审核日志 */}
            </Antd.Menu.ItemGroup>
            {/* 日志审核 */}
            </Antd.Menu>
            {/* 导航菜单 */}
            
            {/* 两栏容器 */}
            <div
style={{width:twoColumnContainerZvrfState.style.width,
display:twoColumnContainerZvrfState.style.display,
flexDirection:twoColumnContainerZvrfState.style.flexDirection,
justifyContent:twoColumnContainerZvrfState.style.justifyContent,
}}
className={`${style.twoColumnContainerZvrf}`}
>
            {/* 容器 */}
            <div
style={{width:containerPplcState.style.width,
height:containerPplcState.style.height,
backgroundColor:containerPplcState.style.backgroundColor,
}}
className={`${style.containerPplc}`}
>
            {/* 容器 */}
            <div
style={{width:containerEiuxState.style.width,
height:containerEiuxState.style.height,
backgroundColor:containerEiuxState.style.backgroundColor,
}}
className={`${style.containerEiux}`}
>
            {/* 两栏容器 */}
            <div
style={{width:twoColumnContainerZkbxState.style.width,
display:twoColumnContainerZkbxState.style.display,
flexDirection:twoColumnContainerZkbxState.style.flexDirection,
}}
className={`${style.twoColumnContainerZkbx}`}
>
            {/* 容器 */}
            <div
style={{width:containerOdblState.style.width,
}}
className={`${style.containerOdbl}`}
>
            {/* 两栏容器 */}
            <div
style={{width:twoColumnContainerDbwlState.style.width,
display:twoColumnContainerDbwlState.style.display,
flexDirection:twoColumnContainerDbwlState.style.flexDirection,
}}
className={`${style.twoColumnContainerDbwl}`}
>
            {/* 系统名称 */}
            <div
style={{gap:systemNameSpfxState.style.gap,
color:systemNameSpfxState.style.color,
width:systemNameSpfxState.style.width,
height:systemNameSpfxState.style.height,
display:systemNameSpfxState.style.display,
fontSize:systemNameSpfxState.style.fontSize,
marginTop:systemNameSpfxState.style.marginTop,
textAlign:systemNameSpfxState.style.textAlign,
alignItems:systemNameSpfxState.style.alignItems,
borderColor:systemNameSpfxState.style.borderColor,
borderStyle:systemNameSpfxState.style.borderStyle,
flexDirection:systemNameSpfxState.style.flexDirection,
justifyContent:systemNameSpfxState.style.justifyContent,
backgroundColor:systemNameSpfxState.style.backgroundColor,
borderBottomWidth:systemNameSpfxState.style.borderBottomWidth,
}}
className={`${style.systemNameSpfx}`}
>
            {/* 系统名称 */}
            <Antd.Typography.Text
code={systemNameCyjlState.code}
mark={systemNameCyjlState.mark}
type={systemNameCyjlState.type}
delete={systemNameCyjlState.delete}
italic={systemNameCyjlState.italic}
strong={systemNameCyjlState.strong}
children={systemNameCyjlState.children}
copyable={systemNameCyjlState.copyable}
disabled={systemNameCyjlState.disabled}
editable={systemNameCyjlState.editable}
ellipsis={systemNameCyjlState.ellipsis}
keyboard={systemNameCyjlState.keyboard}
underline={systemNameCyjlState.underline}
style={{color:systemNameCyjlState.style.color,
display:systemNameCyjlState.style.display,
fontSize:systemNameCyjlState.style.fontSize,
textAlign:systemNameCyjlState.style.textAlign,
alignItems:systemNameCyjlState.style.alignItems,
fontWeight:systemNameCyjlState.style.fontWeight,
justifyContent:systemNameCyjlState.style.justifyContent,
}}
className={`${style.systemNameCyjl}`}
></Antd.Typography.Text>
            {/* 系统名称 */}
            </div>
            {/* 系统名称 */}
            
            {/* 容器 */}
            <div
style={{width:containerRhwlState.style.width,
height:containerRhwlState.style.height,
display:containerRhwlState.style.display,
flexWrap:containerRhwlState.style.flexWrap,
alignItems:containerRhwlState.style.alignItems,
borderColor:containerRhwlState.style.borderColor,
borderStyle:containerRhwlState.style.borderStyle,
flexDirection:containerRhwlState.style.flexDirection,
justifyContent:containerRhwlState.style.justifyContent,
backgroundColor:containerRhwlState.style.backgroundColor,
}}
className={`${style.containerRhwl}`}
>
            {/* 图标 */}
            <AntdIcon.UserOutlined
spin={iconGwepState.spin}
rotate={iconGwepState.rotate}
twoToneColor={iconGwepState.twoToneColor}
style={{color:iconGwepState.style.color,
width:iconGwepState.style.width,
height:iconGwepState.style.height,
fontSize:iconGwepState.style.fontSize,
marginTop:iconGwepState.style.marginTop,
fontWeight:iconGwepState.style.fontWeight,
marginRight:iconGwepState.style.marginRight,
}}
className={`${style.iconGwep}`}
></AntdIcon.UserOutlined>
            {/* 图标 */}
            
            {/* 退出按钮 */}
            <Antd.Button
icon={exitButtonJpjmState.icon}
size={exitButtonJpjmState.size}
type={exitButtonJpjmState.type}
ghost={exitButtonJpjmState.ghost}
shape={exitButtonJpjmState.shape}
danger={exitButtonJpjmState.danger}
loading={exitButtonJpjmState.loading}
children={exitButtonJpjmState.children}
disabled={exitButtonJpjmState.disabled}
style={{fontSize:exitButtonJpjmState.style.fontSize,
fontWeight:exitButtonJpjmState.style.fontWeight,
marginRight:exitButtonJpjmState.style.marginRight,
marginBottom:exitButtonJpjmState.style.marginBottom,
backgroundColor:exitButtonJpjmState.style.backgroundColor,
}}
className={`${style.exitButtonJpjm}`}
onClick={(eventIzqq,) =>clickExitButtonTcrd(eventIzqq,)}></Antd.Button>
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
            
            {/* 档号前缀 */}
            <div
style={{width:fileNumberPrefixBeftState.style.width,
height:fileNumberPrefixBeftState.style.height,
display:fileNumberPrefixBeftState.style.display,
marginTop:fileNumberPrefixBeftState.style.marginTop,
alignItems:fileNumberPrefixBeftState.style.alignItems,
fontWeight:fileNumberPrefixBeftState.style.fontWeight,
borderColor:fileNumberPrefixBeftState.style.borderColor,
borderStyle:fileNumberPrefixBeftState.style.borderStyle,
paddingLeft:fileNumberPrefixBeftState.style.paddingLeft,
paddingRight:fileNumberPrefixBeftState.style.paddingRight,
flexDirection:fileNumberPrefixBeftState.style.flexDirection,
backgroundColor:fileNumberPrefixBeftState.style.backgroundColor,
}}
className={`${style.fileNumberPrefixBeft}`}
>
            {/* 待审核日志 */}
            <Antd.Typography.Text
code={pendingAuditLogOvwnState.code}
mark={pendingAuditLogOvwnState.mark}
type={pendingAuditLogOvwnState.type}
delete={pendingAuditLogOvwnState.delete}
italic={pendingAuditLogOvwnState.italic}
strong={pendingAuditLogOvwnState.strong}
children={pendingAuditLogOvwnState.children}
copyable={pendingAuditLogOvwnState.copyable}
disabled={pendingAuditLogOvwnState.disabled}
editable={pendingAuditLogOvwnState.editable}
ellipsis={pendingAuditLogOvwnState.ellipsis}
keyboard={pendingAuditLogOvwnState.keyboard}
underline={pendingAuditLogOvwnState.underline}
style={{color:pendingAuditLogOvwnState.style.color,
width:pendingAuditLogOvwnState.style.width,
display:pendingAuditLogOvwnState.style.display,
fontSize:pendingAuditLogOvwnState.style.fontSize,
boxShadow:pendingAuditLogOvwnState.style.boxShadow,
alignItems:pendingAuditLogOvwnState.style.alignItems,
paddingTop:pendingAuditLogOvwnState.style.paddingTop,
borderColor:pendingAuditLogOvwnState.style.borderColor,
borderStyle:pendingAuditLogOvwnState.style.borderStyle,
justifyContent:pendingAuditLogOvwnState.style.justifyContent,
}}
className={`${style.pendingAuditLogOvwn}`}
></Antd.Typography.Text>
            {/* 待审核日志 */}
            
            {/* 列表 */}
            <Antd.List
alt={{type:listUdpfState.alt.type,
value:listUdpfState.alt.value,
}}
grid={{column:listUdpfState.grid.column,
gutter:listUdpfState.grid.gutter,
}}
split={listUdpfState.split}
footer={listUdpfState.footer}
header={listUdpfState.header}
rowKey={listUdpfState.rowKey}
dataSource={[]}
itemLayout={listUdpfState.itemLayout}
pagination={listUdpfState.pagination}
renderItem={() => {return <>
            {/* 多行输入框 */}
            <Antd.Input.TextArea
value={multilineInputBoxJyjfState.value}
autoSize={multilineInputBoxJyjfState.autoSize}
bordered={multilineInputBoxJyjfState.bordered}
disabled={multilineInputBoxJyjfState.disabled}
maxLength={multilineInputBoxJyjfState.maxLength}
showCount={multilineInputBoxJyjfState.showCount}
allowClear={multilineInputBoxJyjfState.allowClear}
placeholder={multilineInputBoxJyjfState.placeholder}
defaultValue={multilineInputBoxJyjfState.defaultValue}
style={{}}
className={`${style.multilineInputBoxJyjf}`}
onFocus={(eventBynu,) =>getFocusMultiLineInputBox(eventBynu,)}></Antd.Input.TextArea>
            {/* 多行输入框 */}
            
            {/* 多行输入框4 */}
            <Antd.Input.TextArea
value={multilineInputBoxVmnsState.value}
autoSize={multilineInputBoxVmnsState.autoSize}
bordered={multilineInputBoxVmnsState.bordered}
disabled={multilineInputBoxVmnsState.disabled}
maxLength={multilineInputBoxVmnsState.maxLength}
showCount={multilineInputBoxVmnsState.showCount}
allowClear={multilineInputBoxVmnsState.allowClear}
placeholder={multilineInputBoxVmnsState.placeholder}
defaultValue={multilineInputBoxVmnsState.defaultValue}
style={{}}
className={`${style.multilineInputBoxVmns}`}
></Antd.Input.TextArea>
            {/* 多行输入框4 */}
            
            {/* 多行输入框3 */}
            <Antd.Input.TextArea
value={multilineInputBoxMgfaState.value}
autoSize={multilineInputBoxMgfaState.autoSize}
bordered={multilineInputBoxMgfaState.bordered}
disabled={multilineInputBoxMgfaState.disabled}
maxLength={multilineInputBoxMgfaState.maxLength}
showCount={multilineInputBoxMgfaState.showCount}
allowClear={multilineInputBoxMgfaState.allowClear}
placeholder={multilineInputBoxMgfaState.placeholder}
defaultValue={multilineInputBoxMgfaState.defaultValue}
style={{}}
className={`${style.multilineInputBoxMgfa}`}
></Antd.Input.TextArea>
            {/* 多行输入框3 */}
            
            {/* 多行输入框2 */}
            <Antd.Input.TextArea
value={multilineInputBoxPulyState.value}
autoSize={multilineInputBoxPulyState.autoSize}
bordered={multilineInputBoxPulyState.bordered}
disabled={multilineInputBoxPulyState.disabled}
maxLength={multilineInputBoxPulyState.maxLength}
showCount={multilineInputBoxPulyState.showCount}
allowClear={multilineInputBoxPulyState.allowClear}
placeholder={multilineInputBoxPulyState.placeholder}
defaultValue={multilineInputBoxPulyState.defaultValue}
style={{}}
className={`${style.multilineInputBoxPuly}`}
></Antd.Input.TextArea>
            {/* 多行输入框2 */}
            </>}}
style={{width:listUdpfState.style.width,
paddingTop:listUdpfState.style.paddingTop,
}}
className={`${style.listUdpf}`}
></Antd.List>
            {/* 列表 */}
            </div>
            {/* 档号前缀 */}
            </div>
            {/* 两栏容器 */}
            </div>
            {/* 容器 */}
            </>}
export default PendingAuditLogBogy
export { PendingAuditLogBogy }