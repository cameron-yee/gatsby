import React from 'react'
import PostCard from '../../components/postcard'

import Layout from '../../components/layout/layout'
import { graphql } from 'gatsby';
import 'bulma/bulma.sass'

const EricDSHIP = ({data: { allMarkdownRemark: { edges },},}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostCard key={edge.node.id} post={edge.node} />)
  
  return (
    <Layout>
      <div className="columns is-multiline">{Posts}</div>
    </Layout>
  )
}

export default EricDSHIP

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {frontmatter: { person: {eq: "eric"}, type: {eq: "DSHIP"}}}
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            image
            alt
            person
            title
            type
          }
        }
      }
    }
  }
`
