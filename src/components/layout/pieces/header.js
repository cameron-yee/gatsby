import React from 'react'
import { Link } from 'gatsby'
import headerStyles from './header.module.scss'
import 'bulma/bulma.sass'

const Header = (props) => (
  <div className="navbar is-fixed-top">
    <div className="navbar-brand">
      <div className="navbar-item">
        <h1>
          <Link className={headerStyles.link} to="/">{props.siteTitle}</Link>
        </h1>
      </div>
      {/* eslint-disable-next-line */}
      <a role="button" className="navbar-burger">
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>
    <div className="navbar-end">
      <div className="navbar-item">
        <Link className={headerStyles.link} to="/about">About</Link>
        <Link className={headerStyles.link} to="/cameron">Cameron</Link>
        <Link className={headerStyles.link} to="/eric">Eric</Link>
        <Link className={headerStyles.link} to="/admin">Admin</Link>
      </div>
    </div>
  </div>
)

export default Header

// const Header = (props) => (
//   <div className={bulma.navbar}>
//     <div className={bulma.navbar-brand}>
//       <div className={bulma.navbar-item}>
//         {/* <div className={[bulma.column, 'bulma.is-half'].join(' ')}> */}
//         <div className={bulma.column}>
//           <h1>
//             <Link className={headerStyles.link} to="/">{props.siteTitle}</Link>
//           </h1>
//         </div>
//         <div className={bulma.column}>
//           <ul className={headerStyles.items}>
//             {(props.links).map((link, i) => {
//               let ugly_text = link.substr(1);
//               let cap = ugly_text[0].toUpperCase();
//               let link_text = cap + ugly_text.substr(1);
//               return (<li key={i}><Link className={headerStyles.items} to={link}>{link_text}</Link></li>);

//             })}
//           </ul>
//         </div>
//       </div>
//     </div>
//   </div>