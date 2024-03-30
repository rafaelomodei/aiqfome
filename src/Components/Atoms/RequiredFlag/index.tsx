import { Flex, Text } from '@chakra-ui/react';

export const RequiredFlag = () => {
  return (
    <Flex
      backgroundColor='#393A3C'
      color='white'
      borderRadius={4}
      alignItems='center'
      h='min-content'
      px={2}
      py={1.5}
    >
      <Text fontSize='xs' as='b'>
        obrigatório
      </Text>
    </Flex>
  );
};
