import { MdEditor } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import { onUploadImg } from '@/utils/upload'

interface MarkDownEditorProps {
  value?: string;
  onChange?: () => void;
  disabled?: boolean;
  className: string;
  style?: { [key: string]: string };
  url: string
  configUuid: string
}

const MarkDownEditor = (props: MarkDownEditorProps) => {
  const modelValue = props.value || '';

  return <MdEditor {...props} modelValue={modelValue}  onUploadImg={async (file,callback)=>{
    const files =  await onUploadImg(props.url, props.configUuid, file)
    callback(files.map(item => item.previewUrl))
  }} />;
};

export default MarkDownEditor;
export { MarkDownEditor };
