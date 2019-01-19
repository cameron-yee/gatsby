import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'
import Content from '../components/layout/pieces/content'

const SecondPage = () => (
  <Layout>
    <h1>About Cameron</h1>
    <p>Cameron is ...</p>
    <Link to="/">Homepage</Link>
  </Layout>
)

export default SecondPage
