import React from 'react';
import Header from '../component/Header';
import SidebarComponent from '../component/SidebarComponent';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <SidebarComponent />
      <div className="flex flex-col flex-grow">
        {/* Header */}
        <Header />
        {/* Page Content */}
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
