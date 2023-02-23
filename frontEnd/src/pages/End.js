import React from "react";
import Button from "react-bootstrap/Button";
import GeneratePDFButton from "../userComp/PrintableForm";

const End = () => {
    return (
        <div
            className="container rounded p-5"
            style={{
                background: "#eee",
                boxShadow: "0 15px 16.83px 0.17px rgba(0, 0, 0, .1)",
            }}
        >
            <div className="d-flex flex-column">
                <p>
                    Votre Pré-inscription en ligne est bien enregistrée.Pour
                    qu'elle soit définitive veuillez imprimer le formulaire de
                    pré-inscription et déposer votre dossier complet auprès de
                    votre établissement muni des pièces justificatives.
                </p>
                <p>
                    votre code d'acces :{" "}
                    <span className="text-danger">
                        {sessionStorage.getItem("code")}
                    </span>
                </p>

                <div className="row justify-content-center">
                    <div className="col col-lg-2 m-1 text-center ">
                        <GeneratePDFButton
                            code={sessionStorage.getItem("code")}
                        />
                    </div>
                    <div className="col col-lg-2 m-1 text-center ">
                        <a
                            className="col col-lg-2 m-1 text-center "
                            href="http://localhost:3500/media/piece-a-fournir.pdf"
                            rel="noreferrer"
                        >
                            <Button
                                variant="light"
                                style={{
                                    boxShadow:
                                        "0 1px 16.83px 0.17px rgba(0, 0, 0, .1)",
                                }}
                            >
                                Piece a fournir
                            </Button>
                        </a>
                    </div>
                    <div className="col col-lg-2 m-1 text-center ">
                        <a
                            className="col col-lg-2 m-1 text-center "
                            href="http://localhost:3500/media/ESTSB_Dates_à_retenir_2023.pdf"
                            rel="noreferrer"
                        >
                            <Button
                                variant="light"
                                style={{
                                    boxShadow:
                                        "0 1px 16.83px 0.17px rgba(0, 0, 0, .1)",
                                }}
                            >
                                Date a retenir
                            </Button>
                        </a>
                    </div>
                    <div className="col col-lg-2 m-1 text-center ">
                        <a
                            className="col col-lg-2 m-1 text-center "
                            href="http://localhost:3500/media/estsb-reglementation.pdf"
                            rel="noreferrer"
                        >
                            <Button
                                variant="light"
                                style={{
                                    boxShadow:
                                        "0 1px 16.83px 0.17px rgba(0, 0, 0, .1)",
                                }}
                            >
                                Reglement Interieur
                            </Button>
                        </a>
                    </div>
                    <div className="col col-lg-2 m-1 text-center ">
                        <a
                            className="col col-lg-2 m-1 text-center "
                            href="http://localhost:3500/media/ASSURANCE_2023.pdf"
                            rel="noreferrer"
                        >
                            <Button
                                variant="light"
                                style={{
                                    boxShadow:
                                        "0 1px 16.83px 0.17px rgba(0, 0, 0, .1)",
                                }}
                            >
                                Procedure d'assurance
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default End;
