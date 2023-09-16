import React from 'react';
import Sidebar from './partials/Sidebar';
import Navbar from './partials/Navbar';

function dashboardLayout(WrappedComponent) {
  return function DashboardLayout(props) {
    return (
      <div className="row">
        <div className="col-md-12">
          <Sidebar>
            <Navbar />
            <div className="mx-4 pt-4" style={{ minHeight: '100vh' }}>
              <WrappedComponent {...props} />
            </div>
          </Sidebar>

        </div>
      </div>

    )
  }
}

export default dashboardLayout;
