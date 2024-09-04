import style from './index.module.scss'
import { useState } from 'react'
import * as Antd from '@/components/antd'
import { routes } from '@/router/index'
import { getParentInfoList } from '@/utils'
import { useNavigate } from 'react-router-dom'
import * as AntdIcon from '@ant-design/icons'
// 已审核日志
              const VerifiedLogsMpkq = () => {
const navigate = useNavigate()
// 点击时-元数据内容描述
          const whenClickedMetadataContentDescriptionQiko = (eventMdkf,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "page401").slice(1).map(item => item.path).join('/')}`)
}
// 点击-退出按钮
          const clickExitButtonYnfh = (eventNyld,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "defaultPageFhue").slice(1).map(item => item.path).join('/')}`)
}

              // 容器 开始属性
              const [containerKqedState, setcontainerKqedState] = useState({style:{width:"100vw",
height:"100vh",
display:"flex",
},
})
              // 容器 结束属性
              
              // 导航菜单 开始属性
              const [navigationMenuBihaState, setnavigationMenuBihaState] = useState({mode:"vertical",
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
              const [containerFvmcState, setcontainerFvmcState] = useState({style:{width:"100%",
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
              const [pictureNzkdState, setpictureNzkdState] = useState({alt:undefined,
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
              const [administratorHomepageLmstState, setadministratorHomepageLmstState] = useState({code:false,
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
              const [fileNumberConfigurationKfkkState, setfileNumberConfigurationKfkkState] = useState({key:undefined,
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
              const [fillInMetadataZjfmState, setfillInMetadataZjfmState] = useState({title:"元数据填写",
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
              const [descriptionOfMetadataContentNrgwState, setdescriptionOfMetadataContentNrgwState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据内容描述",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 元数据内容描述 结束属性
              
              // 聚合层次 开始属性
              const [aggregationHierarchyErkmState, setaggregationHierarchyErkmState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"聚合层次",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 聚合层次 结束属性
              
              // 元数据形式特征 开始属性
              const [characteristicsOfMetadataFormatNaplState, setcharacteristicsOfMetadataFormatNaplState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据形式特征",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 元数据形式特征 结束属性
              
              // 元数据存储位置 开始属性
              const [metadataStorageLocationJvelState, setmetadataStorageLocationJvelState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据存储位置",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 元数据存储位置 结束属性
              
              // 元数据电子签名 开始属性
              const [metadataElectronicSignatureHgtuState, setmetadataElectronicSignatureHgtuState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据电子签名",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 元数据电子签名 结束属性
              
              // 元数据来源 开始属性
              const [sourceOfMetadataTypqState, setsourceOfMetadataTypqState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据来源",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 元数据来源 结束属性
              
              // 档号 开始属性
              const [referenceVclvState, setreferenceVclvState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"档号",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 档号 结束属性
              
              // 生成文件 开始属性
              const [generateFileMioxState, setgenerateFileMioxState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"生成文件",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 生成文件 结束属性
              
              // 日志审核 开始属性
              const [logAuditGdhbState, setlogAuditGdhbState] = useState({title:"日志审核",
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
              const [pendingAuditLogTraqState, setpendingAuditLogTraqState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"待审核日志",
disabled:false,
style:{color:"#f0f8ff",
backgroundColor:"#336395",
},
})
              // 待审核日志 结束属性
              
              // 已审核日志 开始属性
              const [verifiedLogsRsaoState, setverifiedLogsRsaoState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"已审核日志",
disabled:false,
style:{color:"#f0f8ff",
backgroundColor:"#6d8fc0",
},
})
              // 已审核日志 结束属性
              
              // 两栏容器 开始属性
              const [twoColumnContainerCkewState, settwoColumnContainerCkewState] = useState({style:{width:"86%",
display:"flex",
flexDirection:"column",
justifyContent:"center",
},
})
              // 两栏容器 结束属性
              
              // 容器 开始属性
              const [containerCsjsState, setcontainerCsjsState] = useState({style:{width:"100%",
height:"9%",
backgroundColor:"#f0f8ff",
},
})
              // 容器 结束属性
              
              // 容器 开始属性
              const [containerKxfgState, setcontainerKxfgState] = useState({style:{width:"100%",
height:"9%",
backgroundColor:"#ffffff",
},
})
              // 容器 结束属性
              
              // 两栏容器 开始属性
              const [twoColumnContainerZqfiState, settwoColumnContainerZqfiState] = useState({style:{width:"100%",
display:"flex",
marginTop:"-2px",
flexDirection:"column",
},
})
              // 两栏容器 结束属性
              
              // 系统名称 开始属性
              const [systemNameOlsaState, setsystemNameOlsaState] = useState({style:{gap:"14px",
color:"#f0f8ff",
width:"100%",
height:"40px",
display:"flex",
fontSize:"22px",
textAlign:"center",
alignItems:"center",
flexDirection:"row",
justifyContent:"center",
backgroundColor:"#336395",
},
})
              // 系统名称 结束属性
              
              // 两栏容器 开始属性
              const [twoColumnContainerWklxState, settwoColumnContainerWklxState] = useState({style:{width:"100%",
display:"flex",
flexDirection:"column",
},
})
              // 两栏容器 结束属性
              
              // 两栏容器 开始属性
              const [twoColumnContainerWkilState, settwoColumnContainerWkilState] = useState({style:{width:"100%",
display:"flex",
flexDirection:"column",
},
})
              // 两栏容器 结束属性
              
              // 系统名称 开始属性
              const [systemNameIcdrState, setsystemNameIcdrState] = useState({style:{gap:"14px",
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
              const [systemNameUyuyState, setsystemNameUyuyState] = useState({code:false,
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
              const [containerGuefState, setcontainerGuefState] = useState({style:{width:"100%",
},
})
              // 容器 结束属性
              
              // 两栏容器 开始属性
              const [twoColumnContainerCarxState, settwoColumnContainerCarxState] = useState({style:{width:"100%",
display:"flex",
flexDirection:"column",
},
})
              // 两栏容器 结束属性
              
              // 容器 开始属性
              const [containerYbqaState, setcontainerYbqaState] = useState({style:{width:"100%",
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
              const [iconCyeuState, seticonCyeuState] = useState({spin:false,
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
              const [exitButtonXyjqState, setexitButtonXyjqState] = useState({icon:undefined,
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
              const [fileNumberPrefixLwplState, setfileNumberPrefixLwplState] = useState({style:{width:"100%",
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
              
              // 已审核日志 开始属性
              const [verifiedLogsKizxState, setverifiedLogsKizxState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"已    审    核    日    志    列    表",
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
              // 已审核日志 结束属性
              
              // 列表 开始属性
              const [listFbjxState, setlistFbjxState] = useState({alt:{type:"bordered",
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
              const [multilineInputBoxMqxxState, setmultilineInputBoxMqxxState] = useState({value:undefined,
autoSize:false,
bordered:true,
disabled:false,
maxLength:500,
showCount:false,
allowClear:false,
placeholder:"已审核日志",
defaultValue:undefined,
style:{},
})
              // 多行输入框 结束属性
              
              // 多行输入框4 开始属性
              const [multiLineInputBox4State, setmultiLineInputBox4State] = useState({value:undefined,
autoSize:false,
bordered:true,
disabled:false,
maxLength:500,
showCount:false,
allowClear:false,
placeholder:"已审核日志",
defaultValue:undefined,
style:{},
})
              // 多行输入框4 结束属性
              
              // 多行输入框3 开始属性
              const [multiLineInputBox3State, setmultiLineInputBox3State] = useState({value:undefined,
autoSize:false,
bordered:true,
disabled:false,
maxLength:500,
showCount:false,
allowClear:false,
placeholder:"已审核日志",
defaultValue:undefined,
style:{},
})
              // 多行输入框3 结束属性
              
              // 多行输入框2 开始属性
              const [multiLineInputBox2State, setmultiLineInputBox2State] = useState({value:undefined,
autoSize:false,
bordered:true,
disabled:false,
maxLength:500,
showCount:false,
allowClear:false,
placeholder:"已审核日志",
defaultValue:undefined,
style:{},
})
              // 多行输入框2 结束属性
              
              // 多行输入框1 开始属性
              const [multiLineInputBox1State, setmultiLineInputBox1State] = useState({value:undefined,
autoSize:false,
bordered:true,
disabled:false,
maxLength:500,
showCount:false,
allowClear:false,
placeholder:"已审核日志",
defaultValue:undefined,
style:{},
})
              // 多行输入框1 结束属性
              return<>
            {/* 容器 */}
            <div
style={{width:containerKqedState.style.width,
height:containerKqedState.style.height,
display:containerKqedState.style.display,
}}
className={`${style.containerKqed}`}
>
            {/* 导航菜单 */}
            <Antd.Menu
mode={navigationMenuBihaState.mode}
expandIcon={navigationMenuBihaState.expandIcon}
style={{width:navigationMenuBihaState.style.width,
height:navigationMenuBihaState.style.height,
backgroundColor:navigationMenuBihaState.style.backgroundColor,
backgroundImage:navigationMenuBihaState.style.backgroundImage,
backgroundRepeat:navigationMenuBihaState.style.backgroundRepeat,
borderTopRightRadius:navigationMenuBihaState.style.borderTopRightRadius,
borderBottomRightRadius:navigationMenuBihaState.style.borderBottomRightRadius,
}}
className={`${style.navigationMenuBiha}`}
>
            {/* 容器 */}
            <div
style={{width:containerFvmcState.style.width,
height:containerFvmcState.style.height,
display:containerFvmcState.style.display,
flexWrap:containerFvmcState.style.flexWrap,
alignItems:containerFvmcState.style.alignItems,
paddingTop:containerFvmcState.style.paddingTop,
borderColor:containerFvmcState.style.borderColor,
borderStyle:containerFvmcState.style.borderStyle,
flexDirection:containerFvmcState.style.flexDirection,
justifyContent:containerFvmcState.style.justifyContent,
borderBottomWidth:containerFvmcState.style.borderBottomWidth,
}}
className={`${style.containerFvmc}`}
>
            {/* 图片 */}
            <Antd.Image
alt={pictureNzkdState.alt}
src={pictureNzkdState.src}
width={pictureNzkdState.width}
height={pictureNzkdState.height}
preview={pictureNzkdState.preview}
fallback={pictureNzkdState.fallback}
placeholder={pictureNzkdState.placeholder}
style={{width:pictureNzkdState.style.width,
height:pictureNzkdState.style.height,
marginTop:pictureNzkdState.style.marginTop,
marginLeft:pictureNzkdState.style.marginLeft,
}}
className={`${style.pictureNzkd}`}
></Antd.Image>
            {/* 图片 */}
            
            {/* 管理员首页 */}
            <Antd.Typography.Text
code={administratorHomepageLmstState.code}
mark={administratorHomepageLmstState.mark}
type={administratorHomepageLmstState.type}
delete={administratorHomepageLmstState.delete}
italic={administratorHomepageLmstState.italic}
strong={administratorHomepageLmstState.strong}
children={administratorHomepageLmstState.children}
copyable={administratorHomepageLmstState.copyable}
disabled={administratorHomepageLmstState.disabled}
editable={administratorHomepageLmstState.editable}
ellipsis={administratorHomepageLmstState.ellipsis}
keyboard={administratorHomepageLmstState.keyboard}
underline={administratorHomepageLmstState.underline}
style={{color:administratorHomepageLmstState.style.color,
width:administratorHomepageLmstState.style.width,
height:administratorHomepageLmstState.style.height,
fontSize:administratorHomepageLmstState.style.fontSize,
textAlign:administratorHomepageLmstState.style.textAlign,
fontWeight:administratorHomepageLmstState.style.fontWeight,
marginLeft:administratorHomepageLmstState.style.marginLeft,
}}
className={`${style.administratorHomepageLmst}`}
></Antd.Typography.Text>
            {/* 管理员首页 */}
            </div>
            {/* 容器 */}
            
            {/* 档号配置 */}
            <Antd.Menu.Item
key={fileNumberConfigurationKfkkState.key}
icon={fileNumberConfigurationKfkkState.icon}
danger={fileNumberConfigurationKfkkState.danger}
children={fileNumberConfigurationKfkkState.children}
disabled={fileNumberConfigurationKfkkState.disabled}
style={{color:fileNumberConfigurationKfkkState.style.color,
width:fileNumberConfigurationKfkkState.style.width,
marginLeft:fileNumberConfigurationKfkkState.style.marginLeft,
borderColor:fileNumberConfigurationKfkkState.style.borderColor,
borderStyle:fileNumberConfigurationKfkkState.style.borderStyle,
marginRight:fileNumberConfigurationKfkkState.style.marginRight,
backgroundColor:fileNumberConfigurationKfkkState.style.backgroundColor,
borderBottomWidth:fileNumberConfigurationKfkkState.style.borderBottomWidth,
borderTopLeftRadius:fileNumberConfigurationKfkkState.style.borderTopLeftRadius,
borderTopRightRadius:fileNumberConfigurationKfkkState.style.borderTopRightRadius,
borderBottomLeftRadius:fileNumberConfigurationKfkkState.style.borderBottomLeftRadius,
borderBottomRightRadius:fileNumberConfigurationKfkkState.style.borderBottomRightRadius,
}}
className={`${style.fileNumberConfigurationKfkk}`}
></Antd.Menu.Item>
            {/* 档号配置 */}
            
            {/* 元数据填写 */}
            <Antd.Menu.ItemGroup
title={fillInMetadataZjfmState.title}
style={{color:fillInMetadataZjfmState.style.color,
borderColor:fillInMetadataZjfmState.style.borderColor,
borderStyle:fillInMetadataZjfmState.style.borderStyle,
borderTopWidth:fillInMetadataZjfmState.style.borderTopWidth,
borderLeftWidth:fillInMetadataZjfmState.style.borderLeftWidth,
borderRightWidth:fillInMetadataZjfmState.style.borderRightWidth,
borderBottomWidth:fillInMetadataZjfmState.style.borderBottomWidth,
}}
className={`${style.fillInMetadataZjfm}`}
>
            {/* 元数据内容描述 */}
            <Antd.Menu.Item
key={descriptionOfMetadataContentNrgwState.key}
icon={descriptionOfMetadataContentNrgwState.icon}
danger={descriptionOfMetadataContentNrgwState.danger}
children={descriptionOfMetadataContentNrgwState.children}
disabled={descriptionOfMetadataContentNrgwState.disabled}
style={{color:descriptionOfMetadataContentNrgwState.style.color,
}}
className={`${style.descriptionOfMetadataContentNrgw}`}
onClick={(eventMdkf,) =>whenClickedMetadataContentDescriptionQiko(eventMdkf,)}></Antd.Menu.Item>
            {/* 元数据内容描述 */}
            
            {/* 聚合层次 */}
            <Antd.Menu.Item
key={aggregationHierarchyErkmState.key}
icon={aggregationHierarchyErkmState.icon}
danger={aggregationHierarchyErkmState.danger}
children={aggregationHierarchyErkmState.children}
disabled={aggregationHierarchyErkmState.disabled}
style={{color:aggregationHierarchyErkmState.style.color,
}}
className={`${style.aggregationHierarchyErkm}`}
></Antd.Menu.Item>
            {/* 聚合层次 */}
            
            {/* 元数据形式特征 */}
            <Antd.Menu.Item
key={characteristicsOfMetadataFormatNaplState.key}
icon={characteristicsOfMetadataFormatNaplState.icon}
danger={characteristicsOfMetadataFormatNaplState.danger}
children={characteristicsOfMetadataFormatNaplState.children}
disabled={characteristicsOfMetadataFormatNaplState.disabled}
style={{color:characteristicsOfMetadataFormatNaplState.style.color,
}}
className={`${style.characteristicsOfMetadataFormatNapl}`}
></Antd.Menu.Item>
            {/* 元数据形式特征 */}
            
            {/* 元数据存储位置 */}
            <Antd.Menu.Item
key={metadataStorageLocationJvelState.key}
icon={metadataStorageLocationJvelState.icon}
danger={metadataStorageLocationJvelState.danger}
children={metadataStorageLocationJvelState.children}
disabled={metadataStorageLocationJvelState.disabled}
style={{color:metadataStorageLocationJvelState.style.color,
}}
className={`${style.metadataStorageLocationJvel}`}
></Antd.Menu.Item>
            {/* 元数据存储位置 */}
            
            {/* 元数据电子签名 */}
            <Antd.Menu.Item
key={metadataElectronicSignatureHgtuState.key}
icon={metadataElectronicSignatureHgtuState.icon}
danger={metadataElectronicSignatureHgtuState.danger}
children={metadataElectronicSignatureHgtuState.children}
disabled={metadataElectronicSignatureHgtuState.disabled}
style={{color:metadataElectronicSignatureHgtuState.style.color,
}}
className={`${style.metadataElectronicSignatureHgtu}`}
></Antd.Menu.Item>
            {/* 元数据电子签名 */}
            
            {/* 元数据来源 */}
            <Antd.Menu.Item
key={sourceOfMetadataTypqState.key}
icon={sourceOfMetadataTypqState.icon}
danger={sourceOfMetadataTypqState.danger}
children={sourceOfMetadataTypqState.children}
disabled={sourceOfMetadataTypqState.disabled}
style={{color:sourceOfMetadataTypqState.style.color,
}}
className={`${style.sourceOfMetadataTypq}`}
></Antd.Menu.Item>
            {/* 元数据来源 */}
            
            {/* 档号 */}
            <Antd.Menu.Item
key={referenceVclvState.key}
icon={referenceVclvState.icon}
danger={referenceVclvState.danger}
children={referenceVclvState.children}
disabled={referenceVclvState.disabled}
style={{color:referenceVclvState.style.color,
}}
className={`${style.referenceVclv}`}
></Antd.Menu.Item>
            {/* 档号 */}
            
            {/* 生成文件 */}
            <Antd.Menu.Item
key={generateFileMioxState.key}
icon={generateFileMioxState.icon}
danger={generateFileMioxState.danger}
children={generateFileMioxState.children}
disabled={generateFileMioxState.disabled}
style={{color:generateFileMioxState.style.color,
}}
className={`${style.generateFileMiox}`}
></Antd.Menu.Item>
            {/* 生成文件 */}
            </Antd.Menu.ItemGroup>
            {/* 元数据填写 */}
            
            {/* 日志审核 */}
            <Antd.Menu.ItemGroup
title={logAuditGdhbState.title}
style={{borderColor:logAuditGdhbState.style.borderColor,
borderStyle:logAuditGdhbState.style.borderStyle,
borderTopWidth:logAuditGdhbState.style.borderTopWidth,
borderLeftWidth:logAuditGdhbState.style.borderLeftWidth,
borderRightWidth:logAuditGdhbState.style.borderRightWidth,
borderBottomWidth:logAuditGdhbState.style.borderBottomWidth,
}}
className={`${style.logAuditGdhb}`}
>
            {/* 待审核日志 */}
            <Antd.Menu.Item
key={pendingAuditLogTraqState.key}
icon={pendingAuditLogTraqState.icon}
danger={pendingAuditLogTraqState.danger}
children={pendingAuditLogTraqState.children}
disabled={pendingAuditLogTraqState.disabled}
style={{color:pendingAuditLogTraqState.style.color,
backgroundColor:pendingAuditLogTraqState.style.backgroundColor,
}}
className={`${style.pendingAuditLogTraq}`}
></Antd.Menu.Item>
            {/* 待审核日志 */}
            
            {/* 已审核日志 */}
            <Antd.Menu.Item
key={verifiedLogsRsaoState.key}
icon={verifiedLogsRsaoState.icon}
danger={verifiedLogsRsaoState.danger}
children={verifiedLogsRsaoState.children}
disabled={verifiedLogsRsaoState.disabled}
style={{color:verifiedLogsRsaoState.style.color,
backgroundColor:verifiedLogsRsaoState.style.backgroundColor,
}}
className={`${style.verifiedLogsRsao}`}
></Antd.Menu.Item>
            {/* 已审核日志 */}
            </Antd.Menu.ItemGroup>
            {/* 日志审核 */}
            </Antd.Menu>
            {/* 导航菜单 */}
            
            {/* 两栏容器 */}
            <div
style={{width:twoColumnContainerCkewState.style.width,
display:twoColumnContainerCkewState.style.display,
flexDirection:twoColumnContainerCkewState.style.flexDirection,
justifyContent:twoColumnContainerCkewState.style.justifyContent,
}}
className={`${style.twoColumnContainerCkew}`}
>
            {/* 容器 */}
            <div
style={{width:containerCsjsState.style.width,
height:containerCsjsState.style.height,
backgroundColor:containerCsjsState.style.backgroundColor,
}}
className={`${style.containerCsjs}`}
>
            {/* 容器 */}
            <div
style={{width:containerKxfgState.style.width,
height:containerKxfgState.style.height,
backgroundColor:containerKxfgState.style.backgroundColor,
}}
className={`${style.containerKxfg}`}
>
            {/* 两栏容器 */}
            <div
style={{width:twoColumnContainerZqfiState.style.width,
display:twoColumnContainerZqfiState.style.display,
marginTop:twoColumnContainerZqfiState.style.marginTop,
flexDirection:twoColumnContainerZqfiState.style.flexDirection,
}}
className={`${style.twoColumnContainerZqfi}`}
>
            {/* 系统名称 */}
            <div
style={{gap:systemNameOlsaState.style.gap,
color:systemNameOlsaState.style.color,
width:systemNameOlsaState.style.width,
height:systemNameOlsaState.style.height,
display:systemNameOlsaState.style.display,
fontSize:systemNameOlsaState.style.fontSize,
textAlign:systemNameOlsaState.style.textAlign,
alignItems:systemNameOlsaState.style.alignItems,
flexDirection:systemNameOlsaState.style.flexDirection,
justifyContent:systemNameOlsaState.style.justifyContent,
backgroundColor:systemNameOlsaState.style.backgroundColor,
}}
className={`${style.systemNameOlsa}`}
>
            {/* 两栏容器 */}
            <div
style={{width:twoColumnContainerWklxState.style.width,
display:twoColumnContainerWklxState.style.display,
flexDirection:twoColumnContainerWklxState.style.flexDirection,
}}
className={`${style.twoColumnContainerWklx}`}
>
            {/* 两栏容器 */}
            <div
style={{width:twoColumnContainerWkilState.style.width,
display:twoColumnContainerWkilState.style.display,
flexDirection:twoColumnContainerWkilState.style.flexDirection,
}}
className={`${style.twoColumnContainerWkil}`}
>
            {/* 系统名称 */}
            <div
style={{gap:systemNameIcdrState.style.gap,
color:systemNameIcdrState.style.color,
width:systemNameIcdrState.style.width,
height:systemNameIcdrState.style.height,
display:systemNameIcdrState.style.display,
fontSize:systemNameIcdrState.style.fontSize,
textAlign:systemNameIcdrState.style.textAlign,
alignItems:systemNameIcdrState.style.alignItems,
borderColor:systemNameIcdrState.style.borderColor,
borderStyle:systemNameIcdrState.style.borderStyle,
flexDirection:systemNameIcdrState.style.flexDirection,
justifyContent:systemNameIcdrState.style.justifyContent,
backgroundColor:systemNameIcdrState.style.backgroundColor,
borderBottomWidth:systemNameIcdrState.style.borderBottomWidth,
}}
className={`${style.systemNameIcdr}`}
>
            {/* 系统名称 */}
            <Antd.Typography.Text
code={systemNameUyuyState.code}
mark={systemNameUyuyState.mark}
type={systemNameUyuyState.type}
delete={systemNameUyuyState.delete}
italic={systemNameUyuyState.italic}
strong={systemNameUyuyState.strong}
children={systemNameUyuyState.children}
copyable={systemNameUyuyState.copyable}
disabled={systemNameUyuyState.disabled}
editable={systemNameUyuyState.editable}
ellipsis={systemNameUyuyState.ellipsis}
keyboard={systemNameUyuyState.keyboard}
underline={systemNameUyuyState.underline}
style={{color:systemNameUyuyState.style.color,
display:systemNameUyuyState.style.display,
fontSize:systemNameUyuyState.style.fontSize,
textAlign:systemNameUyuyState.style.textAlign,
alignItems:systemNameUyuyState.style.alignItems,
fontWeight:systemNameUyuyState.style.fontWeight,
justifyContent:systemNameUyuyState.style.justifyContent,
}}
className={`${style.systemNameUyuy}`}
></Antd.Typography.Text>
            {/* 系统名称 */}
            </div>
            {/* 系统名称 */}
            </div>
            {/* 两栏容器 */}
            </div>
            {/* 两栏容器 */}
            </div>
            {/* 系统名称 */}
            
            {/* 容器 */}
            <div
style={{width:containerGuefState.style.width,
}}
className={`${style.containerGuef}`}
>
            {/* 两栏容器 */}
            <div
style={{width:twoColumnContainerCarxState.style.width,
display:twoColumnContainerCarxState.style.display,
flexDirection:twoColumnContainerCarxState.style.flexDirection,
}}
className={`${style.twoColumnContainerCarx}`}
>
            {/* 容器 */}
            <div
style={{width:containerYbqaState.style.width,
height:containerYbqaState.style.height,
display:containerYbqaState.style.display,
flexWrap:containerYbqaState.style.flexWrap,
alignItems:containerYbqaState.style.alignItems,
borderColor:containerYbqaState.style.borderColor,
borderStyle:containerYbqaState.style.borderStyle,
flexDirection:containerYbqaState.style.flexDirection,
justifyContent:containerYbqaState.style.justifyContent,
backgroundColor:containerYbqaState.style.backgroundColor,
}}
className={`${style.containerYbqa}`}
>
            {/* 图标 */}
            <AntdIcon.UserOutlined
spin={iconCyeuState.spin}
rotate={iconCyeuState.rotate}
twoToneColor={iconCyeuState.twoToneColor}
style={{color:iconCyeuState.style.color,
width:iconCyeuState.style.width,
height:iconCyeuState.style.height,
fontSize:iconCyeuState.style.fontSize,
marginTop:iconCyeuState.style.marginTop,
fontWeight:iconCyeuState.style.fontWeight,
marginRight:iconCyeuState.style.marginRight,
}}
className={`${style.iconCyeu}`}
></AntdIcon.UserOutlined>
            {/* 图标 */}
            
            {/* 退出按钮 */}
            <Antd.Button
icon={exitButtonXyjqState.icon}
size={exitButtonXyjqState.size}
type={exitButtonXyjqState.type}
ghost={exitButtonXyjqState.ghost}
shape={exitButtonXyjqState.shape}
danger={exitButtonXyjqState.danger}
loading={exitButtonXyjqState.loading}
children={exitButtonXyjqState.children}
disabled={exitButtonXyjqState.disabled}
style={{fontSize:exitButtonXyjqState.style.fontSize,
fontWeight:exitButtonXyjqState.style.fontWeight,
marginRight:exitButtonXyjqState.style.marginRight,
marginBottom:exitButtonXyjqState.style.marginBottom,
backgroundColor:exitButtonXyjqState.style.backgroundColor,
}}
className={`${style.exitButtonXyjq}`}
onClick={(eventNyld,) =>clickExitButtonYnfh(eventNyld,)}></Antd.Button>
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
style={{width:fileNumberPrefixLwplState.style.width,
height:fileNumberPrefixLwplState.style.height,
display:fileNumberPrefixLwplState.style.display,
marginTop:fileNumberPrefixLwplState.style.marginTop,
alignItems:fileNumberPrefixLwplState.style.alignItems,
fontWeight:fileNumberPrefixLwplState.style.fontWeight,
borderColor:fileNumberPrefixLwplState.style.borderColor,
borderStyle:fileNumberPrefixLwplState.style.borderStyle,
paddingLeft:fileNumberPrefixLwplState.style.paddingLeft,
paddingRight:fileNumberPrefixLwplState.style.paddingRight,
flexDirection:fileNumberPrefixLwplState.style.flexDirection,
backgroundColor:fileNumberPrefixLwplState.style.backgroundColor,
}}
className={`${style.fileNumberPrefixLwpl}`}
>
            {/* 已审核日志 */}
            <Antd.Typography.Text
code={verifiedLogsKizxState.code}
mark={verifiedLogsKizxState.mark}
type={verifiedLogsKizxState.type}
delete={verifiedLogsKizxState.delete}
italic={verifiedLogsKizxState.italic}
strong={verifiedLogsKizxState.strong}
children={verifiedLogsKizxState.children}
copyable={verifiedLogsKizxState.copyable}
disabled={verifiedLogsKizxState.disabled}
editable={verifiedLogsKizxState.editable}
ellipsis={verifiedLogsKizxState.ellipsis}
keyboard={verifiedLogsKizxState.keyboard}
underline={verifiedLogsKizxState.underline}
style={{color:verifiedLogsKizxState.style.color,
width:verifiedLogsKizxState.style.width,
display:verifiedLogsKizxState.style.display,
fontSize:verifiedLogsKizxState.style.fontSize,
boxShadow:verifiedLogsKizxState.style.boxShadow,
alignItems:verifiedLogsKizxState.style.alignItems,
paddingTop:verifiedLogsKizxState.style.paddingTop,
borderColor:verifiedLogsKizxState.style.borderColor,
borderStyle:verifiedLogsKizxState.style.borderStyle,
justifyContent:verifiedLogsKizxState.style.justifyContent,
}}
className={`${style.verifiedLogsKizx}`}
></Antd.Typography.Text>
            {/* 已审核日志 */}
            
            {/* 列表 */}
            <Antd.List
alt={{type:listFbjxState.alt.type,
value:listFbjxState.alt.value,
}}
grid={{column:listFbjxState.grid.column,
gutter:listFbjxState.grid.gutter,
}}
split={listFbjxState.split}
footer={listFbjxState.footer}
header={listFbjxState.header}
rowKey={listFbjxState.rowKey}
dataSource={[]}
itemLayout={listFbjxState.itemLayout}
pagination={listFbjxState.pagination}
renderItem={() => {return <>
            {/* 多行输入框 */}
            <Antd.Input.TextArea
value={multilineInputBoxMqxxState.value}
autoSize={multilineInputBoxMqxxState.autoSize}
bordered={multilineInputBoxMqxxState.bordered}
disabled={multilineInputBoxMqxxState.disabled}
maxLength={multilineInputBoxMqxxState.maxLength}
showCount={multilineInputBoxMqxxState.showCount}
allowClear={multilineInputBoxMqxxState.allowClear}
placeholder={multilineInputBoxMqxxState.placeholder}
defaultValue={multilineInputBoxMqxxState.defaultValue}
style={{}}
className={`${style.multilineInputBoxMqxx}`}
></Antd.Input.TextArea>
            {/* 多行输入框 */}
            
            {/* 多行输入框4 */}
            <Antd.Input.TextArea
value={multiLineInputBox4State.value}
autoSize={multiLineInputBox4State.autoSize}
bordered={multiLineInputBox4State.bordered}
disabled={multiLineInputBox4State.disabled}
maxLength={multiLineInputBox4State.maxLength}
showCount={multiLineInputBox4State.showCount}
allowClear={multiLineInputBox4State.allowClear}
placeholder={multiLineInputBox4State.placeholder}
defaultValue={multiLineInputBox4State.defaultValue}
style={{}}
className={`${style.multiLineInputBox4}`}
></Antd.Input.TextArea>
            {/* 多行输入框4 */}
            
            {/* 多行输入框3 */}
            <Antd.Input.TextArea
value={multiLineInputBox3State.value}
autoSize={multiLineInputBox3State.autoSize}
bordered={multiLineInputBox3State.bordered}
disabled={multiLineInputBox3State.disabled}
maxLength={multiLineInputBox3State.maxLength}
showCount={multiLineInputBox3State.showCount}
allowClear={multiLineInputBox3State.allowClear}
placeholder={multiLineInputBox3State.placeholder}
defaultValue={multiLineInputBox3State.defaultValue}
style={{}}
className={`${style.multiLineInputBox3}`}
></Antd.Input.TextArea>
            {/* 多行输入框3 */}
            
            {/* 多行输入框2 */}
            <Antd.Input.TextArea
value={multiLineInputBox2State.value}
autoSize={multiLineInputBox2State.autoSize}
bordered={multiLineInputBox2State.bordered}
disabled={multiLineInputBox2State.disabled}
maxLength={multiLineInputBox2State.maxLength}
showCount={multiLineInputBox2State.showCount}
allowClear={multiLineInputBox2State.allowClear}
placeholder={multiLineInputBox2State.placeholder}
defaultValue={multiLineInputBox2State.defaultValue}
style={{}}
className={`${style.multiLineInputBox2}`}
></Antd.Input.TextArea>
            {/* 多行输入框2 */}
            
            {/* 多行输入框1 */}
            <Antd.Input.TextArea
value={multiLineInputBox1State.value}
autoSize={multiLineInputBox1State.autoSize}
bordered={multiLineInputBox1State.bordered}
disabled={multiLineInputBox1State.disabled}
maxLength={multiLineInputBox1State.maxLength}
showCount={multiLineInputBox1State.showCount}
allowClear={multiLineInputBox1State.allowClear}
placeholder={multiLineInputBox1State.placeholder}
defaultValue={multiLineInputBox1State.defaultValue}
style={{}}
className={`${style.multiLineInputBox1}`}
></Antd.Input.TextArea>
            {/* 多行输入框1 */}
            </>}}
style={{width:listFbjxState.style.width,
paddingTop:listFbjxState.style.paddingTop,
}}
className={`${style.listFbjx}`}
></Antd.List>
            {/* 列表 */}
            </div>
            {/* 档号前缀 */}
            </div>
            {/* 两栏容器 */}
            </div>
            {/* 容器 */}
            </>}
export default VerifiedLogsMpkq
export { VerifiedLogsMpkq }