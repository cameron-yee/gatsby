import React from 'react'
import PostCard from '../components/postcard'

import Layout from '../components/layout/layout'
import { graphql } from 'gatsby';

const Eric = () => {
  return (
    <Layout>
      <div>About Eric</div>
    </Layout>
  )
}

export default Eric

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
