import React from 'react'
import PostCard from '../components/postcard'

import Layout from '../components/layout/layout'
import { graphql } from 'gatsby';

// const Cameron = ({data: { allMarkdownRemark: { edges },},}) => {
  // const Posts = edges
  //   .filter(edge => !!edge.node.frontmatter.date)
  //   .map(edge => <PostCard key={edge.node.id} post={edge.node} />)
  
const Cameron = () => {
  return (
    <Layout>
      <div>About Cameron</div>
    </Layout>
  )
}

export default Cameron

// export const pageQuery = graphql`
//   query {
//     allMarkdownRemark(
//       sort: { order: DESC, fields: [frontmatter___date] }
//       filter: {frontmatter: { person: {eq: "eric"}, type: {eq: "Personal"}}}
//     ) {
//       edges {
//         node {
//           id
//           excerpt(pruneLength: 40)
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             slug
//             person
//             title
//             type
//           }
//         }
//       }
//     }
//   }
// `
