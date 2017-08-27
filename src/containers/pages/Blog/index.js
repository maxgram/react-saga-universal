import { connect } from 'react-redux'
import Blog from './Blog'

const loadPageData = () => {return}
const dummy = [
  { id: 0, title: 'Title1', copy: 'copy1' },
  { id: 1, title: 'Title2', copy: 'copy2' },
  { id: 2, title: 'Title3', copy: 'copy3' },
  { id: 3, title: 'Title', copy: 'copy' },
  { id: 4, title: 'Title', copy: 'copy' },
  { id: 5, title: 'Title', copy: 'copy' },
  { id: 6, title: 'Title', copy: 'copy' },
  { id: 7, title: 'Title', copy: 'copy' },
  { id: 8, title: 'Title', copy: 'copy' },
  { id: 9, title: 'Title', copy: 'copy' },
  { id: 10, title: 'Title', copy: 'copy' },
  { id: 11, title: 'Title', copy: 'copy' },
  { id: 12, title: 'Title', copy: 'copy' },
  { id: 13, title: 'Title', copy: 'copy' },
  { id: 14, title: 'Title', copy: 'copy' },
  { id: 15, title: 'Title', copy: 'copy' },
  { id: 16, title: 'Title', copy: 'copy' },
  { id: 17, title: 'Title', copy: 'copy' },
  { id: 18, title: 'Title', copy: 'copy' },
  { id: 19, title: 'Title', copy: 'copy' },
]

export default connect(
  state => ({
    list: dummy
  }),
  {
    loadPageData
  }
)(Blog)
