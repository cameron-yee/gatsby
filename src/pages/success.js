import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Content from '../components/content'
import 'bulma/bulma.sass'

const Success = () => (
  <Layout>
    <Content>
      <div>
        <h1>Your form has been submitted</h1>
        <Link className="button is-primary" to="/">Enter another entry</Link>
      </div>
    </Content>
  </Layout>
)

export default Success


