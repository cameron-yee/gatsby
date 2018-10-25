import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import Content from '../components/content'
import 'bulma/bulma.sass'
import { graphql } from 'gatsby';

export default function BlogTemplate ({ data, }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <Content>
        <div>
          <h1>{frontmatter.title}</h1>
          <h1>{frontmatter.date}</h1>
          <div>
            dangerouslySetInnerHTML={{ __html: html }}
          </div>
        </div>
      </Content>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path }}) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
