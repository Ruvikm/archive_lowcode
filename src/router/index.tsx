import React from 'react'
import { useRoutes, Outlet } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import Elementpage401 from '@/pages/page401/index.tsx'
import ElementhomePage from '@/pages/homePage/index.tsx'
import Elementpage404 from '@/pages/page404/index.tsx'
import ElementloginInterface from '@/pages/loginInterface/index.tsx'
import ElementaddAdministratorObhg from '@/pages/addAdministratorObhg/index.tsx'
import Elementnavigation from '@/pages/navigation/index.tsx'
import ElementfileNumberConfigurationSnft from '@/pages/fileNumberConfigurationSnft/index.tsx'
import ElementdescriptionOfMetadataContentPwyp from '@/pages/descriptionOfMetadataContentPwyp/index.tsx'
import ElementuserLogInputLkqh from '@/pages/userLogInputLkqh/index.tsx'
import ElementuserPersonalCenterGtnx from '@/pages/userPersonalCenterGtnx/index.tsx'
import ElementuserMyLogOeul from '@/pages/userMyLogOeul/index.tsx'
import ElementuserPendingAuditLogCvir from '@/pages/userPendingAuditLogCvir/index.tsx'
import ElementaggregationHierarchyGtyj from '@/pages/aggregationHierarchyGtyj/index.tsx'
import ElementverifiedLogsMpkq from '@/pages/verifiedLogsMpkq/index.tsx'
import ElementpendingAuditLogBogy from '@/pages/pendingAuditLogBogy/index.tsx'
import ElementcharacteristicsOfMetadataFormatZhhg from '@/pages/characteristicsOfMetadataFormatZhhg/index.tsx'
import ElementmetadataStorageLocationDyss from '@/pages/metadataStorageLocationDyss/index.tsx'
import ElementmetadataElectronicSignatureKlim from '@/pages/metadataElectronicSignatureKlim/index.tsx'
import ElementsourceOfMetadataDjrr from '@/pages/sourceOfMetadataDjrr/index.tsx'
import ElementreferenceUbnk from '@/pages/referenceUbnk/index.tsx'
import ElementgenerateFileGtqt from '@/pages/generateFileGtqt/index.tsx'
import ElementuserNavigationPage from '@/pages/userNavigationPage/index.tsx'
const routes = [{
                  path: '/',
                  element: <Navigate to="/defaultPageFhue"></Navigate>,
                  },
{
                  path: '/',
                  children: [
{
          path: 'page401',
          element: <Elementpage401 />,
          title: "页面401",
          children: [
          ]},
{
          path: 'homePage',
          element: <ElementhomePage />,
          title: "首页",
          children: [
          ]},
{
          path: 'page404',
          element: <Elementpage404 />,
          title: "页面404",
          children: [
          ]},
{
          path: 'defaultPageFhue',
          element: <ElementloginInterface />,
          title: "登录界面",
          children: [
          ]},
{
          path: 'page',
          element: <ElementaddAdministratorObhg />,
          title: "添加管理员",
          children: [
          ]},
{
          path: 'pageMqun',
          element: <Elementnavigation />,
          title: "导航",
          children: [
          ]},
{
          path: 'pageDano',
          element: <ElementfileNumberConfigurationSnft />,
          title: "档号配置",
          children: [
          ]},
{
          path: 'pageJzod',
          element: <ElementdescriptionOfMetadataContentPwyp />,
          title: "元数据内容描述",
          children: [
          ]},
{
          path: 'pagePpnk',
          element: <ElementuserLogInputLkqh />,
          title: "用户日志输入",
          children: [
          ]},
{
          path: 'pageNzxq',
          element: <ElementuserPersonalCenterGtnx />,
          title: "用户个人中心",
          children: [
          ]},
{
          path: 'pageQgpx',
          element: <ElementuserMyLogOeul />,
          title: "用户我的日志",
          children: [
          ]},
{
          path: 'pageIkbi',
          element: <ElementuserPendingAuditLogCvir />,
          title: "用户待审核日志",
          children: [
          ]},
{
          path: 'pageVomd',
          element: <ElementaggregationHierarchyGtyj />,
          title: "聚合层次",
          children: [
          ]},
{
          path: 'pageStsm',
          element: <ElementverifiedLogsMpkq />,
          title: "已审核日志",
          children: [
          ]},
{
          path: 'pageZuvc',
          element: <ElementpendingAuditLogBogy />,
          title: "待审核日志",
          children: [
          ]},
{
          path: 'pageWcoq',
          element: <ElementcharacteristicsOfMetadataFormatZhhg />,
          title: "元数据形式特征",
          children: [
          ]},
{
          path: 'pageDbgh',
          element: <ElementmetadataStorageLocationDyss />,
          title: "元数据存储位置",
          children: [
          ]},
{
          path: 'pageWsbf',
          element: <ElementmetadataElectronicSignatureKlim />,
          title: "元数据电子签名",
          children: [
          ]},
{
          path: 'pageGafh',
          element: <ElementsourceOfMetadataDjrr />,
          title: "元数据来源",
          children: [
          ]},
{
          path: 'pageNfdu',
          element: <ElementreferenceUbnk />,
          title: "档号",
          children: [
          ]},
{
          path: 'pageYfhi',
          element: <ElementgenerateFileGtqt />,
          title: "生成文件",
          children: [
          ]},
{
          path: 'pageLfxr',
          element: <ElementuserNavigationPage />,
          title: "用户-导航页",
          children: [
          ]},
]},
{
                path: '*',
                element: <div>敬请期待</div>,
              },
            ]
const Router = () => {
              return useRoutes(routes)}
export default Router
export { routes }
