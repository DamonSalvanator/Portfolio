import React from "react";

const ProjectCard = ({
  category,
  title,
  description,
  techs,
  image,
}) => {
  return (
    <div className="bg-gray-900 text-white p-5 py-8 border-2 border-transparent rounded-sm hover:border-green-700 transition-all  shadow-2xl flex flex-col items-start">
      {/* Project Image */}
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-contain mb-6" // sharp edges, no rounding
        />
      )}

      {/* Status & Category */}
      <div className="flex items-center justify-between w-full">
        <span className="text-green-500 text-sm font-semibold">{status}</span>
        <span className="text-gray-400 text-xs">{category}</span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-thick mt-2">{title}</h3>

      {/* Description */}
      <p className="text-sm text-gray-400 mt-2 mb-4">{description}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mt-3">
        {techs.map((tech, i) => (
          <span key={i} className="bg-green-800 px-2 py-1 text-xs">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
