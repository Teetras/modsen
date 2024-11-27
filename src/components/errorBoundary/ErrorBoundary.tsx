import React, { Component, ErrorInfo } from "react";
import {
  ErrorBoundaryProps,
  ErrorBoundaryState,
} from "../../constants/interfaces";

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): Partial<ErrorBoundaryState> {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <>{this.props.fallbackUI}</>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
