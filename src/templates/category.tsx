import * as React from 'react';
import { graphql } from 'gatsby';

import tw from 'twin.macro';
import { css } from '@emotion/core';
import IndexLayout from '../layouts';
import { FrontMatter, ChildImageSharp } from '../models/frontMatter';
import { Fields } from '../models/Fields';
import PostCard from '../components/organisms/PostCard';
import { CategoryPageContext } from '../../gatsby/node/createPages';
import { getCategoryByName } from '../models/category';
import PageTitle from '../components/atoms/PageTitle';
import BodyContainer from '../components/BodyContainer';

type Props = {
  data: {
    allMdx: {
      nodes: Array<{
        frontmatter: FrontMatter;
        fields: Fields;
      }>;
    };
    file: ChildImageSharp;
  };
  pageContext: CategoryPageContext;
};

const titleStyle = css`
  &::after {
    ${tw`mt-3 mb-6 block ml-px w-1/3`}
    height: 3px;
    content: '';
    width: 30%;
    background-color: #f1da0e;
  }
`;

const IndexPage = ({ data, pageContext }: Props) => {
  const categoryLabel = getCategoryByName(pageContext.category)?.label ?? 'その他';

  return (
    <IndexLayout>
      <BodyContainer css={tw`bg-gray-100 pb-8 pt-6`}>
        <PageTitle css={titleStyle}>{`${categoryLabel}の記事一覧`}</PageTitle>
        {data.allMdx.nodes.map(({ frontmatter, fields }) => (
          <PostCard
            image={
              frontmatter.image?.childImageSharp.fluid ?? data.file.childImageSharp.fluid
            }
            imageCredit={frontmatter.imageCredit}
            title={frontmatter.title}
            slug={fields.slug}
            date={frontmatter.date}
          />
        ))}
      </BodyContainer>
    </IndexLayout>
  );
};

export default IndexPage;

export const query = graphql`
  query CategoryIndex($category: String!) {
    allMdx(filter: { fields: { category: { eq: $category } } }) {
      nodes {
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
        fields {
          layout
          slug
        }
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
