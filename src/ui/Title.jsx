import styled, { css } from 'styled-components';

const Title = styled.p`
  ${(props) =>
    props.as === 'h2' &&
    css`
      font-size: 2rem;
    `}
  ${(props) =>
    props.as === 'p' &&
    css`
      font-size: 1.4rem;
    `}

  transition: opacity ease-in-out 0.2s, ease-in-out 0.2s;
  transform: translateX(2rem);
  opacity: 1;
  ${(props) =>
    props.closed &&
    css`
      opacity: 0;
      transform: translateX(0rem);
    `}
`;

export default Title;
