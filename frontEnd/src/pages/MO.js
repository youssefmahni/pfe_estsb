import React from "react";
import NavBar from "../mainComp/NavBar";
import Footer from "../mainComp/Footer";
import UpperMenu from "../mainComp/UpperMenu";
import Copyright from "../mainComp/Copyright";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const MO = () => {
    const applyMo = () => {
        sessionStorage.setItem("licence", "management des organisations");
        sessionStorage.setItem("master", null);
        window.location.href = "/application";
    };
    return (
        <div>
            <UpperMenu />
            <NavBar />
            <div className="container">
                <h1 style={{ textAlign: "center", margin: "40px" }}>
                    MANAGEMENT DES ORGANISATIONS
                </h1>
                <div className="row d-flex justify-content-center">
                    <div className="col col-lg-8 p-3 mt-5">
                        <Tabs
                            defaultActiveKey="objectifs"
                            id="uncontrolled-tab-example"
                            justify
                        >
                            <Tab
                                eventKey="objectifs"
                                title="Objectifs et Débouchés"
                                className="p-4"
                            >
                                <div>
                                    <h3>Objectifs</h3>
                                    <p>
                                        Former en 1 an des diplômés
                                        immédiatement opérationnels dans le
                                        domaine professionnel, capables de
                                        concevoir, réaliser, adapter, faire
                                        évoluer et exploiter des produits
                                        informatiques au sein des entreprises.
                                    </p>
                                    <p>
                                        Passage des examens de certification
                                        CISCO Académique
                                    </p>
                                    <p>
                                        Passage des examens de certification
                                        Microsoft (en option)
                                    </p>
                                    <h3>Débouchés</h3>
                                    <p>
                                        Professionnel en informatique qui peut
                                        mettre ses compétences au service de:
                                    </p>
                                    <ul>
                                        <li>
                                            Petites, moyennes et grandes
                                            entreprises;
                                        </li>
                                        <li>
                                            Petites, moyennes et grandes
                                            entreprises;
                                        </li>
                                        <li>
                                            Petites, moyennes et grandes
                                            entreprises;
                                        </li>
                                        <li>
                                            Petites, moyennes et grandes
                                            entreprises;
                                        </li>
                                    </ul>
                                    <h3>Modalités de sélection</h3>
                                    <ul>
                                        <li>Bac +2 Informatique (DUT, BTS);</li>
                                        <li>
                                            Licence ou Bac +2 en sciences et
                                            technologies orientées informatique.
                                        </li>
                                    </ul>
                                </div>
                            </Tab>
                            <Tab
                                eventKey="contact"
                                title="Contact"
                                className="p-4"
                            >
                                <div>
                                    <h3>Condidature</h3>
                                    <Button
                                        variant="secondary"
                                        onClick={applyMo}
                                    >
                                        Pre-inscription
                                    </Button>
                                    <br />
                                    <h3>Contact</h3>
                                    <ul>
                                        <li>
                                            Responsable de la formation: Mohamed
                                            EL KAMILI
                                        </li>
                                        <li>
                                            Adresse: Ecole Supérieure de
                                            Technologie , Route d'Eljadida, KM
                                            7, CASABLANCA, Maroc
                                        </li>
                                    </ul>
                                </div>
                            </Tab>
                            <Tab
                                eventKey="programme"
                                title="Programme"
                                className="row d-flex p-4"
                            >
                                <div className="col  border m-2">
                                    <h3>SEMESTRE 1</h3>
                                    <div className="card mb-3">
                                        <div className="card-header">
                                            Header
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Dark card title
                                            </h5>
                                            <p className="card-text">
                                                Some quick example text to build
                                                on the card title and make up
                                                the bulk of the card's content.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card mb-3">
                                        <div className="card-header">
                                            Header
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Dark card title
                                            </h5>
                                            <p className="card-text">
                                                Some quick example text to build
                                                on the card title and make up
                                                the bulk of the card's content.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card mb-3">
                                        <div className="card-header">
                                            Header
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Dark card title
                                            </h5>
                                            <p className="card-text">
                                                Some quick example text to build
                                                on the card title and make up
                                                the bulk of the card's content.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card mb-3">
                                        <div className="card-header">
                                            Header
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Dark card title
                                            </h5>
                                            <p className="card-text">
                                                Some quick example text to build
                                                on the card title and make up
                                                the bulk of the card's content.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col border m-2">
                                    <h3>SEMESTRE 2</h3>
                                    <div className="card mb-3">
                                        <div className="card-header">
                                            Header
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Dark card title
                                            </h5>
                                            <p className="card-text">
                                                Some quick example text to build
                                                on the card title and make up
                                                the bulk of the card's content.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card mb-3">
                                        <div className="card-header">
                                            Header
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Dark card title
                                            </h5>
                                            <p className="card-text">
                                                Some quick example text to build
                                                on the card title and make up
                                                the bulk of the card's content.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card mb-3">
                                        <div className="card-header">
                                            Header
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Dark card title
                                            </h5>
                                            <p className="card-text">
                                                Some quick example text to build
                                                on the card title and make up
                                                the bulk of the card's content.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                    <div className="col col-lg-4 mt-3 p-5">
                        <div className="card m-1">
                            <div className="card-body">
                                <h3
                                    className="card-title"
                                    style={{ fontWeight: "500" }}
                                >
                                    Génie Informatique
                                </h3>
                            </div>
                            <ul className="list-group list-group-flush">
                                <Link to={"/estsb/cstc"} className="link">
                                    <li className="list-group-item item">
                                        CSTC : CYBER SECURITE ET TECHNOLOGIES
                                        CLOUD
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
                        <div className="card m-1">
                            <div className="card-body">
                                <h3
                                    className="card-title"
                                    style={{ fontWeight: "500" }}
                                >
                                    Techniques de Management
                                </h3>
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
                                        MO : MANAGEMENT DES ORGANISATIONS.
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Copyright />
        </div>
    );
};

export default MO;
