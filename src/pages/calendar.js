import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'
import Content from '../components/layout/pieces/content'

const SecondPage = () => (
  <Layout>
    <Content>
      <h1>Calendar</h1>
      <iframe src="https://calendar.google.com/calendar/embed?src=mndship19%40gmail.com&ctz=America%2FDenver" style={{border: "0"}} width="800" height="600" frameborder="0" scrolling="no"></iframe>
      {/* <iframe src="https://calendar.google.com/calendar/embed?src=mndship19%40gmail.com&ctz=America%2FDenver" style={{border: "0"}} width="100%" height="100%" scrolling="no"></iframe> */}
    </Content>
  </Layout>
)

export default SecondPage
