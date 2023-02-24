import React from "react";
import { Link } from "react-router-dom";

const LicenceTab = () => {
    return (
        <div className="container shadow">
            <div className="row justify-content-center mt-5 ">
                <div className="col col-lg-6 p-3">
                    <div className="card">
                        <img
                            src={"http://localhost:3500/media/laptop.jpeg"}
                            className="card-img-top"
                            alt="..."
                            style={{ height: "20rem", width: "auto" }}
                        />

                        <div className="card-body">
                            <h1
                                className="card-title"
                                style={{ fontWeight: "170" }}
                            >
                                Licences Génie Informatique
                            </h1>
                            <p className="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <Link to={"/estsb/cstc"} className="link">
                                <li className="list-group-item item">
                                    CSTC : CYBER SECURITE ET TECHNOLOGIES CLOUD
                                </li>
                            </Link>
                            <Link to={"/estsb/isitw"} className="link">
                                <li className="list-group-item item">
                                    ISITW : INGENIERIE DES SYSTEMES
                                    INFORMATIQUES ET TECHNOLOGIES WEB
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div className="col col-lg-6 p-3">
                    <div className="card">
                        <img
                            src={"http://localhost:3500/media/bisness.jpeg"}
                            className="card-img-top"
                            alt="..."
                            style={{ height: "20rem", width: "auto" }}
                        />

                        <div className="card-body">
                            <h1
                                className="card-title"
                                style={{ fontWeight: "170" }}
                            >
                                Licences Techniques de Management
                            </h1>
                            <p className="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <Link to={"/estsb/cca"} className="link">
                                <li className="list-group-item item">
                                    CCA : COMPTABILITE, CONTROLE ET AUDIT
                                </li>
                            </Link>
                            <Link to={"/estsb/fba"} className="link">
                                <li className="list-group-item item">
                                    FBA : FINANCE, BANQUE ET ASSURANCE
                                </li>
                            </Link>
                            <Link to={"/estsb/gcf"} className="link">
                                <li className="list-group-item item">
                                    GCF : GESTION COMPTABLE ET FINANCIERE
                                </li>
                            </Link>
                            <Link to={"/estsb/mo"} className="link">
                                <li className="list-group-item item">
                                    MO : MANAGEMENT DES ORGANISATIONS
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LicenceTab;
