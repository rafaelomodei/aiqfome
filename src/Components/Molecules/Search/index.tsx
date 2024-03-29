import { Image, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { ICON } from '../../../Assets';
import { theme } from '../../../utils/theme';

export const Search = () => {
  return (
    <InputGroup maxW={420}>
      <InputLeftElement pointerEvents='none'>
        <Image src={ICON.search} boxSize='24px' />
      </InputLeftElement>
      <Input
        type='text'
        placeholder='busque pela loja ou culinária'
        backgroundColor='white'
        color={theme.colors.gray}
        borderColor=' #CDD1D9'
      />
    </InputGroup>
  );
};
