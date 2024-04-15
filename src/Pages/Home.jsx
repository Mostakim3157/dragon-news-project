import { useEffect, useState } from "react";
import BreakingNews from "./BreakingNews";
import LeftSideNav from "./LeftSideNav";
import Header from "./Shared/Header";
import Navbar from "./Shared/Navbar";
import RightSideNav from "./Shared/RightSideNav";
import NewsCart from "./NewsCart";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  // const [news, setNews] = useState([]);
  const [showAll, setShowAll] = useState(false);

  // useEffect(() => {
  //   fetch("news.json")
  //     .then((res) => res.json())
  //     .then((data) => setNews(data));
  // }, []);
  const news = useLoaderData()

  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="col-span-2 ">
          <h2
            className="text-2xl font-bold mb-4
          "
          >
            Dragon News Home
          </h2>
          <div>
            {news.slice(0, showAll ? news.length : 2).map((singleNews, id) => (
              <NewsCart key={id} singleNews={singleNews}></NewsCart>
            ))}
          </div>
          <div>
            {
              !showAll && news.length > 2 && (
                <button className="btn btn-secondary" onClick={() => setShowAll(true)}>Show More</button>
              )
            }
          </div>
        </div>
        <div className="">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
