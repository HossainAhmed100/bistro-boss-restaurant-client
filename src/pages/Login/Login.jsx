import { Button, Card, CardBody, Image, Input } from "@nextui-org/react";
import LoginImg from "../../assets/others/authentication2.png";
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from "react-simple-captcha";
import { useContext, useEffect, useRef, useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGithub, FaGoogle, FaFacebookF  } from "react-icons/fa";
import { Link } from "react-router-dom";


const Login = () => {
  const captchaRef = useRef(null);
  // const { loginUser } = useContext(AuthContext);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const toggleVisibility = () => setIsVisible(!isVisible);
  useEffect(() => {
    loadCaptchaEnginge(3); 
  }, [])

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
  }

  const handleVelidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    console.log("🚀 ~ handleVelidateCaptcha ~ user_captcha_value:", user_captcha_value)
    if(validateCaptcha(user_captcha_value)){
      setIsSubmitDisabled(false)
    }else{
      setIsSubmitDisabled(true)
    }
  }

  return (
    <section className="">
      <div className="flex items-center justify-center min-h-screen">
        <div className='md:flex justify-center items-center'>
          <div>
            <Image width={"100%"} src={LoginImg} alt="NextUI Album Cover" />
          </div>
          <div>
            <Card className="w-[350px] shadow px-4">
            <CardBody>
              <form onSubmit={handleLogin} className="flex min-w-full flex-col mb-6 md:mb-0 gap-4">
              <h3 className="text-center font-bold text-xl">Login</h3>
              <Input 
                name="email"
                variant="bordered" 
                radius="sm" 
                type="email" 
                label="Email" 
                placeholder="Type Your Email" 
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
              <LoadCanvasTemplate />	
              <Input 
              name="captcha" 
              variant="bordered" 
              type="text" 
              placeholder="Enter The Captcha" 
              className="w-full"
              ref={captchaRef}
              />
              <Button onClick={() => handleVelidateCaptcha()} size="sm" color="default">Velidate Captcha</Button>
              <Button isDisabled={isSubmitDisabled} type="submit" color="primary">Sign in</Button>
              </form> 
              <div className="flex flex-col items-center justify-center space-y-2 my-6">
              <div className="flex items-center justify-center gap-2">
                <p className="text-gray-700">New here?</p> 
                <Link className="text-gray-700 font-semibold" to="/signup">Create a New Account</Link>
              </div>
              <p className="text-normal text-gray-700 pb-2">Or sign in with</p>
              <div className="flex items-center justify-center gap-4">
              <Button isIconOnly color="default" variant="faded" aria-label="Take a photo"><FaFacebookF /></Button>
              <Button isIconOnly color="default" variant="faded" aria-label="Take a photo"><FaGoogle /></Button>
              <Button isIconOnly color="default" variant="faded" aria-label="Take a photo"><FaGithub /></Button>
              </div>
              </div>
            </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login