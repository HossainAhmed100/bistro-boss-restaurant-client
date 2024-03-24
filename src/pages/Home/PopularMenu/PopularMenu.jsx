import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import MenuItemCard from "../../Shared/MenuItem/MenuItemCard";
import { Button } from "@nextui-org/react";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popoular = menu.filter(item => item.category === "popular");
  return (
    <section className="my-20">
        <SectionTitle subHeading={"---Check it out---"} heading={"FROM OUR MENU"}/>
        <div className="gap-4 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 mx-6">
            {popoular.map(item => <MenuItemCard key={item._id} item={item}/>)}
        </div>
        <div className="my-10 text-center">
            <Button variant="bordered" color="default">VIEW FULL CATEGORY</Button>
        </div>
    </section>
  )
}

export default PopularMenu
