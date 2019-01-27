import React from 'react'
import { Link } from 'gatsby'
// import headerStyles from './header.module.scss'
// import 'bulma/bulma.sass'
import styled from 'styled-components'

import '../global-scss/index.scss'
import PrimaryButtonLink from './ui/primary-button';

const CardContent = styled.div`
  background-color: #212121 !important;
  // color: #00FFFF !important;
  color: white;
`

const ImageContainer = styled.figure`
  margin: 0;
  overflow: hidden;

  > img {
    transition: transform .2s linear;

    &:hover {
      transform: scale(1.1);
    }
  }
`

const BookCard = ({ book }) => (
  // <div>
  //   <Link to={`/${post.frontmatter.person}/${post.frontmatter.slug}`}>
  //     {post.frontmatter.title} ({post.frontmatter.date})
  //   </Link>
  // </div>
  <div className="column is-one-third">
    <div className="card">
      <div className="card-image">
        <ImageContainer className="image is-4by3">
          <img src={book.frontmatter.image} alt={book.frontmatter.alt} />
        </ImageContainer>
      </div>
      <CardContent className="card-content">
        {/* <div className="media">
          <div className="media-left">
            <figure className="image is-48x48" style={{overflow: "hidden"}}>
              { post.frontmatter.person === 'cameron' &&
                <img src="/assets/cameron.jpg" alt="Placeholder image" />
              }
              { post.frontmatter.person === 'eric' &&
                <img src="/assets/eric.jpg" alt="Placeholder image" />
              } */}
            {/* </figure>
          </div>
          <div className="media-content">
            <Person className="title is-4">{post.frontmatter.person}</Person> */}
            {/* <p className="subtitle is-6">@johnsmith</p> */}
          {/* </div>
        </div> */}

        <div>
          <h2>{book.frontmatter.title}</h2>
          <h3>{book.frontmatter.author}</h3>
          <h3>{book.frontmatter.genre}</h3>
          <h3>{book.frontmatter.year}</h3>
          <br />
          <br />
          <PrimaryButtonLink href={`/${book.frontmatter.person}/book/${book.frontmatter.slug}`}>More Info</PrimaryButtonLink>
        </div>
      </CardContent>
    </div>
  </div>
)

export default BookCard
