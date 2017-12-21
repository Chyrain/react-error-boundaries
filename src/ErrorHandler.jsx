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

// 已包装好的带默认FallbackView的ErrorHandler: 装饰器
const errorHandlerDecorator = withErrorHandler(
  reportErrorToService,
  FallbackView
)

// 已包装好的带默认FallbackView的ErrorHandler: 容器调用方式
const ErrorBoundary = errorHandlerDecorator(props => 
  <React.Fragment>{props.children}</React.Fragment>
)

// 可自定义errorCallback和FallbackComponent的withErrorHandler：(errorCallback, FallbackComponent, Component)
export { withErrorHandler, errorHandlerDecorator };
// 已包装好的带默认FallbackView的ErrorBoundary
export default ErrorBoundary;