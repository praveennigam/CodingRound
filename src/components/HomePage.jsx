import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex justify-center items-center flex-wrap gap-2 mt-6 pt-22 pb-10 min-h-screen bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800"> {/* Background gradient */}
      {/* Added the text "Prepare for interview 💌" */}
      <div className="w-full text-center mb-3">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-200 via-red-700 to-gold-100">
          If you want to build a career in MERN, grab a pen and notebook and start taking notes! 💌
        </h1>
      </div>

      <CategoryCard category="Java" />
      <CategoryCard category="JavaScript" />
      <CategoryCard category="HTML" />
      <CategoryCard category="CSS" />
      <CategoryCard category="MySQL" />
      <CategoryCard category="JsTheory" />
    </div>
  );
};

const CategoryCard = ({ category }) => {
  return (
    <div className="w-48 h-48 bg-gradient-to-r from-blue-900 to-purple-700 rounded-lg shadow-lg text-center text-white flex justify-center items-center transition-transform transform hover:scale-105">
      <Link to={`/${category.toLowerCase()}`} className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-100 via-blue-300 to-blue-500">
        {category}
      </Link>
    </div>
  );
};

export default HomePage;
