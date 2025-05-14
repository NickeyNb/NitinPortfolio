import React from "react";
import Layout from "../components/layout/Layout";
import Introduction from "./Introduction";
import Typewriter from "typewriter-effect";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaLanguage } from "react-icons/fa";
import me from "../assets/me.png";
import resume from "../assets/NitinResume.pdf";

const Home = () => {
  return (
    <Layout>
      <main className="mt-16 min-h-[90vh] bg-gray-900 text-indigo-100">
        <section className="flex w-full flex-col">
          <header className="flex flex-col-reverse items-center pb-16 pt-12 md:flex-row md:items-center md:justify-between md:pb-24 md:pt-20">
            {/* Left Text Section */}
            <div className="flex flex-col justify-center px-6 text-center md:order-1 md:pl-16 md:text-left lg:pl-24 xl:pl-44">
              <div className="mt-8 space-y-2 md:mt-0 md:space-y-4">
                <h1 className="text-2xl tracking-normal md:text-3xl">
                  Hello, I'm
                </h1>
                <h1 className="text-4xl font-semibold tracking-wide text-rose-600 sm:text-5xl md:text-6xl">
                  Nitin Bisht
                </h1>
                <h2 className="text-xl text-gray-300 md:text-2xl">
                  Software Developer @Accenture
                </h2>
              </div>

              <div className="my-4 text-xl sm:text-2xl md:my-6">
                <Typewriter
                  options={{
                    strings: [
                      "Learner",
                      "MERN Stack Developer",
                      "Full Stack Engineer",
                      "Problem Solver",
                    ],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: "typewriterpara",
                  }}
                />
              </div>

              {/* Language Skills */}
              {/* <div className="my-3 flex items-center justify-center gap-2 text-sm text-gray-300 md:justify-start md:text-base">
                <FaLanguage className="text-rose-500" />
                <span>Basic Japanese & Russian</span>
              </div> */}

              {/* Social Links */}
              <div className="mt-4 flex justify-center space-x-5 text-2xl sm:text-3xl md:justify-start">
                <a
                  href="https://www.linkedin.com/in/nitin-bisht-3998091b6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-200 hover:scale-110 hover:text-rose-600"
                  aria-label="LinkedIn Profile"
                >
                  <AiFillLinkedin />
                </a>

                <a
                  href="https://github.com/NickeyNb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-200 hover:scale-110 hover:text-rose-600"
                  aria-label="GitHub Profile"
                >
                  <AiFillGithub />
                </a>
              </div>

              {/* Download CV */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row md:mt-10">
                <a
                  href={resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="rounded-lg border border-rose-600 bg-rose-600 px-6 py-3 font-semibold tracking-normal text-white transition-all hover:bg-rose-700 hover:shadow-lg hover:shadow-rose-600/20"
                >
                  Download CV
                </a>
                <a
                  href="/contact-me"
                  className="rounded-lg border border-rose-600 px-6 py-3 font-semibold tracking-normal text-rose-600 transition-all hover:bg-rose-600 hover:text-white hover:shadow-lg hover:shadow-rose-600/20"
                >
                  Contact Me
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex items-center justify-center md:order-2 md:pr-16 lg:pr-24 xl:pr-44">
              <div className="relative">
                <img
                  className="w-[18rem] rounded-3xl shadow-xl ring-2 ring-rose-600/30 md:w-[22rem]"
                  src={me}
                  alt="Nitin Bisht - Software Developer"
                  loading="eager"
                />
                <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-rose-600/20 to-transparent blur-lg"></div>
              </div>
            </div>
          </header>

          {/* Introduction Section */}
          <section className="bg-gray-800 pb-24 pt-16">
            <Introduction />
          </section>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
