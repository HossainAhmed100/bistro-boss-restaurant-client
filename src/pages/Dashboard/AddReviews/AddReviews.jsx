import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


function AddReviews() {
  return (
    <section>
      <Helmet title='Give Reviews | User'/>
      <SectionTitle heading={"GIVE A REVIEW..."} subHeading={"---Sharing is Caring!!!---"}/>

    </section>
  )
}

export default AddReviews
