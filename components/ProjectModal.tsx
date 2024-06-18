import projectImage4 from "@/public/projects/Microraptor.png";

export default function ProjectModal() {
  return (
    <div className="absolute z-40 flex px-8 pt-36">
      <div className="flex-grow rounded-xl border-[2px] border-accent bg-background px-4 py-4 shadow-lg md:mx-24 lg:mx-36">
        {/* Exit Button */}
        <div className="flex justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="size-8 stroke-white"
          >
            <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.707,12.293a1,1,0,1,1-1.414,1.414L12,13.414,9.707,15.707a1,1,0,0,1-1.414-1.414L10.586,12,8.293,9.707A1,1,0,0,1,9.707,8.293L12,10.586l2.293-2.293a1,1,0,0,1,1.414,1.414L13.414,12Z" />
          </svg>
        </div>
        {/* Content */}
        <div className="mx-8">
          {/* Project Image */}
          <img src={projectImage4.src} className="mb-8 rounded-3xl p-4"></img>
          {/* Project Name */}
          <h1 className="m-4 my-8 text-4xl font-bold tracking-tight text-content">
            Project Name
          </h1>
          {/* Project Description */}
          <p className="m-4 my-8 text-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus
            orci eu libero malesuada, id lobortis arcu dapibus. Nunc mollis
            blandit fermentum.
          </p>
          <p className="m-4 my-8 text-content">
            Ut iaculis ex est, sit amet posuere massa posuere vel. Quisque
            elementum arcu sit amet enim consequat, id porttitor est vehicula.
            Praesent eleifend nibh urna, eget vulputate quam commodo eu. Sed non
            lorem congue, gravida dui eget, vehicula leo. Nunc in purus in justo
            tempus tempus ut sagittis nunc.
          </p>
          <p className="m-4 my-8 text-content">
            Quisque porttitor orci eget velit rhoncus, pulvinar condimentum
            magna ultrices. Praesent at libero elementum, facilisis nisi at,
            efficitur tortor. Nulla pellentesque orci in faucibus commodo. Nam
            at auctor lectus. Morbi sodales risus sit amet justo mollis maximus.
            Pellentesque fringilla neque quis arcu gravida, id dapibus arcu
            vehicula. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Integer sodales fermentum dictum. In
            commodo porta augue et ultrices.
          </p>
        </div>
      </div>
    </div>
  );
}
