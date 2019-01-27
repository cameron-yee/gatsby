import React from 'react'
import BookCard from '../../components/bookcard'

import Layout from '../../components/layout/layout'
import { graphql } from 'gatsby';
import 'bulma/bulma.sass'

const EricBooks = ({data: { allMarkdownRemark: { edges },},}) => {
  const Books = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <BookCard key={edge.node.id} book={edge.node} />)
  
  return (
    <Layout>
      <div className="columns is-multiline">{Books}</div>
    </Layout>
  )
}

export default EricBooks

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {frontmatter: { person: {eq: "eric"}, type: {eq: "book"}}}
    ) {
      edges {
        node {
          id
          # excerpt(pruneLength: 40)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            author
            image
            alt
            title
            person
            description
            genre
          }
        }
      }
    }
  }
`
