import {
  Flex,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
} from '@chakra-ui/react';
import { TitlePropertyItem } from '../TitlePropertyItem';
import { ICON } from '../../../Assets';
import { theme } from '../../../Utils/Theme';

export const TablePropertyItem = () => {
  const promotionPrice: string = '22,90';
  const price: string = '19,90';

  return (
    <TableContainer>
      <Table variant='simple'>
        <Tbody>
          <Tr>
            <Td>
              <Flex flexDirection='column' gap={4} py={6}>
                <TitlePropertyItem
                  title='qual o tamanho?'
                  description='escolha 1'
                />
                <Flex gap={1} alignItems='center'>
                  <Image src={ICON.slected} boxSize={4} />
                  <Image src={ICON.price} boxSize={6} />
                  <Text fontSize='sm' as='b'>
                    médio
                  </Text>
                </Flex>
              </Flex>
            </Td>
            <Td>
              <Flex gap={1}>
                <Text fontSize='xs' as='b'>
                  de R$ {promotionPrice} por
                </Text>
                <Text fontSize='sm' as='b' color={theme.colors.price}>
                  R$ {price}
                </Text>
              </Flex>
            </Td>
            <Td> grande</Td>
            <Td>
              <Text fontSize='sm' as='b' color={theme.colors.primary}>
                R$ 28,90
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td isNumeric>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td isNumeric>0.91444</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
