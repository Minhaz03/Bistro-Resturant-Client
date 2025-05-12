import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignUp = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((res) => {
      const loggedUser = res.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          console.log("User Profile Info Updated");
          reset();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "User Profile Updated",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/');
        })
        .catch((err) => console.log(err));
    });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign-Up</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  name="name"
                  {...register("name", { required: true })}
                  type="text"
                  className="input"
                  placeholder="Name"
                />
                <div className="my-3">
                  {errors.name && (
                    <span className="text-red-600">Name is required</span>
                  )}
                </div>

                <label className="label">Photo URL</label>
                <input
                  {...register("photoURL", { required: true })}
                  type="text"
                  className="input"
                  placeholder="Photo URL"
                />
                <div className="my-3">
                  {errors.PhotoURL && (
                    <span className="text-red-600">Photo URL is required</span>
                  )}
                </div>

                <label className="label">Email</label>
                <input
                  name="email"
                  {...register("email", { required: true })}
                  type="email"
                  className="input"
                  placeholder="Email"
                />
                <div className="my-3">
                  {errors.email && (
                    <span className="text-red-600">Email is required</span>
                  )}
                </div>

                <label className="label">Password</label>
                <input
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 8,
                    maxLength: 15,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div className="my-3">
                  {/*  */}
                  {errors.password?.type === "required" && (
                    <p className="text-red-600">Password is required </p>
                  )}
                  {/*  */}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600">
                      Password must be 6 character{" "}
                    </p>
                  )}
                  {/*  */}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-600">
                      Password must be less than 20 character{" "}
                    </p>
                  )}
                  {/*  */}
                  {errors.password?.type === "pattern" && (
                    <small className="text-red-600">
                      Password must one upperCase one lowerCase, One Number &
                      One Special Character{" "}
                    </small>
                  )}
                </div>

                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>

                <input
                  className="btn btn-neutral mt-4"
                  type="submit"
                  value="Sign Up"
                />
              </fieldset>
            </form>
            <p className="text-center">
              <small className="mr-2">
                Already Have an Account: <Link to="/login">Login</Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
