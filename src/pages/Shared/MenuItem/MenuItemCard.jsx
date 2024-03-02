const MenuItemCard = ({item}) => {
    const {name, recipe, image, price} = item;

return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex gap-5">
        <img alt="NextUI hero Image" className="rounded-b-full rounded-tr-full w-24 h-20 cover shadow-md" src={image} />
          {/* <Avatar isBordered className="w-20 h-20 text-large" src={image} /> */}
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-xl font-normal leading-none text-default-600">{name} -------------</h4>
            <h5 className="text-base font-light tracking-tight text-default-400">{recipe}</h5>
          </div>
        </div>
        <p className="text-yellow-500">${price}</p>
      </div>
    </div>
)
}

export default MenuItemCard
