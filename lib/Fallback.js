'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // Fallback.jsx


exports.default = Fallback;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var containerStyl = {
    boxSizing: 'border-box',
    backgroundColor: 'rgba(0,0,0,0.75)',
    color: '#fff',
    position: 'fixed',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    overflowY: 'auto',
    padding: '16px'
};
var btnStyl = {
    position: 'absolute',
    right: '16px',
    top: '35px',
    cursor: 'pointer',
    minWidth: '40px',
    minHeight: '30px',
    borderRadius: '5px',
    outlineStyle: 'none'
};
var preSty = {
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
    wordBreak: 'break-word',
    padding: '0 6px'
};
var detailSty = {
    outline: 'none',
    WebkitTapHighlightColor: 'transparent',
    WebkitHighlight: 'none'
};

function Fallback(props) {
    var error = props.error,
        errorInfo = props.errorInfo,
        closeErrorModal = props.closeErrorModal;


    return _react2.default.createElement(
        _Modal2.default,
        null,
        _react2.default.createElement(
            'div',
            { style: containerStyl },
            _react2.default.createElement(
                'button',
                { style: btnStyl, onClick: closeErrorModal },
                'Close'
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h2',
                    null,
                    'Something went wrong.'
                ),
                _react2.default.createElement('hr', null),
                _react2.default.createElement(
                    'p',
                    null,
                    'ErrorMessage'
                ),
                _react2.default.createElement(
                    'pre',
                    { style: _extends({}, preSty, { color: '#ff0404' }) },
                    error.message
                ),
                _react2.default.createElement('hr', null),
                _react2.default.createElement(
                    'p',
                    null,
                    'Stack'
                ),
                _react2.default.createElement(
                    'pre',
                    { style: _extends({}, preSty, { color: '#ff0404' }) },
                    error.stack
                ),
                _react2.default.createElement('hr', null),
                _react2.default.createElement(
                    'p',
                    null,
                    'ComponentStack'
                ),
                _react2.default.createElement(
                    'pre',
                    { style: _extends({}, preSty, { color: '#f3d429' }) },
                    errorInfo.componentStack
                ),
                _react2.default.createElement('hr', null)
            )
        )
    );
}