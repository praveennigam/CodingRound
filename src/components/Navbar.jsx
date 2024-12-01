import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaPhoneAlt,
  FaInstagram,
  FaFilePdf,
  FaYoutube,
  FaTelegram,
  FaInfoCircle, // New icon for the link
} from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4 px-6 bg-gradient-to-r from-green-700 via-green-300 to-blue-500 border-b border-neutral-700 shadow-lg">

      {/* Left side - Info Icon */}
      <div className="flex items-center gap-2 text-sm opacity-80">
        <a
          href="https://impraveen.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-yellow-500 p-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
        >
          <FaInfoCircle className="text-2xl sm:text-3xl" />
        </a>
      </div>

      {/* Right side - Social Media Icons */}
      <div className="flex items-center  text-sm opacity-80 ml-auto">
        <a
          href="https://www.linkedin.com/in/impraveen1999"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg p-2 rounded-full"
        >
          <FaLinkedin className="text-xl sm:text-2xl" />
        </a>
        <a
          href="https://www.facebook.com/share/7EXCGjcN6jhvLf4g"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg p-2 rounded-full"
        >
          <FaFacebook className="text-xl sm:text-2xl" />
        </a>
        <a
          href="https://wa.me/+919109481480"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-green-400 hover:bg-green-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg p-2 rounded-full"
        >
          <FaWhatsapp className="text-xl sm:text-2xl" />
        </a>
        <a
          href="tel:+919109481480"
          className="text-white hover:text-blue-100 hover:bg-blue-200 transition-all duration-300 transform hover:scale-110 hover:shadow-lg p-2 rounded-full"
        >
          <FaPhoneAlt className="text-xl sm:text-2xl" />
        </a>
        <a
          href="https://www.instagram.com/_its_praveen_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-pink-600 hover:bg-pink-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg p-2 rounded-full"
        >
          <FaInstagram className="text-xl sm:text-2xl" />
        </a>
        <a
          href="https://youtube.com/@thewebseller?si=lTc45AaTSu1hvAb3"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-red-500 hover:bg-red-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg p-2 rounded-full"
        >
          <FaYoutube className="text-xl sm:text-2xl" />
        </a>
        <a
          href="https://t.me/techshiksha1999"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-300 hover:bg-blue-400 transition-all duration-300 transform hover:scale-110 hover:shadow-lg p-2 rounded-full"
        >
          <FaTelegram className="text-xl sm:text-2xl" />
        </a>
        <button
          onClick={() => navigate("/resume")}
          className="text-white hover:text-red-700 hover:bg-red-800 transition-all duration-300 transform hover:scale-110 hover:shadow-lg p-2 rounded-full"
          aria-label="View Resume"
        >
          <FaFilePdf className="text-xl sm:text-2xl" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
