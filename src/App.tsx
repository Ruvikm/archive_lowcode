import './App.scss'
import React from 'react'
import { ConfigProvider, theme } from 'antd'
import RouterItems from '@/router/index.tsx'
import zhCN from 'antd/locale/zh_CN'

function App() {
  return (
    <>
      <div className="sa3-app">
        <React.Suspense fallback="loading">
          <ConfigProvider
            theme={{
              algorithm: theme.defaultAlgorithm,
            }}
            componentSize="small"
            locale={zhCN}
          >
            <RouterItems />
          </ConfigProvider>
        </React.Suspense>
      </div>
    </>
  )
}

export default App
