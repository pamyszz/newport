import { TbExternalLink, TbBrandGithub } from "react-icons/tb";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback } from "react";
import "../styles/embla.css";

const projects = [
  {
    id: 1,
    title: "Sul Solidário",
    description: "A platform built to support flood victims in Rio Grande do Sul, where I contributed as a UI/UX Designer and Front-End Developer. My work focused on creating an empathetic and intuitive design, ensuring that those in need could easily access critical information and assistance. I poured my heart into designing an experience that felt both supportive and accessible, helping to make a difference in the lives of people facing such a challenging time.",
    image: "/assets/project01.png",
    link: "https://www.sulidario.com.br",
    github: "https://github.com/pamyszz/SulSolidario"
  },
  {
    id: 2,
    title: "Beats 3",
    description: "The Beats 3 website offers a wide range of high-quality Beats headphones, providing both premium and affordable options for different preferences and budgets. With a focus on superior sound and comfort, the site caters to those seeking an exceptional audio experience, whether for everyday use or more advanced listening needs.",
    image: "/assets/project02.png",
    link: "https://beats-3-five.vercel.app/",
    github: "https://github.com/pamyszz/Beats-3"
  },
  {
    id: 3,
    title: "Modelo - Site Sushi",
    description: "This is a concept website for a sushi restaurant, featuring a menu with popular dishes, event details, and the ability to place orders. Built with HTML, CSS, and JavaScript, it offers a clean, user-friendly design, ensuring a smooth experience across devices.",
    image: "/assets/project03.png",
    link: "https://pamys-sushi.vercel.app/",
    github: "https://github.com/pamyszz/Pamy-s-Sushi"
  },
  {
    id: 4,
    title: "Netflix - Clone",
    description: "This is a Netflix clone developed as part of a personal project. The project was built using HTML, CSS, JavaScript, and Bootstrap. Below are some details on how the site was structured and key features. (The responsive design is still under development).",
    image: "/assets/project04.png",
    link: "https://netflixo-tfmx.vercel.app/",
    github: "https://github.com/pamyszz/netflixo"
  },
  {
    id: 5,
    title: "Praiagens",
    description: "Praiagens is your go-to guide for discovering Brazil's best beaches. It offers travel packages, an intuitive search bar, and details about our mission. Built with HTML, CSS, and JavaScript, the site includes VLibras for accessibility and a night mode for a better browsing experience. Explore and plan your perfect beach getaway with us!",
    image: "/assets/project05.png",
    link: "https://praiagens-q9gj5wm7w-pamys-projects.vercel.app/",
    github: "https://github.com/pamyszz/praiagens"
  },
  {
    id: 6,
    title: "Coffee Station",
    description: "Coffee Station is an online platform for coffee shop customers in public transport stations. Due to time constraints, the project is not fully responsive, as the focus was on development rather than responsiveness. It was the first team project for many contributors, some of whom were new to coding.",
    image: "/assets/project06.png",
    link: "https://coffee-station-mauve.vercel.app/",
    github: "https://github.com/pamyszz/coffee_station-"
  },
  {
    id: 7,
    title: "Mapa de Carreira",
    description: "Mapa de Carreira is a platform designed to help individuals plan their career paths. It offers resources, tools, and guidance to help users navigate their professional journeys. Built with HTML, CSS, and JavaScript, the site includes features for career mapping and goal setting.",
    image: "/assets/project07.png",
    link: "https://mapa-carreira.vercel.app/",
    github: "https://github.com/pamyszz/mapa_carreira"
  }
];

export default function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: "y", // Carrossel na vertical
    dragFree: true, // Permite arrastar livremente
    loop: false, // Para evitar rotação infinita
    dragSpeed: 3, // Ajuste a velocidade do drag se necessário
  });

  const handleWheel = useCallback((e) => {
    if (e.deltaY > 0) {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      }
    } else if (e.deltaY < 0) {
      if (emblaApi.canScrollPrev()) {
        emblaApi.scrollPrev();
      }
    }
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || !emblaRef.current) return;

    const emblaNode = emblaRef.current;
    emblaNode.addEventListener("wheel", handleWheel);

    return () => {
      emblaNode.removeEventListener("wheel", handleWheel);
    };
  }, [emblaApi, emblaRef, handleWheel]);

  return (
    <div className="relative h-screen bg-black px-4 lg:px-28 py-8 my-8 lg:py-16 lg:my-18 overflow-hidden" id="projects">
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        My Main <span className="font-extrabold">Projects</span>
      </h2>

      <div className="relative flex flex-col items-center overflow-hidden h-full">
        <div className="embla w-full h-full" ref={emblaRef}>
          <div className="embla__container flex flex-col">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="embla__slide flex justify-between items-center flex-col lg:flex-row gap-8 lg:gap-16 bg-black p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 90, damping: 10, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="lg:w-[620px] w-full rounded-2xl overflow-hidden">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <img
                      className="w-full h-auto max-h-[300px] lg:max-h-[400px] transition-all duration-500 cursor-pointer object-cover filter grayscale brightness-70 hover:filter-none"
                      src={project.image}
                      alt={project.title}
                    />
                  </a>
                </div>
                <div className="lg:w-1/2 w-full lg:space-y-4 space-y-4">
                  <h2 className="font-extrabold text-white mt-5 lg:mt-0 text-3xl lg:text-5xl">
                    {String(project.id).padStart(2, "0")}
                  </h2>
                  <p className="font-bold text-white text-xl lg:text-4xl">{project.title}</p>
                  <p className="font-light text-sm lg:text-base text-[#71717A]">
                    {project.description}
                  </p>
                  <div className="flex space-x-4 mt-3">
                    <a href={project.link} className="text-white" target="_blank" rel="noopener noreferrer">
                      <TbExternalLink size={24} />
                    </a>
                    <a href={project.github} className="text-white" target="_blank" rel="noopener noreferrer">
                      <TbBrandGithub size={24} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
