
import axios from 'axios'
import type { AxiosResponse } from 'axios'
import { UploadFileType } from './type';
import { getDomain } from './index'
import { message } from 'antd'

const onUploadImg = async (url:string,configUuid: string, files: File[]):Promise<UploadFileType[]> => {

  if(!url) throw new Error("url不能为空")
  if(!configUuid) throw new Error("configUuid不能为空")

  const response: AxiosResponse[] = await Promise.all(
    files.map((file) => {
      return new Promise((rev, rej) => {
        const form = new FormData();
        form.append('file', file);
        form.append('storageUuid', configUuid);
        axios
          .post(url, form, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then((res) => {
            
            if(res.data.code === 500){
              throw new Error(`${res.data.message}`)
            }
            rev(res)

          })
          .catch((error) => message.error(`上传文件失败，${error.message}`));
      });
    })
  );

  const domain =  getDomain(url)
  
  return response.map((item) => item.data).flat().map(item => ({...item,previewUrl: domain + item.previewUrl}))
};


export {
  onUploadImg
}