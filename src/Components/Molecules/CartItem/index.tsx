import { Button, Flex, Text } from '@chakra-ui/react';
import { theme } from '../../../Utils/Theme';
import { SelectItem } from '../../Atoms/SelectItem';
import { PRODUCTS } from '../../../Utils/Constants';
import { useCartStore } from '../../../Providers/Cart';

export const CartItem = () => {
  const { finalPrice, addItem, findItem } = useCartStore();

  return (
    <Flex
      alignItems='center'
      maxW={360}
      w='100%'
      justifyContent='space-between'
    >
      <Flex flexDirection='column'>
        <Text fontSize='lg' as='b' color={theme.colors.titleSecondary}>
          quantos?
        </Text>
        {finalPrice > 0 && (
          <Flex alignItems='center'>
            <Text fontSize='sm' mr={2}>
              total
            </Text>
            <Text fontSize='sm' as='b' color={theme.colors.titleSecondary}>
              R$ {finalPrice.toFixed(2)}
            </Text>
          </Flex>
        )}
      </Flex>

      {finalPrice > 0 ? (
        <SelectItem
          item={PRODUCTS['Ceviche de salmão']}
          total={findItem(PRODUCTS['Ceviche de salmão'])?.amount}
          showTrash
        />
      ) : (
        <Button
          bg={theme.colors.gray}
          color='white'
          colorScheme='grey'
          onClick={() => addItem(PRODUCTS['Ceviche de salmão'])}
        >
          adicionar
        </Button>
      )}
    </Flex>
  );
};
