import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";

import { NavLink } from "react-router-dom";
import {
  AiFillInstagram,
  AiFillGithub,
  AiFillLinkedin,
  AiFillWechat,
} from "react-icons/ai";
import { server } from "../App";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  // send message handler
  const sendMessageHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post(
        `https://nbportfolioserver.onrender.com/api/v1/contacts/send-message`,
        { name, email, message },

        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        },
      );
      const isSucc = res.data.success;
      if (isSucc) {
        setIsLoading(false);
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setMessage("");
        navigate("/");
      } else {
        setIsLoading(false);
        toast.error("Some error");
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      toast.error("Can't send now !");
      setIsLoading(false);
      setName("");
      setEmail("");
      setMessage("");
    }
  };
  return (
    <Layout>
      <main className="bg-gray-800 text-indigo-100">
        <section className="loginBody flex min-h-[95vh] w-full items-center justify-center">
          <div className="border-1 m-4 flex  w-full  max-w-md items-center justify-center rounded  pt-4">
            <div className="w-full">
              <div className="about">
                <p className="mb-4  text-center text-xl font-semibold uppercase tracking-normal text-white md:text-2xl">
                  Connect with{" "}
                  <span className="font-semibold tracking-wider text-rose-600">
                    {" "}
                    Me
                  </span>
                </p>
              </div>
              <div className="">
                <div className="order-3 mt-4 flex justify-center space-x-4 py-4 text-2xl md:order-none md:text-3xl">
                  <NavLink
                    to="https://www.linkedin.com/in/nitin-bisht-3998091b6/"
                    target="_blank"
                  >
                    <i>
                      <AiFillWechat className="hover:text-rose-600" />{" "}
                    </i>
                  </NavLink>
                  <NavLink
                    to="https://www.linkedin.com/in/nitin-bisht-3998091b6/"
                    target="_blank"
                  >
                    <i>
                      <AiFillLinkedin className="hover:text-rose-600" />
                    </i>
                  </NavLink>
                  <NavLink to="https://github.com/NickeyNb" target="_blank">
                    <i>
                      <AiFillGithub className="hover:text-rose-600" />{" "}
                    </i>
                  </NavLink>

                  <NavLink to="https://github.com/NickeyNb" target="_blank">
                    <i>
                      <AiFillInstagram className="hover:text-rose-600" />{" "}
                    </i>
                  </NavLink>
                </div>
                <div className="rightLogin space-y-1">
                  <form
                    className=" space-y-3 rounded-lg border-l-2 border-r-2 border-solid border-gray-400 px-3 py-4"
                    onSubmit={sendMessageHandler}
                  >
                    <div className=" border-b border-solid border-black">
                      <input
                        className="w-full rounded-md border-none  px-2 py-2  text-black outline-none"
                        type="text"
                        placeholder="Enter your Name"
                        value={name}
                        autoComplete="username email"
                        required
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </div>
                    <div className=" border-b border-solid border-black">
                      <input
                        className="w-full rounded-md  border-none px-2 py-2  text-black outline-none"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        autoComplete="username email"
                        required
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                    <div className="">
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="3"
                        className="w-full resize-none rounded-md border border-solid border-black px-2 py-1   text-black outline-none "
                        placeholder="Enter the Message"
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="mt-1 w-full rounded border border-solid border-rose-700 bg-rose-600  py-2 text-lg font-bold text-slate-100 hover:bg-rose-700 disabled:cursor-not-allowed disabled:bg-rose-400"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Contact;
