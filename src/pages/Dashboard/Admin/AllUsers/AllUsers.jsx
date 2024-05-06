import { Helmet } from "react-helmet-async"
import {Table, TableHeader, Button, Tooltip, TableColumn, TableBody, TableRow, TableCell, User, Chip} from "@nextui-org/react";
import { FaTrashCan } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { FaUsers, FaUser } from "react-icons/fa6";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const {data: users = [], refetch} = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
        const res = await axiosSecure.get("/users");
        return res.data;
    }
  })
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
        axiosSecure.delete(`/users/${id}`)
        .then(res => {
          if(res.data.deletedCount > 0){
            refetch();
            Swal.fire({
              icon: "success",
              title: "User Deleted Successed.",
              showConfirmButton: false,
              timer: 1500
            });
          }
        }) 
      }
    });
  }
  const handlemakeAdmin = user => {
    console.log("🚀 ~ handlemakeAdmin ~ user:", user)
    const isAdmin = user?.isAdmin;
    axiosSecure.patch(`/users/admin/${user._id}`, {isAdmin})
    .then(res => {
      console.log(res.data)
      if(res.data.modifiedCount > 0){
        refetch()
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${user.userName} is an Admmin Now!`,
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }
  return (
    <div>
      <Helmet title='My Cart | Bistro Boss'/>
      <div className="mx-16 space-y-4">
      <SectionTitle heading={"MANAGE ALL USERS"} subHeading={"---How many??---"}/>

      <div className="p-4 z-0 flex relative justify-between gap-4 bg-content1 overflow-auto rounded-large shadow-small w-full items-center">
        <h1 className="text-xl font-medium">TOTAL USERS:</h1>
        <Button className="bg-[#D1A054] text-white" variant="shadow">
        {users.length}
        </Button>
      </div>
      <Table aria-label="Example table with custom cells">
        <TableHeader>
        <TableColumn>SIRIAL NUM</TableColumn>
        <TableColumn>USER</TableColumn>
        <TableColumn>ROLE</TableColumn>
        <TableColumn>STATUS</TableColumn>
        <TableColumn>ACTION</TableColumn>
        </TableHeader>
        <TableBody emptyContent={"No rows to display."}>
        {users.map((user, index) => (<TableRow key={user._id}>
            <TableCell>{++index}</TableCell>
            <TableCell>
              <User 
              avatarProps={{radius: "lg", src: user?.userPic}} 
              description={user?.userEmail} 
              name={user?.userName} >
              {user?.email}
              </User>
            </TableCell>
            <TableCell>
             <div className="flex flex-col">
              <p className="text-bold text-sm capitalize">{user.isAdmin ? "Admin" : "User"}</p>
             </div>
            </TableCell>
            <TableCell>
              <Chip className="capitalize" color={"active"} size="sm" variant="flat">
              active
              </Chip>
            </TableCell>
            <TableCell>
              <div className="relative flex items-center gap-2">
                <Tooltip content="Update">
                  <Button onClick={() => handlemakeAdmin(user)} isIconOnly aria-label="Manage Admin"
                  className="bg-gradient-to-tr from-[#D1A054] to-[#D1A054] text-white shadow-lg">
                    {user.isAdmin ? <FaUsers size={18}/> : <FaUser size={18}/>}
                  </Button>
                </Tooltip>
                <Tooltip content="Delete">
                  <Button onClick={() => handleDelete(user._id)} isIconOnly aria-label="Manage Admin"
                  className="bg-gradient-to-tr from-[#CC2C2C] to-[#CC2C2C] text-white shadow-lg">
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

export default AllUsers
