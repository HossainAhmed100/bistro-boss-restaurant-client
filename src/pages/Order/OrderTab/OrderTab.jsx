import FoodCart from "../../../components/FoodCart/FoodCart"

const OrderTab = ({item}) => {
  return (
    <div className="gap-10 grid grid-cols-2 sm:grid-cols-3">
        {item.map((item, index) => <FoodCart key={index} index={index} item={item}/>)}
    </div>
  )
}

export default OrderTab
