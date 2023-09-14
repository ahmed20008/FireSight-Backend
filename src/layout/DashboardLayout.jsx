import React from 'react';
import Sidebar from './partials/Sidebar';

function dashboardLayout(WrappedComponent) {
  return function DashboardLayout(props) {
    return (
      <div className="row">
        <div className="col-md-12">
          <Sidebar>
            <div className="mx-5 pt-4">
              <WrappedComponent {...props} />
            </div>
          </Sidebar>

        </div>
      </div>

    )
  }
}

export default dashboardLayout;
