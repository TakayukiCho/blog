import { GatsbyNode } from 'gatsby'

import path = require('path')

type AllMdx = {
  allMdx: {
    edges: Array<{
      node: {
        fields: {
          layout: string
          slug: string
        }
      }
    }>
  }
}

type Categories = {
  allMdx: {
    distinct: string[]
  }
}

export type CategoryPageContext = {
  category: string
}

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions
}) => {
  const { createPage } = actions

  const allMdx = await graphql<AllMdx>(`
    {
      allMdx(limit: 1000) {
        edges {
          node {
            fields {
              layout
              slug
            }
          }
        }
      }
    }
  `)

  if (allMdx.errors) {
    // eslint-disable-next-line no-console
    console.error(allMdx.errors)
    throw new Error(allMdx.errors)
  }

  // eslint-disable-next-line no-unused-expressions
  allMdx.data?.allMdx.edges.forEach(({ node }) => {
    const { slug, layout } = node.fields

    createPage({
      path: slug,
      component: path.resolve(`./src/templates/${layout || 'page'}.tsx`),
      context: {
        // Data passed to context is available in page queries as GraphQL variables.
        slug
      }
    })
  })

  const categories =
    (
      await graphql<Categories>(`
        {
          allMdx {
            distinct(field: fields___category)
          }
        }
      `)
    ).data?.allMdx.distinct ?? []

  categories.forEach(category => {
    createPage<CategoryPageContext>({
      path: `/${category}/`,
      component: path.resolve('./src/templates/category.tsx'),
      context: {
        // Data passed to context is available in page queries as GraphQL variables.
        category
      }
    })
  })
}

export default createPages
