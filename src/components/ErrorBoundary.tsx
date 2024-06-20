import { Component, ErrorInfo, ReactElement } from "react";

type props = {
  children: ReactElement;
};
type state = {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
};
class ErrorBoundary extends Component<props, state> {
  constructor(props: props) {
    super(props);
    this.state = { ...this.state, hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { error: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h2>Something went wrong.</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
