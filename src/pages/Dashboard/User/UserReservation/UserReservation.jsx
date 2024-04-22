import SectionTitle from "../../../../components/SectionTitle/SectionTitle"
import { Input, Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { LuClipboardList } from "react-icons/lu";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { Helmet } from "react-helmet-async";


function UserReservation() {
    const {register,handleSubmit,formState: { errors },} = useForm();
    const onSubmit = (data) => {
        console.log(data)
    };
  return (
    <section>
      <Helmet title='My Resirvation | User'/>
      <div>
        <SectionTitle heading={"BOOK A TABLE"} subHeading={"---Reservation---"}/>
        <div className="lg:px-8 md:px-4 px-2">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center gap-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
          </div>
          <Button endContent={<LuClipboardList />} radius="sm" type="submit" className="bg-gradient-to-tr from-[#835D23] to-[#B58130] text-white shadow-lg">Book A Table</Button>
        </form>
        </div>
        <div className="lg:px-8 md:px-4 px-2">
        <SectionTitle heading={"OUR LOCATION"} subHeading={"---Visit Us---"}/>
        <div className="bg-[#F3F3F3] gap-4 my-10 grid lg:grid-cols-3 grid-col-1 md:grid-cols-2">
        <InfoCard 
        icon={<FaPhoneAlt size={18} color="FFFFFF"/>} 
        title={"PHONE"} 
        description={"+38 (012) 34 56 789"}
        />
        <InfoCard 
        icon={<FaMapMarkerAlt size={18} color="FFFFFF"/>} 
        title={"ADDRESS"} 
        description={"Dhaka, Bangladesh"}
        />
        <InfoCard 
        icon={<FaClock size={18} color="FFFFFF"/>} 
        title={"WORKING HOURS"} 
        description={"8:00 AM - 5:00 PM"}
        />
        </div>
        </div>
      </div>
    </section>
  )
}

const InfoCard = ({icon, title, description}) => {
  return (
    <div className="flex flex-col items-center justify-center">
    <div className="bg-[#D1A054] w-full h-16 items-center justify-center flex">{icon}</div>
    <div className="h-full w-full flex flex-col items-center justify-center gap-2 py-8">
      <h1 className="text-md font-semibold">{title}</h1>
      <p className="text-base text-gray-500">{description}</p>
    </div>
  </div>
  )
}

export default UserReservation
