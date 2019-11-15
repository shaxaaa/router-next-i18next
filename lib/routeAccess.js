import React from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';
import redirect from './redirect';

/**
 * Creates and provides the userContext.
 * Use it by wrapping your PageComponent via HOC pattern.
 * @param {Function|Class} PageComponent
 * @param {Object} [config]
 */
export default function(PageComponent) {
  class WithRouteAccess extends React.Component {
    static async getInitialProps(ctx) {
      redirect(ctx, '/about');
    }

    render() {
      return (
        <PageComponent {...this.props} />
      );
    }
  }

  return WithRouteAccess;
}
