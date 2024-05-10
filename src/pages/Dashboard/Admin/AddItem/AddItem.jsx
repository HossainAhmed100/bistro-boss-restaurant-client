import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { Input, Button, Textarea, Select, SelectItem } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { ImSpoonKnife } from "react-icons/im";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key =  import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

function AddItem() {
    const {register,handleSubmit,formState: { errors }, reset} = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = {image: data.recipePhoto[0]};
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
          headers: {'content-type': 'multipart/form-data',}
        })
        if(res.data.success){
          // now send the menu item data to server with image
          const menuItem = {
            name: data.recipeName,
            recipe: data.recipeDetails,
            image: res.data.data.display_url,
            category: data.recipeCategory,
            price: parseFloat(data.recipePrice),
          };
          const menuRes = await axiosSecure.post("/menu", menuItem);
          console.log(menuRes.data)
          if(menuRes.data.insertedId){
            // show success popup
            reset()
            Swal.fire({
              icon: "success",
              title: `${data.recipeName} is Added Successfully.`,
              showConfirmButton: false,
              timer: 1500
            });
          }
        }
        console.log(res.data)
    };
    const categoryItem = [
      {label: "Salad", value: "salad"},
      {label: "Pizza", value: "pizza"},
      {label: "Drinks", value: "drinks"},
      {label: "Desserts", value: "desserts"},
      {label: "Offered", value: "offered"},
    ]
  return (
    <section className="lg:mx-16 md:mx-8 mx-4">
      <Helmet title='Give Reviews | User'/>
      <SectionTitle heading={"ADD AN ITEM"} subHeading={"---What's new?---"}/>
      <div className="bg-gray-100 rounded p-12">
        <div>
         <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start justify-start gap-6">
         <Input 
            isRequired
            radius="sm" 
            type="text" 
            name="recipeName"
            label="Recipe name" 
            className="w-full"
            variant="bordered" 
            labelPlacement="outside" 
            placeholder="Recipe name" 
            classNames={{inputWrapper: ["bg-white"]}}
            {...register("recipeName", { required: true })}
            isInvalid={errors.recipeName ? true : false}
            color={errors.recipeName ? "danger" : "default"}
            errorMessage={errors.recipeName && "Recipe name Please!"}
          />
         <div className="flex items-center lg:justify-between w-full gap-4">
          <Select isRequired {...register("recipeCategory", { required: true })}
            size="md"
            radius="sm"
            variant="bordered" 
            labelPlacement="outside" 
            classNames={{ trigger: "bg-white",}}
            isInvalid={errors.recipeCategory ? true : false}
            color={errors.recipeCategory ? "danger" : "default"}
            errorMessage={errors.recipeCategory && "Do you have any suggestion for us?"}
            label="Category">
            {categoryItem.map((category) => (
              <SelectItem key={category.value} value={category.value}>
                {category.label}
              </SelectItem>
            ))}
          </Select>
         <Input 
            isRequired
            radius="sm" 
            type="number" 
            name="recipePrice"
            label="Price" 
            className="w-full"
            variant="bordered" 
            labelPlacement="outside" 
            placeholder="0" 
            {...register("recipePrice", { required: true })}
            classNames={{inputWrapper: ["bg-white"]}}
            isInvalid={errors.recipePrice ? true : false}
            color={errors.recipePrice ? "danger" : "default"}
            errorMessage={errors.recipePrice && "Do you have any suggestion for us?"}
          />
         </div>
          <Textarea
            isRequired
            label="Recipe Details"
            labelPlacement="outside"
            placeholder="Recipe Details"
            className="w-full"
            variant="bordered"
            {...register("recipeDetails", { required: true })}
            classNames={{inputWrapper: ["bg-white"]}}
            isInvalid={errors.recipeDetails ? true : false}
            color={errors.recipeDetails ? "danger" : "default"}
            errorMessage={errors.recipeDetails && "Recipe Details."}
          />
          <div className="w-full">
          <p className="text-sm text-gray-800 mb-1">Recipe Photo <span>*</span></p>
          <input type="file" {...register("recipePhoto")}
          className="block w-full bg-white shadow-sm border-2 
            border-gray-200 p-3 rounded-lg 
            text-sm text-gray-500
            file:me-4 file:py-2 file:px-4
            file:rounded-lg file:border-0
            file:text-sm
            file:bg-gradient-to-tr from-gray-300 to-gray-200 file:text-gray-800
            hover:file:opacity-90
            file:disabled:opacity-50 file:disabled:pointer-events-none
            dark:text-neutral-500
            dark:file:bg-blue-500
            dark:hover:file:bg-blue-400
          "/>
          </div>
          <Button endContent={<ImSpoonKnife />} 
          radius="sm" type="submit" 
          className="bg-gradient-to-tr from-[#835D23] to-[#B58130] text-white shadow-lg">
            Add Item
          </Button>
         </form>
        </div>
      </div>
    </section>
  )
}

export default AddItem
