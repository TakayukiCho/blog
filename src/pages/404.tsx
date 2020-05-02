import * as React from 'react';
import { Link } from 'gatsby';

import IndexLayout from '../layouts';
import BodyContainer from '../components/BodyContainer';

const NotFoundPage = () => (
  <IndexLayout>
    <BodyContainer>
      <h1>404: Page not found.</h1>
      <p>
        You've hit the void. <Link to="/">Go back.</Link>
      </p>
    </BodyContainer>
  </IndexLayout>
);

export default NotFoundPage;
