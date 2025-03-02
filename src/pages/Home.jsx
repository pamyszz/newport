import "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin, IoLogoInstagram } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="mt-20" id="home">
      <div className="flex justify-between py-10 items-center px-5 lg:px-28 lg:flex-row flex-col-reverse">

        <motion.div
          className="lg:w-[45%]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >

          <motion.div
            className="text-2xl lg:text-5xl flex flex-col mt-8 lg:mt-0 gap-2 lg:gap-5 text-nowrap"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2, ease: "easeInOut" },
              },
            }}
          >
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              Hello, I am <TypeAnimation
                sequence={[
                  'Pamela.',
                  5000,
                ]}
                speed={10}
                style={{ fontWeight: 400 }}
                repeat={Infinity}
              />
            </motion.h2>
            
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                <span className="font-extrabold">Fullstack</span>{" "}
                <span
              className="font-extrabold font-sora text-white"
              style={{
                textShadow: `
                  -2px -2px 0 black,  
                  2px -2px 0 black,  
                  -2px  2px 0 black,  
                  2px  2px 0 black
                `,
                color: "white",
                display: "inline-block",
                lineHeight: "normal",
                fontSize: "inherit"
              }}
            >
              Developer
            </span>
              </motion.h2>
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              Based In <span className="font-extrabold">Brazil.</span>
            </motion.h2>
          </motion.div>

          <motion.p
            className="text-[#71717A] text-sm lg:text-base mt-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            I’m a Product Intern at Itaú Unibanco, working with data analysis to optimize credit limit strategies and enhance customer experience. With a strong background in full-stack development, I also have experience as a freelance web developer, always seeking to create value for users and businesses.
          </motion.p>

          <motion.div
            className="flex items-center gap-x-5 mt-10 lg:mt-14"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            {[{
              Icon: BiLogoGmail,
              link: "mailto:pamelamiranda.o87@gmail.com"
            }, {
              Icon: IoLogoLinkedin,
              link: "https://www.linkedin.com/in/pamydev"
            }, {
              Icon: IoLogoInstagram,
              link: "https://www.instagram.com/pamyy_szz"
            }, {
              Icon: BsGithub,
              link: "https://github.com/pamyszz"
            }].map(({ Icon, link }, index) => (
              <motion.a
                key={index}
                href={link}
                className="bg-white p-2 lg:p-3 rounded border-2 border-black"
                whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:w-[55%] w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img className="h-full w-full" src="/assets/hero.svg" alt="Hero Vector" />
        </motion.div>
      </div>
    </div>
  );
}
