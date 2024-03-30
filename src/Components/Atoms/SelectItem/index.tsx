import { Flex, Image, Text } from '@chakra-ui/react';
import { ICON } from '../../../Assets';
import { ISelectItem } from './interface';

export const SelectItem = (props: ISelectItem) => {
  const { label, showTrash, size = 'sm' } = props;

  const isSizeSM = size === 'sm';

  const handleFirstIcon = () => {
    if (showTrash)
      return <Image src={ICON.trash} boxSize={isSizeSM ? '36px' : '24px'} />;
    return false ? (
      <Image src={ICON.subtract} boxSize={isSizeSM ? '36px' : '24px'} />
    ) : (
      <Image src={ICON.subtractDesabled} boxSize={isSizeSM ? '36px' : '24px'} />
    );
  };

  return (
    <Flex alignItems='center'>
      {handleFirstIcon()}
      <Text fontSize={isSizeSM ? 'lg' : 'xs'} mx={4} as='b'>
        2
      </Text>
      <Image src={ICON.add} boxSize={isSizeSM ? '36px' : '24px'} />
      {label && (
        <Text fontSize='sm' pl={2}>
          {label}
        </Text>
      )}
    </Flex>
  );
};
