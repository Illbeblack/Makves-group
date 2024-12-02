import styled from 'styled-components';

const SlideButton = styled.div`
  padding: 0.5rem;
  position: absolute;
  top: 1rem;
  right: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 7rem;

  color: var(--color-text-default);

  cursor: pointer;
  transition: ease-in-out 0.2s;
  &:hover {
    color: var(--color-text-hover);
    background-color: var(--color-button-background-active);
  }
  &:active {
    color: var(--color-text-active);
  }
`;

export default SlideButton;
