import React from 'react';
import { Router } from '../i18n';

export default function(PageComponent) {
  class WithRouteAccess extends React.Component {
    static async getInitialProps(ctx) {
      if (ctx.res) {
        ctx.res.writeHead(302, { Location: '/about' });
        ctx.res.end();
      } else {
        Router.replace('/about');
      }
    }

    render() {
      return (
        <PageComponent {...this.props} />
      );
    }
  }

  return WithRouteAccess;
}
