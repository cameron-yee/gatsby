import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'
import Content from '../components/layout/pieces/content'
import 'bulma/bulma.sass'

const IndexPage = () => (
  <Layout>
    <Content>
      <div>
        <h1>Welcome to Monday Night DSHIP</h1>
        <div>
          <p>Every week we meet and do...</p>
        </div>
      </div>
    </Content>
  </Layout>
)

export default IndexPage
