import { Attachment } from '@consta/uikit/Attachment';
import { IconTrash } from '@consta/icons/IconTrash';

export const AttachmentExample = () => 
<Attachment
  size="m"
  fileName="my_tale_about_mars_variant_121_final"
  fileExtension="docx"
  withPictogram
  fileDescription="1,5 Mб 21.02.2051, 14:12"
  loadingText="Загрузка"
  buttonIcon={IconTrash}
  buttonTitle="Удалить"
  onClick={() => console.log('onClick')}
  onButtonClick={(e) => {
    e.stopPropagation();
    console.log('onButtonClick');
  }}
/>


