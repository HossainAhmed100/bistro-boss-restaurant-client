import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import {Button, Card, CardBody, Image} from "@nextui-org/react";

const ChefRecommends = () => {
    const list = [
        {
          name: "Fish Parmentier",
          recipe: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
          image: "https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-8-370x247.jpg",
        },
        {
          name: "Chicken and Walnut Salad",
          recipe: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
          image: "https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-3-370x247.jpg",
        },
        {
          name: "Roasted Pork Belly",
          recipe: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
          image: "https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-8-370x247.jpg",
        },
      ];
  return (
    <section className="my-24">
        <SectionTitle heading={"CHEF RECOMMENDS"} subHeading={"---Should Try---"}/>
        <div className="gap-10 grid grid-cols-2 sm:grid-cols-3">
        {list.map((item, index) => (
            <Card radius="none" shadow="sm" key={index}>
            <CardBody className="overflow-visible p-0">
                <Image shadow="sm" radius="none" width="100%" lt={item.name} 
                className="w-full object-cover h-[250px]" src={item.image} />
            </CardBody>
            <div className="p-6 text-center m-auto">
                <b className="text-lg font-semibold">{item.name}</b>
                <p className="text-default-500 text-sm line-clamp-2 mt-2 mb-6 w-80">{item.recipe}</p>
                <Button size="md" color="warning" variant="shadow">
                    ADD TO CART
                </Button> 
            </div>
            </Card>
        ))}
        </div>
    </section>
  )
}

export default ChefRecommends
