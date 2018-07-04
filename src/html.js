const version = require('../package.json').version

export const renderDom = (html, initialState=null, head=null) => {
  const bundleCSS = initialState !== null || process.env.NODE_ENV === 'production'
    ? `
      <link rel="stylesheet" type="text/css" href="/dist/vendor-${version}.css"></style>
      <link rel="stylesheet" type="text/css" href="/dist/bundle-${version}.css"></style>
      `
    : ''

  return `
    <!doctype html>
    <meta charset="utf-8">
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet" type="text/css">

        <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon"href="/static/favicon.ico" type="image/x-icon" />

        ${head ? head.title.toString() : ''}
        ${head ? head.meta.toString() : ''}

        ${bundleCSS}
      </head>
      <body>
        <div id="root">${html ? html : ''}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState || {})};
        </script>
        <script src="/dist/vendor-${version}.js"></script>
        <script src="/dist/index-${version}.js"></script>
      </body>
    </html>
  `
}
