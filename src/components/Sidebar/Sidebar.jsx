import { useState } from 'react';

import DarkModeToggle from '../../ui/DarkModeToggle';

import Logo from '../../ui/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';

import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import SlideButton from '../../ui/SlideButton';

import RoutesList from '../../ui/RoutesList';
import { bottomRoutes, routes } from '../../data/tokens';

const StyledSidebar = styled.div`
  margin: 10rem;
  padding: 2rem;
  position: relative;
  display: flex;
  align-items: flex-start;

  flex-direction: column;
  gap: 5rem;

  width: 25rem;
  border-radius: 2rem;
  background-color: var(--color-sidebar-background-default);

  transition: ease-in-out 0.4s;

  ${(props) =>
    props.closed &&
    css`
      width: 10rem;
    `}
`;

export default function Sidebar() {
  const [isOpened, setIsOpened] = useState(false);
  const [active, setActive] = useState('');

  const toggleSidebar = () => {
    setIsOpened(!isOpened);
  };
  function getKey(key) {
    setActive(key);
  }

  return (
    <StyledSidebar closed={isOpened}>
      <Logo closed={isOpened} name={isOpened ? '' : 'TensorFlow'} />
      <SlideButton onClick={toggleSidebar}>
        <FontAwesomeIcon
          icon={isOpened ? { ...faAngleRight } : { ...faAngleLeft }}
        />
      </SlideButton>

      <RoutesList
        routes={routes}
        toggleActive={getKey}
        active={active}
        closed={isOpened}
      />
      <RoutesList
        routes={bottomRoutes}
        toggleActive={getKey}
        active={active}
        closed={isOpened}
      />

      <DarkModeToggle />
    </StyledSidebar>
  );
}
