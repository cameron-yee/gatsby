import React from 'react'
import PostLink from '../../components/postlink'

import Layout from '../../components/layout/layout'
import Content from '../../components/layout/pieces/content'
import { graphql } from 'gatsby';

const EricDSHIP = ({data: { allMarkdownRemark: { edges },},}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  
  return (
    <Layout>
      <Content>
        <div>{Posts}</div>
      </Content>
    </Layout>
  )
}

export default EricDSHIP

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {frontmatter: { person: {eq: "Cameron"}, type: {eq: "DSHIP"}}}
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            person
            title
            type
          }
        }
      }
    }
  }
`
