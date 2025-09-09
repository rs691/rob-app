// app/page.jsx
"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { FaGithub, FaHome, FaLinkedin } from "react-icons/fa";

const PortfolioPage = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    });
  }, [controls]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={controls}
        className="text-center"
      >
        <img
          src="/rob-app/profileSelfie2.jpg"
          alt="Your Name"
          width={150}
          height={150}
          className="rounded-full border-4 border-gray-700 mb-4"
        />
        <h1 className="text-5xl font-bold mb-2">John Doe</h1>
        <p className="text-xl text-gray-400">Software Developer & Designer</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex space-x-4 mt-6"
      >
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <FaGithub
            size={32}
            className="text-gray-400 hover:text-white transition-colors"
          />
        </a>
        <a
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <FaLinkedin
            size={32}
            className="text-gray-400 hover:text-white transition-colors"
          />
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer" title="Home">
          <FaHome
            size={32}
            className="text-gray-400 hover:text-white transition-colors"
          />
        </a>
      </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            I'm a passionate developer with a knack for building beautiful and
            functional web applications. My skills include React, Next.js, and
            creating seamless user experiences.
          </p>
        </motion.div>
    

      <div className="mt-12 w-full max-w-4xl">
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-bold mb-2">Project One</h3>
            <p className="text-gray-400">
              A brief description of your project.
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-bold mb-2">Project Two</h3>
            <p className="text-gray-400">
              Another brief description of your project.
            </p>
          </motion.div>
      </div>
    </div>
  );
};

export default PortfolioPage;
