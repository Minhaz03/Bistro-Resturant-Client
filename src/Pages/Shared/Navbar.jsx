import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  const links = (
    <>
      <li>
        <Link to="/">HOME</Link>
      </li>
      {/* <li>
        <details>
          <summary>AUTHENTICATION</summary>
          <ul className="p-2">
            <li>
              <Link to="/login">LOGIN</Link>
            </li>
            <li>
              <Link to="/register">REGISTER</Link>
            </li>
          </ul>
        </details>
      </li> */}
      <li>
        <Link to="">CONTACT US</Link>
      </li>

      <li>
        <Link to="">DASHBOARD</Link>
      </li>

      <li>
        <Link to="/menu">OUR MENU</Link>
      </li>

      <li>
        <Link to="/order/salad">OUR FOODS</Link>
      </li>

      <li>
        <Link to="/secret">Secret</Link>
      </li>

      {user ? (
        <>
          <button onClick={handleLogOut} className="btn btn-ghost">
            Log Out
          </button>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section>
      <div>
        <div
          className={`navbar ${
            isScrolled
              ? "bg-white/70 backdrop-blur-lg shadow-md fixed top-0 left-0 w-full z-50 transition duration-300"
              : "bg-transparent"
          }`}
        >
          <div className="navbar-start">
            <div className="dropdown text-white">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow font-bold"
              >
                {links}
              </ul>
            </div>
            <a className="btn btn-ghost text-base md:text-xl italic h-full">
              Bistro <br /> Boss
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-bold">{links}</ul>
          </div>
          <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                {/* user login image dropdoen and logout */}
                <img
                  className="w-11 rounded-full"
                  src="https://i.ibb.co.com/82LpjHT/9439678.jpg"
                  alt=""
                />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <button className="btn font-bold italic">
                  Sign Out/Log Out
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;

// {
/* <div className="w-10 rounded-full">
                  {user && user.email ? (
                    <div className="flex items-center gap-2">
                      <img
                        className="w-12 rounded-full"
                        src="https://i.ibb.co.com/RSgnyVp/ajpeg.jpg"
                        alt=""
                      />
                      {user.email}
                    </div>
                  ) : (
                    <img
                      className="w-11 rounded-full"
                      src="https://i.ibb.co.com/82LpjHT/9439678.jpg"
                      alt=""
                    />
                  )}
                </div> */
// }

// {
//   user ? (
//     <>
//       <button onClick={handleSignOut} className="btn font-bold italic">
//         Sign Out/Log Out
//       </button>
//     </>
//   ) : (
//     <>
//       <Link to="/register" className="text-xl font-bold italic">
//         <li>
//           <h2>Register</h2>
//         </li>
//       </Link>
//       <Link to="/login" className="text-xl font-bold italic">
//         <li>
//           <h2>Sign In</h2>
//         </li>
//       </Link>
//     </>
//   );
// }
