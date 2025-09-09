import React from 'react'

const About = () => {
  return (
    <div
      id="About"
      className="min-h-full  w-full flex flex-col items-center justify-center bg-black text-white px-6 sm:px-10 md:px-20 py-12"
    >
      {/* Heading */}
      <h3 className="text-2xl mt-10  sm:text-3xl md:text-4xl mb-10 font-bold text-green-700 text-center">
        About Me
      </h3>

      {/* Description */}
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-light text-center md:text-left max-w-4xl">
        Hi, I am <span className="font-semibold">Yash Bagde</span>, a passionate Web Developer with
        over a year of experience in multiple projects. I continuously evolve my skills
        and embrace new technologies to enhance efficiency in web development.
        <br className="hidden md:block" />
        Currently, I'm pursuing a Bachelor of Technology (B.Tech) in Computer Science,
        merging my technical expertise with business insight for impactful results.
      </p>

      {/* Subheading */}
      <h4 className="mt-10 text-lg sm:text-xl md:text-2xl font-semibold text-green-500 text-center">
        Why would you hire me for work?
      </h4>

      {/* List */}
      <ul className="mt-6 space-y-4 mb-10 text-sm sm:text-base md:text-lg font-light max-w-3xl px-4 sm:px-0">
        <li>
          👉 I ensure my code meets high standards of performance, security, and maintainability.
        </li>
        <li>
          👉 I focus on building software that's both technically sound and business-driven.
        </li>
        <li>
          👉 I approach solutions that not only meet deadlines but also exceed expectations.
        </li>
      </ul>
    </div>
  )
}

export default About
