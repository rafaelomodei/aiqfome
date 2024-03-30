import { Box, Flex, Radio, RadioGroup, Text } from '@chakra-ui/react';
import { PropertyItem } from '../../../Components/Molecules/PropertyItem';
import { theme } from '../../../utils/theme';
import { useState } from 'react';

export const NeedCutlery = () => {
  const [value, setValue] = useState('1');

  return (
    <Flex py={6} px={5} pl='72px' flexDirection='column'>
      <PropertyItem title='precisa de talher?' description='escolha até 1'>
        <RadioGroup onChange={setValue} value={value} w='100%'>
          <Flex>
            <Flex
              maxW={342}
              w='100%'
              pt={4}
              alignItems='center'
              justifyContent='space-between'
            >
              <Radio value='1'>
                <Text fontSize='sm' as='b'>
                  hashi
                </Text>
              </Radio>
            </Flex>

            <Box w={60} />

            <Flex
              maxW={342}
              w='100%'
              pt={4}
              alignItems='center'
              justifyContent='space-between'
            >
              <Radio value='2'>
                <Flex gap={1} alignItems='center'>
                  <Text fontSize='sm'>garfo e faca descartável</Text>
                </Flex>
              </Radio>
              <Text fontSize='sm' as='b' color={theme.colors.primary}>
                +R$ 1,00
              </Text>
            </Flex>

            <Box />
          </Flex>
        </RadioGroup>
      </PropertyItem>
    </Flex>
  );
};
