import React from "react";
import { Link } from "react-router-dom";

const MasterTab = () => {
    return (
        <div className="container shadow">
            <div className="row justify-content-center mt-5 ">
                <div className="col col-lg-6 p-3">
                    <div className="card">
                        <img
                            src={"http://localhost:3500/media/mastergi.jpg"}
                            className="card-img-top"
                            alt="..."
                            style={{ height: "20rem", width: "auto" }}
                        />

                        <div className="card-body">
                            <h1
                                className="card-title"
                                style={{ fontWeight: "170" }}
                            >
                                Masters Génie Informatique
                            </h1>
                        </div>
                        <ul className="list-group list-group-flush">
                            <Link to={"/estsb/mcstc"} className="link">
                                <li className="list-group-item item">
                                    MCSTC : MASTER CYBER SECURITE ET TECHNOLOGIES CLOUD
                                </li>
                            </Link>
                            <Link to={"/estsb/misitw"} className="link">
                                <li className="list-group-item item">
                                    MISITW : MASTER INGENIERIE DES SYSTEMES
                                    INFORMATIQUES ET TECHNOLOGIES WEB
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div className="col col-lg-6 p-3">
                    <div className="card">
                        <img
                            src={"http://localhost:3500/media/mastertm.jpg"}
                            className="card-img-top"
                            alt="..."
                            style={{ height: "20rem", width: "auto" }}
                        />

                        <div className="card-body">
                            <h1
                                className="card-title"
                                style={{ fontWeight: "170" }}
                            >
                                Masters Techniques de Management
                            </h1>
                        </div>
                        <ul className="list-group list-group-flush">
                            <Link to={"/estsb/mcca"} className="link">
                                <li className="list-group-item item">
                                    MCCA : MASTER COMPTABILITE, CONTROLE ET AUDIT
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MasterTab;
