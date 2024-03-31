import { IItem } from '../../../Providers/Cart/interface';

export interface ISelectItem {
  item: IItem;
  showLabel?: boolean;
  showTrash?: boolean;
  size?: 'sm' | 'xs';
}
