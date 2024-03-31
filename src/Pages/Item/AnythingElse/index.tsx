import { Box, Checkbox, Flex, Radio, RadioGroup, Text } from '@chakra-ui/react';
import { PropertyItem } from '../../../Components/Molecules/PropertyItem';
import { theme } from '../../../Utils/Theme';
import { useState } from 'react';

export const AnythingElse = () => {
  const [value, setValue] = useState('1');

  return (
    <Flex py={6} px={5} pl='72px' flexDirection='column'>
      <PropertyItem title='mais alguma coisa?' description='escolha até 2'>
        <Flex
          maxW={342}
          w='100%'
          pt={4}
          alignItems='center'
          justifyContent='space-between'
        >
          <Checkbox>biscoito da sorte</Checkbox>
          <Text fontSize='sm' as='b' color={theme.colors.primary}>
            +R$ 2,00
          </Text>
        </Flex>

        <Box w={60} />

        <Flex
          maxW={342}
          w='100%'
          pt={4}
          alignItems='center'
          justifyContent='space-between'
        >
          <Checkbox>rolinho primavera</Checkbox>
          <Text fontSize='sm' as='b' color={theme.colors.primary}>
            +R$ 8,00
          </Text>
        </Flex>
      </PropertyItem>
    </Flex>
  );
};
