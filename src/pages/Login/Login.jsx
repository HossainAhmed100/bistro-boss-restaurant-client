import { Button, Image, Input } from "@nextui-org/react";
import LoginImg from "../../assets/others/authentication2.png";


const Login = () => {
  return (
    <section className="">
      <div className="flex items-center justify-center min-h-screen">
        <div className='md:flex justify-center items-center'>
          <div>
            <Image width={"100%"} src={LoginImg} alt="NextUI Album Cover" />
          </div>
          <div>
            <div className="px-10 min-w-full">
              <div className="flex min-w-full flex-col mb-6 md:mb-0 gap-4">
                <h3 className="text-center font-bold text-xl">Login</h3>
              <Input variant="bordered" radius="sm" type="email" label="Email" placeholder="Type Your Email" labelPlacement="outside" className="w-80"/>
              <Input variant="bordered" radius="sm" type="url" label="Website" placeholder="nextui.org" labelPlacement="outside" />
              <Input variant="bordered" radius="sm" type="url" label="Website" placeholder="nextui.org" labelPlacement="outside" />
              <Input variant="bordered" radius="sm" type="url" label="Website" placeholder="nextui.org" labelPlacement="outside" />
              <Button color="primary">Sign in</Button>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login