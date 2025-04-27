import React from "react";
import profileImage from "../assets/img/profile.jpg";
import profileImage320w from "../assets/img/profile-320w.jpg";
import profileImage480w from "../assets/img/profile-480w.jpg";
import profileImage800w from "../assets/img/profile-800w.jpg";

const AboutMe = () => {
    return (
        <div id="aboutme" className="h-screen font-prata">
            <div className="flex flex-col sm:flex-row items-center justify-center h-full w-full absolute sm:relative xl:gap-20">
                <div className="z-2">
                    <img
                        className="h-auto w-[15rem] xl:w-[20.5rem] 2xl:w-[30rem] opacity-65"
                        src={profileImage}
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

                <div className="xl:text-left text-center text-slide flex-2 max-w-2xl 2xl:max-w-3xl">
                    <p className="xl:text-8xl 2xl:text-[7.5rem] text-4xl">Hi I'm Aaron</p>
                    <div className="flex flex-col sm:flex-row sm:gap-4">
                        <p className="2xl:text-xl">
                            Computer Science Major • Full-Stack Web Developer • Technical SEO Audits
                        </p>
                    </div>

                    <br />
                    <p>
                        I build dynamic web applications with a solid background in both frontend and backend
                        development. I work on scalable solutions and handle technical SEO to improve
                        performance and visibility. I'm open to opportunities and also accept commissions for
                        freelance projects.
                    </p>
                    <br />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <p className="2xl:text-xl">Languages:</p>
                            <p className="text-xl 2xl:text-2xl">Python, Php, Typescript, Javascript</p>
                        </div>
                        <div>
                            <p className="2xl:text-xl">Frameworks & Libraries:</p>
                            <p className="text-xl 2xl:text-2xl">Next.js, React.js, Laravel, Django, FastApi, TailwindCSS</p>
                        </div>
                        <div>
                            <p className="2xl:text-xl">Databases & Search:</p>
                            <p className="text-xl 2xl:text-2xl">MongoDB, MySQL, Elasticsearch</p>
                        </div>
                        <div>
                            <p className="2xl:text-xl">CMS & Platforms:</p>
                            <p className="text-xl 2xl:text-2xl">WordPress, HubSpot, Shopify</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;