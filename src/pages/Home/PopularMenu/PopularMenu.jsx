import { useEffect, useState } from "react"
import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import MenuItemCard from "../../Shared/MenuItem/MenuItemCard";

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
    <section className="mb-12">
        <SectionTitle subHeading={"---Check it out---"} heading={"FROM OUR MENU"}/>
        <div className="grid grid-cols-2 gap-4">
            {menu.map(item => <MenuItemCard key={item._id} item={item}/>)}
        </div>
    </section>
  )
}

export default PopularMenu
