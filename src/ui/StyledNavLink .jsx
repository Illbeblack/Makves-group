import styled, { css } from 'styled-components';

const StyledNavLink = styled.button`
  margin-left: 1rem;
  padding: 0.7rem 1rem;
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 3rem;

  width: 15rem;
  border: none;
  border-radius: 1rem;

  color: var(--color-text-defaul);
  background-color: var(--color-button-background-default);
  cursor: pointer;

  transition: ease-out 0.4s;

  &:hover {
    color: var(--color-text-hover);
    background-color: var(--color-button-background-active);
  }
  ${(props) =>
    props.closed &&
    css`
      width: 3.4rem;
      &:hover span {
        display: block;
        padding: 0.5rem 1.5rem;
        position: absolute;
        left: 3rem;

        text-align: center;

        border-radius: 7rem;
        color: #fff;
        background-color: var(--color-text-logo-default);
      }
    `}
  ${(props) =>
    props.active &&
    css`
      color: var(--color-text-active);
      background-color: var(--color-button-background-active);
    `}

    & span {
    display: none;
  }
`;

export default StyledNavLink;
