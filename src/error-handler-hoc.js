import React from 'react'

function withErrorHandler (errorCallback, FallbackComponent, Component) {
    class WithErrorHandler extends React.PureComponent {
        constructor () {
            super()

            // Construct the initial state
            this.state = {
                hasError: false,
                error: null,
                errorInfo: null
            }
        }

        closeErrorModal = () => {
            this.setState({ hasError: false });
        }

        componentDidCatch (error, info) {
            // Update state if error happens
            this.setState({ hasError: true, error, errorInfo: info });

            // Report errors
            errorCallback(error, info, this.props);
        }

        render () {
            // if state contains error and in development environment we render fallback component
            if (this.state.hasError && process.env.NODE_ENV == 'development') {
                const { error, errorInfo } = this.state
                return (
                    <FallbackComponent
                        {...this.props}
                        closeErrorModal={this.closeErrorModal}
                        error={error}
                        errorInfo={errorInfo}
                    />
                )
            }
            return <Component {...this.props} />
        }
    }
    WithErrorHandler.displayName = `withErrorHandler(${Component.displayName || 'NoDisplayNameComponent'})`
    return WithErrorHandler
}

// 柯里化，延迟执行，一(3个参数)或两步(2个参数+1个参数)执行，两步执行时保留第一步执行的参数，到第二次输入全部参数方执行fn（并恢复参数到第一步时）
function curry(fn) {
    if (typeof fn !== 'function') {
        throw Error('curry only receive function params!')
    }
    let _len = fn.length, _args = [];

    function _curry() {
        var args = [].concat(_args); // 备份合并前参数
        if (arguments.length >= _len) { // 一次性传三个参数则舍弃之前参数
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
    _curry.toString = function() {
        return fn.toString();
    }
    return _curry;
}

export default curry(withErrorHandler)