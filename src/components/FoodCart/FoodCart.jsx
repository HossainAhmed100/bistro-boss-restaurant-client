import {Button, Card, CardBody, Image} from "@nextui-org/react";

const FoodCart = ({item}) => {
    const {name, image, recipe, price} = item;
    const addToCart = food => {
        console.log(food)
    }
  return (
    <Card radius="none" shadow="sm">
    <p className="text-white absolute z-20 w-16 top-3 right-3 p-2 bg-gray-900 rounded-md text-center">${price}</p>
    <CardBody className="overflow-visible p-0">
        <Image shadow="sm" radius="none" width="100%" lt={name} 
        className="w-full object-cover h-[250px]" src={image} />
    </CardBody>
    <div className="p-6 text-center m-auto">
        <b className="text-lg font-semibold">{name}</b>
        <p className="text-default-500 text-sm line-clamp-2 mt-2 mb-6 w-80">{recipe}</p>
        <Button onClick={() => addToCart(item)} size="md" color="warning" variant="shadow">ADD TO CART</Button> 
    </div>
    </Card>
  )
}

export default FoodCart
