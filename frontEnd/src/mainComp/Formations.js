import React from "react";
import { Link } from "react-router-dom";
import { FaUniversity } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";


const Formations = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col col-lg-6 p-5">
                    <div
                        className="card"
                        style={{ background: "none", border: "none" }}
                    >
                        <Link to={"/licence"} className="formation licence">
                            <FaSchool />
                            <p>
                                Diplôme Universitaire de la Licence
                                Professionnelle
                            </p>
                        </Link>
                    </div>
                </div>
                <div className="col col-lg-6 p-5">
                    <div
                        className="card"
                        style={{ background: "none", border: "none" }}
                    >
                        <Link to={"/licence"} className="formation master">
                            <FaUniversity />
                            <p>Diplôme Universitaire du Master Spécialisé</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Formations;
