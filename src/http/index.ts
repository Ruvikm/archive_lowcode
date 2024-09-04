import type { AxiosError, AxiosResponse } from 'axios'
import HttpImpl from './http'
import { AxiosRequestConfig } from 'axios'
import { notification } from 'antd'



class Http extends HttpImpl {
  constructor(basePath: string) {
    super({
      baseURL: `${basePath}`,
    })

    const openNotification = (message: string) => {
      notification.error({
        description: message,
        message: '',
      })
    }

    this.instance.interceptors.request.use(
      (config) => {

        return config
      },
      (error: AxiosError) => {
        return Promise.reject(error)
      }
    )

    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
       return res.data
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (err: any) => {
        // 这里用来处理http常见错误，进行全局提示
        let message = ''
        switch (err.response?.status) {
          case 400:
            message = '请求错误(400)'
            break
          case 401:
            message = '未授权，请重新登录(401)'
            // 这里可以做清空storage并跳转到登录页的操作
            break
          case 403:
            message = '拒绝访问(403)'
            break
          case 404:
            message = '请求出错(404)'
            break
          case 408:
            message = '请求超时(408)'
            break
          case 500:
            message = '服务器错误(500)'
            break
          case 501:
            message = '服务未实现(501)'
            break
          case 502:
            message = '网络错误(502)'
            break
          case 503:
            message = '服务不可用(503)'
            break
          case 504:
            message = '网络超时(504)'
            break
          case 505:
            message = 'HTTP版本不受支持(505)'
            break
          default:
            message = `连接出错(${err.response?.status})!`
        }
        // 这里错误消息可以使用全局弹框展示出来
        // openNotification(
        //   `请求错误:
        //    错误接口: ${err?.config?.url}
        //    错误信息: ${err.message || message}`
        // )
        console.error(
          `请求错误：错误接口 ${err?.config?.url} 错误信息 ${err.message} `
        )

        // 这里是AxiosError类型，所以一般我们只reject我们需要的响应即可
        return Promise.resolve(err.response.data)
      }
    )
  }
}

export default Http
