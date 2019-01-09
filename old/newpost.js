import React from 'react'
// import PostLink from '../components/postlink'

import Layout from '../src/components/layout'
import Content from '../src/components/content'
import SleepPost from '../components/sleeppost'
// import { graphql } from 'gatsby';

// const NewPost = ({data: { allMarkdownRemark: { edges },},}) => {
//   const Posts = edges
//     .filter(edge => !!edge.node.frontmatter.date)
//     .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
const NewPost = ({ props }) => {
  
  return (
    <Layout>
      <Content>
        <SleepPost />
      </Content>
    </Layout>
  )
}

export default NewPost

// export const pageQuery = graphql`
//   query {
//     allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
//       edges {
//         node {
//           id
//           excerpt(pruneLength: 250)
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             path
//             title
//           }
//         }
//       }
//     }
//   }
// `

