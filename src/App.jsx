import React, { useEffect, useState } from "react";
import { handleListItemAnimations, createScrollTrigger } from "./utils.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "lenis/react";
import profileImage from "../src/assets/img/profile.jpg"; // Import the image
import profileImage320w from "../src/assets/img/profile-320w.jpg";
import profileImage480w from "../src/assets/img/profile-480w.jpg";
import profileImage800w from "../src/assets/img/profile-800w.jpg";
import proj1 from "../src/assets/img/proj/hot.jpg";
import proj2 from "../src/assets/img/proj/1.png";
import NavigationMenu from "../src/components/NavigationMenu";
import SocialLinks from "../src/components/SocialLinks.jsx";
import AboutMe from "./components/AboutMe";
import Contacts from "./components/Contacts";
import Projects from "./components/Projects";
import ProjectModal from "./components/ProjectModal";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const lenis = useLenis();
  const [currentTarget, setCurrentTarget] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null); // State for modal
  const handleCardClick = (index) => {
    setSelectedProject(projects[index]); // Open modal with selected project
  };

  const closeModal = () => {
    setSelectedProject(null); // Close modal
  };
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  history.scrollRestoration = "manual";

  useEffect(() => {
    handleListItemAnimations();
    const tl = gsap.timeline({ defaults: { ease: "power4.inOut" } });

    // Check if the screen width is greater than or equal to 640px (not mobile view)
    if (window.innerWidth >= 640) {
      tl.fromTo(
        ".animate-header",
        { x: "105%" }, // Start out of frame (right)
        { x: "0%", duration: 0.8 },
        0 // Slide into view
      );
    }

    tl.fromTo(
      ".animate-text",
      { y: "105%" }, // Start out of frame (below)
      { y: "0%", duration: 1 },
      0
      // Slide up into view
    );

    tl.fromTo(
      ".animate-links",
      { x: "100%" }, // Start out of frame (right)
      { x: "0%", duration: 0.5, stagger: 0.05 },
      1 // Slide into view
    );

    createScrollTrigger("aboutme", setCurrentTarget);
    createScrollTrigger("projects", setCurrentTarget);
    createScrollTrigger("contacts", setCurrentTarget);
  }, []);

  function handleScroll(id) {
    const targetElement = document.getElementById(id);
    const homeElement = document.getElementById("home");

    if (targetElement && homeElement) {
      if (currentTarget === id) {
        // Scroll to the home section if the same link is clicked twice
        lenis?.scrollTo(homeElement, { duration: 3 });
        setCurrentTarget("home");
      } else {
        setCurrentTarget(id);
        lenis?.scrollTo(targetElement, { duration: 3 });
      }
    }
  }

  const projects = [
    {
      title: "eXtHealth",
      type: "Undergrad Thesis",
      description:
        "A browser extension that fact-checks health claims on X posts using Natural Language Processing (NLP) and provides timely health tips and reminders as you browse the web.",
      image: proj1,
      badges: ["React", "Typescript", "Python"],
      duration: "March 2024 - December 2024",
      url: "https://github.com/bruce-agaloos/eXtHealth",
    },
    // {
    //   title: "CCS Forums",
    //   description:
    //     "A community forum for College of Computing Studies students.",
    //   image: proj1,
    //   badges: ["Php", "Laravel"],
    // },
    // {
    //   title: "Math Dungeon",
    //   description: "A QoL application for Windows sound management system.",
    //   image: proj1,
    //   badges: ["B4A", "Java"],
    // },
    {
      title: "Volmix",
      description: "A QoL application for Windows sound management system.",
      type: "Personal",
      image: proj1,
      badges: ["C#", ".NET", "WPF"],
      duration: "July 2024 - Present",
      url: "https://github.com/bruce-agaloos/Volmix"
    },
  ];

  return (
    <div className="text-primary bg-black/90 grainy relative overflow-hidden overflow-y-visible">
      <div id="home" className="h-screen w-screen relative overflow-hidden">
        <NavigationMenu handleScroll={handleScroll} />
        <SocialLinks />
        <div className="select-none font-lexend-zetta p-5 pb-0 w-full">
          <div className="header overflow-hidden reflection">
            <div className="animate-header flex flex-col sm:flex-row items-center w-full text-xs 2xl:text-lg overflow-hidden">
              <div className="overflow-hidden">
                <span className="sm:block hidden ">
                  <p>
                    full-stack • web developer • technical seo audits •
                    freelancer
                  </p>
                </span>
              </div>
              <div className="flex-grow ml-2 sm:block hidden sm:mt-0 mt-2 overflow-hidden">
                <span className="border-b-2 border-[#F0F4F8] w-full block animate-header2"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col select-none font-prata sm:leading-45 2xl:leading-70 leading-25 sm:bottom-0 sm:left-0 items-center justify-center sm:my-0 sm:absolute sm:pl-5 overflow-hidden h-full w-full absolute sm:h-auto sm:w-auto">
          <div className="header overflow-hidden reflection" data-text="AARON">
            <h1 className="xl:text-[10.8rem] 2xl:text-[16.2rem] text-[5.1rem] animate-text">
              AARON
            </h1>
          </div>
          <div className="header overflow-hidden reflection" data-text="BRUCE">
            <h1 className="xl:text-[11rem] 2xl:text-[16.8rem] text-[5.4rem] animate-text">
              BRUCE
            </h1>
          </div>
          <div
            className="header overflow-hidden reflection"
            data-text="AGALOOS"
          >
            <h1 className="xl:text-[7.8rem] 2xl:text-[12rem] xl:leading-35 2xl:leading-50 leading-15 text-6xl animate-text">
              AGALOOS
            </h1>
          </div>

          <span className="sm:hidden w-[25rem] block font-lexend-zetta text-xs text-center p-4 animate-text">
            <p>
              {" "}
              full-stack • web developer • technical seo audits • freelancer
            </p>
          </span>
        </div>
      </div>


      <AboutMe />
      <Projects projects={projects} handleCardClick={handleCardClick} />
      <Contacts />


    </div>
  );
};

export default App;
