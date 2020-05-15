import tw from 'twin.macro';
import styled from '@emotion/styled';
import { SerializedStyles } from '@emotion/core';
import FaceBookShareButton from '../elements/FaceBookShareButton';
import TwitterShareButton from '../elements/TwitterShareButton';
import LineShareButton from '../elements/LineShareButton';

type Props = {
  url: string;
  styles?: SerializedStyles;
};

const Wrapper = styled.div`
  ${tw`flex last:mr-0 justify-end`}
  & > * {
    ${tw`mr-2`}
  }
`;

const SocialShares = ({ url, styles }: Props) => {
  return (
    <Wrapper css={styles}>
      <FaceBookShareButton url={url} />
      <TwitterShareButton url={url} />
      <LineShareButton url={url} />
    </Wrapper>
  );
};

export default SocialShares;
