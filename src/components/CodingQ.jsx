import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { java, js, html, css, mysql, JsTheory } from "../data"; // Import data for questions
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css"; // VS Code-like theme for code

import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // For carousel navigation
import { motion } from "framer-motion";

const CodingQ = () => {
  const { category } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Track current question index
  const [direction, setDirection] = useState("next"); // Track if it's a "next" or "previous" transition

  // Load questions based on category
  useEffect(() => {
    switch (category) {
      case "java":
        setQuestions(java);
        break;
      case "js":
        setQuestions(js);
        break;
      case "html":
        setQuestions(html);
        break;
      case "css":
        setQuestions(css);
        break;
      case "mysql":
        setQuestions(mysql);
        break;
      
        case "jstheory":
          setQuestions(JsTheory);
          break;  
      default:
        setQuestions([]);
    }
  }, [category]);

  // Automatically change question every 40 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextQuestion();
    }, 35000); // Change question every 40 seconds

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [questions.length]);

  // Handle next and previous question
  const nextQuestion = () => {
    setDirection("next");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % questions.length);
  };

  const prevQuestion = () => {
    setDirection("prev");
    setCurrentIndex((prevIndex) => (prevIndex - 1 + questions.length) % questions.length);
  };

  // Highlight the code after questions have been set
  useEffect(() => {
    Prism.highlightAll(); // Apply syntax highlighting
  }, [questions]);

  // Dynamically determine language for code blocks
  const getLanguage = () => {
    switch (category) {
      case "java":
        return "java";
      case "js":
        return "js";
      case "html":
        return "markup";
      case "css":
        return "css";
      case "mysql":
        return "sql";
        case "JsTheory":
        return "JsTheory";
      default:
        return "javascript"; // default to JavaScript
    }
  };

  // Function to generate random gradient colors for each word
  const getRandomGradient = () => {
    const colors = [
      "from-pink-500 to-yellow-500",
      "from-blue-400 to-indigo-500",
      "from-purple-400 to-teal-400",
      "from-green-400 to-blue-500",
      "from-red-500 to-yellow-500",
      "from-orange-400 to-pink-400",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Function to format code: Add line breaks after '{', '}', '(', ')'
  const formatCode = (code) => {
    const formattedCode = code.split(/(\s+|[{}()])/).map((word, index) => {
      if (["{"].includes(word)) {
        return (
          <React.Fragment key={index}>
            <span
              className={`text-transparent bg-clip-text bg-gradient-to-r ${getRandomGradient()}`}
            >
              {word}
            </span>
            <br />
          </React.Fragment>
        );
      }

      if (word.trim() === "") {
        return <span key={index}>{word}</span>;
      }

      return (
        <span
          key={index}
          className={`text-transparent bg-clip-text bg-gradient-to-r ${getRandomGradient()}`}
        >
          {word}
        </span>
      );
    });

    return formattedCode;
  };

  return (
    <div className="container mx-auto mt-4 bg-gradient-to-r from-purple-700 to-blue-500 min-h-screen pt-22 flex justify-center items-center">
      <div className="relative w-full max-w-7xl px-4 sm:px-8">
        {/* Title with gradient text */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-pink-500 mb-8 text-center"
        >
          {category.toUpperCase()} Questions
        </motion.h1>

        {questions.length > 0 && (
          <div className="relative">
            {/* Carousel Buttons */}
            <button
              onClick={prevQuestion}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-700 active:bg-gray-600 transition-all duration-300 z-10"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextQuestion}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-700 active:bg-gray-600 transition-all duration-300 z-10"
            >
              <FaChevronRight />
            </button>

            {/* Carousel Content */}
            <div className="overflow-hidden w-full relative">
              <motion.div
                className="flex justify-center space-x-6 w-full"
                initial={{ x: direction === "next" ? "100%" : "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: direction === "next" ? "-100%" : "100%" }}
                transition={{ type: "spring", stiffness: 100, damping: 25 }}
                key={currentIndex}
              >
                {/* Current Question */}
                <div className="carousel-item h-auto sm:h-[500px] bg-gray-800 text-white p-4 rounded-lg shadow-lg w-[80vw] sm:w-[60vw] transform transition-all duration-1000 ease-in-out">
                  <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-lg sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-blue-600"
                  >
                    {questions[currentIndex].question}
                  </motion.h2>
                  <div className="overflow-auto mt-4">
                    <pre className="bg-gray-900 p-4 rounded-lg whitespace-pre-wrap w-full h-[auto]">
                      <div className={`language-${getLanguage()} text-base sm:text-lg overflow-auto max-h-[400px] px-2`}>
                        {formatCode(questions[currentIndex].answer)}
                      </div>

                    </pre>
                  </div>
                  <p className="mt-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 text-sm sm:text-base">
                    Output: {questions[currentIndex].output}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodingQ;
