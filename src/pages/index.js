import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'
import Content from '../components/layout/pieces/content'
import 'bulma/bulma.sass'

const IndexPage = () => (
  <Layout>
    <Content>
      <div>
        <h1>Hello World</h1>
        <div>About site section</div>
      </div>
    </Content>
  </Layout>
)

export default IndexPage
