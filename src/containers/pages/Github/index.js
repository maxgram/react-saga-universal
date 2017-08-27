import { connect } from 'react-redux'
import Github from './Github'

const dummy = {
  ugc: `<h1>Visit GitHub</h1>
        <p>Issues and contributions are welcome on
        <a href="https://github.com/max-gram/react-saga-universal" >repo page</a>
        </p>
        `
}

const loadPageData = () => {return}

export default connect(
  state => ({
    ugc: {__html: dummy.ugc}
  }),
  {
    loadPageData
  }
)(Github)
