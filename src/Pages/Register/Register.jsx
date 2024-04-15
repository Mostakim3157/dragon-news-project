import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Register = () => {

  const {createUser} = useContext(AuthContext)

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email")
    const name = form.get("name")
    const password = form.get("password")
    const photoUrl = form.get("photoUrl")
    // console.log(email, password, name, photoUrl);

    createUser(email, password)
    .then((result)=>{
      console.log(result.user)
  })
    .catch()
  
  };

  return (
    <div>
     <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200">
        <div className="">
          <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <h2 className="text-2xl font-semibold text-center mb-6">
                Register Now
              </h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="your name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="photoUrl"
                  placeholder="photo url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="cursor-pointer flex gap-2 items-center">
                  
                  <input type="checkbox" className="checkbox checkbox-xs" /> 
                  <span className="label-text">Accept terms & condition</span>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="w-[70%] text-center mx-auto mb-4">
              Already have an account? Please{" "}
              <Link className="text-red-500" to="/login">
                Login
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
