import React from "react";

const Contacts = () => {
    return (
        <div
            id="contacts"
            className="h-screen font-prata p-10 slide-text flex flex-col items-center justify-center"
        >
            <p className="text-center xl:text-3xl text-2xl contact-slide select-none cursor-default">
                connect with me
            </p>
            <p className="transform transition-transform duration-300 hover:scale-110 select-text">
                <a
                    className="hover:underline text-2xl underline"
                    href="mailto:agaloos.aaronbruce@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    agaloos.aaronbruce@gmail.com
                </a>
            </p>
        </div>
    );
};

export default Contacts;