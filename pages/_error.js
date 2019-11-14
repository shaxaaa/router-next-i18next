import React from 'react'

const Error = ({ statusCode }) => (
    <p>{statusCode}</p>
)

Error.getInitialProps = async () => {
  return {
    routeAccess: { type: 'all' },
    namespacesRequired: ['common'],
  };
};

export default Error;