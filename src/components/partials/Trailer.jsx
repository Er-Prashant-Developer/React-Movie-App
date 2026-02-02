import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import NotFound from "../NotFound";
function Trailer() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideos = useSelector((state) => state[category].info.videos);

  // console.log(ytvideos.key);
  return (
    <div className="top-0 left-0 z-[100] bg-[rgba(0,0,0,.9)] w-screen h-screen absolute flex items-center justify-center">
      <Link
        onClick={navigate(-1)}
        className="text-white ri-close-large-line text-3xl font-semibold hover:text-[#6556CD] absolute top-[10%] right-[5%]"
      ></Link>
      {ytvideos ? (
        <ReactPlayer
        controls
          className="border-2 border-white"
          height={500}
          width={900}
          src={`https://www.youtube.com/watch?v=${ytvideos.key}`}
        />
      ) : (
        <NotFound />
      )}
    </div>
  );
}

export default Trailer;
