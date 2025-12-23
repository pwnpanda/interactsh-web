import { createGlobalStyle } from 'styled-components';
import { Theme } from '@/theme';

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  body {
    background: ${({ theme }) => theme.background};
  }
  .secondary_bg {
    background: ${({ theme }) => theme.secondaryBackground}!important;
  }
  .light_bg {
    background: ${({ theme }) => theme.lightBackground}!important;
  }
`;

export default {};

