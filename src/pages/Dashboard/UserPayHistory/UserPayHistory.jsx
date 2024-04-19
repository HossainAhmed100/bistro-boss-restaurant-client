import { Helmet } from "react-helmet-async"
import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import {Table, TableHeader, Button, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import "./UserPayHistory.css"

function UserPayHistory() {
  return (
    <div>
      <Helmet title='My Cart | Bistro Boss'/>
      <div className="mx-16 space-y-4">
      <SectionTitle heading={"PAYMENT HISTORY"} subHeading={"---Get Your PAY History---"}/>

      <div className="p-4 z-0 flex relative justify-between gap-4 bg-content1 overflow-auto rounded-large shadow-small w-full items-center">
        <h1 className="text-xl font-medium">TOTAL PAYMENTS :</h1>
        <Button className="bg-[#D1A054] text-white" variant="shadow">
        {56}
        </Button>
      </div>
      <Table className="tableBgTag" aria-label="Example table with custom cells">
        <TableHeader classNames="bg-red-500">
        <TableColumn>EMAIL</TableColumn>
        <TableColumn>CATEGORY</TableColumn>
        <TableColumn>TOTAL PRICE</TableColumn>
        <TableColumn>PAYMENT DATE</TableColumn>
        </TableHeader>
        <TableBody emptyContent={"No rows to display."}>
        {[1, 2, 3, 4].map((item) => (<TableRow key={item}>
            <TableCell>
            <p className="text-base text-gray-500">info@gmail.com</p>
            </TableCell>
            <TableCell>
            <p className="text-base text-gray-500">FOOD ORDER</p>
            </TableCell>
            <TableCell>
            <p className="text-base text-gray-500">$71.5</p>
            </TableCell>
            <TableCell>
            <p className="text-base text-gray-500">Monday, April 10, 2023</p>
            </TableCell>
          </TableRow>)
          )}
        </TableBody>
      </Table>

      </div>
    </div>
  )
}

export default UserPayHistory
