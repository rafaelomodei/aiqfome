export interface IItem {
  id: string;
  name: string;
  price: number;
  amount: number;
}

export interface IUseCartContext {
  finalPrice: number;
  addItem: (item: IItem) => void;
  updateItem: (item: IItem) => void;
  removeItem: (item: IItem) => void;
}

export interface ICartContext {
  children: React.ReactNode;
}
