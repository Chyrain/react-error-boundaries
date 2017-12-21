# react-error-boundaries

[![version](https://img.shields.io/npm/v/react-error-boundaries.svg?style=flat-square)](http://npm.im/react-popconfirm)
[![downloads](https://img.shields.io/npm/dm/react-error-boundaries.svg?style=flat-square)](http://npm-stat.com/charts.html?package=react-popconfirm&from=2017-04-07)
[![MIT License](https://img.shields.io/npm/l/react-error-boundaries.svg?style=flat-square)](http://opensource.org/licenses/MIT)

Base on React 16.2.0, babel required:

```json
{
	"presets": [
		"stage-3",
		"react"
	],
	"plugins": [
		"transform-decorators-legacy",
		"transform-class-properties",
		"transform-object-rest-spread"
	]
}
```

## Usage

Use as a component container:

```js
// import first
import React from 'react'
import ReactDOM from 'react-dom'
import ErrorBoundary from 'react-error-boundaries'

const App = () => {
    return (
    <ErrorBoundary>
        <YourComponents />
    </ErrorBoundary>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

Use as class decorator:

```js
// import first
import { errorHandlerDecorator } from 'react-error-boundaries'

@errorHandlerDecorator
export default class FilterableProductTable extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        contents
      </div>
    );
  }
}
```

Define your errorCallback function and FallbackComponent:

```js
// import first
import { withErrorHandler } from 'react-error-boundaries'

const yourErrorHandler = withErrorHandler(
  errorCallback,    // report Error to service
  FallbackComponent // Component to display errors
)

```

## Try example

```shell
# run example, auto open browser and enable hot loader
cd example
npm install
npm start

# build
npm run build
```

## License

MIT