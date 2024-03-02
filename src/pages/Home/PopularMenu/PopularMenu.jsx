import { useEffect, useState } from "react"
import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import MenuItemCard from "../../Shared/MenuItem/MenuItemCard";
import { Button } from "@nextui-org/react";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch("menu.json")
        .then(res => res.json())
        .then(data => {
            const popular = data.filter(item => item.category === "popular");
            setMenu(popular)
        })
    }, [])
  return (
    <section className="my-20">
        <SectionTitle subHeading={"---Check it out---"} heading={"FROM OUR MENU"}/>
        <div className="grid grid-cols-2 gap-4">
            {menu.map(item => <MenuItemCard key={item._id} item={item}/>)}
        </div>
        <div className="my-10 text-center">
            <Button variant="bordered" color="default">VIEW FULL CATEGORY</Button>
        </div>
    </section>
  )
}

export default PopularMenu
