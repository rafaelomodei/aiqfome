import { Box, Flex, Text } from '@chakra-ui/react';
import { theme } from '../../../Utils/Theme';
import { IInfoItem } from './interface';

export const InfoItem = (props: IInfoItem) => {
  const { name, value } = props;

  return (
    <Flex flexDirection='column' gap={1.5}>
      <Text fontSize='2xl' as='b' color={theme.colors.titleSecondary}>
        {name}
      </Text>
      <Box>
        <Text fontSize='lg' as='b' mr={2}>
          a partir de
        </Text>
        <Text fontSize='xl' as='b' color={theme.colors.primary}>
          R$ {value}
        </Text>
      </Box>
      <Text>salmão temperado com limão, cebola e pimenta</Text>
    </Flex>
  );
};
