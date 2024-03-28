import { Text } from '@chakra-ui/react';
import { Container } from './styles';

export const Footer = () => {
  return (
    <Container>
      <Text as='b' fontSize='md'>
        feito com 💜 em maringá-PR
      </Text>
      <Text as='b' fontSize='lg'>
        aiqfome.com © 2007-2023 aiqfome LTDA . CNPJ: 09.186.786/0001-58
      </Text>
    </Container>
  );
};
