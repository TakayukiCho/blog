import * as React from 'react';
import styled from '@emotion/styled';

import tw from 'twin.macro';

export const OuterContainer = styled.div`
  ${tw`px-4 md:px-10`}
`;

export const InnerContainer = tw.div`max-w-3xl mx-auto`;

interface ContainerProps {
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => (
  <OuterContainer className={className}>
    <InnerContainer>{children}</InnerContainer>
  </OuterContainer>
);

export default Container;
