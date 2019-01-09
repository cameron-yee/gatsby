import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout/layout'
import Content from '../components/layout/pieces/content'
import 'bulma/bulma.sass'
import { graphql } from 'gatsby';

const journalTemplate = ({ data, }) => {
  const { markdownRemark } = data;
  console.log(data);
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <Content>
        <div>
          <h1>{frontmatter.title}</h1>
          <h1>{frontmatter.date}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
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