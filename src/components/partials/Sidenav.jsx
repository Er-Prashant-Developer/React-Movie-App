import axios from "../utils/axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
function Sidenav() {
  return (
    <div className="w-[20%] min-h-screen border-r-2 border-zinc-400 font-bold p-3">
      <h1 className="text-2xl text-white">
        <i className="text-[#6556CD] ri-tv-fill mr-2 "></i>

        <span className="">DB</span>
      </h1>

      <nav className="text-zinc-400 text-xl flex flex-col gap-2 ">
        <h1 className="mt-5 mb-3 font-semibold">New Feeds</h1>
        <Link
          to={"/trending"}
          className="p-3 hover:bg-[#6556CD] hover:text-white rounded-md duration-300"
        >
          <i className="ri-fire-fill"></i> Trending
        </Link>
        <Link
          to={"/popular"}
          className="p-3 hover:bg-[#6556CD] hover:text-white rounded-md duration-300"
        >
          <i className="ri-magic-fill"></i> Popular
        </Link>
        <Link
          to={"/movie"}
          className="p-3 hover:bg-[#6556CD] hover:text-white rounded-md duration-300"
        >
          <i className="ri-movie-2-ai-fill"></i> Movies
        </Link>
        <Link
          to={"/tvshows"}
          className="p-3 hover:bg-[#6556CD] hover:text-white rounded-md duration-300"
        >
          <i className="ri-tv-2-fill"></i> Tv Shows
        </Link>
        <Link
          to={"/people"}
          className="p-3 hover:bg-[#6556CD] hover:text-white rounded-md duration-300"
        >
          <i className="ri-team-fill"></i> People
        </Link>
      </nav>

      <hr className="border-none `h-[1px]` bg-zinc-400" />

      <nav className="text-zinc-400 text-xl flex flex-col gap-2 ">
        <h1 className="mt-4  font-semibold">Website Information</h1>
        <Link
          to={"/aboutdb"}
          className="p-3 hover:bg-[#6556CD] hover: text-white rounded-md duration-300"
        >
          <i className="ri-information-fill"></i> About DB
        </Link>
        <Link
          to={"/contactus"}
          className="p-3 hover:bg-[#6556CD] hover:text-white rounded-md duration-300"
        >
          <i className="ri-phone-fill"></i> Contact Us
        </Link>
      </nav>
    </div>
  );
}

export default Sidenav;
