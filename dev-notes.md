# Development notes

## React setup

Did not install Babel and using ts-loader instead.

## Webpack

The `module` property in `tsconfig.json` is set to `common.js` which is not ideal for the tree shaking function of Webpack, but is needed for the node in the backend. A good solution would be to separate the config of backend and frontend. Same goes to the shared package.json which should be independent.

Got an error when trying to read the .env file with DefinePlugin that caused the app not to render. Could only be resolved by removing the plugin block. Not resolved.

```js
// webpack.config.js
plugins: [
  new webpack.DefinePlugin({
    API: JSON.stringify(process.env.API),
  }),
],
```

Got an error reading `alias` in the config files. Adding `baseUrl` and `paths` to the `tsconfig.json` file didn't help either.

## CSS

The current CSS setup is not ready for production. Will need to add `mini-css-extract-plugin` and follow the instructions [here](https://www.carlrippon.com/using-css-react-typescript-with-webpack5/) to make it production-ready.

The current setup can be improved with the addition of CSS modules to scope classes and avoid name clashes (mentioned in the same article above).
