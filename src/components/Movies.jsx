import React, { use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import axios from "../components/utils/axios";
import Loading from "./Loading";
import VerticalCards from "./partials/VerticalCards";
import InfiniteScroll from "react-infinite-scroll-component";
const Movies = () => {
  document.title = "DB | Movies";
  const navigate = useNavigate();

  const [movie, setmovie] = useState([]);
  const [category, setcategory] = useState("now_playing");
  const [page, setpage] = useState(1);
  const [hasmore, sethasmore] = useState(true);

  const getmovie = async () => {
    try {
      const { data } = await axios.get(`movie/${category}?page=${page}`);
      if (data.results.length > 0) {
        setmovie((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        sethasmore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const refreshhandler = async () => {
    if (movie.length === 0) {
      getmovie();
    } else {
      setpage(1);
      setmovie([]);
      getmovie();
    }
  };

  useEffect(() => {
    refreshhandler();
  }, [category]);

  // console.log(movie[10])

  return movie.length > 0 ? (
    <div className="px-[3%] w-screen h-screen overflow-hidden overflow-y-auto">
      <div className="flex flex-col w-full items-center justify-between">
        <div className="w-full flex justify-between items-center">
          <i
            onClick={() => navigate(-1)}
            className="text-2xl text-zinc-400 hover:text-[#6556CD] ri-arrow-left-line"
          ></i>

          <h1
            className="text-2xl w-[20%] font-semibold
       text-zinc-400"
          >
            Movies
          </h1>

          <div className="w-[80%] flex items-center">
            <Topnav />

            <Dropdown
              title={"Category"}
              options={["popular","top_rated","upcoming","now_playing"]}
              func={(e) => setcategory(e.target.value)}
            />

            <div className="w-[2%]"></div>
          </div>
        </div>

        <InfiniteScroll
          dataLength={movie.length}
          next={getmovie()}
          hasMore={hasmore}
          loader={<h1>Loading...</h1>}
        >
          <VerticalCards data={movie} title="movie" />
        </InfiniteScroll>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Movies;
