import React from "react";

import Java from "../assets/java.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import golang from "../assets/golang.webp";
import python from "../assets/python.jpg";
import cplusplus from "../assets/c++.png";
import mysql from "../assets/mysql.png";
import unity from "../assets/unity.webp";
import aws from "../assets/aws.png";
import springBoot from "../assets/springBoot.jpg";

const Experience = () => {
    const techs = [
        {
            id: 1,
            src: cplusplus,
            title: "C++",
            style: "shadow-sky-400",
        },
        {
            id: 2,
            src: python,
            title: "Python",
            style: "shadow-green-400",
        },
        {
            id: 3,
            src: html,
            title: "HTML",
            style: "shadow-orange-500",
        },
        {
            id: 4,
            src: css,
            title: "CSS",
            style: "shadow-blue-500",
        },
        {
            id: 5,
            src: javascript,
            title: "JavaScript",
            style: "shadow-yellow-500",
        },
        {
            id: 6,
            src: Java,
            title: "Java",
            style: "shadow-orange-500",
        },
        {
            id: 7,
            src: reactImage,
            title: "React",
            style: "shadow-blue-600",
        },
        {
            id: 8,
            src: golang,
            title: "Golang",
            style: "shadow-white",
        },
        {
            id: 9,
            src: mysql,
            title: "MySQL",
            style: "shadow-pink-400",
        },
        {
            id: 10,
            src: unity,
            title: "Unity",
            style: "shadow-gray-400",
        },
        {
            id: 11,
            src: aws,
            title: "AWS",
            style: "shadow-blue-400",
        },
        {
            id: 12,
            src: springBoot,
            title: "Spring Boot",
            style: "shadow-green-400",
        },
        
  ];

    return (
        <div
            name="professional skills"
            className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                        Professional Skills
                    </p>
                    <p className="py-6">These are the technologies I've worked with</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
                    {techs.map(({ id, src, title, style }) => {
                        // Define the icon size conditionally based on the id
                        const iconSize = id === 11 || id === 12 ? 'w-26 h-20' : 'w-20';

                        return (
                            <div
                                key={id}
                                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                            >
                                <img
                                    src={src}
                                    alt=""
                                    className={`${iconSize} mx-auto`}
                                />
                                <p className="mt-4">{title}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Experience;