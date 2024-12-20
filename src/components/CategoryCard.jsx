import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ name, link }) => {
  return (
    <div
      className="relative pt-32 w-64 h-80 rounded-lg p-5 shadow-lg hover:scale-105 transition-all duration-300"
      style={{ paddingTop: "150px" }} // Only keep inline style for exact 150px padding
    >
      <Link
        to={link}
        className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl"
      >
        {name}
      </Link>

      {/* Add animated hover effect on card */}
      <div className="absolute inset-0 bg-transparent hover:bg-opacity-25 hover:bg-white transition-all duration-300 rounded-lg flex justify-center items-center group">
        {/* Text will appear only on hover */}
        <span className="text-xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Go to {name}
        </span>
      </div>
    </div>
  );
};

export default CategoryCard;
