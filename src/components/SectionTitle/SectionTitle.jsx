import {Divider} from "@nextui-org/react";

const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className="max-w-sm text-center mx-auto my-10">
      <p className="text-orange-400 text-lg">{subHeading}</p>
      <Divider className="my-4 h-1" />
      <h3 className="text-3xl font-medium uppercase">{heading}</h3>
      <Divider className="my-4 h-1" />
    </div>
  )
}

export default SectionTitle
