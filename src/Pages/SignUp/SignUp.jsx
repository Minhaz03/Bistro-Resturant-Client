import React from "react";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
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
                })}
                type="password"
                className="input"
                placeholder="Password"
              />
              <div className="my-3">
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is Required</p>
                )}
              </div>

              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
