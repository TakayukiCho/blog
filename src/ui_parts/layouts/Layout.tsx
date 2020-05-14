import * as React from 'react';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

import { Global, css } from '@emotion/core';
import normalize from '../../styles/normalize';

import Header from './Header';
import Footer from './Footer';
import { fontFamily } from '../../styles/font';

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      keywords: string;
    };
  };
}

const RootLayout: React.FC = ({ children }) => {
  const data = useStaticQuery<StaticQueryProps>(graphql`
    query IndexLayoutQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <>
      <Global styles={() => css(normalize)} />
      <Global
        styles={() =>
          css`
            #outer-container {
              ${fontFamily.normal}
            }
            html {
              font-size: 16px;
            }
          `
        }
      />
      <Helmet
        htmlAttributes={{ lang: 'ja' }}
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: data.site.siteMetadata.description },
          { name: 'keywords', content: data.site.siteMetadata.keywords },
        ]}
      />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
