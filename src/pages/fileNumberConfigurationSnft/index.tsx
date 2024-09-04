import style from './index.module.scss'
import { useState } from 'react'
import * as Antd from '@/components/antd'
import { routes } from '@/router/index'
import { getParentInfoList } from '@/utils'
import { useNavigate } from 'react-router-dom'
import * as AntdIcon from '@ant-design/icons'
// 档号配置
              const FileNumberConfigurationSnft = () => {
const navigate = useNavigate()
// 点击时-元数据内容描述
          const whenClickedMetadataContentDescriptionAdmk = (eventSzbg,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageJzod").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-聚合层次
          const clickOnAggregateHierarchy = (eventQfhh,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageVomd").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据形式特征
          const whenClickedMetadataFormatFeaturesSkzb = (eventFljz,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageWcoq").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据存储位置
          const whenClickedMetadataStorageLocationBiyg = (eventIqil,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageDbgh").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据电子签名
          const whenClickedMetadataElectronicSignaturePwpo = (eventAeue,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageWsbf").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据来源
          const whenClickedMetadataSourceUfvo = (eventHmrq,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageGafh").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-档号
          const clickTimeFileNumberUmpa = (eventHlru,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageNfdu").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-生成文件
          const whenClickedGenerateFile = (eventDnpa,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageYfhi").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-待审核日志
          const whenClickedPendingAuditLogLbkb = (eventSshh,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageZuvc").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-已审核日志
          const whenClickedReviewedLogsFtui = (eventYjdp,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageStsm").slice(1).map(item => item.path).join('/')}`)
}
// 点击-退出按钮
          const clickExitButtonZkol = (eventMqvl,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "defaultPageFhue").slice(1).map(item => item.path).join('/')}`)
}

              // 容器 开始属性
              const [containerSvfoState, setcontainerSvfoState] = useState({style:{width:"100vw",
height:"100vh",
display:"flex",
},
})
              // 容器 结束属性
              
              // 导航菜单 开始属性
              const [navigationMenuPaseState, setnavigationMenuPaseState] = useState({mode:"vertical",
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
              const [containerGngrState, setcontainerGngrState] = useState({style:{width:"100%",
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
              const [pictureCtejState, setpictureCtejState] = useState({alt:undefined,
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
              const [administratorHomepageState, setadministratorHomepageState] = useState({code:false,
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
              const [fileNumberConfigurationState, setfileNumberConfigurationState] = useState({key:undefined,
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
backgroundColor:"#6d8fc0",
borderBottomWidth:"5px",
borderTopLeftRadius:"0px",
borderTopRightRadius:"0px",
borderBottomLeftRadius:"0px",
borderBottomRightRadius:"0px",
},
})
              // 档号配置 结束属性
              
              // 元数据填写 开始属性
              const [fillInMetadataNbmhState, setfillInMetadataNbmhState] = useState({title:"元数据填写",
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
              const [descriptionOfMetadataContentWuwoState, setdescriptionOfMetadataContentWuwoState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据内容描述",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 元数据内容描述 结束属性
              
              // 聚合层次 开始属性
              const [aggregationHierarchyKpneState, setaggregationHierarchyKpneState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"聚合层次",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 聚合层次 结束属性
              
              // 元数据形式特征 开始属性
              const [characteristicsOfMetadataFormatSnziState, setcharacteristicsOfMetadataFormatSnziState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据形式特征",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 元数据形式特征 结束属性
              
              // 元数据存储位置 开始属性
              const [metadataStorageLocationFukpState, setmetadataStorageLocationFukpState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据存储位置",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 元数据存储位置 结束属性
              
              // 元数据电子签名 开始属性
              const [metadataElectronicSignatureYrwyState, setmetadataElectronicSignatureYrwyState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据电子签名",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 元数据电子签名 结束属性
              
              // 元数据来源 开始属性
              const [sourceOfMetadataXexsState, setsourceOfMetadataXexsState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据来源",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 元数据来源 结束属性
              
              // 档号 开始属性
              const [referenceLcibState, setreferenceLcibState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"档号",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 档号 结束属性
              
              // 生成文件 开始属性
              const [generateFileCiqbState, setgenerateFileCiqbState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"生成文件",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 生成文件 结束属性
              
              // 日志审核 开始属性
              const [logAuditState, setlogAuditState] = useState({title:"日志审核",
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
              const [pendingAuditLogState, setpendingAuditLogState] = useState({key:undefined,
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
              const [twoColumnContainerYgfmState, settwoColumnContainerYgfmState] = useState({style:{width:"86%",
display:"flex",
flexDirection:"column",
justifyContent:"center",
},
})
              // 两栏容器 结束属性
              
              // 容器 开始属性
              const [containerJydvState, setcontainerJydvState] = useState({style:{width:"100%",
height:"9%",
backgroundColor:"#f0f8ff",
},
})
              // 容器 结束属性
              
              // 容器 开始属性
              const [containerDufcState, setcontainerDufcState] = useState({style:{width:"100%",
height:"9%",
backgroundColor:"#ffffff",
},
})
              // 容器 结束属性
              
              // 两栏容器 开始属性
              const [twoColumnContainerBgsrState, settwoColumnContainerBgsrState] = useState({style:{width:"100%",
display:"flex",
flexDirection:"column",
},
})
              // 两栏容器 结束属性
              
              // 容器 开始属性
              const [containerNvmkState, setcontainerNvmkState] = useState({style:{width:"100%",
},
})
              // 容器 结束属性
              
              // 两栏容器 开始属性
              const [twoColumnContainerIcfkState, settwoColumnContainerIcfkState] = useState({style:{width:"100%",
display:"flex",
flexDirection:"column",
},
})
              // 两栏容器 结束属性
              
              // 两栏容器 开始属性
              const [twoColumnContainerCarpState, settwoColumnContainerCarpState] = useState({style:{width:"100%",
display:"flex",
marginTop:"-7px",
flexDirection:"column",
},
})
              // 两栏容器 结束属性
              
              // 系统名称 开始属性
              const [systemNameYvpnState, setsystemNameYvpnState] = useState({style:{gap:"14px",
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
              const [systemNameXcedState, setsystemNameXcedState] = useState({code:false,
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
              const [containerCgpsState, setcontainerCgpsState] = useState({style:{width:"100%",
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
              const [iconCekmState, seticonCekmState] = useState({spin:false,
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
              const [exitButtonUyueState, setexitButtonUyueState] = useState({icon:undefined,
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
              const [fileNumberPrefixQxmeState, setfileNumberPrefixQxmeState] = useState({style:{width:"100%",
height:"91%",
display:"flex",
borderColor:"#000000",
borderStyle:"solid",
paddingLeft:"10px",
paddingRight:"10px",
flexDirection:"column",
backgroundColor:"#dcdcdc",
},
})
              // 档号前缀 结束属性
              
              // 行 开始属性
              const [thatOkState, setthatOkState] = useState({style:{width:"100%",
height:"60px",
display:"flex",
marginTop:"2%",
marginBottom:"5px",
justifyContent:"center",
borderTopLeftRadius:"2px",
borderTopRightRadius:"2px",
borderBottomLeftRadius:"2px",
borderBottomRightRadius:"2px",
},
})
              // 行 结束属性
              
              // 电子文件号前缀 开始属性
              const [electronicFileNumberPrefixVrxhState, setelectronicFileNumberPrefixVrxhState] = useState({style:{width:"49%",
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
              
              // 电子文件号前缀 开始属性
              const [electronicFileNumberPrefixState, setelectronicFileNumberPrefixState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"电子文件号前缀",
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
              // 电子文件号前缀 结束属性
              
              // 选择器-单选 开始属性
              const [chooserRadioState, setchooserRadioState] = useState({size:"middle",
value:undefined,
options:[
],
bordered:true,
disabled:false,
autoFocus:false,
clearIcon:undefined,
placement:"bottomLeft",
allowClear:false,
fieldNames:{label:undefined,
value:undefined,
},
suffixIcon:undefined,
defaultOpen:false,
placeholder:"请输选择电子文件号前缀",
defaultValue:undefined,
notFoundContent:undefined,
popupMatchSelectWidth:true,
defaultActiveFirstOption:true,
style:{width:"60%",
height:"60px",
borderColor:"#000000",
borderStyle:"none",
marginRight:"0px",
borderTopWidth:"1px",
borderLeftWidth:"1px",
borderRightWidth:"1px",
borderBottomWidth:"1px",
},
})
              // 选择器-单选 结束属性
              
              // 档号前缀 开始属性
              const [fileNumberPrefixYoayState, setfileNumberPrefixYoayState] = useState({style:{width:"49%",
height:"60px",
display:"flex",
backgroundColor:"#ffffff",
borderTopLeftRadius:"10px",
borderTopRightRadius:"10px",
borderBottomLeftRadius:"10px",
borderBottomRightRadius:"10px",
},
})
              // 档号前缀 结束属性
              
              // 档号前缀 开始属性
              const [fileNumberPrefixCvvcState, setfileNumberPrefixCvvcState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"档号前缀",
copyable:false,
disabled:false,
editable:false,
ellipsis:false,
keyboard:false,
underline:false,
style:{color:"#000000",
width:"40%",
height:"100%",
display:"flex",
fontSize:"15px",
alignItems:"center",
marginRight:"10px",
justifyContent:"center",
},
})
              // 档号前缀 结束属性
              
              // 选择器-单选1 开始属性
              const [chooserRadioUslgState, setchooserRadioUslgState] = useState({size:"middle",
value:undefined,
options:[
],
bordered:true,
disabled:false,
autoFocus:false,
clearIcon:undefined,
placement:"bottomLeft",
allowClear:false,
fieldNames:{label:undefined,
value:undefined,
},
suffixIcon:undefined,
defaultOpen:false,
placeholder:"请输选择档号前缀",
defaultValue:undefined,
notFoundContent:undefined,
popupMatchSelectWidth:true,
defaultActiveFirstOption:true,
style:{width:"60%",
height:"60px",
},
})
              // 选择器-单选1 结束属性
              
              // 行1 开始属性
              const [thatOk1State, setthatOk1State] = useState({style:{width:"100%",
height:"60px",
display:"flex",
marginTop:"1%",
marginLeft:"5px",
marginBottom:"5px",
borderTopLeftRadius:"2px",
borderTopRightRadius:"2px",
borderBottomLeftRadius:"2px",
borderBottomRightRadius:"2px",
},
})
              // 行1 结束属性
              
              // 全宗号 开始属性
              const [completeAccountNumberState, setcompleteAccountNumberState] = useState({style:{width:"49%",
height:"60px",
display:"flex",
marginLeft:"5px",
marginRight:"10px",
backgroundColor:"#ffffff",
borderTopLeftRadius:"10px",
borderTopRightRadius:"10px",
borderBottomLeftRadius:"10px",
borderBottomRightRadius:"10px",
},
})
              // 全宗号 结束属性
              
              // 全宗号 开始属性
              const [completeAccountNumberUdftState, setcompleteAccountNumberUdftState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"全宗号",
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
              // 全宗号 结束属性
              
              // 输入框 开始属性
              const [inputBoxAlrfState, setinputBoxAlrfState] = useState({size:"middle",
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"请输入全宗号",
defaultValue:undefined,
style:{width:"60%",
},
})
              // 输入框 结束属性
              
              // 块 开始属性
              const [blockState, setblockState] = useState({style:{marginTop:"2%",
marginLeft:"5px",
},
})
              // 块 结束属性
              
              // 类别号 开始属性
              const [categoryNumberState, setcategoryNumberState] = useState({code:false,
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
style:{color:"#ffffff",
fontSize:"18px",
},
})
              // 类别号 结束属性
              
              // 块1-行1 开始属性
              const [block1Row1State, setblock1Row1State] = useState({style:{width:"100%",
height:"60px",
display:"flex",
marginTop:"5px",
marginBottom:"5px",
borderTopLeftRadius:"2px",
borderTopRightRadius:"2px",
borderBottomLeftRadius:"2px",
borderBottomRightRadius:"2px",
},
})
              // 块1-行1 结束属性
              
              // 一级类别号（档案门类代码） 开始属性
              const [theFirstResortTzgkState, settheFirstResortTzgkState] = useState({style:{width:"49%",
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
              // 一级类别号（档案门类代码） 结束属性
              
              // 一级类别号（档案门类代码） 开始属性
              const [theFirstResortLiceState, settheFirstResortLiceState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"一级类别号（档案门类代码）",
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
              // 一级类别号（档案门类代码） 结束属性
              
              // 选择器-单选1 开始属性
              const [chooserRadioTpssState, setchooserRadioTpssState] = useState({size:"middle",
value:undefined,
options:[
],
bordered:true,
disabled:false,
autoFocus:false,
clearIcon:undefined,
placement:"bottomLeft",
allowClear:false,
fieldNames:{label:undefined,
value:undefined,
},
suffixIcon:undefined,
defaultOpen:false,
placeholder:"请选择",
defaultValue:undefined,
notFoundContent:undefined,
popupMatchSelectWidth:true,
defaultActiveFirstOption:true,
style:{width:"60%",
height:"60px",
},
})
              // 选择器-单选1 结束属性
              
              // 二级及三级类别号 开始属性
              const [secondaryAndTertiaryCategoryNumbersButqState, setsecondaryAndTertiaryCategoryNumbersButqState] = useState({style:{width:"49%",
height:"60px",
display:"flex",
backgroundColor:"#ffffff",
borderTopLeftRadius:"10px",
borderTopRightRadius:"10px",
borderBottomLeftRadius:"10px",
borderBottomRightRadius:"10px",
},
})
              // 二级及三级类别号 结束属性
              
              // 二级及三级类别号 开始属性
              const [secondaryAndTertiaryCategoryNumbersState, setsecondaryAndTertiaryCategoryNumbersState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"二级及三级类别号",
copyable:false,
disabled:false,
editable:false,
ellipsis:false,
keyboard:false,
underline:false,
style:{color:"#000000",
width:"40%",
height:"100%",
display:"flex",
fontSize:"15px",
alignItems:"center",
marginRight:"10px",
justifyContent:"center",
},
})
              // 二级及三级类别号 结束属性
              
              // 请输入二级及三级类别号 开始属性
              const [pleaseEnterTheSecondAndThirdLevelCategoryNumbersState, setpleaseEnterTheSecondAndThirdLevelCategoryNumbersState] = useState({size:"middle",
value:undefined,
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"请输入二级及三级类别号",
defaultValue:undefined,
style:{},
})
              // 请输入二级及三级类别号 结束属性
              
              // 块1-行2 开始属性
              const [block1Row2State, setblock1Row2State] = useState({style:{width:"100%",
height:"60px",
display:"flex",
marginTop:"5px",
marginBottom:"5px",
borderTopLeftRadius:"2px",
borderTopRightRadius:"2px",
borderBottomLeftRadius:"2px",
borderBottomRightRadius:"2px",
},
})
              // 块1-行2 结束属性
              
              // 年度 开始属性
              const [yearDuskState, setyearDuskState] = useState({style:{width:"49%",
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
              // 年度 结束属性
              
              // 年度 开始属性
              const [yearState, setyearState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"         年度",
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
              // 年度 结束属性
              
              // 请输入年度 开始属性
              const [pleaseEnterTheYearState, setpleaseEnterTheYearState] = useState({size:"middle",
value:undefined,
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"请输入年度",
defaultValue:undefined,
style:{width:"60%",
},
})
              // 请输入年度 结束属性
              
              // 保管期限代码 开始属性
              const [storagePeriodCodeState, setstoragePeriodCodeState] = useState({style:{width:"49%",
height:"60px",
display:"flex",
backgroundColor:"#ffffff",
borderTopLeftRadius:"10px",
borderTopRightRadius:"10px",
borderBottomLeftRadius:"10px",
borderBottomRightRadius:"10px",
},
})
              // 保管期限代码 结束属性
              
              // 保管期限代码 开始属性
              const [storagePeriodCodeGobuState, setstoragePeriodCodeGobuState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"保管期限代码",
copyable:false,
disabled:false,
editable:false,
ellipsis:false,
keyboard:false,
underline:false,
style:{color:"#000000",
width:"40%",
height:"100%",
display:"flex",
fontSize:"15px",
alignItems:"center",
marginRight:"10px",
justifyContent:"center",
},
})
              // 保管期限代码 结束属性
              
              // 请输入保管期限代码 开始属性
              const [pleaseEnterTheStoragePeriodCodeState, setpleaseEnterTheStoragePeriodCodeState] = useState({size:"middle",
value:undefined,
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"请输入保管期限代码",
defaultValue:undefined,
style:{},
})
              // 请输入保管期限代码 结束属性
              
              // 块1-行3 开始属性
              const [block1Line3State, setblock1Line3State] = useState({style:{width:"100%",
height:"60px",
display:"flex",
marginTop:"5px",
marginBottom:"5px",
borderTopLeftRadius:"2px",
borderTopRightRadius:"2px",
borderBottomLeftRadius:"2px",
borderBottomRightRadius:"2px",
},
})
              // 块1-行3 结束属性
              
              // 机构问题代码 开始属性
              const [institutionalIssueCodeIiwuState, setinstitutionalIssueCodeIiwuState] = useState({style:{width:"49%",
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
              // 机构问题代码 结束属性
              
              // 机构问题代码 开始属性
              const [institutionalIssueCodeState, setinstitutionalIssueCodeState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"机构问题代码",
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
              // 机构问题代码 结束属性
              
              // 请输入机构问题代码 开始属性
              const [pleaseEnterTheInstitutionalIssueCodeState, setpleaseEnterTheInstitutionalIssueCodeState] = useState({size:"middle",
value:undefined,
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"请输入机构问题代码",
defaultValue:undefined,
style:{width:"60%",
},
})
              // 请输入机构问题代码 结束属性
              
              // 主题 开始属性
              const [themeLmoqState, setthemeLmoqState] = useState({style:{width:"49%",
height:"60px",
display:"flex",
backgroundColor:"#ffffff",
borderTopLeftRadius:"10px",
borderTopRightRadius:"10px",
borderBottomLeftRadius:"10px",
borderBottomRightRadius:"10px",
},
})
              // 主题 结束属性
              
              // 主题 开始属性
              const [themeState, setthemeState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"主题",
copyable:false,
disabled:false,
editable:false,
ellipsis:false,
keyboard:false,
underline:false,
style:{color:"#000000",
width:"40%",
height:"100%",
display:"flex",
fontSize:"15px",
alignItems:"center",
marginRight:"10px",
justifyContent:"center",
},
})
              // 主题 结束属性
              
              // 请输入主题 开始属性
              const [pleaseEnterTheThemeState, setpleaseEnterTheThemeState] = useState({size:"middle",
value:undefined,
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"请输入主题",
defaultValue:undefined,
style:{},
})
              // 请输入主题 结束属性
              
              // 块1-行4 开始属性
              const [block1Row4State, setblock1Row4State] = useState({style:{width:"100%",
height:"60px",
display:"flex",
marginTop:"5px",
marginBottom:"5px",
borderTopLeftRadius:"2px",
borderTopRightRadius:"2px",
borderBottomLeftRadius:"2px",
borderBottomRightRadius:"2px",
},
})
              // 块1-行4 结束属性
              
              // 关键词 开始属性
              const [keywordOlkiState, setkeywordOlkiState] = useState({style:{width:"49%",
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
              // 关键词 结束属性
              
              // 关键字 开始属性
              const [keywordState, setkeywordState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"关键字",
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
              // 关键字 结束属性
              
              // 请输入关键字 开始属性
              const [pleaseEnterKeywordsState, setpleaseEnterKeywordsState] = useState({size:"middle",
value:undefined,
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"请输入关键字",
defaultValue:undefined,
style:{width:"60%",
},
})
              // 请输入关键字 结束属性
              
              // 按钮 开始属性
              const [buttonYgjaState, setbuttonYgjaState] = useState({size:"middle",
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
style={{width:containerSvfoState.style.width,
height:containerSvfoState.style.height,
display:containerSvfoState.style.display,
}}
className={`${style.containerSvfo}`}
>
            {/* 导航菜单 */}
            <Antd.Menu
mode={navigationMenuPaseState.mode}
expandIcon={navigationMenuPaseState.expandIcon}
style={{width:navigationMenuPaseState.style.width,
height:navigationMenuPaseState.style.height,
backgroundColor:navigationMenuPaseState.style.backgroundColor,
backgroundImage:navigationMenuPaseState.style.backgroundImage,
backgroundRepeat:navigationMenuPaseState.style.backgroundRepeat,
borderTopRightRadius:navigationMenuPaseState.style.borderTopRightRadius,
borderBottomRightRadius:navigationMenuPaseState.style.borderBottomRightRadius,
}}
className={`${style.navigationMenuPase}`}
>
            {/* 容器 */}
            <div
style={{width:containerGngrState.style.width,
height:containerGngrState.style.height,
display:containerGngrState.style.display,
flexWrap:containerGngrState.style.flexWrap,
alignItems:containerGngrState.style.alignItems,
paddingTop:containerGngrState.style.paddingTop,
borderColor:containerGngrState.style.borderColor,
borderStyle:containerGngrState.style.borderStyle,
flexDirection:containerGngrState.style.flexDirection,
justifyContent:containerGngrState.style.justifyContent,
borderBottomWidth:containerGngrState.style.borderBottomWidth,
}}
className={`${style.containerGngr}`}
>
            {/* 图片 */}
            <Antd.Image
alt={pictureCtejState.alt}
src={pictureCtejState.src}
width={pictureCtejState.width}
height={pictureCtejState.height}
preview={pictureCtejState.preview}
fallback={pictureCtejState.fallback}
placeholder={pictureCtejState.placeholder}
style={{width:pictureCtejState.style.width,
height:pictureCtejState.style.height,
marginTop:pictureCtejState.style.marginTop,
marginLeft:pictureCtejState.style.marginLeft,
}}
className={`${style.pictureCtej}`}
></Antd.Image>
            {/* 图片 */}
            
            {/* 管理员首页 */}
            <Antd.Typography.Text
code={administratorHomepageState.code}
mark={administratorHomepageState.mark}
type={administratorHomepageState.type}
delete={administratorHomepageState.delete}
italic={administratorHomepageState.italic}
strong={administratorHomepageState.strong}
children={administratorHomepageState.children}
copyable={administratorHomepageState.copyable}
disabled={administratorHomepageState.disabled}
editable={administratorHomepageState.editable}
ellipsis={administratorHomepageState.ellipsis}
keyboard={administratorHomepageState.keyboard}
underline={administratorHomepageState.underline}
style={{color:administratorHomepageState.style.color,
width:administratorHomepageState.style.width,
height:administratorHomepageState.style.height,
fontSize:administratorHomepageState.style.fontSize,
textAlign:administratorHomepageState.style.textAlign,
fontWeight:administratorHomepageState.style.fontWeight,
marginLeft:administratorHomepageState.style.marginLeft,
}}
className={`${style.administratorHomepage}`}
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
marginLeft:fileNumberConfigurationState.style.marginLeft,
borderColor:fileNumberConfigurationState.style.borderColor,
borderStyle:fileNumberConfigurationState.style.borderStyle,
marginRight:fileNumberConfigurationState.style.marginRight,
backgroundColor:fileNumberConfigurationState.style.backgroundColor,
borderBottomWidth:fileNumberConfigurationState.style.borderBottomWidth,
borderTopLeftRadius:fileNumberConfigurationState.style.borderTopLeftRadius,
borderTopRightRadius:fileNumberConfigurationState.style.borderTopRightRadius,
borderBottomLeftRadius:fileNumberConfigurationState.style.borderBottomLeftRadius,
borderBottomRightRadius:fileNumberConfigurationState.style.borderBottomRightRadius,
}}
className={`${style.fileNumberConfiguration}`}
></Antd.Menu.Item>
            {/* 档号配置 */}
            
            {/* 元数据填写 */}
            <Antd.Menu.ItemGroup
title={fillInMetadataNbmhState.title}
style={{color:fillInMetadataNbmhState.style.color,
borderColor:fillInMetadataNbmhState.style.borderColor,
borderStyle:fillInMetadataNbmhState.style.borderStyle,
borderTopWidth:fillInMetadataNbmhState.style.borderTopWidth,
borderLeftWidth:fillInMetadataNbmhState.style.borderLeftWidth,
borderRightWidth:fillInMetadataNbmhState.style.borderRightWidth,
borderBottomWidth:fillInMetadataNbmhState.style.borderBottomWidth,
}}
className={`${style.fillInMetadataNbmh}`}
>
            {/* 元数据内容描述 */}
            <Antd.Menu.Item
key={descriptionOfMetadataContentWuwoState.key}
icon={descriptionOfMetadataContentWuwoState.icon}
danger={descriptionOfMetadataContentWuwoState.danger}
children={descriptionOfMetadataContentWuwoState.children}
disabled={descriptionOfMetadataContentWuwoState.disabled}
style={{color:descriptionOfMetadataContentWuwoState.style.color,
}}
className={`${style.descriptionOfMetadataContentWuwo}`}
onClick={(eventSzbg,) =>whenClickedMetadataContentDescriptionAdmk(eventSzbg,)}></Antd.Menu.Item>
            {/* 元数据内容描述 */}
            
            {/* 聚合层次 */}
            <Antd.Menu.Item
key={aggregationHierarchyKpneState.key}
icon={aggregationHierarchyKpneState.icon}
danger={aggregationHierarchyKpneState.danger}
children={aggregationHierarchyKpneState.children}
disabled={aggregationHierarchyKpneState.disabled}
style={{color:aggregationHierarchyKpneState.style.color,
}}
className={`${style.aggregationHierarchyKpne}`}
onClick={(eventQfhh,) =>clickOnAggregateHierarchy(eventQfhh,)}></Antd.Menu.Item>
            {/* 聚合层次 */}
            
            {/* 元数据形式特征 */}
            <Antd.Menu.Item
key={characteristicsOfMetadataFormatSnziState.key}
icon={characteristicsOfMetadataFormatSnziState.icon}
danger={characteristicsOfMetadataFormatSnziState.danger}
children={characteristicsOfMetadataFormatSnziState.children}
disabled={characteristicsOfMetadataFormatSnziState.disabled}
style={{color:characteristicsOfMetadataFormatSnziState.style.color,
}}
className={`${style.characteristicsOfMetadataFormatSnzi}`}
onClick={(eventFljz,) =>whenClickedMetadataFormatFeaturesSkzb(eventFljz,)}></Antd.Menu.Item>
            {/* 元数据形式特征 */}
            
            {/* 元数据存储位置 */}
            <Antd.Menu.Item
key={metadataStorageLocationFukpState.key}
icon={metadataStorageLocationFukpState.icon}
danger={metadataStorageLocationFukpState.danger}
children={metadataStorageLocationFukpState.children}
disabled={metadataStorageLocationFukpState.disabled}
style={{color:metadataStorageLocationFukpState.style.color,
}}
className={`${style.metadataStorageLocationFukp}`}
onClick={(eventIqil,) =>whenClickedMetadataStorageLocationBiyg(eventIqil,)}></Antd.Menu.Item>
            {/* 元数据存储位置 */}
            
            {/* 元数据电子签名 */}
            <Antd.Menu.Item
key={metadataElectronicSignatureYrwyState.key}
icon={metadataElectronicSignatureYrwyState.icon}
danger={metadataElectronicSignatureYrwyState.danger}
children={metadataElectronicSignatureYrwyState.children}
disabled={metadataElectronicSignatureYrwyState.disabled}
style={{color:metadataElectronicSignatureYrwyState.style.color,
}}
className={`${style.metadataElectronicSignatureYrwy}`}
onClick={(eventAeue,) =>whenClickedMetadataElectronicSignaturePwpo(eventAeue,)}></Antd.Menu.Item>
            {/* 元数据电子签名 */}
            
            {/* 元数据来源 */}
            <Antd.Menu.Item
key={sourceOfMetadataXexsState.key}
icon={sourceOfMetadataXexsState.icon}
danger={sourceOfMetadataXexsState.danger}
children={sourceOfMetadataXexsState.children}
disabled={sourceOfMetadataXexsState.disabled}
style={{color:sourceOfMetadataXexsState.style.color,
}}
className={`${style.sourceOfMetadataXexs}`}
onClick={(eventHmrq,) =>whenClickedMetadataSourceUfvo(eventHmrq,)}></Antd.Menu.Item>
            {/* 元数据来源 */}
            
            {/* 档号 */}
            <Antd.Menu.Item
key={referenceLcibState.key}
icon={referenceLcibState.icon}
danger={referenceLcibState.danger}
children={referenceLcibState.children}
disabled={referenceLcibState.disabled}
style={{color:referenceLcibState.style.color,
}}
className={`${style.referenceLcib}`}
onClick={(eventHlru,) =>clickTimeFileNumberUmpa(eventHlru,)}></Antd.Menu.Item>
            {/* 档号 */}
            
            {/* 生成文件 */}
            <Antd.Menu.Item
key={generateFileCiqbState.key}
icon={generateFileCiqbState.icon}
danger={generateFileCiqbState.danger}
children={generateFileCiqbState.children}
disabled={generateFileCiqbState.disabled}
style={{color:generateFileCiqbState.style.color,
}}
className={`${style.generateFileCiqb}`}
onClick={(eventDnpa,) =>whenClickedGenerateFile(eventDnpa,)}></Antd.Menu.Item>
            {/* 生成文件 */}
            </Antd.Menu.ItemGroup>
            {/* 元数据填写 */}
            
            {/* 日志审核 */}
            <Antd.Menu.ItemGroup
title={logAuditState.title}
style={{borderColor:logAuditState.style.borderColor,
borderStyle:logAuditState.style.borderStyle,
borderTopWidth:logAuditState.style.borderTopWidth,
borderLeftWidth:logAuditState.style.borderLeftWidth,
borderRightWidth:logAuditState.style.borderRightWidth,
borderBottomWidth:logAuditState.style.borderBottomWidth,
}}
className={`${style.logAudit}`}
>
            {/* 待审核日志 */}
            <Antd.Menu.Item
key={pendingAuditLogState.key}
icon={pendingAuditLogState.icon}
danger={pendingAuditLogState.danger}
children={pendingAuditLogState.children}
disabled={pendingAuditLogState.disabled}
style={{color:pendingAuditLogState.style.color,
}}
className={`${style.pendingAuditLog}`}
onClick={(eventSshh,) =>whenClickedPendingAuditLogLbkb(eventSshh,)}></Antd.Menu.Item>
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
onClick={(eventYjdp,) =>whenClickedReviewedLogsFtui(eventYjdp,)}></Antd.Menu.Item>
            {/* 已审核日志 */}
            </Antd.Menu.ItemGroup>
            {/* 日志审核 */}
            </Antd.Menu>
            {/* 导航菜单 */}
            
            {/* 两栏容器 */}
            <div
style={{width:twoColumnContainerYgfmState.style.width,
display:twoColumnContainerYgfmState.style.display,
flexDirection:twoColumnContainerYgfmState.style.flexDirection,
justifyContent:twoColumnContainerYgfmState.style.justifyContent,
}}
className={`${style.twoColumnContainerYgfm}`}
>
            {/* 容器 */}
            <div
style={{width:containerJydvState.style.width,
height:containerJydvState.style.height,
backgroundColor:containerJydvState.style.backgroundColor,
}}
className={`${style.containerJydv}`}
>
            {/* 容器 */}
            <div
style={{width:containerDufcState.style.width,
height:containerDufcState.style.height,
backgroundColor:containerDufcState.style.backgroundColor,
}}
className={`${style.containerDufc}`}
>
            {/* 两栏容器 */}
            <div
style={{width:twoColumnContainerBgsrState.style.width,
display:twoColumnContainerBgsrState.style.display,
flexDirection:twoColumnContainerBgsrState.style.flexDirection,
}}
className={`${style.twoColumnContainerBgsr}`}
>
            {/* 容器 */}
            <div
style={{width:containerNvmkState.style.width,
}}
className={`${style.containerNvmk}`}
></div>
            {/* 容器 */}
            </div>
            {/* 两栏容器 */}
            </div>
            {/* 容器 */}
            
            {/* 两栏容器 */}
            <div
style={{width:twoColumnContainerIcfkState.style.width,
display:twoColumnContainerIcfkState.style.display,
flexDirection:twoColumnContainerIcfkState.style.flexDirection,
}}
className={`${style.twoColumnContainerIcfk}`}
>
            {/* 两栏容器 */}
            <div
style={{width:twoColumnContainerCarpState.style.width,
display:twoColumnContainerCarpState.style.display,
marginTop:twoColumnContainerCarpState.style.marginTop,
flexDirection:twoColumnContainerCarpState.style.flexDirection,
}}
className={`${style.twoColumnContainerCarp}`}
>
            {/* 系统名称 */}
            <div
style={{gap:systemNameYvpnState.style.gap,
color:systemNameYvpnState.style.color,
width:systemNameYvpnState.style.width,
height:systemNameYvpnState.style.height,
display:systemNameYvpnState.style.display,
fontSize:systemNameYvpnState.style.fontSize,
textAlign:systemNameYvpnState.style.textAlign,
alignItems:systemNameYvpnState.style.alignItems,
borderColor:systemNameYvpnState.style.borderColor,
borderStyle:systemNameYvpnState.style.borderStyle,
flexDirection:systemNameYvpnState.style.flexDirection,
justifyContent:systemNameYvpnState.style.justifyContent,
backgroundColor:systemNameYvpnState.style.backgroundColor,
borderBottomWidth:systemNameYvpnState.style.borderBottomWidth,
}}
className={`${style.systemNameYvpn}`}
>
            {/* 系统名称 */}
            <Antd.Typography.Text
code={systemNameXcedState.code}
mark={systemNameXcedState.mark}
type={systemNameXcedState.type}
delete={systemNameXcedState.delete}
italic={systemNameXcedState.italic}
strong={systemNameXcedState.strong}
children={systemNameXcedState.children}
copyable={systemNameXcedState.copyable}
disabled={systemNameXcedState.disabled}
editable={systemNameXcedState.editable}
ellipsis={systemNameXcedState.ellipsis}
keyboard={systemNameXcedState.keyboard}
underline={systemNameXcedState.underline}
style={{color:systemNameXcedState.style.color,
display:systemNameXcedState.style.display,
fontSize:systemNameXcedState.style.fontSize,
textAlign:systemNameXcedState.style.textAlign,
alignItems:systemNameXcedState.style.alignItems,
fontWeight:systemNameXcedState.style.fontWeight,
justifyContent:systemNameXcedState.style.justifyContent,
}}
className={`${style.systemNameXced}`}
></Antd.Typography.Text>
            {/* 系统名称 */}
            </div>
            {/* 系统名称 */}
            
            {/* 容器 */}
            <div
style={{width:containerCgpsState.style.width,
height:containerCgpsState.style.height,
display:containerCgpsState.style.display,
flexWrap:containerCgpsState.style.flexWrap,
alignItems:containerCgpsState.style.alignItems,
borderColor:containerCgpsState.style.borderColor,
borderStyle:containerCgpsState.style.borderStyle,
flexDirection:containerCgpsState.style.flexDirection,
justifyContent:containerCgpsState.style.justifyContent,
backgroundColor:containerCgpsState.style.backgroundColor,
}}
className={`${style.containerCgps}`}
>
            {/* 图标 */}
            <AntdIcon.UserOutlined
spin={iconCekmState.spin}
rotate={iconCekmState.rotate}
twoToneColor={iconCekmState.twoToneColor}
style={{color:iconCekmState.style.color,
width:iconCekmState.style.width,
height:iconCekmState.style.height,
fontSize:iconCekmState.style.fontSize,
marginTop:iconCekmState.style.marginTop,
fontWeight:iconCekmState.style.fontWeight,
marginRight:iconCekmState.style.marginRight,
}}
className={`${style.iconCekm}`}
></AntdIcon.UserOutlined>
            {/* 图标 */}
            
            {/* 退出按钮 */}
            <Antd.Button
icon={exitButtonUyueState.icon}
size={exitButtonUyueState.size}
type={exitButtonUyueState.type}
ghost={exitButtonUyueState.ghost}
shape={exitButtonUyueState.shape}
danger={exitButtonUyueState.danger}
loading={exitButtonUyueState.loading}
children={exitButtonUyueState.children}
disabled={exitButtonUyueState.disabled}
style={{fontSize:exitButtonUyueState.style.fontSize,
fontWeight:exitButtonUyueState.style.fontWeight,
marginRight:exitButtonUyueState.style.marginRight,
marginBottom:exitButtonUyueState.style.marginBottom,
backgroundColor:exitButtonUyueState.style.backgroundColor,
}}
className={`${style.exitButtonUyue}`}
onClick={(eventMqvl,) =>clickExitButtonZkol(eventMqvl,)}></Antd.Button>
            {/* 退出按钮 */}
            </div>
            {/* 容器 */}
            </div>
            {/* 两栏容器 */}
            </div>
            {/* 两栏容器 */}
            </div>
            {/* 容器 */}
            
            {/* 档号前缀 */}
            <div
style={{width:fileNumberPrefixQxmeState.style.width,
height:fileNumberPrefixQxmeState.style.height,
display:fileNumberPrefixQxmeState.style.display,
borderColor:fileNumberPrefixQxmeState.style.borderColor,
borderStyle:fileNumberPrefixQxmeState.style.borderStyle,
paddingLeft:fileNumberPrefixQxmeState.style.paddingLeft,
paddingRight:fileNumberPrefixQxmeState.style.paddingRight,
flexDirection:fileNumberPrefixQxmeState.style.flexDirection,
backgroundColor:fileNumberPrefixQxmeState.style.backgroundColor,
}}
className={`${style.fileNumberPrefixQxme}`}
>
            {/* 行 */}
            <div
style={{width:thatOkState.style.width,
height:thatOkState.style.height,
display:thatOkState.style.display,
marginTop:thatOkState.style.marginTop,
marginBottom:thatOkState.style.marginBottom,
justifyContent:thatOkState.style.justifyContent,
borderTopLeftRadius:thatOkState.style.borderTopLeftRadius,
borderTopRightRadius:thatOkState.style.borderTopRightRadius,
borderBottomLeftRadius:thatOkState.style.borderBottomLeftRadius,
borderBottomRightRadius:thatOkState.style.borderBottomRightRadius,
}}
className={`${style.thatOk}`}
>
            {/* 电子文件号前缀 */}
            <div
style={{width:electronicFileNumberPrefixVrxhState.style.width,
height:electronicFileNumberPrefixVrxhState.style.height,
display:electronicFileNumberPrefixVrxhState.style.display,
alignItems:electronicFileNumberPrefixVrxhState.style.alignItems,
marginRight:electronicFileNumberPrefixVrxhState.style.marginRight,
justifyContent:electronicFileNumberPrefixVrxhState.style.justifyContent,
backgroundColor:electronicFileNumberPrefixVrxhState.style.backgroundColor,
borderTopLeftRadius:electronicFileNumberPrefixVrxhState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumberPrefixVrxhState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumberPrefixVrxhState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumberPrefixVrxhState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumberPrefixVrxh}`}
>
            {/* 电子文件号前缀 */}
            <Antd.Typography.Text
code={electronicFileNumberPrefixState.code}
mark={electronicFileNumberPrefixState.mark}
type={electronicFileNumberPrefixState.type}
delete={electronicFileNumberPrefixState.delete}
italic={electronicFileNumberPrefixState.italic}
strong={electronicFileNumberPrefixState.strong}
children={electronicFileNumberPrefixState.children}
copyable={electronicFileNumberPrefixState.copyable}
disabled={electronicFileNumberPrefixState.disabled}
editable={electronicFileNumberPrefixState.editable}
ellipsis={electronicFileNumberPrefixState.ellipsis}
keyboard={electronicFileNumberPrefixState.keyboard}
underline={electronicFileNumberPrefixState.underline}
style={{gap:electronicFileNumberPrefixState.style.gap,
color:electronicFileNumberPrefixState.style.color,
width:electronicFileNumberPrefixState.style.width,
height:electronicFileNumberPrefixState.style.height,
display:electronicFileNumberPrefixState.style.display,
fontSize:electronicFileNumberPrefixState.style.fontSize,
textAlign:electronicFileNumberPrefixState.style.textAlign,
alignItems:electronicFileNumberPrefixState.style.alignItems,
marginRight:electronicFileNumberPrefixState.style.marginRight,
flexDirection:electronicFileNumberPrefixState.style.flexDirection,
justifyContent:electronicFileNumberPrefixState.style.justifyContent,
}}
className={`${style.electronicFileNumberPrefix}`}
></Antd.Typography.Text>
            {/* 电子文件号前缀 */}
            
            {/* 选择器-单选 */}
            <Antd.Select
size={chooserRadioState.size}
value={chooserRadioState.value}
options={[]}
bordered={chooserRadioState.bordered}
disabled={chooserRadioState.disabled}
autoFocus={chooserRadioState.autoFocus}
clearIcon={chooserRadioState.clearIcon}
placement={chooserRadioState.placement}
allowClear={chooserRadioState.allowClear}
fieldNames={chooserRadioState.fieldNames}
suffixIcon={chooserRadioState.suffixIcon}
defaultOpen={chooserRadioState.defaultOpen}
placeholder={chooserRadioState.placeholder}
defaultValue={chooserRadioState.defaultValue}
notFoundContent={chooserRadioState.notFoundContent}
popupMatchSelectWidth={chooserRadioState.popupMatchSelectWidth}
defaultActiveFirstOption={chooserRadioState.defaultActiveFirstOption}
style={{width:chooserRadioState.style.width,
height:chooserRadioState.style.height,
borderColor:chooserRadioState.style.borderColor,
borderStyle:chooserRadioState.style.borderStyle,
marginRight:chooserRadioState.style.marginRight,
borderTopWidth:chooserRadioState.style.borderTopWidth,
borderLeftWidth:chooserRadioState.style.borderLeftWidth,
borderRightWidth:chooserRadioState.style.borderRightWidth,
borderBottomWidth:chooserRadioState.style.borderBottomWidth,
}}
className={`${style.chooserRadio}`}
></Antd.Select>
            {/* 选择器-单选 */}
            </div>
            {/* 电子文件号前缀 */}
            
            {/* 档号前缀 */}
            <div
style={{width:fileNumberPrefixYoayState.style.width,
height:fileNumberPrefixYoayState.style.height,
display:fileNumberPrefixYoayState.style.display,
backgroundColor:fileNumberPrefixYoayState.style.backgroundColor,
borderTopLeftRadius:fileNumberPrefixYoayState.style.borderTopLeftRadius,
borderTopRightRadius:fileNumberPrefixYoayState.style.borderTopRightRadius,
borderBottomLeftRadius:fileNumberPrefixYoayState.style.borderBottomLeftRadius,
borderBottomRightRadius:fileNumberPrefixYoayState.style.borderBottomRightRadius,
}}
className={`${style.fileNumberPrefixYoay}`}
>
            {/* 档号前缀 */}
            <Antd.Typography.Text
code={fileNumberPrefixCvvcState.code}
mark={fileNumberPrefixCvvcState.mark}
type={fileNumberPrefixCvvcState.type}
delete={fileNumberPrefixCvvcState.delete}
italic={fileNumberPrefixCvvcState.italic}
strong={fileNumberPrefixCvvcState.strong}
children={fileNumberPrefixCvvcState.children}
copyable={fileNumberPrefixCvvcState.copyable}
disabled={fileNumberPrefixCvvcState.disabled}
editable={fileNumberPrefixCvvcState.editable}
ellipsis={fileNumberPrefixCvvcState.ellipsis}
keyboard={fileNumberPrefixCvvcState.keyboard}
underline={fileNumberPrefixCvvcState.underline}
style={{color:fileNumberPrefixCvvcState.style.color,
width:fileNumberPrefixCvvcState.style.width,
height:fileNumberPrefixCvvcState.style.height,
display:fileNumberPrefixCvvcState.style.display,
fontSize:fileNumberPrefixCvvcState.style.fontSize,
alignItems:fileNumberPrefixCvvcState.style.alignItems,
marginRight:fileNumberPrefixCvvcState.style.marginRight,
justifyContent:fileNumberPrefixCvvcState.style.justifyContent,
}}
className={`${style.fileNumberPrefixCvvc}`}
></Antd.Typography.Text>
            {/* 档号前缀 */}
            
            {/* 选择器-单选1 */}
            <Antd.Select
size={chooserRadioUslgState.size}
value={chooserRadioUslgState.value}
options={[]}
bordered={chooserRadioUslgState.bordered}
disabled={chooserRadioUslgState.disabled}
autoFocus={chooserRadioUslgState.autoFocus}
clearIcon={chooserRadioUslgState.clearIcon}
placement={chooserRadioUslgState.placement}
allowClear={chooserRadioUslgState.allowClear}
fieldNames={chooserRadioUslgState.fieldNames}
suffixIcon={chooserRadioUslgState.suffixIcon}
defaultOpen={chooserRadioUslgState.defaultOpen}
placeholder={chooserRadioUslgState.placeholder}
defaultValue={chooserRadioUslgState.defaultValue}
notFoundContent={chooserRadioUslgState.notFoundContent}
popupMatchSelectWidth={chooserRadioUslgState.popupMatchSelectWidth}
defaultActiveFirstOption={chooserRadioUslgState.defaultActiveFirstOption}
style={{width:chooserRadioUslgState.style.width,
height:chooserRadioUslgState.style.height,
}}
className={`${style.chooserRadioUslg}`}
></Antd.Select>
            {/* 选择器-单选1 */}
            </div>
            {/* 档号前缀 */}
            </div>
            {/* 行 */}
            
            {/* 行1 */}
            <div
style={{width:thatOk1State.style.width,
height:thatOk1State.style.height,
display:thatOk1State.style.display,
marginTop:thatOk1State.style.marginTop,
marginLeft:thatOk1State.style.marginLeft,
marginBottom:thatOk1State.style.marginBottom,
borderTopLeftRadius:thatOk1State.style.borderTopLeftRadius,
borderTopRightRadius:thatOk1State.style.borderTopRightRadius,
borderBottomLeftRadius:thatOk1State.style.borderBottomLeftRadius,
borderBottomRightRadius:thatOk1State.style.borderBottomRightRadius,
}}
className={`${style.thatOk1}`}
>
            {/* 全宗号 */}
            <div
style={{width:completeAccountNumberState.style.width,
height:completeAccountNumberState.style.height,
display:completeAccountNumberState.style.display,
marginLeft:completeAccountNumberState.style.marginLeft,
marginRight:completeAccountNumberState.style.marginRight,
backgroundColor:completeAccountNumberState.style.backgroundColor,
borderTopLeftRadius:completeAccountNumberState.style.borderTopLeftRadius,
borderTopRightRadius:completeAccountNumberState.style.borderTopRightRadius,
borderBottomLeftRadius:completeAccountNumberState.style.borderBottomLeftRadius,
borderBottomRightRadius:completeAccountNumberState.style.borderBottomRightRadius,
}}
className={`${style.completeAccountNumber}`}
>
            {/* 全宗号 */}
            <Antd.Typography.Text
code={completeAccountNumberUdftState.code}
mark={completeAccountNumberUdftState.mark}
type={completeAccountNumberUdftState.type}
delete={completeAccountNumberUdftState.delete}
italic={completeAccountNumberUdftState.italic}
strong={completeAccountNumberUdftState.strong}
children={completeAccountNumberUdftState.children}
copyable={completeAccountNumberUdftState.copyable}
disabled={completeAccountNumberUdftState.disabled}
editable={completeAccountNumberUdftState.editable}
ellipsis={completeAccountNumberUdftState.ellipsis}
keyboard={completeAccountNumberUdftState.keyboard}
underline={completeAccountNumberUdftState.underline}
style={{gap:completeAccountNumberUdftState.style.gap,
color:completeAccountNumberUdftState.style.color,
width:completeAccountNumberUdftState.style.width,
height:completeAccountNumberUdftState.style.height,
display:completeAccountNumberUdftState.style.display,
fontSize:completeAccountNumberUdftState.style.fontSize,
textAlign:completeAccountNumberUdftState.style.textAlign,
alignItems:completeAccountNumberUdftState.style.alignItems,
marginRight:completeAccountNumberUdftState.style.marginRight,
flexDirection:completeAccountNumberUdftState.style.flexDirection,
justifyContent:completeAccountNumberUdftState.style.justifyContent,
}}
className={`${style.completeAccountNumberUdft}`}
></Antd.Typography.Text>
            {/* 全宗号 */}
            
            {/* 输入框 */}
            <Antd.Input
size={inputBoxAlrfState.size}
prefix={inputBoxAlrfState.prefix}
bordered={inputBoxAlrfState.bordered}
disabled={inputBoxAlrfState.disabled}
maxLength={inputBoxAlrfState.maxLength}
showCount={inputBoxAlrfState.showCount}
addonAfter={inputBoxAlrfState.addonAfter}
allowClear={inputBoxAlrfState.allowClear}
addonBefore={inputBoxAlrfState.addonBefore}
placeholder={inputBoxAlrfState.placeholder}
defaultValue={inputBoxAlrfState.defaultValue}
style={{width:inputBoxAlrfState.style.width,
}}
className={`${style.inputBoxAlrf}`}
></Antd.Input>
            {/* 输入框 */}
            </div>
            {/* 全宗号 */}
            </div>
            {/* 行1 */}
            
            {/* 块 */}
            <div
style={{marginTop:blockState.style.marginTop,
marginLeft:blockState.style.marginLeft,
}}
className={`${style.block}`}
>
            {/* 类别号 */}
            <Antd.Typography.Text
code={categoryNumberState.code}
mark={categoryNumberState.mark}
type={categoryNumberState.type}
delete={categoryNumberState.delete}
italic={categoryNumberState.italic}
strong={categoryNumberState.strong}
children={categoryNumberState.children}
copyable={categoryNumberState.copyable}
disabled={categoryNumberState.disabled}
editable={categoryNumberState.editable}
ellipsis={categoryNumberState.ellipsis}
keyboard={categoryNumberState.keyboard}
underline={categoryNumberState.underline}
style={{color:categoryNumberState.style.color,
fontSize:categoryNumberState.style.fontSize,
}}
className={`${style.categoryNumber}`}
></Antd.Typography.Text>
            {/* 类别号 */}
            
            {/* 块1-行1 */}
            <div
style={{width:block1Row1State.style.width,
height:block1Row1State.style.height,
display:block1Row1State.style.display,
marginTop:block1Row1State.style.marginTop,
marginBottom:block1Row1State.style.marginBottom,
borderTopLeftRadius:block1Row1State.style.borderTopLeftRadius,
borderTopRightRadius:block1Row1State.style.borderTopRightRadius,
borderBottomLeftRadius:block1Row1State.style.borderBottomLeftRadius,
borderBottomRightRadius:block1Row1State.style.borderBottomRightRadius,
}}
className={`${style.block1Row1}`}
>
            {/* 一级类别号（档案门类代码） */}
            <div
style={{width:theFirstResortTzgkState.style.width,
height:theFirstResortTzgkState.style.height,
display:theFirstResortTzgkState.style.display,
marginRight:theFirstResortTzgkState.style.marginRight,
backgroundColor:theFirstResortTzgkState.style.backgroundColor,
borderTopLeftRadius:theFirstResortTzgkState.style.borderTopLeftRadius,
borderTopRightRadius:theFirstResortTzgkState.style.borderTopRightRadius,
borderBottomLeftRadius:theFirstResortTzgkState.style.borderBottomLeftRadius,
borderBottomRightRadius:theFirstResortTzgkState.style.borderBottomRightRadius,
}}
className={`${style.theFirstResortTzgk}`}
>
            {/* 一级类别号（档案门类代码） */}
            <Antd.Typography.Text
code={theFirstResortLiceState.code}
mark={theFirstResortLiceState.mark}
type={theFirstResortLiceState.type}
delete={theFirstResortLiceState.delete}
italic={theFirstResortLiceState.italic}
strong={theFirstResortLiceState.strong}
children={theFirstResortLiceState.children}
copyable={theFirstResortLiceState.copyable}
disabled={theFirstResortLiceState.disabled}
editable={theFirstResortLiceState.editable}
ellipsis={theFirstResortLiceState.ellipsis}
keyboard={theFirstResortLiceState.keyboard}
underline={theFirstResortLiceState.underline}
style={{gap:theFirstResortLiceState.style.gap,
color:theFirstResortLiceState.style.color,
width:theFirstResortLiceState.style.width,
height:theFirstResortLiceState.style.height,
display:theFirstResortLiceState.style.display,
fontSize:theFirstResortLiceState.style.fontSize,
textAlign:theFirstResortLiceState.style.textAlign,
alignItems:theFirstResortLiceState.style.alignItems,
marginRight:theFirstResortLiceState.style.marginRight,
flexDirection:theFirstResortLiceState.style.flexDirection,
justifyContent:theFirstResortLiceState.style.justifyContent,
}}
className={`${style.theFirstResortLice}`}
></Antd.Typography.Text>
            {/* 一级类别号（档案门类代码） */}
            
            {/* 选择器-单选1 */}
            <Antd.Select
size={chooserRadioTpssState.size}
value={chooserRadioTpssState.value}
options={[]}
bordered={chooserRadioTpssState.bordered}
disabled={chooserRadioTpssState.disabled}
autoFocus={chooserRadioTpssState.autoFocus}
clearIcon={chooserRadioTpssState.clearIcon}
placement={chooserRadioTpssState.placement}
allowClear={chooserRadioTpssState.allowClear}
fieldNames={chooserRadioTpssState.fieldNames}
suffixIcon={chooserRadioTpssState.suffixIcon}
defaultOpen={chooserRadioTpssState.defaultOpen}
placeholder={chooserRadioTpssState.placeholder}
defaultValue={chooserRadioTpssState.defaultValue}
notFoundContent={chooserRadioTpssState.notFoundContent}
popupMatchSelectWidth={chooserRadioTpssState.popupMatchSelectWidth}
defaultActiveFirstOption={chooserRadioTpssState.defaultActiveFirstOption}
style={{width:chooserRadioTpssState.style.width,
height:chooserRadioTpssState.style.height,
}}
className={`${style.chooserRadioTpss}`}
></Antd.Select>
            {/* 选择器-单选1 */}
            </div>
            {/* 一级类别号（档案门类代码） */}
            
            {/* 二级及三级类别号 */}
            <div
style={{width:secondaryAndTertiaryCategoryNumbersButqState.style.width,
height:secondaryAndTertiaryCategoryNumbersButqState.style.height,
display:secondaryAndTertiaryCategoryNumbersButqState.style.display,
backgroundColor:secondaryAndTertiaryCategoryNumbersButqState.style.backgroundColor,
borderTopLeftRadius:secondaryAndTertiaryCategoryNumbersButqState.style.borderTopLeftRadius,
borderTopRightRadius:secondaryAndTertiaryCategoryNumbersButqState.style.borderTopRightRadius,
borderBottomLeftRadius:secondaryAndTertiaryCategoryNumbersButqState.style.borderBottomLeftRadius,
borderBottomRightRadius:secondaryAndTertiaryCategoryNumbersButqState.style.borderBottomRightRadius,
}}
className={`${style.secondaryAndTertiaryCategoryNumbersButq}`}
>
            {/* 二级及三级类别号 */}
            <Antd.Typography.Text
code={secondaryAndTertiaryCategoryNumbersState.code}
mark={secondaryAndTertiaryCategoryNumbersState.mark}
type={secondaryAndTertiaryCategoryNumbersState.type}
delete={secondaryAndTertiaryCategoryNumbersState.delete}
italic={secondaryAndTertiaryCategoryNumbersState.italic}
strong={secondaryAndTertiaryCategoryNumbersState.strong}
children={secondaryAndTertiaryCategoryNumbersState.children}
copyable={secondaryAndTertiaryCategoryNumbersState.copyable}
disabled={secondaryAndTertiaryCategoryNumbersState.disabled}
editable={secondaryAndTertiaryCategoryNumbersState.editable}
ellipsis={secondaryAndTertiaryCategoryNumbersState.ellipsis}
keyboard={secondaryAndTertiaryCategoryNumbersState.keyboard}
underline={secondaryAndTertiaryCategoryNumbersState.underline}
style={{color:secondaryAndTertiaryCategoryNumbersState.style.color,
width:secondaryAndTertiaryCategoryNumbersState.style.width,
height:secondaryAndTertiaryCategoryNumbersState.style.height,
display:secondaryAndTertiaryCategoryNumbersState.style.display,
fontSize:secondaryAndTertiaryCategoryNumbersState.style.fontSize,
alignItems:secondaryAndTertiaryCategoryNumbersState.style.alignItems,
marginRight:secondaryAndTertiaryCategoryNumbersState.style.marginRight,
justifyContent:secondaryAndTertiaryCategoryNumbersState.style.justifyContent,
}}
className={`${style.secondaryAndTertiaryCategoryNumbers}`}
></Antd.Typography.Text>
            {/* 二级及三级类别号 */}
            
            {/* 请输入二级及三级类别号 */}
            <Antd.Input
size={pleaseEnterTheSecondAndThirdLevelCategoryNumbersState.size}
value={pleaseEnterTheSecondAndThirdLevelCategoryNumbersState.value}
prefix={pleaseEnterTheSecondAndThirdLevelCategoryNumbersState.prefix}
bordered={pleaseEnterTheSecondAndThirdLevelCategoryNumbersState.bordered}
disabled={pleaseEnterTheSecondAndThirdLevelCategoryNumbersState.disabled}
maxLength={pleaseEnterTheSecondAndThirdLevelCategoryNumbersState.maxLength}
showCount={pleaseEnterTheSecondAndThirdLevelCategoryNumbersState.showCount}
addonAfter={pleaseEnterTheSecondAndThirdLevelCategoryNumbersState.addonAfter}
allowClear={pleaseEnterTheSecondAndThirdLevelCategoryNumbersState.allowClear}
addonBefore={pleaseEnterTheSecondAndThirdLevelCategoryNumbersState.addonBefore}
placeholder={pleaseEnterTheSecondAndThirdLevelCategoryNumbersState.placeholder}
defaultValue={pleaseEnterTheSecondAndThirdLevelCategoryNumbersState.defaultValue}
style={{}}
className={`${style.pleaseEnterTheSecondAndThirdLevelCategoryNumbers}`}
></Antd.Input>
            {/* 请输入二级及三级类别号 */}
            </div>
            {/* 二级及三级类别号 */}
            </div>
            {/* 块1-行1 */}
            
            {/* 块1-行2 */}
            <div
style={{width:block1Row2State.style.width,
height:block1Row2State.style.height,
display:block1Row2State.style.display,
marginTop:block1Row2State.style.marginTop,
marginBottom:block1Row2State.style.marginBottom,
borderTopLeftRadius:block1Row2State.style.borderTopLeftRadius,
borderTopRightRadius:block1Row2State.style.borderTopRightRadius,
borderBottomLeftRadius:block1Row2State.style.borderBottomLeftRadius,
borderBottomRightRadius:block1Row2State.style.borderBottomRightRadius,
}}
className={`${style.block1Row2}`}
>
            {/* 年度 */}
            <div
style={{width:yearDuskState.style.width,
height:yearDuskState.style.height,
display:yearDuskState.style.display,
marginRight:yearDuskState.style.marginRight,
backgroundColor:yearDuskState.style.backgroundColor,
borderTopLeftRadius:yearDuskState.style.borderTopLeftRadius,
borderTopRightRadius:yearDuskState.style.borderTopRightRadius,
borderBottomLeftRadius:yearDuskState.style.borderBottomLeftRadius,
borderBottomRightRadius:yearDuskState.style.borderBottomRightRadius,
}}
className={`${style.yearDusk}`}
>
            {/* 年度 */}
            <Antd.Typography.Text
code={yearState.code}
mark={yearState.mark}
type={yearState.type}
delete={yearState.delete}
italic={yearState.italic}
strong={yearState.strong}
children={yearState.children}
copyable={yearState.copyable}
disabled={yearState.disabled}
editable={yearState.editable}
ellipsis={yearState.ellipsis}
keyboard={yearState.keyboard}
underline={yearState.underline}
style={{gap:yearState.style.gap,
color:yearState.style.color,
width:yearState.style.width,
height:yearState.style.height,
display:yearState.style.display,
fontSize:yearState.style.fontSize,
textAlign:yearState.style.textAlign,
alignItems:yearState.style.alignItems,
marginRight:yearState.style.marginRight,
flexDirection:yearState.style.flexDirection,
justifyContent:yearState.style.justifyContent,
}}
className={`${style.year}`}
></Antd.Typography.Text>
            {/* 年度 */}
            
            {/* 请输入年度 */}
            <Antd.Input
size={pleaseEnterTheYearState.size}
value={pleaseEnterTheYearState.value}
prefix={pleaseEnterTheYearState.prefix}
bordered={pleaseEnterTheYearState.bordered}
disabled={pleaseEnterTheYearState.disabled}
maxLength={pleaseEnterTheYearState.maxLength}
showCount={pleaseEnterTheYearState.showCount}
addonAfter={pleaseEnterTheYearState.addonAfter}
allowClear={pleaseEnterTheYearState.allowClear}
addonBefore={pleaseEnterTheYearState.addonBefore}
placeholder={pleaseEnterTheYearState.placeholder}
defaultValue={pleaseEnterTheYearState.defaultValue}
style={{width:pleaseEnterTheYearState.style.width,
}}
className={`${style.pleaseEnterTheYear}`}
></Antd.Input>
            {/* 请输入年度 */}
            </div>
            {/* 年度 */}
            
            {/* 保管期限代码 */}
            <div
style={{width:storagePeriodCodeState.style.width,
height:storagePeriodCodeState.style.height,
display:storagePeriodCodeState.style.display,
backgroundColor:storagePeriodCodeState.style.backgroundColor,
borderTopLeftRadius:storagePeriodCodeState.style.borderTopLeftRadius,
borderTopRightRadius:storagePeriodCodeState.style.borderTopRightRadius,
borderBottomLeftRadius:storagePeriodCodeState.style.borderBottomLeftRadius,
borderBottomRightRadius:storagePeriodCodeState.style.borderBottomRightRadius,
}}
className={`${style.storagePeriodCode}`}
>
            {/* 保管期限代码 */}
            <Antd.Typography.Text
code={storagePeriodCodeGobuState.code}
mark={storagePeriodCodeGobuState.mark}
type={storagePeriodCodeGobuState.type}
delete={storagePeriodCodeGobuState.delete}
italic={storagePeriodCodeGobuState.italic}
strong={storagePeriodCodeGobuState.strong}
children={storagePeriodCodeGobuState.children}
copyable={storagePeriodCodeGobuState.copyable}
disabled={storagePeriodCodeGobuState.disabled}
editable={storagePeriodCodeGobuState.editable}
ellipsis={storagePeriodCodeGobuState.ellipsis}
keyboard={storagePeriodCodeGobuState.keyboard}
underline={storagePeriodCodeGobuState.underline}
style={{color:storagePeriodCodeGobuState.style.color,
width:storagePeriodCodeGobuState.style.width,
height:storagePeriodCodeGobuState.style.height,
display:storagePeriodCodeGobuState.style.display,
fontSize:storagePeriodCodeGobuState.style.fontSize,
alignItems:storagePeriodCodeGobuState.style.alignItems,
marginRight:storagePeriodCodeGobuState.style.marginRight,
justifyContent:storagePeriodCodeGobuState.style.justifyContent,
}}
className={`${style.storagePeriodCodeGobu}`}
></Antd.Typography.Text>
            {/* 保管期限代码 */}
            
            {/* 请输入保管期限代码 */}
            <Antd.Input
size={pleaseEnterTheStoragePeriodCodeState.size}
value={pleaseEnterTheStoragePeriodCodeState.value}
prefix={pleaseEnterTheStoragePeriodCodeState.prefix}
bordered={pleaseEnterTheStoragePeriodCodeState.bordered}
disabled={pleaseEnterTheStoragePeriodCodeState.disabled}
maxLength={pleaseEnterTheStoragePeriodCodeState.maxLength}
showCount={pleaseEnterTheStoragePeriodCodeState.showCount}
addonAfter={pleaseEnterTheStoragePeriodCodeState.addonAfter}
allowClear={pleaseEnterTheStoragePeriodCodeState.allowClear}
addonBefore={pleaseEnterTheStoragePeriodCodeState.addonBefore}
placeholder={pleaseEnterTheStoragePeriodCodeState.placeholder}
defaultValue={pleaseEnterTheStoragePeriodCodeState.defaultValue}
style={{}}
className={`${style.pleaseEnterTheStoragePeriodCode}`}
></Antd.Input>
            {/* 请输入保管期限代码 */}
            </div>
            {/* 保管期限代码 */}
            </div>
            {/* 块1-行2 */}
            
            {/* 块1-行3 */}
            <div
style={{width:block1Line3State.style.width,
height:block1Line3State.style.height,
display:block1Line3State.style.display,
marginTop:block1Line3State.style.marginTop,
marginBottom:block1Line3State.style.marginBottom,
borderTopLeftRadius:block1Line3State.style.borderTopLeftRadius,
borderTopRightRadius:block1Line3State.style.borderTopRightRadius,
borderBottomLeftRadius:block1Line3State.style.borderBottomLeftRadius,
borderBottomRightRadius:block1Line3State.style.borderBottomRightRadius,
}}
className={`${style.block1Line3}`}
>
            {/* 机构问题代码 */}
            <div
style={{width:institutionalIssueCodeIiwuState.style.width,
height:institutionalIssueCodeIiwuState.style.height,
display:institutionalIssueCodeIiwuState.style.display,
marginRight:institutionalIssueCodeIiwuState.style.marginRight,
backgroundColor:institutionalIssueCodeIiwuState.style.backgroundColor,
borderTopLeftRadius:institutionalIssueCodeIiwuState.style.borderTopLeftRadius,
borderTopRightRadius:institutionalIssueCodeIiwuState.style.borderTopRightRadius,
borderBottomLeftRadius:institutionalIssueCodeIiwuState.style.borderBottomLeftRadius,
borderBottomRightRadius:institutionalIssueCodeIiwuState.style.borderBottomRightRadius,
}}
className={`${style.institutionalIssueCodeIiwu}`}
>
            {/* 机构问题代码 */}
            <Antd.Typography.Text
code={institutionalIssueCodeState.code}
mark={institutionalIssueCodeState.mark}
type={institutionalIssueCodeState.type}
delete={institutionalIssueCodeState.delete}
italic={institutionalIssueCodeState.italic}
strong={institutionalIssueCodeState.strong}
children={institutionalIssueCodeState.children}
copyable={institutionalIssueCodeState.copyable}
disabled={institutionalIssueCodeState.disabled}
editable={institutionalIssueCodeState.editable}
ellipsis={institutionalIssueCodeState.ellipsis}
keyboard={institutionalIssueCodeState.keyboard}
underline={institutionalIssueCodeState.underline}
style={{gap:institutionalIssueCodeState.style.gap,
color:institutionalIssueCodeState.style.color,
width:institutionalIssueCodeState.style.width,
height:institutionalIssueCodeState.style.height,
display:institutionalIssueCodeState.style.display,
fontSize:institutionalIssueCodeState.style.fontSize,
textAlign:institutionalIssueCodeState.style.textAlign,
alignItems:institutionalIssueCodeState.style.alignItems,
marginRight:institutionalIssueCodeState.style.marginRight,
flexDirection:institutionalIssueCodeState.style.flexDirection,
justifyContent:institutionalIssueCodeState.style.justifyContent,
}}
className={`${style.institutionalIssueCode}`}
></Antd.Typography.Text>
            {/* 机构问题代码 */}
            
            {/* 请输入机构问题代码 */}
            <Antd.Input
size={pleaseEnterTheInstitutionalIssueCodeState.size}
value={pleaseEnterTheInstitutionalIssueCodeState.value}
prefix={pleaseEnterTheInstitutionalIssueCodeState.prefix}
bordered={pleaseEnterTheInstitutionalIssueCodeState.bordered}
disabled={pleaseEnterTheInstitutionalIssueCodeState.disabled}
maxLength={pleaseEnterTheInstitutionalIssueCodeState.maxLength}
showCount={pleaseEnterTheInstitutionalIssueCodeState.showCount}
addonAfter={pleaseEnterTheInstitutionalIssueCodeState.addonAfter}
allowClear={pleaseEnterTheInstitutionalIssueCodeState.allowClear}
addonBefore={pleaseEnterTheInstitutionalIssueCodeState.addonBefore}
placeholder={pleaseEnterTheInstitutionalIssueCodeState.placeholder}
defaultValue={pleaseEnterTheInstitutionalIssueCodeState.defaultValue}
style={{width:pleaseEnterTheInstitutionalIssueCodeState.style.width,
}}
className={`${style.pleaseEnterTheInstitutionalIssueCode}`}
></Antd.Input>
            {/* 请输入机构问题代码 */}
            </div>
            {/* 机构问题代码 */}
            
            {/* 主题 */}
            <div
style={{width:themeLmoqState.style.width,
height:themeLmoqState.style.height,
display:themeLmoqState.style.display,
backgroundColor:themeLmoqState.style.backgroundColor,
borderTopLeftRadius:themeLmoqState.style.borderTopLeftRadius,
borderTopRightRadius:themeLmoqState.style.borderTopRightRadius,
borderBottomLeftRadius:themeLmoqState.style.borderBottomLeftRadius,
borderBottomRightRadius:themeLmoqState.style.borderBottomRightRadius,
}}
className={`${style.themeLmoq}`}
>
            {/* 主题 */}
            <Antd.Typography.Text
code={themeState.code}
mark={themeState.mark}
type={themeState.type}
delete={themeState.delete}
italic={themeState.italic}
strong={themeState.strong}
children={themeState.children}
copyable={themeState.copyable}
disabled={themeState.disabled}
editable={themeState.editable}
ellipsis={themeState.ellipsis}
keyboard={themeState.keyboard}
underline={themeState.underline}
style={{color:themeState.style.color,
width:themeState.style.width,
height:themeState.style.height,
display:themeState.style.display,
fontSize:themeState.style.fontSize,
alignItems:themeState.style.alignItems,
marginRight:themeState.style.marginRight,
justifyContent:themeState.style.justifyContent,
}}
className={`${style.theme}`}
></Antd.Typography.Text>
            {/* 主题 */}
            
            {/* 请输入主题 */}
            <Antd.Input
size={pleaseEnterTheThemeState.size}
value={pleaseEnterTheThemeState.value}
prefix={pleaseEnterTheThemeState.prefix}
bordered={pleaseEnterTheThemeState.bordered}
disabled={pleaseEnterTheThemeState.disabled}
maxLength={pleaseEnterTheThemeState.maxLength}
showCount={pleaseEnterTheThemeState.showCount}
addonAfter={pleaseEnterTheThemeState.addonAfter}
allowClear={pleaseEnterTheThemeState.allowClear}
addonBefore={pleaseEnterTheThemeState.addonBefore}
placeholder={pleaseEnterTheThemeState.placeholder}
defaultValue={pleaseEnterTheThemeState.defaultValue}
style={{}}
className={`${style.pleaseEnterTheTheme}`}
></Antd.Input>
            {/* 请输入主题 */}
            </div>
            {/* 主题 */}
            </div>
            {/* 块1-行3 */}
            
            {/* 块1-行4 */}
            <div
style={{width:block1Row4State.style.width,
height:block1Row4State.style.height,
display:block1Row4State.style.display,
marginTop:block1Row4State.style.marginTop,
marginBottom:block1Row4State.style.marginBottom,
borderTopLeftRadius:block1Row4State.style.borderTopLeftRadius,
borderTopRightRadius:block1Row4State.style.borderTopRightRadius,
borderBottomLeftRadius:block1Row4State.style.borderBottomLeftRadius,
borderBottomRightRadius:block1Row4State.style.borderBottomRightRadius,
}}
className={`${style.block1Row4}`}
>
            {/* 关键词 */}
            <div
style={{width:keywordOlkiState.style.width,
height:keywordOlkiState.style.height,
display:keywordOlkiState.style.display,
marginRight:keywordOlkiState.style.marginRight,
backgroundColor:keywordOlkiState.style.backgroundColor,
borderTopLeftRadius:keywordOlkiState.style.borderTopLeftRadius,
borderTopRightRadius:keywordOlkiState.style.borderTopRightRadius,
borderBottomLeftRadius:keywordOlkiState.style.borderBottomLeftRadius,
borderBottomRightRadius:keywordOlkiState.style.borderBottomRightRadius,
}}
className={`${style.keywordOlki}`}
>
            {/* 关键字 */}
            <Antd.Typography.Text
code={keywordState.code}
mark={keywordState.mark}
type={keywordState.type}
delete={keywordState.delete}
italic={keywordState.italic}
strong={keywordState.strong}
children={keywordState.children}
copyable={keywordState.copyable}
disabled={keywordState.disabled}
editable={keywordState.editable}
ellipsis={keywordState.ellipsis}
keyboard={keywordState.keyboard}
underline={keywordState.underline}
style={{gap:keywordState.style.gap,
color:keywordState.style.color,
width:keywordState.style.width,
height:keywordState.style.height,
display:keywordState.style.display,
fontSize:keywordState.style.fontSize,
textAlign:keywordState.style.textAlign,
alignItems:keywordState.style.alignItems,
marginRight:keywordState.style.marginRight,
flexDirection:keywordState.style.flexDirection,
justifyContent:keywordState.style.justifyContent,
}}
className={`${style.keyword}`}
></Antd.Typography.Text>
            {/* 关键字 */}
            
            {/* 请输入关键字 */}
            <Antd.Input
size={pleaseEnterKeywordsState.size}
value={pleaseEnterKeywordsState.value}
prefix={pleaseEnterKeywordsState.prefix}
bordered={pleaseEnterKeywordsState.bordered}
disabled={pleaseEnterKeywordsState.disabled}
maxLength={pleaseEnterKeywordsState.maxLength}
showCount={pleaseEnterKeywordsState.showCount}
addonAfter={pleaseEnterKeywordsState.addonAfter}
allowClear={pleaseEnterKeywordsState.allowClear}
addonBefore={pleaseEnterKeywordsState.addonBefore}
placeholder={pleaseEnterKeywordsState.placeholder}
defaultValue={pleaseEnterKeywordsState.defaultValue}
style={{width:pleaseEnterKeywordsState.style.width,
}}
className={`${style.pleaseEnterKeywords}`}
></Antd.Input>
            {/* 请输入关键字 */}
            </div>
            {/* 关键词 */}
            </div>
            {/* 块1-行4 */}
            </div>
            {/* 块 */}
            
            {/* 按钮 */}
            <Antd.Button
size={buttonYgjaState.size}
type={buttonYgjaState.type}
ghost={buttonYgjaState.ghost}
shape={buttonYgjaState.shape}
danger={buttonYgjaState.danger}
children={buttonYgjaState.children}
disabled={buttonYgjaState.disabled}
style={{width:buttonYgjaState.style.width,
height:buttonYgjaState.style.height,
fontSize:buttonYgjaState.style.fontSize,
marginTop:buttonYgjaState.style.marginTop,
fontWeight:buttonYgjaState.style.fontWeight,
marginLeft:buttonYgjaState.style.marginLeft,
marginRight:buttonYgjaState.style.marginRight,
borderTopLeftRadius:buttonYgjaState.style.borderTopLeftRadius,
borderTopRightRadius:buttonYgjaState.style.borderTopRightRadius,
borderBottomLeftRadius:buttonYgjaState.style.borderBottomLeftRadius,
borderBottomRightRadius:buttonYgjaState.style.borderBottomRightRadius,
}}
className={`${style.buttonYgja}`}
></Antd.Button>
            {/* 按钮 */}
            </div>
            {/* 档号前缀 */}
            </div>
            {/* 两栏容器 */}
            </div>
            {/* 容器 */}
            </>}
export default FileNumberConfigurationSnft
export { FileNumberConfigurationSnft }