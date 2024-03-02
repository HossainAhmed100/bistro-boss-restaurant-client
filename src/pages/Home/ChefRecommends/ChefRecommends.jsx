import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import {Button, Card, CardBody, Image} from "@nextui-org/react";

const ChefRecommends = () => {
    const list = [
        {
          name: "Fish Parmentier",
          recipe: "Sautéed breaded veal escalope with watercress, lemon and veal jus.",
          image: "https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-3-370x247.jpg",
        },
        {
          name: "Fish Parmentier",
          recipe: "Sautéed breaded veal escalope with watercress, lemon and veal jus.",
          image: "https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-8-370x247.jpg",
        },
        {
          name: "Chicken and Walnut Salad",
          recipe: "Pan roasted pork belly with gratin potato, braised Savoy cabbage, apples, thyme and calvados jus",
          image: "https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-3-370x247.jpg",
        },
        {
          name: "Roasted Pork Belly",
          recipe: "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
          image: "https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-8-370x247.jpg",
        },
      ];
  return (
    <section className="my-24">
        <SectionTitle heading={"CHEF RECOMMENDS"} subHeading={"---Should Try---"}/>
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {list.map((item, index) => (
            <Card shadow="sm" key={index}>
            <CardBody className="overflow-visible p-0">
                <Image shadow="sm" radius="lg" width="100%" lt={item.name} 
                className="w-full object-cover h-[200px]" src={item.image} />
            </CardBody>
            <div className="p-6 text-center">
                <b className="text-lg font-semibold">{item.name}</b>
                <p className="text-default-500 text-sm line-clamp-2 mt-2 mb-6">{item.recipe}</p>
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
