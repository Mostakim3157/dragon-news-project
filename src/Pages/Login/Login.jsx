import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const location = useLocation();
  const { singIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    // const name = form.get("name")
    const password = form.get("password");
    // console.log(email, password)

    singIn(email, password)
      .then((result) => {
        console.log("login done");

        navigate(location?.state ? location.state : "/")
      })
      .catch();
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200">
        <div className="">
          <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <h2 className="text-2xl font-semibold text-center mb-6">
                Please login
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
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="w-[70%] text-center mx-auto mb-4">
              Don&apos;t have an account? Please{" "}
              <Link className="text-red-500" to="/register">
                Register
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
