import { Flex, Text } from '@chakra-ui/react';
import { ITitlePropertyItem } from './interface';
import { theme } from '../../../Utils/Theme';

export const TitlePropertyItem = (props: ITitlePropertyItem) => {
  const { title, description } = props;

  return (
    <Flex flexDirection='column'>
      <Text fontSize='lg' as='b' color={theme.colors.title}>
        {title}
      </Text>
      <Text fontSize='xs' as='b'>
        {description}
      </Text>
    </Flex>
  );
};
