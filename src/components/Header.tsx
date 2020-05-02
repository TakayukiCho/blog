import React, { useState } from 'react';
import tw from 'twin.macro';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import Logo from '../images/logo.svg';
import HumbergerMenu from '../images/humbergerMenu.svg';

import Navigation from './organisms/Navigation';
import Container from './Container';

const Inner = styled.div`
  ${tw`flex flex-row items-center h-full justify-between`}
  padding-top: 9.5px;
  padding-bottom: 9.5px;
`;

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const [isOpen, toggle] = useState(false);

  const closeNavigation = () => {
    toggle(!isOpen);
  };

  return (
    <Container>
      <Inner>
        <Link to="/">
          <img src={Logo} alt={title} />
        </Link>
        <button onClick={closeNavigation} type="button">
          <img src={HumbergerMenu} alt="menu" />
        </button>
        <Navigation isOpen={isOpen} onClose={closeNavigation} />
      </Inner>
    </Container>
  );
};

export default Header;
