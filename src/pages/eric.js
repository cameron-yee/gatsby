import React from 'react'
import PostCard from '../components/postcard'

import Layout from '../components/layout/layout'
import Content from '../components/layout/pieces/content'
import { graphql } from 'gatsby';

const Eric = ({data: { allMarkdownRemark: { edges },},}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostCard key={edge.node.id} post={edge.node} />)
  
  return (
    <Layout>
      <Content>
        <div>{Posts}</div>
      </Content>
    </Layout>
  )
}

export default Eric

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {frontmatter: { person: {eq: "eric"}, type: {eq: "Personal"}}}
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
