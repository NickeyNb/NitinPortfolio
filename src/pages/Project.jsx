import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { BsChatFill } from "react-icons/bs";
import weather from "../assets/Weather.png";
import expense from "../assets/Expense.png";
import chitchat from "../assets/ChitChat.png";
import ecomm from "../assets/Ecomm.png";

const Project = () => {
  const projects = [
    {
      id: 1,
      heading: "Expense-Flow",
      imgSrc: expense,
      imgAlt: "Expense Management System",
      paragraph:
        "A comprehensive Expense Management System using MERN stack that helps users track and manage their financial transactions efficiently.",
      gitLink: "https://github.com/NickeyNb/ExpenseFlow",
      proLink: "https://expense-flow.vercel.app/",
      tags: ["MERN", "Redux", "JWT"],
    },
    {
      id: 2,
      heading: "Apni-Market",
      imgSrc: ecomm,
      imgAlt: "E-commerce Website",
      paragraph:
        "Full-featured E-commerce platform built with MERN stack offering secure online shopping and admin management tools.",
      gitLink: "https://github.com/NickeyNb/ApniMarket",
      proLink: "https://github.com/NickeyNb/ApniMarket",
      tags: ["MERN", "Stripe", "JWT"],
    },
    {
      id: 3,
      heading: "Chit-Chat",
      imgSrc: chitchat,
      imgAlt: "Real-Time Chat Application",
      paragraph:
        "Real-time messaging application with instant updates using Socket.io, React and Node.js.",
      gitLink: "https://github.com/NickeyNb/Chit-Chat-Client",
      proLink: "https://github.com/NickeyNb/Chit-Chat-Client",
      tags: ["Socket.io", "React", "Node.js"],
    },
    {
      id: 4,
      heading: "Weather-App",
      imgSrc: weather,
      imgAlt: "Weather Application",
      paragraph:
        "Real-time weather application using Node.js with accurate weather data from API integration.",
      gitLink: "https://github.com/NickeyNb/WeatherApp",
      proLink: "https://nickeynb.github.io/WeatherApp/",
      tags: ["Node.js", "API", "Geolocation"],
    },
    {
      id: 5,
      heading: "Admin-Dashboard",
      imgSrc: chitchat,
      imgAlt: "Admin Dashboard",
      paragraph:
        "Interactive admin dashboard with data visualization using React, TypeScript and Chart.js.",
      gitLink: "https://github.com/NickeyNb/",
      proLink: "https://github.com/NickeyNb",
      tags: ["TypeScript", "Chart.js", "React"],
    },
  ];

  return (
    <Layout>
      <section className="min-h-screen bg-gray-800 py-20 text-indigo-100">
        <div className="container mx-auto px-4">
          <h1 className="mb-2 text-center text-3xl font-bold uppercase tracking-wide text-white md:text-4xl">
            My <span className="text-rose-500">Projects</span>
          </h1>
          <p className="mb-12 text-center text-gray-400">
            Here are some of my recent works. Check out my{" "}
            <Link
              to="https://github.com/NickeyNb"
              target="_blank"
              className="font-medium text-rose-500 hover:underline"
            >
              GitHub
            </Link>{" "}
            for more.
          </p>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

const ProjectCard = ({
  heading,
  imgSrc,
  imgAlt,
  paragraph,
  gitLink,
  proLink,
  tags,
}) => {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl bg-gray-900 shadow-lg transition-all duration-300 ">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imgSrc}
          alt={imgAlt}
          className="h-full w-full object-contain py-4 transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-xl font-bold text-white">{heading}</h3>

        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-gray-800 px-3 py-1 text-xs font-medium text-rose-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="mb-6 flex-1 text-gray-400">{paragraph}</p>

        <div className="flex items-center justify-between">
          <div className="flex space-x-3">
            <Link
              to={gitLink}
              target="_blank"
              className="flex items-center rounded-lg bg-gray-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-rose-600"
              aria-label="GitHub"
            >
              <FaGithub className="mr-2" />
              Code
            </Link>
            <Link
              to={proLink}
              target="_blank"
              className="flex items-center rounded-lg border border-gray-700 bg-transparent px-4 py-2 text-sm font-medium text-white transition hover:border-rose-600 hover:text-rose-500"
              aria-label="Live Demo"
            >
              <FiExternalLink className="mr-2" />
              Demo
            </Link>
          </div>
          <Link
            to="/contact-me"
            className="rounded-full p-2 text-gray-400 transition hover:bg-gray-800 hover:text-rose-500"
            aria-label="Contact for feedback"
          >
            <BsChatFill />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
