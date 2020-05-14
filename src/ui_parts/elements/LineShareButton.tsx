import { LineShareButton as LNShareButton, LineIcon } from 'react-share';
import { SerializedStyles } from '@emotion/core';

type Props = {
  url: string;
  styles?: SerializedStyles;
};

const LineShareButton = ({ url, styles }: Props) => {
  return (
    <div css={styles}>
      <LNShareButton url={url}>
        <LineIcon round size={42} />
      </LNShareButton>
    </div>
  );
};

export default LineShareButton;
