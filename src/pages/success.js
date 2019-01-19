import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'
import Content from '../components/layout/pieces/content'
import 'bulma/bulma.sass'

const Success = () => (
  <Layout>
    <div>
      <h1>Your form has been submitted</h1>
      <Link className="button is-primary" to="/">Enter another entry</Link>
    </div>
  </Layout>
)

export default Success


