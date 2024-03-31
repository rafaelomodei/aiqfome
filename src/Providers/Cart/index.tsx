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

  const addItem = (item: IItem) => {
    const currentItem = items.find((i) => i.id === item.id);

    if (!currentItem) return setItems([...items, { ...item, amount: 1 }]);

    const othersItems = items.filter((i) => i.id !== item.id);

    setItems([
      ...othersItems,
      { ...currentItem, amount: currentItem.amount + 1 },
    ]);
  };

  const updateItem = (item: IItem) => {
    const currentItem = items.find((i) => i.id === item.id);

    if (!currentItem) return;

    const othersItems = items.filter((i) => i.id !== item.id);

    setItems([...othersItems, { ...currentItem, ...{ price: item.price } }]);
  };

  const removeItem = (item: IItem) => {
    const currentItem = items.find((i) => i.id === item.id);

    if (!currentItem) return;
    const othersItems = items.filter((i) => i.id !== item.id);

    if (currentItem.amount === 1) {
      setItems(othersItems);
      return;
    }

    setItems([
      ...othersItems,
      { ...currentItem, amount: currentItem.amount - 1 },
    ]);
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
