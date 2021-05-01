import React from "react";
import "../../../styles/skillsPage.css";
import "../../../styles/common.css";
const skillsJson = require("../../../data/skills.json");

const SkillsCards = () => {
    let finalReturn = skillsJson.map((skill) => {
        let skillImg = require(`../../../images/${skill.skillImage}.png`).default;
        return (
            <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
                <div className="project-card text-center bgp">
                    <div className="skill-icon mb-20">
                        <img className="skill-img" src={skillImg} />
                    </div>
                    <div className="skill-project">
                        <h4 className="mb-3">{skill.skillName}</h4>
                        <p>129 projects</p>
                    </div>
                </div>
            </div>
        );
    });

    return finalReturn;
};
const SkillsPage = () => {
    return (
        <div className="services-area section-ptb bgs" id='skills'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-md-8">
                        <div className="color-white text-center">
                            <h3 className="section-name pc">SERVICES</h3>
                            <h2>What I Am Great At</h2>
                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupida non proident, sunt in culpa qui officia
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row service-row mt-45">
                    <SkillsCards />
                </div>
            </div>
            <div className="counter-area mt-45">
                <div id='experiance-container' className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-6 mb-4 mb-md-0">
                            <div className="counter-item text-center">
                                <h4 className="pc">3</h4>
                                <p>Years of Experience</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-4 mb-md-0">
                            <div className="counter-item text-center">
                                <h4 className="pc">10+</h4>
                                <p>Satisfied Customers</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-4 mb-md-0">
                            <div className="counter-item text-center">
                                <h4 className="pc">10+</h4>
                                <p>Projects Created </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsPage;
