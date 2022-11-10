import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer class="footer" className="p-4 has-background-grey-lighter">
            <div class="content has-text-centered">
                <p>
                    This website was developed by{" "}
                    <a href="https://github.com/DotMarcoVA" target="_blank">
                        DotMarcoVA / Marco Valdez Avila
                    </a>
                    . More forms of contact and details about the construction of this site, see the <Link to="/about">About this Site</Link>{" "}
                    section.
                </p>
            </div>
        </footer>
    );
}
