import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Container = styled.div`
  background: #212121;
  color: #ffaa00;
  // display: sticky;
  height: 100vh;
  // margin: 0;
  padding: 1rem 1rem;
`

const Image = styled.img`
  width: 100%; 
  // height: ;
`

const LeftMenu = ({ children }) => (
  <Container className="column is-one-fifth is-gapless">
    <div>
      <Image src="/assets/pic.jpg" />
      <h1>Eric</h1>
      <Link to="/eric/personal">Personal</Link>
      <Link to="/eric/dship">DSHIP</Link>
      <h1>Cameron</h1>
      <Link to="/cameron/personal">Personal</Link>
      <Link to="/cameron/personal">DSHIP</Link>
    </div>
    {children}
  </Container>
)

export default LeftMenu
