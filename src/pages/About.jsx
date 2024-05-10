import React from "react";
import Layout from "../components/layout/Layout";
import { AiFillHtml5 } from "react-icons/ai";
import { BiGitBranch } from "react-icons/bi";
import { FaCss3Alt, FaRust } from "react-icons/fa";
import {
  TbBrandJavascript,
  TbBrandNodejs,
  TbBrandNextjs,
  TbBrandCpp,
  TbBrandVscode,
  TbBrandNpm,
  TbBrandRedux,
} from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiNodemon, SiPostman, SiTailwindcss } from "react-icons/si";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout>
      <section className="bg-gray-800 pt-16 text-indigo-100">
        <section className="min-h-[80vh] w-full">
          <div className="pt-8">
            <h1 className=" text-center text-xl font-semibold uppercase tracking-normal text-white md:text-3xl ">
              {" "}
              Know who{" "}
              <span className="font-semibold tracking-wider text-rose-600">
                {" "}
                I'm
              </span>
            </h1>
            <div className="px-4 pt-4 md:px-8">
              <p className="text-start tracking-wide">
                Hi Everyone I am{" "}
                <span className="text-xl font-semibold tracking-wider text-rose-500">
                  Nitin Bisht
                </span>{" "}
                from{" "}
                <span className=" tracking-wider text-rose-500">
                  Uttarakhand
                </span>
                , an undergrad at{" "}
                <Link
                  to={"https://www.gehu.ac.in/"}
                  className="italic tracking-wider text-rose-500"
                >
                  {" "}
                  Graphic Era Hill University{" "}
                </Link>{" "}
                pursuing a Bachelor of Technology majoring in{" "}
                <span className="italic tracking-wider text-rose-500">
                  {" "}
                  Computer Science and Engineering
                </span>
                . I am known for bringing about new inspiration and thoughtful
                ideas. I would describe myself as a passionate learner, who will
                always take ownership of difficult challanges whenever they
                occur, which is my strength. Now my goal is to utilize
                everything I have learned and get experience across different
                industries.
              </p>
            </div>

            {/* Academics */}
            <div className="flex w-full  flex-col items-center px-2 pb-16 pt-4 md:pt-12">
              <div className="w-full max-w-lg rounded-lg border border-solid  border-white py-1">
                <h1 className="border-b border-solid border-white py-1 text-center text-xl">
                  Academics
                </h1>
                <div className="space-y-2 px-1 py-4">
                  <div className="space-y-1">
                    <p className="text-center">
                      {" "}
                      B-Tech | Graphic Era Hill University | 2020-24{" "}
                    </p>
                    <p className="text-center text-rose-300">(8.5 CGPA)</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-center">
                      Intermediate | Beersheba Sr. Sec. School | 2019-20
                    </p>
                    <p className="text-center text-rose-300">(83.8%)</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-center">
                      High School | Beersheba Sr. Sec. School | 2017-18
                    </p>
                    <p className="text-center text-rose-300">(81%)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-gray-700 pb-24 pt-4">
              <h1 className=" text-center text-xl font-semibold uppercase tracking-normal text-white md:text-3xl ">
                Professional{" "}
                <span className="font-semibold tracking-wider text-rose-600">
                  Skills
                </span>
              </h1>
              <div className="grid grid-cols-1 gap-x-4 gap-y-4 px-8 pt-12 sm:grid-cols-2   md:grid-cols-3">
                <div className="rounded-lg bg-gray-800  px-2 py-1  shadow-md shadow-gray-500 hover:bg-gray-900 ">
                  <Link
                    to={"https://github.com/NickeyNb/rust-in-rust"}
                    target="_blank"
                    className="pt-2"
                  >
                    <FaRust className="w-full text-center text-6xl text-red-600 " />
                  </Link>
                  <p className="px-1 py-2">
                    Rust is a blazing fast and memory-efficient static compiled
                    language with a rich type system and ownership model.
                  </p>
                </div>
                <div className="rounded-lg  bg-gray-800 px-2 py-1 shadow-md shadow-gray-500 hover:bg-gray-900">
                  <Link
                    to={"https://leetcode.com/nitinnb31122002/"}
                    target="_blank"
                    className="pt-2"
                  >
                    <TbBrandJavascript className="w-full text-center text-6xl text-yellow-500" />
                  </Link>
                  <p className="px-1 py-2">
                    JavaScript is a versatile programming language used for web
                    development to add functionality to websites.
                  </p>
                </div>
                <div className="rounded-lg  bg-gray-800 px-2 py-1 shadow-md shadow-gray-500">
                  <i className="pt-2">
                    <AiFillHtml5 className="w-full text-center text-6xl text-orange-600" />
                  </i>
                  <p className="px-1 py-2">
                    It is the standard language for creating web pages. It
                    provides the structure and content of a web page.
                  </p>
                </div>
                <div className="rounded-lg bg-gray-800  px-2 py-1  shadow-md shadow-gray-500">
                  <i className="pt-2">
                    <FaCss3Alt className="w-full text-center text-6xl text-blue-600" />
                  </i>
                  <p className="px-1 py-2">
                    Cascading Style Sheets (CSS) is used to style and format the
                    layout of web pages.
                  </p>
                </div>

                <div className="rounded-lg  bg-gray-800 px-2 py-1 shadow-md shadow-gray-500">
                  <i className="pt-2">
                    <RiReactjsLine className="w-full text-center text-6xl text-teal-300" />
                  </i>
                  <p className="px-1 py-2">
                    ReactJS is a popular JavaScript library for building user
                    interfaces and single-page applications.
                  </p>
                </div>
                <div className="rounded-lg  bg-gray-800 px-2 py-1 shadow-md shadow-gray-500">
                  <i className="pt-2">
                    <TbBrandNextjs className="w-full text-center text-6xl text-gray-300" />
                  </i>
                  <p className="px-1 py-2">
                    Next.js is a framework for building server-rendered React
                    applications with features like routing and server-side
                    rendering.
                  </p>
                </div>
                <div className="rounded-lg  bg-gray-800 px-2 py-1 shadow-md shadow-gray-500">
                  <i className="pt-2">
                    <SiMongodb className="w-full text-center text-6xl text-green-500" />
                  </i>
                  <p className="px-1 py-2">
                    MongoDB is a NoSQL database used for storing and managing
                    data in a flexible, document-oriented format.
                  </p>
                </div>
                <div className="rounded-lg  bg-gray-800 px-2 py-1 shadow-md shadow-gray-500">
                  <i className="pt-2">
                    <TbBrandNodejs className="w-full text-center text-6xl text-emerald-600" />
                  </i>
                  <p className="px-1 py-2">
                    Express.js is a popular web application framework for
                    Node.js, used for building robust and scalable web
                    applications.
                  </p>
                </div>
                <div className="rounded-lg  bg-gray-800 px-2 py-1 shadow-md shadow-gray-500">
                  <i className="pt-2">
                    <SiTailwindcss className="w-full text-center text-6xl text-sky-500" />
                  </i>
                  <p className="px-1 py-2">
                    Tailwind CSS is a utility-first CSS framework that
                    simplifies the process of designing and styling web
                    applications.
                  </p>
                </div>
              </div>
            </div>

            {/* Tools I use*/}
            <div className="bg-gray-800 pb-24 pt-4">
              <h1 className="text-center text-xl font-semibold uppercase tracking-normal text-white md:text-3xl">
                <span className="font-semibold tracking-wider text-rose-600">
                  Tools
                </span>{" "}
                I Use
              </h1>
              <div className="grid grid-cols-1 gap-x-4 gap-y-4 px-8 pt-12 sm:grid-cols-2 md:grid-cols-3">
                <div className="rounded-lg  bg-gray-700 px-2 py-1 shadow-md shadow-gray-950">
                  <i className="pt-2">
                    <TbBrandVscode className="w-full text-center text-6xl text-sky-600" />{" "}
                  </i>
                  <p className="px-1 py-2">
                    Visual Studio Code (VS Code) is my preferred code editor. It
                    provides a wide range of extensions and features that
                    enhance my coding productivity.
                  </p>
                </div>

                <div className="k rounded-lg bg-gray-700 px-2 py-1 shadow-md shadow-gray-950">
                  <i className="pt-2">
                    <SiMongodb className="w-full text-center text-6xl text-green-500" />{" "}
                  </i>
                  <p className="px-1 py-2">
                    MongoDB Compass is a graphical user interface for MongoDB. I
                    use it to interact with MongoDB databases and perform
                    database operations efficiently.
                  </p>
                </div>

                <div className="rounded-lg  bg-gray-700 px-2 py-1 shadow-md shadow-gray-950">
                  <i className="pt-2">
                    <SiPostman className="w-full text-center text-6xl text-orange-400" />{" "}
                  </i>
                  <p className="px-1 py-2">
                    Postman is a powerful tool for API testing and development.
                    It helps me create and test API requests, making it easier
                    to work with APIs.
                  </p>
                </div>

                <div className="rounded-lg  bg-gray-700 px-2 py-1 shadow-md shadow-gray-950">
                  <i className="pt-2">
                    <TbBrandNpm className="w-full text-center text-6xl text-red-400" />{" "}
                  </i>
                  <p className="px-1 py-2">
                    NPM (Node Package Manager) is essential for managing
                    JavaScript packages and dependencies in my projects.
                  </p>
                </div>

                <div className="rounded-lg  bg-gray-700 px-2 py-1 shadow-md shadow-gray-950">
                  <i className="pt-2">
                    <BiGitBranch className="w-full text-center text-6xl text-orange-600" />
                  </i>
                  <p className="px-1 py-2">
                    Git is a version control system that I use for tracking
                    changes in my code, collaborating with others, and
                    maintaining code history.
                  </p>
                </div>

                <div className="rounded-lg  bg-gray-700 px-2 py-1 shadow-md shadow-gray-950">
                  <i className="pt-2">
                    <RiReactjsLine className="w-full text-center text-6xl text-teal-400" />{" "}
                  </i>
                  <p className="px-1 py-2">
                    React Developer Tools is a browser extension that helps me
                    inspect and debug React components in my web applications.
                  </p>
                </div>

                <div className="rounded-lg  bg-gray-700 px-2 py-1 shadow-md shadow-gray-950">
                  <i className="pt-2">
                    <TbBrandRedux className="w-full text-center text-6xl text-teal-400" />{" "}
                  </i>
                  <p className="px-1 py-2">
                    Redux DevTools is a browser extension for debugging Redux
                    state management in my React applications.
                  </p>
                </div>

                {/* NodeMon */}
                <div className="rounded-lg bg-gray-700 px-2 py-1 shadow-md shadow-gray-950">
                  <i className="pt-2">
                    <SiNodemon className="w-full text-center text-6xl text-emerald-500" />{" "}
                    {/* Replace YourIconComponent with the appropriate icon */}
                  </i>
                  <p className="px-1 py-2">
                    Nodemon is a utility that automatically restarts Node.js
                    applications when changes are detected, making development
                    more efficient.
                  </p>
                </div>
              </div>
            </div>

            {/* Days I code */}
            {/* <div>Days i code</div> */}
          </div>
        </section>
      </section>
    </Layout>
  );
};

const AboutBox = ({ linkTo, Icon, paragraph }) => {
  return (
    <div className="rounded-lg  bg-gray-800 px-2 py-1 shadow-md shadow-gray-500 hover:bg-gray-900">
      <Link to={linkTo} target="_blank" className="pt-2">
        <Icon className="w-full text-center text-6xl text-yellow-500" />
      </Link>
      <p className="px-1 py-2">{paragraph}</p>
    </div>
  );
};

export default About;
