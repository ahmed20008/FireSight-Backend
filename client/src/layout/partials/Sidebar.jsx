import React from 'react';
import {
  SidebarContainer,
  SidebarWrapper,
  SidebarLogoWrapper,
  SidebarLogo,
  SidebarBrand,
  SidebarToggler,
} from "../../assets/js/SidebarStyles";
import MenuIcon from '@mui/icons-material/Menu';
import SidebarItems from './SidebarItems';

const Sidebar = ({ displaySidebar, handleSidebarDisplay }) => {

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
    </>
  )
};

export default Sidebar
