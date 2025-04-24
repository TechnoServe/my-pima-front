import React, { Suspense } from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import LoadingScreen from '../LoadingScreen';

const LoadingBoundary = ({ children }) => (
  <ErrorBoundary>
    <Suspense fallback={<LoadingScreen />}>
      {children}
    </Suspense>
  </ErrorBoundary>
);

export default LoadingBoundary;