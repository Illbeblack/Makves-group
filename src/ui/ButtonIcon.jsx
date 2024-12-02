import styled from 'styled-components';

const ButtonIcon = styled.button`
  background: none;
  border: none;

  padding: 0.6rem;
  border-radius: 5rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: var(--color-button-background-active);
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-text-default);
  }
`;

export default ButtonIcon;
