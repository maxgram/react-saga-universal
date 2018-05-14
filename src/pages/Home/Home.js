import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import ToTopOnMount from 'react-to-top-on-mount'

import { Hero, Section } from 'Layout'
import SvgSprite from 'Components/SvgSprite'

import css from './Home.css'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const iphoneFPO = 'static/images/fpo/iphone-fpo.png'
    const ipadFPO = 'static/images/fpo/ipad-fpo.png'
    const imacFPO = 'static/images/fpo/imac-fpo.png'
    const macProFPO = 'static/images/fpo/macpro-fpo.png'

    return (
      <main>
        <ToTopOnMount />
        <Helmet title="React Saga Universal" />

        <Hero className={css.hero}>
          <SvgSprite spriteName="#sprite-react" width={124} height={124} />
          <h1>React Saga Universal</h1>
          <p>Full development and production setup with server side rendering support</p>
        </Hero>

        <Section
          className={css.sectionImac}
          image={imacFPO}
        >
          <div className={css.contentHolder}>
            <h2>Latest of the best</h2>
            <p>Made of the most recent and the best tech in React world.<br /><strong>Babel 6</strong>, <strong>Webpack 3</strong>, <strong>React 16</strong>, <strong>React-Router 4</strong>, <strong>CSS-Modules</strong> are the main gears of the project. <strong>Development</strong> and <strong>Production</strong> environments for easy daily routines.</p>
          </div>
        </Section>

        <Section
          className={css.sectionMacPro}
          image={macProFPO}
          imgLeft
        >
          <div className={css.contentHolder}>
            <h2>SEO Friendly</h2>
            <p>One of the most important parts of the web is to make sure your project is serchable through search engins. <strong>Server side rendering</strong> opens full potential to get the most of functionality and readability</p>
          </div>
        </Section>

        <Section
          className={css.sectionIpad}
          image={ipadFPO}
        >
          <div className={css.contentHolder}>
            <h2>State management with ease</h2>
            <p><strong>Redux</strong> and <strong>Redux-Saga</strong> give you flexible, scalable and fully controlled state management of your web apps.</p>
          </div>
        </Section>

        <Section
          className={css.sectionIphone}
          image={iphoneFPO}
          imgLeft
        >
          <div className={css.contentHolder}>
            <h2>Cross-browser and Mobile friendly out of the box</h2>
            <p><strong>Autoprefixer</strong> and <strong>React-flexbox-grid</strong> make it extremely easy to focus on building your product and forget about bugfixing how it looks in different browsers.</p>
          </div>
        </Section>
      </main>
    )
  }
}

Home.propTypes = {
  loadPageData: PropTypes.func.isRequired,
}

export default Home
