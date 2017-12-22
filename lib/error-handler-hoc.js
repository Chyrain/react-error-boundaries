'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function withErrorHandler(errorCallback, FallbackComponent, Component) {
    var WithErrorHandler = function (_React$PureComponent) {
        _inherits(WithErrorHandler, _React$PureComponent);

        function WithErrorHandler() {
            _classCallCheck(this, WithErrorHandler);

            // Construct the initial state
            var _this = _possibleConstructorReturn(this, (WithErrorHandler.__proto__ || Object.getPrototypeOf(WithErrorHandler)).call(this));

            _this.closeErrorModal = function () {
                _this.setState({ hasError: false });
            };

            _this.state = {
                hasError: false,
                error: null,
                errorInfo: null
            };
            return _this;
        }

        _createClass(WithErrorHandler, [{
            key: 'componentDidCatch',
            value: function componentDidCatch(error, info) {
                // Update state if error happens
                this.setState({ hasError: true, error: error, errorInfo: info });

                // Report errors
                errorCallback(error, info, this.props);
            }
        }, {
            key: 'render',
            value: function render() {
                // if state contains error and in development environment we render fallback component
                if (this.state.hasError && process.env.NODE_ENV == 'development') {
                    var _state = this.state,
                        error = _state.error,
                        errorInfo = _state.errorInfo;

                    return _react2.default.createElement(FallbackComponent, _extends({}, this.props, {
                        closeErrorModal: this.closeErrorModal,
                        error: error,
                        errorInfo: errorInfo
                    }));
                }
                return _react2.default.createElement(Component, this.props);
            }
        }]);

        return WithErrorHandler;
    }(_react2.default.PureComponent);

    WithErrorHandler.displayName = 'withErrorHandler(' + (Component.displayName || 'NoDisplayNameComponent') + ')';
    return WithErrorHandler;
}

// 柯里化，延迟执行，一(3个参数)或两步(2个参数+1个参数)执行，两步执行时保留第一步执行的参数，到第二次输入全部参数方执行fn（并恢复参数到第一步时）
function curry(fn) {
    if (typeof fn !== 'function') {
        throw Error('curry only receive function params!');
    }
    var _len = fn.length,
        _args = [];

    function _curry() {
        var args = [].concat(_args); // 备份合并前参数
        if (arguments.length >= _len) {
            // 一次性传三个参数则舍弃之前参数
            _args = [];
        }
        _args = _args.concat([].slice.call(arguments)); // arguments转数组拼接到之前数组
        if (_args.length === _len) {
            var rst = fn.apply(null, _args);
            _args = args;
            return rst;
        }
        return _curry;
    }
    _curry.toString = function () {
        return fn.toString();
    };
    return _curry;
}

exports.default = curry(withErrorHandler);