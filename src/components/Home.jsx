import React, { useEffect, useState } from "react";
import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav";
import Header from "./partials/Header";
import axios from "./utils/axios";
import HorizontalCards from "./partials/HorizontalCards";
import Dropdown from "./partials/Dropdown";
import Loading from "./Loading";

function Home() {
  document.title = "Movie App | Homepage";

  const [wallper, setwallper] = useState(null);
  const [trending, settrending] = useState(null);
  const [category, setcategory] = useState("all");

  const getwallper = async () => {
    try {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/trending/movie/day",
      );
      const randomdata =
        data.results[(Math.random() * data.results.length).toFixed()];
      // console.log(randomdata)
      setwallper(randomdata);
    } catch (error) {
      console.log(error);
    }
  };

  const gettrending = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/${category}/day`,
      );
      settrending(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    gettrending();
    !wallper && getwallper();
  }, [category]);

  return wallper || trending ? (
    <>
      <Sidenav />
      <div className="w-[80%] min-h-screen overflow-auto overflow-x-hidden px-3">
        <Topnav />
        <Header data={wallper} />

        <div className="p-2 flex justify-between">
          <h1 className="text-3xl font-semibold text-zinc-400">Trendings</h1>

          <Dropdown
            title="Filter"
            options={["tv", "movie", "all"]}
            func={(e) => {
              setcategory(e.target.value);
            }}
          />
        </div>

        <HorizontalCards data={trending} />
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;
