import { useParams } from "react-router-dom";
import Header from "../Pages/Shared/Header";
import Navbar from "../Pages/Shared/Navbar";
import RightSideNav from "../Pages/Shared/RightSideNav";

const News = () => {

    const {id, details} = useParams()
    console.log(id,details)

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="col-span-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ex, totam culpa accusamus, aperiam itaque quos repudiandae quod accusantium ea amet. Possimus ea culpa eius mollitia ducimus quaerat, quibusdam eaque!</div>
            <div>
                <RightSideNav></RightSideNav>
            </div>
          </div>
        </div>
    );
};

export default News;