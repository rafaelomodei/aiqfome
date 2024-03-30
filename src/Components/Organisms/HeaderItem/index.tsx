import { Flex, Image, Text } from '@chakra-ui/react';
import { TitleItem } from '../../Molecules/TitleItem';
import { InfoItem } from '../../Molecules/InfoItem';
import { CartItem } from '../../Molecules/CartItem';
import { PNG } from '../../../Assets';

export const HeaderItem = () => {
  return (
    <Flex flexDirection='column' p={6}>
      <TitleItem image={PNG.matsuri} name='Matsuri Concept' />
      <Flex justifyContent='space-between' mt={6} ml={12}>
        <Flex flexDirection='column' gap={8}>
          <InfoItem name='Ceviche de salmão' value='19,90' />
          <CartItem />
        </Flex>
        <Image src={PNG.food} w={390} h={195} borderRadius={12} />
      </Flex>
    </Flex>
  );
};
