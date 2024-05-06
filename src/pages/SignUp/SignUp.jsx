import { useContext, useState } from "react";
import { Button, Card, CardBody, Image, Input } from "@nextui-org/react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGithub, FaGoogle, FaFacebookF  } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import LoginImg from "../../assets/others/authentication2.png";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import Swal from 'sweetalert2';
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const {register, handleSubmit, reset, formState: { errors },} = useForm();
  const { createUser, updateUserProfile, googleSignIn } = useContext(AuthContext);
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const navigate = useNavigate();

  const handelGoogleSignIn = () => {
    googleSignIn()
    .then(result => {
      console.log(result.user)
      axiosPublic.post("/users", {
        isAdmin: false,
        userName: result?.user?.displayName,
        userEmail: result?.user?.email,
        userPic: result?.user?.photoURL,
      })
      .then(res => {
        console.log(res.data)
        if(res.data.insertedId){
          reset()
          Swal.fire({
            icon: "success",
            title: "User Created successfully.",
            showConfirmButton: false,
            timer: 1500
          });
          navigate("/")
        }else{
          Swal.fire({
            icon: "error",
            title: "This Email Alredy Exist",
            showConfirmButton: false,
            timer: 1500
          });
          navigate("/")
        }
      })
    })
  }

  const onSubmit = (data) => {
    createUser(data.email, data.password)
    .then(result => {
      const loginuser = result.user;
      console.log(loginuser)
      updateUserProfile(data.name, data.photoUrl)
      .then(() => {
        console.log("User Profile Update")
        axiosPublic.post("/users", {
          role: "user",
          userName: data.name,
          userEmail: data.email,
          userPic: data.photoUrl,
        })
        .then(res => {
          if(res.data.insertedId){
            reset()
            Swal.fire({
              icon: "success",
              title: "User Created successfully.",
              showConfirmButton: false,
              timer: 1500
            });
          }
        })
      }).catch((error) => {
        console.log("User Profile Update ERROR")
        console.log(error)
      });
      navigate("/")
    })
  };

  return (
    <section className="">
      <Helmet title='SignUp Noew | BistroBoss'/>
      <div className="flex items-center justify-center min-h-screen">
        <div className='md:flex justify-center items-center'>
          <div>
            <Card className="w-[350px] shadow px-4">
            <CardBody>
              <form onSubmit={handleSubmit(onSubmit)} className="flex min-w-full flex-col mb-6 md:mb-0 gap-4">
              <h3 className="text-center font-bold text-xl">Sign Up</h3>
              <Input 
                name="name"
                variant="bordered" 
                radius="sm" 
                type="text" 
                label="Name" 
                placeholder="Type your name" 
                labelPlacement="outside" 
                className="w-full"
                {...register("name", { required: true })}
                isInvalid={errors.name ? "true" : "false"}
                color={errors.name ? "danger" : "default"}
                errorMessage={errors.name && "Please enter your name"}
              />
              <Input 
                name="photoUrl"
                variant="bordered" 
                radius="sm" 
                type="text" 
                label="Profile Pic Url" 
                placeholder="Type your Profile Pic Url" 
                labelPlacement="outside" 
                className="w-full"
                defaultValue="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                {...register("photoUrl", { required: true })}
                isInvalid={errors.photoUrl ? "true" : "false"}
                color={errors.photoUrl ? "danger" : "default"}
                errorMessage={errors.photoUrl && "Please enter your name"}
              />
              <Input 
                name="email"
                variant="bordered" 
                radius="sm" 
                type="email" 
                label="Email" 
                placeholder="Type your name"
                labelPlacement="outside" 
                className="w-full"
                {...register("email", { required: true })}
                isInvalid={errors.email ? "true" : "false"}
                color={errors.email ? "danger" : "default"}
                errorMessage={errors.email && "Please enter your email"}
              />
              <Input
                name="password"
                label="Password"
                labelPlacement="outside"
                variant="bordered"
                placeholder="Enter your password"
                endContent={
                  <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                    {isVisible ? (
                      <HiEye />
                    ) : (
                      <HiEyeOff />
                    )}
                  </button>
                }
                type={isVisible ? "text" : "password"}
                className="w-full"
                {...register("password", { required: true })}
                isInvalid={errors.password ? "true" : "false"}
                color={errors.password ? "danger" : "default"}
                errorMessage={errors.password && "Please enter new password"}
              />
              <Button type="submit" color="primary">Sign Up</Button>
              </form> 
              <div className="flex flex-col items-center justify-center space-y-2 my-6">
              <div className="flex items-center justify-center gap-2">
                <p className="text-gray-700">Already registered?</p> 
                <Link className="text-gray-700 font-semibold" to="/login">Go to log in</Link>
              </div>
              <p className="text-normal text-gray-700 pb-2">Or sign up with</p>
              <div className="flex items-center justify-center gap-4">
              <Button isIconOnly color="default" variant="faded" aria-label="Take a photo"><FaFacebookF /></Button>
              <Button onClick={handelGoogleSignIn} isIconOnly color="default" variant="faded" aria-label="Take a photo"><FaGoogle /></Button>
              <Button isIconOnly color="default" variant="faded" aria-label="Take a photo"><FaGithub /></Button>
              </div>
              </div>
            </CardBody>
            </Card>
          </div>
          <div>
            <Image width={"100%"} src={LoginImg} alt="NextUI Album Cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp
