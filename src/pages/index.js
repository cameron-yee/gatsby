import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi Cameron</h1>
    <Link to="/about/">About Me</Link>
  </Layout>
)

export default IndexPage
