import { Carousel } from "flowbite-react";

export default function Example() {
  return (
    <section id="about">
      <div className="bg-black sm:pb-5 lg:px-10 lg:pt-20 lg:pr-40 lg:pb-20 lg:pl-40">
        <div className="lg:flex lg:items-center">
          <Carousel
            leftControl=" "
            rightControl=" "
            slideInterval={1000}
            className="overflow-y-clip rounded-none"
          >
            <div className="relative mix-blend-overlay object-contain py-2 sm:h-0 sm:w-0 md:h-0 md:w-0 lg:h-full lg:w-full">
              <img
                src="./code.svg"
                alt="Code BharatGoDev"
                className="absolute h-full w-full object-contain "
              />
            </div>
            <div className="relative h-full w-full mix-blend-overlay py-2">
              <img
                src="./app.svg"
                alt="App BharatGoDev"
                className=" hidden lg:block lg:w-80 lg:h-80 lg:mt-0"
              />
            </div>
            <div className="relative h-full w-full mix-blend-overlay py-2">
              <img
                src="./design.svg"
                alt="Design BharatGoDev"
                className=" hidden lg:block lg:w-80 lg:h-80 lg:mt-0"
              />
            </div>
            <div className="relative h-full w-full mix-blend-overlay py-2">
              <img
                src="./programming.svg"
                alt="Programming BharatGoDev"
                className=" hidden lg:block lg:w-80 lg:h-80 lg:mt-0"
              />
            </div>
            <div className="relative h-full w-full mix-blend-overlay py-2">
              <img
                src="./contact.svg"
                alt="Hero BharatGoDev"
                className=" hidden lg:block lg:w-80 lg:h-80 lg:mt-0"
              />
            </div>
          </Carousel>
          <div className=" lg:text-right  text-center pt-2 lg:pl-20 lg:ml-20 ">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl  ">
              <span style={{ color: "#FF9933" }}>Bhar</span>
              <span style={{ color: "#FFFFFF" }}>atG</span>
              <span style={{ color: "#138808" }}>oDev</span>
            </h1>
            <p className="text-center pt-2">
              <span style={{ color: "#FFFFFF" }}>
                Website, App & Graphic Design Specialists
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
