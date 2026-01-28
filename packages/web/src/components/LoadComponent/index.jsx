import React from 'react';
import Loading from '@/components/Loading';

const LoadComponent = (resolvePath) => {
  return () => {
    const Component = require(`@/${resolvePath}`).default;
    return (
      <React.Suspense fallback={<Loading />}>
        <Component />
      </React.Suspense>
    );
  };
};

export default LoadComponent;
