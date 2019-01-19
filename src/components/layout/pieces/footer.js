import React from 'react'
import { Link } from 'gatsby'
// import 'bulma/bulma.sass'
import footer from './footer.module.scss'
import styled from 'styled-components'

import '../../../global-scss/index.scss'

const FooterDiv = styled.footer`
  background-color: black !important;
  color: #00FFFF !important;

`
const ListItem = styled.li`
  animation: pulse .3s ease-in-out;

  > a {
    color: #00FFFF !important;
    text-decoration: none !important;

    &:hover {
      color: white !important;
      animation: pulse .3s ease-in-out;
      transition: all .3 ease-in-out;
    }
  }

`

const Footer = () => (
  <FooterDiv className="footer" style={{ padding: '.5rem'}}>
    <div className="has-text-centered">
      <div className="columns" style={{margin: '.25rem'}}>
        <div className="column is-on-third">
          <ul className={footer.footer_ul}>
            <ListItem><Link to="/calendar">Calendar</Link></ListItem>
          </ul>
        </div>
        <div className="column is-on-third">
          <ul className={footer.footer_ul}>
            <ListItem><a href="/admin">+New</a></ListItem>
          </ul>
        </div>
        <div className="column is-on-third">
          <ul className={footer.footer_ul}>
            <ListItem><Link to="/about">About</Link></ListItem>
          </ul>
        </div>
      </div>
      <p style={{ marginBottom: '.5rem'}}>© Cameron Yee 2020</p>
    </div>
  </FooterDiv>
)

export default Footer

