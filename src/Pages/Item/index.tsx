import { Box, Flex, Textarea } from '@chakra-ui/react';
import { HeaderItem } from '../../Components/Organisms/HeaderItem';
import { Container, Divider } from './styles';
import { WhatSize } from './WhatSize';
import { WantDrink } from './WantDrink';
import { NeedCutlery } from './NeedCutlery';
import { AnythingElse } from './AnythingElse';

export const Item = () => {
  return (
    <Container>
      <HeaderItem />
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
