import React from "react";
import mainLogo from "../assets/29.png";

export default function home() {
    return (
        <div className="box">
            <div className="container ">
                <h1 className="title has-text-centered">Welcome to MovieWatcher!</h1>
                {/* <h2 className="subtitle has-text-centered"></h2> */}

                <div className="container is-flex is-justify-content-space-evenly">
                    <figure className="image is-128x128 is-inline-block">
                        <img className="" src={mainLogo} />
                    </figure>
                </div>

                <div className="content mt-2">
                    <p className="subtitle is-5">
                        In this WebApp you can find information about many movies, such as their release date, overview, genres and promotional
                        poster. Navigate across the site using the navbar to find what you are interested in. Thank you for your visit and I hope
                        this app will be useful to you
                    </p>
                </div>
            </div>
        </div>
    );
}
