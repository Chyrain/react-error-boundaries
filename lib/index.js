'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FallbackView = exports.errorHandlerDecorator = exports.withErrorHandler = exports.ErrorBoundary = undefined;

var _ErrorHandler = require('./ErrorHandler');

exports.ErrorBoundary = _ErrorHandler.ErrorBoundary;
exports.withErrorHandler = _ErrorHandler.withErrorHandler;
exports.errorHandlerDecorator = _ErrorHandler.errorHandlerDecorator;
exports.FallbackView = _ErrorHandler.FallbackView;
exports.default = _ErrorHandler.ErrorBoundary;