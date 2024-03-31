import { Flex, Image, Text } from '@chakra-ui/react';
import { theme } from '../../../Utils/Theme';
import { ITitleItem } from './interface';

export const TitleItem = (props: ITitleItem) => {
  const { image, name } = props;

  return (
    <Flex alignItems='center' gap={2}>
      <Image src={image} boxSize={12} borderRadius={4} />
      <Text fontSize='2xl' as='b' color={theme.colors.title}>
        {name}
      </Text>
    </Flex>
  );
};
