import 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row" id="about">
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img 
          src="/assets/pamy.svg" 
          alt="About Me Illustration" 
          className="w-full h-auto max-w-xs lg:max-w-md mx-auto"
        />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
        I am a passionate, self-proclaimed designer who specializes in full-stack development (React.js & Java). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, clean design, and writing clear, readable, and highly performant code are my priorities.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
        I started in tech through psychology research at USP, but my curiosity led me to web development. Since then, I’ve specialized in full-stack development with Spring Boot, AWS, TypeScript, and Node.js. As a Product Intern at Itaú Unibanco, I use data analysis to optimize credit limit strategies. </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
        Beyond my professional work, I love contributing to the tech community. As an active member of &apos;Mansão Dev&apos; and &apos;Conecta Devs&apos;, I help fellow developers, share insights, and stay updated on industry trends.
        When I am not in full-on developer mode, you can find me engaging in tech discussions, organizing community events, or experimenting with new tools and frameworks.</p>
      </motion.div>
    </div>
  );
}