/* eslint-disable react/prop-types */
import styled from 'styled-components';
import logo from '../assets/logo.png';
import Title from './Title';

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  color: var(--color-text-logo-default);
`;

const Img = styled.img`
  height: 5.6rem;
  width: auto;
`;

function Logo({ name, closed }) {
  return (
    <StyledLogo>
      <Img src={logo} alt="TensorFlow logo" />
      <Title as="h2" closed={closed}>
        {name}
      </Title>
    </StyledLogo>
  );
}

export default Logo;
