import React, { useState, useEffect } from "react";
import { FaHamburger } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import resume from "../assets/NitinResume.pdf";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900/95 shadow-lg backdrop-blur-sm" : "bg-gray-950"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold uppercase tracking-wider text-rose-500 transition hover:text-rose-400"
            onClick={closeMenu}
          >
            Nitin
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `text-lg font-medium transition hover:text-rose-500 ${
                      isActive ? "text-rose-500" : "text-white"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about-me"
                  className={({ isActive }) =>
                    `text-lg font-medium transition hover:text-rose-500 ${
                      isActive ? "text-rose-500" : "text-white"
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/my-projects"
                  className={({ isActive }) =>
                    `text-lg font-medium transition hover:text-rose-500 ${
                      isActive ? "text-rose-500" : "text-white"
                    }`
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <a
                  href={resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-white transition hover:text-rose-500"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact Button */}
          <Link
            to="/contact-me"
            className="hidden rounded-md border border-rose-600 bg-rose-600/10 px-4 py-2 font-medium text-white transition hover:bg-rose-600 hover:text-white md:block"
          >
            Contact
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="text-2xl text-white md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? <RiCloseLine /> : <FaHamburger />}
          </button>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="absolute left-0 top-16 w-full bg-gray-900/95 backdrop-blur-md md:hidden">
              <ul className="flex flex-col space-y-4 p-6 text-center">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block py-2 text-lg font-medium transition hover:text-rose-500 ${
                        isActive ? "text-rose-500" : "text-white"
                      }`
                    }
                    onClick={closeMenu}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about-me"
                    className={({ isActive }) =>
                      `block py-2 text-lg font-medium transition hover:text-rose-500 ${
                        isActive ? "text-rose-500" : "text-white"
                      }`
                    }
                    onClick={closeMenu}
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/my-projects"
                    className={({ isActive }) =>
                      `block py-2 text-lg font-medium transition hover:text-rose-500 ${
                        isActive ? "text-rose-500" : "text-white"
                      }`
                    }
                    onClick={closeMenu}
                  >
                    Projects
                  </NavLink>
                </li>
                <li>
                  <a
                    href={resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-2 text-lg font-medium text-white transition hover:text-rose-500"
                    onClick={closeMenu}
                  >
                    Resume
                  </a>
                </li>
                <li>
                  <Link
                    to="/contact-me"
                    className="mx-auto block w-fit rounded-md border border-rose-600 bg-rose-600/10 px-4 py-2 font-medium text-white transition hover:bg-rose-600 hover:text-white"
                    onClick={closeMenu}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
