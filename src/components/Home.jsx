import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen text-white bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="flex flex-col items-center justify-center h-full max-w-screen-lg px-4 mx-auto md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl font-bold text-white sm:text-7xl">
            I am a Frontend Developer
          </h2>
          <p className="max-w-md py-4 text-gray-500">
            I have 4+ years of hands-on experience in web development and My
            motivation to learn different technologies and algorithms drives me.
            I love the challenges of a steep learning curve, which makes me a
            better learner. I strongly desire to learn different technologies,
            which would enable me to become a better developer. I believe in the
            fast execution culture while building things from scratch. I believe
            in startups where the learning process is very high and focuses on
            improving new ideas.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="flex items-center px-6 py-3 my-2 text-white rounded-md cursor-pointer group w-fit bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              Portfolio
              <span className="ml-2 duration-300 group-hover:rotate-90">
                <FaLongArrowAltRight size={20} />
              </span>
            </Link>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src={HeroImage}
            alt="my profile"
            className="w-2/3 mx-auto rounded-2xl md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
