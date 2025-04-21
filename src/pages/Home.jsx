import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import Navbar from "../components/navbar";

const features = [
  {
    title: "Search Nearby PGs",
    description:
      "Easily find PGs near your college or office within a custom radius.",
  },
  {
    title: "Verified Listings",
    description:
      "All listings are reviewed and verified by our team to ensure safety and quality.",
  },
  {
    title: "Student Reviews",
    description:
      "Read real reviews from students and professionals who have lived there.",
  },
];

const Home = () => {
  return (
    <div className="scroll-smooth">
      <Navbar></Navbar>

      {/* Hero Section */}
      <section
        id="about"
        className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 flex flex-col items-center justify-center px-6 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold text-blue-800"
        >
          Welcome to StayEasy
        </motion.h1>

        <motion.img
          src={logo}
          alt="StayEasy Logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-[300px] h-[300px] sm:w-36 sm:h-36 mb-6 rounded-full"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-xl text-gray-700 mt-4 max-w-2xl"
        >
          Your go-to app to find affordable and verified PGs near your college
          or workplace. Simplify your housing hunt with StayEasy 🏠✨
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
        >
          Get Started
        </motion.button>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose StayEasy?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-blue-50 p-6 rounded-xl shadow"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how" className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">How It Works</h2>
          <div className="space-y-6 text-gray-700">
            <p>📍 Enter your location and preferred radius</p>
            <p>🏠 Browse verified PGs with real photos & reviews</p>
            <p>📝 Contact owners directly or reserve via the app</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Our Users Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow border">
            <p>
              "StayEasy helped me find a PG within walking distance from
              college. Super easy and reliable!"
            </p>
            <p className="mt-4 text-sm text-gray-500">– Nithya, Student</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow border">
            <p>
              "I moved to a new city for work and this app saved me from weeks
              of stress. Highly recommended!"
            </p>
            <p className="mt-4 text-sm text-gray-500">
              – Arjun, IT Professional
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section id="founders" className="bg-blue-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Meet the Founders</h2>
          <ul className="space-y-2 text-lg text-blue-800 font-medium">
            <li>👨‍💻 Athul Sabu</li>
            <li>👨‍💻 Alex Joseph</li>
            <li>👨‍💻 Bony Shajan</li>
            <li>👨‍💻 Navneeth KK</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6 text-center">
        <p>&copy; 2025 StayEasy. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
