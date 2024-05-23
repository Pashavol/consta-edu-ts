import { Responses404 } from '@consta/uikit/Responses404';
import { Button } from '@consta/uikit/Button';

export const ResponsesExample = () =>
<Responses404 
size="m"
title="Всё готово"
description="Можно двигаться дальше: сначала два шага направо, потом четыре налево, и всё — только вперёд!"
actions={
  <>
<Button size="m" view="primary" label="Принять" />
<Button size="m" view="ghost" label="Отклонить" />
</>
}
/>