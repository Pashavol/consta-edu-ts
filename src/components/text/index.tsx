import { Text } from '@consta/uikit/Text';

export const TextExample = () =>
<>
<Text 
view="primary"
size="l"
font="mono"
weight="semibold"
fontStyle="italic"
spacing="xs"
lineHeight="l"
decoration="underline"
transform="uppercase"
align="center"
cursor="pointer"
truncate
as="div"
className="custom-text"
>  Очень длинный текст, который 
<Text as="span" fontStyle="italic" weight="bold">
    Примечание.&nbsp;
  </Text>
  должен располагаться на одной строке и не влезает
  в родительский контейнер.
</Text> 
</>