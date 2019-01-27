import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout/layout'
import Content from '../components/layout/pieces/content'
import 'bulma/bulma.sass'
import { graphql } from 'gatsby';
import styled from 'styled-components'

const BookHead = styled.div`
  background-color: lightgray;
  color: black;
  border-radius: 4px;
  padding: .5rem;
`

const BookDescription = styled.div`
  padding: .5rem;
`

const bookTemplate = ({ data, }) => {
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;
  return (
    <Layout>
      <Content>
        <BookHead>
          <h1>{frontmatter.title}</h1>
          <h3>By: {frontmatter.author}</h3>
          <h5>{frontmatter.year}</h5>
          <h5>{frontmatter.genre}</h5>
        </BookHead>
        <BookDescription>{frontmatter.description}</BookDescription>
        <a className="button is-primary" href={frontmatter.buyingLink} target="_blank" rel="noopener noreferrer">Buy Book</a>
      </Content>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug }}) {
      html
      frontmatter {
        slug
        author
        title
        description
        genre
        year
        buyingLink
      }
    }
  }
`

export default bookTemplate