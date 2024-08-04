import React from "react";

const About = () => {
    return (
        <div
            name="about"
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </p>
                </div>

                <p className="text-xl mt-20">
                    Hello there! My name is Xinyu Li. You can call me Jack! I graduated from Washiongton University in St. Louis in May, 2024, with both a Master's and Bachelor's in Computer Science.
                    I am proficient in C++, Python, React, JavaScript, MySQL, and Unity. I have done an internship at Turing Medical in the summer of 2023,
                    where I worked as a full stack software engineer and built the company's first customer portal using Golang and MySQL. 
                    Additionaly, I participated in three research projects with my professors. During these expereinces, I built Raspberry Pi clusters, conducted various testings
                    with parallel programming, and wrote Python scripts to generate complex mathemathical matrices. I am passionate about software engineering, 
                    web development, and video game development, and I am seeking job opportunities in these areas.
                </p>

                <br />

                <p className="text-xl">
                    In my free time, I enjoy watching movies, playing video games, and cooking. I often develop video games with my friends. Ultimately, my goal is to become
                    a gameplay engineer and make awesome games! I excel at working both independently and in team, and I thrive on tackling challenges and bringing 
                    innovative ideas to my work. I am a great self-learner with a determined, hard-working spirit.
                </p>
            </div>
        </div>
    );
};

export default About;