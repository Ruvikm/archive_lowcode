import style from './index.module.scss'
import { useState } from 'react'
import * as Antd from '@/components/antd'
import { routes } from '@/router/index'
import { getParentInfoList } from '@/utils'
import { useNavigate } from 'react-router-dom'
import * as AntdIcon from '@ant-design/icons'
// 元数据来源
              const SourceOfMetadataDjrr = () => {
const navigate = useNavigate()
// 点击时-档号配置
          const clickToConfigureFileNumberEbvl = (eventEqku,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageDano").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据内容描述
          const whenClickedMetadataContentDescriptionKhua = (eventCzsu,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "page401").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-聚合层次
          const clickOnAggregateHierarchyBnph = (eventVamo,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageVomd").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据形式特征
          const whenClickedMetadataFormatFeaturesAptv = (eventXrwo,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageWcoq").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据存储位置
          const whenClickedMetadataStorageLocationYbaq = (eventJrnl,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageDbgh").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据电子签名
          const whenClickedMetadataElectronicSignaturePzys = (eventIrsu,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageWsbf").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据来源
          const whenClickedMetadataSourcePjmh = (eventVikf,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageGafh").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-档号
          const clickTimeFileNumberLera = (eventOnvp,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageNfdu").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-生成文件
          const whenClickedGenerateFileIvmy = (eventLoda,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageYfhi").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-待审核日志
          const whenClickedPendingAuditLogEbyr = (eventUlua,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageZuvc").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-已审核日志
          const whenClickedReviewedLogsExva = (eventEgbb,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageStsm").slice(1).map(item => item.path).join('/')}`)
}
// 点击-退出按钮
          const clickExitButtonRgcb = (eventSexi,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "defaultPageFhue").slice(1).map(item => item.path).join('/')}`)
}

              // 容器 开始属性
              const [containerXaxhState, setcontainerXaxhState] = useState({style:{width:"100vw",
height:"100vh",
display:"flex",
},
})
              // 容器 结束属性
              
              // 导航菜单 开始属性
              const [navigationMenuGftgState, setnavigationMenuGftgState] = useState({mode:"vertical",
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
              const [containerPzpaState, setcontainerPzpaState] = useState({style:{width:"100%",
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
              const [pictureXtnuState, setpictureXtnuState] = useState({alt:undefined,
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
              const [administratorHomepageSuegState, setadministratorHomepageSuegState] = useState({code:false,
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
              const [fileNumberConfigurationCyjuState, setfileNumberConfigurationCyjuState] = useState({key:undefined,
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
              const [fillInMetadataUfpwState, setfillInMetadataUfpwState] = useState({title:"元数据填写",
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
              const [descriptionOfMetadataContentGeltState, setdescriptionOfMetadataContentGeltState] = useState({key:undefined,
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
              const [aggregationHierarchyAykcState, setaggregationHierarchyAykcState] = useState({key:undefined,
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
              const [characteristicsOfMetadataFormatEutcState, setcharacteristicsOfMetadataFormatEutcState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据形式特征",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 元数据形式特征 结束属性
              
              // 元数据存储位置 开始属性
              const [metadataStorageLocationBtywState, setmetadataStorageLocationBtywState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据存储位置",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 元数据存储位置 结束属性
              
              // 元数据电子签名 开始属性
              const [metadataElectronicSignatureMhryState, setmetadataElectronicSignatureMhryState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据电子签名",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 元数据电子签名 结束属性
              
              // 元数据来源 开始属性
              const [sourceOfMetadataWjpaState, setsourceOfMetadataWjpaState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据来源",
disabled:false,
style:{color:"#f0f8ff",
backgroundColor:"#6d8fc0",
},
})
              // 元数据来源 结束属性
              
              // 档号 开始属性
              const [referenceInuqState, setreferenceInuqState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"档号",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 档号 结束属性
              
              // 生成文件 开始属性
              const [generateFileDsfdState, setgenerateFileDsfdState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"生成文件",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 生成文件 结束属性
              
              // 日志审核 开始属性
              const [logAuditHhotState, setlogAuditHhotState] = useState({title:"日志审核",
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
              const [pendingAuditLogXrufState, setpendingAuditLogXrufState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"待审核日志",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 待审核日志 结束属性
              
              // 已审核日志 开始属性
              const [verifiedLogsQyamState, setverifiedLogsQyamState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"已审核日志",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 已审核日志 结束属性
              
              // 两栏容器 开始属性
              const [twoColumnContainerFigqState, settwoColumnContainerFigqState] = useState({style:{width:"86%",
display:"flex",
flexDirection:"column",
justifyContent:"center",
},
})
              // 两栏容器 结束属性
              
              // 容器 开始属性
              const [containerIghyState, setcontainerIghyState] = useState({style:{width:"100%",
height:"9%",
backgroundColor:"#f0f8ff",
},
})
              // 容器 结束属性
              
              // 容器 开始属性
              const [containerCtbxState, setcontainerCtbxState] = useState({style:{width:"100%",
height:"9%",
backgroundColor:"#ffffff",
},
})
              // 容器 结束属性
              
              // 两栏容器 开始属性
              const [twoColumnContainerNmmyState, settwoColumnContainerNmmyState] = useState({style:{width:"100%",
display:"flex",
flexDirection:"column",
},
})
              // 两栏容器 结束属性
              
              // 容器 开始属性
              const [containerPrlxState, setcontainerPrlxState] = useState({style:{width:"100%",
},
})
              // 容器 结束属性
              
              // 两栏容器 开始属性
              const [twoColumnContainerAkcrState, settwoColumnContainerAkcrState] = useState({style:{width:"100%",
display:"flex",
flexDirection:"column",
},
})
              // 两栏容器 结束属性
              
              // 系统名称 开始属性
              const [systemNameLfzqState, setsystemNameLfzqState] = useState({style:{gap:"14px",
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
              const [systemNameLontState, setsystemNameLontState] = useState({code:false,
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
              const [containerLlbbState, setcontainerLlbbState] = useState({style:{width:"100%",
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
              const [iconPhcuState, seticonPhcuState] = useState({spin:false,
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
              const [exitButtonTxlsState, setexitButtonTxlsState] = useState({icon:undefined,
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
              const [pleaseEnterExplanatoryTitleTextRwjyState, setpleaseEnterExplanatoryTitleTextRwjyState] = useState({style:{width:"100%",
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
              const [electronicFileNumberNjuyState, setelectronicFileNumberNjuyState] = useState({style:{width:"100%",
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
              const [electronicFileNumberPrefixSxigState, setelectronicFileNumberPrefixSxigState] = useState({style:{width:"49%",
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
              const [electronicFileNumberDlxhState, setelectronicFileNumberDlxhState] = useState({code:false,
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
              const [pleaseEnterTheElectronicFileNumberApcwState, setpleaseEnterTheElectronicFileNumberApcwState] = useState({size:"middle",
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
              const [electronicFileNumber1RztvState, setelectronicFileNumber1RztvState] = useState({style:{width:"100%",
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
              const [electronicFileNumberPrefixFeyhState, setelectronicFileNumberPrefixFeyhState] = useState({style:{width:"49%",
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
              
              // 档案馆名称 开始属性
              const [archiveNameState, setarchiveNameState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"档案馆名称",
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
              // 档案馆名称 结束属性
              
              // 请输入聚合层次 开始属性
              const [pleaseEnterTheAggregationHierarchyBlzpState, setpleaseEnterTheAggregationHierarchyBlzpState] = useState({size:"middle",
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"请输入档案馆名称",
defaultValue:undefined,
style:{width:"60%",
height:"60px",
},
})
              // 请输入聚合层次 结束属性
              
              // 电子文件号12 开始属性
              const [electronicFileNumber1MzgbState, setelectronicFileNumber1MzgbState] = useState({style:{width:"100%",
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
              const [electronicFileNumberPrefixQnwsState, setelectronicFileNumberPrefixQnwsState] = useState({style:{width:"49%",
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
              
              // 档案馆代码 开始属性
              const [archiveCodeState, setarchiveCodeState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"档案馆代码",
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
              // 档案馆代码 结束属性
              
              // 请输入档案馆代码 开始属性
              const [pleaseEnterTheArchiveCodeState, setpleaseEnterTheArchiveCodeState] = useState({size:"middle",
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"请输入档案馆代码",
defaultValue:undefined,
style:{width:"60%",
height:"60px",
},
})
              // 请输入档案馆代码 结束属性
              
              // 电子文件号11 开始属性
              const [electronicFileNumber1HseiState, setelectronicFileNumber1HseiState] = useState({style:{width:"100%",
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
              const [electronicFileNumberPrefixBdjqState, setelectronicFileNumberPrefixBdjqState] = useState({style:{width:"49%",
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
              
              // 全宗名称 开始属性
              const [wholeSectNameState, setwholeSectNameState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"全宗名称",
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
              // 全宗名称 结束属性
              
              // 请输入全宗名称 开始属性
              const [pleaseEnterTheFullNameOfTheSectState, setpleaseEnterTheFullNameOfTheSectState] = useState({size:"middle",
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"请输入全宗名称",
defaultValue:undefined,
style:{width:"60%",
height:"60px",
},
})
              // 请输入全宗名称 结束属性
              
              // 电子文件号111 开始属性
              const [electronicFileNumber11State, setelectronicFileNumber11State] = useState({style:{width:"100%",
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
              const [electronicFileNumberPrefixOsofState, setelectronicFileNumberPrefixOsofState] = useState({style:{width:"49%",
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
              
              // 立档单位名称 开始属性
              const [nameOfFilingUnitState, setnameOfFilingUnitState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"立档单位名称",
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
              // 立档单位名称 结束属性
              
              // 请输入立档单位名称 开始属性
              const [pleaseEnterTheNameOfTheFilingUnitState, setpleaseEnterTheNameOfTheFilingUnitState] = useState({size:"middle",
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"请输入立档单位名称",
defaultValue:undefined,
style:{width:"60%",
height:"60px",
},
})
              // 请输入立档单位名称 结束属性
              
              // 按钮 开始属性
              const [buttonMcrbState, setbuttonMcrbState] = useState({size:"middle",
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
style={{width:containerXaxhState.style.width,
height:containerXaxhState.style.height,
display:containerXaxhState.style.display,
}}
className={`${style.containerXaxh}`}
>
            {/* 导航菜单 */}
            <Antd.Menu
mode={navigationMenuGftgState.mode}
expandIcon={navigationMenuGftgState.expandIcon}
style={{width:navigationMenuGftgState.style.width,
height:navigationMenuGftgState.style.height,
backgroundColor:navigationMenuGftgState.style.backgroundColor,
backgroundImage:navigationMenuGftgState.style.backgroundImage,
backgroundRepeat:navigationMenuGftgState.style.backgroundRepeat,
borderTopRightRadius:navigationMenuGftgState.style.borderTopRightRadius,
borderBottomRightRadius:navigationMenuGftgState.style.borderBottomRightRadius,
}}
className={`${style.navigationMenuGftg}`}
>
            {/* 容器 */}
            <div
style={{width:containerPzpaState.style.width,
height:containerPzpaState.style.height,
display:containerPzpaState.style.display,
flexWrap:containerPzpaState.style.flexWrap,
alignItems:containerPzpaState.style.alignItems,
paddingTop:containerPzpaState.style.paddingTop,
borderColor:containerPzpaState.style.borderColor,
borderStyle:containerPzpaState.style.borderStyle,
flexDirection:containerPzpaState.style.flexDirection,
justifyContent:containerPzpaState.style.justifyContent,
borderBottomWidth:containerPzpaState.style.borderBottomWidth,
}}
className={`${style.containerPzpa}`}
>
            {/* 图片 */}
            <Antd.Image
alt={pictureXtnuState.alt}
src={pictureXtnuState.src}
width={pictureXtnuState.width}
height={pictureXtnuState.height}
preview={pictureXtnuState.preview}
fallback={pictureXtnuState.fallback}
placeholder={pictureXtnuState.placeholder}
style={{width:pictureXtnuState.style.width,
height:pictureXtnuState.style.height,
marginTop:pictureXtnuState.style.marginTop,
marginLeft:pictureXtnuState.style.marginLeft,
}}
className={`${style.pictureXtnu}`}
></Antd.Image>
            {/* 图片 */}
            
            {/* 管理员首页 */}
            <Antd.Typography.Text
code={administratorHomepageSuegState.code}
mark={administratorHomepageSuegState.mark}
type={administratorHomepageSuegState.type}
delete={administratorHomepageSuegState.delete}
italic={administratorHomepageSuegState.italic}
strong={administratorHomepageSuegState.strong}
children={administratorHomepageSuegState.children}
copyable={administratorHomepageSuegState.copyable}
disabled={administratorHomepageSuegState.disabled}
editable={administratorHomepageSuegState.editable}
ellipsis={administratorHomepageSuegState.ellipsis}
keyboard={administratorHomepageSuegState.keyboard}
underline={administratorHomepageSuegState.underline}
style={{color:administratorHomepageSuegState.style.color,
width:administratorHomepageSuegState.style.width,
height:administratorHomepageSuegState.style.height,
fontSize:administratorHomepageSuegState.style.fontSize,
textAlign:administratorHomepageSuegState.style.textAlign,
fontWeight:administratorHomepageSuegState.style.fontWeight,
marginLeft:administratorHomepageSuegState.style.marginLeft,
}}
className={`${style.administratorHomepageSueg}`}
></Antd.Typography.Text>
            {/* 管理员首页 */}
            </div>
            {/* 容器 */}
            
            {/* 档号配置 */}
            <Antd.Menu.Item
key={fileNumberConfigurationCyjuState.key}
icon={fileNumberConfigurationCyjuState.icon}
danger={fileNumberConfigurationCyjuState.danger}
children={fileNumberConfigurationCyjuState.children}
disabled={fileNumberConfigurationCyjuState.disabled}
style={{color:fileNumberConfigurationCyjuState.style.color,
width:fileNumberConfigurationCyjuState.style.width,
marginLeft:fileNumberConfigurationCyjuState.style.marginLeft,
borderColor:fileNumberConfigurationCyjuState.style.borderColor,
borderStyle:fileNumberConfigurationCyjuState.style.borderStyle,
marginRight:fileNumberConfigurationCyjuState.style.marginRight,
backgroundColor:fileNumberConfigurationCyjuState.style.backgroundColor,
borderBottomWidth:fileNumberConfigurationCyjuState.style.borderBottomWidth,
borderTopLeftRadius:fileNumberConfigurationCyjuState.style.borderTopLeftRadius,
borderTopRightRadius:fileNumberConfigurationCyjuState.style.borderTopRightRadius,
borderBottomLeftRadius:fileNumberConfigurationCyjuState.style.borderBottomLeftRadius,
borderBottomRightRadius:fileNumberConfigurationCyjuState.style.borderBottomRightRadius,
}}
className={`${style.fileNumberConfigurationCyju}`}
onClick={(eventEqku,) =>clickToConfigureFileNumberEbvl(eventEqku,)}></Antd.Menu.Item>
            {/* 档号配置 */}
            
            {/* 元数据填写 */}
            <Antd.Menu.ItemGroup
title={fillInMetadataUfpwState.title}
style={{color:fillInMetadataUfpwState.style.color,
borderColor:fillInMetadataUfpwState.style.borderColor,
borderStyle:fillInMetadataUfpwState.style.borderStyle,
borderTopWidth:fillInMetadataUfpwState.style.borderTopWidth,
borderLeftWidth:fillInMetadataUfpwState.style.borderLeftWidth,
borderRightWidth:fillInMetadataUfpwState.style.borderRightWidth,
borderBottomWidth:fillInMetadataUfpwState.style.borderBottomWidth,
}}
className={`${style.fillInMetadataUfpw}`}
>
            {/* 元数据内容描述 */}
            <Antd.Menu.Item
key={descriptionOfMetadataContentGeltState.key}
icon={descriptionOfMetadataContentGeltState.icon}
danger={descriptionOfMetadataContentGeltState.danger}
children={descriptionOfMetadataContentGeltState.children}
disabled={descriptionOfMetadataContentGeltState.disabled}
style={{color:descriptionOfMetadataContentGeltState.style.color,
backgroundColor:descriptionOfMetadataContentGeltState.style.backgroundColor,
}}
className={`${style.descriptionOfMetadataContentGelt}`}
onClick={(eventCzsu,) =>whenClickedMetadataContentDescriptionKhua(eventCzsu,)}></Antd.Menu.Item>
            {/* 元数据内容描述 */}
            
            {/* 聚合层次 */}
            <Antd.Menu.Item
key={aggregationHierarchyAykcState.key}
icon={aggregationHierarchyAykcState.icon}
danger={aggregationHierarchyAykcState.danger}
children={aggregationHierarchyAykcState.children}
disabled={aggregationHierarchyAykcState.disabled}
style={{color:aggregationHierarchyAykcState.style.color,
backgroundColor:aggregationHierarchyAykcState.style.backgroundColor,
}}
className={`${style.aggregationHierarchyAykc}`}
onClick={(eventVamo,) =>clickOnAggregateHierarchyBnph(eventVamo,)}></Antd.Menu.Item>
            {/* 聚合层次 */}
            
            {/* 元数据形式特征 */}
            <Antd.Menu.Item
key={characteristicsOfMetadataFormatEutcState.key}
icon={characteristicsOfMetadataFormatEutcState.icon}
danger={characteristicsOfMetadataFormatEutcState.danger}
children={characteristicsOfMetadataFormatEutcState.children}
disabled={characteristicsOfMetadataFormatEutcState.disabled}
style={{color:characteristicsOfMetadataFormatEutcState.style.color,
}}
className={`${style.characteristicsOfMetadataFormatEutc}`}
onClick={(eventXrwo,) =>whenClickedMetadataFormatFeaturesAptv(eventXrwo,)}></Antd.Menu.Item>
            {/* 元数据形式特征 */}
            
            {/* 元数据存储位置 */}
            <Antd.Menu.Item
key={metadataStorageLocationBtywState.key}
icon={metadataStorageLocationBtywState.icon}
danger={metadataStorageLocationBtywState.danger}
children={metadataStorageLocationBtywState.children}
disabled={metadataStorageLocationBtywState.disabled}
style={{color:metadataStorageLocationBtywState.style.color,
}}
className={`${style.metadataStorageLocationBtyw}`}
onClick={(eventJrnl,) =>whenClickedMetadataStorageLocationYbaq(eventJrnl,)}></Antd.Menu.Item>
            {/* 元数据存储位置 */}
            
            {/* 元数据电子签名 */}
            <Antd.Menu.Item
key={metadataElectronicSignatureMhryState.key}
icon={metadataElectronicSignatureMhryState.icon}
danger={metadataElectronicSignatureMhryState.danger}
children={metadataElectronicSignatureMhryState.children}
disabled={metadataElectronicSignatureMhryState.disabled}
style={{color:metadataElectronicSignatureMhryState.style.color,
}}
className={`${style.metadataElectronicSignatureMhry}`}
onClick={(eventIrsu,) =>whenClickedMetadataElectronicSignaturePzys(eventIrsu,)}></Antd.Menu.Item>
            {/* 元数据电子签名 */}
            
            {/* 元数据来源 */}
            <Antd.Menu.Item
key={sourceOfMetadataWjpaState.key}
icon={sourceOfMetadataWjpaState.icon}
danger={sourceOfMetadataWjpaState.danger}
children={sourceOfMetadataWjpaState.children}
disabled={sourceOfMetadataWjpaState.disabled}
style={{color:sourceOfMetadataWjpaState.style.color,
backgroundColor:sourceOfMetadataWjpaState.style.backgroundColor,
}}
className={`${style.sourceOfMetadataWjpa}`}
onClick={(eventVikf,) =>whenClickedMetadataSourcePjmh(eventVikf,)}></Antd.Menu.Item>
            {/* 元数据来源 */}
            
            {/* 档号 */}
            <Antd.Menu.Item
key={referenceInuqState.key}
icon={referenceInuqState.icon}
danger={referenceInuqState.danger}
children={referenceInuqState.children}
disabled={referenceInuqState.disabled}
style={{color:referenceInuqState.style.color,
}}
className={`${style.referenceInuq}`}
onClick={(eventOnvp,) =>clickTimeFileNumberLera(eventOnvp,)}></Antd.Menu.Item>
            {/* 档号 */}
            
            {/* 生成文件 */}
            <Antd.Menu.Item
key={generateFileDsfdState.key}
icon={generateFileDsfdState.icon}
danger={generateFileDsfdState.danger}
children={generateFileDsfdState.children}
disabled={generateFileDsfdState.disabled}
style={{color:generateFileDsfdState.style.color,
}}
className={`${style.generateFileDsfd}`}
onClick={(eventLoda,) =>whenClickedGenerateFileIvmy(eventLoda,)}></Antd.Menu.Item>
            {/* 生成文件 */}
            </Antd.Menu.ItemGroup>
            {/* 元数据填写 */}
            
            {/* 日志审核 */}
            <Antd.Menu.ItemGroup
title={logAuditHhotState.title}
style={{borderColor:logAuditHhotState.style.borderColor,
borderStyle:logAuditHhotState.style.borderStyle,
borderTopWidth:logAuditHhotState.style.borderTopWidth,
borderLeftWidth:logAuditHhotState.style.borderLeftWidth,
borderRightWidth:logAuditHhotState.style.borderRightWidth,
borderBottomWidth:logAuditHhotState.style.borderBottomWidth,
}}
className={`${style.logAuditHhot}`}
>
            {/* 待审核日志 */}
            <Antd.Menu.Item
key={pendingAuditLogXrufState.key}
icon={pendingAuditLogXrufState.icon}
danger={pendingAuditLogXrufState.danger}
children={pendingAuditLogXrufState.children}
disabled={pendingAuditLogXrufState.disabled}
style={{color:pendingAuditLogXrufState.style.color,
}}
className={`${style.pendingAuditLogXruf}`}
onClick={(eventUlua,) =>whenClickedPendingAuditLogEbyr(eventUlua,)}></Antd.Menu.Item>
            {/* 待审核日志 */}
            
            {/* 已审核日志 */}
            <Antd.Menu.Item
key={verifiedLogsQyamState.key}
icon={verifiedLogsQyamState.icon}
danger={verifiedLogsQyamState.danger}
children={verifiedLogsQyamState.children}
disabled={verifiedLogsQyamState.disabled}
style={{color:verifiedLogsQyamState.style.color,
}}
className={`${style.verifiedLogsQyam}`}
onClick={(eventEgbb,) =>whenClickedReviewedLogsExva(eventEgbb,)}></Antd.Menu.Item>
            {/* 已审核日志 */}
            </Antd.Menu.ItemGroup>
            {/* 日志审核 */}
            </Antd.Menu>
            {/* 导航菜单 */}
            
            {/* 两栏容器 */}
            <div
style={{width:twoColumnContainerFigqState.style.width,
display:twoColumnContainerFigqState.style.display,
flexDirection:twoColumnContainerFigqState.style.flexDirection,
justifyContent:twoColumnContainerFigqState.style.justifyContent,
}}
className={`${style.twoColumnContainerFigq}`}
>
            {/* 容器 */}
            <div
style={{width:containerIghyState.style.width,
height:containerIghyState.style.height,
backgroundColor:containerIghyState.style.backgroundColor,
}}
className={`${style.containerIghy}`}
>
            {/* 容器 */}
            <div
style={{width:containerCtbxState.style.width,
height:containerCtbxState.style.height,
backgroundColor:containerCtbxState.style.backgroundColor,
}}
className={`${style.containerCtbx}`}
>
            {/* 两栏容器 */}
            <div
style={{width:twoColumnContainerNmmyState.style.width,
display:twoColumnContainerNmmyState.style.display,
flexDirection:twoColumnContainerNmmyState.style.flexDirection,
}}
className={`${style.twoColumnContainerNmmy}`}
>
            {/* 容器 */}
            <div
style={{width:containerPrlxState.style.width,
}}
className={`${style.containerPrlx}`}
>
            {/* 两栏容器 */}
            <div
style={{width:twoColumnContainerAkcrState.style.width,
display:twoColumnContainerAkcrState.style.display,
flexDirection:twoColumnContainerAkcrState.style.flexDirection,
}}
className={`${style.twoColumnContainerAkcr}`}
>
            {/* 系统名称 */}
            <div
style={{gap:systemNameLfzqState.style.gap,
color:systemNameLfzqState.style.color,
width:systemNameLfzqState.style.width,
height:systemNameLfzqState.style.height,
display:systemNameLfzqState.style.display,
fontSize:systemNameLfzqState.style.fontSize,
textAlign:systemNameLfzqState.style.textAlign,
alignItems:systemNameLfzqState.style.alignItems,
borderColor:systemNameLfzqState.style.borderColor,
borderStyle:systemNameLfzqState.style.borderStyle,
flexDirection:systemNameLfzqState.style.flexDirection,
justifyContent:systemNameLfzqState.style.justifyContent,
backgroundColor:systemNameLfzqState.style.backgroundColor,
borderBottomWidth:systemNameLfzqState.style.borderBottomWidth,
}}
className={`${style.systemNameLfzq}`}
>
            {/* 系统名称 */}
            <Antd.Typography.Text
code={systemNameLontState.code}
mark={systemNameLontState.mark}
type={systemNameLontState.type}
delete={systemNameLontState.delete}
italic={systemNameLontState.italic}
strong={systemNameLontState.strong}
children={systemNameLontState.children}
copyable={systemNameLontState.copyable}
disabled={systemNameLontState.disabled}
editable={systemNameLontState.editable}
ellipsis={systemNameLontState.ellipsis}
keyboard={systemNameLontState.keyboard}
underline={systemNameLontState.underline}
style={{color:systemNameLontState.style.color,
display:systemNameLontState.style.display,
fontSize:systemNameLontState.style.fontSize,
textAlign:systemNameLontState.style.textAlign,
alignItems:systemNameLontState.style.alignItems,
fontWeight:systemNameLontState.style.fontWeight,
justifyContent:systemNameLontState.style.justifyContent,
}}
className={`${style.systemNameLont}`}
></Antd.Typography.Text>
            {/* 系统名称 */}
            </div>
            {/* 系统名称 */}
            
            {/* 容器 */}
            <div
style={{width:containerLlbbState.style.width,
height:containerLlbbState.style.height,
display:containerLlbbState.style.display,
flexWrap:containerLlbbState.style.flexWrap,
alignItems:containerLlbbState.style.alignItems,
borderColor:containerLlbbState.style.borderColor,
borderStyle:containerLlbbState.style.borderStyle,
flexDirection:containerLlbbState.style.flexDirection,
justifyContent:containerLlbbState.style.justifyContent,
backgroundColor:containerLlbbState.style.backgroundColor,
}}
className={`${style.containerLlbb}`}
>
            {/* 图标 */}
            <AntdIcon.UserOutlined
spin={iconPhcuState.spin}
rotate={iconPhcuState.rotate}
twoToneColor={iconPhcuState.twoToneColor}
style={{color:iconPhcuState.style.color,
width:iconPhcuState.style.width,
height:iconPhcuState.style.height,
fontSize:iconPhcuState.style.fontSize,
marginTop:iconPhcuState.style.marginTop,
fontWeight:iconPhcuState.style.fontWeight,
marginRight:iconPhcuState.style.marginRight,
}}
className={`${style.iconPhcu}`}
></AntdIcon.UserOutlined>
            {/* 图标 */}
            
            {/* 退出按钮 */}
            <Antd.Button
icon={exitButtonTxlsState.icon}
size={exitButtonTxlsState.size}
type={exitButtonTxlsState.type}
ghost={exitButtonTxlsState.ghost}
shape={exitButtonTxlsState.shape}
danger={exitButtonTxlsState.danger}
loading={exitButtonTxlsState.loading}
children={exitButtonTxlsState.children}
disabled={exitButtonTxlsState.disabled}
style={{fontSize:exitButtonTxlsState.style.fontSize,
fontWeight:exitButtonTxlsState.style.fontWeight,
marginRight:exitButtonTxlsState.style.marginRight,
marginBottom:exitButtonTxlsState.style.marginBottom,
backgroundColor:exitButtonTxlsState.style.backgroundColor,
}}
className={`${style.exitButtonTxls}`}
onClick={(eventSexi,) =>clickExitButtonRgcb(eventSexi,)}></Antd.Button>
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
style={{width:pleaseEnterExplanatoryTitleTextRwjyState.style.width,
height:pleaseEnterExplanatoryTitleTextRwjyState.style.height,
display:pleaseEnterExplanatoryTitleTextRwjyState.style.display,
marginTop:pleaseEnterExplanatoryTitleTextRwjyState.style.marginTop,
borderColor:pleaseEnterExplanatoryTitleTextRwjyState.style.borderColor,
borderStyle:pleaseEnterExplanatoryTitleTextRwjyState.style.borderStyle,
paddingLeft:pleaseEnterExplanatoryTitleTextRwjyState.style.paddingLeft,
paddingRight:pleaseEnterExplanatoryTitleTextRwjyState.style.paddingRight,
flexDirection:pleaseEnterExplanatoryTitleTextRwjyState.style.flexDirection,
backgroundColor:pleaseEnterExplanatoryTitleTextRwjyState.style.backgroundColor,
}}
className={`${style.pleaseEnterExplanatoryTitleTextRwjy}`}
>
            {/* 电子文件号 */}
            <div
style={{width:electronicFileNumberNjuyState.style.width,
height:electronicFileNumberNjuyState.style.height,
display:electronicFileNumberNjuyState.style.display,
marginTop:electronicFileNumberNjuyState.style.marginTop,
marginBottom:electronicFileNumberNjuyState.style.marginBottom,
justifyContent:electronicFileNumberNjuyState.style.justifyContent,
borderTopLeftRadius:electronicFileNumberNjuyState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumberNjuyState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumberNjuyState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumberNjuyState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumberNjuy}`}
>
            {/* 电子文件号前缀 */}
            <div
style={{width:electronicFileNumberPrefixSxigState.style.width,
height:electronicFileNumberPrefixSxigState.style.height,
display:electronicFileNumberPrefixSxigState.style.display,
alignItems:electronicFileNumberPrefixSxigState.style.alignItems,
marginRight:electronicFileNumberPrefixSxigState.style.marginRight,
justifyContent:electronicFileNumberPrefixSxigState.style.justifyContent,
backgroundColor:electronicFileNumberPrefixSxigState.style.backgroundColor,
borderTopLeftRadius:electronicFileNumberPrefixSxigState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumberPrefixSxigState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumberPrefixSxigState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumberPrefixSxigState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumberPrefixSxig}`}
>
            {/* 电子文件号 */}
            <Antd.Typography.Text
code={electronicFileNumberDlxhState.code}
mark={electronicFileNumberDlxhState.mark}
type={electronicFileNumberDlxhState.type}
delete={electronicFileNumberDlxhState.delete}
italic={electronicFileNumberDlxhState.italic}
strong={electronicFileNumberDlxhState.strong}
children={electronicFileNumberDlxhState.children}
copyable={electronicFileNumberDlxhState.copyable}
disabled={electronicFileNumberDlxhState.disabled}
editable={electronicFileNumberDlxhState.editable}
ellipsis={electronicFileNumberDlxhState.ellipsis}
keyboard={electronicFileNumberDlxhState.keyboard}
underline={electronicFileNumberDlxhState.underline}
style={{gap:electronicFileNumberDlxhState.style.gap,
color:electronicFileNumberDlxhState.style.color,
width:electronicFileNumberDlxhState.style.width,
height:electronicFileNumberDlxhState.style.height,
display:electronicFileNumberDlxhState.style.display,
fontSize:electronicFileNumberDlxhState.style.fontSize,
textAlign:electronicFileNumberDlxhState.style.textAlign,
alignItems:electronicFileNumberDlxhState.style.alignItems,
marginRight:electronicFileNumberDlxhState.style.marginRight,
flexDirection:electronicFileNumberDlxhState.style.flexDirection,
justifyContent:electronicFileNumberDlxhState.style.justifyContent,
}}
className={`${style.electronicFileNumberDlxh}`}
></Antd.Typography.Text>
            {/* 电子文件号 */}
            
            {/* 请输入电子文件号 */}
            <Antd.Input
size={pleaseEnterTheElectronicFileNumberApcwState.size}
prefix={pleaseEnterTheElectronicFileNumberApcwState.prefix}
bordered={pleaseEnterTheElectronicFileNumberApcwState.bordered}
disabled={pleaseEnterTheElectronicFileNumberApcwState.disabled}
maxLength={pleaseEnterTheElectronicFileNumberApcwState.maxLength}
showCount={pleaseEnterTheElectronicFileNumberApcwState.showCount}
addonAfter={pleaseEnterTheElectronicFileNumberApcwState.addonAfter}
allowClear={pleaseEnterTheElectronicFileNumberApcwState.allowClear}
addonBefore={pleaseEnterTheElectronicFileNumberApcwState.addonBefore}
placeholder={pleaseEnterTheElectronicFileNumberApcwState.placeholder}
defaultValue={pleaseEnterTheElectronicFileNumberApcwState.defaultValue}
style={{width:pleaseEnterTheElectronicFileNumberApcwState.style.width,
height:pleaseEnterTheElectronicFileNumberApcwState.style.height,
}}
className={`${style.pleaseEnterTheElectronicFileNumberApcw}`}
></Antd.Input>
            {/* 请输入电子文件号 */}
            </div>
            {/* 电子文件号前缀 */}
            </div>
            {/* 电子文件号 */}
            
            {/* 电子文件号1 */}
            <div
style={{width:electronicFileNumber1RztvState.style.width,
height:electronicFileNumber1RztvState.style.height,
display:electronicFileNumber1RztvState.style.display,
marginTop:electronicFileNumber1RztvState.style.marginTop,
marginBottom:electronicFileNumber1RztvState.style.marginBottom,
justifyContent:electronicFileNumber1RztvState.style.justifyContent,
borderTopLeftRadius:electronicFileNumber1RztvState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumber1RztvState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumber1RztvState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumber1RztvState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumber1Rztv}`}
>
            {/* 电子文件号前缀 */}
            <div
style={{width:electronicFileNumberPrefixFeyhState.style.width,
height:electronicFileNumberPrefixFeyhState.style.height,
display:electronicFileNumberPrefixFeyhState.style.display,
alignItems:electronicFileNumberPrefixFeyhState.style.alignItems,
marginRight:electronicFileNumberPrefixFeyhState.style.marginRight,
justifyContent:electronicFileNumberPrefixFeyhState.style.justifyContent,
backgroundColor:electronicFileNumberPrefixFeyhState.style.backgroundColor,
borderTopLeftRadius:electronicFileNumberPrefixFeyhState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumberPrefixFeyhState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumberPrefixFeyhState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumberPrefixFeyhState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumberPrefixFeyh}`}
>
            {/* 档案馆名称 */}
            <Antd.Typography.Text
code={archiveNameState.code}
mark={archiveNameState.mark}
type={archiveNameState.type}
delete={archiveNameState.delete}
italic={archiveNameState.italic}
strong={archiveNameState.strong}
children={archiveNameState.children}
copyable={archiveNameState.copyable}
disabled={archiveNameState.disabled}
editable={archiveNameState.editable}
ellipsis={archiveNameState.ellipsis}
keyboard={archiveNameState.keyboard}
underline={archiveNameState.underline}
style={{gap:archiveNameState.style.gap,
color:archiveNameState.style.color,
width:archiveNameState.style.width,
height:archiveNameState.style.height,
display:archiveNameState.style.display,
fontSize:archiveNameState.style.fontSize,
textAlign:archiveNameState.style.textAlign,
alignItems:archiveNameState.style.alignItems,
marginRight:archiveNameState.style.marginRight,
flexDirection:archiveNameState.style.flexDirection,
justifyContent:archiveNameState.style.justifyContent,
}}
className={`${style.archiveName}`}
></Antd.Typography.Text>
            {/* 档案馆名称 */}
            
            {/* 请输入聚合层次 */}
            <Antd.Input
size={pleaseEnterTheAggregationHierarchyBlzpState.size}
prefix={pleaseEnterTheAggregationHierarchyBlzpState.prefix}
bordered={pleaseEnterTheAggregationHierarchyBlzpState.bordered}
disabled={pleaseEnterTheAggregationHierarchyBlzpState.disabled}
maxLength={pleaseEnterTheAggregationHierarchyBlzpState.maxLength}
showCount={pleaseEnterTheAggregationHierarchyBlzpState.showCount}
addonAfter={pleaseEnterTheAggregationHierarchyBlzpState.addonAfter}
allowClear={pleaseEnterTheAggregationHierarchyBlzpState.allowClear}
addonBefore={pleaseEnterTheAggregationHierarchyBlzpState.addonBefore}
placeholder={pleaseEnterTheAggregationHierarchyBlzpState.placeholder}
defaultValue={pleaseEnterTheAggregationHierarchyBlzpState.defaultValue}
style={{width:pleaseEnterTheAggregationHierarchyBlzpState.style.width,
height:pleaseEnterTheAggregationHierarchyBlzpState.style.height,
}}
className={`${style.pleaseEnterTheAggregationHierarchyBlzp}`}
></Antd.Input>
            {/* 请输入聚合层次 */}
            </div>
            {/* 电子文件号前缀 */}
            </div>
            {/* 电子文件号1 */}
            
            {/* 电子文件号12 */}
            <div
style={{width:electronicFileNumber1MzgbState.style.width,
height:electronicFileNumber1MzgbState.style.height,
display:electronicFileNumber1MzgbState.style.display,
marginTop:electronicFileNumber1MzgbState.style.marginTop,
marginBottom:electronicFileNumber1MzgbState.style.marginBottom,
justifyContent:electronicFileNumber1MzgbState.style.justifyContent,
borderTopLeftRadius:electronicFileNumber1MzgbState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumber1MzgbState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumber1MzgbState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumber1MzgbState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumber1Mzgb}`}
>
            {/* 电子文件号前缀 */}
            <div
style={{width:electronicFileNumberPrefixQnwsState.style.width,
height:electronicFileNumberPrefixQnwsState.style.height,
display:electronicFileNumberPrefixQnwsState.style.display,
alignItems:electronicFileNumberPrefixQnwsState.style.alignItems,
marginRight:electronicFileNumberPrefixQnwsState.style.marginRight,
justifyContent:electronicFileNumberPrefixQnwsState.style.justifyContent,
backgroundColor:electronicFileNumberPrefixQnwsState.style.backgroundColor,
borderTopLeftRadius:electronicFileNumberPrefixQnwsState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumberPrefixQnwsState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumberPrefixQnwsState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumberPrefixQnwsState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumberPrefixQnws}`}
>
            {/* 档案馆代码 */}
            <Antd.Typography.Text
code={archiveCodeState.code}
mark={archiveCodeState.mark}
type={archiveCodeState.type}
delete={archiveCodeState.delete}
italic={archiveCodeState.italic}
strong={archiveCodeState.strong}
children={archiveCodeState.children}
copyable={archiveCodeState.copyable}
disabled={archiveCodeState.disabled}
editable={archiveCodeState.editable}
ellipsis={archiveCodeState.ellipsis}
keyboard={archiveCodeState.keyboard}
underline={archiveCodeState.underline}
style={{gap:archiveCodeState.style.gap,
color:archiveCodeState.style.color,
width:archiveCodeState.style.width,
height:archiveCodeState.style.height,
display:archiveCodeState.style.display,
fontSize:archiveCodeState.style.fontSize,
textAlign:archiveCodeState.style.textAlign,
alignItems:archiveCodeState.style.alignItems,
marginRight:archiveCodeState.style.marginRight,
flexDirection:archiveCodeState.style.flexDirection,
justifyContent:archiveCodeState.style.justifyContent,
}}
className={`${style.archiveCode}`}
></Antd.Typography.Text>
            {/* 档案馆代码 */}
            
            {/* 请输入档案馆代码 */}
            <Antd.Input
size={pleaseEnterTheArchiveCodeState.size}
prefix={pleaseEnterTheArchiveCodeState.prefix}
bordered={pleaseEnterTheArchiveCodeState.bordered}
disabled={pleaseEnterTheArchiveCodeState.disabled}
maxLength={pleaseEnterTheArchiveCodeState.maxLength}
showCount={pleaseEnterTheArchiveCodeState.showCount}
addonAfter={pleaseEnterTheArchiveCodeState.addonAfter}
allowClear={pleaseEnterTheArchiveCodeState.allowClear}
addonBefore={pleaseEnterTheArchiveCodeState.addonBefore}
placeholder={pleaseEnterTheArchiveCodeState.placeholder}
defaultValue={pleaseEnterTheArchiveCodeState.defaultValue}
style={{width:pleaseEnterTheArchiveCodeState.style.width,
height:pleaseEnterTheArchiveCodeState.style.height,
}}
className={`${style.pleaseEnterTheArchiveCode}`}
></Antd.Input>
            {/* 请输入档案馆代码 */}
            </div>
            {/* 电子文件号前缀 */}
            </div>
            {/* 电子文件号12 */}
            
            {/* 电子文件号11 */}
            <div
style={{width:electronicFileNumber1HseiState.style.width,
height:electronicFileNumber1HseiState.style.height,
display:electronicFileNumber1HseiState.style.display,
marginTop:electronicFileNumber1HseiState.style.marginTop,
marginBottom:electronicFileNumber1HseiState.style.marginBottom,
justifyContent:electronicFileNumber1HseiState.style.justifyContent,
borderTopLeftRadius:electronicFileNumber1HseiState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumber1HseiState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumber1HseiState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumber1HseiState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumber1Hsei}`}
>
            {/* 电子文件号前缀 */}
            <div
style={{width:electronicFileNumberPrefixBdjqState.style.width,
height:electronicFileNumberPrefixBdjqState.style.height,
display:electronicFileNumberPrefixBdjqState.style.display,
alignItems:electronicFileNumberPrefixBdjqState.style.alignItems,
marginRight:electronicFileNumberPrefixBdjqState.style.marginRight,
justifyContent:electronicFileNumberPrefixBdjqState.style.justifyContent,
backgroundColor:electronicFileNumberPrefixBdjqState.style.backgroundColor,
borderTopLeftRadius:electronicFileNumberPrefixBdjqState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumberPrefixBdjqState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumberPrefixBdjqState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumberPrefixBdjqState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumberPrefixBdjq}`}
>
            {/* 全宗名称 */}
            <Antd.Typography.Text
code={wholeSectNameState.code}
mark={wholeSectNameState.mark}
type={wholeSectNameState.type}
delete={wholeSectNameState.delete}
italic={wholeSectNameState.italic}
strong={wholeSectNameState.strong}
children={wholeSectNameState.children}
copyable={wholeSectNameState.copyable}
disabled={wholeSectNameState.disabled}
editable={wholeSectNameState.editable}
ellipsis={wholeSectNameState.ellipsis}
keyboard={wholeSectNameState.keyboard}
underline={wholeSectNameState.underline}
style={{gap:wholeSectNameState.style.gap,
color:wholeSectNameState.style.color,
width:wholeSectNameState.style.width,
height:wholeSectNameState.style.height,
display:wholeSectNameState.style.display,
fontSize:wholeSectNameState.style.fontSize,
textAlign:wholeSectNameState.style.textAlign,
alignItems:wholeSectNameState.style.alignItems,
marginRight:wholeSectNameState.style.marginRight,
flexDirection:wholeSectNameState.style.flexDirection,
justifyContent:wholeSectNameState.style.justifyContent,
}}
className={`${style.wholeSectName}`}
></Antd.Typography.Text>
            {/* 全宗名称 */}
            
            {/* 请输入全宗名称 */}
            <Antd.Input
size={pleaseEnterTheFullNameOfTheSectState.size}
prefix={pleaseEnterTheFullNameOfTheSectState.prefix}
bordered={pleaseEnterTheFullNameOfTheSectState.bordered}
disabled={pleaseEnterTheFullNameOfTheSectState.disabled}
maxLength={pleaseEnterTheFullNameOfTheSectState.maxLength}
showCount={pleaseEnterTheFullNameOfTheSectState.showCount}
addonAfter={pleaseEnterTheFullNameOfTheSectState.addonAfter}
allowClear={pleaseEnterTheFullNameOfTheSectState.allowClear}
addonBefore={pleaseEnterTheFullNameOfTheSectState.addonBefore}
placeholder={pleaseEnterTheFullNameOfTheSectState.placeholder}
defaultValue={pleaseEnterTheFullNameOfTheSectState.defaultValue}
style={{width:pleaseEnterTheFullNameOfTheSectState.style.width,
height:pleaseEnterTheFullNameOfTheSectState.style.height,
}}
className={`${style.pleaseEnterTheFullNameOfTheSect}`}
></Antd.Input>
            {/* 请输入全宗名称 */}
            </div>
            {/* 电子文件号前缀 */}
            </div>
            {/* 电子文件号11 */}
            
            {/* 电子文件号111 */}
            <div
style={{width:electronicFileNumber11State.style.width,
height:electronicFileNumber11State.style.height,
display:electronicFileNumber11State.style.display,
marginTop:electronicFileNumber11State.style.marginTop,
marginBottom:electronicFileNumber11State.style.marginBottom,
justifyContent:electronicFileNumber11State.style.justifyContent,
borderTopLeftRadius:electronicFileNumber11State.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumber11State.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumber11State.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumber11State.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumber11}`}
>
            {/* 电子文件号前缀 */}
            <div
style={{width:electronicFileNumberPrefixOsofState.style.width,
height:electronicFileNumberPrefixOsofState.style.height,
display:electronicFileNumberPrefixOsofState.style.display,
alignItems:electronicFileNumberPrefixOsofState.style.alignItems,
marginRight:electronicFileNumberPrefixOsofState.style.marginRight,
justifyContent:electronicFileNumberPrefixOsofState.style.justifyContent,
backgroundColor:electronicFileNumberPrefixOsofState.style.backgroundColor,
borderTopLeftRadius:electronicFileNumberPrefixOsofState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumberPrefixOsofState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumberPrefixOsofState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumberPrefixOsofState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumberPrefixOsof}`}
>
            {/* 立档单位名称 */}
            <Antd.Typography.Text
code={nameOfFilingUnitState.code}
mark={nameOfFilingUnitState.mark}
type={nameOfFilingUnitState.type}
delete={nameOfFilingUnitState.delete}
italic={nameOfFilingUnitState.italic}
strong={nameOfFilingUnitState.strong}
children={nameOfFilingUnitState.children}
copyable={nameOfFilingUnitState.copyable}
disabled={nameOfFilingUnitState.disabled}
editable={nameOfFilingUnitState.editable}
ellipsis={nameOfFilingUnitState.ellipsis}
keyboard={nameOfFilingUnitState.keyboard}
underline={nameOfFilingUnitState.underline}
style={{gap:nameOfFilingUnitState.style.gap,
color:nameOfFilingUnitState.style.color,
width:nameOfFilingUnitState.style.width,
height:nameOfFilingUnitState.style.height,
display:nameOfFilingUnitState.style.display,
fontSize:nameOfFilingUnitState.style.fontSize,
textAlign:nameOfFilingUnitState.style.textAlign,
alignItems:nameOfFilingUnitState.style.alignItems,
marginRight:nameOfFilingUnitState.style.marginRight,
flexDirection:nameOfFilingUnitState.style.flexDirection,
justifyContent:nameOfFilingUnitState.style.justifyContent,
}}
className={`${style.nameOfFilingUnit}`}
></Antd.Typography.Text>
            {/* 立档单位名称 */}
            
            {/* 请输入立档单位名称 */}
            <Antd.Input
size={pleaseEnterTheNameOfTheFilingUnitState.size}
prefix={pleaseEnterTheNameOfTheFilingUnitState.prefix}
bordered={pleaseEnterTheNameOfTheFilingUnitState.bordered}
disabled={pleaseEnterTheNameOfTheFilingUnitState.disabled}
maxLength={pleaseEnterTheNameOfTheFilingUnitState.maxLength}
showCount={pleaseEnterTheNameOfTheFilingUnitState.showCount}
addonAfter={pleaseEnterTheNameOfTheFilingUnitState.addonAfter}
allowClear={pleaseEnterTheNameOfTheFilingUnitState.allowClear}
addonBefore={pleaseEnterTheNameOfTheFilingUnitState.addonBefore}
placeholder={pleaseEnterTheNameOfTheFilingUnitState.placeholder}
defaultValue={pleaseEnterTheNameOfTheFilingUnitState.defaultValue}
style={{width:pleaseEnterTheNameOfTheFilingUnitState.style.width,
height:pleaseEnterTheNameOfTheFilingUnitState.style.height,
}}
className={`${style.pleaseEnterTheNameOfTheFilingUnit}`}
></Antd.Input>
            {/* 请输入立档单位名称 */}
            </div>
            {/* 电子文件号前缀 */}
            </div>
            {/* 电子文件号111 */}
            
            {/* 按钮 */}
            <Antd.Button
size={buttonMcrbState.size}
type={buttonMcrbState.type}
ghost={buttonMcrbState.ghost}
shape={buttonMcrbState.shape}
danger={buttonMcrbState.danger}
children={buttonMcrbState.children}
disabled={buttonMcrbState.disabled}
style={{width:buttonMcrbState.style.width,
height:buttonMcrbState.style.height,
fontSize:buttonMcrbState.style.fontSize,
marginTop:buttonMcrbState.style.marginTop,
fontWeight:buttonMcrbState.style.fontWeight,
marginLeft:buttonMcrbState.style.marginLeft,
marginRight:buttonMcrbState.style.marginRight,
borderTopLeftRadius:buttonMcrbState.style.borderTopLeftRadius,
borderTopRightRadius:buttonMcrbState.style.borderTopRightRadius,
borderBottomLeftRadius:buttonMcrbState.style.borderBottomLeftRadius,
borderBottomRightRadius:buttonMcrbState.style.borderBottomRightRadius,
}}
className={`${style.buttonMcrb}`}
></Antd.Button>
            {/* 按钮 */}
            </div>
            {/* 请输入说明题名文字 */}
            </div>
            {/* 两栏容器 */}
            </div>
            {/* 容器 */}
            </>}
export default SourceOfMetadataDjrr
export { SourceOfMetadataDjrr }