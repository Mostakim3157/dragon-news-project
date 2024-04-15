import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import qZone1 from "../../assets/qZone1.png";
import qZone2 from "../../assets/qZone2.png";
import qZone3 from "../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <div>
        <h2 className="font-bold mb-4 text-2xl">Login With</h2>
        <button className="btn btn-outline w-full bg-none border mb-2">
          <FaGoogle />
          Google
        </button>
        <button className="btn btn-outline w-full bg-none border">
          <FaGithub />
          Github
        </button>
      </div>
      <div>
        <h2 className="font-bold mb-4 text-2xl">Find us on</h2>
        <table
          className=" w-[90%] mx-auto mb-3 border
        "
        >
          <tr>
            <td className="p-2">
              <a className="flex items-center gap-2" href="">
                <FaFacebook /> Facebook
              </a>
            </td>
          </tr>
          <hr />
          <tr>
            <td className="p-2">
              <a className="flex items-center gap-2" href="">
                <FaTwitter /> Twitter
              </a>
            </td>
          </tr>
          <tr><td><hr /></td></tr>
          <tr>
            <td className="p-2">
              <a className="flex items-center gap-2" href="">
                <FaInstagram />
                Instagram
              </a>
            </td>
          </tr>
        </table>
      </div>
{/* Q zone */}
      <div>
        <h2 className="font-bold mb-4 text-2xl">Q Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
      {/* add */}
      <div className="bg-[#0F0629] text-white text-center p-12">
      <h3 className="text-2xl font-semibold">Create an Amazing Newspaper</h3>
      <p className="my-8 font-light">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
      <button className="btn btn-success text-white">Learn More</button>
      </div>
    </div>
  );
};

export default RightSideNav;
