import { BadgePropStatus, BadgePropView } from '@consta/uikit/Badge';
import { BadgeGroup } from '@consta/uikit/BadgeGroup';

type Item = {
    text: string;
    color: BadgePropStatus;
    form?: BadgePropView;
  };
  
  const items: Item[] = [
    {
      text: 'Согласован',
      color: 'success',
    },
    {
      text: 'ожидает',
      color: 'warning',
    },
    {
      text: 'новый',
      form: 'stroked',
      color: 'normal',
    },
    {
      text: 'черновик',
      color: 'system',
    },
    {
      text: 'отказано',
      form: 'stroked',
      color: 'error',
    },
  ];
  
  const getItemLabel = (item: Item) => item.text;
  const getItemView = (item: Item) => item.form;
  const getItemStatus = (item: Item) => item.color;
  
  export const BadgeGroupExample = () => {
    return (
      <BadgeGroup
        items={[...items]}
        getItemKey={getItemLabel}
        getItemLabel={getItemLabel}
        getItemView={getItemView}
        getItemStatus={getItemStatus}
      />
    );
  };

  
  
     
      

