import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const ProjectModal = ({ project, onClose }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        // Animate modal appearance
        gsap.fromTo(
            modalRef.current,
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.5, ease: "power4.out" }
        );
    }, []);

    const handleClose = () => {
        // Animate modal disappearance
        gsap.to(modalRef.current, {
            scale: 0.8,
            opacity: 0,
            duration: 0.5,
            ease: "power4.in",
            onComplete: onClose, // Close modal after animation
        });
    };

    if (!project) return null;

    return (
        <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-10"
            onClick={handleClose}
        >
            <div
                ref={modalRef}
                className="modal-content bg-black p-5 rounded-lg max-w-lg w-full"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
                <button
                    className="absolute top-2 right-2 text-black text-xl"
                    onClick={handleClose}
                >
                    &times;
                </button>
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.badges.map((badge, index) => (
                        <span
                            key={index}
                            className="border-2 text-black text-xs px-2 py-1 rounded-full"
                        >
                            {badge}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;