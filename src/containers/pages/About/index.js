import { connect } from 'react-redux'
import About from './About'

const dummy = {
  ugc: `<h1>Lorem ipsum dolor</h1><br /><br />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <em>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</em> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><br /><br />
        <h2>Lorem ipsum dolor</h2><br /><br />
        <p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</strong> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><ul><li>Lorem ipsum dolor sit amet</li><li>consectetur adipiscing elit</li></ul><h3>Lorem ipsum dolor</h3><ol><li>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li><li>Ut enim ad minim veniam</li></ol><h4>Lorem ipsum dolor</h4><br /><br />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><br />
        Powered by <a href=”https://placeholder.com/text/lorem-ipsum/”>Placeholder.com</a><br />`
}

const loadPageData = () => {return}

export default connect(
  state => ({
    ugc: {__html: dummy.ugc}
  }),
  {
    loadPageData
  }
)(About)
