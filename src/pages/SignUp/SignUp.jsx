import { useState } from "react";
import { Button, Card, CardBody, Image, Input } from "@nextui-org/react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGithub, FaGoogle, FaFacebookF  } from "react-icons/fa";
import { Link } from "react-router-dom";
import LoginImg from "../../assets/others/authentication2.png";


const SignUp = () => {
  // const { loginUser } = useContext(AuthContext);
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const createUser = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password)
  }



  return (
    <section className="">
      <div className="flex items-center justify-center min-h-screen">
        <div className='md:flex justify-center items-center'>
          <div>
            <Card className="w-[350px] shadow px-4">
            <CardBody>
              <form onSubmit={createUser} className="flex min-w-full flex-col mb-6 md:mb-0 gap-4">
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
              />
              <Input
                label="Password"
                labelPlacement="outside"
                variant="bordered"
                placeholder="Enter your password"
                endContent={
                  <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                    {isVisible ? (
                      <HiEyeOff />
                    ) : (
                      <HiEye />
                    )}
                  </button>
                }
                type={isVisible ? "text" : "password"}
                className="w-full"
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
              <Button isIconOnly color="default" variant="faded" aria-label="Take a photo"><FaGoogle /></Button>
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
