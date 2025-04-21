import { motion } from "framer-motion";
import Logo from "../assets/logo.png";

import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMysql,
  SiExpress,
  SiVite,
  SiJavascript,
} from "react-icons/si";
import Navbar from "../components/navbar";

// Tech stack icons
const techStack = [
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  {
    name: "Framer Motion",
    icon: (
      <img
        src="https://cdn.worldvectorlogo.com/logos/framer-motion.svg"
        alt="Framer"
        className="w-6 h-6"
      />
    ),
  },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Vite", icon: <SiVite className="text-purple-500" /> },
];

// Reusable card component
const Card = ({ children }) => (
  <div className="rounded-2xl shadow-lg hover:shadow-2xl transition bg-white">
    <div className="p-6">{children}</div>
  </div>
);

const About = () => {
  return (
    <>
      <Navbar></Navbar>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-6 py-12"
      >
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <div className="w-[200px] h-[200px] rounded-full bg-gray-200 flex items-center justify-center shadow-xl">
            <img
              src={Logo}
              alt="StayEasy Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Intro Section */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold text-center mb-4 text-indigo-600"
        >
          About StayEasy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-gray-700 text-center max-w-3xl mx-auto"
        >
          StayEasy is a smart platform that helps students and professionals
          find PGs with ease. Trusted listings, verified reviews, and powerful
          tools — all in one place.
        </motion.p>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-2 gap-6 mt-12"
        >
          <Card>
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">
              🔍 Find PGs Easily
            </h2>
            <p>
              Use filters, search by college/workplace, and view trusted
              listings.
            </p>
          </Card>
          <Card>
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">
              📝 Verified Reviews
            </h2>
            <p>
              Read real reviews from other students and make informed decisions.
            </p>
          </Card>
          <Card>
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">
              💼 PG Owner Panel
            </h2>
            <p>
              Owners can easily manage their listings and get more visibility.
            </p>
          </Card>
          <Card>
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">
              📲 Simple, Clean UI
            </h2>
            <p>
              Modern UI with animations, mobile-ready design, and great
              performance.
            </p>
          </Card>
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center text-indigo-700 mb-6">
            🧑‍💻 Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map((tech, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center text-center bg-white p-4 rounded-xl shadow-md w-28"
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <p className="text-sm font-medium">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold mb-2 text-indigo-700">
            👨‍💻 Developed By
          </h3>
          <p className="text-gray-700">
            Athul Sabu, Bony Shajan, Alex Joseph & Navneeth KK
          </p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default About;
