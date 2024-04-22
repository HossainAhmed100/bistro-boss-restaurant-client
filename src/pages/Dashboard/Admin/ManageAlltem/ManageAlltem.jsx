import { Helmet } from "react-helmet-async"
import SectionTitle from "../../../../components/SectionTitle/SectionTitle"
import {Table, TableHeader, Button, TableColumn, TableBody, TableRow, TableCell, Avatar, Tooltip} from "@nextui-org/react";
import { FiEdit } from "react-icons/fi";
import { FaTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageAlltem = () => {
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
      <Helmet title='My Cart | Bistro Boss'/>
      <div className="mx-16 space-y-4">
      <SectionTitle heading={"MANAGE ALL ITEMS"} subHeading={"---Hurry Up!---"}/>

      <div className="p-4 z-0 flex relative justify-between gap-4 bg-content1 overflow-auto rounded-large shadow-small w-full items-center">
        <h1 className="text-xl font-medium">TOTAL ITEMS: {4}</h1>
      </div>
      <Table className="tableBgTag" aria-label="Example table with custom cells">
        <TableHeader>
        <TableColumn>TAG</TableColumn>
        <TableColumn>ITEM IMAGE</TableColumn>
        <TableColumn>ITEM NAME</TableColumn>
        <TableColumn>PRICE</TableColumn>
        <TableColumn>ACTIONS</TableColumn>
        </TableHeader>
        <TableBody emptyContent={"No rows to display."}>
        {[1,2,3,4].map((item, index) => (<TableRow key={index}>
            <TableCell>{++index}</TableCell>
            <TableCell>
              <Avatar isBordered size="lg" radius="sm"
              src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
              />
            </TableCell>
            <TableCell>{"Roast Duck Breast"}</TableCell>
            <TableCell>${14.5}</TableCell>
            <TableCell>
            <div className="relative flex items-center gap-2">
              <Link to={`/dashboard/updateItems/${item}`}>
            <Tooltip content="Edit Item">
            <Button isIconOnly aria-label="Delete Cart item"
            className="bg-gradient-to-tr from-[#835D23] to-[#B58130] text-white shadow-lg">
            <FiEdit />
            </Button>
            </Tooltip>
            </Link>
            <Tooltip content="Delete">
            <Button onClick={() => handleDelete(item)} isIconOnly aria-label="Delete Cart item" color="danger" >
            <FaTrashCan />
            </Button>
            </Tooltip>
            </div>
            </TableCell>
          </TableRow>)
          )}
        </TableBody>
      </Table>

      </div>
    </div>
  )
}

export default ManageAlltem
