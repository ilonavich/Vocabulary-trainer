import React from "react";

const AboutUs = () => {
  return (
    <div className="p-6 rounded-lg mx-4 sm:mx-auto sm:max-w-3xl text-center">
      <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-2xl font-extrabold text-transparent sm:text-2xl">
        Welcome to Yap!
      </h1>
      <p className="mt-5 text-gray-700 text-base leading-relaxed sm:text-lg">
        Yap is your personal vocabulary trainer app that makes learning new
        words simple and effective. Just add new vocabulary in German, and Yap
        will automatically generate an English translation for you. If needed,
        you can edit and adjust the translation to fit your preferences. Train
        every day with our visual cards and expand your vocabulary in a fun and
        engaging way. Yap helps you learn languages anytime, anywhere.
      </p>
    </div>
  );
};

export default AboutUs;
