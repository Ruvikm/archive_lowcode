import { onUploadImg } from '@/utils/upload'
import { CKEditor } from '@ckeditor/ckeditor5-react'

class MyUploadAdapter {

  loader: null
  url: string
  configUuid: string

  constructor( url:string ,configUuid: string ,loader: CKEditor ) {
    // loader实例
    this.loader = loader
    this.url = url
    this.configUuid = configUuid
  }

  // 实际上传步骤
  async upload () {
    // loader中file是个promise
    const file = await this.loader.file
    // 自己覆写此部分
    // 进行oss上传和处理
   const [fileInfo] = await onUploadImg(this.url, this.configUuid, [file])
   
    // 返回图片路径
    return {
      default: fileInfo?.previewUrl // default字段暂不可改
    }
  }

  // 其他处理可参考官方示例
  abort() {
  }
  
  progress() {
  }
}

// 暴露adapter给组件使用
export default function CustomUploadAdapterPlugin (url:string ,configUuid: string ,editor: CKEditor) {
  editor.plugins.get( 'FileRepository' ).createUploadAdapter = ( loader ) => {
    return new MyUploadAdapter(url,configUuid,loader)
  }
}
