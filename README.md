# REACT REDUX SAGA UNIVERSAL
Production ready React-Redux-Saga boilerplate with Server Side Rendering support.

## Tech highlights
- Babael 6.26
- Webpack 3.6
- React 16
- React-Router 5.0 (alpha)
- Redux 3.7
- Redux-saga 0.15
- Css-modules
- SVG Sprotesheets

View `package.json` for more details

## Installation
```
npm i rimraf -g
npm i
```

## Commands
```
npm start - dev
npm run build - production build
npm run prod - starts production Express server; must build first
npm run api - starts "dev only" api server at http://localhost:3001
```

## Config
```
cp ./config/.env.example ./config/.env
```

## Running dev
Run simultaniusly (Each command in new terminal)
```
npm run api
npm start
```

## Running prod
Production api should be available as a separate service. Update `API_ROOT` at `/src/redux/services/api`
```
npm run build
npm run prod
```
