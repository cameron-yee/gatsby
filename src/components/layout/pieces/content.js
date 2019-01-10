import React from 'react'
import content from './content.module.scss'

const Content = ({ children }) => (
  <div className={`column is-four-fifths is-gapless ${content.content}`}>
    {children}
  </div>
)

export default Content
