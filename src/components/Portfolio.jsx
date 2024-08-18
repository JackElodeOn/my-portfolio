import React from "react";
import turingmedical from "../assets/portfolio/turingmedical.png";
import questToAtlantis from "../assets/portfolio/questToAtlantis.png";
import onlineShopping from "../assets/portfolio/onlineShopping.png";
import getTotheChoppa from "../assets/portfolio/getTotheChoppa.png";
import matroids from "../assets/portfolio/matroids.png";
import raspberrypi from "../assets/portfolio/raspberrypi.png";

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: turingmedical,
            demoLink: "",
            codeLink: "",
        },
        {
            id: 2,
            src: getTotheChoppa,
            demoLink: "https://youtu.be/bMwVmS2Kmnk",
            codeLink: "https://github.com/aarpyy/VG2_FPSGame",
        },
        {
            id: 3,
            src: questToAtlantis,
            demoLink: "https://yingxu.itch.io/450finalproject",
            codeLink: "https://github.com/YingXu001/CSE_450A_Final_Project",
        },
        {
            id: 4,
            src: onlineShopping,
            demoLink: "http://onlineshopppingsystem.xinyujackli.com/",
            codeLink: "https://github.com/JackElodeOn/Online-Shopping-System",
        },
        {
            id: 5,
            src: matroids,
            demoLink: "",
            codeLink: "",
        },
        {
            id: 6,
            src: raspberrypi,
            demoLink: "",
            codeLink: "https://dokuwiki.sewanee.edu/doku.php?id=pdc:surf22",
        },
    ];

    return (
        <div
            name="experiences"
            className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Experiences
                    </p>
                    <p className="py-6">Check out some of my work right here!</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, src, demoLink, codeLink }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img
                                src={src}
                                alt=""
                                className="rounded-md duration-200 hover:scale-105"
                            />
                            <div className="flex items-center justify-center">
                                <a 
                                    href={demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                                >
                                    Demo
                                </a>
                                <a
                                    href={codeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
                                >
                                    Code
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
