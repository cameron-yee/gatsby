import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Container = styled.div`
  background: #303030;
  color: #ffaa00;
  // display: sticky;
  // height: 100vh;
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

const PersonContainer = styled.div`
  @media only screen and (max-width: 768px) {
    display: inline-block;
    margin-right: 1rem;
  }
`

const Person = styled.h1`
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }

  @media only screen and (max-width: 1035px) {
    font-size: 1.25rem;
  }
  margin: .25rem;
`

const Image = styled.img`
  @media only screen and (max-width: 768px) {
    display: none;
  }
  width: 100%; 
`

const LeftMenu = ({ children }) => (
  <Container className="column is-one-fifth is-gapless">
    <PersonContainer>
      <Image src="/assets/mountain.jpg" />
      <Person>Eric</Person>
      <Path href="/eric/personal">Personal</Path>
      <Path href="/eric/dship">DSHIP</Path>
    </PersonContainer>
    <PersonContainer>
      <Person>Cameron</Person>
      <Path href="/cameron/personal">Personal</Path>
      <Path href="/cameron/dship">DSHIP</Path>
    </PersonContainer>
    {/* {children} */}
  </Container>
)

export default LeftMenu
