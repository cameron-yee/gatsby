import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Container = styled.div`
  background: #303030;
  color: #ffaa00;
  // display: sticky;
  height: 100vh;
  // margin: 0;
  padding: 1rem 1rem;
`

const Path = styled.a`
  display: block;
  color: #ffaa00;
  margin-left: 1rem;
  text-decoration: none !important;

  &:hover {
    animation: pulse .2s;
    text-decoration: none !important;
  }
`

const Person = styled.h1`
  margin: .25rem;
`

const Image = styled.img`
  width: 100%; 
  // height: ;
`

const LeftMenu = ({ children }) => (
  <Container className="column is-one-fifth is-gapless">
    <div>
      <Image src="/assets/mountain.jpg" />
      <Person>Eric</Person>
      <Path href="/eric/personal">Personal</Path>
      <Path href="/eric/dship">DSHIP</Path>
      <Person>Cameron</Person>
      <Path href="/cameron/personal">Personal</Path>
      <Path href="/cameron/dship">DSHIP</Path>
    </div>
    {/* {children} */}
  </Container>
)

export default LeftMenu
