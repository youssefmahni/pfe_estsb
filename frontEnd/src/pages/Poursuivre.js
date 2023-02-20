import React, { useState, useEffect } from "react";
import Header from "../userComp/Header";
import Copyright from "../mainComp/Copyright";
import UpperMenu from "../mainComp/UpperMenu";

const Poursuivre = () => {
    const [user, setUser]= useState("");
    const [etat, setEtat] = useState("");
    useEffect(() => {
        async function fetchData() {
            try {
                const responce = await fetch(
                    "http://localhost:3500/account",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${sessionStorage.getItem(
                                "token"
                            )}`,
                        },
                    }
                );
                const data = await responce.json();
                setUser(`${data.response.nom} ${data.response.prenom}`);
                setEtat(data.response.etat);
            } catch (error) {
                window.location.href = "/missing";
            }
        }
        fetchData();
    }, []);
    return (
        <div>
            <UpperMenu />
            <Header />
            <div
                className="container rounded p-5"
                style={{ background: "#eee" }}
            >
                <h1>Condidat : {user}</h1>

                <div className="row">
                    <h4 className="col pt-4">Etat de condidature : {etat}</h4>
                    <div className="col">
                        <div class="loader"></div>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <Copyright />
            </div>
        </div>
    );
};

export default Poursuivre;
