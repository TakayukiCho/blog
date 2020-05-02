import * as React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import { Global, css } from '@emotion/core';
import normalize from '../styles/normalize';

import Header from '../components/Header';
import Footer from '../components/molecules/Footer';
import { fontFamily } from '../styles/font';

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      keywords: string;
    };
  };
}

const IndexLayout: React.FC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
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
        <Header title={data.site.siteMetadata.title} />
        {children}
        <Footer />
      </>
    )}
  />
);

export default IndexLayout;
