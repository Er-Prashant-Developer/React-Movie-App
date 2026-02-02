import React from "react";
import { Link } from "react-router-dom";
import NotFound from "../NotFound";

function Header({ data }) {
  console.log(data);
  return data?(
    <div
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.5), rgba(0,0,0,.7)),
          url(https://image.tmdb.org/t/p/original/${
            data.backdrop_path || data.profile_path || data.poster_path
          })
        `,

        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[55vh] flex flex-col justify-end p-[5%] items-start"
    >
      <h1 className="text-zinc-300 w-[70%] text-4xl font-black">
        {data.name || data.title || data.original_name || data.original_title}
      </h1>
      <p className="text-zinc-300 w-[70%] mb-3">
        {data.overview.slice(0, 200)}....
        <Link
          to={`${data.media_type}/details/${data.id}`}
          className="text-blue-400"
        >
          more
        </Link>
      </p>
      <p className="text-zinc-400">
        <i className="ri-megaphone-fill text-yellow-500"></i>
        {data.release_date || "No Info"}
        <i className="ri-album-fill ml-5 text-yellow-500"></i>
        {data.media_type.toUpperCase()}
      </p>
      <Link to={`${data.media_type}/details/${data.id}/trailer`} className="text-zinc-200 bg-[#6556CD] p-4 rounded-md font-semibold mt-5">
        Watch Trailer
      </Link>
    </div>
  ):<NotFound/>;
}

export default Header;
