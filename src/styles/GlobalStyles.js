import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  &, &.light-mode {
    --color-sidebar-background-default: #fff;

    --color-sidebar-background-hover: #f0f2ff;
    --color-sidebar-background-active: #f0f2ff;

    --color-text-default: #97a5b9;
    --color-text-hover: #091b31;
    --color-text-active: #0000b5;

    --color-text-logo-default: #0000b5;

    --color-button-background-default: #fff;
    --color-button-background-active: #e2e8f0;
  }

  &.dark-mode {
    --color-sidebar-background-default: #202127;

    --color-sidebar-background-hover: #2D2E34;
    --color-sidebar-background-active: #393A3F;

    --color-text-default: #f0f2ff;
    --color-text-hover: #f0f2ff;
    --color-text-active: #f0f2ff;

    --color-text-logo-default: #3B82F6;
    
    --color-button-background-default: #202127;
    --color-button-background-active: #4B5966;

  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  transition: background-color 0.3s, border 0.3s;
}

html {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-weight: 400;
  line-height: 1.5;
  font-size: 62.5%;
  background-color: var(--color-sidebar-background-active);
  color: var(--color-text-default);
}

`;

export default GlobalStyles;
