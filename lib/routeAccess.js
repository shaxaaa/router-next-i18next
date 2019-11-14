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
  const WithRouteAccess = ({ ...pageProps }) => {
    return (
      <PageComponent {...pageProps} />
    );
  };

  WithRouteAccess.getInitialProps = async ctx => {
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
  };

  return hoistNonReactStatic(WithRouteAccess, PageComponent, {
    getInitialProps: true,
  });
}
