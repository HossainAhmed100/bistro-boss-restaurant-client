import { Button } from "@nextui-org/react"
import MenuItemCard from "../../Shared/MenuItem/MenuItemCard"
import { Link } from "react-router-dom"


const MenuCategory = ({menuItem, menuBtnTitle, category}) => {
  return (
    <div className="mt-16">
      <div className="gap-4 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 mx-6">
        {menuItem.map(item => <MenuItemCard key={item._id} item={item}/>)}
      </div>
      <div className="my-10 text-center">
          <Button variant="bordered" color="default">
        <Link to={`/orderFood/${category}`}>
            {menuBtnTitle}
        </Link>
            </Button>
      </div>
    </div>
  )
}

export default MenuCategory
