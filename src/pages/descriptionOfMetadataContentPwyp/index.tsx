import style from './index.module.scss'
import { useState } from 'react'
import * as Antd from '@/components/antd'
import { routes } from '@/router/index'
import { getParentInfoList } from '@/utils'
import { useNavigate } from 'react-router-dom'
import * as AntdIcon from '@ant-design/icons'
// 元数据内容描述
              const DescriptionOfMetadataContentPwyp = () => {
const navigate = useNavigate()
// 点击时-档号配置
          const clickToConfigureFileNumberCfdg = (eventEazp,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageDano").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据内容描述
          const whenClickedMetadataContentDescriptionMplz = (eventYjrw,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "page401").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-聚合层次
          const clickOnAggregateHierarchyIkay = (eventFbka,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageVomd").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据形式特征
          const whenClickedMetadataFormatFeaturesJlmb = (eventWdco,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageWcoq").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据存储位置
          const whenClickedMetadataStorageLocationTdqw = (eventCnft,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageDbgh").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据电子签名
          const whenClickedMetadataElectronicSignatureIamq = (eventHlzb,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageWsbf").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-元数据来源
          const whenClickedMetadataSourceTyyt = (eventSxtx,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageGafh").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-档号
          const clickTimeFileNumberXzeu = (eventBiji,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageNfdu").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-生成文件
          const whenClickedGenerateFilePcda = (eventBucz,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageYfhi").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-待审核日志
          const whenClickedPendingAuditLogWanl = (eventLysa,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageZuvc").slice(1).map(item => item.path).join('/')}`)
}
// 点击时-已审核日志
          const whenClickedReviewedLogsDati = (eventLggc,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "pageStsm").slice(1).map(item => item.path).join('/')}`)
}
// 点击-退出按钮
          const clickExitButtonLcof = (eventMdsz,) =>{
// 打开页面
navigate(`/${getParentInfoList(routes, 'path', "defaultPageFhue").slice(1).map(item => item.path).join('/')}`)
}

              // 容器 开始属性
              const [containerXushState, setcontainerXushState] = useState({style:{width:"100vw",
height:"100vh",
display:"flex",
},
})
              // 容器 结束属性
              
              // 导航菜单 开始属性
              const [navigationMenuMokaState, setnavigationMenuMokaState] = useState({mode:"vertical",
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
              const [containerFbzqState, setcontainerFbzqState] = useState({style:{width:"100%",
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
              const [pictureTdckState, setpictureTdckState] = useState({alt:undefined,
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
              const [administratorHomepageTqkwState, setadministratorHomepageTqkwState] = useState({code:false,
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
              const [fileNumberConfigurationZnvuState, setfileNumberConfigurationZnvuState] = useState({key:undefined,
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
              const [fillInMetadataXbugState, setfillInMetadataXbugState] = useState({title:"元数据填写",
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
              const [descriptionOfMetadataContentUsosState, setdescriptionOfMetadataContentUsosState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据内容描述",
disabled:false,
style:{color:"#f0f8ff",
backgroundColor:"#6d8fc0",
},
})
              // 元数据内容描述 结束属性
              
              // 聚合层次 开始属性
              const [aggregationHierarchyApovState, setaggregationHierarchyApovState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"聚合层次",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 聚合层次 结束属性
              
              // 元数据形式特征 开始属性
              const [characteristicsOfMetadataFormatEbfcState, setcharacteristicsOfMetadataFormatEbfcState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据形式特征",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 元数据形式特征 结束属性
              
              // 元数据存储位置 开始属性
              const [metadataStorageLocationTxquState, setmetadataStorageLocationTxquState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据存储位置",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 元数据存储位置 结束属性
              
              // 元数据电子签名 开始属性
              const [metadataElectronicSignatureLzgvState, setmetadataElectronicSignatureLzgvState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据电子签名",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 元数据电子签名 结束属性
              
              // 元数据来源 开始属性
              const [sourceOfMetadataDjydState, setsourceOfMetadataDjydState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"元数据来源",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 元数据来源 结束属性
              
              // 档号 开始属性
              const [referenceIvlhState, setreferenceIvlhState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"档号",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 档号 结束属性
              
              // 生成文件 开始属性
              const [generateFileFdkdState, setgenerateFileFdkdState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"生成文件",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 生成文件 结束属性
              
              // 日志审核 开始属性
              const [logAuditFsicState, setlogAuditFsicState] = useState({title:"日志审核",
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
              const [pendingAuditLogKqarState, setpendingAuditLogKqarState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"待审核日志",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 待审核日志 结束属性
              
              // 已审核日志 开始属性
              const [verifiedLogsSzbvState, setverifiedLogsSzbvState] = useState({key:undefined,
icon:undefined,
danger:false,
children:"已审核日志",
disabled:false,
style:{color:"#f0f8ff",
},
})
              // 已审核日志 结束属性
              
              // 两栏容器 开始属性
              const [twoColumnContainerCufjState, settwoColumnContainerCufjState] = useState({style:{width:"86%",
display:"flex",
flexDirection:"column",
justifyContent:"center",
},
})
              // 两栏容器 结束属性
              
              // 容器 开始属性
              const [containerYtjmState, setcontainerYtjmState] = useState({style:{width:"100%",
height:"9%",
backgroundColor:"#f0f8ff",
},
})
              // 容器 结束属性
              
              // 容器 开始属性
              const [containerJxklState, setcontainerJxklState] = useState({style:{width:"100%",
height:"9%",
backgroundColor:"#ffffff",
},
})
              // 容器 结束属性
              
              // 两栏容器 开始属性
              const [twoColumnContainerCmxkState, settwoColumnContainerCmxkState] = useState({style:{width:"100%",
display:"flex",
flexDirection:"column",
},
})
              // 两栏容器 结束属性
              
              // 容器 开始属性
              const [containerMmrhState, setcontainerMmrhState] = useState({style:{width:"100%",
},
})
              // 容器 结束属性
              
              // 两栏容器 开始属性
              const [twoColumnContainerKjpkState, settwoColumnContainerKjpkState] = useState({style:{width:"100%",
display:"flex",
marginTop:"-7px",
flexDirection:"column",
},
})
              // 两栏容器 结束属性
              
              // 系统名称 开始属性
              const [systemNameEourState, setsystemNameEourState] = useState({style:{gap:"14px",
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
              const [systemNameVresState, setsystemNameVresState] = useState({code:false,
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
              const [containerYnuwState, setcontainerYnuwState] = useState({style:{width:"100%",
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
              const [iconPclkState, seticonPclkState] = useState({spin:false,
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
              const [exitButtonBozqState, setexitButtonBozqState] = useState({icon:undefined,
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
              const [pleaseEnterExplanatoryTitleTextCaijState, setpleaseEnterExplanatoryTitleTextCaijState] = useState({style:{width:"100%",
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
              // 请输入说明题名文字 结束属性
              
              // 电子文件号 开始属性
              const [electronicFileNumberZojjState, setelectronicFileNumberZojjState] = useState({style:{width:"100%",
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
              const [electronicFileNumberPrefixUltkState, setelectronicFileNumberPrefixUltkState] = useState({style:{width:"49%",
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
              const [electronicFileNumberPrefixQutiState, setelectronicFileNumberPrefixQutiState] = useState({code:false,
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
              const [chooserRadioDbbnState, setchooserRadioDbbnState] = useState({size:"middle",
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
              const [fileNumberPrefixRyrqState, setfileNumberPrefixRyrqState] = useState({style:{width:"49%",
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
              
              // 题名 开始属性
              const [titleFtoxState, settitleFtoxState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"题名",
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
              // 题名 结束属性
              
              // 请输入题名 开始属性
              const [pleaseEnterTheTitleOfTheQuestionState, setpleaseEnterTheTitleOfTheQuestionState] = useState({size:"middle",
value:undefined,
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"请输入题名",
defaultValue:undefined,
style:{width:"60%",
},
})
              // 请输入题名 结束属性
              
              // 并列题名 开始属性
              const [parallelTitleState, setparallelTitleState] = useState({style:{width:"100%",
height:"60px",
display:"flex",
marginTop:"1%",
marginLeft:"5px",
marginBottom:undefined,
borderTopLeftRadius:"2px",
borderTopRightRadius:"2px",
borderBottomLeftRadius:"2px",
borderBottomRightRadius:"2px",
},
})
              // 并列题名 结束属性
              
              // 全宗号 开始属性
              const [completeAccountNumberNdncState, setcompleteAccountNumberNdncState] = useState({style:{width:"49%",
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
              
              // 并列题目 开始属性
              const [parallelQuestionsState, setparallelQuestionsState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"并列题目",
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
              // 并列题目 结束属性
              
              // 请输入并列题目 开始属性
              const [pleaseEnterParallelQuestionsState, setpleaseEnterParallelQuestionsState] = useState({size:"middle",
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"请输入并列题目",
defaultValue:undefined,
style:{width:"60%",
},
})
              // 请输入并列题目 结束属性
              
              // 全宗号1 开始属性
              const [completeAccountNumberFawsState, setcompleteAccountNumberFawsState] = useState({style:{width:"49%",
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
              // 全宗号1 结束属性
              
              // 副题名 开始属性
              const [subtitleState, setsubtitleState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"副题名",
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
              // 副题名 结束属性
              
              // 请输入副题名 开始属性
              const [pleaseEnterTheSubtitleState, setpleaseEnterTheSubtitleState] = useState({size:"middle",
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"请输入副题名",
defaultValue:undefined,
style:{width:"60%",
},
})
              // 请输入副题名 结束属性
              
              // 提名 开始属性
              const [nominationState, setnominationState] = useState({style:{width:"100%",
height:"60px",
display:"flex",
marginTop:"1%",
marginLeft:"5px",
marginBottom:undefined,
borderTopLeftRadius:"2px",
borderTopRightRadius:"2px",
borderBottomLeftRadius:"2px",
borderBottomRightRadius:"2px",
},
})
              // 提名 结束属性
              
              // 说明题名文字 开始属性
              const [explanationOfTitleTextVhdfState, setexplanationOfTitleTextVhdfState] = useState({style:{width:"49%",
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
              // 说明题名文字 结束属性
              
              // 说明题名文字 开始属性
              const [explanationOfTitleTextVglrState, setexplanationOfTitleTextVglrState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"说明题名文字",
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
              // 说明题名文字 结束属性
              
              // 关键字 开始属性
              const [keywordPkphState, setkeywordPkphState] = useState({size:"middle",
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"请输入说明题名文字",
defaultValue:undefined,
style:{width:"60%",
},
})
              // 关键字 结束属性
              
              // 关键字 开始属性
              const [keywordBshqState, setkeywordBshqState] = useState({style:{width:"49%",
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
              // 关键字 结束属性
              
              // 主题词 开始属性
              const [themeWordsState, setthemeWordsState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"主题词",
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
              // 主题词 结束属性
              
              // 请输入主题词 开始属性
              const [pleaseEnterTheThemeWordState, setpleaseEnterTheThemeWordState] = useState({size:"middle",
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"请输入主题词",
defaultValue:undefined,
style:{width:"60%",
},
})
              // 请输入主题词 结束属性
              
              // 关键词 开始属性
              const [keywordLhrhState, setkeywordLhrhState] = useState({style:{width:"100%",
height:"60px",
display:"flex",
marginTop:"1%",
marginLeft:"5px",
marginBottom:undefined,
borderTopLeftRadius:"2px",
borderTopRightRadius:"2px",
borderBottomLeftRadius:"2px",
borderBottomRightRadius:"2px",
},
})
              // 关键词 结束属性
              
              // 关键字 开始属性
              const [keywordEsbdState, setkeywordEsbdState] = useState({style:{width:"49%",
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
              // 关键字 结束属性
              
              // 关键词 开始属性
              const [keywordRdagState, setkeywordRdagState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"关键词",
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
              // 关键词 结束属性
              
              // 请输入关键词 开始属性
              const [pleaseEnterKeywordsLbfjState, setpleaseEnterKeywordsLbfjState] = useState({size:"middle",
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"请输入关键词",
defaultValue:undefined,
style:{width:"60%",
},
})
              // 请输入关键词 结束属性
              
              // 人名 开始属性
              const [nameGbxuState, setnameGbxuState] = useState({style:{width:"49%",
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
              // 人名 结束属性
              
              // 人名 开始属性
              const [nameQgtyState, setnameQgtyState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"人名",
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
              // 人名 结束属性
              
              // 请输入人名 开始属性
              const [pleaseEnterAPersonNameState, setpleaseEnterAPersonNameState] = useState({size:"middle",
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"请输入人名",
defaultValue:undefined,
style:{width:"60%",
},
})
              // 请输入人名 结束属性
              
              // 摘要 开始属性
              const [abstractPlzzState, setabstractPlzzState] = useState({style:{width:"100%",
height:"60px",
display:"flex",
marginTop:"1%",
marginLeft:"5px",
marginBottom:undefined,
borderTopLeftRadius:"2px",
borderTopRightRadius:"2px",
borderBottomLeftRadius:"2px",
borderBottomRightRadius:"2px",
},
})
              // 摘要 结束属性
              
              // 摘要 开始属性
              const [abstractFrscState, setabstractFrscState] = useState({style:{width:"49%",
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
              // 摘要 结束属性
              
              // 摘要 开始属性
              const [abstractState, setabstractState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"摘要",
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
              // 摘要 结束属性
              
              // 请输入摘要 开始属性
              const [pleaseEnterASummaryState, setpleaseEnterASummaryState] = useState({size:"middle",
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"请输入摘要",
defaultValue:undefined,
style:{width:"60%",
},
})
              // 请输入摘要 结束属性
              
              // 分类号 开始属性
              const [classificationNumberKebwState, setclassificationNumberKebwState] = useState({style:{width:"49%",
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
              // 分类号 结束属性
              
              // 分类号 开始属性
              const [classificationNumberState, setclassificationNumberState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"分类号",
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
              // 分类号 结束属性
              
              // 请输入分类号 开始属性
              const [pleaseEnterTheClassificationNumberState, setpleaseEnterTheClassificationNumberState] = useState({size:"middle",
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"请输入分类号",
defaultValue:undefined,
style:{width:"60%",
},
})
              // 请输入分类号 结束属性
              
              // 文件编号 开始属性
              const [documentNumberState, setdocumentNumberState] = useState({style:{width:"100%",
height:"60px",
display:"flex",
marginTop:"1%",
marginLeft:"5px",
marginBottom:undefined,
borderTopLeftRadius:"2px",
borderTopRightRadius:"2px",
borderBottomLeftRadius:"2px",
borderBottomRightRadius:"2px",
},
})
              // 文件编号 结束属性
              
              // 关键字 开始属性
              const [keywordWxijState, setkeywordWxijState] = useState({style:{width:"49%",
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
              // 关键字 结束属性
              
              // 文件编号 开始属性
              const [documentNumberFyjyState, setdocumentNumberFyjyState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"文件编号",
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
              // 文件编号 结束属性
              
              // 请输入文件编号 开始属性
              const [pleaseEnterTheFileNumberState, setpleaseEnterTheFileNumberState] = useState({size:"middle",
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"请输入文件编号",
defaultValue:undefined,
style:{width:"60%",
},
})
              // 请输入文件编号 结束属性
              
              // 人名 开始属性
              const [nameState, setnameState] = useState({style:{width:"49%",
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
              // 人名 结束属性
              
              // 责任者 开始属性
              const [responsiblePersonState, setresponsiblePersonState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"责任者",
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
              // 责任者 结束属性
              
              // 请输入责任者 开始属性
              const [pleaseEnterTheResponsiblePartyState, setpleaseEnterTheResponsiblePartyState] = useState({size:"middle",
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"请输入责任者",
defaultValue:undefined,
style:{width:"60%",
},
})
              // 请输入责任者 结束属性
              
              // 日期 开始属性
              const [dateState, setdateState] = useState({style:{width:"100%",
height:"60px",
display:"flex",
marginTop:"1%",
marginLeft:"5px",
marginBottom:undefined,
borderTopLeftRadius:"2px",
borderTopRightRadius:"2px",
borderBottomLeftRadius:"2px",
borderBottomRightRadius:"2px",
},
})
              // 日期 结束属性
              
              // 关键字 开始属性
              const [keywordOluqState, setkeywordOluqState] = useState({style:{width:"49%",
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
              // 关键字 结束属性
              
              // 日期 开始属性
              const [dateOxtnState, setdateOxtnState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"日期",
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
              // 日期 结束属性
              
              // 日期选择框 开始属性
              const [dateSelectionBoxState, setdateSelectionBoxState] = useState({size:"middle",
value:undefined,
picker:"date",
bordered:true,
disabled:false,
autoFocus:false,
placement:"bottomLeft",
showToday:true,
allowClear:true,
placeholder:"请选择",
inputReadOnly:false,
renderExtraFooter:undefined,
defaultPickerValue:undefined,
style:{width:"60%",
},
})
              // 日期选择框 结束属性
              
              // 文种 开始属性
              const [languageTypeYdxoState, setlanguageTypeYdxoState] = useState({style:{width:"49%",
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
              // 文种 结束属性
              
              // 文种 开始属性
              const [languageTypeRwhlState, setlanguageTypeRwhlState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"文种",
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
              // 文种 结束属性
              
              // 请输入文种 开始属性
              const [pleaseEnterTheLanguageTypeState, setpleaseEnterTheLanguageTypeState] = useState({size:"middle",
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"请输入文种",
defaultValue:undefined,
style:{width:"60%",
},
})
              // 请输入文种 结束属性
              
              // 紧急程度 开始属性
              const [urgencyLevelState, seturgencyLevelState] = useState({style:{width:"100%",
height:"60px",
display:"flex",
marginTop:"1%",
marginLeft:"5px",
marginBottom:undefined,
borderTopLeftRadius:"2px",
borderTopRightRadius:"2px",
borderBottomLeftRadius:"2px",
borderBottomRightRadius:"2px",
},
})
              // 紧急程度 结束属性
              
              // 关键字 开始属性
              const [keywordQkncState, setkeywordQkncState] = useState({style:{width:"49%",
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
              // 关键字 结束属性
              
              // 紧急程度 开始属性
              const [urgencyLevelVoupState, seturgencyLevelVoupState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"紧急程度",
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
              // 紧急程度 结束属性
              
              // 请输入紧急程度 开始属性
              const [pleaseEnterTheLevelOfUrgencyState, setpleaseEnterTheLevelOfUrgencyState] = useState({size:"middle",
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"请输入紧急程度",
defaultValue:undefined,
style:{width:"60%",
},
})
              // 请输入紧急程度 结束属性
              
              // 文种 开始属性
              const [languageTypeUqjdState, setlanguageTypeUqjdState] = useState({style:{width:"49%",
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
              // 文种 结束属性
              
              // 主送 开始属性
              const [mainDeliveryState, setmainDeliveryState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"主送",
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
              // 主送 结束属性
              
              // 请输入主送 开始属性
              const [pleaseEnterTheMainDeliveryState, setpleaseEnterTheMainDeliveryState] = useState({size:"middle",
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"主送",
defaultValue:undefined,
style:{width:"60%",
},
})
              // 请输入主送 结束属性
              
              // 抄送 开始属性
              const [ccCopyDcfjState, setccCopyDcfjState] = useState({style:{width:"100%",
height:"60px",
display:"flex",
marginTop:"1%",
marginLeft:"5px",
marginBottom:undefined,
borderTopLeftRadius:"2px",
borderTopRightRadius:"2px",
borderBottomLeftRadius:"2px",
borderBottomRightRadius:"2px",
},
})
              // 抄送 结束属性
              
              // 关键字 开始属性
              const [keywordBdofState, setkeywordBdofState] = useState({style:{width:"49%",
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
              // 关键字 结束属性
              
              // 抄送 开始属性
              const [ccCopyState, setccCopyState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"抄送",
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
              // 抄送 结束属性
              
              // 请输入抄送 开始属性
              const [pleaseInputCcState, setpleaseInputCcState] = useState({size:"middle",
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"抄送",
defaultValue:undefined,
style:{width:"60%",
},
})
              // 请输入抄送 结束属性
              
              // 文种 开始属性
              const [languageTypeState, setlanguageTypeState] = useState({style:{width:"49%",
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
              // 文种 结束属性
              
              // 密级 开始属性
              const [classificationLevelState, setclassificationLevelState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"密级",
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
              // 密级 结束属性
              
              // 请输入密级 开始属性
              const [pleaseEnterTheConfidentialityLevelState, setpleaseEnterTheConfidentialityLevelState] = useState({size:"middle",
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"请输入密级",
defaultValue:undefined,
style:{width:"60%",
},
})
              // 请输入密级 结束属性
              
              // 保密期限 开始属性
              const [confidentialityPeriodState, setconfidentialityPeriodState] = useState({style:{width:"100%",
height:"60px",
display:"flex",
marginTop:"1%",
marginLeft:"5px",
marginBottom:undefined,
borderTopLeftRadius:"2px",
borderTopRightRadius:"2px",
borderBottomLeftRadius:"2px",
borderBottomRightRadius:"2px",
},
})
              // 保密期限 结束属性
              
              // 保密期限 开始属性
              const [confidentialityPeriodEwfoState, setconfidentialityPeriodEwfoState] = useState({style:{width:"49%",
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
              // 保密期限 结束属性
              
              // 保密期限 开始属性
              const [confidentialityPeriodYzrbState, setconfidentialityPeriodYzrbState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"保密期限",
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
              // 保密期限 结束属性
              
              // 请输入保密期限 开始属性
              const [pleaseEnterTheConfidentialityPeriodState, setpleaseEnterTheConfidentialityPeriodState] = useState({size:"middle",
prefix:undefined,
bordered:true,
disabled:false,
maxLength:200,
showCount:false,
addonAfter:undefined,
allowClear:false,
addonBefore:undefined,
placeholder:"保密期限",
defaultValue:undefined,
style:{width:"60%",
},
})
              // 请输入保密期限 结束属性
              
              // 按钮 开始属性
              const [buttonUvsqState, setbuttonUvsqState] = useState({size:"middle",
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
style={{width:containerXushState.style.width,
height:containerXushState.style.height,
display:containerXushState.style.display,
}}
className={`${style.containerXush}`}
>
            {/* 导航菜单 */}
            <Antd.Menu
mode={navigationMenuMokaState.mode}
expandIcon={navigationMenuMokaState.expandIcon}
style={{width:navigationMenuMokaState.style.width,
height:navigationMenuMokaState.style.height,
backgroundColor:navigationMenuMokaState.style.backgroundColor,
backgroundImage:navigationMenuMokaState.style.backgroundImage,
backgroundRepeat:navigationMenuMokaState.style.backgroundRepeat,
borderTopRightRadius:navigationMenuMokaState.style.borderTopRightRadius,
borderBottomRightRadius:navigationMenuMokaState.style.borderBottomRightRadius,
}}
className={`${style.navigationMenuMoka}`}
>
            {/* 容器 */}
            <div
style={{width:containerFbzqState.style.width,
height:containerFbzqState.style.height,
display:containerFbzqState.style.display,
flexWrap:containerFbzqState.style.flexWrap,
alignItems:containerFbzqState.style.alignItems,
paddingTop:containerFbzqState.style.paddingTop,
borderColor:containerFbzqState.style.borderColor,
borderStyle:containerFbzqState.style.borderStyle,
flexDirection:containerFbzqState.style.flexDirection,
justifyContent:containerFbzqState.style.justifyContent,
borderBottomWidth:containerFbzqState.style.borderBottomWidth,
}}
className={`${style.containerFbzq}`}
>
            {/* 图片 */}
            <Antd.Image
alt={pictureTdckState.alt}
src={pictureTdckState.src}
width={pictureTdckState.width}
height={pictureTdckState.height}
preview={pictureTdckState.preview}
fallback={pictureTdckState.fallback}
placeholder={pictureTdckState.placeholder}
style={{width:pictureTdckState.style.width,
height:pictureTdckState.style.height,
marginTop:pictureTdckState.style.marginTop,
marginLeft:pictureTdckState.style.marginLeft,
}}
className={`${style.pictureTdck}`}
></Antd.Image>
            {/* 图片 */}
            
            {/* 管理员首页 */}
            <Antd.Typography.Text
code={administratorHomepageTqkwState.code}
mark={administratorHomepageTqkwState.mark}
type={administratorHomepageTqkwState.type}
delete={administratorHomepageTqkwState.delete}
italic={administratorHomepageTqkwState.italic}
strong={administratorHomepageTqkwState.strong}
children={administratorHomepageTqkwState.children}
copyable={administratorHomepageTqkwState.copyable}
disabled={administratorHomepageTqkwState.disabled}
editable={administratorHomepageTqkwState.editable}
ellipsis={administratorHomepageTqkwState.ellipsis}
keyboard={administratorHomepageTqkwState.keyboard}
underline={administratorHomepageTqkwState.underline}
style={{color:administratorHomepageTqkwState.style.color,
width:administratorHomepageTqkwState.style.width,
height:administratorHomepageTqkwState.style.height,
fontSize:administratorHomepageTqkwState.style.fontSize,
textAlign:administratorHomepageTqkwState.style.textAlign,
fontWeight:administratorHomepageTqkwState.style.fontWeight,
marginLeft:administratorHomepageTqkwState.style.marginLeft,
}}
className={`${style.administratorHomepageTqkw}`}
></Antd.Typography.Text>
            {/* 管理员首页 */}
            </div>
            {/* 容器 */}
            
            {/* 档号配置 */}
            <Antd.Menu.Item
key={fileNumberConfigurationZnvuState.key}
icon={fileNumberConfigurationZnvuState.icon}
danger={fileNumberConfigurationZnvuState.danger}
children={fileNumberConfigurationZnvuState.children}
disabled={fileNumberConfigurationZnvuState.disabled}
style={{color:fileNumberConfigurationZnvuState.style.color,
width:fileNumberConfigurationZnvuState.style.width,
marginLeft:fileNumberConfigurationZnvuState.style.marginLeft,
borderColor:fileNumberConfigurationZnvuState.style.borderColor,
borderStyle:fileNumberConfigurationZnvuState.style.borderStyle,
marginRight:fileNumberConfigurationZnvuState.style.marginRight,
backgroundColor:fileNumberConfigurationZnvuState.style.backgroundColor,
borderBottomWidth:fileNumberConfigurationZnvuState.style.borderBottomWidth,
borderTopLeftRadius:fileNumberConfigurationZnvuState.style.borderTopLeftRadius,
borderTopRightRadius:fileNumberConfigurationZnvuState.style.borderTopRightRadius,
borderBottomLeftRadius:fileNumberConfigurationZnvuState.style.borderBottomLeftRadius,
borderBottomRightRadius:fileNumberConfigurationZnvuState.style.borderBottomRightRadius,
}}
className={`${style.fileNumberConfigurationZnvu}`}
onClick={(eventEazp,) =>clickToConfigureFileNumberCfdg(eventEazp,)}></Antd.Menu.Item>
            {/* 档号配置 */}
            
            {/* 元数据填写 */}
            <Antd.Menu.ItemGroup
title={fillInMetadataXbugState.title}
style={{color:fillInMetadataXbugState.style.color,
borderColor:fillInMetadataXbugState.style.borderColor,
borderStyle:fillInMetadataXbugState.style.borderStyle,
borderTopWidth:fillInMetadataXbugState.style.borderTopWidth,
borderLeftWidth:fillInMetadataXbugState.style.borderLeftWidth,
borderRightWidth:fillInMetadataXbugState.style.borderRightWidth,
borderBottomWidth:fillInMetadataXbugState.style.borderBottomWidth,
}}
className={`${style.fillInMetadataXbug}`}
>
            {/* 元数据内容描述 */}
            <Antd.Menu.Item
key={descriptionOfMetadataContentUsosState.key}
icon={descriptionOfMetadataContentUsosState.icon}
danger={descriptionOfMetadataContentUsosState.danger}
children={descriptionOfMetadataContentUsosState.children}
disabled={descriptionOfMetadataContentUsosState.disabled}
style={{color:descriptionOfMetadataContentUsosState.style.color,
backgroundColor:descriptionOfMetadataContentUsosState.style.backgroundColor,
}}
className={`${style.descriptionOfMetadataContentUsos}`}
onClick={(eventYjrw,) =>whenClickedMetadataContentDescriptionMplz(eventYjrw,)}></Antd.Menu.Item>
            {/* 元数据内容描述 */}
            
            {/* 聚合层次 */}
            <Antd.Menu.Item
key={aggregationHierarchyApovState.key}
icon={aggregationHierarchyApovState.icon}
danger={aggregationHierarchyApovState.danger}
children={aggregationHierarchyApovState.children}
disabled={aggregationHierarchyApovState.disabled}
style={{color:aggregationHierarchyApovState.style.color,
}}
className={`${style.aggregationHierarchyApov}`}
onClick={(eventFbka,) =>clickOnAggregateHierarchyIkay(eventFbka,)}></Antd.Menu.Item>
            {/* 聚合层次 */}
            
            {/* 元数据形式特征 */}
            <Antd.Menu.Item
key={characteristicsOfMetadataFormatEbfcState.key}
icon={characteristicsOfMetadataFormatEbfcState.icon}
danger={characteristicsOfMetadataFormatEbfcState.danger}
children={characteristicsOfMetadataFormatEbfcState.children}
disabled={characteristicsOfMetadataFormatEbfcState.disabled}
style={{color:characteristicsOfMetadataFormatEbfcState.style.color,
}}
className={`${style.characteristicsOfMetadataFormatEbfc}`}
onClick={(eventWdco,) =>whenClickedMetadataFormatFeaturesJlmb(eventWdco,)}></Antd.Menu.Item>
            {/* 元数据形式特征 */}
            
            {/* 元数据存储位置 */}
            <Antd.Menu.Item
key={metadataStorageLocationTxquState.key}
icon={metadataStorageLocationTxquState.icon}
danger={metadataStorageLocationTxquState.danger}
children={metadataStorageLocationTxquState.children}
disabled={metadataStorageLocationTxquState.disabled}
style={{color:metadataStorageLocationTxquState.style.color,
}}
className={`${style.metadataStorageLocationTxqu}`}
onClick={(eventCnft,) =>whenClickedMetadataStorageLocationTdqw(eventCnft,)}></Antd.Menu.Item>
            {/* 元数据存储位置 */}
            
            {/* 元数据电子签名 */}
            <Antd.Menu.Item
key={metadataElectronicSignatureLzgvState.key}
icon={metadataElectronicSignatureLzgvState.icon}
danger={metadataElectronicSignatureLzgvState.danger}
children={metadataElectronicSignatureLzgvState.children}
disabled={metadataElectronicSignatureLzgvState.disabled}
style={{color:metadataElectronicSignatureLzgvState.style.color,
}}
className={`${style.metadataElectronicSignatureLzgv}`}
onClick={(eventHlzb,) =>whenClickedMetadataElectronicSignatureIamq(eventHlzb,)}></Antd.Menu.Item>
            {/* 元数据电子签名 */}
            
            {/* 元数据来源 */}
            <Antd.Menu.Item
key={sourceOfMetadataDjydState.key}
icon={sourceOfMetadataDjydState.icon}
danger={sourceOfMetadataDjydState.danger}
children={sourceOfMetadataDjydState.children}
disabled={sourceOfMetadataDjydState.disabled}
style={{color:sourceOfMetadataDjydState.style.color,
}}
className={`${style.sourceOfMetadataDjyd}`}
onClick={(eventSxtx,) =>whenClickedMetadataSourceTyyt(eventSxtx,)}></Antd.Menu.Item>
            {/* 元数据来源 */}
            
            {/* 档号 */}
            <Antd.Menu.Item
key={referenceIvlhState.key}
icon={referenceIvlhState.icon}
danger={referenceIvlhState.danger}
children={referenceIvlhState.children}
disabled={referenceIvlhState.disabled}
style={{color:referenceIvlhState.style.color,
}}
className={`${style.referenceIvlh}`}
onClick={(eventBiji,) =>clickTimeFileNumberXzeu(eventBiji,)}></Antd.Menu.Item>
            {/* 档号 */}
            
            {/* 生成文件 */}
            <Antd.Menu.Item
key={generateFileFdkdState.key}
icon={generateFileFdkdState.icon}
danger={generateFileFdkdState.danger}
children={generateFileFdkdState.children}
disabled={generateFileFdkdState.disabled}
style={{color:generateFileFdkdState.style.color,
}}
className={`${style.generateFileFdkd}`}
onClick={(eventBucz,) =>whenClickedGenerateFilePcda(eventBucz,)}></Antd.Menu.Item>
            {/* 生成文件 */}
            </Antd.Menu.ItemGroup>
            {/* 元数据填写 */}
            
            {/* 日志审核 */}
            <Antd.Menu.ItemGroup
title={logAuditFsicState.title}
style={{borderColor:logAuditFsicState.style.borderColor,
borderStyle:logAuditFsicState.style.borderStyle,
borderTopWidth:logAuditFsicState.style.borderTopWidth,
borderLeftWidth:logAuditFsicState.style.borderLeftWidth,
borderRightWidth:logAuditFsicState.style.borderRightWidth,
borderBottomWidth:logAuditFsicState.style.borderBottomWidth,
}}
className={`${style.logAuditFsic}`}
>
            {/* 待审核日志 */}
            <Antd.Menu.Item
key={pendingAuditLogKqarState.key}
icon={pendingAuditLogKqarState.icon}
danger={pendingAuditLogKqarState.danger}
children={pendingAuditLogKqarState.children}
disabled={pendingAuditLogKqarState.disabled}
style={{color:pendingAuditLogKqarState.style.color,
}}
className={`${style.pendingAuditLogKqar}`}
onClick={(eventLysa,) =>whenClickedPendingAuditLogWanl(eventLysa,)}></Antd.Menu.Item>
            {/* 待审核日志 */}
            
            {/* 已审核日志 */}
            <Antd.Menu.Item
key={verifiedLogsSzbvState.key}
icon={verifiedLogsSzbvState.icon}
danger={verifiedLogsSzbvState.danger}
children={verifiedLogsSzbvState.children}
disabled={verifiedLogsSzbvState.disabled}
style={{color:verifiedLogsSzbvState.style.color,
}}
className={`${style.verifiedLogsSzbv}`}
onClick={(eventLggc,) =>whenClickedReviewedLogsDati(eventLggc,)}></Antd.Menu.Item>
            {/* 已审核日志 */}
            </Antd.Menu.ItemGroup>
            {/* 日志审核 */}
            </Antd.Menu>
            {/* 导航菜单 */}
            
            {/* 两栏容器 */}
            <div
style={{width:twoColumnContainerCufjState.style.width,
display:twoColumnContainerCufjState.style.display,
flexDirection:twoColumnContainerCufjState.style.flexDirection,
justifyContent:twoColumnContainerCufjState.style.justifyContent,
}}
className={`${style.twoColumnContainerCufj}`}
>
            {/* 容器 */}
            <div
style={{width:containerYtjmState.style.width,
height:containerYtjmState.style.height,
backgroundColor:containerYtjmState.style.backgroundColor,
}}
className={`${style.containerYtjm}`}
>
            {/* 容器 */}
            <div
style={{width:containerJxklState.style.width,
height:containerJxklState.style.height,
backgroundColor:containerJxklState.style.backgroundColor,
}}
className={`${style.containerJxkl}`}
>
            {/* 两栏容器 */}
            <div
style={{width:twoColumnContainerCmxkState.style.width,
display:twoColumnContainerCmxkState.style.display,
flexDirection:twoColumnContainerCmxkState.style.flexDirection,
}}
className={`${style.twoColumnContainerCmxk}`}
>
            {/* 容器 */}
            <div
style={{width:containerMmrhState.style.width,
}}
className={`${style.containerMmrh}`}
></div>
            {/* 容器 */}
            </div>
            {/* 两栏容器 */}
            </div>
            {/* 容器 */}
            
            {/* 两栏容器 */}
            <div
style={{width:twoColumnContainerKjpkState.style.width,
display:twoColumnContainerKjpkState.style.display,
marginTop:twoColumnContainerKjpkState.style.marginTop,
flexDirection:twoColumnContainerKjpkState.style.flexDirection,
}}
className={`${style.twoColumnContainerKjpk}`}
>
            {/* 系统名称 */}
            <div
style={{gap:systemNameEourState.style.gap,
color:systemNameEourState.style.color,
width:systemNameEourState.style.width,
height:systemNameEourState.style.height,
display:systemNameEourState.style.display,
fontSize:systemNameEourState.style.fontSize,
textAlign:systemNameEourState.style.textAlign,
alignItems:systemNameEourState.style.alignItems,
borderColor:systemNameEourState.style.borderColor,
borderStyle:systemNameEourState.style.borderStyle,
flexDirection:systemNameEourState.style.flexDirection,
justifyContent:systemNameEourState.style.justifyContent,
backgroundColor:systemNameEourState.style.backgroundColor,
borderBottomWidth:systemNameEourState.style.borderBottomWidth,
}}
className={`${style.systemNameEour}`}
>
            {/* 系统名称 */}
            <Antd.Typography.Text
code={systemNameVresState.code}
mark={systemNameVresState.mark}
type={systemNameVresState.type}
delete={systemNameVresState.delete}
italic={systemNameVresState.italic}
strong={systemNameVresState.strong}
children={systemNameVresState.children}
copyable={systemNameVresState.copyable}
disabled={systemNameVresState.disabled}
editable={systemNameVresState.editable}
ellipsis={systemNameVresState.ellipsis}
keyboard={systemNameVresState.keyboard}
underline={systemNameVresState.underline}
style={{color:systemNameVresState.style.color,
display:systemNameVresState.style.display,
fontSize:systemNameVresState.style.fontSize,
textAlign:systemNameVresState.style.textAlign,
alignItems:systemNameVresState.style.alignItems,
fontWeight:systemNameVresState.style.fontWeight,
justifyContent:systemNameVresState.style.justifyContent,
}}
className={`${style.systemNameVres}`}
></Antd.Typography.Text>
            {/* 系统名称 */}
            </div>
            {/* 系统名称 */}
            
            {/* 容器 */}
            <div
style={{width:containerYnuwState.style.width,
height:containerYnuwState.style.height,
display:containerYnuwState.style.display,
flexWrap:containerYnuwState.style.flexWrap,
alignItems:containerYnuwState.style.alignItems,
borderColor:containerYnuwState.style.borderColor,
borderStyle:containerYnuwState.style.borderStyle,
flexDirection:containerYnuwState.style.flexDirection,
justifyContent:containerYnuwState.style.justifyContent,
backgroundColor:containerYnuwState.style.backgroundColor,
}}
className={`${style.containerYnuw}`}
>
            {/* 图标 */}
            <AntdIcon.UserOutlined
spin={iconPclkState.spin}
rotate={iconPclkState.rotate}
twoToneColor={iconPclkState.twoToneColor}
style={{color:iconPclkState.style.color,
width:iconPclkState.style.width,
height:iconPclkState.style.height,
fontSize:iconPclkState.style.fontSize,
marginTop:iconPclkState.style.marginTop,
fontWeight:iconPclkState.style.fontWeight,
marginRight:iconPclkState.style.marginRight,
}}
className={`${style.iconPclk}`}
></AntdIcon.UserOutlined>
            {/* 图标 */}
            
            {/* 退出按钮 */}
            <Antd.Button
icon={exitButtonBozqState.icon}
size={exitButtonBozqState.size}
type={exitButtonBozqState.type}
ghost={exitButtonBozqState.ghost}
shape={exitButtonBozqState.shape}
danger={exitButtonBozqState.danger}
loading={exitButtonBozqState.loading}
children={exitButtonBozqState.children}
disabled={exitButtonBozqState.disabled}
style={{fontSize:exitButtonBozqState.style.fontSize,
fontWeight:exitButtonBozqState.style.fontWeight,
marginRight:exitButtonBozqState.style.marginRight,
marginBottom:exitButtonBozqState.style.marginBottom,
backgroundColor:exitButtonBozqState.style.backgroundColor,
}}
className={`${style.exitButtonBozq}`}
onClick={(eventMdsz,) =>clickExitButtonLcof(eventMdsz,)}></Antd.Button>
            {/* 退出按钮 */}
            </div>
            {/* 容器 */}
            </div>
            {/* 两栏容器 */}
            </div>
            {/* 容器 */}
            
            {/* 请输入说明题名文字 */}
            <div
style={{width:pleaseEnterExplanatoryTitleTextCaijState.style.width,
height:pleaseEnterExplanatoryTitleTextCaijState.style.height,
display:pleaseEnterExplanatoryTitleTextCaijState.style.display,
borderColor:pleaseEnterExplanatoryTitleTextCaijState.style.borderColor,
borderStyle:pleaseEnterExplanatoryTitleTextCaijState.style.borderStyle,
paddingLeft:pleaseEnterExplanatoryTitleTextCaijState.style.paddingLeft,
paddingRight:pleaseEnterExplanatoryTitleTextCaijState.style.paddingRight,
flexDirection:pleaseEnterExplanatoryTitleTextCaijState.style.flexDirection,
backgroundColor:pleaseEnterExplanatoryTitleTextCaijState.style.backgroundColor,
}}
className={`${style.pleaseEnterExplanatoryTitleTextCaij}`}
>
            {/* 电子文件号 */}
            <div
style={{width:electronicFileNumberZojjState.style.width,
height:electronicFileNumberZojjState.style.height,
display:electronicFileNumberZojjState.style.display,
marginTop:electronicFileNumberZojjState.style.marginTop,
marginBottom:electronicFileNumberZojjState.style.marginBottom,
justifyContent:electronicFileNumberZojjState.style.justifyContent,
borderTopLeftRadius:electronicFileNumberZojjState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumberZojjState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumberZojjState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumberZojjState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumberZojj}`}
>
            {/* 电子文件号前缀 */}
            <div
style={{width:electronicFileNumberPrefixUltkState.style.width,
height:electronicFileNumberPrefixUltkState.style.height,
display:electronicFileNumberPrefixUltkState.style.display,
alignItems:electronicFileNumberPrefixUltkState.style.alignItems,
marginRight:electronicFileNumberPrefixUltkState.style.marginRight,
justifyContent:electronicFileNumberPrefixUltkState.style.justifyContent,
backgroundColor:electronicFileNumberPrefixUltkState.style.backgroundColor,
borderTopLeftRadius:electronicFileNumberPrefixUltkState.style.borderTopLeftRadius,
borderTopRightRadius:electronicFileNumberPrefixUltkState.style.borderTopRightRadius,
borderBottomLeftRadius:electronicFileNumberPrefixUltkState.style.borderBottomLeftRadius,
borderBottomRightRadius:electronicFileNumberPrefixUltkState.style.borderBottomRightRadius,
}}
className={`${style.electronicFileNumberPrefixUltk}`}
>
            {/* 电子文件号前缀 */}
            <Antd.Typography.Text
code={electronicFileNumberPrefixQutiState.code}
mark={electronicFileNumberPrefixQutiState.mark}
type={electronicFileNumberPrefixQutiState.type}
delete={electronicFileNumberPrefixQutiState.delete}
italic={electronicFileNumberPrefixQutiState.italic}
strong={electronicFileNumberPrefixQutiState.strong}
children={electronicFileNumberPrefixQutiState.children}
copyable={electronicFileNumberPrefixQutiState.copyable}
disabled={electronicFileNumberPrefixQutiState.disabled}
editable={electronicFileNumberPrefixQutiState.editable}
ellipsis={electronicFileNumberPrefixQutiState.ellipsis}
keyboard={electronicFileNumberPrefixQutiState.keyboard}
underline={electronicFileNumberPrefixQutiState.underline}
style={{gap:electronicFileNumberPrefixQutiState.style.gap,
color:electronicFileNumberPrefixQutiState.style.color,
width:electronicFileNumberPrefixQutiState.style.width,
height:electronicFileNumberPrefixQutiState.style.height,
display:electronicFileNumberPrefixQutiState.style.display,
fontSize:electronicFileNumberPrefixQutiState.style.fontSize,
textAlign:electronicFileNumberPrefixQutiState.style.textAlign,
alignItems:electronicFileNumberPrefixQutiState.style.alignItems,
marginRight:electronicFileNumberPrefixQutiState.style.marginRight,
flexDirection:electronicFileNumberPrefixQutiState.style.flexDirection,
justifyContent:electronicFileNumberPrefixQutiState.style.justifyContent,
}}
className={`${style.electronicFileNumberPrefixQuti}`}
></Antd.Typography.Text>
            {/* 电子文件号前缀 */}
            
            {/* 选择器-单选 */}
            <Antd.Select
size={chooserRadioDbbnState.size}
value={chooserRadioDbbnState.value}
options={[]}
bordered={chooserRadioDbbnState.bordered}
disabled={chooserRadioDbbnState.disabled}
autoFocus={chooserRadioDbbnState.autoFocus}
clearIcon={chooserRadioDbbnState.clearIcon}
placement={chooserRadioDbbnState.placement}
allowClear={chooserRadioDbbnState.allowClear}
fieldNames={chooserRadioDbbnState.fieldNames}
suffixIcon={chooserRadioDbbnState.suffixIcon}
defaultOpen={chooserRadioDbbnState.defaultOpen}
placeholder={chooserRadioDbbnState.placeholder}
defaultValue={chooserRadioDbbnState.defaultValue}
notFoundContent={chooserRadioDbbnState.notFoundContent}
popupMatchSelectWidth={chooserRadioDbbnState.popupMatchSelectWidth}
defaultActiveFirstOption={chooserRadioDbbnState.defaultActiveFirstOption}
style={{width:chooserRadioDbbnState.style.width,
height:chooserRadioDbbnState.style.height,
borderColor:chooserRadioDbbnState.style.borderColor,
borderStyle:chooserRadioDbbnState.style.borderStyle,
marginRight:chooserRadioDbbnState.style.marginRight,
borderTopWidth:chooserRadioDbbnState.style.borderTopWidth,
borderLeftWidth:chooserRadioDbbnState.style.borderLeftWidth,
borderRightWidth:chooserRadioDbbnState.style.borderRightWidth,
borderBottomWidth:chooserRadioDbbnState.style.borderBottomWidth,
}}
className={`${style.chooserRadioDbbn}`}
></Antd.Select>
            {/* 选择器-单选 */}
            </div>
            {/* 电子文件号前缀 */}
            
            {/* 档号前缀 */}
            <div
style={{width:fileNumberPrefixRyrqState.style.width,
height:fileNumberPrefixRyrqState.style.height,
display:fileNumberPrefixRyrqState.style.display,
backgroundColor:fileNumberPrefixRyrqState.style.backgroundColor,
borderTopLeftRadius:fileNumberPrefixRyrqState.style.borderTopLeftRadius,
borderTopRightRadius:fileNumberPrefixRyrqState.style.borderTopRightRadius,
borderBottomLeftRadius:fileNumberPrefixRyrqState.style.borderBottomLeftRadius,
borderBottomRightRadius:fileNumberPrefixRyrqState.style.borderBottomRightRadius,
}}
className={`${style.fileNumberPrefixRyrq}`}
>
            {/* 题名 */}
            <Antd.Typography.Text
code={titleFtoxState.code}
mark={titleFtoxState.mark}
type={titleFtoxState.type}
delete={titleFtoxState.delete}
italic={titleFtoxState.italic}
strong={titleFtoxState.strong}
children={titleFtoxState.children}
copyable={titleFtoxState.copyable}
disabled={titleFtoxState.disabled}
editable={titleFtoxState.editable}
ellipsis={titleFtoxState.ellipsis}
keyboard={titleFtoxState.keyboard}
underline={titleFtoxState.underline}
style={{color:titleFtoxState.style.color,
width:titleFtoxState.style.width,
height:titleFtoxState.style.height,
display:titleFtoxState.style.display,
fontSize:titleFtoxState.style.fontSize,
alignItems:titleFtoxState.style.alignItems,
marginRight:titleFtoxState.style.marginRight,
justifyContent:titleFtoxState.style.justifyContent,
}}
className={`${style.titleFtox}`}
></Antd.Typography.Text>
            {/* 题名 */}
            
            {/* 请输入题名 */}
            <Antd.Input
size={pleaseEnterTheTitleOfTheQuestionState.size}
value={pleaseEnterTheTitleOfTheQuestionState.value}
prefix={pleaseEnterTheTitleOfTheQuestionState.prefix}
bordered={pleaseEnterTheTitleOfTheQuestionState.bordered}
disabled={pleaseEnterTheTitleOfTheQuestionState.disabled}
maxLength={pleaseEnterTheTitleOfTheQuestionState.maxLength}
showCount={pleaseEnterTheTitleOfTheQuestionState.showCount}
addonAfter={pleaseEnterTheTitleOfTheQuestionState.addonAfter}
allowClear={pleaseEnterTheTitleOfTheQuestionState.allowClear}
addonBefore={pleaseEnterTheTitleOfTheQuestionState.addonBefore}
placeholder={pleaseEnterTheTitleOfTheQuestionState.placeholder}
defaultValue={pleaseEnterTheTitleOfTheQuestionState.defaultValue}
style={{width:pleaseEnterTheTitleOfTheQuestionState.style.width,
}}
className={`${style.pleaseEnterTheTitleOfTheQuestion}`}
></Antd.Input>
            {/* 请输入题名 */}
            </div>
            {/* 档号前缀 */}
            </div>
            {/* 电子文件号 */}
            
            {/* 并列题名 */}
            <div
style={{width:parallelTitleState.style.width,
height:parallelTitleState.style.height,
display:parallelTitleState.style.display,
marginTop:parallelTitleState.style.marginTop,
marginLeft:parallelTitleState.style.marginLeft,
marginBottom:parallelTitleState.style.marginBottom,
borderTopLeftRadius:parallelTitleState.style.borderTopLeftRadius,
borderTopRightRadius:parallelTitleState.style.borderTopRightRadius,
borderBottomLeftRadius:parallelTitleState.style.borderBottomLeftRadius,
borderBottomRightRadius:parallelTitleState.style.borderBottomRightRadius,
}}
className={`${style.parallelTitle}`}
>
            {/* 全宗号 */}
            <div
style={{width:completeAccountNumberNdncState.style.width,
height:completeAccountNumberNdncState.style.height,
display:completeAccountNumberNdncState.style.display,
marginRight:completeAccountNumberNdncState.style.marginRight,
backgroundColor:completeAccountNumberNdncState.style.backgroundColor,
borderTopLeftRadius:completeAccountNumberNdncState.style.borderTopLeftRadius,
borderTopRightRadius:completeAccountNumberNdncState.style.borderTopRightRadius,
borderBottomLeftRadius:completeAccountNumberNdncState.style.borderBottomLeftRadius,
borderBottomRightRadius:completeAccountNumberNdncState.style.borderBottomRightRadius,
}}
className={`${style.completeAccountNumberNdnc}`}
>
            {/* 并列题目 */}
            <Antd.Typography.Text
code={parallelQuestionsState.code}
mark={parallelQuestionsState.mark}
type={parallelQuestionsState.type}
delete={parallelQuestionsState.delete}
italic={parallelQuestionsState.italic}
strong={parallelQuestionsState.strong}
children={parallelQuestionsState.children}
copyable={parallelQuestionsState.copyable}
disabled={parallelQuestionsState.disabled}
editable={parallelQuestionsState.editable}
ellipsis={parallelQuestionsState.ellipsis}
keyboard={parallelQuestionsState.keyboard}
underline={parallelQuestionsState.underline}
style={{gap:parallelQuestionsState.style.gap,
color:parallelQuestionsState.style.color,
width:parallelQuestionsState.style.width,
height:parallelQuestionsState.style.height,
display:parallelQuestionsState.style.display,
fontSize:parallelQuestionsState.style.fontSize,
textAlign:parallelQuestionsState.style.textAlign,
alignItems:parallelQuestionsState.style.alignItems,
marginRight:parallelQuestionsState.style.marginRight,
flexDirection:parallelQuestionsState.style.flexDirection,
justifyContent:parallelQuestionsState.style.justifyContent,
}}
className={`${style.parallelQuestions}`}
></Antd.Typography.Text>
            {/* 并列题目 */}
            
            {/* 请输入并列题目 */}
            <Antd.Input
size={pleaseEnterParallelQuestionsState.size}
prefix={pleaseEnterParallelQuestionsState.prefix}
bordered={pleaseEnterParallelQuestionsState.bordered}
disabled={pleaseEnterParallelQuestionsState.disabled}
maxLength={pleaseEnterParallelQuestionsState.maxLength}
showCount={pleaseEnterParallelQuestionsState.showCount}
addonAfter={pleaseEnterParallelQuestionsState.addonAfter}
allowClear={pleaseEnterParallelQuestionsState.allowClear}
addonBefore={pleaseEnterParallelQuestionsState.addonBefore}
placeholder={pleaseEnterParallelQuestionsState.placeholder}
defaultValue={pleaseEnterParallelQuestionsState.defaultValue}
style={{width:pleaseEnterParallelQuestionsState.style.width,
}}
className={`${style.pleaseEnterParallelQuestions}`}
></Antd.Input>
            {/* 请输入并列题目 */}
            </div>
            {/* 全宗号 */}
            
            {/* 全宗号1 */}
            <div
style={{width:completeAccountNumberFawsState.style.width,
height:completeAccountNumberFawsState.style.height,
display:completeAccountNumberFawsState.style.display,
marginRight:completeAccountNumberFawsState.style.marginRight,
backgroundColor:completeAccountNumberFawsState.style.backgroundColor,
borderTopLeftRadius:completeAccountNumberFawsState.style.borderTopLeftRadius,
borderTopRightRadius:completeAccountNumberFawsState.style.borderTopRightRadius,
borderBottomLeftRadius:completeAccountNumberFawsState.style.borderBottomLeftRadius,
borderBottomRightRadius:completeAccountNumberFawsState.style.borderBottomRightRadius,
}}
className={`${style.completeAccountNumberFaws}`}
>
            {/* 副题名 */}
            <Antd.Typography.Text
code={subtitleState.code}
mark={subtitleState.mark}
type={subtitleState.type}
delete={subtitleState.delete}
italic={subtitleState.italic}
strong={subtitleState.strong}
children={subtitleState.children}
copyable={subtitleState.copyable}
disabled={subtitleState.disabled}
editable={subtitleState.editable}
ellipsis={subtitleState.ellipsis}
keyboard={subtitleState.keyboard}
underline={subtitleState.underline}
style={{gap:subtitleState.style.gap,
color:subtitleState.style.color,
width:subtitleState.style.width,
height:subtitleState.style.height,
display:subtitleState.style.display,
fontSize:subtitleState.style.fontSize,
textAlign:subtitleState.style.textAlign,
alignItems:subtitleState.style.alignItems,
marginRight:subtitleState.style.marginRight,
flexDirection:subtitleState.style.flexDirection,
justifyContent:subtitleState.style.justifyContent,
}}
className={`${style.subtitle}`}
></Antd.Typography.Text>
            {/* 副题名 */}
            
            {/* 请输入副题名 */}
            <Antd.Input
size={pleaseEnterTheSubtitleState.size}
prefix={pleaseEnterTheSubtitleState.prefix}
bordered={pleaseEnterTheSubtitleState.bordered}
disabled={pleaseEnterTheSubtitleState.disabled}
maxLength={pleaseEnterTheSubtitleState.maxLength}
showCount={pleaseEnterTheSubtitleState.showCount}
addonAfter={pleaseEnterTheSubtitleState.addonAfter}
allowClear={pleaseEnterTheSubtitleState.allowClear}
addonBefore={pleaseEnterTheSubtitleState.addonBefore}
placeholder={pleaseEnterTheSubtitleState.placeholder}
defaultValue={pleaseEnterTheSubtitleState.defaultValue}
style={{width:pleaseEnterTheSubtitleState.style.width,
}}
className={`${style.pleaseEnterTheSubtitle}`}
></Antd.Input>
            {/* 请输入副题名 */}
            </div>
            {/* 全宗号1 */}
            </div>
            {/* 并列题名 */}
            
            {/* 提名 */}
            <div
style={{width:nominationState.style.width,
height:nominationState.style.height,
display:nominationState.style.display,
marginTop:nominationState.style.marginTop,
marginLeft:nominationState.style.marginLeft,
marginBottom:nominationState.style.marginBottom,
borderTopLeftRadius:nominationState.style.borderTopLeftRadius,
borderTopRightRadius:nominationState.style.borderTopRightRadius,
borderBottomLeftRadius:nominationState.style.borderBottomLeftRadius,
borderBottomRightRadius:nominationState.style.borderBottomRightRadius,
}}
className={`${style.nomination}`}
>
            {/* 说明题名文字 */}
            <div
style={{width:explanationOfTitleTextVhdfState.style.width,
height:explanationOfTitleTextVhdfState.style.height,
display:explanationOfTitleTextVhdfState.style.display,
marginRight:explanationOfTitleTextVhdfState.style.marginRight,
backgroundColor:explanationOfTitleTextVhdfState.style.backgroundColor,
borderTopLeftRadius:explanationOfTitleTextVhdfState.style.borderTopLeftRadius,
borderTopRightRadius:explanationOfTitleTextVhdfState.style.borderTopRightRadius,
borderBottomLeftRadius:explanationOfTitleTextVhdfState.style.borderBottomLeftRadius,
borderBottomRightRadius:explanationOfTitleTextVhdfState.style.borderBottomRightRadius,
}}
className={`${style.explanationOfTitleTextVhdf}`}
>
            {/* 说明题名文字 */}
            <Antd.Typography.Text
code={explanationOfTitleTextVglrState.code}
mark={explanationOfTitleTextVglrState.mark}
type={explanationOfTitleTextVglrState.type}
delete={explanationOfTitleTextVglrState.delete}
italic={explanationOfTitleTextVglrState.italic}
strong={explanationOfTitleTextVglrState.strong}
children={explanationOfTitleTextVglrState.children}
copyable={explanationOfTitleTextVglrState.copyable}
disabled={explanationOfTitleTextVglrState.disabled}
editable={explanationOfTitleTextVglrState.editable}
ellipsis={explanationOfTitleTextVglrState.ellipsis}
keyboard={explanationOfTitleTextVglrState.keyboard}
underline={explanationOfTitleTextVglrState.underline}
style={{gap:explanationOfTitleTextVglrState.style.gap,
color:explanationOfTitleTextVglrState.style.color,
width:explanationOfTitleTextVglrState.style.width,
height:explanationOfTitleTextVglrState.style.height,
display:explanationOfTitleTextVglrState.style.display,
fontSize:explanationOfTitleTextVglrState.style.fontSize,
textAlign:explanationOfTitleTextVglrState.style.textAlign,
alignItems:explanationOfTitleTextVglrState.style.alignItems,
marginRight:explanationOfTitleTextVglrState.style.marginRight,
flexDirection:explanationOfTitleTextVglrState.style.flexDirection,
justifyContent:explanationOfTitleTextVglrState.style.justifyContent,
}}
className={`${style.explanationOfTitleTextVglr}`}
></Antd.Typography.Text>
            {/* 说明题名文字 */}
            
            {/* 关键字 */}
            <Antd.Input
size={keywordPkphState.size}
prefix={keywordPkphState.prefix}
bordered={keywordPkphState.bordered}
disabled={keywordPkphState.disabled}
maxLength={keywordPkphState.maxLength}
showCount={keywordPkphState.showCount}
addonAfter={keywordPkphState.addonAfter}
allowClear={keywordPkphState.allowClear}
addonBefore={keywordPkphState.addonBefore}
placeholder={keywordPkphState.placeholder}
defaultValue={keywordPkphState.defaultValue}
style={{width:keywordPkphState.style.width,
}}
className={`${style.keywordPkph}`}
></Antd.Input>
            {/* 关键字 */}
            </div>
            {/* 说明题名文字 */}
            
            {/* 关键字 */}
            <div
style={{width:keywordBshqState.style.width,
height:keywordBshqState.style.height,
display:keywordBshqState.style.display,
marginRight:keywordBshqState.style.marginRight,
backgroundColor:keywordBshqState.style.backgroundColor,
borderTopLeftRadius:keywordBshqState.style.borderTopLeftRadius,
borderTopRightRadius:keywordBshqState.style.borderTopRightRadius,
borderBottomLeftRadius:keywordBshqState.style.borderBottomLeftRadius,
borderBottomRightRadius:keywordBshqState.style.borderBottomRightRadius,
}}
className={`${style.keywordBshq}`}
>
            {/* 主题词 */}
            <Antd.Typography.Text
code={themeWordsState.code}
mark={themeWordsState.mark}
type={themeWordsState.type}
delete={themeWordsState.delete}
italic={themeWordsState.italic}
strong={themeWordsState.strong}
children={themeWordsState.children}
copyable={themeWordsState.copyable}
disabled={themeWordsState.disabled}
editable={themeWordsState.editable}
ellipsis={themeWordsState.ellipsis}
keyboard={themeWordsState.keyboard}
underline={themeWordsState.underline}
style={{gap:themeWordsState.style.gap,
color:themeWordsState.style.color,
width:themeWordsState.style.width,
height:themeWordsState.style.height,
display:themeWordsState.style.display,
fontSize:themeWordsState.style.fontSize,
textAlign:themeWordsState.style.textAlign,
alignItems:themeWordsState.style.alignItems,
marginRight:themeWordsState.style.marginRight,
flexDirection:themeWordsState.style.flexDirection,
justifyContent:themeWordsState.style.justifyContent,
}}
className={`${style.themeWords}`}
></Antd.Typography.Text>
            {/* 主题词 */}
            
            {/* 请输入主题词 */}
            <Antd.Input
size={pleaseEnterTheThemeWordState.size}
prefix={pleaseEnterTheThemeWordState.prefix}
bordered={pleaseEnterTheThemeWordState.bordered}
disabled={pleaseEnterTheThemeWordState.disabled}
maxLength={pleaseEnterTheThemeWordState.maxLength}
showCount={pleaseEnterTheThemeWordState.showCount}
addonAfter={pleaseEnterTheThemeWordState.addonAfter}
allowClear={pleaseEnterTheThemeWordState.allowClear}
addonBefore={pleaseEnterTheThemeWordState.addonBefore}
placeholder={pleaseEnterTheThemeWordState.placeholder}
defaultValue={pleaseEnterTheThemeWordState.defaultValue}
style={{width:pleaseEnterTheThemeWordState.style.width,
}}
className={`${style.pleaseEnterTheThemeWord}`}
></Antd.Input>
            {/* 请输入主题词 */}
            </div>
            {/* 关键字 */}
            </div>
            {/* 提名 */}
            
            {/* 关键词 */}
            <div
style={{width:keywordLhrhState.style.width,
height:keywordLhrhState.style.height,
display:keywordLhrhState.style.display,
marginTop:keywordLhrhState.style.marginTop,
marginLeft:keywordLhrhState.style.marginLeft,
marginBottom:keywordLhrhState.style.marginBottom,
borderTopLeftRadius:keywordLhrhState.style.borderTopLeftRadius,
borderTopRightRadius:keywordLhrhState.style.borderTopRightRadius,
borderBottomLeftRadius:keywordLhrhState.style.borderBottomLeftRadius,
borderBottomRightRadius:keywordLhrhState.style.borderBottomRightRadius,
}}
className={`${style.keywordLhrh}`}
>
            {/* 关键字 */}
            <div
style={{width:keywordEsbdState.style.width,
height:keywordEsbdState.style.height,
display:keywordEsbdState.style.display,
marginRight:keywordEsbdState.style.marginRight,
backgroundColor:keywordEsbdState.style.backgroundColor,
borderTopLeftRadius:keywordEsbdState.style.borderTopLeftRadius,
borderTopRightRadius:keywordEsbdState.style.borderTopRightRadius,
borderBottomLeftRadius:keywordEsbdState.style.borderBottomLeftRadius,
borderBottomRightRadius:keywordEsbdState.style.borderBottomRightRadius,
}}
className={`${style.keywordEsbd}`}
>
            {/* 关键词 */}
            <Antd.Typography.Text
code={keywordRdagState.code}
mark={keywordRdagState.mark}
type={keywordRdagState.type}
delete={keywordRdagState.delete}
italic={keywordRdagState.italic}
strong={keywordRdagState.strong}
children={keywordRdagState.children}
copyable={keywordRdagState.copyable}
disabled={keywordRdagState.disabled}
editable={keywordRdagState.editable}
ellipsis={keywordRdagState.ellipsis}
keyboard={keywordRdagState.keyboard}
underline={keywordRdagState.underline}
style={{gap:keywordRdagState.style.gap,
color:keywordRdagState.style.color,
width:keywordRdagState.style.width,
height:keywordRdagState.style.height,
display:keywordRdagState.style.display,
fontSize:keywordRdagState.style.fontSize,
textAlign:keywordRdagState.style.textAlign,
alignItems:keywordRdagState.style.alignItems,
marginRight:keywordRdagState.style.marginRight,
flexDirection:keywordRdagState.style.flexDirection,
justifyContent:keywordRdagState.style.justifyContent,
}}
className={`${style.keywordRdag}`}
></Antd.Typography.Text>
            {/* 关键词 */}
            
            {/* 请输入关键词 */}
            <Antd.Input
size={pleaseEnterKeywordsLbfjState.size}
prefix={pleaseEnterKeywordsLbfjState.prefix}
bordered={pleaseEnterKeywordsLbfjState.bordered}
disabled={pleaseEnterKeywordsLbfjState.disabled}
maxLength={pleaseEnterKeywordsLbfjState.maxLength}
showCount={pleaseEnterKeywordsLbfjState.showCount}
addonAfter={pleaseEnterKeywordsLbfjState.addonAfter}
allowClear={pleaseEnterKeywordsLbfjState.allowClear}
addonBefore={pleaseEnterKeywordsLbfjState.addonBefore}
placeholder={pleaseEnterKeywordsLbfjState.placeholder}
defaultValue={pleaseEnterKeywordsLbfjState.defaultValue}
style={{width:pleaseEnterKeywordsLbfjState.style.width,
}}
className={`${style.pleaseEnterKeywordsLbfj}`}
></Antd.Input>
            {/* 请输入关键词 */}
            </div>
            {/* 关键字 */}
            
            {/* 人名 */}
            <div
style={{width:nameGbxuState.style.width,
height:nameGbxuState.style.height,
display:nameGbxuState.style.display,
marginRight:nameGbxuState.style.marginRight,
backgroundColor:nameGbxuState.style.backgroundColor,
borderTopLeftRadius:nameGbxuState.style.borderTopLeftRadius,
borderTopRightRadius:nameGbxuState.style.borderTopRightRadius,
borderBottomLeftRadius:nameGbxuState.style.borderBottomLeftRadius,
borderBottomRightRadius:nameGbxuState.style.borderBottomRightRadius,
}}
className={`${style.nameGbxu}`}
>
            {/* 人名 */}
            <Antd.Typography.Text
code={nameQgtyState.code}
mark={nameQgtyState.mark}
type={nameQgtyState.type}
delete={nameQgtyState.delete}
italic={nameQgtyState.italic}
strong={nameQgtyState.strong}
children={nameQgtyState.children}
copyable={nameQgtyState.copyable}
disabled={nameQgtyState.disabled}
editable={nameQgtyState.editable}
ellipsis={nameQgtyState.ellipsis}
keyboard={nameQgtyState.keyboard}
underline={nameQgtyState.underline}
style={{gap:nameQgtyState.style.gap,
color:nameQgtyState.style.color,
width:nameQgtyState.style.width,
height:nameQgtyState.style.height,
display:nameQgtyState.style.display,
fontSize:nameQgtyState.style.fontSize,
textAlign:nameQgtyState.style.textAlign,
alignItems:nameQgtyState.style.alignItems,
marginRight:nameQgtyState.style.marginRight,
flexDirection:nameQgtyState.style.flexDirection,
justifyContent:nameQgtyState.style.justifyContent,
}}
className={`${style.nameQgty}`}
></Antd.Typography.Text>
            {/* 人名 */}
            
            {/* 请输入人名 */}
            <Antd.Input
size={pleaseEnterAPersonNameState.size}
prefix={pleaseEnterAPersonNameState.prefix}
bordered={pleaseEnterAPersonNameState.bordered}
disabled={pleaseEnterAPersonNameState.disabled}
maxLength={pleaseEnterAPersonNameState.maxLength}
showCount={pleaseEnterAPersonNameState.showCount}
addonAfter={pleaseEnterAPersonNameState.addonAfter}
allowClear={pleaseEnterAPersonNameState.allowClear}
addonBefore={pleaseEnterAPersonNameState.addonBefore}
placeholder={pleaseEnterAPersonNameState.placeholder}
defaultValue={pleaseEnterAPersonNameState.defaultValue}
style={{width:pleaseEnterAPersonNameState.style.width,
}}
className={`${style.pleaseEnterAPersonName}`}
></Antd.Input>
            {/* 请输入人名 */}
            </div>
            {/* 人名 */}
            </div>
            {/* 关键词 */}
            
            {/* 摘要 */}
            <div
style={{width:abstractPlzzState.style.width,
height:abstractPlzzState.style.height,
display:abstractPlzzState.style.display,
marginTop:abstractPlzzState.style.marginTop,
marginLeft:abstractPlzzState.style.marginLeft,
marginBottom:abstractPlzzState.style.marginBottom,
borderTopLeftRadius:abstractPlzzState.style.borderTopLeftRadius,
borderTopRightRadius:abstractPlzzState.style.borderTopRightRadius,
borderBottomLeftRadius:abstractPlzzState.style.borderBottomLeftRadius,
borderBottomRightRadius:abstractPlzzState.style.borderBottomRightRadius,
}}
className={`${style.abstractPlzz}`}
>
            {/* 摘要 */}
            <div
style={{width:abstractFrscState.style.width,
height:abstractFrscState.style.height,
display:abstractFrscState.style.display,
marginRight:abstractFrscState.style.marginRight,
backgroundColor:abstractFrscState.style.backgroundColor,
borderTopLeftRadius:abstractFrscState.style.borderTopLeftRadius,
borderTopRightRadius:abstractFrscState.style.borderTopRightRadius,
borderBottomLeftRadius:abstractFrscState.style.borderBottomLeftRadius,
borderBottomRightRadius:abstractFrscState.style.borderBottomRightRadius,
}}
className={`${style.abstractFrsc}`}
>
            {/* 摘要 */}
            <Antd.Typography.Text
code={abstractState.code}
mark={abstractState.mark}
type={abstractState.type}
delete={abstractState.delete}
italic={abstractState.italic}
strong={abstractState.strong}
children={abstractState.children}
copyable={abstractState.copyable}
disabled={abstractState.disabled}
editable={abstractState.editable}
ellipsis={abstractState.ellipsis}
keyboard={abstractState.keyboard}
underline={abstractState.underline}
style={{gap:abstractState.style.gap,
color:abstractState.style.color,
width:abstractState.style.width,
height:abstractState.style.height,
display:abstractState.style.display,
fontSize:abstractState.style.fontSize,
textAlign:abstractState.style.textAlign,
alignItems:abstractState.style.alignItems,
marginRight:abstractState.style.marginRight,
flexDirection:abstractState.style.flexDirection,
justifyContent:abstractState.style.justifyContent,
}}
className={`${style.abstract}`}
></Antd.Typography.Text>
            {/* 摘要 */}
            
            {/* 请输入摘要 */}
            <Antd.Input
size={pleaseEnterASummaryState.size}
prefix={pleaseEnterASummaryState.prefix}
bordered={pleaseEnterASummaryState.bordered}
disabled={pleaseEnterASummaryState.disabled}
maxLength={pleaseEnterASummaryState.maxLength}
showCount={pleaseEnterASummaryState.showCount}
addonAfter={pleaseEnterASummaryState.addonAfter}
allowClear={pleaseEnterASummaryState.allowClear}
addonBefore={pleaseEnterASummaryState.addonBefore}
placeholder={pleaseEnterASummaryState.placeholder}
defaultValue={pleaseEnterASummaryState.defaultValue}
style={{width:pleaseEnterASummaryState.style.width,
}}
className={`${style.pleaseEnterASummary}`}
></Antd.Input>
            {/* 请输入摘要 */}
            </div>
            {/* 摘要 */}
            
            {/* 分类号 */}
            <div
style={{width:classificationNumberKebwState.style.width,
height:classificationNumberKebwState.style.height,
display:classificationNumberKebwState.style.display,
marginRight:classificationNumberKebwState.style.marginRight,
backgroundColor:classificationNumberKebwState.style.backgroundColor,
borderTopLeftRadius:classificationNumberKebwState.style.borderTopLeftRadius,
borderTopRightRadius:classificationNumberKebwState.style.borderTopRightRadius,
borderBottomLeftRadius:classificationNumberKebwState.style.borderBottomLeftRadius,
borderBottomRightRadius:classificationNumberKebwState.style.borderBottomRightRadius,
}}
className={`${style.classificationNumberKebw}`}
>
            {/* 分类号 */}
            <Antd.Typography.Text
code={classificationNumberState.code}
mark={classificationNumberState.mark}
type={classificationNumberState.type}
delete={classificationNumberState.delete}
italic={classificationNumberState.italic}
strong={classificationNumberState.strong}
children={classificationNumberState.children}
copyable={classificationNumberState.copyable}
disabled={classificationNumberState.disabled}
editable={classificationNumberState.editable}
ellipsis={classificationNumberState.ellipsis}
keyboard={classificationNumberState.keyboard}
underline={classificationNumberState.underline}
style={{gap:classificationNumberState.style.gap,
color:classificationNumberState.style.color,
width:classificationNumberState.style.width,
height:classificationNumberState.style.height,
display:classificationNumberState.style.display,
fontSize:classificationNumberState.style.fontSize,
textAlign:classificationNumberState.style.textAlign,
alignItems:classificationNumberState.style.alignItems,
marginRight:classificationNumberState.style.marginRight,
flexDirection:classificationNumberState.style.flexDirection,
justifyContent:classificationNumberState.style.justifyContent,
}}
className={`${style.classificationNumber}`}
></Antd.Typography.Text>
            {/* 分类号 */}
            
            {/* 请输入分类号 */}
            <Antd.Input
size={pleaseEnterTheClassificationNumberState.size}
prefix={pleaseEnterTheClassificationNumberState.prefix}
bordered={pleaseEnterTheClassificationNumberState.bordered}
disabled={pleaseEnterTheClassificationNumberState.disabled}
maxLength={pleaseEnterTheClassificationNumberState.maxLength}
showCount={pleaseEnterTheClassificationNumberState.showCount}
addonAfter={pleaseEnterTheClassificationNumberState.addonAfter}
allowClear={pleaseEnterTheClassificationNumberState.allowClear}
addonBefore={pleaseEnterTheClassificationNumberState.addonBefore}
placeholder={pleaseEnterTheClassificationNumberState.placeholder}
defaultValue={pleaseEnterTheClassificationNumberState.defaultValue}
style={{width:pleaseEnterTheClassificationNumberState.style.width,
}}
className={`${style.pleaseEnterTheClassificationNumber}`}
></Antd.Input>
            {/* 请输入分类号 */}
            </div>
            {/* 分类号 */}
            </div>
            {/* 摘要 */}
            
            {/* 文件编号 */}
            <div
style={{width:documentNumberState.style.width,
height:documentNumberState.style.height,
display:documentNumberState.style.display,
marginTop:documentNumberState.style.marginTop,
marginLeft:documentNumberState.style.marginLeft,
marginBottom:documentNumberState.style.marginBottom,
borderTopLeftRadius:documentNumberState.style.borderTopLeftRadius,
borderTopRightRadius:documentNumberState.style.borderTopRightRadius,
borderBottomLeftRadius:documentNumberState.style.borderBottomLeftRadius,
borderBottomRightRadius:documentNumberState.style.borderBottomRightRadius,
}}
className={`${style.documentNumber}`}
>
            {/* 关键字 */}
            <div
style={{width:keywordWxijState.style.width,
height:keywordWxijState.style.height,
display:keywordWxijState.style.display,
marginRight:keywordWxijState.style.marginRight,
backgroundColor:keywordWxijState.style.backgroundColor,
borderTopLeftRadius:keywordWxijState.style.borderTopLeftRadius,
borderTopRightRadius:keywordWxijState.style.borderTopRightRadius,
borderBottomLeftRadius:keywordWxijState.style.borderBottomLeftRadius,
borderBottomRightRadius:keywordWxijState.style.borderBottomRightRadius,
}}
className={`${style.keywordWxij}`}
>
            {/* 文件编号 */}
            <Antd.Typography.Text
code={documentNumberFyjyState.code}
mark={documentNumberFyjyState.mark}
type={documentNumberFyjyState.type}
delete={documentNumberFyjyState.delete}
italic={documentNumberFyjyState.italic}
strong={documentNumberFyjyState.strong}
children={documentNumberFyjyState.children}
copyable={documentNumberFyjyState.copyable}
disabled={documentNumberFyjyState.disabled}
editable={documentNumberFyjyState.editable}
ellipsis={documentNumberFyjyState.ellipsis}
keyboard={documentNumberFyjyState.keyboard}
underline={documentNumberFyjyState.underline}
style={{gap:documentNumberFyjyState.style.gap,
color:documentNumberFyjyState.style.color,
width:documentNumberFyjyState.style.width,
height:documentNumberFyjyState.style.height,
display:documentNumberFyjyState.style.display,
fontSize:documentNumberFyjyState.style.fontSize,
textAlign:documentNumberFyjyState.style.textAlign,
alignItems:documentNumberFyjyState.style.alignItems,
marginRight:documentNumberFyjyState.style.marginRight,
flexDirection:documentNumberFyjyState.style.flexDirection,
justifyContent:documentNumberFyjyState.style.justifyContent,
}}
className={`${style.documentNumberFyjy}`}
></Antd.Typography.Text>
            {/* 文件编号 */}
            
            {/* 请输入文件编号 */}
            <Antd.Input
size={pleaseEnterTheFileNumberState.size}
prefix={pleaseEnterTheFileNumberState.prefix}
bordered={pleaseEnterTheFileNumberState.bordered}
disabled={pleaseEnterTheFileNumberState.disabled}
maxLength={pleaseEnterTheFileNumberState.maxLength}
showCount={pleaseEnterTheFileNumberState.showCount}
addonAfter={pleaseEnterTheFileNumberState.addonAfter}
allowClear={pleaseEnterTheFileNumberState.allowClear}
addonBefore={pleaseEnterTheFileNumberState.addonBefore}
placeholder={pleaseEnterTheFileNumberState.placeholder}
defaultValue={pleaseEnterTheFileNumberState.defaultValue}
style={{width:pleaseEnterTheFileNumberState.style.width,
}}
className={`${style.pleaseEnterTheFileNumber}`}
></Antd.Input>
            {/* 请输入文件编号 */}
            </div>
            {/* 关键字 */}
            
            {/* 人名 */}
            <div
style={{width:nameState.style.width,
height:nameState.style.height,
display:nameState.style.display,
marginRight:nameState.style.marginRight,
backgroundColor:nameState.style.backgroundColor,
borderTopLeftRadius:nameState.style.borderTopLeftRadius,
borderTopRightRadius:nameState.style.borderTopRightRadius,
borderBottomLeftRadius:nameState.style.borderBottomLeftRadius,
borderBottomRightRadius:nameState.style.borderBottomRightRadius,
}}
className={`${style.name}`}
>
            {/* 责任者 */}
            <Antd.Typography.Text
code={responsiblePersonState.code}
mark={responsiblePersonState.mark}
type={responsiblePersonState.type}
delete={responsiblePersonState.delete}
italic={responsiblePersonState.italic}
strong={responsiblePersonState.strong}
children={responsiblePersonState.children}
copyable={responsiblePersonState.copyable}
disabled={responsiblePersonState.disabled}
editable={responsiblePersonState.editable}
ellipsis={responsiblePersonState.ellipsis}
keyboard={responsiblePersonState.keyboard}
underline={responsiblePersonState.underline}
style={{gap:responsiblePersonState.style.gap,
color:responsiblePersonState.style.color,
width:responsiblePersonState.style.width,
height:responsiblePersonState.style.height,
display:responsiblePersonState.style.display,
fontSize:responsiblePersonState.style.fontSize,
textAlign:responsiblePersonState.style.textAlign,
alignItems:responsiblePersonState.style.alignItems,
marginRight:responsiblePersonState.style.marginRight,
flexDirection:responsiblePersonState.style.flexDirection,
justifyContent:responsiblePersonState.style.justifyContent,
}}
className={`${style.responsiblePerson}`}
></Antd.Typography.Text>
            {/* 责任者 */}
            
            {/* 请输入责任者 */}
            <Antd.Input
size={pleaseEnterTheResponsiblePartyState.size}
prefix={pleaseEnterTheResponsiblePartyState.prefix}
bordered={pleaseEnterTheResponsiblePartyState.bordered}
disabled={pleaseEnterTheResponsiblePartyState.disabled}
maxLength={pleaseEnterTheResponsiblePartyState.maxLength}
showCount={pleaseEnterTheResponsiblePartyState.showCount}
addonAfter={pleaseEnterTheResponsiblePartyState.addonAfter}
allowClear={pleaseEnterTheResponsiblePartyState.allowClear}
addonBefore={pleaseEnterTheResponsiblePartyState.addonBefore}
placeholder={pleaseEnterTheResponsiblePartyState.placeholder}
defaultValue={pleaseEnterTheResponsiblePartyState.defaultValue}
style={{width:pleaseEnterTheResponsiblePartyState.style.width,
}}
className={`${style.pleaseEnterTheResponsibleParty}`}
></Antd.Input>
            {/* 请输入责任者 */}
            </div>
            {/* 人名 */}
            </div>
            {/* 文件编号 */}
            
            {/* 日期 */}
            <div
style={{width:dateState.style.width,
height:dateState.style.height,
display:dateState.style.display,
marginTop:dateState.style.marginTop,
marginLeft:dateState.style.marginLeft,
marginBottom:dateState.style.marginBottom,
borderTopLeftRadius:dateState.style.borderTopLeftRadius,
borderTopRightRadius:dateState.style.borderTopRightRadius,
borderBottomLeftRadius:dateState.style.borderBottomLeftRadius,
borderBottomRightRadius:dateState.style.borderBottomRightRadius,
}}
className={`${style.date}`}
>
            {/* 关键字 */}
            <div
style={{width:keywordOluqState.style.width,
height:keywordOluqState.style.height,
display:keywordOluqState.style.display,
marginRight:keywordOluqState.style.marginRight,
backgroundColor:keywordOluqState.style.backgroundColor,
borderTopLeftRadius:keywordOluqState.style.borderTopLeftRadius,
borderTopRightRadius:keywordOluqState.style.borderTopRightRadius,
borderBottomLeftRadius:keywordOluqState.style.borderBottomLeftRadius,
borderBottomRightRadius:keywordOluqState.style.borderBottomRightRadius,
}}
className={`${style.keywordOluq}`}
>
            {/* 日期 */}
            <Antd.Typography.Text
code={dateOxtnState.code}
mark={dateOxtnState.mark}
type={dateOxtnState.type}
delete={dateOxtnState.delete}
italic={dateOxtnState.italic}
strong={dateOxtnState.strong}
children={dateOxtnState.children}
copyable={dateOxtnState.copyable}
disabled={dateOxtnState.disabled}
editable={dateOxtnState.editable}
ellipsis={dateOxtnState.ellipsis}
keyboard={dateOxtnState.keyboard}
underline={dateOxtnState.underline}
style={{gap:dateOxtnState.style.gap,
color:dateOxtnState.style.color,
width:dateOxtnState.style.width,
height:dateOxtnState.style.height,
display:dateOxtnState.style.display,
fontSize:dateOxtnState.style.fontSize,
textAlign:dateOxtnState.style.textAlign,
alignItems:dateOxtnState.style.alignItems,
marginRight:dateOxtnState.style.marginRight,
flexDirection:dateOxtnState.style.flexDirection,
justifyContent:dateOxtnState.style.justifyContent,
}}
className={`${style.dateOxtn}`}
></Antd.Typography.Text>
            {/* 日期 */}
            
            {/* 日期选择框 */}
            <Antd.DatePicker
size={dateSelectionBoxState.size}
value={dateSelectionBoxState.value}
picker={dateSelectionBoxState.picker}
bordered={dateSelectionBoxState.bordered}
disabled={dateSelectionBoxState.disabled}
autoFocus={dateSelectionBoxState.autoFocus}
placement={dateSelectionBoxState.placement}
showToday={dateSelectionBoxState.showToday}
allowClear={dateSelectionBoxState.allowClear}
placeholder={dateSelectionBoxState.placeholder}
inputReadOnly={dateSelectionBoxState.inputReadOnly}
renderExtraFooter={dateSelectionBoxState.renderExtraFooter}
defaultPickerValue={dateSelectionBoxState.defaultPickerValue}
style={{width:dateSelectionBoxState.style.width,
}}
className={`${style.dateSelectionBox}`}
></Antd.DatePicker>
            {/* 日期选择框 */}
            </div>
            {/* 关键字 */}
            
            {/* 文种 */}
            <div
style={{width:languageTypeYdxoState.style.width,
height:languageTypeYdxoState.style.height,
display:languageTypeYdxoState.style.display,
marginRight:languageTypeYdxoState.style.marginRight,
backgroundColor:languageTypeYdxoState.style.backgroundColor,
borderTopLeftRadius:languageTypeYdxoState.style.borderTopLeftRadius,
borderTopRightRadius:languageTypeYdxoState.style.borderTopRightRadius,
borderBottomLeftRadius:languageTypeYdxoState.style.borderBottomLeftRadius,
borderBottomRightRadius:languageTypeYdxoState.style.borderBottomRightRadius,
}}
className={`${style.languageTypeYdxo}`}
>
            {/* 文种 */}
            <Antd.Typography.Text
code={languageTypeRwhlState.code}
mark={languageTypeRwhlState.mark}
type={languageTypeRwhlState.type}
delete={languageTypeRwhlState.delete}
italic={languageTypeRwhlState.italic}
strong={languageTypeRwhlState.strong}
children={languageTypeRwhlState.children}
copyable={languageTypeRwhlState.copyable}
disabled={languageTypeRwhlState.disabled}
editable={languageTypeRwhlState.editable}
ellipsis={languageTypeRwhlState.ellipsis}
keyboard={languageTypeRwhlState.keyboard}
underline={languageTypeRwhlState.underline}
style={{gap:languageTypeRwhlState.style.gap,
color:languageTypeRwhlState.style.color,
width:languageTypeRwhlState.style.width,
height:languageTypeRwhlState.style.height,
display:languageTypeRwhlState.style.display,
fontSize:languageTypeRwhlState.style.fontSize,
textAlign:languageTypeRwhlState.style.textAlign,
alignItems:languageTypeRwhlState.style.alignItems,
marginRight:languageTypeRwhlState.style.marginRight,
flexDirection:languageTypeRwhlState.style.flexDirection,
justifyContent:languageTypeRwhlState.style.justifyContent,
}}
className={`${style.languageTypeRwhl}`}
></Antd.Typography.Text>
            {/* 文种 */}
            
            {/* 请输入文种 */}
            <Antd.Input
size={pleaseEnterTheLanguageTypeState.size}
prefix={pleaseEnterTheLanguageTypeState.prefix}
bordered={pleaseEnterTheLanguageTypeState.bordered}
disabled={pleaseEnterTheLanguageTypeState.disabled}
maxLength={pleaseEnterTheLanguageTypeState.maxLength}
showCount={pleaseEnterTheLanguageTypeState.showCount}
addonAfter={pleaseEnterTheLanguageTypeState.addonAfter}
allowClear={pleaseEnterTheLanguageTypeState.allowClear}
addonBefore={pleaseEnterTheLanguageTypeState.addonBefore}
placeholder={pleaseEnterTheLanguageTypeState.placeholder}
defaultValue={pleaseEnterTheLanguageTypeState.defaultValue}
style={{width:pleaseEnterTheLanguageTypeState.style.width,
}}
className={`${style.pleaseEnterTheLanguageType}`}
></Antd.Input>
            {/* 请输入文种 */}
            </div>
            {/* 文种 */}
            </div>
            {/* 日期 */}
            
            {/* 紧急程度 */}
            <div
style={{width:urgencyLevelState.style.width,
height:urgencyLevelState.style.height,
display:urgencyLevelState.style.display,
marginTop:urgencyLevelState.style.marginTop,
marginLeft:urgencyLevelState.style.marginLeft,
marginBottom:urgencyLevelState.style.marginBottom,
borderTopLeftRadius:urgencyLevelState.style.borderTopLeftRadius,
borderTopRightRadius:urgencyLevelState.style.borderTopRightRadius,
borderBottomLeftRadius:urgencyLevelState.style.borderBottomLeftRadius,
borderBottomRightRadius:urgencyLevelState.style.borderBottomRightRadius,
}}
className={`${style.urgencyLevel}`}
>
            {/* 关键字 */}
            <div
style={{width:keywordQkncState.style.width,
height:keywordQkncState.style.height,
display:keywordQkncState.style.display,
marginRight:keywordQkncState.style.marginRight,
backgroundColor:keywordQkncState.style.backgroundColor,
borderTopLeftRadius:keywordQkncState.style.borderTopLeftRadius,
borderTopRightRadius:keywordQkncState.style.borderTopRightRadius,
borderBottomLeftRadius:keywordQkncState.style.borderBottomLeftRadius,
borderBottomRightRadius:keywordQkncState.style.borderBottomRightRadius,
}}
className={`${style.keywordQknc}`}
>
            {/* 紧急程度 */}
            <Antd.Typography.Text
code={urgencyLevelVoupState.code}
mark={urgencyLevelVoupState.mark}
type={urgencyLevelVoupState.type}
delete={urgencyLevelVoupState.delete}
italic={urgencyLevelVoupState.italic}
strong={urgencyLevelVoupState.strong}
children={urgencyLevelVoupState.children}
copyable={urgencyLevelVoupState.copyable}
disabled={urgencyLevelVoupState.disabled}
editable={urgencyLevelVoupState.editable}
ellipsis={urgencyLevelVoupState.ellipsis}
keyboard={urgencyLevelVoupState.keyboard}
underline={urgencyLevelVoupState.underline}
style={{gap:urgencyLevelVoupState.style.gap,
color:urgencyLevelVoupState.style.color,
width:urgencyLevelVoupState.style.width,
height:urgencyLevelVoupState.style.height,
display:urgencyLevelVoupState.style.display,
fontSize:urgencyLevelVoupState.style.fontSize,
textAlign:urgencyLevelVoupState.style.textAlign,
alignItems:urgencyLevelVoupState.style.alignItems,
marginRight:urgencyLevelVoupState.style.marginRight,
flexDirection:urgencyLevelVoupState.style.flexDirection,
justifyContent:urgencyLevelVoupState.style.justifyContent,
}}
className={`${style.urgencyLevelVoup}`}
></Antd.Typography.Text>
            {/* 紧急程度 */}
            
            {/* 请输入紧急程度 */}
            <Antd.Input
size={pleaseEnterTheLevelOfUrgencyState.size}
prefix={pleaseEnterTheLevelOfUrgencyState.prefix}
bordered={pleaseEnterTheLevelOfUrgencyState.bordered}
disabled={pleaseEnterTheLevelOfUrgencyState.disabled}
maxLength={pleaseEnterTheLevelOfUrgencyState.maxLength}
showCount={pleaseEnterTheLevelOfUrgencyState.showCount}
addonAfter={pleaseEnterTheLevelOfUrgencyState.addonAfter}
allowClear={pleaseEnterTheLevelOfUrgencyState.allowClear}
addonBefore={pleaseEnterTheLevelOfUrgencyState.addonBefore}
placeholder={pleaseEnterTheLevelOfUrgencyState.placeholder}
defaultValue={pleaseEnterTheLevelOfUrgencyState.defaultValue}
style={{width:pleaseEnterTheLevelOfUrgencyState.style.width,
}}
className={`${style.pleaseEnterTheLevelOfUrgency}`}
></Antd.Input>
            {/* 请输入紧急程度 */}
            </div>
            {/* 关键字 */}
            
            {/* 文种 */}
            <div
style={{width:languageTypeUqjdState.style.width,
height:languageTypeUqjdState.style.height,
display:languageTypeUqjdState.style.display,
marginRight:languageTypeUqjdState.style.marginRight,
backgroundColor:languageTypeUqjdState.style.backgroundColor,
borderTopLeftRadius:languageTypeUqjdState.style.borderTopLeftRadius,
borderTopRightRadius:languageTypeUqjdState.style.borderTopRightRadius,
borderBottomLeftRadius:languageTypeUqjdState.style.borderBottomLeftRadius,
borderBottomRightRadius:languageTypeUqjdState.style.borderBottomRightRadius,
}}
className={`${style.languageTypeUqjd}`}
>
            {/* 主送 */}
            <Antd.Typography.Text
code={mainDeliveryState.code}
mark={mainDeliveryState.mark}
type={mainDeliveryState.type}
delete={mainDeliveryState.delete}
italic={mainDeliveryState.italic}
strong={mainDeliveryState.strong}
children={mainDeliveryState.children}
copyable={mainDeliveryState.copyable}
disabled={mainDeliveryState.disabled}
editable={mainDeliveryState.editable}
ellipsis={mainDeliveryState.ellipsis}
keyboard={mainDeliveryState.keyboard}
underline={mainDeliveryState.underline}
style={{gap:mainDeliveryState.style.gap,
color:mainDeliveryState.style.color,
width:mainDeliveryState.style.width,
height:mainDeliveryState.style.height,
display:mainDeliveryState.style.display,
fontSize:mainDeliveryState.style.fontSize,
textAlign:mainDeliveryState.style.textAlign,
alignItems:mainDeliveryState.style.alignItems,
marginRight:mainDeliveryState.style.marginRight,
flexDirection:mainDeliveryState.style.flexDirection,
justifyContent:mainDeliveryState.style.justifyContent,
}}
className={`${style.mainDelivery}`}
></Antd.Typography.Text>
            {/* 主送 */}
            
            {/* 请输入主送 */}
            <Antd.Input
size={pleaseEnterTheMainDeliveryState.size}
prefix={pleaseEnterTheMainDeliveryState.prefix}
bordered={pleaseEnterTheMainDeliveryState.bordered}
disabled={pleaseEnterTheMainDeliveryState.disabled}
maxLength={pleaseEnterTheMainDeliveryState.maxLength}
showCount={pleaseEnterTheMainDeliveryState.showCount}
addonAfter={pleaseEnterTheMainDeliveryState.addonAfter}
allowClear={pleaseEnterTheMainDeliveryState.allowClear}
addonBefore={pleaseEnterTheMainDeliveryState.addonBefore}
placeholder={pleaseEnterTheMainDeliveryState.placeholder}
defaultValue={pleaseEnterTheMainDeliveryState.defaultValue}
style={{width:pleaseEnterTheMainDeliveryState.style.width,
}}
className={`${style.pleaseEnterTheMainDelivery}`}
></Antd.Input>
            {/* 请输入主送 */}
            </div>
            {/* 文种 */}
            </div>
            {/* 紧急程度 */}
            
            {/* 抄送 */}
            <div
style={{width:ccCopyDcfjState.style.width,
height:ccCopyDcfjState.style.height,
display:ccCopyDcfjState.style.display,
marginTop:ccCopyDcfjState.style.marginTop,
marginLeft:ccCopyDcfjState.style.marginLeft,
marginBottom:ccCopyDcfjState.style.marginBottom,
borderTopLeftRadius:ccCopyDcfjState.style.borderTopLeftRadius,
borderTopRightRadius:ccCopyDcfjState.style.borderTopRightRadius,
borderBottomLeftRadius:ccCopyDcfjState.style.borderBottomLeftRadius,
borderBottomRightRadius:ccCopyDcfjState.style.borderBottomRightRadius,
}}
className={`${style.ccCopyDcfj}`}
>
            {/* 关键字 */}
            <div
style={{width:keywordBdofState.style.width,
height:keywordBdofState.style.height,
display:keywordBdofState.style.display,
marginRight:keywordBdofState.style.marginRight,
backgroundColor:keywordBdofState.style.backgroundColor,
borderTopLeftRadius:keywordBdofState.style.borderTopLeftRadius,
borderTopRightRadius:keywordBdofState.style.borderTopRightRadius,
borderBottomLeftRadius:keywordBdofState.style.borderBottomLeftRadius,
borderBottomRightRadius:keywordBdofState.style.borderBottomRightRadius,
}}
className={`${style.keywordBdof}`}
>
            {/* 抄送 */}
            <Antd.Typography.Text
code={ccCopyState.code}
mark={ccCopyState.mark}
type={ccCopyState.type}
delete={ccCopyState.delete}
italic={ccCopyState.italic}
strong={ccCopyState.strong}
children={ccCopyState.children}
copyable={ccCopyState.copyable}
disabled={ccCopyState.disabled}
editable={ccCopyState.editable}
ellipsis={ccCopyState.ellipsis}
keyboard={ccCopyState.keyboard}
underline={ccCopyState.underline}
style={{gap:ccCopyState.style.gap,
color:ccCopyState.style.color,
width:ccCopyState.style.width,
height:ccCopyState.style.height,
display:ccCopyState.style.display,
fontSize:ccCopyState.style.fontSize,
textAlign:ccCopyState.style.textAlign,
alignItems:ccCopyState.style.alignItems,
marginRight:ccCopyState.style.marginRight,
flexDirection:ccCopyState.style.flexDirection,
justifyContent:ccCopyState.style.justifyContent,
}}
className={`${style.ccCopy}`}
></Antd.Typography.Text>
            {/* 抄送 */}
            
            {/* 请输入抄送 */}
            <Antd.Input
size={pleaseInputCcState.size}
prefix={pleaseInputCcState.prefix}
bordered={pleaseInputCcState.bordered}
disabled={pleaseInputCcState.disabled}
maxLength={pleaseInputCcState.maxLength}
showCount={pleaseInputCcState.showCount}
addonAfter={pleaseInputCcState.addonAfter}
allowClear={pleaseInputCcState.allowClear}
addonBefore={pleaseInputCcState.addonBefore}
placeholder={pleaseInputCcState.placeholder}
defaultValue={pleaseInputCcState.defaultValue}
style={{width:pleaseInputCcState.style.width,
}}
className={`${style.pleaseInputCc}`}
></Antd.Input>
            {/* 请输入抄送 */}
            </div>
            {/* 关键字 */}
            
            {/* 文种 */}
            <div
style={{width:languageTypeState.style.width,
height:languageTypeState.style.height,
display:languageTypeState.style.display,
marginRight:languageTypeState.style.marginRight,
backgroundColor:languageTypeState.style.backgroundColor,
borderTopLeftRadius:languageTypeState.style.borderTopLeftRadius,
borderTopRightRadius:languageTypeState.style.borderTopRightRadius,
borderBottomLeftRadius:languageTypeState.style.borderBottomLeftRadius,
borderBottomRightRadius:languageTypeState.style.borderBottomRightRadius,
}}
className={`${style.languageType}`}
>
            {/* 密级 */}
            <Antd.Typography.Text
code={classificationLevelState.code}
mark={classificationLevelState.mark}
type={classificationLevelState.type}
delete={classificationLevelState.delete}
italic={classificationLevelState.italic}
strong={classificationLevelState.strong}
children={classificationLevelState.children}
copyable={classificationLevelState.copyable}
disabled={classificationLevelState.disabled}
editable={classificationLevelState.editable}
ellipsis={classificationLevelState.ellipsis}
keyboard={classificationLevelState.keyboard}
underline={classificationLevelState.underline}
style={{gap:classificationLevelState.style.gap,
color:classificationLevelState.style.color,
width:classificationLevelState.style.width,
height:classificationLevelState.style.height,
display:classificationLevelState.style.display,
fontSize:classificationLevelState.style.fontSize,
textAlign:classificationLevelState.style.textAlign,
alignItems:classificationLevelState.style.alignItems,
marginRight:classificationLevelState.style.marginRight,
flexDirection:classificationLevelState.style.flexDirection,
justifyContent:classificationLevelState.style.justifyContent,
}}
className={`${style.classificationLevel}`}
></Antd.Typography.Text>
            {/* 密级 */}
            
            {/* 请输入密级 */}
            <Antd.Input
size={pleaseEnterTheConfidentialityLevelState.size}
prefix={pleaseEnterTheConfidentialityLevelState.prefix}
bordered={pleaseEnterTheConfidentialityLevelState.bordered}
disabled={pleaseEnterTheConfidentialityLevelState.disabled}
maxLength={pleaseEnterTheConfidentialityLevelState.maxLength}
showCount={pleaseEnterTheConfidentialityLevelState.showCount}
addonAfter={pleaseEnterTheConfidentialityLevelState.addonAfter}
allowClear={pleaseEnterTheConfidentialityLevelState.allowClear}
addonBefore={pleaseEnterTheConfidentialityLevelState.addonBefore}
placeholder={pleaseEnterTheConfidentialityLevelState.placeholder}
defaultValue={pleaseEnterTheConfidentialityLevelState.defaultValue}
style={{width:pleaseEnterTheConfidentialityLevelState.style.width,
}}
className={`${style.pleaseEnterTheConfidentialityLevel}`}
></Antd.Input>
            {/* 请输入密级 */}
            </div>
            {/* 文种 */}
            </div>
            {/* 抄送 */}
            
            {/* 保密期限 */}
            <div
style={{width:confidentialityPeriodState.style.width,
height:confidentialityPeriodState.style.height,
display:confidentialityPeriodState.style.display,
marginTop:confidentialityPeriodState.style.marginTop,
marginLeft:confidentialityPeriodState.style.marginLeft,
marginBottom:confidentialityPeriodState.style.marginBottom,
borderTopLeftRadius:confidentialityPeriodState.style.borderTopLeftRadius,
borderTopRightRadius:confidentialityPeriodState.style.borderTopRightRadius,
borderBottomLeftRadius:confidentialityPeriodState.style.borderBottomLeftRadius,
borderBottomRightRadius:confidentialityPeriodState.style.borderBottomRightRadius,
}}
className={`${style.confidentialityPeriod}`}
>
            {/* 保密期限 */}
            <div
style={{width:confidentialityPeriodEwfoState.style.width,
height:confidentialityPeriodEwfoState.style.height,
display:confidentialityPeriodEwfoState.style.display,
marginRight:confidentialityPeriodEwfoState.style.marginRight,
backgroundColor:confidentialityPeriodEwfoState.style.backgroundColor,
borderTopLeftRadius:confidentialityPeriodEwfoState.style.borderTopLeftRadius,
borderTopRightRadius:confidentialityPeriodEwfoState.style.borderTopRightRadius,
borderBottomLeftRadius:confidentialityPeriodEwfoState.style.borderBottomLeftRadius,
borderBottomRightRadius:confidentialityPeriodEwfoState.style.borderBottomRightRadius,
}}
className={`${style.confidentialityPeriodEwfo}`}
>
            {/* 保密期限 */}
            <Antd.Typography.Text
code={confidentialityPeriodYzrbState.code}
mark={confidentialityPeriodYzrbState.mark}
type={confidentialityPeriodYzrbState.type}
delete={confidentialityPeriodYzrbState.delete}
italic={confidentialityPeriodYzrbState.italic}
strong={confidentialityPeriodYzrbState.strong}
children={confidentialityPeriodYzrbState.children}
copyable={confidentialityPeriodYzrbState.copyable}
disabled={confidentialityPeriodYzrbState.disabled}
editable={confidentialityPeriodYzrbState.editable}
ellipsis={confidentialityPeriodYzrbState.ellipsis}
keyboard={confidentialityPeriodYzrbState.keyboard}
underline={confidentialityPeriodYzrbState.underline}
style={{gap:confidentialityPeriodYzrbState.style.gap,
color:confidentialityPeriodYzrbState.style.color,
width:confidentialityPeriodYzrbState.style.width,
height:confidentialityPeriodYzrbState.style.height,
display:confidentialityPeriodYzrbState.style.display,
fontSize:confidentialityPeriodYzrbState.style.fontSize,
textAlign:confidentialityPeriodYzrbState.style.textAlign,
alignItems:confidentialityPeriodYzrbState.style.alignItems,
marginRight:confidentialityPeriodYzrbState.style.marginRight,
flexDirection:confidentialityPeriodYzrbState.style.flexDirection,
justifyContent:confidentialityPeriodYzrbState.style.justifyContent,
}}
className={`${style.confidentialityPeriodYzrb}`}
></Antd.Typography.Text>
            {/* 保密期限 */}
            
            {/* 请输入保密期限 */}
            <Antd.Input
size={pleaseEnterTheConfidentialityPeriodState.size}
prefix={pleaseEnterTheConfidentialityPeriodState.prefix}
bordered={pleaseEnterTheConfidentialityPeriodState.bordered}
disabled={pleaseEnterTheConfidentialityPeriodState.disabled}
maxLength={pleaseEnterTheConfidentialityPeriodState.maxLength}
showCount={pleaseEnterTheConfidentialityPeriodState.showCount}
addonAfter={pleaseEnterTheConfidentialityPeriodState.addonAfter}
allowClear={pleaseEnterTheConfidentialityPeriodState.allowClear}
addonBefore={pleaseEnterTheConfidentialityPeriodState.addonBefore}
placeholder={pleaseEnterTheConfidentialityPeriodState.placeholder}
defaultValue={pleaseEnterTheConfidentialityPeriodState.defaultValue}
style={{width:pleaseEnterTheConfidentialityPeriodState.style.width,
}}
className={`${style.pleaseEnterTheConfidentialityPeriod}`}
></Antd.Input>
            {/* 请输入保密期限 */}
            </div>
            {/* 保密期限 */}
            </div>
            {/* 保密期限 */}
            
            {/* 按钮 */}
            <Antd.Button
size={buttonUvsqState.size}
type={buttonUvsqState.type}
ghost={buttonUvsqState.ghost}
shape={buttonUvsqState.shape}
danger={buttonUvsqState.danger}
children={buttonUvsqState.children}
disabled={buttonUvsqState.disabled}
style={{width:buttonUvsqState.style.width,
height:buttonUvsqState.style.height,
fontSize:buttonUvsqState.style.fontSize,
marginTop:buttonUvsqState.style.marginTop,
fontWeight:buttonUvsqState.style.fontWeight,
marginLeft:buttonUvsqState.style.marginLeft,
marginRight:buttonUvsqState.style.marginRight,
borderTopLeftRadius:buttonUvsqState.style.borderTopLeftRadius,
borderTopRightRadius:buttonUvsqState.style.borderTopRightRadius,
borderBottomLeftRadius:buttonUvsqState.style.borderBottomLeftRadius,
borderBottomRightRadius:buttonUvsqState.style.borderBottomRightRadius,
}}
className={`${style.buttonUvsq}`}
></Antd.Button>
            {/* 按钮 */}
            </div>
            {/* 请输入说明题名文字 */}
            </div>
            {/* 两栏容器 */}
            </div>
            {/* 容器 */}
            </>}
export default DescriptionOfMetadataContentPwyp
export { DescriptionOfMetadataContentPwyp }