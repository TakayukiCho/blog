import React from 'react';
import tw from 'twin.macro';
import styled from '@emotion/styled';
import HumbergerMenu from '../../images/humbergerMenu.svg';

import Navigation from '../components/Navigation';
import Container from '../elements/Container';
import Logo from '../elements/Logo';
import { useToggle } from '../../utils/hooks';

const Inner = styled.div`
  ${tw`flex flex-row items-center h-full justify-between`}
  padding-top: 9.5px;
  padding-bottom: 9.5px;
`;

const Header = () => {
  const [isOpen, toggle] = useToggle(false);

  return (
    <Container>
      <Inner>
        <Logo />
        <button onClick={() => toggle} type="button">
          <img src={HumbergerMenu} alt="menu" />
        </button>
        <Navigation isOpen={isOpen} onClose={() => toggle} />
      </Inner>
    </Container>
  );
};

export default Header;
