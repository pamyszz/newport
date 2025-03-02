import  { useState } from "react";
import { motion } from "framer-motion";
import { FaJs, FaReact, FaNodeJs, FaPython,FaAws,FaJava } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill, RiAngularjsFill} from "react-icons/ri";
import { CgFigma } from "react-icons/cg";

export default function Skills() {
  const [skills] = useState([
    { id: 1, name: "JavaScript", icon: <FaJs size={50} /> },
    { id: 2, name: "React", icon: <FaReact size={50} /> },
    { id: 3, name: "Node.js", icon: <FaNodeJs size={50} /> },
    { id: 4, name: "Python", icon: <FaPython size={50} /> },
    { id: 5, name: "AWS", icon: <FaAws size={50} /> },
    { id: 6, name: "Java", icon: <FaJava size={50} /> },
    { id: 7, name: "Postgresql", icon: <BiLogoPostgresql size={50} /> },
    { id: 8, name: "Next.js", icon: <RiNextjsFill size={50} /> },
    { id: 9, name: "Angular", icon: <RiAngularjsFill size={50} /> },
    { id: 10, name: "Figma", icon: <CgFigma size={50} /> },
  ]);

  const [experiences] = useState([
    {
      id: 1,
      company: "Itaú Unibanco",
      role: "Data Analyts & Products Intern",
      period: "Set 2024 - Present",
      description:
        "As a Product Intern at Itaú Unibanco, I work with data analysis to optimize credit limit strategies and enhance customer experience. My role involves leveraging data-driven insights to improve decision-making processes, collaborating with cross-functional teams, and developing solutions that align with business goals. Through this experience, I’ve strengthened my skills in analytics, problem-solving, and working in an agile environment.",
      logo: "/assets/itau.svg",
    },
    {
      id: 2,
      company: "Hospital Japonês Santa Cruz",
      role: "Recepcionista I",
      period: "Jun - 2021 - Mar - 2022",
      description:
        "As a receptionist, I was responsible for registering and assisting patients in the Tasy system (Java), handling the opening of records, service orders, and insurance authorizations with accuracy. I provided attentive support to patients, helping them locate exams and appointments while ensuring a smooth service flow. Additionally, I managed appointment scheduling, exam deliveries, and hospital billing, working with Excel spreadsheets and insurance fee processing. This experience enhanced my adaptability, collaboration, and organizational skills in a dynamic environment.",
      logo: "/assets/hjsc.svg",
    },

  {
    id: 3,
    company: "Freelancer",
    role: "Front-end & UI/UX Designer",
    period: "Jan - 2021 - Present",
    description:
      "As a freelance frontend developer, I have worked on building and optimizing user interfaces using technologies like React.js, TypeScript, and TailwindCSS. My focus is on creating responsive, accessible, and visually appealing web applications that enhance user experience. I have collaborated with clients to transform ideas into functional designs, ensuring performance optimization and seamless interactions. This experience has strengthened my skills in UI/UX, component-based architecture, and frontend performance tuning while allowing me to manage multiple projects independently.",
    logo: "/assets/pc.svg",
  },
]);

  return (
    <div className="mt-3 lg:mt-16" id="skills">
      <div className="px-5 lg:px-28">

        <motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 text-lg font-bold mt-7 lg:mt-16 w-full place-items-center gap-y-6 lg:gap-y-12">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: skill.id * 0.1 }}
              viewport={{ once: true }}
            >
              {skill.icon}
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Experience Section */}
      <div className="bg-black w-full my-8 py-8 lg:my-16 lg:py-16">
        <motion.h2
          className="text-2xl lg:text-4xl text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Experience</span>
        </motion.h2>

        {/* Experience Cards */}
        <div className="px-5 lg:px-28 my-8 lg:mt-16 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="bg-black p-5 border border-[#D4D4D8] rounded-md hover:bg-[#27272A] transition-all cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center">
                <div className="flex items-center gap-5">
                  <img className="w-7" src={exp.logo} alt="" />
                  <h2 className="font-semibold text-white text-lg lg:text-xl">
                    {exp.role} at {exp.company}
                  </h2>
                </div>
                <span className="text-[#D4D4D8] font-semibold text-sm mt-4 lg:mt-0 lg:text-base">
                  {exp.period}
                </span>
              </div>
              <p className="text-[#D4D4D8] mt-6 text-sm/6 lg:text-base font-light">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
