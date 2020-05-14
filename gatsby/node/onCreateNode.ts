import { GatsbyNode } from 'gatsby';

export const onCreateNode: GatsbyNode['onCreateNode'] = async ({
  node,
  actions,
  getNode,
}) => {
  const { createNodeField } = actions;

  // Sometimes, optional fields tend to get not picked up by the GraphQL
  // interpreter if not a single content uses it. Therefore, we're putting them
  // through `createNodeField` so that the fields still exist and GraphQL won't
  // trip up. An empty string is still required in replacement to `null`.

  // eslint-disable-next-line default-case
  switch (node.internal.type) {
    case 'Mdx': {
      const { layout } = node.frontmatter as {
        layout: string;
      };
      const { relativePath } = getNode(node.parent);

      const slug = `/${relativePath.replace('.md', '')}/`;
      const category = slug.split('/')[1] ?? 'others';

      // Used to generate URL to view this content.
      createNodeField({
        node,
        name: 'slug',
        value: slug,
      });

      // Used to determine a page layout.
      createNodeField({
        node,
        name: 'layout',
        value: layout || '',
      });

      createNodeField({
        node,
        name: 'category',
        value: category,
      });
    }
  }
};
