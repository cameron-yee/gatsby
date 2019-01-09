import React from 'react'
import { Link } from 'gatsby'
import 'bulma/bulma.sass'
import footer from './footer.module.scss'

const Footer = () => (
  <footer className="footer">
    <div className="has-text-centered">
      <div className="columns">
        <div className="column is-on-third">
          <ul className={footer.footer_ul}>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
        <div className="column is-on-third">
          <ul className={footer.footer_ul}>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
        <div className="column is-on-third">
          <ul className={footer.footer_ul}>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </div>
      <p>Copyright BSCS 2020</p>
    </div>
  </footer>
)

export default Footer

