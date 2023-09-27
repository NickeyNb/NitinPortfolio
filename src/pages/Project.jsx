import React from "react";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { BsChat, BsChatFill, BsFillSkipStartCircleFill } from "react-icons/bs";
const Project = () => {
  return (
    <Layout>
      <section className="bg-gray-800 pb-16 pt-16 text-indigo-100">
        <section className="min-h-[80vh] w-full">
          <div>
            <div className="pt-8">
              <h1 className="text-center text-xl font-semibold uppercase tracking-normal text-white md:text-3xl">
                My recent{" "}
                <span className="font-semibold tracking-wider text-rose-600">
                  {" "}
                  Projects
                </span>
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-6 px-8 pt-12 sm:grid-cols-2 md:px-16 lg:grid-cols-3">
              <div className="flex flex-col justify-between rounded-lg bg-gray-900 px-4 pb-4 pt-2 shadow-lg shadow-gray-950 duration-300 ease-in-out hover:-translate-y-2 hover:shadow-gray-600">
                <h1 className="mb-1 text-center text-xl">Expense-Flow</h1>
                <div className="flex justify-center ">
                  <img
                    src="/src/assets/Expense.png"
                    className="mb-2 w-60 "
                    alt=""
                  />
                </div>
                <div>
                  <p>
                    Developed a comprehensive Expense Management System using
                    MERN stack, with the primary objective of delivering an
                    efficient, user-friendly, and dependable platform for
                    individuals to oversee their financial transactions{" "}
                  </p>
                </div>
                <div className="mt-3 flex justify-around md:hidden">
                  <Link
                    to={"https://github.com/NickeyNb"}
                    target="_blank"
                    className="rounded-md  border border-solid border-white bg-rose-600 px-2 py-1 text-end hover:bg-rose-700"
                  >
                    <FaGithub />
                  </Link>
                  <Link
                    to={"https://github.com/NickeyNb"}
                    target="_blank"
                    className="rounded-md  border border-solid border-white bg-rose-600 px-2 py-1 text-end hover:bg-rose-700"
                  >
                    <BsFillSkipStartCircleFill />
                  </Link>
                  <Link
                    to={"/contact-me"}
                    className="rounded-md  border border-solid border-white bg-rose-600 px-2 py-1 text-end hover:bg-rose-700"
                  >
                    <BsChatFill />
                  </Link>
                </div>
                <div className="mt-3 hidden justify-between md:flex">
                  <button className=" rounded-md  border border-solid border-white bg-rose-600 px-2 py-1 text-end hover:bg-rose-700">
                    <Link to={"https://github.com/NickeyNb"} target="_blank">
                      {" "}
                      Github{" "}
                    </Link>
                  </button>
                  <button className="rounded-md  border border-solid border-white bg-rose-600 px-2 py-1 text-end hover:bg-rose-700">
                    <Link to={"https://github.com/NickeyNb"} target="_blank">
                      {" "}
                      Demo{" "}
                    </Link>
                  </button>
                  <button className="rounded-md  border border-solid border-white bg-rose-600 px-2 py-1 text-end hover:bg-rose-700">
                    {" "}
                    <Link to="/contact-me"> Feedback </Link>
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-lg bg-gray-900 px-4 pb-4 pt-2 shadow-lg shadow-gray-950 duration-300 ease-in-out hover:-translate-y-2 hover:shadow-gray-600">
                <h1 className="mb-1 text-center text-xl">Apni-Market</h1>
                <div className="flex justify-center ">
                  <img
                    src="/src/assets/Ecomm.png"
                    className="mb-2 w-60 "
                    alt=""
                  />
                </div>
                <div>
                  <p>
                    Build the E-commerce Website using the MERN stack which
                    provides customers with a seamless and secure online
                    shopping experience, while offering efficient management
                    tools for the administrators to handle products, orders, and
                    user data.
                  </p>
                </div>
                <div className="mt-3 flex justify-around md:hidden">
                  <Link
                    to={"https://github.com/NickeyNb"}
                    target="_blank"
                    className="rounded-md  border border-solid border-white bg-rose-600 px-2 py-1 text-end hover:bg-rose-700"
                  >
                    <FaGithub />
                  </Link>
                  <Link
                    to={"https://github.com/NickeyNb"}
                    target="_blank"
                    className="rounded-md  border border-solid border-white bg-rose-600 px-2 py-1 text-end hover:bg-rose-700"
                  >
                    <BsFillSkipStartCircleFill />
                  </Link>
                  <Link
                    to={"/contact-me"}
                    className="rounded-md  border border-solid border-white bg-rose-600 px-2 py-1 text-end hover:bg-rose-700"
                  >
                    <BsChatFill />
                  </Link>
                </div>
                <div className="mt-3 hidden justify-between md:flex">
                  <button className=" rounded-md  border border-solid border-white bg-rose-600 px-2 py-1 text-end hover:bg-rose-700">
                    <Link to={"https://github.com/NickeyNb"} target="_blank">
                      {" "}
                      Github{" "}
                    </Link>
                  </button>
                  <button className="rounded-md  border border-solid border-white bg-rose-600 px-2 py-1 text-end hover:bg-rose-700">
                    <Link to={"https://github.com/NickeyNb"} target="_blank">
                      {" "}
                      Demo{" "}
                    </Link>
                  </button>
                  <button className="rounded-md  border border-solid border-white bg-rose-600 px-2 py-1 text-end hover:bg-rose-700">
                    {" "}
                    <Link to="/contact-me"> Feedback </Link>
                  </button>
                </div>
              </div>
              <div className="shadow-300-950 flex flex-col justify-between rounded-lg bg-gray-900 px-4 pb-4 pt-2 shadow-lg duration-100 ease-in-out hover:-translate-y-2 hover:shadow-gray-600">
                <h1 className="mb-1 text-center text-xl">My-care</h1>
                <div className="flex justify-center ">
                  <img
                    src="/src/assets/Doctor.png"
                    className="mb-2 w-60 "
                    alt=""
                  />
                </div>
                <div>
                  <p>
                    Build the Doctor's Appointment System using the MERN stack
                    which aims to provide an efficient, user-friendly, and
                    reliable platform for both patients and doctors to manage
                    the appointments, leading to improved patient-doctor
                    interactions and streamlined scheduling processes.
                  </p>
                </div>
                <div className="mt-3 flex justify-around md:hidden">
                  <Link
                    to={"https://github.com/NickeyNb"}
                    target="_blank"
                    className="rounded-md  border border-solid border-white bg-rose-600 px-2 py-1 text-end hover:bg-rose-700"
                  >
                    <FaGithub />
                  </Link>
                  <Link
                    to={"https://github.com/NickeyNb"}
                    target="_blank"
                    className="rounded-md  border border-solid border-white bg-rose-600 px-2 py-1 text-end hover:bg-rose-700"
                  >
                    <BsFillSkipStartCircleFill />
                  </Link>
                  <Link
                    to={"/contact-me"}
                    className="rounded-md  border border-solid border-white bg-rose-600 px-2 py-1 text-end hover:bg-rose-700"
                  >
                    <BsChatFill />
                  </Link>
                </div>
                <div className="mt-3 hidden justify-between md:flex">
                  <button className=" rounded-md  border border-solid border-white bg-rose-600 px-2 py-1 text-end hover:bg-rose-700">
                    <Link to={"https://github.com/NickeyNb"} target="_blank">
                      {" "}
                      Github{" "}
                    </Link>
                  </button>
                  <button className="rounded-md  border border-solid border-white bg-rose-600 px-2 py-1 text-end hover:bg-rose-700">
                    <Link to={"https://github.com/NickeyNb"} target="_blank">
                      {" "}
                      Demo{" "}
                    </Link>
                  </button>
                  <button className="rounded-md  border border-solid border-white bg-rose-600 px-2 py-1 text-end hover:bg-rose-700">
                    {" "}
                    <Link to="/contact-me"> Feedback </Link>
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-lg bg-gray-900 px-4 pb-4 pt-2 shadow-lg shadow-gray-950 duration-300 ease-in-out hover:-translate-y-2 hover:shadow-gray-600">
                <h1 className="mb-1 text-center text-xl">Chit-Chat</h1>
                <div className="flex justify-center ">
                  <img
                    src="/src/assets/ChitChat.png"
                    className="mb-2 w-60 "
                    alt=""
                  />
                </div>
                <div>
                  <p>
                    Developing the the Real-Time Chat Application with
                    integrated AI Bot using the MERN stack and Socket.io enables
                    users to engage in real-time chat conversations with each
                    other while also enjoying the benefits of an AI bot's
                    assistance and interactivity
                  </p>
                </div>
                <div className="mt-3 flex justify-around md:hidden">
                  <Link
                    to={"https://github.com/NickeyNb"}
                    target="_blank"
                    className="rounded-md  border border-solid border-white bg-rose-600 px-2 py-1 text-end hover:bg-rose-700"
                  >
                    <FaGithub />
                  </Link>
                  <Link
                    to={"https://github.com/NickeyNb"}
                    target="_blank"
                    className="rounded-md  border border-solid border-white bg-rose-600 px-2 py-1 text-end hover:bg-rose-700"
                  >
                    <BsFillSkipStartCircleFill />
                  </Link>
                  <Link
                    to={"/contact-me"}
                    className="rounded-md  border border-solid border-white bg-rose-600 px-2 py-1 text-end hover:bg-rose-700"
                  >
                    <BsChatFill />
                  </Link>
                </div>
                <div className="mt-3 hidden justify-between md:flex">
                  <button className=" rounded-md  border border-solid border-white bg-rose-600 px-2 py-1 text-end hover:bg-rose-700">
                    <Link to={"https://github.com/NickeyNb"} target="_blank">
                      {" "}
                      Github{" "}
                    </Link>
                  </button>
                  <button className="rounded-md  border border-solid border-white bg-rose-600 px-2 py-1 text-end hover:bg-rose-700">
                    <Link to={"https://github.com/NickeyNb"} target="_blank">
                      {" "}
                      Demo{" "}
                    </Link>
                  </button>
                  <button className="rounded-md  border border-solid border-white bg-rose-600 px-2 py-1 text-end hover:bg-rose-700">
                    {" "}
                    <Link to="/contact-me"> Feedback </Link>
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-lg bg-gray-900 px-4 pb-4 pt-2 shadow-lg shadow-gray-950 duration-300 ease-in-out hover:-translate-y-2 hover:shadow-gray-600">
                <h1 className="mb-1 text-center text-xl">Weather-App</h1>
                <div className="flex justify-center ">
                  <img
                    src="/src/assets/Weather.png"
                    className="mb-2 w-60 "
                    alt=""
                  />
                </div>
                <div>
                  <p>
                    Developed a real-time weather application using Nodejs, that
                    uses weather API to tell the weather of a particular region
                    with an accuracy of 99%
                  </p>
                </div>
                <div className="mt-3 flex justify-around md:hidden">
                  <Link
                    to={"https://github.com/NickeyNb"}
                    target="_blank"
                    className="rounded-md  border border-solid border-white bg-rose-600 px-2 py-1 text-end hover:bg-rose-700"
                  >
                    <FaGithub />
                  </Link>
                  <Link
                    to={"https://nickeynb.github.io/WeatherApp/"}
                    target="_blank"
                    className="rounded-md  border border-solid border-white bg-rose-600 px-2 py-1 text-end hover:bg-rose-700"
                  >
                    <BsFillSkipStartCircleFill />
                  </Link>
                  <Link
                    to={"/contact-me"}
                    className="rounded-md  border border-solid border-white bg-rose-600 px-2 py-1 text-end hover:bg-rose-700"
                  >
                    <BsChatFill />
                  </Link>
                </div>
                <div className="mt-3 hidden justify-between md:flex">
                  <button className=" rounded-md  border border-solid border-white bg-rose-600 px-2 py-1 text-end hover:bg-rose-700">
                    <Link to={"https://github.com/NickeyNb"} target="_blank">
                      {" "}
                      Github{" "}
                    </Link>
                  </button>
                  <button className="rounded-md  border border-solid border-white bg-rose-600 px-2 py-1 text-end hover:bg-rose-700">
                    <Link
                      to={"https://nickeynb.github.io/WeatherApp/"}
                      target="_blank"
                    >
                      {" "}
                      Demo{" "}
                    </Link>
                  </button>
                  <button className="rounded-md  border border-solid border-white bg-rose-600 px-2 py-1 text-end hover:bg-rose-700">
                    {" "}
                    <Link to="/contact-me"> Feedback </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </Layout>
  );
};

export default Project;