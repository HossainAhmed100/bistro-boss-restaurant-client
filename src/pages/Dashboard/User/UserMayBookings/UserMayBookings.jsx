import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import {Table, TableHeader, Button, TableColumn, TableBody, TableRow, TableCell, Avatar} from "@nextui-org/react";
import { FaTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


function UserMayBookings() {
    // const [cart, refetch] = useCart();
    // const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure();
    const handleDelete = id => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/carts/${id}`)
          .then(res => {
            if(res.data.deletedCount > 0){
            //   refetch();
              Swal.fire({
                icon: "success",
                title: "Order Deleted Successed.",
                showConfirmButton: false,
                timer: 1500
              });
            }
          }) 
        }
      });
    }
  return (
    <div>
      <Helmet title='My Cart | Bistro Boss'/>
      <div className="mx-16 space-y-4">
      <SectionTitle heading={"WANNA ADD MORE?"} subHeading={"---My Cart---"}/>

      <div className="p-4 z-0 flex relative justify-between gap-4 bg-content1 overflow-auto rounded-large shadow-small w-full items-center">
        <h1 className="text-xl font-medium">TOTAL BOOKINGS: {40}</h1>
        <h1 className="text-xl font-medium">TOTAL PRICE: ${60}</h1>
        <Button className="bg-[#D1A054] text-white" variant="shadow">
        PAY
      </Button>
      </div>
      <Table aria-label="Example table with custom cells">
        <TableHeader>
        <TableColumn>TAG</TableColumn>
        <TableColumn>ITEM IMAGE</TableColumn>
        <TableColumn>GUEST NUMBER</TableColumn>
        <TableColumn>CATEGORY</TableColumn>
        <TableColumn>PRICE</TableColumn>
        <TableColumn>TOTAL PRICE</TableColumn>
        <TableColumn>ACTION</TableColumn>
        </TableHeader>
        <TableBody emptyContent={"No rows to display."}>
        {[1,2,3].map((item, index) => (<TableRow key={item._id}>
            <TableCell>{++index}</TableCell>
            <TableCell>
              <Avatar isBordered size="lg" radius="sm" src={"https://i.pravatar.cc/150?u=a04258a2462d826712d"} />
            </TableCell>
            <TableCell>{4} GUEST</TableCell>
            <TableCell>{"HOTEL"}</TableCell>
            <TableCell>${8}</TableCell>
            <TableCell>${89}</TableCell>
            <TableCell>
            <Button onClick={() => handleDelete(index)} isIconOnly aria-label="Delete Cart item" color="danger" >
            <FaTrashCan />
            </Button>
            </TableCell>
          </TableRow>)
          )}
        </TableBody>
      </Table>

      </div>
    </div>
  )
}

export default UserMayBookings
