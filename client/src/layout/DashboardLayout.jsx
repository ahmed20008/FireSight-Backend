import React, { useState } from 'react';
import Sidebar from './partials/Sidebar';
import Navbar from './partials/Navbar';

function dashboardLayout(WrappedComponent) {
  return function DashboardLayout(props) {

    const MOBILE_VIEW = window.innerWidth < 468;
    const [displaySidebar, setDisplaySidebar] = useState(!MOBILE_VIEW);

    const handleSidebarDisplay = (e) => {
      e.preventDefault();
      if (window.innerWidth > 468) {
        setDisplaySidebar(!displaySidebar);
      } else {
        setDisplaySidebar(false);
      }
    };

    return (
      <div className="row">
          <Sidebar displaySidebar={displaySidebar} handleSidebarDisplay={handleSidebarDisplay} />
          <div className="pt-4 px-5" style={{ overflowY: 'scroll', position: 'relative', minHeight: '100vh' }}>
            <WrappedComponent {...props} />
        </div>
      </div>
    )
  }
}

export default dashboardLayout;
