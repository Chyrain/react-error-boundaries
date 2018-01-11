import React from "react";

let __ErrorBoundary;
if (
  process.env.NODE_ENV === "development" ||
  process.env.ERROR_ENV === "development"
) {
  const { ErrorBoundary, FallbackView } = require("./WithErrorHandler");

  const withErrorHandler = curry((FallbackComponent, Component) => {
    const WithErrorHandler = props => {
      const { onError } = props;
      return (
        <ErrorBoundary FallbackComponent={FallbackComponent} onError={onError}>
          <Component {...props} />
        </ErrorBoundary>
      );
    };
    WithErrorHandler.displayName = `WithErrorHandler(${Component.displayName ||
      Component.name ||
      "Component"})`;
    return WithErrorHandler;
  });
  __ErrorBoundary = ErrorBoundary;
  exports.ErrorBoundary = ErrorBoundary;
  exports.FallbackView = FallbackView;
  exports.withErrorHandler = withErrorHandler;
  exports.errorHandlerDecorator = withErrorHandler(FallbackView);
} else {
  // production or other env (not development)
  // NOOP HOC
  const withErrorHandler = curry((FallbackComponent, Component) => {
    const WithErrorHandler = props => {
      return <Component {...props} />;
    };
    return WithErrorHandler;
  });
  // NOOP ErrorBoundary
  class ErrorBoundary extends React.Component {
    render() {
      return this.props.children;
    }
  }
  __ErrorBoundary = ErrorBoundary;
  exports.ErrorBoundary = ErrorBoundary;
  exports.withErrorHandler = withErrorHandler;
  exports.errorHandlerDecorator = withErrorHandler(void 0);
}

function curry(fn) {
  if (typeof fn !== "function") {
    throw Error("curry only receive function params!");
  }
  let _len = fn.length,
    _args = [];

  function _curry() {
    var args = [].concat(_args);
    if (arguments.length >= _len) {
      _args = [];
    } else if (arguments.length + _args.length > _len) {
      _args = [];
    }
    _args = _args.concat([].slice.call(arguments));
    if (_args.length === _len) {
      var rst = fn.apply(null, _args);
      _args = args;
      return rst;
    }
    return _curry;
  }
  _curry.toString = function() {
    return fn.toString();
  };
  return _curry;
}

export default __ErrorBoundary;
