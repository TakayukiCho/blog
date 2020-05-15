import { TwitterShareButton as TWShareButton, TwitterIcon } from 'react-share';
import { SerializedStyles } from '@emotion/core';

type Props = {
  url: string;
  styles?: SerializedStyles;
};

const TwitterShareButton = ({ url, styles }: Props) => {
  return (
    <div css={styles}>
      <TWShareButton url={url}>
        <TwitterIcon round size={42} />
      </TWShareButton>
    </div>
  );
};

export default TwitterShareButton;
