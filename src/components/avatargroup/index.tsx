import { AvatarGroup, AvatarGroupDefaultItem } from '@consta/uikit/AvatarGroup';

const avatarGroupItems: AvatarGroupDefaultItem[] = [
    {
      name: 'Вадим Матвеев',
      url: '',
    },
    {
      name: 'Лидия Индриксон',
      url: '',
    },
    {
      name: 'Геннадий Морозов',
      url: '',
    },
    {
      name: 'Аркадий Лушко',
      url: '',
    },
    {
      name: 'Георгий Калинин',
      url: '',
    },
    {
      name: 'Виталий Алтуфьев',
      url: 'https://i.ibb.co/K2R8Lqb/Rectangle-1496.png',
    },
    {
      name: 'Вадим Матвеев',
      url: '',
    },
    {
      name: 'Лидия Индриксон',
      url: '',
    },
    {
      name: 'Геннадий Морозов',
      url: '',
    },
    {
      name: 'Аркадий Лушко',
      url: '',
    },
    {
      name: 'Георгий Калинин',
      url: '',
    },
    {
      name: 'Виталий Алтуфьев',
      url: '',
    },
  ];


export const AvatarGroupExample = () =>
<AvatarGroup 
items={avatarGroupItems} 
visibleCount={6}
size="l"
form="default" 
/>