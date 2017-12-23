import React from 'react'

function withErrorHandler (FallbackComponent, Component) {
    class WithErrorHandler extends React.PureComponent {
        constructor () {
            super()
            this.closeErrorModal = this.closeErrorModal.bind(this);
            // Construct the initial state
            this.state = {
                hasError: false,
                error: null,
                errorInfo: null
            }
        }

        closeErrorModal() {
            this.setState({ hasError: false });
        }

        componentDidCatch (error, info) {
            // Update state if error happens
            this.setState({ hasError: true, error, errorInfo: info });

            // Report errors
            const {onError, ..._props} = this.props;
            this.props.onError && this.props.onError(error, info, _props);
        }

        render () {
            const {onError, ..._props} = this.props;
            // if state contains error and in development environment we render fallback component
            if (this.state.hasError && process.env.NODE_ENV == 'development') {
                const { error, errorInfo } = this.state
                return (
                    <FallbackComponent
                        {..._props}
                        closeErrorModal={this.closeErrorModal}
                        error={error}
                        errorInfo={errorInfo}
                    />
                )
            }
            return <Component {..._props} />
        }
    }
    WithErrorHandler.displayName = `withErrorHandler(${Component.displayName || 'NoDisplayNameComponent'})`
    return WithErrorHandler
}

function curry(fn) {
    if (typeof fn !== 'function') {
        throw Error('curry only receive function params!')
    }
    let _len = fn.length, _args = [];

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
    }
    return _curry;
}

export default curry(withErrorHandler)