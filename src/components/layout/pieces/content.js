import React from 'react'
import content from './content.module.scss'
import styled from 'styled-components'

const ContentWrapper = styled.div`
  background-color: #424242;
  color: white;
  margin: 0;
`

const Content = ({ children }) => (
  <ContentWrapper className={`column is-four-fifths is-gapless ${content.content}`}>
    {children}
  </ContentWrapper>
)

export default Content
