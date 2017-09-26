import React, { Component } from 'react'

class ScrollTopOnMount extends Component {
  componentDidMount = prevProps => {
    window && window.scrollTo(0, 0)
  }

  render = () => null
}

export default ScrollTopOnMount
