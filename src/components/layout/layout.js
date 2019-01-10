import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql, Link } from 'gatsby'

import Content from './pieces/content'
import Header from './pieces/header'
import Footer from './pieces/footer'
import './layout.css'
import LeftMenu from './pieces/left-menu';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
          bodyAttributes={{class: 'has-navbar-fixed-top'}}
        >
          <html lang="en" />
        </Helmet>
        <div className="columns">
          <Header siteTitle={data.site.siteMetadata.title} />
        </div>
        {/* <Header links="['/about']"/> */}
        {/* <div className="section">
          <div className="container"> */}
        <div className="columns">
            <LeftMenu>
              <Link to="/cameron">Cameron</Link>
              <Link to="/eric">Eric</Link>
            </LeftMenu>
            <Content>
              {children}
            </Content>
          </div>
          {/* </div>
        </div> */}
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
