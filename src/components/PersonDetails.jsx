import React, { useEffect, useState } from "react";
import { asyncloadperson, removeperson } from "../store/action/personaction";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import HorizontalCards from './partials/HorizontalCards'
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "./partials/Dropdown";
import noimage from '/noimage.jpg'
function PersonDetails() {
  const navigate = useNavigate();

  const { info } = useSelector((state) => state.person);

  const { id } = useParams();

  const dispatch = useDispatch();

  const [category,setcategory]=useState("movie")
  console.log(info);

  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removeperson());
    };
  }, [id]);

  return info ? (
    <div className="w-screen px-[5%] bg-zinc-950 h-[200vh] ">
      {/* Part 1 navigation */}
      <nav className="w-full h-[10vh] text-zinc-200 text-2xl flex items-center gap-10">
        <Link
          onClick={() => navigate(-1)}
          className="text-2xl text-zinc-400 hover:text-[#6556CD] ri-arrow-left-line"
        ></Link>
      </nav>

      <div className="w-full p-5 flex gap-5">
        {/* part 2 left poster and details */}
        <div className="w-[20%] rounded-md p-2">
          <img
            className="rounded-md shadow-[8px_17px_38px_2px_rgba(0,0,0,.9)] w-full h-[40vh]  hover:scale-102 object-center"
            src={
              info.detail.backdrop_path ||
              info.detail.poster_path ||
              info.detail.profile_path
                ? `https://image.tmdb.org/t/p/original/${info.detail.backdrop_path || info.detail.poster_path || info.detail.profile_path}`
                : noimage
            }
            alt=""
          />

          <hr className="text-white mt-3 h-1" />

          {/* social links */}
          <div className="w-full flex text-zinc-400 text-2xl justify-between">
            {info.externalid.wikidata_id && (
              <a
                target="_blank"
                href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
              >
                <i className="ri-earth-fill "></i>
              </a>
            )}

            {info.externalid.facebook_id && (
              <a
                target="_blank"
                href={`https://www.facebook.com/${info.externalid.facebook_id}`}
              >
                <i className="ri-facebook-circle-fill"></i>
              </a>
            )}

            {info.externalid.instagram_id && (
              <a
                target="_blank"
                href={`https://www.instagram.com/${info.externalid.facebook_id}`}
              >
                <i className="ri-instagram-fill"></i>
              </a>
            )}

            {info.externalid.twitter_id && (
              <a
                target="_blank"
                href={`https://twitter.com/${info.externalid.twitter_id}`}
              >
                <i className="ri-twitter-x-fill"></i>
              </a>
            )}
          </div>

          <h1 className="text-2xl text-zinc-500 font-semibold mt-3">
            Person Info
          </h1>

          <h2 className="text-xl text-zinc-500 font-semibold mt-3">
            Known For
          </h2>
          <h1 className="text-zinc-500 text-xs font-semibold">
            {info.detail.known_for_department}
          </h1>

          <h2 className="text-xl mt-3 text-zinc-500 font-semibold">Gender</h2>
          <h1 className="font-semibold text-xs text-zinc-500">
            {info.detail.gender == 2 ? "Male" : "Female"}
          </h1>

          <h2 className="text-xl text-zinc-500 font-semibold mt-3">Birthday</h2>
          <h1 className="text-zinc-500 text-xs font-semibold">
            {info.detail.birthday}
          </h1>

          <h2 className="text-xl mt-3 text-zinc-500 font-semibold">Deathday</h2>
          <h1 className="text-xs font-semibold text-zinc-500">
            {info.detail.deathday ? info.detail.deathday : "Still Alive"}
          </h1>

          <h2 className="text-xl text-zinc-500 font-semibold mt-3">
            Place of birth
          </h2>
          <h1 className="text-zinc-500 text-xs font-semibold">
            {info.detail.place_of_birth}
          </h1>

          {info.detail.also_known_as.length > 0 ? (
            <div>
              <h2 className="text-xl text-zinc-500 font-semibold mt-3">
                Also Known as
              </h2>
              <h1 className="text-zinc-500 text-xs font-semibold">
                {info.detail.also_known_as}
              </h1>
            </div>
          ) : (
            ""
          )}
        </div>

        {/* part 3 right details and information */}
        <div className="w-[80%] ml-5 h-full">
          <h1 className="text-5xl text-zinc-500 font-black mt-3">
            {info.detail.name}
          </h1>

          <h1 className="text-xl text-zinc-500 font-semibold mt-3">
            Biography
          </h1>
          <p className="text-zinc-500 text-xs font-semibold">
            {info.detail.biography}
          </p>

          <h1 className="text-xl text-zinc-500 font-semibold mt-5 mb-3">
            Known For
          </h1>
          <HorizontalCards data={info.combinedCredit.cast}/>

          <div className="w-full flex justify-between">
            
            <h1 className="mt-5 text-xl text-zinc-500 front-semibold">Acting</h1>

            <Dropdown title="category" options={['tv','movie']} func={(e)=>setcategory(e.target.value)}/>
          </div>

          <div className="mt-3 text-zinc-500 w-full h-[50vh] overflow-x-hidden overflow-y-auto shadow-xl border-2 border-zinc-700 p-5 shadow-[rgba(255,255,255,.5)]">

            {info[category+"Credits"].cast.map((c,i)=><li key={i} className="hover:text-white duration-300 cursor-pointer">
              <Link className="ml-5" to={`/${category}/details/${c.id}`}>
              <span> {c.name ||
              c.title ||
              c.original_name ||
              c.original_title}</span>

              <span className="block ml-5 mb-5">
              {c.character && ` Character name: ${c.character}`}
                </span>
              </Link>
            </li>)}
            
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default PersonDetails;

//
