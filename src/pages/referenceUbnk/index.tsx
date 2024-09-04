import style from './index.module.scss'
import { useState } from 'react'
import * as Antd from '@/components/antd'
import { routes } from '@/router/index'
import { getParentInfoList } from '@/utils'
import { useNavigate } from 'react-router-dom'
import * as AntdIcon from '@ant-design/icons'
// 档号
              const ReferenceUbnk = () => {
const navigate = useNavigate()
// 点击时-档号配置
          const clickToConfigureFileNumberYwpn = (eventBjro,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageDano").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据内容描述
          const whenClickedMetadataContentDescriptionJmtd = (eventEwar,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "page401").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-聚合层次
          const clickOnAggregateHierarchyWbor = (eventLgxe,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageVomd").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据形式特征
          const whenClickedMetadataFormatFeaturesApgj = (eventWmrv,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageWcoq").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据存储位置
          const whenClickedMetadataStorageLocationDvrz = (eventXknv,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageDbgh").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据电子签名
          const whenClickedMetadataElectronicSignatureUvto = (eventYbhz,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageWsbf").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据来源
          const whenClickedMetadataSourceXmhw = (eventQplt,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageGafh").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-档号
          const clickTimeFileNumberCtgh = (eventHerm,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageGafh").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-生成文件
          const whenClickedGenerateFileGlqj = (eventUdso,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageYfhi").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-待审核日志
          const whenClickedPendingAuditLogQtgb = (eventKjet,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageZuvc").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-已审核日志
          const whenClickedReviewedLogsXiqe = (eventAbrk,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageStsm").slice(1).map(item => item.path).join('/')}`)
}
// 点击-退出按钮
          const clickExitButtonTwxn = (eventAevd,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "defaultPageFhue").slice(1).map(item => item.path).join('/')}`)
}

              // 容器 开始属性
              const [containerFdijState, setcontainerFdijState] = useState({style:{width:"100vw",
height:"100vh",
display:"flex",
},
})
              // 容器 结束属性
              
              // 导航菜单 开始属性
              const [navigationMenuOdgnState, setnavigationMenuOdgnState] = useState({mode:"vertical",
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
              const [containerUnqbState, setcontainerUnqbState] = useState({style:{width:"100%",
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
              const [pictureOmlmState, setpictureOmlmState] = useState({alt:undefined,
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
              const [administratorHomepageDwizState, setadministratorHomepageDwizState] = useState({code:false,
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
              const [fileNumberConfigurationDcwzState, setfileNumberConfigurationDcwzState] = useState({key:undefined,
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
              const [fillInMetadataBuinState, setfillInMetadataBuinState] = useState({title:"元数据填写",
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
              const [descriptionOfMetadataContentAosgState, setdescriptionOfMetadataContentAosgState] = useState({key:undefined,
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
              const [aggregationHierarchyMdcvState, setaggregationHierarchyMdcvState] = useState({key:undefined,
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
              const [characteristicsOfMetadataFormatWnecState, setcharacteristicsOfMetadataFormatWnecState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据形式特征",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 元数据形式特征 结束属性
              
              // 元数据存储位置 开始属性
              const [metadataStorageLocationGzzhState, setmetadataStorageLocationGzzhState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据存储位置",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 元数据存储位置 结束属性
              
              // 元数据电子签名 开始属性
              const [metadataElectronicSignatureIigsState, setmetadataElectronicSignatureIigsState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据电子签名",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 元数据电子签名 结束属性
              
              // 元数据来源 开始属性
              const [sourceOfMetadataVvziState, setsourceOfMetadataVvziState] = useState({key:undefined,
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
              const [referenceXupxState, setreferenceXupxState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"档号",
disabled:false,
style:{color:"#f0f8ff",
backgroundColor:"#6d8fc0",
},
})
              // 档号 结束属性
              
              // 生成文件 开始属性
              const [generateFileUnwfState, setgenerateFileUnwfState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"生成文件",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 生成文件 结束属性
              
              // 日志审核 开始属性
              const [logAuditJqmlState, setlogAuditJqmlState] = useState({title:"日志审核",
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
              const [pendingAuditLogHzouState, setpendingAuditLogHzouState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"待审核日志",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 待审核日志 结束属性
              
              // 已审核日志 开始属性
              const [verifiedLogsXarsState, setverifiedLogsXarsState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"已审核日志",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 已审核日志 结束属性
              
              // 两栏容器 开始属性
              const [twoColumnContainerLuipState, settwoColumnContainerLuipState] = useState({style:{width:"86%",
display:"flex",
flexDirection:"column",
justifyContent:"center",
},
})
              // 两栏容器 结束属性
              
              // 容器 开始属性
              const [containerIsznState, setcontainerIsznState] = useState({style:{width:"100%",
height:"9%",
backgroundColor:"#f0f8ff",
},
})
              // 容器 结束属性
              
              // 容器 开始属性
              const [containerWiccState, setcontainerWiccState] = useState({style:{width:"100%",
height:"9%",
backgroundColor:"#ffffff",
},
})
              // 容器 结束属性
              
              // 两栏容器 开始属性
              const [twoColumnContainerAnmdState, settwoColumnContainerAnmdState] = useState({style:{width:"100%",
display:"flex",
flexDirection:"column",
},
})
              // 两栏容器 结束属性
              
              // 容器 开始属性
              const [containerAzliState, setcontainerAzliState] = useState({style:{width:"100%",
},
})
              // 容器 结束属性
              
              // 两栏容器 开始属性
              const [twoColumnContainerVhltState, settwoColumnContainerVhltState] = useState({style:{width:"100%",
display:"flex",
flexDirection:"column",
},
})
              // 两栏容器 结束属性
              
              // 系统名称 开始属性
              const [systemNameQcvhState, setsystemNameQcvhState] = useState({style:{gap:"14px",
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
              const [systemNameMbaeState, setsystemNameMbaeState] = useState({code:false,
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
              const [containerGcowState, setcontainerGcowState] = useState({style:{width:"100%",
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
              const [iconGdfrState, seticonGdfrState] = useState({spin:false,
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
              const [exitButtonMqxnState, setexitButtonMqxnState] = useState({icon:undefined,
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
              const [pleaseEnterExplanatoryTitleTextWbfyState, setpleaseEnterExplanatoryTitleTextWbfyState] = useState({style:{width:"100%",
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
              const [electronicFileNumberFvhcState, setelectronicFileNumberFvhcState] = useState({style:{width:"100%",
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
              const [electronicFileNumberPrefixGazfState, setelectronicFileNumberPrefixGazfState] = useState({style:{width:"49%",
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
              const [electronicFileNumberLkxyState, setelectronicFileNumberLkxyState] = useState({code:false,
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
              const [pleaseEnterTheElectronicFileNumberCoqpState, setpleaseEnterTheElectronicFileNumberCoqpState] = useState({size:"middle",
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
              const [electronicFileNumber1RdluState, setelectronicFileNumber1RdluState] = useState({style:{width:"100%",
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
              const [electronicFileNumberPrefixPyztState, setelectronicFileNumberPrefixPyztState] = useState({style:{width:"49%",
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
              
              // 档号 开始属性
              const [referenceAfrcState, setreferenceAfrcState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"档号",
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
              // 档号 结束属性
              
              // 请输入档号 开始属性
              const [pleaseEnterTheFileNumberTirgState, setpleaseEnterTheFileNumberTirgState] = useState({size:"middle",
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"请输入档号",
defaultValue:undefined,
style:{width:"60%",
height:"60px",
},
})
              // 请输入档号 结束属性
              
              // 电子文件号12 开始属性
              const [electronicFileNumber12State, setelectronicFileNumber12State] = useState({style:{width:"100%",
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
              // 电子文件号12 结束属性
              
              // 电子文件号前缀 开始属性
              const [electronicFileNumberPrefixIjagState, setelectronicFileNumberPrefixIjagState] = useState({style:{width:"49%",
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
              
              // 目录号 开始属性
              const [catalogNumberState, setcatalogNumberState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"目录号",
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
              // 目录号 结束属性
              
              // 请输入目录号 开始属性
              const [pleaseEnterTheCatalogNumberState, setpleaseEnterTheCatalogNumberState] = useState({size:"middle",
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"请输入目录号",
defaultValue:undefined,
style:{width:"60%",
height:"60px",
},
})
              // 请输入目录号 结束属性
              
              // 电子文件号11 开始属性
              const [electronicFileNumber11MpmcState, setelectronicFileNumber11MpmcState] = useState({style:{width:"100%",
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
              // 电子文件号11 结束属性
              
              // 电子文件号前缀 开始属性
              const [electronicFileNumberPrefixJzjkState, setelectronicFileNumberPrefixJzjkState] = useState({style:{width:"49%",
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
              
              // 保管期限 开始属性
              const [storagePeriodState, setstoragePeriodState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"保管期限",
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
              // 保管期限 结束属性
              
              // 请输入保管期限 开始属性
              const [pleaseEnterTheStoragePeriodState, setpleaseEnterTheStoragePeriodState] = useState({size:"middle",
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"请输入保管期限",
defaultValue:undefined,
style:{width:"60%",
height:"60px",
},
})
              // 请输入保管期限 结束属性
              
              // 电子文件号111 开始属性
              const [electronicFileNumber111State, setelectronicFileNumber111State] = useState({style:{width:"100%",
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
              // 电子文件号111 结束属性
              
              // 电子文件号前缀 开始属性
              const [electronicFileNumberPrefixKjfbState, setelectronicFileNumberPrefixKjfbState] = useState({style:{width:"49%",
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
              
              // 机构或问题 开始属性
              const [institutionOrProblemState, setinstitutionOrProblemState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"机构或问题",
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
              // 机构或问题 结束属性
              
              // 请输入机构或问题 开始属性
              const [pleaseEnterTheInstitutionOrQuestionState, setpleaseEnterTheInstitutionOrQuestionState] = useState({size:"middle",
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"请输入机构或问题",
defaultValue:undefined,
style:{width:"60%",
height:"60px",
},
})
              // 请输入机构或问题 结束属性
              
              // 电子文件号1113 开始属性
              const [electronicFileNumber111DwscState, setelectronicFileNumber111DwscState] = useState({style:{width:"100%",
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
              // 电子文件号1113 结束属性
              
              // 电子文件号前缀 开始属性
              const [electronicFileNumberPrefixDmatState, setelectronicFileNumberPrefixDmatState] = useState({style:{width:"49%",
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
              
              // 类别号 开始属性
              const [categoryNumberWqlvState, setcategoryNumberWqlvState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"类别号",
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
              // 类别号 结束属性
              
              // 请输入类别号 开始属性
              const [pleaseEnterCategoryNumberState, setpleaseEnterCategoryNumberState] = useState({size:"middle",
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"请输入类别号",
defaultValue:undefined,
style:{width:"60%",
height:"60px",
},
})
              // 请输入类别号 结束属性
              
              // 电子文件号1112 开始属性
              const [electronicFileNumber111DdsaState, setelectronicFileNumber111DdsaState] = useState({style:{width:"100%",
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
              // 电子文件号1112 结束属性
              
              // 电子文件号前缀 开始属性
              const [electronicFileNumberPrefixOwdnState, setelectronicFileNumberPrefixOwdnState] = useState({style:{width:"49%",
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
              
              // 室编案卷号 开始属性
              const [roomCodeFileNumberState, setroomCodeFileNumberState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"室编案卷号",
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
              // 室编案卷号 结束属性
              
              // 请输入室编案卷号 开始属性
              const [pleaseEnterTheRoomCodeFileNumberState, setpleaseEnterTheRoomCodeFileNumberState] = useState({size:"middle",
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"请输入室编案卷号",
defaultValue:undefined,
style:{width:"60%",
height:"60px",
},
})
              // 请输入室编案卷号 结束属性
              
              // 电子文件号1111 开始属性
              const [electronicFileNumber111UyqoState, setelectronicFileNumber111UyqoState] = useState({style:{width:"100%",
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
              // 电子文件号1111 结束属性
              
              // 电子文件号前缀 开始属性
              const [electronicFileNumberPrefixJrnmState, setelectronicFileNumberPrefixJrnmState] = useState({style:{width:"49%",
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
              
              // 馆编案卷号 开始属性
              const [libraryFileNumberState, setlibraryFileNumberState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"馆编案卷号",
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
              // 馆编案卷号 结束属性
              
              // 请输入馆编案卷号 开始属性
              const [pleaseEnterTheLibraryCodeFileNumberState, setpleaseEnterTheLibraryCodeFileNumberState] = useState({size:"middle",
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"请输入馆编案卷号",
defaultValue:undefined,
style:{width:"60%",
height:"60px",
},
})
              // 请输入馆编案卷号 结束属性
              
              // 电子文件号11112 开始属性
              const [electronicFileNumber1111BwvgState, setelectronicFileNumber1111BwvgState] = useState({style:{width:"100%",
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
              // 电子文件号11112 结束属性
              
              // 电子文件号前缀 开始属性
              const [electronicFileNumberPrefixPwkqState, setelectronicFileNumberPrefixPwkqState] = useState({style:{width:"49%",
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
              
              // 室编件号 开始属性
              const [roomCodePartNumberState, setroomCodePartNumberState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"室编件号",
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
              // 室编件号 结束属性
              
              // 请输入室编件号 开始属性
              const [pleaseEnterTheRoomCodeNumberMazkState, setpleaseEnterTheRoomCodeNumberMazkState] = useState({size:"middle",
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"请输入室编件号",
defaultValue:undefined,
style:{width:"60%",
height:"60px",
},
})
              // 请输入室编件号 结束属性
              
              // 电子文件号11111 开始属性
              const [electronicFileNumber1111State, setelectronicFileNumber1111State] = useState({style:{width:"100%",
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
              // 电子文件号11111 结束属性
              
              // 电子文件号前缀 开始属性
              const [electronicFileNumberPrefixBezgState, setelectronicFileNumberPrefixBezgState] = useState({style:{width:"49%",
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
              
              // 文档序号 开始属性
              const [documentNumberMcwtState, setdocumentNumberMcwtState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"文档序号",
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
              // 文档序号 结束属性
              
              // 请输入文档序号 开始属性
              const [pleaseEnterTheDocumentNumberState, setpleaseEnterTheDocumentNumberState] = useState({size:"middle",
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"请输入文档序号",
defaultValue:undefined,
style:{width:"60%",
height:"60px",
},
})
              // 请输入文档序号 结束属性
              
              // 按钮 开始属性
              const [buttonSgwaState, setbuttonSgwaState] = useState({size:"middle",
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
style={{width:containerFdijState.style.width,
height:containerFdijState.style.height,
display:containerFdijState.style.display,
}}
className={`${style.containerFdij}`}
>
            {/* 导航菜单 */}
            <Antd.Menu
mode={navigationMenuOdgnState.mode}
expandIcon={navigationMenuOdgnState.expandIcon}
style={{width:navigationMenuOdgnState.style.width,
height:navigationMenuOdgnState.style.height,
backgroundColor:navigationMenuOdgnState.style.backgroundColor,
backgroundImage:navigationMenuOdgnState.style.backgroundImage,
backgroundRepeat:navigationMenuOdgnState.style.backgroundRepeat,
borderTopRightRadius:navigationMenuOdgnState.style.borderTopRightRadius,
borderBottomRightRadius:navigationMenuOdgnState.style.borderBottomRightRadius,
}}
className={`${style.navigationMenuOdgn}`}
>
            {/* 容器 */}
            <div
style={{width:containerUnqbState.style.width,
height:containerUnqbState.style.height,
display:containerUnqbState.style.display,
flexWrap:containerUnqbState.style.flexWrap,
alignItems:containerUnqbState.style.alignItems,
paddingTop:containerUnqbState.style.paddingTop,
borderColor:containerUnqbState.style.borderColor,
borderStyle:containerUnqbState.style.borderStyle,
flexDirection:containerUnqbState.style.flexDirection,
justifyContent:containerUnqbState.style.justifyContent,
borderBottomWidth:containerUnqbState.style.borderBottomWidth,
}}
className={`${style.containerUnqb}`}
>
            {/* 图片 */}
            <Antd.Image
alt={pictureOmlmState.alt}
src={pictureOmlmState.src}
width={pictureOmlmState.width}
height={pictureOmlmState.height}
preview={pictureOmlmState.preview}
fallback={pictureOmlmState.fallback}
placeholder={pictureOmlmState.placeholder}
style={{width:pictureOmlmState.style.width,
height:pictureOmlmState.style.height,
marginTop:pictureOmlmState.style.marginTop,
marginLeft:pictureOmlmState.style.marginLeft,
}}
className={`${style.pictureOmlm}`}
></Antd.Image>
            {/* 图片 */}
            
            {/* 管理员首页 */}
            <Antd.Typography.Text
code={administratorHomepageDwizState.code}
mark={administratorHomepageDwizState.mark}
type={administratorHomepageDwizState.type}
delete={administratorHomepageDwizState.delete}
italic={administratorHomepageDwizState.italic}
strong={administratorHomepageDwizState.strong}
children={administratorHomepageDwizState.children}
copyable={administratorHomepageDwizState.copyable}
disabled={administratorHomepageDwizState.disabled}
editable={administratorHomepageDwizState.editable}
ellipsis={administratorHomepageDwizState.ellipsis}
keyboard={administratorHomepageDwizState.keyboard}
underline={administratorHomepageDwizState.underline}
style={{color:administratorHomepageDwizState.style.color,
width:administratorHomepageDwizState.style.width,
height:administratorHomepageDwizState.style.height,
fontSize:administratorHomepageDwizState.style.fontSize,
textAlign:administratorHomepageDwizState.style.textAlign,
fontWeight:administratorHomepageDwizState.style.fontWeight,
marginLeft:administratorHomepageDwizState.style.marginLeft,
}}
className={`${style.administratorHomepageDwiz}`}
></Antd.Typography.Text>
            {/* 管理员首页 */}
            </div>
            {/* 容器 */}
            
            {/* 档号配置 */}
            <Antd.Menu.Item
key={fileNumberConfigurationDcwzState.key}
icon={fileNumberConfigurationDcwzState.icon}
danger={fileNumberConfigurationDcwzState.danger}
children={fileNumberConfigurationDcwzState.children}
disabled={fileNumberConfigurationDcwzState.disabled}
style={{color:fileNumberConfigurationDcwzState.style.color,
width:fileNumberConfigurationDcwzState.style.width,
marginLeft:fileNumberConfigurationDcwzState.style.marginLeft,
borderColor:fileNumberConfigurationDcwzState.style.borderColor,
borderStyle:fileNumberConfigurationDcwzState.style.borderStyle,
marginRight:fileNumberConfigurationDcwzState.style.marginRight,
backgroundColor:fileNumberConfigurationDcwzState.style.backgroundColor,
borderBottomWidth:fileNumberConfigurationDcwzState.style.borderBottomWidth,
borderTopLeftRadius:fileNumberConfigurationDcwzState.style.borderTopLeftRadius,
borderTopRightRadius:fileNumberConfigurationDcwzState.style.borderTopRightRadius,
borderBottomLeftRadius:fileNumberConfigurationDcwzState.style.borderBottomLeftRadius,
borderBottomRightRadius:fileNumberConfigurationDcwzState.style.borderBottomRightRadius,
}}
className={`${style.fileNumberConfigurationDcwz}`}
onClick={(eventBjro,) =>clickToConfigureFileNumberYwpn(eventBjro,)}></Antd.Menu.Item>
            {/* 档号配置 */}
            
            {/* 元数据填写 */}
            <Antd.Menu.ItemGroup
title={fillInMetadataBuinState.title}
style={{color:fillInMetadataBuinState.style.color,
borderColor:fillInMetadataBuinState.style.borderColor,
borderStyle:fillInMetadataBuinState.style.borderStyle,
borderTopWidth:fillInMetadataBuinState.style.borderTopWidth,
borderLeftWidth:fillInMetadataBuinState.style.borderLeftWidth,
borderRightWidth:fillInMetadataBuinState.style.borderRightWidth,
borderBottomWidth:fillInMetadataBuinState.style.borderBottomWidth,
}}
className={`${style.fillInMetadataBuin}`}
>
            {/* 元数据内容描述 */}
            <Antd.Menu.Item
key={descriptionOfMetadataContentAosgState.key}
icon={descriptionOfMetadataContentAosgState.icon}
danger={descriptionOfMetadataContentAosgState.danger}
children={descriptionOfMetadataContentAosgState.children}
disabled={descriptionOfMetadataContentAosgState.disabled}
style={{color:descriptionOfMetadataContentAosgState.style.color,
backgroundColor:descriptionOfMetadataContentAosgState.style.backgroundColor,
}}
className={`${style.descriptionOfMetadataContentAosg}`}
onClick={(eventEwar,) =>whenClickedMetadataContentDescriptionJmtd(eventEwar,)}></Antd.Menu.Item>
            {/* 元数据内容描述 */}
            
            {/* 聚合层次 */}
            <Antd.Menu.Item
key={aggregationHierarchyMdcvState.key}
icon={aggregationHierarchyMdcvState.icon}
danger={aggregationHierarchyMdcvState.danger}
children={aggregationHierarchyMdcvState.children}
disabled={aggregationHierarchyMdcvState.disabled}
style={{color:aggregationHierarchyMdcvState.style.color,
backgroundColor:aggregationHierarchyMdcvState.style.backgroundColor,
}}
className={`${style.aggregationHierarchyMdcv}`}
onClick={(eventLgxe,) =>clickOnAggregateHierarchyWbor(eventLgxe,)}></Antd.Menu.Item>
            {/* 聚合层次 */}
            
            {/* 元数据形式特征 */}
            <Antd.Menu.Item
key={characteristicsOfMetadataFormatWnecState.key}
icon={characteristicsOfMetadataFormatWnecState.icon}
danger={characteristicsOfMetadataFormatWnecState.danger}
children={characteristicsOfMetadataFormatWnecState.children}
disabled={characteristicsOfMetadataFormatWnecState.disabled}
style={{color:characteristicsOfMetadataFormatWnecState.style.color,
}}
className={`${style.characteristicsOfMetadataFormatWnec}`}
onClick={(eventWmrv,) =>whenClickedMetadataFormatFeaturesApgj(eventWmrv,)}></Antd.Menu.Item>
            {/* 元数据形式特征 */}
            
            {/* 元数据存储位置 */}
            <Antd.Menu.Item
key={metadataStorageLocationGzzhState.key}
icon={metadataStorageLocationGzzhState.icon}
danger={metadataStorageLocationGzzhState.danger}
children={metadataStorageLocationGzzhState.children}
disabled={metadataStorageLocationGzzhState.disabled}
style={{color:metadataStorageLocationGzzhState.style.color,
}}
className={`${style.metadataStorageLocationGzzh}`}
onClick={(eventXknv,) =>whenClickedMetadataStorageLocationDvrz(eventXknv,)}></Antd.Menu.Item>
            {/* 元数据存储位置 */}
            
            {/* 元数据电子签名 */}
            <Antd.Menu.Item
key={metadataElectronicSignatureIigsState.key}
icon={metadataElectronicSignatureIigsState.icon}
danger={metadataElectronicSignatureIigsState.danger}
children={metadataElectronicSignatureIigsState.children}
disabled={metadataElectronicSignatureIigsState.disabled}
style={{color:metadataElectronicSignatureIigsState.style.color,
}}
className={`${style.metadataElectronicSignatureIigs}`}
onClick={(eventYbhz,) =>whenClickedMetadataElectronicSignatureUvto(eventYbhz,)}></Antd.Menu.Item>
            {/* 元数据电子签名 */}
            
            {/* 元数据来源 */}
            <Antd.Menu.Item
key={sourceOfMetadataVvziState.key}
icon={sourceOfMetadataVvziState.icon}
danger={sourceOfMetadataVvziState.danger}
children={sourceOfMetadataVvziState.children}
disabled={sourceOfMetadataVvziState.disabled}
style={{color:sourceOfMetadataVvziState.style.color,
backgroundColor:sourceOfMetadataVvziState.style.backgroundColor,
}}
className={`${style.sourceOfMetadataVvzi}`}
onClick={(eventQplt,) =>whenClickedMetadataSourceXmhw(eventQplt,)}></Antd.Menu.Item>
            {/* 元数据来源 */}
            
            {/* 档号 */}
            <Antd.Menu.Item
key={referenceXupxState.key}
icon={referenceXupxState.icon}
danger={referenceXupxState.danger}
children={referenceXupxState.children}
disabled={referenceXupxState.disabled}
style={{color:referenceXupxState.style.color,
backgroundColor:referenceXupxState.style.backgroundColor,
}}
className={`${style.referenceXupx}`}
onClick={(eventHerm,) =>clickTimeFileNumberCtgh(eventHerm,)}></Antd.Menu.Item>
            {/* 档号 */}
            
            {/* 生成文件 */}
            <Antd.Menu.Item
key={generateFileUnwfState.key}
icon={generateFileUnwfState.icon}
danger={generateFileUnwfState.danger}
children={generateFileUnwfState.children}
disabled={generateFileUnwfState.disabled}
style={{color:generateFileUnwfState.style.color,
}}
className={`${style.generateFileUnwf}`}
onClick={(eventUdso,) =>whenClickedGenerateFileGlqj(eventUdso,)}></Antd.Menu.Item>
            {/* 生成文件 */}
            </Antd.Menu.ItemGroup>
            {/* 元数据填写 */}
            
            {/* 日志审核 */}
            <Antd.Menu.ItemGroup
title={logAuditJqmlState.title}
style={{borderColor:logAuditJqmlState.style.borderColor,
borderStyle:logAuditJqmlState.style.borderStyle,
borderTopWidth:logAuditJqmlState.style.borderTopWidth,
borderLeftWidth:logAuditJqmlState.style.borderLeftWidth,
borderRightWidth:logAuditJqmlState.style.borderRightWidth,
borderBottomWidth:logAuditJqmlState.style.borderBottomWidth,
}}
className={`${style.logAuditJqml}`}
>
            {/* 待审核日志 */}
            <Antd.Menu.Item
key={pendingAuditLogHzouState.key}
icon={pendingAuditLogHzouState.icon}
danger={pendingAuditLogHzouState.danger}
children={pendingAuditLogHzouState.children}
disabled={pendingAuditLogHzouState.disabled}
style={{color:pendingAuditLogHzouState.style.color,
}}
className={`${style.pendingAuditLogHzou}`}
onClick={(eventKjet,) =>whenClickedPendingAuditLogQtgb(eventKjet,)}></Antd.Menu.Item>
            {/* 待审核日志 */}
            
            {/* 已审核日志 */}
            <Antd.Menu.Item
key={verifiedLogsXarsState.key}
icon={verifiedLogsXarsState.icon}
danger={verifiedLogsXarsState.danger}
children={verifiedLogsXarsState.children}
disabled={verifiedLogsXarsState.disabled}
style={{color:verifiedLogsXarsState.style.color,
}}
className={`${style.verifiedLogsXars}`}
onClick={(eventAbrk,) =>whenClickedReviewedLogsXiqe(eventAbrk,)}></Antd.Menu.Item>
            {/* 已审核日志 */}
            </Antd.Menu.ItemGroup>
            {/* 日志审核 */}
            </Antd.Menu>
            {/* 导航菜单 */}
            
            {/* 两栏容器 */}
            <div
style={{width:twoColumnContainerLuipState.style.width,
display:twoColumnContainerLuipState.style.display,
flexDirection:twoColumnContainerLuipState.style.flexDirection,
justifyContent:twoColumnContainerLuipState.style.justifyContent,
}}
className={`${style.twoColumnContainerLuip}`}
>
            {/* 容器 */}
            <div
style={{width:containerIsznState.style.width,
height:containerIsznState.style.height,
backgroundColor:containerIsznState.style.backgroundColor,
}}
className={`${style.containerIszn}`}
>
            {/* 容器 */}
            <div
style={{width:containerWiccState.style.width,
height:containerWiccState.style.height,
backgroundColor:containerWiccState.style.backgroundColor,
}}
className={`${style.containerWicc}`}
>
            {/* 两栏容器 */}
            <div
style={{width:twoColumnContainerAnmdState.style.width,
display:twoColumnContainerAnmdState.style.display,
flexDirection:twoColumnContainerAnmdState.style.flexDirection,
}}
className={`${style.twoColumnContainerAnmd}`}
>
            {/* 容器 */}
            <div
style={{width:containerAzliState.style.width,
}}
className={`${style.containerAzli}`}
>
            {/* 两栏容器 */}
            <div
style={{width:twoColumnContainerVhltState.style.width,
display:twoColumnContainerVhltState.style.display,
flexDirection:twoColumnContainerVhltState.style.flexDirection,
}}
className={`${style.twoColumnContainerVhlt}`}
>
            {/* 系统名称 */}
            <div
style={{gap:systemNameQcvhState.style.gap,
color:systemNameQcvhState.style.color,
width:systemNameQcvhState.style.width,
height:systemNameQcvhState.style.height,
display:systemNameQcvhState.style.display,
fontSize:systemNameQcvhState.style.fontSize,
marginTop:systemNameQcvhState.style.marginTop,
textAlign:systemNameQcvhState.style.textAlign,
alignItems:systemNameQcvhState.style.alignItems,
borderColor:systemNameQcvhState.style.borderColor,
borderStyle:systemNameQcvhState.style.borderStyle,
flexDirection:systemNameQcvhState.style.flexDirection,
justifyContent:systemNameQcvhState.style.justifyContent,
backgroundColor:systemNameQcvhState.style.backgroundColor,
borderBottomWidth:systemNameQcvhState.style.borderBottomWidth,
}}
className={`${style.systemNameQcvh}`}
>
            {/* 系统名称 */}
            <Antd.Typography.Text
code={systemNameMbaeState.code}
mark={systemNameMbaeState.mark}
type={systemNameMbaeState.type}
delete={systemNameMbaeState.delete}
italic={systemNameMbaeState.italic}
strong={systemNameMbaeState.strong}
children={systemNameMbaeState.children}
copyable={systemNameMbaeState.copyable}
disabled={systemNameMbaeState.disabled}
editable={systemNameMbaeState.editable}
ellipsis={systemNameMbaeState.ellipsis}
keyboard={systemNameMbaeState.keyboard}
underline={systemNameMbaeState.underline}
style={{color:systemNameMbaeState.style.color,
display:systemNameMbaeState.style.display,
fontSize:systemNameMbaeState.style.fontSize,
textAlign:systemNameMbaeState.style.textAlign,
alignItems:systemNameMbaeState.style.alignItems,
fontWeight:systemNameMbaeState.style.fontWeight,
justifyContent:systemNameMbaeState.style.justifyContent,
}}
className={`${style.systemNameMbae}`}
></Antd.Typography.Text>
            {/* 系统名称 */}
            </div>
            {/* 系统名称 */}
            
            {/* 容器 */}
            <div
style={{width:containerGcowState.style.width,
height:containerGcowState.style.height,
display:containerGcowState.style.display,
flexWrap:containerGcowState.style.flexWrap,
alignItems:containerGcowState.style.alignItems,
borderColor:containerGcowState.style.borderColor,
borderStyle:containerGcowState.style.borderStyle,
flexDirection:containerGcowState.style.flexDirection,
justifyContent:containerGcowState.style.justifyContent,
backgroundColor:containerGcowState.style.backgroundColor,
}}
className={`${style.containerGcow}`}
>
            {/* 图标 */}
            <AntdIcon.UserOutlined
spin={iconGdfrState.spin}
rotate={iconGdfrState.rotate}
twoToneColor={iconGdfrState.twoToneColor}
style={{color:iconGdfrState.style.color,
width:iconGdfrState.style.width,
height:iconGdfrState.style.height,
fontSize:iconGdfrState.style.fontSize,
marginTop:iconGdfrState.style.marginTop,
fontWeight:iconGdfrState.style.fontWeight,
marginRight:iconGdfrState.style.marginRight,
}}
className={`${style.iconGdfr}`}
></AntdIcon.UserOutlined>
            {/* 图标 */}
            
            {/* 退出按钮 */}
            <Antd.Button
icon={exitButtonMqxnState.icon}
size={exitButtonMqxnState.size}
type={exitButtonMqxnState.type}
ghost={exitButtonMqxnState.ghost}
shape={exitButtonMqxnState.shape}
danger={exitButtonMqxnState.danger}
loading={exitButtonMqxnState.loading}
children={exitButtonMqxnState.children}
disabled={exitButtonMqxnState.disabled}
style={{fontSize:exitButtonMqxnState.style.fontSize,
fontWeight:exitButtonMqxnState.style.fontWeight,
marginRight:exitButtonMqxnState.style.marginRight,
marginBottom:exitButtonMqxnState.style.marginBottom,
backgroundColor:exitButtonMqxnState.style.backgroundColor,
}}
className={`${style.exitButtonMqxn}`}
onClick={(eventAevd,) =>clickExitButtonTwxn(eventAevd,)}></Antd.Button>
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
style={{width:pleaseEnterExplanatoryTitleTextWbfyState.style.width,
height:pleaseEnterExplanatoryTitleTextWbfyState.style.height,
display:pleaseEnterExplanatoryTitleTextWbfyState.style.display,
marginTop:pleaseEnterExplanatoryTitleTextWbfyState.style.marginTop,
borderColor:pleaseEnterExplanatoryTitleTextWbfyState.style.borderColor,
borderStyle:pleaseEnterExplanatoryTitleTextWbfyState.style.borderStyle,
paddingLeft:pleaseEnterExplanatoryTitleTextWbfyState.style.paddingLeft,
paddingRight:pleaseEnterExplanatoryTitleTextWbfyState.style.paddingRight,
flexDirection:pleaseEnterExplanatoryTitleTextWbfyState.style.flexDirection,
backgroundColor:pleaseEnterExplanatoryTitleTextWbfyState.style.backgroundColor,
}}
className={`${style.pleaseEnterExplanatoryTitleTextWbfy}`}
>
            {/* 电子文件号 */}
            <div
style={{width:electronicFileNumberFvhcState.style.width,
height:electronicFileNumberFvhcState.style.height,
display:electronicFileNumberFvhcState.style.display,
marginTop:electronicFileNumberFvhcState.style.marginTop,
marginBottom:electronicFileNumberFvhcState.style.marginBottom,
justifyContent:electronicFileNumberFvhcState.style.justifyContent,
borderTopLeftRadius:electronicFileNumberFvhcState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumberFvhcState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumberFvhcState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumberFvhcState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumberFvhc}`}
>
            {/* 电子文件号前缀 */}
            <div
style={{width:electronicFileNumberPrefixGazfState.style.width,
height:electronicFileNumberPrefixGazfState.style.height,
display:electronicFileNumberPrefixGazfState.style.display,
alignItems:electronicFileNumberPrefixGazfState.style.alignItems,
marginRight:electronicFileNumberPrefixGazfState.style.marginRight,
justifyContent:electronicFileNumberPrefixGazfState.style.justifyContent,
backgroundColor:electronicFileNumberPrefixGazfState.style.backgroundColor,
borderTopLeftRadius:electronicFileNumberPrefixGazfState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumberPrefixGazfState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumberPrefixGazfState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumberPrefixGazfState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumberPrefixGazf}`}
>
            {/* 电子文件号 */}
            <Antd.Typography.Text
code={electronicFileNumberLkxyState.code}
mark={electronicFileNumberLkxyState.mark}
type={electronicFileNumberLkxyState.type}
delete={electronicFileNumberLkxyState.delete}
italic={electronicFileNumberLkxyState.italic}
strong={electronicFileNumberLkxyState.strong}
children={electronicFileNumberLkxyState.children}
copyable={electronicFileNumberLkxyState.copyable}
disabled={electronicFileNumberLkxyState.disabled}
editable={electronicFileNumberLkxyState.editable}
ellipsis={electronicFileNumberLkxyState.ellipsis}
keyboard={electronicFileNumberLkxyState.keyboard}
underline={electronicFileNumberLkxyState.underline}
style={{gap:electronicFileNumberLkxyState.style.gap,
color:electronicFileNumberLkxyState.style.color,
width:electronicFileNumberLkxyState.style.width,
height:electronicFileNumberLkxyState.style.height,
display:electronicFileNumberLkxyState.style.display,
fontSize:electronicFileNumberLkxyState.style.fontSize,
textAlign:electronicFileNumberLkxyState.style.textAlign,
alignItems:electronicFileNumberLkxyState.style.alignItems,
marginRight:electronicFileNumberLkxyState.style.marginRight,
flexDirection:electronicFileNumberLkxyState.style.flexDirection,
justifyContent:electronicFileNumberLkxyState.style.justifyContent,
}}
className={`${style.electronicFileNumberLkxy}`}
></Antd.Typography.Text>
            {/* 电子文件号 */}
            
            {/* 请输入电子文件号 */}
            <Antd.Input
size={pleaseEnterTheElectronicFileNumberCoqpState.size}
prefix={pleaseEnterTheElectronicFileNumberCoqpState.prefix}
bordered={pleaseEnterTheElectronicFileNumberCoqpState.bordered}
disabled={pleaseEnterTheElectronicFileNumberCoqpState.disabled}
maxLength={pleaseEnterTheElectronicFileNumberCoqpState.maxLength}
showCount={pleaseEnterTheElectronicFileNumberCoqpState.showCount}
addonAfter={pleaseEnterTheElectronicFileNumberCoqpState.addonAfter}
allowClear={pleaseEnterTheElectronicFileNumberCoqpState.allowClear}
addonBefore={pleaseEnterTheElectronicFileNumberCoqpState.addonBefore}
placeholder={pleaseEnterTheElectronicFileNumberCoqpState.placeholder}
defaultValue={pleaseEnterTheElectronicFileNumberCoqpState.defaultValue}
style={{width:pleaseEnterTheElectronicFileNumberCoqpState.style.width,
height:pleaseEnterTheElectronicFileNumberCoqpState.style.height,
}}
className={`${style.pleaseEnterTheElectronicFileNumberCoqp}`}
></Antd.Input>
            {/* 请输入电子文件号 */}
            </div>
            {/* 电子文件号前缀 */}
            </div>
            {/* 电子文件号 */}
            
            {/* 电子文件号1 */}
            <div
style={{width:electronicFileNumber1RdluState.style.width,
height:electronicFileNumber1RdluState.style.height,
display:electronicFileNumber1RdluState.style.display,
marginTop:electronicFileNumber1RdluState.style.marginTop,
marginBottom:electronicFileNumber1RdluState.style.marginBottom,
justifyContent:electronicFileNumber1RdluState.style.justifyContent,
borderTopLeftRadius:electronicFileNumber1RdluState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumber1RdluState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumber1RdluState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumber1RdluState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumber1Rdlu}`}
>
            {/* 电子文件号前缀 */}
            <div
style={{width:electronicFileNumberPrefixPyztState.style.width,
height:electronicFileNumberPrefixPyztState.style.height,
display:electronicFileNumberPrefixPyztState.style.display,
alignItems:electronicFileNumberPrefixPyztState.style.alignItems,
marginRight:electronicFileNumberPrefixPyztState.style.marginRight,
justifyContent:electronicFileNumberPrefixPyztState.style.justifyContent,
backgroundColor:electronicFileNumberPrefixPyztState.style.backgroundColor,
borderTopLeftRadius:electronicFileNumberPrefixPyztState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumberPrefixPyztState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumberPrefixPyztState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumberPrefixPyztState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumberPrefixPyzt}`}
>
            {/* 档号 */}
            <Antd.Typography.Text
code={referenceAfrcState.code}
mark={referenceAfrcState.mark}
type={referenceAfrcState.type}
delete={referenceAfrcState.delete}
italic={referenceAfrcState.italic}
strong={referenceAfrcState.strong}
children={referenceAfrcState.children}
copyable={referenceAfrcState.copyable}
disabled={referenceAfrcState.disabled}
editable={referenceAfrcState.editable}
ellipsis={referenceAfrcState.ellipsis}
keyboard={referenceAfrcState.keyboard}
underline={referenceAfrcState.underline}
style={{gap:referenceAfrcState.style.gap,
color:referenceAfrcState.style.color,
width:referenceAfrcState.style.width,
height:referenceAfrcState.style.height,
display:referenceAfrcState.style.display,
fontSize:referenceAfrcState.style.fontSize,
textAlign:referenceAfrcState.style.textAlign,
alignItems:referenceAfrcState.style.alignItems,
marginRight:referenceAfrcState.style.marginRight,
flexDirection:referenceAfrcState.style.flexDirection,
justifyContent:referenceAfrcState.style.justifyContent,
}}
className={`${style.referenceAfrc}`}
></Antd.Typography.Text>
            {/* 档号 */}
            
            {/* 请输入档号 */}
            <Antd.Input
size={pleaseEnterTheFileNumberTirgState.size}
prefix={pleaseEnterTheFileNumberTirgState.prefix}
bordered={pleaseEnterTheFileNumberTirgState.bordered}
disabled={pleaseEnterTheFileNumberTirgState.disabled}
maxLength={pleaseEnterTheFileNumberTirgState.maxLength}
showCount={pleaseEnterTheFileNumberTirgState.showCount}
addonAfter={pleaseEnterTheFileNumberTirgState.addonAfter}
allowClear={pleaseEnterTheFileNumberTirgState.allowClear}
addonBefore={pleaseEnterTheFileNumberTirgState.addonBefore}
placeholder={pleaseEnterTheFileNumberTirgState.placeholder}
defaultValue={pleaseEnterTheFileNumberTirgState.defaultValue}
style={{width:pleaseEnterTheFileNumberTirgState.style.width,
height:pleaseEnterTheFileNumberTirgState.style.height,
}}
className={`${style.pleaseEnterTheFileNumberTirg}`}
></Antd.Input>
            {/* 请输入档号 */}
            </div>
            {/* 电子文件号前缀 */}
            </div>
            {/* 电子文件号1 */}
            
            {/* 电子文件号12 */}
            <div
style={{width:electronicFileNumber12State.style.width,
height:electronicFileNumber12State.style.height,
display:electronicFileNumber12State.style.display,
marginTop:electronicFileNumber12State.style.marginTop,
marginBottom:electronicFileNumber12State.style.marginBottom,
justifyContent:electronicFileNumber12State.style.justifyContent,
borderTopLeftRadius:electronicFileNumber12State.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumber12State.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumber12State.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumber12State.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumber12}`}
>
            {/* 电子文件号前缀 */}
            <div
style={{width:electronicFileNumberPrefixIjagState.style.width,
height:electronicFileNumberPrefixIjagState.style.height,
display:electronicFileNumberPrefixIjagState.style.display,
alignItems:electronicFileNumberPrefixIjagState.style.alignItems,
marginRight:electronicFileNumberPrefixIjagState.style.marginRight,
justifyContent:electronicFileNumberPrefixIjagState.style.justifyContent,
backgroundColor:electronicFileNumberPrefixIjagState.style.backgroundColor,
borderTopLeftRadius:electronicFileNumberPrefixIjagState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumberPrefixIjagState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumberPrefixIjagState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumberPrefixIjagState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumberPrefixIjag}`}
>
            {/* 目录号 */}
            <Antd.Typography.Text
code={catalogNumberState.code}
mark={catalogNumberState.mark}
type={catalogNumberState.type}
delete={catalogNumberState.delete}
italic={catalogNumberState.italic}
strong={catalogNumberState.strong}
children={catalogNumberState.children}
copyable={catalogNumberState.copyable}
disabled={catalogNumberState.disabled}
editable={catalogNumberState.editable}
ellipsis={catalogNumberState.ellipsis}
keyboard={catalogNumberState.keyboard}
underline={catalogNumberState.underline}
style={{gap:catalogNumberState.style.gap,
color:catalogNumberState.style.color,
width:catalogNumberState.style.width,
height:catalogNumberState.style.height,
display:catalogNumberState.style.display,
fontSize:catalogNumberState.style.fontSize,
textAlign:catalogNumberState.style.textAlign,
alignItems:catalogNumberState.style.alignItems,
marginRight:catalogNumberState.style.marginRight,
flexDirection:catalogNumberState.style.flexDirection,
justifyContent:catalogNumberState.style.justifyContent,
}}
className={`${style.catalogNumber}`}
></Antd.Typography.Text>
            {/* 目录号 */}
            
            {/* 请输入目录号 */}
            <Antd.Input
size={pleaseEnterTheCatalogNumberState.size}
prefix={pleaseEnterTheCatalogNumberState.prefix}
bordered={pleaseEnterTheCatalogNumberState.bordered}
disabled={pleaseEnterTheCatalogNumberState.disabled}
maxLength={pleaseEnterTheCatalogNumberState.maxLength}
showCount={pleaseEnterTheCatalogNumberState.showCount}
addonAfter={pleaseEnterTheCatalogNumberState.addonAfter}
allowClear={pleaseEnterTheCatalogNumberState.allowClear}
addonBefore={pleaseEnterTheCatalogNumberState.addonBefore}
placeholder={pleaseEnterTheCatalogNumberState.placeholder}
defaultValue={pleaseEnterTheCatalogNumberState.defaultValue}
style={{width:pleaseEnterTheCatalogNumberState.style.width,
height:pleaseEnterTheCatalogNumberState.style.height,
}}
className={`${style.pleaseEnterTheCatalogNumber}`}
></Antd.Input>
            {/* 请输入目录号 */}
            </div>
            {/* 电子文件号前缀 */}
            </div>
            {/* 电子文件号12 */}
            
            {/* 电子文件号11 */}
            <div
style={{width:electronicFileNumber11MpmcState.style.width,
height:electronicFileNumber11MpmcState.style.height,
display:electronicFileNumber11MpmcState.style.display,
marginTop:electronicFileNumber11MpmcState.style.marginTop,
marginBottom:electronicFileNumber11MpmcState.style.marginBottom,
justifyContent:electronicFileNumber11MpmcState.style.justifyContent,
borderTopLeftRadius:electronicFileNumber11MpmcState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumber11MpmcState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumber11MpmcState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumber11MpmcState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumber11Mpmc}`}
>
            {/* 电子文件号前缀 */}
            <div
style={{width:electronicFileNumberPrefixJzjkState.style.width,
height:electronicFileNumberPrefixJzjkState.style.height,
display:electronicFileNumberPrefixJzjkState.style.display,
alignItems:electronicFileNumberPrefixJzjkState.style.alignItems,
marginRight:electronicFileNumberPrefixJzjkState.style.marginRight,
justifyContent:electronicFileNumberPrefixJzjkState.style.justifyContent,
backgroundColor:electronicFileNumberPrefixJzjkState.style.backgroundColor,
borderTopLeftRadius:electronicFileNumberPrefixJzjkState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumberPrefixJzjkState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumberPrefixJzjkState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumberPrefixJzjkState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumberPrefixJzjk}`}
>
            {/* 保管期限 */}
            <Antd.Typography.Text
code={storagePeriodState.code}
mark={storagePeriodState.mark}
type={storagePeriodState.type}
delete={storagePeriodState.delete}
italic={storagePeriodState.italic}
strong={storagePeriodState.strong}
children={storagePeriodState.children}
copyable={storagePeriodState.copyable}
disabled={storagePeriodState.disabled}
editable={storagePeriodState.editable}
ellipsis={storagePeriodState.ellipsis}
keyboard={storagePeriodState.keyboard}
underline={storagePeriodState.underline}
style={{gap:storagePeriodState.style.gap,
color:storagePeriodState.style.color,
width:storagePeriodState.style.width,
height:storagePeriodState.style.height,
display:storagePeriodState.style.display,
fontSize:storagePeriodState.style.fontSize,
textAlign:storagePeriodState.style.textAlign,
alignItems:storagePeriodState.style.alignItems,
marginRight:storagePeriodState.style.marginRight,
flexDirection:storagePeriodState.style.flexDirection,
justifyContent:storagePeriodState.style.justifyContent,
}}
className={`${style.storagePeriod}`}
></Antd.Typography.Text>
            {/* 保管期限 */}
            
            {/* 请输入保管期限 */}
            <Antd.Input
size={pleaseEnterTheStoragePeriodState.size}
prefix={pleaseEnterTheStoragePeriodState.prefix}
bordered={pleaseEnterTheStoragePeriodState.bordered}
disabled={pleaseEnterTheStoragePeriodState.disabled}
maxLength={pleaseEnterTheStoragePeriodState.maxLength}
showCount={pleaseEnterTheStoragePeriodState.showCount}
addonAfter={pleaseEnterTheStoragePeriodState.addonAfter}
allowClear={pleaseEnterTheStoragePeriodState.allowClear}
addonBefore={pleaseEnterTheStoragePeriodState.addonBefore}
placeholder={pleaseEnterTheStoragePeriodState.placeholder}
defaultValue={pleaseEnterTheStoragePeriodState.defaultValue}
style={{width:pleaseEnterTheStoragePeriodState.style.width,
height:pleaseEnterTheStoragePeriodState.style.height,
}}
className={`${style.pleaseEnterTheStoragePeriod}`}
></Antd.Input>
            {/* 请输入保管期限 */}
            </div>
            {/* 电子文件号前缀 */}
            </div>
            {/* 电子文件号11 */}
            
            {/* 电子文件号111 */}
            <div
style={{width:electronicFileNumber111State.style.width,
height:electronicFileNumber111State.style.height,
display:electronicFileNumber111State.style.display,
marginTop:electronicFileNumber111State.style.marginTop,
marginBottom:electronicFileNumber111State.style.marginBottom,
justifyContent:electronicFileNumber111State.style.justifyContent,
borderTopLeftRadius:electronicFileNumber111State.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumber111State.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumber111State.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumber111State.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumber111}`}
>
            {/* 电子文件号前缀 */}
            <div
style={{width:electronicFileNumberPrefixKjfbState.style.width,
height:electronicFileNumberPrefixKjfbState.style.height,
display:electronicFileNumberPrefixKjfbState.style.display,
alignItems:electronicFileNumberPrefixKjfbState.style.alignItems,
marginRight:electronicFileNumberPrefixKjfbState.style.marginRight,
justifyContent:electronicFileNumberPrefixKjfbState.style.justifyContent,
backgroundColor:electronicFileNumberPrefixKjfbState.style.backgroundColor,
borderTopLeftRadius:electronicFileNumberPrefixKjfbState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumberPrefixKjfbState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumberPrefixKjfbState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumberPrefixKjfbState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumberPrefixKjfb}`}
>
            {/* 机构或问题 */}
            <Antd.Typography.Text
code={institutionOrProblemState.code}
mark={institutionOrProblemState.mark}
type={institutionOrProblemState.type}
delete={institutionOrProblemState.delete}
italic={institutionOrProblemState.italic}
strong={institutionOrProblemState.strong}
children={institutionOrProblemState.children}
copyable={institutionOrProblemState.copyable}
disabled={institutionOrProblemState.disabled}
editable={institutionOrProblemState.editable}
ellipsis={institutionOrProblemState.ellipsis}
keyboard={institutionOrProblemState.keyboard}
underline={institutionOrProblemState.underline}
style={{gap:institutionOrProblemState.style.gap,
color:institutionOrProblemState.style.color,
width:institutionOrProblemState.style.width,
height:institutionOrProblemState.style.height,
display:institutionOrProblemState.style.display,
fontSize:institutionOrProblemState.style.fontSize,
textAlign:institutionOrProblemState.style.textAlign,
alignItems:institutionOrProblemState.style.alignItems,
marginRight:institutionOrProblemState.style.marginRight,
flexDirection:institutionOrProblemState.style.flexDirection,
justifyContent:institutionOrProblemState.style.justifyContent,
}}
className={`${style.institutionOrProblem}`}
></Antd.Typography.Text>
            {/* 机构或问题 */}
            
            {/* 请输入机构或问题 */}
            <Antd.Input
size={pleaseEnterTheInstitutionOrQuestionState.size}
prefix={pleaseEnterTheInstitutionOrQuestionState.prefix}
bordered={pleaseEnterTheInstitutionOrQuestionState.bordered}
disabled={pleaseEnterTheInstitutionOrQuestionState.disabled}
maxLength={pleaseEnterTheInstitutionOrQuestionState.maxLength}
showCount={pleaseEnterTheInstitutionOrQuestionState.showCount}
addonAfter={pleaseEnterTheInstitutionOrQuestionState.addonAfter}
allowClear={pleaseEnterTheInstitutionOrQuestionState.allowClear}
addonBefore={pleaseEnterTheInstitutionOrQuestionState.addonBefore}
placeholder={pleaseEnterTheInstitutionOrQuestionState.placeholder}
defaultValue={pleaseEnterTheInstitutionOrQuestionState.defaultValue}
style={{width:pleaseEnterTheInstitutionOrQuestionState.style.width,
height:pleaseEnterTheInstitutionOrQuestionState.style.height,
}}
className={`${style.pleaseEnterTheInstitutionOrQuestion}`}
></Antd.Input>
            {/* 请输入机构或问题 */}
            </div>
            {/* 电子文件号前缀 */}
            </div>
            {/* 电子文件号111 */}
            
            {/* 电子文件号1113 */}
            <div
style={{width:electronicFileNumber111DwscState.style.width,
height:electronicFileNumber111DwscState.style.height,
display:electronicFileNumber111DwscState.style.display,
marginTop:electronicFileNumber111DwscState.style.marginTop,
marginBottom:electronicFileNumber111DwscState.style.marginBottom,
justifyContent:electronicFileNumber111DwscState.style.justifyContent,
borderTopLeftRadius:electronicFileNumber111DwscState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumber111DwscState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumber111DwscState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumber111DwscState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumber111Dwsc}`}
>
            {/* 电子文件号前缀 */}
            <div
style={{width:electronicFileNumberPrefixDmatState.style.width,
height:electronicFileNumberPrefixDmatState.style.height,
display:electronicFileNumberPrefixDmatState.style.display,
alignItems:electronicFileNumberPrefixDmatState.style.alignItems,
marginRight:electronicFileNumberPrefixDmatState.style.marginRight,
justifyContent:electronicFileNumberPrefixDmatState.style.justifyContent,
backgroundColor:electronicFileNumberPrefixDmatState.style.backgroundColor,
borderTopLeftRadius:electronicFileNumberPrefixDmatState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumberPrefixDmatState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumberPrefixDmatState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumberPrefixDmatState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumberPrefixDmat}`}
>
            {/* 类别号 */}
            <Antd.Typography.Text
code={categoryNumberWqlvState.code}
mark={categoryNumberWqlvState.mark}
type={categoryNumberWqlvState.type}
delete={categoryNumberWqlvState.delete}
italic={categoryNumberWqlvState.italic}
strong={categoryNumberWqlvState.strong}
children={categoryNumberWqlvState.children}
copyable={categoryNumberWqlvState.copyable}
disabled={categoryNumberWqlvState.disabled}
editable={categoryNumberWqlvState.editable}
ellipsis={categoryNumberWqlvState.ellipsis}
keyboard={categoryNumberWqlvState.keyboard}
underline={categoryNumberWqlvState.underline}
style={{gap:categoryNumberWqlvState.style.gap,
color:categoryNumberWqlvState.style.color,
width:categoryNumberWqlvState.style.width,
height:categoryNumberWqlvState.style.height,
display:categoryNumberWqlvState.style.display,
fontSize:categoryNumberWqlvState.style.fontSize,
textAlign:categoryNumberWqlvState.style.textAlign,
alignItems:categoryNumberWqlvState.style.alignItems,
marginRight:categoryNumberWqlvState.style.marginRight,
flexDirection:categoryNumberWqlvState.style.flexDirection,
justifyContent:categoryNumberWqlvState.style.justifyContent,
}}
className={`${style.categoryNumberWqlv}`}
></Antd.Typography.Text>
            {/* 类别号 */}
            
            {/* 请输入类别号 */}
            <Antd.Input
size={pleaseEnterCategoryNumberState.size}
prefix={pleaseEnterCategoryNumberState.prefix}
bordered={pleaseEnterCategoryNumberState.bordered}
disabled={pleaseEnterCategoryNumberState.disabled}
maxLength={pleaseEnterCategoryNumberState.maxLength}
showCount={pleaseEnterCategoryNumberState.showCount}
addonAfter={pleaseEnterCategoryNumberState.addonAfter}
allowClear={pleaseEnterCategoryNumberState.allowClear}
addonBefore={pleaseEnterCategoryNumberState.addonBefore}
placeholder={pleaseEnterCategoryNumberState.placeholder}
defaultValue={pleaseEnterCategoryNumberState.defaultValue}
style={{width:pleaseEnterCategoryNumberState.style.width,
height:pleaseEnterCategoryNumberState.style.height,
}}
className={`${style.pleaseEnterCategoryNumber}`}
></Antd.Input>
            {/* 请输入类别号 */}
            </div>
            {/* 电子文件号前缀 */}
            </div>
            {/* 电子文件号1113 */}
            
            {/* 电子文件号1112 */}
            <div
style={{width:electronicFileNumber111DdsaState.style.width,
height:electronicFileNumber111DdsaState.style.height,
display:electronicFileNumber111DdsaState.style.display,
marginTop:electronicFileNumber111DdsaState.style.marginTop,
marginBottom:electronicFileNumber111DdsaState.style.marginBottom,
justifyContent:electronicFileNumber111DdsaState.style.justifyContent,
borderTopLeftRadius:electronicFileNumber111DdsaState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumber111DdsaState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumber111DdsaState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumber111DdsaState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumber111Ddsa}`}
>
            {/* 电子文件号前缀 */}
            <div
style={{width:electronicFileNumberPrefixOwdnState.style.width,
height:electronicFileNumberPrefixOwdnState.style.height,
display:electronicFileNumberPrefixOwdnState.style.display,
alignItems:electronicFileNumberPrefixOwdnState.style.alignItems,
marginRight:electronicFileNumberPrefixOwdnState.style.marginRight,
justifyContent:electronicFileNumberPrefixOwdnState.style.justifyContent,
backgroundColor:electronicFileNumberPrefixOwdnState.style.backgroundColor,
borderTopLeftRadius:electronicFileNumberPrefixOwdnState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumberPrefixOwdnState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumberPrefixOwdnState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumberPrefixOwdnState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumberPrefixOwdn}`}
>
            {/* 室编案卷号 */}
            <Antd.Typography.Text
code={roomCodeFileNumberState.code}
mark={roomCodeFileNumberState.mark}
type={roomCodeFileNumberState.type}
delete={roomCodeFileNumberState.delete}
italic={roomCodeFileNumberState.italic}
strong={roomCodeFileNumberState.strong}
children={roomCodeFileNumberState.children}
copyable={roomCodeFileNumberState.copyable}
disabled={roomCodeFileNumberState.disabled}
editable={roomCodeFileNumberState.editable}
ellipsis={roomCodeFileNumberState.ellipsis}
keyboard={roomCodeFileNumberState.keyboard}
underline={roomCodeFileNumberState.underline}
style={{gap:roomCodeFileNumberState.style.gap,
color:roomCodeFileNumberState.style.color,
width:roomCodeFileNumberState.style.width,
height:roomCodeFileNumberState.style.height,
display:roomCodeFileNumberState.style.display,
fontSize:roomCodeFileNumberState.style.fontSize,
textAlign:roomCodeFileNumberState.style.textAlign,
alignItems:roomCodeFileNumberState.style.alignItems,
marginRight:roomCodeFileNumberState.style.marginRight,
flexDirection:roomCodeFileNumberState.style.flexDirection,
justifyContent:roomCodeFileNumberState.style.justifyContent,
}}
className={`${style.roomCodeFileNumber}`}
></Antd.Typography.Text>
            {/* 室编案卷号 */}
            
            {/* 请输入室编案卷号 */}
            <Antd.Input
size={pleaseEnterTheRoomCodeFileNumberState.size}
prefix={pleaseEnterTheRoomCodeFileNumberState.prefix}
bordered={pleaseEnterTheRoomCodeFileNumberState.bordered}
disabled={pleaseEnterTheRoomCodeFileNumberState.disabled}
maxLength={pleaseEnterTheRoomCodeFileNumberState.maxLength}
showCount={pleaseEnterTheRoomCodeFileNumberState.showCount}
addonAfter={pleaseEnterTheRoomCodeFileNumberState.addonAfter}
allowClear={pleaseEnterTheRoomCodeFileNumberState.allowClear}
addonBefore={pleaseEnterTheRoomCodeFileNumberState.addonBefore}
placeholder={pleaseEnterTheRoomCodeFileNumberState.placeholder}
defaultValue={pleaseEnterTheRoomCodeFileNumberState.defaultValue}
style={{width:pleaseEnterTheRoomCodeFileNumberState.style.width,
height:pleaseEnterTheRoomCodeFileNumberState.style.height,
}}
className={`${style.pleaseEnterTheRoomCodeFileNumber}`}
></Antd.Input>
            {/* 请输入室编案卷号 */}
            </div>
            {/* 电子文件号前缀 */}
            </div>
            {/* 电子文件号1112 */}
            
            {/* 电子文件号1111 */}
            <div
style={{width:electronicFileNumber111UyqoState.style.width,
height:electronicFileNumber111UyqoState.style.height,
display:electronicFileNumber111UyqoState.style.display,
marginTop:electronicFileNumber111UyqoState.style.marginTop,
marginBottom:electronicFileNumber111UyqoState.style.marginBottom,
justifyContent:electronicFileNumber111UyqoState.style.justifyContent,
borderTopLeftRadius:electronicFileNumber111UyqoState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumber111UyqoState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumber111UyqoState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumber111UyqoState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumber111Uyqo}`}
>
            {/* 电子文件号前缀 */}
            <div
style={{width:electronicFileNumberPrefixJrnmState.style.width,
height:electronicFileNumberPrefixJrnmState.style.height,
display:electronicFileNumberPrefixJrnmState.style.display,
alignItems:electronicFileNumberPrefixJrnmState.style.alignItems,
marginRight:electronicFileNumberPrefixJrnmState.style.marginRight,
justifyContent:electronicFileNumberPrefixJrnmState.style.justifyContent,
backgroundColor:electronicFileNumberPrefixJrnmState.style.backgroundColor,
borderTopLeftRadius:electronicFileNumberPrefixJrnmState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumberPrefixJrnmState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumberPrefixJrnmState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumberPrefixJrnmState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumberPrefixJrnm}`}
>
            {/* 馆编案卷号 */}
            <Antd.Typography.Text
code={libraryFileNumberState.code}
mark={libraryFileNumberState.mark}
type={libraryFileNumberState.type}
delete={libraryFileNumberState.delete}
italic={libraryFileNumberState.italic}
strong={libraryFileNumberState.strong}
children={libraryFileNumberState.children}
copyable={libraryFileNumberState.copyable}
disabled={libraryFileNumberState.disabled}
editable={libraryFileNumberState.editable}
ellipsis={libraryFileNumberState.ellipsis}
keyboard={libraryFileNumberState.keyboard}
underline={libraryFileNumberState.underline}
style={{gap:libraryFileNumberState.style.gap,
color:libraryFileNumberState.style.color,
width:libraryFileNumberState.style.width,
height:libraryFileNumberState.style.height,
display:libraryFileNumberState.style.display,
fontSize:libraryFileNumberState.style.fontSize,
textAlign:libraryFileNumberState.style.textAlign,
alignItems:libraryFileNumberState.style.alignItems,
marginRight:libraryFileNumberState.style.marginRight,
flexDirection:libraryFileNumberState.style.flexDirection,
justifyContent:libraryFileNumberState.style.justifyContent,
}}
className={`${style.libraryFileNumber}`}
></Antd.Typography.Text>
            {/* 馆编案卷号 */}
            
            {/* 请输入馆编案卷号 */}
            <Antd.Input
size={pleaseEnterTheLibraryCodeFileNumberState.size}
prefix={pleaseEnterTheLibraryCodeFileNumberState.prefix}
bordered={pleaseEnterTheLibraryCodeFileNumberState.bordered}
disabled={pleaseEnterTheLibraryCodeFileNumberState.disabled}
maxLength={pleaseEnterTheLibraryCodeFileNumberState.maxLength}
showCount={pleaseEnterTheLibraryCodeFileNumberState.showCount}
addonAfter={pleaseEnterTheLibraryCodeFileNumberState.addonAfter}
allowClear={pleaseEnterTheLibraryCodeFileNumberState.allowClear}
addonBefore={pleaseEnterTheLibraryCodeFileNumberState.addonBefore}
placeholder={pleaseEnterTheLibraryCodeFileNumberState.placeholder}
defaultValue={pleaseEnterTheLibraryCodeFileNumberState.defaultValue}
style={{width:pleaseEnterTheLibraryCodeFileNumberState.style.width,
height:pleaseEnterTheLibraryCodeFileNumberState.style.height,
}}
className={`${style.pleaseEnterTheLibraryCodeFileNumber}`}
></Antd.Input>
            {/* 请输入馆编案卷号 */}
            </div>
            {/* 电子文件号前缀 */}
            </div>
            {/* 电子文件号1111 */}
            
            {/* 电子文件号11112 */}
            <div
style={{width:electronicFileNumber1111BwvgState.style.width,
height:electronicFileNumber1111BwvgState.style.height,
display:electronicFileNumber1111BwvgState.style.display,
marginTop:electronicFileNumber1111BwvgState.style.marginTop,
marginBottom:electronicFileNumber1111BwvgState.style.marginBottom,
justifyContent:electronicFileNumber1111BwvgState.style.justifyContent,
borderTopLeftRadius:electronicFileNumber1111BwvgState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumber1111BwvgState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumber1111BwvgState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumber1111BwvgState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumber1111Bwvg}`}
>
            {/* 电子文件号前缀 */}
            <div
style={{width:electronicFileNumberPrefixPwkqState.style.width,
height:electronicFileNumberPrefixPwkqState.style.height,
display:electronicFileNumberPrefixPwkqState.style.display,
alignItems:electronicFileNumberPrefixPwkqState.style.alignItems,
marginRight:electronicFileNumberPrefixPwkqState.style.marginRight,
justifyContent:electronicFileNumberPrefixPwkqState.style.justifyContent,
backgroundColor:electronicFileNumberPrefixPwkqState.style.backgroundColor,
borderTopLeftRadius:electronicFileNumberPrefixPwkqState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumberPrefixPwkqState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumberPrefixPwkqState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumberPrefixPwkqState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumberPrefixPwkq}`}
>
            {/* 室编件号 */}
            <Antd.Typography.Text
code={roomCodePartNumberState.code}
mark={roomCodePartNumberState.mark}
type={roomCodePartNumberState.type}
delete={roomCodePartNumberState.delete}
italic={roomCodePartNumberState.italic}
strong={roomCodePartNumberState.strong}
children={roomCodePartNumberState.children}
copyable={roomCodePartNumberState.copyable}
disabled={roomCodePartNumberState.disabled}
editable={roomCodePartNumberState.editable}
ellipsis={roomCodePartNumberState.ellipsis}
keyboard={roomCodePartNumberState.keyboard}
underline={roomCodePartNumberState.underline}
style={{gap:roomCodePartNumberState.style.gap,
color:roomCodePartNumberState.style.color,
width:roomCodePartNumberState.style.width,
height:roomCodePartNumberState.style.height,
display:roomCodePartNumberState.style.display,
fontSize:roomCodePartNumberState.style.fontSize,
textAlign:roomCodePartNumberState.style.textAlign,
alignItems:roomCodePartNumberState.style.alignItems,
marginRight:roomCodePartNumberState.style.marginRight,
flexDirection:roomCodePartNumberState.style.flexDirection,
justifyContent:roomCodePartNumberState.style.justifyContent,
}}
className={`${style.roomCodePartNumber}`}
></Antd.Typography.Text>
            {/* 室编件号 */}
            
            {/* 请输入室编件号 */}
            <Antd.Input
size={pleaseEnterTheRoomCodeNumberMazkState.size}
prefix={pleaseEnterTheRoomCodeNumberMazkState.prefix}
bordered={pleaseEnterTheRoomCodeNumberMazkState.bordered}
disabled={pleaseEnterTheRoomCodeNumberMazkState.disabled}
maxLength={pleaseEnterTheRoomCodeNumberMazkState.maxLength}
showCount={pleaseEnterTheRoomCodeNumberMazkState.showCount}
addonAfter={pleaseEnterTheRoomCodeNumberMazkState.addonAfter}
allowClear={pleaseEnterTheRoomCodeNumberMazkState.allowClear}
addonBefore={pleaseEnterTheRoomCodeNumberMazkState.addonBefore}
placeholder={pleaseEnterTheRoomCodeNumberMazkState.placeholder}
defaultValue={pleaseEnterTheRoomCodeNumberMazkState.defaultValue}
style={{width:pleaseEnterTheRoomCodeNumberMazkState.style.width,
height:pleaseEnterTheRoomCodeNumberMazkState.style.height,
}}
className={`${style.pleaseEnterTheRoomCodeNumberMazk}`}
></Antd.Input>
            {/* 请输入室编件号 */}
            </div>
            {/* 电子文件号前缀 */}
            </div>
            {/* 电子文件号11112 */}
            
            {/* 电子文件号11111 */}
            <div
style={{width:electronicFileNumber1111State.style.width,
height:electronicFileNumber1111State.style.height,
display:electronicFileNumber1111State.style.display,
marginTop:electronicFileNumber1111State.style.marginTop,
marginBottom:electronicFileNumber1111State.style.marginBottom,
justifyContent:electronicFileNumber1111State.style.justifyContent,
borderTopLeftRadius:electronicFileNumber1111State.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumber1111State.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumber1111State.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumber1111State.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumber1111}`}
>
            {/* 电子文件号前缀 */}
            <div
style={{width:electronicFileNumberPrefixBezgState.style.width,
height:electronicFileNumberPrefixBezgState.style.height,
display:electronicFileNumberPrefixBezgState.style.display,
alignItems:electronicFileNumberPrefixBezgState.style.alignItems,
marginRight:electronicFileNumberPrefixBezgState.style.marginRight,
justifyContent:electronicFileNumberPrefixBezgState.style.justifyContent,
backgroundColor:electronicFileNumberPrefixBezgState.style.backgroundColor,
borderTopLeftRadius:electronicFileNumberPrefixBezgState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumberPrefixBezgState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumberPrefixBezgState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumberPrefixBezgState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumberPrefixBezg}`}
>
            {/* 文档序号 */}
            <Antd.Typography.Text
code={documentNumberMcwtState.code}
mark={documentNumberMcwtState.mark}
type={documentNumberMcwtState.type}
delete={documentNumberMcwtState.delete}
italic={documentNumberMcwtState.italic}
strong={documentNumberMcwtState.strong}
children={documentNumberMcwtState.children}
copyable={documentNumberMcwtState.copyable}
disabled={documentNumberMcwtState.disabled}
editable={documentNumberMcwtState.editable}
ellipsis={documentNumberMcwtState.ellipsis}
keyboard={documentNumberMcwtState.keyboard}
underline={documentNumberMcwtState.underline}
style={{gap:documentNumberMcwtState.style.gap,
color:documentNumberMcwtState.style.color,
width:documentNumberMcwtState.style.width,
height:documentNumberMcwtState.style.height,
display:documentNumberMcwtState.style.display,
fontSize:documentNumberMcwtState.style.fontSize,
textAlign:documentNumberMcwtState.style.textAlign,
alignItems:documentNumberMcwtState.style.alignItems,
marginRight:documentNumberMcwtState.style.marginRight,
flexDirection:documentNumberMcwtState.style.flexDirection,
justifyContent:documentNumberMcwtState.style.justifyContent,
}}
className={`${style.documentNumberMcwt}`}
></Antd.Typography.Text>
            {/* 文档序号 */}
            
            {/* 请输入文档序号 */}
            <Antd.Input
size={pleaseEnterTheDocumentNumberState.size}
prefix={pleaseEnterTheDocumentNumberState.prefix}
bordered={pleaseEnterTheDocumentNumberState.bordered}
disabled={pleaseEnterTheDocumentNumberState.disabled}
maxLength={pleaseEnterTheDocumentNumberState.maxLength}
showCount={pleaseEnterTheDocumentNumberState.showCount}
addonAfter={pleaseEnterTheDocumentNumberState.addonAfter}
allowClear={pleaseEnterTheDocumentNumberState.allowClear}
addonBefore={pleaseEnterTheDocumentNumberState.addonBefore}
placeholder={pleaseEnterTheDocumentNumberState.placeholder}
defaultValue={pleaseEnterTheDocumentNumberState.defaultValue}
style={{width:pleaseEnterTheDocumentNumberState.style.width,
height:pleaseEnterTheDocumentNumberState.style.height,
}}
className={`${style.pleaseEnterTheDocumentNumber}`}
></Antd.Input>
            {/* 请输入文档序号 */}
            </div>
            {/* 电子文件号前缀 */}
            </div>
            {/* 电子文件号11111 */}
            
            {/* 按钮 */}
            <Antd.Button
size={buttonSgwaState.size}
type={buttonSgwaState.type}
ghost={buttonSgwaState.ghost}
shape={buttonSgwaState.shape}
danger={buttonSgwaState.danger}
children={buttonSgwaState.children}
disabled={buttonSgwaState.disabled}
style={{width:buttonSgwaState.style.width,
height:buttonSgwaState.style.height,
fontSize:buttonSgwaState.style.fontSize,
marginTop:buttonSgwaState.style.marginTop,
fontWeight:buttonSgwaState.style.fontWeight,
marginLeft:buttonSgwaState.style.marginLeft,
marginRight:buttonSgwaState.style.marginRight,
borderTopLeftRadius:buttonSgwaState.style.borderTopLeftRadius,
borderTopRightRadius:buttonSgwaState.style.borderTopRightRadius,
borderBottomLeftRadius:buttonSgwaState.style.borderBottomLeftRadius,
borderBottomRightRadius:buttonSgwaState.style.borderBottomRightRadius,
}}
className={`${style.buttonSgwa}`}
></Antd.Button>
            {/* 按钮 */}
            </div>
            {/* 请输入说明题名文字 */}
            </div>
            {/* 两栏容器 */}
            </div>
            {/* 容器 */}
            </>}
export default ReferenceUbnk
export { ReferenceUbnk }