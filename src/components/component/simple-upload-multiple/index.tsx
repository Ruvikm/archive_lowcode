import { ReactElement } from 'react'
import { message, Upload } from 'antd'
import { onUploadImg } from '@/utils/upload'

interface SimpleUploadMultipleValue {
  name: string
  uid: string
  url: string
}

interface SimpleUploadMultipleProps {
  disabled: boolean
  value: SimpleUploadMultipleValue[]
  className: string
  url: string
  configUuid: string
  style?: { [key: string]: string }
  onChange?: (fileList: SimpleUploadMultipleValue[]) => void
  children: ReactElement[]
}

const SimpleUploadMultiple = (props: SimpleUploadMultipleProps) => {
  const {
    disabled,
    className,
    style,
    value = [],
    children,
    url,
    onChange,
    configUuid,
  } = props

  return (
    <Upload
      disabled={disabled}
      className={className}
      style={style}
      fileList={value}
      data={{
        storageUuid: configUuid,
      }}
      onRemove={(file) => {
        onChange && onChange(value?.filter((item) => item.uid !== file.uid))
      }}
      customRequest={async (info) => {
        const { file } = info

        const files = await onUploadImg(url, configUuid, [file as File])

        onChange &&
          onChange([
            ...(value || []),
            ...files.map((item) => ({
              uid: file?.uid,
              name: item.fileName,
              url: item.previewUrl,
            })),
          ])
      }}
    >
      {children}
    </Upload>
  )
}
export { SimpleUploadMultiple }

export default SimpleUploadMultiple
