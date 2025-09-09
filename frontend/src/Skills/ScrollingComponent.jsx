
import React, { useState, useEffect } from "react";
import Reacticon from '../images/React.png'
import css from '../images/css.png'
import ex from '../images/ex.png'
import git from '../images/Git.svg'
import gsap from '../images/gsap.png'
import html from '../images/html.png'
import js from '../images/js.png'
import mongodb from '../images/mongodb.png'
import mysql from '../images/MySQL.png'
import node from '../images/node.png'
import postman from '../images/postman.png'
import tailwind from '../images/tailwind.png'
import github from '../images/github.png'
import bootstrap from '../images/Bootstrap.png'
import vs from '../images/vs.png'

const SemiCircleTechWheel = () => {
  const items = [
    { name: "React", img: Reacticon },
    { name: "Tailwind", img: tailwind },
    { name: "Node.js", img: node },
    { name: "MongoDB", img: mongodb },
    { name: "JavaScript", img: js },
    { name: "HTML5", img: html },
    { name: "CSS3", img: css },
    { name: "Git", img: git },
    { name: "GitHub", img: github },
    { name: "Gsap", img: gsap },
    { name: "Express", img: ex },
    { name: "MySQL", img: mysql },
    { name: "Postman", img: postman },
    { name: "Bootstrap", img: bootstrap },
    { name: "VS Code", img: vs },
  ];

  const [outerAngle, setOuterAngle] = useState(0);
  const [innerAngle, setInnerAngle] = useState(0);

  const [sizes, setSizes] = useState({ outer: 95, inner: 75 });
  const [radii, setRadii] = useState({ outer: 250, inner: 130 });
  const [spacing, setSpacing] = useState(70);

  const outerItems = items.slice(0, Math.ceil(items.length / 2));
  const innerItems = items.slice(Math.ceil(items.length / 2));
     
useEffect(() => {
  const updateLayout = () => {
    if (window.innerWidth <= 505) {
      // 📱 Extra-small phones
      setSizes({ outer: 45, inner: 38 });
      setRadii({ 
        outer: Math.max(120, window.innerWidth / 2.9), 
        inner: Math.max(70, window.innerWidth / 11) 
      });
      setSpacing(Math.max(15, Math.min(window.innerWidth / 22, 30)));
    } else if (window.innerWidth < 640) {
      // Normal Mobile
      setSizes({ outer: 60, inner: 45 });
      setRadii({ 
        outer: Math.max(150, window.innerWidth / 2.9), 
        inner: Math.max(90, window.innerWidth / 9) 
      });
      setSpacing(Math.max(20, Math.min(window.innerWidth / 20, 40)));
    } else if (window.innerWidth < 1024) {
      // Tablet
      setSizes({ outer: 75, inner: 60 });
      setRadii({ outer: 200, inner: 110 });
      setSpacing(55);
    } else {
      // Laptop/Desktop
      setSizes({ outer: 95, inner: 75 });
      setRadii({ outer: 250, inner: 130 });
      setSpacing(70);
    }
  };

  updateLayout();
  window.addEventListener("resize", updateLayout);
  return () => window.removeEventListener("resize", updateLayout);
}, []);


  // ⚙️ Animation for arcs
  useEffect(() => {
    const interval = setInterval(() => {
      setOuterAngle((prev) => prev + 0.01);
      setInnerAngle((prev) => prev - 0.01);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // 🔄 Arc Renderer
  const renderArc = (rowItems, radius, angleShift, isInner = false) => {
    return rowItems.map((item, i) => {
      const angle = angleShift + (i * (Math.PI / (rowItems.length - 4)));
      const x = radius * Math.cos(angle);
      const y = -radius * Math.sin(angle);

      return (
        <div
          key={i}
          className="absolute"
          style={{
            left: "45%",
            top: "53%",
            transform: `translate(${x}px, ${y - spacing}px)`
          }}
        >
          <div
            className="flex items-center justify-center rounded-2xl backdrop-blur-md border border-green-400 
              hover:scale-110 transition-transform duration-500"
            style={{
              width: isInner ? `${sizes.inner}px` : `${sizes.outer}px`,
              height: isInner ? `${sizes.inner}px` : `${sizes.outer}px`,
              boxShadow: "0 0 15px rgba(16,185,129,0.6)",
            }}
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-[55%] h-[55%] object-contain"
            />
          </div>
        </div>
      );
    });
  };

  return (
    <div className="flex mt-20  justify-center w-full h-230">
      <div
        className="relative w-[90%] md:w-[80%] lg:w-[72%] max-w-[1200px] h-[70%] flex flex-col items-center justify-center rounded-3xl 
        backdrop-blur-xl bg-white/5 border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.15)] 
        border border-green-600 shadow-green-600 shadow-3xl overflow-hidden"
      >
        <div className="relative w-full h-full">
          {/* Outer arc */}
          {renderArc(outerItems, radii.outer, outerAngle, false)}

          {/* Inner arc */}
          {renderArc(innerItems, radii.inner, innerAngle, true)}
        </div>
      </div>
    </div>
  );
};

export default SemiCircleTechWheel;
