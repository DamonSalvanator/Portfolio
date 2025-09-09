import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

function Footer() {
  return (
    <div
      id="Footer"
      className="min-h-full bg-black text-white font-sans pt-10 flex flex-col"
    >
      <div
        className="border-b border-gray-700 w-full mb-8 px-8 md:px-16 lg:px-20 pt-4" /* Added a thin border at the bottom, with padding */
      ></div>

      <div className="flex flex-col p-8 md:p-16 lg:p-20 pt-0">
        {" "}
        <div className="flex flex-col md:flex-row justify-between items-start mb-auto">
          <div className="flex flex-col space-y-1 mb-8 md:mb-0">
            <a
              href="#LandingPage"
              className="font-light text-sm md:text-base text-white hover:text-gray-400 transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#About"
              className="font-light text-sm md:text-base text-white hover:text-gray-400 transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#Skills"
              className="font-light text-sm md:text-base text-white hover:text-gray-400 transition-colors duration-300"
            >
              Skills
            </a>
            <a
              href="#Projects"
              className="font-light text-sm md:text-base text-white hover:text-gray-400 transition-colors duration-300"
            >
              Work
            </a>
            <a className="font-light text-sm md:text-base text-white hover:text-gray-400 transition-colors duration-300 cursor-pointer">
              Services
            </a>
            <a
              href="#Contact"
              className="font-light text-sm md:text-base text-white hover:text-gray-400 transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          {/* Column 2: Privacy Policy, Sitemap */}
          {/* <div className="flex flex-col space-y-1 mb-8 md:mb-0 md:mr-auto md:ml-20"> Added margin for spacing */}
          {/* <p className="font-light text-sm md:text-base">Privacy Policy</p> */}
          {/* <p className="font-light text-sm md:text-base">Sitemap</p> */}
          {/* </div> */}

          {/* Column 3: Location and Contact */}
          <div className="flex flex-col space-y-1 text-left md:text-right">
            <p className="font-light text-sm md:text-base">India ,MP</p>
            <p className="font-light text-sm md:text-base">
              yashbagde2004july2004@gmail.com
            </p>
            <div className="flex flex-row gap-4 p-6 text-lg hover:text-grey-800">
              <a href="https://www.linkedin.com/in/yash-bagde-182b14358/">
                {" "}
                <FaLinkedinIn className="hover:text-zinc-500"></FaLinkedinIn>
              </a>
              <a href="https://github.com/DamonSalvanator">
                <FiGithub className=" hover:text-zinc-500"></FiGithub>
              </a>
            </div>
          </div>
        </div>
        {/* Bottom section with the large 'Cape' text */}
        {/* flex-grow pushes this section to the bottom, and items-center/justify-center centers the text */}
        <div className="flex-grow flex items-center justify-center">
          <h1
            className="
          text-[9rem] sm:text-[11rem] md:text-[15rem] lg:text-[19rem] xl:text-[22rem] /* Increased text sizes */
          font-extrabold leading-none 
        "
            style={{
              // For Webkit browsers (Chrome, Safari, Edge)
              WebkitTextStroke: "1px white",
              WebkitTextFillColor: "transparent",
              // For other browsers (less supported, but good practice)
              textStroke: "1px white",
              fill: "transparent", // Standard SVG fill property, useful for browsers not supporting text-fill-color
              color: "transparent", // Fallback for browsers, should be overridden by WebkitTextFillColor
              fontFamily: "sans-serif", // Ensure a sans-serif font is used
              // Letter spacing might need fine-tuning to match the original
              letterSpacing: "-0.025em", // Adjust as needed for visual fidelity
            }}
          >
            Yash
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;

//  <h1
//           className="
//   text-[9rem] sm:text-[11rem] md:text-[15rem] lg:text-[19rem] xl:text-[22rem]
//   font-extrabold leading-none
//   transition-all duration-500 ease-in-out
//   cursor-pointer
// "
//           style={{
//             WebkitTextStroke: "2px white",
//             WebkitTextFillColor: "transparent",
//             textStroke: "2px white",
//             color: "transparent",
//             fontFamily: "sans-serif",
//             letterSpacing: "-0.025em",
//           }}
//         >
//           <span className="relative inline-block hover:animate-glow-gradient">
//             Yash
//           </span>
//         </h1>

// <h1
//         className="
//           text-[9rem] sm:text-[11rem] md:text-[15rem] lg:text-[19rem] xl:text-[22rem] /* Increased text sizes */
//           font-extrabold leading-none border-[10px] border-orange-500
//         "
//         style={{
//           // For Webkit browsers (Chrome, Safari, Edge)
//           WebkitTextStroke: '1px white',
//           WebkitTextFillColor: 'transparent',
//           // For other browsers (less supported, but good practice)
//           textStroke: '1px white',
//           fill: 'transparent', // Standard SVG fill property, useful for browsers not supporting text-fill-color
//           color: 'transparent', // Fallback for browsers, should be overridden by WebkitTextFillColor
//           fontFamily: 'sans-serif', // Ensure a sans-serif font is used
//           // Letter spacing might need fine-tuning to match the original
//           letterSpacing: '-0.025em', // Adjust as needed for visual fidelity
//         }}
//       >
//         Yash
//       </h1>
