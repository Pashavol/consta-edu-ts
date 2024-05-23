import { Button } from '@consta/uikit/Button';
import { IconForward } from '@consta/icons/IconForward';

export const ButtonExample = () =>
  <Button 
  label="Продолжить" 
  iconRight={IconForward}
  view="ghost"
  disabled 
  size="l"
  form="round"
   />