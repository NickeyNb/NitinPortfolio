import { Link } from "react-router-dom";
import { FaLanguage } from "react-icons/fa";

const Introduction = () => {
  return (
    <section className="w-full px-4 py-12 md:px-12 lg:px-24">
      <div className="">
        {/* Introduction Header */}
        <div className="flex w-full justify-center pb-8">
          <h1 className="text-2xl font-medium uppercase tracking-wide md:text-3xl">
            Let me{" "}
            <span className="font-semibold text-rose-600">introduce</span>{" "}
            myself
          </h1>
        </div>

        {/* Introduction Content */}
        <div className="space-y-6 text-lg leading-relaxed text-gray-100 md:text-xl">
          <p>
            I'm a passionate full-stack developer currently working at{" "}
            <span className="font-medium text-rose-500">Accenture</span>, with
            expertise in{" "}
            <span className="italic text-rose-400">MERN stack</span>{" "}
            development.
          </p>

          <p>
            I have a{" "}
            <Link
              to="https://leetcode.com/nitinnb31122002/"
              target="_blank"
              className="italic text-rose-500 hover:underline hover:underline-offset-4"
            >
              'bite-sized'
            </Link>{" "}
            love affair with problem solving and turning complex challenges into
            elegant solutions.
          </p>

          <p>
            My primary interest lies in web technologies, where I find beauty in
            transforming{" "}
            <span className="italic text-rose-500">
              'concepts into code' and 'designs into experiences'
            </span>
            .
          </p>

          <p>
            I specialize in building modern web applications using{" "}
            <span className="italic text-rose-500">
              Next.js, React, Node.js, MongoDB, and TypeScript
            </span>
            , with a strong focus on performance and user experience.
          </p>

          {/* Language Skills Section */}
          <div className="rounded-lg bg-gray-700/50 p-6 shadow-md">
            <div className="flex items-center gap-3 pb-2">
              <FaLanguage className="text-xl text-rose-500" />
              <h3 className="text-lg font-medium md:text-xl">
                Language Skills
              </h3>
            </div>
            <p>
              Beyond programming languages, I have basic proficiency in{" "}
              <span className="text-rose-400">Japanese</span> and{" "}
              <span className="text-rose-400">Russian</span>, which helps me
              collaborate in diverse teams and understand technical
              documentation in these languages.
            </p>
          </div>

          <p>
            I'm always excited to connect with fellow developers, collaborate on
            innovative projects, and contribute to the tech community through
            knowledge sharing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
