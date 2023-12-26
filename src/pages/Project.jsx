import React from "react";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { BsChat, BsChatFill, BsFillSkipStartCircleFill } from "react-icons/bs";
import weather from "../assets/Weather.png";
import expense from "../assets/Expense.png";
import doctor from "../assets/Doctor.png";
import chitchat from "../assets/ChitChat.png";
import ecomm from "../assets/Ecomm.png";

const Project = () => {
  return (
    <Layout>
      <section className="bg-gray-800 pb-16 pt-16 text-indigo-100">
        <section className="min-h-[80vh] w-full">
          <div>
            <div className="pt-8">
              <h1 className="text-center text-xl font-semibold uppercase tracking-normal text-white md:text-3xl">
                My recent{" "}
                <Link
                  to={"https://github.com/NickeyNb"}
                  target={"_blank"}
                  className="font-semibold tracking-wider text-rose-600 hover:text-rose-700"
                >
                  {" "}
                  Projects
                </Link>
              </h1>
            </div>
            {/* Projects */}
            <div className="grid grid-cols-1 gap-x-6 gap-y-6 px-8 pt-12 sm:grid-cols-2 md:px-16 lg:grid-cols-3">
              {/* Expense-Flow */}
              <div className="flex flex-col justify-between rounded-lg bg-gray-900 px-4 pb-4 pt-2 shadow-lg shadow-gray-950 duration-300 ease-in-out hover:-translate-y-2 hover:shadow-gray-600">
                <h1 className="mb-1 text-center text-xl">Expense-Flow</h1>
                <div className="flex justify-center ">
                  <img src={expense} className="mb-2 w-60 " alt="" />
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
                    to={"https://expense-flow.vercel.app/"}
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
                      to={"https://expense-flow.vercel.app/"}
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

              {/* Apni-Market */}
              <div className="flex flex-col justify-between rounded-lg bg-gray-900 px-4 pb-4 pt-2 shadow-lg shadow-gray-950 duration-300 ease-in-out hover:-translate-y-2 hover:shadow-gray-600">
                <h1 className="mb-1 text-center text-xl">Apni-Market</h1>
                <div className="flex justify-center ">
                  <img src={ecomm} className="mb-2 w-60 " alt="" />
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

              {/* My-Care */}
              {/* <div className="shadow-300-950 flex flex-col justify-between rounded-lg bg-gray-900 px-4 pb-4 pt-2 shadow-lg duration-100 ease-in-out hover:-translate-y-2 hover:shadow-gray-600">
                <h1 className="mb-1 text-center text-xl">My-care</h1>
                <div className="flex justify-center ">
                  <img src={doctor} className="mb-2 w-60 " alt="" />
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
              </div> */}

              {/* Chit-Chat */}
              <div className="flex flex-col justify-between rounded-lg bg-gray-900 px-4 pb-4 pt-2 shadow-lg shadow-gray-950 duration-300 ease-in-out hover:-translate-y-2 hover:shadow-gray-600">
                <h1 className="mb-1 text-center text-xl">Chit-Chat</h1>
                <div className="flex justify-center ">
                  <img src={chitchat} className="mb-2 w-60 " alt="" />
                </div>
                <div>
                  <p>
                    Developed the the Real-Time Chat Application using the
                    Next.js, Typescript and Pusher which enable users to engage
                    in real-time chat conversations with each other.
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
                  <img src={weather} className="mb-2 w-60 " alt="" />
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
