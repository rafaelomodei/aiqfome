import { IItem } from '../../../Providers/Cart/interface';

export interface ISelectItem {
  item: IItem;
  total?: number;
  showLabel?: boolean;
  showTrash?: boolean;
  size?: 'sm' | 'xs';
}
