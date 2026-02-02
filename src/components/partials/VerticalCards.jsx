import React from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpg";
const VerticalCards = ({ data, title }) => {
  console.log(title)
  return (
    <div className=" flex flex-wrap w-screen justify-center items-center p-5">
      {data.map((d, i) => (
        <Link
        to={`/${d.media_type || title}/details/${d.id}`}
          key={i}
          className="w-[15%] relative h-50 shadow-2xl bg-[#1F1E24] mb-5 mr-5 overflow-hidden rounded-md z-0"
        >
          <img
            className="rounded-md w-full h-30 hover:scale-105 object-cover"
            src={d.backdrop_path || d.poster_path || d.profile_path ? `https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path || d.profile_path}`:noimage}
            alt=""
          />

          <h1 className="px-2 text-zinc-300 text-xs font-semibold mt-2">
            {d.title || d.name || d.original_name || d.original_title}
          </h1>

          {d.vote_average?<div className="text-xs font-semibold absolute right-[0] bottom-[45%] px-2 flex justify-center items-center bg-yellow-600 rounded-full w-[5vh] h-[5vh] text-white">
            {(d.vote_average * 10).toFixed()}
            <sup>%</sup>
          </div>:""}
          
        </Link>
      ))}
    </div>
  );
};

export default VerticalCards;
