import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BiLogoGmail } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { IoLogoLinkedin, IoLogoInstagram } from 'react-icons/io5';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className='lg:my-16 lg:px-28 my-8 px-5 text-center'
      id='contact'
    >
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className='text-2xl lg:text-4xl'
      >
        Contact <span className='font-extrabold'>Me</span>
      </motion.h2>

      <div className='mt-8 lg:mt-16'>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className='lg:w-[40%] mx-auto'
        >
          <div className='font-extrabold text-2xl lg:text-5xl mt-5 lg:mt-0 space-y-1 lg:space-y-3'>
            <h2>
              Let&apos;s <span className='text-white'>
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
                  talk
                </span>
              </span> for
            </h2>
            <h2>Something special</h2>
          </div>

          <p className='text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-6'>
            I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.
          </p>

          <div className='font-semibold text-sm lg:text-xl flex flex-col mt-6 gap-2 lg:gap-4'>
            <motion.a
              whileHover={{ x: 5 }}
              className='flex items-center gap-2 group justify-center'
              href="mailto:pamelamiranda.o87@gmail.com"
            >
              <span className='border-2 transition-all border-transparent group-hover:border-black rounded-full p-1'>
                <BiLogoGmail className="w-4 h-4 lg:w-5 lg:h-5" />
              </span>
              pamelamiranda.o87@gmail.com
            </motion.a>

            <div className='flex items-center justify-center gap-x-2 lg:gap-x-5'>
              {[{
                Icon: IoLogoLinkedin,
                link: "https://www.linkedin.com/in/pamydev"
              }, {
                Icon: IoLogoInstagram,
                link: "https://instagram.com/pamyy_szz"
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
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
