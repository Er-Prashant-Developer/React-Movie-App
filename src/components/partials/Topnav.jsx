import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpg";

function Topnav() {
  const [query, setQuery] = useState("");

  const [searches, setSearches] = useState([]);

  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      // console.log(data);
      setSearches(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetSearches();
  }, [query]);

  return (
    <div className="w-[80%] z-50 mx-auto h-[10vh] flex  justify-start items-center relative">
      <i className="text-3xl text-zinc-400 ri-search-2-line"></i>
      <input
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        value={query}
        className="p-5 text-xl border-none outline-none w-[50%] z-50 mx-5 bg-transparent text-zinc-200"
        type="text"
        placeholder="search anything"
      />
      {query && (
        <i
          onClick={() => {
            setQuery("");
          }}
          className="ri-close-fill text-3xl text-zinc-400"
        ></i>
      )}

      {query && (
        <div className="absolute z-50 max-h-[50vh] w-[50%] bg-zinc-200 top-[90%] ml-17 overflow-auto rounded-md">
          {searches.map((e, i) => (
            <Link
              to={`/${e.media_type}/details/${e.id}`}
              key={i}
              className="inline-block hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 border-b-2 border-zinc-100 p-10 w-[100%] border-2 flex justify-start items-center "
            >
              <div className="flex items-center">
                <img
                  className="w-[10vh] h-[10vh] mr-10 object-cover shadow-2xl rounded-md"
                  src={
                    e.backdrop_path || e.profile_path
                      ? `https://image.tmdb.org/t/p/original/${e.backdrop_path || e.profile_path}`
                      : noimage
                  }
                  alt=""
                />

                <span>
                  {e.name || e.title || e.original_name || e.original_title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Topnav;
