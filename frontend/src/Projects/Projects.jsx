import React from "react";
import ProjectCard from "./ProjectsCard.jsx";
import pizza from "../images/pizza.png";
import Trading from "../images/trading.png";
import watch from "../images/watch.png";

const Projects = () => {
  const projectData = [
    {
      title: "PIZZA SHOP",
      category: "FULL STACK",
      description:
      " Full-stack Pizza Ordering Website with authorization and role-based access User & admin panels with product management, cart, and order handling functionality",
      techs: ["React JS", "MongoDB", "REDUX", "+2"],
      
      image: pizza,
    },
    {
      category: "FULL STACK",
      title: "E-COMMERCE WATCH WEBSITE",
      description:
      " E-commerce platform with authentication, authorization, and role-based accessUser & admin panels with product management (add, update, delete) and cart functionality",
      techs: ["REACT JS", "EXPRESS", "MONGODB", "+2"],
      
      image: watch, 
    },
    {
      category: "FULL STACK",
      title: "STOCK BROKERAGE WEBSITE",
      description:
      " Designed and developed a Trading Platform with complete frontend, backend, and analytics dashboard Authorization ensuring role-based access for admins and traders",
      techs: ["REACT JS", "REST API", "NODE", "+2"],

      image: Trading,
    },
  ];

  return (
    <div
      id="Projects"
      className="bg-black w-full min-h-full pt-24 flex flex-col items-center justify-start py-12 px-4"
    >
      <h2 className="text-green-700 mt-18 font-bold mb-20 text-4xl text-center">
        Projects
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
