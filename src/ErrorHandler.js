import React from 'react'

import withErrorHandler from './error-handler-hoc'
import FallbackView from './Fallback'

const errorHandlerDecorator = withErrorHandler(FallbackView)

const ErrorBoundary = errorHandlerDecorator(props => 
  <React.Fragment>{props.children}</React.Fragment>
);

export { ErrorBoundary, withErrorHandler, errorHandlerDecorator, FallbackView }
export default ErrorBoundary