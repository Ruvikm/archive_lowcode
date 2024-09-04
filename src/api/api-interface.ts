import Http from '@/http'
import * as UtilType from '@/utils/type'
 const http = new Http('') 
const addAdministratorEzow = <T>(apiParams: UtilType.ApiParams) => {

                    const { headerParams = {}, bodyParams = {}, restParams = {}, queryParams = {} } = apiParams

                    return http.httpPost<T>(`https://xin5rodhmieu.ngrok.xiaomiqiu123.top/registerManageUser`, queryParams, bodyParams, {headers: headerParams} )
                  }
export { 
addAdministratorEzow,
}