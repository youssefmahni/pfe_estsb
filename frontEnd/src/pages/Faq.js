import React from "react";
import NavBar from "../mainComp/NavBar";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Question from "../mainComp/Question";
import Footer from "../mainComp/Footer";
import UpperMenu from "../mainComp/UpperMenu";
import Copyright from "../mainComp/Copyright";

const Faq = () => {
    const [isOpen0, setIsOpen0] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const questions = [
        "Quelles sont les formations proposées par votre université ?",
        "Quel est le processus de candidature pour votre université ?",
        "Quels types d'aide financière sont disponibles pour les étudiants ?",
        "Le logement étudiant est-il disponible dans votre établissement ?",
        "Quels sont les débouchés professionnels pour les diplômés de votre université ?",
        "Quels sont les débouchés professionnels pour les diplômés de votre université ?",
    ];
    const answers = [
        "answer 1",
        "answer 2",
        "answer 3",
        "answer 4",
        "answer 5",
    ];

    return (
        <div>
            <div>
                <UpperMenu />
                <NavBar />
                <div className="container">
                    <div className="row justify-content-center mb-5 mt-5">
                        <Card
                            style={{
                                padding: "0rem",
                                boxShadow:
                                    "0 15px 16.83px 0.17px rgba(0, 0, 0, .1)",
                            }}
                            className="col-lg-10"
                        >
                            <Card.Header>FAQ </Card.Header>
                            <Card.Body className="ms-4">
                              <br />
                                <Question
                                    open={isOpen0}
                                    setOpen={setIsOpen0}
                                    question={questions[0]}
                                    answer={answers[0]}
                                />
                                <br />
                                <Question
                                    open={isOpen1}
                                    setOpen={setIsOpen1}
                                    question={questions[1]}
                                    answer={answers[1]}
                                />
                                <br />
                                <Question
                                    open={isOpen2}
                                    setOpen={setIsOpen2}
                                    question={questions[2]}
                                    answer={answers[2]}
                                />
                                <br />
                                <Question
                                    open={isOpen3}
                                    setOpen={setIsOpen3}
                                    question={questions[3]}
                                    answer={answers[3]}
                                />
                                <br />
                                <Question
                                    open={isOpen4}
                                    setOpen={setIsOpen4}
                                    question={questions[4]}
                                    answer={answers[4]}
                                />
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <Footer />
            <Copyright />
        </div>
    );
};

export default Faq;
