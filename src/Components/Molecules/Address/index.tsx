import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { ICON, SVG } from '../../../Assets';
import { IAdress } from './interface';

export const Address = (props: IAdress) => {
  const { typeStreet, street, number } = props;

  return (
    <Flex alignItems='center'>
      <Image src={SVG.aiqbranding} mr={10} height='40px' />
      <Flex alignItems='center'>
        <Image src={ICON.gps} mr={2.5} boxSize='24px' />
        <Box>
          <Text color='#EECFFC' fontSize='sm' as='b'>
            entregando em
          </Text>
          <Flex alignItems='center'>
            <Text as='b' fontSize='lg'>
              {typeStreet} {street}, {number}
            </Text>
            <Image src={ICON.arrow} p={1} />
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};
