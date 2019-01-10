import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 1rem 1rem;
`

const Image = styled.img`
  width: 100%; 
  // height: ;
`

const LeftMenu = ({ children }) => (
  <Container className="column is-one-fifth is-gapless">
    <div>
      <Image src="/assets/pic.jpg" />
    </div>
    {children}
  </Container>
)

export default LeftMenu
