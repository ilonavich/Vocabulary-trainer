import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div>
      <section className=" text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Practice daily vocab.
              <span className="sm:block"> Boost your conversation. </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="vocabcards"
                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-black hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              >
                Practice vocabulary
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
