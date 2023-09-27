import React from "react";
import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <section>
      <section className="w-full px-8 md:px-12">
        <div className="w-full">
          <div className="flex w-full justify-center">
            <h1 className="text-2xl uppercase">
              Let me{" "}
              <span className="font-semibold tracking-wider text-rose-600">
                {" "}
                introduce
              </span>{" "}
              myself
            </h1>
          </div>
          <div className="flex flex-col space-y-4 pt-8">
            <h1 className="text-lg">
              I am a learner and have a{" "}
              <Link
                to={"https://leetcode.com/nitinnb31122002/"}
                target="_blank"
                className="hover:text-rose-400"
              >
                {" "}
                'byte-sized'
              </Link>{" "}
              love affair with coding !" 😉
            </h1>
            <h1 className="text-lg">
              My primary interest lies in web technologies, where I find beauty
              in turning{" "}
              <span className="text-lg  italic text-rose-500">
                {" "}
                'bits and bytes' into 'clicks and delight'
              </span>
              .
            </h1>
            <h1 className="text-lg">
              I like making things on the internet, especially using tools like
              <span className="text-lg  italic text-rose-500">
                {" "}
                ReactJS, Readux, Next.js, Expressjs, etc{" "}
              </span>
              .
            </h1>
            <h1 className="text-lg">
              I'm excited to connect with fellow developers, collaborate on
              exciting projects.
            </h1>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Introduction;
