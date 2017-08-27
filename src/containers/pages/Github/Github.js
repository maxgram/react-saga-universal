import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import SvgSprite from 'Components/SvgSprite'
import { Hero, Ugc } from 'Layout'

import css from './styles.css'

class Github extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { ugc } = this.props

    return (
      <main>
        <Helmet title="Github" />

        <Hero className={css.hero}>
          <SvgSprite spriteName="#sprite-github" className={css.heroIcon} width={52} height={52} />
          <h1>Fork me on Github</h1>
          <p>Create an issue or pull request</p>
        </Hero>

        <Ugc data={ugc} />
      </main>
    )
  }
}

Github.PropTypes = {
  loadPageData: PropTypes.func.isRequired,
  ugc: PropTypes.shape({
    _html: PropTypes.string.isRequired,
  }).isRequired,
}

export default Github
