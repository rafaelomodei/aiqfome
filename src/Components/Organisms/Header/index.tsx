import { Button, Flex, Image } from '@chakra-ui/react';
import { Container } from './styles';
import { ICON } from '../../../Assets';
import { theme } from '../../../Utils/Theme';
import { Address } from '../../Molecules/Address';
import { Search } from '../../Molecules/Search';
import { useCartStore } from '../../../Providers/Cart';

export const Header = () => {
  const { finalPrice } = useCartStore();

  return (
    <Container>
      <Address typeStreet='Rua' street='Mandaguari' number='198' />
      <Search />
      <Flex gap={6} minW={300} justifyContent='flex-end'>
        {finalPrice > 0 && (
          <Button
            leftIcon={<Image src={ICON.ticket} boxSize='24px' />}
            color={theme.colors.primary}
            variant='solid'
          >
            <b>ver ticket</b>
          </Button>
        )}
        <Button
          leftIcon={<Image src={ICON.user} boxSize='24px' />}
          backgroundColor={theme.colors.tertiary}
          color='white'
          colorScheme='green'
          variant='solid'
        >
          <b> entrar</b>
        </Button>
      </Flex>
    </Container>
  );
};
