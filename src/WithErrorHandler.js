import React from "react";
import FallbackView from "./Fallback";

class ErrorBoundary extends React.PureComponent {
  constructor() {
    super();

    this.closeErrorModal = this.closeErrorModal.bind(this);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  closeErrorModal() {
    this.setState({ hasError: false });
  }

  componentDidCatch(error, info) {
    // Update state if error happens
    this.setState({ hasError: true, error, errorInfo: info });

    // Report errors here
    const { onError, FallbackComponent, ..._props } = this.props;
    if (typeof onError === "function") {
      try {
        onError.call(this, error, info, _props);
      } catch (e) {}
    }
  }

  render() {
    const { onError, FallbackComponent, children, ..._props } = this.props;
    // if state contains error and in development environment we render fallback component
    if (this.state.hasError) {
      const { error, errorInfo } = this.state;
      return (
        <FallbackComponent
          {..._props}
          closeErrorModal={this.closeErrorModal}
          error={error}
          errorInfo={errorInfo}
        />
      );
    }
    return children;
  }
}
ErrorBoundary.defaultProps = {
  FallbackComponent: FallbackView
};

export { ErrorBoundary, FallbackView };
export default ErrorBoundary;
