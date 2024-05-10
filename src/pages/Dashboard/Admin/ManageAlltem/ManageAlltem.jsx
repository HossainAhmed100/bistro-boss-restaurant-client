import { Helmet } from "react-helmet-async"
import SectionTitle from "../../../../components/SectionTitle/SectionTitle"
import {Table, TableHeader, Button, TableColumn, TableBody, TableRow, TableCell, Avatar, Tooltip, Pagination} from "@nextui-org/react";
import { FiEdit } from "react-icons/fi";
import { FaTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useMenu from "../../../../hooks/useMenu";
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

const columns = [
  {
    key: "itemImage",
    label: "ITEM IMAGE",
  },
  {
    key: "itemName",
    label: "ITEM NAME",
  },
  {
    key: "price",
    label: "PRICE",
  },
  {
    key: "actions",
    label: "ACTIONS",
  },
];

const ManageAlltem = () => {
  const [menu, , refetch] = useMenu();
  const axiosSecure = useAxiosSecure();
  const [page, setPage] = useState(1);
  const rowsPerPage = 4;
  const pages = Math.ceil(menu.length / rowsPerPage);
  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return menu.slice(start, end);
  }, [page, menu]);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item?._id}`);
        console.log("🚀 ~ handleDelete ~ res:", res.data)
        if(res.data.deletedCount > 0){
          refetch()
          Swal.fire({
            icon: "success",
            title: "Item Deleted Successully!.",
            showConfirmButton: false,
            timer: 1500
          });
        }
      }
    });
  }
  return (
    <div>
      <Helmet title='Manage All Items | Admin | Bistro Boss'/>
      <div className="mx-16 space-y-4">
      <SectionTitle heading={"MANAGE ALL ITEMS"} subHeading={"---Hurry Up!---"}/>

      <div className="p-4 z-0 flex relative justify-between gap-4 bg-content1 overflow-auto rounded-large shadow-small w-full items-center">
        <h1 className="text-xl font-medium">TOTAL ITEMS: {menu.length > 0 ? menu.length : 0}</h1>
      </div>
      <Table className="tableBgTag" aria-label="Example table with custom cells"
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="secondary"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
      >
        <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={items} emptyContent={"No rows to display."}>
        {(item) => (
          <TableRow key={item._id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey, handleDelete)}</TableCell>}
          </TableRow>
        )}
        </TableBody>
      </Table>

      </div>
    </div>
  )
}

const renderCell = (item, columnKey, handleDelete) => {
  const cellValue = item[columnKey];

  switch (columnKey) {
    case "itemImage":
      return (
        <Avatar isBordered size="lg" radius="sm" src={item?.image} />
      );
    case "itemName":
      return (
        <p>{item?.name}</p>
      );
    case "price":
      return (
        <p>{item?.price}</p>
      );
    case "actions":
      return (
        <div className="relative flex items-center gap-2">
            <Tooltip content="Edit Item">
          <Link to={`/dashboard/updateItems/${item?._id}`}>
              <p aria-label="Delete Cart item"
              className="bg-gradient-to-tr from-[#835D23] to-[#B58130] text-white shadow-lg">
                <FiEdit />
              </p>
          </Link>
            </Tooltip>
          <Tooltip content="Delete">
            <Button onClick={() => handleDelete(item)} isIconOnly aria-label="Delete Cart item" color="danger" >
              <FaTrashCan />
            </Button>
          </Tooltip>
        </div>
      );
    default:
      return cellValue;
  }
}


export default ManageAlltem
