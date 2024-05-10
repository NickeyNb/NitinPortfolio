import React from "react";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { BsChat, BsChatFill, BsFillSkipStartCircleFill } from "react-icons/bs";
import weather from "../assets/Weather.png";
import expense from "../assets/Expense.png";
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
              <IndividualProject
                heading={"Expense-Flow"}
                imgSrc={expense}
                imgAlt={"Expense Image"}
                paragraph={`Developed a comprehensive Expense Management System using
                    MERN stack, with the primary objective of delivering an
                    efficient, user-friendly, and dependable platform for
                    individuals to oversee their financial transactions`}
                gitLink={"https://github.com/NickeyNb/ExpenseFlow"}
                proLink={"https://expense-flow.vercel.app/"}
              />
              {/* Apni-Market */}
              <IndividualProject
                heading={"Apni-Market"}
                imgSrc={ecomm}
                imgAlt={"Apni-Market Image"}
                paragraph={`Build the E-commerce Website using the MERN stack which
                provides customers with a seamless and secure online
                shopping experience, while offering efficient management
                tools for the administrators to handle products, orders, and
                user data.`}
                gitLink={"https://github.com/NickeyNb/ApniMarket"}
                proLink={"https://github.com/NickeyNb/ApniMarket"}
              />

              {/* Chit-Chat */}
              <IndividualProject
                heading={"Chit-Chat"}
                imgSrc={chitchat}
                imgAlt={"Chit-Chat Image"}
                paragraph={`Developed the the Real-Time Chat Application using the
                socket.io, react and nodejs which enable users to engage
                in real-time chat conversations with each other.`}
                gitLink={"https://github.com/NickeyNb/Chit-Chat-Client"}
                proLink={"https://github.com/NickeyNb/Chit-Chat-Client"}
              />

              {/* Weather-Application */}
              <IndividualProject
                heading={"Weather-App"}
                imgSrc={weather}
                imgAlt={"Weather Image"}
                paragraph={`  Developed a real-time weather application using Nodejs, that
                uses weather API to tell the weather of a particular region
                with an accuracy of 99%`}
                gitLink={"https://github.com/NickeyNb/WeatherApp"}
                proLink={"nickeynb.github.io/WeatherApp/"}
              />
              {/* Admin-Dashboard */}
              <IndividualProject
                heading={"Admin-Dashboard"}
                imgSrc={chitchat}
                imgAlt={"Admin-Dashboard Image"}
                paragraph={`Created an admin-dasbhoard using Typescript, Reactjs and chart.js, that
                shows an eye-pleasing dashboard to show various data in a chart form which can be integrated in various Admin related projects.`}
                gitLink={"https://github.com/NickeyNb/"}
                proLink={"https://github.com/NickeyNb"}
              />
              {/* Hotel-Booking Website */}
              {/* <IndividualProject
                heading={"Hotel-Booking Website"}
                imgSrc={chitchat}
                imgAlt={"Hotel-Booking Website Image"}
                paragraph={`Created an admin-dasbhoard using Typescript, Reactjs and chart.js, that
                shows an eye-pleasing dashboard to show various data in a chart form which can be integrated in various Admin related projects.`}
                gitLink={"https://github.com/NickeyNb/"}
                proLink={"https://github.com/NickeyNb"}
              /> */}
            </div>
          </div>
        </section>
      </section>
    </Layout>
  );
};

const IndividualProject = ({
  heading,
  imgSrc,
  imgAlt,
  paragraph,
  gitLink,
  proLink,
}) => {
  return (
    <div className="flex flex-col justify-between rounded-lg bg-gray-900 px-4 pb-4 pt-2 shadow-lg shadow-gray-950 duration-300 ease-in-out hover:-translate-y-2 hover:shadow-gray-600">
      <h1 className="mb-1 text-center text-xl">{heading}</h1>
      <div className="flex justify-center ">
        <img src={imgSrc} className="mb-2 w-60 " alt={imgAlt} />
      </div>
      <div>
        <p>{paragraph}</p>
      </div>
      <div className="mt-3 flex justify-around md:hidden">
        <Link
          to={gitLink}
          target="_blank"
          className="rounded-md  border border-solid border-white bg-rose-600 px-2 py-1 text-end hover:bg-rose-700"
        >
          <FaGithub />
        </Link>
        <Link
          to={proLink}
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
          <Link to={gitLink} target="_blank">
            Github
          </Link>
        </button>
        <button className="rounded-md  border border-solid border-white bg-rose-600 px-2 py-1 text-end hover:bg-rose-700">
          <Link to={proLink} target="_blank">
            Demo
          </Link>
        </button>
        <button className="rounded-md  border border-solid border-white bg-rose-600 px-2 py-1 text-end hover:bg-rose-700">
          <Link to="/contact-me"> Feedback </Link>
        </button>
      </div>
    </div>
  );
};
export default Project;
