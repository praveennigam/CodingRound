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
} from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4 px-6 bg-gradient-to-r from-green-700 via-freen-300 to-blue-500 border-b border-neutral-700 shadow-lg">

      <div className="flex items-center gap-4 text-xl opacity-80">
        <a
          href="https://www.linkedin.com/in/impraveen1999"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-400 transition duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.facebook.com/share/7EXCGjcN6jhvLf4g"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-600 transition duration-300"
        >
          <FaFacebook />
        </a>
        <a
          href="https://wa.me/+919109481480"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-400 transition duration-300"
        >
          <FaWhatsapp />
        </a>
        <a
          href="tel:+919109481480"
          className="text-blue-200 hover:text-blue-100 transition duration-300"
        >
          <FaPhoneAlt />
        </a>
        <a
          href="https://www.instagram.com/_its_praveen_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-800 hover:text-pink-600 transition duration-300"
        >
          <FaInstagram />
        </a>
        <a
          href="https://youtube.com/@thewebseller?si=lTc45AaTSu1hvAb3"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:text-red-500 transition duration-300"
        >
          <FaYoutube />
        </a>
        <a
          href="https://t.me/techshiksha1999"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition duration-300"
        >
          <FaTelegram />
        </a>
        <button
          onClick={() => navigate("/resume")}
          className="text-red-900 hover:text-red-700 transition duration-300"
          aria-label="View Resume"
        >
          <FaFilePdf />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;