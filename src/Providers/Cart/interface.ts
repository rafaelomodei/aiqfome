export interface IItem {
  id: string;
  name: string;
  price: number;
  amount: number;
}

export interface IUseCartContext {
  finalPrice: number;
  addItem: (item: IItem) => IItem[];
  updateItem: (item: IItem) => IItem[];
  removeItem: (item: IItem) => IItem[];
  toggleItem: (item: IItem, oldItem: IItem) => IItem[];
}

export interface ICartContext {
  children: React.ReactNode;
}
