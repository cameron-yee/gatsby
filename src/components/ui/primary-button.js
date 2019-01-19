import React, { Component } from 'react'
import styled from 'styled-components'

import '../../global-scss/index.scss'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
`
const Button = styled.a`
  color: black !important;
  font-weight: bold;

  flex: 1 1 auto;
  margin: 10px;
  padding: 30px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  background-image: linear-gradient(to right, #ffaa00 0%, #fda085 51%, #f6d365 100%);

  &:hover {
    background-position: right center;
  }

`

const PrimaryButtonLink = class extends Component {
  render() {
    return (
      <Container>
        <Button className="button is-primary" href={this.props.href}>{this.props.children}</Button>
      </Container>
    )
  }
}

export default PrimaryButtonLink

