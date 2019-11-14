import React from 'react';

const About = () => <h1>Test About</h1>;

About.getInitialProps = async () => {
  return {
    routeAccess: { type: 'private' },
    namespacesRequired: ['common'],
  };
};

export default About;
