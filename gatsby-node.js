/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const cameronJournalPages = new Promise((resolve, reject) => {
    const journalTemplate = path.resolve(`src/templates/journalTemplate.js`) 

    resolve(graphql(`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {frontmatter: { person: {eq: "Cameron"}}}
          limit: 1000 
        ) {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      if(result.errors) {
        reject(result.errors)
      }

        result.data.allMarkdownRemark.edges.forEach(({node}) => {
          const slug = node.frontmatter.slug
          createPage({
            path: `/cameron${slug}`,
            component: journalTemplate,
            context: {
              slug
            },
          })
        })

        })
      )
  })

  const ericJournalPages = new Promise((resolve, reject) => {
    const journalTemplate = path.resolve(`src/templates/journalTemplate.js`) 

    resolve(graphql(`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {frontmatter: { person: {eq: "Eric"}}}
          limit: 1000 
        ) {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      if(result.errors) {
        reject(result.errors)
      }

        result.data.allMarkdownRemark.edges.forEach(({node}) => {
          const slug = node.frontmatter.slug
          createPage({
            path: `/eric${slug}`,
            component: journalTemplate,
            context: {
              slug
            },
          })
        })

        })
      )
  })

  return Promise.all([cameronJournalPages, ericJournalPages])
}