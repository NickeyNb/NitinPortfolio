import React, { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { RiCloseLine, RiCrossLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="fixed left-0 right-0 top-0 z-10 bg-gray-950">
      <section className="text-white">
        <div className="relative flex items-center justify-between px-8 py-4">
          {/* Hamburger or cross */}
          <div
            className="order-1 cursor-pointer space-y-0.5 md:hidden "
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <div>
                <RiCloseLine className="text-2xl" />
              </div>
            ) : (
              <div>
                <FaHamburger className="text-2xl" />
              </div>
            )}
          </div>
          {menuOpen ? (
            <nav className="absolute left-0 top-16 w-full bg-gray-900 md:hidden">
              <ul className=" flex w-full flex-col justify-between space-y-4 py-4 text-center text-lg tracking-normal">
                <li>
                  <NavLink
                    to={"/src/assets/NitinResume.pdf"}
                    target="_blank"
                    download="NitinResume.pdf"
                    className="hover:text-rose-600"
                  >
                    Resume
                  </NavLink>
                </li>
                <li className="">
                  <NavLink to={"/"} className="hover:text-rose-600">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/about-me"} className="hover:text-rose-600">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/my-projects"} className="hover:text-rose-600">
                    Projects
                  </NavLink>
                </li>
              </ul>
            </nav>
          ) : null}
          <div className="order-2  text-2xl font-semibold uppercase tracking-normal text-rose-500 md:order-1 md:w-1/5 md:pl-0">
            <NavLink to={"/src/assets/ResumeNitin.pdf"} target="_blank">
              Nitin
            </NavLink>
          </div>
          <nav className="order-2 hidden  md:flex md:w-3/5">
            <ul className="flex w-full justify-between">
              <li className="">
                <NavLink to={"/"} className="hover:text-rose-600">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/about-me"} className="hover:text-rose-600">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to={"/my-projects"} className="hover:text-rose-600">
                  Projects
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="order-3  flex justify-end  md:w-1/5">
            <button className="rounded-md  border border-solid border-white bg-rose-600 px-2 py-1 text-end hover:bg-rose-700">
              <Link to={"/contact-me"} className="w-full">
                Contact
              </Link>
            </button>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
