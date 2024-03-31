import { Box, Flex, Radio, RadioGroup, Text } from '@chakra-ui/react';
import { PropertyItem } from '../../../Components/Molecules/PropertyItem';
import { theme } from '../../../Utils/Theme';
import { useState } from 'react';
import { useCartStore } from '../../../Providers/Cart';
import { PRODUCTS } from '../../../Utils/Constants';

export const NeedCutlery = () => {
  const [type, setType] = useState<string>('');
  const [oldType, setOldType] = useState<string>('');

  const { addItem, toggleItem } = useCartStore();

  const handleClickHash = () => {
    setOldType('hashi');
    oldType
      ? toggleItem(PRODUCTS['hashi'], PRODUCTS[oldType])
      : addItem(PRODUCTS['hashi']);
  };

  const handleCLickCutlery = () => {
    setOldType('garfo e faca descartável');
    oldType
      ? toggleItem(PRODUCTS['garfo e faca descartável'], PRODUCTS[oldType])
      : addItem(PRODUCTS['garfo e faca descartável']);
  };

  return (
    <Flex py={6} px={5} pl='72px' flexDirection='column'>
      <PropertyItem title='precisa de talher?' description='escolha até 1'>
        <RadioGroup onChange={setType} value={type} w='100%'>
          <Flex>
            <Flex
              maxW={342}
              w='100%'
              pt={4}
              alignItems='center'
              justifyContent='space-between'
            >
              <Flex role='presentation' onClick={handleClickHash}>
                <Radio value='hashi'>
                  <Text fontSize='sm' as='b'>
                    hashi
                  </Text>
                </Radio>
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
              <Flex role='presentation' onClick={handleCLickCutlery}>
                <Radio value='garfo e faca descartável'>
                  <Text fontSize='sm'>garfo e faca descartável</Text>
                </Radio>
              </Flex>
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
