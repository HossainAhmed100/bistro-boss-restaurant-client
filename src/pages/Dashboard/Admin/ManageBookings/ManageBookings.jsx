import { Helmet } from "react-helmet-async"
import SectionTitle from "../../../../components/SectionTitle/SectionTitle"
import {Table, TableHeader, Button, TableColumn, TableBody, TableRow, TableCell, Tooltip} from "@nextui-org/react";
import { GoCheckCircleFill } from "react-icons/go";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const ManageBookings = () => {
//   const [cart, refetch] = useCart();
//   const totalPrice = cart.reduce((total, item) => total + item.price, 0);
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
            // refetch();
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
      <Helmet title='Manage Bookings | Admin | Bistro Boss'/>
      <div className="mx-16 space-y-4">
      <SectionTitle heading={"MANAGE ALL ITEMS"} subHeading={"---Hurry Up!---"}/>

      <div className="p-4 z-0 flex relative justify-between gap-4 bg-content1 overflow-auto rounded-large shadow-small w-full items-center">
        <h1 className="text-xl font-medium">TOTAL ITEMS: {4}</h1>
      </div>
      <Table className="tableBgTag" aria-label="Example table with custom cells">
        <TableHeader>
        <TableColumn>INDEX</TableColumn>
        <TableColumn>USER EMAIL</TableColumn>
        <TableColumn>PHONE NUMBER</TableColumn>
        <TableColumn>NOOKING DATE</TableColumn>
        <TableColumn>BOOKING TIME</TableColumn>
        <TableColumn>ACTIVITY</TableColumn>
        <TableColumn>ACTION</TableColumn>
        </TableHeader>
        <TableBody emptyContent={"No rows to display."}>
        {[1,2,3,4].map((item, index) => (<TableRow key={index}>
            <TableCell>{++index}</TableCell>
            <TableCell>{"email@gmail.com"}</TableCell>
            <TableCell>{"0185000000"}</TableCell>
            <TableCell>{"0+/11/06"}</TableCell>
            <TableCell>{"10:50"}</TableCell>
            <TableCell>{"Pending"}</TableCell>
            <TableCell>
            <Tooltip content="Delete">
            <Button onClick={() => handleDelete(item)} variant="faded" isIconOnly aria-label="Delete Cart item">
            <GoCheckCircleFill size={35} color={"#287855"}/>
            </Button>
            </Tooltip>
            </TableCell>
          </TableRow>)
          )}
        </TableBody>
      </Table>

      </div>
    </div>
  )
}

export default ManageBookings
