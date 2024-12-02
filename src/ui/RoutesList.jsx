/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import StyledNavLink from './StyledNavLink ';
import Title from './Title';

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

function RoutesList({ closed, active, routes, toggleActive }) {
  const goToRoute = (path) => {
    console.log(`going to "${path}"`);
  };

  return (
    <NavList>
      {routes.map((route) => (
        <StyledNavLink
          closed={closed}
          key={route.title}
          active={active === route.title ? true : false}
          onClick={() => {
            goToRoute(route.path);
            toggleActive(route.title);
          }}
        >
          <FontAwesomeIcon icon={route.icon} />
          <Title as="p" closed={closed}>
            {route.title}
          </Title>
          <span>
            <p>{route.title}</p>
          </span>
        </StyledNavLink>
      ))}
    </NavList>
  );
}

export default RoutesList;
