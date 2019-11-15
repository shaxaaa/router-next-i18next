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
      const pageComponentProps = PageComponent.getInitialProps
      ? await PageComponent.getInitialProps(ctx)
      : {};

      if (
        !pageComponentProps.pageProps.routeAccess ||
        !pageComponentProps.pageProps.routeAccess.type
      ) {
        console.warn(`You have not declared routeAccess for your page component.`);
      }

      const { routeAccess } = pageComponentProps.pageProps;
      if (routeAccess.type === 'public') {
        redirect(ctx, '/about');
      }

      return {
        ...pageComponentProps,
      };
    }

    render() {
      return (
        <PageComponent {...this.props} />
      );
    }
  }

  return hoistNonReactStatic(WithRouteAccess, PageComponent, {
    getInitialProps: true,
  });
}
