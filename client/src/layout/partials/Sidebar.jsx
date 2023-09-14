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
            <Children displaySidebar={displaySidebar}>{children}</Children>
        </>
    )
};

export default Sidebar
