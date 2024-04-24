import { useContext, useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Avatar, DropdownMenu, DropdownItem, DropdownTrigger, Dropdown, Badge} from "@nextui-org/react";
import { NavLink, Link, redirect } from "react-router-dom";
import './NavBar.css'
import { AuthContext } from "../../../providers/AuthProvider";
import { FaCartShopping } from "react-icons/fa6";
import { VscSignOut } from "react-icons/vsc";
import useCart from "../../../hooks/useCart";

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
      ];
    const handleLogOut = () => {
      logOut()
      .then(() => {
        redirect("/")
      })
    }
  return (
    <Navbar isBordered onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent >
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link to="/" className="flex items-center justify-center">
          <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
              <path
              clipRule="evenodd"
              d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
              fill="currentColor"
              fillRule="evenodd"
              />
          </svg>
          <p className="font-bold text-inherit">BISTRO BOOS</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <NavLink color="foreground" to="/">
            HOME
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink color="foreground" to="menu">
            OUR MENU
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink color="foreground" to="orderFood/salad">
            OUR FOOD
          </NavLink>
        </NavbarItem>
      </NavbarContent>
      {
        user ? 
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link to="/dashboard/cart">
              <Badge color="danger" content={cart.length} shape="circle">
                <FaCartShopping size={30}/>
              </Badge>
            </Link>
          </NavbarItem>
          <NavbarItem className="hidden lg:flex">
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar isBordered as="button" className="transition-transform" color="secondary" 
                  name={user?.displayName} size="sm"
                  src={user?.photoURL}
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem textValue="userNameandEmail" key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">{user?.email}</p>
                </DropdownItem>
                <DropdownItem textValue="mySettings" key="settings">My Settings</DropdownItem>
                <DropdownItem textValue="teamSettings" key="team_settings">Team Settings</DropdownItem>
                <DropdownItem textValue="logout" onClick={handleLogOut} key="logout" color="danger" className="flex items-center justify-center flex-row gap-2">
                  <span className="flex items-center gap-1 justify-start">
                  <VscSignOut />
                  Log Out
                  </span>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        </NavbarContent> :
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link to="/login">Login</Link>
          </NavbarItem>
          <NavbarItem>
              <Link color="primary" variant="flat" to="/signup">
                Sign Up
              </Link>
          </NavbarItem>
        </NavbarContent> 
      }
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              to="/"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavBar
