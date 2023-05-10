import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="hero min-h-screen bg-base-200 pt-20">
      <div className="hero-content gap-44">
        <div className="text-center lg:text-left">
          <img src="https://i.ibb.co/yfy7bX4/login.png" alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form>
              <h3 className="text-3xl font-bold text-center">Registration</h3>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="input border border-main"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input border border-main"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="input border border-main"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-main hover:bg-main border-0 normal-case">
                  Register
                </button>
              </div>
            </form>
            <p className="font-semibold text-center">Or sign up with</p>
            <div className="flex gap-8 py-2 items-center justify-center">
              <img
                className="w-6 cursor-pointer"
                src="https://i.ibb.co/kBbDdKw/google.png"
                alt="google"
              />
              <img
                className="w-6 cursor-pointer"
                src="https://i.ibb.co/K2QMKc4/facebook.png"
                alt="facebook"
              />
              <img
                className="w-6 cursor-pointer"
                src="https://i.ibb.co/DGvcwzy/linkedin.png"
                alt="linkedin"
              />
            </div>
            <label className="label justify-start gap-1">
              Already have an account?
              <Link
                to="/login"
                className="link link-hover text-main font-semibold"
              >
                Login
              </Link>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
