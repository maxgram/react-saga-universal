var path = require('path')
var CWD = process.cwd()

module.exports = {
  resolve: {
    alias: {
      'CSSVar': path.resolve(CWD, './src/root/AppRoot/styles/var'),
      'Components': path.resolve(CWD, './src/components/'),
      'Containers': path.resolve(CWD, './src/containers/'),
      'Pages': path.resolve(CWD, './src/containers/pages/'),
    }
  }
}
