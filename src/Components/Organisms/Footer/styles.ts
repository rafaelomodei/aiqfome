import styled from 'styled-components';
import { theme } from '../../../utils/theme';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 32px;
  text-align: center;
  justify-content: center;
  background-color: ${theme.colors.background};
  color: ${theme.colors.secondary};
`;
