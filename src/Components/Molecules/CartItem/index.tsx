import { Flex, Text } from '@chakra-ui/react';
import { theme } from '../../../utils/theme';
import { SelectItem } from '../../Atoms/SelectItem';

export const CartItem = () => {
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
            R$ 29,90
          </Text>
        </Flex>
      </Flex>

      <SelectItem showTrash />
    </Flex>
  );
};
