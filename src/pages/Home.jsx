import React from "react";
import Layout from "../components/layout/Layout";
import Introduction from "./Introduction";
import Typewriter from "typewriter-effect";
import { NavLink } from "react-router-dom";
import {
  AiFillInstagram,
  AiFillGithub,
  AiFillLinkedin,
  AiFillWechat,
} from "react-icons/ai";
const Home = () => {
  return (
    <Layout>
      <section className="mt-16 bg-gray-900 text-indigo-100">
        <section className=" flex min-h-[80vh] w-full flex-col ">
          <div className="flex w-full flex-col items-center pb-24 pt-20  md:flex-row md:items-start md:justify-between">
            <div className="order-2 flex flex-col justify-center md:order-1 md:pl-24 lg:pl-44">
              <div className="mt-16 space-y-1 md:order-none md:space-y-4">
                <h1 className="text-2xl tracking-normal">Hi, I am</h1>
                <h1 className="text-5xl font-semibold tracking-wide text-rose-600">
                  Nitin Bisht
                </h1>
              </div>
              <div className="my-2 text-2xl md:my-4">
                <Typewriter
                  options={{
                    strings: ["A Learner", "A Programmer", "A Developer"],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: "typewriterpara",
                  }}
                />
              </div>
              {/* Links */}
              <div className="order-3  mt-4 flex space-x-4 text-2xl md:order-none md:text-3xl">
                <NavLink
                  to="https://www.linkedin.com/in/nitin-bisht-3998091b6/"
                  target="_blank"
                >
                  <i>
                    <AiFillWechat className="hover:text-rose-700" />{" "}
                  </i>
                </NavLink>
                <NavLink
                  to="https://www.linkedin.com/in/nitin-bisht-3998091b6/"
                  target="_blank"
                >
                  <i>
                    <AiFillLinkedin className="hover:text-rose-700" />
                  </i>
                </NavLink>
                <NavLink to="https://github.com/NickeyNb" target="_blank">
                  <i>
                    <AiFillGithub className="hover:text-rose-700" />{" "}
                  </i>
                </NavLink>

                <NavLink to="https://github.com/NickeyNb" target="_blank">
                  <i>
                    <AiFillInstagram className="hover:text-rose-700" />{" "}
                  </i>
                </NavLink>
              </div>
              <div className="order-4 mt-8 md:mt-8">
                <NavLink
                  to={"/src/assets/NitinResume.pdf"}
                  target="_blank"
                  download="NitinResume.pdf"
                  className=" rounded-lg border border-solid border-white bg-rose-600 px-4 py-2 font-semibold tracking-normal hover:bg-rose-700 "
                >
                  Download CV
                </NavLink>
              </div>
            </div>
            {/* My profile image */}
            <div className="order-1 flex items-center justify-center px-2 md:order-2 md:pr-20 lg:pr-48">
              <img
                className="w-80 rounded-full"
                src={"/src/assets/me.png"}
                alt="Nitin Profile Photo"
              />
            </div>
          </div>
          {/* Introduction */}
          <div className="bg-gray-800 pb-24 pt-16">
            <Introduction />
          </div>
        </section>
      </section>
    </Layout>
  );
};

export default Home;
