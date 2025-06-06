import React from "react";

const NavigationMenu = ({ handleScroll }) => {
  return (
    <ul className="mt-8 z-10 select-none cursor-pointer fixed font-lexend-zetta right-0 items-end justify-end text-xl 2xl:text-2xl leading-relaxed mr-5">
      <div className="overflow-hidden glow-on-hover">
        <li
          className="animate-links"
          data-link="aboutme"
          onClick={() => {
            handleScroll("aboutme");
          }}
        >
          <h2>ABOUT ME</h2>
        </li>
      </div>
      <div className="overflow-hidden glow-on-hover">
        <li
          className="animate-links"
          data-link="projects"
          onClick={() => {
            handleScroll("projects");
          }}
        >
          <h2>PROJECTS</h2>
        </li>
      </div>
      <div className="overflow-hidden glow-on-hover">
        <li
          className="animate-links"
          data-link="contacts"
          onClick={() => {
            handleScroll("contacts");
          }}
        >
          <h2>CONTACTS</h2>
        </li>
      </div>
    </ul>
  );
};

export default NavigationMenu;
