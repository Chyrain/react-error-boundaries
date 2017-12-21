# react-error-boundaries

A reusable React error boundaries component.

[![version](https://img.shields.io/npm/v/react-error-boundaries.svg?style=flat-square)](http://npm.im/react-popconfirm)
[![downloads](https://img.shields.io/npm/dm/react-error-boundaries.svg?style=flat-square)](http://npm-stat.com/charts.html?package=react-popconfirm&from=2017-04-07)
[![MIT License](https://img.shields.io/npm/l/react-error-boundaries.svg?style=flat-square)](http://opensource.org/licenses/MIT)

> Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.

![react-error-boundaries](https://raw.githubusercontent.com/Chyrain/MDPictures/master/res/react_error_boundaries.png)

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
import React from 'react'
import { errorHandlerDecorator } from 'react-error-boundaries'

@errorHandlerDecorator
export default class YourComponent extends React.Component {
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

By using it as a HOC. You can also customize the errorCallback function and FallbackComponent for better appearance:

```js
// import first
import { withErrorHandler } from 'react-error-boundaries'

const ComponentWithErrorBoundary = withErrorHandler(
  errorCallback,    // report Error to service
  FallbackComponent, // Component to display errors
  YourComponent // Component to decorate
)

// or customize as a ES7 decorator
const yourErrorHandlerDecorator = withErrorHandler(
  errorCallback,    // report Error to service
  FallbackComponent, // Component to display errors
)

@yourErrorHandlerDecorator
class YourComponent extends React.component {
    //......
}


```

## Try example

Input `i` in search input and error will throw.

```shell
# run example, auto open browser and enable hot loader
npm install
npm start
```

## License

MIT