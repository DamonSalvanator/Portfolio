import React, { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { toast } from "react-toastify";
import axios from "axios";

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [msg, setmsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        toast.error("Please Provide all fields");
        return;
      }
      // const res = await axios.post(
      // "http://localhost:8080/api/v1/portfolio/sendEmail",
      // { name, email, msg }
      const res = await axios.post(
        "https://yash-bagde-portfolio.onrender.com/api/v1/portfolio/sendEmail",
        { name, email, msg }
      );

      // );
      if (res.data.success) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section
      id="Contact"
      className="relative bg-black  text-white pt-30 py-12 px-4 sm:px-6 flex flex-col items-center"
    >
      {/* Heading */}
      <div className="text-center mb-12 px-2">
        <h2 className="text-2xl sm:text-4xl font-bold mb-2">Get In Touch</h2>
        <p className="text-gray-400 text-sm sm:text-base mb-10">
          Have a project in mind or want to collaborate? I'd love to hear from
          you!
        </p>
      </div>

      {/* Main Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full max-w-5xl">
        {/* Left: Contact Form */}
        <div className="bg-gray-900/60 p-4 sm:p-6 rounded-2xl shadow-lg">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">
            Send me a message
          </h3>
          <p className="text-gray-400 mb-6 text-sm sm:text-base">
            Fill out the form below and I'll get back to you as soon as
            possible.
          </p>

          <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-800 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-800 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-800 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500"
              value={msg}
              onChange={(e) => setmsg(e.target.value)}
            ></textarea>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold text-sm sm:text-base transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="bg-gray-900/60 p-4 sm:p-6 rounded-2xl shadow-lg space-y-4 sm:space-y-6">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">
            Connect with me
          </h3>
          <p className="text-gray-400 mb-4 text-sm sm:text-base">
            You can also reach out to me directly through these channels:
          </p>
          <div className="space-y-6">
            <a
              href="https://github.com/DamonSalvanator"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gray-800 px-4 py-4 rounded-lg hover:bg-gray-700 transition"
            >
              <Github size={20} /> github.com/DamonSalvanator
            </a>

            <a
              href="https://www.linkedin.com/in/yash-bagde-182b14358/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gray-800 px-4 py-4 rounded-lg hover:bg-gray-700 transition"
            >
              <Linkedin size={20} /> linkedin.com/in/yash-bagde
            </a>

            <div className="flex items-center gap-3 bg-gray-800 px-4 py-4 rounded-lg">
              <Mail size={20} /> yashbagde2004july2004@gmail.com
            </div>
          </div>

          <div className="pt-4 text-gray-400 text-xs sm:text-sm">
            <strong>Current Location:</strong> Indore, MP, INDIA
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
