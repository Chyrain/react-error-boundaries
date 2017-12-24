import React from 'react'
import FallbackView from './Fallback'

class ErrorBoundary extends React.PureComponent {
    constructor () {
        super();

        this.closeErrorModal = this.closeErrorModal.bind(this);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        };
    }

    closeErrorModal () {
        this.setState({ hasError: false });
    }

    componentDidCatch (error, info) {
        // Update state if error happens
        this.setState({ hasError: true, error, errorInfo: info });

        // Report errors here
        const {onError, FallbackComponent, ..._props} = this.props;
        if (typeof onError === 'function') {
            try {
                onError.call(this, error, info, _props);
            } catch (e) {}
        }
    }

    render () {
        const {onError, FallbackComponent, children, ..._props} = this.props;
        // if state contains error and in development environment we render fallback component
        if (this.state.hasError) {
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
        return children
    }
}
ErrorBoundary.defaultProps = {
    FallbackComponent: FallbackView
}

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
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


const withErrorHandler = curry((FallbackComponent, Component) => {
    const WithErrorHandler = props => {
        const {onError} = props;
        return (<ErrorBoundary FallbackComponent={FallbackComponent} onError={onError}>
          <Component {...props} />
        </ErrorBoundary>)
    };
    WithErrorHandler.displayName = `WithErrorHandler(${getDisplayName(Component)})`;
    return WithErrorHandler;
});

export { 
    withErrorHandler,
    ErrorBoundary,
    FallbackView
}
export default ErrorBoundary