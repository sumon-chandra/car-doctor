import React from "react";

const About = () => {
  return (
    <div className="lg:px-36 px-4 py-24 lg:grid grid-cols-2 gap-20">
      <div className="relative">
        <img
          src="https://i.ibb.co/DD9Z3Fs/maxim-hopman-s4d-ESS0yl-A-unsplash.jpg"
          alt=""
          className="rounded-lg"
        />
        <img
          src="https://i.ibb.co/rvB3cBJ/car-mechanics-2.jpg"
          alt=""
          className="w-72 absolute -right-10 -bottom-10 rounded-2xl border-8 border-white shadow-2xl"
        />
      </div>
      <div className="space-y-4">
        <p className="text-main font-semibold ">About us</p>
        <h3 className="text-5xl font-semibold">
          We are qualified & <br /> of experience in this field
        </h3>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <button className="btn text-white border-0 bg-main normal-case font-semibold shadow-md hover:bg-red-500 mr-4">
          Discover more
        </button>
      </div>
    </div>
  );
};

export default About;
