import React from 'react'
import PostLink from '../components/postlink'

import Layout from '../components/layout'
import Content from '../components/content'
import { graphql } from 'gatsby';

const Blog = ({data: { allMarkdownRemark: { edges },},}) => {
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

export default Blog

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
