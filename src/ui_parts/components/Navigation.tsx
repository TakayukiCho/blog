import React from 'react';
import { css } from '@emotion/core';

import tw from 'twin.macro';
import styled from '@emotion/styled';
import CloseButton from '../elements/CloseButton';
import { categories } from '../../models/category';
import NavigationItem from '../elements/NavivagtionItem';

const shown = css`
  opacity: 0.6;
  visibility: visible;
`;

const translate = css`
  transform: translate(-16.1rem, 0);
`;

const Wrapper = styled.div`
  ${tw`fixed inset-y-0  bg-white z-50 w-64 flex flex-col`}
  right: -16.1rem;
  transition: transform 0.3s ease-out;
`;

const Overlay = styled.div`
  ${tw`fixed inset-0 bg-gray-700 z-40 `}
  opacity: 0;
  transition: opacity 0.3s ease-out;
  visibility: hidden;
`;

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const Navigation = ({ isOpen, onClose }: Props) => {
  return (
    <>
      <Wrapper css={[isOpen ? translate : undefined, tw`pl-6`]}>
        <CloseButton
          onClose={onClose}
          styles={css`
            ${tw`self-end mb-5`}
          `}
        />
        {categories.map(navItem => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <NavigationItem {...navItem} />
        ))}
      </Wrapper>
      <Overlay css={isOpen ? shown : undefined} role="button" onClick={onClose} />
    </>
  );
};

export default Navigation;
