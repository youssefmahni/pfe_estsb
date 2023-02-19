import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSearchLocation } from "react-icons/fa";

const UpperMenu = () => {
    return (
        <nav className="navbar upper">
            <div className="container-fluid">
                <a
                    className="nav-link"
                    target={"_blank"}
                    rel="noreferrer"
                    href="http://www.ucd.ac.ma/en/"
                >
                    l'univercite
                </a>
                <div className="d-flex ">
                    <a
                        className="nav-link me-4"
                        target={"_blank"}
                        rel="noreferrer"
                        href="https://web.facebook.com/BDE.ESTSB/"
                    >
                        <FaFacebook />
                    </a>
                    <a
                        className="nav-link me-4"
                        href="https://www.google.com.mx/maps/search/est+sidi+bennour/@32.6525096,-8.4399575,14.89z"
                    >
                        <FaSearchLocation />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default UpperMenu;
