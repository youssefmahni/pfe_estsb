import React from "react";
import NavBar from "../mainComp/NavBar";
import Footer from "../mainComp/Footer";
import UpperMenu from "../mainComp/UpperMenu";
import Copyright from "../mainComp/Copyright";

const Presentation = () => {
    return (
        <div>
            <UpperMenu />
            <NavBar />
            
            <div className="container mt-5">
                <div className="row d-flex justify-content-center shadow">
                    <div className="col col-lg-8 d-flex flex-column align-items-center p-5 m-3   ">
                        <h1>PRESENTATION</h1>
                        <img
                            src="http://localhost:3500/media/estsbPhoto.jpeg"
                            alt="ecole logo"
                            style={{ height: "auto", width: "100%" }}
                            className="mb-5 mt-5"
                        />
                        <p>
                            ( EST Sidi Bennour ou ESTS Sidi Bennour ), est un
                            établissement public d’enseignement supérieur à
                            finalité de formation des Techniciens Supérieurs.
                            Elle a été créée en Août 2016 par le Ministère de
                            l’Enseignement Supérieur, de la Formation des Cadres
                            et de la Recherche Scientifique du Royaume du Maroc
                        </p>
                        <p>
                            L’Ecole Supérieure de Technologie Sidi Bennour
                            (ESTSB) est une composante de l’Université Chouaib
                            Doukkali d’El Jadida. Sa vocation est de former des
                            Techniciens Supérieurs polyvalents, hautement
                            qualifiés et immédiatement opérationnels après leur
                            sortie de l’Ecole en tant que collaborateurs
                            d’ingénieurs et de managers. Sont admis à l’ESTSB,
                            les bacheliers de l’enseignement secondaire
                            technique, scientifique et tertiaire. L’admission à
                            l’Ecole (au de Diplôme Universitaire de Technologie
                            « DUT ») se fait par voie de sélection par ordre de
                            mérite après une présélection sur la base des notes
                            obtenues au baccalauréat. Les candidats doivent être
                            âgés de 22 ans au plus au 31 Décembre de l’année du
                            concours et doivent déposer leurs dossiers de
                            pré-inscription avant le 30 Juin de chaque année
                            universitaire.
                        </p>
                        <h2>Orientation appliquée de l’enseignement</h2>
                        <p>
                            La formation appliquée à l’ESTSB est largement
                            tournée vers les Technologies d’Information et de
                            Communication, les Techniques de Gestion, les
                            langues vivantes, les Systèmes et Réseaux
                            Informatiques, les conceptions et les réalisations
                            informatiques, c’est pourquoi ses programmes ont
                            toujours le souci de répondre aux exigences et aux
                            attentes de l’environnement socio-économique de
                            l’Ecole et font appel à des méthodes pédagogiques
                            actives et évoluées.
                        </p>
                        <p>
                            Les programmes d’enseignement comportent des Cours
                            magistraux, des Travaux Pratiques (TP), des Travaux
                            Dirigés (TD) et des Dossiers et Travaux de
                            Réalisation, des Projets de Fin d’Etude, des Stages
                            d’Initiation et des Stages de Stages Techniques dans
                            les entreprises, les organismes
                            socio-professionnels, les collectivités locales et
                            les administrations publiques.
                        </p>
                        <h2>Durée des études</h2>
                        <p>
                            La durée des études est de deux années
                            universitaires avec 16 modules d’enseignement. La
                            première année s’étale sur 32 semaines suivies de
                            quatre semaines de stage d’initiation après la fin
                            de S2 et avant le démarrage de S3 dans l’entreprise
                            en Juillet ou Aout à raison de 24 jours avec un
                            rapport et une soutenance. La deuxième année est de
                            36 semaines dont 8 semaines de stage technique et
                            dispensé à raison de 48 jours pour 36 heures par
                            semaine en moyenne avec un rapport et une
                            soutenance.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
            <Copyright />
        </div>
    );
};

export default Presentation;
