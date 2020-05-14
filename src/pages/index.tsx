import * as React from 'react';
import { graphql } from 'gatsby';

import tw from 'twin.macro';
import IndexLayout from '../ui_parts/layouts/Layout';
import { FrontMatter, ChildImageSharp } from '../models/frontMatter';
import { Fields } from '../models/fields';
import PostCard from '../ui_parts/components/PostCard';
import BodyContainer from '../ui_parts/elements/BodyContainer';

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
};

const IndexPage = ({ data }: Props) => {
  return (
    <IndexLayout>
      <BodyContainer css={tw`bg-gray-100 pt-4 pb-10`}>
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
  query BlogIndex {
    allMdx(limit: 1000, sort: { fields: frontmatter___date, order: DESC }) {
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
