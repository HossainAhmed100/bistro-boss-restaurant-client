import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import {Button, Card, CardBody, Image} from "@nextui-org/react";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";

const ChefRecommends = () => {
  const {user} = useAuth();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const {data: menu = []} = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
        const res = await axiosPublic.get("/menuWithQuentity/3");
        return res.data;
    }
  })
  const [,refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const addToCart = async (item) => {
    const {name, image, price, _id} = item;
    if(user && user.email){
      const cartItem = { menuId:_id, email:user?.email, name, price, image}
    await axiosSecure.post("/carts", cartItem)
      .then(res => {
        console.log(res.data)
        if(res.data.insertedId){
          refetch()
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
    <section className="my-24">
        <SectionTitle heading={"CHEF RECOMMENDS"} subHeading={"---Should Try---"}/>
        <div className="gap-10 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 mx-6">
        {menu.map((item, index) => (
            <Card radius="none" shadow="sm" key={index}>
            <CardBody className="overflow-visible p-0">
                <Image shadow="sm" radius="none" width="100%" lt={item.name} 
                className="w-full object-cover h-[250px]" src={item.image} />
            </CardBody>
            <div className="py-4 px-2 text-center m-auto">
                <b className="text-lg font-semibold">{item.name}</b>
                <p className="text-default-500 text-wrap text-sm lg:line-clamp-2 mt-2 mb-6">{item.recipe}</p>
                <Button onClick={() => addToCart(item)} size="md" color="warning" variant="shadow">ADD TO CART</Button> 
            </div>
            </Card>
        ))}
        </div>
    </section>
  )
}

export default ChefRecommends
