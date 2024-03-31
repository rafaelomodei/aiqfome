import { Box, Checkbox, Flex, Text } from '@chakra-ui/react';
import { PropertyItem } from '../../../Components/Molecules/PropertyItem';
import { theme } from '../../../Utils/Theme';
import { useEffect, useState } from 'react';
import { useCartStore } from '../../../Providers/Cart';
import { PRODUCTS } from '../../../Utils/Constants';

export const AnythingElse = () => {
  const [fortuneCookie, setFortuneCookie] = useState<boolean>(false);
  const [springRoll, setSpringRoll] = useState<boolean>(false);

  const { addItem, removeItem } = useCartStore();

  useEffect(() => {
    fortuneCookie
      ? addItem(PRODUCTS['biscoito da sorte'])
      : removeItem(PRODUCTS['biscoito da sorte']);
  }, [fortuneCookie]);

  useEffect(() => {
    springRoll
      ? addItem(PRODUCTS['rolinho primavera'])
      : removeItem(PRODUCTS['rolinho primavera']);
  }, [springRoll]);

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
          <Checkbox
            isChecked={fortuneCookie ? true : false}
            onChange={(e) => setFortuneCookie(e.target.checked)}
          >
            biscoito da sorte
          </Checkbox>
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
          <Checkbox
            isChecked={springRoll ? true : false}
            onChange={(e) => setSpringRoll(e.target.checked)}
          >
            rolinho primavera
          </Checkbox>
          <Text fontSize='sm' as='b' color={theme.colors.primary}>
            +R$ 8,00
          </Text>
        </Flex>
      </PropertyItem>
    </Flex>
  );
};
