import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout/layout'
import Content from '../components/layout/pieces/content'
import 'bulma/bulma.sass'
import { graphql } from 'gatsby';
import styled from 'styled-components'

const JournalHead = styled.div`
  background-color: lightgray;
  color: black;
  border-radius: 4px;
  padding: .5rem;
`

const JournalContent = styled.div`
  padding: .5rem;
`

const capitalizeName = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

const journalTemplate = ({ data, }) => {
  const { markdownRemark } = data;
  console.log(data);
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <Content>
        <JournalHead>
          <h1>{frontmatter.title}</h1>
          <h3>By: {capitalizeName(frontmatter.person)}</h3>
          <h5>{frontmatter.date}</h5>
        </JournalHead>
        <JournalContent>
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </JournalContent>
      </Content>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug }}) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        person
        title
      }
    }
  }
`

export default journalTemplate