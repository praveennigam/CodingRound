import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex justify-center items-center flex-wrap gap-6 mt-16 pt-32 pb-10"> {/* Added pt-32 for top padding */}
      {/* Added the text "Prepare for interview 💌" */}
      <div className="w-full text-center mb-12">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-100 to-blue-700">
          Prepare for Interview 💌
        </h1>
      </div>

      <CategoryCard category="Java" />
      <CategoryCard category="js" />
      <CategoryCard category="HTML" />
      <CategoryCard category="CSS" />
      <CategoryCard category="MySQL" />
    </div>
  );
};

const CategoryCard = ({ category }) => {
  return (
    <div className="w-48 h-48 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-lg text-center text-white flex justify-center items-center transition-transform transform hover:scale-105">
      <Link to={`/${category.toLowerCase()}`} className="text-2xl font-bold">
        {category}
      </Link>
    </div>
  );
};

export default HomePage;
