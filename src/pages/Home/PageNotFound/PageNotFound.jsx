import ErrorImg from "../../../assets/404.gif";
import { Button, Image } from "@nextui-org/react";
import { TiHome } from "react-icons/ti";

function PageNotFound() {
  return (
    <section className="min-h-screen">
        <div className="flex h-full flex-col items-center justify-center gap-4">
        <Image
          width={800}
          alt="404 Image"
          src={ErrorImg}
        />
        
        <Button endContent={<TiHome />} 
          radius="sm" type="submit" 
          className="bg-gradient-to-tr from-[#835D23] to-[#B58130] text-white shadow-lg">
            Back to Home
          </Button>
        </div>
    </section>
  )
}

export default PageNotFound
