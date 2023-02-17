import { useEffect, useState } from "react";
import Header from "./Header";

const PrintableForm = () => {
    const cin = localStorage.getItem("cin");
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:3500/getid", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ cin: cin }),
            });
            const data = await response.json();
            setUserData(data.response);
        };
        fetchData();
    }, [cin]);

    return (
        <div>
            <Header />
            <body className="d-flex flex-column align-items-center m-5">
                <h2>
                    Formulaire de préinscription {new Date().getFullYear()}-
                    {new Date().getFullYear() + 1}
                </h2>
                <br />
                <div class="container text-center border">
                    <div className="row border">
                        <h4>FILIÈRE DEMENDÉE</h4>
                    </div>
                    <div class="row">
                        <div class="col border">
                            {userData.licence || userData.master}
                        </div>
                    </div>

                    <div className="row border">
                        <h4>INFORMATIONS PERSONNELLES</h4>
                    </div>
                    <div class="row">
                        <div class="col border">Nom</div>
                        <div class="col border">{userData.nom}</div>
                    </div>
                    <div class="row">
                        <div class="col border">Prenom</div>
                        <div class="col border">{userData.prenom}</div>
                    </div>
                    <div class="row">
                        <div class="col border">Date de naissance</div>
                        <div class="col border">{userData.datenaissance}</div>
                    </div>
                    <div class="row">
                        <div class="col border">Lieu de naissance</div>
                        <div class="col border">{userData.ville}</div>
                    </div>
                    <div class="row">
                        <div class="col border">Sexe</div>
                        <div class="col border">{userData.sex}</div>
                    </div>
                    <div class="row">
                        <div class="col border">CIN</div>
                        <div class="col border">{userData.cin}</div>
                    </div>
                    <div class="row">
                        <div class="col border">Nationalite</div>
                        <div class="col border">{userData.nationalite}</div>
                    </div>
                    <div class="row">
                        <div class="col border">Telephone</div>
                        <div class="col border">{userData.phone}</div>
                    </div>
                    <div class="row">
                        <div class="col border">E-mail</div>
                        <div class="col border">{userData.email}</div>
                    </div>
                    <div className="row border">
                        <h4>FORMATIONS ACADÉMIQUES</h4>
                    </div>
                    <div class="row">
                        <div class="col border">Série du baccalauréat </div>
                        <div class="col border">{userData.seriebac}</div>
                    </div>
                    <div class="row">
                        <div class="col border">Année du baccalauréat</div>
                        <div class="col border">{userData.anneebac}</div>
                    </div>
                    <div class="row">
                        <div class="col border">Mention du baccalauréat </div>
                        <div class="col border">{userData.mentionbac}</div>
                    </div>
                    <div class="row">
                        <div class="col border">Dérnier diplôme </div>
                        <div class="col border">{userData.dernierdiplom}</div>
                    </div>
                    <div class="row">
                        <div class="col border">Année du dernier diplôme </div>
                        <div class="col border">{userData.anneediplom}</div>
                    </div>
                    <div class="row">
                        <div class="col border">
                            Spécialité du dernier diplôme
                        </div>
                        <div class="col border">
                            {userData.specialitediplom}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col border">
                            Nom de l'établissement du dernier diplôme
                        </div>
                        <div class="col border">{userData.etablissement}</div>
                    </div>
                </div>
            </body>
            <p className="m-5">
                Date : {new Date().getDay()}/{new Date().getMonth()}/
                {new Date().getFullYear()} à {new Date().getHours()}:
                {new Date().getMinutes()}
            </p>
        </div>
    );
};

export default PrintableForm;
