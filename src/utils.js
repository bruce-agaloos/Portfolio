import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const handleListItemAnimations = () => {
    const listItems = document.querySelectorAll("ul li");

    listItems.forEach((item) => {
        item.style.position = "relative";
        item.style.overflow = "hidden";

        const borderBottom = document.createElement("div");
        borderBottom.style.position = "absolute";
        borderBottom.style.bottom = "0";
        borderBottom.style.left = "0";
        borderBottom.style.width = "100%";
        borderBottom.style.height = "3px";
        borderBottom.style.backgroundColor = "#F0F4F8";
        borderBottom.style.transform = "scaleX(0)";
        borderBottom.style.transition = "transform 0.5s ease";
        borderBottom.classList.add("glow-on-hover");
        item.appendChild(borderBottom);

        item.activateBorder = () => {
            borderBottom.style.transform = "scaleX(1)";
            item.classList.add("active");
        };

        item.deactivateBorder = () => {
            borderBottom.style.transform = "scaleX(0)";
            item.classList.remove("active");
        };
    });

    return () => {
        listItems.forEach((item) => {
            item.removeEventListener("mouseenter", item.activateBorder);
            item.removeEventListener("mouseleave", item.deactivateBorder);
        });
    };
};

export const activateBorder = (dataLink) => {
    const item = document.querySelector(`li[data-link='${dataLink}']`);
    if (item && item.activateBorder) {
        item.classList.add("scroll-active");
        item.activateBorder();
    }
};

export const deactivateBorder = (dataLink) => {
    const item = document.querySelector(`li[data-link='${dataLink}']`);
    if (item && item.deactivateBorder) {
        item.classList.remove("scroll-active");
        item.deactivateBorder();
    }
};

export const createScrollTrigger = (id, setCurrentTarget) => {
    ScrollTrigger.create({
        trigger: `#${id}`,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
            activateBorder(id);
            setCurrentTarget(id);
        },
        onLeave: () => {
            deactivateBorder(id);
        },
        onEnterBack: () => {
            activateBorder(id);
            setCurrentTarget(id);
        },
        onLeaveBack: () => {
            deactivateBorder(id);
        },
    });
};