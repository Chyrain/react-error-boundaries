import React from 'react'
import { withErrorHandler, ErrorBoundary, FallbackView } from './WithErrorHandler'

const errorHandlerDecorator = withErrorHandler(FallbackView);

export { ErrorBoundary, withErrorHandler, errorHandlerDecorator, FallbackView }
export default ErrorBoundary