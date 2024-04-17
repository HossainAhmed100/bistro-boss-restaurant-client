import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import { Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";

function UserReservation() {
    const {register,handleSubmit,formState: { errors },} = useForm();
    const onSubmit = (data) => {
        console.log(data)
    };
  return (
    <section>
      <div>
        <SectionTitle heading={"BOOK A TABLE"} subHeading={"---Reservation---"}/>
        <div className="px-8">
        <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input 
            size="lg"
            radius="sm" 
            type="email" 
            name="email"
            label="Date *" 
            variant="bordered" 
            labelPlacement="outside" 
            placeholder="Type Your Email" 
            {...register("email", { required: true })}
            isInvalid={errors.email ? "true" : "false"}
            color={errors.email ? "danger" : "default"}
            errorMessage={errors.email && "Please enter your email"}
          />
          <Input 
            size="lg"
            radius="sm" 
            type="email" 
            name="email"
            label="Email" 
            variant="bordered" 
            labelPlacement="outside" 
            placeholder="Type Your Email" 
            {...register("email", { required: true })}
            isInvalid={errors.email ? "true" : "false"}
            color={errors.email ? "danger" : "default"}
            errorMessage={errors.email && "Please enter your email"}
          />
          <Input 
            size="lg"
            radius="sm" 
            type="email" 
            name="email"
            label="Email" 
            variant="bordered" 
            labelPlacement="outside" 
            placeholder="Type Your Email" 
            {...register("email", { required: true })}
            isInvalid={errors.email ? "true" : "false"}
            color={errors.email ? "danger" : "default"}
            errorMessage={errors.email && "Please enter your email"}
          />
        </form>
        </div>
      </div>
    </section>
  )
}

export default UserReservation
