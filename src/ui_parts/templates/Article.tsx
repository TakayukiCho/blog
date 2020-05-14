import { css } from '@emotion/core';
import { graphql, PageRendererProps } from 'gatsby';

import tw from 'twin.macro';

import { MDXRenderer } from 'gatsby-plugin-mdx';
import Img from 'gatsby-image';

import styled from '@emotion/styled';
import Helmet from 'react-helmet';
import IndexLayout from '../layouts/Layout';
import PageTitle from '../elements/PageTitle';
import { FrontMatter, ChildImageSharp } from '../../models/frontMatter';
import { extendsToEdge } from '../../styles/spacings';
import DateLabelBig from '../elements/DateLabelBig';
import BodyContainer from '../elements/BodyContainer';
import { isoDateToJaFormat } from '../../utils/date';
import SocialShares from '../compounds/SocialShares';

type PageTemplateProps = {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        siteUrl: string;
        author: {
          name: string;
          url: string;
        };
      };
    };
    mdx: {
      id: string;
      body: string;
      excerpt: string;
      frontmatter: FrontMatter;
    };
    file: ChildImageSharp;
  };
} & PageRendererProps;

const titleStyle = css`
  &::after {
    ${tw`mt-4 mb-10 block ml-px h-1 w-1/3`}
    content: '';
    width: 30%;
    background-color: #f1da0e;
  }
`;

const ContentWrapper = styled.div`
  & p {
    ${tw`text-gray-800 text-base whitespace-pre-line mb-4 font-light leading-relaxed tracking-wider`}
  }
`;

const Article = ({ data, location }: PageTemplateProps) => (
  <IndexLayout>
    <Helmet
      meta={[
        {
          name: 'og:title',
          content: data.mdx.frontmatter.title,
        },
        {
          name: 'og:description',
          content: data.mdx.excerpt,
        },
        {
          name: 'og:image',
          content: `${data.site.siteMetadata.siteUrl}${data.mdx.frontmatter.image?.childImageSharp.fluid.src}`,
        },
        {
          name: 'twitter:creator',
          content: '@changguizhiT',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
      ]}
    />

    <BodyContainer css={tw`bg-color-gray-100`}>
      <Img
        alt={data.mdx.frontmatter.title}
        fluid={
          data.mdx.frontmatter.image?.childImageSharp.fluid ??
          data.file.childImageSharp.fluid
        }
        css={[extendsToEdge, tw`mb-5 lg:max-w-3xl lg:mx-auto`]}
      />
      <DateLabelBig css={tw`mb-2 ml-px`}>
        {isoDateToJaFormat(data.mdx.frontmatter.date)}
      </DateLabelBig>
      <PageTitle css={titleStyle}>{data.mdx.frontmatter.title}</PageTitle>
      {/* eslint-disable-next-line react/no-danger */}
      <ContentWrapper css={tw`mb-8`}>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </ContentWrapper>
      <SocialShares
        url={location.href}
        styles={css`
          ${tw`pb-16`}
        `}
      />
    </BodyContainer>
  </IndexLayout>
);

export default Article;

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        siteUrl
        author {
          name
          url
        }
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      body
      excerpt
      id
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 1600, maxHeight: 854, fit: COVER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageCredit
        tags
        title
        date(locale: "ja")
      }
    }
    file(relativePath: { eq: "default.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600, maxHeight: 854, fit: COVER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
