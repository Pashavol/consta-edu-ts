import { Card } from '@consta/uikit/Card';
import { Text } from '@consta/uikit/Text';

export const CardExample = () =>
<Card 
verticalSpace="m" 
horizontalSpace="l"
//status="alert"
form="round"
shadow={false}
border
>
<Text>Здесь может быть ваш текст</Text>
</Card>