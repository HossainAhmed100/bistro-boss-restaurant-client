import { Button } from "@nextui-org/react"
import MenuItemCard from "../../Shared/MenuItem/MenuItemCard"
import { Link } from "react-router-dom"


const MenuCategory = ({menuItem, menuBtnTitle, category}) => {
  return (
    <div className="mt-16">
      <div className="grid grid-cols-2 gap-4">
        {menuItem.map(item => <MenuItemCard key={item._id} item={item}/>)}
      </div>
      <div className="my-10 text-center">
        <Link to={`/orderFood/${category}`}>
          <Button variant="bordered" color="default">{menuBtnTitle}</Button>
        </Link>
      </div>
    </div>
  )
}

export default MenuCategory