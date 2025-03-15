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

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const lenis = useLenis();
  const [currentTarget, setCurrentTarget] = useState("home");

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
        { x: "-100%" }, // Start out of frame (right)
        { x: "0%", duration: 2 } // Slide into view
      );
    }

    tl.fromTo(
      ".animate-text",
      { y: "105%" }, // Start out of frame (below)
      { y: "0%", duration: 1 } // Slide up into view
    );

    tl.fromTo(
      ".animate-links",
      { x: "100%" }, // Start out of frame (right)
      { x: "0%", duration: 0.5, stagger: 0.1 } // Slide into view
    );

    // gsap.fromTo(
    //   ".home-slide",
    //   { y: "100%", scale: 2 },
    //   {
    //     y: "0%",
    //     scale: 1,
    //     ease: "none",
    //     scrollTrigger: {
    //       trigger: ".home-trigger",
    //       start: "top bottom",
    //       end: "bottom top",
    //       scrub: true,
    //       onLeave: () => {
    //         gsap.to(".slide-down", {
    //           y: "-100%",
    //           scale: 1,
    //           ease: "none",
    //           scrollTrigger: {
    //             trigger: ".image-trigger2",
    //             start: "top bottom",
    //             end: "bottom top",
    //             scrub: true,
    //           },
    //         });
    //       },
    //     },
    //   }
    // );

    // gsap.fromTo(
    //   ".slide-down",
    //   { y: "100%", scale: 2 },
    //   {
    //     y: "0%",
    //     scale: 1,
    //     ease: "none",
    //     scrollTrigger: {
    //       trigger: ".image-trigger",
    //       start: "top bottom",
    //       end: "bottom top",
    //       scrub: true,
    //       onLeave: () => {
    //         gsap.to(".slide-down", {
    //           y: "-100%",
    //           scale: 1,
    //           ease: "none",
    //           scrollTrigger: {
    //             trigger: ".image-trigger2",
    //             start: "top bottom",
    //             end: "bottom top",
    //             scrub: true,
    //           },
    //         });
    //       },
    //     },
    //   }
    // );

    // gsap.fromTo(
    //   ".text-slide",
    //   { y: "100%" },
    //   {
    //     y: "0%",
    //     scale: 1,
    //     ease: "none",
    //     scrollTrigger: {
    //       trigger: ".image-trigger",
    //       start: "top bottom",
    //       end: "bottom top",
    //       scrub: true,
    //       onLeave: () => {
    //         gsap.to(".text-slide", {
    //           y: "-100%",
    //           scale: 1,
    //           ease: "none",
    //           scrollTrigger: {
    //             trigger: ".image-trigger2",
    //             start: "top bottom",
    //             end: "bottom top",
    //             scrub: true,
    //           },
    //         });
    //       },
    //     },
    //   }
    // );

    // gsap.fromTo(
    //   ".contact-slide",
    //   { y: "-50%", scale: 2 },
    //   {
    //     y: "50%",
    //     scale: 1,
    //     ease: "none",
    //     scrollTrigger: {
    //       trigger: ".contact-trigger",
    //       start: "top bottom",
    //       end: "bottom top",
    //       scrub: true,
    //     },
    //   }
    // );

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

  return (
    <div className="main-containter text-primary bg-black/90 grainy relative overflow-hidden overflow-y-visible">
      <div id="home" className="h-screen w-screen relative overflow-hidden">
        <NavigationMenu handleScroll={handleScroll} />
        <SocialLinks />
        <div className="select-none font-lexend-zetta p-5 pb-0 w-full">
          <div className="animate-header flex flex-col sm:flex-row items-center w-full text-xs 2xl:text-lg overflow-hidden">
            <div className="overflow-hidden">
              <span className="sm:block hidden ">
                <p> full-stack web developer freelancer Hello world!</p>
              </span>
            </div>
            <div className="flex-grow ml-2 sm:block hidden sm:mt-0 mt-2 overflow-hidden">
              <span className="border-b-2 border-[#F0F4F8] w-full block animate-header2"></span>
            </div>
          </div>
        </div>

        <div className="flex flex-col select-none font-prata sm:leading-45 2xl:leading-70 leading-25 sm:bottom-0 sm:left-0 items-center justify-center sm:absolute sm:pl-5 mt-60 overflow-hidden">
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
            <p> full-stack web developer freelancer Hello world!</p>
          </span>
        </div>
      </div>
      <div className="container mx-auto">
        <div id="aboutme" className="h-screen font-prata p-10 slide-text">
          <div className="flex flex-col sm:flex-row items-center justify-center xl:mt-10 xl:gap-20">
            <div className="overflow-hidden z-2">
              <img
                className="h-auto w-[20rem] slide-down 2xl:w-[30rem] object-cover object-top opacity-65"
                src={profileImage} // Use the imported image
                srcSet={`
                  ${profileImage320w} 320w,
                  ${profileImage480w} 480w,
                  ${profileImage800w} 800w
                `}
                sizes="(max-width: 640px) 20rem, 30rem"
                alt="profile"
                loading="lazy"
              />
            </div>

            <div className="p-5 xl:text-left text-center text-slide">
              <p className="text-3xl 2xl:text-5xl">Hi I'm Aaron</p>
              <p className="2xl:text-xl">Computer Science Major</p>
              <br className="" />
              <p className="2xl:text-xl">
                mad crazy about <br className="xl:hidden block" />
                <span className="text-2xl 2xl:text-3xl underline">
                  website development
                </span>
              </p>
              <br className="xl:hidden blockr" />
              <p className="2xl:text-xl">
                well versed in <br className="xl:hidden block" />
                <span className="text-xl 2xl:text-2xl">
                  {" "}
                  php typescript javascript
                </span>{" "}
              </p>
              <br className="xl:hidden block" />
              <p className="2xl:text-xl">
                have basic knowledge in <br className="xl:hidden block" />
                <span className="text-xl 2xl:text-2xl">
                  {" "}
                  python c# WPF
                </span>{" "}
              </p>
              <br />
              <p className="2xl:text-xl">technologies I use are</p>
              <p className="text-xl 2xl:text-2xl">
                Larvel React Tailwind WordPress MySQL
              </p>
            </div>
          </div>
        </div>
        <div
          id="projects"
          className="h-auto font-prata p-10 flex flex-col image-trigger2"
        >
          <div className="text-center text-5xl pb-10">PROJECTS</div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10 xl:p-15 gap-10 p-">
            <div className="flex flex-col items-center justify-center">
              <div className="z-3 font-lexend-zetta flex flex-col h-full">
                <div className="border-primary border-2 p-2 h-57">
                  <img
                    className="opacity-60 object-cover w-full h-full"
                    src={proj1}
                    alt=""
                  />
                </div>
                <div className="flex-grow p-2">
                  <p className="text-lg font-semibold">eXtHealth</p>
                  <p className="text-xs leading-loose">
                    a browser extension tool for fact-checking health related
                    social-media and health tips reminder
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="z-3 font-lexend-zetta flex flex-col h-full">
                <div className="border-primary border-2 p-2 h-57">
                  <img
                    className="opacity-60 object-cover w-full h-full"
                    src={proj2}
                    alt=""
                  />
                </div>
                <div className="flex-grow p-2">
                  <p className="text-lg font-semibold">CCS Forums</p>
                  <p className="text-xs leading-loose">
                    A community forum for College of Computing Studies students
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="z-3 font-lexend-zetta flex flex-col h-full">
                <div className="border-primary border-2 p-2 h-57">
                  <img
                    className="opacity-60 object-cover w-full h-full"
                    src={proj1}
                    alt=""
                  />
                </div>
                <div className="flex-grow p-2">
                  <p className="text-lg font-semibold">Volmix</p>
                  <p className="text-xs leading-loose">
                    A QoL application for Windows sound management system.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="z-3 font-lexend-zetta flex flex-col h-full">
                <div className="border-primary border-2 p-2 h-57">
                  <img
                    className="opacity-60 object-cover w-full h-full"
                    src={proj2}
                    alt="image"
                  />
                </div>
                <div className="flex-grow p-2">
                  <p className="text-lg font-semibold">Chromafit</p>
                  <p className="text-xs leading-loose">
                    A clothing brand website.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="contacts"
          className="h-screen font-prata p-10 flex flex-col justify-center contact-trigger"
        >
          <div className="flex flex-col items-center justify-center flex-grow -mt-20 ">
            <p className="text-center xl:text-3xl text-2xl mb- contact-slide">
              connect with me
            </p>
            <p>
              <a
                className="hover:underline text-2xl underline"
                href="mailto:agaloos.aaronbruce@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                agaloos.aaronbruce@gmail.com
              </a>
            </p>
            {/* <table className="table-auto mx-auto table-slide">
              <tbody>
                <tr>
                  <td className="pr-4 text-right">email:</td>
                  <td>
                    <a
                      className="hover:underline"
                      href="mailto:agaloos.aaronbruce@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      agaloos.aaronbruce@gmail.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="pr-4 text-right">linkedIn:</td>
                  <td>
                    <a
                      className="hover:underline"
                      href="https://www.linkedin.com/in/agaloos-aaronbruce"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      agaloos-aaronbruce
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="pr-4 text-right">github:</td>
                  <td>
                    <a
                      className="hover:underline"
                      href="https://github.com/bruce-agaloos"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      bruce-agaloos
                    </a>
                  </td>
                </tr>
              </tbody>
            </table> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
