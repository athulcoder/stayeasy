import { motion } from "framer-motion";
import Navbar from "../components/NavBar";

import {
  FaSearchLocation,
  FaRegBuilding,
  FaCheckCircle,
  FaUsers,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaSearchLocation className="text-4xl text-blue-500 mb-4" />,
    title: "Discover Nearby PGs",
    description:
      "Enter your college or workplace to explore a curated list of PGs nearby, with detailed descriptions, photos, and amenities.",
  },
  {
    icon: <FaRegBuilding className="text-4xl text-green-500 mb-4" />,
    title: "Verified Listings",
    description:
      "Every listing is reviewed and verified by our team to ensure authenticity, so you can book your stay with confidence.",
  },
  {
    icon: <FaUsers className="text-4xl text-indigo-500 mb-4" />,
    title: "Read Reviews",
    description:
      "Check honest reviews from students and professionals who have stayed in these PGs before you make your decision.",
  },
  {
    icon: <FaCheckCircle className="text-4xl text-yellow-500 mb-4" />,
    title: "Easy Booking & Owner Access",
    description:
      "Book instantly or contact the PG owner. If you're an owner, you can register your PG and manage listings via your dashboard.",
  },
];

const HowItWorks = () => {
  return (
    <>
      <Navbar></Navbar>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-6 py-12"
      >
        <h2 className="text-4xl font-bold text-center text-indigo-600 mb-10">
          How StayEasy Works
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg p-6 text-center transition duration-300 hover:shadow-xl"
            >
              {step.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-md text-gray-700 max-w-3xl mx-auto">
            StayEasy is designed with simplicity in mind — whether you're a
            student looking for a comfortable stay near your college, or a PG
            owner looking to reach genuine tenants, our platform bridges the
            gap. Explore listings, connect with trusted owners, and enjoy a
            hassle-free stay experience.
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default HowItWorks;
