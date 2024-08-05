import React from "react";
import turingmedical from "../assets/portfolio/turingmedical.png";
import questToAtlantis from "../assets/portfolio/questToAtlantis.png";
import matroids from "../assets/portfolio/matroids.png";
import getTotheChoppa from "../assets/portfolio/getTotheChoppa.png";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import raspberrypi from "../assets/portfolio/raspberrypi.png";

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: turingmedical,
            codeLink: "https://google.com",
        },
        {
            id: 2,
            src: getTotheChoppa,
            codeLink: "https://github.com/aarpyy/VG2_FPSGame",
        },
        {
            id: 3,
            src: questToAtlantis,
            codeLink: "https://github.com/YingXu001/CSE_450A_Final_Project",
        },
        {
            id: 4,
            src: reactSmooth,
            codeLink: "https://google.com",
        },
        {
            id: 5,
            src: matroids,
            codeLink: "https://google.com",
        },
        {
            id: 6,
            src: raspberrypi,
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
                    <p className="py-6">Check out some of my work right here</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, src, codeLink }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img
                                src={src}
                                alt=""
                                className="rounded-md duration-200 hover:scale-105"
                            />
                            <div className="flex items-center justify-center">
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                    Demo
                                </button>
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
