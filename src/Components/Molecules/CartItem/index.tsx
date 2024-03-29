import { Flex, Image, Text } from '@chakra-ui/react';
import { ICON } from '../../../Assets';
import { theme } from '../../../utils/theme';

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

      <Flex alignItems='center'>
        <Image src={ICON.trash} boxSize='36px' />
        <Text fontSize='lg' mx={4} as='b'>
          2
        </Text>
        <Image src={ICON.add} boxSize='36px' />
      </Flex>
    </Flex>
  );
};
