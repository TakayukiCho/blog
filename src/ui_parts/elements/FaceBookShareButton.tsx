import { FacebookShareButton as FBShareButton, FacebookIcon } from 'react-share';
import { SerializedStyles } from '@emotion/core';

type Props = {
  url: string;
  styles?: SerializedStyles;
};

const FaceBookShareButton = ({ url, styles }: Props) => {
  return (
    <div css={styles}>
      <FBShareButton url={url}>
        <FacebookIcon round size={42} />
      </FBShareButton>
    </div>
  );
};

export default FaceBookShareButton;
