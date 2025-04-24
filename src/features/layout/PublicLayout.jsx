import React from 'react';
import { Outlet } from 'react-router-dom';

const PublicLayout = () => (
  <main>
    <Outlet />
  </main>
);

export default PublicLayout;