import { Flex, Text } from '@chakra-ui/react';
import { theme } from '../../../Utils/Theme';
import { SelectItem } from '../../Atoms/SelectItem';

export const CartItem = ({ finalPrice }: { finalPrice: number }) => {
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
        <Flex alignItems='center'>
          <Text fontSize='sm' mr={2}>
            total
          </Text>
          <Text fontSize='sm' as='b' color={theme.colors.titleSecondary}>
            R$ {finalPrice.toFixed(2)}
          </Text>
        </Flex>
      </Flex>

      <SelectItem showTrash value={19.9} />
    </Flex>
  );
};
