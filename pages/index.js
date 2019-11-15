import React from 'react';

const HomePage = () => <h1>Test</h1>;

HomePage.getInitialProps = async () => {
  return {
    namespacesRequired: ['common'],
  };
};

export default HomePage;
