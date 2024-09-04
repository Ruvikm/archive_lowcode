
import { MdPreview } from 'md-editor-rt';


interface MarkDownProps {
  value: string;
  className?: string;
}

const MarkDown = (props: MarkDownProps) => {
  const { value } = props;
  return (
    <MdPreview
    {...props}
     modelValue={value}
    ></MdPreview>
  );
};
export { MarkDown };

export default MarkDown;
