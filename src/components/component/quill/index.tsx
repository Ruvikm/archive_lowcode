import { useEffect, useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import '@ckeditor/ckeditor5-build-classic/build/translations/zh-cn'
import CustomUploadAdapterPlugin from './upload'

interface QuillProps {
  value: string
  onChange: (value: string) => void
  disabled?: boolean
  className: string
  url: string
  configUuid: string
  style?: {[key:string] : string | number}
}

function Quill(props: QuillProps) {
  const { disabled, onChange, url, configUuid,style } = props
  const className = props?.className

  return (
    <div  className={className}>
      <CKEditor
        style={style}
        editor={ClassicEditor}
       
        disabled={disabled}
        config={{
          language: 'zh-cn', // 设置中文
          extraPlugins: [
            function (editor) {
              CustomUploadAdapterPlugin(url, configUuid, editor)
            },
          ], // 自定义图片上传
        }}
        onChange={(_event, editor) => {
          onChange && onChange(editor.getData())
        }}
        data={props?.value}
      />
    </div>
  )
}

export { Quill }
export default Quill
