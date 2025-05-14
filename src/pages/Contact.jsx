import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate, NavLink } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendMessageHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data } = await axios.post(
        `https://nbportfolioserver.onrender.com/api/v1/contacts/send-message`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        },
      );

      if (data.success) {
        toast.success(data.message);
        setFormData({ name: "", email: "", message: "" });
        navigate("/");
      } else {
        toast.error("Failed to send message");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Can't send message now!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <main className="min-h-[95vh] bg-gray-800 pt-20 text-indigo-100">
        <section className="container mx-auto px-4 py-8">
          <div className="mx-auto max-w-md rounded-lg bg-gray-700/50 p-6 shadow-lg backdrop-blur-sm">
            <div className="text-center">
              <h1 className="mb-2 text-2xl font-bold uppercase tracking-wide text-white md:text-3xl">
                Connect with <span className="text-rose-500">Me</span>
              </h1>
              <p className="mb-6 text-gray-300">
                Have a question or want to work together? Send me a message!
              </p>
            </div>

            {/* Social Links */}
            <div className="mb-8 flex justify-center space-x-6">
              <NavLink
                to="https://www.linkedin.com/in/nitin-bisht-3998091b6/"
                target="_blank"
                aria-label="LinkedIn"
                className="text-3xl text-gray-400 transition hover:text-rose-500"
              >
                <AiFillLinkedin />
              </NavLink>
              <NavLink
                to="https://github.com/NickeyNb"
                target="_blank"
                aria-label="GitHub"
                className="text-3xl text-gray-400 transition hover:text-rose-500"
              >
                <AiFillGithub />
              </NavLink>
            </div>

            {/* Contact Form */}
            <form onSubmit={sendMessageHandler} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-medium"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-md border border-gray-600 bg-gray-800 px-4 py-2 text-white placeholder-gray-400 outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full rounded-md border border-gray-600 bg-gray-800 px-4 py-2 text-white placeholder-gray-400 outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  className="w-full rounded-md border border-gray-600 bg-gray-800 px-4 py-2 text-white placeholder-gray-400 outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="flex w-full items-center justify-center rounded-md bg-rose-600 px-4 py-2 font-medium text-white transition hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isLoading ? (
                  "Sending..."
                ) : (
                  <>
                    <FiSend className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Contact;
