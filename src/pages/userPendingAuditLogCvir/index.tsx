import style from './index.module.scss'
import { useState } from 'react'
import * as Antd from '@/components/antd'
// 用户待审核日志
              const UserPendingAuditLogCvir = () => {

              // 容器 开始属性
              const [containerNqqbState, setcontainerNqqbState] = useState({style:{display:"flex",
flexDirection:"column",
},
})
              // 容器 结束属性
              
              // 待审核日志 开始属性
              const [pendingAuditLogMyvyState, setpendingAuditLogMyvyState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"待审核日志",
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
              // 待审核日志 结束属性
              
              // 容器1 开始属性
              const [containerCpajState, setcontainerCpajState] = useState({style:{display:"flex",
flexDirection:"column",
},
})
              // 容器1 结束属性
              
              // 点击显示待审核日志 开始属性
              const [clickToDisplayPendingAuditLogsTtbhState, setclickToDisplayPendingAuditLogsTtbhState] = useState({size:"middle",
type:"primary",
ghost:false,
shape:"default",
danger:false,
children:"点击显示待审核日志",
disabled:false,
style:{},
})
              // 点击显示待审核日志 结束属性
              
              // TODO 开始属性
              const [todoState, settodoState] = useState({code:false,
mark:false,
type:undefined,
delete:false,
italic:false,
strong:false,
children:"TODO",
copyable:false,
disabled:false,
editable:false,
ellipsis:false,
keyboard:false,
underline:false,
style:{},
})
              // TODO 结束属性
              return<>
            {/* 容器 */}
            <div
style={{display:containerNqqbState.style.display,
flexDirection:containerNqqbState.style.flexDirection,
}}
className={`${style.containerNqqb}`}
>
            {/* 待审核日志 */}
            <Antd.Typography.Text
code={pendingAuditLogMyvyState.code}
mark={pendingAuditLogMyvyState.mark}
type={pendingAuditLogMyvyState.type}
delete={pendingAuditLogMyvyState.delete}
italic={pendingAuditLogMyvyState.italic}
strong={pendingAuditLogMyvyState.strong}
children={pendingAuditLogMyvyState.children}
copyable={pendingAuditLogMyvyState.copyable}
disabled={pendingAuditLogMyvyState.disabled}
editable={pendingAuditLogMyvyState.editable}
ellipsis={pendingAuditLogMyvyState.ellipsis}
keyboard={pendingAuditLogMyvyState.keyboard}
underline={pendingAuditLogMyvyState.underline}
style={{fontSize:pendingAuditLogMyvyState.style.fontSize,
textAlign:pendingAuditLogMyvyState.style.textAlign,
}}
className={`${style.pendingAuditLogMyvy}`}
></Antd.Typography.Text>
            {/* 待审核日志 */}
            </div>
            {/* 容器 */}
            
            {/* 容器1 */}
            <div
style={{display:containerCpajState.style.display,
flexDirection:containerCpajState.style.flexDirection,
}}
className={`${style.containerCpaj}`}
>
            {/* 点击显示待审核日志 */}
            <Antd.Button
size={clickToDisplayPendingAuditLogsTtbhState.size}
type={clickToDisplayPendingAuditLogsTtbhState.type}
ghost={clickToDisplayPendingAuditLogsTtbhState.ghost}
shape={clickToDisplayPendingAuditLogsTtbhState.shape}
danger={clickToDisplayPendingAuditLogsTtbhState.danger}
children={clickToDisplayPendingAuditLogsTtbhState.children}
disabled={clickToDisplayPendingAuditLogsTtbhState.disabled}
style={{}}
className={`${style.clickToDisplayPendingAuditLogsTtbh}`}
></Antd.Button>
            {/* 点击显示待审核日志 */}
            
            {/* TODO */}
            <Antd.Typography.Text
code={todoState.code}
mark={todoState.mark}
type={todoState.type}
delete={todoState.delete}
italic={todoState.italic}
strong={todoState.strong}
children={todoState.children}
copyable={todoState.copyable}
disabled={todoState.disabled}
editable={todoState.editable}
ellipsis={todoState.ellipsis}
keyboard={todoState.keyboard}
underline={todoState.underline}
style={{}}
className={`${style.todo}`}
></Antd.Typography.Text>
            {/* TODO */}
            </div>
            {/* 容器1 */}
            </>}
export default UserPendingAuditLogCvir
export { UserPendingAuditLogCvir }