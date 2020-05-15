import * as React from 'react';
import { Link } from 'gatsby';

import IndexLayout from '../ui_parts/layouts/Layout';
import BodyContainer from '../ui_parts/elements/BodyContainer';

const NotFoundPage = () => (
  <IndexLayout>
    <BodyContainer>
      <h1>404: Page not found.</h1>
      <p>
        You&apos;ve hit the void. <Link to="/">Go back.</Link>
      </p>
    </BodyContainer>
  </IndexLayout>
);

export default NotFoundPage;
