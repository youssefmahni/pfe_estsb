import React from "react";
import { Link } from "react-router-dom";


const Formations = () => {
    return (
        <div className="container">
            <div className="row">
                {/* <div className="col col-lg-6 p-5">
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
                </div> */}
                <div className="col col-lg-6 p-5  d-flex justify-content-center">
                    <div class="cardd">
                        <div class="card-details">
                            <p class="text-title">
                                Diplôme Universitaire de la Licence
                                Professionnelle
                            </p>
                            <p class="text-body">
                                Un diplôme de l'enseignement supérieur de niveau
                                bac+3 qui permet d'acquérir des connaissances et
                                compétences spécialisées dans un domaine
                                professionnel précis, afin de faciliter
                                l'insertion professionnelle des étudiants.
                            </p>
                        </div>
                        <Link
                            to={"/licence"}
                            className="formation card-button "
                        >
                            <p>Plus d'info</p>
                        </Link>
                    </div>
                </div>

                <div className="col col-lg-6 p-5  d-flex justify-content-center">
                    <div class="cardd">
                        <div class="card-details">
                            <p class="text-title">
                                Diplôme Universitaire du Master Spécialisé
                            </p>
                            <p class="text-body">
                                Un diplôme de l'enseignement supérieur de niveau
                                bac+5 qui permet aux étudiants de se spécialiser
                                dans un domaine professionnel spécifique, en
                                acquérant des compétences pointues et en
                                approfondissant leurs connaissances dans ce
                                domaine.
                            </p>
                        </div>
                        <Link to={"/master"} className="formation card-button ">
                            <p>Plus d'info</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Formations;
