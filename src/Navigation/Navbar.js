import React from "react";
import "../index.css";
import "./Navbar.css";
import ClockIcon from "../Images/ClockIcon.png";
import { Link } from 'react-scroll'

const Navbar = () => {
    return (

        <div className="navbar navbar-expand-lg align-bottom">
            <span className="navbar-title">
                <img src={ClockIcon} className="Navbar-clockIcon" alt="clock icon" />
                    Is it time to sell?
            </span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav ml-auto pr-5">
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            to="HomePage-steps"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            How It Works
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            to="HomePage-FAQ"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            FAQ
                            </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;