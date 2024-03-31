import { Flex, Image, Text } from '@chakra-ui/react';
import { ICON } from '../../../Assets';
import { ISelectItem } from './interface';
import { useCart } from '../../../Hooks/useCart';
import { useState } from 'react';

export const SelectItem = (props: ISelectItem) => {
  const { item, showTrash, showLabel, size = 'sm' } = props;

  const [totalItem, setTotalItem] = useState<number>(0);

  const isSizeSM = size === 'sm';

  const { addItem, removeItem } = useCart();

  const handleClickAdd = () => {
    addItem(item);
    setTotalItem(totalItem + 1);
  };

  const handleClickRemove = () => {
    if (totalItem === 0) return;

    removeItem(item);
    setTotalItem(totalItem - 1);
  };

  const handleFirstIcon = () => {
    if (showTrash && totalItem === 1)
      return (
        <Image
          src={ICON.trash}
          boxSize={isSizeSM ? '36px' : '24px'}
          role='presentation'
          onClick={handleClickRemove}
        />
      );

    return totalItem ? (
      <Image
        src={ICON.subtract}
        boxSize={isSizeSM ? '36px' : '24px'}
        role='presentation'
        onClick={handleClickRemove}
      />
    ) : (
      <Image src={ICON.subtractDesabled} boxSize={isSizeSM ? '36px' : '24px'} />
    );
  };

  return (
    <Flex alignItems='center'>
      {handleFirstIcon()}
      <Text fontSize={isSizeSM ? 'lg' : 'xs'} mx={4} as='b'>
        {totalItem}
      </Text>
      <Image
        src={ICON.add}
        boxSize={isSizeSM ? '36px' : '24px'}
        role='presentation'
        onClick={handleClickAdd}
      />
      {showLabel && (
        <Text fontSize='sm' pl={2}>
          {item.name}
        </Text>
      )}
    </Flex>
  );
};
