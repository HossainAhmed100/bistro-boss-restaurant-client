const Cover = ({img, coverTitle}) => {
  return (
    <section style={{backgroundImage: `url("${img}")`}} className='bg-no-repeat bg-center bg-fixed bg-cover relative before:top-0 before:left-0 before:right-0 before:bottom-0 before:absolute before:bg-black/10 p-24'>
        <div className="bg-white text-center p-24 max-w-4xl mx-auto">
            <h1 className="text-5xl pb-6 font-semibold">{coverTitle}</h1>
            <p className="text-base text-default-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium!
            Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
            </p>
        </div>
    </section>
  )
}

export default Cover
