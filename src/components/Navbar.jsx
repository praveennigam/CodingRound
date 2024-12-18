import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaPhoneAlt,
  FaInstagram,
  FaFilePdf,
  FaYoutube,
  FaTelegram,
  FaInfoCircle,
} from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4 px-6 bg-gradient-to-r from-black via-gray-800 to-blue-900 border-b border-neutral-700 shadow-lg">
      {/* Left side - Info Icon */}
      <div className="flex items-center gap-2 text-sm opacity-80">
        <a
          href="https://impraveen.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500 p-2 rounded-full bg-gradient-to-r from-blue-500 via-gray-600 to-black"
        >
          <FaInfoCircle className="text-2xl sm:text-3xl" />
        </a>
      </div>

      {/* Right side - Social Media Icons */}
      <div className="flex items-center text-sm opacity-80 ml-auto">
        <a
          href="https://www.linkedin.com/in/impraveen1999"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition duration-300 transform hover:scale-110 hover:shadow-lg p-2 rounded-full bg-gradient-to-r from-gray-700 to-blue-600"
        >
          <FaLinkedin className="text-xl sm:text-2xl" />
        </a>
        <a
          href="https://www.facebook.com/share/7EXCGjcN6jhvLf4g"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-600 transition duration-300 transform hover:scale-110 hover:shadow-lg p-2 rounded-full bg-gradient-to-r from-gray-700 to-blue-500"
        >
          <FaFacebook className="text-xl sm:text-2xl" />
        </a>
        <a
          href="https://wa.me/+919109481480"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-green-400 transition duration-300 transform hover:scale-110 hover:shadow-lg p-2 rounded-full bg-gradient-to-r from-gray-700 to-green-500"
        >
          <FaWhatsapp className="text-xl sm:text-2xl" />
        </a>
        <a
          href="tel:+919109481480"
          className="text-white hover:text-blue-200 transition duration-300 transform hover:scale-110 hover:shadow-lg p-2 rounded-full bg-gradient-to-r from-gray-800 to-blue-700"
        >
          <FaPhoneAlt className="text-xl sm:text-2xl" />
        </a>
        <a
          href="https://www.instagram.com/_its_praveen_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-pink-600 transition duration-300 transform hover:scale-110 hover:shadow-lg p-2 rounded-full bg-gradient-to-r from-gray-700 to-pink-600"
        >
          <FaInstagram className="text-xl sm:text-2xl" />
        </a>
        <a
          href="https://youtube.com/@thewebseller?si=lTc45AaTSu1hvAb3"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-red-500 transition duration-300 transform hover:scale-110 hover:shadow-lg p-2 rounded-full bg-gradient-to-r from-gray-700 to-red-500"
        >
          <FaYoutube className="text-xl sm:text-2xl" />
        </a>
        <a
          href="https://t.me/techshiksha1999"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-300 transition duration-300 transform hover:scale-110 hover:shadow-lg p-2 rounded-full bg-gradient-to-r from-gray-700 to-blue-400"
        >
          <FaTelegram className="text-xl sm:text-2xl" />
        </a>
        <button
          onClick={() => navigate("/resume")}
          className="text-white hover:text-red-700 transition duration-300 transform hover:scale-110 hover:shadow-lg p-2 rounded-full bg-gradient-to-r from-gray-700 to-red-600"
          aria-label="View Resume"
        >
          <FaFilePdf className="text-xl sm:text-2xl" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
