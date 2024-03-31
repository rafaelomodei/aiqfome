import { Box, Flex, Textarea } from '@chakra-ui/react';
import { HeaderItem } from '../../Components/Organisms/HeaderItem';
import { Container, Divider } from './styles';
import { WhatSize } from './WhatSize';
import { WantDrink } from './WantDrink';
import { NeedCutlery } from './NeedCutlery';
import { AnythingElse } from './AnythingElse';
import { useCart } from '../../Hooks/useCart';
import { useEffect } from 'react';

export const Item = () => {
  const { finalPrice } = useCart();

  useEffect(() => {
    console.info('Item::finalPrice: ', finalPrice);
  }, []);

  return (
    <Container>
      <HeaderItem finalPrice={finalPrice} />
      {/* <TablePropertyItem /> */}

      <Divider />
      <WhatSize />

      <Divider />
      <WantDrink />
      <Divider />

      <NeedCutlery />
      <Divider />

      <AnythingElse />
      <Divider />

      <Box h={6} />

      <Flex w='100%' px={6} justifyContent='center'>
        <Textarea
          maxW='644px'
          placeholder='alguma observação do item? • opcional 
ex: tirar algum ingrediente, ponto do prato'
        />
      </Flex>
      <Box h={12} />
    </Container>
  );
};
