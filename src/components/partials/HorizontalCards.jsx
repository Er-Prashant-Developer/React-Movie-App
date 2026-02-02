import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import Loading from "../Loading";
import noimage from "/noimage.jpg";

function HorizontalCards({ data }) {
  // console.log(data[0].media_type)
  return data ?(
    <div className="w-full flex overflow-y-hidden mb-5">
      {data.map((d, i) => (
        <Link
        to={`/${d.media_type}/details/${d.id}`}
          key={i}
          className="min-w-[25%]  bg-zinc-900 mb-5 mr-5 overflow-hidden rounded-md"
        >
          <img
            className="rounded-md w-full h-[20vh] hover:scale-105 object-cover"
            src={d.backdrop_path || d.poster_path?`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path}`:noimage}
            alt=""
          />
          <div className="w-full ">
            <h1 className="text-zinc-300 font-semibold mt-5">
              {d.title || d.name || d.original_name || d.original_title}
            </h1>
            <p className="text-zinc-300 mt-2 text-xs mb-3">
              {d.overview.slice(0, 100)}....
              <span className="text-zinc-500">more</span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  ):<Loading/>;
}

export default HorizontalCards;
