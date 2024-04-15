import moment from "moment";
import { useEffect, useState } from "react";
import { CiCalendarDate } from "react-icons/ci";
import { Link } from "react-router-dom";
import img1 from "../assets/1.png"
import img2 from "../assets/2.png"
import img3 from "../assets/3.png"

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  // const {name} = categories

  return (
    <div>
      <div className="pl-6 mb-12">
        <h2 className="font-bold pb-4 text-2xl">National news</h2>
        {categories.map((category, id) => (
          <Link
            className="block pb-4 text-lg text-gray-400 font-semibold hover:text-black"
            key={id}
          >
            {category.name}
          </Link>
        ))}
      </div>
      <div className="mb-12">
        <img src={img1} alt="" />
        <h2 className="font-semibold text-xl my-4">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
        <div className="flex gap-8">
            <p className="text-gray-500 font-bold">Sports</p>
            <p className="flex items-center  gap-2"><CiCalendarDate /> {moment().format('LL')}</p>
        </div>
      </div>
      <div className="mb-12">
        <img src={img2} alt="" />
        <h2 className="font-semibold text-xl my-4">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
        <div className="flex gap-8">
            <p className="text-gray-500 font-bold">Sports</p>
            <p className="flex items-center  gap-2"><CiCalendarDate /> {moment().format('LL')}</p>
        </div>
      </div>
      <div className="mb-12">
        <img src={img3} alt="" />
        <h2 className="font-semibold text-xl my-4">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
        <div className="flex gap-8">
            <p className="text-gray-500 font-bold">Sports</p>
            <p className="flex items-center  gap-2"><CiCalendarDate /> {moment().format('LL')}</p>
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
