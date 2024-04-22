import { Helmet } from "react-helmet-async";
import { FaWallet, FaStore, FaPhone, FaCartShopping, FaStar, FaCalendarDays } from "react-icons/fa6";
import {Avatar} from "@nextui-org/react";
function UserHome() {
  return (
    <section>
      <Helmet title='My Dashboard | User'/>
      <div className="p-10">
        <h1 className="text-3xl cinzelFont font font-bold">HI, WELCOME BACK!</h1>
        <div className="grid grid-col-1 lg:grid-cols-3 md:grid-cols-2 gap-4 py-8">
          <ItemCart styleClass="bg-gradient-to-r from-indigo-400 to-violet-400"
            number={3000}
            title="Menu"
            icon={<FaWallet size={35}/>}
          />
          <ItemCart styleClass="bg-gradient-to-r from-orange-400 to-amber-400"
            number={3000}
            title="Shop"
            icon={<FaStore size={35}/>}
          />
          <ItemCart styleClass="bg-gradient-to-r from-purple-400 to-pink-400"
            number={3000}
            title="Contact"
            icon={<FaPhone size={35}/>}
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="flex-1 md:border-r-4 border-[#D1A054] p-8 flex flex-col items-center justify-center bg-[#FFEDD5] h-72">
            <Avatar className="w-50 border-5 border-[#D1A054] h-20 text-3xl" 
            src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
            <h1 className="text-gray-600 font-medium mt-2">Hossain Ahmed</h1>
          </div>
          <div className="flex-1 p-8 flex items-center justify-center bg-[#FEF9C3] h-72">
            <div className="cinzelFont">
              <h1 className="text-2xl font font-bold">YOUR ACTIVITIES</h1>
              <div className="space-y-3 mt-4">
                <div className="flex items-center justify-start gap-4 text-blue-500">
                  <FaCartShopping size={24}/>
                  <h1 className="text-md font-semibold">ORDERS : {5}</h1>
                </div>
                <div className="flex items-center justify-start gap-4 text-cyan-500">
                  <FaStar size={24}/>
                  <h1 className="text-md font-semibold">REVIEWS : {3}</h1>
                </div>
                <div className="flex items-center justify-start gap-4 text-orange-500">
                  <FaCalendarDays size={24}/>
                  <h1 className="text-md font-semibold">BOOKINGS : {1}</h1>
                </div>
                <div className="flex items-center justify-start gap-4 text-rose-500">
                  <FaWallet size={24}/>
                  <h1 className="text-md font-semibold">PAYMENT : {8}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const ItemCart = ({styleClass, icon, number, title}) => {
  return (
    <div className={`${styleClass} flex-1 rounded-md p-4`}>
      <div className="text-white flex items-center justify-center gap-4">
        {icon}
        <div className="flex flex-col">
        <p className="text-2xl font-bold">{number}</p>
        <p className="text-base">{title}</p>
        </div>
      </div>
    </div>
  )
}

export default UserHome
