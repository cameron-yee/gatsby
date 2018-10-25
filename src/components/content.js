import React from 'react'
import content from './content.module.scss'

const Content = ({ children }) => (
  <div className={content.content}>
    {children}
  </div>
)

export default Content
