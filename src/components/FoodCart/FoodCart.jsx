import {Button, Card, CardBody, Image} from "@nextui-org/react";

const FoodCart = ({index, item}) => {
    const {name, image, recipe, price} = item;
  return (
    <Card radius="none" shadow="sm" key={index}>
            <p className="text-white absolute z-50 w-16 top-3 right-3 p-2 bg-gray-900 rounded-md text-center">${price}</p>
        <CardBody className="overflow-visible p-0">
            <Image shadow="sm" radius="none" width="100%" lt={name} 
            className="w-full object-cover h-[250px]" src={image} />
        </CardBody>
        <div className="p-6 text-center m-auto">
            <b className="text-lg font-semibold">{name}</b>
            <p className="text-default-500 text-sm line-clamp-2 mt-2 mb-6 w-80">{recipe}</p>
            <Button size="md" color="warning" variant="shadow">
                ADD TO CART
            </Button> 
        </div>
    </Card>
  )
}

export default FoodCart
