import { Box, Flex, Text } from '@chakra-ui/react';
import { IPropertyItem } from './interface';
import { theme } from '../../../utils/theme';
import { RequiredFlag } from '../../Atoms/RequiredFlag';

export const PropertyItem = (props: IPropertyItem) => {
  const { title, description, children, isRequired } = props;

  return (
    <Flex flexDirection='column' >
      <Flex justifyContent='space-between'>
        <Flex flexDirection='column'>
          <Text fontSize='lg' as='b' color={theme.colors.title}>
            {title}
          </Text>
          <Text fontSize='xs' as='b'>
            {description}
          </Text>
        </Flex>
        {isRequired && <RequiredFlag />}
      </Flex>
      <Flex>{children}</Flex>
    </Flex>
  );
};
