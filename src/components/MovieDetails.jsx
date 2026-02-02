import React, { useEffect, useState } from "react";
import { asyncloadmovie, removemovie } from "../store/action/moviesAction";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import HorizontalCards from "../components/partials/HorizontalCards";
import Loading from "../components/Loading";
function MovieDetails() {
  const { pathname } = useLocation();

  const { info } = useSelector((state) => state.movie);

  const { id } = useParams();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // console.log(info);

  useEffect(() => {
    dispatch(asyncloadmovie(id));

    return () => {
      dispatch(removemovie());
    };
  }, [id]);

  return info ? (
    <div
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.5), rgba(0,0,0,.7)),
          url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})
        `,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-screen relative h-[152vh] overflow-x-hidden  px-[10%]"
    >
      {/* Part 1 navigation */}
      <nav className="w-full h-[10vh] text-zinc-200 text-2xl flex items-center gap-10">
        <Link
          onClick={() => navigate(-1)}
          className="text-2xl text-zinc-400 hover:text-[#6556CD] ri-arrow-left-line"
        ></Link>

        <a target="_blank" href={info.detail.homepage}>
          <i className="ri-external-link-fill"></i>
        </a>

        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="ri-earth-fill"></i>
        </a>

        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
        >
          imdb
        </a>
      </nav>

      {/* Part 2 Poster and Details */}
      <div className="w-full flex">
        <img
          className="rounded-md shadow-2xl h-[50vh] w-[50vh] object-cover"
          src={`https://image.tmdb.org/t/p/original/${info.detail.backdrop_path || info.detail.poster_path}`}
          alt=""
        />
        <div className="ml-10 text-white">
          <h1 className=" text-4xl font-bold">
            {info.detail.name ||
              info.detail.title ||
              info.detail.original_name ||
              info.detail.original_title}
            <small className="text-3xl font-bol ml-2">
              ({info.detail.release_date.split("-")[0]})
            </small>
          </h1>

          <div className="flex gap-x-2 mt-2 mb-2 items-center">
            <span className="text-xs font-semibold px-2 flex justify-center items-center bg-yellow-600 rounded-full w-[5vh] h-[5vh] text-white">
              {(info.detail.vote_average * 10).toFixed()}
              <sup>%</sup>
            </span>
            <h1 className="font-semibold w-[60px] text-2xl leading-5">
              User Score
            </h1>
            <h1>{info.detail.release_date}</h1>
            <h1>{info.detail.genres.map((g) => g.name).join(",")}</h1>
            <h1>{info.detail.runtime}min</h1>
          </div>

          <h1 className="text-xl font-semibold italic text-zinc-200">
            {info.detail.tagline}
          </h1>
          <h1 className="text-xl">Overview</h1>
          <p className="text-xs font-semibold ">{info.detail.overview}</p>

          <h1 className="text-xl">Movie Translated</h1>
          <p className="text-xs font-semibold mb-5 ">
            ({info.translations.join(" ")})
          </p>

          <Link
            to={`${pathname}/trailer`}
            className="px-4 py-2 bg-[#6556CD] rounded-md"
          >
            <i className="mr-2 ri-play-large-fill"></i>Play Trailer
          </Link>
        </div>
      </div>

      {/* Part 3 Avilable on platforms */}

      <div className="flex flex-col gap-10 mt-10">
        <div className="flex flex-col gap-5 ">
          {info.watchproviders && info.watchproviders.flatrate && (
            <div className="flex gap-2 text-white">
              <h1>Avilable on Platforms:</h1>
              {info.watchproviders.flatrate.map((w, i) => (
                <img
                  key={i}
                  className="w-[5vh] h-[5vh] object-cover rounded-md"
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt=""
                ></img>
              ))}
            </div>
          )}

          {info.watchproviders && info.watchproviders.rent && (
            <div className="flex gap-2 text-white">
              <h1>Avilable on Rent:</h1>
              {info.watchproviders.rent.map((w, i) => (
                <img
                  key={i}
                  className="w-[5vh] h-[5vh] object-cover rounded-md"
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt=""
                ></img>
              ))}
            </div>
          )}

          {info.watchproviders && info.watchproviders.buy && (
            <div className="flex gap-2 text-white">
              <h1>Avilable on Buy:</h1>
              {info.watchproviders.buy.map((w, i) => (
                <img
                  key={i}
                  className="w-[5vh] h-[5vh] object-cover rounded-md"
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt=""
                ></img>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* part 4 Recommenditions & Similiars */}
      <hr className="text-white mt-10 h-1" />
      <h1 className="text-3xl text-white font-bold mb-5">
        Recommendations And Similar Stuff
      </h1>
      <HorizontalCards
        data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
      />

      <Outlet />
    </div>
  ) : (
    <Loading />
  );
}

export default MovieDetails;
