import React, { useEffect, useState } from "react";
import { handleListItemAnimations, createScrollTrigger } from "./utils.js";
import clickSound from "../src/assets/sounds/MenuHit.wav";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "lenis/react";
import profileImage from "../src/assets/img/profile.jpg"; // Import the image
import profileImage320w from "../src/assets/img/profile-320w.jpg";
import profileImage480w from "../src/assets/img/profile-480w.jpg";
import profileImage800w from "../src/assets/img/profile-800w.jpg";
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

    gsap.fromTo(
      ".slide-down",
      { y: "100%", scale: 2 },
      {
        y: "0%",
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".image-trigger",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          onLeave: () => {
            gsap.to(".slide-down", {
              y: "-100%",
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: ".image-trigger2",
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            });
          },
        },
      }
    );

    gsap.fromTo(
      ".text-slide",
      { y: "100%" },
      {
        y: "0%",
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".image-trigger",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          onLeave: () => {
            gsap.to(".text-slide", {
              y: "-100%",
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: ".image-trigger2",
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            });
          },
        },
      }
    );

    gsap.fromTo(
      ".contact-slide",
      { y: "-50%", scale: 2 },
      {
        y: "50%",
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".contact-trigger",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
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

  const playSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };

  return (
    <div className="main-containter text-primary bg-black/90 grainy relative overflow-hidden overflow-y-visible">
      <div className="container mx-auto">
        <div id="home" className="h-screen relative overflow-hidden">
          <div className="select-none font-lexend-zetta p-5 pb-0 w-full">
            <div className="animate-header flex flex-col sm:flex-row items-center w-full text-xs 2xl:text-lg overflow-hidden">
              <div className="overflow-hidden">
                <span className="sm:block hidden ">
                  full-stack developer freelancer Hello world!
                </span>
              </div>

              <div className="flex-grow ml-2 sm:block hidden sm:mt-0 mt-2 overflow-hidden">
                <span className="border-b-2 border-[#F0F4F8] w-full block animate-header2"></span>
              </div>
            </div>
          </div>

          <ul className="z-10 select-none cursor-pointer fixed font-lexend-zetta right-0 items-end justify-end text-2xl 2xl:text-3xl leading-relaxed pr-5">
            <div className="overflow-hidden">
              <li
                className="animate-links glow-on-hover"
                data-link="aboutme"
                onClick={() => {
                  playSound();
                  handleScroll("aboutme");
                }}
              >
                ABOUT ME
              </li>
            </div>
            <div className="overflow-hidden glow-on-hover">
              <li
                className="animate-links"
                data-link="projects"
                onClick={() => {
                  playSound();
                  handleScroll("projects");
                }}
              >
                PROJECTS
              </li>
            </div>
            <div className="overflow-hidden glow-on-hover">
              <li
                className="animate-links"
                data-link="contacts"
                onClick={() => {
                  playSound();
                  handleScroll("contacts");
                }}
              >
                CONTACTS
              </li>
            </div>
          </ul>

          <div className="flex flex-col select-none font-prata sm:leading-45 2xl:leading-70 leading-25 sm:bottom-0 sm:left-0 items-center justify-center sm:absolute sm:pl-5 mt-60 overflow-hidden">
            <div
              className="header overflow-hidden reflection"
              data-text="AARON"
            >
              <h1 className="sm:text-[10.8rem] 2xl:text-[16.2rem] text-[5.1rem] animate-text">
                AARON
              </h1>
            </div>
            <div
              className="header overflow-hidden reflection"
              data-text="BRUCE"
            >
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
              full-stack developer freelancer
            </span>
          </div>

          <div className="flex gap-4 right-0 bottom-0 p-5 fixed items-center z-4">
            <a
              className="overflow-hidden text-white rounded-full hover:shadow-blue-400 hover:shadow-2xl"
              href="https://github.com/bruce-agaloos"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                playSound();
              }}
            >
              <svg
                className="w-10 animate-text fill-current inline-block"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>

            <a
              className="overflow-hidden image-trigger rounded-lg mt-1 hover:shadow-blue-400 hover:shadow-2xl"
              href="https://www.linkedin.com/in/agaloos-aaronbruce"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                playSound();
              }}
            >
              <svg
                className="w-[2.7rem] animate-text glow-on-hover"
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="auto"
                viewBox="0 0 25 25"
                style={{ filter: "invert(1)" }}
              >
                <path
                  fill=""
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div id="aboutme" className="h-screen font-prata p-10 slide-text">
          <div className="sm:block hidden 2xl:text-xl ">ABOUT ME</div>
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
                Larvel React Tailwind MySQL
              </p>
            </div>
            <div></div>
          </div>
        </div>
        <div
          id="projects"
          className="h-screen font-prata p-10 flex flex-col justify-center image-trigger2"
        >
          <div className="sm:block hidden">PROJECTS</div>
          <div className="flex flex-col items-center justify-center flex-grow ">
            <p>this part is still under development</p>
          </div>
        </div>
        <div
          id="contacts"
          className="h-screen font-prata p-10 flex flex-col justify-center contact-trigger"
        >
          <div className="sm:block hidden">CONTACTS</div>
          <div className="flex flex-col items-center justify-center flex-grow -mt-20 ">
            <p className="text-center xl:text-3xl text-2xl mb- contact-slide">
              connect with me
            </p>
            <table className="table-auto mx-auto table-slide">
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
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
