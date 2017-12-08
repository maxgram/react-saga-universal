import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import ToTopOnMount from 'react-to-top-on-mount'

import { Hero, Ugc } from 'Layout'
import SvgSprite from 'Components/SvgSprite'

import css from './Github.css'

class Github extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { ugc, counter, counterAdd, counterRemove } = this.props

    return (
      <main>
        <ToTopOnMount />
        <Helmet title="Github" />

        <Hero className={css.hero}>
          <SvgSprite spriteName="#sprite-github" className={css.heroIcon} width={52} height={52} />
          <h1>Fork me on Github</h1>
          <p>Create an issue or pull request</p>
          <div className={css.counter}>
            <button onClick={counterAdd}>+</button>
            <div className={css.counterNumber}>
              {counter}
            </div>
            <button onClick={counterRemove}>-</button>
          </div>
        </Hero>

        <Ugc data={ugc} />
      </main>
    )
  }
}

Github.propTypes = {
  loadPageData: PropTypes.func.isRequired,
  counterAdd: PropTypes.func.isRequired,
  counterRemove: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
  ugc: PropTypes.shape({
    _html: PropTypes.string,
  }).isRequired,
}

export default Github
