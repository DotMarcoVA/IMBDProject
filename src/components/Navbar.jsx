import React from "react";
import mainLogo from "../assets/29.png";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header>
            <nav class="navbar is-black" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <Link class="navbar-item" to="/">
                        <img src={mainLogo} width="" height="" />
                    </Link>

                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                        <Link to="/" class="navbar-item">
                            Home
                        </Link>

                        <Link to="/search" class="navbar-item">
                            Search
                        </Link>

                        <Link to="/about" class="navbar-item">
                            About this Site
                        </Link>

                        {/* <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">More</a>

                        <div class="navbar-dropdown">
                            <a class="navbar-item">About this Site</a>
                            <a class="navbar-item">Contact</a>
                            <hr class="navbar-divider" />
                            <a class="navbar-item">Report an issue</a>
                        </div>
                    </div> */}
                    </div>

                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="buttons">
                                {/* <a class="button is-primary">
                                <strong>Sign up</strong>
                            </a> */}
                                <Link to="/login" class="button is-light">
                                    Log in
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
