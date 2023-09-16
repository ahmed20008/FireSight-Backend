import React, { useState } from 'react';
import {
  Children,
  SidebarContainer,
  SidebarWrapper,
  SidebarLogoWrapper,
  SidebarLogo,
  SidebarBrand,
  SidebarToggler,
} from "../../assets/js/SidebarStyles";
import MenuIcon from '@mui/icons-material/Menu';
import SidebarItems from './SidebarItems';

const MOBILE_VIEW = window.innerWidth < 468;

const Sidebar = ({ children }) => {
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
    <>
      <div style={{ position: 'fixed', left: '0', top: '0', bottom: '0', zIndex: '99999', width: '20%', overflowY: 'hidden' }}>
        <SidebarContainer displaySidebar={displaySidebar}>
          <SidebarWrapper>
            <SidebarLogoWrapper displaySidebar={displaySidebar}>
              <SidebarLogo href="#">
                <span className="app-brand-logo demo">
                  {/* <img src="#" alt="Brand logo" /> */}
                </span>
                <SidebarBrand
                  displaySidebar={displaySidebar}
                  className="app__brand__text"
                >
                  <span className='text-dark fw-bold' style={{ whiteSpace: 'nowrap' }}>
                    MY DASHBOARD
                  </span>
                </SidebarBrand>
              </SidebarLogo>
              <SidebarToggler
                displaySidebar={displaySidebar}
                onClick={handleSidebarDisplay}
              >
                <MenuIcon />
              </SidebarToggler>
            </SidebarLogoWrapper>
            <SidebarItems displaySidebar={displaySidebar} />
          </SidebarWrapper>
        </SidebarContainer>
      </div>
      <div style={{overflowY: 'scroll', position: 'relative' }}>
        <Children displaySidebar={displaySidebar}>{children}</Children>
      </div>
    </>
  )
};

export default Sidebar
