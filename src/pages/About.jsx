import Layout from "../components/layout/Layout";
import { BiGitBranch } from "react-icons/bi";
import { FaAws, FaJava } from "react-icons/fa";
import {
  TbBrandJavascript,
  TbBrandNodejs,
  TbBrandNextjs,
  TbBrandCpp,
  TbBrandVscode,
  TbBrandNpm,
  TbBrandRedux,
} from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiMongodb,
  SiNodemon,
  SiPostman,
  SiTailwindcss,
  SiGraphql,
  SiPostgresql,
  SiRedis,
  SiNgrok,
  SiTypescript,
  SiMaterialdesign,
  SiSocketdotio,
} from "react-icons/si";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout>
      <section className="bg-gray-800 pt-16 text-indigo-100">
        {/* Intro Section */}
        <section className="min-h-[80vh] w-full">
          <div className="pt-8">
            <h1 className="text-center text-xl font-semibold uppercase text-white md:text-3xl">
              Know who <span className="tracking-wider text-rose-600">I'm</span>
            </h1>
            <div className="px-4 pt-4 text-lg leading-relaxed tracking-wide md:px-8">
              <p>
                Greetings! I'm{" "}
                <span className="text-xl font-semibold text-rose-500">
                  Nitin Bisht
                </span>{" "}
                from <span className="text-rose-500">Uttarakhand</span>.
              </p>

              <p className="pt-4">
                I'm currently working as a{" "}
                <span className="text-rose-500">
                  Software Developer at Accenture
                </span>
                , where I've been contributing for the past 11 months. During
                this time, I've:
              </p>

              <ul className="list-disc pl-6 pt-2">
                <li>
                  Undergone specialized training in{" "}
                  <span className="text-rose-500">
                    React Native and MERN stack
                  </span>
                </li>
                <li>
                  Developed expertise in building cross-platform mobile
                  applications
                </li>
                <li>
                  Gained hands-on experience with modern web development
                  technologies
                </li>
                <li>Contributed to enterprise-level software solutions</li>
              </ul>

              <p className="pt-4">
                Previously, I completed my B.Tech in{" "}
                <span className="italic text-rose-500">
                  Computer Science and Engineering
                </span>{" "}
                from{" "}
                <Link
                  to="https://www.gehu.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="italic text-rose-500 underline"
                >
                  Graphic Era Hill University
                </Link>
                , where I graduated with an 8.5 CGPA.
              </p>

              <p className="pt-4">
                I'm a passionate learner who thrives on solving challenges and
                bringing fresh perspectives to projects. I take initiative,
                especially in tackling difficult tasks head-on. My professional
                journey has reinforced my ability to deliver robust solutions
                while continuously expanding my technical expertise.
              </p>
            </div>

            {/* Academics Section */}
            <div className="flex w-full flex-col items-center px-2 pb-16 pt-6 md:pt-12">
              <div className="w-full max-w-lg rounded-lg border border-white py-1">
                <h1 className="border-b border-white py-2 text-center text-xl font-semibold">
                  Academics
                </h1>
                <div className="space-y-4 px-4 py-4 text-center">
                  <div>
                    <p>B.Tech | GEHU | 2020–2024</p>
                    <p className="text-rose-300">(8.5 CGPA)</p>
                  </div>
                  <div>
                    <p>Intermediate | Beersheba Sr. Sec. School | 2019–2020</p>
                    <p className="text-rose-300">(83.8%)</p>
                  </div>
                  <div>
                    <p>High School | Beersheba Sr. Sec. School | 2017–2018</p>
                    <p className="text-rose-300">(81%)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="bg-gray-700 pb-24 pt-6">
              <h1 className="text-center text-xl font-semibold uppercase text-white md:text-3xl">
                <span className="tracking-wider text-rose-600">Skills </span>
                and <span className="tracking-wider text-rose-600">Tools </span>
              </h1>
              <div className="grid grid-cols-1 gap-4 px-8 pt-12 sm:grid-cols-2 md:grid-cols-3">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="rounded-lg bg-gray-800 p-4 shadow-md shadow-gray-500 transition hover:bg-gray-900"
                  >
                    {skill.link ? (
                      <Link
                        to={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <skill.icon
                          className="mx-auto text-6xl"
                          style={{ color: skill.color }}
                        />
                      </Link>
                    ) : (
                      <skill.icon
                        className="mx-auto text-6xl"
                        style={{ color: skill.color }}
                      />
                    )}
                    <p className="mt-4 text-center text-sm">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>
    </Layout>
  );
};

const skills = [
  {
    icon: TbBrandNodejs,
    color: "#68a063",
    description:
      "Node.js enables JavaScript to run on the server, ideal for scalable backend solutions.",
  },
  {
    icon: TbBrandJavascript,
    color: "#f7df1e",
    link: "https://leetcode.com/nitinnb31122002/",
    description:
      "JavaScript is a powerful, versatile language used to build interactive web interfaces.",
  },
  {
    icon: RiReactjsLine,
    color: "#61dafb",
    description:
      "React is a JavaScript library for building modern, fast, and dynamic user interfaces.",
  },
  {
    icon: TbBrandNextjs,
    color: "#ccc",
    description:
      "Next.js adds powerful server-side rendering and routing capabilities to React.",
  },
  {
    icon: SiTypescript,
    color: "#3178c6",
    description:
      "TypeScript adds static typing to JavaScript, improving code quality and developer experience.",
  },
  {
    icon: SiGraphql,
    color: "#e535ab",
    description:
      "GraphQL is a query language for APIs that enables efficient data fetching and manipulation.",
  },
  {
    icon: SiMongodb,
    color: "#4db33d",
    description:
      "MongoDB is a NoSQL database known for flexibility and scalability in document-based storage.",
  },
  {
    icon: SiPostgresql,
    color: "#336791",
    description:
      "PostgreSQL is a powerful, open-source relational database system with advanced features.",
  },
  {
    icon: SiRedis,
    color: "#d82c20",
    description:
      "Redis is an in-memory data structure store used as a database, cache, and message broker.",
  },
  {
    icon: SiPostman,
    color: "#ff6c37",
    description:
      "Postman is a collaboration platform for API development, testing, and debugging.",
  },
  {
    icon: SiTailwindcss,
    color: "#38bdf8",
    description:
      "Tailwind CSS is a utility-first framework for rapidly building custom user interfaces.",
  },
  {
    icon: SiMaterialdesign,
    color: "#007fff",
    description:
      "Material-UI provides React components that implement Google's Material Design system.",
  },
  {
    icon: FaJava,
    color: "#007396",
    description:
      "Java is a robust, object-oriented programming language used for enterprise applications.",
  },
  {
    icon: FaAws,
    color: "#FF9900",
    description:
      "Amazon Web Services provides scalable cloud computing solutions for various applications.",
  },
  {
    icon: SiSocketdotio,
    color: "#010101",
    description:
      "Socket.io enables real-time, bidirectional event-based communication between clients and servers.",
  },
  {
    icon: SiNgrok,
    color: "#ccc",
    description:
      "Ngrok creates secure tunnels to localhost, enabling easy testing of webhooks and APIs.",
  },
  {
    icon: TbBrandCpp,
    color: "#00599c",
    description:
      "C++ is a high-performance language commonly used in systems, gaming, and large-scale applications.",
  },
  {
    icon: TbBrandVscode,
    color: "#007acc",
    description:
      "Visual Studio Code is a powerful code editor with built-in Git and rich extension support.",
  },
  {
    icon: TbBrandNpm,
    color: "#cc3534",
    description:
      "NPM is the default package manager for Node.js, used to manage project dependencies.",
  },
  {
    icon: TbBrandRedux,
    color: "#764abc",
    description:
      "Redux is a predictable state container used for managing application logic in React apps.",
  },
  {
    icon: BiGitBranch,
    color: "#f05032",
    description:
      "Git is a distributed version control system used to track code changes and collaborate efficiently.",
  },
];

export default About;
