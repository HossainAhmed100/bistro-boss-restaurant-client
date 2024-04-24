import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { Input, Button, Textarea } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { ImSpoonKnife } from "react-icons/im";

function AddItem() {
    const {register,handleSubmit,formState: { errors },} = useForm();
    const onSubmit = (data) => {
        console.log(data)
    };
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
            {...register("email", { required: true })}
            isInvalid={errors.recipeName ? "true" : "false"}
            color={errors.recipeName ? "danger" : "default"}
            errorMessage={errors.recipeName && "Recipe name Please!"}
          />
         <div className="flex items-center lg:justify-between w-full gap-4">
         <Input 
            isRequired
            radius="sm" 
            type="text" 
            name="category"
            label="Category" 
            className="w-full"
            variant="bordered" 
            labelPlacement="outside" 
            placeholder="Category" 
            {...register("email", { required: true })}
            classNames={{inputWrapper: ["bg-white"]}}
            isInvalid={errors.category ? "true" : "false"}
            color={errors.category ? "danger" : "default"}
            errorMessage={errors.category && "Do you have any suggestion for us?"}
          />
         <Input 
            isRequired
            radius="sm" 
            type="number" 
            name="suggestion"
            label="Price" 
            className="w-full"
            variant="bordered" 
            labelPlacement="outside" 
            placeholder="0" 
            {...register("email", { required: true })}
            classNames={{inputWrapper: ["bg-white"]}}
            isInvalid={errors.suggestion ? "true" : "false"}
            color={errors.suggestion ? "danger" : "default"}
            errorMessage={errors.suggestion && "Do you have any suggestion for us?"}
          />
         </div>
          <Textarea
            isRequired
            label="Recipe Details"
            labelPlacement="outside"
            placeholder="Recipe Details"
            className="w-full"
            variant="bordered" 
            classNames={{inputWrapper: ["bg-white"]}}
            isInvalid={errors.review ? "true" : "false"}
            color={errors.review ? "danger" : "default"}
            errorMessage={errors.review && "Kindly express your care in a short way."}
          />
          <Input 
            isRequired
            radius="sm" 
            type="file" 
            name="recipeName"
            label="Recipe name" 
            labelPlacement="outside" 
            placeholder="Recipe name" 
            classNames={{inputWrapper: ["bg-white"]}}
            {...register("email", { required: true })}
            isInvalid={errors.recipeName ? "true" : "false"}
            color={errors.recipeName ? "danger" : "default"}
            errorMessage={errors.recipeName && "Recipe name Please!"}
          />
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
