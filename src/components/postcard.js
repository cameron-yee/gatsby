import React from 'react'
import { Link } from 'gatsby'
// import headerStyles from './header.module.scss'
import 'bulma/bulma.sass'
import styled from 'styled-components'

const CardContent = styled.div`
  background-color: #212121 !important;
  // color: #00FFFF !important;
  color: white;
`

const Person = styled.h2`
  color: white !important;
`

const ImageContainer = styled.figure`
  margin: 0;
`

const PostCard = ({ post }) => (
  // <div>
  //   <Link to={`/${post.frontmatter.person}/${post.frontmatter.slug}`}>
  //     {post.frontmatter.title} ({post.frontmatter.date})
  //   </Link>
  // </div>
  <div className="column is-one-third">
    <div className="card">
      <div className="card-image">
        <ImageContainer className="image is-4by3">
          <img src={post.frontmatter.image} alt={post.frontmatter.alt} />
        </ImageContainer>
      </div>
      <CardContent className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48" style={{overflow: "hidden"}}>
              { post.frontmatter.person === 'cameron' &&
                <img src="/assets/cameron.jpg" alt="Placeholder image" />
              }
              { post.frontmatter.person === 'eric' &&
                <img src="/assets/eric.jpg" alt="Placeholder image" />
              }
            </figure>
          </div>
          <div className="media-content">
            <Person className="title is-4">{post.frontmatter.person}</Person>
            {/* <p className="subtitle is-6">@johnsmith</p> */}
          </div>
        </div>

        <div>
          <h2>{post.frontmatter.title}</h2>
          <time>{post.frontmatter.date}</time>
          <p>{post.excerpt}</p>
          <br />
          <br />
          <a className="button is-primary" href={`/${post.frontmatter.person}/${post.frontmatter.slug}`}>Read</a>
        </div>
      </CardContent>
    </div>
  </div>
)

export default PostCard
