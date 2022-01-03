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
  ${tw`fixed inset-y-0  bg-white z-50 w-64 flex flex-col pl-6`}
  right: -16.1rem;
  transition: transform 0.3s ease-out;
  touch-action: pan-y;
`;

const Overlay = styled.div`
  ${tw`fixed inset-0 bg-gray-700 z-40 `}
  opacity: 0;
  transition: opacity 0.3s ease-out;
  visibility: hidden;
`;

const NavigationWrapper = styled.div`
  ${tw`last:mb-0`}
  & > * {
    ${tw`mb-3`}
  }
`;

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const Navigation = ({ isOpen, onClose }: Props) => {
  return (
    <>
      <Wrapper css={[isOpen ? translate : undefined]}>
        <CloseButton
          onClose={onClose}
          styles={css`
            ${tw`self-end mb-5`}
          `}
        />
        <NavigationWrapper>
          {categories.map((navItem, index) => (
            // eslint-disable-next-line react/jsx-props-no-spreading,react/no-array-index-key
            <NavigationItem {...navItem} key={index} />
          ))}
        </NavigationWrapper>
      </Wrapper>
      <Overlay css={isOpen ? shown : undefined} role="button" onClick={onClose} />
    </>
  );
};

export default Navigation;
