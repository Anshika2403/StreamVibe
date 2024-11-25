import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  //   const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      name: "Home",
      slug: "/",
      // active: true,
    },
    {
      name: "Movies",
      slug: "/movies",
      // active:!authStatus,
    },
    {
      name: "Support",
      slug: "/support",
      // active: !authStatus,
    },
    {
      name: "Subscriptions",
      slug: "/subscription",
      // active: !authStatus,
    },
  ];

  return (
    <header className="z-20 relative right-16 -top-1">
      <nav className="bg-black-nav border-4 border-nav-bor rounded-lg w-full h-20 hidden md:block ">
        <ul className="flex justify-center items-center h-full ms-0 pe-9">
          {navItems.map((nav) => (
            <li
              key={nav.name}
              className="lg:px-2 lg:max-w-28 md:mr-1 md:max-w-20 md:px-0"
            >
              <button
                onClick={() => navigate(nav.slug)}
                style={{
                  backgroundColor:
                    location.pathname === nav.slug ? "#1A1A1A" : null,
                  color: "#BFBFBF",
                  width: "7rem",
                  height: "3.1rem",
                  borderRadius: "7px",
                }}
              >
                {nav.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="sm:block md:hidden absolute top-6">
        <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {!isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            )}
          </button>
        </div>

        {isOpen && (
          <ul className="md:hidden absolute top-12 right-2  bg-black-nav border-4 border-nav-bor rounded-lg w-44">
            {navItems.map((nav) => (
              <li key={nav.name} className="">
                <button
                  onClick={() => {
                    navigate(nav.slug);
                    setIsOpen(false);
                  }}
                  style={{
                    backgroundColor:
                      location.pathname === nav.slug ? "#1A1A1A" : null,
                    color: "#BFBFBF",
                    width: "100%",
                    padding: "1rem",
                    textAlign: "center",
                    borderRadius: "7px",
                  }}
                >
                  {nav.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
