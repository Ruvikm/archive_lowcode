import style from './index.module.scss'
import { useState } from 'react'
import * as Antd from '@/components/antd'
// 用户个人中心
              const UserPersonalCenterGtnx = () => {

              // 容器 开始属性
              const [containerXmrlState, setcontainerXmrlState] = useState({style:{display:"flex",
flexDirection:"column",
},
})
              // 容器 结束属性
              
              // 个人中心 开始属性
              const [personalCenterLhprState, setpersonalCenterLhprState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"个人中心",
copyable:false,
disabled:false,
editable:false,
ellipsis:false,
keyboard:false,
underline:false,
style:{fontSize:"30px",
textAlign:"center",
},
})
              // 个人中心 结束属性
              
              // 容器1 开始属性
              const [containerZeyaState, setcontainerZeyaState] = useState({style:{display:"flex",
flexDirection:"column",
},
})
              // 容器1 结束属性
              
              // 我的日志 开始属性
              const [myLogState, setmyLogState] = useState({size:"middle",
type:"primary",
ghost:false,
shape:"default",
danger:false,
children:"我的日志",
disabled:false,
style:{},
})
              // 我的日志 结束属性
              
              // 退出 开始属性
              const [quitRxmfState, setquitRxmfState] = useState({size:"middle",
type:"primary",
ghost:false,
shape:"default",
danger:false,
children:"退出",
disabled:false,
style:{},
})
              // 退出 结束属性
              return<>
            {/* 容器 */}
            <div
style={{display:containerXmrlState.style.display,
flexDirection:containerXmrlState.style.flexDirection,
}}
className={`${style.containerXmrl}`}
>
            {/* 个人中心 */}
            <Antd.Typography.Text
code={personalCenterLhprState.code}
mark={personalCenterLhprState.mark}
type={personalCenterLhprState.type}
delete={personalCenterLhprState.delete}
italic={personalCenterLhprState.italic}
strong={personalCenterLhprState.strong}
children={personalCenterLhprState.children}
copyable={personalCenterLhprState.copyable}
disabled={personalCenterLhprState.disabled}
editable={personalCenterLhprState.editable}
ellipsis={personalCenterLhprState.ellipsis}
keyboard={personalCenterLhprState.keyboard}
underline={personalCenterLhprState.underline}
style={{fontSize:personalCenterLhprState.style.fontSize,
textAlign:personalCenterLhprState.style.textAlign,
}}
className={`${style.personalCenterLhpr}`}
></Antd.Typography.Text>
            {/* 个人中心 */}
            </div>
            {/* 容器 */}
            
            {/* 容器1 */}
            <div
style={{display:containerZeyaState.style.display,
flexDirection:containerZeyaState.style.flexDirection,
}}
className={`${style.containerZeya}`}
>
            {/* 我的日志 */}
            <Antd.Button
size={myLogState.size}
type={myLogState.type}
ghost={myLogState.ghost}
shape={myLogState.shape}
danger={myLogState.danger}
children={myLogState.children}
disabled={myLogState.disabled}
style={{}}
className={`${style.myLog}`}
></Antd.Button>
            {/* 我的日志 */}
            
            {/* 退出 */}
            <Antd.Button
size={quitRxmfState.size}
type={quitRxmfState.type}
ghost={quitRxmfState.ghost}
shape={quitRxmfState.shape}
danger={quitRxmfState.danger}
children={quitRxmfState.children}
disabled={quitRxmfState.disabled}
style={{}}
className={`${style.quitRxmf}`}
></Antd.Button>
            {/* 退出 */}
            </div>
            {/* 容器1 */}
            </>}
export default UserPersonalCenterGtnx
export { UserPersonalCenterGtnx }