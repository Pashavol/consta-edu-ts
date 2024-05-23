import { Informer } from '@consta/uikit/Informer';
import { IconThumbUp } from '@consta/icons/IconThumbUp';

export const InformerExample = () =>
<Informer
  status="success"
  view="bordered"
  icon={IconThumbUp}
  size="s"
  title="Всё хорошо — это 'success'"
  label="Подходит, чтобы рассказать об успешном результате процесса, в котором сейчас находится пользователь"
/>