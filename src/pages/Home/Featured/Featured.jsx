import FeaturedImg from "../../../assets/home/featured.jpg";
import { Button, Divider, Image } from '@nextui-org/react';
import './Featured.css';

const Featured = () => {
  return (
    <section className='featured-item'>
        <div className='py-14 relative'>
        <div className="z-50">
        <div className="max-w-sm text-center mx-auto my-10">
        <p className="text-orange-400 text-lg z-50">---Check it out---</p>
        <Divider className="my-4 h-1 bg-white"/>
        <h3 className="text-3xl font-medium uppercase text-white">FROM OUR MENU</h3>
        <Divider className="my-4 h-1 bg-white"/>
        </div>
        </div>
            <div className='md:flex justify-center items-center pb-10 px-36'>
                <div>
                  <Image isBlurred radius="node" width={"100%"} src={FeaturedImg} alt="NextUI Album Cover" classNames="m-5" />
                </div>
                <div className='md:ml-10 z-10'>
                    <p className='text-white text-xl'>March 20, 2023</p>
                    <p className='uppercase text-white text-xl'>WHERE CAN I GET SOME?</p>
                    <p className='text-white text-sm font-light tracking-wide mb-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. 
                    Eaque repellat recusandae ad laudantium tempore 
                    consequatur consequuntur omnis ullam maxime tenetur.
                    </p>
                    <Button color="warning">Read more</Button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Featured
