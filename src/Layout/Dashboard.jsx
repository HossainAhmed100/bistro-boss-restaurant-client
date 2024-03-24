import { NavLink, Outlet } from "react-router-dom"
import { FaCartShopping, FaCalendarDays, FaWallet, FaBagShopping} from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { TbMessage2Star } from "react-icons/tb";
import { MdBookmarkAdd,MdMail, MdMenu  } from "react-icons/md";
import {Divider} from "@nextui-org/react";

function Dashboard() {
  return (
    <div className="flex">
      <div className="w-80 min-h-screen bg-white border-x-1 p-6">
        <div className="px-2 py-6 mb-6 items-center justify-center">
            <h1 className="text-2xl font-extrabold cinzelFont tracking-wider">BISTRO BOSS</h1>
            <h3 className="tracking-[0.5rem] cinzelFont font-semibold">RESTAURANT</h3>
        </div>
        <ul className="space-y-1">
          <NavItem title="User Home" icon={<AiFillHome  size={22}/>} link={"/dashboard/home"}/>
          <NavItem title="My Cart" icon={<FaCartShopping size={22}/>} link={"/dashboard/cart"}/>
          <NavItem title="MY BOOKING" icon={<MdBookmarkAdd size={23}/>} link={"/dashboard/mybooking"}/>
          <NavItem title="ADD REVIEW" icon={<TbMessage2Star size={22}/>} link={"/dashboard/addreviews"}/>
          <NavItem title="RESERVATION" icon={<FaCalendarDays size={21}/>} link={"/dashboard/reservetion"}/>
          <NavItem title="PAYMENT HISTORY" icon={<FaWallet size={21}/>} link={"/dashboard/paymenthistory"}/>
        </ul>
        <Divider className="my-6" />
        <ul className="space-y-1">
          <NavItem title="Home" icon={<AiFillHome  size={22}/>} link={"/"}/>
          <NavItem title="MENU" icon={<MdMenu size={22}/>} link={"/menu"}/>
          <NavItem title="SHOP" icon={<FaBagShopping size={22}/>} link={"/orderFood/salad"}/>
          <NavItem title="CONTACT" icon={<MdMail size={22}/>} link={"/conatct"}/>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  )
}

 const NavItem = ({title, icon, link}) => {
    return <li>
    <NavLink 
    className="
    flex items-center justify-start gap-3 p-2
    hover:bg-gray-300 ease-in-out 
    duration-300 rounded-md" to={link}>
        {icon}
        <span className="text-lg font-semibold cinzelFont">{title}</span>
    </NavLink>
    </li>
}

export default Dashboard
