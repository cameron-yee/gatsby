import React from 'react'
import { Link } from 'gatsby'
// import headerStyles from './header.module.scss'
import 'bulma/bulma.sass'

const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.slug}>
      {post.frontmatter.title} ({post.frontmatter.date})
    </Link>
  </div>
)

export default PostLink
