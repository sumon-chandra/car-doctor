const Carousel = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full h-[700px]">
        <img
          src="https://i.ibb.co/SxW8YrK/car-1.jpg"
          className="w-full object-cover"
        />
        <div className="absolute w-4/6 space-y-10 top-0 pt-52 bottom-0 gap-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white lg:px-36 px-4">
          <h3 className="text-7xl font-bold">
            Affordable Price For Car Servicing
          </h3>
          <p className="w-3/4 text-xl">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div>
            <button className="btn text-white border-0 bg-main normal-case font-semibold shadow-md hover:bg-red-500 mr-4">
              Discover more
            </button>
            <button className="btn text-main bg-transparent normal-case border border-main font-semibold shadow-md hover:bg-main hover:text-white hover:border-main">
              Latest projects
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
          <a
            href="#slide4"
            className="btn btn-circle bg-main hover:bg-main border-0"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle bg-main hover:bg-main border-0"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full h-[700px]">
        <img
          src="https://i.ibb.co/KwDgLKb/car-6.jpg"
          className="w-full object-cover"
        />
        <div className="absolute w-4/6 space-y-10 top-0 pt-52 bottom-0 gap-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white lg:px-36 px-4">
          <h3 className="text-7xl font-bold">
            Affordable Price For Car Servicing
          </h3>
          <p className="w-3/4 text-xl">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div>
            <button className="btn text-white border-0 bg-main normal-case font-semibold shadow-md hover:bg-red-500 mr-4">
              Discover more
            </button>
            <button className="btn text-main bg-transparent normal-case border border-main font-semibold shadow-md hover:bg-main hover:text-white hover:border-main">
              Latest projects
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
          <a
            href="#slide1"
            className="btn btn-circle bg-main hover:bg-main border-0"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle bg-main hover:bg-main border-0"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full h-[700px]">
        <img
          src="https://i.ibb.co/Fs33cg8/car-5.jpg"
          className="w-full object-cover"
        />
        <div className="absolute w-4/6 space-y-10 top-0 pt-52 bottom-0 gap-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white lg:px-36 px-4">
          <h3 className="text-7xl font-bold">
            Affordable Price For Car Servicing
          </h3>
          <p className="w-3/4 text-xl">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div>
            <button className="btn text-white border-0 bg-main normal-case font-semibold shadow-md hover:bg-red-500 mr-4">
              Discover more
            </button>
            <button className="btn text-main bg-transparent normal-case border border-main font-semibold shadow-md hover:bg-main hover:text-white hover:border-main">
              Latest projects
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
          <a
            href="#slide2"
            className="btn btn-circle bg-main hover:bg-main border-0"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle bg-main hover:bg-main border-0"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full h-[700px]">
        <img
          src="https://i.ibb.co/Yf8Jsjd/car-2.jpg"
          className="w-full object-cover"
        />
        <div className="absolute w-4/6 space-y-10 top-0 pt-52 bottom-0 gap-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white lg:px-36 px-4">
          <h3 className="text-7xl font-bold">
            Affordable Price For Car Servicing
          </h3>
          <p className="w-3/4 text-xl">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div>
            <button className="btn text-white border-0 bg-main normal-case font-semibold shadow-md hover:bg-red-500 mr-4">
              Discover more
            </button>
            <button className="btn text-main bg-transparent normal-case border border-main font-semibold shadow-md hover:bg-main hover:text-white hover:border-main">
              Latest projects
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide3"
            className="btn btn-circle bg-main hover:bg-main border-0"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle bg-main hover:bg-main border-0"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
