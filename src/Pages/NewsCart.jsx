import { CiShare2 } from "react-icons/ci";
import { FaBookmark, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCart = ({ singleNews }) => {
  const {
    rating,
    total_view,
    title,
    author,
    thumbnail_url,
    image_url,
    details,
    _id,
  } = singleNews;

  console.log(_id);
  return (
    <div className=" mb-20 p-4 border">
      <div className="flex justify-between items-center bg-gray-100 p-4 ">
        <div className="flex gap-4">
          <img className="w-10 rounded-full" src={author.img} alt="" />
          <div>
            <p className="font-bold">{author.name}</p>
            <p>{author.published_date}</p>
          </div>
        </div>
        <div className="flex  gap-2">
          <FaBookmark />
          <CiShare2 />
        </div>
      </div>
      <h3 className="text-xl font-semibold my-4">{title}</h3>
      <img src={image_url} alt="" />
      {details.length > 200 ? (
        <p className="my-4 ">
          {details.slice(0, 200)}
          <Link to={`/news/${_id}`} className="text-blue-500 ">
            Read More...
          </Link>
        </p>
      ) : (
        <p>{details}</p>
      )}
      <hr />
      <div className="my-4 flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <p>{rating.number}</p>
        </div>
        <p className="flex items-center gap-2">
          <FaEye />
          {total_view}
        </p>
      </div>
    </div>
  );
};

export default NewsCart;
