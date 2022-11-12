import React from "react";

export default function About() {
    return (
        <div className="box">
            <div className="container ">
                <h1 className="title has-text-centered">Welcome to my WebApp</h1>
                <h2 className="subtitle has-text-centered">An academic project</h2>

                <div className="container is-flex is-justify-content-space-evenly">
                    <figure className="image is-128x128 is-inline-block">
                        <img className="" src="https://cdn-icons-png.flaticon.com/512/732/732212.png?w=360" />
                    </figure>
                    <figure className="image is-128x128 is-inline-block">
                        <img className="" src="https://logospng.org/download/css-3/logo-css-3-2048.png" />
                    </figure>
                    <figure className="image is-128x128 is-inline-block">
                        <img className="" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" />
                    </figure>
                    <figure className="image is-128x128 is-inline-block">
                        <img
                            className=""
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                        />
                    </figure>
                </div>

                <div className="content mt-2">
                    <p className="subtitle is-5">
                        This WebApp was developed as an academic project for Kata FrontEnd in Dev.F on November 2022. It was created using
                        principally HTML, CSS (Using the bulma.io framework) and JavaScript through ReactJS. This project represents all i have
                        learned along the course.
                        <br></br>
                        All the source code of this project can be found{" "}
                        <a href="https://github.com/DotMarcoVA/IMBDProject" target="_blank">
                            here
                        </a>
                        <br></br>
                        This site was developed by DotMarcoVA / Marco Valdez Avila. U can find me through{" "}
                        <a href="https://github.com/DotMarcoVA" target="_blank">
                            Github
                        </a>{" "}
                        or in this <a href="mailto: antem.marco@gmail.com">Mail</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
