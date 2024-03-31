import { useEffect, useState } from 'react';
import { IItem } from './interface';

export const useCart = () => {
  const [finalPrice, setFinalPrice] = useState<number>(0);
  const [items, setItems] = useState<IItem[]>([]);

  // const updatePrice = (value: number) =>
  //   setFinalPrice((prevPrice) => prevPrice + value);

  const sumFinalPrice = () => {
    console.info('sumFinalPrice::items: ', items);
    const value = items.reduce(
      (sum, item) => sum + item.price * item.amount,
      0
    );

    setFinalPrice(value);
  };

  const addItem = (item: IItem) => {
    console.info('addItem::items: ', items);

    const currentItem = items.find((i) => i.id === item.id);

    console.info('addItem::currentItem: ', currentItem);

    if (!currentItem) {
      console.info('addItem::IF::!currentItem::items: ', items);

      console.info('addItem::IF::!currentItem::setItems: ', [
        ...items,
        { ...item, amount: 1 },
      ]);

      return setItems([...items, { ...item, amount: 1 }]);
    }

    const othersItems = items.filter((i) => i.id !== item.id);

    console.info('addItem::othersItems: ', othersItems);

    console.info('addItem::depois do IF::setItems: ', [
      ...othersItems,
      { ...currentItem, amount: currentItem.amount + 1 },
    ]);

    setItems([
      ...othersItems,
      { ...currentItem, amount: currentItem.amount + 1 },
    ]);
  };

  const updateItem = (item: IItem) => {
    const currentItem = items.find((i) => i.id === item.id);

    if (!currentItem) return;

    setItems([...items, { ...currentItem, ...item }]);
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

  // const setDispatchEventUpdatePrice = (event: number) => {
  //   const value = new CustomEvent('updatePrice', {
  //     detail: {
  //       value: event,
  //     },
  //   });
  //   window.dispatchEvent(value);
  // };

  // const handleUpdatePrice = (event: CustomEvent) => {
  //   setFinalPrice((prevPrice) => prevPrice + event.detail.value);
  // };

  // const handleEventListener = () => {
  //   window.addEventListener('updatePrice', handleUpdatePrice as EventListener);
  //   return () => {
  //     window.removeEventListener(
  //       'updatePrice',
  //       handleUpdatePrice as EventListener
  //     );
  //   };
  // };

  useEffect(() => {
    // handleEventListener();
    console.info('useEffect::items: ', items);

    sumFinalPrice();
  }, [items]);

  useEffect(() => {
    console.info('useEffect::finalPrice: ', finalPrice);
  }, [finalPrice]);

  return {
    finalPrice,
    addItem,
    updateItem,
    removeItem,
  };
};
