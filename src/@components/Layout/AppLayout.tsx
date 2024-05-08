'use client';
import React from 'react';
import Footer from './elements/Footer';
import Header from './elements/Header';

interface IProps {
  children: React.ReactNode;
}
const AppLayout: React.FC<IProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <div className="main-container">{children}</div>
      <Footer />
    </React.Fragment>
  );
};

export default AppLayout;
