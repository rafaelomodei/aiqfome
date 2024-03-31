import { Box, Flex, Text } from '@chakra-ui/react';
import { PropertyItem } from '../../../Components/Molecules/PropertyItem';
import { SelectItem } from '../../../Components/Atoms/SelectItem';
import { theme } from '../../../Utils/Theme';
import { PRODUCTS } from '../../../Utils/Constants';

export const WantDrink = () => {
  return (
    <Flex py={6} px={5} pl='72px' flexDirection='column'>
      <PropertyItem
        title='vai querer bebida?'
        description='escolha quantos quiser'
      >
        <Flex w='100%' flexWrap='wrap' justifyContent='space-between'>
          <Flex
            w={342}
            pt={4}
            mr={8}
            alignItems='center'
            justifyContent='space-between'
          >
            <SelectItem item={PRODUCTS['coca-cola']} size='xs' />

            <Text fontSize='sm' as='b' color={theme.colors.primary}>
              +R$ {PRODUCTS['coca-cola'].price.toFixed(2)}
            </Text>
          </Flex>

          <Flex
            w={342}
            pt={4}
            mr={8}
            alignItems='center'
            justifyContent='space-between'
          >
            <SelectItem item={PRODUCTS['suco prats laranja']} size='xs' />

            <Text fontSize='sm' as='b' color={theme.colors.primary}>
              +R$ {PRODUCTS['suco prats laranja'].price.toFixed(2)}
            </Text>
          </Flex>

          <Flex
            w={342}
            pt={4}
            alignItems='center'
            justifyContent='space-between'
          >
            <SelectItem item={PRODUCTS['água sem gás']} size='xs' />

            <Text fontSize='sm' as='b' color={theme.colors.primary}>
              +R$ {PRODUCTS['água sem gás'].price.toFixed(2)}
            </Text>
          </Flex>
        </Flex>
      </PropertyItem>
    </Flex>
  );
};
