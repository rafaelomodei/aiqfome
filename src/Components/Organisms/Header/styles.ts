import styled from 'styled-components';
import { theme } from '../../../Utils/Theme';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  max-height: 80px;

  background-color: ${theme.colors.primary};
  color: white;
`;
