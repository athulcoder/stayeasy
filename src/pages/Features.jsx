import React from "react";
import Navbar from "../components/navbar";
const features = [
  {
    title: "User-friendly Interface",
    description:
      "Simple and intuitive UI that ensures easy navigation for all users.",
    image: "https://img.icons8.com/fluency/96/000000/user-interface.png",
  },
  {
    title: "Advanced Search & Filters",
    description: "Filter PGs by price, amenities, location, and more.",
    image: "https://img.icons8.com/color/96/000000/filter.png",
  },
  {
    title: "Detailed PG Information",
    description: "Photos, rent, facilities, and more in every listing.",
    image: "https://img.icons8.com/color/96/000000/information.png",
  },
  {
    title: "Reviews & Ratings",
    description: "Real reviews from students and professionals.",
    image: "https://img.icons8.com/color/96/000000/feedback.png",
  },
  {
    title: "PG Owner Listings",
    description: "PG owners can add properties with details and pictures.",
    image: "https://img.icons8.com/fluency/96/000000/real-estate.png",
  },
  {
    title: "Secure Payments",
    description: "Rent & deposits handled securely via the app.",
    image: "https://img.icons8.com/color/96/000000/secure-payment.png",
  },
  {
    title: "Instant Notifications",
    description: "Real-time alerts about new PGs and booking updates.",
    image:
      "https://img.icons8.com/color/96/000000/appointment-reminders--v1.png",
  },
  {
    title: "Booking System",
    description: "Book PGs with date selection and availability calendar.",
    image: "https://img.icons8.com/fluency/96/000000/reservation.png",
  },
  {
    title: "User Profile Management",
    description: "Edit your profile, track bookings, and manage preferences.",
    image: "https://img.icons8.com/fluency/96/000000/user-settings.png",
  },
  {
    title: "In-App Chat",
    description: "Chat directly with PG owners for faster communication.",
    image: "https://img.icons8.com/color/96/000000/chat--v3.png",
  },
  {
    title: "Admin Dashboard",
    description: "PG owners can manage properties and track performance.",
    image: "https://img.icons8.com/color/96/000000/dashboard.png",
  },
  {
    title: "Multi-language Support",
    description: "Supports multiple languages for a wider audience.",
    image: "https://img.icons8.com/color/96/000000/language.png",
  },
];

const FeaturesList = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Our App Features
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-5 text-center"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-20 h-20 mx-auto mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturesList;
