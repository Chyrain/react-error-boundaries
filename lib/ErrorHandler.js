'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FallbackView = exports.errorHandlerDecorator = exports.withErrorHandler = exports.ErrorBoundary = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _errorHandlerHoc = require('./error-handler-hoc');

var _errorHandlerHoc2 = _interopRequireDefault(_errorHandlerHoc);

var _Fallback = require('./Fallback');

var _Fallback2 = _interopRequireDefault(_Fallback);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 错误报告函数示例
function reportErrorToService(error, info, props) {
  console.error({
    error: error,
    info: info,
    props: props
  });
}

var errorHandlerDecorator = (0, _errorHandlerHoc2.default)(reportErrorToService, _Fallback2.default);

var ErrorBoundary = errorHandlerDecorator(function (props) {
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    props.children
  );
});

exports.ErrorBoundary = ErrorBoundary;
exports.withErrorHandler = _errorHandlerHoc2.default;
exports.errorHandlerDecorator = errorHandlerDecorator;
exports.FallbackView = _Fallback2.default;
exports.default = ErrorBoundary;