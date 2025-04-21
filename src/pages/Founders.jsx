import { motion } from "framer-motion";
import { athul, alex, navneeth, bony } from "../assets/founders";
import Navbar from "../components/navbar";
const founders = [
  {
    name: "Athul Sabu",
    role: "Full Stack Developer/ Product Manager",
    photo: athul,
  },
  {
    name: "Bony Shajan",
    role: " Operations, Client Handling & PG Owner Relations",
    photo: bony,
  },
  {
    name: "Alex Joseph",
    role: "Marketing & Outreach",
    photo: alex,
  },
  {
    name: "Navneeth KK",
    role: " Design, Branding & Presentation",
    photo: navneeth,
  },
];

const Founders = () => {
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
          Meet the Founders
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg p-6 text-center transition duration-300 hover:shadow-xl"
            >
              <img
                src={founder.photo}
                alt={founder.name}
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4 shadow-md"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {founder.name}
              </h3>
              <p className="text-sm text-gray-500">{founder.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Founders;
