import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from './shared';

const Root = () => {
  return (
    <div className="page-wrapper">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
