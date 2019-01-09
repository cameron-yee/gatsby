import React from 'react'
import { graphql } from 'gatsby'
// import headerStyles from './header.module.scss'
import 'bulma/bulma.sass'

const SleepLog = ({ data }) => (
  <div>
   {data} 
  </div>
)

export default SleepLog
