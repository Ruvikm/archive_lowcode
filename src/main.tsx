
                  import React from 'react'
                  import ReactDOM from 'react-dom/client'
                  import { BrowserRouter } from 'react-router-dom'
                  import '@/assets/scss/reset.scss'
                  import 'antd/dist/reset.css'
                  import { Provider } from 'react-redux'
                  import store from './store/store'
                  import App from './App'
                  import dayjs from 'dayjs';
                  
                  import 'dayjs/locale/zh-cn';
                  
                  dayjs.locale('zh-cn');
                  
                  
                  const main = () => {
                    return (
                      <Provider store={store}>
                        <React.StrictMode>
                          <BrowserRouter basename='/'>
                            <App />
                          </BrowserRouter>
                        </React.StrictMode>
                      </Provider>
                    )
                  }
                  
                  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(main())                  
                  