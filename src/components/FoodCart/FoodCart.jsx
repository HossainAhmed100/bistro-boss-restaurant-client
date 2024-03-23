import {Button, Card, CardBody, Image} from "@nextui-org/react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const FoodCart = ({item}) => {
    const {name, image, recipe, price, _id} = item;
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const addToCart = async () => {
        if(user && user.email){
          const cartItem = { menuId:_id, email:user?.email, name, price, image}
        await axiosSecure.post("/carts", cartItem)
          .then(res => {
            console.log(res.data)
            if(res.data.insertedId){
              Swal.fire({
                icon: "success",
                title: "Order Added to the cart.",
                showConfirmButton: false,
                timer: 1500
              });
            }
          })
        }else{
          Swal.fire({
            title: "You are not logeed in",
            text: "Please login to add the cart!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Login now!"
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/login", {state: {from: location}})
            }
          });
        }
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
        <Button onClick={() => addToCart()} size="md" color="warning" variant="shadow">ADD TO CART</Button> 
    </div>
    </Card>
  )
}

export default FoodCart
