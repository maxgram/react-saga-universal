var path = require('path')
var CWD = process.cwd()

module.exports = {
  resolve: {
    alias: {
      'Components': path.resolve(CWD, './app/components/'),
      'Containers': path.resolve(CWD, './app/containers/'),
      'Pages': path.resolve(CWD, './app/containers/pages/'),
    }
  }
}
