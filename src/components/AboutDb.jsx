import React from "react";
import { useNavigate } from "react-router-dom";
import deadpool from "/deadpool.webp";
import arrow from "/arrow.png";

const AboutDb = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative h-[140vh] w-full bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${deadpool})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 text-white">
        {/* Header */}
        <div className="flex items-center gap-2 px-2 py-2 md:px-4">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line text-2xl cursor-pointer hover:text-[#6556CD]"
          />
          <h1 className="text-xl md:text-2xl font-semibold text-zinc-300">
            About Project
          </h1>
        </div>

        {/* Main Section */}
        <div className="flex flex-col items-center text-center px-2 sm:px-6 py-10 gap-10">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            Hi, I&apos;m Prashant 👋
          </h1>

          <p className="max-w-4xl text-zinc-300 text-base sm:text-lg leading-relaxed">
            Welcome to my MovieApp 🎬 — a real-world project built to showcase my
            skills as a Front-End Developer. This application uses TMDB&apos;s API
            to fetch real-time movie and TV show data such as trending content,
            trailers, cast details, and ratings.
            <br />
            <br />
            I developed this project using React, React Router, Redux, and
            Tailwind CSS with a strong focus on clean UI, responsive design, and
            smooth user experience. My goal is to build fast, scalable, and
            user-friendly web applications while continuously improving my
            technical and problem-solving skills.
          </p>

          {/* Advantages */}
          <div className="w-full max-w-5xl flex flex-col gap-6 sm:gap-8 mt-10 px-1 sm:px-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
              Why this project stands out
            </h2>

            <div className="flex flex-col gap-5 text-left">
              {[
                "Developed a real-world movie application using modern React architecture.",
                "Implemented mobile-first responsive design using Tailwind CSS.",
                "Integrated TMDB REST API for real-time movie and TV show data.",
                "Used React Router for smooth navigation and Redux for state management.",
                "Focused on clean code, component reusability, and performance optimization.",
              ].map((text, index) => (
                <div key={index} className="flex items-start gap-4 ">
                  <span className="text-2xl sm:text-3xl font-bold text-[#6556CD]">
                    {index + 1}.
                  </span>
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed ">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quote / Slider Section */}
      
    </div>
  );
};

export default AboutDb;
