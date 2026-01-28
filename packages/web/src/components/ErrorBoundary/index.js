import React from 'react';
import * as Sentry from '@sentry/react';

class ErrorBoundary extends React.Component {
  render() {
    return (
      <Sentry.ErrorBoundary fallback={() => <div>暂时无法显示</div>}>
        {this.props.children}
      </Sentry.ErrorBoundary>
    );
  }
}

function errorHunter(WrappedComponent) {
  class ComponentWithErrorBoundary extends React.Component {
    render() {
      return (
        <ErrorBoundary>
          <WrappedComponent {...this.props} />
        </ErrorBoundary>
      );
    }
  }

  return ComponentWithErrorBoundary;
}

export { ErrorBoundary, errorHunter };
export default ErrorBoundary;
