import React from 'react'
import { Link } from 'gatsby'
import headerStyles from './header.module.scss'


// const Header = ({ siteTitle }, { links }) => (
const Header = (props) => (
  <div className={headerStyles.headerbar}>
    <div className={headerStyles.items}>
      <h1>
        <Link className={headerStyles.link} to="/">{props.siteTitle}</Link>
      </h1>
      <p>{props.links}</p>
      <ul>
        {/* {props.map(function(link, i){
          let ugly_text = link.substr(1);
          let cap = ugly_text[0].toUpperCase();
          let link_text = cap + ugly_text.substr(1);
          return (
            <li key={i}>
              <Link to={link}>{link_text}</Link>
            </li>
          ) 
        })} */}
      </ul>
    </div>
  </div>
)

export default Header
