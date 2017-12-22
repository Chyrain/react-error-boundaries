import React from 'react'

import withErrorHandler from './error-handler-hoc'
import FallbackView from './Fallback'

// 错误报告函数示例
function reportErrorToService(error, info, props) {
  console.error({
    error,
    info,
    props
  });
}

const errorHandlerDecorator = withErrorHandler(
  reportErrorToService,
  FallbackView
);

const ErrorBoundary = errorHandlerDecorator(props => 
  <React.Fragment>{props.children}</React.Fragment>
);

export { ErrorBoundary, withErrorHandler, errorHandlerDecorator, FallbackView }
export default ErrorBoundary