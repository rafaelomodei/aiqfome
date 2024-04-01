import { createContext, useContext, useEffect, useState } from 'react';
import { ICartContext, IItem, IUseCartContext } from './interface';

export const CartContext = createContext({} as IUseCartContext);
export const useCartStore = () => useContext(CartContext);

export const CartProvider = ({ children }: ICartContext) => {
  const [finalPrice, setFinalPrice] = useState<number>(0);
  const [items, setItems] = useState<IItem[]>([]);

  const sumFinalPrice = () => {
    const value = items.reduce(
      (sum, item) => sum + item.price * item.amount,
      0
    );

    setFinalPrice(value);
  };

  const addItem = (item: IItem): IItem[] => {
    const hasItem = items.find((i) => i.id === item.id);

    if (!hasItem) {
      const currentItem = [...items, { ...item, amount: 1 }];
      setItems(currentItem);
      return currentItem;
    }

    const othersItems = items.filter((i) => i.id !== item.id);

    const currentItem = [
      ...othersItems,
      { ...hasItem, amount: hasItem.amount + 1 },
    ];

    setItems(currentItem);
    return currentItem;
  };

  const toggleItem = (item: IItem, oldItem: IItem): IItem[] => {
    const hasOldItemItem = items.find((i) => i.id === oldItem.id);

    if (!hasOldItemItem) {
      const currentItem = addItem(item);
      return currentItem;
    }

    const othersItems = items.filter((i) => i.id !== oldItem.id);
    const currentItem = [...othersItems, { ...item, ...{ amount: 1 } }];
    setItems(currentItem);

    return currentItem;
  };

  const updateItem = (item: IItem) => {
    const hasItem = items.find((i) => i.id === item.id);

    const othersItems = items.filter((i) => i.id !== item.id);
    if (!hasItem) return othersItems;

    const currentItem = [
      ...othersItems,
      { ...hasItem, ...{ price: item.price } },
    ];

    setItems(currentItem);
    return currentItem;
  };

  const removeItem = (item: IItem): IItem[] => {
    const hasItem = items.find((i) => i.id === item.id);

    const othersItems = items.filter((i) => i.id !== item.id);
    if (!hasItem) return othersItems;

    if (hasItem.amount === 1) {
      setItems(othersItems);
      return othersItems;
    }

    const currentItem = [
      ...othersItems,
      { ...hasItem, amount: hasItem.amount - 1 },
    ];

    setItems(currentItem);
    return currentItem;
  };

  const findItem = (item: IItem): IItem | undefined => {
    return items.find((i) => i.id === item.id);
  };

  useEffect(() => {
    sumFinalPrice();
  }, [items]);

  return (
    <CartContext.Provider
      value={{
        finalPrice,
        addItem,
        updateItem,
        removeItem,
        toggleItem,
        findItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
