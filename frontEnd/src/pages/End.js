import React from 'react'
import Button from "react-bootstrap/Button";

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
                  votre code d'acces : <span className="text-danger">000</span>{" "}
              </p>

              <div className="row justify-content-center">
                  <div className="col col-lg-2 m-1 text-center ">
                      <Button
                          variant="light"
                          style={{
                              boxShadow:
                                  "0 1px 16.83px 0.17px rgba(0, 0, 0, .1)",
                          }}
                      >
                          Formulaire de preinscription
                      </Button>
                  </div>
                  <div className="col col-lg-2 m-1 text-center ">
                      <Button
                          variant="light"
                          style={{
                              boxShadow:
                                  "0 1px 16.83px 0.17px rgba(0, 0, 0, .1)",
                          }}
                      >
                          Piece a fournir
                      </Button>
                  </div>
                  <div className="col col-lg-2 m-1 text-center ">
                      <Button
                          variant="light"
                          style={{
                              boxShadow:
                                  "0 1px 16.83px 0.17px rgba(0, 0, 0, .1)",
                          }}
                      >
                          Date a retenir
                      </Button>
                  </div>
                  <div className="col col-lg-2 m-1 text-center ">
                      <Button
                          variant="light"
                          style={{
                              boxShadow:
                                  "0 1px 16.83px 0.17px rgba(0, 0, 0, .1)",
                          }}
                      >
                          Reglement Interieur
                      </Button>
                  </div>
                  <div className="col col-lg-2 m-1 text-center ">
                      <Button
                          variant="light"
                          style={{
                              boxShadow:
                                  "0 1px 16.83px 0.17px rgba(0, 0, 0, .1)",
                          }}
                      >
                          Procedure d'assurance
                      </Button>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default End