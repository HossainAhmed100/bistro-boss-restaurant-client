import Banner from "../Banner/Banner"
import BistroBossBanner from "../BistroBossBanner/BistroBossBanner"
import CallUsBanner from "../CallUsBanner/CallUsBanner"
import Category from "../Category/Category"
import ChefRecommends from "../ChefRecommends/ChefRecommends"
import Featured from "../Featured/Featured"
import PopularMenu from "../PopularMenu/PopularMenu"
import Testimonials from "../Testimonials/Testimonials"

function Home() {
  return (
    <div>
      <Banner />
      <Category />
      <BistroBossBanner />
      <PopularMenu />
      <CallUsBanner />
      <ChefRecommends />
      <Featured />
      <Testimonials />
    </div>
  )
}

export default Home
