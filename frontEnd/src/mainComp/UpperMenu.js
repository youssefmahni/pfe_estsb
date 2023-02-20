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
                    univesite
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
                        href="https://www.google.com.mx/maps/place/EST-Ecole+Sup%C3%A9rieure+de+Technologie+SB/@32.6486208,-8.4324086,15z/data=!4m15!1m8!3m7!1s0xdaf28e15c89e487:0x274db028f84d4095!2sSidi+Bennour!3b1!8m2!3d32.6521619!4d-8.4266472!16s%2Fm%2F09rtwbv!3m5!1s0xdaf299e18cb8409:0xb0ac92f5afdcef5d!8m2!3d32.6486208!4d-8.4236539!16s%2Fg%2F11h565y6w8"
                    >
                        <FaSearchLocation />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default UpperMenu;
