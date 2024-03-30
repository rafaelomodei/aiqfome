import { Divider as DividerCK } from '@chakra-ui/react';
import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
`;

export const Divider = styled(DividerCK)`
  && {
    border-bottom-width: 4px;
  }
`;
