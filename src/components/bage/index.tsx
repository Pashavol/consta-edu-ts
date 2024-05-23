import { Badge } from '@consta/uikit/Badge';
import { IconCheck } from '@consta/icons/IconCheck';

export const BageExample = () =>
  <Badge 
  status="success" 
  label="Черновик" 
  iconLeft={IconCheck} 
  view="stroked" 
  size="l" 
  form="round"/>