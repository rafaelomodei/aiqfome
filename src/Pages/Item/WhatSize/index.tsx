import { Box, Flex, Image, Radio, RadioGroup, Text } from '@chakra-ui/react';
import { PropertyItem } from '../../../Components/Molecules/PropertyItem';
import { theme } from '../../../Utils/Theme';
import { ICON } from '../../../Assets';
import { useState } from 'react';
import { PRODUCTS } from '../../../Utils/Constants';
import { useCartStore } from '../../../Providers/Cart';

export const WhatSize = () => {
  const [size, setSize] = useState<string>('');

  const { updateItem } = useCartStore();

  return (
    <Flex py={6} px={5} pl='72px' flexDirection='column'>
      <PropertyItem title='qual o tamanho?' description='escolha 1' isRequired>
        <RadioGroup onChange={setSize} value={size} w='100%'>
          <Flex>
            <Flex
              maxW={342}
              w='100%'
              pt={4}
              alignItems='center'
              justifyContent='space-between'
            >
              <Flex
                role='presentation'
                onClick={() => updateItem(PRODUCTS['Ceviche de salmão'])}
              >
                <Radio value='medium'>
                  <Flex gap={1} alignItems='center'>
                    <Image src={ICON.price} boxSize={6} />
                    <Text fontSize='sm' as='b'>
                      médio
                    </Text>
                  </Flex>
                </Radio>
              </Flex>
              <Flex gap={1} alignItems='center'>
                <Text fontSize='xs' as='b'>
                  de R$ 22,90 por
                </Text>
                <Text fontSize='sm' as='b' color={theme.colors.price}>
                  R$ 19,90
                </Text>
              </Flex>
            </Flex>

            <Box w={60} />

            <Flex
              maxW={342}
              w='100%'
              pt={4}
              alignItems='center'
              justifyContent='space-between'
            >
              <Flex
                role='presentation'
                onClick={() =>
                  updateItem({
                    ...PRODUCTS['Ceviche de salmão'],
                    price: 28.9,
                  })
                }
              >
                <Radio value='big'>
                  <Flex gap={1} alignItems='center'>
                    <Text fontSize='sm'>grande</Text>
                  </Flex>
                </Radio>
              </Flex>
              <Flex gap={1} alignItems='center'>
                <Text fontSize='sm' as='b' color={theme.colors.primary}>
                  R$ 28,90
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </RadioGroup>
      </PropertyItem>
    </Flex>
  );
};
