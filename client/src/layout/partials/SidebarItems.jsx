import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ItemsList, ItemContainer, ItemWrapper, ItemName } from "../../assets/js/SidebarStyles";
import {
  HomeIcon,
  LayoutIcon,
  CalendarIcon,
  InvoiceIcon,
  UserIcon,
  RolesIcon,
  PagesIcon,
  AuthIcon,
  WizardIcon,
  ModalIcon,
} from "../../utils/SidebarIcons";

const itemData = [
  {
    id: 1,
    name: "dashboard",
    path: "/dashboard",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    name: "layouts",
    path: "/layouts",
    icon: <LayoutIcon />,
  },
  {
    id: 3,
    name: "calendar",
    path: "/calendar",
    icon: <CalendarIcon />,
  },
  {
    id: 4,
    name: "Invoice",
    path: "/invoice",
    icon: <InvoiceIcon />,
  },
  {
    id: 5,
    name: "Users",
    path: "/users",
    icon: <UserIcon />,
  },
  {
    id: 6,
    name: "Roles",
    path: "roles",
    icon: <RolesIcon />,
  },
];

const SidebarItems = ({ displaySidebar }) => {
  const [activeItem, setActiveItem] = useState(1);

  return (
    <ItemsList>
      {itemData.map(item => (
        <ItemContainer
          key={item.id}
          onClick={() => setActiveItem(item.id)}
          className={item.id === activeItem ? "active" : ""}
        >
          <Link to={item.path}>
            <ItemWrapper>
              {item.icon}
              <ItemName displaySidebar={displaySidebar}>
                {item.name}
              </ItemName>
            </ItemWrapper>
          </Link>
        </ItemContainer>
      ))}
    </ItemsList>
  );
};

export default SidebarItems;
