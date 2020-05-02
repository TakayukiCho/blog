import React from 'react';

import tw from 'twin.macro';
import { SerializedStyles } from '@emotion/core';
import closeButton from '../../images/closeButton.svg';

type Props = {
  onClose: () => void;
  styles: SerializedStyles;
};

const CloseButtonImg = tw.img`
  w-5 h-5
`;

const Button = tw.button`p-3`;

const CloseButton = ({ onClose, styles }: Props) => (
  <Button onClick={onClose} type="button" css={styles}>
    <CloseButtonImg src={closeButton} alt="close" />
  </Button>
);

export default CloseButton;
