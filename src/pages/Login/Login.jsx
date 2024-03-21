import { Button, Image, Input } from "@nextui-org/react";
import LoginImg from "../../assets/others/authentication2.png";
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from "react-simple-captcha";
import { useEffect, useRef, useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

const Login = () => {
  const captchaRef = useRef(null);
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
            <div className="px-10 min-w-full">
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
                className="w-80"
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
                className="max-w-xs"
              />
              <LoadCanvasTemplate />	
              <Input 
              name="captcha" 
              variant="bordered" 
              type="text" 
              placeholder="Enter The Captcha" 
              className="w-80"
              ref={captchaRef}
              />
              <Button onClick={() => handleVelidateCaptcha()} size="sm" color="default">Velidate Captcha</Button>
              <Button isDisabled={isSubmitDisabled} type="submit" color="primary">Sign in</Button>
              </form> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login