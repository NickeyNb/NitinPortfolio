import React from "react";
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import logo from "../assets/mainLogo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between space-y-8 md:flex-row md:space-y-0">
          {/* Logo */}
          <div className="flex w-full items-center justify-center md:w-auto md:justify-start">
            <Link
              to="https://nitin-portfolio-coral.vercel.app/"
              className="transition hover:opacity-80"
              aria-label="Home"
            >
              <img
                src={logo}
                alt="Nitin Bisht Logo"
                className="h-16 w-auto"
                loading="lazy"
              />
            </Link>
          </div>

          {/* Copyright */}
          <div className="flex flex-col items-center space-y-2 text-center md:flex-1">
            <p className="flex items-center text-sm md:text-base">
              Crafted with{" "}
              <span className="mx-1 text-xl text-rose-600">❤</span> by Nitin
              Bisht
            </p>
            <p className="text-xs text-gray-500 md:text-sm">
              Copyright © {currentYear} | All Rights Reserved
            </p>
          </div>

          {/* Social Links */}
          <div className="flex w-full justify-center space-x-6 md:w-auto md:justify-end">
            <Link
              to="https://www.linkedin.com/in/nitin-bisht-3998091b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 transition hover:text-rose-500 md:text-3xl"
              aria-label="LinkedIn"
            >
              <AiFillLinkedin />
            </Link>
            <Link
              to="https://github.com/NickeyNb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 transition hover:text-rose-500 md:text-3xl"
              aria-label="GitHub"
            >
              <AiFillGithub />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
