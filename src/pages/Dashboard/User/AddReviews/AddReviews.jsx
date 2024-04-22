import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { Input, Button, Textarea } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { FaRocket } from "react-icons/fa";


function AddReviews() {
  const {register,handleSubmit,formState: { errors },} = useForm();
    const onSubmit = (data) => {
        console.log(data)
    };
  return (
    <section className="lg:mx-16 md:mx-8 mx-4">
      <Helmet title='Give Reviews | User'/>
      <SectionTitle heading={"GIVE A REVIEW..."} subHeading={"---Sharing is Caring!!!---"}/>
      <div className="bg-gray-100 rounded p-12">
        <div className="items-center flex justify-center py-2">
        <h1 className="text-2xl font-semibold cinzelFont">RATE US!</h1>
        </div>
        <div>
         <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start justify-start gap-4">
         <Input 
            isRequired
            radius="sm" 
            type="text" 
            name="recipe"
            label="Which recipe you liked most?" 
            className="w-full"
            variant="bordered" 
            labelPlacement="outside" 
            placeholder="Recipe you liked most" 
            {...register("email", { required: true })}
            isInvalid={errors.recipe ? "true" : "false"}
            color={errors.recipe ? "danger" : "default"}
            errorMessage={errors.recipe && "Recipe you liked most"}
          />
         <Input 
            isRequired
            radius="sm" 
            type="text" 
            name="suggestion"
            label="Do you have any suggestion for us?" 
            className="w-full"
            variant="bordered" 
            labelPlacement="outside" 
            placeholder="Sugggestion" 
            {...register("email", { required: true })}
            isInvalid={errors.suggestion ? "true" : "false"}
            color={errors.suggestion ? "danger" : "default"}
            errorMessage={errors.suggestion && "Do you have any suggestion for us?"}
          />
          <Textarea
            isRequired
            label="Kindly express your care in a short way."
            labelPlacement="outside"
            placeholder="Review in detail"
            className="w-full"
            variant="bordered" 
            isInvalid={errors.review ? "true" : "false"}
            color={errors.review ? "danger" : "default"}
            errorMessage={errors.review && "Kindly express your care in a short way."}
          />
          <Button endContent={<FaRocket />} 
          radius="sm" type="submit" 
          className="bg-gradient-to-tr from-[#835D23] to-[#B58130] text-white shadow-lg">
            Send Review
          </Button>
         </form>
        </div>
      </div>
    </section>
  )
}

export default AddReviews
