import { FaBoxesStacked, FaWallet, FaUsers, FaTruckMoving} from "react-icons/fa6";

function AdminHome() {
  return (
    <section>
      <div className="p-10">
        <h1 className="text-3xl cinzelFont font font-bold">HI, WELCOME BACK!</h1>
        <div className="flex items-center justify-center gap-4 py-8">
          <ItemCart styleClass="bg-gradient-to-r from-indigo-400 to-violet-400"
            number={3000}
            title="Revenue"
            icon={<FaWallet size={35}/>}
          />
          <ItemCart styleClass="bg-gradient-to-r from-orange-400 to-amber-400"
            number={3000}
            title="Customers"
            icon={<FaUsers size={35}/>}
          />
          <ItemCart styleClass="bg-gradient-to-r from-purple-400 to-pink-400"
            number={3000}
            title="Products"
            icon={<FaBoxesStacked  size={35}/>}
          />
          <ItemCart styleClass="bg-gradient-to-r from-cyan-400 to-blue-400"
            number={3000}
            title="Orders"
            icon={<FaTruckMoving size={35}/>}
          />
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

export default AdminHome
