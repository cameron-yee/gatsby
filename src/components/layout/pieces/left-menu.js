import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Container = styled.div`
  background: #303030;
  color: #ffaa00;
  // display: sticky;
  // height: 100vh;
  // margin: 0;
  padding: 0 !important;
  padding-bottom: 5rem !important;
`

const List = styled.ul`
  list-style-type: none;
  width: 100%;
  margin: 0;
`

const ListItem = styled.li`
  list-style-type: none;
  transition: all .3s ease-in-out;
  width: 100%;

  > a {
    font-size: 1.1rem !important;
    color: #ffaa00;
  }

  > h1 {
    font-size: 2.5rem !important;

    > a {
      color: #ffaa00;
      // color: #00FFFF;
    }
  }

  &:hover {
    // background-color: #ffaa00;

    background-image: linear-gradient(to right, #ffaa00 0%, #fda085 51%, #f6d365 100%);
    transition: all .3s ease-in-out;

    > h1 {
      > a {
        color: black !important;
        font-size: 2.5rem !important;
        margin-left: 2rem !important;
        transition: all .3s ease-in-out;
      }
    }

    > a {
      color: black !important;
      font-size: 1.1rem !important;
      font-weight: bold;
      margin-left: 2rem !important;
      transition: all .3s ease-in-out;
    }
  }
`

const Path = styled.a`
  // display: block;
  // color: #ffaa00;
  margin-left: 1rem;
  text-decoration: none !important;
  padding-left: 1rem;
  padding-right: 1rem;

  &:hover {
    animation: pulse .2s;
    text-decoration: none !important;
  }
`

const PersonContainer = styled.div`
  @media only screen and (max-width: 768px) {
    display: inline-block;
  }

`

const Person = styled.h1`
  @media only screen and (max-width: 768px) {
    font-size: 1rem !important;
  }

  @media only screen and (max-width: 1035px) {
    font-size: 1.25rem !important;
  }

  > a {
  margin: 0 !important;
  }
`

const Image = styled.img`
  @media only screen and (max-width: 768px) {
    display: none;
  }
  width: 100%; 
`

const LeftMenu = ({ children }) => (
  <Container className="column is-one-fifth is-gapless">
    <br />
    <PersonContainer>
      {/* <Image src="/assets/mountain.jpg" /> */}
      <List>
        <ListItem><Person><Path href="/eric">Eric</Path></Person></ListItem>
        <ListItem><Path href="/eric/personal">Personal</Path></ListItem>
        <ListItem><Path href="/eric/dship">DSHIP</Path></ListItem>
      </List>
    </PersonContainer>
    <PersonContainer>
      <List>
        <ListItem><Person><Path href="/cameron">Cameron</Path></Person></ListItem>
        <ListItem><Path href="/cameron/personal">Personal</Path></ListItem>
        <ListItem><Path href="/cameron/dship">DSHIP</Path></ListItem>
      </List>
    </PersonContainer>
    {/* {children} */}
  </Container>
)

export default LeftMenu
