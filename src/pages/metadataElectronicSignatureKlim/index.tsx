import style from './index.module.scss'
import { useState } from 'react'
import * as Antd from '@/components/antd'
import { routes } from '@/router/index'
import { getParentInfoList } from '@/utils'
import { useNavigate } from 'react-router-dom'
import * as AntdIcon from '@ant-design/icons'
// 元数据电子签名
              const MetadataElectronicSignatureKlim = () => {
const navigate = useNavigate()
// 点击时-档号配置
          const clickToConfigureFileNumberCssw = (eventAskm,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageDano").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据内容描述
          const whenClickedMetadataContentDescriptionGoul = (eventQbmq,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "page401").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-聚合层次
          const clickOnAggregateHierarchyChws = (eventSbxt,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageVomd").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据形式特征
          const whenClickedMetadataFormatFeaturesGcjc = (eventInlc,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageWcoq").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据存储位置
          const whenClickedMetadataStorageLocationVbgz = (eventGhjp,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageDbgh").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据电子签名
          const whenClickedMetadataElectronicSignatureRkan = (eventHnte,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageWsbf").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据来源
          const whenClickedMetadataSourceWhkf = (eventAyvx,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageGafh").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-档号
          const clickTimeFileNumberRnyf = (eventLcpf,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageGafh").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-生成文件
          const whenClickedGenerateFileTxns = (eventLaoc,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageYfhi").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-待审核日志
          const whenClickedPendingAuditLogTsdz = (eventZtxl,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageZuvc").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-已审核日志
          const whenClickedReviewedLogsOwmv = (eventCasl,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageStsm").slice(1).map(item => item.path).join('/')}`)
}
// 点击-退出按钮
          const clickExitButtonKnfq = (eventGpgz,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "defaultPageFhue").slice(1).map(item => item.path).join('/')}`)
}

              // 容器 开始属性
              const [containerNctyState, setcontainerNctyState] = useState({style:{width:"100vw",
height:"100vh",
display:"flex",
},
})
              // 容器 结束属性
              
              // 导航菜单 开始属性
              const [navigationMenuJvnzState, setnavigationMenuJvnzState] = useState({mode:"vertical",
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
              const [containerPyllState, setcontainerPyllState] = useState({style:{width:"100%",
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
              const [pictureVqpmState, setpictureVqpmState] = useState({alt:undefined,
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
              const [administratorHomepageAgkmState, setadministratorHomepageAgkmState] = useState({code:false,
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
              const [fileNumberConfigurationKmpkState, setfileNumberConfigurationKmpkState] = useState({key:undefined,
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
              const [fillInMetadataBixpState, setfillInMetadataBixpState] = useState({title:"元数据填写",
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
              const [descriptionOfMetadataContentKecrState, setdescriptionOfMetadataContentKecrState] = useState({key:undefined,
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
              const [aggregationHierarchyTjuvState, setaggregationHierarchyTjuvState] = useState({key:undefined,
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
              const [characteristicsOfMetadataFormatKvxqState, setcharacteristicsOfMetadataFormatKvxqState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据形式特征",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 元数据形式特征 结束属性
              
              // 元数据存储位置 开始属性
              const [metadataStorageLocationQhivState, setmetadataStorageLocationQhivState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据存储位置",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 元数据存储位置 结束属性
              
              // 元数据电子签名 开始属性
              const [metadataElectronicSignatureUcoqState, setmetadataElectronicSignatureUcoqState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据电子签名",
disabled:false,
style:{color:"#f0f8ff",
backgroundColor:"#6d8fc0",
},
})
              // 元数据电子签名 结束属性
              
              // 元数据来源 开始属性
              const [sourceOfMetadataWuolState, setsourceOfMetadataWuolState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据来源",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 元数据来源 结束属性
              
              // 档号 开始属性
              const [referenceHeqhState, setreferenceHeqhState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"档号",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 档号 结束属性
              
              // 生成文件 开始属性
              const [generateFileAlvoState, setgenerateFileAlvoState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"生成文件",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 生成文件 结束属性
              
              // 日志审核 开始属性
              const [logAuditInxxState, setlogAuditInxxState] = useState({title:"日志审核",
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
              const [pendingAuditLogIsomState, setpendingAuditLogIsomState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"待审核日志",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 待审核日志 结束属性
              
              // 已审核日志 开始属性
              const [verifiedLogsNkoyState, setverifiedLogsNkoyState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"已审核日志",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 已审核日志 结束属性
              
              // 两栏容器 开始属性
              const [twoColumnContainerFbtpState, settwoColumnContainerFbtpState] = useState({style:{width:"86%",
display:"flex",
flexDirection:"column",
justifyContent:"center",
},
})
              // 两栏容器 结束属性
              
              // 容器 开始属性
              const [containerBbkjState, setcontainerBbkjState] = useState({style:{width:"100%",
height:"9%",
backgroundColor:"#f0f8ff",
},
})
              // 容器 结束属性
              
              // 容器 开始属性
              const [containerFlsgState, setcontainerFlsgState] = useState({style:{width:"100%",
height:"9%",
backgroundColor:"#ffffff",
},
})
              // 容器 结束属性
              
              // 两栏容器 开始属性
              const [twoColumnContainerCsroState, settwoColumnContainerCsroState] = useState({style:{width:"100%",
display:"flex",
flexDirection:"column",
},
})
              // 两栏容器 结束属性
              
              // 容器 开始属性
              const [containerRtwrState, setcontainerRtwrState] = useState({style:{width:"100%",
},
})
              // 容器 结束属性
              
              // 两栏容器 开始属性
              const [twoColumnContainerMmglState, settwoColumnContainerMmglState] = useState({style:{width:"100%",
display:"flex",
flexDirection:"column",
},
})
              // 两栏容器 结束属性
              
              // 系统名称 开始属性
              const [systemNameXommState, setsystemNameXommState] = useState({style:{gap:"14px",
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
              const [systemNameEubcState, setsystemNameEubcState] = useState({code:false,
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
              const [containerEtjjState, setcontainerEtjjState] = useState({style:{width:"100%",
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
              const [iconDkluState, seticonDkluState] = useState({spin:false,
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
              const [exitButtonTadrState, setexitButtonTadrState] = useState({icon:undefined,
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
              const [pleaseEnterExplanatoryTitleTextWsnaState, setpleaseEnterExplanatoryTitleTextWsnaState] = useState({style:{width:"100%",
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
              const [electronicFileNumberKklpState, setelectronicFileNumberKklpState] = useState({style:{width:"100%",
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
              const [electronicFileNumberPrefixEgjiState, setelectronicFileNumberPrefixEgjiState] = useState({style:{width:"49%",
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
              const [electronicFileNumberTqpiState, setelectronicFileNumberTqpiState] = useState({code:false,
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
              const [pleaseEnterTheElectronicFileNumberVjirState, setpleaseEnterTheElectronicFileNumberVjirState] = useState({size:"middle",
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
              const [electronicFileNumber1EwanState, setelectronicFileNumber1EwanState] = useState({style:{width:"100%",
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
              const [electronicFileNumberPrefixFiplState, setelectronicFileNumberPrefixFiplState] = useState({style:{width:"49%",
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
              
              // 签名规则 开始属性
              const [signatureRulesState, setsignatureRulesState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"签名规则",
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
              // 签名规则 结束属性
              
              // 请输入签名规则 开始属性
              const [pleaseEnterTheSignatureRuleState, setpleaseEnterTheSignatureRuleState] = useState({size:"middle",
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"请输入签名规则",
defaultValue:undefined,
style:{width:"60%",
height:"60px",
},
})
              // 请输入签名规则 结束属性
              
              // 电子文件号13 开始属性
              const [electronicFileNumber1AdzlState, setelectronicFileNumber1AdzlState] = useState({style:{width:"100%",
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
              // 电子文件号13 结束属性
              
              // 电子文件号前缀 开始属性
              const [electronicFileNumberPrefixJxpyState, setelectronicFileNumberPrefixJxpyState] = useState({style:{width:"49%",
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
              
              // 签名时间 开始属性
              const [signatureTimeState, setsignatureTimeState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"签名时间",
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
              // 签名时间 结束属性
              
              // 请输入签名时间 开始属性
              const [pleaseEnterTheSignatureTimeState, setpleaseEnterTheSignatureTimeState] = useState({size:"middle",
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"请输入签名时间",
defaultValue:undefined,
style:{width:"60%",
height:"60px",
},
})
              // 请输入签名时间 结束属性
              
              // 电子文件号12 开始属性
              const [electronicFileNumber1DtwwState, setelectronicFileNumber1DtwwState] = useState({style:{width:"100%",
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
              const [electronicFileNumberPrefixHnzeState, setelectronicFileNumberPrefixHnzeState] = useState({style:{width:"49%",
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
              
              // 签名者 开始属性
              const [signatoryState, setsignatoryState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"签名者",
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
              // 签名者 结束属性
              
              // 请输入签名者 开始属性
              const [pleaseEnterTheSignerState, setpleaseEnterTheSignerState] = useState({size:"middle",
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"请输入签名者",
defaultValue:undefined,
style:{width:"60%",
height:"60px",
},
})
              // 请输入签名者 结束属性
              
              // 电子文件号11 开始属性
              const [electronicFileNumber1WomqState, setelectronicFileNumber1WomqState] = useState({style:{width:"100%",
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
              const [electronicFileNumberPrefixDbuaState, setelectronicFileNumberPrefixDbuaState] = useState({style:{width:"49%",
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
              
              // 签名 开始属性
              const [autographState, setautographState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"签名",
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
              // 签名 结束属性
              
              // 请输入签名 开始属性
              const [pleaseEnterYourSignatureState, setpleaseEnterYourSignatureState] = useState({size:"middle",
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"请输入签名",
defaultValue:undefined,
style:{width:"60%",
height:"60px",
},
})
              // 请输入签名 结束属性
              
              // 按钮 开始属性
              const [buttonKbnnState, setbuttonKbnnState] = useState({size:"middle",
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
style={{width:containerNctyState.style.width,
height:containerNctyState.style.height,
display:containerNctyState.style.display,
}}
className={`${style.containerNcty}`}
>
            {/* 导航菜单 */}
            <Antd.Menu
mode={navigationMenuJvnzState.mode}
expandIcon={navigationMenuJvnzState.expandIcon}
style={{width:navigationMenuJvnzState.style.width,
height:navigationMenuJvnzState.style.height,
backgroundColor:navigationMenuJvnzState.style.backgroundColor,
backgroundImage:navigationMenuJvnzState.style.backgroundImage,
backgroundRepeat:navigationMenuJvnzState.style.backgroundRepeat,
borderTopRightRadius:navigationMenuJvnzState.style.borderTopRightRadius,
borderBottomRightRadius:navigationMenuJvnzState.style.borderBottomRightRadius,
}}
className={`${style.navigationMenuJvnz}`}
>
            {/* 容器 */}
            <div
style={{width:containerPyllState.style.width,
height:containerPyllState.style.height,
display:containerPyllState.style.display,
flexWrap:containerPyllState.style.flexWrap,
alignItems:containerPyllState.style.alignItems,
paddingTop:containerPyllState.style.paddingTop,
borderColor:containerPyllState.style.borderColor,
borderStyle:containerPyllState.style.borderStyle,
flexDirection:containerPyllState.style.flexDirection,
justifyContent:containerPyllState.style.justifyContent,
borderBottomWidth:containerPyllState.style.borderBottomWidth,
}}
className={`${style.containerPyll}`}
>
            {/* 图片 */}
            <Antd.Image
alt={pictureVqpmState.alt}
src={pictureVqpmState.src}
width={pictureVqpmState.width}
height={pictureVqpmState.height}
preview={pictureVqpmState.preview}
fallback={pictureVqpmState.fallback}
placeholder={pictureVqpmState.placeholder}
style={{width:pictureVqpmState.style.width,
height:pictureVqpmState.style.height,
marginTop:pictureVqpmState.style.marginTop,
marginLeft:pictureVqpmState.style.marginLeft,
}}
className={`${style.pictureVqpm}`}
></Antd.Image>
            {/* 图片 */}
            
            {/* 管理员首页 */}
            <Antd.Typography.Text
code={administratorHomepageAgkmState.code}
mark={administratorHomepageAgkmState.mark}
type={administratorHomepageAgkmState.type}
delete={administratorHomepageAgkmState.delete}
italic={administratorHomepageAgkmState.italic}
strong={administratorHomepageAgkmState.strong}
children={administratorHomepageAgkmState.children}
copyable={administratorHomepageAgkmState.copyable}
disabled={administratorHomepageAgkmState.disabled}
editable={administratorHomepageAgkmState.editable}
ellipsis={administratorHomepageAgkmState.ellipsis}
keyboard={administratorHomepageAgkmState.keyboard}
underline={administratorHomepageAgkmState.underline}
style={{color:administratorHomepageAgkmState.style.color,
width:administratorHomepageAgkmState.style.width,
height:administratorHomepageAgkmState.style.height,
fontSize:administratorHomepageAgkmState.style.fontSize,
textAlign:administratorHomepageAgkmState.style.textAlign,
fontWeight:administratorHomepageAgkmState.style.fontWeight,
marginLeft:administratorHomepageAgkmState.style.marginLeft,
}}
className={`${style.administratorHomepageAgkm}`}
></Antd.Typography.Text>
            {/* 管理员首页 */}
            </div>
            {/* 容器 */}
            
            {/* 档号配置 */}
            <Antd.Menu.Item
key={fileNumberConfigurationKmpkState.key}
icon={fileNumberConfigurationKmpkState.icon}
danger={fileNumberConfigurationKmpkState.danger}
children={fileNumberConfigurationKmpkState.children}
disabled={fileNumberConfigurationKmpkState.disabled}
style={{color:fileNumberConfigurationKmpkState.style.color,
width:fileNumberConfigurationKmpkState.style.width,
marginLeft:fileNumberConfigurationKmpkState.style.marginLeft,
borderColor:fileNumberConfigurationKmpkState.style.borderColor,
borderStyle:fileNumberConfigurationKmpkState.style.borderStyle,
marginRight:fileNumberConfigurationKmpkState.style.marginRight,
backgroundColor:fileNumberConfigurationKmpkState.style.backgroundColor,
borderBottomWidth:fileNumberConfigurationKmpkState.style.borderBottomWidth,
borderTopLeftRadius:fileNumberConfigurationKmpkState.style.borderTopLeftRadius,
borderTopRightRadius:fileNumberConfigurationKmpkState.style.borderTopRightRadius,
borderBottomLeftRadius:fileNumberConfigurationKmpkState.style.borderBottomLeftRadius,
borderBottomRightRadius:fileNumberConfigurationKmpkState.style.borderBottomRightRadius,
}}
className={`${style.fileNumberConfigurationKmpk}`}
onClick={(eventAskm,) =>clickToConfigureFileNumberCssw(eventAskm,)}></Antd.Menu.Item>
            {/* 档号配置 */}
            
            {/* 元数据填写 */}
            <Antd.Menu.ItemGroup
title={fillInMetadataBixpState.title}
style={{color:fillInMetadataBixpState.style.color,
borderColor:fillInMetadataBixpState.style.borderColor,
borderStyle:fillInMetadataBixpState.style.borderStyle,
borderTopWidth:fillInMetadataBixpState.style.borderTopWidth,
borderLeftWidth:fillInMetadataBixpState.style.borderLeftWidth,
borderRightWidth:fillInMetadataBixpState.style.borderRightWidth,
borderBottomWidth:fillInMetadataBixpState.style.borderBottomWidth,
}}
className={`${style.fillInMetadataBixp}`}
>
            {/* 元数据内容描述 */}
            <Antd.Menu.Item
key={descriptionOfMetadataContentKecrState.key}
icon={descriptionOfMetadataContentKecrState.icon}
danger={descriptionOfMetadataContentKecrState.danger}
children={descriptionOfMetadataContentKecrState.children}
disabled={descriptionOfMetadataContentKecrState.disabled}
style={{color:descriptionOfMetadataContentKecrState.style.color,
backgroundColor:descriptionOfMetadataContentKecrState.style.backgroundColor,
}}
className={`${style.descriptionOfMetadataContentKecr}`}
onClick={(eventQbmq,) =>whenClickedMetadataContentDescriptionGoul(eventQbmq,)}></Antd.Menu.Item>
            {/* 元数据内容描述 */}
            
            {/* 聚合层次 */}
            <Antd.Menu.Item
key={aggregationHierarchyTjuvState.key}
icon={aggregationHierarchyTjuvState.icon}
danger={aggregationHierarchyTjuvState.danger}
children={aggregationHierarchyTjuvState.children}
disabled={aggregationHierarchyTjuvState.disabled}
style={{color:aggregationHierarchyTjuvState.style.color,
backgroundColor:aggregationHierarchyTjuvState.style.backgroundColor,
}}
className={`${style.aggregationHierarchyTjuv}`}
onClick={(eventSbxt,) =>clickOnAggregateHierarchyChws(eventSbxt,)}></Antd.Menu.Item>
            {/* 聚合层次 */}
            
            {/* 元数据形式特征 */}
            <Antd.Menu.Item
key={characteristicsOfMetadataFormatKvxqState.key}
icon={characteristicsOfMetadataFormatKvxqState.icon}
danger={characteristicsOfMetadataFormatKvxqState.danger}
children={characteristicsOfMetadataFormatKvxqState.children}
disabled={characteristicsOfMetadataFormatKvxqState.disabled}
style={{color:characteristicsOfMetadataFormatKvxqState.style.color,
}}
className={`${style.characteristicsOfMetadataFormatKvxq}`}
onClick={(eventInlc,) =>whenClickedMetadataFormatFeaturesGcjc(eventInlc,)}></Antd.Menu.Item>
            {/* 元数据形式特征 */}
            
            {/* 元数据存储位置 */}
            <Antd.Menu.Item
key={metadataStorageLocationQhivState.key}
icon={metadataStorageLocationQhivState.icon}
danger={metadataStorageLocationQhivState.danger}
children={metadataStorageLocationQhivState.children}
disabled={metadataStorageLocationQhivState.disabled}
style={{color:metadataStorageLocationQhivState.style.color,
}}
className={`${style.metadataStorageLocationQhiv}`}
onClick={(eventGhjp,) =>whenClickedMetadataStorageLocationVbgz(eventGhjp,)}></Antd.Menu.Item>
            {/* 元数据存储位置 */}
            
            {/* 元数据电子签名 */}
            <Antd.Menu.Item
key={metadataElectronicSignatureUcoqState.key}
icon={metadataElectronicSignatureUcoqState.icon}
danger={metadataElectronicSignatureUcoqState.danger}
children={metadataElectronicSignatureUcoqState.children}
disabled={metadataElectronicSignatureUcoqState.disabled}
style={{color:metadataElectronicSignatureUcoqState.style.color,
backgroundColor:metadataElectronicSignatureUcoqState.style.backgroundColor,
}}
className={`${style.metadataElectronicSignatureUcoq}`}
onClick={(eventHnte,) =>whenClickedMetadataElectronicSignatureRkan(eventHnte,)}></Antd.Menu.Item>
            {/* 元数据电子签名 */}
            
            {/* 元数据来源 */}
            <Antd.Menu.Item
key={sourceOfMetadataWuolState.key}
icon={sourceOfMetadataWuolState.icon}
danger={sourceOfMetadataWuolState.danger}
children={sourceOfMetadataWuolState.children}
disabled={sourceOfMetadataWuolState.disabled}
style={{color:sourceOfMetadataWuolState.style.color,
}}
className={`${style.sourceOfMetadataWuol}`}
onClick={(eventAyvx,) =>whenClickedMetadataSourceWhkf(eventAyvx,)}></Antd.Menu.Item>
            {/* 元数据来源 */}
            
            {/* 档号 */}
            <Antd.Menu.Item
key={referenceHeqhState.key}
icon={referenceHeqhState.icon}
danger={referenceHeqhState.danger}
children={referenceHeqhState.children}
disabled={referenceHeqhState.disabled}
style={{color:referenceHeqhState.style.color,
}}
className={`${style.referenceHeqh}`}
onClick={(eventLcpf,) =>clickTimeFileNumberRnyf(eventLcpf,)}></Antd.Menu.Item>
            {/* 档号 */}
            
            {/* 生成文件 */}
            <Antd.Menu.Item
key={generateFileAlvoState.key}
icon={generateFileAlvoState.icon}
danger={generateFileAlvoState.danger}
children={generateFileAlvoState.children}
disabled={generateFileAlvoState.disabled}
style={{color:generateFileAlvoState.style.color,
}}
className={`${style.generateFileAlvo}`}
onClick={(eventLaoc,) =>whenClickedGenerateFileTxns(eventLaoc,)}></Antd.Menu.Item>
            {/* 生成文件 */}
            </Antd.Menu.ItemGroup>
            {/* 元数据填写 */}
            
            {/* 日志审核 */}
            <Antd.Menu.ItemGroup
title={logAuditInxxState.title}
style={{borderColor:logAuditInxxState.style.borderColor,
borderStyle:logAuditInxxState.style.borderStyle,
borderTopWidth:logAuditInxxState.style.borderTopWidth,
borderLeftWidth:logAuditInxxState.style.borderLeftWidth,
borderRightWidth:logAuditInxxState.style.borderRightWidth,
borderBottomWidth:logAuditInxxState.style.borderBottomWidth,
}}
className={`${style.logAuditInxx}`}
>
            {/* 待审核日志 */}
            <Antd.Menu.Item
key={pendingAuditLogIsomState.key}
icon={pendingAuditLogIsomState.icon}
danger={pendingAuditLogIsomState.danger}
children={pendingAuditLogIsomState.children}
disabled={pendingAuditLogIsomState.disabled}
style={{color:pendingAuditLogIsomState.style.color,
}}
className={`${style.pendingAuditLogIsom}`}
onClick={(eventZtxl,) =>whenClickedPendingAuditLogTsdz(eventZtxl,)}></Antd.Menu.Item>
            {/* 待审核日志 */}
            
            {/* 已审核日志 */}
            <Antd.Menu.Item
key={verifiedLogsNkoyState.key}
icon={verifiedLogsNkoyState.icon}
danger={verifiedLogsNkoyState.danger}
children={verifiedLogsNkoyState.children}
disabled={verifiedLogsNkoyState.disabled}
style={{color:verifiedLogsNkoyState.style.color,
}}
className={`${style.verifiedLogsNkoy}`}
onClick={(eventCasl,) =>whenClickedReviewedLogsOwmv(eventCasl,)}></Antd.Menu.Item>
            {/* 已审核日志 */}
            </Antd.Menu.ItemGroup>
            {/* 日志审核 */}
            </Antd.Menu>
            {/* 导航菜单 */}
            
            {/* 两栏容器 */}
            <div
style={{width:twoColumnContainerFbtpState.style.width,
display:twoColumnContainerFbtpState.style.display,
flexDirection:twoColumnContainerFbtpState.style.flexDirection,
justifyContent:twoColumnContainerFbtpState.style.justifyContent,
}}
className={`${style.twoColumnContainerFbtp}`}
>
            {/* 容器 */}
            <div
style={{width:containerBbkjState.style.width,
height:containerBbkjState.style.height,
backgroundColor:containerBbkjState.style.backgroundColor,
}}
className={`${style.containerBbkj}`}
>
            {/* 容器 */}
            <div
style={{width:containerFlsgState.style.width,
height:containerFlsgState.style.height,
backgroundColor:containerFlsgState.style.backgroundColor,
}}
className={`${style.containerFlsg}`}
>
            {/* 两栏容器 */}
            <div
style={{width:twoColumnContainerCsroState.style.width,
display:twoColumnContainerCsroState.style.display,
flexDirection:twoColumnContainerCsroState.style.flexDirection,
}}
className={`${style.twoColumnContainerCsro}`}
>
            {/* 容器 */}
            <div
style={{width:containerRtwrState.style.width,
}}
className={`${style.containerRtwr}`}
>
            {/* 两栏容器 */}
            <div
style={{width:twoColumnContainerMmglState.style.width,
display:twoColumnContainerMmglState.style.display,
flexDirection:twoColumnContainerMmglState.style.flexDirection,
}}
className={`${style.twoColumnContainerMmgl}`}
>
            {/* 系统名称 */}
            <div
style={{gap:systemNameXommState.style.gap,
color:systemNameXommState.style.color,
width:systemNameXommState.style.width,
height:systemNameXommState.style.height,
display:systemNameXommState.style.display,
fontSize:systemNameXommState.style.fontSize,
textAlign:systemNameXommState.style.textAlign,
alignItems:systemNameXommState.style.alignItems,
borderColor:systemNameXommState.style.borderColor,
borderStyle:systemNameXommState.style.borderStyle,
flexDirection:systemNameXommState.style.flexDirection,
justifyContent:systemNameXommState.style.justifyContent,
backgroundColor:systemNameXommState.style.backgroundColor,
borderBottomWidth:systemNameXommState.style.borderBottomWidth,
}}
className={`${style.systemNameXomm}`}
>
            {/* 系统名称 */}
            <Antd.Typography.Text
code={systemNameEubcState.code}
mark={systemNameEubcState.mark}
type={systemNameEubcState.type}
delete={systemNameEubcState.delete}
italic={systemNameEubcState.italic}
strong={systemNameEubcState.strong}
children={systemNameEubcState.children}
copyable={systemNameEubcState.copyable}
disabled={systemNameEubcState.disabled}
editable={systemNameEubcState.editable}
ellipsis={systemNameEubcState.ellipsis}
keyboard={systemNameEubcState.keyboard}
underline={systemNameEubcState.underline}
style={{color:systemNameEubcState.style.color,
display:systemNameEubcState.style.display,
fontSize:systemNameEubcState.style.fontSize,
textAlign:systemNameEubcState.style.textAlign,
alignItems:systemNameEubcState.style.alignItems,
fontWeight:systemNameEubcState.style.fontWeight,
justifyContent:systemNameEubcState.style.justifyContent,
}}
className={`${style.systemNameEubc}`}
></Antd.Typography.Text>
            {/* 系统名称 */}
            </div>
            {/* 系统名称 */}
            
            {/* 容器 */}
            <div
style={{width:containerEtjjState.style.width,
height:containerEtjjState.style.height,
display:containerEtjjState.style.display,
flexWrap:containerEtjjState.style.flexWrap,
alignItems:containerEtjjState.style.alignItems,
borderColor:containerEtjjState.style.borderColor,
borderStyle:containerEtjjState.style.borderStyle,
flexDirection:containerEtjjState.style.flexDirection,
justifyContent:containerEtjjState.style.justifyContent,
backgroundColor:containerEtjjState.style.backgroundColor,
}}
className={`${style.containerEtjj}`}
>
            {/* 图标 */}
            <AntdIcon.UserOutlined
spin={iconDkluState.spin}
rotate={iconDkluState.rotate}
twoToneColor={iconDkluState.twoToneColor}
style={{color:iconDkluState.style.color,
width:iconDkluState.style.width,
height:iconDkluState.style.height,
fontSize:iconDkluState.style.fontSize,
marginTop:iconDkluState.style.marginTop,
fontWeight:iconDkluState.style.fontWeight,
marginRight:iconDkluState.style.marginRight,
}}
className={`${style.iconDklu}`}
></AntdIcon.UserOutlined>
            {/* 图标 */}
            
            {/* 退出按钮 */}
            <Antd.Button
icon={exitButtonTadrState.icon}
size={exitButtonTadrState.size}
type={exitButtonTadrState.type}
ghost={exitButtonTadrState.ghost}
shape={exitButtonTadrState.shape}
danger={exitButtonTadrState.danger}
loading={exitButtonTadrState.loading}
children={exitButtonTadrState.children}
disabled={exitButtonTadrState.disabled}
style={{fontSize:exitButtonTadrState.style.fontSize,
fontWeight:exitButtonTadrState.style.fontWeight,
marginRight:exitButtonTadrState.style.marginRight,
marginBottom:exitButtonTadrState.style.marginBottom,
backgroundColor:exitButtonTadrState.style.backgroundColor,
}}
className={`${style.exitButtonTadr}`}
onClick={(eventGpgz,) =>clickExitButtonKnfq(eventGpgz,)}></Antd.Button>
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
style={{width:pleaseEnterExplanatoryTitleTextWsnaState.style.width,
height:pleaseEnterExplanatoryTitleTextWsnaState.style.height,
display:pleaseEnterExplanatoryTitleTextWsnaState.style.display,
marginTop:pleaseEnterExplanatoryTitleTextWsnaState.style.marginTop,
borderColor:pleaseEnterExplanatoryTitleTextWsnaState.style.borderColor,
borderStyle:pleaseEnterExplanatoryTitleTextWsnaState.style.borderStyle,
paddingLeft:pleaseEnterExplanatoryTitleTextWsnaState.style.paddingLeft,
paddingRight:pleaseEnterExplanatoryTitleTextWsnaState.style.paddingRight,
flexDirection:pleaseEnterExplanatoryTitleTextWsnaState.style.flexDirection,
backgroundColor:pleaseEnterExplanatoryTitleTextWsnaState.style.backgroundColor,
}}
className={`${style.pleaseEnterExplanatoryTitleTextWsna}`}
>
            {/* 电子文件号 */}
            <div
style={{width:electronicFileNumberKklpState.style.width,
height:electronicFileNumberKklpState.style.height,
display:electronicFileNumberKklpState.style.display,
marginTop:electronicFileNumberKklpState.style.marginTop,
marginBottom:electronicFileNumberKklpState.style.marginBottom,
justifyContent:electronicFileNumberKklpState.style.justifyContent,
borderTopLeftRadius:electronicFileNumberKklpState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumberKklpState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumberKklpState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumberKklpState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumberKklp}`}
>
            {/* 电子文件号前缀 */}
            <div
style={{width:electronicFileNumberPrefixEgjiState.style.width,
height:electronicFileNumberPrefixEgjiState.style.height,
display:electronicFileNumberPrefixEgjiState.style.display,
alignItems:electronicFileNumberPrefixEgjiState.style.alignItems,
marginRight:electronicFileNumberPrefixEgjiState.style.marginRight,
justifyContent:electronicFileNumberPrefixEgjiState.style.justifyContent,
backgroundColor:electronicFileNumberPrefixEgjiState.style.backgroundColor,
borderTopLeftRadius:electronicFileNumberPrefixEgjiState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumberPrefixEgjiState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumberPrefixEgjiState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumberPrefixEgjiState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumberPrefixEgji}`}
>
            {/* 电子文件号 */}
            <Antd.Typography.Text
code={electronicFileNumberTqpiState.code}
mark={electronicFileNumberTqpiState.mark}
type={electronicFileNumberTqpiState.type}
delete={electronicFileNumberTqpiState.delete}
italic={electronicFileNumberTqpiState.italic}
strong={electronicFileNumberTqpiState.strong}
children={electronicFileNumberTqpiState.children}
copyable={electronicFileNumberTqpiState.copyable}
disabled={electronicFileNumberTqpiState.disabled}
editable={electronicFileNumberTqpiState.editable}
ellipsis={electronicFileNumberTqpiState.ellipsis}
keyboard={electronicFileNumberTqpiState.keyboard}
underline={electronicFileNumberTqpiState.underline}
style={{gap:electronicFileNumberTqpiState.style.gap,
color:electronicFileNumberTqpiState.style.color,
width:electronicFileNumberTqpiState.style.width,
height:electronicFileNumberTqpiState.style.height,
display:electronicFileNumberTqpiState.style.display,
fontSize:electronicFileNumberTqpiState.style.fontSize,
textAlign:electronicFileNumberTqpiState.style.textAlign,
alignItems:electronicFileNumberTqpiState.style.alignItems,
marginRight:electronicFileNumberTqpiState.style.marginRight,
flexDirection:electronicFileNumberTqpiState.style.flexDirection,
justifyContent:electronicFileNumberTqpiState.style.justifyContent,
}}
className={`${style.electronicFileNumberTqpi}`}
></Antd.Typography.Text>
            {/* 电子文件号 */}
            
            {/* 请输入电子文件号 */}
            <Antd.Input
size={pleaseEnterTheElectronicFileNumberVjirState.size}
prefix={pleaseEnterTheElectronicFileNumberVjirState.prefix}
bordered={pleaseEnterTheElectronicFileNumberVjirState.bordered}
disabled={pleaseEnterTheElectronicFileNumberVjirState.disabled}
maxLength={pleaseEnterTheElectronicFileNumberVjirState.maxLength}
showCount={pleaseEnterTheElectronicFileNumberVjirState.showCount}
addonAfter={pleaseEnterTheElectronicFileNumberVjirState.addonAfter}
allowClear={pleaseEnterTheElectronicFileNumberVjirState.allowClear}
addonBefore={pleaseEnterTheElectronicFileNumberVjirState.addonBefore}
placeholder={pleaseEnterTheElectronicFileNumberVjirState.placeholder}
defaultValue={pleaseEnterTheElectronicFileNumberVjirState.defaultValue}
style={{width:pleaseEnterTheElectronicFileNumberVjirState.style.width,
height:pleaseEnterTheElectronicFileNumberVjirState.style.height,
}}
className={`${style.pleaseEnterTheElectronicFileNumberVjir}`}
></Antd.Input>
            {/* 请输入电子文件号 */}
            </div>
            {/* 电子文件号前缀 */}
            </div>
            {/* 电子文件号 */}
            
            {/* 电子文件号1 */}
            <div
style={{width:electronicFileNumber1EwanState.style.width,
height:electronicFileNumber1EwanState.style.height,
display:electronicFileNumber1EwanState.style.display,
marginTop:electronicFileNumber1EwanState.style.marginTop,
marginBottom:electronicFileNumber1EwanState.style.marginBottom,
justifyContent:electronicFileNumber1EwanState.style.justifyContent,
borderTopLeftRadius:electronicFileNumber1EwanState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumber1EwanState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumber1EwanState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumber1EwanState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumber1Ewan}`}
>
            {/* 电子文件号前缀 */}
            <div
style={{width:electronicFileNumberPrefixFiplState.style.width,
height:electronicFileNumberPrefixFiplState.style.height,
display:electronicFileNumberPrefixFiplState.style.display,
alignItems:electronicFileNumberPrefixFiplState.style.alignItems,
marginRight:electronicFileNumberPrefixFiplState.style.marginRight,
justifyContent:electronicFileNumberPrefixFiplState.style.justifyContent,
backgroundColor:electronicFileNumberPrefixFiplState.style.backgroundColor,
borderTopLeftRadius:electronicFileNumberPrefixFiplState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumberPrefixFiplState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumberPrefixFiplState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumberPrefixFiplState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumberPrefixFipl}`}
>
            {/* 签名规则 */}
            <Antd.Typography.Text
code={signatureRulesState.code}
mark={signatureRulesState.mark}
type={signatureRulesState.type}
delete={signatureRulesState.delete}
italic={signatureRulesState.italic}
strong={signatureRulesState.strong}
children={signatureRulesState.children}
copyable={signatureRulesState.copyable}
disabled={signatureRulesState.disabled}
editable={signatureRulesState.editable}
ellipsis={signatureRulesState.ellipsis}
keyboard={signatureRulesState.keyboard}
underline={signatureRulesState.underline}
style={{gap:signatureRulesState.style.gap,
color:signatureRulesState.style.color,
width:signatureRulesState.style.width,
height:signatureRulesState.style.height,
display:signatureRulesState.style.display,
fontSize:signatureRulesState.style.fontSize,
textAlign:signatureRulesState.style.textAlign,
alignItems:signatureRulesState.style.alignItems,
marginRight:signatureRulesState.style.marginRight,
flexDirection:signatureRulesState.style.flexDirection,
justifyContent:signatureRulesState.style.justifyContent,
}}
className={`${style.signatureRules}`}
></Antd.Typography.Text>
            {/* 签名规则 */}
            
            {/* 请输入签名规则 */}
            <Antd.Input
size={pleaseEnterTheSignatureRuleState.size}
prefix={pleaseEnterTheSignatureRuleState.prefix}
bordered={pleaseEnterTheSignatureRuleState.bordered}
disabled={pleaseEnterTheSignatureRuleState.disabled}
maxLength={pleaseEnterTheSignatureRuleState.maxLength}
showCount={pleaseEnterTheSignatureRuleState.showCount}
addonAfter={pleaseEnterTheSignatureRuleState.addonAfter}
allowClear={pleaseEnterTheSignatureRuleState.allowClear}
addonBefore={pleaseEnterTheSignatureRuleState.addonBefore}
placeholder={pleaseEnterTheSignatureRuleState.placeholder}
defaultValue={pleaseEnterTheSignatureRuleState.defaultValue}
style={{width:pleaseEnterTheSignatureRuleState.style.width,
height:pleaseEnterTheSignatureRuleState.style.height,
}}
className={`${style.pleaseEnterTheSignatureRule}`}
></Antd.Input>
            {/* 请输入签名规则 */}
            </div>
            {/* 电子文件号前缀 */}
            </div>
            {/* 电子文件号1 */}
            
            {/* 电子文件号13 */}
            <div
style={{width:electronicFileNumber1AdzlState.style.width,
height:electronicFileNumber1AdzlState.style.height,
display:electronicFileNumber1AdzlState.style.display,
marginTop:electronicFileNumber1AdzlState.style.marginTop,
marginBottom:electronicFileNumber1AdzlState.style.marginBottom,
justifyContent:electronicFileNumber1AdzlState.style.justifyContent,
borderTopLeftRadius:electronicFileNumber1AdzlState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumber1AdzlState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumber1AdzlState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumber1AdzlState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumber1Adzl}`}
>
            {/* 电子文件号前缀 */}
            <div
style={{width:electronicFileNumberPrefixJxpyState.style.width,
height:electronicFileNumberPrefixJxpyState.style.height,
display:electronicFileNumberPrefixJxpyState.style.display,
alignItems:electronicFileNumberPrefixJxpyState.style.alignItems,
marginRight:electronicFileNumberPrefixJxpyState.style.marginRight,
justifyContent:electronicFileNumberPrefixJxpyState.style.justifyContent,
backgroundColor:electronicFileNumberPrefixJxpyState.style.backgroundColor,
borderTopLeftRadius:electronicFileNumberPrefixJxpyState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumberPrefixJxpyState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumberPrefixJxpyState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumberPrefixJxpyState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumberPrefixJxpy}`}
>
            {/* 签名时间 */}
            <Antd.Typography.Text
code={signatureTimeState.code}
mark={signatureTimeState.mark}
type={signatureTimeState.type}
delete={signatureTimeState.delete}
italic={signatureTimeState.italic}
strong={signatureTimeState.strong}
children={signatureTimeState.children}
copyable={signatureTimeState.copyable}
disabled={signatureTimeState.disabled}
editable={signatureTimeState.editable}
ellipsis={signatureTimeState.ellipsis}
keyboard={signatureTimeState.keyboard}
underline={signatureTimeState.underline}
style={{gap:signatureTimeState.style.gap,
color:signatureTimeState.style.color,
width:signatureTimeState.style.width,
height:signatureTimeState.style.height,
display:signatureTimeState.style.display,
fontSize:signatureTimeState.style.fontSize,
textAlign:signatureTimeState.style.textAlign,
alignItems:signatureTimeState.style.alignItems,
marginRight:signatureTimeState.style.marginRight,
flexDirection:signatureTimeState.style.flexDirection,
justifyContent:signatureTimeState.style.justifyContent,
}}
className={`${style.signatureTime}`}
></Antd.Typography.Text>
            {/* 签名时间 */}
            
            {/* 请输入签名时间 */}
            <Antd.Input
size={pleaseEnterTheSignatureTimeState.size}
prefix={pleaseEnterTheSignatureTimeState.prefix}
bordered={pleaseEnterTheSignatureTimeState.bordered}
disabled={pleaseEnterTheSignatureTimeState.disabled}
maxLength={pleaseEnterTheSignatureTimeState.maxLength}
showCount={pleaseEnterTheSignatureTimeState.showCount}
addonAfter={pleaseEnterTheSignatureTimeState.addonAfter}
allowClear={pleaseEnterTheSignatureTimeState.allowClear}
addonBefore={pleaseEnterTheSignatureTimeState.addonBefore}
placeholder={pleaseEnterTheSignatureTimeState.placeholder}
defaultValue={pleaseEnterTheSignatureTimeState.defaultValue}
style={{width:pleaseEnterTheSignatureTimeState.style.width,
height:pleaseEnterTheSignatureTimeState.style.height,
}}
className={`${style.pleaseEnterTheSignatureTime}`}
></Antd.Input>
            {/* 请输入签名时间 */}
            </div>
            {/* 电子文件号前缀 */}
            </div>
            {/* 电子文件号13 */}
            
            {/* 电子文件号12 */}
            <div
style={{width:electronicFileNumber1DtwwState.style.width,
height:electronicFileNumber1DtwwState.style.height,
display:electronicFileNumber1DtwwState.style.display,
marginTop:electronicFileNumber1DtwwState.style.marginTop,
marginBottom:electronicFileNumber1DtwwState.style.marginBottom,
justifyContent:electronicFileNumber1DtwwState.style.justifyContent,
borderTopLeftRadius:electronicFileNumber1DtwwState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumber1DtwwState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumber1DtwwState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumber1DtwwState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumber1Dtww}`}
>
            {/* 电子文件号前缀 */}
            <div
style={{width:electronicFileNumberPrefixHnzeState.style.width,
height:electronicFileNumberPrefixHnzeState.style.height,
display:electronicFileNumberPrefixHnzeState.style.display,
alignItems:electronicFileNumberPrefixHnzeState.style.alignItems,
marginRight:electronicFileNumberPrefixHnzeState.style.marginRight,
justifyContent:electronicFileNumberPrefixHnzeState.style.justifyContent,
backgroundColor:electronicFileNumberPrefixHnzeState.style.backgroundColor,
borderTopLeftRadius:electronicFileNumberPrefixHnzeState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumberPrefixHnzeState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumberPrefixHnzeState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumberPrefixHnzeState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumberPrefixHnze}`}
>
            {/* 签名者 */}
            <Antd.Typography.Text
code={signatoryState.code}
mark={signatoryState.mark}
type={signatoryState.type}
delete={signatoryState.delete}
italic={signatoryState.italic}
strong={signatoryState.strong}
children={signatoryState.children}
copyable={signatoryState.copyable}
disabled={signatoryState.disabled}
editable={signatoryState.editable}
ellipsis={signatoryState.ellipsis}
keyboard={signatoryState.keyboard}
underline={signatoryState.underline}
style={{gap:signatoryState.style.gap,
color:signatoryState.style.color,
width:signatoryState.style.width,
height:signatoryState.style.height,
display:signatoryState.style.display,
fontSize:signatoryState.style.fontSize,
textAlign:signatoryState.style.textAlign,
alignItems:signatoryState.style.alignItems,
marginRight:signatoryState.style.marginRight,
flexDirection:signatoryState.style.flexDirection,
justifyContent:signatoryState.style.justifyContent,
}}
className={`${style.signatory}`}
></Antd.Typography.Text>
            {/* 签名者 */}
            
            {/* 请输入签名者 */}
            <Antd.Input
size={pleaseEnterTheSignerState.size}
prefix={pleaseEnterTheSignerState.prefix}
bordered={pleaseEnterTheSignerState.bordered}
disabled={pleaseEnterTheSignerState.disabled}
maxLength={pleaseEnterTheSignerState.maxLength}
showCount={pleaseEnterTheSignerState.showCount}
addonAfter={pleaseEnterTheSignerState.addonAfter}
allowClear={pleaseEnterTheSignerState.allowClear}
addonBefore={pleaseEnterTheSignerState.addonBefore}
placeholder={pleaseEnterTheSignerState.placeholder}
defaultValue={pleaseEnterTheSignerState.defaultValue}
style={{width:pleaseEnterTheSignerState.style.width,
height:pleaseEnterTheSignerState.style.height,
}}
className={`${style.pleaseEnterTheSigner}`}
></Antd.Input>
            {/* 请输入签名者 */}
            </div>
            {/* 电子文件号前缀 */}
            </div>
            {/* 电子文件号12 */}
            
            {/* 电子文件号11 */}
            <div
style={{width:electronicFileNumber1WomqState.style.width,
height:electronicFileNumber1WomqState.style.height,
display:electronicFileNumber1WomqState.style.display,
marginTop:electronicFileNumber1WomqState.style.marginTop,
marginBottom:electronicFileNumber1WomqState.style.marginBottom,
justifyContent:electronicFileNumber1WomqState.style.justifyContent,
borderTopLeftRadius:electronicFileNumber1WomqState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumber1WomqState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumber1WomqState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumber1WomqState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumber1Womq}`}
>
            {/* 电子文件号前缀 */}
            <div
style={{width:electronicFileNumberPrefixDbuaState.style.width,
height:electronicFileNumberPrefixDbuaState.style.height,
display:electronicFileNumberPrefixDbuaState.style.display,
alignItems:electronicFileNumberPrefixDbuaState.style.alignItems,
marginRight:electronicFileNumberPrefixDbuaState.style.marginRight,
justifyContent:electronicFileNumberPrefixDbuaState.style.justifyContent,
backgroundColor:electronicFileNumberPrefixDbuaState.style.backgroundColor,
borderTopLeftRadius:electronicFileNumberPrefixDbuaState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumberPrefixDbuaState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumberPrefixDbuaState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumberPrefixDbuaState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumberPrefixDbua}`}
>
            {/* 签名 */}
            <Antd.Typography.Text
code={autographState.code}
mark={autographState.mark}
type={autographState.type}
delete={autographState.delete}
italic={autographState.italic}
strong={autographState.strong}
children={autographState.children}
copyable={autographState.copyable}
disabled={autographState.disabled}
editable={autographState.editable}
ellipsis={autographState.ellipsis}
keyboard={autographState.keyboard}
underline={autographState.underline}
style={{gap:autographState.style.gap,
color:autographState.style.color,
width:autographState.style.width,
height:autographState.style.height,
display:autographState.style.display,
fontSize:autographState.style.fontSize,
textAlign:autographState.style.textAlign,
alignItems:autographState.style.alignItems,
marginRight:autographState.style.marginRight,
flexDirection:autographState.style.flexDirection,
justifyContent:autographState.style.justifyContent,
}}
className={`${style.autograph}`}
></Antd.Typography.Text>
            {/* 签名 */}
            
            {/* 请输入签名 */}
            <Antd.Input
size={pleaseEnterYourSignatureState.size}
prefix={pleaseEnterYourSignatureState.prefix}
bordered={pleaseEnterYourSignatureState.bordered}
disabled={pleaseEnterYourSignatureState.disabled}
maxLength={pleaseEnterYourSignatureState.maxLength}
showCount={pleaseEnterYourSignatureState.showCount}
addonAfter={pleaseEnterYourSignatureState.addonAfter}
allowClear={pleaseEnterYourSignatureState.allowClear}
addonBefore={pleaseEnterYourSignatureState.addonBefore}
placeholder={pleaseEnterYourSignatureState.placeholder}
defaultValue={pleaseEnterYourSignatureState.defaultValue}
style={{width:pleaseEnterYourSignatureState.style.width,
height:pleaseEnterYourSignatureState.style.height,
}}
className={`${style.pleaseEnterYourSignature}`}
></Antd.Input>
            {/* 请输入签名 */}
            </div>
            {/* 电子文件号前缀 */}
            </div>
            {/* 电子文件号11 */}
            
            {/* 按钮 */}
            <Antd.Button
size={buttonKbnnState.size}
type={buttonKbnnState.type}
ghost={buttonKbnnState.ghost}
shape={buttonKbnnState.shape}
danger={buttonKbnnState.danger}
children={buttonKbnnState.children}
disabled={buttonKbnnState.disabled}
style={{width:buttonKbnnState.style.width,
height:buttonKbnnState.style.height,
fontSize:buttonKbnnState.style.fontSize,
marginTop:buttonKbnnState.style.marginTop,
fontWeight:buttonKbnnState.style.fontWeight,
marginLeft:buttonKbnnState.style.marginLeft,
marginRight:buttonKbnnState.style.marginRight,
borderTopLeftRadius:buttonKbnnState.style.borderTopLeftRadius,
borderTopRightRadius:buttonKbnnState.style.borderTopRightRadius,
borderBottomLeftRadius:buttonKbnnState.style.borderBottomLeftRadius,
borderBottomRightRadius:buttonKbnnState.style.borderBottomRightRadius,
}}
className={`${style.buttonKbnn}`}
></Antd.Button>
            {/* 按钮 */}
            </div>
            {/* 请输入说明题名文字 */}
            </div>
            {/* 两栏容器 */}
            </div>
            {/* 容器 */}
            </>}
export default MetadataElectronicSignatureKlim
export { MetadataElectronicSignatureKlim }