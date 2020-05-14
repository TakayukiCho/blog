import * as React from 'react';
import { graphql } from 'gatsby';

import tw from 'twin.macro';
import IndexLayout from '../layouts';
import { FrontMatter, ChildImageSharp } from '../models/frontMatter';
import { Fields } from '../models/Fields';
import PostCard from '../components/organisms/PostCard';
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
    allMdx {
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