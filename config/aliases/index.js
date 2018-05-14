var path = require('path')
var CWD = process.cwd()

module.exports = {
  resolve: {
    alias: {
      '@CSS': path.resolve(CWD, './styles/var'),

      'Redux': path.resolve(CWD, './src/redux/'),
      'Components': path.resolve(CWD, './src/components/'),
      'Containers': path.resolve(CWD, './src/containers/'),
      'Pages': path.resolve(CWD, './src/pages/'),
      'Layout': path.resolve(CWD, './src/containers/layout/'),
    }
  }
}
