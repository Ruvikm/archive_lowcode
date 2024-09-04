import axios from 'axios'
import type { AxiosResponse, CreateAxiosDefaults, AxiosInstance, AxiosRequestConfig } from 'axios'
import axiosRetry, { type IAxiosRetryConfig } from 'axios-retry'


class HttpImpl {
  instance: AxiosInstance

  constructor(
    config?: CreateAxiosDefaults,
    axiosRetryConfig?: IAxiosRetryConfig
  ) {
    this.instance = axios.create(config)
    // 重试 默认3次
    axiosRetry(this.instance, { retries: 3, ...axiosRetryConfig })
  }

  public request<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return new Promise((resolve, reject) => {
      this.instance(config)
        .then((res: AxiosResponse<T>) => resolve(res))
        .catch((error: AxiosError) => reject(error))
    })
  }

  public httpPost<T>(url: string, params: unknown, data: unknown, config: AxiosRequestConfig = {}) {
    if (!config.headers) {
      config.headers = {}
    }
    config.headers['Content-Type'] = 'application/json;charset=utf-8'
    return this.request<T>({ ...config, url, data, params, method: 'POST' })
  }

  public httpPostFormData<T>(
    url: string,
    params: unknown,
    data: unknown,
    config: AxiosRequestConfig = {}
  ) {
    if (!config.headers) {
      config.headers = {}
    }
    config.headers['Content-Type'] = 'multipart/form-data'
    return this.request<T>({ ...config, url, data, params, method: 'POST' })
  }

  public httpGet<T>(url: string, params: unknown, data: unknown, config: AxiosRequestConfig = {}) {
    if (!config.headers) {
      config.headers = {}
    }
    return this.request<T>({
      ...config,
      url,
      data,
      params,
      method: 'GET',
    })
  }

  public httpDelete<T>(
    url: string,
    params: unknown,
    data: unknown,
    config: AxiosRequestConfig = {}
  ) {
    if (!config.headers) {
      config.headers = {}
    }
    return this.request<T>({ ...config, url, data, params, method: 'DELETE' })
  }

  public httpPut<T>(url: string, params: unknown, data: unknown, config: AxiosRequestConfig = {}) {
    if (!config.headers) {
      config.headers = {}
    }
    return this.request<T>({ ...config, url, data, params, method: 'PUT' })
  }

  public httpPatch<T>(url: string, params: unknown,data: unknown, config: AxiosRequestConfig = {}) {
    if (!config.headers) {
      config.headers = {}
    }
    return this.request<T>({ ...config, url, data, params, method: 'PATCH' })
  }
}

export default HttpImpl
